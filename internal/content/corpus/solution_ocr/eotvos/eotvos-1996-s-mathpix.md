---
id: solution-ocr-eotvos-1996-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1996_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: []
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
canonical_solution: false
---
1996 október 25-én rendezte meg az Eötvös Loránd Fizikai Társulat hagyományos őszi tanulóversenyét, az Eötvös versenyt. Budapesten kívül 14 vidéki városban zajlott egyidőben a verseny, amelyen az 1996-ban érettségizettek és középiskolai tanulók vehettek részt. Indulhattak Magyarországon tanuló külföldi diákok és külföldön tanuló magyar, illetve magyar anyanyelvú diákok is. Minden magukkal hozott segédeszközt - tankönyveket, jegyzeteket, zsebszámoló-gépet - szabadon használhattak. Összesen 300 perc állt rendelkezésre a Versenybizottság által kitüzött három feladat megoldására.

Ismertetjük a feladatokat, a feladat helyes megoldását, majd a verseny végeredményét.

1. A földön vízszintes helyzetében egy 20 cm átmérójǘ fatörzs fekszik. Legalább mekkora sebességgel kell elugorjon egy szöcske a földról, hogy át tudja ugrani a fatörzset? (A légellenállást hanyagoljuk el!)

Megoldás. A légellenállást elhanyagolva állíthatjuk, hogy a szöcske pályája parabolaív lesz. Első gondolatunk az, hogy egy olyan parabola adja a kívánt megoldást, amely a hengert legfelül, egyetlen pontban érinti. (Éppen átcsúszik a szöcske a fatörzs felett.) Ezt a sejtést azonban még be kell bizonyítani, mint ahogy az is kiderülhet, hogy nem is igaz. Ezért csak annyit tételezünk fel, hogy a kívánt pálya a fatörzs két oldalán, ugyanolyan magasságban érinti a fatörzset (1. ábra).

Az ábrán $C$ és $C ^ { * }$ jelöli az érintési pontokat. A szöcske az $A$ pontból ugrik el, $v _ { 1 }$ kezdősebességgel, a vízszintessel $\alpha$ szöget bezáró irányban. A fatörzs tengelyével azonos magasságban lévő $B$ (és $B ^ { * }$ ) pontban a szöcske sebessége $v _ { 2 }$, a vízszintessel bezárt szög $\beta$. Az érintési pontokban a sebesség $v _ { 3 }$, a vízszintessel bezárt szög $\gamma$. A parabolapálya legfelső $( D )$ pontjában a sebesség vízszintes irányú, nagysága $v _ { 4 }$.

A feladatban $v _ { 1 }$ minimális értékét kell meghatározni. ( $v _ { 1 }$ ismeretében $v _ { 2 } , v _ { 3 } , v _ { 4 }$ az energiatétel felhasználásával kapható meg, azonban ezek kiszámítása nem volt feladat.)

Mi legyen a független változó, aminek függvényében $v _ { 1 }$ szélsőértékét keressük? Lehetne az elugrás helye, vagyis például az $A G$ távolság. Lehetne az elugrás szöge, amit az ábrán $\alpha$-val jelöltünk. De lehetne akár a $\beta$, akár a $\gamma$ szög is: akármelyik szög meghatározza a másik kettőt. A független változó szerencsés megválasztása lerövidítheti a számításokat.

Válasszuk független változónak a $\gamma$ szöget! Ezzel ugyanis $v _ { 3 }$ kifejezhető, $v _ { 3 }$ segítségével pedig felírható $v _ { 1 }$. Lássuk először $v _ { 3 }$ és $\gamma$ kapcsolatát.

A $C D$ hajítási pályán $t _ { 3 }$-mal jelölve az emelkedés idejét, a függőleges sebességkomponens a $C$ pontban

$$
v _ { 3 } \cdot \sin \gamma = g t _ { 3 } ,
$$

a vízszintes irányú $C F$ elmozdulás pedig

$$
v _ { 3 } \cdot \cos \gamma \cdot t _ { 3 } = R \cdot \sin \gamma .
$$

