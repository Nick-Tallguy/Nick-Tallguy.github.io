---
layout: doc
title: iD 편집기
permalink: /ko/beginner/id-editor/
lang: ko
category: beginner
---

iD 편집기
=============

> 이 안내서는 [beginner_id-editor_ko.odt](/files/beginner_id-editor_ko.odt) 또는 [beginner_id-editor_ko.pdf](/files/beginner_id-editor_ko.pdf)로 다운로드할 수 있습니다  
> 2016-03-30에 리뷰됨  

HOT나 MissingMaps 등의 작업 관리자로 지도 작업을 시작하고 있나요? [HOT 팁 단락](/ko/hot-tips/)을 참고하세요.  

- TOC
{:toc}

iD 편집기는 사실상 표준인 브라우저 기반 OpenStreetMap 편집기입니다. iD는 빠르고 사용하기 쉬우며, 위성·항공 사진이나 GPS, Field Papers, Mapillary 같은 다양한 데이터를 이용해서 지도 작업을 할 수 있는 도구입니다.  

iD 편집기는 JOSM(고급 지도 작업 도구)의 복잡한 기능이 필요하지 않은 소규모·저난도 편집에 적합합니다. 이 단락은 iD를 이용한 편집의 기초를 설명합니다.  

iD 편집기 시작하기
----------------------

