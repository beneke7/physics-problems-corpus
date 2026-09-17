---
id: eotvos-2004-electrons-magnetic-field
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2004-electrons-magnetic-field
solution_type: official
source_document: solution-document-eotvos-2004-s
source_pdf: cache/phoxiv/eotvos/2004_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2004_S.pdf."
---

3. Ebben a feladatban elektronok mozgását vizsgáljuk homogén mágneses térben, az er®vonalakra mer®leges síkban.
(Az elektront klasszikus tömegpontnak tekintjük, melyre sak elektromos és mágneses er®k hatnak.)
a) Két, kezdetben nyugvó elektron egymástól elég messze, d távolságra helyezkedik el. Mekkora azonos nagyságú,
egymással ellentétes irányú sebességgel indítsuk el az elektronokat úgy, hogy távolságuk a mozgás során ne változzék?
b) Állandó maradhat-e a d távolság akkor is, ha sak az egyik elektront lökjük meg? Milyen pályán mozog ekkor a
rendszer tömegközéppontja? Mekkora az a minimális dmin távolság, ami mellett ilyen mozgás még létrejöhet? Ábrázoljuk
vázlatosan az elektronok pályáját ebben az esetben! Mikor áll meg el®ször a meglökött elektron?
Megoldás. a) A mágneses térben mozgó elektronokra akkora Lorentz-er®nek kell hatnia, hogy legy®zze a köztük
fellép® elektrosztatikus taszítóer®t, s®t biztosítsa még az egyenletes körmozgáshoz szükséges entripetális er®t is.
A két elektron ugyanazon a körpályán, egymással szemben, ugyanakkora sebességgel fog mozogni, ezáltal nem változik
a közöttük lév® d (= 2R) távolság (7. ábra).
7. ábra
Írjuk fel egy elektron mozgásegyenletét! A −e töltés¶, m tömeg¶ és v sebességgel mozgó része skére
FL = evB
nagyságú Lorentz-er® és
FCb = k
e2
d2
Coulomb-er® hat. Az el®bbi (megfelel® irányú mozgás esetén) mindig a másik elektron felé mutató er®, az utóbbi
azonban mindig taszító er®.
Megjegyzés. Elvben 
gyelembe kellene még vennünk a mozgó elektronok által keltett (pl. a BiotSavart-törvényb®l
számolható) mágneses teret, és az ebb®l származó
Fmágn. = ev ·
µ0
4π
·
ev
d2
=
v2
c2
· FCb
mágneses er®hatást is (c a fénysebesség). Ez az er® azonban egy klasszikusan (nemrelativisztikusan) mozgó része skére
v ≪ c miatt elhanyagolható a Coulomb-er® mellett, tehát nem kell számolnunk vele.
A mozgásegyenlet
X
F = ma, vagyis az irányokat is 
gyelembe véve:
evB − k
e2
d2
= m
v2
d
2
.
Ez a kiszámítandó v sebességre nézve másodfokú egyenlet, melynek megoldásai:
v =
edB
4m
±
s
edB
4m
2
−
ke2
2md
.
Akkor oldható meg a feladat, ha v-re valós érték adódik, vagyis a diszkrimináns nemnegatív. Ebb®l d-re kapunk egy
feltételt:
d ≥ 2 ·
3
r
km
B2
.
(Ezért szerepelt a feladat szövegében az a kitétel, hogy a két elektron elég messze van egymástól, nem pedig azért,
hogy elhanyagoljuk a köztük fellép® Coulomb-er®t  ahogyan ezt a versenyen néhányan tették.)
b) Ha sak az egyik elektront lökjük meg, a mozgás bonyolultabb lesz, még abban a spe iális esetben is, amikor a
távolságuk  a feladat kérdésének megfelel®en  mindvégig ugyanakkora, d nagyságú marad. (Egyáltalán nem nyilván-
való, hogy ilyen mozgás kialakulhat; néhány versenyz® éppen a feladat megoldhatatlanságát próbálta bebizonyítani.)
Közel jutunk a megoldáshoz, ha el®ször a feltett  segít®  kérdésre (Milyen pályán mozog ekkor a rendszer
tömegközéppontja?) keressük a választ. Írjuk fel  vektorosan, a szokásos jelöléseket használva  az elektronok moz-
gásegyenleteit!
ma1 = k
e2
|r1 − r2|
3 (r1 − r2) − e(v1 × B), (1)
ma2 = k
e2
|r1 − r2|3
(r2 − r1) − e(v2 × B). (2)
Tudjuk, hogy két egyforma tömeg¶ része ske tömegközéppontjára
rtkp =
r1 + r2
2
, vtkp =
v1 + v2
2
, atkp =
a1 + a2
2
.
Annak érdekében, hogy ezek a mennyiségek megjelenjenek a képleteinkben, adjuk össze a két elektron mozgásegyen-
letét!
m(a1 + a2) = 0 − e

