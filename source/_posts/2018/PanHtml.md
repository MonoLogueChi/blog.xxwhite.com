---
title: 一个页面跳转的小工具
date: 2018-01-21 14:56:43
tags: [建站笔记,小工具]

comments: true
---

在分享文件的时候，经常会用到网盘，但是网盘链接一旦挂了，再去改链接就会很麻烦了。如果只发在了一个地方，那还好说，但如果一篇文章发在了很多地方，那还要每个地方去改链接，好麻烦啊。  
正为了解决这个问题，我才做了这个小工具。

<!-- more -->

先举个栗子  
[我的博客](http://url.xxwhite.com?id=5a64230c9f5454007907ef7c)

## 需求

我有一些分享的资源，原始链接挂掉了，但是又不想重新去改，所以就做了一个跳转页面，方便更改分享的链接。

其他不为人知的需求

## 制作过程

### 原始方案

#### 方案1

使用 .net core + MySQL；

#### 方案2

使用 js脚本 + LeanCloud；

#### 方案3

使用 js脚本 + JSON文件；

综合比较三种方案，方案1原本是我最看好的，但是需要一个长期稳定的vps，所以pass了，没钱没办法。  
方案2和方案3都不需要成本，但是方案2可拓展性比较高，可以做一个很方便的后端管理程序，方案3的话，做后端应该是可以的，但是肯定没有方案2方便。

### 官方文档

既然是使用了LeanCloud，那就先去看看人家官方文档吧。

[https://leancloud.cn/docs/leanstorage_guide-js.html](https://leancloud.cn/docs/leanstorage_guide-js.html)

说实话，这是我第一次写JS脚本，压力很大啊，这东西就是一窍不通啊。

### 原理

我使用了LeanCloud的数据存储功能，我创建了一个Class，这个Class增加一列“url”，专门用来保存链接。

![](https://s1.ax2x.com/2018/01/21/bkI1H.png)

单独做一个页面，每次访问这个页面时自动获取网址参数，然后查询到相应的链接，然后跳转访问，就是这么简单。

### 开始撸吧

首先是要获取网址参数，我根本没写过js，所以只能靠百度咯
```js
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
```
纯复制粘贴，毫无手打。

然后需要引入LeanCloud的SDK
```html
<script src="//cdn1.lncld.net/static/js/3.5.0/av-min.js"></script>
```

```js
var APP_ID = '';
var APP_KEY = '';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
```

前面一切顺利，然后看LeanCloud官方文档，找到查询方法。  
这里顺便提一句，我最开始是单独创建了一列“hurl”来充当网址参数的，但是发现这样就是多此一举，自己搞个参数，一旦一不小心重复了怎么办？还不如直接用objectId当参数呢。但是直接用objectId作为参数也有不方便的地方，就是删除这条分享之后，以后不能再补一条一样的链接出来，因为objectId是随机产生的，并且是不会重复的。  
废话不多说，直接撸代码
```js
var id = GetQueryString("id");
var query = new AV.Query('');
query.get(id).then(function (xxwhiteurl)
{
    var url = xxwhiteurl.get('url');
    window.onload = window.location.href = url;
});
```
代码写的好丑啊，写完了都不敢看。

### 完整实例

把完整实例贴出来，如果有人想用的话可以先尝试一下

```html
<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="UTF-8">
    <title>页面跳转中</title>
</head>
<body>
<script src="//cdn1.lncld.net/static/js/3.5.0/av-min.js"></script>
<script>
    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    var APP_ID = '你的APP_ID';
    var APP_KEY = '你的APP_KEY';
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });

    var id = GetQueryString("id");
    var query = new AV.Query('你的存储链接的Class名称');
    query.get(id).then(function (xxwhiteurl)
    {
        var url = xxwhiteurl.get('url');
        window.onload = window.location.href = url;
    });
</script>
</body>
</html>
```

## 后续

目前完成度 10%，下一步打算看看能不能做个后端出来，如果把后端做出来，再看看能不能弄个用户管理系统出来，如果可以把用户管理系统做出来，完成度基本就能达到90%了。

我一个完全不懂js的渣渣只能看着官方文档一步一步的摸索了，等完全做出来，我在小范围分享试用一下吧。

如果有什么想法，或者是有什么指教，欢迎在下面的评论区指出。