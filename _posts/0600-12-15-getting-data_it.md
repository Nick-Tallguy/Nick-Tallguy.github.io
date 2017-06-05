---
layout: doc
title: Ottenere i dati OSM
permalink: /it/osm-data/getting-data/
lang: it
category: osm-data
---

Ottenere i dati OSM
=================  

> This guide may be downloaded as [Getting_OSM_Data_en.odt](/files/Getting_OSM_Data_en.odt) or [Getting_OSM_Data_en.pdf](/files/Getting_OSM_Data_en.pdf)  
> Revisionato il 04-05-2016

Quando vuoi ottenere i dati OpenStreetMap più recenti, il modo più semplice è scaricarne un estratto da un sito web. Ci sono diversi servizi web che forniscono estratti per un'area a tuo scelta.  

Scaricare estratti di dati
--------------------------

### GeoFabrik

[GeoFabrik](http://geofabrik.de) è una società specializzata nel lavorare con dati OpenStreetMap. Essi forniscono una varietà di estratti gratuiti in formato shapefile e in formato nativo OSM sul loro [sito download](http://download.geofabrik.de). Il vantaggio di scaricare dati da Geofabrik è che sono aggiornati ogni giorno, ed è facile e affidabile. Lo svantaggio è che i dati sono estratti per nazioni, e non tutte le nazioni sono disponibili. Per "l'Italia" è disponibile il servizio di [Wikimedia Italia](http://osm-estratti.wmflabs.org/estratti/) che fornisce nei formati shapefile, nativo OSM e Spatialite l'aggiornamento quotidiano degli estratti per singole regioni o singoli comuni.  

### Metro Extracts

[Un sito web gestito da Mapzen](https://mapzen.com/data/metro-extracts/) fornisce nei formati shapefiles e nativo OSM gli estratti di città del mondo, estratti settimanalmente. Questo è utile se cerchi estratti di dati di singole città.  

### BBBike  

[BBBike](http://download.bbbike.org/osm/bbbike/) offre qualcosa di simile ai Metro Extracts ma per una selezione di città differenti. Anche in questo caso i dati vengono aggiornati settimanalmente.

>Ricorda che le caratteristiche in OpenStreetMap hanno un numero illimitato di tag "liberi",
>ma gli shapefiles hanno un numero limitato di colonne dove registrano gli attributi. Ciò significa
>che quando i dati OSM vengono convertiti in shapefiles, solo alcuni tag sono
>inculsi nella tabella attributi del shapefile. I siti indicati sopra forniscono shapefiles
>con un certo set di tag comuni, ma se tu vuoi estrarre tag specifici
>allora devi usare uno o più servizi specializzati indicati nella prossima sezione
>o imparare come esportare i dati da te.

Estratti personalizzati
-------------------

### Exports HOT   

Lo [Humanitarian OpenStreetMap Team](http://hotosm.org) ha creato un servizio che permette agli utenti di selezionare l'area che vogliono estrarre, e usa anche i [Presets JOSM](/en/josm/josm-presets/)
per personalizzare la selezione dei tag da includere nell'estratto. Il servizio è disponibile in tutti i paesi in cui opera HOT, a [export.hotosm.org](http://export.hotosm.org).

![hot exports][]

### BBBike  

Tu puoi selezionare un'area di qualsiasi parte del mondo usando il servizio a [http://extract.bbbike.org/](http://extract.bbbike.org/). Lo svantaggio è che non puoi scegliere quali tag includere, inoltre la quantità di dati che puoi scaricare è limitata.    

### Overpass

Overpass è una API  (Application Programming Interface) per estrarre dati da una copia di sola lettura del database principale di OpenStreetMap che può erogare una quantità arbitraria di dati. Usando un linguaggio query puoi personalizzare quale subset di dati vuoi ottenere. Tu puoi anche usare la API generando direttamente una richiesta http o passando dall'interfaccia di overpass turbo.

#### Overpass Turbo

[Overpass Turbo](http://overpass-turbo.eu/) è un generatore interattivo di query dove tu dovresti prima zoomare sulla regione appropriata della mappa (altrimenti nella query devi indicare l'aera interessata). Inserisci la tua query nel campo alla sinistra della pagina e attiva qualsiasi azione tramite i bottoni situati nella parte superiore. Se tu sei nuovo del linguaggio query puoi iniziare ad utilizzarlo usando il wizard. La wiki OSM contiene una [descrizione completa](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) della sintassi del linguaggio query e anche una [collezione di esempi](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_API_by_Example).

La mappa evidenzierà tutti i dati selezionati dalla tua query; tu puoi eventualmente modificare la query. Premi 'Esegui' per aggiornare il risultato mostrato. Quando hai ottenuto i dati che cercavi, il tasto 'Esporta' ti offre diverse scelte, tra le quali il formato nativo OSM. Se la quantità di dati è limitata tu puoi  anche accedervi direttamente dopo essere passato dalla vista mappa alla vista dati cliccando il bottone in alto sull'estrema destra della finestra. L'opzione di esportazione  *Query -> converti in (compatta) OverpassQL* genera un hyperlink da usare nella Overpass API.

![overpass turbo][]

Se vuoi costruirti una bella query per ottenere un subset di dati da un'area vasta allora è una buona idea eseguire dei test e migliorare via via la query partendo da un'area limitata. Successivamente puoi selezionare tutta l'area interessata e usare la url generata dalla query direttamente con la API. La prossima sezione ti spiega come farlo.

#### L'API Overpass

[Overpass API](http://wiki.openstreetmap.org/wiki/Overpass_API) is a dedicated service optimized for querying but not writing OpenStreetMap data. Due to this optimization it operates very fast compared to the main database api and has virtually no limits on the amount of data transferred. Several instances of this service are available on the net, the one used in the following example also provides some information on [its homepage](http://overpass-api.de/)

If you have a working query-URL for submitting an http-request to the Overpass API then a tool such as [wget](https://www.gnu.org/software/wget/) - available for different operating systems, see [here](http://wget.addictivecode.org/FrequentlyAskedQuestions?action=show&redirect=Faq#download) - allows you to download the raw OSM data directly from the server and store them locally. The following snippet is a script for the bash shell common on Unix systems which obtains all data within a specified bounding box:

```
echo lower left latitude
read ll_lat
echo lower left longitude
read ll_lon
echo upper right latitude
read ur_lat
echo upper_right longitude
read ur_lon
echo output file
leggi file
url="http://overpass-api.de/api/interpreter?data=(node($ll_lat,$ll_lon,$ur_lat,$ur_lon);<;rel(br););out meta;"
wget -O $file "$url"
```
>What happens here (for the curious who do not want to read the full query language documentation)?  
>node(...) selects all nodes within a bounding box;  
>< recurses up fully, i.e. selects all ways containing these nodes and all relations containing these nodes and ways;  
>rel(br) selects all parent relations of relations obtained so far (otherwise master relations would not be obtained)
>



Sommario
-------  

The services mentioned in this chapter are all that the average user needs to get the OSM data they want and be able to work with it in GIS software. However, you may want to learn more powerful ways of working with the data yourself. The remaining chapters in this section are quite technical, but show more advanced methods of manipulating and accessing OSM data.  


[hot exports]: /images/osm-data/hot-exports.png
[overpass turbo]: /images/osm-data/overpass_turbo.png