(v1 + v2) × B
,
amib®l
matkp = −e(vtkp × B)
következik. (Látható, hogy a Coulomb-köl sönhatás kiesett a tömegközéppont mozgásegyenletéb®l.)
Nagyon fontos felismeréshez jutottunk: a két elektronból álló rendszer tömegközéppontja úgy mozog, mint egyetlen
elektron a B induk iójú mágneses térben! Az pedig körpályán mozog, egyenletesen.
A tömegközéppont tehát egyenletes körmozgást végez, miközben körülötte kalimpál a két elektron. A tömegkö-
zéppont mozgásának szögsebessége
ωtkp =
atkp
vtkp
=
e
m
B = ωc.
(Ezt az értéket a 
zikusok iklotronfrekven iának nevezik, mert adott er®sség¶ mágneses térben  pl. egy része ske-
gyorsító iklotronban  éppen ekkora körfrekven iával keringenek a része skék.)
A tömegközéppont körpályájának sugara
Rtkp =
vtkp
ωtkp
=
vtkp
ωc
.
Vajon hogyan mozognak az elektronok a tömegközéppont körül? Nyilván ennek a kérdésnek a megválaszolása vezet
el a feladat hátralev® részének megoldásához. Írjuk fel az 1-es elektron helyvektorát r1 = rtkp +Ralakban, vagyis je-
löljük a tömegközépponttól az 1-es elektronhoz mutató vektort R-rel. (Ekkor a másik elektronhoz a tömegközépponttól
a −R vektor mutat.) A tömegközéppontot megadó képlet felhasználásával adódik, hogy
R= r1 − rtkp = r1 −
r1 + r2
2
=
r1 − r2
2
.
Ezen vektor id®beli változására úgy kaphatunk egyenletet, hogy képezzük az (1) és (2) mozgásegyenletek különbségét:
(3) m(a1 − a2) = 2k
e2
|r1 − r2|3
(r1 − r2) − e

