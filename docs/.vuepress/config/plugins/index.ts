import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs";
import smplayer from "./smplayer";
import wxshare from "./wxshare";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "vuepress-plugin-redirect";

export default <PluginConfig>[
  redirectPlugin({
    config: {},
  }),
  searchProPlugin({
    indexContent: true,
  }),
  copyjs,
  smplayer({
    meting: {
      api: "https://sm.sm9.top/api/meting?server=:server&type=:type&id=:id&r=:r",
    },
  }),
  wxshare({
    host: "https://www.u2sb.com",
    redirectApi: "https://wx.xxwhite.com/wxshare",
    imgUrl: "https://www.u2sb.com/assets/img/avatar.png",
  }),
];
