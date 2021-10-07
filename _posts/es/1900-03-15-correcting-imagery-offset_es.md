---
layout: doc
title: Corrigiendo Desplazamiento de Imágenes
permalink: /es/josm/correcting-imagery-offset/
lang: es
category: josm
---

Desplazamiento de Imagen
===============

> Revisado 2015-09-21  

Los proveedores de imágenes suelen hacer un buen trabajo de georreferenciación de sus imágenes, pero en ocasiones éstas pueden estar fuera de posición. Esto es especialmente cierto en zonas montañosas, donde puede ser difícil extender una imagen plana sobre una zona de la Tierra con muchas curvas de nivel. Cuando se cargan las imágenes en JOSM, a veces pueden estar a diez metros o más de su posición real. Esto se denomina **desplazamiento de las imágenes**  

Observe en la siguiente imagen que dos fotografías aéreas distintas han sido georreferenciadas y fusionadas. Como la georreferenciación no es un proceso perfecto, las imágenes no se alinean perfectamente entre sí. Por lo tanto, una de ellas, o ambas, deben ser inexactas.  

![Misaligned imagery][]

Hemos aprendido dos formas principales de hacer mapas: una es utilizando imágenes aéreas para identificar características sobre el terreno, y otra es utilizando el GPS para registrar pistas y puntos de ruta y luego añadirlos a OpenStreetMap. La ventaja de las imágenes aéreas es evidente. Te permite a ti, el cartógrafo, ver la imagen completa, observar varios detalles de la imagen, tener en cuenta tu conocimiento de la zona y rastrear fácilmente carreteras, edificios y zonas. Sin embargo, una de las principales ventajas del GPS es que no sufre desplazamientos como las imágenes. Un GPS siempre le proporcionará una latitud y longitud correctas. La única excepción es cuando las señales del satélite se ven interrumpidas por edificios altos o montañas, pero en este caso es fácil reconocer el error. Observa el rastro del GPS en esta imagen, comparado con la capa de imágenes aéreas de Bing que hay debajo:  

![Aerial vs GPS][]

Por lo que sabemos ahora, está claro que el rastro del GPS es probablemente exacto, y la imagen que hay debajo está fuera de lugar. Así que ahora debemos preguntarnos: "si las imágenes pueden estar fuera de lugar, ¿cómo podemos seguir utilizándolas y hacer mapas precisos?".  

Corregir Desplazamiento de Imágenes
-------------------------

La respuesta a la pregunta anterior es que podemos mover las imágenes para que se alineen con cosas que sabemos que están en la ubicación correcta, como las pistas de GPS. Es fácil corregir el desplazamiento de las imágenes en JOSM.  

Las mejores referencias para ajustar las imágenes son las trazas de GPS que siguen las carreteras. Y cuantas más trazas de GPS tenga como referencia, más precisa será la alineación de sus imágenes. Como los usuarios de OpenStreetMap suelen subir sus trazas GPS a la base de datos de OSM, podemos descargarlos y utilizarlos para alinear nuestras imágenes.  

- Haga clic en el botón de descarga. Botón de descarga JOSM][]{: height="24px"}  

- Marque la casilla junto a "Datos GPS sin procesar" ![Descargar datos GPS sin procesar][]{: height="24px"} cerca de la parte superior de la ventana de descarga. Selecciona tu zona y haz clic en "Descargar".  

- Esto descargará una capa adicional a JOSM que contiene pistas GPS. Dependiendo de la cantidad de trazas que hayan subido los usuarios de OSM, puede que veas pocas trazas (o incluso ninguna):  

![Few GPS tracks from OSM][]

- O, podrías ver muchas trazas:  

![Many GPS tracks from OSM][]

- Para ajustar una capa de imágenes, haga clic en el botón "Ajustar desplazamiento de imágenes"[]{: height="24px"} en la parte superior de JOSM.  

- Ignorando el cuadro que aparece, utilice el ratón para arrastrar la capa de imágenes de modo que se alinee correctamente con las trazas del GPS. Las trazas del GPS deben alinearse con las carreteras en las imágenes lo más cerca posible. Verá que los números de desplazamiento en el cuadro cambian.  

![Adjust imagery offset][]

- If you like, you can save these offset settings by entering a bookmark name and then clicking OK. You can then automatically apply the same settings later by going to Imagery ‣ Imagery offset and clicking on your bookmark.  
- If you do not want to save the offset, simply click OK without entering a bookmark name.  

What if there are no GPS tracks on OpenStreetMap, and you don’t have a GPS? Without GPS tracks, it is difficult to align imagery.  If it is a relatively empty area (not much mapping done), you might choose to simply use the imagery as it is and correct the data later.  It’s better to have map an area 20 or 30 meters offset than to not map at all.  

If you can positively identify the latitude and longitude of one object on the ground, you can ensure the imagery is correctly placed by following these steps:  

1. Identify the object whose position you know on the imagery.  
2. Click on the latitude and longitude in the bottom left corner of JOSM.![JOSM lat lon][]{: height="24px"}  
3. In the dialog that opens, enter the latitude and longitude of the place that you know, and enter a small number for Zoom, about five or ten.  
![JOSM lat lon dialogue][]
4. This will zoom and center the map to your longitude and latitude.  Now you can move the imagery as you did previously so that the feature you know is centered at the correct position.  

If, on the other hand, the area has already been extensively mapped, then hopefully the previous mappers have drawn objects in their correct locations.  In this case, you can align the imagery to the OSM map, but beware!  Other mappers may not be aware of imagery offset, and they may have made mistakes when they mapped.  


La Base de Datos de Desplazamiento de Imágenes
---------------------------

