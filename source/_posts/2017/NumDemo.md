---
title: 一个Unity的UGUI数字仪表显示的Demo
date: 2017-11-09 16:59:20
tags: Unity

comments: true
---

做了一个小玩意，就把制作的过程分享一下，算是提出一种自己的想法吧。

<!-- more -->

## 需求分析

最近做的东西用到了数字仪表，在网上也没找到合适的项目（没看到类似的），就自己做了一个出来，虽然使用的原理笨了一点吧，但是最起码是做出来的。

## 原理

我做的这个东西的原理很简单，就是正常时候是有一层遮盖的，然后需要显示数字的时候把适当的遮盖移出，就做到了想要的效果。

## 准备

想要做数字仪表，就要数字仪表的素材，我这里使用了PS制作素材，也就是这一根棍。

![素材](https://ooo.0o0.ooo/2017/11/09/5a0421487a976.png)


## 搭建场景

### Demo创建

将刚才做好的图片导入到Unity里，格式改为Sprite  
![图片格式](https://i.loli.net/2017/11/09/5a0431312e704.png)

新建Scene，然后创建一个Canvas，在Canvas下创建一个空物体“Number”在Number下创建Image，也就是刚才那张素材图片，在Image下创建一个Panel，修改一下遮盖透明度和遮盖位置，然后就是复制移动旋转，最后构建出下面这个东西。

![搭建场景](https://i.loli.net/2017/11/09/5a0433bc0cf4f.png)

### 代码

新建一个脚本Num.cs，新建一个空物体，然后将脚本挂在空物体上。

编辑脚本

```cs
using UnityEngine;

public class Num : MonoBehaviour
{
    public GameObject[] Panel;

    private void Start()
    {
        Panel = new GameObject[7];

        Panel[0] = GameObject.Find("Panel0");
        Panel[1] = GameObject.Find("Panel1");
        Panel[2] = GameObject.Find("Panel2");
        Panel[3] = GameObject.Find("Panel3");
        Panel[4] = GameObject.Find("Panel4");
        Panel[5] = GameObject.Find("Panel5");
        Panel[6] = GameObject.Find("Panel6");

        CloseNum();
    }

    //改变显示数字
    public void ChangeNum(int num)
    {
        CloseNum();

        if (num == 0)
        {
            Panel[0].SetActive(false);
            Panel[1].SetActive(false);
            Panel[2].SetActive(false);
            Panel[3].SetActive(false);
            Panel[4].SetActive(false);
            Panel[6].SetActive(false);
        }

        if (num == 1)
        {
            Panel[2].SetActive(false);
            Panel[3].SetActive(false);
        }

        if (num == 2)
        {
            Panel[1].SetActive(false);
            Panel[2].SetActive(false);
            Panel[4].SetActive(false);
            Panel[5].SetActive(false);
            Panel[6].SetActive(false);
        }

        if (num == 3)
        {
            Panel[2].SetActive(false);
            Panel[3].SetActive(false);
            Panel[4].SetActive(false);
            Panel[5].SetActive(false);
            Panel[6].SetActive(false);
        }

        if (num == 4)
        {
            Panel[0].SetActive(false);
            Panel[2].SetActive(false);
            Panel[3].SetActive(false);
            Panel[5].SetActive(false);
        }

        if (num == 5)
        {
            Panel[0].SetActive(false);
            Panel[3].SetActive(false);
            Panel[4].SetActive(false);
            Panel[5].SetActive(false);
            Panel[6].SetActive(false);
        }

        if (num == 6)
        {
            Panel[0].SetActive(false);
            Panel[1].SetActive(false);
            Panel[3].SetActive(false);
            Panel[4].SetActive(false);
            Panel[5].SetActive(false);
            Panel[6].SetActive(false);
        }

        if (num == 7)
        {
            Panel[2].SetActive(false);
            Panel[3].SetActive(false);
            Panel[4].SetActive(false);
        }

        if (num == 8)
        {
            Panel[0].SetActive(false);
            Panel[1].SetActive(false);
            Panel[2].SetActive(false);
            Panel[3].SetActive(false);
            Panel[4].SetActive(false);
            Panel[5].SetActive(false);
            Panel[6].SetActive(false);
        }

        if (num == 9)
        {
            Panel[0].SetActive(false);
            Panel[2].SetActive(false);
            Panel[3].SetActive(false);
            Panel[4].SetActive(false);
            Panel[5].SetActive(false);
            Panel[6].SetActive(false);
        }

    }


    private void CloseNum()
    {
        for (int i = 0; i < Panel.Length; i++)
        {
            Panel[i].SetActive(true);
        }
    }
}

```

到这里，这个项目基本就要完成了。

### 测试显示效果

这个场景搭建完了之后，需要测试一下显示效果，我们再新建一个脚本Demo.cs用来测试效果，同样将这个脚本挂在刚才创建的空物体上。

```cs
using UnityEngine;

public class Demo : MonoBehaviour
{
    private int i;

    private void Start()
    {
        i = 0;

        InvokeRepeating("AddNum",2,2);
    }

    private void AddNum()
    {
        GetComponent<Num>().ChangeNum(i);

        i++;

        if (i == 10)
        {
            i = 0;
        }
    }
}

```


## 最终效果

![最终效果](https://i.loli.net/2017/11/09/5a043bde0413f.gif)

缺点：不够精美，显示效果很差。

## 示例下载


[https://t.cn/RlEBz7Z](https://pan.lanzou.com/i04soef)