---
id: eotvos-2015-solenoid-secondary-coil
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2015-solenoid-secondary-coil
solution_type: official
source_document: solution-document-eotvos-2015-s
source_pdf: cache/phoxiv/eotvos/2015_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2015_S.pdf."
---

3. feladat Holics László feladata nyomán
kitûzte: Gnädig Péter
Egy hosszú, vékony, egyenes tekercs (szolenoid)
hossza l = 1 m, átmérôje D1 = 2 cm, meneteinek
száma N1 = 2000, ohmos ellenállása elhanyagolható.
A tekercs kivezetéseire 100 V effektív feszültségû,
100 kHz frekvenciájú váltakozó feszültséget kap-
csolunk. A szolenoid mellett, annak közvetlen kö-
zelében, a tengelyére merôleges felezôsíkban egy
N2 = 200 menetszámú, lapos, D2 = 3 cm átmérôjû te-
kercs helyezkedik el.
Mekkora effektív feszültséget mutat a lapos te-
kercsre kapcsolt (ideálisnak tekinthetô) voltmérô?
32 FIZIKAI SZEMLE 2016/1
Egy tanárlegenda, Holics László és a díjazott diákok.
1. megoldás
A hosszú tekercsben folyó áram hatására a tekercs
belsejében valamekkora, idôben periodikusan változó
Φ(t) mágneses fluxus jön létre. A változó mágneses
fluxus a hosszú tekercs minden menetében feszültsé-
get indukál, ezek összege minden pillanatban meg-
egyezik a tekercsre kapcsolt váltakozó feszültséggel:
A lapos tekercsben nem folyik áram (a voltmérô
U1
(t) = N1
ΔΦ(t)
Δt
.
ellenállása nagyon nagy), de a hosszú tekercs szórt
mágneses tere feszültséget indukál benne. A feladat e
szórt tér meghatározása.
A tekercsen kívüli mágneses mezô (l > > D1 miatt) jó
közelítéssel olyan, mintha a tekercs egyik végén egy
pontszerû forrásból összesen Φ(t) mágneses fluxus in-
dulna ki gömbszimmetrikusan, a tekercs másik végén
pedig ugyanekkora fluxus nyelôdne el (vagyis mintha
egy −Φ(t) erôsségû forrás helyezkedne el ott).
A lapos tekercs a hosszú tekercs felezôsíkjában, a
hosszú tekercshez közel helyezkedik el, így ezen a
helyen mindkét forrás külön-külön
mágneses indukciót hoz létre (mert a Φ fluxus egy l/2
B(t) =
Φ(t)
4 π
⎛
⎜
⎝
⎞
⎟
⎠
l
2
2
sugarú gömb felületén oszlik el egyenletesen). A la-
pos tekercs közel van a hosszú tekercshez, így B kö-
zel merôleges a felületére. A lapos tekercsen áthaladó
teljes (mindkét forrásból származó) fluxus emiatt:
Ez az idôben változó fluxus a lapos tekercsben
Φ2
(t) = 2 B(t) π
⎛
⎜
⎝
⎞
⎟
⎠
D2
2
2
=
1
2
⎛
⎜
⎝
⎞
⎟
⎠
D2
l
2
Φ(t).
feszültséget indukál. (Felhasználtuk U1(t) korábban
U2
(t) = N2
ΔΦ2
(t)
Δt
=
1
2
N2
⎛
⎜
⎝
⎞
⎟
⎠
D2
l
2
ΔΦ(t)
Δt
=
=
1
2
N2
N1
⎛
⎜
⎝
⎞
⎟
⎠
D2
l
2
U1
(t)
felírt kifejezését.)
Az U1(t) és U2(t) feszültségek minden pillanatban
arányosak egymással, így az effektív értékek aránya is
ugyanekkora. Ebbôl a keresett feszültség:
U2
=
1
2
N2
N1
⎛
⎜
⎝
⎞
⎟
⎠
D2
l
2
U1
≈ 4,5 mV.
2. megoldás Fehér Zsombor megoldása alapján
Egy hosszú, egyenes tekercs (szolenoid) belsejé-
ben kialakuló mágneses indukció nagyságára jól is-
mert a következô összefüggés:
ahol N a tekercs menetszáma, I a tekercsen átfolyó
B∞
= μ0
N I
l
,
áramerôsség és l a tekercs hossza, valamint μ0 értéke
4π 10−7
Vs/Am.
Ez az összefüggés azonban véges hosszúságú te-
kercsre csak közelítôleg igaz! A véges hosszúságú
tekercs terét helyesen a következô kifejezés adja meg:
ahol α a tekercs zárókörének fél látószöge a tekercs
B = B∞
cosα = μ0
N I
l
cosα,
középpontjából nézve. Ez az összefüggés a Biot–Sa-
vart-törvény segítségével levezethetô (lásd a 2. meg-
jegyzésben).
Hosszú, vékony tekercsnél α < < 1, és így cosα ≈ 1,
tehát az ismert összefüggés általában jó közelítésként
használható. Ebben a feladatban azonban pont ez a
kicsi különbség lesz számunkra fontos!
Elôször fejezzük ki cosα-t a tekercs adataival (9.
9. ábra
r D = /2 1 D1
l/2
l
a
ábra, kihasználjuk, hogy α < < 1, sinα < < 1.):
cosα = 1 − sin2
α ≈ 1 −
1
2
sin2
α ≈ 1 −
1
2
⎛
⎜
⎝
⎞
⎟
⎠
D1
l
2
.
A FIZIKA TANÍTÁSA 33
Írjuk fel a gerjesztési törvényt egy olyan kis tégla-
10. ábra
B1
B2
Dl
lapra, amelynek két oldala a két tekercs tengelyén
fekszik (10. ábra):
ahol B1 és B2 a hosszú, illetve a rövid tekercsben lévô
B1
Δl B2
Δl = μ0
n I = μ0
N1
Δl
l
I = μ0
N1
I
l
Δl,
indukció nagysága, n pedig a kis hurok által körülfo-
gott menetek száma. (Felhasználtuk, hogy a tengelyre
merôleges indukciókomponens a szolenoid tengelye
tájékán elhanyagolható.)
A hosszú tekercsben a mágneses indukció
amit felhasználva
B1
= μ0
N1
I
l
cosα ≈ μ0
N1
I
l
⎡
⎢
⎢
⎣
⎤
⎥
⎥
⎦
1 −
1
2
⎛
⎜
⎝
⎞
⎟
⎠
D1
l
2
,
A tekercsekben indukált feszültség arányos a teker-
B2
= μ0
N1
I
l
− B1
=
1
2
⎛
⎜
⎝
⎞
⎟
⎠
D1
l
2
μ0
N1
I
l
≈
1
2
⎛
⎜
⎝
⎞
⎟
⎠
D1
l
2
B1
.
csek menetszámával és az egy meneten áthaladó flu-
xussal, amibôl a keresett feszültség:
az 1. megoldással megegyezôen.
U2
=
N2
B2
π
⎛
⎜
⎝
⎞
⎟
⎠
D2
2
2
N1
B1
π
⎛
⎜
⎝
⎞
⎟
⎠
D1
2
2
U1
=
1
2
N2
N1
⎛
⎜
⎝
⎞
⎟
⎠
D2
l
2
U1
,
Megjegyzések
1. A megoldásban nem használtuk fel a megadott
adatok közül a hosszú tekercs D1 átmérôje, valamint
a rákapcsolt feszültség frekvenciájának számértékét.
Ugyanakkor mindkét adat nagyságrendje fontos a
megoldáshoz! Felhasználtuk, hogy l > > D1, mert
emiatt közelíthettük a külsô teret két pontforrás te-
rével. A hosszú tekercs induktív ellenállása és így a
tekercsen folyó áram nagysága függ a frekvenciától.
Ha a frekvencia sokkal kisebb (például 50 Hz) lenne,
akkor a tekercsen a rákapcsolt 100 V feszültség hatá-
sára olyan nagy áram indulna meg, amely a tekercset
azonnal szétolvasztaná.
2. A véges hosszúságú tekercs terének levezetése.
Egy r sugarú körvezetôben folyó dI áram által keltett
mágneses indukciót a kör síkjára merôleges szimmet-
riatengely mentén, a kör síkjától h távolságra köny-
nyen felírhatjuk a Biot–Savart-törvény segítségével:
B(h) =
μ0
dI
4 π
2 r π
r2
h2
r
r2
h2
=
μ0
r2
dI
2 r2
h2
3
2
.
Rakjuk össze az l hosszúságú N menetes tekercset
dh vastagságú kis köráramokból. Ekkor egy ilyen kis
körben
áram folyik, ami a tengelye mentén, a síkjától h távol-
dI =
N I
l
dh
ságra
indukciót hoz létre.
dB =
μ0
N I r2
2 l r2
h2
3
2
dh
A tekercs középpontjában lévô indukciót úgy kap-
juk meg, hogy ezeket a kis indukciójárulékokat össze-
gezzük h = −l/2-tôl h = l/2-ig:
ahol α a tekercs zárókörének fél nyílásszöge a tekercs
B =
⌡
⌠
l
2
−
l
2
dB =
μ0
N I r2
2 l ⌡
⌠
l
2
−
l
2
dh
r2
h2
3
2
=
=
μ0
N I
l
l
2
⎛
⎜
⎝
⎞
⎟
⎠
l
2
2
r2
=
μ0
N I
l
cosα,
középpontjából nézve (lásd a 9. ábrát).
Ezután került sor az eredményhirdetésre. A díjakat
Patkós András, az Eötvös Loránd Fizikai Társulat el-
nöke adta át.
Egyetlen versenyzô sem oldotta meg mindhárom
feladatot, ezért a versenybizottság 2015-ben nem adott
ki elsô díjat.
Egy feladat helyes és egy feladat lényegében helyes
megoldásáért második díjat nyert Fehér Zsombor, a
Budapesti Fazekas Mihály Gyakorló Általános Iskola
és Gimnázium érettségizett tanulója, Horváth Gábor
tanítványa – jelenleg az ELTE matematikus hallgatója;
Holczer András, a Pécsi Janus Pannonius Gimnázium
érettségizett tanulója, Dombi Anna és Kotek László
tanítványa – jelenleg a BME villamosmérnök hallgató-
ja; Juhász Dániel, a Szegedi Radnóti Miklós Kísérleti
Gimnázium 12. osztályos tanulója, Csányi Sándor
tanítványa; Sal Kristóf, a Budapesti Fazekas Mihály
Gyakorló Általános Iskola és Gimnázium 12. osztályos
tanulója, Kotek László és Horváth Gábor tanítványa,
valamint Tompa Tamás Lajos, a miskolci Földes Fe-
renc Gimnázium 11. osztályos tanulója, Zámborszky
Ferenc és Kovács Benedek tanítványa.
Egy feladat helyes megoldásáért és a hozzáfûzött
diszkusszióért harmadik díjat nyert Balogh Menyhért,
34 FIZIKAI SZEMLE 2016/1
a budapesti Baár-Madas Református Gimnázium 12.
A 2015. évi Eötvös-versenyen legeredményesebben szereplô diákok. (Fotók: Tichy-Rács Ádám)
osztályos tanulója, Horváth Norbert tanítványa.
Egy feladat lényegében helyes megoldásáért dicsé-
retben részesült Bege Áron, a Budapesti Fazekas Mi-
hály Gyakorló Általános Iskola és Gimnázium 11. osz-
tályos tanulója, Horváth Gábor és Szokolai Tibor ta-
nítványa; Bencsik Bálint, az Óbudai Árpád Gimná-
zium 12. osztályos tanulója, Nagy Attila tanítványa;
Bugár Dávid, a komáromi Selye János Gimnázium
érettségizett tanulója, Szabó Endre tanítványa – jelen-
leg az ELTE fizikus hallgatója; Forrai Botond, a buda-
pesti Baár-Madas Református Gimnázium 12. osztá-
lyos tanulója, Horváth Norbert tanítványa; Frey Ba-
lázs, a Váci Szakképzési Centrum Boronkay György
Mûszaki Szakközépiskola és Gimnázium 12. osztályos
tanulója, Tóth Eszter tanítványa; Gémes Antal, a hód-
mezôvásárhelyi Bethlen Gá-
bor Református Gimnázium
11. osztályos tanulója, Laka-
tos-Tóth István és Nagy Tibor
tanítványa; Kasza Bence, a
Budai Ciszterci Szent Imre
Gimnázium 12. osztályos ta-
nulója, Ábrám László és Sar-
kadi Tamás tanítványa; Ko-
vács Péter Tamás, a Zalaeger-
szegi Zrínyi Miklós Gimná-
zium 11. osztályos tanulója,
Juhász Tibor és Pálovics Ró-
bert tanítványa; Körmöczi Dá-
vid, az Egri Szilágyi Erzsébet
Gimnázium és Kollégium 12.
osztályos tanulója, Szabó Mik-
lós tanítványa; Olosz Balázs, a
PTE Babits Mihály Gyakorló
Gimnázium érettségizett tanu-
lója, Koncz Károly tanítványa
– jelenleg a BME villamosmér-
nök hallgatója; Szamosfalvi
Benjámin Balázs, a Miskolci Herman Ottó Gimná-
zium 12. osztályos tanulója, Dudás Imre tanítványa;
Szick Dániel, a Budapesti Fazekas Mihály Gyakorló
Általános Iskola és Gimnázium 12. osztályos tanulója,
Horváth Gábor tanítványa; Tomcsányi Gergely, a Váci
Szakképzési Centrum Boronkay György Mûszaki Szak-
középiskola és Gimnázium 12. osztályos tanulója, Tóth
Eszter tanítványa, valamint Török Péter, a Budapesti
Fazekas Mihály Gyakorló Általános Iskola és Gimná-
zium 11. osztályos tanulója, Horváth Gábor és Szokolai
Tibor tanítványa.
A MOL támogatásával a második díjjal nettó 25
ezer, a harmadik díjjal nettó 20 ezer forint pénzjuta-
lom járt, a dicséretes versenyzôk, valamint a díjazot-
tak tanárai pedig a versenyt támogató Typotex Kiadó
könyveit kapták.
HÍREK – ESEMÉNYEK
OBAMA ELNÖKSÉGE
A minden betût észrevenni kész olvasó helycserét
talál a tartalomjegyzék mellett. Füstöss László szer-
kesztô visszavonult a szerkesztôbizottságba, helyét
idén januártól Lendvai János tölti be. A mûszaki szer-
kesztônek, mint 1992 óta annyiszor, nyolc éve is sze-
rencséje volt. Megszerettette vele e lap készítését a
Marx György – Turi Zsuzsa páros, feledhetô inter-
mezzo után Németh Judittal és – rövid ideig Szabados
Lászlóval, majd – Tóth Kálmánnal újra felüdülés lett a
szerkesztés, majd a nyolc éve történt váltást követôen
a Szatmáry Zoltán – Füstöss László párral teljes har-
móniában tudott dolgozni (a nem említetteket borítsa
jótékony homály).
Füstöss Laci híre már messze megelôzte ôt, jó tollú
szerzôként élvezetes perceket nyújtottak írásai, bele-
csempészett egyéni szófordulatai, ki-kikacsintó meg-
jegyzései. Nem okozott csalódást (ne feledjük, Tóth
Kálmán magasra rakta a mércét), olyan hévvel és a
lap iránti szeretettel látott munkához, amely azonnal a
régóta együttdolgozás képzetét hozta magával. Lelke-
HÍIREK – ESEMÉNYEK 35
