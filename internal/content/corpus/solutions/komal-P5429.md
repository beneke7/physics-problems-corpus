---
id: komal-P5429
source: komal
language: hu
translated: false
problem: komal-P5429
figure_files: [komal-P5429-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az autó állandó gyorsulása 
 $a_0=\frac{108~\rm km/h}{10~\rm s}=\frac{30~\rm m/s}{10~\rm s}=3~\frac{\rm m}{\rm s^2}.$ 
 Az autó sebessége időben $v(t)=a_0t$ módon növekszik, az $R=0{,}4~\rm m$ sugarú kerekek szögsebessége tehát időben így változik: 
 $\omega(t)=\frac{v(t)}{R}=\frac{a_0t}{R},$ 
 a szöggyorsulása pedig időben állandó, nagysága 
 $\beta=\frac{\Delta\omega}{\Delta t}=\frac{a_0}{R}.$ 

 A díszítőgyűrű valamely $P$ pontjának gyorsulása három gyorsulásvektor összegeként kapható meg. Ezek (lásd az ábrát ): 
 ($i$) Az egész autó haladó (transzlációs) mozgásának megfelelő, vízszintes irányú, $a_0$ nagyságú vektor. 
 $(ii)$ A $P$ pontnak a kerék $O$ tengelye körüli forgásból származó ,,kerületi gyorsulás'' vektor, amelynek nagysága (mivel az $OP$ távolság a feladat szövege szerint $R/2$): 
 $a_1=\frac{R}2 \beta=\frac12 a_0.$ 
 Ez a gyorsulás ,,érintő irányú'', vagyis az $OP$ egyenesre merőleges, és a kerék forgásának megfelelő (előre) irányba mutat. 
 $(iii)$ A kerék $P$ pontjának centripetális gyorsulása, amely $P$-től $O$ felé mutató vektor, nagysága: 
 $a_2=\frac{R}2\omega(t)^2=\frac{a_0^2t^2}{2R}.$ 
 Könnyen belátható, hogy a felsorolt három gyorsulásvektor összege csak akkor lehet nulla, ha a $P$ pont a (mondjuk) jobbra haladó autó diszgyűrűjének jobb alsó negyedében található, vagyis az ábrán jelölt $\varphi$ szög $90^\circ$-nál kisebb. 
 A $PQT$ derékszögű háromszög átfogója kétszer hosszabb, mint a $P$-beli érintővel párhuzamos befogó. Innen következik, hogy $\varphi=30^\circ$, továbbá 
 $a_2=\frac{\sqrt3}2a_0,$ 
 vagyis 
 $\frac{a_0^2t^2}{2R}=\frac{\sqrt3}2a_0,$ 
 ahonnan a kérdéses idő: 
 $t=\sqrt{\frac{\sqrt3R}{a_0}}\approx 0{,}48~\rm s.$ 
 Az autó sebessége ekkor 
 $v=a_0t=1{,}44~\frac {\rm m}{\rm s}.$

![solution figure](../../raw_html/komal_figures/komal-P5429-sol-fig1.gif)
