---
id: ipho-book-1972-q2
problem: ipho-book-1972-q2
source: ipho
language: hu
solution_language: hu
solution_type: official
source_pdf: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf"
figure_files: []
provenance_note: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf; Mathpix OCR"
verification_status: pending
---

## Megoldás 2

A feladatban megadott folyamat nem a leírtak szerint játszódik le, ha izoterm és adiabatikus, vagyis reverzibilis folyamatokat tekintünk. Ugyanis súrlódás hiánya nélkül valószínútlen, hogy a dugattyúrendszer a folyamat során lassan mozog, bár nincs információnk a dugattyúrendszer tömegéről, de végtelen nagynak kell lennie, hogy ne gyorsuljon. Valójában a dugattyúrendszer gyorsan fog mozogni, és ha megfordítható folyamatokat vizsgálunk, akkor a dugattyú az egyensúlyi helyzete körül oszcillálni fog, nem alakul ki olyan egyensúlyi állapot, amiben a dugattyú megállna. A feladat akkor lesz ellentmondásmentes, ha azzal a kiegészítéssel oldjuk meg, hogy a dugattyúrendszer az egyensúlyi állapotában nem áll, hanem valamekkora (nem nulla) sebességgel mozog.

Ha a változatlan hőmérsékletú hélium térfogata feleződött (hiszen súrúsége kétszeres lett), akkor nyomása megkétszereződött.

Legyenek az argon kezdeti adatai $p_{0}, V_{0}, T_{0}$, végállapotbeli adatai $p, 8 V_{0}, T$; a hélium kezdeti adatai $p_{1}=10^{5} \mathrm{~Pa}, V_{1}, T_{1}=300 \mathrm{~K}$, végállapotbeli adatai $2 p_{1}=2 \cdot 10^{5} \mathrm{~Pa}, V_{1} / 2, T_{1}=300 \mathrm{~K}$.

A hélium izoterm állapotváltozás során hốt ad le az azt körülvevő hốtartálynak. Az első főtétel alapján a leadott hő abszolút értéke
\[
Q=-W_{\text {tág }}^{\mathrm{He}},
\]
ahol $W_{\text {tág }}^{\mathrm{He}}<0$ a hélium által végzett tágulási munka, ami izoterm folyamat esetén
\[
W_{\text {tág }}^{\mathrm{He}}=n_{\mathrm{He}} R T_{1} \ln \frac{1}{2}=p_{1} V_{1} \ln \frac{1}{2} .
\]
Tehát ebből a két egyenletből:
\[
Q=p_{1} V_{1} \ln 2,
\]
ahonnan a hélium kezdeti térfogata $V_{1}=Q /\left(p_{1} \ln 2\right)=650$ liter, a kísérlet végén pedig ennek a fele, 325 liter. Tehát a héliumról már mindent tudunk.

Az argonra alkalmazzuk a $p V^{\kappa}=$ konst. adiabatikus törvényt:
\[
p_{0} V_{0}^{\kappa}=p\left(8 V_{0}\right)^{\kappa} .
\]
Vagyis $p_{0} / p=8^{5 / 3}=32$. (Egyatomos gázoknál $\kappa=5 / 3$.) Az argon végső nyomása az egyensúly beálltakor annyi, mint a hélium végső nyomása, vagyis $p=2 \cdot 10^{5} \mathrm{~Pa}$. Kezdeti nyomása $p_{0}=32 p=6,4 \cdot 10^{6} \mathrm{~Pa}$. (Látható, hogy a dugattyúrendszer két oldalán jelentős nyomáskülönbség van, nem mozoghat lassan.)

A két gáz térfogatváltozása egyenlő. Az argon térfogatnövekedése $8 V_{0}-V_{0}=$ $=7 V_{0}$. A hélium térfogatvesztesége 325 liter, tehát $7 V_{0}=325$ liter, azaz $V_{0} \approx$ $\approx 46$ liter. Az argon végső térfogata $8 V_{0} \approx 370$ liter.

