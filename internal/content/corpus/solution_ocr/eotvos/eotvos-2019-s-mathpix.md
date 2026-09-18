---
id: solution-ocr-eotvos-2019-s
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2019_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2019-piston-heat-transfer, eotvos-2019-rope-waves, eotvos-2019-wire-cube-magnetic]
verification_status: promoted
provenance_note: "Mathpix PDF API Markdown conversion; promoted to canonical display without manual proofreading."
---
## Beszámoló a 2019. évi Eötvös-versenyről

Az Eötvös Loránd Fizikai Társulat 2019. évi Eötvös-versenye október 11-én délután 3 órai kezdettel tizenkét magyarországi helyszínen ${ } ^ { 1 }$ került megrendezésre. Ezért külön köszönettel tartozunk mindazoknak, akik ebben szervezéssel, felügyelettel a segítségünkre voltak. A versenyen a három feladat megoldására 300 perc áll rendelkezésre, bármely írott vagy nyomtatott segédeszköz használható, de (nem programozható) zsebszámológépen kívül minden elektronikus eszköz használata tilos. Az Eötvös-versenyen azok vehetnek részt, akik vagy középiskolai tanulók, vagy a verseny évében fejezték be középiskolai tanulmányaikat. Összesen 56 versenyző adott be dolgozatot, 19 egyetemista és 37 középiskolás.

Ismertetjük a feladatokat és azok megoldását.

1. Egy könnyen mozgó dugattyú egy hószigetelt, vízszintes tengelyú hengert kezdetben két azonos, $V _ { 0 }$ térfogatú részre oszt. Mindkét részben $p _ { 0 }$ nyomású, egyatomos ideális gáz van. A bal oldali részben a kezdeti hốmérséklet $2 T _ { 0 }$, míg a jobb oldali részben $T _ { 0 } . A$ két részt elválasztó dugattyú mérsékelten hốvezetố, hốátadását az $\alpha$ paraméter jellemzi, azaz $\Delta T$ hốmérséklet-különbség esetén a dugattyún időegységenként átáramló hố $\alpha \Delta T$.
a) Mekkora lesz a két részben a gázok térfogata, hómérséklete és nyomása hosszú idő elteltével?
b) Adjuk meg az idő függvényében a két térrészben levố gáz $V _ { 1 } ( t )$ és $V _ { 2 } ( t )$ térfogatát!

(Tasnádi Tamás)
Megoldás. a) Amint a feladat szövege is mutatja, a kezdeti értékeket nulla indexszel, a bal oldali részt egyes, és a jobb oldali részt kettes indexszel jelöljük. A végső állapot mennyiségeit a „v" index mutatja. Az 1. ábra a folyamatot és az állapotjelzők értékeit foglalja össze.
![](../../../figures/solution-ocr/72cc24a34828685b8c51a56b.jpg)

Mivel mindkét részben egyatomos ideális gáz van, a szabadsági fok $f = 3$. A kezdeti állapotra felírt gáztörvényből,

$$
p _ { 0 } V _ { 0 } = n _ { 1 } R 2 T _ { 0 } , \quad p _ { 0 } V _ { 0 } = n _ { 2 } R T _ { 0 } ,
$$

megkapjuk, hogy a jobb oldalon a mólok száma kétszer annyi, mint a bal oldalon: $n _ { 2 } = 2 n _ { 1 }$.
A dugattyú hốátadása következtében a bal oldali gáz lassan lehül, és a jobb oldali melegszik, miközben a dugattyú balra tolódik. A folyamat lassúsága következtében a dugattyú két oldalán a nyomásnak meg kell egyeznie, azaz $p _ { 1 } = p _ { 2 }$. Továbbá a rendszerben az energia megmarad, tehát a belső energiák összege állandó:

$$
\frac { f } { 2 } n _ { 1 } R 2 T _ { 0 } + \frac { f } { 2 } 2 n _ { 1 } R T _ { 0 } = \frac { f } { 2 } n _ { 1 } R T _ { 1 } + \frac { f } { 2 } 2 n _ { 1 } R T _ { 2 } ,
$$

amely egyszerúsítések után, és a gáztörvényt felhasználva:

$$
p _ { 0 } V _ { 0 } + p _ { 0 } V _ { 0 } = p _ { 1 } V _ { 1 } + p _ { 1 } V _ { 2 } .
$$

