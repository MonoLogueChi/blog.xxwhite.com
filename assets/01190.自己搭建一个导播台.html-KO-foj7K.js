import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as l,b as e,e as a,d as o,w as p,r as s,o as d}from"./app-Ct1uGNWU.js";const c="/assets/Clip_20220119_135351-CCkLaBfv.avif",g="/assets/Clip_20220119_134438-DDSxGrE7.avif",f="/assets/Clip_20220119_135844-Cin_PIAs.avif",h="/assets/01010199-BzcQpimH.avif",m="/assets/01010197-Doxx-K2u.avif",x="/assets/01010200-B5CP4J6C.avif",u="/assets/01010196-BXInbeh_.avif",y={};function b(_,t){const i=s("RouteLink");return d(),n("div",null,[t[3]||(t[3]=l('<p>最近帮公司组建了一个多功能导播台，公司也没有保密方面的要求，就把整个过程简单记录在博客上。</p><p>首先说明几点</p><ul><li>这是一个低成本的多功能导播台，功能都是依靠软件实现的，软件大部分为免费软件或低成本软件，财大气粗的网友可以直接退出了。</li><li>这套方案目前来说还不是完全体，仍有很多进步的空间，主要是受限于资金。</li><li>这套方案的拓展性很好，后期可以通过增加或更换硬件，满足不同客户对直播的定制要求。</li><li>我们根据服务的客户，这套设备主要的应用场景是，学术会议直播，远程会议导播，线上线下结合的学术论坛导播和直播。</li></ul><h2 id="硬件基础" tabindex="-1"><a class="header-anchor" href="#硬件基础"><span>硬件基础</span></a></h2><p>先来看一下主要硬件配置</p><table><thead><tr><th style="text-align:left;">硬件</th><th style="text-align:left;">配置</th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">主板</td><td style="text-align:left;">华硕 Z10PA-D8</td><td style="text-align:left;">双路 LGA2011-3</td></tr><tr><td style="text-align:left;">CPU</td><td style="text-align:left;">Intel Xeon E5-2630 v4</td><td style="text-align:left;">10 核 20 线程 主频 2.2G 睿频 3.1G</td></tr><tr><td style="text-align:left;">显卡</td><td style="text-align:left;">影驰 RTX3060 大将 OC</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">声卡</td><td style="text-align:left;">ESI MAYA44eX</td><td style="text-align:left;">PCIE 2.0 x1</td></tr><tr><td style="text-align:left;">采集卡 1</td><td style="text-align:left;">创视之星 8001HDMI 4K60 环出 4K60 采集卡</td><td style="text-align:left;">PCIE 2.0 x4</td></tr><tr><td style="text-align:left;">采集卡 2</td><td style="text-align:left;">创视之星 CSZX-890HDMI 4K60 环出 1080P60 采集卡</td><td style="text-align:left;">PCIE 2.0 x1</td></tr><tr><td style="text-align:left;">采集卡 3</td><td style="text-align:left;">创视之星 CSZX-8004SH 2 路 SDI + 2 路 HDMI 1080P 采集卡</td><td style="text-align:left;">PCIE 2.0x4</td></tr><tr><td style="text-align:left;">机箱</td><td style="text-align:left;">4U 服务器机箱</td><td style="text-align:left;">4U490</td></tr></tbody></table><p>整体的硬件配置大概就是这样，以普通用户的眼光来看这台机器，配置真的不咋滴，下面我来说一下硬件选择的理由。</p><h3 id="主板-cpu" tabindex="-1"><a class="header-anchor" href="#主板-cpu"><span>主板&amp;CPU</span></a></h3><p>主板这里，这块华硕 Z10PA-D8 是我们公司下架的服务器上拆下来的，我来说一下板 U 选择的理由。</p><p>我们要做的是一台多功能导播机，需要各种各样的拓展硬件，所以就需要很多 PCIE 插槽，这样的话，家用平台基本就直接 PASS 了，能选择的就只有工作站主板核服务器主板了，再考虑到平台不能太老，X79 以前的也 PASS 了，这样能选择的主板也就只有 X99(C612) C236 C246 X299(C621) 平台了，然后再看一下预算，只能找一张二手 X99 用一下了。</p><p>CPU 的话就是跟着主板选的，在保证主频不低的情况下，价格尽量要低，核心数和线程数不是那么重要。</p><p>然后正好我们有一台下架的服务器，里面的主板是 X99 主板，在评估可用的情况下，就选择这块主板了。</p><p>再来说一下这块主板，这是一块服务器主板，特点就是 PCIE 插槽较家用主板多。</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>同样，作为服务器主板，这块主板还有很多的缺点，如果要新购入主板，我肯定会选工作站主板，而不是服务器主板。</p><ul><li>缺少挡板（这个靠 DIY 解决了）</li><li>IO 接口太少了（后面板 2USB2.0 + 2USB3.0，前面板原生支持 2USB2.0 + 2USB3.0）</li><li>M.2 硬盘只支持 2242 规格的，并且为 pcie2.0x1</li></ul><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>简单来说，这几个接口接拓展设备的时候，真的不够用，只能再拓展接口了。</p><h3 id="显卡" tabindex="-1"><a class="header-anchor" href="#显卡"><span>显卡</span></a></h3><p>这里选了一张 30 系的显卡，先来看一下 N 卡编解码支持可用看 <a href="https://developer.nvidia.com/video-encode-and-decode-gpu-support-matrix-new" target="_blank" rel="noopener noreferrer">这里</a> ，编解码能力对比可以看 <a href="https://developer.nvidia.cn/nvidia-video-codec-sdk" target="_blank" rel="noopener noreferrer">这里</a> 。</p><p>简单来说，30 系显卡相较 10 和 20 系，编解码能力强太多了，这里多花一两千块钱，后面能为我们节约更多的流量费用。</p><p>再有就是，借助 30 系显卡可以实现视频音频 AI 降噪，这些都是很实用的功能。</p><h3 id="声卡" tabindex="-1"><a class="header-anchor" href="#声卡"><span>声卡</span></a></h3><p>声卡这里，我用了一张 ESI MAYA44eX，这是现在市面上少有的 PCIE 声卡。</p><p>这张声卡有 2 进 2 出共 4 个 6.35 接口，是立体声接口（不是平衡口），也就是说有 4 进 4 出，一共 8 个通道。</p><p>这张卡装电脑上足够应付大部分的场景了，如果音频接口不够用，可以再加 USB 声卡或者调音台。</p><h3 id="采集卡" tabindex="-1"><a class="header-anchor" href="#采集卡"><span>采集卡</span></a></h3><p>现在便宜的采集卡真不算多，我选了国产的创视之星采集卡，接口方面也是综合考虑各种因素选择搭配的，3 张采集卡可以同时采集 2 路 SDI 和 4 路 HDMI，共计 6 路信号。其中有 2 路 HDMI 信号可以环出，一路 HDMI 可以采集 4K60 帧信号。</p><h3 id="机箱" tabindex="-1"><a class="header-anchor" href="#机箱"><span>机箱</span></a></h3><p>机箱主要是要那么多的 PCIE 扩展槽，并且能装下这张 ATX 主板。在网上看了好久，发现貌似只有 4U 机箱能满足这个需求了。而且我还需要有至少 1 个光驱拓展位，至于为什么要光驱拓展位，后面说说。</p><p>最终我在网上选了一款 4U490 机箱。</p><p>机箱的光驱拓展位，我装了一个 2 盘位 2.5 寸硬盘抽屉，一个多合一读卡器。装这两个东西原因其实也很简单，装两块 500G 固态硬盘，直播录像存在里面，硬盘可以直接取下来，把录像拷贝到其他机器里剪辑。读卡器也是，可以在现场将拍摄素材拷贝到硬盘里，方便现场整理素材。这些都是从以前的实践中总结到的一些需求。</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="机柜" tabindex="-1"><a class="header-anchor" href="#机柜"><span>机柜</span></a></h3><p>机柜使用了舞台航空箱，下面 8U 高度，上面 4U，总共 12U 的高度。下面从下到上分别是 导播服务器，电源和聚合路由器，关于聚合路由器，以后有空的话专门写一篇文章来说一下。顺便提一句，聚合路由器也是用的开源系统，聚合服务器是由我们自己控制的。</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>电源使用航插接口，每个接口都可以提供 12V 和 5V 供电（不同的线材获取不同的电压），并且每一路都有单独的过载保护。</p><h3 id="屏幕-键鼠" tabindex="-1"><a class="header-anchor" href="#屏幕-键鼠"><span>屏幕&amp;键鼠</span></a></h3><p>屏幕使用了 3 块屏幕，并且 3 块屏幕都是触屏，操作真的非常方便。</p><p>键盘和鼠标使用了罗技的 K400+ 和 MX575，小尺寸键盘+轨迹球鼠标，非常时候在有限的空间内操作。</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="软件" tabindex="-1"><a class="header-anchor" href="#软件"><span>软件</span></a></h2><p>软件这部分，主要是以免费软件或低成本软件为主。</p><h3 id="obs-studio" tabindex="-1"><a class="header-anchor" href="#obs-studio"><span>OBS Studio</span></a></h3><p><a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer">Open Broadcaster Software</a>，开源直播推流软件，OBS 可以用来导播，可以用来推流，可以用来录像，只要有想法，OBS 能做非常多的骚操作，这里不详细讲了，感兴趣的话可以去看我的 <a href="https://space.bilibili.com/28474682/channel/seriesdetail?sid=1266908" target="_blank" rel="noopener noreferrer">B 站视频</a>，里面会慢慢更新 OBS 相关的视频的。</p><p>OBS 最强大的是插件，没有插件的 OBS 是没有灵魂的，可以依靠不同的插件实现不同的功能。</p><h3 id="voicemeeter-potato" tabindex="-1"><a class="header-anchor" href="#voicemeeter-potato"><span>Voicemeeter Potato</span></a></h3><p><a href="https://vb-audio.com/Voicemeeter/" target="_blank" rel="noopener noreferrer">Voicemeeter Potato</a> 是一个音频混音器，相较于机架软件，界面更直观，操作更灵活，而且价格也相对比较便宜。P4 等级的价格也只有 $41。</p>',50)),e("p",null,[t[1]||(t[1]=a("关于这个软件，我以前写过")),o(i,{to:"/2020/voicemeeter.html"},{default:p(()=>t[0]||(t[0]=[a("一篇文章")])),_:1}),t[2]||(t[2]=a("简单介绍过界面布局，感兴趣的话可以去看一下。"))]),t[4]||(t[4]=e("h3",{id:"其他软件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他软件"},[e("span",null,"其他软件")])],-1)),t[5]||(t[5]=e("p",null,"其他一些杂七杂八的小工具，以后有机会再慢慢讲吧。",-1))])}const E=r(y,[["render",b]]),A=JSON.parse('{"path":"/2022/01190.%E8%87%AA%E5%B7%B1%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%AF%BC%E6%92%AD%E5%8F%B0.html","title":"自己组建一个多功能导播台","lang":"zh-CN","frontmatter":{"title":"自己组建一个多功能导播台","date":"2022-01-19T12:18:35.000Z","tag":["随便水水","涨姿势","直播"],"comments":true,"redirectFrom":["/pages/a5d7b9/"],"description":"最近帮公司组建了一个多功能导播台，公司也没有保密方面的要求，就把整个过程简单记录在博客上。","head":[["meta",{"property":"og:url","content":"https://blog.u2sb.com/2022/01190.%E8%87%AA%E5%B7%B1%E6%90%AD%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%AF%BC%E6%92%AD%E5%8F%B0.html"}],["meta",{"property":"og:site_name","content":"叉叉白"}],["meta",{"property":"og:title","content":"自己组建一个多功能导播台"}],["meta",{"property":"og:description","content":"最近帮公司组建了一个多功能导播台，公司也没有保密方面的要求，就把整个过程简单记录在博客上。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-06T11:04:02.000Z"}],["meta",{"property":"article:tag","content":"随便水水"}],["meta",{"property":"article:tag","content":"涨姿势"}],["meta",{"property":"article:tag","content":"直播"}],["meta",{"property":"article:published_time","content":"2022-01-19T12:18:35.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-06T11:04:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自己组建一个多功能导播台\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-19T12:18:35.000Z\\",\\"dateModified\\":\\"2025-04-06T11:04:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"MonoLogueChi\\",\\"url\\":\\"https://blog.u2sb.com\\"}]}"]]},"git":{"createdTime":1743937442000,"updatedTime":1743937442000,"contributors":[{"name":"MonoLogueChi","username":"MonoLogueChi","email":"xxwhite@foxmail.com","commits":1,"url":"https://github.com/MonoLogueChi"}]},"readingTime":{"minutes":6.29,"words":1886},"filePathRelative":"2022/01190.自己搭建一个导播台.md","localizedDate":"2022年1月19日","excerpt":"<p>最近帮公司组建了一个多功能导播台，公司也没有保密方面的要求，就把整个过程简单记录在博客上。</p>\\n","autoDesc":true}');export{E as comp,A as data};
