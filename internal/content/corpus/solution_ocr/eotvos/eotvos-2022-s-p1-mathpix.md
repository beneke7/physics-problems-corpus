---
id: solution-ocr-eotvos-2022-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2022_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2022-chain-cylinder]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. feladat. Vízszintes tengelyű, rögzített hengerre egy vékony, hajlékony, m tömegü láncot helyezünk az ábrán látható módon, és nyugalomban tartjuk. A henger és a lánc közötti súrlódás elhanyagolható.
a) Mekkora gyorsulással indul el a lánc, ha szabadon engedjük?
b) Mekkora a láncot feszítő erő legnagyobb értéke az elengedés utáni pillanatban?

![](../../../figures/solution-ocr/52c788f97b6d16bd7d42a70b.jpg)
(Gelencsér Jenő)

Megoldás. a) Számítsuk ki a lánc gyorsulását az indulás pillanatában. Ezt többféle módszerrel is megtehetjük.
I. módszer. Ha a lánc a gyorsulással indul, akkor egy nagyon rövid $t$ időtartam alatt az elmozdulása $d = \frac { a } { 2 } t ^ { 2 }$, a sebessége pedig $v = a t$ lesz. Alkalmazzuk a mechanikai energiamegmaradás törvényét erre a mozgásra (1. ábra).

A lánc mozgási energiája (annak megváltozása)

$$
\Delta E _ { \text {mozgási } } = \frac { 1 } { 2 } m v ^ { 2 } = \frac { 1 } { 2 } m a ^ { 2 } t ^ { 2 } .
$$

![](../../../figures/solution-ocr/1184141a522a8473dba860cf.jpg)
1. ábra

A helyzeti energia változását legegyszerűbben úgy kaphatjuk meg, hogy gondolatban levágunk a lánc felső végéről egy $d$ hosszúságú darabot, és azt a lánc alsó

[^0]
végéhez „ragasztjuk”. Ennek a darabkának a tömege

$$
\Delta m = \frac { m } { \frac { 1 } { 2 } R \pi } d ,
$$

és mivel $R$ távolsággal mélyebbre kerül,

$$
\Delta E _ { \text {helyzeti } } = - \Delta m g R = - \frac { 2 m g } { \pi } d = - \frac { m g } { \pi } a t ^ { 2 } .
$$

Az energiamegmaradás tétele szerint

$$
\Delta E _ { \text {mozgási } } + \Delta E _ { \text {helyzeti } } = 0 ,
$$

ahonnan

$$
\frac { 1 } { 2 } m a t ^ { 2 } \left( a - \frac { 2 } { \pi } g \right) = 0
$$

Mivel $m a t ^ { 2 } \neq 0$, a keresett gyorsulás:

$$
a = \frac { 2 } { \pi } g .
$$

![](../../../figures/solution-ocr/a8b9393c7cbae9add7cda1eb.jpg)
2. ábra

II. módszer. Ismert (vagy táblázatokban megtalálható), hogy az $R$ sugarú, $2 \alpha$ nyílásszögű homogén körív $P$ tömegközéppontja a kör $O$ középponttól

$$
s = \frac { \sin \alpha } { \alpha } R
$$

távolságra van (2. ábra). Esetünkben $\alpha = \pi / 4$, így

$$
s = \frac { \sqrt { 8 } } { \pi } R \approx 0,9 R .
$$

Az éppen meginduló láncot tekinthetjük merev testnek, amelynek az $O$ pontra vonatkoztatott tehetetlenségi nyomatéka $\Theta = m R ^ { 2 }$. A láncra (merev testre) ható külső erők forgatónyomatéka csak a nehézségi erőből származik, nagysága

$$
M = m g s \sin \frac { \pi } { 4 } = m g R \frac { \sqrt { 8 } } { \pi } \frac { \sqrt { 2 } } { 2 } = \frac { 2 } { \pi } m g R .
$$

(A láncra hatnak még a henger által kifejtett, helyről helyre változó kényszererők is, ezen erők azonban - súrlódásmentes esetben - mindenhol sugárirányúak, tehát az $O$ pontra vonatkoztatott forgatónyomatékuk nulla.)

A forgómozgás alaptörvénye szerint a test szöggyorsulása

$$
\beta = \frac { M } { \Theta } = \frac { 2 } { \pi } \frac { m g R } { m R ^ { 2 } } = \frac { 2 } { \pi } \frac { g } { R } ,
$$

a lánc „kerületi” gyorsulása pedig

$$
a = R \beta = \frac { 2 } { \pi } g .
$$


