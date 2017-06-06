---
layout: doc
title: Editor iD
permalink: /cs/beginner/id-editor/
lang: cs
category: beginner
---

Editor iD
=============

> Tato příručka může být stažena jako [beginner_id-editor_cs.odt](/files/beginner_id-editor_cs.odt) nebo [beginner_id-editor_cs.pdf](/files/beginner_id-editor_cs.pdf)  
> Reviewed 2016-03-30  

- TOC
{:toc}

iD editor je vlastně editor spustitelný ve webovém prohlížeči. iD je rychlý a jednoduchý k použití a dovoluje mapovat z různých zdrojů dat jako třeba satelitní a letecké snímky, GPS, dokumenty z terénu nebo z Mapillary.  

iD editor je dobrý způsob editace malých a jednoduchých změn, které nevyžadují pokročilé funkce editoru JOSM (pokročilejší mapovací nástroj pro mapování). Tato kapitola demonstruje základy editace pomocí iD.  

Začínáme s iD editorem
----------------------

-	iD editor vyžaduje aktivní internetové připojení.  
-	Otevřete váš internetový prohlížeč a jděte na stránku OpenStreetMap na [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Přihlašte se** pomocí vašeho OpenStreetMap účtu.  
-	Přesuňte se a přibližte mapu nad místo, kde chcete něco upravovat. Přesouvat se můžete pomocí držení levého tlačítka myši a posouváním mapy do vámi hledané polohy.  
-	Klikněte na malou šipku vedle nápisu **Editovat*. Potom klikněte na **Editovat pomocí iD (editor v prohlížeči)**.  

![image1][]


Uživatelské prostředí editoru iD
-------------------------
![image2][]

1. **Panel změny objektu:** Tento panel ukazuje tagy objektu vybraného v mapě.  
	Můžete přidat nebo změnit tagy z tohoto panelu.  
2. **Nástroje:** Tento panel ukazuje základní nástroje pro editaci:  
    Nakreslit bod (uzel), *klávesová zkratka* **1** ![image3][]{: height="24px"}  
    Nakresli čáru (cesta), *klávesová zkratka* **2** ![image4][]{: height="24px"}  
    Nakresli plochu (polygon), *klávesová zkratka* **3** ![image5][]{: height="24px"}  
    Vrátit zpět, *klávesová zkratka* **Ctrl+z** ![image6][]{: height="24px"}  
    Provést znovu, *klávesová zkratka* **Ctrl+y** ![image7][]{: height="24px"}  
    Uložit změny, *klávesová zkratka* **Ctrl+s** ![image8][]{: height="24px"}  
3. **Panel mapy:** Tento panel zobrazuje různé možnosti nastavení:  
    Přiblížit, *klávesová zkratka* **+** ![image9][]{: height="24px"}  
    Oddálit, *klávesová zkratka* **-** ![image10][]{: height="24px"}  
    Jít na vaši pozici ![image11][]{: height="24px"}  
    Nastavit vrstvu pozadí, *klávesová zkratka* **b** ![image12][]{: height="24px"}  
    Mapová data, *klávesová zkratka* **f** ![Map Data][]{: height="24px"}  
    Otevřít menu nápovědy, *klávesová zkratka* **h** ![image13][]{: height="24px"}  
4. **Informační panel:** Tento panel zobrazuje různé informace, jako třeba měřítko a kteří uživatelé přispěli v této oblasti.  

Nastavení vrstvy na pozadí
--------------------------------

Klikněte na tlačítko **Nastavení pozadí** nebo použijte klávesovou zkratku **b**.![image14][]{: height="24px"}  
![image15][]  
Pro změnu **světlosti pozadí** klikněte na jeden z těchto čtverečků. Úrovně jsou 100%, 75%, 50% a 25% ![image16][]{: height="24px"}  
Můžete také **změnit vrstvu na pozadí** podle různých poskytovatelů dat (výchozí jsou Bing fotomapy).  

Můžete přidat svoje vlastní mapové čtverce pomocí volby **Vlastní**. Například, pokud chcete **přidat Field Paper** [^fieldpaper], klikněte na **Vlastní** poté klikněte na ikonu lupy (hledat) pro otevření následujícího okna:-  
![image17][]   
vložte vaši **URI snímku na FieldPaper**, který bude vypadat nějak takto: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Pro **zobrazení tras GPS z vašeho počítače** (GPX formát), chyťte a pusťte GPX soubor do iD editoru.  
Pro zobrazení **GPS tras z OpenStreetmap** klikněte na čtvrteček. V obrázku níže, veřejně dostupní GPS trasy jsou zobrazeny v různých barvách určujících směr pohybu.  
![osm gps traces][]  
Pokud je [fotomapa posunutá](/en/josm/aerial-imagery), můžete **opravit posunutí** kliknutím na  **Opravit zarovnání**. ![image18][]  

- Click the navigation buttons to move the imagery. Click the reset button to return to the default position. ![image20][]  

Basic Editing with iD  
----------------------  

### Adding Points  

To add a new point, click on the **Point** button. ![image3][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Now, click on a position that you know to mark a location. For example, if you know that there is a hospital in your area, click on the position of the hospital building.  
![image21][]  
- Notice that a new point is added. At the same time, the left panel will change to show a form where you can select attributes for the object. Click **Hospital Grounds** to tag the point as a hospital.  
![image22][]  
- You can use the forms to fill detail information about your point. You can fill hospital name, address, and/or other additional information. Note that each feature will have different options, depending on what tag you choose from the feature panel.  
- If you make a mistake, such as a wrong location, you can move your point to a new location by holding the left mouse button on your point and dragging it. Or, if you want to delete your point, click the left mouse button on the point and then click the button which looks like a trashcan. ![image23][]{: height="24px"}  
A "point" created in the iD editor is actually a standalone "node" with a set of "tags" on it.  

### Drawing Lines  

To add a new line, click on the **Line** button. ![image4][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Find a road that hasn’t been drawn on the map and trace it. Click once on a point where the road segment begins, move your mouse, and click to add additional points. Double-click to end the drawing process. Notice the panel on the left.  
![image24][]  
- Just as with a point, select the appropriate tags for your line.  
- You can drag points from the line by clicking your left mouse button on a point and dragging it.  
- You also can move the whole line by selecting it, and choosing the **Move tool**. Then drag the line to a new position. ![image30][]{: height="24px"}  
- When you click your left mouse button on an individual point (node) on the line, you will see these tools:  
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
- The tools that are available when you select a shape are similar to those when you click on a line.  

A "polygon" in the iD editor is actually a "closed way" with tags on it.

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
[osm gps traces]: /images/beginner/id-editor_gps_public.png