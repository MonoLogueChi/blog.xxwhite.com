---
title: 小站搭建过程
date: 2017-10-30 12:53:00
tags: 建站笔记

comments: true
---

折腾了好几天，终于腾出时间来分享一下小站搭建的过程了。

<!-- more -->

# 小站搭建过程

## 小站配置

域名：[www.xxwhite.com](http://www.xxwhite.com)  

博客系统：Hexo  
博客主题：yilia

服务器：阿里云VPS学生机（过一段时间准备迁移到七牛云或者又拍云上）  
反向代理服务器：Nginx

## 搭建思路

搭建一个网站，我们首先要有域名和空间，如果要在国内搭建的话，域名还要备案，国外的空间可以不用备案，下面我会说一下备案过程中遇到的一些“坑”。主机空间的话，如果只是为了弄一个博客玩玩，可以选择Github，弄一个免费的玩玩，或者是用又拍云或者七牛云等等，当然，阿里云学生机也是一个不错的选择。这里，国内的那些虚拟主机不推荐，价格不但高，性能也不咋样。

有了域名和空间，剩下的就是博客系统，我选择了静态博客Hexo，原因很简单，用的人多，而且中文资料多。用的人多，教程也就多，解决方案齐全，而且中文资料也比较多。

## 域名选择与备案

### 域名购买

我的两个域名都是在[万网](https://wanwang.aliyun.com/)上选择的，购买域名推荐国际域名，也就是.com .net .org三大类。当然，购买其他域名时一定要注意看一下，能不能在国内备案。

域名购买教程万网上有，写的也比较详细，这里就不再赘述了。

### 域名备案
域名备案这部分，因为我是在万网买的域名，同时是用的阿里云主机，所以就一起在阿里云备案了。阿里云备案挺方便的，阿里官方也有备案教程。大概过程就是，申请备案，填写信息，打印填表，上传，审核，拍照，审核。

>这里提几个坑，首先是在哪里备案，你身份证信息是哪里的，就在哪里备案，比如我是内蒙的，就要在内蒙备案。  
>备案时信息尽可能详细，就算是没有星号的也尽量都填了，尽可能详细一点，我就是因为网站用途填的不够详细，被打回来过一次。

如果你只是打算在国外或者Github上搞一个玩玩，那就不用备案了。

### SSL证书申请

SSL证书不是必须的，但是有一张证书，给我们的域名加上一个小绿锁（Https），看起来逼格满满。

SSL证书我们可以用免费的，阿里可以申请免费的证书，一年申请一张，鬼知道几年年之后证书会是啥样的，我用的是三年的免费的Comodo证书，具体怎么获得的，我以后的博客会写。

## 网页运行环境

我们以阿里云学生机为例，说一下怎么配置主机。

### VPS购买

阿里云学生机只能是在校大学生通过阿里云APP购买，具体方法可以百度。

### Nginx安装

阿里云有现成的镜像可以用，LNMP镜像直接用就可以，当然也可与手动安装Nginx。

由于只是搭建一个静态博客，PHP和MySQL就不需要安装了，只需要安装Nginx就可以了，CentOS直接使用
```
yum install nginx -y
```
就可以安装了，至于启动和配置，可以自行百度。

### Nginx配置

我直接把我的配置文件贴出来，仿照我的写就行了（我的也是仿照别人的写的）
```
user  www www;

worker_processes auto;

error_log  /home/wwwlogs/nginx_error.log  crit;

pid        /usr/local/nginx/logs/nginx.pid;

#Specifies the value for maximum file descriptors that can be opened by this process.
worker_rlimit_nofile 51200;

events
     {
    use epoll;
    worker_connections 51200;
    multi_accept on;
     }

http
    {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    tcp_nopush     on;

    keepalive_timeout  0;

    gzip  on;

	#http server
	server
    {
        listen 80;
        server_name www.xxwhite.com;
         rewrite ^(.*) https://$server_name$1 permanent;
    }

	#https server
	server
     {
        listen 443;
       server_name  www.xxwhite.com;
       ssl                  on;
       ssl_certificate     /home/www/ssl.crt;#配置证书位置
       ssl_certificate_key  /home/www/ssl.key;#配置秘钥位置

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;
        ssl_ciphers  HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers  on;     	
      
        index index.html index.htm index.php;
        root  /home/www/xxwhite;

        error_page   404   /index.html;

        include enable-php.conf;

        access_log  /home/wwwlogs/access.log;
    }
}
```
从上面的配置文件可以看出，我们需要把静态网页放到` /home/www/xxwhite/`文件夹里。

弄好配置文件之后，我们常识解析一下，随便放两个静态网页进去，然后在浏览器里输IP，看看能不能正常访问。

测试没问题之后，我们就需要搞Hexo了。

## Hexo

这里我们有两个思路，第一个是在本地生成静态网页，然后上传到服务器空间。这样做的好处是，过程简单，但是同步静态网页会很麻烦。

另一个思路是，把Hexo布置到服务器上，然后同步markdown文件到服务器上，然后在服务器上生成静态网页，然后修改Nginx配置，让网站解析到Hexo的public文件夹。这样做的优势和劣势正好和上面的相反。

因为考虑到我马上就要迁移博客了，所以暂时采用了第一种方案（园子哥骂我蠢的那种方法）。

### Hexo安装

这里以Win环境下Hexo安装为例

-  安装Node.js；
- 安装Git；
- 配置好环境变量（一般安装会自动配置好）
- 安装Hexo（`npm install -g hexo-cli`）

### Hexo主题配置

安装好之后换一身皮（主题）

去百度Hexo主题，或者去知乎上看，找一身合适的，给自己穿上就行。

修改主题的方法是，修改`_config.yml`文件，`theme: yilia`（修改为你选中的皮）；

### 其他配置

其他配置，可以参考网上以有的教程，或者你选中的主题一般会有详细的介绍。

### Hexo常用命令

- 清空文件夹 `hexo clean`
- 生成静态网页 `hexo g`
- 生成本地网站预览 `hexo s`

## 注意事项

文明上网，别搞事情
