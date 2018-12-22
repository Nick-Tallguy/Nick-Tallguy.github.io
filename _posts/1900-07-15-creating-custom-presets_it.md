---
layout: doc
title: JOSM - Creazione di preimpostazioni personalizzate
permalink: /it/josm/creating-presets/
lang: it
category: josm
---

JOSM - Creare impostazioni personalizzate
=======================

> Questa guida può essere scaricata come  [creating-presets_it.odt](/files/creating-presets_it.odt) o come [creating-presets_it.pdf](/files/creating-presets_it.pdf)  
> Reviewed 2015-09-20  

Nel [capitolo precedente](/it/josm/josm-presets) abbiamo visto come aggiungere in JOSM i menu delle impostazioni personalizzate. In questo capitolo vedrai come puoi creare un tuo file con le impostazioni personalizzate.  

ATTENZIONE! Questo è un argomento avanzato ... considerati avvisato!  

Introduzione all'XML
-------------------

Per poter creare un tuo menù personalizzato delle impostazioni, dobbiamo prima capire un linguaggio chiamato XML. Se hai già familiarità con XML puoi tranquillamente saltare alla prossima sezione.  

XML, che sta per "Linguaggio di Mark-up Estensibile" (Extensible Mark-up Language), è un linguaggio simile all'HTML. La differenza chiave è che l'XML è progettato per il trasporto dei dati, non per la sua visualizzazione. Molte applicazioni su internet utilizzano l'XML per trasmettere dati, inclusa OpenStreetMap. L'XML usa elementi, e ciascun elemento può contenere elementi "figli" al suo interno. Ad esempio immaginiamo di voler creare un file XML che contiene i dati riguardanti il menu di un ristorante. Dovremo creare un elemento radice (root element) che contiene tutti i dati riguardanti il menu. Il nostro elemento radice avrà un'etichetta (tag) di apertura ed una di chiusura, come questa:

      <menu>
      ... dati che vogliamo includere nel nostro menu ...
      </menu>

Le informazioni sono contenute all'interno di un elemento, e all'interno di ciascun elemento possono esserci altri elementi.  

      <menu>
        <item name=“Hamburger”>
          <cost>400</cost>
          <description>Delizioso tortino di manzo</description>
        </item>
          <item name=“Nasi Goreng”>
          <cost>200</cost>
          <description>Riso fritto indonesiano</description>
        </item>
      </menu>

In questo esempio abbiamo inserito due &lt;item&gt; all'interno del nostro elemento &lt;menu&gt; per descrivere due differenti item che sono contenuti nel menu. Ciascun item contiene due o più elementi all'interno, &lt;cost&gt; e &lt;description&gt;. Nota anche come abbiamo scritto name=”Hamburger” all'interno dell'etichetta (tag) di apertura &lt;item&gt;. Questo è chiamato attributo, ed aggiunge informazioni riguardanti l'elemento.


### Terminologia XML

- **root element:** l'elemento più esterno di un documento XML, che descrive il contenuto del documento  
- **element:** un oggetto XML, contenuto tra etichetta (tag) di apertura e di chiusura, tipo &lt;item&gt; ... data ... &lt;/item&gt;  
- **tag:** qualcosa contenuto tra parentesi, come &lt;item&gt;. &lt;item&gt; è l'etichetta (tag) di apertura di un elemento, e &lt;/item&gt; è quella di chiusura. Da non confondere con i tags OSM, che hanno un significato differente.  
- **attribute:** un pezzo di informazione contenuto all'interno di un'etichetta (tag), come name=“Hamburger”  

L'utilizzo dell'XML per contenere e trasmettere dati è una grande cosa, perchè è semplice da capire per i computer.  


File delle preimpostazioni di JOSM
-------------------

Vediamo come aggiungere un file di preimpostazioni d'esempio in JOSM ed analizziamo come funziona.  

- Scarica il file [sample_presets.xml](/files/sample_presets.xml).  
- Poi caricalo in JOSM come descritto nel  [capitolo precedente](/it/josm/josm-presets).  
- Crea un nuovo layer ed un nuovo oggetto.  
- Vai nel menu preimpostazioni. Troverai un nuovo item nominato "Sample Building." Cliccaci sopra.  

![sample building menu][]

