---
layout: doc
title: Plugin per JOSM
permalink: /it/josm/josm-plugins/
lang: it
category: josm
---

Plugin per JOSM
============

> Questa guida può essere scaricata come [josm-plugins_it.odt](/files/josm-plugins_it.odt) oppure [josm-plugins_it.pdf](/files/josm-plugins_it.pdf)  
> Revisionato il 2015-07-14  

Diventando più esperto nelle tecniche di mappatura, potrebbe venirti la voglia di utilizzare funzioni aggiuntive di JOSM per migliorare le tue capacità di mappatore. JOSM ti permette di installare numerosi numerose estensioni (comunemente chiamate plugin), che aggiungono funzionalità extra al software.  

In questa sezione vedremo come installare plugins, e alcuni dei plugin più utili che sono disponibili.

Installare i plugins
-------------------
Quando vuoi installare (o rimuovere) un plugin, vai su **Modifica \> Preferenze** e clicca sulla scheda **Estensioni**.  

![Plugins][]

* Se non vedi una lista di plugin, clicca su **Scarica Lista**.  
* Per installare un plugin basta che lo selezioni cliccando nel piccolo riquadro al suo fianco, poi clicchi su OK tra i bottoni in fondo.  
* Infine, alcune versioni di JOSM ti possono chiedere il riavvio di JOSM stesso per installare nuovi plugins.

Alcuni dei nostri plugin preferiti sono:

1. **[buildings_tools](it/josm/josm-more-plugins/):** Se disegni molti edifici, questo renderà il processo più semplice e veloce  

2. **DirectUpload:** Se hai molte tracce GPS e le vuoi salvare nel database OSM, questo plugin facilita l'operazione.  

3. **editgpx:** Se vuoi caricare tracce GPS da un dispositivo Garmin, potresti aver bisogno di questo plugin. OSM non accetta tracce GPS che sono state salvate su una scheda di memoria esterna di un Garmin, ma questo plugin può correggere i file in modo da poter essere caricati.  

4. **fieldpapers:** Questo plugin ti consente di caricare in JOSM dei Field Paper scannerizzati.  

5. **imagery_offset_db:** Questo plugin consente di collaborare con altri mappatori che trovano le immagini satellitari di Bing leggermente disallineate. Questo argomento è trattato più dettagliatamente in un capitolo successivo.  

6. **mirrored_download:** Con questo plugin puoi scaricare un'area più grande di dati OSM per fare modifiche.  

7. **print:** Aggiunge una funzione di Stampa, nel caso vogliate fare delle veloci stampe di un'area, non avendo bisogno che siano di alta qualità.  

8. **[utilsplugin2](it/josm/josm-more-plugins/):** Aggiunge molti strumenti e menù a JOSM, per utenti esperti. E' trattato più in dettaglio in [next chapter](/it/josm/josm-more-plugins)  



<!-- il resto di questa sezione deve essere modificato, e/o spostato in altre sezioni,
    per ora è commentato


