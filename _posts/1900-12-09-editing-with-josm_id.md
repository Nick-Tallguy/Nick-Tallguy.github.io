---
layout: doc
title: Mengedit Data Lapangan
permalink: /id/josm/editing-with-josm/
lang: id
category: josm
---

Mengedit Data Lapangan
==================

> Direview 2015-07-13  

We've now covered all the building blocks of mapping with OpenStreetMap.
Dalam bab [Memetakan Menggunakan Smartphone, GPS atau Kertas](/id/mobile-mapping/) Anda dapat melihat bagaimana menggunakan perangkat mobile untuk melakukan survey di sebuah area.  

Pada bab ini, kita akan kembali ke JOSM dan mempelajari beberapa fitur baru
yang belum pernah dipelajari sejauh ini.

Layer JOSM
-----------
If you've followed along so far, you may have noticed that we can add all sorts
of different things into JOSM. We can download OSM data, add Bing satellite imagery,
load GPS tracks and waypoints, and add Field Papers - all of which are displayed
in the map window of JOSM.

Anda mungkin menyadari setiap Anda menambahkan sesuatu yang baru ke dalam JOSM, sebuah
layer akan ditambahkan ke panel Layers di sisi kanan JOSM. Tergantung dari apa yang Anda sudah
buka, panel Layers Anda kurang lebih akan terlihat seperti ini:

![Layers panel][]

Setiap layer pada daftar layer ini merepresentasikan sumber data berbeda
yang sudah Anda buka di jendela peta Anda. Pada contoh ini, “Data Layer
1” adalah layer dimana data OpenStreetMap yang kita sedang edit. "Field Papers” adalah
layer yang dibuat ketika kita menambahkan Field Paper ke dalam JOSM.

Jika Anda menambahkan citra satelit Bing, sebuah layer baru akan muncul pada panel Layers panel bernama "Bing Sat."

The idea of layers can often be hard to understand. A good way to imagine it is that each
layer is like a semi-transparent piece of paper, and they are all stacked on top of one
another. Each piece of paper has a certain type of information on it, and they can be rearranged
any way you like.

Layer yang digunakan sebagai acuan seperti citra satelit, trek GPS dan Field Papers
yang sering disebut "base layers." Data layer OSM adalah layer yang Anda kerjakan.

-   Untuk memindahkan sebuah layer, klik pada layer yang ingin dipindahkan dan klik pada panah ke atas
    atau ke bawah untuk memindahkannya.

![Layers up down][]

-  Untuk menyembunyikan sebuah layer, pilih layernya menggunakan mouse dan
    klik tombol Show/Hide:

![Layers show hide][]

-  Anda dapat melihat layer yang Anda pilih hilang dari peta.
    Klik Show/Hide lagi dan layer tersebut akan muncul kembali.
-  Anda dapat menghapus layer dengan memilih layer tersebut dan menggunakan tombol
    delete:

![Layers delete][]

-  Terakhir, penting untuk diketahui bahwa Anda hanya dapat mengedit layer yang
    dianggap *active* oleh JOSM. Jika Anda tidak dapat mengedit peta di
    jendela peta Anda, kemungkinan karena Anda tidak memiliki layer
    yang dimaksud dalam keadaan aktif. Sebagian besar layer, seperti titik GPS, Field
    Papers dan citra satelit tidak dapat diedit. Satu-satunya layer yang
    dapat diedit adalah data dari OpenStreetMap, yang biasanya bernama
    “Data Layer 1”.
-  Untuk membuat sebuah layer aktif, pilih layer tersebut pada panel Layers dan klik pada
    tombol Activate:

![Layers activate][]


Menggunakan Data GPS Data dan Field Papers
-------------------------------
Pada bab [Memetakan Menggunakan Smartphone, GPS atau Paper](/id/mobile-mapping/) kita melihat bagaimana mengumpulkan data menggunakan GPS
dan Field Papers serta bagaimana cara membukanya di JOSM sebagai sebuah layer.

Setelah Anda selesai survey menggunakan salah satu alat tersebut, Anda masih membutuhkan
untuk menambahkan informasi ke dalam OpenStreetMap secara digital.

Anda dapat melakukannya seperti pada proses yang sudah dipelajari sebelumnya - **unduh,
edit, simpan**. Perbedaannya adalah selain hanya menggunakan citra satelit
sebagai layer dasar, Anda juga dapat menggunakan data GPS Anda, Field Papers,
catatan atau kombinasi dari semuanya.

