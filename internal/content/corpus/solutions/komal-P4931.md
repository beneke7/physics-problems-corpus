---
id: komal-P4931
source: komal
language: hu
translated: false
problem: komal-P4931
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A gázok kezdeti állapotjelzői legyenek $(p_1, V_1, T_1)$ és $(p_2, V_2, T_2)$, az egyensúly beállta után pedig $(p, V_1-\Delta V,T)$ illetve $(p, V_2+\Delta V,T)$. 
 Legyen $p_2<p_1$, és a feladat kérdése: lehetséges-e, hogy $\Delta V>0$? 
 Az állapotegyenletek: 
 $\frac{p_1}{T_1}V_1= \frac{p }{T }(V_1-\Delta V),\qquad \frac{p_2}{T_2}V_2= \frac{p }{T }(V_2+\Delta V).$ 
 A két egyenlet hányadosából: 
 $\frac{p_1}{T_1}\cdot \frac{T_2}{p_2}=\frac{1-\frac{\Delta V}{V_1}}{1+\frac{\Delta V}{V_2}}<1.$ 
 Látható, hogy $\Delta V>0$ akkor teljesül, ha 
 $\frac{p_1}{T_1}<\frac{p_2}{T_2},$ 
 ez pedig még $p_1>p_2$ esetén is fennállhat. Mivel 
 $\frac{p}{T}=R\frac{n}{V}$ 
 ($n$ a mólszám), azt is mondhatjuk, hogy a dugattyú az egyensúly beálltáig nem feltétlenül a kisebb nyomású rész felé, hanem arrafelé mozdul el, amerre kezdetben kisebb volt az $n/V$ mólsűrűség. 
 A megoldás során nem használtuk ki azt a tényt, hogy a henger fala hőszigetelő, vagyis az egész rendszer belső energiája nem változik meg. Ennek segítségével kiszámíthatjuk a kialakuló egyensúlyi nyomást: 
 $p=\frac{p_1V_1+p_2V_2}{V_1+V_2}$ 
 és az egyensúlyi hőmérsékletet is (de ezeket nem kérdezte a feladat).
