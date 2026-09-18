---
id: solution-ocr-eotvos-2013-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2013_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2013-rolling-cylinders]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
![](../../../figures/solution-ocr/4e4fc114293d7780ef91266a.jpg)
a) Milyen magasból kell elengednünk az egyes testeket, hogy 1 m/s haladási sebességgel érjék el a lejtố alját?

A lejtót 1 m/s sebességgel elhagyó testek lassulva gördülnek tovább egy puhább, hosszú, vízszintes felületen. A testek a felület kicsiny benyomódása miatt fékezódnek. Tételezzük fel, hogy a vízszintes felület által a testekre ható eredố erố pillanatnyi támadáspontja a hengerpalástokon mindkét esetben ugyanott helyezkedik el!
b) Az alumíniumhenger a vízszintes felületen 2 m út megtétele után áll meg. Hol áll meg a rézcsó?
Adatok: az alumínium sũrũsége $2,7 \mathrm {~g} / \mathrm { cm } ^ { 3 }$, a réz sữrũsége $8,9 \mathrm {~g} / \mathrm { cm } ^ { 3 }$.
(Honyek Gyula)
Megoldás. a) A $h$ magasságból elengedett testek gravitációs helyzeti energiája a lejtő alján mozgási energiává alakul:

$$
m g h = \frac { 1 } { 2 } m v ^ { 2 } + \frac { 1 } { 2 } \Theta \omega ^ { 2 } = \frac { 1 } { 2 } m v ^ { 2 } + \frac { 1 } { 2 } k m R ^ { 2 } \frac { v ^ { 2 } } { R ^ { 2 } } ,
$$

ahol $m$ a testek tömege, $R$ a sugaruk, a tehetetlenségi nyomatékot pedig $\Theta = k m R ^ { 2 }$ alakban írtuk fel. Felhasználtuk továbbá, hogy a tiszta gördülés miatt a testek tömegközéppontjának $v$ sebessége és a forgásuk $\omega$ szögsebessége között fennáll a $v = R \omega$ kényszerfeltétel. Ebből az indítási magasságra a következő adódik:

$$
h = \frac { v ^ { 2 } } { 2 g } ( 1 + k ) .
$$

A tömör alumíniumhenger esetében $k _ { \mathrm { Al } } = 1 / 2$, vagyis $h _ { \mathrm { Al } } = 3 v ^ { 2 } / ( 4 g ) = 7,6 \mathrm {~cm}$.
A rézcső tömege is, külső sugara is megegyezik az alumíniumhenger adataival. Így kifejezhetjük a rézcső belső $r$ sugarát $R$ segítségével:

$$
\frac { R ^ { 2 } } { R ^ { 2 } - r ^ { 2 } } = \frac { \varrho _ { \mathrm { Cu } } } { \varrho _ { \mathrm { Al } } } \quad \longrightarrow \quad r ^ { 2 } = \frac { \left( \varrho _ { \mathrm { Cu } } - \varrho _ { \mathrm { Al } } \right) } { \varrho _ { \mathrm { Cu } } } R ^ { 2 } .
$$

A rézcső tehetetlenségi nyomatékát

$$
\Theta _ { \mathrm { Cu } } = \frac { 1 } { 2 } \varrho _ { \mathrm { Cu } } \pi \ell \left( R ^ { 4 } - r ^ { 4 } \right)
$$

alakban írhatjuk fel, ahol $\ell$ a hengeres testek hosszúsága. Kihasználhatjuk, hogy tömegek megegyeznek, ennek alapján a rézcső tehetetlenségi nyomatékra a következőt kapjuk:

$$
\Theta _ { \mathrm { Cu } } = \frac { 1 } { 2 } m R ^ { 2 } \left( 1 + \frac { \varrho _ { \mathrm { Cu } } - \varrho _ { \mathrm { Al } } } { \varrho _ { \mathrm { Cu } } } \right) = \frac { 2 \varrho _ { \mathrm { Cu } } - \varrho _ { \mathrm { Al } } } { 2 \varrho _ { \mathrm { Cu } } } m R ^ { 2 } .
$$

