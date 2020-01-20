---
layout: doc
title: OSMTracker
permalink: /id/mobile-mapping/osmtracker/
lang: id
category: mobile-mapping
---

OSMTracker
==============

> Direview 2016-02-08
  
**Artikel ini berhubungan dengan OSMTracker untuk Android - ada aplikasi yang serupa untuk windows mobile.**  
OSMTracker memungkinkan Anda merekam trek gpx perjalanan Anda, dengan kumpulan 'waypoints' yang dapat ditambahkan ketika merekam perjalanan. Perekaman suara, pengambilan foto atau catatan dapat juga ditambahkan ketika merekam perjalanan dan semua akan tergeolokasi.

Quick Start
-----------

![OSMTracker_1][]  

1.  Klik pada tanda tambah untuk membuat trek baru.  
2.  Layar akan berubah menjadi tombol-tombol - tunggu sampai warnanya tidak lagi abu-abu, yang mengindikasikan bahwa sinyal GPS sudah ditangkap oleh perangkat.  
3.  Mulai lakukan perjalanan, ketika menemui objek yang akan dipetakan, tandai dengan menekan tombol yang sesuai. Anda juga dapat membuat rekaman suara, mengambil foto dan mengambil catatan menggunakan tombol yang tersedia.  
4.  Setelah selesai melakukan perekaman perjalanan Anda, simpan trek dan waypoint Anda dengan menekan ikon disket.  
5.  Untuk mengkonversi trek menjadi format file gpx, tekan dan tahan pada trek tersebut di daftar trek, lalu pilih opsi Export to GPX.  
6.  Salin trek, gambar dan rekaman ke komputer Anda dan gunakan file tersebut sebagai acuan untuk memperbarui data OSM.  


Instal OSMTracker
-------------------------

