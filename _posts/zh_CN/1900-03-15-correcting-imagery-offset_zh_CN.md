---
layout: doc
title: 校正影像偏移
permalink: /zh_CNjosm/correcting-imagery-offset/
lang: zh_CN
category: josm
---

影像偏移
===============

本指南可以下载为 [correcting-imagery-offset_en.odt](/files/correcting-imagery-offset_en.odt)或 [correcting-imagery-offset_en.odt](/files/correcting-imagery-offset_en.odt)  

影像供应商通常在地理参照影像方面做得很好，但有时图像可能会偏离位置。尤其是在丘陵或山区，因为在这些地区，很难将平坦的图像延伸到一个有许多等高线的地球区域。当您在JOSM中加载影像时，有时可能会与它的真实位置相差十米或更多。这就是所谓的**影像偏移**。  

请注意下图中，两张独立的航空照片已经被地理参考合并在一起。 由于地理参考并不是一个完美的过程，因此图像之间并不完全一致。 因此，其中一张，或两张，一定是不准确的。   

![Misaligned imagery][]

我们已经了解了制作地图的两种主要方式 - 一种是利用航空影像来识别地面上的特征，另一种是利用GPS记录轨迹和航点，然后添加到OpenStreetMap中。 航空影像的优势是显而易见的。 它使你，即测绘人员，能够看到整个画面，从图像中观察各种细节，考虑你对该地区的了解，并轻松地描绘道路、建筑物和区域。 然而，GPS的一个关键优势是，它不像图像那样受到偏移的影响。 GPS将始终为你提供一个正确的经纬度。 唯一的例外是当卫星信号被高大的建筑物或山脉所干扰时，但在这种情况下，很容易识别错误。 观察这张图片中的GPS轨迹，与它下面的Bing航空影像图层进行对比：  

![Aerial vs GPS][]

因为我们现在所知道的，很明显GPS轨迹很可能是准确的， 而它下面的图像是不正确的。所以现在我们必须问："如果影像可能偏移了，我们如何才能使用它，并做出准确的地图？"  

校正影像偏移
-------------------------

前面的问题的答案是，我们可以移动影像，使其与我们知道的正确位置的东西对齐，如GPS轨迹。在JOSM中校正影像偏移很容易。  

调整影像最好的参照物是跟随道路的GPS轨迹。 而参考的GPS轨迹越多，你就越能准确地调整你的影像。 由于OpenStreetMap用户经常将他们的GPS轨迹上传到OSM数据库中，我们可以下载它们，并使用它们来调整我们的影像。  

- 点击下载按钮。 ![JOSM download button][]{: height="24px"}  

- 勾选靠近下载窗口顶部“原始GPS数据”旁边的方框 ![Download raw GPS data][]{: height="24px"}选择你的区域，然后点击“下载”。   

- 这将向JOSM下载一个包含GPS轨迹的附加图层。根据OSM用户上传的轨迹数量，你可能会看到很少的轨迹（甚至没有轨迹）：  

![Few GPS tracks from OSM][]

- 或者，你可能会看到很多轨迹：  

![Many GPS tracks from OSM][]

- 要调整影像图层，点击JOSM顶部的 "调整影像偏移 "按钮 ![Adjust imagery offset button][]{: height="24px"}。  

- 忽略弹出的方框，用鼠标拖动影像图层，使其与GPS轨迹正确对齐。 GPS轨迹应该与图像上的道路尽可能地对齐。 你会看到方框中的偏移数字发生变化。  

![Adjust imagery offset][]

- 如果您愿意，您可以通过输入一个书签名称，然后点击确定来保存这些偏移设置。然后，您可以通过进入影像 ‣ 影像偏移 并单击您的书签，随后自动应用相同的设置。   
- 如果您不想保存偏移，只需单击 确定 而不输入书签名称。   

What if there are no GPS tracks on OpenStreetMap, and you don’t have a GPS? Without GPS tracks, it is difficult to align imagery.  If it is a relatively empty area (not much mapping done), you might choose to simply use the imagery as it is and correct the data later.  It’s better to have map an area 20 or 30 meters offset than to not map at all.  

If you can positively identify the latitude and longitude of one object on the ground, you can ensure the imagery is correctly placed by following these steps:  

1. Identify the object whose position you know on the imagery.  
2. Click on the latitude and longitude in the bottom left corner of JOSM.![JOSM lat lon][]{: height="24px"}  
3. In the dialog that opens, enter the latitude and longitude of the place that you know, and enter a small number for Zoom, about five or ten.  
![JOSM lat lon dialogue][]
4. This will zoom and center the map to your longitude and latitude.  Now you can move the imagery as you did previously so that the feature you know is centered at the correct position.  