A jobb és bal oldali térfogat összege nem változik, és így a fenti egyenletbő́l következik, hogy a nyomás végig mindkét oldalon állandó marad, azaz

$$
p _ { 1 } = p _ { 2 } = p _ { 0 } ,
$$

és a folyamat izobár.
Most rátérünk a végső állapot meghatározására. Már tudjuk, hogy a végső nyomás megegyezik a kezdetivel. A dugattyún történő hőátadás következtében a végső hőmérséklet a két oldalon ugyanakkora. Az energiamegmaradás

$$
\frac { f } { 2 } n _ { 1 } R 2 T _ { 0 } + \frac { f } { 2 } 2 n _ { 1 } R T _ { 0 } = \frac { f } { 2 } n _ { 1 } R T _ { \mathrm { v } } + \frac { f } { 2 } 2 n _ { 1 } R T _ { \mathrm { v } }
$$

egyenletéből

$$
T _ { \mathrm { v } } = \frac { 4 } { 3 } T _ { 0 } .
$$

Gay-Lussac első törvényéből

$$
V _ { 1 \mathrm { v } } = \frac { 2 } { 3 } V _ { 0 } \quad \text { és } \quad V _ { 2 \mathrm { v } } = \frac { 4 } { 3 } V _ { 0 } .
$$

[^0]
b) Most térjünk rá a folyamat vizsgálatára. A bal oldali rész lehül, a jobb oldali melegszik, azaz a bal oldal $\Delta t$ idő alatt bekövetkező kicsiny $\Delta T _ { 1 }$ hőmérséklet-változása negatív, míg a jobb oldalra $\Delta T _ { 2 } > 0$. A folyamat izobár, ezért a bal és jobb oldal egyenlete:

$$
\frac { f + 2 } { 2 } n _ { 1 } R \Delta T _ { 1 } = \alpha \left( T _ { 2 } - T _ { 1 } \right) \Delta t , \quad \text { illetve } \quad \frac { f + 2 } { 2 } 2 n _ { 1 } R \Delta T _ { 2 } = \alpha \left( T _ { 1 } - T _ { 2 } \right) \Delta t .
$$

Ezek az egyenletek az

$$
\frac { f + 2 } { 2 } n _ { 1 } R \frac { \mathrm {~d} T _ { 1 } } { \mathrm {~d} t } = \alpha \left( T _ { 2 } - T _ { 1 } \right) , \quad \text { illetve } \quad \frac { f + 2 } { 2 } 2 n _ { 1 } R \frac { \mathrm {~d} T _ { 2 } } { \mathrm {~d} t } = \alpha \left( T _ { 1 } - T _ { 2 } \right)
$$

differenciálegyenleteknek felelnek meg. Ezekből kifejezve a $\mathrm { d } T _ { 1 } / \mathrm { d } t$ és $\mathrm { d } T _ { 2 } / \mathrm { d } t$ hányadosokat, valamint bevezetve a $\Delta T =$ $T _ { 1 } - T _ { 2 }$ hómérséklet-különbséget

$$
\frac { \mathrm { d } \Delta T } { \mathrm {~d} t } = - \frac { 3 \alpha } { ( f + 2 ) n _ { 1 } R } \Delta T \quad \text { és } \quad \frac { \mathrm { d } \left( T _ { 1 } + 2 T _ { 2 } \right) } { \mathrm { d } t } = 0 .
$$

A második egyenletben a differenciálandó mennyiség nem változik, és kezdeti értékét ismerjük, tehát

$$
T _ { 1 } + 2 T _ { 2 } = 4 T _ { 0 } .
$$

Az elsố egyenletben található állandó a hőátadási folyamat lecsengési együtthatója:

$$
\lambda = \frac { 3 \alpha } { ( f + 2 ) n _ { 1 } R } = \frac { 6 \alpha T _ { 0 } } { 5 p _ { 0 } V _ { 0 } } .
$$

A fentihez hasonló differenciálegyenlet a tudományokban számos helyen előfordul. Ezek közül a legismertebb a radioaktív bomlás, amelynek a megoldása a $\lambda$ állandóval lecsengő exponenciális függvény. Mivel ismerjük ennek a függvénynek a kezdeti értékét, ennélfogva

$$
\Delta T = T _ { 0 } \mathrm { e } ^ { - \lambda t } ,
$$

és így

