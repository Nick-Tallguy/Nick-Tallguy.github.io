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
"Natvrdo" ukončete Maps.me.
Vytvořte si MWM export.
Stáhněte si export, rozbalte ho a zkopírujte .mwm soubor do svého zařízení.
Ve Správci souborů v Androidu najděte umístění .mwm souboru.
Dlouze ho zmáčkněte a poté vyberte možnost "kopírovat" nebo "vyjmout".
Přejděte do "MapsWithMe" a otevřete adresář s nejvyšším číslem (např. 170917).
Zkopírujte/přesuňte váš .mwm soubor do adresáře kliknutí na "Vložit".
Smažte existující .mwm soubor pro vaši oblast zájmu, ale zapište si jeho název.
Přejmenujte .mwm soubor tak, aby odpovídal oblasti, kterou jste si stáhli pomocí Maps.me (kterou jste právě smazali) dlouhým stisknutím (pro výběr) a klikněte na tlačítko "more" (3 vertikální tečky).
Otevřete Maps.me.

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd je taktéž GPS navigace a mapová aplikace pro Android a iOS smartphony, tablety, zejména umožňuje offline vykreslování, trasování a vyhledávání. Více informací o všemožných funkcích aplikace [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf) se dozvíte na webu vývojáře. 

![export-tool-osmand][]


### MBTiles .mbtiles
MBTiles je formát souboru pro ukládání mapových dlaždic do jediného souboru. Export Tool umožňuje uživatelům vytvořit MBTiles obsahující dlaždice z OSM, které slouží jako zdroje offline kontextu uvnitř aplikací, které je podporují. Berte na vědomí, že MBTiles extrahují z OSM všechny funkce z vybrané oblasti zájmu skrze Export Tool. Záložka ‘3 Data’ se automaticky přepne na Tree tag, rozbalovací seznam tagů a je možné si přepnout zobrazení do YAML. Více se o [MBTiles .mbtiles](https://export.hotosm.org/en/v3/learn/export_formats#mbtiles) dozvíte v sekci Learn na webu Export Tool.

![export-tool-mbtiles][]


Další formáty souborů jsou průběžně navrhovány a přidávány do Export Tool. Pokud byste chtěli některý formát v budoucnu přidat, prosím přidejte jej do komentářů u [GitHub](https://github.com/hotosm/osm-export-tool/issues) repozitáře. Další podrobné informace o každém typu formátu souboru naleznete na stránce „Formáty souborů“ v části „[Learn](https://export.hotosm.org/en/v3/learn)“ na webových stránkách nástroje.



## Upravujeme funkce mapy

Nástroj umožňuje uživateli upravit si data vybraná uvnitř definované oblasti zájmu. OSM data jsou definovaná pomocí tagových filtrů a výběrem klíčů pomocí Tagu Tree nebo YAML Formuláře. Tag Tree se využívá v běžných případech, představuje několik filtrů a výběrů, zatímco konfigurace YAML poskytuje kompletní kontrolu nad filtry a výběry s využitím filtračních definicí podobných těm v SQL.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM je otevřená globální databáze otagovaných zeměpisných prvků s třemi typy elementů:
Nody, které reprezentují bod na povrchu země.
Cesty, které jsou tvořeny řadou nodů, jenž mohou vytvořit čáry nebo polygony.
Relace, které jsou tvořeny soustavou bodů, cest nebo jiných relací.

Každý z těchto elementů může mít jakýkoliv počet key=value tagů. Např. pošta může být reprezentována cestou s tagy building=yes a amenity=post_ofiice. Pojďme si ukázat, jak se tyto tagy definují v Export Tool pomocí Tag Tree a YAML formuláře, abychom si vyfiltrovaly OSM data.

### Tag Tree
Tag Tree je nejjednodušší způsob výběru vlastností, prostým zaškrtnutím políčka u rodiče nebo potomka. Pamatujte si, že výběrem rodiče se přidají další key=value tagy přiřazené šabloně, a stejně tak potomkovi pod tímto výběrem. Každé zaškrtávací políčko rodiče odesílá jiný příkaz k filtraci dat, takže rozhodně doporučujeme prohlédnout si syntaxi pro každou šablonu umístění kurzoru nad zaškrtávací políčko, čímž se vyvolá informační box v pravé časti okna. 

![export-tool-treetag-sql][]


Např. zaškrtnutím ‘Emergency’ se automaticky zaškrtne i ‘Police Station’, ‘Ambulance Station’ a ‘Fire Station’, což jsou jeho potomci, kromě toho se taktéž vyberou všechny tagy, ve kterých je emergency=yes, amenity=police a amenity=fire_station v následujícím dotazu SQL:

emergency IS NOT NULL OR amenity IN ('police','fire_station')

Rodič ne vždy reprezentuje potomky pod sebou a nezahrnuje všechny možné tagy v šabloně. OSM tagy se postupně vyvíjí a je potřeba zajistit, aby se nástroj dokázal na tyto změny adaptovat. Pouze ty běžně nejpoužívanější tagy key=value jsou zahrnuty do potomků a nadřazené položky se snaží zahrnout ty méně používané, ale zapadající do tématu. Pokud máte návrh na úpravu těchto témat a tagů, přidejte komentář do tohoto [spreadsheetu](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) z něhož se plní Tag Tree a my změnu případně zařídíme.

![export-tool-treetag-spreadsheet][]


### YAML Formulář
Konfigurace pomocí YAML poskytuje kompletní kontrolu nad aplikací filtrů na OSM data, pomocí definicí filtrů podobných těm v SQL pro aplikaci key=value tagů. Zapamatujte si, že Tag Tree taktéž generuje syntaxi v YAML formuláři, takže se každý zaškrtnutý checkbox rodiče nebo potomka automaticky objeví v YAML boxu. Toto je výchozím bodem dotazu, který lze dále upravovat. 

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




