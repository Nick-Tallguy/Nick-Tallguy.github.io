---
layout: doc
title: Editando Datos de Campo
permalink: /es/josm/editing-with-josm/
lang: es
category: josm
---

Editando Datos de Campo
==================


Ya hemos cubierto todos los componentes básicos de la cartografía con OpenStreetMap. En la sección [Cartografía con un smartphone, GPS o papel](/es/mobile-mapping/) puedes ver cómo utilizar las herramientas móviles para cartografiar una zona.

En este capítulo volveremos de nuevo a JOSM y veremos un par de conceptos nuevos que no hemos tratado hasta ahora.

Capas de JOSM
-----------
Si has seguido hasta ahora, te habrás dado cuenta de que podemos añadir todo tipo de cosas diferentes en JOSM. Podemos descargar datos de OSM, añadir imágenes de satélite de Bing, cargar pistas y puntos de GPS y añadir Field Papers, todo lo cual se muestra en la ventana del mapa de JOSM.

También habrás notado que cada vez que añades algo nuevo a JOSM, se añade un elemento adicional al panel Capas en la parte derecha de JOSM. Dependiendo de lo que hayas abierto, tu panel de capas puede tener este aspecto:

![Layers panel][]

Cada elemento de esta lista representa una fuente de datos diferente que tiene abierta en su ventana de mapa. En este ejemplo, "Capa de Datos 1" son los datos de OpenStreetMap que estamos editando. "Field Papers" es la capa creada cuando añadimos nuestro Field Paper en JOSM.

Si añades las imágenes de satélite de Bing, aparecerá una nueva capa en el panel de capas llamada "Bing Sat".

La idea de las capas puede ser a menudo difícil de entender. Una buena forma de imaginarlo es que cada capa es como un trozo de papel semitransparente, y que están apilados unos encima de otros. Cada papel tiene un determinado tipo de información, y se pueden reorganizar como se quiera.

Las capas que se utilizan como referencias, como las imágenes de satélite, las pistas de GPS y los documentos de campo, suelen llamarse "capas base". La capa de datos de OSM es la capa con la que realmente se trabaja.

- Para mover una capa, haga clic en ella en el panel Capas y pulse la flecha hacia arriba o hacia abajo para moverla.

![Layers up down][]

- Para ocultar una capa, selecciónela con el ratón y haga clic en el botón Mostrar/Ocultar:

![Layers show hide][]

- Debería ver que la capa que ha seleccionado desaparece en la ventana del mapa. Vuelva a hacer clic en Mostrar/Ocultar y volverá a aparecer.
- Puede eliminar una capa seleccionándola y utilizando el botón de eliminar:

![Layers delete][]

- Por último, es importante saber que sólo se puede editar la capa que se considera *activa* por JOSM. Si no puede editar el mapa en su ventana de mapa, probablemente sea porque no tiene la capa correcta establecida como activa. La mayoría de las capas, como los puntos GPS, los documentos de campo y las imágenes de satélite, no pueden editarse. Las únicas capas que pueden editarse son los datos de OpenStreetMap, que suelen llamarse "Capa de datos 1".
- Para activar una capa, selecciónela en el panel Capas y haga clic en el botón Activar:

![Layers activate][]


Usar Datos GPS y Field Papers
-------------------------------
En los capítulos [Cartografía con un Teléfono Inteligente, GPS o Papel](/es/mobile-mapping/) vimos cómo recoger datos con un GPS y Papeles de Campo, y cómo cargarlos en JOSM como una capa.

Una vez que hayas realizado el estudio con una de estas herramientas, tienes que añadir la información en OpenStreetMap de forma digital.

Lo haces con el mismo proceso que aprendiste anteriormente - **descargar, editar, guardar**. La diferencia es que en lugar de utilizar sólo las imágenes de satélite como capa base, también puedes utilizar tus datos GPS, Field Papers, notas, o una combinación de todos ellos.

