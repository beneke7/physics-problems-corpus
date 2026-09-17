---
id: komal-P4804
source: komal
language: hu
translated: false
problem: komal-P4804
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a testre ható súrlódási erőt $S$-sel, az asztallap által kifejtett nyomóerőt pedig $N$-nel, a nyomóerő támadáspontjának (vízszintesen mért) távolsága a téglatest közepétől pedig legyen $x$. (Nyilván fennáll, hogy $x\le \ell/2$.) 
 A gyorsulásmentes mozgás feltétele: 
 $F\cos\alpha-S=0,$ 
 $F\sin\alpha+mg-N=0,$ 
 a csúszó súrlódás feltétele: 
 $S=\mu N,$ 
 és végül a forgatónyomatékok egyensúlya (a tömegközéppontra vonatkoztatva): 
 $\frac{h}{2}(F\cos\alpha+S)+\frac{\ell}{2} F\sin\alpha-xN=0.$ 
 $a)$ Az egyenletrendszer megoldása: 
 $F(\alpha)=\frac{\mu mg}{\cos\alpha-\mu\sin\alpha},\quad S(\alpha)=\frac{\mu mg\cos\alpha}{\cos\alpha-\mu\sin\alpha},
\quad N(\alpha)=\frac{mg\cos\alpha}{\cos\alpha-\mu\sin\alpha}.$ 
 $b)$ A feladatban leírt mozgás biztosan nem jöhet létre, ha $\tg\alpha\ge1/\mu$, vagyis $\alpha\ge \alpha_1=81{,}4^\circ,$ hiszen ha a fokozatosan növekvő $\alpha$ szög ehhez az értékhez közelít, az $F$ erő (és vele együtt $N$ és $S$ is) minden határon túl növekszik; a zsineg tehát előbb-utóbb elszakad. 
 A téglatest egyenletes mozgása azonban már hamarabb is megszűnhet: ha a test felborul. Ez akkor következik be, amikor $x$ eléri a kritikus $\ell/2$ értéket. A forgatónyomatékra vonatkozó egyenlet szerint ez egy akkora $\alpha_2$ szögnél következik be, amelyre 
 $\tg\alpha_2=\frac1\mu-\frac{2h}{\ell}=5{,}4\approx 79{,}5^\circ.$ 
 Amikor $\alpha$ eléri ezt a szöget, a test felborul. 
 Általában (a test méretarányaitól és tömegétől függetlenül) igaz, hogy $\alpha_2<\alpha_1$, tehát $\alpha$ növekedtével a test még a ,,megszorulása'' előtt felborul.
