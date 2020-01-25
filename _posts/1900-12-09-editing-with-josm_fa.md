---
layout: doc-rtl
title: ویرایش داده‌های میدانی
permalink: /fa/josm/editing-with-josm/
lang: fa
category: josm
---

ویزایش داده‌های میدانی
==================

> تاریخ بازبینی ۱۳۹۵/۰۵/۰۱  

حالا ما همه بلوک‌های ساختمنی نقشه‌کشی با OpenStreetMap را پوشش دادیم.
در بخش [نقشه‌کشی با گوشی هوشمند، GPS و یا برگه‌های میدانی](/fa/mobile-mapping/) می‌توانید ببینید که چگونه از موبایل برای بررسی میدانی یک منطقه استفاده کنید.  

در این فصل دوباره به JOSM بازمی‌گردیم و نگاهی به چند جنبه آن که 
در آن زمان بحث نکردیم، می‌پردازیم.

لایه‌های JOSM
-----------
چنانچه پا به پای ما آمده باشید، حتماً توجه کرده‌اید که می‌توانیم همه چیز را 
به JOSM اضافه کنیم. می‌توانیم داده‌های OSM را دانلود کرده سپس تصاویر ماهواره‌ای بینگ را اضافه کنیم، 
مسیرهای GPS و نقاط بین‌راهی را بارگزاری کنیم و  وبرگه‌های میدانی که در 
پنجره JOSM قابل نمایش است را اضافه کنید.

حتماً توجه کرده‌اید که هربار چیز جدیدی به JOSM اضافه می‌کنید، آیتم
جدیدی به پنل لایه‌هیا طرف راست JOSM اضافه می‌شود. بسته به آنچه که 
باز کرده‌اید پنل لایه‌ها شبیه شکل زیر خواهد بود:

![Layers panel][]

هر مورد در این لیست نماینده منبع متفاوتی از داده است که 
شما در پنجره نقشه باز می کنید. در این مثال، “Data Layer
1” داده OpenStreetMap است که آنرا ویرایش می کنیم. "ورقه های میدانی” 
لایه ایست که ما در زمان اضافه کردن آنها به JOSM ایجاد کردیم.

اگر تصاویر ماهواره‌ای Bing را اضافه کنید، لایه جدیدی به اسم "Bing Sat"در پنل لایه‌ها ایجاد می‌شود.

فهمیدن لایه‌ها کمی مشکل است. یک روش خوب برای تصورسازی لایه‌ها این است که هر
لایه را مانند یک ورقه کاغذ نیمه شفاف در نظر بگیرید که روی یکدیگر قرار گرفته‌اند.
هر ورقه اطلاعات خاصی روی خودش دارد و لایه‌ها را 
به هر روشی که دوست دارید می‌توانید روی هم قرار دهید.

از لایه‌ای که به عنوان مرجع استفاده می‌شود، مانند تصاویر ماهواره‍ای، مسیرهای GPS و ورقه‌های میدانی
اغلب به عنوان "لایه پایه" نام برده می‌شود. لایه داده OSM لایه‌ایست که شما در واقع با آن کار می‌کنید.

- برای جابجا کردن یک لایه، در پنل لایه‌ها روی آن کلیک کنید و سپس روی  
    فلش‌های بالا یا پایین کلیک کنید تا آنرا جابجا کنید.

![Layers up down][]

برای مخفی کردن یک لایه، آن لایه را با ماوس انتخاب کرده و
    دکمه Show/Hide را کلیک کنید:

![Layers show hide][]

- خواهید دید که لایه‌ای که انتخاب کردید در پنجره نقشه ناپدید می‌شود.
    Show/Hide را مجدداْ کلیک کنید تا دوباره ظاهر شود.
- می‌توانید یک لایه را با اتخاب آن و زدن دکمه
    حذف بردارید:

![Layers delete][]

- بالاخره، مهم است بدانید که تنها لایه‌ای را می‌توانید ویرایش کنید که
    لایه *فعال* JOSM می‌باشد. اگر نمی‌توانید نقشه را 
    در پنجره نقشه ویرایش کنید شاید به خاطر این است که 
    لایه مناسب فعال نیست. بیشتر لایه‌ها، مثل لایه نقاط GPS، ورقه‌های میدانی 
    و تصاویر ماهواره‌ای قابل ویرایش نیستند. تنها لایه‌ایی که 
    قابل ویرایش است لایه داده OpenStreetMap است که معمولاْ
    “Data Layer 1” نامیده می‌شود.
- برای فعال کردن یک لایه، در پنل لایه‌ها آنرا انتخاب کنید و روی 
    کلید فعال کردن (Activate) کلیک کنید:

![Layers activate][]


استفاده از داده GPS و ورقه‌های میدانی
-------------------------------
In the [Mapping with a Smartphone, GPS or Paper](/en/mobile-mapping/) chapters we saw how to collect data with a GPS
and Field Papers, and how to load it into JOSM as a layer.

Once you have surveyed with one of these tools, you still need
to add the information into OpenStreetMap digitally.

You do this with the same process you learned previously - **download,
edit, save**. The difference is that instead of using only satellite
imagery as a base layer, you can also use your GPS data, Field Papers,
notes, or a combination of them all.

-   For example, let's assume you have your GPS waypoints as a background
    layer in JOSM, you saved a waypoint on your GPS with the name 030, and
    you wrote in your notebook that 030 is a school. To add this point
    into OpenStreetMap, you will select the draw tool, and
    double-click on top of point 030 in your map window. This will
    create a point. Then go to the Presets menu, and find the preset for
    school. Enter the name of the school and click “Apply Preset”. Do
    the same to add lines and shapes.

![GPS in JOSM][]

تگ‌ها
----
When you draw a point, line, or shape, it has a location, but no
information about what it is. In other words, we know **where** it
is, but not **what** it is. Before now, we have been using items
from the Presets menu to define **what** it is. The way
OpenStreetMap knows **what** an object is is by using **tags**.

A tag is like a label that you can put on something. For example, if
we draw a square, it’s only a square. But then we add attributes to
it that describe what it is: this square is a building; the name of
the building is “Menara Thamrin”; the building is 16 levels high.

هرچندتا تگ که بخواهید می‌توانید به یک شی بدهید. تگ‌ها به صورت 
یک جفت عبارت متنی که **کلید (keys)** و **مقدار (values)** نامیده می‌شوند، ذخیره می‌شوند. در
OpenStreetMap تگ‌های نوشته فوق در حقیقت به صورت زیر نوشته می‌شوند:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

If you select an object in JOSM, you can see all the tags that are
attached to it in the Properties panel on the right.

![Properties panel][]

### ویرایش تگ‌ها
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

ذخیره‌سازی فایلهای OSM
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

خلاصه
-------
در این فصل نگاه دقیقتری به رابط کاربری JOSM انداختیم و درباره 
لایه‌ها و تگ‌ها چیزهایی یاد گرفتیم. حالا می‌توانید با اطمینان به مرحله  چگونگی نقشه‌کشی و 
ویرایش OpenStreetMap قدم بگذارید.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png