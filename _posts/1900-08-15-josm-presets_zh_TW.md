---
layout: doc
title: JOSM 預設組合
permalink: /zh_TW/josm/josm-presets/
lang: zh_TW
category: josm
---

JOSM 預設組合
============

> 此指南能以  [josm-presets_zh_TW.odt](/files/josm-presets_zh_TW.odt) 或 [josm-presets_zh_TW.pdf](/files/josm-presets_zh_TW.pdf) 下載  
> 審閲於 2016-09-17  

如果你已經使用 JOSM 一段時間的話，你現在應該懂一點標籤和預設組合。每一個物件由兩個東西定議－第一個是幾何 (無論是一個點、線段或是形狀，以及其位置)，第二個就是標籤所定義的屬性。  

當你繪製物件和選擇預設組合選單，正確的標籤會自動套用到選取的物件。  

如果你喜歡使用預設組合，假若你想加的標籤在選單中找不到，或是你想要加你自已的客製化標籤？  

在上述的情境中，你可以將客製選單項目加到預設組合裡。在這一章節我們會看到要怎麼做到這一點。而[接下來章節](/zh-tw/editing/creating-presets)，我們會涵蓋如何自行創建你的客製化預設組合。  


增加預設組合
-----------

預設組合選單由選單和次選單組合，使用檔案來描述怎麼創建選單，和點選預設組合後出現的表單，還有依據如何填寫表單，來定義物件要加上那些標籤。  

預設組合檔案可以由線上檔案存增加，或是儲存到電腦裡，之後加到 JOSM。  

* 要在預設組合選單加新的項目，開啟 JOSM 進入編輯->設定。  
* 點第三個頁籤，長得像覆蓋整個地球的網格。  

![tagging presets tab][]

* 在最上面，點選「預設組合標籤」。  

![tagging presets menu][]

* Add a presets file from the internet by selecting one in the list on 	the left, and clicking on the blue arrow. In this example, we will add the preset named "New Tags"  

![example presets][]

* 你會看到新的項目出現在清單的右側。  
* 點選 OK。  
* 你需要重新啟動 JOSM。  
* 創建新圖層和新增點或形狀。  
* Go to the Presets menu. You will see an additional entry at the bottom which expands into several options not covered by the standard JOSM installation.  

![additional tags preset][]

* Most presets cover fairly specific use cases so browse the list if you find one which matches your interests.  

* 如果你有自己的客製化預設組合檔案，你可以用類似的方法加到選單裡。只要回到設定選單，不用從選單挑選，而是在右上部按 (+) 按鈕。  

![plus button][]

* 找到你的檔案，如果需要也可以取名。  
* 點選 OK。  


[tagging presets tab]: /images/josm/tagging-presets-tab.png
[tagging presets menu]: /images/josm/tagging-presets-menu.png
[example presets]: /images/josm/example-presets2.png
[additional tags preset]: /images/josm/new-tags-preset.png
[plus button]: /images/josm/plus-button.png