E két egyenlet összevetéséből kapjuk:

$$
v _ { 3 } ^ { 2 } = \frac { g R } { \cos \gamma } .
$$

Most írjuk fel az energiatételt az $A$ és a $C$ pont között:

$$
\frac { 1 } { 2 } m v _ { 1 } ^ { 2 } = \frac { 1 } { 2 } m v _ { 3 } ^ { 2 } + m g ( R + R \cos \gamma )
$$

Ebből

$$
v _ { 1 } ^ { 2 } = v _ { 3 } ^ { 2 } + 2 g R ( 1 + \cos \gamma ) , v _ { 1 } ^ { 2 } = \frac { g R } { \cos \gamma } + 2 g R ( 1 + \cos \gamma ) , v _ { 1 } ^ { 2 } = 2 g R \left( 1 + \cos \gamma + \frac { 1 } { 2 \cos \gamma } \right) .
$$

Mekkora $\gamma$ szögnél lesz $v _ { 1 }$ a legkisebb? (Első sejtésünk szerint $\gamma = 0$ esetben, amikor épp átcsúszik a szöcske a fatörzs tetején. Ekkor $\cos 0 + \frac { 1 } { 2 \cos 0 } = 1,5$. A kérdés az, hogy lehet-e $\cos \gamma + \frac { 1 } { 2 \cos \gamma } < 1,5$.)

Írjuk fel a számtani és a mértani közép közötti egyenlőtlenséget $\cos \gamma$ és $\frac { 1 } { 2 \cos \gamma }$ esetén! (Feltéve, hogy egyik sem negatív, ami azért igaz, mert $\cos \gamma$ nem negatív, ami viszont $0 \leq \gamma \leq 90 ^ { \circ }$-ból következik.)

$$
\frac { \cos \gamma + \frac { 1 } { 2 \cos \gamma } } { 2 } \geq \sqrt { \cos \gamma \frac { 1 } { 2 \cos \gamma } } = \frac { \sqrt { 2 } } { 2 } .
$$

$\cos \gamma + \frac { 1 } { 2 \cos \gamma }$ legkisebb értéke tehát $\sqrt { 2 }$, ezt $\gamma = 45 ^ { \circ }$-nál veszi fel. Azt a meglepő eredményt kaptuk tehát, hogy az optimális pálya a legfelső pontjában nem érinti a fatörzset, hanem fölé emelkedik. A szöcske helyzeti energiája a legmagasabb pontban nagyobb ugyan, mint az „éppen átcsúszik” esetben, de a mozgási energiája - s az összenergiája is - kisebb! Az eredeti kérdésre a helyes válasz tehát:

$$
v _ { 1 _ { \min } } = \sqrt { 2 g R ( 1 + \sqrt { 2 } ) } \approx 2,2 \frac { \mathrm {~m} } { \mathrm {~s} } .
$$


Az érdekesség kedvéért kiszámíthatjuk $\alpha$ és $\beta$ megfelelő értékeit is ebben az esetben:

$$
\alpha = 67,5 ^ { \circ } \left( = \frac { 3 \pi } { 8 } \right) , \quad \beta = 60 ^ { \circ } \left( = \frac { \pi } { 3 } \right) ;
$$

az elugrási $A G$ távolság pedig $R \left( 1 + \frac { \sqrt { 2 } } { 2 } \right) \approx 17 \mathrm {~cm}$. Az ábrán jelölt $F$ pont a parabola fókuszpontja lesz.
2. Egy 3 dm magas, hengeres, zárt edényben 300 K hốmérsékletű, $10 ^ { 5 } \mathrm {~Pa}$ nyomású levegố van. Kívülrốl történő hứtéssel, illetve fútéssel az alaplap hốmérsékletét 270 K-re csökkentjük, a fedőlapét 330 K-re növeljük, és a továbbiakban folyamatosan ezen a hốmérsékleten tartjuk. (Az edény oldalfala hốszigetelő.)

