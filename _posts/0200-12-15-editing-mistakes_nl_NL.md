---
layout: doc
title: Veel voorkomende fouten bewerken
permalink: /nl/beginner/editing-mistakes/
lang: nl
category: beginner
---

Veel voorkomende fouten bewerken
====================================

> Deze handleiding kan worden gedownload als  [editing-mistakes_nl.odt](/files/editing-mistakes_nl.odt) of [editing-mistakes_nl.pdf](/files/editing-mistakes_nl.pdf)  
> Bijgewerkt 21-09-2015  

er zijn een aantal veel voorkomende fouten die mappers maken als zij beginnen met het gebruiken van OpenStreetMap. In dit hoofdstuk identificeren we een aantal van de meest voorkomende fouten en biedne enkele tips om beter in kaart te brengen.  

Objecten verbinden
-------------------

### Sommige objecten zouden niet verbonden met worden

Wanneer u polygonen en lijnen maakt waarvan verondersteld wordt dat zij niet verbonden zullen worden, zorg er dan voor dat zij niet samengevoegd zijn door een knoop te delen. Bijvoorbeeld: knopen van een highway zouden niet moeten worden gesnapt aan gebouwen, omdat niemand er van houdt dat een weg direct naar een muur leidt!  Selecteer in JOSM, als u twee of meer objecten wilt ontkoppelen die dezelfde knoop delen, de knoop en  ga naar *Extra->Wegen losmaken* of druk op \<\<G\>\>.  

![Road and building nodes are connected - NO][]

![Roads Building nodes are disconnected - YES][]

### Maar, sommige objecten zouden wel moeten zijn verbonden!

Wegen die elkaar kruisen zouden altijd een knoop moeten hebben die zij delen. Als zij geen gemeenschappelijk knoop delen, dan kan de computer nooit vaststellen dat de wegen in feite met elkaar
verbonden zijn.  

![Intersecting roads should share nodes][]

De enige keer dat u NIET zou hebben dat kruisende wegen geen gedeelde knoop hebben is als één van de wegen over de andere weg gaat, en zij in feite niet aan elkaar verbonden zijn.  

Overlappende objecten
--------------------

Een veel voorkomende fout is om overlappende polygonen te hebben terwijl de objecten die zij weergeven in het echte leven niet overlappen. Een gebouw kan een ander gebouw niet overlappen. Deze fout wordt over het algemeen gemaakt met gebouwen en polygonen voor landgebruik. Bijvoorbeeld: een polygoon getekend om een park weer te geven buiten een gebouw zou niet moeten overlappen met het gebouw. In plaats daarvan zou het naast het gebouw moeten worden getekend.  

![Correcting building overlaps][]

Er zijn enkele uitzonderingen op deze regel, zoals scholen. Binnen het schoolterrein zou u individuele gebouwen met ene polygoon kunnen identificeren, hoewel u ook een polygoon wilt maken rondom het gehele terrein van de school. In dit geval is het prima dat de polygonen elkaar overlappen, maar de regel die hier moet worden gevolgd is om er voor te zorgen dat de gebouwen volledig binnen de polygoon voor het landgebruik liggen.  

![Correcting building landuse][]

Samenvatting
--------

We maken allemaal fouten, maar hoe meer u in kaart brengt des te minder fouten u maakt! Onthoud gewoon dat zelfs als u gegevens uploadt die fouten bevatten, u uw fouten altijd kunt corrigeren en de wijzigingen opnieuw kunt uploaden. Dat is wat zo goed is aan OSM: u kunt het altijd beter maken!  


[Road and building nodes are connected - NO]: /images/beginner/road-building-no.png
[Roads Building nodes are disconnected - YES]: /images/beginner/road-building-yes.png
[Intersecting roads should share nodes]: /images/beginner/road-connecting-nodes.png
[Correcting building overlaps]: /images/beginner/building-overlap.png
[Correcting building landuse]: /images/beginner/building-landuse.png