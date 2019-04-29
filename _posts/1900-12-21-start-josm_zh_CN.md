---
layout: doc
title: JOSM入门
permalink: /zh_CN/josm/start-josm/
lang: zh_CN
category: josm
published: true
---

JOSM入门
=============================  

> 2015年7月12日修订  

本节介绍如何下载并安装Java OpenStreetMap编辑器JOSM、修改部分设置、打开示例地图、
学习软件部分基本操作。还记得
在引言章节中我们请你绘制你的城镇或村庄的地图吗？
本章我们将再次绘制你的地图，不过这次
是电子地图。学完本章你将对如何在JOSM中
绘制地图深有了解。

下载JOSM
-------------

- 如果你在CD或U盘里有JOSM的安装包，你可以跳过
  本节直接到下一节——安装JOSM。
- 如果你还没有JOSM，或者想用最新版，打开
  浏览器——比如Firefox, Chrome, Opera 或者 Internet
  Explorer.
- 在窗口顶端的地址栏中输入下列
  内容并按回车：[josm.openstreetmap.de](http://josm.openstreetmap.de)
- 你也可以通过在互联网上搜索“JOSM”找到JOSM网站。
- 网址看起来应该是这样：

  ![JOSM website][]

- 如果你的电脑装的是Windows系统，点击“Windows安装包(Installer)”下载JOSM。

  ![Windows installer][]

- 如果你装的是其他操作
  系统，点击你的系统对应的链接，此后下载将会
  开始。本章我们假设你使用Windows系统，
  但是其他操作系统的安装教程也会类似。

安装JOSM
------------

> 如果你的计算机尚未安装Java，你的安装过程可能出现问题。
> 如果你在这个环节出现问题，
> 请尝试下载并安装Java。你可以从这里下载Java：
>  [http://www.java.com/en/download/](http://www.java.com/en/download/)

> 苹果电脑(Mac)用户可能使用旧版的Java。有关OSX 10.6和10.7.3以上版本操作系统的选项，请参阅[http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation](http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation) 。

- 在你的电脑上找到JOSM安装包。双击
  开始安装。
- 依次点击“确认”“下一步”“同意”“安装”。当安装
  完成时，点击“完成”首次启动JOSM。
  之后你想打开JOSM的时候，你可以通过点击
  屏幕左下角的开始菜单，再点击
  其中的JOSM程序。
- 你可能会看到弹窗询问是否更新
  software.  You don’t need to update it since it is new.  Press the
  button that says “Cancel.”  If you don’t ever want to see this
  在按下“取消”前勾选底部的复选框。
- JOSM的启动画面如下：

  ![JOSM splash page][]

JOSM首选项(偏好设置)
--------------------

JOSM中有很多你可以自定义的设置。 
你可能想设置程序的语言。JOSM已经
被翻译成许多语言，你可能想使用
默认语言之外的语言。

- 要进入首选项窗口，点击编辑-\>首选项。

  ![Preferences window][]

- 在窗口左侧，点击看起来想颜料桶和画刷
  的图标。
- 在窗口顶部，点击“外观与感觉”标签。
- 从“语言”下拉菜单中选择你的
  语言。
  
  ![Look and feel][]

- 点击“确定”。
- 你需要重启JOSM保存设置。点击左上角的“文件”，
  点击菜单底部的“重新启动”。

学习JOSM基本绘图
-----------------------------

- 现在我们打开一个OSM实例文件，我们将用这个文件学习
  用JOSM绘图的基本方法。注意这张地图是虚构的，
  因为它不是任何实际存在的地点的真正地图，所以我们将不把它保存到
  OpenStreetMap。
- 从此处[sample.osm](/files/sample.osm) 下载示例文件。
- 用JOSM打开示例地图文件。点击
  左上角的“打开”按钮。

  ![Open file][]

- 找到**sample.osm**文件。它可能在你的下载文件夹，
  如果你没有把它存到其他地方的话。点击该文件再点击“打开”。
- 你会看到如图所示的示例地图：

  ![Sample file][]

- You will use these data in order to try various editing techniques.
  *You must however never upload these fictitious data to the database.*

### 基本操作

- 要上下左右移动地图，按住鼠标右键
  并移动鼠标。
- 有几种方式可以缩放地图。如果你有
  鼠标，你可以通过滚轮缩放。如果你
  用的是笔记本电脑，没有鼠标，你可以用地图窗口左上角
  的滑动条控制缩放。
  按住鼠标左键左右移动鼠标，滑动条将
  随之左右移动。

  ![Scale bar][]

- 请看示例地图。图上有几种不同类型的对象。
  有一条河流、一片森林、几栋建筑、几条道路，还有
  几家店铺。要选中一个对象，用左键
  点击它即可。

### 点、线、面

- 当你在示例地图上点击不同对象的时候，注意
  图中共有三种类型的对象，分别是点、
  线、面。
- 点是一个用符号表示的位置。在例
  图上有两个点，一家鞋店和一家超市。
  鞋店由鞋的符号表示，超市
  由购物车表示。
- 例图中还有一些线划代表道路。
  如果你拉大看，那几条线里也是有
  点的。这些点没有任何符号或其他
  与之关联的信息，但是它们是用来定义
  线的位置的。
- 最后，例图上有许多面，它们表示
  不同的地点——一片森林、一条河流、一个公园，还有建筑物。面
  用来表示一个区域，例如田野或建筑。面
  实际上和线很相像——唯一的区别是面是一条
  首尾相连的线。

> 很容易理解一幅地图包含这三类基本对象—— 
> 点、线、面。而在OpenStreetMap，有专门的术语
> 来称呼这些对象，你很快就会学到。在OSM上，点事实上被称为
**节点(node)**，线被称为**路径(way)**，面被称为**封闭路径(closed way)**。
> 这是因为面本身就是一条首尾相连的线。

- 你可能已经注意到，当你选中对象时，
  地图右侧的“属性”窗口会显示一张列表。这些属性被称为
  标签。标签是与点线面关联的信息，
  用于描述这些形状到底是什么。我们将在此后的章节中学到更多标签。
  现在你只需要知道
  标签里的信息是用来描述森林、河流、
  建筑或者其他东西的。
- 想一想手工绘制的地图，你在上面是怎么绘制
  点线面的。其他类型的地点最好该用
  点、线还是面来表示？

### 修改对象

-  选择地图左侧的森林。确保点在了
  森林周围的线上，而不是线上的点。现在
  按住鼠标左键拖动鼠标。你应该
  可以在图上把森林移动到新位置。
- 点击森林轮廓线上的点，按住
  鼠标左键并拖动鼠标。你应该能够
  移动该点。这就是修改对象的形状
  或移动点位的方法。

### 绘图

- JOSM的左侧有一列按钮。其中许多
  按钮是用来打开右侧的新窗口的，这些窗口提供
  有关地图的更多信息。而最重要的按钮在
  这一列图标的顶部。这些按钮可以改变
  鼠标的功能。
- 这列按钮顶部的那些是你最常用的。
  他们用来选择已有对象或绘制新对象。
- 到目前为止，你已经用过了选择工具，看起来是
  这样：

  ![Select tool][]

- 在你绘制之前，你需要确保没有选中任何对象。
  点击地图空白处的黑色部分，确保
  未选中任何对象。
- 点击第二个按钮，绘制工具。

  ![Draw tool][]

- 在图中空白处双击鼠标。
  这样就绘制了一个点。
- 画线是则要单击鼠标，然后移动鼠标
  并再次点击，直到画好为止。要结束
  线的绘制，双击鼠标。
- 画面的方法和画线一样，但是结束面的方法是
  在线的起点双击鼠标。

### 添加预设组合

- 现在我们掌握了绘制点线面的方法，但是我们仍然
  无法定义形状所表示的内容。我们想要让
  我们的点变成商店、学校等等，或者把
  面变成田野、建筑等。
- 点击选择工具，它在左侧的一列按钮里。

  ![Select tool][]

- 选择你刚刚用绘图工具绘制的对象。在
  顶部的菜单栏中点击“预设组合”。将鼠标移至
  你想要标注的地物类型的子菜单上。
- 当你点击预设组合时，会弹出一个表单询问
  更多信息。你不一定要每栏都填满，但是你还是要
  填上一些重要栏目，比如对象的
  名称。
- 当你输完信息时，点击“应用预设组合”。
  如果一切正常，你的点、线、面就会
  变成相应的颜色或符号。这是因为你已经定义了
  它是什么。

绘制自己的地图
-----------------

- 现在我们画张图来练习你刚刚学会的技术。
  你可以把上次纸上画的图重画一遍。
- 从例图处拖动地图。按住鼠标右键
  并移动鼠标，直到找到一处可以继续绘制的空白区域。
- 使用绘图工具创建点线面等形状，
  通过选择预设组合菜单中的项来描述这些形状。
- 画完后，你应该有了自己的地图，和
  我们打开的sample.osm样图差不多。

## Remove the sample layer

Once you feel comfortable with these basic editing techniques you might want
to turn your attention to mapping real features. 

*It is very important that you first remove the layer with the sample data. 
These data are fictitious and must not be uploaded to the OpenStreetMap 
database (newer JOSM releases automatically prevent this).*

In the Layers window on the upper right of the screen select the sample.osm layer. 
Then click on the trash can icon in the lower right corner of that window. 
Alternatively you can choose delete from the context menu of the layer. 
In order to continue editing you first need to download real data. 
This will be explained in the next chapter.

小结
-------

很好，如果一切顺利，你已经学会了如何在你的电脑上安装JOSM
和基本绘图工具。下一章我们将
进一步学习用JOSM编辑OSM地图的方法。

[JOSM website]: /images/josm/josm-website.png
[Windows installer]: /images/josm/windows-installer.png
[JOSM splash page]: /images/josm/josm-splash-page.png
[Preferences window]: /images/josm/josm_preferences.png
[Look and feel]: /images/josm/josm_look-and-feel.png
[Open file]: /images/josm/josm_open-file.png
[Sample file]: /images/josm/josm_sample-file.png
[Scale bar]: /images/josm/josm_scale-bar.png
[Select tool]: /images/josm/josm_select-tool.png
[Draw tool]: /images/josm/josm_draw-tool.png