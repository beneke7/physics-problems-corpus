---
id: eotvos-2009-rolling-ball-sphere
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2009-rolling-ball-sphere
solution_type: official
source_document: solution-document-eotvos-2009-s
source_pdf: cache/phoxiv/eotvos/2009_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2009_S.pdf."
---

1. feladat. R sugarú, vékonyfalú plexigömb érdesített belsejében súszásmentesen gördülve mozoghat egy r sugarú,
tömör gumigolyó. A gömb a középpontján átmen®, vízszintes, rögzített tengely körül forgatható.
a) Mekkora periódusidej¶, kis amplitúdójú mozgást végezhet a golyó a gömbben, ha a gömb áll, vagy ha a gömb
egyenletesen forog? Hogyan fog mozogni a kezdetben nyugvó golyó abban a kísérletben, amikor a gömböt állandó, g/R-
hez képest ki siny szöggyorsulással egyre gyorsabban forgatjuk?
b) Ha a gömböt gyors forgásba hozzuk, majd hirtelen megállítjuk, a gömb alján addig egyhelyben forgó golyó igen
rövid id® múlva ismét tisztán gördül, és felgurulhat akár a gömb tetejéig is. Legalább mekkora szögsebességgel kell
forgatnunk ehhez a gömböt?
A golyó tömegközéppontja minden esetben függ®leges síkban mozog.
(Honyek Gyula)
Megoldás.a) A megoldást érdemes az egyenletesen gyorsuló gömb esetével kezdenünk (hiszen ez spe iális esetként
tartalmazza az egyenletesen forgó és az álló gömb esetét is).
Tegyük fel, hogy a gömb P pontja ϕ szöggel fordul el a kiindulási, legalsó helyzetb®l (1. ábra). Eközben a golyó
tiszta gördüléssel mozog, és a golyó C középpontja ϑ szöggel fordul el. A golyónak a gömb egyes felületi pontjaihoz
képesti összes elfordulása:
R(ϕ − ϑ)
r
.
A golyó teljes ψ elfordulását úgy kaphatjuk meg, ha a gömb felszínéhez képesti elforduláshoz hozzáadjuk még a golyó
C középpontjának elfordulását is:
(1) ψ =
R(ϕ − ϑ)
r
+ ϑ =
R
r
ϕ −
R − r
r
ϑ.
1. ábra
Jelöljük a plexigömb (állandó) szöggyorsulását β-val, a golyó tömegközéppontjának érint® irányú gyorsulás-összetev®jét
a-val, a golyó saját középpontja körüli szöggyorsulását pedig βgolyó-val. Mivel a szögelfordulások és a szöggyorsulá-
sok (egy bizonyos rövid id®tartam alatt) arányosak egymással, az (1) összefüggésb®l leolvasható a szöggyorsulásokra
vonatkozó megszorítás, tehát a mozgás kényszerfeltétele is:
(2) βgolyó =
R
r
β −
R − r
r
·
a
R − r
.
Megjegyzés: (2)-t átrendezve Rβ = a+rβgolyó alakra hozhatjuk, ami azt fejezi ki, hogy a gömb felszínének érint®leges gyor-
sulása a golyó tömegközépponti és kerületi gyorsulásának összege. Kényszerfeltételek felírásában gyakorlottak ezt a kap solatot
számolás nélkül, ránézésre is fel tudják írni.
A golyóra ható súrlódási er®t jelöljük S-sel, a golyó tömegközéppontjának szöggyorsulását pedig βt-vel! Ez utóbbi
nyilván kifejezhet® a tömegközéppont érint®leges gyorsulásával:
(3) βt =
a
R − r
.
A dinamikai egyenletek:
S − mg sinϑ = ma = m(R − r)βt, (4)
Sr =
2
5
mr2
βgolyó. (5)
A (2)(5) egyenletrendszerb®l kiküszöbölve az S, a és βgolyó mennyiségeket, a golyó tömegközéppontjának szögki-
térése és szöggyorsulása között a következ® összefüggést kapjuk:
(6) βt = −
5g
7(R − r)

sinϑ −
2Rβ
5g

.
Innen leolvashatjuk, hogy általában létezik egy olyan
ϑ0 = arcsin
2Rβ
5g
szög, amelynek megfelel® helyzetben a golyó tömegközéppontja egyensúlyban van.
Megjegyzés: Ha ebb®l a helyzetb®l indítjuk a golyót, akkor a tömegközéppontja nyugalomban marad, a tömegközéppont
körüli forgásának szögsebessége pedig (a súszásmentes gördülés feltételének megfelel®en)
ωgolyó =
R
r
· βt
módon növekszik. Ehhez a megfelel®en nagy súrlódáson kívül a szöggyorsulás se lehet akármilyen nagy.
Mivel a feladat szövegében az szerepel, hogy a β szöggyorsulás értéke ki si, ezért jogos feltennünk, hogy a golyó
tömegközéppontjának maximális elmozdulása is ki si, vagyis indokolt a sinϑ ≈ ϑ közelítés használata. A (6) mozgás-
egyenlet ebben a közelítésben a
βt = −
5g
7(R − r)

