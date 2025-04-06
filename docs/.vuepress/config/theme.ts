import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import markdown from "./markdown.js";

export default hopeTheme({
  hostname: "https://blog.u2sb.com",

  author: {
    name: "MonoLogueChi",
    url: "https://blog.u2sb.com",
  },

  blog: {
    description: "菜鸡程序员",
    intro: "/pages/aboutme.html",
    avatar: "/assets/img/avatar.jpg",
    articlePerPage: 15,
    medias: {
      QQ: "/assets/html/qq-groups.html",
      BiliBili: "https://space.bilibili.com/28474682",
      GitHub: "https://github.com/MonoLogueChi",
      Rss: "/atom.xml",
      Gmail: "mailto:xxwhite@foxmail.com",
    },
  },

  // logo: "/assets/img/logo.png",

  repo: "MonoLogueChi/blog.u2sb.com",

  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  // navbar
  navbar,

  // sidebar
  sidebar,
  sidebarSorter: ["readme", "order", "date-desc", "filename"],

  footer: `
  <a href="https://blog.u2sb.com" target="_blank">MonoLogueChi</a> | <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" rel="external nofollow" target="_blank">CC BY-NC-SA 4.0</a>
  <br>
  本站由 <a href="https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral" target="_blank"><img src="/assets/img/upyun.png" height="20px" style="vertical-align:middle"> </a>提供 CDN 加速 / 云存储服务
  <br>
  <a href="http://beian.miit.gov.cn/" target="_blank">蒙ICP备17004911号-1</a>
  `,
  copyright: false,
  displayFooter: true,

  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  markdown,
  plugins: {
    blog: {
      excerpt: true,
    },
    icon: {
      assets: "iconify",
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
      getter: {
        content: (page) => page.data.excerpt as string,
      },
    },

    slimsearch: {
      indexContent: true,
    },

    // Disable features you don't want here
    components: {
      components: [
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "SiteInfo",
        "VidStack",
        "VPCard",
        "XiGua",
      ],
    },
    redirect: {},
  },
});
