---
id: solution-ocr-eotvos-2009-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2009_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2009-rolling-ball-sphere]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. feladat. $R$ sugarú, vékonyfalú plexigömb érdesített belsejében csúszásmentesen gördülve mozoghat egy r sugarú, tömör gumigolyó. A gömb a középpontján átmenó, vízszintes, rögzített tengely körül forgatható.
a) Mekkora periódusidejú, kis amplitúdójú mozgást végezhet a golyó a gömbben, ha a gömb áll, vagy ha a gömb egyenletesen forog? Hogyan fog mozogni a kezdetben nyugvó golyó abban a kísérletben, amikor a gömböt állandó, $g / R$ hez képest kicsiny szöggyorsulással egyre gyorsabban forgatjuk?
b) Ha a gömböt gyors forgásba hozzuk, majd hirtelen megállítjuk, a gömb alján addig egyhelyben forgó golyó igen rövid idő múlva ismét tisztán gördül, és felgurulhat akár a gömb tetejéig is. Legalább mekkora szögsebességgel kell forgatnunk ehhez a gömböt?

A golyó tömegközéppontja minden esetben függőleges síkban mozog.
(Honyek Gyula)

Megoldás. a) A megoldást érdemes az egyenletesen gyorsuló gömb esetével kezdenünk (hiszen ez speciális esetként tartalmazza az egyenletesen forgó és az álló gömb esetét is).

Tegyük fel, hogy a gömb $P$ pontja $\varphi$ szöggel fordul el a kiindulási, legalsó helyzetből (1. ábra). Eközben a golyó tiszta gördüléssel mozog, és a golyó $C$ középpontja $\vartheta$ szöggel fordul el. A golyónak a gömb egyes felületi pontjaihoz képesti összes elfordulása:

$$
\frac { R ( \varphi - \vartheta ) } { r } .
$$

A golyó teljes $\psi$ elfordulását úgy kaphatjuk meg, ha a gömb felszínéhez képesti elforduláshoz hozzáadjuk még a golyó $C$ középpontjának elfordulását is:
![](../../../figures/solution-ocr/af141140037a4c54e8b8b5f6.jpg)

![](../../../figures/solution-ocr/7b7d2b48bf0fccf83c557f9c.jpg)
1. ábra

Jelöljük a plexigömb (állandó) szöggyorsulását $\beta$-val, a golyó tömegközéppontjának érintő irányú gyorsulás-összetevőjét $a$-val, a golyó saját középpontja körüli szöggyorsulását pedig $\beta _ { \text {golyó-val. } }$ Mivel a szögelfordulások és a szöggyorsulások (egy bizonyos rövid időtartam alatt) arányosak egymással, az (1) összefüggésből leolvasható a szöggyorsulásokra vonatkozó megszorítás, tehát a mozgás kényszerfeltétele is:

$$
\begin{equation*}
\beta _ { \text {golyó } } = \frac { R } { r } \beta - \frac { R - r } { r } \cdot \frac { a } { R - r } . \tag{2}
\end{equation*}
$$


Megjegyzés: (2)-t átrendezve $R \beta = a + r \beta _ { \text {golyó } }$ alakra hozhatjuk, ami azt fejezi ki, hogy a gömb felszínének érintóleges gyorsulása a golyó tömegközépponti és kerületi gyorsulásának összege. Kényszerfeltételek felírásában gyakorlottak ezt a kapcsolatot számolás nélkül, ránézésre is fel tudják írni.

A golyóra ható súrlódási erốt jelöljük $S$-sel, a golyó tömegközéppontjának szöggyorsulását pedig $\beta _ { \mathrm { t } }$-vel! Ez utóbbi nyilván kifejezhető a tömegközéppont érintőleges gyorsulásával:

$$
\begin{equation*}
\beta _ { \mathrm { t } } = \frac { a } { R - r } . \tag{3}
\end{equation*}
$$

A dinamikai egyenletek:

$$
\begin{gather*}
S - m g \sin \vartheta = m a = m ( R - r ) \beta _ { \mathrm { t } } ,  \tag{4}\\
S r = \frac { 2 } { 5 } m r ^ { 2 } \beta _ { \text {golyó } } . \tag{5}
\end{gather*}
$$

