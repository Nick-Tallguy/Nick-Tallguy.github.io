---
layout: doc-rtl
title: استفاده از داده‌های OSM در QGIS
permalink: /fa/osm-data/osm-in-qgis/
lang: fa
category: osm-data
---

استفاده از داده‌های OSM در QGIS
=================

> تاریخ بازبینی ۱۳۹۴/۰۴/۲۸

QGIS (که قبلاْ کوانتوم GIS نامیده میشد) یک سیستم اطلاعات جفرافیایی کامل  و متن‌باز و بین پلتفرمی با ویژگی‌های بسیار است. با QGIS هرزمان که بخواهید می‌توانید به داده‌های OSM دسترسی داشته باشید، مشخص کنید که کدام تگ‌ها را درنظر بگیرد و به راحتی از آنها به صورت یک پایگاه داده SQLite جمع و جور یا Shapefile خروجی بگیرید.  

در این بخش ما کارهایی که لازم است تا اینها صورت پذیرد را نشان میدهیم. فرض می‌کنیم که شما قبلاً QGIS 2.x را دانلود و نصب کرده‌اید. اگر اینطور نیست می‌توانید آنرا از <http://www.qgis.org/en/site/forusers/download.html> دانلود کنید.  

برای داشتن لایه‌های کاملاً به روز و مورد نظر ما در QGIS ابتدا آخرین داده‌های OSM را به صورت خام و قالب **.osm** دریافت می‌کنیم. سپس، آنها را به شکل پایگاه داده SQLite نبدیل می‌کنیم که یک سیستم پایگاه داده سبک است که در یک فایل روی سیستم شما نگهداری می‌شود. در آخر، لایه‌(یا چند لایه)ای را ایجاد می‌کنیم که شامل تنها نوع خصوصیت و تگی است که ما می‌خواهیم به آن دسترسی داشته باشیم. این لایه‌ها را می‌توان در QGIS به همان صورت و یا به صورت قالب دیگری مانند shapefile ذخیره کرد.  

دستیابی به داده‌های OSM
---------------------------

The first thing we will do is get some up-to-date OSM data. We can do this in numerous ways. Of course, requesting data from the OSM server, as we do in the JOSM editor, is limited so that we cannot pull out a very large amount of raw data at once - however, there are ways to access larger data sets, as
در [دریافت داده‌های OSM](/fa/osm-data/getting-data) و [استفاده از Geofabrik و خروجی HOT](/fa/osm-data/geofabrik-and-hot-export) توضیح داده شده روشهای زیادی برای دریافت مجموعه داده‌های بزرگ وجود دارد.  

در این راهنما از تابع درونزاد دانلود خود QGIS استفاده می‌کنیم.  

- Open QGIS and go to Vector -> OpenStreetMap -> Download Data...  
- You can choose from several options here - if your window is already displaying the extent you want, check the box next to "From map canvas." If you have a layer loaded in QGIS with the correct extent, choose "From layer" and select the layer you want to use. Here we will choose "Manual" and enter the latitudes and longitudes which form a **bounding box** around the area we	want to access. You can fill in the lats and lons that are of interest to you, but remember that the area cannot be too large, or you won't be able to download all the data.  

![کادر محدوده][bounding box]

- Select a name and location for the output file, using the **.osm** file extension, and click OK.  
- You will be notified when the download is complete. Click "Close" to exit the download dialog.  

![دانلود کامل شد][download complete]

- The OSM data will now be saved in the location you specified.  

> This method of accessing OSM data is the same as if you downloaded it in JOSM or on [openstreetmap.org](http://www.openstreetmap.org). For larger extracts that are up-to-date, you may try downloading from the [HOT export site](http://export.hotosm.org) or [bbbike.org](http://extract.bbbike.org/). Remember that if you download a compressed OSM file, you will need to first decompress it into **.osm** format for the next steps.  


وارد کردن داده‌ها به SQLite
---------------------------

حالا ما باید فایل خام **.osm**مان را به پایگاه داده SQLite وارد کنیم.  

- Go to Vector -> OpenStreetMap -> Import Topology from XML...  
- In the first field, select your **.osm** file.  
- You can change the name of the output database file if you like.  
- Keep the box checked next to "Create Connection..."  

![وارد کردن داده‌ها][import dialog]  

- Click OK.  
- When it is finished, click "Close."  


ایجاد لایه‌ها
--------------

دست آخر لایه‌هایی را که در QGIS استفاده خواهد شد بر اساس نیازهایمان تعریف می‌کنیم.  

- Go to Vector -> OpenStreetMap -> Export Topology to SpatiaLite...  
- In the first field, select the database you created in the previous step.  

![واردکردن فایل db][input db file]  

- Under "Export type," select the type of features you want to create a layer for. Here we will create a layer using polygons.  

![نوع خروجی][export type]  

Edit the layer name if you like.  

Under "Exported tags" is where the magic happens. Here we can select which tags will be included in our output layer. This gives us flexibility over exactly which data we want to access.  

- Click "Load from DB" to see a list of all the available tags in the database. Expand the window size by dragging the corner if that helps. You can see all the tags contained in this data, and also the number of features that have each tag.  
- Check the boxes next to the tags that you want to include. Here we will select a few features that will be useful for polygons that represent buildings.  

![export full][]  

When you are finished, click OK.  Close the box. Your layer should be automatically added.  

![چندضلعی‌های قاهره][cairo polygons]  

Right-click on the layer and click "Open Attribute Table."  

![جدول بازکردن خصوصیات][open attribute table]  

You can see here that we have a table which includes only the attributes we selected.  

![جدول ویژگی‌ها][attribute table]  

Note that we have not created a layer of **only** buildings. Instead, we have created a layer that includes all of the polygons from our original data, but only includes the tags which we selected. In order to filter this layer to show only buildings, we would need to execute a query that filters only polygons where building=yes.


خلاصه
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
