---
title: 一次简单的刷机
date: 2017-11-01 22:09:48
tags: 搞机

comments: true
---

这是一个简单的刷机记录，算是给小白一个参考吧（估计小白也看不懂）

<!-- more -->

# 一次简单的刷机

## 刷机环境

|   工具  |   介绍  |
|:-----:|:------:|
|   手机  |   小米3 |
|   ROM |   AOSP8.0 |
|   REC     |   TWRP    |
|   GAPPS   |   8.0 |
|   ADB工具包  |   [以前的文章有过介绍](http://www.xxwhite.com/2017/AdbUsing.html)  |

## 刷机准备

下载好REC和刷机包，如果手机有BL锁记得解锁。

## 刷机开始

### 重启到BootLoader模式

```
adb reboot bootloader
```

![重启到REC](https://i.loli.net/2017/11/01/59f9ebd49e69d.gif)

### 刷写REC

```
fastboot flash recovery .\recovery.img
```

![刷写REC](https://i.loli.net/2017/11/01/59f9ecf745ee6.gif)

### 重启到REC

我是先重启进系统，然后再重启到REC的。

```
adb reboot recovery
```

![重启到REC](https://ooo.0o0.ooo/2017/11/01/59f9edc6211ce.gif)

### 刷写ROM

和[ADB配置和ADB刷机](http://www.xxwhite.com/2017/AdbUsing.html)中介绍的一样，首先双清一下，然后进入“高级”-“ADB线刷”。

![ADB线刷](https://i.loli.net/2017/10/02/59d21ed5a34fa.png)

```
adb sideload Aosp-Oreo-cancro-20171004.zip
```

![刷写ROM](https://i.loli.net/2017/11/01/59f9ef0d2b06a.gif)

### 后续工作

刷完ROM之后不要急着开机，还有一些其他的包需要刷入，比如Gapps，Root，Magisk或者Xposed等等，一起刷完了再开机。

我这里只刷了一个GAPPS包。

重新回到adb sideload里。

```
adb sideload open_gapps-arm-8.0-micro-20170824-UNOFFICIAL.zip
```

![刷写GAPPS](https://i.loli.net/2017/11/02/59f9efd5de44f.gif)

## 最后

最后开机，等几分钟就可以进入系统了，然后一连串的什么设置之类的，就OK了。

这是一次简单的刷机过程，对我来说，整个过程也就是十几分钟。积累了这么多年的经验，现在也能算得上是熟手了吧。

感觉搞机这个东西拼的就是胆量和经验，遇到不懂的不要怕，想办法去钻研，不要怕变砖了，变砖了还能救，不要遇到一点点小问题就去问，想办法自己解决，去搜索，找相似的问题，然后对照自己的问题，类比推出解决方法。

如果先交流什么经验，欢迎在下面评论区留言提问。