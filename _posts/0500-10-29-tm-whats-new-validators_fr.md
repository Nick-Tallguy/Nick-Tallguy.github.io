---
layout: doc
permalink: /fr/coordination/tm-whats-new-for-validators/
lang: fr
title: Quoi de neuf pour les validateurs dans le Gestionnaire de Tâches 3
category: coordination
date: 0500-10-21 12:00:00
---

# Quoi de neuf pour les validateurs dans le Gestionnaire de Tâches 3

> Ce guide peut être téléchargé : [tm3-news-for-validators_fr.odt](/files/tm3-news-for-validators_fr.odt) ou [tm3-news-for-validators_fr.pdf](/files/tm3-news-for-validators_fr.pdf)  

## Votre profil utilisateur

Le Gestionnaire de Tâches 3 a un certain nombre de nouvelles fonctionnalités à destination des personnes qui font de la validation. Merci de commencer votre **première activité avec le nouveau Gestionnaire de Tâches en visitant votre profil utilisateur**, qui peut être sélectionné dans le menu déroulant sous votre nom d'utilisateur OpenStreetMap (OSM), dans le coin en haut à droite.

![profile][]

1. **Adresse e-mail** - Le gestionnaire de tâches peut maintenant envoyer un e-mail à chaque fois qu'un utilisateur reçoit un message dans le gestionnaire de tâches. C'est très important pour les personnes qui font de la validation. Les commentaires laissés lors de la validation des modifications ont maintenant bien plus de chances d'être vus par la personne à l'origine du travail que vous validez. Merci de bien vérifier que vous avez **ajouté votre adresse e-mail** à votre profil.

2. **Validator Role** - Projects can optionally require experienced validators to validate project mapping. While "Mapper Experience Level" is automatically set based on OSM changesets, the validator role is currently only set by project managers manually. The initial list of folks with the validator role is incomplete, please contact a project manager to have your name added to the list of those with the validator role if you are an experienced validator who does not have the validator role in the Tasking Manager. **Please note**: The validator role is Tasking Manager wide and therefore we ask project managers to only assign this role to validators whose validation work they know directly, and have first hand knowledge the validator is qualified to validate any project in the Tasking Manager.


## Processus de validation

### Étape 1 - Sélection de tâche

La validation peut être effectuée seulement en cliquant sur l'onglet « Validation » de la page d'un projet. Sur cet onglet, vous avez trois options principales pour sélectionner des tâches à valider.

![selection][]

1. **Sélectionnez une tâche individuelle** pour la valider - C'est exactement le même processus que celui du gestionnaire de tâches actuel : vous cliquez sur une tâche ou utilisez le bouton « Valider une tâche au hasard », puis vous cliquez sur « Commencer la validation » et lancez votre éditeur.

2. **Sélectionner par région** - Cela vous permet de tracer un polygone sur la carte des tâches pour sélectionner toutes les tâches disponibles pour validation. Vous pouvez ensuite cliquer sur « Commencer la validation », et cela les verrouillera toutes pour validation.

3. **Sélectionner par utilisateur** - Une liste de tous les utilisateurs qui ont contribué au projet est affichée sur la gauche, avec quelques informations sur chacun d'entre eux. Vous pouvez trier sur n'importe quelle colonne :

- Niveau - Basé sur le nombre de modifications OSM
- Enregistré - Depuis combien de temps ils utilisent le gestionnaire de tâches.
- Dernière validation - La dernière fois qu'une de leur tâche a été validée.

Avec  votre souris, survolez le lien « Commencer » pour mettre en surbrillance les tâches que l'utilisateur a complétées. Un clic sur « Commencer » verrouille les tâches pour validation.

### Étape 2 - Valider plusieurs tâches

Sélectionner une tâche seule et lancer votre éditeur aura le même comportement que dans la version précédente du gestionnaire de tâches. La vraie différence apparaît quand vous sélectionnez plusieurs tâches et que vous lancez votre éditeur.

There is less of a change in the iD editor, the big difference being that instead of seeing just one task outline, you will see multiple task outlines. Because iD only downloads data for areas you zoom in close for and accepts GPX outlines there is not much difference in your workflow, just more areas locked in the Tasking Manager and more area to review mapping in. 

Using JOSM however is now slightly different. When launching JOSM two OSM data layers will be created, one will be non-uploadable and it will have the outlines of the tasks that need validation and one will be a blank, editable OSM data layer. **No data will be downloaded from OSM**.

![multiple][]

You will use the with the task outlines as a guide for downloading OSM data to the editable layer and proceed to validate as you normally would.

When you are done validating, you have the three standard options, Mark all Valid, Mark all Invalid, or Stop Validating. When multiple tasks are checked out for validation, the same option must be chosen for all the tasks checked out. You can not, in the same workflow, mark some as valid and mark others as invalid.

If you need to mark tasks with different statuses after reviewing them, please check them out individually to mark them accordingly.


## Other Validation related Items

1. **Questions and Comments tab** - This is now a tab for project level questions and comments. Validators should review the the comments in that tab and answer questions as needed. Validators can also use that tab and the "Contact the Project Manager" link to direct questions or comments to the creator of the project.

2. **Task level comments feed** - The Activity and Stats button in the upper right hand corner of the tasks map now has a feed of all the comments left on the individual tasks. Validators should review that list of comments to help identify issues and answer questions.

[profile]:   /images/coordination/tm3_wnv_profile.png
[selection]: /images/coordination/tm3_wnv_selection.png
[multiple]:  /images/coordination/tm3_wnv_multiple.png