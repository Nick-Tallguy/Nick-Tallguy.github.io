---
layout: doc
title: Úprava dat polí
permalink: /cs/josm/editing-with-josm/
lang: cs
category: josm
---

Úprava dat polí
==================

> Tato příručka může být stažena jako [josm_editing-with-josm_en.odt](/files/josm_editing-with-josm_en.odt) nebo [josm_editing-with-josm_en.pdf](/files/josm_editing-with-josm_en.pdf)  
> Zkontrolováno 13.7.2015  

Nyní jsme zvládli všechny stavební bloky mapování s OpenStreetMap.
V části [Mapování se smartphone, GPS nebo na papíře] (/cs/mobile-mapping/) můžete vidět, jak používat mobilní nástroje pro zjišťování oblasti.  

V této kapitole se opět vrátíme k JOSM a podíváme se na pár nových
konceptů, kterým jsme se dosud nevěnovali.

JOSM Vrstvy
-----------
Pokud jste nás následovali až sem, možná jste si všimli, že můžeme přidat všechny druhy
různých věcí do JOSM. Můžeme stahovat data OSM, přidat satelitní snímky Bing,
načíst GPS stopy a trasové body a přidat podklady z terénu - všechny budou zobrazeny
v mapovém okně JOSM.

Možná jste si také všimli, že pokaždé, když přidáte něco nového do JOSM, další
položka je přidána do panelu Vrstvy na pravé straně JOSM. V závislosti na tom, co máte
otevřeno, tak panel Vrstvy může vypadat například takto:

![Layers panel][]

Každá položka v tomto seznamu představuje jiný zdroj dat
který máte otevřen v okně mapy. V tomto příkladu jsou "Datová vrstva
1 " data OpenStreetMap, kterou upravujeme. "Terénní mapy" jsou
vytvořenou vrstvou když jsme přidali náš snímek terénu do JOSM.

Pokud přidáte satelitní snímky Bing, objeví se nová vrstva v panelu Vrstvy s názvem "Bing Sat."

Myšlenka vrstev může být často těžko pochopitelná. Dobrý způsob, jak si to představit, je že každá
vrstva je jako poloprůhledný kus papíru a všechny jsou uloženy na
té další. Každý kus papíru má na sobě určitý druh informací a může být znovu uspořádán
jak se vám líbí.

Vrstvy, které se používají jako reference, jako jsou satelitní snímky, GPS stopy a terénní snímky 
jsou často nazývány jako "základní vrstvy". Datová vrstva OSM je vrstva, se kterou pracujete.

- Chcete-li vrstvu přesunout, klikněte na ni v panelu Vrstvy a klikněte na tlačítko nahoru
    nebo šipku dolů, abyste je mohli přesunout.

![Layers up down][]

- Chcete-li skrýt vrstvu, vyberte ji myší a
    klikněte na tlačítko Zobrazit / Skrýt:

![Layers show hide][]

- Měli byste vidět, že zvolená vrstva zmizela na mapovém
    okně. Klikněte znovu na možnost Zobrazit / skrýt a znovu se zobrazí.
- Můžete odstranit vrstvu tak, že ji vyberete a použijete tlačítko 
    Odstranit:

![Layers delete][]

- Nakonec je důležité vědět, že tuto vrstvu můžete upravit pouze
    když je považována za *aktivní* od JOSM. Pokud nemáte možnost upravit mapu ve
    vašem mapovém okně, je to pravděpodobně proto, že nemáte správné
    nastavení vrstvy jako aktivní. Většina vrstev, například GPS body, terénní
    záznamy a satelitní snímky nelze editovat. Jediné vrstvy, které
    lze editovat data z OpenStreetMap, které jsou obvykle nazvány 
    “Data Layer 1”.
- Chcete-li vrstvu aktivovat, vyberte ji v panelu Vrstvy a klepněte na
    tlačítko Aktivovat:

![Layers activate][]


Použití GPS dat a terénních dokumentů
-------------------------------
V kapitolách [Mapování se smartphone, GPS nebo s papírem](/cs/mobile-mapping/) jsme viděli, jak shromažďovat data pomocí GPS
a terénními podklady a jak je načíst do JOSM jako vrstvy.

