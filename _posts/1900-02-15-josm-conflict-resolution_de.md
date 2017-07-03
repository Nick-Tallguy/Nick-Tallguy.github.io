---
layout: doc
title: JOSM Konflikt Behebung
permalink: /de/josm/josm-conflict-resolution/
lang: de
category: josm
---

JOSM Konflikt Behebung
====================

> Diese Anleitungen kann heruntergeladen werden als [josm-conflict-resolution_en.odt](/files/josm-conflict-resolution_en.odt) or [josm-conflict-resolution_en.pdf](/files/josm-conflict-resolution_en.pdf)  
> Reviewed 2016-09-27  

Wenn man mit JOSM arbeitet bekommt man manchmal, wenn man seine Änderungen hochlädt, eine Nachricht über Konflikte.  
![conflict detected][]  
Folgendes ist passiert, man hat einen Node A zusammen mit anderen Daten heruntergeladen. Während man editiert, hat jemand anderes ebenfalls Node A heruntergeladen, geändert und auf OpenStreetMap gespeichert. Wenn man nun seine Version von Node A hochlädt, ist diese anders, als die gespeicherte in OSM. JOSM weis nun nicht, welche Version von Node A gespeichert werden soll.  

Konflikte
----------

Manchmal kann JOSM Konflikte selbst lösen und zeigt eine Nachricht ähnlich der folgenden an:  
![resolved automatically][]  
Das bedeutet, dass JOSM automatisch entschieden hat Teile des lokalen Datensatzes nicht zum Hauptserver hochzuladen, da diese bereits durch einen anderen Benutzer gelöscht wurden. Bei manchen Konflikten gibt es keine einfachen Entscheidungen für JOSM und dem Benutzer wird die Entscheidung überlassen, was zu tun ist. Das bedeutet man muss den Konflikt selbst lösen.  

Das zeigt, dass man all seine Konflikte im Layer 1 selbst anschauen muss, in der ""Dialog Liste** Box:  
![warning unresolved][]  

Dieses Fenster zeigt eine Warnung an, dass man wahrscheinlich einen Konflikt mit seinen Änderungen auslöst. Wenn man auf dem Server gegenprüft, kann man das Bearbeitungsproblem lösen, das ansonsten auftritt:  
![check on server][]  

Diese Warnung bedeutet, dass JOSM eine Node nicht löschen konnte, da sie immer noch durch einen Weg verwendet wird. Um hier Abhilfe zu schaffen, muss man zurück in JOSM gehen und den Konflikt beheben, bevor man die Daten hochlädt:  
![still in use][]  

Konflikt Behebung
--------------------

der Prozess zur Behebung eines Konfliktes in JOSM ist relativ einfach, auch wenn es im Ersten Moment verwirrend erscheint. Allgemein bietet JOSM für jeden Konflikt zwei Auswahlmöglichkeiten an - die eigenen Version eines Objekts oder die auf dem Server. Man entscheidet sich, ob die eigene Version oder die neue Version auf dem Server behalten werden soll.  
Man denkt ""natürlich ist meine Version besser! und liegt vielleicht richtig. Aber man bedenke das Beispiel vom Beginn dieses Kapitels. Vielleicht hat ein anderer Mapper viele Informationen zu einem Node in unserem Datensatz hinzugefügt während wir editiert haben. Wenn man seine Version gegen der anderen vorzieht, verliert man all die wertvollen Informationen die hinzugefügt wurden. Man sollte also in Betracht ziehen die andere Version zu behalten oder mit der eigenen zu verschmelzen.  
Falls man ein Konfliktfenster bekommt sollte man den Button "Nur Synchronisieren ..." wählen. Man muss dies gegebenenfalls für mehr als ein Objekt machen, aber man sollte immer einen Konflikt nach dem anderen lösen.  
![synchronize node][]  
Klickt man diesen Button, erscheint ein Popup Fenster, das den Konflikt genauer beschreibt. Die Fehlermeldung mag kompliziert erscheinen, ist aber meist einfach. Man erkennt die Art des Konflikts durch das rote Quadratsymbol im oberen Tab. Der Konflikt im nachfolgenden Beispiel bezieht sich auf die Eigenschaften, wie den Standort und die Existenz des Objektes. Deshalb sind Koordinaten und Löschstatus aufgeführt.  

