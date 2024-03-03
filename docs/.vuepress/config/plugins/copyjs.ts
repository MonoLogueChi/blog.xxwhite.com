import { path } from "vuepress/utils";
import { watch, FSWatcher } from "chokidar";
import fs from "fs-extra";
import { App } from "vuepress";

let jsWatcher: FSWatcher;

export default {
  name: "vuepress-plugin-copyjs",

  onPrepared: (app: App) => {
    jsWatcher = watch(path.join(app.dir.source(), "/**/*.js"), {
      ignored: /(^|[\/\\])\../,
    });

    jsWatcher.on("add", (sourceFilePath) => {
      let tempFilePath = path.join(
        app.dir.temp(),
        "pages",
        path.relative(app.dir.source(), sourceFilePath)
      );
      fs.copySync(sourceFilePath, tempFilePath, { overwrite: true });
    });
  },

  onGenerated: async (app: App) => {
    await jsWatcher.close();
  },
};
