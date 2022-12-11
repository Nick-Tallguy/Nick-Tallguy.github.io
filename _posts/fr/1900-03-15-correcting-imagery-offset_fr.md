---
layout: doc
titre : Correction du décalage de l'imagerie
permalink: /fr/josm/correcting-imagery-offset/
lang: fr
catégorie : josm
---

Décalage de l'imagerie
===============

> Révisé le 21 septembre 2015  

Les fournisseurs d'images font généralement un très bon travail de géoréférencement de leurs images, mais il arrive parfois que les images ne soient pas positionnées. Cela est particulièrement vrai dans les zones vallonnées ou montagneuses, où il peut être difficile d'étirer une image plate sur une zone de la Terre comportant de nombreux contours. Lorsque vous chargez des images dans le JOSM, elles peuvent parfois se trouver à dix mètres ou plus de leur position réelle. C'est ce qu'on appelle le **décalage de l'imagerie**.  

Remarquez dans l'image suivante que deux photographies aériennes distinctes ont été géoréférencées et fusionnées. Comme le géoréférencement n'est pas un processus parfait, les images ne s'alignent pas parfaitement l'une sur l'autre. Par conséquent, l'une d'entre elles, ou les deux, doivent être inexactes.  

![Misaligned imagery][]

Nous avons appris à connaître deux grandes méthodes de cartographie : l'une consiste à utiliser des images aériennes pour identifier des éléments au sol, l'autre à utiliser le GPS pour enregistrer des traces et des points de repère, puis à les ajouter à OpenStreetMap. L'avantage de l'imagerie aérienne est évident. Elle vous permet, en tant que cartographe, d'avoir une vue d'ensemble, d'observer divers détails de l'image, de tenir compte de votre connaissance de la région et de tracer facilement les routes, les bâtiments et les zones. L'un des principaux avantages du GPS est toutefois qu'il ne souffre pas de décalage comme l'imagerie. Un GPS vous fournira toujours une latitude et une longitude correctes. La seule exception est lorsque les signaux satellites sont interrompus par de grands bâtiments ou des montagnes, mais dans ce cas, il est facile de reconnaître l'erreur. Observez la trace GPS sur cette image, comparée à la couche d'imagerie aérienne de Bing située en dessous :   

![Aerial vs GPS][]

Compte tenu de ce que nous savons maintenant, il est clair que la trace GPS est probablement exacte, et que l'image sous-jacente n'est pas à sa place. Nous devons donc maintenant nous demander : "si l'imagerie peut être déplacée, comment pouvons-nous encore l'utiliser et faire des cartes précises ?".  

Correction du décalage de l'imagerie
-------------------------

La réponse à la question précédente est que nous pouvons déplacer l'imagerie afin qu'elle s'aligne sur des éléments dont nous savons qu'ils sont au bon endroit, comme les traces GPS. Il est facile de corriger le décalage de l'imagerie dans JOSM.  

Les meilleures références pour ajuster l'imagerie sont les pistes GPS qui suivent les routes. Et plus vous avez de pistes GPS à référencer, plus vous serez en mesure d'aligner votre imagerie avec précision. Comme les utilisateurs d'OpenStreetMap téléchargent souvent leurs traces GPS dans la base de données OSM, nous pouvons les télécharger et les utiliser pour aligner notre imagerie.  

- Cliquez sur le bouton de téléchargement. ![JOSM download button][]{: height="24px"}  

- Cochez la case à côté de "Raw GPS Data" ! [Download raw GPS data][]{ : height="24px"} en haut de la fenêtre de téléchargement. Sélectionnez votre zone et cliquez sur "Télécharger".  

- Cela permettra de télécharger une couche supplémentaire dans JOSM contenant les traces GPS. Selon le nombre de traces téléchargées par les utilisateurs d'OSM, vous pouvez voir peu de traces (ou même aucune trace) :  

![Few GPS tracks from OSM][]

- Ou bien, vous pouvez voir plusieurs pistes :  

![Many GPS tracks from OSM][]

- Pour ajuster une couche d'imagerie, cliquez sur le bouton "Ajuster le décalage de l'imagerie" ! [bouton Ajuster le décalage de l'imagerie][]{ : height="24px"} en haut de JOSM.  

- Sans tenir compte de la boîte qui s'affiche, utilisez votre souris pour faire glisser la couche d'imagerie de manière à ce qu'elle s'aligne correctement avec les traces GPS. Les traces GPS doivent s'aligner le plus possible avec les routes sur l'imagerie. Vous verrez les numéros de décalage dans la boîte changer.  

![Adjust imagery offset][]

