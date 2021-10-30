---
layout: doc
title: Relaciones JOSM
permalink: /es/josm/josm-relations/
lang: es
category: josm
---

Relaciones
==========

> Revisado 2017-06-06  

En la [Guía para principiantes](/es/beginner) explicamos que hay tres tipos de objetos que se pueden dibujar en OpenStreetMap: puntos (nodos), líneas (vías) y polígonos (vías cerradas). Las líneas contienen numerosos puntos, y la propia línea lleva los atributos que definen lo que representa. Los polígonos son lo mismo que las líneas, excepto que la línea debe terminar donde comienza para formar una forma.  

De hecho, le mentimos, porque existe otro tipo de objeto en OpenStreetMap, llamado relaciones. De la misma manera que una línea se compone de otras
puntos, una relación contiene un grupo de otros objetos, ya sean puntos, líneas o polígonos. Si quiere avanzar en sus habilidades de edición, es importante que entienda y sepa cómo editar correctamente las relaciones.  

Por ejemplo, imagine que quiere mapear un edificio que tiene patios en el centro. Tendría que dibujar un polígono alrededor del exterior del edificio, y querría otros polígonos alrededor de los patios para indicar que no forman parte del edificio. Este es un ejemplo de relación. La relación contendría varios polígonos - y los atributos del edificio se adjuntarían a la relación, no a los polígonos.  

![An example of a multipolygon][]

Las relaciones se utilizan para representar cualquier cosa que requiera una colección de objetos para su definición. Otros ejemplos son las rutas de autobús (una colección de líneas), los objetos largos y complejos (ríos o carreteras), o múltiples polígonos que forman parte de una ubicación (como los edificios de una universidad).  

There are mainly four types of relations you will encounter in OSM: Multipolygons, Routes, Boundaries, and Restrictions (such as, no left turns).  In this section we will cover Multipolygons and Routes.  

Crear Relaciones Multipolígono
-------------------------------

Let's see how to create a multipolygon relation like the one shown above.  

- First, draw your shapes. In this case we will draw three polygons, an outer rectangle, and two smaller rectangles.

![Multipolygon ways][]

- Select all of the polygons. Remember you can select multiple objects by holding SHIFT and clicking on each.  
- Choose *Tools->Create multipolygon* from the menu.  
- The tags window now contains the new multipolygon.

![New mp object][]

- Clic en el botón editar.  

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

Relaciones de Ruta
----------------

Relations are also very useful for representing long routes. For example, a bus or bicycle route follows various road segments. To define such a route, we can create a relation which contains all of the road segments that are part of the route. Additional features, such as bus stops can also be members of a route relation.  

![Route relation][]

Let's see how to create a relation for a bus route in JOSM:  

- First, select all of the ways which the route runs along. You may need to split some streets into separate segments if only part of them belong to the relation. You can do this using the "Split Way" tool.  
- When all the segments are selected, go to *Presets->Transport->Public Transport->Public Transport Route (Bus)*.  

![Public transport preset][]

- A new window pops up where you can enter information which applies to the route as a whole.

![New route relation][]

It is important to select the specific route type from the dropdown menu at the top. For bus routes two options are available, bus and trolleybus. Typically you would also enter name, reference number, from and to.

- Click "New Relation." You will see the relation window pop up, just as when you create a multipolygon.  

![Bus route relation][]

- Notice that there are already tags which define the relation as a route. Instead of *type=multipolygon*, we have *type=route*. We also have a tag defining it as a bus route, as opposed to another type of route.  
- You may now think, what should the **role** of the members be? Well, in the case of a route, we don't need to define the role of the members. By leaving the role blank the software knows that they are simply part of the route. We could also define the role of each segment as **route**, but it is not necessary.  
- Click OK and your route relation will be complete!  

> If you want a list of all the relations on the map, you can open the relations panel by clicking on this button on the left: ![relation panel button][]{: height="30px"}. This will open a panel where you can select, edit, and create new relations.  

Resumen
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
[New route relation]: /images/josm/new-route-relation.png
[Route relation]: /images/josm/route-relation.png
[Public transport preset]: /images/josm/public-transport-preset.png
[Bus route relation]: /images/josm/bus-route-relation.png
[relation panel button]: /images/josm/relation-panel-button.png