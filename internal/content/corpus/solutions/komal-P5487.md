---
id: komal-P5487
source: komal
language: hu
translated: false
problem: komal-P5487
figure_files: [komal-P5487-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás**
. Tükrözzük a félgömböt és a fénysugár útvonalát a foncsorozott felületre. Így egy teljes hengeren áthaladó, kétszer megtörő fénysugarat kapunk, amely a beesés irányához képest összesen $90^\circ$-os szögben térül el. 

 Az ábráról leolvashatjuk, hogy a beesési szög és a törési szög különbsége $45^\circ$, vagyis 
 $\beta=\alpha-45^\circ.$ 
 Másrészt a törési törvény szerint 
 $\sin \beta =\frac{\sin \alpha}{n},$ 
 vagyis 
 $\sin(\alpha-45^\circ)\equiv \frac1{\sqrt2}(\sin\alpha-\cos\alpha)=\frac{\sin \alpha}{n},$ 
 amiből 
 $n=\frac{\sqrt2}{1-\cot\alpha}
$ 
 következik. Mivel $\alpha$ hegyesszög (vagy legfeljebb derékszög), $\cot\alpha\ge 0$, és így $n\ge\sqrt2$.

![solution figure](../../raw_html/komal_figures/komal-P5487-sol-fig1.gif)
