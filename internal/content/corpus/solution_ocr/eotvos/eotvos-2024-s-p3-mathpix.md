---
id: solution-ocr-eotvos-2024-s-p3
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2024_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2024-lens-system]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
3. Egy tubusban szimmetrikusan elhelyeztünk két $f _ { 1 } = 50 \mathrm {~cm}$ és két $f _ { 2 } = 10 \mathrm {~cm}$ fókusztávolságú gyűjtőlencsét a 7. ábrán látható módon. Sikerült a lencséket úgy beállítani, hogy az optikai rendszeren átnézve a tárgyakat éppen olyannak látjuk, mintha egy üres tubuson át néznénk azokat.

![](../../../figures/solution-ocr/4c1afb51f8c680743dc3c6ca.jpg)
7. ábra

![](../../../figures/solution-ocr/74a6074059c6a06daabfe35c.jpg)
8. ábra

a) Mekkorák a lencsék közötti $d$ és $s$ távolságok?

b) Ha az előző optikai rendszert tubus nélkül megépítjük, és a kezünket megfelelő helyen a lencsék közé helyezzük, akkor a 8. ábrán látható módon a kezünk egy részét el tudjuk „tüntetni”. Magyarázzuk meg a jelenséget!
(Széchenyi Gábor)


Megoldás. a) I. módszer. A tárgyakat éppen olyannak látjuk, mintha „semmi” nem lenne ott, vagyis egy jobb oldalról érkező fénysugár a lencserendszeren áthaladva éppen a beérkező fénysugár meghosszabbításán fog továbbhaladni. Első lépésként tekintsünk egy olyan fénysugarat, melynek belépő és így kilépő része is párhuzamos az optikai tengellyel. Ekkor - ahogy azt a 9. ábrán is látjuk - a lencserendszer, valamint a sugármenet is tükörszimmetrikus. Ilyenkor a két belső lencse között haladó fénysugár is párhuzamos az optikai tengellyel. Egy, a végtelenből érkező párhuzamos nyalábot a két jobb oldali lencse párhuzamos nyalábbá képez, azaz ez a két lencse konfokális, fókuszpontjaik egybeesnek:

$$
s = f _ { 1 } + f _ { 2 } .
$$

![](../../../figures/solution-ocr/f31de94676b33d5784504c07.jpg)
9. ábra

Ezután többféle módon megkaphatjuk a $d$ távolság értékét, lássunk erre két különféle utat!

1. út. Vegyünk fel egy tetszőleges helyen egy tárgyat, és határozzuk meg sorban egymás után a négy lencse által alkotott képeit. A negyedik lencsén történő leképezés után egy azonos állású és nagyítású, virtuális képet kell kapnunk az eredeti tárgy helyén. A leképzési törvény szokásos alakját használva a képletekkel nehézkesebb a számolás, ezért inkább használjuk a Newton-féle alakot (amely az $x$ tárgy és $y$ képtávolságot a fókuszponttól méri, lásd a G. 855. gyakorlatot a KöMaL 2024. májusi számában). Eszerint $x y = f ^ { 2 }$.

Helyezzük a tárgyunkat az első lencse fókuszpontjától $x _ { 1 }$ távolságra. A következőkben jelölje $x _ { i } \left( y _ { i } \right)$ a jobb oldalról számított $i$. lencsén történő leképezéshez tartozó, jobb (bal) oldali fókuszponttól mért tárgytávolságot (képtávolságot). A 10. ábrán piros ponttal a képek helyeit, fekete ponttal a fókuszpontokat jelöltük.

Az első lencsén történő leképezés:

$$
x _ { 1 } y _ { 1 } = f _ { 1 } ^ { 2 } \quad \Rightarrow \quad y _ { 1 } = \frac { f _ { 1 } ^ { 2 } } { x _ { 1 } } .
$$

Mivel $s = f _ { 1 } + f _ { 2 }$, a két lencse fókusza egybeesik, így

$$
x _ { 2 } = - y _ { 1 } ,
$$

A második lencsén történő leképezés:

$$
x _ { 2 } y _ { 2 } = f _ { 2 } ^ { 2 } \quad \Rightarrow \quad y _ { 2 } = \frac { f _ { 2 } ^ { 2 } } { x _ { 2 } } = - \frac { f _ { 2 } ^ { 2 } } { f _ { 1 } ^ { 2 } } x _ { 1 } .
$$


