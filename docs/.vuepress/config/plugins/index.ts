import type { PluginConfig } from "vuepress";
import copyjs from "./copyjs";
import wxshare from "./wxshare/node/";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "vuepress-plugin-redirect";
import { containerPlugin } from "@vuepress/plugin-container";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import sbaudio from "vuepress-plugin-sbaudio";

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
