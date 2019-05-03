---
layout: doc-rtl
title: ابزارهای ویرایش JOSM
permalink: /fa/josm/josm-tools/
lang: fa
category: josm
---

ابزارهای ویرایش JOSM
==================

> تاریخ بازبینی ۱۳۹۶/۰۳/۱۹  

- TOC
{:toc}

در [راهنمای شروع به کار با JOSM](/fa/josm/start-josm/) ما اصول پایه رسم با JOSM را یاد دادیم اما ابزارها و تکنیکهای بسیار زیادی وجود دارد که که هنوز نگفته‌ایم.

در اینجا ما به برخی از ابزارهای اساسی و تکنیک های موجود برای طراحی ویژگیهای نقشه در JOSM نگاه خواهیم کرد و در فصل های بعد مفصل‌تر  به ابزارهای پیشرفته طراحی نگاه خواهیم کرد.

گرفتن فایل نمونه
-------------------

- اگر دوست دارید به همراه ما با ابزارهای JOSM تمرین کنید، [tools_menu_sample.osm] (/ files / tools_menu_sample.osm) را دانلود کنید. JOSM را اجرا کرده و فایل را باز کنید. می‌بایست شبیه به این باشد:

![tools_menu_sample.osm][]

ابزارهای ترسیم
-------------

اگر بر روی منوی «ابزارها» ("Tools") در بالای JOSM کلیک کنید، خواهید دید که ابزارهای متعددی وجود دارند که می‌توانند در طراحی خطوط و شکل‌ها و ویرایش اشیاء روی نقشه به شما کمک کنند.

JOSM دارای ابزارهای اضافی است که ترسیم خطوط و اشکال را آسان می‌کند. این ابزارها در منوی «ابزارها» (“Tools”)در بالای JOSM یافت می‌شوند.

![منوی ابزارها][Tools menu]

In order to apply the functions in this menu, you must first select a point, line or shape in the map window. The sample file contains various elements that are labelled with the names of different tools on the menu.

### Aligning nodes in a circle  

- Try selecting one of the elements in the file. Then go to the Tools menu and click on the function which is identified next to the feature you have selected. For example, click on the badly drawn circle to select it.

![Align nodes in circle][]

- Next, go to Tools->Align Nodes in Circle. The badly drawn circle will become more circular.

Experiment with each of the tools using this sample file. A description of some of the tools is provided below.

### Split Way  

This allows you to divide a line into two separate lines. This is useful if you want to add different attributes to different parts of a road, such as a bridge. To use this function, select a point in the middle of the line that you want to split, select Split Way from the Tools menu, and your line should be split in two.


### Combine Way

This does the opposite of Split Way. To combine two lines into a single line, they must share a single point. To use this function, select both lines that you want to combine. You can select more than one object by holding the SHIFT key on your keyboard and clicking on each line. When you have selected both lines, select Combine Way from the Tools menu.

![Combine way][]


### Reverse and Combine  

If you are combining roads that have different directions, you might get this warning:

![Reverse and combine][]

If the roads are connected and go in the same direction, then choose "Reverse and Continue."


### Reverse Way

This will change the direction of the line. All lines in OSM have a direction, which is shown in JOSM by the arrows on the line. Direction doesn't usually matter, except in the case of one way roads and rivers that flow in a certain direction. In these cases you may need to reverse the way so that it goes in the correct direction.

![Way direction][]

### ساده کردن مسیر

اگر خط شما دارای نقاط بسیار زیادی باشد و مایل به ساده‌تر کردن آن هستید، این ابزار برخی نقاط را از یک خط حذف می کند.

![Simplify way][]


### ایجاددایره

از این ابزار که تا یک دایره کامل ایجاد کنید. یک خط به اندازه قطر دایره مورد نظرتان بکشید و سپس این ابزار را اعمال کنید.

![Create circle][]


### چیدن نقاط در مسیر

این ابزار مجموعه‌ای از نقاط در یک خط مستقیم قرار میدهد. برای خطوط طولانی بهتر است بخش هایی از خط انتخاب شوند تا راست شوند. مراقب باشید که اینکار خط را کمی تغییر میدهد.

