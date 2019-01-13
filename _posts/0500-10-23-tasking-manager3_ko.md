---
layout: doc
title: 과업 관리자 3
permalink: /ko/coordination/tasking-manager3/
lang: ko
category: coordination
---

# 과업 관리자 3

> 이 안내서는 [tasking-manager3_ko.odt](/files/tasking-manager3_ko.odt) 또는 [tasking-manager3_ko.pdf](/files/tasking-manager3_ko.pdf)로 다운로드할 수 있습니다  

**이 안내서는 현재 버전의 과업 관리자를 설명하고 있습니다. 당신이 사용하고 있는 사용자 인터페이스가 여기서 설명하는 것과 다르다면 [이전 버전 안내서](/ko/coordination/tasking-manager)를 찾아 보세요**

목차
-------------
-  [빠르게 시작하기 안내서](/ko/coordination/tasking-manager3/#quick-start-guide)  
-  [지도 작업 과정](/ko/coordination/tasking-manager3/#mapping-process)  
    -  [로그인](/ko/coordination/tasking-manager3/#tasking-manager-login)  
    -  [옵션 - 언어 설정과 사용자 프로필](/ko/coordination/tasking-manager3/#options-amp-links)  
    -  [프로젝트 찾기 - 지도로 목록 띄우기, 검색하고 필터링하기](/ko/coordination/tasking-manager3/#finding-a-project---tasking-manager-contribute-screen)  
    -  [지도 제작 과업 수행하기 - 선택하고, 작업하고, 과업을 공개하기](/ko/coordination/tasking-manager3/#mapping-via-the-tasking-manager) 
-  [도움 받기 - 프로젝트 관리자에게 연락하기](/ko/coordination/tasking-manager3/#getting-help)  
-  [힌트와 팁](/ko/coordination/tasking-manager3/#editing-hints-and-tips)
-  [유효성 검사](/ko/coordination/tasking-manager3/#validation)

[HOT 오픈스트리트맵 과업 관리자](http://tasks.hotosm.org)는 특정 지역에서 오픈스트리트맵 지도 작업을 하는 많은 사람들을 조직해 주는 도구입니다.

오픈스트리트맵은 집단이 모여서 제작하는 자유 세계 지도입니다. 아무나 관심 있는 지역의 지도를 만들어서 오픈스트리트맵에 기여할 수 있습니다. 과업 관리자는 단순히 오픈스트리트맵에 기여하는 사람들을 모아 큰 조직을 만드는 도구일 뿐입니다. 오픈스트리트맵 기여자들의 대다수는 과업 관리자를 사용하지 않습니다.

과업 관리자는 주요 오픈스트리트맵 프로젝트와 완전히 떨어져 있습니다. 과업 관리자를 사용해서 오픈스트리트맵에 기여하는 것은, 사실 여러 가지 소프트웨어를 사용하는 것과 같습니다.

* 오픈스트리트맵 - 지리 정보 데이터베이스
* 과업 관리자 - 오픈스트리트맵에서 동일한 지역의 데이터를 편집하는 많은 사람들을 조직해 줍니다
* 오픈스트리트맵 편집기 - 오픈스트리트맵 데이터베이스의 데이터를 읽고 쓸 수 있는 소프트웨어

![TM overview][]

과업 관리자는 넓은 영역을 잘게 쪼개서 특정한 영역으로 나타내고, 해당 영역의 지도를 제작하는 "과업"을 빠르게 하고, 당신이 오픈스트리트맵 편집기로 작업한 영역을 "검토"하거나 "잠금"할 때 사용합니다. 작은 영역 하나를 "검토"나 "잠금"으로 설정하면 자신이 해당 영역을 작업할 때 다른 사람들이 해당 영역에 동시에 참여하는 것을 막을 수 있습니다. 이렇게 설정하면 두 사람이 오픈스트리트맵에서 똑같은 영역을 작업할 때 생기는 "중복 작업" 같은 문제를 막을 수 있습니다.

일단 작은 영역의 지도 작업을 마치면, 과업 관리자에 해당 영역의 과업이 완료되었다고 기록되며, 또 다른 "과업" 달성을 위해 계속 작업할 수 있습니다.


## 빠르게 시작하기

1. http://openstreetmap.org/ 에서 계정을 만들고 로그인합니다.  
  ![TM Quick Start 1][]
2. [http://tasks.hotosm.org/](http://tasks.hotosm.org/) 로 들어가 오른쪽 위에서 로그인합니다.  
  ![TM Quick Start 2][]
3. "기여"를 클릭하고 작업할 프로젝트를 탐색합니다.  
  ![TM Quick Start 3][]
4. 프로젝트에 나와 있는 지시를 숙지합니다.  
  ![TM Quick Start 4][]
5. "지도 작업"을 클릭합니다.  
  ![TM Quick Start 5][]
6. "준비" 상태인 과업 중에서 작업할 과업을 선택하고 "지도 작업 시작"을 클릭합니다.  
  ![TM Quick Start 6][]
7. 오픈스트리트맵 편집기로 넘어가게 됩니다. 넘어가면 프로젝트 지시에 따라 해당하는 지물을 만들거나 수정합니다.  
  ![TM Quick Start 7][]
8. 작업이 끝났다면 과업 관리자로 돌아와서, 완전히 작업이 끝났을 때에는 "완전히 작업이 끝났다고 표시"를 클릭하세요. 지도 작업을 멈춰야 하는 상황이라면 "작업 중지"를 클릭하세요.  
  ![TM Quick Start 8][]


## 지도 작업을 하는 과정 

1. 현지 기여자가 아닌 사람(비현지 기여자)가 오픈스트리트맵 계정을 만들고 과업 관리자에서 로그인합니다.
1. 작업할 프로젝트를 결정합니다. 과업 관리자를 사용하는 프로젝트 관리자가 설정한 중요도나 난이도에 따라 결정하는 경우가 많습니다. 
2. 비현지 기여자가 과업(사각형으로 된 영역)을 선택하고, 지도 작업을 끝내고, 과업이 완수되었다고 표시합니다.
3. 또 다른 비현지 기여자가 해당 과업을 검토해 만족할 만한 수준이라고 판단하면 해당 과업을 '유효성 검사 완료됨'이라고 표시합니다.
4. 프로젝트에서 지도 제작 진척도는 모니터링되어 "통계" 탭에서 볼 수 있습니다. 또한 프로젝트는 관리자의 판단에 따라 중요도를 낮추거나 보존 처리할 수 있습니다.

### 과업 관리자에 로그인하기

과업 관리자는 오픈스트리트맵 지도 작업을 조직하는 도구입니다. 오픈스트리트맵과는 별개의 도구이지만, 과업 관리자에서는 오픈스트리트맵 로그인 시스템을 사용합니다. 따라서 과업 관리자에 사용할 계정을 따로 만들 필요가 없으며, 오픈스트리트맵 계정만 필요합니다. 또한 과업 관리자를 사용하기 전에 오픈스트리트맵에 먼저 로그인을 해 두어야 합니다.

처음 과업 관리자에 접속했다면 화면 오른쪽 위에서 "로그인" 버튼이 있을 것입니다.

![TM login 1][]

버튼을 클릭하면 오픈스트리트맵 웹 사이트로 이동합니다. 로그인을 하고, 오픈스트리트맵 환경설정에서 과업 관리자 접속 권한을 얻어야 합니다. 계정이 없다면 오픈스트리트맵 웹 사이트에서 계정을 만드세요.

![TM login 2][]

![TM login 3][]

오픈스트리트맵에서 로그인을 했다면, 과업 관리자로 되돌아갑니다. "기여"나 "시작"을 클릭하면 기여할 수 있는 프로젝트 목록으로 이동합니다.

### 옵션 & 계정 연결

과업 관리자는 처음에 영어로 표시됩니다. 다른 언어로 변경하려면 화면 오른쪽 위에 있는 **English**를 클릭하세요.

로그인된 상태에서는 오른쪽 위에 사용자명이 뜹니다. 사용자명을 클릭하면 아래와 같은 작업을 할 수 있습니다.

- 과업 관리자 프로필 보기
    - 이메일 주소와 SNS를 업데이트할 수 있습니다.
    - 기여 레벨을 볼 수 있습니다.
    - 기여한 프로젝트 목록/지도를 볼 수 있습니다.
- 과업 관리자의 **메시지** 시스템 이용(오픈스트리트맵의 메시지 시스템과는 별개입니다)
- 로그아웃

### 프로젝트 찾기 - 과업 관리자 기여 창

메인 창에서 "기여"를 클릭하면 과업 관리자 프로젝트 목록으로 이동합니다.

![TM contribute][]

과업 관리자 기여 창은 세 영역으로 나누어져 있습니다.

- 왼쪽에 위치한 검색/옵션 필터링
- 프로젝트 목록
- 목록에 있는 프로젝트를 나타낸 지도

#### 검색/옵션 필터링

기본적으로 작업할 수 있는 모든 프로젝트가 표시됩니다. 고급 검색 필터를 이용하면 작업할 프로젝트의 후보를 좁힐 수 있습니다.

- 프로젝트 번호 - 작업하고 싶은 프로젝트의 번호를 알고 있다면 검색창에서 바로 프로젝트로 이동할 수 있습니다.
- 단체 - 이 옵션을 이용하면 해당 단체가 진행하는 프로젝트만 표시됩니다.
- 작업 난이도 - 몇몇 프로젝트는 여타 프로젝트보다 어렵습니다. 이 옵션을 이용하면 자신의 수준에 맞는 프로젝트를 찾을 수 있습니다. 특히 자신의 수준이 높다면, 그에 맞춰서 어려운 프로젝트를 작업하길 권장합니다.
- 작업 유형 - 이 옵션을 이용하면 선택한 지물을 다루는 프로젝트를 찾을 수 있습니다. 많은 프로젝트들은 한 가지 유형의 지물만 다루지만, 여러 유형의 지물을 동시에 다루는 프로젝트들도 있습니다.
- 전체 텍스트 검색 - 검색창에 입력한 단어나 어구가 프로젝트 설명에 있는 프로젝트를 찾을 수 있습니다.
- 캠페인 태그 - 어떤 프로젝트에는 해당 프로젝트가 상위 프로젝트(캠페인)의 일부라는 뜻으로 태그가 붙어 있을 수 있습니다. 이 옵션을 이용하면 원하는 태그가 달린 프로젝트를 찾을 수 있습니다.

#### 지도로 보기
"지도" 탭을 클릭하면 각 지역마다 프로젝트의 개수가 뜹니다. 더블 클릭하거나 확대하면 프로젝트를 하나씩 볼 수 있습니다. 지도를 확대하면 각 점마다 색이 입혀집니다. 붉은색은 급한 프로젝트, 노란색은 우선순위 중간·높음, 회색은 우선순위 낮음을 나타냅니다. 지도에 있는 각 점을 클릭하면 프로젝트 정보가 뜹니다. 프로젝트 제목을 클릭하면 해당 프로젝트로 이동합니다.

![TM project map][]

### 과업 관리자로 지도 작업하기

작업할 프로젝트를 찾았다면, 프로젝트 제목을 클릭해서 프로젝트의 세부 내용을 확인하세요.

- 프로젝트의 중요성과 데이터를 이용할 곳의 설명
- 작업하는 방법이 상세하게 나온 지시문
- 유효성 검사가 필요한 곳을 표시하는 창
- 개인 작업 영역과 영역의 상태를 표시하는 지도
- 프로젝트의 질문과 답변이 올라오는 질문/답변란

![TM project description][]



#### 프로젝트 페이지

프로젝트에 관해 알아야 할 모든 것이 여기에 있습니다! 맨 위에는 프로젝트의 전체 설명과 프로젝트의 정보가 있습니다.  

설명 아래의 화면은 왼쪽과 오른쪽으로 나뉘어 있습니다. 왼쪽은 "지시", "지도", "유효성 검사", "질문과 답변"을 클릭했을 때 해당 정보가 뜨는 곳입니다. 오른쪽은 개별 작업의 현황을 나타낸 프로젝트 지도입니다.

- 색이 없는 영역은 바로 작업할 수 있는 영역입니다.
- 분홍색 영역은 우선순위가 높은 영역입니다.
- 노란색/금색 영역은 작업이 한 번 완료된 곳으로, 유효성 검사를 할 수 있는 영역입니다.
- 노란색 경계선으로 표시된 영역은 당신이 선택한 영역을 나타냅니다.
- 파란색 영역은 현재 다른 사람이 작업하고 있는 영역을 나타냅니다. 
- 초록색 영역은 작업이 2번 완료된 곳으로, "유효성 검사"가 완료된 곳입니다.
- 어두운 회색 영역은 작업을 할 때 필요한 이미지의 품질이 좋지 않다고 (영역을 직접 둘러 본 사람이) 표시해 놓은 영역입니다. 
- 프로젝트 외곽에 보이는 파란색 선은 프로젝트의 경계를 나타냅니다. 이 경계선은 보통 이용할 수 있는 이미지의 경계나 행정 경계 등을 따릅니다. 따라서 경계선은 불규칙한 모양으로 나타날 수도 있습니다. 경계 바깥은 프로젝트 요구 사항에 포함되지 않으며, 경계 바깥에서 이루어진 작업은 유효성 검사 대상에 포함되지 않습니다.  


#### 지시 탭
여기에서는 지도 작업을 할 때 필수로 해야 하는 것들을 볼 수 있습니다. 이 지시 창에서 프로젝트의 난이도를 알려 주기 때문에, 지시문을 보고 초수, 중수, 고수에게 맞는 난이도의 프로젝트를 스스로 고를 수 있습니다. 지시문은 꼭 숙독하고 확실히 이해하도록 하세요. 프로젝트의 스타일과 목적은 프로젝트마다 다양합니다. 일반적인 프로젝트에서는 아래과 같은 작업을 합니다.  

- 도로망 추가 및 보정: 현지 사람들이 내비게이션 같은 도구에 데이터를 가져올 때, 다른 곳에서 현지로 이동하는 법을 계산할 때 사용합니다.  
- 마을 추가: 주로 사람들이 거주하는 장소나 재해에 영향을 받은 장소를 식별할 때 사용합니다.  
- 건물 추가: 재해로 인한 피해를 계산하거나 질병의 감염을 추적할 때 사용합니다. 인구 산출에도 사용합니다.  
- 강, 장벽, 기타 지물 추가 및 보정  

전 세계의 모든 영역이 당신이 사는 곳과 비슷한 것은 아닙니다. 따라서 구체적인 태그 작성법을 배울 필요가 있습니다. 예를 들어, 아프리카의 도로망은 주로 미국식과 유럽식으로 나뉘는데, 이 둘 간의 차이는 매우 큽니다.  

**바뀜집합 댓글** 영역이 있습니다. 당신이 바뀜집합을 업로드할 때 바뀜집합 댓글 칸에 이 영역에 있는 내용을 복사&붙여넣기해야 합니다. 이 영역에 **출처(source)**가 나와 있는 경우도 있는데, 이럴 때에는 제시된 출처를 (사용하고 있는 편집 소프트웨어의) 출처 칸에 복사&붙여넣기해야 합니다.  

작업에 특화된 이미지를 사용할 수 있을 때도 있습니다. 다만 이미지를 사용하려면 라이선스에 동의해야 할 수도 있습니다. 보통 지시문에 이러한 이미지를 편집기(주로 iD나 JOSM)에 불러오는 가장 쉬운 방법이 나와 있습니다.  

완료되었다고 표시된 작업을 검토할 때, 유효성 검사기는 지시문에 나온 모든 요구 사항이 충족되었기를 예상합니다. 당신은 아마 모든 요구 사항을 충족시키는 것이 꽤나 어렵다는 것을 알아챌 수도 있습니다. 아래에 있는 지침은 잠기지 않은 작업에 사용할 수 있습니다.  

#### 활동 및 통계 버튼  

This tab contains statistics about the project. It is divided into two sections, a detailed list of the activity (formerly its own tab in the Tasking Manager 2.0) and summary section.

The summary contains a list of mappers who have completed at least one task within the project.  

A log of all the comments left on individual tasks is at the bottom of the page. These are comments left on tasks and should not be confused with the "Questions and Comments" tab which are general questions and comments about the overall project.

You can return the main project contribution page by clicking on the project title on the Activity and Stats page.

#### Map Tab  

Click when you are ready to start mapping. You may choose an individual task to work on by selecting it from the map, or by clicking on the "Take a Task at random" option.  Only uncolored tasks can be selected in this tab or you will get a message saying the task can not be mapped. If you intend to validate, make sure you select the "Validate" tab.

![TM map tab][]

#### Selecting a task to map  

Having selected your task you will be able to see if there is any history for this task, such as a mapper starting to map, but realizing they do not have time to complete the task.  

Clicking on the **Start Mapping** button locks the task so that no other mapper can select it until it is released again, and starts a 2 hour (120 minute) countdown timer, at the end of which time the task is automatically released. It is good practice to check on your countdown timer on a regular basis - it is easy to become engrossed in your mapping and not realise your task has been released, and has now been selected by another mapper who has started mapping it too. This can lead to conflicts and problems.  


#### Editing choices

Different options for editing are presented to you as soon as you lock a task.

##### Edit with JOSM  

Start JOSM before using this link and it will automatically load the existing OSM data into JOSM.  

>  1. 'Enable remote control' needs to be ticked - found under **Edit / Preferences / Remote Control**
>  2. If you have previously installed the plug-in 'continuosDownload' it is best to disable it (untick 'Download OSM Data continuously' under the **File** menu in JOSM).  
>  3. If JOSM does not load the imagery automatically as well, it can normally be found under the **Imagery** menu. [More info on imagery here ](/en/josm/more-about-josm/#add-imagery)  
  

##### iD editor  

Select this to automatically start a new tab or window of your web browser, with existing OSM data loaded. The Internet Explorer web browser does not currently support iD and it will load Potlatch 2 instead. Your original tab or window with the Task Manager will still be present.  


##### Potlatch 2  

The editor will load in a new window or tab. Potlatch will not automatically display the task bounding box, but you can do so by following this procedure:  

1. In the Tasking Manager, select a task and click Start Mapping to lock it  
2. In the Tasking Manager, select Edit with JOSM (if a window appears saying "JOSM remote control did not respond..." just click OK).  
3. Below the Edit with JOSM button, text will say "Tip: Download the following .gpx file...". Download the .gpx file, and note where it is saved.  
4. In the Tasking Manager, change from Edit with JOSM to Edit with Potlatch 2. Potlatch should open in a new tab.  
5. In Potlatch, select Background, then Vector File...  
6. In the Load Vector File window, at the bottom next to File, click Open, and navigate to the .gpx file you just downloaded  
7. In the Load Vector File window, make sure the box is checked in the Show column for the .gpx file, then close the window  
8. Potlatch should now display the boundary as a square (probably cyan). Note that Potlatch will still load data outside the boundary.  
  

##### Field Papers  

For use only when you are involved in a project where a local mapper has carried out a ground survey and marked a printed map with information such as road names. This map can be rescanned and used as a background image for a remote or local mapper to read the information and update the OpenStreeetMap data [Field papers section of LearnOSM](/en/mobile-mapping/field-papers/).  


#### Splitting a task square

Having selected your task and inspected it with the imagery in place, you may realise that there is far too much detail required for mapping. An example of this may be tracing buildings in dense urban areas, or locating small villages in large areas. As guidance, where it isn't possible for one person to complete within the 2 hour time limit you can often split the task into 4 smaller areas. *Use with caution* - if/when task squares are split too small it is difficult to judge what type of highway is involved, and to identify other features.  

> Be aware that other useful comments about the work previously completed will no longer be available.


#### Unlocking a Task

![TM unlock][]

##### Unlocking a Task before it is complete

If you start working on a task, but cannot complete it for some reason, it is best practice to leave a comment against the task. Simply detail what remains and choose **Stop Mapping**. Make sure your comments are relevant and aimed to help out the next mapper.  

For example:  

    Almost complete, small village top left 
    in the task square to be traced though
  

##### Unlocking a Task that is completely mapped

It is very difficult to be completely certain that you have completed a task - however it is acceptable to mark the task as complete if you are fairly sure - the contents will be checked by another mapper when validating, and any small additions can be made then.  

For the process to work most effectively, mappers need to mark tasks as "Mapped" rather than leaving them for several other 'not sure' mappers to spend time also checking them.  

When you have finished editing and think that the task is complete, save any remaining edits with your editing programme, then return to the Tasking Manager.  

+ Add comments to the box detailing what you achieved and more importantly, what you are not certain of. For example; "Complete as far as I can see, but there is cloud covering the top right corner of the task & I cannot see to trace this area".  
+ Click on the "Mark as Mapped" button, and your work is ready for review.  

##### Marking a Task as Bad Imagery

You will sometimes select a task that can not be mapped because the imagery is low resolution or has cloud cover. Just close that task in your editor and use the "Mark as Bad Imagery" button to record that the task can not be mapped due to poor imagery.


#### Sending a message from the comment box

When leaving a comment against a task, you can have the comment sent as a message to a named mapper. Much like Twitter, simply use an @ followed by the username. This will send a message to the user containing the comments from this box, plus a link to the task that the comments box relates to.  

For example:  

    @HOTMppr nice work tracing the building  
    details here. You missed a small group  
    of houses on the upper left of the task square,  
    I added a few in, but some still remain.  

This is particularly useful when validating or adding on another's previous work - you can provide feedback, thanks or more.  

+ You may wish to provide a link to a site which may help the mapper, such as <http://learnosm.org/en/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ Be aware that many people from around the world will be participating, so prefer simple, clear language. If you come across comments in other languages, tools such as Google Translate are reasonably effective.


#### Referring to a particular task when sending an email  

If you need to send a message, such as an email or an IRC message, and you are querying something concerning a particular task within a project (perhaps you need help identifying something from the satellite imagery):  

1. Click on the task square concerned  
2. Click on the address bar in your web browser, which should show something similar to 'http://tasks.hotosm.org/project/713?task=259'  
3. Copy this link into the message. 


## Getting help 

### Live text based help

From the Learn page of the Tasking Manager:  
1. Click on **OSM HOT IRC Channel #hot**  
2. Enter a username (your OSM username?), or use the preset characters  
3. At the bottom of the dropdown list select **hot**  

- To the right of the screen is a list of users that are online now.  
- Type your message in the box at the bottom left of the screen (this is sometimes temporarily obscured by other text, but this will disappear as you select the box.  
- To direct a message to a particular individual, include their username from the list on the right within your message. Type, then use the return key to submit your comment. The system is 'live' so wait for an answer - your username will often be used in the reply to show you the comment is directed to you. You will normally receive a reply within a few seconds, so please wait.  
- An alternative simple system can be found at [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Further info on using IRC with OpenStreetMap may be found at [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Alternatively use an IRC client of your choice (Server=irc.oftc.net, and channel=#hot)  

### Leaving a Project question / comment / contacting the Project creator

Using the "Comments" tab for the project you can see other users' questions and comments and leave one of your own. You can also click the "Contact Project Manager" link and that will automatically direct your comment/question to the project creator. 

All comments are public and it is not real time, live chat, use the IRC option above for realtime chat.

![TM comments][]


## Editing hints and tips  

By now you have a good understanding of what the Tasking Manager is, and some of the various functions it supports. Unlike normal editing, this tool is often used for time critical projects with many participants - this may be a little bit different to what you are used to.  

Some general advice to heed when working in this tool:  

* Avoid mapping far outside of your task square - other mappers may be working in that area, resulting in duplicated efforts. It's OK to map objects such as buildings overlapping a boundary, but avoid going much further - upload immediately after mapping something at the border.  
* Extend roads, streams, or other features slightly over the boundaries - this lets the next mapper pick up where you left off, but upload as soon as you finish editing it.  
* If you are in doubt about what a particular feature is, use the comment section to ask questions or check the wiki.  
* If you make a serious mistake - for example, deleting a major feature or relation - use IRC or the comment box to ask other mappers to help in reverting this for you. Try to include the changeset, or a description of what happened. Being a collaborative task, many other mappers are here to help - it's important to remember everyone makes mistakes sometimes.  
* Don't hesitate to ask for feedback - mappers validating your work can be terse or to the point, but if they know it's OK to engage in a dialog with you, the outcome is often a lot better for all involved. It can be difficult to communicate in another language, and it's easy to appear abrupt when you have to translate as well as pass a message in a language you are not fluent in.  
* You must not validate your own work - a second pair of eyes will always lead to better quality mapping.  
* Don't worry if other mappers are terse when validating your work - like you, they just want to ensure all of the data is mapped accurately. Feedback is invariably about the remaining work, not criticism of your efforts to date.  


## Validation

Validation is the process of a second mapper reviewing the mapping of the initial mapper of a project task. It is designed to ensure complete, quality data and provide thanks, feedback and encouragment to mappers.

### Getting Started

Validation starts much the same way as mapping does, a volunteer finds a project they would like to work on, reads the instructions tab to be sure they understand what is called for and how it is expected to be mapped, but instead of selecting the mapping tab for the project, they select the "Validate" tab.

![TM select for validation][]

The validator can select a task by clicking on an individual task square, clicking "Select a random Task", select by user or draw a polygon to select multiple, connected tasks.

Unlike mappers, validators can select multiple tasks to perform validation on a larger scale than just one task.

### Selecting Multiple Tasks for Validation

New in the latest version of the Tasking Manager is the ability to select multiple tasks for validation, either by area or by user.

Depending on which editor you are using, this feature will behave differently.

In JOSM, a second OSM data layer will be created titled "Task Boundaries - Do Not Edit or Upload" and it will have uploading disabled in recent versions of JOSM. JOSM **will not download the OSM data** because it could be a very large amount of data. Instead the validator will have to use the task boundaries as a guide and download the data to the active editing layer manually.

#### Select by drawing a polygon

This option allows a validtor to draw a square around a group of tasks and check them all out at once.

Once in the editor of their choice, **the validator will have to manually download the OSM data** for task areas selected. This is to prevent downloading all of the OSM data between the selected Tasks.


#### Select By User

A list of mappers who have marked a task as done is presented. Hovering over anyone in the list will highlight the tasks they have marked as completed. The list also prensents three important pices of information about the mapper, their experience level, the number of days since they first started mapping using the Tasking Manager and the number of days since they last received feedback via validation. This allows the validator to specifically target new mappers, experienced mappers or mappers who have not had any feedback for an extended period of time.

Clicking on the "Start Validating" button will lock all the tasks completed by that mapper and allow the validator to open them in their editor of choice.

![TM multi selection][]

Once in the editor of their choice, **the validator will have to manually download the OSM data** for task areas selected. This is to prevent downloading all of the OSM data between the selected tasks.

### Finalizing Validation

Once the validator has finished the validation process either for one task or multiple tasks, they should return to the Tasking Manager and select one of the three choices that reflect the mapping of the task:

- Stop Validating - If you could not complete the validation process but must stop validating.
- Mark (all) as Valid - If the mapping is complete and accurate
- Mark (all) as Invalid - If the mapping is not complete or inaccurate.

For the last two choices the validator can and should leave a friendly, encouraging comment addressed to the mapper(s) involved and provide thanks for their contributions and feedback on their mapping. Please be considerate before marking a task as invalid. If just a few bits are missing add them yourself, explain what was missing in your comment but nevertheless mark the task as valid. New mappers will consider their completed task marked as invalid as a fairly harsh comment.




[TM overview]: /images/coordination/tasking_manager_overview.png
[TM Quick Start 1]: /images/coordination/tasking_manager_qs1.png
[TM Quick Start 2]: /images/coordination/tasking_manager_qs2.png
[TM Quick Start 3]: /images/coordination/tasking_manager_qs3.png
[TM Quick Start 4]: /images/coordination/tasking_manager_qs4.png
[TM Quick Start 5]: /images/coordination/tasking_manager_qs5.png
[TM Quick Start 6]: /images/coordination/tasking_manager_qs6.png
[TM Quick Start 7]: /images/coordination/tasking_manager_qs7.png
[TM Quick Start 8]: /images/coordination/tasking_manager_qs8.png
[TM login 1]: /images/coordination/tasking_manager_login1.png
[TM login 2]: /images/coordination/tasking_manager_login2.png
[TM login 3]: /images/coordination/tasking_manager_login3.png
[TM contribute]: /images/coordination/tasking_manager_contribute.png
[TM map tab]: /images/coordination/tasking_manager_map_tab.png
[TM unlock]: /images/coordination/tasking_manager_unlock_task.png
[TM project map]: /images/coordination/tasking_manager_project_map.png
[TM project description]: /images/coordination/tasking_manager_project_description.png
[TM comments]: /images/coordination/tasking_manager_comments.png
[TM task selection]: /images/coordination/tasking_manager_task_selection.png
[TM select for validation]: /images/coordination/tasking_manager_validation_selection.png
[TM multi selection]: /images/coordination/tasking_manager_multi_selection.png
