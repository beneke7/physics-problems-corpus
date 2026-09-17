---
id: komal-P5221
source: komal
language: hu
translated: false
problem: komal-P5221
figure_files: [komal-P5221-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A kisautó akkor fut végig a teljes pályán, ha a hurok legmagasabb pontjánál a nehézségi erő éppen fedezni tudja a körmozgáshoz szükséges centripetális erőt. A kocsi sebessége legyen ebben a pontban $v_1$. 
 $mg=\frac{mv_1^2}{r}, \qquad \text{vagyis}\qquad v_1=\sqrt{ gr}.$ 
 Ahhoz, hogy ekkora sebessége legyen a pálya legmagasabb pontjában, az indítási sebessége (az energiamegmaradás törvénye szerint): 
 $(1)$ $v=\sqrt{v_1^2+4gr}= \sqrt{5gr}.$ 
 Jelöljük a hurokpályától való elválás helyéhez tartozó, a vízszintestől mért szöget $\alpha$-val, a kisautó sebességét pedig ebben a pontban $v^*$-gal (lásd az ábrát ). A hurokpálya elhagyásának feltétele most is az, hogy a nehézségi erőnek a hurok középpontja felé mutató komponense biztosítani tudja a körmozgáshoz szükséges centripetális erőt: 
 $mg\sin\alpha=m\frac{\left(v^*\right)^2}{r},$ 
 vagyis 
 $(2)$ $v^*=\sqrt{gr\sin\alpha}.$ 

 A pálya elhagyása után a kisautó ferde hajítással mozog. Kezdősebessége vízszintes irányban $v^*\sin\alpha$, függőleges irányban pedig $v^*\cos\alpha$. Ha valamekkora $t$ idő alatt éppen a pályaelhagyás helyével átellenes pontba érkezik, akkor teljesül: 
 $(3)$ $v^*t\sin\alpha=2r\cos\alpha,$ 
 illetve 
 $(4)$ $\frac{g}{2}\left(v^*\right)^2- v^*t\cos\alpha=2r\sin\alpha.$ 
 A $t$ időt (3)-ból, a $v^*$ sebességet (2)-ből kifejezve, és ezeket (4)-be helyettesítve kapjuk, hogy 
 $\cos^2\alpha=\sin^2\alpha,\qquad \text{vagyis}\qquad \alpha=45^\circ.$ 
 Ezt (2)-be visszahelyettesítve adódik: 
 $v^*=\sqrt{\frac{gr}{\sqrt{2}}}.$ 
 A kiskocsi indítási sebessége ismét az energiamegmaradás törvényét felhasználva: 
 $v'=\sqrt{\left(v^*\right)^2+2gr(1+\sin\alpha)}=\sqrt{gr\left(\frac{1}{\sqrt{2}}+2+ \frac{2}{\sqrt{2}}\right) }.$ 
 A kérdezett arányszám (1)-t felhasználva: 
 $\frac{v'}{v}=\sqrt{\frac{4+3\sqrt2}{10}}\approx 0{,}91.$

![solution figure](../../raw_html/komal_figures/komal-P5221-sol-fig1.gif)