**Konfliktarten:**

- **Eigenschaften:** Objekt wurde verschoben (Koordinaten) oder gelöscht  
- **Tags:**  Tags passen nicht  
- **Nodes:**  Zwei Wege haben eine unterschiedliche Anzahl an Nodes  
- **Mitglieder:** Eine Relation hat eine unterschiedliche Anzahl an Mitgliedern  
![properties with conflicts][]  

Konflikte erscheinen nur bei zwei unterschiedlichen Bearbeitungen zur gleichen Zeit. Falls drei oder mehr Konflikte auftreten, erscheint eine Kette von Konfliktmeldungen. Man wählt oder vereint immer nur zwei Konflikte zur gleichen Zeit. Man wählt seine Version, die andere oder zeitweise die Vereinigung beider.  

Im nachfolgenden Beispiel hat man nicht die Möglichkeit zum Vereinen. Man klickt auf die erste Spalte oder Meine Version, wenn man meint, dass seine Bearbeitungen korrekt sind. Man klickt auf Andere Version, wenn man meint, dass diese Bearbeitungen besser sind.  
![conflicts resolved][]  

Sobald man die nach eigener Meinung bessere Version ausgewählt hat, klickt man "Lösung anwenden". Weitere Fenster erscheinen und man kommt seinem Ziel seine Bearbeitungen hochzuladen näher. Nach weiteren Änderungen klickt man 'Hochladen'. Ein Fenster erscheint:  
![command stack][]  

Im Fenstermenü hat man einen Dialog mit gelisteten Konflikten. Die Anzahl der ungelösten Konflikte wird im Kopf angezeigt. Man kann einen Konflikt durch anklicken auswählen oder lösen. Das ist nützlich, wenn man mit mehreren Konflikten umgehen muss.  
![one unresolved][]  
Man kann seine Änderungen nicht hochladen solange Konflikte in der Liste angezeigt werden.  

Wege Konflikte zu vermeiden
------------------------

### Regelmäßig hochladen

Um das Risiko und die Anzahl von Konflikten zu verkleinern, ist es wichtig regelmäßig seine Bearbeitungen hochzuladen. Konflikte treten häufiger auf bei denen, die ein Gebiet bearbeiten, auf dem lokalen Server speichern und mit dem Hochladen eine Weile warten. Man sollte am Besten ein Gebiet an dem man arbeitet herunterladen, es bearbeiten und direkt wieder hochladen. Je mehr Zeit zwischen Herunterladen und Hochladen der Änderungen vergeht, umso wahrscheinlicher ist es, dass jemand anders etwas in der Zwischenzeit bearbeitet hat. Wenn man an einem Mapathon teilnimmt und Features wie eine Straße bearbeitet, die auch von anderen bearbeitet werden kann, sollte man regelmäßig hochladen, vielleicht so nach 6 Änderungen!  

### Änderungen im heruntergeladenen Gebiet

Bearbeitungen in dem Gebiet, das man heruntergeladen hat verringern Konfliktrisiken. Man sollte nicht außerhalb des Gebiets, das man heruntergeladen hat bearbeiten. Man sieht in JOSM leicht, welche Gebiete außerhalb des heruntergeladenen Gebiets sind, da der Hintergrund aus diagonalen Linien besteht, anstatt aus durchgehendem Schwarz.  

![edit outside area][]  

Zusammenfassung
--------
Wenn man mit JOSM arbeitet, kann man in Konflikte laufen. Konflikte passieren, wenn ein Objekt durch ein oder mehrere Personen zur gleichen Zeit bearbeitet wird. Indem man versteht, was ein Konflikt ist und wie man damit umgeht stellt man sicher, dass die bestmöglichsten Änderungen in OpenStreetMap gespeichert werden.  


<!-- More stuff, could go into an additional chapter - DO NOT TRANSLATE
# # Anhang. Mehr spezifische Konflikte

### Tag Konflikte

Falls die Tags einer Version eines Objekts sich unterscheiden von
einer anderen Version, zeigt der Konfliktdialog ein ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png) in
dem Tags Tab. Man klick auf den Tab, um einen Dialog anzuzeigen, zum Lösen des Tag
Konflikts.

