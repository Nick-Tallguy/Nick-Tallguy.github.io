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

Questa segnalazione ti avvisa che devi risolvere i conflitti del Livello 1 prima di poter caricare i dati:  
![warning unresolved][]  

Questa finestra ti avvisa che probabilmente incontrerai un conflitto con le tue modifiche. Se controlli sul server sarai in grado di sistemare i problemi che potrebbero esserci:  
![check on server][]  

Questo avviso ti dice che JOSM non è riuscito a cancellare un nodo dato che è ancora utilizzato in una way. Per risolvere questo problema, l'utente deve tornare in JOSM e risolvere il conflitto prima di caricare i dati:  
![still in use][]  

Risoluzione dei conflitti
--------------------

Il processo di risolvere un conflitto è molto semplice, sebbene a prima vista possa sembrare complicato in JOSM. Di base, per ogni conflitto JOSM ti presenterà due alternative - la tua versione di un oggetto e quella che c'è sul server. Tu devi scegliere se mantenere la tua versione, o se deve rimanere la nuova versione sul server.  
Tu potresti pensare "di certo è migliore la mia versione!", e forse potresti aver ragione. Ma ripensa al nostro esempio all'inizio di questo capitolo. Magari mentre eri impegnato a fare modifiche, un altro utente ha aggiunto molte informazioni ad uno dei nodi che avevi scaricato. Se scegli la tua versione rispetto alla loro, perderai tutte le preziose informazioni che loro hanno aggiunto. Quindi dovresti considerare di mantenere la loro versione, o di integrarla con la tua.  
Quando ti compare una finestra di conflitto, è meglio scegliere il pulsante "Sincronizza ... solamente". Puoi farlo per più di un oggetto, ma è meglio risolvere i conflitti uno alla volta.  
![synchronize node][]  
Quando clicchi questo pulsante, ti comparirà una finestra che dettaglia il conflitto. Il messaggio d'errore può sembrare complicato, ma è piuttosto semplice. Saprai che tipo di conflitto è dal quadratino rosso nella linguetta in alto. Il conflitto nell'esempio sottostante si riferisce alle proprietà, quali la posizione e l'esistenza dell'oggetto. Questo è il motivo per cui sono elencate le coordinate e lo stato di cancellazione.  

**Tipi di Conflitto:**

- **Proprietà:**  L'oggetto è stato spostato (coordinate) o cancellato  
- **Etichette:**  Le etichette non corrispondono  
- **Nodi:**  C'è una differenza nella lista dei nodi delle due way  
- **Membri:**  C'è differenza nella lista dei membri di una relazione  
![properties with conflicts][]  

I conflitti appaiono solo nel caso di due modifiche contemporanee. Se ci sono tre o più conflitti, apparirà una catena di conflitti.  Dovrai quindi scegliere o unire due conflitti alla volta. Potrai scegliere la tua versione, l'altra versione o, a volte, unire le due.  

Nel seguente esempio non hai l'opzione di unire le versioni. Clicca sulla prima colonna, o Mia versione se ritieni che le tue modifiche siano corrette. Clicca su Loro versione se ritieni che le loro modifiche siano migliori.  
![conflicts resolved][]  

Una volta che hai selezionato quale versione pensi che sia migliore, clicca su "Applica Risoluzione". Comparirà ancora qualche finestra e sarai quasi pronto per caricare le tue modifiche. Fai ancora qualche modifica. poi clicca 'Carica'. Ti comparirà una finestra che dice:  
![command stack][]  

Nel tuo menù Finestre avrai una Lista Conflitti. Questa finestra visualizza un elenco di conflitti. Nella testata è visualizzato il numero totale di conflitti non risolti. Puoi selezionare o risolvere un conflitto cliccandolo. Questo è utile quando hai molti conflitti da sistemare.  
![one unresolved][]  
Non puoi caricare le tue modifiche finchè questa lista non è vuota.  

Modi per evitare i conflitti
------------------------

### Aggiornare frequentemente

Per minimizzare la possibilità ed il numero di conflitti, è importante caricare con regolarità le proprie modifiche. I conflitti avvengono con più frequenza per chi è abituato a salvare l'area su cui sta lavorando in locale ed aspetta parecchio prima di caricarla sul server. E' meglio scaricare l'area su cui si sta lavorando, modificarla e poi caricarla subito sul server. Più è lungo i'intervallo di tempo tra lo scarico dei dati ed il caricamento delle modifiche, più è probabile che qualcun altro abbia fatto altre modifiche nel frattempo. Se ti trovi ad un Mapathon e stai modificando una strada che può essere modificata anche da altri, carica molto spesso, magari ogni 6 modifiche!  

### Modifica nell'area che hai scaricato

Modificando nella specifica area che hai scaricato minimizza il rischio di conflitti. Assicurati di non fare modifiche fuori dall'area che hai scaricato. Puoi facilmente verificare in JOSM quali aree sono esterne all'area che hai scaricato, perché lo sfondo è costituito da linee diagonali invece che essere di un nero uniforme.  

![edit outside area][]  

Riassunto
--------
Quando modifichi in JOSM, rischi di incappare in conflitti. I conflitti avvengono quando un oggetto viene modificato da più persone contemporaneamente. Capendo cos'è un conflitto e come trattarlo, sarai in grado di assicurare che le modifiche migliori siano salvate in OpenStreetMap.  


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