a) Megváltozik-e a gáz nyomása az eredeti állapothoz képest?
b) Becsüljük meg, hogy mennyivel tolódik el a bezárt gáz tömegközéppontja!

Megoldás. A gáz az edényben kezdetben egyensúlyi állapotban van. Hómérséklete és nyomása is az edényben mindenütt ugyanannyi. (A nehézségi erótérben szükségképpen fellépő függőleges nyomásgradienstő eltekinthetünk: erre utal, hogy a feladat szövegében szerepel a mindenütt egyenlő nyomás konkrét értéke.)

A végállapot már nem egyensúlyi állapot. A nyomás ugyan most is ugyanannyi mindenütt az edényben, a hốmérséklet azonban nem: lentről felfelé 270 K-től 330 K-ig nő. A beállt végállapotban szerencsére a hőmérséklet bármely helyen időben már nem változik. Az ilyen - nem egyensúlyi - állapotot nevezik stacionárius állapotnak, amelyre azonban még fennáll az egyensúlyi állapotra bevezetett

$$
E = \frac { f } { 2 } p V
$$

összefüggés. Elveszti értelmét azonban a gáz egészére vonatkozólag a

$$
p V = N k T
$$

összefüggés, mivel nincs a gáznak egyetlen, jól meghatározott hőmérséklete.
Feltételezhetjük, hogy a stacionárius végállapot is mintegy egyensúlyi állapotban lévố vízszintes rétegekből tevődik össze. Egy-egy ilyen rétegen belül a hőmérséklet állandó; a magasabban lévő réteg hőmérséklete feladatunk esetében mindig nagyobb lesz.

Elfogadható („plauzibilis”) feltevésnek látszik, hogy a rétegek hőmérséklete a magasság lineáris függvénye. (Ez akkor igaz, ha a gáz hốvezetőképessége nem függ a hőmérséklettől. A tapasztalat szerint a vizsgált hőmérséklettartományban ez jó közelítéssel teljesül.) Ezt felhasználva válaszolhatunk az a) kérdésre.

Hasonlítsunk össze két olyan ( $\Delta x$ vastagságú) réteget, amelyek az alap- és a fedőlaptól egyenlő ( $x \leq \frac { h } { 2 }$ ) távolságra vannak! A felső rétegben a hőmérséklet nagyobb, mint az alsóban, ezért itt kevesebb részecske hozza létre ugyanazt a nyomást, mint alul.

$$
\left. \Delta N _ { \text {fent } } = \frac { p A \Delta x } { k T _ { \text {fent } } } \Delta N _ { \text {lent } } = \frac { p A \Delta x } { k T _ { \text {lent } } } \right\} \quad T _ { \text {fent } } > T _ { \text {lent } } \Rightarrow \Delta N _ { \text {fent } } < \Delta N _ { \text {lent } }
$$

Az edény fele magasságában egyezik meg a hőmérséklet a kiindulási, egyensúlyi állapotbeli hőmérséklettel. Azt mondhatjuk, hogy az edény felső felében a gáz felmelegedett, az alsóban lehúlt. De az előbb beláttuk, hogy a felső rétegekben mindig kevesebb gázmolekula van, mint a megfelelő alsó rétegekben - így azt is mondhatjuk, hogy több gáz húlt el, mint amennyi felmelegedett!

Így arra a következtetésre jutottunk, hogy az egész gáz belső energiája csökkent. Mivel $E = \frac { f } { 2 } p V$ a stacionárius végállapotban is fennáll, a kisebb $E$-hez kisebb $p$-nek kell tartoznia ( $f$ és $V$ változatlanok). Tehát a gáz nyomása is csökkent.
b) Becsüljük meg, mennyivel tolódott el a gáz tömegközéppontja!

A becslést úgy végezzük, hogy a gázt egyenlő vastagságú, vízszintes rétegekre osztjuk fel. Feltesszük, hogy egyegy rétegen belül egyensúly van, a réteg hőmérséklete állandó. A felosztást finomítva kaphatunk egyre pontosabb becsléseket.

