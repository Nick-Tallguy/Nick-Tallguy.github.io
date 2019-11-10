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
**Varianty zobrazení** umožňuje nastavit způsob zobrazení informací na obrazovce.  
Pod tlačítkem **Pomoc** naleznete další informace, jak používat aplikaci.  
Pomocí tlačítka **Přidat popis** přidáte popis k bodu.  
**Zaznamenat jeden bod** vám umožní ručně přidat waypoint.  
**Odeslání** vám umožňuje vybrat si z různých možností nahrávání logů. Zahrnuje i variantu automatického zasílání na některé z následujících:  

- OpenStreetMap,  
- Google Drive,  
- Google Drive,  
- FTP server,  
- OpenGTS server nebo  
- zaslání logu na emailovou adresu.  

Tlačítkem **Sdílení** můžete nasdílet jeden nebo více záznamů s ostatními lidmi skrze Bluetooth, nebo SMS. Podle toho jaké aplikace máte nainstalované na zařízení, dostanete různou nabídku možností.  


![Canvass2][]

Tlačítko **Spustit zápis** je modré. Když jej zmáčknete, začne nahrávání a změní se na zelené.  
**Souřadnice** zobrazuje poslední zapsaný GPS bod a změní se jakmile jsou k dispozici nové koordináty.  
Ikonka **Satelity** zobrazuje počet připojených satelitů.  
U **Nadmořská výška** se ukazuje nádmořská výška.  
**Doba trvání** je uplynulý čas od zmáčknutí tlačítka start.  
**Vzdálenost** je celková zaznamenaná vzdálenost.  
**Typ souboru** zobrazuje typy logů, které se vytvářejí a **Cesta k souboru** je umístění souboru v zařízení nebo paměťové kartě.  
**Status** indikátor je zelený, když probíhá nahrávání, točí se, když se snaží najít signál.  
**Přesnost** informuje o přesnosti nahrávaných dat, která je ovlivněna přijímačem, polohou, počtem dostupných satelitů, povětrnostními podmínkami nebo překážkami na obzoru.  
**Směr** ukazuje směr pohybu.  
**Rychlost** představuje průměrnou rychlost, kterou se pohybujete.  
**Počet bodů** je počet zaznamenaných bodů od chvíle, kdy jste zmáčkli tlačítko start.  


Menu
--------------------------

![Menus][]

V **Obecné možnosti** najdete nastavení *Spustit při startu*, *jednotky měření* (metrické nebo imperiální), *ladící soubor* a *informace o verzi*.  

![Menus1][]

V **Podrobnosti záznamu** si nastavíte *Souborové formáty* (můžete si vybrat i více formátů), *adresář* cesta k uloženým logům, pravidla pro *nově vytvořené soubory* a *název vlastního souboru*.  

![Menus2][]

![Menus3][]

Pod **Výkon** je schováno nastavení *poskytovatelů lokace*, *načasování*, *filtrů* a *přijímačů*. V nastavení poskytovatelů lokace si můžete vybrat mezi: **GPS** - navigační satelity; **Síť** - přístupové body mobilní síťe; **Pasivní** - GPSLogger si "získává" souřadnice lokace z jiné aplikace a tak šetří baterii.  

![Menus4][]

![Menus5][]

**Automaticky odeslat, email a nahrávání** umožňuje nastavení různých možností nahrávání, jako např. do OpenStreetMap, Google Drive, FTP, Dropbox.  

![Menus6][]

Nahrávání GPS tras je dalším způsobem zapojení do projektu OpenStreetMap. Trasa se skládá ze záznamů vaší lokace v různých časových okamžicích nebo po určité vzdálenosti a to ve formátu zeměpisných souřadnic (délka, šířka, nadmořská výška). Mohou být využity, jako vrstva na pozadí při editaci map a je užitečná pro přidávání prvků do map, podobně jako satelitní snímky.  

#### Nastavení OpenStreetMap

![osm0][]

**Povolit automatické odesílání** povolí automatické odesílání souboru zaznamenané trasy.  
**Autorizovat aplikaci** slouží k udělení práv k nahrávání GPS tras do OSM pomocí vašeho OSM účtu.  
**Viditelnost**, **Popis**, **Štítky** nejsou aktivní, dokud nepovolíte aplikaci nahrávání GPS tras. Tato nastavení se používají pro GPS trasy, které budete nahrávat do OpenStreetMap databáze.  
Když kliknete na *Autorizovat aplikaci*, budete přesměrování do internetového prohlížeče na stránku OpenStreetMap. Pokud nejste přihlášeni, budete k tomu vyzváni.  

![osm2][]

Po přihlášení se vám zobrazí stránka podobná té níže, sloužící k ověření požadavku aplikace a udělení práva k *nahrávání GPS tras*. Klikněte na *Save changes* a tím aplikaci autorizujete.  

![osm3][]

Zpátky do aplikace GPSLogger, obrazovka se mírně změnila, přibylo několik dalších možností.

![osm1][]

Kliknutím na **Zrušit autorizaci** odeberete práva k nahrávání GPS tras na OSM server.  

Položka *viditelnost* obsahuje několik nastavení pro GPS trasy. *Private* trasy jsou sdílené jako anonymní, s neseřazenými body. *Public* trasy se zobrazují v seznamu tras, jako anonymní, neseřazené body. *Trackable* trasy jsou anonymní, s časovými značkami pro seřazené body. *Identifiable* trasy se objeví v seznamu tras a mohou být spojeny s vašim uživatelským jménem a časovou značkou pro seřazené body.  

Doporučené nastavení pro nahrávané GPS trasy je *identifiable*. Data a metadata jsou tak užitečnější pro ostatní mapery. Pokud máte obavy o bezpečnost a osobní údaje, vyberte si vhodnější nastavení, nebo trasy vůbec nenahrávejte.  

Text v *popis* pomáhá ostatním pochopit, jak byla trasa zaznamenána. Trasa zaznamenaná při chůzy bude odlišná od trasy nahrané dronem.  

*Štítek* je krátké slovo, které můžete použít ke spojení trasy s nějakým projektem, místem, nebo událostí.  


Sběr dat
---------------

### Automatizovaný sběr a nahrávání GPS tras

Po správném nastavení může aplikace běžet na pozadí a automaticky zaznamenávat trasy a nahrávat je jednou za den na jakoukoliv z přednastavených služeb. To umožňuje automatický sběr tras z každodenních cest a vytvoření soustavy cest a času cestování pro pozdější mapování nebo analýzu. Toto nastavení způsobí mírné navýšení spotřeby baterie. Je potřeba s tím trochu experimentovat a vybalancovat spotřebu baterie a přesnost GPS tras.  

Příklad nastavení automatického sběru a denní nahrávání na OpenStreetMapy může vypadat následovně:  

#### Obecné možnosti  

* **Spustit při startu** - Zapnuto  

#### Podrobnosti záznamu  

* **Zapisovat do GPX** - Zapnuto  
* **Vytvoření nového souboru** - Jednou za den  

#### Výkon  

* **Interval protokolování** - 5  
* **Ponechat GPS zapnutou mezi odečty polohy** - Zapnuto (Pokud ponecháte vypnuto,  vzniknou "skoky" v GPS trasách, pokaždé když se zařízení snaží získat příjem z GPS satelitů.)  
* **Nezaznamenávat pokud se nehýbu** - Zapnuto  

#### Automaticky odeslat, email a nahrávání  

* **Povolit automatické odesílání** - Zapnuto  
* **Jak často** - Pokud chcete jednou za den, zadejte 1440 minut. Toto nastavení může být mírně problematické, pokud nemáte přístup k datovému připojení nebo wifi, když má proběhnout odeslání. Odpočet začne buď od spustění zařízení nebo od zmáčknutí tlačítka "Spustit záznam", takže pokud ho zapnete ráno, odeslání proběhne ve stejný čas příští ráno.  
* **OpenStreetMap** - Povolte automatické odesílání a dále nastavte, co potřebujete, hlavně se zaměřte na nastavení viditelnosti, pokud máte obavy ohledně ochrany osobních údajů v GPS trasách.  


### Manuální záznam tras

Pro spuštění sběru záznamů (v jednoduchém zobrazení), jednoduše klikněte na modré tlačítko. Rotující kolečko se zobrazí v pravém horním rohu obrazovky, indikující pokus o připojení k satelitům. Zelené kolečko znamená spuštění záznamu.  

Jakmile chcete zastavit záznam dat, klikněte na zelené tlačítko *Ukončit záznam*.  

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