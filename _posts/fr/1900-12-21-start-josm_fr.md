---
layout: doc
title: Débuter avec JOSM
permalink: /fr/josm/start-josm/
lang: fr
category: josm
published: true
---

Débuter avec JOSM
=============================


Comment télécharger et installer JOSM, l'éditeur Java OpenStreetMap, modifier certains des paramètres, ouvrir un exemple de carte et apprendre certaines des opérations de base du logiciel. Vous vous souvenez, dans le chapitre d'introduction, que nous vous avons demandé de dessiner une carte de votre ville ou village ? Nous terminerons ce chapitre en dessinant à nouveau votre cartographe, cette fois-ci numériquement. Après cela, vous devriez avoir une bonne compréhension de la façon de dessiner des cartes dans JOSM.

Télécharger JOSM
-------------

- Si vous avez une copie de JOSM sur un CD ou une clé USB, vous pouvez passer à la section suivante, Installer JOSM.
- Si vous n'avez pas encore JOSM, ou si vous voulez la version la plus récente, ouvrez votre navigateur web - il peut s'agir de Firefox, Chrome, Opera ou Internet Explorer.
- Dans la barre d'adresse située en haut de la fenêtre, saisissez le texte suivant et appuyez sur Entrée : [josm.openstreetmap.de](http://josm.openstreetmap.de)
- Vous pouvez également trouver le site web du JOSM en cherchant "JOSM" sur Internet.
- Le site web devrait ressembler à ceci :

    ![JOSM website][]

- Si Windows est installé sur votre ordinateur, cliquez sur "Windows Installer" pour télécharger JOSM.

    ![Windows installer][]

- Si vous avez un système d'exploitation différent, cliquez sur le lien correspondant à votre système. Votre téléchargement devrait commencer. Dans ce chapitre, nous supposerons que vous utilisez Windows, mais les instructions sont similaires pour les autres systèmes d'exploitation.

Installer JOSM
------------

> Vous risquez de rencontrer des problèmes lors de l'installation de JOSM si Java n'est pas déjà installé sur votre ordinateur. Si vous rencontrez des problèmes dans cette section, essayez de télécharger et d'installer Java. Vous pouvez le télécharger ici : <http://www.java.com/en/download/>
>
> Les utilisateurs de Mac peuvent avoir d'anciennes versions de Java. Veuillez consulter <http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation> pour les options pour OSX 10.6 et 10.7.3+

- Trouvez le fichier d'installation JOSM sur votre ordinateur. Double-cliquez dessus pour commencer l'installation.
- Cliquez sur 'OK', 'Next', 'I Agree', et 'Install'. Lorsque l'installation est terminée, cliquez sur "Terminer" pour lancer JOSM pour la première fois. Plus tard, lorsque vous voudrez lancer JOSM, vous pourrez le faire en cliquant sur le menu Démarrer dans le coin inférieur gauche de votre ordinateur, puis sur le programme JOSM.
- Vous verrez peut-être apparaître une fenêtre vous demandant si vous souhaitez mettre à jour le logiciel. Vous n'avez pas besoin de le mettre à jour puisqu'il est nouveau. Appuyez sur le bouton qui dit "Annuler". Si vous ne voulez plus jamais voir ce message, cochez la case en bas avant d'appuyer sur "Annuler".
- Lorsque le JOSM démarre, il ressemble à quelque chose comme ceci :

    ![JOSM splash page][]

Les préférences de JOSM
----------------

Il existe de nombreux paramètres différents que vous pouvez personnaliser dans JOSM. La langue est l'un des paramètres que vous voudrez peut-être ajuster. JOSM a été traduit dans de nombreuses langues, et vous pouvez préférer travailler dans une autre langue.

- Pour accéder à la fenêtre des préférences, cliquez sur Edit -> Preferences.

    ![Preferences window][]

- Sur le côté gauche, cliquez sur l'icône qui ressemble à un pot de peinture et à un pinceau.
- En haut de la fenêtre, cliquez sur l'onglet " Aspect et apparence ".
- Choisissez votre langue dans la liste déroulante située à côté du mot "Langue".

    ![Look and feel][]

