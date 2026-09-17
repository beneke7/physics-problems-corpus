---
id: eotvos-2024-lens-system
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2024-lens-system
solution_type: official
source_document: solution-document-eotvos-2024-s
source_pdf: cache/phoxiv/eotvos/2024_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2024_S.pdf."
---

3. Egy tubusban szimmetrikusan elhelyeztünk két f1 = 50 cm és két f2 = 10 cm
fókusztávolságú gyűjtőlencsét a 7. ábrán látható módon. Sikerült a lencséket úgy
beállítani, hogy az optikai rendszeren átnézve a tárgyakat éppen olyannak látjuk,
mintha egy üres tubuson át néznénk azokat.
7. ábra 8. ábra
a) Mekkorák a lencsék közötti d és s távolságok?
b) Ha az előző optikai rendszert tubus nélkül megépítjük, és a kezünket megfelelő
helyen a lencsék közé helyezzük, akkor a 8. ábrán látható módon a kezünk egy részét
el tudjuk „tüntetni”. Magyarázzuk meg a jelenséget!
(Széchenyi Gábor)
Középiskolai Matematikai és Fizikai Lapok, 2025/1 47
i
i
2025.1.4 – 21:12 – 48. oldal – 48. lap KöMaL, 2025. január
i
i
i
i
i
i
Megoldás. a) I. módszer. A tárgyakat éppen olyannak látjuk, mintha „semmi”
nem lenne ott, vagyis egy jobb oldalról érkező fénysugár a lencserendszeren át-
haladva éppen a beérkező fénysugár meghosszabbításán fog továbbhaladni. Első
lépésként tekintsünk egy olyan fénysugarat, melynek belépő és így kilépő része is
párhuzamos az optikai tengellyel. Ekkor – ahogy azt a 9. ábrán is látjuk – a lencse-
rendszer, valamint a sugármenet is tükörszimmetrikus. Ilyenkor a két belső lencse
között haladó fénysugár is párhuzamos az optikai tengellyel. Egy, a végtelenből
érkező párhuzamos nyalábot a két jobb oldali lencse párhuzamos nyalábbá képez,
azaz ez a két lencse konfokális, fókuszpontjaik egybeesnek:
s = f1 +f2.
f1
s
d
f1 f2 f2
s
tükör
9. ábra
Ezután többféle módon megkaphatjuk a d távolság értékét, lássunk erre két
különféle utat!
1. út. Vegyünk fel egy tetszőleges helyen egy tárgyat, és határozzuk meg sorban
egymás után a négy lencse által alkotott képeit. A negyedik lencsén történő leké-
pezés után egy azonos állású és nagyítású, virtuális képet kell kapnunk az eredeti
tárgy helyén. A leképzési törvény szokásos alakját használva a képletekkel nehéz-
kesebb a számolás, ezért inkább használjuk a Newton-féle alakot (amely az x tárgy
és y képtávolságot a fókuszponttól méri, lásd a G. 855. gyakorlatot a KöMaL 2024.
májusi számában). Eszerint xy = f2
.
Helyezzük a tárgyunkat az első lencse fókuszpontjától x1 távolságra. A követke-
zőkben jelölje xi (yi) a jobb oldalról számított i. lencsén történő leképezéshez tarto-
zó, jobb (bal) oldali fókuszponttól mért tárgytávolságot (képtávolságot). A 10. áb-
rán piros ponttal a képek helyeit, fekete ponttal a fókuszpontokat jelöltük.
Az első lencsén történő leképezés:
x1y1 = f2
1 ⇒ y1 =
f2
1
x1
.
Mivel s = f1 +f2, a két lencse fókusza egybeesik, így
x2 = −y1,
A második lencsén történő leképezés:
x2y2 = f2
2 ⇒ y2 =
f2
2
x2
= −
f2
2
f2
1
x1.
48 Középiskolai Matematikai és Fizikai Lapok, 2025/1
i
i
2025.1.4 – 21:12 – 49. oldal – 49. lap KöMaL, 2025. január
i
i
i
i
i
i
f1
d
f1 f2 f2 f1 f2 f2 f1
x1
y = x 1 2
s = + f1 f2 s = + f1 f2
x3 y2
y = x 3 4
y = 4f + 2f + d + x 4 1 1 2
10. ábra
A 10. ábra alapján:
x3 = d−2f2 −y2.
Tovább folytatva a harmadik lencsén történő leképezéssel:
x3y3 = f2
2 ⇒ y3 =
f2
2
d−2f2 −y2
,
x4 = −y3.
Végül a negyedik lencsén történő leképezés:
x4y4 = f2
1 ⇒ y4 =
f2
1
x4
= −
f2
1
y3
= −
f2
1
f2
2
(d−2f2 −y2) =
= −
f2
1
f2
2

