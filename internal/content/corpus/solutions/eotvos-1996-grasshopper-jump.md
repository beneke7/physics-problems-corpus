---
id: eotvos-1996-grasshopper-jump
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-1996-grasshopper-jump
solution_type: official
source_document: solution-document-eotvos-1996-s
source_pdf: cache/phoxiv/eotvos/1996_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/1996_S.pdf."
---

1. A földön vízszintes helyzetében egy 20 m átmér®j¶ fatörzs fekszik. Legalább mekkora sebességgel kell elugorjon
egy szö ske a földr®l, hogy át tudja ugrani a fatörzset? (A légellenállást hanyagoljuk el!)
Megoldás. A légellenállást elhanyagolva állíthatjuk, hogy a szö ske pályája parabolaív lesz. Els® gondolatunk az,
hogy egy olyan parabola adja a kívánt megoldást, amely a hengert legfelül, egyetlen pontban érinti. (Éppen át súszik
a szö ske a fatörzs felett.) Ezt a sejtést azonban még be kell bizonyítani, mint ahogy az is kiderülhet, hogy nem is igaz.
Ezért sak annyit tételezünk fel, hogy a kívánt pálya a fatörzs két oldalán, ugyanolyan magasságban érinti a fatörzset
(1. ábra).
Az ábrán C és C∗
jelöli az érintési pontokat. A szö ske az A pontból ugrik el, v1 kezd®sebességgel, a vízszintessel
α szöget bezáró irányban. A fatörzs tengelyével azonos magasságban lév® B (és B∗
) pontban a szö ske sebessége v2, a
vízszintessel bezárt szög β. Az érintési pontokban a sebesség v3, a vízszintessel bezárt szög γ. A parabolapálya legfels®
(D) pontjában a sebesség vízszintes irányú, nagysága v4.
A feladatban v1 minimális értékét kell meghatározni. (v1 ismeretében v2, v3, v4 az energiatétel felhasználásával
kapható meg, azonban ezek kiszámítása nem volt feladat.)
Mi legyen a független változó, aminek függvényében v1 széls®értékét keressük? Lehetne az elugrás helye, vagyis
például az AG távolság. Lehetne az elugrás szöge, amit az ábrán α-val jelöltünk. De lehetne akár a β, akár a γ
szög is: akármelyik szög meghatározza a másik kett®t. A független változó szeren sés megválasztása lerövidítheti a
számításokat.
Válasszuk független változónak a γ szöget! Ezzel ugyanis v3 kifejezhet®, v3 segítségével pedig felírható v1. Lássuk
el®ször v3 és γ kap solatát.
A CD hajítási pályán t3-mal jelölve az emelkedés idejét, a függ®leges sebességkomponens a C pontban
v3 · sinγ = gt3,
a vízszintes irányú CF elmozdulás pedig
v3 · cosγ · t3 = R · sinγ.
E két egyenlet összevetéséb®l kapjuk:
v2
3 =
gR
cosγ
.
Most írjuk fel az energiatételt az A és a C pont között:
1
2
mv2
1 =
1
2
mv2
3 + mg(R + Rcosγ)
Ebb®l
v2
1 = v2
3 + 2gR(1 + cosγ),v2
1 =
gR
cosγ
+ 2gR(1 + cosγ),v2
1 = 2gR

1 + cosγ +
1
2cosγ

.
Mekkora γ szögnél lesz v1 a legkisebb? (Els® sejtésünk szerint γ = 0 esetben, amikor épp át súszik a szö ske a
fatörzs tetején. Ekkor cos0 +
1
2cos0
= 1,5. A kérdés az, hogy lehet-e cosγ +
1
2cosγ
< 1,5.)
Írjuk fel a számtani és a mértani közép közötti egyenl®tlenséget cosγ és
1
2cosγ
esetén! (Feltéve, hogy egyik sem
negatív, ami azért igaz, mert cosγ nem negatív, ami viszont 0 ≤ γ ≤ 90◦
-ból következik.)
cosγ + 1
2 cosγ
2
≥
r
cosγ
1
2cosγ
=
√
2
2
.
cosγ +
1
2cosγ
legkisebb értéke tehát
√
2, ezt γ = 45◦
-nál veszi fel. Azt a meglep® eredményt kaptuk tehát, hogy
az optimális pálya a legfels® pontjában nem érinti a fatörzset, hanem fölé emelkedik. A szö ske helyzeti energiája a
legmagasabb pontban nagyobb ugyan, mint az  éppen át súszik  esetben, de a mozgási energiája   s az összenergiája
is   kisebb! Az eredeti kérdésre a helyes válasz tehát:
v1min =
r
2gR

1 +
√
2

≈ 2,2
m
s
.
Az érdekesség kedvéért kiszámíthatjuk α és β megfelel® értékeit is ebben az esetben:
α = 67,5◦

=
3π
8

, β = 60◦

=
π
3

;
az elugrási AG távolság pedig R 1 +
√
2
2
!
≈ 17 m. Az ábrán jelölt F pont a parabola fókuszpontja lesz.
