---
layout: doc-rtl
title: راه‌اندازی PostgreSQL
permalink: /fa/osm-data/postgresql/
lang: fa
category: osm-data
---

PostgreSQL و PostGIS
====================


در این فصل، خواهیم دید چگونه PostgreSQL را روی ویندوز راه‌اندازی کنیم و چگونه یک پایگاه‌داده بسازیم که بتواند دادهٔ جغرافیایی را ذخیره کند. ما در این فصل از نرم‌افزار منبع‌باز GIS، یعنی QGIS، استفاده خواهیم کرد. بنابراین اگر قبلاً با آن آشنایی دارید، مفید خواهد بود. در فصل بعد خواهیم دید چگونه دادهٔ OpenStreetMap را به پایگاه‌دادهٔ PostgreSQL درون‌برد کنیم.  

نصب PostgreSQL و PostGIS
----------------------------------

در این بخش PostgreSQL را نصب می‌کنیم و سپس extensionهای مکانیِ PostGIS را اضافه می‌کنیم. با استفاده از نصب‌کنندهٔ یک‌کلیکه این کار بسیار آسان است. با مرورگر وب خود به وبسایت PostgreSQL و سپس صفحهٔ دانلود <http://www.postgresql.org/download/> بروید.  

![postgresql website][]

از اینجا می‌توانید دستورالعمل‌های نصب برای سیستم‌عامل‌های مختلف را پیدا کنید. روی لینک **Windows** کلیک کنید.  
این صفحه توضیح می‌دهد که برنامهٔ نصاب یک‌کلیکه چه کار خواهد کرد. سه جزء مختلف نصب خواهد شد:  

* **PostgreSQL server**: نرم‌افزار پایگاه‌داده؛ هستهٔ اصلی  
* **pgAdmin 4**: The graphical interface for managing your databases  
* **StackBuilder**: ابزاری برای افزودن برنامه‌های اضافه‌تر؛ برای اضافه‌کردن extensionهای PostGIS از این استفاده می‌کنیم  

روی **Download** کلیک کنید.  

![postgresql download][]

You will see several different Installer options for different versions of the PostgreSQL software. Download the most recent version for your Windows version.

![postgresql version][]

با اتمام دانلود، فایل نصب یک‌کلیکه را اجرا کنید.  

![install 1][]

روی **Next** کلیک کنید تا مراحل دستیار نصب را طی کنید. گزینه‌های پیش‌فرض باید مناسب باشند. باید برای اولین کاربر پایگاه‌داده (کاربر postgres) یک گذرواژه بدهید. این کاربر دسترسی‌های ابَرکاربر را دارد، به این معنی که می‌تواند هر کاری بخواهد انجام دهد، بنابراین گذرواژه‌ای که به کار می‌برید را فراموش نکنید!  


پس از اینکه در دستیار نصب چند بار کلیک کردید و گزینه‌های پیکربندی پیش‌فرض را پذیرفتید، دستیار نصب، همه‌چیز را برای شما نصب خواهد کرد. ممکن است چند دقیقه طول بکشد.  

هنگامی که نصب کامل شد، دستیار نصب از شما می‌پرسد آیا می‌خواهید StackBuilder را اجرا کنید. این همان ابزاری است که ما را قادر به نصب PostGIS می‌کند. قبل از اینکه روی **Finish** کلیک کنید مطمئن شوید تیک را زده باشید.  

![install 2][]

اکنون PostgreSQL را با موفقیت نصب کرده‌ایم و باید extensionهای PostGIS را اضافه کنیم. هنگامی که دستیار StackBuilder باز می‌شود، نصب PostgresSQL را از منوی کشویی انتخاب کرده و روی **Next** کلیک کنید. این چیزی شبیه به این خواهد بود:  

![install 3][]

زبانهٔ Extensions Spatial را باز کنید و گزینهٔ PostGIS را علامت بزنید. جدیدترین نسخهٔ PostGIS در زمان نوشتن این متن، 2.1 است.  

![install 4][]

برای دانلود و نصب extensionها روی **Next** کلیک کنید. هنگام اعلان، برای پذیرفتن شرایط و ضوابط، روی **I Agree** کلیک کنید.  

