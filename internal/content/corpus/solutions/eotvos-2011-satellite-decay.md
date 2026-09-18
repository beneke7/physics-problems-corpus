---
id: eotvos-2011-satellite-decay
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2011-satellite-decay
solution_type: official
source_document: solution-document-eotvos-2011-s
source_pdf: cache/phoxiv/eotvos/2011_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2011_S.pdf."
---

1. feladat. Pályafutásuk végén a sorsukra hagyott m¶holdak a sebesség négyzetével arányos légellenállási er® hatá-
sára fokozatosan veszítenek me hanikai energiájukból, és végül a légkör s¶r¶bb rétegeibe érve elégnek. Belátható, hogy
az eredetileg körpályákon kering® m¶holdak a Föld felszínéhez közeledve mindvégig közelít®leg körpályákon haladnak,
miközben a  körpályák  sugara lassan sökken.
Tegyük fel, hogy egy m = 500 kg tömeg¶ m¶holdat, amely az Egyenlít® síkjában, h = 400 km -es magasságban
körpályán kering, magára hagynak! A m¶holdra ható légellenállási er®t az Flég = K̺v2
alakban adhatjuk meg, ahol
K = 0,23 m2
, ̺ a leveg® s¶r¶sége a m¶hold magasságában, v pedig a m¶hold sebessége.
a) Határozzuk meg a m¶hold sebességváltozását, miközben pályamagassága a felére sökken (h → h/2)!
b) A légellenállási er®, valamint a m¶holdra ható két er® (gravitá iós és légellenállási) ered®jének pályamenti (érin-
t®leges) összetev®je között egy egyszer¶ összefüggés állapítható meg. Hogy szól ez?
c) Mekkora a leveg® s¶r¶sége h/2 = 200 km magasságban, ha itt egy fordulat alatt a m¶hold pályasugara 100 m-rel
sökken?
A megoldáshoz szükséges további adatokat táblázatokból vehetjük.
(Honyek Gyula)
Megoldás. Adottak:
m = 500 kg, h = 400 km = 4 · 105
m,
r1 = R + h, r2 = R +
h
2
,
Flég = K̺v2
(ahol K = 0,23 m2
), ∆r = −ε (= −100 m).
Táblázatból vehet® a Föld egyenlít®i R sugara, M tömege és a gravitá iós törvényben szerepl® γ állandó:
R = 6378 km = 6,378 · 106
m,
M = 5,974 · 1024
kg,
γ = 6,673 · 10−11
m3
/(kg · s2
).
a) A feladatban megfogalmazott feltételek szerint  a m¶holdak a Föld felszínéhez közeledve mindvégig közelít®en
körpályán haladnak , ezért jó közelítésben írhatjuk:
Fgrav = macp, γ
mM
r2
= m
v2
r
.
Ennek alapján
v =
r
γM
r
,
amelybe behelyettesítve r1 és r2 értékeit, megkapjuk a két sebességet:
v1 = 7669,0
m
s
, v2 = 7784,7
m
s
.
A m¶hold sebességváltozása tehát
v2 − v1 = 115,7
m
s
> 0.
A légellenállás következtében n®tt a m¶hold sebessége! Szokás ezt ¶rhajózási paradoxonnak is nevezni. A légel-
lenállási, súrlódási er® munkája szükségképpen negatív, mégis n® a m¶hold mozgási energiája! Hogyan lehetséges ez?
Erre kaphatunk választ a feladat b) és c) részének megoldása során. Érdemes lesz mindkét esetben abból indulunk ki,
hogyan változik meg a m¶hold me hanikai összenergiája, vagyis a kinetikus és poten iális energia összege. Ez az, ami
a légellenállási er® hatására sökkenhet.
b) A légellenállási er® teljesítménye:
− →
F lég · − → v = −Flég · v < 0.
Ez egyenl® az összenergia változási sebességével:
(1) −Flég · v =
∆Eössz
∆t
.
Az összenergia kinetikus és poten iális részb®l áll:
Eössz = Ekin + Epot =
1
2
mv2
+

−γ
mM
r

