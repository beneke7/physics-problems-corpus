---
id: solution-ocr-eotvos-2017-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2017-coin-table]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. feladat. $A z 1$. ábrán látható, $d$ oldalhosszúságú, négyzet alakú asztallap $A$ sarkánál egy $m$ tömegü, kis pénzérme nyugszik. Az asztal $B$ sarkához egy horgászzsinór egyik végét rögzítjük, majd a zsinórt az érmén „átvetve“ az asztal $C$ sarkához rögzített szemescsavaron vezetjük át. A zsinór szabad végét igen lassan húzni kezdjük addig, amíg az érme végül leesik az asztalról. Az asztallap és az érme közötti csúszási súrlódási együttható $\mu$, máshol a súrlódás elhanyagolható.

![](../../../figures/solution-ocr/78ede1b6d583d6c6f54409de.jpg)
1. ábra

a) Hol esik le az érme az asztalról?
b) Becsüljük meg, mennyi munkát végeztünk a folyamat közben!

Adatok: $m = 7,7 \mathrm {~g} , d = 1,0 \mathrm {~m} , \mu = 0,3$.
Megoldás. A pénzérmére három erő hat: a két zsinórszárban ható erő, valamint a pénzérme és az asztal között fellépő csúszási súrlódási erő. A pénzérmét lassan mozgatjuk, a gyorsulások elhanyagolhatók, így a három erő eredő́je jó közelítéssel nulla. A zsinór nem súrlódik a pénzérmén, így benne mindenhol azonos nagyságú eró hat. Ebbő́l következően a pénzérme mindig a zsinórszárak pillanatnyi szögfelező́jének irányába fog mozogni (hiszen a csúszási súrlódási erő mindig a sebességgel ellentétes irányú). Ennek a sebességvektornak mindkét zsinórszárra ugyanakkora a vetülete, így a két zsinórszár mindig azonos mértékben rövidül - tehát a hosszaik különbsége a mozgás során nem fog változni.
a) Ennek alapján:

$$
\sqrt { 2 } d - d = x _ { 2 } - x _ { 1 } \quad \text { és } \quad x _ { 1 } + x _ { 2 } = d ,
$$

ahol $x _ { 1 }$ és $x _ { 2 }$ a két zsinórdarab hossza, amikor a pénzérme eléri az asztal szélét.
Az egyenletrendszert megoldva megkapjuk, hogy a pénzérme az asztal $B$ sarkától

$$
x _ { 1 } = \left( 1 - \frac { \sqrt { 2 } } { 2 } \right) d \approx 0,293 \mathrm {~m}
$$

távolságra esik le az asztalról.
b) A munkavégzés megegyezik a súrlódási munka abszolút értékével. Mivel a súrlódási erő állandó, így a munka a súrlódási erố és a pénzérme által befutott $s$ út szorzata:

$$
W = \mu m g \cdot s .
$$

A két zsinórszár hosszának különbsége állandó, tehát a pénzérme egy hiperbolaíven fog mozogni. (A hiperbola fókuszai az asztal $B$ és $C$ sarkai.) A hiperbolaív hosszát elemi úton nem tudjuk meghatározni - ezért is kért a feladat becslést -, de alsó és felső közelítést adhatunk rá.

Alsó becslés az asztal $A$ sarkát és a leesés $L$ pontját összekötő egyenes szakasz hossza (2. ábra):

$$
s _ { \min } = \sqrt { d ^ { 2 } + x _ { 1 } ^ { 2 } } \approx 1,042 \mathrm {~m} ,
$$

felső becslés pedig az $A$ és $L$ pontokon átmenő és a $B C$ szakaszt merőlegesen metsző körvonal hossza. A kör sugara egyszerú geometriai megfontolások alapján:

$$
R = \frac { d ^ { 2 } + x _ { 1 } ^ { 2 } } { 2 x _ { 1 } } \approx 1,854 \mathrm {~m} ,
$$

[^0]
amiből a keresett ívhossz:

$$
s _ { \max } = R \arcsin \frac { d } { R } \approx 1,056 \mathrm {~m} .
$$

Láthatjuk, hogy a két érték elég közel van egymáshoz. (A hiperbolaív hosszát számítógéppel numerikusan is kiszámolhatjuk, akkor $s \approx 1,048$ m-t kapunk.)

![](../../../figures/solution-ocr/c9a0b2bbdb6a8144837388af.jpg)
2. ábra

Ezek alapján, valamint a megadott adatokkal és $g = 9,81 \mathrm {~m} / \mathrm { s } ^ { 2 }$-tel a keresett munkavégzés:

$$
0,0236 \mathrm {~J} < W < 0,0239 \mathrm {~J} .
$$
