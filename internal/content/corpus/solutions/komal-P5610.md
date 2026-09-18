---
id: komal-P5610
source: komal
language: hu
translated: false
problem: komal-P5610
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A feladat megoldásához Kepler törvényeit kell alkalmaznunk.
 1. Az Eros ellipszis pályán kering, az ellipszis adatai pedig a perihélium és az aphélium (a Nap-közeli és Nap-távoli helyzet) $r_\mathrm{p}$ és $r_\mathrm{a}$ távolságával kifejezhetők:
$$\begin{gather*}
 a=\frac{r_\mathrm{a}+r_\mathrm{p}}{2}=1{,}46\,\mathrm{CSE},\\
 c=\frac{r_\mathrm{a}-r_\mathrm{p}}{2}=0{,}325\,\mathrm{CSE},\\
 b=\sqrt{a^2-c^2}=\sqrt{r_\mathrm{a}r_\mathrm{p}}=1{,}42\,\mathrm{CSE}.
\end{gather*}$$
 2. A kisbolygó mindig akkora sebességgel halad, hogy a területi sebesség állandó legyen. A két szélső helyzetben a sebesség pont merőleges a vezérsugárra, tehát a megfelelő $v_\mathrm{p}$ és $v_\mathrm{a}$ sebességekre igaz, hogy
 $\frac{r_\mathrm{p}v_\mathrm{p}}{2}=\frac{r_\mathrm{a}v_\mathrm{a}}{2}=\frac{A}{T},$
 ahol $A$ a pálya ellipszisének a területe:
 $A=ab\pi=\frac{r_\mathrm{a}+r_\mathrm{p}}{2}\sqrt{r_\mathrm{a}r_\mathrm{p}}\pi,$
 és $T$ az Eros keringési ideje. Ennek megfelelően
$$\begin{gather*}
 v_\mathrm{p}=\frac{\pi(r_\mathrm{a}+r_\mathrm{p})}{T}\sqrt\frac{r_\mathrm{a}}{r_\mathrm{p}},\\
 v_\mathrm{a}=\frac{\pi(r_\mathrm{a}+r_\mathrm{p})}{T}\sqrt\frac{r_\mathrm{p}}{r_\mathrm{a}}.
\end{gather*}$$
 3. A Naprendszerben az
 $\frac{a^3}{T^2}=C$
 érték minden bolygóra nézve ugyanakkora. A Föld adatai alapján $C=1\,\mathrm{CSE^3}/\textrm{év}\mathrm{^2}$, amiből az Eros keringési ideje $T=1{,}76\,\textrm{év}$. Az adatokat behelyettesítve ($1\,\mathrm{CSE}=1{,}496\cdot 10^8\,\mathrm{km}$ és $1\,\textrm{év}=365{,}24\cdot 24\cdot 3600=3{,}156\cdot 10^7\,\mathrm{s}$ értékkel számolva):
$$\begin{gather*}
 v_\mathrm{max}=v_\mathrm{p}=6{,}54\,\mathrm{CSE/év}=31{,}0\,\mathrm{km/s},\\
 v_\mathrm{min}=v_\mathrm{a}=4{,}15\,\mathrm{CSE/év}=19{,}7\,\mathrm{km/s}.
\end{gather*}$$
