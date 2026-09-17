---
id: komal-P4996
source: komal
language: hu
translated: false
problem: komal-P4996
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen a gáz kezdeti nyomása $p_0$, térfogata $V_0$. A megváltozott állapotjelzők $p_1=\tfrac14p_0$ és $V_1=2V_0$. Az általános gáztörvény szerint 1 mólnyi anyagmennyiség esetén a héliumgáz hőmérséklete 
 $T=\frac{pV}{R},$ 
 a belső energiája pedig 
 $E=\frac{3}{2}pV=\frac{3}{2}RT.$ 
 A megadott feltételek szerint 
 $\Delta E=\frac{3}{2}p_1V_1-\frac{3}{2}p_0V_0=-\frac34p_0V_0=-\frac34RT_0=-2493~\rm J,$ 
 ahonnan a kezdeti hőmérséklet megkapható: 
 $T_0=-\frac{4}{3}\frac{\Delta E}{R}=\frac{4\cdot 2493~\rm J}{3\cdot 8{,}31~\rm J/K}=400~\rm K.$ 
 A folyamat végén a gáz hőmérséklete $T_2=200~\rm K$. 
 $b)$ Számítsuk ki, hogy milyen kapcsolat van a gáz térfogatának és nyomásának kicsiny megváltozása között a feladatban szereplő állapotváltozásban. Ha $pV^2$ állandó, akkor 
 $(p+\Delta p)(V+\Delta V)^2=pV^2,$ 
 ahonnan a kicsiny megváltozások szorzatát elhanyagolva a 
 $(1)$ $V\Delta p=-2p\Delta V$ 
 összefüggés adódik. Hasonló módon kapjuk, hogy a belső energia és a hőmérséklet kicsiny megváltozása 
 $\Delta E=\frac32(p+\Delta p)(V+\Delta V)-\frac32pV\approx \frac32p\Delta V+\frac32V\Delta p,$ 
 illetve 
 $(2)$ $\Delta T=\frac1R (p\Delta V+ V\Delta p).$ 
 A hőtan I. főtétele szerint a gáz állapotának kicsiny megváltozása során a gáz által felvett hő 
 $\Delta Q=\Delta E+p\Delta V=\frac52p\Delta V+\frac32V\Delta p,$ 
 ami (1) és (2) felhasználásával így is írható: 
 $\Delta Q=-\frac12 p\Delta V=\frac12 R\Delta T.$ 
 Azt kaptuk tehát, hogy a hélium molhője a szóban forgó folyamatban állandó, $C=\tfrac12 R$ nagyságú. Ennek megfelelően a teljes folyamat során leadott hő: 
 $-Q=-\frac12 R\left(T_2-T_1\right)=\frac{8{,}31~\rm J/K}{2}(400~{\rm K}-200~{\rm K})=831~\rm J.$ 

 Megjegyzés. A fentiekben leírtakhoz hasonló módon belátható, hogy a $pV^n=\text{állandó}$ folyamatokban (ezek az ún. politropikus folyamatok) a mólhő állandó, értéke (nemesgázok esetén) 
 $C=\frac{5-3n}{2(1-n)}R.$ 
 Speciális esetek: $n=0$ (izobár állapotváltozás, $C_p=\tfrac52R)$; $n\rightarrow\infty$ (izochor állapotváltozás, $C_V=\tfrac32R)$, $n=1$ (izoterm állapotváltozás, ilyenkor a mólhő értelmét veszti); $n=\tfrac53$ (adiabatikus állapotváltozás, $C=0)$; $n=2$ (ez a feladatban szereplő eset, $C=\tfrac12R)$.
