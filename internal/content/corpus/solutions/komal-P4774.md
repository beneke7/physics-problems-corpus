---
id: komal-P4774
source: komal
language: hu
translated: false
problem: komal-P4774
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Első gondolatunk az lehet, hogy a gyöngy lerepülésének feltétele, hogy a pályájának tetőpontján éppen elváljon az ütközőtől. Az ebből a feltételből kapható naiv 
 $f>\frac1{2\pi}\sqrt{\frac{g}{\theta_0^2d}}
$ 
 egyenlőtlenség azonban hibás! A helyes eredményhez írjuk fel a gyöngyre ható eredő erő függőleges komponensét az idő függvényében, és képezzük ennek időbeli átlagát! A kis amplitúdójú harmonikus rezgőmozgást végzó gyöngy mozgásegyenletéből leolvashatjuk, hogy (az ütközőtől már kicsit eltávolodott) gyöngyre ható (a rúd által kifejtett) kényszererő függőlegesen felfelé mutató komponense 
 $F(t)=m\theta_0^2 \omega^2 d \sin^2(\omega t).$ 
 Ha ennek egy periódusra vett átlagértéke nagyobb, mint $mg$, akkor a gyöngy lerepül. Mivel $\sin^2(\omega t)$ átlagértéke 1/2 (lásd pl. a váltóáram effektív értékénél alkalmazott gondolatmenetet), a lerepülés feltétele: 
 $f>\frac1{2\pi}\sqrt{\frac{2g}{\theta_0^2d}}=\sqrt2\cdot f_\text{naiv}.
$
