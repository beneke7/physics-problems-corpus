---
id: eotvos-2021-compressed-gas
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2021-compressed-gas
solution_type: official
source_document: solution-document-eotvos-2021-s
source_pdf: cache/phoxiv/eotvos/2021_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2021_S.pdf."
---

1. feladat. Egy hőszigetelt, hengeres tartályt egy jó hővezető, rögzı́tett fal oszt
két egyforma henger alakú térrészre. Az egyik térfélben héliumgáz, a másikban azzal
megegyező anyagmennyiségű oxigéngáz található, mindkét gáz kezdeti hőmérsékle-
te T0, kezdeti térfogata pedig V0. A tartály egyik végét könnyen mozgó, hőszigetelő
dugattyú zárja le, amellyel a héliummal töltött térrész térfogata változtatható. Ha-
tározzuk meg a hengerben lévő gázok végső hőmérsékletét, miután a dugattyú lassú
mozgatásával a héliumgáz térfogatát V0/2-re csökkentettük!
(Vigh Máté)
Megoldás. Az 1. ábra a kezdeti állapotot és a végállapotot mutatja.
1. ábra
1
Részletek a verseny honlapján: http://eik.bme.hu/~vanko/fizika/eotvos.htm.
Középiskolai Matematikai és Fizikai Lapok, 2022/2 105
i
i
2022.2.6 – 19:38 – 106. oldal – 42. lap KöMaL, 2022. február
i
i
i
i
i
i
Feladatunk a T1 hőmérséklet meghatározása. Ezt többféle módszerrel is meg-
tehetjük.
I. megoldás. Legyen a héliumgáz lassan változó pillanatnyi hőmérséklete T,
térfogata V . Az elválasztó fal jó hővezetése miatt az oxigéngáz hőmérséklete is T.
Ha a dugattyú elmozdulása miatt a hőmérséklet ΔT értékkel nő, a héliumgáz
térfogata pedig ΔV értékkel változik meg (ΔV < 0), akkor az egész rendszer belső
energiájának változása
(1) ΔE =
3
2
nRΔT +
5
2
nRΔT = 4nRΔT.
A héliumgáz nyomása:
p = nR
T
V
.
Az egész rendszerre alkalmazott első főtétel szerint
−pΔV = ΔE,
vagyis
(2)
ΔV
V
+ 4
ΔT
T
= 0.
Szorozzuk meg (2)-t T4
V -vel, és használjuk ki, hogy a megváltozások kicsik (ezért
a négyzetüket és a magasabb hatványaikat elhanyagolhatjuk):
T4
ΔV + 4T3
V ΔT = Δ(T4
V ) = 0,
tehát T4
V a folyamat során állandó marad. A héliumgáz kezdeti és végállapotát
összehasonlı́tva kapjuk, hogy
T4
0 V0 = T4
1
V0
2
, vagyis T1 =
4
√
2T0 ≈ 1,2T0.
Ugyanezt az eredményt az (1)-ben szereplő kicsiny változások összegzésével (integ-
rálással) is megkaphatjuk:
V0/2 
V0
1
V
dV + 4
T1 
T0
1
T
dT = −ln2 + 4ln
T1
T0
= 0,
vagyis
T1 =
4
√
2T0.
II. megoldás. Az (1) egyenlet szerint a folyamat tekinthető egy f = 8 szabad-
sági fokú gáz adiabatikus összenyomásának. Erre a folyamatra a fajhőhányados
κ =
f+2
f
= 5
4
, tehát az adiabatikus állapotváltozás egyenlete:
T V κ−1
= T V 1/4
= állandó,
ahonnan T1 = 4
√
2T0.
106 Középiskolai Matematikai és Fizikai Lapok, 2022/2
i
i
2022.2.6 – 19:38 – 107. oldal – 43. lap KöMaL, 2022. február
i
i
i
i
i
i
III. megoldás. Kézikönyvekben2
és képletgyűjteményekben megtalálható, hogy
n mol anyagmennyiségű, f szabadsági fokú molekulákból álló, T hőmérsékletű és
V térfogatú ideális gáz entrópiája
S(T,V ) =
f
2
nRln
T
T0
+ nRln
V
V0
.
Az entrópia nullpontja önkényesen választható, a fenti képletben például
S(T0,V0) = 0
(ahol T0 és V0 lehet a feladatban szereplő kezdeti hőmérséklet és térfogat).
A vizsgált folyamatban nincs hőcsere a rendszer és a környezete között, to-
vábbá (a dugattyú lassú mozgatása esetén) a folyamat reverzibilis, ı́gy a rendszer
entrópiája változatlan marad:

fHe
2
nRln
T1
T0
+ nRln
V0/2
V0

+

fO2
2
nRln
T1
T0
+ nRln
V0
V0

= 0,
vagyis (tudva, hogy fHe = 3 és fO2
= 5)
4 ln
T1
T0
+ ln
1
2
= 0,
azaz a T1 = 4
√
2T0 eredmény adódik.
Megjegyzés. Ha a héliumgáz térfogatát olyan gyorsan csökkentjük a felére, hogy az oxi-
géngáz nem tud azonnal felmelegedni, akkor a folyamat irreverzibilissé válik, vagyis az ent-
rópia nőni fog. Mivel adott térfogat esetén a magasabb hőmérséklethez tartozik nagyobb
entrópia, a dugattyú hirtelen elmozdı́tása után a két gáz végül (a hőmérséklet kiegyenlı́-
tődése után) jobban felmelegszik, mint a feladatban szereplő lassú összenyomásnál.
