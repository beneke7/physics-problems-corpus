---
id: komal-P4993
source: komal
language: hu
translated: false
problem: komal-P4993
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Egy $\ell$ hosszúságú nyílegyenes alagút közepe és a vége közötti magasságkülönbség az $R\gg\ell$ sugarú Föld felszínének közelében (a Pitagorasz-tétel szerint) 
 $\Delta h=R-\sqrt{R^2-(\ell/2)^2}.$ 
 Ezt az értéket konkrét számadatok mellett közvetlenül kiszámíthatjuk (az eredmény 0,0314 km), de egy azonos átalakítás felhasználásával paraméteresen is megadhatjuk: 
 $\Delta h=
\frac
{\left(R-\sqrt{R^2-(\ell/2)^2}\right) \left(R+\sqrt{R^2-(\ell/2)^2}\right)}
{{R+\sqrt{R^2-(\ell/2)^2}}}\approx \frac{\ell^2}{8R}=\frac{40^2}{8\cdot 6371}~\rm km=31~\rm m. $ 
 (A nevezőben szereplő gyökös kifejezést $R$-rel közelítettük.) 
 Az elképzelt alagút közepe felett tehát összesen 51 méter magasan áll a víz. 
 $b)$ Az alagút közepétől $x$ távolságban az alagút egyenese helyről helyre változó $\alpha$ szöggel tér el a ,,helyi függőlegestől'', és jó közelítéssel teljesül, hogy $\sin\alpha=x/R$. Ugyancsak jó közelítéssel állíthatjuk, hogy a nehézségi gyorsulás a Föld felszínének közelében állandónak, $g=
9{,}81~\rm m/s^2$ nagyságúnak vehető. Ebben a közelítésben a (mozdony nélkül, szabadon guruló) vagon mozgásegyenlete: 
 $a=-g\sin\alpha=-\frac{g}{R}x \equiv-\omega^2 x.$ 
 Ez egy olyan harmonikus rezgőmozgás egyenlete, amelynek periódusideje: 
 $T=\frac{2\pi}{\omega}=2\pi\sqrt{\frac{R}{g}}\approx 84~\text{perc}.$ 
 A kezdősebesség nélkül induló vagon egy fél periódusidő, vagyis 42  perc alatt teszi meg az utat az alagút egyik végétől a másikig. 
 $c)$ Az alagút közepén a sebesség (az $\ell/2$ amplitúdójú harmonikus rezgőmozgás maximális sebessége): 
 $v_\text{max}=\frac{\ell}{2}\omega=\frac{\ell}{2} \sqrt{\frac{g}{R}}=24{,}8~\frac{\rm m}{\rm s}=89{,}3~\frac{\rm km}{\rm h}.$ 
 Ugyanezt az eredményt a munkatételből is megkaphatjuk: 
 $\frac12mv_\text{max}^2=mg\Delta h=\frac{mg\ell^2}{8R},\qquad \text{vagyis} \qquad
 v_\text{max}=\frac{\ell}{2} \sqrt{\frac{g}{R}}.$ 

 Megjegyzés. Ha az elképzelt Földről azt is feltesszük, hogy a tömegeloszlása homogén, akkor belátható, hogy az egyenes pályán való (súrlódás- és közegellenállás-mentes) mozgás tetszőlegesen hosszú alagútban harmonikus rezgőmozgás, amelynek periódusideje az alagút hosszától függetlenül minden esetben 84 perc.
