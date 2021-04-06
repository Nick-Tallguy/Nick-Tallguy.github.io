---
layout: doc
title: 远程、扶手椅或Mapathon编辑
permalink: /zh_CN/coordination/remote/
lang: zh_CN
category: coordination
---

远程编辑及其在HOT团队中的地位
==================

> 已审核 2015-09-18

远程测绘也被称为 '扶手椅测绘'，这可能是参加Mapathon时要执行的测绘类型。如果你对整个过程有更多的了解，它将帮助你理解需要什么。世界各地有很多人都参与到HOT的工作中，当你开始远程测绘时，你将成为该团队的成员，该团队具有许多可用的角色，包括（这不是完整的列表！）：
  
-  获取和准备卫星影像，  
-  确保没有版权等法律问题，  
-  与援助机构协调，  
-  确保数据以援助机构可以使用的格式提供，例如Garmin地图、Osmand地图和特定项目的导出，  
-  准备教具，  
-  以其他人可以用来创建地图的格式呈现任务，  
-  与当地人联系，并向他们传授有关HOT的知识，  
-  教当地人如何进行地面调查和更新数据以供自己和他人使用，  
-  确保当地人承担起维护已准备好的地图数据的职责——他们拥有地图数据的“所有权”，  
-  和远程测绘。  

**远程测绘**是劳动强度最大的任务。人们曾多次尝试开发软件工具来取代远程测绘人员，但迄今都失败了。简而言之，远程测绘是使用软件程序，从卫星图像中追踪信息，并将结果上传，使其成为地图数据的一部分。这是一项可以通过耐心学习的技能。世上没有完美的“测绘人员”，尽管您（以及其他人）会尽力避免错误，但错误是不可避免的。HOT团队会共同努力将错误降到最低，并在发现错误时及时纠正 - 您会犯错误，就像我们每个人一样 - 请不要放弃，并从错误中学习并改进。

远程，扶手椅或Mapathon测绘的概述
================================================

