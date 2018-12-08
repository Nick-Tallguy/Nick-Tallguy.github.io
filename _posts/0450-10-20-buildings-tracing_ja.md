---
layout: doc
title: 四角形の建物を描くには - iDエディタ
permalink: /ja/hot-tips/tracing-rectangular-buildings/
lang: ja
category: hot-tips
---

四角形の建物を描くには - iDエディタ
============

- TOC
{:toc}

<!-- > このガイドは次の形式でダウンロードできます。 [tm_starting_ja.odt](/files/tm_starting_ja.odt) および [tm_starting_ja.pdf](/files/tm_starting_ja.pdf)  
> Created 2016-10-30  -->  

基礎
----------

![Rectangular building][]  

> この画像 ![keymon]{: height="24px"} は、マウスのボタンやホイール、あるいはキーボードのどのキーを使えばよいかを表しています。  

注意するポイント;  

- もし建物の角が直角である場合、トレースしたポリゴンもツールを使って角を直角にするべきです。  
- タグを付けるのを忘れずに！  
- サイズの問題 - *人口推定作業は、対象のエリア内に占める建物のエリアの割合で計算します*。  
- the right size building the right way round will help people locate their village,  
- Zoom in enough to see the details - a zoom scale of 20 metres or less is usually about right.  
- **Looking for buildings** - scan with your scale somewhere between 50 metres and 80 metres. Watch out for shadows and straight lines (round buildings are harder to find!)  
- Buildings and roads, rivers, **landuse=residential** boundaries or other features should not overlap.  
- If you make a mistake, use the **Undo** button ![back arrow]{: height="26px"} to undo your last change(s)  
- We're all improving the map. If the previous mapper has left the buildings a funny shape or wrong in some way, correct it and consider sending them a polite message.  

Buildings obscured or seen at an angle  
--------------------------------------

![building-obscured][]  

It is common for the satellite image to be taken at an angle making the building seem distorted. In the above image the image to the right shows how the building should be traced. It is often easiest to trace the outline of the roof, then drag this to the point where the walls meet the ground - this was the technique used to trace the building above. Notice also that a building partially obscured by trees has been correctly traced as rectangular. 

Buildings with a ridged roof
----------------------------
 
Most buildings either have corners at 90 degrees, or they are round buildings.  

![building-ridge][]  
This building has 90 degree corners, but has a ridge on its roof. The camera angle initially makes the building look a strange shape.  

![building-tree-ridge][]  
This building has a tree partially obscuring it. It is a rectangular building.  

In isolated parts of the world it is common to use sheets of corrugated iron as roofing - when new these will reflect the sunlight which creates a **very bright flare effect** on the satellite imagery. It is common for buildings to have a verandah or be **L shaped** and you should ensure that your tracing follows the shape of the building.  
When tracing the building outline, you must try to trace the building at the right size, and at the point where its walls meet the ground - do your best! In many parts of the world, buildings are partially constructed and then left without roofs until they are sold, or otherwise wanted for use. Map a building without a roof as a normal building as it does not take long to add a roof, and the roof may have been added already, in the time since the satellite imagery was taken.  

Do your best - even the experts will disagree sometimes, and sometimes you just have to go there to see exactly what is really there. **If in doubt add it as a building.**  

Building Tags
-------------

As we are tagging buildings we have never visited and are not familiar with, the safest and recommended tagging scheme is **building**=**yes** which you can see on a correctly tagged building if you scroll to the bottom of the tagging pane and click on **All tags**.

See also  
---------

- [![building-video]{: height="150px"}](https://www.youtube.com/watch?v=VPJz-AucqF4&index=7&list=PLb9506_-6FMHZ3nwn9heri3xjQKrSq1hN "Humanitarian OpenStreetMap Team Tutorial Videos - Adding a Building to OpenStreetMap")  
*Subtitles available in some languages*  

- [Ivan Gayton's diary entry for Hadjer Lamis, Chad - comments from others indicate the description fits other parts of the world as well](https://www.openstreetmap.org/user/IvanGayton/diary/38612)



[Rectangular building]: /images/hot-tips/rectangular_building.gif "Tracing a rectangular building, squaring the corners, and adding tags."
[keymon]:/images/hot-tips/keymon.png
[building-ridge]: /images/hot-tips/building-ridge.png
[back arrow]: /images/beginner/back-arrow.png
[building-tree-ridge]: /images/hot-tips/building-tree-ridge.png
[building-obscured]: /images/hot-tips/buildings-obscured-traced-1.png "Before & after - tracing a building seen at an angle"
[building-video]: /images/hot-tips/building-video.png "Humanitarian OpenStreetMap Team Tutorial Videos - Adding a Building to OpenStreetMap"