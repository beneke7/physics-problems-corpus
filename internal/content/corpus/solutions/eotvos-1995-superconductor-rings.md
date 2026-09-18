---
id: eotvos-1995-superconductor-rings
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-1995-superconductor-rings
solution_type: official
source_document: solution-document-eotvos-1995-s
source_pdf: cache/phoxiv/eotvos/1995_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/1995_S.pdf."
---

2. feladat. Két vékony, kon entrikus, szupravezet® gy¶r¶ a síkjukra mer®leges, homogén mágneses térben helyez-
kedik el. A mágneses induk ió vektorának nagysága B0, iránya az ábrán a papír síkjába befelé mutat. A bels® gy¶r¶
sugara sokkal kisebb a küls®énél (R1 ≪ R2). Az egyes gy¶r¶k induktivitása L1 illetve L2, és a köl sönös induk ió sem
hanyagolható el.
Mekkora és milyen irányú áramok indukálódnak az egyes gy¶r¶kben, ha a küls® mágneses teret megszüntetjük?
Varga István
Megoldás. A megoldás alapgondolata az, hogy a szupravezet® gy¶r¶kben nem indukálódhat ered® feszültség,
mert az végtelen nagy áramot eredményezne. Ez azt jelenti, hogy a küls® mágneses tér leépülésével egyidej¶leg olyan
áramoknak kell indukálódniuk, hogy az áramváltozás miatti öninduk iós és kül sönös induk iós feszültségek éppen
kioltsák a küls® mágneses tér változása miatt indukálódó körfeszültséget. Másképp fogalmazva: a szuravezet® gy¶r¶
által körülölelt mágneses
uxus nem változhat meg. Ha megsz¶nik a küls® tér
uxusa, fellép helyette az indukált
áramok
uxusa.
Felírhatjuk tehát az alábbi egyenl®ségeket:
B0R2
1π = L1I1 + MI2 és B0R2
2π = L2I2 + MI1,
ahol M a két gy¶r¶ közti köl sönös induk iós együttható. A fenti két egyenletb®l I1 és I2 kifejezhet®:
I1 =
B0(R2
1πL2 − R2
2πM)
L1L2 − M2
, illetve I2 =
B0(R2
2πL1 − R2
1πM)
L1L2 − M2
.
Ezekben a kifejezésekben B0, R1, R2, L1 és L2 megadott értékek, M-et azonban meg kell még határoznunk.
Hogyan számíthatjuk ki a két gy¶r¶ közötti köl sönös induk iót? Használjuk ki, hogy R1 ≪ R2! Feltételezhetjük,
hogy az R1 sugarú, ki si bels® gy¶r¶ belsejében az I2 áram által átjárt nagy, küls® gy¶r¶b®l származó mágneses mez®
jó közelítéssel homogénnek tekinthet®. Így a küls® gy¶r¶t®l származó
uxus
MI2 = B · R2
1π,
ahol B-t a nagy gy¶r¶ben folyó áram hozza létre a gy¶r¶ közepén, nagysága a Biot Savart-törvény alapján:
B = µ0
I2
2R2
.
Behelyettesítés után M-re a következ®t kapjuk:
M = µ0
π
2
R1
R1
R2
.
Hasonló megfontolással kaphatunk nagyságrendi be slést az L1 és L2 öninduk iós együtthatókra is. Egy R sugarú
körvezet®ben folyó áram által létrehozoztt Bátlag nagyságrendileg közelíthet® a középpontban mérhet® B értékkel.
Ennek megfelel®en a
uxus BR2
π, s ezt az árammal osztva az öninduk iós együtthatóra L ≈ µ0Rπ/2 adódik.
Megjegyzés. Nem tartozik a megoldáshoz, de az érdekesség kedvéért megemlítjük, hogy a körgy¶r¶ induktivitására
jó közelítéssel igaz az alábbi formula:
L ≈ µ0Rln
R
r
,
ahol R a körgy¶r¶ sugara, r pedig a kör keresztmetszet¶nek képzelt drót vastagságának a fele. Mivel a logaritmus
lassan változó függvény, a gy¶r¶ öninduk iós együtthatóját durva közelítésben µ0R-rel arányosnak vehetjük.
R1 ≪ R2 miatt M ≪ L1 ≪ L2, ezért az áramokra kapott kifejezéseket tovább egyszer¶síthetjük. A nevez®ben M2
elhanyagolható L1L2-höz képest, de elhanyagolható az I2 számlálójában szerepl® második tag is az els®höz képest. Így
kapjuk:
I2 =
B0R2
2π
L2
, illetve I1 =
B0R2
1π
L1

1 − µ0
π
2
R2
L2

.
Hátra van még az áramok irányának meghatározása. I2 nyilván a 4. ábrán látható elrendezésben az óramutató
járásával megegyez® irányban folyik, hogy a papír síkjába befelé mutató induk ióvektort hozzon létre. I1 iránya nem
ennyire magától értet®d®, azt a zárójelben álló kifejezés el®jele dönti el. Ennek megállapítására   Tóth Gábor Zsolt
ötlete nyomán   használjuk fel, hogy egy körvezet®ben folyó áram mágneses tere a kör síkjában fekv® bels® pontokat
vizsgálva a kör középpontjában a leggyengébb. Felírhatjuk tehát a következ® egyenl®tlenséget:
Φ2 = L2I2 > µ0
I2
2R2
R2
2π = µ0
π
2
I2R2.
Ebb®l következik, hogy 1 > µ0
π
2
R2
L2
, vagyis az I1 áram is az óramutató járásával megegyez® irányban folyik.