$$
T _ { 1 } ( t ) = \frac { 4 } { 3 } T _ { 0 } + \frac { 2 } { 3 } T _ { 0 } \mathrm { e } ^ { - \lambda t } , \quad T _ { 2 } ( t ) = \frac { 4 } { 3 } T _ { 0 } - \frac { 1 } { 3 } T _ { 0 } \mathrm { e } ^ { - \lambda t } .
$$

A térfogatok változását most is Gay-Lussac első törvénye adja:

$$
V _ { 1 } ( t ) = \frac { 2 } { 3 } V _ { 0 } + \frac { 1 } { 3 } V _ { 0 } \mathrm { e } ^ { - \lambda t } , \quad V _ { 2 } ( t ) = \frac { 4 } { 3 } V _ { 0 } - \frac { 1 } { 3 } V _ { 0 } \mathrm { e } ^ { - \lambda t } .
$$

Ezeket a függvényeket a 2. ábra grafikonjain is bemutatjuk, ahol a hőmérsékletet $T _ { 0 }$, a térfogatot $V _ { 0 }$, az időt pedig $1 / \lambda$ egységekben mértük.

![](../../../figures/solution-ocr/7aeba23d184c44ea6cdf2507.jpg)
2. ábra

![](../../../figures/solution-ocr/4823abc7ac814d427d560873.jpg)
2. ábra

2. Egy a oldalélű kocka minden éle egyforma, $R$ ellenállású huzalból készült. A kocka homogén, kezdetben $B _ { 0 }$ indukciójú mágneses mezóbe merül, amit $\tau$ idő alatt egyenletesen nullára csökkentünk. Mekkora a folyamat közben keletkezó Joule-hó, ha a mágneses indukcióvektor a kocka egy csúcsban találkozó éleivel rendre $\alpha , \beta$ és $\gamma$ hegyesszöget zár be? $\left( \cos ^ { 2 } \alpha + \cos ^ { 2 } \beta + \cos ^ { 2 } \gamma = 1 \right.$.)
(Vigh Máté)

Megoldás. Képzeljük el egy pillanatra, hogy a mágneses térnek csak az $x$ irányú, időben

$$
B _ { x } ( t ) = B _ { x , 0 } ( 1 - t / \tau )
$$

szerint változó komponense létezik, a másik két komponens pedig zérus! Ekkor a szimmetria miatt a 3. ábra bal szélén látható árameloszlás jönne létre. A kocka 8 élében folyó, egyforma nagyságú $I _ { x }$ áramokat a Faraday-féle indukciótörvénybő̈l lehet meghatározni:

$$
U _ { \text {ind } } = - \frac { \mathrm { d } \Phi } { \mathrm {~d} t } \quad \longrightarrow \quad 4 R I _ { x } = a ^ { 2 } \frac { B _ { x , 0 } } { \tau } ,
$$

ahol felhasználtuk, hogy a mágneses tér irányára merőleges lapokon átmenő, kezdeti $a ^ { 2 } B _ { x , 0 }$ nagyságú fluxus $\tau$ idő alatt csökken nullára.
![](../../../figures/solution-ocr/7be17200b481327ea697a66b.jpg)

![](../../../figures/solution-ocr/6425ad31b01293e2544e96a9.jpg)
3. ábra

3. ábra
![](../../../figures/solution-ocr/887f2cf194ee01cf97c0c550.jpg)

Hasonlóan kapjuk az élekben folyó áramerősségeket azokra az elképzelt esetekre, melyekben a mágneses mezőnek csak az $y$ - vagy $z$-komponense van jelen (3. ábra középső és jobb szélső rajza):

$$
I _ { x } = \frac { a ^ { 2 } } { 4 R } \frac { B _ { x , 0 } } { \tau } , \quad I _ { y } = \frac { a ^ { 2 } } { 4 R } \frac { B _ { y , 0 } } { \tau } , \quad I _ { z } = \frac { a ^ { 2 } } { 4 R } \frac { B _ { z , 0 } } { \tau } .
$$

Ha a mágneses térnek mindhárom komponense jelen van, akkor a kialakuló feszültség- és árameloszlást a fenti három eset szuperpozíciójaként kapjuk, ezt mutatja a 4. ábra.

A teljes Joule-hó teljesítménye az időben állandó erốsségú áramok miatt konstans, nagysága pedig az egyes élekben disszipálódó $R I ^ { 2 }$ teljesítmények összege:

