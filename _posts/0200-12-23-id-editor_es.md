---
layout: doc
title: Editor iD
permalink: /es/beginner/id-editor/
lang: es
category: beginner
---

El Editor iD
=============

> Esta guía se puede descargar como [beginner_id-editor_es.odt](/files/beginner_id-editor_es.odt) o [beginner_id-editor_es.pdf](/files/beginner_id-editor_es.pdf)  
> Revisado 2016-03-30  

- TOC
{:toc}

El editor iD es el editor de OpenStreetMap de facto, basado en navegador. iD es fácil y rápido de utilizar, y permite mapear desde diferentes fuentes de datos como imágenes de satélite y aéreas, GPS, Field Papers o Mapillary.  

Usar el editor iD es una buena manera de realizar cambios pequeños y sencillos que no requieren de las características avanzadas de JOSM (un editor de mapas más avanzado). Este capítulo muestra los conceptos básicos de la edición con iD.  

Comenzando con el Editor iD
----------------------

-	El editor iD requiere una conexión activa a Internet.  
-	Abra su navegador de Internet y vaya a la página web de OpenStreetMap en [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Iniciar Sesión** usando su cuenta de OpenStreetMap  
-	Desplace y amplié el área en el mapa que desea editar. Puede desplazar el mapa manteniendo pulsado el botón izquierdo del ratón y arrastrando el mapa al área deseada.  
-	Haga clic en la flecha pequeña junto a **Editar**. Luego, haga clic en **Editar con iD (editor en el navegador)**.  

![image1][]


Interfaz de usuario de iD
-------------------------
![image2][]

1. **Panel de edición de elementos:** Este panel muestra las etiquetas del objeto que ha sido seleccionado en el mapa.  
	Puede agregar o editar las etiquetas desde este panel.  
2. **Herramientas:** Este panel muestras las herramientas básicas de edición:  
    Dibujar un punto (nodo), *atajo de teclado* **1** ![image3][]{: height="24px"}  
    Dibuja una línea (camino), *atajo de teclado* **2** ![image4][]{: height="24px"}  
    Dibuja una forma (polígono), *atajo de teclado* **3** ![image5][]{: height="24px"}  
    Deshacer, *atajo de teclado* **Ctrl+z** ![image6][]{: height="24px"}  
    Rehacer, *atajo de teclado* **Ctrl+y** ![image7][]{: height="24px"}  
    Guardar cambios, *atajo de teclado* **Ctrl+s** ![image8][]{: height="24px"}  
3. **Panel del mapa:** Este panel muestra varias funciones de configuración:  
    Acercar, *atajo de teclado* **+** ![image9][]{: height="24px"}  
    Alejar, *atajo de teclado* **-** ![image10][]{: height="24px"}  
    Ir a tu ubicación ![image11][]{: height="24px"}  
    Configurar la capa de fondo, *atajo de teclado* **b** ![image12][]{: height="24px"}  
    Datos del mapa, *atajo de teclado* **f** ![Map Data][]{: height="24px"}  
    Abrir el menú de ayuda, *atajo de teclado* **h** ![image13][]{: height="24px"}  
4. **Panel de información:** Este panel muestra información diversa como, la barra de escala y qué usuarios han contribuido en esa área.  

Configurando la capa de fondo
--------------------------------

Haz click en el botón **Configuración del fondo** o utiliza el *atajo de teclado* **b**.![image14][]{: height="24px"}  
![image15][]  
Para cambiar el **nivel de brillo** haz click en alguna de estas cajas, los niveles de brillo son 100%, 75%, 50% y 25% ![image16][]{: height="24px"}  
You also can **change the background layer** based on your desired tile provider (the default is Bing Aerial Imagery).  

You can add your own map tiles by clicking on **Custom**. For example, if you want to **add a Field Paper** [^fieldpaper], click **Custom** then click on the magnifying glass (search) icon to open the following window:-  
![image17][]   
and enter your **FieldPaper snapshot URL**, which will be something like this: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
To **display GPS tracks from your computer** (GPX format), drag and drop the GPX file into iD editor.  
To enable **OpenStreetMap GPS traces** click on the box. In the image below, public GPS traces are shown in various colors, indicating the direction of travel.  
![osm gps traces][]  
If there is [imagery offset](/en/josm/aerial-imagery), you can **correct the imagery offset** by clicking **Fix Alignment**. ![image18][]  

- Click the navigation buttons to move the imagery. Click the reset button to return to the default position. ![image20][]  

Edición básica con iD  
----------------------  

### Añadiendo puntos  

To add a new point, click on the **Point** button. ![image3][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Now, click on a position that you know to mark a location. For example, if you know that there is a hospital in your area, click on the position of the hospital building.  
![image21][]  
- Notice that a new point is added. At the same time, the left panel will change to show a form where you can select attributes for the object. Click **Hospital Grounds** to tag the point as a hospital.  
![image22][]  
- You can use the forms to fill detail information about your point. You can fill hospital name, address, and/or other additional information. Note that each feature will have different options, depending on what tag you choose from the feature panel.  
- If you make a mistake, such as a wrong location, you can move your point to a new location by holding the left mouse button on your point and dragging it. Or, if you want to delete your point, click the left mouse button on the point and then click the button which looks like a trashcan. ![image23][]{: height="24px"}  
Un "punto" creado en el editor iD es en realidad un "nodo" independiente, asociado a un conjunto de "etiquetas".  

### Dibujando líneas  

To add a new line, click on the **Line** button. ![image4][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Find a road that hasn’t been drawn on the map and trace it. Click once on a point where the road segment begins, move your mouse, and click to add additional points. Double-click to end the drawing process. Notice the panel on the left.  
![image24][]  
- Just as with a point, select the appropriate tags for your line.  
- You can drag points from the line by clicking your left mouse button on a point and dragging it.  
- You also can move the whole line by selecting it, and choosing the **Move tool**. Then drag the line to a new position. ![image30][]{: height="24px"}  
- When you click your left mouse button on an individual point (node) on the line, you will see these tools:  
- Delete point from line. ![image23][]{: height="24px"}  
- Disconnect point from line. ![image26][]{: height="24px"}  
- Split a line into two lines from the point you’ve selected. ![image27][]{: height="24px"}  
- When you click your left mouse button on a line (but not on a point), you will see these tools:  
-   Delete line. ![image23][]{: height="24px"}  
-   Create a circle from a line (only active if the line is closed) ![image29][]{: height="24px"}  
-   Move line ![image30][]{: height="24px"}  
-   Form a square shape from a line (only active if the line is closed) ![image31][]{: height="24px"}  
-   Reverse line direction (good for rivers & one-way streets) ![image32][]{: height="24px"}  

Una "línea" creada en el editor iD es en realidad una "vía" con "etiquetas" asociadas.

>Una consideración con respecto a la **Eliminación**: En general, debería evitar eliminar mapeos de otras personas si solo necesitan mejoras. Puede borrar sus propios errores, pero debería intentar *corregir* los objetos mapeados de otras personas si es que necesitan cambios. Esto preserva la historia de los elementos en la base de datos de OSM y es respetuoso hacia otros mapeadores. Si realmente cree que algo debería ser eliminado, considere primero consultarlo con el mapeador original, o en alguna de las listas de correo de OSM.

### Dibujando formas (polígonos)

To add a new multi-sided shape, click on the **Area** button. ![image34][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Try to trace a building using the imagery as a guide.  
- You will notice that the color of your shape will change depending on the attributes that you assign to it.  
![image35][]  
- The tools that are available when you select a shape are similar to those when you click on a line.  

Un "polígono" en el editor iD es en realidad una "vía cerrada" con etiquetas asociadas.

Guardando sus cambios
--------------------

When (and if) you want to save your edits to OpenStreetMap, click the **Save** button. The panel on the left will show the upload panel.  
![image36][]  

- Enter a comment about your edits and click **Save**.  

> If you have edited the same feature (point, way or area) at the same time as another person was editing it, you will receive a warning that your edits cannot be uploaded until you have resolved the **conflicts** - choose whose edits to accept & upload your changes. *Resolving conflicts often involves accepting the other persons edits, in which case you will probably wish to return to the feature in question and edit again (**this time save soon after the edit to try to avoid a conflict again!**).*

Información adicional y etiquetas personalizadas
---------------------------------------

When you are editing an object, you will see a strip of icons at the bottom of the attribute panel. You can add additional information by clicking these icons:

- Add elevation ![image37][]{: height="24px"}  
- Add notes ![image38][]{: height="24px"}  
- Add contacts / phone number ![image39][]{: height="24px"}  
- Add source tag ![image40][]{: height="24px"}  
- Add website ![image41][]{: height="24px"}  
- Add accessibility information ![image42][]{: height="24px"}  
- Add Wikipedia link ![image43][]{: height="24px"}  

Or, you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- This will show all the tags attached to the feature.  
![image45][]  
- Click the plus sign (+) to add keys and values or click the trash icon to delete tags.

iD versus JOSM
---------------  

**iD is good for...**

- Cuando está haciendo ediciones simples  
- When you have fast Internet to load the imagery and save the edits  
- When you want to be sure to follow a consistent and simple tagging scheme  
- When you are restricted from installing a program on the computer you are using

**JOSM is better...**

- When you are adding many buildings (See buildings_tool plugin)
- When you are editing many polygons or lines that already exist
- When you are on an unreliable Internet connection or offline
- When you are using a specific tagging scheme (or custom presets)

[^fieldpaper]: There is a [section of LearnOSM](/en/mobile-mapping/field-papers/) giving more information about Field Papers.




[image1]: /images/beginner/id-editor_image1.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png