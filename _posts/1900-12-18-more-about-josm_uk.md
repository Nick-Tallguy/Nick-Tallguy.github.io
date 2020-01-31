---
layout: doc
title: Редагування в JOSM
permalink: /uk/josm/more-about-josm/
lang: uk
category: josm
---

Редагування в JOSM
========================

> Редакція 2015-07-12  

В попередньому розділі ви встановили JOSM та розпочали креслити власні перші точки, лінії та полігони. Ви застосовували заготовки для того щоб додати інформацію про об’єкти. І наприкінці ви накреслили власну мапу в JOSM.
<!-- remove this line -->
<!-- remove this line -->
<!-- remove this line -->

Ви достатньо попрактикувались і тепер готові розпочати редагувати дані в OpenStreetMap.

В цьому розділі ми докладно ознайомимось з інтерфейсом JOSM, та з тим як використовувати його для створення мапи OpenStreetMap.
<!-- remove this line -->

Цикл редагування
---------------------
Редагування OpenStreetMap за допомогою JOSM схоже на редагування в iD, з яким ми познайомились раніше. Але через те, що JOSM є настільним застосунком, він працює трохи інакше. Процес редагування та додавання об’єктів в OpenStreetMap за допомогою JOSM завжди буде наступним:
<!-- remove this line -->
<!-- remove this line -->
<!-- remove this line -->

1. **Завантаження** поточних даних з OSM
2. **Редагування** даних з використанням супутникових знімків, GPS, Обхідних листків (Field Papers) та нотаток в якості підказок
3. **Збереження** змін в OpenStreetMap

Завантаження даних OSM
--------------------
Першим кроком в редагуванні є завантаження даних для ділянки, яку ви бажаєте покращити. Пам’ятайте, що це потрібно робити кожного разу, коли ви бажаєте змінити мапу, тому що дані часто оновлюються іншим учасниками.
<!-- remove this line -->
<!-- remove this line -->

- В меню “Файл” (“File”), зверху ліворуч в JOSM, оберіть пункт “Завантажити з OSM” (“Download from OSM”). Буде відкрите вікно для завантаження. Ви також можете відкрити це вікно просто клацнувши на значок завантаження на панелі інструментів:
    <!-- remove this line -->
    this window more simply by clicking on the download button, shown
    <!-- remove this line -->

![JOSM Download Button][]

- Коли буде відкрите вікно завантаження ви побачите мапу з рожевим прямокутником на ній. Якщо ви не бачите мапу, клацніть на вкладку “Мапа” (“Slippy map”).
    <!-- remove this line -->

![JOSM Download Dialog][]

- Скористайтесь мишею для пересування та змінення масштабу мапи до того місця, яке вам добре відоме, наприклад, вашого міста чи району. Керування таке ж саме як і на основній мапі JOSM. За допомогою правої кнопки миші можна перетягувати мапу, а коліщатком змінювати масштаб.
    <!-- remove this line -->
    <!-- remove this line -->
    <!-- remove this line -->
    <!-- remove this line -->

> Іноді, якщо ви працюєте на портативному комп’ютері, змінювати масштаб може бути важко. Робота в JOSM набагато простіше, якщо у вас є миша, але більшість сучасних ноутбуків дозволяють робити це за допомогою тачпада.
<!-- remove this line -->
<!-- remove this line -->

- Накресліть прямокутник, навколо місця, яке ви бажаєте завантажити. Щоб накреслити прямокутник заново, клацніть на мапі, натисніть та утримуйте ліву кнопку миші та потягніть її для створення нового прямокутника. Відпустіть кнопку миші для закінчення виділення ділянки.
    <!-- remove this line -->
    <!-- remove this line -->
- Якщо розмір та місце виділеної ділянки вас задовольняє, натисніть на кнопку “Завантажити” (“Download”) внизу вікна. JOSM завантажить дані для виділеної ділянки з OpenStreetMap та відкриє їх в основному вікні з мапою для редагування.
    <!-- remove this line -->
    <!-- remove this line -->
    <!-- remove this line -->

### Використання аерофотознімків
Якщо ви прочитали попередні розділи, коли ми додавали наші перші точки за допомогою редактора iD, ви пам’ятаєте, що крім даних мапи були присутні супутникові знімки, які допомагали нам визначати об’єкти на місцевості. Ці знімки надані Microsoft Bing, сервісом який люб’язно надає їх для учасників OpenStreetMap для обкреслювання об’єктів та покращення даних мапи.
<!-- remove this line -->
<!-- remove this line -->
<!-- remove this line -->
<!-- remove this line -->

- Для додавання супутникових знімків Bing в JOSM, оберіть "Фон" ("Imagery") в основному меню JOSM, а потім — “Bing аерофотознімки" (“Bing Sat”).
    <!-- remove this line -->

> Якщо у вашому меню відсутній пункт “Bing аерофотознімки" (“Bing Sat”), вам потрібно активувати його в налаштуваннях JOSM. Перейдіть Правити (Edit) -> Налаштування (Preferences) та натисніть на вкладку “WMS TMS”. Можливо вам доведеться пошукати його в переліку.
<!-- remove this line -->
<!-- remove this line -->
> <br>
>	![JOSM Preferences up down][]
>	![JOSM Preferences WMS TMS][]
> <br>
> Виберіть “Bing аерофотознімки" (“Bing Sat”). Натисніть “Активувати” (“Activate”).


### Огляд JOSM
Тепер у вас є завантажені дані OpenStreetMap, а також шар із супутниковими знімками Bing, давайте ще раз подивимося на інтерфейс JOSM.
<!-- remove this line -->

