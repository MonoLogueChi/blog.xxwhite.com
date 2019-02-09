---
title: 域名解析的MX和CNAME记录冲突问题的解决
date: 2019-07-14 14:48:35
tags: 建站笔记

keywords: 域名解析,MX记录,CNAME记录,冲突
comments: true
---

最近又遇到了MX记录和CNAME记录冲突的问题，简单记录一个解决办法，方便以后参考一下

<!-- more -->

CloudXNS免费业务要关停了，这样就不得不把我的域名迁出去。我选择的是以前用过的DNSPOD，这次迁移成本其实不大，把解析记录从CloudXNS导出到excel中，然后复制粘贴替换就可以轻松转化成DNSPOD的格式，再导入到DNSPOD就可以了，当你看到这篇文章时，已经迁移完成了。

说一下中间遇到的一个比较麻烦的问题吧，因为我有两个域名做了域名邮箱，这样MX记录就必须要有，但是我这两个域名同时也需要可以正常访问我的网站，网站用了CDN，这样就必须要有CNAME记录，但是正常来说，CNAME记录和MX记录时冲突的。


|   主机记录   |   记录类型   |   记录值   |
| ---- | ---- | ---- |
|   @   |   MX   |   mxbiz1.qq.com.   |
|   @   |   CNAME   |   CDN的CNAME记录   |


其实@记录解析过去，也是会301跳转到blog记录上的。听起来和显性URL功能一样，但是显性URL也会和MX记录冲突。

CloudXNS有一个独有的Link记录可以解决这个问题，当时也正是看重了这个功能，才把域名解析迁移到CloudXNS上的。现在换到了DNSPOD上，没有了这个功能了，无奈只能想其他的解决办法了。

灵机一动，想到我还有一台跑各种服务的VPS，那就在VPS上做个301吧。

首先把`@`的A记录记录解析到VPS的IP上，然后在NGINX上配置

```
if ($host ~ '^xxwhite.com'){
	return 301 https://blog.xxwhite.com$request_uri;
}
```

或者

```
if ($host ~ '^xxwhite.com'){
	return 302 https://blog.xxwhite.com$request_uri;
}
```

这样就解决了前面提到的问题。

那如果我不想跳转的话，要怎么办？那就用反向代理吧，如果访问量特别大的话，反向代理肯定时不合适的，但这也是没有办法的办法了。