$$
\begin{aligned}
P = & 2 R \left( I _ { x } + I _ { y } \right) ^ { 2 } + 2 R \left( I _ { x } - I _ { y } \right) ^ { 2 } + \\
& + 2 R \left( I _ { y } + I _ { z } \right) ^ { 2 } + 2 R \left( I _ { y } - I _ { z } \right) ^ { 2 } + \\
& + 2 R \left( I _ { x } + I _ { z } \right) ^ { 2 } + 2 R \left( I _ { x } - I _ { z } \right) ^ { 2 }
\end{aligned}
$$

![](../../../figures/solution-ocr/afba62b6dafdf5548e227044.jpg)
4. ábra

Ha a zárójeleket felbontjuk, az $\left( I _ { x } + I _ { y } \right) ^ { 2 } + \left( I _ { x } - I _ { y } \right) ^ { 2 } = 2 I _ { x } ^ { 2 } + 2 I _ { y } ^ { 2 }$ összefüggés miatt a teljesítmény az alábbi alakra egyszerúsödik:

$$
P = 8 R \left( I _ { x } ^ { 2 } + I _ { y } ^ { 2 } + I _ { z } ^ { 2 } \right) .
$$

A keletkező Joule-hốt az előbb kiszámított teljesítmény és a $\tau$ idő szorzataként számolhatjuk. Az $I _ { x } , I _ { y } , I _ { z }$ áramerősségekre korábban levezetett eredmények felhasználásával kapjuk a következőt:

$$
Q = P \tau = \frac { a ^ { 4 } } { 2 R } \frac { B _ { x , 0 } ^ { 2 } + B _ { y , 0 } ^ { 2 } + B _ { z , 0 } ^ { 2 } } { \tau } = \frac { a ^ { 4 } } { 2 R } \frac { B _ { 0 } ^ { 2 } } { \tau } .
$$

Azt az érdekes eredményt kaptuk, hogy a Joule-hó független a mágneses tér irányától, csupán annak nagyságától függ. A feladatban megadott $\alpha , \beta$ és $\gamma$ szögekre tehát nem is volt szükség!


3. Egy nagyon hosszú kötelet vízszintes helyzetben, a súlyánál sokkal nagyobb $F _ { 0 }$ erốvel megfeszítünk. A kötél a pozitív $x$ tengelyen helyezkedik el, egyik vége pedig az origóban van.
a) Ha a kötél origóban lévố végét $A$ amplitúdójú, $f$ frekvenciájú harmonikus rezgómozgással az $x$ tengelyre merốleges, vízszintes y irányban mozgatjuk, a kötélben transzverzális hullámok jönnek létre, amelyek (a kötél hosszegységre esó tömegétól és a feszítettségétól függő) $c$ sebességgel terjednek. (A hullámok amplitúdója kicsi, vagyis $A \ll c / f$.) Adjuk meg a kötél $x$ koordinátájú pontjának $t$ időpillanatbeli $y ( x , t )$ kitérését!
b) Mekkora átlagos teljesítmény szükséges a kötél végének mozgatásához?
$c )$ Most a kötél origóban lévó vége y irányban szabadon elmozdulhat, de mozgását a kötél végének $v ( t )$ sebességével arányos, $- \gamma v ( t )$ erố fékezi. A kötélen egy $A$ amplitúdójú szinuszhullám érkezik az origó felé. Azt tapasztaljuk, hogy a hullám részben vagy esetleg teljesen visszaverốdik, melynek következtében egy, az origótól távolodó, $B$ amplitúdójú szinuszhullám is kialakul.

Mekkora a visszavert hullám amplitúdója? Adjuk meg a $B / A$ arányt! Vizsgáljuk a $\gamma \rightarrow \infty$ és $\gamma \rightarrow 0$ (nagyon erős és nagyon gyenge csillapítás) eseteket! Van-e olyan $\gamma$ csillapítási tényezố, amelynél egyáltalán nem verốdik vissza hullám a kötél végérôl?
(Gnädig Péter)
Megoldás. a) A kötél végpontjának rezgőmozgását az

$$
y ( t ) = A \sin \left( 2 \pi f t + \varphi _ { 0 } \right)
$$

függvénnyel írhatjuk le, ahol $\varphi _ { 0 }$ a rezgés fázisa a 0 időpillanatban, amely az időmérés kezdetének megfelelő megválasztásával nulla lehet.

A rezgés $c$ sebességgel terjed az $x$ tengely mentén, $x$ távolságra $\frac { x } { c }$ idő alatt ér el. Így az $x$ koordinátájú pontban a kitérés akkora, mint az origóban $\frac { x } { c }$ idővel korábban volt. Ez alapján a keresett hullámfüggvény:

