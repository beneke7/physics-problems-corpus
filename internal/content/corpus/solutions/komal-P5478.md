---
id: komal-P5478
source: komal
language: hu
translated: false
problem: komal-P5478
figure_files: [komal-P5478-sol-fig1.jpg, komal-P5478-sol-fig2.jpg, komal-P5478-sol-fig3.jpg, komal-P5478-sol-fig4.jpg, komal-P5478-sol-fig5.jpg]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás**
. Vázlatosan ábrázoltuk a két elrendezést. A lencse domború oldalának görbületi sugarát jelöljük $R$-rel. 

 A feladatot kétféle módon is megoldjuk, egyszer a Snellius–Descartes-törvény alkalmazásával, majd pedig a Fermat-elv felhasználásával levezethető általánosított leképezési törvény segítségével. 

**I. megoldás**
.Tekintsük alaphelyzetnek azt, amikor a lencsét mindkét oldalról azonos közeg határolja, és vizsgáljuk meg, hogyan változnak a fókusztávolságok, ha a sík oldal felőli közeget másmilyenre cseréljük! 
 $a)$ Amikor a lencse mindkét oldalán levegő van, az $F_{\rm a,1}$ és $F_{\rm a,2}$ fókuszpontok szimmetrikusan, a lencsétől $f_{\rm a}$ távolságra helyezkednek el. Ha a sík felület felőli térrészt vízzel töltjük ki, a domború oldal felőli fókuszpont pozíciója nem változik, mert a sík felőli oldalról a tengellyel párhuzamosan érkező sugarak törés nélkül lépnek be az üvegbe, következésképp kilépéskor ugyanolyan szögben törnek meg, akár levegő, akár víz van a belépő (sík) oldalon. 

 1. ábra 

 A domború oldal felől a tengellyel párhuzamosan érkező sugarak útja a lencsében független a sík oldal felőli határoló közegtől, csak a kilépés szöge függ attól ( 1. ábra ). A vákuumra (levegőre) vonatkoztatott törésmutatókat értelemszerűen $n_{\rm ü}$-vel és $n_{\rm v}$-vel jelölve, és kihasználva, hogy az üveg vízre vonatkoztatott törésmutatója $n_{\rm üveg}/n_{\rm víz}$, a 2. ábrán jelölt szögekre (amelyek elég kicsinyek ahhoz, hogy az $x\approx \sin x\approx \tan x$ közelítést alkalmazzuk), az 
 $\frac{\alpha}{\gamma}=n_{\rm üveg},\qquad\textrm{illetve}\qquad\frac{\beta}{\gamma}=\frac{n_{\rm üveg}}{n_{\rm víz}}
 $ 
 összefüggéseket írhatjuk fel. 

 2. ábra 

 Ennek megfelelően a vízben az $F_{\rm{a,2}}^{\prime}$ fókuszpont, ahogy azt az ábráról leolvashatjuk, a lencsétől 
 $f_a^{\prime}=\frac{\alpha}{\beta}f_a
 $ 
 távolságra kerül, azaz 
 $\frac{f_a^{\prime}}{f_a}=\frac{\alpha}{\beta}=n_{\rm víz}=\frac43.
 $ 
 $b)$ Ez a kérdés analóg az $a)$ kérdéssel, ha alaphelyzetnek azt tekintjük, amikor a lencsét mindkét oldalról víz határolja, és ehhez viszonyítva vizsgáljuk azt az esetet, amikor a sík oldal felől levegő van. A jelöléseket a 3. ábra magyarázza: $F_{b,1}$ és $F_{b,2}$ a fókuszpontok a feltételezett alaphelyzetben, $f_b$ a távolságuk a lencsétől, $F_{b,2}^{\prime}$ és $f_b^{\prime}$ pedig a sík oldal felőli fókuszpont és fókusztávolság a kérdéses helyzetben. 

 3. ábra 

 Az előző gondolatmenetet megismételve 
 $\frac{\delta}{\varepsilon}=\frac{1}{n_{\rm víz}}
$ 
 adódik, ahonnan 
 $\frac{f_{b}^{\prime}}{f_{b}}=\frac{1}{n_{\rm víz}}=\frac34.
