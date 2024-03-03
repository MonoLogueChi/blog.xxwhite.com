import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs.js";
import { redirectPlugin } from "@vuepress/plugin-redirect";
import sbaudio from "vuepress-plugin-sbaudio";

import shikiPlugin from "./shiki/index.js";

export default <PluginConfig>[
  redirectPlugin({
    config: {},
  }),
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
  copyjs,
  shikiPlugin,
];
