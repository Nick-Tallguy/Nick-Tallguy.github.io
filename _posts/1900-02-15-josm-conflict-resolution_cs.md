---
layout: doc
title: JOSM Řešení konfliktů
permalink: /cs/josm/josm-conflict-resolution/
lang: cs
category: josm
---

JOSM Řešení konfliktů
====================

> Zkontrolováno 27.9.2016  

Někdy pracujete v JOSM a při nahrávání všech těch skvělých změn dostanete nepříjemnou zprávu stěžující si na konflikt.  
![conflict detected][]  
Došlo k tomu, že jste stáhli balík dat, který obsahovl bod, kterému říkáme Node A (Uzel A). Pak v průběhu vaší editace, někdo jiný také stáhnul tento Uzel A, změnil ho a uložil změny zpět do OpenStreetMap. A když teď chcete nahrát vaši verzi Uzlu A, je rozdílný oproti tomu v OSM. Proto JOSM neví, kterou verzi Uzlu A by měl uložit.  

Konflikty
----------

Někdy sám JOSM přijde na to, jak konflikt vyřešit a dá vám to vědět podobnou zprávou:  
![resolved automatically][]  
JOSM vám oznámil, že se automaticky rozhodl nenahrát data z lokálního datasetu na hlavní server, protože již byly jiným uživatelem smazány. Pro některé konflikty však neexistuje jednoznačné řešení, které by JOSM mohl provést, a tak ponechá rozhodnutí na uživateli, aby vybral nejlepší postup. Takže je na vás, jak vyřešíte daný konflikt.  

Toto varování po vás chce, abyste se podívali na všechny vaše konflikty ve vrstvě **Data Layer 1**:  
![warning unresolved][]  

Toto dialogové okno vás varuje, že by u vašich úprav mohlo dojít ke konfliktu. Pokud však zkontrolujete server, budete schopni opravit problémy s úpravami dřív, než vzniknou:  
![check on server][]  

Tímto vám JOSM oznamuje, že se mu nepodařilo tento uzel odstranit, protože je součástí nějaké cesty. Aby ho bylo možné odstranit, musí se uživatel vrátit do JOSM, vyřešit konflikt a pak data znovu zkusit nahrát:  
![still in use][]  

Řešení konfliktů
--------------------

Proces řešení konfliktů je docela jednoduchý, ikdyž z počátku bude se může zdát poněkud matoucím. Vpodstatě u každého konfliktu vám JOSM dá na výběr ze dvou možností - vaši verzi objektu a verzi na serveru. Musíte si vybrat zda zachovat vaši verzi, nebo ponechat novou verzi na serveru.  
Možná si říkáte: *Jistěže moje verze, je lepší!* A třeba máte pravdu. Ale vzpomeňte si na náš příklad z úvodu kapitoly. Zatímco jste editoval, jiný maper přidal spoustu informací k nějakému uzlu ve vašem souboru dat. Když vyberete svoji verzi, ztratí se všechny hodnotné informace, které přidal někdo jiný. Proto byste měli zvážit ponechání jejich verze, nebo sloučení obou verzí.  
Když se vám objeví dialogové okno konfliktu, nejlepším řešení je tlačítko **Synchronizovat pouze...**. Možná to bude potřeba udělat u více objektů, ale je dobré vyřešit konflikty jednou pro vždy.  
![synchronize node][]  
Jakmile kliknete na toto tlačítko, objeví se další okno s detailní informací o konfliktu. Chybová zpráva možná vypadá složitě, ale vpodstatě je jednoduchá. Typ konfliktu se dozvíte v záložce s červeným čtverečkem. Náš ukázkový konflikt poukazuje na vlastnosti, lokaci a existenci objektu. Proto jsou v seznamu vypsány souřadnice a stav smazání.  

**Typy konfliktů:**

- **Vlastnosti:**  Objekt byl přesunut (souřadnice) nebo smazán  
- **Značky:**  Značky nesouhlasí  
- **Uzly:**  Nesouhlasí seznam uzlů u dvou cest  
- **Členové:**  Nesouhlasí seznam členů v relaci  
![properties with conflicts][]  

