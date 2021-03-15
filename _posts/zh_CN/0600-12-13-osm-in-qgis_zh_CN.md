---
layout: doc
title: 在QGIS中使用OSM数据
permalink: /zh_CN/osm-data/osm-in-qgis/
lang: zh_CN
category: osm-data
---

在QGIS中使用OSM数据
=================


QGIS（以前也被称为 Quantum GIS）是一个功能齐全的、开源的跨平台地理信息系统。使用 QGIS，您可以随时访问最新的 OSM 数据，选择要包含的标签，然后轻松将其导出到易于使用的 SQLite 数据库或 Shapefile 中。  

在本章中，我们将介绍执行此操作所需的步骤。我们假设你已经下载并安装了 QGIS 2.x。如果你还没有这样做，你可以从 <http://www.qgis.org/en/site/forusers/download.html> 下载它。  

为了将我们自定义的最新 OSM 图层加载到 QGIS 中，我们首先将以原始 **.osm** 格式获取最新的 OSM 数据。然后，我们将这些数据转换为 SQLite 数据库，这是存储在系统上一个文件中的轻量级数据库系统。最后，我们将创建一个图层（或多个图层），其中仅包含我们想要访问的要素类型和标签。这些图层可以像原样在 QGIS 中使用，也可以以其他格式（例如 shapefile）保存。  

访问 OpenStreetMap 数据
---------------------------

The first thing we will do is get some up-to-date OSM data. We can do this in numerous ways. Of course, requesting data from the OSM server, as we do in the JOSM editor, is limited so that we cannot pull out a very large amount of raw data at once - however, there are ways to access larger data sets, as
在前几章中介绍了 [Getting OSM Data](/en/osm-data/getting-data) 和 [Using Geofabrik and HOT Export](/en/osm-data/geofabrik-and-hot-export).  

在本教程中，我们将使用 QGIS 中的内置下载功能。  

- Open QGIS and go to Vector -> OpenStreetMap -> Download Data...  
- You can choose from several options here - if your window is already displaying the extent you want, check the box next to "From map canvas." If you have a layer loaded in QGIS with the correct extent, choose "From layer" and select the layer you want to use. Here we will choose "Manual" and enter the latitudes and longitudes which form a **bounding box** around the area we	want to access. You can fill in the lats and lons that are of interest to you, but remember that the area cannot be too large, or you won't be able to download all the data.  

![bounding box][]

- Select a name and location for the output file, using the **.osm** file extension, and click OK.  
- You will be notified when the download is complete. Click "Close" to exit the download dialog.  

![download complete][]

- The OSM data will now be saved in the location you specified.  

> This method of accessing OSM data is the same as if you downloaded it in JOSM or on [openstreetmap.org](http://www.openstreetmap.org). For larger extracts that are up-to-date, you may try downloading from the [HOT export site](http://export.hotosm.org) or [bbbike.org](http://extract.bbbike.org/). Remember that if you download a compressed OSM file, you will need to first decompress it into **.osm** format for the next steps.  


将数据导入 SQLite
---------------------------

接下来我们需要将我们的原始 **.osm** 文件导入 SQLite 数据库文件。  

- Go to Vector -> OpenStreetMap -> Import Topology from XML...  
- In the first field, select your **.osm** file.  
- You can change the name of the output database file if you like.  
- Keep the box checked next to "Create Connection..."  

![import dialog][]  

- Click OK.  
- When it is finished, click "Close."  


创建图层
--------------

最后，我们将定义可以在 QGIS 中使用的图层，根据我们的需求进行定制。  

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


小结
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
