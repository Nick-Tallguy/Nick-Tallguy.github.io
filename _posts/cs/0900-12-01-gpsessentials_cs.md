---
layout: doc
title: GPS Essentials
permalink: /cs/mobile-mapping/gpsessentials/
lang: cs
category: mobile-mapping
---



GPS Essentials
===================


Instalace GPS Essentials
-------------

1. Klepnutím na ikonu aplikace „Obchod Google Play“ na domovské obrazovce zařízení Android otevřete Android Market.
2. Klepněte na ikonu „Hledat“ v pravém horním rohu.
3. Pomocí vyhledávací lišty v horní části vyhledejte „GPS Essentials“.
4. Klepněte na ikonu GPS Essentials a vyberte „Instalovat“. Ikona vypadá takto:

    ![GPS Essentials logo][]

Pokud nemáte přístup ke službě Google Play nebo si chcete stáhnout jiné verze než stabilní verzi, jako jsou starší verze nebo nejnovější beta verzi, můžete si stáhnout GPS Essentials z <http://www.images.com>.

Konfigurace GPS Essentials pro práci offline
-------------

1. Otevřete GPS Essentials. Přejděte do Nastavení a vyberte Map Cache. Přesuňte limit mezipaměti na maximum.

    ![Map Cache][]

2. Najděte silné síťové připojení. Na hlavní obrazovce vyberte „Přenosné mapy“. Každá mapa, kterou si prohlížíte v režimu přenosné mapy, se automaticky uloží do paměti systému Android. Uložte mapy, které budete potřebovat offline, v co nejpodrobnějších detailech a pomalu přibližujte jednotlivé body.

3. Odpojte se od sítě a zobrazujte mapy v režimu přenosných map. Pokud některým mapám chybí podrobnosti, znovu se připojte k síti a pomalu přibližujte požadované místo na mapě.

Funkce GPS na Android telefonu
-------------

Před použitím GPS Essentials se ujistěte, že máte povolenou GPS v telefonu.

![Enable GPS in Android][]

Připojení k satelitům
-------------

Předtím, než přijímač GPS vyšle polohu (což se také nazývá GPS fix), musí přijímat signály alespoň ze čtyř satelitů. Čím níže je satelit nad horizontem, tím déle jeho signály putují atmosférou, takže satelity vysoko nad horizontem mají obvykle lepší signály.

Kontrola satelitů ve vaší oblasti:

1. Z hlavní nabídky vyberte Satelity.

    ![Satellites page][]

2. Pokud jsou ve fixu použity alespoň čtyři satelity, můžete začít používat funkce GPS Essentials.

Vytváření tras
-------------

1. Z hlavní nabídky vyberte Trasy.

2. Na panelu nástrojů klepněte na Start. Vytvoří novou trasu a začne nahrávat. Počkejte několik sekund, dokud nebude k dispozici GPS fix.

    ![New Track][]

3. Stisknutím tlačítka Pauza nahrávání pozastavíte. Pokud chcete pokračovat v nahrávání, stiskněte jej znovu.

Vytváření výchozích bodů
-------------

### Pomocí Portable Maps

1. Z hlavní nabídky vyberte Přenosné mapy.

2. Klepnutím a přidržením na mapě vytvořte nový kurzor.

    ![Waypoints1][]

3. Přetáhněte kurzor na místo, kde chcete mít nový trasový bod.

4. Klepnutím na Akce zobrazíte podokno akcí. Ikona Akce vypadá takto:

    ![Actions][]

5. Vyberte nástroj Přidat a vytvořte trasový bod.

    ![Waypoints2][]

### Pomocí Google Maps

1. Z hlavní nabídky vyberte Mapy Google.

2. Přejděte na místo, kam chcete přidat svůj trasový bod.

3. Vyberte nástroj Přidat a vytvořte trasový bod. Klepněte na místo na mapě a vytvořte tam Waypoint. Chcete-li vytvořit trasový bod v aktuálním umístění, klepněte znovu na tlačítko Přidat trasový bod.

    ![GoogleMaps][]

4. Opakujte kroky b a c, dokud neukončíte nahrávání požadovaných trasových bodů.

