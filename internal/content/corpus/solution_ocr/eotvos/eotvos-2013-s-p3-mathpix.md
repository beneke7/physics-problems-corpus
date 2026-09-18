---
id: solution-ocr-eotvos-2013-s-p3
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2013_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2013-flexible-wire]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. feladat. $B$ indukciójú, homogén, erốs mágneses térben egy $\ell$ hosszúságú, könnyứ, vékony, hajlékony vezetốhuzal végpontjait az egymástól $\ell / 2$ távolságra lévó $P _ { 1 }$ és $P _ { 2 }$ pontokban rögzítettük. A huzalon $I$ erốsségü egyenáramot vezetünk át. Milyen alakot vesz fel a vezeték, ha a mágneses indukcióvektor

a) meróleges a $P _ { 1 } P _ { 2 }$ szakaszra?
b) párhuzamos a $P _ { 1 } P _ { 2 }$ szakasszal?

Mekkora erốvel húzza a vezeték a rögzítési pontokat az egyes esetekben?
(Vigh Máté)
Megoldás. a) A vezetőhuzal a mágneses térerősségre meróleges síkban fog elhelyezkedni. Mivel a mágneses tér által a vezető darabkáira kifejtett erő mindenhol merőleges a huzalra, ezért a vezeték minden pontjában ugyanakkora eró ébred. A vezeték $r$ görbületi sugarú darabkájában $F = I B r$ nagyságú erő ébred. Ez könnyen belátható a vezeték kis darabkájára ható erők vizsgálatával (5. ábra).


![](../../../figures/solution-ocr/da1efd9a3fc2a2666389eb49.jpg)
5. ábra

Az erőegyensúly:

$$
2 F \sin \varphi = I B \Delta \ell .
$$

Geometriából:

$$
\Delta \ell = 2 \varphi r .
$$

A kis szögek miatt $\sin \varphi \approx \varphi$, ebből valóban az $F = I B r$ eredményre jutunk. Az eddigiekből következik, hogy a huzal körív alakot vesz fel. (Elvben a többmenetes „körtekercs" alak is egyensúlyi helyzet, ez azonban labilis, így nem is alakítható ki, ahogy egy ceruzát sem lehet a hegyére állítani.)

A körívre a következő geometriai összefüggéseknek kell teljesülniük (6. ábra):

$$
\begin{aligned}
2 r \sin \alpha & = \ell / 2 , \\
2 r ( \pi - \alpha ) & = \ell ,
\end{aligned}
$$

ezekből a $2 \sin \alpha = \pi - \alpha$ transzcendens egyenletre jutunk, melynek numerikus megoldása $\alpha \approx 1,246 \mathrm { rad } = 71,40 ^ { \circ }$. Ezt visszaírva a fenti egyenletekbe a kör sugarára $r \approx 0,26 \ell$, a vezetéket feszítő erőre pedig $F \approx 0,26 I B \ell$ értéket kapunk.
![](../../../figures/solution-ocr/93f4f013d292ec6ff8a390b6.jpg)
b) Ebben az esetben a vezetőhuzal darabkáira nem hat a mágneses térerősséggel párhuzamos irányú erố, ezért a vezetéket feszítő erő $B$-irányú komponense állandó. A mágneses mező által a vezető darabkáira kifejtett erő mindenhol meróleges a huzalra, ezért a vezeték minden pontjában ugyanakkora erő ébred. E két ténybő́l következik, hogy a vezetéket feszítő erő mágneses térerősségre merőleges komponense állandó kell legyen, azaz a mágneses térerősség irányából nézve a vezetékre egy kört fogunk látni, a huzal alakja pedig egyenletes menetemelkedésú, a mágneses térerósséggel párhuzamos tengelyú, egymenetes csavarvonal lesz (lásd a 7. ábrát). (Elvben a többmenetes csavarvonal alak is egyensúlyi helyzet, ez azonban könnyen beláthatóan labilis.)

![](../../../figures/solution-ocr/170b71a9b6a2b0a70353754c.jpg)
7. ábra


A csavarvonal menetemelkedésének $\vartheta$ szögét (azaz a csavarvonal adott pontbeli érintője és az ugyanezen ponton átmenő, a $B$-térre merőleges sík által bezárt szöget) egyszerú geometriával számíthatjuk ki:

$$
\sin \vartheta = \frac { \ell } { 2 \ell } , \quad \text { ebből } \quad \vartheta = 30 ^ { \circ } .
$$

A csavarvonalra illeszkedő, képzeletbeli hengerpalást $R$ sugara:

$$
R = \frac { \ell \cos \vartheta } { 2 \pi } = \frac { \sqrt { 3 } \ell } { 4 \pi } \approx 0,138 \ell .
$$

