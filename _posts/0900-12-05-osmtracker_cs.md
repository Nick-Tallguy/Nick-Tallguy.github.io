---
layout: doc
title: OSMTracker
permalink: /cs/mobile-mapping/osmtracker/
lang: cs
category: mobile-mapping
---

OSMTracker
==============

> Zkontrolováno 2016-02-08
  
**Tento článek se týká aplikace OSMTracker pro Android - existuje podobný produkt pro Windows Mobile.**  
OSMTracker umožňuje vytvoření gpx stopy z cesty se sbírkou „waypointu“ v průběhu cesty. Může být také zaznamenán hlasový záznam, fotografie a další poznámky a vše bude geolokováno.

Rychlý start
-----------

![OSMTracker_1][]  

1. Klepnutím na kříž vytvořte novou stopu.  
2. Obrazovka se změní a zobrazí tlačítka - počkejte, až již nebudou šedá, což znamená, že GPS je zafixovaná.  
3. Projeďte svou trasu, tiskněte příslušná tlačítka, když jste přesně na mapovaném objektu. Pomocí tlačítek můžete také vytvářet hlasové nahrávky, pořizovat fotografie a dělat si poznámky.  
4. Po dokončení stiskněte ikonu diskety pro uložení vašich tras a trasových bodů.  
5. Chcete-li převést stopu na soubor gpx, stiskněte a podržte prst na ní v seznamu a vyberte příslušnou možnost.  
6. Přeneste stopu, obrázky a nahrávky do počítače a načtěte si z toho aktualizaci OSM.  


Instalace OSMTracker
-------------------------

