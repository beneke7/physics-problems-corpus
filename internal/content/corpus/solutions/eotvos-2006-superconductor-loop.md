---
id: eotvos-2006-superconductor-loop
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2006-superconductor-loop
solution_type: official
source_document: solution-document-eotvos-2006-s
source_pdf: cache/phoxiv/eotvos/2006_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2006_S.pdf."
---

3. Négyzet alakú, rövidre zárt lapos teker s anyaga szupravezet® (ellenállása elhanyagolható). A négyzet oldalélei
l hosszúak, egy-egy oldalának tömege m. A teker s, amelynek induktivitása L, súrlódásmentesen elfordulhat a négyzet
alsó, vízszintes oldala körül.
Kezdetben a teker s függ®legesen, labilis egyensúlyi helyzetben áll a földi nehézségi er®térben. Ezután egy olyan
homogén mágneses mez®t alkalmazunk, hogy a teker sre ható B mágneses induk ió vektor nagysága állandó, iránya
függ®leges legyen. Ekkor a teker sben nem folyik áram.
Ezután a teker s fels® végét ki siny v0 sebességgel meglökjük. Körbefordul-e a teker s, vagy ha nem, akkor milyen
határok között fog mozogni?
Megoldás. Az alapvet® összefüggés, melyb®l ennek a feladatnak a megoldásánál kiindulhatunk, a dinamikának az
az alaptörvénye, amely merev testeknek rögzített tengely körüli forgására vonatkozik:
Θβ =
X
M,
vagyis a test Θ tehetetlenségi nyomatékának és β szöggyorsulásának szorzata a testre ható er®k forgatónyomatékainak
összegével egyenl®.
A feladat szempontjából lényegtelen, hogy a  lapos teker s  hány menetes, ezért a továbbiakban azt egy keretnek
(1 menetes teker snek) tekintjük (3. ábra). Az ábrán felrajzoltuk azokat az er®ket, amelyek akkor hatnak a keretre,
amikor az már α szögben kilendült eredeti függ®leges helyzetéb®l. Az oldalakra ható mg nehézségi er® tovább akarja
forgatni a keretet, a fels® oldalra ható BIl er® vízszintes irányú (a többi oldalon ható mágneses er®knek nin s for-
gatónyomatéka, így ezekkel nem kell tör®dnünk). Mivel a keretben folyó áram az elektromágneses induk ió miatt lép
fel, ezért   Lenz törvénye szerint   a fels® oldalon ható er® visszafelé akarja forgatni a keretet. A hozzá tartozó er®kar
lcosα nagyságú, tehát:
Θβ = mglsinα + 2mg
l
2
sinα − BIl · lcosα.
Ebben az egyenletben
Θ = ml2
+ 2 ·
1
3
ml2
=
5
3
ml2
.
3. ábra
Hogyan határozhatjuk meg az I indukált áram nagyságát? A teker sben most kétféle okból lép fel indukált feszült-
ség. Az egyik ok, hogy vezet® mozog a mágneses térben. Ennek megfelel®en az indukált feszültség nagysága Neumann
törvénye szerint
U1 = Blv cosα.
A másik ok az, hogy az L induktivitású teker sben változik az áram, ezért a fellép® öninduk iós feszültség
U2 = −L
∆I
∆t
.
A kett® el®jeles összege adja IR-et a lassan változó áramokra is igaz Kir hho -féle huroktörvény szerint. Mivel a
teker s anyaga most szupravezet®, ezért R = 0, tehát
Bl
∆s
∆t
cosα − L
∆I
∆t
= 0.
Ha ebb®l akarjuk I-t kifejezni, akkor (∆s = l∆α behelyettesítése után) integrálnunk kell az egyenletet. Ennek a
matematikai m¶veletnek a megkerülésével is eljuthatunk azonban a helyes összefüggéshez, ha azt vesszük
gyelembe,
hogy a keret A = l2
nagyságú keresztmetszetén áthaladó teljes
uxus (amely a küls® mágneses tért®l származó
uxus
és az öninduk iós
uxus összege) állandó kell maradjon:
BAsinα − LI = állandó.
Az állandó értéke LI0 = 0, hiszen a kezdeti (α = 0-hoz tartozó) I0 áram nulla volt. A fenti egyenletb®l már kifejezhetjük
I-t:
I =
Bl2
L
· sinα.
B, l és L adott állandók, I tehát sinα-val arányos mennyiség. Erre a felismerésre még szükségünk lesz, de miel®tt
diszkutálni kezdjük a feladatot, gondoljuk át, milyen
zikai törvényt, összefüggést használhatunk még fel a megoldás
során!
Szükségünk lehet energetikai meggondolásra. Írjuk fel a munkatételt (a kinetikai energia tételét)! Eszerint
∆Emozg. =
X
W,
vagyis
1
2
Θω2
−
1
2
Θω2
0 = mgl(1 − cosα) + 2mg
l
2
(1 − cosα) −
1
2
LI2
.
(A jobb oldalon az utolsó tag az öninduk ióból származó Uind. = −L·∆I/∆t feszültség Uind.I∆t munkavégzését fejezi
ki.) A fenti összefüggéshez  energiatételként  is eljuthatunk, amely szerint
X
E = állandó, vagyis
X
Ekezdeti =
X
Eα,
tehát
1
2
Θω2
0 =
1
2
Θω2
− 2mgl(1 − cosα) +
1
2
LI2
.
Most kezdjünk a diszkusszióhoz! Vizsgáljuk meg el®ször azt az esetet, amikor a meglökéssel adott v0 sebesség ki si,
és emiatt a kilendülési α szög is olyan ki si, hogy megengedhet® a sinα ≈ α és cosα ≈ 1 közelítés. Ekkor a forgómozgás
dinamikai egyenlete:
Θβ = 2mglα − BIl2
,
az áram pedig így függ α-tól:
I =
Bl2
L
α.
Behelyettesítve I kifejezését a dinamikai egyenletbe:
Θβ = 2mglα −
B2
l4
L
α = −