A (2)-(5) egyenletrendszerből kiküszöbölve az $S$, $a$ és $\beta _ { \text {golyó } }$ mennyiségeket, a golyó tömegközéppontjának szögkitérése és szöggyorsulása között a következő összefüggést kapjuk:

$$
\begin{equation*}
\beta _ { \mathrm { t } } = - \frac { 5 g } { 7 ( R - r ) } \left( \sin \vartheta - \frac { 2 R \beta } { 5 g } \right) . \tag{6}
\end{equation*}
$$

Innen leolvashatjuk, hogy általában létezik egy olyan

$$
\vartheta _ { 0 } = \arcsin \frac { 2 R \beta } { 5 g }
$$

szög, amelynek megfelelő helyzetben a golyó tömegközéppontja egyensúlyban van.
Megjegyzés: Ha ebből a helyzetből indítjuk a golyót, akkor a tömegközéppontja nyugalomban marad, a tömegközéppont körüli forgásának szögsebessége pedig (a csúszásmentes gördülés feltételének megfelelően)

$$
\omega _ { \text {golyó } } = \frac { R } { r } \cdot \beta t
$$

módon növekszik. Ehhez a megfelelóen nagy súrlódáson kívül a szöggyorsulás se lehet akármilyen nagy.
Mivel a feladat szövegében az szerepel, hogy a $\beta$ szöggyorsulás értéke kicsi, ezért jogos feltennünk, hogy a golyó tömegközéppontjának maximális elmozdulása is kicsi, vagyis indokolt a $\sin \vartheta \approx \vartheta$ közelítés használata. A (6) mozgásegyenlet ebben a közelítésben a

$$
\beta _ { \mathrm { t } } = - \frac { 5 g } { 7 ( R - r ) } \left( \vartheta - \frac { 2 R \beta } { 5 g } \right) = - \Omega ^ { 2 } \cdot \left( \vartheta - \vartheta _ { 0 } \right)
$$

alakú, amelybő́l látszik, hogy a golyó tömegközéppontja jó közelítéssel harmonikus rezgőmozgást végez a $\vartheta _ { 0 }$ szöghelyzet körül, és a rezgésideje:

$$
\begin{equation*}
T = \frac { 2 \pi } { \Omega } = 2 \pi \sqrt { \frac { 7 ( R - r ) } { 5 g } } . \tag{7}
\end{equation*}
$$

A rezgőmozgás szög-amplitúdója (mivel $\vartheta = 0$ helyzetbő́l indult a golyó) jó közelítéssel $\vartheta _ { 0 }$. Meglepő, hogy a rezgésidő akkor is a (7)-nek megfelelő érték, ha a gömb szöggyorsulása nulla, a gömb egyenletesen forog vagy áll, vagyis $a$ ) mindhárom kérdésére ugyanaz a válasz.
b) Legyen a plexigömb kezdeti állandó szögsebessége $\omega _ { \text {gömb } }$. A tiszta gördülés miatt a gumigolyó ugyanabba az irányba forog, és a golyó szögsebessége:

$$
\omega _ { \text {golyó } } = \frac { R } { r } \omega _ { \text {gömb } } .
$$

(Ezt pl. (1)-ból olvashatjuk le, $\vartheta \equiv 0$ helyettesítéssel.)
A plexigömb megállításának pillanatában változó nagyságú $F _ { \mathrm { s } } ( t )$ súrlódási erố kezd hatni a golyóra, ami valamekkora $\Delta t$ idő alatt tiszta gördülést eredményez. A súrlódási erő (melynek átlagértékét jelöljük $\bar { F }$-sal) a golyó tömegközéppontjának valamekkora $v _ { 0 }$ sebességet ad, míg a golyó szögsebességét $\omega _ { 0 }$ értékre csökkenti. A tiszta gördülési feltétel miatt: $v _ { 0 } = r \omega _ { 0 }$.

Írjuk fel a súrlódási erő sebességet, illetve szögsebességet változtató hatását kifejező dinamikai egyenleteket:

