---
layout: doc
title: Resolución de Conflicto JOSM
permalink: /es/josm/josm-conflict-resolution/
lang: es
category: josm
---

Resolución de Conflicto JOSM
====================

> Revisado 2016-09-27  

Sometimes you are working in JOSM and when you upload all of your beautiful edits you get a nasty message complaining about a conflict.  
![conflicto detectado][]  
What happened is that you downloaded a bunch of data, which included a point which we will call Node A.  Then while you were editing, somebody else also downloaded Node A, changed it, and saved the changes back on OpenStreetMap.  Now when you try to upload your version of Node A, it is different from the one saved on OSM.  Therefore JOSM doesn’t know which version of Node A should be saved.  

Conflictos
----------

Sometimes, JOSM is able to figure out what to do with conflicts on its own, and it will give you a message like this:  
![resuelto automáticamente][]  
This means that JOSM has automatically decided that items in your local dataset will not be uploaded to main server because they have already been deleted by another user. In some conflicts, however, there is no easy action for JOSM to take and so it leaves the decision up to the user to determine what the best course of action is.  This means it is up to you to resolve the conflicts.  

This tells you to look at all of your conflicts in Layer 1 in the **Dialog List** box:  
![warning unresolved][]  

This window provides you with a warning as to whether you are likely to experience a conflict with your edits. If you check on the server you will be able to fix the editing issues that would arise:  
![check on server][]  

This warning tells you that JOSM failed to delete a node due to it still being referenced in a way.  In order to remedy this, the user has to go back into JOSM and resolve the conflict before uploading the data:  
![aún en uso][]  

Resolución de conflicto
--------------------

The process of resolving a conflict is quite simple, although it can appear confusing at first in JOSM.  Basically, for every conflict JOSM will present you with two choices - your version of an object and the one that is on the server.  You need to choose whether to keep your version, or whether the new version on the server should remain.  
You might think, “of course my version is going to be better!”  And maybe you’re right.  But think back to our example at the start of this chapter.  Perhaps while you were busy editing, another mapper added a lot of information to one of the nodes in your data set.  If you choose your version over their version, you will lose all of that valuable information that they added.  Hence you should consider keeping their version, or merging it with your own.  
When you get a conflict window pop-up, it is best to choose the button “Synchronize ... only.”  You may need to do this for more than one object, but it is best to resolve conflicts one at a time.  
![sincronizar nodo][]  
Once you click this button, you will get a pop-up window that details your conflict.  The error message may look complicated, but it is rather simple.  You will know what type of conflict you have by the red square symbol in the top tab.  The conflict in the below example refers to the properties, such as the location and existence of the object.  This is why the coordinates and deleted state are listed.  

**Tipos de conflicto:**

- **Propiedades:**  El objeto ha sido movido (coordenadas) o eliminado  
- **Etiquetas:**  Etiquetas no coinciden  
- **Nodos:**  Hay una diferencia en la lista de nodos de dos maneras  
- **Miembros:**  Hay una diferencia en la lista de miembros en una relación  
![propiedades con conflictos][]  

Conflicts only appear with two different edits at a time.  If there are three or more conflicts, then a chain of conflicts will pop-up.  Therefore you have to choose or merge with only two conflicts at a time.  You can choose your version, the other version or, at times, merge the two.  

In the below example you do not have the option of merging. Click on the first column, or My version if you believe that your edits are correct. Click on Their version if you think that the other edits are better.  
![conflictos resueltos][]  

Once you have selected which version you think is best, then click “Apply Resolution.”  A few more windows will pop up and you will be on your way toward being able to upload your edits. Do some more editing.  Then click ‘Upload’.  You will get a pop-up that says:  
![pila de comando][]  

On your Windows menu you have a Conflict List Dialog . This window displays a list of conflicts. The total number of unresolved conflicts is shown in the header. You can select or resolve a conflict by clicking on it. This is useful when you have many conflicts to deal with.  
![uno sin resolver][]  
No puede subir sus cambios hasta que la lista esté vacía.  

Maneras de Evitar Conflictos
------------------------

### Subir Frecuentemente

To minimize the chance and number of conflicts it is important to upload your edits regularly.  Conflicts appear more frequently for those who tend to save the area they are working on in their local server and wait a while to upload it.  It is best to download the area you are working on, edit it and then immediately upload it.  The longer the time between downloading data and uploading changes to that data, the more likely it is that someone has edited something in the meantime. If you are at a Mapathon & editing a feature such as a highway which may be worked on by others as well, upload very frequently, perhaps every 6 edits!  

### Modificar en el área que descargó

Editing in the specific area you have downloaded minimizes conflict risk.  Make sure you do not edit outside of the area that you have downloaded.  You can easily see which areas outside your download area in JOSM, because the background is made up of diagonal lines instead of being solid black.  

![Modificar en el área exterior][]  

Resumen
--------
When you edit in JOSM, you run the risk of running into conflicts.  Conflicts occur when an object has been edited by two people at a similar time.  By understanding what a conflict is and how to deal with it, you will be able to ensure that the best possible edits are saved to OpenStreetMap.  