- Por ejemplo, supongamos que tienes tus puntos del GPS como capa de fondo en JOSM, has guardado un punto en tu GPS con el nombre 030, y has escrito en tu cuaderno que el 030 es una escuela. Para añadir este punto a OpenStreetMap, selecciona la herramienta de dibujo y haz doble clic sobre el punto 030 en la ventana del mapa. Esto creará un punto. A continuación, vaya al menú de preajustes y busque el preajuste para la escuela. Introduzca el nombre de la escuela y haga clic en "Aplicar preajuste". Haga lo mismo para añadir líneas y formas.

![GPS in JOSM][]

Etiquetas
----
Cuando se dibuja un punto, una línea o una forma, tiene una ubicación, pero no hay información sobre lo que es. En otras palabras, sabemos **dónde** está, pero no **qué** es. Hasta ahora, hemos utilizado elementos del menú Presets para definir **qué** es. La forma en que OpenStreetMap sabe **qué** es un objeto es mediante el uso de **etiquetas**.

Una etiqueta es como un rótulo que se puede poner a algo. Por ejemplo, si dibujamos un cuadrado, sólo es un cuadrado. Pero luego le añadimos atributos que describen lo que es: este cuadrado es un edificio; el nombre del edificio es "Menara Thamrin"; el edificio tiene 16 niveles de altura.

Puedes añadir tantas etiquetas como quieras a un objeto. Las etiquetas se guardan como pares de texto, llamados **claves** y los **valores**. En OpenStreetMap, las etiquetas escritas anteriormente serían de hecho:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

Si selecciona un objeto en JOSM, puede ver todas las etiquetas que se le han asignado en el panel de propiedades de la derecha.

![Properties panel][]

### Edición de Etiquetas

Puede añadir, editar y eliminar etiquetas desde el panel de propiedades. Sin embargo, las etiquetas están tradicionalmente en inglés y a veces pueden resultar confusas, por lo que a menudo es más fácil utilizar el menú de preajustes. Cuando se añaden o cambian las etiquetas, se modifican los atributos del objeto.

- Para editar las etiquetas de un objeto, primero hay que seleccionarlo.
- A continuación, edite las etiquetas de una de las dos maneras siguientes: (1) Utilizar el menú de preajustes, o (2) editar las etiquetas directamente en la ventana de propiedades de la derecha.

### Error común: Etiquetar nodos cuando se quiere etiquetar líneas o polígonos

Cuando se editan los atributos de un punto, primero se selecciona el punto y luego se añaden las etiquetas, ya sea a través del menú de preajustes o directamente en el panel de propiedades. Un error común es cuando se añaden atributos a una línea o a una forma. Al seleccionar el objeto, es importante que
seleccione la línea, y NO los puntos que la componen.

Esto ocurre con frecuencia porque los editores utilizan la herramienta de selección JOSM para dibujar un recuadro alrededor de un objeto, lo que hace que se seleccione todo, tanto la línea **como** los nodos, y cuando se añaden etiquetas éstas se aplican también a los nodos. Asegúrate de **sólo** seleccionar las líneas cuando quieras añadirles etiquetas.

![Nodes mistake][]

Guardar archivos OSM
----------------
When you are editing in JOSM, it is always a good idea to download, edit, and upload changes in a reasonably short period of time. You do not want to download data one day, and then wait until a few days later to upload your edits. What if someone else edits the same area during that time? This will cause errors and conflicts.

Don't be afraid to upload your edits frequently. This ensures that your changes will be saved to the database and you will not lose your hard work.

If you are working in a single area, it's a good idea to download the map data every time you want to edit, in case another user has made changes.

Although you should always try to download OSM data when you are ready to edit, and upload your changes frequently, there may be cases in which you want to save the OSM data on your computer. For example, if you have intermittent connectivity to the internet, you may wish to download data, save it, edit, and then upload your changes later on.

-   To save an OSM file, make sure that it is the active layer in the the Layers panel. Click “File” on the top menu, and click “Save”. Choose a location for the file and give it a name. You can also save by clicking this button:

![JOSM save button][]

-   You can now close JOSM and your data will be saved. When you want to open the file again, simply open JOSM, go to the “File” menu, and click “Open...”

Resumen
-------
In this chapter we looked a little bit closer at the JOSM interface and learned about layers and tags. You should now have a solid footing in how to map and how to edit OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png