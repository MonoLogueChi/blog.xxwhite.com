import { shikiPlugin } from "@vuepress/plugin-shiki";
import { resolve } from "path";

import usedLangs from "./used-langs.json" assert { type: "json" };

import caddyfile from "./languages/caddyfile.tmLanguage.json" assert { type: "json" };

const caddyfileLanguage = {
  id: "Caddyfile",
  scopeName: "source.Caddyfile",
  grammar: caddyfile,
  aliases: ["caddyfile", "caddy"],
};

export default shikiPlugin({
  // 你的选项
  theme: "one-dark-pro",
  //@ts-ignore
  langs: [...usedLangs, caddyfileLanguage],
});
