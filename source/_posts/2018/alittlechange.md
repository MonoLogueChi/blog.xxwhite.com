---
title: 一点微小的改动
date: 2018-01-29 21:02:01
tags: 建站笔记

comments: true
---

虽然本站的速度已经能看得上了，但是追求极致的我，还是继续做着微小的改动。

<!-- more -->

本站是托管在又拍云上的静态网站，所以基础的东西就不需要我去做了，不得不说，对又拍云很满意，对于静态网站，尤其是个人博客的托管，比七牛要好很多，另外CDN服务有熟悉的也可以来反馈一下。

想要搞个人博客的可以尝试一下，平均每个月免费15G流量，包括https流量，足够大部分人使用了。  
[注册又拍云账号](https://console.upyun.com/register/?invite=B1Tr4zsVf)

下面是正题

## ECC证书

以前用的COMODO的RSA证书，撸了一个免费三年的，相当棒，但是证书链相当的长。

薅羊毛别太狠了，我就是给我的两个域名各搞了一个泛域名证书。

虽然是野卡，但是有个小绿锁就不错了，而且有效期还是一年，稳不稳不知道，万一翻车了就再换回原来的吧 [薅羊毛](https://assl.space/)，[CSR在线生成工具](https://www.chinassl.net/ssltools/generator-csr.html)

具体怎么做，看不懂的请用谷歌翻译，申请过程中需要邮箱，如果开了隐私保护，也就是whois查不到你的邮箱，可能会稍微有点麻烦，不想自己搭邮件服务的，可以尝试用一下腾讯企业邮箱。

换上新证书，又拍云也支持TLS1.3，唯一可惜的是不支持双证书，去测试一下看看

![](https://s1.ax2x.com/2018/01/29/J7cH3.png)

这就是躺着上A+的感觉，我自己也尝试用Nginx建站，实测也可以上A+，不过另一个域名去搞飞机场了，就不放了，顺便打个广告，想建飞机场的可以来找我。另外说一句和本文没啥关系的，最近携带酸酸乳的小飞机被击落了很多，建议使用布鲁克或者V2雷等装备。

## 资源压缩

经过科学的分析，限制网站加载速度主要是等待事件，这个没办法，自己建站的话还可以尝试搞搞优化什么的，用别人的东西，算了吧。所以只能从另一方面下手，资源压缩。

本站使用的是Hexo博客，主题是Yilia，Yilia主题的话，JS和CSS资源压缩的不错，基本压不下去了，压了也没啥用，图片资源的话，倒是可以极限压缩一波（虽然也没啥卵用），例如：  
![](https://s1.ax2x.com/2018/01/29/JgyB3.png)

PNG图片压缩我推荐压缩工具[limitPNG](http://nullice.com/limitPNG/)，无损极限压缩，虽然速度非常非常非常的慢，但是效果是我见过最好的，注意，是无损压缩。

顺便再提一句，本站所有图片都是经过压缩的，不单单是那些公共资源，文章内的每一张图片都是我压缩之后才上传图床的，而且使用了一个比较靠谱的图床（虽然有点慢，但是很稳，主要事件都浪费在了TTFB上），所以图片资源加载的速度也说得过去。

JS和CSS资源经过压缩之后都只能缩减不到1K，所以就没有压缩的必要了。

另外，处于节约考虑，本站并不是所有资源都在又拍云上，有一部分在网易蜂巢的对象存储里，并且没有使用CDN加速，所以一部分资源加载会比较慢（但是对用户体验没什么实质上的影响）

下一步的话，想学学node.js，看看能不能对yilia主题做一些优化（估计很难），反正有这个想法，以后看看能不能实施吧。

## 获取文章MarkDown文件

最近[强奸你的剪切板](https://www.xxwhite.com/2018/Clipboard.html)一文被转载了好多，但是发现转载的排版实在是太乱了，而且经过特殊处理之后变成了禁止复制，这就很蛋疼了。

受到[Jerry Qu的小站](https://imququ.com/post/about.html)的启发，我决定把MarkDown原文发出来，供想要转载的朋友使用（估计本站这辈子也不会有几篇文章能火）。想要获取MarkDown原文链接，请往下翻。

## 又拍云边缘规则重定向

现在我已经把xxwhite.com重定向到www.xxwhite.com了，具体怎么做的请看我下面的操作

直接按照截图这样修改边缘规则就可以了  
![](https://s1.ax2x.com/2018/04/22/8BUbH.png)  

**这里有个坑**注意一下，就是跳转规则前面不能有break，我一开始把404规则放在第一个，但是怎么都不生效，最后把这个规则放第一个就好了