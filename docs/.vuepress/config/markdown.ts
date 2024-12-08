import { MarkdownOptions } from "vuepress/markdown";

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
  vPre: {
    block: true,
    inline: true,
  },
  sub: true,
  sup: true,
  align: true,
  attrs: true,
  gfm: true,
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
};
