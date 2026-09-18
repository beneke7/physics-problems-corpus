---
id: solution-ocr-eotvos-1998-s-p3
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1998_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1998-solenoid-induction]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. Egy szolenoid keresztmetszete $d$ oldalélú négyzet, hossza $L ( L \gg d )$. A tekercsben folyó egyenáram hatására mélyen a szolenoid belsejében $B _ { 0 }$ indukciójú homogén mágneses maző alakul ki. A tekercset függőlegesen helyeztük el. Közvetlenül a tekercs felső vége felett egy ugyancsak $d$ oldalélú, négyzet alakú, vízszintes vezető keret függ $l$ hosszúságú fonalakon $( l \gg d )$, a 6. ábrán látható módon. A keret tömege $m$, elektromos ellenállása $R$.

A szolenoidot hirtelen vízszintesen, jobb felé elrántjuk. Melyik irányban lendül ki és milyen magasra emelkedik fel az ingaszerúen felfüggesztett keret?
(Gnädig Péter)
Megoldás.
Gondoljuk át a folyamatot! Az ingaszerúen felfüggesztett keret mágneses mezőbe merül. Ha „kimegy alóla” a szolenoid, kimegy a mező is - ez pedig feszültséget indukál a keretben. A fellépő indukált áramra hat a távozóban lévő mágneses mező, ami a józan sejtés szerint maga után rántja a keretet is. Mindezeket a sejtéseket megfelelő fizikai törvényekkel kell még alátámasztanunk (vagy megcáfolnunk), s a kvantitatív törvények alkalmazásával majd arra is válaszolni tudunk, hogy milyen magasra emelkedik fel a keret.

A megoldás egyik kulcskérdése az, hogy mit állíthatunk arról a mágneses mezőről, amibe belemerül a keret. Tudjuk, hogy a mágneses indukcióvektor nagysága mélyen a tekercs belsejében $B _ { 0 }$, de milyen a mágneses mező a szolenoid végén? Az is elég lenne, ha a fluxust meg tudnánk határozni.

Egy kis gondolatkísérlet segíteni fog. Tudjuk, hogy a fluxus mélyen a szolenoid belsejében: $B _ { 0 } \cdot A = B _ { 0 } \cdot d ^ { 2 }$. Gondolatban vágjuk itt a szolenoidot vízszintesen ketté! Nem kell a huzalt is elvágnunk, csupán gondoljuk azt, hogy itt két, azonos keresztmetszetú és menetemelkedésú, azonos árammal átjárt tekercs van összetolva. Nyilvánvaló, hogy mindkét tekercs azonos mértékben járul hozzá az itt kialakuló fluxushoz, amiből pedig már következik, hogy a mágneses fluxus a szolenoid végénél: $\frac { 1 } { 2 } B _ { 0 } d ^ { 2 }$.

Nem állíthatjuk azt, hogy a mágneses mezó a szolenoid végén is homogén; a $B$ vonalak széthajlanak. Azt azonban bizton állíthatjuk, hogy a mágneses indukcióvektor függőleges komponense a tekercs végénél mindenhol $\frac { 1 } { 2 } B _ { 0 }$ nagyságú.

A $d$ élhosszúságú, négyzet alakú keret tehát egy olyan mágneses mezőbe merül, amelynek fluxusa $\Phi = \frac { 1 } { 2 } B _ { 0 } d ^ { 2 }$. Amikor - mondjuk $\Delta t$ idő alatt - elrántjuk a szolenoidot, ez a fluxus zérusra csökken. Így a keretben indukálódó feszültség nagysága:

$$
\left| U _ { \mathrm { ind } } \right| = \left| \frac { \Delta \Phi } { \Delta t } \right| = \frac { B _ { 0 } d ^ { 2 } } { 2 \Delta t } .
$$

A $\Delta t$ idő alatt megszűnő fluxus által a keretben indukált áram nagysága:

$$
I = \frac { 1 } { R } \frac { B _ { 0 } d ^ { 2 } } { 2 \Delta t } .
$$