Hátravan még az argon kezdeti és véghőmérséklete. Az adiabatikus változás törvénye $T V^{\kappa-1}=$ konst. alakban is ismeretes. A mi esetünkben:
\[
T_{0} V_{0}^{2 / 3}=T\left(8 V_{0}\right)^{2 / 3}, \text { vagyis } T_{0} / T=8^{2 / 3}=4 .
\]
Felhasználva, hogy $p_{0} V_{0}=n_{\mathrm{Ar}} R T_{0}$, ahol $n_{\mathrm{Ar}}=3 \mathrm{~mol}$, a kezdeti hőmérséklet $T_{0}=p_{0} V_{0} /\left(n_{\mathrm{Ar}} R\right) \approx 12000 \mathrm{~K}$, ami földi körülmények között irreálisan magas (a Nap felszíni hőmérsékletének készerese). Ebből az argon végső hőmérséklete $T \approx 3000 \mathrm{~K}$.

Az ellentmondás akkor merül fel, ha további energetikai megfontolásokat teszünk. Az argon folyamata esetén az elsó fótétel:
\[
\Delta E=-W_{\mathrm{tãg}}^{\mathrm{Ar}},
\]
ahol $W_{\text {tág }}^{\mathrm{Ar}}>0$ az argon által végzett tágulási munka. Egyszerúbb a belsőenergiaváltozást meghatározni:
\[
\Delta E=\frac{3}{2}\left(2 p_{1} \cdot 8 V_{0}-p_{0} V_{0}\right) \approx-330 \mathrm{~kJ}
\]

Viszont, ha a dugattyúrendszer lassan mozog, akkor alkalmazva rá a munkatételt:
\[
W_{\text {tág }}^{\mathrm{Ar}}+W_{\text {tág }}^{\mathrm{He}}=0,
\]
beírva a tágulási munkákat az elsó fótételből:
\[
\Delta E=-Q
\]
feltételnek kell teljesülni, de nem teljesül, mert $330 \mathrm{~kJ} \neq 45 \mathrm{~kJ}$. A probléma a munkatétellel van, mert az egyenlet jobb oldala egyensúlyi helyzetben nem nulla, hiszen a dugattyú ekkor éri el a maximális sebességét a rezgése során. Helyesen:
\[
W_{\text {tág }}^{\mathrm{Ar}}+W_{\text {tág }}^{\mathrm{He}}=\frac{1}{2} M v^{2},
\]
ahol $M$ a dugattyúrendszer tömege, $v$ pedig a sebessége. Tehát esetünkben:
\[
\frac{1}{2} M v^{2}=330-45=285 \mathrm{~kJ} .
\]

Ha viszont a dugattyú egyensúlyi helyzetében megáll, akkor az oszcilláció is abbamarad, tehát veszteségnek (súrlódás) kell lennie a rendszerben, ami csillapítja a rezgést. Ekkor viszont a gázok folyamatai nem reverzibilisek: nem alkalmazható az adiabatikus folyamatra érvényes $p V^{\kappa}=$ konst. egyenlet, és a tágulási munkát sem tudjuk az izoterm folyamatra érvényes formulával meghatározni. Ami viszont most is érvényes, az első főtétel és a munkatétel A súrlódás irreverzibilis járulékokat ad a tágulási munkákba, a belsőenergia-változásba és a hőmennyiségbe. Argon esetén:
\[
W_{\text {tág }}^{\mathrm{Ar}}=\frac{3}{2}\left(p_{0} V_{0}-16 p_{1} V_{0}\right),
\]
a munkatétel:
\[
W_{\text {tág }}^{\mathrm{Ar}}+W_{\text {tág }}^{\mathrm{He}}=0,
\]
hiszen a dugattyú most megáll, és a héliumra:
\[
Q=-W_{\text {tág }}^{\mathrm{He}},
\]
ahol $Q$ most is a feladatban megadott hőmennyiség. Ezekből az egyenletekből kapjuk, hogy
\[
\frac{3}{2}\left(p_{0}-16 p_{1}\right) V_{0}=Q
\]
Azonban továbblépni nem tudunk, hiszen az egyenlet két ismeretlent tartalmaz ( $p_{0}$ és $V_{0}$ ), és az állapotjelzők között más, alkalmas egyenletet nem tudunk felírni.

