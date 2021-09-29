---
layout: doc
title: El Proceso de Edición JOSM
permalink: /es/josm/more-about-josm/
lang: es
category: josm
---

El Proceso de Edición JOSM
========================


En la sección anterior usted instaló JOSM y comenzó a dibujar sus primeros puntos, líneas y formas. Añadiste preajustes a estos objetos para adjuntar información sobre ellos. Al final, fuiste capaz de dibujar tu propio mapa en JOSM.

Esta fue una buena práctica, y ahora estamos listos para editar OpenStreetMap.

En esta sección echaremos un vistazo a la interfaz de JOSM, y veremos cómo podemos utilizarla para editar el mapa en OpenStreetMap.

El Ciclo de Edición
---------------------
La edición de OpenStreetMap con JOSM es similar a la edición con el editor iD que vimos anteriormente. Pero como JOSM es una aplicación de escritorio, su funcionamiento es un poco diferente. El proceso de edición y adición a OpenStreetMap con JOSM será siempre el siguiente:

1. **Descargar** los datos del mapa actual de OSM
2. **Editar** utilizando imágenes de satélite, GPS, Field Papers y notas como guía
3. **Guardar** los cambios en OpenStreetMap

Descargar Datos OSM
--------------------
El primer paso de edición es descargar los datos de la zona del mundo que queremos mejorar. Recuerda que tienes que hacer esto cada vez que quieras hacer cambios en el mapa, porque el mapa suele ser actualizado por otros usuarios.

- Haz clic en "Archivo" en la esquina superior izquierda de JOSM y haz clic en "Descargar de OSM". Esto abrirá la ventana de descarga. Puedes acceder a esta ventana de forma más sencilla haciendo clic en el botón de descarga, que se muestra aquí:

![JOSM Download Button][]

- Cuando se abra la ventana de descarga, debería ver un mapa. Si no ves el mapa, haz clic en la pestaña "Slippy map".

![JOSM Download Dialog][]

- Utiliza el ratón para desplazarte y hacer acercamiento en una zona que conozcas muy bien, como tu ciudad o tu barrio. Los controles son los mismos que en la ventana del mapa JOSM. El botón derecho del ratón te permite arrastrar el mapa, y la rueda de desplazamiento te permite acercarte y alejarte.

> A veces, si estás trabajando en un ordenador portátil, puede ser difícil desplazarse hacia dentro y hacia fuera. Trabajar en JOSM es mucho más fácil si tienes un ratón, pero la mayoría de los portátiles modernos te permiten desplazarte usando el touchpad.

- Dibuje un recuadro alrededor del área que desea descargar. Para dibujar un nuevo recuadro, haga clic en el mapa, mantenga pulsado el botón izquierdo del ratón y arrástrelo para crear un recuadro. Suelte el botón del ratón para terminar de dibujar el recuadro.
- Cuando esté satisfecho con el tamaño y la ubicación del cuadro, haga clic en "Descargar" en la parte inferior de la ventana. JOSM obtendrá los datos de esta zona de OpenStreetMap y los abrirá en su ventana de mapa para editarlos.

### Agregar Imágenes
Si nos has seguido cuando añadimos nuestros primeros puntos con el editor iD, recordarás que debajo de los datos del mapa había una imagen de satélite que nos ayudaba a identificar los objetos sobre el terreno. Estas imágenes procedían de Microsoft Bing, que generosamente proporciona sus imágenes para que los usuarios de OpenStreetMap las consulten mientras contribuyen al mapa.

- Para añadir las imágenes de satélite Bing en JOSM, haga clic en "Imágenes" en el menú superior de JOSM y seleccione "Bing Sat".

> Si no ve Bing Sat en el menú de Imágenes, puede que tenga que activarlo en las preferencias de JOSM. Vaya a Editar -> Preferencias y haga clic en el icono que dice "WMS TMS". Puede que tenga que hacer clic en la flecha hacia abajo para encontrarlo.
>
> ![JOSM Preferences up down][]
> ![JOSM Preferences WMS TMS][]
>
> Click on “Bing Sat”. Then Click “Activate”.


### Paseo de JOSM
Ahora que hemos descargado los datos de OpenStreetMap y añadido las imágenes de satélite de Bing, vamos a echar otro vistazo a la interfaz de JOSM.

![JOSM layout][]

