---
id: eotvos-2015-vibrating-incline
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2015-vibrating-incline
solution_type: official
source_document: solution-document-eotvos-2015-s
source_pdf: cache/phoxiv/eotvos/2015_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2015_S.pdf."
---

1. feladat kitûzte: Vigh Máté
Egy L = 6 m hosszúságú, merev deszkalap síkja a
vízszintessel állandó, α = 10°-os szöget zár be. Az
így kialakított lejtô tetejére egy kis hasábot helye-
zünk. A deszkát a lejtésvonalával párhuzamos irány-
ban A = 1 mm amplitúdóval és ω = 500 s−1
körfrek-
venciával harmonikusan rezgetni kezdjük.
Mennyi idô alatt éri el a hasáb a lejtô alját? (A csú-
1. ábra
A, w
L
m
a
szási és tapadási súrlódási együttható értéke egyaránt
μ = 0,4, a hasáb a mozgás során nem borul fel.)
Megoldás
Az m tömegû hasábra az mg nehézségi erô, az N
kényszererô és az F (csúszási vagy tapadási) súrlódási
erô hat (utóbbi iránya a deszkalap rezgetése során
változik). A test mozgásegyenletei a lejtôre merôle-
ges, illetve azzal párhuzamos irányban:
A gyorsulásnál a lejtés irányát választottuk pozitívnak,
N − m g cosα = 0,
F m g sinα = m a.
lásd a 2. ábrát.
Tapadás esetén a kényszererô és a súrlódási erô
között az |F| ≤ μN egyenlôtlenség áll fenn, míg csú-
szásnál |F| = μN. A hasáb gyorsulása akkor a lehetô
legnagyobb, ha a hasáb csúszik, és a hasáb deszkához
viszonyított (relatív) sebessége negatív irányba mutat.
Ekkor
az adatok behelyettesítése után amax ≈ 5,6 ms−2
adó-
amax
= g (sinα μ cosα),
dik. A deszkalap legnagyobb gyorsulása a harmoni-
kus rezgés következtében Aω2
= 250 ms−2
, amely több
mint 40-szer akkora, mint amax értéke, így a hasáb a
rezgetés indításakor azonnal megcsúszik. Látni fog-
juk, hogy további mozgása során a test sehol sem
tapad meg, tehát mindvégig az (állandó nagyságú)
csúszási súrlódási erô hat rá.
A hasáb gyorsulása a mozgás során tehát kétféle
értéket vehet fel aszerint, hogy a súrlódási erô éppen
a pozitív vagy negatív irányba mutat:
és mivel a megadott számadatok szerint μ > tgα, így
a±
= g (sinα ± μ cosα),
a+ elôjele pozitív, a− elôjele pedig negatív. Az a+
gyorsulású mozgásszakasz addig tart, amíg a deszka
(elôjeles) sebessége nagyobb a hasáb sebességénél,
míg az a− gyorsulású mozgásszakaszban a helyzet
éppen fordított. A 3. ábrán látható grafikonon ábrá-
zoltuk a deszkalap és a hasáb sebességét az idô függ-
vényében. Utóbbi egy olyan töröttvonallal ábrázolha-
tó, ahol az egyes szakaszok meredeksége a+ és a−.
Mivel |a+| > |a−|, így a hasáb egy periódusra vett
átlagsebessége (a „sodródási sebesség”) egyre nö-
vekszik, miközben a test lefelé sodródik a deszkán.
A sodródási sebesség növekedése addig tart, amíg
3. ábra
–Aw
Aw
0
a+ a+ a+ a– a– a–
T
t
a hasáb átlaggyorsulása zérussá nem válik. Ezután a
hasáb sebessége egy állandó vdrift érték körül fluktuál
(4. ábra). Ez az állandósult (stacionárius) mozgás a
viszonylag nagy rezgetési frekvencia miatt hamar ki-
alakul, így a teljes mozgási idô becslésekor a kezdeti
felgyorsulás idôszakát el is hanyagolhatjuk.
Az állandósult sodródás feltétele:
〈a〉 ≡
a t a−
t−
T
= 0.
30 FIZIKAI SZEMLE 2016/1
Természetesen fennáll a
4. ábra
–Aw
Aw
0
t+ t+ t+
t– t–
T
t
vdrift
egyenlôség is. Az egyenletekbôl megkaphatjuk a t+
T = t t−
idôtartam hosszát:
A sodródási sebességet pedig abból a feltételbôl
t =
a−
a−
− a
T =
⎛
⎜
⎝
⎞
⎟
⎠
1 −
tgα
μ
T
2
.
határozhatjuk meg, hogy a hasáb gyorsulása akkor
vált irányt, amikor a deszka és a hasáb sebessége
megegyezik. A sebesség (vdrift értékéhez képest ki-
csiny) fluktuációját elhanyagolva:
Végül, behelyettesítve a T+-ra kapott eredményt:
vdrift
≈ A ω cos
⎛
⎜
⎝
⎞
⎟
⎠
ω
t
2
.
A számszerû adatokat felhasználva vdrift ≈ 0,32 ms−1
vdrift
= A ω cos
⎡
⎢
⎣
⎤
⎥
⎦
⎛
⎜
⎝
⎞
⎟
⎠
1 −
tgα
μ
π
2
= A ω sin
⎛
⎜
⎝
⎞
⎟
⎠
π tgα
2μ
.
értéket kapunk, így a hasáb mozgásának becsült ideje
Hátravan még annak belátása, hogy a hasáb valóban
t =
L
vdrift
≈ 18,8 s.
nem tapad meg soha a lejtôn. A megtapadásnak két
feltétele van: az egyik, hogy egy adott pillanatban a test
és a deszkalap sebessége megegyezzen; a másik, hogy
ugyanebben a pillanatban a deszka gyorsulásának
nagysága kisebb legyen |a+|-nál vagy |a−|-nál asze-
rint, hogy a deszka épp lefelé vagy felfelé gyorsul. A
sebesség-idô grafikonról látszik, hogy ez a két feltétel
csak akkor következhet be, amikor a deszka gyorsulása
nagyon kicsi, azaz sebessége nagy (Aω-hoz közeli). Ek-
kora sebességre azonban a hasáb nem tud felgyorsulni,
mert már elôbb beáll a nála jóval kisebb vdrift. A hasáb
tehát mindvégig csúszva halad a lejtôn.
Megjegyzés
A megoldás során felhasználtuk, hogy a mozgás
elsô, átmeneti szakasza (amely alatt a hasáb átlagse-
bessége eléri a vdrift értéket) rövid. Részletesebb szá-
molással megmutatható, hogy ez az idôtartam
nagyságrendû, tehát a becslésnél elkövetett hibánk
τ ≈
A ω
μ g cosα
≈ 0,13 s
valóban elhanyagolható (1-2% körüli érték).
