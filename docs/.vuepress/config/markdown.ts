import { MarkdownConfig } from "vuepress/config";

export default <MarkdownConfig>{
  lineNumbers: true,
  plugins: [
    "markdown-it-sub",
    "markdown-it-sup",
    "markdown-it-footnote",
    "markdown-it-task-lists",
    "markdown-it-attrs",
    "markdown-it-imsize",
    "markdown-it-mathjax3",
    "markdown-it-multimd-table",
  ],
  extendMarkdown: (md) => {
    md.set({ breaks: true });
  },
};
