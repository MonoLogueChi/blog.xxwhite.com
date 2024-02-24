import { defineUserConfig } from "vuepress";
import theme from "./config/theme";
import plugins from "./config/plugins";
import head from "./config/head";
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
