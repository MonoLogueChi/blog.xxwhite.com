import {
  ShikiPluginOptions,
} from "@vuepress/plugin-shiki";

import caddyfile from "./languages/caddyfile.tmLanguage.json" with { type: 'json'};

const caddyfileLanguage = {
  id: "Caddyfile",
  aliases: ["caddyfile", "caddy"],
  ...caddyfile,
};

export default <ShikiPluginOptions>{
  themes: {
    light: "one-light",
    dark: "one-dark-pro",
  },
  lineNumbers: true,

  langs: [caddyfileLanguage],
};
