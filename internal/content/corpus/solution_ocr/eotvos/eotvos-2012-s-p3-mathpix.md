---
id: solution-ocr-eotvos-2012-s-p3
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2012_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2012-toroidal-coils]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. feladat. Két ugyanolyan méretũ, csak a menetszámukban különbözö́, egyenletes tekercselésü, $N _ { 1 }$ és $N _ { 2 }$ ( $> N _ { 1 }$ ) menetes toroid tekercs egymásba van fữzve az ábra szerint. (A középkörök sikjai merốlegesek egymásra.)
a) Melyik tekercs kivezetései között indukálódik nagyobb feszültség, ha a másik tekercsben adott effektív áramerósségü és frekvenciájú váltakozó áram folyik?
b) $A z N _ { 1 }$ menetes tekercsre $U _ { \text {eff } }$ effektív értékű, hálózati váltakozó feszültséget kapcsolunk, a másik ( $N _ { 2 }$ menetes) tekercs kivezetéseire pedig ideálisnak tekinthetố voltmérốt kötünk. Mekkora effektív feszültséget jelez a müszer? Legyen mondjuk $N _ { 1 } = 100 , N _ { 2 } = 900 , U _ { \text {eff } } = 230 \mathrm {~V}$ !

![](../../../figures/solution-ocr/e77d7e70cc64bc58ed6ea17b.jpg)
8. ábra


Megoldás. Azt, hogy egy tekercsben folyó áram változása mekkora feszültséget kelt egy másik tekercsben, a két tekercs közötti $M$ kölcsönös indukciós együttható felhasználásával adhatjuk meg:

$$
U _ { 2 } = M \frac { \Delta I _ { 1 } } { \Delta t } .
$$

Vákuumban lévő tekercsek esetén - jó közelítéssel a légmagos tekercsek is ilyennek tekinthetők elektromos szempontból - a kölcsönös indukciós együtthatónak a két tekercsre vonatkozóan szimmetrikusnak kell lennie, vagyis fenn kell állnia a következő összefüggésnek is:

$$
U _ { 1 } = M \frac { \Delta I _ { 2 } } { \Delta t } .
$$

Most már válaszolhatunk az $a$ ) kérdésre: Bármelyik tekercsben folyik adott effektív áramerősségú és frekvenciájú váltakozó áram, a másik tekercsben mindig ugyanakkora feszültség indukálódik!

A b) kérdésre akkor tudunk válaszolni, ha meg tudjuk határozni a feladatban látható légmagos tekercspár kölcsönös indukciós együtthatóját. Ne felejtsük el: ennek ( $N _ { 1 } , N _ { 2 }$ )-ben szimmetrikus kifejezésnek kell lennie.

A megoldáshoz azt kell észrevennünk, hogy a feladatban a voltmérő által jelzett $U _ { 2 }$ feszültség fellépése két okra vezethető vissza.
I. Az (1) tekercs fluxusának változása hatással van a (2) tekercsre, ebben $U _ { 2 } ^ { ( \mathrm { I } ) }$ körfeszültséget indukál:

$$
U _ { 2 } ^ { ( \mathrm { I } ) } = \frac { \Delta \Phi _ { 1 } } { \Delta t } = \frac { \Delta \left( B A _ { 1 } \right) } { \Delta t } .
$$

Az (1) tekercsben létrejövő $B$ értékét a gerjesztési törvényből kaphatjuk meg, ha azt az (1) tekercs középkörére alkalmazzuk, figyelembe véve, hogy az $R _ { 1 }$ sugarú körlapot $N _ { 1 } I _ { 1 }$ áram metszi:

$$
B \cdot 2 \pi R _ { 1 } = \mu _ { 0 } N _ { 1 } I _ { 1 } , \quad \text { ebből } \quad B = \mu _ { 0 } \frac { N _ { 1 } I _ { 1 } } { 2 \pi R _ { 1 } } .
$$

Helyettesítsük be ezt $U _ { 2 } ^ { ( \mathrm { I } ) }$ kifejezésébe:

