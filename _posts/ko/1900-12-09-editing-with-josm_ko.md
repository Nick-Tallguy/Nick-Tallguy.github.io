---
layout: doc
title: 현지에서 얻은 정보 편집하기
permalink: /ko/josm/editing-with-josm/
lang: ko
category: josm
---

현지에서 얻은 정보 편집하기
==================


지금까지 오픈스트리트맵에서 객체를 그리는 방법과 객체에 의미를 부여하는 방법을 알아보았습니다. 이 장을 읽기 전에 [스마트폰 또는 GPS, 종이를 활용해 지도 그리기](/ko/mobile-mapping/)를 먼저 보는 것이 좋습니다.

이 장에서는 다시 JOSM으로 돌아가 지금까지 다루지 않았던 기능들을 소개하겠습니다.

JOSM 레이어
-----------
지금까지의 설명을 잘 따라오셨다면 아마 JOSM에 다양한 정보를 올려놓을 수 있다는 것을 눈치채셨을 수도 있습니다. 오픈스트리트맵 데이터를 다운로드하고, 빙 위성 사진을 추가하고, GPS 궤적과 현장 지도를 올려 놓고... 이 모든 작업을 JOSM 한 곳에서 진행했습니다.

혹시 이렇게 새로운 것들을 JOSM에 추가할 때마다 화면 오른쪽의 레이어 패널에 레이어가 추가되는 모습까지 눈치채셨나요? 바로 아래와 같이 말이죠.

![Layers panel][]

레이어 패널에 뜨는 각 항목들은 지금까지 지도 창에 연 데이터를 나타냅니다. 위 이미지에서 "Data Layer 1"은 편집 중인 오픈스트리트맵 데이터를 나타내고, "Field Papers"는 JOSM에 불러온 현장 조사 종이를 나타냅니다.

여기서 만약 빙 위성 사진을 추가하면 "Bing 위성 사진"이라는 이름으로 새 레이어가 추가될 것입니다.

레이어라는 개념은 쉽게 이해하기 어렵습니다. 각 레이어가 반투명 종이라고 상상해 봅시다. 각 종이에는 서로 다른 정보가 담겨 있고, 우리는 이 종이의 배열 순서를 원하는 대로 바꿀 수 있습니다.

위성 사진, GPS, Field Paper와 같이 지도를 그리기 위해 배경으로 사용되는 레이어를 '배경 레이어'라고 합니다. 오픈스트리트맵 데이터 레이어는 실제로 작업이 이루어지는 레이어입니다.

-   레이어를 움직이려면 레이어 패널에서 움직이고자 하는 레아이를 클릭하고 위쪽 또는 아래쪽 화살표를 클릭하면 됩니다.

![Layers up down][]

-   레이어를 숨기려면 숨기고자 하는 레이어를 선택한 후 보이기/숨기기 버튼을 클릭하세요.

![Layers show hide][]

-   그러면 선택한 레이어가 지도 창에서 사라집니다. 보이기/숨기기 버튼을 한 번 더 클릭하면 선택한 레이어가 다시 나타납니다.
-   지우고자 하는 레이어를 선택하고 삭제 버튼을 클릭하면 레이어가 지워집니다.

![Layers delete][]

-   마지막으로 알아 둬야 할 것이 있습니다. 바로 JOSM에서 *활성화된* 레이어만 편집할 수 있다는 사실입니다. 만약 지도 창에 뜨는 지도를 수정할 수 없다면, 아마 해당 레이어를 활성화하지 않아서 그럴 가능성이 높습니디. GPS 궤적, Field Paper, 위성 사진과 같은 대부분의 레이어는 수정이 불가능합니다. 위에서 "Data Layer 1"로 표시된 오픈스트리트맵 데이터 레이어만 수정이 가능합니다.
-   레이어를 활성화하려면 원하는 레이어를 선택하고, 활성화 버튼을 클릭하세요.

![Layers activate][]