B2
l4
L
− 2mgl

α.
Látjuk, hogy a β szöggyorsulás az α szögkitéréssel arányosnak adódik. Tudjuk, hogy a β = −Ω2
α típusú összefüg-
gés harmonikus rezgésre vezet, mégpedig olyanra, aminek Ω a körfrekven iája, vagyis a feltételezett esetben olyan
harmonikus rezg®  lengésbe  kezd a teker s, amelynek periódusideje T =
2π
Ω
lesz. Θ =
5
3
ml2
behelyettesítése után
kapjuk:
T = 2π
s
5
3 B2l2
mL − 2g
l
 .
A kilendülés maximális szöge:
αmax =
v0
Ωl
=
v0T
2πl
.
A periódusid®re kapott kifejezést
gyelmesen megvizsgálva felvet®dik a kérdés: nem állhat ott a gyökjel alatt negatív
szám? Mi van akkor, ha
B2
l2
mL
< 2
g
l
? Elég gyenge mágneses tér, ki siny B esetén ez bizonyára el®fordulhat! Visszatérve
a dinamikai egyenlethez, azt látjuk, hogy ilyenkor β a 0 < α < 180◦
intervallumon mindig pozitív marad, akármilyen
ki siny is a kezdeti v0 érték. Sejthet®, hogy ilyenkor nem lesz maximális kilendülési szög, hanem a lebillen® teker s egyre
nagyobb szögsebességgel forog, s végül átlendül, átfordul a legalsó helyzetén és szépen visszatér a v0/l szögsebesség¶
kezd®állapotba. Vagyis folyton-folyvást forogni fog, sose áll meg, mert szupravezet®, s így nem disszipálódhat az
energia. (Persze még kisugárzódhat, ez további meggondolásokat igényel ...)
Vizsgáljuk meg most azt az esetet, amikor v0 akármekkora lehet! Vajon milyen feltételek teljesülése esetén áll meg
és fordul vissza valahonnan a teker s, és mikor fog folyamatosan egyirányban forogni?
Mi a megállás feltétele? Ehhez szükségünk lesz az energetikai meggondolásra:
1
2
Θω2
=
1
2
Θω2
0 + 2mgl(1 − cosα) −
1
2
LI2
.
Keressük a megálláshoz, ω = 0-hoz tartozó α szöget:
0 =
1
2
Θω2
0 + 2mgl(1− cosα) −
1
2
LI2
.
Írjuk be ide is az áram szögfüggését:
0 =
1
2
Θω2
0 + 2mgl(1 − cosα) −
1
2
B2
l4
L
sin2
α.
Felhasználva, hogy sin2
α = 1 − cos2
α, jól látszik, hogy cosα-ra kaptunk egy másodfokú egyenletet, ami lényegében
ilyen alakú: acos2
α + bcosα + c = 0, és aminek megoldása:
cosα =
−b ±
√
b2 − 4ac
2a
.
A meglökött teker s tehát akkor áll meg valahol, ha a fenti másodfokú egyenletnek van valós megoldása, és ez a
megoldás abszolút értékben nem nagyobb 1-nél (hiszen egy szög koszinuszáról van szó).
Teljesülnie kell tehát a következ® két feltételnek:
b2
− 4ac ≥ 0, (1)
−b ±
√
b2 − 4ac
2a
≤ 1. (2)
Mindez, átfordítva a feladat paramétereire, a következ® feltételekhez vezet:
B2
l2
mL
≥ 2
g
l
,
v0 ≤ v0max =
1
B
r
3
5
mL