$$
y ( x , t ) = A \sin \left[ 2 \pi f \left( t - \frac { x } { c } \right) \right] = A \sin \left( 2 \pi f t - \frac { 2 \pi f } { c } x \right) .
$$

b) A kötél alakját egy rögzített $t = t _ { 1 }$ pillanatban az

$$
y ( x ) = y \left( x , t = t _ { 1 } \right) = A \sin \left( 2 \pi f t _ { 1 } - \frac { 2 \pi f } { c } x \right)
$$

egyváltozós függvény adja meg, ahol $2 \pi f t _ { 1 }$ egy konstans.
Bármely $x$ pontban a kötél $x$ tengellyel bezárt szögének tangense éppen ennek a függvénynek a meredeksége, amit legegyszerúbben (az $x$ változó szerinti) deriválással határozhatunk meg:

$$
\operatorname { tg } \alpha \left( x , t = t _ { 1 } \right) = \frac { \mathrm { d } y } { \mathrm {~d} x } = - A \frac { 2 \pi f } { c } \cos \left( 2 \pi f t _ { 1 } - \frac { 2 \pi f } { c } x \right) .
$$

A kötél alakja azonban változik az idővel, így egy adott ponton a meredekség (és az $\alpha$ szög is) az idő függvénye lesz. Az origóban (az $x = 0$ helyen) a kötél iránytangense eszerint:

$$
\operatorname { tg } \alpha ( t ) = \operatorname { tg } \alpha ( x = 0 , t ) = - A \frac { 2 \pi f } { c } \cos \left( 2 \pi f t - \frac { 2 \pi f } { c } 0 \right) = - A \frac { 2 \pi f } { c } \cos ( 2 \pi f t ) .
$$

A kötél mozgatásához szükséges (időben változó) pillanatnyi teljesítményt a

$$
P ( t ) = F _ { y } ( t ) v _ { y } ( t )
$$

szorzat határozza meg, ahol $F _ { y } ( t )$ az általunk a kötél végére kifejtett $y$-irányú erő, $v _ { y } ( t )$ pedig a kötél origóban lévő végének ( $y$-irányú) sebessége (5. ábra).

![](../../../figures/solution-ocr/dea04bf960e6e53ed4457a60.jpg)
5. ábra


Az $y$-irányú eró (felhasználva, hogy $\alpha \ll 1$ ):

$$
F _ { y } = - F _ { 0 } \sin \alpha \approx - F _ { 0 } \operatorname { tg } \alpha = F _ { 0 } A \frac { 2 \pi f } { c } \cos ( 2 \pi f t ) .
$$

A kötél végének sebessége a rezgőmozgását leíró $y ( t ) = y ( x = 0 , t )$ egyváltozós függvény ( $t$ szerinti, jól ismert) deriváltja:

$$
v _ { y } = \frac { \mathrm { d } y } { \mathrm {~d} t } = 2 \pi f A \cos ( 2 \pi f t ) .
$$

A pillanatnyi teljesítmény ezek alapján:

$$
P ( t ) = F _ { y } ( t ) v _ { y } ( t ) = \frac { 4 \pi ^ { 2 } f ^ { 2 } A ^ { 2 } F _ { 0 } } { c } \cos ^ { 2 } ( 2 \pi f t ) .
$$

![](../../../figures/solution-ocr/2b23d67c559646f3beeacf47.jpg)
6. ábra

A keresett átlagos teljesítmény - a $\cos ^ { 2 } ( 2 \pi f t )$ függvény 6. ábráról leolvasható, jól ismert átlagértéke alapján - a maximális teljesítmény fele:

$$
\bar { P } = \frac { P _ { \max } } { 2 } = \frac { 2 \pi ^ { 2 } f ^ { 2 } A ^ { 2 } F _ { 0 } } { c } .
$$

c) Ebben a részben az origó felé érkezik egy hullám. Ennek hullámfüggvénye az ellenkezó irányú terjedés miatt:
$$
y _ { \leftarrow } ( x , t ) = A \sin \left( 2 \pi f t + \frac { 2 \pi f } { c } x \right) .
$$

A visszaverődő hullám ismét a pozitív irányban halad:

$$
y _ { \rightarrow } ( x , t ) = B \sin \left( 2 \pi f t - \frac { 2 \pi f } { c } x + \varphi \right) ,
$$