Most térjünk rá az erő kiszámítására! A csavarvonal tengelyének irányából nézve azt látjuk, hogy az $R$ sugarú, teljes körnek látszó vezetéket a mágneses Lorentz-erő próbálja szétfeszíteni, ezt ellensúlyozza a vezetékben ébredő erónek a mágneses térerősségre meróleges $F \cos \vartheta$ nagyságú komponense: $I B R = F \cos \vartheta$. Felhasználva $R$ kifejezését megkapjuk a vezetéket feszítő erőt:

$$
F = \frac { I B \ell } { 2 \pi } \approx 0,159 I B \ell .
$$

Látszik, hogy a huzalban ébredő erő független a $P _ { 1 }$ és $P _ { 2 }$ pontok $d$ távolságától $( 0 < d < \ell )$.
Megjegyzés. A verseny eredményhirdetésén a 3. feladatban szereplő kísérleti elrendezés is bemutatásra került. A kísérlet megvalósítása egyszerú körülmények között nehéz, több gyakorlati nehézségbe is ütközik.

A feladat szövegében homogén, erós mágneses tér szerepel. Ezt a két feltételt nem könnyü egyszerre teljesíteni. Aránylag nagy térrészben homogén és erós mágneses teret csak nagyon nagy (és drága) eszközökkel lehet elóállítani. A kísérleti bemutatón a tér elóállítására Helmholtz-tekercset használtunk ${ } ^ { 1 }$, melynek tere a tekercsek közti tér közepén elég jó közelítéssel homogén - viszont nem túl erős. (A Föld mágneses terénél azért egy-két nagyságrenddel nagyobb.)

A feladat szövegében szereplő vezeték könnyü, vékony és hajlékony. A szövegben a „könnyü” azt jelenti, hogy a vezeték súlya elhanyagolható a mágneses tér által kifejtett erőhöz képest. (Az „erős mágneses tér” pedig arra utal, hogy a vezeték saját mágneses terének hatását is elhanyagolhatjuk.) A feltételek teljesítéséhez nagyon vékony vezetéket kellett használnunk: egy kb. 0,1 mm vastag vörösréz huzalt, amely olyan vékony, hogy alig látszik. A huzal vastagsága viszont korlátozza a vezetéken átfolyó áram nagyságát is, pedig a nem túl erốs mágneses tér mellett minél nagyobb áramra van szükség a jelenség bemutatásához. Az áramerősséggel elmentünk a határokig: a vezeték (miután leégett róla a szigetelő lakk) vörösen izzott - és így az elsötétített teremben láthatóvá is vált.

A bemutatón először egy, a feladathoz lazábban kapcsolódó kísérletet mutattunk be: egy kisnyomású héliummal töltött csőben figyeltük meg az elektronok mozgását. Az izzókatódból kilépő, felgyorsított elektronok a Helmholtz-tekercsben kör-, illetve csavarvonal alakú pályán mozognak, és pályájuk a gerjesztett héliumatomok zöld fényének köszönhetően láthatć ${ } ^ { 2 }$.

Ezután vizsgáltuk a vezeték alakját. Még egy ilyen vékony vezeték is aránylag merev (tehát a hajlékonyságot se könnyü biztosítani), de a feladat $a$ ) részének megfeleló elrendezésben az áram bekapcsolásakor jól láthatóan kör alakban kifeszült, az áramirány változtatásakor pedig a körív 180°-kal átfordult. A vezeték végeinek 90°-os elforgatásakor (a feladat $b$ ) részének megfeleló elrendezésben) jól megfigyelhetően kialakult a csavarvonal forma. (A feladatban kérdezett kicsiny erők mérésére ebben az egyszerú demonstrációban természetesen nem volt lehetőség.)

Az ünnepélyes eredményhirdetésre és díjkiosztásra 2013. november 15-én délután került sor az ELTE Konferenciatermében. Meghívást kaptak az 50 és a 25 évvel ezelőtti Eötvös-verseny nyertesei is. 50 évvel ezelőtt Tichy Géza nyerte meg a versenyt, Abos Imre lett a második, Major János a harmadik. Mindhárman itt voltak - Tichy Géza az ELTE-ről, Abos Imre a BME-ről, Major János Stuttgartból jött el. 25 évvel ezelőtt már nemcsak érettségizettek indulhattak az Eötvös-versenyen, s az első tíz helyezett felvételi nélkül kerülhetett be az egyetemre. Ennek megfelelően a résztvevők és a díjazottak száma is nagyobb volt. A két akkori első díjas közül Fucskár Attila eljött, Hauer Tamás levelet küldött mostani munkahelyéről, a CERN-ből. Volt tanárával, Tarnócziné Gedeon Melittával együtt jelent meg a második díjas Demeter Gábor, és eljött a harmadik díjas Keleti Tamás is, aki ma az ELTE Analízis Tanszékének vezetője. Felesége és két kisgyereke kísérte el Somfai Ellákot, aki akkor dicséretet kapott dolgozatára.