(v1 − v2) × B
.
A helyvektorok különbsége a fentebb megadott Rvektor kétszerese, a sebességvektorok különbsége tehát az R vektor
id®beli változását megadó V vektor kétszerese, és hasonló igaz a gyorsulásokra is:
r1 − r2 = 2R, v1 − v2 = 2V, a1 − a2 = 2A.
Ezekkel a jelölésekkel a (3) egyenlet ilyen alakot ölt:
(4) mA= k
e2
|2R|3
2R− e(V × B).
Ez az egyenlet lényegében ugyanolyan, mint ami a feladat els® részére (az álló tömegközéppont esetére) kapott
mozgásegyenlet, tehát  alkalmas kezd®sebesség esetén  ennek is lehet egyenletes körmozgásos megoldása. Valóban,
ha az R(t) vektor nagysága id®ben állandó R érték, és az iránya ω szögsebességgel forog körbe, akkor az egyenletes
forgómozgás ismert képletei szerint A= −ω2
R és V × B = RωB, s így (4) szerint a tömegközéppont körül kering®
elektronpár ω szögsebességére a következ® másodfokú egyenlet adódik:
(5) ω2
−
e
m
Bω +
k
m
e2
4R3
= 0.
Ennek ω-ra sak akkor van valós megoldása, ha a diszkrimináns nemnegatív, amib®l
R ≥
3
r
km
B2
következik. A minimális távolság, ami mellett ilyen mozgás létrejöhet:
dmin = 2Rmin = 2 ·
3
r
km
B2
.
(Ez a feltétel akkor is érvényes kell legyen, amikor a tömegközéppont áll, tehát nem meglep®, hogy a minimális távolság
képlete megegyezik a feladat els® részében kapott korláttal.)
Határozzuk meg a része skék pályáját abban a spe iális esetben, amikor d = dmin, vagyis
R = Rmin =
3
r
km
B2
.
Ezt az értéket (5)-be helyettesítve az elektronok tömegközéppont körüli keringésének szögsebességére
ω =
1
2
·
e
m
B =
1
2
· ωc,
vagyis a tömegközéppont szögsebességének fele adódik.
Indítsuk el a rendszert úgy, ahogy a b) kérdésben szerepelt, vagyis sak az egyik elektront lökjük meg valamekkora
v0 sebességgel, a két része skét összeköt® egyenesre mer®legesen. (Ha a kezd®sebesség iránya más lenne, akkor nyilván
már a mozgás kezdetén megváltozna a két része ske távolsága.) A másik elektron áll, tehát a tömegközéppont
v0
2
sebes-
séggel indul el, és ugyanekkora nagyságú (de egymással ellentétes irányú) mindkét elektronnak a tömegközépponthoz
viszonyított kezd®sebessége.
A tömegközéppont körüli keringésre igaz, hogy
v0
2
= Rω = R
ωc
2
.
Ugyanekkor a tömegközéppont keringésére fennáll
v0
2
= Rtkp ωc, vagyis Rtkp =
R
2
.
Ezek szerint a tömegközéppont feleakkora sugarú körpályán kering, mint körülötte az elektronok. Másrészt a
tömegközéppont keringési ideje is fele akkora, mint a hozzá képest mozgó elektronoké.
Ábrázoljuk vázlatosan a része skék pályáját! A 8. ábrán a szemléletesség kedvéért (szaggatott vonallal) beraj-
zoltuk a tömegközéppont pályáját is. Miközben a meglökött elektron α szöggel elfordul a tömegközéppont körül, a
tömegközéppont 2α szöggel fordul el saját, feleakkora sugarú körpályáján.
8. ábra
T =
2π
ωc
id® alatt a tömegközéppont egy teljes kört tesz meg; a két elektron azonban sak egy-egy félkört fut be
körülötte  éppen helyet serélnek! Ekkor, tehát
T =
2π
e
mB
id® múlva áll meg el®ször a meglökött elektron.
Megjegyzések. 1. A két elektron megrajzolt pályagörbéje (melyet az alakja miatt szívgörbének, kardioidnak is
neveznek) sak akkor ilyen egyszer¶ és áttekinthet®, ha a távolságuk a már említett legkisebb távolság az adott
er®sség¶ mágneses térben. Ha nagyobb távolság állandóságát követeljük meg, akkor már nehezebben áttekinthet®
(általában nem is zárt) pályák és mozgások jöhetnek létre (9. ábra). Még bonyolultabb lesz a helyzet akkor, ha a
kezd®sebesség nem teljesíti a távolság állandóságának megfelel® feltételt. Belátható, hogy még ebben az esetben sem
tudnak a része skék egymástól nagyon eltávolodni, vagy egymáshoz közel kerülni, a távolságuk mindig két széls®érték
között marad, azok között periodikusan ingadozik, amint azt Cserti József a megoldáshoz készített számítógépes
programmal be is mutatta az ünnepélyes eredményhirdetésen (10. ábra).
9. ábra
10. ábra
2. A versenyben szerepl® feladatot inspiráló kutatási terület új fejezetet nyitott a modern szilárdtest
zikában. Ha
például a félvezet®knél fellép® Hall-eektust nagyon ala sony h®mérsékleten vizsgáljuk, a klasszikus elektronmodell
helyett a kvantum
zika törvényeivel tudjuk sak leírni az elektronok fura viselkedését. A mérések szerint az ellenál-
lás er®s mágneses térben nem folytonosan, hanem ugrásszer¶en (kvantumosan) változik. Ez az ellenállás-kvantum
kifejezhet® univerzális mikro
zikai állandókkal (elemi töltés, Plan k-állandó). Az 1985-ben Klaus von Klitzing német