itt fel kell vennünk egy egyelőre ismeretlen $\varphi$ fáziskülönbséget is. A kötélen kialakuló hullám ennek a két hullámnak a szuperpozíciója:

$$
y ( x , t ) = y _ { \leftarrow } ( x , t ) + y _ { \rightarrow } ( x , t ) .
$$

![](../../../figures/solution-ocr/073008d0e39c81ac4f6b7c97.jpg)
7. ábra

A kötél vége $y$ irányban szabadon mozoghat, így a rá ható $y$-irányú erők eredőjének minden pillanatban nullának kell lennie:

$$
F _ { 0 } \sin \alpha - \gamma v _ { y } \approx F _ { 0 } \frac { \mathrm {~d} y } { \mathrm {~d} x } - \gamma \frac { \mathrm { d } y } { \mathrm {~d} t } = 0 .
$$

A hullámfüggvény és a deriváltak:

$$
\begin{aligned}
y & = y _ { \leftarrow } + y _ { \rightarrow } = A \sin \left( 2 \pi f t + \frac { 2 \pi f } { c } x \right) + B \sin \left( 2 \pi f t - \frac { 2 \pi f } { c } x + \varphi \right) , \\
\frac { \mathrm { d } y } { \mathrm {~d} x } & = \frac { 2 \pi f } { c } A \cos \left( 2 \pi f t + \frac { 2 \pi f } { c } x \right) - \frac { 2 \pi f } { c } B \cos \left( 2 \pi f t - \frac { 2 \pi f } { c } x + \varphi \right) , \\
\frac { \mathrm { d } y } { \mathrm {~d} t } & = 2 \pi f A \cos \left( 2 \pi f t + \frac { 2 \pi f } { c } x \right) + 2 \pi f B \cos \left( 2 \pi f t - \frac { 2 \pi f } { c } x + \varphi \right) .
\end{aligned}
$$


Ezeket behelyettesítve az erőegyensúly képletébe, és rendezve:

$$
\begin{gathered}
\left. F _ { 0 } \frac { \mathrm {~d} y } { \mathrm {~d} x } \right| _ { x = 0 } = \left. \gamma \frac { \mathrm { d } y } { \mathrm {~d} t } \right| _ { x = 0 } , \\
F _ { 0 } \frac { 2 \pi f } { c } A \cos ( 2 \pi f t ) - F _ { 0 } \frac { 2 \pi f } { c } B \cos ( 2 \pi f t + \varphi ) = \\
= \gamma 2 \pi f A \cos ( 2 \pi f t ) + \gamma 2 \pi f B \cos ( 2 \pi f t + \varphi ) , \\
F _ { 0 } A \cos ( 2 \pi f t ) - F _ { 0 } B \cos ( 2 \pi f t ) \cos \varphi + F _ { 0 } B \sin ( 2 \pi f t ) \sin \varphi = \\
\gamma c A \cos ( 2 \pi f t ) + \gamma c B \cos ( 2 \pi f t ) \cos \varphi - \gamma c B \sin ( 2 \pi f t ) \sin \varphi .
\end{gathered}
$$

Ezeknek az egyenleteknek minden időpontban teljesülnie kell, így a $\cos ( 2 \pi f t )$-s és a $\sin ( 2 \pi f t )$-s tagokra külön-külön is:

$$
\begin{aligned}
F _ { 0 } A - F _ { 0 } B \cos \varphi & = \gamma c A + \gamma c B \cos \varphi , \\
F _ { 0 } B \sin \varphi & = - \gamma c B \sin \varphi .
\end{aligned}
$$

A második egyenlet alapján $\sin \varphi = 0 , \varphi = 0$ (vagy $\varphi = \pi$ ) és így $\cos \varphi = 1$ (vagy $\cos \varphi = - 1$ ). Ezt felhasználva az első egyenlet alapján:

$$
B = \frac { F _ { 0 } - \gamma c } { F _ { 0 } + \gamma c } A .
$$

Ha $\gamma \rightarrow \infty$ (rögzítjük a kötél végét), akkor $B = - A$, tehát a hullám azonos amplitúdóval, de ellentétes fázisban ( $\pi$ fázisugrással) verődik vissza.

