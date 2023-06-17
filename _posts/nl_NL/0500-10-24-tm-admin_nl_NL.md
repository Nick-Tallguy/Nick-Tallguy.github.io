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
    -  [Geavanceerd: Taken definiëren met geïmporteerde gegevens](/nl_NL/coordination/tm-admin/#advanced:-define-tasks-with-imported-data)
    -  [Projectgebied verkleinen](/nl_NL/coordination/tm-admin/#project-area-trim)
    -  [Het project een naam geven](/nl_NL/coordination/tm-admin/#name-the-project)
-  [Een project bewerken](/nl_NL/coordination/tm-admin/#edit-a-project)
    -  [Omschrijving - het eerste dat gebruikers leren over uw project](/nl_NL/coordination/tm-admin/#description)
    -  [Instructies - wat de gebruikers zouden moeten doen](/nl_NL/coordination/tm-admin/#instructions)
    -  [Metadata - waar het project bij hoort](/nl_NL/coordination/tm-admin/#metadata)
    -  [Gebieden met prioriteit - waar gebruikers zouden moeten beginnen met in kaart brengen](/nl_NL/coordination/tm-admin/#priority-areas)
    -  [Afbeeldingen - de basis voor het in kaart brengen](/nl_NL/coordination/tm-admin/#imagery)
    -  [Rechten - wie mag in kaart brengen en valideren](/nl_NL/coordination/tm-admin/#permissions)
    -  [Instellingen](/nl_NL/coordination/tm-admin/#settings)
    -  [Acties](/nl_NL/coordination/tm-admin/#actions)
    -  [Aangepaste bewerker](/nl_NL/coordination/tm-admin/#custom-editor)
    -  [Opslaan en testen](/nl_NL/coordination/tm-admin/#save-and-test)
    -  [Publiceren](/nl_NL/coordination/tm-admin/#publish)
-  [Project beheren](/nl_NL/coordination/tm-admin/#project-management) 
    -  [Reageer](/nl_NL/coordination/tm-admin/#be-responsive)
    -  [Reeksen in projecten](/nl_NL/coordination/tm-admin/#sequencing-projects)
    -  [Levenscyclus van een project](/nl_NL/coordination/tm-admin/#project-lifecycle)
-  [Aanvullende informatie](/nl_NL/coordination/tm-admin/#additional-information)
    -  [Overwegingen met betrekking tot afbeeldingen](/nl_NL/coordination/tm-admin/#considerations-concerning-imagery)

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
-  Kleine taken zijn gemakkelijker in kaart te brengen, maar meer taken betekent dat door mappers meer tijd moet worden gespendeerd aan het bijwerken van de status van elke taak, en projecten met taken die te klein zijn kunnen daardoor inefficiënt zijn.
-  Beginnende mappers hebben ruwweg vier keer zoveel tijd nodig als ervaren mappers.
-  Beginnende mappers moeten een oog ontwikkelen voor satellietbeelden. Herkennen van de juiste objecten zou moeilijk kunnen zijn.

Als u tevreden bent met de grootte van uw taak, klik dan op `Volgende`.

### Geavanceerd: Taken definiëren met geïmporteerde gegevens

Als u een bestand upload om uw projectgebied te definiëren, zou dat bestand ook de vromen voor de individuele taken mogen bevatten. Bijvoorbeeld: een voltooid project van MapSwipe dat focust op bevolkte gebieden of een complex raster dat u vooraf hebt gemaakt in QGIS. Als dat het geval is, zorg er dan voor dat 'Stel taken in met geüploade polygonen' is ingeschakeld. Dit zal direct doorgaan naar de fase van een naam geven bij het maken van het project. 

![TM New Polys][]

### Projectgebied verkleinen

![TM Trim][]

Na het bepalen van de grootte voor de taken heeft u de optie om de taken te verkleinen tot het bereik van uw gebied om in kaart te brengen. U zou dit bijna zeker willen doen. Klik op `Verkleinen` om alle vierkanten voor taken te verwijderen die uw gebied om in kaart te brengen niet overlappen.

![TM Trim coarse][]

Als u schakelt met 'Taken verkleinen om het exacte projectgebied voor in kaart brengen te definiëren.' voordat u op `Verkleinen` klikt zullen de gedeelten van taken aan de rand van uw gebied scherp worden verkleind ten opzichte van uw projectgebied.

![TM Trim fine][]

Scherp verkleinen zou kunnen resulteren in enkele extreem kleine taken. Deze kleine taken kunnen mappers in verwarring brengen. door `Negeren` te selecteren als u het bericht 'Er zijn … taken kleiner dan 2.000m2. Wilt u ze negeren?' ziet.

> Onthoud het aantal taken dat uw project heeft (kijk in de linkerbenednehoek van uw kaart). De maximale technische limiet voor het aantal taken in één project van Tasking Manager is 5.000. Echter, om er voor te zorgen dat uw project niet teveel tijd kost om te voltooien, probeer het onder de 1.000 taken te houden - als u een groter gebied in kaart wilt brengen, probeer het dan op te splitsen in kleienre projecten. 

Klik op `Volgende`.

### Het project een naam geven

De naam van een project is één van zijn meest belangrijke aspecten als het aankomt op het worden ontdekt door het bredere publiek. Probeer om de naam van het land waarin het project is gelegen op te nemen (bijv. South Sudan), de reden voor het in kaart brengen (bijv. COVID Vaccination) en ook de meer specifieke locatie, misschien de naam van het district of de nederzetting (bijv. Yambio County). Een volledige naam voor een project zou bijvoorbeeld kunnen zijn: _South Sudan, COVID Vaccination, Yambio County_. 

Zorg er voor dat uw organisatie is geselecteerd in het veld 'Organisatie'. 

> Overtuig u ervan, voor het voltooien van dit stadium, dat u tevreden bent met het projectgebied en het totale aantal taken, deze elementen kunnen later niet meer worden aangepast. 

Klik op `Maken`. Uw project zal worden gemaakt, maar zal niet onmiddellijk worden gepubliceerd - u zult eerst worden omgeleid naar het menu Bewerken van het project. 

## Een project bewerken

U zult nu het menu 'Bewerken' van uw project zien. U moet, voordat het project kan worden opgeslagen, zorgvuldig door het menu 'Bewerken' gaan om het maken te voltooien. Hier is een snel overzicht van de submenu's die u zult zien aan de linkerkant:

- Omschrijving - Stel de status, prioriteit en tekst voor de beschrijving, geassocieerd met uw project, in.
- Instructies - Gedetailleerde instructies over wat en hoe de benodigde objecten/entiteiten/mogelijkheden in kaart moet worden gebracht en het project moet worden benaderd.
- Metadata - Definieer de objecten die in kaart moeten worden gebracht. Bevat ook informatie die wordt gebruikt voor het categoriseren van projecten, gebruikt bij het filteren van projecten.
- Prioriteitsgebieden - Stelt u in staat delen in het projectgebied te specificeren die als eerste in kaart zouden moeten worden  gebracht.
- Afbeeldingen - Kies de afbeeldingen die standaard zullen worden geladen als vrijwilligers uw project in kaart brengen. 
- Rechten - Stelt u in staat rechten, voor toegang tot het project voor het in kaart brengen en het valideren, te beperken.
- Instellingen - Schakel alternatieve bewerkers, zoals RapiD, in/uit.
- Acties - Krachtige bulkacties die u op uw project kunt uitvoeren, zoals klonen of verwijderen.
- Aangepaste bewerker - Voeg een aangepaste bewerker toe met een URL

> Zorgvuldig invullen van deze informatie is een essentieel deel van een succesvol project voor in kaart brengen. Het is in het bijzonde rbelangrijk dat de omschrijving van het project en instructies helder worden gecommuniceerd zodat de mappers zich bewust zijn van de belangrijkheid van de kwaliteit van de gegevens en beste methoden. Onthoud dat deelnemers geen eerdere ervaring zouden kunnen hebben met OpenStreetMap en waarschijnlijk niet bekend zijn met de richtlijnen voor taggen.

### Omschrijving

![TM Description][]

#### Status

Eerste is de projectstatus. Deze kan worden ingesteld op **Concept**, **Gepubliceerd**, of **Gearchiveerd**.

- **Concept** - Uw project zal beginnen in de modus Concept. In deze modus zal het niet te zien zijn en het zal voor het publiek niet mogelijk zijn om er aan deel te nemen. Dit is perfect terwijl u nog steeds uw project aan het instellen bent en het te testen vóór het uitgeven. 
- **Gepubliceerd** - Als u de instelling van uw project hebt voltooid, het hebt getest en tevreden bent om het publiek te vermelden en te openen voor in kaart brengen/valideren.
- **Gearchiveerd** - Alle projecten zouden gearchiveerd moeten eindigen. Gearchiveerde projecten zijn publiek, maar vergrendeld voor bijdragen. U zou moeten overwegen uw project te archiveren als:
  - Het voor 100% in kaart is gebracht en gevalideer
  - De instructies of afbeeldingen substantieel verouderd zijn
  - Het project langer dan een jaar geleden werd gemaakt
  - De kaartgegevens niet langer nodig zijn voor humanitaire doelen in het projectgebied

#### Prioriteit

Volgende is de prioriteit van het project. Dit bepaalt hoe dicht bij de voorkant van de Tasking Manager het project te zien zal zien op de pagina Projecten verkennen. Dit kan worden ingesteld op **Urgent**, **Hoog**, **Medium** of **Laag**.

- **Urgent** - Stel deze status alleen in als het project **een antwoord is op een ramp en de gegevens onmiddellijk nodig zijn**. Heel weinig projecten hebben dit niveau van prioriteit. 
- **Hoog** - Voor projecten die niet noodzakelijkerwijze een antwoord zijn op een ramp, maar de gegevens zijn nodig in een **kort tijdsbestek**. 
- **Medium** - Als de gegevens nodig zijn, maar niet in een bijzonder kort tijdsbestek.
- **Laag** - Als u uw project wilt publiceren, maar het niet prominent aanwezig wilt laten zijn. U zou misschien de voorkeur hebben om uw project te delen met specifieke groepen die de URL van het project gebruiken.

#### Korte beschrijving

Voeg tenminste twee regels toe die in het kort uw project beschrijven. Dit is belangrijk omdat vrijwilligers dit zullen lezen om te beslissen of zij willen bijdragen. Probeer helder uit te leggen **waarom** de gegevens worden verzameld en **hoe de kaart zal worden gebruikt**. 

> Deze velden ondersteunen **Markdown** en mogen afbeeldingen bevatten (slepen en neerzetten) en video's (voeg een URL voor YouTube toe voor automatisch inbedden).

#### 'Lange' beschrijving

U kunt hier meer in detail op uw project ingaan. Geef meer informatie over waarom het project bestaat, wie de gegevens zal gebruiken en de verwachte impact die het in kaart brengen zal hebben. Als het project samenwerking of partners bevat, zou u daar hier over kunnen uitweiden. 

> Voor elk van deze velden kunt u er voor kiezen aanvullende vertalingen toe te voegen. Als een een vertaling zou willen toevoegen, klik op de twee-letterige landcode en voer de vertaalde tekst in. Voor gebruikers die de Tasking Manager hebben ingesteld voor die taal zal het automatisch het project weergeven in die taal. Standaard is het veld in de Engelse taal, dit kan wordne gewijzigd in het submenu 'Instellingen' van uw project.

#### Vervaldatum

Als u een datum hebt waarop uw wilt dat het project volledig in kaart is gebracht en gevalideerd, kunt u dat hier toevoegen. Dit is optioneel en als de datum eenmaal is verstreken verandert er niets aan het project en vrijwilligers kunnen later doorgaan met bijdragen. Deelnemers zullen de vervaldatum zien weergegeven naast het project. 

### Instructies

![TM Instructions][]

#### Opmerking wijzigingenset

Hier kunt u aanvullend tags voor volgen toevoegen, die automatisch zullen worden gevuld elke keer als iemand zijn werk voor het in kaart brengen opslaat in uw project. Als u bijvoorbeeld zou willen starten met het volgen van alle bijdragen in alle projecten van uw organisatie, zou u er een algemene tag aan toe kunnen voegen, bijv. #MSF of #cartONG. Probeer **deze tags kort te houden** en voeg er niet te veel aan toe, overdadig gevulde opmerkingen voor wijzigingensets zijn moeilijk te interpreteren en er zou ruimte voor mappers over moeten blijven om beschrijvende opmerkingen voor de wijzigingenset over moeten blijven. 

> Onthoud dat een unieke tag voor het volgen van het project al aanwezig zal zijn, bijv. #hotosm-project-11188 - **laat deze zoals die is**, het is heel belangrijk voor het volgen van de voortgang van het project. Het getal aan het einde van uw tag is de unieke ID van uw project.

#### Gedetailleerde instructies

Voeg beschrijvende instructies toe voor mappers en validatoren om te volgen bij het werken aan uw project. Uw project zal publiek zijn, daarom **schrijf instructies voor onervaren gebruikers** zonder lokale of contextuele kennis. Gebruik heldere taal om het publiek dat u wilt bereiken niet allemaal  autochtone Nederlanders zijn.

1. Schrijf de meest belangrijke informatie aan de bovenzijde om er voor te zorgen dat het opvalt. Zit zou een beschrijving kunnen bevatten van de afbeeldingen en een waarschuwing voor een verschuiving van de afbeeldingen met richtlijnen. Of het zou mappers kunnen instrueren om paden en sporen in een project voor het in kaart brengen van hoofdwegen te negeren en focussen op meer prominente hoofdwegen.
2. Voegcontext-/locatiespecifieke instructies toe. Deze variëren significant, maar zullen helpen dat mappers satellietafbeeldingen interpreteren. Bijv. 'Verwacht veel cirkelvormige bruine rieten hutten te zien in dit project voor Zuid Soedan' of 'Nederzettingen in Guatemala zijn vaak dicht bebouwd, zoom extreem ver in bij het in kaart brengen van elk gebouw om er zeker van te zijn dat zij niet met elkaar verbonden zijn of overlappen'. Sleep en zet schermafdrukken van luchtfoto's neer in de instructies om dat gedeelte te verbeteren.
3. Voeg zeker een gedetailleerde beschrijving in voor **hoe elk object in kaart te brengen** waarvan u wilt dat ze in kaart worden gebracht. Kijk naar bestaande (maar recente) projecten in de Tasking Manager om te zien of u wat bestaande tekst voor instructies kunt lenen (weet wel dat sommige projecten geen goede instructies hebben!).
4. De uiteindelijke bron voor taggen is de [wiki van OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features). Voor veel aan HOT gerelateerde projecten is de pagina op [taggen van highways in Africa](https://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) de juiste specificatie en zou het waarde kunnen zijn om te worden gelinkt naar de instructies voor uw project. Als uw project moet voldoen aan andere standaarden voor taggen, schrijf dan een soortgelijke pagina in de wiki en link daarnaar in uw instructies.
5. Andere punten ter verduidelijking: Als het project geschikt is voor mappers met slechts een bepaald niveau van ervaring. Bijvoorbeeld: het project gebruikt geïmporteerde bestanden of bestaande gegevens zouden moeten worden uitgelijnd aan GPS-sporen of een andere afbeelding. Omschrijf het zo dat nieuwe mappers zich welkom zullen voelen bij te dragen aan andere projecten, maar zullen begrijpen dat in dit geval geavanceerde technieken vereist zijn.
6. Er zijn richtlijnen die algemene fouten behandelen die we zien bij het valideren van het in kaart gebrachte. Eén voorbeeld is Blake Girardot's compilatie over [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Gebruik de link in de instructies en leg uit dat het volgen van die richtlijnen is vereist.

#### Instructies per taak 

Dit is optioneel, maar het is mogelijk een kort snipper van aanvullende instructies toe te voegen dat mappers zullen zien bij het werken aan een taak. Dit is te zien aan de rechterkant van de weergave van de bewerker van Tasking Manager boven het gedeelte 'Status taak'. Dit is altijd te zien tijdens het in kaart brengen, als er dus iets **bijzonder belangrijk** is dat u aan uw **mappers kenbaar wil maken**, zou u dat hier kunnen toevoegen. 

### Metadata

![TM Metadata][]

#### Niveau mapper

Dit wijzigt het niveau voor de moeilijkheid dat wordt **weergegeven** voor uw project. Overweeg dit heel zorgvuldig, complexe projecten die onjuist zijn ingesteld op de moeilijkheid Beginner **kunnen resulteren in significante problemen met de kwaliteit van de gegevens**. 

> Onthoud dat dit niet wijzigt wie er **feitelijk kan bijdragen** aan uw project, deze beperkingen zijn geïmplementeerd onder het submenu Rechten.

De meeste projecten zijn ingesteld op ofwel moeilijkheid  **Beginner** of **Gemiddeld**, een handjevol projecten zijn ingesteld op Gevorderd. 

- **Beginner** - Overweeg of uw project gemakkelijk in kaart is te brengen en:
  - U vraagt deelnemers om slechts één object in kaart te brengen, in het bijzonder **alleen gebouwen**
  - De dichtheid van de objecten is laag, d.i. in een **afgelegen** gebied
  - Er is een **lage kwantiteit** van bestaande gegevens voor OSM in uw projectgebied
  - Er zijn geen problemen met het uitlijnen van afbeeldingen
- **Gemiddeld** - Als uw project niet zo gemakkelijk in kaart is te brengen, zou dit moeten overwogen als:
  - U deelnemers vraag meer dan één object in kaart te brengen, bijv. gebouwen **en** wegen
  - Er een medium/hoge dichtheid is voor deze objecten in uw projectgebied, d.i. **stedelijke** gebieden
  - Er zijn **substantieel** bestaande gegevens voor OSM in uw projectgebied
  - Er zouden **problemen met uitlijnen van afbeeldingen** kunnen zijn of u vraagt deelnemers om meer dan één bron voor afbeeldingen te gebruiken
- **Gevorderd** - Als het project extreem moeilijk in kaart te brengen is, overweeg dit als: 
  - Er is een zeer hoge dichtheid voor deze objecten in uw projectgebied, d.i. **centrale stedelijke** gebieden
  - Er zijn **heel veel** bestaande gegevens voor OSM in uw projectgebied
  - Er zijn **complexe problemen met het uitlijnen van afbeeldingen**

#### Typen voor in kaart brengen

Schakel deze in/uit, afhankelijk van de objecten die u in kaart wilt laten brengen in uw project. Over het algemeen **des te minder, des te beter**, omdat projecten die zich er op richten teveel objecten in kaart te brengen vaak moeite hebben om voldoende voortgang te maken. 

> Projecten die vragen om heel veel objecten in kaart te brengen zijn moeilijk voor mappers en moeilijk om te valideren. Zij hebben veel meer tijd nodig om een goede bruikbare gegevensset te maken. Grootten voor taken zijn ook moeilijk efficiënt te maken voor verschillende typen van in kaart brengen, bijv, gebouwen hebben kleine vierkanten voor taken nodig, wegen en waterwegen hebben grote vierkanten voor taken nodig. Maken van meerdere projecten voor hetzelfde gebied om gebouwen en wegen/waterwegen afzonderlijk in kaart te brengen is dan het beste.

#### Voorkeuren bewerker iD

Als u kiest om één of meer items uit de keuzelijst te kiezen dan zullen mappers die iD gebruiken alleen in staat zijn om deze objecten toe te wijzen aan de objecten die zij in kaart brengen. Dit is aanbevolen voor beginners, **project met Alleen gebouwen**. Het zal betekenen dat deelnemers niet in staat zullen zijn andere objecten te taggen, zelfs niet als zij het proberen. Vermijd het gebruiken van voorkeuren voor meer complexe projecten, omdat het al snel een last wordt. Een project voor het mappen van wegen zou, bijvoorbeeld, dozijnen aan voorkeuzen moeten hebben toegevoegd, om te zorgen dat alle type wegen in kaart zouden kunnen worden gebracht. 

#### Organisatie

De naam van uw organisatie zou hier al moeten staan, kies hem anders in het keuzemenu.

#### Campagne

Als u verscheidene projecten hebt gemaakt die met elkaar geassocieerd zijn, kunt u er voor kiezen om ze toe te wijzen aan een campagne. Gebruikers kunnen projecten filteren op de naam van de campagne op de pagina Projecten verkennen. Als u project bijvoorbeeld is geassocieerd met het elimineren van malaria, zou ze willen plaatsen onder de campagne 'Malaria Elimination'. Vul [dit formulier](https://forms.gle/qafvkp4iAxnY6rjE6) in om aanvullende namen voor campagnes te laten maken.

#### Categorieën

Selecteer hier de thema's die aan uw project zijn gerelateerd. Deelnemers kunnen hun interesses in deze categorieën specificeren op hun pagina Instellingen.

#### OSMCha filter ID

[OSMCha](https://osmcha.org/) is een krachtig programma voor het beoordelen van de kwaliteit van gegevens dat u nuttig zou kunnen vinden voor het monitoren van bijdragen aan uw project. Het standaard filter begrenst uitvoer tot het begrenzingsvak van het project en tot bijdragen die niet ouder zijn dan de datum van maken van het project en met de naam van het project in de opmerking voor de wijzigingenset. Als u denkt dat iets anders een betere benadering zou zijn om de wijzigingensets van uw project te analyseren, geef dan hier een URL voor OSMCha of een OSMCha filter-ID op. Het filter van OSMCha is beschikbaar aan het einde van de overzichtspagina van uw project. 

### Gebieden met prioriteit

![TM Priority Area][]

Gebruik de gereedschappen hier om gebieden te tekenen die als eerste in kaart zouden moeten worden gebracht. U mag meerdere gebieden met prioriteit voor een project hebben. U kunt ook op elk moment de gebieden met prioriteit wijzigen. Het gebied met prioriteit zal worden geaccentueerd voor vrijwilligers om te prioriteren en als zij 'Taak in kaart brengen' kiezen zal het willekeurig eerst een taak kiezen uit het gebied met prioriteit. 

> Gedurende het in kaart brengen van rampen, vroeg in de gebeurtenis, met een groot gebied om in kaart te brengen voor het project en het gebruiken van gebieden met prioriteit, om te focussen als nog steeds nieuwe informatie binnenkomt, is vaak een goede werkwijze.

### Afbeeldingen

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
- [Geanimeerde gif over uitlijnen van afbeeldingen in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [Hoofdstuk van JOSM uitlijnen van afbeeldingen in learnOSM](https://learnosm.org/nl_NL/josm/correcting-imagery-offset)


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
