---
layout: doc
title: Позначення доріг, будинків та територій 
permalink: /uk/coordination/remote-tracing/
lang: uk
category: coordination
---

Позначення доріг, будинків, річок та цільового призначення територій
===========================================

> Редакція 2016-02-08  

Продовження розділу про [Дистанційний мапінг з  LearnOSM](/uk/coordination/remote/), з яким вам треба ознайомитись, якщо у вас немає досвіду мапінгу для HOT.  


Зміст
=====

[Дороги – від автомагістралей до путівців та стежок](#дороги)  
[Дорожня мережа](#дорожня-мережа)  
[Межі житлової забудови](#межі-житлової-забудови)  
[Buildings, walls, fences, compounds and barriers](/en/coordination/remote-tracing/#buildings-walls-compounds-barriers)  


## Дороги

Для позначення будь-яких доріг в OpenStreetMap використовується теґ з ключем 'highway'. Дуже важливо правильно додавати дороги в базу даних (дані OpenStreetMap) через те що вони використовуються у різний спосіб:  

-  Навігаційні пристрої, такі як Garmin, та програмне забезпечення на смартфонах – Osmand, можуть прокладати маршрути на великі відстані за наявності завантаженої в них коректної інформації. Оскільки вони покладаються на інформацію з супутників GPS для обчислення координат та визначають ваше положення з прив’язкою до завантаженої в них базової мапи, важливо, щоб дорога знаходилась десь в межах 15 метрів від визначеного ними місця, інакше вони працюватимуть некоректно!  
-  Планування маршруту для великих вантажівок з допомогою буде простішим, якщо ми можемо розрізняти всі види доріг, від автомагістралей до путівців та стежок, на всіх ділянках маршруту.  
-  Наявність даних про покриття дороги, чи нам доведеться їхати по асфальту або ж по піску чи багнюці, також допомагає під час планування маршруту експедиції.
При спробі визначити територію поширення хвороби опис постраждалих "біля перехрестя" є важливим, якщо ви можете побачити перехрестя на мапі.

### <a name="highways-howto"></a> Дороги – як мапити

![iD 3][]

1.  Під час креслення доріг, переконайтесь що ви наблизились на достатню для цього відстань. Для початку встановіть масштаб приблизно на 20 метрів та почніть креслити дорогу додаючи потрібну кількість точок у місцях її вигину, так щоб ваша лінія на мапі повторювала вигини дороги на знімку. На малюнку вище ви бачите, що ми накреслили дорогу, яка перейшла до нас з іншого завдання, вниз, через дерева, і вниз, до іншої будівлі, де вона, здається, зупиняється. Там, де дерева знаходяться недалеко від дороги, а знімки отримуються камерами які дивляться згори вниз, схоже, що дорога звужується, коли вона проходить під деревами – однак, це лише здається, що дерева перекривають дорогу, дорога має однакову ширину і під ними.  
2.  Ми також додали інші відрізки доріг, треба переконатись, що вони з’єднуються з іншими дорогами – в iD доказом цього є трохи більша і темніша точка на місці з’єднання. Дуже важливо щоб ‘дороги мали спільну точку’, це допоможе навігаційному програмному забезпеченню правильно прокладати маршрути та надавати вірні вказівки під час руху.  
3.  Ми позначили дорогу як 'highway=residential', а також додали інформацію про те що у неї немає покриття 'surface=unpaved'.  
4.  Повний опис правил позначення доріг в Африці дивіться на сторінці вікі [Highway Tag Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa).  

> Існує високий ризик виникнення конфліктів в даних, що заважатимуть вам зберегти вашу роботу, особливо коли ви працюєте з дорогами, що виходять за межі вашого завдання, і можливо, з якими також працюють інші мапери. Рекомендується надсилати ваші зміни на сервер до того як ви почнете працювати з дорогами, і потім зберігати ваші роботу після зміни кожних 6 точок.


### Дорожня мережа

![JOSM 4][]

На малюнку JOSM з активованим [стилем](https://josm.openstreetmap.de/wiki/Styles) HOT-OSM-Validate, який було створено щоб допомогти контролерам, він також згодиться і під час мапінгу. Все що має червоний колір містить ті чи інші помилки, пояснення щодо інших кольорів є в легенді на зображені.  

1.  Ці відрізки доріг забарвлені червоним через застосування великих літер в тезі. Теґ мав бути  highway=unclassified, щоб призвело до блідо коричневого забарвлення дороги.  
2.  Ця частина входить до складу дорожньої мережі, що веде до міста на південному заході. Ця мережа з’єднується з рештою доріг Африки.  
3.  Ці відрізки – ‘ізоляти’. Вони нез’єднані з іншими дорогами. В такому вигляді вони не дуже корисні та вимагають подальшого дослідження, для того щоб переконатись чи можна їх приєднати до решти доріг або їх треба вилучити.  


**Дорога чи струмок?**

![iD 5][]

Для iD у нас немає такого стиля, який би показував нам помилки, але на цьому знімку ви можете побачити можна побачити територію зайняту рослинністю та ґрунт. Ґрунт схожий на мул, або навіть на болотисту місцевість під час сухого періоду, коли зійшла вода. Пунктирні чорно-білі лінії являють собою стежки в iD. Ми трохи прибрали частину з них, щоб показати місцевість.  

1.  `highway=path` чи це річище струмка. Скоріш за все й стежка і річище! Шляхи будь-яких розмірів дуже часто проходять долинами річок, а й іноді під час сухого сезону, вони проходять по пересохлих річищах річок чи струмків. В цьому випадку це схоже на заплаву, яка на момент створення знімку була сухою та використовувалась як шлях. Цей випадок найкраще позначати як:  
`highway=path`  
`seasonal=yes`  
`surface=unpaved`  
2.  Добре видно що стежка йде у напрямку дерев та чагарників, але ми не можемо побачити її точне розташування під деревами. За таких обставин ми можемо бути точно впевненні, що тут проходить стежка або дорога, але вона закрита деревами. Ми додали стежку там де її добре видно і з’єднали прямою лінією, що проходить через масив дерев, в тому місці де вона входить та виходить з обох боків. Робіть це дуже обережно, але тут очевидно, що стежка є і вона проходить доволі близько до лінії, якою ми її позначили. Це, звісно, крайній випадок, зазвичай ми оцінюємо наявність дороги лише на кілька метрів вперед, там де вона закрита одним чи двома деревами.  
3.  Перед цим ми вилучили деякі зі стежок щоб краще бачити поверхню, тепер ми можемо повернути їх назад скориставшись кнопкою ‘Скасувати’ (‘undo’) в iD.  

***


## Межі житлової забудови

Межі житлової забудови використовуються в OpenStreetMap для різних потреб.  

-  Найпростіше застосування – мати можливість бачити території житлової забудови переглядаючи стандартний шар на [OpenStreetMap.org](http://www.openstreetmap.org), коли вони показуються світло-сірим кольором на мапі.  
-  Якщо немає часу детально скласти мапу з самого початку, проєкт у Менеджері завдань часто вимагатиме щось подібне до цього:  

>    Додайте на мапу важливі елементи інфраструктури: школи, храми та ринки.  
>    Позначте контури поселень та кладовищ.  
>    Дороги будуть додані пізніше, в наступних Завданях.   
-  `landuse=residential` може використовуватись для статистичних досліджень, тож їх точне нанесення важливе  

-  Якщо ви можете визначити скільки осіб зазвичай мешкають в кожному помешканні, та  
 скільки помешкань збудовано на певній ділянці, та  
 як тільки ви закінчите працювати з територією покритою межами житлової забудови `landuse=residential`  
 ви можете сказати скільки приблизно осіб проживає на цьому клаптику суші.  
 Тепер оцінку кількості працівників гуманітарної місії та потребу в медикаментах можна зробити точніше.
-  Назви населених пунктів та межі житлової забудови, як правило, беруть з інших джерел, але їх розташування не завжди є точним. Після того, як ви нанесете межі житлової забудови, особі яка робить імпорт буде простіше визначитись де та чи інша місцевість знаходиться.


### <a name="residential-howto"></a> landuse=residential  – як мапити


**В ідеальному світі**  

*Етап 1* – Приймається рішення про мапінг району, і мапер швидко додає доволі приблизні межі районів житлової забудови landuse=residential,  
*Етап 2* – Створюється проєкт в Менеджері завдань та інші мапери уточнюють ці межі так щоб вони були ближче до будинків й т.і.  

![JOSM residential][]

![iD residential][]
 
На скріншотах, наведених вище, в iD та JOSM, зображено правильно нанесені межі житлової забудови `landuse=residential`.  

1.  Межа має бути замкненою лінією, так щоб кінцева точка з’єднувалась з початковою.  
2.  Відрізки та точки межі не повинні приєднуватись до доріг, струмків чи рік, будинків, або інших об’єктів, тобто, вони не повинні мати спільних точок. Але вони можуть перетинатись.  
3.  Межі мають проходити по межі помешкань; сади та городи, що знаходяться на присадибних ділянках мають входити до житлової території.  


На скріншоті нижче, наше завдання містить частину межі landuse=residential. Учасник, який мапив завдання праворуч, накреслив ту частину, що була на його квадраті та “передав” її нам, накресливши її трохи на нашому квадраті, так що ми можемо продовжити її креслення розширивши її на наш квадрат.  


![JOSM residential 1][]

Ми продовжимо її креслення, розширивши її на наш квадрат та відмітимо її прямою лінією на квадраті нижче, щоб інший учасник також мав змогу продовжити її у своєму завданні.  

Це доволі складно, коли ви бачите лише невелику частину міста чи села, і ви можете докласти зусіль, щоб зробити її як найкраще, позначивши межу `landuse=residential`, але, скоріш за все контролеру, що перевіряє кілька виконаних завдань, доведеться зробити певні коригування, після того, як вони будуть завершені.  

> Існує високий ризик виникнення конфліктів в даних,  коли ви працюєте з landuse=residentia, що виходять за межі вашого завдання, і можливо, з якими також працюють інші мапери. Рекомендується надсилати ваші зміни на сервер до того як ви почнете працювати з межами, і потім зберігати ваші роботу після зміни кожних 6 точок.

***


## Будівлі, стіни, огорожі  

Buildings are added to the map data for a number of reasons;  

*  The density of buildings in an area gives a very good indication of the number of people residing there.  
*  The size, shape & location of a building can help to identify it as a potential evacuation or treatment site.  
*  The size, shape, and relative location of buildings can be used to identify particular locations such as wells, aid stations, schools, etc..  
*  There is the potential to estimate the degree of damage sustained by a building, which can be used to estimate the potential casualties & level of support that may be required - this is currently (January 2015) under discussion for future use.  


### <a name="buildings-howto"></a> Buildings - How to Map

The vast majority of buildings that require mapping by HOT are either based upon rectangular shapes with square corners, or are round. If a building appears to be a mixture of the two, it is more likely you are looking at a building who's outline is obscured by shadow, reflection, foliage or similar.  

For some tasks where only an outline of an area is required, the task may specify that buildings can be mapped as nodes, but these situations are now rare.  


#### building=yes

Unless the project instructions specify otherwise, buildings should be tagged **building=yes**  

*  There can often be a time delay between the satellite imagery being taken, and the mapping being carried out. There is the possibility that the building you are looking at that appears to have no roof, has now been completed & is now in habitation. It is also possible that you are looking at a building with several storeys, the bottom ones being lived in, and the top floor with no roof currently not being lived in.  

> **Mapping buildings using iD** - when you are using the area tool within iD to create the basic shape, you must remember to then change the tag to building=yes. The default setting will merely tag the shape as area=yes. If you're tracing is of a building with square corners, please take the time to square your traced item (highlight it and shortcut 'q').  

*  JOSM is far faster for mapping buildings - [JOSM building tools is explained here.](/en/josm/josm-more-plugins/#the-buildings-tools-plugin)  

![Buildings iD][]

This screenshot shows part of a square being edited. Note the scale at the bottom of 15 metres - about the figure you should aim at when editing features. When tracing, you are aiming to place the building where it meets the ground:  

1.  **Round buildings.** In this case they are fairly low in height and their shadow is hardly visible. If you were standing amongst them they would appear like domes. I have mapped & tagged only one of these so far **building=yes**. To quickly add the remaining round buildings in JOSM or iD I would select this one (highlight it), keyboard shortcut *Ctrl+c*, move my cursor to the centre of another round building of the same size, keyboard shortcut *Ctrl+v*. When all of the round buildings of this size have been added in my square I paste a building over a different sized round building, JOSM - use *Alt+Ctrl* & mouse to resize it to the correct size, copy it & then paste over all round buildings of the same size.  
2.  **Rectangular buildings.** These particular buildings are casting a noticeable shadow. The shadow can help to identify the shape of a building which is partially obscured by another feature. You will find that many buildings are not so simple, and have a verandah or are 'L' shaped - you must trace the actual shape of the building as this will help to identify it when names & other data is being added as part of the ground survey process.  
3.  **Barriers - walls (or hedges) of a compound.** Having examined the imagery, zooming in & out until I am satisfied that from the shape of the object (use its shadow as well to identify), I believe this to be a wall, and I have tagged it **barrier=wall**. Alternatives include barrier=fence and barrier=hedge.  
4.  I have joined the barrier=wall to the building=yes at the corner of the building.  


### Satellite imagery distorting the building shape.


![Buildings_2][]

1.  The satellite imagery above, is of a building, but the satellite was not directly overhead, so that the building appears distorted and an end wall is visible in the image. Because of this angle, the apex roof does not appear rectangular. The sun is practically directly above the building, so that the shadow of the building indicated by the arrows from figure 1 does confirm that the building is rectangular.  

2.  To map this building, create a rectangle extending from the arrows of point 2, to where you estimate the building ends, indicated by point 3 in this image.  


***


More to follow - see the below links for more guidance.


# Further Reading

-  [West African HOT Mapping Tips by user Bgirardot](http://wiki.openstreetmap.org/wiki/User:Bgirardot/Typical_Road_and_Residential_Task)  
-  [OSM wiki entry concerning validating](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data)  
-  [Highway Tag Africa - the preferred reference for highway tagging in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa)  
-  [Short Tutorial in French for remote mapping](http://blog.cartong.org/2014/07/24/tuto-digitaliser-sous-openstreetmap-avec-le-tasking-manager-et-josm-premiers-pas/)

[iD 3]: /images/coordination/iD_3.png
[JOSM 4]: /images/coordination/JOSM_4.png
[iD 5]: /images/coordination/iD_5.png
[iD residential]: /images/coordination/iD_residential.png
[JOSM residential]: /images/coordination/JOSM_residential.png
[JOSM residential 1]: /images/coordination/JOSM_residential_1.png
[Buildings iD]: /images/coordination/Buildings_iD.png
[Buildings_2]: /images/coordination/Buildings_2.png