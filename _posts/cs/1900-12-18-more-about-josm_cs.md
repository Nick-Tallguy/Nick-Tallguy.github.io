---
layout: doc
title: Proces editace JOSM
permalink: /cs/josm/more-about-josm/
lang: cs
category: josm
---

Proces editace JOSM
========================


V předchozí části jste nainstalovali JOSM a začali kreslit své první body, čáry a tvary. K těmto objektům jste přidali nastavení, abyste k nim připojili informace. Nakonec jste si mohli vytvořit vlastní mapu v JOSM.

To byla dobrá praxe a teď jsme připraveni upravovat OpenStreetMap.

V této sekci se podrobněji podíváme na rozhraní JOSM a uvidíme, jak jej můžeme použít k úpravě mapy na OpenStreetMap.

Cyklus úpravy
---------------------
Úpravy OpenStreetMap pomocí JOSM jsou podobné úpravám pomocí editoru iD, který jsme viděli dříve. Ale protože JOSM je desktopová aplikace, funguje trochu jinak. Proces úprav a přidání do OpenStreetMap s JOSM bude vždy následující:

1. **Stáhnutí** aktuálních mapových dat z OSM
2. **Úprava** pomocí satelitní fotomapy, GPS, terénních map a poznámek jako pomocných dat
3. **Uložení** změn na OpenStreetMap

Stažení dat OSM
--------------------
Prvním krokem úpravy je stažení dat pro oblast světa, kterou chceme vylepšit. Nezapomeňte, že to musíte udělat pokaždé, když chcete na mapě provést změny, protože mapu často aktualizují jiní uživatelé.

- Klikněte na „Soubor“ v levém horním rohu JOSM a poté na „Stáhnout z OSM“. Tím se otevře okno stahování. Do tohoto okna se dostanete snadněji kliknutím na tlačítko Stáhnout, které je zde:

![JOSM Download Button][]

- Když se otevře okno stahování, měla by se zobrazit mapa. Pokud mapu nevidíte, klikněte na kartu označenou „Slippy map“.

![JOSM Download Dialog][]

- Pomocí myši posouvejte a přibližujte ji do oblasti, kterou dobře znáte, například do rodného města nebo okolí. Ovládací prvky jsou stejné jako v okně mapy JOSM. Pravým tlačítkem myši můžete přetáhnout mapu a rolovací kolečko umožňuje přibližování a oddalování.

> Někdy, pokud pracujete na notebooku, může být obtížné přibližovat se a oddalovat. Práce v JOSM je mnohem jednodušší, pokud máte myš, ale většina moderních notebooků vám umožňuje rolovat pomocí touchpadu.

-   Draw a box around the area that you want to download. To draw a new box, click on the map, hold your left mouse button down, and drag your mouse to create a box. Release the mouse button to finish drawing the box.
-   When you are satisfied with the size and location of the box, click “Download” at the bottom of the window. JOSM will get the data for this area from OpenStreetMap and open it in your map window for editing.

### Přidat snímky
If you followed along when we added our first points with the iD editor, you remember that beneath the map data there was a satellite image that helped us identify objects on the ground. This imagery was from Microsoft Bing, which generously provides its imagery for OpenStreetMap users to reference while contributing to the map.

-   To add the Bing satellite imagery in JOSM, click "Imagery" on the top menu of JOSM and selecting “Bing Sat.”

> If you don't see Bing Sat on the Imagery menu, you may need to activate it in the JOSM preferences. Go to Edit -> Preferences and click on the icon that says “WMS TMS”. You may need to click on the down arrow to find it.
>
> ![JOSM Preferences up down][]
> ![JOSM Preferences WMS TMS][]
>
> Klikněte na "Bing Sat". Pak klikněte na tlačítko "Aktivovat".


### Prohlídka JOSM
Now that we've downloaded OpenStreetMap data and added the Bing satellite imagery, let's take another look at the interface of JOSM.

![JOSM layout][]

The main window you are already familiar with - this is the map window, and it is where most of the action takes place. Here you will view, edit, and add to the OpenStreetMap data.

To the right of the map window are a series of panels, each of which has its own function. Typically when you first install JOSM several panels are shown by default, such as Layers, Properties, and Selection. When you select a point, line, or shape in the map window, it will be shown in the Selection panel. Information about the object will be shown in the Properties panel, and the username of the author of that object will be shown in the Authors panel.

