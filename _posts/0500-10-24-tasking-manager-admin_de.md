---
layout: doc
title: Erstellung und Verwaltung von Projekten auf dem Tasking Manager 2
permalink: /de/coordination/tasking-manager-project-admin/
lang: de
category: coordination
---
Diese Anleitung kann als [tasking-manager-admin_de.odt](/files/tasking-manager-admin_de.odt) oder [tasking-manager-admin_de.pdf](/files/tasking-manager-admin_de.pdf) heruntergeladen werden 

**Diese Anleitung beschreibt eine ältere Version des Tasking Managers. Wenn sich die Benutzeroberfläche der Version, die Sie benutzen, von der hier beschriebenen unterscheidet, lesen Sie bitte [das Handbuch zu Version 3](/de/coordination/tasking-manager3-project-admin)**

# Erstellung und Verwaltung von Projekten auf dem OSM Tasking Manager

Der OpenStreetMap Tasking Manager ist wesentlich für die Durchführung eines Mapathon, der Verwaltung einer HOT ktivität oder beim Erstellen von Mappingaufgaben für freiwillige Mapper. Der Tasking Manager teilt die Arbeit in verwaltbare geografische Stücke, was Bearbeitungskonflikte reduziert, besonders bei vielen beitragenden Mappern. Der Tasking Manager hilft auch beim genauen und qualitativen mappen, durch konsistenteAnweisungen fr die Mapper (z.B. 'erfasse all Straßen und Gebäude'). Kurz gesagt, mit dem Tasking Manager kann man das Vorgehen für offene Mappingaktivitäten festlegen und steuern. Dieses Modul beschreibt die grundlegende Administration des OSM Tasking Manager für erfolgreiche Mappingveranstaltungen. 

 Diese Anleitung ist für Personen geschrieben, welche Hilfe bei der Administration des OSM Tasking Manager benötigen, inklusive Erstellung und Bearbeitung von Mappingprojekten für offene Mappingveranstaltungen, z.B. 'Mapathons'. Diese Anleitung ist anwendbar für alle Instanzen des OSM Tasking Manager inklusive des HOT Tasking Manager <http://tasks.hotosm.org/> und des TeachOSM Tasking Manager <http://tasks.teachosm.org/>. Eine Liste weiterer Instanzen des OSM Tasking kann [im OpenStreetMap Wiki](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager#Operational_installations_of_the_Tasking_Manager) gefunden werden.

Der HOT oder OSM Tasking Manager wird oft als **TM2** bezeichnet, eine Abkürzung für Tasking Manager, Version 2. 

## Protokoll- und Zugriffsebenen
Das erste was man verstehen sollte ist die Zugriffsregulierung. Jeder Zugriff auf TM2 wird durch <https://www.openstreetmap.org> authorisiert. Um auf TM2 zuzugreifen benötigt man ein OpenStreetMap (OSM) Konto. Hat man einen solchen besucht man <http://tasks.hotosm.org/> und klickt auf **Login to OpenStreetMap**, was einen zur OSM Seite zurück bringt, auf der man dem Tasking Manager begrenzten Zugriff auf sein OSM Konto geben kann. 

### Zugriffsebenen beim OSM Tasking Manager
Der OSM Tasking Manager hat drei Nutzer-Zugriffsebenen
- **User** - das Standardlevel. Der Benutzer kann sich im TM2 einloggen, ein Mappingprojekt auswählen und daran arbeiten. Diese Verwendung ist komplett beschrieben in der [OSM Tasking Manager Anleitung von LearnOSM](/de/coordination/tasking-manager/). Man beachte, dass einige Projekte, z.B. die im Status Entwurf (unveröffentlicht), nicht für Benutzer sichtbar sind.  
- **Projekt Manager** - Projekt Manager können Projekte in TM2 Erstellen und Aktualisieren.  
- **Administratoren** - Administratoren können Zugriffsregulierungen für Benutzer in TM2 verwalten.
Man benötigt Projekt Manager Zugriffsrechte, um neue Projekte in TM2 anzulegen.

## Ein neues Projekt in TM2 starten 

![TM New][]

