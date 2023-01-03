import { defineClientConfig } from "@vuepress/client";

import Bilibili from "./components/Bilibili/bilibili";
import Xigua from "./components/Xigua/xigua";
import APlayer from "./components/Aplayer/aplayer";
// @ts-ignore：
import Meting from "./components/Meting/meting";

export default defineClientConfig({
  async enhance({ app }) {
    app.component("Bilibili", Bilibili);
    app.component("Xigua", Xigua);
    app.component("APlayer", APlayer);
    app.component("Meting", Meting);
    app.component("MetingJs", Meting);
  },
});