A kapott eredményból leolvasható, hogy

$$
k _ { \mathrm { Cu } } = \frac { 1 } { 2 } \frac { 2 \varrho _ { \mathrm { Cu } } - \varrho _ { \mathrm { Al } } } { \varrho _ { \mathrm { Cu } } } = 0,85 ,
$$


tehát

$$
h _ { \mathrm { Cu } } = \frac { 2 \left( 1 + k _ { \mathrm { Cu } } \right) } { 3 } h _ { \mathrm { Al } } = 9,4 \mathrm {~cm} .
$$

b) A kissé puha felületen a hengeres testekre a nehézségi erő mellett a felület fejt ki erốt, melynek támadáspontja mindkét test esetén ugyanoda esik. A felület által kifejtett kényszererő (ezt szaggatott nyíl jelöli) két összetevőre bontható: a függőleges összetevő nagysága $m g$ (ezt szokás nyomóerőnek hívni), míg a vízszintes összetevőt jelöljük $S$-sel (ez felel meg a tapadási súrlódási erónek).

![](../../../figures/solution-ocr/b18cf06a14d440be79b8cc4d.jpg)
2. ábra

A kényszererő függőleges összetevője hatásvonalának és a hengeres test középpontjának a távolsága legyen $d$, a vízszintes felületen megtett utat pedig jelöljük $x$-szel. A testek tömegközéppontjának gyorsulását a dinamika alapegyenlete írja le:

$$
\sum \boldsymbol { F } = m \boldsymbol { a } .
$$

Az alumíniumhenger esetén a vízszintes irányú gyorsulást az $S _ { \mathrm { Al } }$ súrlódási erő okozza:

$$
S _ { \mathrm { Al } } = m a _ { \mathrm { Al } } = m \frac { v ^ { 2 } } { 2 x _ { \mathrm { Al } } } ,
$$

ahol $v = 1 \mathrm {~m} / \mathrm { s }$ és $x _ { \mathrm { Al } } = 2 \mathrm {~m}$.
A tiszta gördülés miatt a henger szöggyorsulása $\beta _ { \mathrm { Al } } = a _ { \mathrm { Al } } / R$. Ezt a szöggyorsulást a forgómozgás alapegyenlete értelmében a testre ható erők (tömegközéppontra vonatkoztatott) forgatónyomatékának eredője hozza létre:

$$
\sum M = \Theta \beta .
$$

Írjuk fel a forgómozgás alapegyenletét az alumíniumhengerre, majd fejezzük ki a $d$ távolságot:

$$
M = m g d - S _ { \mathrm { Al } } R = m g d - m \frac { v ^ { 2 } } { 2 x _ { \mathrm { Al } } } R = \Theta _ { \mathrm { Al } } \beta _ { \mathrm { Al } } = \frac { 1 } { 2 } m R ^ { 2 } \frac { a _ { \mathrm { Al } } } { R } = \frac { 1 } { 2 } m R ^ { 2 } \frac { v ^ { 2 } } { 2 x _ { \mathrm { Al } } R } ,
$$

amiből

$$
d = \frac { 3 v ^ { 2 } } { 4 g x _ { \mathrm { Al } } } R .
$$

A rézcső esetén a tapadási súrlódási erő más lesz (és természetesen a tehetetlenségi nyomaték is más), de a többi mennyiség ugyanaz marad. Újra fel kell írnunk a haladó mozgásra és a forgásra a dinamikai alapegyenleteket:

