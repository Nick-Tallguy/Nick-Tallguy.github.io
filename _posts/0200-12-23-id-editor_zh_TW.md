---
layout: doc
title: iD 編輯器
permalink: /zh_TW/beginner/id-editor/
lang: zh_TW
category: beginner
---

iD 編輯器
=============

> Reviewed 2019-06-10

你要用任務管理器為 HOT 或是 MissingMaps 等專案開始畫地圖嗎？請見我們的[HOT-技巧區](/en/hot-tips/)。  

- TOC
{:toc}

iD 編輯器是預設的，瀏覽器上的開放街圖編輯器。iD 速度快而且簡單易用，而且允許依據不同的資料來源，像是衛星或是空照影像，GPS 軌跡，Field Papers 或是 Mapillary。  

使用 iD 編輯器編輯一些小的或簡單的變動，用不到像是 JOSM (更進階的繪圖編輯器)的進階功能，是相當實用的方式。這一章會示範用 iD 做基本的編輯。  

啟動 iD 編輯器
----------------------

-	iD 編輯器需要時常連接至網際網路。  
-⇥開放網頁瀏覽器，然後連到開放街圖網站  [http://www.openstreetmap.org](http://www.openstreetmap.org) 。  
- 使用你的開放街圖帳號**登入**  
- 移動和縮放到地圖上你想編輯的地方。你可以按住滑鼠左鍵移動，拖拉到你想去的地方。  
- 點選**編輯**旁邊的小箭頭，接著點**以 iD (瀏覽器內編輯) 編輯**。  

![image1][]


iD 編輯器使用者界面
-------------------------
![image2][]

1. **編輯圖徵面板：**這個面板會顯示地圖上被選擇物件的標籤。  
	您可以透過此界面新増或修改標籤。  
2. **工具：**這個面板顯示基本的編輯工具：  
    繪製點 (節點)，*快速鍵* **1** ![image3][]{: height="24px"}  
    繪製線 (路徑)，*快速鍵* **2** ![image4][]{: height="24px"}  
    繪製形狀 (多邊形)，*快速鍵* **3** ![image5][]{: height="24px"}  
    復原，*快速鍵* **Ctrl+z** ![image6][]{: height="24px"}  
    取消復原，*快速鍵* **Ctrl+y** ![image7][]{: height="24px"}  
    Save changes, *shortcut keys* **Ctrl+s** ![image8][]{: height="32px"}  
3. **地圖面板：**這個面板顯示多個設定選項：  
    放大，*快速鍵* **+** ![image9][]{: height="24px"}  
    縮小，*快速鍵* **-** ![image10][]{: height="24px"}  
    顯示你的位置 ![image11][]{: height="24px"}  
    背景圖像設定，*快速鍵* **b** ![image12][]{: height="24px"}  
    地圖圖資，*快速鍵* **f** ![Map Data][]{: height="24px"}  
    Issues, *shortcut key* **i** ![Issues][]{: height="24px"}  
    開啟說明文件，*快速鍵* **h** ![image13][]{: height="24px"}  
4. **資訊面板：** 這個面板顯示多項資訊，像是比例尺和那些使用者在這一帶貢獻。  

## Configuring the Background Layer

點選**背景圖像設定**按鈕，或是使用*快速鍵* **b** ![image14][]{: height="24px"}  
![image15][]  
You can **change the background layer** based on your desired tile provider (the default is Bing Aerial Imagery).  

你可以按**客製化**新增你自己的地圖圖磚。舉例來說，如果你想要**新增 Field Paper** [^fieldpaper]，點選**客製化**，接著按放大鏡 (搜尋) 圖示開啟視窗 :-  
![image17][]   
然後輸入你的 **FieldPaper snapshot URL**，就像這樣子：<http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
要**顯示你電腦中的 GPS 軌跡** (GPX 格式)，拖拉你的 GPS 檔案到 iD 編輯器裡。  
要啟用 **開放街圖 GPS 軌跡**，請點選方框。下面的圖片中，公共的 GPS 軌跡用不同顏色顯示，表示旅行的方向。  
![osm gps traces][]  
To change the **appearance of the imagery** click **Display Options**.  
![DisplayOptions][]  
If there is [imagery offset](/en/josm/aerial-imagery), you can **correct the imagery offset** by clicking **Adjust imagery offset**.  
![image18][]  

- 按位移按鈕移動影像。按重設鍵回到原先的位置。![image20][]  

以 iD 作基本編輯  
----------------------  

### 新增節點  

要新增新的點，請按**點**按鈕。![image3][]{: height="24px"}  

- 你的滑鼠指標會變成加號 (+)。現在點你想標注的位置，例如，如果你知道這一區的醫院在那裡，點選醫院建築的位置。  
![image21][]  
- 注意你加了新點了。同時在左邊面板會變成能夠填寫物件詳細資訊的表格型式。點**醫院用地**能夠將節點標示為醫院。  
![image22][]  
- 你可以用表格來填寫你的節點詳細資訊。你可以填寫醫院名稱、地址、和/或其他附加資訊。注意每一個圖徵會有不同選項，端示選了圖徵面板中那個標籤。  
- If you make a mistake, such as a wrong location, you can move your point to a new location by holding the left mouse button on your point and dragging it. Or, if you want to delete your point, click the left mouse button on the point, activate the context menu by clicking with the right mouse button and then click the button which looks like a trashcan. ![PointToolDelete][]{: height="24px"}  
iD 編輯器的「點」其他是上面有特定「標籤』的獨立「節點」。  

### 繪製線條  

要新增線段，點**線**按鈕。![image4][]{: height="24px"}  

- 你的滑鼠指標會變成加號 (+)。找一個還未被畫上去的道路並描繪，點道路線段開始的地方然後開始描，接著按其他點延伸。按兩下結速繪製流程，注意左邊的資訊面板。  
![image24][]  
- 就像是加點，選擇對線段最適合的標籤。  
- 你可以藉由用左鍵按線段的點，來拖拉線段的點。  
- When you click your left mouse button on an individual point (node) on the line and either click on the right mouse button or hit the space bar to activate the context menu, you will see these tools:  
  - Continue line from this point ![PointToolContinue][]{: height="24px"}  
  - Disconnect lines at this point ![PointToolDisconnect][]{: height="24px"}  
  - Split a line into two lines at this point. ![PointToolSplit][]{: height="24px"}  
  - Delete point from line. ![PointToolDelete][]{: height="24px"}  
- 當你對著線段按滑鼠左鍵(但不是在點上)，你會看到這些工具：  
  -   Create a circle from a line (only active if the line is closed) ![LineToolCircularize][]{: height="24px"}  
  -   Disconnect line from other objects ![LineToolDisconnect][]{: height="24px"}  
  -   Move line ![LineToolMove][]{: height="24px"}  
  -   Square all corners ![LineToolSquare][]{: height="24px"}  
  -   Reflect the line across its short axis ![LineToolReflectShort][]{: height="24px"}  
  -   Reflect the line across its long axis ![LineToolReflectLong][]{: height="24px"}  
  -   Reverse line direction (good for rivers & one-way streets) ![LineToolReverse][]{: height="24px"}  
  -   Rotate the line around its centre ![LineToolRotate][]{: height="24px"}  
  -   Straighten the line ![LineToolStraighten][]{: height="24px"}  
  -   Delete line. ![LineToolDelete][]{: height="24px"}  

iD 編輯器的「線」通常是上面有標籤的「線段」。

>關於**刪除**的特別記錄。一般來說你如果你能改進，應該避免刪除別人畫的部分。你可以刪除你自己造成的錯誤，但如果可以改進，你應該試著*調整*別人畫的物件。這樣一來能夠在OSM資料庫保存物件的歷史，尊重其他的圖客。如果你真的覺得應該刪除，請先詢問原先的繪製者，或是在OSM的郵件論壇先詢問。

### 繪製形狀 (多邊形)

要增加新的多重多邊形，請點選**區域**按鈕。![image34][]{: height="24px"}  

- 你滑鼠指標會變成加號(+)。試著用影像當參考描繪建築。  
你會注意到形狀的顏色會隨著添加的屬性而會變。  
![image35][]  
- 當你按滑鼠右鍵時，這些工具在你選擇形狀和啟用內容選單時可以用，就像你點線段時類似。  

*多邊形*在 iD 編輯器裡實際上是有標籤的「封閉線段」。

### 繪製多重多邊形

有時候你需要畫不只有外部輪廓，還有內部輪廓的情形。你可以想到房子裡有內院，或者是湖中有島嶼。*不需要畫所有路徑變成單一線段*，這樣你的內部輪廓與外部輪廓斷絕。請分開畫這些輪廓，並且只在外部輪廓加標籤，接著選取所有輪廓並且按 **c**，諤所有東西合併為多重多邊形。

![創建多重多邊形][]

當你選擇新創建的多重多邊形輪廓的任何部分時，你可以在左側看到多重多邊形歸屬狀況

![多重多邊形部分][]

## Issues

The editor performs a number of checks as soon as you edit something. If it thinks that what you did might cause problems it notifies you in the issues tab. Whenever the issues icon on the right carries either a yellow (for warnings) or red (for errors) dot you should open the tab and see what it reports. This information is also displayed in the object feature tab on the left if the relevant object is selected. You are also warned that there are unresolved issues when you upload your data. 

![Issue][] ![Error][]

The lower part of the issues tab show the available rules and allows you to disable them individually though this is not recommended.

儲存您的編輯
--------------------

當 (如果) 你想要儲存你的編輯到開放街圖，請點選**儲存**按鈕。左邊資訊面版會顯示上傳面版。  
![image36][]  

-輸入有關你編輯的註解，接著點**儲存**。  

> 如果你編輯的圖徵 (點、線或面) 同時間別人也有編輯的話，會出現無法上傳的警告訊息，需要解決**衝突**－選擇保留那位的編輯&上傳你的變動。*解決衝突常包括接受別人的編輯，通常你會希望回復問題物件，之後再編輯 (**下次編輯後趕快儲存，嘗試避免再次衝突！**)*

額外資訊及自定義標籤
---------------------------------------

When you are editing an object, you will see an "Add field" menu at the bottom of the attribute panel. You can add various additional information by selecting one of the entries (layer, elevation, wikipedia etc.).  

![AdditionalTags][]

Or you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- 這樣會顯示所有跟圖徵相關的標籤。  
![image45][]  
- 點選加號 (+) 增加鍵和值，或是點垃圾筒圖示刪除標籤。

更多教學
------------------

[我們外部的資源頁面](/zh_TW/resources/#iD) 提供來自不同來源的數倍影片教學。

iD vs JOSM
---------------  

**iD 適合...**

- 當你在操作簡單的編輯  
- 當你的網路速度夠快，能夠載入背景影像和儲存編輯  
- 當你想要遵循一致和簡單的標籤規則  
- 當你使用的電腦被限制無法安裝應用程式

**JOSM是更好的選擇...**

- 當你在增加許多棟建築 (請參考建築工具外掛)
- 當你編輯多個已存在的多邊形或線段。
- 當你的網路連線不穩或是處於離線狀態
- 當你使用特定的標籤規則 (或是客製化的預設組合)

[^fieldpaper]：關於 Field Papers，手冊中有 [section of LearnOSM](/en/mobile-mapping/field-papers/) 的章節。



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
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[DisplayOptions]: /images/beginner/id-editor_display-options.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image24]: /images/beginner/id-editor_image24.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[Issue]: /images/beginner/id-editor_issue.png
[Error]: /images/beginner/id-editor_error.png
[image36]: /images/beginner/id-editor_image36.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[創建多重多邊形]: /images/beginner/id-editor_create_multipolygon.png
[多重多邊形部分]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png