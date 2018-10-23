---
layout: doc
title: Edytor iD
permalink: /pl/beginner/id-editor/
lang: pl
category: beginner
---

Edytor iD
=============

> Ten przewodnik może zostać pobrany jako [beginner_id-editor_pl.odt](/files/beginner_id-editor_pl.odt) lub [beginner_id-editor_pl.pdf](/files/beginner_id-editor_pl.pdf)  
> Przejrzano 30.03.2016  

Zaczynasz mapować z Tasking Managerem dla HOT lub MissingMaps? Zobacz naszą [sekcję ze wskazówkami dla HOT](/pl/hot-tips/).  

- TOC
{:toc}

Edytor iD jest de facto edytorem OpenStreetMap opartym na przeglądarce. iD jest szybki i łatwy w użyciu oraz pozwala na mapowanie z różnych źródeł danych takich, jak zdjęcia satelitarne i lotnicze, GPS, Field Papers lub Mapillary.  

Edytor iD jest świetnym wyborem do edycji małych i łatwych zmian, które nie wymagają zaawansowanych funkcji JOSM (bardziej zaawansowany edytor map). Ten rozdział demonstruje podstawy edytowania w iD.  

Uruchamianie edytora iD
----------------------

-	Edytor iD wymaga aktywnego połączenia z internetem.  
-	Otwórz swoją przeglądarkę internetową i przejdź do strony OpenStreetMap pod adresem [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-	**Zaloguj się** używając swojego konta OpenStreetMap.  
-	Przesuń i przybliż mapę do obszaru, który chcesz edytować. Możesz przesuwać trzymając lewy przycisk myszy i przeciągając mapę do pożądanego obszaru.  
-	Kliknij na małej strzałce za napisem **Edycja**. Następnie kliknij **Edytuj w iD (w tej przeglądarce)**.  

![image1][]


Interfejs użytkownika edytora iD
-------------------------
![image2][]

1. **Panel edycji obiektu:** Ten panel pokazuje tagi obiektu zaznaczonego na mapie.  
	W tym panelu możesz dodawać lub edytować tagi.  
2. **Narzędzia:** Ten panel pokazuje podstawowe narzędzia do edycji:  
    Rysuj punkt (węzeł), *klawisz skrótu* **1** ![image3][]{: height="24px"}  
    Rysuj linię (drogę), *klawisz skrótu* **2** ![image4][]{: height="24px"}  
    Rysuj obszar (wielokąt), *klawisz skrótu* **3** ![image5][]{: height="24px"}  
    Cofnij, *klawisz skrótu* **Ctrl+z** ![image6][]{: height="24px"}  
    Ponów, *klawisz skrótu* **Ctrl+y** ![image7][]{: height="24px"}  
    Zapisz zmiany, *klawisz skrótu* **Ctrl+s** ![image8][]{: height="24px"}  
3. **Panel mapy:** Ten panel pokazuje różne funkcje konfiguracji:  
    Przybliż, *klawisz skrótu* **+** ![image9][]{: height="24px"}  
    Oddal, *klawisz skrótu* **-** ![image10][]{: height="24px"}  
    Wyświetl aktualne położenie ![image11][]{: height="24px"}  
    Ustawienia tła, *klawisz skrótu* **b** ![image12][]{: height="24px"}  
    Dane mapy, *klawisz skrótu* **f** ![Map Data][]{: height="24px"}  
    Pomoc, *klawisz skrótu* **h** ![image13][]{: height="24px"}  
4. **Panel informacji:** Ten panel pokazuje różne informacje takie, jak pasek skali oraz nazwy użytkowników, którzy edytowali dany obszar.  

Konfigurowanie warstwy podkładu
--------------------------------

Kliknij przycisk **Ustawienia tła** lub użyj *klawisza skrótu* **b**.![image14][]{: height="24px"}  
![image15][]  
Aby zmienić **poziom jasności** kliknij jeden z tych kwadratów, które oznaczają 100%, 75%, 50% i 25% ![image16][]{: height="24px"}  
Możesz też **zmienić warstwę tła** zależnie od żądanego dostawcy kafelków (w Polsce domyślnie jest to Ortofotomapa z Geoportalu).  

Możesz dodać swoje własne kafelki mapy klikając na  **Własne**. Na przykład, jeśli chcesz **dodać Field Paper** [^fieldpaper], kliknij **Własne**, następnie kliknij na ikonce lupy (szukaj), aby otworzyć następujące okno:-  
![image17][]   
i wprowadź swój **URL z FieldPaper**, który będzie wyglądał mniej więcej tak: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Aby **wyświetlić ślady GPS z Twojego komputera** (format GPX), przeciągnij plik GPX do edytora iD.  
Aby włączyć **ślady GPS OpenStreetMap** zaznacz pole. Na poniższym obrazku, publiczne ślady GPS są pokazane w różnych kolorach, wskazując na kierunek podróży.  
![osm gps traces][]  
Jeżeli występuje [przesunięcie podkładu](/pl/josm/aerial-imagery), możesz **skorygować przesunięcie podkładu** klikając na **Dopasuj przesunięcie warstwy tła**. ![image18][]  

- Klikaj strzałki, aby przesuwać podkład. Kliknij przycisk resetowania, aby przywrócić jego domyślną pozycję. ![image20][]  

Podstawowa edycja w iD  
----------------------  

### Dodawanie punktów  

Aby dodać nowy punkt, kliknij na przycisku **Punkt**. ![image3][]{: height="24px"}  

- Twój kursor zmieni się na znak plusa (+). Teraz kliknij w miejscu, które znasz, aby zaznaczyć jego lokalizację. Na przykład, jeżeli wiesz, że w Twojej okolicy jest szpital, kliknij w miejscu, gdzie znajduje się budynek szpitala.  
![image21][]  
- Zauważ, że został dodany nowy punkt. W tym samym czasie lewy panel zmienił się, aby pokazać formularz, w którym możesz wybrać właściwości obiektu. Kliknij **Teren szpitala**, aby oznaczyć punkt jako szpital.  
![image22][]  
- Możesz używać formularzy, aby uzupełnić szczegółowe informacje o swoim punkcie. Możesz wypełnić nazwę szpitala, adres i/lub inne dodatkowe informacje. Zauważ, że każdy obiekt ma różne opcje, w zależności od tego, jaki tag wybierzesz w panelu edycji obiektu.  
- Jeżeli popełnisz błąd taki, jak np. zła lokalizacja, to możesz przesunąć Twój punkt do nowej lokalizacji poprzez przytrzymanie lewego przycisku myszy na swoim punkcie i przeciąganie go. Lub, jeśli chcesz usunąć Twój punkt, kliknij go lewym przyciskiem myszy, aktywuj menu kontekstowe prawym przyciskiem myszy i kliknij przycisk wyglądający, jak kosz na śmieci. ![image23][]{: height="24px"}  
"Punkt" utworzony w edytorze iD jest aktualnie samodzielnym "węzłem" z zestawem "tagów".  

### Drawing Lines  

To add a new line, click on the **Line** button. ![image4][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Find a road that hasn’t been drawn on the map and trace it. Click once on a point where the road segment begins, move your mouse, and click to add additional points. Double-click to end the drawing process. Notice the panel on the left.  
![image24][]  
- Just as with a point, select the appropriate tags for your line.  
- You can drag points from the line by clicking your left mouse button on a point and dragging it.  
- You also can move the whole line by selecting it, and choosing the **Move tool**. Then drag the line to a new position. ![image30][]{: height="24px"}  
- When you click your left mouse button on an individual point (node) on the line and click on the right mouse button to activate the context menu, you will see these tools:  
- Delete point from line. ![image23][]{: height="24px"}  
- Disconnect point from line. ![image26][]{: height="24px"}  
- Split a line into two lines from the point you’ve selected. ![image27][]{: height="24px"}  
- When you click your left mouse button on a line (but not on a point), you will see these tools:  
-   Delete line. ![image23][]{: height="24px"}  
-   Create a circle from a line (only active if the line is closed) ![image29][]{: height="24px"}  
-   Move line ![image30][]{: height="24px"}  
-   Form a square shape from a line (only active if the line is closed) ![image31][]{: height="24px"}  
-   Reverse line direction (good for rivers & one-way streets) ![image32][]{: height="24px"}  

A "line" created in the iD editor is actually a "way" with "tags" on it.

>A special note about **Deleting**: In general you should avoid deleting other people's mapping if it just needs improvement. You can delete your own mistakes, but you should try to *adjust* other people's mapped objects if they need changes. This preserves the history of the items in the OSM database and is respectful of fellow mappers. If you really feel something should be deleted, consider asking the original mapper or one of the OSM email lists about it first.

### Drawing Shapes (Polygons)

To add a new multi-sided shape, click on the **Area** button. ![image34][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Try to trace a building using the imagery as a guide.  
- You will notice that the color of your shape will change depending on the attributes that you assign to it.  
![image35][]  
- The tools that are available when you select a shape and activate the context menu with the right mouse button are similar to those when you click on a line.  

A "polygon" in the iD editor is actually a "closed way" with tags on it.

### Drawing Multipolygons

Sometimes you have to draw a polygon which does not only have an outer contour but also one or more inner contours. Just think of buildings with inner courtyards or lakes with islands. *Do not draw all these ways in one line* so that the inner contours suspend from the outer contour. Rather draw these contours separate, attach tags to the outer contour only, select all contours and hit **c** in order to combine them into what is called a multipolygon.

![create multipolygon][]

When you select any of the contours of the newly created multipolygon you can see on the left to which multipolygons it belongs

![part of multipolygon][]

Saving Your Changes
--------------------

When (and if) you want to save your edits to OpenStreetMap, click the **Save** button. The panel on the left will show the upload panel.  
![image36][]  

- Enter a comment about your edits and click **Save**.  

> If you have edited the same feature (point, way or area) at the same time as another person was editing it, you will receive a warning that your edits cannot be uploaded until you have resolved the **conflicts** - choose whose edits to accept & upload your changes. *Resolving conflicts often involves accepting the other persons edits, in which case you will probably wish to return to the feature in question and edit again (**this time save soon after the edit to try to avoid a conflict again!**).*

Additional Information and Custom Tags
---------------------------------------

When you are editing an object, you will see a strip of icons at the bottom of the attribute panel. You can add additional information by clicking these icons:

- Add elevation ![image37][]{: height="24px"}  
- Add notes ![image38][]{: height="24px"}  
- Add contacts / phone number ![image39][]{: height="24px"}  
- Add source tag ![image40][]{: height="24px"}  
- Add website ![image41][]{: height="24px"}  
- Add accessibility information ![image42][]{: height="24px"}  
- Add Wikipedia link ![image43][]{: height="24px"}  

Or, you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

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

The contents of this guide is available as a [presentation](/files/iD-editor-training.pptx)



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
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[create multipolygon]: /images/beginner/id-editor_create_multipolygon.png
[part of multipolygon]: /images/beginner/id-editor_part_of_multipolygon.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png