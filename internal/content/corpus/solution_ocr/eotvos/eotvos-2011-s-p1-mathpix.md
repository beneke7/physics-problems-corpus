---
id: solution-ocr-eotvos-2011-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2011-satellite-decay]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. feladat. Pályafutásuk végén a sorsukra hagyott mữholdak a sebesség négyzetével arányos légellenállási erố hatására fokozatosan veszítenek mechanikai energiájukból, és végül a légkör sưrữb rétegeibe érve elégnek. Belátható, hogy az eredetileg körpályákon keringố műholdak a Föld felszínéhez közeledve mindvégig közelítóleg körpályákon haladnak, miközben a „körpályák” sugara lassan csökken.

Tegyük fel, hogy egy $m = 500 \mathrm {~kg}$ tömegü̃ müholdat, amely az Egyenlítő sikjában, $h = 400 \mathrm {~km}$-es magasságban körpályán kering, magára hagynak! A mữholdra ható légellenállási erốt az $F _ { \text {lég } } = K \varrho v ^ { 2 }$ alakban adhatjuk meg, ahol $K = 0,23 \mathrm {~m} ^ { 2 } , \varrho$ a levegố sữrứsége a mữhold magasságában, $v$ pedig a mû́hold sebessége.
a) Határozzuk meg a műhold sebességváltozását, miközben pályamagassága a felére csökken $( h \rightarrow h / 2 )$ !
b) A légellenállási erố, valamint a mű̌holdra ható két eró (gravitációs és légellenállási) eredójének pályamenti (érintốleges) összetevốje között egy egyszerü összefüggés állapítható meg. Hogy szól ez?
c) Mekkora a levegó súrữsége $h / 2 = 200 \mathrm {~km}$ magasságban, ha itt egy fordulat alatt a mữhold pályasugara 100 m -rel csökken?

A megoldáshoz szükséges további adatokat táblázatokból vehetjük.
(Honyek Gyula)
Megoldás. Adottak:

$$
\begin{aligned}
& m = 500 \mathrm {~kg} , \quad h = 400 \mathrm {~km} = 4 \cdot 10 ^ { 5 } \mathrm {~m} , \\
& r _ { 1 } = R + h , \quad r _ { 2 } = R + \frac { h } { 2 } , \\
& F _ { \text {lég } } = K \varrho v ^ { 2 } \left( \text { ahol } K = 0,23 \mathrm {~m} ^ { 2 } \right) , \quad \Delta r = - \varepsilon ( = - 100 \mathrm {~m} ) .
\end{aligned}
$$

Táblázatból vehető a Föld egyenlítői $R$ sugara, $M$ tömege és a gravitációs törvényben szereplő $\gamma$ állandó:

$$
\begin{aligned}
R & = 6378 \mathrm {~km} = 6,378 \cdot 10 ^ { 6 } \mathrm {~m} , \\
M & = 5,974 \cdot 10 ^ { 24 } \mathrm {~kg} , \\
\gamma & = 6,673 \cdot 10 ^ { - 11 } \mathrm {~m} ^ { 3 } / \left( \mathrm { kg } \cdot \mathrm {~s} ^ { 2 } \right) .
\end{aligned}
$$

a) A feladatban megfogalmazott feltételek szerint „a müholdak a Föld felszínéhez közeledve mindvégig közelítően körpályán haladnak", ezért jó közelítésben írhatjuk:

$$
F _ { \text {grav } } = m a _ { \mathrm { cp } } , \quad \gamma \frac { m M } { r ^ { 2 } } = m \frac { v ^ { 2 } } { r } .
$$

Ennek alapján

$$
v = \sqrt { \frac { \gamma M } { r } } ,
$$


amelybe behelyettesítve $r _ { 1 }$ és $r _ { 2 }$ értékeit, megkapjuk a két sebességet:

$$
v _ { 1 } = 7669,0 \frac { \mathrm {~m} } { \mathrm {~s} } , \quad v _ { 2 } = 7784,7 \frac { \mathrm {~m} } { \mathrm {~s} } .
$$

A mühold sebességváltozása tehát

$$
v _ { 2 } - v _ { 1 } = 115,7 \frac { \mathrm {~m} } { \mathrm {~s} } > 0 .
$$