Tegyük fel, hogy ismerjük az argongáz kezdeti nyomását, ami legyen a korábban kiszámolt: $p_{0}=6,4 \cdot 10^{6} \mathrm{~Pa}$. Ekkor az argon kezdeti térfogata $V_{0}=6,25$ liter, kezdeti hőmérséklete $T_{0}=p_{0} V_{0} /\left(n_{\mathrm{Ar}} R\right) \approx 1600 \mathrm{~K}$. A folyamat végén az argon nyomása azonos a hélium $p=2 p_{1}=2 \cdot 10^{5} \mathrm{~Pa}$ nyomásával (habár a hélium sem reverzibilis folyamaton megy keresztül, az állapotegyenlet érvényessége miatt fennáll formálisan a Boyle-Mariotte-törvény), a térfogata $8 V_{0}=50$ liter, és az állapotegyenletből $T \approx 400 \mathrm{~K}$. Hélium esetén csak a térfogatokat nem ismerjük. A két gáz térfogatváltozásának azonossága miatt: $7 V_{0}=V_{1} / 2$, ahonnan $V_{0}$ ismeretével $V_{1}=87,5$ liter, a végállapotbeli térfogat pedig ennek a fele.

Az eredeti feladatban kérdezték azt is, mi történik, ha a kísérlet után a két gázt összeeresztjük (pl. a dugattyúrendszeren keresztül csap kinyitásával). Az eredmény könnyen kiszámítható: a hőmérséklet 300 K lesz mindenütt a hőtartály jelenléte miatt, a nyomás pedig az anyagmennyiségek és az össztérfogat ismeretében meghatározható. Továbbá az eredeti szöveg az adiabatikus változás törvényének kinetikus levezetését is elvárta. A kinetikus gázelméletben látott levezetéshez képest most annyi a különbség, hogy a tartály fala az atomok sebességénél sokkal kisebb sebességgel (adiabatikusan) mozog.

Legyen a fal sebessége $u$, a felé közeledő atom sebessége $v$. A fal koordinátarendszerében az atom $v-u$ sebességgel közeledik, arról visszapattanva sebessége
csak irányt vált, nagysága marad $v-u$. Visszatérve a talaj rendszerébe, az atom visszapattanás utáni sebessége $v-2 u$.

A tartály mozgó, $A$ felszínú fala felé az atomok hatoda halad. Kicsiny $\Delta t$ idő alatt a $v \Delta t A$ térfogatban lévó atomok száma, amelyek ütköznek a mozgó fallal:
\[
N^{\prime}=\frac{1}{6} N \frac{v \Delta t A}{V},
\]
ahol $N$ a tartály $V$ térfogatában lévő atomok száma. Ennyi atom mozgási energiájának megváltozása az ütközés során:
\[
\Delta E=N^{\prime} \cdot\left[\frac{1}{2} m(v-2 u)^{2}-\frac{1}{2} m v^{2}\right] \approx-2 m v u \cdot \frac{1}{6} \frac{N}{V} v \Delta t A,
\]
ahol $m$ egy atom tömege, és az $u^{2}$-es tagot elhanyagoltuk $(u \ll v)$. Felhasználva, hogy ezen atomok ütközése alatt a térfogatváltozás $\Delta V=u \Delta t A$, az energiaváltozás:
\[
\Delta E=-\frac{1}{3} \frac{N}{V} m v^{2} \Delta V .
\]
A tartályban lévő atomok teljes mozgási energiája adja a gáz belső energiáját:
\[
E=\frac{1}{2} N m v^{2} .
\]
Ezzel:
\[
\Delta E=-\frac{1}{3} \frac{2 E}{V} \Delta V \rightarrow \frac{\Delta E}{E}=-\frac{2}{3} \frac{\Delta V}{V} \rightarrow E V^{2 / 3}=\text { állandó. }
\]
Tudjuk, hogy a teljes mozgási energia arányos a hőmérséklettel, így megkapjuk a folyamat egyenletét:
\[
T V^{2 / 3}=\text { állandó. }
\]
