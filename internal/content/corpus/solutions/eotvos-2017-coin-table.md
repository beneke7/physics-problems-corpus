---
id: eotvos-2017-coin-table
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2017-coin-table
solution_type: official
source_document: solution-document-eotvos-2017-s
source_pdf: cache/phoxiv/eotvos/2017_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2017_S.pdf."
---

1. feladat. Az 1. ábrán látható, d oldalhosszúságú, négyzet alakú asztallap A sarkánál egy m tömeg¶, kis pénzérme
nyugszik. Az asztal B sarkához egy horgászzsinór egyik végét rögzítjük, majd a zsinórt az érmén  átvetve  az asztal C
sarkához rögzített szemes savaron vezetjük át. A zsinór szabad végét igen lassan húzni kezdjük addig, amíg az érme végül
leesik az asztalról. Az asztallap és az érme közötti súszási súrlódási együttható µ, máshol a súrlódás elhanyagolható.
1. ábra
a) Hol esik le az érme az asztalról?
b) Be süljük meg, mennyi munkát végeztünk a folyamat közben!
Adatok: m = 7,7 g, d = 1,0 m, µ = 0,3.
Megoldás. A pénzérmére három er® hat: a két zsinórszárban ható er®, valamint a pénzérme és az asztal között
fellép® súszási súrlódási er®. A pénzérmét lassan mozgatjuk, a gyorsulások elhanyagolhatók, így a három er® ered®je jó
közelítéssel nulla. A zsinór nem súrlódik a pénzérmén, így benne mindenhol azonos nagyságú er® hat. Ebb®l következ®en
a pénzérme mindig a zsinórszárak pillanatnyi szögfelez®jének irányába fog mozogni (hiszen a súszási súrlódási er®
mindig a sebességgel ellentétes irányú). Ennek a sebességvektornak mindkét zsinórszárra ugyanakkora a vetülete, így
a két zsinórszár mindig azonos mértékben rövidül   tehát a hosszaik különbsége a mozgás során nem fog változni.
a) Ennek alapján:
√
2d − d = x2 − x1 és x1 + x2 = d,
ahol x1 és x2 a két zsinórdarab hossza, amikor a pénzérme eléri az asztal szélét.
Az egyenletrendszert megoldva megkapjuk, hogy a pénzérme az asztal B sarkától
x1 = 1 −
√
2
2
!
d ≈ 0,293m
távolságra esik le az asztalról.
b) A munkavégzés megegyezik a súrlódási munka abszolút értékével. Mivel a súrlódási er® állandó, így a munka
a súrlódási er® és a pénzérme által befutott s út szorzata:
W = µmg · s.
A két zsinórszár hosszának különbsége állandó, tehát a pénzérme egy hiperbolaíven fog mozogni. (A hiperbola fókuszai
az asztal B és C sarkai.) A hiperbolaív hosszát elemi úton nem tudjuk meghatározni   ezért is kért a feladat be slést  ,
de alsó és fels® közelítést adhatunk rá.
Alsó be slés az asztal A sarkát és a leesés L pontját összeköt® egyenes szakasz hossza (2. ábra):
smin =
q
d2 + x2
1 ≈ 1,042 m,
fels® be slés pedig az A és L pontokon átmen® és a BC szakaszt mer®legesen metsz® körvonal hossza. A kör sugara
egyszer¶ geometriai megfontolások alapján:
R =
d2
+ x2
1
2x1
≈ 1,854 m,
1Részletek a verseny honlapján: http://eik.bme.hu/~vanko/
zika/eotvos.htm.
amib®l a keresett ívhossz:
smax = Rarcsin
d
R
≈ 1,056 m.
Láthatjuk, hogy a két érték elég közel van egymáshoz. (A hiperbolaív hosszát számítógéppel numerikusan is kiszámol-
hatjuk, akkor s ≈ 1,048 m-t kapunk.)
2. ábra
Ezek alapján, valamint a megadott adatokkal és g = 9,81 m/s
2
-tel a keresett munkavégzés:
0,0236J < W < 0,0239 J.
