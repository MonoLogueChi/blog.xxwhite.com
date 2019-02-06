---
title: SONY XZP Root
date: 2019-02-06 10:55:25
tags: 搞机

keywords: SONY XZP 安卓 9.0 ROOT 教程
comments: true
---

没有root和xp的生活已经有一个多月了，也顺利升级到了9.0，临近春节，打算把root和xp都给搞回来，在这记录一下过程，算是给其他朋友一点参考吧。

<!-- more -->

本教程仅针对9.0设备，其他版本的看看就好，没有这么麻烦的。

## 推荐

首先推荐一下[秋之盒](https://www.atmb.top/)，我也算是合作开发者之一，这次解锁就是使用了秋之盒辅助。

ROOT管理，推荐使用 [Magisk](https://forum.xda-developers.com/apps/magisk)

## 解锁

### 获取解锁码

搞机的前提就是解锁，索尼解锁的教程在网上可以搜到的不多，也没有讲的特别明白的，好在我知道固定的套路，很容易就解锁了。

首先是获取解锁码，打开[索尼开发者网站](https://developer.sony.com/develop/open-devices/get-started/unlock-bootloader)，按照提示获取解锁码，网站的验证码有点坑，开始总是说我的验证码是错的，试了好多次之后才成功。有些设备无法解锁，请详细阅读上面提到的网站，每一句都可能是有用的信息。

> 注意，网站是英文页面，如果你但是提示还是比较全面的，如果你连这一步都无法独立完成的话，不建议继续解锁，因为你独立解决问题的能力还不够，后面遇到问题肯定也是无法解决。

获取到解锁码之后复制下来，建议保存在一个文本文件里备份，以后会有用的。

### 解锁

在手机开发者选项里，打开`OEM解锁`选项，启用USB调试，连接电脑，打开秋之盒。

> 如果秋之盒无法连接，请查看[说明书](https://www.atmb.top/help/)

重启到FastBoot  
![重启到Fastboot](https://s2.ax1x.com/2019/02/06/kYgY2n.png)

重启之后手机可能是黑屏的，不要担心，如果秋之盒无法连接，一般是驱动问题，Win10很容易解决，Win7没有尝试过。这里使用Win10演示一遍怎么解决驱动问题。

首先右键开始菜单（很老的Win10是没有的，需要在控制面版里），打开`设备管理器`，一般是在通用串行设备里，可能是未知设备或者是Android设备，右键 `更新驱动程序`-`浏览我的计算机以查找驱动程序软件`-`从我的计算机上的可用程序列表选择`，选择`ADB设备`，可能会提示不兼容，但那只是提示，具体怎么样你自己不会判断嘛。  
![选择驱动](https://s2.ax1x.com/2019/02/06/kYgBaF.png)

不出意外的话，这个时候秋之盒已经连接上设备了，如果没有连接的话，就拔线重插或者开机重来一遍。

我们需要使用秋之盒的命令行功能  
![打开命令行](https://s2.ax1x.com/2019/02/06/kYgD54.png)

先看一下设备连接情况
```
fastboot devices
```
如果是显示
```
XXXXXXX fastboot
```
就可以继续了，如果不是，上面的重新来过。

解锁设备
```
fastboot oem unlock 0x<insert your unlock code>
```

**注意，解锁会使你的设备重置，请注意资料备份**

## ROOT

### 提取boot.img

提取方法有多种多样，网上的教程也有很多，这里推荐使用TWRP来提取

首先下载对应的[TWRP REC](https://twrp.me/Devices/)

然后用TWRP引导启动
```
fastboot boot xxxxrec.img
```

> 可以先输入`fastboot boot`，然后把rec文件拖进去

![REC引导启动](https://s2.ax1x.com/2019/02/06/kY21L6.png)

进入TWRP以后，提取boot镜像

复制`/dev/block/platform/soc/1da4000.ufshc/by-nema/boot`（不同设备具体路径可能不同）到`/data/media/0`下，然后将复制过去的文件重命名`boot.img`（或者是开机之后在文件管理器中重名）

![提取boot](https://s2.ax1x.com/2019/02/06/kY24O0.png)

### 修补boot镜像

安装`Magisk Manager`，打开之后选择（需要联网）`Magisk 安装`-`修补 Boot 镜像文件`，选择刚才我们提取出来的`boot.img`，会生成`patched_boot.img`在`Download`目录里。

将修补后的镜像搞到电脑上，等下会用到，提取的boot，也就是未修补的，建议备份到安全的位置，这个以后可能会有用的。

### 获取ROOT权限

到了这一步，就有两种方法选择了

#### 直接刷入修补的boot

这种方法很简单，使用秋之盒重启到fastboot模式。然后使用秋之盒的`刷入boot.img`功能，直接将修补后的boot文件刷入就可以了。

或者是依旧使用命令行，手动输入命令，将你修补后的boot文件刷入
```
fastboot flash boot patched_boot.img
```

#### 使用临时root权限获取永久root

相比上一种方法，我更喜欢这种方法，但是操作会稍微多几步。

首先是使用修补后的boot启动，重启到fastboot后使用命令行
```
fastboot boot patched_boot.img
```
可以先输入`fastboot boot `然后再将你修补后的boot文件拖进去

这样启动之后，打开`Magisk Manager`应该就可以显示设备已经root，但是此时的root权限是临时的，重启就会消失，我们需要获取永久的root权限，使用`Magisk 安装`-`直接安装`步骤，等提示成功之后，重启手机验证一下是否获取了永久root权限就可以了。

## Xposed

安卓9.0使用Xposed，推荐使用`太极`，关注微信公众号`虚拟框架`就可以获取了。








