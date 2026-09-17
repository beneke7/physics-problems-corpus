---
id: komal-P5068
source: komal
language: hu
translated: false
problem: komal-P5068
figure_files: [komal-P5068-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük az üstökös maximális sebességét $v_1$-gyel, a bolygó középpontjától mért legkisebb távolságát pedig $x$-szel. A perdületmegmaradás törvénye szerint 
 $mv_0d=mv_1x,$ 
 az energiamegmaradás törvénye pedig így alkalmazható: 
 $\frac{1}{2}mv_0^2=\frac{1}{2}mv_1^2-\gamma\frac{mM}{x}.$ 

 A fenti két egyenletből ($v_1$ kiküszöbölése után) 
 $x^2+2\frac{\gamma M}{v_0^2}x-d^2=0$ 
 adódik, amelynek (pozitív) megoldása: 
 $x=\sqrt{
 \left(\frac{\gamma M}{v_0^2}\right)^2+d^2}-\frac{\gamma M}{v_0^2}. $ 
 Az üstökös akkor nem ütközik a bolygóval, ha $x>R$, vagyis 
 $\sqrt{
 \left(\frac{\gamma M}{v_0^2}\right)^2+d^2}-\frac{\gamma M}{v_0^2}>R,$ 
 azaz 
 $\left(\frac{\gamma M}{v_0^2}\right)^2+d^2>\left(\frac{\gamma M}{v_0^2}+R\right)^2,$ 
 $d^2-R^2>\frac{2\gamma M R}{v_0^2},$ 
 tehát 
 $v_0>\sqrt{\frac{2\gamma MR}{d^2-R^2}} .$

![solution figure](../../raw_html/komal_figures/komal-P5068-sol-fig1.gif)
