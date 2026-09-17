---
id: komal-P5540
source: komal
language: hu
translated: false
problem: komal-P5540
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A Newton-féle lehűlési törvény értelmében egy test és környezete között időegységenként átadott hő csak a hőmérséklet-különbségüktől függ. A test kezdeti hőmérsékletét $T_0$-val, a környezetét $T_\mathrm{k}$-val jelölve, a hőátadási tényezőt, a test hőkapacitását és felületét pedig egy $\lambda$ állandóba foglalva a test $t$ időpontbeli hőmérséklete: 
 $T(t)=T_\mathrm{k}+(T_0-T_\mathrm{k})\mathrm{e}^{-\lambda t}.$ 
 Ezt felhasználva kiszámíthatjuk a tea végső hőmérsékletét, miután azt $\tau$ ideig a $T_1$ hőmérsékletű hűtőben, majd újabb $\tau$ ideig a $T_2$ hőmérsékletű mélyhűtőben tartottuk: 
 $(1)$ $T_\mathrm{A}=T_2+\left[T_1+(T_0-T_1)\mathrm{e}^{-\lambda\tau}-T_2\right]\mathrm{e}^{-\lambda\tau}.$ 
 Ha előbb tesszük a mélyhűtőbe, majd utána a hűtőbe, akkor a végső hőmérséklet a következőképp módosul: 
 $(2)$ $T_\mathrm{B}=T_1+\left[T_2+(T_0-T_2)\mathrm{e}^{-\lambda\tau}-T_1\right]\mathrm{e}^{-\lambda\tau}.$ 
 Az (1) és (2) egyenletekből a kétféle hőmérséklet különbsége kifejezhető: 
 $T_\mathrm{A}-T_\mathrm{B}=(T_2-T_1)\left(1-2\mathrm{e}^{-\lambda\tau}+\mathrm{e}^{-2\lambda\tau}\right)=(T_2-T_1)\left(1-\mathrm{e}^{-\lambda\tau}\right)^2.$ 
 Az első zárójelben álló kifejezés negatív, a teljes négyzet pedig nemnegatív, így $T_\mathrm{B}>T_\mathrm{A}$. Következésképpen az a pohár hűl le jobban, amelyiket először a hűtőbe, majd a mélyhűtőbe helyeztük. Érdekesség, hogy az eredmény független mind a hőátadást jellemző $\lambda$ paramétertől, mind a $\tau$ időtartamtól, csupán annyi lényeges, hogy ezek a kétféle környezetre vonatkozóan azonosak legyenek.
