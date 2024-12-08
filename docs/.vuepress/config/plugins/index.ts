import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs.js";
import sbaudio from "vuepress-plugin-sbaudio";
import { slimsearchPlugin } from "@vuepress/plugin-slimsearch"
import { shikiPlugin } from "@vuepress/plugin-shiki";
import shiki from "./shiki/index.js";


export default <PluginConfig>[
  slimsearchPlugin({
    indexContent: true,
  }),
  shikiPlugin(shiki),
  copyjs,
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
];
