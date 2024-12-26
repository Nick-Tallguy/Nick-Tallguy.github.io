---
layout: doc
title: Maken van Opmerkingen in OSM
permalink: /nl_NL/beginner/notes/
lang: nl_NL
category: beginner
---

Maken van Opmerkingen in OSM
=====================

Een van de belangrijke componenten van OpenStreetMap zijn Opmerkingen, die een integraal deel uitmaken van het project vanaf 2013. In dit gedeelte zult u leren wat opmerkingen zijn, hun statussen, hoe opmerkingen te maken bij wijzigingen in de kaart, de communicatie die wordt gemaakt vanuit opmerkingen, het proces van het maken van opmerkingen vanuit verschillende toepassingen, om te eindigen met een stukje geschiedenis van deze functionaliteit. 

Onthoud dat we in dit document alleen het maken van opmerkingen zullen behandelen. Voor het oplossen van opmerkingen kunt u het gedeelte Opmerkingen oplossen bezoeken. Aanvullend hebben we, aan het einde van dit artikel, een woordenlijst opgenomen van acroniemen en termen.


# Waar zijn Opmerkingen voor?

Het  doel van de opmerkingen is om zowel (a) een fout of inconsistentie te beschrijven tussen de kaart van OSM en de realiteit en (b) om gebruikers van de kaart een mechanisme voor terugkoppeling te verschaffen. Bovenstaande maakt het mogelijk OSM up-to-date te houden. Dit wordt veel gebruikt als we veldwerk uitvoeren (d.i. als u op straat of in een perk bent), waar we drie typen van inconsistentie of elementen die verschillen van de kaart op de volgende manieren kunnen identificeren:
 
* Elementen die niet op de kaart staan, maar in de echte wereld wel bestaan.
* Elementen die onjuist in kaart zijn gebracht, ofwel voor wat betreft hun eigenschappen of hun locatie, bijvoorbeeld: een dierenwinkel is nu een supermarkt.
* Elementen die eenvoudigweg niet meer bestaan.

Het interne systeem voor opmerkingen verschaft een  mechanisme voor communicatie tussen de rapporterende gebruiker en de mapper die de wijziging maakt. Dit maakt een ruimte mogelijk waar vragen kunnen worden gesteld over de opgemerkte inconsistentie, antwoorden kunnen worden gegeven op die vragen, en een meer nauwkeuriger aanpassing aan de kaart kan worden gemaakt.

We hebben gezien dat de opmerkingen significante interesse opwekken van gebruikers die aan het project willen bijdragen op een andere manier dan het in kaart brengen. Dit heeft het voor ons mogelijk gemaakt de gemeenschap van mappers uit te breiden, waarbij sommigen zich specialiseren in het rapporteren van bepaalde elementen via opmerkingen, tijdens het wandelen.


## Attributen voor Opmerking 

Opmerkingen worden gedefinieerd met de volgende eigenschappen:

* Tekst: beschrijft de geïdentificeerde inconsistentie, die meerdere regels lang kan zijn.
* Locatie: wordt gedefinieerd door longitude (lengtegraad) en latitude (breedtegraad), die kan worden bepaald door GPS (GNSS) of door een punaise 📌 op de kaart te verplaatsen.
* Gebruikersnaam (Optioneel): de opmerking zal anoniem worden gemaakt als de gebruiker niet is geregistreerd in OSM.
* Nummer of identificatie: identificeert de opmerking in de gehele verzameling van opmerkingen.
* Datum: geeft aan wanneer die werd gemaakt.

In aanvulling hierop kan een opmerking aanvullend commentaar bevatten. Dit betekent dat er altijd een initieel commentaar zal zijn als de opmerking wordt gemaakt. Daarop volgend zullen alle andere commentaren behoren tot de communicatie tussen gebruiker en de mappers. Opgemerkt dient te worden dat alleen geregistreerde gebruikers commentaar kunnen toevoegen. Het is ook belangrijk te vermelden dat een commentaar, nadat het eenmaal is gepubliceerd, niet meer kan worden aangepast. De enige actie die kan worden ondernomen is om de DWG te verzoeken het commentaar te verbergen als dat in strijd is met het beleid voor de verwerking in de gegevens van OSM. Bijvoorbeeld als een opmerking persoonlijke gegevens bevat.


