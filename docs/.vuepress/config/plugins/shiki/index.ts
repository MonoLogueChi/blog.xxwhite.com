import { shikiPlugin } from "@vuepress/plugin-shiki";
import { langs } from "./langs";

import caddyfile from "./languages/caddyfile.tmLanguage.json" assert { type: "json" };

const caddyfileLanguage = {
  id: "Caddyfile",
  scopeName: "source.Caddyfile",
  grammar: caddyfile,
  aliases: ["caddyfile", "caddy"],
};

export default shikiPlugin({
  // 你的选项
  theme: "vitesse-light",
  //@ts-ignore
  langs: [...langs, caddyfileLanguage],
});
