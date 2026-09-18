---
id: solution-ocr-eotvos-2013-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2013_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2013-optical-grating]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. feladat. Egy furcsa optikai rácson a rések nem egyenló közönként helyezkednek el: a szomszédos rések távolsága felváltva $30 \mu \mathrm {~m}$ és $90 \mu \mathrm {~m}$. Milyen elhajlási kép alakul ki a 2 m távolságra elhelyezett ernyốn, ha a rácsot (annak síkjára merốlegesen) 660 nm hullámhosszúságú lézerfénnyel világítjuk meg? Ábrázoljuk vázlatosan az ernyốn kialakuló intenzitáseloszlást! ( $A$ rések szélessége egyforma és sokkal kisebb a távolságuknál.)
(Vigh Máté)
Megoldás. Először képzeljük el, milyen lenne a diffrakciós kép, ha minden második rést (a másodikat, negyediket stb.) kitakarnánk! Ekkor a $4 d$ távolságra elhelyezkedő rések egy szokásos optikai rácsot alkotnának, az $n$-edik elhajlási maximum ernyőn mérhető $x _ { n }$ helyzetét pedig a

$$
\begin{aligned}
4 d \sin \alpha _ { n } & = n \lambda \\
\quad \sin \alpha _ { n } & \approx x _ { n } / L
\end{aligned}
$$

összefüggések alapján számíthatjuk:

$$
\begin{equation*}
x _ { n } = n \frac { \lambda L } { 4 d } . \tag{*}
\end{equation*}
$$

![](../../../figures/solution-ocr/dc51fe3069f5aa5f059e3363.jpg)
3. ábra

Ugyanilyen lenne az elhajlási kép, ha a másik réssort (azaz az első, harmadik stb. rést) takarnánk ki. A feladatban kérdezett esetre visszatérve meg kell vizsgálnunk, hogy a $( * )$ egyenlet által meghatározott irányokban hogyan adódik össze a két, $d$ távolsággal eltolt, $4 d$ periódusú réssoron áthaladó fény amplitúdója. Négy esetet kell megvizsgálnunk:


- Ha $n = 4 k + 1$, akkor a két réssoron áthaladó fény közötti útkülönbség $\lambda / 4$, ami $\pi / 2$ fáziskülönbségnek felel meg. Két, $\pi / 2$ fáziskülönbséggel találkozó, azonos amplitúdójú hullám összegének amplitúdója (rögzített helyen):
$$
\begin{aligned}
& E _ { 0 } \sin ( \omega t ) + E _ { 0 } \sin ( \omega t + \pi / 2 ) = E _ { 0 } \sin ( \omega t ) + E _ { 0 } \cos ( \omega t ) = \\
& = \sqrt { 2 } E _ { 0 } \left( \frac { 1 } { \sqrt { 2 } } \sin ( \omega t ) + \frac { 1 } { \sqrt { 2 } } \cos ( \omega t ) \right) = \sqrt { 2 } E _ { 0 } \sin ( \omega t + \pi / 4 ) .
\end{aligned}
$$
Az amplitúdó tehát az egy réssoron átjutó fény amplitúdójának $\sqrt { 2 }$-szerese, azaz az intenzitás az egy réssor esetében mérhetó intenzitás kétszerese.
- Ha $n = 4 k + 2$, akkor a két réssor közötti fáziskülönbség $\pi$, tehát ilyen irányokban tökéletes kioltást tapasztalunk.
- Ha $n = 4 k + 3$, a fáziskülönbség $3 \pi / 2$, így az amplitúdó (az első esethez hasonlóan) az egyetlen réssoron áthaladó fény amplitúdójának $\sqrt { 2 }$-szerese, az intenzitás pedig a kétszerese lesz.
- Ha $n = 4 k$, akkor minden sugár erősíti egymást, az amplitúdó tehát egyetlen réssoron áthaladó fény amplitúdójának kétszerese, az intenzitás pedig négyszerese lesz.

Összefoglalva: a 4. ábrán látható intenzitáseloszlás alakul ki, a nagy intenzitású maximumok közötti távolság $\lambda L / d$.
![](../../../figures/solution-ocr/4a4da2f4f82a76bf1908b029.jpg)

Megjegyzések. 1. Optikai ráccsal keltett diffrakciós (elhajlási) kép esetén az ernyőn kialakuló vonalak rendkívül keskenyek, ezek a vonalak meglehetősen „élesek”. A közepes vonalszélesség jó közelítésben annyiad része két egymás utáni vonal távolságának, ahány résből áll a rács. Ez pedig legalább száz, de akár sok ezer is lehet.
2. A második feladat megoldásának a bemutatását is kísérleti szemléltetés követte. A feladat szövegének megfelelő optikai rácsot Kis Lajos (Szeged) készítette el a következő módon. A rács (arányosan megnövelt méretü) mintázatát számítógépes rajzolóprogram segítségével egy A/3 méretú lapra nyomtatta, majd a lapot megfeleló távolságból elegendően finom szemcseméretü filmre fényképezte. A lapra nyomtatott vékony, sötét vonalak a filmnegatívon áteresztő résekként jelentek meg. Az eredményhirdetésen a lézerrel megvilágított rács elhajlási képe az elméleti számításokkal megegyezó módon, jól láthatóan jelent meg a terem vetítőernyőjén.
