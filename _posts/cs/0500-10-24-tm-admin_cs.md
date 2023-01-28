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
-  [Vytvořit projekt](/en/coordination/tm-admin/#create-a-project)
    -  [Definice oblasti mapování](/en/coordination/tm-admin/#define-mapping-area)
    -  [Definovat úlohy](/en/coordination/tm-admin/#define-tasks)
    -  [Pokročilé: Definovat úlohy s importovanými daty](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-data)
    -  [Ořez oblasti projektu](/en/coordination/tm-admin/#project-area-trim)
    -  [Název projektu](/en/coordination/tm-admin/#name-the-project)
-  [Upravit projekt](/en/coordination/tm-admin/#edit-a-project)
    -  [Popis - první věc, kterou se uživatelé dozvědí o vašem projektu](/en/coordination/tm-admin/#description)
    -  [Pokyny - co mají uživatelé dělat](/en/coordination/tm-admin/#instructions)
    -  [Metadata - kam projekt patří](/en/coordination/tm-admin/#metadata)
    -  [Prioritní oblasti - kde by uživatelé měli začít mapovat](/en/coordination/tm-admin/#priority-areas)
    -  [Zobrazení - základ pro mapování](/en/coordination/tm-admin/#imagery)
    -  [Oprávnění - kdo smí mapovat a ověřovat](/en/coordination/tm-admin/#permissions)
    -  [Nastavení](/en/coordination/tm-admin/#settings)
    -  [Actions](/en/coordination/tm-admin/#actions)
    -  [Vlastní editor](/en/coordination/tm-admin/#custom-editor)
    -  [Uložit a otestovat](/en/coordination/tm-admin/#save-and-test)
    -  [Zveřejnění](/en/coordination/tm-admin/#publish)
-  [Řízení projektů](/en/coordination/tm-admin/#project-management) 
    -  [Be responsive](/en/coordination/tm-admin/#be-responsive)
    -  [Sekvenování projektů](/en/coordination/tm-admin/#sequencing-projects)
    -  [Životní cyklus projektu](/en/coordination/tm-admin/#project-lifecycle)
-  [Další informace](/en/coordination/tm-admin/#additional-information)
    -  [Úvahy o zobrazování](/en/coordination/tm-admin/#considerations-concerning-imagery)

Tasking Manager je základním nástrojem pro koordinaci mapování v OpenStreetMap. Podporuje humanitární mapovací iniciativy, pořádání mapathonů nebo vytváření mapovacích úloh pro studenty. Aplikace rozděluje zájmovou oblast na zvládnutelné geografické části, které lze rychle a ve spolupráci dokončit. Tento přístup umožňuje rozdělit úkoly mnoha jednotlivým mapovatelům a zároveň omezit možné konflikty při úpravách. 

Software podporuje přesné a kvalitní mapování tím, že poskytuje mapovačům konzistentní sadu pokynů (např. "zmapujte všechny silnice a budovy"). Stručně řečeno, Tasking Manager je způsob, jak nastavit a řídit pracovní postup pro otevřené mapovací činnosti. 

Tato příručka popisuje základní správu Tasking Manageru. Zahrnuje pokyny k vytváření a úpravám mapovacích projektů a manipulaci s oprávněními pro mapování a revizi dat z hromadných zdrojů.

## Login and access

K přihlášení do Tasking Manageru je zapotřebí účet OpenStreetMap (OSM). Můžete navštívit stránku [HOT Tasking Manager](http://tasks.hotosm.org) nebo jakoukoli jinou instanci komunity podle vašich preferencí. Tam klikněte na `Přihlásit se` a budete přesměrováni na [webové stránky OpenStreetMap](https://www.openstreetmap.org), kde si vytvoříte účet. Nebo klikněte na `Přihlásit se`, pokud již nějaký máte, a ve vyskakovacím okně můžete Správci úloh udělit omezený přístup ke svému účtu OSM.

## Oprávnění

Nejzákladnější uživatelská úroveň je **mapper**. Mappeři se mohou přihlásit do Tasking Manageru a vyhledat a vybrat mapovací projekt, na kterém budou pracovat. Veškeré funkce mappera jsou popsány v příručce [LearnOSM Tasking Manager Mapper Guide](/en/coordination/tm-user/). Všimněte si, že některé projekty, například ty, které jsou ve stavu návrhu (tj. nezveřejněné), nebo projekty omezené na určité týmy, nejsou pro běžné mappery viditelné. 

Všechna zvláštní oprávnění mají na starosti *organizace* a *týmy*. Hlavní zastřešující organizací je **organizace** a pod každou organizací lze vytvářet mapovací projekty a týmy. Organizace může představovat uživatele dat, například humanitární organizaci, nebo jakoukoli komunitu OpenStreetMap. Pokud potřebujete nastavit organizaci ve Správci úloh, obraťte se na technické správce instance Správce úloh. Seznam organizací, které jsou přítomny v Tasking Manageru HOT, naleznete v části [HOT Tasking Manager Organizations](https://wiki.openstreetmap.org/wiki/Humanitarian_OSM_Team/HOT_Tasking_Manager_Organizations). Pokud tam vaše komunita nebo organizace není uvedena a chtěli byste vytvářet projekty na HOT's Tasking Manager, vyplňte [tento formulář](http://bit.ly/HOTTasking) a zaregistrujte svůj zájem. 

Každá organizace má jednoho nebo více **manažerů**. Ti mají oprávnění vytvářet a upravovat související projekty. Všechny možnosti správce jsou přístupné prostřednictvím sekce `Správa` v hlavní navigaci.

Manažeři organizace mohou vytvářet **týmy**. Týmy jsou skupiny uživatelů OpenStreetMap a mohou být veřejně viditelné nebo soukromé. Mají také jednoho nebo více manažerů týmů. Týmy mohou být nastaveny tak, že se uživatelé mohou k týmu připojit sami nebo "pouze na pozvání", což znamená, že manažeři týmu jsou o žádostech o připojení informováni a musí o nich rozhodnout.

Pro každý projekt mohou správci přiřadit konkrétní týmy, kterým mohou udělit nebo omezit přístup k mapování, definovat, kdo může ověřovat data nebo kdo jiný může upravovat metadata projektu.

## Create a project

V navigaci nahoře klikněte na `Správa`, v prvním řádku uvidíte místo pro 'Projekty'. Vedle něj klikněte na tlačítko `Přidat` a jeden z nich vytvořte.

![TM Add Project][]

Můžete si vybrat mezi definováním zájmové oblasti (mapovací oblasti) vašeho mapovacího projektu buď pomocí:

* Option 1: `Draw` the area of interest manually
* Možnost 2: `Nahrát soubor` pro import oblasti zájmu jako GeoJSON, KML nebo zazipovaný shapefile.

![TM Nový][]

### Define mapping area

* Option 1: `Draw` the area of interest manually

1. Pomocí tlačítek v horní části můžete přepínat na jiné vrstvy pozadí. 
1. Click the `Draw` button on the left.
2. Chcete-li nakreslit polygon představující oblast mapování v rámečku mapy, podržte pravé tlačítko myši a přesuňte mapu bez kliknutí, čímž přidáte uzel. Polygon by měl těsně rámovat oblast zájmu. Tím ušetříte čas při vyplňování dlaždic, které nejsou předmětem zájmu (např. oceán, les).
3. Kliknutím na výchozí bod dokončete polygon. <!--After completing a polygon you can move the nodes or add new ones to get the area just as you want it.-->

<br>

* Možnost 2: `Nahrát soubor` pro import oblasti zájmu jako GeoJSON, KML nebo zazipovaný shapefile.

1. In the first step of creating a project click on `Upload file`.
2. V okně Nahrát soubor přejděte na svůj soubor.
3. Click the file name to highlight the file and then click ‘Open’.
4. Importované oblasti zájmu nelze v Tasking Manageru upravit.

Je možné, že nahráváte soubor, který již obsahuje předdefinované úlohy (malé mapovací čtverce). Více informací o tom najdete níže v části [Definovat úlohy s importovanými daty](/en/coordination/tm-admin/#advanced:-define-tasks-with-imported-data).

> POZNÁMKA: Tasking Manager má svá omezení! Maximální technický limit pro projekt je 5 000 km2, aby však dokončení projektu netrvalo příliš dlouho, snažte se ho udržet pod 1 000 km2. Pokud potřebujete zmapovat větší oblast, budete muset vytvořit několik projektů. Velikost projektu uvidíte v levém dolním rohu náhledu mapy. 

### Definovat úlohy

Po vymezení celkové oblasti mapování se tato oblast rozdělí na menší oblasti zvané *Úlohy*. Velikost úloh projektu musíte pečlivě zvážit. Dobře navržené projekty mají odpovídající velikosti úloh, což umožňuje jejich co nejefektivnější dokončení. 

![TM Tile Sizes][]

Oblast projektu se automaticky rozdělí na buňky mřížky a každá buňka se stane úlohou. Pomocí tlačítek `Větší` a `Menší` můžete upravit celkovou velikost čtverců úlohy. Výchozí velikost úlohy je pravděpodobně příliš velká. Při změně velikosti úlohy si všímejte velikosti úlohy uvedené vlevo vedle položky 'Velikost každé úlohy je přibližně ... km2'.

Nespěchejte a pečlivě si nastavte velikost úloh! Snažte se zmenšit velikost úlohy tak, abyste si mysleli, že by to sebevědomému mapovači zabralo **15 minut**. Optimální velikost úlohy zcela závisí na objektu (objektech), které po maperech požadujete, a na hustotě těchto objektů. Například projekt mapování silnic ve venkovské oblasti bude mít mnohem větší úkoly než projekt, který zahrnuje digitalizaci budov v hustém osídlení.

> Přibližte a aktivujte zobrazení Bing, abyste určili vhodnou velikost úlohy. Tlačítky v horní části mapy můžete přepínat mezi několika vrstvami podkladu.

Po nastavení celkové velikosti úlohy můžete některé úlohy selektivně rozdělit na čtyři menší pomocí tlačítka `Kliknutím na rozdělení`. Nebo můžete `Kreslit oblast pro rozdělení`, a to vám umožní nakreslit polygon nad oblastí, abyste rozdělili všechny úlohy uvnitř. Tyto funkce jsou užitečné zejména v případě, že hustota prvku, který chcete mapovat, se v oblasti projektu liší. Například může existovat hustě zastavěná pobřežní oblast, která potřebuje malé úlohy, a vnitrozemská venkovská oblast, která potřebuje mnohem větší úlohy. Tlačítko `Reset` odstraní veškeré vaše vlastní rozdělení.

Úvahy při rozhodování o velikostech úloh:
-  Úlohy lze rozdělit, ale po vytvoření projektu není možné je znovu spojit.
-  Po vytvoření projektu je rozdělení úkolů velmi časově náročné a musí se provádět po jednom úkolu.
-  Na okrajích a v rozích úloh existuje větší potenciál pro konflikty mezi sousedními mapovači. Menší úlohy znamenají více rohů a hran. Existuje kompromis ve velikosti úlohy, aby byla pro mapovače snadná, ale aby mezi nimi nevznikaly konflikty při mapování.
-  Malé úkoly se snáze mapují, ale více úkolů znamená, že mapovači musí strávit více času aktualizací stavu každého z nich, a projekty s příliš malými úkoly tak mohou být neefektivní.
-  Začínající mappeři potřebují zhruba čtyřikrát delší dobu než zkušení mappeři.
-  Začínající mappeři si musí osvojit satelitní snímky. Všimnout si správných prvků může být obtížné.

Jakmile jste s velikostí úlohy spokojeni, klikněte na tlačítko `Další`.

### Pokročilé: Definujte úlohy s importovanými daty

Pokud jste nahráli soubor pro definici oblasti projektu, může tento soubor obsahovat také tvary jednotlivých úloh. Například hotový projekt z MapSwipe, který se zaměřuje na obydlené oblasti, nebo složitou síť, kterou jste předem vytvořili v QGIS. V takovém případě nezapomeňte povolit přepínač "Nastavit úlohy pomocí nahraných polygonů". Tím přeskočíte rovnou do fáze tvorby projektu s pojmenováním. 

![TM New Polys][]

### Oříznutí projektové plochy

![TM Trim][]

Po určení velikosti úloh budete mít možnost oříznout úlohy v rozsahu oblasti mapování. Téměř jistě to budete chtít udělat. Klepnutím na `Oříznout` odstraníte všechny čtverce úloh, které nepřekrývají vaši oblast projektu. 

![TM Trim coarse][]

Pokud před kliknutím na tlačítko 'Oříznout' zapnete možnost `Oříznout úlohy pro přesné vymezení oblasti zájmu pro mapování`, budou překrývající se části úloh na okraji oblasti zájmu ostře oříznuty oproti oblasti zájmu.

![TM Trim fine][]

Při ostrém ořezávání může dojít k extrémně malým úkonům. Tyto drobné úlohy mohou mapovatele zmást. Můžete je odstranit výběrem možnosti `Odstranit`, když se zobrazí zpráva 'There are ... tasks smaller than 2,000m2. Chcete je vyřadit?

> Všimněte si počtu úkolů, které váš projekt obsahuje (podívejte se do levého dolního rohu mapy). Maximální technický limit pro počet úkolů v jednom projektu Tasking Manageru je 5 000. Aby však dokončení projektu netrvalo příliš dlouho, snažte se udržet počet úkolů pod 1 000 - pokud potřebujete zmapovat větší oblast, zkuste ji rozdělit na menší projekty. 

Klikněte na `Další`.

### Název projektu

Název projektu je jedním z jeho nejdůležitějších aspektů, pokud jde o to, aby se o něm dozvěděla širší veřejnost. Pokuste se uvést název země, ve které se projekt nachází (např. Jižní Súdán), důvod mapování (např. Očkování COVID) a také konkrétnější místo, třeba název okresu nebo osady (např. Yambio County). Úplný název projektu může být např: _Jižní Súdán, očkování COVID, okres Yambio_. 

Ensure your organization is selected under the 'Organization' field. 

> Before completing this stage make sure you are happy with the project's area of interest and the overall number of tasks, these elements cannot be adjusted later on. 

Klikněte na tlačítko `Vytvořit`. Váš projekt bude vytvořen, ale nebude okamžitě publikován - nejprve budete přesměrováni do nabídky Úpravy projektu. 

## Upravit projekt

Nyní se zobrazí nabídka "Upravit" vašeho projektu. Před uložením projektu je třeba pečlivě projít nabídku 'Edit' a dokončit nastavení. Zde je stručný přehled dílčích nabídek, které uvidíte na levé straně:

- Popis - Nastavte stav, prioritu a textový popis související s projektem.
- Návod - Podrobný návod, jak zmapovat potřebné funkce a jak přistupovat k projektu.
- Metadata - Definujte prvky, které je třeba mapovat. Zahrnuje také informace používané pro kategorizaci projektů, které se používají při filtrování projektů.
- Priority Areas - Allows you to specify parts within the project area that should be mapped first.
- Snímky - Vyberte snímky, které se ve výchozím nastavení načtou, když dobrovolníci mapují váš projekt. 
- Oprávnění - umožňuje omezit přístup k projektu pro mapování a ověřování.
- Nastavení - zapnutí/vypnutí alternativních editorů, například RapiD.
- Akce - Výkonné hromadné akce, které můžete provádět s projektem, například klonování nebo mazání.
- Custom editor - Add a custom editor using a URL

> Pečlivé vyplnění těchto informací je nezbytnou součástí úspěšného mapovacího projektu. Zvláště důležité je, aby popis projektu a pokyny byly jasně sděleny, aby si mapovatelé byli vědomi důležitosti kvality dat a osvědčených postupů. Mějte na paměti, že přispěvatelé nemusí mít předchozí zkušenosti s OpenStreetMap a pravděpodobně nebudou znát pokyny pro označování.

### Popis

![TM Popis][]

#### Stav

První je stav projektu. Ten může být nastaven na hodnotu **Návrh**, **Zveřejněno** nebo **Archivováno**.

- **Draft** - Your project will start in draft mode. In this mode it will not be discoverable and it will not be possible for the public to contribute towards it. This is perfect while you are still setting your project up and testing it before release. 
- **Zveřejněno** - Když jste dokončili nastavení projektu, otestovali jej a jste rádi, že je veřejně uveden a otevřen pro mapování/ověřování.
- **Archived** - All projects should end up being archived. Archived projects are public but locked for contributions. You should consider archiving your project either if:
  - It is 100% mapped and validated
  - Pokyny nebo vyobrazení jsou značně zastaralé.
  - Projekt byl vytvořen před více než rokem
  - Mapové podklady již nejsou pro humanitární účely v oblasti projektu potřeba.

#### Priorita

Dále je to priorita projektu. Ta určuje, jak blízko přední části Správce úkolů bude projekt zobrazen na stránce Prozkoumat projekty. Tuto hodnotu lze nastavit na **Podstatné**, **Vysoké**, **Střední** nebo **Nízké**.

- **Urgent** - Only set this status if the project is **in response to a disaster and the data needs are immediate**. Very few projects have this priority level. 
- **Vysoká** - Pro projekty, které nejsou nutně reakcí na katastrofu, ale data jsou potřebná v **krátkém časovém horizontu**. 
- **Střední** - Pokud jsou data potřebná, ale ne v příliš krátkém časovém horizontu.
- **Nízká** - Pokud chcete svůj projekt zveřejnit, ale nechcete, aby byl příliš výrazný. Možná budete raději sdílet svůj projekt s konkrétními skupinami pomocí adresy URL projektu.

#### Krátký popis

Přidejte alespoň dvě věty, které stručně popisují váš projekt. Je to důležité, protože dobrovolníci si je přečtou, aby se rozhodli, zda chtějí přispět. Pokuste se jasně vysvětlit, **proč** se data sbírají a **jak budou data z mapy využita**. 

> Tato pole podporují **Markdown** a mohou obsahovat obrázky (přetažením myší) a videa (přidáním adresy URL YouTube pro automatické vložení).

#### 'Long' Description

Zde můžete svůj projekt popsat podrobněji. Uveďte více informací o tom, proč projekt existuje, kdo bude data používat a jaký očekávaný dopad bude mapování mít. Pokud projekt zahrnuje nějakou spolupráci nebo partnery, můžete to zde rozvést. 

> Do kteréhokoli z těchto textových polí můžete přidat další překlady. Pokud chcete přidat překlad, klikněte na dvoupísmenný kód jazyka a zadejte přeložený text. Uživatelům, kteří nastavili Správce úloh na daný jazyk, se projekt automaticky zobrazí v tomto jazyce. Ve výchozím nastavení je výchozím polem anglický jazyk, to lze změnit v podnabídce "Nastavení" projektu.

#### Datum ukončení

Pokud máte datum, ke kterému chcete mít projekt kompletně zmapovaný a ověřený, můžete ho sem přidat. Je to nepovinné a po překročení tohoto data se pro projekt nic nemění a dobrovolníci mohou i poté přispívat. Přispěvatelé uvidí datum termínu uvedené vedle projektu. 

### Pokyny

![TM pokyny][]

#### Komentář k sadě změn

Zde můžete přidat další sledovací značky, které se automaticky vyplní pokaždé, když někdo při mapování projektu uloží svou práci. Pokud například chcete začít sledovat všechny příspěvky napříč všemi projekty vaší organizace, můžete k nim přidat společný sledovací tag, např. #MSF nebo #cartONG. Snažte se, aby tyto značky byly **krátké** a nepřidávejte jich příliš mnoho, nepřehledné komentáře ke změnovým sadám jsou matoucí pro interpretaci a měl by být ponechán prostor pro mapovače, aby mohli zanechat popisné komentáře ke změnovým sadám. 

> Vezměte prosím na vědomí, že jedinečný tag pro sledování projektu již bude přítomen, např. #hotosm-project-11188 - **prosím, ponechte jej tak, jak je**, je velmi důležitý pro sledování průběhu projektu. Číslo na konci tagu je jedinečné ID vašeho projektu.

#### Podrobné pokyny

Přidejte popisné pokyny pro mapovače a validátory, kterými se mohou řídit při práci na projektu. Váš projekt bude veřejný, proto **napište pokyny pro nezkušené uživatele** bez znalosti místních podmínek a souvislostí. Používejte srozumitelný jazyk, protože vaše cílové publikum nemusí být rodilí mluvčí angličtiny.

1. Nejdůležitější informace napište na začátek, aby byly viditelné. Mohlo by se jednat o popis snímků a upozornění na problém s kompenzací snímků s návodem. Nebo by to mohl být pokyn pro mapovatele, aby v projektu mapování dálnic ignorovali cesty a koleje a zaměřili se na výraznější dálnice.
2. Přidejte pokyny specifické pro daný kontext/místo. Ty se výrazně liší, ale pomohou mapovatelům interpretovat satelitní snímky. Např. "V tomto projektu v Jižním Súdánu očekávejte mnoho kruhových hnědých doškových chatrčí" nebo "Osady v Guatemale jsou často hustě zastavěné, při mapování jednotlivých budov si je extrémně přibližte, aby se ujistili, že na sebe nenavazují nebo se nepřekrývají". Přetáhněte snímky leteckých snímků do pokynů zde a vylepšete tak tuto část.
3. Rozhodně připojte podrobný popis **způsobu mapování každého prvku**, který chcete zmapovat. Podívejte se na existující (ale nedávné) projekty v Tasking Manageru, zda si můžete vypůjčit nějaký existující návod (pozor, některé projekty nebudou mít dobré návody!).
4. Základním zdrojem informací o tagování je [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Map_Features). Pro mnoho projektů souvisejících s HOT je vhodnou specializací stránka [Tagging highways in Africa](http://wiki.openstreetmap.org/wiki/Highway_Tag_Africa), na kterou se vyplatí odkázat v pokynech k vašemu projektu. Pokud váš projekt musí dodržovat jiné standardy značení, napište podobnou stránku na Wiki a uveďte na ni odkaz v pokynech.
5. Další upřesnění: Pokud je projekt vhodný pouze pro mappery s určitou úrovní zkušeností. Projekt například používá importy nebo stávající data by měla být přepracována na GPS stopy nebo nějaké jiné snímky. Formulujte to tak, aby se noví mappeři cítili přizváni k přispívání do jiných projektů, ale aby pochopili, že v tomto případě jsou vyžadovány pokročilé techniky.
6. Existují pokyny, které se týkají běžných chyb, s nimiž se při validaci setkáváme. Příkladem je kompilace Blakea Girardota o [mapování v západní Africe](http://wiki.openstreetmap.org/wiki/User:Bgirardot/West_African_HOT_Mapping_Tips). Použijte odkaz v pokynech a vysvětlete, že dodržování těchto pokynů je nutné.

#### Podle pokynů k úloze

Je to nepovinné, ale je možné přidat krátký úryvek dodatečných pokynů, které mapovatelé uvidí při práci na úkolu. To je vidět na pravé straně zobrazení editoru Správce úloh nad oddílem "Stav úlohy". Bude viditelný po celou dobu mapování, takže pokud je něco **zvlášť důležitého**, o čem chcete mapovače **instruovat**, můžete to přidat sem. 

### Metadata

![TM Metadata][]

#### Úroveň mapovače

Tím se změní úroveň obtížnosti, která se **zobrazí** pro váš projekt. Zvažte to velmi pečlivě, složité projekty, které jsou nevhodně nastaveny na obtížnost Začátečník, **mohou mít za následek značné problémy s kvalitou dat**. 

> Všimněte si, že to nemění, kdo může **skutečně přispívat** do vašeho projektu, tato omezení jsou implementována v podnabídce Oprávnění.

Většina projektů je nastavena na obtížnost **začátečník** nebo **středně pokročilý**, několik projektů je nastaveno na obtížnost pokročilý. 

- **Začátečník** - Zvažte tuto možnost, pokud je váš projekt snadno mapovatelný a:
  - Žádáte přispěvatele, aby zmapovali pouze jeden prvek, konkrétně **pouze budovy**.
  - Hustota prvků je nízká, tj. ve **venkovské** oblasti.
  - V oblasti vašeho projektu je **malé množství** existujících dat OSM.
  - Nejsou žádné problémy se zarovnáním snímků
- **Mírně pokročilí** - Pokud je váš projekt složitější na mapování, měli byste tuto možnost zvážit, pokud:
  - Žádáte přispěvatele, aby mapovali více než jeden objekt, např. budovy **a** silnice.
  - V oblasti vašeho projektu je střední/vysoká hustota těchto objektů, tj. **městské** oblasti.
  - V oblasti vašeho projektu existují **podstatná** data OSM.
  - Mohou se vyskytnout **problémy se zarovnáním snímků** nebo požádáte přispěvatele o použití více než jednoho zdroje snímků.
- **Pokročilý** - Pokud je projekt extrémně náročný na mapování, zvažte tuto možnost, pokud: 
  - V oblasti vašeho projektu je velmi vysoká hustota obyvatel, tj. **centrální městské** oblasti.
  - There is a **lot of** existing OSM data in your project area
  - Existují **složité problémy se zarovnáním snímků**.

#### Types of mapping

Toggle these on/off depending on the features that you wish to be mapped in your project. Generally the **fewer features the better**, as projects which aim to map too many features often struggle to make much progress. 

> Projekty, které vyžadují mapování velkého množství prvků, jsou pro mapovače obtížné a obtížně se ověřují. Trvá mnohem déle, než získáte dobře použitelnou sadu dat. Velikost úloh je také obtížné zefektivnit pro různé typy mapování, např. budovy potřebují malé čtverce úloh, silnice a vodní toky potřebují větší čtverce úloh. Nejlepším postupem je vytvořit více projektů na stejném území, aby se budovy a dálnice/vodní cesty mapovaly odděleně. 

#### Předvolby iD Editoru

Pokud v rozevíracím seznamu vyberete jednu nebo více položek, budou moci mapovači používající iD přiřadit tyto prvky pouze k objektům, které mapují. To se doporučuje pro začínající projekty **pouze pro budovy**. Bude to znamenat, že přispěvatelé nebudou moci označit jiné prvky, i když se o to pokusí. U složitějších projektů se vyhněte používání předvoleb, protože se mohou rychle stát přítěží. Například projekt mapování dálnic by potřeboval přidat desítky předvoleb, aby bylo možné mapovat všechny typy dálnic. 

#### Organizace

Název vaší organizace by zde již měl být uveden, v opačném případě jej vyberte z rozbalovací nabídky.

#### Kampaň

If you have created several projects which are associated with each other, you can choose to assign them to a campaign. Users can filter projects by campaign name on the Explore Projects page. For example, if your project is associated with malaria elimination, you might want to put it under the 'Malaria Elimination' campaign. To request the creation of additional campaign names please complete [this form](https://forms.gle/qafvkp4iAxnY6rjE6). 

#### Categories

Select the themes here that relate to your project. Contributors can specify their interests in these categories in their settings page.

#### OSMCha filter ID

[OSMCha](https://osmcha.org/) je výkonný nástroj pro zajištění kvality dat, který se vám může hodit při sledování příspěvků do vašeho projektu. Standardní filtr omezuje výstup na ohraničení projektu a na příspěvky, které nejsou starší než datum vytvoření projektu a mají v komentáři ke změnám název projektu. Pokud si myslíte, že by pro analýzu sad změn vašeho projektu bylo vhodnější něco jiného, pak zde uveďte buď adresu URL OSMCha, nebo id filtru OSMCha. Filtr OSMCha je k dispozici na konci stránky s přehledem vašeho projektu. 

### Priority Areas

![TM Priority Area][]

Pomocí nástrojů zde nakreslete oblasti, které by měly být zmapovány jako první. Pro projekt můžete mít více prioritních oblastí. Prioritní oblasti můžete také kdykoli změnit. Prioritní oblast se dobrovolníkům zvýrazní a pokud vyberou možnost "Zmapovat úkol", vybere se náhodně úkol z prioritní oblasti jako první. 

> Při mapování katastrof na počátku události je často nejlepším postupem mít k dispozici velkou projektovou mapovací oblast a používat prioritní oblasti pro zaměření mapování podle toho, jak přicházejí nové informace.

### Imagery

V rozbalovací nabídce vyberte zdroj leteckých snímků, který chcete pro svůj projekt automaticky načíst. Pokud snímky nejsou v rozevírací nabídce uvedeny, můžete zvolit možnost "Vlastní" a poté přidat adresu URL TMS. 

> Všimněte si, že Tasking Manager **nemůže hostovat vlastní snímky**, musí být hostovány externě a propojeny pomocí adresy URL TMS. Pokud jste spokojeni s tím, že vaše snímky jsou otevřené k použití, zvažte prosím použití [OpenAerialMap](https://openaerialmap.org/) pro hostování vašich snímků.

Licence - Pokud je pro mapovače vyžadována specifická licence, kterou musí při používání snímků akceptovat, můžete ji zde vybrat. Například pro snímky Maxar je to "DigitalGlobe Satellite EULA". Pokud potřebujete licenci, která není k dispozici, můžete kontaktovat správce instalace Tasking Manageru a požádat ho o její přidání.

### Oprávnění

V nabídce "Metadata" jsme mohli změnit úroveň obtížnosti, která se u projektu **zobrazuje**. V nabídce "Oprávnění" můžeme změnit, kdo má k projektu **přístup**. Je důležité si připomenout různé úrovně uživatelů:

- **Začátečník** Uživatel - Každý uživatel, který si právě vytvořil účet nebo provedl **méně než 250 sad změn** (uložení).
- **Středně pokročilý** uživatel - jakýkoli uživatel, který provedl mezi **250 a 500 změnami**.
- **Pokročilý** uživatel - Každý uživatel, který provedl **více než 500 sad změn**

> Stejně jako dříve velmi pečlivě zvažte oprávnění, komplexní projekty, které nevhodně umožňují všem uživatelům přispívat, mohou vést k **závažným problémům s kvalitou dat**. 

![TM Permissions][]

#### Oprávnění k mapování

Here you can choose who can **map** your project:

- If your project is easy to contribute towards and you consider it a beginner project you might want set this to **'Any user'**.
- If your project is more complex and requires more experience, restrict mapping to **'Only users with intermediate or advanced level'**. 
- Pokud chcete být ještě vybíravější, můžete také požadovat, aby byl mapovač součástí **týmu**. Týmy pak musí být definovány níže.

#### Oprávnění k validaci

Zde můžete zvolit, kdo může **ověřit** váš projekt. Při validaci zkušení mappeři kontrolují příspěvky, které jsou ve vašem projektu vloženy, proto by tato možnost měla být omezena minimálně na 'Pouze uživatelé se středně pokročilou nebo pokročilou úrovní' **jako minimum**. **V ideálním případě** byste měli ověřování omezit ještě více na **'Pouze členové týmu'**, ale když to uděláte, nesmíte zapomenout tyto týmy **definovat** níže. 

#### Týmy

Pomocí filtrů můžete vyhledávat a přidávat týmy. Můžete přidat svůj vlastní tým (týmy), ale neváhejte přidat i jiné týmy. Po přidání týmu nezapomeňte vybrat roli (mapovač, validátor, projektový manažer). 

Oprávnění týmu nebudou fungovat, pokud jste neomezili oprávnění Mapování a/nebo Ověřování na "Pouze členové týmu". Pokud udělíte týmu přístup Správce projektu, umožní to jeho členům upravovat projekt.

> V Tasking Manageru HOT' si můžete přidat dva větší validační týmy, a to 'HOT Global Validators' a HOT's 'Validator Trainees'. Vezměte prosím na vědomí, že ačkoli to těmto členům týmu dává **oprávnění** validovat váš projekt, **nemusí to nutně znamenat**, že **budou validovat** váš projekt. 

#### Soukromí

Přepnutím do režimu 'Soukromý' se projekt skryje všem uživatelům kromě těch, kteří jsou součástí výše definovaných týmů. 

### Nastavení

![TM Nastavení][]

#### Výchozí jazyk

Změnou tohoto nastavení změníte výchozí jazyk názvu, popisu a pokynů projektu.

#### Editoři pro mapování/validaci

Tím se dostupné editory omezí na ty, které byly zaškrtnuty. Můžete zadat různé sady pro mapování a pro ověřování. Všimněte si, že je zde možné povolit editor RapiD s asistencí AI. 

#### Vynutit náhodný výběr úlohy

Pokud je tato možnost povolena, přispěvatelé nemohou vybrat konkrétní úlohy pro mapování.

### Akce

Zde můžete v projektu provádět výkonné hromadné akce. **U mnoha z těchto možností buďte opatrní**, **nejsou vratné**. 

![TM Akce][]

#### Zpráva všem přispěvatelům

Odešle zprávu Tasking Manageru všem, kteří označili úkol za splněný nebo platný. Lze ji použít k poděkování přispěvatelům a/nebo k jejich nasměrování na další projekty v kampani. Měla by být také použita před použitím jedné ze dvou níže popsaných možností Validovat/zneplatnit všechny úkoly.

#### Mapování, validace a zneplatnění

Tím se nastaví stav všech úloh na mapované, validované nebo zneplatněné. Zacházejte s nimi opatrně, protože je nelze vrátit zpět.

#### Resetování úloh

Tím se všechny úlohy vrátí do původního stavu, ale předchozí akce lze stále zobrazit v historii úloh. Zacházejte s nimi opatrně, protože je nelze vrátit zpět.

#### Převod vlastnictví projektu

Můžete určit jiného manažera ve vaší organizaci, který bude uveden jako tvůrce projektu. Vyhledejte jeho uživatelské jméno OSM. 

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
