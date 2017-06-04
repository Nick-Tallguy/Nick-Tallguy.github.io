---
-layout: doc-rtl
title: ویرایش اشتباهات رایج
permalink: /fa/beginner/editing-mistakes/
lang: fa
category: beginner
---

ویرایش اشتباهات رایج
====================================

> این راهنما را می‌توان به صورت [editing-mistakes_fa.odt](/files/editing-mistakes_fa.odt) و یا [editing-mistakes_fa.pdf](/files/editing-mistakes_fa.pdf) دانلود کرد.  
تاریخ بازبینی ۱۳۹۵/۰۶/۳۱  

یکسری اشکالات رایج وجود دارد که هز کسی که تازه به کار با OpenStreetMap کرده باشد معمولاْ آنها را انجام می‌دهد. در این بخش ما چند نمونه از اشتباهات متداول را جهت یادگیری بهتر نقشه‌کشی به شما نشان می‌دهیم.  

چسباندن اشیاء
-------------------

### بعضی از اشیاء نباید بچسبند

زمانی که شکلهای چندضلعی و خطوطی را ایجاد میکنید که نباید به بقیه چسبیده باشند، مطمئن شوید که آنها نقطه مشترکی با هم ندارند. برای مثال، راهها نبایستی به ساختمانها بچسبند چون هیچکس دوست نداره که یک جاده به دیوار ختم بشه! اگر در JOSM بخواهید دو یا چند شی رو از هم جدا کنید که نقطه مشترک با هم دارند آن نقطه را انتخاب کرده و به *Tools->UnGlue Ways* بروید و یا اینکه کلیدهای \<\<G\>\> را بزنید.  

![Road and building nodes are connected - NO][]

![Roads Building nodes are disconnected - YES][]

### But, Some Objects Should Connect!

Roads that intersect should always share a node. If they do not share a common node, then the computer has no way of knowing that the roads actually connect
to each other.  

![Intersecting roads should share nodes][]

The only time that you would NOT have intersecting roads share a node is if one of the roads goes over the other road, and they do not, in fact, connect.  

Overlapping Objects
--------------------

A common error is to have overlapping polygons when the objects they represent do not overlap in real life. A building cannot overlap another building. This mistake is commonly made with buildings and landuse polygons. For example, a polygon drawn to represent a park outside a building should not overlap with the building. Instead it should be drawn next to the building.  

![Correcting building overlaps][]

There are some exceptions to this rule, such as schools.  Within a school yard you might identify individual buildings using polygons, yet you also might want to create a polygon around the entire school yard. In this case it is fine for the polygons to overlap, but the rule to follow here is to make sure that the buildings are completely inside the landuse polygon.  

![Correcting building landuse][]

Summary
--------

We all make mistakes, but the more you map the less you will make less mistakes! Just remember that even if you upload data that contains mistakes, you can always fix your mistakes and upload the changes again. This is what is great about OSM: you can always make it better!  


[Road and building nodes are connected - NO]: /images/beginner/road-building-no.png
[Roads Building nodes are disconnected - YES]: /images/beginner/road-building-yes.png
[Intersecting roads should share nodes]: /images/beginner/road-connecting-nodes.png
[Correcting building overlaps]: /images/beginner/building-overlap.png
[Correcting building landuse]: /images/beginner/building-landuse.png