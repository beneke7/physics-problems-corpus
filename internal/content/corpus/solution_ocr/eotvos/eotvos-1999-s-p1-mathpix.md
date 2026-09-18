---
id: solution-ocr-eotvos-1999-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1999_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1999-fighter-plane-sound]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. Egy szuperszonikus vadászgép 900 m magasan repül el felettünk, vízszintes irányban. 1 km messze van tőlünk, amikor először meghalljuk a hangját. Milyen irányból halljuk a repülőgép hangját akkor, amikor már 2 km messze van tőlünk a gép?
(Radnai Gyula)
Megoldás. Az 1. ábrán az $M$ megfigyelő fölött elhaladó repülőgépből egyenló időközönként kibocsátott hanghullámokat ábrázoltuk.

A szuperszonikus repülőgép sebessége nagyobb, mint a hang sebessége a levegőben. Jól látszik, hogy a repülőgép már elhaladt a megfigyelő felett, de a hangja még nem ért el a megfigyelőhöz. Az 1. ábrán a repülőgép éppen a $D$ pontban van, ez előtt $\tau$ idővel volt a $C$ pontban, $2 \tau$ idővel előtte a $B$ pontban, $3 \tau$ idővel előtte az $A$ pontban. $A B = B C = C D = v \tau$ ( $v$ a repülógép sebessége). Természetesen a közbülső pontokban is bocsát ki hangot a repülögép, az áttekinthetőség kedvéert ezeket nem tüntettük fel.

Akármekkora $\tau$ időközt választhatunk az ábrázolásra, most azonban éppen akkorát választottunk, hogy az 1. ábrán ábrázolt helyzethez képest pontosan $2 \tau$ idő múlva érjen el az $M$ megfigyelőhöz a repülőgép hangja; ezt mutatja a 2. ábra. Itt a repülógép már az $F$ pontban van, s a $C$ pontból indult hanghullám éppen $M$-be ért. (A többi pontból jövő hang még nem érte el $M$-et.)

Mivel $\overrightarrow { C M } \perp \overrightarrow { F M }$, a $C M F$ háromszög derékszögü. Ameddig a gép megtette a $C F$ utat, addig a hang a $C M$ távolságot futotta be. (Ábránkon ez az idő $3 \tau$.) Az összes pontból jövő hanghullán eredője az a kúp alakú „fejhullámfelület", amelynek egyik alkotója a 2. ábrán az $F M$ egyenes. E kúp fél nyílásszöge az ún. Mach-szög, amelyre

$$
\sin \varphi = \frac { c } { v }
$$

( $c$ a hangsebesség, $v \geq c$ ). Ennek az általánosan érvényes összefüggésnek a felhasználásával fogjuk megoldani a feladatot.

Tekintsük a 3. ábrát, melyen a balról jobbra haladó repülógép az $F$ pontban van, amikor először jut el a hangja az $M$ pontba. Az ábrából leolvasható, hogy a Mach-szögre (a megadott adatok felhasználásával)

$$
\begin{gathered}
\sin \varphi = \frac { 0,9 \mathrm {~km} } { 1 \mathrm {~km} } = 0,9 , \\
\varphi = 64,16 ^ { \circ } .
\end{gathered}
$$

Abban a pillanatban, amikor a repülőgép az $M$ megfigyelőtől 2 km távol lévő $R$ pontban van, a megfigyelő azt a hangot hallja, amit a gép egy korábbi időpontban adott ki. Ahol ekkor volt a repülőgép, azt a pontot jelöljük $P$-vel. Feladatunk tehát az $M P$ irány meghatározása. Kérdezhetjük például azt, hogy ez az irány mekkora szöggel marad le az $M R$ iránytól, vagyis hány fokkal hátrábbról halljuk a hangot, mint ahol látjuk a gépet. Ezt a szöget (melyet a 3. ábrán $\mu$-vel jelöltünk) az $M P R \triangle$-ből a szinusztétel segítségével határozhatjuk meg:

$$
\frac { \sin \varrho } { \sin \mu } = \frac { P M } { P R } .
$$

Mivel $\sin \varrho = \frac { 0,9 \mathrm {~km} } { 2 \mathrm {~km} } = 0,45$ (ahonnan $\varrho = 26,74 ^ { \circ }$ ), valamint

$$
\frac { P M } { P R } = \frac { c t } { v t } = \frac { c } { v } = \sin \varphi = 0,9 ,
$$

ezért

$$
\sin \mu = \frac { 0,45 } { 0,9 } = \frac { 1 } { 2 } , \quad \text { azaz } \quad \mu _ { 1 } = 30 ^ { \circ } , \quad \text { illetve } \quad \mu _ { 2 } = 150 ^ { \circ } .
$$

Meglepőnek túnhet, hogy a $\mu$ szögre két érték is adódott, pedig csak egy hegyesszögre számítottunk. Vajon a tompaszög is megoldása az eredeti fizikai problémának? Bizony az! Már a 2. ábrából is látszik, hogy ha a repülőgép túlhaladt az $F$ ponton, akkor nemcsak a $C$ pont utáni helyekről (pl. $D$-ből és $E$-ből) induló hullámok érik el fokozatosan az $M$ pontot, hanem egyidejüleg azok a hullámok is odaérnek, amelyeket még a $C$ pontba érkezése előtt bocsátott ki a gép (pl. $B$-ből, $A$-ból). Egy ilyen helyzetet mutat a 4. ábra, ahol éppen a $B$ és a $D$ pontok közeléből indult hullámok érik el egyszerre $M$-et. (A $C$-ból indult hullám már túlhaladt $M$-en). Az első „hangrobbanás" után tehát mindig két irányból halljuk a repülőgép hangját, igaz, általában az „elölről” jövőt halljuk erősebben.

Megjegyzés. A megoldók a hallott hang $M P$ irányának meghatározásakor általában a vízszintes vagy függőleges iránnyal bezárt szögeket adták meg. A helyes eredmények a vízszintessel bezárt szögekre: $\mu _ { 1 } + \varrho = 56,74 ^ { \circ }$, illetve $180 ^ { \circ } - \left( \mu _ { 2 } + \varrho \right) = 3,26 ^ { \circ }$; a függőlegessel bezárt szögek pedig: $90 ^ { \circ } - \left( \mu _ { 1 } + \varrho \right) = 33,26 ^ { \circ }$ és $\mu _ { 2 } + \varrho - 90 ^ { \circ } = 86,74 ^ { \circ }$.
