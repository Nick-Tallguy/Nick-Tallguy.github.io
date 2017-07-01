---
layout: doc
title: PostgreSQL aufsetzen
permalink: /de/osm-data/postgresql/
lang: de
category: osm-data
---

PostgreSQL & PostGIS
====================

> Diese Anleitungen kann heruntergeladen werden unter [PostgreSQL_en.odt](/files/PostgreSQL_en.odt) oder [PostgreSQL_en.pdf](/files/PostgreSQL_en.pdf)  
> Reviewed 2016-09-10

In diesem Kapitel werden wir sehen wie man PostgreSQL unter Windows aufsetzt und eine Datenbank erstellt in der man geografische Daten speichern kann. Wir verwenden Open Source GIS Software QGIS in diesem Kapitel, es ist als hilfreich, wenn man bereits damit umgehen kann. Im folgenden Kapitel werden wir uns anschauen, wie man OpenStreetMap Daten in eine PostgreSQL Datenbank importiert.  

PostgreSQL and PostGIS installieren
----------------------------------

In diesem Abschnitt werden wir PostgreSQL installieren und die PostGIS Spatial Erweiterungen hinzufügen. Dies geschieht relativ leicht mit einem One-Click Installationsprogramm. Man öffnet die PostgreSQL Webseite mit dem Browser und die Download Seite <http://www.postgresql.org/download/>  

![postgresql website][]

Her findet man Installationsanleitungen für verschiedene Betriebssysteme. Man klickt auf den "**Windows**" Link.  
Die Seite erklärt, was das One-Click Installationsprogramm macht. Es installiert drei unterschiedliche Komponenten:  

* **PostgreSQL Server**: Die Datenbank Software, die Kernkomponente  
* **pgAdmin III**:  Das grafische Interface zur Datenbankverwaltung  
* **StackBuilder**: Ein Werkzeug zum Hinzufügen weiterer Anwendungen; wir verwenden es um die PostGIS Erweiterungen hinzuzufügen  

Man klickt auf **Download**.  

![postgresql download][]

Man sieht unterschiedliche Installationsoptionen für unterschiedliche Versionen der PostgreSQL Software. Man lädt die aktuellste Version herunter. Aktuell ist es die Version 9.3.1. Man klickt auf den Button **Win x86-32**. Das ist das Installationsprogramm der 32-Bit Version für Windows.  

![postgresql version][]

Wen das herunterladen beendet ist, startet man das One-Click Installationsprogramm.  

![install 1][]

Man klickt "**Weiter**" um durch den Installationsassistenten zu kommen. Die Standardoptionen sollten in Ordnung sein. Man muss für den ersten Datenbankbenutzer (der Benutzer heißt postgres) ein Passwort bereit halten. Der Benutzer hat superuser Rechte was bedeutet, dass er alles was er tun möchte tun kann, also nicht das verwendete Passwort vergessen!  

> Man kann mit PostgreSQL beliebig viele Datenbanken anlegen. Man möchte gegebenenfalls eine Datenbank für die geografischen Daten und separate Datenbanken für andere Projekte an denen man arbeitet. Und man möchte gegebenenfalls unterschiedliche Benutzer mit unterschiedlichem Zugang zu diesen Datenbanken. Zu diesem Zwecke nutzt jede erstellte Datenbank das **Benutzer** und **Rollen** Konzept. Eine Datenbank gehört immer einem Benutzer und dieser Benutzer benötigt ein Passwort um Änderungen an der Datenbank vornehmen zu können. Zusätzlichen Benutzern können Rechte und bestimmte Rollen für den Zugriff auf eine Datenbank gegeben werden. Man möchte zum Beispiel einen Datenbankbenutzer, der nur Informationen aus der Datenbank lesen kann, aber nicht ändern. Oder einen Benutzer der Daten hinzufügen, aber nicht löschen kann. Das ist mit Benutzern und Rollen möglich. Wir werden uns nun nicht weiter damit beschäftigen, aber behalten im Kopf, dass die Datenbank einem **Benutzer** gehört und dass man für den Zugriff auf die Datenbank den Benutzernamen und Passwort braucht. Der erste angelegte Benutzer (genannt postgres) ist ein **superuser**, was bedeutet dass diese die Rechte dazu haben, alles mit den Datenbanken anzustellen.  

Nachdem man sich durch den Assistenten geklickt und die Standardkonfigurationsoptionen akzeptiert hat, installiert der Assistent alles für einen. Dies kann einige Minuten dauern.  

Wenn die Installation komplett ist, fragt der Assistent ob man StackBuilder starten möchte, das Werkzeug welches uns erlaubt PostGIS zu installieren. Man versichert sich, dass das Kontrollkästchen angehackt ist ehe man auf "**Beenden**" klickt.  

![install 2][]

Wir haben nun erfolgreich PostgreSQL installiert und müssen noch die PostGIS Erweiterungen hinzufügen. Wenn der StackBuilder Assistent sich öffnet, wählt man die PostgreSQL Installation aus dem Auswahlmenü und klickt **Weiter**. Es wird so ähnlich aussehen:  

![install 3][]

Man öffnet das "Spatial Erweiterungen" Tab und klickt die Box neben PostGis an. Die beim Schreiben dieses Textes aktuelle Version von PostGIS ist 2.1.  

![install 4][]

Zum Herunterladen und Installieren klickt man **Weiter**. Man klickt "**Ich stimme zu**", wenn nach dem Akzeptieren der Geschäftsbedingungen gefragt wird.  

Das PostGIS Installationsprogramm wird mehrere Fragen stellen, die Standardoptionen sind aber meistens in Ordnung. Man kann die erste Datenbank automatisch erstellen lassen, aber wir werden als nächstes lernen wie man dies selbst macht. Um die PostGIS Installation zu starten, muss man das postgres Passwort angeben, das man erstellt hat als man PostgreSQL installiert hat.  

![install 5][]

Wenn man gefragt wird, ob die **GDAL_DATA** Umgebungsvariable registriert werden soll, klickt man "**Ja**".  

![install 6][]

Wenn die Installation komplett ist, klickt man "**Schließen" und dann "**Beenden**".  

Eine Datenbank erstellen
--------------------

Da wir nun alle notwendige Software installiert haben, können wir eine Datenbank erstellen. Wir verwenden pgAdmin III, ein grafischer Datenbank Klient zur Abfrage und Änderung von
Datenbanken.  

![pgadmin3][]

PgAdmin III ist der offizielle Klient für PostgreSQL und erlaubt die Verwendung der SQL Sprache um Datentabellen zu bearbeiten. Man kann auch Datenbanken von der Kommandozeile aus erstellen und bearbeiten, aber im Moment ist pgAdmin III ein leichter Einstieg.  

Man öffnet pgAdmin III. Man findet es im Startmenü unter Alle Programme -> PostgreSQL 9.3 -> pgAdmin III.  

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

Summary
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







