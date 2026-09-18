---
id: solution-ocr-eotvos-1994-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1994_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1994-superfluid-plug]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. feladat. Egy henger alakú edény szuperfolyékony héliummal van tele. Az edény magassága 1 dm, belső alapterülete $1 \mathrm { dm } ^ { 2 }$.

A héliumra kellő óvatossággal egy ugyancsak henger alakú, 1 dm magas, de csak $0,99 \mathrm { dm } ^ { 2 }$ alapterületǘ „dugót” helyezünk, és elengedjük. A dugó súrúsége a hélium sürúségével egyenlő.
| Hogyan mozog a dugó?
| Mennyi idő alatt ér le az edény aljára?
Az egész berendezés hómérséklete 0 K közvetlen közelében van, a folyadék súrlódása és felületi feszültsége figyelmen kívül hagyható.

Gnädig Péter
Megoldás. Amikor elengedjük a dugót (3. ábra), ennek esését az alatta lévó folyadék hirtelen lefékezi bizonyos $v _ { 0 }$ sebességre. Ezt a dugó további mozgása során kezdősebességnek fogjuk tekinteni.

Próbáljuk meg kiszámítani ezt a $v _ { 0 }$ kezdősebességet, s csak utána keressük a választ a feladat kérdésére: Hogyan mozog a dugó?

Amint a dugó $v _ { 0 }$ sebességgel elindul lefelé, oldalt felspriccel a folyadék. Jelöljük a folyadék kiömlési sebességét $u _ { 0 }$-lal. Ez sokkal nagyobb, mint $v _ { 0 }$, hiszen a folyadék összenyomhatatlansága miatt a $\Delta A$ területü résen ugyanannyi folyadéknak kell kifreccsennie, mint amennyi az $A$ területú dugó alól kiszorul:

$$
v _ { 0 } \cdot A = u _ { 0 } \cdot \Delta A .
$$

$v _ { 0 }$ kiszámításához lehet, hogy először $u _ { 0 } - \mathrm { t }$ kell meghatároznunk? Ez elég is lenne, hiszen a feladat adataiból az $A : \Delta A = 100$ arány kiolvasható.

Milyen összefüggésben szerepelhet még a kiömlő folyadék sebessége? Mivel a folyadék súrlódása és felületi feszültsége figyelmen kívül hagyható, ezért érdemes lesz felírni az egész rendszerre a a munkatételt. Eszerint a rendszeren végzett munka a rendszer mozgási energiájának megváltozásával egyenló.

Munkát végző eró a dugóra ható nehézségi erő. Amíg a dugó | a test |, egy kicsiny $\Delta x$-szel elmozdul lefelé, kiszorít $\Delta m _ { \text {foly } }$ tömegü folyadékot, amely $u _ { 0 }$ sebességgel hagyja el a tartályt. Ezért írhatjuk:

$$
m _ { \mathrm { test } } \cdot g \cdot \Delta x = \frac { 1 } { 2 } \Delta m _ { \mathrm { foly } } \cdot u _ { 0 } ^ { 2 } .
$$

Igaz, a dugónak is megváltozott a mozgási energiája, de a sokkal kisebb sebesség miatt ezt a folyadék mozgási energiájának változásához képest elhanyagolhatjuk.

Helyettesítsük a fenti egyenletbe a következőket:

$$
m _ { \text {test } } = A l \varrho _ { \text {test } } \quad \text { és } \quad \Delta m _ { \text {foly } } = A \Delta x \varrho _ { \text {foly } } .
$$

Egyszerúsítés után a következő összefüggés adódik:

$$
l \varrho _ { \text {test } } g = \frac { 1 } { 2 } \varrho _ { \text {foly } } u _ { 0 } ^ { 2 } .
$$


Ez éppen a „jó öreg” Bernoulli-törvény (1738) speciális esete, akár ebből is kiindulhattunk volna $u _ { 0 }$ kiszámításához. Ha pedig azt is kihasználjuk, hogy a feladatban most a test és a folyadék súrúsége egyenlő, a folyadék kiömlési sebességére kapjuk:

$$
u _ { 0 } = \sqrt { 2 g l } .
$$

