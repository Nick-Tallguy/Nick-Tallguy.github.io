---
layout: doc
title: Relazioni in JOSM
permalink: /en/josm/josm-relations/
lang: it
category: josm
---

Relazioni
==========

> Questa guida può essere scaricata come [josm_relations_it.odt](/files/josm_relations_it.odt) oppure [josm_relations_it.pdf](/files/josm_relations_it.pdf)  
> Revisionato il 2015-09-20  

Nella [Guida per Principianti](/it/beginner) abbiamo spiegato che ci sono tre tipi di oggetti che possono essere disegnati in OpenStreetMap - punti (nodi), linee (way) e poligoni (aree). Le linee contengono numerosi punti e la linea stessa contiene gli attributi che definiscono cosa rappresenta.  I poligoni sono come le linee, con la differenza che la linea deve terminare dove è cominciata in modo da formare un'area.  

In realtà ti abbiamo mentito, perchè c'è un altro tipo di oggetto in OpenStreetMap, chiamato relazione. Nello stesso modo in cui una linea consiste di vari
punti, una relazione contiene un gruppo di altri oggetti, siano essi punti, linee o poligoni.  Se stai cercando di migliorare le tue capacità di editing, allora è importante comprendere e conoscere come modificare le relazioni.  

Per esempio immagina di voler mappare un edificio che ha dei cortili al centro.  Dovresti disegnare un poligono intorno all'edificio e degli altri intorno ai cortili per far capire che questi non fanno parte dell'edificio.  Questo è un esempio di relazione.  La relazione conterrà diversi poligoni e gli attributi dell'edificio saranno inseriti nella relazione, non nei poligoni.  

![An example of a multipolygon][]

Le relazioni sono utilizzate per rappresentare qualsiasi cosa che necessiti di un insieme di oggetti per essere definito.  Altri esempi sono i percorsi degli autobus (un insieme di way), oggetti lunghi e complessi (fiumi o strade) o vari poligoni che sono parte di un unico luogo (come un complesso universitario).  

Ci sono principalmente quattro tipi di relazioni in OSM: Multipolygons, Routes, Boundaries, and Restrictions (ad esempio, vietata la svolta a sinistra). In questo paragrafo parleremo di Multipolygons e Routes.  

Creare relazioni Multipolygon
-------------------------------

Vediamo come creare una relazione multipolygon come quella mostrata sopra.  

- Per prima cosa, disegna le aree. In questo esempio disegneremo tre poligoni: uno rettangolo esterno e due più piccoli.

![Multipolygon ways][]

- Seleziona tutti i poligoni. Ricordati che puoi selezionare più di un oggetto tenendo premuto il tasto SHIFT e cliccando su ognuno.  
- Choose *Tools->Create multipolygon* from the menu.  
- The tags window now contains the new multipolygon.

![New mp object][]

- Click on the edit button.  

- You should now see the relation editor window. This is a little bit complex because now you are adding tags to a collection of ways.  

![Building relation][]

- Observe that at the top of the panel are the tags for the relation. These tags work the same way as tags always work.  
- At the bottom is a list of the members of the relation. This relation has three members - that is, the three ways that are part of our relation.  
- Notice that we already have one tag defined for us, *type=multipolygon*. We need to add one more tag that defines the kind of object which the relation represents. We must add a tag that says *building=yes*.  
- Click in the tag box and add this tag.  

![Building yes][]

- The **roles** have already been properly assigned to the ways. Each member of a relation has a role, which indicates what that member's purpose is. In this case, the role of the outside polygon must be defined as **outer** and the role of the two inner polygons must be defined as **inner**. These are the roles that are available for members of a multipolygon.  

- Click OK and your multipolygon relation is complete!  

![New multipolygon][]

When you create a multipolygon like this it will be rendered on the map like so:  

![Multipolygon in Mapnik][]

Multipolygons can be used for any complex object that requires inner and outer polygons, like a building or a river with patches of land inside it. Detailed multipolygon information can be found on the [OSM Wiki](http://wiki.openstreetmap.org/wiki/Relation:multipolygon).  

Relazioni di tipo Route
----------------

Relations are also very useful for representing long routes. For example, a bus or bicycle route follows various road segments. To define such a route, we can create a relation which contains all of the road segments that are part of the route. Additional features, such as bus stops can also be members of a route relation.  

![Route relation][]

Let's see how to create a relation for a bus route in JOSM:  

- First, select all of the ways which the route runs along. You may need to split some streets into separate segments if only part of them belong to the relation. You can do this using the "Split Way" tool.  
- When all the segments are selected, go to *Presets->Transport->Public Transport->Public transport route*.  

![Public transport preset][]

- Next to Route type, select "bus."  
- Click "New Relation." You will see the relation window pop up, just as when you create a multipolygon.  

![Bus route relation][]

- Notice that there are already tags which define the relation as a route. Instead of *type=multipolygon*, we have *type=route*. We also have a tag defining it as a bus route, as opposed to another type of route.  
- You may now think, what should the **role** of the members be? Well, in the case of a route, we don't need to define the role of the members. By leaving the role blank the software knows that they are simply part of the route. We could also define the role of each segment as **route**, but it is not necessary.  
- Click OK and your route relation will be complete!  

> If you want a list of all the relations on the map, you can open the relations panel by clicking on this button on the left: ![relation panel button][]{: height="30px"}. This will open a panel where you can select, edit, and create new relations.  

Riassunto
-------

Relations can be difficult to understand and do not need to be used often, but they are necessary to know about. Every so often you may realize that you need a relation to map something correctly, and you can use this knowledge, and find more information on the OSM Wiki, to help you map relations correctly.


[Multipolygon ways]: /images/josm/multipolygon-ways.png
[Building relation]: /images/josm/building-relation.png
[New relation]: /images/josm/new-relation.png
[Building yes]: /images/josm/building-yes.png
[Outer or inner role]: /images/josm/outer-inner.png
[New multipolygon]: /images/josm/new-multipolygon.png
[New mp object]: /images/josm/new-mp.png
[Multipolygon in mapnik]: /images/josm/multipolygon-mapnik.png
[An example of a multipolygon]: /images/josm/multipolygon-demo.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png
