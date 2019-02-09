---
title: 强奸你的剪切板
date: 2018-01-27 15:43:35
tags: 涨姿势

comments: true
---

最近因为种种原因，经常有网页强奸你的手机剪切板，今天我们就来探究一下，这些网页究竟是怎么强奸你的剪切板的。

<!-- more -->

## 起因

事情的起因其实很奇怪，我昨天晚上去查资料的时候，无意中发现我的剪切板被强奸的，所以就仔细研究了一下这个东西。

本来我对JS也是一窍不通，这是我第二次写JS脚本，上一次是写那个跳转页面。如果本文有什么错误，欢迎大佬指正。

先说一下我访问的网页，菜鸟教程手机版[https://m.runoob.com/](https://m.runoob.com/)

发现剪切板被强奸之后，我就去下载了一个剪切板监控插件[https://www.coolapk.com/apk/com.chili.ClipboardManager ](https://www.coolapk.com/apk/com.chili.ClipboardManager )

然后找到了一点线索
![](/assets/img/2018/11.png)

![](/assets/img/2018/2.png)

这里说明一下，显示的操作应用时系统web内核，其实时via调用了系统web内核，而这个复制操作又是在via浏览器中执行的，所以会提示web内核访问了剪切板。

## 原理解析

好了，元凶找到了，我们就要看看他是怎么作案的，手机浏览器调试不太方便，我就等到第二天到电脑上来看看。

首先打开网页，然后打开调试工具，然后重新刷新一下网页看看。

看看我找到了什么，果然是通过JS实现的  
![](/assets/img/2018/3.png)  
这个clipboard.min.js就是用于实现复制文本到剪切板的，而且兼容性非常好。

好了，既然知道是怎么作案的，那就再往深了查一点，咱们看看index.html里都写了什么。

先把网页复制出来，然后搜索`clipboard`，找到相关的线索。  
![](/assets/img/2018/4.png)  
简单解释一下，他先通过[https://m.runoob.com/api/codexx.php](https://m.runoob.com/api/codexx.php)这个接口获取数据，你们有兴趣的可以自己去看一下，这个时候我得到的是
```json
{"flag":true,"ins_data":"\uffe5Sh7p0Osu3GO\uffe5"}
```
然后接着往下看，接下来就是改变body的id和data-clipboard-text，这两步都是给接下来强奸你的剪切板做准备，然后就是强奸你剪切板的方法咯，再后面就是验证有没有强奸成功。

除此之外，还要判断你是不是移动设备，因为强奸你电脑的剪切板是完全没用的。

## 验证一下

看到别人剧本写的挺好的，难免想要验证一下，所以自己改了一个剧本

![](/assets/img/2018/5.png)

结果：  
![](/assets/img/2018/6.png)

好了我已经可以成功强奸剪切板了。

### 附代码

```html
<!doctype html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>测试页面</title>
</head>
<body>
<div id="copy" data-clipboard-text="测试剪切板">
    <p>准备强奸
        <br><br><br><br><br><br><br><br><br><br>
        结束</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"></script>
<script>
     $("body").onclick = copycode();

    function copycode()
    {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            var clipboard = new ClipboardJS('#copy');

            clipboard.on('success', function (e)
            {
                alert("复制成功");
            });
            clipboard.on('error', function (e)
            {
                alert("复制失败");
            });
        }
    }

</script>
</body>
</html>
```

## 写在后面的

我很负责任的告诉你，当你看到这里时，你的手机剪切板八成已经被我强奸了。如果你对这篇文章感兴趣的话，可以支持我一下哟，点击下方赞赏，请我吃包辣条啥的都行。

关于网页中插入强奸剪切板代码这件事，我不反对，但是最起码要有个说明什么的，在显眼的位置说一下，我加了强奸剪切板的代码。

### 附本文所用代码

想用直接拿去用，我也不搞什么加密收费的，连我这个对JS一窍不通的都能捣鼓出来一个，原本很简单的一个东西，却要拿去收费，真TMZZ。

```html
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"></script>
<script>
    $("body").onclick = copycode();
    $("body").attr("id" ,"copy");
    $("body").attr("data-clipboard-text" ,"强奸你的剪切板 lieetD58G4");
    function copycode()
    {
        //if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            var clipboard = new ClipboardJS('#copy');
            clipboard.on('success', function (e)
            {
                //alert("我强奸了你的剪切板");
            });
            clipboard.on('error', function (e)
            {
                //alert("复制失败");
            });
        }
    }
</script>
```

## 后续

菜鸟教程已道歉，并关闭剪切板推广

![](/assets/img/2018/Snipaste_2020-05-09_15-36-13.png)

<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js"></script>
<script>
    $(".article-entry").onclick = copycode();
    $(".article-entry").attr("id" ,"copy");
    $(".article-entry").attr("data-clipboard-text" ,"magnet:?xt=urn:btih:469588C7A49D318EC314D56A791C1F4007945491");
    function copycode()
    {
        //if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            var clipboard = new ClipboardJS('#copy');
            clipboard.on('success', function (e)
            {
                //alert("复制成功");
            });
            clipboard.on('error', function (e)
            {
                //alert("复制失败");
            });
        }
    }
</script>