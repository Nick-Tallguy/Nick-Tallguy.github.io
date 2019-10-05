---
layout: doc
title: Nastavení PostgreSQL
permalink: /cs/osm-data/postgresql/
lang: cs
category: osm-data
---

PostgreSQL & PostGIS
====================

> Zkontrolováno 2016-09-10

V této kapitole si představíme PostgreSQL ve Windows, vytvoříme si databázi, ve které si můžete uložit geografická data. V této kapitole budeme používat open source GIS software QGIS, takže bylo by dobré, kdybyste se s ním už dříve seznámili. Taktéž si ukážeme, jak importovat OpenStreetMap data do PostgreSQL databáze.  

Instalace PostgreSQL a PostGIS
----------------------------------

V této sekci si nainstalujeme PostgreSQL a poté si přidáme PostGIS prostorové rozšíření. Je to velmi jednoduché díky instalatéru na jedno kliknutí. V prohlížeči si najděte stránku PostgreSQL a přejděte na stránku se souborem ke stažení <http://www.postgresql.org/download/>  

![postgresql website][]

Zde můžete nalézt instrukce k instalaci pro různé operační systémy. Klikněte na odkaz “**Windows**”.  
Tato stránka vysvětluje, co instalátor provede. Nainstalují se tři různé komponenty:  

* **PostgreSQL server**:  Software databáze, hlavní komponent  
* **pgAdmin III**: Grafické rozhraní pro správu vaší databáze  
* **StackBuilder**: Nástroj pro přidávání dalších aplikací; Použijeme ho k přidání PostGIS rozšíření  

Klikněte na **Download**.  

![postgresql download][]

Zobrazí se vám několik různých variant instalátorů, pro různé verze softwaru PostgreSQL. Stáhněte si nejnovější verzi. V době psaní článku je to verze 9.3.1. Klikněte na tlačítko s nápisem **Win x86-32**. Je to instalátor pro 32-bitovou verzi Windows.  

![postgresql version][]

Po stažení spusťte instalátor.  

![install 1][]

Pomocí “**Next**” se proklikejte instaličním průvodcem. Přednastavené možnosti jsou vyhovující. Bude potřeba poskytnout heslo pro prvního uživatele databáze (uživatelské jméno je postgres). Tento uživatel má superuser práva, což znamená, že může dělat všechno, tak nezapomeňte heslo, které zadáte.  

> Pomocí Postgresql můžete vytvořit tolik databází kolik chcete. Můžete mít databázi pro vaše geografická data a zvlášť databázi pro další projekty, na kterých pracujete. A možná budete chtít, aby každý člověk měl jiné práva k databázím. Pro tento případ používá každá vámi vytvořená databáze koncept **uživatelů** a **rolí**. Každá databáze musí být vlastněna nějakým uživatelem, který obvykle potřebuje heslo k editaci databáze. Dalším uživatelům může být uděleno právo k přístupu do databáze a přiřazena určitá role. Například potřebujete uživatele, který může pouze číst informace z databáze, ale nemůže je změnit. Nebo jiný uživatel může data přidávat, ale nemůže je mazat. Pomocí uživatelů a jejich rolí je tohle možné udělat. Prozatím si s tím nebudeme zatěžovat hlavu, ale pamatujte si, že vaše databáze je vlastněna **uživatelem** a pro přístup do databáze budete potřebovat uživatelské jméno a heslo. První uživatel, kterého vytvoříme (pojmenovaný postgres) je tzv. **superuser** a má veškerá práva k databázi.  

Jakmile se proklikáte průvodcem instalace a přijmete přednastavenou konfiguraci, průvodce za vás vše nainstaluje. Může to trvat pár minut.  

Jakmile je vše nainstalováno, průvodce se vás zeptá, zda chcete spustit StackBuilder, což je nástroj pomocí kterého je možné nainstalovat PostGIS. Ujistěte se, že políčko je zaškrtnuto než kliknete na “**Finish**.”  

![install 2][]

Nyní máme úspěšně nainstalován PostgreSQL a potřebujeme přidat rozšíření PostGIS. Jakmile se otevře průvodce StackBuilder, vyberte vaši instalaci PostgreSQL z rozbalovací nabídky a klikněte na **Next**. Okno vypadá nějak takhle:  

![install 3][]

Rozbalte si záložku “Spatial Extensions” a zaškrtněte políčko u PostGIS. V době psaní tohoto článku ma PostGIS verzi 2.1.  

![install 4][]

Klikněte na “Next”, rozšíření se stáhne a nainstaluje. Jakmile budete dotázáni klikněte na “**I Agree**”, čímž přijmete pravidla a podmínky.  

Instalátor PostGIS se zeptá na několik otázek, ale přednastavené odpovědi jsou vpořádku. Tentokrát si nechte automaticky vytvořit první databázi, ale v další části si ji vytvoříme sami. Aby se mohla spustit instalace PostGIS, je potřeba zadat heslo pro postgres, které jste si vytvořili při instalaci PostgreSQL.  

![install 5][]

