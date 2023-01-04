import { defineComponent, h, onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePageFrontmatter } from "@vuepress/client";

import type { VNode } from "vue";
import { WxSharePluginOptions } from "../../node";

// @ts-ignore
const wspo = WSPO as WxSharePluginOptions;

export default defineComponent({
  setup() {
    const route = useRoute();
    const frontmatter = usePageFrontmatter();

    const clickedWxShareButton = () => {
      const url = wspo.host + route.path;
      const title =
        frontmatter.value.title || route.meta.title || document.title;
      const desc =
        frontmatter.value.wxdescription ||
        wspo.desc ||
        frontmatter.value.description?.substring(0, 60);
      const imgUrl = wspo.imgUrl || wspo.host + "/logo.png";
      let href = wspo.redirectApi || "";
      href += `?url=${url}`;
      href += `&title=${title}`;
      href += `&desc=${desc}`;
      href += `&imgUrl=${imgUrl}`;
      window.location.href = href;
    };

    if (wspo.directConnection === true) {
      onMounted(() => {
        if (/MicroMessenger/i.test(navigator.userAgent.toLowerCase())) {
          fetch(
            wspo.signatureApi + encodeURIComponent(location.href.split("#")[0])
          )
            .then((res) => res.json())
            .then((res) => {
              if (res["code"] === 0) {
                const url = wspo.host + route.path;
                const title =
                  frontmatter.value.title || route.meta.title || document.title;
                const desc =
                  frontmatter.value.wxdescription ||
                  wspo.desc ||
                  frontmatter.value.description?.substring(0, 60);
                const imgUrl = wspo.imgUrl || wspo.host + "/logo.png";
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
                      title: title,
                      desc: desc,
                      link: wspo.wxRedirectApi + url,
                      imgUrl: imgUrl,
                    });
                    w.callWechatApi("updateTimelineShareData", {
                      title: title,
                      desc: desc,
                      link: wspo.wxRedirectApi + url,
                      imgUrl: imgUrl,
                    });
                  });
                });
              }
            });
        }
      });
    }

    return (): VNode[] => [
      h("button", {
        class: "icon iconfont icon-wechat back-to-top",
        style: "bottom: 10px; font-size: 26px;",
        onClick: clickedWxShareButton,
      }),
    ];
  },
});
