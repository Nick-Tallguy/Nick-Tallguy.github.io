---
layout: doc
titre : Tracer les routes, les bâtiments, l'eau et l'utilisation du sol 
permalink: /fr/coordination/remote-tracing/
lang: 
catégorie : coordination
---

Tracer les routes, les bâtiments, l'eau et l'utilisation du sol
===========================================

> Révisé le 8 février 2016  

Suite à la section [Remote, Armchair & Mapathon Section of LearnOSM](/fr/coordination/remote/), dont vous aurez besoin si vous n'avez aucune expérience de cartographier pour HOT.  


Index de la section
=====

[Routes et autoroutes, y compris chemins et pistess](/fr/coordination/remote-tracing/#roads)  
[Le réseau d'autoroutes](/fr/coordination/remote-tracing/#the-highway-network)  
[Limites de la zone résidentielle](/fr/coordination/remote-tracing/#residential-boundaries)  
[Bâtiments, murs, clôtures, enceintes et barrières](/fr/coordination/remote-tracing/#buildings-walls-compounds-barriers)  


## Routes

Tous les types de routes, des autoroutes aux pistes et aux chemins, sont désignés par le terme "autoroute" dans OpenStreetMap. Il est important que les autoroutes soient correctement ajoutées à la base de données (données OpenStreetMap) car elles sont utilisées de nombreuses façons :  

- Les logiciels de navigation tels que les appareils Garmin et les applications pour smartphones telles que Osmand peuvent fournir des informations sur les itinéraires sur de grandes distances si les informations correctes sont chargées dans ces appareils. Comme ces logiciels dépendent du GPS de l'appareil pour localiser la position par rapport à la carte de base chargée dans l'appareil, il est important que les autoroutes se trouvent à environ 15 mètres du bon endroit, sinon ils ne fonctionneront pas !  
- Il est beaucoup plus facile de planifier l'itinéraire d'un gros camion "d'assistance" si vous pouvez faire la différence entre un chemin et une route nationale, avec toutes les étapes intermédiaires.  
- Savoir si la surface d'une route est de l'asphalte ou de la boue molle fera une différence dans la planification de votre itinéraire.
- Lorsque l'on tente de cartographier la propagation d'une maladie, la description d'une victime "près du carrefour" est significative si l'on peut voir le carrefour sur la carte.

### <a name="highways-howto"></a> Routes - Comment cartographier 

![iD 3][]

1. Lorsque vous tracez des routes, assurez-vous que vous avez suffisamment zoomé. Pour commencer, réglez l'échelle à environ 20 mètres et tracez l'autoroute de manière à ce que votre tracé comporte suffisamment de points pour rester sur la route, ou très près de celle-ci, que vous pouvez voir sur votre image satellite. Dans la capture d'écran ci-dessus, vous pouvez voir que j'ai tracé la route qui m'avait été transmise, vers le bas, à travers les arbres, et vers un autre bâtiment où elle semble s'arrêter. Lorsque les arbres sont proches de la route et que l'image est obtenue par une caméra aérienne, on a l'impression que la route se rétrécit en traversant les arbres - cependant, il s'agit simplement de l'effet des arbres qui obscurcissent la vue, et la route a la même largeur partout.  
2. J'ai également tracé une autre section de route, en m'assurant qu'elle est connectée à chaque extrémité - iD le montre avec un point légèrement plus grand et de couleur plus foncée à la jonction. Il est important que les routes se rejoignent et " partagent un nœud commun " pour que le logiciel de navigation fournisse les indications correctes.  
3. La route est marquée comme 'highway=residential', et j'ai également ajouté 'surface=unpaved'.  
4.  Pour une description complète du balisage en Afrique, consultez la page wiki [Highway Tag Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa).  

> Il existe un risque élevé de souffrir de conflits qui vous empêcheront de sauvegarder votre travail lorsque vous travaillez sur une autoroute qui s'étend sur d'autres carrés où des cartographes seront également en train de l'éditer. Il est conseillé de sauvegarder toutes vos modifications avant d'éditer l'autoroute, puis de sauvegarder vos modifications à intervalles très fréquents, par exemple après avoir ajouté tous les 6 nœuds.


### Le réseau routier

![JOSM 4][]

Cette capture d'écran montre JOSM avec le style HOT-OSM-Validate utilisé [styles JOSM] (https://josm.openstreetmap.de/wiki/Styles). Bien qu'il soit conçu pour aider les validateurs, il peut être très utile lors de la cartographie initiale. Tout ce qui est coloré en rouge présente un problème quelconque - les autres couleurs sont expliquées dans la clé de cette capture d'écran.  

1. Cette section de route est colorée en rouge car la balise a été mal tapée et une majuscule a été utilisée. La balise devrait être highway=unclassified, ce qui aurait donné une couleur marron pâle dans la capture d'écran.  
2. Il s'agit d'une partie du réseau routier de la ville au sud-ouest, qui est relié au reste du réseau routier africain.  
3. Ces tronçons de route sont "isolés". Ils ne sont pas reliés à la ville ou à d'autres routes de quelque manière que ce soit. Dans leur format actuel, ils ne sont pas très utiles et devront faire l'objet d'une étude plus approfondie pour déterminer s'ils peuvent être connectés au reste du réseau ou s'il faut envisager de les supprimer.  


**Route ou cours d'eau?**

![iD 5][]

Il n'y a pas de vues de style disponibles pour aider à utiliser iD, mais dans cette capture d'écran, vous pouvez voir une zone de végétation et de sol. Le sol semble être de la vase ou peut-être même une zone de marais sans eau. Les lignes pointillées noires et blanches représentent des chemins dans iD ; j'ai temporairement mis en surbrillance puis supprimé l'un d'entre eux pour montrer le terrain.  

1. highway= chemin ou cours d'eau. Probablement les deux ! Les routes de toutes tailles suivent fréquemment une vallée fluviale et dans de nombreux cas, elles peuvent suivre le cours d'une rivière ou d'un ruisseau saisonnier. Dans ce cas, il s'agit d'une zone de plaine inondable qui, au moment où l'imagerie satellite a été produite, était sèche et utilisée comme chemin. Il serait préférable de l'étiqueter comme suit :  
highway=path  
seasonal=yes  
surface=unpaved  
2. On peut clairement voir le chemin qui se dirige vers et dans la bande d'arbres et d'arbustes, mais il n'est pas possible de voir son tracé exact à travers les arbres. Dans ces circonstances, vous pouvez être certain que le chemin, la piste ou la route est présent, il est simplement caché à votre vue par les arbres. J'ai cartographié cela en continuant le chemin que je traçais là où il pouvait être clairement vu sur le terrain comme une ligne droite à travers les arbres jusqu'à la continuation clairement visible de l'autre côté. Utilisez cette méthode avec prudence, mais dans ce cas, il est évident que le chemin est présent et que son tracé est probablement très proche de la ligne que j'ai tracée. Il s'agit d'un usage plus extrême - il est plus habituel d'estimer le tracé d'une route sur quelques mètres seulement lorsque votre vue est masquée par un ou deux arbres.  
3. Après avoir supprimé le chemin pour voir clairement le sol, je peux facilement le remplacer en utilisant la fonction "annuler" d'iD.  

***


## Limites résidentielles

Les limites résidentielles sont utilisées à de nombreuses fins dans OpenStreetMap.  

+ L'utilisation la plus simple est de pouvoir voir les zones résidentielles à des niveaux de zoom plus élevés lors de l'affichage de [OpenStreetMap.org] (http://www.openstreetmap.org), où elles sont colorées en gris pâle dans la vue standard.  
+ Lorsqu'il n'y a pas le temps de cartographier en détail dès le début, le projet dans le gestionnaire de tâches exigera souvent quelque chose de semblable :  

> Cartographier les infrastructures essentielles telles que les écoles, les lieux de culte et les marchés.  
> Tracer la sortie des localités et des cimetières.  
> Nous retracerons les routes plus tard dans une autre Tâche.   
+ landuse=residential peut également être utilisé à des fins statistiques, et une cartographie précise devient alors importante  

* Si vous pouvez établir le nombre de personnes qui résident normalement dans chaque logement, et  
 combien de logements sont normalement construits dans une zone donnée, puis  
 une fois que vous avez déterminé la zone couverte par une limite de landuse=residential boundary,  
 vous pouvez établir une population très approximative pour cette zone.  
 L'estimation du nombre de travailleurs humanitaires et de la quantité de médicaments devient maintenant plus réaliste.
* Les noms de lieux et les limites sont souvent importés d'autres sources, mais l'emplacement n'est pas toujours exact. Une fois que vous avez une limite résidentielle, la personne qui effectue l'importation peut voir où le nom de lieu devrait probablement se trouver.


### <a name="residential-howto"></a> landuse=residential - comment cartographier


** Dans un monde idéal **  

*Étape 1* - La décision est prise de cartographier une zone, et un cartographe trace rapidement une limite très approximative d'un landuse=residential autour d'une zone,  
*Étape 2* - Le projet du gestionnaire de tâches est créé et les cartographes individuels affinent la frontière pour qu'elle soit plus proche des bâtiments, etc.  

![JOSM residential][]

![iD residential][]
 
Les captures d'écran iD et JOSM ci-dessus montrent une limite landuse=residential correctement cartographiée.  

1. La frontière doit être fermée, de manière à ce que le point de départ de la ligne (voie) rejoigne le point d'arrivée.  
2. Les segments et les nœuds de la frontière ne doivent pas rejoindre des routes, des voies navigables, des bâtiments ou tout autre élément. *C'est-à-dire* qu'ils ne doivent pas partager de nœuds. Mais ils peuvent se croiser.  
3. La limite doit être assez proche des bâtiments et de tous les jardins ou cours qui font partie de l'ensemble.  


Dans la capture d'écran ci-dessous, mon carré contient une partie d'une limite landuse=residential. La personne qui a terminé le carré à ma droite a poursuivi une limite landuse=residential à travers son carré, et m'a ensuite correctement "passé le relais" en plaçant la limite juste à l'intérieur de mon carré pour que je puisse établir exactement où elle doit se trouver dans mon carré.  


![JOSM residential 1][]

J'ajouterai des nœuds supplémentaires à la limite, en l'étendant horizontalement à travers mon carré pour qu'elle contourne les bâtiments, et en bas, je continuerai la limite en ligne droite juste à l'intérieur du carré en dessous du mien pour que la personne qui sélectionne le carré en dessous du mien puisse l'étendre autour des bâtiments qu'elle possède.  

Il s'agit d'une opération difficile - vous ne pouvez voir qu'une petite partie de l'ensemble de la ville / du village et, bien que vous fassiez de votre mieux avec la limite landuse=residential, il est fort probable qu'un validateur qui a une vue d'ensemble de plusieurs carrés doive ajuster la limite du mieux qu'il peut après que les carrés individuels aient été cartographiés.  

> Il existe un risque élevé de conflits lorsque l'on travaille sur une limite landuse=residential, car elle s'étend sur d'autres carrés où des cartographes vont également la modifier. Il est conseillé de sauvegarder toutes vos modifications avant de modifier la limite, puis de sauvegarder vos modifications à intervalles très fréquents, par exemple après l'ajout de 6 nœuds.

***


## Murs de bâtiments Barrières composées  

Buildings are added to the map data for a number of reasons;  

*  The density of buildings in an area gives a very good indication of the number of people residing there.  
*  The size, shape & location of a building can help to identify it as a potential evacuation or treatment site.  
*  The size, shape, and relative location of buildings can be used to identify particular locations such as wells, aid stations, schools, etc..  
*  There is the potential to estimate the degree of damage sustained by a building, which can be used to estimate the potential casualties & level of support that may be required - this is currently (January 2015) under discussion for future use.  


### <a name="buildings-howto"></a> Buildings - How to Map

The vast majority of buildings that require mapping by HOT are either based upon rectangular shapes with square corners, or are round. If a building appears to be a mixture of the two, it is more likely you are looking at a building who's outline is obscured by shadow, reflection, foliage or similar.  

For some tasks where only an outline of an area is required, the task may specify that buildings can be mapped as nodes, but these situations are now rare.  


#### building=yes

Unless the project instructions specify otherwise, buildings should be tagged **building=yes**  

*  There can often be a time delay between the satellite imagery being taken, and the mapping being carried out. There is the possibility that the building you are looking at that appears to have no roof, has now been completed & is now in habitation. It is also possible that you are looking at a building with several storeys, the bottom ones being lived in, and the top floor with no roof currently not being lived in.  

> **Mapping buildings using iD** - when you are using the area tool within iD to create the basic shape, you must remember to then change the tag to building=yes. The default setting will merely tag the shape as area=yes. If you're tracing is of a building with square corners, please take the time to square your traced item (highlight it and shortcut 'q').  

*  JOSM is far faster for mapping buildings - [JOSM building tools is explained here.](/en/josm/josm-more-plugins/#the-buildings-tools-plugin)  

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