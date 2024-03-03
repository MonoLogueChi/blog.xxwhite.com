import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    { text: "2024", prefix: "2024", collapsible: true, children: "structure" },
    { text: "2023", prefix: "2023", collapsible: true, children: "structure" },
    { text: "2022", prefix: "2022", collapsible: true, children: "structure" },
    { text: "2021", prefix: "2021", collapsible: true, children: "structure" },
    { text: "2020", prefix: "2020", collapsible: true, children: "structure" },
    { text: "2019", prefix: "2019", collapsible: true, children: "structure" },
    { text: "2018", prefix: "2018", collapsible: true, children: "structure" },
    { text: "2017", prefix: "2017", collapsible: true, children: "structure" },
  ],
  "/2023/05220.从零开始搭建一个Web服务器/": [
    {
      text: "2023",
      link: "/2023/",
      children: "structure",
    },
  ],
});
