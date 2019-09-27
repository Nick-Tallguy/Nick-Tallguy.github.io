---
layout: doc
title: osm2pgsql
permalink: /cs/osm-data/osm2pgsql/
lang: cs
category: osm-data
---

osm2pgsql
==========


V předchozí kapitole jsme si představili Postgresql s PostGIS ve Windows, jak se nastavuje databáze a jak ji naplnit shapefile daty. Chcete-li načíst OpenStreetMap data do databáze, můžete je stáhnout ve formátu shapefile a použít shapefile loader, ale tenhle způsob nemusí fungovat na všechna data, které potřebujete. V této kapitole se naučíme, jak pomocí **osm2pgsql**, programu běžícím v příkazové řádce, načíst zdrojová OSM data do PostGIS databáze.  

Jednotlivé kroky nastavení osm2pgsql si předvedeme ve Windows, ale postup bude zřejmě velmi podobný i v jiných operačních systémech, za předpokladu, že jste PostGIS nastavili správným způsobem.  

Jak získat osm2pgsql
-------------

Odkaz na Windows verzi osm2pgsql naleznete na adrese <http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows>.  

![windows binary][]

- Stáhněte si soubor s názvem **osm2pgsql.zip**  
- Rozbalte soubor ve svém počítači. Umístěte rozbalenou složku na místo, odkud ji už nebude třeba přesouvat, protože bude potřeba přidat její umístění mezi systémové proměnné.  

![unzip it][]

- v adresáři osm2pgsql, který jste právě rozbalili je soubor osm2pgsql.exe. Pomocí tohoto programu budeme importovat data, ale aby jej Windows našly, bude potřeba přidat jeho lokaci do systémové složky. Do vyhledávacího políčka u nabídky Start napište "proměnné prostředí".  

![system path][]

- Měla by se vám zobrazit nastavení pojmenované "Upravit proměnné prostředí systému". Klikněte na něj.  

![edit variables][]

- Klikněte na tlačítko "Proměnné prostředí".  

![env variables][]

- Najděte proměnnou "Path" a klikněte na "Upravit..."  

![find path][]

- Je potřeba do pro Path přidat adresář, ve kterém je umístěn osm2pgsql.exe.  

![edit path][]

- /Windows 10/: Klikněte na tlačítko **Nový** a vložte celou cestu k adresáři s osm2pgsql.exe. (/Windows 7 a starší/: Přidejte středník na konec původního textu a pak vepište celou adresářovou cestu k osmosis.) Například, pokud jste uložili adresář **osm2pgsql** přímo na **C:\\**, potom cesta bude:  
	
**C:\osm2pgsql\Win32**  

- Klikněte na OK pro uložení nastavení.  
- **osm2pgsql** by mělo fungovat. Pojďme to zkontrolovat.  
- Otevřeme si Příkazovou řádku ve Windows. Klikněte na vyhledávací tlačítko u nabídky Start a napište "**cmd**". Objeví se aplikace Příkazová řádka, tak na ni klikněte, nebo zmáčkněte Enter.  

![cmd][]

- Jakmile se zobrazí černé okno, napište příkaz:  

**osm2pgsql**

- Pokud vše správně funguje, měla by se vám zobrazit podobá zpráva:  

![osm2pgsql test][]

- Pokud tomu tak není a oznamuje vám to, že nemůže najít aplikaci **osm2pgsql**, pak jste možná špatně zadali cestu k adresáři v proměnných prostředí.  

Stahování dat z OSM
---------------------
Dříve než spustíme **osm2pgsql** stáhneme si nějaká zdrojová OSM data k importu do databáze. Pokud ještě nemáte **.osm** soubor, který lze použít, stáhněte si soubor z <https://mapzen.com/data/metro-extracts/>. Na této stránce je umístěno několik OSM extraktů různých měst.  Vyberte si některé z měst a stáhněte si PBF soubor. PBF soubory jsou komprimované **.osm** soubory. K extrakci dat můžete využít některou ze služeb uvedených v seznamu v kapitole [stahování dat z OSM](/cs/osm-data/getting-data), pokud chcete zdrojová data pro jinou oblast.  

