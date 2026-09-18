---
id: solution-ocr-eotvos-1997-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1997_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1997-falling-chain]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. Egy 1 méter magas asztal lapjának közepén lyuk van. A lyuk közvetlen környezetében az asztallapon lazán elhelyeztünk egy 1 méter hosszú, vékony aranyláncot. Ennek egyik végét a lyukon keresztül kicsit meghúzzuk, majd elengedjük. A lánc egyre növekvő sebességgel szalad le a lyukon át. (Feltételezhetjük, hogy a lánc nem gubancolódik össze. A súrlódás és a légellenállás elhanyagolható.)

Mennyi idố alatt ér a lánc egyik, illetve másik vége a földre?
(Gnädig Péter)
Megoldás. Jelöljük $L$-lel az asztal magasságát, ami éppen megegyezik a lánc teljes hosszával (a feladatban $L =$ 1 m). Tekintsük azt a pillanatot, amikor a lánc függőleges, mozgásban lévó része $x$ hosszúságú. Jelöljük $m$-mel ennek a darabnak a tömegét, és írjuk fel rá a dinamika alaptörvényét! Persze, figyelembe kell vennünk, hogy most $m$ nem állandó, hanem időben változik, ezért:

$$
m g = \frac { \Delta ( m v ) } { \Delta t } = m \frac { \Delta v } { \Delta t } + \frac { \Delta m } { \Delta t } v .
$$

Átrendezve, a következőt kapjuk:

$$
m \frac { \Delta v } { \Delta t } = m g - \frac { \Delta m } { \Delta t } v .
$$

A bal oldalon $\frac { \Delta v } { \Delta t } = a$ miatt a pillanatnyi tömeg és gyorsulás szorzata áll. A jobb oldalon felhasználhatjuk, hogy $\Delta m = \frac { m } { x } \Delta x$, így

$$
m a = m g - \frac { m } { x } \frac { \Delta x } { \Delta t } v .
$$

Mivel $\frac { \Delta x } { \Delta t } = v , m$-mel való osztás után kapjuk:

$$
a = g - \frac { v ^ { 2 } } { x } .
$$

Ez az izgalmasan egyszerú összefüggés jelzi, hogy a lánc mozgásban lévő részének gyorsulása $g$-nél mindenképp kisebb, s mivel $v$ és $x$ is változik időben, feltehetően a gyorsulás sem marad állandó. Ennek ellenére próbáljuk ki, hátha mégis állandó a gyorsulás, hiszen lehet, hogy a $v ^ { 2 } / x$ kifejezés „véletlenül” nem függ az időtől! Próbaképpen helyettesítsük be $v$ és $x$ helyére a zérus kezdősebességú, egyenletesen gyorsuló mozgás sebességének és a megtett útnak időtől függő képleteit:

$$
\frac { v ^ { 2 } } { x } = \frac { ( a t ) ^ { 2 } } { \frac { a } { 2 } t ^ { 2 } } = 2 a = \text { állandó, ha } a = \text { állandó! }
$$

Így hát a lánc egyenletesen gyorsuló mozgással szalad le a lyukon át. Számítsuk ki a gyorsulását:

$$
a = g - 2 a , 3 a = g , a = \frac { g } { 3 } .
$$

Ha a lánc $t _ { 1 }$ idő alatt fut le az asztalról, akkor a legelöl futó láncszem $t _ { 1 }$ idő alatt $g / 3$ gyorsulással tesz meg $L$ utat, ezért

$$
t _ { 1 } = \sqrt { \frac { 2 L } { a } } = \sqrt { \frac { 6 L } { g } } = 0,78 \mathrm {~s} .
$$

A lánc egyik vége tehát 0,78 s alatt ér le a földre. Mennyi idő alatt ér le a másik? Amikor a lánc alsó vége eléri a földet, abban a pillanatban az egész lánc függőleges, és akkora sebességgel mozog, amekkora a legalsó láncszem végsebessége:

$$
v _ { 1 } = a t _ { 1 } = \frac { g } { 3 } \sqrt { \frac { 6 L } { g } } = \sqrt { \frac { 2 } { 3 } L g } = 2,56 \frac { \mathrm {~m} } { \mathrm {~s} } .
$$


