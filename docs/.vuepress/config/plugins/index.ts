import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "@vuepress/plugin-redirect";
import sbaudio from "vuepress-plugin-sbaudio";

import shikiPlugin from "./shiki";

export default <PluginConfig>[
  redirectPlugin({
    config: {},
  }),
  searchProPlugin({
    indexContent: true,
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
