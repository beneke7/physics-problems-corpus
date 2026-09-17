---
id: komal-P5347
source: komal
language: hu
translated: false
problem: komal-P5347
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A test gyorsulása 4 s alatt 
 $\frac{20~\rm N}{2~\rm kg}=10~\frac{\rm m}{\rm s^2}$ 
 értékre nő, a közbenső időben tehát 
 $a(t)=k\cdot t$ 
 módon változik, ahol $k=2{,}5~\frac{\rm m}{\rm s^3}$ a mozgásra jellemző állandó. 
 $a)$ A test kezdeti gyorsulása nulla, 3 másodperc múlva $7{,}5~\frac{\rm m}{\rm s^2}$, a sebességnövekedés átlagos értéke a $0\le t\le t_1$ időintervallumban 
 $\overline{a}=3{,}75~\frac{\rm m}{\rm s^2}.$ 
 Mivel a gyorsulás az idővel arányosan növekszik, a sebességet számolhatjuk az átlagos gyorsulás és az idő szorzataként: 
 $v(3~\rm s)=\left(3{,}75~\frac{\rm m}{\rm s^2}\right)\cdot(3~{\rm s})=11{,}25~\frac{\rm m}{\rm s }.$ 
 $b)$ A $t$ idő alatt megtett $s(t)$ utat a $k$ állandó és $t$ együtt határozza meg. Mivel $k$ dimenziója m/s$^3$, az idő dimenziója másodperc, ezekből csak úgy kaphatunk méter dimenziójú mennyiséget, hogy a megtett út 
 $s(t)=\lambda\cdot kt^3,$ 
 ahol $\lambda$ egy dimenziótlan állandó. Tudjuk, hogy 
 $s(t_2)=s_2,\qquad\text{azaz}\qquad \frac{10}{3}~{\rm m}=\lambda\cdot \left(2{,}5~\frac{\rm m}{\rm s^3}\right)\cdot
(2~\rm s)^3,$ 
 a dimenziótlan állandó értéke: $\lambda=\frac{1}{6}.$ 
 Most már könnyen kiszámíthatjuk a 3 másodperc alatt megtett út hosszát: 
 $s(3~\rm s)=\frac{1}{6}\cdot \left(2{,}5~\frac{\rm m}{\rm s^3}\right)\cdot \left(3~\rm s\right)^3 =11{,}25~\rm m.$ 

 Megjegyzés. A feladat integrálszámítással is megoldható. Ha 
 $a(t)\equiv\frac{{\rm d}v(t)}{{\rm d}t}=k\cdot t,$ 
 akkor (a kezdeti feltételeket is figyelembe véve) 
 $v(t)\equiv\frac{{\rm d}s(t)}{{\rm d}t}=k\cdot \frac{t^2}{2}
\qquad\text{és}\qquad s(t) =k\cdot \frac{t^3}{6}.$