Konflikty se objeví pouze při současné editaci dvěma mapery. Pokud se dojde ke třem a více konfliktům, tak se začnou řetězit. Proto byste měli provádět výběr nebo sloučení maximálně u dvou konfliktů současně. Vybrat verzi vaši nebo někoho druhého nebo je obě sloučit.   

V následujícím příkladu nemáte na výběr sloučení. Klikněte na první buňku, nebo**Moje verze**, pokud věříte, že vaše úpravy jsou správné. V opačném případě vyberte **Jejich verze**.  
![conflicts resolved][]  

Jakmile si vyberete verzi, která je podle vás nejlepší, pak klikněte na **Aplikovat řešení**. Objeví se několik dalších oken a budete na cestě k úspěšnému nahrátí vašich úprav. Udělejte pár dalších úprav. Pak klikněte na **Nahrát**. Následuje toto dialogové okno:  
![command stack][]  

V nabídce **Okna** máte položku **Konflikt**. Toto okno zobrazuje seznam konfliktů. Celkový počet nevyřešených konfliktů je zobrazeno v hlavičce. Kliknutím na konflikt ho vyberete nebo vyřešíte. Je to užitečné, pokud potřebujete vyřešit mnoho konfliktů.  
![one unresolved][]  
Úpravy nemůžete nahrát, dokud tento seznam není prázdný.  

Jak se vyhnout konfliktům
------------------------

### Často nahrávejte změny

Pro minimalizaci šance a počtu konfliktů je důležité průběžně úpravy nahrávat. Konflikty se objevují častěji u těch, kteří mají tendenci ukládat své úpravy na lokální server a do OSM je nahrávají až později. Čím větší je časový odstup od stažení dat a zpětnému nahrání změn na server, tím větší je pravděpodobnost, že někdo mezitím v dané oblasti udělal změny. Pokud jste na Mapathonu a upravujete například silnici, na které může pracovat i někdo jiný, nahrávejte změny co nejčastěji, zhruba každých 6 změn!  

### Provádějte změny jen ve stažené oblasti

Úpravy pouze v oblasti, kterou jste si stáhli, minimalizují pravděpodobnost konfliktu. Dávejte pozor na úpravy mimo vaši oblast. Oblast za hranicí vámi stažené oblasti poznáte v JOSM velmi snadno, protože je tvořena diagonálními čarami.  

![edit outside area][]  

Shrnutí
--------
Při editaci v JOSM, riskujte možnost vzniku konfliktů. Konflikty vznikají při editaci jednoho objektu dvěma lidmi v jednu chvíli. Když pochopíte, jak konflikt vzniká a jak se s ním vypořádat, budete schopni dosáhnout toho, že se ty nejlepší možné úpravy uloží do OpenStreetMap.  


<!-- More stuff, could go into an additional chapter - DO NOT TRANSLATE
## Dodatek. Několik konkrétních konfliktů

### Konflikty značek

Pokud jsou tagy jedné verze objektu jiné než tagy
druhé verze, v dialogovém okně Konfliktů se zobrazí ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png) v
záložce Značky. Klikněte na záložku a tím si vyvoláte dialog pro vyřešení konfliktů se
značkou.

V tomto dialogu jsou tři tabulky, z leva do prava:

1. Moje verze: zobrazuje značky první verze objektu, které se podílejí na
    konfliktu. Obvykle jsou to značky verze objektu,
    kterou máte v lokálním data setu.
2. Sloučené verze: zobrazuje sloučené značky. Tato tabulka je zpočátku
    prázdná. Čím více konfliktů značek vyřešíte, tím více hodnot značek
    se v této tabulce objeví.
3. Jejich verze: zobrazuje značky v druhé verzi objektu
    podílející se na konfliktu. Jsou to obvykle značky
    verze objektu, která je momentálně uložena na serveru.

V příkladu níže mají obě verze značku "name". Hodnota
u obou verzí objektu je různá a proto JOSM podkreslí
daný řádek červenou barvou. Hodnota první verze je
"Secondary School" a druhá verze má hodnotu "Elementary
School". Vy teď musíte rozhodnout, kterou verzi hodnoty si necháte
a kterou zrušíte.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image07.png)

