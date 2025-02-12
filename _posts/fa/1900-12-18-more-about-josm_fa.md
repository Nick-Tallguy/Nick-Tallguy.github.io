---
layout: doc-rtl
title: فرآیند ویرایش با JOSM
permalink: /fa/josm/more-about-josm/
lang: fa
category: josm
---

فرآیند ویرایش با JOSM
========================


در بخش پیشین، JOSM را نصب کردید و نخستین نقطه‌ها، خط‌ها و شکل‌های خود را رسم نمودید. پیش‌تنظیم‌هایی را روی این اشیا به کار گرفتید تا اطلاعاتی دربارهٔ هر کدام به آن‌ها پیوست کنید. در پایان، توانستید نقشهٔ خودتان را در JOSM رسم کنید.

تا به حال تمرین خوبی داشتیم و اکنون آماده‌ایم تا اوپن‌استریت‌مپ را ویرایش کنیم.

در این بخش نگاه دقیق‌تری به واسط کاربری JOSM می‌اندازیم و می‌بینیم چگونه می‌توانیم با استفاده از آن اوپن‌استریت‌مپ را ویرایش کنیم.

چرخهٔ ویرایش
---------------------
ویرایش اوپن‌استریت‌مپ با استفاده از JOSM همانند ویرایش با iD است که پیشتر دیدیم. اما از آنجایی که JOSM نرم‌افزار رومیزی است، نحوهٔ کارش اندکی متفاوت است. فرآیند ویرایش و ذخیره در اوپن‌استریت‌مپ با استفاده از JOSM همواره این‌گونه است:

1. **دانلود** دادهٔ کنونی نقشه از OSM
2. **ویرایش** داده با بهره‌گیری از تصاویر ماهواره‌ای، GPS، ورقه‌های میدانی و یادداشت‌ها (به‌عنوان راهنما)
3. **ذخیره**‌کردن تغییرات در اوپن‌استریت‌مپ

دانلود دادهٔ OSM
--------------------
برای برداشتن اولین گام ویرایش باید دادهٔ منطقه‌ای از جهان که می‌خواهیم بهبود بدهیم را دانلود کنیم. به خاطر داشته باشید که هر بار که می‌خواهید تغییری در نقشه بدهید باید این کار را بکنید، زیرا سایر کاربران نقشه را مرتب روزآمد می‌کنند.

- روی File در گوشهٔ بالا سمت چپ JOSM کلیک کنید و روی بارگیری داده... کلیک کنید. این کار پنجرهٔ دانلود را باز می کند. می‌توانید به‌سادگی با کلیک روی دکمهٔ دانلود، که اینجا نشان داده شده است، به این پنجره دسترسی پیدا کنید:

![JOSM Download Button][]

- هنگامی که پنجرهٔ دانلود باز می‌شود، نقشه‌ای در برابرتان قرار می‌گیرد. اگر نقشه را نمی‌بینید، روی زبانه‌ای که Slippy map نام دارد کلیک کنید.

![JOSM Download Dialog][]

- با استفاده از ماوس نقشه را جابه‌جا کنید و روی منطقه‌ای که خیلی خوب می‌شناسید زوم کنید، مانند زادگاه یا محله‌تان. کنترل‌های اینجا همانند پنجرهٔ نقشهٔ JOSM است. با دکمهٔ سمت راست ماوس می‌توانید نقشه را بکشید و با دکمهٔ چرخانِ نَوَردش می‌توانید زوم را کم و زیاد کنید.

> گاهی اوقات اگر در حال کار با نوت‌بوک باشید، ممکن است نوردش دشوار باشد. کار با JOSM بسیار ساده‌تر خواهد بود اگر یک ماوس داشته باشید، اما با اکثر نوت‌بوک‌های مدرن می‌توانید با استفاده از صفحهٔ لمسی نَوَردش کنید.

- دور منطقه‌ای که می‌خواهید دانلود کنید کادری بکشید. برای رسم کادری جدید، روی نقشه کلیک کنید، دکمهٔ سمت چپ ماوس خود را پایین نگه دارید، و ماوس را برای ایجاد کادر بکشید. برای پایان‌دادن به رسم کادر دکمهٔ ماوس را رها کنید.
- هنگامی که اندازه و محل کادر رضایت‌بخش بود، روی Download در پایین پنجره کلیک کنید. JOSM دادهٔ این منطقه را از OpenStreetMap دریافت می‌کند و آن را در پنجرهٔ نقشه برای ویرایش باز می‌کند.

