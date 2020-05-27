---
layout: doc-rtl
title: ویرایش داده‌های میدانی
permalink: /fa/josm/editing-with-josm/
lang: fa
category: josm
---

ویرایش داده‌های میدانی
==================


اکنون تمام پیش‌نیازهای نقشه‌کشی با OpenStreetMap را پوشش داده‌ایم. در بخش [نقشه‌برداری با تلفن هوشمند، GPS یا کاغذ](/fa/mobile-mapping/) با نحوهٔ استفاده از ابزارهای همراه برای نقشه‌برداری یک منطقه آشنا می‌شوید.

در این فصل یک بار دیگر به JOSM بازمی‌گردیم و نگاهی می‌اندازیم به تعدادی از مفاهیم جدید که تا کنون درباره‌شان صحبت نکرده‌ایم.

لایه‌های JOSM
-----------
اگر تا اینجا پیگیر بوده باشید، احتمالاً دانسته‌اید که می‌توانیم چیزهای مختلفی را در JOSM اضافه کنیم. می‌توانیم دادهٔ OSM را دانلود کنیم، تصاویر ماهواره‌ای بینگ را اضافه کنیم، ردهای GPS و نقاط بین‌راهی را بار کنیم؛ چیزهایی که همگی در پنجرهٔ نقشه در JOSM نمایش داده می‌شوند.

همچنین حتماً متوجه شده‌اید که هر بار که چیزی جدید به JOSM اضافه می‌کنید، آیتم دیگری به پنجرک لایه‌ها در سمت راست JOSM افزوده می‌شود. بسته به آنچه باز کرده‌اید، پنجرک لایه‌ها چیزی شبیه به این است:

![Layers panel][]

هر آیتم در این لیست نشان‌دهندهٔ یک منبع متمایز داده است که در پنجرهٔ نقشه باز شده است. در این مثال، Data Layer 1 دادهٔ OpenStreetMap است که در حال ویرایش آن هستیم. لایهٔ Field Papers زمانی ایجاد شد که ورقهٔ میدانی خود را در JOSM اضافه کردیم.

اگر تصاویر ماهواره‌ای Bing را اضافه کنید، لایهٔ جدیدی به اسم Bing Sat در پنجرک لایه‌ها ایجاد می‌شود.

درک مفهوم لایه‌ها گاهی ممکن است مشکل باشد. راهی خوب برای تصورکردن آن، این است که هر لایه را مانند یک تکه کاغذ نیمه‌شفاف بدانیم که همهٔ این‌ها روی هم چیده شده‌اند. هر تکه کاغذ نوع خاصی از اطلاعات را دارد و می‌توانید آن‌ها را هر طور که دوست دارید مرتب نمایید.

لایه‌هایی که به‌عنوان مرجع استفاده می‌شوند، مانند تصویرهای ماهواره‌ای، ردهای جی‌پی‌اس، و ورقه‌های میدانی اغلب «لایه‌های پایه» نامیده می‌شوند. لایهٔ دادهٔ OSM در واقع همان لایه‌ای است که با آن کار می‌کنید.

- برای جابه‌جاکردن یک لایه، روی آن در پنجرک لایه‌ها کلیک کنید و روی پیکان بالا یا پایین کلیک کنید تا آن را حرکت دهید.

![Layers up down][]

- برای پنهان‌کردن هر لایه، با ماوس آن را انتخاب کنید و روی دکمهٔ Show/Hide کلیک کنید:

![Layers show hide][]

- لایه‌ای که انتخاب کرده‌اید باید در پنجرهٔ نقشه ناپدید شود. دوباره روی دکمهٔ Show/Hide کلیک کنید و لایه دوباره ظاهر خواهد شد.
- برای حذف یک لایه آن را انتخاب کنید و دکمهٔ delete  را بزنید:

![Layers delete][]

-   Lastly, it’s important to know that you can only edit the layer that is considered *active* by JOSM. If you are unable to edit the map in your map window, it’s probably because you don’t have the correct layer set as active. Most layers, such as GPS points, Field Papers, and satellite imagery, can’t be edited. The only layers that can be edited are data from OpenStreetMap, which are usually called “Data Layer 1”.
-   To make a layer active, select it in the Layers panel, and click on the Activate button:

