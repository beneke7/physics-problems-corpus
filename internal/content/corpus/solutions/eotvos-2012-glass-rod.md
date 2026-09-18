---
id: eotvos-2012-glass-rod
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2012-glass-rod
solution_type: official
source_document: solution-document-eotvos-2012-s
source_pdf: cache/phoxiv/eotvos/2012_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2012_S.pdf."
---

2. feladat. Egy 10 m hosszú és 2 m vastag, hengeres üvegrúd mindkét domború vége egy-egy félgömb. A rúd
tengelye mentén, egyik végét®l mekkora távolságra helyezzünk el egy pontszer¶ fényforrást a leveg®ben, ha azt akarjuk,
hogy a rúd másik végét®l a) ugyanakkora, b) kétszer akkora távolságra találkozzanak az onnan kilép®, a tengellyel kis
szöget bezáró fénysugarak? Az üveg leveg®re vonatkoztatott törésmutatója 1,5.
2. ábra
(Radnai Gyula)
Megoldás. a) Ha azt szeretnénk, hogy a rúd másik végét®l ugyanakkora távolságra találkozzanak az onnan kilép®
fénysugarak, akkor egy nyilvánvaló megoldás erre az, hogy a rúd egyik küls® fókuszába helyezzük el a pontszer¶
fényforrást. Az ebb®l kiinduló fénysugarak a rúd belsejében párhuzamosan haladnak, majd a másik végénél kilépve
újra fókusztávolságnyira egyesülnek.
Tovább egyszer¶síti a megoldást, ha gondolatban levágjuk a rúd végeit. Ezáltal két vékony len sét és közöttük egy
 plánparalel  réteget kapunk (3. ábra).
3. ábra
A vékony, síkdomború len se fókusztávolságára
1
f
= (n − 1)

1
R1
+
1
R2

, most R2 → ∞.
Így
f =
R
n − 1
=
1 cm
1,5 − 1
= 2 cm.
Van azonban egy másik lehetséges megoldás is! Ekkor a fénysugarak nem párhuzamosan haladnak a rúd belsejében,
hanem a rúd közepén találkoznak, majd ebb®l a pontból kiindulva érik el a rúd másik végét. Ott kilépve éppen olyan
messze találkoznak, mint amilyen távolságra voltak a rúd els® végét®l, amikor elindultak. Ez is egy szimmetrikus
sugármenet, de most már nem segít a megoldásban az el®bbi  felszeletelés .
Vizsgáljuk meg általánosan az els® felület adta leképezést! Legyen a kiindulási T tárgypont a rúdvégt®l t távolságra,
keletkezzék ennek K képe a rúd belsejében k távolságra a leképez® rúdvégt®l. További jelölések a 4. ábrán láthatók.
4. ábra
Az ábráról leolvasható, hogy α = ε + γ, valamint γ = β + δ. Mindegyik szög külön-külön is ki si, ezért a Snellius
Des artes-törvény felhasználásával
n =
sinα
sinβ
≈
α
β
=
ε + γ
γ − δ
.
Ebb®l
n(γ − δ) = ε + γ,
nγ − γ = ε + nδ,
(n − 1)
h
R
=
h
t
+ n
h
k
,
1
t
+
n
k
= (n − 1)
1
R
⇒
1
t
+
1,5
5 cm
=
0,5
1 cm
⇒ t = 5 cm.
A kétféle sugármenet tehát a következ®:
5. ábra
b) Tekintsük a 6. ábrát!
6. ábra
Az el®z® gondolatmenethez hasonlóan most is meghatározhatnánk a kis szöget bezáró fénysugarakra érvényes leké-
pezési törvényeket. Helykímélés éljából ezt itt nem tesszük meg, de bárki ellen®rizheti, hogy a két végnél a következ®ket
kapjuk:
1
t1
+
n
k1
=
n − 1
R
, illetve
n
t2
+
1
k2
=
n − 1
R
.
(Megjegyezni úgy lehet, hogy mindig azt a kép-, illetve tárgytávolságot kell osztani n-nel, amelyik az üvegben van.)
A keresett t1 távolságot x-szel jelölve:
1
x
+
1,5
k1
=
0,5
1 cm
, illetve
1,5
10 cm − k1
+
1
2x
=
0,5
1 cm
.
Ebb®l x-re másodfokú egyenlet adódik, megoldása:
x1 = 4 cm; x2 = 1,25 cm.
Ellen®rzésképpen kiszámíthatjuk az új képpontok helyzetét. Eredményünket a 7. ábra mutatja.
7. ábra. x = 4 m esetén k1 = 6 m, t2 = 4 m, k2 = 8 m.
x = 1,25 m esetén k1 = −5 m, t2 = 15 m, k2 = 2,5 m
Megjegyzések. 1. További megoldásokat is kaphatnánk, ha nem sak a második rúdvégen átmen®, hanem az innen vissza-
ver®d® fénysugarakat is vizsgálnánk. Ezek egy része az els® felületr®l is visszaver®dik, és újra a második felület felé halad.
Itt egy részük kilép, másik részük visszaver®dik. Vagyis páros számú visszaver®dés után újabb és újabb, egyre halványabb
képpontok keletkeznek a rúd másik végér®l történ® kilépés után a leveg®ben. Ennek vizsgálatát természetesen nem várta el
a versenybizottság.
2. Több versenyz® próbálkozott olyan megoldással, amikor az üveghenger oldala is részt vesz a leképezésben. Ez hibás
gondolat, mivel a rúd tengelyén lév® pontból kiinduló és a tengellyel kis szöget bezáró fénysugarak az üvegben is a tengely
közelében haladnak, nem érhetik el a henger oldalát.
