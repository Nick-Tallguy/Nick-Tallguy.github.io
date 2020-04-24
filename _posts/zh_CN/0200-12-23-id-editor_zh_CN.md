---
layout: doc
title: iD编辑器
permalink: /zh_CN/beginner/id-editor/
lang: zh_CN
category: beginner
---

iD编辑器
=============

> Reviewed 2019-06-10

Starting to map with a Tasking Manager for HOT or MissingMaps etc? See our [HOT-tips section](/en/hot-tips/).  

- TOC
{:toc}

iD编辑器是基于浏览器的事实标准OpenStreetMap编辑器。iD编辑器快速、易用，可以借助来自诸如卫星或航空影像、GPS、Field Papers或Mapillary等多种数据源的数据绘图。  

在一些不需要JOSM(一个更进阶的地图编辑器)的高级功能的微小改动中，使用ID编辑器是个更好的方法。本章阐述使用iD编辑器编辑的一些基础知识。  

启动iD编辑器
----------------------

-  iD编辑器需要持续有效的互联网连接。  
-  打开浏览器，前往OpenStreetMap网站 [http://www.openstreetmap.org](http://www.openstreetmap.org)。  
-  用你的OpenStreetMap账户**登录**  
-  将地图平移并缩放到想要编辑的区域。平移的方法是按住鼠标左键，拖动到想要的区域。  
-  点击**编辑**旁边的小箭头，然后点击 **使用iD (浏览器内编辑器) 编辑**。  

![image1][]


iD编辑器用户界面
-------------------------
![image2][]

1. **编辑要素面板:** 该面板显示图中所选对象的标签。  
	你可以在该面板上添加或编辑标签。  
2. **工具:** 该面板显示基本的编辑工具：  
    **工具:** 该面板显示基本的编辑工具：- 画点(节点, node)，*快捷键* **1** ![image3][]{: height="24px"}  
    画线(路径,way)， *快捷键* **2** ![image4][]{: height="24px"}  
    画面(多边形polygon)， *快捷键* **3** ![image5][]{: height="24px"}  
    撤销， *快捷键* **Ctrl+Z** ![image6][]{: height="24px"}  
    重做，*快捷键* **Ctrl+Y** ![image7][]{: height="24px"}  
    Save changes, *shortcut keys* **Ctrl+s** ![image8][]{: height="32px"}  
3. **地图面板:** 该面板显示各配置功能：  
    放大， *快捷键* **+** ![image9][]{: height="24px"}  
    缩小， *快捷键* **-** ![image10][]{: height="24px"}  
    显示我的位置 ![image11][]{: height="24px"}  
    配置底图图层， *快捷键* **B** ![image12][]{: height="24px"}  
    地图数据， *快捷键* **F** ![Map Data][]{: height="24px"}  
    Issues, *shortcut key* **i** ![Issues][]{: height="24px"}  
    帮助， *快捷键* **H** ![image13][]{: height="24px"}  
4. **信息面板:** 该面板显示一些信息，例如比例尺、向此地图贡献过的用户。  

## Configuring the Background Layer

点击**背景设置**按钮或按下*快捷键* **B**.![image14][]{: height="24px"}  
![image15][]  
You can **change the background layer** based on your desired tile provider (the default is Bing Aerial Imagery).  

你可以通过点击**自定义**来添加你自己的地图瓦片。例如，如果你想**添加一张Field Paper** [^fieldpaper]，点击**自定义**，然后点击放大镜（搜索）图标来打开窗口:-  
![image17][]   
然后输入你的**FieldPaper快照网址**，形式大致如下： <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
你可以**显示本地计算机的GPS轨迹**(GPX格式)。也可以将GPX文件拖曳并放入iD编辑器。  
你可以打开**OpenStreetMap GPS轨迹**图层，这样可以显示此地区的公共GPS轨迹。在下面的图片中，公共GPS轨迹用不同颜色表示，颜色代表着运行的方向。  
![osm gps traces][]  
To change the **appearance of the imagery** click **Display Options**.  
![DisplayOptions][]  
If there is [imagery offset](/en/josm/aerial-imagery), you can **correct the imagery offset** by clicking **Adjust imagery offset**.  
![image18][]  

点击方向按钮可以移动影像，点击重置按钮可以恢复到默认位置。 ![image20][]  

iD基本编辑操作  
----------------------  

### 添加点  

要添加一个新点，点击**点**按钮。 ![image3][]{: height="24px"}  

- 你的鼠标指针将变成一个加(+)号。现在，点击一个你知道的地点标出其位置。例如，你知道你附近有个医院，那就在医院大楼的位置点击鼠标。  
![image21][]  
- Notice that a new point is added. At the same time, the left panel will change to show a form where you can select attributes for the object. Click **Hospital Grounds** to tag the point as a hospital.  
![image22][]  
- 你可以在表单中填写所画地点的详细信息，例如医院名称、地址和其他附加信息。注意每类要素都有不同的选项，这取决于你从要素面板给地物选择的标签。  
- If you make a mistake, such as a wrong location, you can move your point to a new location by holding the left mouse button on your point and dragging it. Or, if you want to delete your point, click the left mouse button on the point, activate the context menu by clicking with the right mouse button and then click the button which looks like a trashcan. ![PointToolDelete][]{: height="24px"}  
在iD编辑器中创建的“点”实际上是一个有一系列“标签”的独立“节点(node)”。  

### 画线  

要添加新的线，点击**线**按钮。 ![image4][]{: height="24px"}  

- 你的鼠标指针将变成加(+)号。在地图上找一条还没被画过的道路描绘出来。在路段开始的地方点击鼠标画一个点，移动鼠标并通过点击添加其他关键点，通过双击结束画线。注意左侧的面板。  
![image24][]  
- 和画点时一样，画完线后也要给线选择合适的标签。  
- 你可以通过在已有点上点击鼠标左键来选中并拖动它。  
- When you click your left mouse button on an individual point (node) on the line and either click on the right mouse button or hit the space bar to activate the context menu, you will see these tools:  
  - Continue line from this point ![PointToolContinue][]{: height="24px"}  
  - Disconnect lines at this point ![PointToolDisconnect][]{: height="24px"}  
  - Split a line into two lines at this point. ![PointToolSplit][]{: height="24px"}  
  - Delete point from line. ![PointToolDelete][]{: height="24px"}  
- 当你在线上(注意不是在某个点上)点击鼠标左键时，会有如下工具：  
  -   Create a circle from a line (only active if the line is closed) ![LineToolCircularize][]{: height="24px"}  
  -   Disconnect line from other objects ![LineToolDisconnect][]{: height="24px"}  
  -   Move line ![LineToolMove][]{: height="24px"}  
  -   Square all corners ![LineToolSquare][]{: height="24px"}  
  -   Reflect the line across its short axis ![LineToolReflectShort][]{: height="24px"}  
  -   Reflect the line across its long axis ![LineToolReflectLong][]{: height="24px"}  
  -   Reverse line direction (good for rivers & one-way streets) ![LineToolReverse][]{: height="24px"}  
  -   Rotate the line around its centre ![LineToolRotate][]{: height="24px"}  
  -   Straighten the line ![LineToolStraighten][]{: height="24px"}  
  -   Delete line. ![LineToolDelete][]{: height="24px"}  

在iD编辑器中创建的“线”实际上是一个有一系列“标签”的“路径(way)”。

> 关于**删除**的特别说明：一般情况下你不应该删除别人的线，如果你只是要改进这条线的话。你可以删除自己画错的内容，但是对于已由别人绘制但需要改动的对象，你应该尽量*调整*。这样做可以在OSM数据库中保留对象的历史记录，体现出对绘图伙伴的尊重。如果你确实认为该删，可以考虑先征求原作者意见，或者在OSM邮件列表中询问大家。

### 画面(多边形)

要添加新的多边形，点击**面**按钮。 ![image34][]{: height="24px"}  

- 你的鼠标指针会变成一个加(+)号。试着以影像为参照勾绘一栋建筑。  
- 你会发现你的面的颜色将随你给它指定的属性而变化。  
![image35][]  
- The tools that are available when you select a shape and activate the context menu with the right mouse button are similar to those when you click on a line.  

在iD编辑器中创建的“多边形”实际上是一个有标签的“封闭路径(closed way)”。

### Drawing Multipolygons

Sometimes you have to draw a polygon which does not only have an outer contour but also one or more inner contours. Just think of buildings with inner courtyards or lakes with islands. *Do not draw all these ways in one line* so that the inner contours suspend from the outer contour. Rather draw these contours separate, attach tags to the outer contour only, select all contours and hit **c** in order to combine them into what is called a multipolygon.

![create multipolygon][]

When you select any of the contours of the newly created multipolygon you can see on the left to which multipolygons it belongs

![part of multipolygon][]

## Issues

The editor performs a number of checks as soon as you edit something. If it thinks that what you did might cause problems it notifies you in the issues tab. Whenever the issues icon on the right carries either a yellow (for warnings) or red (for errors) dot you should open the tab and see what it reports. This information is also displayed in the object feature tab on the left if the relevant object is selected. You are also warned that there are unresolved issues when you upload your data. 

![Issue][] ![Error][]

The lower part of the issues tab show the available rules and allows you to disable them individually though this is not recommended.

保存你的更改
--------------------

当你想把你的编辑保存到OpenStreetMap时，请点击 **保存**	按钮。左侧的面板会显示上传面板。  
![image36][]  

- 输入对你编辑的注释并点击**保存**。  

> If you have edited the same feature (point, way or area) at the same time as another person was editing it, you will receive a warning that your edits cannot be uploaded until you have resolved the **conflicts** - choose whose edits to accept & upload your changes. *Resolving conflicts often involves accepting the other persons edits, in which case you will probably wish to return to the feature in question and edit again (**this time save soon after the edit to try to avoid a conflict again!**).*

附加信息与自定义标签
---------------------------------------

When you are editing an object, you will see an "Add field" menu at the bottom of the attribute panel. You can add various additional information by selecting one of the entries (layer, elevation, wikipedia etc.).  

![AdditionalTags][]

Or you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- 这里会显示所有添加到要素的标签。  
![image45][]  
- 点击加号(+)添加键值对，点击垃圾桶图标删除标签。

Further tutorials
------------------

[Our external resources page](/en/resources/#iD) provides links to a number of video tutorials from various sources.

iD vs. JOSM 对比
---------------  

**iD适用于……**

- 简单编辑  
- 网速快时加载影像和保存编辑  
- 想要遵从简单一致的标签模式  
- 正在使用的计算机安装程序受限

**JOSM更适于……**

- 添加大量建筑物(参见buildings_tool插件)
- 编辑大量已经存在的线或面
- 网络连接不稳定或无网络时
- 使用特定标签模式或自定义预设组合

[^fieldpaper]: There is a [section of LearnOSM](/en/mobile-mapping/field-papers/) giving more information about Field Papers.



[image1]: /images/beginner/id-editor_image1.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[DisplayOptions]: /images/beginner/id-editor_display-options.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image24]: /images/beginner/id-editor_image24.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[Issue]: /images/beginner/id-editor_issue.png
[Error]: /images/beginner/id-editor_error.png
[image36]: /images/beginner/id-editor_image36.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png