![Layers activate][]


استفاده از دادهٔ GPS و ورقه‌های میدانی
-------------------------------
In the [Mapping with a Smartphone, GPS or Paper](/en/mobile-mapping/) chapters we saw how to collect data with a GPS and Field Papers, and how to load it into JOSM as a layer.

Once you have surveyed with one of these tools, you still need to add the information into OpenStreetMap digitally.

You do this with the same process you learned previously - **download, edit, save**. The difference is that instead of using only satellite imagery as a base layer, you can also use your GPS data, Field Papers, notes, or a combination of them all.

-   For example, let's assume you have your GPS waypoints as a background layer in JOSM, you saved a waypoint on your GPS with the name 030, and you wrote in your notebook that 030 is a school. To add this point into OpenStreetMap, you will select the draw tool, and double-click on top of point 030 in your map window. This will create a point. Then go to the Presets menu, and find the preset for school. Enter the name of the school and click “Apply Preset”. Do the same to add lines and shapes.

![GPS in JOSM][]

تگ‌ها
----
When you draw a point, line, or shape, it has a location, but no information about what it is. In other words, we know **where** it is, but not **what** it is. Before now, we have been using items from the Presets menu to define **what** it is. The way OpenStreetMap knows **what** an object is is by using **tags**.

A tag is like a label that you can put on something. For example, if we draw a square, it’s only a square. But then we add attributes to it that describe what it is: this square is a building; the name of the building is “Menara Thamrin”; the building is 16 levels high.

You can add as many tags as you want to an object. Tags are saved as pairs of text, called **keys** and the **values**. In OpenStreetMap, the tags written above would in fact be:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

If you select an object in JOSM, you can see all the tags that are attached to it in the Properties panel on the right.

![Properties panel][]

### ویرایش تگ‌ها

You can add, edit, and delete tags from the Properties panel. However, the tags are traditionally in English and can sometimes be confusing, so it is often easier to use the Presets menu. When you add or change tags, the attributes of the object are changed.

-   To edit an object's tags, first select it.
-   Then edit the tags in one of two ways: (1) Use the Presets menu, or (2) edit the tags directly in the Properties window on the right.

### Common Mistake: Tagging nodes when you want to tag lines or polygons

When you are editing the attributes of a point, you will first select the point and then add tags either through the Presets menu or directly in the Properties panel. A common mistake is when adding attributes to a line or a shape. When selecting the object, it is important that you
select the line, and NOT the points that make up the line.

This frequently occurs because editors use the JOSM select tool to draw a box around an object, which causes everything, both the line **and** the nodes to be selected, and when you add tags they are applied to the nodes as well. Be sure to **only** select lines when you want to add tags to them.

![Nodes mistake][]

ذخیره‌سازی فایل‌های OSM
----------------
When you are editing in JOSM, it is always a good idea to download, edit, and upload changes in a reasonably short period of time. You do not want to download data one day, and then wait until a few days later to upload your edits. What if someone else edits the same area during that time? This will cause errors and conflicts.

Don't be afraid to upload your edits frequently. This ensures that your changes will be saved to the database and you will not lose your hard work.

If you are working in a single area, it's a good idea to download the map data every time you want to edit, in case another user has made changes.

Although you should always try to download OSM data when you are ready to edit, and upload your changes frequently, there may be cases in which you want to save the OSM data on your computer. For example, if you have intermittent connectivity to the internet, you may wish to download data, save it, edit, and then upload your changes later on.

-   To save an OSM file, make sure that it is the active layer in the the Layers panel. Click “File” on the top menu, and click “Save”. Choose a location for the file and give it a name. You can also save by clicking this button:

![JOSM save button][]

-   You can now close JOSM and your data will be saved. When you want to open the file again, simply open JOSM, go to the “File” menu, and click “Open...”

خلاصه
-------
In this chapter we looked a little bit closer at the JOSM interface and learned about layers and tags. You should now have a solid footing in how to map and how to edit OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png