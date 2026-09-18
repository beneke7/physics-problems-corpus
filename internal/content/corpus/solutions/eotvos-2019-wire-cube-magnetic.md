---
id: eotvos-2019-wire-cube-magnetic
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2019-wire-cube-magnetic
solution_type: official
source_document: solution-document-eotvos-2019-s
source_pdf: cache/phoxiv/eotvos/2019_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2019_S.pdf."
---

2. Egy a oldalél¶ ko ka minden éle egyforma, R ellenállású huzalból készült. A ko ka homogén, kezdetben B0
induk iójú mágneses mez®be merül, amit τ id® alatt egyenletesen nullára sökkentünk. Mekkora a folyamat közben
keletkez® Joule-h®, ha a mágneses induk ióvektor a ko ka egy sú sban találkozó éleivel rendre α, β és γ hegyesszöget
zár be? (cos2
α + cos2
β + cos2
γ = 1.)
( Vigh Máté)
Megoldás. Képzeljük el egy pillanatra, hogy a mágneses térnek sak az x irányú, id®ben
Bx(t) = Bx,0(1 − t/τ)
szerint változó komponense létezik, a másik két komponens pedig zérus! Ekkor a szimmetria miatt a 3. ábra bal szélén
látható árameloszlás jönne létre. A ko ka 8 élében folyó, egyforma nagyságú Ix áramokat a Faraday-féle induk iótör-
vényb®l lehet meghatározni:
Uind = −
dΦ
dt
−→ 4RIx = a2 Bx,0
τ
,
ahol felhasználtuk, hogy a mágneses tér irányára mer®leges lapokon átmen®, kezdeti a2
Bx,0 nagyságú
uxus τ id®
alatt sökken nullára.
3. ábra
Hasonlóan kapjuk az élekben folyó áramer®sségeket azokra az elképzelt esetekre, melyekben a mágneses mez®nek
sak az y- vagy z-komponense van jelen (3. ábra középs® és jobb széls® rajza):
Ix =
a2
4R
Bx,0
τ
, Iy =
a2
4R
By,0
τ
, Iz =
a2
4R
Bz,0
τ
.
Ha a mágneses térnek mindhárom komponense jelen van, akkor a kialakuló feszültség- és árameloszlást a fenti
három eset szuperpozí iójaként kapjuk, ezt mutatja a 4. ábra.
A teljes Joule-h® teljesítménye az id®ben állandó er®sség¶ áramok miatt konstans, nagysága pedig az egyes élekben
disszipálódó RI2
teljesítmények összege:
P = 2R(Ix + Iy)
2
+ 2R(Ix − Iy)
2
+
+ 2R(Iy + Iz)
2
+ 2R(Iy − Iz)
2
+
+ 2R(Ix + Iz)
2
+ 2R(Ix − Iz)
2
.
4. ábra
Ha a zárójeleket felbontjuk, az (Ix + Iy)
2
+ (Ix − Iy)
2
= 2I2
x + 2I2
y összefüggés miatt a teljesítmény az alábbi alakra
egyszer¶södik:
P = 8R I2
x + I2
y + I2
z

.
A keletkez® Joule-h®t az el®bb kiszámított teljesítmény és a τ id® szorzataként számolhatjuk. Az Ix, Iy, Iz áramer®s-
ségekre korábban levezetett eredmények felhasználásával kapjuk a következ®t:
Q = Pτ =
a4
2R
B2
x,0 + B2
y,0 + B2
z,0
τ
=
a4
2R
B2
0
τ
.
Azt az érdekes eredményt kaptuk, hogy a Joule-h® független a mágneses tér irányától, supán annak nagyságától függ.
A feladatban megadott α, β és γ szögekre tehát nem is volt szükség!