Ha $\gamma \rightarrow 0$ (a kötél vége teljesen szabadon mozog), akkor $B = A$, azaz a hullám szintén azonos amplitúdóval, de most azonos fázisban verődik vissza.
$B = 0$-t akkor kapunk, ha $\gamma = F _ { 0 } / c$, ilyenkor tehát egyáltalán nincs visszaverődés.
Megjegyzés. A b) és c) kérdésekre válaszolhatunk energetikai megfontolásokkal is. Ehhez a hullám - mozgási és rugalmas helyzeti energiából származó - energiasürúségét kell meghatározni.

Az ünnepélyes eredményhirdetésre és díjkiosztásra 2019. november 22-én délután került sor az ELTE TTK Konferenciatermében. Jelen volt a 70 évvel ezelőtti, háború utáni elsó Eötvös-verseny győztese, Holics László, aki pár szóban visszaemlékezett erre a versenyre. Meghívást kaptak az 50 és 25 évvel ezelőtti Eötvös-verseny nyertesei is. Az 50 évvel ezelőtti díjazottak közül Láz József volt jelen, a 25 évvel ezelőtti díjazottak közül pedig Horváth Péter, Kovács Krisztián, Tóth Gábor Zsolt és Varga Dezsó́ jött el - ők pár mondatban beszéltek a pályafutásukról.

Ezután következett a 2019. évi verseny feladatainak és megoldásainak bemutatása. Az 1. feladat megoldását Tichy Géza, a 2. feladatét Vigh Máté, a 3. feladatét Vankó Péter ismertette.

Az esemény végén került sor az eredményhirdetésre. A díjakat Sólyom Jenő, az Eötvös Loránd Fizikai Társulat elnöke adta át.

Mindhárom feladat helyes megoldásáért I. díjban részesült Elek Péter, a BME fizika BSc. szakos hallgatója, a Debreceni Református Kollégium Dóczy Gimnáziumának érettségizett tanulója, Tófalusi Péter tanítványa.

Két feladat hibátlan megoldásáért, illetve mindhárom feladat kisebb hibákkal való megoldásáért II. díjban részesült Bokor Endre, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 11. osztályos tanulója, Schramek Anikó tanítványa, Fajszi Bulcsú, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 12. osztályos tanulója, Horváth Gábor tanítványa, valamint Fitos Bence, a BME fizika BSc. szakos hallgatója, a Budapesti Németh László Gimnázium érettségizett tanulója, Szászvári Irén és Dégen Csaba tanítványa.

Két feladat lényegében helyes megoldásáért III. díjban részesült Csépányi István, a BME fizika BSc. szakos hallgatója, az Egri Szilágyi Erzsébet Gimnázium érettségizett tanulója, Szabó Miklós tanítványa, Máth Benedek Huba, a BME fizika BSc. szakos hallgatója, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium érettségizett tanulója, Horváth Gábor és Nagy Piroska Mária tanítványa, Olosz Adél, a BME építőmérnöki BSc. szakos hallgatója, a PTE Gyakorló Általános Iskola és Gimnázium érettségizett tanulója, Koncz Károly tanítványa, valamint Svastits Domonkos, a BME fizika BSc. szakos hallgatója, a budapesti Piarista Gimnázium érettségizett tanulója, Chikán Éva tanítványa.

Egy feladat hibátlan megoldásáért dicséretben részesült Kondákor Márk, a BME fizika BSc. szakos hallgatója, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium érettségizett tanulója, Horváth Gábor és Nagy Piroska Mária tanítványa, Magyar Róbert Attila, a BME fizika BSc. szakos hallgatója, az Egri Dobó István Gimnázium érettségizett tanulója, Hóbor Sándor tanítványa, valamint Pácsonyi Péter, a Zalaegerszegi Zrínyi Miklós Gimnázium 12. osztályos tanulója, Pálovics Róbert tanítványa.

Az elsố díjjal a verseny plakettjén kívül az NKFI Hivatal által nyújtott támogatásból 70 ezer, a második díjjal 50 ezer, a harmadik díjjal 30 ezer, a dicsérettel 20 ezer forint pénzjutalom járt, a díjazottak tanárai és az országos verseny szervezői pedig a Typotex Kiadó könyveit kapták. A verseny megszervezését az Eötvös Loránd Fizikai Társulat ebben az évben szintén az NKFI Hivatal által az Eötvös 100 emlékév alkalmából nyújtott támogatásból fedezte.


[^0]:    ${ } ^ { 1 }$ Részletek a verseny honlapján: http://eik.bme.hu/~vanko/fizika/eotvos.htm
