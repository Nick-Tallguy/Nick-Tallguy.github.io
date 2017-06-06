---
layout: doc
title: iD Editor
permalink: /sq/beginner/id-editor/
lang: sq
category: beginner
---

iD Editor
=============

> Kjo guidë mund të shkarkohet si [beginner_id-editor_sq.odt](/files/beginner_id-editor_sq.odt) ose [beginner_id-editor_sq.pdf](/files/beginner_id-editor_sq.pdf)  
> Rishikuar 2016-03-30  

- TOC
{:toc}

iD Editor është de fakto editori OpenStreetMap në versionin web. iD është i shpejtë dhe i lehtë për tu përdorur dhe lejon vënien e informacioneve në hartë nga burime të ndryshme të të dhënave si satelitët dhe imazhet ajrore, GPS, Field Papers ose Mapillary.  

iD Editor është një mënyrë e shkëlqyer për të edituar për ndyshime të vogla dhe të shpejta të cilat nuk kërkojnë veçoritë e shkëlqyera të JOSM (një editor më i avancuar për krijimin e hartave). Ky kapitull demostron bazat e editimit me iD.  

Fillimi në iD Editor
----------------------

-⇥iD editor kërkon një lidhje aktive në Internet.  
-⇥Hapni shfletuesin tuaj të Internetit dhe shkoni në faqen e OpenStreetMap në [http://www.openstreetmap.org](http://www.openstreetmap.org).  
-⇥**Login** duke përdorur llogarinë tuaj në OpenStreetMap  
-⇥Panoramoje dhe zmadhoje hartën në zonën që ju doni të editoni. Ju mund ta panoramoni duke mbajtur shtypur butonin e majtë të mausit dhe ta tërhiqni hartën në zonën e dëshiruar.  
-⇥Klikoni në shigjetën e vogël ngjitur me **Edit**. Pastaj klikoni **Edit with iD (in-browser editor)**.  

![image1][]


Ndërfaqja me përdoruesin e iD Editor
-------------------------
![image2][]

1. **Paneli i Editimit të Cilësive:** Ky panel tregon etiketat për objektin e përzgjedhur në hartë.   
	Ju mund të shtoni apo redaktoni etiketat të quajturat 'tags' nga ky panel.  
2. **Mjetet:** Ky panel tregon mjetet kryesore të editimit:  
    Vizato pikë (node), *shkurtimisht butoni* **1** ![image3][]{:height="24px"}  
    Vizato vijë (way), *shkurtimisht butoni* **2** ![image4][]{: height="24px"}  
    Vizato formë (polygon), *shkurtimisht butoni* **3** ![image5][]{: height="24px"}  
    Kthehu pas, *shkurtimisht butonat* **Ctrl+z** ![image6][]{: height="24px"}  
    Ribëje, *shkrutimisht butonat* **Ctrl+y** ![image7][]{: height="24px"}  
    Ruaj ndryshimet, *shkurtimisht butonat* **Ctrl+s** ![image8][]{: height="24px"}  
3. **Paneli i hartës:** Ky panel tregon funksione të ndryshme të konfigurimit:  
    Zmadhoni, *shkurtimisht butoni* **+** ![image9][]{: height="24px"}  
    Zvogëloni, *shkurtimisht butoni* **-** ![image10][]{: height="24px"}  
    Shkoni tek vendodhja juaj ![image11][]{: height="24px"}  
    Konfiguroni shtresën e sfondit, *shkurtimisht butoni* **b** ![image12][]{: height="24px"}  
    Të dhënat e hartës, *shkurtimisht butoni* **f** ![Map Data][]{: height="24px"}  
    Hap menunë e ndihmës, *shkurtimisht butoni* **h** ![image13][]{: height="24px"}  
4. **Paneli i informacionit:** Ky panel shfaq të dhëna të ndryshme, si shiritin e shkallëzimit dhe cilët përdorues kanë kontribuar në atë zonë.  

Konfigurimi i shtresës së sfondit
--------------------------------

Klikoni ikonën për **Cilësimet e sfondit** ose përdorni *shkurtimisht butonin* **b**.![image14][]{: height="24px"}  
![image15][]  
Për të ndryshuar **nivelin e ndriçimit** klikoni në një nga kutitë, nivelet janë 100%, 75%, 50% dhe 25% ![image16][]{: height="24px"}  
Gjithashtu mund të **ndryshoni shtresën e sfondit** bazuar në dëshirën tuaj për secilën pllakë të mundësuar, ku bëhet fjalë për të quajtuar 'tiles' (paraprakisht është Bing Aerial Imagery).  

Ju mund të shtoni pllakt tuaja në hartë duke klikuar në **Custom**. Për shembull, nvse ju doni të **shtoni një Field Paper** [^fieldpaper], klikoni **Custom** pastaj klikoni në ikonën e lupës zmadhuese (search) për të hapur dritaren pasardhëse:  
![image17][]   
dhe vendosni **FieldPaper snapshot URL** që keni, e cila do të jetë diçka si kjo: <http://fieldpapers.org/snapshot.php?id=cqhmf2v9#18/37.80593/-122.22715>   
Për të **shfaqur GPS tracks nga kompjuteri juaj** (formati GPX), mereni dhe vendoseni skedarin GPX në iD editor.  
Për të aktivizuar **OpenStreetMap GPS traces** klikoni në kutinë. Në imazhin më poshtë, gjurmimet GPS publike janë të shfaqura në ngjyra të ndryshme, duke treguar drejtimin e udhëtimit.   
![osm gps traces][]  
Nëse aty ka [imazheri offset](/sq/josm/aerial-imagery), ju mund ta **korigjoni mënjanimin e imazherisë** duke klikuar **Fix Alignment**. ![image18][]  

- Klikoni butonin e navigimit për të lëvizur imazherinë. Klinoni butonin e reset-imit për tu kthyer në pozicionin fillestar. ![image20][]  

Editime Themelore me iD  
----------------------  

### Shtim i Pikave  

Për të shtuar një pikë të re, klikoni në buttonin **Point**. ![image3][]{: height="24px"}  

- Kursori i mausit tuaj do të ndryshojë në shenjën e plusit (+). Tashmë, klikoni në pozicionin që ju dini për të shënjuar një lokacion. Për shembull, nëse ju dini që është një spital pranë zonës suaj, klikoni në vendin ku ndodhet ndërtesa e spitalit.  
![image21][]  
- Vini re se një pikë e re është shtuar. Në të njëjtën kohë, paneli në të majtë do të ndryshojë duke shfaqur një formë ku ju mund të zgjidhni atributet për objektin e krijuar. Klikoni **Hospital Grounds** për ta etiketuar pikën si spital.  
![image22][]  
- Ju mund ta përdorni formën për të vendosur informacion të detajuar për pikën tuaj. Ju mund të plotësoni emrin, adresën apo dhe informacione të tjera shtesë për spitalin. Vëreni se secila veçori do të ketë opsione të ndryshme, në varësi të etiketës që ju zgjidhni nga paneli i veçorive (features).  
- Nëse ju bëni një gabim, si një vendodhje të gabuar, ju mund ta zhvendosni pikën tuaj tek një vendodhje e re duke mbajtur butonin e majtë të mausit shtypur tek pika dhe duke e zvarritur atë. Ose nëse ju doni të fshini pikën tuaj, klikoni me butonin e majtë të mausit tek pika dhe më pas klikoni ikonën e cila ka simbolin e koshit të plehrave. ![image23][]{: height="24px"}  
Një "pikë" e krijuar në iD editor është aktualisht një "nyje" e vetme me një set "etiketash" në të.  

### Vizatimi i vijave  

Për të shtuar një vijë të re, klikoni në butonin **Line**. ![image4][]{: height="24px"}  

- Kursori i mausit tuaj do të ndryshojë në shenjën e plusit (+). Gjeni një rrugë e cila nuk është vendosur në hartë dhe gjurmojeni atë. Klikoni një herë në pikën ku segmenti i rrugës fillon, lëvizni mausin tuaj dhe klikoni për të shtuar pika përgjatë segmentit. Klikoni dy herë për të përfunduar procesin e vizatimit. Vini re panelin në të majtë.  
![image24][]  
- Ashtu se me pikën, përzgjidhni etiketat e përshtatshme për vijën tuaj.  
- Ju mund të tërhiqni pikat nga vija duke klikuar me të majtën e mausit në një pikë dhe duke e zvarritur atë.  
- Ju gjithashtu mund të lëvizni të tërë vijën duke e selektuar atë dhe përzgjidhni **Move tool**. Pastaj tërhiqeni vijën në një pozicion të ri. ![image30][]{: height="24px"}  
- Kur ju klikoni me të majtën e mausit në një pikë individuale (nyje) të vijës, ju do të shihni këto mjete:  
- Fshijeni pikën nga vija. ![image23][]{: height="24px"}  
- Shkëputeni pikën nga vija. ![image26][]{: height="24px"}  
- Ndajeni vijën në dy të tilla nga pika që keni përzgjedhur. ![image27][]{: height="24px"}  
- Kur klikoni me të djathtën e mausit në një vijë (por jo pikë), do të shihni këto mjete:  
- Fshijeni vijën. ![image23][]{: height="24px"}  
- Krijoni një rreth nga një vijë (aktive vetëm nëse vija është e mbyllur) ![image29][]{: height="24px"}  
- Zhvendoseni vijën ![image30][]{: height="24px"}  
- Formoni një model katrori nga një vijë (aktive vetëm nëse vija është e mbyllur) ![image31][]{: height="24px"}  
- Ndryshoni drejtimin e vijës (e mirë për lumenjtë & rrugët me një drejtim) ![image32][]{: height="24px"}  

Një "vijë" e krijuar në iD editor është aktualisht një "rrugë"" me "etiketa" në të.

> Një shënim që duhet konsideruar rreth **Fshirjes**: Në përgjithësi duhet ti shmangni fshirjen e objekteve të krijuara nga njerëz të tjerë nëse ka nevojë vetëm për përmirësim. Ju mund të fshini gabimet tuaja, por duhet të përpiqeni të *rregulloni* objektet e hartëzuara nga njerëz të tjerë nëse kanë nevojë për ndryshime. Kjo mënyrë ruan historinë e artikujve në databazën e OSM dhe respekton shokët e tjerë hartëzues. Nëse  ju mendoni vërtet se një objekt duhet fshirë, konsideroni të pyesni personin i cili e krijoi atë ose një nga listat e email-eve të OSM më parë.

### Vizatim i formave (Poligonet)

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