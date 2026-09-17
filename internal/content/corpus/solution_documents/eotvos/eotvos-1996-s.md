---
id: solution-document-eotvos-1996-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1996_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [eotvos-1996-charged-water, eotvos-1996-gas-heating, eotvos-1996-grasshopper-jump]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/eotvos/1996_S.pdf."
---

1996 október 25-én rendezte meg az Eötvös Loránd Fizikai Társulat hagyományos ®szi tanulóversenyét, az Eötvös
versenyt. Budapesten kívül 14 vidéki városban zajlott egyid®ben a verseny, amelyen az 1996-ban érettségizettek és
középiskolai tanulók vehettek részt. Indulhattak Magyarországon tanuló külföldi diákok és külföldön tanuló magyar,
illetve magyar anyanyelv¶ diákok is. Minden magukkal hozott segédeszközt  tankönyveket, jegyzeteket, zsebszámoló-
gépet  szabadon használhattak. Összesen 300 per állt rendelkezésre a Versenybizottság által kit¶zött három feladat
megoldására.
Ismertetjük a feladatokat, a feladat helyes megoldását, majd a verseny végeredményét.
1. A földön vízszintes helyzetében egy 20 m átmér®j¶ fatörzs fekszik. Legalább mekkora sebességgel kell elugorjon
egy szö ske a földr®l, hogy át tudja ugrani a fatörzset? (A légellenállást hanyagoljuk el!)
Megoldás. A légellenállást elhanyagolva állíthatjuk, hogy a szö ske pályája parabolaív lesz. Els® gondolatunk az,
hogy egy olyan parabola adja a kívánt megoldást, amely a hengert legfelül, egyetlen pontban érinti. (Éppen át súszik
a szö ske a fatörzs felett.) Ezt a sejtést azonban még be kell bizonyítani, mint ahogy az is kiderülhet, hogy nem is igaz.
Ezért sak annyit tételezünk fel, hogy a kívánt pálya a fatörzs két oldalán, ugyanolyan magasságban érinti a fatörzset
(1. ábra).
Az ábrán C és C∗
jelöli az érintési pontokat. A szö ske az A pontból ugrik el, v1 kezd®sebességgel, a vízszintessel
α szöget bezáró irányban. A fatörzs tengelyével azonos magasságban lév® B (és B∗
) pontban a szö ske sebessége v2, a
vízszintessel bezárt szög β. Az érintési pontokban a sebesség v3, a vízszintessel bezárt szög γ. A parabolapálya legfels®
(D) pontjában a sebesség vízszintes irányú, nagysága v4.
A feladatban v1 minimális értékét kell meghatározni. (v1 ismeretében v2, v3, v4 az energiatétel felhasználásával
kapható meg, azonban ezek kiszámítása nem volt feladat.)
Mi legyen a független változó, aminek függvényében v1 széls®értékét keressük? Lehetne az elugrás helye, vagyis
például az AG távolság. Lehetne az elugrás szöge, amit az ábrán α-val jelöltünk. De lehetne akár a β, akár a γ
szög is: akármelyik szög meghatározza a másik kett®t. A független változó szeren sés megválasztása lerövidítheti a
számításokat.
Válasszuk független változónak a γ szöget! Ezzel ugyanis v3 kifejezhet®, v3 segítségével pedig felírható v1. Lássuk
el®ször v3 és γ kap solatát.
A CD hajítási pályán t3-mal jelölve az emelkedés idejét, a függ®leges sebességkomponens a C pontban
v3 · sinγ = gt3,
a vízszintes irányú CF elmozdulás pedig
v3 · cosγ · t3 = R · sinγ.
E két egyenlet összevetéséb®l kapjuk:
v2
3 =
gR
cosγ
.
Most írjuk fel az energiatételt az A és a C pont között:
1
2
mv2
1 =
1
2
mv2
3 + mg(R + Rcosγ)
Ebb®l
v2
1 = v2
3 + 2gR(1 + cosγ),v2
1 =
gR
cosγ
+ 2gR(1 + cosγ),v2
1 = 2gR

1 + cosγ +
1
2cosγ

