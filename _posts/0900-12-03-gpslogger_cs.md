---
layout: doc
title: GPSLogger pro Android
permalink: /cs/mobile-mapping/gpslogger/
lang: cs
category: mobile-mapping
---

GPSLogger pro Android
=====================

> Zkontrolováno 2015-12-06  

![GPSLogger][]

Jednoduchá, nenáročná a minimalistická aplikace pro záznam GPS tras pro platformu Android. Jednoduché uživatelské rozhraní, jediným účelem je záznam GPS a spotřebovávat tak co nejméně energie, k tomu možnost ukládat gps trasy do formátu GPX, KML, NEMA nebo textového. Soubory mohou být automaticky nahrány do OpenStreetMap, na OpenGTS server, DropBox, FTP server, HTTP server nebo odeslány na emailovou adresu.  

<https://play.google.com/store/apps/details?id=com.mendhak.gpslogger&hl=en>  

GPSLogger pro Android je zdarma a aktivně vyvíjený open source projekt. Sponzorské dary jsou vítány, podporují další vylepšování aplikace. Pokud se chcete zapojit (např. překladem do jiných jazyků, oznámit chybu, nebo navrhnout vylepšení), přejděte na [repozitář](https://github.com/mendhak/gpslogger).  

> Informace o OpenGTS najdete na stránce [Open GPS Tracking System](http://opengts.sourceforge.net/) project  


Funkce
--------  

* Záznam na základě časového intervalu nebo vzdálenosti  
* Specifické nastavení šetření baterie  
* Filtr přesnosti GPS pro záznam nespolehlivých bodů  
* Volba mezi wifi, vysílačem mobilní sítě a/nebo GPS satelity, jako zdroje informací o umístění.  
* Záznam do GPX, KML, CSV, TXT nebo NMEA souborů s podporou ZIP  
* Britské nebo metrické jednotky zobrazení  
* Automatický start po spuštění systému  
* Může běžet na pozadí  
* Může běžet společně s jinou GPS aplikací  
* Automatické odeslání na email/FTP/DropBox/Google Docs/OpenStreetMap/OpenGTS v intervalech nastavených uživatelem  
* Lze snadno přednastavit textové konfigurační soubory pro distribuci mnoha uživatelům  


Uživatelské rozhraní
--------------------------

![Canvass1][]

Tlačítko **Menu** poskytuje více možností nastavení aplikace.  
**Views drop-down** umožňuje nastavit způsob zobrazení informací na obrazovce.  
Pod tlačítkem **Help** naleznete další informace, jak používat aplikaci.  
Pomocí tlačítka **Annotate** přidáte popis k bodu.  
**Log one point** vám umožní ručně přidat waypoint.  
**Upload** vám umožňuje vybrat si z různých možností nahrávání logů. Zahrnuje i variantu automatického zasílání na některé z následujících:  

- OpenStreetMap,  
- Google Drive,  
- Google Drive,  
- FTP server,  
- OpenGTS server nebo  
- zaslání logu na emailovou adresu.  

Tlačítkem **Share** můžete nasdílet jeden nebo více záznamů s ostatními lidmi skrze Bluetooth, nebo SMS. Podle toho jaké aplikace máte nainstalované na zařízení, dostanete různou nabídku možností.  


![Canvass2][]

Tlačítko **Start Logging** je modré. Když jej zmáčknete, začne nahrávání a změní se na zelené.  
**Coordinates** zobrazuje poslední zapsaný GPS bod a změní se jakmile jsou k dispozici nové koordináty.  
Ikonka **Satellites** zobrazuje počet připojených satelitů.  
U **Elevation** se ukazuje nádmořská výška.  
**Duration** je uplynulý čas od zmáčknutí tlačítka start.  
**Distance** je celková zaznamenaná vzdálenost.  
**File Types** zobrazuje typy logů, které se vytvářejí a **File Path** je umístění souboru v zařízení nebo paměťové kartě.  
**Status** indikátor je zelený, když probíhá nahrávání, točí se, když se snaží najít signál.  
**Accuracy** informuje o přesnosti nahrávaných dat, která je ovlivněna přijímačem, polohou, počtem dostupných satelitů, povětrnostními podmínkami nebo překážkami na obzoru.  
**Bearing** ukazuje směr pohybu.  
**Speed** představuje průměrnou rychlost, kterou se pohybujete.  
**Points logged** je počet zaznamenaných bodů od chvíle, kdy jste zmáčkli tlačítko start.  


Menu
--------------------------

![Menus][]

V **General options** najdete nastavení *Spustit při startu*, *jednotky měření* (metrické nebo imperiální), *debug soubor* a *informace o verzi*.  

![Menus1][]

V **Logging details** si nastavíte *Souborové formáty* (můžete si vybrat i více formátů), *adresář* cesta k uloženým logům, pravidla pro *nově vytvořené soubory* a *název vlastního souboru*.  

![Menus2][]

![Menus3][]

Pod **Performance** je schováno nastavení *poskytovatelů lokace*, *načasování*, *filtrů* a *přijímačů*. V nastavení poskytovatelů lokace si můžete vybrat mezi: **GPS** - navigační satelity; **Síť** - přístupové body mobilní síťe; **Pasivní** - GPSLogger si "získává" souřadnice lokace z jiné aplikace a tak šetří baterii.  

![Menus4][]

![Menus5][]

**Auto send, email and upload** umožňuje nastavení různých možností nahrávání, jako např. do OpenStreetMap, Google Drive, FTP, Dropbox.  

![Menus6][]

Nahrávání GPS tras je dalším způsobem zapojení do projektu OpenStreetMap. Trasa se skládá ze záznamů vaší lokace v různých časových okamžicích nebo po určité vzdálenosti a to ve formátu zeměpisných souřadnic (délka, šířka, nadmořská výška). Mohou být využity, jako vrstva na pozadí při editaci map a je užitečná pro přidávání prvků do map, podobně jako satelitní snímky.  

#### Nastavení OpenStreetMap

![osm0][]

**Allow auto sending** povolí automatické odesílání souboru zaznamenané trasy.  
**Authorize this app** is for granting the app permission to upload GPS traces to OSM, using your OSM account.  
The **Visibility**, **Description**, **Tags** options are disabled until you authorize the app to upload GPS traces. These settings are used for the GPS traces that will be uploaded to the OpenStreetMap database.  
When you click the *Authorize this app*, you will be directed to your Internet browser and to the OpenStreetMap website. If you are not logged in, you will be asked for your credentials.  

![osm2][]

After logging in, you see a page like below, for verifying the app request, and the specific permission to *upload GPS traces*. Click on *Save changes* button to authorize the app.  

![osm3][]

Back to the GPSLogger app, the screen will be slightly different screen, with additional options available.

![osm1][]

Clicking on the **Clear authorization** option will remove the permission to upload GPS traces to the OSM server.  

There are several *visibility* options for GPS traces. *Private* traces are shared as anonymous, with unordered points. *Public* traces are shown in the trace listing, and as anonymous, unordered points. *Trackable* traces are shared as anonymous, with timestamps for ordered points. *Identifiable* traces are shown in the trace list, and can be associated with your username, with timestamps for ordered points.  

It is recommended that you set the visibility of the GPS traces you upload to *identifiable*. The data and metadata makes it more useful for other mappers. If you have concerns about privacy and personal security, choose a more appropriate settings, or don't upload the traces at all.  

A text *description* help others understand how a trace is recorded. A trace recorded on foot will not be similar to a trace recorded by a drone.  

A *tag* is short keyword that can be used to associate a trace with projects, places, or events.  


Data Collection
---------------

### Automated collection and uploading of gps tracks

Once properly configured, the application can run in the background and automatically record tracks and upload them once a day to any of its configured services. This would allow for the automated collection of tracks of daily driving to help build a collection of road and travel time data for later mapping or analysis. Once configured the person who has the phone or other android device should notice a little impact on battery usage and not have to do anything manually. Some experimentation will be needed to find the right balance of battery usage and clarity of the GPS tracks.  

An example config to automatically collect and upload to OpenStreetMap daily you would need to adjust these settings:  

#### General Options  

* **Start on bootup** - On  

#### Logging Details  

* **Log to GPX** - On  
* **New file creation** - Once a day  

#### Performance  

* **Time before logging** - 5  
* **Keep GPS on between fixes** - On (Turing this off can cause "jumps" in the GPS tracks while the device requires the GPS satellites each time.)  
* **Don't log if I'm not moving** - On  

#### Auto send, email and upload  

* **Allow auto sending** - On  
* **How often** - For once a day enter 1440 minutes. This setting can be a little tricky if you do not have access to data or wifi when it executes. It should start counting from when you either boot the device or hit the "Start logging" button, so if you start it in the morning, it will upload the same time the next morning for example.  
* **OpenStreetMap** - Allow auto sending on and any other settings you want to configure, pay close attention to the visibility setting if you have privacy concerns about the GPS tracks.  


### Manually Recording Traces

To start collecting logs (in Simple view), simply click on the blue button. A spinner will appear near the upper right corner of the screen to indicate the attempt to get a fix on satellites. A green circle will show in the upper right hand area to indicate logging is on going.  

To stop recording data any time, just press the green *Stop Logging* button.  

#### Annotate  

To add a note or description to a log, click on the *Annotate* (Pencil) icon. This option will let you a leave text to describe or take note of details that are associated with the current point.  

##### Calling annotation from the Notification Bar  

It's also possible to directly call the *Annotate* button from Android's Notification bar. Select the app from the Notification List and click on the *Annotate* button.  

![annotate0][]

This will display an input dialog box where you can enter the text details of the note.

![annotate1][]

#### Log intervals

Log intervals are determined by time or distance under the **Performance** menu.  

##### By time

**Time before logging** is set to 60 seconds by default. You can change this to five or ten seconds, when you are walking instead of riding in a vehicle. When you are in a car, you can set this to 1 second to generate very accurate logs.  

##### By distance

The **Distance filter** is set by default to zero. You can set this to something else, if you want to record the coordinates for every X number of units from the last point recorded.  


​Uploading traces
------------------

#### to OpenStreetMap

Press the *Upload* button and select the *OpenStreetMap* option. A dialog window will appear where files are available for selection. Choose any you want to upload and hit the *Ok* button.  

![upload0][]

#### to other options

There are other upload options you can explore, but are outside the scope of this guide. Refer to the GPSLogger for Android Project website for details.  


​Sharing traces 
---------------

You may also share the recorded traces, or your current location with other people. Sharing options may vary from one device to another, or the apps installed on a device. Below is an example of how the sharing option screen may look:  

![share0][]


Exporting traces to an OpenStreetMap editor
--------------------------------------------

When you are done recording traces, the tracks may be imported to JOSM (or another OpenStreetMap editor, like iD).  

Connect your Android device to a computer (also possible using a data cable, Bluetooth, or an Internet connection) and copy the GPX tracks and (and perhaps, multimedia files) you’ve captured.  In your device storage, look for the GPX tracks under the folder /Android/data/com.mendhak.gpslogger/files  

Using the GPX tracks with the JOSM and iD editors are easy as dragging the files and dropping them into the application (or the browser tab, for iD).  

For additional details for  iD users, see the section [Configuring the Background Layer](http://learnosm.org/en/beginner/id-editor/#configuring-the-background-layer).  

If the JOSM editor is used, you can find instructions on how to use the GPX track, along with the multimedia files in JOSM see the section [Open in JOSM](http://learnosm.org/en/mobile-mapping/using-gps/#open-in-josm).  

For other OpenStreetMap editors, please refer to your software’s documentation.  


Display Options
-----------------

The application can be displayed 3 different ways, whichever you find most appropriate for your use:

#### Simple View

![view0][]

#### Detailed View

![view1][]

#### Big View

![view2][]


Shrnutí
-------

Excellent! You've been introduced to a light-weight, battery-efficient app you can keep in your Android device to record tracks, which you can upload to OSM, or use with your favorite OpenStreetMap editor.  

GPSLogger for Android is another tool for collecting field data without a dedicated GPS receiver. Casual field data collection is possible without an active Internet connection.  

Take some time to practice and familiarize yourself with the app before working with live data.  

This section introduced the concept of using GPSLogger for Android for collecting GPS traces, uploading traces to OpenStreetMap, and transferring these logs to a PC.  


Official GPSLogger for Android Documentation
--------------------------------------------

The project maintains an [FAQ](http://code.mendhak.com/gpslogger/#faq) for commonly asked questions.

[GPSLogger]: /images/mobile-mapping/gpslogger_000.en.png
[Canvass1]: /images/mobile-mapping/gpslogger_001.en.png
[Canvass2]: /images/mobile-mapping/gpslogger_002.en.png
[Menus]: /images/mobile-mapping/gpslogger_003.en.png
[Menus1]: /images/mobile-mapping/gpslogger_003a.en.png
[Menus2]: /images/mobile-mapping/gpslogger_003b.en.png
[Menus3]: /images/mobile-mapping/gpslogger_003c.en.png
[Menus4]: /images/mobile-mapping/gpslogger_003d.en.png
[Menus5]: /images/mobile-mapping/gpslogger_003e.en.png
[Menus6]: /images/mobile-mapping/gpslogger_003f.en.png
[osm0]: /images/mobile-mapping/gpslogger_004.en.png
[osm1]: /images/mobile-mapping/gpslogger_004a.en.png
[osm2]: /images/mobile-mapping/gpslogger_004b.en.png
[osm3]: /images/mobile-mapping/gpslogger_004c.en.png
[upload0]: /images/mobile-mapping/gpslogger_005.en.png
[share0]: /images/mobile-mapping/gpslogger_006.en.png
[view0]: /images/mobile-mapping/gpslogger_007.en.png
[view1]: /images/mobile-mapping/gpslogger_007a.en.png
[view2]: /images/mobile-mapping/gpslogger_007b.en.png
[annotate0]: /images/mobile-mapping/gpslogger_008.en.png
[annotate1]: /images/mobile-mapping/gpslogger_008a.en.png