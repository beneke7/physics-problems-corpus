---
id: solution-ocr-eotvos-2005-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2005_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2005-string-breaking-test]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. Két rögzített, egymástól $l = 2 \mathrm {~m}$ távolságra levố csigán erốs, de nem nyúlékony fonalat vezetünk át, és a végeire egy-egy $M = 1 \mathrm {~kg}$ tömegữ testet erósítünk az 1.(a) ábra szerint. (A fonal néhányszor 10 N terhelést bér ki szakadás nélkül. A csigák és a fonal tömege elhanyagolható.) Ha ujjunkkal lehúzzuk a fonal közepét úgy, hogy a két test 1-1 méterrel megemelkedjék (1.(b) ábra), majd elengedjük, a fonal elpattan, amikor $A$ és $B$ között „kiegyenesedik”. Ha azonban úgy engedjük el, hogy előbb egy ugyancsak 1 kg tömegü testet erósítünk a fonal közepéhez, akkor a fonal a továbbiakban nem szakad el.

![](../../../figures/solution-ocr/447f0dc2513765517f12536b.jpg)
(a)

(b)

1. ábra
a) Magyarázzuk meg a jelenséget!
b) Mekkora erő feszíti a fonalat abban a pillanatban, amikor kiegyenesedik?

Megoldás. a) Azt kell észrevenni, hogy amikor a fonal kiegyenesedik, abban a pillanatban a fonalat két oldalról húzó testek már állnak. Rendkívül rövid idő alatt kell megállniuk, lefékeződniük arról a $v = \sqrt { 2 g h } \approx 16 \mathrm {~km} / \mathrm { h }$ sebességről, amire addigi mozgásuk (szabadesés) során felgyorsultak. (Itt és a továbbiakban $h = \frac { 1 } { 2 } l = 1 \mathrm {~m}$.) Ha a fékezést „pillanatszerúnek" gondolnánk, vagyis a fékezés ideje $\Delta t \rightarrow 0$ lenne, akkor a testek gyorsulása és a fonalat feszítő $F$ eró is minden határon túl nőne, ezért elpattanna a fonal.

A valóságban természetesen még a „nem nyúlékony” fonal sem abszolút nyújthatatlan, hanem egy kicsit deformálható. Ehhez az alakváltozáshoz egy kicsiny, de véges $\Delta t$ idő szükséges, így a testek gyorsulása és ezzel együtt a fonalat feszítő erő ha nem is végtelenné, de nagyon naggyá válik. Mivel a fonal nem bír ki nagy erốt, elszakad.
b) Ábrázoljuk a folyamat három jellemző állapotát! A 2.(a) ábrán a kezdőállapotot tüntettük fel, megjelölve közben a középső test egyensúlyi helyzetét is, amelyen maximális sebességgel átlendül. A 2.(b) ábrán a fonal középső része vízszintes, a középső test azonban még emelkedik fölfelé. A 2.(c) ábra azt a pillanatot mutatja, amikor a középső test éppen megáll. Ekkor ismét állnak a szélső testek is. (Persze elképzelhető, hogy a középső test fel se emelkedik a 2.(b) ábrán látható helyzetig, ezt a lehetőśéget majd számítással kell ellenőriznünk.)
![](../../../figures/solution-ocr/df2041fd185bbdf992f65447.jpg)

A b) kérdés megfogalmazása arra utal, hogy a fonal ki fog egyenesedni, tehát a középső test eljut a $2 . ( b )$ ábrán jelzett állapotba. Lesz-e ott sebessége? Ezt érdemes kiszámítanunk. Írjuk fel a munkatételt a 2.( $a$ ) helyzettől a 2.( $b$ )-ig jelzett folyamatra! A szélső testek $h$ utat süllyednek, a középső $h \sqrt { 3 }$ utat emelkedik, ezért

$$
M g h - M g h \sqrt { 3 } + M g h = \frac { 1 } { 2 } M v ^ { 2 } .
$$


Felhasználtuk, hogy a 2.( $b$ ) helyzetben a szélső testek egy pillanatra megállnak, ezért csak a középső testnek lehet ekkor mozgási energiája. A felírt egyenletből a középső test sebessége: $v = \sqrt { 2 g ( 2 - \sqrt { 3 } ) h } > 0$. Tehát valóban emelkedik még a középső test. Meddig emelkedik? Ezt is kiszámíthatjuk, ha a $2 . ( b )$ és a $2 . ( c )$ állapotot hasonlítjuk össze energetikailag:

