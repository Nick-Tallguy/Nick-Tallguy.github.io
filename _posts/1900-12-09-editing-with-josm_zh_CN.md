---
layout: doc
title: 编辑外业数据
permalink: /zh_CN/josm/editing-with-josm/
lang: zh_CN
category: josm
---

编辑外业数据
==================

> 2015年7月13日修订  

现在我们已经讲完了用OpenStreetMap绘制建筑。
在[用手机、GPS或纸图绘图](/zh/mobile-mapping) 部分，你可以了解到如何使用移动工具来测量一个地区。  

本章，我们将再次回到JOSM来学习一些
之前没有讲到的新概念。

JOSM图层
-----------
如果你是按部就班学到这里的，你会发现各种不同的东西都能加进JOSM里。
我们可以下载OSM数据，添加必应卫星影像，
加载GPS轨迹和轨迹点，以及添加Field Papers——这些全都能显示
在JOSM的地图窗口。

你还会注意到每次向JOSM添加新内容时，
JOSM右侧栏的图层面板会增加一个条目。 视你打开的内容不同，
你的图层面板可能会是这样：

![Layers panel][]

这个列表里的每个条目代表了一个你在地图窗口中打开的数据源。
在此例中，“Data Layer 1(数据图层1)”
是我们正在编辑的OpenStreetMap数据。“Field Papers”是
我们将Field Paper加进JOSM时创建的图层。

如果你添加了必应卫星影像，图层面板上会有另一个“Bing Sat (必应卫星)”的图层。

图层的概念可能不太好理解。可以把每个
图层想象成一张半透明的纸，它们一层层地叠在一起。
每张纸上都有某种类型的信息，可以
根据你的需要调整它们的顺序。

用于参考的图层，比如卫星影像、GPS轨迹、Field Papers
通常称为“底图(base layers)”。OSM数据图层才是你实际操作的图层。

- 要移动图层，在图层面板中点击该图层，再点击
    上下箭头按钮移动图层顺序。

![Layers up down][]

- 要关闭图层显示，先用鼠标选中，
    再点击显示/隐藏按钮：

![Layers show hide][]

- 这时你会看到你选中的图层在地图窗口消失了。
    在点一次显示/隐藏按钮，该图层就会重新显示。
- 你还可以通过选择图层再点删除按钮来
    移除图层：

![Layers delete][]

- 最后一点很重要，你只能编辑
    当前JOSM*激活*的图层。如果你无法编辑地图窗口中的地图，
    很可能是因为你没有激活恰当的图层。
    大多数图层，比如GPS点、Field Papers或卫星影像，
    是不能编辑的。唯一能编辑的图层是
    OpenStreetMap数据图层，通常记作
    “数据图层1”。
- 要激活图层，在图层面板上选中它，点击
    激活按钮：

![Layers activate][]


利用GPS数据和Field Papers
-------------------------------
在[用手机、GPS或纸图绘图](/zh_CN/mobile-mapping/) 章节，我们学习了如何用GPS和Field Papers采集数据，
以及如何将采集的数据加入JOSM成为图层。

一旦你用上述工具进行了测量，你就还需要
用数字化方法向OpenStreetMap添加信息。

你可以通过和之前所学过程一样的方法实现添加数据——
**下载、编辑、保存**。区别在于，你可以不只用卫星
影像作为底图，还可以利用你的GPS数据、Field Papers、
笔记，或者它们中的组合来作为底图参考。

- 例如，假设你用自己的GPS轨迹作为JOSM的底图，
    你在你的GPS上保存过一个叫做030的轨迹点，
    你还在笔记中记录了030是一所学校。要把这个点
    加入OpenStreetMap，你要选择绘图工具，
    再在你的地图窗口上双击030点。这样就
    创建了一个点。然后打开预设组合菜单，找到
    学校的预设组合。输入学校的名字并点击“应用预设组合”。
    添加线和面的方法是一样的。

![GPS in JOSM][]

标签
----
当你画完一个点、一条线或一个面时，它的位置信息已经有了，但是
却没有关于这些形状是什么的信息。换言之，我们知道它**在哪里**，
却不知道它**是什么**。此前我们用过
预设组合菜单里的菜单项来定义**是什么**。
OpenStreetMap是通过**标签**来知悉一个对象**是什么**的。

这里的标签就像你可以贴在东西上那种标签一样。例如
我们画了一个方块，它就只是个方块而已。但随着我们给它
添加属性、描述它是什么，这个方块就成为了一栋建筑，它的名字就
变成了“优盛大厦”，有15层高。

你可以给一个对象添加任意数量的标签。标签被存储为
成对的文本，称为**键值对**(key-value pair)。
在OpenStreetMap中，上述标签实际上是：

- building = yes
- name = 优盛大厦
- building:levels = 15

如果你在JOSM中选中了一个对象，你可以
在右侧属性面板中看到它的所有标签。

![Properties panel][]

### 编辑标签
你可以在属性面板添加、修改、删除标签。然而，标签
通常都是英文，有些意思比较容易搞混，因此
用预设组合菜单一般会更方便。你添加或修改标签时，
对象的属性随之改变。

- 要编辑对象的标签，先选中它。
- 再用以下两种方式之一编辑标签：一是预设组合菜单，
    二是直接在右侧属性窗口修改。 

### 常见错误：误将本想用于线或面的标签打在节点上
当你想编辑点的属性时，你要先选中它，
然后再通过预设组合菜单或直接在属性面板添加标签。
一种常见的错误是向线或面添加标签时加到了点上。
选取对象时要非常注意
自己选中的应该是线，而不是构成线的点。

这很容易选错，因为当你用JOSM的选取工具拉框选择对象时，
软件会将线**和**点同时选中，
这时你再添加标签，点也会被加上。
请确保在添加标签时**只**选中了
线。

![Nodes mistake][]

Saving OSM files
----------------
When you are editing in JOSM, it is always a good idea to download, edit, and
upload changes in a reasonably short period of time. You do not want to download
data one day, and then wait until a few days later to upload your edits. What if
someone else edits the same area during that time? This will cause errors and conflicts.

Don't be afraid to upload your edits frequently. This ensures that your changes will
be saved to the database and you will not lose your hard work.

If you are working in a single area, it's a good idea to download the map data
every time you want to edit, in case another user has made changes.

Although you should always try to download OSM data when you are ready to edit,
and upload your changes frequently, there may be cases in which you want to save
the OSM data on your computer. For example, if you have intermittent connectivity
to the internet, you may wish to download data, save it, edit, and then upload your
changes later on.

-  To save an OSM file, make sure that it is the active layer in the
    the Layers panel. Click “File” on the top menu, and click “Save”.
    Choose a location for the file and give it a name. You can also save
    by clicking this button:

![JOSM save button][]

-  You can now close JOSM and your data will be saved. When you want to
    open the file again, simply open JOSM, go to the “File” menu, and
    click “Open...”

小结
-------
In this chapter we looked a little bit closer at the JOSM interface and learned
about layers and tags. You should now have a solid footing in how to map and how
to edit OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png