### Pomocí stránky Waypoints

1. Z hlavní nabídky vyberte Trasové body.

2. Vyberte nástroj Přidat a vytvořte trasový bod.

    ![Waypointspage1][]

3. Začne zaznamenávat váš 1. waypoint. Můžete změnit atributy trasového bodu a stisknutím Zpět se vraťte do seznamu.

    ![Waypointspage2][]

4. Když vyberete podokno mapy, uvidíte, kde se váš trasový bod nachází na mapě.

    ![Waypointspage3][]

5. Vyberte ikonu Zavřít pro uložení vašeho trasového bodu. Ikona Zavřít vypadá takto:

    ![Close][]

Přidání lokace k fotkám
-------------

1. Z hlavní nabídky vyberte Camera.

2. Vyfoťte požadovanou oblast pro geotagging.

3. Vyfotografovaná fotografie bude sloužit jako waypoint a bude automaticky uložena na stránce Přenosné mapy a Mapy Google.

4.  The data (picture location and the photo file name) will also be logged on the Waypoints page. You may also choose which icon to be used for a particular image. The icon will be shown on the Portable Maps and Google Maps page as well.

Uložené fotky
-------------

All your pictures are in the folder com.mictale.images on your SD card. You can delete pictures from this folder and you can even add new ones. GPS Essentials scans this folder regularly to see what’s new.

Export/Ukládání výchozích bodů
-------------

1.  From the main menu, select Waypoints. It will show you the list of waypoints you recorded.

2.  To export all the waypoints, select Export from the Options button. If you want to export a single waypoint, select the desired waypoint, click the Options button and select Export.

3.  The dropdown box will let you select what type of file you want your data to be exported. For now, click KML (Google Earth).

    ![Export file format][]

4.  Select the SD card icon to manually select your desired location of the file.

    ![Export to SD card][]

5.  Click this icon to Save.

    ![Arrow][]

Export/Ukládání tras
-------------

1.  From the main menu, select Tracks. It shows the data from the current track you recorded.

2.  Select Export from the Options button to write the contents of the current track to a file.

3.  If you want to export the previous track you recorded, select Tracks icon and choose the desired track. Click the Options button and select Export. The Tracks icon looks like this:

    ![Footprints][]


4.  The dropdown box will let you select what type of file you want your data to be exported. For now, click KML (Google Earth).

    ![Export1][]

5.  Select the SD card icon to manually select your desired location of the file.

    ![Export3][]

6.  Click this icon to Save.

    ![Arrow][]

[GPS Essentials logo]:  /images/mobile-mapping/gpsessentials-Logo.png
[Map Cache]:  /images/mobile-mapping/gpsessentials-mapcache.png
[Enable GPS in Android]:  /images/mobile-mapping/gpsessentials-GPSenable.png
[Satellites page]:  /images/mobile-mapping/gpsessentials-satellites.png
[New Track]:  /images/mobile-mapping/gpsessentials-newtrackstart.png
[Waypoints1]:  /images/mobile-mapping/gpsessentials-cursor.png
[Actions]:  /images/mobile-mapping/gpsessentials-actionsbutton.png
[Waypoints2]:  /images/mobile-mapping/gpsessentials-addwaypoint.png
[GoogleMaps]:  /images/mobile-mapping/gpsessentials-addwaypointgooglemaps.png
[Waypointspage1]:  /images/mobile-mapping/gpsessentials-add.png
[Waypointspage2]:  /images/mobile-mapping/gpsessentials-wp.png
[Waypointspage3]:  /images/mobile-mapping/gpsessentials-map.png
[Close]:  /images/mobile-mapping/gpsessentials-save.png
[Export file format]:  /images/mobile-mapping/gpsessentials-export.png
[Export to SD card]:  /images/mobile-mapping/gpsessentials-exportwaypoints.png
[Arrow]:  /images/mobile-mapping/gpsessentials-savebutton.png
[Footprints]:  /images/mobile-mapping/gpsessentials-tracksicon.png
[Export3]:  /images/mobile-mapping/gpsessentials-sdcardsave.png