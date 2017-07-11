---
layout: doc
title: Bilder Offset korrigieren
permalink: /de/josm/correcting-imagery-offset/
lang: de
category: josm
---

Bilder Offset
===============

> Diese Anleitung kann heruntergeladen werden als  [correcting-imagery-offset_en.odt](/files/correcting-imagery-offset_en.odt) or [correcting-imagery-offset_en.pdf](/files/correcting-imagery-offset_en.pdf)  
> Reviewed 2015-09-21  

Bilder Anbieter machen meistens einen gute Job bei der Georeferenzierung ihrer Bilder, aber gelegentlich können die Bilder von der Position abweichen. Dies geschieht meistens in hügelreichen oder bergigen Regionen, wo es schwer ist, flache Bilder über über eine konturenreiche Region der Erde zu legen. Lädt man Bilder in JOSM, können diese zehn Meter oder mehr von ihrer eigentlichen Position abweichen. Das nennt man **Bilder Offset**.  

Man beachte im folgenden Bild, dass zweit separate Luftbilder georeferenziert und vereint wurden. Da Georeferenzierung kein perfekter Prozess ist, liegen die Bilder nicht perfekt übereinander. Eines oder beide müssen also ungenau sein.  

![Misaligned imagery][]

Wir haben zwei Hauptwege zur Kartenerstellung kennengelernt - einer ist die Verwendung von Luftbildern um Dinge vor Ort zu identifizieren und ein anderer ist die Verwendung von GPS zum Aufzeichnen von Spuren und Wegpunkten und dem Hinzufügen dieser zu OpenStreetMap. Der Vorteil von Luftbildern ist offensichtlich. Es ermöglicht es dem Mapper das große Ganze zu sehen, zahlreiche Details auf dem Bild zu erkennen wo man sich auskennt, und Straßen, Gebäude und Gebiete einfach ab zu zeichnen . Ein wichtiger Vorteil von GPS ist jedoch, dass es nicht durch Offset beeinträchtigt ist. Ein GPS wird immer eine korrekte Länge und Breite bieten. Die einzige Ausnahme ist, wenn das Satellitensignal durch große Gebäude oder Berge gestört wird, aber der Fehler ist in diesem Fall einfach zu erkennen. Man beobachte die GPS Spur in diesem Bild im Vergleich mit dem Bing Luftbild daneben:  

![Aerial vs GPS][]

Aufgrund dessen was wir nun wissen ist es klar, dass die GPS Spur genau sein sollte und die Grafik daneben verschoben ist. Man fragt sich, "Wenn die Grafik verschoben ist, wie können wir sie trotzdem verwenden und genaue Karten erstellen?"  

Bilder Offset Korrektur
-------------------------

Die Antwort auf die vorherige Frage ist, dass man Bilder verschieben kann, damit sie mit Dingen deren korrekte Position wir kennen übereinstimmen, wie z.B. GPS Spuren. Es ist einfach in JOSM Bilder Offset zu korrigieren.  

Die beste Referenz zur Ausrichtung von Bildern sind GPS Spuren die Straßen folgen. Je mehr GPS Spuren man zum Referenzieren hat, umso genauer kann man die Bilder ausrichten. Da OpenStreetMap Benutzer oftmals ihre GPS Spuren zur OSM Datenbank hochladen, können wir diese herunterladen und zur Ausrichtung unserer Bilder verwenden.  

- Man klickt den Download Button.  ![JOSM download button][]{: height="24px"}  

- Man wählt die Box neben "Raw GPS Date" ![Download raw GPS data][]{: height="24px"} oben im Download Fenster. Man wählt seinen Bereich und klickt "Download".  

- Das lädt einen zusätzlichen Layer in JOSM der GPS Spuren beinhaltet. Abhängig davon, wie viele Spuren von OSM Benutzern hochgeladen wurden, sieht man weniger Tracks (oder keine Tracks):  

![Few GPS tracks from OSM][]

