import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as d,o as t}from"./app-Ct1uGNWU.js";const l={};function i(r,e){return t(),o("div",null,e[0]||(e[0]=[d('<p>adb 的全称为 Android Debug Bridge，就是起到调试桥的作用。通过 adb 我们可以在 Eclipse 中方便通过 DDMS 来调试 Android 程序，说白了就是 debug 工具。adb 的工作方式比较特殊，采用监听 Socket TCP 5554 等端口的方式让 IDE 和 Qemu 通讯，默认情况下 adb 会 daemon 相关的网络端口，所以当我们运行 Eclipse 时 adb 进程就会自动运行。</p><p><code>这段其实没有什么用，了解一下就好了</code></p><h2 id="adb-环境配置" tabindex="-1"><a class="header-anchor" href="#adb-环境配置"><span>ADB 环境配置</span></a></h2><h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h3><p>要想使用 adb，就需要 adb 工具包（不需要完整的，简单的就可以），这里有 Google 官方下载地址，如果打不开（原因你懂的），请使用我提供的下载地址。</p><blockquote><ol><li>Win 版 <a href="https://dl.google.com/android/repository/platform-tools-latest-windows.zip" target="_blank" rel="noopener noreferrer">https://dl.google.com/android/repository/platform-tools-latest-windows.zip</a></li><li>Linux 版 <a href="https://dl.google.com/android/repository/platform-tools-latest-linux.zip" target="_blank" rel="noopener noreferrer">https://dl.google.com/android/repository/platform-tools-latest-linux.zip</a></li><li>Mac 版 <a href="https://dl.google.com/android/repository/platform-tools-latest-darwin.zip" target="_blank" rel="noopener noreferrer">https://dl.google.com/android/repository/platform-tools-latest-darwin.zip</a></li><li>国内用户请使用 <a href="https://pan.lanzou.com/b86819/" target="_blank" rel="noopener noreferrer">前往下载</a></li></ol></blockquote><p>使用 adb 需要手机驱动，可以利用我提供的 adb 驱动安装工具来安装驱动（适用大部分手机，小部分不适用，安装驱动时需要手机连接电脑，最好开启 USB 调试），也可以用豌豆荚之类的软件来安装驱动（不推荐），也可以利用自己手机自带的光盘或者电脑工具来安装驱动（推荐）。在安装驱动过程中，win 可能会阻止，请授权安装（别问我为什么，这个解释又会涉及到很多东西）。</p><p>我提供的工具在上面第四个链接里有，也可以到这里下载 <a href="http://adbdriver.com/" target="_blank" rel="noopener noreferrer">http://adbdriver.com</a>。</p><h3 id="adb-配置" tabindex="-1"><a class="header-anchor" href="#adb-配置"><span>ADB 配置</span></a></h3><p>如何使用 ADB 工具，我提供了两种解决方式，另外，我自己编写的 ADB 工具箱应该可以在近期完工了（主要是我懒，几个星期都懒得动一次，如果一直拖下去一年也做不完）。</p><h4 id="临时使用" tabindex="-1"><a class="header-anchor" href="#临时使用"><span>临时使用</span></a></h4><p>下载并解压 adb 工具包，然后在解压的文件夹中，按住 Shift 键，点击鼠标右键，选择“在此处打开命令提示符”或者“在此处打开 Powershell 窗口”。</p><p>打开之后就可以用啦，不放心的话可以敲一个 <code>adb version</code> ，就会输出信息，结果图看后面。</p><figure><img src="https://i.loli.net/2017/10/02/59d20d4fef964.avif" alt="临时使用adb" tabindex="0" loading="lazy"><figcaption>临时使用adb</figcaption></figure><h4 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量"><span>配置环境变量</span></a></h4><p>这个懂的人就很简单，不懂的看起来就会很麻烦，而且不同的 Win 版本还稍微有一点不一样，所以就跟着我一步一步的学一下吧。</p><p>下面的步骤以 Win10 系统为例，Win7 略有不同；</p><ol><li>下载上面的 adb 工具包，然后解压到合适的位置（你想放在哪都行）；</li><li>复制工具包的路径；<br><img src="https://i.loli.net/2017/10/02/59d20ffb3346f.png" alt="adb工具路径" loading="lazy"></li><li>依次打开 此电脑 &gt; （右键）属性 &gt; 高级系统设置 &gt; 环境变量；</li><li>找到系统变量中的“Path”；</li><li>点击“编辑”，然后在右侧找到新建，然后把刚才复制的路径粘贴过去，然后一路点“确定”，就可以了。<br><img src="https://i.loli.net/2017/10/02/59d211c3f2110.png" alt="配置环境变量" loading="lazy"></li><li>我也不知道是否需要重启系统才能生效；</li><li>测试，在任意位置打开 CMD 窗口或者 PowerShell 窗口，然后输入<code>adb version</code>；<br><img src="https://i.loli.net/2017/10/02/59d2130398784.png" alt="adb版本输出" loading="lazy"></li><li>如果电脑是 Win7，第五步需更改为：在最后粘贴复制的文件夹路径，并添加分号（注意前面有没有分号，还有，分号要是英文的分号），然后一路确定就可以了，举个栗子，<code>D:\\AndroidSDK\\platform-tools;</code><br><img src="https://i.loli.net/2017/10/02/59d21423b0430.png" alt="Win7配置环境变量" loading="lazy"></li></ol><h2 id="adb-使用" tabindex="-1"><a class="header-anchor" href="#adb-使用"><span>ADB 使用</span></a></h2><p>在说明使用方法之前，先简单介绍几个常识：</p><ul><li>Tab 键可以补全路径，有多个符合条件时可以按 Tab 键切换（这个炒鸡重要）；</li><li>绝对路径，Win 上绝对路径格式为：<code>D:\\AndroidSDK\\platform-tools</code>；</li><li>相对路径，Win 上相对路径格式为：<code>.\\api</code>,父目录：<code>..\\</code>，使用相对路径时注意你打开窗口的文件夹，如果时在刷机包所在的文件夹打开窗口，是最方便的；</li><li>安卓路径，都是从<code>/</code>开始，比如<code>/data/media/0</code>、<code>/sdcard</code>等；</li></ul><p>想要使用简单一点，多用相对路径，少用绝对路径。</p><h3 id="连接设备" tabindex="-1"><a class="header-anchor" href="#连接设备"><span>连接设备</span></a></h3><ol><li>在手机开发者选项里勾选上“USB 调试”（一般在设置里，如果没有可以去百度一下自己的机型怎么打开开发者选项）；</li><li>用 USB 线连接电脑，注意在手机弹出“是否授权此电脑启用调试”的时候点“是”，最好勾上此电脑不再询问或者是永久授权之类的（建议关闭其他手机助手工具，因为可能会造成端口冲突）；</li><li>在任意位置打开 CMD 窗口或者 PowerShell 窗口，输入 <code>adb devices</code> 回车，查看连接设备（有些可能是在这个时候弹出来授权提示）；</li><li>如果出现 <code>List of devices attached xxxxxxxxxxx device</code> 便是连接成功了，如图；<br><img src="https://i.loli.net/2017/10/02/59d21915bf157.png" alt="adb连接" loading="lazy"></li><li>如果想玩高级一点的，可以使用 adb 网络调试，但不能用于刷机。</li></ol><h3 id="一些常用的-adb-命令" tabindex="-1"><a class="header-anchor" href="#一些常用的-adb-命令"><span>一些常用的 adb 命令</span></a></h3><ul><li>查看连接设备：<code>adb devices</code>；</li><li>重启：<code>adb reboot</code>；</li><li>重启到 rec：<code>adb reboot recovery</code>；</li><li>重启到 bootloader：<code>adb reboot bootloader</code>；</li><li>安装 apk：<code>adb install xxxx.apk</code> ；</li><li>卸载 apk：<code>adb uninstall xxx.apk</code> ，可以使用[-k]参数，即 <code>adb uninstall -k xxx.apk</code> ，这里的 xxxx.apk 需要使用包名，可以利用 pm 命令列出 <code>adb shell pm list packages</code> （这个除了极特殊用途外，用处不大）；</li><li>adb 刷机：<code>adb sideload xxx.zip</code> （这个下面会详细介绍）；</li><li>adb shell：<code>adb shell</code> （不懂不要用）；</li><li>推送电脑文件到手机：<code>adb push xxxx yyyy</code> ，其中的 xxxx 是电脑上的文件路径，yyyy 是手机上的文件路径，比如我要推送“C 盘 adb 目录下的 adb.exe”到手机的“/data/media/0”目录下，我就需要命令<code>adb push C:\\adb\\adb.exe /data/media/0</code>；</li><li>获取手机文件到电脑：<code>adb pull yyyy xxxx</code> ，其中 yyyy 是手机路径及文件，xxxx 是电脑路径，比如我要获取“手机上的/system/framework”文件夹到“电脑 D 盘下的 framework 文件夹”，我就需要 <code>adb pull /system/framework D:\\framework</code>。</li></ul><h3 id="fastboot-模式下的一些命令" tabindex="-1"><a class="header-anchor" href="#fastboot-模式下的一些命令"><span>fastboot 模式下的一些命令</span></a></h3><p>重启到 fastboot 模式之后可以使用 fastboot 命令线刷一些分区，这也是刷 rec 最常用的方法</p><ul><li>查看连接设备：<code>fastboot devices</code>；</li><li>刷写分区：<code>fastboot flash xxxx xxxxx.img</code> ，其中 xxxx 代表分区，可以是 recovery，system，data，或者是 cache，xxxx.img 代表镜像，需要输入路径和文件名称。某些手机需要输入[-i]参数，具体的请看自己手机论坛的教程，我这里教的只是通用方法，只能负责引你入门，这个以后会讲一下的；</li><li>格式化分区：<code>fastboot format xxxx</code> <strong>慎用！！！</strong>；</li><li>重启：<code>fastboot reboot</code>；</li><li>重启到 fastboot：<code>fastboot reboot-bootloader</code>；</li><li>boot 引导启动：<code>fastboot boot xxxx.img</code>；</li><li>解锁：不同品牌的手机解锁方法略有不同，可以到自己的手机论坛里去查。</li></ul><p><strong>其中刷写镜像的命令是最常用的</strong></p><h3 id="adb-shell-命令" tabindex="-1"><a class="header-anchor" href="#adb-shell-命令"><span>adb shell 命令</span></a></h3><p>ADB shell 命令有很多，如果没有基础的话，不是一句两句就能说清楚的，想学的可以看这里<a href="http://adbshell.com/" target="_blank" rel="noopener noreferrer">http://adbshell.com</a></p><h3 id="adb-sideload-刷机" tabindex="-1"><a class="header-anchor" href="#adb-sideload-刷机"><span>adb sideload 刷机</span></a></h3><p>需要使用第三方 REC，某些官方 REC 确实也支持 adb sideload 升级，推荐使用 TWRP 的 REC。</p><ol><li>重启到 REC，然后打开“高级”-“ADB 线刷”（“Advanced”-“ADB Sideload”）；<br><img src="https://i.loli.net/2017/10/02/59d21ed5a34fa.png" alt="adb线刷" loading="lazy"></li><li>在电脑上刷机包所在的文件夹打开 CMD 窗口或者 PowerShell 窗口；</li><li>输入<code>adb devices</code>验证连接状态；<br><img src="https://i.loli.net/2017/10/02/59d21f9eead63.png" alt="adb sideload连接状态" loading="lazy"></li><li>使用命令 <code>adb sideload xxx.zip</code> 刷入刷机包。</li></ol><h2 id="写在后面的" tabindex="-1"><a class="header-anchor" href="#写在后面的"><span>写在后面的</span></a></h2><p>本文所涉及到的都是最简单的 adb 命令，适用于刷机爱好者，因为 adb 命令实在是太多了，可以做到的事情也非常的，如果想了解更多 adb 命令，请到<a href="http://adbshell.com/" target="_blank" rel="noopener noreferrer">http://adbshell.com</a></p><p>如果本文内容有什么错误，欢迎在下面评论区指正。</p>',38)]))}const s=a(l,[["render",i]]),c=JSON.parse('{"path":"/2017/1023.AdbUsing.html","title":"ADB配置和ADB刷机","lang":"zh-CN","frontmatter":{"title":"ADB配置和ADB刷机","date":"2017-10-22T22:53:00.000Z","tag":["搞机"],"comments":true,"redirectFrom":["/2017/AdbUsing.html"],"description":"adb 的全称为 Android Debug Bridge，就是起到调试桥的作用。通过 adb 我们可以在 Eclipse 中方便通过 DDMS 来调试 Android 程序，说白了就是 debug 工具。adb 的工作方式比较特殊，采用监听 Socket TCP 5554 等端口的方式让 IDE 和 Qemu 通讯，默认情况下 adb 会 daemo...","head":[["meta",{"property":"og:url","content":"https://blog.u2sb.com/2017/1023.AdbUsing.html"}],["meta",{"property":"og:site_name","content":"叉叉白"}],["meta",{"property":"og:title","content":"ADB配置和ADB刷机"}],["meta",{"property":"og:description","content":"adb 的全称为 Android Debug Bridge，就是起到调试桥的作用。通过 adb 我们可以在 Eclipse 中方便通过 DDMS 来调试 Android 程序，说白了就是 debug 工具。adb 的工作方式比较特殊，采用监听 Socket TCP 5554 等端口的方式让 IDE 和 Qemu 通讯，默认情况下 adb 会 daemo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://i.loli.net/2017/10/02/59d20d4fef964.avif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-06T11:04:02.000Z"}],["meta",{"property":"article:tag","content":"搞机"}],["meta",{"property":"article:published_time","content":"2017-10-22T22:53:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-06T11:04:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ADB配置和ADB刷机\\",\\"image\\":[\\"https://i.loli.net/2017/10/02/59d20d4fef964.avif\\",\\"https://i.loli.net/2017/10/02/59d20ffb3346f.png\\",\\"https://i.loli.net/2017/10/02/59d211c3f2110.png\\",\\"https://i.loli.net/2017/10/02/59d2130398784.png\\",\\"https://i.loli.net/2017/10/02/59d21423b0430.png\\",\\"https://i.loli.net/2017/10/02/59d21915bf157.png\\",\\"https://i.loli.net/2017/10/02/59d21ed5a34fa.png\\",\\"https://i.loli.net/2017/10/02/59d21f9eead63.png\\"],\\"datePublished\\":\\"2017-10-22T22:53:00.000Z\\",\\"dateModified\\":\\"2025-04-06T11:04:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MonoLogueChi\\",\\"url\\":\\"https://blog.u2sb.com\\"}]}"]]},"git":{"createdTime":1743937442000,"updatedTime":1743937442000,"contributors":[{"name":"MonoLogueChi","username":"MonoLogueChi","email":"xxwhite@foxmail.com","commits":1,"url":"https://github.com/MonoLogueChi"}]},"readingTime":{"minutes":6.75,"words":2024},"filePathRelative":"2017/1023.AdbUsing.md","localizedDate":"2017年10月23日","excerpt":"<p>adb 的全称为 Android Debug Bridge，就是起到调试桥的作用。通过 adb 我们可以在 Eclipse 中方便通过 DDMS 来调试 Android 程序，说白了就是 debug 工具。adb 的工作方式比较特殊，采用监听 Socket TCP 5554 等端口的方式让 IDE 和 Qemu 通讯，默认情况下 adb 会 daemon 相关的网络端口，所以当我们运行 Eclipse 时 adb 进程就会自动运行。</p>\\n","autoDesc":true}');export{s as comp,c as data};
