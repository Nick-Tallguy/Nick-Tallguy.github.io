---
layout: doc
title: Opendata Plugin - data z tabulky
permalink: /cs/josm/opendata-plugin/
lang: cs
category: josm
---

Opendata Plugin - načtení dat z tabulky
============


- TOC
{:toc}

V tomto návodu se naučíte přidat data do OpenStreetMap, které jsou uloženy ve formě tabulky, vytvořené při terénním průzkumu pomocí nástroje ODK collect nebo Kobo collect.

**Vemte prosím na vědomí - pokud data, které plánujete přidat do OpenStreetMap pomocí 'importu' pak by nebylo od věci, projít si [stránku Průvodce importem v OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Import/Guidelines). Pokud si nejste jisti, radši si ji pročtěte!**


Instalace Opendata pluginu
--------------------------

Pokud plugin ještě nemáte, následujte instrukce v [JOSM Plugins](/cs/josm/josm-plugins).  

![Opendata][]

Po instalaci otevřete Nastavení Opendata
 ![Opendata preferences][]   
pro přístup k více specifickým modulům.  

![Opendata modules][]

Tento průvodce používá základní funkce, bez dodatečných modulů.

Příprava tabulky  
-------------------------

Stránka <https://wiki.openstreetmap.org/wiki/JOSM/Plugins/OpenData> obsahuje více detailních informací o formátech, které lze využít. V našem příkladu předpokládáme, že tabulka byla stažena a předána nám ve formátu **.xlsx**, který nelze nahrát do opendata pluginu.

- Otevřete tabulku v opensource programu, jakým je třeba LibreOffice, který je dostupný pro mnoho operačních systémů <http://www.libreoffice.org/>, 
- a uložte ji do opensource formatu. Naše tabulka **shops.xlsx** se změní na **shops.ods**.

Ikdyž už můžete nahrát tabulku do JOSM, je lepší předtím provést další změny, aby byl proces snadnější.

### zeměpisná šířka a délka

Plugin Opendata je velmi dobrý při extrahování zeměpisné šířky a délky z tabulek, ale pokud máte pochybnosti, je lepší změnit názvy sloupců na jednodušší formát;

![latitude longitude][]

se změní na;

![latitude longitude corrected][]

### Klíče a hodnoty

#### Tag name

Our aim now is to amend the spreadsheet so that the information is in the format expected by OpenStreetMap. The column headings will be the **Key** values, and the data withing the spreadsheet becomes the **Value** element. For our simple spreadsheet, amend the first column heading from **Name_of_the_shop** to **name**. Using the format key=value, our first spreadsheet line now becomes;  
**name=Tony's Supermarket**

If your spreadsheet has more than one name, such as a **local name** or **official name**, please consult the wiki page at <https://wiki.openstreetmap.org/wiki/Names> which lists many possible alternatives so that your updates to OpenStreetMap can contain all of the names that are likely to be used or searched for.  

#### Columns without a heading

If you remove the heading for a column, but keep the data below it, then the data is effectively hidden from JOSM.  

![opendata 1][]

#### Columns with data from different keys 

![opendata mixed][]

The person designing the survey, and the person carrying out the survey will often not be aware of the tags and values that have evolved in OpenStreetMap. The **shop** column in my spreadsheet actually contains data from two different tags, and the spreadsheet will need amending. The column heading **Type of shop** can be changed to **shop**, for the following data;  
  shop=supermarket  
  shop=convenience  
  shop=hairdresser  

but **restaurant** and **fast_food** are from the **amenity** key.

A new column should be inserted with the heading **amenity**, and the data moved, so that our spreadsheet now looks like this;  

![opendata shop amenity][]

#### sub tags

The column heading **Does_the_shop_have_toilet_faci** has been abbreviated during the survey process, and originally read **Does the shop have toilet facilities?**.  

Although there is a separate tag for toilets, which is usually added to a node within a building, this actually refers to toilets which are accessible to the public. If we carried out our own survey, we know exactly what was intended with the question and answer, but if this is information passed on to us, it will probably be necessary to query what was intended. It is also extremely useful to be able to load the survey questions into a phone and carry out a 'mock' survey so that the layout of the questions can be seen. Careful reading of the wiki page at <https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets>, and study of the original survey is needed before amending the spreadsheet. In particular, the wiki entry contains the information - 

