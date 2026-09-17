---
id: komal-P4939
source: komal
language: hu
translated: false
problem: komal-P4939
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen a kilőtt golyó sebességének vízszintes komponense $u_0$, a függőleges komponense pedig $v_0$. A golyó a falat (a $B$ pontot) $t_0=v_0/g$ idő alatt éri el, és 
 $H=\frac{1}{2}v_0t_0=\frac{v_0^2}{2g}$ 
 magasra emelkedik. Ezalatt 
 $d=u_0t_0=\frac{u_0 v_0}{g}$ 
 utat tesz meg vízszintesen, ez tehát az $A$ pont és a fal távolsága. 
 A falról a golyó $\varepsilon u_0$ sebességgel pattan vissza, és ez a vízszintes sebességkomponense a továbbiakban már nem változik. A golyó $t_1=v_0/g$ idő alatt esik vissza a talaj szintjére, vízszintesen tehát 
 $d_1=\varepsilon u_0t_1=\varepsilon \frac{u_0 v_0}{g}$ 
 az elmozdulása, függőleges sebességének nagysága pedig $v_0$ lesz. 
 A talajról visszapattanó labda függőleges sebességkomponense $\varepsilon v_0$, a következő pattanásig $t_2=2\varepsilon v_0/g$ idő alatt vízszintes irányban 
 $d_2=2\varepsilon^2 \frac{u_0 v_0}{g}$ 
 távolságnyit mozdul el. 
 A további pattanások során a függőleges sebességkomponens mindig az előző érték $\varepsilon$-szorosára csökken, és ugyanilyen arányban csökken a pattanások közötti vízszintes irányú elmozdulás is: 
 $d_3= 2\varepsilon^3 \frac{u_0 v_0}{g},\quad d_4= 2\varepsilon^4 \frac{u_0 v_0}{g}, \ldots , d_n= 2\varepsilon^n \frac{u_0 v_0}{g}.$ 
 A golyó nagyon sok ($n\rightarrow \infty$) pattanás után, amikor a függőleges sebessége már nullára csökken, visszaérkezik az $A$ pontba. A 
 $d_1+d_2+d_3+\ldots =d$ 
 feltételből az 
 $1=\varepsilon+2\varepsilon^2+2\varepsilon^3+2\varepsilon^4+\ldots=\varepsilon+\frac{2\varepsilon^2}{1-\varepsilon}$ 
 egyenletet kapjuk, amelynek (fizikailag reális, pozitív) megoldása: 
 $\varepsilon=\sqrt{2}-1\approx 0{,}41.$ 
 Megjegyzés. Ha $\epsilon>\sqrt{2}-1$, akkor a golyó pattogása már az $A$ pontba történő visszaérkezése előtt megszűnik.
