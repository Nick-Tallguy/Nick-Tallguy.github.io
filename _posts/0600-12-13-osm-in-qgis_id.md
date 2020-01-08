---
layout: doc
title: Menggunakan Data OSM di QGIS
permalink: /id/osm-data/osm-in-qgis/
lang: id
category: osm-data
---

Menggunakan Data OSM di QGIS
=================

> Direview 2015-07-19

QGIS (sebelumnya Quantum GIS) adalah sebuah platform SIG yang bersifat open-source. Dengan QGIS Anda dapat mengakses data OSM terbaru kapanpun, memilih tag yang Anda perlukan dan dengan mudah mengekspornya ke dalam database SQLite atau Shapefile.  

Pada bagian ini kami akan memandu langkah-langkah yang diperlukan untuk melakukannya. Kami asumsikan Anda sudah mengunduh dan menginstal QGIS 2.x. Jika Anda belum menginstalnya, Anda dapat mengunduhnya di <http://www.qgis.org/en/site/forusers/download.html>.  

Untuk membuka data OSM di QGIS, kita harus mendapatkan data OSM mentahnya di dalam format **.osm**. Lalu, kita dapat mengubah data ini menjadi database SQLite, yang merupakan sistem database ringan yang disimpan pada satu file. Terakhir, kita akan membuat sebuah layer (atau lebih dari satu layer) yang terdiri dari tipe fitur dan tag yang akan kita akses. Layer ini dapat digunakan di QGIS sebagai database SQLite atau disimpan sebagai format lain, seperti shapefile.  

Mengakses Data OpenStreetMap
---------------------------

Hal pertama yang harus dilakukan adalah mendapatkan data OSM terbaru. Banyak cara untuk mendapatkan data OSM terbaru. Tentu, mengambil data dari OSM server, seperti yang kita lakukan di JOSM Editor, sangat terbatas karena kita tidak dapat mengambil data besar sekaligus - namun, ada beberapa cara untu mengakses data besar,
seperti yang dijelaskan pada bagian sebelumnya di [Mendapatkan Data OSM](/id/osm-data/getting-data) dan [Menggunakan Geofabrik dan HOT Export](/id/osm-data/geofabrik-and-hot-export).  

Untuk tutorial ini kita akan menggunakan fitur download yang sudah ada pada QGIS.  

- Buka QGIS dan klik Vector -> OpenStreetMap -> Download Data...  
- Anda dapat memilih dari beberapa pilihan di sini - jika kanvas peta Anda sudah menampilkan luasan wilayah yang ingin Anda unduh, centang kotak "From map canvas." Jika Anda memiliki sebuah layer yang dibuka di QGIS dengan cakupan wilayah yang sudah sesuai dengan kebutuhan Anda, pilih "From layer" lalu pilih layer yang ingin Anda gunakan. Di sini kita akan memilih "Manual" dan masukkan latitude dan longitude yang akan membentuk sebuah **bounding box** di sekitar area yang	Anda ingin akses. Anda dapat mengisi latitude dan longitude untuk area yang ingin Anda unduh, tapi ingat area tersebut tidak dapat terlalu besar atau Anda tidak akan berhasil mengunduh data OSM nya.  

![bounding box][]

- Tulis nama dan lokasi untuk file output, gunakan format file **.osm** dan klik OK.  
- Akan muncul pemberitahuan ketika proses unduhan telah selesai. Klik "Close" untuk menutup jendela Download.  

![download complete][]

- Data OSM akan disimpan di direktori yang sudah Anda tentukan.  

> This method of accessing OSM data is the same as if you downloaded it in JOSM or on [openstreetmap.org](http://www.openstreetmap.org). For larger extracts that are up-to-date, you may try downloading from the [HOT export site](http://export.hotosm.org) or [bbbike.org](http://extract.bbbike.org/). Remember that if you download a compressed OSM file, you will need to first decompress it into **.osm** format for the next steps.  


Importing Data into SQLite
---------------------------

Next we will need to import our raw **.osm** file into a SQLite Database file.  

- Go to Vector -> OpenStreetMap -> Import Topology from XML...  
- In the first field, select your **.osm** file.  
- You can change the name of the output database file if you like.  
- Keep the box checked next to "Create Connection..."  

![import dialog][]  

- Click OK.  
- When it is finished, click "Close."  


Creating Layers
--------------

Lastly, we will define layers that can be used in QGIS, customized according to our needs.  

- Go to Vector -> OpenStreetMap -> Export Topology to SpatiaLite...  
- In the first field, select the database you created in the previous step.  

![input db file][]  

- Under "Export type," select the type of features you want to create a layer for. Here we will create a layer using polygons.  

![export type][]  

Edit the layer name if you like.  

Under "Exported tags" is where the magic happens. Here we can select which tags will be included in our output layer. This gives us flexibility over exactly which data we want to access.  

- Click "Load from DB" to see a list of all the available tags in the database. Expand the window size by dragging the corner if that helps. You can see all the tags contained in this data, and also the number of features that have each tag.  
- Check the boxes next to the tags that you want to include. Here we will select a few features that will be useful for polygons that represent buildings.  

![export full][]  

When you are finished, click OK.  Close the box. Your layer should be automatically added.  

![cairo polygons][]  

Right-click on the layer and click "Open Attribute Table."  

![open attribute table][]  

You can see here that we have a table which includes only the attributes we selected.  

![attribute table][]  

Note that we have not created a layer of **only** buildings. Instead, we have created a layer that includes all of the polygons from our original data, but only includes the tags which we selected. In order to filter this layer to show only buildings, we would need to execute a query that filters only polygons where building=yes.


Summary
-------

This process makes it easy to get up-to-date OSM data and pull it into QGIS. Once you have layers like this in QGIS, it is possible to save them as shapefiles, execute filters and queries, and so forth. For more detail on these functions see the Help menu in QGIS.  


[bounding box]: /images/osm-data/bounding_box.png
[download complete]: /images/osm-data/download_complete.png
[import dialog]: /images/osm-data/import_dialog.png
[input db file]: /images/osm-data/input_db_file.png
[export type]: /images/osm-data/export_type.png
[export full]: /images/osm-data/export_full.png
[cairo polygons]: /images/osm-data/cairo_polygons.png
[open attribute table]: /images/osm-data/open_attribute_table.png
[attribute table]: /images/osm-data/attribute_table.png
