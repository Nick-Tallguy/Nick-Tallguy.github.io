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
그리고 다음 URL처럼 생긴 **FieldPaper 스냅샷 URL**을 입력하세요. <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
**컴퓨터에 있는 GPS 궤적(GPX 포맷)을 띄우려면** GPX 파일을 iD 편집기에 드래그해서 놓으세요.  
**OpenStreetMap GPS 궤적**을 활성화하려면 상자를 누르세요. 아래의 이미지에서, 공개 GPS 궤적이 다양한 색상으로, 진행 방향과 같이 나타납니다.  
![osm gps traces][]  
만약 [이미지 오프셋](/en/josm/aerial-imagery)이 있다면, **사진 오프셋 조절**을 눌러서 **이미지 오프셋**을 고칠 수 있습니다. ![image18][]  

- 네 방향 화살표를 눌러서 이미지를 움직이세요. 기본 위치로 되돌리려면 재설정 버튼을 누르세요. ![image20][]  

iD 편집의 기초  
----------------------  

### 점 추가하기  

새로운 점을 추가하려면 **점** 버튼을 누르세요. ![image3][]{: height="24px"}  

- 마우스 커서가 더하기(+) 모양으로 변할 것입니다. 이제 표시하고 싶은 장소의 위치를 클릭하세요. 예를 들어, 근처에 있는 병원의 위치를 알고 있다면 병원 건물의 위치를 클릭하세요.  
![image21][]  
- 새로운 점이 추가된 것을 주목하세요. 개체의 속성을 선택할 수 있도록 동시에 왼쪽 창이 바뀝니다. 점을 병원으로 지정하려면 **병원 부지**를 누르세요.  
![image22][]  
- 양식을 사용해서 병원 이름, 주소 같은 점의 세부 정보를 채울 수 있습니다. 지물 창에서 선택한 태그에 따라 각 지물은 서로 다른 양식을 따른다는 점을 명심하세요.  
- 만약 점을 잘못된 위치에 놓았다는지 하는 실수를 했다면, 왼쪽 마우스 버튼으로 점을 잡고 드래그해서 점을 새로운 위치로 옮길 수 있습니다. 점을 삭제하고 싶다면, 왼쪽 마우스 버튼으로 점을 클릭해서, 마우스 우클릭으로 메뉴를 열어 휴지통처럼 생긴 아이콘을 눌러 삭제하면 됩니다. ![image23][]{: height="24px"}  
사실 iD 편집기에서 만든 "점"은 "태그"로 이루어진 집합을 달고 있는 독립된 "노드"입니다.  

### 선 긋기  

새로운 선을 추가하려면 **선** 버튼을 누르세요. ![image4][]{: height="24px"}  

- 마우스 커서가 더하기(+) 모양으로 변할 것입니다. 지도에 그려지지 않은 도로를 찾고 쭉 따라가세요. 도로가 시작하는 곳에서 한 번 클릭해 점을 만들고, 마우스를 움직여서 추가로 점을 찍으세요. 선을 그만 만들려면 두 번 클릭하세요. 왼쪽 창에 주목하세요.  
![image24][]  
- 점을 찍었을 때처럼 선에 걸맞는 적절한 태그를 선택하세요.  
- 왼쪽 마우스 버튼으로 점을 잡고 드래그해서 선에 속한 점을 드래그할 수 있습니다.  
- 선을 선택하고 **이동**을 선택해서 선 전체를 움직일 수도 있습니다. 그런 다음 선을 새로운 위치로 옮기세요. ![image30][]{: height="24px"}  
- 왼쪽 마우스 버튼으로 선에 속하는 개별 점(노드)를 잡고 마우스 우클릭으로 메뉴를 열면, 다음 도구들을 사용할 수 있습니다.  
- 선에서 점을 삭제합니다. ![image23][]{: height="24px"}  
- 점을 선에서 분리합니다. ![image26][]{: height="24px"}  
- 선택한 점을 기준으로 선 1개를 2개로 분할합니다. ![image27][]{: height="24px"}  
- 선에 대고(점에서는 해당하지 않음) 마우스 좌클릭을 하면, 다음 도구들을 사용할 수 있습니다.  
-   선을 삭제합니다. ![image23][]{: height="24px"}  
-   선에서 원을 형성합니다(닫힌 선이어야 함). ![image29][]{: height="24px"}  
-   선을 움직입니다. ![image30][]{: height="24px"}  
-   선에서 직사각형을 형성합니다(닫힌 선이어야 함). ![image31][]{: height="24px"}  
-   선의 방향을 뒤집습니다(강이나 일방통행로에 사용하기 좋음). ![image32][]{: height="24px"}  

사실 iD 편집기에서 만든 "선"은 "태그"로 이루어진 집합을 달고 있는 독립된 "웨이"입니다.

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