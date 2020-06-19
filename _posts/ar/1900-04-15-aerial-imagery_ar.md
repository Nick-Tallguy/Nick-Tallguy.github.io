---
التخطيط: وثيقة
العنوان: الصور الجوية
الرابط الثابت: /en/josm/aerial-imagery/
اللغة: انجليزية
الفئة: josm
---

الصور الجوية
================

> تمت المراجعة 2015-09-21  

تتبع الصور هو وسيلة سهلة وقوية للمساهمة في OSM. يُسمى استخدام الصور لرسم النقاط والخطوط والأشكال على الأرض **الرقمة**. ويمكن في كثير من الأحيان فصلها عن فعل جمع بيانات السمة على الأرض، والتي غالبا ما تسمى **الأرض الحقيقة**. يمكن أن توفر الرقمنة الصور الهيكلية لخرائط OSM، مما يجعل عملية البحث عن الأراضي في أرض الواقع أسهل للأشخاص في هذا المجال. في هذا الفصل سوف نتعلم أكثر عن كيفية عمل الصور الجوية.  

نبذة عن الصورة ( الجوية )
-------------

Aerial imagery is the term that we use to describe photographs that are taken from the sky. These can be taken from airplanes, drones, helicopters, or even kites and balloons, but the most common source of imagery comes from satellites orbiting the Earth.  

[In the chapter on GPS](/en/mobile-mapping/using-gps) we learned about the dozens of satellites orbiting Earth which allow our GPS receivers to identify our latitude and longitude. In addition to these GPS satellites, there are also satellites which take photos of the earth. These photos are then manipulated so that they can be used in GIS (mapping) software. Bing Aerial Imagery is made up of satellite photos.  

الدقة
----------

All digital photographs are made up of pixels.  If you zoom in very close on a photograph, you will notice the the image starts to get blurry, and eventually you’ll see that an image is made up of thousands of little squares that are each a different color.  This is true whether the photograph is taken with a handheld camera, a mobile phone, or a satellite orbiting Earth.  

![دقة الصورة][]

Resolution refers to the number of pixels wide by the number of pixels high that an image is.  More pixels means higher resolution, which means that you are able to see greater detail in the photograph.  Resolution in handheld cameras is often measured in megapixels.  The more megapixels your camera is able to record, the higher the resolution of your photos.  

Aerial imagery is the same, except that we usually talk about resolution differently.  Measurement is important with aerial photographs - hence, a pixel represents a certain distance on the ground.  We usually describe imagery as something like “two meter resolution imagery,” which means that one pixel is equivalent to two meters on the ground.  One meter resolution imagery would have a higher resolution than this, and 50cm resolution would be higher still.  This is generally the range of imagery that is provided by Bing, though it varies between locations, and in many places it is worse than two meters, at which point it becomes difficult to identify objects in the image.  

![Comparison of low and high resolution imagery][]

The higher the resolution of an aerial image, the easier it is to use in making maps.  

الإسناد الجغرافي
---------------

Each pixel of an aerial photograph has a size, and each pixel also has a location. As we mentioned above, this is because aerial photographs are georeferenced.  

Just like a GPS point has a latitude and longitude, so will the pixels in an aerial image. However, just as poor resolution can bring challenges to mapping, so can poorly georeferenced images.  

Let's think for a moment about how georeferencing works, and why it is challenging to do. When somebody georeferences an image, they first identify a handful of pixels in the image that are known locations. If we have a square photograph, we might identify the coordinates of all four corners, and that way the whole image can be correctly placed.  

This all seems quite simple, but consider this: Earth is round; camera lenses are round; yet photographs are flat and 2-dimensional. This means that when a flat image is being mapped onto the round Earth, there is always going to be some stretching of the image and distortion. Imagine trying to flatten an orange-peel. It won't end up rectangular. Because of this problem, all of the pixels in an aerial image might not be perfectly placed.  

Luckily, some really smart people have devised clever algorithms for solving this problem, and so the imagery that you see on Bing is pretty close to being accurate. In most places it won't be noticeably wrong at all - and it's certainly fine for making maps. The most common areas for imagery to be inaccurately located are in hilly, mountainous areas. In the [Correcting Imagery Offset chapter](/en/josm/correcting-imagery-offset) we will see how to correct for this problem.  

[دقة الصورة]: /images/josm/orange-resolution.png
[مقارنة الصور ذات الدقة المنخفضة والعالية]: /images/josm/low-res-high-res.png