Now you know how to watch out for and correct imagery offset, but there is one major problem with this approach that we have overlooked thus far.  If every OpenStreetMap user adjusts the imagery differently, everybody will be mapping with slightly different backgrounds.  

Imagine that you are mapping a small town, and you realize that Bing imagery is offset by 15 meters to the north. So you adjust the imagery and then use it to map the whole town accurately. But then somebody else wants to add something to the map, so they download the data and load Bing imagery, but they don’t know about the imagery offset you discovered!  They will think that something is wrong and all of the objects in town are misplaced by 15 meters, and they will start to move them, which is not correct!  This can be disastrous for the town’s map data.  

For this reason it is important that all users are aware of imagery offset, and should always check for it before mapping an area.  To help with this problem, some smart people created a plugin that allows users to save offset information in a database and share it with others.  Let’s see how this works:  

- Abra el menú de Preferencias en JOSM, y haga clic en la pestaña Complementos.![Pestaña de complementos de JOSM][]{: height="24px"}  

- Busque el complemento llamado "imagery_offset_db" y marque la casilla junto a él.  

![Imagery_offset_db plugin][]

- Haga clic en Aceptar. Deberá reiniciar JOSM para finalizar la instalación del complemento.  

De la misma manera que se pueden guardar los desplazamiento como marcadores, este complemento permite guardar los desplazamientoss en una base de datos central, y acceder a los desplazamientoss que otros usuarios han creado. Por lo tanto, si un mapeador crea un desplazamiento de imágenes en un área, otros usuarios pueden utilizar exactamente el mismo desplazamiento para mapear.  

Cuando utilice capas de imágenes aéreas, debería comprobar SIEMPRE si existen desplazamientos, y cuando cree su propio desplazamiento, debería guardarlo SIEMPRE en esta base de datos.  


Agregar Desplazamiento de Imágenes de la Base de Datos
------------------------------------

When you add an imagery layer, the new plugin will alert you that you should check the imagery database for an existing offset.  You will see an icon with a red exclamation point on it at the top of JOSM, like this:  

![Imagery offset notification][]

- Click on the button and the plugin will communicate with the database to see if there are existing offsets in this area.  
- Here we have downloaded OSM data and GPS tracks in Kuta, Bali, Indonesia. In this case, we have found one existing offset. Click on it to apply to the map.  

![Offset in Kuta bali][]

- Esto hace que la capa de imágenes se desplace. Sin embargo, cuando añadimos un desplazamiento ajeno como éste, debemos comprobar que es válido comparándolo con las trazas del GPS.  

![Comparing imagery offset from GPS tracks][]

- Podemos ver que la capa de imágenes está de hecho desalineada. No queremos que otros usuarios utilicen este desplazamiento, así que debemos marcarlo como incorrecto en la base de datos. Haga clic de nuevo en el botón "Desplazamientos" (ya no tendrá un signo de exclamación rojo).  

![Offsets button][]

- Esta vez, cuando se abra el cuadro de diálogo, haga clic con el botón derecho del ratón en el desplazamiento y haga clic en "Rechazar Desplazamiento".  

![Deprecate offset][]

- Clic “Sí” para confirmar.  
- Tendrá que introducir una razón para eliminar este desplazamiento.  

![Deprecate reason][]


Agregar Desplazamiento de Imágenes a la Base de Datos
------------------------------------

Ahora que hemos marcado el desplazamiento de este usuario como "obsoleto", debemos añadir un desplazamiento mejorado a la base de datos.  

1. Haga clic en el botón "Ajustar el desplazamiento de las imágenes". Botón [Ajustar el desplazamiento de las imágenes][]{: height="24px"}  
2. Ajuste las imágenes para que coincidan con las trazas del GPS. 3. Haz clic en Aceptar en el cuadro.  
3. Ahora vaya a Desplazamiento ‣ Almacenar Desplazamiento de Imágenes...  
![Store imagery offset][]
4. Introduzca una descripción del desplazamiento en el cuadro que se abre.  
![Offset description][]
5. Haga clic en Aceptar. Su desplazamiento se guardará en la base de datos.  
6. Ahora vamos a ocultar la capa del GPS y a mirar los datos de OSM frente a las imágenes correctamente colocadas.  

![Corrected imagery][]

Alguien mapeó esta zona con imágenes mal alineadas, por lo que la zona no está correctamente mapeada. Esto tomará algún tiempo para arreglar.


Sitio web de la Base de Datos de Desplazamiento de Imágenes
--------------------------------

Lastly, for more information on the offset database, you can visit the website at [http://offsets.textual.ru/](http://offsets.textual.ru/).  This lists all the offsets that have been uploaded to the database, and it also has a cool map feature that visualizes where the offsets are located, as you can see here:  

![http://offsets.textual.ru/][]

> Una última cosa que hay que recordar es que las imágenes pueden no estar desplazadas a la misma distancia en todas partes. Esto es especialmente cierto en regiones donde hay muchas colinas y montañas. Por lo tanto, si las imágenes parecen estar desplazadas de forma diferente en distintas zonas, tendrás que volver a moverlas.  

Resumen
--------

Cuando se está empezando con OpenStreetMap, no hay que preocuparse demasiado por el desfase de las imágenes. Pero si ves que las ediciones de otro cartógrafo parecen estar desalineadas con respecto a las imágenes, siempre debes considerar que puede haber un desplazamiento antes de empezar a cambiar sus objetos. Y si aún no estás preparado para lidiar con los desfases, recuerda que es mejor mapear un área con 20 o 30 metros de desfase que no mapearla en absoluto. Pero siempre que sea posible, recuerde que puede producirse un desplazamiento de las imágenes, y utilice los pasos de este capítulo para corregirlo cuando sea necesario.


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










