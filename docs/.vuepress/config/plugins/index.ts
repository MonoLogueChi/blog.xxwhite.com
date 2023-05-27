import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs";
import wxshare from "vuepress-plugin-wxshare";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "vuepress-plugin-redirect";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import sbaudio from "vuepress-plugin-sbaudio";


export default <PluginConfig>[
  redirectPlugin({
    config: {},
  }),
  searchProPlugin({
    indexContent: true,
  }),
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
  wxshare({
    host: "https://blog.xxwhite.com",
    server: "https://sbapi.s3.sm9.top",
    imgUrl: "https://blog.xxwhite.com/assets/img/avatar.jpg",
    desc: "叉叉白",
    directConnection: true,
  }),
  shikiPlugin({
    // 你的选项
    theme: "vitesse-light",
  }),
];
