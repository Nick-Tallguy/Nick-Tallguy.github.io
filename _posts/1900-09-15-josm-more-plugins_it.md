---
layout: doc
title: JOSM Building Tools & Utilsplugin2 plugins
permalink: /it/josm/josm-more-plugins/
lang: it
category: josm
---

JOSM Building Tools & Utilsplugin2 plugins
============

> This guide may be downloaded as [josm-more-plugins_en.odt](/files/josm-more-plugins_en.odt) or [josm-more-plugins_en.pdf](/files/josm-more-plugins_en.pdf)  
> Reviewed 2016-09-12  

I plugin **buildings_tools** e **utilsplugin2** aggiungono delle belle funzionalità aggiuntive a JOSM. In questa sezione vedremo da vicino quali funzionalità forniscono.  

Il Plugin **Building Tool**
--------------------------

Se non l'hai ancora fatto, installa questo plugin seguendo le istruzioni in [Plugins JOSM](/it/josm/josm-plugins).  

![Buildings tools plugin][]

Il plugin Building Tools è molto utile per digitalizzare edifici. Ti permette di disegnare un lato di un edificio rettangolare per poi estenderne facilmente la forma. Se stai digitalizzando parecchi edifici, questo plugin ti risparmierà diversi click, e di conseguenza risparmierai tempo.  

Una volta che hai installato il plugin, vedrai un nuovo bottone sul lato sinistro di JOSM, che dovrebbe somigliare a questo: ![Buildings tools button][]{: height="29px"}

Fai partire JOSM e scarica un'area dove vuoi disegnare degli edifici.  

* Seleziona il building tool, poi clicca sulla mappa per disegnare una linea.  

![Draw edge][]

* Poi estendi il mouse per disegnare e clicca nuovamente per disegnare un rettangolo.  

![Extend building][]

* Questo non solo creerà un rettangolo con soli due click, ma applica automaticamente alla forma disegnata il tag building=yes.  

### Complex Buildings

Puoi anche creare edifici dalla forma complessa, disegnando prima diversi edifici che si sovrappongono, per poi unirli insieme.  

* Disegna due edifici che si sovrappongono in maniera tale che formino una L.  
* Seleziona entrambi gli edifici (mantieni premuto il tasto SHIFT per selezionare più di un oggetto).  
* Vai a Strumenti -> Unisci aree sovrapposte o premi SHIFT+J sulla tua tastiera.  

![Merge buildings][]

### Modificare le impostazioni

Inoltre, puoi anche alterare le impostazioni predefinite del plugin.  

* Vai su Dati -> Imposta dimensioni degli edifici. ![Set buildings size][]{: height="39px"}  

* Se stai creando molti edifici simili nelle dimensioni, puoi specificare le dimensioni di lunghezza e larghezza degli edifici, come ad esempio 6 x 10 metri (l'unità di misura è in metri).  

![Set buildings size dialog][]

* Impostando le dimensioni dovrai cliccare solo due volte per creare edifici della dimensione esatta.  

Infine, puoi cliccare sul bottone Avanzate (sempre in Dati -> Impostazioni avanzate degli edifici) se vuoi aggiungere ulteriori tag che saranno aggiunti automaticamente ad ogni edificio.  

![Buildings advanced][]


Utilsplugin2
-------------

* If you haven't already, install this plugin following the instructions in [JOSM Plugins](/en/josm/josm-plugins).  

![Utilsplugin2 plugin][]

After you have installed the plugin and restarted JOSM, you will have a new menu at the top named "More Tools."  

![More tools menu][]

Create a new layer and experiment with some of the new tools. Here we describe some of the most useful new tools:  

1. **Add Nodes at Intersections:**  This tool is very helpful for adding missing nodes in intersections of selected ways.  It is good practice that roads should always have common nodes where they intersect.  

    ![Nodes interesection][]

2. **Copy Tags from Previous Selection:**  This function makes copying tags easier.  If you want to create many objects with the same tags, first draw the objects.  Then add the tags to one object.  Click on another object and press Shift + R to copy the tags from the previously selected object.  You can do this for all objects that you want to tag.  Remember that the tags will be copied from the previously selected object, so if you click on an untagged object and then another untagged object, you will not be able to copy any tags.  

    ![Copy tags][]

3. **Add Source Tag:** This tool simplifies adding a source tag. It remembers the source that was specified last and adds it as remembered source tag to your objects.   You can insert the source with just one click.  

4. **Replace Geometry:** This tool is great if you want to redraw a poorly shaped object, but want to keep the history, attributes and ID number of that object.  For example, if you come across a building that is complicated and drawn in a poor fashion, then instead of painfully changing each node, you can draw the object again, select the old and new objects, and select ¨Replace Geometry¨ to transfer all the information over.  

    ![Replace geometry][]


### More Selection Tools

**Utilsplugin2** also provides more tools on the "Selection" menu. Try experimenting with them.  

![Selection menu][]

One of our favorite selection tools is **Unselect Nodes:** This tool deselects all nodes. This can be useful if you draw a box to select many objects, but you do not want to select the nodes contained within all the lines and shapes.  

![Unselect nodes][]

Buona fortuna!  


[Buildings tools plugin]: /images/josm/buildings_tools-plugin.png
[Buildings tools button]: /images/josm/buildings_tools-button.png
[Draw edge]: /images/josm/draw-edge.png
[Extend building]: /images/josm/extend-building.png
[Merge buildings]: /images/josm/merge-buildings.png
[Set buildings size]: /images/josm/set-buildings-size.png
[Set buildings size dialog]: /images/josm/set-buildings-size-dialog.png
[Buildings advanced]: /images/josm/buildings-advanced.png
[Utilsplugin2 plugin]: /images/josm/utilsplugin2-plugin.png
[More tools menu]: /images/josm/more-tools-menu.png
[Nodes interesection]: /images/josm/utilsplugin2-nodes-intersection.png
[Copy tags]: /images/josm/utilsplugin2-copy-tags.png
[Replace geometry]: /images/josm/utilsplugin2-replace-geometry.png
[Selection menu]: /images/josm/selection-menu.png
[Unselect nodes]: /images/josm/utilsplugin2-unselect-nodes.png