Man klickt auf seinen Benutzernamen in der oberen rechte Ecke und dann auf **Create a New Project**. Man kann anschließend wählen zwischen der Auswahl eines Gebietes auf der Karte oder dem Import einer Bounding Box aus einer Datei;  

![TM Draw or Import][]

> Der Import einer Datei mit einem definierten Gebiet ist dem händischen einzeichnen eines Gebietes für ein neues Tasking Manager Projekt immer vorzuziehen. Werkzeuge wie JOSM, QGIS etc. können zur Erstellung von Dateien zum Import in den Tasking Manager verwendet werden.

#### Einzeichnen eines zu mappenden Gebietes

![TM Draw][]

1. Man klickt den 'Draw' Button in der oberen rechten Ecke.
2. Um ein Polygon für das ausgewählte Gebiet in der Karte zu zeichnen, hält man die rechte Maustaste gedrückt und bewegt die Karte ohne zu klicken, dies fügt eine Node hinzu. Das Polygon bildet einen Rahmen um das ausgewählte Gebiet. Das spart Zeit, indem es Tiles ausklammert, die nicht interessant sind (z.B. Ozeane, Wälder)  
3. Man klickt auf den Anfangspunkt, um das Polygon zu vervollständigen.  

oder

#### Hochladen einer GeoJSON oder KML Datei des zu erfassenden Gebietes  

1. Man klickt den ‘Import’ Button,  
2. Man navigiert zur Datei im Datei hochladen Fenster,  
3. man klickt den Dateinamen an, um die Datei auszuwählen und klickt dann 'Öffnen'.  


### Task Quadrate

Das ausgewählte Gebiet, definiert durch die hochgeladene Datei oder per Hand eingezeichnet, wird im Kartenfenster angezeigt und man wird gefragt, wie das Gebiet in individuelle Aufgaben aufgeteilt werden soll. Es gibt zwei Optionen:  

1. Quadratisches Gitter - Der Tasking Manager wird das gesamte Projektgebiet in exakt gleich große Aufgabenquadrate aufteilen. Das ist für Crowdmapping Projekte im allgemeinen eine gute Idee.
2. Beliebige Geometrien - Wenn man eine Datei zur Definition des Projektgebietes hochlädt, kann die Datei auch Umrisse für individuelle Aufgaben enthalten. Es sollte besonderer Bedarf beim Mappen, für angepasste Aufgabenumrisse vorhanden sein. Ein Straßenimportprojekt könnte angepasste Aufgabenumrisse z.B. benötigen.

### Das Quadratgitter für Aufgabenquadrate
Um gleichmäßige quadratische Kacheln zu erstellen, wählt man das Quadratgitter und klickt weiter.  
Das ausgewählte Gebiet wird automatisch in Gitterzellen aufgeteilt und jede wird zu einer Aufgabe. Je größer das Projektgebiet ist, ums größer werden die Quadrate sein. Die optimale Kachelfläche kann aufgrund der fünf relativen Kachelgröße Optionen bestimmt werden. Eine kleinere Kachelfläche hat mehr Aufgaben zur Folge, wie in den folgenden Bildschrimfotos sichtbar. Die optimale Kachelgröße hängt also von der Gebietsgröße (man erstellt kleinere Kacheln für größerere Projekte) und der Anzahl der Kartenelemente ab, die auf jeder Kachel erfasst werden sollen. Allgemein gesagt, wenn die Gebietsgröße und / oder Anzahl der Kartenelemente zunimmt, sollte die Kachelgröße des Projekts kleiner werden. 

![TM Tile Sizes][]{: width="1500"}

***Erwägungen zur Kachelgröße***