ϑ −
2Rβ
5g

= −Ω2
· (ϑ − ϑ0)
alakú, amelyb®l látszik, hogy a golyó tömegközéppontja jó közelítéssel harmonikus rezg®mozgást végez a ϑ0 szöghelyzet
körül, és a rezgésideje:
(7) T =
2π
Ω
= 2π
s
7(R − r)
5g
.
A rezg®mozgás szög-amplitúdója (mivel ϑ = 0 helyzetb®l indult a golyó) jó közelítéssel ϑ0. Meglep®, hogy a rezgésid®
akkor is a (7)-nek megfelel® érték, ha a gömb szöggyorsulása nulla, a gömb egyenletesen forog vagy áll, vagyis a)
mindhárom kérdésére ugyanaz a válasz.
b) Legyen a plexigömb kezdeti állandó szögsebessége ωgömb. A tiszta gördülés miatt a gumigolyó ugyanabba az
irányba forog, és a golyó szögsebessége:
ωgolyó =
R
r
ωgömb.
(Ezt pl. (1)-b®l olvashatjuk le, ϑ ≡ 0 helyettesítéssel.)
A plexigömb megállításának pillanatában változó nagyságú Fs(t) súrlódási er® kezd hatni a golyóra, ami valamek-
kora ∆t id® alatt tiszta gördülést eredményez. A súrlódási er® (melynek átlagértékét jelöljük F̄-sal) a golyó tömegkö-
zéppontjának valamekkora v0 sebességet ad, míg a golyó szögsebességét ω0 értékre sökkenti. A tiszta gördülési feltétel
miatt: v0 = rω0.
Írjuk fel a súrlódási er® sebességet, illetve szögsebességet változtató hatását kifejez® dinamikai egyenleteket:
F̄∆t = mv0 = mrω0,
rF̄∆t = Θ · ∆ω =
2
5
mr2
· (ωgolyó − ω0) =
2
5
mr2
·

R
r
ωgömb − ω0

.
A fenti egyenletekb®l F̄∆t-t kiküszöbölve a tisztán gördül® golyó adataira
(8) ω0 =
2R
7r
ωgömb és v0 =
2R
7
ωgömb
adódik. Mivel ez az állapot (a plexigömb érdes felülete miatt) a gömb megállítása után igen rövid id®vel bekövetkezik,
feltehetjük, hogy az újra tiszta gördüléssel mozgó golyó lényegében a gömb legalján marad, elmozdulása a meg súszás
közben elhanyagolható.
Megjegyzés: Ugyanerre az eredményre juthatunk akkor is, ha a gömb megállítását követ® rövid id®re a golyó alatti felületet
vízszintes, igen érdes síknak tekintjük. A rövid ideig ható súrlódási er®lökés megváltoztatja a golyó me hanikai energiáját és
lendületét, de nem változtatja meg a golyónak a gömbbel érintkez® pontjára vonatkoztatott perdületét:
2
5
mr2
· ωgolyó =
2
5
mr2
· ω0 + mv0 · r.
Ez a feltétel v0 = rω0 és rωgolyó = Rωgömb miatt (8)- al egyenérték¶.
A golyó további (tisztán gördül®) mozgása során felhasználhatjuk az energiamegmaradás törvényét, és felírjuk a
tömegközéppontra vonatkozó mozgásegyenletet a golyó pályájának bármelyik, például a legfels® pontjára is:
mg − K = m
v2
1
R − r
,
1
2
mv2
0 +
1
2
Θω2
0 = mg · 2(R − r) +
1
2
mv2
1 +
1
2
Θω2
1,
ahol v1 és ω1 a golyó sebessége, illetve szögsebessége a pálya legfels® pontjában (v1 = rω1), K pedig a golyó és a
plexigömb között fellép® nyomóer®t jelöli ebben a helyzetben.
A megfelel® mennyiségek behelyettesítése után a kényszerer®t így fejezhetjük ki a plexigömb kezdeti szögsebessé-
gével:
K =
4
49
mR2
ω2
gömb
R − r
−
27
7
mg.
A gumigolyó akkor juthat fel a legfels® pontba, ha a K kényszerer® még a pálya legfels® pontjában sem negatív
(K ≥ 0), ami a következ® feltételt adja a gömb kezdeti szögsebességére:
ωgömb ≥
3
2R
p
21(R − r)g.