![](../../../figures/solution-ocr/c0556ccb6e133579cef18786.jpg)
A 10. ábra alapján:

$$
x _ { 3 } = d - 2 f _ { 2 } - y _ { 2 } .
$$

Tovább folytatva a harmadik lencsén történő leképezéssel:

$$
\begin{aligned}
x _ { 3 } y _ { 3 } = f _ { 2 } ^ { 2 } \quad & \Rightarrow \quad y _ { 3 } = \frac { f _ { 2 } ^ { 2 } } { d - 2 f _ { 2 } - y _ { 2 } } \\
& x _ { 4 } = - y _ { 3 }
\end{aligned}
$$

Végül a negyedik lencsén történő leképezés:

$$
\begin{aligned}
x _ { 4 } y _ { 4 } = & f _ { 1 } ^ { 2 } \quad \Rightarrow \quad y _ { 4 } = \frac { f _ { 1 } ^ { 2 } } { x _ { 4 } } = - \frac { f _ { 1 } ^ { 2 } } { y _ { 3 } } = - \frac { f _ { 1 } ^ { 2 } } { f _ { 2 } ^ { 2 } } \left( d - 2 f _ { 2 } - y _ { 2 } \right) = \\
& = - \frac { f _ { 1 } ^ { 2 } } { f _ { 2 } ^ { 2 } } \left( d - 2 f _ { 2 } + \frac { f _ { 2 } ^ { 2 } } { f _ { 1 } ^ { 2 } } x _ { 1 } \right) = - \frac { f _ { 1 } ^ { 2 } } { f _ { 2 } ^ { 2 } } \left( d - 2 f _ { 2 } \right) - x _ { 1 }
\end{aligned}
$$

Ismét a 10. ábra alapján, ahhoz hogy a negyedik kép az első tárgy helyén legyen a következő geometriai feltételnek kell teljesülnie:

$$
- y _ { 4 } = 4 f _ { 1 } + 2 f _ { 2 } + d + x _ { 1 } .
$$

Ebből

$$
\frac { f _ { 1 } ^ { 2 } } { f _ { 2 } ^ { 2 } } \left( d - 2 f _ { 2 } \right) + x _ { 1 } = 4 f _ { 1 } + 2 f _ { 2 } + d + x _ { 1 }
$$

Látható, hogy az egyenletből kiesik az $x _ { 1 }$ változó, azaz tetszőleges helyre helyezve a tárgyat, annak képe a négy lencsén történő leképezés után éppen a tárgy helyén lesz. Az egyenletet tovább alakítva:

$$
\begin{aligned}
& \left( \frac { f _ { 1 } ^ { 2 } } { f _ { 2 } ^ { 2 } } - 1 \right) d = 2 f _ { 2 } \frac { f _ { 1 } ^ { 2 } } { f _ { 2 } ^ { 2 } } + 4 f _ { 1 } + 2 f _ { 2 } \\
& \left( f _ { 1 } ^ { 2 } - f _ { 2 } ^ { 2 } \right) d = 2 f _ { 2 } \left( f _ { 1 } ^ { 2 } + 2 f _ { 1 } f _ { 2 } + f _ { 2 } ^ { 2 } \right)
\end{aligned}
$$

A két középső lencse közötti távolságra az alábbi kifejezés adódik:

$$
d = 2 f _ { 2 } \frac { \left( f _ { 1 } + f _ { 2 } \right) ^ { 2 } } { f _ { 1 } ^ { 2 } - f _ { 2 } ^ { 2 } } = 2 f _ { 2 } \frac { f _ { 1 } + f _ { 2 } } { f _ { 1 } - f _ { 2 } } .
$$

2. út. A lencserendszer középpontosan is szimmetrikus. Ha a beérkező fénysugár meghosszabbítása a középponton menne át, akkor a kimenő fénysugár meghosszabbítása is átmegy a középponton. Ilyenkor a fénysugárnak is középpontosan

szimmetrikusnak kell lennie, azaz annak fizikailag is át kell haladnia a rendszer középpontján (lásd a 11. ábrát). Ennek következményeként egy, a középpontban elhelyezett tárgyat a két bal oldali lencse a középpontba képez le mint virtuális képet.

![](../../../figures/solution-ocr/51493a21ab0355dd1cfaca3a.jpg)
11. ábra

Szerkesszük meg a középpontba helyezett $h$ magasságú tárgy képét! Tekintsünk egy, az optikai tengellyel párhuzamos, illetve egy, az $f _ { 2 }$ fókusztávolságú lencse fókuszán áthaladó sugármenetet, ezeket zölddel, illetve kékkel rajzoltuk meg a 12. ábrán.

