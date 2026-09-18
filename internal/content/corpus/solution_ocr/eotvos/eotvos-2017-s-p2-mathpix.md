---
id: solution-ocr-eotvos-2017-s-p2
source: eotvos
kind: official_solution_document
language: hu
solution_type: official
source_pdf: cache/phoxiv/eotvos/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eotvos-2017-spherical-capacitor]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
2. feladat. Egy gömbkondenzátor fegyverzeteinek sugara $R$ és $3 R$. A gömböket rövidre zárjuk, és a nagyobb gömböt leföldeljük. A két fémgömb között egy $Q$ ponttöltést mozgatunk állandó $v$ sebességgel sugárirányban kifelé (3. ábra).

![](../../../figures/solution-ocr/0c0fdbe8eb4ab5cb7705ad31.jpg)
3. ábra

Mekkora áram folyik a gömböket összekötő vezetékben, amikor a mozgó töltés éppen „félúton”, a gömbök középpontjától $2 R$ távolságban van? (A rövidrezáró vezeték elektrosztatikus terét ne vegyük figyelembe!)
I. megoldás. A feladat nehézsége abban rejlik, hogy a fémgömbök eredetileg fennálló gömbszimmetriáját elrontja a $Q$ ponttöltés jelenléte. Emiatt a gömbökön kialakuló töltéseloszlás erősen inhomogén lesz, és az elektromos mező szerkezete is meglehetősen bonyolult. Szerencsére a töltéseloszlás meghatározása elkerülhető, amint azt az alábbi megoldásban látni fogjuk.

Jelöljük a kis fémgömb pillanatnyi töltését $q _ { 1 }$-gyel, a nagyobb gömbét $q _ { 2 }$-vel, a ponttöltés pillanatnyi távolságát a gömbök középpontjától pedig $r$-rel! A kisebb fémgömb potenciálja a földelés miatt nulla, és mivel a fém ekvipotenciális, ugyanez a középpontjára is igaz. A gömbökön elhelyezkedó töltések azonos $( R$, illetve $3 R )$ távolságra helyezkednek el a gömbök közös középpontjától, ezért itt a potenciált könnyen felírhatjuk:

$$
\begin{equation*}
k \frac { q _ { 1 } } { R } + k \frac { Q } { r } + k \frac { q _ { 2 } } { 3 R } = 0 . \tag{1}
\end{equation*}
$$

A nagy gömbön kívül a földelés miatt nincs elektromos tér (a belsó töltések terét a nagy gömb teljesen leárnyékolja), így a Gauss-törvény értelmében a rendszer össztöltése nulla:

$$
\begin{equation*}
Q + q _ { 1 } + q _ { 2 } = 0 . \tag{2}
\end{equation*}
$$

A fenti két egyenletből a kisebb gömb töltésének abszolút értéke kifejezhető $r$ függvényében:

$$
\begin{equation*}
q _ { 1 } ( r ) = - \left( \frac { 3 R } { 2 r } - \frac { 1 } { 2 } \right) Q . \tag{3}
\end{equation*}
$$

Mivel a gömbök össztöltése állandó $( - Q )$, így a ponttöltés mozgása közben csak a gömbök közötti vezetékben folyik áram, a földbe jutó vezetékben nem. A kis gömbre vonatkozó kontinuitási egyenletből a gömbök között folyó áram deriválással (vagy a kis megváltozásokra érvényes formulák segítségével) meghatározható:

$$
I = \frac { \mathrm { d } q _ { 1 } } { \mathrm {~d} t } = \frac { \mathrm { d } r } { \mathrm {~d} t } \frac { \mathrm {~d} q _ { 1 } } { \mathrm {~d} r } = v \frac { \mathrm {~d} q _ { 1 } } { \mathrm {~d} r } = \frac { 3 } { 2 } \frac { Q v R } { r ^ { 2 } } ,
$$


az áram iránya pedig a kis gömb felé mutat. Tehát az áramerősség értéke, amikor a ponttöltés éppen $r = 2 R$ távolságra van a gömbök középpontjától:

$$
I = \frac { 3 } { 8 } \frac { Q v } { R } .
$$