A légellenállás következtében nőtt a mühold sebessége! Szokás ezt ürhajózási paradoxonnak is nevezni. A légellenállási, súrlódási erő munkája szükségképpen negatív, mégis nố a műhold mozgási energiája! Hogyan lehetséges ez? Erre kaphatunk választ a feladat $b$ ) és $c$ ) részének megoldása során. Érdemes lesz mindkét esetben abból indulunk ki, hogyan változik meg a műhold mechanikai összenergiája, vagyis a kinetikus és potenciális energia összege. Ez az, ami a légellenállási eró hatására csökkenhet.
b) A légellenállási erő teljesítménye:

$$
\vec { F } _ { \text {lég } } \cdot \vec { v } = - F _ { \text {lég } } \cdot v < 0 .
$$

Ez egyenló az összenergia változási sebességével:

$$
\begin{equation*}
- F _ { \text {lég } } \cdot v = \frac { \Delta E _ { \text {össz } } } { \Delta t } . \tag{1}
\end{equation*}
$$

Az összenergia kinetikus és potenciális részbő́l áll:

$$
E _ { \text {össz } } = E _ { \mathrm { kin } } + E _ { \mathrm { pot } } = \frac { 1 } { 2 } m v ^ { 2 } + \left( - \gamma \frac { m M } { r } \right) .
$$

E két rész azonban kifejezhető egymásból. Írjuk fel újra a dinamika alaptörvényét:

$$
\gamma \frac { m M } { r ^ { 2 } } = m \frac { v ^ { 2 } } { r } , \quad \text { azaz } \quad \gamma \frac { m M } { r } = m v ^ { 2 } ,
$$

amiből kapjuk:

$$
E _ { \mathrm { kin } } = \frac { 1 } { 2 } m v ^ { 2 } = \frac { 1 } { 2 } \gamma \frac { m M } { r } = \frac { 1 } { 2 } \left( - E _ { \mathrm { pot } } \right) .
$$

Az összenergiát tehát így is felírhatjuk:

$$
E _ { \text {össz } } = E _ { \text {kin } } + E _ { \text {pot } } = E _ { \text {kin } } - 2 E _ { \text {kin } } = - E _ { \text {kin } } < 0 .
$$

(Az, hogy az összenergia negatív, nem kell, hogy megijesszen senkit, az atomfizikában számos példát látunk erre.)
Most tehát (1) így írható:

$$
- F _ { \mathrm { lég } } \cdot v = - \frac { \Delta E _ { \mathrm { kin } } } { \Delta t } ,
$$

illetve

$$
F _ { \text {lég } } \cdot v = \frac { \Delta \left( \frac { 1 } { 2 } m v ^ { 2 } \right) } { \Delta t } = m v \frac { \Delta v } { \Delta t } = m v a _ { \mathrm { t } } .
$$

A légellenállásra egy érdekes kifejezést kaptunk:

$$
\begin{equation*}
F _ { \text {lég } } = m a _ { \mathrm { t } } . \tag{2}
\end{equation*}
$$

Az $m a _ { \mathrm { t } }$ kifejezés a tangenciális (pályamenti) eredő erốt adja, amely most a gravitációs erő pályamenti összetevőjének és a légellenállási erónek az eredője (1. ábra), tehát

$$
m a _ { \mathrm { t } } = F _ { \text {grav } \| } - F _ { \text {lég } } .
$$

Ezt vessük össze (2)-vel:

$$
F _ { \text {lég } } = F _ { \text {grav } \| } - F _ { \text {lég } } .
$$

![](../../../figures/solution-ocr/1e6525aa86e30713d56285db.jpg)


1. ábra. A feladat számadataival: $F _ { \text {grav } } = 4,6 \mathrm { kN } , F _ { \text {lég } } = 5,6 \mathrm { mN }$, $\varphi = 1,2 \cdot 10 ^ { - 6 } \mathrm { rad } = 0,25 ^ { \prime \prime }$. A vázlatos ábra nem méretarányos

Az az egyszerú összefüggés tehát, amely a légellenállási erő, valamint a műholdra ható két eró (gravitációs és légellenállási) eredőjének pályamenti összetevője között fennáll az, hogy e kettő nagysága egyenló egymással.
c) Ismét az összenergia változásából érdemes kiindulnunk, de az összenergiát most ne a kinetikus, hanem a potenciális energiával fejezzük ki, felhasználva az $E _ { \text {kin } } = - E _ { \text {pot } } / 2$ összefüggést:

