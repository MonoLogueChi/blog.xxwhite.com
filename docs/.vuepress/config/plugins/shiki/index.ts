import {
  ShikiPluginOptions,
  bundledLanguageNames,
} from "@vuepress/plugin-shiki";

import caddyfile from "./languages/caddyfile.tmLanguage.json";

const caddyfileLanguage = {
  id: "Caddyfile",
  aliases: ["caddyfile", "caddy"],
  ...caddyfile,
};

export default <ShikiPluginOptions>{
  // 你的选项
  themes: {
    light: "one-light",
    dark: "one-dark-pro",
  },
  lineNumbers: true,

  langs: [caddyfileLanguage, ...bundledLanguageNames],
};
