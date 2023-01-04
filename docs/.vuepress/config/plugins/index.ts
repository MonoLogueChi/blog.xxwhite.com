import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs";
import smplayer from "./smplayer";
import wxshare from "./wxshare/node/";
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
    host: "https://blog.xxwhite.com",
    redirectApi: "https://wx.xxwhite.com/wxshare",
    imgUrl: "https://blog.xxwhite.com/assets/img/avatar.jpg",
    directConnection: true,
    signatureApi: "https://wx.xxwhite.com/api/wx/share/signature?url=",
    wxRedirectApi: "https://wx.xxwhite.com/api/wx/share/redirect?url="
  }),
];
