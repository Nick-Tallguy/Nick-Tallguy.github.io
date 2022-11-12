---
layout: doc
título: Vespucci
permalink: /en/mobile-mapping/vespucci/
lang: en
category: mobile-mapping
---

Vespucci
==============

Vespucci es una herramienta gratuita para la edición de datos de OpenStreetMap y conocida por funcionar en una amplia gama de dispositivos, por ejemplo, Teléfonos Inteligentes, Tabletas. Soporta la mayoría de las operaciones disponibles en los editores OSM de escritorio. Sin embargo, esta aplicación sólo está disponible para dispositivos Android y funciona para todas las versiones de Android desde la 4.0.

Puedes descargarla desde la Tienda Google Play, Amazon o F-Droid. Los APKs de la versión y la beta de la aplicación también están disponibles en su repositorio de GitHub.

## Características

-   Crear, editar, y eliminar nodos, vías y relaciones.
-   Mover nodos
-   Mover y rotar vías
-   Agregar nodos a las vías
-   Extraer nodo de la vía
-   Mejorar geometría de la vía
-   Ortogonalizar vías (escuadrar)
-   Mover múltiples elementos
-   Admite multi-polígonos
-   Crear, editar y eliminar etiquetas
-   Funciones de deshacer y rehacer
-   Editar relaciones y crear nuevas restricciones de turno
-   Compatibilidad con los preajustes JOSM
-   Descargar y almacenar azulejos de imágenes de fondo
-   Descargar y subir al Servidor OSM
-   Almacenamiento y lectura de archivos de datos OSM en formato JOSM
-   Mostrar problemas de validación y FIXMEs
-   Faltan etiquetas y nombres de calles
-   Añadir, comentar y cerrar los errores de OSM Notes y Osmose
-   Cargar, grabar y cargar una traza GPX
-   Mostrar fotografías georreferenciadas
-   Apoyo a los datos OSM en mosaico de MapSplit
-   Admite la lectura de archivos de datos OSM en formato PBF
-   ..y muchos más

## Cartografía con Vespucci

Los datos OSM en Vespucci se llaman objetos. Los puntos se llaman nodos, las líneas se llaman caminos y los polígonos se llaman caminos cerrados.

Para añadir datos de OSM utilizando Vespucci, es necesario que inicie sesión en su cuenta de OpenStreetMap. Inicie sesión tocando el icono "Más opciones" (situado en la parte inferior derecha de la pantalla) y seleccionando "Autorizar OAuth" en "Herramientas...". Escriba su nombre de usuario (o dirección de correo electrónico) y contraseña de OSM, y luego toque "Iniciar sesión". Si no tiene una cuenta de OSM, seleccione "Registrar ahora" en su lugar.

![Login][]

Vespucci necesitará acceso a su cuenta. Para autorizar el acceso a su cuenta, toque "Conceder acceso" después de iniciar la sesión. Asegúrese de que todas las casillas estén marcadas para maximizar lo que puede hacer en Vespucci.

![Allow][]

Después de iniciar sesión, localice su área de interés a través del icono "GPS" o a través de "Buscar" en "Más opciones". Cambie el fondo del mapa a las imágenes que desee haciendo clic en las tres líneas de la esquina superior derecha y haciendo clic en "OpenStreetMap(Standard)", ya que es la imagen por defecto, y así aparecerán todas las imágenes disponibles.

![SelectImagery][]

Para editar sin conexión, seleccione "Descargar la vista actual" o "Borrar y descargar la vista actual" bajo el icono "Transferir". Esto le permitirá descargar y editar el área mostrada en tu pantalla con una imagen de fondo guardada de tu elección. La edición sin conexión evitará que edite los datos de OSM al mismo tiempo que otros cartógrafos, evitando así los problemas de calidad de los datos que puedan surgir.

![Offline][]

Desbloquee el mapa para poder empezar a añadir datos. Para ello, toque el icono del candado en la esquina superior izquierda de la pantalla. Mantenga pulsado el icono de desbloqueo y luego toque Normal para poder añadir y editar nodos, caminos y etiquetas. Si selecciona la opción "sólo etiquetas", sólo podrás editarlas.

![StartEditing][]

### Adding and editing tags

To add or edit tags, tap on your desired object. A new set of icons will appear at the bottom of the screen. Tap the “Add preset" icon or the “Edit properties" icon to add or modify tags.

![EditTags][]

### Adding/creating new objects

