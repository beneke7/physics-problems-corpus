---
id: solution-ocr-eotvos-2005-s-p3
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2005_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2005-transformer-circuit]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. Egy jó minóségü transzformátor szekunder tekercsének menetszáma háromszorosa a primer tekercsének. Ezt a trafót a 11. ábra szerint hálózati váltóáramú feszültségforrásra kapcsoljuk a következő módon: A primer körbe egymással párhuzamosan iktatunk be öt egyforma, a hálózati feszültségre méretezett izzó közül négyet, az ötödiket a szekunder körbe kötjük. Mi történik a $K$ kapcsoló zárása után?

![](../../../figures/solution-ocr/fb4d2dec0077eb43ce3b6212.jpg)
11. ábra

a) Mindegyik izzó tữrhetốen ég.
b) A primer körbeli négy izzó szépen ég, az ötödik legfeljebb pislákol.
c) A szekunder körbeli izzó egy pillanat alatt kiég, utána a primer körbeli izzók sem világítanak, mivel a primer tekercs fojtótekercsként hat.

Melyik a helyes válasz?
Megoldás. Ezt a feladatot is többféleképpen lehet megoldani. Eljuthatunk a helyes válaszhoz okoskodással, analógiák felhasználásával, úgy, ahogy például az előző feladat megoldásának bemutatásakor jártunk el. Most más utat választunk: bemutatjuk a lehető legrövidebb utat, ahogy a megoldást megkaphatjuk.

Ismert - szakkönyvekben, példatárakban megtalálható, így az Eötvös-versenyen szabadon felhasználható - a transzformátor helyettesítő kapcsolása, ami a 12. ábrán látható.


![](../../../figures/solution-ocr/6ee007ab49e856fc8b01d084.jpg)
12. ábra

Első közelítésben tekintsünk el attól, hogy az izzók ellenállása függ a rajtuk áthaladó áramtól (erre még visszatérünk), és induljunk ki abból, hogy van öt egyforma ellenállásunk. Az eredő a szekunder oldalon $R$, primer oldalon $R / 4$, a párhuzamos kapcsolás miatt. Mivel a szekunder tekercs menetszáma háromszorosa a primer tekercsének, ezért a helyettesítő kapcsolásban ide $R / 9$ ellenállás kerül (13. ábra).

![](../../../figures/solution-ocr/d7ac2bfd5e764a88b4c1c54a.jpg)
13. ábra

Egy jó minőségú transzformátor szekunder tekercsének váltóáramú ellenállása sokkal nagyobb, mint az izzó ellenállásának kilenced része, ezért jó közelítésben írhatjuk:

$$
U _ { 1 } : U _ { 2 } = \frac { R } { 4 } : \frac { R } { 9 } ,
$$

valamint $U _ { 1 } + U _ { 2 } = U$ és $U _ { 3 } = 3 U _ { 2 }$. Ezekból az összefüggésekből következik:

$$
U _ { 1 } = \frac { 9 } { 13 } U , \quad U _ { 2 } = \frac { 4 } { 13 } U , \quad U _ { 3 } = \frac { 12 } { 13 } U .
$$

A primer tagban egy-egy izzóra jutó teljesítmény:

$$
\frac { U _ { 1 } ^ { 2 } } { R } = \frac { 81 } { 169 } \frac { U ^ { 2 } } { R } = 0,48 \frac { U ^ { 2 } } { R } ,
$$

durván fele annak a teljesítménynek, amellyel a hálózati feszültségen világítanának. A szekunder körben az izzó teljesítménye:

$$
\frac { U _ { 3 } ^ { 2 } } { R } = \frac { 144 } { 169 } \frac { U ^ { 2 } } { R } = 0,85 \frac { U ^ { 2 } } { R } ,
$$

nincs nagyon messze attól a teljesítménytől, amellyel ez az izzó a hálózati feszültségen világítana.
Ha most figyelembe vesszük azt a tényt, hogy alacsonyabb feszültségen (tehát alacsonyabb hőmérsékleten) az izzó ellenállása is kisebb, azt mondhatjuk, hogy a primer ágban levó izzók ténylegesen nagyobb teljesítménnyel világítanak, mint amit most kiszámítottunk.

Bátran állíthatjuk, hogy mindegyik izzó tứrhetốen ég, vagyis az $a$ ) válasz a helyes.
Azok számára, akik járatosak a szinuszos váltóáramú hálózatok komplex számokat felhasználó számításaiban, megmutatjuk a 12. ábrán látható két kapcsolás egyenértékúségét, melyet a megoldásban felhasználtunk. A transzformátor primer és szekunder körére felírhatjuk:

$$
\begin{aligned}
& \widetilde { U } = j \omega L _ { 1 } \widetilde { I } _ { 1 } + j \omega M \widetilde { I _ { 2 } } , \\
& 0 = j \omega M \widetilde { I _ { 1 } } + j \omega L _ { 2 } \widetilde { I _ { 2 } } + R \widetilde { I _ { 2 } } ,
\end{aligned}
$$

ahol $\widetilde { I _ { 1 } }$ a primer-, $\widetilde { I _ { 2 } }$ a szekunder körben folyó áram komplex alakja, $M$ pedig a két tekercs kölcsönös indukciós együtthatója. A második egyenletből $\widetilde { I } _ { 2 }$-t kifejezve és az első egyenletbe helyettesítve, valamint felhasználva a szoros csatolás esetén érvényes $M ^ { 2 } = L _ { 1 } L _ { 2 }$ összefüggést, rendezés után kapjuk:

$$
\widetilde { U } = \frac { j \omega L _ { 1 } R } { j \omega L _ { 2 } + R } \widetilde { I } _ { 1 } = \widetilde { Z } \cdot \widetilde { I } _ { 1 } .
$$

A helyettesítő kapcsolásban $j \omega L _ { 1 }$ és $R \frac { L _ { 1 } } { L _ { 2 } }$ váltóáramú ellenállások párhuzamos eredőjét kell kiszámítanunk:

$$
\widetilde { Z ^ { \prime } } = \frac { j \omega L _ { 1 } \cdot R \frac { L _ { 1 } } { L _ { 2 } } } { j \omega L _ { 1 } + R \frac { L _ { 1 } } { L _ { 2 } } } = \frac { j \omega L _ { 1 } R } { j \omega L _ { 2 } + R } = \widetilde { Z } .
$$

Éppen ez az, amit be akartunk bizonyítani.


## A verseny eredménye

A verseny ünnepélyes eredményhirdetésére és a díjkiosztásra 2005. november 25-én délután került sor az ELTE Mogyoródi József termében.

Bevezetésként a versenybizottság elnöke emlékezett vissza az 50 évvel ezelőtti és a 25 évvel ezelőtti versenyre. Írásvetítőn kivetítette az 50 évvel korábbi feladatokat, valamint az akkori nyertesek egy-egy KöMaL feladatra adott egykori megoldását. A feladatokat Kárteszi Ferenc, illetve Prékopa András tǘzte ki (akkor még nem volt fizika rovat a KöMaL-ban). Aki a versenyt megnyerte, Bártfai Pál matematikus, ma a Kürschák-verseny zsürijének oszlopos tagja. Elfogadta meghívásunkat, személyesen (családosan!) megjelent az eredményhirdetésen, és néhány mondatban felelevenítette emlékeit. Nem csak a versenyról beszélt, hanem a felkészülésről is, Vermes tanár úr szakköréről, melynek oly sokat köszönhetett fizikából. Utána az elnök az 50 évvel ezelőtti második helyezett, az Egyesült Államokban élő Gutai László fizikus levelét olvasta fel. Ô is megemlékezett egykori tanáráról, Varga Zoltánról, aki ốt Újpesten tanította. A 25 évvel ezelőtti Eötvös-verseny nyertesek közül Szalontai Zoltán és Umann Gábor jelent meg, mindketten a KöMaL szorgalmas feladatmegoldói voltak, négy éven át jelent meg fényképük a legjobb megoldók között. Ezeket a képeket egymás mellé vetítve láthatták most a megjelentek.

