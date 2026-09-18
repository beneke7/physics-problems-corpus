---
id: komal-P4987
source: komal
language: hu
translated: false
problem: komal-P4987
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A körvezetőben a változó mágneses fluxus miatt feszültség indukálódik:
 $U=\frac{\Delta \Phi(t)}{\Delta t}=-k.$
 Ez az állandó feszültség egyenáramot indít el a körvezetőben, annak erőssége
 $I=\frac{U}{2R\pi \varrho}A,$
 ahol $\varrho=1{,}7\cdot10^{-8}\,\Omega\,\rm m$ a réz fajlagos ellenállása. A megadott $t_0$ pillanatban a mágneses indukció erőssége:
 $B(t_0)=\frac {\Phi(t_0)}{R^2\pi}=\frac {\Phi_0+kt_0 }{R^2\pi},$
 ami a körvezető egyes ($\Delta \ell$ hosszúságú) darabjaira $BI\Delta\ell$ nagyságú Lorentz-erőt fejt ki.
 Tekintsük a körvezető egyik felére (félkörére) ható Lorentz-erők eredőjét. Ha a félkört az átmérője mentén zárt hurokká egészítenénk ki, az egész hurokra ható erő nyilván nulla lenne. A félkörívre tahát összesen
 $F=B(t_0)I2R$
 nagyságú mágneses erő hat, amivel a félkör végpontjainál ható (a $\sigma$ rugalmas feszültségből származó) $2\sigma A$ erő tart egyensúlyt. Innen a keresett rugalmas feszültség nagysága:
 $\sigma=\left\vert \frac{B(t_0)I2R}{2A}\right\vert=\frac{\left(\Phi_0+kt_0\right)k }{2\pi^2\varrho R^2}\approx
7{,}5\cdot10^4~{\rm Pa}=0{,}075 ~\frac{\rm N}{\rm mm^2}.$
 Amennyiben a mágneses tér erősségének nagysága növekszik (esetünkben ez a helyzet), akkor – mint az a jobbkéz-szabály többszöri alkalmazásával belátható – a vezetőben rugalmas nyomófeszültség alakul ki.

 Megjegyzések. 1. Az $A$ keresztmetszet kiesett a mechanikai feszültség végképletből. Ez várható volt, hiszen ha egymás közelében két egyforma körvezetőt helyezünk el a mágneses térben, mindegyikükben ugyanakkora $\sigma$ rugalmas feszültség jön létre, jóllehet az együttes keresztmetszetük kétszer akkora, mint az egyes körvezetőké.
 2. Az $A$ keresztmetszetből kiszámítható a vezeték sugara, és abból a vezetékben folyó áram által létrehozott mágneses indukció nagysága. Ez még a vezeték közvetlen közelében is sokkal kisebb, mint a külső mágneses tér indukciója, tehát jogosan hanyagoltuk el a vezeték saját mágneses terét a számolásban.