II. megoldás. Az első megoldás kulcsa az volt, hogy észrevettük: a potenciál értéke könnyen kiszámítható a gömbök közös középpontjában. Az (1) és (2) egyenletekhez más módon, a szuperpozíciós elv segítségével is eljuthatunk.

Képzeljük el, hogy a gömbök középpontjától $r$ távolságra elhelyezkedő $Q$ ponttöltést gondolatban $N$-edrészére csökkentjük. Ekkor a gömbök $q _ { 1 }$ és $q _ { 2 }$ töltése is $N$-edrészére csökken. Forgassuk el ezt az elrendezést a gömbök középpontja körül egy kicsit, és szuperponáljuk rá az eredeti elrendezésre! Így már két $Q / N$ ponttöltés helyezkedik el a középponttól $r$ távolságra, a gömbök töltése pedig rendre $2 q _ { 1 } / N$ és $2 q _ { 2 } / N$. Ismételjük meg ezt az eljárást még $( N - 2 )$-ször úgy, hogy végül összesen $Q$ töltés legyen az $r$ sugarú gömbfelületen, a lehető legegyenletesebb elrendezódésben. Az $N \rightarrow \infty$ határesetben a ponttöltést ilyen módon végül „szétkenhetjük" egy $r$ sugarú, egyenletes felületi töltéssürüségü, $Q$ össztöltésú gömbhéjjá, miközben a fémgömbök $q _ { 1 }$ és $q _ { 2 }$ töltése változatlan marad. Ennek az az előnye, hogy az eredeti feladatot visszavezettük egy könnyebb, gömbszimmetrikus problémára.

Ismert, hogy egy egyenletesen töltött gömbhéj potenciálja kívül úgy számítható, mintha a gömb töltése a középpontjában összpontosulna, belül pedig ugyanakkora, mint a gömb felületén. A legkülső, földelt gömb felületén tehát a potenciált a három ( $q _ { 1 } , Q$ és $q _ { 2 }$ töltésú) gömbhéj potenciáljának összegeként kaphatjuk meg:

$$
k \frac { q _ { 1 } } { 3 R } + k \frac { Q } { 3 R } + k \frac { q _ { 2 } } { 3 R } = 0 ,
$$

ami ekvivalens a (2) egyenlettel. A kis gömb felületén a (szintén nulla) potenciált teljesen hasonlóan, három tag összegeként írhatjuk fel: a legkülső gömb járuléka $k q _ { 2 } / ( 3 R )$, a „szétkent” ponttöltésé $k Q / r$, míg a legbelső gömbé $k q _ { 1 } / R$. Ez végül az (1) egyenletre vezet. Az (1) és (2) egyenletek birtokában a végeredményhez az I. megoldással azonos módon juthatunk el.

Megjegyzés. Az egyik második díjat nyert versenyző, Marozsák Tóbiás egy harmadik úton oldotta meg a feladatot. Ismert, hogy ha egy földelt, vezető gömbhéj közelébe egy ponttöltést helyezünk, akkor a gömbön megosztott töltések helyettesíthetők egy, a gömbfelület ponttöltéssel átellenes oldalán elhelyezett tükörtöltéssel. Ennek a tükörtöltésnek a nagysága és helyzete kiszámolható abból a feltételből, hogy a gömb teljes felülete nulla potenciálú. A feladatban szereplő két, koncentrikus gömbhéj esetén a $Q$ töltést először „tükröznünk" kell mindkét gömbre, majd az így kapott tükörtöltésekkel is folytatni kell az eljárást. Végül váltakozó előjelú tükörtöltések végtelen sorát kapjuk a kis gömbön belül és a nagy gömbön kívül. A kis gömbön belüli tükörtöltések össztöltése (azaz $q _ { 1 }$ ) egy geometriai sor felösszegzésével kiszámítható, és így közvetlenül a (3) egyenlethez jutunk. Bár ez a módszer matematikailag sokkal nehezebb, mint a fenti két, részletesen ismertetett megoldás, elvben lehetőséget ad a gömbök között kialakuló elektromos tér (legalább numerikus) meghatározására is.
