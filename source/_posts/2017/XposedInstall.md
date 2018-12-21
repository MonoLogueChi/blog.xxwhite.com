---
title: Xposed框架安装
date: 2017-10-30 17:10:00
tags: 搞机

comments: true
---

Xposed框架是一款可以在不修改APK的情况下影响程序运行(修改系统)的框架服务，基于它可以制作出许多功能强大的模块，且在功能不冲突的情况下同时运作。

<!-- more -->

上面这段话是被用烂的一段话，这句话的出处是Xposed框架的作者rovo89，大概说明了Xposed框架的功能。其工作原理类似于一种病毒，钩住（hook）某些资源，然后用自己想用的资源替换（比如我用一个app调用Xposed钩住了状态栏的颜色，我用白色替换了黑色，这个时候黑色的状态栏就会变成白色的）。原理说简单一点就是前面这样的，说复杂一点，我也说不清楚。

## Xposed下载

官方下载地址：[https://forum.xda-developers.com/showthread.php?t=3034811](https://forum.xda-developers.com/showthread.php?t=3034811)

官方安装包下载地址：[点击下载](https://forum.xda-developers.com/showthread.php?t=3034811)

官方卡刷包下载地址：[http://dl-xda.xposed.info/framework/](http://dl-xda.xposed.info/framework/)

由于某些原因，国内访问以上资源速度可能会有些慢，可以使用我提供的下载链接（建议去官网下载，我这里更新不及时，因为我懒）：  
[Xposed下载地址1](https://pan.stnts.com/s/g25LTpS)  
[Xposed下载地址2](https://pan.lanzou.com/b98295/)

## Xposed安装

### 安卓4.4以下

安卓4.0-4.4，安装Xposed框架，请下载官方安装器，然后使用root权限安装。

### 安卓5.0（包括）以上

安卓5.0以上可以使用官方安装器+root权限安装，也可以下载卡刷包安装（推荐）。

可以看到卡刷包的命名为：`xposed-v88-sdk24-arm64.zip`

拆解命名规则，可以得到：`xposed-v版本号-sdk版本-处理器架构.zip`

其中SDK版本和安卓版本对应信息为：

|   API版本   |   安卓版本   |
|:----------:|:--------:|
|   SDK19   |   安卓4.4   |
|   SDK21   |   安卓5.0   |
|   SDK22   |   安卓5.1   |
|   SDK23   |   安卓6.0   |
|   SDK24   |   安卓7.0   |
|   SDK25   |   安卓7.1   |

至于处理器架构，x86架构一般用于平板，ARM64和ARM咋区分，自己去百度一下自己的机型和处理器吧，一般新手机都是ARM64，老手机大部分是ARM。

另外，三星小米等手机可能与官方包不兼容，请使用相应的修改版本。

至于卡刷和root等基础知识，我以后的博客里会慢慢的介绍。