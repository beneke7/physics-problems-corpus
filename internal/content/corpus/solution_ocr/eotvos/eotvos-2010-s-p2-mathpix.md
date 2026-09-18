---
id: solution-ocr-eotvos-2010-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2010_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2010-gas-mixture]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. feladat. Egy dugattyúval ellátott tartályban $T = 77,4 \mathrm {~K}$ hốmérsékletữ nitrogén- és oxigéngáz keveréke található. A hómérsékletet állandó értéken tartva a gázelegyet lassan összenyomjuk. A keverék nyomása a 2 . ábrán látható módon változik a térfogat függvényében, ahol $V _ { 1 } = 15 \mathrm { dm } ^ { 3 }$ és $p _ { 1 } = 56,3 \mathrm { kPa }$.

![](../../../figures/solution-ocr/3e42aa39213f6a52fabcbfc9.jpg)
2. ábra

a) Milyen fizikai jelenségek rejlenek az izotermán látható furcsa töréspontok mögött?
b) Mennyi nitrogén és mennyi oxigén van a tartályban?
(Honyek Gyula)

Megoldás. a) $\mathrm { A } \left( p _ { 2 } , V _ { 2 } \right)$ állapotnál az izoterma törése ismerős: azt jelzi, hogy a gáz cseppfolyósodni kezd, ezért nem nó tovább a nyomása. De mi történt a $\left( p _ { 1 } , V _ { 1 } \right)$ állapotban? Miért változott meg itt az izoterma meredeksége? Figyeljünk fel arra, hogy a tartályban kétféle gáz keveréke található. Elképzelhető, hogy ezek nem egyszerre kezdenek cseppfolyósodni, hanem itt, a $\left( p _ { 1 } , V _ { 1 } \right)$ állapotban csak az egyik komponens kezd lecsapódni, a másik pedig még gáz halmazállapotú marad!

Vagyis összenyomás közben $V _ { 1 }$ és $V _ { 2 }$ között az egyik komponens nyomása már nem változik, a másiké pedig tovább nő. Ez a második komponens akkor kezd lecsapódni, amikor a tartály térfogata már $V _ { 2 }$-re csökkent. Ez a válasz az $a )$ kérdésre. Hogy melyik gáz kezd hamarabb cseppfolyósodni, arra még csak tippelhetünk. Tételezzük fel, hogy ez az oxigén.
b) Az $a$ ) kérdésre adott válasz alapján ábrázoltuk a folyamatot a $( p , V )$ diagramon (3. ábra).

![](../../../figures/solution-ocr/6cbd4c26601d5fdf020d7397.jpg)
3. ábra

A megadott adatokkal ( $p _ { 1 } = 56,3 \mathrm { kPa }$ és $V _ { 1 } = 15 \mathrm { dm } ^ { 3 }$ )

$$
p _ { 2 } = \frac { 11 } { 5 } p _ { 1 } = 123,9 \mathrm { kPa } \quad \text { és } \quad V _ { 2 } = \frac { V _ { 1 } } { 3 } = 5 \mathrm { dm } ^ { 3 } .
$$

Az oxigén egyelőre ismeretlen $p _ { 0 }$ telítési nyomását abból számíthatjuk ki, hogy a nitrogén még a $V _ { 1 } \rightarrow V _ { 2 }$ összenyomás közben is gáz maradt. Elhanyagolva a cseppfolyós oxigén térfogatát a tartályban, valamint a nitrogéngázt továbbra is ideális gáznak tekintve felírhatjuk rá a Boyle-Mariotte-törvényt:

$$
\left( p _ { 1 } - p _ { 0 } \right) V _ { 1 } = \left( p _ { 2 } - p _ { 0 } \right) V _ { 2 } .
$$

Ebből az oxigén telítési nyomása $p _ { 0 } = \frac { 2 } { 5 } p _ { 1 } = 22,5 \mathrm { kPa }$.


Ennek segítségével felírhatjuk a nitrogén és az oxigén mólokban mért tömegének arányát:

$$
\frac { n _ { \text {nitrogén } } } { n _ { \text {oxigén } } } = \frac { p _ { 1 } - p _ { 0 } } { p _ { 0 } } = \frac { 3 } { 2 } .
$$

