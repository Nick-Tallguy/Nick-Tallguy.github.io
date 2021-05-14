---
layout: doc
title: Using OSM Data in QGIS
permalink: /en/osm-data/osm-in-qgis/
lang: en
category: osm-data
---

Using OSM Data in QGIS
=================

> Reviewed 2021-05-14

QGIS (formerly Quantum GIS) is a full-featured, open-source, cross-platform Geographic Information System. With QGIS you can access up-to-date OSM data whenever you want, select the tags you want to include, and easily export it into an easy-to-use SQLite database or Shapefile.  

In this chapter we'll walk through the steps necessary to do this. We assume that you've already downloaded and installed QGIS 3.x. If you haven't already done this, you can download it from <http://www.qgis.org/en/site/forusers/download.html>.  

We will use a plugin, QuickOSM, to import data from the OpenStreetMap database. To install this plugin open the Manage Plugins dialogue from the Plugins menu. Search for QuickOSM and install it. This will add an entry to the Vector menu  

Obtaining Data from the Database
---------------------------

The first thing we will do is get some up-to-date OSM data. We can do this in numerous ways. The QuickOSM plugin allows us to extract large amounts of data as it uses the Overpass api and not the main OSM database server.

- Open QGIS and go to Vector -> QuickOSM -> QuickOSM...  

![quickosm][]

- You can choose from several options here  - if your window already displays the extent you want, switch the combobox which by default shows "In" to "Canvas extent". If you have a layer loaded in QGIS with the correct extent, choose "Layer extent" and select the layer you want to use. Using the default "In" requires that a relation or polygon exists with this name. Otherwise choose "Around" and a node with this name suffices. You can select a perimeter (default 1000m) around this node where data will be loaded from the database.

- Click on "Run Query".  
- You will be notified when the download is complete. The data are stored in three temporary layers, one for nodes, ways and polygons respectively.

![quickosm loaded][]


Importing extracts
---------------------------

There are several options how to obtain ready-made extracts of an area. <https://wiki.openstreetmap.org/wiki/Planet.osm#Country_and_area_extracts> contains a list of several websites. Just pick a **.osm** or **.pbf** file and download it. 

- Go to Layer -> Add Layer -> Add Vector Layer...  
- In the source field, select your file and click "Add".  
- You can select one or more type layers from that file.  

![import osm][]  

- After clicking "OK" you can close the dialogue and your QGIS window shows the new layers.  
  

![import osm loaded][]  


Exporting data
--------------

To export a layer activate its context menu and select Export -> Save Features as...
You can select from a wide range of formats including Shapefile, GeoJSON, PostgreSQL dump, SQLite. The other options on the dialogue vary depending on the format you selected.

![export][]  

You can choose to re-import the exported layer by checking the box at the bottom (activated by default).

Working with the Data
--------------------

We cannot give you even a rough overview over what you can do with QGIS and there are many excellent tutorials and books which will guide you step-by-step towards mastering the software. But as OSM data imported by one of the methods described above have their tags encoded in a special way here is a quick example how to deal with them (for the curious, the example is pitcairn-islands-latest from Geofabrik's download page for Australia and Oceania):

In this example polygons are mostly islands and buildings. As they are on the same layer they are rendered in the same way which means that islands cover everything else. Let me first make sure that these polygons appear less prominently. From the context menu of the multipolygon layer I select Properties and on that form I move to the Symbology tab. At the top I change the fill colour to black and reduce the opacity so that the polygons appear in a light grey and render other features below them visible.

![symbology][]

Next I'd like to treat buildings differently. Treat differently means that I need them on a different layer. This time I choose the Attribute table from the context menu of the multipolygon layer. We can see that all the key-value-pairs for the tags of the various objects are organized in a specially formatted text string in the field 'other_tags'. This kind of storage is called hstore in a PostgreSQL database and is the standard for OSM data. I am looking for buildings i.e. for objects whose building tag is not empty. In order to find and select them I click on the 'select features using an expression' icon in the toolbar at the top of the table (marked with a purple square in the image below). I must use a little workaround because QGIS' expression evaluation cannot directly deal with hstore strings. But a utility comes to our rescue and the filter expression shown in the image `hstore_to_map(other_tags)['building'] is not NULL` converts this string into a key-value-map. The condition reads that we look for objects whose building key is not empty. Clicking on Select features at the bottom selects all those lines (shown in blue).

![selection][]

Next I need to put them in a layer. From the main QGIS menu we go to Edit -> Paste Features as -> New Vector Layer...  Pretty much like the export already described, I need a file name for a Shapefile layer (buildings.shp in this example) and the other defaults can be left as they are. Do not forget to keep "Add saved file to map" checked. The new layer will automatically receive a different fill colour and should therefore be clearly visible. Otherwise you already know how to change this.

![selection loaded][]


Summary
-------

This process makes it easy to get up-to-date OSM data and pull it into QGIS. Once you have layers like this in QGIS, it is possible to save them as shapefiles, execute filters and queries, and so forth. For more detail on these functions see the Help menu in QGIS.  


[quickosm]: /images/osm-data/qgis-quickosm.png
[quickosm loaded]: /images/osm-data/qgis-quickosm-loaded.png
[import osm]: /images/osm-data/qgis-import-osm.png
[import osm loaded]: /images/osm-data/qgis-import-osm-loaded.png
[export]: /images/osm-data/qgis-export.png
[attribute table]: /images/osm-data/attribute_table.png
[symbology]: /images/osm-data/qgis-layer-symbology.png
[selection]: /images/osm-data/qgis-layer-selection.png
[selection loaded]: /images/osm-data/qgis-layer-selection-loaded.png
