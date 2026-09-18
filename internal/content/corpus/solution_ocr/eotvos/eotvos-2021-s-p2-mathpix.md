---
id: solution-ocr-eotvos-2021-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2021_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2021-superconductor-ring]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. feladat. Egy henger alakú, l hosszúságú és $R \ll \ell$ sugarú, légmagos szolenoid meneteinek száma $N$. A tekercs belsejébe egy $r \ll R$ sugarú, a szolenoid szimmetriatengelyére merőleges síkú, $L$ induktivitású szupravezető gyűrűt helyezünk (a gyűrü és a szolenoid középpontja egybeesik).
a) Növekszik vagy csökken a szolenoid induktivitása a gyűrü behelyezése következtében?
b) Határozzuk meg az induktivitás megváltozásának nagyságát!
(Széchenyi Gábor)
Megoldás. a) A szupravezető fázisban lévő anyagoknak az az egyik különleges tulajdonságuk, hogy az elektromos ellenállásuk nulla. Ha egy szupravezető gyűrűben feszültség indukálódna, akkor az Ohm-törvény alapján végtelen nagy áramnak kellene benne folynia. Ennek a fizikai képtelenségnek a feloldása az, hogy a szupravezető gyűrűben nem indukálódhat feszültség, azaz a gyűrűn áthaladó mágneses fluxus értéke nem változhat meg.

[^1]
Az egyszerűség kedvéért tételezzük fel, hogy kezdetben, amikor a szolenoidban nulla az áramerősség, akkor a szupravezető gyűrüben sem folyik áram, így a rajta áthaladó mágneses fluxus értéke nulla. Ez az érték akkor sem változhat meg, ha a tekercsben áram folyik. Hogyan lehetséges ez, hiszen a szolenoid mágneses tere miatt meg kellene jelennie egy véges fluxusnak a gyűrűben. Úgy, hogy a gyűrüben olyan áram indukálódik, mely azonos nagyságú, de ellentétes előjelű fluxust hoz létre a gyűrűn. Ennek az áramnak a hatására a tekercsen áthaladó mágneses fluxus értéke és így a tekercs induktivitása is kisebb lesz, mint a szupravezető gyűrű nélküli esetben.
b) Vizsgáljuk az előbb leírt jelenséget kvantitatívan. Legyen a szolenoid árama $I$. A szolenoid közepén elhelyezett szupravezető gyűrűn áthaladó mágneses fluxus értéke

$$
\Phi _ { \text {gyürü } } = L \cdot i + M \cdot I ,
$$

ahol $L$ a gyűrű öninduktivitása, $i$ a gyűrű árama, $M$ a szolenoid és a gyűrű kölcsönös indukciós együtthatója, ami megadja, hogy az egyikben folyó egységnyi erősségű áram hatására mekkora mágneses fluxus jön létre a másikban. (Belátható, hogy $M$ nagysága a szereplők felcserélésekor nem változik, tehát mindegy, hogy a gyűrű árama által a szolenoidban keltett mágneses fluxust számítjuk ki, vagy a szolenoid árama által a gyűrüben keltett fluxust vizsgáljuk. Ez utóbbi nyilván könnyebb feladat.) $M$ értékét a feladatban megadott geometriára könnyen kiszámolhatjuk. Az $I$ erősségű árammal átjárt szolenoidban a homogén mágneses tér indukcióvektorának nagysága $\frac { \mu _ { 0 } N I } { \ell }$. Mivel a gyűrű síkja merőleges a mágneses tér irányára, a gyűrűn áthaladó mágneses fluxus $\frac { \mu _ { 0 } N I } { \ell } r ^ { 2 } \pi$. Innen kiolvashatjuk a kölcsönös indukciós együttható értékét:

$$
M = \frac { \mu _ { 0 } N } { \ell } r ^ { 2 } \pi .
$$

A gyűrú fluxusa nem változik meg, ha a szolenoid áramát nulláról $I$-re növeljük, így $\Phi _ { \text {gyürü } } = 0$, ahonnan a gyürűben folyó áram értéke

$$
i = - \frac { M I } { L } .
$$

A szolenoidon áthaladó mágneses fluxus értéke:

$$
\Phi _ { \text {szolenoid } } = L _ { 0 } \cdot I + M \cdot i ,
$$

ahol $L _ { 0 }$ a szolenoid öninduktivitása. Behelyettesítve a gyűrű áramát, a következőt kapjuk:

$$
\Phi _ { \text {szolenoid } } = \left( L _ { 0 } - \frac { M ^ { 2 } } { L } \right) I .
$$

Láthatjuk, hogy a szolenoidon áthaladó mágneses fluxus arányos a szolenoid áramával. Az arányossági tényező a szupravezető gyűrűt tartalmazó szolenoid induktivitása, mely

$$
\Delta L _ { 0 } \equiv \frac { M ^ { 2 } } { L } = \frac { \mu _ { 0 } ^ { 2 } N ^ { 2 } r ^ { 4 } \pi ^ { 2 } } { \ell ^ { 2 } L }
$$

értékkel kisebb, mint a gyűrű nélküli szolenoid öninduktivitása.


Ugyanezt az eredményt kaptuk volna, ha a számolás során nem tételezzük fel, hogy kezdetben a szupravezető gyűrűben nulla áram folyik. A leírt levezetés kis módosítással használható a szupravezető tetszőleges előélete esetén is. Ekkor $i$, $\Phi _ { \text {gyűrü } }$ és $\Phi _ { \text {szolenoid } }$ azt adja meg, hogy mennyivel változott meg a gyűrű árama, valamint a gyűrűn és a szolenoidon áthaladó mágneses fluxus értéke, miközben a tekercs áramát nulláról $I$-re növeltük.
