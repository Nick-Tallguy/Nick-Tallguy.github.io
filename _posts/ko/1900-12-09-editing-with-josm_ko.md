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

이제 이렇게 얻은 정보를 디지털화해서 오픈스트리트맵에 집어넣도록 합시다.

현장 정보를 오픈스트리트맵에 집어넣는 방법도 지금까지 배운 절차, **다운로드, 편집, 저장**과 같습니다. 차이점이라면 지금까지는 위성 사진만 배경에 갖다 놓았다면 이제부터는 GPS 데이터, Field Paper, 참고들도 배경에 놓을 것이라는 사실뿐입니다.

-   예를 들어 GPS 궤적을 JOSM 배경 레이어에 놓았다고 가정해 봅시다. 궤적에 있는 점들 중 하나에 030이라는 이름을 붙이고, 공책에 030은 학교의 위치를 나타낸다고 적었다고 칩시다. 이 점을 오픈스트리트맵에 추가하려면 그리기 도구를 선택하고, 지도 창에 뜨는 030 점 위치에서 마우스 왼쪽 버튼을 더블 클릭한 후, 사전 설정 메뉴에서 학교를 선택해 '사전 설정 적용'을 클릭해야 합니다. 선과 도형을 추가하는 방법도 이와 같습니다.

![GPS in JOSM][]

태그
----
점, 선, 도형을 단순히 그리기만 하면, 개체의 위치는 알 수 있어도 개체가 무엇을 의미하는지는 알 수 없습니다. 즉 개체가 **어디에** 있는지는 알 수 있지만, 개체가 **무엇을 의미**하는지는 알 수 없습니다. 오픈스트리트맵에서 개체의 **의미**를 알려주는 것은 바로 **태그**입니다.

태그는 마치 라벨과 같습니다. 예를 들어 정사각형을 그렸을 때, 여러분이 그린 정사각형은 정사각형이라는 것 그 이상의 의미는 없습니다. 하지만 태그를 통해 정사각형에 추가적인 의미(건물, 이름은 "Menara Thamrin", 16층)를 부여할 수 있습니다.

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