### افزودن تصاویر ماهواره‌ای
اگر آموزش‌های قبلی را خوانده باشید، وقتی اولین نقطه‌ها را با ویرایشگر iD اضافه کردیم، باید به یاد داشته باشید که زیر دادهٔ نقشه یک تصویر ماهواره‌ای وجود داشت که به ما در شناسایی اشیای روی زمین کمک کرد. این تصویر از Microsoft Bing بود که سخاوتمندانه تصاویر خود را در اختیار کاربران OpenStreetMap قرار داده تا هنگام مشارکت در رسم نقشه، آن را مرجع خود قرار دهند.

- برای افزودن تصاویر ماهواره‌ای بینگ در JOSM، روی Imagery در منوی بالای JOSM کلیک کنید و Bing Sat را برگزینید.

> اگر Bing Sat را در منوی Imagery نمی‌بینید، لازم است آن را در تنظیمات JOSM فعال کنید. به Edit ->‏ Preferences بروید و روی نقشک WMS TMS کلیک کنید. شاید لازم باشد روی فلش رو به پایین کلیک کنید تا آن را بیابید. همچنین می‌توانید در کادر جست‌وجو بنویسید Bing تا لیست را پالایش کنید و زودتر بیابیدش.
>
> ![JOSM Preferences up down][]
> ![JOSM Preferences WMS TMS][]
>
> روی Bing Sat کلیک کنید و سپس Activate را بزنید. 


### گردش در JOSM
حال که دادهٔ OpenStreetMap را دانلود کرده‌ایم و تصاویر ماهواره‌ای بینگ را اضافه کرده‌ایم، بیایید واسط کاربری JOSM را بیشتر بررسی کنیم.

![JOSM layout][]

پنجرهٔ اصلی که قبلاً با آن آشنا شده‌اید؛ این پنجرهٔ نقشه است و جایی است که بیشتر کارها اینجا انجام می‌شود. در اینجا دادهٔ OpenStreetMap را مشاهده، ویرایش و اضافه می‌کنید.

در سمت راست پنجرهٔ نقشه مجموعه‌ای از پنجره‌های کوچک‌تر را می‌بینید که هر کدام عملکرد خاص خود را دارد. معمولاً هنگامی که برای اولین بار JOSM را نصب می‌کنید چندین پنجرک به‌طور پیشفرض نمایان هستند؛ مانند Layers،‏ Properties و Selection. هنگامی که نقطه، خط یا شکلی را در پنجرهٔ نقشه انتخاب می‌کنید، اطلاعات مربوط به شیء در پنجرک Properties نشان داده خواهد شد و نام کاربری ویرایش‌کنندهٔ آن شی در پنجرک Authors نشان داده خواهد شد.

These panels can be opened or closed by clicking on the various buttons on lower left side of JOSM. Above these buttons in the upper left are tools which change what you can do with your mouse. You are already familiar with some of them, the Select tool and the Draw tool. Below them are tools which make it easier to zoom in, delete an object, draw a shape, or create a line that is parallel to another line.


ویرایش
----
فعلاً مرحلهٔ اول از فرآیند ویرایش را تکمیل کرده‌ایم، یعنی دانلود. همچنین تصویر ماهواره‌ای را به‌عنوان مرجع در JOSM تنظیم کرده‌ایم. گام بعدی ویرایش نقشه و افزودن چیزهای جدید است.

بسته به منطقه‌ای که برای دانلود انتخاب کردید، ممکن است دادهٔ نقشه در آنجا خیلی زیاد یا خیلی کم باشد. در هر صورت، توجه کنید که این‌ها همان نوع داده‌ای هستند که پیشتر دیده‌ایم: نقاط، خطوط و اشکال و مکان‌های واقعی را نشان می‌دهند.

- از فنونی که تا کنون آموخته‌اید استفاده کنید و چند نقطه به نقشهٔ جاهایی که می‌شناسید اضافه کنید. اگر متوجه اشتباهی شدید، تلاش کنید آن را اصلاح نمایید.
- هنگام آموختن، خیلی خودتان را اذیت نکنید. اگر دربارهٔ چیزی مطمئن نیستید، بهتر است همان‌جور که هست رهایش کنید.
- برای جابه‌جاکردن نقطه، خط یا شکل، از **ابزار select** استفاده کنید. روی یک شی کلیک کنید و آن را به نقطهٔ مناسب بکشید. برای درست‌کردن محل قرارگیری چیزهایی که در جای نادرست قرار دارند از این روش استفاده کنید.

![JOSM select tool][]

-  برای رسم نقاط، خطوط و اشکال جدید از **ابزار رسم (draw)** استفاده کنید. همانطور که در بخش قبلی انجام دادید، با انتخاب از منوی Presets این اشیا را توصیف کنید.

