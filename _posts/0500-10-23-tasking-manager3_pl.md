---
layout: doc
title: Tasking Manager 3
permalink: /pl/coordination/tasking-manager3/
lang: pl
category: coordination
---

# Tasking Manager 3

> Ten przewodnik może zostać pobrany jako [tasking-manager3_pl.odt](/files/tasking-manager3_pl.odt) lub [tasking-manager3_pl.pdf](/files/tasking-manager3_pl.pdf)  

**Ten przewodnik opisuje aktualną wersję Tasking Managera. Jeżeli interfejs użytkownika wersji, którą używasz jest inny od opisanego tutaj, powinieneś spojrzeć na [podręcznik do poprzedniej wersji](/pl/coordination/tasking-manager)**

Spis treści działu
-------------
-  [Przewodnik szybkiego startu](/pl/coordination/tasking-manager3/#quick-start-guide)  
-  [Proces mapowania](/pl/coordination/tasking-manager3/#mapping-process)  
    -  [Logowanie się](/pl/coordination/tasking-manager3/#tasking-manager-login)  
    -  [Opcje - ustawienia języka i profil użytkownika](/pl/coordination/tasking-manager3/#options-amp-links)  
    -  [Znajdowanie projektu - z listy i używając widoku mapy, szukanie i filtrowanie](/pl/coordination/tasking-manager3/#finding-a-project---tasking-manager-contribute-screen)  
    -  [Mapowanie zadania - wybieranie, praca nad i odblokowanie zadania](/pl/coordination/tasking-manager3/#mapping-via-the-tasking-manager) 
-  [Uzyskiwanie pomocy - na żywo i kontaktując się z administratorem projektu](/pl/coordination/tasking-manager3/#getting-help)  
-  [Podpowiedzi i wskazówki](/pl/coordination/tasking-manager3/#editing-hints-and-tips)
-  [Weryfikacja](/pl/coordination/tasking-manager3/#validation)

[HOT OSM Tasking Manager](http://tasks.hotosm.org) jest narzędziem, które koordynuje wielu ludzi mapujących określone obszary geograficzne w OpenStreetMap.

OpenStreetMap jest współtworzoną przez ludzi, wolną mapą świata. Każdy może wesprzeć OpenStreetMap przez mapowanie dowolnej części świata, która go interesuje. Tasking Manager jest tylko pomocą w koordynowaniu dużych grup ludzi tworzących OpenStreetMap, ale i tak większość wkładu do OpenStreetMap jest zrobiona przez ludzi nieużywających Tasking Managera.

Tasking Manager jest narzędziem całkowicie odrębnym od głównego projektu OpenStreetMap. Kiedy wspierasz OpenStreetMap używając Tasking Managera, tak na prawdę używasz wielu rozwiązań:

* OpenStreetMap - Baza danych informacji geograficznych
* Tasking Manager - Pomaga koordynować dużą liczbę ludzi edytujących dane OpenStreetMap w tym samym obszarze
* Edytor OpenStreetMap - Program, który potrafi czytać i zapisywać dane w bazie danych OpenStreetMap

![TM overview][]

Zadaniem Tasking Managera jest prezentować konkretne regiony geograficzne podzielone na małe, szybkie do zmapowania kawałki zwane "Zadaniami" i dostarczyć sposób na "sprawdzenie" lub "zablokowanie" jednego z tych małych obszarów, kiedy go mapujesz używając jednego ze standardowych edytorów OpenStreetMap. Poprzez "sprawdzanie" lub "blokowanie" jednego z tych małych obszarów, zapewniasz sobie, że nikt inny nie będzie mapował w tym samym czasie tego obszaru. Pomaga to zapobiegać "podwójnemu mapowaniu" lub innym błędom, kiedy dwie osoby pracują nad dokładnie tym samym obszarem w OpenStreetMap.

Kiedy skończysz mapowanie tego małego obszaru, zapisujesz w Tasking Managerze, że ukończyłeś mapowanie i możesz wybrać kolejne "Zadanie" z mapy.


## Przewodnik szybkiego startu

1. Utwórz konto i zaloguj się na http://openstreetmap.org/  
  ![TM Quick Start 1][]
2. Odwiedź stronę [http://tasks.hotosm.org/](http://tasks.hotosm.org/) i zaloguj się poprzez górny prawy narożnik  
  ![TM Quick Start 2][]
3. Kliknij "Wesprzyj" i znajdź projekt mapowania do pracy  
  ![TM Quick Start 3][]
4. Przeczytaj instrukcje dla projektu  
  ![TM Quick Start 4][]
5. Kliknij kartę "Mapa"  
  ![TM Quick Start 5][]
6. Znajdź "Gotowe" zadanie do pracy, kliknij na nim i wybierz "Rozpocznij mapowanie"  
  ![TM Quick Start 6][]
7. Zostaniesz przeniesiony do edytora OpenStreetMap, zmapuj wszystkie obiekty wskazane w instrukcjach.  
  ![TM Quick Start 7][]
8. Kiedy skończysz mapowanie, przełącz się z powrotem do Tasking Managera i kliknij "Oznacz jako całkowicie zmapowane" jeżeli wykonałeś w pełni zadanie lub "Koniec mapowania" jeżeli potrzebujesz przerwać mapowanie z jakiegoś powodu.  
  ![TM Quick Start 8][]


## Proces mapowania 

1. Zdalny maper tworzy konto na OpenStreetMap i loguje się do Tasking Managera.
1. Maper znajduje projekt do pracy, zazwyczaj opierając się na priorytecie i poziomie umiejętności ustawionym przez menadżera projektu Tasking Managera. 
2. Zdalny maper wybiera kwadrat zadania, mapuje go i oznacza zadanie jako wykonane.
3. Inny zdalny maper sprawdza, czy zadanie jest wykonane na zadowalającym poziomie i oznacza zadanie jako 'zatwierdzone'
4. Proces mapowania projektu można obserwować w zakładce "statystyki", a projekt może być zdegradowany lub zarchiwizowany według uznania administratora.

### Logowanie do Menedżera zadań

Tasking Manager jest osobny narzędziem, które koordynuje mapowanie w OpenStreetMap. Pomimo tego używa systemu logowania OpenStreetMap. To oznacza, że nie potrzebujesz tworzyć osobnego konta do używania Tasking Managera, ale musisz utworzyć konto OpenStreetMap zanim będziesz mógł wykorzystać go do mapowania.

Podczas pierwszej wizyty w Tasking Managerze zobaczysz przycisk "Zaloguj" w prawym górnym rogu ekranu.

![TM login 1][]

Kliknięcie w ten przycisk przeniesie Cię do strony OpenStreetMap. Następnie powinieneś zalogować się i pozwolić Tasking Managerowi na dostęp do Twoich ustawień OpenStreetMap. Utwórz konto na stronie OpenStreetMap, jeżeli jeszcze go nie masz.

![TM login 2][]

![TM login 3][]

Kiedy zalogujesz się do OpenStreetMap zostaniesz przekierowany z powrotem do Tasking Managera, a kliknięcie na Wesprzyj lub Rozpocznij przeniesie Cię do listy projektów, które możesz wesprzeć.

### Opcje i odnośniki

Początkowo Tasking Manager wyświetla się po angielsku - aby zmienić język kliknij na **English** w prawym górnym rogu okna.

Po zalogowaniu możesz kliknąć na swojej nazwie użytkownika na górze. Stąd możesz:

- Zobaczyć swój profil w Tasking Managerze, gdzie możesz:
    - Zaktualizować swój adres email i linki do mediów społecznościowych
    - Zobaczyć swój poziom doświadczenia mapera
    - Zobaczyć listę i mapę projektów, które współtworzyłeś
- Przejść do ekranu swoich **Wiadomości** w Tasking Managerze (jest to system inny niż na OpenStreetMap)
- Wylogować się

### Znajdowanie projektu - Ekran wspierania Tasking Managera

Kliknięcie w link "Wesprzyj" w pasku głównego menu przeniesie Cię do głównej listy projektów w Tasking Managerze.

![TM contribute][]

Ekran Wesprzyj Tasking Managera jest podzielony na trzy główne obszary:

- Opcje Szukaj i Filtruj po lewej stronie
- Lista projektów
- Mapa z projektami z listy

#### Opcje Szukaj i Filtruj

Domyślnie wyświetlane są wszystkie projekty dostępne do mapowania. Możesz użyć Zaawansowanego Szukania w części ekranu służącej do filtrowania, aby zawęzić listę do projektów nad którymi chcesz pracować.

- Numer projektu - Jeżeli znasz numer projektu, nad którym chcesz pracować, to możesz go tutaj podać, a zostaniesz przeniesiony bezpośrednio do niego.
- Organizacja - To pozwala Ci wyświetlić projekty zgłoszone przez konkretne organizacje.
- Trudność mapowania - Niektóre projekty są trudniejsze do mapowania niż inne. Ta opcja pozwala Ci znaleźć projekty, które są najbardziej odpowiednie do Twojego poziomu doświadczenia. Zachęcamy, abyś pracował nad projektami, które najbardziej odpowiadają Twojemu poziomowi doświadczenia, zwłaszcza jeśli jesteś bardziej doświadczonym maperem.
- Rodzaj mapowania - To pozwala Ci znaleźć projekty, które zawierają konkretne rodzaje obiektów do zmapowania. Wiele projektów skupia się na mapowaniu tylko jednego rodzaju obiektów, ale równie dobrze mogą zawierać kilka typów.
- Szukanie w całym tekście - To pozwala Ci wyszukać projekty, które zawierają konkretne słowa lub frazy w swoim opisie.
- Tagi kampanii - Projekty mogą zawierać inne tagi, które wskazują, że są częścią większej kampanii mapowania, możesz znaleźć projekty po tych tagach wpisując je do tego pola.

#### Widok mapy
Kliknięcie na karcie "Widok mapy" pokaże Ci liczbę projektów w danym regionie. Podwójne kliknięcie lub przybliżenie wyświetli pojedyncze projekty. Po przybliżeniu punkty na mapie mają różne kolory, gdzie czerwony oznacza pilny projekt, żółty, to wysoki lub średni priorytet, a szary niski priorytet. Kliknięcie na dowolnym punkcie na mapie spowoduje pokazanie informacji o projekcie. Kliknięcie na tytule projektu przeniesie Cię do niego.

![TM project map][]

### Mapowanie przez Tasking Managera

Kiedy odnajdziesz projekt, nad którym chcesz pracować, kliknięcie na jego tytuł przeniesie Cię do szczegółowego wpisu o nim. Widok szczegółów zawiera:

- Opis ważności projektu i informacje, jak będą używane dane
- Szczegółowe instrukcje, co mapować
- Ekrany wyboru do weryfikowania mapowania
- Szczegółową mapę poszczególnych obszarów mapowanych zadań z informacjami o ich statusie.
- Kartę Pytania i komentarze dla pytań i komentarzy dotyczących projektu

![TM project description][]



#### Strona projektu

Wszystko, co musisz wiedzieć o projekcie znajduje się tutaj! Na górze jest pełen opis projektu mapowania i informacje o nim.  

Poniżej opisu ekran podzielony jest na dwie części. Lewa sekcja, to panel zakładek z kartami dla "Wskazówek", "Mapy", i "Pytań i komentarzy". Po prawej stronie jest mapa projektu i indywidualnych zadań do mapowania.

- Zadania bez koloru są gotowe i dostępne do mapowania
- Różowe obszary mapy wskazują tereny o wysokim priorytecie
- Żółte/Złote kwadraty są po pierwszym etapie mapowania i czekają na weryfikację
- Żółta ramka oznacza zadanie wybrane przez Ciebie
- Niebieskie zadania są aktualnie wykonywane przez innych maperów 
- Zielone zadania są po 2. etapie mapowania i mają oznaczenie "zweryfikowane"
- Ciemnoszare zadania, to miejsca sprawdzone i oznaczone przez innych maperów, jako obszary, które nie mają odpowiedniego podkładu 
- Niebieska linia, zwykle widoczna w zewnętrznych kwadratach projektu pokazuje jego granice. Ta granica zwykle pokrywa się z dostępnym podkładem, granicą administracyjną, itp., więc może mieć dziwny kształt. Jakkolwiek możesz mapować poza tą granicą, to nie jest to wymagane i nie będzie brane pod uwagę przez weryfikatorów.  


#### Karta instrukcji
Tutaj zobaczysz, co jest wymagane w zadaniu mapowania. Projekty różnią się między sobą stopniem trudności, odpowiednio dla początkujących, średniozaawansowanych i doświadczonych maperów - co wyjaśnia instrukcja. Upewnij się, że przeczytałeś i zrozumiałeś tą część. Jest wiele rodzajów projektów mapowania, dla wielu różnych celów. Niektóre typowe polecenia, to:  

- Sieć drogowa: Używana przez ludzi w terenie do wczytania danych do przenośnych urządzeń nawigacyjnych i znalezienia drogi do oddalonych terenów  
- Mapowanie wiosek: Często używane do rozpoznawania miejsc, gdzie żyją ludzie, którzy mogą być w zagrożeniu  
- Mapowanie budynków: Używane do oceny szkód lub śledzenia kontaktu z chorobami. Używane również do szacowania populacji.  
- Mapowanie rzek, murów i innych obiektów  

Nie wszystkie obszary na świecie są podobne do Twojej okolicy, więc mogą być dostarczone specjalne wskazówki dotyczące tagowania. Na przykład afrykańska sieć dróg jest bardzo różna od typowego amerykańskiego, czy europejskiego systemu drogowego.  

Pojawi się tutaj też sekcja wskazująca, w jaki sposób powinieneś uzupełnić pole **Opis zmian** przy wysyłaniu/zapisywaniu zmian w swoim programie do edycji, jak również informacja o **źródle**, którą (zależnie od programu) możesz skopiować i wkleić do odpowiedniego pola dla opisu zestawu zmian.  

Czasami może być dostępny dla danego zadania specyficzny podkład - musisz zatwierdzić licencję, aby uzyskać dostęp do niego. Instrukcje zazwyczaj wskazują najłatwiejszą drogę załadowania go edytorów takich, jak JOSM lub iD.  

Podczas sprawdzania zadania oznaczonego, jako kompletne, weryfikatorzy będą spodziewali się, że wszystkie wymagania z karty instrukcji są wypełnione. Może się zdarzyć, że ukończenie całego zadania będzie dość trudne - poniższe wskazówki są dotyczą odblokowywania zadań, jak również mówią o dostarczaniu użytecznych informacji kolejnym maperom.  

#### Przycisk Aktywność i statystyki  

Ta karta zawiera statystyki dotyczące projektu. Jest ona podzielona na dwie sekcje: szczegółową listę działań (dawniej jako osobna karta w Tasking Managerze 2.0) oraz sekcję podsumowującą.

Podsumowanie zawiera listę maperów, którzy ukończyli przynajmniej jedno zadanie w ramach projektu.  

Lista wszystkich komentarzy pozostawionych przy pojedynczych zadaniach znajduje się na dole strony. To są komentarze pozostawione do zadań i nie powinny być mylone z kartą "Pytania i komentarze", która zawiera ogólne pytania i komentarze dotyczące całego projektu.

Możesz powrócić do głównej strony wspierania projektu klikając na tytule projektu na stronie Aktywność i statystyki

#### Karta mapy  

Kliknij, kiedy będziesz gotowy do rozpoczęcia mapowania. Możesz wybrać pojedyncze zadanie do pracy zaznaczając je na mapie lub kliknąć na przycisku "Wybierz losowe zadanie". Tylko zadania bez koloru mogą być wybrane na tej karcie, inaczej pojawi się komunikat mówiący, że zadanie nie może być mapowane. Jeśli zamierzasz weryfikować, upewnij się, że wybrałeś kartę "Weryfikuj".

![TM map tab][]

#### Wybieranie zadania do mapowania  

Po wybraniu zadania będziesz mógł zobaczyć, czy istnieje już dla niego jakaś historia, jak na przykład to, że ktoś inny zaczął mapować, ale nie miał wystarczająco czasu, aby je dokończyć.  

Kliknięcie na przycisku **Rozpocznij mapowanie** zablokuje zadanie, więc żaden inny maper nie będzie mógł go wybrać, dopóki nie zostanie zwolniona blokada, a jednocześnie rozpocznie odliczanie 2 godzinny (120 minut) licznik, po upływie którego zadanie zostanie automatycznie odblokowane. Dobrym nawykiem jest regularne sprawdzanie pozostałego czasu - bardzo łatwo mapowanie może Cię pochłonąć i przegapisz odblokowanie zadania, więc będzie mogło ono być wybrane przez innego mapera, który rozpocznie nad nim pracę. Prowadzi to później do konfliktów i problemów.  


#### Opcje edycji

Różne opcje edytowania są prezentowane, gdy tylko zablokujesz zadanie.

##### Edytuj w JOSM  

Uruchom JOSM przez użyciem tego linku, a istniejące dane OSM zostaną automatycznie wczytane do JOSM.  

>  1. 'Włącz zdalne sterowania' musi być zaznaczone - szukaj w **Edycja / Ustawienia / Zdalne sterowanie**
>  2. Jeżeli zainstalowałeś wcześniej wtyczkę 'continuosDownload', to najlepiej ją wyłącz (odznacz 'Pobieraj dane OSM w trybie ciągłym' w menu **Plik** w JOSM).  
>  3. Jeżeli JOSM nie załaduje automatycznie podkładu, to równie dobrze można go normalnie znaleźć w menu **Podkłady**. [Więcej informacji o podkładach tutaj](/pl/josm/more-about-josm/#add-imagery)  
  

##### Edytor iD  

Wybierz to, aby automatycznie uruchomić nową kartę lub okno Twojej przeglądarki z załadowanymi istniejącymi danymi OSM. Przeglądarka Internet Explorer nie obsługuje aktualnie iD, więc zamiast tego zostanie załadowany Potlatch 2. Oryginalna karta lub okno z Task Managerem będzie wciąż dostępna.  


##### Potlatch 2  

Edytor załaduje się w nowym oknie lub karcie. Potlatch nie wyświetla automatycznie ramki ograniczającej zadania, ale możesz ją dodać postępując według następującej procedury:  

1. W Tasking Managerze wybierz zadanie i kliknij Rozpocznij mapowanie, aby je zablokować.  
2. W Tasking Managerze, wybierz Edytuj w JOSM (jeśli pojawi się okno z tekstem "Zdalne sterowanie JOSM nie odpowiada..." kliknij OK).  
3. Poniżej przycisku Edytuj w JOSM znajduje się tekst "Wskazówka: Pobierz następujący plik .gpx ...". Pobierz plik .gpx i zapamiętaj, gdzie go zapisałeś.  
4. W Tasking Managerze, zmień z Edytuj w JOSM na Edytuj w Potlatch 2. Potlatch powinien się otworzyć w nowej karcie.  
5. W Potlatchu wybierz Podkład, a następnie Plik wektorowy...  
6. W oknie Wczytaj plik wektorowy, na dole obok Plik, kliknij Otwórz i przejdź do pobranego pliku .gpx.  
7. W oknie Wczytaj plik wektorowy upewnij się, że zaznaczone jest pole przy Pokaż kolumnę dla pliku .gpx, a następnie zamknij okno.  
8. Potlatch powinien teraz wyświetlić granicę jako kwadrat (prawdopodobnie niebieski). Zauważ, że Potlatch będzie nadal wczytywał dane spoza obszaru zadania.  
  

##### Field Papers  

Do użytku tylko wtedy, gdy jesteś zaangażowany w projekt, w którym lokalny maper przeprowadził inspekcję w terenie i oznaczył na drukowanej mapie dane takie, jak np. nazwy ulic. Taka mapa może być zeskanowana i użyta jako podkład dla zdalnego lub lokalnego mapera, aby odczytać informacje i zaktualizować dane OpenStreetMap. [Sekcja LearnOSM o Field Papers] (/pl/mobile-mapping/field-papers/).  


#### Splitting a task square

Having selected your task and inspected it with the imagery in place, you may realise that there is far too much detail required for mapping. An example of this may be tracing buildings in dense urban areas, or locating small villages in large areas. As guidance, where it isn't possible for one person to complete within the 2 hour time limit you can often split the task into 4 smaller areas. *Use with caution* - if/when task squares are split too small it is difficult to judge what type of highway is involved, and to identify other features.  

> Be aware that other useful comments about the work previously completed will no longer be available.


#### Unlocking a Task

![TM unlock][]

##### Unlocking a Task before it is complete

If you start working on a task, but cannot complete it for some reason, it is best practice to leave a comment against the task. Simply detail what remains and choose **Stop Mapping**. Make sure your comments are relevant and aimed to help out the next mapper.  

Na przykład:  

    Almost complete, small village top left 
    in the task square to be traced though
  

##### Unlocking a Task that is completely mapped

It is very difficult to be completely certain that you have completed a task - however it is acceptable to mark the task as complete if you are fairly sure - the contents will be checked by another mapper when validating, and any small additions can be made then.  

For the process to work most effectively, mappers need to mark tasks as "Mapped" rather than leaving them for several other 'not sure' mappers to spend time also checking them.  

When you have finished editing and think that the task is complete, save any remaining edits with your editing programme, then return to the Tasking Manager.  

+ Add comments to the box detailing what you achieved and more importantly, what you are not certain of. For example; "Complete as far as I can see, but there is cloud covering the top right corner of the task & I cannot see to trace this area".  
+ Click on the "Mark as Mapped" button, and your work is ready for review.  

##### Marking a Task as Bad Imagery

You will sometimes select a task that can not be mapped because the imagery is low resolution or has cloud cover. Just close that task in your editor and use the "Mark as Bad Imagery" button to record that the task can not be mapped due to poor imagery.


#### Sending a message from the comment box

When leaving a comment against a task, you can have the comment sent as a message to a named mapper. Much like Twitter, simply use an @ followed by the username. This will send a message to the user containing the comments from this box, plus a link to the task that the comments box relates to.  

Na przykład:  

    @HOTMppr niezła robota z odwzorowaniem budynku  
    details here. You missed a small group  
    of houses on the upper left of the task square,  
    I added a few in, but some still remain.  

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


## Uzyskiwanie pomocy 

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
* Przedłuż drogi, strumienie lub inne funkcje nieco poza granice - dzięki temu następny twórca mapy będzie mógł przejąć pracę od miejsca, w którym została przerwana, ale pamiętaj, by przesyłać efekty swojej pracy zaraz po zakończeniu edycji.  
* If you are in doubt about what a particular feature is, use the comment section to ask questions or check the wiki.  
* If you make a serious mistake - for example, deleting a major feature or relation - use IRC or the comment box to ask other mappers to help in reverting this for you. Try to include the changeset, or a description of what happened. Being a collaborative task, many other mappers are here to help - it's important to remember everyone makes mistakes sometimes.  
* Don't hesitate to ask for feedback - mappers validating your work can be terse or to the point, but if they know it's OK to engage in a dialog with you, the outcome is often a lot better for all involved. It can be difficult to communicate in another language, and it's easy to appear abrupt when you have to translate as well as pass a message in a language you are not fluent in.  
* You must not validate your own work - a second pair of eyes will always lead to better quality mapping.  
* Don't worry if other mappers are terse when validating your work - like you, they just want to ensure all of the data is mapped accurately. Feedback is invariably about the remaining work, not criticism of your efforts to date.  


## Validation

Validation is the process of a second mapper reviewing the mapping of the initial mapper of a project task. It is designed to ensure complete, quality data and provide thanks, feedback and encouragment to mappers.

### Rozpoczęcie pracy

Validation starts much the same way as mapping does, a volunteer finds a project they would like to work on, reads the instructions tab to be sure they understand what is called for and how it is expected to be mapped, but instead of selecting the mapping tab for the project, they select the "Validate" tab.

![TM select for validation][]

The validator can select a task by clicking on an individual task square, clicking "Select a random Task", select by user or draw a polygon to select multiple, connected tasks.

Unlike mappers, validators can select multiple tasks to perform validation on a larger scale than just one task.

### Selecting Multiple Tasks for Validation

New in the latest version of the Tasking Manager is the ability to select multiple tasks for validation, either by area or by user.

Depending on which editor you are using, this feature will behave differently.

W JOSM zostanie utworzona druga warstwa danych OSM zatytułowana "Granice zadań - nie edytuj ani nie przesyłaj", a w najnowszych wersjach JOSM funkcja przesyłania zostanie wyłączona. JOSM **nie pobierze danych OSM**, ponieważ może to być bardzo duża ilość danych. Zamiast tego osoba kontrolująca będzie musiała użyć granic zadań jako przewodnika i ręcznie pobierać dane do aktywnej warstwy edycji.

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
