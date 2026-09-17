---
id: solution-document-eotvos-2009-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2009_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [eotvos-2009-cylindrical-mirror, eotvos-2009-rolling-ball-sphere, eotvos-2009-superconductor-flux]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/2009_S.pdf."
---

2009. október 16-án délután 3 órai kezdettel került sor a háború utáni 61. Eötvös-versenyre Budapesten és 15 vidéki
városban. Budapesten 50, vidéken összesen 43 dolgozatot adtak be a versenyz®k. Egerben, Sopronban és Székesfehér-
váron sajnos egyetlen diák sem indult a versenyen, de Békés sabán, Ke skeméten, Nyíregyházán és Szombathelyen is
supán 1-1 dolgozat született. A vidéki egyetemi városok közül Pé sett 8, Szegeden és Miskol on 6-6, Debre enben 4,
Veszprémben 3, Gy®rben pedig 2 versenyz® adott be dolgozatot. Közülük összesen hatan voltak egyetemisták, míg
Budapestr®l a versenyz®k mintegy fele érettségizett 2009-ben, 22-en a BME els®éves hallgatói voltak.
A feladatokat az Eötvös-versenybizottság t¶zte ki (tagjai Gnädig Péter, Honyek Gyula, Károlyházy Frigyes, elnök
Radnai Gyula) és a versenyz®k megoldásait is ugyanez a bizottság értékelte. A három kit¶zött feladat megoldására
hagyományosan 300 per állt rendelkezésre.
Ismertetjük a feladatokat és azok megoldását.
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
.Megjegyzés: (2)-t átrendezve Rβ = a+rβgolyó alakra hozhatjuk, ami azt fejezi ki, hogy a gömb felszínének érint®leges gyor-
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
.A fenti egyenletekb®l F̄∆t-t kiküszöbölve a tisztán gördül® golyó adataira
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
2. feladat. Kör alakú asztal közepén áll egy nagyon vékony falú, hengeres üvegváza, amelyben egy gyertya ég.
A henger átmér®je 12 m, tengelye függ®leges, a láng közepe 2 m-re van a váza tengelyét®l.
La i oldalról, a lánggal azonos magasságból nézi a vázát, és felgyel arra, hogy a láng mellett a lángnak egy éles,
határozott tükörképe is látszik a váza belsejében. Az asztalt körbejárva megállapítja, hogy a láng képének a szélessége
és a vázához viszonyított helye folyamatosan változik.
a) Milyen irányból nézve látszik a láng képe ugyanolyan szélesnek, mint maga a láng?
b) Milyen pályán mozog a láng képének a közepe, miközben La i körbejárja az asztalt?
A hengertükör leképezésére alkalmazhatjuk a gömbtükörre érvényes leképezési törvényt.
(Radnai Gyula)
Megoldás. A feladatot abban a középiskolai közelítésben oldjuk meg, amire a befejez® mondat hatalmaz fel
bennünket: alkalmazhatjuk a gömbtükörre érvényes leképezési törvényt. Tudjuk, hogy ez szigorúan véve sak az optikai
tengellyel közel párhuzamos, ún. paraxiális sugarakkal történ® leképezésre igaz, de a középiskolában  és a mindennapi
gyakorlatban  számos esetben alkalmazzuk olyankor is, amikor a leképez® sugarak akár 20◦
-os szögben hajlanak
az optikai tengelyhez. A leképezési törvénynek erre az esetre módosított, de a középiskolában nem tanított alakját
megtalálhatja az érdekl®d® Olvasó lapunk 174. oldalán a Lehet egy közelítéssel kevesebb? ím¶ ikkben.
Mindenekel®tt azt kell észrevennünk, hogy a láng képe a leírt kísérletben mindig valódi kép lesz, ami valahol a
tükröz® felület el®tt, nem pedig mögötte keletkezik. (Most ugyanis a tárgytávolság legalább 4 m, míg a fókusztávolság
 a sugár fele  3 m.) E valódi kép helye azonban attól függ, honnan nézünk rá a vázára. A láng képe mindig ugyanolyan
