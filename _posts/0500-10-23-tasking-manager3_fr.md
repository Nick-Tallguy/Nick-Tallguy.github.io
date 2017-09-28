---
layout: doc
title: Gestionnaire de Tâches 3
permalink: /fr/coordination/tasking-manager3/
lang: fr
category: coordination
---

# Gestionnaire de Tâches 3

> Ce guide peut être téléchargé : [tasking-manager3_fr.odt](/files/tasking-manager3_fr.odt) ou [tasking-manager3_fr.pdf](/files/tasking-manager3_fr.pdf)  

**Ce guide décrit la version actuelle du Gestionnaire de Tâches. Si l'interface utilisateur de la version que vous utilisez semble différente que celle décrite ici, vous devriez vous référer au [manuel de la version précédente](/fr/coordination/tasking-manager)**

Table des matières
-------------
-  [Guide de démarrage rapide](/fr/coordination/tasking-manager3/#quick-start-guide)  
-  [Le processus de cartographie](/fr/coordination/tasking-manager3/#mapping-process)  
    -  [Connexion](/fr/coordination/tasking-manager3/#tasking-manager-login)  
    -  [Options - paramètres de langue et profil utilisateur](/fr/coordination/tasking-manager3/#options-amp-links)  
    -  [Trouver un projet - par liste et sur une carte, recherche et filtrage](/fr/coordination/tasking-manager3/#finding-a-project---tasking-manager-contribute-screen)  
    -  [Mapper une tâche - sélectionner une tâche, travailler dessus et la déverrouiller](/fr/coordination/tasking-manager3/#mapping-via-the-tasking-manager) 
-  [Obtenir de l'aide - en direct et contacter l'administrateur du projet](/fr/coordination/tasking-manager3/#getting-help)  
-  [Trucs et astuces](/fr/coordination/tasking-manager3/#editing-hints-and-tips)
-  [Validation](/fr/coordination/tasking-manager3/#validation)

Le [Gestionnaire de Tâches HOT OSM](http://tasks.hotosm.org) est un outil qui permet à de nombreuses personnes de se coordonner pour cartographier une zone géographique spécifique dans OpenStreetMap.

OpenStreetMap est une carte du monde collaborative, renseignée par le public, gratuite et libre. N'importe qui peut contribuer à OpenStreetMap, en cartographiant n'importe quelle partie du monde qui les intéresse. Le Gestionnaire de Tâches est juste un moyen de coordonner de grands groupes de personnes qui contribuent à OpenStreetMap, mais la plupart des contributions à OpenStreetMap sont faites par des gens qui n'utilisent pas le Gestionnaire de Tâches.

Le Gestionnaire de Tâches est un outil entièrement distinct du projet principal OpenStreetMap. Quand vous contribuez à OpenStreetMap en utilisant le Gestionnaire de Tâches, vous utilisez en fait plusieurs outils logiciels :

* OpenStreetMap - Une base de donnée d'informations géographique
* Le Gestionnaire de Tâches - Aide à coordonner de grands groupes de personnes pour modifier les données OpenStreetMap dans la même région
* Un éditeur OpenStreetMap - Un logiciel qui peut lire et écrire les données dans la base de données OpenStreetMap

![TM overview][]

Le rôle du Gestionnaire de Tâches est de présenter une région géographique spécifique en la divisant en petites zones rapides à cartographier appelées « Tâches », et de permettre de « réserver » ou « verrouiller » une de ces petites zones pendant que vous la cartographiez avec un des éditeurs OpenStreetMap habituels. En « réservant » (ou en « verrouillant ») une de ces petites zones, vous vous assurez que personne d'autre ne modifiera la même zone en même temps que vous. Cela permet d'éviter la « double cartographie » ou d'autres erreurs quand deux personnes travaillent sur exactement la même zone dans OpenStreetMap.

Une fois que vous avez fini de cartographier cette petite zone, vous enregistrez que vous avez terminé dans le Gestionnaire de Tâches, et vous pouvez sélectionner une autre « Tâche » à cartographier.


## Guide de démarrage rapide

1. Créez un compte et connectez-vous sur http://openstreetmap.org/  
  ![TM Quick Start 1][]
2. Visitez [http://tasks.hotosm.org/](http://tasks.hotosm.org/) et connectez-vous avec le bouton en haut à droite  
  ![TM Quick Start 2][]
3. Cliquez sur « Contribuer » et trouvez un projet sur lequel travailler  
  ![TM Quick Start 3][]
4. Lisez les instructions pour le projet  
  ![TM Quick Start 4][]
5. Cliquez sur l'onglet « Carte »  
  ![TM Quick Start 5][]
6. Trouvez une tâche « Prête » pour travailler dessus, cliquez dessus et sélectionnez « Commencer à cartographier »  
  ![TM Quick Start 6][]
7. Vous serez transféré sur un éditeur OpenStreetMap : cartographiez tous les éléments cartographiques demandés dans les instructions.  
  ![TM Quick Start 7][]
8. Quand vous avez terminé de cartographier, retournez sur le Gestionnaire de Tâches et cliquez soit sur « Marquer comme complètement cartographié » si vous avez terminé de cartographier la tâche, soit sur « Terminer la cartographie » si vous devez arrêter de cartographier pour une raison ou une autre.  
  ![TM Quick Start 8][]


## Processus de cartographie 

1. Un cartographe distant créé un compte OpenStreetMap et se connecte au Gestionnaire de Tâche.
1. Le cartographe trouve un projet sur lequel travailler, généralement en fonction de leurs priorités et du niveau de compétence requis indiqué par un gestionnaire de projet du Gestionnaire de Tâches. 
2. Un cartographe distant sélectionne la zone d'une tâche, complète la cartographie, et marque la tâche comme complétée.
3. Un deuxième cartographe distant vérifie que la tâche a été complétée à un niveau satisfaisant et marque la tâche comme « validée ».
4. La progression globale de la cartographie du projet peut être suivie depuis l'onglet « Stats » du projet, et le projet peut être rétrogradé ou archivé à la demande par un administrateur.

### Connexion au Gestionnaire de Tâches

Le Gestionnaire de Tâches est un outil séparé qui coordonne la cartographie dans OpenStreetMap. Cependant, il utilise le système de connexion d'OpenStreetMap. Cela signifie que vous n'avez pas besoin de créé un nouveau compte utilisateur pour utiliser le Gestionnaire de Tâches, mais vous devez créer un compte OpenStreetMap et vous connecter sur OpenStreetMap avant de pouvoir utiliser le Gestionnaire de Tâches.

Quand vous visitez le Gestionnaire de Tâches pour la première fois, vous pouvez voir un bouton « Connexion » en haut à droite de la page.

![TM login 1][]

Ce bouton vous emmène sur le site Web d'OpenStreetMap. Là, vous devez vous connecter et autoriser le Gestionnaire de Tâches à accéder à vos préférences OpenStreetMap. Créez un compte sur OpenStreetMap si vous n'en avez pas déjà un.

![TM login 2][]

![TM login 3][]

Une fois connecté sur OpenStreetMap, vous serez redirigé sur le Gestionnaire de Tâches. Cliquez sur « Contribuer » ou « Commencer à cartographier » pour voir une liste des projets auxquels vous pouvez contribuer.

### Options et liens

Le Gestionnaire de Tâches s'affiche initialement en anglais. Pour changer de langue, cliquez sur **English** en haut à droite de la page.

Une fois connecté, vous pouvez cliquer sur votre nom d'utilisateur en haut. Là, vous pouvez :

- Voir votre profil du Gestionnaire de Tâches où vous pouvez :
    - Mettre à jour votre adresse e-mail et les liens vers vos profils sur les réseaux sociaux
    - Voir votre niveau d'expérience de cartographe
    - Voir une liste et une carte des projets auxquels vous avez contribué
- Aller sur l'écran **Messages** du Gestionnaire de Tâches (ce n'est pas le même que le système de messages d'OpenStreetMap)
- Vous déconnecter

### Trouver un projet - écran de contribution du Gestionnaire de Tâches

Cliquez sur le lien « Contribuer » dans la barre du menu principal pour afficher la liste des projets dans le le Gestionnaire de Tâches.

![TM contribute][]

La page Contribuer du Gestionnaire de Tâches est divisé en trois parties principales :

- Recherche et options de filtre à gauche
- Liste des projets
- La carte des projets

#### Recherche et options de filtre

Par défaut, tous les projets ouverts à la cartographie sont affichés. Vous pouvez utiliser la section des filtres de recherche avancée pour préciser les projets qui vous intéressent.

- Numéro de projet - Si vous connaissez le numéro du projet sur lequel vous souhaitez travailler, vous pouvez le saisir ici pour afficher directement sa page.
- Organisation - Ce champ vous permet de n'afficher que les projets demandés par des organisations.
- Difficulté de cartographie - Certains projets sont plus difficiles à cartographier que d'autres. Cette option vous permet de trouver les projets qui sont le plus adapté à votre niveau d'expérience. Il est préférable de travailler sur des projets qui correspondent le mieux à votre niveau d'expérience, surtout si vous êtes un cartographe plus expérimenté.
- Type de cartographie - Ce champ vous permet de trouver les projets qui proposent de cartographier un certain type d'élément cartographique. Beaucoup de projets se concentrent sur un seul type de cartographie, mais d'autres peuvent inclure plusieurs types d'éléments à cartographier.
- Recherche de texte - Ce champ vous permet de chercher un projet qui contient un certain mot ou une certaine phrase dans la description du projet.
- Campagne - Les projets peuvent faire partie d'une campagne plus large de cartographie. Vous pouvez trouver ces projets avec ce champ.

#### Carte des projets (Map View)
En cliquant l'onglet « Map View », vous pouvez voir le nombre de projets dans une région. Double-cliquez ou zoomez pour afficher chaque projet. Une fois un certain niveau de zoom atteint, les points sur la carte obéissent à un code couleur : rouge pour urgent, jaune pour priorité haute ou moyenne et gris pour basse priorité. Cliquez sur l'un des points sur la carte pour afficher les informations de ce projet. Cliquez sur le titre du projet pour aller sur sa page.

![TM project map][]

### Cartographie avec le Gestionnaire de Tâches

Une fois que vous avez trouvé un projet sur lequel travailler, cliquez sur le titre du projet pour vous rendre sur la page détaillée de ce projet. Cette vue détaillée contient :

- Une description de l'importance du projet et comment les données seront utilisées
- Des instructions détaillées pour savoir ce qu'il faut cartographier
- Un écran de sélection pour la validation de la cartographie
- Une carte détaillée des différentes zones à cartographier, avec une information sur leur statut.
- Un onglet « Questions et commentaires » pour les demandes sur le projet

![TM project description][]



#### Page de projet

Tout ce que vous devez connaître sur le projet est là ! En haut, une description complète du projet de cartographie et des informations concernant le projet.  

Sous la description, l'écran est divisé en deux parties. La partie gauche est un panneau avec les onglets « Instructions », « Carte », « Valider », « Questions et commentaires ». La partie droite est une carte du projet avec les différentes tâches de cartographie.

- Les tâches sans couleur sont disponibles et prêtes à être cartographiées
- Les zones roses sont des zones avec des priorités plus hautes
- Les zones jaunes/or ont subi une première passe de cartographie, et sont prêtes à être validées
- Une bordure jaune indique que vous avez sélectionné la tâche
- Les zones bleues indiquent qu'un autre cartographe travaille actuellement sur leurs tâches 
- Les tâches vertes ont subi une deuxième passe de cartographie, et les modifications ont été « validées »
- Les tâches gris foncé ont été examinées par un cartographe, et ont été marquées pour signaler l'absence d'imagerie satellite acceptable pour la cartographie 
- La ligne bleue normalement visible autour des zones périphériques indique la bordure du projet. Cette bordure suit habituellement l'imagerie disponible, ou une limite administrative, etc., et peut donc avoir une forme inhabituelle. Bien qu'il soit possible de cartographie des zones en dehors de cette bordure, ce n'est pas requis, et ne sera pas pris en compte par les validateurs.  


#### Onglet Instructions
Cet onglet détaille le travail demandé dans les tâches de cartographie. Les projets ont des difficultés différentes, adaptées pour les cartographes débutants, intermédiaires ou avancés ; les instructions expliquent cette difficulté. Assurez-vous de bien lire et comprendre cette partie. Il y a beaucoup de styles différents parmi les projets de cartographies, avec beaucoup d'objectifs différents. Quelques activités courantes :  

- Réseaux routiers : utilisés par les personnes sur le terrain pour charger les données sur des outils de navigation portable (GPS), et pour comprendre comment rejoindre des zones reculées.  
- Villages : souvent utilisés pour identifier les lieux où les gens vivent et peuvent être impactés.  
- Bâtiments : Utilisés pour l'évaluation des dégâts ou la recherche de contacts lors d'épidémies de maladie. Aussi utilisés pour les estimations démographiques.  
- Rivières, murs et autres éléments  

Toutes les régions du monde ne sont pas forcément similaires à la vôtre : des conseils sur les attributs spécifiques peuvent donc être fournis ici. Par exemple, le réseau routier africain est très différent des systèmes d'autoroutes américains ou européens.  

Il y a une section indiquant le **commentaire de modification** (changeset comment) que vous devrez utiliser dans votre éditeur lors de la sauvegarde de vos modifications, ainsi que l'information de **source** que vous devrez peut-être (selon le logiciel utilisé) copier-coller dans le champ source.  

Parfois, une imagerie spécifique à la tâche peut être disponible - il vous faudra peut-être accepter une licence d'utilisation pour y accéder. Les instructions indiquent habituellement la manière la plus simple de charger cette imagerie dans des éditeurs comme JOSM ou iD.  

Lors de la validation d'une tâche marquée comme complétée, les validateurs vérifieront que les exigences détaillées dans les instructions sont bien respectées. Compléter entièrement une tâche peut être assez difficile ; vous trouverez plus bas quelques conseils lors du déverrouillage d'une tâche, ainsi que pour fournir des commentaires pertinents pour le prochain cartographe.  

#### Bouton « Activités et statistiques »  

Cet onglet contient des statistiques concernant le projet. Il est divisé en deux parties : une liste détaillée des actions passées (anciennement affichées dans un onglet à part dans le Gestionnaire de Tâches 2.0) et un résumé.

Le résumé contient une liste des cartographes qui ont complété au moins une tâche de ce projet.  

Un journal de tous les commentaires laissés sur des tâches est affiché en bas de la page. Ce sont des commentaires laissés sur des tâches, à ne pas confondre avec l'onglet « Questions et commentaires » où on trouve des questions générales et des commentaires sur l'ensemble du projet.

Vous pouvez retourner sur la page principale du projet en cliquant sur le titre du projet dans la page Activités et Statistiques.

#### Onglet Carte  

Cliquez sur cet onglet lorsque vous être prêt à commencer à cartographier. Vous pouvez choisir une tâche sur laquelle travailler en la sélectionnant sur la carte, ou en cliquant sur le bouton « Choisir une tâche au hasard ». Seules les tâches sans couleur peuvent être sélectionnées dans cet onglet, ou un message disant que la tâche ne peut pas être cartographiée apparaîtra. Si vous avez l'intention de valider, assurez-vous de sélectionner l'onglet « Valider ».

![TM map tab][]

#### Sélectionner une tâche à cartographier  

Une fois votre tâche sélectionnée, vous pouvez voir s'il y a un historique pour cette tâche, comme par exemple un cartographe qui a commencé à cartographier, puis qui a réalisé qu'il n'avait pas le temps de terminer la tâche.  

Un clic sur le bouton « Commencer à cartographier » verrouille la tâche pour qu'aucun autre cartographe ne puisse la sélectionner jusqu'à ce qu'elle soit déverrouillée, et lance un compte à rebours de deux heures (120 minutes), au bout duquel la tâche est automatiquement déverrouillée. Une bonne pratique consiste à vérifier régulièrement le compte à rebours : il arrive souvent d'être absorbé par votre travail de cartographie au point de ne pas réaliser que la tâche a été déverrouillée, et qu'un autre cartographe l'a sélectionnée et a commencé à travailler dessus en même temps. Cela peut engendrer des conflits et des problèmes.  


#### Choix pour les modifications

Vous avez plusieurs options pour faire vos modifications à partir du moment où vous verrouillez une tâche.

##### Modifier avec JOSM  

Lancez JOSM avant d'utiliser ce lien, et il chargera automatiquement les données existantes d'OSM dans JOSM.  

>  1. 'Enable remote control' needs to be ticked - found under **Edit / Preferences / Remote Control**
>  2. If you have previously installed the plug-in 'continuosDownload' it is best to disable it (untick 'Download OSM Data continuously' under the **File** menu in JOSM).  
>  3. If JOSM does not load the imagery automatically as well, it can normally be found under the **Imagery** menu. [More info on imagery here ](/en/josm/more-about-josm/#add-imagery)  
  

##### Éditeur iD  

Sélectionner ceci pour lancer automatiquement un nouvel onglet ou une nouvelle fenêtre de votre navigateur Web, avec les données existantes d'OSM chargées. Actuellement, le navigateur Internet Explorer ne supporte pas iD et lancera à la place Potlatch 2. Votre onglet ou fenêtre d'origine dans le Gestionnaire de Tâches sera toujours présent.  


##### Potlatch 2  

L'éditeur se lancera dans une nouvelle fenêtre ou un nouvel onglet. Potlatch n'affichera pas automatiquement la délimitation de la tâche, mais vous pouvez le faire en suivant la procédure suivante :  

1. Dans le Gestionnaire de Tâches, sélectionnez une tâche et cliquez sur « Commencer à cartographier » pour la verrouiller  
2. Dans le Gestionnaire de Tâches, sélectionnez « Modifier avec JOSM » (si le message « La commande à distance de JOSM ne répond pas... » apparaît, cliquez simplement sur OK).  
3. Sous le bouton « Modifier avec JOSM », un texte indique « Astuce : téléchargez le fichier .gpx suivant... ». Téléchargez le fichier .gpx, et retenez où il est sauvegardé.  
4. Dans le Gestionnaire de Tâches, changez « Modifier avec JOSM » pour « Modifier avec Potlatch 2 ». Potlatch 2 devrait s'ouvrir dans un nouvel onglet.  
5. Dans Potlatch, sélectionnez Background, puis Vector File...  
6. Dans la fenêtre Load Vector File, en bas, à côté de File, cliquez sur Open, et trouvez le fichier .gpx que vous venez de télécharger  
7. Dans la fenêtre Load Vector File, cochez bien la case dans la colonne Show pour le fichier .gpx, puis fermez la fenêtre  
8. Potlatch devrait maintenant afficher la délimitation sous forme de rectangle (probablement bleu cyan). Notez que Potlatch chargera quand même les données situées en dehors de la zone.  
  

##### Field Papers  

À utiliser seulement si vous travaillez sur un projet où un cartographe local est allé examiné les lieux directement sur le terrain, et a renseigné des informations (comme le nom des routes) sur une carte imprimée. Cette carte peut être scannée et utilisée comme image d'arrière-plan pour un cartographe distant ou local, afin de lire les informations relevées et mettre à jour les données OpenStreetMap ([Chapitre de LearnOSM sur les Field Papers](/fr/mobile-mapping/field-papers/)).  


#### Diviser une zone de tâche

Après avoir sélectionné votre tâche et inspecté l'imagerie de la zone concernée, il peut arriver que vous réalisiez qu'il y a un niveau de détail beaucoup trop élevé pour la cartographie. Par exemple, c'est le cas de la cartographie des bâtiments dans une zone urbaine très dense, ou la recherche de petits villages dans des zones très larges. Il est donc conseillé, dans ces cas où il n'est pas possible pour une seule personne de compléter la tâche durant la limite des deux heures imparties, de diviser la zone en quatre zones plus petites. *À utiliser avec discernement* : si/quand une tâche est divisée en zones trop petites, il est difficile de se rendre compte de quel type de route il s'agit, et d'identifier d'autres éléments.  

> Sachez que les commentaires, potentiellement utiles, concernant le travail déjà complété ne seront plus disponibles.


#### Déverrouiller une tâche

![TM unlock][]

##### Déverrouiller une tâche avant qu'elle soit terminée

Si vous commencez à travailler sur une tâche, mais ne pouvez pas la terminer pour une raison ou une autre, il est recommandé de laisser un commentaire sur la tâche. Détaillez simplement ce qu'il reste à faire et choisissez « Terminez la cartographie ». Assurez-vous de laisser un commentaire pertinent avec l'objectif d'aider le prochain cartographe.  

Par exemple :  

    Presque terminé, petit village en haut à gauche 
    de la zone de la tâche
  

##### Déverrouiller une tâche qui a été complétement cartographiée

Il est très difficile d'être absolument certain d'avoir complété une tâche ; cependant, il est acceptable de la marquer comme complète si vous êtes assez sûr de vous : le contenu sera vérifié par un autre cartographe lors de la validation, et de petites additions pourront être faites à ce moment-là.  

Pour que le processus soit efficace, les cartographes doivent marquer les tâches comme terminées, plutôt que de les laisser et obliger les autres cartographes « incertains » à passer du temps à les vérifier.  

Lorsque vous avez terminé vos modifications et que vous pensez que la tâche est terminée, sauvegardez toutes vos modifications avec votre logiciel d'édition, et retournez sur le Gestionnaire de Tâches.  

+ Ajoutez un commentaire dans le champ pour détailler ce que vous avez fait, et surtout, ce pour quoi vous n'êtes pas sûr de vous. Par exemple : « Complétée en ce qui me concerne, mais il y a une couverture nuageuse dans le coin en haut à droite de la tâche, et je ne peux ni voir ni tracer cette zone ».  
+ Cliquez sur le bouton « Marquer comme complètement cartographié », et votre travail est prêt à être examiné.  

##### Marquer une tâche comme « Mauvaise imagerie »

Il vous arrivera parfois de sélectionner une tâche qui ne peut pas être cartographiée parce que l'imagerie est d'une trop basse résolution, ou parce qu'il y a une couverture nuageuse. Dans ce cas, fermez simplement la tâche et utilisez le bouton « Marquer comme mauvaise imagerie », pour enregistrer que la tâche ne peut pas être cartographiée faute d'imagerie convenable.


#### Envoyer un message depuis le champ de commentaire

Quand vous laissez un commentaire sur une tâche, vous pouvez faire en sorte que le commentaire soit envoyé à un cartographe donné en tant que message. Comme sur Twitter, il suffit d'utiliser un @ suivi du nom d'utilisateur. Cela enverra un message à l'utilisateur, avec le commentaire que vous avez écrit et un lien vers la tâche concernée.  

Par exemple :  

    @HOTMppr joli travail pour le tracé des détails  
    du bâtiment. Tu as oublié un petit groupe  
    de maisons dans le coin en haut à gauche de la zone de la tâche.  
    J'en ai ajouté quelques-unes, mais il en reste encore.  

This is particularly useful when validating or adding on another's previous work - you can provide feedback, thanks or more.  

+ You may wish to provide a link to a site which may help the mapper, such as <http://learnosm.org/en/coordination/remote-tracing/#buildings-walls-compounds-barriers>  
+ Be aware that many people from around the world will be participating, so prefer simple, clear language. If you come across comments in other languages, tools such as Google Translate are reasonably effective.


#### Referring to a particular task when sending an email  

If you need to send a message, such as an email or an IRC message, and you are querying something concerning a particular task within a project (perhaps you need help identifying something from the satellite imagery):  

1. Click on the task square concerned  
2. Click on the address bar in your web browser, which should show something similar to 'http://tasks.hotosm.org/project/713?task=259'  
3. Highlight with the mouse all of the text in the address bar, or use the shortcut keys **Ctrl+A** to select all the text, then use shortcut keys **Ctrl+C** to copy the text  
4. In your email, IRC message, or other message,  
    - either, mouse right click & paste,  
    - or shortcut keys **Ctrl+V**, to paste the link into the message. 


## Getting help 

### Live text based help

From the Learn page of the Tasking Manager:  
1. Click on **OSM HOT IRC Channel #hot**  
2. Enter a username (your OSM username?), or use the preset characters  
3. At the bottom of the dropdown list select **hot**  

- To the right of the screen is a list of users that are online now.  
- Type your message in the box at the bottom left of the screen (this is sometimes temporarily obscured by other text, but this will disappear as you select the box.  
- To direct a message to a particular individual, include their username from the list on the right within your message. Type, then use the return key to submit your comment. The system is 'live' so wait for an answer - your username will often be used in the reply to show you the comment is directed to you. You will normally receive a reply within a few seconds, so please wait.  
- An alternative simple system can be found at [kiwiIRC.com](https://kiwiirc.com/client/irc.oftc.net/hot)  
- Further info on using IRC with OpenStreetMap may be found at [OSM Wiki IRC](http://wiki.openstreetmap.org/wiki/Irc)  
- Alternatively use an IRC client of your choice (Server=irc.oftc.net, and channel=#hot)  

### Leaving a Project question / comment / contacting the Project creator

Using the "Comments" tab for the project you can see other users' questions and comments and leave one of your own. You can also click the "Contact Project Manager" link and that will automatically direct your comment/question to the project creator. 

All comments are public and it is not real time, live chat, use the IRC option above for realtime chat.

![TM comments][]


## Editing hints and tips  

By now you have a good understanding of what the Tasking Manager is, and some of the various functions it supports. Unlike normal editing, this tool is often used for time critical projects with many participants - this may be a little bit different to what you are used to.  

Some general advice to heed when working in this tool:  

* Avoid mapping far outside of your task square - other mappers may be working in that area, resulting in duplicated efforts. It's OK to map objects such as buildings overlapping a boundary, but avoid going much further - upload immediately after mapping something at the border.  
* Extend roads, streams, or other features slightly over the boundaries - this lets the next mapper pick up where you left off, but upload as soon as you finish editing it.  
* If you are in doubt about what a particular feature is, use the comment section to ask questions or check the wiki.  
* If you make a serious mistake - for example, deleting a major feature or relation - use IRC or the comment box to ask other mappers to help in reverting this for you. Try to include the changeset, or a description of what happened. Being a collaborative task, many other mappers are here to help - it's important to remember everyone makes mistakes sometimes.  
* Don't hesitate to ask for feedback - mappers validating your work can be terse or to the point, but if they know it's OK to engage in a dialog with you, the outcome is often a lot better for all involved. It can be difficult to communicate in another language, and it's easy to appear abrupt when you have to translate as well as pass a message in a language you are not fluent in.  
* You must not validate your own work - a second pair of eyes will always lead to better quality mapping.  
* Don't worry if other mappers are terse when validating your work - like you, they just want to ensure all of the data is mapped accurately. Feedback is invariably about the remaining work, not criticism of your efforts to date.  


## Validation

Validation is the process of a second mapper reviewing the mapping of the initial mapper of a project task. It is designed to ensure complete, quality data and provide thanks, feedback and encouragment to mappers.

### Getting Started

Validation starts much the same way as mapping does, a volunteer finds a project they would like to work on, reads the instructions tab to be sure they understand what is called for and how it is expected to be mapped, but instead of selecting the mapping tab for the project, they select the "Validate" tab.

![TM select for validation][]

The validator can select a task by clicking on an individual task square, clicking "Select a random Task", select by user or draw a polygon to select multiple, connected tasks.

Unlike mappers, validators can select multiple tasks to perform validation on a larger scale than just one task.

### Selecting Multiple Tasks for Validation

New in the latest version of the Tasking Manager is the ability to select multiple tasks for validation, either by area or by user.

Depending on which editor you are using, this feature will behave differently.

In JOSM, a second OSM data layer will be created titled "Task Boundaries - Do Not Edit or Upload" and it will have uploading disabled in recent versions of JOSM. JOSM **will not download the OSM data** because it could be a very large amount of data. Instead the validator will have to use the task boundaries as a guide and download the data to the active editing layer manually.

#### Select by drawing a polygon

This option allows a validtor to draw a square around a group of tasks and check them all out at once.

Once in the editor of their choice, **the validator will have to manually download the OSM data** for task areas selected. This is to prevent downloading all of the OSM data between the selected Tasks.


#### Select By User

A list of mappers who have marked a task as done is presented. Hovering over anyone in the list will highlight the tasks they have marked as completed. The list also prensents three important pices of information about the mapper, their experience level, the number of days since they first started mapping using the Tasking Manager and the number of days since they last received feedback via validation. This allows the validator to specifically target new mappers, experienced mappers or mappers who have not had any feedback for an extended period of time.

Clicking on the "Start Validating" button will lock all the tasks completed by that mapper and allow the validator to open them in their editor of choice.

![TM multi selection][]

Once in the editor of their choice, **the validator will have to manually download the OSM data** for task areas selected. This is to prevent downloading all of the OSM data between the selected tasks.

### Finalizing Validation

Once the validator has finished the validation process either for one task or multiple tasks, they should return to the Tasking Manager and select one of the three choices that reflect the mapping of the task:

- Stop Validating - If you could not complete the validation process but must stop validating.
- Mark (all) as Valid - If the mapping is complete and accurate
- Mark (all) as Invalid - If the mapping is not complete or inaccurate.

For the last two choices the validator can and should leave a friendly, encouraging comment addressed to the mapper(s) involved and provide thanks for their contributions and feedback on their mapping. Please be considerate before marking a task as invalid. If just a few bits are missing add them yourself, explain what was missing in your comment but nevertheless mark the task as valid. New mappers will consider their completed task marked as invalid as a fairly harsh comment.




[TM overview]: /images/coordination/tasking_manager_overview.png
[TM Quick Start 1]: /images/coordination/tasking_manager_qs1.png
[TM Quick Start 2]: /images/coordination/tasking_manager_qs2.png
[TM Quick Start 3]: /images/coordination/tasking_manager_qs3.png
[TM Quick Start 4]: /images/coordination/tasking_manager_qs4.png
[TM Quick Start 5]: /images/coordination/tasking_manager_qs5.png
[TM Quick Start 6]: /images/coordination/tasking_manager_qs6.png
[TM Quick Start 7]: /images/coordination/tasking_manager_qs7.png
[TM Quick Start 8]: /images/coordination/tasking_manager_qs8.png
[TM login 1]: /images/coordination/tasking_manager_login1.png
[TM login 2]: /images/coordination/tasking_manager_login2.png
[TM login 3]: /images/coordination/tasking_manager_login3.png
[TM contribute]: /images/coordination/tasking_manager_contribute.png
[TM map tab]: /images/coordination/tasking_manager_map_tab.png
[TM unlock]: /images/coordination/tasking_manager_unlock_task.png
[TM project map]: /images/coordination/tasking_manager_project_map.png
[TM project description]: /images/coordination/tasking_manager_project_description.png
[TM comments]: /images/coordination/tasking_manager_comments.png
[TM task selection]: /images/coordination/tasking_manager_task_selection.png
[TM select for validation]: /images/coordination/tasking_manager_validation_selection.png
[TM multi selection]: /images/coordination/tasking_manager_multi_selection.png