- Cliquez sur OK.
- Vous devez redémarrer JOSM pour enregistrer vos paramètres. Cliquez sur "Fichier" dans le coin supérieur gauche, et cliquez sur "Redémarrer" en bas du menu.

Apprendre les bases du tracé avec JOSM
-----------------------------

- Ouvrons maintenant un exemple de fichier OSM que nous utiliserons pour apprendre les méthodes de base pour dessiner des cartes avec JOSM. Notez que cette carte n'est pas réelle, en ce sens qu'il ne s'agit pas d'une carte réelle d'un lieu réel, nous ne la sauvegarderons donc pas sur OpenStreetMap.
-   Téléchargez le fichier ici : [sample.osm](/files/sample.osm)
- Ouvrons maintenant le fichier de la carte type dans JOSM. Cliquez sur le bouton "Ouvrir" en haut à gauche.

    ![Open file][]

- Trouvez le fichier **sample.osm**. Il se trouve probablement dans votre dossier Téléchargements, à moins que vous ne l'ayez enregistré ailleurs. Cliquez dessus, puis cliquez sur "Ouvrir".
- Vous devriez maintenant voir un exemple de carte qui ressemble à ceci :

    ![Sample file][]

- Vous utiliserez ces données pour essayer différentes techniques d'édition. Vous ne devez cependant jamais télécharger ces données fictives dans la base de données.

### Opérations de base

- Pour déplacer la carte vers la gauche ou la droite, le haut ou le bas, maintenez le bouton droit de la souris enfoncé et déplacez votre souris.
- Il existe plusieurs façons d'effectuer un zoom avant ou arrière sur la carte. Si vous avez une souris, vous pouvez utiliser la molette de défilement pour effectuer un zoom avant et arrière. Si vous utilisez un ordinateur portable et que vous n'avez pas de souris, vous pouvez effectuer un zoom avant et arrière en utilisant la barre d'échelle située dans le coin supérieur gauche de la fenêtre de la carte. Faites glisser la barre vers la gauche et la droite en maintenant le bouton gauche de votre souris enfoncé et en déplaçant la barre vers la gauche ou la droite avec votre souris.

    ![Scale bar][]

- Regardez la carte d'exemple. Il y a plusieurs types d'objets différents. Il y a une rivière, une forêt, quelques bâtiments, plusieurs routes et quelques magasins. Pour sélectionner un objet, cliquez dessus avec le bouton gauche de votre souris.

### Points, lignes et polygones

- En cliquant sur les différents objets de la carte, vous remarquerez qu'il existe trois types d'objets différents sur la carte. Il y a les points, les lignes et les polygones.
- Les points sont un emplacement unique, représenté par des symboles. Sur cet exemple de carte, il y a deux points, un magasin de chaussures et un supermarché. Le magasin de chaussures est représenté par un symbole de chaussure, et le marché est représenté par un chariot.
- Il y a également plusieurs lignes sur la carte, qui représentent des routes. Si vous regardez attentivement, vous verrez qu'à l'intérieur des lignes, il y a également des points. Ces points ne sont associés à aucun symbole ou autre information, mais ils aident à définir l'emplacement de la ligne.
- Enfin, il y a de nombreuses polygones sur la carte modèle, qui représentent différents lieux - une forêt, une rivière, un parc et des bâtiments. Une polygone est utilisée pour représenter une zone, comme un champ ou un bâtiment. Une polygone est exactement comme une ligne - la seule différence est que la polygone commence au même point où elle se termine.

> Il est facile d'imaginer qu'une carte contient ces trois types d'objets de base -
> points, lignes et polygones. Dans OpenStreetMap, il existe une terminologie spéciale
> que vous apprendrez au fur et à mesure de votre progression. Dans OSM, les points sont en fait appelés
> **nœuds**, et les lignes sont appelées **voies**. Une polygone est appelée une **voie fermée**
> car c'est juste une ligne qui se termine au même endroit où elle commence.

- Vous remarquerez peut-être que lorsque vous sélectionnez un objet, une liste apparaît à droite de la carte dans une fenêtre appelée "Propriétés". Il s'agit de balises. Les balises sont des informations liées à un point, une ligne ou un polygone qui décrivent ce qu'ils sont. Nous en apprendrons davantage sur les balises dans un chapitre ultérieur. Pour l'instant, tout ce que vous devez savoir, c'est que ces informations permettent de déterminer si notre objet est une forêt, une rivière, un bâtiment ou autre chose.
- Pensez au fait que vous dessinez une carte à la main et que vous dessinez également des points, des lignes et des polygones. Quels autres endroits sont mieux représentés par des points ? Des lignes ? Des polygones ?