- Ein neuer Mapper eines Mapathons erfasst vielleicht mit ein Viertel der Geschwindigkeit einer erfahrenen Mappers (viele fangen noch langsamer an, werden aber schnell schneller). 
- Neue Mapper haben Schwierigkeiten Kartenelemente auf Luftbilder zu erkennen während des Mappens. Runde Hütten aus natürlichen Materialien in einer Umgebung mit runden Büschen zu finden ist eine steile Lernkurve für einen 'Newbie'.
- Neue Mapper finden es schwierig viele Kartenelemente wie Gebäude zu zeichnen.
- Später können Mapper Quadrate 'aufteilen' - das hilft neuen Mappern für sie leichter handhabbare Quadratgrößen zu bekommen.  
- Die meisten Probleme in Quadraten tauchen an den Kanten und Ecken auf. Kleinere Quadrate bedeuten mehr Kanten und Ecken und somit mehr doppeltes Mappen wie auch mehr nicht vorhandene Objekte. Es ist ein Kompromiss wie klein die Quadrate werden, was es leichter für neue Mapper macht aber gleichzeitig mehr Fehler erzeugt durch mehr Kanten und Ecken.
- Ein Quadrat kann aufgeteilt werden, es gibt aber keine Option Quadrate zu vereinen, um sie wieder größer zu machen. Man sollte als Vorsichtig beim Aufteilen sein
- **Schlussvolgerung** Man sollte selbst ein Gebiet des Projektes mappen, um zu sehen wie leicht es fällt und welche Schwierigkeiten auftreten. Das sollte bei der Entscheidung der optimalen Quadratgröße helfen. Man sollte Aufteilen erlauben, aber nicht unendlich - manche neue Mapper teilen Quadrate so weit auf bis sie so klein sind, dass sie extrem schwer zu mappen werden.  

### Willkürliche Geometrien
Wenn man eine Datei für sein Projektgebiet hochgeladen hat, kann diese auch Informationen über  genauen Umrisse für individelle Projektaufgaben beinhalten. Falls das Gebiet aus einem Polygon besteht, wird das Projekt nur eine Aufgabe besitzen. Das wird allgemein nicht gebraucht und ist nur für besondere Anforderungen nützlich.

### Erwägungen zum Luftbild

In den meisten Fällen wird das "Standard" Bing Luftbild verwendet. Es gibt aber Situationen bei denen man andere Quellen wählen möchte:

1. Bing bietet keine hochauflösende Abdeckung für das ausgewählte Gebiet.
2. Bing hat beträchtliche Wolkendecken in diesem Gebiet.
3. Man benötigt neuere Bilder für die Bewertung nach Katastrophen.

Falls Bing nicht brauchbares bietet, ist Mapbox die nächste Wahl. Man sollte nur nach anderen quellen suchen, wenn beide die Anforderungen nicht erfüllen.

In diesem Fall ist es nicht ausreichend ein lizenzkompatible Quelle zu wählen und durch einen WMS oder TMS Dienst einzubinden. Das Gebiet wurde vielleicht bereits teilweise mit Hilfe von Bing  oder Mapbox Luftbildern erfasst und es könnte ein Versatz zwischen den Bildern bestehen. Man muss sich zahlreiche Orte im Gebiet anschauen und den Versatz zwischen den eigenen Bilder und den bereits erfassten Daten bestimmen. Falls bestehende OSM Daten abweichen von den eigenen Bildern aber zu Bing passen, betrachten wir Bing als "goldenen Standard", solange wir keine GPS Spuren haben, welche das Gegenteil beweisen.

Falls es einen gleichbleibenden Versatz zwischen den eigenen Bildern und Bing über das Gebiet hinweg gibt, kann dies auf dem Server korrigiert werden, damit die zahlreichen geladenen Quellen im Editor übereinstimmen. Falls das nicht möglich ist, da der Versatz über das Gebiet sich verändert oder existierende Daten nach unterschiedlichen Quellen ausgerichtet sind, ist es Zeit für Plan B:

Man muss eine Strategie entwicklen, wie man mit diesen Punkten umgeht und detaillierte Informationen den Mappern und Validierern bereitstellen. Wir empfehlen solche Projekte als "nur für erfahrene Mapper" zu deklarieren und zu erklären, dass Erfahrung in diesem Fall nicht 200+ Gebäude erfasst zu haben bedeutet, sondern bereits Erfahrung mit Versatzproblemen und unterschiedlichen Bilderquellen zu haben.

Eine mögliche Strategie könnte folgende Schritte beinhalten:

