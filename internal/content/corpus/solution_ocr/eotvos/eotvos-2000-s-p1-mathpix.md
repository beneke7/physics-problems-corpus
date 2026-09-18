---
id: solution-ocr-eotvos-2000-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2000_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2000-chain-on-cylinder]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. Egy R sugarú, sima felületũ, vízszintes helyzetű, rögzített hengerhez egy apró szemũ láncot kötünk úgy, hogy egyik végét a paláston, a henger tengelyével azonos magasságban levố $A$ pontban rögzítjük, majd a láncot egyszer átvetjük a hengeren.

Legalább mekkora legyen a függólegesen lelógó rész l hossza, hogy a lánc többi része mindenhol a henger palástjához simuljon?
(Varga István)
Megoldás. Mindenek előtt azt vegyük észre, hogy ez a probléma nem a jól ismert dinamikai feladat-család egyik eleme, amikor is a hengerről lecsavarodó lánc felpörgeti a hengert! Most a henger rögzített, és rögzített az $A$ pont is, a lánc egyik vége. Legfeljebb az fordulhatna elő, hogy az alul kihasasodó lánc egyre jobban elválik a hengertől, s magával rántja, lehúzza az egész láncot. Persze ez se fordulhat elő, ha a lánc függőlegesen lelógó része elég hosszú. Mennyi ez az „elég”? Ez a kérdés. Vagyis ez egy sztatika feladat, amiben a lánc egyensúlyát kell megvizsgálnunk! (Az igaz, hogy nem éppen a legegyszerűbb feladatok közül való, ezért is jelentett kellemes meglepetést a Versenybizottságnak, hogy 18 olyan versenyző volt, aki hibátlan megoldást adott rá.)

Készítsünk ábrát, melyen egyrészt a hengerhez símuló és jobb oldalt lelógó láncot látjuk, majd ennek egy kicsiny, kinagyított részét, s ezen ábrázoljuk valamelyik kiválasztott láncszemre ható erőket! Jelöljük egyetlen láncszem tömegét $m$-mel, átmérőjét (két egymás melletti láncszem középpontjának távolságát) $d$-vel! Válasszuk ki az 2. ábrán $\alpha$ szöggel (illetve $y$ függőleges koordinátával) megjelölt helyzetü láncszemet, s ábrázoljuk az erre ható eróket:
$m g$ nehézségi erő hat rá függőlegesen lefelé;
$N$ nyomóerőt fejt ki rá a henger sugár irányban (az érintőre merőlegesen);
$K$ eröt fejt ki rá a jobb oldali szomszédja;
$K + \Delta K$ erót fejt ki rá a bal oldali szomszédja.
E két utóbbi húzóeró, amit a szomszédos láncszemek fejtenek ki rá, nem esik egy egyenesbe, hanem a henger görbületének megfelelően $\varepsilon = d / ( 2 R )$ szöget zárnak be a hengernek a kiválasztott láncszemhez húzott érintő́jével, ahogyan ez a 2. ábra kinagyított részén is látható.

A kiválasztott láncszemre ható erők eredő́je zérus. Írjuk fel először az érintő irányú erők egyensúlyát:

$$
( K + \Delta K ) \cos \varepsilon - m g \sin \alpha - K \cos \varepsilon = 0 .
$$

Mivel $\varepsilon \ll 1$, ezért $\cos \varepsilon \approx 1$, tehát írhatjuk:

$$
\Delta K = m g \sin \alpha .
$$

Ha a kiválasztott láncszem függőleges koordinátája $y$, a felső szomszédjáé pedig $y + \Delta y$, akkor

$$
\Delta y = d \sin \alpha ,
$$

ezért

$$
\Delta K = \frac { m g } { d } \Delta y .
$$

Azt kaptuk, hogy $\Delta K$ arányos $\Delta y$-nal. Ebből következik, hogy $K$ lineáris függvénye $y$-nak, vagyis

