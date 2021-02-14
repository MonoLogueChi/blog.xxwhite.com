import { defineConfig4CustomTheme } from "vuepress/config";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import themeConfig from "./config/themeConfig";
import markdown from "./config/markdown";
import plugins from "./config/plugins";
import head from "./config/head";

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  title: "叉叉白",
  description: "一个小白的技术博客",
  dest: "dist",
  shouldPrefetch: () => false,
  head: head,
  theme: "vdoing",
  themeConfig: themeConfig,
  markdown: markdown,
  plugins: plugins,
});
