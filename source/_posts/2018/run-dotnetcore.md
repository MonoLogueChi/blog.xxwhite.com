---
title: .net core程序示例
date: 2018-07-26 21:42:33
tags: [C# ,炎黄幼儿园 ,dotnet]

keywords: .netcore .net Linux Nginx 跨平台 dotnet
comments: true
---

上次说了怎么搭建本地调试环境（虽然最后也没有用WSL），这次简单介绍一下怎么创建一个 .net core程序并且在Linux系统上跑起来。

<!-- more -->

{% meting "001Mf4Ic1aNYYK" "tencent" "album" "order:random" "listmaxheight:180px" %}

本篇文章篇幅较长，您可以打开音乐播放器慢慢来看。

# 创建一个 .NET CORE程序

## IDE选择

建议使用宇宙最强IDE `Visual Studio`，如果真的不喜欢这个的话，可以使用宇宙最智能的IDE `JetBrains Rider`（但是这个东西去搞.NET，还是不太好用）。

### 安装

[下载](https://visualstudio.microsoft.com/zh-hans/downloads/)并安装`Visual Studio 2017`，记得一定要安装.netcore跨平台开发支持。  
![](https://s1.ax2x.com/2018/07/28/53syBR.png)  
搞完之后，还要自己手动装一下 [.net core sdk](https://www.microsoft.com/net/download)

## 创建一个DEMO

![](https://s1.ax2x.com/2018/07/28/53utaO.png)  

![](https://s1.ax2x.com/2018/07/28/53u6Sq.png)

按照上面的步骤创建一个API服务

### MVC简介

MVC是 **Model View Controller**（模型-视图-控制器）的缩写，跑一个简单的Demo不需要具体了解MVC是什么，但是要对MVC有一个基本的认识，基本百度一下看两篇文章就差不多了。

![](https://s1.ax2x.com/2018/07/28/53ukJd.png)

跑一下试试

![](https://s1.ax2x.com/2018/07/28/53ul6R.png)

简单修改一下请求

![53uS5r.png](https://s1.ax2x.com/2018/07/28/53uS5r.png)  ![53ufOY.png](https://s1.ax2x.com/2018/07/28/53ufOY.png)

## 来个真正的Demo

了解了上面的这些基本知识，我们就可以弄一个真正的DEMO了，这次我直接给出一个Demo，下一期会从基础开始讲解。

### 一个二维码生成的Demo

这也是我学习的时候写的第一个Demo，二维码生成使用了`ZXing.Net`。

工程文件：[下载](https://dl.sm9.top/blog/dotnet/qr/QR.zip)
示例文件：[下载](https://dl.sm9.top/blog/dotnet/qr/PublishOutput.zip)

食用方法：
直接使用get请求。url参数tt为需要生成二维码的参数，例如`http://localhost:5001/api/qr?tt=http://weixin.qq.com/r/PjgpMaTEv-nAreBS920s`  
如果编码中含有`&`、`#`等字符，请使用`%26`、`%23`编码代替。


# 服务端配置

## 安装 .NET CORE 环境

本文以Debian9为例，其他请看 [官方介绍](https://www.microsoft.com/net/learn/get-started-with-dotnet-tutorial)
```
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.asc.gpg
sudo mv microsoft.asc.gpg /etc/apt/trusted.gpg.d/
wget -q https://packages.microsoft.com/config/debian/9/prod.list
sudo mv prod.list /etc/apt/sources.list.d/microsoft-prod.list
sudo chown root:root /etc/apt/trusted.gpg.d/microsoft.asc.gpg
sudo chown root:root /etc/apt/sources.list.d/microsoft-prod.list
```

```
sudo apt-get update
sudo apt-get install dotnet-sdk-2.1
```
如果中间出现错误的话，就自己翻译一下吧，基本不会有什么大问题的。

安装完想验证一下的话，可以
```
dotnet --version
dotnet --list-sdks
```
![](https://s1.ax2x.com/2018/07/27/53WoTG.png)


## 测试

上传发布的文件到服务器，测试一下能不能运行。

具体怎么上传，自己想办法。
```
cd /www/dotnet/qr/          #定位到你上传的路径
dotnet QR.dll                   #需要注意的是。Linux对大小写敏感
```

![](https://s1.ax2x.com/2018/07/28/53ZjPA.png)

> PS：我在测试的时候发现上传的服务器之后二维码生成一直有问题，感觉是`ZXing.Net`的问题。下次换个Demo试试，或者是退回到.net core2.0看看。


## 安装supervisor

这一步为可选步骤，主要用于守护进程（就是你关掉终端之后你的程序依旧可以在后台运行）
```
sudo apt-get install supervisor
```
### 修改配置文件

先看一下配置文件
```
cat /etc/supervisor/supervisord.conf
```

注意看后面有没有`[include]`这一项
```
[include]
files = /etc/supervisor/conf.d/*.conf
```

```
cd /etc/supervisor/conf.d/
touch qr.conf
vim qr.conf
```

配置文件为
```
[program:qr]
command=dotnet QR.dll
directory=/www/dotnet/qr
environment=ASPNETCORE_URLS='http://*:5001'
user=www
stopsignal=INT
autostart=true
autorestart=true
startsecs=3
stderr_logfile=/www/dotnet/log/qr.log
stdout_logfile=/www/dotnet/log/qr.out.log
```

一句一句解释
```
[program:qr]        ;项目名称
command=dotnet QR.dll       ;需要执行的命令
directory=/www/dotnet/qr        ;目录
environment=ASPNETCORE_URLS='http://*:5001'     ;环境变量，用于设置端口
user=www        ;执行命令的用户
stopsignal=INT      
autostart=true      ;会随着supervisor自动启动
autorestart=true        ;程序exit的时候会自动重启
startsecs=3     ;程序启动前等待时间
stderr_logfile=/www/dotnet/log/qr.log       ;错误日志
stdout_logfile=/www/dotnet/log/qr.out.log       ;输出日志
```

当然还有其他可选的配置项，具体怎么用可以去百度，我这里就不详细讲解了。

常用命令
```
supervisorctl status        #查看子进程
supervisorctl stop|start xxx|all    #停止|启动 指定|所有 子进程
```

## 反向代理

直接在宝塔面板里配置反向代理就好，地址就是`127.0.0.1:5001`（端口是你配置的环境变量里的端口）