Jakmile jste jeden z těchto nástrojů prozkoumali, stále potřebujete
přidat informace do OpenStreetMap digitálně.

Provedete to stejným procesem, jaký jste se dozvěděli dříve - **stáhnout,
upravit, uložit**. Rozdíl spočívá v tom, že místo použití pouze satelitních
snímků jako základní vrstvy, můžete také použít data GPS, terénní podklady,
poznámky nebo kombinace toto všeho.

- Předpokládejme například, že máte GPS body jako pozadí
    v JOSM, uložili jste GPS navigační značku s názvem 030 a
    napsal jste v notebooku, že 030 je škola. Pro přidání tohoto bodu
    do OpenStreetMap, vyberete nástroj pro kreslení a
    poklepejte na vrchol bodu 030 v okně mapy. Tohle bude
    create a point. Then go to the Presets menu, and find the preset for
    school. Enter the name of the school and click “Apply Preset”. Do
    the same to add lines and shapes.

![GPS in JOSM][]

Tags
----
When you draw a point, line, or shape, it has a location, but no
information about what it is. In other words, we know **where** it
is, but not **what** it is. Before now, we have been using items
from the Presets menu to define **what** it is. The way
OpenStreetMap knows **what** an object is is by using **tags**.

A tag is like a label that you can put on something. For example, if
we draw a square, it’s only a square. But then we add attributes to
it that describe what it is: this square is a building; the name of
the building is “Menara Thamrin”; the building is 16 levels high.

You can add as many tags as you want to an object. Tags are saved as
pairs of text, called **keys** and the **values**. In
OpenStreetMap, the tags written above would in fact be:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

If you select an object in JOSM, you can see all the tags that are
attached to it in the Properties panel on the right.

![Properties panel][]

### Editace tagů
You can add, edit, and delete tags from the Properties panel. However, the tags
are traditionally in English and can sometimes be confusing, so it
is often easier to use the Presets menu. When you add or change tags, the attributes
of the object are changed.

-   To edit an object's tags, first select it.
-   Then edit the tags in one of two ways: (1) Use the Presets menu,
    or (2) edit the tags directly in the Properties window on the right. 

### Běžná chyba: Označení uzlů, když chcete označit řádky nebo mnohoúhelníky
When you are editing the attributes of a point, you will first select
the point and then add tags either through the Presets menu or directly
in the Properties panel. A common mistake is when adding attributes to a
line or a shape. When selecting the object, it is important that you
select the line, and NOT the points that make up the line.

This frequently occurs because editors use the JOSM select tool to draw a
box around an object, which causes everything, both the line **and** the nodes
to be selected, and when you add tags they are applied to the nodes
as well. Be sure to **only** select lines when you want to add tags
to them.

![Nodes mistake][]

Saving OSM files
----------------
When you are editing in JOSM, it is always a good idea to download, edit, and
upload changes in a reasonably short period of time. You do not want to download
data one day, and then wait until a few days later to upload your edits. What if
someone else edits the same area during that time? This will cause errors and conflicts.

Don't be afraid to upload your edits frequently. This ensures that your changes will
be saved to the database and you will not lose your hard work.

If you are working in a single area, it's a good idea to download the map data
every time you want to edit, in case another user has made changes.

Although you should always try to download OSM data when you are ready to edit,
and upload your changes frequently, there may be cases in which you want to save
the OSM data on your computer. For example, if you have intermittent connectivity
to the internet, you may wish to download data, save it, edit, and then upload your
changes later on.

-  To save an OSM file, make sure that it is the active layer in the
    the Layers panel. Click “File” on the top menu, and click “Save”.
    Choose a location for the file and give it a name. You can also save
    by clicking this button:

![JOSM save button][]

-  You can now close JOSM and your data will be saved. When you want to
    open the file again, simply open JOSM, go to the “File” menu, and
    click “Open...”

Shrnutí
-------
In this chapter we looked a little bit closer at the JOSM interface and learned
about layers and tags. You should now have a solid footing in how to map and how
to edit OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png