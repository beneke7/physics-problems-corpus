---
id: solution-document-eotvos-1994-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1994_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [eotvos-1994-charged-pendulum, eotvos-1994-diving-bell, eotvos-1994-superfluid-plug]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/1994_S.pdf."
---

1994-ben nem sak a Lapok, hanem az Eötvös verseny is entenáriumot ünnepelt: éppen 100 évvel ezel®tt, 1894-ben
indította útjára a Tanulóversenyt a Mathematikai és Physikai Társulat. Ezzel akarták - és sikerült - emlékezetessé
tenni azt a tényt, hogy a társulat elnöke, Báró Eötvös Loránd 1894 nyarán Magyarország kultuszminisztere lett.
Az els® versenyt 1894 szeptember 17-én tartották az abban az évben érettségizett tanulók számára, összesen
két helyszínen - a két egyetemi városban -, Budapesten és Kolozsváron. Összesen 29 diák adott be dolgozatot. Az
eredményt október 25-én, a Társulat ünnepélyes ülésén hirdették ki, ahol Eötvös, a Társulat elnöke - egyben miniszter
és az Akadémia elnöke - személyesen adta át az els® és második helyezettnek a díjakat. Ezeket a díjakat már akkor
Báró Eötvös-díj-nak nevezték. Kés®bb érem is járt a díjjal, amelyet Eötvös sináltatott. Ma már sajnos egyetlen ilyen
érem sem lelhet® fel Magyarországon, de megmaradt Eötvös hagyatékában az érem terve. Ennek alapján készíttette
el a entenáriumra az Eötvös Loránd Fizikai Társulat azt a díszes oklevelet, amelyet idén el®ször kaptak az Eötvös
verseny nyertesei.
1994 október 21-én tizenöt helyszínen: Budapesten, Szegeden, Debre enben, Pé sett, Miskol on, Veszprémben,
Gy®rött, Egerben, Nyíregyházán, Békés sabán, Nagykanizsán, Pakson, Sopronban, Székesfehérváron és Szombathe-
lyen rendezték meg egyid®ben a versenyt a szokásos feltételekkel: indulhattak az az évben érettségizettek, valamint
középiskolai tanulók. A megoldási id® 300 per volt, minden segédeszközt (könyveket, jegyzeteket, zsebszámológépet)
lehetett használni. Összesen 336 versenyszer¶ dolgozat érkezett be a feladatokat kit¶z® és a megoldásokat értékel®
Versenybizottsághoz (elnök: Radnai Gyula, tagok: Károlyházy Frigyes, Gnädig Péter).
Ismertetjük a feladatokat, azok megoldását és a verseny eredményét.
1. feladat. Egy tóba 20 m mélyre les¶llyesztett, 1 m3
¶rtartalmú búvárharang megtelt vízzel. A felszínen úszó
hajóból vékony sövön át leveg®t pumpálunk a harang alá. (A harang súlyos, még ekkor sem emelkedik fel.) A leveg®
és a víz h®mérséklete között nin s számottev® különbség.
| Legalább mekkora munkát végez a kompresszor az 1 m3
víz kiszorítása során?
Károlyházy Frigyes
Megoldás. Készítsünk vázlatos ábrát a folyamatról! Hagyjunk el minden felesleges részletet, hogy maga a termo-
dinamikai folyamat jól látható legyen. Két, egymást követ® részfolyamatról van szó:
| el®ször össze kell nyomni a gázt a megfelel® nagyobb nyomásra (20 méterrel a víz felszíne alatt a nyomás a légkori
nyomásnak kereken háromszorosa);
| ezután a megfelel® nyomású gázt át kell nyomni a búvárharang alá, a víz helyére.
Mindezt az 1. ábrán vázoltuk.
Úgy t¶nik, hogy a dugattyút nyomó er® munkáját kell meghatározni. Ez azonban nagyobb, mint a kompresszor által
végzett munka, mert besegít a küls® légnyomás is. Így a kompresszor által végzett munka a 2. ábrán bevonalkázott
területtel lesz egyenl®: a dugattyú által végzett összes munkából le kell vonni a légköri nyomás által végzett p0V0
munkát.
Az izotermikus tágulási munka kiszámítási formája megtalálható a függvénytáblázatban:
W = NkT ln
V2
V1
.
Esetünkben izoterm összenyomásról van szó, és a küls® munkát kell kiszámítanunk. Felhasználva az állapotegyen-
letet (p0V0 = NkT0) és azt, hogy a térfogatot harmadrészére kell sökkenteni, az izoterm összenyomáshoz szükséges
munka:
WT = p0V0 ln3.
Behelyettesítve p0 ≈ 105
Pa és V0 = 3 m3
értékeket:
WT ≈ 330 kJ.
Ehhez kell hozzáadnunk az átnyomáshoz szükséges munkát, amelyet úgy számíthatunk ki, hogy a dugattyút nyomó
állandó er®t megszorozzuk a dugattyú elmozdulásával:
Wátnyomási = F · s = 3p0A ·
V0/3
A
= p0V0 = 300 kJ.
Így az összes munka 630 kJ.
Most már sak a küls® p0 nyomás által végzett p0V0 munkát kell levonnunk, hogy megkapjuk a kompresszorra jutó
részt:
Wkompresszor = 630 kJ − 300 kJ = 330 kJ.
Ezzel válaszoltunk a feladat kérdésére.
Kiegészít® megjegyzések.
1. Az izoterm munka kiszámítási formulájához úgy lehet eljutni, hogy az izoterma alatti területet határozzuk meg:
W =
V2 Z
V1
pdV =
V2 Z
V1
NkT
V
dV = NkT
V2 Z
V1
1
V
dV,W = NkT ln
V2
V1
.2. Vajon nem lehet-e az izotermikus folyamat helyett más folyamattal, kevesebb befektetett munka árán is élhoz
érni?
Adiabatikus összenyomáskor kevesebb munka is elég lenne a 3p0 nyomás eléréséhez. Viszont akkor fel is melegedne
a gáz, amely azután az átnyomás közben kezdene leh¶lni, s így sökkenne a nyomása. Épp ezért 3p0-nál jóval nagyobb
nyomásra kellene adiabatikusan összenyomni, ehhez pedig már több munkára lenne szükség, mint az izotermikus
esetben.
És ha el®ször leh¶tenénk a gázt? Állandó p0 nyomáson
T0
3
h®mérséklet¶re h¶tve, a térfogata
V0
3
lenne. Eközben sak
a küls® légkör végezne munkát. Majd pedig hagynánk a gázt állandó
V0
3
térfogaton visszamelegedni T0 h®mérsékletre,
ekkor a nyomása elérné a 3p0 értéket, s sak az átnyomási munkát kellene a kompresszorral végeztetni. Lehet, hogy
200 kJ is elég lenne? Ez már ravaszabb gondolat, de azt lehet ellene felhozni, hogy a feladatban szó se volt arról,
hogy a hajón még egy megfelel® h¶t®berendezés is m¶ködik, amelyet felhasználhatunk a probléma megoldásához. De
tegyük fel, hogy megengednénk a h¶t®gép használatát, akkor viszont azt a munkát is illene számításba venni, amivel
a h¶t®gépet | pl. a h¶t®gép kompresszorát | m¶ködtetni kell. Nem lenne nehéz megmutatni, hogy ismét rázetünk:
összesen több munkát kell végeznünk.
3. Úgy is ki lehet számítani a kompresszor által végzett munkát, hogy elképzeljük: a kezdetben 3 m3
-nyi leveg®t
egy zsákba zárjuk, és a zsákot lassan lehúzzuk 10 m-nyire a víz alá. Mivel x méter mélységben az izotermikusan
összenyomott gázra F(x) = 3 · 104
· (1 + x/10)−1
felhajtóer® hat, a lehúzás során végzett munka (SI-egységrendszerben
számolva)
W =
20 Z
0
f(x)dx =
20 Z
0
3 · 104
1 + x/10
dx = 3 · 105
· ln3 ≈ 330 kJ.
2. feladat. Egy henger alakú edény szuperfolyékony héliummal van tele. Az edény magassága 1 dm, bels® alapte-
rülete 1 dm2
.
A héliumra kell® óvatossággal egy ugyan sak henger alakú, 1 dm magas, de sak 0,99 dm2
alapterület¶ dugót
helyezünk, és elengedjük. A dugó s¶r¶sége a hélium s¶r¶ségével egyenl®.
| Hogyan mozog a dugó?
| Mennyi id® alatt ér le az edény aljára?
Az egész berendezés h®mérséklete 0 K közvetlen közelében van, a folyadék súrlódása és felületi feszültsége gyelmen
kívül hagyható.
Gnädig Péter
Megoldás. Amikor elengedjük a dugót (3. ábra), ennek esését az alatta lév® folyadék hirtelen lefékezi bizonyos v0
sebességre. Ezt a dugó további mozgása során kezd®sebességnek fogjuk tekinteni.
Próbáljuk meg kiszámítani ezt a v0 kezd®sebességet, s sak utána keressük a választ a feladat kérdésére: Hogyan
mozog a dugó?
Amint a dugó v0 sebességgel elindul lefelé, oldalt felspri el a folyadék. Jelöljük a folyadék kiömlési sebességét
u0-lal. Ez sokkal nagyobb, mint v0, hiszen a folyadék összenyomhatatlansága miatt a ∆A terület¶ résen ugyanannyi
folyadéknak kell kifre sennie, mint amennyi az A terület¶ dugó alól kiszorul:
v0 · A = u0 · ∆A.
v0 kiszámításához lehet, hogy el®ször u0-t kell meghatároznunk? Ez elég is lenne, hiszen a feladat adataiból az
A : ∆A = 100 arány kiolvasható.
Milyen összefüggésben szerepelhet még a kiöml® folyadék sebessége? Mivel a folyadék súrlódása és felületi feszültsége
gyelmen kívül hagyható, ezért érdemes lesz felírni az egész rendszerre a a munkatételt. Eszerint a rendszeren végzett
munka a rendszer mozgási energiájának megváltozásával egyenl®.
Munkát végz® er® a dugóra ható nehézségi er®. Amíg a dugó | a test |, egy ki siny ∆x-szel elmozdul lefelé, kiszorít
∆mfoly tömeg¶ folyadékot, amely u0 sebességgel hagyja el a tartályt. Ezért írhatjuk:
mtest · g · ∆x =
1
2
∆mfoly · u2
0.
Igaz, a dugónak is megváltozott a mozgási energiája, de a sokkal kisebb sebesség miatt ezt a folyadék mozgási
energiájának változásához képest elhanyagolhatjuk.
Helyettesítsük a fenti egyenletbe a következ®ket:
mtest = Al̺test és ∆mfoly = A∆x̺foly.
Egyszer¶sítés után a következ® összefüggés adódik:
l̺testg =
1
2
̺folyu2
0.Ez éppen a jó öreg Bernoulli-törvény (1738) spe iális esete, akár ebb®l is kiindulhattunk volna u0 kiszámításához. Ha
pedig azt is kihasználjuk, hogy a feladatban most a test és a folyadék s¶r¶sége egyenl®, a folyadék kiömlési sebességére
kapjuk:
u0 =
p
2gl.
Ez a Torri elli-féle kiöntési törvény (1646) még egy évszázaddal korábbról.
Akár át is fogalmazhatjuk a feladatot: Ahelyett, hogy Hogyan mozog a dugó?, azt kérdezhetjük: Hogyan mozog
egy lyukas edényb®l súrlódásmentesen kiöml® folyadék esetén a folyadék fels® szintje? Azt már tudjuk, hogyan indul
el. Kezd®sebessége:
v0 =
∆A
A
u0 =
∆A
A
p
2gl.
Tekintsünk most egy közbüls® esetet a mozgás során. Tegyük fel, hogy a dugónak még h magasságú része áll ki a
hengerb®l. A dugó úgy mozog ekkor, mint az oldalt lyukas edényben lév® folyadékok fels® szintje abban a pillanatban,
amikor ez a szint éppen h magasságban van a lyuk felett (4. ábra). Ugyanis mindkét esetben a súrlódásmentesen kiöml®
folyadék sebessége
u =
p
2gh,
és így a dugó sebessége
v =
∆A
A
u =
∆A
A
p
2gh.
Ez még így is írható:
v =
s
2

