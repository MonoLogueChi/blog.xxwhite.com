---
title: Unity WebGL平台开发遇到的坑
date: 2019-04-29 20:48:35
tags: Unity

keywords: Unity, WebGL, JS数据交互, C#
comments: true
---

最近在用 Unity 做一个 WebGL 平台的项目，开发过程中遇到了各种各样的坑，这里简单记录一下，以免以后再踩。

<!-- more -->

## WebRequest 请求（异步的问题）

首先是 Http 请求的问题，我最开始想的是，直接用 C#里的写法，编辑器里测试毫无问题，但是一打包出来就不行，会报出 `SystemException: Thread creation failed.` 的错误，无奈只能用 Unity 自己的 `UnityWebRequest`。

错误的示范 0：

```cs
public void WrongGet()
{
    using (HttpClient httpClient = new HttpClient())
    {
        var text = httpClient.GetStringAsync("https://www.baidu.com/艹").Result;
        Debug.Log(text);
    }
}
```

错误的示范 1：

```cs
public void WrongGet()
{
    using (WebClient webClient = new WebClient())
    {
        var text = webClient.DownloadString("https://www.baidu.com/艹");
        Debug.Log(text);
    }
}
```

这样写后果会比上面这种更严重，整个程序直接崩溃

![后果](https://s2.ax1x.com/2019/04/29/E1c9i9.png)

正确的示范：

```cs
private IEnumerator Get()
{
    using (var webRequest = UnityWebRequest.Get("https://www.baidu.com/艹"))
    {
        yield return webRequest.SendWebRequest();
        if (!webRequest.isNetworkError && !webRequest.isHttpError)
            Debug.Log(webRequest.downloadHandler.text);
    }
}
```

感觉这是异步的问题，因为 js 是单线程的。

**如果确定要打包 WebGL 平台，就不要用异步，用协程比较稳，另外，尽量用 Unity 自己的那一套东西**

## SSL 证书

这个不知道是什么鬼问题，Unity 编辑器不支持 ECC 证书？还是其他什么问题，测试是在我的服务器上测试的，我的服务器配的是 ECC 证书，最开始在我的电脑上是不支持的，一直报错，后来不知道发生了什么，竟然莫名奇妙的支持了，这件事也就网了，但是后面代码合并的时候，到我同事的电脑上，又出现了这个问题，没办法，只能暂时先用 http 顶着了，后面再说申请 RSA 证书的事。

到后面打包出来测试的时候，又出问题了，里面的资源已经数据请求，都是用的 http 协议，但是我最后访问页面的时候，用的是 https 协议，https 页面里，会阻断不安全的 http 请求，没办法，RSA 证书的事提上日程，先搞定。

**Unity Editor 中发起 https 请求，如果后端是 RSA 证书没问题，后端是 ECC 证书可能会出问题**

## JSON

接下来是 JSON 序列化和反序列化，一提到 JSON，最先想到的是 `JSON.NET库`，也就是`Newtonsoft.Json`库。用这个没毛病，从 nuget 上下载下来，然后把 dll 文件拖进去，OK。在编辑器里一切都没问题，但是一打包成网页就出问题。

什么问题呢？写一段正常的代码

```cs
string json = "json字符串";
Dictionary<string, string> dic = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
```

这样没毛病，一切 OK，但是要按照下面这样写，就会踩雷

```cs
public class Dic
{
    public int code { get; set; }
    public Dictionary<string, string> data { get; set; }

    public static Dic DeDic(string json)
    {
        return JsonConvert.DeserializeObject<Dic>(json);
    }
}
```

如果是按照上面这样写，恭喜你，打包出来的东西肯定报错，反序列化得到的全都是 null。

而且网上搜索的话，很难搜到原因，貌似遇到这个问题的人并不多？没办法，求着后端小哥哥帮忙改接口，把接口全都写成 key-value 的形式就可以用了。

为什么会出现这个问题？在原本都已经放弃的时候，无意中发现了这个插件 [JSON.NET FOR UNITY](https://assetstore.unity.com/packages/tools/input-management/json-net-for-unity-11347)，在这个插件的介绍里找到了答案

> While many in the Unity Community have succeeded in getting JSON .NET to work for their games, it has never worked properly with iOS or IL2CPP. The iOS errors are due to incompatibilities with AOT (Ahead of Time Compilation) that is used by Mono/IL2CPP in iOS.

大致的意思就是，JSON.NET 在 iSO 平台上因为 ATO 的问题不能直接用，我想 WebGL 应该也是类似的问题吧，看着这个插件的支持平台上，写了 WebGL，抱着试一试的想法尝试了一下，还真的可以，行得通，这个坑算是解决了，反序列化 Json 不能直接用 JSON.NET 库，要用 Unity 商店里的那个插件。

**在 Unity 里，非桌面平台，尽量少用 nuget 仓库里的东西，如果要用，也要先确保 Unity 不同平台的支持情况，尽量用 Unity 商店里的插件，因为 Unity 商店里的插件一般都会注明平台支持情况**

> 更新 推荐使用 [Utf8Json](https://github.com/neuecc/Utf8Json) 更快，但相比 Json.Net 缺少 JArray 和 JObject 等特性，推荐使用 [Newtonsoft.Json-for-Unity](https://github.com/jilleJr/Newtonsoft.Json-for-Unity)，版本更新，功能更多。

## 跨域

相比其他问题，这个问题已经不能叫问题了，只要稍微有点 Web 开发经要就能解决，因为所有请求都是从 js 里发出的，所以很容易遇到跨域问题，只要加上对应的返回头就可以了 `Access-Control-Allow-Origin`。

**Unity 打包 WebGL 平台文件时，要尤其注意跨域问题，一定要提前和后端讲明**

## AB 包

相比之下，AB 包就没什么坑了，中规中矩，常规用法就可以了，建议按场景打包，虽然会有重复资源，但是操作简单啊，如果自己手动分包的话，麻烦的要死。

唯一要注意的一点就是 IL2CPP 编译时代码剥离的问题，这一点随便一百度，都会有很多教程告诉你怎么做。

## 音频

我们使用了网络音频，所以要注意网络音频的格式，打包出来的网页网络音频要用 wav 格式的，而在客户端可以使用 ogg 格式。

```cs
private IEnumerator PlayWebAudio(string url, float d)
{
#if UNITY_EDITOR || !UNITY_WEBGL
    using (var www = UnityWebRequestMultimedia.GetAudioClip(url, AudioType.OGGVORBIS))
#elif UNITY_WEBGL
    using (var www = UnityWebRequestMultimedia.GetAudioClip(url, AudioType.WAV))
#endif
    {
        yield return www.SendWebRequest();
        yield return new WaitForSeconds(d);
        if (www.isNetworkError || www.isHttpError)
        {
            Debug.Log(www.error);
        }
        else
        {
            var clip = DownloadHandlerAudioClip.GetContent(www);
            PlayAudioClip(clip);
        }
    }
}
```

**Unity 在使用网络资源的时候，要注意音频格式，不同平台的支持情况不一样，不确定的时候就用 wav 格式吧**

## 程序内与网页传参

这个看了半天也没搞懂真正的用法，只能写个简单点的函数

先说明一下，能百度到的东西，很多都是过时的，而且大家都是你抄我，他抄你，抄来抄去，没啥意思。我找了一圈，就发现一篇是比较实用的，而且写得也挺易懂的 [链接](https://blog.csdn.net/beihuanlihe130/article/details/76214551)

最好的工具是 Unity 的官方文档，这个文档写的真不错，很多方法都有很详细的示例 [文档](https://docs.unity3d.com/Manual/webgl-interactingwithbrowserscripting.html)

因为以前在 UE4 上也研究过这个东西，所以对 Emscripten 也有一定的了解。看一下文档就大致该知道怎么做了。

首先是在 `Plugins目录下` 创建一个 `.jslib` 文件，名字叫什么都无所谓，然后在里面写一些函数，尽量简单一点，越简单越好，函数的形式可以参考官方文档，要注意，官方文档给的这几个示例函数都是比较具有代表性的，基本上你能用到的东西，都已经告诉你该怎么处理了，传参，返回值，资源处理，该有的都有了。

```
mergeInto(LibraryManager.library, {
  Hello: function () {
    window.alert("Hello, world!");
  },

  HelloString: function (str) {
    window.alert(Pointer_stringify(str));
  },

  PrintFloatArray: function (array, size) {
    for(var i = 0; i < size; i++)
    console.log(HEAPF32[(array >> 2) + i]);
  },

  AddNumbers: function (x, y) {
    return x + y;
  },

  StringReturnValueFunction: function () {
    var returnStr = "bla";
    var bufferSize = lengthBytesUTF8(returnStr) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(returnStr, buffer, bufferSize);
    return buffer;
  },

  BindWebGLTexture: function (texture) {
    GLctx.bindTexture(GLctx.TEXTURE_2D, GL.textures[texture]);
  },
});
```

在需要调用的时候，这样写

```cs
using UnityEngine;
using System.Runtime.InteropServices;

public class NewBehaviourScript : MonoBehaviour {

    [DllImport("__Internal")]
    private static extern void Hello();

    [DllImport("__Internal")]
    private static extern void HelloString(string str);

    [DllImport("__Internal")]
    private static extern void PrintFloatArray(float[] array, int size);

    [DllImport("__Internal")]
    private static extern int AddNumbers(int x, int y);

    [DllImport("__Internal")]
    private static extern string StringReturnValueFunction();

    [DllImport("__Internal")]
    private static extern void BindWebGLTexture(int texture);

    void Start() {
        Hello();

        HelloString("This is a string.");

        float[] myArray = new float[10];
        PrintFloatArray(myArray, myArray.Length);

        int result = AddNumbers(5, 7);
        Debug.Log(result);

        Debug.Log(StringReturnValueFunction());

        var texture = new Texture2D(0, 0, TextureFormat.ARGB32, false);
        BindWebGLTexture(texture.GetNativeTextureID());
    }
}
```

这个示例，能看懂的人肯定是一看就懂，看不懂的估计还要再补一下基础知识，仿照这个示例，咱们自己来写一个

jslib：

```
mergeInto(LibraryManager.library, {
  GetUrlParam: function (str) {
	var paraName = Pointer_stringify(str);
	var result = GetUrlParamFun(paraName);
	var bufferSize = lengthBytesUTF8(result) + 1;
	var buffer = _malloc(bufferSize);
	stringToUTF8(result, buffer, bufferSize);
	return buffer;
  },
});
```

简单分析一下，有个方法叫`GetUrlParam`，带有一个参数，已经确定需要传字符串进来，所以需要使用`Pointer_stringify()`方法，注意传参是将内容写入内存，使用指针去指的所以要用`Pointer_stringify`，再下面，调用一个叫`GetUrlParamFun`的函数，获取返回值，再后面就是将结果返回给 Unity，也是将结果写入内存，然后用指针去指。（我指针理解的不够透彻，上面这段话难免会有一些问题）

需要在网页中插入一段 js：

```js
function GetUrlParamFun(paraName) {
	var url = document.location.toString();
	var arrObj = url.split("?");
		if (arrObj.length > 1) {
			var arrPara = arrObj[1].split("&");
			var arr;
			arr = arrPara[i].split("=");
			if (arr != null && arr[0] == paraName) {
				return decodeURIComponent(arr[1]);
			}
		}
		return "";
	}
	else {
		return "";
	}
}
```

上面这一段代码是用来获取页面 url 中的参数的

C#脚本中写

```cs
using UnityEngine;
#if !UNITY_EDITOR && UNITY_WEBGL
using System.Runtime.InteropServices;
#endif

public class XXXX : MonoBehaviour
{
#if !UNITY_EDITOR && UNITY_WEBGL
    [DllImport("__Internal")] private static extern string GetUrlParam(string str);
#endif
	private void Start()
    {
#if !UNITY_EDITOR && UNITY_WEBGL
    	string from = GetUrlParam("from");
    	Debug.Log(from);
#endif
    }
}
```

这样就会打印出来我们访问地址参数 form，例如访问 `http://localhost?id=0&from=kkkkkk`，会打印出来 `kkkkkk`

**Unity 调用 JS 代码，一点都不难，只要按照官方文档走就可以了，Unity 的生态真的非常好，对新手友好，吐槽一下辣鸡 UE4，文档乱的像坨翔**
