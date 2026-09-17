---
id: eotvos-1994-diving-bell
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-1994-diving-bell
solution_type: official
source_document: solution-document-eotvos-1994-s
source_pdf: cache/phoxiv/eotvos/1994_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/1994_S.pdf."
---

1. feladat. Egy tóba 20 m mélyre les¶llyesztett, 1 m3
¶rtartalmú búvárharang megtelt vízzel. A felszínen úszó
hajóból vékony sövön át leveg®t pumpálunk a harang alá. (A harang súlyos, még ekkor sem emelkedik fel.) A leveg®
és a víz h®mérséklete között nin s számottev® különbség.
| Legalább mekkora munkát végez a kompresszor az 1 m3
víz kiszorítása során?
Károlyházy Frigyes
Megoldás. Készítsünk vázlatos ábrát a folyamatról! Hagyjunk el minden felesleges részletet, hogy maga a termo-
dinamikai folyamat jól látható legyen. Két, egymást követ® részfolyamatról van szó:
| el®ször össze kell nyomni a gázt a megfelel® nagyobb nyomásra (20 méterrel a víz felszíne alatt a nyomás a légkori
nyomásnak kereken háromszorosa);
| ezután a megfelel® nyomású gázt át kell nyomni a búvárharang alá, a víz helyére.
Mindezt az 1. ábrán vázoltuk.
Úgy t¶nik, hogy a dugattyút nyomó er® munkáját kell meghatározni. Ez azonban nagyobb, mint a kompresszor által
végzett munka, mert besegít a küls® légnyomás is. Így a kompresszor által végzett munka a 2. ábrán bevonalkázott
területtel lesz egyenl®: a dugattyú által végzett összes munkából le kell vonni a légköri nyomás által végzett p0V0
munkát.
Az izotermikus tágulási munka kiszámítási formája megtalálható a függvénytáblázatban:
W = NkT ln
V2
V1
.
Esetünkben izoterm összenyomásról van szó, és a küls® munkát kell kiszámítanunk. Felhasználva az állapotegyen-
letet (p0V0 = NkT0) és azt, hogy a térfogatot harmadrészére kell sökkenteni, az izoterm összenyomáshoz szükséges
munka:
WT = p0V0 ln3.
Behelyettesítve p0 ≈ 105
Pa és V0 = 3 m3
értékeket:
WT ≈ 330 kJ.
Ehhez kell hozzáadnunk az átnyomáshoz szükséges munkát, amelyet úgy számíthatunk ki, hogy a dugattyút nyomó
állandó er®t megszorozzuk a dugattyú elmozdulásával:
Wátnyomási = F · s = 3p0A ·
V0/3
A
= p0V0 = 300 kJ.
Így az összes munka 630 kJ.
Most már sak a küls® p0 nyomás által végzett p0V0 munkát kell levonnunk, hogy megkapjuk a kompresszorra jutó
részt:
Wkompresszor = 630 kJ − 300 kJ = 330 kJ.
Ezzel válaszoltunk a feladat kérdésére.
Kiegészít® megjegyzések.
1. Az izoterm munka kiszámítási formulájához úgy lehet eljutni, hogy az izoterma alatti területet határozzuk meg:
W =
V2 Z
V1
pdV =
V2 Z
V1
NkT
V
dV = NkT
V2 Z
V1
1
V
dV,W = NkT ln
V2
V1
.
2. Vajon nem lehet-e az izotermikus folyamat helyett más folyamattal, kevesebb befektetett munka árán is élhoz
érni?
Adiabatikus összenyomáskor kevesebb munka is elég lenne a 3p0 nyomás eléréséhez. Viszont akkor fel is melegedne
a gáz, amely azután az átnyomás közben kezdene leh¶lni, s így sökkenne a nyomása. Épp ezért 3p0-nál jóval nagyobb
nyomásra kellene adiabatikusan összenyomni, ehhez pedig már több munkára lenne szükség, mint az izotermikus
esetben.
És ha el®ször leh¶tenénk a gázt? Állandó p0 nyomáson
T0
3
h®mérséklet¶re h¶tve, a térfogata
V0
3
lenne. Eközben sak
a küls® légkör végezne munkát. Majd pedig hagynánk a gázt állandó
V0
3
térfogaton visszamelegedni T0 h®mérsékletre,
ekkor a nyomása elérné a 3p0 értéket, s sak az átnyomási munkát kellene a kompresszorral végeztetni. Lehet, hogy
200 kJ is elég lenne? Ez már ravaszabb gondolat, de azt lehet ellene felhozni, hogy a feladatban szó se volt arról,
hogy a hajón még egy megfelel® h¶t®berendezés is m¶ködik, amelyet felhasználhatunk a probléma megoldásához. De
tegyük fel, hogy megengednénk a h¶t®gép használatát, akkor viszont azt a munkát is illene számításba venni, amivel
a h¶t®gépet | pl. a h¶t®gép kompresszorát | m¶ködtetni kell. Nem lenne nehéz megmutatni, hogy ismét rá
zetünk:
összesen több munkát kell végeznünk.
3. Úgy is ki lehet számítani a kompresszor által végzett munkát, hogy elképzeljük: a kezdetben 3 m3
-nyi leveg®t
egy zsákba zárjuk, és a zsákot lassan lehúzzuk 10 m-nyire a víz alá. Mivel x méter mélységben az izotermikusan
összenyomott gázra F(x) = 3 · 104
· (1 + x/10)−1
felhajtóer® hat, a lehúzás során végzett munka (SI-egységrendszerben
számolva)
W =
20 Z
0
f(x)dx =
20 Z
0
3 · 104
1 + x/10
dx = 3 · 105
· ln3 ≈ 330 kJ.