# Statussen en acties

De opmerkingen hebben drie statussen:

* Geopend.
* Gesloten.
* Verborgen - Dit type is van toepassing op die opmerkingen die door de DWG zijn verborgen, omdat zij in  strijd zijn met het beleid voor het afhandelen van gegevens voor OSM. 

Er zijn verscheidene acties mogelijk voor opmerkingen:

* Opmerking maken (Geopend): Correspondeert aan het initiële proces voor het maken van een opmerking.
* Opgeloste opmerking (Geopend -> Gesloten): Dit is de oplossing voor een, alleen door een geregistreerde gebruiker, opgeloste opmerking, waarbij een commentaar kan worden opgenomen.
* Commentaar opmerking (Geopend -> Geopend): Wanneer een geregistreerde gebruiker tekst aan een opmerking toevoegt.
Bijvoorbeeld wanneer een gebruiker vraagt naar meer details over de omgeving of de gebruiker die hem maakte wil de initiële opmerking nog iets beter omschrijven.
* Opnieuw geopende opmerking (Gesloten -> Geopend): Wanneer een gebruiker het niet eens is met de oplossing voor de opmerking en besluit om die opnieuw te activeren.

![States for a note][]


# Overwegingen voor het maken van goede Opmerkingen

Onthoud dat de opmerkingen een fout of inconsistentie beschrijven tussen de kaart (OSM) en de echte wereld. Gewoonlijk worden opmerkingen op de plaats zelf gemaakt, bijvoorbeeld als een persoon aan het wandelen is, een apparaat heeft waarop de kaart van OpenStreetMap staat, en ziet dat er iets afwijkt van de echte wereld.

De sleutel voor het maken van goede opmerkingen is om de inconsistentie op de kaart zoveel mogelijk te beschrijven en te onthouden dat de persoon die hem zal oplossen de omgeving niet zal kennen of nooit heeft bezocht. Verschaf daarom de beste context voor de persoon die de opmerking zal lezen en proberen o te lossen. Het is bijvoorbeeld goed om duidelijke punten (noord, zuid, oost, west) te gebruiken en aanwijzingen, zoals rechts van, voor, etc., te vermijden, omdat de persoon, die de opmerking wil oplossen, geen referentiepunt heeft voor waar u zich bevindt bij het maken van de opmerking.

Wanneer u bent geregistreerd in OpenStreetMap en opmerkingen maakt met uw gebruikersnaam, zult u per e-mail worden genotificeerd van wijzigingen aan de opmerking. Dit maakt het voor u mogelijk de voortgang van het oplossen van de opmerking bij te houden en antwoord te geven op vragen die zouden kunnen ontstaan. Sommige toepassingen stellen u in staat foto's te uploaden die zijn geassocieerd met de opmerkingen, om de context grafisch te beschrijven. Als u een toepassing met een dergelijke functionaliteit gebruikt, maak daar dan gebruik van. We bevelen altijd aan om aan te geven in welke richting de camera wijst (naar het noordoosten, naar de grond, etc.). Als u twijfelt, kunt u een programma voor een kompas op uw mobiele telefoon gebruiken; daarmee zal de mapper de richting van uw foto begrijpen om de opmerking op te lossen.

We weten dat u net begint met het lezen van deze handleiding en het ontdekken van de wereld van OSM. Wanneer u verder bent met lezen, zullen we u leren hoe een element of object in detail in kaart te brengen. Dat zal u helpen een object beter te beschrijven via een opmerking, zodat meer eigenschappen in kaart kunnen worden gebracht.

## Taal

De taal die u het beste spreekt is de beste taal om een opmerking in te schrijven. Onthoud dat de persoon die de opmerking wil oplossen, als zij uw tekst niet goed begrijpen, een online vertaalprogramma (zoals deepl.com of pons.com) zou kunnen gebruiken, omdat het merendeel aan oplossingen van opmerkingen vanachter een computer gebeurt. U kunt ook schrijven in de taal van het land waar u bent, of mogelijk in het Engels, maar het beste is een taal te gebruiken waarmee u zich vertrouwd voelt en uzelf beter kan uitdrukken.

## Nauwkeurigheid van locatie

