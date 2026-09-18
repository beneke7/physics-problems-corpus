---
id: komal-P5679
source: komal
language: hu
translated: false
problem: komal-P5679
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 a) Ha végállapotban a hasáb együtt mozog a kiskocsival, akkor rugalmatlan ütközésnek tekinthetjük az esetet, amire a lendületmegmaradás így írható fel:
 $mv_0=(m+M)u\qquad\rightarrow\qquad u=\frac{mv_0}{m+M}.$
 Minél messzebbre jut a hasáb a kiskocsin, annál nagyobb a mechanikai energiaveszteség, ami határesetben $\Delta E=-\mu mg\ell$ értékű.
 $\Delta E=\frac{1}{2}(m+M)u^2-\frac{1}{2}mv_0^2=-\mu mg\ell\qquad\rightarrow\qquad v_0=\sqrt{\frac{2(m+M)\mu g\ell}{M}}=1{,}2\,\mathrm{\frac{m}{s}}.$
 Megjegyezzük, hogy ebben a határesetben $u=0{,}4\,\mathrm{m/s}$, ami azt is jelenti, hogy a kezdeti mechanikai energiának csak a harmada marad meg, kétharmad része hővé válik.

 b) Ha $v_1=2v_0=2{,}4\,\mathrm{m/s}$ sebességgel lökjük meg a hasábot, akkor lerepül a kiskocsiról, sebességét jelöljük $v_2$-vel, illetve a kiskocsi sebessége legyen $u'$. A lendületmegmaradás így írható fel:
 $mv_1=mv_2+Mu'=mv_2+2mu'\qquad\rightarrow\qquad u'=\frac{v_1-v_2}{2}.$
 A mechanikai energia megváltozása a korábbihoz hasonlóan írható:
 $\Delta E=\frac{1}{2}mv_2^2+\frac{1}{2}(2m)u'^2-\frac{1}{2}mv_1^2=-\mu mg\ell\qquad\rightarrow\qquad v_2^2+2u'^2-v_1^2=-2\mu g\ell.$
 Ha a legutolsó egyenletbe beírjuk $u'$ korábbi kifejezését, akkor $v_2$-re másodfokú egyenletet kapunk, melynek a pozitív gyöke értelmes számunkra:
 $v_2^2+2\left(\frac{v_1-v_2}{2}\right)^2-v_1^2+2\mu g\ell=0\qquad\rightarrow\qquad v_2=\frac{v_1+2\sqrt{v_1^2-3\mu g\ell}}{3}=2{,}19\,\mathrm{\frac{m}{s}}.$
 Végül a kiskocsi sebessége:
 $u'=\frac{v_1-v_2}{2}=0{,}11\,\mathrm{\frac{m}{s}}.$

 Megjegyzések. 1. A feladatot dinamikai és kinematikai egyenletek felírásával is megoldhatjuk.
 2. Érdekes észrevenni, hogy amennyiben a hasáb lerepül a kiskocsiról, akkor a mechanikai energiaveszteség független attól, hogy mekkora sebességgel lökjük meg a hasábot. Ugyancsak azonos a hasábra, illetve a kiskocsira ható súrlódási erő, továbbá a testek gyorsulása sem függ a meglökés sebességétől. Azonban a súrlódási erő okozta erőlökés függ a meglökési sebességtől, mert minél nagyobb az indulási sebesség, annál kisebb lesz az átfutási idő. Ebből az is következik, hogy igen nagy kezdősebességek esetén elhanyagolhatóan kicsi lesz a hasáb sebességváltozása, valamint alig szerez sebességet a kiskocsi. (Még a feladat nem túl nagy kezdősebességéből számított numerikus végeredményei is ezt támasztják alá.)