Ettől kezdve az egész lánc szabadon esik. A legfelső láncszem $v _ { 1 }$ kezdősebességgel, $g$ gyorsulással tesz meg $L$ utat. Jelöljük az ő esési idejét $t _ { 2 }$-vel, akkor felírhatjuk:

$$
L = v _ { 1 } t _ { 2 } + \frac { 1 } { 2 } g t _ { 2 } ^ { 2 } .
$$

Ebbe behelyettesítve $v _ { 1 } = \sqrt { \frac { 2 } { 3 } L g }$ értékét, a $t _ { 2 }$-re adódó másodfokú egyenletet megoldva kapjuk:

$$
t _ { 2 } = \sqrt { \frac { 2 L } { 3 g } } = 0,26 \mathrm {~s} \quad \left( = \frac { t _ { 1 } } { 3 } \right) .
$$

Ez a láncvég tehát a folyamat kezdetétől számítva

$$
t _ { 1 } + t _ { 2 } = \frac { 4 } { 3 } t _ { 1 } = 1,04 \mathrm {~s}
$$

múlva fog földet érni.
Megjegyzések. 1. Sok hibás megoldás abból indult ki, hogy mivel „a súrlódás és a légellenállás elhanyagolható”, ezért a lánc mechanikai energiája állandó marad. Ebben az esetben az a sebesség, amivel a lánc alsó vége eléri a földet, az energiatétel felhasználásával a következőképp adódna:

$$
\frac { 1 } { 2 } m v _ { 1 } ^ { 2 } = m g \frac { L } { 2 } ,
$$

mivel a lánc tömegközéppontja $\frac { L } { 2 }$-vel van mélyebben abban a pillanatban, amikor az egész lánc függőlegesen mozog. A fenti összefüggés azonban nem helyes! Ha behelyettesítjük $v _ { 1 }$ helyébe a helyes megoldásban kapott értéket, ezt kapjuk:

$$
\frac { 1 } { 2 } m v _ { 1 } ^ { 2 } = \frac { 1 } { 2 } m \left( \sqrt { \frac { 2 } { 3 } L g } \right) ^ { 2 } = m g \frac { L } { 3 } < m g \frac { L } { 2 } .
$$

Hová túnt, mikor veszett el az energia $\frac { 1 } { 3 }$ része? Akkor, amikor egy-egy láncszemet a már mozgó másik lerántott az asztalról; a rugalmatlan ütközések során disszipálódott a mechanikai energia egy része.
2. A közölt helyes megoldással azonos eredményre vezet az a gondolat is, hogy az $M$ tömegü lánc $\frac { M } { L } \Delta s = \frac { M } { L } v \Delta t$ tömegü darabkáját $\Delta t$ idő alatt $v$ sebességre gyorsítja fel a lánc $v$ sebességgel mozgó $m = \frac { M } { L } x$ tömegü része, amikor „magával rántja” az asztalról. Ennek az erőnek a nagysága:

$$
\frac { \left( \frac { M } { L } \cdot v \cdot \Delta t \right) v } { \Delta t } = \frac { M } { L } v ^ { 2 } .
$$

Ugyanekkora nagyságú, de ellentétes irányú erốt fejt ki a felgyorsuló láncszem („láncdarabka”) a már mozgó, $m$ tömegü részre! Így felírhatjuk:

$$
m a = m g - \frac { M } { L } v ^ { 2 } .
$$

Behelyettesítve $m = \frac { M } { L } x$ kifejezését, kapjuk:

$$
\frac { M } { L } x a = \frac { M } { L } x g - \frac { M } { L } v ^ { 2 } ,
$$

azaz

$$
a = g - \frac { v ^ { 2 } } { x } .
$$

3. Feltételezve, hogy az $M$ tömegú lánc $n$ darab láncszembő́l áll, ahol két láncszem közötti lazaság (szabad elmozdulás) $\varepsilon = \frac { L } { n }$, a fenti helyes eredmény $n \rightarrow \infty$ határértékben adódik.
4. Felsőbb matematikai módszerekkel megadható az

$$
a = g - \frac { v ^ { 2 } } { x }
$$

differenciálegyenlet teljes megoldása $t = 0 , v = 0 , x = x _ { 0 }$ kezdőfeltételek $\left( x _ { 0 } \ll L \right)$ esetén. A megoldás aszimptotikusan közelít a heurisztikusan talált $a = \frac { g } { 3 } =$ állandó esethez.
