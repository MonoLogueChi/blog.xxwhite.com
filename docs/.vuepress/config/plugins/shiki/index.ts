import { shikiPlugin } from "@vuepress/plugin-shiki";

import usedLangs from "./used-langs.json" assert { type: "json" };
import caddyfile from "./languages/caddyfile.tmLanguage.json" assert { type: "json" };

const caddyfileLanguage = {
  id: "Caddyfile",
  aliases: ["caddyfile", "caddy"],
  ...caddyfile,
};

export default shikiPlugin({
  // 你的选项
  themes: {
    light: "vitesse-light",
    dark: "vitesse-dark",
  },
  // @ts-ignore
  langs: [caddyfileLanguage, ...usedLangs],
});
