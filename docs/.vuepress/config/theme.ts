import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import shikiPlugin from "./plugins/shiki/index.js";

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

  iconAssets: "fontawesome",

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
    //   provider: "Waline",
    //   serverURL: "https://waline-bx.u2sb.com",
    //   login: "force",
    //   pageSize: 15,
    //   reaction: true,
    // },

    blog: {
      excerpt: true,
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
      getter: {
        content: (page) => page.data.excerpt as string,
      },
    },

    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      gfm: true,
      include: true,
      mark: true,
      playground: {
        presets: ["ts", "vue"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      vPre: true,
    },
    components: {
      components: [
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "FontIcon",
        "SiteInfo",
        "VidStack",
        "VPCard",
        "XiGua",
      ],
    },
    searchPro: {
      indexContent: true,
    },
    markdownHint: {
      // 启用提示容器，默认启用
      hint: true,
      // 启用 GFM 警告
      alert: true,
    },
    markdownImage: {
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    },
    markdownMath: {
      // 选项
      type: "mathjax",
      output: "svg",
    },
    markdownTab: {
      // 启用代码选项卡
      codeTabs: true,
      // 启用选项卡
      tabs: true,
    },
    redirect: {},
    prismjs: false,
    shiki: shikiPlugin,
  },
});
