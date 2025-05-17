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
    avatar: "/assets/img/avatar.avif",
    articlePerPage: 15,
    medias: {
      QQ: "/assets/html/qq-groups.html",
      BiliBili: "https://space.bilibili.com/28474682",
      GitHub: "https://github.com/MonoLogueChi",
      Rss: "/atom.xml",
      Gmail: "mailto:xxwhite@foxmail.com",
    },
  },

  // logo: "/assets/img/logo.avif",

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
        "VPCard"
      ],
    },
    redirect: {},
  },
});
