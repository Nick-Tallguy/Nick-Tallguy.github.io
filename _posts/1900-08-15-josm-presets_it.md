---
layout: doc
title: Impostazioni predefinite di JOSM
permalink: /it/josm/josm-presets/
lang: it
category: josm
---

Impostazioni predefinite di JOSM
============

> Questa guida può essere scaricata come [josm-presets_it.odt](/files/josm-presets_it.odt) o [josm-presets_it.pdf](/files/josm-presets_it.pdf)  
> Reviewed 2016-09-17  

Se hai già usato un poco JOSM, sino ad ora ne conosci un poco di tag e di preset. Ogni oggetto è definito da due cose - primo, le sue coordinate geografiche (che sia un punto, una linea o un poligono), e secondo, i suoi attributi sotto forma di tags.  

Quando disegni un oggetto e lo selezioni dal menù Preimpostazioni, all'oggetto vengono applicati automaticamente i tag corretti.  

Se ti piace utilizzare i preset, cosa succede quando vuoi aggiungere tag che non sono contenuti nei menù, o quando vuoi personalizzare i tuoi tags?  

In questo caso, puoi aggiungere una voce di menù personalizzato alle Preimpostazioni. In questa sezione vedremo come fare ciò. Nel  [capitolo successivo](/it/editing/creating-presets), si parlerà di come crearsi un proprio file con le preimpostazioni personalizzate.  


Aggiungi Preimpostazioni
-----------

The menus and submenus that make up the Presets menu are stored in files which describe how to create the menus and forms that come up when you click on a preset, and how to define what tags are added to an object based on how the form is filled out.  

Presets files can either be added from an online archive, or saved on your computer locally and added into JOSM.  

* To add a new entry to the Presets menu, open JOSM and go to Edit->Preferences.  
* Click on the third tab down, which looks like a grid covering the planet.  

![tagging presets tab][]

* At the top, click on "Tagging Presets."  

![tagging presets menu][]

* Add a presets file from the internet by selecting one in the list on 	the left, and clicking on the blue arrow. In this example, we will 	add the presets named "Buildings Indonesia by Kate Chapman."  

![example presets][]

* You will see a new item appear in the list on the right.  
* Fai click su OK.  
* Devi riavviare JOSM.  
* Create a new layer and add a point or shape.  
* Go to the Presets menu. Click on the item named "Building," which has now been added at the bottom of the menu.  

![indonesia building form][]

* If you don't speak Indonesian, this might be hard to read, but nonetheless you have been successful and added a custom preset menu.  

* If you have been given a custom presets file, you can add it to the menu in a similar way. Simply return to the Preferences menu, and instead of selecting from the list, click on the (+) button in the upper right.  

![plus button][]

*Cerca la posizione del file nel tuo computer e assegnagli il nome che desideri.  
* Fai click su OK.  


[tagging presets tab]: /images/josm/tagging-presets-tab.png
[tagging presets menu]: /images/josm/tagging-presets-menu.png
[example presets]: /images/josm/example-presets.png
[indonesia building form]: /images/josm/indonesia-building-form.png
[plus button]: /images/josm/plus-button.png

