---
layout: doc
title: Risoluzione dei conflitti in JOSM
permalink: /it/josm/josm-conflict-resolution/
lang: it
category: josm
---

Risoluzione dei conflitti in JOSM
====================

> Questa guida può essere scaricata come [josm-conflict-resolution_it.odt](/files/josm-conflict-resolution_it.odt) oppure [josm-conflict-resolution_it.pdf](/files/josm-conflict-resolution_it.pdf)  
> Revisionato il 2016-09-27  

Talvolta lavorando con JOSM, quando carichi i tuoi bellissimi edit ottieni un brutto messaggio che si lamenta di un conflitto.  
![conflict detected][]  
E' successo che hai scaricato dei dati, in cui c'è un punto che chiamiamo Nodo A. Mentre stavi editando, qualcun altro ha scaricato il Nodo A, lo ha cambiato e ha salvato i cambiamenti in OpenStreetMap.  Adesso, quando provi a caricare la tua versione del Nodo A, questa è differente da quella presente in OSM.  Quindi JOSM non sa quale quale versione del Nodo A deve essere salvata.  

Conflitti
----------

Talvolta JOSM è capace di risolvere autonomamente i conflitti e ti darà un messaggio come questo:  
![resolved automatically][]  
Ciò significa che JOSM ha deciso autonomamente che gli oggetti nel tuo dataset locale non saranno caricati perchè sono stati già cancellati da un altro utente. In alcuni conflitti, comunque, JOSM non può prendere l'iniziativa e così lascia decidere all'utente come procedere. Tocca a te risolvere il conflitto.  

Questo ti suggerisce di considerate tutti i conflitti nel Layer 1 del riquadro  **Dialog List**:  
![warning unresolved][]  

This window provides you with a warning as to whether you are likely to experience a conflict with your edits. If you check on the server you will be able to fix the editing issues that would arise:  
![check on server][]  

This warning tells you that JOSM failed to delete a node due to it still being referenced in a way.  In order to remedy this, the user has to go back into JOSM and resolve the conflict before uploading the data:  
![still in use][]  

Risoluzione dei conflitti
--------------------

The process of resolving a conflict is quite simple, although it can appear confusing at first in JOSM.  Basically, for every conflict JOSM will present you with two choices - your version of an object and the one that is on the server.  You need to choose whether to keep your version, or whether the new version on the server should remain.  
You might think, “of course my version is going to be better!”  And maybe you’re right.  But think back to our example at the start of this chapter.  Perhaps while you were busy editing, another mapper added a lot of information to one of the nodes in your data set.  If you choose your version over their version, you will lose all of that valuable information that they added.  Hence you should consider keeping their version, or merging it with your own.  
When you get a conflict window pop-up, it is best to choose the button “Synchronize ... only.”  You may need to do this for more than one object, but it is best to resolve conflicts one at a time.  
![synchronize node][]  
Once you click this button, you will get a pop-up window that details your conflict.  The error message may look complicated, but it is rather simple.  You will know what type of conflict you have by the red square symbol in the top tab.  The conflict in the below example refers to the properties, such as the location and existence of the object.  This is why the coordinates and deleted state are listed.  

**Tipi di Conflitto:**

- **Proprietà:**  L'oggetto è stato spostato (coordinate) o cancellato  
- **Tag:**  I tag non combaciano  
- **Nodi:**  C'è una differenza nella lista dei nodi delle due way  
- **Membri:**  C'è differenza nella lista dei membri di una relazione  
![properties with conflicts][]  

I conflitti appaiono solo nel caso di due modifiche contemporanee. Se ci sono tre o più conflitti, apparirà una catena di conflitti.  Dovrai quindi scegliere o unire due conflitti alla volta. Potrai scegliere la tua versione, l'altra versione o, a volte, unire le due.  

Nel seguente esempio non hai l'opzione di unire le versioni. Clicca sulla prima colonna, o Mia versione se ritieni che le tue modifiche siano corrette. Clicca su Loro versione se ritieni che le loro modifiche siano migliori.  
![conflicts resolved][]  

Once you have selected which version you think is best, then click “Apply Resolution.”  A few more windows will pop up and you will be on your way toward being able to upload your edits. Do some more editing.  Then click ‘Upload’.  You will get a pop-up that says:  
![command stack][]  

On your Windows menu you have a Conflict List Dialog . This window displays a list of conflicts. The total number of unresolved conflicts is shown in the header. You can select or resolve a conflict by clicking on it. This is useful when you have many conflicts to deal with.  
![one unresolved][]  
You cannot upload your changes until this list is empty.  

Modi per evitare i conflitti
------------------------

### Upload Frequently

To minimize the chance and number of conflicts it is important to upload your edits regularly.  Conflicts appear more frequently for those who tend to save the area they are working on in their local server and wait a while to upload it.  It is best to download the area you are working on, edit it and then immediately upload it.  The longer the time between downloading data and uploading changes to that data, the more likely it is that someone has edited something in the meantime. If you are at a Mapathon & editing a feature such as a highway which may be worked on by others as well, upload very frequently, perhaps every 6 edits!  

### Edit in the Area You Download

Editing in the specific area you have downloaded minimizes conflict risk.  Make sure you do not edit outside of the area that you have downloaded.  You can easily see which areas outside your download area in JOSM, because the background is made up of diagonal lines instead of being solid black.  

![edit outside area][]  

Riassunto
--------
When you edit in JOSM, you run the risk of running into conflicts.  Conflicts occur when an object has been edited by two people at a similar time.  By understanding what a conflict is and how to deal with it, you will be able to ensure that the best possible edits are saved to OpenStreetMap.  


<!-- More stuff, could go into an additional chapter - NON TRADURRE
## Appendix. More Specific Conflicts

### Tag Conflicts

If the tags of one version of an objects are different from the tags of
another version, the Conflict dialog shows a ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in
the tab Tags. Click on the tab to display a dialog for resolving tag
conflicts.

There are three tables displayed in this dialog, from left to right:

1.  My version: shows the tags of the first object version participating
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
    object version
2.  the rightmost table displays the list of nodes of the the server
    object version
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