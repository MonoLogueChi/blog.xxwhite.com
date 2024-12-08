import { defineUserConfig } from "vuepress";
import theme from "./config/theme.js";
import plugins from "./config/plugins/index.js";
import head from "./config/head.js";
import { viteBundler } from "@vuepress/bundler-vite";
import markdown from "./config/markdown.js";

export default defineUserConfig({
  title: "叉叉白",
  description: "一个小白的技术博客",
  dest: "dist",
  lang: "zh-CN",
  head,
  theme,
  shouldPrefetch: false,
  shouldPreload: false,
  plugins,
  markdown,
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
