---
id: eotvos-2020-cart-pendulum
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2020-cart-pendulum
solution_type: official
source_document: solution-document-eotvos-2020-s
source_pdf: cache/phoxiv/eotvos/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2020_S.pdf."
---

2. feladat. Könnyen gördül®, 2m tömeg¶ kisko sira egy árbó van rögzítve, aminek fels® végére ℓ hosszúságú
fonállal egy m tömeg¶ kis golyót függesztettünk. A kisko sit egy nem túl meredek, α hajlásszög¶ lejt®re helyezzük, majd
megvárjuk az inga lengéseinek le sillapodását, és végül a ko sit elengedjük (2. ábra).
1Részletek a verseny honlapján: http://eik.bme.hu/~vanko/fizika/eotvos.htm.
2. ábra
a) A mozgás során mennyire tér ki a fonál a függ®legest®l?
b) Mekkora utat tesz meg a kisko si, amíg a fonál újra függ®legessé válik?
Megoldás. Az ingából és kisko siból álló rendszerre lényegében sak a nehézségi er® és a lejt®re mer®leges irá-
nyú kényszerer®k hatnak, hiszen a kerekek gyorsuló forgásához szükséges tapadási súrlódási er®t a könnyen gördül®
kifejezés miatt elhanyagolhatjuk. Lejt®irányú komponense sak a nehézségi er®nek van, ezért a rendszer tömegközép-
pontja a lejt®vel párhuzamos irányban állandó, g sinα gyorsulással mozog. A tömegközéppont a mozgás során a lejt®re
mer®leges irányban is gyorsul, ez azonban a további gondolatmenet szempontjából nem lényeges.
Üljünk bele a zérus kezd®sebesség¶, a lejt®vel párhuzamosan |a| = gsinα nagyságú gyorsulással mozgó vonat-
koztatási rendszerbe! Egy gyorsuló rendszerben bármely m′
tömeg¶ testre a Newton-törvények sak úgy maradnak
érvényben, ha a valójában rá ható (köl sönhatásból származó) er®k mellett bevezetjük a rendszer a gyorsulásával
ellentétes irányú, −m′
a tehetetlenségi er®t is. A −m′
a tehetetlenségi er® és az m′
g nehézségi er® vektori összege m′
g∗
alakban is felírható, ahol g∗
= g − a. A gyorsuló rendszerben tehát minden test úgy mozog, mintha egy g∗
eektív
nehézségi gyorsulású er®térben helyezkedne el. Esetünkben a vonatkoztatási rendszer a gyorsulása éppen megegyezik
a g nehézségi gyorsulás lejt®irányú összetev®jével, ezért az eektív g∗
nehézségi gyorsulás a lejt®re mer®leges irányú,
nagysága pedig gcosα. Mivel a gyorsuló rendszerben g∗
határozza meg a függ®leges irányt, élszer¶ a feladat ábráját
elforgatni, ahogy az a 3. ábrán is látható.
3. ábra
A mozgást a gyorsuló vonatkoztatási rendszerünkben elemezve azt látjuk, hogy a kisko si és az ingatest nyugalomból
indul, az inga kezdeti szögkitérése g∗
irányától mérve jobbra éppen α. Az inga lengése során a rendszer tömegközép-
pontja küls® lejt®irányú er® hiányában nem mozdul el, így mind a kisko si, mind pedig az ingatest mozgásba jön.
A me hanikai energia megmaradásából és a tömegközéppont-tételb®l következik, hogy az inga szögkitérésének legna-
gyobb értéke g∗
-hoz viszonyítva a túlsó oldalon szintén α lesz, ami akkor következik be, amikor a kisko si és az ingatest
el®ször áll meg. Ez azt jelenti, hogy az eredeti vonatkoztatási rendszerben az inga a kezdeti helyzetéhez képest (azaz
g-hez viszonyítva) maximálisan 2α szöggel tér ki. Ezzel a feladat a) kérdésére válaszoltunk.
Térjünk most rá a b) részre. A gyorsuló rendszerben az ingatest és a kisko si is periodikus mozgást végez az egyen-
súlyi helyzet körül, amelyben az inga fonala éppen párhuzamos g∗
-gal. Az inga legkorábban T periódusid® múlva
érkezik vissza a kiindulási helyzetbe. Ebben a pillanatban a tömegközéppont elmozdulása
s =
1
2
gsinα · T2
,
és ugyanekkora a ko si elmozdulása is, hiszen a ko si relatív helyzete a tömegközépponthoz viszonyítva éppen ugyanaz,
mint az indítási állapotban volt. Feladatunk tehát a rezgés T periódusidejének meghatározása.
A gyorsuló rendszerben a tömegközéppont megmaradása miatt a ko si kitérése minden pillanatban feleakkora és
ellentétes irányú, mint az ingatest lejt®vel párhuzamos irányú kitérése. Ezért a fonál fels® harmadolópontja lényegében
nem mozdul el (valójában a lejt®re mer®leges irányban mégis, de elhanyagolható mértékben). Az ingatest tehát úgy
mozog a |g∗
| = gcosα nehézségi gyorsulású er®térben, mintha egy 2ℓ/3 hosszúságú fonálra lenne felfüggesztve. Egy
ilyen inga lengésideje kis kitérések esetén:
T = 2π
s
2ℓ
3gcosα
.
Vajon alkalmazható-e most ez az összefüggés? A feladat szövege szerint a lejt® nem túl meredek. Egy 45◦
-os lejt® már
elég meredeknek számít, de az ekkora szögben kitérített inga lengésideje is sak kb. 4%-kal nagyobb a fenti képlettel
számolt lengésid®nél. Ha a lejt® sak 30◦
-os, az eltérés 2%-nál is kisebb. Jó közelítéssel tehát azt mondhatjuk, hogy
a ko si elmozdulása addig a pillanatig, amíg az inga újra függ®legessé válik
s ≈
1
2
g sinα · 4π2 2ℓ
3gcosα
=
4π2
3
ℓtgα.