Instal OSMTracker dari [Google play Store](https://play.google.com/store/apps/details?id=me.guillaumin.android.osmtracker).  
![OSMTracker Logo][]  
Package [aplikasi terbaru](https://drive.google.com/folderview?id=0BxxhTXmYjyeSSjg1MFhJWnJLams#list) dapat diunduh dari sumber lain selain Google play Store jika diperlukan.  


Konfigurasi OSMTracker
------------------------

Buka OSMTracker dan tekan ikon menu pada perangkat Android Anda lalu pilih **Settings**.  

-  **Voice record duration** - your choice, but 30 seconds is used by the author.  
-  **Enable sound** - direkomendasikan untuk mencentang kotak ini - memunculkan notifikasi suara untuk menandakan ketika memulai dan mengakhiri perekaman suara.  
-  **Reset  authentication**. Tombol ini akan berwarna abu-abu sampai Anda mengunggah .gpx file dan mengizinkan OSMTracker untuk mengunggah trek ke akun OpenStreetMap Anda.  
-  **GPS settings** Metode mana yang perangkat Android Anda gunakan untuk menentukan lokasi. Direkomendasikan untuk memilih **High accuracy** dan perangkat Anda akan menggunakan GPS, Wi-Fi dan jaringan seluler untuk mengestimasi lokasi.  
-  **Check GPS at startup** Ketika Anda membuka OSMTracker, jika GPS dalam keadaan nonaktif, aplikasi ini akan meminta Anda untuk mengaktifkannya.
-  **Ignore GPS clock** Jika kotak ini dicentang, waktu yang digunakan adalah waktu dari jam internal perangkat daripada waktu yang disediakan oleh sinyal GPS.  
-  **GPS logging interval** Pilih periode perekaman posisi - untuk akurasi terbaik pilih 0 atau 1, aplikasi akan merekam trek tiap detik periode perekaman yang dipilih.  

> Frekuensi ini berdampak pada penggunaan baterai, namun ketika menggunakan aplikasi ini, layar Anda biasanya akan selalu menyala, GPS selalu bekerja dan Anda juga mungkin mengambil beberapa foto dan rekaman - semua ini akan menguras daya smartphone Anda sehingga baterai cepat habis dan direkomendasikan untuk menggunakan alat tambahan untuk mengisi daya (power bank) saat merekam perjalanan Anda.  

-  **External storage (SD) directory** Direktori bawaan adalah /osmtracker  

> Perangkat Android terbaru tidak memperbolehkan Anda untuk menyimpan data di eksternal microSD atau SD card. Meskipun diatur ke 'external storage' trek dan lainnya akan disimpan di **/storage/emulated/0/osmtracker.**  

-  **One directory per track** Direkomendasikan karena semua rekaman suara, foto, catatan dan trek gpx disimpan di folder yang sama, dengan nama waktu dan tanggal saat trek diambil.  
-  **Filename for named tracks** Pilihan untuk Anda mengatur nama file sesuai preferensi Anda.  
-  **Accuracy in GPX file** Direkomendasikan - nama waypoint akan terdapat angka perkiraan error yang mungkin terjadi dalam satuan meter. Misalnya *Footpath (4.0m)*. Informasi ini akan sangat berguna ketika digunakan untuk memperbarui data OSM dan ketika memutuskan apakah sebuah objek harus disesuaikan dengan waypoints atau tidak.  
-  **Use HDOP approximation** Berhubungan dengan perhitungan tambahan untuk meningkatkan akurasi posisi (Horizontal Dilution of Precision).  
-  **Export Compass Heading** Mendefinisikan jika dan bagaimana data kompas harus diekspor ke file GPX.  
-  **Default photo source** Pada umumnya Anda akan mengambil foto menggunakan kamera melalui aplikasi ini, tapi Anda dapat menggunakan foto yang sudah ada di handphone Anda.  
-  **Screen always on** Pilih opsi ini jika Anda seringkali menekan tombol, mengambil foto atau merekam suara - jika tidak, biarkan kotak tidak dicentang sehingga Anda dapat menyala-matikan layar ketika Anda membutuhkan, yang akan menghemat baterai.  
-  **Main screen graphic theme** Pilihan untuk mengubah kontras dan kecerahan layar jika Anda kesulitan melihat tombol saat merekam trek perjalanan.  
-  **Button Presets** Anda dapat mendesain dan menginstal set tombol sendiri dan memilihnya sebagai tampilan pada aplikasi dengan memilih opsi ini. Untuk deskripsi lengkap dari fungsi ini, [lihat di bawah](/id/mobile-mapping/osmtracker/#button-presets).   
-  **Background map** Dengan menekan dan menahan pada trek yang sudah direkam, jika fitur ini dipilih, Anda dapat menampilkan trek dan aplikasi akan mengunduh data OpenStreetMap sebagai peta latar belakang.  

> Untuk mengunduh data peta dibutuhkan koneksi internet. Anda tidak wajib untuk menggunakan fitur ini kecuali jika Anda memang ingin menggunakannya.  

-  **Map Tile Provider** Jika Anda memilih untuk mengunduh data peta sebagai latar belakang ketika menampilkan petanya, Anda dapat memilih versi peta mana untuk digunakan sebagai latar belakang.  
-  **Orientation**  Apakah Anda ingin layar dapat berotasi secara otomatis, atau ingin layar landscape atau portrait?  

Daftar Trek
--------------

![OSMTracker_2][]  
Having carried out your initial survey, clicking buttons, creating voice recordings and taking photographs, when you have finished, click on the floppy disk icon to end your track. Now press and hold the track in the list & options become available:  

-  **Resume Tracking** useful when you realise you've missed a bit!  
-  **Display** will show the track, possibly with a background map depending on your data connection and the option you selected in **Background Map**.  
-  **Export as GPX** - necessary for the track and waypoints to be used in an editing programme.  
-  **Upload to OpenStreetMap** Use this option to upload your trace to OpenStreetMap - you will need to have an OpenStreetMap account ([How to obtain explained here](/en/beginner/start-osm/)), and will need to authorise this app to upload traces to your account. See [GPS Traces - gpx files below](/en/mobile-mapping/osmtracker/#gps-traces--gpx-files) for more information on why these traces are so important to OpenStreetMap.  

> **Caution, do not delete your track yet.** You have only uploaded the basic trace and not the waypoints, photographs etc. Retain everything until it is transferred to a computer for editing purposes.  

-  **Delete**. Self explanatory.  


Button Presets
--------------

If you will be surveying for a particular reason, and the waypoint label you require is not available, you can create your own set of button presets prior to your surveying trip, load them into the phone and select them whilst surveying as & when you need them - several can be loaded in the phone & you may switch between them without stopping your recording. As the label you create is in the form of a personal note, it does not need to conform to the tags used within OpenStreetMap, and will not be uploaded to it. For instance, you may choose to have buttons labelled;  

- 1 family,  
- 2 families,  
- 3 families,  
- 4 families,  
- chiefs house,  
- 20% damaged,  
- 40% damaged,  
- 60% damaged,  
- 80% damaged,  
- destroyed,  
- unsuitable for lorry,  
- 4wd needed,  
- etc..  

For a full description on creating a button preset, see the [OSMTracker wiki section](https://github.com/nguillaumin/osmtracker-android/wiki/Custom-buttons-layouts). This is a [sample download file.](/files/R_of_Way.xml)  

![OSMTracker button presets][]  


Voice recordings, photograph & text image sizes  
-----------------------------------------------  

![OSMTracker recorded file sizes][]  

If file transfer at a later stage is an issue, be aware of the file sizes involved - as the screenshot shows photographs are very memory intensive compared to the gpx file or a 10 second voice recording.  


GPS Traces - gpx files
----------------------  

![OSMTracker JOSM][]  

GPS traces in the form of gpx files are made up of a number of elements, principally a 'trace' and 'waypoints'. The screenshot above shows a folder contents created in OSMTracker which has been loaded into JOSM ready for editing, with satellite imagery loaded to assist. The square icon in the centre of the trace indicates there is a photograph, taken at this location, available - simply click on the square icon to display the photograph.  

If you are navigating and using a GPS to give you directions, you will notice at some point that it will 'recalculate'. This is normally because its internal GPS location does not correspond to where it expects the road or path to be - there is a margin of error, but it is easy for roads and paths to be created in slightly the wrong place, or for the road to be moved after the map data has been created.  
Volunteers updating OpenStreetMap can download all of the traces that have been uploaded in an area, and use them to:  

1. Trace roads & paths through areas that could not be seen with satellite imagery because of clouds, trees, shadows, buildings etc..  
2. Adjust the satellite imagery so that it aligns correctly - there can be a surprising variation with some imagery.  

Although a single gpx trace is very useful, it may not be particularly accurate and can be as much as 30 metres out of place. When there are several traces, the correct route of the path or road is now easy to see - for example see the screenshot below showing a download of gpx traces in a town, in which the main roads can be seen by the volume of traces.  

![OSMTracker_gpx][] 




[OSMTracker Logo]: /images/mobile-mapping/osmtracker_logo.png
[OSMTracker_1]: /images/mobile-mapping/OSMTracker_1.png
[OSMTracker_2]: /images/mobile-mapping/OSMTracker_2.png
[OSMTracker button presets]: /images/mobile-mapping/OSMTracker_presets.png
[OSMTracker recorded file sizes]: /images/mobile-mapping/OSMTracker_files.png
[OSMTracker_gpx]: /images/mobile-mapping/OSMTracker_gpx.png
[OSMTracker JOSM]: /images/mobile-mapping/OSMTracker_JOSM.png