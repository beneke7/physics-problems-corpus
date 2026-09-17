---
id: komal-P4874
source: komal
language: hu
translated: false
problem: komal-P4874
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a HÉV szerelvények átlagsebességét $c$-vel és az indításuk között eltelő időt $\Delta t$-vel. (Az egyszerűség kedvéért tételezzük fel, hogy a szerelvények egyenletesen mozognak, és a megállókban eltöltött idejük elhanyagolhatóan kicsi.) 
 Tekintsük először a kerékpárossal azonos irányban haladó HÉV-eket, és mérjük az időt at egyik találkozás pillanatától! A kerékpáros $t_1$ idő alatt $vt_1$ utat tesz meg a következő találkozás helyszínéig, a következő szerelvény pedig, amelyik $\Delta t$-vel kevesebb idő alatt teszi meg ugyanezt az utat: 
 $vt_1=c(t_1-\Delta t),\qquad \text{vagyis}\qquad \frac{\Delta t}{t_1}=1-\frac{v}{c}.$ 
 Hasonló megfontolással a vele szemben haladó szerelvényekre felírható: 
 $vt_2=c( \Delta t-t_2),\qquad \text{azaz}\qquad \frac{\Delta t}{t_2}=1+\frac{v}{c}.$ 
 A fenti két egyenletet elosztva egymással ezt kapjuk: 
 $\frac{1-\frac{v}{c}}{1+\frac{v}{c}}=\frac{t_2}{t_1}=\frac{1}{2}, $ 
 ahonnan a HÉV szerelvények sebességére 
 $\frac{v}{c}=\frac{1}{3},\qquad \text{tehát}\qquad c=42~\frac{\rm km}{\rm h}$ 
 adódik, az indítási időkülönbségekre pedig 
 $\Delta t=\frac{2t_1t_2}{t_1+t_2}=10~\text{perc},$ 
 ez a $t_1$ és $t_2$ időtartamok harmonikus középértéke. 
 Megjegyzés: Ha nem kötjük ki, hogy a szerelvények sebessége állandó, hanem $c$-t (a megállóknál töltött időt is beszámítva) átlagsebességnek tekintjük, továbbá a $t_1$, $t_2$ időközöket is átlagértékként értelmezzük, a fentivel megegyező eredményt kapunk.