Példaképpen nézzük az első, durva becslést, amikor csupán két „rétegre” osztjuk fel a hengert: legyen az edény alsó felében 285 K, a felső felében 315 K a hőmérséklet. A két rétegben levő tömegek aránya:

$$
\frac { m _ { \text {fent } } } { m _ { \text {lent } } } = \frac { 285 } { 315 } = \frac { 7,5 \mathrm {~cm} - \Delta h } { 7,5 \mathrm {~cm} + \Delta h } , \quad \text { ahonnan } \quad \Delta h = 0,4 \mathrm {~cm} .
$$

Második közelítésben osszuk három egyenlő részre a hengert; a középső réteg hőmérséklete legyen 300 K, a felsóé 330 K, az alsóé 270 K. Az előzőhöz hasonló gondolatmenettel a tömegközéppont süllyedésére $\Delta h = 0,67 \mathrm {~cm}$ adódik.

Harmadik közelítésben osszuk öt egyenlő vastag rétegre a hengert; az egyes rétegek hőmérséklete fentről lefelé legyen: $330 \mathrm {~K} , 315 \mathrm {~K} , 300 \mathrm {~K} , 285 \mathrm {~K} , 270 \mathrm {~K}$. Ebben az esetben valamivel hosszabb számolás után $\Delta h = 0,60 \mathrm {~cm}$-t kapunk.


Meddig folytassuk ezt? Becslésnek már az elsőnek kapott 0, 4 cm is elfogadható. A pontos eredmény (amelynek meghatározását nem kérte a feladat!) integrálszámítással kapható, értéke $\Delta h = 0,5 \mathrm {~cm}$.
3. Szigetelố fonálon függő, 1 cm átmérốjü mũanyag golyó felszínén $10 ^ { - 8 } \mathrm { C }$ töltés helyezkedik el egyenletesen. A golyót egy széles, nagy tálban lévó sós víz fölé engedjük úgy, hogy az alja 1 cm-re legyen a víztól. A víz felszíne a golyó alatt egy picit megemelkedik. Mekkora ez az emelkedés? (A felületi feszültség szerepét elhanyagolhatjuk, a sós víz súrữségét vehetjük $1000 \mathrm {~kg} / \mathrm { m } ^ { 3 }$-nek.)

Megoldás. A sós víz elektromosan jól vezetó folyadék (elektrolit). Mind a pozitív, mind a negatív töltéshordozók (ionok) könnyen elmozdulnak benne. A közeledő, feltöltött golyó hatására az általa vonzott, vele ellentétes töltésú ionok igyekeznek a golyó felé elmozdulni, míg a golyóval azonos töltésú ionok a taszító erő hatására ellenkezó irányban mozdulnak el. Ezáltal megszúnik a folyadék „térfogati semlegessége” úgy, hogy

1. az eredő elektromos tér erővonalai a golyó és a folyadék közötti térben merőlegesen futnak be a folyadék felszínére;
2. a folyadék belsejében a felszín alatti tartományokban zérus lesz az eredő térerősség.

Természetesen ekkor a golyó a vele ellentétes töltésú folyadékfelszínt magához akarja vonzani, fel akarja emelni. Fel is emeli egy picit; ezt a hatást akadályozza a folyadék felületi feszültsége, valamint a felemelt folyadék saját súlya. Feladatunkban a felületi feszültség szerepét elhanyagolhatjuk, így a folyadék felszíne a golyó alatt addig emelkedik fel, amíg a felületegységre ható elektrosztatikus emelő erő egyenlő nem lesz a felemelkedett folyadékréteg hidrosztatikai nyomásával.

Nem tudjuk, hogy milyen lesz pontosan a kialakuló folyadékfelület alakja. Biztos, hogy kevéssé tér el a síkfelülettől, erre utal a feladat szövege is („picit” megemelkedik) - tehát a levegőben kialakuló eredő elektromos tér meghatározásához alkalmazhatjuk a (sík) tükörtöltés módszerét. Másrészt elegendő lesz figyelmünket egyetlen pontra, a felemelkedő folyadékfelület legfelső $P$ pontjára koncentrálni; ennek emelkedése az, amit ki kell számítanunk.

