---
layout: doc
title: Využití OSM dat v QGIS
permalink: /cs/osm-data/osm-in-qgis/
lang: cs
category: osm-data
---

Využití OSM dat v QGIS
=================

> Tento návod můžete stáhnout jako [Using_OSM_data_in_QGIS_en.odt](/files/Using_OSM_data_in_QGIS_en.odt) nebo [Using_OSM_data_in_QGIS_en.pdf](/files/Using_OSM_data_in_QGIS_en.pdf)  
> Zkontrolováno 19.7.2015

QGIS (dříve Quantum GIS) je plnohodnotný, open-source, geografický informační systém, který funguje napříč platformami. S QGIS můžete přistupovat k aktuálním datům OSM kdykoliv chcete, vyberte značky, které chcete zahrnout a jednoduše je exportujte do snadno použitelné SQLite databáze nebo Shapefile.  

V této kapitole projdeme k tomu potřebnými kroky. Předpokládáme, že jste již stáhli a nainstalovali QGIS 2.x. Pokud jste to ještě neučinili, můžete si jej stáhnout z <http://www.qgis.org/en/site/forusers/download.html>.  

Než bude možné nahrát naši upravenou aktuální OSM vrstvu do QGIS, musíme si nejdříve stáhnout OSM data v neupraveném **.osm** formátu. Poté data převedeme do SQLite databáze, což je nenáročný databázový systém uložený v jednom souboru ve vašem systému. Nakonec vytvoříme vrstvu (nebo více vrstev), která bude obsahovat pouze typy objektů a značek, ke kterým chceme přistupovat. Tyto vrstvy můžeme v QGIS využít ve stávajícím formátu nebo je uložit do jiného, např. shapefile.  

Přístup k datům OpenStreetMap
---------------------------

První si nachystáme nějaké aktuální OSM data. Jde to několika způsoby. Ziskat data z OSM serveru stejným způsobem, jako jsme to udělali v JOSM editoru nelze, protože množství zdrojových dat ke stažení je omezeno - avšak způsob, jak stáhnout velké množství dat existuje, jak
jsme si řekli v předchozích kapitolách [Získání dat OSM](/cs/osm-data/getting-data) a [Použití programu Geofabrik a HOT Export](/cs/osm-data/geofabrik-and-hot-export).  

V tomto tutoriálu využijeme vestavěnou funkci QGIS určenou ke stahování.  

- Spusťte QGIS a jděte do *Vector -> OpenStreetMap -> Download Data...*  
- Zde si můžete vybrat z několika možností - pokud okno již zobrazuje požadovaný rozsah, zaškrtněte políčko vedle možnosti **From map canvas**. Pokud máte v QGIS vloženou vrstvu se správným rozsahem, zvolte **From layer** a vyberte vrstvu, kterou chcete použít. V našem případě vybereme možnost **Manual** (ručně) a vyplníme zeměpisné šířky a délky, které vytvoří **ohraničující rámeček** kolem oblasti, do které chceme přistupovat. Můžete vyplnit šířky a délky, které vás zajímají, ale nezapomeňte, že oblast nemůže být příliš velká neboť nebudete moci stáhnout všechna data.  

![bounding box][]

- Zvolte si název a umístění výsledného souboru s příponou **.osm** a potvrďte OK.  
- Dostanete oznámení, až se stahování dokončí. Dialog zavřete tlačítkem **Close.**  

![download complete][]

- OSM data jsou teď uložena v místě, které jste si vybrali.  

> Tato metoda přístupu k OSM datům je stejná, jako při jejich stahování do JOSM nebo v [openstreetmap.org](http://www.openstreetmap.org). Pro získání většího objemu dat můžete zkusti použít [HOT export site](http://export.hotosm.org) nebo [bbbike.org](http://extract.bbbike.org/). Pamatujte si, že stahujete komprimovaný OSM soubor, nejprve ho bude potřeba rozbalit do formátu **.osm**, než přejdeme na další krok.  


Importing Data into SQLite
---------------------------

Next we will need to import our raw **.osm** file into a SQLite Database file.  

- Go to Vector -> OpenStreetMap -> Import Topology from XML...  
- In the first field, select your **.osm** file.  
- You can change the name of the output database file if you like.  
- Keep the box checked next to "Create Connection..."  

![import dialog][]  

- Click OK.  
- When it is finished, click "Close."  


Creating Layers
--------------

Lastly, we will define layers that can be used in QGIS, customized according to our needs.  

- Go to Vector -> OpenStreetMap -> Export Topology to SpatiaLite...  
- In the first field, select the database you created in the previous step.  

![input db file][]  

- Under "Export type," select the type of features you want to create a layer for. Here we will create a layer using polygons.  

![export type][]  

Edit the layer name if you like.  

Under "Exported tags" is where the magic happens. Here we can select which tags will be included in our output layer. This gives us flexibility over exactly which data we want to access.  

- Click "Load from DB" to see a list of all the available tags in the database. Expand the window size by dragging the corner if that helps. You can see all the tags contained in this data, and also the number of features that have each tag.  
- Check the boxes next to the tags that you want to include. Here we will select a few features that will be useful for polygons that represent buildings.  

![export full][]  

When you are finished, click OK.  Close the box. Your layer should be automatically added.  

![cairo polygons][]  

Right-click on the layer and click "Open Attribute Table."  

![open attribute table][]  

You can see here that we have a table which includes only the attributes we selected.  

![attribute table][]  

Note that we have not created a layer of **only** buildings. Instead, we have created a layer that includes all of the polygons from our original data, but only includes the tags which we selected. In order to filter this layer to show only buildings, we would need to execute a query that filters only polygons where building=yes.


Shrnutí
-------

This process makes it easy to get up-to-date OSM data and pull it into QGIS. Once you have layers like this in QGIS, it is possible to save them as shapefiles, execute filters and queries, and so forth. For more detail on these functions see the Help menu in QGIS.  


[bounding box]: /images/osm-data/bounding_box.png
[download complete]: /images/osm-data/download_complete.png
[import dialog]: /images/osm-data/import_dialog.png
[input db file]: /images/osm-data/input_db_file.png
[export type]: /images/osm-data/export_type.png
[export full]: /images/osm-data/export_full.png
[cairo polygons]: /images/osm-data/cairo_polygons.png
[open attribute table]: /images/osm-data/open_attribute_table.png
[attribute table]: /images/osm-data/attribute_table.png