$$
U _ { 2 } ^ { ( \mathrm { I } ) } = \frac { \Delta \left( \mu _ { 0 } \frac { N _ { 1 } I _ { 1 } } { 2 \pi R _ { 1 } } A _ { 1 } \right) } { \Delta t } = \mu _ { 0 } \frac { N _ { 1 } A _ { 1 } } { 2 \pi R _ { 1 } } \frac { \Delta I _ { 1 } } { \Delta t } .
$$

Fontos összefüggéshez jutottunk, de itt a $\frac { \Delta I _ { 1 } } { \Delta t }$ előtt álló arányossági tényező még csak $N _ { 1 }$-től függ, ezért biztosan nem lehet a keresett kölcsönös indukciós együttható. Szükségünk van a már jelzett másik ok megvizsgálására is. Ez pedig a következő:
II. Az (1) tekercs szórt mágneses terének változása hatással van a (2) tekercsre, ebben

$$
U _ { 2 } ^ { ( \mathrm { II } ) } \left( = \sum _ { i } U _ { i 2 } ^ { ( \mathrm { II } ) } \right)
$$

körfeszültséget indukál.

$$
U _ { 2 } ^ { ( \mathrm { II } ) } = N _ { 2 } \frac { \Delta \left( \bar { B } _ { \mathrm { n } } A _ { 2 } \right) } { \Delta t } ,
$$

(ahol $\bar { B } _ { \mathrm { n } }$ a menetfelületre merőleges $B$ komponens nagyságának átlaga). Itt $U _ { i 2 } ^ { ( \mathrm { II } ) }$-vel jelöltük a második tekercs $i$ edik menetében indukálódó feszültséget, amely lehet, hogy kicsi a szórt mágneses tér gyengesége miatt, de összegezve az egész (2) tekercsre, már nem hanyagolható el. Ez a szórt mágneses fluxus a különböző menetekre más és más lehet, egy menetre vonatkozó átlagértékét jelöltük $\bar { B } _ { \mathrm { n } } A _ { 2 }$-vel.
$\bar { B } _ { \mathrm { n } }$ kiszámításához írjuk fel újra a gerjesztési törvényt, de most a (2) tekercs középkörére:

$$
\bar { B } _ { \mathrm { n } } \cdot 2 \pi R _ { 2 } = \mu _ { 0 } I _ { 1 }
$$

(mivel most az $R _ { 2 }$ sugarú körlapot egyetlen $I _ { 1 }$ áram metszi).
A II. ok miatt indukálódó körfeszültség tehát

$$
U _ { 2 } ^ { ( \mathrm { II } ) } = N _ { 2 } \frac { \Delta \left( \mu _ { 0 } \frac { I _ { 1 } } { 2 \pi R _ { 2 } } A _ { 2 } \right) } { \Delta t } = \mu _ { 0 } \frac { N _ { 2 } A _ { 2 } } { 2 \pi R _ { 2 } } \frac { \Delta I _ { 1 } } { \Delta t } .
$$

Most már felírhatjuk a voltmérőre jutó teljes feszültséget:

$$
U _ { 2 } = U _ { 2 } ^ { ( \mathrm { I } ) } + U _ { 2 } ^ { ( \mathrm { II } ) } .
$$


Használjuk ki, hogy a két tekercs csak menetszámában különbözik, vagyis $A _ { 1 } = A _ { 2 } = A$ és $R _ { 1 } = R _ { 2 } = R$, ekkor

$$
U _ { 2 } = \mu _ { 0 } \frac { \left( N _ { 1 } + N _ { 2 } \right) A } { 2 \pi R } \frac { \Delta I _ { 1 } } { \Delta t } .
$$

Megkaptuk a keresett kölcsönös indukciós együtthatót:

$$
M = \mu _ { 0 } \frac { \left( N _ { 1 } + N _ { 2 } \right) A } { 2 \pi R } ,
$$

és ez már valóban szimmetrikus $\left( N _ { 1 } , N _ { 2 } \right)$-ben!
Hogyan határozhatjuk meg $U _ { 2 }$ konkrét, numerikus értékét? Az ismert effektív értékú $U _ { 1 }$ feszültség és az (1) tekercsben folyó áram változási sebessége között az induktivitás, az (1) tekercs önindukciós együtthatója teremt kapcsolatot:

