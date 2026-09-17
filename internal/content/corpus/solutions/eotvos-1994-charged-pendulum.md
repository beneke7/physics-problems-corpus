---
id: eotvos-1994-charged-pendulum
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-1994-charged-pendulum
solution_type: official
source_document: solution-document-eotvos-1994-s
source_pdf: cache/phoxiv/eotvos/1994_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/1994_S.pdf."
---

3. feladat. Függ®leges földelt fémsíktól d távolságra felfüggesztünk egy l hosszúságú fonálingát. Miután az m
tömeg¶, ki siny ingatestet elektromosan feltöltöttük, az inga újra egyensúlyi helyzetet vett fel, s most α szöget zár be
a függ®legessel (6. ábra).
| Mekkora az ingatest töltése?
| Mennyivel kell közelebb vinnünk a fémsíkot az inga felfüggesztési pontjához, ha azt akarjuk, hogy a függ®leges
fémsík magához rántsa az ingát?
| Anélkül, hogy közelebb vinnénk, tudjuk-e úgy mozgatni a mindig függ®leges fémsíkot, hogy hozzá sapódjon az
inga?
A fonál szigetel®, a leveg® hatása elhanyagolható, s a feladatot az alábbi numerikus értékek esetén oldjuk meg:
d = 0,5 m; l = 4 m; m = 10−3
kg; α = 1◦
.
Radnai Gyula
Megoldás. Tisztázzuk el®ször a fémsík szerepét! Tudjuk, hogy elektrosztatikus esetben a fémek felülete mindig
ekvipoten iális. (Addig-addig mozognak, rendez®dnek rajtuk a töltések, amíg ez az állapot ki nem alakul.) Ez azt
jelenti, hogy a fémek felületénél az elektromos térer®sségnek nem lehet érint® irányú komponense, vagyis a térer®sség
minden pontban mer®leges a fém felületére. A feladatban ponttöltés és sík fémfelület szerepel, ezért az er®térnek a 7(a)
ábrán vázolt szerkezet¶nek kell lennie. Ezzel az er®térrel ekvivalens egy olyan dipólus er®terének egyik fele, amelyet
egymástól 2x távolságra lév® Q és −Q ponttöltések hoznak létre, ahogyan azt a 7(b) ábrán vázoltuk.
A fémsík hatása tehát minden tekintetben helyettesíthet® egy −Q nagyságú ú.n. tükörtöltés hatásával. Ennek a
felismerésnek köszönhet®en azt az er®t, amit a fémsík fejt ki a Q tötésre, úgy is kiszámíthatjuk, mint a tükörtöltés
által kifejtett vonzóer®t.
A Coulomb-er®n kívül a Q töltésre még két er® hat (8. ábra): a nehézségi er® és a fonáler®. A három er® ered®je akkor
zérus | akkor van egyensúly |, ha a Coulomb-er® és a nehézségi er® hányadosa tg α-val egyenl®. Ebb®l határozhatjuk
meg a Q töltés keresett értékét.
mg tg α = k
Q2
[2(d − lsinα)]2 .
Átrendezés után:
Q = 2(d − lsinα)
r
mg
k
tg α,
(k = 9 · 109 Nm2
C2
, g = 9,81
m
s2
, a többi paraméter értéke a feladatban adott). Behelyettesítések után kapjuk:
Q = 1,187 · 10−7
C.
Mi történik, ha a fémsíkot közelebb visszük az ingához? A Coulomb-er® n®, mivel a tükörtöltést®l való távolság
sökken. A nehézségi er® nem változik, tehát egy nagyobb α szög esetén tud újra beállni az egyensúly. De van-e ilyen
új α szög? Hiszen az inga kilendülésével a Coulomb-er® tovább n®, és lehet, hogy az inga meg se áll addig, amíg hozzá
nem sapódik a fémsíkhoz.
Meg kell határoznunk azt az összefüggést, amely egyensúly esetén fennáll d és α között. Formálisan tekintsük d-t
α függvényének, s fejezzük ki ezt a függvényt az egyensúlyra már felírt fenti összefüggésb®l. Ezt kapjuk:
d = d(α) = lsinα +
s
kQ2
4mg
1
√
tg α
.
A függvény menete viszonylag kis α értékek környezetében a 9. ábrán látható módon egy minimumot mutat. Van
tehát egy olyan legkisebb d érték, amelynél közelebb nem vihetjük a fémsíkot. Ha közelebb visszük, nin s egyensúlyi
állapot, tehát hozzá sapódik az inga a fémsíkhoz.
Határozzuk meg d minimumát!
(Akiknek gondot okoz e kissé bonyolult függvény dieren iálása, úgy segíthetnek magukon, ha | felismerve, hogy
sak kis szögekröl van szó |, sinα és tg α helyére α-t írnak. Ekkor sak hatványfüggvényeket kell deriválni, s a végered-
mény legfeljebb a negyedikötödik értékes jegyben tér el a pontos eredményt®l.)
A minimum helyére (α∗
) kapjuk:
sin2α∗
(≈ 2α∗
) = 3
s
kQ2
2mgl2
, ebb®l α∗
= 2,12◦
,
d legkisebb lehetséges értékére pedig ez adódik:
dmin = 0,4435 m = 44,35 cm.
Mivel a fémsík eredetileg 0,5 méterre volt az inga felfüggesztési pontjától, ezért ahhoz, hogy a fémsík magához
rántsa az ingát, legalább ∆d = 5,65 cm-rel közelebb kell vinni.
Már sak arra kell válaszolnunk, hogy tudjuk-e úgy mozgatni a fél méterre lév® fémsíkot, hogy hozzá sapódjon az
inga akkor is, ha sohasem kerül a fémsík fél méternél közelebb a felfüggesztési ponthoz.
Igen, tudjuk: be kell lengetni az ingát, mint egy hintát. Elöször eltávolítjuk a fémsíkot, ekkor az inga hátra-
lendül. Amikor az inga elindul visszafelé, visszahozzuk a fémsíkot, hogy vonzóerejével növelje a lengés amplitúdóját.
Lényegében az inga lengésével szinkronban, de mindig ellentétes fázisban kell mozgatni a fémsíkot. Akármilyen kis
amplitúdóval is rezegtetjük a fémsíkot, ha ez megfelel® fázisban történik, el®bb-utóbb hozzá sapódik az inga.
Kiegészít® megjegyzések.
1. Tanulságos áttekinteni a feladat energetikai megoldását is. Nem sak azért, mert ez egy második megoldás, hanem
azért is, mert olyan új felismeréshez vezet, amely az el®z® megoldásból nem derült ki.
A fémsíkon in
uált (elektromosan megosztott) töltésrendszer poten iális energiájának felírása elég bonyolult feladat,
ezért ismét alkalmazzuk a tükörtöltéses módszert. Az inga + fémsík rendszer helyett tekintsük az inga + tükörképinga
rendszert (10. ábra), és írjuk fel e két ingából álló rendszer öszes poten iális energiáját! Ez a két ingatest gravitá iós
helyzeti energiáiból és az elektrosztatikus köl sönhatási energiáiból tev®dik össze (az utóbbi negatív).
U = mg(l − lcosα) + mg(l − lcosα) − k
Q2
2(d − lsinα)
.
Egyetlen inga poten iális energiája ennek a fele lesz:
U1 = mg(l − lcosα) − k
Q2
4(d − lsinα)
.
Az egyszer¶ség kedvéért foglalkozzunk most is a kis szögek esetével, legyen
x = lsinα ≈ kα, és h = l − lcosα ≈ l
α2
2
.
EzzelU1(α) =
mg
2
lα2
− k
Q2
4
1
d − lα
,
vagy áttérve az x = lα változóra:U1(x) =
mg
2l
x2
−
kQ2
4
1
d − x
.
Ezt az U1(x) függvényt x szerint dieren iálva kapjuk meg az ingatestre ható (x irányú) er® −1-szeresét, tehát az er®:
F1(x) = −
dU1(x)
dx
=
mg
l
x −
kQ2
4
1
(d − x)2
.
Mind az U1(x), mind az F1(x) függvények menete a paraméterek értékeit®l függ. Ha m, g, l, k, Q állandó, akkor
egyedül d-t®l. A 11. ábrán vázoltunk három különböz® esetet. Az a) esetben a poten iális energia minimuma jelöli ki
az inga stabilis egyensúlyi helyzetét, a maximum egy labilis egyensúlyt jelez. A ) esetben nin s egyensúlyi helyzet.
A kett® közti átmenetet, a határesetet mutatja az ábra b) része, amikor a poten iális energiának vízszintes érint®j¶
in
exiós pontja van, itt valósulhat meg még utoljára egyensúlyi helyzet. Az ehhez tartozó d paraméterérték lesz d
legkisebb értéke.
x = x∗
helyen tehát
dU1
dx
= 0 és
dF1
dx
= 0 is igaz.
Ebb®l a két feltevésb®l az alábbi egyenletekre jutunk:
2x(d − x)2
=
kQ2
l
2mg
, illetve (d − x)3
=
kQ2
l
2mg
.
Ezek szerint 2x = d − x, vagyis x =
d
3
a határesetben!
A fenti jelölésekkel: x∗
=
dmin
3
.
Ez az a szép és érdekes eredmény, ami nem jött ki az els® megoldás során: a fémsík egészen addig közelíthet® az
ingához, amíg az inga kilendüléséhez tartozó x érték el nem éri az éppen akkori d távolság harmadrészét. Ha elérte, s
még tovább közelítjük a fémsíkot, akkor már neki sapódik az inga.
Természetesen a feltételi egyenletek bármelyikébe behelyettesítve x =
d
3
értékét, megkapjuk d = dmin értékét:
d = dmin =
3
2
3
s
kQ2l
2mg
= 0,4435 m
2. A feladat harmadik kérdésére a belengetésen kívül más ötletes válaszok, megoldási javaslatok is születtek.
Ilyen például a fémsík körbeforgatása, amely körmozgásra sábítja az ingatestet. Voltak, akik a fémsík saját síkjában
történ® mozgatással próbálkoztak, számítva az elektronok tehetetlenségére, s a mozgó töltésekre ható Lorentz er®vel is
többen próbálkoztak | nem sok sikerrel. Elág sok jó 
zikai szemlélet¶ versenyz® akadt, aki | ha nem is tudta megoldani
a feladat nehéz, középs® részét |, erre a befejez® kérdésre jól válaszolt.
A verseny eredménye
Megosztott III. díjat nyert egyenl® helyezésben a következ® három versenyz®:
Horváth Péter, a Fazekas Mihály F®városi Gyakorló Gimnázium IV. osztályos tanulója (fels® fénykép), Horváth
Gábor tanítványa;
Ková s Krisztián, a békés sabai Kemény Gábor M¶szaki Szakközépiskola IV. osztályos tanulója (középs® fény-
kép), Mekis László és Varga István tanítványa;
Varga Dezs®, a miskol i Földes Feren Gimnázium IV. osztályos tanulója (alsó fénykép), id. Szabó Kálmán
tanítványa.
III. díjat nyert egyenl® helyezésben a következ® hét versenyz®:
Borsányi Szabol s, a budapesti Piarista Gimnázium IV. osztályos tanulója, Görbe László tanítványa;
Bur si Péter, a pápai Türr István Gimnázium III. osztályos tanulója, Németh Zsolt tanítványa;
Futó Gábor, az ELTE TTK matematikus szakos hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnázi-
umban érettségizett, mint Horváth Gábor tanítványa;
Juhász Sándor, a Fazekas Mihály F®városi Gyakorló Gimnázium IV. osztályos tanulója, Horváth Gábor tanítvá-
nya;
Koblinger Egmont, a Fazekas Mihály F®városi Gyakorló Gimnázium IV. osztályos tanulója, Horváth Gábor
tanítványa;
Mizera Feren , az ELTE TTK 
zikus szakos hallgatója, aki Szlovákiában, Rév-Komáromban érettségizett, mint
Szakál Ildikó, Spátai Lotár és Szabó Endre tanítványa;
Tóth Gábor Zsolt, a budapesti Árpád Gimnázium III. osztályos tanulója, Vankó Péter tanítványa.
Di séretben részesültek, s err®l oklevelet kaptak a verseny 1115. helyezettjei:
11. Halbritter András, a BME mérnök
zikus szakos hallgatója, aki a gy®ri Czu zor Gergely Ben és Gimná-
ziumban érettségizett, mint Csonka László tanítványa; 1213. Bárász Mihály, a Fazekas Mihály F®városi Gyakorló
Gimnázium III. osztályos tanulója, Horváth Gábor tanítványa; Várhegyi Péter, a BME mérnök
zikus szakos hall-
gatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett, mint Horváth Gábor tanítványa; 1415.
Kon z Imre, a Fazekas Mihály F®városi Gyakorló Gimnázium II. osztályos tanulója, Horváth Gábor tanítványa; Lo-
vas Rezs®, a debre eni KLTE Gyakorló Gimnáziumának III. osztályos tanulója, Dudi s Pál, Kirs h Éva és Szegedi
Ervin tanítványa.
Jegyz®könyvi di séretben részesültek a 1620. helyezett versenyz®k egyenl® helyezésben:
Feldmann Márton, a soproni Vas- és Villamosipari Szakközépiskola IV. osztályos tanulója, Lendvay Péterné tanít-
ványa; Juhász Bertalan, a debre eni KLTE Gyakorló Gimnáziumának IV. osztályos tanulója, Dudi s Pál tanítványa;
Madarassy Pál, a ELTE TTK térképész szakos hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban
érettségizett, mint Horváth Gábor tanítványa; Radnóti Gergely, a paksi Vak Bottyán Gimnázium IV. osztályos tanu-
lója, Horváthné Szabó Julianna és Gálosiné Kimle Mária tanítványa; Salk Miklós, a pé si Babits Mihály Gimnázium
IV. osztályos tanulója, Kon z Károly tanítványa.
Gratulálunk a nyerteseknek!
Radnai Gyula
0
p
0
p
0
(c)
(a)
(b)
,
3
3 ,
3
3 ,
V0
0 V
0
p
p V0
p
p0
0
d d
α α l l
x x Q, m Q, m
x
1
F
1 U
x
x
min
x
1
F
1 U
x
x
min
1
F
1 U
*
x
min d>d d=d d<d a) b) c)
0
3p0
V
3
0
= 1 m
3
p
p
V0
V
3
= 3 m
foly.
ρ
ρ
A
A+∆ A
l
l
test
h
0
v0
v
τ
v
t
τ
l =
2
α
d
l
m,Q
(a) (b)
x x x Q Q Q
d
l
mg
Q
m
F
C
α
Q
l
d
4mg
2
kQ 1
tg α
α
sin α
α*