zikusnak ítélt Nobel-díj is a kvantumos Hall-eektus kutatásában elért eredmények fontosságát jelezte. Három  az
USA-ban dolgozó  
zikus, Robert Laughlin, Daniel Tsui és Horst Störmer pedig azért kapott Nobel-díjat 1998-ban,
mert felismerték, hogy er®s mágneses térben az egymással is köl sönható elektronok olyan része skét képesek alkotni,
amelynek töltése az elemi töltés tört része!
A verseny eredménye
I. díjat, s vele a Társulat Eötvös-verseny érmét, ezen kívül 15 ezer forintos pénzjutalmat és 5 ezer forint érték¶
könyvutalványt kapott Sáfár Simon, a BMGE villamosmérnök hallgatója, aki a budaörsi Illyés Gyula Gimnáziumban
érettségizett mint Péter László tanítványa, valamint Varjas Dániel, a dunaújvárosi Szé henyi István Gimnázium 12.
évfolyamú tanulója, Kispál István tanítványa.
II. díjat, s vele 10 ezer forintos pénzjutalmat és 5 ezer forint érték¶ könyvutalványt kapott Rakyta Péter, az
ELTE 
zikus hallgatója, aki a szlovákiai Rév-Komárom magyar tannyelv¶ Selye János Gimnáziumában érettségizett
mint Szabó Endre tanítványa.
III. díjat, s vele 5 ezer forintos pénzjutalmat és 5 ezer forint érték¶ könyvutalványt kapott Németh András, az
ELTE 
zikus hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor
tanítványa; Pálinkás András, a budapesti Piarista Gimnázium 12. évfolyamú tanulója, Futó Béla tanítványa és
Szabó Attila, a BMGE villamosmérnök hallgatója, aki a veszprémi Lovassy László Gimnáziumban érettségizett mint
Varga Vin e tanítványa.
Kiemelt di séretet kapott Mezei Márk, az ELTE 
zikus hallgatója, aki az ELTE Radnóti Miklós Gyakorló
Gimnáziumban érettségizett mint Rá z Mihály tanítványa.
Di séretet kapott Halász Gábor, az ELTE Radnóti Miklós Gyakorló Gimnáziumának 11. évfolyamú tanulója, Ho-
nyek Gyula tanítványa; Kiss Péter, az ELTE Apá zai Csere János Gyakorló Gimnáziumának 12. évfolyamú tanulója,
Zsigri Feren tanítványa; Kómár Péter, a Fazekas Mihály F®városi Gyakorló Gimnázium 12. évfolyamú tanulója,
Dvorák Ce ília tanítványa; Rá z Béla András, az ELTE matematikus hallgatója, aki a Fazekas Mihály F®városi
Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa és Vigh Máté, az ELTE 
zikus hallgatója,
aki a pé si Babits Mihály Gyakorló Gimnáziumban érettségizett mint Kon z Károly és Kotek László tanítványa.
Mind a hat di séretes versenyz® megkapta Hraskó Péter Relativitáselmélet . könyvét, a Typotex Kiadó kiadványát.
Az ünnepélyes eredményhirdetés 2004. november 19-én volt az ELTE lágymányosi épületének konferen iatermében.
Meghívót kaptak erre az 50 és a 25 évvel ezel®tti Eötvös-versenyen díjazott versenyz®k is.
1954-ben még nem volt a Középiskolai Matematikai Lapoknak 
zika rovata, viszont a matematika feladatok megol-
dásában mindhárom kés®bbi nyertes jeleskedett. Közülük választottunk ki egyet-egyet, valamint egykori fényképeiket,
amik megjelentek a Lapokban, így mutattuk be az 50 évvel ezel®tti nyerteseket. Néhány mondattal ®k maguk is üd-
vözölték a mai nyerteseket, és saját életpályájukról is ejtettek pár szót. Vigassy József gépészmérnökként végzett és
az atomenergetika elkötelezett tudósa lett; Siklósi Péter vegyészmérnökként végzett, és az alumíniumiparban vívott
ki nemzetközi elismerést; Zawadowski Alfréd 
zikusként végzett, a szilárdtest
zika ugyan sak nemzetközileg elismert
tudósa lett, akadémikus.
A 25 évvel ezel®tt, 1979-ben díjazott versenyz®k nevében Csordás András szólalt meg, felidézve néhány régi emlékét,
köztük a Mikola-verseny megindításához kap solódókat is.
A Versenybizottság elnöke összehasonlításképpen kivetítette az 50 évvel ezel®tti Eötvös-verseny feladatait, miel®tt
hozzáfogott a mostani feladatok megoldásának ismertetéséhez. Az els® feladat megoldásához kap solódóan kísérleteket
is bemutatott: hol hulahopp karikából kivágott negyedkörökkel, hol az írásvetít® síkjában elhajló rugalmas fémszálakkal.
A feladat megoldását Gnädig Péter egészítette ki energetikai megfontoláson alapuló számításokkal. A második feladat
megoldását ugyan® egy kísérlettel színesítette: hogyan megy fel a víz egy felmelegített, majd ismét leh¶tött kém s®ben.
A harmadik feladat megoldását Cserti József egészítette ki számítógépes prezentá ióval, melynek során még a probléma
modern alkalmazásáról is szót ejtett.
A díjakat az Eötvös Loránd Fizikai Társulat elnöke, Németh Judit akadémikus adta át, meleg szavakkal köszöntve
a nyerteseket és azokat a tanárokat, akik felkészítették ®ket a versenyre.
A díjakkal járó pénzjutalmakat és könyvutalványokat egy magánvállalkozó által erre a élra felajánlott összegb®l
fedezte a Társulat. A Természet Világa folyóirat és a Typotex Könyvkiadó által felajánlott kiadványokból a nyertes
versenyz®k megjelent tanárai válogathattak.
Végül közös soportkép készült az idei és az 50 évvel ezel®tti Eötvös-verseny nyertes versenyz®ir®l, ez is látható e
számunk hátsó borítóján.
