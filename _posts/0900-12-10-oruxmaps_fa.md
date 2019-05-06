---
layout: doc-rtl
title: OruxMaps
permalink: /fa/mobile-mapping/oruxmaps/
lang: fa
category: mobile-mapping
---

OruxMaps
===============

> در تاریخ ۱۳۹۵/۰۵/۱۴ بازبینی شده است و گرچه کمی قدیمی است اما هنوز به درد بخور است و حاوی لینک به راهنمای خود نرم‌افزار در سایتش میباشد.

در این بخش، یاد خواهیم گرفت که چگونه OruxMaps را راه‌اندازی کنیم، چگونه نقاط بین‌راهی را ایجاد کنیم، یک tracklog را چگونه ببینیم و چگونه یک tracklog را برای استفاده در JOSM آماده کنیم.  

نصب OruxMaps
------------------

برنامه را از فروشگاه Google Play با جستجوی **OruxMaps** نصب کنید، OruxMaps باید در میان نتایج بالایی فهرست شده باشد.  

![Search OruxMaps in Play Store][]

بر روی دکمه **Install** کلیک کنید و دکمه Accept را بعد از ظاهر شدن مجوزهای برنامه بزنید.  

![Install OruxMaps][]

تبریک می گویم! شما   اکنون OruxMaps را در دستگاه خود نصب کرده اید!  

استفاده از OruxMaps
--------------------

اولین بار که برنامه را اجرا می‌کنید، یک اعلان مانند این را خواهید دید:  

![Running OruxMaps for the first time][]

در OruxMaps، می‌توانید انتخاب کنید که آیا می‌خواهید از نقشه‌های آنلاین یا نقشه‌های آفلاین استفاده کنید. بهتر است از نقشه‌های آفلاین استفاده کنید زیرا حتی بدون اتصال به اینترنت می‌توانید از آن استفاده کنید. OruxMaps دو منبع برای دانلود نقشه‌های آفلاین را پیشنهاد می‌کند. اگر قبلاْ برای خود نقشه آفلاین تهیه کرده‌اید، می توانید در اینجا نیز قرار دهید! شاید در شروع کمی گیج کننده باشد زیرا دکمه‌های زیادی وجود دارد. اما نگران نباشید، توضیح هر دکمه را در زیر می‌بینید:  

![Interface overview][]

