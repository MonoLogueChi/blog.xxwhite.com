import { useEventListener } from "@vueuse/core";
import { computed, defineComponent, h, onMounted, ref } from "vue";
// @ts-ignore
import { checkIsMobile } from "vuepress-shared/client";
import { useSize } from "../../utils/size";

import type { XiguaOptions } from "../../options";
import type { VNode } from "vue";
// @ts-ignore
import { xigua } from "@temp/SmplayerOptions.json";

import "./xigua.scss";

const XIGUA = xigua as XiguaOptions;

export default defineComponent({
  props: {
    xid: {
      type: String,
      default: null,
      required: true,
    },
    id: {
      type: String,
      default: null,
      required: false,
    },
    autoplay: {
      type: Boolean,
      default: XIGUA.autoplay,
      required: false,
    },
    startTime: {
      type: Number,
      default: XIGUA.startTime,
      required: false,
    },
    width: {
      type: String,
      default: XIGUA.width,
      required: false,
    },
    height: {
      type: [String, Number],
      default: XIGUA.height,
      required: false,
    },
    ratio: {
      type: [String, Number],
      default: XIGUA.ratio,
    },
  },

  setup(props) {
    const isMobile = ref(false);
    const extraHeight = 0;
    const updateMobile = (): void => {
      isMobile.value =
        checkIsMobile(navigator.userAgent) || el.value!.clientWidth < 640;
    };
    const { el, width, height } = useSize<HTMLIFrameElement>(
      props,
      extraHeight
    );

    onMounted(() => {
      updateMobile();
      useEventListener("orientationchange", () => updateMobile());
      useEventListener("resize", () => updateMobile());
    });

    return (): VNode[] => [
      h("iframe", {
        ref: el,
        src: `//www.ixigua.com/iframe/${props.xid}?${
          props.id ? "id=" + props.id + "&" : ""
        }autoplay=${props.autoplay ? 1 : 0}&startTime=${props.startTime}`,
        allow:
          "accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture",
        class: "xigua-iframe",
        style: {
          width: width.value,
          height: height.value,
        },
      }),
    ];
  },
});
