---
layout: doc
title: iD szerkesztő
permalink: /hu/beginner/id-editor/
lang: hu
category: beginner
---

Az iD szerkesztő
=============

> Ez az útmutató letölthető: [beginner_id-editor_hu.odt](/files/beginner_id-editor_hu.odt) or [beginner_id-editor_hu.pdf](/files/beginner_id-editor_hu.pdf)  
> Átnézve: 2016-03-30  

Starting to map with a Tasking Manager for HOT or MissingMaps etc? See our [HOT-tips section](/en/hot-tips/).  

- TOC
{:toc}

Az iD szerkesztő a tulajdonképpeni böngészőből induló OpenStreetMap-szerkesztő. Gyors és könnyen kezelhető, lehetővé teszi a különböző adatforrásokból – például légifelvételek, GPS-adatok, Field Papers nyomtatott térképek vagy Mapillary – történő térképezést.  

Az iD szerkesztővel remekül végezhetünk kicsi és könnyű szerkesztéseket, amelyeknél nincs szükség a JOSM (vagy egy fejlettebb térképszerkesztő) haladó funkcióira. Ez a fejezet az iD-vel történő szerkesztés alapjait mutatja be.  

Az iD szerkesztő elindítása
----------------------

-	Az iD szerkesztőhöz aktív (online) internetkapcsolat szükséges.  
-	Nyissa meg az internetböngészőt és menjen az OpenStreetMap weboldalára: [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Lépjen be** az OpenStreetMap-fiókjával.  
-	Húzza és nagyítsa a térképet a szerkeszteni kívánt helyre. Húzni úgy tudja, hogy a bal egérgomb lenyomva tartása mellett mozgatja a térképet.  
-	Kattintson a **Szerkesztés** melletti ki nyílra, majd erre: **Szerkesztés a következővel: iD (böngészőben futó szerkesztő)**.  

![image1][]


Az iD szerkesztő felhasználói felülete
-------------------------
![image2][]

1. **Elem szerkesztése**: ezen a panelen jelennek meg a térképen kijelölt objektum címkéi.  
	Itt lehet címkéket hozzáadni vagy szerkeszteni.  
2. **Eszközök**: itt vannak az alapvető szerkesztőeszközök:  
    Pont (node) rajzolása; *billentyűparancs*: **1** ![image3][]{: height="24px"}  
    Vonal (way) rajzolása; *billentyűparancs*: **2** ![image4][]{: height="24px"}  
    Alakzat (polygon) rajzolása; *billentyűparancs*: **3** ![image5][]{: height="24px"}  
    Visszavonás; *billentyűparancs* **Ctrl+z** ![image6][]{: height="24px"}  
    Mégis; *billentyűparancs*: **Ctrl+y** ![image7][]{: height="24px"}  
    Módosítások mentése; *billentyűparancs* **Ctrl+s** ![image8][]{: height="24px"}  
3. **Térkép**: ez a panel különböző beállítási funkciókat tartalmaz:  
    Nagyítás; *billentyűparancs* **+** ![image9][]{: height="24px"}  
    Kicsinyítés; *billentyűparancs* **–** ![image10][]{: height="24px"}  
    Pozícióm megjelenítése ![image11][]{: height="24px"}  
    Háttérréteg beállításai; *billentyűparancs* **b** ![image12][]{: height="24px"}  
    Térképadatok; *billentyűparancs* **f** ![Map Data][]{: height="24px"}  
    Súgó; *billentyűparancs* **h** ![image13][]{: height="24px"}  
4. **Információk**: Ez a panel különféle információkat jelenít meg, például a léptéket és azt, hogy mely felhasználók szerkesztették a területet.  

A háttérréteg beállítása
--------------------------------

Kattintson a **Háttérbeállítások** gombra vagy használja a **b** *billentyűparancsot*.![image14][]{: height="24px"}  
![image15][]  
A **fényerő** beállításához kattintson valamelyik négyzetre. A szintek: 100%, 75%, 50% és 25%. ![image16][]{: height="24px"}  
A **háttérréteget meg is változtathatja**: válassza ki a kívánt képszolgáltatóját (az alapértelmezett réteg a Bing légi felvételei).  

Az **Egyéni**re kattintva saját térképmozaikokat is hozzáadhat. Ha például szeretne egy **Field Paper** [^fieldpaper] térképet hozzáadni, kattintson az **Egyéni**re, aztán a nagyító ikonra (keresés), és a következő ablak fog megnyílni:  
![image17][]   
Adja meg a **Field Paper pillanatkép URL**-jét, ami valami ilyesmi lesz: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
A **számítógépről származó GPS-nyomvonalak** (GPX-formátum) megjelenítéséhez egyszerűen húzza az egérrel a GPX-fájlt az iD szerkesztő felületére.  
Az OpenStreetMapre feltöltöt nyomvonalak megjelenítéséhez kattintson a jelölőnégyzetre. Az alatta lévő térképen megjelennek a nyilvános GPS-nyomvonalak különböző színekkel, amelyek az utazás irányát jelölik.  
![osm gps traces][]  
Ha a [légi felvétel elcsúszott](/en/josm/aerial-imagery), akkor az **elcsúszás korrigálására** kattintva a helyére igazíthatja a légi felvételt. ![image18][]  

- A légi felvétel mozgatásához kattintson a navigációs gombokra. Az alapértelmezett pozícióhoz való visszatéréshez kattintson a Visszavonás gombra.  

Alapvető szerkesztések az iD-vel  
----------------------  

### Pontok hozzáadása  

To add a new point, click on the **Point** button. ![image3][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Now, click on a position that you know to mark a location. For example, if you know that there is a hospital in your area, click on the position of the hospital building.  
![image21][]  
- Notice that a new point is added. At the same time, the left panel will change to show a form where you can select attributes for the object. Click **Hospital Grounds** to tag the point as a hospital.  
![image22][]  
- You can use the forms to fill detail information about your point. You can fill hospital name, address, and/or other additional information. Note that each feature will have different options, depending on what tag you choose from the feature panel.  
- If you make a mistake, such as a wrong location, you can move your point to a new location by holding the left mouse button on your point and dragging it. Or, if you want to delete your point, click the left mouse button on the point, activate the context menu by clicking with the right mouse button and then click the button which looks like a trashcan. ![image23][]{: height="24px"}  
A "point" created in the iD editor is actually a standalone "node" with a set of "tags" on it.  

### Drawing Lines  

To add a new line, click on the **Line** button. ![image4][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Find a road that hasn’t been drawn on the map and trace it. Click once on a point where the road segment begins, move your mouse, and click to add additional points. Double-click to end the drawing process. Notice the panel on the left.  
![image24][]  
- Just as with a point, select the appropriate tags for your line.  
- You can drag points from the line by clicking your left mouse button on a point and dragging it.  
- You also can move the whole line by selecting it, and choosing the **Move tool**. Then drag the line to a new position. ![image30][]{: height="24px"}  
- When you click your left mouse button on an individual point (node) on the line and click on the right mouse button to activate the context menu, you will see these tools:  
- Delete point from line. ![image23][]{: height="24px"}  
- Disconnect point from line. ![image26][]{: height="24px"}  
- Split a line into two lines from the point you’ve selected. ![image27][]{: height="24px"}  
- When you click your left mouse button on a line (but not on a point), you will see these tools:  
-   Delete line. ![image23][]{: height="24px"}  
-   Create a circle from a line (only active if the line is closed) ![image29][]{: height="24px"}  
-   Move line ![image30][]{: height="24px"}  
-   Form a square shape from a line (only active if the line is closed) ![image31][]{: height="24px"}  
-   Reverse line direction (good for rivers & one-way streets) ![image32][]{: height="24px"}  

A "line" created in the iD editor is actually a "way" with "tags" on it.

>A special note about **Deleting**: In general you should avoid deleting other people's mapping if it just needs improvement. You can delete your own mistakes, but you should try to *adjust* other people's mapped objects if they need changes. This preserves the history of the items in the OSM database and is respectful of fellow mappers. If you really feel something should be deleted, consider asking the original mapper or one of the OSM email lists about it first.

### Drawing Shapes (Polygons)

To add a new multi-sided shape, click on the **Area** button. ![image34][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Try to trace a building using the imagery as a guide.  
- You will notice that the color of your shape will change depending on the attributes that you assign to it.  
![image35][]  
- The tools that are available when you select a shape and activate the context menu with the right mouse button are similar to those when you click on a line.  

A "polygon" in the iD editor is actually a "closed way" with tags on it.

### Drawing Multipolygons

Sometimes you have to draw a polygon which does not only have an outer contour but also one or more inner contours. Just think of buildings with inner courtyards or lakes with islands. *Do not draw all these ways in one line* so that the inner contours suspend from the outer contour. Rather draw these contours separate, attach tags to the outer contour only, select all contours and hit **c** in order to combine them into what is called a multipolygon.

![create multipolygon][]

When you select any of the contours of the newly created multipolygon you can see on the left to which multipolygons it belongs

![part of multipolygon][]

Saving Your Changes
--------------------

When (and if) you want to save your edits to OpenStreetMap, click the **Save** button. The panel on the left will show the upload panel.  
![image36][]  

- Enter a comment about your edits and click **Save**.  

> If you have edited the same feature (point, way or area) at the same time as another person was editing it, you will receive a warning that your edits cannot be uploaded until you have resolved the **conflicts** - choose whose edits to accept & upload your changes. *Resolving conflicts often involves accepting the other persons edits, in which case you will probably wish to return to the feature in question and edit again (**this time save soon after the edit to try to avoid a conflict again!**).*

Additional Information and Custom Tags
---------------------------------------

When you are editing an object, you will see a strip of icons at the bottom of the attribute panel. You can add additional information by clicking these icons:

- Add elevation ![image37][]{: height="24px"}  
- Add notes ![image38][]{: height="24px"}  
- Add contacts / phone number ![image39][]{: height="24px"}  
- Add source tag ![image40][]{: height="24px"}  
- Add website ![image41][]{: height="24px"}  
- Add accessibility information ![image42][]{: height="24px"}  
- Add Wikipedia link ![image43][]{: height="24px"}  

Or, you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- This will show all the tags attached to the feature.  
![image45][]  
- Click the plus sign (+) to add keys and values or click the trash icon to delete tags.

Further tutorials
------------------

[Our external resources page](/en/resources/#iD) provides links to a number of video tutorials from various sources.

iD versus JOSM
---------------  

**iD is good for...**

- When you are doing simple edits  
- When you have fast Internet to load the imagery and save the edits  
- When you want to be sure to follow a consistent and simple tagging scheme  
- When you are restricted from installing a program on the computer you are using

**JOSM is better...**

- When you are adding many buildings (See buildings_tool plugin)
- When you are editing many polygons or lines that already exist
- When you are on an unreliable Internet connection or offline
- When you are using a specific tagging scheme (or custom presets)

[^fieldpaper]: There is a [section of LearnOSM](/en/mobile-mapping/field-papers/) giving more information about Field Papers.

The contents of this guide is available as a [presentation](/files/iD-editor-training.pptx)



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
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png