منبع: [OruxMaps Manual English Version](http://www.google.com/url?q=http%3A%2F%2Fwww.oruxmaps.com%2Foruxmapsmanual_en.pdf&sa=D&sntz=1&usg=AFQjCNFY7Tk-Gzz9NFKy9WOsnfnn8x3Kwg)  
این کتابچه راهنمای کاربر ممکن است از راهنمای کنونی ما به روزتر باشد و همچنین به زبانهای دیگر نیز موجود باشد.  

می‌توانید نقشه پس زمینه خود را در قسمت **Maps \> Switch Maps** تغییر دهید. پس از آن می‌توانید گزینه خود را انتخاب کنید - از **نقشه‌های آنلاین** یا 
**نقشه آفلاین** استفاده کنید. OruxMaps منابع بسیاری از نقشه‌های آنلاین را فراهم می کند که می‌توانید آنها را انتخاب کنید البته به علت استفاده از داده دستگاه برای شما هزینه دارد. اگر می‌خواهید بدانید کجا می‌توانید نقشه آفلاین خود را قرار دهید، می توانید به **Setting \>Maps** بروید. در گزینه پوشه نقشه می‌توانید ببینید OruxMaps 
که نقشه‌های آفلاین کجا قرار داده می‌شوند. پیش فرض آن پوشه **OruxMaps/Mapfiles** در حافظه داخلی شما است.  

![Offline maps storage settings][]

شروع ثبت مسیر
--------------

قبل از اینکه شروع به ردیابی کنید، اجازه دهید بعضی از تنظیمات قسمت track/routes را بررسی کنیم. تنظیمات اول **Auto GPX Creation** است. اگر این تنظیم را فعال کنید، OruxMap به شما در ایجاد فایل gpx. بلافاصله بعد از تمام شدن مسیر قبلی (با استفاده از قابلیت توقف ثبت مسیر) کمک خواهد کرد. بنابراین، پس از اتمام یک مسیر، میتوانید به **OruxMaps/Tracklogs** در حافظه داخلی خود بروید تا فایل های gpx. خود را بدون نیاز به خروجی گرفتن از طریق track/routes management به دست آورید. تنظیم دوم **Ask Track Name** است. بسیار مفید است قبل از اینکه شما شروع به ردیابی کنید، نام مسیر خود را تعریف کنید تا دقیقاْ نام مسیرتان را بدانید.  

![Tracklog settings][]

To start tracking, one thing to remember is that we must set GPS Features in your device on. Any features in OruxMaps like **Start GPS** and **Start Rec** will not start unless you activate the GPS Features. OruxMaps will show notification if your GPS still disabled, and after that you will directly go to **Location Setting** in your device. After you turn on Location feature in your device, you can know your location by using **Start GPS** (1) feature in the right panel. After your location is already acquired, you can start Tracking by using **Start Rec.** (2) in the right Panel.  

![Start track recording][]

To stop tracking you only need to press the same button (2) in the right panel. After you stop tracking OruxMap will store your tracklog in an internal  database. You can access the tracklog by accessing **Routes** panel in top page, select **Manage**.You will find all of your tracklog here and you can see the route by press the tracklog that you want to see and select **Load the Track** (1). If you don’t use Auto GPX creation feature you can export your tracklog in various format (GPX, KML, KMZ) by select your tracklog and **Export as** (2).  

![Managing tracklogs][]

If you already have an OpenStreetMap account, you can upload your track directly using OruxMaps. Before you upload your tracklog you need to put your username and password by going to **Setting \> Integration \> OpenStreetMap**. After that enter your username and password. You can upload your tracklog by using **Upload to (3)** in track/routes management.  

Some windows will pop up and you need to select **OpenStreetMaps** (1) and after that you choose your **Tracklog type** (2), put your **Description** (3) and also the **Tag** (4). After all the information already filled up press **Upload GPX** (5). The notification will pop up and you can directly see your GPS traces on the OpenStreetMap website by selecting **OK** (6).  

![Uploading tracks to OpenStreetMap][]

اضافه کردن نقطه میانی مسیر
---------------------

![Creating a waypoint][]

If you want to add waypoint, you need to go to **Waypoint** symbol (1) at the top of the page and go to **Create** (2). It will bring you to waypoint creation page and fill your waypoint name. You can add extra information, for example a description of your waypoint and coordinates of your waypoint by checking the Coordinates checklist. Press Accept to save your waypoint.  

![Waypoint creation settings][]

If you want to see all of your waypoints, you can go to **Waypoint \>Manage**. From this page you can change the properties, delete and export the waypoint. To see all of your waypoints in **map**, select the waypoints and go to show in map (1) and if you want to export your waypoints press **Export** (2). All of your exported waypoints will be stored in internal storage (by the default it stored in **oruxmaps/geocaches**).  

![Managing save waypoints][]

خلاصه
-----------

تبریک می‌گوییم! حالا می‌دانید چگونه از OruxMaps برای بررسی میدانی استفاده کنید. اینکار شاید در اوایل کمی سخت باشد، اما با استفاده ممتد از آن، با این برنامه آشنا خواهید شد.  

[Search OruxMaps in Play Store]: /images/mobile-mapping/oruxmaps_image00.png
[Install OruxMaps]: /images/mobile-mapping/oruxmaps_image03.png
[Running OruxMaps for the first time]: /images/mobile-mapping/oruxmaps_image01.png
[Interface overview]: /images/mobile-mapping/oruxmaps_image09.png
[Offline maps storage settings]: /images/mobile-mapping/oruxmaps_image06.png
[Tracklog settings]: /images/mobile-mapping/oruxmaps_image11.png
[Start track recording]: /images/mobile-mapping/oruxmaps_image02.png
[Managing tracklogs]: /images/mobile-mapping/oruxmaps_image10.png
[Uploading tracks to OpenStreetMap]: /images/mobile-mapping/oruxmaps_image05.png
[Creating a waypoint]: /images/mobile-mapping/oruxmaps_image07.png
[Waypoint creation settings]: /images/mobile-mapping/oruxmaps_image08.png
[Managing save waypoints]: /images/mobile-mapping/oruxmaps_image04.png