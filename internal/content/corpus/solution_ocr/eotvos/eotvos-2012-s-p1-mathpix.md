---
id: solution-ocr-eotvos-2012-s-p1
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2012_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2012-rolling-ball]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
1. feladat. Egy sík, érdes felületǘ, a vízszinteshez képest $\alpha$ szögben döntött korong egyenletesen, $\Omega$ szögsebességgel forog. Egy bứvész a forgó korong közepére egy $R$ sugarú, tömör gumilabdát helyez, majd megfeleló irányban elgurítja. A közönség legnagyobb ámulatára a labda középpontja ezután egyenes vonalú, egyenletes mozgást végez, amit mindaddig folytat, amíg a labda a forgó korong peremére ér. (A labda mindvégig tisztán gördül, a korong szögsebessége nem változik.)

![](../../../figures/solution-ocr/855ac48bf30955cb063cdb7b.jpg)
1. ábra

Adjunk fizikai magyarázatot a furcsa jelenségre! Milyen irányban és milyen kezdőfeltételekkel kell indítania a bữvésznek a labdát, hogy a mutatvány sikerüljön?
(Vigh Máté)

Megoldás. Ismert mennyiségek:
$\alpha$ a korong dólésszöge;
$\Omega$ a korong szögsebessége;
$R$ a labda sugara.
Szükség lehet még a következókre:
$m$ a labda tömege;
$\Theta = \frac { 2 } { 5 } m R ^ { 2 }$ a labda tehetetlenségi nyomatéka a középpontján átmenő tengelyre vonatkozólag;
$S$ a labdára ható súrlódási erő;
$N$ a labdára ható nyomóerő;
$v _ { 0 }$ a labda (tömeg)középpontjának kezdősebessége;
$\omega _ { 0 }$ a labda kezdeti szögsebessége.
A labda tömegközéppontja egyenes vonalú egyenletes mozgást végez, miközben a nyomóerő, a súrlódási erő és a nehézségi eró hat rá. Ezek eredője tehát zérus kell legyen. Ez csak úgy lehet, ha a nyomóerő nagysága $N = m g \cos \alpha$ és a súrlódási erő nagysága $S = m g \sin \alpha$. A súrlódási erőnek merőlegesnek kell lennie a sebességre, mert különben gyorsítaná vagy lassítaná azt. Ez pedig azt jelenti, hogy a labdának vízszintesen (felülről nézve balra) kell gurulnia, hiszen $\boldsymbol { S }$ a lejtő síkjában felfelé mutató vektor!

A megoldás kulcsa, hogy a labda forgását két, egymásra meróleges tengely körüli forgás eredőjeként fogjuk fel.


1. A korong síkjával párhuzamos, lejtés irányú tengely körül a labda egyenletesen forog:

$$
\omega _ { 1 } = \omega _ { 0 } = \frac { v _ { 0 } } { R }
$$

2. A korong síkjával párhuzamos, vízszintes tengely körül a labda gyorsulva forog:

$$
\omega _ { 2 } = \frac { r \Omega } { R } , \quad \text { ahol } \quad r = v _ { 0 } t
$$

A szöggyorsulás, mivel $\omega _ { 2 } ( t )$ lineáris függvénye az időnek:

$$
\beta = \frac { \omega _ { 2 } } { t } = \frac { v _ { 0 } \Omega } { R } .
$$

Erre a forgásra a dinamika alaptörvénye:

$$
\begin{aligned}
\sum M & = \Theta \beta , \\
S R & = \frac { 2 } { 5 } m R ^ { 2 } \frac { v _ { 0 } \Omega } { R } , \\
R m g \sin \alpha & = \frac { 2 } { 5 } m R ^ { 2 } \frac { v _ { 0 } \Omega } { R } .
\end{aligned}
$$

Ebből kifejezhető $v _ { 0 }$ és $\omega _ { 0 }$ is:

$$
\begin{aligned}
v _ { 0 } & = \frac { 5 } { 2 } \frac { g \sin \alpha } { \Omega } , \\
\omega _ { 0 } & = \frac { v _ { 0 } } { R } = \frac { 5 } { 2 } \frac { g \sin \alpha } { \Omega R } .
\end{aligned}
$$

Megkaptuk a szükséges kezdőfeltételeket. Érdekes, hogy sem $v _ { 0 }$, sem $\omega _ { 0 }$ nem függ a labda $m$ tömegétől, $v _ { 0 }$ pedig még a labda $R$ sugarától sem!

Megjegyzések. 1. Az a gondolat, hogy egy labda forgása két forgás eredójeként fogható fel, már szerepelt egyszer az Eötvösversenyen. 1972-ben ez volt a 3. feladat:
„Felfújt, könnyǘ müanyag labdát találomra megpörgetve sima vízfelületre ejtünk. Azt tapasztaljuk, hogy mielőtt megáll, rendszerint függốleges tengely körül forog. Mi a jelenség magyarázata?"

A megoldás az, hogy a labda bármely tengely körüli forgása egy függőleges és egy vízszintes tengely körüli forgás eredójeként tárgyalható. A vízszintes tengely körüli forgást a súrlódás sokkal jobban fékezi, ezért marad meg végül mindig a függőleges tengely körüli forgás.
2. Az eredményhirdetéskor Vigh Máté levetítette azt a videót, amely több variációban mutatta be a feladatban leírt jelenséget. A bemutatást a közönség élénk figyelemmel kísérte.
