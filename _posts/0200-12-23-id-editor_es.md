---
layout: doc
title: Editor iD
permalink: /es/beginner/id-editor/
lang: es
category: beginner
---

El Editor iD
=============

> Reviewed 2019-06-10

Starting to map with a Tasking Manager for HOT or MissingMaps etc? See our [HOT-tips section](/en/hot-tips/).  

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
    Save changes, *shortcut keys* **Ctrl+s** ![image8][]{: height="32px"}  
3. **Panel del mapa:** Este panel muestra varias funciones de configuración:  
    Acercar, *atajo de teclado* **+** ![image9][]{: height="24px"}  
    Alejar, *atajo de teclado* **-** ![image10][]{: height="24px"}  
    Ir a tu ubicación ![image11][]{: height="24px"}  
    Configurar la capa de fondo, *atajo de teclado* **b** ![image12][]{: height="24px"}  
    Datos del mapa, *atajo de teclado* **f** ![Map Data][]{: height="24px"}  
    Issues, *shortcut key* **i** ![Issues][]{: height="24px"}  
    Abrir el menú de ayuda, *atajo de teclado* **h** ![image13][]{: height="24px"}  
4. **Panel de información:** Este panel muestra información diversa como, la barra de escala y qué usuarios han contribuido en esa área.  

## Configuring the Background Layer

Haz click en el botón **Configuración del fondo** o utiliza el *atajo de teclado* **b**.![image14][]{: height="24px"}  
![image15][]  
You can **change the background layer** based on your desired tile provider (the default is Bing Aerial Imagery).  

You can add your own map tiles by clicking on **Custom**. For example, if you want to **add a Field Paper** [^fieldpaper], click **Custom** then click on the magnifying glass (search) icon to open the following window:-  
![image17][]   
and enter your **FieldPaper snapshot URL**, which will be something like this: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Para **mostrar las pistas de GPS desde su computadora** (formato GPX), arrastre y suelte el archivo GPX en el editor iD.  
To enable **OpenStreetMap GPS traces** click on the box. In the image below, public GPS traces are shown in various colors, indicating the direction of travel.  
![osm gps traces][]  
To change the **appearance of the imagery** click **Display Options**.  
![DisplayOptions][]  
If there is [imagery offset](/en/josm/aerial-imagery), you can **correct the imagery offset** by clicking **Adjust imagery offset**.  
![image18][]  

- Haga clic en los botones de navegación para mover las imágenes. Haga clic en el botón de reinicio para volver a la posición predeterminada. ![image20][]  

Edición básica con iD  
----------------------  

### Añadiendo puntos  

Para añadir un nuevo punto, haga clic en el botón **Punto**. ! [image3] [] {: height = "24px"}  

El cursor del mouse cambiará a signo más (+). Ahora, haga clic en una posición que conozca para marcar una ubicación. Por ejemplo, si sabe que hay un hospital en su área, haga clic en la posición del edificio del hospital.  
![image21][]  
- Tenga en cuenta que se agrega un nuevo punto. Al mismo tiempo, el panel izquierdo cambiará para mostrar un formulario donde puede seleccionar atributos para el objeto. Haga clic en **Terreno de Hospital** para etiquetar el punto como un hospital.  
![image22][]  
- Puede usar los formularios para completar información detallada sobre su punto. Puede completar el nombre, la dirección y/o otra información adicional del hospital. Tenga en cuenta que cada característica tendrá diferentes opciones, dependiendo de qué etiqueta elija en el panel de funciones.  
- If you make a mistake, such as a wrong location, you can move your point to a new location by holding the left mouse button on your point and dragging it. Or, if you want to delete your point, click the left mouse button on the point, activate the context menu by clicking with the right mouse button and then click the button which looks like a trashcan. ![PointToolDelete][]{: height="24px"}  
Un "punto" creado en el editor iD es en realidad un "nodo" independiente, asociado a un conjunto de "etiquetas".  

### Dibujando líneas  

Para añadir una nueva línea, clic en el botón **Línea**. ![image4][]{: height="24px"}  

- El cursor del mouse cambiará a signo más (+). Busca un camino que no se dibujó en el mapa y hazlo. Haga clic una vez en un punto donde comienza el segmento de carretera, mueva el mouse y haga clic para agregar puntos adicionales. Haga doble clic para finalizar el proceso de dibujo. Observe el panel de la izquierda.  
![image24][]  
- Al igual que con un punto, seleccione las etiquetas apropiadas para su línea.  
- Puede arrastrar puntos desde la línea haciendo clic con el botón izquierdo del mouse en un punto y arrastrándolo.  
- When you click your left mouse button on an individual point (node) on the line and either click on the right mouse button or hit the space bar to activate the context menu, you will see these tools:  
  - Continue line from this point ![PointToolContinue][]{: height="24px"}  
  - Disconnect lines at this point ![PointToolDisconnect][]{: height="24px"}  
  - Split a line into two lines at this point. ![PointToolSplit][]{: height="24px"}  
  - Delete point from line. ![PointToolDelete][]{: height="24px"}  
