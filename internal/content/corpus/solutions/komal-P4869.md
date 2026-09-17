---
id: komal-P4869
source: komal
language: hu
translated: false
problem: komal-P4869
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Ha a rugóállandó $D$, akkor fennáll 
 $F_1=D(\ell-d).$ 
 A félbevágott rugó rugóállandója $2D$, hiszen ugyanakkora erő hatására csak feleakkorát változik meg a hossza, mint az eredeti rugó tette volna. Két ilyen, egymással ,,párhuzamosan kapcsolt'' rugó $d$ hosszra történő összenyomásához 
 $F_2=2\cdot (2D)\cdot \left(\frac{\ell}{2}-d\right)=2\frac{ \ell-2d }{\ell-d}F_1$ 
 erőre van szükség. 
 Hasonló módon kapjuk, hogy az eredetileg $\ell=10d$ hosszúságú rugó $n$ részre vágása, majd a részek párhuzamos kapcsolása után a kérdéses erő 
 $F_n=n\cdot (nD)\cdot \left(\frac{\ell}{n}-d\right)=D\cdot (\ell n-dn^2).$ 
 Az utóbbi zárójelben álló kifejezés teljes négyzetté alakítható: 
 $\ell n-dn^2=\frac{\ell^2}{4d}-d\left(n-\frac{\ell}{2d}\right)^2\le \frac{\ell^2}{4d}.$ 
 Az egyenlőség $n=\ell/(2d)=5$ esetén áll fenn, és a szélsőértékhez tartozó erő: 
 $F_5=25\,dD=\frac{25}{9}\,F_1.$
