---
id: solution-ocr-eotvos-2008-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2008_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2008-three-bodies-cooling]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. feladat. Ugyanabból az anyagból készült, állandó fajhójú három test hómérséklete $13 ^ { \circ } \mathrm { C } , 27 ^ { \circ } \mathrm { C }$ és $90 ^ { \circ } \mathrm { C }$. A két melegebb test tömege egyenként fele a 13 °C-os test tömegének. Megfeleló hógépek és energiatároló eszközök közbeiktatásával, külsó energia befektetése nélkül szeretnénk a 13 °C-os testet minél jobban lehüteni.
a) Hogyan kell eljárnunk? (A testek csak hốfelvétel vagy hôleadás során változtathatják meg hốmérsékletüket, halmazállapotváltozás nem történik, hốtágulásuk elhanyagolható.)
b) Mennyire hü̂lhet le az eredetileg 13 °C-os test?
(Radnai Gyula)
Megoldás. a) Hogyan lehet három test közül a leghidegebbet még tovább hüteni? Nincs nála hidegebb test, amivel kapcsolatba hozhatnánk. Adiabatikus munka végzésére sincs lehetőség, a testek most csak hőfelvétel vagy hőleadás során változtathatják meg a hőmérsékletüket.

Semmi kétség: hütőgépre van szükségünk! Viszont minden hütógép múködtetéséhez külső energiaforrás kell, ami most nem áll rendelkezésre.

Illetve mégis van egy kiút: ha a két különböző hőmérsékletú másik test felhasználásával müködtetünk egy hőerógépet! Azt a munkát, amit ebből nyerünk, felhalmozzuk egy energiatárolóban. Mire a két melegebb test között végül megszünik a hőmérsékletkülönbség, az így előállt „középmeleg” test és a hideg test közé már beiktathatunk egy hütőgépet, amely az előbb nyert munka befektetésével biztosan müködik valameddig. Ennek eredményeképpen a hideg test tovább húl. Már csak azt kell kiszámítanunk, mennyire hül le.
b) Először azt számítsuk ki, mennyi munka nyerhető a kezdetben $T _ { 1 } = 90 ^ { \circ } \mathrm { C } = 363 \mathrm {~K}$ és $T _ { 2 } = 27 ^ { \circ } \mathrm { C } = 300 \mathrm {~K}$ hőmérsékletú, $m$ tömegú, $c$ fajhőjú testek között müködtetett hőerőgép segitségével! A legnagyobb munkát akkor nyerjük, ha egyensúlyi folyamatokat végző, úgynevezett reverzibilis Carnot-gépet használunk. $Q _ { 1 }$-gyel, illetve $Q _ { 2 }$-vel jelölve e körfolyamatot végző gép egyetlen ciklusában a $T _ { 1 }$, illetve $T _ { 2 }$ hómérsékletú testektől felvett hốt, $Q _ { 1 } > 0$ és $Q _ { 2 } < 0$, ha $T _ { 1 } > T _ { 2 }$. Ekkor a ciklusonként végzett munka a termodinamika első főtétele szerint:

$$
W = Q _ { 1 } + Q _ { 2 } .
$$


Ugyanakkor a termodinamika második főtétele szerint

$$
\frac { Q _ { 1 } } { T _ { 1 } } + \frac { Q _ { 2 } } { T _ { 2 } } = 0 \quad \left( \eta = \frac { W } { Q _ { 1 } } = \frac { T _ { 1 } - T _ { 2 } } { T _ { 1 } } \right) .
$$

Egyetlen ciklus még alig változtatja meg a hốtartálynak tekinthető testek hőmérsékletét, elég sok ciklus után azonban egyre közelebb kerül egymáshoz a két test hómérséklete.

Hogyan függ össze ez a két hőmérséklet? Helyettesítsük be a második főtételbe

$$
Q _ { 1 } = - c m \Delta T _ { 1 } \quad \text { és } \quad Q _ { 2 } = - c m \Delta T _ { 2 }
$$

értékeit (a negatív előjel azért kell, mert ami a munkavégző közeg szempontjából felvett hő, az a hốtartályok szempontjából leadott hőnek számít):

$$
\frac { - c m \Delta T _ { 1 } } { T _ { 1 } } + \frac { - c m \Delta T _ { 2 } } { T _ { 2 } } = 0 .
$$

Innen kapjuk, hogy

$$
\begin{array} { r }
\frac { \Delta T _ { 1 } } { T _ { 1 } } + \frac { \Delta T _ { 2 } } { T _ { 2 } } = 0 , \\
T _ { 2 } \Delta T _ { 1 } + T _ { 1 } \Delta T _ { 2 } = \Delta \left( T _ { 1 } T _ { 2 } \right) = 0 ,
\end{array}
$$

vagyis

$$
T _ { 1 } T _ { 2 } = \text { állandó. }
$$

Tehát úgy változik a két test abszolút hőmérséklete, hogy a szorzatuk állandó marad! (Ez akkor és csak akkor van így, ha a két test hőkapacitása egyenlő; de ez most teljesül.) Végül is egy olyan közös hőmérséklet áll be, amelyre

$$
T _ { \text {közös } } ^ { 2 } = T _ { 1 } T _ { 2 } ,
$$

vagyis a közös hőmérséklet a kezdeti hőmérsékletek mértani közepe lesz. Esetünkben

$$
T _ { \text {közös } } = \sqrt { 363 \mathrm {~K} \cdot 300 \mathrm {~K} } = 330 \mathrm {~K} .
$$

A melegebb test által leadott hő nagysága (a hőmérséklet kelvin mértékegységének kiírása nélkül):

$$
c m \cdot ( 363 - 330 ) = c m \cdot 33 .
$$

A hidegebb test által felvett hő nagysága:

$$
c m \cdot ( 330 - 300 ) = c m \cdot 30 .
$$

Így az összesen nyert munka: $c m \cdot 3$, ezt használhatjuk fel majd a hütőgép meghajtására.
Most már foglalkozhatunk a hútógéppel, aminek az alsó hốtartálya lesz a $c$ fajhőjǘ, $2 m$ tömegü, $T _ { 3 } = 13 ^ { \circ } \mathrm { C } = 286 \mathrm {~K}$ hőmérsékletú test. A felső hốtartály is $c$ fajhőjúi, és ugyancsak $2 m$ tömegü, az előző folyamat végén nyert 330 K hőmérsékletú test. Ismét két azonos hőkapacitású testről van szó, vagyis most is állandó marad a két (abszolút) hőmérséklet szorzata.

Jelöljük $T$-vel az a kiszámítandó hőmérsékletet, amire a hideg test lehúl, és $T ^ { \star }$-gal azt a hőmérsékletet, amire a két másik test felmelegszik. Ekkor tehát

$$
T \cdot T ^ { \star } = 286 \cdot 330 ,
$$

és az energiaegyenlet:

$$
c \cdot 2 m \left( T ^ { \star } - 330 \right) - c \cdot 2 m ( 286 - T ) = c m \cdot 3 .
$$

A fenti két egyenlet már meghatározza a keresett $T$ és $T ^ { \star }$ értékeket:

$$
T = 278 \mathrm {~K} = 5 { } ^ { \circ } \mathrm { C } , \quad T ^ { \star } = 339,5 \mathrm {~K} = 66,5 ^ { \circ } \mathrm { C } .
$$

Vagyis a kezdetben 13 °C-os test végül is 5 °C-osra hüthető le. Ezt kellett kiszámítanunk.