نصب‌کنندهٔ PostGIS سوالات بیشتری می‌پرسد، اما به‌طور کلی گزینه‌های پیش‌فرض خوب هستند. می‌توانید به آن بگویید که اولین پایگاه‌داده را به‌طور خودکار ایجاد کند، اما بعداً یاد خواهیم گرفت که چطور خودمان این کار را انجام دهیم. برای شروع نصب PostGIS باید گذرواژهٔ postgres را وارد کنید. این گذرواژه را هنگام نصب PostgreSQL ایجاد کردید.  

![install 5][]

اگر از شما خواسته شد که متغیر محیطی **GDAL_DATA** را ثبت کنید، روی **Yes** کلیک کنید.  

![install 6][]

وقتی نصب کامل شد، روی **Close** و سپس **Finish** کلیک کنید.  

ساخت پایگاه‌داده
--------------------

Now that we have installed all of the necessary software, we will create a database. We will use pgAdmin 4, which is a graphical database client that is useful for querying and modifying
پایگاه‌داده‌ها مفید است.  

![pgadmin3][]

PgAdmin 4 is the official client for PostgreSQL and lets you use the SQL language to manipulate your data tables.  It is also possible to create and manipulate databases from the command-line, but for now, pgAdmin 4 is an easy way to get started.  

Open pgAdmin 4.  It should be in the Start Menu under All Programs -> PostgreSQL 9.3 > pgAdmin 4.  

![pgadmin3 start][]

در کادر سمت چپ در قسمت Servers، روی PostgreSQL راست‌کلیک کنید و **Connect** را بزنید.  

![postgresql connect][]

گذرواژهٔ کاربر postgres که هنگام نصب نرم‌افزار ایجاد کردید را وارد کنید. به یاد داشته باشید که برای اینکه بتوانید پایگاه‌داده بسازید و بتوانید به آن دسترسی پیدا کنید نام کاربری و گذرواژه لازم است.  

![enter password][]

روی **Databases** کلیک‌راست کنید و **New Database** را انتخاب نمایید...  

![new database][]

برای ایجاد پایگاه‌دادهٔ جدید باید اطلاعاتی را وارد کنید: Name (نام) و Owner (مالک).  در زبانهٔ Properties، به پایگاه‌دادهٔ جدید یک نام اختصاص بدهید. در این مثال، ما پایگاه‌دادهٔ خود را gisdb نامگذاری می‌کنیم.  همچنین بایستی به پایگاه‌دادهٔ خود یک مالک بدهیم.  ازآنجایی‌که در حال حاضر فقط یک کاربر داریم، postgres را به‌عنوان مالک پایگاه‌داده تعیین می‌کنیم. (توجه: به دلایل امنیتی معمولاً بهتر است که کاربران را بدون مجوز superuser (ابَرکاربر) ایجاد کنیم، اما الآن دربارهٔ این موضوع نگرانی نداریم.)  

![new database form][]

<!-- Under the Definition tab, keep the defaults, but next to Template select template_postgis.  This will create our database with the proper spatial columns. -->

Click **OK** to create the database.  You will now see your database listed under “**Databases**.” We need to run a command now to enable the database with PostGIS extensions. Click on ![sql button][]{: height="24px"} at the top of PgAdmin 4.  



در پنجرهٔ پرس‌وجو، تایپ کنید:  

**CREATE EXTENSION postgis;**  

سپس روی دکمهٔ **Execute query** (اجرای پرس‌وجو) کلیک کنید.  

![postgis command][]

بارکردن دادهٔ نمونه (اختیاری)
---------------------------

اگر تا کنون با QGIS احساس راحتی کرده‌اید و با آن آشنا هستید، همراه ما باشید تا مقداری داده در پایگاه‌دادهٔ جدیدمان بار کنیم. برای انجام این کار، از ابزاری استفاده می‌کنیم که شیپ‌فایل‌ها را تبدیل و آن‌ها را در پایگاه‌داده بار می‌کند.  

Make sure that your new database is selected in the panel on the left and go to **Plugins -> PostGIS Shapefile and DBF loader 2.x**.

![shapefile loader][]

