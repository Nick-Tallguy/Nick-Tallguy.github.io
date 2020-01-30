---
layout: doc
Знайомство з JOSM
permalink: /uk/josm/start-josm/
lang: uk
category: josm
published: true
---

Знайомство з JOSM
=============================  

> Редакція 2015-07-12  

Як завантажити та встановити JOSM, редактор OpenStreetMap написаний мовою Java, налаштувати його під власні потреби, завантажити тестову мапу та  
дізнатись про базові принципи редагування.
Пам'ятаєте у розділі Вступ ми просили вас накреслити мапу вашого міста або села?
Ми закінчимо креслення вашої мапи в кінці цього розділу, але цього разу це буде мапа в цифровому вигляді.
Після того, як ви закінчите, ви будете мати добре уявлення про те,
як редагувати дані в JOSM.

Завантаження JOSM
-------------

- Якщо ви вже маєте копію JOSM на флешці, ви можете переходити до наступного розділу,
  Встановлення JOSM.
- Якщо у вас немає JOSM, або ви бажаєте мати свіжу версію, 
  відкрийте ваш оглядач – це може бути Chrome, Opera, чи Internet
  Explorer.
- В адресному рядку, вгорі вікна, введіть наступний текст та натисніть Enter:
   [josm.openstreetmap.de](http://josm.openstreetmap.de)
- Ви також можете відшукати веб-сайт JOSM в інтернеті за пошуковим словом “JOSM”.
- Він виглядатиме приблизно так, як на малюнку:

  ![JOSM website][]

- Якщо на вашому комп’ютері встановлено Windows, натисніть “встановлювач Windows” (“Windows Installer”) для завантаження JOSM.

  ![Windows installer][]

- Якщо у вас інша операційна система, натисніть на посилання для вашої системи.
  Повинно розпочатись завантаження.
  В цьому розділі ми вважаємо, що ви використовуєте Windows,
  але інструкції для інших операційних систем схожі.

Встановлення JOSM
------------

> Ви можете мати труднощі зі встановленням JOSM, якщо у вас на комп’ютері не встановлено Java.
> Якщо це так, спробуйте завантажити та встановити Java. 
> Встановлювач Java знаходиться за посиланням:
>  [http://www.java.com/en/download/](http://www.java.com/en/download/)

> Користувачі Mac’ів можуть мати застарілу версію Java. Будь ласка, ознайомтесь з [http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation](http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation), щоб дізнатись що робити на  OSX 10.6 та 10.7.3+

- Знайдіть файл зі встановлювачем JOSM на вашому комп’ютері.
  Подвійне клацання на ньому розпочне процес встановлення.
- Клацніть ‘OK’, ‘Next’, ‘I Agree’ та ‘Install’.
  Коли встановлення буде закінчене, клацніть на кнопку ‘Finish’ для запуску JOSM вперше.
  Потім, коли ви захочете запустити JOSM, ви можете зробити це клацнувши на кнопку Пуск 
  у нижньому куті ліворуч на екрані вашого комп’ютера та клацнувши на рядок 
  JOSM серед інших програм.
- Ви повинні побачити вікно із запитом на оновлення програмного забезпечення.  
  Вам не потрібно оновлювати JOSM, тому, що ви тільки що його встановили. Натисніть на кнопку “Скасувати” (“Cancel”). 
  Якщо ви більше не бажаєте бачити це вікно поставте прапорець в нижній частині вікна, 
  перед тим як натиснути “Скасувати” (“Cancel”).
- Після запуску JOSM виглядатиме так:

  ![JOSM splash page][]

Зміна налаштувань JOSM
--------------------

Є дуже багато різноманітних параметрів, які можна налаштувати в JOSM. 
Одним з них є налаштування мови інтерфейсу, можливо у вас виникне потребе її змінити.
JOSM перекладено багатьма мовами 
і у вас є можливість обрати потрібну вам мову.

- Для зміни налаштувань клацніть в меню “Правка” (“Edit”) та оберіть пункт “Налаштування” (“Preferences”).

  ![Preferences window][]

- Ліворуч, натисніть на вкладку із зображенням малярного пензля та 
  фарбою.
- Вгорі вікна натисніть вкладку “Зовнішній вигляд” (“Look and Feel”).
- Оберіть вашу мову у списку, що розгортається, поруч зі словом “Мова” 
  (“Language”).
  
  ![Look and feel][]

- Натисніть Так (OK).
- Вам потрібно перезапустити JOSM щоб ваші налаштування вступили в дію.
  В меню “Файл” (“File”) в горі ліворуч, оберіть пункт “Перезапустити” (“Restart”), ближче до нижньої частини меню.

Основи креслення в JOSM
-----------------------------

- А тепер відкриймо зразковий файл OSM, на якому ми будемо вивчати основні способи креслення мап в JOSM. 
  Зауважте, що ця мапа несправжня, 
  і тому що вона не є мапою реального місця, ми не будемо зберігати її в 
  OpenStreetMap.
- Завантажте файл: [sample.osm](/files/sample.osm)
- Тепер відкриємо цей зразковий файл в JOSM.
  Клацніть на кнопку “Відкрити” (“Open”) вгорі ліворуч.

  ![Open file][]

- Знайдіть файл **sample.osm**. Можливо він буде у вашій теці Завантаження (Downloads), якщо звісно, ви не зберегли його десь в іншому місці. 
  Клацніть на нього, а потім на кнопку “Відкрити” (“Open”). 
- Ви повинні побачити зразкову мапу, схожу на цю:

  ![Sample file][]

- Ми будемо використовувати ці дані, щоб спробувати різноманітні способи редагування.
  *Однак ви ніколи не повинні завантажувати ці вигадані дані в базу OSM.*

### Основні операції

- Для пересування мапи ліворуч або праворуч, вгору та вниз 
  натисніть праву клавішу миші та потягніть мишею в потрібному напрямку.
- Є кілька способів зміни масштабу мапи. 
  Якщо ви використовуєте мишу, ви можете крутити коліщатко для збільшення чи зменшення масштабу. 
  Якщо у вас ноутбук і немає миші, ви можете змінювати масштаб за допомогою масштабної лінійки у верхньому лівому куті вікна з мапою. 
  Потягніть бігунок ліворуч або праворуч використовуючи ліву кнопку
  та сенсорну панель вашого 
  ноутбука.

  ![Scale bar][]

- Look at the sample map. There a few different types of objects here.
  There is a river, a forest, some buildings, several roads, and a
  couple of shops. To select an object, click on it with your left
  mouse button.

### Points, Lines, and Shapes

- As you click different objects on the sample map, notice that there
  are three different types of objects on the map. There are points,
  lines, and shapes.
- Points are a single location, represented by symbols. On this sample
  map, there are two points, a shoe shop and a supermarket. The
  shoe shop is represented by a shoe symbol, and the market is
  represented by a shopping cart.
- There are several lines on the map as well, which represent roads.
  If you look closely you will see that within the lines, there are
  points as well. These points don’t have any symbols or other
  information associated with them, but they help to define where the
  line is located.
- Lastly, there are numerous shapes on the sample map, representing
  different places - a forest, a river, a park, and buildings. A shape
  is used to represent an area, like a field or a building. A shape is
  exactly like a line - the only difference is that the line begins at
  the same point where it ends.

> It's easy to think of a map as containing these three basic types of objects - 
> points, lines, and shapes. In OpenStreetMap there is special terminology
> which you will come to learn as you progress. In OSM, points are actually called
> **nodes**, and lines are called **ways**. A shape is called a **closed way**
> because it is just a line that ends at the same point where it begins.

- You may notice that when you select an object, a list appears to the
  right of the map in a window called “Properties”. These are known as
  tags. Tags are information that is tied to a point, line or shape
  that describes what it is. We’ll learn more about tags in a later
  chapter. For now all you need to know is that this
  information helps describe whether our object is a forest, a river,
  a building, or something else.
- Think about drawing a map by hand, and how you are also drawing
  points, lines, and shapes. What other places are best represented by
  points? Lines? Shapes?

### Changing Objects

- Select the forest on the left side of the map. Be sure to click on
  the line around the forest, not one of the points on the line. Now
  hold your left mouse button down and drag your mouse. You should be
  able to move the forest to a new location on the map.
- Click on one of the points on the line around the forest. Hold your
  left mouse button down and drag your mouse. You should be able to
  move the point. This is how you can change the shape of an object,
  or move a point.

### Drawing

- On the left side of JOSM is a column of buttons. Many of these
  buttons open new windows on the right side that provide more
  information about the map. The most important buttons, however, are
  at the top of these column. These buttons change what you can do
  with your mouse.
- The top buttons in this column are the ones you will use the most.
  They are used for selecting objects and for drawing new ones.
- Until now, you have been using the Select tool, which looks like
  this:

  ![Select tool][]

- Before you draw, you need to make sure that nothing is selected.
  Click in the black space on the map, where it is empty, to make sure
  nothing is selected.
- Click on the second button, the Draw tool.

  ![Draw tool][]

- Find an empty area on the map, and double-click with your mouse.
  This will draw a single point.
- To draw a line, single-click with your mouse. Move your mouse and
  click again. Continue until you are happy with your line. To end the
  line, double-click your mouse.
- Draw a shape the same way that you draw a line, but finish the shape
  by double-clicking on the point where you started the line.

### Add Presets

- Now we know how to draw points, lines and shapes, but we still
  haven’t defined what they represent. We want to be able to say that
  our points are shops, schools, or something else, and whether our
  shapes are fields, buildings, or something else.
- Click on the Select tool, in the column of buttons on the left.

  ![Select tool][]

- Select one of the objects that you drew with the Draw tool. On the
  top menu, click “Presets”. Move your mouse through the sub-menu to
  the type of location you would like to define.
- When you click on a preset, a form will pop up asking you for more
  information. You do not have to fill in every field, but you may
  wish to add some of the important fields, such as the name of the
  object.
- When you are finished entering the information, click “Apply
  Preset”. If everything went well, your point, line, or shape should
  change colors or show a symbol. This is because you have defined
  what it is.

Draw Your Own Map
-----------------

- Now let’s draw a map in order to practice the techniques you have
  learned. You may wish to redraw the map that you drew on paper previously.
- Drag the map away from the sample map. Hold the right mouse button
  and drag your mouse, until you have a nice empty area to draw on.
- Use the Draw tool to create points, lines, and shapes. Describe what
  your objects are by selecting from the Presets menu.
- When you are finished, you should have your own map, similar to the
  sample map that we opened in sample.osm.

## Remove the sample layer

Once you feel comfortable with these basic editing techniques you might want
to turn your attention to mapping real features. 

*It is very important that you first remove the layer with the sample data. 
These data are fictitious and must not be uploaded to the OpenStreetMap 
database (newer JOSM releases automatically prevent this).*

In the Layers window on the upper right of the screen select the sample.osm layer. 
Then click on the trash can icon in the lower right corner of that window. 
Alternatively you can choose delete from the context menu of the layer. 
In order to continue editing you first need to download real data. 
This will be explained in the next chapter.

Summary
-------

Excellent! If all went well you have learned how to setup JOSM on your
computer, and the basic tools for drawing maps. In the next chapter we will
take a closer look at the process of editing the OSM map with JOSM.

[JOSM website]: /images/josm/josm-website.png
[Windows installer]: /images/josm/windows-installer.png
[JOSM splash page]: /images/josm/josm-splash-page.png
[Preferences window]: /images/josm/josm_preferences.png
[Look and feel]: /images/josm/josm_look-and-feel.png
[Open file]: /images/josm/josm_open-file.png
[Sample file]: /images/josm/josm_sample-file.png
[Scale bar]: /images/josm/josm_scale-bar.png
[Select tool]: /images/josm/josm_select-tool.png
[Draw tool]: /images/josm/josm_draw-tool.png