-   Misalnya, asumsikan Anda memiliki waypoints GPS sebagai latar belakang
    di JOSM, Anda menyimpan sebuah titik bernama 030 dan
    Anda menulis di buku catatan bahwa titik 030 adalah sebuah sekolah. Untuk menambahkan titik ini
    ke dalam OpenStreetMap, klik draw tool dan
    klik dua kali di atas titik 030 pada kanvas peta. Sebuah titik
    akan tergambar. Lalu klik menu Presets dan cari preset untuk
    sekolah. Masukkan nama sekolah dan klik “Apply Preset”. Lakukan
    hal yang sama untuk menambahkan garis dan poligon.

![GPS in JOSM][]

Tag
----
Ketika Anda menggambar sebuah titik, garis atau poligon, objek tersebut memiliki lokasi, namun tidak
memiliki informasi mengenai apa objek tersebut. Dengan kata lain, kita mengetahui **dimana** objek tersebut
berada, namun tidak mengetahui **apa** objek tersebut. Sebelumnya, kita sudah menggunakan pilihan
dari menu Presets untuk mendefinisi **apa** objek itu. Cara
OpenStreetMap mengetahui **apa** objek itu dengan menggunakan **tags**.

Tag merupakan semacam label yang Anda dapat berikan ke sebuah objek. Misalnya, jika
kita menggambar sebuah kotak, itu hanyalah sebuah kotak. Namun jika kita menambahkan atribut ke
kotak tersebut yang menggambarkan apa kotak tersebut: kotak ini adalah sebuah bangunan; nama
bangunan ini adalah “Menara Thamrin”; bangunan ini memiliki 16 lantai.

Anda dapat menambahkan tag sebanyak yang Anda inginkan. Tag disimpan sebagai
sepasang teks yang disebut **keys** dan **values**. Dalam
OpenStreetMap, tag tersebut di atas akan menjadi:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

If you select an object in JOSM, you can see all the tags that are
attached to it in the Properties panel on the right.

![Properties panel][]

### Editing Tags
You can add, edit, and delete tags from the Properties panel. However, the tags
are traditionally in English and can sometimes be confusing, so it
is often easier to use the Presets menu. When you add or change tags, the attributes
of the object are changed.

-   To edit an object's tags, first select it.
-   Then edit the tags in one of two ways: (1) Use the Presets menu,
    or (2) edit the tags directly in the Properties window on the right. 

### Common Mistake: Tagging nodes when you want to tag lines or polygons
When you are editing the attributes of a point, you will first select
the point and then add tags either through the Presets menu or directly
in the Properties panel. A common mistake is when adding attributes to a
line or a shape. When selecting the object, it is important that you
select the line, and NOT the points that make up the line.

This frequently occurs because editors use the JOSM select tool to draw a
box around an object, which causes everything, both the line **and** the nodes
to be selected, and when you add tags they are applied to the nodes
as well. Be sure to **only** select lines when you want to add tags
to them.

![Nodes mistake][]

Saving OSM files
----------------
When you are editing in JOSM, it is always a good idea to download, edit, and
upload changes in a reasonably short period of time. You do not want to download
data one day, and then wait until a few days later to upload your edits. What if
someone else edits the same area during that time? This will cause errors and conflicts.

Don't be afraid to upload your edits frequently. This ensures that your changes will
be saved to the database and you will not lose your hard work.

If you are working in a single area, it's a good idea to download the map data
every time you want to edit, in case another user has made changes.

Although you should always try to download OSM data when you are ready to edit,
and upload your changes frequently, there may be cases in which you want to save
the OSM data on your computer. For example, if you have intermittent connectivity
to the internet, you may wish to download data, save it, edit, and then upload your
changes later on.

-  To save an OSM file, make sure that it is the active layer in the
    the Layers panel. Click “File” on the top menu, and click “Save”.
    Choose a location for the file and give it a name. You can also save
    by clicking this button:

![JOSM save button][]

-  You can now close JOSM and your data will be saved. When you want to
    open the file again, simply open JOSM, go to the “File” menu, and
    click “Open...”

Summary
-------
In this chapter we looked a little bit closer at the JOSM interface and learned
about layers and tags. You should now have a solid footing in how to map and how
to edit OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png