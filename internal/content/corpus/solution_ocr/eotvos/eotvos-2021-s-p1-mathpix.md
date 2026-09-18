---
id: solution-ocr-eotvos-2021-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2021_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2021-compressed-gas]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. feladat. Egy hőszigetelt, hengeres tartályt egy jó hővezető, rögzített fal oszt két egyforma henger alakú térrészre. Az egyik térfélben héliumgáz, a másikban azzal megegyező anyagmennyiségü oxigéngáz található, mindkét gáz kezdeti hőmérséklete $T _ { 0 }$, kezdeti térfogata pedig $V _ { 0 }$. A tartály egyik végét könnyen mozgó, hőszigetelő dugattyú zárja le, amellyel a héliummal töltött térrész térfogata változtatható. Határozzuk meg a hengerben lévő gázok végső hőmérsékletét, miután a dugattyú lassú mozgatásával a héliumgáz térfogatát $V _ { 0 } / 2$-re csökkentettük!
(Vigh Máté)
Megoldás. Az 1. ábra a kezdeti állapotot és a végállapotot mutatja.

![](../../../figures/solution-ocr/df26d33da5c1c8a323110130.jpg)
1. ábra

[^0]
Feladatunk a $T _ { 1 }$ hőmérséklet meghatározása. Ezt többféle módszerrel is megtehetjük.
I. megoldás. Legyen a héliumgáz lassan változó pillanatnyi hőmérséklete $T$, térfogata $V$. Az elválasztó fal jó hővezetése miatt az oxigéngáz hőmérséklete is $T$. Ha a dugattyú elmozdulása miatt a hőmérséklet $\Delta T$ értékkel nő, a héliumgáz térfogata pedig $\Delta V$ értékkel változik meg $( \Delta V < 0 )$, akkor az egész rendszer belső energiájának változása

$$
\begin{equation*}
\Delta E = \frac { 3 } { 2 } n R \Delta T + \frac { 5 } { 2 } n R \Delta T = 4 n R \Delta T . \tag{1}
\end{equation*}
$$

A héliumgáz nyomása:

$$
p = n R \frac { T } { V } .
$$

Az egész rendszerre alkalmazott első főtétel szerint

$$
- p \Delta V = \Delta E ,
$$

vagyis

$$
\begin{equation*}
\frac { \Delta V } { V } + 4 \frac { \Delta T } { T } = 0 . \tag{2}
\end{equation*}
$$

Szorozzuk meg (2)-t $T ^ { 4 } V$-vel, és használjuk ki, hogy a megváltozások kicsik (ezért a négyzetüket és a magasabb hatványaikat elhanyagolhatjuk):

$$
T ^ { 4 } \Delta V + 4 T ^ { 3 } V \Delta T = \Delta \left( T ^ { 4 } V \right) = 0 ,
$$

tehát $T ^ { 4 } V$ a folyamat során állandó marad. A héliumgáz kezdeti és végállapotát összehasonlítva kapjuk, hogy

$$
T _ { 0 } ^ { 4 } V _ { 0 } = T _ { 1 } ^ { 4 } \frac { V _ { 0 } } { 2 } , \quad \text { vagyis } \quad T _ { 1 } = \sqrt [ 4 ] { 2 } T _ { 0 } \approx 1,2 T _ { 0 } .
$$

Ugyanezt az eredményt az (1)-ben szereplő kicsiny változások összegzésével (integrálással) is megkaphatjuk:

$$
\int _ { V _ { 0 } } ^ { V _ { 0 } / 2 } \frac { 1 } { V } \mathrm {~d} V + 4 \int _ { T _ { 0 } } ^ { T _ { 1 } } \frac { 1 } { T } \mathrm {~d} T = - \ln 2 + 4 \ln \frac { T _ { 1 } } { T _ { 0 } } = 0
$$

vagyis

$$
T _ { 1 } = \sqrt [ 4 ] { 2 } T _ { 0 } .
$$

II. megoldás. Az (1) egyenlet szerint a folyamat tekinthető egy $f = 8$ szabadsági fokú gáz adiabatikus összenyomásának. Erre a folyamatra a fajhőhányados $\kappa = \frac { f + 2 } { f } = \frac { 5 } { 4 }$, tehát az adiabatikus állapotváltozás egyenlete:

$$
T V ^ { \kappa - 1 } = T V ^ { 1 / 4 } = \text { állandó, }
$$

ahonnan $T _ { 1 } = \sqrt [ 4 ] { 2 } T _ { 0 }$.


III. megoldás. Kézikönyvekben ${ } ^ { 2 }$ és képletgyüjteményekben megtalálható, hogy $n$ mol anyagmennyiségű, $f$ szabadsági fokú molekulákból álló, $T$ hőmérsékletű és $V$ térfogatú ideális gáz entrópiája

$$
S ( T , V ) = \frac { f } { 2 } n R \ln \frac { T } { T _ { 0 } } + n R \ln \frac { V } { V _ { 0 } } .
$$

Az entrópia nullpontja önkényesen választható, a fenti képletben például

$$
S \left( T _ { 0 } , V _ { 0 } \right) = 0
$$

(ahol $T _ { 0 }$ és $V _ { 0 }$ lehet a feladatban szereplő kezdeti hőmérséklet és térfogat).
A vizsgált folyamatban nincs hőcsere a rendszer és a környezete között, továbbá (a dugattyú lassú mozgatása esetén) a folyamat reverzibilis, így a rendszer entrópiája változatlan marad:

$$
\left( \frac { f _ { \mathrm { He } } } { 2 } n R \ln \frac { T _ { 1 } } { T _ { 0 } } + n R \ln \frac { V _ { 0 } / 2 } { V _ { 0 } } \right) + \left( \frac { f _ { \mathrm { O } _ { 2 } } } { 2 } n R \ln \frac { T _ { 1 } } { T _ { 0 } } + n R \ln \frac { V _ { 0 } } { V _ { 0 } } \right) = 0 ,
$$

vagyis (tudva, hogy $f _ { \mathrm { He } } = 3$ és $f _ { \mathrm { O } _ { 2 } } = 5$ )

$$
4 \ln \frac { T _ { 1 } } { T _ { 0 } } + \ln \frac { 1 } { 2 } = 0 ,
$$

azaz a $T _ { 1 } = \sqrt [ 4 ] { 2 } T _ { 0 }$ eredmény adódik.
Megjegyzés. Ha a héliumgáz térfogatát olyan gyorsan csökkentjük a felére, hogy az oxigéngáz nem tud azonnal felmelegedni, akkor a folyamat irreverzibilissé válik, vagyis az entrópia nőni fog. Mivel adott térfogat esetén a magasabb hőmérséklethez tartozik nagyobb entrópia, a dugattyú hirtelen elmozdítása után a két gáz végül (a hőmérséklet kiegyenlítődése után) jobban felmelegszik, mint a feladatban szereplő lassú összenyomásnál.
