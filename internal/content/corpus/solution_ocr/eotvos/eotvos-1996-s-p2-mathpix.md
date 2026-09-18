---
id: solution-ocr-eotvos-1996-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/1996_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-1996-gas-heating]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. Egy 3 dm magas, hengeres, zárt edényben 300 K hốmérsékletű, $10 ^ { 5 } \mathrm {~Pa}$ nyomású levegố van. Kívülrốl történő hứtéssel, illetve fútéssel az alaplap hốmérsékletét 270 K-re csökkentjük, a fedőlapét 330 K-re növeljük, és a továbbiakban folyamatosan ezen a hốmérsékleten tartjuk. (Az edény oldalfala hốszigetelő.)

a) Megváltozik-e a gáz nyomása az eredeti állapothoz képest?
b) Becsüljük meg, hogy mennyivel tolódik el a bezárt gáz tömegközéppontja!

Megoldás. A gáz az edényben kezdetben egyensúlyi állapotban van. Hómérséklete és nyomása is az edényben mindenütt ugyanannyi. (A nehézségi erótérben szükségképpen fellépő függőleges nyomásgradienstő eltekinthetünk: erre utal, hogy a feladat szövegében szerepel a mindenütt egyenlő nyomás konkrét értéke.)

A végállapot már nem egyensúlyi állapot. A nyomás ugyan most is ugyanannyi mindenütt az edényben, a hốmérséklet azonban nem: lentről felfelé 270 K-től 330 K-ig nő. A beállt végállapotban szerencsére a hőmérséklet bármely helyen időben már nem változik. Az ilyen - nem egyensúlyi - állapotot nevezik stacionárius állapotnak, amelyre azonban még fennáll az egyensúlyi állapotra bevezetett

$$
E = \frac { f } { 2 } p V
$$

összefüggés. Elveszti értelmét azonban a gáz egészére vonatkozólag a

$$
p V = N k T
$$

összefüggés, mivel nincs a gáznak egyetlen, jól meghatározott hőmérséklete.
Feltételezhetjük, hogy a stacionárius végállapot is mintegy egyensúlyi állapotban lévố vízszintes rétegekből tevődik össze. Egy-egy ilyen rétegen belül a hőmérséklet állandó; a magasabban lévő réteg hőmérséklete feladatunk esetében mindig nagyobb lesz.

Elfogadható („plauzibilis”) feltevésnek látszik, hogy a rétegek hőmérséklete a magasság lineáris függvénye. (Ez akkor igaz, ha a gáz hốvezetőképessége nem függ a hőmérséklettől. A tapasztalat szerint a vizsgált hőmérséklettartományban ez jó közelítéssel teljesül.) Ezt felhasználva válaszolhatunk az a) kérdésre.

Hasonlítsunk össze két olyan ( $\Delta x$ vastagságú) réteget, amelyek az alap- és a fedőlaptól egyenlő ( $x \leq \frac { h } { 2 }$ ) távolságra vannak! A felső rétegben a hőmérséklet nagyobb, mint az alsóban, ezért itt kevesebb részecske hozza létre ugyanazt a nyomást, mint alul.

$$
\left. \Delta N _ { \text {fent } } = \frac { p A \Delta x } { k T _ { \text {fent } } } \Delta N _ { \text {lent } } = \frac { p A \Delta x } { k T _ { \text {lent } } } \right\} \quad T _ { \text {fent } } > T _ { \text {lent } } \Rightarrow \Delta N _ { \text {fent } } < \Delta N _ { \text {lent } }
$$

Az edény fele magasságában egyezik meg a hőmérséklet a kiindulási, egyensúlyi állapotbeli hőmérséklettel. Azt mondhatjuk, hogy az edény felső felében a gáz felmelegedett, az alsóban lehúlt. De az előbb beláttuk, hogy a felső rétegekben mindig kevesebb gázmolekula van, mint a megfelelő alsó rétegekben - így azt is mondhatjuk, hogy több gáz húlt el, mint amennyi felmelegedett!

Így arra a következtetésre jutottunk, hogy az egész gáz belső energiája csökkent. Mivel $E = \frac { f } { 2 } p V$ a stacionárius végállapotban is fennáll, a kisebb $E$-hez kisebb $p$-nek kell tartoznia ( $f$ és $V$ változatlanok). Tehát a gáz nyomása is csökkent.
b) Becsüljük meg, mennyivel tolódott el a gáz tömegközéppontja!

A becslést úgy végezzük, hogy a gázt egyenlő vastagságú, vízszintes rétegekre osztjuk fel. Feltesszük, hogy egyegy rétegen belül egyensúly van, a réteg hőmérséklete állandó. A felosztást finomítva kaphatunk egyre pontosabb becsléseket.

Példaképpen nézzük az első, durva becslést, amikor csupán két „rétegre” osztjuk fel a hengert: legyen az edény alsó felében 285 K, a felső felében 315 K a hőmérséklet. A két rétegben levő tömegek aránya:

$$
\frac { m _ { \text {fent } } } { m _ { \text {lent } } } = \frac { 285 } { 315 } = \frac { 7,5 \mathrm {~cm} - \Delta h } { 7,5 \mathrm {~cm} + \Delta h } , \quad \text { ahonnan } \quad \Delta h = 0,4 \mathrm {~cm} .
$$

Második közelítésben osszuk három egyenlő részre a hengert; a középső réteg hőmérséklete legyen 300 K, a felsóé 330 K, az alsóé 270 K. Az előzőhöz hasonló gondolatmenettel a tömegközéppont süllyedésére $\Delta h = 0,67 \mathrm {~cm}$ adódik.

Harmadik közelítésben osszuk öt egyenlő vastag rétegre a hengert; az egyes rétegek hőmérséklete fentről lefelé legyen: $330 \mathrm {~K} , 315 \mathrm {~K} , 300 \mathrm {~K} , 285 \mathrm {~K} , 270 \mathrm {~K}$. Ebben az esetben valamivel hosszabb számolás után $\Delta h = 0,60 \mathrm {~cm}$-t kapunk.


Meddig folytassuk ezt? Becslésnek már az elsőnek kapott 0, 4 cm is elfogadható. A pontos eredmény (amelynek meghatározását nem kérte a feladat!) integrálszámítással kapható, értéke $\Delta h = 0,5 \mathrm {~cm}$.
