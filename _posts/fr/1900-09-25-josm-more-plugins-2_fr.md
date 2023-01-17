---
layout: doc
title: Plugin Opendata - données provenant d'une feuille de calcul
permalink: /fr/josm/opendata-plugin/
lang: fr
category: josm
---

Plugin Opendata - utilisation des données d'une feuille de calcul
============


- TOC
{:toc}

Ce guide décrit comment ajouter des données à OpenStreetMap, lorsqu'elles sont sous la forme d'un fichier de tableur, probablement obtenues par une enquête de terrain avec un outil comme ODK collect ou Kobo collect.

**Prenez note - si les données que vous envisagez d'ajouter à OpenStreetMap constituent un 'import' alors vous devriez consulter la [page des consignes pour les imports du wiki OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/FR:Import/Guidelines). En cas de doute, mieux vaut la consulter au préalable!**


Installation du plugin Opendata
--------------------------

Si vous ne l'avez pas encore fait, installez ce plugin en suivant les instructions de [JOSM Plugins].(/fr/josm/josm-plugins).  

![Opendata][]

Une fois installé, vous pouvez cliquer sur ![Opendata preferences][]   
pour accéder aux modules plus spécifiques.  

![Opendata modules][]

Ce guide utilise la fonctionnalité de base, et aucun module n'est chargé. 

Préparation du tableur  
-------------------------

La page wiki <https://wiki.openstreetmap.org/wiki/JOSM/Plugins/OpenData> fournit des informations plus détaillées sur les formats qui peuvent être utilisés. Pour nos besoins, nous supposons que la feuille de calcul a été téléchargée et nous a été transmise dans le format propriétaire **.xlsx** qui ne sera pas chargé dans le plugin opendata. 

- Ouvrez la feuille de calcul dans un programme open source tel que LibreOffice qui est disponible pour la plupart des systèmes d'exploitation <http://www.libreoffice.org/>, 
- puis l'enregistrer dans un format opensource. Notre feuille de calcul qui était **shops.xlsx** devient **shops.ods**. 

Bien qu'il soit possible de charger la feuille de calcul dans josm maintenant, il est préférable d'effectuer d'autres modifications pour faciliter le processus avant de le faire. 

### latitude et longitude

Le plugin Opendata est très performant pour extraire la latitude et la longitude des feuilles de calcul, mais si vous avez un doute, il est préférable de modifier les en-têtes de colonne dans un format plus simple ; 

![latitude longitude][]

devient;  

![latitude longitude corrected][]

### Clé et valeur

#### Le nom de l'étiquette 

Notre objectif est maintenant de modifier la feuille de calcul pour que les informations soient dans le format attendu par OpenStreetMap. Les en-têtes de colonne seront les valeurs **clés**, et les données contenues dans la feuille de calcul deviendront l'élément **valeur**. Pour notre feuille de calcul simple, modifiez l'en-tête de la première colonne de **Nom_de_la_boutique** en **nom**. En utilisant le format clé=valeur, la première ligne de notre feuille de calcul est désormais la suivante;  
**name=Tony's Supermarket**

Si votre feuille de calcul a plus d'un nom, comme un **nom local** ou un **nom officiel**, veuillez consulter la page wiki à <https://wiki.openstreetmap.org/wiki/Names> qui énumère de nombreuses alternatives possibles afin que vos mises à jour d'OpenStreetMap puissent contenir tous les noms qui sont susceptibles d'être utilisés ou recherchés. 

#### Colonnes sans en-tête

Si vous supprimez l'en-tête d'une colonne, mais que vous conservez les données situées en dessous, ces dernières sont effectivement cachées à JOSM. 

![opendata 1][]

#### Colonnes avec des données provenant de clés différentes 

![opendata mixed][]

La personne qui conçoit l'enquête et celle qui la réalise ne sont souvent pas au courant des balises et des valeurs qui ont évolué dans OpenStreetMap. La colonne **shop** de ma feuille de calcul contient en fait des données provenant de deux balises différentes, et la feuille de calcul devra être modifiée. L'intitulé de la colonne **Type of shop** peut être remplacé par **shop**, pour les données suivantes;  
  shop=supermarket  
  shop=convenience  
  shop=hairdresser  

mais **restaurant** et **fast_food** font partie de la clé **amenity**.

Une nouvelle colonne doit être insérée avec le titre **amenity**, et les données déplacées, de sorte que notre feuille de calcul ressemble maintenant à ceci ; 

![opendata shop amenity][]

#### sous-balises

L'en-tête de la colonne **Does_the_shop_have_toilet_faci** a été abrégée au cours du processus d'enquête, et se lisait au début **Does the shop have toilet facilities?**.  

Bien qu'il existe une balise distincte pour les toilettes, qui est généralement ajoutée à un nœud dans un bâtiment, elle se réfère en fait aux toilettes qui sont accessibles au public. Si nous avons réalisé notre propre enquête, nous savons exactement ce qui était prévu avec la question et la réponse, mais s'il s'agit d'informations qui nous ont été transmises, il sera probablement nécessaire de demander ce qui était prévu. Il est également extrêmement utile de pouvoir charger les questions de l'enquête dans un téléphone et de réaliser une enquête "fictive" afin de voir la disposition des questions. Une lecture attentive de la page wiki <https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dtoilets>, et l'étude de l'enquête originale sont nécessaires avant de modifier la feuille de calcul. En particulier, l'entrée du wiki contient les informations - 

