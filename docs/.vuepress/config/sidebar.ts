import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    { text: "2022", prefix: "2022", collapsible: true, children: "structure" },
    { text: "2021", prefix: "2021", collapsible: true, children: "structure" },
    { text: "2020", prefix: "2020", collapsible: true, children: "structure" },
    { text: "2019", prefix: "2019", collapsible: true, children: "structure" },
    { text: "2018", prefix: "2018", collapsible: true, children: "structure" },
    { text: "2017", prefix: "2017", collapsible: true, children: "structure" },
  ],
});