.
Mekkora γ szögnél lesz v1 a legkisebb? (Els® sejtésünk szerint γ = 0 esetben, amikor épp át súszik a szö ske a
fatörzs tetején. Ekkor cos0 +
1
2cos0
= 1,5. A kérdés az, hogy lehet-e cosγ +
1
2cosγ
< 1,5.)
Írjuk fel a számtani és a mértani közép közötti egyenl®tlenséget cosγ és
1
2cosγ
esetén! (Feltéve, hogy egyik sem
negatív, ami azért igaz, mert cosγ nem negatív, ami viszont 0 ≤ γ ≤ 90◦
-ból következik.)
cosγ + 1
2 cosγ
2
≥
r
cosγ
1
2cosγ
=
√
2
2
.
cosγ +
1
2cosγ
legkisebb értéke tehát
√
2, ezt γ = 45◦
-nál veszi fel. Azt a meglep® eredményt kaptuk tehát, hogy
az optimális pálya a legfels® pontjában nem érinti a fatörzset, hanem fölé emelkedik. A szö ske helyzeti energiája a
legmagasabb pontban nagyobb ugyan, mint az éppen át súszik esetben, de a mozgási energiája  s az összenergiája
is  kisebb! Az eredeti kérdésre a helyes válasz tehát:
v1min =
r
2gR

1 +
√
2

≈ 2,2
m
s
.Az érdekesség kedvéért kiszámíthatjuk α és β megfelel® értékeit is ebben az esetben:
α = 67,5◦

=
3π
8

, β = 60◦

=
π
3

;
az elugrási AG távolság pedig R 1 +
√
2
2
!
≈ 17 m. Az ábrán jelölt F pont a parabola fókuszpontja lesz.
2. Egy 3 dm magas, hengeres, zárt edényben 300 K h®mérséklet¶, 105
Pa nyomású leveg® van. Kívülr®l történ®
h¶téssel, illetve f¶téssel az alaplap h®mérsékletét 270 K-re sökkentjük, a fed®lapét 330 K-re növeljük, és a továbbiakban
folyamatosan ezen a h®mérsékleten tartjuk. (Az edény oldalfala h®szigetel®.)
a) Megváltozik-e a gáz nyomása az eredeti állapothoz képest?
b) Be süljük meg, hogy mennyivel tolódik el a bezárt gáz tömegközéppontja!
Megoldás. A gáz az edényben kezdetben egyensúlyi állapotban van. H®mérséklete és nyomása is az edényben
mindenütt ugyanannyi. (A nehézségi er®térben szükségképpen fellép® függ®leges nyomásgradienst®l eltekinthetünk:
erre utal, hogy a feladat szövegében szerepel a mindenütt egyenl® nyomás konkrét értéke.)
A végállapot már nem egyensúlyi állapot. A nyomás ugyan most is ugyanannyi mindenütt az edényben, a h®mérsék-
let azonban nem: lentr®l felfelé 270 K-t®l 330 K-ig n®. A beállt végállapotban szeren sére a h®mérséklet bármely helyen
id®ben már nem változik. Az ilyen  nem egyensúlyi  állapotot nevezik sta ionárius állapotnak, amelyre azonban még
fennáll az egyensúlyi állapotra bevezetett
E =
f
2
pV
összefüggés. Elveszti értelmét azonban a gáz egészére vonatkozólag a
pV = NkT
összefüggés, mivel nin s a gáznak egyetlen, jól meghatározott h®mérséklete.
Feltételezhetjük, hogy a sta ionárius végállapot is mintegy egyensúlyi állapotban lév® vízszintes rétegekb®l tev®dik
össze. Egy-egy ilyen rétegen belül a h®mérséklet állandó; a magasabban lév® réteg h®mérséklete feladatunk esetében
mindig nagyobb lesz.
Elfogadható (plauzibilis) feltevésnek látszik, hogy a rétegek h®mérséklete a magasság lineáris függvénye. (Ez akkor
igaz, ha a gáz h®vezet®képessége nem függ a h®mérséklett®l. A tapasztalat szerint a vizsgált h®mérséklettartományban
ez jó közelítéssel teljesül.) Ezt felhasználva válaszolhatunk az a) kérdésre.
Hasonlítsunk össze két olyan (∆x vastagságú) réteget, amelyek az alap- és a fed®laptól egyenl® (x ≤
h
2
) távolságra
vannak! A fels® rétegben a h®mérséklet nagyobb, mint az alsóban, ezért itt kevesebb része ske hozza létre ugyanazt a
nyomást, mint alul.
∆Nfent =
pA∆x
kTfent
∆Nlent =
pA∆x
kTlent