∆A
A
2
gh,
amib®l látszik, hogy a dugó mozgása egyenletesen változik, lassulásának nagysága pedig

∆A
A
2
· g = 10−4
g = 10−3 m
s2
.
A dugó mozgásának sebességid® grakonja az 5. ábrán látható.
A dugó sebessége éppen akkor sökken egyébként is zérusra, amikor a dugó alja eléri az edény alját, teteje pedig a
hengeres edény tetejével kerül egy szintre. (Az analóg példában: a kiöml® folyadék felszíne a lyukhoz ér.)
Így a dugó leérkezéséig eltelt τ id®
τ =
2l
v0
=
2l
∆A
A
√
2gl
=
A
∆A
s
2l
g
= 14,1 s.
Kiegészít® megjegyzések.
1. A leérkezési id® kiszámításakor elhanyagoltuk azt az id®tartamot, amennyi id® alatt a dugó felveszi a kezd®se-
bességet, s azt az utat is, amit ez alatt megtesz. Az elhanyagolás jogosságát a következ® be sléssel ellen®rzihetjük. A
dugó valódi kezd®sebessége nulla, de ebb®l az állapotából | feltételezésünk szerint igen hamar | felgyorsul a kérdéses v0
sebességre. Amikor elengedjük, a dugó tetején és az aljánál egyaránt a légköri nyomás hat rá, tehát a dugó kezdeti gyor-
sulása g (szabadesés!). Ez a gyorsulás bizonyos τ0 id® alatt gyarkorlatilag nullára (10−4
g-re) sökken, s a dugó sebessége
v0 lesz. Ha átlagosan g/2 értékkel számolunk, a (g/2)τ0 = v0 összefüggésekb®l τ0 = 2v0/g = 2 ·
∆A
A
s
2l
g
≈ 0,003 s
adódik. Ez ez id® és a dugó által ezalatt megtett kb. v0τ0/2 = 0,02 mm út valóban elhanyagolható.
2. A szuperfolyékony héliumnak semmi más különleges extrém tulajdonságát | például, hogy lassan magától is
kimászna az edényb®l | nem használtuk ki azon az egyen kívül, hogy nin s bels® súrlódása. Éppen elég meglep® ez is!
3. feladat. Függ®leges földelt fémsíktól d távolságra felfüggesztünk egy l hosszúságú fonálingát. Miután az m
tömeg¶, ki siny ingatestet elektromosan feltöltöttük, az inga újra egyensúlyi helyzetet vett fel, s most α szöget zár be
a függ®legessel (6. ábra).
| Mekkora az ingatest töltése?
| Mennyivel kell közelebb vinnünk a fémsíkot az inga felfüggesztési pontjához, ha azt akarjuk, hogy a függ®leges
fémsík magához rántsa az ingát?
| Anélkül, hogy közelebb vinnénk, tudjuk-e úgy mozgatni a mindig függ®leges fémsíkot, hogy hozzá sapódjon az
inga?
A fonál szigetel®, a leveg® hatása elhanyagolható, s a feladatot az alábbi numerikus értékek esetén oldjuk meg:
d = 0,5 m; l = 4 m; m = 10−3
kg; α = 1◦
.
Radnai Gyula
Megoldás. Tisztázzuk el®ször a fémsík szerepét! Tudjuk, hogy elektrosztatikus esetben a fémek felülete mindig
ekvipoten iális. (Addig-addig mozognak, rendez®dnek rajtuk a töltések, amíg ez az állapot ki nem alakul.) Ez aztjelenti, hogy a fémek felületénél az elektromos térer®sségnek nem lehet érint® irányú komponense, vagyis a térer®sség
minden pontban mer®leges a fém felületére. A feladatban ponttöltés és sík fémfelület szerepel, ezért az er®térnek a 7(a)
ábrán vázolt szerkezet¶nek kell lennie. Ezzel az er®térrel ekvivalens egy olyan dipólus er®terének egyik fele, amelyet
egymástól 2x távolságra lév® Q és −Q ponttöltések hoznak létre, ahogyan azt a 7(b) ábrán vázoltuk.
A fémsík hatása tehát minden tekintetben helyettesíthet® egy −Q nagyságú ú.n. tükörtöltés hatásával. Ennek a
felismerésnek köszönhet®en azt az er®t, amit a fémsík fejt ki a Q tötésre, úgy is kiszámíthatjuk, mint a tükörtöltés
által kifejtett vonzóer®t.
A Coulomb-er®n kívül a Q töltésre még két er® hat (8. ábra): a nehézségi er® és a fonáler®. A három er® ered®je akkor
zérus | akkor van egyensúly |, ha a Coulomb-er® és a nehézségi er® hányadosa tg α-val egyenl®. Ebb®l határozhatjuk
meg a Q töltés keresett értékét.
mg tg α = k
Q2
[2(d − lsinα)]2 .
Átrendezés után:
Q = 2(d − lsinα)
r
mg
k
tg α,
(k = 9 · 109 Nm2
C2
, g = 9,81
m
s2
, a többi paraméter értéke a feladatban adott). Behelyettesítések után kapjuk:
Q = 1,187 · 10−7
C.
Mi történik, ha a fémsíkot közelebb visszük az ingához? A Coulomb-er® n®, mivel a tükörtöltést®l való távolság
sökken. A nehézségi er® nem változik, tehát egy nagyobb α szög esetén tud újra beállni az egyensúly. De van-e ilyen
új α szög? Hiszen az inga kilendülésével a Coulomb-er® tovább n®, és lehet, hogy az inga meg se áll addig, amíg hozzá
nem sapódik a fémsíkhoz.
Meg kell határoznunk azt az összefüggést, amely egyensúly esetén fennáll d és α között. Formálisan tekintsük d-t
α függvényének, s fejezzük ki ezt a függvényt az egyensúlyra már felírt fenti összefüggésb®l. Ezt kapjuk:
d = d(α) = lsinα +
s
kQ2
4mg
1
√
tg α
.
A függvény menete viszonylag kis α értékek környezetében a 9. ábrán látható módon egy minimumot mutat. Van
tehát egy olyan legkisebb d érték, amelynél közelebb nem vihetjük a fémsíkot. Ha közelebb visszük, nin s egyensúlyi
állapot, tehát hozzá sapódik az inga a fémsíkhoz.
Határozzuk meg d minimumát!
(Akiknek gondot okoz e kissé bonyolult függvény dieren iálása, úgy segíthetnek magukon, ha | felismerve, hogy
sak kis szögekröl van szó |, sinα és tg α helyére α-t írnak. Ekkor sak hatványfüggvényeket kell deriválni, s a végered-
mény legfeljebb a negyedikötödik értékes jegyben tér el a pontos eredményt®l.)
A minimum helyére (α∗
) kapjuk:
sin2α∗
(≈ 2α∗
) = 3
s
kQ2
2mgl2
, ebb®l α∗
= 2,12◦
,
d legkisebb lehetséges értékére pedig ez adódik:
dmin = 0,4435 m = 44,35 cm.
Mivel a fémsík eredetileg 0,5 méterre volt az inga felfüggesztési pontjától, ezért ahhoz, hogy a fémsík magához
rántsa az ingát, legalább ∆d = 5,65 cm-rel közelebb kell vinni.
Már sak arra kell válaszolnunk, hogy tudjuk-e úgy mozgatni a fél méterre lév® fémsíkot, hogy hozzá sapódjon az
inga akkor is, ha sohasem kerül a fémsík fél méternél közelebb a felfüggesztési ponthoz.
Igen, tudjuk: be kell lengetni az ingát, mint egy hintát. Elöször eltávolítjuk a fémsíkot, ekkor az inga hátra-
lendül. Amikor az inga elindul visszafelé, visszahozzuk a fémsíkot, hogy vonzóerejével növelje a lengés amplitúdóját.
Lényegében az inga lengésével szinkronban, de mindig ellentétes fázisban kell mozgatni a fémsíkot. Akármilyen kis
amplitúdóval is rezegtetjük a fémsíkot, ha ez megfelel® fázisban történik, el®bb-utóbb hozzá sapódik az inga.
Kiegészít® megjegyzések.
1. Tanulságos áttekinteni a feladat energetikai megoldását is. Nem sak azért, mert ez egy második megoldás, hanem
azért is, mert olyan új felismeréshez vezet, amely az el®z® megoldásból nem derült ki.
A fémsíkon inuált (elektromosan megosztott) töltésrendszer poten iális energiájának felírása elég bonyolult feladat,
ezért ismét alkalmazzuk a tükörtöltéses módszert. Az inga + fémsík rendszer helyett tekintsük az inga + tükörképingarendszert (10. ábra), és írjuk fel e két ingából álló rendszer öszes poten iális energiáját! Ez a két ingatest gravitá iós
helyzeti energiáiból és az elektrosztatikus köl sönhatási energiáiból tev®dik össze (az utóbbi negatív).
U = mg(l − lcosα) + mg(l − lcosα) − k
Q2
2(d − lsinα)
.
Egyetlen inga poten iális energiája ennek a fele lesz:
U1 = mg(l − lcosα) − k
Q2
4(d − lsinα)
.
Az egyszer¶ség kedvéért foglalkozzunk most is a kis szögek esetével, legyen
x = lsinα ≈ kα, és h = l − lcosα ≈ l
α2
2
.
EzzelU1(α) =
mg
2
lα2
− k
Q2
4
1
d − lα
,
vagy áttérve az x = lα változóra:U1(x) =
mg
2l
x2
−
kQ2
4
1
d − x
.
Ezt az U1(x) függvényt x szerint dieren iálva kapjuk meg az ingatestre ható (x irányú) er® −1-szeresét, tehát az er®:
F1(x) = −
dU1(x)
dx
=
mg
l
x −
kQ2
4
1
(d − x)2
.
Mind az U1(x), mind az F1(x) függvények menete a paraméterek értékeit®l függ. Ha m, g, l, k, Q állandó, akkor
egyedül d-t®l. A 11. ábrán vázoltunk három különböz® esetet. Az a) esetben a poten iális energia minimuma jelöli ki
az inga stabilis egyensúlyi helyzetét, a maximum egy labilis egyensúlyt jelez. A ) esetben nin s egyensúlyi helyzet.
A kett® közti átmenetet, a határesetet mutatja az ábra b) része, amikor a poten iális energiának vízszintes érint®j¶
inexiós pontja van, itt valósulhat meg még utoljára egyensúlyi helyzet. Az ehhez tartozó d paraméterérték lesz d
legkisebb értéke.
x = x∗
helyen tehát
dU1
dx
= 0 és
dF1
dx
= 0 is igaz.
Ebb®l a két feltevésb®l az alábbi egyenletekre jutunk:
2x(d − x)2
=
kQ2
l
2mg
, illetve (d − x)3
=
kQ2
l
2mg
.
Ezek szerint 2x = d − x, vagyis x =
d
3
a határesetben!
A fenti jelölésekkel: x∗
=
dmin
3
.
Ez az a szép és érdekes eredmény, ami nem jött ki az els® megoldás során: a fémsík egészen addig közelíthet® az
ingához, amíg az inga kilendüléséhez tartozó x érték el nem éri az éppen akkori d távolság harmadrészét. Ha elérte, s
még tovább közelítjük a fémsíkot, akkor már neki sapódik az inga.
Természetesen a feltételi egyenletek bármelyikébe behelyettesítve x =
d
3
értékét, megkapjuk d = dmin értékét:
d = dmin =
3
2
3
s
kQ2l
2mg
= 0,4435 m
2. A feladat harmadik kérdésére a belengetésen kívül más ötletes válaszok, megoldási javaslatok is születtek.
Ilyen például a fémsík körbeforgatása, amely körmozgásra sábítja az ingatestet. Voltak, akik a fémsík saját síkjában
történ® mozgatással próbálkoztak, számítva az elektronok tehetetlenségére, s a mozgó töltésekre ható Lorentz er®vel is
többen próbálkoztak | nem sok sikerrel. Elág sok jó zikai szemlélet¶ versenyz® akadt, aki | ha nem is tudta megoldani
a feladat nehéz, középs® részét |, erre a befejez® kérdésre jól válaszolt.
A verseny eredménye
Megosztott III. díjat nyert egyenl® helyezésben a következ® három versenyz®:
Horváth Péter, a Fazekas Mihály F®városi Gyakorló Gimnázium IV. osztályos tanulója (fels® fénykép), Horváth
Gábor tanítványa;
Ková s Krisztián, a békés sabai Kemény Gábor M¶szaki Szakközépiskola IV. osztályos tanulója (középs® fény-
kép), Mekis László és Varga István tanítványa;Varga Dezs®, a miskol i Földes Feren Gimnázium IV. osztályos tanulója (alsó fénykép), id. Szabó Kálmán
tanítványa.
III. díjat nyert egyenl® helyezésben a következ® hét versenyz®:
Borsányi Szabol s, a budapesti Piarista Gimnázium IV. osztályos tanulója, Görbe László tanítványa;
Bur si Péter, a pápai Türr István Gimnázium III. osztályos tanulója, Németh Zsolt tanítványa;
Futó Gábor, az ELTE TTK matematikus szakos hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnázi-
umban érettségizett, mint Horváth Gábor tanítványa;
Juhász Sándor, a Fazekas Mihály F®városi Gyakorló Gimnázium IV. osztályos tanulója, Horváth Gábor tanítvá-
nya;
Koblinger Egmont, a Fazekas Mihály F®városi Gyakorló Gimnázium IV. osztályos tanulója, Horváth Gábor
tanítványa;
Mizera Feren , az ELTE TTK zikus szakos hallgatója, aki Szlovákiában, Rév-Komáromban érettségizett, mint
Szakál Ildikó, Spátai Lotár és Szabó Endre tanítványa;
Tóth Gábor Zsolt, a budapesti Árpád Gimnázium III. osztályos tanulója, Vankó Péter tanítványa.
Di séretben részesültek, s err®l oklevelet kaptak a verseny 1115. helyezettjei:
11. Halbritter András, a BME mérnökzikus szakos hallgatója, aki a gy®ri Czu zor Gergely Ben és Gimná-
ziumban érettségizett, mint Csonka László tanítványa; 1213. Bárász Mihály, a Fazekas Mihály F®városi Gyakorló
Gimnázium III. osztályos tanulója, Horváth Gábor tanítványa; Várhegyi Péter, a BME mérnökzikus szakos hall-
gatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett, mint Horváth Gábor tanítványa; 1415.
Kon z Imre, a Fazekas Mihály F®városi Gyakorló Gimnázium II. osztályos tanulója, Horváth Gábor tanítványa; Lo-
vas Rezs®, a debre eni KLTE Gyakorló Gimnáziumának III. osztályos tanulója, Dudi s Pál, Kirs h Éva és Szegedi
Ervin tanítványa.
Jegyz®könyvi di séretben részesültek a 1620. helyezett versenyz®k egyenl® helyezésben:
Feldmann Márton, a soproni Vas- és Villamosipari Szakközépiskola IV. osztályos tanulója, Lendvay Péterné tanít-
ványa; Juhász Bertalan, a debre eni KLTE Gyakorló Gimnáziumának IV. osztályos tanulója, Dudi s Pál tanítványa;
Madarassy Pál, a ELTE TTK térképész szakos hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban
érettségizett, mint Horváth Gábor tanítványa; Radnóti Gergely, a paksi Vak Bottyán Gimnázium IV. osztályos tanu-
lója, Horváthné Szabó Julianna és Gálosiné Kimle Mária tanítványa; Salk Miklós, a pé si Babits Mihály Gimnázium
IV. osztályos tanulója, Kon z Károly tanítványa.
Gratulálunk a nyerteseknek!
Radnai Gyula
0
p
0
p
0
(c)
(a)
(b)
,
3
3 ,
3
3 ,
V0
0 V
0
p
p V0
p
p0
0d d
α α l l
x x Q, m Q, m
x
1
F
1 U
x
x
min
x
1
F
1 U
x
x
min
1
F
1 U
*
x
min d>d d=d d<d a) b) c)0
3p0
V
3
0
= 1 m
3
p
p
V0
V
3
= 3 m
foly.
ρ
ρ
A
A+∆ A
l
l
testh
0
v0
v
τ
v
t
τ
l =
2α
d
l
m,Q
(a) (b)
x x x Q Q Qd
l
mg
Q
m
F
C
α
Q
l
d
4mg
2
kQ 1
tg α
α
sin α
α*
