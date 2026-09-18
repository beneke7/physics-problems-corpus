---
id: komal-P5622
source: komal
language: hu
translated: false
problem: komal-P5622
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás:**
 Mivel a két töltésből álló rendszerben csak belső erők hatnak, a teljes lendület időben állandó, azaz mindvégig zérus. Ezzel ekvivalens tulajdonság, hogy a rendszer tömegközéppontja végig mozdulatlan. A Coulomb-erők centrálisak is, így minden pillanatban a tömegközépponttól elfele mutatnak, és eredő forgatónyomatékot nem fejtenek ki. Ez pedig már implikálja a perdület megmaradását.
 Jelölje a keresett minimális sebességet $u$, a testek távolságát ennek elérésekor pedig $d$. A szélsőérték-tulajdonság következménye, hogy ebben a pillanatban a testek sebessége merőleges az őket összekötő szakaszra, így a perdületmegmaradás alakja:
 $mvb=mud.$
 Teljesül emellett az energiamegmaradás törvénye is:
 $2\cdot\frac{1}{2}mv^2=2\cdot\frac{1}{2}mu^2+\frac{kq^2}{d}.$
 Az egyenletekből $d$ kiküszöbölhető, az eredmény egy másodfokú egyenlet az $u$ változóra:
 $u^2+\frac{kq^2}{mvb}u-v^2=0.$
 A fizikailag releváns pozitív megoldásból adódik a végeredmény:
 $u=\sqrt{v^2+\left(\frac{kq^2}{2mvb}\right)^2}-\frac{kq^2}{2mvb}.$
