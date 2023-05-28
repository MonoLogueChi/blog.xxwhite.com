import { shikiPlugin } from "@vuepress/plugin-shiki";
import { BUNDLED_LANGUAGES } from "shiki";

import caddyfile from "./languages/caddyfile.tmLanguage.json" assert { type: "json" };

const caddyfileLanguage = {
  id: "Caddyfile",
  scopeName: "source.Caddyfile",
  grammar: caddyfile,
  aliases: ["caddyfile", "caddy"],
};

// @ts-ignore
BUNDLED_LANGUAGES.push(caddyfileLanguage);

export default shikiPlugin({
  // 你的选项
  theme: "vitesse-light",
  langs: BUNDLED_LANGUAGES,
});