![](../../../figures/solution-ocr/38cde79489674e36829cdf2d.jpg)
12. ábra

A két lencse konfokális, így a zöld sugármenetet követve a kép méretére

$$
O H = \frac { f _ { 1 } } { f _ { 2 } } h
$$

adódik. Az FGO és FED háromszögek hasonlóak, valamint

$$
D F = f _ { 2 } \quad \text { és } \quad F O = \frac { d } { 2 } - f _ { 2 } ,
$$

ahonnan

$$
D E = B C = \frac { f _ { 2 } } { \frac { d } { 2 } - f _ { 2 } } h .
$$

Az $A B C$ és $A O H$ háromszögek is hasonlóak, amiből következik, hogy

$$
\frac { B C } { A B } = \frac { O H } { A O } \quad \Rightarrow \quad \frac { \frac { f _ { 2 } } { \frac { d } { 2 } - f _ { 2 } } h } { f _ { 1 } } = \frac { \frac { f _ { 1 } } { f _ { 2 } } h } { 2 f _ { 1 } + f _ { 2 } + \frac { d } { 2 } } .
$$

Az egyenletet $d$-re megoldva a korábban megkapott végeredményre jutunk.


A megadott fókusztávolságok behelyettesítése után:

$$
s = f _ { 1 } + f _ { 2 } = 60 \mathrm {~cm} \quad \text { és } \quad d = 2 f _ { 2 } \frac { f _ { 1 } + f _ { 2 } } { f _ { 1 } - f _ { 2 } } = 30 \mathrm {~cm} .
$$

II. módszer. Vegyük fel a koordinátatengelyt az optikai tengelyen, középpontját helyezzük az elrendezés közepére! A tárgy legyen a tengely $x$ pontjában, amit a jobb szélső lencse a $z$ pontba képez le, ezt az első képet pedig a második lencse az $y$ pontba. A lencsék helyére is bevezetünk két új paramétert: az origótól mért távolságukat (hogy rövidebbek legyenek a képletek, 13. ábra):

$$
d _ { 2 } = \frac { 1 } { 2 } d , \quad d _ { 1 } = \frac { 1 } { 2 } d + s .
$$

![](../../../figures/solution-ocr/96e3119eb5268213d123e6b8.jpg)
13. ábra

A harmadik és negyedik lencse az első kettőnek a tükörképe, ezért számukra az $x$ és $y$ pont a $- x , - y$ párnak felel meg. A fényút megfordíthatóságát is kihasználva arra jutunk, hogy a bal oldali két lencse a második képet akkor képezi pontosan vissza az $x$ pontba, ha az $y = L ( x )$ páratlan függvény.

Írjuk fel az első két lencsére a leképezési törvényt a $( k - f ) ( t - f ) = f ^ { 2 }$ Newtonféle alakot használva:

$$
\begin{aligned}
& \left( x - d _ { 1 } - f _ { 1 } \right) \left( d _ { 1 } - z - f _ { 1 } \right) = f _ { 1 } ^ { 2 } \\
& \left( z - d _ { 2 } - f _ { 2 } \right) \left( d _ { 2 } - y - f _ { 2 } \right) = f _ { 2 } ^ { 2 } .
\end{aligned}
$$

Ejtsük ki a $z$ ismeretlent úgy, hogy mindkét egyenletet elosztjuk a bal oldal $z$-t nem tartalmazó tényezőjével, majd összeadjuk ezeket:

$$
d _ { 1 } - d _ { 2 } - f _ { 1 } - f _ { 2 } = \frac { f _ { 1 } ^ { 2 } } { x - d _ { 1 } - f _ { 1 } } + \frac { f _ { 2 } ^ { 2 } } { d _ { 2 } - y - f _ { 2 } } .
$$

A nevezőkkel beszorozva:

$$
\left( d _ { 1 } - d _ { 2 } - f _ { 1 } - f _ { 2 } \right) \left( x - d _ { 1 } - f _ { 1 } \right) \left( d _ { 2 } - y - f _ { 2 } \right) = f _ { 1 } ^ { 2 } \left( d _ { 2 } - y - f _ { 2 } \right) + f _ { 2 } ^ { 2 } \left( x - d _ { 1 } - f _ { 1 } \right) .
$$

