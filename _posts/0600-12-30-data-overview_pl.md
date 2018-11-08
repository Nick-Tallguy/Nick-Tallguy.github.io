---
layout: doc
title: Przegląd danych OSM
permalink: /pl/osm-data/data-overview/
lang: pl
category: osm-data
---

Przegląd danych OSM
==================


> Ten przewodnik może zostać pobrany jako [OSM_Data_Overview_pl.odt](/files/OSM_Data_Overview_pl.odt) lub [OSM_Data_Overview_pl.pdf](/files/OSM_Data_Overview_pl.pdf)  
> Przejrzano 05.09.2016

<!--W tym rozdziale zastanowimy się, jak działa OpenStreetMap, co pomoże nam lepiej zrozumieć, jak usystematyzowane są dane i jak możemy najlepiej je wykorzystać.-->

Jak działa OSM
--------------
Zastanówmy się, jak działa OpenStreetMap. Tysiące użytkowników na całym świecie wciąż dodaje i edytuje mapę, ale co dzieje się za kulisami?  

Kiedy Ty lub jakiś inny użytkownik wprowadzacie zmiany używając oprogramowania do edycji, takiego jak JOSM lub iD, ten program komunikuje się z głównym serwerem OpenStreetMap i informuje go o Twoich zmianach. Na tym serwerze jest ogromna baza danych, która zawiera wszystkie informacje o lokalizacji i właściwościach każdego pojedynczego obiektu geograficznego w całej OpenStreetMap.  

Ponieważ OSM jest darmowa i otwarta, każdy może pobrać wszystkie dane z bazy. Jednak z powodu jej wielkości (*dane zajmują 30 GB nawet po kompresji*) jest niemal niemożliwe, aby pracować z tymi wszystkimi danymi na raz.  

Because of this limitation, there are various methods of **exporting** and **extracting** data which are covered in this section. Exporting means to convert OpenStreetMap data from its native format into a format that is convenient for you. This is slightly different from **extracting** data, which means to cut the data from the area of your choosing.  It may also mean to pull out the specific features that you want from an area. These terms are often used interchangeably. We'll learn more about this throughout the OSM Data section.  

Using Geodata
--------------
If you are not an experienced GIS user, it's important to understand the difference between OSM editing software like JOSM and GIS software such as Quantum GIS and ArcGIS.  

Editors such as iD or JOSM have one core function that they are very good at - making it easy for users to edit OpenStreetMap. But they are not software meant for analyzing or querying data -
this function is best left to other applications. GIS software, such as the free and open source [Quantum GIS (QGIS)](http://www.qgis.org), allows users to design good-looking maps, to query and analyze data, and much more. GIS software can also be used for editing geodata, but it is much easier to edit OpenStreetMap with the dedicated OSM editors.  

In the next chapter we will take a closer look at file formats which are associated with OpenStreetMap and geographic data in general. Then we'll look at various ways to access and manipulate OSM data and convert it between different file types.  


Getting the Data
-----------------

That's great, but how do you get out the data that you want?  

In this chapter we'll go over the various ways of exporting OSM data. We'll stick to the basics, but keep in mind that in order to use the data effectively, you'll probably need GIS software,
such as the free Quantum GIS application.  

Before we begin, let's go over some terminology. First, **exporting** means to convert OpenStreetMap data from its native XML format into a format that is convenient for you. This is slightly different from **extracting** data, which means to cut the data from the area of your choosing.  It may also mean to pull out the specific features that you want from an area. We'll use these terms frequently in this chapter, so it's important to understand the difference.  

The OSM API
------------
The OSM editing process functions because of what is known as an API, which allows editing software to communicate with the central server. For example, when you are using JOSM and you select the area you want to map, an API call is sent to the server, requesting all of the data that exists within the area that you have selected.  

In fact, when you download data in JOSM, you are **extracting** the data from a specific area of the world. The data is then sent to you in **.osm** format, which you can then edit in JOSM. If you download data in JOSM and then save it, you will see that the file type is **.osm**. We'll talk more about this in the next chapter.  