The main window you are already familiar with - this is the map window, and it is where most of the action takes place. Here you will view, edit, and add to the OpenStreetMap data.

To the right of the map window are a series of panels, each of which has its own function. Typically when you first install JOSM several panels are shown by default, such as Layers, Properties, and Selection. When you select a point, line, or shape in the map window, it will be shown in the Selection panel. Information about the object will be shown in the Properties panel, and the username of the author of that object will be shown in the Authors panel.

These panels can be opened or closed by clicking on the various buttons on lower left side of JOSM. Above these buttons in the upper right are tools which change what you can do with your mouse. You are already familiar with some of them, the Select tool and the Draw tool. Below them are tools which make it easier to zoom in, delete an object, draw a shape, or create a line that is parallel to another line.


Editar
----
So we have completed step one of the editing process - Downloading. We have prepared JOSM with satellite imagery as a reference. The next step is to edit the map and add new items.

Depending on the area that you chose to download, there may be a lot or very little existing map data. But notice that it is the same sort of data that we have seen previously - points, lines, and shapes that represent real-life locations.

-   Use the techniques you have already learned to add a couple points to the map of places that you know. If you see any mistakes, try to fix them.
-   You don't need to be too aggressive while you are learning. If you are unsure about something it's better to leave it as it is.
-   If you want to move a point, line, or shape, use the **select tool**. Click on an object and drag it where it should be. This can be used to correct the location of items that have been put in the wrong place.

![JOSM select tool][]

-   Use the **draw tool** to draw new points, lines, and shapes. Describe these objects by selecting from the Presets menu, as you did in the previous section.

> Never edit the map outside of the area you have downloaded. You can see the rectangular area you have downloaded has a solid background, while the area you have not downloaded has diagonal pinstriped lines.
>
> ![JOSM area downloaded][]

Guardar Cambios
--------------
The third and final step to complete our edits is to upload the changes we have made to the OpenStreetMap database. To save the changes, we must be connected to the internet.

-   Click “File” on the top menu, and then click “Upload Data”. This will open up the upload window. You can access this window more simply by clicking on the upload button, shown here:

    ![JOSM Upload Button][]

-   The window that appears shows a list of the objects that you are adding and the objects you are modifying or deleting. In the box at the bottom you are asked to provide a comment about the changes that you are making. Type in here a description of your edits.

    ![JOSM Upload Dialog][]

-   Clic “Subir Cambios”.

-   If this is your first time saving changes to OpenStreetMap, you will be asked for your OpenStreetMap username and password.
-   Enter them in the window that appears. If you check the box in this window, your username and password will be saved and you won’t need to enter them again in the future. Click “Authenticate”.

    ![JOSM Authenticate][]

-   You will need to wait a few seconds for your changes to be uploaded, and then you are done! You have edited the map on OpenStreetMap.

> When you are editing, always be sure to upload your changes before you close JOSM. Even if you still have more editing to do, upload your changes, and then go through the process again later when you have time to edit. You don't want to lose your work!

Vea sus cambios en el mapa
---------------------------
-   Open your internet browser and go to [http://openstreetmap.org/](http://openstreetmap.org/)
-   Move the map to the area that you edited.
-   You should see your changes now appearing on the map! If you don’t, try pressing CTRL+R to refresh the web page. Sometimes the map doesn’t update properly and needs to be reloaded.
-   What if you don’t see your changes? Don’t worry - it may take a few minutes for the changes to be shown on the map. Also, check your additions in JOSM to make sure that you added them correctly. A good general rule is, if your point has an icon in JOSM, then it should be seen on the main map at the OpenStreetMap website.

Resumen
-------
Now that you’ve seen how to add to OpenStreetMap, what’s next? Well, editing is great, but it's not the only aspect of making maps. Of course you also need to learn how to go outside and collect information about places on the ground.


[JOSM Botón Descarga]: /images/josm/josm_download-button.png
[JOSM Diálogo Descarga]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferencias WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM herramienta seleccionar]: /images/josm/josm_select-tool.png
[JOSM área descargada]: /images/josm/josm_area-downloaded.png
[JOSM Botón Subir]: /images/josm/josm_upload-button.png
[JOSM Diálogo Subir]: /images/josm/josm_upload-dialog.png
[JOSM Autenticar]: /images/josm/josm_authenticate.png