$$
U _ { 1 } = L _ { 1 } \frac { \Delta I _ { 1 } } { \Delta t } = \mu _ { 0 } \frac { N _ { 1 } ^ { 2 } A } { 2 \pi R } \frac { \Delta I _ { 1 } } { \Delta t } .
$$

Az előbb kaptuk:

$$
U _ { 2 } = M \frac { \Delta I _ { 1 } } { \Delta t } = \mu _ { 0 } \frac { \left( N _ { 1 } + N _ { 2 } \right) A } { 2 \pi R } \frac { \Delta I _ { 1 } } { \Delta t } .
$$

Ezek szerint

$$
\begin{aligned}
& \frac { U _ { 2 } } { U _ { 1 } } = \frac { M } { L _ { 1 } } = \frac { N _ { 1 } + N _ { 2 } } { N _ { 1 } ^ { 2 } } = \frac { 100 + 900 } { 100 ^ { 2 } } = \frac { 1 } { 10 } , \\
& U _ { 2 } = \frac { U _ { 1 } } { 10 } = \frac { 230 \mathrm {~V} } { 10 } = 23 \mathrm {~V} .
\end{aligned}
$$

Megjegyzések. 1. A megoldásban feltételeztük, hogy mindkét tekercsen ugyanolyan irányú (csavarodású) a tekercselés. Ha véletlenül nem ez a helyzet, akkor a voltméró által mutatott érték

$$
U _ { 2 } = \frac { N _ { 2 } - N _ { 1 } } { N _ { 1 } ^ { 2 } } U _ { 1 } = \frac { 800 } { 10000 } 230 \mathrm {~V} = 18,4 \mathrm {~V}
$$

lesz. Ennek felismerését - „észrevételét” - már nem várta el a versenybizottság.
2. Az eredményhirdetéskor Vankó Péter, az 1976-os Eötvös-verseny győztese, aki ma már a hazai fizikai diákolimpiai csapat vezetője, saját készítésú tekercsekkel és nagyfrekvenciás berendezéssel demonstrálta a feladatban leírt jelenséget. A kvantitatív kísérlet összeállításáért és bemutatásáért - melyben Vigh Máté segédkezett - külön köszönet illeti a BME docensét.
*
Az ünnepélyes eredményhirdetésre és díjkiosztásra 2012. november 16-án délután került sor az ELTE Konferenciatermében (ugyanott, ahol a budapesti versenyzők a dolgozatokat írták októberben.)

Mint az utóbbi években mindig, most is először az 50, illetve 25 évvel ezelőtti Eötvös-verseny feladatainak bemutatására került sor. A régi nyertesek közül elég sokan eleget tudtak tenni a meghívásnak, és szívesen emlékeztek vissza az akkori versenyre. 50 évvel ezelőtt két osztálytárs, Nagy Dénes Lajos és Szegi András a budapesti II. Rákóczi Ferenc Gimnáziumból holtversenyben nyerték el az I. díjat, III. díjat a szegedi Máté Eörs, dicséretet Góth László és Simonovits Miklós budapesti versenyzők kaptak. Mind az öten eljöttek, és jó hangulatban idézték fel 1962-es emlékeiket.

25 évvel ezelőtt a zsűri nem adott ki I. díjat, mivel nem volt olyan versenyző, aki mindhárom feladatot hibátlanul oldotta volna meg. Ráadásul az érettségizett versenyzők többsége „előfelvettként” 1 éves katonai kiképzésben kellett, hogy részt vegyen. Hódmezővásárhelyről vagy Lentiből a dolgozat megírására még csak elengedték óket, az eredményhirdetésre azonban már nem. A II. díjat nyert Gyuris Viktor, aki ma már az USA-ban él és dolgozik, hangulatos levélben számolt be a viszontagságos körülményekről. Levelét Honyek Gyula olvasta fel. A III. díjasok közül Cynolter Gábor, Fucskár Attila és Kiss Tamás jött el, a dicséretet kapott versenyzők közül Derényi Imre és Szokoly Gyula. Ök nemcsak emlékeiket elevenítették fel, de élvezettel kapcsolódtak be a mostani Eötvös-verseny feladatainak diszkussziójába is.

