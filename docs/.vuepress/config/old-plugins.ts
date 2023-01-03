// import { UserPlugins } from "vuepress/config";
// import fs from "fs";
// import { resolve } from "path";
// import type { SmPlayerPluginOption } from "vuepress-plugin-smplayer/types";

// const hostname = `https://${fs.readFileSync(
//   resolve(__dirname, "../public", "CNAME")
// )}`;

// export default <UserPlugins>[
//   ["sitemap", { hostname }],
//   [
//     "smplayer",
//     {
//       meting: {
//         api: "https://sm.sm9.top/api/meting?server=:server&type=:type&id=:id&r=:r",
//       },
//       artplayer: {
//         src: {
//           playbackRate: true,
//           whitelist: ["*"],
//         },
//       },
//     } as SmPlayerPluginOption,
//   ],
//   ["pangu"],
//   [
//     "one-click-copy",
//     {
//       copySelector: [
//         'div[class*="language-"] pre',
//         'div[class*="aside-code"] aside',
//       ],
//       copyMessage: "复制成功",
//       duration: 1000,
//       showInMobile: false,
//     },
//   ],
//   [
//     "zooming",
//     {
//       selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
//       options: {
//         bgColor: "rgba(0,0,0,0.6)",
//       },
//     },
//   ],
//   ["fulltext-search"],
//   ["smooth-scroll"],
//   [
//     "vuepress-plugin-vssue-global",
//     {
//       platform: "github-v4",
//       title: "[Comment]<%- frontmatter.title %>",
//       // 其他的 Vssue 配置
//       clientId: "d6fec584614c7a17f640",
//       clientSecret: "33dfab3f8f9f5df67ef478f96f172fd902637de8",
//       owner: "MonoLogueChi",
//       repo: "blog-comment",
//     },
//   ],
//   ["img-lazy"],
// ];
