import { MarkdownOptions } from "vuepress-theme-hope";
import shiki from "./plugins/shiki/index.js";

export default <MarkdownOptions>{
  alert: true,
  hint: true,
  math: {
    type: "mathjax",
    output: "svg",
  },
  tabs: true,
  codeTabs: true,
  figure: true,
  imgLazyload: true,
  imgMark: true,
  imgSize: true,
  obsidianImgSize: true,
  vPre: true,
  sub: true,
  sup: true,
  align: true,
  attrs: true,
  gfm: true,
  footnote: true,
  tasklist: true,
  breaks: true,
  include: true,
  mark: true,
  stylize: [
    {
      matcher: "Recommended",
      replacer: ({ tag }) => {
        if (tag === "em")
          return {
            tag: "Badge",
            attrs: { type: "tip" },
            content: "Recommended",
          };
      },
    },
  ],
  highlighter: {
    type: "shiki",
    ...shiki,
  },
};
