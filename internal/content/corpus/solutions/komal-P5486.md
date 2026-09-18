---
id: komal-P5486
source: komal
language: hu
translated: false
problem: komal-P5486
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás**
. $a$) Először is megállapíthatjuk, hogy ha az egyik kondenzátor töltése $q$, akkor a másiké $q_0 – q$. Vegyük észre, hogy maximális áramerősség esetén a két kondenzátor együttes feszültsége nulla, mivel árammaximumkor az indukált feszültség nulla. A két kondenzátor együttes feszültsége akkor nulla, ha mindkettőnek $q_0/2$ a töltése, mivel ilyenkor mindkettő feszültsége $q_0/2C$, azonban ellentétes polaritással vannak kötve. Az energiamegmaradás törvénye szerint
 $\frac{1}{2} \frac{q_0^2}{C}=2\left( \frac{1}{2} \frac{\left( \frac{q_0}{2} \right)^2}{C}\right) + \frac{1}{2} LI_\textrm{max}^2 ,$
 amiből
 $I_\textrm{max}=\frac{q_0}{\sqrt{2LC}}.$
 $b$) Az áram maximuma a bekapcsolás után negyedperiódussal jön létre, amikor mindkét (ellentétes polaritású) kondenzátor töltése $q_0/2$. A sorosan kapcsolt kondenzátorok eredő kapacitása $C^*=C/2$, így a rezgőkör periódusideje
 $T==2\pi \sqrt {LC^*} =2\pi \sqrt{\frac{LC}{2}}.$
 Az első árammaximum eléréséhez szükséges idő tehát
 $t=\frac{T}{4}=\frac{\pi}{4}\sqrt{2LC}.$
 Érdekességként vehetjük még észre azt is, hogy az energia a két kondenzátor között billeg úgy, hogy amikor a töltés fele-fele arányban oszlik meg, akkor a rendszer teljes energiájának a fele esik a tekercsre, negyede-negyede pedig a két kondenzátorra. Amikor tehát maximális áramerősség esetén a tekercs energiája maximális, akkor ez a rendszer teljes energiájának mindössze a fele.
