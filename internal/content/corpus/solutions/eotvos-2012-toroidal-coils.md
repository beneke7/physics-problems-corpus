---
id: eotvos-2012-toroidal-coils
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2012-toroidal-coils
solution_type: official
source_document: solution-document-eotvos-2012-s
source_pdf: cache/phoxiv/eotvos/2012_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2012_S.pdf."
---

3. feladat. Két ugyanolyan méret¶, sak a menetszámukban különböz®, egyenletes teker selés¶, N1 és N2 (> N1)
menetes toroid teker s egymásba van f¶zve az ábra szerint. (A középkörök síkjai mer®legesek egymásra.)
a) Melyik teker s kivezetései között indukálódik nagyobb feszültség, ha a másik teker sben adott e ektív áramer®sség¶
és frekven iájú váltakozó áram folyik?
b) Az N1 menetes teker sre Ueff e ektív érték¶, hálózati váltakozó feszültséget kap solunk, a másik (N2 menetes)
teker s kivezetéseire pedig ideálisnak tekinthet® voltmér®t kötünk. Mekkora e ektív feszültséget jelez a m¶szer? Legyen
mondjuk N1 = 100, N2 = 900, Ueff = 230 V!
8. ábra
(Vigh Máté)
Megoldás. Azt, hogy egy teker sben folyó áram változása mekkora feszültséget kelt egy másik teker sben, a két
teker s közötti M köl sönös induk iós együttható felhasználásával adhatjuk meg:
U2 = M
∆I1
∆t
.
Vákuumban lév® teker sek esetén   jó közelítéssel a légmagos teker sek is ilyennek tekinthet®k elektromos szempont-
ból   a köl sönös induk iós együtthatónak a két teker sre vonatkozóan szimmetrikusnak kell lennie, vagyis fenn kell
állnia a következ® összefüggésnek is:
U1 = M
∆I2
∆t
.
Most már válaszolhatunk az a) kérdésre: Bármelyik teker sben folyik adott e ektív áramer®sség¶ és frekven iájú
váltakozó áram, a másik teker sben mindig ugyanakkora feszültség indukálódik!
A b) kérdésre akkor tudunk válaszolni, ha meg tudjuk határozni a feladatban látható légmagos teker spár köl sönös
induk iós együtthatóját. Ne felejtsük el: ennek (N1,N2)-ben szimmetrikus kifejezésnek kell lennie.
A megoldáshoz azt kell észrevennünk, hogy a feladatban a voltmér® által jelzett U2 feszültség fellépése két okra
vezethet® vissza.
I. Az (1) teker s
uxusának változása hatással van a (2) teker sre, ebben U
(I)
2 körfeszültséget indukál:
U
(I)
2 =
∆Φ1
∆t
=
∆(BA1)
∆t
.
Az (1) teker sben létrejöv® B értékét a gerjesztési törvényb®l kaphatjuk meg, ha azt az (1) teker s középkörére
alkalmazzuk,
gyelembe véve, hogy az R1 sugarú körlapot N1I1 áram metszi:
B · 2πR1 = µ0N1I1, ebb®l B = µ0
N1I1
2πR1
.
Helyettesítsük be ezt U
(I)
2 kifejezésébe:
U
(I)
2 =
∆

µ0
N1I1
2πR1
A1

∆t
= µ0
N1A1
2πR1
∆I1
∆t
.
Fontos összefüggéshez jutottunk, de itt a
∆I1
∆t
el®tt álló arányossági tényez® még sak N1-t®l függ, ezért biztosan
nem lehet a keresett köl sönös induk iós együttható. Szükségünk van a már jelzett másik ok megvizsgálására is. Ez
pedig a következ®:
II. Az (1) teker s szórt mágneses terének változása hatással van a (2) teker sre, ebben
U
(II)
2

=
X
i
U
(II)
i2

körfeszültséget indukál.
U
(II)
2 = N2
∆(BnA2)
∆t
,
(ahol Bn a menetfelületre mer®leges B komponens nagyságának átlaga). Itt U
(II)
i2 -vel jelöltük a második teker s i-
edik menetében indukálódó feszültséget, amely lehet, hogy ki si a szórt mágneses tér gyengesége miatt, de összegezve
az egész (2) teker sre, már nem hanyagolható el. Ez a szórt mágneses
uxus a különböz® menetekre más és más lehet,
egy menetre vonatkozó átlagértékét jelöltük BnA2-vel.
Bn kiszámításához írjuk fel újra a gerjesztési törvényt, de most a (2) teker s középkörére:
Bn · 2πR2 = µ0I1
(mivel most az R2 sugarú körlapot egyetlen I1 áram metszi).
A II. ok miatt indukálódó körfeszültség tehát
U
(II)
2 = N2
∆

