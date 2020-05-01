---
layout: doc
title: Úprava dat polí
permalink: /cs/josm/editing-with-josm/
lang: cs
category: josm
---

Úprava dat polí
==================


Nyní jsme pokryli všechny stavební bloky mapování pomocí OpenStreetMap. V části [Mapování pomocí smartphonu, GPS nebo papíru](/en/mobile-mapping/) můžete vidět, jak používat mobilní nástroje pro průzkum oblasti.

V této kapitole se vrátíme znovu k JOSM a podíváme se na několik nových konceptů, kterými jsme se dosud nezabývali.

JOSM Vrstvy
-----------
Pokud jste postoupili až sem, možná jste si všimli, že do JOSM můžeme přidat nejrůznější věci. Můžeme stahovat data OSM, přidávat satelitní snímky Bing, načítat GPS trasy a waypointy a přidávat ručně kreslené mapy - to vše se zobrazuje v mapovém okně JOSM.

Možná jste si také všimli, že pokaždé, když do JOSM přidáte něco nového, přidá se na panel Vrstvy na pravé straně JOSM další položka. V závislosti na tom, co jste otevřeli, může panel Vrstvy vypadat asi takto:

![Layers panel][]

Každá položka v tomto seznamu představuje jiný zdroj dat, který máte otevřený v okně mapy. V tomto příkladu „Data Layer 1“ jsou data OpenStreetMap, která editujeme. „Field Papers“ je vrstva vytvořená, když jsme přidali naši ručně kreslenou mapu do JOSM.

Pokud přidáte satelitní snímky Bing, objeví se nová vrstva v panelu Vrstvy s názvem "Bing Sat."

Myšlenka vrstev může být často obtížně pochopitelná. Dobrým způsobem, jak si představit, je, že každá vrstva je jako poloprůhledný kus papíru a všechny jsou naskládány na sebe. Každý kus papíru obsahuje určitý typ informací a lze je libovolně uspořádat.

Vrstvy, které se používají jako reference, jako jsou satelitní snímky, GPS trasy a polní mapy, se často nazývají „základní vrstvy“. Datová vrstva OSM je vrstva, se kterou skutečně pracujete.

- Chcete-li vrstvu přesunout, klikněte na ni v panelu Vrstvy a kliknutím na šipku nahoru nebo dolů ji přesuňte.

![Layers up down][]

- Chcete-li vrstvu skrýt, vyberte ji myší a klikněte na tlačítko Zobrazit / skrýt:

![Layers show hide][]

- Měli byste vidět že vrstva, kterou jste vybrali, zmizela v mapovém okně. Klikněte znovu na Zobrazit / skrýt a znovu se objeví.
- Vrstvu můžete odstranit tak, že ji vyberete a použijete tlačítko Smazat:

![Layers delete][]

- A konečně je důležité vědět, že můžete upravovat pouze vrstvu, kterou JOSM považuje za *aktivní*. Pokud nemůžete upravit mapu v okně mapy, je to pravděpodobně proto, že nemáte aktivní vrstvu nastavenou jako aktivní. Většina vrstev, jako jsou GPS body, terénní mapy a satelitní snímky, nelze upravovat. Jediné vrstvy, které lze editovat, jsou data z OpenStreetMap, která se obvykle nazývají „Data Layer 1”“.
- Chcete-li aktivovat vrstvu, vyberte ji na panelu Vrstvy a klikněte na tlačítko Aktivovat:

![Layers activate][]


Použití GPS dat a terénních dokumentů
-------------------------------
V kapitolách [Mapování se Smartphone, GPS nebo papírem](/en/mobile-mapping/) jsme viděli, jak shromažďovat data pomocí GPS a terénních map a jak je načítat do JOSM jako vrstvu.

Jakmile provedete průzkum pomocí některého z těchto nástrojů, musíte informace přidat do OpenStreetMap digitálně.

Děláte to stejným způsobem, jaký jste se naučili dříve - **stáhnout, upravit, uložit**. Rozdíl je v tom, že místo použití pouze satelitních snímků jako základní vrstvy můžete také použít vaše GPS data, terénní mapy, poznámky nebo jejich kombinaci.

