---
layout: doc
title: JOSM ဆော့ဖ်ဝဲလ်ကိုစတင်လေ့လာခြင်း
permalink: /my/josm/start-josm/
lang: my
category: josm
published: true
---

JOSM ဆော့ဖ်ဝဲလ်ကိုစတင်လေ့လာခြင်း
=============================


How to download and install JOSM, the Java OpenStreetMap editor, change some of the settings, open a sample map and learn some of the basic operations of the software. Remember in the introduction chapter when we asked you to draw a map of your town or village? We will conclude this chapter by drawing your map again, this time digitally. After this you should have a good understanding of how to draw maps in JOSM.

JOSM ဆော့ဖ်ဝဲလ်ကိုရယူခြင်း
-------------

-   If you don’t have JOSM already, or want the newest version, open your web browser.
-   In the address bar at the top of the window, enter the following text and press Enter: [josm.openstreetmap.de](http://josm.openstreetmap.de)
-   You can also find the JOSM website by searching the internet for “JOSM”.
-   The website should look something like this:

    ![JOSM website][]

-   If you have Windows installed on your computer, click “Windows Installer” to download JOSM.

    ![Windows installer][]

-   If you have a different operating system, click on the link for your system. Your download should begin. In this chapter we will assume that you are using Windows, but the instructions are similar for other operating systems.

ဆော့ဖ်ဝဲလ်အသုံးပြုရန်ထည့်သွင်းခြင်း
------------

>  You may have problems installing JOSM if Java is not already installed on your computer. If you have problems in this section, try downloading and installing Java. You can download it here: <http://www.java.com/en/download/>
>
>  Mac users may have old versions of Java. Please see <http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation> for options for OSX 10.6 and 10.7.3+

-   Find the JOSM install file on your computer. Double-click it to begin setup.
-   Click ‘OK’, ‘Next’, ‘I Agree’, and ‘Install’. When the installation is complete, click ‘Finish’ to launch JOSM for the first time. Later, when you want to start JOSM, you can do so by clicking on the Start Menu in the lower left corner of your computer, and clicking the program JOSM.
-   You may see a window pop up that asks if you want to update the software.  You don’t need to update it since it is new.  Press the button that says “Cancel.”  If you don’t ever want to see this message again, check the box at the bottom before pressing “Cancel.”
-   When JOSM starts, it will look something like this:

    ![JOSM splash page][]

ဆော့ဖ်ဝဲလ်အတွင်း ရွေးချယ်မှုများ
----------------

There are many different settings that you can customize in JOSM.  One setting that you may want to adjust is the language. JOSM has been translated into numerous languages, and you may prefer to work in a different one.

-   To access the Preferences window, click Edit -> Preferences.

    ![Preferences window][]

-   On the left side, click the language tab.
-   Choose your language in the dropdown box next to the word “Language”.

    ![language][]

-   Click OK.
-   You need to restart JOSM to save your settings. Choose the respective option from the message box.

မြေပုံဆွဲမှု အခြေခံများကိုလေ့လာခြင်း
-----------------------------

-   Now let’s open up a sample OSM file which we will use to learn the basic ways to draw maps with JOSM. Note that this map is not real, in that it is not a real map of a real place, so we will not save it on OpenStreetMap.
-   Download the file here: [sample.osm](/files/sample.osm)
-   Now let’s open the sample map file in JOSM. Click the “Open” button in the upper left.

    ![Open file][]

-   Find the file **sample.osm**. It is probably in your Downloads folder, unless you saved it somewhere else. Click on it, and then click “Open”.
-   You should now see a sample map that looks like this:

    ![Sample file][]

-   You will use these data in order to try various editing techniques. _You must however never upload these fictitious data to the database._

### အခြေခံလုပ်ဆောင်ချက်များ

-   To move the map left or right, up or down, hold your right mouse button down, and move your mouse.
-   There are several ways to zoom in and out of the map. If you have a mouse, you can use your scroll wheel to zoom in and out. If you are using a laptop and don’t have a mouse, you can zoom in and out using the scale bar in the upper left of the map window. Drag the bar left and right by holding your left mouse down and moving the bar left or right with your mouse.

    ![Scale bar][]

-   Look at the sample map. There a few different types of objects here. There is a river, a forest, some buildings, several roads, and a couple of shops. To select an object, click on it with your left mouse button.

### အမှတ်၊ မျဉ်းကြောင်းနှင့် ပုံသဏ္ဍာန်များ

-   As you click different objects on the sample map, notice that there are three different types of objects on the map. There are points, lines, and shapes.
-   Points are a single location, represented by symbols. On this sample map, there are two points, a shoe shop and a supermarket. The shoe shop is represented by a shoe symbol, and the market is represented by a shopping cart.
-   There are several lines on the map as well, which represent roads. If you look closely you will see that within the lines, there are points as well. These points don’t have any symbols or other information associated with them, but they help to define where the line is located.
-   Lastly, there are numerous shapes on the sample map, representing different places - a forest, a river, a park, and buildings. A shape is used to represent an area, like a field or a building. A shape is exactly like a line - the only difference is that the line begins at the same point where it ends.

> အမှတ်၊ မျဉ်းကြောင်းနှင့် ပုံသဏ္ဍာန် ဟူသောအခြေခံအမျိုးအစား ၃ မျိုးသာပါဝင်သဖြင့် 
> မှတ်ရလွယ်ကူစေသည်။ OpenStreetMap တွင် 
> ဝေါဟာရများသီးသန့်ခေါ်ဝေါ်သုံးစွဲပြီး အမှတ်ကို **nodes**၊
> မျဉ်းကြောင်းများကို **ways** ၊ ပုံသဏ္ဍာန်ကို **closed way**
> ဟုသတ်မှတ်သည်။

-   You may notice that when you select an object, a list appears to the right of the map in a window called “Properties”. These are known as tags. Tags are information that is tied to a point, line or shape that describes what it is. We’ll learn more about tags in a later chapter. For now all you need to know is that this information helps describe whether our object is a forest, a river, a building, or something else.
-   Think about drawing a map by hand, and how you are also drawing points, lines, and shapes. What other places are best represented by points? Lines? Shapes?

### အရာဝတ္ထုများကိုနေရာရွှေ့ခြင်း

-   Select the forest on the left side of the map. Be sure to click on the line around the forest, not one of the points on the line. Now hold your left mouse button down and drag your mouse. You should be able to move the forest to a new location on the map.
-   Click on one of the points on the line around the forest. Hold your left mouse button down and drag your mouse. You should be able to move the point. This is how you can change the shape of an object, or move a point.

### ပုံဆွဲခြင်း

-   On the left side of JOSM is a column of buttons. Many of these buttons open new windows on the right side that provide more information about the map. The most important buttons, however, are at the top of these column. These buttons change what you can do with your mouse.
-   The top buttons in this column are the ones you will use the most. They are used for selecting objects and for drawing new ones.
-   Until now, you have been using the Select tool, which looks like this:

    ![Select tool][]

-   Before you draw, you need to make sure that nothing is selected. Click in the black space on the map, where it is empty, to make sure nothing is selected.
-   Click on the second button, the Draw tool.

    ![Draw tool][]

-   Find an empty area on the map, and double-click with your mouse. This will draw a single point.
-   To draw a line, single-click with your mouse. Move your mouse and click again. Continue until you are happy with your line. To end the line, double-click your mouse.
-   Draw a shape the same way that you draw a line, but finish the shape by double-clicking on the point where you started the line.

### ကြိုတင်သတ်မှတ်ချက်များထည့်သွင်းခြင်း

-   Now we know how to draw points, lines and shapes, but we still haven’t defined what they represent. We want to be able to say that our points are shops, schools, or something else, and whether our shapes are fields, buildings, or something else.
-   Click on the Select tool, in the column of buttons on the left.

    ![Select tool][]

-   Select one of the objects that you drew with the Draw tool. On the top menu, click “Presets”. Move your mouse through the sub-menu to the type of location you would like to define.
-   When you click on a preset, a form will pop up asking you for more information. You do not have to fill in every field, but you may wish to add some of the important fields, such as the name of the object.
-   When you are finished entering the information, click “Apply Preset”. If everything went well, your point, line, or shape should change colors or show a symbol. This is because you have defined what it is.

ကိုယ်ပိုင်မြေပုံဆွဲခြင်း
-----------------

-   Now let’s draw a map in order to practice the techniques you have learned. You may wish to redraw the map that you drew on paper previously.
-   Drag the map away from the sample map. Hold the right mouse button and drag your mouse, until you have a nice empty area to draw on.
-   Use the Draw tool to create points, lines, and shapes. Describe what your objects are by selecting from the Presets menu.
-   When you are finished, you should have your own map, similar to the sample map that we opened in sample.osm.

Remove the sample layer
-----------------------

Once you feel comfortable with these basic editing techniques you might want
to turn your attention to mapping real features.

_It is very important that you first remove the layer with the sample data.
These data are fictitious and must not be uploaded to the OpenStreetMap
database (newer JOSM releases automatically prevent this)._

In the Layers window on the upper right of the screen select the sample.osm layer.
Then click on the trash can icon in the lower right corner of that window.
Alternatively you can choose delete from the context menu of the layer.
In order to continue editing you first need to download real data.
This will be explained in the next chapter.

အကျဉ်းချုပ်ဖော်ပြချက်
-------

ကောင်းပါပြီ။ JOSM ဆော့ဖ်ဝဲလ်ကို ကွန်ပျူတာတွင်ထည့်သွင်းခြင်းနှင့် 
မြေပုံရေးဆွဲခြင်းအခြေခံများကို သင့်အနေဖြင့်ကောင်းစွာလေ့လာခဲ့ပြီးပါပြီ။ JOSM အသုံးပြု၍ 
OSM မြေပုံတည်းဖြတ်ခြင်းအကြောင်းကို နောက်သင်ခန်းစာတွင်ဆက်လက်လေ့လာကြပါမည်။

[josm website]: /images/josm/josm-website.png

[windows installer]: /images/josm/windows-installer.png

[josm splash page]: /images/josm/josm-splash-page.png

[preferences window]: /images/josm/josm_preferences.png

[language]: /images/josm/josm_language.png

[open file]: /images/josm/josm_open-file.png

[sample file]: /images/josm/josm_sample-file.png

[scale bar]: /images/josm/josm_scale-bar.png

[select tool]: /images/josm/josm_select-tool.png

[draw tool]: /images/josm/josm_draw-tool.png
