---
title: Unity包管理和调试
date: 2018-12-08 22:10:18
tags: Unity

keywords: Unity VisualStudio ReSharper IDE NuGet Debug 断点 调试
comments: true
---

前面讲了怎么[打造Unity最强IDE](/2018/unity-vs-resharper.html)，那么今天就来讲一下怎么用前面搭建好的环境快速开发。

<!-- more -->

## Nuget包管理
> NuGet is the package manager for .NET. The NuGet client tools provide the ability to produce and consume packages. The NuGet Gallery is the central package repository used by all package authors and consumers.

对于 .net 项目而言，NuGet确实是最好的包管理器，Unity项目也不不例外。

那么今天就来讲一下在Unity项目里管理NuGet包。

### cli
使用命令行工具，理论上是可行的，但是未免也太蛋疼了吧，还是换个更好一点的工具试试吧；

### NuGetForUnity
> NuGetForUnity is a NuGet client built from scratch to run inside the Unity Editor. NuGet is a package management system which makes it easy to create packages that are distributed on a server and consumed by users. NuGet supports sematic versioning for packages as well as dependencies on other packages.

从介绍上来看，这是一款专为Unity打造的NuGet包管理工具，并且是开源工具，发布在GitHub上：

- 开源地址：[https://github.com/GlitchEnzo/NuGetForUnity](https://github.com/GlitchEnzo/NuGetForUnity)  
- 插件下载地址：[https://github.com/GlitchEnzo/NuGetForUnity/releases](https://github.com/GlitchEnzo/NuGetForUnity/releases)

下载之后导入插件，然后就可以正常使用了（某些版本可能会有点bug，这东西暂时还不太稳定，主要是依赖这种东西太蛋疼了，你根本不会知道哪些包会和Unity冲突）

![使用NuGet包](https://s1.ax1x.com/2018/12/08/F8JmxH.png)

先随便导入一个包吧，以后会用到这个包

> 这里有个坑注意一下，有些依赖导入Unity之后会报错，这个时候需要手动把报错的包卸载掉。


## 调试

Unity如果出线错误，或者是没有出线自己预想的结果，这个时候应该怎么办呢？应该自己想办法查找问题所在，而不应该第一时间就跑去问某某某，自己是哪里出了问题。

今天就大致讲一下怎么自己排查问题出在哪里。

### Debug.Log()
这是最常用的一种方法，我们用 `Debug.Log` 把我们想要检查的对象的某个属性输出在日志里，然后去看和我们预想的是不是一样的。

比如我创建了一个简单的Demo（可以在文章结尾下载到）

预期是这样的
![预期](https://s1.ax1x.com/2018/12/08/F8ti4K.gif)  
但是实际上却是这样的
![实际](https://s1.ax1x.com/2018/12/09/F8tnHI.gif)


为什么会这样呢？肯定是中间哪里弄错了，先来看一下代码

```cs
using UnityEngine;
using UnityEngine.UI;

public class DebugLog : MonoBehaviour
{
    private Slider _slider0;
    private Slider _slider1;

    private void Start()
    {
        _slider0 = GameObject.Find("Slider0").GetComponent<Slider>();
        _slider1 = GameObject.Find("Slider1").GetComponent<Slider>();
    }

    private void Update()
    {
        SyncSlider();
    }

    private void SyncSlider()
    {
        var value0 = _slider0.value * 0.5f;
        _slider1.value = value0;
    }
}
```

一眼望过去，左看又看，横看竖看也看不出来问题啊 ~~（这要是还看不出来就是真眼瞎了）~~ 

既然肉眼看不出来，那咱们就先简单分析一下这简简单单的两行代码，原理也很简单，先获取到`Slider0`的值，赋值给`value0`，然后再把`value0`的值赋给`Slider1`。

咱们打一下Log看看`value0`的值是不是与`Slider0`的值一致

```cs
private void SyncSlider()
    {
        var value0 = _slider0.value * 0.5f;
        Debug.Log($"Slider0Value:{_slider0.value},value0:{value0}");
        _slider1.value = value0;
    }
```

![Log](https://s1.ax1x.com/2018/12/09/F8NeRU.png)

我们截取了Unity中控制台窗口的一部分，从图中我们可以看出，`value0`的值总是`Slider0`的值的一半，再返回去检查代码，发现原来是手抖加了一个`* 0.5`啊，改过来就可以符合我们的预期了。

```diff
    private void SyncSlider()
    {
-       var value0 = _slider0.value * 0.5f;
+       var value0 = _slider0.value;
        _slider1.value = value0;
    }
```

### 打断点
说实话，这个例子举得不太恰当，因为在被Update函数调用的函数里打断点调试，是一件很蛋疼的事，需要一些技巧才能熟练使用。但是今天仅仅是演示怎么找到问题所在，所以看我怎么操作就可以了。

首先是需要安装 `Visual Studio Tools for Unity`

![安装Visual Studio Tools for Unity](https://s1.ax1x.com/2018/12/09/F8qATH.png)

同样用刚才的项目做演示，打开刚才的项目，简单将 `Debug.Log()` 注释掉

```cs
using UnityEngine;
using UnityEngine.UI;

public class DebugLog : MonoBehaviour
{
    private Slider _slider0;
    private Slider _slider1;

    private void Start()
    {
        _slider0 = GameObject.Find("Slider0").GetComponent<Slider>();
        _slider1 = GameObject.Find("Slider1").GetComponent<Slider>();
    }

    private void Update()
    {
        SyncSlider();
    }

    private void SyncSlider()
    {
        var value0 = _slider0.value * 0.5f;
        //Debug.Log($"Slider0Value:{_slider0.value},value0:{value0}");
        _slider1.value = value0;
    }
}
```

将调试信息改为 `附加到Unity并播放`

![附加到Unity并播放](https://s1.ax1x.com/2018/12/09/F8qlnS.png)

因为需要打断点的位置需要在 `Update` 方法里调用，所以如果一开始直接就打断点的话，这个东西根本没有办法调试，我们需要先让程序运行起来，中途再打断点。

![打断点](https://s1.ax1x.com/2018/12/09/F8zsrq.png)

通过打断点的方法，我们同样可以找到问题所在。

除了上面说的，先运行再打断点，还可以用加判断条件的方法调试被 `Update` 调用的方法。

![判断断点](https://s1.ax1x.com/2018/12/09/FGp64U.png)

考虑到上面这个例子有点不太恰当，在Demo里我又写了一个关于2D碰撞检测的问题，有兴趣的可以研究一下这个东西怎么调试

### 比较两种方法
使用 Debug.Log() 和打断点两种方法，具体哪一种比较好用呢？从理论上来讲，打断点好用，而且功能强大，越是复杂的问题，使用起来相对 Debug.Log() 越简单，但是在某些问题上，Debug.Log() 却又非常方便，两种调试方法结合起来使用，可以让你迅速找到问题所在，遇到小问题，再也不用去某某群问别人“为什么我照着教程做，但是XX结果和教程里不一样呢？”

Demo下载地址：[https://dl.sm9.top/blog/unity/调试demo/](https://dl.sm9.top/blog/unity/%E8%B0%83%E8%AF%95demo/)