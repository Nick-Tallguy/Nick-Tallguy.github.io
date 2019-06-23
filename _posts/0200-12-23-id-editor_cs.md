---
layout: doc
title: Editor iD
permalink: /cs/beginner/id-editor/
lang: cs
category: beginner
---

iD Editor
=============

> Reviewed 2019-06-10

Začínáte mapovat pomocí Tasking Manageru pro HOT nebo MissingMaps atd.? Podívejte se na sekci [HOT-tipy](/cs/hot-tips/).  

- TOC
{:toc}

iD editor je vlastně editor spustitelný ve webovém prohlížeči. iD editor je rychlý a jednoduchý k použití a dovoluje mapovat z různých zdrojů dat jako jsou třeba satelitní a letecké snímky, GPS, dokumenty z terénu nebo z Mapillary.  

iD editor je dobrý způsob editace malých a jednoduchých změn, které nevyžadují pokročilé funkce editoru JOSM (pokročilejší mapovací nástroj pro mapování). Tato kapitola demonstruje základy editace pomocí iD editoru.  

Začínáme s iD Editorem
----------------------

-	iD editor vyžaduje aktivní internetové připojení.  
-	Otevřete váš internetový prohlížeč a jděte na stránku OpenStreetMap na [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Přihlašte se** pomocí vašeho OpenStreetMap účtu.  
-	Přesuňte se a přibližte mapu nad místo, kde chcete něco upravovat. Přesouvat se můžete pomocí držení levého tlačítka myši a posouváním mapy do vámi hledané polohy.  
-	Klikněte na malou šipku vedle nápisu **Upravit**. Potom klikněte na **Upravit pomocí iD (editor v prohlížeči)**.  

![image1][]


Uživatelské prostředí iD editoru 
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
    Save changes, *shortcut keys* **Ctrl+s** ![image8][]{: height="32px"}  
3. **Panel mapy:** Tento panel zobrazuje různé možnosti nastavení:  
    Přiblížit, *klávesová zkratka* **+** ![image9][]{: height="24px"}  
    Oddálit, *klávesová zkratka* **-** ![image10][]{: height="24px"}  
    Jít na vaši pozici ![image11][]{: height="24px"}  
    Nastavit vrstvu pozadí, *klávesová zkratka* **b** ![image12][]{: height="24px"}  
    Mapová data, *klávesová zkratka* **f** ![Map Data][]{: height="24px"}  
    Issues, *shortcut key* **i** ![Issues][]{: height="24px"}  
    Otevřít menu nápovědy, *klávesová zkratka* **h** ![image13][]{: height="24px"}  
4. **Informační panel:** Tento panel zobrazuje různé informace, jako třeba měřítko a kteří uživatelé přispěli v této oblasti.  

## Configuring the Background Layer

Klikněte na tlačítko **Nastavení pozadí** nebo použijte klávesovou zkratku **b**.![image14][]{: height="24px"}  
![image15][]  
You can **change the background layer** based on your desired tile provider (the default is Bing Aerial Imagery).  

Můžete přidat svoje vlastní mapové čtverce pomocí volby **Vlastní**. Například, pokud chcete **přidat Field Paper** [^fieldpaper], klikněte na **Vlastní** poté klikněte na ikonu lupy (hledat) pro otevření následujícího okna:-  
![image17][]   
vložte vaši **URI snímku na FieldPaper**, který bude vypadat nějak takto: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Pro **zobrazení tras GPS z vašeho počítače** (GPX formát), chyťte a pusťte GPX soubor do iD editoru.  
Pro zobrazení **GPS tras z OpenStreetmap** klikněte na čtvrteček. V obrázku níže, jsou  veřejně dostupné GPS trasy zobrazeny v různých barvách určujících směr pohybu.  
![osm gps traces][]  
To change the **appearance of the imagery** click **Display Options**.  
![DisplayOptions][]  
If there is [imagery offset](/en/josm/aerial-imagery), you can **correct the imagery offset** by clicking **Adjust imagery offset**.  
![image18][]  

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
- If you make a mistake, such as a wrong location, you can move your point to a new location by holding the left mouse button on your point and dragging it. Or, if you want to delete your point, click the left mouse button on the point, activate the context menu by clicking with the right mouse button and then click the button which looks like a trashcan. ![PointToolDelete][]{: height="24px"}  
"Bod" vytvořený v iD editoru je ve skutečnosti samostatný "uzel" se souborem "značek" na něm.  

### Kreslení čar  

Chcete-li přidat novou čáru, klikněte na tlačítko **Linie**. ![image4][]{: height="24px"}  

- Kurzor myši se změní na znaménko plus (+). Najděte cestu, která nebyla na mapě vykreslena, a obkreslete ji. Jedním kliknutím klikněte na místo, kde začíná úsek cesty, přesuňte myš a klepnutím přidáte další body. Poklepáním ukončíte proces kreslení. Všimněte si panelu vlevo.  
![image24][]  
- Stejně jako bod, vyberte příslušné značky pro vaši čáru.  
- Můžete přetáhnout body z čáry kliknutím levého tlačítka myši na bod a přetažením.  
- When you click your left mouse button on an individual point (node) on the line and either click on the right mouse button or hit the space bar to activate the context menu, you will see these tools:  
  - Continue line from this point ![PointToolContinue][]{: height="24px"}  
  - Disconnect lines at this point ![PointToolDisconnect][]{: height="24px"}  
  - Split a line into two lines at this point. ![PointToolSplit][]{: height="24px"}  
  - Delete point from line. ![PointToolDelete][]{: height="24px"}  
- Když kliknete levým tlačítkem myši na linii (ale ne na bod), uvidíte tyto nástroje:  
  -   Create a circle from a line (only active if the line is closed) ![LineToolCircularize][]{: height="24px"}  
  -   Disconnect line from other objects ![LineToolDisconnect][]{: height="24px"}  
  -   Move line ![LineToolMove][]{: height="24px"}  
  -   Square all corners ![LineToolSquare][]{: height="24px"}  
  -   Reflect the line across its short axis ![LineToolReflectShort][]{: height="24px"}  
  -   Reflect the line across its long axis ![LineToolReflectLong][]{: height="24px"}  
  -   Reverse line direction (good for rivers & one-way streets) ![LineToolReverse][]{: height="24px"}  
  -   Rotate the line around its centre ![LineToolRotate][]{: height="24px"}  
  -   Straighten the line ![LineToolStraighten][]{: height="24px"}  
  -   Delete line. ![LineToolDelete][]{: height="24px"}  

"Čára" vytvořená v iD editoru je vlastně "cesta" se "značkami" umístěnými na ní.

> Zvláštní poznámka o **Vymazání**: Obecně byste se měli vyhnout vymazání mapování ostatních lidí, pokud se to jen potřebuje zlepšit. Můžete smazat vlastní chyby, ale měli byste se pokusit *upravovat* mapované objekty jiných lidí, pokud potřebují změny. To zachovává historii položek v databázi OSM a respektuje kolegy mapery. Pokud opravdu cítíte, že by mělo být něco vymazáno, zvažte kontaktovat nejprve původního mapaře nebo jednoho z e-mailových seznamů OSM.

### Kreslení tvarů (mnohoúhelníků)

Chcete-li přidat nový mnohoúhelník, klikněte na tlačítko **Oblast**.![image34][]{: height="24px"}  

- Kurzor myši se změní na znaménko plus (+). Pokuste se vysledovat tvar budovy podle podkladu.  
- Všimnete si, že barva mnohoúhelníku se změní v závislosti na atributech, které mu přiřadíte.  
![image35][]  
- Nástroje, které jsou k dispozici při výběru mnohoúhelníku a aktivaci kontextové nabídky pravým tlačítkem myši, se podobají těm, které jsou když kliknete na čáru.  

"Mnohoúhelník" v iD editoru je vlastně "uzavřenou cestou" s umístěnými značkami na ní.

### Kreslení multipolygonů

Někdy musíte nakreslit mnohoúhelník, který má nejen vnější obrys, ale také jeden nebo více vnitřních obrysů. Představte si budovy s vnitřními dvory, nebo jezera s ostrovy. *Nekreslete tyto objekty jednou čarou* tak, aby vnitřní obrysy omezily vnější obrys. Raději nakreslete tyto obrysy odděleně, připojte značky pouze k vnějšímu obrysu, vyberte všechny obrysy a stiskněte **c**, aby bylo možné je spojit do multipolygonu neboli složeného mnohoúhelníku.

![create multipolygon][]

Když vyberete některý z obrysů nově vytvořeného multipolygonu, můžete vidět na levé straně, do kterého multipolygonu patří

![part of multipolygon][]

## Issues

The editor performs a number of checks as soon as you edit something. If it thinks that what you did might cause problems it notifies you in the issues tab. Whenever the issues icon on the right carries either a yellow (for warnings) or red (for errors) dot you should open the tab and see what it reports. This information is also displayed in the object feature tab on the left if the relevant object is selected. You are also warned that there are unresolved issues when you upload your data. 

![Issue][] ![Error][]

The lower part of the issues tab show the available rules and allows you to disable them individually though this is not recommended.

Uložení změn
--------------------

Když (a pokud) chcete uložit své úpravy na OpenStreetMap, klikněte na tlačítko **Uložit**. Na panelu vlevo se zobrazí panel pro nahrávání.  
![image36][]  

- Zadejte komentář o úpravách a klikněte na tlačítko **Uložit**.  

> Pokud jste upravili stejnou funkci (bod, cestu nebo oblast) současně s jinou osobou, která ji editovala, obdržíte varování, že vaše úpravy nelze nahrát, dokud nevyřešíte **konflikty** - vyberte, které editace přijmete a nahrajete změny. *Řešení konfliktů často zahrnuje přijetí úprav ostatních osob, v takovém případě se pravděpodobně budete muset vrátit k příslušné funkci a znovu ji upravit (**pak ji uložte brzy po úpravě, abyste pokusili znovu předejít konfliktu!**).*

Další informace a vlastní značky
---------------------------------------

When you are editing an object, you will see an "Add field" menu at the bottom of the attribute panel. You can add various additional information by selecting one of the entries (layer, elevation, wikipedia etc.).  

![AdditionalTags][]

Or you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- Zobrazí se tak všechny značky připojené k této funkci.  
![image45][]  
- Kliknutím na znaménko plus (+) přidejte klíče a hodnoty nebo klikněte na ikonu koše pro odstranění značek.

Další tutorialy
------------------

[Stránka našich externích zdrojů](/cs/resources/#iD) poskytuje odkazy na řadu video tutoriálů z různých zdrojů.

Srovnání iD a JOSM
---------------  

**iD editor je vhodný ...**

- Když děláte jednoduché úpravy  
- Pokud máte rychlý internet k načtení snímků a uložení úprav  
- Pokud chcete mít jistotu, že budete postupovat podle důsledného a jednoduchého schématu značkování  
- Pokud máte omezenou instalaci programu na počítači, který používáte

**JOSM je lepší ...**

- Když přidáváte mnoho budov (viz plugin buildings_tool)
- Když upravujete mnoho mnohoúhelníků nebo čar, které již existují
- Pokud máte nespolehlivé internetové připojení nebo jste offline
- Pokud používáte konkrétní schéma označování značkami (nebo máte vlastní předvolby)

[^fieldpaper]: Zde je [sekce LearnOSM](/cs/mobile-mapping/field-papers/) poskytující více informací o terénních dokumentech.



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
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[DisplayOptions]: /images/beginner/id-editor_display-options.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image24]: /images/beginner/id-editor_image24.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[Issue]: /images/beginner/id-editor_issue.png
[Error]: /images/beginner/id-editor_error.png
[image36]: /images/beginner/id-editor_image36.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png