$$
2 M g \left( \sqrt { h ^ { 2 } + y ^ { 2 } } - h \right) + M g y = \frac { 1 } { 2 } M v ^ { 2 } .
$$

Ez $y$-ra nézve másodfokú egyenletté alakítható, melynek megoldásai: $y _ { 1 } = - 1,73 h$ és $y _ { 2 } = + 0,22 h$. (Az első gyök nyilván a kezdőállapotot adja meg, a 2.(c) állapotnak $y _ { 2 }$ felel meg.)

![](../../../figures/solution-ocr/b0836348bfdeb5166d55e087.jpg)
3. ábra

Hogy válaszolni tudjunk a feladat $b$ ) kérdésére, vizsgáljuk meg tüzetesen a $2 . ( b )$ ábrán látható helyzetet! Ebben a pillanatban a fonalat feszítő eró gyorsítja az éppen álló, de felfelé induló szélsớ testeket. Mekkora ez a gyorsulás? Tegyük fel, hogy a bal oldali csigától a középső testhez vezető $A P$ fonál $\Delta t$ idő alatt már egy kicsiny $\Delta \alpha$ szöggel túllendült a vízszintes helyzeten (3. ábra). Jelöljük a szélső testek sebességét $\Delta v$-vel! Ez a sebesség (a fonal nyújthatatlansága miatt) megegyezik a $P$ pontban levő középső test sebességének $A P$ irányú vetületével, vagyis

$$
\frac { \Delta v } { v } = \sin \Delta \alpha \approx \Delta \alpha .
$$

Másrészt a $P Q A$ derékszögü háromszögből

$$
\frac { v \Delta t } { h } = \operatorname { tg } \Delta \alpha \approx \Delta \alpha .
$$

A fenti két egyenlet összevetéséből

$$
\Delta v = \frac { v ^ { 2 } } { h } \Delta t ,
$$

vagyis a szélső testek gyorsulására

$$
a = \frac { \Delta v } { \Delta t } = \frac { v ^ { 2 } } { h }
$$

adódik.
Ugyanehhez a képlethez úgy is eljuthatunk, ha felírjuk, hogy a vízszinteshez közeli $A P$ szakasz hossza időben hogyan változik. Mivel $P Q \approx v t$ (ahol $t$ a 2.( $b$ ) ábrán látható állapottól mért idő), Pitagorasz tétele szerint

$$
A P = \sqrt { h ^ { 2 } + v ^ { 2 } t ^ { 2 } } = h \sqrt { 1 + \frac { v ^ { 2 } t ^ { 2 } } { h ^ { 2 } } } \approx h + \frac { v ^ { 2 } t ^ { 2 } } { 2 h } = h + \frac { a } { 2 } t ^ { 2 } .
$$

Ebből leolvashatjuk, hogy az $A P$ szakasz hossza $a = v ^ { 2 } / h$ gyorsulással növekszik, s a fonal nyújthatatlansága miatt a bal oldali test is ugyanekkora nagyságú, függőlegesen felfelé irányuló gyorsulással kell rendelkezzék.

A fonal által kifejtett erő a szélső testek mozgásegyenletéből kapható meg:

$$
F _ { \text {fonal } } - M g = M \frac { v ^ { 2 } } { h }
$$

azaz

$$
F _ { \text {fonal } } = M g [ 1 + 2 ( 2 - \sqrt { 3 } ) ] = 1,536 M g \approx 15 \mathrm {~N} .
$$

Így már érthető, miért nem szakad el ebben a helyzetben a „néhányszor 10 N terhelést kibíró” fonal.
Érdemes felfigyelni arra, hogy a szélső testek kétszer is emelkednek és kétszer is süllyednek egy-egy periódus során, hiszen a 2. ábrán feltüntetett mindhárom állapotban éppen állnak. Süllyedésük az idő függvényében nagyjából a 4. ábrán vázolt módon történik.


![](../../../figures/solution-ocr/856df925c88cff04714ee3ff.jpg)
4. ábra
