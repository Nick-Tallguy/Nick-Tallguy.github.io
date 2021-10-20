---
layout: doc
title: Complemento Opendata - datos de una hoja de cálculo
permalink: /en/josm/opendata-plugin/
lang: en
category: josm
---

Complemento OpenData - usar datos de una hoja de cálculo
============


- TDC
{:toc}

Esta guía describe cómo añadir datos a OpenStreetMap que pueden estar en forma de hoja de cálculo, probablemente obtenidos por un estudio de campo utilizando una herramienta como ODK collect o Kobo collect. 

**Nota: si los datos que piensas añadir a OpenStreetMap se pueden denominar "importación", debes consultar la página [Wiki Importar Guías de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Import/Guidelines). En caso de duda, lo mejor es consultar primero**.


Instalar el Complemento Opendata
--------------------------

Si aún no lo ha hecho, instale este complemento siguiendo las instrucciones en [Complementos JOSM](/es/josm/josm-plugins). 

![Opendata][]

Una vez instalado, puede hacer clic en ![Preferencias Opendata][]   
para acceder a cualquiera de los módulos más específicos.  

![Opendata modules][]

Esta guía está utilizando la funcionalidad básica, y no se está cargando ningún módulo.

Preparar la hoja de cálculo  
-------------------------

La página wiki en <https://wiki.openstreetmap.org/wiki/JOSM/Plugins/OpenData> proporciona información más detallada sobre los formatos que se pueden utilizar. Para nuestros propósitos estamos asumiendo que la hoja de cálculo ha sido descargada y pasada a nosotros en la propiedad **.xlsx** que no se cargará en el complemento de opendata. 

- Abra la hoja de cálculo en un programa de código abierto como LibreOffice, que está disponible para la mayoría de los sistemas operativos <http://www.libreoffice.org/>, 
- y luego guárdela en un formato de código abierto. Nuestra hoja de cálculo que era **tiendas.xlsx** se convierte en **tiendas.ods**. 

Aunque ahora es posible cargar la hoja de cálculo en josm, es mejor realizar otras modificaciones para facilitar el proceso antes de hacerlo. 

### latitud & longitud

El complemento Opendata es muy bueno para extraer la latitud y la longitud de las hojas de cálculo, pero si tiene alguna duda es mejor que cambie los títulos de las columnas a un formato más sencillo; 

![latitude longitude][]

se vuelve;

![latitude longitude corrected][]

### Llave y Valor

#### La etiqueta nombre

Nuestro objetivo ahora es modificar la hoja de cálculo para que la información tenga el formato esperado por OpenStreetMap. Los encabezamientos de las columnas serán los valores **Key**, y los datos de la hoja de cálculo se convertirán en el elemento **Value**. Para nuestra hoja de cálculo simple, modifique el encabezamiento de la primera columna de **Name_of_the_shop** a **name**. Utilizando el formato clave=valor, nuestra primera línea de la hoja de cálculo se convierte ahora en 
**name=Tony's Supermarket**

Si su hoja de cálculo tiene más de un nombre, como un **local name** o un **official name**, consulte la página wiki en <https://wiki.openstreetmap.org/wiki/Names> que enumera muchas alternativas posibles para que sus actualizaciones en OpenStreetMap puedan contener todos los nombres que probablemente se utilicen o busquen. 

#### Columnas sin un encabezado

Si elimina el encabezado de una columna, pero mantiene los datos debajo de ella, entonces los datos quedan efectivamente ocultos para JOSM. 

![opendata 1][]

#### Columnas con datos de diferentes claves

![opendata mixed][]

La persona que diseña la encuesta y la que la lleva a cabo no suelen conocer las etiquetas y los valores que han evolucionado en OpenStreetMap. La columna **shop** de mi hoja de cálculo contiene en realidad datos de dos etiquetas diferentes, y la hoja de cálculo deberá modificarse. El título de la columna **Tipe of shop** puede cambiarse por **shop**, para los siguientes datos; 
shop=supermarket 
shop=convenience 
shop=hairdresser 

pero **restaurant** y **fast_food** son de la clave **amenity**.

Hay que insertar una nueva columna con el título **amenity**, y mover los datos, de modo que nuestra hoja de cálculo tenga ahora este aspecto; 

![opendata shop amenity][]

#### sub etiquetas

El encabezado de la columna **Does_the_shop_have_toilet_faci** se ha abreviado durante el proceso de encuesta, y originalmente decía **Does the shop have toilet facilities?**. 

