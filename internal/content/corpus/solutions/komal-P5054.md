---
id: komal-P5054
source: komal
language: hu
translated: false
problem: komal-P5054
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Ha $hf\ll Mc^2$, akkor a gerjesztési energia jó közelítéssel $hf$-fel egyezik meg. Pontosabb eredményt kapunk, ha figyelembe vesszük, hogy a gerjesztett atommag a gamma-kvantum elnyelésekor $p=hf/c$ impulzusra is szert tesz, amihez $p^2/(2M)$ mozgási energia tartozik. (Itt a mozgási energia nemrelativisztikus képletét alkalmaztuk, és a képletben nem vettük figyelembe az $M$ tömeg megváltozását.) Az energia mérlegegyenlete ebben a közelítésben: 
 $Mc^2+hf=(M+\Delta M)c^2+\frac{(hf)^2}{2Mc^2},$ 
 ahonnan a gerjesztési energia: 
 $\Delta E= {c^2}{\Delta M}=hf\left(1-\frac{hf}{2Mc^2}\right).$ 
 Amennyiben $hf$ összemérhető $Mc^2$-tel, akkor a relativisztikus energia- és impulzusképletet kell alkalmaznunk. A meglökött, gerjesztett atommag teljes energiája és impulzusa a laboratóriumi rendszerben: 
 $E'=Mc^2+hf,\qquad p'=\frac{hf}{c},$ 
 a nyugalmi tömege pedig 
 $M'=\sqrt{\left(\frac{E' }{c^2}\right)^2-\left(\frac{p' }{c}\right)^2}=M\sqrt{1+\frac{2hf}{Mc^2}}.$ 
 A nyugalmi tömeg növekedésének megfelelő gerjesztési energia: 
 $\Delta E=(M'-M)c^2=Mc^2\left( \sqrt{1+\frac{2hf}{Mc^2}}-1\right).$ 
 Amennyiben a fenti négyzetgyökjel alatti kifejezés közel 1, akkor a 
 $\sqrt{1+\varepsilon}\approx 1+\frac{\varepsilon}{2}-\frac{\varepsilon^2}{8}$ 
 közelítő képlet alkalmazásával visszakapjuk a nemrelativisztikus 
 $\Delta E\approx hf\left(1-\frac{hf}{2Mc^2}\right)$ 
 eredményt.
