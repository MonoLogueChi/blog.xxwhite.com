import fs from "fs";
import gulp from "gulp";
import gulpWebCompress from "gulp-web-compress";
import { resolve } from "path";
import { exec } from "gulp-execa";
import { langs } from "./docs/.vuepress/config/plugins/shiki/langs.js";

const { src, dest, series } = gulp;

const inputDir = "./dist";
const outputDir = "./dist";

const sourceDir = "./docs";
const usedLangsFile = "./docs/.vuepress/config/plugins/shiki/used-langs.json";

export const vuepressBuild = async () => {
  await exec(
    "node_modules/.bin/vuepress build docs --clean-cache --clean-temp"
  );
};

const compress = async () =>
  await src([
    resolve(inputDir, "**/*.html"),
    resolve(inputDir, "**/*.js"),
    resolve(inputDir, "**/*.css"),
  ])
    .pipe(
      gulpWebCompress({
        types: ["gz", "br"],
        gzipOptions: {
          level: 9,
        },
        brotliOptions: {
          mode: 0,
          quality: 11,
        },
      })
    )
    .pipe(dest(outputDir));

// 分析所使用的语言
const getLangsFromMdFiles = () => {
  const values = new Set();

  return src(resolve(sourceDir, "**/*.md"))
    .on("data", (file) => {
      const content = fs.readFileSync(file.path, "utf8");
      const regex = /```([\w-]+)\s+([\s\S]*?)/g;
      let match;

      while ((match = regex.exec(content)) !== null) {
        const value = match[1].trim().replace(/^\s+/, "");
        if (langs.includes(value)) values.add(value);
      }
    })
    .on("end", () => {
      var langs = Array.from(values);
      fs.writeFileSync(usedLangsFile, JSON.stringify(langs.sort()));
    });
};

export const build = series(getLangsFromMdFiles, vuepressBuild);