If, on the other hand, the area has already been extensively mapped, then hopefully the previous mappers have drawn objects in their correct locations.  In this case, you can align the imagery to the OSM map, but beware!  Other mappers may not be aware of imagery offset, and they may have made mistakes when they mapped.  


The Imagery Offset Database
---------------------------

Now you know how to watch out for and correct imagery offset, but there is one major problem with this approach that we have overlooked thus far.  If every OpenStreetMap user adjusts the imagery differently, everybody will be mapping with slightly different backgrounds.  

Imagine that you are mapping a small town, and you realize that Bing imagery is offset by 15 meters to the north. So you adjust the imagery and then use it to map the whole town accurately. But then somebody else wants to add something to the map, so they download the data and load Bing imagery, but they don’t know about the imagery offset you discovered!  They will think that something is wrong and all of the objects in town are misplaced by 15 meters, and they will start to move them, which is not correct!  This can be disastrous for the town’s map data.  

For this reason it is important that all users are aware of imagery offset, and should always check for it before mapping an area.  To help with this problem, some smart people created a plugin that allows users to save offset information in a database and share it with others.  Let’s see how this works:  

- Open the Preferences menu in JOSM, and click on the Plugins tab.![JOSM plugins tab][]{: height="24px"}  

- Find the plugin named “imagery_offset_db” and check the box next to it.  

![Imagery_offset_db plugin][]

- Click OK.  You will need to restart JOSM to finish the plugin installation.  

In the same way that you are able to save offsets as bookmarks, this plugin allows you to save offsets to a central database, and to access the offsets that other users have created.  Hence, if one mapper creates an imagery offset in an area, other users can use the exact same offset to map with.  

When using aerial imagery layers, you should ALWAYS check for existing offsets, and when you create your own offset, you should ALWAYS save it to this database.  


Add Imagery Offset from the Database
------------------------------------

When you add an imagery layer, the new plugin will alert you that you should check the imagery database for an existing offset.  You will see an icon with a red exclamation point on it at the top of JOSM, like this:  

![Imagery offset notification][]

- Click on the button and the plugin will communicate with the database to see if there are existing offsets in this area.  
- Here we have downloaded OSM data and GPS tracks in Kuta, Bali, Indonesia. In this case, we have found one existing offset. Click on it to apply to the map.  

![Offset in Kuta bali][]

- This causes the imagery layer to shift.  However, when we add someone else’s offset like this, we should check that it is valid by comparing to GPS tracks.  

![Comparing imagery offset from GPS tracks][]

- We can see that the imagery layer is in fact misaligned.  We don’t want other users to use this offset, so we should mark it as incorrect in the database. Click on the “Offsets” button again (it won’t have a red exclamation mark anymore).  

![Offsets button][]

- This time when the dialog opens, right-click on the offset and click “Deprecate Offset.”  

![Deprecate offset][]

- Click “Yes” to confirm.  
- You will need to enter a reason for deprecating this offset.  

![Deprecate reason][]


Add Imagery Offset to the Database
------------------------------------

Now that we have marked this user’s offset as “deprecated,” we should add an improved offset to the database.  

1. Click on the “Adjust imagery offset” button. ![Adjust imagery offset button][]{: height="24px"}  
2.  Adjust the imagery to match the GPS tracks.  Click OK in the box.  
3.  Now go to Offset ‣ Store Imagery Offset...  
![Store imagery offset][]
4.  Enter a description of the offset in the box that opens.  
![Offset description][]
5.  Click OK.  Your offset will be saved to the database.  
6.  Now let’s hide the GPS layer and look at the OSM data against the correctly placed imagery.  

![Corrected imagery][]

Oh No!  Somebody mapped this area with misaligned imagery, so the area is not correctly mapped.  This will take some time to fix.


Imagery Offset Database Website
--------------------------------

Lastly, for more information on the offset database, you can visit the website at [http://offsets.textual.ru/](http://offsets.textual.ru/).  This lists all the offsets that have been uploaded to the database, and it also has a cool map feature that visualizes where the offsets are located, as you can see here:  

![http://offsets.textual.ru/][]

> One last thing to remember is that the imagery may not be offset the same distance everywhere!  This is especially true in regions where there are lots of hills and mountains.  So if the imagery seems to be offset differently in different areas, you’ll need to move it again.  

Summary
--------

When you are just beginning OpenStreetMap, you don’t need to worry too much about imagery offset.  But if you see another mapper’s edits that seem misaligned from the imagery, you should always consider that there may be an offset before you start changing their objects.  And if you aren't quite ready to deal with offsets yet, just remember that it’s better to map an area 20 or 30 meters offset than to not map it at all.  But when possible, do remember that imagery offset may occur, and use the steps in this chapter to correct it when needed.


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