d−2f2 +
f2
2
f2
1
x1

= −
f2
1
f2
2
(d−2f2)−x1.
Ismét a 10. ábra alapján, ahhoz hogy a negyedik kép az első tárgy helyén legyen
a következő geometriai feltételnek kell teljesülnie:
−y4 = 4f1 +2f2 +d+x1.
Ebből
f2
1
f2
2
(d−2f2)+x1 = 4f1 +2f2 +d+x1.
Látható, hogy az egyenletből kiesik az x1 változó, azaz tetszőleges helyre helyezve
a tárgyat, annak képe a négy lencsén történő leképezés után éppen a tárgy helyén
lesz. Az egyenletet tovább alakítva:

f2
1
f2
2
−1

d = 2f2
f2
1
f2
2
+4f1 +2f2,
(f2
1 −f2
2 )d = 2f2(f2
1 +2f1f2 +f2
2 ).
A két középső lencse közötti távolságra az alábbi kifejezés adódik:
d = 2f2
(f1 +f2)2
f2
1 −f2
2
= 2f2
f1 +f2
f1 −f2
.
2. út. A lencserendszer középpontosan is szimmetrikus. Ha a beérkező fénysu-
gár meghosszabbítása a középponton menne át, akkor a kimenő fénysugár meg-
hosszabbítása is átmegy a középponton. Ilyenkor a fénysugárnak is középpontosan
Középiskolai Matematikai és Fizikai Lapok, 2025/1 49
i
i
2025.1.4 – 21:12 – 50. oldal – 50. lap KöMaL, 2025. január
i
i
i
i
i
i
szimmetrikusnak kell lennie, azaz annak fizikailag is át kell haladnia a rendszer
középpontján (lásd a 11. ábrát). Ennek következményeként egy, a középpontban
elhelyezett tárgyat a két bal oldali lencse a középpontba képez le mint virtuális
képet.
f1 f1 f2 f2
középpont
11. ábra
Szerkesszük meg a középpontba helyezett h magasságú tárgy képét! Tekintsünk
egy, az optikai tengellyel párhuzamos, illetve egy, az f2 fókusztávolságú lencse
fókuszán áthaladó sugármenetet, ezeket zölddel, illetve kékkel rajzoltuk meg a 12.
ábrán.
A B
C
D F
E
G
H
f1
f2
O
h
f2
f1
2
d
f1 f2 2
2
d
h
h
f2
f2
2
d
12. ábra
A két lencse konfokális, így a zöld sugármenetet követve a kép méretére
OH =
f1
f2
h
adódik. Az FGO és FED háromszögek hasonlóak, valamint
DF = f2 és FO =
d
2
−f2,
ahonnan
DE = BC =
f2
d
2 −f2
h.
Az ABC és AOH háromszögek is hasonlóak, amiből következik, hogy
BC
AB
=
OH
AO
⇒
f2
d
2 −f2
h
f1
=
f1
f2
h
2f1 +f2 + d
2
.
Az egyenletet d-re megoldva a korábban megkapott végeredményre jutunk.
50 Középiskolai Matematikai és Fizikai Lapok, 2025/1
i
i
2025.1.4 – 21:12 – 51. oldal – 51. lap KöMaL, 2025. január
i
i
i
i
i
i
A megadott fókusztávolságok behelyettesítése után:
s = f1 +f2 = 60 cm és d = 2f2
f1 +f2
f1 −f2
= 30 cm.
II. módszer. Vegyük fel a koordinátatengelyt az optikai tengelyen, középpontját
helyezzük az elrendezés közepére! A tárgy legyen a tengely x pontjában, amit a
jobb szélső lencse a z pontba képez le, ezt az első képet pedig a második lencse
az y pontba. A lencsék helyére is bevezetünk két új paramétert: az origótól mért
távolságukat (hogy rövidebbek legyenek a képletek, 13. ábra):
d2 =
1
2
d, d1 =
1
2
d+s.
d1 d2 d2 d1 0 x y
13. ábra
A harmadik és negyedik lencse az első kettőnek a tükörképe, ezért számukra az
x és y pont a −x, −y párnak felel meg. A fényút megfordíthatóságát is kihasználva
arra jutunk, hogy a bal oldali két lencse a második képet akkor képezi pontosan
vissza az x pontba, ha az y = L(x) páratlan függvény.
Írjuk fel az első két lencsére a leképezési törvényt a (k−f)(t−f) = f2
Newton-
féle alakot használva:
(x−d1 −f1)(d1 −z −f1) = f2
1 ,
(z −d2 −f2)(d2 −y −f2) = f2
2 .
Ejtsük ki a z ismeretlent úgy, hogy mindkét egyenletet elosztjuk a bal oldal z-t
nem tartalmazó tényezőjével, majd összeadjuk ezeket:
d1 −d2 −f1 −f2 =
f2
1
x−d1 −f1
+
f2
2
d2 −y −f2
.
A nevezőkkel beszorozva:
(d1 −d2 −f1 −f2)(x−d1 −f1)(d2 −y −f2) = f2
1 (d2 −y −f2)+f2
2 (x−d1 −f1).
Mielőtt elvégeznénk az összes szorzást, nézzük meg, melyik tagokra van szükségünk.
A fenti egyenlet egy
Axy +Bx+Cy +D = 0
implicit alakra vezet, ahol
A = d1 −d2 −f1 −f2, (1)
Középiskolai Matematikai és Fizikai Lapok, 2025/1 51
i
i
2025.1.4 – 21:12 – 52. oldal – 52. lap KöMaL, 2025. január
i
i
i
i
i
i
B = f2
2 +A(f2 −d2), (2)
C = −f2
1 −A(d1 +f1), (3)
D = f2
1 (d2 −f2)−f2
2 (d1 +f1)+A(d1 +f1)(d2 −f2) =
BC +f2
1 f2
2
A
. (4)
A keresett L függvény:
y = −
Bx+D
Ax+C
.
Ez akkor páratlan, ha α) A = D = 0, vagy β) B = C = 0.
Az α) esetben az (1) egyenletből A = 0 feltétellel:
(5) s = d1 −d2 = f1 +f2.
Ez a távolság ugyanakkora, mint a Kepler-féle távcsőben, vagyis eszközünk nem
más, mint két kifelé fordított Kepler-távcső. A d középső távolság meghatározá-
sához nézzük a D együtthatóra vonatkozó egyenletet. A (4) egyenletből D = 0
feltétellel:
(6) f2
1 (d2 −f2)−f2
2 (d1 +f1) = 0.
Helyettesítsük be (5)-ből d1 = d2 +f1 +f2-t, és oldjuk meg d2-re:
f2
1 (d2 −f2)−f2
2 (d2 +2f1 +f2) = 0
d2 = f2
f2
1 +2f1f2 +f2
2
f2
1 −f2
2
= f2
f1 +f2
f1 −f2
⇒ d = 2f2
f1 +f2
f1 −f2
.
Az eredményen látszik, hogy a megoldhatósághoz teljesülnie kell az f1 > f2 egyen-
lőtlenségnek. A második kép helye végül:
(7) y = −
B
C
x =