Tfent > Tlent ⇒ ∆Nfent < ∆Nlent
Az edény fele magasságában egyezik meg a h®mérséklet a kiindulási, egyensúlyi állapotbeli h®mérséklettel. Azt
mondhatjuk, hogy az edény fels® felében a gáz felmelegedett, az alsóban leh¶lt. De az el®bb beláttuk, hogy a fels®
rétegekben mindig kevesebb gázmolekula van, mint a megfelel® alsó rétegekben  így azt is mondhatjuk, hogy több
gáz h¶lt el, mint amennyi felmelegedett!
Így arra a következtetésre jutottunk, hogy az egész gáz bels® energiája sökkent. Mivel E =
f
2
pV a sta ionárius
végállapotban is fennáll, a kisebb E-hez kisebb p-nek kell tartoznia (f és V változatlanok). Tehát a gáz nyomása is
sökkent.
b) Be süljük meg, mennyivel tolódott el a gáz tömegközéppontja!
A be slést úgy végezzük, hogy a gázt egyenl® vastagságú, vízszintes rétegekre osztjuk fel. Feltesszük, hogy egy-
egy rétegen belül egyensúly van, a réteg h®mérséklete állandó. A felosztást nomítva kaphatunk egyre pontosabb
be sléseket.
Példaképpen nézzük az els®, durva be slést, amikor supán két rétegre osztjuk fel a hengert: legyen az edény alsó
felében 285 K, a fels® felében 315 K a h®mérséklet. A két rétegben lev® tömegek aránya:
mfent
mlent
=
285
315
=
7,5 cm − ∆h
7,5 cm + ∆h
, ahonnan ∆h = 0,4 cm.
Második közelítésben osszuk három egyenl® részre a hengert; a középs® réteg h®mérséklete legyen 300 K, a fels®é
330 K, az alsóé 270 K. Az el®z®höz hasonló gondolatmenettel a tömegközéppont süllyedésére ∆h = 0,67 m adódik.
Harmadik közelítésben osszuk öt egyenl® vastag rétegre a hengert; az egyes rétegek h®mérséklete fentr®l lefelé
legyen: 330 K, 315 K, 300 K, 285 K, 270 K. Ebben az esetben valamivel hosszabb számolás után ∆h = 0,60 m-t
kapunk.Meddig folytassuk ezt? Be slésnek már az els®nek kapott 0,4 m is elfogadható. A pontos eredmény (amelynek
meghatározását nem kérte a feladat!) integrálszámítással kapható, értéke ∆h = 0,5 m.
3. Szigetel® fonálon függ®, 1 m átmér®j¶ m¶anyag golyó felszínén 10−8
C töltés helyezkedik el egyenletesen. A
golyót egy széles, nagy tálban lév® sós víz fölé engedjük úgy, hogy az alja 1 m-re legyen a vízt®l. A víz felszíne a
golyó alatt egy pi it megemelkedik. Mekkora ez az emelkedés? (A felületi feszültség szerepét elhanyagolhatjuk, a sós víz
s¶r¶ségét vehetjük 1000 kg/m
3
-nek.)
Megoldás. A sós víz elektromosan jól vezet® folyadék (elektrolit). Mind a pozitív, mind a negatív töltéshordozók
(ionok) könnyen elmozdulnak benne. A közeled®, feltöltött golyó hatására az általa vonzott, vele ellentétes töltés¶
ionok igyekeznek a golyó felé elmozdulni, míg a golyóval azonos töltés¶ ionok a taszító er® hatására ellenkez® irányban
mozdulnak el. Ezáltal megsz¶nik a folyadék térfogati semlegessége úgy, hogy
1. az ered® elektromos tér er®vonalai a golyó és a folyadék közötti térben mer®legesen futnak be a folyadék felszínére;
2. a folyadék belsejében a felszín alatti tartományokban zérus lesz az ered® térer®sség.
Természetesen ekkor a golyó a vele ellentétes töltés¶ folyadékfelszínt magához akarja vonzani, fel akarja emelni.
Fel is emeli egy pi it; ezt a hatást akadályozza a folyadék felületi feszültsége, valamint a felemelt folyadék saját súlya.
Feladatunkban a felületi feszültség szerepét elhanyagolhatjuk, így a folyadék felszíne a golyó alatt addig emelkedik fel,
amíg a felületegységre ható elektrosztatikus emel® er® egyenl® nem lesz a felemelkedett folyadékréteg hidrosztatikai
nyomásával.
Nem tudjuk, hogy milyen lesz pontosan a kialakuló folyadékfelület alakja. Biztos, hogy kevéssé tér el a síkfelülett®l,
erre utal a feladat szövege is (pi it megemelkedik)  tehát a leveg®ben kialakuló ered® elektromos tér meghatározásá-
hoz alkalmazhatjuk a (sík) tükörtöltés módszerét. Másrészt elegend® lesz gyelmünket egyetlen pontra, a felemelked®
folyadékfelület legfels® P pontjára kon entrálni; ennek emelkedése az, amit ki kell számítanunk.
A 2. ábrán P-vel jelölt pontban a Q töltést®l származó térer®sség
E1 =
1
4πε0
Q
(3r)2
.
A folyadék felületén kialakuló töltéseloszlás hatását a felszín alatt 3r mélységben elképzelt −Q nagyságú tükörtöltés
hatásával helyettesítjük (3. ábra). A tükörtöltést®l származó térer®sség a P pontban ugyanakkora és ugyanolyan irányú,
mint E1. Ezért az ered® térer®sség:
E = 2E1 =
1
2πε0
Q
(3r)2
.
A felületegységre jutó töltés a P pontban Gauss tétele alapján:
σ = ε0E =
1
2π
Q
(3r)2
.
A folyadék felszínén a felületegységre ható er® a σ felületi töltéss¶r¶ség és a golyótól származó E1 elektromos
térer®sség szorzata:
F
A
= σE1.
Ez az a felületegységre jutó, függ®legesen felfelé emel® er® a P pontban, amely egyensúly esetén egyenl® lesz a P
pontbeli h emelkedésb®l származó hidrosztatikai nyomással:
F
A
= ̺gh.
A sós víz felszínének h emelkedését tehát az alábbi egyenletb®l számíthatjuk ki:
1
4πε0
Q
(3r)2
· ε0 · 2
1
4πε0
Q
(3r)2
= ̺gh.
A megadott, illetve ismert értékeket behelyettesítve az emelkedés magasságára kapjuk:
h ≈ 0,29 mm.
Ez az érték valóban pi i a golyó sugarához, illetve a vízt®l mért távolságához képest, jogos volt a síktükör-töltés
közelítés. (Hasonlóképp jogos volt a golyó töltését a középpontjába helyezett ponttöltéssel helyettesíteni: m¶anyag
golyóról lévén szó, a víz felszínén kialakuló töltéss¶r¶ség vonzása nem tudja átrendezni, megváltoztatni a szigete-
l®re felvitt egyenletes töltéseloszlást. Azt is be lehet látni, hogy a víz megemelkedéséb®l adódó görbületi nyomás a
hidrosztatikai nyomásnál sokkal kisebb, a felületi feszültség szerepét tehát jogosan hanyagoltuk el.)
A verseny végeredményeEls® díjat nyert
Kuru z Zoltán, az ELTE zikus hallgatója, aki Szolnokon, a Varga Katalin Gimnáziumban érettségizett, mint
Vin ze Gábor tanítványa.
Második díjat nyertek egyenl® (24.) helyezésben:
Biró Domokos Botond a Kolozsvári M¶szaki Egyetem számításte hnikaautomatizálás szakos hallgatója, aki
Marosvásárhelyen, a Bolyai Farkas Elméleti Lí eumban érettségizett, mint Bíró Tibor tanítványa;
Tóth Gábor Zsolt, az ELTE zikus hallgatója, aki Budapesten, az Árpád Gimnáziumban érettségizett, mint
Vankó Péter tanítványa;
Varga Tamás, az ELTE zikus hallgatója, aki Révkomáromban, a Selye János Gimnáziumban érettségizett, mint
Szabó Endre tanítványa.
Harmadik díjat nyertek egyenl® (510.) helyezésben:
Gröller Ákos, az ELTE matematikus hallgatója, aki Budapesten, a Fazekas Mihály F®városi Gyakorló Gimnázi-
umban érettségizett, mint Horváth Gábor tanítványa;
Ho hsteiger Ákos, a szekszárdi Garay János Gimnázium IV. osztályos tanulója, Pesti Gyula tanítványa;
Ková s András, a BME m¶szaki informatika szakos hallgatója, aki Budapesten, a Fazekas Mihály F®városi
Gyakorló Gimnáziumban érettségizett, mint Horváth Gábor tanítványa;
Mátrai Tamás, a budapesti, a Fazekas Mihály F®városi Gyakorló Gimnázium IV. osztályos tanulója, Horváth
Gábor tanítványa;
Négyesi Gábor, az egri Szilágyi Erzsébet Gimnázium IV. osztályos tanulója, Flaskay Miklós és Burom Mária
tanítványa;
Sexty Dénes, az egri Neumann János Közgazdasági Szakközépiskola és Gimnázium IV. osztályos tanulója, Pe-
senye Pálné tanítványa.
Négyesi G., Sexty D., Gröller Á., Ková s A., Varga T., Kuru z Z., Biró D. B., Ho hsteiger Á., Tóth G. Zs., Kálmán
B., Nagy Z., Nagy Sz., Nyakas P.
Di séretben részesültek egyenl® (1115.) helyezésben:
Kálmán Barnabás, a BME m¶szaki informatika szakos hallgatója, aki Budapesten, az ELTE Apá zai Csere
János Gyakorló Gimnáziumában érettségizett, mint Flórik György tanítványa; Nagy Szilvia, a BME mérnökzikus
hallgatója, aki Gy®rben, a Révai Miklós Gimnáziumban érettségizett, mint Kolozsváry Ern®né és Székely László
tanítványa; Nagy Zoltán, a JATE zikus hallgatója, aki Szegeden, a JATE Ságvári Endre Gyakorló Gimnáziumában
érettségizett, mint Homolya Ern® tanítványa; Nyakas Péter, a zalaegerszegi Zrínyi Miklós Gimnázium IV. osztályos
tanulója, Vadvári Tibor tanítványa; Wagner Róbert, a pannonhalmi Ben és Gimnázium IV. osztályos tanulója,
Hirka Antal és Rábai László tanítványa.
Az ünnepélyes eredményhirdetésre 1996. november 29-én került sor. Itt nem sak a feladatok helyes megoldásával
ismerkedhettek meg a megjelent diákok és tanárok, de egy lézer fényének felhasználásával meggyelhették a sós víz
felszínének pi i felemelkedését is.
Megemlékeztünk a 100 évvel ezel®tti Eötvös-verseny nyerteseir®l: Visnya Aladárról és Zemplén Gy®z®r®l. A díjak
átadására a Versenybizottság két volt Eötvös verseny nyertest kért fel; Bakos Tibor éppen 70 évvel ezel®tt, 1926-ban
ismételte meg Teller Ede el®z® évi bravúrját: zikából is és matematikából is megnyerte az I. díjat a Társulat ®szi tanu-
lóversenyén, és ugyanez sikerült 1940-ben Homann Tibornak is. Az Eötvös Társulaton kívül a Nemzeti Tankönyvkiadó
is hozzájárult a nyertesek jutalmazásához. A diákokat felkészít® tanárok három meghívott kiadó ajándékkönyveib®l
válogattak: a Nemzeti Tankönyvkiadó, a Calibra és a Talentum legújabb ismeretterjeszt® és tankönyveit hozták el az
eredményhirdetésre.
Két régi verseny-nyertes, Homann Tibor és Bakos Tibor, valamint a versenybizottság elnöke (e ikk szerz®je)
gratulál az idei gy®ztesnek, Kuru z Zoltánnak
A Duna Televízió most már harmadik éve saját híradójában tudósítja határainkon inneni és túli néz®it az ünnepi
eseményr®l. Köszönet érte!
Radnai Gyula
γ
α A A*
B B*
C C*
D
E
F
O
G
v1
v2
3 v v4
β
γ
P 3r
rQ
-Q
P
