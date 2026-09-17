---
id: eotvos-2005-string-breaking-test
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2005-string-breaking-test
solution_type: official
source_document: solution-document-eotvos-2005-s
source_pdf: cache/phoxiv/eotvos/2005_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2005_S.pdf."
---

1. Két rögzített, egymástól l = 2 m távolságra lev® sigán er®s, de nem nyúlékony fonalat vezetünk át, és a végeire
egy-egy M = 1 kg tömeg¶ testet er®sítünk az 1.(a) ábra szerint. (A fonal néhányszor 10 N terhelést bír ki szakadás
nélkül. A sigák és a fonal tömege elhanyagolható.) Ha ujjunkkal lehúzzuk a fonal közepét úgy, hogy a két test 11
méterrel megemelkedjék (1.(b) ábra), majd elengedjük, a fonal elpattan, amikor A és B között kiegyenesedik. Ha
azonban úgy engedjük el, hogy el®bb egy ugyan sak 1 kg tömeg¶ testet er®sítünk a fonal közepéhez, akkor a fonal a
továbbiakban nem szakad el.
1. ábra
a) Magyarázzuk meg a jelenséget!
b) Mekkora er® feszíti a fonalat abban a pillanatban, amikor kiegyenesedik?
Megoldás. a) Azt kell észrevenni, hogy amikor a fonal kiegyenesedik, abban a pillanatban a fonalat két oldalról
húzó testek már állnak. Rendkívül rövid id® alatt kell megállniuk, lefékez®dniük arról a v =
p
2gh ≈ 16 km/h
sebességr®l, amire addigi mozgásuk (szabadesés) során felgyorsultak. (Itt és a továbbiakban h =
1
2
l = 1 m.) Ha a
fékezést pillanatszer¶nek gondolnánk, vagyis a fékezés ideje ∆t → 0 lenne, akkor a testek gyorsulása és a fonalat
feszít® F er® is minden határon túl n®ne, ezért elpattanna a fonal.
A valóságban természetesen még a nem nyúlékony fonal sem abszolút nyújthatatlan, hanem egy ki sit deformál-
ható. Ehhez az alakváltozáshoz egy ki siny, de véges ∆t id® szükséges, így a testek gyorsulása és ezzel együtt a fonalat
feszít® er® ha nem is végtelenné, de nagyon naggyá válik. Mivel a fonal nem bír ki nagy er®t, elszakad.
b) Ábrázoljuk a folyamat három jellemz® állapotát! A 2.(a) ábrán a kezd®állapotot tüntettük fel, megjelölve közben
a középs® test egyensúlyi helyzetét is, amelyen maximális sebességgel átlendül. A 2.(b) ábrán a fonal középs® része
vízszintes, a középs® test azonban még emelkedik fölfelé. A 2.(c) ábra azt a pillanatot mutatja, amikor a középs® test
éppen megáll. Ekkor ismét állnak a széls® testek is. (Persze elképzelhet®, hogy a középs® test fel se emelkedik a 2.(b)
ábrán látható helyzetig, ezt a lehet®séget majd számítással kell ellen®riznünk.)
2. ábra
A b) kérdés megfogalmazása arra utal, hogy a fonal ki fog egyenesedni, tehát a középs® test eljut a 2.(b) ábrán
jelzett állapotba. Lesz-e ott sebessége? Ezt érdemes kiszámítanunk. Írjuk fel a munkatételt a 2.(a) helyzett®l a 2.(b)-ig
jelzett folyamatra! A széls® testek h utat süllyednek, a középs® h
√
3 utat emelkedik, ezért
Mgh − Mgh
√
3 + Mgh =
1
2
Mv2
.
Felhasználtuk, hogy a 2.(b) helyzetben a széls® testek egy pillanatra megállnak, ezért sak a középs® testnek lehet ekkor
mozgási energiája. A felírt egyenletb®l a középs® test sebessége: v =
q
2g 2 −
√
3

h > 0. Tehát valóban emelkedik még
a középs® test. Meddig emelkedik? Ezt is kiszámíthatjuk, ha a 2.(b) és a 2.(c) állapotot hasonlítjuk össze energetikailag:
2Mg
p
h2 + y2 − h

+ Mgy =
1
2
Mv2
.
Ez y-ra nézve másodfokú egyenletté alakítható, melynek megoldásai: y1 = −1,73h és y2 = +0,22h. (Az els® gyök
nyilván a kezd®állapotot adja meg, a 2.(c) állapotnak y2 felel meg.)
3. ábra
Hogy válaszolni tudjunk a feladat b) kérdésére, vizsgáljuk meg tüzetesen a 2.(b) ábrán látható helyzetet! Ebben a
pillanatban a fonalat feszít® er® gyorsítja az éppen álló, de felfelé induló széls® testeket. Mekkora ez a gyorsulás? Tegyük
fel, hogy a bal oldali sigától a középs® testhez vezet® AP fonál ∆t id® alatt már egy ki siny ∆α szöggel túllendült
a vízszintes helyzeten (3. ábra). Jelöljük a széls® testek sebességét ∆v-vel! Ez a sebesség (a fonal nyújthatatlansága
miatt) megegyezik a P pontban lev® középs® test sebességének AP irányú vetületével, vagyis
∆v
v
= sin∆α ≈ ∆α.
Másrészt a PQA derékszög¶ háromszögb®l
v∆t
h
= tg∆α ≈ ∆α.
A fenti két egyenlet összevetéséb®l
∆v =
v2
h
∆t,
vagyis a széls® testek gyorsulására
a =
∆v
∆t
=
v2
h
adódik.
Ugyanehhez a képlethez úgy is eljuthatunk, ha felírjuk, hogy a vízszinteshez közeli AP szakasz hossza id®ben
hogyan változik. Mivel PQ ≈ vt (ahol t a 2.(b) ábrán látható állapottól mért id®), Pitagorasz tétele szerint
AP =
p
h2 + v2t2 = h
r
1 +
v2t2
h2
≈ h +
v2
t2
2h
= h +
a
2
t2
.
Ebb®l leolvashatjuk, hogy az AP szakasz hossza a = v2
/h gyorsulással növekszik, s a fonal nyújthatatlansága miatt a
bal oldali test is ugyanekkora nagyságú, függ®legesen felfelé irányuló gyorsulással kell rendelkezzék.
A fonal által kifejtett er® a széls® testek mozgásegyenletéb®l kapható meg:
Ffonal − Mg = M
v2
h
,
azaz
Ffonal = Mg

1 + 2 2 −
√
3

= 1,536Mg ≈ 15 N.
Így már érthet®, miért nem szakad el ebben a helyzetben a néhányszor 10 N terhelést kibíró fonal.
Érdemes fel
gyelni arra, hogy a széls® testek kétszer is emelkednek és kétszer is süllyednek egy-egy periódus során,
hiszen a 2. ábrán feltüntetett mindhárom állapotban éppen állnak. Süllyedésük az id® függvényében nagyjából a
4. ábrán vázolt módon történik.
4. ábra
