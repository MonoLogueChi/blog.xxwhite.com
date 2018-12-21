---
title: WSL调试体验
date: 2018-07-22 14:05:42
tags: [建站笔记 ,炎黄幼儿园]

keywords: WSL Linux Win SSL 自签证书 Nginx 本地调试
comments: true
---

最近想要开发一个新项目，想顺便体验一下WSL，然后百度看了一下相关的东西，结合自己的实践，简单总结了一下。

<!-- more -->

## 开启WSL

首先需要Win10 1709级以上版本，电脑配置不能太差，最起码也要比我这个强吧（配置太差了跑起来体验也不咋样）  
i5-3320M，12G ddr3内存（ddr3+ddr3l混装，这电脑兼容性真特么强），480G固态+500G机械。WSL跑在固态盘里。

![](https://s1.ax2x.com/2018/07/22/whWAR.png)

开启WSL需要首先在`程序和功能`里开启`适用于Linux的Windows子系统`。  
![](https://s1.ax2x.com/2018/07/22/whGGY.png)

然后再去应用商店`Microsoft Store`里下载Linux子系统，就直接搜`Linux`就可以找到了。建议安装乌班图（Ubuntu）。  
记住，安装一定要装在C盘上，别搞啥幺蛾子，自己忙活一通还挺累，体验还不咋样。

## 基础配置

### 修改root密码

```
sudo passwd root
```

### 开启SSH服务

修改配置文件
```
vim /etc/ssh/sshd_config
```

允许root用户登陆和允许密码登陆
```
PermitRootLogin yes
PasswordAuthentication yes
```

重启ssh服务
```
service ssh restart
```

如果遇到
```
Could not load host key: /etc/ssh/ssh_host_rsa_key
Could not load host key: /etc/ssh/ssh_host_ecdsa_key
Could not load host key: /etc/ssh/ssh_host_ed25519_key
 * Restarting OpenBSD Secure Shell server sshd
Could not load host key: /etc/ssh/ssh_host_rsa_key
Could not load host key: /etc/ssh/ssh_host_ecdsa_key
Could not load host key: /etc/ssh/ssh_host_ed25519_key
```
就
```
sudo rm -r /etc/ssh/ssh*key
sudo dpkg-reconfigure openssh-server 
```

配置好SSH之后用[XShell6](https://www.xxwhite.com/2018/FreeXshell6.html)连接。

![](https://s1.ax2x.com/2018/07/22/whu8J.png)


### 更新系统

搞完这些，先升级一下系统

```
apt-get update
apt-get dist-upgrade
```

### 域名解析

测试的时候，我们可能会使用到域名，这个时候可以直接修改`Hosts`。

也可以使用`Acrylic DNS Proxy`，我用的就是Acrylic DNS Proxy，具体怎么用可以百度，很简单的。

如果使用真域名的话。可以自己解析到127.0.01。

搞完了再给域名弄个自签证书。如果是闲置域名的话，完全可以搞一个真证书上去。

> PS: 我的做法是把一个真域名解析过去，然后还申请了一个真证书。

### 宝塔面板

自用嘛，搞个宝塔面板还是挺舒服的，比自己配简单多了。
```
wget -O install.sh http://download.bt.cn/install/install-ubuntu.sh && sudo bash install.sh
```

### Nginx

直接在宝塔面板里解决就可以了，鼠标点两下就可以了。

### PHP和PM2

虽然不常用，但是偶尔会跑两个小程序，顺手装上。

### MySQL

这个就有点蛋疼了，竟然和Win里的MySQL冲突，貌似是只能选一个，只能先写在Win里的MySQL了。

以后Win用MySQL的时候还要开启WSL。

## 写在后面的

到这里基本上就可以正常用了，下一篇文章会介绍怎么跑一个`.net core`程序。

> PS 最后放弃了，还是用Hyper-v装了一个虚拟机，WSL这东西还是有点不太习惯。而且这东西性能是真的差，还是虚拟机比较爽。