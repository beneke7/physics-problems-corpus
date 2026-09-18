---
id: eotvos-2003-parallel-conductors
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2003-parallel-conductors
solution_type: official
source_document: solution-document-eotvos-2003-s
source_pdf: cache/phoxiv/eotvos/2003_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2003_S.pdf."
---

2. Két párhuzamos, egymástól d távolságra haladó, végtelen hosszú, vékony egyenes vezet®ben egyenl® nagyságú és
ellentétes irányú áramok folynak. Az induk ióvonalak a vezet®kre mer®leges síkokban helyezkednek el. Válasszon ki az
egyik síkban egy tetsz®leges P pontot és vizsgálja meg, hogy az ezen áthaladó induk ióvonal kör alakú-e!
(Radnai Gyula)
Megoldás. A 3. ábra a két párhuzamos vezet® által létesített mágneses tér néhány induk ióvonalát szemlélteti,
amikor a vezet®kön egyenl® nagyságú, de ellentétes irányú áramok haladnak át.
3. ábra
A spe iális árameloszlás miatt a létrejöv® mágneses mez® nagymérv¶ szimmetriát mutat: az egyik és másik áram-
vezet®t körülölel® induk ióvonalak nem sak egymás tükörképei, de akármelyik zárt görbe, amely mentén egy induk-
ióvonal halad, szimmetrikus a két áramvezet®n átfektetett síkra is. Ett®l persze még lehetnek ellipszisek, körök vagy
magasabb rend¶ zárt görbék is az induk ióvonalak, de ha van köztük kör, akkor annak a középpontja benne kell legyen
az áramvezet®kön átfektetett síkban.
Vegyünk fel a kiválasztott síkban egy (x;y) koordináta-rendszert úgy, hogy az egyik áram az origón, a másik pedig
a (d;0) ponton döfje át a síkot. A síkban kiválasztott P(x;y) ponton átmen® körök közül tehát sak azok jöhetnek
szóba induk ióvonalként, amelyek középpontja rajta van az x tengelyen. Egy ilyen kör középpontja legyen az (x0;0)
pont. A kör egyenlete ekkor
(x − x0)2
+ y2
= R2
,
ahol R d-t®l és x0-tól függ® mennyiség.
4. ábra
5. ábra
Ha ez a kör induk ióvonal, akkor az induk ióvektor állása a kör bármely pontjában megegyezik az ottani érint®
állásával (4. ábra). A P(x;y) ponton átmen® érint® iránytangense:
tgϕ = −
1
tgϕ0
= −
1
y
x − x0
= −
x − x0
y
.
Ezt kell majd összevetnünk a P pontbeli induk ióvektoron átfektetett egyenes iránytangensével. Az ered® B iránytan-
gense (5. ábra):
tgϕB =
By
Bx
=
B1y + B2y
B1x + B2x
.
Határozzuk meg ezt a mennyiséget! Egyetlen egyenes vezet® által keltett induk ióvektor nagysága:
B =
µ0I
2π
·
1
r
.
Ennek és az 5. ábráról leolvasható geometriai összefüggéseknek a felhasználásával az egyes összetev®k:
B1y = B1 cosα =
µ0I
2π
·
cosα
r1
=
µ0I
2π
·
x
r2
1
,
B2y = −B2 cosβ = −
µ0I
2π
·
cosβ
r2
=
µ0I
2π
·
(d − x)
r2
2
,
B1x = −B1 sinα = −
µ0I
2π
·
sinα
r1
= −
µ0I
2π
·
y
r2
1
,
B2x = B2 sinβ =
µ0I
2π
·
sinβ
r2
=
µ0I
2π
·
y
r2
2
.
Helyettesítsük be ezeket a kifejezéseket a tgϕB-re felírt összefüggésbe! Egyszer¶sítés után:
tgϕB =
x
r2
1
+
d − x
r2
2
−
y
r2
1
+
y
r2
2
=
x
1
r2
1
−
1
r2
2
!
+
d
r2
2
−y
1
r2
1
−
1
r2
2
! = −
x −
d
1 − (r2/r1)2
y
.
Ez a kifejezés akkor és sak akkor egyenl® a korábban kapott
tgϕ = −
x − x0
y
képlettel, ha
x0 =
d
1 − (r2/r1)2 .
Behelyettesítve az r2 =
q
y2 + (x − d)
2
és r1 =
p
y2 + x2 kifejezéseket, rendezés után a következ®t kapjuk: (x − x0)
2
+
y2
= x0(x0 − d). Ez pedig pontosan a megadott P ponton is átmen®, (x0;0) középpontú kör egyenlete, vagyis ez az
induk ióvonal kör alakú! Megkaptuk a kör sugarát is:
R =
p
x0(x0 − d).
Íme, ebben a mágneses mez®ben minden induk ióvonal kör alakú, hiszen P a tér tetsz®leges pontja lehet. Egy
ponton sak egyetlen induk ióvonal mehet át, az pedig kör alakú.
Megjegyzések. 1. A síkban azoknak a pontoknak a mértani helye, melyek két adott ponttól vett távolságainak
aránya állandó, az ún. Apollóniosz-kör. Eredményeinket úgy is megfogalmazhatjuk, hogy a vizsgált mágneses térben
az induk ióvonalak Apollóniosz-körök.
Bevezetve az r2/r1 = λ jelölést, e körök egyenlete

x −
d
1 − λ2
 2
+ y2
=

λ
d
1 − λ2
 2
,
amib®l többek között az R = λx0 érdekes összefüggés is leolvasható. (Apollóniosz id®számításunk kezdete el®tt 262-t®l
190-ig élt; a kúpszeletekr®l írt munkájában ® vezette be az ellipszis, parabola és hiperbola kifejezéseket.)
2. Ha sak ki sit is általánosabb esetet vizsgálunk, a számolás meglehet®sen elbonyolódik, és soha többé nem
kapunk kör alakú induk ióvonalakat. Érdemes lenne számítógépes szimulá ióval meghatározni az ellentétes irányú, de
nem egyenl® nagyságú áramok keltette mágnestér induk ióvonalait, hiszen erre r ≪ d esetén (az egyik áram közvetlen
közelében) ugyanúgy, mint r ≫ d esetén (ahonnan a két áram már egyetlen |I1 − I2| nagyságú áramnak látszik) az
induk ióvonalak egyre jobban hasonlítanak a körhöz. De milyen fur sa görbék jöhetnek ki közben?
