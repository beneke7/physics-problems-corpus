---
id: eotvos-2021-superconductor-ring
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2021-superconductor-ring
solution_type: official
source_document: solution-document-eotvos-2021-s
source_pdf: cache/phoxiv/eotvos/2021_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2021_S.pdf."
---

2. feladat. Egy henger alakú,   hosszúságú és R     sugarú, légmagos szolenoid
meneteinek száma N. A tekercs belsejébe egy r   R sugarú, a szolenoid szimmetria-
tengelyére merőleges sı́kú, L induktivitású szupravezető gyűrűt helyezünk (a gyűrű
és a szolenoid középpontja egybeesik).
a) Növekszik vagy csökken a szolenoid induktivitása a gyűrű behelyezése követ-
keztében?
b) Határozzuk meg az induktivitás megváltozásának nagyságát!
(Széchenyi Gábor)
Megoldás. a) A szupravezető fázisban lévő anyagoknak az az egyik különleges
tulajdonságuk, hogy az elektromos ellenállásuk nulla. Ha egy szupravezető gyűrű-
ben feszültség indukálódna, akkor az Ohm-törvény alapján végtelen nagy áramnak
kellene benne folynia. Ennek a ﬁzikai képtelenségnek a feloldása az, hogy a szup-
ravezető gyűrűben nem indukálódhat feszültség, azaz a gyűrűn áthaladó mágneses
ﬂuxus értéke nem változhat meg.
2
Lásd pl. a 333+ Furfangos Feladat Fizikából 194. feladatának megoldását.
Középiskolai Matematikai és Fizikai Lapok, 2022/2 107
i
i
2022.2.6 – 19:38 – 108. oldal – 44. lap KöMaL, 2022. február
i
i
i
i
i
i
Az egyszerűség kedvéért tételezzük fel, hogy kezdetben, amikor a szolenoidban
nulla az áramerősség, akkor a szupravezető gyűrűben sem folyik áram, ı́gy a rajta
áthaladó mágneses ﬂuxus értéke nulla. Ez az érték akkor sem változhat meg, ha
a tekercsben áram folyik. Hogyan lehetséges ez, hiszen a szolenoid mágneses tere
miatt meg kellene jelennie egy véges ﬂuxusnak a gyűrűben. Úgy, hogy a gyűrűben
olyan áram indukálódik, mely azonos nagyságú, de ellentétes előjelű ﬂuxust hoz
létre a gyűrűn. Ennek az áramnak a hatására a tekercsen áthaladó mágneses ﬂuxus
értéke és ı́gy a tekercs induktivitása is kisebb lesz, mint a szupravezető gyűrű nélküli
esetben.
b) Vizsgáljuk az előbb leı́rt jelenséget kvantitatı́van. Legyen a szolenoid ára-
ma I. A szolenoid közepén elhelyezett szupravezető gyűrűn áthaladó mágneses ﬂu-
xus értéke
Φgyűrű = L · i + M · I,
ahol L a gyűrű öninduktivitása, i a gyűrű árama, M a szolenoid és a gyűrű kölcsönös
indukciós együtthatója, ami megadja, hogy az egyikben folyó egységnyi erősségű
áram hatására mekkora mágneses ﬂuxus jön létre a másikban. (Belátható, hogy
M nagysága a szereplők felcserélésekor nem változik, tehát mindegy, hogy a gyűrű
árama által a szolenoidban keltett mágneses ﬂuxust számı́tjuk ki, vagy a szoleno-
id árama által a gyűrűben keltett ﬂuxust vizsgáljuk. Ez utóbbi nyilván könnyebb
feladat.) M értékét a feladatban megadott geometriára könnyen kiszámolhatjuk.
Az I erősségű árammal átjárt szolenoidban a homogén mágneses tér indukcióvek-
torának nagysága
μ0NI

. Mivel a gyűrű sı́kja merőleges a mágneses tér irányára,
a gyűrűn áthaladó mágneses ﬂuxus
μ0NI

r2
π. Innen kiolvashatjuk a kölcsönös in-
dukciós együttható értékét:
M =
μ0N

r2
π.
A gyűrű ﬂuxusa nem változik meg, ha a szolenoid áramát nulláról I-re növel-
jük, ı́gy Φgyűrű = 0, ahonnan a gyűrűben folyó áram értéke
i = −
MI
L
.
A szolenoidon áthaladó mágneses ﬂuxus értéke:
Φszolenoid = L0 · I + M · i,
ahol L0 a szolenoid öninduktivitása. Behelyettesı́tve a gyűrű áramát, a következőt
kapjuk:
Φszolenoid =

L0 −
M2
L

I.
Láthatjuk, hogy a szolenoidon áthaladó mágneses ﬂuxus arányos a szolenoid ára-
mával. Az arányossági tényező a szupravezető gyűrűt tartalmazó szolenoid induk-
tivitása, mely
ΔL0 ≡
M2
L
=
μ2
0N2
r4
π2
 2L
értékkel kisebb, mint a gyűrű nélküli szolenoid öninduktivitása.
108 Középiskolai Matematikai és Fizikai Lapok, 2022/2
i
i
2022.2.6 – 19:38 – 109. oldal – 45. lap KöMaL, 2022. február
i
i
i
i
i
i
Ugyanezt az eredményt kaptuk volna, ha a számolás során nem tételezzük
fel, hogy kezdetben a szupravezető gyűrűben nulla áram folyik. A leı́rt levezetés
kis módosı́tással használható a szupravezető tetszőleges előélete esetén is. Ekkor i,
Φgyűrű és Φszolenoid azt adja meg, hogy mennyivel változott meg a gyűrű árama,
valamint a gyűrűn és a szolenoidon áthaladó mágneses ﬂuxus értéke, miközben
a tekercs áramát nulláról I-re növeltük.
