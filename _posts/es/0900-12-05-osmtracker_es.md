---
layout: doc
title: OSMTracker
permalink: /es/mobile-mapping/osmtracker/
lang: es
category: mobile-mapping
---

OSMTracker
==============

  
**Este artículo se refiere a OSMTracker para Android - existe un producto similar disponible para Windows Mobile.**  
OSMTracker permite crear una traza GPX de un viaje, con la colección de 'puntos de ruta' a lo largo de la ruta. Grabaciones de voz, fotografías y otras notas también pueden ser registradas, y todas serán geolocalizadas.

Inicio rápido
-----------

![OSMTracker_1][]  

1. Haz clic en la cruz para crear una nueva traza.  
2. La pantalla cambiará para mostrar los botones - espera hasta que ya no estén en gris, lo que indica que el GPS tiene la posición.  
3. Recorre tu ruta, pulsando los botones apropiados cuando te encuentres exactamente en el elemento a ser mapeado. También puedes crear grabaciones de voz, tomar fotografías y tomar notas utilizando los botones.  
4. Cuando hayas terminado, pulsa el icono del disquete para guardar tu traza y puntos de ruta.  
5. Para convertir la traza en un archivo GPX, pulsa y mantén pulsada la traza en la lista, luego selecciona la opción adecuada.  
6. Transfiere la traza, fotos y grabaciones a tu ordenador y léelas para actualizar OSM.  


Instala OSMTracker
-------------------------

Instala OSMTracker desde [F-Droid](https://f-droid.org/es/packages/net.osmtracker/).  
![OSMTracker Logo][]  


Configuración de OSMTracker
------------------------

Inicia OSMTracker y pulsa el icono del menú en tu dispositivo Android, luego selecciona **Ajustes**.  

- **Duración de la grabación de voz** - a tu elección, pero el autor utiliza 30 segundos.  
- **Habilitar sonido** - recomendado marcar esta casilla - emite un pitido para avisarte cuando la grabación de voz comienza y termina.  
- **Restablecer la autenticación**. Este botón estará en 'color gris' hasta que hayas subido un archivo .gpx y autorizado a OSMTracker a subir trazas a tu cuenta de OpenStreetMap.  
- **Ajustes GPS** Qué métodos de tu dispositivo Android utilizará para determinar la ubicación. Es recomendado establecer esto a **Alta precisión** y así el dispositivo utilizará GPS, Wi-Fi y las redes móviles para estimar la ubicación.  
- **Comprobar el GPS al iniciar** Al iniciar OSMTracker, si el GPS ha sido apagado, la aplicación te preguntará que lo actives de nuevo.
- **Ignorar el reloj GPS** Si está marcado se usará el reloj interno de los dispositivos en lugar del tiempo provisto por la señal GPS.  
- **Intervalo de registro GPS** Elige el periodo entre el registro de la posición - para la mejor precisión elige 0 o 1, cada uno de los cuales resulta en un registro cada segundo.  

> La frecuencia afecta el uso de la batería, sin embargo, cuando utilizas esta aplicación, es probable que tu pantalla esté encendida la mayor parte del tiempo, el GPS esté en funcionamiento, y que puedas estar tomando fotografías y también grabando - todo esto resultará en un agotamiento severo de la batería y es recomendable para uso extendido que se utilice el dispositivo con mayor energía.  

- **Directorio de almacenamiento externo (SD)** Predeterminado es /osmtracker  

> Algunos dispositivos Android recientes no permiten guardar datos en una microSD o tarjeta SD. Aunque se indique como 'dispositivo externo' las trazas se guardarán en **/storage/emulated/0/osmtracker.**  

-  **Un directorio por traza** Se recomienda ya que esto resultará en que todas las grabaciones de voz, fotografías, notas de texto y la traza GPX se almacenen en el mismo directorio, cuyo nombre será la fecha y la hora de creación del archivo GPX.  
-  **Nombre del archivo para las trazas** Algunas opciones para que puedas elegir el nombre con que se guardarán las trazas.  
-  **Precisión en el archivo GPX** Recomendado - Esto resultará en que el nombre de los puntos de ruta incluyan una cifra con un posible rango de error en metros. Por ejemplo *Sendero (4.0m)*. Esta información puede ser extremadamente útil cuando se actualice OSM y se tenga que decidir si se desea mover un objeto existente para alinearlo con la nueva traza y sus puntos de ruta.  
-  **Usar aproximación HDOP** Esto se relaciona con algunos cálculos adicionales para mejorar la precisión en la posición (Dilución Horizontal de Precisión).  
-  **Exportar la dirección de la brújula** Define el si y el cómo se desean exportar los datos de la brújula al archivo GPX.  
-  **Fuente de fotos predeterminada** Generalmente tomarás fotografías con la cámara a través de esta aplicación, pero puedes elegir si deseas usar fotografías que ya están en el teléfono.  
-  **Pantalla siempre encendida** Selecciona esto si estás constantemente pulsando los botones, tomando fotografías o haciendo grabaciones de voz - Si no lo estás haciendo, deja la opción vacía, así tendrás que encender la pantalla cada vez; esto gastará menos batería.  
-  **Tema de la pantalla principal** Opciones para cambiar el contraste y el brillo en caso de que estés teniendo problemas para ver los botones.  
-  **Preajustes de los botones** Puedes diseñar e instalar tus propios botones y hacer que se muestren. Para una descripción completa de esta función, [ver debajo](/es/mobile-mapping/osmtracker/#button-presets).   
-  **Mapa de fondo** Si esta característica está seleccionada, al mantener pulsado sobre una traza, esta se mostrará y además la aplicación descargará como fondo los datos de OpenStreetMap.  

> Para descargar el mapa se requiere una conexión de datos. No necesitas usar esta función a menos que quieras.  

- **Proveedor de teselas de mapa** Si has seleccionado descargar un mapa como fondo, puedes seleccionar qué versión del mapa deseas usar como fondo.  
-  **Orientación**  ¿Deseas que la pantalla rote, o deseas usarla en modo paisaje o retrato?  

Sobre la lista de trazas
--------------

![OSMTracker_2][]  
Una vez que hayas concluido tu reconocimiento inicial, después de haber pulsado algunos botones, creado grabaciones de voz y tomado algunas fotografías, haz clic en el icono del disquete para finalizar tu traza. Ahora pulsa y mantén pulsada la traza para visualizar las opciones:  

-  **Reanudar la traza** ¡Muy útil cuando te das cuenta que has olvidado de trazar algo!  
-  **Mostrar** Esto mostrará la traza, posiblemente con un mapa de fondo dependiendo de tu conexión de datos y la opción que hayas seleccionado en **Mapa de fondo**.  
-  **Exportar como GPX** - Opción necesaria para que la traza y los puntos de ruta puedan ser utilizados en algún programa de edición.  
-  **Subir a OpenStreetMap** Utiliza esta opción para subir tu traza a OpenStreetMap - es necesario tener una cuenta en OpenStreetMap ([Aquí se explica como obtener una](/es/beginner/start-osm/)), y autorizar que esta aplicación pueda subir las trazas a tu cuenta. Ver [Trazas GPS - Archivos GPX abajo](/es/mobile-mapping/osmtracker/#gps-traces--gpx-files) para más información sobre por qué esas trazas son tan importantes para OpenStreetMap.  

> **Precaución, aún no elimines tu traza.** Sólo has subido la traza básica sin los puntos de ruta, fotografías, etc. Conserva todo mientras esto se transfiere a una computadora para fines de edición.  

-  **Eliminar**. Se sobreentiende.  


Sobre los preajustes de los botones.
--------------

--------------  

- 1 familia,  
- 2 familias,  
- 3 familias,  
- 4 familias,  
- casa principal,  
- 20% dañado,  
- 40% dañado,  
- 60% dañado,  
- 80% dañado,  
- destruido,  
- inadecuado para camión,  
- se necesita un 4x4,  
- etc..  

Para una descripción completa sobre la creación de botones, ver [wiki OSMTracker](https://github.com/nguillaumin/osmtracker-android/wiki/Custom-buttons-layouts). Este es un  [archivo de ejemplo para descargar.](/files/R_of_Way.xml)  

![OSMTracker button presets][]  


Tamaño de las grabaciones de voz, fotografías e imágenes de texto.  
-----------------------------------------------  

![OSMTracker recorded file sizes][]  

Si la transferencia de archivos es un problema, ten en cuenta el tamaño de los archivos involucrados -  como se muestra en la imagen, las fotografías hacen uso intensivo de la memoria en comparación con el archivo GPX o una grabación de voz de 10 segundos.  


Trazas GPS - Archivos GPX
----------------------  

![OSMTracker JOSM][]  

Las trazas GPS en forma de archivos GPX están compuestas de diversos elementos, principalmente una 'traza' y diversos 'puntos de ruta'. La imagen de abajo muestra el contenido de un directorio creado en OSMTracker, el cual ha sido cargado en JOSM para su edición, junto con imágenes satelitales como apoyo. El icono cuadrado en el centro de la traza indica que hay una fotografía disponible que fue tomada en ese lugar - solo debes pulsar en el cuadro para mostrar la fotografía.  

Si estás navegando y utilizando un GPS para obtener instrucciones, en algún momento notarás que va a 'recalcular'. Esto se debe normalmente a que la ubicación interna del GPS no corresponde a donde se espera que la carretera o camino esté - existe un margen de error, pero es fácil que las carreteras y caminos se creen en algo el lugar equivocado, o que la carretera sea movida después de que los datos del mapa se han creado.  
Los voluntarios que mapean en OpenStreetMap pueden descargar todas las trazas que han sido subidas en su área y utilizarlas para:  

1. Trazar caminos y senderos a través de áreas que no se pueden ver mediante imágenes de satélite debido a las nubes, árboles, sombras, edificios, etc.  
2. Ajustar las imágenes de satélite para alinearlas correctamente - puede haber variaciones enormes con algunas de las imágenes.  

A pesar de que una sola traza GPX puede ser muy útil, puede que no sea particularmente precisa e incluso puede que se encuentre hasta 30 metros fuera de lugar. Cuando hay varias trazas, se puede ver más fácilmente la ruta correcta del sendero o carretera - por ejemplo en la imagen de abajo se muestran las trazas GPX de un pueblo en donde las principales vías se pueden ver debido al volumen de las trazas.  

![OSMTracker_gpx][] 




[OSMTracker Logo]: /images/mobile-mapping/osmtracker_logo.png
[OSMTracker_1]: /images/mobile-mapping/OSMTracker_1.png
[OSMTracker_2]: /images/mobile-mapping/OSMTracker_2.png
[OSMTracker button presets]: /images/mobile-mapping/OSMTracker_presets.png
[OSMTracker recorded file sizes]: /images/mobile-mapping/OSMTracker_files.png
[OSMTracker_gpx]: /images/mobile-mapping/OSMTracker_gpx.png
[OSMTracker JOSM]: /images/mobile-mapping/OSMTracker_JOSM.png