Mielőtt elvégeznénk az összes szorzást, nézzük meg, melyik tagokra van szükségünk. A fenti egyenlet egy

$$
A x y + B x + C y + D = 0
$$

implicit alakra vezet, ahol

$$
\begin{equation*}
A = d _ { 1 } - d _ { 2 } - f _ { 1 } - f _ { 2 } , \tag{1}
\end{equation*}
$$


$$
\begin{align*}
& B = f _ { 2 } ^ { 2 } + A \left( f _ { 2 } - d _ { 2 } \right)  \tag{2}\\
& C = - f _ { 1 } ^ { 2 } - A \left( d _ { 1 } + f _ { 1 } \right)  \tag{3}\\
& D = f _ { 1 } ^ { 2 } \left( d _ { 2 } - f _ { 2 } \right) - f _ { 2 } ^ { 2 } \left( d _ { 1 } + f _ { 1 } \right) + A \left( d _ { 1 } + f _ { 1 } \right) \left( d _ { 2 } - f _ { 2 } \right) = \frac { B C + f _ { 1 } ^ { 2 } f _ { 2 } ^ { 2 } } { A } . \tag{4}
\end{align*}
$$

A keresett $L$ függvény:

$$
y = - \frac { B x + D } { A x + C } .
$$

Ez akkor páratlan, ha $\alpha$ ) $A = D = 0$, vagy $\beta$ ) $B = C = 0$.
Az $\alpha$ ) esetben az (1) egyenletből $A = 0$ feltétellel:

$$
\begin{equation*}
s = d _ { 1 } - d _ { 2 } = f _ { 1 } + f _ { 2 } . \tag{5}
\end{equation*}
$$

Ez a távolság ugyanakkora, mint a Kepler-féle távcsőben, vagyis eszközünk nem más, mint két kifelé fordított Kepler-távcső. A $d$ középső távolság meghatározásához nézzük a $D$ együtthatóra vonatkozó egyenletet. A (4) egyenletből $D = 0$ feltétellel:

$$
\begin{equation*}
f _ { 1 } ^ { 2 } \left( d _ { 2 } - f _ { 2 } \right) - f _ { 2 } ^ { 2 } \left( d _ { 1 } + f _ { 1 } \right) = 0 . \tag{6}
\end{equation*}
$$

Helyettesítsük be (5)-ből $d _ { 1 } = d _ { 2 } + f _ { 1 } + f _ { 2 }$-t, és oldjuk meg $d _ { 2 }$-re:

$$
\begin{gathered}
f _ { 1 } ^ { 2 } \left( d _ { 2 } - f _ { 2 } \right) - f _ { 2 } ^ { 2 } \left( d _ { 2 } + 2 f _ { 1 } + f _ { 2 } \right) = 0 \\
d _ { 2 } = f _ { 2 } \frac { f _ { 1 } ^ { 2 } + 2 f _ { 1 } f _ { 2 } + f _ { 2 } ^ { 2 } } { f _ { 1 } ^ { 2 } - f _ { 2 } ^ { 2 } } = f _ { 2 } \frac { f _ { 1 } + f _ { 2 } } { f _ { 1 } - f _ { 2 } } \quad \Rightarrow \quad d = 2 f _ { 2 } \frac { f _ { 1 } + f _ { 2 } } { f _ { 1 } - f _ { 2 } } .
\end{gathered}
$$

Az eredményen látszik, hogy a megoldhatósághoz teljesülnie kell az $f _ { 1 } > f _ { 2 }$ egyenlőtlenségnek. A második kép helye végül:

$$
\begin{equation*}
y = - \frac { B } { C } x = \left( \frac { f _ { 2 } } { f _ { 1 } } \right) ^ { 2 } x . \tag{7}
\end{equation*}
$$

A $\beta$ ) megoldásról megmutatjuk, hogy fordított képet ad, ezért nem felel meg a feladat leírásának. A kép annyiszor fordul meg az eszközben, ahány valódi, ernyőn felfogható kép létrejön. Az $\alpha$ ) megoldásban például a párhuzamos fénynyaláb (végtelen távoli tárgy) a középső tartományban szintén párhuzamos, a két szélsőben a lencsék közös fókuszpontjában valódi kép jön létre, így a kétszer megfordított kép egyenes állású lesz. A $\beta$ ) megoldásnál a második kép az

$$
y = - \frac { D } { A x }
$$