- Si vous le souhaitez, vous pouvez enregistrer ces paramètres de décalage en saisissant un nom de signet, puis en cliquant sur OK. Vous pouvez ensuite appliquer automatiquement les mêmes paramètres ultérieurement en allant dans Imagerie ‣ Décalage d'image et en cliquant sur votre signet.  
- Si vous ne souhaitez pas enregistrer le décalage, cliquez simplement sur OK sans saisir de nom de signet.  

Que faire s'il n'y a pas de traces GPS sur OpenStreetMap, et que vous n'avez pas de GPS ? Sans traces GPS, il est difficile d'aligner l'imagerie. S'il s'agit d'une zone relativement vide (peu cartographiée), vous pouvez choisir d'utiliser simplement l'imagerie telle quelle et de corriger les données plus tard. Il est préférable de cartographier une zone décalée de 20 ou 30 mètres que de ne pas cartographier du tout.  

Si vous pouvez identifier de manière positive la latitude et la longitude d'un objet au sol, vous pouvez vous assurer que l'imagerie est correctement placée en suivant les étapes suivantes :  

1. Identifiez l'objet dont vous connaissez la position sur l'imagerie.  
2. Cliquez sur la latitude et la longitude dans le coin inférieur gauche de JOSM ! [JOSM lat lon][]{ : height="24px"}  
3. Dans la boîte de dialogue qui s'ouvre, entrez la latitude et la longitude du lieu que vous connaissez, et entrez un petit nombre pour le Zoom, environ cinq ou dix.  
![JOSM lat lon dialogue][]
4. Cette opération permet de zoomer et de centrer la carte sur votre longitude et votre latitude. Vous pouvez maintenant déplacer l'imagerie comme vous l'avez fait précédemment afin que l'élément que vous connaissez soit centré à la bonne position.  

Si, au contraire, la zone a déjà été largement cartographiée, il est à espérer que les cartographes précédents ont dessiné les objets à leur emplacement correct. Dans ce cas, vous pouvez aligner l'imagerie sur la carte OSM, mais attention ! Il se peut que les autres cartographes ne soient pas au courant du décalage des images et qu'ils aient fait des erreurs en cartographiant.  


La base de données des décalages d'images
---------------------------

Vous savez maintenant comment surveiller et corriger le décalage de l'imagerie, mais cette approche présente un problème majeur que nous avons négligé jusqu'à présent. Si chaque utilisateur d'OpenStreetMap ajuste l'imagerie différemment, tout le monde va cartographier avec des fonds légèrement différents.  

Imaginez que vous êtes en train de cartographier une petite ville, et que vous vous rendez compte que l'imagerie Bing est décalée de 15 mètres vers le nord. Vous ajustez donc l'imagerie et l'utilisez pour cartographier toute la ville avec précision. Mais quelqu'un d'autre veut ajouter quelque chose à la carte, il télécharge donc les données et charge l'imagerie Bing, mais il n'est pas au courant du décalage d'imagerie que vous avez découvert ! Il pensera que quelque chose ne va pas et que tous les objets de la ville sont déplacés de 15 mètres, et il commencera à les déplacer, ce qui n'est pas correct ! Cela peut être désastreux pour les données cartographiques de la ville.  

C'est pourquoi il est important que tous les utilisateurs soient conscients du décalage des images et qu'ils le vérifient toujours avant de cartographier une zone. Pour résoudre ce problème, des personnes intelligentes ont créé un plugin qui permet aux utilisateurs de sauvegarder les informations de décalage dans une base de données et de les partager avec d'autres. Voyons comment cela fonctionne :  

- Ouvrez le menu Préférences dans JOSM, et cliquez sur l'onglet Plugins ! [onglet Plugins de JOSM][]{ : height="24px"}  

- Trouvez le plugin nommé "imagery_offset_db" et cochez la case à côté.  

![Imagery_offset_db plugin][]

- Cliquez sur OK. Vous devrez redémarrer JOSM pour terminer l'installation du plugin.  

De la même manière que vous pouvez enregistrer des décalages comme signets, ce plugin vous permet d'enregistrer des décalages dans une base de données centrale et d'accéder aux décalages que d'autres utilisateurs ont créés. Ainsi, si un cartographe crée un offset d'imagerie dans une zone, d'autres utilisateurs peuvent utiliser exactement le même décalage pour cartographier.  

Lorsque vous utilisez des couches d'imagerie aérienne, vous devez TOUJOURS vérifier les décalages existants, et lorsque vous créez votre propre décalage, vous devez TOUJOURS l'enregistrer dans cette base de données.  


Ajouter le décalage de l'image à partir de la base de données
------------------------------------

