---
title: Unity2D动画绑定
date: 2019-11-13 15:48:35
tags: [Unity]

keywords: Unity 2D动画 骨骼动画 动画绑定
comments: true
---

这次做了一个Unity的2D动画，记录一下，怕下次忘了怎么做。

<!-- more -->


## 要求

### unity3d

首先是先决条件，推荐使用Unity2019.2或更高版本，安装`2D Animation`和`2D PSD Importer`包。

官方文档：
- [https://docs.unity3d.com/Packages/com.unity.2d.animation@3.0/manual/index.html](https://docs.unity3d.com/Packages/com.unity.2d.animation@3.0/manual/index.html)
- [https://docs.unity3d.com/Packages/com.unity.2d.psdimporter@2.0/manual/index.html](https://docs.unity3d.com/Packages/com.unity.2d.psdimporter@2.0/manual/index.html)


![包管理器](/assets/img/2019/Snipaste_2019-11-13_15-05-41.png)

### 资源文件

资源文件需要`PSB`格式，直接使用PS另存为PSB格式就可以了。

{% raw %}
<video id="video1" autoplay loop muted src="/assets/img/2019/1.gif"></video>
{% endraw %}

我是线在手机上随便画了一个，然后传到电脑上，用PS另存为PSB格式。

## 绑定骨骼

### 导入

直接把PSB文件拖进Unity里就可以了。

### 编辑

打开骨骼编辑系统。

{% raw %}
<video id="video2" autoplay loop muted src="/assets/img/2019/2.gif"></video>
{% endraw %}

如果使用自动处理会简单一些，先创建骨骼，然后绑定，使用`Auto Geometry`绑定，并自动创建权重。这个时候会发现网格分好了，但是这些东西全都是连成一片的，动手臂身子也会跟着动。

这里身子部分是不需要动画的，所以直接把身体部分的网格删掉就可以了。

{% raw %}
<video id="video3" autoplay loop muted src="/assets/img/2019/3.gif"></video>
{% endraw %}

也可以先选定图层，然后再自动创建网格。

{% raw %}
<video id="video4" autoplay loop muted src="/assets/img/2019/4.gif"></video>
{% endraw %}

如果是手动处理的话，会麻烦一点，但是很多情况下更需要手动去处理。我这里只演示一部分。

{% raw %}
<video id="video5" autoplay loop muted src="/assets/img/2019/5.gif"></video>
{% endraw %}

## 编辑动画

动画编辑就和3D动画没什么区别了，正常做就可以了。

{% raw %}
<video id="video5" autoplay loop muted src="/assets/img/2019/6.gif"></video>
{% endraw %}
