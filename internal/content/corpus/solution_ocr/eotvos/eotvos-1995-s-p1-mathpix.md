---
id: solution-ocr-eotvos-1995-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1995_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1995-conveyor-belt-disk]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1996. feladat. Egy négyzet alakú, $l = 3 \mathrm {~m}$ széles kísérletező asztal felszíne sík, $d = 1 \mathrm {~m}$ szélességü középső sávját azonban állandó $v = 3 \mathrm {~m} / \mathrm { s }$ sebességgel mozgó (végtelenített) gumiszalag képezi, amely pontosan illeszkedik az asztallap nyugvó felszínéhez. Az asztal egyik szélének közepére (az 1. ábrán látható $A$ pontra) egy kicsi, lapos korongot fektetünk, és megütjük úgy, hogy $u = 4 \mathrm {~m} / \mathrm { s }$ sebességgel kezdjen csúszni (merőlegesen) a szalag felé. Az asztallap álló része és a korong közötti súrlódás elhanyagolható, a gumiszalag és a korong közötti súrlódási tényező $\mu = 0,5$.

Hol esik le a korong az asztalról?
Károlyházy Frigyes
Megoldás. Elvileg többféle lehetőség is elképzelhető, a súrlódástól és a sebességektől függően. Kis súrlódás és nagy kezdősebesség esetén a korong szinte átrepül az asztalon, alig változtatja meg a sebességét. Nagy súrlódás és kis kezdősebesség esetén viszont a korong át se jut a futószalagon, hanem „leragad” rajta, és a mozgó szalag szépen elviszi és leejti a korongot az asztal jobb oldalán. Ez utóbbi lehetőség is sugallhatja azt az ötletet, hogy a jelenséget ne az asztalhoz, hanem a futószalaghoz rögzített koordináta-rendszerben vizsgáljuk. Látni fogjuk, hogy ez mennyire leegyszerúsíti a megoldást.

A futószalaghoz rögzített koordináta-rendszerben a korong ferdén csúszik rá az álló szalagra. A súrlódási erő hatására egyenesvonalú, egyenletesen lassuló mozgást végez a szalagon, és ha még marad energiája, le is csúszik róla. Ezt az esetet mutatja a 2. ábra.
az asztalhoz képest (a szalag mozog) a szalaghoz képest (a szalag áll)
A szalagon végigcsúszó korong 1, 25 m utat tesz meg, amíg átér rajta. Kezdősebessége $5 \mathrm {~m} / \mathrm { s }$, lassulása $\mu g \approx 5 \mathrm {~m} / \mathrm { s } ^ { 2 }$. Végsebessége (a szalag szélén)

$$
v _ { t } = \sqrt { v _ { 0 } ^ { 2 } - 2 \mu g s } \approx 5 \frac { \sqrt { 2 } } { 2 } \mathrm {~m} / \mathrm { s } .
$$

Hol hagyja el a korong a szalagot? Ennek meghatározásáhon számítsuk ki, mennyi ideig volt a korong a szalagon:

$$
t _ { 1 } = \frac { 2 s } { v _ { 0 } + v _ { t } } \approx \frac { 1 } { 2 + \sqrt { 2 } } \mathrm {~s} .
$$

Így már kiszámíthatjuk, hogy mennyit mozdult el a szalag, amíg a korong rajta volt:

$$
\Delta x _ { 1 } = v _ { \mathrm { szalag } } \cdot t _ { 1 } \approx \frac { 3 } { 2 + \sqrt { 2 } } \mathrm {~m} .
$$

az asztalhoz képest a szalaghoz képest
3. ábra

Továbbra is a $g \approx 10 \mathrm {~m} / \mathrm { s } ^ { 2 }$ közelítést alkalmazva a szalagról lecsúszó korong sebességére a futószalag illetve az asztal koordináta-rendszerében a 3. ábrán látható értékeket kapjuk. Az 1 m széles, súrlódásmentes sávon való átcsúszáshoz szükséges idő:

$$
t _ { 2 } = \frac { 1 \mathrm {~m} } { 2 \sqrt { 2 } \mathrm {~m} / \mathrm { s } } = \frac { 1 } { 2 \sqrt { 2 } } \mathrm {~s} .
$$

Eközben a korong elmozdulása jobbra:

$$
\Delta x _ { 2 } = \left( 3 - \frac { 3 } { \sqrt { 2 } } \right) \frac { 1 } { 2 \sqrt { 2 } } \mathrm {~m} .
$$

Így a korong összes elmozdulása jobbra:

$$
\Delta x = \Delta x _ { 1 } - \frac { 3 } { 5 } 1,25 \mathrm {~m} + \Delta x _ { 2 } = \frac { 3 } { 2 ( 2 + \sqrt { 2 } ) } \mathrm { m } \approx 44 \mathrm {~cm} .
$$

Ha $g = 9,81 \mathrm {~m} / \mathrm { s } ^ { 2 }$-tel számolunk, $\Delta x = 42,6 \mathrm {~cm}$ adódik.
A korong tehát az asztal szemközti oldalának közepétől 42, 6 cm-rel jobbra esik le az asztalról.