B2
l2
mL
− 2
g
L

.
Ezek teljesülése esetén áll meg valahol a teker s. A megállási szög koszinuszára kapjuk:
cosαmax =
2mgL
B2l3
+
s
1 −
2mgL
B2l3
 2
−
5mL
3B2l4
v2
0.
(A gyökjel el®tt azért választottuk a pozitív el®jelet, mert az felel meg nagyobb cosα-nak, tehát kisebb α szögnek.
A teker s nyilván ott áll meg, ahol el®ször teljesül a megállás ω = 0 feltétele.) A megoldásból látszik, hogy minél
nagyobb a meglökés v0 sebessége, annál kisebb lesz cosαmax értéke, vagyis annál nagyobb αmax szögnél áll meg a
teker s, ahogy azt vártuk is.
A verseny eredménye
A verseny ünnepélyes eredményhirdetésére 2006. november 24-én került sor az ELTE Eötvös-termében. Külön
meghívást kaptak az eredményesen szerepl® versenyz®kön és tanáraikon kívül a 25 és az 50 évvel ezel®tti Eötvös-
verseny díjazottjai, valamint az elmúlt húsz évben díjazott valamennyi versenyz®, akiket sak az egyik internetes
közösségi oldal listáján el lehetett érni.
Bevezetésként a versenybizottság elnöke bemutatta Bártfai Pál 51 évvel ezel®tt kapott értesítését az akkori Eötvös-
verseny megnyerésér®l, majd ismertette a 25 évvel ezel®tti verseny díjazottjait. Kiderült, hogy jelent®s részük ma
külföldi egyetemeken, illetve kutatóintézetekben dolgozik, ezért nem lehettek itt. Az 50 évvel ezel®tti Eötvös-verseny
díjazottjai viszont majdnem mind el tudtak jönni.  k azok, akik kalandvágyból itthon maradtak   jegyezte meg valaki,
amikor kiderült, hogy 1956. október 20-án volt az akkori verseny. Egy héttel kés®bb lett volna a Kürs hák-verseny,
az már elmaradt. Mint ahogy elmaradt az Eötvös-verseny akkori ünnepélyes eredményhirdetése is. Ezt pótlandó,
kaptak most, Gyulai Zoltán és Vermes Miklós aláírásával, a Társulat és a Versenybizottság mai elnöke által hitelesített
okleveleket.
A résztvev®k derültsége kísérte Patkós Andrásnak, a Társulat mai elnökének bejelentését, amikor szólította Csiszár
Imrét, a budapesti Pet®
 Gimnázium érettségizett tanulóját, hogy vegye át az 1956-os Eötvös-verseny megnyerését