- Oder man sieht viele Tracks:  

![Many GPS tracks from OSM][]

- Zur Anpassung eines Bild Layers, klickt man auf den "Adjust imagery offset" Button ![Adjust imagery offset button][]{: height="24px"} oben in JOSM.  

- Man ignoriert das erscheinende Popup und verschiebt den Bilder Layer mit der Maus bis er korrekt anliegt mit den GPS Spuren. Die GPS Spuren sollten zu den Straßen auf den Bildern so gut wie möglich passen. Man sieht die Offset Zahlen in der Box sich ändern.  

![Adjust imagery offset][]

- Man kann diese Offset Einstellungen speichern, indem man einen Lesezeichen Namen angibt und OK klickt. Man kann so später die gleichen Einstellungen anwenden, indem man zu Imagery ‣ Imagery offset geht und das Lesezeichen anklickt.  
- Möchte man das Offset nicht speichern, klickt man einfach OK ohne Angabe eines Lesezeichen Namens.  

Was wenn keine GPS Tracks auf OpenStreetMap vorhanden sind und man kein GPS hat? Ohne GPS Tracks ist es schwer Luftbilder zu positionieren. Falls es ein relativ leeres Gebiet ist (noch nicht viel erfasst), kann man einfach das Bild verwenden und die Daten später korrigieren. Es ist besser eine Karte mit 20 order 30 Meter Offset zu haben, als gar keine Karte zu haben.  

Kann man die Höhe und Breite eines Objekts vor Ort bestimmen, kann man sicherstellen, dass das Bild korrekt platziert ist durch folgende Schritte:  

1. Man sucht das Objekt dessen Position man kennt auf dem Bild.  
2. Man klickt auf die Länge und Breite in der unteren linke Ecke von JOSM. ![JOSM lat lon][]{: height="24px"}  
3. Im sich öffnenden Dialog gibt man die Länge und Breite des bekannten Ortes an und eine kleine Zoomstufe zwischen fünf oder zehn.  
![JOSM lat lon dialogue][]
4. Das zentriert und zommt auf die angegebene Länge und Breite. Man kann nun das Bild wie zuvor verschieben bis das Bild mit dem bekannten Objekt in der korrekten Position zentriert ist.  

Falls andererseits das Gebiet bereits ausgiebig erfasst wurde, haben vorherige Mapper hoffentlich die Objekte am richtigen Ort platziert. In diesem Fall kann man die Bilder an der OSM Karte ausrichten. Aber Achtung! Andere Mapper sind sich dem Bilder Offset vielleicht nicht bewusst und haben Fehler erzeugt während der Erfassung.  


Die Imagery Offset Datenbank
---------------------------

Man erkennt nun Bilder Offset und kann es korrigieren, aber es gibt ein Hauptproblem mit diesem Ansatz, den wir bisher übersehen haben. Wenn jeder OpenStreetMap Benutzer die Bilder geringfügig anders verschiebt, mappt jeder mit einem leicht anderen Hintergrund.  

Man stelle sich vor, man mappt eine kleine Stadt und bemerkt, dass die Bing Bilder einen Versatz von 15 Metern in Richtung Norden haben. Man passt die Bilder an und verwendet sie um die ganze Stadt genau zu mappen. Aber dann möchte jemand anderes etwas zur Karte beitragen, lädt die Daten herunter und nimmt Bing als Hintergrund, weiß aber nichts über den Bilder Offset den man entdeckt hat! Derjenige denkt, dass etwas falsch läuft und die ganze Stadt um 15 Meter falsch eingezeichnet wurde und fängt an alles zu verschieben, was falsch ist! Das kann fatal für die Stadt Kartendaten sein.  

Aus diesem Grund ist es wichtig, dass sich Benutzer dem Bilder Offset bewusst sind und stets dies prüfen, bevor man mit dem mappen eines Gebietes beginnt. Um dies zu unterstützen haben einige schlaue Leute ein Plugin erstellt, dass es Benutzern erlaubt Offset Informationen in einer Datenbank zu speichern und mit anderen zu teilen. Schauen wir uns das an:  