> هرگز نقشه را خارج از محدودهٔ دانلودشده ویرایش نکنید. محدودهٔ مستطی‌شکلی که دانلود کرده‌اید شفاف است و محدوده‌ای که دانلود نکرده‌اید هاشور مورّب دارد.
>
> ![JOSM area downloaded][]

تغییرات را ذخیره کنید
--------------
سومین و آخرین گام برای تکمیل ویرایش‌هایمان آپلود تغییرات در پایگاه‌دادهٔ OpenStreetMap است. برای ذخیره‌سازی تغییرات، باید به اینترنت متصل باشیم.

- روی File در منوی بالا کلیک کنید و سپس روی Upload Data کلیک کنید. در نتیجه، پنجرهٔ آپلود باز می‌شود. برای راحتی بیشتر، می‌توانید روی دکمهٔ آپلود، کلیک کنید تا پنجرهٔ آپلود باز شود. که در اینجا می‌بینید:

    ![JOSM Upload Button][]

- پنجره‌ای که ظاهر می‌شود لیستی نشان می‌دهد از چیزهایی که اضافه می‌کنید و چیزهایی که اصلاح یا حذف می‌کنید. در کادر پایین از شما خواسته می‌شود دربارهٔ تغییراتی که انجام می‌دهید توضیحی ارائه کنید. در اینجا ویرایش خود را توصیف کنید.

    ![JOSM Upload Dialog][]

- روی Upload Changes کلیک کنید.

- اگر اولین بار است که تغییرات را در OpenStreetMap ذخیره می‌کنید، نام کاربری و گذرواژهٔ OpenStreetMap از شما خواسته می‌شود.
- آن‌ها را در پنجره‌ای که ظاهر می‌شود وارد کنید. اگر گزینهٔ موجود در این پنجره را علامت بزنید، نام کاربری و گذرواژهٔ شما ذخیره خواهد شد و نیازی نیست که در آینده دوباره آن‌ها را وارد کنید. روی Authenticate کلیک کنید.

    ![JOSM Authenticate][]

- باید چند ثانیه صبر کنید تا تغییراتتان آپلود شود و تمام! شما نقشهٔ OpenStreetMap را ویرایش کردید.

> هنگامی که در حال ویرایش هستید، همیشه پیش از بستن JOSM تغییرات خود را آپلود کنید. حتی اگر هنوز ویرایش‌های بیشتری برای انجام‌دادن دارید، بهتر است تغییرات خود را آپلود کنید و بعداً سر فرصت فرآیند ویرایش را دوباره طی کنید. این‌جوری احتمال ازدست‌دادن ویرایش‌ها کمتر می‌شود!

تغییرات خود را روی نقشه ببینید
---------------------------
- مرورگر اینترنت خود را باز کنید و به [http://openstreetmap.org/](http://openstreetmap.org/) بروید.
- نقشه را روی منطقه‌ای که ویرایش کرده‌اید ببرید.
-   You should see your changes now appearing on the map! If you don’t, try pressing CTRL+R to refresh the web page. Sometimes the browser still shows the old version and needs to be reloaded.
- اگر تغییرات خود را ندیدید چه؟ نگران نباشید؛ معمولاً چند دقیقه طول می‌کشد تا تغییرات روی نقشه نشان داده شود. همچنین، چیزهایی که اضافه کردید را به‌وسیلهٔ JOSM بررسی کنید تا مطمئن شوید آن‌ها به‌درستی اضافه شده‌اند. یک قانون کلی این است که اگر نقطهٔ شما در JOSM نماد داشته باشد، معمولاً باید آن را در نقشهٔ اصلی وب‌سایت OpenStreetMap مشاهده کنید.

خلاصه
-------
اکنون مشاهده کردید که چطور به OpenStreetMap اضافه کنید. اما مرحلهٔ بعد؟ باید گفت، ویرایش عالی است، اما یکی از جنبه‌های ساخت نقشه است. شما باید همچنین بیاموزید چگونه بیرون بروید و به‌صورت میدانی اطلاعاتی دربارهٔ مکان‌ها جمع‌آوری کنید.


[JOSM Download Button]: /images/josm/josm_download-button.png
[JOSM Download Dialog]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM select tool]: /images/josm/josm_select-tool.png
[JOSM area downloaded]: /images/josm/josm_area-downloaded.png
[JOSM Upload Button]: /images/josm/josm_upload-button.png
[JOSM Upload Dialog]: /images/josm/josm_upload-dialog.png
[JOSM Authenticate]: /images/josm/josm_authenticate.png