$$
\begin{aligned}
S _ { \mathrm { Cu } } & = m a _ { \mathrm { Cu } } = m \frac { v ^ { 2 } } { 2 x _ { \mathrm { Cu } } } \\
M & = m g d - S _ { \mathrm { Cu } } R = m g d - m \frac { v ^ { 2 } } { 2 x _ { \mathrm { Cu } } } R = \Theta _ { \mathrm { Cu } } \beta _ { \mathrm { Cu } } = \\
& = k _ { \mathrm { Cu } } m R ^ { 2 } \frac { a _ { \mathrm { Cu } } } { R } = k _ { \mathrm { Cu } } m R ^ { 2 } \frac { v ^ { 2 } } { 2 x _ { \mathrm { Cu } } R } ,
\end{aligned}
$$

amiből

$$
d = \frac { \left( 1 + k _ { \mathrm { Cu } } \right) v ^ { 2 } } { 2 g x _ { \mathrm { Cu } } } R .
$$

A kétféleképpen kifejezett $d$ távolság összevetéséből a rézcső útja a vízszintes felületen:

$$
x _ { \mathrm { Cu } } = \frac { 2 \left( 1 + k _ { \mathrm { Cu } } \right) } { 3 } x _ { \mathrm { Al } } = 2,46 \mathrm {~m} .
$$


Megjegyzések. 1. Vegyük észre, hogy ahányszor magasabbról indítottuk a rézcsövet, annyiszor messzebb áll meg a vízszintes felületen. Ezt úgy is interpretálhatjuk, hogy a teljes mechanikai energia a kezdeti magassággal arányos, és a mechanikai energia „hővé alakulása” (disszipációja) pedig a vízszintes szakaszon megtett úttal arányos. Azonban ez az energiadisszipáció nem írható fel a súrlódási erő és a megtett út szorzataként, hiszen ha így írnánk fel, akkor mindkét testre ugyanakkora súrlódási erốt kapnánk, ami nyilvánvalóan hamis következtetés lenne. Az energia nem a szokásos csúszási súrlódás formájában disszipálódik (gyakorlatilag tiszta gördülés történik, lényegében tapadó súrlódás lép fel), hanem a testek alatti felület nem tökéletesen rugalmas benyomódása okozza a mechanikai energiaveszteséget. Feltehetjük, hogy mindkét test esetén ugyanolyan széles és ugyanolyan mély a benyomódás, ezért tapasztalhatjuk azt, hogy a disszipáció a nyom hosszával arányos.
2. Érdemes észrevennünk azt is, hogy a felületre meróleges nyomóerő forgatónyomatéka lassítja a testek forgását, míg a súrlódási erő gyorsítja a forgást. A súrlódási eró kicsi, de az erókarja $( R )$ nagy (a benyomódás mértéke elhanyagolható a sugárhoz képest), míg a nyomóeró jelentős, de az erókarja $( d )$ kicsi. Az alumíniumhenger esetén a súrlódási eró a nyomóerőnek ( $m g$-nek) hozzávetőlegesen $1 / 40$ része, a rézcsőnél mindössze $1 / 50$ része. A $d$ távolság a sugárnak nagyjából $3 / 80$ része, tehát a nyomóeró forgatónyomatéka az alumíniumhenger esetén másfélszer akkora, mint a súrlódási erón nyomatéka (a rézcsőnél ez az arány másfélnél valamivel nagyobb). Ez azt mutatja, hogy a kétféle nyomaték összemérhető.
3. A számításokban a képletek leegyszerúsítése érdekében a gyorsulások és a szöggyorsulások abszolút értékével számoltunk, miközben természetesen nyilvánvaló, hogy a vízszintes felületen a testek gyorsulása is, szöggyorsulása is negatív.
4. Az eredményhirdetésen az elsó feladat megoldásának ismertetése után a hallgatóság egy valódi kísérletról készült videófelvételen láthatta, hogy egy tömör alumíniumhenger és egy ugyanolyan tömegü, illetve ugyanolyan külső méretü rézcső a példa megoldásának megfelelően nem egyforma úton lassul le vízszintes felületen, ha azonos kezdősebességgel, tisztán gördülve, egyszerre indítjuk őket. A puha felületet egy asztallapra leterített abrosz szolgáltatta, az azonos sebességü, egyidejü indítás egy hosszú vonalzóval történt.