Aunque existe una etiqueta independiente para los baños, que suele añadirse a un nodo dentro de un edificio, en realidad se refiere a los baños accesibles al público. Si realizamos nuestro propio estudio, sabemos exactamente lo que se pretendía con la pregunta y la respuesta, pero si se trata de información que nos han pasado, probablemente habrá que consultar lo que se pretendía. También es muy útil poder cargar las preguntas del estudio en un teléfono y realizar un "simulacro" de estudio para poder ver la disposición de las preguntas. Es necesario leer detenidamente la página wiki en <https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets> y estudiar la encuesta original antes de modificar la hoja de cálculo. En particular, la entrada de la wiki contiene la información 

- *Por favor, no utilice toilet=yes (singular). En general, se ruega que no se mapeen los baños que no son inaccesibles al público. Muchos edificios tienen baños en su interior para los trabajadores o los propietarios, pero su mapeo podría crear conflictos innecesarios o expectativas poco realistas. Utiliza toilets=no para los lugares en los que podrías esperar encontrar un baño utilizable (por ejemplo, una estación de tren o el inicio de un sendero) en los que no hay baños públicos disponibles.* 

Siguiendo los consejos de la wiki lo mejor posible, mi hoja de cálculo modificada para la información sobre los baños dice ahora; 

![opendata toilets][]


He borrado el encabezado de varias columnas para que los datos no sean visibles cuando realice la edición en JOSM. 

Loading the spreadsheet into JOSM
---------------------------------

Click on ![josm open][], navigate to where your spreadsheet is saved, and open it within JOSM.  

![opendata pop up][]  

A pop-up will possibly appear asking you to confirm the 'projection method' used when collecting the data. The Opendata plugin will attempt to calculate the 'projection method' used and will present this as the most likely option. Unless this has been altered in the settings by the surveyor, accepting the suggested projection but then checking when editing that the points created are appearing in likely locations is a sensible choice.  

![opendata spreadsheet loaded][]

Congratulations! You've done all the hard work and you're nearly ready to update OpenStreetMap with your nice new survey data. 

Using the ToDo plugin
----------------------

Within JOSM select all of the items added by your spreadsheet, either by;  

- scroll out until all are visible, then drag your mouse from top left to bottom right while holding the left mouse button down, or  
- use **Ctrl+f** to carry out a search - I searched on **name** as this appears in all 5 of my surveys.  

make sure you have selected all of your surveys - there are five surveys in my spreadsheet and I need to have 5 objects selected.  

![5 selected][]

On the ToDo plugin panel, click on **Add**.  

![opendata todo add][]

and the list of items to add should appear in the panel.  

![opendata todo loaded][]

Load OpenStreetMap data as a separate layer
-------------------------------------------

Double click on the top item in your ToDo list, which will centre it in your editing panel, and click on the download ![download][] icon.

When the download dialog window appears, ensure you place a tick in ![download new layer][] (bottom left on the next screenshot) so that your OSM data does not download into your spreadsheet data.

![download dialog][]


Compare the data between the layers
------------------------------------

Ensure you carefully check the data held in your spreadsheet against the existing data already in OpenStreetMap. There are ways of copying tags, or parts of tags (Look through the **Tools** and **More Tools** menu's of JOSM, or read the earlier chapters within LearnOSM) between the layers. In many cases you will be merging new data with existing data. Carefully check the data, if necessary checking the history and source for the different features - it's always possible the data within OpenStreetMap is more recent or more accurate than your spreadsheet data.  

When you have updated the information from one line of the spreadsheet, use the **Mark** button of the ToDo plugin to move onto the next item - you may have to download more OSM data if the next item is outside the area already downloaded.  


[Datos abiertos]: /images/josm/opendata-plugin.png
[Preferencias de datos abiertos]: /images/josm/opendata-preferences.png
[Módulos datos abiertos]: /images/josm/opendata-modules.png
[latitud longitud]: /images/josm/opendata-latitude-longitude.png
[latitud longitud corregida]: /images/josm/opendata-latitude-longitude-corrected.png
[opendata 1]: /images/josm/opendata-1.png
[opendata mixed]: /images/josm/opendata-mixed.png
[opendata shop amenity]: /images/josm/opendata-shop-amenity.png
[opendata toilets]: /images/josm/opendata-toilets.png
[josm abrir]: /images/josm/josm_open-file.png
[opendata pop up]: /images/josm/opendata-wgs84-popup.png
[opendata spreadsheet loaded]: /images/josm/opendata-spreadsheet-loaded.png
[5 seleccionada]: /images/josm/opendata-5-selected.png
[opendata todo add]: /images/josm/opendata-todo-add.png
[opendata todo loaded]: /images/josm/opendata-todo-loaded.png
[descargar]: /images/josm/josm-download-button.png
[diálogo de descarga]: /images/josm/josm_download-dialog.png
[descargar nueva capa]: /images/josm/download-as-new-layer.png

