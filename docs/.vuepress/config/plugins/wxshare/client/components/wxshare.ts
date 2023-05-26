import { defineComponent, h, onMounted, ref, watch } from "vue";
import {
  usePageFrontmatter,
  usePageData,
  useSiteData,
  usePageHeadTitle,
} from "@vuepress/client";

import type { VNode } from "vue";
import { WxSharePluginOptions } from "../../node";

// @ts-ignore
const wspo = WSPO as WxSharePluginOptions;

const checkIsMobile = function (ua: string) {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    ua
  );
};

export default defineComponent({
  setup() {
    const pageData = usePageData();
    const siteData = useSiteData();
    const frontmatter = usePageFrontmatter();
    const pageHeadTitle = usePageHeadTitle();

    const needIcon = ref(false);
    const updateMobile = (): void => {
      needIcon.value =
        !checkIsMobile(navigator.userAgent) ||
        (/MicroMessenger/i.test(navigator.userAgent.toLowerCase()) &&
          !wspo.directConnection);
    };

    const url = ref(""),
      title = ref(),
      desc = ref(),
      imgUrl = wspo.imgUrl;

    const setData = () => {
      url.value = wspo.host + pageData.value.path;
      title.value =
        frontmatter.value.title || pageHeadTitle.value || siteData.value.title;
      desc.value =
        frontmatter.value.wxdescription ||
        frontmatter.value.description?.substring(0, 60) ||
        wspo.desc ||
        siteData.value.description;
    };

    const clickedWxShareButton = () => {
      if (wspo.server) {
        let page = {
          Title: title.value,
          Url: location.href,
          Desc: desc.value,
          ImgUrl: imgUrl,
        };
        fetch(wspo.server + "/api/wx/page/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify(page),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res["code"] === 0) {
              let id = res["data"];
              location.href = wspo.server + "/api/wx/share/" + id;
            }
          });
      }
    };

    const shareWx = () => {
      if (wspo.directConnection === true) {
        if (/MicroMessenger/i.test(navigator.userAgent.toLowerCase())) {
          fetch(wspo.server + "/api/wx/signature", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
              url: location.href.split("#")[0],
            }),
          })
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
    };

    watch(
      () => pageData.value.path,
      async () => {
        setData();
        shareWx();
      }
    );

    onMounted(() => {
      updateMobile();
      setData();
      shareWx();
    });

    return (): VNode =>
      needIcon.value
        ? h("button", {
            class: "icon iconfont icon-wechat back-to-top",
            style: "bottom: 10px; font-size: 26px;",
            onClick: clickedWxShareButton,
          })
        : h("div");
  },
});