### Modifier les objets

-   Select the forest on the left side of the map. Be sure to click on the line around the forest, not one of the points on the line. Now hold your left mouse button down and drag your mouse. You should be able to move the forest to a new location on the map.
-   Click on one of the points on the line around the forest. Hold your left mouse button down and drag your mouse. You should be able to move the point. This is how you can change the shape of an object, or move a point.

### Tracer

-   On the left side of JOSM is a column of buttons. Many of these buttons open new windows on the right side that provide more information about the map. The most important buttons, however, are at the top of these column. These buttons change what you can do with your mouse.
-   The top buttons in this column are the ones you will use the most. They are used for selecting objects and for drawing new ones.
-   Until now, you have been using the Select tool, which looks like this:

    ![Select tool][]

-   Before you draw, you need to make sure that nothing is selected. Click in the black space on the map, where it is empty, to make sure nothing is selected.
-   Click on the second button, the Draw tool.

    ![Draw tool][]

-   Find an empty area on the map, and double-click with your mouse. This will draw a single point.
-   To draw a line, single-click with your mouse. Move your mouse and click again. Continue until you are happy with your line. To end the line, double-click your mouse.
-   Draw a shape the same way that you draw a line, but finish the shape by double-clicking on the point where you started the line.

### Utiliser les modèles d'attributs

-   Now we know how to draw points, lines and shapes, but we still haven’t defined what they represent. We want to be able to say that our points are shops, schools, or something else, and whether our shapes are fields, buildings, or something else.
-   Click on the Select tool, in the column of buttons on the left.

    ![Select tool][]

-   Select one of the objects that you drew with the Draw tool. On the top menu, click “Presets”. Move your mouse through the sub-menu to the type of location you would like to define.
-   When you click on a preset, a form will pop up asking you for more information. You do not have to fill in every field, but you may wish to add some of the important fields, such as the name of the object.
-   When you are finished entering the information, click “Apply Preset”. If everything went well, your point, line, or shape should change colors or show a symbol. This is because you have defined what it is.

Dessiner votre propre carte
-----------------

-   Now let’s draw a map in order to practice the techniques you have learned. You may wish to redraw the map that you drew on paper previously.
-   Drag the map away from the sample map. Hold the right mouse button and drag your mouse, until you have a nice empty area to draw on.
-   Use the Draw tool to create points, lines, and shapes. Describe what your objects are by selecting from the Presets menu.
-   When you are finished, you should have your own map, similar to the sample map that we opened in sample.osm.

Remove the sample layer
-----------------------

Once you feel comfortable with these basic editing techniques you might want
to turn your attention to mapping real features.

_It is very important that you first remove the layer with the sample data.
These data are fictitious and must not be uploaded to the OpenStreetMap
database (newer JOSM releases automatically prevent this)._

In the Layers window on the upper right of the screen select the sample.osm layer.
Then click on the trash can icon in the lower right corner of that window.
Alternatively you can choose delete from the context menu of the layer.
In order to continue editing you first need to download real data.
This will be explained in the next chapter.

En résumé
-------

Excellent ! Si tout s'est bien passé, vous avez appris comment mettre en place JOSM sur votre
ordinateur, et les outils de base pour dessiner des cartes. Dans le prochain chapitre nous allons
regarder de plus près le processus d'édition de la carte OSM avec JOSM.

[josm website]: /images/josm/josm-website.png

[windows installer]: /images/josm/windows-installer.png

[josm splash page]: /images/josm/josm-splash-page.png

[preferences window]: /images/josm/josm_preferences.png

[look and feel]: /images/josm/josm_look-and-feel.png

[open file]: /images/josm/josm_open-file.png

[sample file]: /images/josm/josm_sample-file.png

[scale bar]: /images/josm/josm_scale-bar.png

[select tool]: /images/josm/josm_select-tool.png

[draw tool]: /images/josm/josm_draw-tool.png