- [Mirrored Download]({{site.baseurl}}/it/beginner/josm-plugins/#mirrored-download) (consente di scaricare più dati OSM)
- [Direct Upload]({{site.baseurl}}/it/beginner/josm-plugins/#direct-upload) (consente di caricare tracce GPS)
- [Editgpx]({{site.baseurl}}/it/beginner/josm-plugins/#edit-gpx) (consente di modificare file GPX)
- [Print]({{site.baseurl}}/it/beginner/josm-plugins/#print)

Raccomandiamo anche di scaricare questi plugins, che sono discussi in altri
capitoli:

- FieldPapers
- Buildings\_tool
- Utilsplugin2

![Restart JOSM][]

Prova a selezionare "Riavvia JOSM" e nota il riavvio automatico del programma.

Mirrored Download
-----------------

![Mirrored Download][]

__Mirrored Download__ velocizza lo scarico dei
dati OSM per modificarli. Invece di prendere i dati dal
server centrale OSM, consente di prenderli da un "mirror", che è una replica
esatta dei dati, in una locazione più veloce da accedere.

Una volta installato il plugin (e avete riavviato JOSM), vedrete
una voce nuova nel menù File, "Scarica da mirror OSM..."

![Scarica da mirror OSM][]

Lo scarico dei dati è esattamente lo stesso processo che avete imparato prima, ma
può essere molto più veloce!

Caricamento Diretto
-------------

![Direct Upload][]

__DirectUpload__ carica tracce GPX direttamente su OSM
tramite JOSM (altre informazioni sono disponibili nella **Appendice**). Una volta
che il plugin è installato (e avete riavviato JOSM), vedrete
una nuova voce "Carica tracce" nel menù "Strumenti".

![Upload Traces Item][]

Quando cliccate sul pulsante "Carica tracce" comparirà questa finestra:

![Upload Traces Window][]

Scrivi le parole chiave (separate da virgola, senza spazi) relative alla tua
traccia GPS nel riquadro "Etichette (separate da virgola)". Per esesmpio,
"Nazione,regione,città,quartiere,nome strada". Indicate poi una
descrizione delle vostre etichette. Una lista a scorrimento vi consentirà di riutilizzare
precedenti etichette e descriioni. Infine, scegliete il tipo di visibilità che 
volete dare alla vostra traccia. Ci sono quattro livelli da privato a 
identificabile (tutte spiegate pià avanti in [Appendix]{{site.baseurl}}/learnosm/it/).

Clicca su Caricat Traccia. Se non siete connessi al vostro account OSM, 
fatelo ora.

Una volta caricato con successo, l'area Testo visualizzerà l'esito "OK"
ed il pulsante "Carica Traccia" non sarà selezionabile. Ulteriori informazioni
relative a questo plugin ed ai caricamenti GPS sono disponibili in  [Appendix]({{site.baseurl}}/learnosm/en/).

Modifica gpx
--------

![Edit Gpx][]

**EditGpx** consente di aggiustare tracce registrate GPX
prima di caricarle in OSM. Sovente le tracce hanno delle parti che
volete rimuovere. Quindi questo plugin cancella dei punti delle tracce in 
modo veloce ed elimina i marcatori di data-ora di una traccia.

Una volta installato il plugin (e riavviato JOSM), vedrete
questo nuovo strumento nella barra degli strumenti sulla sinistra.

![Edit Gpx Tool Icon][]

1. Apri un file GPX in JOSM!

![Open GPX File][]

2. Selezionate il nuovo pulsante nella barra dei pulsanti a sinistra 

![Edit Gpx Tool Icon][]

and the GPX data will be imported to a new EditGpx layer. Every
node of the track will be highlighted in yellow.

![GPX Nodes All][]

3. Now mark the points (by clicking) or areas (by drawing a rectangle on
their extent) that you would like to delete. The yellow highlighting
should disappear.

![GPX Nodes Selected][]

4. Right click on the layer name and choose \<\<Convert to GPX layer\>\> in
il menu \<\<Context\>\>.

5. Now you can save the normal GPX layer as a file or upload the data to
OSM (eg by using the
plugin [DirectUpload](http://josm.openstreetmap.de/wiki/Plugins)).

Print
-----

![Print Plugin][]

If you want a quick an easy way to print a map while you are editing in
JOSM, install the __print plugin__. Although you won’t be able to
do anything stylistic with your printout, this is a good way for a quick
and easy print. Once the plugin is installed, a new item will be
available on the File menu called “Print...”

![Print Menu Item][]

Clicking this will open the Print Dialog, which looks like this:

![Print Dialog][]

Here you can change your printer settings. If you don’t see anything on
the page, check the box next to “Map Preview” on the right. Zoom in or
out on the map by changing the number in the “Scale” box. Increase the
resolution by changing the number next to “ppi”. When you have finished
editing the settings, click “Print.”

Conclusioni
-------

These are some useful plugins that are available for JOSM. Feel free to
continue exploring the many other plugins. As you have already seen, the
Preferences menu has a short description of each plugin, and you can
open a web page with more information by clicking on the “More info...”
link next to each.

![More Info Link][]

Buona fortuna!

Appendix
--------

DirectUpload Details
--------------------

![Direct Upload Plugin][]

Adding your GPS tracks and waypoints to the OSM Server is useful for
many reasons.
__(If you do not want your GPX points to be seen by anyone else you do not have to read this section.  You can simply display your GPX files from JOSM, and therefore store them locally).
First of all, GPS tracks are the most useful way of collecting and
georeferencing objects in OSM. See [Aerial Imagery](/en/josm/aerial-imagery/)
GPS units have greater accuracy than satellite imagery and therefore are
a useful tool for checking how offset imagery may be. Using many GPS
tracks (the greater the number of tracks the greater the ability to
determine geolocation accuracy) allows you to determine if background
imagery may be misaligned.

Uploading tracks to the server permits greater sharing of information.
It allows people who do not have access to the field, simply because
they do not live in that area or they do not have access to a GPS
devices, to help with digitizing. There are two ways to upload your
traces: 1) JOSM Plugin or 2) on the main OSM website.

> Note: GPS waypoints cannot be uploaded to the OSM database directly.
> However, they can be converted to tracks and then be uploaded temporarily,
> for example, so they can be displayed as background objects in Potlatch.

After you have opened your GPX file in JOSM and clicked Go to
"Tools" and click "Upload traces". Describe the GPX file,
write some tags, and visibility. For visibility, you can choose whether
private, trackable, public or identifable.

1.  **Identifiable**: Your trace will be shown publicly in Your
    GPS**traces and in the public GPS traces list. Other users can
    download the raw trace and connect it with your username. Timestamps
    of the tracks points will also be available through the public GPS
    API.

2.  **Public**: Your trace will be shown publicly in Your GPS**traces
    and in the public GPS traces list. Other users are still able to
    download the raw trace from the public trace list and any timestamps
    contained within. However, data shown in the API does not reference
    your trace page, nor are the timestamps available, though the points
    are chronically ordered.

1.  **Trackable**: The trace will **not** show up in any public
    listings, but the trackpoints will still be available through the
    public GPS API **with timestamps**. Other users will be able
    to download the trackpoints but these will not be associated with
    you.

2.  **Private**: The trace will **not** show up in any public
    listings. Trackpoints will be available in timeline order through
    the public GPS API **without timestamps**.

![DirectUpload Traces Options][]

Uploading GPS Traces Online
---------------------------

1. Go
to [http://www.openstreetmap.org/](http://www.openstreetmap.org/) and log in.

2. Select "GPS Traces" found on the left banner.

![Left Banner][]

3. Select
[upload a trace](http://www.openstreetmap.org/trace/create).
Here, you can also  **See just your traces** to review previous GPS tracks.  

4. Find your file in "Choose File". Label it in the Description
box, give it some Tags, and chose what type of Visibility it will have.
If you have many .gpx files you can compress them into a zip archive and
upload it. It will be treated as one large gpx file and only one entry
on the trace list will be created. 

![Online Upload Traces Options][]

5. Click *Upload*.

  The file will be uploaded to the OSM server, where it will join the
queue of files waiting to be inserted into the database.

[Plug Icon]: /images/josm/josm-plugins_image00_plug-icon.png
[Restart JOSM]: /images/josm/josm-plugins_image01_restart-josm.png
[Mirrored Download]: /images/josm/josm-plugins_image02_mirrored_download.png
[Download from OSM Mirror]: /images/josm/josm-plugins_image03_download-from-osm-mirror.png
[Direct Upload]: /images/josm/josm-plugins_image04_direct-upload.png
[Upload Traces Item]: /images/josm/josm-plugins_image05_upload-traces-item.png
[Upload Traces Window]: /images/josm/josm-plugins_image06_upload-traces-window.png
[Edit Gpx]: /images/josm/josm-plugins_image07_edit-gpx.png
[Edit Gpx Tool Icon]: /images/josm/josm-plugins_image08_edit-gpx-tool-icon.png 
[Open GPX File]: /images/josm/josm-plugins_image09_open-gpx-file.png
[GPX Nodes All]: /images/josm/josm-plugins_image10_gpx-nodes-all.png
[GPX Nodes Selected]: /images/josm/josm-plugins_image11_gpx-nodes-selected.png
[Print Plugin]: /images/josm/josm-plugins_image12_print-plugin.png
[Print Menu Item]: /images/josm/josm-plugins_image13_print-menu.png
[Print Dialog]: /images/josm/josm-plugins_image14_print-dialog.png
[More Info Link]: /images/josm/josm-plugins_image15_more-info-link.png
[Direct Upload Plugin]: /images/josm/josm-plugins_image16_direct-upload-plugin.png
[DirectUpload Traces Options]: /images/josm/josm-plugins_image17_directupload-traces.png
[Left Banner]: /images/josm/josm-plugins_image18_left-banner.png
[Online Upload Traces Options]: /images/josm/josm-plugins_image19_online-upload-traces.png

-->


[Plugins]: /images/josm/josm-plugins_image00_plug-icon.png
