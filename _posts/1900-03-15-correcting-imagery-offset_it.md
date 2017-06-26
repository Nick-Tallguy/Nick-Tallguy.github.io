---
layout: doc
title: Correggere lo scostamento delle immagini
permalink: /it/josm/correcting-imagery-offset/
lang: it
category: josm
---

Scostamento delle immagini
===============

> Questa guida può essere scaricata come  [correcting-imagery-offset_it.odt](/files/correcting-imagery-offset_it.odt) o [correcting-imagery-offset_it.pdf](/files/correcting-imagery-offset_it.pdf)  
> Revisionato 2015-09-21  

I fornitori di foto aeree o satellitari normalmente fanno un buon lavoro nel georeferenziare le immagini, ma a volte queste immagini possono risultare leggermente traslate. Questo accada più spesso in aree collinari o montuose, dove può essere difficoltoso stirare un'immagine piatta su un'area con molti sbalzi di altitudine. Quando tu carichi una di queste immagini in JOSM, a volte in alcuni punti possono esserci scostamenti di 10 o più metri. Questo è chiamato **imagery offset** (scostamento dell'immagine).  

Nota che nella seguente immagine due foto aeree separate sono state georeferenziate e unire assieme. Proprio perchè la georeferenziazione non è un processo perfetto, le immagini non si allineano perfettamente le une con le altre. Quindi una, o entrambe, possono risultare non accurate.  

![Misaligned imagery][]

Abbiamo imparato i due principali modi di fare mappe - uno è utilizzando immagini aeree per identificare oggetti sul suolo, un altro è usando un GPS per registrare tracce e waypoint e aggiungerli a OpenStreetMap. Il vantaggio delle foto aeree è ovvio. Il mappatore può vedere l'intera immagine, osservare i vari dettagli in essa, integrare a questo la tua conoscenza dell'area, e tracciare con facilità strade, edifici e aree. Un vantaggio chiave del GPS è che non soffre del problema dello scostamento come accade con le immagini. Un GPS ti fornisce (quasi) sempre la corretta latitudine e longitudine. Le eccezioni sono quando i segnali dei satelliti sono oscurati o degradati da alti palazzi, montagne e da una superficie boscosa, ma in questo caso dovrebbe essere facile riconoscere l'errore. Osserva la traccia Gps in questa immagine, confrontata con l'immagine aerea di Bing visibile sotto.  

![Aerial vs GPS][]

Because of what we now know, it is clear that the GPS trace is likely to be accurate, and the image beneath it is out of place. So now we must ask, “if the imagery may be out of place, how can we still use it and make accurate maps?”  

Correggere lo scostamento dell'immagine
-------------------------

La risposta alle precedenti domande è che noi possiamo muovere l'immagine allineandola agli oggetti che noi sappiamo essere nella giusta posizione, come una traccia GPS precisa. In JOSM è facile correggere lo scostamento di immagini.   

Il miglior riferimento per correggere lo scostamento di un'immagine sono le tracce GPS, possibilmente precise, che seguono le strade. E più alto è il numero di tracce che hai, più accuratamente sarai in grado di allineare le immagini. Visto che gli utenti OpenstreetMap spesso caricano le loro tracce grezze GPS nel database OSM, noi possiamo scaricarle e usarle come riferimento per allineare le immagini.  

- Click on the download button. ![JOSM download button][]{: height="24px"}  

- Check the box next to “Raw GPS Data” ![Download raw GPS data][]{: height="24px"} near the top of the Download window. Select your area and click “Download.”  

- Questo scaricherà un layer addizionale in JOSM contenente le tracce GPS. A seconda di quante tracce siano state caricate dagli utenti OSM, tu potrai vedere alcune tracce (o anche nessuna).  

![Few GPS tracks from OSM][]

- O, puoi vedere molte tracce.  

![Many GPS tracks from OSM][]

- To adjust an imagery layer, click on the “Adjust imagery offset” button ![Adjust imagery offset button][]{: height="24px"} at the top of JOSM.  

- Ignoring the box that pops up, use your mouse to drag the imagery layer so that it aligns correctly with the GPS tracks.  The GPS tracks should line up with the roads on the imagery as closely as possible.  You will see the offset numbers in the box change.  

![Adjust imagery offset][]

- If you like, you can save these offset settings by entering a bookmark name and then clicking OK. You can then automatically apply the same settings later by going to Imagery ‣ Imagery offset and clicking on your bookmark.  
- Se non vuoi salvare l'offset, fai semplicemente click su OK senza inserire un nome per il segnaposto.  

Che fare se non ci sono tracce GPS su OpenStreetMap, e non hai un GPS? Senza tracce GPS è difficoltoso allineare immagini. Se è un'area relativamente vuota (con poco o nulla di mappato), tu puoi scegliere semplicemente di usare le immagini così come sono e correggere i dati successivamente. E' sempre maglio mappare un'area anche con 20 o 30 metri di scostamento che non mapparla affatto.  

Se puoi identificare con sicurezza la latitudine e la longitudine di un oggetto sul terreno, puoi assicurarti che l'immagine sia correttamente posizionata seguendo questi passaggi:  

1. Identifica nell'immagine l'oggetto la cui posizione è nota.  
2. Fai click sulla latitudine e longitudine nell'angolo in basso a sinistra di JOSM.![JOSM lat lon][]{: height="24px"}  
3. In the dialog that opens, enter the latitude and longitude of the place that you know, and enter a small number for Zoom, about five or ten.  
![JOSM lat lon dialogue][]
4. This will zoom and center the map to your longitude and latitude.  Now you can move the imagery as you did previously so that the feature you know is centered at the correct position.  

If, on the other hand, the area has already been extensively mapped, then hopefully the previous mappers have drawn objects in their correct locations.  In this case, you can align the imagery to the OSM map, but beware!  Other mappers may not be aware of imagery offset, and they may have made mistakes when they mapped.  


The Imagery Offset Database
---------------------------

Now you know how to watch out for and correct imagery offset, but there is one major problem with this approach that we have overlooked thus far.  If every OpenStreetMap user adjusts the imagery differently, everybody will be mapping with slightly different backgrounds.  

Imagine that you are mapping a small town, and you realize that Bing imagery is offset by 15 meters to the north. So you adjust the imagery and then use it to map the whole town accurately. But then somebody else wants to add something to the map, so they download the data and load Bing imagery, but they don’t know about the imagery offset you discovered!  They will think that something is wrong and all of the objects in town are misplaced by 15 meters, and they will start to move them, which is not correct!  This can be disastrous for the town’s map data.  

For this reason it is important that all users are aware of imagery offset, and should always check for it before mapping an area.  To help with this problem, some smart people created a plugin that allows users to save offset information in a database and share it with others.  Let’s see how this works:  

- Open the Preferences menu in JOSM, and click on the Plugins tab.![JOSM plugins tab][]{: height="24px"}  

- Find the plugin named “imagery_offset_db” and check the box next to it.  

![Imagery_offset_db plugin][]

- Click OK.  You will need to restart JOSM to finish the plugin installation.  

In the same way that you are able to save offsets as bookmarks, this plugin allows you to save offsets to a central database, and to access the offsets that other users have created.  Hence, if one mapper creates an imagery offset in an area, other users can use the exact same offset to map with.  

When using aerial imagery layers, you should ALWAYS check for existing offsets, and when you create your own offset, you should ALWAYS save it to this database.  


Add Imagery Offset from the Database
------------------------------------

When you add an imagery layer, the new plugin will alert you that you should check the imagery database for an existing offset.  You will see an icon with a red exclamation point on it at the top of JOSM, like this:  

![Imagery offset notification][]

- Click on the button and the plugin will communicate with the database to see if there are existing offsets in this area.  
- Here we have downloaded OSM data and GPS tracks in Kuta, Bali, Indonesia. In this case, we have found one existing offset. Click on it to apply to the map.  

![Offset in Kuta bali][]

- This causes the imagery layer to shift.  However, when we add someone else’s offset like this, we should check that it is valid by comparing to GPS tracks.  

![Comparing imagery offset from GPS tracks][]

- We can see that the imagery layer is in fact misaligned.  We don’t want other users to use this offset, so we should mark it as incorrect in the database. Click on the “Offsets” button again (it won’t have a red exclamation mark anymore).  

![Offsets button][]

- This time when the dialog opens, right-click on the offset and click “Deprecate Offset.”  

![Deprecate offset][]

- Fai click su “Sì” per confermare.  
- You will need to enter a reason for deprecating this offset.  

![Deprecate reason][]


Add Imagery Offset to the Database
------------------------------------

Now that we have marked this user’s offset as “deprecated,” we should add an improved offset to the database.  

1. Click on the “Adjust imagery offset” button. ![Adjust imagery offset button][]{: height="24px"}  
2.  Adjust the imagery to match the GPS tracks.  Click OK in the box.  
3.  Now go to Offset ‣ Store Imagery Offset...  
![Store imagery offset][]
4.  Enter a description of the offset in the box that opens.  
![Offset description][]
5.  Click OK.  Your offset will be saved to the database.  
6.  Now let’s hide the GPS layer and look at the OSM data against the correctly placed imagery.  

![Corrected imagery][]

Oh No!  Somebody mapped this area with misaligned imagery, so the area is not correctly mapped.  This will take some time to fix.


Imagery Offset Database Website
--------------------------------

Lastly, for more information on the offset database, you can visit the website at [http://offsets.textual.ru/](http://offsets.textual.ru/).  This lists all the offsets that have been uploaded to the database, and it also has a cool map feature that visualizes where the offsets are located, as you can see here:  

![http://offsets.textual.ru/][]

> One last thing to remember is that the imagery may not be offset the same distance everywhere!  This is especially true in regions where there are lots of hills and mountains.  So if the imagery seems to be offset differently in different areas, you’ll need to move it again.  

Sommario
--------

When you are just beginning OpenStreetMap, you don’t need to worry too much about imagery offset.  But if you see another mapper’s edits that seem misaligned from the imagery, you should always consider that there may be an offset before you start changing their objects.  And if you aren't quite ready to deal with offsets yet, just remember that it’s better to map an area 20 or 30 meters offset than to not map it at all.  But when possible, do remember that imagery offset may occur, and use the steps in this chapter to correct it when needed.


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










