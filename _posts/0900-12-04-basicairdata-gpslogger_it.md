---
layout: doc
title: BasicAirData GPS Logger
permalink: /en/mobile-mapping/basicairdata-gpslogger/
lang: en
category: mobile-mapping
---

> This guide may be downloaded as [basicairdata_gpslogger_en.odt](/files/basicairdata_gpslogger_en.odt) or [basicairdata_gpslogger_en.pdf](/files/basicairdata_gpslogger_en.pdf)  

BasicAirData GPS Logger
=======================

![BasicAirData-GPSLogger-002][]

BasicAirData GPS Logger è una semplice applicazione per registrare la tua posizione e il tuo percorso. È un registratore GPS leggero focalizzato sull'accuratezza, con un occhio al risparmio energetico. L'app è molto accurata nella determinazione dell'altitudine, quando viene abilitata la correzione automatica dell'altitudine EGM96 nelle impostazioni. Puoi registrare tutti i tuoi itinerari, visualizzarli nel tuo visualizzatore esterno preferito (deve essere installato) direttamente dall'archivio tracce integrato, e condividerle nei formati KML, GPX e TXT in tanti modi.

L'app è disponibile per Android, è libera, gratuita e Open Source.

L'applicazione è scaricabile gratuitamente su [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger).<br>
Come alternativa, l'APK è scaricabile direttamente dalla [repo di GitHub](https://github.com/BasicAirData/GPSLogger/tree/master/apk) di GPSLogger.

Caratteristiche
--------

![BasicAirData-GPSLogger-000][]

* Registrazione di itinerari - l'app non ha mappe integrate
* Un'interfaccia moderna con un tema scuro a basso consumo e una visualizzazione a schede
* Registrazione in primo piano e in background (In Android 6+ è necessario disabilitare monitoraggi e ottimizzazioni della batteria per l'app)
* Creazione di annotazioni, anche durante la registrazione
* Visualizzazione delle informazioni GPS
* Correzione manuale dell'altitudine (aggiunta di un offset)
* Correzione automatica dell'altitudine basata su NGA Earth Geoid Model EGM96 (da abilitare nelle impostazioni)
* Statistiche itinerario in tempo reale
* Archivio itinerari integrato, con la lista dei percorsi registrati
* Visualizzazione itinerari tramite qualsiasi visualizzatore KML/GPX installato, direttamente dall'archivio itinerari
* Esportazione itinerari nella cartella /GPSLogger del tuo dispositivo, in formato KML, GPX e TXT
* Condivisione itinerari in formato KML, GPX e TXT, via e-mail, Dropbox, Google Drive, FTP, ...
* Utilizza unità di misura metriche, imperiali o nautiche

Utilizzo di base
-----------

![BasicAirData-GPSLogger-001][]

Se la posizione GPS non è attiva sul tuo dispositivo, attivala. Poi vai in un luogo aperto e avvia GPS Logger.

1. Attendi che l'app agganci il segnale gps. Non appena trovato il segnale, il tab __FIX GPS__ inizierà a visualizzare le coordinate del fix. A questo punto (quando possibile) è consigliabile attendere almeno un altro minuto prima di procedere con la fase successiva, al fine di consentire la stabilizzazione del segnale
2. Clicca sul bottone __Punti GPS__ che trovi nel pannello inferiore per iniziare la registrazione dell'itinerario. Il bottone diventerà di colore rosso. Puoi interrompere e riprendere la registrazione in ogni momento cliccando su di esso. Il bottone mostra il numero di punti registrati.
È possibile andare nel tab __ITINERARIO__ per vedere le statistiche del percorso in tempo reale.
3. When your trip is finished, double-tap on the little __V tick__ located near the upper right corner to finalize (finish) the active track.
4. Go to the __TRACKLIST__ tab, where you will find the track you have just recorded. Tap on the track. A menu will appear. You can choose to share the track in many ways, view it using an installed external viewer, export it into /GPSLogger folder of your smartphone, or delete it from the tracklist. The formats used for export can be configured on the settings screen

Import of GPX tracks in OpenStreetMap Editor
--------------------------------------------

When you are done collecting field data, you may import the GPX tracks for use in JOSM, iD or another OpenStreetMap Editor.
You can use this simple 2-step procedure:

1. Save the GPX track on your Personal Computer in one of the following ways:
* Go on the GPS Logger tracklist, tap on the desired track and then click on __Export__; the GPX file will be created and saved on the /GPSLogger folder of your Android device (make sure that GPX format is enabled on the settings screen). Then connect the phone with your PC using a USB cable and move (or copy) your GPX tracks on your PC using the File Manager;
* As alternative, you can use the __Share__ feature to send the file to the PC (you can do it via e-mail, FTP, or using many Cloud Services). The sharing possibilities depend on the third-party apps installed on your Android Device;
2. Import the GPX track into your OpenStreetMap Editor: using the GPX tracks with the JOSM and iD editors is easy by dragging the files and dropping them into the application (or the browser tab, for iD).

Official Documentation
----------------------

- For further information about this app you can read [this article](http://www.basicairdata.eu/projects/android/android-gps-logger/).<br>
- [Here](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) you can find a Getting Started Guide and an Overview of the App Settings.<br>
- Problems during use or configuration of GPS Logger? Read the [Frequently Asked Questions](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions) page!

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg