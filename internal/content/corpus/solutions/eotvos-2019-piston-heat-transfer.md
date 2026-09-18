---
id: eotvos-2019-piston-heat-transfer
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2019-piston-heat-transfer
solution_type: official
source_document: solution-document-eotvos-2019-s
source_pdf: cache/phoxiv/eotvos/2019_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2019_S.pdf."
---

p1 = p2 = p0,
és a folyamat izobár.
Most rátérünk a végs® állapot meghatározására. Már tudjuk, hogy a végs® nyomás megegyezik a kezdetivel. A du-
gattyún történ® h®átadás következtében a végs® h®mérséklet a két oldalon ugyanakkora. Az energiamegmaradás
f
2
n1R2T0 +
f
2
2n1RT0 =
f
2
n1RTv +
f
2
2n1RTv
egyenletéb®l
Tv =
4
3
T0.
Gay-Lussa els® törvényéb®l
V1v =
2
3
V0 és V2v =
4
3
V0.
1Részletek a verseny honlapján: http://eik.bme.hu/~vanko/fizika/eotvos.htm
b) Most térjünk rá a folyamat vizsgálatára. A bal oldali rész leh¶l, a jobb oldali melegszik, azaz a bal oldal ∆t id®
alatt bekövetkez® ki siny ∆T1 h®mérséklet-változása negatív, míg a jobb oldalra ∆T2 > 0. A folyamat izobár, ezért
a bal és jobb oldal egyenlete:
f + 2
2
n1R∆T1 = α(T2 − T1)∆t, illetve
f + 2
2
2n1R∆T2 = α(T1 − T2)∆t.
Ezek az egyenletek az
f + 2
2
n1R
dT1
dt
= α(T2 − T1), illetve
f + 2
2
2n1R
dT2
dt
= α(T1 − T2)
di eren iálegyenleteknek felelnek meg. Ezekb®l kifejezve a dT1/dt és dT2/dt hányadosokat, valamint bevezetve a ∆T =
T1 − T2 h®mérséklet-különbséget
d∆T
dt
= −
3α
(f + 2)n1R
∆T és
d(T1 + 2T2)
dt
= 0.
A második egyenletben a di eren iálandó mennyiség nem változik, és kezdeti értékét ismerjük, tehát
T1 + 2T2 = 4T0.
Az els® egyenletben található állandó a h®átadási folyamat le sengési együtthatója:
λ =
3α
(f + 2)n1R
=
6αT0
5p0V0
.
A fentihez hasonló di eren iálegyenlet a tudományokban számos helyen el®fordul. Ezek közül a legismertebb a ra-
dioaktív bomlás, amelynek a megoldása a λ állandóval le seng® exponen iális függvény. Mivel ismerjük ennek a függ-
vénynek a kezdeti értékét, ennélfogva
∆T = T0e−λt
,
és így
T1(t) =
4
3
T0 +
2
3
T0e−λt
, T2(t) =
4
3
T0 −
1
3
T0e−λt
.
A térfogatok változását most is Gay-Lussa els® törvénye adja:
V1(t) =
2
3
V0 +
1
3
V0e−λt
, V2(t) =
4
3
V0 −
1
3
V0e−λt
.
Ezeket a függvényeket a 2. ábra gra
konjain is bemutatjuk, ahol a h®mérsékletet T0, a térfogatot V0, az id®t pedig
1/λ egységekben mértük.
2. ábra