A 2. ábrán $P$-vel jelölt pontban a $Q$ töltéstől származó térerősség

$$
E _ { 1 } = \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { Q } { ( 3 r ) ^ { 2 } } .
$$

A folyadék felületén kialakuló töltéseloszlás hatását a felszín alatt $3 r$ mélységben elképzelt $- Q$ nagyságú tükörtöltés hatásával helyettesítjük (3. ábra). A tükörtöltéstől származó térerősség a $P$ pontban ugyanakkora és ugyanolyan irányú, $\operatorname { mint } E _ { 1 }$. Ezért az eredő térerősség:

$$
E = 2 E _ { 1 } = \frac { 1 } { 2 \pi \varepsilon _ { 0 } } \frac { Q } { ( 3 r ) ^ { 2 } } .
$$

A felületegységre jutó töltés a $P$ pontban Gauss tétele alapján:

$$
\sigma = \varepsilon _ { 0 } E = \frac { 1 } { 2 \pi } \frac { Q } { ( 3 r ) ^ { 2 } } .
$$

A folyadék felszínén a felületegységre ható erő a $\sigma$ felületi töltéssürúség és a golyótól származó $E _ { 1 }$ elektromos térerősség szorzata:

$$
\frac { F } { A } = \sigma E _ { 1 } .
$$

Ez az a felületegységre jutó, függőlegesen felfelé emelő eró a $P$ pontban, amely egyensúly esetén egyenló lesz a $P$ pontbeli $h$ emelkedésből származó hidrosztatikai nyomással:

$$
\frac { F } { A } = \varrho g h .
$$

A sós víz felszínének $h$ emelkedését tehát az alábbi egyenletből számíthatjuk ki:

$$
\frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { Q } { ( 3 r ) ^ { 2 } } \cdot \varepsilon _ { 0 } \cdot 2 \frac { 1 } { 4 \pi \varepsilon _ { 0 } } \frac { Q } { ( 3 r ) ^ { 2 } } = \varrho g h .
$$

A megadott, illetve ismert értékeket behelyettesítve az emelkedés magasságára kapjuk:

$$
h \approx 0,29 \mathrm {~mm} .
$$

Ez az érték valóban „pici" a golyó sugarához, illetve a víztől mért távolságához képest, jogos volt a síktükör-töltés közelítés. (Hasonlóképp jogos volt a golyó töltését a középpontjába helyezett ponttöltéssel helyettesíteni: müanyag golyóról lévén szó, a víz felszínén kialakuló töltéssürúség vonzása nem tudja átrendezni, megváltoztatni a szigetelőre felvitt egyenletes töltéseloszlást. Azt is be lehet látni, hogy a víz megemelkedéséből adódó görbületi nyomás a hidrosztatikai nyomásnál sokkal kisebb, a felületi feszültség szerepét tehát jogosan hanyagoltuk el.)

## A verseny végeredménye


Elsó́ díjat nyert
Kurucz Zoltán, az ELTE fizikus hallgatója, aki Szolnokon, a Varga Katalin Gimnáziumban érettségizett, mint Vincze Gábor tanítványa.

Második díjat nyertek egyenlő (2-4.) helyezésben:
Biró Domokos Botond a Kolozsvári Műszaki Egyetem számítástechnika-automatizálás szakos hallgatója, aki Marosvásárhelyen, a Bolyai Farkas Elméleti Líceumban érettségizett, mint Bíró Tibor tanítványa;

Tóth Gábor Zsolt, az ELTE fizikus hallgatója, aki Budapesten, az Árpád Gimnáziumban érettségizett, mint Vankó Péter tanítványa;

Varga Tamás, az ELTE fizikus hallgatója, aki Révkomáromban, a Selye János Gimnáziumban érettségizett, mint Szabó Endre tanítványa.

Harmadik díjat nyertek egyenlő (5-10.) helyezésben:
Gröller Ákos, az ELTE matematikus hallgatója, aki Budapesten, a Fazekas Mihály Fővárosi Gyakorló Gimnáziumban érettségizett, mint Horváth Gábor tanítványa;