De locatie van de opmerking moet zo nauwkeurig mogelijk zijn met betrekking tot de plaats van de fout of inconsistentie op de kaart. De opmerking mag een fout op de kaart introduceren in plaats van iets te corrigeren als de opmerking een aantal meters vanaf de vereiste locatie is gelegen. Het is noodzakelijk om even te wachten, totdat uw apparaat zijn locatie heeft vastgesteld, of u kunt handmatig de punaise verplaatsen tot boven het element dat u wilt aanpassen.

Onthoud dat de persoon die de opmerking zal willen oplossen, niet bekend zou kunnen zijn met de omgeving. Dus, als de GPS (GNSS) u niet juist heeft geplaatst en aangeeft dat u op het trottoir ervoor staat, zal de aanpassing van de kaart aan de andere kant van de straat zijn, hetgeen onjuist is.

## Hashtags

Soms zijn er activiteiten waarbij veel mensen opmerkingen maken voor hetzelfde doel (bijvoorbeeld een mapathon om details van de buurt toe te voegen). We bevelen aan, om deze te kunnen identificeren, om een of verscheidene te gebruiken om de activiteit te beschrijven. Daarmee zult u in staat zijn de opmerkingen te zoeken die zijn geassocieerd met de hashtag en ze gemakkelijker kunnen verwerken.


# Slechte opmerkingen

Onthoud dat de opmerkingen geen persoonlijke informatie, meningen, persoonlijke gegevens, of advertenties moeten bevatten. Zij zijn ook niet bedoeld voor het stellen van vragen. Zoals eerder vermeld zouden mappers, die de opmerkingen verwerken, niet bekend hoeven te zijn met de omgeving, dus zullen zij niet in staat zijn uw vragen te beantwoorden. Het tegenovergestelde is echter ook waar. Omdat u ter plaatse bent kunt u fouten of inconsistenties op de kaart vaststellen en ze als een opmerking rapporteren.

## Mechanische opmerkingen

Deze worden in massa gemaakt op de computer, waarmee elementen van de kaart die moeten worden gecorrigeerd, worden geïdentificeerd. Dit is geen door de gemeenschap aanbevolen praktijk, omdat het heel belangrijk is om onderscheid te maken tussen bewijs dat direct vanuit het veld is verkregen en inconsistenties die alleen op afstand zijn gedetecteerd. Bijvoorbeeld bij het gebruiken van een bewerker zoals iD of JOSM, en u besluit om slecht getekende gebouwen te identificeren door een opmerking te maken voor elk gebouw. Er zijn voor dat specifieke doel programma's beschikbaar die een beter beheer voor het gebied bieden voor wat betreft het voorkomen van conflicten in de bewerkingen. U zult deze programma's later in deze handleiding zien. Sommigen van hen zijn Tasking Manager, MapRoulette, en DAMN Project, die indelingen gebruiken, zoals GeoJSON, om meerdere punten tegelijkertijd te laden op de kaart.  


# Notificaties

Wanneer u een opmerking maakt die een inconsistentie beschrijft op de kaart, wordt deze tekst, geassocieerd met een locatie, worden gestuurd naar de database van OSM. Dan zal een mapper van OSM uw opmerking lezen om die op te lossen, en als zij twijfels heben over die beschrijving, kunnen zij een commentaar toevoegen waarin zij u vragen om meer details. Als u de opmerking hebt gemaakt met uw gebruikersnaam van OpenStreetMap, zult u een e-mail ontvangen met de vragen van de mapper. Alle commentaar die u toevoegt zullen worden doorgegeven aan alle mappers die eerder commentaar hebben gegeven in die opmerking. Dat is de manier waarop mensen, die zijn betrokken bij een opmerking, beginnen met elkaar te interacteren. 

![Notification by email][]


# Maken van Opmerkingen

De functionaliteit om te maken, commentaar te geven, en opmerkingen te sluiten is opgenomen in verschillende toepassingen. Hier zullen we demonstreren hoe u opmerkingen kunt maken in enkele toepassingen, waarvan wij denken dat zij het meest geschikt zijn voor deze activiteit. Veel van de hier gepresenteerde toepassingen hebben gedetailleerde gedeelten in deze handleiding (LearnOSM), maar dit gedeelte presenteert een overzicht van de functionaliteit die is gerelateerd aan opmerkingen in deze toepassingen.