A versenybizottság elnöke megemlékezett Radó Tiborról, aki 100 éve, 1913-ban, és Hlucsil Károlyról, aki 1911-ben lett I. díjas ezen a versenyen. Ezután kivetítette az 1963. és az 1988. évi feladatokat, valamint az akkori nyertesek közül a KöMaL-ban is eredményesen szereplő diákok egykori fényképeit. Felkérésére mindannyian szóltak néhány szót emlékeikről, azóta befutott pályájukról. Ezután következett a 2013. évi feladatok ismertetése. A megoldásokat azok mutatták be, akik kitalálták ezeket a feladatokat. Honyek Gyula az 1. feladathoz kapcsolódó kísérletről videót is vetített. A 2. feladathoz kapcsolódó kísérletet Vigh Máté mutatta be egy olyan optikai ráccsal, amely erre az alkalomra készült. A 3. feladat megoldását is Vigh Máté ismertette, a hozzá kapcsolódó kísérletet azonban már Vankó Péter állította össze és mutatta be.

Ezután Radnai Gyula felkérte Zawadowski Alfréd akadémikust, az Eötvös Loránd Fizikai Társulat elnökét a 2013. évi Eötvös-verseny díjainak átadására.

Az elsố díjat mindhárom feladat hibátlan megoldásáért Szabó Attila nyerte, aki jelenleg Cambridge-ben természettudomány szakos egyetemi hallgató. Pécsett érettségizett a Leówey Klára Gimnáziumban, tanára Simon Péter,

[^0]
szakkörvezetője Kotek László volt. Ốk vették át az első díjat Attila helyett, akivel viszont sikerült Skype-on egyidejüleg kapcsolatba lépnünk, és akit így kivetítve láthattak és tapsolhattak meg a többiek.

Második díjat nyert egyenlő helyezésben Fehér Zsombor, a Budapesti Fazekas Mihály Általános Iskola és Gimnázium 11. évf. tanulója, Horváth Gábor tanítványa, valamint Kovács Áron Dániel, az Eötvös Loránd Tudományegyetem fizika szakos hallgatója, aki ugyancsak a Fazekas Gimnáziumban érettségizett mint Horváth Gábor és Csefkó Zoltán tanítványa.

Harmadik díjat nyert egyenló helyezésben Horicsányi Attila, az egri Dobó István Gimnázium 12. évf. tanulója, Hóbor Sándor tanítványa, Janzer Barnabás, a Budapesti Fazekas Mihály Általános Iskola és Gimnázium 11. évf. tanulója, Horváth Gábor tanítványa, valamint Takátsy János, a budapesti Városmajori Gimnázium 12. évf. tanulója, Ábrám László tanítványa.

Dicséretet kapott Holczer András, a pécsi Janus Pannonius Gimnázium 11. évf. tanulója, tanára a gimnáziumban Dombi Anna, szakkörvezető́je Kotek László, valamint Öreg Botond, a Budapesti Fazekas Mihály Általános Iskola és Gimnázium 11. évf. tanulója, akinek Horváth Gábor és Szokolai Tibor voltak a tanárai.

A MOL támogatásával az első díjjal 30 ezer, a második díjjal 20 ezer, a harmadik díjjal 15 ezer forint pénzjutalom járt, míg a dicséretesek Simonyi Károly $A$ fizika kultúrtörténete c. múvének legújabb kiadását kapták meg. A díjazottak megjelent tanárai és a megjelent 50, illetve 25 évvel ezelőtti nyertesek egy-egy értékes könyvet választhattak maguknak az ELFT, a MATFUND Alapítvány, a Nemzeti Tankönyvkiadó, a Typotex Kiadó és az Akkord Kiadó kiállított könyvei közül.

Befejezésül a Versenybizottság leköszönő elnöke értékelte az idei versenyt és felsorolta mindazokat az intézményeket, vállalatokat és magánszemélyeket, amelyek, illetve akik anyagi segítségével sikerült a Társulatnak az elmúlt 25 évben lebonyolítania a versenyt.

Zawadowski Alfréd megköszönte Radnai Gyulának a Versenybizottságban több mint 40 éve, elnökként pedig 25 éve végzett munkáját, és átnyújtott egy oklevelet, mely tanúsítja, hogy elnyerte „az Eötvös-verseny Versenybizottságának örökös tiszteletbeli elnöke" címet.

Az ünnepélyes díjkiosztást jó hangulatú állófogadás zárta a Ramasoft Zrt. jóvoltából.


[^0]:    ${ } ^ { 1 }$ http://fizipedia.bme.hu/images/a/a7/Helmholtz2.jpg
    ${ } ^ { 2 }$ http://fizipedia.bme.hu/images/9/90/Eperm5.jpg
