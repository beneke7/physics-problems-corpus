---
id: eotvos-2004-test-tube
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2004-test-tube
solution_type: official
source_document: solution-document-eotvos-2004-s
source_pdf: cache/phoxiv/eotvos/2004_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2004_S.pdf."
---

2. Nyílásával lefelé fordított, függ®leges helyzetben rögzített kém s® éppen hogy bemerül egy nagy tál vízbe (5. ábra).
A víz és a környezet h®mérsékletét a kezdeti 0 ◦
C-ról lassan megnöveljük. Egy id® után a melegítést abbahagyjuk, és
engedjük, hogy a h®mérséklet újra az eredeti értékre álljon vissza. Azt tapasztaljuk, hogy a kém s® fele magasságáig
megtelt vízzel. A küls® légnyomás mindvégig 105
Pa volt.
5. ábra
Körülbelül hány
◦
C-ra melegítettük fel a rendszert?
Megoldás. Válasszuk ki a kém s®ben lév® gázok (leveg®, vízg®z) három jellegzetes állapotát a fenti folyamat során,
és vizsgáljuk meg az állapotjelz®k között érvényes összefüggéseket!
1. A kezd®állapotban (0 ◦
C) a vízg®z jelenlétét®l eltekinthetünk (nyomása 0,6 kPa, ami elhanyagolható a leveg®
101 kPa-os nyomása mellett). A bezárt leveg® térfogatát V -vel, nyomását p0-lal, h®mérsékletét T0-lal, a molekulák
számát N0-lal jelölve felírhatjuk az ideális gáz termikus állapotegyenletét:
p0V = N0kT0.
2. A melegítés végén a V térfogatban már T h®mérséklet¶ gáz lesz, amely N = Nlev +Ng®z számú molekulából áll,
nyomása most is megegyezik a küls® p0 nyomással, de ez a leveg® plev és a vízg®z pg®z par iális nyomásából tev®dik
össze:
p = plev + pg®z,
ahol külön a leveg®re most is érvényes:
plevV = NlevkT.
A vízg®zre most sak annyit mondhatunk, hogy nyomása egyedül a h®mérséklett®l függ:
pg®z = f(T).
Ezt a függvényt (az ún. g®ztenzió függvényt) táblázattal szokás megadni; a középiskolában használatos táblázatban
5 fokonként szerepelnek a (telített) vízg®zre érvényes nyomásértékek.
3. A végállapotban visszaáll a kezdeti T0 h®mérséklet. A kém s® félig megtelt vízzel, tehát
V
2
térfogatban van
sak gáz, ami a kezd®állapothoz hasonlóan újra sak leveg®, a vízg®z elhanyagolható par iális nyomása miatt. A T
h®mérsékleten még meglév® vízg®z le sapódott. A leveg® nyomása pi it kisebb, mint a küls® légnyomás, de normál
kém s® esetén a kém s® felét kitölt® víz hidrosztatikai nyomása elhanyagolható a küls® légnyomás mellett. Írhatjuk
tehát:
p0
V
2
= NlevkT0.
A kezd®állapotra felírt állapotegyenlettel összehasonlítva megállapíthatjuk:
Nlev =
N0
2
,
vagyis a leveg® fele a melegítés során  kibugyborékolt  a kém s®b®l.
A melegítés végén így
plevV =
N0
2
kT,
míg a kezdetén
p0V = N0kT0
volt az érvényes állapotegyenlet. Ezekb®l
plev
p0
=
1
2
T
T0
következik.
A vízg®z nyomására tehát kétféle összefüggést tudtunk felírni. Egyrészt a már említett pg®z = f(T) g®ztenzió
függvényt, másrészt a mostani folyamatra érvényes
pg®z = p0 − plev = p0 − p0
T
2T0
összefüggést. A melegítés során elért végh®mérséklet így az alábbi egyenletb®l határozható meg:
p0 ·

1 −
T
2T0

= f(T).
Mivel az f(T) függvény táblázattal adott, a megfelel® T érték interpolá ióval határozható meg (6. ábra). A kérdéses
h®mérséklet (foknyi pontossággal) 347 K, azaz 74
◦
C.
6. ábra
Megjegyzések. 1. A megoldás során alkalmazott jogos elhanyagolások miatt az interpolá iót nem érdemes   nem is
szabad   több tizedesjegy  pontossággal  végezni.
2. A magyar iskolákból jött versenyz®knek kézenfekv® volt, hogy a  Négyjegy¶ -ben vagy a  Budó  könyvben
található táblázatokat használják. Az f(T) tenziógörbe bizonyos közelítésben elméleti úton, az ún. Clausius Clapeyron-
egyenlet felhasználásával is meghatározható, de mivel a hazai középiskolákban ez nem része a
zika tananyagnak, nem
számítottunk ilyen közelít® megoldásra. Mégis adódott egy: Szlovákiából. Természetesen a Bizottság ezt a megoldást
is elfogadta.
