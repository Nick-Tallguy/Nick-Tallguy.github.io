---
layout: doc
title: Tasking Manager – návod pro správce
permalink: /cs/coordination/tm-admin/
lang: cs
category: coordination
---

# Tasking Manager – návod pro správce


**Pokud se uživatelské rozhraní verze, kterou používáte, liší od zde popsané verze, měli byste se podívat do [našeho přehledu verzí](/en/coordination/tm-disambiguation)**.

Rejstřík sekcí
-------------
-  [Login and access](/en/coordination/tm-admin/#login-and-access)
-  [Oprávnění](/en/coordination/tm-admin/#permissions)
-  [Vytvořit projekt](/en/coordination/tm-admin/#create-a-mapping-project)
    -  [Definice oblasti mapování](/en/coordination/tm-admin/#define-mapping-area)
    -  [Definovat úkoly](/en/coordination/tm-admin/#define-tasks)
    -  [Project area trim](/en/coordination/tm-admin/#project-area-trim)
    -  [Pokročilé: Definujte oblasti a úkoly mapování projektu s importovanými geodaty.](/en/coordination/tm-admin/#advanced-define-mapping-project-areas-and-tasks-with-imported-geodata)
-  [Edit a mapping project](/en/coordination/tm-admin/#edit-a-mapping-project)
    -  [Popis - první věc, kterou se uživatelé dozvědí o vašem projektu.](/en/coordination/tm-admin/#description)
    -  [Instructions - what the users should do](/en/coordination/tm-admin/#instructions)
    -  [Metadata - kam projekt patří](/en/coordination/tm-admin/#metadata)
    -  [Prioritní oblasti - kde by uživatelé měli začít mapovat](/en/coordination/tm-admin/#priority-areas)
    -  [Snímky - základ pro mapování](/en/coordination/tm-admin/#imagery)
    -  [Oprávnění - kdo je oprávněn mapovat a validovat](/en/coordination/tm-admin/#permissions)
    -  [Užitečné rady - jak vyplnit všechna tato pole](/en/coordination/tm-admin/#helpful-hints)
    -  [Publish - do not forget or you never get work done](/en/coordination/tm-admin/#publish)

Tasking Manager je základním nástrojem pro koordinaci mapování v OpenStreetMap. Podporuje humanitární mapovací iniciativy, pořádání mapathonů nebo vytváření mapovacích úloh pro studenty. Aplikace rozděluje oblast zájmu na zvládnutelné geografické části, které lze rychle a ve spolupráci dokončit. Tento přístup umožňuje rozdělit úkoly mnoha jednotlivým mapovatelům a zároveň omezit možné konflikty při úpravách. 

Software podporuje přesné a kvalitní mapování tím, že poskytuje konzistentní sadu pokynů pro vaše mapovače (např. "zmapujte všechny silnice a budovy"). Stručně řečeno, Správce úloh je způsob, jak nastavit a řídit pracovní postup pro otevřené mapovací činnosti. 

Tato příručka popisuje základní správu Tasking Manageru. Zahrnuje pokyny k vytváření a úpravám mapovacích projektů a manipulaci s oprávněními pro mapování a revizi dat z hromadných zdrojů.

## Přihlášení a přístup

K přihlášení do Tasking Manageru je zapotřebí účet OpenStreetMap (OSM). Můžete navštívit [HOT Tasking Manager](http://tasks.hotosm.org) nebo jakoukoli jinou instanci komunity podle vašich preferencí. Tam klikněte na `Přihlásit se` a budete přesměrováni na [webové stránky OpenStreetMap](https://www.openstreetmap.org), kde si vytvoříte účet. Nebo klikněte na `Přihlásit se`, pokud již nějaký máte, a ve vyskakovacím okně můžete Správci úloh udělit omezený přístup ke svému účtu OSM.

## Permissions

The most basic user level is **mapper**. Mappers are able to login to the Tasking Manager to find and select a mapping project to work on. All mapper functionality is described in the [LearnOSM Tasking Manager Mapper Guide](/en/coordination/tm-user/). Note that some projects, such as those in draft state (i.e. unpublished), or restricted to certain teams, are not visible to regular mappers

Všechna zvláštní oprávnění mají na starosti *organizace* a *týmy*. Hlavní zastřešující organizací je **organizace** a pod každou organizací lze vytvářet mapovací projekty a týmy. Organizace může např. představovat uživatele dat, jako je humanitární organizace, nebo jakoukoli komunitu OpenStreetMap. Pokud potřebujete nastavit svou organizaci v Tasking Manageru, obraťte se na technické správce instance Tasking Manageru.

Každá organizace má jednoho nebo více **správců**. Ti mají oprávnění vytvářet a upravovat související projekty. Všechny možnosti správy jsou přístupné prostřednictvím sekce `Správa` v hlavní navigaci.

Administrators of an organization can create **teams**. Teams are groups of users and they can be publicly visible or private. They also have one or more managers. Teams can be set up so that users can join a team on their own or 'invite only', which means that the team managers are notified about requests to join and must decide upon them.

Pro každý projekt mohou správci přiřadit konkrétní týmy, kterým mohou udělit nebo omezit přístup k mapování, definovat, kdo může ověřovat data nebo kdo jiný může upravovat metadata projektu.


## Create a mapping project

Chcete-li se dostat do sekce správy, klikněte na `Správa` v navigaci nahoře, v prvním řádku uvidíte místo pro 'Projekty'. Vedle něj klikněte na tlačítko `Přidat` a jeden z nich vytvořte.

![TM Add Project][]

Můžete si vybrat mezi definováním oblasti zájmu (mapovací oblasti) vašeho mapovacího projektu buď pomocí:

* Možnost 1: `Nakreslete` oblast zájmu na webovou mapu (upřednostňovaná metoda)
* Option 2: `Upload file` to import the area of interest from a geojson, KML or shapefile. This can also include specific task (find more information in the "Advanced project creation" part below)

![TM New][]

### Define mapping area

![TM Draw AoI][]

1. Pomocí tlačítek v horní části můžete přepínat na jiné vrstvy pozadí. 
1. Click the `Draw` button on the left.
2. Chcete-li nakreslit polygon představující oblast mapování v rámečku mapy, podržte pravé tlačítko myši a přesuňte mapu bez kliknutí, čímž přidáte uzel. Polygon by měl těsně rámovat oblast zájmu. Tím ušetříte čas při vyplňování dlaždic, které nejsou předmětem zájmu (např. oceán, les).
3. Click on your starting point to complete the polygon.
4. Pokračujte v přidávání uzlů jediným kliknutím myší. Dvakrát klikněte myší a polygon dokončíte. <!-Po dokončení polygonu můžete uzly přesouvat nebo přidávat nové, abyste získali oblast přesně podle svých představ.-->

### Define tasks

Po vymezení celkové oblasti mapování se tato oblast rozdělí na menší oblasti zvané *Úlohy*. Tyto úkoly musí mít přiměřenou velikost, aby mohly být dokončeny rychle a ve spolupráci s mnoha lidmi, kteří přispívají ke společnému cíli projektu.

![TM Tile Sizes][]

The mapping area is automatically split into grid cells and each cell becomes a task. Use the `Larger` and `Smaller` buttons to adjust the overall size of the task squares.

> Use an satellite imagery to determine a good task size is very helpful. You can switch between several background map layers with the buttons on the top of the map. <!-- If you have custom imagery for the project, you can also load that in by using the button in the upper right of the map and putting in a TMS or WMS url. -->

Po nastavení základní velikosti úlohy mřížky můžete některé úlohy selektivně rozdělit na čtyři menší pomocí tlačítka `Kliknutím na rozdělení`. Nebo můžete `Kreslit oblast pro rozdělení`, což vám umožní nakreslit polygon nad oblastí a všechny úlohy v ní budou rozděleny vždy na čtyři nové. Tlačítko Obnovit odstraní všechna vaše vlastní rozdělení.

**Task sizes**:  Please take you time and define very carefully suitable task sizes! The optimal task size depends heavily on the amount of objects that are requested for being mapped in each task. Tasks sizes on rural areas are usually larger than for mapping projects, which are about digitizing buildings in cities por dense settlement areas. Ideally, try mapping an area of the project yourself to see the challenges and effort to map it. This should help you to decide on an optimum square size.

Doporučujeme zvolit takové rozměry úkolů, o kterých jste přesvědčeni, že je mapovatelé zvládnou za 15-20 minut.

> Úvahy při rozhodování o velikosti úloh:
> - Začátečníci potřebují zhruba čtyřikrát delší dobu než zkušení mappeři.
> - Začínající mapovatelé si musí vyvinout oko pro satelitní snímky. Všimnout si správných prvků může být obtížné.
> - Začínající mapovatelé se potýkají s problémy při sledování mnoha podobných prvků, jako jsou budovy.
> - Čtverec lze později rozdělit, ale neexistuje možnost spojit čtverce dohromady.
> - Na okrajích a rozích úloh je vždy možnost dostat se do konfliktu s kolegou mapovačem vedle vás. Menší úkoly znamenají více rohů a okrajů. Existuje kompromis ve velikosti, aby to bylo pro mapovače snadné, ale aby mezi nimi nevznikaly konflikty při mapování.

Po dokončení definice velikostí úloh klikněte na tlačítko `Další`.

### Oříznutí projektové plochy

![TM Trim][]

Po určení velikosti úloh budete mít možnost oříznout úlohy tak, aby se rozprostíraly na ploše mapování. Pokud jednoduše klikněte na `Ořezat`, vynecháte všechny čtverce úloh, které neobsahují mapovací oblast.

![TM Trim coarse][]

Pokud před kliknutím na tlačítko `Ořezat` zaškrtnete políčko o ořezávání na přesnou oblast, získáte na okraji libovolné tvary úloh.

![TM Trim fine][]

Po dokončení ořezu mapovací oblasti klikněte na tlačítko `Další`.


### Uložte projekt

Give the project a title (can be edited on the next screen) and click `Create`. First step is done.

Více informací o tom, jak do projektu přidat popisy a instrukce a zveřejnit jej pro mapovače, najdete níže v kapitole "Úprava mapovacího projektu".

### Pokročilé: Definujte oblasti a úkoly mapování projektu s importovanými geodaty.

Geoprostorové desktopové aplikace, jako je JOSM nebo QGIS, umožňují mapovatelům přesněji zakreslit oblasti zájmu ve srovnání s klouzavou webovou mapou uvnitř Tasking Manageru. Můžete také předem určit speciální tvary a velikosti úloh.

> Tasking Manager je webová aplikace. Ujistěte se, že velikost souboru, který nahráváte, je zmenšená. Možná budete chtít nejprve zjednodušit geometrii a odříznout příliš mnoho číslic souřadnic.

**Nahrajte soubor GeoJSON nebo KML s oblastí zájmu, která má být mapována**

1. In the first step of creating a project click on option 2, the ‘Upload file’ button.
2. V okně Nahrát soubor přejděte na svůj soubor.
3. Click the file name to highlight the file and then click ‘Open’.
4. Importované oblasti zájmu nelze upravovat.

After uploading a file to the Tasking Manager you can select if you want to define the tasks either as 

1. `Čtvercová síť` s výše popsanými funkcemi pro definování úloh.
2. `Arbitrary Geometries`, coming from the file you just uploaded.

**Define arbitrary geometries**

Pokud jste nahráli soubor pro definici oblasti projektu, může tento soubor obsahovat také tvary jednotlivých úloh. Např. pokud se oblast zájmu skládá z jednoho polygonu, bude mít projekt pouze jednu úlohu. To by se mělo používat pouze ve zvláštních případech a ze specifických důvodů. Například import projektu silnic může potřebovat vlastní tvary úloh nebo výstup z procesu redukce mapové oblasti.

Upozorňujeme, že libovolné geometrie nelze rozdělit. Měly by se používat pouze ve zvláštních případech, protože mají vliv na výkonnost nástroje.

## Úprava projektu mapování

After a project has been initially set up and created, you have to edit its information and settings:

- Description - Used for display in lists and motivational information for mappers
- Pokyny - Podrobné pokyny k tomu, co a jak mapovat potřebné objekty/subjekty/funkce.
- Metadata - dodatečné informace používané pro kategorizaci projektu. Často se používá při filtrování úplného seznamu projektů.
- Obrázky - Místo pro zadání adresy URL TMS a požadované licence.
- Prioritní oblasti - umožňuje určit části projektu, které by měly být mapovány jako první.
- Oprávnění - umožňuje omezit přístup k projektu pro mapování a ověřování.
- Nastavení - Datum platnosti projektu a Předvolby JOSM.
- Akce - Odesílání zpráv přispěvatelům, validace a zneplatnění celého projektu jedním kliknutím.

> Pečlivé vyplnění těchto údajů je nezbytnou součástí úspěšného mapovacího projektu. Je velmi důležité, aby cíle a zdroje projektu byly jasně sděleny, aby mapovatelé znali konkrétní a důležité informace. Mějte na paměti, že mapovatelé nemusí mít předchozí zkušenosti s OpenStreetMap a nebudou znát pokyny pro označování.
> Je vhodné omezit jeden projekt na jednu třídu mapovaných objektů. Pokud potřebujete podkladovou mapu oblasti, raději ji rozdělte do několika projektů, jeden pro silnice, druhý pro budovy atd. Začátečníci se nyní mohou zaměřit na malou třídu objektů a zároveň se naučit, jak je správně mapovat.

### Popis

![TM Description][]

This screen allows you set the project status as Draft, Published, or Archived, priority, a short description used in project listings and the long description available once a mapper has selected the project.

Both the short and long description should provide information about why the project exists, who will use the data and the expected the impact the mapping will have. These fields support Markdown text and can include images and videos.

### Instructions

![TM Instructions][]

**Prvky k mapování** - Seznam prvků, které mají uživatelé mapovat. Obecně platí, že čím méně prvků, tím lépe, protože je pravděpodobnější, že budou dokončeny.

> Projekty, které vyžadují mapování velkého množství entit, jsou pro mapovače obtížné a obtížně se ověřují. Trvá mnohem déle, než získáte dobře použitelnou sadu dat. Velikost úloh je také obtížné zefektivnit pro různé typy mapování, např. budovy potřebují malé čtverce úloh, silnice a vodní toky potřebují větší čtverce úloh. Pro mapování budov a liniových prvků je osvědčeným postupem vytvořit více projektů na stejném území.

**Komentář k sadě změn** - Toto je výchozí komentář k sadě změn, který bude připojen ke každému odeslání dat do OSM. Obvykle obsahuje něco, co identifikuje správce úloh, na kterém se projekt nachází, a prvky, které byly mapovány. Často se používá pro "hash tagy", které pomáhají identifikovat organizaci, která mapování požaduje a/nebo provádí. Může také popisovat prováděné mapování, například "Mapování budov".

> Users should be instructed to fill in meaningful comments about what they mapped, but helping them out with good default comments is always a good idea.

**Podrobné pokyny** - Zde bude umístěna většina podrobných pokynů a očekáváme, že si je každý mapovač a validátor pečlivě přečte a bude se jimi řídit.

Viz níže uvedené poznámky k vytváření dobrých pokynů.

**Pokyny k úkolu** - Tyto pokyny se zobrazí, když mapovač vybere úkol, a mají také speciální funkci, která umožňuje vytvářet adresy URL specifické pro úkoly na základě typických souřadnic x, y, z "slippy map".

### Metadata

![TM Metadata][]

> All of these fields should be filled in and will become non-optional in future versions of the Tasking Manager.

**Úroveň mapování** - Jedná se o údaj o náročnosti projektu mapování. K dispozici jsou 3 možnosti: Začátečník, Středně pokročilý a Pokročilý. Toto nastavení naznačuje mapovateli, jakou úroveň zkušeností by měl mít, aby byl při mapování projektu co nejúspěšnější. Lze jej použít při filtrování seznamu projektů a navrhovanou úroveň lze vyžadovat na obrazovce Oprávnění.

**Typ mapování** - Používá se při filtrování seznamu projektů a pomáhá mapovačům najít projekty, které chtějí mapovat.

**Organizace** - Organizace, jejíž projektoví manažeři by měli mít pro tento projekt oprávnění ke správě. Organizace musí být již dříve zaregistrována ve Správci úkolů.

**Interests** - Used to suggest projects to mappers. Mappers specify their interests in their profile.

**OSMCha filter ID** - OSMCha is offered as a link from the contributions overview. The standard filter confines output to the bounding box of the project and to contributions not older than the project creation date and with the name of the project in the changeset comment. If you think something different would be a better approach  to analyze the changesets of your project then either provide an OSMCha URL or an OSMCha filter id here.

### Prioritní oblasti

![TM Priority Area][]

Use the provided tools to draw areas that should be mapped first. You can have multiple priority areas for a Project. You can also change priority areas at any time.

> During disaster mapping, early in the event, having a large project mapping area and using priority areas to focus mapping as new information comes in is a best practice.

### Imagery

Pole URL - pole, které přebírá adresu URL TMS, která se automaticky předá editoru OSM, který mapovač nebo validátor používá. Postupujte podle příkladu, je velmi důležité, aby bylo správně naformátováno a fungovalo ve všech editorech.

Licence - Pokud je pro mapování vyžadována specifická licence, kterou může mapovač akceptovat při používání snímků, můžete ji zde vybrat. Pokud potřebujete licenci, která není k dispozici, můžete kontaktovat správce instalace Tasking Manageru a požádat ho o její přidání.

### Oprávnění

![TM Permissions][]

**Oprávnění k mapování** - Umožňuje vyžadovat, aby měl mapovač správnou úroveň pro mapování v projektu (obrazovka Metadata výše). Úrovně mapování lze nastavit ručně, ale jsou automaticky aplikovány na základě celkového počtu sad změn. Můžete také požadovat, aby byl mapovač součástí týmu. Týmy lze vybrat níže

**Oprávnění k validaci** - Umožňuje vyžadovat, aby byl mapovač na správné úrovni pro validaci projektu (obrazovka Metadata výše). Úrovně mapování lze nastavit ručně, ale jsou automaticky aplikovány na základě celkového počtu sad změn. Můžete také vyžadovat, aby byl validátor součástí týmu. Týmy lze vybrat níže

**Teams** - Select teams for mapping and validation. If you do so then you can restrict mapping and/or validation to team members using the controls above. You may select several teams for each role. Select a team, select a role and press 'Add'. Once you added a team you may edit its role or delete the assignment.

**Privacy** - This restricts access to the project to those users who are part of the team to which the project belongs.

### Settings

![TM Settings][]

**Default Language** - Sets the default instructions language for a project.

**Editoři** - Omezí dostupné editory na ty, které jsou zaškrtnuté. Můžete určit různé skupiny pro mapování a pro ověřování.

**Enforce random selection** - If checked then users cannot select a specific task for mapping.

### Akce

![TM Actions][]

**Zpráva všem přispěvatelům** - odešle zprávu Správce úloh všem, kteří označili úkol za splněný nebo platný. Lze ji použít k poděkování přispěvatelům a/nebo k jejich nasměrování na další projekty v portfoliu/kampani. Měla by být také použita před použitím jedné ze dvou níže popsaných možností Validovat/neplatit všechny úkoly.

**Mapping, validation and invalidation** - This will set the status of all tasks to either mapped, validated or invalidated. Handle with care as there is no undo.

**Resetovat úkoly** - Tím se všechny úkoly vrátí do původního stavu, ale předchozí akce budou stále dostupné v historii úkolů. Zacházejte s nimi opatrně, protože je nelze vrátit zpět.

**Převod vlastnictví projektu** - Umožňuje určit jiného uživatele, který se stane vlastníkem tohoto projektu. Zacházejte s ním opatrně, protože jej nelze vrátit zpět.

**Clone Project** - This will create a duplicate of the project except for the mapping area, task grid and priority areas which you will need to re-import or re-draw.

**Odstranit projekt** - Tím se projekt trvale odstraní ze Správce úloh. Zacházejte s ním opatrně, protože jej nelze vrátit zpět. Tato akce již není k dispozici, jakmile byly do projektu vloženy jakékoli příspěvky.

### Poznámky k pokynům

Používejte srozumitelný jazyk, protože vaše cílové publikum nemusí být rodilí mluvčí angličtiny.

1. The title of the project should already reveal what entities should be mapped. Prefer a title such as
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. The most important messages should appear on the instruction tab first to ensure they are read. This would include any special imagery to use instead of Bing. The first sentences could mention that it is not required to map every single house if the project is about roads and residential areas, for example. Or that it is required to map every house if the project is to be used for population density estimates. These are the messages that should also appear on the description tab.
3. Other points of clarification: If the project is suitable for mappers with a certain level of experience only. For example, the project uses imports or existing data should be realigned to GPS traces or some other imagery (cf. the previous section). Phrase it so that new mappers will feel invited contributing to other projects but understand that advanced techniques are required in this instance.
4. Existují pokyny, které se týkají běžných chyb, s nimiž se při validaci setkáváme. Příkladem je kompilace Blakea Girardota o [mapování v západní Africe](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Použijte odkaz v pokynech a vysvětlete, že dodržování těchto pokynů je nutné.
5. Základním zdrojem informací o tagování je [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). Pro mnoho úkolů souvisejících s HOT je vhodnou specializací stránka [Tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa), kterou vřele doporučujeme ke čtení každému mapperovi. Pokud váš projekt musí dodržovat jiné standardy tagování, pak si podobnou stránku napište na wiki a uveďte na ni odkaz ve svých pokynech.


### Úvahy týkající se zobrazování

In most cases we use the "standard" Bing imagery. But there are situations where you might want to choose an alternative source:

1. Služba Bing neposkytuje pro vaši oblast mapování pokrytí s vysokým rozlišením.
2. Bing has considerable cloud cover in this area.
3. Pro vyhodnocení po katastrofě potřebujete novější snímky.

If Bing does not prove adequate then Mapbox is the next choice. You should only look for other sources if neither of these two meet your requirements.

In such cases it is not sufficient to choose a license-compatible source and make it available through a WMS or TMS service. Your mapping area has probably already been partially mapped using Bing or Mapbox imagery and there might be a noticeable offset between images. You must have a close look at various locations of your mapping area and determine the offset between your imagery and previously mapped data. If the existing OSM data are offset with respect to your imagery but fit Bing imagery then we usually assume that Bing is the "gold standard" unless we have GPS traces which prove that this assumption is wrong.

Pokud je mezi vašimi snímky a snímky Bing v celé oblasti mapování konstantní posun, je možné jej na serveru opravit, aby se snímky z různých zdrojů načtené v editoru shodovaly. Pokud to není možné, pokud se posun v celé mapovací oblasti mění nebo pokud jsou stávající data sladěna s různými zdroji, pak je čas na plán B:

Důležité je, že musíte vypracovat strategii, jak se s těmito problémy vypořádat, a poskytnout mapovačům a validátorům podrobné pokyny. Důrazně doporučujeme, abyste takový projekt vyhlásili "pouze pro zkušené mapovače" a vysvětlili, že zkušenost v tomto případě neznamená mít zmapováno více než 200 budov, ale již se vypořádat s problémy se zarovnáním a různými zdroji snímků.

One possible strategy could include these steps:

1. Clearly state which imagery is to be considered the reference to which anything else should be aligned. In this case let us assume that the reference is Bing.
2. Ujistěte se, že všechny stávající prvky, které jsou viditelné i v aplikaci Bing, jsou v souladu se snímky Bing, tj. v případě potřeby je zarovnejte.
3. Align the alternative imagery to existing features (and thus to Bing) using the imagery offset function of the editor.
4. Add new features from the now correctly aligned alternative imagery.

Je důležité, aby se krok 3 opakoval pro každou úlohu projektu a aby jednotlivé čtverce úloh nebyly příliš velké, protože posuny snímků se mohou v mapovací oblasti značně lišit, zejména pokud není terén rovinatý. Napříč projektem se mohou vyskytnout i nespojitosti snímků - dávejte si na ně pozor a upozorněte přispěvatele na takový problém.

Zde je několik doporučených informací, které byste mohli zahrnout do pokynů k projektu:

- [general guidelines for various editors](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [an animated gif on imagery alignment in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [kapitola o zarovnání snímků josm v aplikaci learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


### Proofread and Publish

Proofread the various tabs to ensure wording and formatting are correct, and instructions are clear. If you need to make changes or refinements to your project, click the ‘Edit’ link in the upper right hand corner of the page. 
If the project is ready for mapping, click the ‘Publish’ link. Once the project is published, it is available for mapping to anyone with an OSM account, unless a group of users was specified in the ‘Allowed Users’ tab, in which case only the allowed users would be able to work on it.  If necessary, edits can still be made to the project after publication by clicking on the ‘Edit’ link.

[TM Tile Sizes]: /images/coordination/tm4_tile_sizes.png
[TM Add Project]: /images/coordination/tm4_new_project.png
[TM New]: /images/coordination/tm4_create_new.png
[TM Draw AoI]: /images/coordination/tm4_draw_aoi.png
[TM Trim]: /images/coordination/tm4_trim1.png
[TM Trim coarse]: /images/coordination/tm4_trim2.png
[TM Trim fine]: /images/coordination/tm4_trim3.png
[TM Description]: /images/coordination/tm4_description.png
[TM Instructions]: /images/coordination/tm4_instructions.png
[TM Metadata]: /images/coordination/tm4_metadata.png
[TM Priority Area]: /images/coordination/tm4_priority_area.png
[TM Permissions]: /images/coordination/tm4_permissions.png
[TM Settings]: /images/coordination/tm4_settings.png
[TM Actions]: /images/coordination/tm4_actions.png
