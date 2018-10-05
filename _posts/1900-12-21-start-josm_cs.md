---
layout: doc
title: Začínáme s JOSM
permalink: /cs/josm/start-josm/
lang: cs
category: josm
published: true
---

Začínáme s JOSM
=============================  

zde:  
> Zkontrolováno 12.7.2015  

Jak stahovat a instalovat JOSM, Javovský editor mapy OpenStreetMap, změnit některá nastavení, otevřít ukázkovou mapu a
seznamte se se základními operacemi softwaru. Zapamatujte si
úvodní kapitolu, když jsme vás požádali o kreslení mapy vašeho města nebo
vesnice? Tuto kapitolu uzavřeme tím, že znovu vytvoříte svou mapu
tentokrát digitálně. Poté byste měli dobře pochopit, jak
tvořit mapy v JOSM.

Stáhněte si JOSM
-------------

- Pokud máte kopii JOSM na CD nebo USB flash paměti, můžete to přeskočit
  do další části, Nainstalujte JOSM.
- Pokud nemáte JOSM nebo chcete nejnovější verzi, otevřete
  váš webový prohlížeč - to může být Firefox, Chrome, Opera nebo Internet
  Explorer.
- Na panelu s adresou v horní části okna zadejte následující
  text a stiskněte Enter: [josm.openstreetmap.de] (http://josm.openstreetmap.de)
- Internetovou stránku JOSM najdete také vyhledáváním internetu pro "JOSM".
- Webová stránka by měla vypadat takto:

  ![JOSM website][]

- Pokud máte v počítači nainstalovaný systém Windows, klikněte na "Instalační služba Windows Installer" pro stažení JOSM.

  ![Windows installer][]

- Pokud máte jiný operační 
  systém, klikněte na odkaz pro váš systém. Vaše stažení by mělo
  začít. V této kapitole budeme předpokládat, že používáte Windows,
  ale pokyny jsou podobné i u jiných operačních systémů.

Instalovat JOSM
------------

>  You may have problems installing JOSM if Java is not already
>  installed on your computer. If you have problems in this section,
>  try downloading and installing Java. You can download it here:
>  [http://www.java.com/en/download/](http://www.java.com/en/download/)

>  Mac users may have old versions of Java. Please see [http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation](http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation) for options for OSX 10.6 and 10.7.3+

- Najděte instalační soubor JOSM v počítači. Poklepejte na něj
  a tím začněte nastavení.
- Kliknout na 'OK', 'Další', 'Souhlasím' a 'Instalovat'. Když je instalace
   kompletní, kliknout na tlačítko Dokončit a poprvé spustit JOSM.
  Později, když chcete spustit JOSM, můžete to udělat kliknutím na
  Start Menu v levém dolním rohu počítače a kliknutím na tlačítko
  aplikace JOSM.
- Může se vám zobrazit okno, které se vás zeptá, zda chcete aktualizovat
  software.  You don’t need to update it since it is new.  Press the
  button that says “Cancel.”  If you don’t ever want to see this
  okno s informací znovu, zaškrtněte políčko v dolní části před stisknutím tlačítka "Zrušit".
- Když se spustí JOSM, vypadá to takto:

  ![JOSM splash page][]

Předvolby JOSM
--------------------

Existuje mnoho různých nastavení, která můžete přizpůsobit v JOSM. 
Jedním z nastavení, které můžete upravit, je jazyk. JOSM
byl přeložen do mnoha jazyků a můžete dát přednost 
pracovat v jiném.

- Chcete-li otevřít okno Předvolby, kliknout na Upravit -\> Předvolby.

  ![Preferences window][]

- Na levé straně kliknout na ikonu, která vypadá jako kbelík barvy a
  štětec.
- V horní části okna kliknout na kartu s nápisem "Vzhled".
- V rozbalovacím poli vyberte svůj jazyk vedle slova 
  "Jazyk"
  
  ![Look and feel][]

- Kliknout na tlačítko OK.
- Chcete-li uložit nastavení, musíte restartovat JOSM. Kliknout na "Soubor" v horním 
  levém rohu a v dolní části nabídky kliknout na tlačítko "Restartovat".

Naučte se základní mapování s JOSM
-----------------------------

- Nyní otevřete ukázkový soubor OSM, který použijeme k naučení
  základních způsobů kreslení map s JOSM. Všimněte si, že tato mapa není skutečná,
  v tom, že to není skutečná mapa skutečného místa, takže ji nebudeme ukládat 
  do OpenStreetMap.
- Stáhněte soubor zde: [sample.osm] (/files/sample.osm)
- Nyní otevřete ukázkový mapový soubor v JOSM. Kliknout na 
  tlačítko "Otevřít" vlevo nahoře.

  ![Open file][]

- Najděte soubor ** sample.osm **. Je pravděpodobně ve složce Stahování,
  pokud jste ho neuložili někde jinde. Klikněte na něj a pak klikněte na tlačítko "Otevřít".
- Nyní byste měli vidět vzorovou mapu, která vypadá takto:

  ![Sample file][]

- You will use these data in order to try various editing techniques.
  *You must however never upload these fictitious data to the database.*

### Základní operace

- Chcete-li mapu posunout doleva nebo doprava, nahoru nebo dolů, zmáčkněte a držte pravé 
  tlačítko myši a pohybujte myší.
- Existuje několik způsobů, jak přiblížit a oddálit mapu. Pokud máte 
  myš, můžete použít rolovací kolečko k přiblížení a oddálení. Pokud 
  používáte notebook a nemáte myš, můžete zvětšovat a zmenšovat mapu pomocí
  lišty stupnice v levé horní části okna mapy. Přetáhněte lištu doleva
  a doprava podržením levého tlačítka myši a posunutím pruhu doleva nebo
  doprava myší.

  ![Scale bar][]

- Podívejte se na ukázkovou mapu. Existuje zde několik různých typů objektů.
  Je tu řeka, les, nějaké budovy, několik silnic a 
  pár obchodů. Chcete-li vybrat objekt, musíte na něj kliknout levým
  tlačítkem myši.

### Body, linie a tvary

- Když kliknete na různé objekty na ukázkové mapě, všimněte si, že tam
  jsou tři různé typy objektů na mapě. Jsou tu body,
  čáry a tvary.
- Body jsou jednotlivá umístění, reprezentovaná symboly. Na tomto vzorku
  mapy, existují dva body, obchod s botami a supermarket.
  Prodejna s botami je reprezentována symbolem boty a obchod je
  představovaný nákupním vozíkem.
- Na mapě je také několik čar, které představují silnice.
  Pokud se podíváte pozorně, uvidíte, že v čarách jsou
  body také. Tyto body neobsahují žádné symboly nebo jiné
  informace s nimi spojené, ale pomáhají definovat, kde
  je čára nakreslená.
- Nakonec, na vzorové mapě existuje řada objektů, které reprezentují
  různá místa - les, řeku, park a budovy. Tvar
  se používá k reprezentaci oblasti, jako pole nebo budovy. Tvar je
  přesně jako linka - jediný rozdíl je, že linka objektu začíná na
  stejném bodu, kde končí.

> Je snadné přemýšlet o mapě, která obsahuje tyto tři základní typy objektů - 
> body, čáry a tvary. V OpenStreetMap existuje speciální terminologie
> díky které se dozvíte, jak postupujete. V OSM jsou body vlastně nazývány jako
> **uzly** a linie se nazývají **cesty**. Tvar je nazýván **uzavřenou cestou**
> protože je to jen čára, která končí ve stejném místě, odkud začíná.

- Můžete si všimnout, že když vyberete objekt, objeví se seznam
  vpravo od mapy v okně s názvem "Vlastnosti". Jsou známé jako
  tagy. Tagy jsou informace, které jsou svázány s bodem, čárou nebo tvarem
  který popisuje, co to je. Další informace o značkách se dozvíme později
  chapter. For now all you need to know is that this
  information helps describe whether our object is a forest, a river,
  a building, or something else.
- Think about drawing a map by hand, and how you are also drawing
  points, lines, and shapes. What other places are best represented by
  points? Lines? Shapes?

### Změna objektů

- Select the forest on the left side of the map. Be sure to click on
  the line around the forest, not one of the points on the line. Now
  hold your left mouse button down and drag your mouse. You should be
  able to move the forest to a new location on the map.
- Click on one of the points on the line around the forest. Hold your
  left mouse button down and drag your mouse. You should be able to
  move the point. This is how you can change the shape of an object,
  or move a point.

### Kreslení

- On the left side of JOSM is a column of buttons. Many of these
  buttons open new windows on the right side that provide more
  information about the map. The most important buttons, however, are
  at the top of these column. These buttons change what you can do
  with your mouse.
- The top buttons in this column are the ones you will use the most.
  They are used for selecting objects and for drawing new ones.
- Until now, you have been using the Select tool, which looks like
  takového:

  ![Select tool][]

- Před kreslením se musíte ujistit, že není vybráno nic.
  Klikněte na černé místo na mapě, které je prázdné
  nic není vybráno.
- Click on the second button, the Draw tool.

  ![Draw tool][]

- Find an empty area on the map, and double-click with your mouse.
  This will draw a single point.
- Chcete-li nakreslit čáru, klikněte jednou myší. Pohybujte myší a
  klikněte znovu. Pokračujte, dokud nebudete spokojeni s vaší linkou. Chcete-li ukončit
  čáru, poklepejte myší.
- Nakreslete tvar tak, jak kreslíte čáru, ale dokončete tvar
  poklepáním na místo, kde jste začali kreslit čáru.

### Přidat nastavení

- Teď víme, jak nakreslit body, čáry a tvary, ale stále
  jsme neurčili, co reprezentují. Chceme říci že
  naše body jsou obchody, školy nebo něco jiného a že naše
  tvary jsou pole, budovy nebo něco jiného.
- Click on the Select tool, in the column of buttons on the left.

  ![Select tool][]

- Select one of the objects that you drew with the Draw tool. On the
  top menu, click “Presets”. Move your mouse through the sub-menu to
  the type of location you would like to define.
- When you click on a preset, a form will pop up asking you for more
  information. You do not have to fill in every field, but you may
  wish to add some of the important fields, such as the name of the
  object.
- When you are finished entering the information, click “Apply
  Preset”. If everything went well, your point, line, or shape should
  change colors or show a symbol. This is because you have defined
  what it is.

Draw Your Own Map
-----------------

- Now let’s draw a map in order to practice the techniques you have
  learned. You may wish to redraw the map that you drew on paper previously.
- Drag the map away from the sample map. Hold the right mouse button
  and drag your mouse, until you have a nice empty area to draw on.
- Use the Draw tool to create points, lines, and shapes. Describe what
  your objects are by selecting from the Presets menu.
- When you are finished, you should have your own map, similar to the
  sample map that we opened in sample.osm.

## Remove the sample layer

Once you feel comfortable with these basic editing techniques you might want
to turn your attention to mapping real features. 

*It is very important that you first remove the layer with the sample data. 
These data are fictitious and must not be uploaded to the OpenStreetMap 
database (newer JOSM releases automatically prevent this).*

In the Layers window on the upper right of the screen select the sample.osm layer. 
Then click on the trash can icon in the lower right corner of that window. 
Alternatively you can choose delete from the context menu of the layer. 
In order to continue editing you first need to download real data. 
This will be explained in the next chapter.

Souhrn
-------

Excellent! If all went well you have learned how to setup JOSM on your
computer, and the basic tools for drawing maps. In the next chapter we will
take a closer look at the process of editing the OSM map with JOSM.

[JOSM website]: /images/josm/josm-website.png
[Windows installer]: /images/josm/windows-installer.png
[JOSM splash page]: /images/josm/josm-splash-page.png
[Preferences window]: /images/josm/josm_preferences.png
[Look and feel]: /images/josm/josm_look-and-feel.png
[Open file]: /images/josm/josm_open-file.png
[Sample file]: /images/josm/josm_sample-file.png
[Scale bar]: /images/josm/josm_scale-bar.png
[Select tool]: /images/josm/josm_select-tool.png
[Draw tool]: /images/josm/josm_draw-tool.png