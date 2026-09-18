---
id: solution-ocr-eotvos-2020-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2020_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2020-cart-pendulum]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. feladat. Könnyen gördülö, $2 m$ tömegü kiskocsira egy árbóc van rögzítve, aminek felsó végére l hosszúságú fonállal egy $m$ tömegữ kis golyót függesztettünk. A kiskocsit egy nem túl meredek, $\alpha$ hajlásszögü lejtóre helyezzük, majd megvárjuk az inga lengéseinek lecsillapodását, és végül a kocsit elengedjük (2. ábra).

[^0]
![](../../../figures/solution-ocr/0a24ae64337c4208fcbfa3c2.jpg)
a) A mozgás során mennyire tér ki a fonál a függőlegestól?
b) Mekkora utat tesz meg a kiskocsi, amíg a fonál újra függólegessé válik?

Megoldás. Az ingából és kiskocsiból álló rendszerre lényegében csak a nehézségi eró és a lejtőre meróleges irányú kényszererók hatnak, hiszen a kerekek gyorsuló forgásához szükséges tapadási súrlódási erốt a „könnyen gördüló" kifejezés miatt elhanyagolhatjuk. Lejtőirányú komponense csak a nehézségi erőnek van, ezért a rendszer tömegközéppontja a lejtóvel párhuzamos irányban állandó, $g \sin \alpha$ gyorsulással mozog. A tömegközéppont a mozgás során a lejtőre merộleges irányban is gyorsul, ez azonban a további gondolatmenet szempontjából nem lényeges.

Uljünk bele a zérus kezdősebességú, a lejtővel párhuzamosan $| \boldsymbol { a } | = g \sin \alpha$ nagyságú gyorsulással mozgó vonatkoztatási rendszerbe! Egy gyorsuló rendszerben bármely $m ^ { \prime }$ tömegü testre a Newton-törvények csak úgy maradnak érvényben, ha a valójában rá ható (kölcsönhatásból származó) erők mellett bevezetjük a rendszer $\boldsymbol { a }$ gyorsulásával ellentétes irányú, $- m ^ { \prime } \boldsymbol { a }$ tehetetlenségi erốt is. A $- m ^ { \prime } \boldsymbol { a }$ tehetetlenségi erő és az $m ^ { \prime } \boldsymbol { g }$ nehézségi erő vektori összege $m ^ { \prime } \boldsymbol { g } ^ { * }$ alakban is felírható, ahol $\boldsymbol { g } ^ { * } = \boldsymbol { g } - \boldsymbol { a }$. A gyorsuló rendszerben tehát minden test úgy mozog, mintha egy $\boldsymbol { g } ^ { * }$ effektív nehézségi gyorsulású erótérben helyezkedne el. Esetünkben a vonatkoztatási rendszer $\boldsymbol { a }$ gyorsulása éppen megegyezik a $\boldsymbol { g }$ nehézségi gyorsulás lejtőirányú összetevőjével, ezért az effektív $\boldsymbol { g } ^ { * }$ nehézségi gyorsulás a lejtőre merốleges irányú, nagysága pedig $g \cos \alpha$. Mivel a gyorsuló rendszerben $\boldsymbol { g } ^ { * }$ határozza meg a függőleges irányt, célszerú a feladat ábráját elforgatni, ahogy az a 3. ábrán is látható.

![](../../../figures/solution-ocr/6da224514cbce8ac2445307c.jpg)
3. ábra

A mozgást a gyorsuló vonatkoztatási rendszerünkben elemezve azt látjuk, hogy a kiskocsi és az ingatest nyugalomból indul, az inga kezdeti szögkitérése $\boldsymbol { g } ^ { * }$ irányától mérve jobbra éppen $\alpha$. Az inga lengése során a rendszer tömegközéppontja külső lejtőirányú erő hiányában nem mozdul el, így mind a kiskocsi, mind pedig az ingatest mozgásba jön. A mechanikai energia megmaradásából és a tömegközéppont-tételből következik, hogy az inga szögkitérésének legnagyobb értéke $\boldsymbol { g } ^ { * }$-hoz viszonyítva a túlsó oldalon szintén $\alpha$ lesz, ami akkor következik be, amikor a kiskocsi és az ingatest először áll meg. Ez azt jelenti, hogy az eredeti vonatkoztatási rendszerben az inga a kezdeti helyzetéhez képest (azaz $\boldsymbol { g }$-hez viszonyítva) maximálisan $2 \alpha$ szöggel tér ki. Ezzel a feladat $a$ ) kérdésére válaszoltunk.

Térjünk most rá a $b$ ) részre. A gyorsuló rendszerben az ingatest és a kiskocsi is periodikus mozgást végez az egyensúlyi helyzet körül, amelyben az inga fonala éppen párhuzamos $\boldsymbol { g } ^ { * }$-gal. Az inga legkorábban $T$ periódusidő múlva érkezik vissza a kiindulási helyzetbe. Ebben a pillanatban a tömegközéppont elmozdulása

$$
s = \frac { 1 } { 2 } g \sin \alpha \cdot T ^ { 2 } ,
$$

és ugyanekkora a kocsi elmozdulása is, hiszen a kocsi relatív helyzete a tömegközépponthoz viszonyítva éppen ugyanaz, mint az indítási állapotban volt. Feladatunk tehát a rezgés $T$ periódusidejének meghatározása.

A gyorsuló rendszerben a tömegközéppont megmaradása miatt a kocsi kitérése minden pillanatban feleakkora és ellentétes irányú, mint az ingatest lejtóvel párhuzamos irányú kitérése. Ezért a fonál felsó́ harmadolópontja lényegében nem mozdul el (valójában a lejtőre merőleges irányban mégis, de elhanyagolható mértékben). Az ingatest tehát úgy mozog a $\left| \boldsymbol { g } ^ { * } \right| = g \cos \alpha$ nehézségi gyorsulású erőtérben, mintha egy $2 \ell / 3$ hosszúságú fonálra lenne felfüggesztve. Egy ilyen inga lengésideje kis kitérések esetén:

$$
T = 2 \pi \sqrt { \frac { 2 \ell } { 3 g \cos \alpha } } .
$$


Vajon alkalmazható-e most ez az összefüggés? A feladat szövege szerint a lejtő nem túl meredek. Egy 45°-os lejtő már elég meredeknek számít, de az ekkora szögben kitérített inga lengésideje is csak kb. 4\%-kal nagyobb a fenti képlettel számolt lengésidőnél. Ha a lejtő csak 30 -os, az eltérés $2 \%$-nál is kisebb. Jó közelítéssel tehát azt mondhatjuk, hogy a kocsi elmozdulása addig a pillanatig, amíg az inga újra függőlegessé válik

$$
s \approx \frac { 1 } { 2 } g \sin \alpha \cdot 4 \pi ^ { 2 } \frac { 2 \ell } { 3 g \cos \alpha } = \frac { 4 \pi ^ { 2 } } { 3 } \ell \operatorname { tg } \alpha
$$
