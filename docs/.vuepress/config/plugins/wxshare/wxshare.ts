import { defineComponent, h } from "vue";
import { useRoute } from "vue-router";
import { usePageFrontmatter } from "@vuepress/client";

import type { VNode } from "vue";

// @ts-ignore
const wspo = WSPO;

export default defineComponent({
  setup() {
    const route = useRoute();
    const frontmatter = usePageFrontmatter();
    const clickedWxShareButton = () => {
      let url = wspo.redirectApi;
      url += `?url=${wspo.host + route.path}`;
      url += `&title=${
        frontmatter.value.title || route.meta.title || document.title
      }`;
      url += `&desc=${
        frontmatter.value.wxdescription ||
        wspo.desc ||
        frontmatter.value.description?.substring(0, 60)
      }`;
      url += `&imgUrl=${wspo.imgUrl || wspo.host + "/logo.png"}`;
      window.location.href = url;
    };

    return (): VNode[] => [
      h("button", {
        class: "icon iconfont icon-wechat back-to-top",
        style: "bottom: 10px; font-size: 26px;",
        onClick: clickedWxShareButton,
      }),
    ];
  },
});
