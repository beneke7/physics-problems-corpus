---
id: eotvos-2014-carpet-unrolling
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2014-carpet-unrolling
solution_type: official
source_document: solution-document-eotvos-2014-s
source_pdf: cache/phoxiv/eotvos/2014_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2014_S.pdf."
---

1. feladat Kitûzte: Vigh Máté
Egy M tömegû, L hosszúságú, hajlékony futószônye-
get szorosan felgöngyöltünk egy R sugarú hengerré
(1. ábra). Ha a felgöngyölt szônyeget elengedjük, az
magától kitekeredik. (A gördülési ellenállás elhanya-
golható.)
1. ábra
M
F
2R
a) Milyen erôhatással magyarázható a jelenség?
b) Mekkora vízszintes erôvel akadályozható meg a
szônyeg kitekeredése?
Megoldás
a) A guriga tömegközéppontja nem esik az alátá-
masztási pont fölé, az így fellépô forgatónyomaték
görgeti ki a szônyeget.
b) A guriga egyensúlyát biztosító vízszintes F erôt a
virtuális munka elvébôl határozhatjuk meg. Ha a nem
teljesen felgöngyölt gurigát kicsiny Δx távolsággal
feljebb görgetjük (2. ábra), az F(x) erô által végzett
munka a szônyeg helyzeti energiájának (kicsiny)
megváltozását biztosítja:
A szônyeg helyzeti energiája
F(x) Δx = ΔEh
.
amely a feltekeredés közben két okból is növekszik:
Eh
(x) = m(x) g r(x),
egyrészt tömegközéppontja magasabbra kerül, másrészt
feltekerés közben a szônyeg „hízik” is. (A földön fekvô
rész helyzeti energiája 0, azzal nem kell számolnunk.)
A helyzeti energia kicsiny megváltozása eszerint
A szônyeg x hosszúságú darabjának feltekerésekor
ΔEh
= m g Δr Δm g r.
kialakuló szônyegguriga m tömege egyenesen ará-
nyos a felgöngyölt rész hosszával, így
hiszen x = L esetén a
Δm =
m
x
Δx és
m =
M
L
x,
tömeg éppen M.
A guriga keresztmet-
szetének területe is ará-
nyos x-szel, vagyis a gu-
riga sugarára fennáll:
Ebbôl kifejezhetjükΔr-t is
r2
=
R2
L
x.
Δx segítségével (felhasz-
nálva, hogy Δr kicsi):
24 FIZIKAI SZEMLE 2015/1
Corradi Gábor Somfai Ellák
Szôlôssi Irén és Virágh Anna
Mindezt behelyettesítve ΔEh kifejezésébe:
R2
L
Δx = (r Δr)2
− r2
≈ 2 r Δr,
Δr =
1
2
r
x
Δx.
Ebbôl pedig az x darabon feltekert guriga megtartásá-
ΔEh
=
3
2
m g r
x
Δx.
hoz szükséges erô:
amelybôl a keresett F erô x = L helyettesítéssel
F(x) =
3
2
m g r
x
=
3
2
M g R
L
x
L
,
Megjegyzések
F =
3
2
R
L
M g.
1. Néhány versenyzô próbálkozott a virtuális mun-
ka elvével, de a helyzeti energia megváltozásában el-
felejtkeztek az egyik tagról. A fenti megoldásban az
erôt a feladat kérdésénél kicsit általánosabban, x
függvényében egy tetszôleges helyzetben is megad-
tuk, ez lehetôséget ad a megoldás ellenôrzésére. Az
erô elmozdulás szerinti integrálásával meghatározzuk
a feltekeréshez szükséges teljes munkát:
ez valóban megegyezik a teljesen feltekert szônyeg
⌡
⌠
L
0
F(x) dx =
⌡
⌠
L
0
3
2
M g R
L
x
L
dx = M g R,
helyzeti energiájával.
2. A versenyzôk többsége statikai megoldással pró-
bálkozott. A feladat így is megoldható, azonban még
könnyebb tévedni. A statikai megoldásban a forgató-
nyomatékok egyensúlyát írjuk fel a szônyeg alátá-
masztási pontjára:
ahol xtkp a guriga tömegközéppontjának távolsága az
F R = M g xtkp
,
alátámasztáson át húzott függôleges egyenestôl. A
feladat ennek meghatározása.
A tömegközéppont két okból sem esik az alátá-
masztási pont fölé: egyrészt a guriga spirális alakja
miatt a guriga érintôje nem merôleges a spirál közép-
pontjából az érintési ponthoz húzott sugárra, másrészt
a guriga tömegközéppontja nem a spirál középpontjá-
ba esik. (Mindkét okra rájöttek versenyzôk, de senki
se gondolt mindkettôre, így helyes megoldás nem
született.)
A guriga „ferdesége”, és így a spirál középpont-
jának helye könnyen meghatározható a menetemel-
kedésbôl. A tömegközéppont ebbôl származó elmoz-
dulása
A guriga tömegközéppontjának a spirál középpont-
x1
=
1
2
R2
L
.
jához viszonyított helyét sokféleképp meg lehet hatá-
rozni, erre sok helyes megoldás érkezett az integrálás-
tól az ügyes trükkökig. Egy lehetôség például az,
hogy a gurigát gondolatban kiegészítjük egy további
fél menettel, amelynek tömegét és tömegközéppont-
jának helyét is ismerjük: ekkor a szimmetria (és a szô-
nyeg kis vastagsága) miatt a tömegközéppont ugyan-
olyan távolra kerül a spirál középpontjától, csak ép-
pen a másik irányba – és ebbôl a keresett távolság
már könnyen kiszámolható:
A két részeredményt összeadva
x2
=
R2
L
.
amibôl a keresett erôre valóban helyes eredményt
xtkp
= x1
x2
=
3
2
R2
L
,
kapunk.
3. Néhány versenyzô a szônyeg rugalmas tulajdon-
ságaival próbálta magyarázni a jelenséget. A feladat
szövegében viszont az áll, hogy a szônyeg hajlékony,
ami arra utal, hogy ezt a hatást nem kell figyelembe
venni. (Nem is voltak megadva olyan adatok, amikre
ez esetben szükség lenne.)
A FIZIKA TANÍTÁSA 25
Vankó Péter és Kürti Jenô
3. ábra
I
I
P
R