Hochsteiger Ákos, a szekszárdi Garay János Gimnázium IV. osztályos tanulója, Pesti Gyula tanítványa;
Kovács András, a BME múszaki informatika szakos hallgatója, aki Budapesten, a Fazekas Mihály Fővárosi Gyakorló Gimnáziumban érettségizett, mint Horváth Gábor tanítványa;

Mátrai Tamás, a budapesti, a Fazekas Mihály Fóvárosi Gyakorló Gimnázium IV. osztályos tanulója, Horváth Gábor tanítványa;

Négyesi Gábor, az egri Szilágyi Erzsébet Gimnázium IV. osztályos tanulója, Flaskay Miklós és Burom Mária tanítványa;

Sexty Dénes, az egri Neumann János Közgazdasági Szakközépiskola és Gimnázium IV. osztályos tanulója, $P e -$ csenye Pálné tanítványa.

Négyesi G., Sexty D., Gröller Á., Kovács A., Varga T., Kurucz Z., Biró D. B., Hochsteiger Á., Tóth G. Zs., Kálmán
B., Nagy Z., Nagy Sz., Nyakas P.

Dicséretben részesültek egyenlő (11-15.) helyezésben:
Kálmán Barnabás, a BME múszaki informatika szakos hallgatója, aki Budapesten, az ELTE Apáczai Csere János Gyakorló Gimnáziumában érettségizett, mint Flórik György tanítványa; Nagy Szilvia, a BME mérnök-fizikus hallgatója, aki Győrben, a Révai Miklós Gimnáziumban érettségizett, mint Kolozsváry Ernốné és Székely László tanítványa; Nagy Zoltán, a JATE fizikus hallgatója, aki Szegeden, a JATE Ságvári Endre Gyakorló Gimnáziumában érettségizett, mint Homolya Ernó́ tanítványa; Nyakas Péter, a zalaegerszegi Zrínyi Miklós Gimnázium IV. osztályos tanulója, Vadvári Tibor tanítványa; Wagner Róbert, a pannonhalmi Bencés Gimnázium IV. osztályos tanulója, Hirka Antal és Rábai László tanítványa.

Az ünnepélyes eredményhirdetésre 1996. november 29-én került sor. Itt nemcsak a feladatok helyes megoldásával ismerkedhettek meg a megjelent diákok és tanárok, de egy lézer fényének felhasználásával megfigyelhették a sós víz felszínének pici felemelkedését is.

Megemlékeztünk a 100 évvel ezelőtti Eötvös-verseny nyerteseiről: Visnya Aladárról és Zemplén Győzóről. A díjak átadására a Versenybizottság két volt Eötvös verseny nyertest kért fel; Bakos Tibor éppen 70 évvel ezelőtt, 1926-ban ismételte meg Teller Ede előző évi bravúrját: fizikából is és matematikából is megnyerte az I. díjat a Társulat őszi tanulóversenyén, és ugyanez sikerült 1940-ben Hoffmann Tibornak is. Az Eötvös Társulaton kívül a Nemzeti Tankönyvkiadó is hozzájárult a nyertesek jutalmazásához. A diákokat felkészítő tanárok három meghívott kiadó ajándékkönyveiből válogattak: a Nemzeti Tankönyvkiadó, a Calibra és a Talentum legújabb ismeretterjesztő és tankönyveit hozták el az eredményhirdetésre.

Két régi verseny-nyertes, Hoffmann Tibor és Bakos Tibor, valamint a versenybizottság elnöke (e cikk szerzője) gratulál az idei győztesnek, Kurucz Zoltánnak

A Duna Televízió most már harmadik éve saját híradójában tudósítja határainkon inneni és túli nézőit az ünnepi eseményről. Köszönet érte!

Radnai Gyula
![](../../../figures/solution-ocr/1ce8c45a6ab2cc3abab9c45e.jpg)


![](../../../figures/solution-ocr/f2ef9484acac6438d7257a83.jpg)
