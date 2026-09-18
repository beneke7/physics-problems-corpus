---
id: komal-P5401
source: komal
language: hu
translated: false
problem: komal-P5401
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a fonalak hosszát $\ell$-lel, a szakítószilárdságukat $K_0$-lal, a test tömegét pedig $m$-mel. A fonál elszakadását megelőző pillanatban a fonalakat $K_0$ erő feszíti, amelyek függőleges komponense tart egyensúlyt a test súlyával:
 $2K_0\cos\alpha=mg, \qquad \text{vagyis}\qquad K_0=\frac{mg}{2\cos\alpha}.$
 Az $\alpha$ szögben kitérített inga lengésbe kezd, és az inga fonalát függőleges helyzetében feszíti a legnagyobb erő. A test sebessége a legmélyebb helyzetben (az energiamegmaradás törvénye szerint)
 $v=\sqrt{2g\ell(1-\cos\alpha)},$
 vagyis a centripetális gyorsulás ekkor
 $a=\frac{v^2}{\ell}=2g(1-\cos\alpha).$
 A test mozgásegyenlete a pálya legalsó pontjánál:
 $K-mg=ma,$
 így a fonalat feszítő erő:
 $K=mg(3-2\cos\alpha).$
 A fonál akkor nem szakad el, ha $K<K_0$, vagyis
 $3-2\cos\alpha<\frac{1}{2\cos\alpha}.$
 Határesetben, amikor $K =K_0$, vagyis a fonál éppen elszakadna, a következő ($x=\cos\alpha$ ismeretlenre nézve másodfokú) egyenletet kapjuk:
 $x^2-\frac{3}{2}x+\frac{1}{4}=0.$
 Ennek gyökei:
 $x_1=\frac{3-\sqrt{5}}{4}\approx 0{,}19 \qquad \text{és}\qquad x_2=\frac{3+\sqrt{5}}{4}\approx 1{,}31.$
 A $K<K_0$ feltétel akkor teljesül, ha $x<x_1$, vagyis $\alpha>79^\circ$. Ebben az esetben, vagyis ha a lassan széthúzott végű fonalak kb. $158^\circ$-os szöget zártak be egymással az egyikük elszakadásakor, a további lengések során a másik fonál biztosan nem szakad el.
