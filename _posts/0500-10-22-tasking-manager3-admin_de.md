---
layout: doc
title: Ein Projekt mit dem Tasking Manager 3 erstellen
permalink: /de/coordination/tasking-manager3-project-admin/
lang: de
category: coordination
---

# Ein Projekt mit dem OSM Tasking Manager erstellen und verwalten

Diese Anleitung kann unter [tasking-manager3-admin_de.odt](/files/tasking-manager3-admin_de.odt) oder [tasking-manager3-admin_de.pdf](/files/tasking-manager3-admin_de.pdf) heruntergeladen werden 

**Diese Anleitung beschreibt die aktuelle Version des Tasking Managers. Wenn die Benutzeroberfläche der Version, mir der Sie arbeiten, anders als hier beschrieben aussieht, verwenden SIe bitte die [Anleitung der früheren Version](/de/coordination/tasking-manager-project-admin).**

Inhaltsverzeichnis
-------------
-  [Anmelden](/de/coordination/tasking-manager3-project-admin/#logging-in-&amp;amp;-access-levels)  
-  [Ein neues Projekt aufsetzen - zu bearbeitendes Gebiet definieren](/de/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)  
-  [Aufgaben erstellen - zu bearbeitendes Gebiet unterteilen](/de/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)
-  [Projekt erstellen - Was Benutzer wissen müssen](/de/coordination/tasking-manager3-project-admin/#create-the-project)
    -  [Beschreibung - Das erste was Benutzer über das Projekt erfahren](/de/coordination/tasking-manager3-project-admin/#description)
    -  [Anleitungen - Was Benutzer bearbeiten sollen](/de/coordination/tasking-manager3-project-admin/#instructions)
    -  [Metadaten - das Projekt einordnen](/de/coordination/tasking-manager3-project-admin/#metadata)
    -  [Prioritäten - Woran Benutzer zuerst arbeiten sollen](/de/coordination/tasking-manager3-project-admin/#priority-areas)
    -  [Luftbilder - Die Grundlage der Kartierung](/de/coordination/tasking-manager3-project-admin/#imagery)
    -  [Berechtigungen - Wer kartieren und validieren darf](/de/coordination/tasking-manager3-project-admin/#permissions)
    -  [Hilfreiche Hinweise - Wie man was einträgt](/de/coordination/tasking-manager3-project-admin/#instruction-notes)
    -  [Veröffentlichen - nicht vergessen damit es los gehen kann](/de/coordination/tasking-manager3-project-admin/#proofread-and-publish)

Der OpenStreetMap Tasking Manager ist grundlegend für die Durchführung eines Mapathon, das Verwalten einer HOT-Aktivierung oder für die Erstellung von Kartierungsaufgaben für Bearbeiter. Der Tasking Manager teilt die Arbeit in handhabbare geografische Einheiten auf, was Bearbeitungskonflikte  besonders bei vielen Mitwirkenden reduziert. Der Tasking Manager hilft auch bei der genauen und den Richtlinien entsprechenden Erfassung durch die Bereitstellung von einheitlichen Anleitungen für die Bearbeiter (z.B 'Erfasse alle Straßen und Gebäude'). Kurz gesagt, mit dem Tasking Manager kann man Kartierungsaufgaben aufsetzen und steuern. Dieser Abschnitt beschreibt die grundlegende Verwaltung des OSM Tasking Managers für erfolgreiches Kartieren. 

 Diese Anleitung wendet sich speziell an diejenigen, dieHilfe bei der Esrtellung und Verwaltung des OSM Tasking Managers benötigen. Dazu gehört u.a. die Erstellung und Änderung von Kartierungsprojekten für offene Veranstaltungen, z.B. Mapathons. Diese Anleitung bezieht sich vor allem auf Instanzen des OSM Tasking Manager Version 3, darunter den [HOT Tasking Manager](http://tasks.hotosm.org) und den [TeachOSM Tasking Manager](http://tasks.teachosm.org).

Der HOT oder OSM Tasking Manager Version 3 wird oft als **TM3** bezeichnet, eine Abkürzung für Tasking Manager, Version 3.

## Anmelden & Zugriffsberechtigungen

Als erstes muss man die Zugangsberechtigungen verstehen. Jeder Zugriff auf TM3 wird durch die [OpenStreetMap Webseite](https://www.openstreetmap.org) authorisiert. Für den Zugriff auf TM3 brauchen Sie ein OpenStreetMap (OSM) Benutzerkonto. Sobald Sie eines besitzen, gehen Sie zum [Tasking Manager](http://tasks.hotosm.org) und klicken auf **Login to OpenStreetMap**, was Sie zurück zur OSM-Seite bringt, auf der Sie dem Tasking Manager begrenzten Zugriff auf Ihr OSM- Benutzerkonto geben können. 

### Zugriffsberechtigungen des OSM Tasking Manager

Der OSM Tasking Manager hat drei Berechtigungsstufen für Benutzer:
- **Anwender** - Das Einstiegsniveau. Der Benutzer kann sich am TM3 anmelden,  ein Kartierungsprojekt auswählen und daran arbeiten. Diese Vorgehensweise ist vollständig in  [der Anleitung zum  OSM Tasking Manager in LearnOSM](/de/coordination/tasking-manager-3/) beschrieben. Beachten Sie bitte, dass einige Projekte, z.B. solche im Entwurfsstadium (also  unveröffentlicht), nicht für Benutzer sichtbar sind.  
-  **Projektmanager** - Projektmanager können Projekte im TM3 erstellen und aktualisieren.  
-  **Administrator** - Administratoren können Zugriffsberechtigungen für Benutzer in TM3 verwalten.

Sie benötigen Projektmanager-Berechtigung, um neue Projekte in TM3 anzulegen.

## Ein neues Projekt in TM3 aufsetzen 

![TM New][]

Klicken Sie auf Ihren Benutzernamen in der oberen rechten Ecke und dann auf **Neues Projekt erstellen**. Sie können das zu bearbeitende Gebiet entweder auf einer Karte zeichnen oder aus einer geojson-Datei importieren;  


### Zeichnen eines zu kartierenden Gebiets

1. Klicken Sie auf ‘Zeichnen’ in der oberen linken Ecke.
2. Zeichnen Sie mit der Maus ein Polygon um das zu bearbeitende Gebiet. Mit einem Mausklick fügen Sie einen Punkt hinzu. Wenn Sie die Maustaste gedrückt halten, können Sie die Karte verschieben, ohne etwas an dem Polygon zu verändern. Das Polygon sollte das zu bearbeitende Gebiet möglichst eng umschließen. Das spart Zeit, weil keine Aufgaben bearbeitet werden müssen, die irrelevante Bereiche enthalten (z.B. Meer, Wald)  
3. Klicken Sie auf den Startpunkt um das Polygon fertigzustellen  
4. Nach der Erstellung des Polygons können Sie noch die Punkte verschieben oder neue hinzufügen, um das Gebiet nach Ihren Wünschen abzuändern.

oder

### Hochladen einer GeoJSON- oder KML-Datei für das zu erfassende Gebiet  

1. Klicken Sie auf 'Importieren',  
2. Wählen Sie die Datei im Dialogfenster aus,  
3. Klicken Sie auf den Dateinamen und dann auf 'Öffnen'.  
4. Importierte Gebiete können nicht geändert werden.


## Aufgaben erstellen

Das zu bearbeitende Gebiet umfasst einen größeren Bereich. Er wird in kleinere Gebiete, Aufgaben genannt, aufgeteilt. 

Das durch die Datei definierte oder von Hand gezeichnete Gebiet erscheint auf der Karte und Sie müssen entscheiden, wie das Gebiet in einzelne Aufgaben aufgeteilt werden soll. Es gibt zwei Möglichkeiten:  

1. Quadratgitter - Der Tasking Manager wird das Projektgebiet in exakt gleiche Aufgabenquadrate aufteilen. Das ist normalerweise eine gute Idee für Standardprojekte.
2. Willkürliche Geometrien - Wenn Sie eine Datei zur Definition des Projektgebietes hochgeladen haben, kann die Datei auch Geometrie für die einzelnen Aufgaben enthalten. Für dieses Vorgehen sollte es eine besondere Anforderung geben. Ein Projekt zum Import von Straßen kann das erfordern. Willkürliche Geometrien können auch bei der automatischen Reduzierung des Projektgebietes entstehen.

### Verwendung eines Quadratgitters für Aufgabenbereiche

Zur Erstellung gleichartiger quadratischer Aufgaben wählen Sie das quadratische Raster  

![TM Tile Sizes][]

Das Gebiet wird automatisch in Gitterzellen aufgeteilt und jede Zelle wird zu einer Aufgabe. Sie können die optimale Größe des Gitters mit den "Größer" -und "Kleiner"-Tasten bestimmen. Ein feineres Raster führt zu einer höheren Zahl von Aufgaben. Die optimale Größe hängt von der Größe des Gebiets (kleine Kacheln für größere Projekte) und der Anzahl der Kartenelemente ab, die erfasst werden sollen. Allgemein gesagt, wenn die Größe des Gebiets und/oder die Anzahl der zu erfassenden Kartenelemente steigt, sollte die gewählte Kachelgröße sinken. 

Beachten Sie, dass **mehrere Kartenebenen verfügbar sind während Sie das Raster festlegen**. Der Button in der unteren rechten Ecke bietet zahlreiche Optionen für Kartenebenen. Eine Luftbildebene auszuwählen ist ratsam, da man den Hintergrund des zu erfassenden Gebiets sieht.

Wenn man spezielle Satellitenbilder für das Projekt zur Verfügung stellen will, kann man mit Hilfe des Knopfes in der oberen rechten Ecke der Karte eine TMS- oder WMS-URL angeben.

Sie können unterschiedliche Gittergrößen mit Hilfe des "Teilen"-Werkzeugs einstellen. Aufgabenquadrate können mehrfach aufgeteilt werden. Der Einsatz einer Luftbild-Ebene hilft beim Bestimmen, wo Aufgaben aufgeteilt werden sollen. Mit  "Zurücksetzen" werden alle gesplitteten Aufgaben zurückgesetzt. Die "Teilen (Polygon)"-Option lässt Sie ein Polygon über ein Gebiet zeichnen zur Erstellung kleinerer Aufgaben und die Option "Teilen (Punkt)" erlaubt es Ihnen, einzelne Aufgaben zum weiteren Aufteilen anzuklicken. Mit "Zurücksetzen" entfernen Sie  alle individuellen Aufteilungen.

> Allgemein wird man kleine Quadratkacheln über dichtem Siedlungsgebiet für Gebäude bevorzugen. Das Ziel sollte sein, Projektaufgaben zu erstellen, die in 10-15 Minuten erledigt werden können.

*** Anmerkungen zum Thema Kachelgrößen ***

- Ein blutiger Anfänger bei einem Mapathon wird für die Kartierung eines Gebiets etwa die vierfache Zeit eines erfahrenen Bearbeiters brauchen (viele beginnen weit langsamer, werden aber bald schneller vorankommen). 
- Für Anfänger dauert die Erkennung eines Kartenelements im Luftbild genauso lang wie die Kartierung. Wenn es darum geht, runde mit natürlichen Materialien gedeckte Hütten zwischen runden Büschen aufzuspüren, bedeutet das eine steile Lernkurve für einen Neuling.
- Für Anfänger ist es auch nicht leicht, eine Vielzahl von  Kartenelementen, etwa Gebäuden, zu kartieren.
- Später im Prozess können Bearbeiter ein Quadrat weiter aufteilen - das hilft Anfängern, eine für sie handhabbare Größe einer Aufgabe zu erreichen.  
- Am wahrscheinlichsten sind Probleme an den Rändern der Aufgaben. Ein feineres Raster bedeutet mehr Ränder und führt sowohl zu Duplikaten als auch fehlenden Objekten. Die Aufteilung des Rasters ist immer ein Kompromiss dazwischen, es Anfängern leichter zu machen und der möglichen Fehlerrate an den Rändern der Teilaufgaben.
- Ein Quadrat kann aufgeteilt werden, es gibt aber keine Option um das wieder rückgängig zu machen. Man sollte also vorsichtig  damit umgehen
_ **Schlussfolgerung** Bearbeiten Sie selbst eine Aufgabe um zu verstehen wie leicht es fällt und welche Schwierigkeiten auftreten. Das hilt Ihnen bei der Festlegung der optimalen Rastergröße. Erlauben Sie das weitere Aufteilen, aber nicht bis ins Unendliche - einige Anfänger splitten so weit bis es extrem schwierig wird etwas zu bearbeiten.  

Nach deFestlegung des Rasters klicken Sie auf "Weiter".

### Willkürliche Geometrien

Wenn Sie das Projektgebiet über eine Datei definieren können auch Informationen über die exakten Formen der individuellen Projektaufgaben enthalten sein. Wenn das Gebiet aus einem Polygon besteht, enthält das Projekt genau eine Aufgabe. Das wird allgemein nicht benötigt und sollte auf Sonderfälle begrenzt bleiben.

Willkürliche Geometrien können nicht weiter aufgeteilt werden.

### Projektgebiet anpassen

Nachdem das Raster bestimmt wurde, können Sie das Gebiet verschlanken. Sie können das Projektgebiet auf das genaue Polygon begrenzen, das Sie gezeichnet oder vorzugsweise über eine Datei importiert haben. Alternativ können Sie alle Quadrate einschließen, die vom Projektgebiet berührt werden.

Nachdem Sie das Projektgebiet verschlankt haben, klicken Sie auf "Weiter".

## Das Projekt erstellen

Geben Sie dem Projekt einen Namen (den Sie auf der nächsten Seite ändern können) und klicken Sie auf "Erstellen"

Das erstellt das Projekt im Tasking Manager und öffnet eine Seite auf der Sie die Beschreibung, Anleitung und weitere Informationen über das Projekt eingeben können. Das sollten Sie nicht unterschätzen. Ein Großteil der Bearbeiter (oft die Mehrheit) wird keine Erfahrung mit OpenStreetMap und/oder HOT haben und die Richtlinien für die Attribute nicht kennen. Es ist wichtig, dass die Ziele des Projekts klar dargestellt werden und alles was die Bearbeiter beachten müssen dort aufgeführt wird. Es ist meistens ratsam, ein Projekt auf eine zu erfassende Objektklasse zu beschränken. Benötigen Sie eine Grundkarte für ein Gebiet, teilen Sie es besser in mehrere Projekte auf, eines für Straßen, eines für Gebäude usw. Anfänger können sich so auf wenige Objektklassen konzentrieren und lernen, diese korrekt zu erfassen. Ansonsten erhalten Sie viele Kacheln, die etwas von allem beinhalten aber nichts komplett.

Sobald Sie das Projekt erstellt haben müssen Sie weitere  Einstellungen vornehmen:

- Beschreibung - Sie wird in Listen aufgeführt und dient der  Motivation der Bearbeiter
- Anweisungen - Detaillierte Anweisungen,  wozu und wie die Objekte/Kartenelemente erfasst werden sollen
- Metadaten - Zusätzliche Informationen zur Einordnung des Projekts. Damit kann die gesamte Projektliste gefiltert werden.
- Hintergrundbilder - Hier können Sie eine TMS-URL und ihre  Lizenz angeben.
- Prioritäten - Sie können den Teil des Projekts festlegen, der zuerst bearbeitet werden soll.
- Berechtigungen - Sie können den Zugriff für das Bearbeiten und Validieren im Projekt beschränken.
- Einstellungen - Wunschdatum für die Bearbeitung des Projekts und JOSM-Vorlagen.
- Aktionen - Nachrichten an Beteiligte senden, das komplette Projekt mit einem Klick für validiert bzw. ungültig erklären.

### Beschreibung

![TM Description][]

Diese Seite erlaubt es, Projektprioritäten zu vergeben, den Status als Entwurf, Veröffentlicht oder Archiviert zu kennzeichnen, eine kurze Beschreibung für die Projektübersicht und eine lange Beschreibung zu verfassen, die Bearbeiter sehen sobald sie ein Projekt ausgewählt haben.

Beide, die kurze und lange Beschreibung, sollten Informationen  enthalten, warum das Projekt existiert, wer die Daten verwenden wird und wer von der Kartierung profitieren wird. Diese Felder unterstützen Markdown-Formatierung und können Bilder und Videos beinhalten.

### Anweisungen

![TM Instructions][]

**Zu erfassende Objekte** - Eine Liste der Kartenelemente die bearbeitet werden sollen. Allgemein sollte man sich auf wenige Kartenelemente konzentrieren, da diese eher vollständig erfasst werden.

> Projekte, die viele Kartenelemente erfassen wollen sind schwierig für Bearbeiter und schwer zu überprüfen. Es dauert länger um brauchbare Daten zu bekommen. Die ideale Aufgabengröße ist auch je nach Kartierungsaufgabe unterschiedlich, so brauchen beispielsweise Gebäude kleinere Quadrate, Straßen und Flüsse dagegen größere Quadrate. Mehrere Projekte für dasselbe Gebiet zu erstellen, um Gebäude und lineare Kartenelemente zu erfassen, hat sich bewährt.

**Änderungssatz-Kommentar** - Das ist der Standard Änderungssatz-Kommentar, der bei jedem Hochladen zu OSM hinzugefügt wird. Er beinhaltet Angaben zum Tasking Manager des Projekts und zu den zu erfassenden Kartenelementen. Oft werden "Hash Tags" verwendet, um die beauftragende/ausführende Organisation zu identifizieren. Auch kann die Art der Bearbeitung beschrieben werden, z.B. "Mapping buildings".

> Benutzer sollten angewiesen werden, nützliche Kommentare über ihre Arbeit einzugeben, aber sie mit guten Standardkommentaren zu unterstützen ist immer eine gute Idee.

**Detaillierte Anweisungen** - Hier werden Sie die Mehrzahl Ihrer detaillierten Anweisungen eingegeben, insbesondere das, was jeder Bearbeiter und Prüfer sorgfältig lesen und befolgen sollte.

Weiter unten finden Sie Hinweise für die Erstellung guter Anleitungen.

**Anweisungen pro Aufgabe** - Diese werden angezeigt, wenn ein Bearbeiter eine Aufgabe auswählt. Hier kann man, basierend auf den typischen "slippy map" x-, y-, z-Koordinaten, aufgabenspezifische URLs verwenden.

### Metadaten

![TM Metadata][]

> Alle diese Felder sollten ausgefüllt werden und werden in zukünftigen Versionen von TM3 verpflichtend sein.

**Schwierigkeitsgrad** - Das ist ein Hinweis für die Schwierigkeit der Projektbearbeitung. Es gibt 3 Optionen: Anfänger, Fortgeschrittener Anfänger und Fortgeschrittener. Diese Einstellung ist ein Hinweis für den Bearbeiter, welche Erfahrungen sie mitbringen sollten, um erfolgreich beitragen zu können. Sie kann in der Projektübersicht zum Filtern verwendet und unter den Berechtigungen als erforderlich eingetragen werden.

**Kartografierungstyp** - Wird in der Projektübersicht zum Filtern  verwendet und hilft Bearbeitern, für sie interessante Projekte zu finden.

**Organisation** - Erlaubt es, die Organisation anzugeben, die die Daten verwenden wird. Wird in der Projektübersicht zum Filtern verwendet.

**Kampagne** - Dies ermöglicht die Zusammenfassung mit anderen Projekten, welche zu einem größeren Vorhabens gehören. Wird in der Projektübersicht zum Filtern verwendet.

### Priorisierte Gebiete

![TM Priority Area][]

Verwenden Sie die angebotenen Werkzeuge um ein Gebiet zu kennzeichnen, das als erstes bearbeitet werden soll. Sie können mehrere solche Gebiete für ein Projekt festlegen und sie auch jederzeit wieder ändern.

> Während der Erfassung von Katastrophengebieten hat es sich bewährt, bereits in einem frühen Stadium ein großes Projektgebiet vorzusehen und die Bearbeitung über wechselnde Prioritätsbereiche zu steuern, sobald sich die Situation ändert.

### Bildmaterial

URL-Feld - Ein Feld für eine TMS-URL, die automatisch vom OSM Editor des Bearbeiters oder Prüfers verwendet wird. Bitte beachten Sie unbedingt das Beispiel. Es ist sehr wichtig, dass die URL richtig formatiert ist, um in allen Editoren zu funktionieren.

Lizenz - Optional; falls der Bearbeiter eine spezielle Lizenz akzeptieren muss um die Bilder verwenden zu dürfen, können Sie sie hier auswählen. Benötigen Sie eine hier nicht aufgeführte Lizenz, wenden Sie sich an den Administrator der Tasking Manager Installation und bitten Sie ihn, diese hinzuzufügen.

### Berechtigungen

![TM Permissions][]

Schwierigkeitsgrad - Sie können erzwingen, dass ein Bearbeiter entsprechende Erfahrung mitbringt, um am Projekt mitzuarbeiten (siehe die Metadaten auf der vorherigen Seite). Erfahrungsstufen  eines Bearbeiters können manuell gesetzt werden, werden aber automatisch basierend auf der Anzahl der Änderungssätze ermittelt.

Validator-Rolle voraussetzen - Damit können Sie erzwingen, dass nur diejenigen validieren können, die als qualifizierte Prüfer eingestuft wurden. Es handelt sich um eine Einstufung durch erfahrene Kollegen um jemand zum Validator zu ernennen. Projektmanager und bereits zum Validator ernannte Benutzer  können andere Benutzer diese Rolle verleihen.

Privates Projekt - Dies beschränkt den Zugriff auf eine namentliche Auswahl von Benutzern. Benutzer müssen sich  mindestens einmal am Tasking Manager angemeldet haben, bevor sie zu Projekten hinzugefügt werden können.

### Einstellungen

Standardgebietsschema- Erlaubt das Setzen einer Standardsprache für die Anweisungen des Projekts.

### Aktionen

![TM Actions][]

Nachricht an alle Bearbeiter - Sendet eine Tasking Manager Nachricht an all diejenigen, welche eine Aufgabe als vollständig  bearbeitet oder geprüft gekennzeichnet haben. Damit können Sie Bearbeitern danken und/oder um sie auf andere Projekte einer Kampagne hinweisen. Sie sollten das auch benutzen bevor Sie alle Aufgaben als geprüft oder ungültig markieren, wie es weiter unten beschrieben wird.

Alle Aufgaben validieren - Dies markiert alle Aufgaben als "validiert", bis auf Aufgaben, die als "Schlechtes Bildmaterial" markiert wurden.

Alle Aufgaben für ungültig erklären - Dies markiert alle Aufgaben als "ungültig", bis auf Aufgaben, die als "schlechtes Bildmaterial" markiert wurden.

Projekt löschen - Dies wird dauerhaft das Projekt aus dem Tasking Manager löschen.

Projekt duplizieren - Dies erstellt ein Duplikat des Projekts, bis auf das Projektgebiet, welches erneut importiert oder gezeichnet werden muss.

### Hinweise zu den Anweisungen

Verwenden Sie eine einfache Sprache, da die Zielgruppe vielleicht nicht aus Muttersprachlern besteht.

1. Der Titel des Projekts sollte bereits verraten, welche Objekte erfasst werden sollen. Bevorzugen Sie Titel wie
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. Die wichtigsten Informationen sollten unter den Anweisungen als erstes auftauchen, damit sie auch gelesen werden. Dazu gehören beispielsweise spezielle Luftbilder anstatt von Bing. Der erste Satz könnte erwähnen, dass nicht jedes einzelne Haus erfasst werden muss, wenn das Projekt zum Beispiel Straßen und Wohngegenden erfasst. Oder dass jedes Haus erfasst werden soll, wenn das Projekt die Bevölkerungsdichte abschätzen möchte. Diese Informationen sollten sich auch unter den Beschreibungen wiederfinden.
3. Andere klarzustellende Punkte: Falls das Projekt nur für Bearbeiter mit gewisser Erfahrung geeignet ist. Falls das Projekt zum Beispiel Daten importiert oder existierende Daten nach GPS-Spuren oder anderen Bildern ausgerichtet werden sollen (siehe vorherigen Abschnitt). Man sollte es so formulieren, dass Anfänger dazu motiviert werden, sich ein anderes Projekt zu suchen, aber auch verstehen, dass hier fortgeschrittene Techniken vorausgesetzt werden.
4. Es gibt Anleitungen welche übliche Fehler ansprechen, die wir immer wieder bei der Validierung feststellen. Ein Beispiel ist Blake Girardots Zusammenstellung für  [Kartierung in Westafrika (engl.)](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Verwenden SIe den Link in der Anleitung und erklären Sie, dass man sich daran halten sollte.
5. Das verbindliche Nachschlagewerk für die Vergabe von Attributen ist das [OpenStreetMap-Wiki](http://wiki.openstreetmap.org/wiki/Map_Features). Für viele Projekte im  HOT-Umfeld ist die Seite [über die Klassifizierung von Straßen in Afrika (engl.)] (http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) die beste Spezialisierung und sollte von jedem Bearbeiter gelesen werden. Falls sich das Projekt auf andere Attributierungs- Standards bezieht, sollten Sie eine ähnliche Seite im Wiki erstellen und in Ihren Anweisungen verlinken.


### Gedanken zum Bildmaterial

In den meisten Fällen verwendet man "Standard" Bing-Bildmaterial. Es gibt aber Situationen, in denen man alternative Quellen wählen möchte:

1. Bing bietet keine hochauflösende Abdeckung für das Gebiet.
2. Bing hat beträchtliche Wolkenbedeckung in diesem Gebiet.
3. Man benötigt neueres Bildmaterial für die Bewertung nach Katastrophen.

Falls Bing nichts Geeignetes anbietet ist Mapbox die nächste Wahl. Suchen Sie nur nach anderen Quellen, falls keiner der beiden Anbieter die Anforderungen erfüllt.

In diesem Fall ist es nicht ausreichend, eine lizenzkompatible Quelle auszuwählen und als WMS- oder TMS-Service zur Verfügung zu stellen. Das Gebiet wurde vielleicht bereits teilweise mit Bing oder Mapbox erfasst und es kann Versatz zwischen den Bildern auftreten. Sie müssen sich verschiedene Stellen im Projektgebiet anschauen und den Versatz zwischen dem von Ihnen ausgewählten Bildmaterial und den bereits  erfassten Daten bestimmen. Falls die existierenden OSM-Daten einen Versatz zu dem von Ihnen gewählten Bildmaterial haben, aber zu Bing passen, nehmen wir Bing als "Goldstandard" an es sei denn, uns liegen GPS-Spuren vor, die diese Annahme in Frage stellen.

Wenn der Versatz zwischen dem von Ihnen gewählten Bildmaterial und Bing über das Gebiet hinweg konstant ist, kann man dies auf dem Server korrigieren, so dass die unterschiedlichen Bilder zueinander passen. Wenn das nicht möglich ist, weil der Versatz über das Gebiet hinweg unterschiedlich ist oder erfasste Daten nach unterschiedlichen Quellen ausgerichtet sind, ist es Zeit für Plan B:

Sie müssen unbedingt eine Strategie entwickeln, wie man mit diesen Punkten umgeht und detaillierte Anweisungen für Bearbeiter und Prüfer geben. Wir empfehlen, solche Projekte als "nur für erfahrene Bearbeiter" zu deklarieren und zu erklären, dass Erfahrung hier nicht bedeutet, mehr als 200 Gebäude erfasst zu haben, sondern dass man bereits versiert sein sollte in der Ausrichtung unterschiedlicher Bildquellen.

Eine mögliche Strategie könnte folgende Schritte beinhalten:

1. Legen Sie fest, welche Bildquelle die Referenz ist nach der alles ausgerichtet wird. Wir nehmen hier einmal an, dass Bing die Referenz ist.
2. Die Bearbeiter sollen sicherstellen, dass alle existierenden Kartenelemente, die auch auf Bing sichtbar sind, nach Bing  ausgerichtet sind. Wenn nötig müssen die Elemente danach ausgerichtet werden.
3. Die alternative Bildquelle muss nach existierenden Kartenelementen (und somit auch nach Bing) ausgerichtet werden. Dazu dient die Hintergrund-Offset-Funktion des Editors.
4. Neue Kartenelemente sollen aus dem nun korrekt ausgerichteten alternativen Bildmaterial hinzugefügt werden.

Es ist wichtig, dass Schritt 3 für jede Aufgabe des Projekts wiederholt wird und individuelle Aufgabenquadrate nicht zu groß sind, da sich der Bildversatz über ein Gebiet hinweg ändern kann. Das tritt vor allem in steilem Gelände auf. Auch abrupte Änderungen des Versatzes im Bildmaterial können im Projektbereich auftreten - suchen Sie danach und weisen Sie die Bearbeiter auf so ein Problem hin.

Hier finden Sie einige Links, die Sie in die Anweisungen Ihres Projekts einfügen können:

- [Allgemeine Richtlinien für zahlreiche Editoren](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [ein animiertes Gif zur Luftbildausrichtung in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [Das Kapitel über Luftbildausrichtung bei JOSM in learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


### Korrekturlesen und Veröffentlichen
Lesen Sie die Seiten Ihres Projekts nochmals zur Korrektur um sicherzustellen, dass Rechtschreibung und Wortwahl korrekt und die Anweisungen klar sind. Wenn Sie Änderungen oder Verfeinerungen machen möchten, klicken Sie auf 'Projekt bearbeiten' in der oberen linken Ecke der Seite. 
Wenn das Projekt bereit zur Bearbeitung ist, klicken Sie auf  'Veröffentlichen'k. Sobald das Projekt veröffentlicht ist, ist es für jeden mit einem OSM-Benutzerkonto verfügbar, wenn nicht eine bestimmte Benutzergruppe unter den Einstellungen zu 'Erlaubten Benutzern' angegeben wurde. In diesem Fall sind nur die angegebenen Benutzer in der Lage, daran zu arbeiten. Wenn nötig können Änderungen nach der Veröffentlichung immer noch gemacht werden, indem man auf 'Projekt bearbeiten' klickt.

[TM Tile Sizes]: /images/coordination/tm3_tile_sizes.png
[TM New]: /images/coordination/tm3_create_new.png
[TM Description]: /images/coordination/tm3_description.png
[TM Instructions]: /images/coordination/tm3_instructions.png
[TM Metadata]: /images/coordination/tm3_metadata.png
[TM Priority Area]: /images/coordination/tm3_priority_area.png
[TM Permissions]: /images/coordination/tm3_permissions.png
[TM Actions]: /images/coordination/tm3_actions.png