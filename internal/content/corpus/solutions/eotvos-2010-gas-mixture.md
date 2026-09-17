---
id: eotvos-2010-gas-mixture
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2010-gas-mixture
solution_type: official
source_document: solution-document-eotvos-2010-s
source_pdf: cache/phoxiv/eotvos/2010_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2010_S.pdf."
---

2. feladat. Egy dugattyúval ellátott tartályban T = 77,4 K h®mérséklet¶ nitrogén- és oxigéngáz keveréke található.
A h®mérsékletet állandó értéken tartva a gázelegyet lassan összenyomjuk. A keverék nyomása a 2. ábrán látható módon
változik a térfogat függvényében, ahol V1 = 15 dm3
és p1 = 56,3 kPa.
2. ábra
a) Milyen 
zikai jelenségek rejlenek az izotermán látható fur sa töréspontok mögött?
b) Mennyi nitrogén és mennyi oxigén van a tartályban?
(Honyek Gyula)
Megoldás. a) A (p2,V2) állapotnál az izoterma törése ismer®s: azt jelzi, hogy a gáz seppfolyósodni kezd, ezért
nem n® tovább a nyomása. De mi történt a (p1,V1) állapotban? Miért változott meg itt az izoterma meredeksége?
Figyeljünk fel arra, hogy a tartályban kétféle gáz keveréke található. Elképzelhet®, hogy ezek nem egyszerre kezdenek
seppfolyósodni, hanem itt, a (p1,V1) állapotban sak az egyik komponens kezd le sapódni, a másik pedig még gáz
halmazállapotú marad!
Vagyis összenyomás közben V1 és V2 között az egyik komponens nyomása már nem változik, a másiké pedig tovább
n®. Ez a második komponens akkor kezd le sapódni, amikor a tartály térfogata már V2-re sökkent. Ez a válasz az
a) kérdésre. Hogy melyik gáz kezd hamarabb seppfolyósodni, arra még sak tippelhetünk. Tételezzük fel, hogy ez az
oxigén.
b) Az a) kérdésre adott válasz alapján ábrázoltuk a folyamatot a (p,V ) diagramon (3. ábra).
3. ábra
A megadott adatokkal (p1 = 56,3 kPa és V1 = 15 dm3
)
p2 =
11
5
p1 = 123,9 kPa és V2 =
V1
3
= 5 dm3
.
Az oxigén egyel®re ismeretlen p0 telítési nyomását abból számíthatjuk ki, hogy a nitrogén még a V1 → V2 össze-
nyomás közben is gáz maradt. Elhanyagolva a seppfolyós oxigén térfogatát a tartályban, valamint a nitrogéngázt
továbbra is ideális gáznak tekintve felírhatjuk rá a BoyleMariotte-törvényt:
(p1 − p0)V1 = (p2 − p0)V2.
Ebb®l az oxigén telítési nyomása p0 =
2
5
p1 = 22,5 kPa.
Ennek segítségével felírhatjuk a nitrogén és az oxigén mólokban mért tömegének arányát:
nnitrogén
noxigén
=
p1 − p0
p0
=
3
2
.
Már sak egy összefüggés hiányzik a két mólszám között ahhoz, hogy kiszámíthassuk pontos értékeiket. Ez a keresett
összefüggés abból adódik, hogy a két mólszám összege a mólokban mért teljes anyagmennyiség, amely kezdetben még
(ideális) gáz volt, tehát érvényes rá az ideális gáz állapotegyenlete:
p1V1 = nösszesRT.
Ebb®l nösszes (= nnitrogén + noxigén) = 1,313 mól. Fentiek alapján, felhasználva a moláris tömegek értékét:
nnitrogén = 0,788 mól = 22,1 gramm,
noxigén = 0,525 mól = 16,8 gramm.
Kizárólag a feladatban szerepl® adatok segítségével nem lehet eldönteni, hogy az oxigén vagy a nitrogén kezd el
hamarabb seppfolyósodni.
Szöget üthet a fejünkben, hogy miért éppen a T = 77,4 K-es izotermát kérdezi a feladat. Eszünkbe juthat (táb-
lázatok alapján ellen®rizhetjük), hogy ez a h®mérséklet a folyékony nitrogén forráspontja normál légköri nyomáson
(1 atm = 1,013 · 105
Pa). Ez azt jelenti, hogy a nitrogén ezen a h®mérsékleten akkor kezd el seppfolyósodni, ha a
par iális nyomása eléri az 1 atmoszférát. A kezd®állapotban p1 = 56,3 kPa, vagyis ezen a nyomáson a nitrogén akkor
sem kezdhetne el kondenzálódni, ha a gáz tiszta nitrogén lenne.
Érvelésünket úgy is meger®síthetjük, ha kiszámítjuk a p2 − p0 nyomás értéket, mert ennek a különbségnek éppen
1 atmoszférának kell lenni, hiszen ez a telített nitrogéng®z nyomása 77,4 K-en. Ha a számításokat kerekítések nélkül
végezzük, akkor p2 = 123,86 kPa és p0 = 22,52 kPa, vagyis a különbség 101,34 kPa, ami nagy pontossággal1 atmoszféra.
Következtetésünket az is meger®síti, hogy a normál nyomású oxigén forráspontja (szintén táblázatokban megta-
lálható adat) 90,2 K, amib®l az következik, hogy a telített oxigéng®z nyomása 77,4 K-en kisebb, mint a nitrogéné
(1 atmoszféra), és valóban a megoldás részeredményeit felhasználva:
p0 =
2
5
p1 < p2 − p0 =
9
5
