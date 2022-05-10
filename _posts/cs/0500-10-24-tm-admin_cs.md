---
layout: doc
title: Tasking Manager – návod pro správce
permalink: /cs/coordination/tm-admin/
lang: cs
category: coordination
---

# Tasking Manager – návod pro správce


**Pokud se uživatelské rozhraní verze, kterou používáte, liší od zde popsané verze, měli byste se podívat do [našeho přehledu verzí](/en/coordination/tm-disambiguation)**.

Rejstřík sekcí
-------------
-  [Přihlášení a přístup](/en/coordination/tm-admin/#login-and-access)
-  [Oprávnění](/en/coordination/tm-admin/#permissions)
-  [Vytvořit projekt](/en/coordination/tm-admin/#create-a-mapping-project)
    -  [Definice oblasti mapování](/en/coordination/tm-admin/#define-mapping-area)
    -  [Definovat úkoly](/en/coordination/tm-admin/#define-tasks)
    -  [Ořezání projektové plochy](/en/coordination/tm-admin/#project-area-trim)
    -  [Pokročilé: Definujte oblasti a úkoly mapování projektu s importovanými geodaty.](/en/coordination/tm-admin/#advanced-define-mapping-project-areas-and-tasks-with-imported-geodata)
-  [Úprava projektu mapování](/en/coordination/tm-admin/#edit-a-mapping-project)
    -  [Popis - první věc, kterou se uživatelé dozvědí o vašem projektu.](/en/coordination/tm-admin/#description)
    -  [Pokyny - co mají uživatelé dělat](/en/coordination/tm-admin/#instructions)
    -  [Metadata - kam projekt patří](/en/coordination/tm-admin/#metadata)
    -  [Prioritní oblasti - kde by uživatelé měli začít mapovat](/en/coordination/tm-admin/#priority-areas)
    -  [Snímky - základ pro mapování](/en/coordination/tm-admin/#imagery)
    -  [Oprávnění - kdo je oprávněn mapovat a validovat](/en/coordination/tm-admin/#permissions)
    -  [Užitečné rady - jak vyplnit všechna tato pole](/en/coordination/tm-admin/#helpful-hints)
    -  [Publikovat - nezapomeňte, jinak práci nikdy nedokončíte](/en/coordination/tm-admin/#publish)

Tasking Manager je základním nástrojem pro koordinaci mapování v OpenStreetMap. Podporuje humanitární mapovací iniciativy, pořádání mapathonů nebo vytváření mapovacích úloh pro studenty. Aplikace rozděluje oblast zájmu na zvládnutelné geografické části, které lze rychle a ve spolupráci dokončit. Tento přístup umožňuje rozdělit úkoly mnoha jednotlivým mapovatelům a zároveň omezit možné konflikty při úpravách. 

Software podporuje přesné a kvalitní mapování tím, že poskytuje konzistentní sadu pokynů pro vaše mapovače (např. "zmapujte všechny silnice a budovy"). Stručně řečeno, Správce úloh je způsob, jak nastavit a řídit pracovní postup pro otevřené mapovací činnosti. 

Tato příručka popisuje základní správu Tasking Manageru. Zahrnuje pokyny k vytváření a úpravám mapovacích projektů a manipulaci s oprávněními pro mapování a revizi dat z hromadných zdrojů.

## Přihlášení a přístup

K přihlášení do Tasking Manageru je zapotřebí účet OpenStreetMap (OSM). Můžete navštívit [HOT Tasking Manager](http://tasks.hotosm.org) nebo jakoukoli jinou instanci komunity podle vašich preferencí. Tam klikněte na `Přihlásit se` a budete přesměrováni na [webové stránky OpenStreetMap](https://www.openstreetmap.org), kde si vytvoříte účet. Nebo klikněte na `Přihlásit se`, pokud již nějaký máte, a ve vyskakovacím okně můžete Správci úloh udělit omezený přístup ke svému účtu OSM.

## Oprávnění

Nejzákladnější uživatelská úroveň je **mapper**. Mappeři se mohou přihlásit do Správce úkolů a vyhledat a vybrat mapovací projekt, na kterém budou pracovat. Veškeré funkce mappera jsou popsány v příručce [LearnOSM Tasking Manager Mapper Guide](/en/coordination/tm-user/). Všimněte si, že některé projekty, například ty, které jsou ve stavu návrhu (tj. nezveřejněné), nebo projekty omezené na určité týmy, nejsou pro běžné mappery viditelné.

Všechna zvláštní oprávnění mají na starosti *organizace* a *týmy*. Hlavní zastřešující organizací je **organizace** a pod každou organizací lze vytvářet mapovací projekty a týmy. Organizace může např. představovat uživatele dat, jako je humanitární organizace, nebo jakoukoli komunitu OpenStreetMap. Pokud potřebujete nastavit svou organizaci v Tasking Manageru, obraťte se na technické správce instance Tasking Manageru.

Každá organizace má jednoho nebo více **správců**. Ti mají oprávnění vytvářet a upravovat související projekty. Všechny možnosti správy jsou přístupné prostřednictvím sekce `Správa` v hlavní navigaci.

Správci organizace mohou vytvářet **týmy**. Týmy jsou skupiny uživatelů a mohou být veřejně viditelné nebo soukromé. Mají také jednoho nebo více správců. Týmy lze nastavit tak, aby se uživatelé mohli do týmu připojit sami nebo "pouze na pozvání", což znamená, že manažeři týmu jsou o žádostech o připojení informováni a musí o nich rozhodnout.

Pro každý projekt mohou správci přiřadit konkrétní týmy, kterým mohou udělit nebo omezit přístup k mapování, definovat, kdo může ověřovat data nebo kdo jiný může upravovat metadata projektu.


## Vytvoření projektu mapování

Chcete-li se dostat do sekce správy, klikněte na `Správa` v navigaci nahoře, v prvním řádku uvidíte místo pro 'Projekty'. Vedle něj klikněte na tlačítko `Přidat` a jeden z nich vytvořte.

![TM Add Project][]

Můžete si vybrat mezi definováním oblasti zájmu (mapovací oblasti) vašeho mapovacího projektu buď pomocí:

* Možnost 1: `Nakreslete` oblast zájmu na webovou mapu (upřednostňovaná metoda)
* Možnost 2: `Nahrát soubor` pro import oblasti zájmu z geojsonu, KML nebo shapefile. To může zahrnovat i konkrétní úlohu (více informací najdete níže v části "Pokročilé vytváření projektu").

![TM New][]

### Definice oblasti mapování

![TM Draw AoI][]

1. Pomocí tlačítek v horní části můžete přepínat na jiné vrstvy pozadí. 
1. Klikněte na tlačítko `Kreslit` vlevo.
2. Chcete-li nakreslit polygon představující oblast mapování v rámečku mapy, podržte pravé tlačítko myši a přesuňte mapu bez kliknutí, čímž přidáte uzel. Polygon by měl těsně rámovat oblast zájmu. Tím ušetříte čas při vyplňování dlaždic, které nejsou předmětem zájmu (např. oceán, les).
3. Klikněte na výchozí bod a dokončete polygon.
4. Pokračujte v přidávání uzlů jediným kliknutím myší. Dvakrát klikněte myší a polygon dokončíte. <!--Po dokončení polygonu můžete uzly přesouvat nebo přidávat nové, abyste získali oblast přesně podle svých představ.-->

### Definice úkolů

Po vymezení celkové oblasti mapování se tato oblast rozdělí na menší oblasti zvané *Úlohy*. Tyto úkoly musí mít přiměřenou velikost, aby mohly být dokončeny rychle a ve spolupráci s mnoha lidmi, kteří přispívají ke společnému cíli projektu.

![TM Tile Sizes][]

Oblast mapování se automaticky rozdělí na buňky mřížky a každá buňka se stane úlohou. Pomocí tlačítek `Větší` a `Menší` můžete upravit celkovou velikost čtverců úlohy.

> Velmi užitečné je použití satelitních snímků pro určení vhodné velikosti úlohy. Tlačítky v horní části mapy můžete přepínat mezi několika vrstvami podkladu. <!-- Pokud máte pro projekt vlastní snímky, můžete je také načíst pomocí tlačítka v pravém horním rohu mapy a zadáním url adresy TMS nebo WMS. -->

Po nastavení základní velikosti úlohy mřížky můžete některé úlohy selektivně rozdělit na čtyři menší pomocí tlačítka `Kliknutím na rozdělení`. Nebo můžete `Kreslit oblast pro rozdělení`, což vám umožní nakreslit polygon nad oblastí a všechny úlohy v ní budou rozděleny vždy na čtyři nové. Tlačítko Obnovit odstraní všechna vaše vlastní rozdělení.

**Velikosti úloh**: Věnujte prosím čas a pečlivě definujte vhodné velikosti úloh! Optimální velikost úlohy do značné míry závisí na množství objektů, které jsou požadovány pro mapování v každé úloze. Velikosti úloh na venkově jsou obvykle větší než u mapovacích projektů, které se týkají digitalizace budov ve městech por hustě osídlených oblastech. V ideálním případě si sami vyzkoušejte zmapovat nějakou oblast projektu, abyste zjistili, jak náročné a pracné je ji zmapovat. To by vám mělo pomoci při rozhodování o optimální velikosti čtverce.

Doporučujeme zvolit takové rozměry úkolů, o kterých jste přesvědčeni, že je mapovatelé zvládnou za 15-20 minut.

> Úvahy při rozhodování o velikosti úloh:
> - Začátečníci potřebují zhruba čtyřikrát delší dobu než zkušení mappeři.
> - Začínající mapovatelé si musí vyvinout oko pro satelitní snímky. Všimnout si správných prvků může být obtížné.
> - Začínající mapovatelé se potýkají s problémy při sledování mnoha podobných prvků, jako jsou budovy.
> - Čtverec lze později rozdělit, ale neexistuje možnost spojit čtverce dohromady.
> - Na okrajích a rozích úloh je vždy možnost dostat se do konfliktu s kolegou mapovačem vedle vás. Menší úkoly znamenají více rohů a okrajů. Existuje kompromis ve velikosti, aby to bylo pro mapovače snadné, ale aby mezi nimi nevznikaly konflikty při mapování.

Po dokončení definice velikostí úloh klikněte na tlačítko `Další`.

### Oříznutí projektové plochy

![TM Trim][]

Po určení velikosti úloh budete mít možnost oříznout úlohy tak, aby se rozprostíraly na ploše mapování. Pokud jednoduše klikněte na `Ořezat`, vynecháte všechny čtverce úloh, které neobsahují mapovací oblast.

![TM Trim coarse][]

Pokud před kliknutím na tlačítko `Ořezat` zaškrtnete políčko o ořezávání na přesnou oblast, získáte na okraji libovolné tvary úloh.

![TM Trim fine][]

Po dokončení ořezu mapovací oblasti klikněte na tlačítko `Další`.


### Uložte projekt

Dejte projektu název (lze upravit na další obrazovce) a klikněte na tlačítko `Vytvořit`. První krok je hotov.

Více informací o tom, jak do projektu přidat popisy a instrukce a zveřejnit jej pro mapovače, najdete níže v kapitole "Úprava mapovacího projektu".

### Pokročilé: Definujte oblasti a úkoly mapování projektu s importovanými geodaty.

Geoprostorové desktopové aplikace, jako je JOSM nebo QGIS, umožňují mapovatelům přesněji zakreslit oblasti zájmu ve srovnání s klouzavou webovou mapou uvnitř Tasking Manageru. Můžete také předem určit speciální tvary a velikosti úloh.

> Tasking Manager je webová aplikace. Ujistěte se, že velikost souboru, který nahráváte, je zmenšená. Možná budete chtít nejprve zjednodušit geometrii a odříznout příliš mnoho číslic souřadnic.

**Nahrajte soubor GeoJSON nebo KML s oblastí zájmu, která má být mapována**

1. V prvním kroku vytváření projektu klikněte na možnost 2, tlačítko "Nahrát soubor".
2. V okně Nahrát soubor přejděte na svůj soubor.
3. Kliknutím na název souboru jej zvýrazněte a poté klikněte na tlačítko "Otevřít".
4. Importované oblasti zájmu nelze upravovat.

Po nahrání souboru do Tasking Manageru můžete vybrat, zda chcete úlohy definovat jako 

1. `Čtvercová síť` s výše popsanými funkcemi pro definování úloh.
2. `Arbitrární geometrie`, pocházející z právě nahraného souboru.

**Definice libovolné geometrie**

Pokud jste nahráli soubor pro definici oblasti projektu, může tento soubor obsahovat také tvary jednotlivých úloh. Např. pokud se oblast zájmu skládá z jednoho polygonu, bude mít projekt pouze jednu úlohu. To by se mělo používat pouze ve zvláštních případech a ze specifických důvodů. Například import projektu silnic může potřebovat vlastní tvary úloh nebo výstup z procesu redukce mapové oblasti.

Upozorňujeme, že libovolné geometrie nelze rozdělit. Měly by se používat pouze ve zvláštních případech, protože mají vliv na výkonnost nástroje.

## Úprava projektu mapování

Po prvotním nastavení a vytvoření projektu je třeba upravit jeho informace a nastavení:

- Popis - Používá se pro zobrazení v seznamech a motivačních informacích pro mapovače
- Pokyny - Podrobné pokyny k tomu, co a jak mapovat potřebné objekty/subjekty/funkce.
- Metadata - dodatečné informace používané pro kategorizaci projektu. Často se používá při filtrování úplného seznamu projektů.
- Obrázky - Místo pro zadání adresy URL TMS a požadované licence.
- Prioritní oblasti - umožňuje určit části projektu, které by měly být mapovány jako první.
- Oprávnění - umožňuje omezit přístup k projektu pro mapování a ověřování.
- Nastavení - Datum platnosti projektu a Předvolby JOSM.
- Akce - Odesílání zpráv přispěvatelům, validace a zneplatnění celého projektu jedním kliknutím.

> Pečlivé vyplnění těchto údajů je nezbytnou součástí úspěšného mapovacího projektu. Je velmi důležité, aby cíle a zdroje projektu byly jasně sděleny, aby mapovatelé znali konkrétní a důležité informace. Mějte na paměti, že mapovatelé nemusí mít předchozí zkušenosti s OpenStreetMap a nebudou znát pokyny pro označování.
> Je vhodné omezit jeden projekt na jednu třídu mapovaných objektů. Pokud potřebujete podkladovou mapu oblasti, raději ji rozdělte do několika projektů, jeden pro silnice, druhý pro budovy atd. Začátečníci se nyní mohou zaměřit na malou třídu objektů a zároveň se naučit, jak je správně mapovat.

### Popis

![TM Description][]

Na této obrazovce můžete nastavit stav projektu jako Návrh, Zveřejněno nebo Archivováno, prioritu, krátký popis používaný v seznamu projektů a dlouhý popis dostupný po výběru projektu mapovačem.

Krátký i dlouhý popis by měl obsahovat informace o tom, proč projekt existuje, kdo bude data používat a jaký očekávaný dopad bude mapování mít. Tato pole podporují text Markdown a mohou obsahovat obrázky a videa.

### Instrukce

![TM Instructions][]

**Prvky k mapování** - Seznam prvků, které mají uživatelé mapovat. Obecně platí, že čím méně prvků, tím lépe, protože je pravděpodobnější, že budou dokončeny.

> Projekty, které vyžadují mapování velkého množství entit, jsou pro mapovače obtížné a obtížně se ověřují. Trvá mnohem déle, než získáte dobře použitelnou sadu dat. Velikost úloh je také obtížné zefektivnit pro různé typy mapování, např. budovy potřebují malé čtverce úloh, silnice a vodní toky potřebují větší čtverce úloh. Pro mapování budov a liniových prvků je osvědčeným postupem vytvořit více projektů na stejném území.

**Komentář k sadě změn** - Toto je výchozí komentář k sadě změn, který bude připojen ke každému odeslání dat do OSM. Obvykle obsahuje něco, co identifikuje správce úloh, na kterém se projekt nachází, a prvky, které byly mapovány. Často se používá pro "hash tagy", které pomáhají identifikovat organizaci, která mapování požaduje a/nebo provádí. Může také popisovat prováděné mapování, například "Mapování budov".

> Uživatelé by měli být poučeni, aby vyplnili smysluplné komentáře o tom, co zmapovali, ale vždy je dobré jim pomoci dobrými výchozími komentáři.

**Podrobné pokyny** - Zde bude umístěna většina podrobných pokynů a očekáváme, že si je každý mapovač a validátor pečlivě přečte a bude se jimi řídit.

Viz níže uvedené poznámky k vytváření dobrých pokynů.

**Pokyny k úkolu** - Tyto pokyny se zobrazí, když mapovač vybere úkol, a mají také speciální funkci, která umožňuje vytvářet adresy URL specifické pro úkoly na základě typických souřadnic x, y, z "slippy map".

### Metadata

![TM Metadata][]

> Všechna tato pole by měla být vyplněna a v budoucích verzích Tasking Manageru nebudou volitelná.

**Úroveň mapování** - Jedná se o údaj o náročnosti projektu mapování. K dispozici jsou 3 možnosti: Začátečník, Středně pokročilý a Pokročilý. Toto nastavení naznačuje mapovateli, jakou úroveň zkušeností by měl mít, aby byl při mapování projektu co nejúspěšnější. Lze jej použít při filtrování seznamu projektů a navrhovanou úroveň lze vyžadovat na obrazovce Oprávnění.

**Typ mapování** - Používá se při filtrování seznamu projektů a pomáhá mapovačům najít projekty, které chtějí mapovat.

**Organizace** - Organizace, jejíž projektoví manažeři by měli mít pro tento projekt oprávnění ke správě. Organizace musí být již dříve zaregistrována ve Správci úkolů.

**Zájmy** - Slouží k navrhování projektů mapovačům. Mappeři zadávají své zájmy ve svém profilu.

**ID filtru OSMCha** - OSMCha se nabízí jako odkaz z přehledu příspěvků. Standardní filtr omezuje výstup na ohraničení projektu a na příspěvky, které nejsou starší než datum vytvoření projektu a mají název projektu v komentáři k souboru změn. Pokud si myslíte, že by pro analýzu sad změn vašeho projektu bylo vhodnější něco jiného, pak zde uveďte buď adresu URL OSMCha, nebo id filtru OSMCha.

### Prioritní oblasti

![TM Priority Area][]

Pomocí poskytnutých nástrojů nakreslete oblasti, které by měly být zmapovány jako první. Pro projekt můžete mít více prioritních oblastí. Prioritní oblasti můžete také kdykoli změnit.

> Při mapování katastrof na počátku události je osvědčeným postupem mít velkou projektovou mapovací oblast a používat prioritní oblasti k zaměření mapování podle toho, jak přicházejí nové informace.

### Obrázky

Pole URL - pole, které přebírá adresu URL TMS, která se automaticky předá editoru OSM, který mapovač nebo validátor používá. Postupujte podle příkladu, je velmi důležité, aby bylo správně naformátováno a fungovalo ve všech editorech.

Licence - Pokud je pro mapování vyžadována specifická licence, kterou může mapovač akceptovat při používání snímků, můžete ji zde vybrat. Pokud potřebujete licenci, která není k dispozici, můžete kontaktovat správce instalace Tasking Manageru a požádat ho o její přidání.

### Oprávnění

![TM Permissions][]

**Oprávnění k mapování** - Umožňuje vyžadovat, aby měl mapovač správnou úroveň pro mapování v projektu (obrazovka Metadata výše). Úrovně mapování lze nastavit ručně, ale jsou automaticky aplikovány na základě celkového počtu sad změn. Můžete také požadovat, aby byl mapovač součástí týmu. Týmy lze vybrat níže

**Oprávnění k validaci** - Umožňuje vyžadovat, aby byl mapovač na správné úrovni pro validaci projektu (obrazovka Metadata výše). Úrovně mapování lze nastavit ručně, ale jsou automaticky aplikovány na základě celkového počtu sad změn. Můžete také vyžadovat, aby byl validátor součástí týmu. Týmy lze vybrat níže

**Týmy** - Vyberte týmy pro mapování a ověřování. Pokud tak učiníte, můžete pomocí výše uvedených ovládacích prvků omezit mapování a/nebo validaci na členy týmu. Pro každou roli můžete vybrat několik týmů. Vyberte tým, vyberte roli a stiskněte tlačítko "Přidat". Po přidání týmu můžete jeho roli upravit nebo přiřazení odstranit.

**Soukromí** - Omezí přístup k projektu na uživatele, kteří jsou součástí týmu, do kterého projekt patří.

### Nastavení

![TM Settings][]

**Výchozí jazyk** - Nastaví výchozí jazyk instrukcí pro projekt.

**Editoři** - Omezí dostupné editory na ty, které jsou zaškrtnuté. Můžete určit různé skupiny pro mapování a pro ověřování.

**Vynutit náhodný výběr** - Pokud je zaškrtnuto, uživatelé nemohou vybrat konkrétní úlohu pro mapování.

### Akce

![TM Actions][]

**Zpráva všem přispěvatelům** - odešle zprávu Správce úloh všem, kteří označili úkol za splněný nebo platný. Lze ji použít k poděkování přispěvatelům a/nebo k jejich nasměrování na další projekty v portfoliu/kampani. Měla by být také použita před použitím jedné ze dvou níže popsaných možností Validovat/neplatit všechny úkoly.

**Mapování, validace a zneplatnění** - Nastaví stav všech úloh na mapované, validované nebo zneplatněné. Zacházejte s nimi opatrně, protože je nelze vrátit zpět.

**Resetovat úkoly** - Tím se všechny úkoly vrátí do původního stavu, ale předchozí akce budou stále dostupné v historii úkolů. Zacházejte s nimi opatrně, protože je nelze vrátit zpět.

**Převod vlastnictví projektu** - Umožňuje určit jiného uživatele, který se stane vlastníkem tohoto projektu. Zacházejte s ním opatrně, protože jej nelze vrátit zpět.

**Klonovat projekt** - Vytvoří se duplikát projektu s výjimkou oblasti mapování, mřížky úkolů a prioritních oblastí, které bude třeba znovu importovat nebo překreslit.

**Odstranit projekt** - Tím se projekt trvale odstraní ze Správce úloh. Zacházejte s ním opatrně, protože jej nelze vrátit zpět. Tato akce již není k dispozici, jakmile byly do projektu vloženy jakékoli příspěvky.

### Poznámky k pokynům

Používejte srozumitelný jazyk, protože vaše cílové publikum nemusí být rodilí mluvčí angličtiny.

1. Již z názvu projektu by mělo být zřejmé, jaké entity by měly být mapovány. Dávejte přednost názvu, jako je např.
*#1396 - Missing Maps: Niger State (north), Nigeria (project 1: roads and residential areas )*
2. Nejdůležitější zprávy by se měly zobrazovat na kartě s pokyny jako první, abyste měli jistotu, že si je přečtete. To by zahrnovalo jakékoli speciální obrázky, které se mají používat místo Bingu. V prvních větách by mohlo být zmíněno, že není nutné mapovat každý jednotlivý dům, pokud se projekt týká například silnic a obytných oblastí. Nebo že je nutné zmapovat každý dům, pokud má být projekt použit pro odhady hustoty obyvatelstva. Tyto zprávy by se měly objevit i na kartě popisu.
3. Další upřesnění: Pokud je projekt vhodný pouze pro mappery s určitou úrovní zkušeností. Projekt například využívá importy nebo by stávající data měla být přeladěna na GPS stopy nebo nějaké jiné snímky (viz předchozí část). Formulujte to tak, aby se noví mappeři cítili přizváni k přispívání do jiných projektů, ale aby pochopili, že v tomto případě jsou vyžadovány pokročilé techniky.
4. Existují pokyny, které se týkají běžných chyb, s nimiž se při validaci setkáváme. Příkladem je kompilace Blakea Girardota o [mapování v západní Africe](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Použijte odkaz v pokynech a vysvětlete, že dodržování těchto pokynů je nutné.
5. Základním zdrojem informací o tagování je [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). Pro mnoho úkolů souvisejících s HOT je vhodnou specializací stránka [Tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa), kterou vřele doporučujeme ke čtení každému mapperovi. Pokud váš projekt musí dodržovat jiné standardy tagování, pak si podobnou stránku napište na wiki a uveďte na ni odkaz ve svých pokynech.


### Úvahy týkající se zobrazování

Ve většině případů používáme "standardní" snímky Bing. V některých situacích však můžete zvolit jiný zdroj:

1. Služba Bing neposkytuje pro vaši oblast mapování pokrytí s vysokým rozlišením.
2. Bing má v této oblasti značnou oblačnost.
3. Pro vyhodnocení po katastrofě potřebujete novější snímky.

Pokud se Bing neosvědčí, je další volbou Mapbox. Jiné zdroje byste měli hledat pouze v případě, že ani jeden z těchto dvou zdrojů nesplňuje vaše požadavky.

V takových případech nestačí vybrat zdroj kompatibilní s licencí a zpřístupnit jej prostřednictvím služby WMS nebo TMS. Vaše mapovaná oblast již byla pravděpodobně částečně zmapována pomocí snímků Bing nebo Mapbox a mezi snímky může být znatelný posun. Musíte se pozorně podívat na různá místa vaší mapovací oblasti a určit posun mezi vašimi snímky a dříve zmapovanými daty. Pokud jsou stávající data OSM posunuta vůči vašim snímkům, ale odpovídají snímkům Bing, pak obvykle předpokládáme, že Bing je "zlatý standard", pokud nemáme k dispozici stopy GPS, které dokazují, že tento předpoklad je mylný.

Pokud je mezi vašimi snímky a snímky Bing v celé oblasti mapování konstantní posun, je možné jej na serveru opravit, aby se snímky z různých zdrojů načtené v editoru shodovaly. Pokud to není možné, pokud se posun v celé mapovací oblasti mění nebo pokud jsou stávající data sladěna s různými zdroji, pak je čas na plán B:

Důležité je, že musíte vypracovat strategii, jak se s těmito problémy vypořádat, a poskytnout mapovačům a validátorům podrobné pokyny. Důrazně doporučujeme, abyste takový projekt vyhlásili "pouze pro zkušené mapovače" a vysvětlili, že zkušenost v tomto případě neznamená mít zmapováno více než 200 budov, ale již se vypořádat s problémy se zarovnáním a různými zdroji snímků.

Jedna z možných strategií by mohla zahrnovat tyto kroky:

1. Jasně uveďte, které snímky mají být považovány za odkaz, k němuž by mělo být cokoli dalšího přizpůsobeno. V tomto případě předpokládejme, že referencí je Bing.
2. Ujistěte se, že všechny stávající prvky, které jsou viditelné i v aplikaci Bing, jsou v souladu se snímky Bing, tj. v případě potřeby je zarovnejte.
3. Zarovnejte alternativní snímky ke stávajícím prvkům (a tedy k Bingu) pomocí funkce posunu snímků v editoru.
4. Přidání nových prvků z nyní správně zarovnaných alternativních snímků.

Je důležité, aby se krok 3 opakoval pro každou úlohu projektu a aby jednotlivé čtverce úloh nebyly příliš velké, protože posuny snímků se mohou v mapovací oblasti značně lišit, zejména pokud není terén rovinatý. Napříč projektem se mohou vyskytnout i nespojitosti snímků - dávejte si na ně pozor a upozorněte přispěvatele na takový problém.

Zde je několik doporučených informací, které byste mohli zahrnout do pokynů k projektu:

- [obecné pokyny pro různé editory](https://wiki.openstreetmap.org/wiki/Using_Imagery)
- [animovaný gif o zarovnávání obrazů v iD](https://wiki.openstreetmap.org/w/images/1/1a/Id-adjust-imagery.gif)
- [kapitola o zarovnání snímků josm v aplikaci learnOSM](http://learnosm.org/en/josm/correcting-imagery-offset)


### Korektury a publikování

Proveďte korekturu jednotlivých karet, abyste zajistili správné znění a formátování a srozumitelnost pokynů. Pokud potřebujete v projektu provést změny nebo upřesnění, klikněte na odkaz "Upravit" v pravém horním rohu stránky. 
Pokud je projekt připraven k mapování, klikněte na odkaz "Publikovat". Jakmile je projekt zveřejněn, je k dispozici pro mapování komukoli s účtem OSM, pokud nebyla na kartě 'Povolení uživatelé' zadána skupina uživatelů, v takovém případě na něm budou moci pracovat pouze povolaní uživatelé. V případě potřeby lze v projektu provádět úpravy i po zveřejnění kliknutím na odkaz "Upravit".

[TM Tile Sizes]: /images/coordination/tm4_tile_sizes.png
[TM Add Project]: /images/coordination/tm4_new_project.png
[TM New]: /images/coordination/tm4_create_new.png
[TM Draw AoI]: /images/coordination/tm4_draw_aoi.png
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
