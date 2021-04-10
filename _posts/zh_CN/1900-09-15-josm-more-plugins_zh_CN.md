---
layout: doc
title: JOSM建筑物工具和Utilsplugin2插件
permalink: /zh_CNjosm/josm-more-plugins/
lang: zh_CN
category: josm
---

JOSM建筑物工具和Utilsplugin2插件
============

> 已审核 2016-09-12  

**buildings_tools**和**utilsplugin2**插件为JOSM添加了大量的附加功能。在这一节中，我们将进一步了解它们提供的功能。   

建筑物工具插件
--------------------------

如果您还没有安装，请按照 [JOSM插件](/zh_CN/josm/josm-plugins)中的说明安装此插件。   

![Buildings tools plugin][]

建筑物工具插件对建筑物的数字化非常有帮助。它允许你跟踪一个矩形建筑的一个侧面，并轻松地扩展形状。如果你正在数字化许多建筑物, 这个插件将节省你的点击, 从而节省你的时间。  

一旦安装了这个插件，你会在JOSM的左侧看到一个新的按钮，它看起来像这样： ![Buildings tools button][]{: height="29px"}

启动JOSM并下载一个你想追踪建筑物的区域。  

* 选择建筑物工具，点击两次，在地图上画一条线。  

![Draw edge][]

* 然后移动鼠标并再次点击绘制一个矩形。  

![Extend building][]

* 这不仅只需点击三次就能创建一个矩形，而且还会自动将**building=yes**标签应用到形状中。  

### Complex Buildings

You can also create more complicated buildings by first drawing several overlapping buildings and then merging them together.  

* Draw two buildings which over lap, so that they form an L shape.  
* Select both buildings (hold SHIFT to select more than one object).  
* Go to Tools->Join overlapping Areas or press SHIFT+J on your keyboard.  

![Merge buildings][]

### Edit Settings

Furthermore, you can alter the default settings of the plugin.  

* Go to Data->Set buildings size. ![Set buildings size][]{: height="39px"}  

* If you are creating many similarly sized buildings, you can set specific width and height dimensions of the buildings, such as 6 x 10 meters (the unit is in meters).  

![Set buildings size dialog][]

* By setting the dimensions you will only need two clicks to create precisely sized buildings.  

Lastly, you can click on the Advanced button if you would like to add additional tags that will automatically be applied to every building. For example, if every building you draw is on the same street, you might add a tag which identifies the street that will be automatically applied.  

![Buildings advanced][]


Utilsplugin2
-------------

* If you haven't already, install this plugin following the instructions in [JOSM Plugins](/en/josm/josm-plugins).  

![Utilsplugin2 plugin][]

After you have installed the plugin and restarted JOSM, you will have a new menu at the top named "More Tools."  

![More tools menu][]

Create a new layer and experiment with some of the new tools. Here we describe some of the most useful new tools:  

1. **Add Nodes at Intersections:**  This tool is very helpful for adding missing nodes in intersections of selected ways.  It is good practice that roads should always have common nodes where they intersect.  

    ![Nodes interesection][]

2. **Copy Tags from Previous Selection:**  This function makes copying tags easier.  If you want to create many objects with the same tags, first draw the objects.  Then add the tags to one object.  Click on another object and press Shift + R to copy the tags from the previously selected object.  You can do this for all objects that you want to tag.  Remember that the tags will be copied from the previously selected object, so if you click on an untagged object and then another untagged object, you will not be able to copy any tags.  

    ![Copy tags][]

3. **Add Source Tag:** This tool simplifies adding a source tag. It remembers the source that was specified last and adds it as remembered source tag to your objects.   You can insert the source with just one click.  

4. **Replace Geometry:** This tool is great if you want to redraw a poorly shaped object, but want to keep the history, attributes and ID number of that object.  For example, if you come across a building that is complicated and drawn in a poor fashion, then instead of painfully changing each node, you can draw the object again, select the old and new objects, and select ¨Replace Geometry¨ to transfer all the information over.  

    ![Replace geometry][]


### More Selection Tools

**Utilsplugin2** also provides more tools on the "Selection" menu. Try experimenting with them.  

![Selection menu][]

One of our favorite selection tools is **Unselect Nodes:** This tool deselects all nodes. This can be useful if you draw a box to select many objects, but you do not want to select the nodes contained within all the lines and shapes.  

![Unselect nodes][]

Good luck!  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png

