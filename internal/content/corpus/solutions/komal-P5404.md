---
id: komal-P5404
source: komal
language: hu
translated: false
problem: komal-P5404
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A Carnot-gép hatásfoka 
 $\eta_\text{Carnot}=\frac{W}{Q_1}=\frac{T_1-T_2}{T_1},$ 
 tehát a melegebb hőtartályból felvett hő 
 $Q_1=\frac{T_1}{T_1-T_2}W.$ 
 Ha a gép – a dugattyú és a munkahenger közötti súrlódás miatt – veszteséges, akkor a hasznos munka $W-2q$, a felvett hő pedig $Q_1-q$ lesz. (A $2q$ hőnek a fele visszajut a melegebb hőtartályba.) 
 A veszteséges hőerőgép hatásfoka: 
 $\eta=\frac{W-2q}{Q_1-q}=\frac{T_1-T_2}{T_1}\,\frac{1-2\frac{q}{W}}{1-\frac{T_1-T_2}{T_1}\,\frac{q}{W}}.$ 
 Használjuk most ki, hogy az $\epsilon =q/W$ dimenziótlan arányszám 1-nél sokkal kisebb, ezért a négyzete $\epsilon$ mellett elhanyagolható. Algebrai átalakítások után ezt kapjuk: 
 $\frac{1-2\epsilon}{1-\frac{T_1-T_2}{T_1}\epsilon}=
 \frac{(1-2\epsilon) \left(1+\frac{T_1-T_2}{T_1}\epsilon\right)}{1-\left(\frac{T_1-T_2}{T_1}\epsilon\right)^2}\approx
1-\left(\frac{T_1+T_2}{T_1}\right)\,\epsilon.
 $ 
 Így végül a keresett hatásfok: 
 $\eta=\frac{T_1-T_2}{T_1} - \frac{T_1^2-T_2^2}{T_1^2}
 \frac{q}{W}.$
