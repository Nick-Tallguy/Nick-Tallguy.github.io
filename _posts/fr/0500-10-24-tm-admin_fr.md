---
layout: doc
title: Guide de l'administrateur du gestionnaire de tâches
permalink: /fr/coordination/tm-admin/
lang: fr
category: coordination
---

# Guide de l'administrateur du gestionnaire de tâches


**Si l'interface utilisateur de la version que vous utilisez est différente de celle décrite ici, vous devriez consulter [notre aperçu des versions](/fr/coordination/tm-disambiguation)**.

Index de la section
-------------
-  [Connexion et accès](/fr/coordination/tm-admin/#Connexion-et-accès)
-  [Permissions](/fr/coordination/tm-admin/#permissions)
-  [Créer un projet](/fr/coordination/tm-admin/#créer-un-projet)
    -  [Définir la zone de cartographie](/fr/coordination/tm-admin/#Définir-la-zone-de-cartographie)
    -  [Définir les tâches](/fr/coordination/tm-admin/#Définir-les-tâches)
    -  [Avancé : Définir les tâches avec des données importées](/fr/coordination/tm-admin/#Avancé:Définir-les-tâches-avec-des-données-importées)
    -  [Découpage des zones de projet](/fr/coordination/tm-admin/#Découpage-des-zones-de-projet)
    -  [Nommez le projet](/fr/coordination/tm-admin/#Nommez-le-projet)
-  [Editer un projet](/fr/coordination/tm-admin/#Editer-un-projet)
    -  [Description - la première chose que les utilisateurs apprennent sur votre projet](/fr/coordination/tm-admin/#description)
    -  [Instructions - ce que les utilisateurs doivent faire](/fr/coordination/tm-admin/#instructions)
    -  [Métadonnées - à qui appartient le projet](/fr/coordination/tm-admin/#metadata)
    -  [Zones prioritaires - où les utilisateurs devraient commencer à cartographier](/fr/coordination/tm-admin/#Zones-prioritaires)
    -  [Imagerie - la base de la cartographie](/fr/coordination/tm-admin/#imagerie)
    -  [Permissions - qui est autorisé à cartographier et à valider](/fr/coordination/tm-admin/#permissions)
    -  [Paramètres](/fr/coordination/tm-admin/#paramètres)
    -  [Actions](/fr/coordination/tm-admin/#actions)
    -  [Éditeur personnalisé](/fr/coordination/tm-admin/#Éditeur-personnalisé)
    -  [Sauvegarde et test](/fr/coordination/tm-admin/#Sauvegarde-et-test)
    -  [Publier](/fr/coordination/tm-admin/#Publier)
-  [Gestion du projet](/fr/coordination/tm-admin/#gestion-du-projet) 
    -  [Etre réactif](/fr/coordination/tm-admin/#Etre-réactif)
    -  [Séquencement du projet](/fr/coordination/tm-admin/#Séquencement-du-projet)
    -  [Cycle de vie du projet](/fr/coordination/tm-admin/#Cycle-de-vie-du-projet)
-  [Informations supplémentaires](/fr/coordination/tm-admin/#Informations-supplémentaires)
    -  [Remarques concernant l'imagerie](/fr/coordination/tm-admin/#Remarques-concernant-limagerie)

Le gestionnaire de tâches est l'outil essentiel pour coordonner la cartographie sur OpenStreetMap. Il soutient les initiatives de cartographie humanitaire, l'organisation de mapathons ou la création de tâches cartographiques pour les étudiants. L'application divise une zone d'intérêt en morceaux géographiques gérables qui peuvent être réalisés rapidement et en collaboration. Cette approche permet de distribuer les tâches à de nombreux cartographes individuels, tout en réduisant les conflits d'édition possibles. 

Le logiciel encourage la précision et la qualité des données cartographiques en fournissant un ensemble cohérent d'instructions à vos cartographes (par exemple, "cartographier toutes les routes et tous les bâtiments"). En bref, le gestionnaire de tâches vous permet de configurer et de diriger le flux de travail pour les activités de cartographie ouverte. 

Ce guide décrit l'administration de base du gestionnaire de tâches. Il couvre les instructions pour créer et modifier les projets de cartographie et les autorisations de gestion pour la cartographie et l'examen des données provenant de sources multiples.

## Connexion et accès

Un compte OpenStreetMap (OSM) est nécessaire pour se connecter au gestionnaire de tâches. Vous pouvez visiter le [gestionnaire de tâches de HOT] (http://tasks.hotosm.org), ou toute autre instance communautaire de votre choix. Cliquez ensuite sur `S'inscrire` et vous serez redirigé vers le [site Web d'OpenStreetMap] (https://www.openstreetmap.org) pour créer votre compte. Ou cliquez sur `Se connecter` si vous avez déjà un compte, et dans la fenêtre de dialogue, vous pouvez donner au gestionnaire de tâches un accès limité à votre compte OSM.

## Permissions

Le niveau d'utilisateur le plus basique est celui de **cartographe**. Les cartographes peuvent se connecter au gestionnaire de tâches pour trouver et sélectionner un projet de cartographie sur lequel travailler. Toutes les fonctionnalités du cartographe sont décrites dans le [Guide du cartographe du gestionnaire de tâches LearnOSM] (/fr/coordination/tm-user/). Notez que certains projets, tels que ceux à l'état de projet (c'est-à-dire non publiés), ou restreints à certaines équipes, ne sont pas visibles pour les cartographes réguliers. 

Toutes les autorisations spéciales sont gérées par les *organisations* et les *équipes*. Une **organisation** est le parapluie principal, et sous chaque organisation, des projets et des équipes de cartographie peuvent être créés. Une organisation peut représenter un utilisateur de données tel qu'une organisation humanitaire, ou toute communauté OpenStreetMap. Si vous avez besoin de configurer votre organisation sur le gestionnaire de tâches, contactez les techniciens chargés de la maintenance de l'instance du gestionnaire de tâches. Voir [HOT Tasking Manager Organizations](https://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Team/HOT_Tasking_Manager_Organizations) pour une liste des organisations présentes dans le gestionnaire de tâches de HOT. Si votre communauté ou votre organisation ne figure pas dans cette liste et que vous souhaitez créer des projets dans le gestionnaire de tâches de HOT, veuillez remplir [ce formulaire] (http://bit.ly/HOTTasking) pour manifester votre intérêt. 

Chaque organisation a un ou plusieurs **gestionnaires**. Ils ont la permission de créer et de modifier les projets associés. Toutes les options du gestionnaire sont accessibles par la section `Gestion` dans la navigation principale.

Les responsables d'une organisation peuvent créer des **équipes**. Les équipes sont des groupes d'utilisateurs d'OpenStreetMap et elles peuvent être publiquement visibles ou privées. Elles ont également un ou plusieurs gestionnaires d'équipe. Les équipes peuvent être configurées de manière à ce que les utilisateurs puissent les rejoindre de leur propre chef ou sur invitation uniquement, ce qui signifie que les responsables d'équipe sont informés des demandes d'adhésion et doivent prendre une décision à leur sujet.

Pour chaque projet, les administrateurs peuvent désigner des équipes spécifiques pour accorder ou restreindre l'accès à l'une ou l'autre des cartographies, définir qui peut valider les données ou qui peut modifier les métadonnées du projet.

## Créer un projet

Cliquez sur `Gestion` dans la navigation en haut. Dans la première ligne, vous voyez un espace pour 'Projets'. A côté, cliquez sur le bouton `Ajouter` pour en créer un.

![TM Add Project][]

Vous pouvez choisir de définir la zone d'intérêt (zone de cartographie) de votre projet de cartographie de l'une des manières suivantes :

* Option 1 : `Dessinez` la zone d'intérêt manuellement
* Option 2 : `Télécharger le fichier` pour importer la zone d'intérêt en tant que fichier GeoJSON, KML ou shapefile zippé.

![TM New][]

### Définir la zone de cartographie

* Option 1 : `Dessinez` la zone d'intérêt manuellement

1. Vous pouvez passer à d'autres couches d'arrière-plan à l'aide des boutons situés en haut. 
1. Cliquez sur le bouton `Dessiner` à gauche.
2. Pour dessiner un polygone représentant la zone de cartographie dans le cadre de la carte, maintenez le bouton droit de la souris enfoncé pour déplacer la carte sans cliquer, ce qui ajoutera un nœud. Le polygone doit encadrer étroitement la zone d'intérêt. Cela permet de gagner du temps pour compléter les tuiles qui ne présentent pas d'intérêt ( ex : océan, forêt).
3. Cliquez sur votre point de départ pour compléter le polygone. <!--Après avoir complété un polygone, vous pouvez déplacer les nœuds ou en ajouter de nouveaux pour obtenir la zone exactement comme vous le souhaitez.-->

<br>

* Option 2 : `Télécharger le fichier` pour importer la zone d'intérêt en tant que fichier GeoJSON, KML ou shapefile zippé.

1. Dans la première étape de la création d'un projet, cliquez sur `Upload file`.
2. Naviguez jusqu'à votre fichier dans la fenêtre de téléchargement de fichiers.
3. Cliquez sur le nom du fichier pour le mettre en évidence, puis cliquez sur ‘Ouvrir’.
4. Les centres d'intérêt importés ne peuvent pas être ajustés dans le gestionnaire de tâches.

Il se peut que vous téléchargiez un fichier dont les tâches (petits carrés de cartographie) sont déjà prédéfinies. Vous trouverez plus d'informations à ce sujet dans la section [Définir des tâches avec des données importées](/fr/coordination/tm-admin/#Avancé:Définir-les-tâches-avec-des-données-importées) ci-dessous.

> NOTE : Le gestionnaire de tâches a des limites ! La limite technique maximale d'un projet est de 5 000 km2, mais pour que votre projet ne prenne pas trop de temps, essayez de le garder en dessous de 1 000 km2. Si vous devez cartographier une zone plus grande que cela, vous devrez créer plusieurs projets. Vous pourrez voir la taille du projet dans le coin inférieur gauche de la carte d'aperçu. 

### Définir les tâches

Après avoir défini la zone de cartographie globale, celle-ci va être divisée en zones plus petites appelées *Tâches*. Vous devez considérer très attentivement la taille des tâches de votre projet. Les projets bien conçus ont des tailles de tâches appropriées, ce qui leur permet d'être réalisés aussi efficacement que possible. 

![TM Tile Sizes][]

La zone du projet est automatiquement divisée en cellules de grille et chaque cellule devient une tâche. Utilisez les boutons `Plus grand` et `Plus petit` pour ajuster la taille globale des cases de la tâche. La taille par défaut de la tâche est probablement beaucoup trop grande. Lorsque vous modifiez la taille de la tâche, notez la taille de la tâche indiquée à gauche à côté de 'La taille de chaque tâche est d'environ ... km2'.

Prenez votre temps et définissez la taille de vos tâches très soigneusement ! Essayez de réduire la taille de votre tâche jusqu'à ce que vous pensiez qu'il faut à un cartographe confiant **15 minutes pour la réaliser**. La taille optimale de la tâche dépend entièrement de la ou des caractéristiques que vous demandez aux cartographes d'identifier et de la densité de ces caractéristiques. Par exemple, un projet de cartographie routière dans une zone rurale aura des tâches beaucoup plus importantes qu'un projet qui consiste à numériser des bâtiments dans une agglomération dense.

> Zoomer et activer l'imagerie Bing pour déterminer une bonne taille de tâche. Vous pouvez passer d'une couche de fond de carte à une autre à l'aide des boutons situés en haut de la carte.

Après avoir ajusté la taille globale de la tâche, vous pouvez diviser sélectivement certaines tâches en quatre plus petites avec le bouton `Cliquer pour diviser`. Ou vous pouvez `dessiner une zone à diviser`, et il vous permettra de dessiner un polygone sur une zone pour diviser toutes les tâches à l'intérieur. Ces fonctions sont particulièrement utiles si la densité de l'élément que vous souhaitez cartographier varie dans votre zone de projet. Par exemple, il peut y avoir une zone côtière densément construite qui nécessite de petites tâches et une zone rurale intérieure qui nécessite des tâches beaucoup plus importantes. Le bouton `réinitialiser` supprimera tous vos fractionnements personnalisés.

Remarques pour décider de la taille des tâches : 
-  Les tâches peuvent être divisées, mais il n'y a pas d'option pour les fusionner à nouveau une fois qu'un projet est créé.
-  Une fois qu'un projet est créé, la répartition des tâches prend beaucoup de temps et doit être effectuée une tâche à la fois.
-  Les conflits potentiels entre cartographes voisins sont plus nombreux aux coins et aux limites des tâches. Des tâches plus petites signifient plus de coins et de bords. Il faut trouver un compromis entre la taille de la tâche pour faciliter la tâche des cartographes, mais aussi pour éviter les conflits cartographiques entre eux.
-  Les petites tâches sont plus faciles à cartographier, mais un plus grand nombre de tâches signifie que les cartographes doivent passer plus de temps à mettre à jour le statut de chacune d'entre elles, et les projets dont les tâches sont trop petites peuvent donc être inefficaces.
-  Les cartographes débutants ont besoin d'environ quatre fois plus de temps que les cartographes expérimentés.
-  Les cartographes débutants doivent développer un œil pour l'imagerie satellite. Il peut être difficile de repérer les bonnes caractéristiques.

Une fois que vous êtes satisfait de la taille de vos tâches, cliquez sur `Suivant`.

### Avancé : Définir les tâches avec des données importées

Si vous avez téléchargé un fichier pour définir la zone de votre projet, ce fichier peut également contenir les formes pour les tâches individuelles. Par exemple, un projet terminé de MapSwipe qui se concentre sur les zones peuplées ou une grille complexe que vous avez pré-créée dans QGIS. Si c'est le cas, assurez-vous d'activer l'option "Définir les tâches en utilisant les polygones téléchargés". Vous passerez ainsi directement à l'étape de dénomination de la création du projet. 

![TM New Polys][]

### Découpage des zones de projet

![TM Trim][]

Après avoir déterminé la taille des tâches, vous aurez la possibilité de les réduire à l'étendue de votre zone de cartographie. Vous voudrez certainement le faire. Cliquez sur `Découpage` pour supprimer tous les carrés de tâches qui ne chevauchent pas votre zone de projet. 

![TM Trim coarse][]

Si vous activez l'option 'Découper les tâches pour définir la zone d'intérêt exacte pour la cartographie' avant de cliquer sur `Découper`, les portions de tâches qui se chevauchent à la limite de votre zone d'intérêt seront découpées de façon nette par rapport à votre zone d'intérêt.

![TM Trim fine][]

Un découpage précis peut donner lieu à des tâches extrêmement petites. Ces tâches minuscules peuvent perturber les cartographes. Vous pouvez choisir de les supprimer en sélectionnant `supprimer` lorsque vous voyez le message 'There are ... tasks smaller than 2,000m2. Voulez-vous les supprimer ?'

> Prenez note du nombre de tâches que comporte votre projet (regardez dans le coin inférieur gauche de votre carte). La limite technique maximale du nombre de tâches dans un projet du gestionnaire de tâches est de 5 000. Toutefois, pour que votre projet ne prenne pas trop de temps, essayez de le maintenir en dessous de 1 000 tâches. Si vous devez cartographier une zone plus étendue, essayez de la diviser en plusieurs petits projets. 

Cliquez sur `Suivant`.

### Nommez le projet

Le nom d'un projet est l'un de ses aspects les plus importants lorsqu'il s'agit d'être découvert par le grand public. Essayez d'inclure le nom du pays dans lequel le projet est situé (par exemple, le Sud-Soudan), la raison de la cartographie (par exemple, la vaccination COVID) et également l'emplacement plus spécifique, peut-être le nom du district ou de la localité (par exemple, le comté de Yambio). Par exemple, un nom de projet complet pourrait être : _Soudan du Sud, Vaccination COVID, Comté de Yambio_. 

Assurez-vous que votre organisation est sélectionnée dans le champ 'Organization'. 

> Avant de terminer cette étape, assurez-vous que vous êtes satisfait de la délimitation de la zone d'intérêt du projet et du nombre des tâches, car ces éléments ne peuvent pas être modifiés par la suite. 

Cliquez sur `Créer`. Votre projet sera créé mais il ne sera pas publié immédiatement - vous serez d'abord dirigé vers le menu d'édition du projet. 

## Éditer un projet

Vous voyez maintenant le menu 'Édition' de votre projet. Avant de pouvoir sauvegarder le projet, vous devrez parcourir attentivement le menu 'Édition' pour terminer la configuration. Voici un résumé rapide des sous-menus que vous verrez sur le côté gauche :

- Description - Définissez le statut, la priorité et la description textuelle associés à votre projet.
- Instructions - Instructions détaillées sur la manière de cartographier les caractéristiques nécessaires et d'aborder le projet.
- Métadonnées - Définissent les caractéristiques qui doivent être cartographiées. Comprend également les informations utilisées pour catégoriser les projets, utilisées pour filtrer les projets.
- Zones prioritaires - Vous permet de spécifier les parties de la zone du projet qui doivent être cartographiées en premier.
- Imagerie - Choisissez l'imagerie qui sera chargée par défaut lorsque les volontaires cartographieront votre projet. 
- Permissions - Permet de restreindre l'accès au projet pour la cartographie et la validation.
- Paramètres - Activez/désactivez les éditeurs alternatifs tels que RapiD.
- Actions - Des actions groupées puissantes que vous pouvez exécuter sur votre projet, comme le clonage ou la suppression.
- Éditeur personnalisé - Ajouter un éditeur personnalisé en utilisant une URL

> Remplir soigneusement ces informations est une partie essentielle de la réussite d'un projet de cartographie. Il est particulièrement important que la description et les instructions du projet soient clairement communiquées afin que les cartographes soient conscients de l'importance de la qualité des données et des meilleures pratiques. Gardez à l'esprit que les contributeurs peuvent ne pas avoir d'expérience préalable d'OpenStreetMap et ne sont probablement pas familiers avec les directives de balisage.

### Description

![TM Description][]

#### Statut

Le premier est le statut du projet. Il peut être défini comme suit : **Brouillon**, **Publié**, ou **Archivé**.

- **Brouillon** - Votre projet démarrera en mode brouillon. Dans ce mode, il ne pourra pas être découvert et il ne sera pas possible pour le public d'y contribuer. C'est l'idéal lorsque vous êtes encore en train de mettre en place votre projet et de le tester avant sa publication. 
- **Publié** - Lorsque vous avez terminé la configuration de votre projet, que vous l'avez testé et que vous êtes heureux qu'il soit listé publiquement et ouvert à la cartographie/validation.
- **Archivé** - Tous les projets devraient finir par être archivés. Les projets archivés sont publics mais bloqués pour les contributions. Vous devriez envisager d'archiver votre projet si :
  - Il est cartographié et validé à 100%.
  - Les instructions ou l'imagerie sont largement obsolètes.
  - Le projet a été créé il y a plus d'un an
  - Les données cartographiques ne sont plus nécessaires à des fins humanitaires dans la zone du projet.

#### Priorité

Next is the project priority. This dictates how close to the front of the Tasking Manager the project will be seen in the Explore Projects page. This can be set to either **Urgent**, **High**, **Medium** or **Low**.

- **Urgent** - Only set this status if the project is **in response to a disaster and the data needs are immediate**. Very few projects have this priority level. 
- **High** - For projects that are not necessarily in response to a disaster but the data is needed in a **short time-frame**. 
- **Medium** - If the data is needed but not in a particularly short time-frame.
- **Low** - If you want to publish your project but do not want to make it very prominent. You might prefer to share your project to specific groups using the project URL.

#### Short description

Add at least two sentences that briefly describe your project. This is important because volunteers will read this to decide on whether to contribute. Try and clearly explain **why** the data is being collected and **how the map data will be used**. 

> These fields support **Markdown** and can include images (drag and drop) and videos (add a YouTube URL for automatic embedding).

#### 'Long' Description

You can go into more detail about your project here. Provide more information about why the project exists, who will use the data and the expected the impact the mapping will have. If the project involves any collaborations or partners you could expand on that here. 

> For any of these text fields you can choose to add additional translations. If you'd like to add a translation, click on the two letter language code and enter the translated text. For users that have set the Tasking Manager to that language it will automatically display the project in that language. By default, the initial field is English language, this can be altered in the 'Settings' sub-menu of your project.

#### Due date

If you have a date by which you wish your project to be completely mapped and validated you can add that here. This is optional and once the date is exceeded it does not change anything for the project and volunteers can continue contributing afterwards. Contributors will see the due date listed next to the project. 

### Instructions

![TM Instructions][]

#### Changeset comment

Here you can add additional tracking tags which will automatically populate each time someone saves their work while mapping your project. For example, if you want to start tracking all contributions across all your organization's projects you might want to add a common tracking tag to them, e.g. #MSF or #cartONG. Please try to **keep these tags short** and do not add too many of them, cluttered changeset comments are confusing to interpret and space should be left for mappers to leave descriptive changeset comments. 

> Please note that a unique project tracking tag will already be present, e.g. #hotosm-project-11188 - **please leave this as it is**, it is very important for tracking the progress of the project. The number at the end of the tag is your project's unique ID.

#### Detailed Instructions

Add descriptive instructions for mappers and validators to follow while working on your project. Your project will be public, therefore **write instructions for inexperienced users** with no local or contextual knowledge. Please use plain language as your target audience may not be native English speakers.

1. Write the most important information at the top to ensure it is prominent. This could includes a description of the imagery and a warning of an imagery offset issue with guidance. Or it might instruct mappers to ignore paths and tracks in a highway mapping project and focus on more prominent highways.
2. Add context/location specific instructions. These vary significantly but will help mappers interpret satellite imagery. E.g. 'Expect to see many circular brown thatched huts in this South Sudan project' or 'Settlements in Guatemala are often densely built, zoom extremely far in when mapping each building to ensure they do not connect or overlap'. Drag and drop aerial imagery screenshots into the instructions here to enhance this section.
3. Definitely include a detailed description of **how to map each feature** that you wish to be mapped. Look at existing (but recent) projects on Tasking Manager to see if you can borrow some existing instructional text (beware that some projects will not have good instructions!).
4. The definitive resource on tagging is the [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). For many HOT-related projects the page on [tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) is the proper specialization and may be worth linking to in your project's instructions. If your project must adhere to different tagging standards then write a similar page in the Wiki and link it in your instructions.
5. Other points of clarification: If the project is suitable for mappers with a certain level of experience only. For example, the project uses imports or existing data should be realigned to GPS traces or some other imagery. Phrase it so that new mappers will feel invited contributing to other projects but understand that advanced techniques are required in this instance.
6. There are guidelines that cover common errors we see while validating. One example is Blake Girardot's compilation on [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Use the link in the instructions and explain that adhering to these guidelines is required.

#### Per Task Instructions 

This is optional but it is possible to add a short snippet of additional instruction that mappers will see while they are working on a task. This is seen on the right hand side of the Tasking Manager editor view above the 'Task Status' section. This will be seen at all times while mapping, so if there is something **particularly important** that you want to **instruct mappers** about you could add that here. 

### Metadata

![TM Metadata][]

#### Mapper level

This changes the difficultly level which is **displayed** for your project. Consider this very carefully, complex projects which are inappropriately set to Beginner difficulty **can result in significant data quality issues**. 

> Note that this does not change who can **actually contribute** to your project, those restrictions are implemented under the Permissions sub-menu.

Most projects are set to either **Beginner** or **Intermediate** difficulty, a handful of projects are set to Advanced. 

- **Beginner** - Consider this if your project is easy to map and:
  - You are only asking contributors to map one feature, particularly **buildings only**
  - The density of features is low, i.e. in a **rural** area
  - There is a **low quantity** of existing OSM data in your project area
  - There are no imagery alignment issues
- **Intermediate** - If your project is trickier to map, this should be considered if:
  - You are asking contributors to map more than one feature, e.g. buildings **and** roads
  - There is a medium/high density of those features in your project area, i.e. **urban** areas
  - There is **substantial** existing OSM data in your project area
  - There might be **imagery alignment issues** or you ask contributors to use more than one imagery source
- **Advanced** - If the project is extremely difficult to map, consider this if: 
  - There is a very high density features in your project area, i.e. **central urban** areas
  - There is a **lot of** existing OSM data in your project area
  - There are **complex imagery alignment** issues

#### Types of mapping

Toggle these on/off depending on the features that you wish to be mapped in your project. Generally the **fewer features the better**, as projects which aim to map too many features often struggle to make much progress. 

> Projects that ask for lots of features to be mapped are difficult for mappers and difficult to get validated. They take much longer to get a good usable dataset. Task sizes are also difficult to make efficient for different types of mapping, e.g., buildings need small task squares, roads and waterways need larger task squares. Making multiple projects over the same area to get buildings and highways/waterways mapped separately is best practice. 

#### iD Editor Presets

If you choose one or more items from the drop-down list then mappers using iD will only be able to assign these features to the objects they map. This is recommended for beginner, **buildings-only projects**. It will mean that contributors will not be able to tag other features, even if they try. Avoid using presets for more complex projects, as it can quickly become a burden. For example, a highway mapping project would need dozens of presets to be added to ensure all highway types could be mapped. 

#### Organization

Your organization name should be in here already, otherwise choose it from the dropdown menu.

#### Campaign

If you have created several projects which are associated with each other, you can choose to assign them to a campaign. Users can filter projects by campaign name on the Explore Projects page. For example, if your project is associated with malaria elimination, you might want to put it under the 'Malaria Elimination' campaign. To request the creation of additional campaign names please complete [this form](https://forms.gle/qafvkp4iAxnY6rjE6). 

#### Categories

Select the themes here that relate to your project. Contributors can specify their interests in these categories in their settings page.

#### OSMCha filter ID

[OSMCha](https://osmcha.org/) is a powerful data quality assurance tool that you may find useful for monitoring contributions to your project. The standard filter confines output to the bounding box of the project and to contributions not older than the project creation date and with the name of the project in the changeset comment. If you think something different would be a better approach to analyze the changesets of your project then either provide an OSMCha URL or an OSMCha filter id here. The OSMCha filter is available at the end of the overview page of your project. 

### Priority Areas

![TM Priority Area][]

Use the tools here to draw areas that should be mapped first. You can have multiple priority areas for a project. You can also change priority areas at any time. The priority area will be highlighted for volunteers to prioritize and if they select 'Map a task' it will randomly select a task from the priority area first. 

> During disaster mapping, early in the event, having a large project mapping area and using priority areas to focus mapping as new information comes in is often best practice.

### Imagery

From the dropdown menu choose the aerial imagery source that you want to load automatically for your project. If the imagery is not listed in the dropdown you can choose 'Custom' and then add a TMS URL. 

> Note that Tasking Manager **cannot host custom imagery**, it needs to be hosted externally and linked using a TMS URL. If you are happy with your imagery being open for use please consider using [OpenAerialMap](https://openaerialmap.org/) to host your imagery.

License - Optionally, if there is a specific license required for the mappers to accept when using the imagery, you can select it here. For example, for Maxar imagery this is 'DigitalGlobe Satellite EULA'. If you need a license that is not available, you can contact an administrator for the Tasking Manager installation and ask them to add it.

### Permissions

Under the 'Metadata' menu we could change the difficulty level that was **displayed** for a project. Under the 'Permissions' menu we can change who can actually **access** a project. It's important to remind ourselves of the various user levels:

- **Beginner** User - Any user that has either just created their account or made **less than 250 changesets** (saves)
- **Intermediate** User - Any user that has made between **250 and 500 changesets**
- **Advanced** User - Any user that has made **over 500 changesets**

> As before, consider permissions very carefully, complex projects which inappropriately allow all users to contribute can result in **significant data quality issues**. 

![TM Permissions][]

#### Mapping permissions

Here you can choose who can **map** your project:

- If your project is easy to contribute towards and you consider it a beginner project you might want set this to **'Any user'**.
- If your project is more complex and requires more experience, restrict mapping to **'Only users with intermediate or advanced level'**. 
- If you want to be even more selective then you may also require a mapper to be part of a **team**. Teams must then be defined below.

#### Validation permissions

Here you can choose who can **validate** your project. Validation is where more experienced mappers check the contributions that are made within your project, therefore this should be restricted to 'Only users with intermediate or advanced level' **as a minimum**. **Ideally** you should restrict validation even further to **'Only team members'**, but when you do this you must remember to **define those teams** below. 

#### Teams

Use the filters to search for and add teams. You can add your own team(s), but please also feel free to add other teams. Once you have added a team ensure to select a role (Mapper, Validator, Project Manager). 

Team permissions will not function unless you have restricted Mapping and/or Validation permissions to 'Only team members'. If you grant a team Project Manager access this will allow its team members to edit the project.

> On HOT's Tasking Manager feel free to add two of the larger validation teams, namely 'HOT Global Validators' and HOT's 'Validator Trainees'. Please note, that although this gives those team members **permission** to validate your project, it does **not necessarily mean** that they **will validate** your project.  

#### Privacy

Toggling to make a project 'Private' will hide the project from all users except those that are part of the teams defined above. 

### Settings

![TM Settings][]

#### Default Language

Altering this will change the default language for your project's title, description and instructions.

#### Editors for mapping/validation

This restricts the available editors to those checked. You may specify different sets for mapping and for validation. Note that it is possible to enable the AI assisted RapiD editor here. 

#### Enforce random task selection

If enabled then contributors cannot select specific tasks for mapping.

### Actions

Here you can perform powerful bulk actions on your project. **Be careful** with many of these options, **they are not reversible**. 

![TM Actions][]

#### Message all contributors

Sends a Tasking Manager message to everyone who has marked a task complete or valid. It can be used to thank contributors and/or guide them to other projects in a campaign. It should also be used before using either of the two Validate/Invalidate all Tasks options described below.

#### Mapping, validation and invalidation

This will set the status of all tasks to either mapped, validated or invalidated. Handle with care as there is no undo.

#### Reset tasks

This will reset all tasks to their pristine state but previous actions can still be seen in the task history. Handle with care as there is no undo.

#### Transfer project ownership

You can specify another manager within your organization who will become listed as the creator of the project. Search for their OSM username. 

#### Clone Project

This useful option will create a duplicate of the project, keeping the entire **setup identical** except for the area of interest, task grid and priority areas which you will need to re-import or re-draw. This option will **save you a lot of time** if you are creating a series of similar projects that are covering a large area. 

#### Delete Project

This will **permanently delete** the project from the Tasking Manager. Handle with care as there is no undo. It is not possible to delete a project after any contributions have been made to it.

### Custom editor

If you would like to link to an editor which is not listed in the 'Settings' menu a URL to that editor can be added here. 

### Save and test

Once you are happy with your project setup press `Save`. View your project by selecting `Access Project` and `Project Page`. **Check your project carefully**, ensure the instructions are clear and the wording and formatting are correct. 

**Try mapping a task**, is the imagery loading correctly? Are the instructions clear enough? If you need to make changes or refinements to your project, click the `Edit` button on the project page. 

### Publish

After checking and testing your project, if you are happy with it and ready for mapping to start click the `Edit` button on the project page and from the 'Description' menu change the status to ‘Published’. Once the project is published, the wider public will be able to see your project and contribute towards it. 

> Note that you can access the 'Edit' menu of your project and alter the settings at any time, even if mapping is underway.

## Project management

Congratulations! You've created a project, now you'll need to make sure you manage it effectively. 

### Be responsive

As the project creator, you are **responsible** for **responding to questions** that arise in the **Questions and Comments** section of your project page. This section will often include useful guidance or tips from the wider community, take these seriously, respond and make edits to your projects where necessary. 

> To enable notifications when there are new posts in the Questions and Comments section, click on your OSM username in Tasking Manager and choose `Settings`. Toggle notifications on for 'Questions and comments'.

On the project page your username will also be listed next to 'created by ...'. This means that you may also receive direct OSM messages, make sure to read and respond to these. 

> If you are being overwhelmed by questions please note that you will receive less if you follow this guidance: _The first thing you can do to support the mappers, and validators, is having well designed projects with easy to understand but thorough instructions and descriptions._

### Sequencing projects

If you have created a number of projects in a series **do not publish them all at once**. You are not the only one creating projects, having a reasonable number of projects (one or two) at the appropriate priority is fine. Publishing half-a-dozen at once will crowd out the Tasking Manager. Keep the rest in draft or at lower priority while at any moment only one or two are being worked on. You may notice that contributors lose enthusiasm if they see lots of similar projects all at once that are making little progress.

### Project lifecycle

Keep track of the mapping and validation progress of your projects. Remember that **all projects must end up being archived**. You will need to do this manually, so do not lose sight of the progress, priority or relevance of your projects. If you are moving to another organization make sure to **hand over** your ongoing projects to your replacement. 

## Additional information

### Considerations concerning imagery

Before creating your project, check the imagery in several different locations across your project area to make an imagery assessment. In most cases either Maxar or Bing imagery should suit your needs. However, there are situations where you might want to choose an alternative source. You may need to consider the following when choosing your imagery: 

1. If careful, detailed mapping is needed choose the imagery that is clearest, with the highest resolution.
2. If your priority is to have the most up-to-date imagery, flick between the standard imagery sources to look for the most recent imagery. Look for indications of development such as new buildings or land clearance to get an idea of the most up-to-date imagery. Recently Maxar has been the most up-to-date but this varies by location. 
3. Check for cloud cover, although one imagery source may suit your needs if it is very cloudy or hazy your mappers will struggle to map using it.
4. Check for alignment, if there is plenty of existing OSM data that aligns to one set of satellite imagery then it may make sense to choose the same imagery. If there are alignment issues make sure to write clear instructions detailing how you expect contributors to deal with offsets/alignment issues. 

> It is often very difficult to get an exact imagery capture date from the satellite imagery providers. The main sources are 'mosaics' where a series of images (often with very different capture dates) are stitched together. Sometimes this stitching goes down to the individual pixel level. In the absence of information, using imagery comparison is therefore often the best choice for finding the most recent imagery. 

#### Imagery alignment

Your project area may have already been partially mapped using older imagery and there might be a noticeable mis-alignment between the older mapped objects and the newer available imagery. Inspect various locations across your mapping area to determine this. If there is an alignment issue, make sure to include detailed instructions outlining the best approach for mappers to take. Projects with imagery alignment issues are best restricted to more experienced mappers. 

There is not a standard set of instructions when it comes to imagery alignment issues. It is very dependent on context. Sometimes mappers are instructed to align to GPS traces, sometimes they are told to align to mapped linear features such as highways and waterways. Here is a sample approach: 

1. Clearly state which imagery is to be considered the reference to which anything else should be aligned. In this case let us assume that the reference is Maxar.
2. Make sure that all existing features which are also visible on Maxar are aligned with Maxar imagery, i.e. realign if necessary.
3. Add new features from the now correctly aligned Maxar imagery.

Often mappers are instructed to look for _least effort_ when it comes to imagery alignment issues. Which means that contributors are told to vary their approach depending on the situation in their individual task: 

- If there is plenty of existing mapping in a task which is consistently misaligned it might require the least effort to change the imagery offset to fit existing mapping and then map the small number of remaining objects in the task. 
- If there is less existing mapping, or objects are misaligned inconsistently (i.e. the degree of misalignment varies across space) then it might be easier to alter the position of the mapped objects to align with the imagery and then map remaining objects in the task.

If your project has alignment issues, ensure your task squares are not too large because imagery offsets can vary considerably across a mapping area, particularly if the terrain is not flat. Even imagery discontinuities may occur across a project - look out for them and advise the contributors of such a problem.

> Although individual mappers can manually alter the imagery offset while mapping, it is not possible for you, as project creator, to change the imagery offset at the project level. However, if you are using your own aerial imagery that is being hosted elsewhere you can alter the offset at source. However, please note that alignment can vary considerably across space and simply changing the overall offset does not always correct alignment issues. 

Please feel free to check these additional resources on imagery alignment:

- [General guidelines for various editors](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [Animated gif on imagery alignment in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [JOSM imagery alignment chapter in learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


[TM Tile Sizes]: /images/coordination/tm4_tile_sizes.png
[TM Add Project]: /images/coordination/tm4_new_project.png
[TM New]: /images/coordination/tm4_create_new.png
[TM New Polys]: /images/coordination/tm4_create_new_polys.png
[TM Trim]: /images/coordination/tm4_trim1.png
[TM Trim coarse]: /images/coordination/tm4_trim2.png
[TM Trim fine]: /images/coordination/tm4_trim3.png
[TM Description]: /images/coordination/tm4_description.png
[TM Instructions]: /images/coordination/tm4_instructions.png
[TM Metadata]: /images/coordination/tm4_metadata.png
[TM Priority Area]: /images/coordination/tm4_priority_area.png
[TM Permissions]: /images/coordination/tm4_permissions.png
[TM Settings]: /images/coordination/tm4_settings.png
[TM Actions]: /images/coordination/tm4_actions.png
