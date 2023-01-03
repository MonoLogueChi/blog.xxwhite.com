import { defineUserConfig } from "vuepress";
import theme from "./config/theme";
import plugins from "./config/plugins";
import head from "./config/head";

export default defineUserConfig({
  title: "叉叉白",
  description: "一个小白的技术博客",
  dest: "dist",
  head,
  theme,
  shouldPrefetch: false,
  shouldPreload: false,
  plugins,
});
