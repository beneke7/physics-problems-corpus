---
id: solution-ocr-eotvos-1996-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1996_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1996-grasshopper-jump]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. A földön vízszintes helyzetében egy 20 cm átmérójǘ fatörzs fekszik. Legalább mekkora sebességgel kell elugorjon egy szöcske a földról, hogy át tudja ugrani a fatörzset? (A légellenállást hanyagoljuk el!)

Megoldás. A légellenállást elhanyagolva állíthatjuk, hogy a szöcske pályája parabolaív lesz. Első gondolatunk az, hogy egy olyan parabola adja a kívánt megoldást, amely a hengert legfelül, egyetlen pontban érinti. (Éppen átcsúszik a szöcske a fatörzs felett.) Ezt a sejtést azonban még be kell bizonyítani, mint ahogy az is kiderülhet, hogy nem is igaz. Ezért csak annyit tételezünk fel, hogy a kívánt pálya a fatörzs két oldalán, ugyanolyan magasságban érinti a fatörzset (1. ábra).

Az ábrán $C$ és $C ^ { * }$ jelöli az érintési pontokat. A szöcske az $A$ pontból ugrik el, $v _ { 1 }$ kezdősebességgel, a vízszintessel $\alpha$ szöget bezáró irányban. A fatörzs tengelyével azonos magasságban lévő $B$ (és $B ^ { * }$ ) pontban a szöcske sebessége $v _ { 2 }$, a vízszintessel bezárt szög $\beta$. Az érintési pontokban a sebesség $v _ { 3 }$, a vízszintessel bezárt szög $\gamma$. A parabolapálya legfelső $( D )$ pontjában a sebesség vízszintes irányú, nagysága $v _ { 4 }$.

A feladatban $v _ { 1 }$ minimális értékét kell meghatározni. ( $v _ { 1 }$ ismeretében $v _ { 2 } , v _ { 3 } , v _ { 4 }$ az energiatétel felhasználásával kapható meg, azonban ezek kiszámítása nem volt feladat.)

Mi legyen a független változó, aminek függvényében $v _ { 1 }$ szélsőértékét keressük? Lehetne az elugrás helye, vagyis például az $A G$ távolság. Lehetne az elugrás szöge, amit az ábrán $\alpha$-val jelöltünk. De lehetne akár a $\beta$, akár a $\gamma$ szög is: akármelyik szög meghatározza a másik kettőt. A független változó szerencsés megválasztása lerövidítheti a számításokat.

Válasszuk független változónak a $\gamma$ szöget! Ezzel ugyanis $v _ { 3 }$ kifejezhető, $v _ { 3 }$ segítségével pedig felírható $v _ { 1 }$. Lássuk először $v _ { 3 }$ és $\gamma$ kapcsolatát.

A $C D$ hajítási pályán $t _ { 3 }$-mal jelölve az emelkedés idejét, a függőleges sebességkomponens a $C$ pontban

$$
v _ { 3 } \cdot \sin \gamma = g t _ { 3 } ,
$$

a vízszintes irányú $C F$ elmozdulás pedig

$$
v _ { 3 } \cdot \cos \gamma \cdot t _ { 3 } = R \cdot \sin \gamma .
$$

E két egyenlet összevetéséből kapjuk:

$$
v _ { 3 } ^ { 2 } = \frac { g R } { \cos \gamma } .
$$

Most írjuk fel az energiatételt az $A$ és a $C$ pont között:

$$
\frac { 1 } { 2 } m v _ { 1 } ^ { 2 } = \frac { 1 } { 2 } m v _ { 3 } ^ { 2 } + m g ( R + R \cos \gamma )
$$

Ebből

$$
v _ { 1 } ^ { 2 } = v _ { 3 } ^ { 2 } + 2 g R ( 1 + \cos \gamma ) , v _ { 1 } ^ { 2 } = \frac { g R } { \cos \gamma } + 2 g R ( 1 + \cos \gamma ) , v _ { 1 } ^ { 2 } = 2 g R \left( 1 + \cos \gamma + \frac { 1 } { 2 \cos \gamma } \right) .
$$

Mekkora $\gamma$ szögnél lesz $v _ { 1 }$ a legkisebb? (Első sejtésünk szerint $\gamma = 0$ esetben, amikor épp átcsúszik a szöcske a fatörzs tetején. Ekkor $\cos 0 + \frac { 1 } { 2 \cos 0 } = 1,5$. A kérdés az, hogy lehet-e $\cos \gamma + \frac { 1 } { 2 \cos \gamma } < 1,5$.)

Írjuk fel a számtani és a mértani közép közötti egyenlőtlenséget $\cos \gamma$ és $\frac { 1 } { 2 \cos \gamma }$ esetén! (Feltéve, hogy egyik sem negatív, ami azért igaz, mert $\cos \gamma$ nem negatív, ami viszont $0 \leq \gamma \leq 90 ^ { \circ }$-ból következik.)

$$
\frac { \cos \gamma + \frac { 1 } { 2 \cos \gamma } } { 2 } \geq \sqrt { \cos \gamma \frac { 1 } { 2 \cos \gamma } } = \frac { \sqrt { 2 } } { 2 } .
$$

$\cos \gamma + \frac { 1 } { 2 \cos \gamma }$ legkisebb értéke tehát $\sqrt { 2 }$, ezt $\gamma = 45 ^ { \circ }$-nál veszi fel. Azt a meglepő eredményt kaptuk tehát, hogy az optimális pálya a legfelső pontjában nem érinti a fatörzset, hanem fölé emelkedik. A szöcske helyzeti energiája a legmagasabb pontban nagyobb ugyan, mint az „éppen átcsúszik” esetben, de a mozgási energiája - s az összenergiája is - kisebb! Az eredeti kérdésre a helyes válasz tehát:

$$
v _ { 1 _ { \min } } = \sqrt { 2 g R ( 1 + \sqrt { 2 } ) } \approx 2,2 \frac { \mathrm {~m} } { \mathrm {~s} } .
$$


Az érdekesség kedvéért kiszámíthatjuk $\alpha$ és $\beta$ megfelelő értékeit is ebben az esetben:

$$
\alpha = 67,5 ^ { \circ } \left( = \frac { 3 \pi } { 8 } \right) , \quad \beta = 60 ^ { \circ } \left( = \frac { \pi } { 3 } \right) ;
$$

az elugrási $A G$ távolság pedig $R \left( 1 + \frac { \sqrt { 2 } } { 2 } \right) \approx 17 \mathrm {~cm}$. Az ábrán jelölt $F$ pont a parabola fókuszpontja lesz.
