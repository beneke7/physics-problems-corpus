---
id: komal-P5016
source: komal
language: hu
translated: false
problem: komal-P5016
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A rúdra ható erők és forgatónyomatékok egyensúlyának feltételéből kiszámíthatjuk a nyomóerőt és a súrlódási erőt:
 $N(\alpha)=\frac{G}{2}(2-\cos^2\alpha),\qquad S(\alpha)=\frac{G}{2}\sin\alpha \cos\alpha.$
 A rúd akkor nem csúszik meg, ha minden $\alpha$ szögnél
 $\frac{S(\alpha)}{N(\alpha)}\equiv \frac{\sin\alpha \cos\alpha}{2-\cos^2\alpha}<\mu.$
 A bal oldalon álló függvény legnagyobb értéke körülbelül 0,35 (ezt numerikus vagy grafikus módszerrel lehet belátni); ennél nagyobb súrlódási együttható esetén a rúd semelyik helyzeténél nem fog megcsúszni.

 Megjegyzés. Differenciálszámítás segítségével megmutatható, hogy
 $\mu_\text{krit.}=\frac{\sqrt{2}}{4}.$
