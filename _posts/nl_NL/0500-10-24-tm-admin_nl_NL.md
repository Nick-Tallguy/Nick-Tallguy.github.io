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
-  [Inloggen en toegang](/nl_NL/coordination/tm-admin/#login-and-access)
-  [Rechten](/nl_NL/coordination/tm-admin/#permissions)
-  [Een project maken](/nl_NL/coordination/tm-admin/#create-a-project)
    -  [Gebied voor in kaart brengen definiëren](/nl_NL/coordination/tm-admin/#define-mapping-area)
    -  [Taken definiëren](/nl_NL/coordination/tm-admin/#define-tasks)
    -  [Advanced: Define tasks with imported data](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-data)
    -  [Project area trim](/en/coordination/tm-admin/#project-area-trim)
    -  [Name the project](/en/coordination/tm-admin/#name-the-project)
-  [Edit a project](/en/coordination/tm-admin/#edit-a-project)
    -  [Description - the first thing users learn about your project](/en/coordination/tm-admin/#description)
    -  [Instructions - what the users should do](/en/coordination/tm-admin/#instructions)
    -  [Metadata - where the project belongs to](/en/coordination/tm-admin/#metadata)
    -  [Priority Areas - where users should start mapping](/en/coordination/tm-admin/#priority-areas)
    -  [Imagery - the basis for mapping](/en/coordination/tm-admin/#imagery)
    -  [Permissions - who is allowed to map and validate](/en/coordination/tm-admin/#permissions)
    -  [Settings](/en/coordination/tm-admin/#settings)
    -  [Actions](/en/coordination/tm-admin/#actions)
    -  [Custom editor](/en/coordination/tm-admin/#custom-editor)
    -  [Save and test](/en/coordination/tm-admin/#save-and-test)
    -  [Publish](/en/coordination/tm-admin/#publish)
-  [Project management](/en/coordination/tm-admin/#project-management) 
    -  [Be responsive](/en/coordination/tm-admin/#be-responsive)
    -  [Sequencing projects](/en/coordination/tm-admin/#sequencing-projects)
    -  [Project lifecycle](/en/coordination/tm-admin/#project-lifecycle)
-  [Additional information](/en/coordination/tm-admin/#additional-information)
    -  [Considerations concerning imagery](/en/coordination/tm-admin/#considerations-concerning-imagery)

De Tasking Manager is het essentiële programma om het in kaart brengen in OpenStreetMap te coördineren. Het ondersteunt initiatieven voor humanitair in kaart brengen, mapathons uitvoeren of het maken van taken om in kaart te brengen voor studenten. De toepassing deelt een gebied op in beheersbare geografische stukken, die snel en met meerdere mensen in kaart kunnen worden gebracht. Deze benadering maakt het verdelen van taken aan veel individuele mappers mogelijk, waardoor mogelijke conflicten bij bewerken worden verkleind. 

De software stimuleert nauwkeurige en kwaliteitsgegevens voor in kaart brengen door een consistente set instructies te verschaffen aan uw mappers (bijv. 'breng alle wegen en gebouwen in kaart'). In het kort is de Tasking Manager hoe u de werkstroom voor open activiteiten voor in kaart brengen instelt en beheert. 

Deze handleiding beschrijft het basisbeheer van de Tasking Manager. Het behandelt instructies om projecten voor in kaart brengen te maken en aan te passen en het afhandelen van rechten voor in kaart brengen en nakijken van gecrowd-sourcede gegevens.

## Inloggen en toegang

Voor het inloggen in de Tasking Manager is een account voor OpenStreetMap (OSM) nodig. U kunt de [HOT Tasking Manager](https://tasks.hotosm.org) bezoeken, of enige andere gemeenschapsinstantie van uw voorkeur. Klik daar op `Sign up` en het brengt u naar de [website van OpenStreetMap](https://www.openstreetmap.org) om uw account te maken. Of klik op `Log in` als u al een account hebt, en in de pop-up kunt u de Tasking Manager beperkte toegang verlenen tot uw account van OSM.

## Rechten

Het meest basale niveau voor een gebruiker is **mapper**. Mappers kunnen inloggen in de Tasking Manager om een project te zoeken en te selecteren om aan te werken. Alle functionaliteiten voor de mapper worden beschreven in de [LearnOSM Handleiding in kaart brengen met Tasking Manager](/nl_NL/coordination/tm-user/). Onthoud dat sommige projecten, zoals die in de status concept (d.i. nog niet gepubliceerd) niet zichtbaar zijn voor gewone gebruikers.

Alle speciale rechten worden afgehandeld door *organisaties* en *teams*. Een **organisatie** is de hoofdparaplu, en onder elke organisatie kunnen projecten voor in kaart breneg  en teams worden gemaakt. Een organisatie zou een gebruiker van gegevens kunnen vertegenwoordigen, zoals een humanitaire organisatie, of een gemeenschap van OpenStreetMap. Neem contact op met de technische beheerders van de instantie van de Tasking Manager als u uw organisatie wilt instellen op de Tasking Manager. Bekijk [HOT Tasking Manager Organizations](https://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Team/HOT_Tasking_Manager_Organizations) voor een lijst van organisaties die aanwezig zijn in de Tasking Manager van HOT. Als uw gemeenschap of organisatie daar niet is vermeld en uw zou projecten willen maken op HOT's Tasking Manager, vul dan [dit formulier](https://bit.ly/HOTTasking) in om uw interesse te laten blijken. 

Elke organisatie heeft één of meer **managers** (beheerders). Zij hebben de rechten om geassocieerde projecten te maken en aan te passen. Alle opties voor beheer zijn toegankelijk via het gedeelte `Beheren` in de hoofdnavigatie.

Beheerders van een organisatie kunnen **teams** maken. Teams zijn groepen van OpenStreetMap gebruikers en zij kunnen voor iedereen zichtbaar zijn of privaat. Zij kunnen ook één of meer teambeheerders hebben. Teams kunnen zo worden ingesteld dat gebruikers zichzelf kunnen toevoegen of 'alleen op invitatie', wat betekent dat de beheerders van het team in kennis worden gesteld over verzoeken om te worden toegevoegd en daarover moeten beslissen.

Voor elk project kunnen beheerders specifieke teams aanwijzen om toegang te verlenen tot of te beperken voor in kaart brengen, te definiëren wie de gegevens mag valideren, of wie anders in staat is de metadata voor het project te bewerken.

## Een project maken

Klik op `Beheren` in de navigatie aan de bovenzijde. Op de eerste regel ziet u een ruimte voor 'Projecten'. Klik, daarnaast, op de knop `Toevoegen` om er een te maken.

![TM Add Project][]

U kunt, om het gebied van interesse (gebied voor in kaart brengen) van uw project voor in kaart brengen te definiëren, kiezen tussen ofwel:

* Optie 1: `Teken` het gebied van interesse handmatig
* Optie 2: `Bestand uploaden` om het gebied van interesse te importeren als een bestand van GeoJSON, KML of gezipt shapefile

![TM New][]

### Het in kaart te brengen gebied definiëren

* Optie 1: `Teken` het gebied van interesse handmatig

1. U kunt naar andere lagen voor de achtergrond schakelen met de knoppen aan de bovenzijde. 
1. Klik op de knop `Tekenen` aan de linkerkant.
2. Houd, om een polygoon te tekenen die het gebied om in kaart te brengen weergeeft in het kaartvenster, de rechtermuisknop ingedrukt om de kaart te verplaatsen zonder te klikken, wat een knoop zal toevoegen.  De polygoon zou net aan het in kaart te brengen gebied moeten omvatten. Dit bespaart tijd bij het voltooien van tegels die niet van belang zijn (d.i. oceaan, bos)
3. Klik op uw beginpunt om de polygoon te voltooien. <!--Na het voltooien van een polygoon kunt u de knopen verplaatsen of nieuwe toevoegen om het gebied precies zo te krijgen als u dat wilt.-->

<br>

* Optie 2: `Bestand uploaden` om het gebied van interesse te importeren als een bestand van GeoJSON, KML of gezipt shapefile

1. In the first step of creating a project click on `Upload file`.
2. Blader naar uw bestand in het venster Bestand uploaden.
3. Klik op de bestandsnaam om het bestand te accentueren en klik dan op ‘Openen’.
4. Geïmporteerde gebieden voor in kaart brengen kunnen niet worden aangepast in Tasking Manager.

U zou een bestand kunnen uploaden dat de taken (kleine vierkanten voor in kaart brengen) al vooraf gedefinieerd heeft. Vind meer informatie hierover in het gedeelte [Taken definiëren met geïmporteerde gegevens](/nl_NL/coordination/tm-admin/#advanced:-define-tasks-with-imported-data) hieronder.

> Opmerking: De Tasking Manager heeft beperkingen! De maximale technische limiet voor een project is 5.000 km2, maar, om te zorgen dat uw project niet te lang duurt om te voltooien, probeer het onder de 1.000 km2 te houden. Als u een gebied in kaart wil brengen dat groter is dan dit, dan zult u meerdere projecten moeten maken. U zult de grootte van het project kunnen zien in de linkerbenedenhoek van de voorbeeldkaart. 

### Taken definiëren

Nadat het gehele gebied voor in kaart brengen is gedefinieerd, zal het worden opgedeeld in kleinere gebieden, genaamd *Taken*. U moet de grootte van de taken in uw project zorgvuldig overwegen. Goed ontworpen projecten hebben een toepasselijke grootte voor taken, wat het mogelijk maakt ze zo efficiënt mogelijk te voltooien. 

![TM Tile Sizes][]

Het gebied van het project wordt automatisch gesplitst in rastercellen en elke cel wordt een taak. Gebruik de knoppen `Groter` en `Kleiner` om de gehele grootte van de vierkanten voor de taken aan te passen. De standaard grootte voor taken is waarschijnlijk veel te groot. Als u de grootte van de taak wijzigt, let dan op de grootte van de taak, vermeld links naast 'De grootte van elke taak is bij benadering … km2'.

Neem uw tijd en stel uw grootte van de taken heel zorgvuldig in! Probeer en richt er op om de grootte van uw talen te reduceren tot waar u denkt dat een mapper met vertrouwen **15 minuten nodig heeft om te voltooien**. De optimale grootte van taken is geheel afhankelijk van de/het object(en) die u door mappers wilt laten identificeren en de dichtheid van die objecten. Bijvoorbeeld een project voor het in kaart brengen van wegen in een afgelegen gebied zou veel grotere taken hebben dan een project dat het digitaliseren van gebouwen in een dichtbevolkte nederzetting behelst.

> Zoom in en activeer de afbeeldingen van Bing om een goede grootte voor de taak te bepalen. U kunt schakelen tussen verschillende lagen voor de achtergrondkaart met de knoppen boven op de kaart.

Nadat u de gehele grootte voor de taken hebt aangepast, kunt u selectief bepaalde taken splitsen in vier kleinere met de knop `Klikken om te splitsen`. Of u kunt een `Gebied tekenen om te splitsen`, en het zal u een polygoon laten tekenen over een gebied waarin alle taken worden gesplitst. Deze functies zijn in het bijzonder nuttig als de dichtheid van het object dat u in kaart wilt brengen varieert in uw gebied van het project. Bijvoorbeeld: er zou een dicht bebouwd kustgebied kunnen zijn dat kleinere taken nodig heeft en een inlands afgelegen  gebied dat veel grotere taken nodig heeft. De knop `Herstellen` zal al uw aangepaste splitsingen verwijderen.

Overwegingen bij het bepalen van tegelgrootten
-  Taken kunnen worden gesplitst, maar er is geen optie om ze opnieuw samen te voegen als een project eenmaal is gemaakt.
-  Als een project eenmaal is gemaakt, is het splitsen van taken bijzonder tijdrovend en moet met één taak per keer worden uitgevoerd.
-  Aan de rand en hoeken van taken is er een groter potentieel voor conflicten tussen naburige mappers. Kleinere taken betekenen meer randen en hoeken. Er is een nadeel in de grootte voor taken om het voor mappers gemakkelijker te maken, maar niet om conflicten te produceren bij het in kaart brengen tussen hen.
-  Small tasks are easier to map, but more tasks means more time needs to be spent by mappers updating the status of each, and projects with tasks that are too small can therefore be inefficient.
-  Beginner mappers roughly need four times as long as experienced mappers.
-  Beginner mappers need to develop an eye for satellite imagery. Spotting the right features might be difficult.

Once you are happy with your task sizes, click `Next`.

### Advanced: Define tasks with imported data

If you uploaded a file to define your project area, that file may also contain the shapes for the individual tasks. For example, a completed project from MapSwipe which focuses on populated areas or a complex grid you have pre-created in QGIS. If that is the case, make sure to enable the 'Set tasks using uploaded polygons' toggle. This will skip straight to the naming stage of project creation. 

![TM New Polys][]

### Project area trim

![TM Trim][]

After determining the task sizes you will have the option to trim the tasks to the extent of your mapping area. You will almost certainly want to do this. Click on `Trim` to remove all task squares which do not overlap your project area. 

![TM Trim coarse][]

If you toggle on 'Trim the tasks to define the exact Area of Interest for mapping.' before clicking on `Trim` the overlapping task portions at the edge of your area of interest will be trimmed sharply against your area of interest.

![TM Trim fine][]

Trimming sharply may result in some extremely small tasks. These tiny tasks can confuse mappers. You can choose to remove them by selecting `Discard` when you see the message 'There are ... tasks smaller than 2,000m2. Would you like to discard them?'

> Take note of the number of tasks that your project has (look in the bottom left hand corner of your map). The maximum technical limit for the number of tasks in one Tasking Manager project is 5,000. However, to ensure your project doesn't take too long to complete, try and keep it under 1,000 tasks - if you need to map a larger area try splitting it into smaller projects. 

Click `Next`.

### Name the project

A project's name is one of its most important aspects when it comes to being discovered by the wider public. Try and include the name of the country the project is located (e.g. South Sudan), the reason for mapping (e.g. COVID Vaccination) and also the more specific location, maybe the district or settlement name (e.g. Yambio County). For example a full project name might be: _South Sudan, COVID Vaccination, Yambio County_. 

Ensure your organization is selected under the 'Organization' field. 

> Before completing this stage make sure you are happy with the project's area of interest and the overall number of tasks, these elements cannot be adjusted later on. 

Click `Create`. Your project will be created but it will not publish immediately - you'll be directed to the Edit menu of the project first. 

## Edit a project

You'll now see the 'Edit' menu of your project. Before the project can be saved, you'll need to go through the 'Edit' menu carefully to complete setup. Here is a quick summary of the sub-menus you will see on the left hand side:

- Description - Set the status, priority and text description associated with your project.
- Instructions - Detailed instructions for how to map the needed features and approach the project.
- Metadata - Define the features that need to be mapped. Also includes information used for categorizing projects, used in filtering projects.
- Priority Areas - Allows you to specify parts within the project area that should be mapped first.
- Imagery - Choose the imagery that will load by default when volunteers map your project. 
- Permissions - Allows you restrict access to the project for mapping and validation.
- Settings - Toggle alternative editors such as RapiD on/off.
- Actions - Powerful bulk actions you can perform on your project, such as cloning or deleting.
- Custom editor - Add a custom editor using a URL

> Filling in this information carefully is an essential part of a successful mapping project. It is particularly important that the project description and instructions are clearly communicated so mappers are aware of the importance of data quality and best practice. Keep in mind, contributors may not have previous experience with OpenStreetMap and are unlikely to be familiar with tagging guidelines.

### Description

![TM Description][]

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

Next is the project priority. This dictates how close to the front of the Tasking Manager the project will be seen in the Explore Projects page. This can be set to either **Urgent**, **High**, **Medium** or **Low**.

- **Urgent** - Only set this status if the project is **in response to a disaster and the data needs are immediate**. Very few projects have this priority level. 
- **High** - For projects that are not necessarily in response to a disaster but the data is needed in a **short time-frame**. 
- **Medium** - If the data is needed but not in a particularly short time-frame.
- **Low** - If you want to publish your project but do not want to make it very prominent. You might prefer to share your project to specific groups using the project URL.

#### Short description

Add at least two sentences that briefly describe your project. This is important because volunteers will read this to decide on whether to contribute. Try and clearly explain **why** the data is being collected and **how the map data will be used**. 

> These fields support **Markdown** and can include images (drag and drop) and videos (add a YouTube URL for automatic embedding).

#### 'Long' Description

You can go into more detail about your project here. Provide more information about why the project exists, who will use the data and the expected the impact the mapping will have. If the project involves any collaborations or partners you could expand on that here. 

> For any of these text fields you can choose to add additional translations. If you'd like to add a translation, click on the two letter language code and enter the translated text. For users that have set the Tasking Manager to that language it will automatically display the project in that language. By default, the initial field is English language, this can be altered in the 'Settings' sub-menu of your project.

#### Due date

If you have a date by which you wish your project to be completely mapped and validated you can add that here. This is optional and once the date is exceeded it does not change anything for the project and volunteers can continue contributing afterwards. Contributors will see the due date listed next to the project. 

### Instructions

![TM Instructions][]

#### Changeset comment

Here you can add additional tracking tags which will automatically populate each time someone saves their work while mapping your project. For example, if you want to start tracking all contributions across all your organization's projects you might want to add a common tracking tag to them, e.g. #MSF or #cartONG. Please try to **keep these tags short** and do not add too many of them, cluttered changeset comments are confusing to interpret and space should be left for mappers to leave descriptive changeset comments. 

> Please note that a unique project tracking tag will already be present, e.g. #hotosm-project-11188 - **please leave this as it is**, it is very important for tracking the progress of the project. The number at the end of the tag is your project's unique ID.

#### Detailed Instructions

Add descriptive instructions for mappers and validators to follow while working on your project. Your project will be public, therefore **write instructions for inexperienced users** with no local or contextual knowledge. Please use plain language as your target audience may not be native English speakers.

1. Write the most important information at the top to ensure it is prominent. This could includes a description of the imagery and a warning of an imagery offset issue with guidance. Or it might instruct mappers to ignore paths and tracks in a highway mapping project and focus on more prominent highways.
2. Add context/location specific instructions. These vary significantly but will help mappers interpret satellite imagery. E.g. 'Expect to see many circular brown thatched huts in this South Sudan project' or 'Settlements in Guatemala are often densely built, zoom extremely far in when mapping each building to ensure they do not connect or overlap'. Drag and drop aerial imagery screenshots into the instructions here to enhance this section.
3. Definitely include a detailed description of **how to map each feature** that you wish to be mapped. Look at existing (but recent) projects on Tasking Manager to see if you can borrow some existing instructional text (beware that some projects will not have good instructions!).
4. The definitive resource on tagging is the [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). For many HOT-related projects the page on [tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) is the proper specialization and may be worth linking to in your project's instructions. If your project must adhere to different tagging standards then write a similar page in the Wiki and link it in your instructions.
5. Other points of clarification: If the project is suitable for mappers with a certain level of experience only. For example, the project uses imports or existing data should be realigned to GPS traces or some other imagery. Phrase it so that new mappers will feel invited contributing to other projects but understand that advanced techniques are required in this instance.
6. Er zijn richtlijnen die algemene fouten behandelen die we zien bij het valideren van het in kaart gebrachte. Eén voorbeeld is Blake Girardot's compilatie over [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Gebruik de link in de instructies en leg uit dat het volgen van die richtlijnen is vereist.

#### Per Task Instructions 

This is optional but it is possible to add a short snippet of additional instruction that mappers will see while they are working on a task. This is seen on the right hand side of the Tasking Manager editor view above the 'Task Status' section. This will be seen at all times while mapping, so if there is something **particularly important** that you want to **instruct mappers** about you could add that here. 

### Metadata

![TM Metadata][]

#### Mapper level

This changes the difficultly level which is **displayed** for your project. Consider this very carefully, complex projects which are inappropriately set to Beginner difficulty **can result in significant data quality issues**. 

> Note that this does not change who can **actually contribute** to your project, those restrictions are implemented under the Permissions sub-menu.

Most projects are set to either **Beginner** or **Intermediate** difficulty, a handful of projects are set to Advanced. 

- **Beginner** - Consider this if your project is easy to map and:
  - You are only asking contributors to map one feature, particularly **buildings only**
  - The density of features is low, i.e. in a **rural** area
  - There is a **low quantity** of existing OSM data in your project area
  - There are no imagery alignment issues
- **Intermediate** - If your project is trickier to map, this should be considered if:
  - You are asking contributors to map more than one feature, e.g. buildings **and** roads
  - There is a medium/high density of those features in your project area, i.e. **urban** areas
  - There is **substantial** existing OSM data in your project area
  - There might be **imagery alignment issues** or you ask contributors to use more than one imagery source
- **Advanced** - If the project is extremely difficult to map, consider this if: 
  - There is a very high density features in your project area, i.e. **central urban** areas
  - There is a **lot of** existing OSM data in your project area
  - There are **complex imagery alignment** issues

#### Types of mapping

Toggle these on/off depending on the features that you wish to be mapped in your project. Generally the **fewer features the better**, as projects which aim to map too many features often struggle to make much progress. 

> Projects that ask for lots of features to be mapped are difficult for mappers and difficult to get validated. They take much longer to get a good usable dataset. Task sizes are also difficult to make efficient for different types of mapping, e.g., buildings need small task squares, roads and waterways need larger task squares. Making multiple projects over the same area to get buildings and highways/waterways mapped separately is best practice. 

#### iD Editor Presets

If you choose one or more items from the drop-down list then mappers using iD will only be able to assign these features to the objects they map. This is recommended for beginner, **buildings-only projects**. It will mean that contributors will not be able to tag other features, even if they try. Avoid using presets for more complex projects, as it can quickly become a burden. For example, a highway mapping project would need dozens of presets to be added to ensure all highway types could be mapped. 

#### Organization

Your organization name should be in here already, otherwise choose it from the dropdown menu.

#### Campaign

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