Tételezzük fel, hogy pontosan ekkora áram folyik $\Delta t$ időn keresztül a keretben - addig és csak addig, amíg változik a fluxus. De hát eközben a keret jobb oldali, $d$ hosszúságú szakaszára (az itt folyó áramra) még erót fejt ki a mágneses mező! Írjuk fel az erre ható erőlökést:

$$
F \cdot \Delta t = B I d \cdot \Delta t = \frac { B _ { 0 } } { 2 } \frac { 1 } { R } \frac { B _ { 0 } d ^ { 2 } } { 2 \Delta t } d \cdot \Delta t
$$


Ez a keretnek $m v _ { 0 } = F \Delta t = \frac { B _ { 0 } ^ { 2 } d ^ { 3 } } { 4 R }$ lendületet ad. A keret tehát

$$
v _ { 0 } = \frac { B _ { 0 } ^ { 2 } d ^ { 3 } } { 4 R m }
$$

sebességgel kilendül, és felemelkedik

$$
h = \frac { v _ { 0 } ^ { 2 } } { 2 g } = \frac { B _ { 0 } ^ { 4 } d ^ { 6 } } { 32 R ^ { 2 } m ^ { 2 } g }
$$

magasságra.
Már csak azt kell meghatároznunk, hogy milyen irányban lendül ki a keret. A feladathoz tartozó ábráról leolvasható, hogy a mágneses indukcióvektor a szolenoid belsejében függőlegesen felfelé irányul. A szolenoid elrántása közben a keretben olyan irányú áram indukálódik, amelyik (Lenz törvénye alapján) a keret fluxusának csökkenését akadályozni igyekszik. Ezek szerint az indukált áram a keretben felülről nézve az óramutató járásával ellentétes irányú, mivel az ebből származó indukcióvektor mutat felfelé. A keret jobb oldali szakaszán ezek szerint befelé, hátrafelé folyik az indukált áram. Ez $\Delta t$ ideig bemerül egy olyan mágneses mezőbe, amelyben a mágneses indukcióvektor függőleges komponense felfelé mutat. Az erre ható erő pedig jobbra irányul!

Tehát a keret jobbra fog kilendülni. Helyes volt a sejtésünk, az elrántott tekercs maga után rántja a keretet.
Érdemes még kitérnünk arra, hogy valójában a keretben folyó áram nem lesz végig ugyanakkora, csupán az átlagértéke az az $I$, amit kiszámítottunk. Ennek megfelelően az áramra ható erő sem állandó, viszont az $F _ { \text {átl } } \cdot \Delta t$ szorzat pontosan megadja azt a vízszintes erőlökést, amit a keret kap.

Természetesen ahhoz is időre van szükség, hogy a keret sebessége nulláról $v _ { 0 }$-ra nőjön, az eközben megtett utat elhanyagoltuk a fenti megoldásban. Ez a szokásos elhanyagolás a ballisztikus inga és sok hasonló ütközési folyamat tárgyalásából ismerős. Eredményünk tehát most is csak közelítő érvényú, pontossága a közelítés jogosságától függ. A feladat ugyan paraméteresen lett kitúzve, az „elrántás” szó utalt azonban arra, hogy a fenti közelítést joggal alkalmazhatjuk.

## A verseny eredménye

Elsǒ díjat és vele 6 ezer forintos pénzjutalmat nyertek:
Sarlós Ferenc, a JATE fizikus hallgatója, aki a bajai III. Béla Gimnáziumban érettségizett mint Polgár László, Szkladányi András és Hilbert Margit tanítványa;

Végh Dávid, az ELTE fizikus hallgatója, aki a Fazekas Mihály Fővárosi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa.

Második díjat és vele 5 ezer forintos pénzjutalmat nyertek:
Rozsonday Gerzson, a debreceni KLTE Gyakorló Gimnáziumának 12. osztályos tanulója, Kirsch Éva és Szegedi Ervin tanítványa;

Somogyi Gábor, a KLTE fizikus hallgatója, aki a debreceni Tóth Árpád Gimnáziumban érettségizett mint Baló Péter tanítványa;