These panels can be opened or closed by clicking on the various buttons on lower left side of JOSM. Above these buttons in the upper right are tools which change what you can do with your mouse. You are already familiar with some of them, the Select tool and the Draw tool. Below them are tools which make it easier to zoom in, delete an object, draw a shape, or create a line that is parallel to another line.


Upravit
----
So we have completed step one of the editing process - Downloading. We have prepared JOSM with satellite imagery as a reference. The next step is to edit the map and add new items.

Depending on the area that you chose to download, there may be a lot or very little existing map data. But notice that it is the same sort of data that we have seen previously - points, lines, and shapes that represent real-life locations.

-   Use the techniques you have already learned to add a couple points to the map of places that you know. If you see any mistakes, try to fix them.
-   You don't need to be too aggressive while you are learning. If you are unsure about something it's better to leave it as it is.
-   If you want to move a point, line, or shape, use the **select tool**. Click on an object and drag it where it should be. This can be used to correct the location of items that have been put in the wrong place.

![JOSM select tool][]

-   Use the **draw tool** to draw new points, lines, and shapes. Describe these objects by selecting from the Presets menu, as you did in the previous section.

> Never edit the map outside of the area you have downloaded. You can see the rectangular area you have downloaded has a solid background, while the area you have not downloaded has diagonal pinstriped lines.
>
> ![JOSM area downloaded][]

Ukládání změn
--------------
The third and final step to complete our edits is to upload the changes we have made to the OpenStreetMap database. To save the changes, we must be connected to the internet.

-   Click “File” on the top menu, and then click “Upload Data”. This will open up the upload window. You can access this window more simply by clicking on the upload button, shown here:

    ![JOSM Upload Button][]

-   The window that appears shows a list of the objects that you are adding and the objects you are modifying or deleting. In the box at the bottom you are asked to provide a comment about the changes that you are making. Type in here a description of your edits.

    ![JOSM Upload Dialog][]

-   Click “Upload Changes”.

-   If this is your first time saving changes to OpenStreetMap, you will be asked for your OpenStreetMap username and password.
-   Enter them in the window that appears. If you check the box in this window, your username and password will be saved and you won’t need to enter them again in the future. Click “Authenticate”.

    ![JOSM Authenticate][]

-   You will need to wait a few seconds for your changes to be uploaded, and then you are done! You have edited the map on OpenStreetMap.

> When you are editing, always be sure to upload your changes before you close JOSM. Even if you still have more editing to do, upload your changes, and then go through the process again later when you have time to edit. You don't want to lose your work!

Zobrazit změny na mapě
---------------------------
-   Open your internet browser and go to [http://openstreetmap.org/](http://openstreetmap.org/)
-   Move the map to the area that you edited.
-   You should see your changes now appearing on the map! If you don’t, try pressing CTRL+R to refresh the web page. Sometimes the map doesn’t update properly and needs to be reloaded.
-   What if you don’t see your changes? Don’t worry - it may take a few minutes for the changes to be shown on the map. Also, check your additions in JOSM to make sure that you added them correctly. A good general rule is, if your point has an icon in JOSM, then it should be seen on the main map at the OpenStreetMap website.

Shrnutí
-------
Now that you’ve seen how to add to OpenStreetMap, what’s next? Well, editing is great, but it's not the only aspect of making maps. Of course you also need to learn how to go outside and collect information about places on the ground.


[JOSM Download Button]: /images/josm/josm_download-button.png
[JOSM Download Dialog]: /images/josm/josm_download-dialog.png
[JOSM Preferences up down]: /images/josm/josm_preferences-up-down.png
[JOSM Preferences WMS TMS]: /images/josm/josm_preferences-wms-tms.png
[JOSM layout]: /images/josm/josm_layout.png
[JOSM select tool]: /images/josm/josm_select-tool.png
[JOSM area downloaded]: /images/josm/josm_area-downloaded.png
[JOSM Upload Button]: /images/josm/josm_upload-button.png
[JOSM Upload Dialog]: /images/josm/josm_upload-dialog.png
[JOSM Authenticate]: /images/josm/josm_authenticate.png