To add a new object, tap the large green button on the lower right corner of the screen and select what you want to add. Zoom in and tap where you want to put the object.

![AddObject][]

To create a new node, choose add node and tap on the area where you want to put the node.

![AddNode][]

To create a way, choose add way and tap continuously on your screen until you get your desired result.

![AddWay][]

To create a closed way/polygon, create ways and simply tap on the first node of the first way you created to close the polygon. Tap the “Add preset" icon to add tags to your polygon. Untagged ways are fushia in color, while tagged ways are colored according to their tags/properties (i.e., tagged buildings are beige, tagged waterways are blue, etc.).

![AddPolygon][]

### Adding a node to a way

Select the way where you want to add a node. Tap the large green button on the lower right corner of the screen and select add node. Tap where you want the new node to appear. A new node will be added in the selected location.

![AddNodeToWay][]

### Editing and moving objects

To move an object, tap it once and move it to your desired location.

To square a polygon, select it then choose “square way" under the “More options" icon.

![ModifyObject][]

### Undo/Redo

To revert your changes, tap the “Undo" icon on the lower left corner of the screen. Tapping it will reverse your most recent changes.

![Undo][]

To redo, long press on the “Undo" icon. A list of operations you have undone will appear. Select what you want to redo.

![Redo][]

### Uploading your changes

To upload your changes, tap the “Transfer" icon on the lower portion of the screen and select “Upload data to OSM server". A list of your changes will appear. Tap “Properties" to input your changeset comments, then tap “Upload". If the upload is successful, your changes will appear immediately in OSM.

![Upload][]

Uploading your changes to OpenSteetMap requires you to be connected to the internet and be logged in to your OSM account so make sure you have signed in before editing.

## Searching for places

To locate your current location, tap the “GPS" icon on the lower portion of the screen and select “Go to current location". The screen will automatically zoom to your location. Note that your device’s GPS should be on for this to work.

![Goto][]

To locate for other locations, tap the “More options" icon and select Find. Type the name of your desired location and select search. Make sure that you are searching “with Nominatim" to perform a Nominatim search of places.

![Search][]

## Other Vespucci settings

To edit your map’s background properties, tap the “Preferences" icon on the lower portion of your screen. A user interface settings window will appear. Choose what you want to adjust from the list. You can also edit the user interface settings, data and edit settings, location and server settings, etc., under this option.

![Preferences][]

Some settings can be adjusted under the “More options" icon. To align the background layer of your map (if there is an offset), tap “Align background" under “Tools…". Doing this requires network connectivity.

![AlignImagery][]

To clear your downloaded tile caches, select Tools &gt; More Imagery Tools &gt; Flush all tile caches. This will empty all on-device tile caches you have.

![ClearTiles][]

You can also provide feedback to Vespucci developers using your GitHub or OSM account under the “More options" icon.

![Feedback][]

[Login]:        /images/mobile-mapping/vespucci-login.png
[Allow]:        /images/mobile-mapping/vespucci-allow.png
[SelectImagery]:/images/mobile-mapping/vespucci-select-imagery.png
[Offline]:      /images/mobile-mapping/vespucci-offline.png
[StartEditing]: /images/mobile-mapping/vespucci-start-editing.png
[EditTags]:     /images/mobile-mapping/vespucci-edit-tags.png
[AddObject]:    /images/mobile-mapping/vespucci-add-object.png
[AddNode]:      /images/mobile-mapping/vespucci-add-node.png
[AddWay]:       /images/mobile-mapping/vespucci-add-way.png
[AddPolygon]:   /images/mobile-mapping/vespucci-add-polygon.png
[AddNodeToWay]: /images/mobile-mapping/vespucci-add-node-to-way.png
[ModifyObject]: /images/mobile-mapping/vespucci-modify-object.png
[Undo]:         /images/mobile-mapping/vespucci-undo.png
[Redo]:         /images/mobile-mapping/vespucci-redo.png
[Goto]:         /images/mobile-mapping/vespucci-goto.png
[Search]:       /images/mobile-mapping/vespucci-search.png
[Upload]:       /images/mobile-mapping/vespucci-upload.png
[Preferences]:  /images/mobile-mapping/vespucci-preferences.png
[AlignImagery]: /images/mobile-mapping/vespucci-align-imagery.png
[ClearTiles]:   /images/mobile-mapping/vespucci-clear-tile-cache.png
[Feedback]:     /images/mobile-mapping/vespucci-feedback.png
