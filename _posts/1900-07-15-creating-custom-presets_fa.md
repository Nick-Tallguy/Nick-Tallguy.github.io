---
layout: doc-rtl
title: JOSM - ایجاد قالب آماده
permalink: /fa/josm/creating-presets/
lang: fa
category: josm
---

JOSM - ایجاد قالب آماده
=======================

> تاریخ بازبینی ۱۳۹۵/۰۶/۳۰  

در [فصل قبل](fa/josm/josm-presets/) به چگونگی اضافه کردن منوهای قالب آماده سفارشی به JOSM نگاهی انداختیم. در این فصل ما چگونگی ایجاد فایل‌های قالب آماده سفارشی را پوشش خواهیم داد.  

هشدار! این یک موضوع پیشرفته است ... در این زمینه مراقب باشید!  

مقدمه‌ای بر XML
-------------------

به منظور ایجاد منوی قالب آماده، ما ابتدا باید به زبانی به نام XML آشنایی داشته باشیم. اگر قبلاْ با XML آشنا هستید، به بخش بعدی بروید.  

XML، که مخفف "Extensible Mark-up Language" است، یک زبان رایانه‌ای شبیه به HTML است. تفاوت کلیدی این است که XML برای انتقال داده و نه نمایش آن طراحی شده است. بسیاری از برنامه‌های کاربردی در اینترنت از جمله OpenStreetMap از XML برای انتقال داده استفاده می‌کنند. XML از عناصر استفاده می‌کند و هر عنصر می‌تواند عناصر کودک دیگری را در داخل خود داشته باشد. به عنوان مثال، بیایید تصور کنیم که می‌خواهیم یک فایل XML ایجاد کنیم که حاوی داده‌های مربوط به یک منو رستوران باشد. ما باید یک عنصر ریشه حاوی تمام اطلاعات مربوط به منوی خودمان ایجاد کنیم. عنصر ریشه ما یک تگ باز و یک تگ بسته دارد، مانند این:

      <menu>
      ... هر اطلاعاتی که می‌خواهیم در منوی خودمان داشته باشیم ...
      </menu>

اطلاعات در داخل عنصر قرار دارد و در هر عنصری، عناصر بیشتری وجود دارد.  

      <menu>
        <item name=“Hamburger”>
          <cost>400</cost>
          <description>گوشت گوساله خوشمزه</description>
        </item>
          <item name=“Nasi Goreng”>
          <cost>200</cost>
          <description>برنج سرخ شده اندونزیایی</description>
        </item>
      </menu>

در این مثال ما دو عنصر &lt;item&gt; را درون عنصر &lt;menu&gt; قرار داده‌ایم تا دو آیتم مختلف موجود در منو را توصیف کنند. هر آیتم خود حاوی دو عنصر &lt;cost&gt; و &lt;description&gt; در درون خودش می‌باشد. همچنین توجه داشته باشید که چگونه name=”Hamburger” در داخل تگ &lt;item&gt; نوشته شده است. این خصیصه (attribute) نامیده می‌شود و اطلاعاتی در مورد عنصر اضافه می‌کند.


### لغت‌شناسی XML

- **عنصر ریشه:** بیرونی‌ترین عنصر سند XML، که آنچه را که در درون دارد شرح  می‌دهد  
- **عنصر:** هر شیء XML، که با یک تگ باز و یک تگ بسته احاطه شده است، مانند &lt;item&gt; ... داده... &lt;/item&gt;  
- **تگ:** چیزی که درون براکت‌ها قرار دارد، مانند &lt;item&gt;. &lt;item&gt; تگ بازکننده یک عنصر است و &lt;/item&gt; تگ بسته‌کننده است. این اصطلاح را با برچسب‌های OSM که معنای دیگری دارند، اشتباه نگیرید.  
- **خصیصه:** تکه‌ای اطلاعات موجود در داخل یک تگ، مانند name=“Hamburger”  

استفاده از XML برای نگهداری و انتقال اطلاعات عالی است، زیرا فهم آن برای کامپیوترها آسان است.  


فایلهای قالب آماده JOSM
-------------------

بیایید یک فایل قالب آماده نمونه را به JOSM اضافه کنیم و آن را تجزیه و تحلیل کنیم که چگونه کار می کند.  

- فایل [sample_presets.xml](/files/sample_presets.xml) را دانلود کنید.  
- سپس آنرا همانطور که در [فصل قبل](fa/josm/josm-presets/) توضیح داده شد در JOSM باگزاری کنید.  
- سپس یک لایه جدید و شی جدید ایجاد کنید.  
- به منوی قالب‌های آماده بروید. یک ردیف جدید به نام "Sample Building" دیده می‌شود. روی آن کلیک کنید.  

![sample building menu][]

توجه داشته باشید که در فرم ظاهر شده سه فیلد وجود دارد و هر فیلد نوع ورودی متفاوتی را می‌پذیرد. اولین فیلد، نام ساختمان، که یک رشته متنی را به عنوان ورودی می پذیرد. دومی، کاربرد ساختمان، یک جعبه کشویی دارد. فیلد آخر یک چک‌باکس است، به این معنی که فقط می‌تواند یکی از دو مقدار، روشن یا خاموش را داشته باشد.

