---
id: solution-ocr-eotvos-2002-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2002_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2002-gymnast-rings]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2003. Szeretnénk megbecsülni, hogy mekkora eró feszíti a gyúrữn edzó tornász karjait pályájának legalsó pontján, ha kézenállásból óriáskörbe lendül. A következö egyszerü modellt alkalmazzuk: igen hosszú, nyújthatatlan kötél végére l hosszúságú, $m$ tömegữ homogén rudat erósítünk, és az $1 . a$ ábrán látható helyzetbốl elengedjük. Számítsuk ki, hogy mekkora eró feszíti a kötelet az 1.b ábrán látható pillanatban! (A kötél tömegét hanyagoljuk el!)
![](../../../figures/solution-ocr/bf39ac31d00ba72864f79e78.jpg)
()
(Takács Gábor feladata nyomán)
Megoldás. Az eldőlő rúdra két erő hat: az $m g$ nehézségi eró és a $K$ kötélerő (2. ábra). Mindkettő függőleges irányú (a változó nagyságú kötélerő azért, mert a kötél „igen hosszú”). Mivel csak függőleges erők hatnak a rúdra, ezért a tömegközéppontja is csak függőleges, egyenes vonalú pályán mozoghat, tehát függőleges (nem harmonikus) rezgőmozgást végez.

![](../../../figures/solution-ocr/7397d78f207040e978520c0c.jpg)
2. ábra

A rúd alsó (a kötéllel érintkező) végének függőleges irányú elmozdulása a mozgás során mindvégig zérus, ez a pont tehát függőlegesen nem gyorsul. A kérdezett állapotban a tömegközéppont sebessége zérus, gyorsulása pedig maximális és akkora, amekkora nagyságú a rúd végeinek gyorsulása a tömegközéppont vonatkoztatási rendszerében:

$$
a = \frac { l } { 2 } \omega ^ { 2 } .
$$

A munkatétel szerint:

$$
m g l = \frac { 1 } { 2 } \left( \frac { 1 } { 12 } m l ^ { 2 } \right) \omega ^ { 2 } ,
$$

továbbá a dinamika alaptörvénye szerint:

$$
K - m g = m \frac { l } { 2 } \omega ^ { 2 } .
$$

E két egyenletből következik: $K = 13 m g$.


Megjegyzések. 1. Az eredményül kapott erő hihetetlenül nagy! Még akkor is, ha figyelembe vesszük, hogy a tornász egy karját ekkora erőnek csak a fele feszítené. Nem csoda, hogy olyan sok versenyző elhitte a feladat egyik tipikusan hibás feltételezésével, a kötél mozdulatlannak vélt alsó végpontja körüli forgásból kapható $K = 4 m g$ (hibás) végeredményt.

Nem sokkal az Eötvös-verseny után volt Debrecenben a 2002. évi tornász világbajnokság, amelyet gyürün - mint ismeretes - Csollány Szilveszter nyert meg. Az ő gyakorlatát alaposan megfigyelve jól lehetett látni, hogy a feladatban használt modell mennyire durva közelítése a merev testnek aligha tekinthető tornász mozgásának.
2. A feladat ugyan nem kérdezte, de tanulságos kiszámítani a kötelet feszítő erőt a rúd tetszőleges, mondjuk a függőlegessel $\varphi$ szöget bezáró helyzetében is. A fentiekhez hasonló számolásból (munkatétel + mozgásegyenlet) adódik:

$$
K ( \varphi ) = \frac { 3 ( \cos \varphi - 1 ) ^ { 2 } + 1 } { \left( 3 \sin ^ { 2 } \varphi + 1 \right) ^ { 2 } } m g .
$$

Ez a kifejezés sehol nem nulla (3. ábra), tehát a kötél nem lazul meg, jóllehet $\varphi \approx 61 ^ { \circ }$-nál $K$ alaposan ( $m g$ egyhatodára) lecsökken.

![](../../../figures/solution-ocr/440611533b060d237b253d63.jpg)
3. ábra