b) A láncot feszítő $K$ erő a lánc végeinél nulla, közöttük pedig valahol maximuma van. Ezt a helyet, valamint a maximális feszítőerő nagyságát keressük. A lánc egyegy kicsiny, $\varphi$ szöggel jellemezhető helyen lévő darabkájára ható nehézségi erő önmagában (éppen úgy, mint egy $\varphi$ hajlásszögű lejtőn) $g \sin \varphi$ gyorsulást hozna létre, ami a lánc felső részén kisebb, az aljának közelében nagyobb, mint az egész lánc a gyorsulása (3. ábra).

Emiatt a felső részeken a láncszemekre ható feszítő-

![](../../../figures/solution-ocr/ba15f1763758a0459b76bc43.jpg)
3. ábra

erők különbsége általában nullától különböző, hiszen egy $\Delta m$ tömegü, kicsiny láncdarabka mozgásegyenlete

$$
K _ { \text {elöre } } - K _ { \text {hátra } } + \Delta m g \sin \varphi = \Delta m a = \Delta m g \frac { 2 } { \pi } ,
$$

vagyis

$$
K _ { \text {elöre } } = K _ { \text {hátra } } + \Delta m \cdot g \left( \frac { 2 } { \pi } - \sin \varphi \right) \text {. }
$$

Látható, hogy a lánc felső végétől ( $\varphi = 0$ helytől) elindulva mindaddig, amíg

$$
\sin \varphi < \frac { 2 } { \pi } , \quad \text { addig } \quad K _ { \text {elöre } } > K _ { \text {hátra } } ,
$$

vagyis a $K ( \varphi )$ kényszererő (a láncot feszítő erő) $\varphi$ növekvő függvénye. Ha viszont

$$
\sin \varphi > \frac { 2 } { \pi } , \quad \text { akkor } \quad K _ { \text {előre } } < K _ { \text {hátra } } ,
$$

tehát ebben a tartományban a $K ( \varphi )$ kényszererő $\varphi$ csökkenő függvénye. Ezek szerint a kényszererő

$$
\varphi _ { 0 } = \arcsin \frac { 2 } { \pi } \approx 0,69 \text { radián } \approx 39,5 ^ { \circ }
$$

szögnél a legnagyobb. Itt

$$
K _ { \text {elöre } } = K _ { \text {hátra } } = K _ { \max } .
$$

Kérdés, hogy mekkora $K _ { \text {max } }$ értéke. Ezt a lánc felső $\left( \varphi \leqslant \varphi _ { 0 } \right.$ szögekkel jellemzett) darabjának forgási mozgásegyenletéből kaphatjuk meg (4. ábra).

A kérdéses láncdarab tömege

![](../../../figures/solution-ocr/14f6959457134ef05eb42eff.jpg)
4. ábra

$$
m _ { 0 } = \frac { m } { \frac { 1 } { 2 } \pi } \varphi _ { 0 }
$$

a tehetetlenségi nyomatéka

$$
\Theta _ { 0 } = m _ { 0 } R ^ { 2 } ,
$$


tömegközéppontjának az $O$ ponttól mért távolsága

$$
s _ { 0 } = \frac { \sin \left( \frac { 1 } { 2 } \varphi _ { 0 } \right) } { \frac { 1 } { 2 } \varphi _ { 0 } } R
$$

és a tömegközéppont távolsága az $O$ ponton átmenő függőleges egyenestől

$$
\ell _ { 0 } = s _ { 0 } \sin \left( \frac { 1 } { 2 } \varphi _ { 0 } \right) .
$$

A forgómozgás alapegyenlete szerint

$$
K _ { \max } R + m _ { 0 } g \ell _ { 0 } = \Theta _ { 0 } \frac { a } { R } ,
$$

ahonnan a fentebb kiszámított értékek behelyettesítése után kapjuk, hogy

$$
K _ { \max } = m g \left( \frac { 4 } { \pi ^ { 2 } } \varphi _ { 0 } - \frac { 4 } { \pi } \sin ^ { 2 } \frac { \varphi _ { 0 } } { 2 } \right) \approx 0,13 m g .
$$

Ugyanezt az eredményt megkaphatjuk a munkatételből is, ha felírjuk, hogy egy nagyon rövid időtartam alatt a nehézségi erő munkájának és a $K$ kényszererő munkájának összege a kezdetben álló láncdarab mozgási energiájával lesz egyenlő.

A láncot feszítő erőt a fentiek mintájára tetszőleges pontban (tetszőleges $\varphi$ szögre) kiszámíthatjuk:

$$
K ( \varphi ) = m g \left( \frac { 4 } { \pi ^ { 2 } } \varphi - \frac { 4 } { \pi } \sin ^ { 2 } \frac { \varphi } { 2 } \right) ,
$$

és ábrázolhatjuk is (5. ábra).

![](../../../figures/solution-ocr/5c18d9ec79334666a0c3a68a.jpg)
5. ábra
