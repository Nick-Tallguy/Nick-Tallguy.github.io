---
layout: doc
title: Proces editace JOSM
permalink: /cs/josm/more-about-josm/
lang: cs
category: josm
---

Proces editace JOSM
========================

> Tato příručka může být stažena jako [josm_more-about-josm_en.odt](/files/josm_more-about-josm_en.odt) or [josm_more-about-josm_en.pdf](/files/josm_more-about-josm_en.pdf)  
> Zkontrolováno 12.7.2015  

V předchozí části jste 
nainstalovali JOSM a začali kreslit své první body, čáry a tvary.
Do těchto objektů jste přidali přednastavení, abyste mohli přidat informace o
nich. Nakonec jste si mohli vytvořit vlastní mapu v JOSM.

To byla dobrá praxe a teď jsme připraveni upravovat OpenStreetMap.

V této části se blížeji podíváme na rozhraní JOSM a uvidíme
jak ho můžeme použít k úpravě mapy na OpenStreetMap.

Cyklus úpravy
---------------------
Editace OpenStreetMap s JOSM je podobná editaci s iD editorem jak 
jsme viděli předtím. Ale protože JOSM je desktopová aplikace, funguje trochu
 jinak. Proces editace a přidávání do OpenStreetMap s
JOSM bude vždy následující:

1. ** Stáhnout ** aktuální mapové údaje z OSM
2. ** Upravit ** pomocí satelitních snímků, GPS, poznámek a jiných informací
3. ** Uložit ** změny do OpenStreetMap

Stažení dat OSM
--------------------
Prvním editačním krokem je stahovat data pro oblast světa
kterou chceme se zlepšit. Nezapomeňte, že to musíte provést pokaždé, když chcete
udělat změny mapy, protože mapa je často aktualizována jinými uživateli.

- Klikněte na "Soubor" v levém horním rohu stránky JOSM a klikněte na "Stáhnout 
    z OSM". Otevře se okno pro stahování. Můžete přistupovat
    k tomuto oknu jednoduše kliknutím na tlačítko pro stažení zobrazené
    zde:

![JOSM Download Button][]

-  When the download window opens, you should see a map. If you don’t see the map, click on the tab marked
    “Slippy map”.

![JOSM Download Dialog][]

-  Use your mouse to pan and zoom it to an area
    kterou znáte velmi dobře, jako je vaše rodné město, nebo okolí.
    Ovládací prvky jsou stejné jako v okně mapy JOSM. Pravé tlačítko myši
    umožňuje posunovat mapu a rolovací kolečko umožňuje přiblížení a
    oddálení.

> Sometimes if you are working on a notebook computer it can be difficult
> to scroll in and out. Working in JOSM is much easier if you have a mouse,
> but most modern notebooks allow you to scroll using the touchpad.

- Nakreslete rámeček kolem oblasti, kterou chcete stáhnout. Chcete-li nakreslit nový rámeček, klikněte na
    mapu, držte levé tlačítko myši zmáčknuté a přetáhněte myš k vytvoření
    rámečku. Uvolněte tlačítko myši a dokončete kreslení rámečku.
- Pokud jste spokojeni s velikostí a polohou rámečku, klepněte na
    "Stáhnout" ve spodní části okna. JOSM dostane data pro
    tuto oblast z OpenStreetMap a otevřete ji v okně mapy k
    úpravám. 

### Přidat snímky
Pokud jste sledovali, jak jsme přidali první body s iD editorem,
pamatujte si, že pod mapovými daty byl satelitní obraz, který pomohl
identifikovat objekty na zemi. Tato fotografie pocházela od společnosti Microsoft Bing, která
velkoryse poskytuje své snímky pro uživatele OpenStreetMap, aby se mohly využít při
přispívání do mapy.

- Pokud chcete přidat satelitní snímky Bing v JOSM, klikněte na "Imagery" v horní nabídce
    JOSM a vyberte "Bing Sat".

> If you don't see Bing Sat on the Imagery menu, you may need to activate
> it in the JOSM preferences. Go to Edit -> Preferences and click on the icon
> that says “WMS TMS”. You may need to click on the down arrow to find it.
> <br>
>	![JOSM Preferences up down][]
>	![JOSM Preferences WMS TMS][]
> <br>
> Click on “Bing Sat”. Then Click “Activate”.