$$
K = \frac { m g } { d } y + \text { konstans } .
$$

(Hasonló módon járunk el sok esetben a fizikában; például amikor az egyenletesen gyorsuló mozgásnál abból, hogy $\Delta v$ arányos $\Delta t$-vel, arra következtetünk, hogy $v = a t + v _ { 0 }$.)

A fenti konstans értékét abból a feltételbő́l határozhatjuk meg, hogy speciális esetben, az $A$ pontban ( $y = R$ helyen) a $K$ erőnek $( l / d ) \cdot m g$-nek kell lennie, hiszen $l / d$ láncszem „húzza lefelé” az $A$ pontbeli láncszemet.

$$
\frac { l } { d } m g = \frac { m g } { d } R + \text { konstans } ,
$$

amiből a konstans értéke $m g ( l - R ) / d$-nek adódik. Ezt felhasználva

$$
K = \frac { m g } { d } ( y + l - R ) .
$$

Tudunk-e most már valamit mondani az $l$ hosszúság minimális értékéről? Az biztos, hogy a láncszemek csak húzni tudják egymást, tolni nem, ezért $K \geq 0$ még a legalsó pontban is, ahol $y = 0$. Ebből pedig a fenti egyenlet alapján az már biztos, hogy $l \geq R$. Vajon elég lenne $l = R$ is? Csak akkor, ha a legalsó láncszemet már nem húznák a szomszédai. Ez kicsit gyanús!


A lánc egyensúlyának szükséges és elégséges feltétele, hogy az érintő és a sugár irányú erők (erő-összetevők) eredője zérus legyen. Eddig még csak az érintő irányú egyensúlyt vizsgáltuk! Írjuk fel a sugár irányú erók egyensúlyát is:

$$
( K + \Delta K ) \sin \varepsilon + K \sin \varepsilon - N - m g \cos \alpha = 0 .
$$

Használjuk fel, hogy $\sin \varepsilon = d / ( 2 R )$, valamint $\cos \alpha = ( R - y ) / R$.

$$
( K + \Delta K ) \frac { d } { 2 R } + K \frac { d } { 2 R } - N - m g \frac { R - y } { R } = 0 .
$$

Mivel $\Delta K \ll K$, ezért az első két tag összege $K d / R$-nek vehető. Fejezzük ki az $N$ nyomóerőt:

$$
N = K \frac { d } { R } - m g \frac { R - y } { R } ,
$$

és helyettesítsük be $K = \frac { m g } { d } ( y + l - R )$-et! Azt kapjuk, hogy minden $y$-ra fenn kell állnia az alábbi egyenlőségnek:

$$
N = m g \frac { 2 y + l - 2 R } { R } .
$$

Mivel a nyomóeró sem lehet negatív, $N \geq 0$, ez pedig $y = 0$ esetén azt jelenti, hogy

$$
l \geq 2 R .
$$

Ez a feladat megoldása: a lánc lelógó részének legalább $2 R$ hosszúságúnak kell lennie.
Megjegyzés. Megvizsgálhatjuk most már, hogy a $K$ húzóerőnek mi a minimális értéke.

$$
K = \frac { m g } { d } ( y + l - R ) = \frac { m g } { d } ( y + R ) .
$$

A hengerre simuló legalsó láncszem $( y = 0 )$ esetén:

$$
K _ { \min } = \frac { m g } { d } R .
$$

Ez bizony nem zérus, hanem éppen akkora, mint a lánc függőlegesen lelógó részében a vele egy magasságban fellélő húzóerő. A 3. ábrán feltüntettük a lánc néhány helyén az egyes láncszemekre ható nehézségi erốt, nyomóerôt és a láncot feszítő erőket. Érdekes, hogy ha a legalsó láncszemet nem nyomja a henger, akkor az $A$ pont magasságában levőket a nehézségi erő kétszeresével, a legfelsó láncszemet pedig a rá ható nehézségi erőnél négyszer nagyobb erő szorítja a hengerhez.
