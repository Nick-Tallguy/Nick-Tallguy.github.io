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
-  [Permissions](/en/coordination/tm-admin/#permissions)
-  [Create a project](/en/coordination/tm-admin/#create-a-project)
    -  [Define mapping area](/en/coordination/tm-admin/#define-mapping-area)
    -  [Define tasks](/en/coordination/tm-admin/#define-tasks)
    -  [Pokročilé: Definovat úlohy s importovanými daty](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-data)
    -  [Project area trim](/en/coordination/tm-admin/#project-area-trim)
    -  [Name the project](/en/coordination/tm-admin/#name-the-project)
-  [Edit a project](/en/coordination/tm-admin/#edit-a-project)
    -  [Description - the first thing users learn about your project](/en/coordination/tm-admin/#description)
    -  [Pokyny - co mají uživatelé dělat](/en/coordination/tm-admin/#instructions)
    -  [Metadata - where the project belongs to](/en/coordination/tm-admin/#metadata)
    -  [Prioritní oblasti - kde by uživatelé měli začít mapovat](/en/coordination/tm-admin/#priority-areas)
    -  [Imagery - the basis for mapping](/en/coordination/tm-admin/#imagery)
    -  [Oprávnění - kdo smí mapovat a ověřovat](/en/coordination/tm-admin/#permissions)
    -  [Settings](/en/coordination/tm-admin/#settings)
    -  [Actions](/en/coordination/tm-admin/#actions)
    -  [Custom editor](/en/coordination/tm-admin/#custom-editor)
    -  [Save and test](/en/coordination/tm-admin/#save-and-test)
    -  [Publish](/en/coordination/tm-admin/#publish)
-  [Řízení projektů](/en/coordination/tm-admin/#project-management) 
    -  [Be responsive](/en/coordination/tm-admin/#be-responsive)
    -  [Sequencing projects](/en/coordination/tm-admin/#sequencing-projects)
    -  [Životní cyklus projektu](/en/coordination/tm-admin/#project-lifecycle)
-  [Additional information](/en/coordination/tm-admin/#additional-information)
    -  [Considerations concerning imagery](/en/coordination/tm-admin/#considerations-concerning-imagery)

Tasking Manager je základním nástrojem pro koordinaci mapování v OpenStreetMap. Podporuje humanitární mapovací iniciativy, pořádání mapathonů nebo vytváření mapovacích úloh pro studenty. Aplikace rozděluje zájmovou oblast na zvládnutelné geografické části, které lze rychle a ve spolupráci dokončit. Tento přístup umožňuje rozdělit úkoly mnoha jednotlivým mapovatelům a zároveň omezit možné konflikty při úpravách. 

The software encourages accurate and quality mapping data by providing a consistent set of instructions for your mappers (e.g. 'map all roads and buildings'). In short, the Tasking Manager is how you set up and direct the workflow for open mapping activities. 

This guide describes the basic administration of the Tasking Manager. It covers instructions to create and modify mapping projects and handling permissions for mapping and review of crowd-sourced data.

## Login and access

K přihlášení do Tasking Manageru je zapotřebí účet OpenStreetMap (OSM). Můžete navštívit stránku [HOT Tasking Manager](http://tasks.hotosm.org) nebo jakoukoli jinou instanci komunity podle vašich preferencí. Tam klikněte na `Přihlásit se` a budete přesměrováni na [webové stránky OpenStreetMap](https://www.openstreetmap.org), kde si vytvoříte účet. Nebo klikněte na `Přihlásit se`, pokud již nějaký máte, a ve vyskakovacím okně můžete Správci úloh udělit omezený přístup ke svému účtu OSM.

## Oprávnění

The most basic user level is **mapper**. Mappers are able to login to the Tasking Manager to find and select a mapping project to work on. All mapper functionality is described in the [LearnOSM Tasking Manager Mapper Guide](/en/coordination/tm-user/). Note that some projects, such as those in draft state (i.e. unpublished), or restricted to certain teams, are not visible to regular mappers. 

All special permissions are handled by *organizations* and *teams*. An **organization** is the main umbrella, and under each organization mapping projects and teams can be created. An organization could represent a data user such as a humanitarian organization, or any OpenStreetMap community. If you need to set up your organization on the Tasking Manager, contact the technical maintainers of the Tasking Manager instance. See [HOT Tasking Manager Organizations](https://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Team/HOT_Tasking_Manager_Organizations) for a list of organizations which are present on HOT's Tasking Manager. If your community or organization is not listed there and you'd like to create projects on HOT's Tasking Manager, please complete [this form](http://bit.ly/HOTTasking) to register your interest. 

Every organization has one or more **managers**. They have the permission to create and modify associated projects. All manager options can be accessed through the `Manage` section in the main navigation.

Managers of an organization can create **teams**. Teams are groups of OpenStreetMap users and they can be publicly visible or private. They also have one or more team managers. Teams can be set up so that users can join a team on their own or 'invite only', which means that the team managers are notified about requests to join and must decide upon them.

For each project, administrators can assign specific teams to grant or restrict access to either mapping, define who can validate the data, or who else is able to edit the project's metadata.

## Create a project

Click on `Manage` in the navigation on the top, In the first row you see a space for 'Projects'. Next to it, click on the `Add` button to create one.

![TM Add Project][]

Můžete si vybrat mezi definováním zájmové oblasti (mapovací oblasti) vašeho mapovacího projektu buď pomocí:

* Option 1: `Draw` the area of interest manually
* Možnost 2: `Nahrát soubor` pro import oblasti zájmu jako GeoJSON, KML nebo zazipovaný shapefile.

![TM New][]

### Define mapping area

* Option 1: `Draw` the area of interest manually

1. You may switch to other background layers using the buttons on the top. 
1. Click the `Draw` button on the left.
2. To draw a polygon representing the mapping area in the map frame hold the right mouse button down to move the map without clicking, which will add a node. The polygon should tightly frame the area of interest. This saves time for completing tiles that are not of interest (i.e. ocean, forest).
3. Kliknutím na výchozí bod dokončete polygon. <!--After completing a polygon you can move the nodes or add new ones to get the area just as you want it.-->

<br>

* Možnost 2: `Nahrát soubor` pro import oblasti zájmu jako GeoJSON, KML nebo zazipovaný shapefile.

1. In the first step of creating a project click on `Upload file`.
2. V okně Nahrát soubor přejděte na svůj soubor.
3. Click the file name to highlight the file and then click ‘Open’.
4. Imported areas of interest cannot be adjusted in Tasking Manager.

Je možné, že nahráváte soubor, který již obsahuje předdefinované úlohy (malé mapovací čtverce). Více informací o tom najdete níže v části [Definovat úlohy s importovanými daty](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-data).

> POZNÁMKA: Tasking Manager má svá omezení! Maximální technický limit pro projekt je 5 000 km2, aby však dokončení projektu netrvalo příliš dlouho, snažte se ho udržet pod 1 000 km2. Pokud potřebujete zmapovat větší oblast, budete muset vytvořit několik projektů. Velikost projektu uvidíte v levém dolním rohu náhledu mapy. 

### Define tasks

After the overall mapping area has been defined, it is going be divided into smaller areas called *Tasks*. You must consider your project's task sizes very carefully. Well designed projects have appropriate task sizes, allowing them to be completed as efficiently as possible. 

![TM Tile Sizes][]

The project area is automatically split into grid cells and each cell becomes a task. Use the `Larger` and `Smaller` buttons to adjust the overall size of the task squares. The default task size is likely to be much too large. As you alter the task size note the task size listed on the left next to 'The size of each task is approximately ... km2'.

Please take your time and set your task sizes very carefully! Try and aim to reduce your task size down to where you think it would take a confident mapper **15 minutes to complete**. The optimal task size entirely depends on the feature(s) you are asking mappers to identify and the density of those features. For example, a road mapping project in a rural area would have much larger tasks than a project that involves digitizing buildings in a dense settlement.

> Zoom in and activate the Bing imagery to determine a good task size. You can switch between several background map layers with the buttons on the top of the map.

Po nastavení celkové velikosti úlohy můžete některé úlohy selektivně rozdělit na čtyři menší pomocí tlačítka `Kliknutím na rozdělení`. Nebo můžete `Kreslit oblast pro rozdělení`, a to vám umožní nakreslit polygon nad oblastí, abyste rozdělili všechny úlohy uvnitř. Tyto funkce jsou užitečné zejména v případě, že hustota prvku, který chcete mapovat, se v oblasti projektu liší. Například může existovat hustě zastavěná pobřežní oblast, která potřebuje malé úlohy, a vnitrozemská venkovská oblast, která potřebuje mnohem větší úlohy. Tlačítko `Reset` odstraní veškeré vaše vlastní rozdělení.

Úvahy při rozhodování o velikostech úloh:
-  Tasks can be split, but there is no option to re-merge them once a project is created.
-  Once a project is created, splitting tasks is very time consuming and has to be done one task at a time.
-  Na okrajích a v rozích úloh existuje větší potenciál pro konflikty mezi sousedními mapovači. Menší úlohy znamenají více rohů a hran. Existuje kompromis ve velikosti úlohy, aby byla pro mapovače snadná, ale aby mezi nimi nevznikaly konflikty při mapování.
-  Small tasks are easier to map, but more tasks means more time needs to be spent by mappers updating the status of each, and projects with tasks that are too small can therefore be inefficient.
-  Začínající mappeři potřebují zhruba čtyřikrát delší dobu než zkušení mappeři.
-  Beginner mappers need to develop an eye for satellite imagery. Spotting the right features might be difficult.

Once you are happy with your task sizes, click `Next`.

### Pokročilé: Definujte úlohy s importovanými daty

Pokud jste nahráli soubor pro definici oblasti projektu, může tento soubor obsahovat také tvary jednotlivých úloh. Například hotový projekt z MapSwipe, který se zaměřuje na obydlené oblasti, nebo složitou síť, kterou jste předem vytvořili v QGIS. V takovém případě nezapomeňte povolit přepínač "Nastavit úlohy pomocí nahraných polygonů". Tím přeskočíte rovnou do fáze tvorby projektu s pojmenováním. 

![TM New Polys][]

### Project area trim

![TM Trim][]

After determining the task sizes you will have the option to trim the tasks to the extent of your mapping area. You will almost certainly want to do this. Click on `Trim` to remove all task squares which do not overlap your project area. 

![TM Trim coarse][]

If you toggle on 'Trim the tasks to define the exact Area of Interest for mapping.' before clicking on `Trim` the overlapping task portions at the edge of your area of interest will be trimmed sharply against your area of interest.

![TM Trim fine][]

Při ostrém ořezávání může dojít k extrémně malým úkonům. Tyto drobné úlohy mohou mapovatele zmást. Můžete je odstranit výběrem možnosti `Odstranit`, když se zobrazí zpráva 'There are ... tasks smaller than 2,000m2. Chcete je vyřadit?

> Take note of the number of tasks that your project has (look in the bottom left hand corner of your map). The maximum technical limit for the number of tasks in one Tasking Manager project is 5,000. However, to ensure your project doesn't take too long to complete, try and keep it under 1,000 tasks - if you need to map a larger area try splitting it into smaller projects. 

Click `Next`.

### Name the project

Název projektu je jedním z jeho nejdůležitějších aspektů, pokud jde o to, aby se o něm dozvěděla širší veřejnost. Pokuste se uvést název země, ve které se projekt nachází (např. Jižní Súdán), důvod mapování (např. Očkování COVID) a také konkrétnější místo, třeba název okresu nebo osady (např. Yambio County). Úplný název projektu může být např: _Jižní Súdán, očkování COVID, okres Yambio_. 

Ensure your organization is selected under the 'Organization' field. 

> Before completing this stage make sure you are happy with the project's area of interest and the overall number of tasks, these elements cannot be adjusted later on. 

Click `Create`. Your project will be created but it will not publish immediately - you'll be directed to the Edit menu of the project first. 

## Edit a project

You'll now see the 'Edit' menu of your project. Before the project can be saved, you'll need to go through the 'Edit' menu carefully to complete setup. Here is a quick summary of the sub-menus you will see on the left hand side:

- Description - Set the status, priority and text description associated with your project.
- Instructions - Detailed instructions for how to map the needed features and approach the project.
- Metadata - Define the features that need to be mapped. Also includes information used for categorizing projects, used in filtering projects.
- Priority Areas - Allows you to specify parts within the project area that should be mapped first.
- Snímky - Vyberte snímky, které se ve výchozím nastavení načtou, když dobrovolníci mapují váš projekt. 
- Oprávnění - umožňuje omezit přístup k projektu pro mapování a ověřování.
- Nastavení - zapnutí/vypnutí alternativních editorů, například RapiD.
- Akce - Výkonné hromadné akce, které můžete provádět s projektem, například klonování nebo mazání.
- Custom editor - Add a custom editor using a URL

> Filling in this information carefully is an essential part of a successful mapping project. It is particularly important that the project description and instructions are clearly communicated so mappers are aware of the importance of data quality and best practice. Keep in mind, contributors may not have previous experience with OpenStreetMap and are unlikely to be familiar with tagging guidelines.

### Description

![TM Popis][]

#### Status

First is the project status. This can be set to either **Draft**, **Published**, or **Archived**.

- **Draft** - Your project will start in draft mode. In this mode it will not be discoverable and it will not be possible for the public to contribute towards it. This is perfect while you are still setting your project up and testing it before release. 
- **Published** - When you have completed your project setup, tested it and are happy for it to be publicly listed and open for mapping/validation.
- **Archived** - All projects should end up being archived. Archived projects are public but locked for contributions. You should consider archiving your project either if:
  - It is 100% mapped and validated
  - The instructions or imagery are substantially outdated
  - The project was created more than a year ago
  - Map data is no longer needed for humanitarian purposes in the project area

#### Priority

Dále je to priorita projektu. Ta určuje, jak blízko přední části Správce úkolů bude projekt zobrazen na stránce Prozkoumat projekty. Tuto hodnotu lze nastavit na **Podstatné**, **Vysoké**, **Střední** nebo **Nízké**.

- **Urgent** - Only set this status if the project is **in response to a disaster and the data needs are immediate**. Very few projects have this priority level. 
- **High** - For projects that are not necessarily in response to a disaster but the data is needed in a **short time-frame**. 
- **Střední** - Pokud jsou data potřebná, ale ne v příliš krátkém časovém horizontu.
- **Low** - If you want to publish your project but do not want to make it very prominent. You might prefer to share your project to specific groups using the project URL.

#### Short description

Add at least two sentences that briefly describe your project. This is important because volunteers will read this to decide on whether to contribute. Try and clearly explain **why** the data is being collected and **how the map data will be used**. 

> These fields support **Markdown** and can include images (drag and drop) and videos (add a YouTube URL for automatic embedding).

#### 'Long' Description

Zde můžete svůj projekt popsat podrobněji. Uveďte více informací o tom, proč projekt existuje, kdo bude data používat a jaký očekávaný dopad bude mapování mít. Pokud projekt zahrnuje nějakou spolupráci nebo partnery, můžete to zde rozvést. 

> For any of these text fields you can choose to add additional translations. If you'd like to add a translation, click on the two letter language code and enter the translated text. For users that have set the Tasking Manager to that language it will automatically display the project in that language. By default, the initial field is English language, this can be altered in the 'Settings' sub-menu of your project.

#### Due date

If you have a date by which you wish your project to be completely mapped and validated you can add that here. This is optional and once the date is exceeded it does not change anything for the project and volunteers can continue contributing afterwards. Contributors will see the due date listed next to the project. 

### Instructions

![TM Instructions][]

#### Changeset comment

Zde můžete přidat další sledovací značky, které se automaticky vyplní pokaždé, když někdo při mapování projektu uloží svou práci. Pokud například chcete začít sledovat všechny příspěvky napříč všemi projekty vaší organizace, můžete k nim přidat společný sledovací tag, např. #MSF nebo #cartONG. Snažte se, aby tyto značky byly **krátké** a nepřidávejte jich příliš mnoho, nepřehledné komentáře ke změnovým sadám jsou matoucí pro interpretaci a měl by být ponechán prostor pro mapovače, aby mohli zanechat popisné komentáře ke změnovým sadám. 

> Please note that a unique project tracking tag will already be present, e.g. #hotosm-project-11188 - **please leave this as it is**, it is very important for tracking the progress of the project. The number at the end of the tag is your project's unique ID.

#### Podrobné pokyny

Přidejte popisné pokyny pro mapovače a validátory, kterými se mohou řídit při práci na projektu. Váš projekt bude veřejný, proto **napište pokyny pro nezkušené uživatele** bez znalosti místních podmínek a souvislostí. Používejte srozumitelný jazyk, protože vaše cílové publikum nemusí být rodilí mluvčí angličtiny.

1. Nejdůležitější informace napište na začátek, aby byly viditelné. Mohlo by se jednat o popis snímků a upozornění na problém s kompenzací snímků s návodem. Nebo by to mohl být pokyn pro mapovatele, aby v projektu mapování dálnic ignorovali cesty a koleje a zaměřili se na výraznější dálnice.
2. Add context/location specific instructions. These vary significantly but will help mappers interpret satellite imagery. E.g. 'Expect to see many circular brown thatched huts in this South Sudan project' or 'Settlements in Guatemala are often densely built, zoom extremely far in when mapping each building to ensure they do not connect or overlap'. Drag and drop aerial imagery screenshots into the instructions here to enhance this section.
3. Definitely include a detailed description of **how to map each feature** that you wish to be mapped. Look at existing (but recent) projects on Tasking Manager to see if you can borrow some existing instructional text (beware that some projects will not have good instructions!).
4. The definitive resource on tagging is the [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). For many HOT-related projects the page on [tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) is the proper specialization and may be worth linking to in your project's instructions. If your project must adhere to different tagging standards then write a similar page in the Wiki and link it in your instructions.
5. Other points of clarification: If the project is suitable for mappers with a certain level of experience only. For example, the project uses imports or existing data should be realigned to GPS traces or some other imagery. Phrase it so that new mappers will feel invited contributing to other projects but understand that advanced techniques are required in this instance.
6. Existují pokyny, které se týkají běžných chyb, s nimiž se při validaci setkáváme. Příkladem je kompilace Blakea Girardota o [mapování v západní Africe](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Použijte odkaz v pokynech a vysvětlete, že dodržování těchto pokynů je nutné.

#### Podle pokynů k úloze

Je to nepovinné, ale je možné přidat krátký úryvek dodatečných pokynů, které mapovatelé uvidí při práci na úkolu. To je vidět na pravé straně zobrazení editoru Správce úloh nad oddílem "Stav úlohy". Bude viditelný po celou dobu mapování, takže pokud je něco **zvlášť důležitého**, o čem chcete mapovače **instruovat**, můžete to přidat sem. 

### Metadata

![TM Metadata][]

#### Mapper level

This changes the difficultly level which is **displayed** for your project. Consider this very carefully, complex projects which are inappropriately set to Beginner difficulty **can result in significant data quality issues**. 

> Note that this does not change who can **actually contribute** to your project, those restrictions are implemented under the Permissions sub-menu.

Most projects are set to either **Beginner** or **Intermediate** difficulty, a handful of projects are set to Advanced. 

- **Beginner** - Consider this if your project is easy to map and:
  - Žádáte přispěvatele, aby zmapovali pouze jeden prvek, konkrétně **pouze budovy**.
  - The density of features is low, i.e. in a **rural** area
  - There is a **low quantity** of existing OSM data in your project area
  - Nejsou žádné problémy se zarovnáním snímků
- **Intermediate** - If your project is trickier to map, this should be considered if:
  - You are asking contributors to map more than one feature, e.g. buildings **and** roads
  - There is a medium/high density of those features in your project area, i.e. **urban** areas
  - V oblasti vašeho projektu existují **podstatná** data OSM.
  - There might be **imagery alignment issues** or you ask contributors to use more than one imagery source
- **Advanced** - If the project is extremely difficult to map, consider this if: 
  - There is a very high density features in your project area, i.e. **central urban** areas
  - There is a **lot of** existing OSM data in your project area
  - There are **complex imagery alignment** issues

#### Types of mapping

Toggle these on/off depending on the features that you wish to be mapped in your project. Generally the **fewer features the better**, as projects which aim to map too many features often struggle to make much progress. 

> Projects that ask for lots of features to be mapped are difficult for mappers and difficult to get validated. They take much longer to get a good usable dataset. Task sizes are also difficult to make efficient for different types of mapping, e.g., buildings need small task squares, roads and waterways need larger task squares. Making multiple projects over the same area to get buildings and highways/waterways mapped separately is best practice. 

#### Předvolby iD Editoru

Pokud v rozevíracím seznamu vyberete jednu nebo více položek, budou moci mapovači používající iD přiřadit tyto prvky pouze k objektům, které mapují. To se doporučuje pro začínající projekty **pouze pro budovy**. Bude to znamenat, že přispěvatelé nebudou moci označit jiné prvky, i když se o to pokusí. U složitějších projektů se vyhněte používání předvoleb, protože se mohou rychle stát přítěží. Například projekt mapování dálnic by potřeboval přidat desítky předvoleb, aby bylo možné mapovat všechny typy dálnic. 

#### Organizace

Název vaší organizace by zde již měl být uveden, v opačném případě jej vyberte z rozbalovací nabídky.

#### Kampaň

If you have created several projects which are associated with each other, you can choose to assign them to a campaign. Users can filter projects by campaign name on the Explore Projects page. For example, if your project is associated with malaria elimination, you might want to put it under the 'Malaria Elimination' campaign. To request the creation of additional campaign names please complete [this form](https://forms.gle/qafvkp4iAxnY6rjE6). 

#### Categories

Select the themes here that relate to your project. Contributors can specify their interests in these categories in their settings page.

#### OSMCha filter ID

[OSMCha](https://osmcha.org/) is a powerful data quality assurance tool that you may find useful for monitoring contributions to your project. The standard filter confines output to the bounding box of the project and to contributions not older than the project creation date and with the name of the project in the changeset comment. If you think something different would be a better approach to analyze the changesets of your project then either provide an OSMCha URL or an OSMCha filter id here. The OSMCha filter is available at the end of the overview page of your project. 

### Priority Areas

![TM Priority Area][]

Use the tools here to draw areas that should be mapped first. You can have multiple priority areas for a project. You can also change priority areas at any time. The priority area will be highlighted for volunteers to prioritize and if they select 'Map a task' it will randomly select a task from the priority area first. 

> During disaster mapping, early in the event, having a large project mapping area and using priority areas to focus mapping as new information comes in is often best practice.

### Imagery

From the dropdown menu choose the aerial imagery source that you want to load automatically for your project. If the imagery is not listed in the dropdown you can choose 'Custom' and then add a TMS URL. 

> Note that Tasking Manager **cannot host custom imagery**, it needs to be hosted externally and linked using a TMS URL. If you are happy with your imagery being open for use please consider using [OpenAerialMap](https://openaerialmap.org/) to host your imagery.

License - Optionally, if there is a specific license required for the mappers to accept when using the imagery, you can select it here. For example, for Maxar imagery this is 'DigitalGlobe Satellite EULA'. If you need a license that is not available, you can contact an administrator for the Tasking Manager installation and ask them to add it.

### Permissions

Under the 'Metadata' menu we could change the difficulty level that was **displayed** for a project. Under the 'Permissions' menu we can change who can actually **access** a project. It's important to remind ourselves of the various user levels:

- **Beginner** User - Any user that has either just created their account or made **less than 250 changesets** (saves)
- **Intermediate** User - Any user that has made between **250 and 500 changesets**
- **Advanced** User - Any user that has made **over 500 changesets**

> As before, consider permissions very carefully, complex projects which inappropriately allow all users to contribute can result in **significant data quality issues**. 

![TM Permissions][]

#### Mapping permissions

Here you can choose who can **map** your project:

- If your project is easy to contribute towards and you consider it a beginner project you might want set this to **'Any user'**.
- If your project is more complex and requires more experience, restrict mapping to **'Only users with intermediate or advanced level'**. 
- If you want to be even more selective then you may also require a mapper to be part of a **team**. Teams must then be defined below.

#### Validation permissions

Here you can choose who can **validate** your project. Validation is where more experienced mappers check the contributions that are made within your project, therefore this should be restricted to 'Only users with intermediate or advanced level' **as a minimum**. **Ideally** you should restrict validation even further to **'Only team members'**, but when you do this you must remember to **define those teams** below. 

#### Teams

Use the filters to search for and add teams. You can add your own team(s), but please also feel free to add other teams. Once you have added a team ensure to select a role (Mapper, Validator, Project Manager). 

Team permissions will not function unless you have restricted Mapping and/or Validation permissions to 'Only team members'. If you grant a team Project Manager access this will allow its team members to edit the project.

> On HOT's Tasking Manager feel free to add two of the larger validation teams, namely 'HOT Global Validators' and HOT's 'Validator Trainees'. Please note, that although this gives those team members **permission** to validate your project, it does **not necessarily mean** that they **will validate** your project.  

#### Privacy

Toggling to make a project 'Private' will hide the project from all users except those that are part of the teams defined above. 

### Settings

![TM Settings][]

#### Default Language

Altering this will change the default language for your project's title, description and instructions.

#### Editors for mapping/validation

This restricts the available editors to those checked. You may specify different sets for mapping and for validation. Note that it is possible to enable the AI assisted RapiD editor here. 

#### Enforce random task selection

If enabled then contributors cannot select specific tasks for mapping.

### Actions

Here you can perform powerful bulk actions on your project. **Be careful** with many of these options, **they are not reversible**. 

![TM Actions][]

#### Message all contributors

Sends a Tasking Manager message to everyone who has marked a task complete or valid. It can be used to thank contributors and/or guide them to other projects in a campaign. It should also be used before using either of the two Validate/Invalidate all Tasks options described below.

#### Mapping, validation and invalidation

This will set the status of all tasks to either mapped, validated or invalidated. Handle with care as there is no undo.

#### Reset tasks

This will reset all tasks to their pristine state but previous actions can still be seen in the task history. Handle with care as there is no undo.

#### Transfer project ownership

You can specify another manager within your organization who will become listed as the creator of the project. Search for their OSM username. 

#### Clone Project

This useful option will create a duplicate of the project, keeping the entire **setup identical** except for the area of interest, task grid and priority areas which you will need to re-import or re-draw. This option will **save you a lot of time** if you are creating a series of similar projects that are covering a large area. 

#### Delete Project

This will **permanently delete** the project from the Tasking Manager. Handle with care as there is no undo. It is not possible to delete a project after any contributions have been made to it.

### Custom editor

If you would like to link to an editor which is not listed in the 'Settings' menu a URL to that editor can be added here. 

### Save and test

Once you are happy with your project setup press `Save`. View your project by selecting `Access Project` and `Project Page`. **Check your project carefully**, ensure the instructions are clear and the wording and formatting are correct. 

**Try mapping a task**, is the imagery loading correctly? Are the instructions clear enough? If you need to make changes or refinements to your project, click the `Edit` button on the project page. 

### Publish

After checking and testing your project, if you are happy with it and ready for mapping to start click the `Edit` button on the project page and from the 'Description' menu change the status to ‘Published’. Once the project is published, the wider public will be able to see your project and contribute towards it. 

> Note that you can access the 'Edit' menu of your project and alter the settings at any time, even if mapping is underway.

## Project management

Congratulations! You've created a project, now you'll need to make sure you manage it effectively. 

### Be responsive

As the project creator, you are **responsible** for **responding to questions** that arise in the **Questions and Comments** section of your project page. This section will often include useful guidance or tips from the wider community, take these seriously, respond and make edits to your projects where necessary. 

> To enable notifications when there are new posts in the Questions and Comments section, click on your OSM username in Tasking Manager and choose `Settings`. Toggle notifications on for 'Questions and comments'.

On the project page your username will also be listed next to 'created by ...'. This means that you may also receive direct OSM messages, make sure to read and respond to these. 

> If you are being overwhelmed by questions please note that you will receive less if you follow this guidance: _The first thing you can do to support the mappers, and validators, is having well designed projects with easy to understand but thorough instructions and descriptions._

### Sequencing projects

If you have created a number of projects in a series **do not publish them all at once**. You are not the only one creating projects, having a reasonable number of projects (one or two) at the appropriate priority is fine. Publishing half-a-dozen at once will crowd out the Tasking Manager. Keep the rest in draft or at lower priority while at any moment only one or two are being worked on. You may notice that contributors lose enthusiasm if they see lots of similar projects all at once that are making little progress.

### Project lifecycle

Keep track of the mapping and validation progress of your projects. Remember that **all projects must end up being archived**. You will need to do this manually, so do not lose sight of the progress, priority or relevance of your projects. If you are moving to another organization make sure to **hand over** your ongoing projects to your replacement. 

## Additional information

### Considerations concerning imagery

Before creating your project, check the imagery in several different locations across your project area to make an imagery assessment. In most cases either Maxar or Bing imagery should suit your needs. However, there are situations where you might want to choose an alternative source. You may need to consider the following when choosing your imagery: 

1. If careful, detailed mapping is needed choose the imagery that is clearest, with the highest resolution.
2. If your priority is to have the most up-to-date imagery, flick between the standard imagery sources to look for the most recent imagery. Look for indications of development such as new buildings or land clearance to get an idea of the most up-to-date imagery. Recently Maxar has been the most up-to-date but this varies by location. 
3. Check for cloud cover, although one imagery source may suit your needs if it is very cloudy or hazy your mappers will struggle to map using it.
4. Check for alignment, if there is plenty of existing OSM data that aligns to one set of satellite imagery then it may make sense to choose the same imagery. If there are alignment issues make sure to write clear instructions detailing how you expect contributors to deal with offsets/alignment issues. 

> It is often very difficult to get an exact imagery capture date from the satellite imagery providers. The main sources are 'mosaics' where a series of images (often with very different capture dates) are stitched together. Sometimes this stitching goes down to the individual pixel level. In the absence of information, using imagery comparison is therefore often the best choice for finding the most recent imagery. 

#### Imagery alignment

Your project area may have already been partially mapped using older imagery and there might be a noticeable mis-alignment between the older mapped objects and the newer available imagery. Inspect various locations across your mapping area to determine this. If there is an alignment issue, make sure to include detailed instructions outlining the best approach for mappers to take. Projects with imagery alignment issues are best restricted to more experienced mappers. 

There is not a standard set of instructions when it comes to imagery alignment issues. It is very dependent on context. Sometimes mappers are instructed to align to GPS traces, sometimes they are told to align to mapped linear features such as highways and waterways. Here is a sample approach: 

1. Clearly state which imagery is to be considered the reference to which anything else should be aligned. In this case let us assume that the reference is Maxar.
2. Make sure that all existing features which are also visible on Maxar are aligned with Maxar imagery, i.e. realign if necessary.
3. Add new features from the now correctly aligned Maxar imagery.

Often mappers are instructed to look for _least effort_ when it comes to imagery alignment issues. Which means that contributors are told to vary their approach depending on the situation in their individual task: 

- If there is plenty of existing mapping in a task which is consistently misaligned it might require the least effort to change the imagery offset to fit existing mapping and then map the small number of remaining objects in the task. 
- If there is less existing mapping, or objects are misaligned inconsistently (i.e. the degree of misalignment varies across space) then it might be easier to alter the position of the mapped objects to align with the imagery and then map remaining objects in the task.

If your project has alignment issues, ensure your task squares are not too large because imagery offsets can vary considerably across a mapping area, particularly if the terrain is not flat. Even imagery discontinuities may occur across a project - look out for them and advise the contributors of such a problem.

> Although individual mappers can manually alter the imagery offset while mapping, it is not possible for you, as project creator, to change the imagery offset at the project level. However, if you are using your own aerial imagery that is being hosted elsewhere you can alter the offset at source. However, please note that alignment can vary considerably across space and simply changing the overall offset does not always correct alignment issues. 

Please feel free to check these additional resources on imagery alignment:

- [General guidelines for various editors](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [Animated gif on imagery alignment in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [JOSM imagery alignment chapter in learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


[TM Tile Sizes]: /images/coordination/tm4_tile_sizes.png
[TM Add Project]: /images/coordination/tm4_new_project.png
[TM New]: /images/coordination/tm4_create_new.png
[TM New Polys]: /images/coordination/tm4_create_new_polys.png
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