![sample presets form][]

حالا بیایید به فایل XMLای که فرم ورودی قالب آماده را تعریف می‌کند نگاهی بیندازیم.

- فایل XML را در کامپیوتر خود پیدا کنید آنرا با یک برنامه ویرایشگر متن باز کنید. اگر از ویندوز استفاده می‌کنید می‌توانید از برنامه نوت‌پد استفاده کنید. اگر یک ویرایشگر بسیار آسانتر بخواهید، می‌توانید بزنامه رایگان ++Notepad را دانلود کنید.  
- فایل **sample_presets.xml** چیزی شبیه به این به نظر میرسد:  

![sample presets file][]

فعلاْ از سه خط اول و خط آخر صرفنظر میکنیم و توجه خود را بیشتر به آنچه که مابین تگهای &lt;آیتم&gt; وجود دارد معطوف میکنیم.

خط اول اینگونه است:

      <item name="Sample Building" type="node,closedway">

این تگ بازکننده یک آیتم است که به منو اضافه شده است. این تگ دو خصیصه، نام و نوع دارد. نام مشخص می‌کند که چگونه این مورد در منوی قالب آماده نمایش داده شود. نوع، این قالب آماده را محدود به نوع خاصی از شی میکند. در این مورد، قالب آماده را تنها می‌توان برای نقاط و اشکال - به عبارت دیگر گره‌ها و راهای بسته، استفاده کرد. اگر سعی کنید این قالب آماده را به یک خط اعمال کنید، کار نمی کند.  

بیایید به خط بعدی نگاه کنیم:  

      <label text="Building Form" />

وقتی روی منو کلیک میکنید و فرم نمونه را باز میکنید، در بالای صفحه متن "فرم ساختمان" را می‌بینید. این متن در این خط تعریف شده است. این یک عنصر &lt;label&gt; را تعریف می‌کند، که به سادگی متن را در فرم نمایش می‌دهد. متن بوسیله خصیصه *"text="some text* تعریف شده است.  

چند خط پایین تر بروید و این را پیدا کنید:  

      <key key="building" value="yes" />

این یکی از تگهایی است که به شی مورد نظر ما اعمال می‌شود. از آنجا که از عنصر &lt;key&gt; استفاده می‌کند، زمانی که این قالب آماده انتخاب شود تگ OSMای که در اینجا آورده شده، بطور خودکار به شی اعمال می‌شود. از این رو این شی به طور خودکار برچسب *building=yes* را دریافت خواهد کرد.  

خط بعدی کمی متفاوت‌تر است و از عنصر &lt;text&gt; استفاده می‌کند.  

      <text key="name" text="Name of Building" default="" delete_if_empty="true" />

عنصر &lt;text&gt; یک فیلد خالی ایجاد می‌کند. هنگامی که فرم در JOSM ایجاد می‌شود، کاربر می‌تواند فیلد خالی را پر کند. از آنجا که خصیصه *"delete_if_empty="true* تنظیم شده است، اگر کاربر این فیلد را خالی بگذارد، هیچ تگی اضافه نخواهد شد.  

کادر منوی کشویی فرم در خط بعدی نعریف می‌شود:   

      <combo key="building:use" text="Building Use" values="residential, commercial, industrial" display_values="Residential, Commercial, Industrial"/>

A dropdown box is defined by the &lt;combo&gt; element. As with the &lt;text&gt; element, the attribute *key* defines the tag key. The value is then chosen from a list of possible *values*. The *display_values* attribute allows you to choose different names to be displayed in the dropdown box, which may be easier to understand than the OSM tag values.  

Lastly, let's look at the line which defines the checkbox.  

      <check key="building:vacant" text="Is the building vacant?" default="off" delete_if_empty="true" />

The &lt;check&gt; element defines - you guessed it! - the checkbox. The attribute *default="off"* states that the box will be unchecked by default. The remaining attributes you have already seen.  

Creating Your Own Presets File
------------------------------

The best way to create your own presets file is to take one that already exists, and manipulate it fulfill your objectives.  Feel free to edit this sample file and experiment with it to learn the basics. Just remember that each time you save it, you will need to restart JOSM to load the changes.  

Before you start creating your own presets, you need to think carefully about the tags that you will use. Inventing new tags is another topic altogether. Generally, you should utilize existing OSM tags when they exist. Most existing tags are listed on the [Map Features page on the OSM Wiki](http://wiki.openstreetmap.org/wiki/Map_Features).  

This sample file contains most of the elements that you will find in a JOSM presets file - there aren't very many form elements. If you'd like to experiment with a more complex presets file, download the [dhaka_presets.xml](/files/dhaka_presets.xml) file here.  

Additionally, a detailed explanation of all possible elements can be found [here](http://josm.openstreetmap.de/wiki/TaggingPresets).  

Good luck!  


[sample building menu]: /images/josm/sample-building-menu.png
[sample presets form]: /images/josm/sample-presets-form.png
[sample presets file]: /images/josm/sample-presets-file.png