---
layout: doc
title: Trazado de caminos, edificios, cuerpos de agua y uso de suelo 
permalink: /es/coordination/remote-tracing/
lang: es
category: coordination
---

Trazando caminos, edificios, cuerpos de agua y uso del suelo
===========================================


Following on from the [Remote, Armchair & Mapathon Section of LearnOSM](/en/coordination/remote/) section, which you will need if you have no experience of mapping for HOT.  


Índice de sección
=====

[Roads and Highways, including paths & Tracks](/en/coordination/remote-tracing/#roads)  
[The Highway network](/en/coordination/remote-tracing/#the-highway-network)  
[Residential Landuse boundary](/en/coordination/remote-tracing/#residential-boundaries)  
[Buildings, walls, fences, compounds and barriers](/en/coordination/remote-tracing/#buildings-walls-compounds-barriers)  


## Caminos

Cualquier tipo de caminos, desde rutas a trazas y senderos, están etiquetadas "carretera" en OpenStreetMap. Es importante que las carreteras estén correctamente agregadas a la base de datos (OpenStreetMap data) por cuanto son utilizadas de tantos modos:  

Software de navegacion tales como los artefactos Garmin y aplicaciones en smartphones tales como Osmand, pueden proporcionar información de ruteo para grandes distancias, si se les carga la información correcta. Como dependen del gps dentro del artefacto para localizar la posición en relación  al mapa base cargado dentro de ellos, es importante que las carreteras estén realmente dentro de aproximadamente 15 metros del lugar correcto, o no funcionarán!  
-  Planning the route for a large 'aid' lorry is much easier if you can differentiate between a path & a trunk road, with all the stages in between.  
-  Knowing whether a road surface is asphalt or soft mud will make a difference to your route planning.
-  When attempting to plot the spread of a disease, a victim's description of "near the crossroads" is significant if you can see the crossroads on the map.

### <a name="highways-howto"></a> Highways - How to map

![iD 3][]

1. Cuando esté trazando carreteras, asegúrese de amplificar lo suficiente. Como guía de inicio, fije la escala a aproximadamente 20 metros, y trace la carretera de modo que su trazado tenga suficientes puntos en él para mantenerlo sobre, o muy próximo a, el camino que puede ver en su imagen satelital. En la captura de pantalla arriba, puede ver que he trazado el camino que me han pasado, abajo, a través de los árboles y abajo, hasta otro edificio donde aparentemente se detiene. Donde los árboles están próximos al camino, y la imagen es obtenida por una cámara aérea, el camino parece angostarse mientras atraviesa los árboles. Sin embargo, es solo el efecto de los árboles oscureciendo la vista, siendo el camino del mismo ancho todo a lo largo.  
2.  I've also traced another section of road, making sure that it is connected at each end - iD shows this with a slightly larger and darker coloured dot at the junction. It is important that the roads join and 'share a common node' so that routing software will provide the correct guidance.  
3.  The road is tagged as 'highway=residential', and I've also added 'surface=unpaved'.  
4.  For a full description of tagging within Africa, refer to the wiki page [Highway Tag Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa).  

>Hay un alto riesgo de sufrir conflictos que le impedirán grabar su trabajo cuando esté trabajando sobre una carretera, lo que se extiende a otras cuadrículas donde mapeadores también estarán editando. Es aconsejable grabar todos sus cambios antes de editar la carretera, y luego grabar sus cambios a intervalos muy frecuentes, tales como cada 6 nodos agregados.


### La red de carreteras

![JOSM 4][]

This screenshot shows JOSM with the HOT-OSM-Validate style in use [JOSM styles](https://josm.openstreetmap.de/wiki/Styles). Although designed to assist validators, it can be very useful when carrying out initial mapping. Anything that is coloured red has some kind of problem - the remaining colours are explained in the key in this screenshot.  

1. Esta sección de carretera está coloreada en rojo porque la etiqueta ha sido tipeada incorrectamente y una letra mayúscula ha sido utilizada. La etiqueta debiera ser highway=unclassified, lo cual habría dado por resultado un color marrón claro en la captura de pantalla.  
2. Esto es parte de la red de carreteras para el pueblo al sudoeste. Esta red conecta con el resto de la red de carreteras de Africa.  
3. Estas secciones de carretera están "aisladas". No se conectan con el pueblo o con otras carreteras de ningún modo. En su formato actual no son muy útiles y se requerirá de futuras investigaciones para determinar si pueden ser conectadas al resto de la red, o si se debiera considerar borrarlas.  


**¿Carretera o flujo?**

![iD 5][]

There are no style views available to assist in using iD, but in this screenshot you can see an area of vegetation and ground. The ground appears to be silt or perhaps even an area of marshland without the water present. The dotted black and white lines represent paths in iD & I have temporarily highlighted & then deleted one of them to show the terrain.  

1. highway=path (Carretera=sendero) o stream bed (lecho fluvial). Probablemente ambos! Las carreteras de todos los tamaños frecuentemente siguen un valle fluvial y en mucho casos puede que sigan el curso de un río o arroyo de temporada. En este caso aparenta ser un área plana inundada que al momento en que la imagen satelital fue tomada estaba seca, y siendo utilizada como un sendero. Esto debiera ser etiquetado como:  
highway=path  
seasonal=yes  
surface=unpaved  
2. El sendero puede ser visto avanzando dentro de la banda de árboles y matorrales, pero no es posible ver su curso exacto a través de los árboles. En estas circunstancias puede tener la certeza de que el sendero, traza o carretera está presente. Solo está oscurecido por los árboles. He mapeado esto continuando el sendero que estaba trazando donde puede ser visto claramente en el suelo, como una línea recta a través de los árboles hasta la visible y clara continuación del otro lado. Use esto con cautela, pero en esta instancia es obvio que el sendero está presente y su senda es probablemente muy próxima  a la línea que he dibujado. Este es un uso más extremo - es más usual estimar la senda de una carretera por solo unos pocos metros donde tu visión de ella está oscurecida por uno o dos árboles.  
3.  Having deleted the path so that I could see the ground clearly, I can easily replace it by using the 'undo' feature of iD.  

***


## Límites residenciales

Residential boundaries are used for many purposes in OpenStreetMap.  

+  The simplest use is to be able to see residential areas at higher zoom levels when viewing [OpenStreetMap.org](http://www.openstreetmap.org), where they are coloured pale grey in the standard view.  
+  Where there is not time to map in detail from the outset, the project within the Task Manager will frequently require something similar to this:  

>    Map essential infrastructures such as schools, place of worship and markets.  
>    Trace outbound of settlements and cemeteries.  
>    We will trace roads later in an other Task.   
+  landuse=residential can also be used for statistical purposes, and accurate mapping then becomes important  

*  If you can establish how many people normally reside in each dwelling, and  
 how many dwellings are normally built in a given area, then  
 once you have worked out the area covered by a landuse=residential boundary,  
 you can establish a very approximate population for that area.  
 Estimating the number of aid workers & quantity of medicine now becomes more realistic.
*  Place names & boundaries are often imported from other sources, but the location is not always accurate. Once you have a residential boundary the person doing the import can see where the place name should probably be.


### <a name="residential-howto"></a> landuse=residential - how to map


** En un mundo ideal **  

*Stage 1* - A decision is taken to map an area, and a mapper quickly puts a very rough landuse=residential boundary around an area,  
*Stage 2* - The Task Manager project is created & the individual mappers refine the boundary so that it is closer to the buildings etc.  

![JOSM residential][]

![iD residential][]
 
The iD & JOSM screenshots above show a correctly mapped landuse=residential boundary.  

1.  The boundary needs to be closed, so that the start point of the line (way), joins to the end point.  
2. Los segmentos y nodos de los límites no deben unirse a carreteras, cursos de agua, edificios o cualquier otro elemento. En esencia no debe compartir ningún nodo. Pero pueden cruzarse.  
3.  The boundary should be fairly close to the buildings & any gardens or yards that form part of the grouping.  


In the screenshot below, my square contains part of a landuse=residential boundary. The person who completed the square to my right has continued a landuse=residential boundary through their square, and has then correctly 'handed it over' to me by placing the boundary just within my square for me to establish exactly where it should be in my square.  


![JOSM residential 1][]

I will add extra nodes to the boundary, extending it horizontally across my square so that it goes around the buildings , and at the bottom I will continue the boundary as a straight line just inside the square below mine so that the person selecting the square below mine will be able to extend it around any buildings they may have.  

This is a difficult operation - you can see only a small part of the whole town / city / village and although you will do your best with the landuse=residential boundary it is extremely likely that a validator who has an overview of several squares will need to tidy up the boundary as best they can after the individual squares have been mapped.  

> There is a high risk of suffering from conflicts when working on a landuse=residential boundary, as it extends into other squares where mappers will also be editing it. It is advisable to save all your changes before editing the boundary, and then save your changes at very frequent intervals, such as after adding each 6 nodes.

***


## Buildings walls compounds barriers  

Buildings are added to the map data for a number of reasons;  

*  The density of buildings in an area gives a very good indication of the number of people residing there.  
*  The size, shape & location of a building can help to identify it as a potential evacuation or treatment site.  
*  The size, shape, and relative location of buildings can be used to identify particular locations such as wells, aid stations, schools, etc..  
*  There is the potential to estimate the degree of damage sustained by a building, which can be used to estimate the potential casualties & level of support that may be required - this is currently (January 2015) under discussion for future use.  


### <a name="buildings-howto"></a> Buildings - How to Map

La vasta mayoría de los edificios que requieren de mapeo para HOT son basados en formas rectangulares con esquinas cuadradas o son redondos. Si un edificio aparente tener una mezcla de ambos, es más probable que estés viendo un edificio cuyo contorno esté oscurecido por una sombra, reflejo, follaje o similar.  

Para algunas tareas donde solo el bordeado de un area es requerida, la tarea puede especificar que los edificios sean mapeados como nodos, pero estas situaciones son ahora raras.  


#### building=yes

A menos que las instrucciones del proyecto indiquen lo contrario, los edificios deben ser etiquetados como **building=yes***  

* A menudo puede haber demora entre que la imagen satelital es tomada, y el mapeo llevado a cabo. Es posible que el edificio que está mirando que aparenta no tener techo, haya sido ahora completado y habitado. También es posible que esté mirando un edificio con varios pisos, estando los inferiores habitados, y los superiores deshabitados.  

> **Mapping buildings using iD** - when you are using the area tool within iD to create the basic shape, you must remember to then change the tag to building=yes. The default setting will merely tag the shape as area=yes. If you're tracing is of a building with square corners, please take the time to square your traced item (highlight it and shortcut 'q').  

*  JOSM is far faster for mapping buildings - [JOSM building tools is explained here.](/en/josm/josm-more-plugins/#the-buildings-tools-plugin)  

![Buildings iD][]

Esta captura de pantalla muestra parte de una cuadrícula siendo editada. Note la escala en la parte inferior de 15 metros - respecto de la figura a la que debe apuntar cuando edite características. Cuando haga la traza, debe apuntar a ubicar el edificio donde se une con el suelo.  

1. **Edificios redondos.** En este caso son bastante bajos y su sombra es difícil de ver. Si estuviese parado entre ellos, parecerían domos. He mapeado y etiquetado solo uno de ellos hasta ahora **building=yes**. Para agregar rápidamente los restantes edificios en JOSM o iD, seleccionaría este (resáltalo), atajo de teclado *Ctrl+c", muevo mi teclado al centro de otro edificio redondo del mismo tamaño, atajo de teclado *Ctrl+v*. Cuando todos los edificios redondos de este tamaño hayan sido añadidos en mi cuadrícula, pego un edificio sobre un edificio redondo de distinto tamaño, JOSM - uso *Alt+Ctrl* & mouse para redimensionarlo a su tamaño correcto. Cópielo y luego péguelo sobre todos los edificios redondos del mismo tamaño.  
2.** Edificios rectangulares** Estos edificios en particular están proyectando una sombra notoria. La sombra puede ayudar a identificar la forma de un edificio que está parcialmente oscurecido por otro elemento. Encontrará que muchos edificios no son tan simples, y tienen una galería o forma de "L". Debes trazar la verdadera forma del edificio ya que esto permitirá identificarlo cuando nombres y otra información es agregada como parte del proceso de encuestas.  
3. **Barriers-walls (o hedges) de un compuesto.** Habiendo examinado la imagen ampliando y reduciéndola hasta que estoy satisfecho de que por la forma del objeto (usa también su sombre para identificarlo), creo que esto es una pared, y lo he etiquetado **barrier=wall**. Alternativas incluyen barrier=fence y barrier=hedges  
4. He unido la barrier=wall (barrera=pared) al building=yes (edificio=si) en la esquina del edificio.  


### Imagen satelital distorsionando la forma del edificio.


![Buildings_2][]

1. La imagen satelital arriba, es de un edificio, pero el satélite no está directamente arriba, por lo que el edificio se ve distorsionado y el final de una pared es visible en la imagen. Debido a este ángulo, el techo no parece rectangular. El sol está prácticamente encima del edificio, por lo que la sombra del edificio indicada por las flechas de la figura 1 confirma que el edificio es rectangular.  

2. Para mapear el edificio, crear un rectángulo que se extienda desde las flechas del punto 2, hasta donde estima que el edificio termina, indicado por el punto 3 en esta imagen.  


***


Más para continuar - vea los enlaces debajo para más guía.


# Continuar leyendo

-  [West African HOT Mapping Tips by user Bgirardot](http://wiki.openstreetmap.org/wiki/User:Bgirardot/Typical_Road_and_Residential_Task)  
-  [OSM wiki entry concerning validating](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data)  
-  [Highway Tag Africa - the preferred reference for highway tagging in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa)  
-  [Short Tutorial in French for remote mapping](http://blog.cartong.org/2014/07/24/tuto-digitaliser-sous-openstreetmap-avec-le-tasking-manager-et-josm-premiers-pas/)

[iD 3]: /images/coordination/iD_3.png
[JOSM 4]: /images/coordination/JOSM_4.png
[iD 5]: /images/coordination/iD_5.png
[iD residential]: /images/coordination/iD_residential.png
[JOSM residential]: /images/coordination/JOSM_residential.png
[JOSM residential 1]: /images/coordination/JOSM_residential_1.png
[Buildings iD]: /images/coordination/Buildings_iD.png
[Buildings_2]: /images/coordination/Buildings_2.png