tanusító oklevelet. Nagy taps kísérte, amikor a két akadémikus kezet fogott egymással. A jelenetet a Magyar Televízió
forgató soportja is megörökítette. A második díjas Rázga Tamás, akkori villamosmérnök hallgató és a harmadik
Geszti Tamás, akkori
zikus hallgató is átvehette oklevelét, és mindhárman felidézték emlékeiket az 50 évvel ezel®tti
eseményekr®l. S®t, miután kivetítve látták az akkori feladatokat, Geszti Tamásnak még az is eszébe jutott, ahogy
otthon rájött az egyik feladat egyszer¶ megoldására. A verseny után, persze.
Ekkor már mindenki türelmetlenül várta az idei feladatok megoldását, s a verseny eredményének kihirdetését, az
ünnepélyes díjkiosztást. A feladatok megoldását a Versenybizottság elnöke ismertette, a díjakat a Társulat elnöke adta
át.
A 2006. évi Eötvös-verseny els® díját kapta a vele járó Eötvös-verseny éremmel Halász Gábor, az ELTE
zika
szakos hallgatója, aki az ELTE Radnóti Miklós Gyakorló Gimnáziumában érettségizett Honyek Gyula tanítványaként.
Második díjat kapott Kon zer József, aki a szlovákiai Révkomáromban m¶köd® magyar tannyelv¶ Selye János
Gimnázium utolsó éves tanulója, Hevesi Anikó és Szabó Endre tanítványa; Kónya Gábor, a Fazekas Mihály F®városi
Gyakorló Gimnázium 12. évf. tanulója, Horváth Gábor tanítványa; Meszéna Balázs, ugyan sak a Fazekas Mihály
F®városi Gyakorló Gimnázium 12. évf. tanulója, Taká s Lajos tanítványa, és Szé henyi Gábor, az ELTE
zika szakos
hallgatója, aki a szolnoki Verseghy Feren Gimnáziumban érettségizett Pé si István tanítványaként.
Harmadik díjat kapott Hasznos László, a szolnoki Varga Katalin Gimnázium 12. évf. tanulója, Balogh Béla
tanítványa; K®rösi Márton, a békés sabai Szent-Györgyi Albert Gimnázium 12. évf. tanulója, Varga István tanítvá-
nya; Molnár András, a BME mérnökhallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnáziumban érettségizett
Horváth Gábor tanítványaként, valamint Szolnoki Lénárd, Debre eni Református Kollégium Dó zy Gimnáziumának
11. évf. tanulója, Tófalusi Péter tanítványa.
Di séretet kapott Bohus Péter, a Fazekas M. F®v. Gyak. Gimn. 12. évf. tanulója, Horváth Gábor tanítványa;
Dü s® Márton, szintén a Fazekas M. F®v. Gyak. Gimn. 12. évf. tanulója, Horváth Gábor tanítványa; Farkas Ádám
László, a miskol i Földes F. Gimn. 12. évf. tanulója, Zámborszky Feren tanítványa; Mándi Gábor, a BME mérnök-
hallgatója, aki a kar agi Tóth Árpád Gimnáziumban érettségizett Ková s Miklós tanítványaként; Megyeri Balázs,
az ELTE Apá zai Csere J. Gyak. Gimn. 12. évf. tanulója, Zsigri Feren tanítványa; Nagy Csaba, a Fazekas M.
F®v. Gyak. Gimn. 12. évf. tanulója, Horváth Gábor tanítványa; Taná s Feren József, a szegedi Radnóti M. Gimn.
12. évf. tanulója, Mike János és Mez® Tamás tanítványa; Varga Bonbien, az ELTE Apá zai Csere J. Gyak. Gimn.
12. évf. tanulója, Flórik György tanítványa és Werner Miklós, ugyan sak az ELTE Apá zai Csere J. Gyak. Gimn.
12. évf. tanulója, Flórik György tanítványa.
A díjakkal és di séretekkel pénzjutalmak és könyvutalványok is jártak, az I. díjjal 25 000, a II. díjjal 15 000, a
III. díjjal 10 000, a di séretekkel 8000 forint értékben. Ezeket részben az Eötvös Társulat, részben önkéntes adomá-
nyozók (Gutai László professzor, USA; Indotek Zrt., Budapest) biztosították. A díjazott és di séretet nyert diákok
tanárai a Typotex, a Vin e, az Akkord és a Nemzeti Tankönyvkiadó által felajánlott könyvekb®l válogathattak. Utána
a Versenybizottság elnöke ismertette azokat a válaszokat, melyeket az elmúlt húsz évben az Eötvös-versenyen díjazott
versenyz®k adtak az alábbi körkérdésre:  Érdemes ma
zikusnak, matematikusnak, mérnöknek, tanárnak készülni az
egyetemen?  A válaszok általában pozitívak voltak, ezeket egészítette ki Ge erth András szóban, a helyszínen. A BME
oktatója elmondta, hogy épp most készül állást változtatni, pénzügyi területen próbálja ki képességeit, itt szeretné
hasznosítani a M¶egyetemen szerzett tudását.
A régi és mai Eötvös-verseny nyertesek végül közös fényképezésen vettek részt. Diákok és tanárok vidám beszél-
getéssel oldották a még meglév® feszültséget, ismerkedtek egymással, ki serélték élményeiket. Mindehhez a Ramasoft
Zrt. biztosított üdít®t, pogá sát,
nom szendvi seket.
Általános volt a vélemény, hogy kellemes három órát töltött együtt a
zikát szeret®k társasága. Néhány nap múlva
az MTV  Válaszd a tudást!  m¶sora tíz per es adásban számolt be az eseményr®l, melyért Montskó Éva és Gyenes
Károly szerkeszt®ket illeti köszönet.
