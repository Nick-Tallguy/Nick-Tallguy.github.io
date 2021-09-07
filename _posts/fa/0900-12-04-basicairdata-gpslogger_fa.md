---
layout: doc-rtl
title: BasicAirData GPS Logger
permalink: /fa/mobile-mapping/basicairdata-gpslogger/
lang: fa
category: mobile-mapping
---

BasicAirData GPS Logger
=======================

> Reviewed 2021-06-12

![BasicAirData-GPSLogger-002][]

BasicAirData GPS Logger یک برنامه ساده برای ثبت موقعیت و مسیر شما است. این برنامه یک ردیاب GPS پایه و سبک است که بر روی دقت تمرکز بیشتری دارد، همچنین نیم نگاهی به صرفه‌جویی در مصرف باتری دارد. اگر تنظیم تصحیح خودکار ارتفاع EGM96 را در تنظیمات فعال کنید این برنامه در تعیین ارتفاع شما بسیار دقیق است. می‌توانید تمام سفرهای خود را ضبط کنید، به طور مستقیم از لیست مسیرهای برنامه آنها را در برنامه مورد نظر خود ببینید (باید آن را نصب کنید)، و آنها را در قالب‌های KML ،GPX و TXT به انواع روشها به اشتراک بگذارید.

این برنامه برای دستگاه‌های آندروید، منبع باز و رایگان است.

برنامه را می‌توانید به رایگان از [فروشگاه گوگل](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger) دریافت کنید.<br>
همچنین فایل نصبی برنامه را می‌توانید از [مخزن گیت‌هاب](https://github.com/BasicAirData/GPSLogger/tree/master/apk) GPSLogger' دانلود کنید.

ویژگیها
--------

![BasicAirData-GPSLogger-000][]

* ضبط مسیر - برنامه درون خود نقشه‌ای ندارد
* یک رابط کاربری مدرن با تم تاریک کم مصرف و رابط زبانه‌دار
* ضبط در پیش‌زمینه و در پس‌زمینه (در آندروید ۶ به بالا همه نظارت باتری و بهینه‌سازی برای این برنامه خاموش کنید)
* ایجاد مکان در حین ضبط
* تجسم‌سازی اطلاعات GPS
* اصلاح دستی سطح ارتفاع (اضافه کردن افست کلی)
* اصلاح ارتفاع خودکار براساس مدل NGA EGM96 Earth Geoid (باید در تنظیمات فعال شود)
* آمار مسیر لحظه به لحظه
* نشان دادن لیست مسیرهای ضبط شده در برنامه
* تجسم‌سازی مسیرها با استفاده از هر گونه نشاندهنده فایلهای KML/GPX نصب شده، مستقیماً از لیست مسیرها
* گرفتن خروجی از پوشه GPSLogger/ دستگاهتان به صورت KML، GPX و TXT
* اشتراک گذاری مسیر، به صورت فرمت KML ،GPX و TXT، از طریق ایمیل، دراپ باکس، گوگل درایو، FTP، ...
* استفاده از واحدهای متریک، امپریال، و یا دریایی

کاربرد اصلی
-----------

![BasicAirData-GPSLogger-001][]

اگر موقعیت GPS در تلفن شما فعال نیست، آن را فعال کنید. سپس به یک منطقه باز رفته و GPS Logger را اجرا کنید.

1. صبر کنید تا برنامه موقعیت را فیکس کند. وقتیکه اینکار انجام شد، زبانه __GPS FIX__ مختصات را نشان خواهد داد. در این مرحله (در صورت امکان) قبل از شروع مرحله بعدی حداقل یک دقیقه دیگر منتظر بمانید تا سیگنال کاملاً ثابت شود.
2. Click the __Record__ button of the bottom panel to start recording track points. The button will become red. switch recording process on and off at any time by clicking on that button. At the top of the button the app shows the number of the trackpoints recorded.
به زبانه __TRACK__ بروید تا آمار لحظه به لحظه سفر خود را ببینید.
3. When your trip is finished, click the __Stop__ button to finalize (finish) the active track. A dialog will appear, click __OK__ to confirm.
4. Go to the __TRACKLIST__ tab, where you will find the track you have just recorded. Tap on the track. A menu will appear. You can choose to share the track in many ways, view it using an installed external viewer, edit the track details, export it into /GPSLogger folder of your smartphone, or delete it from the tracklist. The formats used for export can be configured on the settings screen.

وارد کردن مسیرهای GPX به ویرایشگر OpenStreetMap
--------------------------------------------

هنگامی که در حال جمع آوری اطلاعات میدانی هستید، می‌توانید مسیرهای GPX را برای استفاده در JOSM، iD یا یکی دیگر از ویرایشگر های OpenStreetMap وارد کنید.
به سادگی از روش ساده دو مرحله‌ای استفاده کنید:

1. به یکی از روش های زیر مسیر GPX را در رایانه شخصی خود ذخیره کنید:
* به لیست مسیرهای GPS Logger بروید، روی مسیر مورد نظر ضربه بزنید و سپس روی __Export__ کلیک کنید. فایل GPX در پوشه GPSLogger/ دستگاه Android تان ایجاد می شود (مطمئن شوید که فرمت GPX در صفحه تنظیمات فعال شده است). سپس با استفاده از کابل USB تلفن خود را به کامپیوتر متصل کرده و با استفاده از مدیر فایل مسیرهای GPX خود را به کامپیوتر منتقل (یا کپی) کنید؛
* به عنوان روش جایگزین، می توانید از ویژگی __Share__ برای ارسال فایل به کامپیوتر استفاده کنید (می توانید از طریق ایمیل، FTP یا با استفاده از سرویسهای ابری این کار را انجام دهید). امکانات اشتراک گذاری به برنامه های شخص ثالثی که در دستگاه Android شما نصب شده است بستگی دارد؛
2. مسیر GPX را به ویرایشگر OpenStreetMap وارد کنید: استفاده از مسیرهای GPX در ویرایشگرهای JOSM و iD آسان است کافی است فایل را کشیده و درون برنامه (یا در iD به زبانه مرورگر) بیندازید.

مستندات رسمی
----------------------

جهت اطلاعات بیشتر در مورد این برنامه میتوانید [این مقاله](http://www.basicairdata.eu/projects/android/android-gps-logger/) را بخوانید. <br>
- [اینجا](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) میتوانید یک راهنمای شروع کار و یک مرور کلی از تنظیمات برنامه را پیدا کنید. <br>
- در حین کار و یا با تنظیمات GPS Logger مشکل دارید؟ صفحه [سوالات رایج](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions) را بخوانید!

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg