---
id: komal-P4863
source: komal
language: hu
translated: false
problem: komal-P4863
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a gömb sugarát $R$-rel, felületi töltéssűrűségét $\eta$-val, fordulatszámát pedig $f$-fel! A gömb töltése eszerint $Q=4R^2\pi\eta$.
 Vágjuk fel – gondolatban – a gömböt a forgástengelyére merőlegesen igen keskeny, $\Delta z$ ,,magasságú'' gömbövekre, amelyeknek esetenként változó sugara $r$. Egy-egy ilyen gömböv felülete $2R\pi\, \Delta z$ (vagyis minden szelet felülete ugyanakkora), a töltése tehát
 $\Delta Q=\frac{2R\pi\, \Delta z}{4R^2\pi}\,Q=\frac{Q}{2R}\,\Delta z.$
 A forgó ($\Delta t=1/f$ időközönként körbeforduló) gömbövek töltése köráramokat hoz létre, amelyek áramerőssége:
 $\Delta I=\frac{\Delta Q}{\Delta t}=f\Delta Q = \frac{Qf}{2R}\cdot \Delta z.$
 Ezek a köráramok (a Biot–Savart-törvény szerint) a gömb középpontjában a forgástengellyel megegyező irányú,
 $\Delta B=\frac{\mu_0\Delta I}{2}\cdot \frac{r^2}{R^3}\, \Delta z$
 nagyságú mágneses indukciót eredményeznek. Az egész gömb mágneses indukciója a gömb középpontjában:
 $B=\sum \Delta B=\frac{\mu_0 Qf}{4\pi R^4} \cdot \left(\sum r^2\pi\,\Delta z\right).
$
 A fenti képlet jobb oldalán a zárójelben álló szumma éppen a gömb $\tfrac43 R^3\pi$ térfogata, így a keresett mágneses indukció:
 $B= \mu_0 f \frac{ 4R^2\pi\eta }{4\pi R^4} \,\frac{4R^3\pi}{3}=\frac{4\pi}{3 } \mu_0\eta R f= $
 $=\frac{4\pi}{3 }\cdot (1{,}26\cdot 10^{-6})\cdot(10\cdot10^{-6})\cdot0{,}05 \cdot10~\text{(SI egység)}
 =2{,6}\cdot 10^{-11}~{\rm T}, $
 meglehetősen kicsi érték. (Összehasonlításként a Föld mágneses indukciója $10^{-5}~$T nagyságrendű.)
