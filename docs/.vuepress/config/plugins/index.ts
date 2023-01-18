import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs";
import smplayer from "./smplayer";
import wxshare from "./wxshare/node/";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "vuepress-plugin-redirect";
import { containerPlugin } from "@vuepress/plugin-container";

import * as card from "./card";

export default <PluginConfig>[
  redirectPlugin({
    config: {},
  }),
  searchProPlugin({
    indexContent: true,
  }),
  containerPlugin({
    type: card.CARD_LIST,
    render: (tokens, idx) => {
      return card.renderCardList(tokens, idx, card.CARD_LIST);
    },
  }),
  containerPlugin({
    type: card.CARD_IMG_LIST,
    render: (tokens, idx) => {
      return card.renderCardList(tokens, idx, card.CARD_IMG_LIST);
    },
  }),
  copyjs,
  smplayer({
    meting: {
      api: "https://sm.sm9.top/api/meting?server=:server&type=:type&id=:id&r=:r",
    },
  }),
  wxshare({
    host: "https://blog.xxwhite.com",
    redirectApi: "https://sbapi.s3.sm9.top/api/wx/share/",
    imgUrl: "https://blog.xxwhite.com/assets/img/avatar.jpg",
    directConnection: false,
    signatureApi: "https://sbapi.s3.sm9.top/api/wx/share/signature?url=",
  }),
];
