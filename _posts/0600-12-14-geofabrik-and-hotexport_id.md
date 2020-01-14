---
layout: doc
title: Menggunakan Geofabrik dan HOT Export
permalink: /id/osm-data/geofabrik-and-hot-export/
lang: id
category: osm-data
---

Menggunakan Geofabrik dan HOT Export
================

> Direview 2016-09-05  

Setelah belajar bagaimana menambahkan dan mengedit data OpenStreetMap (OSM), sekarang mungkin Anda ingin mendapatkan data tersebut sebagai cadangan atau ingin memprosesnya menggunakan software SIG yang open source, seperti QGIS ([www.qgis.org](http://www.qgis.org)).  

Memperoleh Data OSM di Situs Geofabrik
-------------------------------------

Data OSM dapat diperoleh secara mudah dengan mengunduhnya dari [http://download.geofabrik.de/openstreetmap/](http://download.geofabrik.de/openstreetmap/)

![download-geofabrik][]

Data dibagi menjadi beberapa region. Indonesia dapat ditemukan di bagian Asia dengan mengklik di sub-region Asia pada tabel berwarna biru, lalu tampilan halaman akan terlihat seperti ini.  

![geofabrik-asia][]

Setelah muncul di bagian atas halaman, lihatlah bagaimana sub-region tadi membaginya menjadi negara-negara di Asia. Untuk mendapatkan datanya, Anda harus mengklik Indonesia dan tampilannya akan seperti ini.  

![geofabrik-indonesia][]

Jika Anda ingin mendapatkan data Indonesia dengan format shapefile (.shp), Anda dapat mengklik tautan indonesia-latest.shp.zip dan file tersebut akan otomatis terunduh. Ada beberapa format yang dapat diunduh. Yang paling sering diunduh adalah file dengan format shapefile (.shp) dengan layer titik, garis dan poligon.  

Anda dapat mengecek kapan data terakhir diperbarui. Harap diingat, server biasanya memperbarui data setiap 24 jam sekali, jadi jika Anda baru saja mengunggah data OSM, data tersebut tidak serta merta muncul ketika Anda mengunduhnya, namun Anda harus menunggu untuk server memperbarui datanya.  

Memperoleh Data OSM menggunakan Situs HOT Export Tool
--------------------------------------

[Humanitarian OpenStreetMap Team](https://www.hotosm.org/) (HOT) menciptakan sebuah website yang memungkinkan pengguna untuk mengunduh data OSM secara kustom dimanapun, dengan memilih area, fitur peta dan format file. Dalam beberapa menit, data OSM terbaru dapat diekspor, difilter dan dikonversi. Bagian ini akan memandu Anda bagaimana cara menggunakan Export Tool. Informasi ini juga dapat dipelajari di ‘[Learn](https://export.hotosm.org/en/v3/learn)’ pada export.hotosm.org.

![hot-export-tool][]

## Panduan Singkat

Siapapun dapat mengekspor data OpenStreetMap menggunakan Export Tool - cukup dengan mendaftarkan sebuah akun. Anda dapat mendaftar menggunakan akun OpenStreetMap yang dibuat di openstreetmap.org dan sebuah alamat email valid yang akan digunakan untuk mengirimkan tautan ekspor setelah prosesnya selesai.

## Menentukan Area

Ada beberapa cara untuk menentukan area yang akan diunduh menggunakan Export Tool. Cara-cara tersebut adalah mencari area di kotak pencarian, memasukkan koordinat dari sebuah kotak, menggambar kotak secara manual, menggambar poligon bebas, menggunakan cakupan area pada tampilan saat ini serta mengunggah file geojson.

![export-tool-create][]

Setelah berhasil login ke HOT Export Tool, tab 'Create' akan tersedia. Pada tab 'Create' ini Anda akan mengatur ekspor, dengan menggambarkannya pada sisi sebelah kiri dan memilih area yang Anda akan unduh pada sisi sebelah kanan Anda. 

![export-tool-describe][]

### Kotak Pencarian
Ada 6 cara untuk menentukan area yang akan diunduh. Cara pertama dan kedua adalah dengan menggunakan kotak pencarian dengan menuliskan nama tempat atau dengan memasukkan koordinat kotak area. Koordinat minimum X, minimum Y, maksimum X dan maksimum Y (Barat, Selatan, Timur, Utara) dari suatu negara dapat ditemukan di [daftar CSV Humanitarian Data Exchange (HDX)](https://data.humdata.org/dataset/bounding-boxes-for-countries).

![export-tool-search][]
![export-tool-coordinates][]


### Melakukan Digitasi pada Batas Area 
Cara ketiga dan keempat untuk menentukan area untuk diunduh menggunakan Export Tool adalah dengan cara menggambar sebuah kotak menggunakan tombol 'Box' di sebelah kanan layar Anda atau menggambar poligon bebas langsung di atas peta menggunakan tombol 'Draw'.

![export-tool-area-bbox][]
![export-tool-area-draw][]


### Upload Poligon
Dua cara terakhir untuk menentukan area yang akan diunduh yaitu menggunakan tombol 'This View' di sebelah kanan layar Anda, yang akan mengambil cakupan area yang saat ini ditampilkan oleh peta, atau dengan menggunakan tombol 'Import' yang memungkinkan Anda untuk mengunggah poligon dari area yang akan diunduh.  

![export-tool-area-view][]
![export-tool-area-import1][]


TFile yang dapat diunggah harus dalam format GeoJSON dalam WGS84. Salah satu cara untuk membuat sebuah file GeoJSON adalah dengan menggunakan website geojson.io. Setelah areanya sudah terseleksi di [geojson.io](http://geojson.io/), salin teks pada kotak di samping kanan, paste teks tersebut ke dalam editor pilihan Anda, seperti [Atom](https://atom.io/) dan simpan sebagai file GeoJSON.

![export-tool-geojson-io][]
![export-tool-geojson-edit1][]


File GeoJSON harus sedikit diedit agar dapat diterima oleh Export Tool. Harap diingat bahwa file tidak dapat berupa multipoligon. File harus memiliki jenis "type:Polygon" dan daftar koordinat dari titik-titik area tersebut. GeoJSON akan berhasil terbaca oleh Export Tool untuk menentukan area ekspor.

![export-tool-geojson-edit2][]
![export-tool-area-import2][]


## Memilih Format File

Alat ini memungkin data OSM diambil melalu Overpass API dalam format file Protocol Buffer Binary (PBF), sebelum memfilter data untuk fitur peta dan tag yang dispesifikasikan oleh pengguna. Setelah data sudah difilter, data akan diubah ke dalam format file yang dipilih pengguna.  

Saat ini, di HOT Export Tool Anda dapat menyimpan data OSM dalam format Shapefile .shp, GeoPackage .gpkg, Garmin .img, Google Earth .kml, OSM .pbf, MAPS.ME .mwm, OsmAnd .obf, dan MBTiles .mbtiles. Setidaknya salah satu format file harus dipilih untuk mengekspor data OSM, namun Anda dapat memilih lebih dari satu jenis format file dengan mencentang lebih dari satu jenis format file.

![export-tool-file-formats][]


### Shapefile .shp
Shapefile adalah format tabular yang diciptakan oleh Esri. Format file ini adalah format yang paling sering digunakan untuk data spasial. Sebuah file shapefile sebenarnya terdiri dari 3-4 file individu, yang pada umumnya digabungkan menjadi satu dalam format ZIP. Shapefile memiliki beberapa batasan, seperti ukuran file maksimal 2 gigabytes (GB) dan nama kolom dengan maksimal 10 karakter. Baca lebih lanjut mengenai [Shapefiles .shp](https://export.hotosm.org/en/v3/learn/export_formats#shp) pada bagian Learn.

![export-tool-shapefile][]


### Geopackage .gpkg
OGC Geopackages menyimpan data geospasial dalam sebuah database SQLite. Geopackages sangat mirip dengan database Spatialite-enabled SQLite. File tersebut dapat digunakan di hampir semua aplikasi SIG. Geopackages mendukung ukuran file yang tak terbatas dan jumlah kolom pada tabel dan mendukung penuh Unicode. Tipe file ini sangat ideal jika Anda ingin menjalankan query SQL untuk data Anda. Baca lebih lanjut mengenai [Geopackages.gpkg](https://export.hotosm.org/en/v3/learn/export_formats#gkpg) pada bagian Learn.

![export-tool-sql][]


### Garmin .img
A .File IMG berisi semua informasi yang diperlukan untuk menerjemahkan peta ke perangkat Garmin GPS. Harap diingat bahwa kartografi dari .img dan pilihan fitur dari peta tidak bergantung pada pemilihan fitur saat menggunakan Export Tool - melainkan menggunakan sebuah gaya kartografi bawaan berdasarkan gaya yang digunakan oleh semua data OSM. Baca lebih lanjut mengenai [Garmin .img](https://export.hotosm.org/en/v3/learn/export_formats#img) pada bagian Learn.

![export-tool-garmin][]


### Google Earth .kml
Keyhole Markup Language (KML) adalah format file berbasis XML untuk modeling untuk titik, garis dan poligon dan atribut terkait secara geografis. Google Earth adalah platform terkenal untum menjelajah permukaan Bumi menggunakan KML, yang juga merupakan alasan mengapa format file ini dikembangkan. Baca lebih lanjut mengenai [Google Earth .kml](https://export.hotosm.org/en/v3/learn/export_formats#kml) pada bagian Learn.

![export-tool-google-earth][]


### OSM .pbf
Format data OSM pada dasarnya adalah sebuah dokumen XML dari nodes, ways dan relations. Protocol Buffer Binary Format (PBF) adalah representasi dari data OSM XML, yang berukuran lebih kecil dan lebih cepat dibaca. Format ini hanya kompatibel dengan alat OSM spesifik, seperti software editor OSM. Setiap .PBF yang diperoleh dari export tool seharusnya sudah lengkap secara referensi - yaitu, tiap node, way atau relation yang tereferensi dari sebuah way atau relation akan muncul di PBF. Pelajari lebih lanjut mengenai [OSM .pbf](https://export.hotosm.org/en/v3/learn/export_formats#pbf) pada bagian Learn.

![export-tool-xml-code][]


### MAPS.ME .mwm
Maps.me adalah sebuah aplikasi peta dan navigasi untuk tablet dan smartphone berbasis Android dan iOS, yang mendukungpeta dan navigasi offline. Baca lebih lanjut [MAPS.ME .mwm](https://export.hotosm.org/en/v3/learn/export_formats#mwm) pada bagian Learn. Untuk menggunakan data ekspor kustom menggunakan Maps.me pada Android, silakan ikuti langkah-langkah berikut:
Buka Maps.me dan navigasikan ke wilayah yang Anda inginkan
Terima permintaan Maps.me dan unduh area tersebut
Tutup Maps.me
Buat sebuah ekspor MWM
Unduh hasil ekspor, unzip dan salin file .mwm ke dalam perangkat Anda
Gunakan Android File Manager untuk menemukan dimana letak file .mwm
Tekan agak lama pada file tersebut dan tekan tombol "salin" atau "potong"
Navigasi ke "MapsWithMe" dan buka folder dengan angka tertinggi (misalnya 170917)
Salin/Pindahkan file .mwm ke direktori dengan menekan tombol "paste"
Hapus file .mwm yang ada untuk wilayah Anda, catat nama file tersebut
Ubah nama file .mwm yang Anda salin dengan nama yang tadi Anda catat (yang file nya baru saja dihapus) dengan menekan agak lama (untuk memilih) dan tekan tombol "more" (3 titik vertikal)
Buka Maps.me

![export-tool-mapsme][]


### OsmAnd .obf
OsmAnd adalah aplikasi peta dan navigasi untuk smartphone dan tablet berbasis Android dan iOS, terutama mendukung render, navigasi dan pencarian offline. Baca lebih lanjut mengenai aplikasi ini dan fitur-fiturnya di [OsmAnd .obf](https://export.hotosm.org/en/v3/learn/export_formats#obf) dari situs web utama mereka. 

![export-tool-osmand][]


### MBTiles .mbtiles
MBTiles adalah sebuah format file untuk menyimpan map tiles dalam sebuah file. Export Tool memungkinkan pengguna untuk membuat MBTiles berisi tiles dari OSM, yang dapat digunakan sebagai sumber konteks offline di dalam aplikasi. Harap diingat bahwa MBTiles akan mengambil semua fitur OSM pada area yang dipilih di Export Tool, dengan tab ‘3 Data’ yang akan otomatis berubah menjadi pilihan sumber berupa dropdown dan rentang perbesaran, tree tag standar dan pilihan YAML. Baca lebih lanjut mengenai [MBTiles .mbtiles](https://export.hotosm.org/en/v3/learn/export_formats#mbtiles) pada bagian Learn.

![export-tool-mbtiles][]


Format file tambahan terus disarankan untuk ditambahkan ke Export Tool. Jika ada format file yang Anda inginkan untuk ditambahkan ke Export Tool, silakan berikan komentar pada repositori [GitHub](https://github.com/hotosm/osm-export-tool/issues). Untuk informasi lebih detail mengenai jenis masing-masing format file, silakan kunjungi halaman ‘File Formats’ pada bagian ‘[Learn](https://export.hotosm.org/en/v3/learn)’ di situs web.



## Customise Map Features

Alat ini memungkinkan pengguna untuk mengkustomisasi data yang dipilih pada area yang telah ditentukan. Data OSM yang didefinisikan menggunakan filter tag dan seleksi key, menggunakan Tag Tree atau YAML. Tag Tree digunakan untuk contoh kasus yang umum, menampilkan sebuah set filter dan seleksi, dimana YAML memungkinkan Anda mengontrol filter dan seleksi, menggunakan filter yang mirip dengan SQL.

![export-tool-treetag-tab][]
![export-tool-yaml-tab][]


OSM adalah database global terbuka dari fitur geografis, dengan tiga tipe elemen:
Nodes/titik, yang merepresentasikan sebuah titik pada permukaan bumi
Ways/garis, yang merupakan kumpulan dari nodes/titik yang membentuk garis atau poligon (garis tertutup)
Relations/relasi, yang merupakan kumpulan nodes/titik, garis atau relasi lainnya

Setiap tipe data dapat memiliki beberapa tag (key dan value). Sebagai contoh, sebuah kantor pos mungkin termasuk tipe data garis dengan tags building=yes dan amenity=post_office. Perhatikan bagaimana tag tersebut dapat didefiniskan di Export Tool dengan menggunakan Tag Tree dan Form YAML untuk melakukan filter data OSM.

### Tag Tree
The Tag Tree is the simplest way to get started selecting features, simply by ticking the desired parent or child checkboxes. Please note that selecting a parent checkbox will add additional key=value tags associated to the theme, as well as the child checkboxes below it. Each parent checkbox has a different query to filter data, so it is highly recommended that the syntax for each theme is explored by hovering over the checkbox, which will provide an info box to the right. 

![export-tool-treetag-sql][]


For example selecting the ‘Emergency’ parent checkbox, will automatically select the ‘Police Station’, ‘Ambulance Station’ and ‘Fire Station’ child checkboxes below it, yet in addition to this it will also select all tags where emergency=yes, amenity=police and amenity=fire_station in the following SQL query:

emergency IS NOT NULL OR amenity IN ('police','fire_station')

The parent checkboxes do not always represent what is available as children below, to try and account for all possible tags associated with a theme. OSM tags are continuously evolving and we want to ensure that the tool can adapt to these changes. Only the most commonly used key=value tags are represented as child checkboxes, and the parent checkboxes are used to try and encompass those not used as frequently, but fall within a theme. If you have suggestions for modifications to these themes and tags, please comment on the [spreadsheet](https://docs.google.com/spreadsheets/d/10e9HrMkAiy0zyLj1l_mfNsAPp0P4Yyh6W7JvnZx6BBA/edit#gid=0) used to populate the Tag Tree, and we will try to incorporate it where appropriate.

![export-tool-treetag-spreadsheet][]


### YAML Form
Using a YAML configuration provides complete control over applying filters to the OSM data, by using a SQL-like filter definition to apply key=value tags. Please note that the Tag Tree also generates syntax on the YAML Form, so any parent and child checkboxes selected will automatically be applied in the YAML box. This acts as a starting point for the query which can be further edited. 

![export-tool-treetag-yaml][]


The use of YAML was chosen due to its simplicity and compatibility with SQL. The YAML feature selection format  is similar to style files used by programs such as osm2pgsql and imposm. It is whitespace sensitive, with each child element indented below its parent element, and preceded by a dash. This dash must have a space after it. Here is a basic example of a feature selection with 3 themes, buildings, waterways and hospitals:

![export-tool-yaml-code1][]


YAML has Themes, and two data structures, Mapping and Lists
Theme in the above example is: buildings
Mappings in the above example are: types and select 
Lists in the above example are: child elements of select and types

YAML: Themes
Themes are the top level keys in the YAML document, with valid characters including letters, numbers and underscores. 

YAML: Geometry Types
The list values under the mapping types can be one or more of ‘- points’, ‘- lines’, ‘- polygons’. If the types key is omitted, all three geometry types will be included in the theme.

YAML: Column Selections
List items under the mapping select key determines the columns for each theme. The following example will populate the ‘name’ and ‘amenity’ columns with their values from OSM:

![export-tool-yaml-code2][]


YAML: Filters
Filters are under the where: key in each theme. They define what subset of OSM features belongs to that theme. The following example will filter the theme to only features where the key natural has the value waterway:

![export-tool-yaml-code3][]


Please note It is almost always necessary to have some kind of filtering, otherwise the theme will simply include all OSM features for the given geometry types. A filter is specified using SQL-like syntax, with valid keywords IS NOT NULL, AND, OR, IN, =, !=.

![export-tool-yaml-code4][]


JOSM Presets
Older versions of the Export Tool used JOSM Preset .XML files to define feature selections. The new version uses YAML as it is more flexible in how it transforms OSM data. The new Export Tool, however can help convert JOSM presets into YAML configurations, by selecting the ‘Load from JOSM Preset .XML’ button. Please note If the preset is more complex, it may need to be written as a new YAML configuration based on the ‘item’ elements contained in the XML.

![export-tool-load-preset][]



### Configurations

YAML configurations can be defined and saved for future use through the ‘Configs’ page. It's useful to create one configuration for a project, which can then used on all exports related to that project. Give the configuration a ‘name’ and ‘description’ that will make it discoverable by other users. Unchecking the ‘Public’ checkbox will make the configuration visible to only the user. 

![export-tool-configuration-saved][]


Please note that configurations can be edited, which is useful for evolving a feature selection during the course of a project. Saved YAML configurations can be selected via the ‘Stored Configuration’ option on the ‘3 Data’  tab when creating an export. Use the Search bar to find configurations related to your project.

![export-tool-configuration-stored][]


For further detailed information regarding feature selections and YAML, please visit the ‘Selecting Features’ and ‘YAML Specification’ in the ‘[Learn](https://export.hotosm.org/en/v3/learn)’ section on the tool website. 




[download-geofabrik]: /images/osm-data/download-geofabrik.png
[geofabrik-asia]: /images/osm-data/geofabrik-asia.png
[geofabrik-indonesia]: /images/osm-data/geofabrik-indonesia.png
[hot-export-tool]: /images/osm-data/hot-export-tool.png
[export-tool-create]: /images/osm-data/export-tool-create.png
[export-tool-describe]: /images/osm-data/export-tool-describe.png
[export-tool-search]: /images/osm-data/export-tool-search.png
[export-tool-coordinates]: /images/osm-data/export-tool-coordinates.png
[export-tool-area-bbox]: /images/osm-data/export-tool-area-bbox.png
[export-tool-area-draw]: /images/osm-data/export-tool-area-draw.png
[export-tool-area-view]: /images/osm-data/export-tool-area-view.png
[export-tool-area-import1]: /images/osm-data/export-tool-area-import1.png
[export-tool-geojson-io]: /images/osm-data/export-tool-geojson-io.png
[export-tool-geojson-edit1]: /images/osm-data/export-tool-geojson-edit1.png
[export-tool-geojson-edit2]: /images/osm-data/export-tool-geojson-edit2.png
[export-tool-area-import2]: /images/osm-data/export-tool-area-import2.png
[export-tool-file-formats]: /images/osm-data/export-tool-file-formats.png
[export-tool-shapefile]: /images/osm-data/export-tool-shapefile.png
[export-tool-sql]: /images/osm-data/export-tool-sql.png
[export-tool-garmin]: /images/osm-data/export-tool-garmin.jpg
[export-tool-google-earth]: /images/osm-data/export-tool-google-earth.jpg
[export-tool-xml-code]: /images/osm-data/export-tool-xml-code.png
[export-tool-mapsme]: /images/osm-data/export-tool-mapsme.png
[export-tool-osmand]: /images/osm-data/export-tool-osmand.png
[export-tool-mbtiles]: /images/osm-data/export-tool-mbtiles.jpg
[export-tool-treetag-tab]: /images/osm-data/export-tool-treetag-tab.png
[export-tool-yaml-tab]: /images/osm-data/export-tool-yaml-tab.png
[export-tool-treetag-sql]: /images/osm-data/export-tool-treetag-sql.png
[export-tool-treetag-spreadsheet]: /images/osm-data/export-tool-treetag-spreadsheet.png
[export-tool-treetag-yaml]: /images/osm-data/export-tool-treetag-yaml.png
[export-tool-yaml-code1]: /images/osm-data/export-tool-yaml-code1.png
[export-tool-yaml-code2]: /images/osm-data/export-tool-yaml-code2.png
[export-tool-yaml-code3]: /images/osm-data/export-tool-yaml-code3.png
[export-tool-yaml-code4]: /images/osm-data/export-tool-yaml-code4.png
[export-tool-load-preset]: /images/osm-data/export-tool-load-preset.png
[export-tool-configuration-saved]: /images/osm-data/export-tool-configuration-saved.png
[export-tool-configuration-stored]: /images/osm-data/export-tool-configuration-stored.png