- Předpokládejme například, že máte GPS waypointy jako vrstvu pozadí v JOSM, uložili jste do GPS navigační bod s názvem 030 a do notebooku jste napsali, že 030 je škola. Chcete-li přidat tento bod do OpenStreetMap, vyberte nástroj kreslení a dvakrát klikněte na horní bod 030 v okně mapy. Tím vytvoříte bod. Poté přejděte do nabídky Předvolby a najděte předvolbu pro školu. Zadejte název školy a klikněte na „Použít nastavení“. Stejným způsobem přidejte čáry a tvary.

![GPS in JOSM][]

Tagy
----
Když nakreslíte bod, čáru nebo tvar, má místo, ale žádné informace o tom, co to je. Jinými slovy, víme **kde** je, ale ne **co** je. Předtím jsme pomocí položek z nabídky Nastavení definovali **co** to je. Způsob, jakým OpenStreetMap ví **co je** objekt, je pomocí **značek**.

A tag is like a label that you can put on something. For example, if we draw a square, it’s only a square. But then we add attributes to it that describe what it is: this square is a building; the name of the building is “Menara Thamrin”; the building is 16 levels high.

You can add as many tags as you want to an object. Tags are saved as pairs of text, called **keys** and the **values**. In OpenStreetMap, the tags written above would in fact be:

-   building = yes
-   name = Menara Thamrin
-   building:levels = 16

Pokud vyberete objekt v JOSM, uvidíte všechny značky, které jsou k němu připojeny, na panelu Vlastnosti vpravo.

![Properties panel][]

### Editace tagů

You can add, edit, and delete tags from the Properties panel. However, the tags are traditionally in English and can sometimes be confusing, so it is often easier to use the Presets menu. When you add or change tags, the attributes of the object are changed.

- Chcete-li upravit značky objektu, nejprve je vyberte.
-   Then edit the tags in one of two ways: (1) Use the Presets menu, or (2) edit the tags directly in the Properties window on the right.

### Běžná chyba: Označení uzlů, namísto řádků nebo mnohoúhelníků

When you are editing the attributes of a point, you will first select the point and then add tags either through the Presets menu or directly in the Properties panel. A common mistake is when adding attributes to a line or a shape. When selecting the object, it is important that you
kliknout na linku, nikoliv na bod, který ji tvoří.

This frequently occurs because editors use the JOSM select tool to draw a box around an object, which causes everything, both the line **and** the nodes to be selected, and when you add tags they are applied to the nodes as well. Be sure to **only** select lines when you want to add tags to them.

![Nodes mistake][]

Ukládání OSM souborů
----------------
When you are editing in JOSM, it is always a good idea to download, edit, and upload changes in a reasonably short period of time. You do not want to download data one day, and then wait until a few days later to upload your edits. What if someone else edits the same area during that time? This will cause errors and conflicts.

Don't be afraid to upload your edits frequently. This ensures that your changes will be saved to the database and you will not lose your hard work.

If you are working in a single area, it's a good idea to download the map data every time you want to edit, in case another user has made changes.

Although you should always try to download OSM data when you are ready to edit, and upload your changes frequently, there may be cases in which you want to save the OSM data on your computer. For example, if you have intermittent connectivity to the internet, you may wish to download data, save it, edit, and then upload your changes later on.

-   To save an OSM file, make sure that it is the active layer in the the Layers panel. Click “File” on the top menu, and click “Save”. Choose a location for the file and give it a name. You can also save by clicking this button:

![JOSM save button][]

-   You can now close JOSM and your data will be saved. When you want to open the file again, simply open JOSM, go to the “File” menu, and click “Open...”

Shrnutí
-------
In this chapter we looked a little bit closer at the JOSM interface and learned about layers and tags. You should now have a solid footing in how to map and how to edit OpenStreetMap.


[Layers panel]: /images/josm/josm_layers-panel.png
[Layers up down]: /images/josm/josm_layers-panel-up-down.png
[Layers show hide]: /images/josm/josm_layers-panel-show-hide.png
[Layers delete]: /images/josm/josm_layers-panel-delete.png
[Layers activate]: /images/josm/josm_layers-panel-activate.png
[GPS in JOSM]: /images/josm/josm_gps-layer.png
[Properties panel]: /images/josm/josm_properties-panel.png
[Nodes mistake]: /images/josm/josm_nodes-selected-mistake.png
[JOSM save button]: /images/josm/josm_save-button.png