---
layout: doc
title: Geofabrik und den HOT Export benutzen
permalink: /de/osm-data/geofabrik-and-hot-export/
lang: de
category: osm-data
---

Geofabrik und den HOT Export benutzen
================

> Diese Anleitung kann als [Geofabrik_and_HOT_Export_de.odt](/files/Geofabrik_and_HOT_Export_de.odt) oder [Geofabrik_and_HOT_Export_de.pdf](/files/Geofabrik_and_HOT_Export_de.pdf) heruntergeladen werden  
> Geprüft 2016-09-05  

Nachdem man gelernt hat Daten in OpenStreetMap (OSM) zu editieren und hinzuzufügen, möchte man nun vielleicht die Daten, als Backup oder zur Verarbeitung mit Geografischen Information Systemen, welche Open Source wie z.B. Quantum GIS ([www.qgis.org](http://www.qgis.org)) sein können, erhalten.  

Daten von der Geofabrik Website herunterladen
-------------------------------------

Die OSM Daten können einfach heruntergeladen werden von [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/)

![download-geofabrik][]

Die Daten sind in einzelne Regionen unterteilt. Indonesien kann als Teil von Asien gefunden werden, indem in der blauen Tabelle auf die Subregion Asien geklickt wird. Dann sieht die Seite etwa so aus.  

![geofabrik-asia][]

Nachdem der obere Teil der Seite erschienen ist, sehen Sie, wie sich die Subregion in die Länder Asiens aufteilt. Um die Daten herunterzuladen, müssen Sie in der blauen Tabelle auf den indonesischen Staat klicken. Anschließend wird die Seite so aussehen:  

![geofabrik-indonesia][]

Wenn Sie dann die Daten Indonesiens im Shapefile (.shp) Format erhalten möchten, können Sie auf den indonesia-latest.shp.zip Link klicken wodurch die Datei heruntergeladen wird. Es gibt verschiedene Formate, in denen die Daten heruntergeladen werden können. Ein gängiges Format ist das Shapefile (shp) Format, das eine Punkte-, eine Wege- und eine Polygonebene enthält.  

Sie können überprüfen, wann die Daten das letzte Mal aktualisiert wurden. Bitte beachten Sie, dass der Server die Daten für gewöhnlich alle 24 Stunden aktualisiert. Wenn Sie also gerade erst Daten zu OSM hinzugefügt haben, werden sie nicht automatisch in ihrem Download enthalten sein, sondern Sie müssen zunächst darauf warten, dass der Server die neusten Änderungen erhält.  

OSM Daten von der HOT Export Tool Webseite erhalten
--------------------------------------

Das [Humanitarian OpenStreetMap Team](https://www.hotosm.org/) (HOT) bietet einen Onlineservice an, der es Benutzern erlaubt, spezifische OSM Extrakte von überall auf der Welt zu erstellen, indem man ein Gebiet auswählt, gewünschte Kartenelemente und ein Dateiformat. Innerhalb von Minuten werden aktuelle OSM Daten exportiert, gefiltert und konvertiert. Der nachfolgende Abschnitt zeigt, wie man das Export Tool verwendet. Diese Information ist auch im‘[Learn](https://export.hotosm.org/en/v3/learn)’ Abschnitt auf export.hotosm.org zu finden.

![hot-export-tool][]

## Schnellstart

Jeder der ein Benutzerkonto hat, kann einen spezifische OpenStreetMap Export mit dem Export Tool erstellen. Ein OpenStreetMap Benutzerkonto mit gültiger E-mail-Adresse genügt, damit nach erfolgreichem Export ein Link zum Herunterladen dorthin gesendet werden kann.

## Gebiet angeben

Es gibt mehrere Möglichkeiten ein Gebiet (Area of Interest - AOI) imExport Tool auszuwählen. Dies sind die Angabe von Koordinaten einer Bounding Box (eingrenzendes Rechteck), das Zeichnen einer Bounding Box, das Zeichnen eines Polygons (Vieleck), das Verwenden der aktuellen Ansicht oder durch das Hochladen einer geojson Datei.

![export-tool-create][]

Sobald man sich im HOT Export Tool angemeldet hat, wird das 'Erstellen' Tab verfügbar. Hier definiert man seinen Export durch eine Beschreibung auf der linken Seite und der Auswahl des Gebiets (AOI) auf der Karte auf der rechten Seite. 

![export-tool-describe][]

### Suchleiste
Es gibt 6 Wege ein Gebiet (AOI) für den Export zu definieren. Der erste und der zweite Weg verwenden die Suchleiste, welche einen Ort durch Eingabe des Namens und dessen Auswahl im Ergebnis darunter findet oder durch die Definition von Bounding Box Koordinaten. Die Minimum X, Minimum Y, Maximum X und Maximum Y (Westen, Süden, Osten, Norden) Koordinaten eines Landes können [in einer CSV Liste des Humanitarian Data Exchange (HDX)](https://data.humdata.org/dataset/bounding-boxes-for-countries) gefunden werden.

![export-tool-search][]
![export-tool-coordinates][]


### Digitalisiert 
Der dritte und vierte Weg zur Auswahl eines Gebiets im Export Tool ist entweder das Zeichnen einer Bounding Box, durch Auswahl der 'Box' Option aus der Werkzeugspalte auf der rechten Seite des Bildschirms oder das freihändige Einzeichnen eines Polygons direkt auf der Karte, durch Auswahl des 'Zeichnen' Werkzeugs.

![export-tool-area-bbox][]
![export-tool-area-draw][]


### Ein Polygon hochladen
Die letzten zwei Wege, wie man ein Gebiet auswählen kann, ist durch das 'Diese Ansicht' Werkzeug auf der rechten Seite der Karte, welches die Ausdehnung der aktuellen Kartenansicht nimmt oder durch das 'Import' Werkzeug, welches das Hochladen eines Flächenpolygons ermöglicht.  

![export-tool-area-view][]
![export-tool-area-import1][]


Das importierte Polygon muss in Form einer GeoJSON Datei in WGS84 geographischen Koordinaten vorliegen. Eine Möglichkeit eine GeoJSON Datei zu erzeugen bietet die Webseite geojson.io. Hat man ein Gebiet ausgewählt unter [geojson.io](http://geojson.io/), kopiert man den Text in der rechten Box und fügt ihn in einen Editor seiner Wahl ein, wie z.B. [Atom](https://atom.io/) und speichert seine GeoJSON Datei.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


Die GeoJSON Datei muss leicht editiert werden, damit es das Export Tool akzeptiert. Bitte beachten, dass keine Multipolygone verwendet werden können. In der einfachsten Version muss nur angegeben werden, dass es sich um ein "type: Polygon" handelt und die Koordinaten der Punkte/Nodes des Gebiets aufgelistet werden. Die GeoJSON Datei wird dann erfolgreich durch das Tool analysiert und zur Definition des Gebietes (AOI) verwendet.

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## Datei Formate auswählen

Das Tool erlaubt es OSM Daten, unter Hilfe der Overpass API im nativen Protocol Buffer Binary (PBF) Dateiformat, zu extrahieren, nachdem die Daten nach den vom Benutzer angegebenen Kartenelementen gefiltert wurden. Nach dem Filtern der Daten wird die Datei ins gewünschte Dateiformat des Benutzers konvertiert.  

Aktuell kann das Tool OSM Daten in Shapefile .shp, GeoPackage .gpkg, Garmin .img, Google Earth .kml, OSM .pbf, MAPS.ME .mwm, OsmAnd .obf und MBTiles .mbtiles konvertieren. Mindestens ein Dateiformat muss für den Export ausgewählt werden, für die Anzahl gibt es aber keine Einschränkung, was durch mehrere Auswahlboxen erledigt werden kann.

![export-tool-file-formats][]


### Shapefile .shp
Shapefiles sind tabellarische Formate, welche durch Esri entwickelt wurden. Sie sind das beliebtestes Dateiformat für GIS Daten. Ein Shapefile ist eigentlich 3-4 individuelle Dateien, im Normalfall als ZIP Archiv zusammengefasst. Shapefiles haben bestimmte Einschränkungen, wie etwa eine Dateigröße bis maximal 2 Gigabytes (GB) und eine Spaltennamenlänge von maximal 10 Zeichen. Im [Shapefiles .shp](https://export.hotosm.org/en/v3/learn/export_formats#shp) Lernkapitel gibt es mehr dazu zu lesen.

![export-tool-shapefile][]


### Geopackage .gpkg
OGC Geopackages speichern geospatiale Daten in einer einzigen SQLite Datenbank. Geopackages sind sehr ähnlich den Spatialite fähigen SQLite Datenbanken. Sie sollten in den meisten bekannten GIS Anwendungen verwendet werden können. Geopackages unterstützen uneingeschränkte Dateigrößen, beliebig viele Spalten in Tabellen und unterstützen Unicode. Sie sind besonders geeignet falls man SQL Abfragen über die Daten ausführen möchte. Im [Geopackages.gpkg](https://export.hotosm.org/en/v3/learn/export_formats#gkpg) Lernkapitel gibt es mehr darüber zu lesen.

![export-tool-sql][]


### Garmin .img
Eine .IMG Datei beinhaltet alle Informationen zum Rendern einer Karte auf einem mobilen Garmin GPS Gerät. Man beachte bitte, dass der kartografische .img Stil und die Auswahl der Kartenelemente unabhängig von der übertragenen Kartenelementauswahl an das Export Tool sind. Im  [Garmin .img](https://export.hotosm.org/en/v3/learn/export_formats#img) Lernkapitel kann man mehr darüber lesen.

![export-tool-garmin][]


### Google Earth .kml
Die Keyhole Markup Language (KML) ist ein XML-basiertes Format zur Darstellung von Punkten, Linien, Polygonen und dazugehörigen geografischen Eigenschaften. Google Earth ist die bekannteste, browserbasierte Erderkundungsplattform, die KML verwendet, wofür es auch entwickelt wurde. Im [Google Earth .kml](https://export.hotosm.org/en/v3/learn/export_formats#kml) Lernkapitel kann man mehr darüber lesen.

![export-tool-google-earth][]


### OSM .pbf
Das anerkannte Datenformat für OSM ist ein XML Dokument aus Nodes, Wegen und Relationen. Das Protocol Buffer Binary Format (PBF) ist eine optimierte Darstellung von OSM XML, was weniger Speicherplatz verbraucht und schneller einzulesen ist. Das Format ist nur mit OSM spezifischen Werkzeugen kompatibel wie OSM Editoren. Jede .PBF Datei des Export Tools sollte in sich komplett sein - das heißt, jede Node, jeder Weg und jede Relation die durch einen Weg oder eine Relation referenziert wird, wird in der .PBF Datei auftauchen. Im [OSM .pbf](https://export.hotosm.org/en/v3/learn/export_formats#pbf) Lernkapitel kann man mehr dazu lesen.

![export-tool-xml-code][]


### MAPS.ME .mwm
Maps.me ist eine GPS Navigations- und Kartenanwendung für Android und iOS Smatphones und Tablets, die offline Mapping und Navigation unterstützt. Im [MAPS.ME .mwm](https://export.hotosm.org/en/v3/learn/export_formats#mwm) Lernkapitel kann man mehr dazu lesen. Um einen angepassten Export mit Maps.me auf Android zu verwenden, folgt man den folgenden Schritten:
Man öffnet Maps.me und navigiert zu einer gewünschten Region.
Man akzeptiert die Nachfrage von Maps.me und lädt die angebotene Region herunter.
Man schließt Maps.me
Man erstellt einen MWM Export
Man lädt den Export herunter, entpackt ihn und kopiert die .mwm Datei auf das Gerät
Man navigiert mit dem Android Dateimanager zum Dateipfad, der die .mwm Datei enthält
Man drückt lange auf den Namen um sie auszuwählen und drückt den "Kopieren" oder "Ausschneiden" Button
Man navigiert zu "MapsWithMe" und öffnet den am höchsten nummerierten Ordner (z.B. 170917)
Man kopiert/verschiebt die .mwm Datei in diesen Ordner durch drücken des "Einfügen" Buttons
Man löscht die in Maps.me heruntergeladene, ursprüngliche .mwm Datei für sein Gebiet, merkt sich aber den Dateinamen
Man nennt seine .mwm Datei um, entsprechend des Namens der durch Maps.me heruntergeladenen Region (die Datei, die man gerade gelöscht hat) durch langes Drücken auf den Namen (zur Auswahl) und drückt den "Mehr" Button (3 vertikale Punkte)
Man öffnet Maps.me

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd ist ebenfalls eine GPS Navigation- und Kartenanwendung für Android und iOS Smartphones, sowie Tablets, die offline Rendering, Routing und Suche ermöglicht. Mehr über die Anwendung und ihre zahlreichen Funktionen von [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf) kann auf der Webseite der Anwendung gelesen werden. 

![export-tool-osmand][]


### MBTiles .mbtiles
MBTiles is ein Dateiformat zur Speicherung von Kartenkacheln in einer einzigen Datei. Das Export Tool erlaubt es Benutzern MBTiles zu erstellen, die Kacheln von OSM enthalten, die als Quelle für Offline Anwendungen verwendet werden können, die dies unterstützen. Man beachte, dass MBTiles alle OSM Kartenelemente aus dem im Export Tool ausgewählten Gebiet exportieren und das '3 Daten' Tab automatisch zu einer Dropdown Quelloption und Zoomstufe wechselt, im Falle der Standard Baum Tag und YAML Kartenelementeauswahloption. Mehr darüber erfährt man im [MBTiles .mbtiles](https://export.hotosm.org/en/v3/learn/export_formats#mbtiles) Lernkapitel.

![export-tool-mbtiles][]


Zusätzliche Dateiformate werden ständig vorgeschlagen und dem Export Tool hinzugefügt. Möchte man selbst ein weiteres Dateiformat hinzu bekommen, kann man einen Kommentar im [GitHub](https://github.com/hotosm/osm-export-tool/issues) Repository hinterlassen. Weitere Informationen zu den Dateiformattypen findet man auf der 'Dateiformat' Seite im ‘[Lernkapitel](https://export.hotosm.org/en/v3/learn)’ der Tool Webseite.



## Kartenelemente anpassen

Das Tool erlaubt es Benutzern die im Gebiet ausgewählten Daten anzupassen. Die OSM Daten werden durch Tagfilter und Schlüsselselektion definiert, als Tagbaum oder im YAML Format. Der Tagbaum ist für allgemeine Anwendungsfälle mit einem vorbereitetem Satz an Filtern und einer möglichen Auswahl, wobei die YAML Konfiguration eine komplette Kontrolle über die Filter und Auswahl ermöglicht, mit einer SQL ähnlichen Filter Definition.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM ist eine öffentliche, globale Datenbank mit erfassten geografischen Elementen mit 3 Arten von Elementen:
Nodes, die einen Punkt repräsentieren
Wege, als ein Satz von Punkten, welche Linien oder Polygone formen
Relationen, als ein Satz von Punkten, Wegen oder anderer Relationen

Jedes dieser Elemente kann eine beliebige Anzahl an key=value Tags besitzen. Zum Beispiel eine Poststelle kann durch eine Linie mit den Tags building=yes und amenity=post dargestellt werden. Schauen wir uns an, wie diese Tags im Export Tool definiert werden können mit Hilfe des Tagbaums oder im YAML Format, um OSM Daten zu filtern.

### Tagbaum
Der Tagbaum ist der einfachste Weg, um Elemente auszuwählen, durch einfaches anklicken der gewünschten Eltern und Kind Checkboxen. Man beachte, dass die Auswahl einer Eltern Checkbox zusätzliche zugehörige key=value Tags auswählen wird, genauso wie beinhaltete Kind Checkboxen. Jede Eltern Checkbox hat eine andere Abfrage um Daten zu filtern, wir empfehlen deshalb, die Syntax zu prüfen, durch Positionierung der Maus über der Checkbox, was eine Infobox hervorbringt. 

![export-tool-treetag-sql][]


Wählt man zum Beispiel die 'Emergency' Eltern Ceckbox, werden automatisch die 'Police Station', 'Ambulance Station' und 'Fire Station' darunter ausgewählt, des Weiteren werden auch alle Tags mit emergency=yes, amenity=police und amenity=fire_station  in folgender SQL Abfrage ausgewählt:

emergency IS NOT NULL OR amenity IN ('police','fire_station')

Eltern Checkboxen beinhalten nicht immer alle möglichen Tags zu einem Thema als Kinder Checkboxen. OSM Tags entwickeln sich ständig weiter und wir möchten sicherstellen, dass das Tool sich an diese Änderungen anpasst. Nur die gebräuchlichsten key=value Tags sind als Kind Checkboxen enthalten und die Eltern Checkboxen werden nur zur Gruppierung solchen Themen verwendet. Falls man Änderungsvorschläge für diese Themen und Tags hat, kann man in dieser [Tabelle](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) kommentieren, die zur Erstellung des Tagbaums dient, und wir werden es wenn passend übernehmen.

![export-tool-treetag-spreadsheet][]


### YAML Form
Verwendet man eine YAML Konfiguration hat man die komplette Kontrolle über die angewendete Filter über die OSM Daten, durch Verwendung einer SQL ähnlichen Filterdefinition zur key=value Auswahl. Man beachte, dass der Tagbaum auch eine Syntax in YAML Form generiert, so dass alle ausgewählten Eltern und Kind Checkboxen auch in der YAML Box Anwendung finden. Dies dient als Startpunkt für die Abfrage, die weiter angepasst werden kann. 

![export-tool-treetag-yaml][]


Die Verwendung von YAML wurde gewählt, durch seine Einfachheit und Kompatibilität mit SQL. Die YAML Elementauswahl ist ähnlich den Styledateien, die durch Programme wie osm2pgsql und imposm verwendet werden. Sie ist Leerzeichen sensitiv, mit eingerückten Kindelementen unter den Eltern und einem vorstehendem Strich. Dem Strich muss ein Leerzeichen folgen. Es folgt ein Standardbeispiel einer Elementauswahl mit 3 Themen, Gebäuden, Wasserwegen und Krankenhäusern:

![export-tool-yaml-code1][]


XAML hat Themen und zwei Datenstrukturen, Mapping und Listen
Das Thema im oberen Beispiel ist: buildings
Mappings im oberen Beispiel sind: types und select 
Listen im oberen Beispiel sind: Kinderelemente von select und types

YAML: Themen
Themen sind die obersten Schlüsseln im YAML Dokument mit zulässigen Zeichen wie Buchstaben, Nummern und Unterstrichen. 

YAML: Geometrie Typen
Die Listenwerte unter den Mappingtypen können ein oder mehrere '- Punkte', '- Linien', '- Polygone' sein. Wird der Typenschlüssel weggelassen, werden alle drei Geometrietypen im Thema einbezogen.

YAML: Spaltenauswahl
Listenpunkte unter dem Mappingauswahlschlüssel bestimmen die Spalten für jedes Thema. Das folgende Beispiel wird die 'name' und 'amenity' Spalten mit ihren Werten aus OSM befüllen:

![export-tool-yaml-code2][]


YAML: Filter
Filter sind unter dem where: Schlüssel in jedem Thema. Sie definieren welche Teilmengen von OSM Elementen zu einem Thema gehören. Das folgende Beispiel filtert das Thema nach Elementen bei denen der Schlüssel natural den Wert waterway besitzt:

![export-tool-yaml-code3][]


 Man beachte, dass es fast immer notwendig ist Filter einzusetzen, da sonst alle OSM Elemente im Thema beinhaltet sind für die gegebenen Geometrietypen. Ein Filter wird definiert durch eine SQL ähnliche Syntax mit den folgenden möglichen Schlüsselwörtern IS NOT NULL, AND, OR, IN, =, !=.

![export-tool-yaml-code4][]


JOSM Vorlagen
Ältere Versionen des Export Tools verwenden JOSM Vorlagen-XML-Dateien um eine Auswahl an Kartenelementen zu definieren. Die neue Version verwendet YAML, da es flexibler in der Art und Weise ist, wie es OSM Daten transformiert. Das neue Export Tool kann dabei helfen JOSM Vorlagen in YAML Konfigurationen zu konvertieren, indem man den 'Lade aus JOSM Vorlage .XML' Button verwendet. Man beachte, dass wenn die Vorlage etwas komplexer ist, es als neue YAML Konfiguration, basierend auf den 'item' Elementen der XML geschrieben, werden muss.

![export-tool-load-preset][]



### Konfigurationen

YAML Konfigurationen können für den zukünftigen Gebrauch über die 'Konfiguration' Seite definiert und gespeichert werden. Es ist nützlich eine Konfiguration für ein Projekt zu erstellen, welche dann für alle dem Projekt zugehörigen Exporte verwendet werden kann. Man kann der Konfiguration einen 'Namen' und eine 'Beschreibung' geben, damit andere Benutzer sich zurechtfinden. Wenn man die 'Öffentlich' Checkbox demarkiert, ist die Konfiguration nur für den Benutzer selbst sichtbar. 

![export-tool-configuration-saved][]


Man beachte, dass Konfigurationen editiert werden können, was nützlich ist, um die Kartenelementauswahl im Laufe eines Projekts anzupassen. Gespeicherte YAML Konfigurationen können in der 'Gespeicherte Konfigurationen' Option auf dem '3 Daten' Tab ausgewählt werden, wenn ein Export erstellt wird. Man kann die Suchleiste verwenden um dem Projekt zugehörige Konfigurationen zu finden.

![export-tool-configuration-stored][]


Weitere detaillierte Informationen zu Kartenelementauswahl und YAML findet man unter 'Kartenelementauswahl' und 'YAML Spezifikation' im ‘[Lernkapitel](https://export.hotosm.org/en/v3/learn) auf der Tool Webseite. 




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




