---
id: eotvos-2024-rotating-tube
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2024-rotating-tube
solution_type: official
source_document: solution-document-eotvos-2024-s
source_pdf: cache/phoxiv/eotvos/2024_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2024_S.pdf."
---

2. A súlytalanság állapotában egy R sugarú, L≫R hosszúságú és d≪R falvas-
tagságú alumíniumcső a szimmetriatengelyére merőleges, homogén, B indukciójú
mágneses mezőben helyezkedik el. A csövet tengelye körül ω0 szögsebességgel meg-
forgatjuk, majd magára hagyjuk.
a) Vázoljuk fel a cső kiterített palástjáról készült rajzon a csőben kialakuló
áramvonalakat!
b) Írjuk le a cső mozgását az idő függvényében!
(Vigh Máté)
Megoldás. a) Ha a cső a mágneses térre merőleges irányban mozogna (de nem
forogna), akkor a Lorentz-erő a töltéseket szétválasztaná, és az így kialakuló elekt-
rosztatikus tér kiegyenlítené a Lorentz-erőt, egyensúlyi állapot alakulna ki, és áram
nem folyna (4. ábra).
Esetünkben viszont a cső palástjának két átellenes része ellenkező irányban
mozog, így a Lorentz-erő is ellentétes irányú lesz, aminek következtében a cső
végeinél záródhatnak az áramvonalak, és így nem lesz jelentős töltésfelhalmozódás,
hanem az 5. ábrán látható módon zárt áramkör jöhet létre.
44 Középiskolai Matematikai és Fizikai Lapok, 2025/1
i
i
2025.1.4 – 21:12 – 45. oldal – 45. lap KöMaL, 2025. január
i
i
i
i
i
i
R
L
B
v
r
v B E
4. ábra
B
R
( r) B
L
r
( r) B
5. ábra
Az L ≫ R feltétel miatt a cső végeitől eltekintve az elektrosztatikus tér elha-
nyagolható, és így a cső falában
j = σ(ω ×r)×B,
j(α) = σωBRcosα
áramsűrűség alakul ki, ahol ω a cső pillanatnyi szögsebessége, σ az alumínium fajla-
gos vezetőképessége (a fajlagos ellenállás reciproka), 0 ⩽ α < 2π pedig a tengelytől
a palást adott pontjához mutató r sugár és a mágneses indukció B vektora által
bezárt szög. A cső végein felhalmozódik valamennyi töltés: ezek „térítik el” a cső
végén az áramvonalakat. A kialakuló áramvonalakat a 6. ábra mutatja.
2
R
L
2
0
6. ábra
b) I. módszer. Az L ≫ R feltétel miatt a cső végével, mint „széleffektussal”
nem foglalkozunk, csak a csőben a cső tengelyével párhuzamosan folyó áramokkal.
Középiskolai Matematikai és Fizikai Lapok, 2025/1 45
i
i
2025.1.4 – 21:12 – 46. oldal – 46. lap KöMaL, 2025. január
i
i
i
i
i
i
Ezekre a mágneses tér erőt fejt ki, egy dV kicsiny térfogatra ható erő:
dF = j ×BdV.
Az erők és a tengelyre merőleges forgatónyomaték-komponensek vektori eredője
a szimmetria miatt nulla, így a cső tömegközéppontja nem mozdul el, és tengelye
nem fordul el. Ugyanakkor a tengellyel párhuzamos forgatónyomaték-komponensek
eredője nem nulla, a cső forgása így lassulni fog. (Az áramok miatt hő disszipálódik,
így a cső energiája biztosan csökkenni fog. Ezt mondja ki a Lenz-törvény is.) A
cső kicsiny dRdα keresztmetszetű, L hosszúságú, dV = LdRdα térfogatú keskeny
csíkjára ható tengellyel párhuzamos forgatónyomaték-komponens:
dM = r×dF = r×(j ×B)LdRdα,
dM = −RjBcosα·LdRdα = −σωB2
LdR3
cos2
αdα.
(A negatív előjel azt fejezi ki, hogy a forgatónyomaték-komponens a szögsebesség-
vektorral ellentétes irányú.) Ennek összegzése a teljes csőre
M = −σωB2
LdR3
2π Z
0
cos2
αdα = −σωB2
LdR3
π.
(Ezt az eredményt a szinuszos jel effektív értéke alapján is ismerhetjük: az átlagos
érték 1
2 és 1
2 ·2π = π, vagy a cos2
α = 1
2(1−cos2α) átalakítás után szemléletesen is
láthatjuk.) A vékony falú cső tehetetlenségi nyomatéka
Θ = mR2
= 2πϱLdR3
,
ahol ϱ az alumínium sűrűsége. A cső tengely körüli forgását leíró mozgásegyenlet:
dω
dt
=
M
Θ
= −
σωB2
LdR3
π
2πϱLdR3
= −
σB2
2ϱ
ω.
A differenciálegyenlet ugyanolyan alakú, mint a jól ismert radioaktív bomlási tör-
vény, így megoldása:
ω(t) = ω0e− t
τ ,
ahol a τ időállandó:
τ =
2ϱ
σB2
.
A cső tehát exponenciálisan lassulva fog forogni.
Megjegyzés. Az időállandó nem függ a cső méreteitől (mindössze annyit használtunk
fel, hogy d ≪ R ≪ L), csak a cső anyagának sűrűségétől és fajlagos vezetőképességétől,
valamint a mágneses mező erősségétől. Alumínium esetében 1 mT mágneses indukció
esetén az időállandóra két és fél percet kapunk.
46 Középiskolai Matematikai és Fizikai Lapok, 2025/1
i
i
2025.1.4 – 21:12 – 47. oldal – 47. lap KöMaL, 2025. január
i
i
i
i
i
i
II. módszer. A cső egészében időegységenként
P =
1
σ
j2
effV
energia disszipálódik, ahol (a koszinuszos helyfüggés miatt)
jeff =
1
√
2
jmax =
1
√
2
σωBR,
és V = 2πLdR a cső térfogata. Ezt a disszipálódó energiát a cső mozgási energiá-
jának csökkenése fedezi:
P = −
dEm
dt
,
ahol
Em =
1
2
Θω2
=
1
2
ϱV R2
ω2
.
Behelyettesítés és a deriválás elvégzése után:
1
2
σω2
B2
R2
V = −
1
2
ϱV R2
·
d ω2

dt
= −
1
2
ϱV R2
·2ω
dω
dt
,
egyszerűsítve és rendezve:
dω
dt
= −
σB2
2ϱ
ω,
az előző módszer eredményével összhangban.
