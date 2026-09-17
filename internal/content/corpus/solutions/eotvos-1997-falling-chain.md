---
id: eotvos-1997-falling-chain
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-1997-falling-chain
solution_type: official
source_document: solution-document-eotvos-1997-s
source_pdf: cache/phoxiv/eotvos/1997_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/1997_S.pdf."
---

2. Egy 1 méter magas asztal lapjának közepén lyuk van. A lyuk közvetlen környezetében az asztallapon lazán
elhelyeztünk egy 1 méter hosszú, vékony aranylán ot. Ennek egyik végét a lyukon keresztül ki sit meghúzzuk, majd
elengedjük. A lán egyre növekv® sebességgel szalad le a lyukon át. (Feltételezhetjük, hogy a lán nem guban olódik
össze. A súrlódás és a légellenállás elhanyagolható.)
Mennyi id® alatt ér a lán egyik, illetve másik vége a földre?
(Gnädig Péter)
Megoldás. Jelöljük L-lel az asztal magasságát, ami éppen megegyezik a lán teljes hosszával (a feladatban L =
1 m). Tekintsük azt a pillanatot, amikor a lán függ®leges, mozgásban lév® része x hosszúságú. Jelöljük m-mel ennek
a darabnak a tömegét, és írjuk fel rá a dinamika alaptörvényét! Persze, 
gyelembe kell vennünk, hogy most m nem
állandó, hanem id®ben változik, ezért:
mg =
∆(mv)
∆t
= m
∆v
∆t
+
∆m
∆t
v.
Átrendezve, a következ®t kapjuk:
m
∆v
∆t
= mg −
∆m
∆t
v.
A bal oldalon
∆v
∆t
= a miatt a pillanatnyi tömeg és gyorsulás szorzata áll. A jobb oldalon felhasználhatjuk, hogy
∆m =
m
x
∆x, így
ma = mg −
m
x
∆x
∆t
v.
Mivel
∆x
∆t
= v, m-mel való osztás után kapjuk:
a = g −
v2
x
.
Ez az izgalmasan egyszer¶ összefüggés jelzi, hogy a lán mozgásban lév® részének gyorsulása g-nél mindenképp
kisebb, s mivel v és x is változik id®ben, feltehet®en a gyorsulás sem marad állandó. Ennek ellenére próbáljuk ki,
hátha mégis állandó a gyorsulás, hiszen lehet, hogy a v2
/x kifejezés véletlenül nem függ az id®t®l! Próbaképpen
helyettesítsük be v és x helyére a zérus kezd®sebesség¶, egyenletesen gyorsuló mozgás sebességének és a megtett útnak
id®t®l függ® képleteit:
v2
x
=
(at)2
a
2 t2
= 2a = állandó, ha a = állandó!
Így hát a lán egyenletesen gyorsuló mozgással szalad le a lyukon át. Számítsuk ki a gyorsulását:
a = g − 2a,3a = g,a =
g
3
.
Ha a lán t1 id® alatt fut le az asztalról, akkor a legelöl futó lán szem t1 id® alatt g/3 gyorsulással tesz meg L utat,
ezért
t1 =
r
2L
a
=
s
6L
g
= 0,78 s.
A lán egyik vége tehát 0,78 s alatt ér le a földre. Mennyi id® alatt ér le a másik? Amikor a lán alsó vége eléri a földet,
abban a pillanatban az egész lán függ®leges, és akkora sebességgel mozog, amekkora a legalsó lán szem végsebessége:
v1 = at1 =
g
3
s
6L
g
=
r
2
3
Lg = 2,56
m
s
.
Ett®l kezdve az egész lán szabadon esik. A legfels® lán szem v1 kezd®sebességgel, g gyorsulással tesz meg L utat.
Jelöljük az ® esési idejét t2-vel, akkor felírhatjuk:
L = v1t2 +
1
2
gt2
2.
Ebbe behelyettesítve v1 =
r
2
3
Lg értékét, a t2-re adódó másodfokú egyenletet megoldva kapjuk:
t2 =
s
2L
3g
= 0,26 s

=
t1
3

.
Ez a lán vég tehát a folyamat kezdetét®l számítva
t1 + t2 =
4
3
t1 = 1,04 s
múlva fog földet érni.
Megjegyzések. 1. Sok hibás megoldás abból indult ki, hogy mivel a súrlódás és a légellenállás elhanyagolható, ezért
a lán me hanikai energiája állandó marad. Ebben az esetben az a sebesség, amivel a lán alsó vége eléri a földet, az
energiatétel felhasználásával a következ®képp adódna:
1
2
mv2
1 = mg
L
2
,
mivel a lán tömegközéppontja
L
2
-vel van mélyebben abban a pillanatban, amikor az egész lán függ®legesen mozog. A
fenti összefüggés azonban nem helyes! Ha behelyettesítjük v1 helyébe a helyes megoldásban kapott értéket, ezt kapjuk:
1
2
mv2
1 =
1
2
m
r
2
3
Lg
!2
= mg
L
3
< mg
L
2
.
Hová t¶nt, mikor veszett el az energia
1
3
része? Akkor, amikor egy-egy lán szemet a már mozgó másik lerántott az
asztalról; a rugalmatlan ütközések során disszipálódott a me hanikai energia egy része.
2. A közölt helyes megoldással azonos eredményre vezet az a gondolat is, hogy az M tömeg¶ lán
M
L
∆s =
M
L
v∆t
tömeg¶ darabkáját ∆t id® alatt v sebességre gyorsítja fel a lán v sebességgel mozgó m =
M
L
x tömeg¶ része, amikor
magával rántja az asztalról. Ennek az er®nek a nagysága:
M
L · v · ∆t

v
∆t
=
M
L
v2
.
Ugyanekkora nagyságú, de ellentétes irányú er®t fejt ki a felgyorsuló lán szem (lán darabka) a már mozgó, m tömeg¶
részre! Így felírhatjuk:
ma = mg −
M
L
v2
.
Behelyettesítve m =
M
L
x kifejezését, kapjuk:
M
L
xa =
M
L
xg −
M
L
v2
,
azaz
a = g −
v2
x
.
3. Feltételezve, hogy az M tömeg¶ lán n darab lán szemb®l áll, ahol két lán szem közötti lazaság (szabad elmoz-
dulás) ε =
L
n
, a fenti helyes eredmény n → ∞ határértékben adódik.
4. Fels®bb matematikai módszerekkel megadható az
a = g −
v2
x
dieren iálegyenlet teljes megoldása t = 0, v = 0, x = x0 kezd®feltételek (x0 ≪ L) esetén. A megoldás aszimptotikusan
közelít a heurisztikusan talált a =
g
3
= állandó esethez.
