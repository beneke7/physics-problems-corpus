---
id: komal-P5655
source: komal
language: hu
translated: false
problem: komal-P5655
figure_files: [komal-P5655-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Maximális erősítés azokban a pontokban van, ahova a két forrásból érkező hullámok azonos fázisban érkeznek, azaz a két út különbsége a hullámhossz egész számú többszöröse. 

 Az ábra jelöléseivel 
 $r_1-r_2=n\lambda,$ 
 azaz, az $r$-eket a koszinusz tétel segítségével kifejezve 
 $\sqrt{R^2+\left(\frac{d}{2}\right)^2-Rd\cos\vartheta}-\sqrt{R^2+\left(\frac{d}{2}\right)^2+Rd\cos\vartheta}=n\lambda.$ 
 Ebből jól megválasztott négyzetre emelések után a $\cos\vartheta$ kifejezhető: 
 $\cos\vartheta=\sqrt{1+\left(\frac{d}{2R}\right)^2-\left(\frac{n\lambda}{2R}\right)^2}\left(\frac{n\lambda}{d}\right).$ 
 Feladatunkban $R\gg d,\lambda$, tehát a négyzetgyök alatti törtek jó közelítéssel elhagyhatók az egy mellett, így 
 $\cos\vartheta\cong\frac{n\lambda}{d}.$ 
 Ennek $\vartheta$-ra a $\lambda/d=1/2$ miatt csak $n=0,\,\pm 1\,\textrm{és}\,\pm 2$ mellett van megoldása. A lehetséges szögek (irányok) tehát $\vartheta=0,\,\pm\pi/3,\,\pm\pi/2,\,\pm 2\pi/3\,\textrm{és}\,\pi$. A megfelelő pontokat az ábrán piros körökkel jelöltük. 

 Megjegyzés. Az első egyenletünkkel azonos szerkezetű $\left|r_1-r_2\right|=2a$ egyenletek olyan hiperbolákat határoznak meg, amelyek két fókuszpontja a két hangforrás ($F_1$ és $F_2$), azaz $d=2c$. Általános $R$ mellett a keresett pontok az $a=n\lambda/2$-vel megadható hiperbolák és a kör metszéspontjai. $R\gg c$ esetén a hiperbolák a végérintőikkel helyettesíthetők. Esetünkben csak az $n=\pm 1$ által meghatározott ($a=c/2$ valós tengelyű) hiperbola-pár ,,normális", az $n=0$-hoz, és az $n=\pm 2$-höz tartozó hiperbolák, amikor is $a=0$ illetve $a=c$, elfajultak.

![solution figure](../../raw_html/komal_figures/komal-P5655-sol-fig1.gif)
