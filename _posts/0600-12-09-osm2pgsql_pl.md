---
layout: doc
title: osm2pgsql
permalink: /pl/osm-data/osm2pgsql/
lang: pl
category: osm-data
---

osm2pgsql
==========

> Ten przewodnik może zostać pobrany jako [osm2pgsql_pl.odt](/files/osm2pgsql_pl.odt) lub [osm2pgsql_pl.pdf](/files/osm2pgsql_pl.pdf)  

W poprzednim rozdziale zobaczyliśmy, jak zainstalować Postgresql z PostGIS w Windowsie oraz jak ustawić bazę danych i wypełnić ją danymi z plików shape. W celu pozyskania danych OpenStreetMap do bazy danych możesz wziąć dane w plikach shape i użyć wczytywania tych plików, ale może to skutkować tym, że nie zdobędziesz wszystkich danych, które chciałeś. W tym rozdziale nauczymy się, jak używać **osm2pgsql**, programu wiersza polecenia do ładowania surowych danych OSM do bazdy danych PostGIS.  

Przejdziemy przez kroki do ustawienia osm2pgsql w Windowsie, chociaż mniej więcej tak samo powinno być na innym systemie operacyjnym, jeżeli ustawiłeś prawidłowo bazę (bazy) danych PostGIS.  

Pobierz osm2pgsql
-------------

Aby pobrać wersję osm2pgsql dla Windowsa, przejdź w przeglądarce do <http://wiki.openstreetmap.org/wiki/Osm2pgsql#Windows>.  

![windows binary][]

- Pobierz plik nazwany **osm2pgsql.zip**  
- Wypakuj plik na swoim komputerze. Powinieneś przenieść rozpakowany folder do miejsca, z którego nie będziesz go już przenosić, ponieważ będziemy musieli dodać go do ścieżki systemowej.  

![unzip it][]

- W folderze osm2pgsql, który rozpakowałeś jest plik nazwany osm2pgsql.exe. To jest program, który uruchomimy, aby zaimportować dane, ale żeby Windows mógł go znaleźć, musimy dodać jego lokalizację do ścieżki systemowej. Kliknij na menu Start i wpisz "ścieżka systemu".  

![system path][]

- Zobaczysz opcję nazwaną "Edytuj zmienne środowiskowe systemu". Kliknij ją.  

![edit variables][]

- Kliknij przycisk nazwany "**Zmienne środowiskowe**".  

![env variables][]

- U dołu znajdź zmienną nazwaną "**Path**" i kliknij "**Edytuj...**"  

![find path][]

- Musisz dodać katalog, w którym jest osm2pgsql.exe do zmiennej Path.  

![edit path][]

- Dodaj średnik na końcu poprzedniego katalogu i wpisz pełną ścieżkę do folderu z osm2pgsql.exe.  Na przykład, jeśli folder **osm2pgsql** znajduje się bezpośrednio w katalogu **C:\\**, ścieżka będzie wyglądała następująco:  
	
**C:\osm2pgsql\Win32**  

- Kliknij OK kilka razy, aby zapisać nowe ustawienia.  
- **osm2pgsql** powinno teraz działać. Sprawdźmy to.  
- Otwórz Wiersz polecenia. Możesz to zrobić klikając menu Start i wpisując "**cmd**". Pojawi się Wiersz polecenia i możesz nacisnąć Enter lub kliknąć na nim, aby go uruchomić.  

![cmd][]

- W czarnym oknie poleceń, które się pojawi, wpisz:  

**osm2pgsql**

- Jeżeli wszystko działa prawidłowo, powinieneś otrzymać wiadomość podobną do tej:  

![osm2pgsql test][]

- Jeżeli nie widzisz takiego błędu, a pojawia się komunikat, że nie można znaleźć aplikacji **osm2pgsql**, to mogłeś źle uzupełnić zmienną Path.  

Pobieranie surowych danych OSM
---------------------
Before we can run **osm2pgsql** we need to have some raw OSM data to import into a database. If you don't already have a **.osm** file that you can use, try downloading a file from <https://mapzen.com/data/metro-extracts/>. This site hosts many OSM extracts for different cities.  Find a city to import and download the PBF file for it. PBF files are compressed versions of the normal **.osm** files. You can use any of the extract services listed in the chapter on [getting data](/en/osm-data/getting-data), if you'd like the raw data for another area.  

Get the Style File
------------------
**osm2pgsql** requires the use of a custom style file to define which tags are included in the database during import. You can download the default style file [here](/files/default.style).  

Importing the Data
-------------------
Open PgAdmin III and create a new database named **osm**, just as you did in the previous chapter. To import the data, we will run the **osm2pgsql** program via the command line. 

- Click on the Start Menu and type "cmd" and Enter to open the Command Prompt.  

![command prompt][]

Here we will run the application **osm2pgsql** with several options. We need at least to supply it with:  

- The location of the OSM Data File  
- The name of the database, and the database username  
- The style file which defines which OSM tags will be imported to the database  

We have placed our OSM file into the **C:\\** directory to make this easier.  

- Type the following command, replacing the location of the OSM file and style file with your own.

      osm2pgsql -c -d osm -U postgres -H localhost -S C:\default.style C:\bangkok.osm.pbf  

- Press Enter. If all goes well, the process should begin running. It may take a few minutes for all of the data to load into the database.  

![osm2pgsql output][]

- If your raw OSM file is large, you may need to add additional memory to the osm2pgsql import process. To do this, add the following to the command:  

      --cache 600

Testing It
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


Podsumowanie
-------

When you want to import OpenStreetMap data into your own database, **osm2pgsql** is a great tool. It can be extremely useful when you need to be able to get the most up-to-date OSM data and customize the attributes you want, or when working on more complex projects.  

Another import tool has been developed recently, called [imposm](http://imposm.org/), and offers some speed and other improvements over osm2pgsql, although as of this writing it lacks other key functions which are promised in imposom version 3.  

Więcej informacji o osm2pgsql znajdziesz w Wiki OSM - <http://wiki.openstreetmap.org/wiki/Osm2pgsql>.  


[windows binary]: /images/osm-data/windows-binary.png
[unzip it]: /images/osm-data/unzip-it.png
[system path]: /images/osm-data/system-path.png
[edit variables]: /images/osm-data/edit-environment-variables.png
[env variables]: /images/osm-data/environment-variables.png
[find path]: /images/osm-data/find-path.png
[edit path]: /images/osm-data/edit-path-variable.png
[cmd]: /images/osm-data/cmd.png
[osm2pgsql test]: /images/osm-data/osm2pgsql-test.png
[command prompt]: /images/osm-data/command-prompt.png
[osm2pgsql output]: /images/osm-data/osm2pgsql-output.png
[qgis add postgis button]: /images/osm-data/add-postgis-button.png
[connection settings]: /images/osm-data/connection-settings.png
[postgis layers]: /images/osm-data/postgis-layers.png
[osm in qgis]: /images/osm-data/osm-in-qgis.png