GPS 데이터와 현장 지도(Field Paper) 사용하기
-------------------------------
[스마트폰 또는 GPS, 종이로 지도 그리기](/ko/mobile-mapping/) 단락을 보면 GPS와 Field Paper로 현지 정보를 수집하고, 이를 JOSM에 레이어로 불러오는 방법을 알 수 있습니다.

이렇게 얻은 정보를 오픈스트리트맵에 집어넣으려면 먼저 디지털화하는 작업이 필요합니다.

You do this with the same process you learned previously - **download, edit, save**. The difference is that instead of using only satellite imagery as a base layer, you can also use your GPS data, Field Papers, notes, or a combination of them all.

-   For example, let's assume you have your GPS waypoints as a background layer in JOSM, you saved a waypoint on your GPS with the name 030, and you wrote in your notebook that 030 is a school. To add this point into OpenStreetMap, you will select the draw tool, and double-click on top of point 030 in your map window. This will create a point. Then go to the Presets menu, and find the preset for school. Enter the name of the school and click “Apply Preset”. Do the same to add lines and shapes.

![GPS in JOSM][]

Tags
----
When you draw a point, line, or shape, it has a location, but no information about what it is. In other words, we know **where** it is, but not **what** it is. Before now, we have been using items from the Presets menu to define **what** it is. The way OpenStreetMap knows **what** an object is is by using **tags**.

A tag is like a label that you can put on something. For example, if we draw a square, it’s only a square. But then we add attributes to it that describe what it is: this square is a building; the name of the building is “Menara Thamrin”; the building is 16 levels high.

You can add as many tags as you want to an object. Tags are saved as pairs of text, called **keys** and the **values**. In OpenStreetMap, the tags written above would in fact be:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

If you select an object in JOSM, you can see all the tags that are attached to it in the Properties panel on the right.

![Properties panel][]

### Editing Tags

You can add, edit, and delete tags from the Properties panel. However, the tags are traditionally in English and can sometimes be confusing, so it is often easier to use the Presets menu. When you add or change tags, the attributes of the object are changed.

-   To edit an object's tags, first select it.
-   Then edit the tags in one of two ways: (1) Use the Presets menu, or (2) edit the tags directly in the Properties window on the right.

### Common Mistake: Tagging nodes when you want to tag lines or polygons

When you are editing the attributes of a point, you will first select the point and then add tags either through the Presets menu or directly in the Properties panel. A common mistake is when adding attributes to a line or a shape. When selecting the object, it is important that you
select the line, and NOT the points that make up the line.

This frequently occurs because editors use the JOSM select tool to draw a box around an object, which causes everything, both the line **and** the nodes to be selected, and when you add tags they are applied to the nodes as well. Be sure to **only** select lines when you want to add tags to them.

![Nodes mistake][]

Saving OSM files
----------------
When you are editing in JOSM, it is always a good idea to download, edit, and upload changes in a reasonably short period of time. You do not want to download data one day, and then wait until a few days later to upload your edits. What if someone else edits the same area during that time? This will cause errors and conflicts.

Don't be afraid to upload your edits frequently. This ensures that your changes will be saved to the database and you will not lose your hard work.

If you are working in a single area, it's a good idea to download the map data every time you want to edit, in case another user has made changes.

Although you should always try to download OSM data when you are ready to edit, and upload your changes frequently, there may be cases in which you want to save the OSM data on your computer. For example, if you have intermittent connectivity to the internet, you may wish to download data, save it, edit, and then upload your changes later on.

-   To save an OSM file, make sure that it is the active layer in the the Layers panel. Click “File” on the top menu, and click “Save”. Choose a location for the file and give it a name. You can also save by clicking this button:

![JOSM save button][]

-   You can now close JOSM and your data will be saved. When you want to open the file again, simply open JOSM, go to the “File” menu, and click “Open...”

Summary
-------
In this chapter we looked a little bit closer at the JOSM interface and learned about layers and tags. You should now have a solid footing in how to map and how to edit OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png