magas, mint maga a láng, mert függ®legesen a hengertükör se nem nagyít, se nem ki sinyít.
A láng képének szélessége persze nagyobb és kisebb is lehet, mint maga a láng. Egyenl® vele sak akkor, amikor
a láng éppen a kétszeres fókusztávolságban helyezkedik el, ekkor a nagyítás egységnyi. A kép fordított állású, a váza
tengelyét®l tehát ugyanúgy 2 m-re keletkezik, mint ahol a láng van, éppen sak a másik oldalon.
Máris válaszolhatunk az a) kérdésre: olyan irányból kell nézni a vázára, hogy az egységnyi nagyítású, valódi képet
létrehozó sugarak jussanak a meggyel® szemébe. Feltételezve, hogy a hengertükör viszonylag nagy nyílásszögben is
tökéletes leképezést valósít meg  ahogy ezt a gömbtükröknél a középiskolában feltételezzük , a képet és a tárgyatösszeköt® egyenesre (függ®leges síkra) mer®leges irányból is nézhetjük a jelenséget (2. ábra). Innen nézve, éppen
egymás mellett látjuk a lángot (L) és annak (vízszintes irányban fordított, függ®leges irányban egyenes állású) valódi
képét (L′
).
2. ábra
A b) kérdés megválaszolásához elég arra gondolnunk, hogy a gömbtükör esetén minden olyan fénysugár, amely a
gömb középpontján halad át, önmagába ver®dik vissza. Akárhol is van a tárgypont, a bel®le kiinduló olyan fénysugár,
amelyik (vagy amelyiknek a meghosszabbítása) áthalad a gömb középpontján, önmagába ver®dik vissza, majd áthalad
a valódi képponton. Tehát a tárgypontnak, a gömb középpontjának és a képpontnak egy egyenesbe kell esnie!
Hengertükörre alkalmazva ezt a gondolatmenetet, azt mondhatjuk, hogy az L tárgy L′
képének mindig rajta kell
lennie az L tárgypontot és az itteni O pontot összeköt® egyenesen. Ez az O pont a henger tengelyének az a pontja,
amelyik benne van a tárgyponton átmen® vízszintes síkban. Minthogy O és L pontok a feladatban rögzítettek, ezért
L′
-nek végig ugyanazon az egyenes szakaszon kell mozognia. A szakasz két végpontját az a két tárgyhelyzet határozza
meg, amikor a láng a legközelebb, illetve legtávolabb van a tükört®l. Esetünkben
r = 6 cm ⇒ f = 3 cm;
tmin = 4 cm ⇒ kmax = 12 cm;
tmax = 8 cm ⇒ kmin = 4,8 cm.
Az L′
képnek a 3. ábrán látható L′
1L′
2 szakaszon kell lennie.
3. ábra
Érdemes megjegyezni, hogy a homorú gömbtükörnek a középiskolában tárgyalt lineáris leképezése esetén a tárgy-
és képpontot összeköt® egyenes szükségképpen átmegy az optikai tengelynek azon pontján, ami a tükört®l kétszeres
fókusztávolságra van. Ez például a 4. ábrán látható hasonló háromszögek segítségével látható be:
x
t
=
K
T + K
=
k
t + k
,
tehát
x =
tk
t + k
=
1
1
t + 1
k
= f.4. ábra
Ha az
1
t
+
1
k
=
1
f
összefüggés helyett egy pontosabb közelítést alkalmazunk, amely már nem sak a paraxiális
sugarak  lineáris  képalkotását veszi gyelembe, akkor lehet®vé válik a gömbi leképezés hibájának, az ún. szférikus
aberrá iónak a kvantitatív tárgyalása is.
3. feladat. Egy hosszú, keskeny szolenoidban egyenáramot tartunk fenn. Legyen például a teker s hosszúsága ℓ =
60 cm, sugara r = 2 cm, menetszáma N = 600, az áramer®sség I0 = 1 mA.
A teker set a közepe táján hézagmentesen körülvesszük egy egyszer¶, zárt vezet® hurokkal (A), és egy ugyanekkora
átmér®j¶, de kett®s hurkot (zárt, kétmenetes teker set) (B) helyezünk el a teker s szájánál is, az 5. ábra szerint. A és
B olyan anyagból készült, amely viszonylag könnyen szupravezet®vé tehet®, ohmikus ellenállása kell®képpen ala sony
h®mérsékleten zérussá válik.
5. ábra
Kezdetben természetesen nem folyik áram A-ban és B-ben. De most leh¶tjük, szupravezet®vé tesszük ®ket, majd a
szoleniod áramkörét megszakítjuk. Ekkor (mivel a mágneses uxus, amely egy zárt szupravezet® áramkörön halad át,
nem változhat meg) az A hurokban valamekkora IA, a kett®s hurokban IB áram indukálódik, amely fenn is marad.
1. Hasonlítsa össze IA és IB nagyságát! Közelít®leg egyenl®k-e, és ha nem, melyik nagyobb a másiknál és hányszor?
2. A szolenoidra vonatkozó adatok ismeretében adjon valamilyen ésszer¶ be slést IA értékére!
(Károlyházy Frigyes)
Megoldás.Az els® kérdésre viszonylag könnyen válaszolhatunk, ha felismerjük, hogy amikor állandó er®sség¶ áram
folyik a szolenoidban, akkor a teker s szájánál fele akkora mágneses uxus alakul ki, mint a teker s közepe táján.
(Ennek legegyszer¶bb igazolásához úgy juthatunk, hogy gondolatban hozzáillesztünk a szolenoidhoz egy ugyanolyan
másikat. Azon a helyen, ahol a két teker s találkozik, mindkét teker snek a szimmetriatengely irányában B/2 nagyságú
mágneses induk ióvektor-komponest kell létrehoznia ahhoz, hogy kialakuljon a teker s belsejére jellemz®, B nagyságú
induk ióvektor.)
A fele nagyságú mágneses uxust két menettel kell létrehozni a teker s végén, vagyis egy menetben itt negyedakkora
áram is elég, mint amire a teker s közepe táján lév® egyetlen menetben van szükség.
A feladat második kérdése az A hurokban folyó IA áram nagyságára vonatkozik. Egy körvezet®ben folyó I áram a
körvezet® középpontjában
B = µ0
I
2r
nagyságú mágneses teret hoz létre. Els® közelítésben tegyük fel, hogy ez éppen akkora, mint amekkorát a szolenoidban
folyó I0 áram hozott létre:
B = µ0
I0N
ℓ
.
Ebben a közelítésben tehát
I = 2r
I0N
ℓ
.
Behelyettesítve a megadott értékeket, a teker s közepe táján lev® hurokban indukálódó áramra I = IA = 40 mA
adódik. Figyelembe véve azonban azt, hogy a körvezet® közepén a legkisebb a mágneses induk ió értéke, vagyis a
körlap pontjaira vonatkozó átlagos induk ió ennél biztosan nagyobb, a 40 mA-nél biztosan kisebb áram indukálódik
a szupravezet® hurokban.Felhasználva például a körvezet® induktivitására a szakirodalomban található
L = µ0r ln
r
rdrót
közelít® képletet (és feltételezve, hogy mondjuk rdrót = r/50), a körvezet®ben indukálódó áramra a uxus változatlan-
ságát kifejez®
µ0
I0N
ℓ
· (r2
π) = LIA
összefüggésb®l IA = 16 mA adódik.
Megjegyzések: 1. A drót vastagságára vonatkozó adat nem szerepelt a feladat szövegében, de az eredmény  ésszer¶ határok
között  nem is függ lényegesen ett®l az adattól. Ha például a drót sugara r/10 vagy r/100, az indukálódó áramer®sségre 27 mA,
illetve 13 mA értékeket kapunk.
2. IA-ra a következ® egyszer¶ megfontolással is adhatunk nagyságrendi be slést. A szolenoid közepe táján az átmen® uxust
nagyon sok menetben folyó áram együttes hatása hozza létre. A vizsgált helyen lev® egyetlen menet (mint körvezet®) uxusa
annyiszor kisebb az egymenetes szupravezet® uxusánál, ahányszor kisebb az I áram IA-nál. Gyakorlatilag ugyanekkora uxust
hoz létre a szolenoid kiszemelt menete melletti egy-egy körvezet® menet is. A távolabbi (néhány r-nyi távolságnál jóval messzebb
lev®) menetek azonban már egyre kevésbé járulnak hozzá a középs® rész uxusához, hiszen a mágneses terük szétszóródik,
er®vonalaiknak sak kis része halad át a kiszemelt körlapon. A szolenoid néhányszor (mondjuk 1 vagy 2-szer) r hosszúságú
szakaszán kb. 20-40 menet található. Ezek mágneses uxusa akkor lesz ugyanakkora, mint az egyetlen szupravezet® köráram
uxusa, ha IA 20-40-szer er®sebb, mint a szolenoid 1 mA-es árama.
∗
A verseny ünnepélyes eredményhirdetésére és a díjak kiosztására 2009. november 27-én délután került sor az ELTE
lágymányosi északi épületének konferen iatermében.
Mint az elmúlt években mindig, most is el®ször az 50 és a 25 évvel ezel®tti Eötvös-verseny feladatok bemutatására
került sor, majd e versenyek meghívott díjazottjai szólaltak meg, emlékeztek vissza az akkori versenyre.
Magos András 50 évvel ezel®tt érettségizett a budapesti II. Rákó zi Feren Gimnáziumban, Tusnády Gábor pedig
a sátoraljaújhelyi Kossuth Lajos Gimnáziumban. Magos András villamosmérnök, majd a BME oktatója lett, Tusnády
Gábor matematikazika szakos tanárként indult és matematikus lett. Ma már akadémikus, a Rényi Alfréd Matema-
tikai Kutatóintézetben dolgozik. Mindketten hangsúlyozták a problémaérzékenység fontosságát az értelmiségi, kutatói
pályán.
A 25 évvel ezel®tti nyertesek közül el®ször Kós Géza szólalt meg és idézte fel az akkori feladatokra adott meg-
oldásait. Matematikai érdekl®dése és találékonysága segítette az általa még nem tanult tematikájú feladatok helyes
megoldásához. Szükség is volt erre, hiszen még sak a III. osztályt kezdte el akkor Budapesten, a Berzsenyi Dániel
Gimnáziumban. Utána Fáth Gábor, akkor a budapesti Fazekas Mihály Gyakorló Gimnázium érettségizett tanulója,
majd Fodor Gyula következett, aki akkor a budapesti Móri z Zsigmond Gimnáziumot elvégezve kezdte meg az ELTE-n
zikusi tanulmányait. Fáth Gábor elmesélte, hogyan sikerült szabadságot kapnia a honvédségt®l, ahol egyéves kötelez®
katonai szolgálatát töltötte. (A mai atalok már nem is ismerik az el®felvételi rendszer megpróbáltatásait.) Fodor
Gyula a zikusi kutatómunka vonzásában éli életét, Fáth Gábor pályát változtatott és gazdasági matematikával keresi
kenyerét. Kós Géza is matematikusként dolgozik, emellett a KöMaL matematikai szerkeszt®bizottságának a nehéz
feladatokért felel®s tagja, aki ma is szívesen foglalkozik egy-egy izgalmasabb zikai problémával.
Mialatt a hallgatóság gyelmét a régi diákok visszaemlékezései kötötték le, a hátuk mögött kivetítve jelentek meg
az egykori fényképeik a KöMaL ar hívumából. Az elmúlt 50 évben, amióta sak újra szerepelnek zika feladatok a
KöMaL-ban, egyszer se fordult el®, hogy az Eötvös-verseny díjazottai között ne lettek volna olyan diákok, akik a
KöMaL sikeres megoldói voltak.
Ezután következtek a 2009. évi Eötvös-verseny feladatok. A megoldásokat a Versenybizottság elnöke mutatta be,
aki a 2. feladat megoldásával kap solatos többféle kísérletet is el®készített az asztalon. Volt egy 12 m átmér®j¶ és
több kisebb hengeres üvegváza; jól lehetett látni a bennük ég® gyertyalángok valódi képeit.
A Csodák Palotájából köl sönzött kett®s tükörrel szintén valódi képet lehetett varázsolni a leveg®be. A hátsó
padokon állt egy gyönyör¶ nagy homorú tükör az egyetemi demonstrá iós laboratóriumból, amellyel pedig virág sokrot
lehetett varázsolni egy vázába. Ez utóbbi két kísérlet azt illusztrálta, hogyan lehet három dimenziós, a tárgyhoz
megtévesztésig hasonló valódi képeket el®állítani.
Ezután került sor a díjak és a di séretek átadására. Az Eötvös Loránd Fizikai Társulat elnöke nevében Kádár
György f®titkár adta át az okleveleket, a Versenybizottság elnöke pedig a szponzorok által felajánlott pénzjutalmakat.
I. díjat és 30 ezer forint pénzjutalmat vehetett át Lovas Lia Izabella, a BME zika szakos hallgatója, aki a pé si
Le®wey Klára Gimnáziumban érettségizett mint Simon Péter és Kotek László tanítványa.
Összevont II. és III. díjat és 15-15 ezer forintos pénzjutalmat kapott a következ® három versenyz®: Karsa Anita,a
BME zika szakos hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor
tanítványa; Pálovi s Péter,a zalaegerszegi Zrínyi Miklós Gimnázium 12. évf. tanulója, Orbán Edit tanítványa; Varga
Ádám, a szegedi Ságvári Endre Gyakorló Gimnázium 11. évf. tanulója, Tóth Károly és Hilbert Margit tanítványa.Di séretet kaptak: A zél Gergely, a BME zika szakos hallgatója, aki a Pápai Református Kollégium Gimnázi-
umában érettségizett mint Somosi István tanítványa; Farkas Márton Ben e, a BME zika szakos hallgatója, aki
a Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa; Fülep Csilla, a
Fazekas Mihály F®városi Gyakorló Gimnázium 12. évf. tanulója, Horváth Gábor tanítványa; Lászlóy András, a
Pázmány P. Kat. Egyetem mérnök informatikus szakos hallgatója, aki a budapesti Piarista Gimnáziumban érettsé-
gizett Futó Béla tanítványaként; Wang Daqian, a Fazekas Mihály F®városi Gyakorló Gimnázium 12. évf. tanulója,
Horváth Gábor tanítványa.
Az I. díjas Lovas Lia Izabella a Társulattól Eötvös-verseny érmet, az Akadémiai Kiadótól pedig egy Holi s László
szerkesztette Fizika könyvet vehetett át. Holi s Lászlónak, aki 60 évvel ezel®tt volt díjazott az akkori Eötvös-versenyen,
a Társulat f®titkára Lán zos Kornél 6 kötetes összegy¶jtött m¶veit adta át. A díjazottak és di séretet nyert diákok
tanárai idén a Vin e Kiadó, az Akadémiai Kiadó és a MATFUND Alapítvány által felajánlott könyvekb®l válogathat-
tak.
Végül állófogadással zárult az ünnepi program, melyen az Eötvös-verseny régi és új nyertesei, a vendég tanárok és
diákok élénk eszme sere közben tanulmányozták a kitett kísérleteket, tárgyalták újra a feladatokat. Néhányukkal még
a jöv® évi Eötvös-versenyen is találkozhatunk. Az állófogadás költségeit és a nyertesek pénzjutalmait az Eötvös-verseny
idei szponzorai fedezték: Ramasoft Zrt., Indotek Zrt. és Gutai László zikus az Egyesült Államokból.
Köszönet érte.