helyre kerül, a végtelen távol levő tárgy második képe tehát az origóban lesz. Mivel a sugármenet szimmetrikus, ez mindenképpen páratlan számú képfordítást jelent, a végső kép így fordított állású lesz.

A feladat $a$ ) kérdésére tehát a válasz (a korábbi eredményekkel összhangban):

$$
s = f _ { 1 } + f _ { 2 } = 60 \mathrm {~cm} \quad \text { és } \quad d = 2 f _ { 2 } \frac { f _ { 1 } + f _ { 2 } } { f _ { 1 } - f _ { 2 } } = 30 \mathrm {~cm} .
$$


Megjegyzések. 1. A kép és a tárgy összetett optikai eszközöknél is felcserélhető - ez a fénysugár megfordíthatóságából következik. Ha a kettő ugyanott van, akkor a felcserélhetőség az eszköz nagyítására az

$$
N ^ { * } = \frac { K } { T } = \frac { T } { K } = \frac { 1 } { N ^ { * } }
$$

feltételt adja, amiből

$$
N ^ { * 2 } = 1 \quad \text { és } \quad N ^ { * } = \pm 1 ,
$$

vagyis a kép ugyanakkora, de lehet egyenes vagy fordított állású.
Ellenőrizzük, hogy a nagyítás az $\alpha$ ) megoldásban minden tárgytávolságra + 1 . Egy lencse nagyítása (amit fordított állású kép esetén negatívnak tekintünk):

$$
N = \frac { K } { T } = - \frac { k } { t } = \frac { f } { f - t } = \frac { f - k } { f } .
$$

A teljes nagyítás a négy lencse nagyításának szorzata. Az első és harmadik kép helyét nem számoltuk ki, de az egyes lencsék nagyításának felírásánál szerencsére két-két lehetőségünk van:

$$
N ^ { * } = \frac { f _ { 1 } } { f _ { 1 } + d _ { 1 } - x } \cdot \frac { f _ { 2 } - d _ { 2 } + y } { f _ { 2 } } \cdot \frac { f _ { 2 } } { f _ { 2 } - d _ { 2 } - y } \cdot \frac { f _ { 1 } + d _ { 1 } + x } { f _ { 1 } } .
$$

A szorzások elvégzésekor vegyük észre, hogy a számláló és a nevező egyforma tagokat tartalmaz, csak némelyiket eltérő előjellel:

$$
\begin{equation*}
N ^ { * } = \frac { \left[ \left( f _ { 1 } + d _ { 1 } \right) \left( f _ { 2 } - d _ { 2 } \right) + x y \right] + \left[ x \left( f _ { 2 } - d _ { 2 } \right) + y \left( f _ { 1 } + d _ { 1 } \right) \right] } { \left[ \left( f _ { 1 } + d _ { 1 } \right) \left( f _ { 2 } - d _ { 2 } \right) + x y \right] - \left[ x \left( f _ { 2 } - d _ { 2 } \right) + y \left( f _ { 1 } + d _ { 1 } \right) \right] } . \tag{8}
\end{equation*}
$$

A számláló és nevező eltérő előjelű részéről megmutatjuk, hogy zérus:

$$
x \left( f _ { 2 } - d _ { 2 } \right) + y \left( f _ { 1 } + d _ { 1 } \right) = \frac { x } { f _ { 1 } ^ { 2 } } \left[ f _ { 1 } ^ { 2 } \left( f _ { 2 } - d _ { 2 } \right) + f _ { 2 } ^ { 2 } \left( f _ { 1 } + d _ { 1 } \right) \right] = 0 .
$$

(Ehhez használtuk a (7) eredményt, a szögletes zárójelben levő rész pedig (6) alapján zérus.) Tehát $N ^ { * } = 1$, bárhol is van a tárgy.
2. A $\beta$ ) megoldás a következő:

$$
s = \sqrt { 2 f _ { 1 } f _ { 2 } } , \quad d = 2 f _ { 2 } \frac { f _ { 1 } - \sqrt { 2 f _ { 1 } f _ { 2 } } } { f _ { 1 } + f _ { 2 } - \sqrt { 2 f _ { 1 } f _ { 2 } } } , \quad f _ { 1 } > 2 f _ { 2 } .
$$

A nagyítás (8) kifejezésében most az azonos előjelű rész, a számláló és nevező első tagja tűnik el:

