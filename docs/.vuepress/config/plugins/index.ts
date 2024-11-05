import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs.js";
import sbaudio from "vuepress-plugin-sbaudio";
import { markdownIncludePlugin } from "@vuepress/plugin-markdown-include";

// import shikiPlugin from "./shiki/index.js";

export default <PluginConfig>[
  sbaudio({
    metingOptions: {
      api: "https://meting-api.u2sb.com/?server=:server&type=:type&id=:id&r=:r",
      list: [
        {
          type: "playlist",
          id: "3045842790",
        },
      ],
    },
  }),
  markdownIncludePlugin({
    // 选项
  }),
  copyjs,
  // shikiPlugin,
];