Már csak egy összefüggés hiányzik a két mólszám között ahhoz, hogy kiszámíthassuk pontos értékeiket. Ez a keresett összefüggés abból adódik, hogy a két mólszám összege a mólokban mért teljes anyagmennyiség, amely kezdetben még (ideális) gáz volt, tehát érvényes rá az ideális gáz állapotegyenlete:

$$
p _ { 1 } V _ { 1 } = n _ { \text {összes } } R T .
$$

Ebből $n _ { \text {összes } } \left( = n _ { \text {nitrogén } } + n _ { \text {oxigén } } \right) = 1,313$ mól. Fentiek alapján, felhasználva a moláris tömegek értékét:

$$
\begin{aligned}
n _ { \text {nitrogén } } & = 0,788 \text { mól } = 22,1 \text { gramm } , \\
n _ { \text {oxigén } } & = 0,525 \mathrm { mól } = 16,8 \text { gramm. }
\end{aligned}
$$

Kizárólag a feladatban szereplő adatok segítségével nem lehet eldönteni, hogy az oxigén vagy a nitrogén kezd el hamarabb cseppfolyósodni.

Szöget üthet a fejünkben, hogy miért éppen a $T = 77,4 \mathrm {~K}$-es izotermát kérdezi a feladat. Eszünkbe juthat (táblázatok alapján ellenőrizhetjük), hogy ez a hőmérséklet a folyékony nitrogén forráspontja normál légköri nyomáson ( $1 \mathrm {~atm} = 1,013 \cdot 10 ^ { 5 } \mathrm {~Pa}$ ). Ez azt jelenti, hogy a nitrogén ezen a hőmérsékleten akkor kezd el cseppfolyósodni, ha a parciális nyomása eléri az 1 atmoszférát. A kezdőállapotban $p _ { 1 } = 56,3 \mathrm { kPa }$, vagyis ezen a nyomáson a nitrogén akkor sem kezdhetne el kondenzálódni, ha a gáz tiszta nitrogén lenne.

Érvelésünket úgy is megerősíthetjük, ha kiszámítjuk a $p _ { 2 } - p _ { 0 }$ nyomás értéket, mert ennek a különbségnek éppen 1 atmoszférának kell lenni, hiszen ez a telített nitrogéngő́z nyomása 77,4 K-en. Ha a számításokat kerekítések nélkül végezzük, akkor $p _ { 2 } = 123,86 \mathrm { kPa }$ és $p _ { 0 } = 22,52 \mathrm { kPa }$, vagyis a különbség 101,34 kPa, ami nagy pontossággal 1 atmoszféra.

Következtetésünket az is megerősíti, hogy a normál nyomású oxigén forráspontja (szintén táblázatokban megtalálható adat) 90,2 K, amiből az következik, hogy a telített oxigéngőz nyomása 77,4 K-en kisebb, mint a nitrogéné (1 atmoszféra), és valóban a megoldás részeredményeit felhasználva:

$$
p _ { 0 } = \frac { 2 } { 5 } p _ { 1 } < p _ { 2 } - p _ { 0 } = \frac { 9 } { 5 } p _ { 1 } .
$$

A feladatban azért jelennek meg ezek az egyszerú törtek, mert véletlenül a telített nitrogén nyomása (1 atm) éppen négy és félszerese a telített oxigén nyomásának 77,4 K-en.

Kiegészítés (Honyek Gyula): Érdekességként említhetjük meg, hogy amennyiben észrevesszük, hogy a telített nitrogéngőz nyomása 77,4 K-en 1 atm, akkor a következő egyenleteket írhatjuk fel:

$$
\frac { 11 } { 5 } p _ { 1 } - p _ { 0 } = 1 \text { atm. és } \mathrm { p } _ { 1 } - \mathrm { p } _ { 0 } = \frac { 1 } { 3 } \mathrm {~atm} .
$$

Ezeknek az egyenleteknek a megoldása:

$$
p _ { 0 } = \frac { 2 } { 9 } \mathrm {~atm} . = 22,5 \mathrm { kPa } \quad \text { és } \quad \mathrm { p } _ { 1 } = \frac { 5 } { 9 } \mathrm {~atm} . = 56,3 \mathrm { kPa } ,
$$

vagyis azok számára, akik kihasználták, hogy normál légköri nyomáson a nitrogén forráspontja $77,4 \mathrm {~K}$, a megadott $p _ { 1 } = 56,3 \mathrm { kPa }$ adat felesleges volt.