µ0
I1
2πR2
A2

∆t
= µ0
N2A2
2πR2
∆I1
∆t
.
Most már felírhatjuk a voltmér®re jutó teljes feszültséget:
U2 = U
(I)
2 + U
(II)
2 .
Használjuk ki, hogy a két teker s sak menetszámában különbözik, vagyis A1 = A2 = A és R1 = R2 = R, ekkor
U2 = µ0
(N1 + N2)A
2πR
∆I1
∆t
.
Megkaptuk a keresett köl sönös induk iós együtthatót:
M = µ0
(N1 + N2)A
2πR
,
és ez már valóban szimmetrikus (N1,N2)-ben!
Hogyan határozhatjuk meg U2 konkrét, numerikus értékét? Az ismert e ektív érték¶ U1 feszültség és az (1) teker s-
ben folyó áram változási sebessége között az induktivitás, az (1) teker s öninduk iós együtthatója teremt kap solatot:
U1 = L1
∆I1
∆t
= µ0
N2
1 A
2πR
∆I1
∆t
.
Az el®bb kaptuk:
U2 = M
∆I1
∆t
= µ0
(N1 + N2)A
2πR
∆I1
∆t
.
Ezek szerint
U2
U1
=
M
L1
=
N1 + N2
N2
1
=
100 + 900
1002
=
1
10
,
U2 =
U1
10
=
230 V
10
= 23 V.
Megjegyzések. 1. A megoldásban feltételeztük, hogy mindkét teker sen ugyanolyan irányú ( savarodású) a teker selés. Ha
véletlenül nem ez a helyzet, akkor a voltmér® által mutatott érték
U2 =
N2 − N1
N2
1
U1 =
800
10000
230 V = 18,4 V
lesz. Ennek felismerését    észrevételét    már nem várta el a versenybizottság.
2. Az eredményhirdetéskor Vankó Péter, az 1976-os Eötvös-verseny gy®ztese, aki ma már a hazai
zikai diákolimpiai sapat
vezet®je, saját készítés¶ teker sekkel és nagyfrekven iás berendezéssel demonstrálta a feladatban leírt jelenséget. A kvantitatív
kísérlet összeállításáért és bemutatásáért   melyben Vigh Máté segédkezett   külön köszönet illeti a BME do ensét.
∗
Az ünnepélyes eredményhirdetésre és díjkiosztásra 2012. november 16-án délután került sor az ELTE Konferen ia-
termében (ugyanott, ahol a budapesti versenyz®k a dolgozatokat írták októberben.)
Mint az utóbbi években mindig, most is el®ször az 50, illetve 25 évvel ezel®tti Eötvös-verseny feladatainak bemu-
tatására került sor. A régi nyertesek közül elég sokan eleget tudtak tenni a meghívásnak, és szívesen emlékeztek vissza
az akkori versenyre. 50 évvel ezel®tt két osztálytárs, Nagy Dénes Lajos és Szegi András a budapesti II. Rákó zi Feren
Gimnáziumból holtversenyben nyerték el az I. díjat, III. díjat a szegedi Máté Eörs, di séretet Góth László és Simonovits
Miklós budapesti versenyz®k kaptak. Mind az öten eljöttek, és jó hangulatban idézték fel 1962-es emlékeiket.
25 évvel ezel®tt a zs¶ri nem adott ki I. díjat, mivel nem volt olyan versenyz®, aki mindhárom feladatot hibátlanul
oldotta volna meg. Ráadásul az érettségizett versenyz®k többsége  el®felvettként  1 éves katonai kiképzésben kellett,
hogy részt vegyen. Hódmez®vásárhelyr®l vagy Lentib®l a dolgozat megírására még sak elengedték ®ket, az eredmény-
hirdetésre azonban már nem. A II. díjat nyert Gyuris Viktor,aki ma már az USA-ban él és dolgozik, hangulatos levélben
számolt be a viszontagságos körülményekr®l. Levelét Honyek Gyula olvasta fel. A III. díjasok közül Cynolter Gábor,
Fu skár Attila és Kiss Tamás jött el, a di séretet kapott versenyz®k közül Derényi Imre és Szokoly Gyula.  k nem sak
emlékeiket elevenítették fel, de élvezettel kap solódtak be a mostani Eötvös-verseny feladatainak diszkussziójába is.
A versenybizottság elnöke ismertette a zs¶ri által elvárt megoldásokat, vezette a diszkussziót, majd a díjak és
jutalmak átadására felkérte Kroó Norbertet, az Eötvös Loránd Fizikai Társulat elnökét és Kürti Jen®t, a Társulat
f®titkárát.
Els® díjat nem adott ki a versenybizottság, sajnos a harmadik feladatot senkinek sem sikerült jól megoldania.
Második díjas lett Janzer Barnabás, a F®városi Fazekas Mihály Gyakorlóiskola 10. évf. tanulója, Horváth Gábor
tanítványa, és Szabó Attila, a pé si Le®wey Klára Gimnázium 12. évf. tanulója, Simon Péter és Kotek László
tanítványa. Pénzjutalmuk 20 20 ezer forint.
Harmadik díjat, s vele 15-15 ezer forint jutalmat hárman vehettek át: Cs®sz Gábor, a Ke skeméti Református
Gimnázium 12. évf. tanulója, Galambos Péter tanítványa; Juhász Péter, a Budapesti Piarista Gimnázium 11. évf.
tanulója, Urbán János tanítványa; valamint La zkó Zoltán, az ELTE
zika BS szakos hallgatója, aki a szegedi
Ságvári Endre Gimnáziumban érettségizett mint Gy®ri István tanítványa.
Heten kaptak di séretet: Béres Bertold, a BME
zika BS szakos hallgatója, aki a budapesti Puskás Tivadar
Távközlési Te hnikumban érettségizett mint Beregszászi Zoltán és Alapiné E seri Éva tanítványa; Fehér Zsombor,
a F®városi Fazekas Mihály Gyakorlóiskola 10. évf. tanulója, Horváth Gábor tanítványa; Homonnay Bálint, a F®városi
Fazekas Mihály Gyakorlóiskola 11. évf. tanulója, Horváth Gábor tanítványa; Ková s Péter, BME
zika BS szakos
hallgatója, aki az ELTE Apá zai Csere János Gyakorló Gimnáziumában érettségizett mint Zsigri Feren tanítványa;
Olosz Balázs, a PTE Babits Mihály Gyakorló Gimnáziumának 10. évf. tanulója, Kon z Károly tanítványa; Öreg
Botond, a F®városi Fazekas Mihály Gyakorlóiskola 10. évf. tanulója, Horváth Gábor tanítványa, valamint Szigeti
Bertalan György, a veszprémi Lovassy László Gimnázium 12. évf. tanulója, Varga Vin e tanítványa.
Mind a díjazott, mind a di séretes versenyz®k 1-1 értékes könyvet is kaptak (Simonyi Károly: A
zika kultúrtörté-
nete; J. D. Ja kson: Klasszikus elektrodinamika; I. N. Bronstein: Matematikai kézikönyv). Az Eötvös-versenyre immár
évek óta eredményesen felkészít® tanárt, Horváth Gábort, a versenybizottság javaslatára Lán zos Kornél hat kötetben
összegy¶jtött munkáival ajándékozta meg az Eötvös Loránd Fizikai Társulat.
A díjazott és di séretet nyert diákok jelenlév® tanárai 1-1 m¶vészeti és 1-1 szakmai kiadványt választhattak a Vin ze
Kiadó, a Nemzeti Tankönyvkiadó, a Typotex Kiadó, valamint a MATFUND Alapítvány által felajánlott könyvek közül.
Befejezésül Kádár György és Kürti Jen®, a Társulat volt és jelenlegi f®titkára emlékezett meg néhány baráti szóval
az elhunyt Károlyházy Frigyesr®l.
Zárszavában az elnök röviden értékelte az idei Eötvös-versenyt, és köszönetet mondott a verseny lebonyolítását
anyagilag támogató MOL-nak, az ajándékkönyveket felajánló kiadóknak, valamint a záró állófogadást biztosító RA-
MASOFT Zrt-nek. A nyertes diákokról készül® soportképre ebben az évben öt 50 évvel ezel®tti és öt 25 évvel ezel®tti
nyertes is rákerült, h¶en kifejezve a
zika szeretetének összetartó erejét.
