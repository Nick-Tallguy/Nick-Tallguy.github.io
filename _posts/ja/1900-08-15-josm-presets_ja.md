---
layout: doc
title: JOSMプリセット
permalink: /ja/josm/josm-presets/
lang: ja
category: josm
---

JOSMプリセット
============

> Reviewed 2016-09-17  

If you've been using JOSM for long, by now you understand a bit about tags and presets. Every object is defined by two things - first, its geometry (whether it's a point, line, or shape and its location), and second, its attributes which come in the form of tags.  

When you draw an object and select from the Presets menu, the correct tags are automatically applied to the object.  

If you like using presets, what happens when you want to add tags that are not contained in the menu, or when you want to customize your own tags?  

In this case, you can add custom menu items to the Presets. In this section we will see how to do this. In the [following chapter](/en/josm/creating-presets), we will cover how to create custom presets files of your own.  


Add Presets
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

