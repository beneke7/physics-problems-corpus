---
id: komal-P5522
source: komal
language: hu
translated: false
problem: komal-P5522
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A mozgás egy adott $t$ időpillanatában a gyöngyök egymás fölé érnek, ekkor a köztük ható erőnek nem lesz vízszintes komponense, így itt lesz sebességük maximális, jelölje ezeket a sebességeket $U$ illetve $V$.
 Az általánosság elvesztése nélkül feltehetjük, hogy $u>v$. Mivel csak belső erők hatnak, a rendszer teljes impulzusa időben állandó; specifikusan igaz ez a kezdeti állapot és a $t$ időpont között is:
 $(1)
$ $mu - mv = mU - mV\,.$
 Hasonlóan az energiamegmaradás törvénye is felírható a Coulomb-erő konzervatív voltából fakadóan:
 $(2)
$ $\frac{1}{2}mu^2 + \frac{1}{2}mv^2 = \frac{1}{2}mU^2 + \frac{1}{2}mV^2 - \frac{kq^2}{d}\,.$
 Az (1) egyenletből $V = U - u + v$, amelyet a (2) kifejezésbe behelyettesítve:
 $U^2 -(u-v)U - uv - \frac{kq^2}{md} = 0\,.
$
 A másodfokú egyenlet megoldóképlete alapján végül adódik az $U$ sebesség. A két matematikai megoldás közül az $u>v$ feltevésünket figyelembe véve a pozitívat kell választani:
 ${U = \frac{u-v}{2} + \sqrt{\frac{(u+v)^2}{4} + \frac{kq^2}{md}} }\,.
$
 A másik matematikai megoldás pedig éppen a $V$ sebesség ellentettjének felel meg a kiindulóegyenletek szimmetriájából fakadóan:
 ${V = \frac{v-u}{2} + \sqrt{\frac{(u+v)^2}{4} + \frac{kq^2}{md}} }\,.
$
