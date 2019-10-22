---
layout: doc
title: GPS Essentials
permalink: /cs/mobile-mapping/gpsessentials/
lang: cs
category: mobile-mapping
--- 



GPS Essentials
===================

> Zkontrolováno 2015-05-24  

Instalace GPS Essentials
-------------

1. Otevřete si aplikaci “Google Play Store” ve vašem Android zařízení.
2. Klikněte na "Vyhledávací" ikonu vpravo nahoře.
3. Vyhledejte “GPS Essentials”.
4. Označte ikonu GPS Essentials a vyberte "Instalovat". Ikona vypadá takhle:

   ![GPS Essentials logo][]

Pokud nemáte přístup do Google Play nebo chcete stáhnout jinou než stabilní verzi,
jako třeba starší nebo nejnovější betu, můžete stáhnout GPS Essentials z http://www.images.com.

Konfigurace GPS Essentials pro práci offline
-------------

1. Spusťte GPS Essentials. Otevřete Settings a vyberte Map Cache. Nastavte cache limit na maximum.

   ![Map Cache][]

2. Připojte se k rychlé síti. Na hlavní obrazovce vyberte 'Portable Maps'. Všechny mapy zobrazené v módu portable
map se automaticky uloží do paměti Androidu. Uložte si mapy, které budete potřebovat offline v maximálním detailu
a pomalu si přibližte každý výchozí bod.

3. Odpojte se ze sítě a podívejte se na mapy v módu portable map. Pokud některé mapy postrádají detail, znovu se připojte
 k Internetu a pomalu si přibližte oblast, kterou potřebujete.

Funkce GPS na Android telefonu
-------------

Před použitím GPS Essentials se ujistěte, že máte povolenou GPS v telefonu.

![Enable GPS in Android][]

Připojení k satelitům
-------------

Dříve než začne přijímač GPS vysílat lokaci (taktéž nazáváno GPS fix), musí přijmout signály z nejméně čtyř satelitů.
Čím níže je satelit nad horizontem, tím déle signál putuje skrze atmosféru, takže satelity
vysoko nad horizontem mají obvykle lepší signály. 

Kontrola satelitů ve vaší oblasti:

1. V hlavním menu vyberte Satellites.

   ![Satellites page][]

2. Pokud se zobrazí alespoň čtyři připojené satelity, pak můžete začít používat funkce GPS Essentials.

Vytváření tras
-------------

1. Z hlavního menu vyberte Tracks.

2. Zmáčkněte Start. Vytvoří se nová trasa a začne záznam. Vyčkejte několik sekund dokud se GPS 
nepřipojí.

   ![New Track][]

3. Tlačítkem Pause pozastavíte záznam. Opětovným zmáčknutím záznam znovu spustíte.

Vytváření výchozích bodů
-------------

### Pomocí Portable Maps

1. Z hlavního menu vyberte Portable Maps.

2. Podržte prst na mapě pro vytvoření nového kurzoru.

   ![Waypoints1][]

3. Přesuňte kurzor na místo, kde chcete vytvořit nový výchozí bod.

4. Zmáčkněte tlačítko Actions a zobrazí se podokno akcí. Ikona Actions vypadá takhle:
	
   ![Actions][]
	
5. Zmačknutím Add Tool vytvoříte výchozí bod.
	
   ![Waypoints2][]
	
### Pomocí Google Maps

1. Z hlavního menu vyberte Google Maps.

2. Nejďte na místo, kde chcete vytvořit váš výchozí bod.

3. Zmáčkněte tlačítko Add Tool. Ťukněte na místo na mapě a tam 
   se výchozí bod vytvoří. Pokud ho chcete vytvořit na vaší aktuální pozici, zmáčkněte tlačítko
   Přidat výchozí bod ještě jednou.

   ![GoogleMaps][]

4. Opakujte krok 2 a 3 dokud nebudete mít umístěné všechny výchozí body.

### Using Waypoints page

1. From the main menu, select Waypoints.

2. Select the Add tool to create the waypoint.

   ![Waypointspage1][]

3. It will start recording your 1st waypoint. You may change the attributes of the waypoint
   and then press Back to get back to the list.
	
   ![Waypointspage2][]

4. When you select the Map pane, you will see where your waypoint is located on the map.
	
   ![Waypointspage3][]

5. Select Close icon to save your waypoint. The Close icon looks like this:
	
   ![Close][]


	
Geotagging Photos
-------------

1. From the main menu, select Camera.

2. Take a picture of your desired area for geotagging.

3. The photo you took will serve as a waypoint and automatically be saved on the Portable Maps
and Google Maps page.

4. The data (picture location and the photo file name) will also be logged on the Waypoints page.
You may also choose which icon to be used for a particular image. The icon will be shown on the
Portable Maps and Google Maps page as well.

Saved Photos
-------------

All your pictures are in the folder com.mictale.images on your SD card. You can
delete pictures from this folder and you can even add new ones. GPS Essentials scans this folder
regularly to see what’s new.

Exporting/Saving Waypoints
-------------

1. From the main menu, select Waypoints. It will show you the list of waypoints you recorded.

2. To export all the waypoints, select Export from the Options button. If you want to export
a single waypoint, select the desired waypoint, click the Options button and select Export.

3. The dropdown box will let you select what type of file you want your data to be exported.
For now, click KML (Google Earth).

   ![Export file format][]

4. Select the SD card icon to manually select your desired location of the file.

   ![Export to SD card][]

5. Click this icon to Save.

   ![Arrow][]

Exporting/Saving Tracks
-------------

1. From the main menu, select Tracks. It shows the data from the current track you recorded.

2. Select Export from the Options button to write the contents of the current track to a file.

3. If you want to export the previous track you recorded, select Tracks icon and choose the desired track.
   Click the Options button and select Export. The Tracks icon looks like this:

   ![Footprints][]


4. The dropdown box will let you select what type of file you want your data to be exported.
   For now, click KML (Google Earth).

   ![Export1][]

5. Select the SD card icon to manually select your desired location of the file.

   ![Export3][]

6. Click this icon to Save.

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