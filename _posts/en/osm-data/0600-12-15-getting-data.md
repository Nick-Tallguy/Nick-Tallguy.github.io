---
layout: doc
title: Getting OSM Data
permalink: /en/osm-data/getting-data/
lang: en
category: osm-data
---

Getting OSM Data
=================  

> This guide may be downloaded as [Getting_OSM_Data_en.odt](/files/Getting_OSM_Data_en.odt) or [Getting_OSM_Data_en.pdf](/files/Getting_OSM_Data_en.pdf)  
> Reviewed 2016-04-02

When you want to get the most recent OpenStreetMap data, the easiest way is to download an extract from a website. There are various web services that provide data extracts for an area of your choosing.  

Downloading Data Extracts
--------------------------

### GeoFabrik

[GeoFabrik](http://geofabrik.de) is a company which specializes in working with OpenStreetMap. They provide a variety of free extracts in shapefile and raw OSM format on their [download website](http://download.geofabrik.de). The advantage of downloading GeoFabrik data is that it is updated every day, and it's easy and reliable. One disadvantage is that the data is extracted by country, and not all countries are available.  

### Metro Extracts

[Another website maintained by Mapzen](https://mapzen.com/data/metro-extracts/) provides shapefiles and raw OSM format for cities around the world, extracted weekly. This is useful if you are looking for data extracts for a single city.  

### BBBike  

[BBBike](http://download.bbbike.org/osm/bbbike/) offers something similar as Metro Extracts but for a different selection of cities. The data is updated weekly as well.

>Remember that features in OpenStreetMap have an unlimited number of "free" tags,
>but shapefiles have attributes stored in a limited number of columns. This means
>that when OSM data is converted into shapefiles, only the specified tags will be
>included in the shapefile table. The websites listed above provide shapefiles
>with a default set of common tags, but if you want to extract specific tags
>you will need to use one of the more specialized services in the next section
>or learn how to export the data yourself.

Customized Extracts
-------------------

### HOT Exports  

The [Humanitarian OpenStreetMap Team](http://hotosm.org) has created a service that allows users to select the area that they want to extract, and also use [JOSM Presets](/en/josm/josm-presets/)
to select custom tags to be included in the extract. The service is available to all countries where HOT works, at [export.hotosm.org](http://export.hotosm.org).

![hot exports][]

### BBBike  

You can select your own area from any part of the world using the service at [http://extract.bbbike.org/](http://extract.bbbike.org/). The only disadvantage is that you aren't able to select customizable tags.  

### Overpass

This is a read-only copy of the main OpenStreetMap database which can deliver an almost arbitrary amount of data. Using a query language you can customize which subset of the data you obtain. You can either use the API directly by generating a http-request or through the overpass turbo interface

#### Overpass Turbo

[This](http://overpass-turbo.eu/) is an interactive query generator where you should first select the appropriate region on the map. If you are new to the query language then using the wizard should get you started. The map will highlight all data selected by your query. If you are satisfied with what you see then the export tab offers a number of choices, among them raw OSM data. 

It is a good idea to use this service first if you need to engineer a query for a subset of the data.

#### Overpass API

If you have a working query-URL then a tool such as [wget](https://www.gnu.org/software/wget/) - available for different operating systems, see [here](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download) - allows you to download the raw OSM data directly from the server and store them locally. The following snippet is a tiny script for the bash shell common on Unix systems which extracts all data within a specified bounding box:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
echo lower left latitude
read ll_lat
echo lower left longitude
read ll_lon
echo upper right lattitude
read ur_lat
echo upper_right longitude
read ur_lon
echo output file
read file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Summary
-------  

The services mentioned in this chapter are all that the average user needs to get the OSM data they want and be able to work with it in GIS software. However, you may want to learn more powerful ways of working with the data yourself. The remaining chapters in this section are quite technical, but show more advanced methods of manipulating and accessing OSM data.  


[hot exports]: /images/en/osm-data/getting-data/hot-exports.png