Ezek után került sor a feladatok fent leírt megoldásának ismertetésére. Mindegyik feladathoz kapcsolódott kísérlet is: az elsőt Honyek Gyula, a másodikat és a harmadikat Gnädig Péter mutatta be.

Következtek az ünnepélyes eredményhirdetés legizgalmasabb pillanatai: az elnök Patkós András akadémikust, az Eötvös Loránd Fizikai Társulat elnökét kérte fel a díjak és az oklevelek átadására.
I. díjat, a vele járó Eötvös-verseny érmet és 20 ezer forintos jutalmat kapta Varjas Dániel, a BME mérnök-fizikus hallgatója, aki a dunaújvárosi Széchenyi István Gimnáziumban érettségizett mint Kispál István tanítványa. Varjas Dániel tavaly is első díjat kapott az Eötvös-versenyen, így hát ő az első az országban, aki két Eötvös-verseny éremmel is rendelkezik. Nehéz volt megmondani, hogy ó, vagy Kispál tanár úr hatódott-e meg jobban, amikor kiderült, hogy Dani nyert a versenyen.

A versenybizottság döntése értelmében hárman kaptak II. díjat és vele 14 ezer forint jutalmat, ketten III. díjat és vele 12 ezer forint jutalmat, valamint hat versenyzőt részesített a zsüri dicséretben:
II. díjasok: Halász Gábor, az ELTE Radnóti Miklós Gyakorló Gimnáziumának 12. osztályos tanulója, Honyek Gyula tanítványa; Kómár Péter, az ELTE fizikus hallgatója, aki a Fazekas Mihály Fővárosi Gyakorló Gimnáziumban érettségizett mint Dvorák Cecília tanítványa és Szolnoki Lénárd, a Debreceni Református Kollégium Dóczy Gimnáziumának 10. osztályos tanulója, Tófalusi Péter tanítványa.
III. díjasok: Kónya Gábor, a Fazekas Mihály Fốvárosi Gyakorló Gimnázium 11. osztályos tanulója, Horváth Gábor tanítványa és Széchenyi Gábor, a szolnoki Verseghy Ferenc Gimnázium 12. osztályos tanulója, Pécsi István tanítványa.

Dicséretet kapott Farkas Ádám László, a miskolci Földes Ferenc Gimnázium 11. osztályos tanulója, Zámborszky Ferenc tanítványa; Ferenczy Máté, a BME mérnök-fizikus hallgatója, aki a Fazekas Mihály Fóvárosi Gyakorló Gimnáziumban érettségizett mint Dvorák Cecília tanítványa; Németh Balázs, a székesfehérvári Tóparti Gimnázium 11. osztályos tanulója, Tóthné Rohovszky Katalin tanítványa; Pálinkás András, az ELTE fizikus hallgatója, aki a budapesti Piarista Gimnáziumban érettségizett mint Futó Béla tanítványa; Paulin Roland, a Fazekas Mihály Fốvárosi Gyakorló Gimnázium 12. osztályos tanulója, Horváth Gábor tanítványa és Végh Sándor, a Debreceni Egyetem Kossuth Lajos Gimnáziumának 12. osztályos tanulója, Kirsch Éva és Szegedi Ervin tanítványa.

A nyertes versenyzők tanárai, akik szintén meghívót kaptak az ünnepélyes díjkiosztásra, a Typotex Kiadó által erre a célra felajánlott könyvek közül válogathattak.

Végül Patkós András akadémikus elevenítette fel az Eötvös-versennyel kapcsolatos régebbi és legújabb emlékeit, benyomásait (lásd a hátsó belső borítón középen jobbra). Utána közös fényképezkedés következett, melyen az 50 és a 25 évvel ezelőtti nyertes fogta közre az idei első díjast, s egy jó hangulatú baráti beszélgetésben folytatódott az egymást eddig java részt csak hírből ismerő meghívottak társalgása. A Ramasoft Rt. jóvoltából üdítő és finom szendvicsek is jutottak a végig ott maradóknak.