<!-- More stuff, could go into an additional chapter - DO NOT TRANSLATE
## Apéndice. Más conflictos específicos

### Conflictos de Etiqueta

Si las etiquetas de una versión de los objetos son diferentes de las etiquetas de
otra versión, el cuadro de diálogo de Conflicto muestra una ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)en
la pestaña Etiquetas. Clic en la pestaña muestra el cuadro de diálogo para resolver las mismas
conflictos.

Hay tres tablas mostradas en este cuadro de diálogo, de izquierda a derecha:

1.  Mi versión: muestra las etiquetas de la versión del primer objeto participando
    en este conflicto. Estas son usualmente las etiquetas del objeto 
    en su conjunto de datos local.
2. Versión fusionada: muestra las etiquetas fusionadas. Esta tabla está inicialmente
    vacío. Cuantos más conflictos de etiquetas resuelva, los valores de las etiquetas 
    we be displayed in this table.
3.  Their version: shows the tags of the second object version
    participando en este conflicto. Estas son usualmente las etiquetas de 
    versión del objeto actualmente guardado en el servidor.

In the example below both versions have a tag "name". The values in the
two object versions are different, though, and JOSM therefore displays
the row with a red background. The value of the first version is
"Secondary School", the opposite version has a value "Elementary
School". You now have to decide which of these values you want to keep
y cual desea descartar.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Click on the value you want to keep, in the example for instance on the
value on the left. If you either double-click on the value or click on
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), you decide to keep the value and to discard the
opposite value. The table in the middle now displays the value to keep
y el color de fondo se vuelve verde.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

When the button Apply Resolutionis enabled you can apply your decision.
The values you've chosen will be applied and the dialog will be closed.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Resolving differences in the node list of two versions of a way

If you see the symbol ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png)in the tab Nodesthen you
tiene que resolver diferencias en la lista de
[nodos](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)de dos
[ways](http://josm.openstreetmap.de/wiki/Help/Concepts/Object). There
are three columns in the respective panel (see screen shot below):

1.  the leftmost table displays the list of nodes of the the local
    versión de objeto
2.  the rightmost table displays the list of nodes of the the server
    versión de objeto
3.  the table in the middle shows the list of nodes of the merged ways

Initially, the middle table is empty. You should now decide which nodes
to keep from the local dataset (the leftmost table) and which from the
server dataset (the rightmost table).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### El flujo de trabajo estándar

The standard workflow to resolve conflicts in the node lists of two
[objeto
versiones](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)consiste
de tres pasos:

1.  Pick nodes from either object version and reorder the resulting node
    listar si es necesario
2.  Freezethe resulting merged node list by clicking on the button
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). When you freeze the merged node list you
    tell JOSM that all conflicts in the node list are resolved.
3. Aplicar la resolución

### A simple workflow: Keep the node list from your local object version

The following example shows the workflow when you decide to keep all nodes in the same order from your local object version.

-   First, select all elements in the leftmost table (either using the mouse or by 
    pressing Ctrl-A in the table) (see next screen shot):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

- Luego, clic 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    to copy the selected nodes to the middle table with the merged nodes:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

- Finalmente, clic
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    to freeze the resulting merged node list:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    The symbol in the nodes tab now switched to 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    y puede aplicar las decisiones de fusión.

### Support for comparing node lists

It can be difficult to find the differences between the node list of of two object versions, in particular for ways with many nodes.

The Conflict Dialog supports you in finding the differences. It can compare two of the node lists displayed ("my" node list, the merged node list, and "their" node list) and it can render the differences between them with specific background colors.

From the following combo box you can select which pair of node lists to compare:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1.  My with Their: compares the leftmost table with the rightmost table
    en el Diálogo de Conflicto
2.  My with Merged: compares the leftmost table with the middle table in
    el Diálogo de Conflicto
3.  Their with Merge: compares the middle table with the rightmost table
    en el Diálogo de Conflicto

Depending on the position of a node in the list different background
colores son usados:

1.  The node is in this list only. It isn't present in the opposite list:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2.  The node is in both lists, but it is on different positions:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3.  White background means that a node is in both lists at the same
    posición.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->

[conflict detected]: /images/josm/conflict-detected.png
[resolved automatically]: /images/josm/resolved-automatically.png
[warning unresolved]: /images/josm/warning-unresolved.png
[check on server]: /images/josm/check-on-server.png
[aún en uso]: /images/josm/still-in-use.png
[sincronizar nodo]: /images/josm/synchronize-node.png
[propiedades con conflictos]: /images/josm/properties-with-conflicts.png
[conflictos resueltos]: /images/josm/conflicts-resolved.png
[sincronizar nodo]: /images/josm/synchronize-node.png
[pila de comando]: /images/josm/command-stack.png
[uno sin resolver]: /images/josm/one-unresolved.png
[edit outside area]: /images/josm/edit-outside-area.png