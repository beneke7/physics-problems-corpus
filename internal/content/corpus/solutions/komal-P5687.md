---
id: komal-P5687
source: komal
language: hu
translated: false
problem: komal-P5687
figure_files: [komal-P5687-sol-fig1.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A golyók nullának vehető tehetetlenségi nyomatéka miatt az egyes fonalak meghosszabbítása a golyó középpontján kell, hogy áthaladjon. (Ha nem így lenne, akkor a fonalat feszítő erőnek lenne forgatónyomatéka a golyó középpontja körül, és ez nagyon (,,végtelen'') nagy szöggyorsulást eredményezne.) 
 Mind a négy golyó középpontja a mozgás során mindvégig $2r$ távolságban lesz a közös felfüggesztési ponttól. Válasszunk egy olyan koordináta-rendszert, amelynek egy-egy vízszintes tengelye az instabil kezdeti állapot négyzetének átlóival párhuzamos, a harmadik tengely pedig a felfüggesztési ponton áthaladó függőleges egyenes. Jelöljük az $x-z$ síkban kitérített piros golyók fonalainak a függőlegessel bezárt szögét $\alpha$-val, a másik két fonál szögét pedig $\beta$-val (lásd az ábrát ). Az első felülnézeti ábrarészlet a négyzet alaknak megfelelő kezdeti állapotot mutatja. A második felülnézeti és a két oldalnézeti ábrarészlet olyan helyzetet mutat, amikor a két piros golyó egymáshoz közelebb került (és emiatt függőlegesen kicsit lesüllyedtek), a kék golyók pedig eltávolodtak egymástól (miközben a középpontjuk kicsit megemelkedett). Ilyen elmozdulás során a piros golyók helyzeti energiája csökken, a kékeké pedig növekszik. Kérdés, hogy az egész rendszer helyzeti energiája kisebb-e, mint amennyi a kezdeti állapotban volt. Ha kisebb, akkor a kezdőállapot valóban instabil egyensúlyi állapot. 

 Ha a koordináta-rendszer kezdőpontját a közös felfüggesztési pontba helyezzük, akkor a golyók középpontját megadó vektorok 
 $\boldsymbol{r}_{1,3}=\left(\begin{matrix}\pm 2r\sin\alpha&\\0&\\-2r\cos\alpha&\end{matrix}\right)\qquad\textrm{és}\qquad\boldsymbol{r}_{2,4}=\left(\begin{matrix}0&\\ \pm 2r\sin\beta&\\-2r\cos\beta&\end{matrix}\right).$ 
 Az egymással érintkező (különböző színű) golyók középpontjának távolsága $2r$, így pl. 
 $\left(\boldsymbol{r}_1-\boldsymbol{r}_2\right)^2=(2r\sin\alpha)^2+(2r\sin\beta)^2+4r^2(\cos\alpha-\cos\beta)^2=4r^2,$ 
 vagyis 
 $(1)$ $\cos\alpha\cdot\cos\beta=\frac{1}{2}.$ 

 a) A kezdőállapotban (a négyzetes elrendeződésben) 
 $\cos\alpha=\cos\beta=\frac{1}{\sqrt{2}},\qquad\textrm{vagyis}\qquad\alpha=\beta=45^\circ.$ 
 Az $\alpha$ szög legkisebb értékénél a piros golyók érintkeznek egymással, ilyenkor 
 $(2)$ $\sin\alpha_\mathrm{min}=\frac{1}{2},\qquad\cos\alpha_\mathrm{min}=\frac{\sqrt{3}}{2},\qquad\alpha_\mathrm{min}=30^\circ.$ 
 A kék golyókat tartó fonalaknak a függőlegessel bezárt legnagyobb szögére (1) és (2) szerint fennáll: 
 $(3)$ $\cos\beta_\mathrm{max}=\frac{1}{\sqrt{3}},\qquad\textrm{azaz}\qquad\beta_\mathrm{max}\approx 54{,}7^\circ.$ 

 b) Az egész rendszer helyzeti energiája 
 $E_\mathrm{helyzeti}=-4mgr(\cos\alpha+\cos\beta)=-4mgr\left(\cos\alpha+\frac{1}{2\cos\alpha}\right)=$ 
 $=-4mgr\left(\sqrt{\cos\alpha}-\frac{1}{\sqrt{2\cos\alpha}}\right)^2-4\sqrt{2}\,mgr\leq -4\sqrt{2}mgr.$ 
 Látjuk, hogy a helyzeti energia az $\alpha=\beta=45^\circ$-os helyzetben, vagyis a kezdeti (négyzetes szimmetriát mutató) állapotban a legnagyobb, ez tehát egy instabil egyensúlyi helyzet. 
 A helyzeti energia függvénye a legkisebb értéket a piros (vagy a kék) golyók összeütközésekor, $\alpha=30^\circ$, $\beta=54{,}7^\circ$-nál (vagy a fordított helyzetben, a kék golyók összeütközésekor) veszi fel, és a nagysága 
 $E_\textrm{h,min}=-\frac{10}{\sqrt{3}}mgr.$ 
 A rendszer helyzeti energiájának csökkenése a teljes folyamat során 
 $\vert\varDelta E\vert=\left(\frac{10}{\sqrt{3}}-4\sqrt{2}\right)mgr\approx 0{,}12\,mgr,$ 
 legfeljebb ennyi lehet tehát a négy golyó összes mozgási energiája.

![solution figure](../../raw_html/komal_figures/komal-P5687-sol-fig1.png)
