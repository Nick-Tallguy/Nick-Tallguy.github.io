---
layout: doc
title: JOSM Gebäude Werkzeuge & Utilsplugin2 Plugins
permalink: /de/josm/josm-more-plugins/
lang: de
category: josm
---

JOSM Gebäude Werkzeuge & Utilsplugin2 Plugins
============

> Diese Anleitung kann heruntergeladen werden als [josm-more-plugins_en.odt](/files/josm-more-plugins_en.odt) oder [josm-more-plugins_en.pdf](/files/josm-more-plugins_en.pdf)  
> Reviewed 2016-09-12  

Die **buildings_tools** und *utilsplugin2* Plugins ergänzen JOSM um großartige Funktionen. In diesem Abschnitt schauen wir und die angebotenen Funktionen näher an.  

Das Gebäude Werkzeug Plugin
--------------------------

Falls man das Plugin noch nicht installiert hat, kann man es installieren nach folgender Anleitung in  [JOSM Plugins](/en/josm/josm-plugins).  

![Buildings tools plugin][]

Das Gebäude Werkzeug Plugin ist für die Digitalisierung von Gebäuden sehr nützlich. Es erlaubt einem eine Seite eines Gebäudes nach zu zeichnen und damit den Umriss zu erfassen. Wenn man mehrere Gebäude digitalisiert spart einem das Plugin Klicks und damit Zeit ein.  

Sobald das Plugin installiert ist, sieht man einen neuen Button auf der linken Seite von JOSM, der wie folgt aussieht: ![Buildings tools button][]{: height="29px"}

Man startet JOSM und lädt ein Gebiet herunter, in dem man Gebäude zeichnen möchte.  

* Man wählt das Gebäude Werkzeug und klickt doppelt, um eine Line auf der Karte zu zeichnen.  

![Draw edge][]

* Dann bewegt man die Maus und klickt nochmals, um ein Rechteck zu zeichnen.  

![Extend building][]

* Dies erzeugt nicht nur ein Rechteck mit nur 3 Klicks, sonder ergänzt den Umriss automatisch mit dem **building=yes** Tag.  

### Komplexe Gebäude

Man kann auch komplizierte Gebäude erstellen, indem man zuerst mehrere überlappende Gebäude zeichnet und diese dann zusammenfügt.  

* Man zeichnet zwei überlappende Gebäude, so dass diese einen L Umriss formen.  
* Man selektiert beide Gebäude (man drückt SHIFT um mehrere Gebäude zu selektieren).  
* Man geht zu Werkzeuge->Überlappende Flächen verbinden oder drückt SHIFT+J auf der Tastatur.  

![Merge buildings][]

### Einstellungen bearbeiten

Man kann des Weiteren die Standardeinstellungen des Plugin ändern.  

* Man geht zu Daten->Gebäudegröße setzen. ![Set buildings size][]{: height="39px"}  

* Falls man viele Gebäude ähnlicher Größe erstellt, kann man spezifische Höhen- und Breitenmaße  des Gebäudes angeben, wie z.B. 6 x 10 Meter (die Einheit ist in Meter).  

![Set buildings size dialog][]

* Indem man die Maße angibt, braucht man nur zwei Klicks, um ein präzise ausgemessenes Gebäude zu erstellen.  

Zuletzt kann man auf den Erweitert Button klicken, falls man zusätzliche Tags automatisch einem jeden Gebäude hinzufügen möchte. Falls zum Beispiel jedes Gebäude das man zeichnet in der gleichen Straße ist, kann man ein Tag hinzufügen, dass die Straße automatisch angibt.  

![Buildings advanced][]


Utilsplugin2
-------------

Wenn nicht bereits passiert, installiert man das Plugin entsprechend der folgenden Anleitung in  [JOSM Plugins](/de/josm/josm-plugins).  

![Utilsplugin2 plugin][]

Nachdem man das Plugin installiert und JOSM neu gestartet hat, besitzt man oben im Fenster ein neues Menü  namens "Weitere Werkzeuge".  

![More tools menu][]

Create a new layer and experiment with some of the new tools. Here we describe some of the most useful new tools:  

1. **Add Nodes at Intersections:**  This tool is very helpful for adding missing nodes in intersections of selected ways.  It is good practice that roads should always have common nodes where they intersect.  

    ![Nodes interesection][]

2. **Copy Tags from Previous Selection:**  This function makes copying tags easier.  If you want to create many objects with the same tags, first draw the objects.  Then add the tags to one object.  Click on another object and press Shift + R to copy the tags from the previously selected object.  You can do this for all objects that you want to tag.  Remember that the tags will be copied from the previously selected object, so if you click on an untagged object and then another untagged object, you will not be able to copy any tags.  

    ![Copy tags][]

3. **Add Source Tag:** This tool simplifies adding a source tag. It remembers the source that was specified last and adds it as remembered source tag to your objects.   You can insert the source with just one click.  

4. **Replace Geometry:** This tool is great if you want to redraw a poorly shaped object, but want to keep the history, attributes and ID number of that object.  For example, if you come across a building that is complicated and drawn in a poor fashion, then instead of painfully changing each node, you can draw the object again, select the old and new objects, and select ¨Replace Geometry¨ to transfer all the information over.  

    ![Replace geometry][]


### More Selection Tools

**Utilsplugin2** also provides more tools on the "Selection" menu. Try experimenting with them.  

![Selection menu][]

One of our favorite selection tools is **Unselect Nodes:** This tool deselects all nodes. This can be useful if you draw a box to select many objects, but you do not want to select the nodes contained within all the lines and shapes.  

![Unselect nodes][]

Good luck!  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png