- *Please do not use toilet=yes (singular). In general please do not map toilets that are inaccessible to the public. Many buildings have toilets inside for workers or owners, but mapping these could create needless conflict or unrealistic expectations. Use toilets=no for places you might expect to find a usable toilet (e.g. a railway station or trailhead) where no public toilets are made available.*  

Following the advice from the wiki as best as I can, my amended spreadsheet for the information about toilets now reads;  

![opendata toilets][]


I have blanked the heading on a number of columns, so that the data will not be visible when I am carrying out my editing in JOSM.  

Loading the spreadsheet into JOSM
---------------------------------

Click on ![josm open][], navigate to where your spreadsheet is saved, and open it within JOSM.  

![opendata pop up][]  

A pop-up will possibly appear asking you to confirm the 'projection method' used when collecting the data. The Opendata plugin will attempt to calculate the 'projection method' used and will present this as the most likely option. Unless this has been altered in the settings by the surveyor, accepting the suggested projection but then checking when editing that the points created are appearing in likely locations is a sensible choice.  

![opendata spreadsheet loaded][]

Congratulations! You've done all the hard work and you're nearly ready to update OpenStreetMap with your nice new survey data. 

Using the ToDo plugin
----------------------

Within JOSM select all of the items added by your spreadsheet, either by;  

- scroll out until all are visible, then drag your mouse from top left to bottom right while holding the left mouse button down, or  
- use **Ctrl+f** to carry out a search - I searched on **name** as this appears in all 5 of my surveys.  

make sure you have selected all of your surveys - there are five surveys in my spreadsheet and I need to have 5 objects selected.  

![5 selected][]

On the ToDo plugin panel, click on **Add**.  

![opendata todo add][]

and the list of items to add should appear in the panel.  

![opendata todo loaded][]

Load OpenStreetMap data as a separate layer
-------------------------------------------

Double click on the top item in your ToDo list, which will centre it in your editing panel, and click on the download ![download][] icon.

When the download dialog window appears, ensure you place a tick in ![download new layer][] (bottom left on the next screenshot) so that your OSM data does not download into your spreadsheet data.

![download dialog][]


Compare the data between the layers
------------------------------------

Ensure you carefully check the data held in your spreadsheet against the existing data already in OpenStreetMap. There are ways of copying tags, or parts of tags (Look through the **Tools** and **More Tools** menu's of JOSM, or read the earlier chapters within LearnOSM) between the layers. In many cases you will be merging new data with existing data. Carefully check the data, if necessary checking the history and source for the different features - it's always possible the data within OpenStreetMap is more recent or more accurate than your spreadsheet data.  

When you have updated the information from one line of the spreadsheet, use the **Mark** button of the ToDo plugin to move onto the next item - you may have to download more OSM data if the next item is outside the area already downloaded.  


[Opendata]: /images/josm/opendata-plugin.png
[Opendata preferences]: /images/josm/opendata-preferences.png
[Opendata modules]: /images/josm/opendata-modules.png
[latitude longitude]: /images/josm/opendata-latitude-longitude.png
[latitude longitude corrected]: /images/josm/opendata-latitude-longitude-corrected.png
[opendata 1]: /images/josm/opendata-1.png
[opendata mixed]: /images/josm/opendata-mixed.png
[opendata shop amenity]: /images/josm/opendata-shop-amenity.png
[opendata toilets]: /images/josm/opendata-toilets.png
[josm open]: /images/josm/josm_open-file.png
[opendata pop up]: /images/josm/opendata-wgs84-popup.png
[opendata spreadsheet loaded]: /images/josm/opendata-spreadsheet-loaded.png
[5 selected]: /images/josm/opendata-5-selected.png
[opendata todo add]: /images/josm/opendata-todo-add.png
[opendata todo loaded]: /images/josm/opendata-todo-loaded.png
[download]: /images/josm/josm-download-button.png
[download dialog]: /images/josm/josm_download-dialog.png
[download new layer]: /images/josm/download-as-new-layer.png