![Align nodes in line][]

### عمود کردن گوشه‌های اشکال

This function is very useful for drawing regular shapes such as buildings (**But see also [JOSM building tools](/en/josm/josm-more-plugins/)**). After you draw an area, this function will reshape it to have square corners.

![Orthagonalize][]


### Unglue way

This tool allows you to detach nodes that are connected. It is useful when two object share a node when they should not. For example, a common mistake is for a road to share a node with the corner of a building. Of course roads don't run into buildings usually, so this is a mistake, and you can unglue the objects from one another.

![Unglue way][]

*The line and node will not actually appear separate until you move them.*

میانبرهای صفحه کلید
------------------

همزمان با افزایش ویرایش با JOSM متوجه می‌شوید که زمان زیادی را صرف کلیک روی منوها و زیر منوها می‌کنید. برای غلبه بر این موضوع، JOSM برای همه چیز دارای کلید میانبر است.

به این معنی که به جای کلیک کردن بر روی یک شی و سپس رفتن به یک فرآیند طولانی از منوها، می‌توانید به سادگی شی را انتخاب کنید و کلیدی را در صفحه کلید خود بزنید.

تمام ابزارهایی که در بخش قبلی ذکر شدند دارای کلید میانبر هستند که در سمت راست نام هر ابزار در منوی Tools نمایش داده شده است. به عنوان مثال، "O"
کلید میانبر برای تراز کردن نقاط در یک دایره و "L" میانبر برای تراز کردن آنها در یک خط است. یادگیری این کلیدها کمی زمانبر هست، اما خواهید دید 
در طولانی مدت استفاده از آنها صرفه‌جویی بسیار زیادی می‌‌کند.

در اینجا مهمترین کلیدهای میانبر دیگر را (با فونت ضخیم) می‌بینیم.

۱. فعال کردن ابزار انتخاب - 
۲- فعال کردن ابزار ترسیم - 
۳- فعال کردن ابزار بزرگنمایی - 
۴- حذف کردن اشیاء انتخاب شده - 
۵- بزرگنمایی زیاد - 
۶- بزرگنمایی کم - 


تغییر اندازه و چرخش
----------------

یک درخواست رایج در JOSM چگونگی چرخش خط یا یک شکل است.

برای چرخاندن یک شی ابتدا آن را انتخاب کنید. **SHIFT+CTRL** را از روی صفحه کلید نگه دارید. کلید چپ ماوس را نگه داشته و ماوس را تکان دهید تا شی بچرخد.

![Rotate demo][]

برای بزرگ و کوچک کردن یک شی، همان روند را دنبال کنید، اما ALT+CTRL را نگه دارید.

این دستورالعمل‌ها در خط اطلاعات پائین صفحه JOSM هم نمایش داده می‌شود.

![Rotate instructions][]




[tools_menu_sample.osm]: /images/josm/tools-menu-sample-file.png
[Tools menu]: /images/josm/tools-menu.png
[Align nodes in circle]: /images/josm/align-nodes-in-circle.png
[Combine way]: /images/josm/combine-way.png
[Reverse and combine]: /images/josm/reverse-and-combine.png
[Way direction]: /images/josm/way-direction.png
[Simplify way]: /images/josm/simplify-way.png
[Create circle]: /images/josm/create-circle.png
[Align nodes in line]: /images/josm/align-nodes-in-line.png
[Orthagonalize]: /images/josm/orthagonalize.png
[Unglue way]: /images/josm/unglue-way.png
[Keyboard S]: /images/josm/keyboard-s.png
[Keyboard A]: /images/josm/keyboard-a.png
[Keyboard Z]: /images/josm/keyboard-z.png
[Keyboard Del]: /images/josm/keyboard-del.png
[Keyboard plus]: /images/josm/keyboard-plus.png
[Keyboard minus]: /images/josm/keyboard-minus.png
[Rotate demo]: /images/josm/rotate-demo.png
[Rotate instructions]: /images/josm/rotate-instructions.png