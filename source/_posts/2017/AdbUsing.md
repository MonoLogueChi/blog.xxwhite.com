---
title: ADB配置和ADB刷机
date: 2017-10-22 22:53:00
tags: 搞机

comments: true
---

adb的全称为Android Debug Bridge，就是起到调试桥的作用。通过adb我们可以在Eclipse中方便通过DDMS来调试Android程序，说白了就是debug工具。adb的工作方式比较特殊，采用监听Socket TCP 5554等端口的方式让IDE和Qemu通讯，默认情况下adb会daemon相关的网络端口，所以当我们运行Eclipse时adb进程就会自动运行。 

<!-- more -->
 
`这段其实没有什么用，了解一下就好了`

## ADB环境配置

### 准备工作 

要想使用adb，就需要adb工具包（不需要完整的，简单的就可以），这里有Google官方下载地址，如果打不开（原因你懂的），请使用我提供的下载地址。

> 1. Win版 [https://dl.google.com/android/repository/platform-tools-latest-windows.zip](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)  
> 2. Linux版 [https://dl.google.com/android/repository/platform-tools-latest-linux.zip](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)  
> 3. Mac版 [https://dl.google.com/android/repository/platform-tools-latest-darwin.zip](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)
> 4.国内用户请使用 [前往下载](https://pan.lanzou.com/b86819/)

使用adb需要手机驱动，可以利用我提供的adb驱动安装工具来安装驱动（适用大部分手机，小部分不适用，安装驱动时需要手机连接电脑，最好开启USB调试），也可以用豌豆荚之类的软件来安装驱动（不推荐），也可以利用自己手机自带的光盘或者电脑工具来安装驱动（推荐）。在安装驱动过程中，win可能会阻止，请授权安装（别问我为什么，这个解释又会涉及到很多东西）。

我提供的工具在上面第四个链接里有，也可以到这里下载 [http://adbdriver.com](http://adbdriver.com/)。

### ADB配置

如何使用ADB工具，我提供了两种解决方式，另外，我自己编写的ADB工具箱应该可以在近期完工了（主要是我懒，几个星期都懒得动一次，如果一直拖下去一年也做不完）。

#### 临时使用

下载并解压adb工具包，然后在解压的文件夹中，按住Shift键，点击鼠标右键，选择“在此处打开命令提示符”或者“在此处打开Powershell窗口”。

打开之后就可以用啦，不放心的话可以敲一个 `adb version` ，就会输出信息，结果图看后面。

![临时使用adb](https://i.loli.net/2017/10/02/59d20d4fef964.gif)

#### 配置环境变量

这个懂的人就很简单，不懂的看起来就会很麻烦，而且不同的Win版本还稍微有一点不一样，所以就跟着我一步一步的学一下吧。

下面的步骤以Win10系统为例，Win7略有不同；

1. 下载上面的adb工具包，然后解压到合适的位置（你想放在哪都行）；
2. 复制工具包的路径；  
![adb工具路径](https://i.loli.net/2017/10/02/59d20ffb3346f.png)  
3. 依次打开 此电脑 > （右键）属性 > 高级系统设置 > 环境变量；
4. 找到系统变量中的“Path”；
5. 点击“编辑”，然后在右侧找到新建，然后把刚才复制的路径粘贴过去，然后一路点“确定”，就可以了。  
![配置环境变量](https://i.loli.net/2017/10/02/59d211c3f2110.png)  
6. 我也不知道是否需要重启系统才能生效；
7. 测试，在任意位置打开CMD窗口或者PowerShell窗口，然后输入`adb version`；  
![adb版本输出](https://i.loli.net/2017/10/02/59d2130398784.png)  
8. 如果电脑是Win7，第五步需更改为：在最后粘贴复制的文件夹路径，并添加分号（注意前面有没有分号，还有，分号要是英文的分号），然后一路确定就可以了，举个栗子，`D:\AndroidSDK\platform-tools;`  
![Win7配置环境变量](https://i.loli.net/2017/10/02/59d21423b0430.png)

## ADB使用

在说明使用方法之前，先简单介绍几个常识：
- Tab键可以补全路径，有多个符合条件时可以按Tab键切换（这个炒鸡重要）；
- 绝对路径，Win上绝对路径格式为：`D:\AndroidSDK\platform-tools`；
- 相对路径，Win上相对路径格式为：`.\api`,父目录：`..\`，使用相对路径时注意你打开窗口的文件夹，如果时在刷机包所在的文件夹打开窗口，是最方便的；
- 安卓路径，都是从`/`开始，比如`/data/media/0`、`/sdcard`等；

想要使用简单一点，多用相对路径，少用绝对路径。

### 连接设备

1. 在手机开发者选项里勾选上“USB调试”（一般在设置里，如果没有可以去百度一下自己的机型怎么打开开发者选项）；
2. 用USB线连接电脑，注意在手机弹出“是否授权此电脑启用调试”的时候点“是”，最好勾上此电脑不再询问或者是永久授权之类的（建议关闭其他手机助手工具，因为可能会造成端口冲突）；
3. 在任意位置打开CMD窗口或者PowerShell窗口，输入 `adb devices` 回车，查看连接设备（有些可能是在这个时候弹出来授权提示）；
4. 如果出现 `List of devices attached xxxxxxxxxxx device` 便是连接成功了，如图；  
![adb连接](https://i.loli.net/2017/10/02/59d21915bf157.png)  
5. 如果想玩高级一点的，可以使用adb网络调试，但不能用于刷机。

### 一些常用的adb命令

- 查看连接设备：`adb devices`；
- 重启：`adb reboot`；
- 重启到rec：`adb reboot recovery`；
- 重启到bootloader：`adb reboot bootloader`；
- 安装apk：`adb install xxxx.apk` ；
- 卸载apk：`adb uninstall xxx.apk` ，可以使用[-k]参数，即 `adb uninstall -k xxx.apk` ，这里的xxxx.apk需要使用包名，可以利用pm命令列出 `adb shell pm list packages` （这个除了极特殊用途外，用处不大）；
- adb刷机：`adb sideload xxx.zip` （这个下面会详细介绍）；
- adb shell：`adb shell` （不懂不要用）；
- 推送电脑文件到手机：`adb push xxxx yyyy` ，其中的xxxx是电脑上的文件路径，yyyy是手机上的文件路径，比如我要推送“C盘adb目录下的adb.exe”到手机的“/data/media/0”目录下，我就需要命令`adb push C:\adb\adb.exe /data/media/0`；
- 获取手机文件到电脑：`adb pull yyyy xxxx` ，其中yyyy是手机路径及文件，xxxx是电脑路径，比如我要获取“手机上的/system/framework”文件夹到“电脑D盘下的framework文件夹”，我就需要 `adb pull /system/framework D:\framework`。

### fastboot模式下的一些命令 

重启到fastboot模式之后可以使用fastboot命令线刷一些分区，这也是刷rec最常用的方法

- 查看连接设备：`fastboot devices`；
- 刷写分区：`fastboot flash xxxx xxxxx.img` ，其中xxxx代表分区，可以是recovery，system，data，或者是cache，xxxx.img代表镜像，需要输入路径和文件名称。某些手机需要输入[-i]参数，具体的请看自己手机论坛的教程，我这里教的只是通用方法，只能负责引你入门，这个以后会讲一下的；
- 格式化分区：`fastboot format xxxx` **慎用！！！**；
- 重启：`fastboot reboot`；
- 重启到fastboot：`fastboot reboot-bootloader`；
- boot引导启动：`fastboot boot xxxx.img`；
- 解锁：不同品牌的手机解锁方法略有不同，可以到自己的手机论坛里去查。

**其中刷写镜像的命令是最常用的**

### adb shell命令

ADB shell命令有很多，如果没有基础的话，不是一句两句就能说清楚的，想学的可以看这里[http://adbshell.com](http://adbshell.com/)


### adb sideload 刷机

需要使用第三方REC，某些官方REC确实也支持adb sideload升级，推荐使用TWRP的REC。

1. 重启到REC，然后打开“高级”-“ADB线刷”（“Advanced”-“ADB Sideload”）；  
![adb线刷](https://i.loli.net/2017/10/02/59d21ed5a34fa.png)  
2. 在电脑上刷机包所在的文件夹打开CMD窗口或者PowerShell窗口；
3. 输入`adb devices`验证连接状态；  
![adb sideload连接状态](https://i.loli.net/2017/10/02/59d21f9eead63.png)  
4. 使用命令 `adb sideload xxx.zip` 刷入刷机包。

## 写在后面的

本文所涉及到的都是最简单的adb命令，适用于刷机爱好者，因为adb命令实在是太多了，可以做到的事情也非常的，如果想了解更多adb命令，请到[http://adbshell.com](http://adbshell.com/)

如果本文内容有什么错误，欢迎在下面评论区指正。