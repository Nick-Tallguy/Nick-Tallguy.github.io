---
layout: doc
title: Редактор iD
permalink: /uk/beginner/id-editor/
lang: uk
category: beginner
---

Редактор iD
=============

> Редакція 2019-06-10

Якщо ви розпочинаєте мапити використовуючи Менеджер Завдань HOT або MissingMaps чи таке інше? Ознайомтесь з [розділом HOT-поради](/uk/hot-tips/).  

- TOC
{:toc}

Редактор iD це фактично редактор OpenStreetMap, який працює у вашому веб-оглядачі. iD є швидким та простим у використанні та дозволяє здійснювати мапінг використовуючи різноманітні джерела даних, такі як: супутникові та аерофотознімки, GPS-треки, Field Papers (обхідні листи), чи знімки Mapillary.   

Редактор iD – це чудовий інструмент для внесення невеликих змін, для яких не потрібно розширених можливостей JOSM (більш функціональний редактор). Цей розділ показує основи редагування мап в iD.  

Запуск редактора iD
----------------------

-	Редактор iD вимагає наявності постійного інтернет-з'єднання.  
-	Відкрийте веб-оглядач та перейдіть до сайту OpenStreetMap [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Увійдіть** до свого облікового запису OpenStreetMap  
-	Перетягніть мапу до місця, яке ви бажаєте поліпшити, та змініть масштаб, щоб було зручніше вносити зміни. Ви можете перетягувати мапу за допомогою лівої кнопки миші, щоб дістатись до потрібного місця.  
-	Клацніть на маленьку стрілку на копці  **Редагувати**. Потім натисніть **Редагувати через iD (редактор в оглядачі)**.  

![image1][]


Інтерфейс користувача
-------------------------
![image2][]

1. **Панель Властивості об'єкта:** На цій панелі показуються теґи об'єкта виділеного на мапі.  
	Ви можете додавати або змінювати теґи на цій панелі.  
2. **Інструменти:** Ця панель містить базові інструменти редагування:  
    Додати точку, *клавішна комбінація* **1** ![image3][]{: height="24px"}  
    Додати лінію, *клавішна комбінація* **2** ![image4][]{: height="24px"}  
    Додати полігон, *клавішна комбінація* **3** ![image5][]{: height="24px"}  
    Скасувати, *клавішна комбінація* **Ctrl+z** ![image6][]{: height="24px"}  
    Відновити, *клавішна комбінація* **Ctrl+y** ![image7][]{: height="24px"}  
    Зберегти, *клавішна комбінація* **Ctrl+s** ![image8][]{: height="32px"}  
3. **Панель налаштувань мапи:** Ця панель надає доступ до різноманітних налаштувань:  
    Наблизитись, *клавішна комбінація* **+** ![image9][]{: height="24px"}  
    Віддалитись, *клавішна комбінація* **-** ![image10][]{: height="24px"}  
    Моє місцезнаходження ![image11][]{: height="24px"}  
    Налаштування тла, *клавішна комбінація* **b** ![image12][]{: height="24px"}  
    Дані мапи, *клавішна комбінація* **f** ![Map Data][]{: height="24px"}  
    Проблеми, *клавішна комбінація* **i** ![Issues][]{: height="24px"}  
    Довідка, *клавішна комбінація* **h** ![image13][]{: height="24px"}  
4. **Інформаційний рядок:** Цей рядок містить різноманітну інформацію, наприклад, про учасників, які зробили свій вклад в покращення цієї місцевості та шкалу масштабу.  

## Налаштування тла

Натисніть кнопку **Налаштування тла** або скористайтесь *клавішною комбінацією* **b**.![image14][]{: height="24px"}  
![image15][]  
Ви можете **обрати потрібний шар тла** обираючи із переліку наявних шарів (типово використовується знімки від Bing).  

Також ви можете додати власний фоновий шар, обравши пункт **Власний фон**. Наприклад, якщо ви бажаєте додати **шар Field Paper** [^fieldpaper], оберіть пункт  **Власний фон**, потім натисніть на значок праворуч (пошук) щоб відкрити наступний діалог:  
![image17][]   
та додайте ваш **FieldPaper snapshot URL**, який виглядатиме наступним чином: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Для того щоб **показати GPS-треки, які зберігаються на вашому комп'ютері** (в форматі GPX), перетягніть та киньте їх у вікно редактора.  
Для того щоб увімкнути показ GPS-треків, які зберігаються на серверах OpenStreetMap, в розділі **Шари**, оберіть відповідно **OpenStreetMap GPS треки**. На зображенні нижче показані загальнодоступні GPS-треки зображені різними кольорами, що вказує на напрямок руху.  
![osm gps traces][]  
Для того щоб змінити **вигляд фону** відкрите розділ **Параметри зображення**.  
![DisplayOptions][]  
У разі зсуву [фонового зображення](/uk/josm/aerial-imagery), ви можете **скоригувати зсув тла** перейшовши до розділу **Налаштування зсуву тла**.  
![image18][]  

- Натискайте стрілки для того щоб підлаштувати положення фонового зображення. Натисніть кнопку "скинути" щоб повернутись до типового стану. ![image20][]  

Базові прийоми редагування в iD  
----------------------  

### Додавання точок  

Для додавання нової точки, клацніть на копку **Точка**. ![image3][]{: height="24px"}  

- Вказівник миші перетвориться на хрестик (+). Тепер, клацніть в місті яке ви бажаєте додати на мапу. наприклад, вам відомо що в цьому місті знаходиться лікарня, клацніть там де знаходиться будівля лікарні.  
![image21][]  
- Бачите нову точку було створено. В той же час, вигляд панелі ліворуч змінився так щоб ви могли обрати з переліку потрібний об'єкт. Оберіть  **Територія лікарні** (Hospital Grounds) для того щоб точка була позначена відповідним чином.  
![image22][]  
- Ви можете скористатись формою для додавання додаткової інформації про об'єкт. Ви можете зазначити назву лікарні та інші відомості. Зауважте, що кожен об'єкт матиме різний набір параметрів, в залежності від того який об'єкт ви обрали перед цим.  
- Якщо ви помилились і поставили точку не точно, ви можете пересунути її у потрібне місце. Натисніть ліву кнопку миші та перетягніть точку на нове місце. Або, якщо ви бажаєте вилучити вашу точку, клацніть по ній правою кнопкою миші для показу контекстного меню в якому оберіть значок схожий на контейнер для сміття. ![PointToolDelete][]{: height="24px"}  
"Точка" створена вами в iD є лише окремою точкою з набором "теґів" (властивостей), що описують її.  

### Креслення ліній  

Для додавання нової лінії, натисніть на кнопку **Лінія**. ![image4][]{: height="24px"}  

- Вказівник миші перетвориться на хрестик (+). Знайдіть дорогу, якої ще немає на мапі та накресліть її. Клацніть спочатку в місті де дорога починається, пересувайте мапу та клацайте щоб додати наступний відрізок, подвійне клацання закінчує креслення. Зверніть увагу на панель ліворуч.  
![image24][]  
- Так само, як і у випадку з точкою, оберіть відповідний об'єкт з переліку, щоб позначити лінію відповідно.  
- Ви можете змінити форму лінії пересуваючи її точки так само як ви робили це для окремих точок, за допомогою лівої кнопки миші.  
- Якщо після виділення точки лінії лівою кнопкою миші натиснути праву кнопку або пробіл з'явиться контекстне меню з наступним переліком інструментів:  
  -  ![PointToolContinue][]{: height="24px"} - продовжити лінію від цієї точки  
  -  ![PointToolDisconnect][]{: height="24px"} - роз'єднати лінії в цій точці  
  -  ![PointToolSplit][]{: height="24px"} - розділити лінію на дві цій точці  
  -  ![PointToolDelete][]{: height="24px"} - вилучити точку з лінії  
- Якщо ви виділите лінію, а не її точку, та відкриєте контекстне меню, ви побачите наступний перелік інструментів:  
  -   ![LineToolCircularize][]{: height="24px"} - перетворити лінію на коло (доступно тільки для замкнутих ліній)  
  -   ![LineToolDisconnect][]{: height="24px"} - від'єднати лінію від інших об'єктів  
  -   ![LineToolMove][]{: height="24px"} - пересунути лінію  
  -   ![LineToolSquare][]{: height="24px"} - вирівняти всі кути  
  -   ![LineToolReflectShort][]{: height="24px"} - віддзеркалити лінію вздовж її короткої вісі  
  -   ![LineToolReflectLong][]{: height="24px"} - віддзеркалити лінію вздовж її довгої вісі  
  -   ![LineToolReverse][]{: height="24px"} - змінити напрямок лінії (використовується для зміни напрямку течії рік та одностороннього руху)  
  -   ![LineToolRotate][]{: height="24px"} - обертати лінію навколо її центру  
  -   ![LineToolStraighten][]{: height="24px"} - випрямити лінію  
  -   ![LineToolDelete][]{: height="24px"} - вилучити лінію  

"Лінія" створена вами в iD є лінією з набором "теґів" (властивостей), що описують її.

> Зауваження щодо **Вилучення**: Взагалі, треба уникат вилучення даних доданих іншими учасниками, якщо вони лише потребують покращення. Ви вільни вилучати власні помилки, але спробуйте спочатку *виправити* об'єкти додані іншими, якщо вони того потребують. Такий підхід дозволя зберегти історію змін об'єктів в базі OSM та виказати повагу до внеску інших учасників. Якщо ви вважаєте що щось дійсно має бути вилучено з даних, запитайте спочатку про це мапера, який додав їх, або обговоріть це з іншими маперами в прийнятих каналх спілкування.

### Креслення полігонів

Для додавання полігонів скористайтесь відповідним інструментом клацнувши на кнопку **Полігон**. ![image34][]{: height="24px"}  

- Вказівник миші перетвориться на хрестик (+). Спробуйте окреслити контур будівлі на супутниковому знімку.  
- Ви помітите, що колір вашого полігону зміниться після того, як ви відповідні атрибути до нього.  
![image35][]  
-  Інструменти, коли ви вибираєте полігон та активуєте контекстне меню правою кнопкою миші, аналогічні інструментам контекстного меню для лінії.  

"Полігон" створений вами в iD є замкненою лінією з набором "теґів" (властивостей), що описують цю лінію її.

### Додавання мультиполігонів

Іноді у вас виникає потреба накреслити полігон, у якого крім зовнішнього контуру є й один чи більше внутрішніх контурів. Згадайте про будинки з внутрішнім двором або про озеро з островом. *Не додавайте їх за допомогою однієї лінії* так що внутрішній контур сполучається із зовнішнім. Натомість, намалюйте кожен контур окремою лінією, позначте відповідними тегами тільки зовнішній контур, виділіть всі контури та натисніть **c** для того щоб об'єднати всі контури в один об'єкт, який називається мультиполігоном.

![create multipolygon][]

Якщо виділити один із контурів новоствореного полігону, ліворуч ви можете побачити до якого мультиполігону він належить.

![part of multipolygon][]

## Проблеми

Редактор виконує різноманітні перевірки даних в процесі їх додавання. У випадку якщо ваші дії можуть спричинити проблеми, він сповістить вас про це на відповідній вкладці. У випадку появи жовтої (попередження) або червоної (помилки) позначки вам треба відкрити панель і ознайомитись зі звітом. Ця інформація також показується в панелі властивостей виділеного об'єкта. Ви також будете поінформовані про помилки під час спроби завантажити ваші зміни на сервер. 

![Issue][] ![Error][]

Нижня частина панелі містить перелік правил відповідно до яких здійснюються перевірки. Правила можна вимикати по одному, але ми не радимо це робити.

Збереження ваших змін
--------------------

Якщо ви бажаєте зберегти вашу роботу надіславши дані до OpenStreetMap, натисніть кнопку **Зберегти**. На панелі ліворуч з'явиться діалог надсилання даних на сервер.  
![image36][]  

- Додайте опис ваших право та натисніть **Надіслати**.  

> If you have edited the same feature (point, way or area) at the same time as another person was editing it, you will receive a warning that your edits cannot be uploaded until you have resolved the **conflicts** - choose whose edits to accept & upload your changes. *Resolving conflicts often involves accepting the other persons edits, in which case you will probably wish to return to the feature in question and edit again (**this time save soon after the edit to try to avoid a conflict again!**).*

Additional Information and Custom Tags
---------------------------------------

When you are editing an object, you will see an "Add field" menu at the bottom of the attribute panel. You can add various additional information by selecting one of the entries (layer, elevation, wikipedia etc.).  

![AdditionalTags][]

Or you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- This will show all the tags attached to the feature.  
![image45][]  
- Click the plus sign (+) to add keys and values or click the trash icon to delete tags.

Further tutorials
------------------

[Our external resources page](/en/resources/#iD) provides links to a number of video tutorials from various sources.

iD versus JOSM
---------------  

**iD is good for...**

- When you are doing simple edits  
- When you have fast Internet to load the imagery and save the edits  
- When you want to be sure to follow a consistent and simple tagging scheme  
- When you are restricted from installing a program on the computer you are using

**JOSM is better...**

- When you are adding many buildings (See buildings_tool plugin)
- When you are editing many polygons or lines that already exist
- When you are on an unreliable Internet connection or offline
- When you are using a specific tagging scheme (or custom presets)

[^fieldpaper]: There is a [section of LearnOSM](/en/mobile-mapping/field-papers/) giving more information about Field Papers.



[image1]: /images/beginner/id-editor_image1.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[Issues]: /images/beginner/id-editor_issues.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[DisplayOptions]: /images/beginner/id-editor_display-options.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image24]: /images/beginner/id-editor_image24.png
[PointToolContinue]: /images/beginner/id-editor_point-tool-continue.png
[PointToolDelete]: /images/beginner/id-editor_point-tool-delete.png
[PointToolDisconnect]: /images/beginner/id-editor_point-tool-disconnect.png
[PointToolSplit]: /images/beginner/id-editor_point-tool-split.png
[LineToolCircularize]: /images/beginner/id-editor_line-tool-circularize.png
[LineToolDelete]: /images/beginner/id-editor_line-tool-delete.png
[LineToolDisconnect]: /images/beginner/id-editor_line-tool-disconnect.png
[LineToolMove]: /images/beginner/id-editor_line-tool-move.png
[LineToolReflectLong]: /images/beginner/id-editor_line-tool-reflect-long.png
[LineToolReflectShort]: /images/beginner/id-editor_line-tool-reflect-short.png
[LineToolReverse]: /images/beginner/id-editor_line-tool-reverse.png
[LineToolRotate]: /images/beginner/id-editor_line-tool-rotate.png
[LineToolSquare]: /images/beginner/id-editor_line-tool-square.png
[LineToolStraighten]: /images/beginner/id-editor_line-tool-straighten.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[Issue]: /images/beginner/id-editor_issue.png
[Error]: /images/beginner/id-editor_error.png
[image36]: /images/beginner/id-editor_image36.png
[AdditionalTags]: /images/beginner/id-editor_additional-tags.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png