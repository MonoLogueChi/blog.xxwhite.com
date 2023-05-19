import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://blog.xxwhite.com",

  author: {
    name: "MonoLogueChi",
    url: "https://blog.xxwhite.com",
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

  iconAssets: "iconfont",

  // logo: "/assets/img/logo.png",

  repo: "MonoLogueChi/blog.xxwhite.com",

  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  // navbar
  navbar,

  // sidebar
  sidebar,
  sidebarSorter: ["readme", "order", "date-desc", "filename"],

  footer: `
  <a href="https://blog.xxwhite.com" target="_blank">MonoLogueChi</a> | <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" rel="external nofollow" target="_blank">CC BY-NC-SA 4.0</a>
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

  plugins: {
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: "Giscus",
    //   repo: "MonoLogueChi/blog-giscus",
    //   repoId: "R_kgDOIuTINg",
    //   category: "Giscus",
    //   categoryId: "DIC_kwDOIuTINs4CTahU",
    //   mapping: "pathname",
    // },

    comment: {
      provider: "Waline",
      serverURL: "https://waline-bx.u2sb.com",
      login: "force",
      pageSize: 15,
      reaction: true,
    },

    blog: {
      excerpt: true,
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imgSize: true,
      include: true,
      katex: true,
      imgLazyload: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    components: {
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "FontIcon",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ],
    },
    prismjs: false,
  },
});
