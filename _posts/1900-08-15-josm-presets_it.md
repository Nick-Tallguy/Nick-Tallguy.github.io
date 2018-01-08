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
> Verificato il 2016-09-17  

Se hai già usato un poco JOSM, ora conosci un poco di tag e di preset. Ogni oggetto è definito da due cose - primo, le sue coordinate geografiche (che sia un punto, una linea o un poligono), e secondo, i suoi attributi sotto forma di tags.  

Quando disegni un oggetto e lo selezioni dal menù Preimpostazioni, all'oggetto vengono applicati automaticamente i tag corretti.  

Se ti piace utilizzare i preset, cosa succede quando vuoi aggiungere tag che non sono contenuti nei menù, o quando vuoi personalizzare i tuoi tags?  

In questo caso, puoi aggiungere una voce di menù personalizzato alle Preimpostazioni. In questa sezione vedremo come fare ciò. Nel  [capitolo successivo](/it/editing/creating-presets), si parlerà di come crearsi un proprio file con le preimpostazioni personalizzate.  


Aggiungi Preimpostazioni (Preset)
-----------

I menù e sottomenù che formano il menù delle Preimpostazioni sono immagazzinati in file che descrivono come creare i menù e i moduli che appaiono quando tu selezioni una voce di preimpostazione, e come definire quali tag sono aggiunti ad un oggetto in base a come viene compilato il modulo.  

I file delle preimpostazioni possono essere aggiunti da un archivio online oppure salvati localmente sul proprio computer e aggiunti a JOSM.  

* Per aggiungere una nuova riga nel menù Preimpostazioni, apri JOSM e vai su Modifica -> Preferenze .. .  
* Clicca sulla terza scheda dall'alto, che somiglia ad una griglia che copre il pianeta.  

![tagging presets tab][]

* In  alto, clicca su "Etichette preimpostate."  

![tagging presets menu][]

* Add a presets file from the internet by selecting one in the list on 	the left, and clicking on the blue arrow. In this example, we will add the preset named "New Tags"  

![example presets][]

* Nella lista sulla destra vedrai apparire una nuova voce.  
* Fai click su OK.  
* Devi riavviare JOSM.  
* Crea un nuovo livello (layer) e aggiungi un punto o un'area.  
* Go to the Presets menu. You will see an additional entry at the bottom which expands into several options not covered by the standard JOSM installation.  

![additional tags preset][]

* Most presets cover fairly specific use cases so browse the list if you find one which matches your interests.  

* Se ti hanno dato o indicato un file di preimpostazioni personalizzate (preset), tu puoi aggiungerle al menù con lo stesso metodo. Semplicemente torna al menù Preferenze, e invece di selezionarlo dalla lista, clicca sul bottone (+) sulla parte superiore destra.  

![plus button][]

*Cerca la posizione del file nel tuo computer e assegnagli il nome che desideri.  
* Fai click su OK.  


[tagging presets tab]: /images/josm/tagging-presets-tab.png
[tagging presets menu]: /images/josm/tagging-presets-menu.png
[example presets]: /images/josm/example-presets2.png
[additional tags preset]: /images/josm/new-tags-preset.png
[plus button]: /images/josm/plus-button.png