Klikněte na hodnotu, kterou si chcete ponechat, v příkladu je to
hodnota vlevo. Pokud na hodnotu kliknete dvakrát nebo kliknete na
![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image21.png), tak si danou hodnotu ponecháte a zrušíte
tu druhou. Tabulka uprostřed nyní obsahuje hodnotu, kterou zachováte
a pozadí se změní na zelené.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image10.png)

Až se tlačítko Apply Resolutionis aktivuje, můžete uložit své rozhodnutí.
Hodnoty, které jste vybrali, budou aplikovány a dialog se zavře.

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image03.png)

## Řešení rozdílů v seznam uzlů dvou variant cest

Pokud vidíte symbol ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image08.png) v záložce Uzly potom
musíte vyřešit rozdíly v seznamu
[uzlů](http://josm.openstreetmap.de/wiki/Help/Concepts/Object) dvou
[cest](http://josm.openstreetmap.de/wiki/Help/Concepts/Object).
V příslušném panelu jsou tři sloupce (podívejte se na obrázek níže).

1. tabulka vlevo zobrazuje seznam uzlů lokální
    verze objektu
2. tabulka vpravo obsahuje seznam uzlů na serveru
    verze objektu
3.  the table in the middle shows the list of nodes of the merged ways

Initially, the middle table is empty. You should now decide which nodes
to keep from the local dataset (the leftmost table) and which from the
server dataset (the rightmost table).

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image24.png)

### The standard workflow

The standard workflow to resolve conflicts in the node lists of two
[object
versions](http://josm.openstreetmap.de/wiki/Help/Concepts/Object)consists
of three steps:

1.  Pick nodes from either object version and reorder the resulting node
    list if necessary
2.  Freezethe resulting merged node list by clicking on the button
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png). When you freeze the merged node list you
    tell JOSM that all conflicts in the node list are resolved.
3.  Apply the resolution

### A simple workflow: Keep the node list from your local object version

The following example shows the workflow when you decide to keep all nodes in the same order from your local object version.

-   First, select all elements in the leftmost table (either using the mouse or by 
    pressing Ctrl-A in the table) (see next screen shot):

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image04.png)

-   Then, click 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image19.png)
    to copy the selected nodes to the middle table with the merged nodes:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image01.png)

-   Finally, click
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image16.png)
    to freeze the resulting merged node list:

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image20.png)

    The symbol in the nodes tab now switched to 
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image00.png)
    and you can apply the merge decisions.

### Support for comparing node lists

It can be difficult to find the differences between the node list of of two object versions, in particular for ways with many nodes.

The Conflict Dialog supports you in finding the differences. It can compare two of the node lists displayed ("my" node list, the merged node list, and "their" node list) and it can render the differences between them with specific background colors.

From the following combo box you can select which pair of node lists to compare:

![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image15.png)

1.  My with Their: compares the leftmost table with the rightmost table
    in the Conflict Dialog
2.  My with Merged: compares the leftmost table with the middle table in
    the Conflict Dialog
3.  Their with Merge: compares the middle table with the rightmost table
    in the Conflict Dialog

Depending on the position of a node in the list different background
colors are used:

1.  The node is in this list only. It isn't present in the opposite list:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image13.png)
2.  The node is in both lists, but it is on different positions:
    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image02.png)
3.  White background means that a node is in both lists at the same
    position.

    ![]({{site.baseurl}}/images/intermediate/en_conflict_resolution_image17.png)

-->

[conflict detected]: /images/josm/conflict-detected.png
[resolved automatically]: /images/josm/resolved-automatically.png
[warning unresolved]: /images/josm/warning-unresolved.png
[check on server]: /images/josm/check-on-server.png
[still in use]: /images/josm/still-in-use.png
[synchronize node]: /images/josm/synchronize-node.png
[properties with conflicts]: /images/josm/properties-with-conflicts.png
[conflicts resolved]: /images/josm/conflicts-resolved.png
[synchronize node]: /images/josm/synchronize-node.png
[command stack]: /images/josm/command-stack.png
[one unresolved]: /images/josm/one-unresolved.png
[edit outside area]: /images/josm/edit-outside-area.png