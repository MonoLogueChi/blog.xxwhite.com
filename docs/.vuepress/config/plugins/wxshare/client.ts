import { defineClientConfig } from "@vuepress/client";
import wxshare from "./wxshare";

export default defineClientConfig({
  rootComponents: [wxshare],
});
