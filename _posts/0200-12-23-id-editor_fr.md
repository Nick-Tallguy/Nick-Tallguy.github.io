---
layout: doc
title: Éditeur iD
permalink: /fr/beginner/id-editor/
lang : fr
category: beginner
---

L’Éditeur iD
=============

> Ce guide peut être téléchargé : [beginner_id-editor_fr.odt](/files/beginner_id-editor_fr.odt) ou [beginner_id-editor_fr.pdf](/files/beginner_id-editor_fr.pdf)  
Révision 2016-03-30  

- TOC
{:toc}

L’Éditeur iD est, de facto, l’éditeur OpenStreetMap basé sur un navigateur web. iD est rapide et facile d’utilisation. Il permet de cartographier a partir de sources de données variées telles que des images satellites, des images aériennes, des traces GPS, Field Papers ou Mapillary.  

L’Éditeur iD est un très bon moyen de contribuer de petites modifications qui ne requièrent pas les fonctionnalités avancées de JOSM (un logiciel de cartographie plus avancé). Ce chapitre illustre les bases de l’édition avec iD.  

Lancer l'éditeur iD
----------------------

	L’Éditeur iD requiert une connexion internet active.  
	﻿Ouvrez votre navigateur internet et allez sur le site web OpenStreetMap à l’adresse [http://www.openstreetmap.org](http://www.openstreetmap.org).  
	**Connectez-vous** avec votre compte OpenStreetMap  
	Centrez et zoomez la carte sur la zone que vous souhaitez éditer. Vous pouvez déplacer la vue en maintenant le bouton gauche de la souris enfoncé et en tirant la carte vers l’endroit désiré.  
	Cliquez sur la petite flèche à côté de **Modifier**. Cliquez ensuite sur **Modifier avec iD (éditeur intégré au navigateur)**.  

![image1][]


Interface Utilisateur de l’Éditeur iD
-------------------------
![image2][]

1. **Panel d’Édition :** Ce panel affiche les tags associés à l’objet sélectionné sur la carte.  
	Vous pouvez ajouter ou éditer les tags dans ce panel.  
2. **Outils :** Ce panel offre des outils d’édition basiques :  
    Tracer un point (nœud), *raccourci* **1** ![image3][]{: height="24px"}  
    Tracer une ligne (chemin), *raccourci* **2** ![image4][]{: height="24px"}  
    Tracer un polygone (forme), *raccourci* **3** ![image5][]{: height="24px"}  
    Annuler, *raccourci* **Ctrl+z** ![image6][]{: height="24px"}  
    Rétablir, *raccourci* **Ctrl+y** ![image7][]{: height="24px"}  
    Sauvegarder, *raccourci* **Ctrl+s** ![image8][]{: height="24px"}  
3. ***Carte :*** Ce panel affiche plusieurs fonctions de configuration :  
    Zoomer, *raccourci* **+** ![image9][]{: height="24px"}  
    Dézoomer, *raccourci* **-** ![image10][]{: height="24px"}  
    Me localiser ![image11][]{: height="24px"}  
    Paramètres du fond de carte, *raccourci* **b** ![image12][]{: height="24px"}  
    Données cartographiques, *raccourci* **f** ![Map Data][]{: height="24px"}  
    Aide, *raccourci* **h** ![image13][]{: height="24px"}  
4. **Panel d’information :** Ce panel affiche des informations variées telles que l’échelle et les utilisateurs ayant contribué à cette zone.  

Configurer le fond de carte
--------------------------------

Cliquez sur le bouton **Paramètres du fond de carte** ou utilisez le *raccourci* **b**.![image14][]{: height="24px"}  
![image15][]  
Pour changer le **niveau de luminosité** cliquer sur l’une des icônes, les niveaux proposés sont 100%, 75%, 50%, et 25% ![image16][]{: height="24px"}  
Vous pouvez aussi **changer le fond de carte** pour le fournisseur de votre choix (le fond par défaut est Bing Aerial Imagery).  

Vous pouvez ajouter vos propres tuiles en cliquant sur **Personnalisé**. Par exemple, si vous souhaitez ajouter un **Field Paper** [^fieldpaper], cliquez sur **Personnalisé** puis cliquez sur l’icône de loupe (rechercher) pour ouvrir la fenêtre suivante :-  
![image17][]   
et entrez votre **URL FieldPaper**, qui sera quelque chose comme : <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Pour **afficher des traces GPS depuis votre ordinateur** (au format GPX), glissez-déposez le fichier GPX dans l’éditeur iD.  
Pour activer les **traces GPS OpenStreetMap**, cliquez sur la case à cocher. Dans l’image suivante, les traces GPS publiques s’affichent de plusieurs couleurs, indiquant la direction du trajet.  
![osm gps traces][]  
S’il y a un [décalage d’imagerie](/fr/josm/aerial-imagery), vous pouvez **corriger le décalage** en cliquant sur **Corriger le décalage de l’imagerie**. ![image18][]  

- Cliquez sur les flèches de navigation pour déplacer l’imagerie. Cliquez sur réinitialiser pour retourner à la position par défaut. ![image20][]  

Édition Basique avec iD  
----------------------  

### Ajouter des Points  

Pour ajouter un nouveau nœud (point), cliquez sur le bouton **Point**. ![image3][]{: height="24px"}  

- Le curseur de la souris devient un signe plus (+). Maintenant, cliquez à un endroit qui marque un emplacement. Par exemple, s'il y a un hôpital dans votre région, cliquez à l'emplacement du bâtiment de l'hôpital.  
![image21][]  
- Remarquez qu'un nouveau nœud (point) a été ajouté. En même temps, le panneau de gauche change pour afficher un formulaire où vous pouvez sélectionner des attributs pour l'objet. Cliquez sur **Hospital Grounds** pour marquer le point comme étant un hôpital.  
![image22][]  
- Vous pouvez utiliser le formulaire pour renseigner d'autres informations détaillées concernant votre nœud. Vous pouvez renseigner le nom de l'hôpital, l'adresse, et/ou d'autres informations additionnelles. Notez que chaque type d'élément cartographique a des options différentes, selon l'attribut que vous choisissez dans le panneau des éléments.  
- Si vous faites une erreur, comme un mauvais emplacement, vous pouvez déplacer votre nœud à un nouvel emplacement en maintenant le bouton gauche de votre souris sur votre nœud et en le glissant. Vous pouvez aussi supprimer votre nœud en cliquant avec le bouton droit de la souris sur votre nœud, puis en cliquant sur le bouton qui ressemble à une poubelle. ![image23][]{: height="24px"}  
Un « point » créé dans l'éditeur iD est en fait un « nœud » indépendant avec un ensemble d'« attributs ».  

### Dessiner des Lignes  

Pour ajouter une nouvelle ligne, cliquer sur le bouton **Line**. ![image4][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Find a road that hasn’t been drawn on the map and trace it. Click once on a point where the road segment begins, move your mouse, and click to add additional points. Double-click to end the drawing process. Notice the panel on the left.  
![image24][]  
- Just as with a point, select the appropriate tags for your line.  
- You can drag points from the line by clicking your left mouse button on a point and dragging it.  
- You also can move the whole line by selecting it, and choosing the **Move tool**. Then drag the line to a new position. ![image30][]{: height="24px"}  
- When you click your left mouse button on an individual point (node) on the line, you will see these tools:  
- Delete point from line. ![image23][]{: height="24px"}  
- Disconnect point from line. ![image26][]{: height="24px"}  
- Split a line into two lines from the point you’ve selected. ![image27][]{: height="24px"}  
- When you click your left mouse button on a line (but not on a point), you will see these tools:  
-   Delete line. ![image23][]{: height="24px"}  
-   Create a circle from a line (only active if the line is closed) ![image29][]{: height="24px"}  
-   Move line ![image30][]{: height="24px"}  
-   Form a square shape from a line (only active if the line is closed) ![image31][]{: height="24px"}  
-   Reverse line direction (good for rivers & one-way streets) ![image32][]{: height="24px"}  

A "line" created in the iD editor is actually a "way" with "tags" on it.

>A special note about **Deleting**: In general you should avoid deleting other people's mapping if it just needs improvement. You can delete your own mistakes, but you should try to *adjust* other people's mapped objects if they need changes. This preserves the history of the items in the OSM database and is respectful of fellow mappers. If you really feel something should be deleted, consider asking the original mapper or one of the OSM email lists about it first.

### Dessiner des Formes (Polygones)

To add a new multi-sided shape, click on the **Area** button. ![image34][]{: height="24px"}  

- Your mouse cursor will change into plus (+) sign. Try to trace a building using the imagery as a guide.  
- You will notice that the color of your shape will change depending on the attributes that you assign to it.  
![image35][]  
- The tools that are available when you select a shape are similar to those when you click on a line.  

A "polygon" in the iD editor is actually a "closed way" with tags on it.

Saving Your Changes
--------------------

When (and if) you want to save your edits to OpenStreetMap, click the **Save** button. The panel on the left will show the upload panel.  
![image36][]  

- Enter a comment about your edits and click **Save**.  

> If you have edited the same feature (point, way or area) at the same time as another person was editing it, you will receive a warning that your edits cannot be uploaded until you have resolved the **conflicts** - choose whose edits to accept & upload your changes. *Resolving conflicts often involves accepting the other persons edits, in which case you will probably wish to return to the feature in question and edit again (**this time save soon after the edit to try to avoid a conflict again!**).*

Additional Information and Custom Tags
---------------------------------------

When you are editing an object, you will see a strip of icons at the bottom of the attribute panel. You can add additional information by clicking these icons:

- Add elevation ![image37][]{: height="24px"}  
- Add notes ![image38][]{: height="24px"}  
- Add contacts / phone number ![image39][]{: height="24px"}  
- Add source tag ![image40][]{: height="24px"}  
- Add website ![image41][]{: height="24px"}  
- Add accessibility information ![image42][]{: height="24px"}  
- Add Wikipedia link ![image43][]{: height="24px"}  

Or, you can add custom tags by clicking **All tags**. ![image44][]{: height="24px"}  

- This will show all the tags attached to the feature.  
![image45][]  
- Click the plus sign (+) to add keys and values or click the trash icon to delete tags.

iD versus JOSM
---------------  

**iD is good for...**

- When you are doing simple edits  
- When you have fast Internet to load the imagery and save the edits  
- When you want to be sure to follow a consistent and simple tagging scheme  
- When you are restricted from installing a program on the computer you are using

**JOSM is better...**

- When you are adding many buildings (See buildings_tool plugin)
- When you are editing many polygons or lines that already exist
- When you are on an unreliable Internet connection or offline
- When you are using a specific tagging scheme (or custom presets)

[^fieldpaper]: There is a [section of LearnOSM](/en/mobile-mapping/field-papers/) giving more information about Field Papers.




[image1]: /images/beginner/id-editor_image1.png 
[image2]: /images/beginner/id-editor_image2.png
[image3]: /images/beginner/id-editor_image3.png
[image4]: /images/beginner/id-editor_image4.png
[image5]: /images/beginner/id-editor_image5.png
[image6]: /images/beginner/id-editor_image6.png
[image7]: /images/beginner/id-editor_image7.png
[image8]: /images/beginner/id-editor_image8.png
[image9]: /images/beginner/id-editor_image9.png
[image10]: /images/beginner/id-editor_image10.png
[image11]: /images/beginner/id-editor_image11.png
[image12]: /images/beginner/id-editor_image12.png
[Map Data]: /images/beginner/id-editor_map_data.png
[image13]: /images/beginner/id-editor_image13.png
[image14]: /images/beginner/id-editor_image14.png
[image15]: /images/beginner/id-editor_image15.png
[image16]: /images/beginner/id-editor_image16.png
[image17]: /images/beginner/id-editor_image17.png
[image18]: /images/beginner/id-editor_image18.png
[image19]: /images/beginner/id-editor_image19.png
[image20]: /images/beginner/id-editor_image20.png
[image21]: /images/beginner/id-editor_image21.png
[image22]: /images/beginner/id-editor_image22.png
[image23]: /images/beginner/id-editor_image23.png
[image24]: /images/beginner/id-editor_image24.png
[image25]: /images/beginner/id-editor_image25.png
[image26]: /images/beginner/id-editor_image26.png
[image27]: /images/beginner/id-editor_image27.png
[image28]: /images/beginner/id-editor_image28.png
[image29]: /images/beginner/id-editor_image29.png
[image30]: /images/beginner/id-editor_image30.png
[image31]: /images/beginner/id-editor_image31.png
[image32]: /images/beginner/id-editor_image32.png
[image33]: /images/beginner/id-editor_image33.png
[image34]: /images/beginner/id-editor_image34.png
[image35]: /images/beginner/id-editor_image35.png
[image36]: /images/beginner/id-editor_image36.png
[image37]: /images/beginner/id-editor_image37.png
[image38]: /images/beginner/id-editor_image38.png
[image39]: /images/beginner/id-editor_image39.png
[image40]: /images/beginner/id-editor_image40.png
[image41]: /images/beginner/id-editor_image41.png
[image42]: /images/beginner/id-editor_image42.png
[image43]: /images/beginner/id-editor_image43.png
[image44]: /images/beginner/id-editor_image44.png
[image45]: /images/beginner/id-editor_image45.png
[osm gps traces]: /images/beginner/id-editor_gps_public.png