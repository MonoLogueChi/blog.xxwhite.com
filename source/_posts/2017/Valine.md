---
title: 加个Valine评论系统
date: 2017-12-20 14:36:07
tags: 建站笔记

keywords: Valine Hexo Yilia 添加Valine
comments: true
---

现在我在Hexo的yilia主题上用上了valine评论系统。

前两天在v站无意中看到了关于valine的评论，这是什么东东，难道大清亡了？看了一下，是个不错的好东东，正好我对畅言不太满意，即使是用了自定义样式也不方便。好，那就研究一下，看看能不能用上。

<!-- more -->

{% meting "003YNUtF25FxAk" "tencent" "song" %}

## 先看看有没有现成的轮子

最先想到的是valine的官网和yilia项目，看了一下，果然找到了。

[https://github.com/litten/hexo-theme-yilia/pull/646](https://github.com/litten/hexo-theme-yilia/pull/646)

但是这个样式有点丑啊，我想要个好看点的，接着在V站搜，真的找到了。

[https://panjunwen.com/diy-a-comment-system/](https://panjunwen.com/diy-a-comment-system/)

轮子人家都已经造好了，咱们能不会用吗，直接上手撸。

## 简单记录一下撸的过程

- 主要过程参考了上面两处，感谢大神们无私奉献，让我们有了可以轻松使用这么方便的评论系统。另外，我写的比较简单，如果看不懂我写的，就去看[@Deserts](https://panjunwen.com/diy-a-comment-system/)或者[@云淡风轻](https://ioliu.cn/2017/add-valine-comments-to-your-blog/)的博客。

### 部署云引擎

- 先简单看了一下，这个评论系统的基础是LeanCloud，先去注册一个账号，[点这里过去](https://leancloud.cn)
- 然后创建应用，应用名字什么的随意。
- 创建应用之后就可以得到Key了，这个等一下会用到的。  
![](https://s1.ax2x.com/2017/12/20/zbDDr.png)  
- 然后设置安全域名。  
![](https://s1.ax2x.com/2017/12/20/zbBpY.png)  
- 部署云引擎，这一部分去看[@Deserts](https://panjunwen.com/diy-a-comment-system/)博客里关于云引擎部署的部分吧，反正原理我不懂。
- 云引擎环境变量我可以简单解释一下（新版增加了不少环境变量，怎么部署请看原站）。  
![](https://s1.ax2x.com/2017/12/20/zbjpK.png)  

### 修改主题模板

这里基本上是照抄[https://github.com/litten/hexo-theme-yilia/pull/646](https://github.com/litten/hexo-theme-yilia/pull/646)

#### _config.yml
```
#6、Valine https://valine.js.org
valine: 
 appid:  #Leancloud应用的appId
 appkey:  #Leancloud应用的appKey
 verify: false #验证码
 notify: false #评论回复提醒
 avatar: '' #评论列表头像样式：''/mm/identicon/monsterid/wavatar/retro/hide
 avatar_cdn: 'https://sdn.geekzu.org/avatar/' #头像CDN
 placeholder: '瞎白话' #评论框占位符
 pageSize: 15 #评论分页
```
其中verify和notify一定要是false，不要打开，**不要手贱**  
avatar参数详见[https://valine.js.org/avatar](https://valine.js.org/avatar)  
在这里设置头像[https://cn.gravatar.com/](https://cn.gravatar.com/)

#### layout/_partial/article.ejs

重写了一下style，应该可以做到响应式布局了

```
  <% if (theme.valine && theme.valine.appid && theme.valine.appkey){ %>
    <section id="comments" class="comments">
      <style>
        .comments{margin:30px;padding:10px;background:#fff}
        @media screen and (max-width:800px){.comments{margin:auto;padding:10px;background:#fff}}
      </style>
      <%- partial('post/valine', {
        key: post.slug,
        title: post.title,
        url: config.url+url_for(post.path)
        }) %>
    </section>
  <% } %>
```

#### layout/_partial/post/valine.ejs

```
<div id="vcomment" class="comment"></div>
<script src="//cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/leancloud-storage/dist/av-min.js"></script>
<script src='//cdn.jsdelivr.net/npm/valine/dist/Valine.min.js'></script>
<script>
   var notify = '<%= theme.valine.notify %>' == true ? true : false;
   var verify = '<%= theme.valine.verify %>' == true ? true : false;
   new Valine({
            av: AV,
            el: '#vcomment',
            notify: notify,
            verify: verify,
            app_id: "<%= theme.valine.appid %>",
            app_key: "<%= theme.valine.appkey %>",
            placeholder: "<%= theme.valine.placeholder %>",
            avatar: "<%= theme.valine.avatar %>",
            avatar_cdn: "<%= theme.valine.avatar_cdn %>",
            pageSize: <%= theme.valine.pageSize %>
    });
    if(window.location.hash){
          var checkExist = setInterval(function() {
            if (document.getElementById(window.location.hash.replace("#",""))) {
              location.href = window.location.hash;
              clearInterval(checkExist);
            }
          }, 250);
        }
</script>
```
这里要注意一下el参数，我就是被这个坑爹的参数给坑了半个多小时，el参数要和上面的`id`一致。  
具体有哪些参数可以自己定义，可以看这里[https://valine.js.org/configuration](https://valine.js.org/configuration)

~~至于`Valine.min.js`可以去[@Deserts](https://panjunwen.com/diy-a-comment-system/)这里下载，然后放到自己的空间里面。~~

## 测试效果

完成了上面的工作，就可以试试能不能正常使用了，注意，在本地测试的时候是不能正常加载评论的，因为你设置了域名限制。

### 评论样式

![](https://s1.ax2x.com/2017/12/20/zbJvz.png)

### 邮件测试

- 评论通知  
![](https://s1.ax2x.com/2017/12/20/zbP1N.png)

- 被@通知  
![](https://s1.ax2x.com/2017/12/20/zbCCA.png)

## 后续更新

- 更改头像镜像源（中间还用过一段时间v2ex的cdn镜像），目前这个头像源比较满意，基本可以解决更改头像后不刷新问题。
- 为了节约流量（薅羊毛），将valine.min.js从我的存储空间中移走，貌似可以节约很大一部分流量，我现在用的valine.min.js使用CDN。
- 2018年1月20日，迁移leancloud至华北区，并手动迁移评论数据（复制粘贴了十多分钟），幸好大部分都是没用的数据。
- 2018年9月20日，新的ValineAdmin更新了不少东西，建议去原站仔细阅读，我这里不一定是最新的。

## 写在后面的

**那些想要测试评论系统的去 [https://valine.js.org](https://valine.js.org) ，不要在我这里测试评论，有想要讨论的麻烦留下正确邮箱地址。**

其实这些东西都是很久以前的了，后来修修补补又更改了许多，参考一下还可以，照抄就算了吧。

**如需快速联系作者，请使用微信方式联系**

**好无聊啊，好想被XX**