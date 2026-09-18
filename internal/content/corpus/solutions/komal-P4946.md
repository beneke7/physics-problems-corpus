---
id: komal-P4946
source: komal
language: hu
translated: false
problem: komal-P4946
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A kiskocsi jobb oldalon ütközik a dobozzal, ekkor ,,sebességet cserélnek''. A doboz lassulva mozog, megtesz $L-\ell$ utat (ha közben meg nem áll), és a bal oldalánál ütközik a kiskocsival. Ekkor a doboz megáll, és a kiskocsi valamekkora $v_1<v_0$ sebességgel elindul jobbra. Ez ismétlődik egészen a doboz megállásáig.
 A doboz mozgása szempontjából érdektelenek azok az időtartamok, amikor a doboz áll és csak a kiskocsi mozog, ezeket tehát el is hagyhatjuk, és úgy tekinthetjük, mintha a doboz folyamatosan mozgott volna az
 $F= \frac{\Delta(mv)}{\Delta t}=-kv=-k\frac{\Delta x}{\Delta t}
$
 mozgásegyenlet szerint. Ebből leolvasható, hogy $\Delta(mv(t)+kx(t))=0,$ vagyis az $mv(t)+kx(t)$ mennyiség időben állandó. Mivel kezdetben $v=v_0$, látható, hogy a doboz összesen $s=mv_0/k$ utat tesz meg a megállásáig. (Az ehhez szükséges idő ,,végtelen'' hosszú, mert a sebessége exponenciálisan csökken nullára.) Az ütközések száma
 $N=2\left[\frac{s}{L-\ell} \right] +1,$
 ahol $[x]$ az egészrész-függvényt ($x$-nél nem nagyobb egész számot) jelöli.
