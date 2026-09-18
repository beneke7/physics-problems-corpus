---
id: ipho-book-2005-q1
problem: ipho-book-2005-q1
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

1.1. és 1.2. A Föld felszínén lévő testre ható nehézségi erő (a Föld forgását elhanyagolva):
\[
m g=G \frac{M m}{R_{\mathrm{F}}^{2}} \rightarrow G M=g R_{\mathrm{F}}^{2} .
\]
A körpályán mozgó testre felírva Newton II. törvényét:
\[
G \frac{M m}{r_{0}^{2}}=m \frac{v_{0}^{2}}{r_{0}},
\]
ahol $v_{0}=\frac{2 \pi r_{0}}{T_{0}}$. Ezekből az egyenletekből megkapjuk a geostacinárius múhold adatait:
\[
r_{0}=\sqrt[3]{\frac{g R_{\mathrm{F}}^{2} T_{0}^{2}}{4 \pi^{2}}}=4,22 \cdot 10^{7} \mathrm{~m} \quad \text { és } \quad v_{0}=R_{\mathrm{F}} \sqrt{\frac{g}{r_{0}}}=3,07 \cdot 10^{3} \frac{\mathrm{~m}}{\mathrm{~s}} .
\]
1.3. A perdület definíciója alapján
\[
L_{0}=m v_{0} r_{0}=\frac{m g R_{F}^{2}}{v_{0}} .
\]
A teljes mechanikai energia a mozgási energia és a (negatív) helyzeti energia összege:
\[
E_{0}=\frac{1}{2} m v_{0}^{2}-G \frac{M m}{r_{0}}=-\frac{1}{2} m v_{0}^{2} .
\]
XXXVI. olimpia, 2005
2.1. Felhasználva, hogy a perdület a Föld középpontja felé mutató lökés hatására nem változik meg, a megadott összefüggésbe behelyettesítve:
\[
\ell=\frac{L_{0}^{2}}{G M m^{2}}=\frac{m^{2} g^{2} R_{F}^{4}}{v_{0}^{2}} \frac{1}{g R_{F}^{2} m^{2}}=\frac{g R_{F}^{2}}{v_{0}^{2}}=r_{0} .
\]
A mechanikai energia új értéke
\[
E=\frac{1}{2} m\left(v_{0}^{2}+\Delta v^{2}\right)-G \frac{M m}{r_{0}}=\frac{1}{2} m \Delta v^{2}-\frac{1}{2} m v_{0}^{2}=\frac{1}{2} m v_{0}^{2}\left(\beta^{2}-1\right),
\]
ezt behelyettesítve $\varepsilon$ kifejezésébe és rendezve:
\[
\varepsilon=\sqrt{1+\frac{2 E L_{0}^{2}}{G^{2} M^{2} m^{3}}}=\beta .
\]
Mivel $\varepsilon=\beta<1$, a pálya ellipszis.
2.2. Az eredeti körpálya és az ellipszispálya a pályamódosítás pontjában metszi egymást. Ebből $r(\theta=\alpha)=r_{0}=\frac{r_{0}}{1-\varepsilon \cos \alpha}$, amiból $\alpha=90^{\circ}$.
2.3. A maximális távolság esetén $\theta=0$, azaz
\[
r_{\max }=\frac{\ell}{1-\varepsilon}=\frac{r_{0}}{1-\beta}=5,63 \cdot 10^{7} \mathrm{~m} .
\]
Minimális távolság esetén pedig $\theta=180^{\circ}$, tehát
\[
r_{\min }=\frac{\ell}{1+\varepsilon}=\frac{r_{0}}{1+\beta}=3,38 \cdot 10^{7} \mathrm{~m} .
\]
2.4. Az ellipszispálya fél nagytengelye
\[
a=\frac{r_{\min }+r_{\max }}{2}=\frac{r_{0}}{1-\beta^{2}} .
\]

Kepler III. törvénye szerint
\[
\frac{T^{2}}{a^{3}}=\frac{T_{0}^{2}}{r_{0}^{3}} \rightarrow T=T_{0}\left(1-\beta^{2}\right)^{-3 / 2}=T_{0}\left(\frac{15}{16}\right)^{-3 / 2}=26,4 \mathrm{~h} .
\]
3.1. Parabolapályánál $\varepsilon=1$, ebből $\beta_{\mathrm{esc}}=1$.

Ezt az eredményt úgy is megkaphatjuk, ha kihasználjuk, hogy parabolapályára áttérve a múhold teljes energiája zérus (végtelenben a sebessége is nulla):
\[
E=\frac{1}{2} m v_{0}^{2}\left(\beta^{2}-1\right)=0 \rightarrow \beta_{\mathrm{esc}}=1 .
\]
3.2. A feladatban megadott polárkoordinátás egyenlettel:
\[
r_{\min }^{\prime}=\frac{r_{0}}{1+\beta}=\frac{r_{0}}{2} .
\]

Az energia- és perdületmegmaradás is ugyanezt az eredményt adja. Földközelben a helyvektor meróleges a sebsségvektorra és a sebesség maximális.
\[
\begin{gathered}
0=\frac{1}{2} m v_{\max }^{2}-\frac{G m M}{r_{\min }^{\prime}} \\
m v_{0} r_{0}=m v_{\max } r_{\min }^{\prime}
\end{gathered}
\]
Ezekből felhasználva, hogy $v_{0}^{2}=G M / r_{0}$ :
\[
r_{\min }^{\prime}=\frac{v_{0}^{2} r_{0}^{2}}{2 G M}=\frac{r_{0}}{2} .
\]
4.1. Az energiamegmaradásból
\[
E=\frac{1}{2} m v_{0}^{2}\left(\beta^{2}-1\right)=\frac{1}{2} m v_{\infty}^{2},
\]
amiből $v_{\infty}=v_{0} \sqrt{\beta^{2}-1}$.
4.2. A perdületmegmaradásból
\[
m v_{0} r_{0}=m v_{\infty} b \rightarrow b=\frac{r_{0}}{\sqrt{\beta^{2}-1}} .
\]
4.3. Ha $r \rightarrow \infty$, akkor az ehhez tartozó $\theta_{\infty}$ szög:
\[
1-\varepsilon \cos \theta_{\infty}=0 \rightarrow \theta_{\infty}=\arccos \left(\frac{1}{\beta}\right) .
\]
A kérdéses szög pedig:
\[
\phi=\frac{\pi}{2}+\theta_{\infty}=\frac{\pi}{2}+\arccos \left(\frac{1}{\beta}\right)=138^{\circ} .
\]