È possibile notare che il modulo che appare ha tre campi, ciascuno dei quali accetta un tipo differente di input. Il primo campo, building name, accetta una stringa di testo in input. Il secondo, building use, ha un menu a discesa. Il campo finale è una casella di spunta, che significa che può avere solo uno dei due valori "on" oppure "off".

![sample presets form][]

Ora diamo un'occhiata al file XML che definisce il modulo di preimpostazione.

- Trova il file XML nel tuo computer e aprilo con un editor di testi. Se stai usando Windows puoi usare il programma Notepad. Se desideri un editor più facile da usare, puoi scaricare l'applicazione gratuita Notepad++.  
- Il file **sample_presets.xml** si presenta così:  

![sample presets file][]

Per ora ignoriamo le prime sei linee e quella finale, e focalizziamoci su tutto quello che c'è tra le etichette (tags) &lt;item&gt;.

Le prima linea si presenta così:

      <item name="Sample Building" type="node,closedway">

Questa è l'etichetta (tag) di apertura di un item che è stato aggiunto al menu. Ha due attributi, name e type. L'attributo name definisce come questo apparirà nel menu preimpostazioni. L'attributo type limita questa preimpostazione a specifici tipi di oggetti. In questo caso la preimpostazione può essere applicata solamente a punti e sagome - in altre parole, nodi e percorsi chiusi. Se provassimo ad applicare questa preimpostazione ad una linea, non funzionerà.  

Diamo un'occhiata alla linea successiva:  

      <label text="Building Form" />

Cliccando sul menu e aprendo il modulo di esempio, in alto è possibile vedere il testo "Building Form." Questo è il testo definito da questa linea. Questo definisce l'elemento &lt;label&gt;, che visualizza semplicemente un testo nel modulo. Il testo è definito dall'attributo *text="some text"*.  

Alcune linee più in basso troviamo questo:  

      <key key="building" value="yes" />

Questa è una delle etichette (tags) che verranno applicate all'oggetto selezionato. Visto che utilizza l'elemento &lt;key&gt;, l'etichetta qui inserita verrà automaticamente applicata non appena la preimpostazione verrà selezionata. Quindi l'oggetto otterrà automaticamente l'etichetta (tag) *building=yes*.  

La linea seguente è un po' diversa, usando l'elemento &lt;text&gt;.  

      <text key="name" text="Name of Building" default="" delete_if_empty="true" />

The &lt;text&gt; element creates a blank field. When the form is created in JOSM, the user will be able to fill in the empty field. Because the attribute *delete_if_empty="true"* is set, no tag will be added if the user leaves this field empty.  

The dropdown box on the form is defined in the following line:  

      <combo key="building:use" text="Building Use" values="residential, commercial, industrial" display_values="Residential, Commercial, Industrial"/>

A dropdown box is defined by the &lt;combo&gt; element. As with the &lt;text&gt; element, the attribute *key* defines the tag key. The value is then chosen from a list of possible *values*. The *display_values* attribute allows you to choose different names to be displayed in the dropdown box, which may be easier to understand than the OSM tag values.  

Lastly, let's look at the line which defines the checkbox.  

      <check key="building:vacant" text="Is the building vacant?" default="off" delete_if_empty="true" />

The &lt;check&gt; element defines - you guessed it! - the checkbox. The attribute *default="off"* states that the box will be unchecked by default. The remaining attributes you have already seen.  

Creating Your Own Presets File
------------------------------

The best way to create your own presets file is to take one that already exists, and manipulate it fulfill your objectives.  Feel free to edit this sample file and experiment with it to learn the basics. Just remember that each time you save it, you will need to restart JOSM to load the changes.  

Before you start creating your own presets, you need to think carefully about the tags that you will use. Inventing new tags is another topic altogether. Generally, you should utilize existing OSM tags when they exist. Most existing tags are listed on the [Map Features page on the OSM Wiki](http://wiki.openstreetmap.org/wiki/Map_Features).  

This sample file contains most of the elements that you will find in a JOSM presets file - there aren't very many form elements. If you'd like to experiment with a more complex presets file, download the [dhaka_presets.xml](/files/dhaka_presets.xml) file here.  

Additionally, a detailed explanation of all possible elements can be found [here](http://josm.openstreetmap.de/wiki/TaggingPresets).  

Good luck!  


[sample building menu]: /images/josm/sample-building-menu.png
[sample presets form]: /images/josm/sample-presets-form.png
[sample presets file]: /images/josm/sample-presets-file.png