-	iD 편집기에는 인터넷 연결이 필요합니다.  
-	인터넷 브라우저를 열고 OpenStreetMap 웹 사이트 [http://www.openstreetmap.org](http://www.openstreetmap.org)로 이동하세요.  
-	당신의 OpenStreetMap 계정으로 **로그인하세요**  
-	편집하고 싶은 위치를 지도에서 맞추고 확대하세요. 마우스 왼쪽 버튼을 누르고 지도를 원하는 방향으로 드래그하면 됩니다.  
-	**편집** 옆에 있는 작은 화살표를 누르세요. 그런 다음 **iD (브라우저 내 편집기)(으)로 편집**을 누르세요.  

![image1][]


iD 편집기 사용자 인터페이스
-------------------------
![image2][]

1. **지물 편집 창:** 이 창에서 지도에서 선택한 개체의 태그를 볼 수 있습니다.  
	이 창에서 태그를 추가하거나 편집할 수 있습니다.  
2. **도구:** 이 창에서 기본적인 편집 도구를 사용할 수 있습니다.  
    점(노드) 그리기, 단축키 **1** ![image3][]{: height="24px"}  
    선(웨이) 그리기, 단축키 **2** ![image4][]{: height="24px"}  
    공간(다각형) 그리기, 단축키 **3** ![image5][]{: height="24px"}  
    실행 취소, 단축키 **Ctrl+z** ![image6][]{: height="24px"}  
    다시 실행, 단축키 **Ctrl+y** ![image7][]{: height="24px"}  
    저장, 단축키 **Ctrl+s** ![image8][]{: height="24px"}  
3. **지도 창:** 이 창에서 다양한 설정을 조절할 수 있습니다.  
    확대, 단축키 **+** ![image9][]{: height="24px"}  
    축소, 단축키 **-** ![image10][]{: height="24px"}  
    내 위치 보기 ![image11][]{: height="24px"}  
    배경 설정, 단축키 **b** ![image12][]{: height="24px"}  
    지도 자료, 단축키 **f** ![Map Data][]{: height="24px"}  
    도움말, 단축키 **h** ![image13][]{: height="24px"}  
4. **정보 창:** 이 창에서 축척과 이 지역 내에 기여한 사람들 같은 다양한 정보를 볼 수 있습니다.  

배경 설정
--------------------------------

**배경 설정** 버튼을 누르거나 단축키 **b**![image14][]{: height="24px"}를 사용하세요.  
![image15][]  
**명도**를 조절하려면 박스 4개 중 하나를 누르세요. 왼쪽부터 25%, 50%, 75%, 100%입니다. ![image16][]{: height="24px"}  
원하는 이미지 제공자에 따라 **배경을 변경**할 수도 있습니다(기본값은 Bing 항공 이미지).  

**사용자 지정**을 눌러서 직접 지도 타일을 추가할 수도 있습니다. 예를 들어, **현장 조사 지도를 추가**[^fieldpaper]하고 싶다면, **사용자 지정**을 누르고 돋보기(검색) 아이콘을 눌러서 다음과 같이 창을 여세요.  
![image17][]   
and enter your **FieldPaper snapshot URL**, which will be something like this: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
To **display GPS tracks from your computer** (GPX format), drag and drop the GPX file into iD editor.  
To enable **OpenStreetMap GPS traces** click on the box. In the image below, public GPS traces are shown in various colors, indicating the direction of travel.  
![osm gps traces][]  
If there is [imagery offset](/en/josm/aerial-imagery), you can **correct the imagery offset** by clicking **Fix Alignment**. ![image18][]  

- Click the navigation buttons to move the imagery. Click the reset button to return to the default position. ![image20][]  

Basic Editing with iD  
----------------------  

### Adding Points  

To add a new point, click on the **Point** button. ![image3][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Now, click on a position that you know to mark a location. For example, if you know that there is a hospital in your area, click on the position of the hospital building.  
![image21][]  
- Notice that a new point is added. At the same time, the left panel will change to show a form where you can select attributes for the object. Click **Hospital Grounds** to tag the point as a hospital.  
![image22][]  
- You can use the forms to fill detail information about your point. You can fill hospital name, address, and/or other additional information. Note that each feature will have different options, depending on what tag you choose from the feature panel.  
- If you make a mistake, such as a wrong location, you can move your point to a new location by holding the left mouse button on your point and dragging it. Or, if you want to delete your point, click the left mouse button on the point, activate the context menu by clicking with the right mouse button and then click the button which looks like a trashcan. ![image23][]{: height="24px"}  
A "point" created in the iD editor is actually a standalone "node" with a set of "tags" on it.  

### Drawing Lines  

To add a new line, click on the **Line** button. ![image4][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Find a road that hasn’t been drawn on the map and trace it. Click once on a point where the road segment begins, move your mouse, and click to add additional points. Double-click to end the drawing process. Notice the panel on the left.  
![image24][]  
- Just as with a point, select the appropriate tags for your line.  
- You can drag points from the line by clicking your left mouse button on a point and dragging it.  
- You also can move the whole line by selecting it, and choosing the **Move tool**. Then drag the line to a new position. ![image30][]{: height="24px"}  
- When you click your left mouse button on an individual point (node) on the line and click on the right mouse button to activate the context menu, you will see these tools:  
- Delete point from line. ![image23][]{: height="24px"}  
- Disconnect point from line. ![image26][]{: height="24px"}  
- Split a line into two lines from the point you’ve selected. ![image27][]{: height="24px"}  
- When you click your left mouse button on a line (but not on a point), you will see these tools:  
-   Delete line. ![image23][]{: height="24px"}  
-   Create a circle from a line (only active if the line is closed) ![image29][]{: height="24px"}  
-   Move line ![image30][]{: height="24px"}  
-   Form a square shape from a line (only active if the line is closed) ![image31][]{: height="24px"}  
-   Reverse line direction (good for rivers & one-way streets) ![image32][]{: height="24px"}  

A "line" created in the iD editor is actually a "way" with "tags" on it.

>A special note about **Deleting**: In general you should avoid deleting other people's mapping if it just needs improvement. You can delete your own mistakes, but you should try to *adjust* other people's mapped objects if they need changes. This preserves the history of the items in the OSM database and is respectful of fellow mappers. If you really feel something should be deleted, consider asking the original mapper or one of the OSM email lists about it first.

### Drawing Shapes (Polygons)

To add a new multi-sided shape, click on the **Area** button. ![image34][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Try to trace a building using the imagery as a guide.  
- You will notice that the color of your shape will change depending on the attributes that you assign to it.  
![image35][]  
- The tools that are available when you select a shape and activate the context menu with the right mouse button are similar to those when you click on a line.  

A "polygon" in the iD editor is actually a "closed way" with tags on it.

### Drawing Multipolygons

Sometimes you have to draw a polygon which does not only have an outer contour but also one or more inner contours. Just think of buildings with inner courtyards or lakes with islands. *Do not draw all these ways in one line* so that the inner contours suspend from the outer contour. Rather draw these contours separate, attach tags to the outer contour only, select all contours and hit **c** in order to combine them into what is called a multipolygon.

![create multipolygon][]

When you select any of the contours of the newly created multipolygon you can see on the left to which multipolygons it belongs

![part of multipolygon][]

Saving Your Changes
--------------------

When (and if) you want to save your edits to OpenStreetMap, click the **Save** button. The panel on the left will show the upload panel.  
![image36][]  

- Enter a comment about your edits and click **Save**.  

> If you have edited the same feature (point, way or area) at the same time as another person was editing it, you will receive a warning that your edits cannot be uploaded until you have resolved the **conflicts** - choose whose edits to accept & upload your changes. *Resolving conflicts often involves accepting the other persons edits, in which case you will probably wish to return to the feature in question and edit again (**this time save soon after the edit to try to avoid a conflict again!**).*

Additional Information and Custom Tags
---------------------------------------

When you are editing an object, you will see a strip of icons at the bottom of the attribute panel. You can add additional information by clicking these icons:

- Add elevation ![image37][]{: height="24px"}  
- Add notes ![image38][]{: height="24px"}  
- Add contacts / phone number ![image39][]{: height="24px"}  
- Add source tag ![image40][]{: height="24px"}  
- Add website ![image41][]{: height="24px"}  
- Add accessibility information ![image42][]{: height="24px"}  
- Add Wikipedia link ![image43][]{: height="24px"}  

Or, you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- This will show all the tags attached to the feature.  
![image45][]  
- Click the plus sign (+) to add keys and values or click the trash icon to delete tags.

Further tutorials
------------------

[Our external resources page](/en/resources/#iD) provides links to a number of video tutorials from various sources.

iD versus JOSM
---------------  

**iD is good for...**

- When you are doing simple edits  
- When you have fast Internet to load the imagery and save the edits  
- When you want to be sure to follow a consistent and simple tagging scheme  
- When you are restricted from installing a program on the computer you are using

**JOSM is better...**

- When you are adding many buildings (See buildings_tool plugin)
- When you are editing many polygons or lines that already exist
- When you are on an unreliable Internet connection or offline
- When you are using a specific tagging scheme (or custom presets)

[^fieldpaper]: There is a [section of LearnOSM](/en/mobile-mapping/field-papers/) giving more information about Field Papers.

The contents of this guide is available as a [presentation](/files/iD-editor-training.pptx)



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
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png