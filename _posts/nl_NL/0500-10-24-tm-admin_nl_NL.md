---
layout: doc
title: Handleiding Beheerder Tasking Manager
permalink: /nl_NL/coordination/tm-admin/
lang: nl_NL
category: coordination
---

# Handleiding Beheerder Tasking Manager


**Als de gebruikersinterface van de versie die u gebruikt er anders uitziet dan die welke hier wordt beschreven dan zou u [ons overzicht van de versies](/nl_NL/coordination/tm-disambiguation) moeten raadplegen**

Index gedeelte
-------------
-  [Inloggen en toegang](/en/coordination/tm-admin/#login-and-access)
-  [Rechten](/en/coordination/tm-admin/#permissions)
-  [Een project maken](/en/coordination/tm-admin/#create-a-mapping-project)
    -  [Het in kaart te brengen gebied definiëren](/en/coordination/tm-admin/#define-mapping-area)
    -  [Taken definiëren](/en/coordination/tm-admin/#define-tasks)
    -  [Projectgebied verkleinen](/en/coordination/tm-admin/#project-area-trim)
    -  [Gevorderd: Gebieden voor projecten voor in kaart brengen en taken met geïmporteerde geogegevens definiëren](/en/coordination/tm-admin/#advanced-define-mapping-project-areas-and-tasks-with-imported-geodata)
-  [Een project voor in kaart brengen bewerken](/en/coordination/tm-admin/#edit-a-mapping-project)
    -  [Omschrijving - het eerste dat gebruikers leren over uw project](/en/coordination/tm-admin/#description)
    -  [Instructies - wat de gebruikers zouden moeten doen](/en/coordination/tm-admin/#instructions)
    -  [Metadata - waartoe het project behoort](/en/coordination/tm-admin/#metadata)
    -  [Prioriteitsgebieden - waar gebruikers zouden moeten beginnen met in kaart brengen](/en/coordination/tm-admin/#priority-areas)
    -  [Afbeeldingen - de basis voor in kaart brengen](/en/coordination/tm-admin/#imagery)
    -  [Rechten - wie mogen in kaart brengen en wie valideren](/en/coordination/tm-admin/#permissions)
    -  [Nuttige hints - hoe u al deze velden in zou moeten vullen](/en/coordination/tm-admin/#helpful-hints)
    -  [Publiceren - vergeet dit niet of u krijgt het werk nooit af](/en/coordination/tm-admin/#publish)

De Tasking Manager is het essentiële programma om het in kaart brengen in OpenStreetMap te coördineren. Het ondersteunt initiatieven voor humanitair in kaart brengen, mapathons uitvoeren of het maken van taken om in kaart te brengen voor studenten. De toepassing deelt een gebied op in beheersbare geografische stukken, die snel en met meerdere mensen in kaart kunnen worden gebracht. Deze benadering maakt het verdelen van taken aan veel individuele mappers mogelijk, waardoor mogelijke conflicten bij bewerken worden verkleind. 

De software stimuleert nauwkeurige en kwaliteitsgegevens voor in kaart brengen door een consistente set instructies te verschaffen aan uw mappers (bijv. 'breng alle wegen en gebouwen in kaart'). In het kort is de Tasking Manager hoe u de werkstroom voor open activiteiten voor in kaart brengen instelt en beheert. 

Deze handleiding beschrijft het basisbeheer van de Tasking Manager. Het behandelt instructies om projecten voor in kaart brengen te maken en aan te passen en het afhandelen van rechten voor in kaart brengen en nakijken van gecrowd-sourcede gegevens.

## Inloggen en toegang

Voor het inloggen in de Tasking Manager is een account voor OpenStreetMap (OSM) nodig. U kunt de [HOT Tasking Manager](http://tasks.hotosm.org) bezoeken, of enige andere gemeenschapsinstantie van uw voorkeur. Klik daar op `Sign up` en het brengt u naar de [website van OpenStreetMap](https://www.openstreetmap.org) om uw account te maken. Of klik op `Log in` als u al een account hebt, en in de pop-up kunt u de Tasking Manager beperkte toegang verlenen tot uw account van OSM.

## Rechten

Het meest basale niveau voor een gebruiker is **mapper**. Mappers kunnen inloggen in de Tasking Manager om een project te zoeken en te selecteren om aan te werken. Alle functionaliteiten voor de mapper worden beschreven in de [LearnOSM Handleiding in kaart brengen met Tasking Manager](/nl_NL/coordination/tm-user/). Onthoud dat sommige projecten, zoals die in de status concept (d.i. nog niet gepubliceerd) niet zichtbaar zijn voor gewone gebruikers

Alle speciale rechten worden afgehandeld door *organisaties* en *teams*. Een **organisatie** is de belangrijkste paraplu, en onder elke organisatie kunnen projecten voor in kaart brengen en teams worden gemaakt. Een organisatie zou bijvoorbeeld een gegevensgebruiker kunnen weergeven, zoals een humanitaire organisatie, of een gemeenschap van OpenStreetMap. Als u uw organisatie moet instellen in de Tasking Manager, neem dan contact op met degenen die de instantie van de Tasking Manager technisch onderhouden.

Elke organisatie heeft één of meer **administrators** (beheerders). Zij hebben de rechten om geassocieerde projecten te maken en aan te passen. Alle opties voor beheer zijn toegankelijk via het gedeelte `Beheren` in de hoofdnavigatie.

Beheerders van een organisatie kunnen **teams** maken. Teams zijn groepen van gebruikers en zij kunnen voor iedereen zichtbaar zijn of privaat. Zij kunnen ook één of meer beheerders hebben. Teams kunnen zo worden ingesteld dat gebruikers zichzelf kunnen toevoegen of 'alleen op invitatie', wat betekent dat de beheerders van het team in kennis worden gesteld over verzoeken om te worden toegevoegd en daarover moeten beslissen.

Voor elk project kunnen beheerders specifieke teams aanwijzen om toegang te verlenen tot of te beperken voor in kaart brengen, te definiëren wie de gegevens mag valideren, of wie anders in staat is de metadata voor het project te bewerken.


## Een project voor in kaart brengen maken

Klik, om toegang te verkrijgen tot het gedeelte voor beheer, op `Beheren` in de navigatie aan de bovenzijde. Op de eerste regel ziet u een ruimte voor 'Projecten'. Klik, daarnaast, op de knop `Toevoegen` om er een te maken.

![TM Add Project][]

U kunt, om het gebied van interesse (gebied voor in kaart brengen) van uw project voor in kaart brengen te definiëren, kiezen tussen ofwel:

* Optie 1: `Tekenen` van het gebied van interesse op een webkaart (voorkeursmethode)
* Optie 2: `Bestand uploaden` om het gebied van interesse te importeren vanuit een geoJSON, KML of Shapefile. Dit zou ook specifieke taken kunnen bevatten (meer informatie is te vinden in het gedeelte "Gevorderd maken van project" hieronder)

![TM New][]

### Het in kaart te brengen gebied definiëren

![TM Draw AoI][]

1. U kunt naar andere lagen voor de achtergrond schakelen met de knoppen aan de bovenzijde. 
1. Click the `Draw` button on the left.
2. Houd, om een polygoon te tekenen die het gebied om in kaart te brengen weergeeft in het kaartvenster, de rechtermuisknop ingedrukt om de kaart te verplaatsen zonder te klikken, wat een knoop zal toevoegen.  De polygoon zou net aan het in kaart te brengen gebied moeten omvatten. Dit bespaart tijd bij het voltooien van tegels die niet van belang zijn (d.i. oceaan, bos)
3. Klik op uw beginpunt om de polygoon te voltooien.
4. Ga door met het toevoegen van knopen met één enkele muisklik. Een dubbele muisklik zal de polygoon voltooien. <!--Na het voltooien van een polygoon kunt u de knopen verplaatsen of nieuwe toevoegen om het gebied precies zo te krijgen als u dat wilt.-->

### Taken definiëren

Nadat het overall gebied om in kaart te brengen is gedefinieerd, zal het worden opgedeeld in kleinere gebieden, genaamd *Taken*. Deze taken moet een goede grootte hebben, zodat zij snel en door meerdere mensen kunnen worden voltooid, waarbij veel mensen bijdragen aan een collectief doel voor het project.

![TM Tile Sizes][]

The mapping area is automatically split into grid cells and each cell becomes a task. Use the `Larger` and `Smaller` buttons to adjust the overall size of the task squares.

> Use an satellite imagery to determine a good task size is very helpful. You can switch between several background map layers with the buttons on the top of the map. <!-- If you have custom imagery for the project, you can also load that in by using the button in the upper right of the map and putting in a TMS or WMS url. -->

After you've adjusted the base grid task size, you can selectively divide certain tasks into four smaller ones with the `Click to split` button. Or you can `Draw area to split`, and it will let you draw a polygon over an area and all tasks within it will be split into four new ones each. The Reset button will remove all of your custom splitting.

**Task sizes**:  Please take you time and define very carefully suitable task sizes! The optimal task size depends heavily on the amount of objects that are requested for being mapped in each task. Tasks sizes on rural areas are usually larger than for mapping projects, which are about digitizing buildings in cities por dense settlement areas. Ideally, try mapping an area of the project yourself to see the challenges and effort to map it. This should help you to decide on an optimum square size.

It is recommended to choose task sizes that you are confident mappers can complete them in 15-20 minutes.

> Considerations for deciding on task sizes:
> -  Beginner mappers roughly needs four times as long as an experienced mappers.
> -  Beginner mappers need to develop an eye for satellite imagery. Spotting the right features might be difficult.
> -  Beginner mappers face challenges tracing a lot similar features such as buildings.
> -  A square may be split later on, but there is no option to join squares together.
> -  On the edge and corners of tasks, there is always the potential to get in conflict with a fellow mapper next to you. Smaller tasks means more corners and edges. There is a tradeoff in the size to make it easy for mappers, but to not produce mapping conflicts between them.

After finalizing the definition of task sizes, click `Next`.

### Project Area Trim

![TM Trim][]

After determining the task sizes you will have the option to trim the tasks to the extend of your mapping area. If you simply click on `Trim` then you skip all task squares which do not contain the mapping area

![TM Trim coarse][]

If you check the box about trimming to the exact area before clicking on `Trim` then you obtain arbitrary task shapes at the fringe

![TM Trim fine][]

After finalizing a the mapping area trim, click `Next`.


### Save the project

Give the project a title (can be edited on the next screen) and click `Create`. First step is done.

Learn more about how to add descriptions and instructions to the project and get it published to the mappers in our "Edit a mapping project" chapter below.

### Advanced: Define mapping project areas and tasks with imported geodata

Geospatial desktop applications like JOSM or QGIS allow mappers to more precisely draw the areas of interest, compared to the slippy web map inside the Tasking Manager. You can also determine special task shapes and sizes beforehand.

> The Tasking Manager is a web application. Please make sure the file you upload is reduced in it's size. You might want to simplify geometries first and cut off too many digits of the coordinates.

**Upload a GeoJSON or KML file of the area of interest to be mapped**

1. In the first step of creating a project click on option 2, the ‘Upload file’ button.
2. Browse to your file in the File Upload window.
3. Click the file name to highlight the file and then click ‘Open’.
4. Imported areas of interest can not be edited.

After uploading a file to the Tasking Manager you can select if you want to define the tasks either as 

1. `Square Grid`, with the functionality described above to define tasks.
2. `Arbitrary Geometries`, coming from the file you just uploaded.

**Define arbitrary geometries**

If you uploaded a file to define your project area, that file may also contain the shapes for the individual tasks. E.g. if the area of interest consists of one polygon, the project will have just one task. This should only be used in special cases and for specific reasons. For example, an import of roads project might need custom task shapes or output from a mapping area reduction process.

Please note, arbitrary geometries can not be split. They should only be used in special cases, as they have implications on the performance of the tool.

## Edit a mapping project

After a project has been initially set up and created, you have to edit its information and settings:

- Description - Used for display in lists and motivational information for mappers
- Instructions - Detailed instructions for what and how to map the needed objects/entities/features
- Metadata - Additional information used for categorizing the Project. Often used in filtering the full list of projects.
- Imagery - Place to provide a TMS URL and License required.
- Priority Areas - Allows you to specify parts of the Project that should be mapped first.
- Permissions - Allows you restrict access to the project for mapping and validation.
- Settings - Project due date and JOSM Presets.
- Actions - Send messages to contributors, validate and invalidate the entire project with one click.

> Filling in this information carefully is an essential part of a successful mapping project. It is very important project objectives and resources are clearly communicated so mappers are aware of specific and important information. Keep in mind, mappers may not have previous experience with OpenStreetMap, and will not be familiar with tagging guidelines.
>  It is advisable to confine one project to one class of objects to be mapped. If you need a basemap of an area better split it in several projects, one for the roads, one for the buildings etc. Now beginners can focus on a small class of objects while learning how to map them correctly.

### Description

![TM Description][]

This screen allows you set the project status as Draft, Published, or Archived, priority, a short description used in project listings and the long description available once a mapper has selected the project.

Both the short and long description should provide information about why the project exists, who will use the data and the expected the impact the mapping will have. These fields support Markdown text and can include images and videos.

### Instructions

![TM Instructions][]

**Entities to Map** - A list of the features you want users to map. Generally the fewer features the better as they are more likely to get completed.

> Projects that ask for lots of entities to be mapped are difficult for mappers and difficult to get validated. They take much longer to get a good usable dataset. Task sizes are also difficult to make efficient for different types of mapping, e.g., buildings need small task squares, roads and waterways need larger task squares. Making multiple projects over the same area to get buildings and linear features mapped is a best practice.

**Changeset Comment** - This is the default changeset comment that will be attached to every data upload to OSM. It usually includes something that identifies the Tasking Manager the project resides on and the features that were mapped. It is often used for "hash tags" to help identify the organization requesting and/or doing the mapping. It can also describe the mapping being done, e.g., "Mapping buildings."

> Users should be instructed to fill in meaningful comments about what they mapped, but helping them out with good default comments is always a good idea.

**Detailed Instructions** - This is where the majority of your detailed instructions will be placed and what we expect every mapper and validator to read carefully and follow.

See the below notes on creating good instructions.

**Per Task Instructions** - These will be displayed when a mapper selects a task and also has a special feature that allows Task specific URLs to be crafted based on the typical "slippy map" x, y, z coordinates.

### Metadata

![TM Metadata][]

> All of these fields should be filled in and will become non-optional in future versions of the Tasking Manager.

**Mapper Level** - This is an indication of the difficulty of the mapping project. There are 3 options Beginner, Intermediate and Advanced. This setting is an indication to the mapper what experience level they should have to be most successful in mapping the project. It can be used in project list filtering and the suggested level can be required in the Permissions screen.

**Type of Mapping** - Used in project list filtering and helps mappers find projects they like to map.

**Organization** - The organization whose project managers should have administrative permissions for this project. The organization must have been previously registered with the Tasking Manager.

**Interests** - Used to suggest projects to mappers. Mappers specify their interests in their profile.

**OSMCha filter ID** - OSMCha is offered as a link from the contributions overview. The standard filter confines output to the bounding box of the project and to contributions not older than the project creation date and with the name of the project in the changeset comment. If you think something different would be a better approach  to analyze the changesets of your project then either provide an OSMCha URL or an OSMCha filter id here.

### Priority Areas

![TM Priority Area][]

Use the provided tools to draw areas that should be mapped first. You can have multiple priority areas for a Project. You can also change priority areas at any time.

> During disaster mapping, early in the event, having a large project mapping area and using priority areas to focus mapping as new information comes in is a best practice.

### Imagery

URL Field - A field that takes a TMS URL that will passed automatically to the OSM Editor the mapper or validator uses. Please follow the example, it is very important it is formatted correctly to work in all editors.

License - Optionally, if there is a specific license required for the mapper to accept in using the imagery, you can select it here. If you need a license that is not available, you can contact an administrator for the Tasking Manager installation and ask them to add it.

### Permissions

![TM Permissions][]

**Mapping permissions** - Allows you to require that a mapper is at the proper level to map on the project (Metadata screen above). Mapper levels can be set manually, but are automatically applied based on total changesets. You may also require a mapper to be part of a team. Teams can be selected below

**Validation permissions** - Allows you to require that a mapper is at the proper level to validate on the project (Metadata screen above). Mapper levels can be set manually, but are automatically applied based on total changesets. You may also require a validator to be part of a team. Teams can be selected below

**Teams** - Select teams for mapping and validation. If you do so then you can restrict mapping and/or validation to team members using the controls above. You may select several teams for each role. Select a team, select a role and press 'Add'. Once you added a team you may edit its role or delete the assignment.

**Privacy** - This restricts access to the project to those users who are part of the team to which the project belongs.

### Settings

![TM Settings][]

**Default Language** - Sets the default instructions language for a project.

**Editors** - Restricts the available editors to those checked. You may specify different sets for mapping and for validation.

**Enforce random selection** - If checked then users cannot select a specific task for mapping.

### Actions

![TM Actions][]

**Message all ccontributors** - Sends a Tasking Manager message to everyone who has marked a task complete or valid. It can be used to thank contributors and/or guide them to other projects in a portfolio/campaign. It should also be used before using either of the two Validate/Invalidate all Tasks options described below.

**Mapping, validation and invalidation** - This will set the status of all tasks to either mapped, validated or invalidated. Handle with care as there is no undo.

**Reset tasks** - This will reset all tasks to their pristine state but previous actions will still available in the task history. Handle with care as there is no undo.

**Transfer project ownership** - Lets you specify another user who will become the owner of this project. Handle with care as there is no undo.

**Clone Project** - This will create a duplicate of the project except for the mapping area, task grid and priority areas which you will need to re-import or re-draw.

**Delete Project** - This will permanently delete the project from the Tasking Manager. Handle with care as there is no undo. This action is no longer available as soon as any contributions have been made to the project.

### Instruction Notes

Please use plain language as your target audience may not consist of native English speakers.

1. The title of the project should already reveal what entities should be mapped. Prefer a title such as
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. The most important messages should appear on the instruction tab first to ensure they are read. This would include any special imagery to use instead of Bing. The first sentences could mention that it is not required to map every single house if the project is about roads and residential areas, for example. Or that it is required to map every house if the project is to be used for population density estimates. These are the messages that should also appear on the description tab.
3. Other points of clarification: If the project is suitable for mappers with a certain level of experience only. For example, the project uses imports or existing data should be realigned to GPS traces or some other imagery (cf. the previous section). Phrase it so that new mappers will feel invited contributing to other projects but understand that advanced techniques are required in this instance.
4. There are guidelines that cover common errors we see while validating. One example is Blake Girardot's compilation on [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Use the link in the instructions and explain that adhering to these guidelines is required.
5. The definitive resource on tagging is the [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). For many HOT-related tasks the page on [tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) is the proper specialization and highly recommended reading for every mapper. If your project must adhere to different tagging standards then write a similar page in the wiki and link it in your instructions.


### Considerations concerning Imagery

In most cases we use the "standard" Bing imagery. But there are situations where you might want to choose an alternative source:

1. Bing does not provide high-resolution coverage for your mapping area.
2. Bing has considerable cloud cover in this area.
3. You need newer imagery for post-disaster evaluation.

If Bing does not prove adequate then Mapbox is the next choice. You should only look for other sources if neither of these two meet your requirements.

In such cases it is not sufficient to choose a license-compatible source and make it available through a WMS or TMS service. Your mapping area has probably already been partially mapped using Bing or Mapbox imagery and there might be a noticeable offset between images. You must have a close look at various locations of your mapping area and determine the offset between your imagery and previously mapped data. If the existing OSM data are offset with respect to your imagery but fit Bing imagery then we usually assume that Bing is the "gold standard" unless we have GPS traces which prove that this assumption is wrong.

If there is a constant offset between your imagery and Bing across the mapping area then this might be corrected on the server so that images from various sources loaded in the editor match. If this is not possible, if the offset varies across the mapping area or if existing data are aligned with various sources then it is time for plan B:

The important point is that you must develop a strategy for how to cope with these issues and provide detailed instructions to mappers and validators. We strongly suggest that you declare such a project "for experienced mappers only" and explain that experience in this case does not mean having mapped 200+ buildings but having already dealt with alignment issues and different imagery sources.

One possible strategy could include these steps:

1. Clearly state which imagery is to be considered the reference to which anything else should be aligned. In this case let us assume that the reference is Bing.
2. Make sure that all existing features which are also visible on Bing are aligned with Bing imagery, i.e. realign if necessary.
3. Align the alternative imagery to existing features (and thus to Bing) using the imagery offset function of the editor.
4. Add new features from the now correctly aligned alternative imagery.

It is important that step 3 is repeated for every task of the project and the individual task squares should not be too large because imagery offsets can vary considerably across an mapping area, particularly if the terrain is not flat. Even imagery discontinuities may occur across a project - look out for them and advise the contributors of such a problem.

Here are some suggested bits of information which you might include in the project instructions:

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