f2
f1
2
x.
A β) megoldásról megmutatjuk, hogy fordított képet ad, ezért nem felel meg a
feladat leírásának. A kép annyiszor fordul meg az eszközben, ahány valódi, ernyőn
felfogható kép létrejön. Az α) megoldásban például a párhuzamos fénynyaláb (vég-
telen távoli tárgy) a középső tartományban szintén párhuzamos, a két szélsőben a
lencsék közös fókuszpontjában valódi kép jön létre, így a kétszer megfordított kép
egyenes állású lesz. A β) megoldásnál a második kép az
y = −
D
Ax
helyre kerül, a végtelen távol levő tárgy második képe tehát az origóban lesz. Mivel
a sugármenet szimmetrikus, ez mindenképpen páratlan számú képfordítást jelent,
a végső kép így fordított állású lesz.
A feladat a) kérdésére tehát a válasz (a korábbi eredményekkel összhangban):
s = f1 +f2 = 60 cm és d = 2f2
f1 +f2
f1 −f2
= 30 cm.
52 Középiskolai Matematikai és Fizikai Lapok, 2025/1
i
i
2025.1.4 – 21:12 – 53. oldal – 53. lap KöMaL, 2025. január
i
i
i
i
i
i
Megjegyzések. 1. A kép és a tárgy összetett optikai eszközöknél is felcserélhető – ez a
fénysugár megfordíthatóságából következik. Ha a kettő ugyanott van, akkor a felcserélhe-
tőség az eszköz nagyítására az
N∗
=
K
T
=
T
K
=
1
N∗
feltételt adja, amiből
N∗2
= 1 és N∗
= ±1,
vagyis a kép ugyanakkora, de lehet egyenes vagy fordított állású.
Ellenőrizzük, hogy a nagyítás az α) megoldásban minden tárgytávolságra +1. Egy
lencse nagyítása (amit fordított állású kép esetén negatívnak tekintünk):
N =
K
T
= −
k
t
=
f
f −t
=
f −k
f
.
A teljes nagyítás a négy lencse nagyításának szorzata. Az első és harmadik kép helyét nem
számoltuk ki, de az egyes lencsék nagyításának felírásánál szerencsére két-két lehetőségünk
van:
N∗
=
f1
f1 +d1 −x
·
f2 −d2 +y
f2
·
f2
f2 −d2 −y
·
f1 +d1 +x
f1
.
A szorzások elvégzésekor vegyük észre, hogy a számláló és a nevező egyforma tagokat
tartalmaz, csak némelyiket eltérő előjellel:
(8) N∗
=
[(f1 +d1)(f2 −d2)+xy]+[x(f2 −d2)+y(f1 +d1)]
[(f1 +d1)(f2 −d2)+xy]−[x(f2 −d2)+y(f1 +d1)]
.
A számláló és nevező eltérő előjelű részéről megmutatjuk, hogy zérus:
x(f2 −d2)+y(f1 +d1) =
x
f2
1
[f2
1 (f2 −d2)+f2
2 (f1 +d1)] = 0.
(Ehhez használtuk a (7) eredményt, a szögletes zárójelben levő rész pedig (6) alapján
zérus.) Tehát N∗
= 1, bárhol is van a tárgy.
2. A β) megoldás a következő:
s =
p
2f1f2, d = 2f2
f1 −
√
2f1f2
f1 +f2 −
√
2f1f2
, f1 > 2f2.
A nagyítás (8) kifejezésében most az azonos előjelű rész, a számláló és nevező első tagja
tűnik el:
(f1 +d1)(f2 −d2)−
D
A
= (f1 +d1)(f2 −d2)−
f2
1 f2
2
A2
= 0,
ahol előbb behelyettesítettük (4) egyenletből D-t, majd pedig az
f2
1
A
= −(d1 +f1),
f2
2
A
= d2 −f2
értékeket, amik a B = C = 0 feltétellel a (2) és (3) egyenletből adódnak. A nagyítás tehát
ebben az esetben N∗
= −1, bárhol van a tárgy.
b) Ha megnézzük a 9. ábrán a párhuzamos nyalábot, láthatjuk, hogy a két belső
lencse között f2
f1
arányban, esetünkben 1
5-öd részére szűkül össze. Ha a kezünket
úgy rakjuk be a két belső lencse közé, hogy ez a szűk nyaláb a széttartott ujjaink
Középiskolai Matematikai és Fizikai Lapok, 2025/1 53
i
i
2025.1.4 – 21:12 – 54. oldal – 54. lap KöMaL, 2025. január
i
i
i
i
i
i
között át tud menni, akkor nem fog kitakarni semmit, és a teljes lencserendszeren
át a hátteret látjuk. A 14. ábrán nemcsak a párhuzamos, hanem kis szögben érkező
nyalábokat is tekintettünk, és szürkével rajzoltuk be azokat a tartományokat, ahová
helyezett tárgyak nem fognak semmit kitakarni.
f2
f1
f2
f1
14. ábra
❄
Az ünnepélyes eredményhirdetésre és díjkiosztásra 2024. november 22-én dél-
után került sor az ELTE TTK Eötvös termében. Megemlékeztünk az 50 és 25 évvel
ezelőtti Eötvös-versenyről, ismertettük az akkori feladatokat és a győztesek nevét.
Az 50 évvel ezelőtt díjazottak közül Vladár Károly – aki az idei évtől a versenybi-
zottság tagja – volt jelen, a 25 évvel ezelőttiek közül Hegedűs Ákos, Gáspár Merse
Előd és Terpai Tamás – ők pár mondatban beszéltek a versennyel kapcsolatos em-
lékeikről és a pályafutásukról. A 75 évvel ezelőtti győztes Holics László és az 50
évvel ezelőtti II. díjas Szép Jenő néhány soros üdvözletet küldött. Ezután követke-
zett a 2024. évi verseny feladatainak és megoldásainak bemutatása. Az 1. feladat
megoldását Vigh Máté, a 2. feladatét Vankó Péter, a 3. feladatét Széchenyi Gábor
ismertette.
Az esemény végén került sor az eredményhirdetésre. A díjakat Ormos Pál, az
Eötvös Loránd Fizikai Társulat elnöke adta át.
I. díjat a versenybizottság nem adott ki.
Az első feladat helyes, a második feladat lényegében helyes megoldásáért és a
harmadik feladatban elért részeredményért második díjat nyert Bencz Benedek, a
Baár–Madas Református Gimnázium, Általános Iskola és Kollégium 12. osztályos
tanulója, Horváth Norbert tanítványa.
A második feladat helyes megoldásáért és a másik két feladatban elért részered-
ményekért harmadik díjat nyert Téti Miklós, a Budapesti Fazekas Mihály Gyakorló
Általános Iskola és Gimnázium 11. osztályos tanulója, Schramek Anikó tanítványa.
Egy feladat lényegében helyes megoldásáért és kisebb részeredményekért di-
cséretet kapott Iliás Gergely, az ELTE fizika BSc szakos hallgatója, aki a Jedlik
Ányos Gimnáziumban érettségizett Radnai Tamás tanítványaként, Masa Barna-
bás, a Szegedi Radnóti Miklós Kísérleti Gimnázium 12. osztályos tanulója, Csányi
Sándor tanítványa, valamint Tóth Kolos Barnabás, a Budapest V. Kerületi Eötvös
József Gimnázium 11. osztályos tanulója, Varga Balázs tanítványa.
A második díjjal az Andersen Adótanácsadó Zrt. és a Nanorobot Vagyonkeze-
lő Kft. adományából 90 ezer forint, a harmadik díjjal 60 ezer, a dicsérettel 40 ezer
54 Középiskolai Matematikai és Fizikai Lapok, 2025/1