Při dotazu na registraci proměnné prostředí **GDAL_DATA**, klikněte na "**Yes**."  

![install 6][]

Po dokončení instalace, klikněte na “**Close**” a poté “**Finish**.”  

Vytvoření databáze
--------------------

Now that we have installed all of the necessary software, we will create a database. We will use pgAdmin III, which is a graphical database client that is useful for querying and modifying
databases.  

![pgadmin3][]

PgAdmin III is the official client for PostgreSQL and lets you use the SQL language to manipulate your data tables.  It is also possible to create and manipulate databases from the command-line, but for now, pgAdmin III is an easy way to get started.  

Open pgAdmin III.  It should be in the Start Menu under All Programs -> PostgreSQL 9.3 > pgAdmin III.  

![pgadmin3 start][]

In the panel on the left under Servers, right-click where it says PostgreSQL and click “**Connect**.”  

![postgresql connect][]

Enter the postgres user password that you created when you installed the software. Remember that the username and password are required so that you can create and access a database.  

![enter password][]

Right-click on **Databases** and select **New Database**...  

![new database][]

You need to enter a few pieces of information to create the new database: name and owner.  In the Properties tab, give the new database a name.  In this example, we name our database gisdb.  We should also give our database an owner.  Since we only have one user right now, let’s give our database the owner postgres.  (Note: for security reasons it is usually a good idea to create users without superuser permission, but for now we won’t worry about this.)  

![new database form][]

<!-- Under the Definition tab, keep the defaults, but next to Template select template_postgis.  This will create our database with the proper spatial columns. -->

Click **OK** to create the database.  You will now see your database listed under “**Databases**.” We need to run a command now to enable the database with PostGIS extensions. Click on ![sql button][]{: height="24px"} at the top of PgAdmin III.  



In the query window, type:  

**CREATE EXTENSION postgis;**  

Then click the "**Execute query**" button.  

![postgis command][]

Load Sample Data (optional)
---------------------------

If you are comfortable so far and are familiar with QGIS, follow along as we load some data into our new database. To do this, we will use a utility that converts shapefiles and loads them into the database.  

Make sure that your new database is selected in the panel on the left and go to **Plugins -> PostGIS Shapefile and DBF loader 2.1**.

![shapefile loader][]

-	Click “**Add File**” and find a shapefile on your filesystem.
-	If you don't have any shapefiles, you can download a sample [here](/files/buildings_sample.zip).
-	Once you have selected a file, click “**Import**.”  If everything goes smoothly, the output will read “**Shapefile import completed**.”

![add shapefile][]

Now let's load the data from our database into the QGIS application. If you don't have QGIS you can download it on the [QGIS website](http://www.qgis.org/site/forusers/download.html).  

-	Open QGIS and click the ![qgis add postgis button][]{: height="24px"} button.  
-	Under “Connections” at the top, click “**New**.”  
-	Give the new connection a name.  Under database type **gisdb** (or whatever you named your database). Enter the username postgres and your password below.  

![connection settings][]

-	Click **OK** to save the connection settings.  Then click “Connect” to connect to your PostgreSQL server.  You may need to enter your username and password again.  
-	If everything is successful, you will see the shapefile layer  (or multiple layers with different features types) that you loaded into the database available here.  Select a layer and click “**Add**” to add it to your map.  

![your data layer][]

When you add the layer you will need to select a coordinate system to display the data in.  You will most likely want to select WGS 84, which is the coordinate system OpenStreetMap uses.  

> The layer behaves the same as if you had loaded a shapefile directly into QGIS.  The only difference is that if you edit the layer, the changes will be saved in your database.  

Shrnutí
-------

Now that you have seen how to set up PostgreSQL and PostGIS, as well as how to create a new database, you're ready to try the utilities which allow us to import raw OSM data into a database. We'll take a look at this in the [next chapter](/en/osm-data/osm2pgsql).  



[postgresql website]: /images/osm-data/postgresql-website.png
[postgresql download]: /images/osm-data/postgresql-download.png
[postgresql version]: /images/osm-data/postgresql-version.png
[install 1]: /images/osm-data/postgresql-install-1.png
[install 2]: /images/osm-data/postgresql-install-2.png
[install 3]: /images/osm-data/postgresql-install-3.png
[install 4]: /images/osm-data/postgresql-install-4.png
[install 5]: /images/osm-data/postgresql-install-5.png
[install 6]: /images/osm-data/postgresql-install-6.png
[pgadmin3]: /images/osm-data/pgadmin3.png
[pgadmin3 start]: /images/osm-data/pgadmin3-start.png
[postgresql connect]: /images/osm-data/postgresql-connect.png
[enter password]: /images/osm-data/enter-password.png
[new database]: /images/osm-data/new-database.png
[new database form]: /images/osm-data/new-database-form.png
[sql button]: /images/osm-data/sql-button.png
[postgis command]: /images/osm-data/postgis-command.png
[shapefile loader]: /images/osm-data/shapefile-loader.png
[add shapefile]: /images/osm-data/add-shapefile.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[your data layer]: /images/osm-data/your-data-layer.png







