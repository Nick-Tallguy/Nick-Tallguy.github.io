---
layout: doc
title: Usando datos de OSM en QGIS
permalink: /es/osm-data/osm-in-qgis/
lang: es
category: osm-data
---

Usando datos de OSM en QGIS
=================


QGIS (anteriormente Quantum GIS) es un Sistema de Información Geográfica muy completo, de código abierto y multiplataforma. Con QGIS puede acceder a datos actualizados de OSM cuando lo desee, seleccionar las etiquetas que quiera incluir, y exportarlos fácilmente en una base de datos SQLite o archivo Shapefile fácil de usar.  

En este capítulo recorremos los pasos necesarios para hacerlo. Suponemos que ya ha descargado e instalado QGIS 3.x. Si no lo ha hecho, puede descargarlo desde <http://www.qgis.org/en/site/forusers/download.html>.  

Utilizaremos un plugin, QuickOSM, para importar desde la base de datos de OpenStreetMap. Para instalar este plugin, abra el cuadro de diálogo 'Administrar complementos' del menú Complementos. Busque QuickOSM e instálelo. Esto añadirá una entrada al menú Vectorial  

Obtención de datos desde la base de datos
---------------------------

Lo primero que haremos es obtener datos actualizados de OSM. Podemos hacer esto de numerosas maneras. El plugin QuickOSM nos permite extraer grandes cantidades de datos ya que utiliza la api de Overpass y no el servidor principal de la base de datos de OSM.

- Abra QGIS y el menú Vectorial -> QuickOSM -> QuickOSM...  

![quickosm][]

- Aquí puede elegir entre varias opciones: si su ventana ya muestra la extensión que desea, cambie el cuadro combinado que por defecto muestra "En" a "Extensión de capa". Si tiene una capa cargada en QGIS con la extensión deseada, elija "Extensión de la capa" y seleccione la capa que desea utilizar. Utilizar la opción por defecto "En" requiere que exista una relación o polígono con el nombre indicado. En caso contrario, elija "Alrededor" y bastará con un nodo con este nombre. Puede seleccionar un perímetro (por defecto 1000m) alrededor de este nodo donde se cargarán los datos desde la base de datos.

- Oprima "Ejecutar consulta".  
- Se le notificará cuando se haya completado la descarga. Los datos se almacenan en tres capas temporales: una para nodos, una para líneas y una para polígonos.

![quickosm loaded][]


Importing extracts
---------------------------

There are several options how to obtain ready-made extracts of an area. <https://wiki.openstreetmap.org/wiki/Planet.osm#Country_and_area_extracts> contains a list of several websites. Just pick a **.osm** or **.pbf** file and download it. 

You can either use QuickOSM to import it clicking on 'OSM File' in the left bar. Once you used QuickOSM OSM files should have been made known to QGIS and you can use the regular vector layer import:

- Go to Layer -> Add Layer -> Add Vector Layer...  
- In the source field, select your file and click "Add".  
- You can select one or more type layers from that file.  

![import osm][]  

- After clicking "OK" you can close the dialogue and your QGIS window shows the new layers.  
  

![import osm loaded][]  


Exporting data
--------------

To export a layer activate its context menu and select Export -> Save Features as...
You can select from a wide range of formats including Shapefile, GeoJSON, PostgreSQL dump, SQLite. The other options on the dialogue vary depending on the format you selected.

![export][]  

You can choose to re-import the exported layer by checking the box at the bottom (activated by default).

Working with the Data
--------------------

We cannot give you even a rough overview over what you can do with QGIS and there are many excellent tutorials and books which will guide you step-by-step towards mastering the software. But as OSM data imported by one of the methods described above have their tags encoded in a special way here is an example how to deal with them (for the curious, the example is pitcairn-islands-latest from Geofabrik's download page for Australia and Oceania). You can inspect the data of a vector layer using 'Open Attribute table' from the context menu of a layer, in this case the multipolygon layer.

![attribute table][]

We can see that all the key-value-pairs for the tags of the various objects are organized in a specially formatted text string in the field 'other_tags'. This kind of storage is called "hstore" in a PostgreSQL database and is the standard for OSM data.

In this example polygons are mostly islands, forest and buildings. Initially they are rendered in the same way which means that islands cover everything else. Let us render them differently in order to get a feeling how to identify different objects. Discard the attribute table.  From the context menu of the multipolygon layer select Properties and on that form move to the Symbology tab. 

![symbology][]

First change the type of the symbol from "Single symbol" to "Rule based" using the combobox at the top of the form. 

![symbology rule based][]

The current rendering appears as a rule with no filters. We can modify this rule by clicking on the icon marked with a purple square in the image above.

![symbology edit rule][]

We'd like to treat buildings differently. Treat differently means that rules need to be specified according to layer properties. QGIS' expression evaluation cannot directly deal with hstore strings. But a utility comes to our rescue and the filter expression shown in the image `hstore_to_map(other_tags)['building'] is not NULL` converts the 'other_tags' string into a key-value-map where we pick the value for the key 'building'. The condition reads that we look for objects whose building key is not empty. We can define a colour and fill style for the buildings. Click 'OK' when you are finished with your rule design. Now you can add further rules by clicking on the 'plus' icon at the bottom of the symbology tab. We add similar rules for woods and grassland. At the end our symbology tab will look like this:

![symbology polygon rules][]

As an added bonus we can get a quick feature count for the rules. Press the rightmost icon in the row at the bottom (the sum symbol) and the 'count' column will be populated telling us that we have 150 buildings on this layer.

You can add labels in a similar fashion how we dealt with symbols. 'Labels' is another tab on the properties of a layer, right below Symbology. In most cases you want to print the given name of a feature. You enter an expression similar to the ones used for symbology in the field for a filter and as value you would use `hstore_to_map(other_tags)['name']`. 

![labels][]

Assigning such labels to the multipolygon and the point layers you will end up with something like this:

![done][]


Resumen
-------

Este proceso simplifica la obtención de datos actualizados de OSM y su inserción en QGIS. Una vez que tenga capas como esta en QGIS, es posible guardarlas en formato Shapefile, ejecutar filtros y consultas, y más. Para más detalle sobre estas funciones, refiérase al menú Ayuda en QGIS.  


[quickosm]: /images/osm-data/qgis-quickosm.png
[quickosm loaded]: /images/osm-data/qgis-quickosm-loaded.png
[import osm]: /images/osm-data/qgis-import-osm.png
[import osm loaded]: /images/osm-data/qgis-import-osm-loaded.png
[export]: /images/osm-data/qgis-export.png
[attribute table]: /images/osm-data/qgis-layer-attributes.png
[symbology]: /images/osm-data/qgis-layer-symbology.png
[symbology rule based]: /images/osm-data/qgis-layer-symbology-rule.png
[symbology edit rule]: /images/osm-data/qgis-layer-symbology-edit-rule.png
[symbology polygon rules]: /images/osm-data/qgis-layer-symbology-poly-rules.png
[labels]: /images/osm-data/qgis-layer-labels.png
[done]: /images/osm-data/qgis-complete.png