---
layout: doc
title: Tasking Manager – návod pro správce
permalink: /cs/coordination/tm-admin/
lang: cs
category: coordination
---

# Tasking Manager – návod pro správce


**Pokud se uživatelské rozhraní verze, kterou používáte, liší od zde popsané verze, měli byste se podívat do [našeho přehledu verzí](/en/coordination/tm-disambiguation)**.

Section Index
-------------
-  [Login and access](/en/coordination/tm-admin/#login-and-access)
-  [Permissions](/en/coordination/tm-admin/#permissions)
-  [Vytvořit projekt](/en/coordination/tm-admin/#create-a-mapping-project)
    -  [Define mapping area](/en/coordination/tm-admin/#define-mapping-area)
    -  [Define tasks](/en/coordination/tm-admin/#define-tasks)
    -  [Project area trim](/en/coordination/tm-admin/#project-area-trim)
    -  [Advanced: Define mapping project areas and tasks with imported geodata](/en/coordination/tm-admin/#advanced-define-mapping-project-areas-and-tasks-with-imported-geodata)
-  [Edit a mapping project](/en/coordination/tm-admin/#edit-a-mapping-project)
    -  [Popis - první věc, kterou se uživatelé dozvědí o vašem projektu.](/en/coordination/tm-admin/#description)
    -  [Instructions - what the users should do](/en/coordination/tm-admin/#instructions)
    -  [Metadata - kam projekt patří](/en/coordination/tm-admin/#metadata)
    -  [Prioritní oblasti - kde by uživatelé měli začít mapovat](/en/coordination/tm-admin/#priority-areas)
    -  [Snímky - základ pro mapování](/en/coordination/tm-admin/#imagery)
    -  [Permissions - who is allowed to map and validate](/en/coordination/tm-admin/#permissions)
    -  [Užitečné rady - jak vyplnit všechna tato pole](/en/coordination/tm-admin/#helpful-hints)
    -  [Publish - do not forget or you never get work done](/en/coordination/tm-admin/#publish)

The Tasking Manager is the essential tool to coordinate mapping on OpenStreetMap. It supports humanitarian mapping initiatives, conducting mapathons or creating mapping tasks for students. The application divides an area of interest into manageable geographic chunks that can be completed rapidly and collaboratively. This approach allows the distribution of tasks to many individual mappers, while reducing possible editing conflicts. 

The Software encourages accurate and quality mapping data by providing a consistent set of instructions for your mappers (e.g. 'map all roads and buildings'). In short, the Tasking Manager is how you set up and direct the workflow for open mapping activities. 

Tato příručka popisuje základní správu Tasking Manageru. Zahrnuje pokyny k vytváření a úpravám mapovacích projektů a manipulaci s oprávněními pro mapování a revizi dat z hromadných zdrojů.

## Login and access

K přihlášení do Tasking Manageru je zapotřebí účet OpenStreetMap (OSM). Můžete navštívit [HOT Tasking Manager](http://tasks.hotosm.org) nebo jakoukoli jinou instanci komunity podle vašich preferencí. Tam klikněte na `Přihlásit se` a budete přesměrováni na [webové stránky OpenStreetMap](https://www.openstreetmap.org), kde si vytvoříte účet. Nebo klikněte na `Přihlásit se`, pokud již nějaký máte, a ve vyskakovacím okně můžete Správci úloh udělit omezený přístup ke svému účtu OSM.

## Permissions

The most basic user level is **mapper**. Mappers are able to login to the Tasking Manager to find and select a mapping project to work on. All mapper functionality is described in the [LearnOSM Tasking Manager Mapper Guide](/en/coordination/tm-user/). Note that some projects, such as those in draft state (i.e. unpublished), or restricted to certain teams, are not visible to regular mappers

Všechna zvláštní oprávnění mají na starosti *organizace* a *týmy*. Hlavní zastřešující organizací je **organizace** a pod každou organizací lze vytvářet mapovací projekty a týmy. Organizace může např. představovat uživatele dat, jako je humanitární organizace, nebo jakoukoli komunitu OpenStreetMap. Pokud potřebujete nastavit svou organizaci v Tasking Manageru, obraťte se na technické správce instance Tasking Manageru.

Every organization has one or more **administrators**. They have the permission to create and modify associated projects. All administration options can be accessed through the `Manage` section in the main navigation.

Administrators of an organization can create **teams**. Teams are groups of users and they can be publicly visible or private. They also have one or more managers. Teams can be set up so that users can join a team on their own or 'invite only', which means that the team managers are notified about requests to join and must decide upon them.

Pro každý projekt mohou správci přiřadit konkrétní týmy, kterým mohou udělit nebo omezit přístup k mapování, definovat, kdo může ověřovat data nebo kdo jiný může upravovat metadata projektu.


## Create a mapping project

To access the administation section, click on `Manage` in the navigation on the top, In the first row you see a space for 'Projects'. Next to it, click on the `Add` button to create one.

![TM Add Project][]

Můžete si vybrat mezi definováním oblasti zájmu (mapovací oblasti) vašeho mapovacího projektu buď pomocí:

* Možnost 1: `Nakreslete` oblast zájmu na webovou mapu (upřednostňovaná metoda)
* Option 2: `Upload file` to import the area of interest from a geojson, KML or shapefile. This can also include specific task (find more information in the "Advanced project creation" part below)

![TM New][]

### Define mapping area

![TM Draw AoI][]

1. Pomocí tlačítek v horní části můžete přepínat na jiné vrstvy pozadí. 
1. Click the `Draw` button on the left.
2. To draw a polygon representing the mapping area in the map frame hold the right mouse button down to move the map without clicking, which will add a node. The polygon should tightly frame the area of interest. This saves time for completing tiles that are not of interest (i.e. ocean, forest).
3. Click on your starting point to complete the polygon.
4. Pokračujte v přidávání uzlů jediným kliknutím myší. Dvakrát klikněte myší a polygon dokončíte. <!-Po dokončení polygonu můžete uzly přesouvat nebo přidávat nové, abyste získali oblast přesně podle svých představ.-->

### Define tasks

Po vymezení celkové oblasti mapování se tato oblast rozdělí na menší oblasti zvané *Úlohy*. Tyto úkoly musí mít přiměřenou velikost, aby mohly být dokončeny rychle a ve spolupráci s mnoha lidmi, kteří přispívají ke společnému cíli projektu.

![TM Tile Sizes][]

The mapping area is automatically split into grid cells and each cell becomes a task. Use the `Larger` and `Smaller` buttons to adjust the overall size of the task squares.

> Use an satellite imagery to determine a good task size is very helpful. You can switch between several background map layers with the buttons on the top of the map. <!-- If you have custom imagery for the project, you can also load that in by using the button in the upper right of the map and putting in a TMS or WMS url. -->

Po nastavení základní velikosti úlohy mřížky můžete některé úlohy selektivně rozdělit na čtyři menší pomocí tlačítka `Kliknutím na rozdělení`. Nebo můžete `Kreslit oblast pro rozdělení`, což vám umožní nakreslit polygon nad oblastí a všechny úlohy v ní budou rozděleny vždy na čtyři nové. Tlačítko Obnovit odstraní všechna vaše vlastní rozdělení.

**Task sizes**:  Please take you time and define very carefully suitable task sizes! The optimal task size depends heavily on the amount of objects that are requested for being mapped in each task. Tasks sizes on rural areas are usually larger than for mapping projects, which are about digitizing buildings in cities por dense settlement areas. Ideally, try mapping an area of the project yourself to see the challenges and effort to map it. This should help you to decide on an optimum square size.

It is recommended to choose task sizes that you are confident mappers can complete them in 15-20 minutes.

> Considerations for deciding on task sizes:
> -  Beginner mappers roughly needs four times as long as an experienced mappers.
> -  Beginner mappers need to develop an eye for satellite imagery. Spotting the right features might be difficult.
> -  Beginner mappers face challenges tracing a lot similar features such as buildings.
> -  A square may be split later on, but there is no option to join squares together.
> -  On the edge and corners of tasks, there is always the potential to get in conflict with a fellow mapper next to you. Smaller tasks means more corners and edges. There is a tradeoff in the size to make it easy for mappers, but to not produce mapping conflicts between them.

Po dokončení definice velikostí úloh klikněte na tlačítko `Další`.

### Project Area Trim

![TM Trim][]

Po určení velikosti úloh budete mít možnost oříznout úlohy tak, aby se rozprostíraly na ploše mapování. Pokud jednoduše klikněte na `Ořezat`, vynecháte všechny čtverce úloh, které neobsahují mapovací oblast.

![TM Trim coarse][]

If you check the box about trimming to the exact area before clicking on `Trim` then you obtain arbitrary task shapes at the fringe

![TM Trim fine][]

Po dokončení ořezu mapovací oblasti klikněte na tlačítko `Další`.


### Uložte projekt

Give the project a title (can be edited on the next screen) and click `Create`. First step is done.

Více informací o tom, jak do projektu přidat popisy a instrukce a zveřejnit jej pro mapovače, najdete níže v kapitole "Úprava mapovacího projektu".

### Pokročilé: Definujte oblasti a úkoly mapování projektu s importovanými geodaty.

Geoprostorové desktopové aplikace, jako je JOSM nebo QGIS, umožňují mapovatelům přesněji zakreslit oblasti zájmu ve srovnání s klouzavou webovou mapou uvnitř Tasking Manageru. Můžete také předem určit speciální tvary a velikosti úloh.

> The Tasking Manager is a web application. Please make sure the file you upload is reduced in it's size. You might want to simplify geometries first and cut off too many digits of the coordinates.

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
- Imagery - Place to provide a TMS URL and License required.
- Prioritní oblasti - umožňuje určit části projektu, které by měly být mapovány jako první.
- Oprávnění - umožňuje omezit přístup k projektu pro mapování a ověřování.
- Settings - Project due date and JOSM Presets.
- Akce - Odesílání zpráv přispěvatelům, validace a zneplatnění celého projektu jedním kliknutím.

> Filling in this information carefully is an essential part of a successful mapping project. It is very important project objectives and resources are clearly communicated so mappers are aware of specific and important information. Keep in mind, mappers may not have previous experience with OpenStreetMap, and will not be familiar with tagging guidelines.
>  It is advisable to confine one project to one class of objects to be mapped. If you need a basemap of an area better split it in several projects, one for the roads, one for the buildings etc. Now beginners can focus on a small class of objects while learning how to map them correctly.

### Popis

![TM Description][]

This screen allows you set the project status as Draft, Published, or Archived, priority, a short description used in project listings and the long description available once a mapper has selected the project.

Both the short and long description should provide information about why the project exists, who will use the data and the expected the impact the mapping will have. These fields support Markdown text and can include images and videos.

### Instructions

![TM Instructions][]

**Entities to Map** - A list of the features you want users to map. Generally the fewer features the better as they are more likely to get completed.

> Projekty, které vyžadují mapování velkého množství entit, jsou pro mapovače obtížné a obtížně se ověřují. Trvá mnohem déle, než získáte dobře použitelnou sadu dat. Velikost úloh je také obtížné zefektivnit pro různé typy mapování, např. budovy potřebují malé čtverce úloh, silnice a vodní toky potřebují větší čtverce úloh. Pro mapování budov a liniových prvků je osvědčeným postupem vytvořit více projektů na stejném území.

**Changeset Comment** - This is the default changeset comment that will be attached to every data upload to OSM. It usually includes something that identifies the Tasking Manager the project resides on and the features that were mapped. It is often used for "hash tags" to help identify the organization requesting and/or doing the mapping. It can also describe the mapping being done, e.g., "Mapping buildings."

> Users should be instructed to fill in meaningful comments about what they mapped, but helping them out with good default comments is always a good idea.

**Podrobné pokyny** - Zde bude umístěna většina podrobných pokynů a očekáváme, že si je každý mapovač a validátor pečlivě přečte a bude se jimi řídit.

Viz níže uvedené poznámky k vytváření dobrých pokynů.

**Pokyny k úkolu** - Tyto pokyny se zobrazí, když mapovač vybere úkol, a mají také speciální funkci, která umožňuje vytvářet adresy URL specifické pro úkoly na základě typických souřadnic x, y, z "slippy map".

### Metadata

![TM Metadata][]

> All of these fields should be filled in and will become non-optional in future versions of the Tasking Manager.

**Mapper Level** - This is an indication of the difficulty of the mapping project. There are 3 options Beginner, Intermediate and Advanced. This setting is an indication to the mapper what experience level they should have to be most successful in mapping the project. It can be used in project list filtering and the suggested level can be required in the Permissions screen.

**Typ mapování** - Používá se při filtrování seznamu projektů a pomáhá mapovačům najít projekty, které chtějí mapovat.

**Organization** - The organization whose project managers should have administrative permissions for this project. The organization must have been previously registered with the Tasking Manager.

**Interests** - Used to suggest projects to mappers. Mappers specify their interests in their profile.

**OSMCha filter ID** - OSMCha is offered as a link from the contributions overview. The standard filter confines output to the bounding box of the project and to contributions not older than the project creation date and with the name of the project in the changeset comment. If you think something different would be a better approach  to analyze the changesets of your project then either provide an OSMCha URL or an OSMCha filter id here.

### Priority Areas

![TM Priority Area][]

Use the provided tools to draw areas that should be mapped first. You can have multiple priority areas for a Project. You can also change priority areas at any time.

> During disaster mapping, early in the event, having a large project mapping area and using priority areas to focus mapping as new information comes in is a best practice.

### Imagery

URL Field - A field that takes a TMS URL that will passed automatically to the OSM Editor the mapper or validator uses. Please follow the example, it is very important it is formatted correctly to work in all editors.

Licence - Pokud je pro mapování vyžadována specifická licence, kterou může mapovač akceptovat při používání snímků, můžete ji zde vybrat. Pokud potřebujete licenci, která není k dispozici, můžete kontaktovat správce instalace Tasking Manageru a požádat ho o její přidání.

### Oprávnění

![TM Permissions][]

**Mapping permissions** - Allows you to require that a mapper is at the proper level to map on the project (Metadata screen above). Mapper levels can be set manually, but are automatically applied based on total changesets. You may also require a mapper to be part of a team. Teams can be selected below

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

**Message all ccontributors** - Sends a Tasking Manager message to everyone who has marked a task complete or valid. It can be used to thank contributors and/or guide them to other projects in a portfolio/campaign. It should also be used before using either of the two Validate/Invalidate all Tasks options described below.

**Mapping, validation and invalidation** - This will set the status of all tasks to either mapped, validated or invalidated. Handle with care as there is no undo.

**Reset tasks** - This will reset all tasks to their pristine state but previous actions will still available in the task history. Handle with care as there is no undo.

**Převod vlastnictví projektu** - Umožňuje určit jiného uživatele, který se stane vlastníkem tohoto projektu. Zacházejte s ním opatrně, protože jej nelze vrátit zpět.

**Clone Project** - This will create a duplicate of the project except for the mapping area, task grid and priority areas which you will need to re-import or re-draw.

**Odstranit projekt** - Tím se projekt trvale odstraní ze Správce úloh. Zacházejte s ním opatrně, protože jej nelze vrátit zpět. Tato akce již není k dispozici, jakmile byly do projektu vloženy jakékoli příspěvky.

### Poznámky k pokynům

Používejte srozumitelný jazyk, protože vaše cílové publikum nemusí být rodilí mluvčí angličtiny.

1. The title of the project should already reveal what entities should be mapped. Prefer a title such as
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. The most important messages should appear on the instruction tab first to ensure they are read. This would include any special imagery to use instead of Bing. The first sentences could mention that it is not required to map every single house if the project is about roads and residential areas, for example. Or that it is required to map every house if the project is to be used for population density estimates. These are the messages that should also appear on the description tab.
3. Other points of clarification: If the project is suitable for mappers with a certain level of experience only. For example, the project uses imports or existing data should be realigned to GPS traces or some other imagery (cf. the previous section). Phrase it so that new mappers will feel invited contributing to other projects but understand that advanced techniques are required in this instance.
4. There are guidelines that cover common errors we see while validating. One example is Blake Girardot's compilation on [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Use the link in the instructions and explain that adhering to these guidelines is required.
5. Základním zdrojem informací o tagování je [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). Pro mnoho úkolů souvisejících s HOT je vhodnou specializací stránka [Tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa), kterou vřele doporučujeme ke čtení každému mapperovi. Pokud váš projekt musí dodržovat jiné standardy tagování, pak si podobnou stránku napište na wiki a uveďte na ni odkaz ve svých pokynech.


### Úvahy týkající se zobrazování

In most cases we use the "standard" Bing imagery. But there are situations where you might want to choose an alternative source:

1. Služba Bing neposkytuje pro vaši oblast mapování pokrytí s vysokým rozlišením.
2. Bing has considerable cloud cover in this area.
3. Pro vyhodnocení po katastrofě potřebujete novější snímky.

If Bing does not prove adequate then Mapbox is the next choice. You should only look for other sources if neither of these two meet your requirements.

In such cases it is not sufficient to choose a license-compatible source and make it available through a WMS or TMS service. Your mapping area has probably already been partially mapped using Bing or Mapbox imagery and there might be a noticeable offset between images. You must have a close look at various locations of your mapping area and determine the offset between your imagery and previously mapped data. If the existing OSM data are offset with respect to your imagery but fit Bing imagery then we usually assume that Bing is the "gold standard" unless we have GPS traces which prove that this assumption is wrong.

If there is a constant offset between your imagery and Bing across the mapping area then this might be corrected on the server so that images from various sources loaded in the editor match. If this is not possible, if the offset varies across the mapping area or if existing data are aligned with various sources then it is time for plan B:

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
- [the josm imagery alignment chapter in learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


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
