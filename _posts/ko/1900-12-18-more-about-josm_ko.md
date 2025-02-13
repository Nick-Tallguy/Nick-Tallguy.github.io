---
layout: doc
title: JOSM으로 지도를 편집하는 방법
permalink: /ko/josm/more-about-josm/
lang: ko
category: josm
---

JOSM으로 지도를 편집하는 방법
========================


이전 장에서는 JOSM을 설치하는 방법, 그리고 점, 선, 도형을 그리는 방법을 배웠습니다. 또한 사전 설정을 이용해 개체에 정보를 부여하는 방법도 배웠습니다.

이제 오픈스트리트맵 데이터를 편집해 보도록 합시다.

이 장에서는 JOSM의 인터페이스를 더 자세히 탐구하고, 이를 통해 오픈스트리트맵을 편집하는 방법을 더 자세히 알아봅니다.

편집 사이클
---------------------
오픈스트리트맵을 JOSM으로 편집하는 방법은 iD와 크게 다르지 않습니다. 물론 JOSM은 데스크톱 애플리케이션이기 때문에 iD와 다른 점도 있죠. JOSM으로 오픈스트리트맵을 편집하는 과정은 다음과 같습니다.

1.  오픈스트리트맵 서버로부터 현재 지도 데이터를 **다운로드**
2.  위성 사진, GPS, 현장 조사지, 참고를 보고 지도를 **편집하기**
3.  변경 내역을 오픈스트리트맵에 **저장하기**

오픈스트리트맵 데이터 다운로드하기
--------------------
첫 번째 단계는 개선하고 싶은 영역의 지도를 다운로드하는 것입니다. 이 작업은 지도를 편집할 때마다 해야 합니다. 오래된 지도 데이터를 그대로 썼다가 그 사이에 다른 기여자가 지도를 편집해 버리면 충돌이 일어나기 때문이죠.

-   JOSM 왼쪽 위의 "파일"을 클릭한 후 "데이터 다운로드"를 선택하거나 아래와 같은 아이콘을 클릭하면 다운로드 창이 열립니다.

![JOSM Download Button][]

-   다운로드 창을 열면 지도가 보여야 합니다. 만약 보이지 않는다면 "슬리피 지도"라고 적힌 탭을 클릭하세요.

![JOSM Download Dialog][]

-   마우스를 이용해 편집하고 싶은 영역으로 이동하세요. 지도 조작은 JOSM 편집 화면에서 했던 것처럼 하면 됩니다. 마우스 우클릭으로 지도를 드래그하고, 휠로 지도를 확대하거나 축소하세요.

> 노트북으로 JOSM을 사용할 때는 지도를 확대하거나 축소하는 것이 어려울 수 있습니다. 이럴 때는 마우스를 연결해도 되지만, 최신 노트북에는 내장 터치 패드만으로도 스크롤이 가능합니다.

-   마우스 좌클릭 후, 마우스를 움직여 다운로드할 영역을 그립니다.
-   영역을 제대로 선택했으면 창 아래쪽의 "다운로드" 버튼을 클릭합니다. 그러면 오픈스트리트맵 서버에서 데이터를 가져옵니다. 이렇게 다운로드한 데이터는 편집 화면에 자동으로 표시됩니다.

### 배경 이미지 추가
iD 편집기 사용법을 보셨다면, 지도를 그리는 데 배경 이미지가 큰 도움이 된다는 것을 배웠을 것입니다. 여기서는 오픈스트리트맵 편집에 활용해도 문제가 생기지 않는 마이크로소프트의 빙 이미지를 사용할 것입니다.

-   JOSM에서 빙 이미지를 선택하려면, JOSM 상단의 "이미지"를 클릭하고 "Bing 항공 사진"을 선택하세요.

> 만약 이미지 메뉴에서 빙 이미지를 찾을 수 없는 경우, JOSM 설정에서 빙 이미지를 활성화해야 합니다. 편집 -> 속성으로 이동한 후 “WMS TMS”이라고 적힌 아이콘을 클릭하세요. 아래쪽 화살표 버튼을 클릭해야 할 수도 있습니다.
>
> ![JOSM Preferences up down][]
> ![JOSM Preferences WMS TMS][]
>
> "Bing 항공 사진"을 클릭한 후 "활성화"를 클릭하세요.


### JOSM 둘러보기
이제 오픈스트리트맵 데이터를 다운로드하고, 빙 항공 사진을 추가했으니, JOSM의 인터페이스를 둘러보도록 합시다.

![JOSM layout][]

이미 친숙할 메인 화면, 지도 창입니다. 대부분의 작업은 여기서 이루어집니다. 여기서 오픈스트리트맵 데이터를 보고, 편집하고, 개체를 오픈스트리트맵에 추가할 수 있습니다.

지도 창의 오른쪽에는 여러 패널이 있습니다. JOSM을 설치했을 때 기본적으로 활성화되는 패널은 레이어, 속성, 선택 패널입니다. 지도 창에서 점, 선, 도형을 클릭하면 선택 패널에 클릭한 개체가 표시됩니다. 또한 선택한 개체의 정보가 속성 패널에 표시되고, 선택한 개체를 편집한 사람의 닉네임은 편집자 패널에 표시됩니다.

