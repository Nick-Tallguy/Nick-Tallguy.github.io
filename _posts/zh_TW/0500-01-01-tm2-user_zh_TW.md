---
layout: doc
title: Tasking Manager 2
permalink: /zh_TW/coordination/tasking-manager/
lang: zh_TW
category: coordination
navigation: skip
---

# Tasking Manager 2

> Reviewed 2015-08-26  

**If the user interface of the version you use looks different from the one described here then you should consult [our version overview](/en/coordination/tm-disambiguation)**

章節索引
-------------
-  [概述：人道開放街圖小組如何使用任務分配管理系統](/zh-tw/coordination/tasking-manager/#overview-of-the-process)   
-  [語言、選項、說明連結、其他連結。您的使用者頁面——列出所有您協助過的任務以及對話訊息](/zh-tw/coordination/tasking-manager/#options-amp-links)    
-  [登入](/zh-tw/coordination/tasking-manager/#getting-started-with-the-tasking-manager)    
-  [尋找任務](/zh-tw/coordination/tasking-manager/#locating-a-project)    
-  [敘述、地圖方格、指引、貢獻、活動、任務統計資訊](/zh-tw/coordination/tasking-manager/#description)    
-  [在地圖上選擇一塊繪製區域、設定任務時限、發佈](/zh-tw/coordination/tasking-manager/#selecting-a-square-to-map)    
-  [JOSM、iD、Potlatch 2、實地調查圖（Field Papers）、Walking Papers](/zh-tw/coordination/tasking-manager/#editing-choices)    
-  [切分繪製區域](/zh-tw/coordination/tasking-manager/#splitting-a-square)    
-  [在您繪製的區域完成前發佈](/zh-tw/coordination/tasking-manager/#unlocking-a-square-before-it-is-complete)    
-  [標記您的繪製區域已完成](/zh-tw/coordination/tasking-manager/#finishing-a-square)    
-  [發送對話訊息](/zh-tw/coordination/tasking-manager/#sending-a-message-from-the-comment-box)    
-  [在電子郵件或是其他訊息中標示您的繪製區域](/zh-tw/coordination/tasking-manager/#referring-to-a-particular-square-when-sending-an-email)    
-  [即時協助—— IRC（網際網路中繼聊天，Internet Relay Chat）](/zh-tw/coordination/tasking-manager/#getting-live-help)    
-  [小撇步](/zh-tw/coordination/tasking-manager/#editing-hints-and-tips)


「人道開放街圖小組任務分配管理系統（The HOT Tasking Manager）<http://tasks.hotosm.org/> 」是一個讓地圖繪製者（「mapper」，以下簡稱圖客）可以直覺而快速地將想要繪製的區域分成多格，以便更有條理分工合作的任務工具。這個工具讓來自世界各地的圖客，能夠在共同合作同時繪製同一塊地區的時候，降低繪圖區域重疊而造成編輯衝突的風險。同時這個工具也能夠讓有實際在當地與在遠端繪製的圖客有效地共同合作。  


## 流程概述

1. 任務管理員先選出開放街圖計畫裡面需要更新的圖資區域。任務管理員首先要確保這個區域有適當的衛星或鳥瞰圖，以方便圖客可以從線上協助描繪軌跡。接下來，管理員便創建要繪製的區域範圍，並且在任務說明中敘述地圖的細節需求程度、時效警急程度、還有其他須知事項。當上述事項都確認後，任務管理員便可以公開發佈新任務，而任務的設定之後還可以再修正。  
2. 任務區域由第一位圖客認領、繪圖、再標記區塊完成。  
3. 任務區域由第二位圖客進行複查任務，確認標記完成的區塊是否符合繪製準則，檢查完後標記為「完成」。  
4. 任務的繪圖進展可從「統計數據」分頁掌握，同時如果某個任務區塊太大單個圖客畫不完，任務管理員也可以再把那個區塊切小或者是存檔待下次任務。  


## 選項與連結

任務分配管理系統預設介面為英文——要變更成其他語言，點擊上方紅色橫幅的**English**。  

想了解任務分配管理系統、人道開放街圖小組的贊助者、合作夥伴、使用說明，請點擊頁面上方的「**關於（About）**」按鈕。

當您登入後，您可以點擊自己在頁面上方的使用者名稱。在此您可以：  

- 存取你曾經繪製完成區域的任務列表  
- 進入任務分配管理系統的**訊息**（這和開放街圖裏頭的訊息發送是不同的兩個系統）  
- 登出  
- 看到所有有用任務分配管理系統參與並完成繪製區域的使用者清單。您可以點擊連結，來查看更詳細的資訊，像是他們在開放街圖的編輯歷史中完成了哪些區域。  

![Tasking Manager Username_list][]  


## 開始使用任務分配管理系統

您可以用訪客的身份來查閱任務，但是如果想要主動參與，您必須要登入任務分配管理系統。請使用自己的開放街圖使用者帳號與密碼。打開網路瀏覽器並且前往<http://tasks.hotosm.org>。您會看到這樣的頁面：  

![Tasking Manager Login][]

- 點擊「登入到開放街圖」  
- You are agreeing to allow this application some access to your OpenStreetMap account.  Click “Save Changes.”  

![Authorizing access to OSM account by the Tasking Manager][]


## Locating a project

The current list of projects may be sorted according to:  

- High priority  
- Creation date, or  
- Last update  

You can further refine your list by clicking in the **Your Projects** box, to see just the projects in which you have participated, whether you have completed a square or not. Validators will also find projects they have contributed validated squares in, by using this checkbox. You may use a free text search to locate projects that contain particular text strings, such as **Ebola** (search is not case sensitive).  

Projects are frequently referred to by their Project number, e.g., [**#711 - Ebola Outbreak, Kayes, Mali - Pre-emptive building mapping**](http://tasks.hotosm.org/project/711), and in this instance you could search on #711 to find this project.  

Click on a blue project title to see more information about that project.  

![Job description][]


## Description

Everything you need to know about the project is here! On the left is a description of the mapping project and what is required. On the right side is a grid showing the area to be mapped;  

- Mauve line normally visible in the perimeter squares of a project indicates the border of the project. This border normally follows the available imagery, so may appear an unusual shape. Although mapping may be completed outside this border, it is not a requirement and will not be considered by validators.  
- Pink areas of the map indicate higher priority areas,  
- Yellow grid squares have been completed,  
- A yellow border indicates the square is being worked on now,  
- Green squares have been completed and “validated”, and  
- The remaining squares still need to be completed, or have previously been invalidated (invalidated squares are a darker colour).  


### Instructions tab
This shows what is required in the mapping task. Tasks range in difficulty, suitable for beginners, intermediate and advanced mappers - and the instructions will explain this. Make sure you read and understand this section. There are many styles of mapping project, for many different purposes. Some common project activities include:  

- Road networks: Used by people on the ground to load data into hand held navigation tools, and to work out how to access remote areas  
- Mapping villages: Often used to identify places where people live and may be impacted  
- Mapping buildings: Used for damage assessments or contact tracing with diseases. Also used for population estimates.  
- Mapping rivers, walls and other features  

Not all areas of the world are similar to your own, so specific tagging advice may be provided. For example, Africa's road network is very different to typical American or European highway systems.  

There will be a section indicating the **Changeset comment** you should make sure appears in your editing programme when uploading/saving your changes, together with the **source** information you may (depending on your editing software) need to copy & paste to the source field on making changes.  

Sometimes, task specific imagery may be available - you may need to agree to a license in order to access it. Instructions usually will indicate the easiest way to load this into editors such as JOSM or iD.  

When checking a square marked as complete, validators will expect that the requirements from the instructions tab have all been completed. You may find completing an entire tile is quite difficult - guidance below is available around unlocking tiles; as well as providing useful feedback for the next mapper.  


### Activity tab  

This shows activity that has taken place within the task in chronological order.  


### Stats tab  

This contains a graph of progress & other information.  

The Stats tab also contains a list of mappers who have completed at least one square within the project - to see which squares they have completed, you can *hover your mouse cursor* over a username, and the squares they have completed will become the only ones visible (**use this to locate the squares you have previously completed**).  

Once you have located the square by hovering your mouse over the user name, you may click on the square to see the comments that have been left by mappers and validators for the square, which is a useful way of obtaining feedback from validators.  


### Contribute tab  

Click when you are ready to start mapping. You may choose your square to work on by selecting it from the map, or by clicking on the "Take a Task at random" option.  

![Picking a task][]  


## Selecting a square to map  

![Assigned task square][]  

Having selected your square you will be able to see if there is any history for this square, such as a mapper starting to map, but realizing they do not have time to complete the square.  

If you accidentally select a square, you can release it again by clicking on the blue close control - **x** - shown in the screenshot above.  

Clicking on the **Start Mapping** button locks the square so that no other mapper can select it until it is released again, and starts a 2 hour (120 minute) countdown timer, at the end of which time the square is automatically released. It is good practice to check on your countdown timer on a regular basis - it is easy to become engrossed in your mapping and not realise your square has been released, and has now been selected by another mapper who has started mapping it too. This can lead to conflicts and problems.  


### Editing choices

Different options for editing are presented to you as soon as you lock a square.

![Editing options][]  


#### Edit with JOSM  

Start JOSM before using this link and it will automatically load the existing OSM data into JOSM.  

>  1. 'Enable remote control' needs to be ticked - found under **Edit / Preferences / Remote Control**
>  2. If you have previously installed the plug-in 'continuosDownload' it is best to disable it (untick 'Download OSM Data continuously' under the **File** menu in JOSM).  
>  3. If JOSM does not load the imagary automatically as well, it can normally be found under the **Imagery** menu. [More info on imagery here ](/en/josm/more-about-josm/#add-imagery)  


#### iD editor  

Select this to automatically start a new tab or window of your web browser, with existing OSM data loaded. The Internet Explorer web browser does not currently support iD and it will load Potlatch 2 instead. Your original tab or window with the Task Manager will still be present.  


#### Potlatch 2  

Editor will load in a new window or tab. Potlatch will not automatically display the task bounding box, but you can do so by following this procedure:  

1. In the Tasking Manager, select a square and click Start Mapping to lock it  
2. In the Tasking Manager, select Edit with JOSM (if a window appears saying "JOSM remote control did not respond..." just click OK).  
3. Below the Edit with JOSM button, text will say "Tip: Download the following .gpx file...". Download the .gpx file, and note where it is saved.  
4. In the Tasking Manager, change from Edit with JOSM to Edit with Potlatch 2. Potlatch should open in a new tab.  
5. In Potlatch, select Background, then Vector File...  
6. In the Load Vector File window, at the bottom next to File, click Open, and navigate to the .gpx file you just downloaded  
7. In the Load Vector File window, make sure the box is checked in the Show column for the .gpx file, then close the window  
8. Potlatch should now display the boundary as a square (probably cyan). Note that Potlatch will still load data outside the boundary.  


#### Walking Papers / Field Papers  

For use only when you are involved in a project where a local mapper has carried out a ground survey and marked a printed map with information such as road names. This map can be rescanned & used as a background image for a remote or local mapper to read the information & update the OpenStreeetMap data [Field papers section of LearnOSM](/en/mobile-mapping/field-papers/).  


### Splitting a square  

Having selected your square and inspected it with the imagery in place, you may realise that there is far too much detail required for mapping. An example of this may be tracing buildings in dense urban areas, or locating small villages in large areas. As guidance, where it isn't possible for one person to complete within the 2 hour time limit you can often split the task into 4 smaller areas. *Use with caution* - if/when squares are split too small it is difficult to judge what type of highway is involved, and to identify other features.  

> Be aware that other useful comments about the work previously completed will no longer be available.


### Unlocking a square before it is complete

If you start working on a square, but cannot complete it for some reason, it is best practice to leave a comment against the square. Simply detail what remains and choose **unlock**. Make sure your comments are relevant and aimed to help out the next mapper.  

For example:  

    Almost complete, small village top left 
    in the square to be traced though


### Finishing a square

It is very difficult to be completely certain that you have completed a square - however it is acceptable to mark the square as complete if you are fairly sure - the contents will be checked by another mapper when validating, and any small additions can be made then.  

For the process to work most effectively, mappers need to mark squares as complete rather than leaving them for several other 'not sure' mappers to spend time also checking them.  

When you have finished editing and think that the square is complete, save any remaining edits with your editing programme, then return to the Tasking Manager.  

+ Add comments to the box detailing what you achieved and more importantly, what you are not certain of. For example; "Complete as far as I can see, but there is cloud covering the top right corner of the square & I cannot see to trace this area".  
+ Click on the "Mark Task as Done" button, and your work is ready for review.  


### Sending a message from the comment box

When leaving a comment against a square, you can have the comment sent as a message to a named mapper. Much like Twitter, simply use an @ followed by the username. This will send a message to the user containing the comments from this box, plus a link to the square that the comments box relates to.  

For example:  

    @Tallguy nice work tracing the building  
    details here. You missed a small group  
    of houses on the upper left of the tile,  
    I added a few in, but some still remain.  

This is particularly useful when validating or adding on another's previous work - you can provide feedback, thanks or more.  

+ You may wish to provide a link to a site which may help the mapper, such as <http://learnosm.org/en/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ Be aware that many people from around the world will be participating, so prefer simple, clear language. If you come across comments in other languages, tools such as google translate are reasonable effective.


### Referring to a particular square when sending an email  

If you need to send a message, such as an email or an IRC message, and you are querying something concerning a particular square within a project (perhaps you need help identifying something from the satellite imagery):  

1. Click on the square concerned  
2. Click on the address bar in your web browser, which should show something similar to 'http://tasks.hotosm.org/project/713#task/259'  
3. Highlight with the mouse all of the text in the address bar, or use the shortcut keys **Ctrl+A** to select all the text, then use shortcut keys **Ctrl+C** to copy the text  
4. In your email, IRC message, or other message,  
    - either, mouse right click & paste,  
    - or shortcut keys **Ctrl+V**, to paste the link into the message. 


### Getting live help 

![IRC_help][] 

From the tasking manager;  
1. Click on **OSM HOT IRC Channel #hot**  
2. Enter a username (your OSM username?), or use the preset characters  
3. At the bottom of the dropdown list select **hot**  

![IRC using][]  

- To the right of the screen is a list of users that are online now.  
- Type your message in the box at the bottom left of the screen (this is sometimes temporarily obscured by other text, but this will disappear as you select the box.  
- To direct a message to a particular individual, include their username from the list on the right within your message. Type, then use the return key to submit your comment. The system is 'live' so wait for an answer - your username will often be used in the reply to show you the comment is directed to you. You will normally receive a reply within a few seconds, so please wait.  
- An alternative simple system can be found at [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Further info on using IRC with OpenStreetMap may be found at [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Alternatively use an IRC client of your choice (Server=irc.oftc.net, and channel=#hot)  


### Editing hints and tips  

By now you have a good understanding of what the Tasking Manager is, and some of the various functions it supports. Unlike normal editing, this tool is often used for time critical projects with many participants - this may be a little bit different to what you are used to.  

**Some general advice to heed when working in this tool:**  

* Avoid mapping far outside of your square - other mappers may be working in that area, resulting in duplicated efforts. It's OK to map objects such as buildings overlapping a boundary, but avoid going much further - upload immediatly after mapping something at the border.  
* Extend roads, streams, or other features slightly over the boundaries - this lets the next mapper pick up where you left off, but upload as soon as you finish editing it.  
* If you are in doubt about what a particular feature is, use the comment section to ask questions or check the wiki.  
* If you make a serious mistake - for example, deleting a major feature or relation - use IRC or the comment box to ask other mappers to help in reverting this for you. Try to include the changeset, or a description of what happened. Being a collaborative task, many other mappers are here to help - it's important to remember everyone makes mistakes sometimes.  
* Don't hesitate to ask for feedback - mappers validating your work can be terse or to the point, but if they know it's OK to engage in a dialog with you, the outcome is often a lot better for all involved. It can be difficult to communicate in another language, and it's easy to appear abrupt when you have to translate as well as pass a message in a language you are not fluent in.  
* You must not validate your own work - a second pair of eyes will always lead to better quality mapping.  
* Don't worry if other mappers are terse when validating your work - like you, they just want to ensure all of the data is mapped accurately. Feedback is invariably about the remaining work, not criticism of your efforts to date.  


[Tasking Manager Login]: /images/coordination/tasking_manager_image01.png
[Tasking Manager Username_list]: /images/coordination/tasking_manager_image02.png
[Authorizing access to OSM account by the Tasking Manager]: /images/coordination/tasking_manager_image03.png
[Job description]: /images/coordination/tasking_manager_image04.png
[Picking a task]: /images/coordination/tasking_manager_image05.png
[Assigned task square]: /images/coordination/tasking_manager_image06.png
[Editing options]: /images/coordination/tasking_manager_image07.png
[IRC_help]: /images/coordination/tasking_manager_image08.png
[IRC using]: /images/coordination/tasking_manager_image09.png
[Tasking Manager About]: /images/coordination/tasking_manager_image011.png
[Tasking Manager Languages]: /images/coordination/tasking_manager_image012.png