---
id: solution-ocr-eotvos-1994-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1994_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1994-diving-bell]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. feladat. Egy tóba 20 m mélyre lesúllyesztett, $1 \mathrm {~m} ^ { 3 }$ ürtartalmú búvárharang megtelt vízzel. A felszínen úszó hajóból vékony csövön át levegőt pumpálunk a harang alá. (A harang súlyos, még ekkor sem emelkedik fel.) A levegő és a víz hőmérséklete között nincs számottevő különbség.
| Legalább mekkora munkát végez a kompresszor az $1 \mathrm {~m} ^ { 3 }$ víz kiszorítása során?
Károlyházy Frigyes
Megoldás. Készítsünk vázlatos ábrát a folyamatról! Hagyjunk el minden felesleges részletet, hogy maga a termodinamikai folyamat jól látható legyen. Két, egymást követő részfolyamatról van szó:
| először össze kell nyomni a gázt a megfelelő nagyobb nyomásra (20 méterrel a víz felszíne alatt a nyomás a légkori nyomásnak kereken háromszorosa);
| ezután a megfelelő nyomású gázt át kell nyomni a búvárharang alá, a víz helyére.
Mindezt az 1. ábrán vázoltuk.
Úgy túnik, hogy a dugattyút nyomó erő munkáját kell meghatározni. Ez azonban nagyobb, mint a kompresszor által végzett munka, mert „besegít” a külső légnyomás is. Így a kompresszor által végzett munka a 2. ábrán bevonalkázott területtel lesz egyenlő: a dugattyú által végzett összes munkából le kell vonni a légköri nyomás által végzett $p _ { 0 } V _ { 0 }$ munkát.

Az izotermikus tágulási munka kiszámítási formája megtalálható a függvénytáblázatban:

$$
W = N k T \ln \frac { V _ { 2 } } { V _ { 1 } } .
$$

Esetünkben izoterm összenyomásról van szó, és a külső munkát kell kiszámítanunk. Felhasználva az állapotegyenletet $\left( p _ { 0 } V _ { 0 } = N k T _ { 0 } \right)$ és azt, hogy a térfogatot harmadrészére kell csökkenteni, az izoterm összenyomáshoz szükséges munka:

$$
W _ { T } = p _ { 0 } V _ { 0 } \ln 3 .
$$

Behelyettesítve $p _ { 0 } \approx 10 ^ { 5 } \mathrm {~Pa}$ és $V _ { 0 } = 3 \mathrm {~m} ^ { 3 }$ értékeket:

$$
W _ { T } \approx 330 \mathrm {~kJ} .
$$

Ehhez kell hozzáadnunk az átnyomáshoz szükséges munkát, amelyet úgy számíthatunk ki, hogy a dugattyút nyomó állandó erốt megszorozzuk a dugattyú elmozdulásával:

$$
W _ { \text {átnyomási } } = F \cdot s = 3 p _ { 0 } A \cdot \frac { V _ { 0 } / 3 } { A } = p _ { 0 } V _ { 0 } = 300 \mathrm {~kJ} .
$$

Így az összes munka 630 kJ.
Most már csak a külső $p _ { 0 }$ nyomás által végzett $p _ { 0 } V _ { 0 }$ munkát kell levonnunk, hogy megkapjuk a kompresszorra jutó részt:

$$
W _ { \text {kompresszor } } = 630 \mathrm {~kJ} - 300 \mathrm {~kJ} = 330 \mathrm {~kJ} .
$$

Ezzel válaszoltunk a feladat kérdésére.
Kiegészító megjegyzések.

1. Az izoterm munka kiszámítási formulájához úgy lehet eljutni, hogy az izoterma alatti területet határozzuk meg:

$$
W = \int _ { V _ { 1 } } ^ { V _ { 2 } } p d V = \int _ { V _ { 1 } } ^ { V _ { 2 } } \frac { N k T } { V } d V = N k T \int _ { V _ { 1 } } ^ { V _ { 2 } } \frac { 1 } { V } d V , W = N k T \ln \frac { V _ { 2 } } { V _ { 1 } } .
$$


2. Vajon nem lehet-e az izotermikus folyamat helyett más folyamattal, kevesebb befektetett munka árán is célhoz érni?

Adiabatikus összenyomáskor kevesebb munka is elég lenne a $3 p _ { 0 }$ nyomás eléréséhez. Viszont akkor fel is melegedne a gáz, amely azután az átnyomás közben kezdene lehülni, s így csökkenne a nyomása. Épp ezért $3 p _ { 0 }$-nál jóval nagyobb nyomásra kellene adiabatikusan összenyomni, ehhez pedig már több munkára lenne szükség, mint az izotermikus esetben.

És ha először lehǘtenénk a gázt? Állandó $p _ { 0 }$ nyomáson $\frac { T _ { 0 } } { 3 }$ hốmérsékletűre hǘtve, a térfogata $\frac { V _ { 0 } } { 3 }$ lenne. Eközben csak a külső légkör végezne munkát. Majd pedig hagynánk a gázt állandó $\frac { V _ { 0 } } { 3 }$ térfogaton visszamelegedni $T _ { 0 }$ hőmérsékletre, ekkor a nyomása elérné a $3 p _ { 0 }$ értéket, s csak az átnyomási munkát kellene a kompresszorral végeztetni. Lehet, hogy 200 kJ is elég lenne? Ez már ravaszabb gondolat, de azt lehet ellene felhozni, hogy a feladatban szó se volt arról, hogy a hajón még egy megfelelő hütőberendezés is múködik, amelyet felhasználhatunk a probléma megoldásához. De tegyük fel, hogy megengednénk a hütógép használatát, akkor viszont azt a munkát is illene számításba venni, amivel a hütőgépet | pl. a hütőgép kompresszorát | müködtetni kell. Nem lenne nehéz megmutatni, hogy ismét „ráfizetünk”: összesen több munkát kell végeznünk.
3. Úgy is ki lehet számítani a kompresszor által végzett munkát, hogy elképzeljük: a kezdetben $\mathrm { a } ^ { 3 }$-nyi levegốt egy „zsákba” zárjuk, és a zsákot lassan lehúzzuk 10 m-nyire a víz alá. Mivel $x$ méter mélységben az izotermikusan összenyomott gázra $F ( x ) = 3 \cdot 10 ^ { 4 } \cdot ( 1 + x / 10 ) ^ { - 1 }$ felhajtóerő hat, a lehúzás során végzett munka (SI-egységrendszerben számolva)

$$
W = \int _ { 0 } ^ { 20 } f ( x ) d x = \int _ { 0 } ^ { 20 } \frac { 3 \cdot 10 ^ { 4 } } { 1 + x / 10 } d x = 3 \cdot 10 ^ { 5 } \cdot \ln 3 \approx 330 \mathrm {~kJ} .
$$
