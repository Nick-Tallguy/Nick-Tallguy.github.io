---
layout: doc-rtl
title: افزودن تصاویر هوایی tms،‏ wms یا wmts در JOSM
permalink: /fa/josm/josm-adding-imagery/
lang: fa
category: josm
---

JOSM - افزودن تصاویر هوایی
================

> تاریخ بازبینی ۱۳۹۵/۰۶/۱۹  

در منوی Imagery در JOSM همهٔ تصاویر هوایی وجود ندارند، اما چنانچه اطلاعات لینک تصاویر هوایی را داشته باشید، اضافه‌کردن آن‌ها آسان است.  

در این مثال با [مدیر وظایف HOT](http://tasks.hotosm.org/) کار می‌کنیم. تصاویر موردنیاز برای تکمیل یکی از پروژه‌ها باید به‌صورت دستی به JOSM افزوده شود. تا زمانی که لینک تصویر هوایی را داشته باشید، اساس افزودن لینک تصویر همیشه یکسان است و به آنچه روی آن ویرایش می‌کنید بستگی ندارد. البته مواردی وجود دارد که لینک موردنظر آن‌طور که انتظار می‌رود کار نمی‌کند و اگر بتوانید اطلاعات لینک را به دست آورید ممکن است لازم باشد تصویر را به‌صورت دستی اضافه کنید.  

از بخش اطلاعات مدیر وظایف یا منبع دیگر اطلاعات، تمام محتوای کادر Imagery را کپی کنید.  

![TM Imagery][]

به منوی تنظیمات JOSM بروید (**Edit ->‏ Preferences** یا در دستگاه اپل **JOSM ->‏ Preferences**)  

![Preferences WMS TMS 1][]

روی این آیکن کلیک کنید: ![WMS_TMS_button][]{: height="24px"} و سپس برای این مورد، آیکن زیر را بزنید:  ![+TMS_button][]{: height="24px"}  

> در آدرس‌های TMS معمولاً {x}، {y} و {z} وجود دارد. آدرس‌های WMS معمولاً طولانی هستند و در آن‌ها {width} و {height} وجود دارد. آدرس‌های WMTS معمولاً در خودشان WMTSCapabilities.xml دارند. اگر مطمئن نیستید URL کدام نوع تصویر را دارید، می‌توانید آن را در انواع مختلف اضافه کنید تا ببینید کدام یک از آن‌ها کار می‌کند.  

![Preferences WMS TMS 3][]

**کادر ۱.** اطلاعاتی را که از زبانه اطلاعات در مدیر وظایف کپی کرده‌اید در کادر اول پنجره کپی کنید. JOSM آن را اعتبارسنجی می‌کند، و اگر درست باشد، فرآیند تأیید اطلاعات، آن را در کادر ۳ تکرار می‌کند (پایین را نگاه کنید). اگر در عرض چند ثانیه در کادر ۳ چیزی ظاهر نشد، ببینید آیا تصادفاً حرفی را اشتباه تایپ نکرده‌اید یا «فاصلهٔ سفید» در ابتدا یا انتهای آن اضافه نکرده باشید؛ فقط خود لینک باید کپی و درج شود.  
**کادر ۲.** معمولاً خالی گذاشته می‌شود، مگر اینکه دستورالعمل دیگری دریافت کرده باشید.  
**کادر ۳.** در حال حاضر حاوی کپی تکراری از کادر ۱ است که فرآیند اعتبارسنجی در JOSM آن را ایجاد کرده‌است.  
**کادر ۴.** یک نام برای لایه وارد کنید. از آنجایی که در مدیر وظایف دربارهٔ این تصویر آمده: «Digital Globe تصاویر ماهواره‌ای این پروژه را مهربانانه از طریق سرویس ‎+Vivid خود فراهم کرده است»، من لایهٔ خود را Digital Globe + Vivid نامگذاری کرده‌ام.  

![Preferences WMS TMS 4][]

روی دکمهٔ  ![OK_button][]{: height="24px"} کلیک کنید و تصویری که اضافه کرده‌اید در پایین لیست ظاهر خواهد شد - ممکن است لازم باشد که برای دیدن آن کمی به پایین بروید.  

![Preferences WMS TMS 5][]

برای بستن پنجرهٔ تنظیمات و بازگشت به JOSM، دکمهٔ ![OK_button][]{: height="24px"} را بزنید. در زمان نیاز به استفاده از تصاویر، روی کلمه **Imagery** در منوی بالای صفحه کلیک کنید و آن را از لیست الفبایی انتخاب کنید. همچنین زدن **Alt+I** باید منوی Imagery را نشان دهد (این میانبُرها ممکن است با توجه به تنظیمات زبان متفاوت باشند).  

![Preferences WMS TMS 6][]

**نکته:** اگر تصویر بار نشد، بررسی کنید که تصویر چگونه در لیست نمایش داده شده است. در این مثال **tms** دوبار نوشته شده است. می توانید لینک را در josm ویرایش کنید تا فقط یک بار باشد، که احتمالاً مشکل را مرتفع می‌کند.

![TMS TMS][]

افزودن کارساز WMS ‏(WMS Server)
===========

اضافه‌کردن کارساز WMS بسیار شبیه به اضافه‌کردن کارساز TMS است، با یک تفاوت مهم. کارسازهای WMS به‌طور معمول بیش از یک لایهٔ تصویر را برای انتخاب ارائه می‌کنند و باید هنگام اضافه‌کردن کارساز WMS در قسمت تنظیمات یک لایه را انتخاب کنید یا اینکه بگویید هر زمان که کارساز WMS را از منوی Imagery (در پنجرهٔ اصلی JOSM) انتخاب کردم، یک لایه را انتخاب خواهم کرد.

برای اضافه‌کردن یک کارساز WMS، همانند تصویر بالا کادر محاوره‌ای تنظیمات imagery را باز کنید. اما این بار روی دکمهٔ Add WMS کلیک کنید ![wms_add_button][]

کادر محاوره‌ای مشابه زیر نشان داده می‌شود:
![wms_entry_dialog_numbered][]

**کادر ۱.** URL کارساز WMS را در این قسمت وارد کنید. این یک URL معمولی است که با http یا https شروع می‌شود.  
**دکمهٔ ۲.** پس از واردکردن URL روی دکمهٔ Get Layers کلیک کنید. JOSM با کارساز WMS ارتباط برقرار می‌کند و فهرستی از لایه‌های موجود در آن کارساز را دریافت می‌کند.  
**کادر ۳.** در اینجا فهرست لایه‌های موجود نمایش داده می‌شود. امکان دارد پوشه‌بندی‌هایی وجود داشته باشد که باید برای دیدن لایه‌های موجود پوشه‌ها را باز کنید.  
**منوی اُفتان ۴.** قالب تصویر؛ معمولاً پس از کلیک بر روی یکی از لایه‌ها در **کادر ۳**، به‌صورت خودکار انتخاب می‌شود. ممکن است بیش از یک نوع قالب تصویری ارائه شود، اما قالب معمولاً JPEG یا PNG است.  
**کادر ۵.** به‌صورت خودکار پس از انتخاب یک لایه در **کادر ۳** تولید می‌شود. خیلی طولانی و پیچیده است. معمولاً کامل است و بیشتر جنبهٔ اطلاعاتی دارد و معمولاً نباید ویرایش شود.  
**کادر ۶.** یک نام برای کارساز یا لایه وارد کنید. یک نام پیشفرض بر اساس آدرس URL نوشته می‌شود، اما می‌توانید یک نام معنی‌دارتر وارد کنید. زمانی که می‌خواهید لایه را به پنجرک لایه‌های خود در رابط JOSM اضافه کنید، این نامی است که در منوی Imagery نشان داده می‌شود.  

> مثال کارساز WMS که لایه‌های جالب زیادی دارد: http://sedac.ciesin.columbia.edu/geoserver/wms  

![wms_select_layer_highlighted][]  
اگر می‌خواهید که آیتم منوی Imagery همیشه یک لایهٔ مشخص را بار کند، حتماً روی یک لایه کلیک کنید. در مثال بالا زمانی که لایه از منوی Imagery  انتخاب شود، همیشه لایهٔ «پایگاه‌دادهٔ جهانی مناطق حفاظت‌شده» (World Database of Protected Areas) را بار می‌کند.

اگر می‌خواهید انتخاب کنید که هر بار که کارساز را از منوی Imagery انتخاب می‌کنید کدام لایه بار شود و بتوانید چندین لایه از همان کارساز بار کنید، کافی است گزینهٔ Store WMS endpoint only را تیک بزنید. با این کار همچنین انتخاب لایه و کادر اعتبارسنجی URL غیرفعال می‌شود.

![wms_end_point_only_highlighted][]  

روی دکمهٔ  ![OK_button][]{: height="24px"} کلیک کنید و تصویری که اضافه کرده‌اید در پایین لیست ظاهر خواهد شد - ممکن است لازم باشد که برای دیدن آن کمی به پایین بروید.  

![Preferences WMS TMS 5][]

برای بستن پنجرهٔ تنظیمات و بازگشت به JOSM، دکمهٔ ![OK_button][]{: height="24px"} را بزنید. در زمان نیاز به استفاده از تصاویر، روی کلمه **Imagery** در منوی بالای صفحه کلیک کنید و آن را از لیست الفبایی انتخاب کنید. همچنین زدن **Alt+I** باید منوی Imagery را نشان دهد (این میانبُرها ممکن است با توجه به تنظیمات زبان متفاوت باشند).  

![Preferences WMS TMS 6][]

[Preferences WMS TMS 1]: /images/josm/JOSM_TMS_1.png
[TM Imagery]: /images/josm/JOSM_TMS_2.png
[WMS_TMS_button]: /images/josm/josm_preferences-wms-tms.png
[+TMS_button]: /images/josm/+TMS.png
[OK_button]: /images/josm/josm_OK_button.png
[Preferences WMS TMS 3]: /images/josm/JOSM_TMS_3.png
[Preferences WMS TMS 4]: /images/josm/JOSM_TMS_4.png
[Preferences WMS TMS 5]: /images/josm/JOSM_TMS_5.png
[Preferences WMS TMS 6]: /images/josm/JOSM_TMS_6.png
[TMS TMS]: /images/josm/JOSM_TMS_TMS.png
[wms_add_button]: /images/josm/wms_add_button.jpg
[wms_select_layer_highlight]: /images/josm/wms_select_layer_highlight.jpg
[wms_entry_dialog_numbered]: /images/josm/wms_entry_dialog_numbered.jpg
[wms_end_point_only_highlighted]: /images/josm/wms_end_point_only_highlighted.jpg
[wms_select_layer_highlighted]: /images/josm/wms_select_layer_highlighted.jpg