Nainstalujte OSMTracker z [Google play Store](https://play.google.com/store/apps/details?id=net.osmtracker&hl=cs).  
![OSMTracker Logo][]  
[Nejnovější balíček aplikace](https://drive.google.com/folderview?id=0BxxhTXmYjyeSSjg1MFhJWnJLams#list) lze v případě potřeby stáhnout mimo obchod Google Play.  


Konfigurace OSMTracker
------------------------

Spusťte OSMTracker a z menu vyberte položku **Settings**.  

-  **Voice record duration** (Délka záznamu hlasu) - vaše volba, ale my jsme si nastavili 30 sekund .  
-  **Enable sound** (Povolit zvuk) - doporučujeme zaškrtnout - ozve se pípnutí, které vás informuje o začátku nebo konci nahrávání hlasu.  
-  **Reset  authentication** (Resetovat autorizaci) - Toto tlačítko nebude aktivní, dokud nenahrajete .gpx soubor a nepovolíte OSMTracker nahrávat vaše trasy na váš účet OpenStreetMap.  
-  **GPS settings** (Nastavení GPS) - Metody, které bude zařízení používat k určení lokace. Doporučujeme nastavit **High accuracy** (Nejvyšší přesnost) a bude se tak využívat GPS, Wi-Fi a mobilní síť.  
-  **Check GPS at startup** (Zkontrolovat GPS při startu) - Když spustíte OSMTracker a máte vypnutou GPS, aplikace vás vyzve k jejímu zapnutí.
-  **Ignore GPS clock** (Ignorovat hodiny GPS) - Pokud je zaškrtnuto, bude se místo času uvedeného v signálu GPS používat vnitřní čas zařízení.  
-  **GPS logging interval** (Interval záznamu GPS) - Vyberte si interval mezi záznamem pozice - pro nejlepší přesnost vyberte 0 nebo 1, obě možnosti znamenají záznam každou vteřinu.  

> Frekvence záznamu ovlivňuje využití baterie, avšak při používání této aplikace je display převážně zapnutý, gps pracuje a možná budete i fotit a nahrávat - tohle všechno velmi spotřebovává energii z baterie a pro dlouhodobé používání se doporučuje sebou nosit powerbanku.  

-  **External storage (SD) directory** (Adresář v externí paměti - SD) - Přednastaven adresář /osmtracker  

> Nejnovější Android zařízení nepovolí ukládání dat na externí microSD nebo SD kartu. Ikdyž je označena jako 'externí paměť', budou se záznamy ukládat do **/storage/emulated/0/osmtracker.**  

-  **One directory per track** (Každá trasa do samostatného adresáře) - Doporučujeme, díky tomuto se všechny hlasové záznamy, fotografie, textové poznámky a gpx trasa uloží do společného adresáře, pojmenovaném podle data a času vytvoření gpx souboru.  
-  **Filename for named tracks** (Název pro pojmenované trasy) - Varianty názvu souboru, ze kterých si můžete vybrat podle svých preferencí.  
-  **Accuracy in GPX file** (Přesnost v GPX souboru) - Doporučeno - výsledkem je název výchozího bodu obsahující typ trasy s přibližnou přesností v metrech. Například *Footpath (4.0m)*. Tato informace může být později velmi užitečná při úpravách OSM a rozhodování, zda posunout existující prvek na novou trasu & výchozí bod.   
-  **Use HDOP approximation** (Použít HDOP přiblížení) - Umožňuje provést dodatečné výpočty pro zpřesnění pozice (Horizontal Dilution of Precision - horizontální ředění pozice).  
-  **Export Compass Heading** (Export hlavičky kompasu) - Definuje zda a jak exportovat data z kompasu do GPX souboru.  
-  **Default photo source** (Výchozí zdroj fotografií) - Většinou budete pořizovat fotografie pomocí fotoaparátu v této aplikaci, ale můžete použít i fotografie z telefonu.  
-  **Screen always on** (Stále zapnutý display) - Vyberte tuto možnost, pokud stále klikáte na tlačítka, fotíte, nebo pořizujete zvukové záznamy - jinak budete muset pokaždé zapnout display, ale spotřebujete tak méně energie.  
-  **Main screen graphic theme** (Grafické téma hlavní obrazovky) - Nastavení kontrastu a jasu obrazovky, pokud jsou špatně viditelná tlačítka.  
-  **Přednastavení tlačítek** Můžete si navrhnout a nainstalovat vlastní sadu tlačítek a zvolit je tak, aby byly zobrazeny pomocí této volby. Pro úplný popis této funkce, [více zde](/cs/mobile-mapping/osmtracker/#button-presets).   
-  **Background map** (Mapa na pozadí) - Pokud si zapnete tuto funkci, zmáčkněte a podržte prstu na nahrané trase, ta se zobrazí a aplikace stáhne OpenStreetMap data na pozadí.  

> Ke stažení mapy je vyžadováno připojení k internetu. Pokud si to nepřejete, nemusíte tuto funkci používat.  

-  **Map Tile Provider** (Poskytovatel mapového podkladu) - Pokud jste si zapnuli stažení mapových dat na pozadí, můžete si vybrat verzi map.  
-  **Orientation** (Orientace obrazovky) - Chcete, aby se obrazovka převracela, nebo zůstala v dané pozici?  

Seznam tras
--------------

![OSMTracker_2][]  
Jakmile si projdete aplikaci, proklikáte tlačítka, vyzkoušíte záznam zvuku a nafotíte pár fotografií, klikněte na ikonu diskety pro ukončení záznamu trasy. Teď zmáčkněte a podržte prst na trase v seznamu a objeví se tyto možnosti:  

-  **Resume Tracking** (Pokračovat v záznamu) - užitečné, když si uvědomíte, že vám kousek chybí!  
-  **Display** (Zobrazit) - zobrazí zaznamenanou trasu, pravděpodobně i s mapou na pozadí, v závislosti na datovém připojení a vámi zvolené variantě v **Background Map** (Mapa pozadí).  
-  **Export as GPX** (Exportovat GPX) - potřebné pro následnou editaci tras a výchozích bodů v jiných programech.  
-  **Upload to OpenStreetMap** (Nahrát do OpenStreetMap) - Pomocí této možnosti nahrajete vaši trasu do OpenStreetMap - budete potřebovat účet v OpenStreetMap. ([Jak jej získat, zjistíte zde](/cs/beginner/start-osm/)). Dále bude potřeba autorizovat tuto aplikaci k nahrávání tras na váš účet. Mrkněte se níže na [GPS Trasy - gpx soubory](/cs/mobile-mapping/osmtracker/#gps-traces--gpx-files), abyste zjistili, proč jsou tyto trasy tak důležité pro OpenStreetMap.  

> **Varování: zatím trasu nemažte v zařízení.** Nahráli jste pouze samotnou trasu, nikoliv výchozí body, fotografie atd. Udělat to můžete až po přesunu trasy do počítače pro další úpravy.  

-  **Delete** (Smazat) - Nepotřebuje vysvětlení.  


Tlačítkové předvolby
--------------

Pokud budete dělat nějaký průzkum a název výchozího bodu, který potřebujete použít, není v seznamu, můžete si vytvořit svůj vlastní seznam předvoleb, který využijete pro konkrétní výlet, nahrajete ho do telefonu a jakmile jej budete potřebovat, tak si ho načtete - v telefonu jich můžete mít několik a můžete mezi nimi přepínat, aniž byste museli zastavit záznam trasy. Jakmile je vámi vytvořený nápis ve formuláři osobní poznámky, nemusí odpovídat značkám používaným v OpenStreetMap, protože nebudou do OSM nahrány. Například si na předvolby můžete nastavit tyto nápisy;  

- 1 rodina,  
- 2 rodiny,  
- 3 rodiny,  
- 4 rodiny,  
- šéfův dům,  
- 20% poškození,  
- 40% poškození,  
- 60% poškození,  
- 80% poškození,  
- zničená,  
- nevhodné pro nákladní automobily,  
- potřebný pohon 4x4,  
- atd..  

Celý postup vytvoření tlačítkových předvoleb můžete nastudovat ve [wiki sekci OSMTracker](https://github.com/nguillaumin/osmtracker-android/wiki/Custom-buttons-layouts). Tady máte [ukázkový soubor ke stažení.](/files/R_of_Way.xml)  

![OSMTracker button presets][]  


Záznam hlasu, velikost fotografií a textových obrázků  
-----------------------------------------------  

![OSMTracker recorded file sizes][]  

Pokud nastane v pozdější fázi problém s přesunem, zkontrolujte si velikost souboru - jak vidíte na snímku obrazovky, fotografie zabírají mnohem více paměti oproti gpx souboru, či 10 sekundám záznamu hlasu.  


GPS Trasy - gpx soubory
----------------------  

![OSMTracker JOSM][]  

GPS traces in the form of gpx files are made up of a number of elements, principally a 'trace' and 'waypoints'. The screenshot above shows a folder contents created in OSMTracker which has been loaded into JOSM ready for editing, with satellite imagery loaded to assist. The square icon in the centre of the trace indicates there is a photograph, taken at this location, available - simply click on the square icon to display the photograph.  

If you are navigating and using a GPS to give you directions, you will notice at some point that it will 'recalculate'. This is normally because its internal GPS location does not correspond to where it expects the road or path to be - there is a margin of error, but it is easy for roads and paths to be created in slightly the wrong place, or for the road to be moved after the map data has been created.  
Dobrovolníci upravující OpenStreetMapy si mohou stáhnout všechny trasy nahrané pro danou oblast a použít je na:  

1. Trace roads & paths through areas that could not be seen with satellite imagery because of clouds, trees, shadows, buildings etc..  
2. Adjust the satellite imagery so that it aligns correctly - there can be a surprising variation with some imagery.  

Although a single gpx trace is very useful, it may not be particularly accurate and can be as much as 30 metres out of place. When there are several traces, the correct route of the path or road is now easy to see - for example see the screenshot below showing a download of gpx traces in a town, in which the main roads can be seen by the volume of traces.  

![OSMTracker_gpx][] 




[OSMTracker Logo]: /images/mobile-mapping/osmtracker_logo.png
[OSMTracker_1]: /images/mobile-mapping/OSMTracker_1.png
[OSMTracker_2]: /images/mobile-mapping/OSMTracker_2.png
[OSMTracker button presets]: /images/mobile-mapping/OSMTracker_presets.png
[OSMTracker recorded file sizes]: /images/mobile-mapping/OSMTracker_files.png
[OSMTracker_gpx]: /images/mobile-mapping/OSMTracker_gpx.png
[OSMTracker JOSM]: /images/mobile-mapping/OSMTracker_JOSM.png