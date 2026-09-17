---
id: komal-P5218
source: komal
language: hu
translated: false
problem: komal-P5218
figure_files: [komal-P5218-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 $a)$ Mivel a derékszögű koordinátákkal $r$ és $\sin\varphi$ így fejezhető ki: 
 $r=\sqrt{x^2+y^2}; \qquad \sin\varphi=\frac{y}{\sqrt{x^2+y^2}},$ 
 az erővonal egyenlete: 
 $\sqrt{x^2+y^2}=r_0\frac{y^2}{x^2+y^2},$ 
 vagyis 
 $(1)$ $\left(x^2+y^2\right)^3=r_0^2\,y^4.$ 
 $b)$ A másneses indukcióvektorok az erővonalak érintője irányába mutatnak. Ha ez az irány az $y$ tengellyel párhuzamos, akkor az erővonal két közeli pontjának $x$ koordinátája jó közelítéssel megegyezik. 
 Fejezzük ki az $x$ koordinátát a $\varphi$ szög segítségével: 
 $x(\varphi)=r\cos\varphi=r_0\sin^2\varphi\,\cos\varphi=r_0(\cos\varphi-\cos^3\varphi).$ 
 Látszik, hogy érdemes bevezetni a $\xi\equiv\cos\varphi$ új változót ($-1\le\xi\le1$), ezzel kifejezve azt kapjuk, hogy az erővonal pontjaiban 
 $x(\xi)=r_0\left(\xi-\xi^3\right).$ 
 A mágneses indukcióvektor azon pontban (pontokban) merőleges az $x$ tengelyre, ahol a $x(\xi)$ függvény egymáshoz nagyon közeli pontokban – jó közelítéssel – ugyanazt az értéket veszi fel: 
 $x(\xi+\Delta\xi)\approx x(\xi),$ 
 vagyis 
 $(\xi+\Delta\xi)-(\xi+\Delta\xi)^3\approx \xi- \xi^3.$ 
 Innen algebrai átalakítások után azt kapjuk, hogy 
 $3\xi^2 =1-3\xi(\Delta\xi)-(\Delta\xi)^2\approx 1, \qquad \text{vagyis}\qquad \xi=\pm \frac{1}{\sqrt{3}}.$ 
 (A közelítés annál pontosabban teljesül, minél kisebb $\Delta\xi$.) 

 Megjegyzés. Ugyanezt az eredményt természetesen a differenciálszámítás formális szabályainak alkalmazásával is megkaphatjuk: 
 $x(\xi)'=1-3\xi^2=0 \quad \Rightarrow \quad \xi=\pm \frac{1}{\sqrt{3}}.$ 

 A mágneses indukcióvektor azon pontban (pontokban) merőleges az $x$ tengelyre, ahol $\cos\varphi=\pm \frac{1}{\sqrt{3}}.$ Ez összesen 4 helyen teljesül: 
 $\varphi=\pm 54{,}7^\circ, \qquad\text{vagy}\qquad \varphi=\pm 125{,}3^\circ.$ 
 Ezekben a pontokban 
 $r= r_0\sin^2\varphi=r_0\left(1-\xi^2\right)=\frac{2}{3}r_0=2~\text{m}.$ 
 A megfelelő derékszögű koordináták: 
 $x=r\cos\varphi =\pm \frac{2}{3\sqrt{3}}r_0\approx \pm1{,}15~\rm m, $ 
 $y=r\sin\varphi=\pm \frac{2\sqrt{2}} {3\sqrt{3}}r_0\approx \pm1{,}63~\rm m. $ 

 Az $r_0=3$ m-nek megfelelő mágneses erővonalakon tehát a mágneses indukcióvektor az ábrán látható $P_1$, $P_2$, $P_3$ és $P_4$ pontban merőleges a mágnestű irányára. 

**II. megoldás.**
 Fejezzük ki az (1) képletből $x$-et $y$ függvényében: 
 $(2)$ $x(y)=\sqrt{r_0^{\frac23} \,y^{\frac43}-y^2}.$ 
 Ahol ennek a függvénynek a deriváltja nulla, ott lesz a mágneses indukcióvektor merőleges a mágnestűre (vagyis az $x$ tengelyre). A derivált a differenciálszámítás szabályait követve, esetleg internetes segítséggel számítható ki: 
 $(3)$ $\frac{{\rm d}x}{{\rm d}y}=
\frac{1}{2\sqrt{r_0^{\frac23} \,y^{\frac43}-y^2}}
\left(r_0^{\frac23} \,y^{\frac13}\frac{4}{3}-2y \right)=0,\quad\text{vagyis ha}\quad y^2=\left(\frac23\right)^3r_0^2.$ 
 Ezt (2)-be visszahelyettesítve 
 $(4)$ $x^2=\frac{1}{3} \left(\frac23r_0\right)^2$ 
 adódik. (3)-t (4)-gyel elosztva az 
 $\frac{y^2}{x^2}=\tg^2\varphi=2, \qquad \tg\varphi=\pm \sqrt{2},\quad \varphi=\pm 54{,}7^\circ \quad\text{vagy}\quad \varphi=\pm 125{,}3^\circ.$ 
 Ezeknek a szögeknek az $r=\tfrac{2}{3}r_0=2~$m-es távolság felel meg. A megfelelő derékszögű koordináták: 
 $x= \pm \frac{2}{3\sqrt{3}}r_0\approx \pm1{,}15~{\rm m}\quad \text{és}\quad
 y=\pm \frac{2\sqrt{2}} {3\sqrt{3}}r_0\approx \pm1{,}63~\rm m. $ 

**III. megoldás.**
 Számítógéppel kirajzoltatva az áramvonal (1)-nek megfelelő görbéjét (lásd az I. megoldás ábráját), arról – közelítőleg – leolvashatjuk a kérdéses pontok derékszögű koordinátáit. 

**IV. megoldás.**
 $c)$ Mágnességgel foglalkozó szakkönyvekben (pl. Budó Ágoston: Kísérleti fizika II. kötet 26. old.) megtalálható, hogy egy kis méretű (pontszerűnek tekinthető) mágneses dipólus indukcióvektora az $\boldsymbol r$ helyen így adható meg: 
 ${\boldsymbol B}(\boldsymbol r)=\text{állandó}\cdot
\frac{3({\boldsymbol m}{\boldsymbol r}){\boldsymbol r}-{\boldsymbol m}\,r^2}{r^5},$ 
 ahol $\boldsymbol m$ a dipólus irányába mutató egységvektor. 
 A mágneses indukció vektora azon a helyen lesz merőleges ${\boldsymbol m}$-re, ahol a ${\boldsymbol B}{\boldsymbol m}$ skalárszorzat nulla, vagyis ahol 
 $3({\boldsymbol m}{\boldsymbol r})^2\equiv 3r^2\cos^2\varphi=r^2,$ 
 azaz 
 $\cos\varphi=\pm \frac{1}{\sqrt{3}}.$ 
 Ez $\varphi=\pm 54{,}7^\circ$ és $\varphi=\pm 125{,}3^\circ$-nál teljesül, és ezeken a helyeken $r=\tfrac23 \,r_0=2$ m, továbbá $x=\pm 1{,}15~{\rm m}$, illetve $y=\pm 1{,}63~{\rm m}$.

![solution figure](../../raw_html/komal_figures/komal-P5218-sol-fig1.gif)
