---
layout: doc
title: افزونه‌های JOSM
permalink: /fa/josm/josm-plugins/
lang: fa
category: josm
---

افزونه‌های JOSM
============

> تاریخ بازبینی ۱۳۹۴/۰۴/۲۳  

As you become more advanced in your editing techniques, you may want to use additional JOSM features to improve your mapping skills. JOSM allows you to install numerous plugins, which add extra functionality to the software.  

In this section we will take a look at how to install plugins, and some of the most useful plugins that are available.

نصب افزونه‌ها
-------------------
Any time you want to install a new plugin, go to **Edit \> Preferences** and click on the **Plugins** tab.  

![Plugins][]

* If you don’t see a list of available plugins, click **Download List**.  
* To install a plugin you simply must check the box next to it and click OK at the bottom.  
* Lastly, with some versions of JOSM you may have to restart JOSM when you install new plugins.

تعدادی از افزونه‌های مورد علاقه ما:

1. **[buildings_tools](/en/josm/josm-more-plugins/#the-buildings-tools-plugin):** If you draw a lot of buildings, this will make the process faster and easier  

2. **DirectUpload:** If you collect a lot of GPS tracks and would like to save them on the OSM database, this plugin makes it easy.  

3. **editgpx:** If you want to upload GPS tracks from a Garmin device, you might need this plugin. OSM won't accept GPS tracks that have been saved on an external memory card in a Garmin, but this plugin can correct the files so they can be uploaded.  

4. **fieldpapers:** This plugin lets you load scanned Field Papers into JOSM.  

5. **imagery_offset_db:** This plugin lets you cooperate with other mappers who find that the Bing satellite imagery is a little bit misaligned. This issue is covered in more detail in a later chapter.  

6. **print:** Adds a Print function, in case you would like to make quick printouts of an area, that don't need to look very good.  

7. **[utilsplugin2](/en/josm/josm-more-plugins/#more-selection-tools):** Adds many additional tools and menus to JOSM for advanced users. This is covered in more detail in the [next chapter](/en/josm/josm-more-plugins)  



<!-- The remainder of this section needs to be edited, and/or moved to other sections,
    فعلاً توضیح گذاشته شد.


- [Mirrored Download]({{site.baseurl}}/en/beginner/josm-plugins/#mirrored-download) (allows you to download more OSM data)
- [Direct Upload]({{site.baseurl}}/en/beginner/josm-plugins/#direct-upload) (allow you to upload GPS tracks)
- [Editgpx]({{site.baseurl}}/en/beginner/josm-plugins/#edit-gpx) (allows you to edit GPX files)
- [Print]({{site.baseurl}}/en/beginner/josm-plugins/#print)

ما نیز پیشنهاد می‌کنیم که افزونه‌هایی که در سایر فصلها شرح داده شده‌اند را 
دانلود کنید:

- FieldPapers
- Buildings\_tool
- Utilsplugin2

![Restart JOSM][]

کلیک روی “Restart JOSM” را امتحان کنید و ببینید که برنامه خودش را دوباره بارگزاری میکند.

Mirrored Download
-----------------

![Mirrored Download][]

__Mirrored Download__ دانلود داده‌های OSM 
را سرعت می‌بخشد. به جای دریافت داده‌ها از سرور 
مرکزی OSM، اجازه دریافت از یک سرور "آینه‌ای" که دقیقاً 
شبیه همان داده را دارد ولی سرعت دسترسی بیشتری دارد، را میدهد.

به محض نصب افزونه (و پس از راه‌اندازی مجدد JOSM) گزینه 
جدید "Download from OSM mirror..." را تحت منوی File می‌بینید 

![Download from OSM Mirror][]

روش دانلود داده دقیقاً شبیه همان فرآیندی‌ست که قبلاً یاد گرفته‌اید 
اما خیلی سریعتر می‌باشد!

Direct Upload
-------------

![Direct Upload][]

__DirectUpload__  مسیرهای GPX ضبط شده را مستقیماً از 
درون JOSM به OSM آپلود می‌کند (اطلاعات بیشتر در **قسمت** ضمیمه موجود است). با 
نصب افزونه (و راه‌اندازی مجدد JOSM)، گزینه 
جدید “Upload traces” تحت منوی “Tools” می‌بینید.

![Upload Traces Item][]

با کلیک روی “Upload Traces” پنجره زیر نمایش داده می‌شود:

![Upload Traces Window][]

کلمات کلیدی (مجزا شده توسط ویرگول و بدون فاصله) را که به 
مسیر GPS شما مرتبط می‌باشد را در کادر "Tags (comma delimited)" وارد کنید. برای مثال،
"کشور،ناحیه،شهر،محله،نام خیابان". سپس درباره 
تگ‌هایتان توضیحی بدهید. یک لیست پائین افتادنی به شما اجازه می‌دهد تا از 
تگها و توضیحات قبلی انتخاب کنید. در آخر، انتخاب کنید چه نوع قابلیت دیدنی برای مسیری که آپلود می‌کنید 
در نظر دارید. چهار سطح مختلف از خصوصی گرفته تا 
تعریف نشده وجود دارد (همه موارد در بخش [ضمیمه]{{site.baseurl}}/learnosm/en/ توضیح داده شده‌اند).

روی Upload Trace.کلیک کنید. چنانچه به حساب کاربری OSM خود متصل نیستید 
بایستی متصل شوید.

در صورت موفقیت‌آمیز بودن آپلود، پیغام "OK" نمایش داده می‌شود.
و کلید “Upload Trace” غیرقابل کلیک می‌شود. اطلاعات بیشتر 
راجع به این افزونه و GPSهای آپلود شده در [پیوست]({{site.baseurl}}/learnosm/fa/) موجود می‌باشد.

ویرایش GPX
--------

![Edit Gpx][]

**EditGpx** به شما اجازه میدهد تا یک مسیر GPX ضبط شده را 
قبل از ارسال آن به OSM آماده کنید. بیشتر مسیرهای ضبط شده دارای قسمتهایی هستند که تمایل دارید 
آنها را حذف کنید. بنابراین، این افزونه این نقاط از مسیر را 
به سرعت حذف می‌کند و نیز جهت حفظ ناشناس بودن ساعت را نیز پاک می‌کند.

با نصب این افزونه (و شروع مجدد OSM) این 
ابزار جدید را در طرف چپ می‌بینید.

![Edit Gpx Tool Icon][]

1. فایل GPX را در JOSM ذخیره کنید!

![Open GPX File][]

2. دکمه جدید را در منوی طرف چپ بزنید 

![Edit Gpx Tool Icon][]

و داده‌های GPX در یک لایه جدید به نام EditGpx وارد می‌شود. هر گره 
در مسیر به رنگ زرد مشخص می‌شود.

![GPX Nodes All][]

3. حالا نقاط (با کلیک رو آنها) و یا محوطه‌هایی را (با کشیدن یک مستطیل 
دور آنها) که می‌خواهید حذف کنید علامت گذاری کنید. علامت زرد 
رنگ باید ناپدید شود.

![GPX Nodes Selected][]

4. روی اسم لایه راست کلیک کنید و \<\<Convert to GPX layer\>\> را 
از منو انتخاب کنید.

5. حالا می‌توانید لایه GPX را به عنوان یک فایل ذخیره کنید یا داده‌های آنرا به 
OSM ارسال نمایید (مثلاً با استفاده از 
افزونه [DirectUpload](http://josm.openstreetmap.de/wiki/Plugins)).

چاپ
-----

![Print Plugin][]

اگر یک نسخه چاپی سریع در حین ویرایش نقشه 
در JOSM بخواهید، افزونه __print plugin__ را نصب کنید. اگرچه نمی‌توانید 
با آنچه چاپ می‌شود کارهای خلاقانه‌ای انجام دهید، اما این روشی سریع 
و آسان برای چاپ است. به محض نصب افزونه، گزینه جدید 
“Print...” در منوی File آشکار می‌شود.

![Print Menu Item][]

با کلیک روی این گزینه کادر محاوره‌ای چاپ باز می‌شود که شبیه این است:

![Print Dialog][]

در اینجا می‌توانید تنظیمات چاپ را تغییر دهید. اگر هیچ چیز 
روی صفحه نمی‌بینید، مربع کنار “Map Preview” را علامت بزنید. بزرگنمایی را 
با تغییر عدد داخل کادر “Scale” کم و زیاد کنید. میزان وضوح 
را با تغییر عدد کادر “ppi” افزایش دهید. پس از اتمام 
تغییرات روی “Print” کلیک کنید.

خلاصه
-------

اینها چند افزونه کاربردی بودند که برای JOSM موجود است. برای پیدا 
کردن افزونه‌های فراوان دیگر احساس راحتی کرده و بگردید. همانطور که قبلاً دیدید، 
منوی تنظیمات توضیح کوتاهی درباره هر افزونه دارد و می‌توانید 
صفحه وبسایتی را با کلیک روی "More Info..." کنار هر افزونه باز کنید که در آن  اطلاعات کاملی 
درباره آن افزونه می‌دهد.

![More Info Link][]

موفق باشید!

ضمیمه
--------

جزئیات DirectUpload
--------------------

![Direct Upload Plugin][]

افزودن فایلهای GPS به سرور OSM به چندین 
دلیل مفید است.
__اگر نمی‌خواهید فایل GPX شما توسط دیگران دیده شود مجبور نیستید این بخش را بخوانید. براحتی می‌توانید فایلهای GPXتان را در  JOSM ببینید و همانجا آنها را در رایانه خود ذخیره کنید)
قبل از هر چیز، مسیرهای GPS راحتترین راه جمع‌آوری داده و 
آدرس‌دهی جغرافیایی عوارض در OSM هستند. [Aerial Imagery](/fa/josm/aerial-imagery/) را ببینید.
GPS units have greater accuracy than satellite imagery and therefore are
a useful tool for checking how offset imagery may be. Using many GPS
tracks (the greater the number of tracks the greater the ability to
determine geolocation accuracy) allows you to determine if background
imagery may be misaligned.

Uploading tracks to the server permits greater sharing of information.
It allows people who do not have access to the field, simply because
they do not live in that area or they do not have access to a GPS
devices, to help with digitizing. There are two ways to upload your
traces: 1) JOSM Plugin or 2) on the main OSM website.

> Note: GPS waypoints cannot be uploaded to the OSM database directly.
> However, they can be converted to tracks and then be uploaded temporarily,
> for example, so they can be displayed as background objects in Potlatch.

After you have opened your GPX file in JOSM and clicked Go to
"Tools" and click "Upload traces". Describe the GPX file,
write some tags, and visibility. For visibility, you can choose whether
private, trackable, public or identifable.

1.  **Identifiable**: Your trace will be shown publicly in Your
    GPS**traces and in the public GPS traces list. Other users can
    download the raw trace and connect it with your username. Timestamps
    of the tracks points will also be available through the public GPS
    API.

2.  **Public**: Your trace will be shown publicly in Your GPS**traces
    and in the public GPS traces list. Other users are still able to
    download the raw trace from the public trace list and any timestamps
    contained within. However, data shown in the API does not reference
    your trace page, nor are the timestamps available, though the points
    are chronically ordered.

1.  **Trackable**: The trace will **not** show up in any public
    listings, but the trackpoints will still be available through the
    public GPS API **with timestamps**. Other users will be able
    to download the trackpoints but these will not be associated with
    you.

2.  **Private**: The trace will **not** show up in any public
    listings. Trackpoints will be available in timeline order through
    the public GPS API **without timestamps**.

![DirectUpload Traces Options][]

Uploading GPS Traces Online
---------------------------

1. Go
to [http://www.openstreetmap.org/](http://www.openstreetmap.org/) and log in.

2. Select "GPS Traces" found on the left banner.

![Left Banner][]

3. Select
[upload a trace](http://www.openstreetmap.org/trace/create).
Here, you can also  **See just your traces** to review previous GPS tracks.  

4. Find your file in "Choose File". Label it in the Description
box, give it some Tags, and chose what type of Visibility it will have.
If you have many .gpx files you can compress them into a zip archive and
upload it. It will be treated as one large gpx file and only one entry
on the trace list will be created. 

![Online Upload Traces Options][]

5. Click *Upload*.

  The file will be uploaded to the OSM server, where it will join the
queue of files waiting to be inserted into the database.

[Plug Icon]: /images/josm/josm-plugins_image00_plug-icon.png
[Restart JOSM]: /images/josm/josm-plugins_image01_restart-josm.png
[Mirrored Download]: /images/josm/josm-plugins_image02_mirrored_download.png
[Download from OSM Mirror]: /images/josm/josm-plugins_image03_download-from-osm-mirror.png
[Direct Upload]: /images/josm/josm-plugins_image04_direct-upload.png
[Upload Traces Item]: /images/josm/josm-plugins_image05_upload-traces-item.png
[Upload Traces Window]: /images/josm/josm-plugins_image06_upload-traces-window.png
[Edit Gpx]: /images/josm/josm-plugins_image07_edit-gpx.png
[Edit Gpx Tool Icon]: /images/josm/josm-plugins_image08_edit-gpx-tool-icon.png 
[Open GPX File]: /images/josm/josm-plugins_image09_open-gpx-file.png
[GPX Nodes All]: /images/josm/josm-plugins_image10_gpx-nodes-all.png
[GPX Nodes Selected]: /images/josm/josm-plugins_image11_gpx-nodes-selected.png
[Print Plugin]: /images/josm/josm-plugins_image12_print-plugin.png
[Print Menu Item]: /images/josm/josm-plugins_image13_print-menu.png
[Print Dialog]: /images/josm/josm-plugins_image14_print-dialog.png
[More Info Link]: /images/josm/josm-plugins_image15_more-info-link.png
[Direct Upload Plugin]: /images/josm/josm-plugins_image16_direct-upload-plugin.png
[DirectUpload Traces Options]: /images/josm/josm-plugins_image17_directupload-traces.png
[Left Banner]: /images/josm/josm-plugins_image18_left-banner.png
[Online Upload Traces Options]: /images/josm/josm-plugins_image19_online-upload-traces.png

-->


[Plugins]: /images/josm/josm-plugins_image00_plug-icon.png