These panels can be opened or closed by clicking on the various buttons on lower left side of JOSM. Above these buttons in the upper left are tools which change what you can do with your mouse. You are already familiar with some of them, the Select tool and the Draw tool. Below them are tools which make it easier to zoom in, delete an object, draw a shape, or create a line that is parallel to another line.


편집
----
이제 편집 과정 중 하나, 다운로드를 끝마쳤습니다. 이제 지도를 편집하고 새로운 개체를 추가해 보겠습니다.

어느 곳을 다운로드했느냐에 따라 다르겠지만, 다운로드한 데이터는 매우 방대할 수도 있고, 거의 없을 수도 있습니다. 그러나 데이터의 규모에 상관없이 모든 데이터는 점, 선, 도형으로 이루어져 있다는 사실을 기억하세요.

-   지금까지 배운 방법으로 개체를 그려 보세요. 만약 실수했다면, 고치면 됩니다.
-   너무 공격적으로 지도를 편집할 필요는 없습니다. 만약 확실하게 알지 못하는 지물이 있다면 지도에 굳이 넣지 않아도 됩니다.
-   점, 선, 도형을 움직이고 싶다면 **선택 도구**를 이용하세요. 개체를 선택하고 원하는 위치로 드래그하면 됩니다.

![JOSM select tool][]

-   새로운 점, 선, 도형을 그리고 싶으시다면 **그리기 도구**를 이용하세요. 개체를 새롭게 그렸다면 사전 설정 메뉴에서 원하는 정보를 선택하세요.

> 다운로드한 영역 바깥은 절대 편집하지 마세요.  다운로드한 영역의 바깥쪽은 빗금으로 표시됩니다.
>
> ![JOSM area downloaded][]

변경 내역 저장하기
--------------
세 번째, 그리고 마지막 단계는 편집 내역을 오픈스트리트맵 데이터베이스에 업로드하는 것입니다. 변경 내역을 저장하려면 컴퓨터를 인터넷에 연결해야 합니다.

-   화면 위쪽의 "파일" 메뉴를 클릭하고, "데이터 업로드"를 클릭하세요. 혹은 다음과 같은 버튼을 클릭하세요. 그러면 업로드 창이 뜰 것입니다.

    ![JOSM Upload Button][]

-   업로드 창에서는 추가, 편집, 삭제한 개체를 볼 수 있습니다. 바뀜집합 코멘트를 적는 칸에 자신이 무엇을 편집했는지를 적으세요.

    ![JOSM Upload Dialog][]

-   "변경 내역 업로드"를 클릭하세요.

-   만약 JOSM으로 오픈스트리트맵에 데이터를 업로드하는 것이 처음이라면, 오픈스트리트맵 닉네임과 비밀번호를 입력해야 합니다.
-   여기서 입력한 닉네임과 비밀번호는 다시 물어보지 않습니다. "인증" 버튼을 클릭하세요.

    ![JOSM Authenticate][]

-   오픈스트리트맵에 데이터를 업로드하는 데는 몇 초 정도 걸립니다. 여러분은 드디어 JOSM으로 오픈스트리트맵을 편집했습니다!

> JOSM을 닫기 전에 항상 편집 내역을 업로드하세요. 그렇지 않으면 지금까지 편집한 것들을 모두 날릴 수 있습니다!

편집 내역을 지도에서 보기
---------------------------
-   인터넷 브라우저를 열고 [http://openstreetmap.org/](http://openstreetmap.org/) 로 이동하세요.
-   JOSM으로 편집한 구역으로 지도를 움직이세요.
-   You should see your changes now appearing on the map! If you don’t, try pressing CTRL+R to refresh the web page. Sometimes the browser still shows the old version and needs to be reloaded.
-   변경 내역이 보이지 않는다고요? 걱정하지 마세요. 실제로 지도에 변경 내역이 표시되려면 몇 분 정도 걸립니다. 혹시 모르니 편집 내역이 확실히 업로드되었는지 JOSM에서 확인하세요. 참고로 JOSM에서 보이는 아이콘은 대부분 오픈스트리트맵 홈페이지 지도에서도 보입니다.

마치며
-------
지금까지 오픈스트리트맵에 데이터를 추가하는 방법을 배웠습니다. 다음에는 무엇을 배울까요? 편집도 물론 좋지만, 지도를 만드는 데 편집이 전부는 아닙니다. 이제 밖으로 나가서 정보를 수집하는 방법을 배워 보겠습니다.


[JOSM Download Button]: /images/josm/josm_download-button.png
[JOSM Download Dialog]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM select tool]: /images/josm/josm_select-tool.png
[JOSM area downloaded]: /images/josm/josm_area-downloaded.png
[JOSM Upload Button]: /images/josm/josm_upload-button.png
[JOSM Upload Dialog]: /images/josm/josm_upload-dialog.png
[JOSM Authenticate]: /images/josm/josm_authenticate.png
