---
id: komal-P4865
source: komal
language: hu
translated: false
problem: komal-P4865
figure_files: [komal-P4865-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 I. (algebrai) megoldás. A két gépkocsi közötti távolság négyzete $t$ idejű mozgás után: 
 $d^2=(x_0-v_1t)^2+(y_0-v_2t)^2=
\left(t\sqrt{v_1^2+v_2^2}-\frac{v_1x_0+v_2y_0}{\sqrt{v_1^2+v_2^2}}\right)^2+
x_0^2+y_0^2-\frac{(v_1x_0+v_2y_0)^2}{v_1^2+v_2^2}.$ 
 Ez a kifejezés akkor a legkisebb, amikor 
 $t=\frac{ v_1x_0+v_2y_0 }{v_1^2+v_2^2}.$ 
 Ez $v_2$-re nézve egy másodfokú egyenlet, amelynek (pozitív) megoldása: $v_2^{(1)}=25{,}6~\rm km/h$, és a hozzá tartozó minimális távolság: $d_\text{min}^{(1)}=1{,}03~\rm km.$ 
 A fentebbi másodfokú egyenletnek van egy másik, a $v_2<0$ tartományba eső megoldása is. Fizikailag ez annak felel meg, hogy a $B$ pontban lévő jármű távolodik a kereszteződéstől: $v_2^{(2)}=-5{,}62~{\rm km/h}$ és $d_\text{min}^{(2)}=3{,}9~\rm km.$ 

 II. (geometriai) megoldás. Írjuk le a mozgást a $B$ járműből (annak vonatkoztatási rendszeréből) nézve. Ebben a leírásban a $B$ jármű áll, a másik pedig a $(-v_1,v_2)$ vektorral jellemezhető (most még ismeretlen) irányban mozog (lásd az ábrát ). (A vektor komponenseit az $OA$, illetve az $OB$ irányban tekintjük pozitívnak.) 
 Ha a két jármű $t$ idő múlva kerül egymáshoz legközelebb, akkor ezen pillanatban az $A$ pontból induló jármű távolsága az $OB$ egyenestől $x_0-v_1t$ lesz, vagyis a jármű a szaggatott vonallal jelölt egyenes valamelyik pontjába kerül. 

 Másrészt a kérdéses pontban a két jármű közötti távolság minimális, tehát a relatív sebességük merőleges a járműveket összekötő egyenesre. Ezek szerint a kérdéses pont rajta fekszik az $AB$ szakaszhoz tartozó Thalész-körön. Az ábrán látszik, hogy két ilyen pont is lehetséges, a $v_2>0$-hoz tartozó $P_1$ pont, illetve a $v_2<0$-hoz tartozó $P_2$ pont. A megfelelő derékszögű háromszögek hasonlóságát kihasználva felírhatjuk, hogy 
 $\frac{v_1}{v_2}=\frac{v_2t-y_0}{x_0-v_1t},$ 
 ahonnan az ismert adatok behelyettesítése után a (km/h egységekben felírt) $v_2$-re ezt a másodfokú egyenletet kapjuk: 
 $v_2^2-20v_2-144=0,$ 
 aminek a megoldásai: 25,6 és $-5{,}6$, és ezek ismeretében a két jármű kérdezett távolsága is kiszámítható az egyes esetekben: $BP_1=1{,}0~\rm km$, illetve $BP_2=3{,}9~\rm km$

![solution figure](../../raw_html/komal_figures/komal-P4865-sol-fig1.gif)
