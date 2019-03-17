---
layout: doc
title: Trasování silnic, budov, vod a využití půdy 
permalink: /cs/coordination/remote-tracing/
lang: cs
category: coordination
---

Trasování silnic, budov, vod a využití půdy
===========================================

> Tento návod můžete stáhnout jako [remote-tracing_en.odt](/files/remote-tracing_en.odt) nebo [remote-tracing_en.pdf](/files/remote-tracing_en.pdf)  
> Zkontrolováno 8.2.2016  

Navazuje na část [Remote, Armchair & Mapathon sekce LearnOSM] (/cs/coordination/remote/) sekci, která je zaměřená na mapovače bez zkušeností s mapováním HOT.  


Obsah kapitoly
=====

[Silnice a dálnice včetně cest a tras](/cs/coordination/remote-tracing/#roads)  
[Síť dálnic](/cs/coordination/remote-tracing/#the-highway-network)  
[Residential Landuse boundary](/en/coordination/remote-tracing/#residential-boundaries)  
[Buildings, walls, fences, compounds and barriers](/en/coordination/remote-tracing/#buildings-walls-compounds-barriers)  


## Cesty

Jakýkoliv druh cest, od dálnic, přes polní cesty a stezky jsou v OpenStreetMap označeny jako **highway**. Je důležité, aby byly silnice správně přidávány do databáze (data OpenStreetMap), protože se používají v mnoha ohledech:  

- Navigační software v zařízeních např. od Garminu, nebo aplikace ve smartphonech, jako je třeba Osmand, mohou navigovat na velké vzdálenosti, pokud jsou do nich načteny správné informace. Vzhledem k tomu, že se tyto přístroje spoléhají na GPS v zařízení, aby zobrazily polohu na mapě, je důležité, aby cesty byly uvnitř rozmezí asi 15 metrů od správné pozice, jinak nebudou fungovat!  
- Plánování trasy pro velký nákladní automobil je mnohem jednodušší, pokud můžete rozlišovat mezi stezkou, silnicí pro motorová vozidla a všemi druhy cest mezi nimi.  
- Informace, zda je povrch vozovky asfaltový nebo měkké bláto, může znamenat rozdíl v plánování trasy.
- Při pokusu o zamezení šíření nemoci je informace od oběti, že se nachází *poblíž křižovatky* významná, pokud si tu křižovatku můžete najít na mapě.

### Silnice - Jak je mapovat

![iD 3][]

1. Při trasování silnic je důležité dostatečné přiblížení. Výchozí hodnotu měřítka nastavte přibližně na 20 metrů a trasujte silnice tak, aby obsahovala dostatek bodů a tím kopírovala tvar silnice, kterou můžete vidět na satelitních snímcích. Na snímku nahoře můžete vidět, že jsem protahoval cestu z přilehlého čtverce, dolů skrz stromy až k budově, kde nejspíš končí. Tam, kde jsou stromy v blízkosti silnice a jedná se o letecké snímky, pak to vypadá, že se silnice zužuje při průchodu mezi stromy - avšak to jen stromy zakrývají výhled a silnici má stejnou šířku.  
2. Také jsem zakreslil další část silnice, ujistil se, že jsou oba konce připojeny - iD to znázorňuje poněkud větší a tmavší barevnou tečkou na křižovatce. Je důležité, aby byly silnice spojené a **sdílely společný uzel**, aby navigační software poskytoval správné pokyny.  
3. Silnice je označena jako **highway=residential** a přidal jsem také typ povrchu **surface=unpaved**.  
4. Úplný popis značkování v Africe naleznete na wiki stránce [Highway Tag Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa).  

> Existuje velké riziko, že vzniknou konflikty, které vám zabrání uložit práci na jakékoliv silnici, která se nachází i v jiných čtvercích, kde ji mohou také upravovat. Doporučujeme uložit všechny změny před úpravou silnice a poté ukládat změny co nejčastěji to bude možné, například po přidání každých 6 uzlů.


### Silniční síť

![JOSM 4][]

Tento snímek ukazuje JOSM s nastaveným stylem HOT-OSM-Validate [JOSM styly](https://josm.openstreetmap.de/wiki/Styles). Ačkoli je navržen tak, aby pomáhal validátorům, může být velmi užitečný při provádění počátečního mapování. Cokoliv, co je zbarveno červeně, znamená problém - zbývající barvy jsou vysvětleny v legendě na tomto snímku.  

1. Tento úsek silnice je zbarven červeně, protože značka byla špatně zapsána a bylo použito velké písmeno. Značka by měla být highway=unclassified a silnice na snímku by měla světle hnědou barvu.  
2. Toto je část silniční sítě vedoucí z města na jihozápadu. Tato síť se připojí ke zbytku silniční sítě v Africe.  
3. Tyto úseky silnice jsou „izolované“. Nejsou žádným způsobem spojeni s městem ani s jinými silnicemi. Ve svém současném formátu nejsou příliš užitečné a bude potřeba je dále prozkoumat, aby se zjistilo, zda mohou být připojeny ke zbytku sítě, nebo zvážit jejich odstranění.  


**Silnice nebo říčka?**

![iD 5][]

V iD editoru neexistují žádné pomocné styly, ale na této obrazovce můžete vidět oblast vegetace a země. Země vypadá jako bahno nebo možná i oblast bažiny bez vody. Tečkované černé a bílé čáry představují stezky v iD, dočasně jsem jednu zvýraznil a pak ji odstranil, aby se zobrazil terén.  

1. highway=path nebo koryto říčky. Pravděpodobně obojí! silnice všech velikostí často vedou údolím řeky a v mnoha případech mohou vést trasou sezónní řeky nebo potoka. V tomto případě se zdá, že se jedná o záplavovou oblast, která byla v době, kdy se pořizovaly satelitní snímky, suchá a byla používána jako cesta. Takovou cestu by bylo nejlépe označit jako:  
highway=path  
seasonal=yes  
surface=unpaved  
2. Cestu můžete jasně vidět, jak směřuje do pásma stromů a keřů, ale není možné vidět její přesný průběh mezi stromy. V těchto případech si můžete být jisti, že stezka, polní cesta nebo silnice se tam nachází, pouze ji zakrývají stromy. Cestu jsem zmapoval tak, že jsem pokračoval přímkou mezi stromy ve směru cesty, kterou jsem trasoval na jasně viditelné části země a pokračoval na druhé straně vegetace. Toto řešení používejte s opatrností, ale v tomto případě je zřejmé, že tam cesta vede a pravděpodobně bude velmi blízko linie, kterou jsem nakreslil. Jedná se o extrémnější příklad - obvykle se trasa silnice odhaduje pouze na několika metrech, které jsou zatemněny jedním nebo dvěma stromy.  
3. Smazáním cesty bude země jasně viditelná, pomocí funkce „zpět“ v iD editoru ji lze snadno vrátít.  

***


## Residential Boundaries

Residential boundaries are used for many purposes in OpenStreetMap.  

+  The simplest use is to be able to see residential areas at higher zoom levels when viewing [OpenStreetMap.org](http://www.openstreetmap.org), where they are coloured pale grey in the standard view.  
+  Where there is not time to map in detail from the outset, the project within the Task Manager will frequently require something similar to this:  

>    Map essential infrastructures such as schools, place of worship and markets.  
>    Trace outbound of settlements and cemeteries.  
>    We will trace roads later in an other Task.   
+  landuse=residential can also be used for statistical purposes, and accurate mapping then becomes important  

*  If you can establish how many people normally reside in each dwelling, and  
 how many dwellings are normally built in a given area, then  
 once you have worked out the area covered by a landuse=residential boundary,  
 you can establish a very approximate population for that area.  
 Estimating the number of aid workers & quantity of medicine now becomes more realistic.
*  Place names & boundaries are often imported from other sources, but the location is not always accurate. Once you have a residential boundary the person doing the import can see where the place name should probably be.


### landuse=residential - how to map


** In an ideal world **  

*Stage 1* - A decision is taken to map an area, and a mapper quickly puts a very rough landuse=residential boundary around an area,  
*Stage 2* - The Task Manager project is created & the individual mappers refine the boundary so that it is closer to the buildings etc.  

![JOSM residential][]

![iD residential][]
 
The iD & JOSM screenshots above show a correctly mapped landuse=residential boundary.  

1.  The boundary needs to be closed, so that the start point of the line (way), joins to the end point.  
2.  The segments and nodes of the boundary should not join highways, waterways, buildings, or any other feature. *i.e.* it should not share any nodes. But they can cross.  
3.  The boundary should be fairly close to the buildings & any gardens or yards that form part of the grouping.  


In the screenshot below, my square contains part of a landuse=residential boundary. The person who completed the square to my right has continued a landuse=residential boundary through their square, and has then correctly 'handed it over' to me by placing the boundary just within my square for me to establish exactly where it should be in my square.  


![JOSM residential 1][]

I will add extra nodes to the boundary, extending it horizontally across my square so that it goes around the buildings , and at the bottom I will continue the boundary as a straight line just inside the square below mine so that the person selecting the square below mine will be able to extend it around any buildings they may have.  

This is a difficult operation - you can see only a small part of the whole town / city / village and although you will do your best with the landuse=residential boundary it is extremely likely that a validator who has an overview of several squares will need to tidy up the boundary as best they can after the individual squares have been mapped.  

> There is a high risk of suffering from conflicts when working on a landuse=residential boundary, as it extends into other squares where mappers will also be editing it. It is advisable to save all your changes before editing the boundary, and then save your changes at very frequent intervals, such as after adding each 6 nodes.

***


## Buildings walls compounds barriers  

Buildings are added to the map data for a number of reasons;  

*  The density of buildings in an area gives a very good indication of the number of people residing there.  
*  The size, shape & location of a building can help to identify it as a potential evacuation or treatment site.  
*  The size, shape, and relative location of buildings can be used to identify particular locations such as wells, aid stations, schools, etc..  
*  There is the potential to estimate the degree of damage sustained by a building, which can be used to estimate the potential casualties & level of support that may be required - this is currently (January 2015) under discussion for future use.  


### Buildings - How to Map

The vast majority of buildings that require mapping by HOT are either based upon rectangular shapes with square corners, or are round. If a building appears to be a mixture of the two, it is more likely you are looking at a building who's outline is obscured by shadow, reflection, foliage or similar.  

For some tasks where only an outline of an area is required, the task may specify that buildings can be mapped as nodes, but these situations are now rare.  


#### building=yes

Unless the project instructions specify otherwise, buildings should be tagged **building=yes**  

*  There can often be a time delay between the satellite imagery being taken, and the mapping being carried out. There is the possibility that the building you are looking at that appears to have no roof, has now been completed & is now in habitation. It is also possible that you are looking at a building with several storeys, the bottom ones being lived in, and the top floor with no roof currently not being lived in.  

> **Mapping buildings using iD** - when you are using the area tool within iD to create the basic shape, you must remember to then change the tag to building=yes. The default setting will merely tag the shape as area=yes. If you're tracing is of a building with square corners, please take the time to square your traced item (highlight it and shortcut 's').  

*  JOSM is far faster for mapping buildings - [JOSM building tools is explained here.](/en/josm/more-tools/#the-buildings-tools-plugin)  

![Buildings iD][]

This screenshot shows part of a square being edited. Note the scale at the bottom of 15 metres - about the figure you should aim at when editing features. When tracing, you are aiming to place the building where it meets the ground:  

1.  **Round buildings.** In this case they are fairly low in height and their shadow is hardly visible. If you were standing amongst them they would appear like domes. I have mapped & tagged only one of these so far **building=yes**. To quickly add the remaining round buildings in JOSM or iD I would select this one (highlight it), keyboard shortcut *Ctrl+c*, move my cursor to the centre of another round building of the same size, keyboard shortcut *Ctrl+v*. When all of the round buildings of this size have been added in my square I paste a building over a different sized round building, JOSM - use *Alt+Ctrl* & mouse to resize it to the correct size, copy it & then paste over all round buildings of the same size.  
2.  **Rectangular buildings.** These particular buildings are casting a noticeable shadow. The shadow can help to identify the shape of a building which is partially obscured by another feature. You will find that many buildings are not so simple, and have a verandah or are 'L' shaped - you must trace the actual shape of the building as this will help to identify it when names & other data is being added as part of the ground survey process.  
3.  **Barriers - walls (or hedges) of a compound.** Having examined the imagery, zooming in & out until I am satisfied that from the shape of the object (use its shadow as well to identify), I believe this to be a wall, and I have tagged it **barrier=wall**. Alternatives include barrier=fence and barrier=hedge.  
4.  I have joined the barrier=wall to the building=yes at the corner of the building.  


### Satellite imagery distorting the building shape.


![Buildings_2][]

1.  The satellite imagery above, is of a building, but the satellite was not directly overhead, so that the building appears distorted and an end wall is visible in the image. Because of this angle, the apex roof does not appear rectangular. The sun is practically directly above the building, so that the shadow of the building indicated by the arrows from figure 1 does confirm that the building is rectangular.  

2.  To map this building, create a rectangle extending from the arrows of point 2, to where you estimate the building ends, indicated by point 3 in this image.  


***


More to follow - see the below links for more guidance.


# Further Reading

-  [West African HOT Mapping Tips by user Bgirardot](http://wiki.openstreetmap.org/wiki/User:Bgirardot/Typical_Road_and_Residential_Task)  
-  [OSM wiki entry concerning validating](http://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data)  
-  [Highway Tag Africa - the preferred reference for highway tagging in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa)  
-  [Short Tutorial in French for remote mapping](http://blog.cartong.org/2014/07/24/tuto-digitaliser-sous-openstreetmap-avec-le-tasking-manager-et-josm-premiers-pas/)

[iD 3]: /images/coordination/iD_3.png
[JOSM 4]: /images/coordination/JOSM_4.png
[iD 5]: /images/coordination/iD_5.png
[iD residential]: /images/coordination/iD_residential.png
[JOSM residential]: /images/coordination/JOSM_residential.png
[JOSM residential 1]: /images/coordination/JOSM_residential_1.png
[Buildings iD]: /images/coordination/Buildings_iD.png
[Buildings_2]: /images/coordination/Buildings_2.png