.
E két rész azonban kifejezhet® egymásból. Írjuk fel újra a dinamika alaptörvényét:
γ
mM
r2
= m
v2
r
, azaz γ
mM
r
= mv2
,
amib®l kapjuk:
Ekin =
1
2
mv2
=
1
2
γ
mM
r
=
1
2
(−Epot).
Az összenergiát tehát így is felírhatjuk:
Eössz = Ekin + Epot = Ekin − 2Ekin = −Ekin < 0.
(Az, hogy az összenergia negatív, nem kell, hogy megijesszen senkit, az atom
zikában számos példát látunk erre.)
Most tehát (1) így írható:
−Flég · v = −
∆Ekin
∆t
,
illetve
Flég · v =
∆ 1
2mv2

∆t
= mv
∆v
∆t
= mv at.
A légellenállásra egy érdekes kifejezést kaptunk:
(2) Flég = mat.
Az mat kifejezés a tangen iális (pályamenti) ered® er®t adja, amely most a gravitá iós er® pályamenti összetev®jének
és a légellenállási er®nek az ered®je (1. ábra), tehát
mat = Fgravk − Flég.
Ezt vessük össze (2)-vel:
Flég = Fgravk − Flég.
1. ábra. A feladat számadataival: Fgrav = 4,6 kN, Flég = 5,6 mN,
ϕ = 1,2 · 10−6
rad = 0,25′′
. A vázlatos ábra nem méretarányos
Az az egyszer¶ összefüggés tehát, amely a légellenállási er®, valamint a m¶holdra ható két er® (gravitá iós és
légellenállási) ered®jének pályamenti összetev®je között fennáll az, hogy e kett® nagysága egyenl® egymással.
c) Ismét az összenergia változásából érdemes kiindulnunk, de az összenergiát most ne a kinetikus, hanem a poten-
iális energiával fejezzük ki, felhasználva az Ekin = −Epot/2 összefüggést:
Eössz = Ekin + Epot = −
Epot
2
+ Epot =
Epot
2
.
∆Eössz
∆t
=
1
2
∆Epot
∆t
,
ami ∆r-rel szorozva és osztva így is írható:
∆Eössz
∆t
=
1
2
∆Epot
∆r
∆r
∆t
.
Mit mondhatunk a sugár változási sebességér®l? Ismert adat, hogy egyetlen fordulat során a pályasugár ε = 100
méterrel sökken, tehát
∆r
∆t
=
−ε
T
=
−ε
2rπ
v
.
Határozzuk meg a poten iális energia és a pályasugár változásának viszonyát:
∆Epot
∆r
=
∆ −γmM
r

∆r
= γ
mM
r2
.
Most már felírhatjuk az (1) egyenletet, amelyben az összenergiát a poten iális energiával fejezzük ki:
−Flég · v =
∆Eössz
∆t
=
1
2
∆Epot
∆t
=
1
2
∆Epot
∆r
∆r
∆t
,
−Flég · v =
1
2
γ
mM
r2
−ε
2rπ
v
,
Flég =
1
4π
γ
mM
r3
ε,
K̺v2
=
1
4π
γ
mM
r3
ε.
Ebben az egyenletben már sak ̺ az egyetlen ismeretlen, éppen ezt kellett kiszámítanunk! De hogy még szebb, ele-
gánsabb formulát kapjunk, használjuk fel újra a v2
= γM/r összefüggést, így a következ®t kapjuk:
̺ =
1
4πK
m
r2
ε.
r = r2, valamint ε megadott értékét behelyettesítve
̺ = 4 · 10−10 kg
m3
.
Kiegészítés: Az a) kérdésre mg = mv2
/r felhasználásával is válaszolhatunk, ha
gyelembe vesszük a gravitá iós gyorsulás
magasságfüggését: g = g0

1 −
h
r
 2
. Ezzel
v =
√
gr =

1 −
h
r

√
g0r,
ahol g0 az egyenlít®i gravitá iós gyorsulás, amely azonban a táblázatban adott egyenlít®i nehézségi gyorsulásnál nagyobb!
A különbség a Föld forgásából adódó   entri  gyorsulás.
