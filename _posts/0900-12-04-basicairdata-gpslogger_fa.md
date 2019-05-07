---
layout: doc-rtl
title: BasicAirData GPS Logger
permalink: /fa/mobile-mapping/basicairdata-gpslogger/
lang: fa
category: mobile-mapping
---


BasicAirData GPS Logger
=======================

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
* تجسم‌سازی مسیرها با استفاده از هر گونه نشاندهنده فایلهای KML/GPX نصب شده، مستقیماْ از لیست مسیرها
* گرفتن خروجی از پوشه GPSLogger/ دستگاهتان به صورت KML، GPX و TXT
* اشتراک گذاری مسیر، به صورت فرمت KML ،GPX و TXT، از طریق ایمیل، دراپ باکس، گوگل درایو، FTP، ...
* استفاده از واحدهای متریک، امپریال، و یا دریایی

کاربرد اصلی
-----------

![BasicAirData-GPSLogger-001][]

If the GPS location is not active on your phone, activate it. Then go in an open area and start GPS Logger.

1. Wait until the app finds the fix. When available, the __GPS FIX__ tab will start to show the coordinates of the Fix. At this point (when possible) you should wait at least another minute before proceeding with the next phase in order to allow the signal to stabilize
2. Click on the __Trackpoints__ button of the bottom panel to start recording track points. The button will become red. You can switch recording process on and off at any time by clicking on that button. The button shows the number of the trackpoints recorded.
به زبانه __TRACK__ بروید تا آمار لحظه به لحظه سفر خود را ببینید.
3. هنگامی که سفر شما تمام شد، بر روی __V tick__ کوچک واقع در نزدیکی گوشه سمت راست بالا کلیک کنید تا مسیر جاری نهایی (پایان) شود.
4. به زبانه __TRACKLIST__ بروید، جایی که مسیری را که قبلاْ ثبت کرده‌اید پیدا خواهید کرد. روی مسیر ضربه بزنید یک منو ظاهر خواهد شد که می‌توانید مسیر را به روشهای گوناگونی به اشتراک بگذارید، آن را با استفاده از یک مشاهده‌گر نصب شده ببینید، آن را به پوشه GPSLogger/ گوشی هوشمند خود منتقل کنید، یا از لیست مسیرها حذف کنید. فرمت‌های مورد استفاده برای خروجی گرفتن را می‌توان در صفحه تنظیمات پیکربندی نمود.

وارد کردن مسیرهای GPX به ویرایشگر OpenStreetMap
--------------------------------------------

هنگامی که در حال جمع آوری اطلاعات میدانی هستید، می‌توانید مسیرهای GPX را برای استفاده در JOSM، iD یا یکی دیگر از ویرایشگر های OpenStreetMap وارد کنید.
به سادگی از روش ساده دو مرحله‌ای استفاده کنید:

1. به یکی از روش های زیر مسیر GPX را در رایانه شخصی خود ذخیره کنید:
* Go on the GPS Logger tracklist, tap on the desired track and then click on __Export__; the GPX file will be created and saved on the /GPSLogger folder of your Android device (make sure that GPX format is enabled on the settings screen). Then connect the phone with your PC using a USB cable and move (or copy) your GPX tracks on your PC using the File Manager;
* As alternative, you can use the __Share__ feature to send the file to the PC (you can do it via e-mail, FTP, or using many Cloud Services). The sharing possibilities depend on the third-party apps installed on your Android Device;
2. مسیر GPX را به ویرایشگر OpenStreetMap وارد کنید: استفاده از مسیرهای GPX در ویرایشگرهای JOSM و iD آسان است کافی است فایل را کشیده و درون برنامه (یا در iD به زبانه مرورگر) بیندازید.

مستندات رسمی
----------------------

جهت اطلاعات بیشتر در مورد این برنامه میتوانید [این مقاله](http://www.basicairdata.eu/projects/android/android-gps-logger/) را بخوانید. <br>
- [اینجا](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) میتوانید یک راهنمای شروع کار و یک مرور کلی از تنظیمات برنامه را پیدا کنید. <br>
- در حین کار و یا با تنظیمات GPS Logger مشکل دارید؟ صفحه [سوالات رایج](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions) را بخوانید!

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg