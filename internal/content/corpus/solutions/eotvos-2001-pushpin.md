---
id: eotvos-2001-pushpin
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2001-pushpin
solution_type: official
source_document: solution-document-eotvos-2001-s
source_pdf: cache/phoxiv/eotvos/2001_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2001_S.pdf."
---

3. Egy eld®lt rajzszög fekszik az enyhén lejt®s asztallapon. Ha oldalról kissé meglökjük, ide-oda billeg, de nem súszik meg.
a) Mekkora stabil egyensúlyi helyzetben a fej, illetve a t¶ által kifejtett er®k asztalra mer®leges komponenseinek aránya!
b) Mekkora frekven iával billeg (kis kitérések esetén) a rajzszög az egyensúlyi helyzete körül?
Az egyszer¶ség kedvéért tételezzük fel, hogy a rajzszög feje homogén körlap, t¶jének tömege a fejhez képest elhanyagolható, és
a t¶ hegye a billegés során nem mozdul el az asztallapon.
Adatok: A körlap sugara R = 6 mm, a t¶ hossza l = 8 mm, az asztal lejtése α = 5◦
.
(Radnai Gyula)
Az a) kérdés sztatikai jelleg¶: egy merev test egyensúlyát kell tanulmányoznunk. Szeren sére az összes fellép® er®
egyetlen síkban (az ábra síkjában) van, ezért könnyen felrajzolható (1. ábra).
1. ábra
Jelölések: N1 illetve N2 az asztalra mer®leges nyomóer®k, S′
1 illetve S′
2 a rajzszögre ható tapadási súrlódási er®k,
mg (a rajzszög tömegközéppontjában ható) nehézségi er®, k1, k2 és k3 a tömegközéppont távolsága a nyomóer®k
hatásvonalától, valamint az asztal síkjától.
A rajzszög fejét képez® körlap sugara (R), a t¶ hossza (l) és az asztallap lejtése (α) adott, ezek függvényében kell
az N1/N2 arányt meghatároznunk. Írjuk fel a merev test egyensúlyának feltételeit!
1.
X− →
F = 0. Ezt alkalmazva például az asztallappal párhuzamos összetev®kre:
S′
1 + S′
2 = mgsinα;
az asztallapra mer®leges összetev®kre pedig
N1 + N2 = mgcosα.
A fenti két egyenletb®l:
S′
1 + S′
2 = (N1 + N2)tgα.
2.
X
M = 0. Ez a feltétel jelen esetben sak egy összefüggést ad:
N1k1 = N2k2 + (S′
1 + S′
2)k3.
Behelyettesítve S′
1 + S′
2 el®bb kiszámított értékét:
N1k1 = N2k2 + (N1 + N2)tgα · k3,
ahonnan
N1
N2
=
k2
k3
+ tgα
k1
k3
− tgα
=
l
R
+ tgα
R
l
− tgα
=
4
3
+ tg5◦
3
4
− tg5◦
≈ 2,14.
(Természetesen ugyanilyen jó, ha valaki N2/N1 ≈ 0,47-et határozza meg, illetve bármilyen más helyes úton jut a jó
végeredmények valamelyikéhez.)
A b) kérdés dinamikai jelleg¶, s azért nehezebb, mert nem lehet síkbeli problémára visszavezetni. A rajzszög billegése
nem síkmozgás, nem 
zikai inga.
Készítsünk térbeli ábrát a ferde asztallapon kissé (balra) kilendített rajzszögr®l (2. ábra)!
Jelölések: K a tömegközéppont; S′
1 és S′
2 most is a t¶n átmen® függ®leges síkba esnek; S1 a körlapra érint® irányban
ható súrlódási er®; S2 a t¶ hegyére ható súrlódási er®nek a t¶re mer®leges összetev®je; ϕ a kitérés szöge (a rajzszög
t¶jének asztalra mer®leges vetülete és a lejtvonal által bezárt szög).
2. ábra 3. ábra
A súrlódási er®k mind egy síkba (az asztallap síkjába) esnek, nagyságuk változik a billegés során. A tömegközéppont
pályája viszonylag egyszer¶, egy körív, amelynek síkja párhuzamos az asztallap síkjával. E körív r sugara és a körív
síkjának az asztallaptól mért h távolsága kiszámítható (3. ábra):
r = lcosγ = l
l
√
R2 + l2
= 6,4 mm,
h = lsinγ = l
R
√
R2 + l2
= 4,8 mm.
(Most még nem tudjuk, hogy szükség lesz-e ezekre az adatokra, de feladatmegoldás közben mindig megnyugtató, ha
már valamit ki tudunk számítani. Önbizalmat ad a továbbiakhoz.)
4. ábra
Vegyünk fel egy ábrát a tömegközéppont pályájának (az asztallappal párhuzamos) síkjában (4. ábra)! Itt, a pálya
síkjában a K tömegközéppont mozgását a nehézségi er®nek ebbe a síkba es® mgsinα összetev®je vezérli; ezt kell
felbontanunk a pálya érint®je irányába mutató, illetve sugár irányú komponensekre.
Ha a kitérés ϕ szöge ki si, a fonálingához hasonlóan itt is feltételezhetjük, hogy a sugár irányú gyorsulás elhanya-
golható: acp ≈ 0. Így a K tömegközéppont gyorsulása jó közelítéssel érint® irányú, s az r sugár β szöggyorsulásával
egyszer¶en kifejezhet®: atkp = rβ.
Most már nekiláthatunk a dinamikai feladat alapvet® összefüggései, a mozgásegyenletek felírásához. Három moz-
gásegyenletünk lesz:
1. Gyorsul a rajzszög tömegközéppontja: X
F = matkp,
vagyis
(1) S1 + S2 − mgsinα · sinϕ = mrβ.
2. Gyorsulva forog a rajzszög feje a t¶ körül: X
M′
= Θ′
· β′
,
vagyis
−S1R =
1
2
mR2
· β′
, ahol β′
=
r
R
β,
(2) −S1R =
1
2
mR2
·
r
R
β.
3. Gyorsulva elfordul a rajzszög fejének síkja a fej középpontján, valamint a fej és az asztal érintkezési pontján áthaladó
tengely körül: X
M′′
= Θ′′
· β′′
,
vagyis
−S2l =
1
4
mR2
· β′′
, ahol β′′
=
r
l
β,
(3) −S2l =
1
4
mR2
·
r
l
β.
A megoldás további része már sak egyenletrendezés. Kifejezve S1-et (2)-b®l és S2-t (3)-ból, behelyettesíthetjük
ezeket (1)-be:
−
1
2
mrβ −
1
4
m
R2
l2
rβ − mgsinα · sinϕ = mrβ,
ahonnan átrendezések után
β = −
gsinα
r 3
2 + R2
4l2
 sinϕ.
Ki siny ϕ szögekre sinϕ ≈ ϕ, tehát itt egy
β = −ω2
ϕ
alakú összefüggést kaptunk, ami ω körfrekven iájú harmonikus rezgésnek felel meg.
A rajzszög (kis kitérés¶) billegésének körfrekven iája tehát
ω =
s
gsinα
r 3
2 + R2
4l2
,
és ha ebbe behelyettesítjük r = l2
/
p
R2 + l2-et, akkor
ω =
s
g sinα
√
R2 + l2
3
2l2 + 1
4R2
.
A megadott számadatokkal a körfrekven ia 9,02 s−1
, a frekven ia 1,44 s−1
, a periódusid® pedig T ≈ 0,7 s lesz.
Megjegyzések: 1. A b) kérdésre sak egyetlen teljes megoldás érkezett
2
, ez sem dinamikai, hanem energetikai meggondolásokkal
operált, ami persze ugyanolyan helyes. Rajta kívül még négy olyan versenyz® volt, aki a körlap síkjának elfordulását elhanyagolta
ugyan, de egyébként hibátlan megoldást adott. Érdemes azt is megemlíteni, hogy az a) kérdésre 82 versenyz® (az indulók több,
mint 40 százaléka) adott elvileg és numerikusan is helyes megoldást.
2. A merev testek forgómozgásának általánosan érvényes egyenlete az
− →
N = Θ− → ω perdületvektor id®beli változási sebességével
fogalmazható meg:
X− →
M =
d
− →
N
dt
.
A perdületvektor változása egyrészt a szögsebesség változásából adódik, másrészt abból, hogy a merev test egésze elfordul, emiatt
a tehetetlenségi nyomatéka az iner iarendszerb®l nézve id®ben változik. Ez utóbbiból származó perdületváltozás a szögsebesség
négyzetével arányos, jelen feladatnál tehát kis kitérések esetén 
gyelmen kívül hagyható. A forgómozgás dinamikai egyenlete
ebben a közelítésben valóban
X− →
M = Θ
− →
β alakba írható, s ennek a vektoregyenletnek különböz® komponenseit tartalmazza
(2) és (3).
3. Az
− →
N = Θ− → ω összefüggésben szerepl® Θ tehetetlenségi nyomaték nem skalár, hanem irányfügg®, ún. tenzor mennyiség.
A merev testeknek sak bizonyos kitüntetett tengelyei (az ún. f®tengelyei) körüli forgáskor igaz az, hogy a perdületvektor és
a szögsebességvektor párhuzamos egymással. A homogén korong egyik f®tengelye a síkjára mer®leges szimmetriatengelye (erre
vonatkoztatott Θ′
tehetetlenségi nyomaték az ismert mR2
/2). A korong átmér®i is f®tengelyek, a hozzájuk tartozó Θ′′
szim-
metriamegfontolások és a tehetetlenségi nyomatékot de
niáló összefüggés szerint Θ′
/2. Ezek az eredmények integrálszámítással
is megkaphatók.
4. A szöggyorsulások közötti spe iális β′
= rβ/R, illetve β′′
= rβ/l összefüggések a súszásmentes gördülés feltételéb®l és
térbeli geometriai megfontolásokból kaphatók meg.
A verseny végeredménye
Összevont III. díjat (s vele 77 ezer Ft pénzjutalmat) kaptak a következ®k: Nagy Ádám, a BME mérnök-
zikus
hallgatója, aki a budapesti Szent István Gimnáziumban érettségizett mint Moór Ágnes tanítványa; Pápai Tivadar,
a bar si Dráva Völgye Középiskola 12. évf. tanulója, Horváth Feren tanítványa; Pozsgay Balázs, az ELTE 
zikus
2Pozsgay Balázs (Budapest) dolgozata
hallgatója, aki a pé si Magyar-német Nyelv¶ Iskolaközpontban érettségizett és Kotek László tanítványa volt; Siroki
László, a debre eni Fazekas Mihály Gimnázium 12. évf. tanulója, Simon Gyula és Szegedi Ervin tanítványa; Tóth
Sándor, a songrádi Batsányi János Gimnázium 11. évf. tanulója, Szu sán András és Hilbert Margit tanítványa;
Varjú Péter, a SZTE matematikus hallgatója, aki a szegedi Radnóti Miklós Gimnáziumban érettségizett mint Dudás
Zoltánné tanítványa.
III. díjat (s vele 44 ezer Ft pénzjutalmat) kaptak a következ®k: Bartos Imre, az ELTE 
zikus hallgatója, aki a
budapesti Móri z Zsigmond Gimnáziumban érettségizett mint Részeg Anna tanítványa; Borbély Sándor, a kolozsvári
Babe³Bolyai Tudományegyetem 
zika szakos hallgatója, aki a marosvásárhelyi Bolyai Farkas Elméleti Lí eumban
érettségizett mint László József tanítványa; Nagy Márton, a budapesti Piarista Gimnázium 12. évf. tanulója, Futó
Béla tanítványa; Novák Zoltán, a BME m¶szaki informatika szakos hallgatója, aki a zalaegerszegi Zrínyi Miklós
Gimnáziumban érettségizett mint Vadvári Tibor tanítványa.
Di séretet kaptak a következ®k: Balogh László, a Fazekas Mihály F®városi Gyakorló Gimnázium 11. évf. tanulója,
Horváth Gábor tanítványa; Béky Ben e, a Fazekas Mihály F®városi Gyakorló Gimnázium 12. évf. tanulója, Horváth
Gábor tanítványa; Bori János Feren , a BME m¶szaki informatika szakos hallgatója, aki a budapesti Puskás Tivadar
Távközlési Te hnikumban érettségizett mint Alapiné E seri Éva tanítványa; Kal sú Áron, a zalaegerszegi Zrínyi
Miklós Gimnázium 11. évf. tanulója, Pálovi s Róbert tanítványa; Karaszi Mihály, a BME mérnök-
zikus hallgatója,
aki a kalo sai Szent István Gimnáziumban érettségizett mint Sz®ke Imre tanítványa; Rá z Béla András, a Fazekas
Mihály F®városi Gyakorló Gimnázium 10. évf. tanulója, Horváth Gábor tanítványa; Szekeres Balázs, a szolnoki
Verseghy Feren Gimnázium 11. évf. tanulója, Lapu Béla tanítványa.
2001. november 23-án délután került sor az ünnepélyes eredményhirdetésre. Ennek során a Versenybizottság elnöke
megemlékezett Bakos Tiborról (19091998), aki 75 évvel ezel®tt nyerte meg mind a 
zikai, mind a matematikai versenyt
(akkor a matematikai versenyt hívták Eötvös-versenynek, a 
zikait pedig Károly Irén versenynek), s aki még 1996-ban
jelen volt a díjak átadásánál. A feladatok megoldásának ismertetését azokat illusztráló kísérleti bemutató, majd az
eredmények kihirdetése követte. A díjakat Gyulai József akadémikus, az ELFT elnöke adta át.
A 2001. évi Eötvös-verseny nyertesei
Alsó sor: (balról jobbra): Nagy Ádám, Pozsgay Balázs, Varjú Péter, Tóth Sándor, Siroki László és Pápai Tivadar.
Középs® sor: Nagy Márton, Bartos Imre, Novák Zoltán és Borbély Sándor.
Fels® sor: Rá z Béla András, Kal sú Áron, Bori János, Balogh László, Szekeres Balázs és Karaszi Mihály.
A díjakhoz társuló jutalmakat az ELFT, illetve az Oktatási Minisztérium biztosította, a Nemzeti Tankönyvkiadó
pedig valamennyi díjazott, illetve di séretet kapott versenyz®t 33 ezer forintos könyvutalványban részesítette.
Az eredményhirdetés végén a nyertes versenyz®k megjelent tanárai válogathattak a Nemzeti Tankönyvkiadó, a
M¶szaki Kiadó és a Typotex Kiadó által számukra felajánlott könyvekb®l.
