import { defineUserConfig } from "vuepress";
import theme from "./config/theme.js";
import plugins from "./config/plugins/index.js";
import head from "./config/head.js";
import { viteBundler } from "@vuepress/bundler-vite";

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
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
});
