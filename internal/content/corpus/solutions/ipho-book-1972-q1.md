---
id: ipho-book-1972-q1
problem: ipho-book-1972-q1
source: ipho
language: hu
solution_language: hu
solution_type: official
source_pdf: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf"
figure_files: []
provenance_note: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf; Mathpix OCR"
verification_status: pending
---

## Megoldás 1

Az $R$ sugarú henger $m g$ súlyából eredő $m g \cos \alpha$ merőleges nyomóerőt ellensúlyozza a lejtő anyagának rugalmas ereje. Az érintkezési ponton $S$
súrlódási erő hat. A henger gyorsulását okozó erő:
\[
m a=m g \cdot \sin \alpha-S .
\]
A hengert az $S R$ forgatónyomaték $\beta=a / R$ szöggyorsulással forgatja. $\Theta$ tehetetlenségi nyomaték mellett:
\[
\frac{a}{R}=\frac{R S}{\Theta} .
\]
Az egyenletrendszer megoldása adja a gyorsulást és a súrlódási erốt:
\[
\begin{aligned}
a & =g \sin \alpha \cdot \frac{1}{1+\Theta / m R^{2}}, \\
S & =m g \sin \alpha \cdot \frac{\Theta / m R^{2}}{1+\Theta / m R^{2}} .
\end{aligned}
\]

Mindez csak tisztán gördülés esetén érvényes. A súrlódási erő lehetséges legnagyobb értéke $\mu m g \cos \alpha$. Így határesetben:
\[
\mu m g \cos \alpha_{\mathrm{h}}=m g \sin \alpha_{\mathrm{h}} \cdot \frac{\Theta / m R^{2}}{1+\Theta / m R^{2}}
\]
Ahonnan a határeset feltétele:
\[
\operatorname{tg} \alpha_{\mathrm{h}}=\mu\left(1+\mathrm{mR}^{2} / \Theta\right) .
\]

Ha ezt a határt túllépjük, a forgás szöggyorsulása $(S=\mu m g \cos \alpha)$ :
\[
\beta=\frac{\mu m g \cos \alpha R}{\Theta},
\]
a henger középpontjának gyorsulása ekkor:
\[
a=g \sin \alpha(1-\mu / \operatorname{tg} \alpha) .
\]

1-es henger. Az $\varrho$ súrúségú, $L$ hosszúságú, tömör henger esetében a tömeg $m=\varrho \pi R^{2} L$, a tehetetlenségi nyomatéka $\Theta=1 / 2 m R^{2}$. Tisztán gördülés esetén a gyorsulás (72-1)-ből következően:
\[
a_{1}=\frac{2 g \sin \alpha}{3},
\]
a csúszva gördülés határesete (72-2)-ből:
\[
\operatorname{tg} \alpha_{\mathrm{h} 1}=3 \mu,
\]
csúszva gördüléskor a szöggyorsulás (72-3)-ból:
\[
\beta_{1}=2 \mu g \cos \alpha / R .
\]

2-es henger. A cső esetében a fal tömege egyenló az előbbi $m$-mel. A belső üreg $r$ sugarát a súrúségek $n$ hányadosából számítjuk ki, $\varrho \pi R^{2} L=n \varrho \pi L\left(R^{2}-r^{2}\right)$, innen:
\[
r^{2}=R^{2} \cdot \frac{n-1}{n} .
\]

A tehetetlenségi nyomaték ennek figyelembevételével ( $n \varrho$ sürúségú, $R$ sugarú, tömör hengerből levonva az ne súrúségú, $r$ sugarú, tömör hengert):
\[
\begin{array}{r}
\Theta_{2}=\frac{1}{2} n \varrho L \pi R^{2} \cdot R^{2}-\frac{1}{2} n \varrho L \pi r^{2} \cdot r^{2}=\frac{1}{2} n \varrho L \pi\left(R^{4}-r^{4}\right)= \\
=\frac{1}{2} n \varrho L \pi\left[R^{4}-R^{4} \cdot \frac{(n-1)^{2}}{n^{2}}\right]=\frac{1}{2} m R^{2} \cdot \frac{2 n-1}{n} .
\end{array}
\]

A gyorsulás tiszta gördülésnél (72-1) felhasználásával:
\[
a_{2}=g \sin \alpha \cdot \frac{2 n}{4 n-1},
\]
a határszög (72-2)-ből:
\[
\operatorname{tg} \alpha_{\mathrm{h} 2}=\mu \cdot \frac{4 \mathrm{n}-1}{2 \mathrm{n}-1},
\]
a forgás szöggyorsulása csúszva gördülés esetén (72-3)-ból:
\[
\beta_{2}=\frac{2 \mu g \cos \alpha}{R} \cdot \frac{n}{2 n-1} .
\]

3-as henger. A folyadékkal telt henger esetében a belső rész nem forog, hiszen súrlódási erő hiányában a folyadék és a fal közötti erő merőleges a falra, így nincs forgatónyomaték, amely a folyadékot forgatná. Az $m$ helyébe az előbbi $m$ teljes tömeget kell tennünk, de a tehetetlenségi nyomatékot csak a csó falára nézve kell számítanunk:
\[
\Theta_{3}=\frac{1}{2} \varrho L \pi R^{2} \cdot R^{2}-\frac{1}{2} \varrho L \pi r^{2} \cdot r^{2}=\frac{1}{2} m R^{2} \cdot \frac{2 n-1}{n^{2}} .
\]

A gyorsulás (72-1)-ből:
\[
a_{3}=g \sin \alpha \cdot \frac{2 n^{2}}{2 n^{2}+2 n-1},
\]
a határszög (72-2)-ből:
\[
\operatorname{tg} \alpha_{\mathrm{h} 3}=\mu \cdot \frac{2 \mathrm{n}^{2}+2 \mathrm{n}-1}{2 \mathrm{n}-1},
\]
a fal forgásának a szöggyorsulása (72-3)-ból:
\[
\beta_{3}=\frac{2 \mu g \cos \alpha}{R} \cdot \frac{n^{2}}{2 n-1} .
\]

Következnek az összehasonlítások. A gyorsulások aránya:
\[
a_{1}: a_{2}: a_{3}=\frac{1}{3}: \frac{1}{4 n-1}: \frac{n^{2}}{2 n^{2}+2 n-1} .
\]

A határszögek tangenseinek aránya:
\[
\operatorname{tg} \alpha_{\mathrm{h} 1}: \operatorname{tg} \alpha_{\mathrm{h} 2}: \operatorname{tg} \alpha_{\mathrm{h} 3}=3: \frac{4 \mathrm{n}-1}{2 \mathrm{n}-1}: \frac{2 \mathrm{n}^{2}+2 \mathrm{n}-1}{2 \mathrm{n}-1} .
\]

A szöggyorsulások aránya csúszás esetén:
\[
\beta_{1}: \beta_{2}: \beta_{3}=1: \frac{n}{2 n-1}: \frac{n^{2}}{2 n-1} .
\]

Csúszva gördülés esetében mindegyik henger lineáris gyorsulása egyformán a (72-4) szerinti érték.

Érdemes megvizsgálni $r, a, \operatorname{tg} \alpha_{\mathrm{h}}, \beta$ értékeinek változását, ha $n 1$-től végtelenig növekszik.
