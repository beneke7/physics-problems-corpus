---
id: komal-P5345
source: komal
language: hu
translated: false
problem: komal-P5345
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az energiamegmaradás tétele szerint a golyó sebessége a $C$ pontban 
 $v=\sqrt{2g(R-r-r\cos\alpha)},$ 
 amelynek függőleges és vízszintes komponense 
 $v_\text{felfelé}=v\sin\alpha,\quad v_\text{balra}=v\cos\alpha.$ 
 A golyó valamekkora $t$ idő alatt eljut a $D$ pontba, ahol a sebessége ugyancsak $v$ lesz. Fennáll tehát, hogy 
 $gt=2v_\text{felfelé},$ 
 illetve 
 $v_\text{balra}t=2r\sin\alpha.$ 
 (Feltehetjük, hogy $\alpha>0$, tehát tényleges ferde hajításról van szó.) Ezekből az összefüggésekből $t$ és $v$ kiküszölése után ezt kapjuk: 
 $\cos^2\alpha-\left(\frac{R}{r}-1\right)\cos\alpha+\frac{1}{2}=0.$ 
 $a)$ Amennyiben $\frac{R}{r}=\frac{5}{2}$, a fenti másodfokú egyenletből kapjuk, hogy $\cos\alpha=0{,}5 $, azaz $\alpha= 60^\circ$. 
 $b)$ Bevezetve a $\lambda=R/r$ jelölést, az $\alpha$ szöget meghatározó egyenlet: 
 $\cos^2\alpha-(\lambda-1)\cos\alpha+\frac12=0,$ 
 tehát 
 $\cos\alpha=
\frac{\lambda-1\pm \sqrt{\lambda^2-2\lambda-1}}{2}.$ 
 A négyzetgyök alatt nem állhat negatív szám, vagyis $\lambda
=\frac{R}{r}\ge 1+\sqrt{2}\approx 2{,}41$. A legkisebb arányhoz $\alpha=45^\circ$-os szög tartozik. 
 A $\cos\alpha$-ra nézve másodfokú egyenletnek $\lambda>1+\sqrt{2}$ esetén két valós gyöke van. Az egyik gyök mindig kisebb 1-nél, a nagyobb gyök azonban $\lambda>\frac52$ esetén 1-nél nagyobb, tehát számunkra érdektelen. 
 Összefoglalva: Ha $1+\sqrt{2}<\frac{R}{r}<\frac{5}{2},$ akkor minden $R/r$ arányszámhoz kétféle $\alpha$ is tartozhat. $\frac{R}{r}>\frac{5}{2}$, illetve $\frac{R}{r}=1+\sqrt{2}$ esetén csak egyetlen $\alpha$ szög mellett mehet végbe a mozgás, míg $\frac{R}{r}<1+\sqrt{2}$ esetén nincs olyan $\alpha$ szög, ami mellett a leírt mozgás megvalósulhatna.