$ 
 Megjegyzés. Megállapítható, hogy mindkét esetben azon az oldalon, ahol a víz van, a fókusztávolság $n_{\rm víz}$-szer nagyobb, mint a másikon. Ugyanakkor az nem igaz, hogy a vízes és a levegős oldalak felcserélésével a két fókusztávolság egyszerűen helyet cserélne, ugyanis a sík-domború vékony lencsékre vonatkozó képlet alapján (ha a domború oldal sugara $R$), akkor 
 $f_{\rm a}=\frac{R}{(n_{\rm üveg}-1)}, \qquad\textrm{így}\qquad f_{\rm a}^{\prime}=\frac{n_{\rm víz}R}{(n_{\rm üveg}-1)},
$ 
 míg 
 $f_{\rm b}=\frac{n_{\rm víz}R}{(n_{\rm üveg}-n_{\rm víz})}, \qquad\textrm{tehát}\qquad f_{\rm b}^{\prime}=\frac{R}{(n_{\rm üveg}-n_{\rm víz})}.
$ 

**II. megoldás**
. Tekintsük a vékony lencsék leképezési törvényét abban az általános esetben, amikor a lencse $R_1$ görbületi sugarú oldalán (mondjuk a bal oldalon) $n_1$ törésmutatójú közeg, a másik, $R_2$ görbületi sugarú (jobb) oldalán pedig $n_2$ törésmutatójú közeg található, és a lencse anyagának törésmutatója $n$. A lencse bal oldalán, a lencsétől $t$ távolságra egy tárgy található, a másik oldalon pedig $k$ távolságra keletkezik a tárgy képe ( 4. ábra ). 

 4. ábra 

 A Fermat-elv alkalmazásával (lásd Woynarovich Ferenc: A Fermat-elv egy alkalmazása c. cikkét a KöMaL honlapján, https://www.komal.hu/cikkek/cikklista.h.shtml) viszonylag könnyen megkaphatjuk, hogy fennáll: 
 $(*)$ $\frac{n_1}{t}+\frac{n_2}{k}=\frac{n-n_1}{R_1}+\frac{n-n_2}{R_2}.$ 
 Ebből az összefüggésből (a megfelelő törésmutatók és görbületi sugarak behelyettesítése után) meghatározhatjuk mind a négy esetben a fókusztávolságot. A sík görbületi sugarát és a párhuzamosan érkező (illetve távozó) fénysugarak tárgy-, illetve képtávolságát ,,végtelen nagynak'' tekintjük, és ezek reciproka helyére nullát írunk. 
 $a)$ Legyen a lencse sík oldalán víz, a domború oldalán levegő. Ekkor $n_1=1$ és $n_2=n_{\rm víz}=\tfrac43$, $n=n_{\rm üveg }=\tfrac32$, továbbá $R_1=R$ és $R_2=\infty$. Ha a jobbra haladó fény párhuzamos nyalábban hagyja el a lencsét, akkor $k=\infty$, $t=f_a$, és így $(*)$ alapján 
 $\frac1{f_a}=\frac{(3/2)-1}{R},$ 
 azaz a levegő oldalán a fókusztávolság 
 $f_a=2R.$ 
 Ha viszont $t=\infty$ és $k=f_a',$ akkor 
 $\frac{4/3}{f_a'}=\frac{(3/2)-1}{R},$ 
 tehát a víz felöli oldalon a fókusztávolság 
 $f_a'=\frac{8}{3} R.$ 
 Látjuk, hogy $\frac{f_a'}{f_a}=\frac43.$ 
 $b)$ A határoló közegeket felcserélve $n_1=\tfrac43$ és $n_2=1$ törésmutatókkal kell számoljunk. Most a víz oldalán a fókusztávolság $f_b=8R$, a levegő oldalán pedig $f_b'=6R$, az arányuk tehát $\frac{f_b'}{f_b}=\frac34.$

![solution figure](../../raw_html/komal_figures/komal-P5478-sol-fig1.jpg)

![solution figure](../../raw_html/komal_figures/komal-P5478-sol-fig2.jpg)

![solution figure](../../raw_html/komal_figures/komal-P5478-sol-fig3.jpg)

![solution figure](../../raw_html/komal_figures/komal-P5478-sol-fig4.jpg)

![solution figure](../../raw_html/komal_figures/komal-P5478-sol-fig5.jpg)
