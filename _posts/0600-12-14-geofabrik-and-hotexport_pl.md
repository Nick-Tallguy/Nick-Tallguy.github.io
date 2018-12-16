---
layout: doc
title: Korzystanie z Geofabrik i HOT Export
permalink: /pl/osm-data/geofabrik-and-hot-export/
lang: pl
category: osm-data
---

Korzystanie z Geofabrik i HOT Export
================

> Ten przewodnik może zostać pobrany jako [Geofabrik_and_HOT_Export_pl.odt](/files/Geofabrik_and_HOT_Export_pl.odt) lub [Geofabrik_and_HOT_Export_pl.pdf](/files/Geofabrik_and_HOT_Export_pl.pdf)  
> Przejrzano 05.09.2016  

Po nauce dodawania i edytowania danych w OpenStreetMap (OSM), możesz chcieć pozyskać te dane jako kopię zapasową lub do przetwarzania z wykorzystaniem oprogramowania Geographic Information System, które jest otwartoźródłowe takim, jak Quantum GIS ([www.qgis.org](http://www.qgis.org)).  

Pozyskiwanie danych OSM ze strony Geofabrik
-------------------------------------

Dane OSM mogą być łatwo pozyskane przez pobranie ich ze strony [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/)

![download-geofabrik][]

Dane są podzielone na kilka regionów. Indonezję można znaleźć jako część Azji, klikając na podregionie Azja w niebieskiej tabeli, a wtedy strona będzie wyglądała tak.  

![geofabrik-asia][]

Po pojawieniu się na górze strony, zobacz, jak podregion dzieli się na kraje Azji. Aby pobrać dane musisz kliknąć na Indonezji w niebieskiej tabeli, a wtedy będzie to wyglądać tak.  

![geofabrik-indonesia][]

Jeżeli chcesz zdobyć indonezyjskie dane w pliku formatu shape (.shp) kliknij na linku indonesia-latest.shp.zip, a rozpocznie się pobieranie pliku. Jest kilka formatów, w których możesz pobierać dane. Najpopularniejszym jest format plików shape (shp) z warstwami punktów, polilinii i wielokątów.  

Możesz sprawdzić datę ostatniej aktualizacji danych. Miej na uwadze, że dane na serwerze są aktualizowane co 24 godziny, więc jeśli dopiero co wgrałeś dane do OSM, to nie pojawią się one automatycznie kiedy pobierzesz dane, ale musisz poczekać na następną aktualizację na serwerze.  

Pobieranie danych OSM na stronie narzędzia HOT Export
--------------------------------------

[Humanitarian OpenStreetMap Team](https://www.hotosm.org/) (HOT) stworzył usługę internetową, która pozwala użytkownikom na tworzenie niestandardowych wyciągów z OSM dla każdego miejsca na świecie poprzez wybieranie obszaru zainteresowania, obiektów mapy i formatów plików. W ciągu kilku minut aktualne dane OSM są eksportowane, filtrowane i konwertowane. Ta sekcja jest przewodnikiem po narzędziu Export. Te informacje można znaleźć też w sekcji '[Nauka](https://export.hotosm.org/pl/v3/learn)' na stronie export.hotosm.org.

![hot-export-tool][]

## Szybki start

Każdy może utworzyć niestandardowy eksport z OpenStreetMap w narzędziu Export - wystarczy założyć konto. Możesz zarejestrować się używając konta OpenStreetMap ze strony openstreetmap.org i aktualnego adresu email, który zostanie użyty do wysłania linka do Twojego eksportu, kiedy będzie już gotowy.

## Określ obszar zainteresowania

Jest wiele sposobów na wybranie Obszaru zainteresowania (AOI) w narzędziu Export. Są to między innymi wpisanie i wyszukiwanie, określenie współrzędnych ramki ograniczającej, rysowanie ramki ograniczającej, swobodne rysowanie wielokąta, użycie aktualnego widoku, czy wgranie pliku geojson.

![export-tool-create][]

Kiedy jesteś 'zalogowany' do narzędzia HOT Export, karta 'Utwórz' staje się aktywna. Karta 'Utwórz', to miejsce, gdzie wprowadzasz ustawienia swojego eksportu, przez opisywanie go po lewej stronie i wybieranie AOI na mapie po prawej stronie. 

![export-tool-describe][]

### Pasek wyszukiwania
Jest 6 sposobów na określenie AOI dla Twojego eksportu. Pierwszy i drugi używają paska wyszukiwania, który może służyć do znajdowania miejsc przez wpisywanie ich nazw i wybieranie ich z listy poniżej lub przez definiowanie współrzędnych ramki ograniczającej. Współrzędne minimalnego X, minimalnego Y, maksymalnego X i maksymalnego Y (zachód, południe, wschód, północ) dla poszczególnych krajów można znaleźć [w pliku CSV dostarczanym przez Humanitarian Data Exchange (HDX)](https://data.humdata.org/dataset/bounding-boxes-for-countries).

![export-tool-search][]
![export-tool-coordinates][]


### Digitalizacja 
Trzeci i czwarty sposób w jaki można wybrać AOI w narzędziu Export, to rysowanie ramki ograniczającej przez wybranie opcji 'Ramka' z kolumny narzędzi po prawej stronie ekranu. Możesz także narysować dowolny wielokąt bezpośrednio na mapie wybierając narzędzie 'Rysuj'.

![export-tool-area-bbox][]
![export-tool-area-draw][]


### Wgraj wielokąt
Ostatnie dwie metody na określenie AOI wykorzystują narzędzie 'Ten widok' po prawej stronie mapy, które przechwytuje obszar aktualnego widoku mapy i narzędzie 'Importuj', które pozwala przesłać wielokąt obszaru.  

![export-tool-area-view][]
![export-tool-area-import1][]


Importowany wielokąt musi być plikiem GeoJSON w systemie współrzędnych WGS84. Jednym ze sposobów utworzenia pliku GeoJSON jest użycie strony geojson.io. Kiedy wybierzesz obszar w  [geojson.io](http://geojson.io/), skopiuj tekst z okna po prawej stronie, wklej go do wybranego edytora, jak np. [Atom](https://atom.io/) i zapisz swój plik GeoJSON.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


Plik GeoJSON musi być nieco edytowany, aby został zaakceptowany przez narzędzie Export. Zwróć uwagę, że w pliku nie może być wielokątów złożonych. W najprostszej formie plik musi stwierdzać, że to jest "type: Poligon" i zawierać listę współrzędnych punktów/węzłów, które określają obszar. Wtedy plik GeoJSON może zostać prawidłowo przetworzony przez narządzie i użyty do określenia AOI.

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## Wybieranie formatu pliku

Narzędzie pozwala wyciągać dane OSM przez Overpass API w jego natywnym formacie Protocol Buffer Binary (PBF) przed filtrowaniem danych pod kątem obiektów mapy i powiązanych tagów określonych przez użytkownika. Po przefiltrowaniu dane są konwertowane do jednego z formatu plików, wybranego przez użytkownika.  

Aktualnie narzędzie może konwertować dane OSM do plików Shape .shp, GeoPackage .gpkg, Garmin .img, Google Earth .kml, OSM .pbf, MAPS.ME .mwm, OsmAnd .obf i MBTiles .mbtiles. Przynajmniej jeden z tych formatów musi zostać wybrany, aby utworzyć eksport, ale nie ma ograniczenia, jak wiele z nich może być wybranych, co można zrobić zaznaczjąc wiele pól.

![export-tool-file-formats][]


### Plik Shape .shp
Pliki shape, to tabelaryczny format zaprojektowany przez Esri. Są najpopularniejszym formatem plików danych GIS. Plik shape, to tak na prawdę 3-4 pojedyncze pliki, spakowane razem jako archiwum ZIP. Pliki shape mają konkretne ograniczenia takie, jak rozmiar pliku, ograniczony do 2 gigabajtów (GB) i długość nazwy kolumny  limitowana do 10 znaków. Przeczytaj więcej o [plikach shape .shp](https://export.hotosm.org/en/v3/learn/export_formats#shp) w sekcji Nauka.

![export-tool-shapefile][]


### Geopackage .gpkg
OGC Geopackage zawierają dane przestrzenne w pojedynczej bazie danych SQLite. Geopackage są bardzo podobne do baz danych SQLite z dodatkiem Spatialite. Powinny dać się używać w większości aplikacji GIS. Geopackage obsługuje praktycznie nieograniczony rozmiar pliku i liczbę kolumn w tabeli oraz a pełne wsparcie dla Unicode. Te pliki są idealne zwłaszcza jeśli potrzebujesz wykonywać zapytania SQL na danych. Przeczytaj więcej o [Geopackage .gpkg](https://export.hotosm.org/en/v3/learn/export_formats#gkpg) w sekcji Nauka.

![export-tool-sql][]


### Garmin .img
Plik .IMG zawiera wszystkie informacje niezbędne do wyrenderowania mapy na urządzeniach mobilnych Garmin GPS. Zwróć uwagę, że styl kartograficzny pliku .img i obiekty wybrane na mapie są niezależne od wyboru obiektów przesłanych do narzędzia Export - zamiast tego, używany jest domyślny styl dla wszystkich danych OSM. Przeczytaj więcej o [Garmin .img](https://export.hotosm.org/en/v3/learn/export_formats#img) w sekcji Nauka.

![export-tool-garmin][]


### Google Earth .kml
Keyhole Markup Language (KML) jest opartym na XML formatem do modelowania punktów, linii, wielokątów i geograficznie powiązanych właściwości. Google Earth jest najszerzej znaną platformą do przeglądania widoków Ziemi używającą KML, co jest także powodem, dla którego stworzono ten format. Przeczytaj więcej o [Google Earth .kml](https://export.hotosm.org/en/v3/learn/export_formats#kml) w sekcji Nauka.

![export-tool-google-earth][]


### OSM .pbf
Obowiązującym w OSM formatem danych jest dokument XML z węzłami, liniami i relacjami. Protocol Buffer Binary Format (PBF) jest zoptymalizowaną reprezentacją XML OSM, który zajmuje mniej miejsca na dysku i jest szybszy w odczycie. Ten format jest kompatybilny tylko z konkretnymi narzędziami OSM, takimi jak oprogramowanie do edycji OSM. Każdy .PBF dostarczany przez narzędzie Export powinien być referencyjnie kompletny - co oznacza, że każdy węzeł, linia lub relacja odniesiona do linii lub relacji pojawi się w pliku PBF. Przeczytaj więcej o [OSM .pbf](https://export.hotosm.org/en/v3/learn/export_formats#pbf) w sekcji Nauka.

![export-tool-xml-code][]


### MAPS.ME .mwm
Maps.me to nawigacja GPS i aplikacja mapowa dla smartfonów i tabletów z Androidem oraz iOS, wspierająca zwłaszcza mapy i nawigację w trybie offline. Przeczytaj więcej o [MAPS.ME .mwm](https://export.hotosm.org/en/v3/learn/export_formats#mwm) w sekcji Nauka. Aby używać niestandardowych eksportów w Maps.me na Androidzie, wykonaj następujące kroki:
Otwórz Maps.me i przejdź do interesującego Cię obszaru
Zaakceptuj podpowiedź Maps.me i pobierz oferowany region
Zamknij Maps.me
Utwórz eksport MWM
Pobierz eksport, rozpakuj go i skopiuj plik .mwm na swoje urządzenie
Używając Menedżera plików Androida przejdź do lokalizacji zawierającej plik .mwm
Przytrzymaj długo palec, aby go zaznaczyć i dotknij przycisk "kopiuj" lub "wytnij"
Przejdź do "MapsWithMe" i otwórz folder o największym numerze (np. 170917)
Skopiuj/przenieś swój plik .mwm do tego katalogu dotykając przycisku "wklej"
Usuń istniejący plik .mwm wybranego wcześniej obszaru zapamiętując jego nazwę
Zmień nazwę swojego pliku .mwm przez długie dotknięcie (zaznaczenie) i kliknięcie przycisku "więcej" (3 poziome kropki) tak, aby odpowiadał nazwie regionu pobranego przez Maps.me (ten który usunąłeś przed chwilą) 
Otwórz Maps.me

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd także jest nawigacją GPS i aplikacją mapową dla smartfonów oraz tabletów z Androidem i iOS, szczególnie wspierającą renderowanie, wyznaczanie trasy i szukanie w trybie offline. Przeczytaj więcej o aplikacji i wielu funkacjach [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf) na jej głównej stronie. 

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


### YAML Form
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


YAML: Filters
Filters are under the where: key in each theme. They define what subset of OSM features belongs to that theme. The following example will filter the theme to only features where the key natural has the value waterway:

![export-tool-yaml-code3][]


Please note It is almost always necessary to have some kind of filtering, otherwise the theme will simply include all OSM features for the given geometry types. A filter is specified using SQL-like syntax, with valid keywords IS NOT NULL, AND, OR, IN, =, !=.

![export-tool-yaml-code4][]


JOSM Presets
Older versions of the Export Tool used JOSM Preset .XML files to define feature selections. The new version uses YAML as it is more flexible in how it transforms OSM data. The new Export Tool, however can help convert JOSM presets into YAML configurations, by selecting the ‘Load from JOSM Preset .XML’ button. Please note If the preset is more complex, it may need to be written as a new YAML configuration based on the ‘item’ elements contained in the XML.

![export-tool-load-preset][]



### Konfiguracje

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




