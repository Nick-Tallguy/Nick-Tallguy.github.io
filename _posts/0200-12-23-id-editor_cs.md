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
> Zkontrolováno 2016-03-30  

Začínáte mapovat pomocí Tasking Manageru pro HOT nebo MissingMaps atd.? Podívejte se na sekci [HOT-tips section](/en/hot-tips/).  

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

- Klikněte na navigační tlačítka pro přesun snímků. Klepnutím na tlačítko Reset se vrátíte do výchozí pozice. ![image20][]  

Základní úpravy s iD  
----------------------  

### Přidávání bodů  

Chcete-li přidat nový bod, klikněte na tlačítko **Bod**. ![image3][]{: height="24px"}  

- Kurzor myši se změní na znaménko plus (+). Nyní klikněte na pozici, kterou znáte a označte místo. Pokud například víte, že ve vaší oblasti je nemocnice, klikněte na místo nemocnice.  
![image21][]  
- Všimněte si, že je přidán nový bod. Současně se změní levý panel tak, aby zobrazoval formulář, ve kterém můžete vybrat atributy objektu. Klepnutím na položku **Nemocnice** označte místo jako nemocnici.  
![image22][]  
- Formuláře můžete použít k vyplnění podrobných informací o vašem místě. Můžete vyplnit název nemocnice, adresu a / nebo další doplňující informace. Všimněte si, že každá funkce bude mít různé možnosti, v závislosti na tom, jakou značku vyberete z panelu funkcí.  
- Pokud uděláte chybu, například špatné místo, můžete přemístit svůj bod na nové místo podržením levého tlačítka myši na místě a přetažením. Nebo pokud chcete smazat svůj bod, klepněte na levé tlačítko myši v bodě, aktivujte kontextové menu klepnutím pravým tlačítkem myši a poté klikněte na tlačítko, které vypadá jako koš. ![image23][]{: height="24px"}  
"Bod" vytvořený v iD editoru je ve skutečnosti samostatný "uzel" se souborem "značek" na něm.  

### Kreslení čar  

Chcete-li přidat novou čáru, klikněte na tlačítko **Čára**. ![image4][]{: height="24px"}  

- Kurzor myši se změní na znaménko plus (+). Najděte cestu, která nebyla na mapě vykreslena, a obkreslete ji. Jedním kliknutím klikněte na místo, kde začíná úsek cesty, přesuňte myš a klepnutím přidáte další body. Poklepáním ukončíte proces kreslení. Všimněte si panelu vlevo.  
![image24][]  
- Stejně jako bod, vyberte příslušné značky pro vaši linku.  
- Můžete přetáhnout body z linky kliknutím levého tlačítka myši na bod a přetažením.  
- Můžete také přesunout celou čáru jejím výběrem a zvolením nástroje **Přesunout**. Potom přetáhněte čáru na novou pozici. ![image30][]{: height="24px"}  
- Když klepnete levým tlačítkem myši na jednotlivý bod (uzel) na řádku a kliknutím pravým tlačítkem myši aktivujete místní nabídku, uvidíte tyto nástroje:  
- Smazat bod z čáry. ![image23][]{: height="24px"}  
- Odpojit bod od čáry. ![image26][]{: height="24px"}  
- Rozdělit čáru na dvě čáry od místa, které jste vybrali. ![image27][]{: height="24px"}  
- Když kliknete levým tlačítkem myši na řádek (ale ne na bod), uvidíte tyto nástroje:  
-   Smazat čáru. ![image23][]{: height="24px"}  
-   Create a circle from a line (only active if the line is closed) ![image29][]{: height="24px"}  
-   Move line ![image30][]{: height="24px"}  
-   Form a square shape from a line (only active if the line is closed) ![image31][]{: height="24px"}  
-   Reverse line direction (good for rivers & one-way streets) ![image32][]{: height="24px"}  

A "line" created in the iD editor is actually a "way" with "tags" on it.

> Zvláštní poznámka o **Vymazání**: Obecně byste se měli vyhnout vymazání mapování ostatních lidí, pokud se to jen potřebuje zlepšit. Můžete smazat vlastní chyby, ale měli byste se pokusit *upravovat* mapované objekty jiných lidí, pokud potřebují změny. To zachovává historii položek v databázi OSM a respektuje kolegy mapery. Pokud opravdu cítíte, že by mělo být něco vymazáno, zvažte kontaktovat nejprve originálního mapaře nebo jednoho z e-mailových seznamů OSM.

### Drawing Shapes (Polygons)

To add a new multi-sided shape, click on the **Area** button. ![image34][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Try to trace a building using the imagery as a guide.  
- You will notice that the color of your shape will change depending on the attributes that you assign to it.  
![image35][]  
- The tools that are available when you select a shape and activate the context menu with the right mouse button are similar to those when you click on a line.  

A "polygon" in the iD editor is actually a "closed way" with tags on it.

### Kreslení multipolygonů

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