$$
\left( f _ { 1 } + d _ { 1 } \right) \left( f _ { 2 } - d _ { 2 } \right) - \frac { D } { A } = \left( f _ { 1 } + d _ { 1 } \right) \left( f _ { 2 } - d _ { 2 } \right) - \frac { f _ { 1 } ^ { 2 } f _ { 2 } ^ { 2 } } { A ^ { 2 } } = 0 ,
$$

ahol előbb behelyettesítettük (4) egyenletből $D$-t, majd pedig az

$$
\frac { f _ { 1 } ^ { 2 } } { A } = - \left( d _ { 1 } + f _ { 1 } \right) , \quad \frac { f _ { 2 } ^ { 2 } } { A } = d _ { 2 } - f _ { 2 }
$$

értékeket, amik a $B = C = 0$ feltétellel a (2) és (3) egyenletből adódnak. A nagyítás tehát ebben az esetben $N ^ { * } = - 1$, bárhol van a tárgy.
b) Ha megnézzük a 9. ábrán a párhuzamos nyalábot, láthatjuk, hogy a két belső lencse között $\frac { f _ { 2 } } { f _ { 1 } }$ arányban, esetünkben $\frac { 1 } { 5 }$-öd részére szűkül össze. Ha a kezünket úgy rakjuk be a két belső lencse közé, hogy ez a szűk nyaláb a széttartott ujjaink


között át tud menni, akkor nem fog kitakarni semmit, és a teljes lencserendszeren át a hátteret látjuk. A 14. ábrán nemcsak a párhuzamos, hanem kis szögben érkező nyalábokat is tekintettünk, és szürkével rajzoltuk be azokat a tartományokat, ahová helyezett tárgyak nem fognak semmit kitakarni.

![](../../../figures/solution-ocr/63eaf6490b3720f9ec34b614.jpg)
14. ábra

棌
Az ünnepélyes eredményhirdetésre és díjkiosztásra 2024. november 22-én délután került sor az ELTE TTK Eötvös termében. Megemlékeztünk az 50 és 25 évvel ezelőtti Eötvös-versenyről, ismertettük az akkori feladatokat és a győztesek nevét. Az 50 évvel ezelőtt díjazottak közül Vladár Károly - aki az idei évtől a versenybizottság tagja - volt jelen, a 25 évvel ezelőttiek közül Hegedüs Ákos, Gáspár Merse Előd és Terpai Tamás - ők pár mondatban beszéltek a versennyel kapcsolatos emlékeikről és a pályafutásukról. A 75 évvel ezelőtti győztes Holics László és az 50 évvel ezelőtti II. díjas Szép Jenő néhány soros üdvözletet küldött. Ezután következett a 2024. évi verseny feladatainak és megoldásainak bemutatása. Az 1. feladat megoldását Vigh Máté, a 2. feladatét Vankó Péter, a 3. feladatét Széchenyi Gábor ismertette.

Az esemény végén került sor az eredményhirdetésre. A díjakat Ormos Pál, az Eötvös Loránd Fizikai Társulat elnöke adta át.
I. díjat a versenybizottság nem adott ki.

Az első feladat helyes, a második feladat lényegében helyes megoldásáért és a harmadik feladatban elért részeredményért második díjat nyert Bencz Benedek, a Baár-Madas Református Gimnázium, Általános Iskola és Kollégium 12. osztályos tanulója, Horváth Norbert tanítványa.

A második feladat helyes megoldásáért és a másik két feladatban elért részeredményekért harmadik díjat nyert Téti Miklós, a Budapesti Fazekas Mihály Gyakorló Általános Iskola és Gimnázium 11. osztályos tanulója, Schramek Anikó tanítványa.

Egy feladat lényegében helyes megoldásáért és kisebb részeredményekért dicséretet kapott Iliás Gergely, az ELTE fizika BSc szakos hallgatója, aki a Jedlik Ányos Gimnáziumban érettségizett Radnai Tamás tanítványaként, Masa Barnabás, a Szegedi Radnóti Miklós Kísérleti Gimnázium 12. osztályos tanulója, Csányi Sándor tanítványa, valamint Tóth Kolos Barnabás, a Budapest V. Kerületi Eötvös József Gimnázium 11. osztályos tanulója, Varga Balázs tanítványa.

A második díjjal az Andersen Adótanácsadó Zrt. és a Nanorobot Vagyonkezelő Kft. adományából 90 ezer forint, a harmadik díjjal 60 ezer, a dicsérettel 40 ezer


[^0]:    ${ } ^ { 1 }$ Részletek a verseny honlapján: http://eik.bme.hu/~vanko/fizika/eotvos.htm
