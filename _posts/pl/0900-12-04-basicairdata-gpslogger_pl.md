---
layout: doc
title: BasicAirData GPS Logger
permalink: /pl/mobile-mapping/basicairdata-gpslogger/
lang: pl
category: mobile-mapping
---

BasicAirData GPS Logger
=======================

> Reviewed 2021-06-12

![BasicAirData-GPSLogger-002][]

BasicAirData GPS Logger, to prosta aplikacja do nagrywania Twojej pozycji i ścieżki. Jest to prosty i lekki tracker GPS skupiony na dokładności z myślą o oszczędzaniu energii. Ta aplikacja jest bardzo dokładna w określaniu Twojej wysokości, jeśli włączysz automatyczne korygowanie wysokości EGM96 w ustawieniach. Możesz nagrać wszystkie swojej podróże, obejrzeć je w ulubionej przeglądarce zewnętrznej (musi być zainstalowana) bezpośrednio z listy w aplikacji i łatwo udostępniać je w formatach KML, GPX i TXT.

Aplikacja jest dostępna na urządzenia z Androidem za darmo i z otwartym źródłem.

Aplikację możesz pobrać za darmo z [Google Play(tm)](https://play.google.com/store/apps/details?id=eu.basicairdata.graziano.gpslogger).<br>
Alternatywnie, plik APK jest dostępny bezpośrednio w [repozytorium GPSLogger na GitHubie](https://github.com/BasicAirData/GPSLogger/tree/master/apk).

Cechy
--------

![BasicAirData-GPSLogger-000][]

* Nagrywanie ścieżki - aplikacja nie ma zintegrowanych map
* Nowoczesny interfejs z ciemnym tematem i kartami.
* Nagrywanie na pierwszym planie i w tle (W Androidzie 6+ należy wyłączyć monitorowanie i optymalizację zużycia baterii dla tej aplikacji)
* Oznaczanie miejsc również podczas rejestrowania
* Wizualizacja informacji GPS
* Ręczna korekta wysokości (dodawanie przesunięcia)
* Automatyczna korekta wysokości oparta na modelu geoidy NGA EGM96 (musi być aktywowane w ustawieniach)
* Statystyki w czasie rzeczywistym
* Lista pokazująca w aplikacji nagrane ślady
* Wizualizacja Twoich śladów przy użyciu dowolnej zainstalowanej przeglądarki KML/GPX, bezpośrednio z listy śladów
* Eksport śladów do folderu /GPSLogger na Twoim urządzeniu, w KML, GPX i TXT
* Udostępniania śladów w formatach KML, GPX i TXT przez email, Dropbox, Google Drive, FTP, ...
* Użycie jednostek metrycznych, imperialnych lub morskich

Zwykłe użycie
-----------

![BasicAirData-GPSLogger-001][]

Jeżeli lokalizacja GPS nie jest aktywna w Twoim telefonie, włącz ją. Następnie wyjdź na otwartą przestrzeń i włącz GPS Logger.

1. Poczekaj, aż aplikacja znajdzie pozycję. Kiedy to nastąpi zakładka __GPS FIX__ zacznie pokazywać współrzędne Twojej pozycji. W tym momencie (jeżeli to możliwe) powinieneś poczekać kolejną minutę przed przejściem do następnej fazy w celu ustabilizowania sygnału.
2. Click the __Record__ button of the bottom panel to start recording track points. The button will become red. switch recording process on and off at any time by clicking on that button. At the top of the button the app shows the number of the trackpoints recorded.
Możesz przejść do zakładki __ŚLAD__, aby zobaczyć statystyki swojej podróży w czasie rzeczywistym.
3. When your trip is finished, click the __Stop__ button to finalize (finish) the active track. A dialog will appear, click __OK__ to confirm.
4. Go to the __TRACKLIST__ tab, where you will find the track you have just recorded. Tap on the track. A menu will appear. You can choose to share the track in many ways, view it using an installed external viewer, edit the track details, export it into /GPSLogger folder of your smartphone, or delete it from the tracklist. The formats used for export can be configured on the settings screen.

Importowanie śladów GPX w edytorze OpenStreetMap
--------------------------------------------

Kiedy już zbierzesz dane w terenie, możesz zaimportować ślady GPX do użycia w JOSM, iD lub innym edytorze OpenStreetMap.
Możesz użyć tej prostej 2-krokowej procedury:

1. Zapisz ślad GPX na swoim komputerze w jeden z następujących sposobów:
* Przejdź do listy śladów GPS Loggera, dotknij wybranego śladu i kliknij __Eksport__; plik GPX zostanie utworzony i zapisany w folderze /GPSLogger na Twoim urządzeniu z Androidem (upewnij się, że format GPX jest aktywny na ekranie ustawień). Następnie podłącz telefon do swojego komputera przy użyciu kabla USB i przenieś (lub skopiuj) swoje ślady GPX do komputera używając menedżera plików;
* Alternatywnie możesz użyć funkcji __Udostępnij__, aby przesłać plik do komputera (możesz to zrobić przez email, FTP lub używając jakiejś chmury). Możliwości udostępniania zależą od aplikacji firm trzecich zainstalowanych na Twoim urządzeniu z Androidem;
2. Zaimportuj ślad GPX do swojego edytora OpenStreetMap: używanie śladów GPX w edytorach JOSM i iD jest proste dzięki przeciągnięciu plików i upuszczeniu ich w aplikacji (lub oknie przeglądarki, w przypadku iD).

Oficjalna dokumentacja
----------------------

- Więcej informacji o tej aplikacji możesz przeczytać w [tym artykule](http://www.basicairdata.eu/projects/android/android-gps-logger/).<br>
- [Tutaj](http://www.basicairdata.eu/projects/android/android-gps-logger/getting-started-guide-for-gps-logger/) możesz znaleźć Przewodnik dla początkujących i przegląd ustawień aplikacji.<br>
- Problemy podczas używania lub konfigurowania GPS Loggera? Przeczytaj stronę z [Często zadawanymi pytaniami](https://github.com/BasicAirData/GPSLogger/blob/master/readme.md#frequently-asked-questions)!

[BasicAirData-GPSLogger-002]:  /images/mobile-mapping/basicairdata-gpslogger_002.en.jpg
[BasicAirData-GPSLogger-000]:  /images/mobile-mapping/basicairdata-gpslogger_000.en.jpg
[BasicAirData-GPSLogger-001]:  /images/mobile-mapping/basicairdata-gpslogger_001.en.jpg