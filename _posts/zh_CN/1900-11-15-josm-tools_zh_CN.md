---
layout: doc
title: JOSM编辑工具
permalink: /zh_CN/josm/josm-tools/
lang: zh_CN
category: josm
---

JOSM 编辑工具
==================

> 已审核 2017-06-09  

- TOC
{:toc}

在 [JOSM入门指南](/zh_CN/josm/start-josm/) 中，涵盖了在JOSM中绘图的基础知识，但还有很多工具和技术没有演示。

在这里，我们将看到在JOSM中绘制地图特征的一些基本工具和技术，在接下来的章节中，我们将更深入地研究高级绘图工具。

获取示例文件
-------------------

- 如果你想跟着练习使用JOSM工具，请下载 [tools_menu_sample.osm](/files/tools_menu_sample.osm)。启动JOSM并打开该文件。它看起来应该是这样的：

![tools_menu_sample.osm][]

绘图工具
-------------

如果你点击JOSM顶部的“工具”菜单，你会发现有许多功能可以帮助你绘制线条和形状，以及编辑地图上的对象。

JOSM有一些额外的工具，使其更容易绘制线条和形状。这些工具可以在JOSM顶部的“工具”菜单中找到。

![Tools menu][]

为了应用该菜单中的功能，您必须首先在地图窗口中选择一个点、线或形状。示例文件包含各种元素，这些元素上标有菜单上不同工具的名称。

### 将节点排列成圆  

- 尝试选择文件中的一个元素。然后进入“工具”菜单，点击你所选择的特征旁边标识的功能。例如，点击画得不好的圆来选择它。

![Align nodes in circle][]

- 接下来，进入 工具 -> 将节点排列成圆。画不好的圆会变得更圆。

使用这个示例文件对每个工具进行实验。下面提供一些工具的说明。

### 切割路径  

这允许你将一条线分成两条独立的线。如果你想为道路的不同部分（如桥梁）添加不同的属性，这很有用。要使用此功能，请在你要切割的线条中间选择一个点，从工具菜单中选择切割路径，你的线条就会被切割成两条。


### 合并路径

这与切割路径的做法正好相反。要将两条线组合成一条线，它们必须共用一个点。要使用此功能，请选择你要合并的两条线。你可以按住键盘上的 SHIFT 键并点击每条线，选择多个对象。当你选择了两条线后，从工具菜单中选择组合方式。

![Combine way][]


### 反转与合并  

If you are combining roads that have different directions, you might get this warning:

![Reverse and combine][]

If the roads are connected and go in the same direction, then choose "Reverse and Continue."


### Reverse Way

This will change the direction of the line. All lines in OSM have a direction, which is shown in JOSM by the arrows on the line. Direction doesn't usually matter, except in the case of one way roads and rivers that flow in a certain direction. In these cases you may need to reverse the way so that it goes in the correct direction.

![Way direction][]

### Simplify Way

If your line has too many points in it and you’d like to make it simpler, this will remove some of the points from a line.

![Simplify way][]


### 创建圆形

Use this tool, which will create a more perfect circle. Draw a line which represents the diameter of your circle, and then apply this tool.

![Create circle][]


### 排列节点为直线

This function will align a series of points into a straight line.  With long lines it is best to select sections of the line to straighten.  Be careful as this does have the tendency to shift the line a little bit.

![Align nodes in line][]

### Orthogonalize Shape

This function is very useful for drawing regular shapes such as buildings (**But see also [JOSM building tools](/en/josm/josm-more-plugins/)**). After you draw an area, this function will reshape it to have square corners.

![Orthagonalize][]


### 拆开路径

This tool allows you to detach nodes that are connected. It is useful when two object share a node when they should not. For example, a common mistake is for a road to share a node with the corner of a building. Of course roads don't run into buildings usually, so this is a mistake, and you can unglue the objects from one another.

![Unglue way][]

*The line and node will not actually appear separate until you move them.*

键盘快捷键
------------------

Once you start editing a lot you will realize that you waste a lot of time clicking on menus and submenus. To overcome this, JOSM has keyboard shortcuts for just about everything.

This means that instead of clicking an object and then going through a lengthy menu process, you can simply select the object and press a key on your keyboard.

All of the tools mentioned in the previous section have shortcut keys, which are listed on the Tools menu to the right of each tool name. For example, "O" is the
shortcut key to align nodes in a circle. "L" is the shortcut to align them in a line. It can take some time to learn the shortcut keys, but you will find that it saves
长期来说有很多时间。

其它一些重要的快捷键（已加粗）

1.  激活选择工具 - **S**
2.  激活绘图工具 - **A**
3.  激活放大缩小工具 - **Z**
4.  删除已选择的对象 - **Delete**
5. 放大 - **+**
6.  缩小 - **-**


缩放和旋转
----------------

A common question is how to rotate a line or shape after it has been drawn.

To rotate an object, first select it. Hold **SHIFT+CTRL** on your keyboard. Click and drag the mouse to rotate.

![Rotate demo][]

To scale an object (make it bigger or smaller), follow the same process, but hold ALT+CTRL instead.

在JOSM底部的信息栏中显示这些指示：

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png