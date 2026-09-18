---
id: solution-ocr-eotvos-2003-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2003_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2003-thin-walled-cylinder]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. Vékonyfalú henger csúszásmentesen gördül lefelé egy $\alpha = 10 ^ { \circ }$-os lejtón. A henger palástjának tömege $M$, a határoló körlapok tömege elhanyagolható. A henger belsejében $m$ tömegü higany van. (A henger és a higany közötti súrlódás elhanyagolható.)
![](../../../figures/solution-ocr/62927e345f54e57b968e1732.jpg)

A higany felszínének a vízszintessel bezárt szöge valamilyen $\varphi$ értékre állt be. Határozza meg ezt a $\varphi$ szöget, ha

a) $M \ll m$;
b) $M = m$.

(Balogh Péter)

Megoldás. Kínálkozik a dinamikai megoldás. A higanyra erốt fejt ki a Föld és a henger. A hengerre erốt fejt ki a Föld, a higany és a lejtő. A (higany + henger) rendszerre tehát a Föld és a lejtő fejtenek ki erőt, melyek következtében a rendszer tömegközéppontja a lejtóvel párhuzamos $a$ gyorsulással mozog. $S$-sel jelölve a hengerre ható súrlódási erốt, a dinamika alaptörvénye szerint

$$
( m + M ) g \sin \alpha - S = ( m + M ) a .
$$

A lejtőn csúszásmentesen gördülő henger az ugyancsak $a$ gyorsulással mozgó tömegközéppontja körül $\beta = a / R$ szöggyorsulással forog. A gyorsuló forgást az $S$ súrlódási eró idézi elő. (Vegyük észre, hogy a higany nem forog, mivel a henger és a higany közötti súrlódás elhanyagolható.) Így a forgásra vonatkozó dinamikai egyenlet:

$$
S R = M R ^ { 2 } \frac { a } { R } ,
$$

amelyből

$$
S = M a
$$

adódik. Ezt a haladó mozgás dinamikai egyenletébe helyettesítve a gyorsulásra kapjuk:

$$
a = \frac { m + M } { m + 2 M } g \sin \alpha .
$$


Speciális esetekben:

$$
a = \begin{cases} g \sin \alpha , & \text { ha } \quad M \ll m ; \\ \frac { 2 } { 3 } g \sin \alpha , & \text { ha } \quad M = m ; \\ \frac { 1 } { 2 } g \sin \alpha , & \text { ha } \quad M \gg m . \end{cases}
$$

A higany felszínének a vízszintessel bezárt szögét legegyszerübben abból határozhatjuk meg, hogy a folyadék felszíne a folyadékkal együtt mozgó gyorsuló rendszerben is meróleges a rá ható (nehézségi + tehetetlenségi) erók eredőjére. Amekkora $\varphi$ szöget zár be ez az eredő eró a függőlegessel, akkora $\varphi$ szöget fog a higany felszíne a vízszintessel bezárni. A 2. ábra alapján a keresett szög tangense könnyen meghatározható:

$$
\operatorname { tg } \varphi = \frac { m a \cos \alpha } { m g - m a \sin \alpha } = \frac { \cos \alpha } { \frac { g } { a } - \sin \alpha } .
$$

![](../../../figures/solution-ocr/197ca231f629e877586be5cc.jpg)