A versenybizottság elnöke ismertette a zsúri által elvárt megoldásokat, vezette a diszkussziót, majd a díjak és jutalmak átadására felkérte Kroó Norbertet, az Eötvös Loránd Fizikai Társulat elnökét és Kürti Jenót, a Társulat fótitkárát.

Első díjat nem adott ki a versenybizottság, sajnos a harmadik feladatot senkinek sem sikerült jól megoldania.
Második díjas lett Janzer Barnabás, a Fóvárosi Fazekas Mihály Gyakorlóiskola 10. évf. tanulója, Horváth Gábor tanítványa, és Szabó Attila, a pécsi Leówey Klára Gimnázium 12. évf. tanulója, Simon Péter és Kotek László tanítványa. Pénzjutalmuk 20-20 ezer forint.

Harmadik díjat, s vele 15-15 ezer forint jutalmat hárman vehettek át: Csősz Gábor, a Kecskeméti Református Gimnázium 12. évf. tanulója, Galambos Péter tanítványa; Juhász Péter, a Budapesti Piarista Gimnázium 11. évf. tanulója, Urbán János tanítványa; valamint Laczkó Zoltán, az ELTE fizika BSc szakos hallgatója, aki a szegedi Ságvári Endre Gimnáziumban érettségizett mint Gyốri István tanítványa.


Heten kaptak dicséretet: Béres Bertold, a BME fizika BSc szakos hallgatója, aki a budapesti Puskás Tivadar Távközlési Technikumban érettségizett mint Beregszászi Zoltán és Alapiné Ecseri Éva tanítványa; Fehér Zsombor, a Fóvárosi Fazekas Mihály Gyakorlóiskola 10. évf. tanulója, Horváth Gábor tanítványa; Homonnay Bálint, a Fốvárosi Fazekas Mihály Gyakorlóiskola 11. évf. tanulója, Horváth Gábor tanítványa; Kovács Péter, BME fizika BSc szakos hallgatója, aki az ELTE Apáczai Csere János Gyakorló Gimnáziumában érettségizett mint Zsigri Ferenc tanítványa; Olosz Balázs, a PTE Babits Mihály Gyakorló Gimnáziumának 10. évf. tanulója, Koncz Károly tanítványa; Öreg Botond, a Fóvárosi Fazekas Mihály Gyakorlóiskola 10. évf. tanulója, Horváth Gábor tanítványa, valamint Szigeti Bertalan György, a veszprémi Lovassy László Gimnázium 12. évf. tanulója, Varga Vince tanítványa.

Mind a díjazott, mind a dicséretes versenyzók 1-1 értékes könyvet is kaptak (Simonyi Károly: A fizika kultúrtörténete; J. D. Jackson: Klasszikus elektrodinamika; I. N. Bronstein: Matematikai kézikönyv). Az Eötvös-versenyre immár évek óta eredményesen felkészítő tanárt, Horváth Gábort, a versenybizottság javaslatára Lánczos Kornél hat kötetben összegyüjtött munkáival ajándékozta meg az Eötvös Loránd Fizikai Társulat.

A díjazott és dicséretet nyert diákok jelenlévő tanárai 1-1 múvészeti és 1-1 szakmai kiadványt választhattak a Vincze Kiadó, a Nemzeti Tankönyvkiadó, a Typotex Kiadó, valamint a MATFUND Alapítvány által felajánlott könyvek közül.

Befejezésül Kádár György és Kürti Jenố, a Társulat volt és jelenlegi fótitkára emlékezett meg néhány baráti szóval az elhunyt Károlyházy Frigyesről.

Zárszavában az elnök röviden értékelte az idei Eötvös-versenyt, és köszönetet mondott a verseny lebonyolítását anyagilag támogató MOL-nak, az ajándékkönyveket felajánló kiadóknak, valamint a záró állófogadást biztosító RA-MASOFT Zrt-nek. A nyertes diákokról készülő csoportképre ebben az évben öt 50 évvel ezelótti és öt 25 évvel ezelőtti nyertes is rákerült, hüen kifejezve a fizika szeretetének összetartó erejét.
