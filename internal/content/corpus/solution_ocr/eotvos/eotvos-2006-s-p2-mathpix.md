---
id: solution-ocr-eotvos-2006-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2006_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2006-spacecraft-dust]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. Egy bolygóközi pályán mozgó ứrszonda, pályájának bizonyos részén, egy ott elhelyezkedő kozmikus „porfelhốn” haladt át. Mindazon porszemcsék, amelyeknek nekiütközött, ráragadtak a szondára. Mire a szonda kiért a porfelhốból, tömege 2\%-kal megnótt.

Hány százalékkal nốtt meg a porfelhốn való áthaladás ideje ahhoz képest, amennyi idő alatt a porfelhő fékező hatása nélkül tette volna meg a szonda ugyanezt az utat?
(A porfelhốt állandó súrúségứ, határozott szélű objektumnak tekinthetjük.)
Megoldás. Külső́ erők hiányában a rendszer összes lendülete (impulzusa) állandó marad. Bolygóközi pályáról van szó, az úrszonda tehát legfeljebb a Nap gravitációs terét érzi, de elsó közelítésben ezt is elhanyagolhatjuk. A porfelhőt állandó sűrúségü, határozott szélü objektumnak tekintjük, így a folyamatot a 2. ábrával szemléltethetjük:

![](../../../figures/solution-ocr/73aeb2a7c4b898072babdefd.jpg)
2. ábra

A porfelhő nem vesz át impulzust az úrszondától, mivel valamennyi porszem, amivel a szonda ütközik, ráragad a szondára. Másrészt $v _ { 0 } , v _ { x }$ és $v _ { l }$ a szondának a porfelhőhöz viszonyított (relatív) sebességét jelöli, vagyis a porfelhőt nyugvónak tekinthetjük.

A szonda tömege, miután $x$ utat megtett a porfelhőben:

$$
m _ { x } = m _ { 0 } + \varrho A x ,
$$

ahol $\varrho$ a porfelhó súrúsége, $A$ a szondának a sebességére meróleges keresztmetszet-területe. A szonda egész útját $l$-lel jelölve, a feladat feltétele szerint

$$
m _ { l } - m _ { 0 } = \varrho A l = 0,02 m _ { 0 } .
$$

A lendületmegmaradásból következőleg

$$
v _ { x } = \frac { m _ { 0 } v _ { 0 } } { m _ { x } } = \frac { m _ { 0 } v _ { 0 } } { m _ { 0 } + \varrho A x } .
$$

Itt $v _ { x }$ helyére $\frac { \Delta x } { \Delta t }$-t helyettesítve, majd $\Delta t$-t kifejezve

$$
\Delta t = \frac { m _ { 0 } + \varrho A x } { m _ { 0 } v _ { 0 } } \cdot \Delta x ,
$$

tehát az azonos nagyságú $\Delta x$ útszakaszok megtételéhez szükséges $\Delta t$ idő lineáris függvénye $x$-nek! Így a teljes áthaladási idő a számtani középből számolható:

$$
T = \sum \Delta t = \frac { 1 } { 2 } \left( \frac { 1 } { v _ { 0 } } + \frac { m _ { 0 } + \varrho A l } { m _ { 0 } v _ { 0 } } \right) \sum \Delta x = \frac { l } { v _ { 0 } } + \frac { \varrho A } { m _ { 0 } v _ { 0 } } \frac { l ^ { 2 } } { 2 } .
$$

Ezt a kifejezést kissé átalakíthatjuk:

$$
\begin{aligned}
T & = \frac { l } { v _ { 0 } } + \frac { \varrho A l } { m _ { 0 } v _ { 0 } } \frac { l } { 2 } = \frac { l } { v _ { 0 } } + \frac { 0,02 } { v _ { 0 } } \frac { l } { 2 } = \frac { l } { v _ { 0 } } ( 1 + 0,01 ) , \\
T & = 1,01 T _ { 0 } .
\end{aligned}
$$


Most kapott eredményünk szerint az áthaladási idő 1\%-kal lett nagyobb. Általánosítva azt mondhatjuk, hogy ha a szonda tömege $p \%$-kal megnőtt, akkor az áthaladási idő $p / 2 \%$-kal lett nagyobb, függetlenül attól, hogy $p$ értéke mekkora. Csak az a gondolatmenet fogadható el e feladat teljes értékú megoldásának, amibő́l ez is következik; más megfontolások (melyek $p$ kicsiny értékénél numerikusan jó eredményt szolgáltatnak, de általánosságban nem múködnek) csak részmegoldásnak tekinthetők.