-  man öffnet das Einstellungen Menü in JOSM und klickt auf das Plugin Tab. ![JOSM plugins tab][]{: height="24px"}  

- man sucht das Plugin "imagery_offset_db" und markiert die Auswahlbox daneben.  

![Imagery_offset_db plugin][]

- man klickt OK. Man muss JOSM neu starten um die Plugin Installation zu vervollständigen.  

In the same way that you are able to save offsets as bookmarks, this plugin allows you to save offsets to a central database, and to access the offsets that other users have created.  Hence, if one mapper creates an imagery offset in an area, other users can use the exact same offset to map with.  

When using aerial imagery layers, you should ALWAYS check for existing offsets, and when you create your own offset, you should ALWAYS save it to this database.  


Add Imagery Offset from the Database
------------------------------------

When you add an imagery layer, the new plugin will alert you that you should check the imagery database for an existing offset.  You will see an icon with a red exclamation point on it at the top of JOSM, like this:  

![Imagery offset notification][]

- Click on the button and the plugin will communicate with the database to see if there are existing offsets in this area.  
- Here we have downloaded OSM data and GPS tracks in Kuta, Bali, Indonesia. In this case, we have found one existing offset. Click on it to apply to the map.  

![Offset in Kuta bali][]

- This causes the imagery layer to shift.  However, when we add someone else’s offset like this, we should check that it is valid by comparing to GPS tracks.  

![Comparing imagery offset from GPS tracks][]

- We can see that the imagery layer is in fact misaligned.  We don’t want other users to use this offset, so we should mark it as incorrect in the database. Click on the “Offsets” button again (it won’t have a red exclamation mark anymore).  

![Offsets button][]

- This time when the dialog opens, right-click on the offset and click “Deprecate Offset.”  

![Deprecate offset][]

- Click “Yes” to confirm.  
- You will need to enter a reason for deprecating this offset.  

![Deprecate reason][]


Add Imagery Offset to the Database
------------------------------------

Now that we have marked this user’s offset as “deprecated,” we should add an improved offset to the database.  

1. Click on the “Adjust imagery offset” button. ![Adjust imagery offset button][]{: height="24px"}  
2.  Adjust the imagery to match the GPS tracks.  Click OK in the box.  
3.  Now go to Offset ‣ Store Imagery Offset...  
![Store imagery offset][]
4.  Enter a description of the offset in the box that opens.  
![Offset description][]
5.  Click OK.  Your offset will be saved to the database.  
6.  Now let’s hide the GPS layer and look at the OSM data against the correctly placed imagery.  

![Corrected imagery][]

Oh No!  Somebody mapped this area with misaligned imagery, so the area is not correctly mapped.  This will take some time to fix.


Imagery Offset Database Website
--------------------------------

Lastly, for more information on the offset database, you can visit the website at [http://offsets.textual.ru/](http://offsets.textual.ru/).  This lists all the offsets that have been uploaded to the database, and it also has a cool map feature that visualizes where the offsets are located, as you can see here:  

![http://offsets.textual.ru/][]

> One last thing to remember is that the imagery may not be offset the same distance everywhere!  This is especially true in regions where there are lots of hills and mountains.  So if the imagery seems to be offset differently in different areas, you’ll need to move it again.  

Zusammenfassung
--------

When you are just beginning OpenStreetMap, you don’t need to worry too much about imagery offset.  But if you see another mapper’s edits that seem misaligned from the imagery, you should always consider that there may be an offset before you start changing their objects.  And if you aren't quite ready to deal with offsets yet, just remember that it’s better to map an area 20 or 30 meters offset than to not map it at all.  But when possible, do remember that imagery offset may occur, and use the steps in this chapter to correct it when needed.


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