## StreetComplete

Wanneer u iets ziet dat het maken van een opmerking verdient, kunt u uw vinger op de kaart houden en een zwevend menu zal verschijnen. Daar kunt u er voor kiezen om een opmerking te maken, en u kunt de door u waargenomen onjuistheid beschrijven. Er is ook de optie om een foto op te nemen voor een betere context. Zorg er voor dat de toepassing de gegevens uploadt naar OpenStreetMap om uw opmerking te publiceren.

![Creating a note in StreetComplete][]


## Every-Door

Er staan verscheidene modi voor bewerken op de horizontale balk aan de onderzijde van de toepassing. Kies de laatste, die is voor opmerkingen. Een blauwe ronde knop zal in de rechterbenedenhoek worden geactiveerd om opmerkingen toe te voegen. Na het plaatsen van de punaise kunt u de tekst voor de opmerking typen. Vergeet niet de wijzigingen te uploaden, zodat uw opmerking is geregistreerd in OpenStreetMap.

![Creating a note in Every-door][]


## OnOSM

Deze webpagina stelt u in staat details toe te voegen van bedrijven door een opmerking te maken. Het heeft een mechanisme dat naar de benodigde informatie vraagt en vult een sjabloon. Aan het eind, publiceert het de gegevens in OSM via een opmerking.

Opmerkingen die door deze pagina worden gemaakt zijn altijd anoniem, omdat het niet vereist is de inloggegevens van OSM  te gebruiken. Als consequentie daarvan zult u geen e-mail ontvangen als een mapper uw opmerking verwerkt, dus u moet steeds zelf de pagina voor de opmerking bezoeken om de status ervan te controleren.

![Creating a note in OnOSM.org][]


## OsmAnd

Selecteer een element op de kaart (bijv. een gebouw, een weg), en in de optie "Actions", selecteer "Open a note" in OSM. Beschrijf in de tekst de onjuistheid, en klik tenslotte op "Upload".

![Creating a note in OSMAND][]


## OSM.org thuispagina

Op de thuispagina van OpenStreetMap.org, zoom in op het gebied van interesse, en dan zal het pictogram voor opmerkingen worden ingeschakeld. Onthoud dat als u dat met deze procedure doet zonder in te loggen, u een anonieme opmerking zult maken en geen notificaties zult ontvangen van het oplossen ervan. Een tekstvak zal verschijnen waar u instructies kunt geven, en als u klikt op "Opmerking toevoegen," zult u in OSM zijn.

![Creating a note in osm.org][]


# Geschiedenis

Nu u de basis van opmerkingen kent, laten we dit gedeelte dan afsluiten met wat geschiedenis. Voordat opmerkingen als zodanig bestonden binnen de database van OpenStreetMap, bood een parallel project deze functionaliteit aan. Het project was genaamd OpenStreetBugs en verschafte de essentiële programma's voor gebruikers om onjuistheden op de kaart te documenteren met tekst en coördinaten. De functionaliteit was excellent voor het rapporteren van onjuistheden, dus werd de beslissing genomen om het te integreren in OpenStreetMap, wat het mogelijk maakte toegang te verkrijgen via de API. Waarbij dient te worden opgemerkt dat toen API 0.6 werd gedefinieerd en geïmplementeerd, in die versie de functionaliteit voor opmerkingen nog niet was opgenomen.

Inderdaad, de opmerkingen werden in een latere aanvulling in die versie opgenomen.
In 2013 werd de service voor opmerkingen aangeboden als deel van de API.
In 2014 waren alle rapporten van OpenStreetBugs gemigreerd naar de database van OSM.
In 2017 waren wereldwijd al 1 miljoen opmerkingen gemaakt.


[States for a note]: /images/beginner/note-states.png
[Notification by email]: /images/beginner/email-messages.png
[Creating a note in StreetComplete]: /images/beginner/streetcomplete.gif
[Creating a note in Every-door]: /images/beginner/every-door.gif
[Creating a note in OnOSM.org]: /images/beginner/onosm.gif
[Creating a note in OSMAND]: /images/beginner/osmand.gif
[Creating a note in osm.org]: /images/beginner/website.gif
