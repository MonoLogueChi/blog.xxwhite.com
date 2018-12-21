---
title: 打造Unity最强IDE
date: 2018-11-14 22:44:57
tags: Unity

keywords: Unity VisualStudio ReSharper IDE 代码补全 智能提醒 格式化
comments: true
---

去年写过一篇文章，[使用Rider作为Unity的IDE](/2018/UseJB.html)，但是用了一段时间之后发现，Rider用着还是有点不太习惯，不如VS顺手，正好来分享一下开发环境是怎么搭建的。

<!-- more -->

## 软件

- Unity（主角）
- Visual Studio（宇宙最强IDE）
- JetBrains ReSharper（宇宙最智能IDE插件）

### 安装Unity

安装Unity的话，我建议是使用[Unity-Hub](https://public-cdn.cloud.unity3d.com/hub/prod/UnityHubSetup.exe)。同时，Unity建议使用LTS版，除非你是想体验新特性。

### 安装Visual Studio

直接使用社区版就可以，建议使用最新版，下载地址：[https://visualstudio.microsoft.com/zh-hans/](https://visualstudio.microsoft.com/zh-hans/)

### 安装JetBrains ReSharper

这个东西，需要使用适合Visual Studio的版本的，如果Visual Studio使用的最新版本，那用最新版本就没毛病。

下载地址：[https://www.jetbrains.com/resharper/](https://www.jetbrains.com/resharper/)

这个东西并不是免费的，价格的话，大概两千多RMB每年吧。幸好JB公司还有点良知，教育版是免费的，沾了学校的光，现在毕业了，还有大概半年时间可以用。

## 代码补全

以前这个功能，安装完ReShaper之后就自动会有的，但是不知道在某个版本的时候，ReShaper去掉了这个功能，需要安装一个插件才可以用。

这其中还有一段心酸的历史，当我找不到代码补全在哪里设置的时候，各种尝试，无果，百度谷歌，无果，最后无意中发现ReShaper竟然还有插件这种东西，瞬间打开新世界。

安装完上面的软件之后，需要再安装插件才可以。

![](https://s1.ax1x.com/2018/11/15/ivICZj.png)  

![](https://s1.ax1x.com/2018/11/15/ivI1F1.png)

安装插件Unity Support之后就可以和以前一样啦。

![](https://s1.ax1x.com/2018/11/15/ivoeht.png)

完美，接下来几天要准备一个在Unity中搞一个活塞电机出来，主要都是物理方面的模拟，过段时间再有时间的话，准备再搞点UGUI方面的东西出来，感兴趣的话，可以收藏看一下我后面的文章。


