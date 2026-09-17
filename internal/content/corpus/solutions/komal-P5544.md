---
id: komal-P5544
source: komal
language: hu
translated: false
problem: komal-P5544
figure_files: [komal-P5544-sol-fig1.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Amint az köztudott, egy a vízszinteshez képest $\alpha$ szögben $v_0$ sebességgel kilőtt lövedék 
 $s=\frac{2v_0^2\sin{\alpha}\cos{\alpha}}{g}$ 
 távolságra repül. Esetünkben $v_0=u_0\cos\alpha$ (ahol $u_0$-lal jelöltük a $20\,\mathrm{m/s}$ értéket), tehát 
 $s=\frac{2u_0^2\sin{\alpha}\cos^3{\alpha}}{g}.$ 
 Ennek a maximális értékét kell meghatároznunk. Erre több lehetőségünk is van. A szélsőérték helyét és értékét megkereshetjük numerikusan, deriválással, a szélsőérték helyére vonatkozó algebrai megfontolások és geometriai érvek alapján is. Itt ez utóbbi két lehetőséget mutatjuk be. 

 I. Legyen 
 $y=\frac{sg}{2u_0^2}\qquad\textrm{és}\qquad\cos^2\alpha=x.$ 
 A fentiek alapján 
 $x^4-x^3+y^2=0.$ 
 Ennek az egyenletnek két különböző valós megoldása van, ha $|y|<{s_\mathrm{max}g}/{2u_0^2}$, hiszen egy $s_\mathrm{max}$-nál kisebb távolságra egy laposabb és egy meredekebb szögben is el lehet lőni, nincs valós megoldása, ha $|y|>{s_\mathrm{max}g}/{2u_0^2}$, a közbülső $y=y_\mathrm{m}={s_\mathrm{max}g}/{2u_0^2}$ értéknél pedig az egyetlen valós megoldás az 
 $x^4-x^3+y_\mathrm{m}^2=0$ 
 egyenlet kétszeres gyöke. Ennek az egyenletnek tehát a ,,gyöktényezős" alakja (a kétszeres gyök helyét $\xi$-vel jelölve) 
 $(x-\xi)^2(x^2-bx+c)=0,$ 
 ahol a második zárójel értéke a valós tengelyen sehol nem nulla, azaz $4c>b^2$. A szorzást elvégezve, és a két egyenlet együtthatóit összehasonlítva (a $\xi=0$ lehetőséget elvetve) a 
$$\begin{align*}
 2\xi+b&=1,\\
 c+\xi^2+2b\xi&=0,\\
 b\xi+2c&=0,\\
 \xi^2c&=y_\mathrm{m}^2 
\end{align*}$$
 egyenletrendszert kapjuk, amelynek a megoldása 
 $\xi=\frac{3}{4},\qquad b=-\frac{1}{2},\qquad c=\frac{3}{16}\qquad\mbox{és}\qquad y_\mathrm{m}=\frac{3\sqrt{3}}{16}.$ 
 A maximum $\alpha=\arccos{\sqrt{\xi}}=30^{\circ}$-nál van, és 
 $s_\mathrm{max}=y_\mathrm{m}\frac{2u_0^2}{g}=\frac{3\sqrt{3}}{16}\frac{2u_0^2}{g}=26\,\mathrm{m}.$ 

 Megjegyzés. Egy negyedfokú egyenlet általában nem oldható meg ilyen szép zárt alakban. Az, hogy ez most mégis lehetséges, annak köszönhető, hogy egy kettős gyököt keresünk, és az egyenletben az $x$ és az $x^2$ együtthatója nulla. 

 II. A távolság szögfüggésének vizsgálatakor térjünk át $\alpha$ helyett a $2\alpha$ változóra: 
 $s=\frac{u_0^2}{2g}\left(1+\cos2\alpha\right)\sin2\alpha.$ 
 Vegyük észre, hogy ez éppen az $r=\sqrt{{u_0^2}/{2g}}$ sugarú körbe az a) ábra szerint berajzolt háromszög területe, ami akkor a legnagyobb, amikor a háromszög pont szabályos, azaz $2\alpha=60^\circ$. Ez könnyen belátható: egy adott körbe írt szabálytalan, vagy akár egyenlő szárú, de nem egyenlő oldalú háromszög területe mindig növelhető valamelyik csúcsának az alkalmas elmozdításával, ahogy azt a b) ábra mutatja.

![solution figure](../../raw_html/komal_figures/komal-P5544-sol-fig1.png)
