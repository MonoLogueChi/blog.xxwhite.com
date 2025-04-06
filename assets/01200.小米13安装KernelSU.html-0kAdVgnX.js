import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as i,d as t,r,o}from"./app-Ct1uGNWU.js";const l="/assets/Snipaste_2023-01-20_17-33-09-CTqn5CxU.avif",p="/assets/Snipaste_2023-01-20_17-34-09-C-jC5P08.avif",h="/assets/Snipaste_2023-01-20_17-51-31-CYbN64Sb.avif",d="/assets/Snipaste_2023-01-20_17-58-09-DO5nTdXh.avif",c="/assets/Screenshot_2023-01-20-14-52-06-391_me.weishu.kernelsu-DQTSqdxh.avif",k="/assets/Snipaste_2023-01-20_19-43-23-hWQ7gMLy.avif",g="/assets/Screenshot_2023-01-20-16-18-05-610_me.weishu.kernelsu-CEAfDslE.avif",b="/assets/Snipaste_2023-01-20_19-52-34-D-0ykC9V.avif",m={};function f(u,e){const a=r("BiliBili");return o(),n("div",null,[e[0]||(e[0]=i('<p>最近新买了小米 13，上周解锁了，最近看到网上比较火的 KernelSU，就打算搞上折腾一下。</p><p>博客里难得一见的老本行文章，关于搞机的。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><a href="https://kernelsu.org/" target="_blank" rel="noopener noreferrer">KernelSU</a> 更新速度比较快，本文一些内容可能会很快的失效，请将本文看作一篇刷机的参考文章即可，不要盲目迷信本文内容。</p><p>一切以 <a href="https://kernelsu.org/guide/installation.html" target="_blank" rel="noopener noreferrer">官网文档</a> 为准。</p></div><p>这个教程真的太简单了，我都在怀疑有没有写这篇文章的必要性。</p><h2 id="视频教程" tabindex="-1"><a class="header-anchor" href="#视频教程"><span>视频教程</span></a></h2>',5)),t(a,{bvid:"BV1rv4y1r75X"}),e[1]||(e[1]=i('<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h2><h3 id="需要的基本素质" tabindex="-1"><a class="header-anchor" href="#需要的基本素质"><span>需要的基本素质</span></a></h3><p>开始之前，一定要对刷机有一定了解，知道一些原理，知道怎么救砖，明确知道自己的目的是啥，否则请直接关掉本文，不要继续看了。</p><p>此外，还需要一定的阅读理解能力，我说解压你就一定要解压，我说放在哪里你就放在哪里，不按我说的做也可以，前提是你理解自己在做什么，按自己的步骤做，需要把命令转换为自己的。</p><h3 id="解锁-bootloader" tabindex="-1"><a class="header-anchor" href="#解锁-bootloader"><span>解锁 Bootloader</span></a></h3><p>如已解锁，请跳过此步骤。</p><p>详情请看 <a href="https://www.miui.com/unlock/index.html" target="_blank" rel="noopener noreferrer">申请解锁</a></p><h3 id="获得原版-boot-img" tabindex="-1"><a class="header-anchor" href="#获得原版-boot-img"><span>获得原版 boot.img</span></a></h3><p>用于恢复，非必须，但建议提前准备好，方便救砖，有多种方法可以获得，这里以从官方 ROM 提取为例。</p><ol><li>从 <a href="https://roms.miuier.com/zh-cn/devices/fuxi/" target="_blank" rel="noopener noreferrer">MIUI 官方 ROM 仓库</a> 下载和手机当前版本一致的刷机包；</li><li>下载 Payload Dumper 工具，这里推荐使用 <a href="https://github.com/ssut/payload-dumper-go/releases" target="_blank" rel="noopener noreferrer">payload-dumper-go</a>；</li><li>下载好两个工具后解压，然后将 payload-dumper-go 复制到刷机包解压后的目录下，和 <code>payload.bin</code> 在同级。</li><li>在目录下打开 powershell 或者 cmd，通常情况下是按住 <code>shift</code> 在文件夹空白处点击鼠标右键，选择 <code>在终端打开</code> 或者 <code>在powershell打开</code>，然后执行 <code>.\\payload-dumper-go.exe -partitions boot payload.bin</code>，不出意外就可以将 <code>boot.img</code> 提取出来。</li></ol><figure><img src="'+l+'" alt="执行命令" tabindex="0" loading="lazy"><figcaption>执行命令</figcaption></figure><figure><img src="'+p+'" alt="目录示例" tabindex="0" loading="lazy"><figcaption>目录示例</figcaption></figure><h3 id="adb-环境" tabindex="-1"><a class="header-anchor" href="#adb-环境"><span>ADB 环境</span></a></h3><ol><li>安装 adb 和 bootloader 驱动，可以在这里<a href="https://developer.android.com/studio/run/win-usb?hl=zh-cn" target="_blank" rel="noopener noreferrer">下载</a>，在前面的页面下载 zip 包，解压右键点击 <code>android_winusb.inf</code> 安装。如果上面的链接打不来，就自己去想办法吧，可以尝试使用本文提供的资料，也可以先跳过此步骤，如果遇到后面说的问题，再来解决这一步。</li><li>下载 <a href="https://developer.android.com/studio/releases/platform-tools" target="_blank" rel="noopener noreferrer">Android SDK 平台工具软件包</a>，如果上面的链接打不来，就自己去想办法吧，可以尝试使用本文提供的资料。下载后解压备用。</li><li>手机上开启 <code>开发者选项</code> 和 <code>ADB 调试</code>，这个就自己去百度吧，我不教了。</li><li>USB 连接手机，测试一下，在 <code>platform-tools</code> 目录下打开终端，方法可参考上一步，执行命令 <code>.\\adb.exe devices</code>，注意连接手机后，提示 ADB 授权，一定不能点拒绝，不要等倒计时过了还在那傻看着不知道点啥。</li><li>如果结果如下图，证明 adb 连接是正常的，如果不正常，建议检查驱动和 adb 授权，简单说一下驱动问题，打开设备管理器，如果插上手机出现未知设备，拔掉手机后消失，说明驱动有问题，按照第一步所说安装驱动，驱动问题我实在懒得讲了，自己百度一下怎么装驱动吧。</li></ol><figure><img src="'+h+'" alt="测试adb" tabindex="0" loading="lazy"><figcaption>测试adb</figcaption></figure><figure><img src="'+d+'" alt="驱动选择" tabindex="0" loading="lazy"><figcaption>驱动选择</figcaption></figure><h3 id="下载-kernelsu" tabindex="-1"><a class="header-anchor" href="#下载-kernelsu"><span>下载 KernelSU</span></a></h3><p>到 KernelSU<a href="https://github.com/tiann/KernelSU" target="_blank" rel="noopener noreferrer">仓库</a>的 <a href="https://github.com/tiann/KernelSU/releases" target="_blank" rel="noopener noreferrer">releases</a> 下，下载 <code>manager</code> 和 <code>kernel</code>。</p><p>下载好后解压出来，安装到手机上，可以拷贝过去安装，也可以使用 adb 命令安装 <code>.\\adb.exe install apk路径</code>，提示，ADB 安装应用，输入 <code>.\\adb.exe install</code> 后可以直接把文件拖进去，会自动转化路径。</p><p>然后是下载内核，首选看好手机上的内核版本，比如我的就是 <code>5.15.41</code>，就要找 5.15 版本的内核，同样应该尽量选择合并进主线分支的。</p><p>内核下载后解压备用。</p><h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h2><h3 id="安装-kernelsu-manager" tabindex="-1"><a class="header-anchor" href="#安装-kernelsu-manager"><span>安装 KernelSU Manager</span></a></h3><p>前面的步骤已经提到，不再赘述，安装后打开应该如下图所示，后续版本更新，界面可能会发生变化。</p><figure><img src="'+c+'" alt="未ROOT" height="600" tabindex="0" loading="lazy"><figcaption>未ROOT</figcaption></figure><h3 id="尝试使用-kernelsu-提供的内核引导" tabindex="-1"><a class="header-anchor" href="#尝试使用-kernelsu-提供的内核引导"><span>尝试使用 KernelSU 提供的内核引导</span></a></h3><p>先启动到 bootloader，可以关机后按住音量下开机，也可以直接使用 adb 命令 <code>.\\adb.exe reboot bootloader</code>。</p><p>手机连接电脑后，再执行 <code>.\\fastboot.exe devices</code> 检查设备连接情况。</p><figure><img src="'+k+'" alt="重启到bootloader" tabindex="0" loading="lazy"><figcaption>重启到bootloader</figcaption></figure><p>如果提示未找到设备，请检查 USB 连接，确认无误后，再检查驱动情况，确保已安装前面步骤提到的驱动，然后打开设备管理器，检查是否有未识别设备，如果有的话就更新驱动，步骤和前面的截图差不多，但应该是 bootloader 接口。</p><p>确认能识别到设备，使用 KernelSU 提供的内核引导系统试一下，提示 ，输入 <code>.\\fastboot.exe boot</code> 之后，直接把解压好的 <code>boot.img</code> 文件拖进去就可以了。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fastboot.exe</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> boot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> D:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\U</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sers</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">c</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ownloads</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ndroid13-5.15</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ist</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">oot.img</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果能正常开机，打开 Kernel Manager 应该能看到如下图所示，如果卡米或者其他情况不能正常开机，直接强制重启就可以，因为没有刷入内核，只是尝试引导，重启就会恢复。</p><figure><img src="'+g+`" alt="成功 ROOT" height="600" tabindex="0" loading="lazy"><figcaption>成功 ROOT</figcaption></figure><h3 id="刷入-kernelsu-提供的内核" tabindex="-1"><a class="header-anchor" href="#刷入-kernelsu-提供的内核"><span>刷入 KernelSU 提供的内核</span></a></h3><p>如果上一步确定没问题，就可以正式刷入内核了。</p><p>重启到 bootloader，然后刷入内核，分别执行以下几句命令。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">adb.exe</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reboot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> bootloader</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fastboot.exe</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> flash</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> boot</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> D:</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\U</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">sers</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">c</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ownloads</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ndroid13-5.15</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\d</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ist</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\b</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">oot.img</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">fastboot.exe</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> reboot</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后开机再检查 ROOT 情况。</p><figure><img src="`+b+'" alt="操作" tabindex="0" loading="lazy"><figcaption>操作</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>KernelSU 需要主动授权 ROOT，而不是让应用去申请 ROOT，再去授权。比如我想要在 adb shell 中使用 su 命令，就需要先在手机上的 <code>KernelSU</code> 里给 <code>shell</code> 授予 ROOT 权限，然后再从 adb shell 里使用 su，而不是像以前一样，直接使用 su 去向管理软件申请授权。</p></div><h3 id="还原" tabindex="-1"><a class="header-anchor" href="#还原"><span>还原</span></a></h3><p>如果因为什么原因，不想继续使用了，直接刷回原有内核就可以了，还记得前面准备的原版内核吗，就是还原用的，命令和前面刷入内核一样的。</p><h2 id="升级" tabindex="-1"><a class="header-anchor" href="#升级"><span>升级</span></a></h2><p>可以正常升级，但是不能 OTA 升级，更新会使用全量包，所以速度会比较慢，我升级花了一个多小时才完成，所以升级的时候要注意电量。升级之后再重写刷一遍 bootloader 就可以了。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2><p>以下内容不分排名</p><ul><li><a href="https://roms.miuier.com/zh-cn/devices/fuxi/" target="_blank" rel="noopener noreferrer">MIUI 官方 ROM 仓库</a></li><li><a href="https://miuiver.com/extracting-boot-img/" target="_blank" rel="noopener noreferrer">小米手机从刷机包提取 boot.img 文件方法</a></li><li><a href="https://kernelsu.org/" target="_blank" rel="noopener noreferrer">KernelSU</a></li></ul><h2 id="资料下载" tabindex="-1"><a class="header-anchor" href="#资料下载"><span>资料下载</span></a></h2><p>仅提供文章中使用版本，不提供后续更新</p><ul><li>下载地址: <a href="https://dl.s2.u2sb.com/dl3/" target="_blank" rel="noopener noreferrer">https://dl.s2.u2sb.com/dl3/</a></li><li>备用地址: <a href="https://pan.baidu.com/s/1TIhy8KkL1tL27MqLn_lhtQ?pwd=xxxx" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1TIhy8KkL1tL27MqLn_lhtQ</a> 提取码: xxxx</li></ul>',51))])}const _=s(m,[["render",f]]),B=JSON.parse('{"path":"/2023/01200.%E5%B0%8F%E7%B1%B313%E5%AE%89%E8%A3%85KernelSU.html","title":"小米 13 使用 KernelSU 获取 ROOT","lang":"zh-CN","frontmatter":{"title":"小米 13 使用 KernelSU 获取 ROOT","date":"2023-01-20T00:00:00.000Z","keywords":"小米13 KernelSU ROOT","tag":["搞机"],"description":"最近新买了小米 13，上周解锁了，最近看到网上比较火的 KernelSU，就打算搞上折腾一下。","head":[["meta",{"property":"og:url","content":"https://blog.u2sb.com/2023/01200.%E5%B0%8F%E7%B1%B313%E5%AE%89%E8%A3%85KernelSU.html"}],["meta",{"property":"og:site_name","content":"叉叉白"}],["meta",{"property":"og:title","content":"小米 13 使用 KernelSU 获取 ROOT"}],["meta",{"property":"og:description","content":"最近新买了小米 13，上周解锁了，最近看到网上比较火的 KernelSU，就打算搞上折腾一下。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-06T11:04:02.000Z"}],["meta",{"property":"article:tag","content":"搞机"}],["meta",{"property":"article:published_time","content":"2023-01-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-06T11:04:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"小米 13 使用 KernelSU 获取 ROOT\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-20T00:00:00.000Z\\",\\"dateModified\\":\\"2025-04-06T11:04:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MonoLogueChi\\",\\"url\\":\\"https://blog.u2sb.com\\"}]}"]]},"git":{"createdTime":1743937442000,"updatedTime":1743937442000,"contributors":[{"name":"MonoLogueChi","username":"MonoLogueChi","email":"xxwhite@foxmail.com","commits":1,"url":"https://github.com/MonoLogueChi"}]},"readingTime":{"minutes":6.13,"words":1838},"filePathRelative":"2023/01200.小米13安装KernelSU.md","localizedDate":"2023年1月20日","excerpt":"<p>最近新买了小米 13，上周解锁了，最近看到网上比较火的 KernelSU，就打算搞上折腾一下。</p>\\n","autoDesc":true}');export{_ as comp,B as data};