- Cuando haga clic con el botón izquierdo del ratón en una línea (pero no en un punto), verá estas herramientas:  
  -   Create a circle from a line (only active if the line is closed) ![LineToolCircularize][]{: height="24px"}  
  -   Disconnect line from other objects ![LineToolDisconnect][]{: height="24px"}  
  -   Move line ![LineToolMove][]{: height="24px"}  
  -   Square all corners ![LineToolSquare][]{: height="24px"}  
  -   Reflect the line across its short axis ![LineToolReflectShort][]{: height="24px"}  
  -   Reflect the line across its long axis ![LineToolReflectLong][]{: height="24px"}  
  -   Reverse line direction (good for rivers & one-way streets) ![LineToolReverse][]{: height="24px"}  
  -   Rotate the line around its centre ![LineToolRotate][]{: height="24px"}  
  -   Straighten the line ![LineToolStraighten][]{: height="24px"}  
  -   Delete line. ![LineToolDelete][]{: height="24px"}  

Una "línea" creada en el editor iD es en realidad una "vía" con "etiquetas" asociadas.

>Una consideración con respecto a la **Eliminación**: En general, debería evitar eliminar mapeos de otras personas si solo necesitan mejoras. Puede borrar sus propios errores, pero debería intentar *corregir* los objetos mapeados de otras personas si es que necesitan cambios. Esto preserva la historia de los elementos en la base de datos de OSM y es respetuoso hacia otros mapeadores. Si realmente cree que algo debería ser eliminado, considere primero consultarlo con el mapeador original, o en alguna de las listas de correo de OSM.

### Dibujando formas (polígonos)

To add a new multi-sided shape, click on the **Area** button. ![image34][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Try to trace a building using the imagery as a guide.  
- You will notice that the color of your shape will change depending on the attributes that you assign to it.  
![image35][]  
- The tools that are available when you select a shape and activate the context menu with the right mouse button are similar to those when you click on a line.  

Un "polígono" en el editor iD es en realidad una "vía cerrada" con etiquetas asociadas.

### Dibujando Multipolígonos

Sometimes you have to draw a polygon which does not only have an outer contour but also one or more inner contours. Just think of buildings with inner courtyards or lakes with islands. *Do not draw all these ways in one line* so that the inner contours suspend from the outer contour. Rather draw these contours separate, attach tags to the outer contour only, select all contours and hit **c** in order to combine them into what is called a multipolygon.

![crear multipolígono][]

When you select any of the contours of the newly created multipolygon you can see on the left to which multipolygons it belongs

![parte de multipolígono][]

## Issues

The editor performs a number of checks as soon as you edit something. If it thinks that what you did might cause problems it notifies you in the issues tab. Whenever the issues icon on the right carries either a yellow (for warnings) or red (for errors) dot you should open the tab and see what it reports. This information is also displayed in the object feature tab on the left if the relevant object is selected. You are also warned that there are unresolved issues when you upload your data. 

![Issue][] ![Error][]

The lower part of the issues tab show the available rules and allows you to disable them individually though this is not recommended.

Guardando sus cambios
--------------------

Cuando (y si) desea guardar sus modificaciones en OpenStreetMap, clic en el botón **Guardar**. El panel de la izquierda mostrará el panel de carga.  
![image36][]  

- Agregar un comentario acerca de sus modificaciones y haz clic en **Guardar**.  

Si ha editado la misma función (punto, forma o área) al mismo tiempo que otra persona lo estaba editando, recibirá una advertencia de que sus ediciones no se pueden cargar hasta que haya resuelto los **conflictos**: elija cuáles ediciones aceptar y así subirlas. *La resolución de conflictos a menudo implica aceptar las ediciones de otras personas, en cuyo caso es probable que desee volver a la función en cuestión y editar nuevamente (**esta vez, guardar después de la edición para intentar evitar nuevamente un conflicto**).*

Información adicional y etiquetas personalizadas
---------------------------------------

When you are editing an object, you will see an "Add field" menu at the bottom of the attribute panel. You can add various additional information by selecting one of the entries (layer, elevation, wikipedia etc.).  

![AdditionalTags][]

Or you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- Esto mostrará todas las etiquetas relacionadas con este elemento.  
![image45][]  
- Clic en el signo (+) para añadir claves o valores o simplemente en el ícono de la papelera para eliminar etiquetas.

Otros tutoriales
------------------

[Nuestra página de recursos externo](/en/resources/#iD) suministra enlaces a un número de video tutoriales desde varias fuentes.

iD versus JOSM
---------------  

**iD es bueno para...**

- Cuando está haciendo ediciones simples  
- Cuando dispones de una internet rápida para cargar las imágenes y guardar sus modificaciones  
- Cuando quiere asegurarse de seguir un esquema de etiquetado simple y consistente  
- Cuando tiene prohibido instalar un programa en la computadora que está usando

**JOSM es mejor...**

- Cuando está agregando varias construcciones (Ver complemento buildings_tool)
- Cuando está modificando varios polígonos o líneas que ya existen.
- Cuando está en una conexión a Internet no confiable o sin conexión
- Cuando está utilizando un esquema de etiquetado específico (o ajustes predeterminados personalizados)

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
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[DisplayOptions]: /images/beginner/id-editor_display-options.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image24]: /images/beginner/id-editor_image24.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[Issue]: /images/beginner/id-editor_issue.png
[Error]: /images/beginner/id-editor_error.png
[image36]: /images/beginner/id-editor_image36.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[crear multipolígono]: /images/beginner/id-editor_create_multipolygon.png
[parte del multipolígono]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png