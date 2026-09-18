---
id: eotvos-2005-transformer-circuit
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2005-transformer-circuit
solution_type: official
source_document: solution-document-eotvos-2005-s
source_pdf: cache/phoxiv/eotvos/2005_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2005_S.pdf."
---

3. Egy jó min®ség¶ transzformátor szekunder teker sének menetszáma háromszorosa a primer teker sének. Ezt a
trafót a 11. ábra szerint hálózati váltóáramú feszültségforrásra kap soljuk a következ® módon: A primer körbe egymással
párhuzamosan iktatunk be öt egyforma, a hálózati feszültségre méretezett izzó közül négyet, az ötödiket a szekunder körbe
kötjük. Mi történik a K kap soló zárása után?
11. ábra
a) Mindegyik izzó t¶rhet®en ég.
b) A primer körbeli négy izzó szépen ég, az ötödik legfeljebb pislákol.
c) A szekunder körbeli izzó egy pillanat alatt kiég, utána a primer körbeli izzók sem világítanak, mivel a primer
teker s fojtóteker sként hat.
Melyik a helyes válasz?
Megoldás. Ezt a feladatot is többféleképpen lehet megoldani. Eljuthatunk a helyes válaszhoz okoskodással, ana-
lógiák felhasználásával, úgy, ahogy például az el®z® feladat megoldásának bemutatásakor jártunk el. Most más utat
választunk: bemutatjuk a lehet® legrövidebb utat, ahogy a megoldást megkaphatjuk.
Ismert   szakkönyvekben, példatárakban megtalálható, így az Eötvös-versenyen szabadon felhasználható   a transz-
formátor helyettesít® kap solása, ami a 12. ábrán látható.
12. ábra
Els® közelítésben tekintsünk el attól, hogy az izzók ellenállása függ a rajtuk áthaladó áramtól (erre még vissza-
térünk), és induljunk ki abból, hogy van öt egyforma ellenállásunk. Az ered® a szekunder oldalon R, primer oldalon
R/4, a párhuzamos kap solás miatt. Mivel a szekunder teker s menetszáma háromszorosa a primer teker sének, ezért
a helyettesít® kap solásban ide R/9 ellenállás kerül (13. ábra).
13. ábra
Egy jó min®ség¶ transzformátor szekunder teker sének váltóáramú ellenállása sokkal nagyobb, mint az izzó ellen-
állásának kilen ed része, ezért jó közelítésben írhatjuk:
U1 : U2 =
R
4
:
R
9
,
valamint U1 + U2 = U és U3 = 3U2. Ezekb®l az összefüggésekb®l következik:
U1 =
9
13
U, U2 =
4
13
U, U3 =
12
13
U.
A primer tagban egy-egy izzóra jutó teljesítmény:
U2
1
R
=
81
169
U2
R
= 0,48
U2
R
,
durván fele annak a teljesítménynek, amellyel a hálózati feszültségen világítanának. A szekunder körben az izzó telje-
sítménye:
U2
3
R
=
144
169
U2
R
= 0,85
U2
R
,
nin s nagyon messze attól a teljesítményt®l, amellyel ez az izzó a hálózati feszültségen világítana.
Ha most
gyelembe vesszük azt a tényt, hogy ala sonyabb feszültségen (tehát ala sonyabb h®mérsékleten) az izzó
ellenállása is kisebb, azt mondhatjuk, hogy a primer ágban lev® izzók ténylegesen nagyobb teljesítménnyel világítanak,
mint amit most kiszámítottunk.
Bátran állíthatjuk, hogy mindegyik izzó t¶rhet®en ég, vagyis az a) válasz a helyes.
Azok számára, akik járatosak a szinuszos váltóáramú hálózatok komplex számokat felhasználó számításaiban, meg-
mutatjuk a 12. ábrán látható két kap solás egyenérték¶ségét, melyet a megoldásban felhasználtunk. A transzformátor
primer és szekunder körére felírhatjuk:
e U = jωL1
e I1 + jωM e I2,
0 = jωM e I1 + jωL2
e I2 + Re I2,
ahol e I1 a primer-, e I2 a szekunder körben folyó áram komplex alakja, M pedig a két teker s köl sönös induk iós
együtthatója. A második egyenletb®l e I2-t kifejezve és az els® egyenletbe helyettesítve, valamint felhasználva a szoros
satolás esetén érvényes M2
= L1L2 összefüggést, rendezés után kapjuk:
e U =
jωL1R
jωL2 + R
e I1 = e Z · e I1.
A helyettesít® kap solásban jωL1 és R
L1
L2
váltóáramú ellenállások párhuzamos ered®jét kell kiszámítanunk:
f Z′ =
jωL1 · RL1
L2
jωL1 + RL1
L2
=
jωL1R
jωL2 + R
= e Z.
Éppen ez az, amit be akartunk bizonyítani.
A verseny eredménye
A verseny ünnepélyes eredményhirdetésére és a díjkiosztásra 2005. november 25-én délután került sor az ELTE
Mogyoródi József termében.
Bevezetésként a versenybizottság elnöke emlékezett vissza az 50 évvel ezel®tti és a 25 évvel ezel®tti versenyre.
Írásvetít®n kivetítette az 50 évvel korábbi feladatokat, valamint az akkori nyertesek egy-egy KöMaL feladatra adott
egykori megoldását. A feladatokat Kárteszi Feren , illetve Prékopa András t¶zte ki (akkor még nem volt
zika rovat
a KöMaL-ban). Aki a versenyt megnyerte, Bártfai Pál matematikus, ma a Kürs hák-verseny zs¶rijének oszlopos
tagja. Elfogadta meghívásunkat, személyesen ( saládosan!) megjelent az eredményhirdetésen, és néhány mondatban
felelevenítette emlékeit. Nem sak a versenyr®l beszélt, hanem a felkészülésr®l is, Vermes tanár úr szakkörér®l, melynek
oly sokat köszönhetett
zikából. Utána az elnök az 50 évvel ezel®tti második helyezett, az Egyesült Államokban él®
Gutai László
zikus levelét olvasta fel.   is megemlékezett egykori tanáráról, Varga Zoltánról, aki ®t Újpesten tanította.
A 25 évvel ezel®tti Eötvös-verseny nyertesek közül Szalontai Zoltán és Umann Gábor jelent meg, mindketten a KöMaL
szorgalmas feladatmegoldói voltak, négy éven át jelent meg fényképük a legjobb megoldók között. Ezeket a képeket
egymás mellé vetítve láthatták most a megjelentek.
Ezek után került sor a feladatok fent leírt megoldásának ismertetésére. Mindegyik feladathoz kap solódott kísérlet
is: az els®t Honyek Gyula, a másodikat és a harmadikat Gnädig Péter mutatta be.
Következtek az ünnepélyes eredményhirdetés legizgalmasabb pillanatai: az elnök Patkós András akadémikust, az
Eötvös Loránd Fizikai Társulat elnökét kérte fel a díjak és az oklevelek átadására.
I. díjat, a vele járó Eötvös-verseny érmet és 20 ezer forintos jutalmat kapta Varjas Dániel, a BME mérnök-
zikus
hallgatója, aki a dunaújvárosi Szé henyi István Gimnáziumban érettségizett mint Kispál István tanítványa. Varjas
Dániel tavaly is els® díjat kapott az Eötvös-versenyen, így hát ® az els® az országban, aki két Eötvös-verseny éremmel
is rendelkezik. Nehéz volt megmondani, hogy ®, vagy Kispál tanár úr hatódott-e meg jobban, amikor kiderült, hogy
Dani nyert a versenyen.
A versenybizottság döntése értelmében hárman kaptak II. díjat és vele 14 ezer forint jutalmat, ketten III. díjat és
vele 12 ezer forint jutalmat, valamint hat versenyz®t részesített a zs¶ri di séretben:
II. díjasok: Halász Gábor, az ELTE Radnóti Miklós Gyakorló Gimnáziumának 12. osztályos tanulója, Honyek
Gyula tanítványa; Kómár Péter, az ELTE
zikus hallgatója, aki a Fazekas Mihály F®városi Gyakorló Gimnázium-
ban érettségizett mint Dvorák Ce ília tanítványa és Szolnoki Lénárd, a Debre eni Református Kollégium Dó zy
Gimnáziumának 10. osztályos tanulója, Tófalusi Péter tanítványa.
III. díjasok: Kónya Gábor, a Fazekas Mihály F®városi Gyakorló Gimnázium 11. osztályos tanulója, Horváth
Gábor tanítványa és Szé henyi Gábor, a szolnoki Verseghy Feren Gimnázium 12. osztályos tanulója, Pé si István
tanítványa.
Di séretet kapott Farkas Ádám László, a miskol i Földes Feren Gimnázium 11. osztályos tanulója, Zámborszky
Feren tanítványa; Feren zy Máté, a BME mérnök-
zikus hallgatója, aki a Fazekas Mihály F®városi Gyakorló
Gimnáziumban érettségizett mint Dvorák Ce ília tanítványa; Németh Balázs, a székesfehérvári Tóparti Gimnázium
11. osztályos tanulója, Tóthné Rohovszky Katalin tanítványa; Pálinkás András, az ELTE
zikus hallgatója, aki
a budapesti Piarista Gimnáziumban érettségizett mint Futó Béla tanítványa; Paulin Roland, a Fazekas Mihály
F®városi Gyakorló Gimnázium 12. osztályos tanulója, Horváth Gábor tanítványa és Végh Sándor, a Debre eni
Egyetem Kossuth Lajos Gimnáziumának 12. osztályos tanulója, Kirs h Éva és Szegedi Ervin tanítványa.
A nyertes versenyz®k tanárai, akik szintén meghívót kaptak az ünnepélyes díjkiosztásra, a Typotex Kiadó által
erre a élra felajánlott könyvek közül válogathattak.
Végül Patkós András akadémikus elevenítette fel az Eötvös-versennyel kap solatos régebbi és legújabb emlékeit,
benyomásait (lásd a hátsó bels® borítón középen jobbra). Utána közös fényképezkedés következett, melyen az 50 és a
25 évvel ezel®tti nyertes fogta közre az idei els® díjast, s egy jó hangulatú baráti beszélgetésben folytatódott az egymást
eddig java részt sak hírb®l ismer® meghívottak társalgása. A Ramasoft Rt. jóvoltából üdít® és
nom szendvi sek is
jutottak a végig ott maradóknak.