Terpai Tamás, a Fazekas Mihály Fốvárosi Gyakorló Gimnázium 12. osztályos tanulója, Horváth Gábor tanítványa.
Harmadik díjat és vele 4 ezer forintos pénzjutalmat nyertek:
Gulyás Nándor, a mezókovácsházai Hunyadi János Gimnázium 12. osztályos tanulója, Sallai István és Varga István tanítványa;

Hegedũs Åkos, a pécsi ciszterci Nagy Lajos Gimnázium 11. osztályos tanulója, Orovica Márkné tanítványa;
Kormos Márton, az ELTE fizikus hallgatója, aki a debreceni KLTE Gyakorló Gimnáziumban érettségizett mint Szegedi Ervin és Farkas József tanítványa;

Máthé András, a budapesti ELTE Apáczai Csere János Gyakorló Gimnázium 11. osztályos tanulója, Flórik György tanítványa;

Szõke Szilárd-Zsigmond, a temesvári Müszaki Egyetem (Traian Vuia Politechnica) mérnök hallgatója, aki a temesvári Bartók Béla Líceumban érettségizett mint Toró T. Tibor és Benedek István tanítványa.

Dicséretet kaptak a verseny 11-18. helyezettjei:
Bálint Imre, az ELTE fizikus hallgatója, aki Szegeden, a JATE Ságvári Endre Gyakorló Gimnáziumban érettségizett mint Homolya Ernő tanítványa;

Császár Balázs, a BME mérnök-fizikus hallgatója, aki a szombathelyi premontrei rendi Szent Norbert Gimnáziumban érettségizett mint Heigl István és Kovács László tanítványa;

Katona Gergely, a budapesti ELTE Trefort Ágoston Gyakorlóiskola 12. osztályos tanulója, Szörényi Zoltán tanítványa;

Nagy Kálmán, a budapesti Veres Péter Gimnázium 12. osztályos tanulója, Varga Mária tanítványa;


Pogány Ádám, az ELTE fizikus hallgatója, aki a Fazekas Mihály Fốvárosi Gyakorló Gimnáziumban érettségizett mint Horváth Gábor tanítványa;

Rácz Balázs, a budapesti Veres Péter Gimnázium 12. osztályos tanulója, Varga Mária tanítványa;
Tóth Bálint, a Fazekas Mihály Fővárosi Gyakorló Gimnázium 12. osztályos tanulója, Horváth Gábor és Dvorák Cecília tanítványa;

Tóth Gyula, a debreceni Tóth Árpád Gimnázium 12. osztályos tanulója, Kovács Miklós tanítványa.
Az ünnepélyes eredményhirdetésre a BME Fizikai Intézetében került sor 1998. november 20-án.
A megjelent versenyzőket és tanáraikat a házigazdák nevében Kertész János egyetemi tanár üdvözölte, majd a Versenybizottság elnöke emlékezett meg a 100 évvel ezelőtti versenyről s annak nyerteseiről. Az első díjat akkor Kármán Tódor nyerte, akinek Beke Manó volt tanára a budapesti Mintagimnáziumban. A második díjas Gróffits Gábor is a budapesti múegyetemen szerzett mérnöki diplomát, akárcsak Kármán Tódor.

Ezután a feladatok megoldásának diszkussziója következett, amelyhez Härtlein Károly mutatott be érdekes kísérleteket. A második feladathoz kapcsolódó mérést s ennek számítógépes kiértékelését videón tekinthették meg a jelenlévők.

A díjakat az Eötvös Loránd Fizikai Társulat fótitkára: Nagy Dénes Lajos és helyettese, a Versenybizottság elnöke adta át, aki köszönetet mondott a Nemzeti Tankönyvkiadónak és a TypoTeX Könyvkiadónak a felajánlott könyvutalványokért és könyvekért.

A díjkiosztáson megjelent Dolinszky Tamás is, aki 1939-ben nyert díjat a versenyen.
Radnai Gyula
![](../../../figures/solution-ocr/ac89554cd9a683c423a91fc8.jpg)


![](../../../figures/solution-ocr/cfb06c1b62c11447b37613cc.jpg)


![](../../../figures/solution-ocr/d22b75f72457ec69a85ae27f.jpg)