- 	روی **Add File** کلیک کنید و یک shapefile در کامپیوتر خود پیدا کنید.
- 	اگر هیچ شیپ‌فایلی ندارید، می‌توانید نمونه‌ای را از [اینجا](/files/buildings_sample.zip) دانلود کنید.
- 	هنگامی که یک فایل را انتخاب کردید، روی **Import** کلیک کنید. اگر همه‌چیز هموار باشد، در خروجی **Shapefile import complete** را خواهید خواند.

![add shapefile][]

اکنون بیایید داده را از پایگاه‌داده‌مان درون برنامهٔ QGIS بار کنیم. اگر QGIS ندارید می‌توانید آن را در [وبسایت QGIS](http://www.qgis.org/site/forusers/download.html) دانلود کنید.  

-	QGIS را باز کنید و روی این دکمه کلیک کنید: ![qgis add postgis button][]{: height="24px"}  
- 	در قسمت Connections در بالا، روی **New** کلیک کنید.  
-	به اتصال جدید نام بدهید.  در قسمت database بنویسید **gisdb** (یا هر نام دیگری که به پایگاه‌دادهٔ خود داده‌اید). نام کاربری را postgres بنویسید و گذرواژهٔ خود را در وارد کنید:  

![connection settings][]

- 	روی **OK** کلیک کنید تا تنظیمات اتصال ذخیره شود. سپس برای اتصال به کارساز PostgreSQL خود، روی **Connect** کلیک کنید. ممکن است لازم باشد دوباره نام کاربری و گذرواژهٔ خود را وارد کنید.  
-	اگر همه‌چیز موفقیت‌آمیز باشد، می‌توانید لایهٔ شیپ‌فایل (یا لایه‌های متعدد با انواع عارضه‌های مختلف) را ببینید که در پایگاه‌دادهٔ موجود بار شده است. یک لایه را انتخاب کنید و روی **Add** کلیک کنید تا آن را به نقشهٔ خود اضافه کنید.  

![your data layer][]

هنگامی که لایه را اضافه می‌کنید، باید یک سیستم مختصات را برای نمایش داده انتخاب کنید. به احتمال زیاد بخواهید WGS 84 را انتخاب کنید که همان سیستم مختصات مورداستفاده در OpenStreetMap است.  

> این لایه همان‌طور رفتار می‌کند که انگار یک شیپ‌فایل را مستقیماً در QGIS بار کرده‌اید. تنها فرقش این است که اگر لایه را ویرایش کنید، تغییرات در پایگاه‌دادهٔ شما ذخیره خواهند شد.  

خلاصه
-------

حال که دیدید چگونه PostgreSQL و PostGIS را راه‌اندازی می‌کنیم و همچنین چگونه یک پایگاه‌دادهٔ جدید می‌سازیم، آماده‌اید تا ابزارهایی را امتحان کنید که با آن‌ها می‌توانیم دادهٔ خام OSM را به پایگاه‌داده درون‌برد کنیم. به این موضوع در [فصل بعدی](/fa/osm-data/osm2pgsql) نگاهی خواهیم انداخت.  



[postgresql website]: /images/osm-data/postgresql-website.png
[postgresql download]: /images/osm-data/postgresql-download.png
[postgresql version]: /images/osm-data/postgresql-version.png
[install 1]: /images/osm-data/postgresql-install-1.png
[install 2]: /images/osm-data/postgresql-install-2.png
[install 3]: /images/osm-data/postgresql-install-3.png
[install 4]: /images/osm-data/postgresql-install-4.png
[install 5]: /images/osm-data/postgresql-install-5.png
[install 6]: /images/osm-data/postgresql-install-6.png
[pgadmin3]: /images/osm-data/pgadmin3.png
[pgadmin3 start]: /images/osm-data/pgadmin3-start.png
[postgresql connect]: /images/osm-data/postgresql-connect.png
[enter password]: /images/osm-data/enter-password.png
[new database]: /images/osm-data/new-database.png
[new database form]: /images/osm-data/new-database-form.png
[sql button]: /images/osm-data/sql-button.png
[postgis command]: /images/osm-data/postgis-command.png
[shapefile loader]: /images/osm-data/shapefile-loader.png
[add shapefile]: /images/osm-data/add-shapefile.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[your data layer]: /images/osm-data/your-data-layer.png







