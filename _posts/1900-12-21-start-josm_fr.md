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

Ce guide peut être téléchargé à [josm_start-josm_fr.odt](/files/josm_start-josm_fr.odt) ou [josm_start-josm_fr.pdf](/files/josm_start-josm_fr.pdf)  
> Examiné 2015-07-12  

Comment télécharger et installer JOSM, changer les paramètres de l'éditeur Java OpenStreetMap, ouvrir une carte d'exemple et
apprendre quelques opérations de base du logiciel. Vous vous rappelez dans le
chapitre d'introduction lorsque nous vous demandions de dessiner une carte de votre ville ou 
de votre village? Nous allons conclure ce chapitre en redessinant la carte à nouveau, cette
fois numériquement. Après cela vous devriez avoir une bonne compréhension sur la façon de
dessiner une carte avec JOSM.

Télécharger JOSM
-------------

- Si vous avez une copie de JOSM sur un lecteur de CD ou clé USB, vous pouvez passer à l'étape suivante,
  Installer JOSM.
- Si vous ne disposez pas déjà de l'application JOSM, ou que vous voulez la dernière version, ouvrez
  dans votre navigateur web - ceci peut être Firefox, Chrome, Opera, ou Internet
  Explorer.
- Dans la barre d'adresse au sommet du navigateur, entrez le texte suivant
  et appuyez sur Entrée: [josm.openstreetmap.de](http://josm.openstreetmap.de)
- Vous pouvez aussi trouver le site web de JOSM en cherchant sur Internet "JOSM".
Le site devrait ressembler à ceci :

  ![JOSM website][]

- Si vous utilisez Windows, cliquez sur le lien «Installeur Windows» pour télécharger JOSM.

  ![Windows installer][]

Si vous avez un autre système d'exploitation,
  cliquez sur le lien adéquat. Votre téléchargement devrait
  démarrer. Dans ce chapitre nous supposerons que vous utilisez Windows,
  mais les instructions sont similaire pour les autres systèmes d'exploitations.

Installer JOSM
------------

> Vous pouvez avoir des problèmes pour installer JOSM si Java n'est pas déjà
> installé sur votre ordinateur. Si vous avez des soucis avec cette partie,
> essayez de télécharger et installer Java. Vous pouvez le télécharger ici :
>  [http://www.java.com/fr/download/](http://www.java.com/fr/download/)

> Les utilisateurs Mac peuvent avoir des versions obsolètes de Java. Voir [http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation](http://wiki.openstreetmap.org/wiki/JOSM/Mac#Installation) pour les options pour OSX 10.6 et 10.7.3+.

- Trouvez le fichier d'installation JOSM que vous avez téléchargé sur votre ordinateur. Double-cliquez pour
  commencer l'installation.
- Cliquez sur 'OK', 'Suivant', 'J'accepte', et 'Installer'. Quand l'installation
   est terminée, cliquez sur 'Terminer' pour lancer JOSM pour la première fois.
  Plus tard, quand vous voulez lancer JOSM, vous pouvez le faire en cliquant sur le
  Menu Démarrer dans le coin en bas à gauche de votre ordinateur, et en cliquant
  sur le programme JOSM.
- Vous voyez peut-être un pop-up qui vous demande si vous voulez mettre à jour le
  logiciel. Vous n'avez pas besoin de le mettre à jour puisqu'il est nouveau. Cliquez sur le
  bouton qui indique “Annuler.”  Si vous ne souhaitez plus voir cela
  message, cochez la case en bas juste avant d'appuyer sur "Annuler".
- Lorsque JOSM démarre, voici à quoi cela ressemble :

  ![JOSM splash page][]

Les préférences de JOSM
--------------------

Il y a de nombreux réglages que vous pouvez personnaliser dans JOSM. 
Un réglage que vous voudriez changer est la langue. JOSM a
été traduit dans de nombreuses langues, et vous pourriez préférer
travailler dans une différente.

- Pour accéder à la fenêtre des Préférences, cliquez sur Éditer -\> Préférences.

  ![Preferences window][]

- Sur le côté gauche, cliquez sur l'icône qui ressemble à un pot de peinture et
  un pinceau.
- En haut de la fenêtre, cliquez sur l'onglet "Apparence".
- Choisissez votre langue dans la boîte déroulante à côté du mot
  "Langue".
  
  ![Look and feel][]

- Cliquez sur Valider.
- Vous devez redémarrer JOSM pour sauvegarder vos réglages. Cliquez sur "Fichier" dans le coin en haut à gauche,
  et cliquez sur "Redémarrer" en bas de ce menu.

Apprendre les bases du tracé avec JOSM
-----------------------------

- Maintenant ouvrons un fichier OSM d'exemple que nous allons utiliser pour apprendre les
  bases pour tracer une carte avec JOSM. Notez que cette carte n'est pas réelle, 
  c'est a dire que ce n'est pas une vraie carte d'un endroit réel, donc nous n'allons pas l'enregistrer
  sur OpenStreetMap.
- Télécharger le fichier ici : [sample.osm](/files/sample.osm)
- Ouvrons maintenant le fichier d'exemple dans JOSM, Cliquez sur le
  bouton “Ouvrir” en haut à gauche.

  ![Open file][]

- Trouvez le fichier **sample.osm**. Il se trouvre probablement dans votre dossier "Téléchargement",
  sauf si vous l'avez enregistrer ailleurs. Sélectionnez le, et cliquez sur “Ouvrir”.
- Vous devriez maintenant voir une carte d'exemple qui ressemble à ça :

  ![Sample file][]

- Vous allez utiliser ces données pour essayer plusieurs techniques d’édition.
  *Il est cependant très important que vous n'envoyez pas ces données fictives vers la base de donnée OSM.*

### Opérations de base

- Pour déplacer la carte vers la gauche, la droite, le haut ou le bas, garder le bouton droit
  de votre souris enfoncé et déplacez votre souris.
- Il y a plusieurs moyens de zoomer et dézommer la carte. Si vous avez une
  souris, vous pouvez utiliser la molette pour zoomer et dézoomer. Si vous
  utilisez un ordinateur portable et n'avez pas de souris, vous pouvez utiliser
  la barre d’échelle qui se trouve dans le coin en haut a gauche de la carte. Faites glisser la barre vers la gauche
  ou la droite en maintenant le bouton gauche de votre souris appuyé et en déplaçant la barre vers la gauche ou
  la droite avec votre souris.

  ![Scale bar][]

- Regardez la carte d'exemple. Il y a quelques types d'objets différents.
  Il y a une rivière, une forêt, quelques bâtiments, plusieurs routes et
  deux commerces. Pour sélectionner un objet, cliquez dessus avec le bouton gauche
  de votre souris.

### Points, lignes et polygones

- Lorsque vous cliquez sur des objets differents sur le carte d'exemple, notez qu'il y
  a 3 types d'objets différents sur la carte. Il y a des nœuds,
  des chemins et des polygones.
- Les nœuds représentent un seul emplacement par des symboles. Sur cette carte d'exemple,
  il y a deux nœud, une boutique de chaussure et un supermarché. La
  boutique de chaussure est représentée par un symbole de chaussure, et le supermarché est
  représenté par un chariot.
- Il y a aussi différents chemins sur la carte qui représentent des routes.
  Si vous y regardez de plus près, vous verrez que les chemins sont composés de
  nœuds eux aussi. Ces nœuds n'ont pas de symbole ou d'autre
  information associées a eux, mais ils aident a définir ou les
  chemins sont localisés.
- Enfin, il y a de nombreux polygones sur la carte d'exemple, representant
  des lieux - une forêt, une rivière, un parc, des bâtiments. Un polygone
  est utilisé pour représenter une surface, telle qu'un champs ou un bâtiment. Un polygone est
  exactement comme un chemin - la seule différence est que le chemin commence au
  même nœud où il se termine.

> It's easy to think of a map as containing these three basic types of objects - 
> points, lines, and shapes. In OpenStreetMap there is special terminology
> which you will come to learn as you progress. In OSM, points are actually called
> **nodes**, and lines are called **ways**. A shape is called a **closed way**
> because it is just a line that ends at the same point where it begins.

- You may notice that when you select an object, a list appears to the
  right of the map in a window called “Properties”. These are known as
  tags. Tags are information that is tied to a point, line or shape
  that describes what it is. We’ll learn more about tags in a later
  chapter. For now all you need to know is that this
  information helps describe whether our object is a forest, a river,
  a building, or something else.
- Think about drawing a map by hand, and how you are also drawing
  points, lines, and shapes. What other places are best represented by
  points? Lines? Shapes?

### Modifier les objets

- Select the forest on the left side of the map. Be sure to click on
  the line around the forest, not one of the points on the line. Now
  hold your left mouse button down and drag your mouse. You should be
  able to move the forest to a new location on the map.
- Click on one of the points on the line around the forest. Hold your
  left mouse button down and drag your mouse. You should be able to
  move the point. This is how you can change the shape of an object,
  or move a point.

### Tracer

- On the left side of JOSM is a column of buttons. Many of these
  buttons open new windows on the right side that provide more
  information about the map. The most important buttons, however, are
  at the top of these column. These buttons change what you can do
  with your mouse.
- The top buttons in this column are the ones you will use the most.
  They are used for selecting objects and for drawing new ones.
- Until now, you have been using the Select tool, which looks like
  this:

  ![Select tool][]

- Before you draw, you need to make sure that nothing is selected.
  Click in the black space on the map, where it is empty, to make sure
  nothing is selected.
- Click on the second button, the Draw tool.

  ![Draw tool][]

- Find an empty area on the map, and double-click with your mouse.
  This will draw a single point.
- To draw a line, single-click with your mouse. Move your mouse and
  click again. Continue until you are happy with your line. To end the
  line, double-click your mouse.
- Draw a shape the same way that you draw a line, but finish the shape
  by double-clicking on the point where you started the line.

### Utiliser les modèles d'attributs

- Now we know how to draw points, lines and shapes, but we still
  haven’t defined what they represent. We want to be able to say that
  our points are shops, schools, or something else, and whether our
  shapes are fields, buildings, or something else.
- Click on the Select tool, in the column of buttons on the left.

  ![Select tool][]

- Select one of the objects that you drew with the Draw tool. On the
  top menu, click “Presets”. Move your mouse through the sub-menu to
  the type of location you would like to define.
- When you click on a preset, a form will pop up asking you for more
  information. You do not have to fill in every field, but you may
  wish to add some of the important fields, such as the name of the
  object.
- When you are finished entering the information, click “Apply
  Preset”. If everything went well, your point, line, or shape should
  change colors or show a symbol. This is because you have defined
  what it is.

Dessiner votre propre carte
-----------------

Maintenant dessinons une carte histoire de pratiquer les techniques que vous avez
  apprises. Vous souhaitez sans doute redessiner la carte précédemment dessinée sur papier.
- Drag the map away from the sample map. Hold the right mouse button
  and drag your mouse, until you have a nice empty area to draw on.
- Use the Draw tool to create points, lines, and shapes. Describe what
  your objects are by selecting from the Presets menu.
- When you are finished, you should have your own map, similar to the
  sample map that we opened in sample.osm.

## Remove the sample layer

Once you feel comfortable with these basic editing techniques you might want
to turn your attention to mapping real features. 

*It is very important that you first remove the layer with the sample data. 
These data are fictitious and must not be uploaded to the OpenStreetMap 
database (newer JOSM releases automatically prevent this).*

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

[JOSM website]: /images/josm/josm-website.png
[Windows installer]: /images/josm/windows-installer.png
[JOSM splash page]: /images/josm/josm-splash-page.png
[Preferences window]: /images/josm/josm_preferences.png
[Look and feel]: /images/josm/josm_look-and-feel.png
[Open file]: /images/josm/josm_open-file.png
[Sample file]: /images/josm/josm_sample-file.png
[Scale bar]: /images/josm/josm_scale-bar.png
[Select tool]: /images/josm/josm_select-tool.png
[Draw tool]: /images/josm/josm_draw-tool.png