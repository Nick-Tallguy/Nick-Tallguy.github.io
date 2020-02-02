---
layout: doc
title: Інструменти редагування JOSM
permalink: /uk/josm/josm-tools/
lang: uk
category: josm
---

Інструменти редагування JOSM
==================

> Редакція 2019-06-09  

- TOC
{:toc}

У розділі [введення в JOSM](/uk/josm/start-josm/) ми висвітлили основні принципи креслення об'єктів в JOSM, але крім цього існує багато інших інструментів та підходів про які ми ще не розказали. 

Тут ми розглянемо деякі основні інструменти та методи, доступні для додавання об'єктів на мапу в JOSM, а в наступних розділах ми докладніше розглянемо розширені інструменти редагування.

Отримання файлу з тренувальними даними
-------------------

- Якщо ви бажаєте попрактикуватись та спробувати користуватись інструментами JOSM, завантажте файл: [tools_menu_sample.osm](/files/tools_menu_sample.osm). Запустіть JOSM та відкрийте файл. Його вміст має виглядати так:

![tools_menu_sample.osm][]

Інструменти креслення
-------------

Відкрийте маню “Інструменти”, в основному меню JOSM, там ви побачите різноманітні інструменти для креслення ліній, полігонів та редагування об’єктів на мапі.

У JOSM є кілька додаткових інструментів, щоб полегшити малювання ліній та фігур. Ці інструменти знаходяться в меню “Інструменти” в основному меню JOSM в горі.

![Tools menu][]

Для того, щоб мати можливість застосувати пункти з цього меню, вам треба спочатку виділити точку, лінію або полігон у вікні з мапою. Файл з тренувальними даними містить різноманітні елементи які підписані назвами різних інструментів. 

### Вирівнювання точок по колу  

- Спробуйте виділити один з елементів з файлу. Потім відкрийте меню “Інструменти” та оберіть пункт, назву якого має виділений вами об’єкт. Наприклад, клацніть на грубо накреслене коло, щоб виділити його.

![Align nodes in circle][]

- Далі, меню Інструменти -> Вирівняти точки по колу. Точки лінії утворять рівне коло.

Спробуйте кожен з інструментів, про які йдеться в тренувальному файлі. Нижче знаходиться опис деяких з них.

### Розрізання ліній  

Цей інструмент дозволяє розділяти лінію на дві окремі частини. Це корисно, якщо ви хочете додати різні атрибути в різні частини дороги, наприклад, позначити міст. Для того щоб скористатись цим інструментом, виділіть точку в середині лінії, там де вам потрібно її розрізати, оберіть в меню Інструменти пункт Розділити лінію і таким чином лінію буде розрізано на дві окремі лінії.


### Combine Way

This does the opposite of Split Way. To combine two lines into a single line, they must share a single point. To use this function, select both lines that you want to combine. You can select more than one object by holding the SHIFT key on your keyboard and clicking on each line. When you have selected both lines, select Combine Way from the Tools menu.

![Combine way][]


### Reverse and Combine  

If you are combining roads that have different directions, you might get this warning:

![Reverse and combine][]

If the roads are connected and go in the same direction, then choose "Reverse and Continue."


### Reverse Way

This will change the direction of the line. All lines in OSM have a direction, which is shown in JOSM by the arrows on the line. Direction doesn't usually matter, except in the case of one way roads and rivers that flow in a certain direction. In these cases you may need to reverse the way so that it goes in the correct direction.

![Way direction][]

### Simplify Way

If your line has too many points in it and you’d like to make it simpler, this will remove some of the points from a line.

![Simplify way][]


### Create a Circle

Use this tool, which will create a more perfect circle. Draw a line which represents the diameter of your circle, and then apply this tool.

![Create circle][]


### Align Nodes in Line

This function will align a series of points into a straight line.  With long lines it is best to select sections of the line to straighten.  Be careful as this does have the tendency to shift the line a little bit.

![Align nodes in line][]

### Orthogonalize Shape

This function is very useful for drawing regular shapes such as buildings (**But see also [JOSM building tools](/en/josm/josm-more-plugins/)**). After you draw an area, this function will reshape it to have square corners.

![Orthagonalize][]


### Unglue way

This tool allows you to detach nodes that are connected. It is useful when two object share a node when they should not. For example, a common mistake is for a road to share a node with the corner of a building. Of course roads don't run into buildings usually, so this is a mistake, and you can unglue the objects from one another.

![Unglue way][]

*The line and node will not actually appear separate until you move them.*

Keyboard Shortcuts
------------------

Once you start editing a lot you will realize that you waste a lot of time clicking on menus and submenus. To overcome this, JOSM has keyboard shortcuts for just about everything.

This means that instead of clicking an object and then going through a lengthy menu process, you can simply select the object and press a key on your keyboard.

All of the tools mentioned in the previous section have shortcut keys, which are listed on the Tools menu to the right of each tool name. For example, "O" is the
shortcut key to align nodes in a circle. "L" is the shortcut to align them in a line. It can take some time to learn the shortcut keys, but you will find that it saves
a lot of time in the long run.

Here are other shortcut keys (in **bold**) which are some of the most important.

1.  Activate the Select Tool - **S**
2.  Activate the Draw Tool - **A**
3.  Activate the Zoom Tool - **Z**
4.  Delete the selected object(s) - **Delete**
5.  Zoom In - **+**
6.  Zoom Out - **-**


Scale and Rotate
----------------

A common question is how to rotate a line or shape after it has been drawn.

To rotate an object, first select it. Hold **SHIFT+CTRL** on your keyboard. Click and drag the mouse to rotate.

![Rotate demo][]

To scale an object (make it bigger or smaller), follow the same process, but hold ALT+CTRL instead.

These instructions are displayed on the information bar at the bottom of JOSM:

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png