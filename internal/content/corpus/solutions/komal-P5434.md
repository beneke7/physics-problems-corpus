---
id: komal-P5434
source: komal
language: hu
translated: false
problem: komal-P5434
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az áramerősség a kapcsoló zárásának $T$ időpontjában nulla, hiszen a tekercs önindukciója miatt nem tud hirtelen megindulni az áram. Emiatt (ha az áramerősség időben lineárisan változik)
 $I(t)=\lambda(t-T) \qquad (t>T),$
 ahol $\lambda$ (az egyik kérdezett mennyiség) az áramerősség növekedési üteme.
 Az ohmos ellenállásra jutó feszültség
 $U_1=RI(t)=R\lambda (t-T),$
 a tekercsben indukálódott feszültség pedig
 $U_2=L\frac{\Delta I(t)}{\Delta t}=L\lambda.$
 Fennáll, hogy
 $U(t)=U_1+U_2,$
 vagyis
 $U_0\frac{t}{t_0}=R\lambda (t-T)+L\lambda.$
 Ennek az összefüggésnek minden időpillanatban fenn kell állnia, például $t=0$ pillanatban
 $L\lambda-R\lambda T=0,\qquad \text{vagyis}\qquad T=\frac{L}{R},$
 továbbá $t$ együtthatója az összefüggés bal és jobb oldalán ugyanakkora kell legyen, azaz
 $\frac{U_0}{t_0}=R\lambda, \qquad \text{tehát}\qquad \lambda=\frac{U_0}{Rt_0}.$
