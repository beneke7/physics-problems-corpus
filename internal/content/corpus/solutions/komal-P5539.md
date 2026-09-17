---
id: komal-P5539
source: komal
language: hu
translated: false
problem: komal-P5539
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelölje $m$ a pallóra helyezett nehezék tömegét, $x$ a távolságát az első felfüggesztési ponttól, és legyen $\Delta x$ a szomszédos felfüggesztési pontok távolsága. A rugók kis megnyúlása esetén a palló helyzete csak kicsit térhet el a vízszintestől, a rugók, és így a felfüggesztési pontokban ható erők függőlegesnek tekinthetők. A megnyúlások és ennek megfelelően a rugókban ébredő erők is számtani sorozatot alkotnak (hiszen a palló nem hajlik meg): 
 $K_i= K_1+(i-1)\Delta K.$ 
 A pallóra ható erők és forgatónyomatékok egyensúlyban vannak, azaz 
 $mg=\sum_{i=1}^n K_i= \sum_{i=1}^n \left(K_1+(i-1)\Delta K\right)= nK_1+\frac{n(n-1)}{2}\Delta K,$ 
 és (a forgatónyomatékokat az első felfüggesztési pontra vonatkoztatva) 
$$\begin{align*}
mgx=&\sum_{i=1}^n (i-1)\Delta x\,K_i=\sum_{i=1}^n \left((i-1)\Delta x\,K_1+(i-1)^2\Delta x\,\Delta K\right)=\\
=&\left(\frac{n(n-1)}{2} K_1+\frac{n(n-1)(2n-1)}{6}\Delta K\right)\Delta x.
\end{align*}$$
 Nyilván, a legnagyobb megengedhető súly esetén minden rugó a terhelhetősége határán van (ez az állapot meg is valósítható, mert a szakítóerők és a rugóerők is számtani sorozatot alkotnak), azaz 
 $K_1=\Delta K= K.$ 
 Ebből 
 $m=\frac{n(n+1)}{2}\frac{K}{g},$ 
 és 
 $x=\frac{2(n-1)\Delta x}{3}=\frac{2L}{3},$ 
 ahol $L=(n-1)\Delta x$ pont a két szélső felfüggesztési pont közötti távolság. Figyelemre méltó, hogy a maximális terhelésnél a súly egyedüli lehetséges pozíciója nem függ az $n$-től.