![JOSM layout][]

Головне вікно, з яким ви вже познайомились, є вікном мапи в якому відбувається більшість дій. Тут ми будемо переглядати, змінювати та додавати дані OpenStreetMap. 
<!-- remove this line -->
<!-- remove this line -->

Праворуч від вікна мапи знаходиться набір панелей, кожна з яких відповідає за певну функцію. Зазвичай, після початкового встановлення JOSM показується кілька типових панелей, таких як Шари (Layers), Теґи/Членство (Properties) та Виділення (Selection). Коли ви виділяєте точку, лінію або фігуру на мапі, вони з’являються на панелі Виділення (Selection). Інформація про об’єкт показується на панелі Теґи/Членство (Properties), а на панелі Автори (Authors) показується інформація про учасників, які останніми доклали зусиль до виділених об’єктів.
<!-- remove this line -->
<!-- remove this line -->
<!-- remove this line -->
<!-- remove this line -->
<!-- remove this line -->
<!-- remove this line -->

Ці панелі можуть бути відкриті або закриті натисканням кнопок в нижній частині панелі інструментів, ліворуч від вікна мапи в JOSM. Над цими кнопками знаходяться інструменти, якими ми обираємо можливі дії, що виконуються мишею. Ви вже знайомі з деяким з них: інструментом Виділення (Select tool) та інструментом Креслення (Draw tool). Під ними інструменти, що полегшують масштабування, вилучення об’єктів, креслення фігур, чи креслення паралельних ліній.
<!-- remove this line -->
<!-- remove this line -->
<!-- remove this line -->
<!-- remove this line -->
<!-- remove this line -->


Редагування
----
Отже, ви виконали перший крок процесу редагування даних — завантаження. Ви підготували в JOSM фоновий шар зі супутниковими знімками, по яких ми будемо креслити. Наступний крок — редагування мапи та додавання нових об’єктів.
<!-- remove this line -->
<!-- remove this line -->

В залежності від місцевості, яку ви оберете для редагування, у вас може бути багато чи мало внесених раніше на мапу даних. Але зверніть увагу, що це ті ж самі типи даних, з якими ми познайомились раніше — точки, лінії та фігури, які представляють місцевість в реальному житті.
<!-- remove this line -->
<!-- remove this line -->

- Скористайтеся тими ж прийомами, які ви вивчили, додавши кілька точок на мапу в місці, що добре вам відоме. Якщо ви побачили помилки, спробуйте виправити їх.
	<!-- remove this line -->
- Ви не повинні бути занадто напористими в той час як ви вчитеся. Якщо ви не впевнені в чомусь краще залишити все як є.
	<!-- remove this line -->
- Якщо вам потрібно пересунути точку, лінію або фігуру використовуйте інструмент **Виділення**. Клацніть на об’єкт та перетягніть його у потрібне місце. Цей прийом використовується для уточнення місця де мають знаходитись об’єкти.
    <!-- remove this line -->
    <!-- remove this line -->
    <!-- remove this line -->

![JOSM select tool][]

-  Use the **draw tool** to draw new points, lines, and shapes.
    Describe these objects by selecting from the Presets menu, as you
    did in the previous section. 

> Never edit the map outside of the area you have downloaded. You  
> can see the rectangular area you have downloaded has a solid background,  
> while the area you have not downloaded has diagonal pinstriped lines. 
> <br>  
> ![JOSM area downloaded][]

Save Changes
--------------
The third and final step to complete our edits is to upload the changes we have
made to the OpenStreetMap database. To save the changes, we must
be connected to the internet.

-  Click “File” on the top menu, and then click “Upload Data”. This
    will open up the upload window. You can access this window more
    simply by clicking on the upload button, shown here:

![JOSM Upload Button][]

-  The window that appears shows a list of the objects that you are
    adding and the objects you are modifying or deleting. In the box at
    the bottom you are asked to provide a comment about the changes that
    you are making. Type in here a description of your edits.

![JOSM Upload Dialog][]

-  Click “Upload Changes”.

-	If this is your first time saving changes to OpenStreetMap, you will
    be asked for your OpenStreetMap username and password.
-	Enter them in the window that appears. If you check the box in
    this window, your username and password will be saved and you won’t
    need to enter them again in the future. Click “Authenticate”.

![JOSM Authenticate][]

-	You will need to wait a few seconds for your changes to be uploaded,
    and then you are done! You have edited the map on OpenStreetMap.

> When you are editing, always be sure to upload your changes before you close  
> JOSM. Even if you still have more editing to do, upload your changes, and  
> then go through the process again later when you have time to edit.  
> You don't want to lose your work!

See your changes on the map
---------------------------
-  Open your internet browser and go to [http://openstreetmap.org/](http://openstreetmap.org/)
-  Move the map to the area that you edited.
-  You should see your changes now appearing on the map! If you don’t,
    try pressing CTRL+R to refresh the web page. Sometimes the map
    doesn’t update properly and needs to be reloaded.
-  What if you don’t see your changes? Don’t worry - it may take a few
    minutes for the changes to be shown on the map. Also, check your
    additions in JOSM to make sure that you added them correctly. A good
    general rule is, if your point has an icon in JOSM, then it should
    be seen on the main map at the OpenStreetMap website.

Summary
-------
Now that you’ve seen how to add to OpenStreetMap, what’s next? Well, editing
is great, but it's not the only aspect of making maps. Of course you also
need to learn how to go outside and collect information about places on the
ground.


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