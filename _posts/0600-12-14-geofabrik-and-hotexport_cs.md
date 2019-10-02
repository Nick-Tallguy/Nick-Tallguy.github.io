---
layout: doc
title: Využití Geofabrik a export z HOT
permalink: /cs/osm-data/geofabrik-and-hot-export/
lang: cs
category: osm-data
---

Využití Geofabrik a export z HOT
================

> Zkontrolováno 2016-09-05  

Jakmile se naučíte přidat a upravit data v OpenStreetMap (OSM), nejspíš budete chtít data zálohovat nebo zpracovat pomocí softwaru Geographic Information System, který je pod licencí Open Source, stejně jako Quantum GIS ([www.qgis.org](http://www.qgis.org)).  

Stažení OSM dat z webu Geofabrik
-------------------------------------

OSM data si můžete jednoduše stáhnout z [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/)

![download-geofabrik][]

Data jsou rozdělena do několika regionů. Indonésii je součástí Asie, po jejím rozkliknutí se vám zobrazí stránka na obrázku níže.  

![geofabrik-asia][]

Asie je rozdělena do několika subregionů (zemí). Data získáte na stránce, která se vám zobrazí po kliknutí na stát Indonésie v modré tabulce.  

![geofabrik-indonesia][]

Pokud chcete data Indonésie ve formátu shapefile (.shp), klikněte na odkaz indonesia-latest.shp.zip a soubor se stáhne. Je zde i několik jiných formátů, ve kterých lze soubor stáhnout. Populárním formát však je shapefile (.shp) obsahující vrstvu bodů, čar a polygonů.  

Můžete si zkontrolovat poslední aktualizaci dat. Pamatujte si, že server obvykle aktualizuje data jednou za 24 hodin, takže pokud jste právě nahráli úpravy do OSM, tak se hned neobjeví ve staženém souboru, ale je potřeba počkat na nejbližší update serveru.  

Stažení OSM dat pomocí webu HOT Export Tool
--------------------------------------

[Humanitarian OpenStreetMap Team](https://www.hotosm.org/) (HOT) vytvořil online službu, která umožňuje uživatelům vytvářet vlastní OSM extrakty kdekoliv na světě, stačí si vybrat oblast, která vás zajímá, funkce mapy a formát souboru. Během několik minut se aktuální data z OSM exportují, vyfiltrují a zkonvertují. Následující sekce vás naučí používat Export Tool. Tyto infomace můžete taktéž získat v sekci ‘[Learn](https://export.hotosm.org/en/v3/learn)’ na webu export.hotosm.org.

![hot-export-tool][]

## Úvodem

Kdokoliv si může vytvořit vlastní OpenStreetMap export pomocí Export Tool - stačí si vytvořit účet. Můžete se registrovat pomocí OpenStreetMap účtu z openstreetmap.org a ověřené emailové adresy, která bude využita k zaslání odkazu na váš export, jakmile bude hotový.

## Identifikace oblasti zájmu

Oblast zájmu (Area of Interest-AOI) lze pomocí Export Tool vybrat několika způsoby. Mezi nejběžnější patří vyhledání podle názvu, zadáním souřadnic hranic čtverce, nakreslením hranic čtverce, nakreslením polygonu, použitím aktuálně zobrazené oblasti nebo nahrátím souboru geojson.

![export-tool-create][]

Jakmile jste ‘Přihlášení’ v HOT Export Tool, zobrazí se vám záložka ‘Create’. V této záložce si nastavíte samotný export, přidáte mu popis a vyberete svou AOI v mapě napravo. 

![export-tool-describe][]

### Vyhledávací pole
Existuje 6 způsobů, kterými lze definovat AOI pro váš export. První a druhý využívají vyhledávací pole, do kterého můžete zadat název vašeho místa a poté jej vybrat ze zobrazené nabídky, nebo zadáním souřadnic ohraničujícího boxu. Minimální X, minimální Y, maximální X a maximální Y (Západ, Jih, Východ, Sever) souřadnice státu lze najít [v CSV seznamu, který poskytuje Humanitarian Data Exchange (HDX)](https://data.humdata.org/dataset/bounding-boxes-for-countries).

![export-tool-search][]
![export-tool-coordinates][]


### Digitalizace 
Třetí a čtvrtou možností je kreslení hranic AOI pomocí nástroje ‘Box’, který je umístěný ve sloupci nástrojů na pravé straně obrazovky Export Tool. Nebo můžete "od ruky" nakreslit polygon přímo do mapy pomocí nástroje ‘Draw’. 

![export-tool-area-bbox][]
![export-tool-area-draw][]


### Nahrátím polygonu
Zbývající dva způsoby využívají nástroj ‘This View’ v nástrojové liště napravo u mapy. Tento nástroj zachytí okraje aktuálně zobrazené mapy a pod ním se nachází tlačítko pro ‘Import’, které vám umožní nahrát soubor s polygonem oblasti.    

![export-tool-area-view][]
![export-tool-area-import1][]


Importovaný polygon musí být soubor GeoJSON v souřadnicovém systému WGS84. Jedním z několika způsobů jak vytvořit soubor GeoJSON je web geojson.io. Jakmile máte vybranou oblast na [geojson.io](http://geojson.io/), zkopírujte si text v boxu napravo a vložte jej do nějakého editoru, např. [Atom](https://atom.io/) a uložte jako soubor GeoJSON.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


Soubor GeoJSON je potřeba ještě mírně upravit, aby se dal použít v Export Tool. Pamatujte si, že soubor nesmí obsahovat více polygonů. V nejjednodušší podobě musí soubor obsahovat “type: Polygon” a seznam souřadnic bodů/nodů, které tvoří oblast. Poté bude soubor GeoJSON bez problémů zpracován importovacím nástrojem. 

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## Výběr formátu souboru

Nástroj umožňuje extrakci OSM dat skrze Overpass API v jeho vlastním formátu Protocol Buffer Binary (PBF), ještě před filtrací dat uživatelem podle jeho požadavků na obsah mapy a přidružené tagy. Jakmile jsou filtry nastaveny, data jsou poté konvertovány do uživatelem požadovaného formátu.  

Momentálně lze konvertovat OSM data do Shapefile .shp, GeoPackage .gpkg, Garmin .img, Google Earth .kml, OSM .pbf, MAPS.ME .mwm, OsmAnd .obf, and MBTiles .mbtiles. Je potřeba vybrat nejméně jeden z formátů, aby export proběhl, ale nic vám nebrání vybrat si klidně všechny.

![export-tool-file-formats][]


### Shapefile .shp
Shapefiles jsou tabulkový formát vytvořený firmou Esri. Jsou nejpopulárnějším formátem pro GIS data. Shapefile se ve skutečnosti skládá ze 3-4 souborů, většinou sloučených do jednoho ZIP archivu. Shapefiles mají určité limity, jako třeba velikost souboru s hranicí na 2 gigabytech (GB) a nebo délka názvu sloupce 10 znaků. Více se o [Shapefiles .shp](https://export.hotosm.org/en/v3/learn/export_formats#shp) dozvíte v sekci Learn na webu Export Tool.

![export-tool-shapefile][]


### Geopackage .gpkg
OGC Geopackages obsahují geoprostorová data v jedné SQLite databázi. Geopackages jsou velmi podobné Spatialite-enabled SQLite databázím. Lze je využít ve většině používaných GIS aplikacích. Geopackages poskytují prakticky neomezenou velikost souboru a počet sloupců v tabulkách, a taktéž plnou podporu Unicode. Ideální jsou v případech, kdy potřebujete nad daty provádět různé SQL příkazy. Více se o [Geopackages.gpkg](https://export.hotosm.org/en/v3/learn/export_formats#gkpg) dozvíte v sekci Learn na webu Export Tool.

![export-tool-sql][]


### Garmin .img
.IMG soubor obsahuje všechny informace potřebné k vykreslení mapy v přenosných GPS zařízeních od firmy Garmin. Pamatujte si, že kartografický styl .img a vybrané funkce mapy nezávisí na funkcích vybraných při exportu v Export Tool - místo něj se použije výchozí styl založený na všech datech OSM. Více se o [Garmin .img](https://export.hotosm.org/en/v3/learn/export_formats#img) dozvíte v sekci Learn na webu Export Tool.

![export-tool-garmin][]


### Google Earth .kml
Keyhole Markup Language (KML) je XML formát pro grafické vykreslení bodů, čar, polygonů a přidružených atributů. Google Earth je nejznámější platforma pro zobrazení země, využívající KML, a kvůli ní byl tento formát vyvinut. Více se o [Google Earth .kml](https://export.hotosm.org/en/v3/learn/export_formats#kml) dozvíte v sekci Learn na webu Export Tool.

![export-tool-google-earth][]


### OSM .pbf
Datový formát OSM vychází z XML dokumentu, který obsahuje body, cesty a relace. Protocol Buffer Binary Format (PBF) je optimalizovaným zástupcem OSM XML, který na disku zabírá méně místa a dá se v něm rychleji hledat. Tento formát je kompatibilní pouze se specifickými OSM nástroji, jakým je např. editační software OSM. Každý .PBF vytvořený pomocí export tool by měl být referenčně kompletní - což znamená, že každý bod, cesta nebo relace tvořící cestu nebo relaci se zobrazí v PBF. Více se o [OSM .pbf](https://export.hotosm.org/en/v3/learn/export_formats#pbf) dozvíte v sekci Learn na webu Export Tool.

![export-tool-xml-code][]


### MAPS.ME .mwm
Maps.me je navigační a mapová GPS aplikace pro Android a iOS smarphony a tablety, doménou je podpora offline mapování a navigace. Více se o [MAPS.ME .mwm](https://export.hotosm.org/en/v3/learn/export_formats#mwm) dozvíte v sekci Learn na webu Export Tool. Pokud chcete vytvořit vlastní export s Maps.me na Androidu, následujte tento postup:
Otevřete Maps.me a najděte si oblast, která vás zajímá.
Přijměte upozornění od Maps.me a stáhněte si nabídnutou oblast.
"Natvrdo" ukončete Maps.me
Vytvořte si MWM export
Download the export, unzip it, and copy the .mwm file to your device
Using the Android File Manager, navigate to the location containing the .mwm file
Long-press to select it and touch the "copy" or "cut" button
Navigate to "MapsWithMe" and open the highest numbered folder (e.g. 170917)
Copy/move your .mwm file into this directory by tapping the "paste" button
Delete the existing .mwm file for your region of interest, taking note of its filename
Rename your .mwm file to match the region that was downloaded by Maps.me (which you just deleted) by long-pressing (to select) and tapping the "more" button (3 vertical dots)
Open Maps.me

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd is also a GPS Navigation and map application for Android and iOS smartphones, as well as  tablets, notably supporting offline rendering, routing, and searching. Read more about the application and its numerous features of [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf) from their main website. 

![export-tool-osmand][]


### MBTiles .mbtiles
MBTiles is a file format for storing map tiles in a single file. The Export Tool allows users to create MBTiles containing tiles from OSM, which can be used as sources of offline context within applications that support them. Please note that MBTiles will extract all the OSM features in the selected area of interest through the Export Tool, with the ‘3 Data’ tab automatically switching to a dropdown source option and zoom range, in place of the standard tree tag and YAML feature selection option. Read more about [MBTiles .mbtiles](https://export.hotosm.org/en/v3/learn/export_formats#mbtiles) in the Learn section.

![export-tool-mbtiles][]


Additional file formats are continuously being suggested and added to the Export Tool. If there is a file format that you would like to see added in the future, please make a comment on the [GitHub](https://github.com/hotosm/osm-export-tool/issues) repository. For further detailed information regarding each file format type, please visit the ‘File Formats’ page in the ‘[Learn](https://export.hotosm.org/en/v3/learn)’ section on the tool website.



## Customise Map Features

The tool allows the user to customise the data selected within the defined area of interest. The OSM data is defined by using tag filters and key selections, with the Tag Tree or YAML Form. The Tag Tree is for common use cases, presenting a curated set of filters and selections, where the YAML configuration provides complete control over filters and selections, using a SQL-like filter definition.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM is an open global database of tagged geographic features, with three types of elements:
Nodes, which represent a point on the surface of the earth
Ways, which are sets of nodes that can form lines or polygons
Relations, which are sets of nodes, ways or other relations

Each of these elements can have any number of key=value tags. For example, a post office may be represented by a way with the tags building=yes and amenity=post_office. Lets see how these tags can be defined in the Export Tool using the Tag Tree and YAML Form to filter OSM data.

### Tag Tree
The Tag Tree is the simplest way to get started selecting features, simply by ticking the desired parent or child checkboxes. Please note that selecting a parent checkbox will add additional key=value tags associated to the theme, as well as the child checkboxes below it. Each parent checkbox has a different query to filter data, so it is highly recommended that the syntax for each theme is explored by hovering over the checkbox, which will provide an info box to the right. 

![export-tool-treetag-sql][]


For example selecting the ‘Emergency’ parent checkbox, will automatically select the ‘Police Station’, ‘Ambulance Station’ and ‘Fire Station’ child checkboxes below it, yet in addition to this it will also select all tags where emergency=yes, amenity=police and amenity=fire_station in the following SQL query:

emergency IS NOT NULL OR amenity IN ('police','fire_station')

The parent checkboxes do not always represent what is available as children below, to try and account for all possible tags associated with a theme. OSM tags are continuously evolving and we want to ensure that the tool can adapt to these changes. Only the most commonly used key=value tags are represented as child checkboxes, and the parent checkboxes are used to try and encompass those not used as frequently, but fall within a theme. If you have suggestions for modifications to these themes and tags, please comment on the [spreadsheet](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) used to populate the Tag Tree, and we will try to incorporate it where appropriate.

![export-tool-treetag-spreadsheet][]


### YAML Formulář
Using a YAML configuration provides complete control over applying filters to the OSM data, by using a SQL-like filter definition to apply key=value tags. Please note that the Tag Tree also generates syntax on the YAML Form, so any parent and child checkboxes selected will automatically be applied in the YAML box. This acts as a starting point for the query which can be further edited. 

![export-tool-treetag-yaml][]


The use of YAML was chosen due to its simplicity and compatibility with SQL. The YAML feature selection format  is similar to style files used by programs such as osm2pgsql and imposm. It is whitespace sensitive, with each child element indented below its parent element, and preceded by a dash. This dash must have a space after it. Here is a basic example of a feature selection with 3 themes, buildings, waterways and hospitals:

![export-tool-yaml-code1][]


YAML has Themes, and two data structures, Mapping and Lists
Theme in the above example is: buildings
Mappings in the above example are: types and select 
Lists in the above example are: child elements of select and types

YAML: Themes
Themes are the top level keys in the YAML document, with valid characters including letters, numbers and underscores. 

YAML: Geometry Types
The list values under the mapping types can be one or more of ‘- points’, ‘- lines’, ‘- polygons’. If the types key is omitted, all three geometry types will be included in the theme.

YAML: Column Selections
List items under the mapping select key determines the columns for each theme. The following example will populate the ‘name’ and ‘amenity’ columns with their values from OSM:

![export-tool-yaml-code2][]


YAML: Filtry
Filters are under the where: key in each theme. They define what subset of OSM features belongs to that theme. The following example will filter the theme to only features where the key natural has the value waterway:

![export-tool-yaml-code3][]


Please note It is almost always necessary to have some kind of filtering, otherwise the theme will simply include all OSM features for the given geometry types. A filter is specified using SQL-like syntax, with valid keywords IS NOT NULL, AND, OR, IN, =, !=.

![export-tool-yaml-code4][]


Nastavení JOSM
Older versions of the Export Tool used JOSM Preset .XML files to define feature selections. The new version uses YAML as it is more flexible in how it transforms OSM data. The new Export Tool, however can help convert JOSM presets into YAML configurations, by selecting the ‘Load from JOSM Preset .XML’ button. Please note If the preset is more complex, it may need to be written as a new YAML configuration based on the ‘item’ elements contained in the XML.

![export-tool-load-preset][]



### Configurations

YAML configurations can be defined and saved for future use through the ‘Configs’ page. It's useful to create one configuration for a project, which can then used on all exports related to that project. Give the configuration a ‘name’ and ‘description’ that will make it discoverable by other users. Unchecking the ‘Public’ checkbox will make the configuration visible to only the user. 

![export-tool-configuration-saved][]


Please note that configurations can be edited, which is useful for evolving a feature selection during the course of a project. Saved YAML configurations can be selected via the ‘Stored Configuration’ option on the ‘3 Data’  tab when creating an export. Use the Search bar to find configurations related to your project.

![export-tool-configuration-stored][]


For further detailed information regarding feature selections and YAML, please visit the ‘Selecting Features’ and ‘YAML Specification’ in the ‘[Learn](https://export.hotosm.org/en/v3/learn)’ section on the tool website. 




[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export-tool]: /images/osm-data/hot-export-tool.png
[export-tool-create]: /images/osm-data/export-tool-create.png
[export-tool-describe]: /images/osm-data/export-tool-describe.png
[export-tool-search]: /images/osm-data/export-tool-search.png
[export-tool-coordinates]: /images/osm-data/export-tool-coordinates.png
[export-tool-area-bbox]: /images/osm-data/export-tool-area-bbox.png
[export-tool-area-draw]: /images/osm-data/export-tool-area-draw.png
[export-tool-area-view]: /images/osm-data/export-tool-area-view.png
[export-tool-area-import1]: /images/osm-data/export-tool-area-import1.png
[export-tool-geojson-io]: /images/osm-data/export-tool-geojson-io.png
[export-tool-geojson-edit1]: /images/osm-data/export-tool-geojson-edit1.png
[export-tool-geojson-edit2]: /images/osm-data/export-tool-geojson-edit2.png
[export-tool-area-import2]: /images/osm-data/export-tool-area-import2.png
[export-tool-file-formats]: /images/osm-data/export-tool-file-formats.png
[export-tool-shapefile]: /images/osm-data/export-tool-shapefile.png
[export-tool-sql]: /images/osm-data/export-tool-sql.png
[export-tool-garmin]: /images/osm-data/export-tool-garmin.jpg
[export-tool-google-earth]: /images/osm-data/export-tool-google-earth.jpg
[export-tool-xml-code]: /images/osm-data/export-tool-xml-code.png
[export-tool-mapsme]: /images/osm-data/export-tool-mapsme.png
[export-tool-osmand]: /images/osm-data/export-tool-osmand.png
[export-tool-mbtiles]: /images/osm-data/export-tool-mbtiles.jpg
[export-tool-treetag-tab]: /images/osm-data/export-tool-treetag-tab.png
[export-tool-yaml-tab]: /images/osm-data/export-tool-yaml-tab.png
[export-tool-treetag-sql]: /images/osm-data/export-tool-treetag-sql.png
[export-tool-treetag-spreadsheet]: /images/osm-data/export-tool-treetag-spreadsheet.png
[export-tool-treetag-yaml]: /images/osm-data/export-tool-treetag-yaml.png
[export-tool-yaml-code1]: /images/osm-data/export-tool-yaml-code1.png
[export-tool-yaml-code2]: /images/osm-data/export-tool-yaml-code2.png
[export-tool-yaml-code3]: /images/osm-data/export-tool-yaml-code3.png
[export-tool-yaml-code4]: /images/osm-data/export-tool-yaml-code4.png
[export-tool-load-preset]: /images/osm-data/export-tool-load-preset.png
[export-tool-configuration-saved]: /images/osm-data/export-tool-configuration-saved.png
[export-tool-configuration-stored]: /images/osm-data/export-tool-configuration-stored.png




