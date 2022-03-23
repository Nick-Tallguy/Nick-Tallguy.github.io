---
layout: doc
title: Začínáme s JOSM
permalink: /cs/josm/start-josm/
lang: cs
category: josm
published: true
---

Začínáme s JOSM
=============================


How to download and install JOSM, the Java OpenStreetMap editor, change some of the settings, open a sample map and learn some of the basic operations of the software. Remember in the introduction chapter when we asked you to draw a map of your town or village? We will conclude this chapter by drawing your map again, this time digitally. After this you should have a good understanding of how to draw maps in JOSM.

Stáhněte si JOSM
-------------

- Pokud máte kopii JOSM na CD nebo USB flash disku, můžete přejít k další části, Instalace JOSM.
-   If you don’t have JOSM already, or want the newest version, open your web browser - this may be Firefox, Chrome, Opera, or Internet Explorer.
-   In the address bar at the top of the window, enter the following text and press Enter: [josm.openstreetmap.de](http://josm.openstreetmap.de)
- Webové stránky JOSM najdete také po zadání hesla "JOSM" na internetu.
- Webové stránky by měly vypadat přibližně takto:

    ![JOSM website][]

-   If you have Windows installed on your computer, click “Windows Installer” to download JOSM.

    ![Windows installer][]

-   If you have a different operating system, click on the link for your system. Your download should begin. In this chapter we will assume that you are using Windows, but the instructions are similar for other operating systems.

Instalujeme JOSM
------------

>  You may have problems installing JOSM if Java is not already installed on your computer. If you have problems in this section, try downloading and installing Java. You can download it here: <http://www.java.com/en/download/>
>
>  Mac users may have old versions of Java. Please see <http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation> for options for OSX 10.6 and 10.7.3+

-   Find the JOSM install file on your computer. Double-click it to begin setup.
-   Click ‘OK’, ‘Next’, ‘I Agree’, and ‘Install’. When the installation is complete, click ‘Finish’ to launch JOSM for the first time. Later, when you want to start JOSM, you can do so by clicking on the Start Menu in the lower left corner of your computer, and clicking the program JOSM.
-   You may see a window pop up that asks if you want to update the software.  You don’t need to update it since it is new.  Press the button that says “Cancel.”  If you don’t ever want to see this message again, check the box at the bottom before pressing “Cancel.”
-   When JOSM starts, it will look something like this:

    ![JOSM splash page][]

Předvolby JOSM
----------------

There are many different settings that you can customize in JOSM.  One setting that you may want to adjust is the language. JOSM has been translated into numerous languages, and you may prefer to work in a different one.

-   To access the Preferences window, click Edit -> Preferences.

    ![Preferences window][]

-   On the left side, click the icon that looks like a paint can and paint brush.
- V horní části okna klikněte na kartu "Look and Feel".
- V rozevíracím poli vedle slova " Jazyk " vyberte svůj jazyk.

    ![Look and feel][]

-   Click OK.
-   You need to restart JOSM to save your settings. Click “File” in the upper left corner, and Click “Restart” near the bottom of the menu.

Naučte se základy mapování s JOSM
-----------------------------

- Nyní si otevřeme ukázkový soubor OSM, který použijeme k seznámení se základními způsoby kreslení map pomocí JOSM. Všimněte si, že tato mapa není skutečná v tom smyslu, že se nejedná o skutečnou mapu skutečného místa, takže ji nebudeme ukládat na OpenStreetMap.
-   Download the file here: [sample.osm](/files/sample.osm)
- Nyní otevřeme ukázkový soubor mapy v JOSM. Klikněte na tlačítko "Otevřít" v levém horním rohu.

    ![Open file][]

- Najděte soubor **sample.osm**. Pravděpodobně se nachází ve složce Stažené soubory, pokud jste jej neuložili jinam. Klikněte na něj a potom klikněte na tlačítko "Otevřít".
- Nyní byste měli vidět ukázkovou mapu, která vypadá takto:

    ![Sample file][]

-   You will use these data in order to try various editing techniques. _You must however never upload these fictitious data to the database._

### Základní operace

-   To move the map left or right, up or down, hold your right mouse button down, and move your mouse.
-   There are several ways to zoom in and out of the map. If you have a mouse, you can use your scroll wheel to zoom in and out. If you are using a laptop and don’t have a mouse, you can zoom in and out using the scale bar in the upper left of the map window. Drag the bar left and right by holding your left mouse down and moving the bar left or right with your mouse.

    ![Scale bar][]

-   Look at the sample map. There a few different types of objects here. There is a river, a forest, some buildings, several roads, and a couple of shops. To select an object, click on it with your left mouse button.

### Body, přímky a tvary

-   As you click different objects on the sample map, notice that there are three different types of objects on the map. There are points, lines, and shapes.
-   Points are a single location, represented by symbols. On this sample map, there are two points, a shoe shop and a supermarket. The shoe shop is represented by a shoe symbol, and the market is represented by a shopping cart.
-   There are several lines on the map as well, which represent roads. If you look closely you will see that within the lines, there are points as well. These points don’t have any symbols or other information associated with them, but they help to define where the line is located.
-   Lastly, there are numerous shapes on the sample map, representing different places - a forest, a river, a park, and buildings. A shape is used to represent an area, like a field or a building. A shape is exactly like a line - the only difference is that the line begins at the same point where it ends.

> Je snadné přemýšlet o mapě, která obsahuje tyto tři základní typy objektů -
> body, přímky a tvary. V OpenStreetMap existuje speciální terminologie
> díky které se dozvíte, jak postupujete. V OSM jsou body vlastně nazývány jako
> **uzly** a přímky se nazývají **cesty**. Tvar je nazýván **uzavřenou cestou**
> protože je to jen přímka, která končí ve stejném místě, odkud začíná.

-   You may notice that when you select an object, a list appears to the right of the map in a window called “Properties”. These are known as tags. Tags are information that is tied to a point, line or shape that describes what it is. We’ll learn more about tags in a later chapter. For now all you need to know is that this information helps describe whether our object is a forest, a river, a building, or something else.
-   Think about drawing a map by hand, and how you are also drawing points, lines, and shapes. What other places are best represented by points? Lines? Shapes?

### Změna objektů

-   Select the forest on the left side of the map. Be sure to click on the line around the forest, not one of the points on the line. Now hold your left mouse button down and drag your mouse. You should be able to move the forest to a new location on the map.
- Klikněte na jeden z bodů na čáře kolem lesa. Podržte stisknuté levé tlačítko myši a táhněte myší. Měli byste být schopni bod přesunout. Takto můžete změnit tvar objektu nebo přesunout bod.

### Kreslení

-   On the left side of JOSM is a column of buttons. Many of these buttons open new windows on the right side that provide more information about the map. The most important buttons, however, are at the top of these column. These buttons change what you can do with your mouse.
-   The top buttons in this column are the ones you will use the most. They are used for selecting objects and for drawing new ones.
- Doposud jste používali nástroj Výběr, který vypadá takto:

    ![Select tool][]

-   Before you draw, you need to make sure that nothing is selected. Click in the black space on the map, where it is empty, to make sure nothing is selected.
-   Click on the second button, the Draw tool.

    ![Draw tool][]

-   Find an empty area on the map, and double-click with your mouse. This will draw a single point.
-   To draw a line, single-click with your mouse. Move your mouse and click again. Continue until you are happy with your line. To end the line, double-click your mouse.
-   Draw a shape the same way that you draw a line, but finish the shape by double-clicking on the point where you started the line.

### Přidat nastavení

-   Now we know how to draw points, lines and shapes, but we still haven’t defined what they represent. We want to be able to say that our points are shops, schools, or something else, and whether our shapes are fields, buildings, or something else.
-   Click on the Select tool, in the column of buttons on the left.

    ![Select tool][]

-   Select one of the objects that you drew with the Draw tool. On the top menu, click “Presets”. Move your mouse through the sub-menu to the type of location you would like to define.
-   When you click on a preset, a form will pop up asking you for more information. You do not have to fill in every field, but you may wish to add some of the important fields, such as the name of the object.
-   When you are finished entering the information, click “Apply Preset”. If everything went well, your point, line, or shape should change colors or show a symbol. This is because you have defined what it is.

Nakreslete vlastní mapu
-----------------

-   Now let’s draw a map in order to practice the techniques you have learned. You may wish to redraw the map that you drew on paper previously.
-   Drag the map away from the sample map. Hold the right mouse button and drag your mouse, until you have a nice empty area to draw on.
-   Use the Draw tool to create points, lines, and shapes. Describe what your objects are by selecting from the Presets menu.
-   When you are finished, you should have your own map, similar to the sample map that we opened in sample.osm.

Remove the sample layer
-----------------------

Jakmile se budete cítit pohodlně s těmito základními technikami úprav, budete chtít
zaměřit svou pozornost na mapování skutečných funkcí.

_It is very important that you first remove the layer with the sample data.
Tato data jsou fiktivní a nesmí být nahrána do OpenStreetMap 
databáze (novější verze JOSM tomu automaticky zabraňují)._

V okně Vrstvy v pravé horní části obrazovky vyberte vrstvu sample.osm.
Potom klikněte na ikonu koše v pravém dolním rohu okna.
Alternativně můžete vybrat smazání z kontextové nabídky vrstvy.
Chcete-li pokračovat v úpravách, musíte nejprve stáhnout skutečná data.
To bude vysvětleno v následující kapitole.

Shrnutí
-------

Vynikající! Pokud jste všechno udělali dobře, tak jste se naučili, jak nastavit JOSM na svém
počítači a základní nástroje pro kreslení map. V další kapitole se 
blížeji podíváme na proces úpravy mapy OSM s JOSM.

[josm website]: /images/josm/josm-website.png

[windows installer]: /images/josm/windows-installer.png

[josm splash page]: /images/josm/josm-splash-page.png

[preferences window]: /images/josm/josm_preferences.png

[look and feel]: /images/josm/josm_look-and-feel.png

[open file]: /images/josm/josm_open-file.png

[sample file]: /images/josm/josm_sample-file.png

[stupnice]: /images/josm/josm_scale-bar.png

[select tool]: /images/josm/josm_select-tool.png

[draw tool]: /images/josm/josm_draw-tool.png