1. Eine Bilderquelle als unmissverständliche Referenz erklären, an der alles andere ausgerichtet wird. Wir nehmen in diesem Fall an, das Bing die Referenz ist.
2. Man stellt sicher, dass alle sichtbaren Kartenelemente auf Bing nach Bing Luftbilder ausgerichtet sind, ansonsten richtet man diese aus.
3. Man richtet das alternative Bild an bestehenden Kartenelemente (also nach Bing) aus, indem man die Luftbild Offset Funktion des Editors verwendet.
4. Man fügt neue Kartenelemente vom nun richtig ausgerichteten alternativem Luftbild hinzu.

Schritt 3 sollte für jede Projektaufgabe wiederholt werden und die individuellen Aufgabenquadrate sollten nicht zu groß sein, da der Bilderversatz Abweichungen haben kann über ein Gebiet hinweg, insbesondere, wenn das Gebiet nicht flach ist. Auch Luftbildunterbrechungen können in einem Projekt vorkommen - man hält Ausschau danach und informiert die Beitragenden über so ein Problem.

Folgende vorgeschlagene Informationsstücke könnte man in Projektanleitungen einbinden:

- [Allgemeine Anleitungen für zahlreiche Editoren](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [Ein animiertes GIF über Bilderausrichtung in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [Das JOSM Bilderausrichtung Kapitel in learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)

## Das Projekt erstellen und Beschreibung hinzufügen
Nachdem man eine Kachelfläche ausgewählt hat, klickt man "Create Project". 

![TM Create Project][]

Das erstellt das Projekt im Tasking Manager und öffnet ein Fenster in dem man die Beschreibungen, Anleitungen und andere Informationen über das Projekt eingeben kann. Das sollte nicht unterschätzt werden. Ein Anteil der Mapper (oft die Mehrheit) hat keine Erfahrung mit OpenStreetMap und / oder HOT und wird die Tagging Richtlinien nicht kennen. Es ist wichtig, dass die Projektziele klar sind und Ressourcen, die die Mapper beachten sollen dort aufgeführt sind. Es ist oft ratsam Projekte auf eine zu erfassende Objektklasse zu beschränken. Wenn man eine Standardkarte eines Gebietes benötigt, sollte man es in mehrere projekte aufteilen, eins für Straßen, eins für Gebäude usw. Anfänger können sich damit auf kleine Objektklassen konzentrieren während sie lernen wie sie diese korrekt erfassen. Ansonsten endet man mit vielen Kacheln die ein wenig von jedem beinhalten aber nichts komplett.

Man verwendet am besten schlichte englische Sprache, da die Leser möglicherweise keine englischen Muttersprachler sind.

1. Der Titel des Projektes sollte bereits aussagen, welche Objekte erfasst werden sollen. Man sollte Titel wie den folgenden bevorzugen 
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. Die wichtigsten Nachrichten sollten im Anleitung Tab aufgeführt sein, damit sie gelesen werden. Das würde spezielle Luftbilder anstatt von Bing beinhalten. Der erste Satz sollte erwähnen, das nicht jedes Haus gemappt werden muss, wenn das Projekt z.B. Straßen und Wohngebiete erfasst. Oder das jedes Haus erfasst werden sollte, wenn das Projekt die Bevölkerungsdichte abschätzen soll. Diese Nachrichten sollten auch im Beschreibung Tab aufgelistet sein.
3. Andere zu klärende Punkte: Falls das Projekt nur für Mapper mit gewissen Erfahrung geeignet ist. Falss das Projekt z.B. Importe verwendet oder existierende Daten an GPS Spuren ausgerichtet werden müssen oder andere Luftbilder verwendet werden (siehe vorherigen Abschnitt). Man sollte es so formulieren, dass neue Mapper eingeladen sind zu anderen Projekten beizutragen, aber verstehen, dass hier erweiterte Techniken erforderlich sind.
4. Es gibt Anleitungen, die allgemeine Fehler abdecken, die während der Validierung auftreten. Ein Beispiel ist die Sammlung von Blake Girardot zu [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Man verwendet den Link in der Anleitung und erklärt das diese Vorgabe verpflichtend ist.
5. Die verpflichtende Quelle fürs Tagging ist das [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). Für viele Aufgaben auf HOT ist die Seite zu [Tagging von Straßen in Afrika](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) die entsprechende Spezialisierung und sollte von jedem Mapper gelesen werden. Sollte sich das Projekt auf unterschiedliche Tagging Standards beziehen, schreibt man eine ähnliche Seite im Wiki und verlinkt darauf in der Anleitung.

<!--Hidden Text - Google discussion group on TM - https://groups.google.com/a/hotosm.org/forum/?utm_medium=email&utm_source=footer#!msg/tm-project-managers/5OVNGMBsQv0/01Wxw95cBwAJ 

Youtube video concerning the development & code updates for TM = https://www.youtube.com/watch?v=hFFlrm9wKcA
aus einer E-Mail von Pete Masters
Hi Polyglot, just in case it is useful, we worked with Pierre Giraud when he visited London to do a tech introduction to the tasking manager. It's here if you're interested: https://www.youtube.com/watch?v=hFFlrm9wKcA

Tschüss,

Pete


Vor der Erstellung einer Aufgabe
Sollte diese Aufgabe eine Missing Maps Aufgabe sein? 
Wird das Projekt eine vor Ort Mapping Komponenten haben?
Basiert das Projekt auf einer Katastrophe? 
Falls ja, sollte es ein HOT Projekt und kein Missing Maps Projekt sein. Man kontaktiert die Freischaltung Leitung.
Wird das Projekt unterstützt durch ein bestehendes Missing Maps Mitglied?
Ist das Luftbild von hoher Qualität, ohne störende Wolken?
Falls nein, kontaktiert man das Amerikanische Rote Kreuz, das helfen kann, neue Luftbilder vom US Department of State zu bekommen
Task Erstellungsprozess
Um ein neues Projekt zu erstellen muss man im Tasking Manager eingeloggt sein - man verwendet Benutzername und Passwort des OpenStreetMap Benutzerkontos. Man beachte, dass dem OpenStreetMap Benutzerkonto gewisse Rechte zugeteilt werden müssen, damit man ein neuen Projekt im Tasking Manager erstellen kann. Man öffnet den Internet Browser und geht zu tasks.hotosm.org. Man sieht eine Seite wie folgt:


Sobald man eingeloggt ist, klickt man auf seinen Benutzernamen in der oberen rechten Ecke.
Im Auswahlmenü klickt man "Create a New Project".

Es gibt zwei Optionen um ein Projekt zu erstellen: 
Man zeichnet ein zu erfassendes Gebiet ein
Man lädt eine GeoJSON oder KML Datei des zu erfassenden Gebietes hoch

Option 1 - Zeichnen
Man klcikt den 'Draw' Button
Man zeichnet ein Polygon für das ausgewählte Gebiet im Kartenfenster (Rechtsklick; gedrückt halten um die Karte zu bewegen ohne einen Node hinzuzufügen)
Notiz: Das Polygon sollte genau das ausgewählte Gebiet umfassen. Das spart Zeit um Kacheln zu vervollständigen, die nicht von Interesse sind (z.B. Ozeane, Wald)

Man klickt doppelt um das Polygon zu vervollständigen

Option 2 - Import von GeoJSON oder KML
man klickt den 'Import' Button

Man sucht die Datei im Datei hochladen Fenster
Man klickt auf den Dateinamen um die Datei hervorzuheben und klickt 'Öffnen'.

Das ausgewählte Gebiet, das in der GeoJSON oder KML Datein definiert ist, erscheint in der Karte und man wird gefragt, wie das Gebiet in individuelle Aufgaben aufgeteilt werden soll. Es gibt zwei Optionen:
Quadratgitter - Das Gebiet wird automatisch in Gitterzellen aufgeteilt und jede Zelle wird zu einer Aufgabe.
Beliebige Geometrien - Jedes individuelle Polygon im Gebiet repräsentiert eine individuelle Aufgabe. Falls das Gebiet aus einem Polygon besteht, wird das Projekt nur eine Aufgabe haben.
Notiz; Diese Anleitung berücksichtigt nur die Quadratgitter Option.

Man wählt die Quadratgitter Option und klickt weiter.
Man bestimmt die optimale Kachelgröße mit den fünf Optionen. Wichtig: Die Größe der Kacheln ist relativ, z.B. wird bei gleicher Kacheleinstellung in einem großen Projekt das Quadrat größer als bei einem kleinen Projekt ("S" oder "M" Kacheln sind also nicht immer gleich groß). Man beachte, dass jedes Polygon zu einer eigenen Aufgabe wird. Kleinere Kachelgrößen erzeugen also mehr Aufgaben, wie im folgenden Bildschirmfoto sichtbar. Die optimale Kachelgröße hängt somit von der Gebietsgröße (man erstellt kleinere Kacheln für größere Projekte) und der Anzahl der zu erfassenden Kartenelemente ab. Allgemein gesagt, wenn die Gebietsgröße und / oder die Anzahl der Kartenelemente zunehmen, sollte die ausgewählte Kachelgröße abnehmen. Die ideale Größe eines Quadrates liegt bei ca 45 Minuten - 1 Stunde Arbeit. Bei größeren Mapathons oder in dichteren Städten sind kleinere Aufgaben (~20 Minuten) besser.



Nachdem man eine Kachelgröße ausgewählt hat, klickt man "Create Project". Das Erstellt das Projekt im Task Manager und öffnet ein Fenster in das man Beschreibungen, Anleitungen und andere Informationen zu dem Projekt eingibt.  
Im 'Beschreibung' Tab:
setzt man die Priorität
benennt das Projekt im "Name of the Project" Textfeld
Falls die Aufgabe speziell für Missing Maps ist, verwendet man folgende Namenskonvention: Missing Maps: <Location/Projektname>
man gibt eine Beschreibung im 'Beschreibung' Textfeld an. Notiz: Das Format im Beschreibung Textfeld basiert auf 'Markdown'. Tipps wie man 'Markdown' verwendet gibt es, wenn man den 'Markdown' Link unter dem Textfeld anklickt. Notiz: Zwischen Abschnitte müssen Leerzeilen eingegeben werden um diese zu trennen.
Falls man eine Aufgabe für das Missing Maps Projekt erstellt, fügt man folgendes in die Beschreibung mit ein: 'The Missing Maps project aims to map the most vulnerable places in the world (affected by humanitarian crises: disease epidemics, conflict, natural disasters, poverty, environmental crises). Building on HOT's disaster preparedness projects, the Missing Maps tasks facilitate pre-emptive mapping of priority countries to better facilitate disaster response, medical activities and resource allocation when crises occur.'



Im 'Anleitungen' Tab:
listet man zu erfassende Kartenelemente im "Entites to Map" Textfeld, z.B. Gebäude und Hauptstraßen.
im 'Changeset Comment' Textfeld gibt man einen Changeset Kommentar an, den Mapper verwenden sollen wenn sie erfasste Daten hochladen. Der Kommentar sollte etliche Dinge über das Projekt beinhalten. Z.B. der Kommentar ''Bukama, #DRC #hotosm-project-1145 #MissingMaps #Bing beinhaltet die Location der Aufgabe, die Projektnummer, dass das Projekt zu Missing Maps gehört und dass Bing Luftbilder für die Aufgabe verwendet werden. Changeset Kommentar sind für jedes Projekt anders, sollten aber ein schnelles Kennzeichen und Beschreibung des Projektes sein.
man gibt detaillierte Anleitungen, denen die Mapper folgen sollen im "Detailed Instructions" Textfeld. Detaillierte Anleitungen sollten mindestens angeben, welche Kartenelemente erfasst werden, wie Kartenelemente getaggt werden und die verwendete Bilderquelle für das Projekt.  Andere Details sollten nach Bedarf eingefügt werden. Notiz: Die Formatierung im Beschreibung Textfeld basiert auf 'Markdown'. Tipps zur Verwendung von 'Markdown' findet man, wenn man auf den 'Markdown' Link unter dem "Detailed Instructions" Textfeld klickt.
Falls eine starke Bewölkung vorliegt, die die Erstellung von Kacheln verhindert, sollte man das den detaillierten Anforderungen hinzufügen.
Wenn notwendig sollte man zusätzliche Informationen zu Aufgaben im Textfeld "Per Task Instructions (Optional)" hinzufügen. Das kann verwendet werden, falls etwas spezifische Anforderungen hat für individuelle Aufgaben im Projekt.  


Auf beiden Tabs 'Description' und 'Instruction' kann man den Inhalt übersetzen durch klicken auf das Sprach Icon über den Textfeldern (en, fr, etc.). Falls kein Text für die Sprache angegeben wird, wird die Standardsprache (Englisch) erscheinen. Die unterschiedlichen Textfelder wechseln nicht zusammen die Sprache, wenn man eins auswählt, man muss für jedes Textfeld die Sprache einzeln auswählen.

Das 'Area' Tab wird bisher nicht verwendet.

Das 'Imagery' Tab kann verwendet werden, falls eine andere Bilderquelle als die Standard OSM Bilderquelle verwendet werden soll.  Es gibt zahlreichen Lizenzoptionen im erforderlichen Lizenzauswahlmenü, falls eine spezielle Lizenz benötigt wird für die alternative Bildquelle.

Das "Priority Areas" Tab wird wenn nötig zur Definition von Prioritätsgebieten für die Aufgabe verwendet. Dies geschieht durch manuelles einzeichnen der Prioritätsgebiete in der Karte. Sobald sie gespeichert sind, werden die Gebiete als wichtig auf der Karte der Startseite der Projektseite angezeigt. Im 'Priority Areas' Tab sind auch Werkzeuge verfügbar, um bestehende priorisierte Gebiete zu verändern oder zu löschen.

Wenn notwendig kann der Zugriff auf das neue Projekt auf bestimmte Benutzergruppen begrenzt werden im "Allowed Users" Tab. dazu klickt man auf die Auswahlbox neben "Private". Dann gibt man den Namen des Benutzers im "Allowed Users" Textfeld an, der Zugriff erhalten soll, und klickt den "Add User" Button. Das wiederholt man für weitere Benutzer die Zugriff benötigen. Notiz: Damit der Benutzername zu den erlaubten Benutzern hinzugefügt werden kann - muss der Benutzer erst die URL der Instanz des OSM Tasking Managers aufrufen und Zugriff auf das OpenStreetMap Benutzerkonto gewähren. Nachdem dies geschehen ist, ist der Benutzername verfügbar, um durch den Administrator hinzugefügt zu werden. 

Das "Misc" Tab bietet die Optionen ein Fälligkeitsdatum und eine JOSM Vorlage hinzuzufügen. Das Fälligkeitsdatum wird in das "Project due date" Textfeld eingegeben und gibt das Datum an, nachdem das Projekt automatisch archiviert wird. Benutzer können auch eine JOSM XML Vorlage laden, die beim Tagging unterstützt.  

Nachdem man Beschreibung, Anleitungen und sonstige notwendige Information in den Tabs eingegeben hat, klickt man auf "Save the Modifications", was einen auf die Startseite des Projektes weiterleitet.  

Veralteter Wikieintrag - zum Aktualisieren sobald diese Anleitung komplett ist http://wiki.openstreetmap.org/wiki/Tasking_manager_admin
- end of hidden text-->
  
### Nochmals durchlesen und veröffentlichen
Man liest die zahlreichen Tabs nochmals durch um sicherzustellen, dass Formulierung und Formatierung korrekt und Anleitungen klar sind. Falls man Änderungen oder Verfeinerungen machen muss, klickt man den 'Edit' Link oben rechts auf der Seite an. 

![TM Edit Project][]

Wenn das Projekt bereit ist zum Mappen, klickt man den 'Publish' Link an. Sobald das Projekt veröffentlicht wurde, ist es für jeden mit einem OSM Benutzerkonto verfügbar, solange keine Benutzergruppe im Tab 'Allowed Users' spezifiziert ist, in welchem Falle nur erlaubte Benutzer daran arbeiten können. Änderungen am Projekt können auch nach der Veröffentlichung gemacht werden, indem man auf den 'Edit' Link klickt.

[TM Tile Sizes]: /images/coordination/TM_tile_sizes.png
[TM New]: /images/coordination/TM_create_new.png
[TM Draw or Import]: /images/coordination/TM_draw_or_import.png
[TM Draw]: /images/coordination/TM_draw.png
[TM Create Project]: /images/coordination/TM_create_project.png
[TM Edit Project]: /images/coordination/TM_edit_link.png