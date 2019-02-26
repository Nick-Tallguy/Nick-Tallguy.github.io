---
layout: doc
title: Editační nástroje v JOSM
permalink: /cs/josm/josm-tools/
lang: cs
category: josm
---

Editační nástroje v JOSM
==================

> Tento návod můžete stáhnout jako [josm_josm-tools_en.odt](/files/josm_josm-tools_en.odt) nebo [josm_josm-tools_en.pdf](/files/josm_josm-tools_en.pdf)  
> Zkontrolováno 2017-06-09  

- Obsah
{:toc}

V [Začínáme s JOSM](/cs/josm/start-josm/) jsme si ukázali základy kreslení v JOSM, ale existuje mnoho nástrojů a technik, které jsme si nepředstavili.

V této kapitole se podíváme na některé základní nástroje a techniky na kreslení v JOSM a v následujících kapitolách půjdeme více do hloubky k pokročilejším nástrojům.

Stáhněme si ukázkový soubor
-------------------

- If you'd like to follow along and practice using JOSM tools, download [tools_menu_sample.osm](/files/tools_menu_sample.osm). Start JOSM and open the file. It should look like this:

![tools_menu_sample.osm][]

Drawing tools
-------------

If you click on the "Tools" menu at the top of JOSM, you will see that there are numerous functions which can aid you in drawing lines and shapes, and editing the objects on the map.

JOSM has some additional tools to make it easier to draw lines and shapes. These tools are found in the “Tools” menu at the top of JOSM.

![Tools menu][]

In order to apply the functions in this menu, you must first select a point, line or shape in the map window. The sample file contains various elements that are labelled with the names of different tools on the menu.

### Aligning nodes in a circle  

- Try selecting one of the elements in the file. Then go to the Tools menu and click on the function which is identified next to the feature you have selected. For example, click on the badly drawn circle to select it.

![Align nodes in circle][]

- Next, go to Tools->Align Nodes in Circle. The badly drawn circle will become more circular.

Experiment with each of the tools using this sample file. A description of some of the tools is provided below.

### Split Way  

This allows you to divide a line into two separate lines. This is useful if you want to add different attributes to different parts of a road, such as a bridge. To use this function, select a point in the middle of the line that you want to split, select Split Way from the Tools menu, and your line should be split in two.


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

Tato funkce zarovná řadu bodů do přímky. Při dlouhých čarách je nejlepší vybrat části čáry, kterou chcete narovnat. Buďte opatrní, neboť to má tendenci k malému posunu linky.

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

Jakmile budete velmi často pracovat, uvědomíte si, že ztrácíte mnoho času kliknutím na nabídky a podnabídky. Abyste to překonali, JOSM má klávesové zkratky pro téměř všechno.

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