$$
\begin{gathered}
\bar { F } \Delta t = m v _ { 0 } = m r \omega _ { 0 } , \\
r \bar { F } \Delta t = \Theta \cdot \Delta \omega = \frac { 2 } { 5 } m r ^ { 2 } \cdot \left( \omega _ { \text {golyó } } - \omega _ { 0 } \right) = \frac { 2 } { 5 } m r ^ { 2 } \cdot \left( \frac { R } { r } \omega _ { \text {gömb } } - \omega _ { 0 } \right) .
\end{gathered}
$$


A fenti egyenletekből $\bar { F } \Delta t$-t kiküszöbölve a tisztán gördülő golyó adataira

$$
\begin{equation*}
\omega _ { 0 } = \frac { 2 R } { 7 r } \omega _ { \text {gömb } } \quad \text { és } \quad v _ { 0 } = \frac { 2 R } { 7 } \omega _ { \text {gömb } } \tag{8}
\end{equation*}
$$

adódik. Mivel ez az állapot (a plexigömb érdes felülete miatt) a gömb megállítása után igen rövid idővel bekövetkezik, feltehetjük, hogy az újra tiszta gördüléssel mozgó golyó lényegében a gömb legalján marad, elmozdulása a megcsúszás közben elhanyagolható.

Megjegyzés: Ugyanerre az eredményre juthatunk akkor is, ha a gömb megállítását követő rövid időre a golyó alatti felületet vízszintes, igen érdes síknak tekintjük. A rövid ideig ható súrlódási „erőlökés" megváltoztatja a golyó mechanikai energiáját és lendületét, de nem változtatja meg a golyónak a gömbbel érintkező pontjára vonatkoztatott perdületét:

$$
\frac { 2 } { 5 } m r ^ { 2 } \cdot \omega _ { \text {golyó } } = \frac { 2 } { 5 } m r ^ { 2 } \cdot \omega _ { 0 } + m v _ { 0 } \cdot r .
$$

Ez a feltétel $v _ { 0 } = r \omega _ { 0 }$ és $r \omega _ { \text {golyó } } = R \omega _ { \text {gömb } }$ miatt $( 8 )$-cal egyenértékú.
A golyó további (tisztán gördülő) mozgása során felhasználhatjuk az energiamegmaradás törvényét, és felírjuk a tömegközéppontra vonatkozó mozgásegyenletet a golyó pályájának bármelyik, például a legfelsó pontjára is:

$$
\begin{gathered}
m g - K = m \frac { v _ { 1 } ^ { 2 } } { R - r } , \\
\frac { 1 } { 2 } m v _ { 0 } ^ { 2 } + \frac { 1 } { 2 } \Theta \omega _ { 0 } ^ { 2 } = m g \cdot 2 ( R - r ) + \frac { 1 } { 2 } m v _ { 1 } ^ { 2 } + \frac { 1 } { 2 } \Theta \omega _ { 1 } ^ { 2 } ,
\end{gathered}
$$

ahol $v _ { 1 }$ és $\omega _ { 1 }$ a golyó sebessége, illetve szögsebessége a pálya legfelső́ pontjában $\left( v _ { 1 } = r \omega _ { 1 } \right) , K$ pedig a golyó és a plexigömb között fellépő nyomóerőt jelöli ebben a helyzetben.

A megfelelő mennyiségek behelyettesítése után a kényszererőt így fejezhetjük ki a plexigömb kezdeti szögsebességével:

$$
K = \frac { 4 } { 49 } \frac { m R ^ { 2 } \omega _ { \text {gömb } } ^ { 2 } } { R - r } - \frac { 27 } { 7 } m g .
$$

A gumigolyó akkor juthat fel a legfelső pontba, ha a $K$ kényszererő még a pálya legfelső pontjában sem negatív $( K \geq 0 )$, ami a következő feltételt adja a gömb kezdeti szögsebességére:

$$
\omega _ { \text {gömb } } \geq \frac { 3 } { 2 R } \sqrt { 21 ( R - r ) g } .
$$
