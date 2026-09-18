---
id: ipho-book-1982-q3
problem: ipho-book-1982-q3
source: ipho
language: hu
solution_language: hu
solution_type: official
source_pdf: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf"
figure_files: []
provenance_note: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf; Mathpix OCR"
verification_status: pending
---

## Megoldás 3

a) Elóször kiszámítjuk a ballonban lévó levegő $\varrho_{2}$ sürúségét lebegéskor. A lebegés feltétele:
\[
\varrho_{2} V_{\mathrm{b}} g+m_{\mathrm{h}} g=\varrho_{1} V_{\mathrm{b}} g .
\]
Innen:
\[
\varrho_{2}=\varrho_{1}-\frac{m_{\mathrm{h}}}{V_{\mathrm{b}}}=1,03 \mathrm{~kg} / \mathrm{m}^{3} .
\]

A ballonban lévő levegő nyomása a melegítés után is $p_{0}$, hiszen a külső légnyomás nem változik és a ballon alul nyitott ( $M$ a levegő moláris tömege):
\[
\begin{aligned}
& p_{0} V_{\mathrm{b}}=\frac{m_{1}}{M} R T_{1}, \\
& p_{0} V_{\mathrm{b}}=\frac{m_{2}}{M} R T_{2} .
\end{aligned}
\]
Mivel $m_{1}=\varrho_{1} V_{\mathrm{b}}$ és $m_{2}=\varrho_{2} V_{\mathrm{b}}$, így a fenti két állapotegyenletből:
\[
\varrho_{1} T_{1}=\varrho_{2} T_{2} .
\]
Innen $T_{2}=341 \mathrm{~K}=68^{\circ} \mathrm{C}$.
b) A kötelet feszítő $F_{\mathrm{k}}$ eró az $F_{\mathrm{f}}$ felhajtóeró és a léggömb $G$ súlyának különbsége:
\[
F_{\mathrm{k}}=F_{\mathrm{f}}-G=\varrho_{1} V_{\mathrm{b}} g-\left(m_{\mathrm{h}} g+\varrho_{3} V_{\mathrm{b}} g\right)=\left[\left(\varrho_{1}-\varrho_{3}\right) V_{\mathrm{b}}-m_{\mathrm{h}}\right] g .
\]
Az a) részben talált $\varrho T=$ állandó egyenlet most igaz:
\[
\varrho_{3}=\varrho_{1} \frac{T_{1}}{T_{3}}=0,92 \mathrm{~kg} / \mathrm{m}^{3} .
\]
Ezzel a kötélerő $F_{\mathrm{k}}=1,2 \mathrm{~N}$.
c) A ballon addig emelkedik, amíg a súlya egyenlő nem lesz a felhajtóerővel:
\[
\varrho_{3} V_{\mathrm{b}}+m_{\mathrm{h}}=\varrho(h) V_{\mathrm{b}},
\]
ahol $\varrho(h)$ a külső levegő súrúsége $h$ magasságban. Ebből
\[
\varrho(h)=\varrho_{3}+\frac{m_{\mathrm{h}}}{V_{\mathrm{b}}}=1,09 \mathrm{~kg} / \mathrm{m}^{3} .
\]

A barometrikus magasságformula:
\[
\varrho(h)=\varrho_{1} \mathrm{e}^{-\frac{M g h}{R T_{1}}} .
\]
Mivel $M=\varrho_{1} R T_{1} / p_{0}$, ezért
\[
\varrho(h)=\varrho_{1} \mathrm{e}^{-\frac{\varrho_{1} g h}{p_{0}}} .
\]

Ebből
\[
h=-\frac{p_{0}}{\varrho_{1} g} \ln \frac{\varrho(h)}{\varrho_{1}}=843 \mathrm{~m} .
\]
d) Ha felfelé mozdítjuk a ballont, akkor a felhajtőerő csökken, a lefelé irányuló eró állandó, tehát visszaindul az egyensúlyi helyzet felé. Ha lefelé mozdítjuk, akkor a felhajtóerő növekszik, ismét visszamegy a ballon az egyensúlyi helyzetbe. Tegyük fel, hogy a a ballont felfelé mozdítjuk $\Delta h$-val. Ekkor a visszatérítő erő:
\[
\begin{aligned}
F=\varrho_{3} V_{\mathrm{b}} g+m_{\mathrm{h}} g-\varrho(h+\Delta h) V_{\mathrm{b}} g & =\varrho_{3} V_{\mathrm{b}} g+m_{\mathrm{h}} g-\varrho_{1} \mathrm{e}^{-\frac{\varrho_{1} g(h+\Delta h)}{p_{0}}} V_{\mathrm{b}} g= \\
& =\varrho_{3} V_{\mathrm{b}} g+m_{\mathrm{h}} g-\varrho_{1} \mathrm{e}^{-\frac{\varrho_{1} g(h)}{p_{0}}} V_{\mathrm{b}} g \cdot \mathrm{e}^{-\frac{\varrho_{1} g(\Delta h)}{p_{0}}} .
\end{aligned}
\]
Mivel $\Delta h$ kicsi, ezért felhasználhatjuk, hogy $\mathrm{e}^{x} \approx 1+x$. Továbbá $h$ az egyensúlyi helyzethez tartozó magasság, ezért:
\[
F=\left(\varrho_{3} V_{\mathrm{b}} g+m_{\mathrm{h}} g\right) \frac{\varrho_{1} g}{p_{0}} \Delta h,
\]
vagyis a visszatérítő erő arányos a kitéréssel. Ennek hatására a ballon harmonikus rezgőmozgást végez.

A hőlégballon mozgását erősen akadályozza a levegő közegellenállása, ezért a rezgőmozgás csillapított.

\title{
