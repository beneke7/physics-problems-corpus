---
id: eotvos-2017-spherical-capacitor
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2017-spherical-capacitor
solution_type: official
source_document: solution-document-eotvos-2017-s
source_pdf: cache/phoxiv/eotvos/2017_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/eotvos/2017_S.pdf."
---

2. feladat. Egy gömbkondenzátor fegyverzeteinek sugara R és 3R. A gömböket rövidre zárjuk, és a nagyobb gömböt
leföldeljük. A két fémgömb között egy Q ponttöltést mozgatunk állandó v sebességgel sugárirányban kifelé (3. ábra).
3. ábra
Mekkora áram folyik a gömböket összeköt® vezetékben, amikor a mozgó töltés éppen  félúton , a gömbök középpont-
jától 2R távolságban van? (A rövidrezáró vezeték elektrosztatikus terét ne vegyük
gyelembe!)
I. megoldás. A feladat nehézsége abban rejlik, hogy a fémgömbök eredetileg fennálló gömbszimmetriáját elrontja
a Q ponttöltés jelenléte. Emiatt a gömbökön kialakuló töltéseloszlás er®sen inhomogén lesz, és az elektromos mez®
szerkezete is meglehet®sen bonyolult. Szeren sére a töltéseloszlás meghatározása elkerülhet®, amint azt az alábbi
megoldásban látni fogjuk.
Jelöljük a kis fémgömb pillanatnyi töltését q1-gyel, a nagyobb gömbét q2-vel, a ponttöltés pillanatnyi távolságát
a gömbök középpontjától pedig r-rel! A kisebb fémgömb poten iálja a földelés miatt nulla, és mivel a fém ekvipoten i-
ális, ugyanez a középpontjára is igaz. A gömbökön elhelyezked® töltések azonos (R, illetve 3R) távolságra helyezkednek
el a gömbök közös középpontjától, ezért itt a poten iált könnyen felírhatjuk:
(1) k
q1
R
+ k
Q
r
+ k
q2
3R
= 0.
A nagy gömbön kívül a földelés miatt nin s elektromos tér (a bels® töltések terét a nagy gömb teljesen leárnyékolja),
így a Gauss-törvény értelmében a rendszer össztöltése nulla:
(2) Q + q1 + q2 = 0.
A fenti két egyenletb®l a kisebb gömb töltésének abszolút értéke kifejezhet® r függvényében:
(3) q1(r) = −

3R
2r
−
1
2

Q.
Mivel a gömbök össztöltése állandó (−Q), így a ponttöltés mozgása közben sak a gömbök közötti vezetékben folyik
áram, a földbe jutó vezetékben nem. A kis gömbre vonatkozó kontinuitási egyenletb®l a gömbök között folyó áram
deriválással (vagy a kis megváltozásokra érvényes formulák segítségével) meghatározható:
I =
dq1
dt
=
dr
dt
dq1
dr
= v
dq1
dr
=
3
2
QvR
r2
,
az áram iránya pedig a kis gömb felé mutat. Tehát az áramer®sség értéke, amikor a ponttöltés éppen r = 2R távolságra
van a gömbök középpontjától:
I =
3
8
Qv
R
.
II. megoldás. Az els® megoldás kul sa az volt, hogy észrevettük: a poten iál értéke könnyen kiszámítható a gömbök
közös középpontjában. Az (1) és (2) egyenletekhez más módon, a szuperpozí iós elv segítségével is eljuthatunk.
Képzeljük el, hogy a gömbök középpontjától r távolságra elhelyezked® Q ponttöltést gondolatban N-edrészére sök-
kentjük. Ekkor a gömbök q1 és q2 töltése is N-edrészére sökken. Forgassuk el ezt az elrendezést a gömbök középpontja
körül egy ki sit, és szuperponáljuk rá az eredeti elrendezésre! Így már két Q/N ponttöltés helyezkedik el a középponttól
r távolságra, a gömbök töltése pedig rendre 2q1/N és 2q2/N. Ismételjük meg ezt az eljárást még (N − 2)-ször úgy,
hogy végül összesen Q töltés legyen az r sugarú gömbfelületen, a lehet® legegyenletesebb elrendez®désben. Az N → ∞
határesetben a ponttöltést ilyen módon végül  szétkenhetjük  egy r sugarú, egyenletes felületi töltéss¶r¶ség¶, Q össz-
töltés¶ gömbhéjjá, miközben a fémgömbök q1 és q2 töltése változatlan marad. Ennek az az el®nye, hogy az eredeti
feladatot visszavezettük egy könnyebb, gömbszimmetrikus problémára.
Ismert, hogy egy egyenletesen töltött gömbhéj poten iálja kívül úgy számítható, mintha a gömb töltése a közép-
pontjában összpontosulna, belül pedig ugyanakkora, mint a gömb felületén. A legküls®, földelt gömb felületén tehát
a poten iált a három (q1, Q és q2 töltés¶) gömbhéj poten iáljának összegeként kaphatjuk meg:
k
q1
3R
+ k
Q
3R
+ k
q2
3R
= 0,
ami ekvivalens a (2) egyenlettel. A kis gömb felületén a (szintén nulla) poten iált teljesen hasonlóan, három tag
összegeként írhatjuk fel: a legküls® gömb járuléka kq2/(3R), a  szétkent  ponttöltésé kQ/r, míg a legbels® gömbé
kq1/R. Ez végül az (1) egyenletre vezet. Az (1) és (2) egyenletek birtokában a végeredményhez az I. megoldással
azonos módon juthatunk el.
Megjegyzés. Az egyik második díjat nyert versenyz®, Marozsák Tóbiás egy harmadik úton oldotta meg a feladatot. Ismert,
hogy ha egy földelt, vezet® gömbhéj közelébe egy ponttöltést helyezünk, akkor a gömbön megosztott töltések helyettesíthet®k
egy, a gömbfelület ponttöltéssel átellenes oldalán elhelyezett tükörtöltéssel. Ennek a tükörtöltésnek a nagysága és helyzete
kiszámolható abból a feltételb®l, hogy a gömb teljes felülete nulla poten iálú. A feladatban szerepl® két, kon entrikus gömbhéj
esetén a Q töltést el®ször  tükröznünk  kell mindkét gömbre, majd az így kapott tükörtöltésekkel is folytatni kell az eljárást.
Végül váltakozó el®jel¶ tükörtöltések végtelen sorát kapjuk a kis gömbön belül és a nagy gömbön kívül. A kis gömbön belüli
tükörtöltések össztöltése (azaz q1) egy geometriai sor felösszegzésével kiszámítható, és így közvetlenül a (3) egyenlethez jutunk.
Bár ez a módszer matematikailag sokkal nehezebb, mint a fenti két, részletesen ismertetett megoldás, elvben lehet®séget ad
a gömbök között kialakuló elektromos tér (legalább numerikus) meghatározására is.