$$
\begin{gathered}
E _ { \text {össz } } = E _ { \mathrm { kin } } + E _ { \mathrm { pot } } = - \frac { E _ { \mathrm { pot } } } { 2 } + E _ { \mathrm { pot } } = \frac { E _ { \mathrm { pot } } } { 2 } . \\
\frac { \Delta E _ { \text {össz} } } { \Delta t } = \frac { 1 } { 2 } \frac { \Delta E _ { \mathrm { pot } } } { \Delta t } ,
\end{gathered}
$$

ami $\Delta r$-rel szorozva és osztva így is írható:

$$
\frac { \Delta E _ { \text {össz } } } { \Delta t } = \frac { 1 } { 2 } \frac { \Delta E _ { \mathrm { pot } } } { \Delta r } \frac { \Delta r } { \Delta t } .
$$

Mit mondhatunk a sugár változási sebességéről? Ismert adat, hogy egyetlen fordulat során a pályasugár $\varepsilon = 100$ méterrel csökken, tehát

$$
\frac { \Delta r } { \Delta t } = \frac { - \varepsilon } { T } = \frac { - \varepsilon } { \frac { 2 r \pi } { v } } .
$$

Határozzuk meg a potenciális energia és a pályasugár változásának viszonyát:

$$
\frac { \Delta E _ { \mathrm { pot } } } { \Delta r } = \frac { \Delta \left( - \gamma \frac { m M } { r } \right) } { \Delta r } = \gamma \frac { m M } { r ^ { 2 } } .
$$

Most már felírhatjuk az (1) egyenletet, amelyben az összenergiát a potenciális energiával fejezzük ki:

$$
\begin{aligned}
- F _ { \text {lég } } \cdot v & = \frac { \Delta E _ { \text {össz } } } { \Delta t } = \frac { 1 } { 2 } \frac { \Delta E _ { \mathrm { pot } } } { \Delta t } = \frac { 1 } { 2 } \frac { \Delta E _ { \mathrm { pot } } } { \Delta r } \frac { \Delta r } { \Delta t } , \\
- F _ { \text {lég } } \cdot v & = \frac { 1 } { 2 } \gamma \frac { m M } { r ^ { 2 } } \frac { - \varepsilon } { \frac { 2 r \pi } { v } } , \\
F _ { \text {lég } } & = \frac { 1 } { 4 \pi } \gamma \frac { m M } { r ^ { 3 } } \varepsilon , \\
K \varrho v ^ { 2 } & = \frac { 1 } { 4 \pi } \gamma \frac { m M } { r ^ { 3 } } \varepsilon .
\end{aligned}
$$

Ebben az egyenletben már csak $\varrho$ az egyetlen ismeretlen, éppen ezt kellett kiszámítanunk! De hogy még szebb, elegánsabb formulát kapjunk, használjuk fel újra a $v ^ { 2 } = \gamma M / r$ összefüggést, így a következőt kapjuk:

$$
\varrho = \frac { 1 } { 4 \pi K } \frac { m } { r ^ { 2 } } \varepsilon .
$$

$r = r _ { 2 }$, valamint $\varepsilon$ megadott értékét behelyettesítve

$$
\varrho = 4 \cdot 10 ^ { - 10 } \frac { \mathrm {~kg} } { \mathrm {~m} ^ { 3 } } .
$$

Kiegészítés: Az $a$ ) kérdésre $m g = m v ^ { 2 } / r$ felhasználásával is válaszolhatunk, ha figyelembe vesszük a gravitációs gyorsulás magasságfüggését: $g = g _ { 0 } \left( 1 - \frac { h } { r } \right) ^ { 2 }$. Ezzel

$$
v = \sqrt { g r } = \left( 1 - \frac { h } { r } \right) \sqrt { g _ { 0 } r } ,
$$

ahol $g _ { 0 }$ az egyenlítői gravitációs gyorsulás, amely azonban a táblázatban adott egyenlítői nehézségi gyorsulásnál nagyobb! A különbség a Föld forgásából adódó „centri" gyorsulás.