- *Veuillez ne pas utiliser toilet=yes (singulier). En général, veuillez ne pas cartographier les toilettes qui sont inaccessibles au public. De nombreux bâtiments ont des toilettes à l'intérieur pour les travailleurs ou les propriétaires, mais les cartographier pourrait créer des conflits inutiles ou des attentes irréalistes. Utilisez toilets=no pour les endroits où l'on peut s'attendre à trouver des toilettes utilisables (par exemple, une gare ou un point de départ de sentier) mais où aucune toilette publique n'est disponible.* 

En suivant du mieux possible les conseils du wiki, ma feuille de calcul modifiée pour les informations sur les toilettes se lit maintenant comme suit ; 

![opendata toilets][]


J'ai supprimé l'en-tête d'un certain nombre de colonnes, afin que les données ne soient pas visibles lorsque j'effectue mes modifications dans JOSM. 

Chargement du tableur dans JOSM
---------------------------------

Cliquez sur ![josm open][], naviguez jusqu'à l'endroit où votre feuille de calcul est enregistrée, et ouvrez-la dans JOSM.  

![opendata pop up][]  

Une fenêtre pop-up apparaîtra éventuellement pour vous demander de confirmer la "méthode de projection" utilisée lors de la collecte des données. Le plugin Opendata tentera de calculer la 'méthode de projection' utilisée et la présentera comme l'option la plus probable. Sauf si cela a été modifié dans les paramètres par l'enquêteur, il est judicieux d'accepter la projection suggérée, puis de vérifier lors de l'édition que les points créés apparaissent à des emplacements appropriés. 

![opendata spreadsheet loaded][]

Félicitations ! Vous avez fait tout le travail difficile et vous êtes presque prêt à mettre à jour OpenStreetMap avec vos nouvelles données d'enquête. 

Utilisation du plugin ToDo
----------------------

Dans JOSM, sélectionnez tous les éléments ajoutés par votre feuille de calcul, soit par ; 

- faites défiler jusqu'à ce que tout soit visible, puis faites glisser votre souris du haut à gauche vers le bas à droite tout en maintenant le bouton gauche de la souris enfoncé, ou bien 
- utilisez **Ctrl+f** pour effectuer une recherche - j'ai cherché sur **nom** car il apparaît dans mes 5 enquêtes. 

assurez-vous que vous avez sélectionné toutes vos enquêtes - il y a cinq enquêtes dans ma feuille de calcul et je dois avoir 5 objets sélectionnés. 

![5 selected][]

Dans le panneau du plugin ToDo, cliquez sur **Add**. 

![opendata todo add][]

et la liste des éléments à ajouter devrait apparaître dans le panneau. 

![opendata todo loaded][]

Charger les données OpenStreetMap comme une couche séparée
-------------------------------------------

Double-cliquez sur l'élément supérieur de votre liste de tâches, ce qui le centrera dans votre panneau d'édition, puis cliquez sur l'icône de téléchargement ![téléchargement][].

Lorsque la fenêtre de dialogue de téléchargement apparaît, assurez-vous de cocher la case ![download new layer][] (en bas à gauche sur la capture d'écran suivante) afin que vos données OSM ne soient pas téléchargées dans vos données de tableur.

![download dialog][]


Comparer les données entre les couches
------------------------------------

Assurez-vous de vérifier soigneusement les données contenues dans votre feuille de calcul par rapport aux données existantes déjà dans OpenStreetMap. Il existe des moyens de copier des étiquettes, ou des parties d'étiquettes (consultez les menus **Outils** et **Plus d'outils** de JOSM, ou lisez les chapitres précédents de LearnOSM) entre les couches. Dans de nombreux cas, vous allez fusionner de nouvelles données avec des données existantes. Vérifiez soigneusement les données, en contrôlant si nécessaire l'historique et la source des différentes caractéristiques - il est toujours possible que les données d'OpenStreetMap soient plus récentes ou plus précises que celles de votre feuille de calcul. 

Lorsque vous avez mis à jour les informations d'une ligne de la feuille de calcul, utilisez le bouton **Mark** du plugin ToDo pour passer à l'élément suivant. Il se peut que vous deviez télécharger davantage de données OSM si l'élément suivant se trouve en dehors de la zone déjà téléchargée. 


[Opendata]: /images/josm/opendata-plugin.png
[Opendata preferences]: /images/josm/opendata-preferences.png
[Opendata modules]: /images/josm/opendata-modules.png
[latitude longitude]: /images/josm/opendata-latitude-longitude.png
[latitude longitude corrected]: /images/josm/opendata-latitude-longitude-corrected.png
[opendata 1]: /images/josm/opendata-1.png
[opendata mixed]: /images/josm/opendata-mixed.png
[opendata shop amenity]: /images/josm/opendata-shop-amenity.png
[opendata toilets]: /images/josm/opendata-toilets.png
[josm open]: /images/josm/josm_open-file.png
[opendata pop up]: /images/josm/opendata-wgs84-popup.png
[opendata spreadsheet loaded]: /images/josm/opendata-spreadsheet-loaded.png
[5 selected]: /images/josm/opendata-5-selected.png
[opendata todo add]: /images/josm/opendata-todo-add.png
[opendata todo loaded]: /images/josm/opendata-todo-loaded.png
[download]: /images/josm/josm-download-button.png
[download dialog]: /images/josm/josm_download-dialog.png
[download new layer]: /images/josm/download-as-new-layer.png

