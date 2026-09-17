---
id: komal-P5568
source: komal
language: hu
translated: false
problem: komal-P5568
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A mágneses térben a töltés a Lorentz-erő hatására $\omega_\mathrm{c}=v/r_\mathrm{c}$ szögsebességgel $r_\mathrm{c}$ sugarú körpályán mozog: 
 $QB\omega_\mathrm{c}r_\mathrm{c}=m\omega_\mathrm{c}^2r_\mathrm{c},$ 
 amiből: 
 $\omega_\mathrm{c}=\frac{QB}{m},\quad r_\mathrm{c}=\frac{v}{\omega_\mathrm{c}}=\frac{mv}{QB}.$ 
 Megjegyzés. A c index a ciklotronra utal lásd: https://hu.wikipedia.org/wiki/Ciklotron 

 A periódusidő két részből áll: egy teljes kör (két félkör) befutása a körpályán és a két egyenes szakasz megtétele: 
$$\begin{align*}
 T &=t_1+t_2,\quad\textrm{ahol}\\
 t_1 &=\frac{2\pi}{\omega_\mathrm{c}},\quad t_2=\frac{2\left(d-2\sqrt{R^2-r_\mathrm{c}^2}\right)}{v},\quad\textrm{amiből}\\
 T &=\frac{2\pi m}{QB}+\frac{2d}{v}-4\sqrt{\left(\frac{R}{v}\right)^2-\left(\frac{m}{QB}\right)^2}. 
\end{align*}$$
 A geometria miatt $r_\mathrm{c}\leq R$, vagyis a minimális mágneses indukció értéke: 
 $B_\mathrm{min}=\frac{mv}{QR},$ 
 periodikus pálya csak $B\geq B_\mathrm{min}$ esetén alakul ki.
