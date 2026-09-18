---
id: ipho-book-1969-q2
problem: ipho-book-1969-q2
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

Ha a jeget bedobtuk a kaloriméter vizébe, akkor az egyensúly beállta után háromféle végállapothoz juthatunk: (i) csak jég, (ii) csak víz, (iii) jég és víz van a kaloriméterben. Mindegyik esettel külön foglalkozunk.
(i) A jég valamilyen $t<0{ }^{\circ} \mathrm{C}$ hőmérsékletre melegszik fel, amihez $c_{3} m_{3}\left(t-t_{3}\right)$ energia kell. Ezt a lehúlő kaloriméter és a víz fagyáshője adja:
\[
c_{3} m_{3}\left(t-t_{3}\right)=c_{1} m_{1}\left(t_{12}-t\right)+c_{2} m_{2} t_{12}+m_{2} L-c_{3} m_{2} t .
\]
Innen az egyensúlyi hőmérséklet:
\[
t=\frac{\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}+c_{3} m_{3} t_{3}+m_{2} L}{c_{1} m_{1}+c_{3} m_{2}+c_{3} m_{3}} .
\]
De ez a képlet csak addig használható, amíg $t$ negatívnak adódik. Eszerint az $(i)$ eset bekövetkezésének feltétele:
\[
\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}+c_{3} m_{3} t_{3}+m_{2} L<0,
\]
illetőleg:
\[
\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}<-c_{3} m_{3} t_{3}-m_{2} L .
\]
( $t_{3}$ értéke mindig negatív.)
(ii) Átugorva a közbeeső lehetőséget, most azt vizsgáljuk meg, ha az adatok olyanok, hogy az egyensúlyi hőmérséklet pozitív, a kaloriméterben végül csak víz van. A jég két lépésben történő felmelegítéséhez és megolvasztásához szükséges hőmennyiséget a lehúlő kaloriméter adja:
\[
-c_{3} m_{3} t_{3}+m_{3} L+m_{3} t=\left(c_{1} m_{1}+c_{2} m_{2}\right)\left(t_{12}-t\right) .
\]
Innen az egyensúlyi hőmérséklet:
\[
t=\frac{\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}+c_{3} m_{3} t_{3}-m_{3} L}{c_{1} m_{1}+c_{2} m_{2}+m_{3}} .
\]
Ez a képlet csak akkor érvényes, ha $t$ pozitívnak adódik, aminek feltétele:
\[
-c_{3} m_{3} t_{3}+m_{3} L<\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12} .
\]
(iii) Most foglalkozunk azzal a középső esettel, amikor a beálló egyensúlyállapotban víz és jég egymás mellett van a kaloriméterben. Ekkor biztosan $t=$ $=0{ }^{\circ} \mathrm{C}$. A (69-2) és a (69-4) egybevetésével rögtön látszik, hogy ennek az esetnek a feltétele:
\[
-c_{3} m_{3} t_{3}+m_{3} L<\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}<-c_{3} m_{3} t_{3}-m_{2} L .
\]
(Azt is megfigyelhetjük, hogy azokban a határesetekben, amikor (69-2)-ben és (69-4)-ben egyenlőségjelet írunk, (69-1) és (69-3) $t$ számára 0 °C-ot ad.) Ebben az esetben arra vagyunk kíváncsiak, mennyi jég és víz lesz a kaloriméterben. A lehúlő kaloriméter $\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}$ hómennyiséget ad le. Lehet, hogy ebből a jég 0 °C-ra való felmelegítésén kívül még $m_{x}$ gramm jég megolvasztására is jut:
\[
\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}=-c_{3} m_{3} t_{3}+m_{x} L
\]
és így a megolvasztott jég mennyisége:
\[
m_{x}=\frac{\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}+c_{3} m_{3} t_{3}}{L} .
\]
De az is lehetséges, hogy a vízből $m_{y}$ gramm hozzáfagy a jéghez, és csak így képes a közös 0 °C létrejönni:
\[
\begin{aligned}
& \left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}+m_{y} L=-c_{3} m_{3} t_{3}, \\
& m_{y}=\frac{-\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}-c_{3} m_{3} t_{3}}{L} .
\end{aligned}
\]
A kaloriméterben végül is megtalálható víz mennyiségére mindegyik esetben egyformán ugyanaz a képlet következik:
\[
m_{\mathrm{v}}=m_{2}+m_{x}=m_{2}-m_{y}=m_{2}+\frac{\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}+c_{3} m_{3} t_{3}}{L} .
\]
Tehát aszerint, hogy $\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}$ nagyobb, kisebb $c_{3} m_{3} t_{3}$ abszolút értékénél, vagy egyenlő vele, aszerint rendre a jég egy része megolvad, a víz egy része megfagy, vagy a mennyiségük az eredeti marad. A jég végső mennyisége $m_{\mathrm{j}}=m_{2}+m_{3}-m_{\mathrm{v}}$.

Feladatunk számadatai mellett $\left(c_{1} m_{1}+c_{2} m_{2}\right) t_{12}=42 \mathrm{~kJ}, c_{3} m_{3} t_{3}=-84 \mathrm{~kJ}$, $-c_{3} m_{3} t_{3}+m_{3} L=584 \mathrm{~kJ},-c_{3} m_{3} t_{3}-m_{2} L=-250 \mathrm{~kJ}$, tehát (69-5) szerint a (iii) esetről van szó, a hómérséklet $t=0^{\circ} \mathrm{C}, m_{\mathrm{v}}=0,89 \mathrm{~kg}, m_{\mathrm{j}}=2,11 \mathrm{~kg}$, vagyis a víz egy része megfagy.
