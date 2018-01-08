---
layout: doc
заголовок: пресети JOSM
постійне покликання: /en/josm/josm-presets/
мова: англійська
категорія: josm
---

Пресети JOSM
============

> Цей путівник може бути завантажений як [josm-presets_en.odt](/files/josm-presets_en.odt) or [josm-presets_en.pdf](/files/josm-presets_en.pdf)  
> Переглянуто 2016-09-17  

Якщо ви вже протягом тривалого часу використовуєте JOSM , то зараз ви вже щось розумієте про теги і пресети. Кожен об'єкт визначається за двома речима - по-перше, це геометрія (точка, лінія чи форма а також їх локація), і по-друге, це атрибути, які йдуть у формі з тегами.   

Коли ви малюєте об'єкт і вибираєте його з меню Пресетів, правильні теги автоматично додаються до об'єкту.   

Якщо вам подобається використовувати пресети, що трапляється, коли ви хочете додати теги, яких немає у меню, або коли ви хочете налаштувати ваші власні теги?   

У такому випадку ви можете додати користувацькі пункти до пресетів. У цьому розділі ми навчимося це робити. У [наступному розділі](/en/editing/creating-presets), ми подивимося, як самостійно створити користувацькі пресети.   


Додати пресет
-----------

The menus and submenus that make up the Presets menu are stored in files which describe how to create the menus and forms that come up when you click on a preset, and how to define what tags are added to an object based on how the form is filled out.  

Presets files can either be added from an online archive, or saved on your computer locally and added into JOSM.  

* To add a new entry to the Presets menu, open JOSM and go to Edit->Preferences.  
* Click on the third tab down, which looks like a grid covering the planet.  

![tagging presets tab][]

* At the top, click on "Tagging Presets."  

![tagging presets menu][]

* Add a presets file from the internet by selecting one in the list on 	the left, and clicking on the blue arrow. In this example, we will add the preset named "New Tags"  

![example presets][]

* You will see a new item appear in the list on the right.  
* Click OK.  
* You will need to restart JOSM.  
* Create a new layer and add a point or shape.  
* Go to the Presets menu. You will see an additional entry at the bottom which expands into several options not covered by the standard JOSM installation.  

![additional tags preset][]

* Most presets cover fairly specific use cases so browse the list if you find one which matches your interests.  

* If you have been given a custom presets file, you can add it to the menu in a similar way. Simply return to the Preferences menu, and instead of selecting from the list, click on the (+) button in the upper right.  

![plus button][]

* Locate your file and give it a name if you like.  
* Click OK.  


[tagging presets tab]: /images/josm/tagging-presets-tab.png
[tagging presets menu]: /images/josm/tagging-presets-menu.png
[example presets]: /images/josm/example-presets2.png
[additional tags preset]: /images/josm/new-tags-preset.png
[plus button]: /images/josm/plus-button.png