Ez a Torricelli-féle kiöntési törvény (1646) még egy évszázaddal korábbról.
Akár át is fogalmazhatjuk a feladatot: Ahelyett, hogy „Hogyan mozog a dugó?”, azt kérdezhetjük: „Hogyan mozog egy lyukas edényből súrlódásmentesen kiömlő folyadék esetén a folyadék felső szintje?" Azt már tudjuk, hogyan indul el. Kezdósebessége:

$$
v _ { 0 } = \frac { \Delta A } { A } u _ { 0 } = \frac { \Delta A } { A } \sqrt { 2 g l } .
$$

Tekintsünk most egy közbülső esetet a mozgás során. Tegyük fel, hogy a dugónak még $h$ magasságú része áll ki a hengerből. A dugó úgy mozog ekkor, mint az oldalt lyukas edényben lévő folyadékok felső szintje abban a pillanatban, amikor ez a szint éppen $h$ magasságban van a lyuk felett (4. ábra). Ugyanis mindkét esetben a súrlódásmentesen kiömlő folyadék sebessége

$$
u = \sqrt { 2 g h } ,
$$

és így a dugó sebessége

$$
v = \frac { \Delta A } { A } u = \frac { \Delta A } { A } \sqrt { 2 g h } .
$$

Ez még így is írható:

$$
v = \sqrt { 2 \left( \frac { \Delta A } { A } \right) ^ { 2 } g h } ,
$$

amiból látszik, hogy a dugó mozgása egyenletesen változik, lassulásának nagysága pedig

$$
\left( \frac { \Delta A } { A } \right) ^ { 2 } \cdot g = 10 ^ { - 4 } g = 10 ^ { - 3 } \frac { \mathrm {~m} } { \mathrm {~s} ^ { 2 } } .
$$

A dugó mozgásának sebesség-idő grafikonja az 5. ábrán látható.
A dugó sebessége éppen akkor csökken egyébként is zérusra, amikor a dugó alja eléri az edény alját, teteje pedig a hengeres edény tetejével kerül egy szintre. (Az analóg példában: a kiömlő folyadék felszíne a lyukhoz ér.)

Így a dugó leérkezéséig eltelt $\tau$ idő

$$
\tau = \frac { 2 l } { v _ { 0 } } = \frac { 2 l } { \frac { \Delta A } { A } \sqrt { 2 g l } } = \frac { A } { \Delta A } \sqrt { \frac { 2 l } { g } } = 14,1 \mathrm {~s} .
$$

Kiegészítő megjegyzések.

1. A leérkezési idő kiszámításakor elhanyagoltuk azt az időtartamot, amennyi idő alatt a dugó felveszi a kezdősebességet, s azt az utat is, amit ez alatt megtesz. Az elhanyagolás jogosságát a következő becsléssel ellenőrzihetjük. A dugó valódi kezdősebessége nulla, de ebből az állapotából | feltételezésünk szerint igen hamar | felgyorsul a kérdéses $v _ { 0 }$ sebességre. Amikor elengedjük, a dugó tetején és az aljánál egyaránt a légköri nyomás hat rá, tehát a dugó kezdeti gyorsulása $g$ (szabadesés!). Ez a gyorsulás bizonyos $\tau _ { 0 }$ idő alatt gyarkorlatilag nullára ( $10 ^ { - 4 } g$-re) csökken, s a dugó sebessége $v _ { 0 }$ lesz. Ha átlagosan $g / 2$ értékkel számolunk, a $( g / 2 ) \tau _ { 0 } = v _ { 0 }$ összefüggésekből $\tau _ { 0 } = 2 v _ { 0 } / g = 2 \cdot \frac { \Delta A } { A } \sqrt { \frac { 2 l } { g } } \approx 0,003 \mathrm {~s}$ adódik. Ez ez idő és a dugó által ezalatt megtett kb. $v _ { 0 } \tau _ { 0 } / 2 = 0,02 \mathrm {~mm}$ út valóban elhanyagolható.
2. A szuperfolyékony héliumnak semmi más különleges extrém tulajdonságát | például, hogy lassan magától is kimászna az edénybő́l | nem használtuk ki azon az egyen kívül, hogy nincs belső súrlódása. Éppen elég meglepő ez is!
