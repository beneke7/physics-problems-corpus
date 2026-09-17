---
id: komal-P5728
source: komal
language: hu
translated: false
problem: komal-P5728
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen az $A$ pont potenciálja 
 $U_A=+\frac{1}{2}U_\mathrm{max}\sin\omega t,$ 
 a $B$ ponté pedig 
 $U_B=-\frac{1}{2}U_\mathrm{max}\sin\omega t.$ 
 Ha a kapcsolást a kondenzátorok és a tekercsek által kijelölt átlóra tükrözzük, minden csomópontban a potenciál a $(-1)$-szeresére változik. Másrészt a kapcsolás szimmetriája miatt a tükrözéskor az átló minden pontjában a potenciál változatlan marad. Ez a két feltétel akkor teljesül egyszerre, ha a kondenzátorok, illetve a tekercsek végpontjai mind nulla potenciálúak, azaz ekvipotenciálisak. 
 Ekvipotenciális pontok között nem folyik áram, tehát az árameloszlás nem változik meg akkor, ha valamennyi kondenzátort és valamennyi tekercset eltávolítjuk a kapcsolásból. 
 A maradék elemek mindegyike ohmos ellenállás. A legbelső négyzetben két-két $R$ nagyságú ellenállás sorosan (eredőjük tehát $2R$), ezek pedig párhuzamosan vannak kapcsolva, az eredőjük tehát $R$. A következő négyzet 4 ellenállása $2R$, az rákövetkezők $4R$, $8R$ stb. ellenállással helyettesíthetők. 
 Az egész kapcsolás eredője párhuzamosan kapcsolt $R,\,2R,\,4R,\,8R,\,\ldots$ ellenállásokból számolható: 
 $\frac{1}{R_\textrm{eredő}}=\frac{1}{R}+\frac{1}{2R}+\frac{1}{4R}+\frac{1}{8R}+\ldots=\frac{2}{R},$ 
 vagyis $R_\textrm{eredő}=R/2.$ Ennek megfelelően a kapcsoláson az idő függvényében 
 $I(t)=\frac{U_{A,B}}{R_\textrm{eredő}}=\frac{2U_\mathrm{max}}{R}\sin\omega t$ 
 áram folyik keresztül.