### Prohlídka JOSM
Nyní, když jsme stáhli data z OpenStreetMap a přidali satelitní snímky Bing,
 podívejme se ještě jednou na rozhraní JOSM.

![JOSM layout][]

Hlavní okno, které již znáte - toto je okno mapy a 
to je místo, kde se většina akce odehrává. Zde si můžete prohlédnout, upravit a
přidat nová data do OpenStreetMap.

Vpravo od okna mapy je řada panelů, z nichž každý má
vlastní funkci. Typicky při první instalaci JOSM je několik
panelů zobrazeno ve výchozím nastavení, například Vrstvy, Vlastnosti a
Výběr. Když na mapě vyberete bod, čáru nebo tvar v mapovém 
okně, zobrazí se v panelu Výběr. Informace o
objektu se zobrazí v panelu Vlastnosti a uživatelské jméno
autora daného objektu se zobrazí v panelu Autoři. 

These panels can be opened or closed by clicking on the various buttons on
lower left side of JOSM. Above these buttons in the upper right are tools which
change what you can do with your mouse. You are already familiar with some of them,
the Select tool and the Draw tool. Below them are tools which make it easier to
zoom in, delete an object, draw a shape, or create a line that is parallel
to another line.


Edit
----
So we have completed step one of the editing process - Downloading. We have
prepared JOSM with satellite imagery as a reference. The next step is to edit
the map and add new items.

Depending on the area that you chose to download, there may be a lot or very
little existing map data. But notice that it is the same sort of data that we
have seen previously - points, lines, and shapes that represent real-life locations.

-	Use the techniques you have already learned to add a couple points to the map
	of places that you know. If you see any mistakes, try to fix them.
-	You don't need to be too aggressive while you are learning. If you are unsure
	about something it's better to leave it as it is.
-	If you want to move a point, line, or shape, use the
    **select tool**. Click on an object and drag it where it
    should be. This can be used to correct the location of items that
    have been put in the wrong place.

![JOSM select tool][]

-  Use the **draw tool** to draw new points, lines, and shapes.
    Describe these objects by selecting from the Presets menu, as you
    did in the previous section. 

> Never edit the map outside of the area you have downloaded. You  
> can see the rectangular area you have downloaded has a solid background,  
> while the area you have not downloaded has diagonal pinstriped lines. 
> <br>  
> ![JOSM area downloaded][]

Save Changes
--------------
The third and final step to complete our edits is to upload the changes we have
made to the OpenStreetMap database. To save the changes, we must
be connected to the internet.

-  Click “File” on the top menu, and then click “Upload Data”. This
    will open up the upload window. You can access this window more
    simply by clicking on the upload button, shown here:

![JOSM Upload Button][]

-  The window that appears shows a list of the objects that you are
    adding and the objects you are modifying or deleting. In the box at
    the bottom you are asked to provide a comment about the changes that
    you are making. Type in here a description of your edits.

![JOSM Upload Dialog][]

-  Click “Upload Changes”.

-	If this is your first time saving changes to OpenStreetMap, you will
    be asked for your OpenStreetMap username and password.
-	Enter them in the window that appears. If you check the box in
    this window, your username and password will be saved and you won’t
    need to enter them again in the future. Click “Authenticate”.

![JOSM Authenticate][]

-	You will need to wait a few seconds for your changes to be uploaded,
    and then you are done! You have edited the map on OpenStreetMap.

> When you are editing, always be sure to upload your changes before you close  
> JOSM. Even if you still have more editing to do, upload your changes, and  
> then go through the process again later when you have time to edit.  
> You don't want to lose your work!

See your changes on the map
---------------------------
-  Open your internet browser and go to [http://openstreetmap.org/](http://openstreetmap.org/)
-  Move the map to the area that you edited.
-  You should see your changes now appearing on the map! If you don’t,
    try pressing CTRL+R to refresh the web page. Sometimes the map
    doesn’t update properly and needs to be reloaded.
-  What if you don’t see your changes? Don’t worry - it may take a few
    minutes for the changes to be shown on the map. Also, check your
    additions in JOSM to make sure that you added them correctly. A good
    general rule is, if your point has an icon in JOSM, then it should
    be seen on the main map at the OpenStreetMap website.

Souhrn
-------
Now that you’ve seen how to add to OpenStreetMap, what’s next? Well, editing
is great, but it's not the only aspect of making maps. Of course you also
need to learn how to go outside and collect information about places on the
ground.


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