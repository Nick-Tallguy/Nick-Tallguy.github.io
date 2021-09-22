---
layout: doc
title: Formatos de Archivo
permalink: /es/osm-data/file-formats/
lang: es
category: osm-data
---

Formatos de Archivo
=============

> Revisado 2016-09-05

Como cualquier tipo de datos, existen varias formas de almacenar datos geográficos en una computadora. Se pueden guardar en una base de datos, que es un sistema especializado para almacenar y recuperar datos, y de hecho existen sistemas de bases de datos diseñados específicamente para almacenar datos geográficos. También se pueden almacenar en archivos informáticos tradicionales, aunque existen muchos formatos de archivo diferentes para datos geográficos.   

En esta sección, analizaremos algunas formas de almacenar datos geográficos, explicaremos cómo funcionan y cómo se utilizan normalmente.   

Archivos .OSM
-----------

El formato de archivo **.osm** es específico de OpenStreetMap. No lo encontrarás en ningún otro lugar. Si alguna vez descargó datos usando JOSM y los guardó como un archivo, es posible que haya notado que el archivo se guarda con la extensión **.osm**. Si es un usuario de GIS, es posible que también haya notado que no es fácil abrir estos archivos con un software como QGIS.   

Entonces, ¿por qué los datos de OSM se almacenan en un formato de archivo que nadie más usa? La respuesta es que muchos formatos de datos geográficos son anteriores a la era moderna de Internet y están diseñados para un acceso rápido y consultas como si se consultara una base de datos. Los datos OSM, por otro lado, están diseñados para ser enviados y recibidos fácilmente a través de Internet en un formato estándar. Por lo tanto, los archivos **.osm** están codificados en XML y contienen datos geográficos en un formato ordenado y estructurado. Un archivo **.osm** simple se vería así si se visualizara en un editor de texto:   

![Archivo de ejemplo OSM XML][]

Adquirir datos en formato **.osm** es fácil; de hecho, lo hace cada vez que descarga datos en JOSM, pero usar estos archivos para el análisis y el diseño de mapas no es fácil. Por lo tanto, es mejor que convierta los datos a otro formato o que los obtenga de un servicio que convierta los datos para usted.   

> Los datos OSM sin procesar se almacenan normalmente en archivos **.osm**, pero también puede ver archivos que terminan en **.bz2** y **.pbf**. Estos son esencialmente archivos **.osm** que se han comprimido para ahorrar espacio, lo que puede ser extremadamente útil cuando se trabaja con grandes archivos de datos.   

Shapefiles
----------

El **shapefile** es un formato ampliamente utilizado para almacenar datos geográficos vectoriales. Fue desarrollado por ESRI, la empresa que hizo ArcGIS, una popular suite de aplicaciones GIS.   

Los shapefiles son en realidad una colección de varios archivos diferentes. Por ejemplo, un shapefile que contiene datos de construcción puede tener archivos con las siguientes extensiones:   

-	construcciones.**shp**
-	construcciones.**shx**
-	construcciones.**dbf**

Los shapefiles también suelen tener archivos adicionales que contienen otra información.   

Un shapefile debe estar designado para contener solo un tipo de elemento (puntos, líneas o polígonos), y cada elemento tiene sus atributos contenidos en una tabla. A diferencia del sistema OpenStreetMap en el que cada objeto puede tener un número ilimitado de etiquetas, los atributos de los elementos en un shapefile deben encajar en la estructura de tabla definida del shapefile, que podría verse así:   

![Aributos del Shapefile][]

Los datos de OpenStreetMap se pueden convertir en shapefiles. Varios sitios web proporcionan shapefiles convertidos a partir de datos OSM. Estos se tratan en el [capítulo siguiente] (/en/osm-data/getting-data).   

Base de datos
---------

Muchos tipos de información se almacenan en sistemas de bases de datos, que proporcionan una forma lógica de organizar y acceder a los datos. Los datos geográficos no son diferentes, aunque las bases de datos diseñadas para geodatos están especializadas para manejar las funciones complejas que requiere la consulta de datos geográficos.   

Los datos de OpenStreetMap a menudo se almacenan en una base de datos PostgreSQL con extensiones PostGIS. Este tipo de base de datos proporciona un acceso rápido a los datos y se puede utilizar fácilmente con Mapnik, un software que crea las teselas utilizadas en mapas deslizantes web. Hay varias herramientas disponibles para importar datos OSM sin procesar a una base de datos PostgreSQL.   

Otro tipo de base de datos conocida como SQLite, proporciona una funcionalidad similar a una base de datos PostgreSQL, pero se almacena en un solo archivo y no requiere que se ejecute el software de la base de datos. Estas son un poco más difíciles de crear por usted mismo, pero pueden ser más fáciles de trabajar para pequeños conjuntos de datos.  

Resumen
-------

En los siguientes capítulos veremos cómo puede descargar datos en varios formatos desde Internet y cómo puede usar varias herramientas para manipular los datos sin procesar por su cuenta.   


[Sample OSM XML file]: /images/osm-data/example_osm.png
[Shapefile attributes]: /images/osm-data/shapefile_attributes.png