Es werden drei Tabellen angezeigt in diesem Dialog, von links nach rechts:

1. Meine Version: zeigt die Tags der ersten beteiligten Objektversion
    in this conflict. These are usually the tags of the object version
    in your local data set.
2.  Merged version: shows the merged tags. This table is initially
    empty. The more tag conflicts you resolve, the more tag values will
    we be displayed in this table.
3.  Their version: shows the tags of the second object version
    participating in this conflict. These are usually the tags of the
    object version currently stored on the server.

In the example below both versions have a tag "name". The values in the
two object versions are different, though, and JOSM therefore displays
the row with a red background. The value of the first version is
"Secondary School", the opposite version has a value "Elementary
School". You now have to decide which of these values you want to keep
and which you want to discard.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Click on the value you want to keep, in the example for instance on the
value on the left. If you either double-click on the value or click on
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), you decide to keep the value and to discard the
opposite value. The table in the middle now displays the value to keep
and the background color turns to green.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

When the button Apply Resolutionis enabled you can apply your decision.
The values you've chosen will be applied and the dialog will be closed.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Resolving differences in the node list of two versions of a way

If you see the symbol ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in the tab Nodesthen you
have to resolve differences in the list of
[nodes](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)of two
[ways](http://josm.openstreetmap.de/wiki/Help/Concepts/Object). There
are three columns in the respective panel (see screen shot below):

1.  the leftmost table displays the list of nodes of the the local
    Objektversion
2.  the rightmost table displays the list of nodes of the the server
    Objektversion
3.  the table in the middle shows the list of nodes of the merged ways

Initially, the middle table is empty. You should now decide which nodes
to keep from the local dataset (the leftmost table) and which from the
server dataset (the rightmost table).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### The standard workflow

The standard workflow to resolve conflicts in the node lists of two
[object
versions](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)consists
of three steps:

1.  Pick nodes from either object version and reorder the resulting node
    list if necessary
2.  Freezethe resulting merged node list by clicking on the button
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). When you freeze the merged node list you
    tell JOSM that all conflicts in the node list are resolved.
3.  Apply the resolution

### A simple workflow: Keep the node list from your local object version

The following example shows the workflow when you decide to keep all nodes in the same order from your local object version.

-   First, select all elements in the leftmost table (either using the mouse or by 
    pressing Ctrl-A in the table) (see next screen shot):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

-   Then, click 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    to copy the selected nodes to the middle table with the merged nodes:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

-   Finally, click
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    to freeze the resulting merged node list:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    The symbol in the nodes tab now switched to 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    and you can apply the merge decisions.

### Support for comparing node lists

It can be difficult to find the differences between the node list of of two object versions, in particular for ways with many nodes.

The Conflict Dialog supports you in finding the differences. It can compare two of the node lists displayed ("my" node list, the merged node list, and "their" node list) and it can render the differences between them with specific background colors.

From the following combo box you can select which pair of node lists to compare:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1.  My with Their: compares the leftmost table with the rightmost table
    in the Conflict Dialog
2.  My with Merged: compares the leftmost table with the middle table in
    the Conflict Dialog
3.  Their with Merge: compares the middle table with the rightmost table
    in the Conflict Dialog

Depending on the position of a node in the list different background
colors are used:

1.  The node is in this list only. It isn't present in the opposite list:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2.  The node is in both lists, but it is on different positions:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3.  White background means that a node is in both lists at the same
    position.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->

[conflict detected]: /images/josm/conflict-detected.png
[resolved automatically]: /images/josm/resolved-automatically.png
[warning unresolved]: /images/josm/warning-unresolved.png
[check on server]: /images/josm/check-on-server.png
[still in use]: /images/josm/still-in-use.png
[synchronize node]: /images/josm/synchronize-node.png
[properties with conflicts]: /images/josm/properties-with-conflicts.png
[conflicts resolved]: /images/josm/conflicts-resolved.png
[synchronize node]: /images/josm/synchronize-node.png
[command stack]: /images/josm/command-stack.png
[one unresolved]: /images/josm/one-unresolved.png
[edit outside area]: /images/josm/edit-outside-area.png