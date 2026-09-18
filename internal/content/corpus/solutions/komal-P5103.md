---
id: komal-P5103
source: komal
language: hu
translated: false
problem: komal-P5103
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A rugó – ameddig követi a Hooke-törvényt – valamekkora $D$ rugóállandóval jellemezhető. Amikor a rugó minden részét $F$ erő feszíti (ez pl. egy vízszintes, súrlódásmentes asztallapon valósítható meg), a teljes rugó megnyúlása a Hooke-törvény szerint $F/D$. Ha a rugóból levágjuk annak $x$-ed részét, vagyis $m'=xm$ tömegű darabját $(x<1)$, annak megnyúlása $F$ feszítóerő hatására $xF/D$, tehát a megrövidített rugó rugóállandója $D'=D/x$. A megrövidített rugó tömege tehát a rövidítés mértékével egyenesen , a rugóállandója pedig fordítottan arányos.
 Az asztal felett $H$ magasan tartott rugó legalsó menete és az asztalon fekvő része között nem ébredhet rugalmas erő. (Ha ugyanis húzóerő lépne fel a két rész között, akkor a rugó lelógó részének alja valamennyi rugódarabot felemelne az asztalról, nyomóerő esetén pedig valahány menetnyi rugó ,,leülne'' az asztalra.) A két részt akár el is választhatjuk egymástól (a rugót elvághatjuk), a kérdezett erők emiatt nem változnának meg. A felfüggesztésnél ható erő tehát a függőlegesen lógó rész $xm$ súlya, az alátámasztásnál ható erő pedig az asztalon fekvő rugódarab $(1-x)m$ súlya, ahol $x$ a függőleges rész és a teljes rugó menetszám-aránya.
 A szabadon lógó teljes rugót a tetejénél $mg$ erő, az aljánál pedig nulla erő feszíti. A rugó hosszát az átlagerőből számolt megnyúlás adja meg:
 $L=\frac{mg}{2}\frac{1}{D}.$
 Hasonló módon a megrövidített rugónál
 $H=\frac{m'g}{2}\frac{1}{D'}=\frac{xmg}{2}\frac{x}{D}=x^2\cdot L.$
 Innen $x=\sqrt{\frac{H}{L}}$, és a keresett erők:
 $F^\text{(fent)}=\sqrt{\frac{H}{L}}\cdot mg, \qquad F^\text{(lent)}=\left(1-\sqrt{\frac{H}{L}}\right)\cdot mg.$
