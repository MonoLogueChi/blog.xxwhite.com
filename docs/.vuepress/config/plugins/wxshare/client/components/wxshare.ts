import { defineComponent, h, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { usePageFrontmatter } from "@vuepress/client";
// @ts-ignore
import { checkIsMobile } from "vuepress-shared/client";

import type { VNode } from "vue";
import { WxSharePluginOptions } from "../../node";

// @ts-ignore
const wspo = WSPO as WxSharePluginOptions;

export default defineComponent({
  setup() {
    const route = useRoute();
    const frontmatter = usePageFrontmatter();
    const needIcon = ref(false);
    const updateMobile = (): void => {
      needIcon.value = !(
        checkIsMobile(navigator.userAgent) ||
        (/MicroMessenger/i.test(navigator.userAgent.toLowerCase()) &&
          !wspo.directConnection)
      );
    };

    const url = ref(""),
      title = ref(),
      desc = ref(),
      imgUrl = wspo.imgUrl;

    const setData = (path: string) => {
      url.value = wspo.host + path;
      title.value =
        frontmatter.value.title || route.meta.title || document.title;
      desc.value =
        frontmatter.value.wxdescription ||
        wspo.desc ||
        frontmatter.value.description?.substring(0, 60);
    };

    watch(
      () => route.path,
      async (path) => {
        setData(path);
      }
    );

    const clickedWxShareButton = () => {
      let href = wspo.redirectApi || "";
      href += `?url=${url.value}`;
      href += `&title=${title.value}`;
      href += `&desc=${desc.value}`;
      href += `&imgUrl=${imgUrl}`;
      window.location.href = href;
    };

    onMounted(() => {
      updateMobile();
      setData(route.path);
      if (wspo.directConnection === true) {
        if (/MicroMessenger/i.test(navigator.userAgent.toLowerCase())) {
          fetch(
            wspo.signatureApi + encodeURIComponent(location.href.split("#")[0])
          )
            .then((res) => res.json())
            .then((res) => {
              if (res["code"] === 0) {
                const data = res["data"];
                const config = {
                  debug: false,
                  appId: data.appId,
                  timestamp: data.timestamp,
                  nonceStr: data.nonceStr,
                  signature: data.signature,
                  jsApiList: [
                    "updateAppMessageShareData",
                    "updateTimelineShareData",
                  ],
                };
                import("wechat-jssdk").then(({ default: WechatJSSDK }) => {
                  const wechatObj = new WechatJSSDK(config);
                  wechatObj.initialize().then((w) => {
                    w.callWechatApi("updateAppMessageShareData", {
                      title: title.value,
                      desc: desc.value,
                      link: url.value,
                      imgUrl: imgUrl,
                    });
                    w.callWechatApi("updateTimelineShareData", {
                      title: title.value,
                      desc: desc.value,
                      link: url.value,
                      imgUrl: imgUrl,
                    });
                  });
                });
              }
            });
        }
      }
    });

    return (): VNode[] => [
      needIcon.value
        ? h("button", {
            class: "icon iconfont icon-wechat back-to-top",
            style: "bottom: 10px; font-size: 26px;",
            onClick: clickedWxShareButton,
          })
        : h("div"),
    ];
  },
});