1.管理员选择一个需要更新OpenStreetMap的区域。管理员确保有适当的卫星影像可供远程测绘人员追踪，并创建一个涵盖该地区的项目。在项目中指定所需的详细程度和紧迫性，以及远程测绘人员需要的任何其他信息。管理员满意后，在Tasking Manager [tasks.hotosm.org](http://tasks.hotosm.org)中发布该项目，但他们也可以在以后根据需要进行修改。

2.远程测绘人员选择一个任务方块，完成制图，并将该方块标记为完成。

3. A second remote mapper checks that the square is completed to a satisfactory level and marks the square as 'validated'

4. Progress of the mapping of the project can be monitored from within the "stats" tab of the project, and the project can be downgraded or archived as required by an administrator.


在你开始之前
================

Take a few minutes to look at each of these - just a quick read so you know roughly what we are talking about, and where to refer back to when you need to:
 
-  [OpenStreetMap.org section of LearnOSM](/en/beginner/start-osm/). This covers just the basics about OpenStreetMap, and reading this will help you a lot - it's not a big chapter so it won't take you long to read it all. While you are reading it, use the information to help you create an OpenStreetMap account, and to confirm it with the email link. Make sure you have a record of your username and password.
-  [LearnOSM的Tasking Manager部分](/zh_CN/coordination/tm-user/)。你将需要知道如何登陆Tasking Manager，查找特定项目，选择方形以及如何处理。你需要阅读完整个章节！  

You may also like to view the short video's provided by [MapGive](http://mapgive.state.gov/learn-to-map/) - please be aware the OSM Tasking Manager has been upgraded since the video was made - the principles are the same but the colours have altered.


编辑软件
----------------

Although there are more software programmes available, at this time there are two main choices. Have a quick read of the LearnOSM chapters listed below and decide which editor you would like to start with - you can easily change from one to another at a later stage if you wish:

-  iD编辑器 [LearnOSM中的iD编辑器章节](/zh_CN/beginner/id-editor/)。 对于那些刚接触OpenStreetMap编辑的人来说，此编辑器是理想的选择，并且具有舒缓的学习曲线。最后一部分说明了 [iD和JOSM的区别](/zh_CN/beginner/id-editor/#iD与JOSM的比较)，然后  
-  JOSM, the Java OpenStreetMap editor [LearnOSM - installing & starting out with JOSM](/en/josm/start-josm/)

# 远程绘图 - 开始绘制

Don't give up on us now - we've thrown a lot of information at you, but it should start to fall into place as you actually start to map. You've achieved a lot:

-  You have an OpenStreetMap account with a username & password,  
-  You know what the OSM Tasking Manager does, and have an idea about how you will use it, and  
-  You've decided which editing software you are going to start with, and you have an idea how it is used.

We're now going to select a square from a project and start to map it. If you are at a mapathon, or assisting remotely, the organisers will have provided instructions as to which project you should be working on. If you are working alone, look through the list of projects in the Tasking Manager [tasks.hotosm.org](http://tasks.hotosm.org) and try to find a project which is suitable for beginners, and choose a project. You've probably already had a quick read of the information on the Instructions Tab of the project, but you need to thoroughly understand what is needed - do you need to read it again?

Having selected the project you are going to work on, now select a square and then using the drop down list, load it into your chosen editor. 

## 初始视图 
### iD

![iD 1][]

1.  The boundary of your square is indicated by the purple line. There is a very slight overlap of the squares, so that a feature in your square that stops at the boundary will just appear within the boundary of the adjacent square. You should only map features within your square to avoid 'conflicts', which are explained elsewhere.  
2.  The scale of your view is indicated here. This is a very small square, with the 100 metre line extending quite a long way in proportion to the length of the square - this figure is often several kilometres.  
3.  OpenStreetMap数据库中已经存在一些功能，并且功能已经加载。我们一会儿就去探索。
4.  Bing图像已作为背景加载。  


### JOSM

![JOSM 1][]

1.  The boundary of your square is indicated by the crosshatching. There is a very slight overlap of the squares, so that a feature in your square that stops at the boundary will just appear within the boundary of the adjacent square. You should only map features within your square to avoid 'conflicts', which are explained elsewhere.  
> If the boundary crosshatching is not visible, you may have installed the plugin '*Download OSM data continuously*'. To correct this you will need to remove the tick for this plugin under the File menu of JOSM, delete the downloaded data, and download again using the Tasking Manager.  
2.  The scale of your view is indicated here. This is a very small square, with a figure of 40.8 metres - this figure is often several kilometres.  
3.  OpenStreetMap数据库中已经存在一些功能，并且功能已经加载。我们一会儿就去探索。
4.  There is no background imagery loaded on this occasion and we will have to load it manually - the instructions for this particular project show that bing imagery is to be loaded, and this can be quickly loaded by clicking on the word 'imagery' and then selecting 'bing' from the dropdown list. You may find that zooming out (roll the mouse centre wheel towards you) and then zooming in again helps the imagery to load quickly. 

## 备用初始视图 
### iD

![iD 4][]

1.  方形的边界  
2.  For this square the scale indicated is 5km, at which scale the editing buttons at the top of the screen are greyed out and not selectable.

### JOSM

![JOSM 3][]

1.  Boundary of square is indicated by the crosshatching. bing imagery has been loaded, but at this scale the imagery is not detailed.  
2.  The scale line indicates 2.61km - this is a very large area of coverage. 

## 检查现有数据 
### iD

![iD 2][]

1.  I've clicked on one of the existing features in the OSM data, and it is now highlighted with a red border in the screenshot, and iD is showing the available tools.  
2.  iD presented me with a number of potential tags I could use on this feature on the left side of the screen, but for our purpose I have used the scroll bar to go down to the heading **All tags** where we can see that the feature has a key of **highway** and a value of **residential**. For ease of reference this would be referred to as  
    highway=residential  
3.  The person who has mapped the adjoining square has traced a highway from their square just over the border into my square & then stopped. This is the correct way to 'handover' a highway or feature at the border of your square.

The next section of this guide indicates how features should be mapped & tagged [Tracing roads, buildings, water and landuse](/en/coordination/remote-tracing/).  


### JOSM

![JOSM 2][]

1.  I've clicked on one of the existing features in the OSM data, and it is now coloured red in the screenshot.  
2.  In the **Tags / Memberships** pane to the right you can see that this feature is tagged with the key of highway & a value of residential. For ease of reference this would be referred to as  
    highway=residential  

The next section of this guide indicates how features should be mapped & tagged.


# 进一步阅读

-  [West African HOT Mapping Tips by user Bgirardot](http://wiki.openstreetmap.org/wiki/User:Bgirardot/Typical_Road_and_Residential_Task)  
-  [OSM wiki entry concerning validating](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data)  
-  [Highway Tag Africa - the preferred reference for highway tagging in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa)  
-  [Short Tutorial in French for remote mapping](http://blog.cartong.org/2014/07/24/tuto-digitaliser-sous-openstreetmap-avec-le-tasking-manager-et-josm-premiers-pas/)


[JOSM 1]: /images/coordination/JOSM_1.png
[iD 1]: /images/coordination/iD_1.png
[JOSM 2]: /images/coordination/JOSM_2.png
[iD 2]: /images/coordination/iD_2.png
[iD 4]: /images/coordination/iD_4.png
[JOSM 3]: /images/coordination/JOSM_3.png