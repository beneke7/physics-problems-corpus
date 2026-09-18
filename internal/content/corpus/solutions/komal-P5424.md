---
id: komal-P5424
source: komal
language: hu
translated: false
problem: komal-P5424
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük az $A$ területű, $\ell$ lemeztávolságú, levegőben (gyakorlatilag vákuumban) elhelyezkedő síkkondenzátor $\varepsilon_0 A/\ell$ kapacitását $C_0$-lal.
 Az 5 fémlemez által határolt 4 térrész 4 darab sorosan kapcsolt kondenzátornak tekinthető. Ezek közül a balról az első és a harmadik kondenzátor kapacitása ugyanakkora:
 $C_1=C_3=C_0. $
 A második egység két párhuzamosan kapcsolt kondenzátornak, a negyedik pedig két sorosan kapcsolt kondenzátornak tekinthető. Mivel a kapacitás a lemezek területével és a relatív dielektromos állandóval egyenesen, a lemezek távolságával pedig fordítottan arányos, ezt kapjuk:
 $C_2=\frac{1}{4}\left(1+\varepsilon_{\rm r}\right)C_0,$
 továbbá
 $C_4=\left(1+\frac{1}{\varepsilon_{\rm r}}\right)^{-1}C_0=\frac{\varepsilon_{\rm r}}{1+\varepsilon_{\rm r}}C_0.$
 Az eredő kapacitás ezek szerint
 $C_\text{eredő}=\left(\frac{1}{C_1} +\frac{1}{C_2}+\frac{1}{C_3}+\frac{1}{C_4}\right)^{-1}C_0=
\frac{\varepsilon_{\rm r}(1+\varepsilon_{\rm r})}{3\varepsilon^2_{\rm r}+8\varepsilon_{\rm
r}+1}\,\frac{\varepsilon_0A}{\ell}.$
