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

Jika Anda memilih sebuah objek di JOSM, Anda dapat melihat semua tag yang
dimiliki objek tersebut pada panel Properties di sebelah kanan.

![Properties panel][]

### Mengubah Tag
Anda dapat menambahkan, mengedit dan menghapus tag dari panel Properties. Namun, tag
formatnya bahasa Inggris dan terkadang dapat membingungkan, jadi
gunakan menu Presets untuk memudahkan Anda menemukan tag yang dimaksud. Ketika Anda menambahkan atau mengubah tag, atribut
dari objek juga berubah.

-   Untuk mengubah tag dari sebuah objek, pertama pilih objek tersebut.
-   Lalu edit tag menggunakan salah satu cara berikut: (1) Gunakan menu Presets,
    atau (2) ubah tag secara langsung pada jendela Properties di sisi kanan. 

### Kesalahan Umum: Menambahkan tag pada titik ketika Anda ingin menambahkan tag pada garis atau poligon
Ketika Anda mengedit atribut dari sebuah titik, pertama-tama Anda pilih dulu
titiknya lalu tambahkan tag melalui menu Presets atau langsung
tambahkan pada panel Properties. Sebuah kesalahan umum yang sering terjadi adalah ketika menambahkan atribut pada sebuah
garis atau sebuah poligon. Ketika memilih objeknya, pastikan Anda
memilih garisnya dan BUKAN titik yang menghubungkan garis tersebut.

Hal ini sering terjadi karena para kontrinutor menggunakan tool select pada JOSM untuk menggambar sebuah
objek, yang menyebabkan baik garis **dan** titik
terpilih dan ketika Anda menambahkan tag, tag tersebut juga akan diberikan pada titiknya
Pastikan untuk **hanya** memilih garis ketika Anda ingin menambahkan tag
pada garis.

![Nodes mistake][]

Menyimpan file OSM
----------------
Ketika Anda mengedit di JOSM, sebaiknya Anda mengunduh data, mengedit dan
mengunggah perubahan secara berkala. Anda sebaiknya tidak mengunduh data
di satu hari dan menunggu beberapa hari untuk mengunggah perubahan yang Anda buat. Bagaimana jika
orang lain mengedit area yang sama pada saat itu? Hal ini akan menimbulkan error dan konflik.

Jangan takut untuk mengunggah perubahan Anda secara berkala. Hal ini untuk memastikan perubahan Anda akan
disimpan ke database dan Anda tidak akan kehilangan perubahan yang sudah Anda buat.

Jika Anda bekerja di suatu area, sebaiknya unduh data peta
setiap Anda ingin mengedit, jika saja ada pengguna lain yang melakukan perubahan pada area yang sama.

Anda sebaiknya mengunduh data OSM ketika Anda siap untuk mengedit
dan mengunggah perubahan secara berkala, mungkin ada saatnya ketika Anda ingin menyimpan
data OSM pada komputer Anda. Misalnya, jika Anda memiliki koneksi
internet yang tidak stabil, Anda mungkin dapat mengunduh data, menyimpan data, mengedit data dan mengunggah perubahan Anda
nanti.

-  Untuk menyimpan file OSM, pastikan file OSM tersebut adalah layer yang sedang aktif
    pada layer Layers. Klik “File” pada menu di atas dan klik “Save”.
    Pilih direktori tempat Anda ingin menyimpan file dan berikan nama untuk file tersebut. Anda juga dapat menyimpan
    dengan mengklik tombol ini:

![JOSM save button][]

-  Anda sekarang dapat menutup JOSM dan data Anda akan disimpan. Ketika Anda ingin
    membuka file itu lagi, buka JOSM, pergi ke menu “File” dan
    klik “Open...”

Rangkuman
-------
Pada bab ini kita melihat lebih dekat pada tampilan antarmuka JOSM dan belajar
mengenai layer dan tag. Anda sekarang sudah memiliki pengetahuan yang cukup bagaimana cara memetakan dan bagaimana
mengedit OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png