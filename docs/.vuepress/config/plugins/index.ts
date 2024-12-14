import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs.js";
import sbaudio from "vuepress-plugin-sbaudio";


export default <PluginConfig>[
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