Lorsque vous ajoutez une couche d'imagerie, le nouveau plugin vous avertit que vous devez vérifier la base de données d'imagerie pour un décalage existant. Vous verrez une icône avec un point d'exclamation rouge en haut du JOSM, comme ceci :  

![Imagery offset notification][]

- Cliquez sur le bouton et le plugin communiquera avec la base de données pour voir s'il existe des décalages existants dans cette zone.  
- Ici, nous avons téléchargé des données OSM et des traces GPS à Kuta, Bali, Indonésie. Dans ce cas, nous avons trouvé un décalage existant. Cliquez dessus pour l'appliquer à la carte.  

![Offset in Kuta bali][]

- Cela entraîne un décalage de la couche d'imagerie. Cependant, lorsque nous ajoutons le décalage de quelqu'un d'autre comme ceci, nous devons vérifier qu'il est valide en le comparant aux traces GPS.  

![Comparing imagery offset from GPS tracks][]

- We can see that the imagery layer is in fact misaligned.  We don’t want other users to use this offset, so we should mark it as incorrect in the database. Click on the “Offsets” button again (it won’t have a red exclamation mark anymore).  

![Offsets button][]

- This time when the dialog opens, right-click on the offset and click “Deprecate Offset.”  

![Deprecate offset][]

- Click “Yes” to confirm.  
- You will need to enter a reason for deprecating this offset.  

![Deprecate reason][]


Add Imagery Offset to the Database
------------------------------------

Now that we have marked this user’s offset as “deprecated,” we should add an improved offset to the database.  

1. Click on the “Adjust imagery offset” button. ![Adjust imagery offset button][]{: height="24px"}  
2.  Adjust the imagery to match the GPS tracks.  Click OK in the box.  
3.  Now go to Offset ‣ Store Imagery Offset...  
![Store imagery offset][]
4.  Enter a description of the offset in the box that opens.  
![Offset description][]
5.  Click OK.  Your offset will be saved to the database.  
6.  Now let’s hide the GPS layer and look at the OSM data against the correctly placed imagery.  

![Corrected imagery][]

Oh No!  Somebody mapped this area with misaligned imagery, so the area is not correctly mapped.  This will take some time to fix.


Imagery Offset Database Website
--------------------------------

Lastly, for more information on the offset database, you can visit the website at [http://offsets.textual.ru/](http://offsets.textual.ru/).  This lists all the offsets that have been uploaded to the database, and it also has a cool map feature that visualizes where the offsets are located, as you can see here:  

![http://offsets.textual.ru/][]

> One last thing to remember is that the imagery may not be offset the same distance everywhere!  This is especially true in regions where there are lots of hills and mountains.  So if the imagery seems to be offset differently in different areas, you’ll need to move it again.  

Summary
--------

When you are just beginning OpenStreetMap, you don’t need to worry too much about imagery offset.  But if you see another mapper’s edits that seem misaligned from the imagery, you should always consider that there may be an offset before you start changing their objects.  And if you aren't quite ready to deal with offsets yet, just remember that it’s better to map an area 20 or 30 meters offset than to not map it at all.  But when possible, do remember that imagery offset may occur, and use the steps in this chapter to correct it when needed.


[Misaligned imagery]: /images/josm/misaligned-images.png
[Aerial vs GPS]: /images/josm/aerial-vs-gps.png
[JOSM download button]: /images/josm/josm-download-button.png
[Download raw GPS data]: /images/josm/raw-gps-data.png
[Few GPS tracks from OSM]: /images/josm/osm-gps-tracks-few.jpg
[Many GPS tracks from OSM]: /images/josm/osm-gps-tracks-many.jpg
[Adjust imagery offset button]: /images/josm/adjust-imagery-offset-button.png
[Adjust imagery offset]: /images/josm/adjust-imagery-offset.png
[JOSM lat lon]: /images/josm/josm-lat-lon.png
[JOSM lat lon dialogue]: /images/josm/josm-lat-lon-dialogue.png
[JOSM plugins tab]: /images/josm/josm-plugins-tab.png
[Imagery_offset_db plugin]: /images/josm/imagery-offset-db-plugin.png
[Imagery offset notification]: /images/josm/offset-exclamation.png
[Offset in Kuta bali]: /images/josm/offset-kuta-bali.png
[Comparing imagery offset from GPS tracks]: /images/josm/offset-compare-gps.png
[Offsets button]: /images/josm/offsets-button.png
[Deprecate offset]: /images/josm/deprecate-offset.png
[Deprecate reason]: /images/josm/deprecate-reason.png
[Store imagery offset]: /images/josm/store-imagery-offset.png
[Offset description]: /images/josm/offset-description.png
[Corrected imagery]: /images/josm/correctly-placed.png
[http://offsets.textual.ru/]: /images/josm/offset-website.png










