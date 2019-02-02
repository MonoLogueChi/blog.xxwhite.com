---
title: 使用JetBrains Rider作为Unity的IDE
date: 2018-01-11 00:10:27
tags: Unity

keywords: Unity IDE UnityIDE JetBrains Rider
comments: true
---

今天看到Unity官方微信公众号推送消息

> 从Unity 2018.1开始，我们将不再把MonoDevelop-Unity与Unity一起捆绑发行，并且在Unity 2018.1及后续版本中，将不再支持使用MonoDevelop-Unity进行开发。

<!-- more -->

## 事情的起因

> 随着Unity中.NET 4.6脚本运行库(当前处于实验阶段)的升级，我们开始支持C# 6.0及更高版本中所提供的许多令人兴奋的全新C#特性。与此同时，为这些新的C#特性提供一个相匹配的良好IDE体验，对于我们来说也十分重要。
> 现在与Unity一同发行的MonoDevelop-Unity 5.9.6并不支持最新的C#特性，并且也不支持在Unity的.NET 4.6脚本运行时中调试C#脚本。为此我们将做出二项改变。
> 1.  在MacOS和Windows上，移除Unity 2018.1中的MonoDevelop-Unity 5.9.6安装程序，并从Unity 2018.1开始，不在支持使用它进行Unity开发。
> 2.  在Unity 2018.1中，仅将Visual Studio for Mac作为MacOS上的唯一C# IDE。在Windows上，我们将继续保留Visual Studio 2017 Community，并不再将MonoDevelop-Unity作为可选项。
> 自Unity 5.6.1开始，Visual Studio for Mac已集成 Unity插件，即支持最新的C#特性，又支持在.NET 4.6脚本运行时上调试C#脚本。MacOS上的MonoDevelop-Unity用户可以下载并安装Visual Studio for Mac，并即刻开始使用。

上面这一段内容挺长，大概总结起来就说，从下个版本开始，Unity将不会捆绑MonoDevelop-Unity，Visual Studio将会成为官方指定IDE。  
额，这是普天同庆吗，早就受不了MonoDevelop了，这东西真的不好用，不少新人还都要用这个。至于宇宙最强IDE `Visual Studio` ，虽然用了很长时间，但是这个东西启动是真的慢，而且不装JB插件（JetBrains ReSharper）裸奔的话，也不太好用。

在Unity官方微信公众号推文里，还意外的发现了

> 除了Visual Studio for Mac和Visual Studio 2017 Community之外，现在还有一些其它的C# IDE替代品可用。
> 1. Visual Studio Code (Windows, macOS, Linux)；
> 2. JetBrains Rider (Windows, macOS, Linux)。

WTF？朕的大清亡了？JB家还有C#的IDE？看来有必要搞一下了。

## 安装过程

### 下载

下载就不必多说了，随便百度一下就有一堆的。找到官网去下载就好，这里给贴出来一个下载地址：

[https://www.jetbrains.com/dotnet/promo/unity/](https://www.jetbrains.com/dotnet/promo/unity/)

### 安装

安装过程也不难，按照步骤点下一步就行了，建议安装在C盘，不差这点空间的。选择你想要的界面，到最后一步是需要你激活或者试用，可以免费试用30天。如果你想要激活的话，价格也不便宜，当然也可以用学生账户，当然如果想偷着用的话，请百度怎么激活，至于我的激活方法，也就不透露了。

最常用的激活方式：  
![](https://s1.ax2x.com/2018/01/11/jTNrq.png)

### Student License

如果是大学生的话，可以用edu邮箱申请Student License免费使用，下面简单介绍一下申请流程。

- 首先在这个页面申请 [https://www.jetbrains.com/zh/student/](https://www.jetbrains.com/zh/student/)
- 填写申请信息  
![](https://s1.ax2x.com/2018/01/11/jM1sJ.png)  
- 等那边发邮件确认，这个有一定的延时，注意一下是不是被判为垃圾邮件了。收到邮件之后点链接过去确认。确认之后，过一会就会再发邮件过来邀请你注册账号，这个时候通过邮件的链接过去注册一个账号，就可以使用Student License了  
![](https://s1.ax2x.com/2018/01/11/jMIjp.png)
![](https://s1.ax2x.com/2018/01/11/jMtq6.png)
- 最后用Student License激活就可以了（最后这个贴的不是Rider的图）。
![](https://s1.ax2x.com/2018/01/11/jMKBl.png)

## Unity里使用JB Rider

上面说了怎么安装JB，这里说一下怎么在Unity里用JB（以64位Win10装的Unity2017.3为例）。

- 在`Edit-Preferences`里找到`External Tools`，然后选择脚本编辑工具`External Script Editor`；
- 选择最后一项`Browse`，然后找到Rider的安装位置，我的是在`C:\Program Files\JetBrains\JetBrains Rider 2017.3\bin`，然后选择`rider64.exe`；
- 稍微等电脑反应一下，就大功告成了，第一次打开Riders的时候会提示加载Unity资源包。


放张图欣赏一下吧

![](https://s1.ax2x.com/2018/01/11/GDCs9.png)