Stáhněte si soubor stylů
------------------
**osm2pgsql** vyžaduje vlastní soubor stylů, který definuje tagy použité v databázi během importu. Základní soubor stylů si můžete stáhnout [odsud](/files/default.style).  

Importujeme data
-------------------
Otevřete PgAdmin III a vytvořte novou databázi s názvem **osm**, stejně jako v předchozí kapitole. Data importujeme spuštěním programu **osm2pgsql** přes příkazovou stránku. 

- Do vyhledávacího pole u menu Start napište "cmd" a zmáčkněte Enter pro otevření příkazové řádky.  

![command prompt][]

Odsud spustíme aplikaci **osm2pgsql** s několika parametry. Je potřeba poskytnou minimálně následující:  

- Umístění souboru s OSM daty  
- Název databáze a přístupové jméno do databáze  
- Soubor stylů definující OSM tagy, které budou importovány do databáze  

Abychom to zjednodušili, umístili jsme OSM soubor do adresáře **C:\\** .  

- Zadejte následující příkaz, ale nezapomeňte uvést vaše umístění souboru OSM a souboru se styly.

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Zmáčkněte Enter. Pokud je vše správně nastaveno, proces by se měl spustit. Načtení všech dat do databáze může trvat několik minut.  

![osm2pgsql output][]

- Pokud je soubor s OSM daty velký, můžete přidat dodatečnou paměť importovacímu procesu osm2pgsql. To uděláte tak, že přidáte následující text za příkaz:  

      --cache 600

Testujeme
-----------

We can test that the import was successful and view the data in our database using QGIS.  

- Open QGIS and click on the "Add PostGIS Layers" button. ![qgis add postgis button][]{: height="24px"}

- Under “Connections” at the top, click “**New**.”  
- Give the new connection a name.  Under database type **osm** (the name of your database).  
- Enter the username postgres and your password below.  

![connection settings][]

- Click OK to save the connection settings.  Then click “Connect” to connect to your PostgreSQL server.  
- Click next to "public" to see all of the layers (tables) in your database. Notice that osm2pgsql creates a separate table for different object types - points, lines, and polygons. It also creates a roads table, which contains only major roads.  

![postgis layers][]

- Select one or more of the layers and click "Add." If asked, choose WGS84 as the CRS.  
- If everything is successful, you will see the layers you selected displayed in QGIS.  

![osm in qgis][]

> If you look at the attribute tables of the layers, you will see that the attributes are mapped to OSM tags. The specific tags that are imported are defined during the **osm2pgsql** import process. In order to add specific tags that are not included by default, you can edit the *style* file that osm2pgsql references to define the data schema.  


Shrnutí
-------

When you want to import OpenStreetMap data into your own database, **osm2pgsql** is a great tool. It can be extremely useful when you need to be able to get the most up-to-date OSM data and customize the attributes you want, or when working on more complex projects.  

Another import tool has been developed recently, called [imposm](http://imposm.org/), and offers some speed and other improvements over osm2pgsql, although as of this writing it lacks other key functions which are promised in imposom version 3.  

For more information on osm2pgsql, refer to the OSM Wiki - <http://wiki.openstreetmap.org/wiki/Osm2pgsql>.  


[windows binary]: /images/osm-data/windows-binary.png
[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path_cs.png
[edit variables]: /images/osm-data/edit-environment-variables_cs.png
[env variables]: /images/osm-data/environment-variables_cs.png
[find path]: /images/osm-data/find-path_cs.png
[edit path]: /images/osm-data/edit-path-variable_cs.png
[cmd]: /images/osm-data/cmd.png
[osm2pgsql test]: /images/osm-data/osm2pgsql-test.png
[command prompt]: /images/osm-data/command-prompt.png
[osm2pgsql output]: /images/osm-data/osm2pgsql-output.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[postgis layers]: /images/osm-data/postgis-layers.png
[osm in qgis]: /images/osm-data/osm-in-qgis.png
