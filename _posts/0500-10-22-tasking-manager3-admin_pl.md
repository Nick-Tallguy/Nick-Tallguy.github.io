---
layout: doc
title: Tworzenie projektu w Tasking Managerze 3
permalink: /pl/coordination/tasking-manager3-project-admin/
lang: pl
category: coordination
---

# OSM Tasking Manager - Tworzenie projektu i administrowanie nim

> Ten przewodnik może zostać pobrany jako samodzielny moduł: [tasking-manager3-admin_pl.odt](/files/tasking-manager3-admin_pl.odt) lub [tasking-manager3-admin_pl.pdf](/files/tasking-manager3-admin_pl.pdf) 

**Ten przewodnik opisuje aktualną wersję Tasking Managera. Jeżeli interfejs użytkownika wersji, którą używasz jest inny od opisanego tutaj, powinieneś spojrzeć na [podręcznik do poprzedniej wersji](/en/coordination/tasking-manager-project-admin)**

Spis treści działu
-------------
-  [Logowanie się](/pl/coordination/tasking-manager3-project-admin/#logging-in-&amp;amp;-access-levels)  
-  [Zainicjuj nowy projekt - zdefiniuj obszar zainteresowania](/pl/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)  
-  [Tworzenie zadania - podziel obszar zainteresowania](/pl/coordination/tasking-manager3-project-admin/#initiate-a-new-project-within-tm3)
-  [Utwórz projekt - określ, co Twoi użytkownicy powinni wiedzieć](/pl/coordination/tasking-manager3-project-admin/#create-the-project)
    -  [Opis - pierwsza rzecz, której użytkownicy dowiadują się o Twoim projekcie](/pl/coordination/tasking-manager3-project-admin/#description)
    -  [Wskazówki - co użytkownicy powinni zrobić](/pl/coordination/tasking-manager3-project-admin/#instructions)
    -  [Metadane - do czego należy projekt](/pl/coordination/tasking-manager3-project-admin/#metadata)
    -  [Obszary priorytetowe - gdzie użytkownicy powinni zacząć mapowanie](/pl/coordination/tasking-manager3-project-admin/#priority-areas)
    -  [Podkład - baza do mapowania](/pl/coordination/tasking-manager3-project-admin/#imagery)
    -  [Uprawnienia - kto jest dopuszczony do mapowania i weryfikowania](/pl/coordination/tasking-manager3-project-admin/#permissions)
    -  [Użyteczne wskazówki - jak powinieneś wypełnić te wszystkie pola](/pl/coordination/tasking-manager3-project-admin/#instruction-notes)
    -  [Opublikuj - nie zapomnij, albo nigdy nie będziesz miał skończonej pracy](/pl/coordination/tasking-manager3-project-admin/#proofread-and-publish)

OpenStreetMap Tasking Manager jest niezbędny do przeprowadzania mapathonów, zarządzania aktywacjami HOT lub tworzenia zadań mapowania dla uczniów. Tasking Manager dzieli pracę na łatwe do opanowania geograficznie kawałki, które zmniejszają konflikty edycyjne, zwłaszcza przy dużej liczbie rozproszonych maperów. Tasking Manager wspiera również dokładność mapowania i jakość danych poprzez dostarczanie zwięzłych zestawów instrukcji dla maperów (np. 'zmapuj wszystkie drogi i budynki'). W skrócie, Tasking Manager jest tym, co kieruje pracami przy otwartych działaniach mapowania. Ten moduł opisuje podstawy administracji OSM Tasking Managera dla udanych wydarzeń mapowania. 

 Ten przewodnik jest napisany zwłaszcza dla tych osób, które potrzebują wskazówek o administracji w OSM Tasking Managerze, w tym o tworzeniu i modyfikowaniu projektów mapowania dla otwartych wydarzeń mapowania, np. 'mapathonów'. Ten przewodnik ma zastosowanie konkretnie do instancji OSM Tasking Managera w wersji 3, w tym [HOT Tasking Manager](http://tasks.hotosm.org) i [TeachOSM Tasking Manager](http://tasks.teachosm.org).

 HOT lub OSM Tasking Manager wersja 3 jest często określany jako **TM3,** jako skrót od Tasking Manager, wersja 3.

## Logowanie się i poziomy dostepu

Pierwszą rzeczą jest zrozumienie poziomów dostępu. Każdy dostęp do TM3 jest autoryzowany poprzez [stronę OpenStreetMap](https://www.openstreetmap.org). Aby uzyskać dostęp do TM3 potrzebujesz konta OpenStreetMap (OSM). Jeżeli masz już to konto, odwiedź [Tasking Manager](http://tasks.hotosm.org) i kliknij **Zaloguj do OpenStreetMap**, co przekieruje Cię z powrotem na stronę OSM, gdzie możesz autoryzować Tasking Managera, aby miał ograniczony dostęp do Twojego konta OSM. 

### Poziomy dostępu w OSM Tasking Managerze

OSM Tasking Manager ma trzy poziomy dostępu użytkownika:
-  **Użytkownik** - Najbardziej podstawowy poziom. Użytkownik może się zalogować do TM3 i używać jego funkcji do znalezienia i wybrania projektu mapowania do pracy. Ten poziom użytkowania jest w pełni opisany w [Przewodniku OSM Tasking Manager w LearnOSM](/pl/coordination/tasking-manager-3/). Zauważ, że niektóre projekty takie, jak będące w stanie szkicu (np. nieopublikowane) są niewidoczne dla użytkowników.  
-  **Menadżer projektu** - Menadżerowie projektów mają dostęp do tworzenia i aktualizowania projektów w TM3.  
-  **Administrator** - Administratorzy mają dostęp umożliwiający im zarządzanie poziomami dostępu użytkowników w TM3.

Potrzebujesz poziomu dostępu Menadżer projektu, aby tworzyć nowe projekty przy użyciu TM3.

## Zainicjuj nowy projekt w TM3 

![TM New][]

Kliknij swoją nazwę użytkownika w prawym górnym rogu, a następnie **Utwórz nowy projekt.** Możesz wybrać pomiędzy rysowaniem obszaru zainteresowania (AOI) na mapie, a zaimportowaniem obszaru zainteresowania z pliku geojson;  

> Importowanie pliku ze zdefiniowanym obszarem jest zawsze preferowane przed ręcznym rysowaniem projektu Tasking Managera. Narzędzia takie, jak JOSM, QGIS, itd. mogą być użyte do utworzenia plików do zaimportowania w Tasking Managerze. Sugerowana ścieżka, to utworzenie pliku .osm z AOI przy użyciu JOSM i wygenerowanie przez http://geojson.io/ pliku GeoJSON.

### Wyrysuj obszar zainteresowania do zmapowania

1. Kliknij przycisk 'Rysuj' w prawym górnym rogu.
2. Aby narysować wielokąt przestawiający AOI na mapie przytrzymaj prawy przycisk myszy i przesuwaj mapę bez klikania, co doda węzeł. Wielokąt powinien ściśle obramować obszar zainteresowania. Zaoszczędzi to czas na uzupełnianie kafelków, które są nieistotne (np. ocean, las)  
3. Kliknij na punkcie początkowym, aby ukończyć wielokąt  
4. Po skończeniu wielokąta możesz przesuwać węzły lub dodawać nowe, aby otrzymać dokładnie taki obszar, jaki chcesz.

lub

### Prześlij plik GeoJSON lub KML z obszarem zainteresowania do zmapowania  

1. Kliknij przycisk "Importuj",  
2. W oknie przesyłania przejdź do swojego pliku,  
3. Kliknij nazwę pliku, aby go podświetlić i kliknij 'Otwórz'.  
4. Zaimportowane obszary zainteresowania nie mogą być edytowane.


## Tworzenie zadania

AOI projektu jest dużym obszarem do zmapowania. Obszar ten jest podzielony na mniejsze kawałki nazywane zadaniami. 

AOI określony poprzez przesłanie pliku lub ręczne rysowanie pojawi się na mapie, a wtedy zostaniesz poproszony o wybranie sposobu podzielenia go na indywidualne zadania. Są na to dwie możliwości:  

1. Kwadratowa siatka - Tasking Manager podzieli równomiernie cały obszar projektu na kwadraty o takich samych wymiarach. Jest to zazwyczaj dobry pomysł dla ogólnych projektów wspólnego mapowania.
2. Dowolne geometrie - Jeżeli wgrywasz plik określający obszar Twojego projektu, możesz również w nim zawrzeć kształty poszczególnych zadań. Mogą pojawić się specjalne potrzeby, żeby tworzyć zadania o nieregularnych kształtach. Na przykład projekt importu dróg może wymagać dopasowanych kształtów zadań lub powstaną one w wyniku procesu redukcji AOI.

### Używanie kwadratowej siatki do zadań w kwadratch

Aby utworzyć jednolite kwadratowe kafelki, wybierz opcję Kwadratowa siatka.  

![TM Tile Sizes][]

AOI jest automatycznie dzielony na siatkę komórek, a każda komórka staje się zadaniem. Określ optymalny rozmiar kafelków używając przycisków "Większe" i "Mniejsze", aby dopasować je do rozmiarów zadań. Mniejszy rozmiar kafelków oznacza więcej zadań. Optymalny rozmiar kafelków zależy jednocześnie od wielkości obszaru (twórz mniejsze kafelki dla dużych projektów) i liczby obiektów, które powinny być zmapowane w każdym z nich. Generalnie rzecz biorąc, im większy jest AOI i/lub liczba pożądanych obiektów, tym mniejsze powinny być kafelki. 

Zauważ, że **przy określaniu rozmiaru kwadratów zadań jest dostępnych do użycia wiele warstw mapy**. Przycisk w prawym dolnym rogu mapy dostarcza listę opcji dla warstw mapy. Prawdopodobnie najlepszą opcją jest wybranie jednego z podkładów, ponieważ pozwala Ci zobaczyć aktualny obraz tego, co będzie mapowane.

Jeżeli masz własny podkład dla projektu, możesz go również załadować używając przycisku w prawym górnym rogu mapy i podając url do TMS lub WMS.

Możesz także utworzyć zadania w kilku różnych rozmiarach używając narzędzi "Podziel". Kwadraty zadań mogą być dzielone wiele razy. Ponownie, użycie warstwy podkładu pomoże Ci zdecydować, gdzie zadanie wymaga podzielenia. Przycisk "Resetuj" zresetuje wszystkie podzielone zadania. Opcja Podziel (wielokąt) pozawala narysować wielokąt nad obszarem, aby utworzyć mniejsze zadania, a Podziel (punkt) pozwala wybrać pojedyncze zadania do podziału. Przycisk Reset usuwa wszystkie Twoje niestandardowe podziały.

> Ogólnie, powinieneś używać mniejszych kafelków nad gęsto zabudowanymi obszarami mieszkalnymi. Celem powinno być utworzenie zadań, które da się wykonać w 10-15 minut.

***Rozważania przed podjęciem decyzji o rozmiarze kafelków***

-  Całkiem nowy maper na mapathonie mapuje obszar około cztery razy wolniej niż doświadczony (wielu zaczyna dużo wolniej, ale wkrótce przyspiesza). 
-  Nowy maper uważa, że trudno jest znaleźć na podkładzie satelitarnym obiekty, które inni dostrzegają. Znajdowanie okrągłych chat krytych strzechą na obszarze okrągłych krzaków jest trudnym procesem uczenia się dla 'nowicjusza'.
-  Nowy maper uważa również, że wiele obiektów trudno jest odwzorować, jak np. budynki.
-  Później w tym procesie masz możliwość 'podzielenia' maperowi kwadratu - podzielenie go na mniejsze kwadraciki pomoże uzyskać nowemu maperowi taki rozmiar, z którym sobie poradzi.  
-  Częściami kwadratu, które sprawiają największe problemy są krawędzie i narożniki. Dlatego też mniejsze kwadraty oznaczają więcej rogów i krawędzi, co w efekcie daje duplikaty lub brakujące obiekty. Więc jest to kompromis pomiędzy tym, jakie małe zrobisz kwadraty, by ułatwić pracę nowym maperom, a wzrostem błędów z powodu dużej liczby krawędzi i narożników.
-  Kwadrat może zostać podzielony, ale nie ma możliwości połączenia kwadratów z powrotem, aby je powiększyć. Bądź uważny przy dzieleniu.
-  **Wniosek** Spróbuj samemu zmapować obszar projektu, aby zobaczyć, czy będzie łatwo i z jakie napotkasz problemy. Pomoże Ci to zdecydować o optymalnym rozmiarze kwadratu. Dopuszczaj dzielenie, ale nie bez końca - niektórzy nowi maperzy dzielą kwadraty tak długo, aż są na tyle małe, że stają się ekstremalnie trudne do mapowania.  

Po ustaleniu rozmiaru zadań, kliknij "Dalej".

### Dowolne geometrie

Jeżeli przesyłasz plik do określenia obszaru projektu, to może on dodatkowo zawierać informacje o dokładnych kształtach, jakie chcesz, aby miały indywidualne zadania. Jeżeli AOI zawiera jeden wielokąt, projekt będzie miał tylko jedno zadanie. Generalnie nie używa się tego, ale jest przydatne w konkretnych potrzebach.

Dowolne geometrie nie mogą być dzielone.

### Przycinanie obszaru projektu

Po określeniu rozmiarów zadań możesz skorzystać z opcji "Przytnij" Twój AOI. Możesz przyciąć AOI zarówno do dokładnego kształtu wielokąta, który narysowałeś lub zaimportowałeś (polecane), jak i do najbliższego kwadratu, który zawiera Twój AOI.

Po zakończeniu przycinania AOI, kliknij "Dalej".

## Utwórz projekt

Nadaj projektowi tytuł (może być edytowany na następnym ekranie) i kliknij "Utwórz"

To założy projekt w Tasking Managerze i otworzy ekran, na którym będziesz mógł podać opis, wskazówki i inne informacje o projekcie. Pamiętaj, że nie możesz tego lekceważyć. Spora część maperów (w wielu przypadkach większość) nie będzie miała wcześniejszego doświadczenia z OpenStreetMap i/lub HOT, więc nie będą zaznajomieni z wytycznymi dotyczącymi tagowania. Jest bardzo ważne, żeby cele projektu są jasno określone i wszystko, co maperzy powinni wziąć pod uwagę jest przedstawione tutaj. Często zaleca się, aby umieścić w projekcie jedną klasę obiektów do zmapowania. Jeżeli potrzebujesz podstawowej mapy obszaru, lepiej jest podzielić to na kilka projektów: jeden dla dróg, jeden dla budynków, itd. Wtedy początkujący będą mogli skupić się na małej klasie obiektów w czasie nauki prawidłowego mapowania. W przeciwnym wypadku możesz zostać z mnóstwem kafelków, które zawierają po trochu wszystkiego, ale nic rzeczywiście kompletnego.

Po utworzeniu projektu, będziesz mógł edytować wszystkie powiązane z nim ustawienia:

- Opis - Używany do wyświetlenia na liście i informacji motywujących maperów
- Wskazówki - Szczegółowe wskazówki co i jak mapować, potrzebne obiekty/wystąpienia/cechy
- Metadane - Dodatkowe informacje używane do kategoryzowania projektu. Często używane przy filtrowaniu całej listy projektów.
- Podkład - Miejsce do wprowadzenia adresu URL TMS i wymaganej licencji.
- Obszary priorytetowe - Pozwala określić części projektu, które powinny być zmapowane jako pierwsze.
- Uprawnienia - Pozwala Ci ograniczyć dostęp do mapowania i weryfikowania projektu.
- Ustawienia - Termin realizacji projektu i szablon JOSM.
- Akcje - Wyślij wiadomości do twórców, weryfikuj i odrzucaj cały projekt jednym kliknięciem.

### Opis

![TM Description][]

Ten ekran pozwala Ci ustawić priorytet projektu, jego status jako szkic, opublikowany lub zarchiwizowany, krótki opis używany na liście projektów i długi opis dostępny po wybraniu projektu przez mapera.

Zarówno krótki, jak i długi opis powinny zawierać informacje o tym dlaczego projekt istnieje, kto będzie używał danych i spodziewany wpływ, jaki będzie miało mapowanie. Te pola wspierają formatowanie Markdown oraz mogą zawierać obrazy i filmy.

### Wskazówki

![TM Instructions][]

**Wystąpienia do zmapowania** - Lista obiektów, które chcesz, aby użytkownicy zmapowali. Ogólnie, im mniej obiektów tym lepiej, jako że łatwiej o ukończenie.

> Projekty, które wymagają zmapowania wielu wystąpień są trudne dla maperów i trudne do zweryfikowania. Zajmują więcej czasu, aby uzyskać z nich dobry zestaw danych. Rozmiar zadań też ma wpływ na wydajność przy różnych typach mapowania, np. budynki wymagają mniejszych kwadratów zadań, drogi i rzeki większych. Tworzenie wielu projektów na tym samym obszarze, osobno dla budynków i dla obiektów liniowych, jest najlepszą praktyką.

**Komentarz zestawu zmian** - To jest domyślny komentarz zestawu zmian, który zostanie dodany do wszystkich danych wysyłanych do OSM. Zazwyczaj zawiera coś, co określa, na jakim Tasking Managerze znajduje się projekt i obiekty, które zostały zmapowane. Jest zazwyczaj używany do "hasztagów", aby pomóc zidentyfikować potrzebującą organizację i/lub mapujących. Może też opisywać, co zostało zmapowane, np. "Mapowanie budynków".

> Użytkownicy powinni być poinstruowani, aby wypełniać sensownie komentarze o tym, co zmapowali, ale pomaganie im odpowiednim komentarzem domyślnym jest zawsze dobrym pomysłem.

**Szczegółowe wskazówki** - To jest miejsce, gdzie znajdzie się większość Twoich szczegółowych wskazówek, które, mamy nadzieję, każdy maper i weryfikator przeczyta dokładnie i będzie ich przestrzegał.

Zobacz poniższe uwagi o tworzeniu dobrych wskazówek.

**Instrukcje na zadanie** - To będzie wyświetlone, kiedy maper wybierze zadanie, a także ma specjalną funkcję, która pozwala na tworzenie specyficznych dla zadania adresów URL bazujących na współrzędnych x, y, z "uproszczonej mapy".

### Metadane

![TM Metadata][]

> Wszystkie te pola powinny być wypełnione i będą wymagane w przyszłych wersjach TM3.

**Poziom mapera** - To jest wskaźnik trudności projektu mapowania. Są 3 opcje do wyboru początkujący, pośredni i zaawansowany. To ustawienie wskazuje maperowi, jaki poziom doświadczenia powinien mieć, aby pomyślnie ukończyć projekt mapowania. Może być używany w filtrowaniu listy projektów, a na ekranie uprawnień można określić sugerowany poziom, który może być wymagany.

**Rodzaj mapowania** - Używany w filtrowaniu listy projektów i pomaga maperom znaleźć projekty, jakie lubią mapować.

**Organizacja** - Pozwala Ci określić organizację, która będzie używać zmapowanych danych. Używane w filtrowaniu projektów.

**Kampania** - To pozwala Ci połączyć projekt z innymi, które są częścią większego wysiłku mapowania. Używane w filtrowaniu listy projektów.

### Obszary priorytetowe

![TM Priority Area][]

Use the provided tools to draw areas that should be mapped first. You can have multiple priority areas for a Project. You can also change priority areas at any time.

> During disaster mapping, early in the event, having a large project AoI and using priority areas to focus mapping as new information comes in is a best practice.

### Obrazowanie

URL Field - A field that takes a TMS URL that will passed automatically to the OSM Editor the mapper or validator uses. Please follow the example, it is very important it is formatted correctly to work in all editors.

License - Optionally, if there is a specific license required for the mapper to accept in using the imagery, you can select it here. If you need a licese that is not available, you can contact an administrator for the Tasking Manager installation and ask them to add it.

### Upoważnienia

![TM Permissions][]

Mapper Level - Allows you to require that a mapper is at the proper level to map on the project (Metadata screen above). Mapper levels can be set manually, but are automatically applied based on total changesets.

Require Validator Role - This allows you to require that people doing validation have been evaluated to be qualified validators. It is a peer review process to designate someone a Validator, Project Managers and existing Validators can mark any user as a qualified Validator.

Private Project - This restricts access to the Project to a list of Users. Users must have logged into the Tasking Manager at least once before they can be added to a project.

### Ustawienia

Domyślne ustawienia regionalne - Umożliwia ustawienie domyślnego języka instrukcji dla projektu.

### Działania

![TM Actions][]

Message All Contributors - Sends a Tasking Manager message to everyone who has marked a task complete or valid. It can be used to thank contributors and/or guide them to other projects in a portfolio/campaign. It should also be used before using either of the two Validate/Invalidate all Tasks options described below.

Validate all Tasks - This will mark all tasks to "Green" validated status, with the exception of tasks that have been marked as "Bad Imagery"

Invalidate all Tasks - This will mark all tasks to "Red" invalidated status, with the exception of tasks that have been marked as "Bad Imagery"

Delete Project - This will permanently delete the project from the Tasking Manager.

Clone Project - This will create a duplicate of the project except for the AoI which you will need to re-import or re-draw.

### Uwagi instrukcyjne

Please use plain language as your target audience may not consist of native English speakers.

1. The title of the project should already reveal what entities should be mapped. Prefer a title such as
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. The most important messages should appear on the instruction tab first to ensure they are read. This would include any special imagery to use instead of Bing. The first sentences could mention that it is not required to map every single house if the project is about roads and residential areas, for example. Or that it is required to map every house if the project is to be used for population density estimates. These are the messages that should also appear on the description tab.
3. Other points of clarification: If the project is suitable for mappers with a certain level of experience only. For example, the project uses imports or existing data should be realigned to GPS traces or some other imagery (cf. the previous section). Phrase it so that new mappers will feel invited contributing to other projects but understand that advanced techniques are required in this instance.
4. There are guidelines that cover common errors we see while validating. One example is Blake Girardot's compilation on [mapping in West Africa](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Use the link in the instructions and explain that adhering to these guidelines is required.
5. The definitive resource on tagging is the [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). For many HOT-related tasks the page on [tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa) is the proper specialization and highly recommended reading for every mapper. If your project must adhere to different tagging standards then write a similar page in the wiki and link it in your instructions.


### Considerations concerning Imagery

In most cases we use the "standard" Bing imagery. But there are situations where you might want to choose an alternative source:

1. Bing does not provide high-resolution coverage for your AoI.
2. Bing has considerable cloud cover in this area.
3. You need newer imagery for post-disaster evaluation.

If Bing does not prove adequate then Mapbox is the next choice. You should only look for other sources if neither of these two meet your requirements.

In such cases it is not sufficient to choose a license-compatible source and make it available through a WMS or TMS service. Your AoI has probably already been partially mapped using Bing or Mapbox imagery and there might be a noticeable offset between images. You must have a close look at various locations of your AoI and determine the offset between your imagery and previously mapped data. If the existing OSM data are offset with respect to your imagery but fit Bing imagery then we usually assume that Bing is the "gold standard" unless we have GPS traces which prove that this assumption is wrong.

If there is a constant offset between your imagery and Bing across the AoI then this might be corrected on the server so that images from various sources loaded in the editor match. If this is not possible, if the offset varies across the AoI or if existing data are aligned with various sources then it is time for plan B:

The important point is that you must develop a strategy for how to cope with these issues and provide detailed instructions to mappers and validators. We strongly suggest that you declare such a project "for experienced mappers only" and explain that experience in this case does not mean having mapped 200+ buildings but having already dealt with alignment issues and different imagery sources.

One possible strategy could include these steps:

1. Clearly state which imagery is to be considered the reference to which anything else should be aligned. In this case let us assume that the reference is Bing.
2. Make sure that all existing features which are also visible on Bing are aligned with Bing imagery, i.e. realign if necessary.
3. Align the alternative imagery to existing features (and thus to Bing) using the imagery offset function of the editor.
4. Add new features from the now correctly aligned alternative imagery.

It is important that step 3 is repeated for every task of the project and the individual task squares should not be too large because imagery offsets can vary considerably across an AoI, particularly if the terrain is not flat. Even imagery discontinuities may occur across a project - look out for them and advise the contributors of such a problem.

Here are some suggested bits of information which you might include in the project instructions:

- [general guidelines for various editors](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [an animated gif on imagery alignment in iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [the josm imagery alignment chapter in learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


### Proofread and Publish
Proofread the various tabs to ensure wording and formatting are correct, and instructions are clear. If you need to make changes or refinements to your project, click the ‘Edit’ link in the upper right hand corner of the page. 
If the project is ready for mapping, click the ‘Publish’ link. Once the project is published, it is available for mapping to anyone with an OSM account, unless a group of users was specified in the ‘Allowed Users’ tab, in which case only the allowed users would be able to work on it.  If necessary, edits can still be made to the project after publication by clicking on the ‘Edit’ link.

[TM Tile Sizes]: /images/coordination/tm3_tile_sizes.png
[TM New]: /images/coordination/tm3_create_new.png
[TM Description]: /images/coordination/tm3_description.png
[TM Instructions]: /images/coordination/tm3_instructions.png
[TM Metadata]: /images/coordination/tm3_metadata.png
[TM Priority Area]: /images/coordination/tm3_priority_area.png
[TM Permissions]: /images/coordination/tm3_permissions.png
[TM Actions]: /images/coordination/tm3_actions.png