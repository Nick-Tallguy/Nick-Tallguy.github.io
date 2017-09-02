---
layout: doc
title: Panoramica sui dati di OSM
permalink: /it/osm-data/data-overview/
lang: it
category: osm-data
---

 Panoramica sui dati di OSM
==================


> Questa guida può essere scaricata come [OSM_Data_Overview_it.odt](/files/OSM_Data_Overview_it.odt) oppure [OSM_Data_Overview_it.pdf](/files/OSM_Data_Overview_it.pdf)  
> Rivisto il 2017-07-25

<!--In questa sezione vedremo come funziona OpenStreetMap , questo ci aiuterà a capire bene come sono strutturati i dati e come possiamo utilizzarli al meglio. -->

Come funziona OSM
--------------
Vediamo come funziona OpenStreetMap. Migliaia di utenti nel mondo editano in continuazione la mappa, ma cosa c'è dietro tutto questo?  

Quando tu o un altro utente fate modifiche utilizzando un software come JOSM o iD, il software comunica col server centrale OpenStreetMap e gli notifica i cambiamenti. Su questo server risiede un enorme database che contiene le coordinate e le informazioni di ogni singolo oggetto di OpenStreetMap.  

Poichè OSM è libero e gratiuto, è possibile per chiunque scaricare i dati dal database. Però, a causa della sua grandezza (*i dati superano i 30 GB anche se compressi*) è quasi impossibile lavorare i dati in una volta sola.  

Because of this limitation, there are various methods of **exporting** and **extracting** data which are covered in this section. Exporting means to convert OpenStreetMap data from its native format into a format that is convenient for you. This is slightly different from **extracting** data, which means to cut the data from the area of your choosing.  It may also mean to pull out the specific features that you want from an area. These terms are often used interchangeably. We'll learn more about this throughout the OSM Data section.  

Using Geodata
--------------
Se non sei un utente esperto di GIS, è importante capire la differenza tra un programma di editing come JOSM e i software GIS come QGiS (Quantum GIS) e ArcGIS.  

Editors such as iD or JOSM have one core function that they are very good at - making it easy for users to edit OpenStreetMap. But they are not software meant for analyzing or querying data -
this function is best left to other applications. GIS software, such as the free and open source [Quantum GIS (QGIS)](http://www.qgis.org), allows users to design good-looking maps, to query and analyze data, and much more. GIS software can also be used for editing geodata, but it is much easier to edit OpenStreetMap with the dedicated OSM editors.  

In the next chapter we will take a closer look at file formats which are associated with OpenStreetMap and geographic data in general. Then we'll look at various ways to access and manipulate OSM data and convert it between different file types.  


Ottenere i dati
-----------------

That's great, but how do you get out the data that you want?  

In this chapter we'll go over the various ways of exporting OSM data. We'll stick to the basics, but keep in mind that in order to use the data effectively, you'll probably need GIS software,
such as the free Quantum GIS application.  

Before we begin, let's go over some terminology. First, **exporting** means to convert OpenStreetMap data from its native XML format into a format that is convenient for you. This is slightly different from **extracting** data, which means to cut the data from the area of your choosing.  It may also mean to pull out the specific features that you want from an area. We'll use these terms frequently in this chapter, so it's important to understand the difference.  

Le API OSM
------------
The OSM editing process functions because of what is known as an API, which allows editing software to communicate with the central server. For example, when you are using JOSM and you select the area you want to map, an API call is sent to the server, requesting all of the data that exists within the area that you have selected.  

In fact, when you download data in JOSM, you are **extracting** the data from a specific area of the world. The data is then sent to you in **.osm** format, which you can then edit in JOSM. If you download data in JOSM and then save it, you will see that the file type is **.osm**. We'll talk more about this in the next chapter.  
