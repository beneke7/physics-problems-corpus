---
id: komal-P5243
source: komal
language: hu
translated: false
problem: komal-P5243
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a játékos és a fal távolságát $d$-vel, a játékos futási sebességét $v_1$-gyel, az eldobott labda kezdősebességének a fal felé mutató komponensét $v_2$-vel, a függőleges sebességkomponensét pedig $v_3$-mal. A labda sebességének nagysága az eldobáskor 
 $(1)$ $v=\sqrt{v_1^2+v_2^2+v_3^2},$ 
 ennek a kifejezésnek a legkisebb értékét keressük. 
 A labda 
 $(2)$ $t=\frac{d}{v_2}$ 
 idő alatt éri el a falat, és ugyanennyi idő telik el addig, amíg visszajut a játékosig. Ha a labda függőleges irányú sebessége éppen a falnál válik nullává, akkor a fel- és lefelé történő mozgás ideje is ugyanakkora: 
 $(3)$ $t=\frac{v_3}{g}.$ 
 A (2) és (3) egyenletekből (az idő kiküszöbölése után) 
 $(4)$ $v_2v_3=gd=9{,}81~\frac{\rm m}{\rm s^2}\cdot 3~{\rm m}=29{,}4~\frac{\rm m^2}{\rm s^2}$ 
 adódik. 
 Mivel fennáll, hogy 
 ${v_2^2+v_3^2}\geq 2 
 \sqrt{v_2^2\cdot v_3^2}
 =2gd=58{,}8~\frac{\rm m^2}{\rm s^2},$ 
 a labda kezdősebessége (1) szerint 
 $v=\sqrt{v_1^2+v_2^2+v_3^2}\ge \sqrt{v_1^2+ 2\,v_2 v_3}=\sqrt{25+58{,}8}~\frac{\rm m}{\rm s}\approx 9{,}2~\frac{\rm m}{\rm s}.$ 

 Megjegyzés. A megoldás során feltételeztük, hogy a labda úgy jut vissza a játékos kezébe, hogy csak a falon pattan egyet, de a földet nem éri el.
