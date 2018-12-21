---
title: 增加一个MarkDown文件下载功能
date: 2018-02-03 16:10:01
tags: 建站笔记

comments: true
---

昨天给博客加了一个下载MarkDown文件的功能，原本是很简单的一件事，但是中间涉及到了很多麻烦东西，所以就决定简单记录以下。

<!-- more -->

## 起因

这件事的起因是前两天我写的一篇文章意外火了一遍，引来了一大波PV，又有很多人转了这篇文章，还有人问我要MarkDown源文件。受到[Jerry Qu的小站](https://imququ.com/post/about.html)的启发，决定做一个MarkDown文件下载的功能。

## 捋一下过程

### Hexo修改部分

**本文介绍修改方法仅使用于Yilia主题，其他主题请参考原理，自行寻找食用方法**

修改\layout\_partial\post\nav.ejs，我找了好久才发现加在这里最合适，由于技术比较渣，暂时只能做到这样了，以后会继续进步的。

在`<% if (post.next){ %> … <% } %>`和`</nav>`之间添加

```ejs
<% if (theme.mdhost){ %>
    <br>
    <a href="<%- url_for(theme.mdhost) %><%- url_for(post.path) %>.txt" target="_blank">获取文章MarkDown文件</a>
  <% } %>
```

在Yilia主题的`_config.yml`中添加

```yaml
mdhost:  #MarkDown文件下载地址,如：http://md.xxwhite.com/
```

这样点击下面的按钮的时候，就会调到同名的txt文件了。

比如这篇文章，点击获取MarkDown文件，就会跳转到页面`http://md.xxwhite.xom/2018/add-download-markdown.txt`

### MarkDown文件

MarkDown文件我是传到了网易云的对象存储服务中，如果要是把文件传到相同位置，那就更简单了（我接下来就是打算要这么做的，不闲着蛋疼去薅羊毛了）

首先是要把MarKDown文件转码为ANSI，UTF-8会乱码，不是自己搭的服务，请求头没办法改，接下来要改后缀为.txt，.md默认Content-Type为application/octet-stream，会自动变成下载。

我使用一个批处理自动化完成这个东西

```bat
cd D:\MonoLogueChi\Documents\Hexo\blog-md\
del /S /Q .\*

Xcopy /Y /S D:\MonoLogueChi\Documents\Hexo\blog\source\_posts\* D:\MonoLogueChi\Documents\Hexo\blog-md

for %%i in (*.md) do (
  iconv -f UTF-8 -t GBK %%i > %%i.b
  if exist %%i.b (
    del %%i
    ren %%i.b %%~nxi
  )
)
ren *.md *.txt

cd .\2017\
for %%i in (*.md) do (
  iconv -f UTF-8 -t GBK %%i > %%i.b
  if exist %%i.b (
    del %%i
    ren %%i.b %%~nxi
  )
)
ren *.md *.txt

cd ..\2018\
for %%i in (*.md) do (
  iconv -f UTF-8 -t GBK %%i > %%i.b
  if exist %%i.b (
    del %%i
    ren %%i.b %%~nxi
  )
)
ren *.md *.txt

cd /d %~dp0
pause
```

这个用到了iconv.exe这个东西，可以在这里下载 [iconv.7z](https://t1.aixinxi.net/o_1c5fbqvmj3u11pp6ml5v6dnfa.7z)

后面再加上自动上传就可以啦，很简单的一步式操作。

```bat
tool.bat -putfile D:\MonoLogueChi\Documents\Hexo\blog-md <你的桶名称> -replace true
```

## 写在后面的

目前技术比较渣，暂时只能写到这样了，如果有什么更好的想法发话，欢迎在下面的评论区一起讨论。