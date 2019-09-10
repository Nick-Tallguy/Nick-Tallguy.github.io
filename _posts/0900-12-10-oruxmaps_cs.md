---
layout: doc
title: OruxMaps
permalink: /cs/mobile-mapping/oruxmaps/
lang: cs
category: mobile-mapping
---

OruxMaps
===============

> Zkontrolováno 2016-08-04 a ikdyž je software mírně zastaralý, tak stále funguje a v článku najdete odkaz na originální manuál k softwaru. 

V této sekci se naučíme nastavit OruxMaps, vytvoříme si výchozí body, podíváme se na záznam trasy a exportujeme ho pro použití v JOSM.  

​Instalace OruxMaps
------------------

Nainstalujte si aplikaci z Google Play Store vyhledáním **OruxMaps**, měla by se zobrazit mezi prvními v seznamu.  

![Search OruxMaps in Play Store][]

Klikněte na **Instalovat** a přijměte podmínky používání.  

![Install OruxMaps][]

Gratulujeme! Nyní  máte nainstalováno OruxMaps na svém zařízení!  

Používání OruxMaps
--------------------

Po prvním spuštění aplikace se vám zobrazí podobná notifikace:  

![Running OruxMaps for the first time][]

V OruxMaps si můžete vybrat, jestli chcete používat online nebo offline mapy. Lepší jsou offline mapy, protože nejste závislý na internetovém připojení. OruxMaps vám nabídnou dva zdroje pro stažení offline map. Pokud je již máte, můžete je sem také vložit! Zpočátku může být to množství tlačítek trochu matoucí. Ale není čeho se bát, níže se se s každým z nich seznámíte:  

![Interface overview][]

Zdroj: [OruxMaps manuál anglická verze](http://www.google.com/url?q=http%3A%2F%2Fwww.oruxmaps.com%2Foruxmapsmanual_en.pdf&sa=D&sntz=1&usg=AFQjCNFY7Tk-Gzz9NFKy9WOsnfnn8x3Kwg)  
Tento manuál je nejspíš aktuálnější než tento průvodce a možná je dostupný i v jiných jazycích.  

Mapový podklad si můžete změnit v nabídce **Maps \> Switch Maps**. Poté si vyberte ze dvou možností - chcete-li použít **Online Mapy** nebo radši
**Offline Mapy**. OruxMaps poskytuje spoustu zdrojů Online Map, ze kterých si můžete vybrat, ale to vás můžete stát peníze v závislosti na ceně vašich dat.  Pokud chcete vědět, kam můžete uložit vaše offline mapy, jděte do **Setting \>Maps**. U položky **Maps directory** je uvedena cesta, kam OruxMaps ukládá vaše
offline mapy. Přednastavený je adresář **OruxMaps/Mapfiles** ve vaší vnitřní paměti.   

![Offline maps storage settings][]

Spouštíme záznam trasy
--------------

Předtím než začneme zaznamenávat trasu, nahlédněme do nastavení track/routes (trasy/cesty). První nastavení je **Auto GPX Creation**. Pokud toto nastavení zaškrtnete, OruxMap vám pomůže s vytvořením .gpx souboru ihned po ukončení záznamu trasy (pomocí funkce Stop Tracking). Takže jakmile dokončíte trasu, přejděte do **OruxMaps/Tracklogs** ve své interní paměti, kde najdete své .gpx soubory aniž byste museli exportovat váš track log přes track/routes nastavení. Druhým nastavením je **Ask Track Name**. Vyplatí se pojmenovat si trasu před jejím záznamem, později ji rychleji najdete.  

![Tracklog settings][]

Před spuštěním záznamu si ověřte zda máte zapnutou GPS v zařízení. Žádná funkce v OruxMaps, jako např. **Start GPS** a **Start Rec**, nebude fungovat dokud neaktivujete GPS. OruxMaps vám zobrazí notifikaci, pokud máte zakázanou GPS a přesune vás rovnou do nastavení GPS. Jakmile zapnete GPS, můžete si zjistit svoji pozici pomocí funkce **Start GPS** (1)  v pravém panelu. Jakmile je vaše pozici zaměřena, můžete spustit záznam pomocí  **Start Rec.** (2) v pravém panelu.  

![Start track recording][]

To stop tracking you only need to press the same button (2) in the right panel. After you stop tracking OruxMap will store your tracklog in an internal  database. You can access the tracklog by accessing **Routes** panel in top page, select **Manage**.You will find all of your tracklog here and you can see the route by press the tracklog that you want to see and select **Load the Track** (1). If you don’t use Auto GPX creation feature you can export your tracklog in various format (GPX, KML, KMZ) by select your tracklog and **Export as** (2).  

![Managing tracklogs][]

If you already have an OpenStreetMap account, you can upload your track directly using OruxMaps. Before you upload your tracklog you need to put your username and password by going to **Setting \> Integration \> OpenStreetMap**. After that enter your username and password. You can upload your tracklog by using **Upload to (3)** in track/routes management.  

Some windows will pop up and you need to select **OpenStreetMaps** (1) and after that you choose your **Tracklog type** (2), put your **Description** (3) and also the **Tag** (4). After all the information already filled up press **Upload GPX** (5). The notification will pop up and you can directly see your GPS traces on the OpenStreetMap website by selecting **OK** (6).  

![Uploading tracks to OpenStreetMap][]

Přidáváme výchozí bod
---------------------

![Creating a waypoint][]

If you want to add waypoint, you need to go to **Waypoint** symbol (1) at the top of the page and go to **Create** (2). It will bring you to waypoint creation page and fill your waypoint name. You can add extra information, for example a description of your waypoint and coordinates of your waypoint by checking the Coordinates checklist. Press Accept to save your waypoint.  

![Waypoint creation settings][]

If you want to see all of your waypoints, you can go to **Waypoint \>Manage**. From this page you can change the properties, delete and export the waypoint. To see all of your waypoints in **map**, select the waypoints and go to show in map (1) and if you want to export your waypoints press **Export** (2). All of your exported waypoints will be stored in internal storage (by the default it stored in **oruxmaps/geocaches**).  

![Managing save waypoints][]

Shrnutí
-----------

Gratulujeme! Už víte, jak používat OruxMaps pro průzkum terénu. Napoprvé to bude možná obtížné, ale pokud to překonáte, tak se s touto aplikací určite sžijete.  

[Search OruxMaps in Play Store]: /images/mobile-mapping/oruxmaps_image00.png
[Install OruxMaps]: /images/mobile-mapping/oruxmaps_image03.png
[Running OruxMaps for the first time]: /images/mobile-mapping/oruxmaps_image01.png
[Interface overview]: /images/mobile-mapping/oruxmaps_image09.png
[Offline maps storage settings]: /images/mobile-mapping/oruxmaps_image06.png
[Tracklog settings]: /images/mobile-mapping/oruxmaps_image11.png
[Start track recording]: /images/mobile-mapping/oruxmaps_image02.png
[Managing tracklogs]: /images/mobile-mapping/oruxmaps_image10.png
[Uploading tracks to OpenStreetMap]: /images/mobile-mapping/oruxmaps_image05.png
[Creating a waypoint]: /images/mobile-mapping/oruxmaps_image07.png
[Waypoint creation settings]: /images/mobile-mapping/oruxmaps_image08.png
[Managing save waypoints]: /images/mobile-mapping/oruxmaps_image04.png