---
title: 朋友们
date: 2016-10-25 22:50:00
comments: false
permalink: /pages/friends.html
sidebar: false
editLink: false
article: false

siteinfoFriends:
  - name: 叉叉白
    desc: 就是站长本人啦
    logo: /assets/img/avatar.jpg
    url: /
    preview: /assets/img/tou.png

  - name: U2SB
    desc: 我们一起做很帅的事
    logo: https://www.u2sb.com/assets/img/avatar.png
    url: https://www.u2sb.com/
    preview: /assets/img/tou.png

  - name: 大姐姐的博客Minemine
    desc: Write something for my love.
    logo: https://user-images.githubusercontent.com/12069729/125564018-6a79d6dd-cd55-4050-ba18-c0b62cd46cf7.jpg
    url: https://minemine.cc/
    preview: /assets/img/tou.png

  - name: CareyQ
    desc: 资料不可见
    logo: https://gravatar.loli.net/avatar/891af7c1cb4c9216eeed1d6cd2fc29a0
    url: https://careyq.cool/
    preview: /assets/img/tou.png

  - name: 随遇而安
    desc: 生活吐槽 & 学习记录
    logo: https://cdn.jsdelivr.net/gh/ZvonimirSun/my-hexo-blog@20211214/images/avatar.png
    url: https://www.iszy.cc/
    preview: /assets/img/tou.png

  - name: 2401的晚秋咖啡
    desc: 2401的晚秋咖啡
    logo: https://zsh2401.top/images/head.jpg
    url: https://zsh2401.top/
    preview: /assets/img/tou.png

  - name: Freetao’s Blog
    desc: 资料不可见
    logo: https://wx2.sinaimg.cn/large/4d6e3e3bjw1e8qgp5bmzyj2050050aa8.jpg
    url: https://blogs.kainy.cn/
    preview: /assets/img/tou.png

  - name: 墨七
    desc: 资料不可见
    logo: https://file.mo7.cc/static/lxh_gif/lxh_71.gif
    url: https://blog.mo7.cc/
    preview: /assets/img/tou.png

  - name: Bing🐣
    desc: 基于VuePress的个人博客，记录日常开发问题。
    logo: https://liubing.me/logo.png
    url: https://liubing.me/
    preview: /assets/img/tou.png
---

<SiteInfo
  v-for="item in $frontmatter.siteinfoFriends"
  :key="item.url"
  v-bind="item"
/>