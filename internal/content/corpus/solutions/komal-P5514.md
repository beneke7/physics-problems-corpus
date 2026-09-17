---
id: komal-P5514
source: komal
language: hu
translated: false
problem: komal-P5514
figure_files: [komal-P5514-sol-fig1.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Vízszintes síkon súrlódásmentesen mozog a $q$ töltés, vagyis a földi súlyerővel a megoldás során nem kell törődnünk. Mivel a töltések közti elektrosztatikus vonzóerő helyfüggése meg­egyezik a gravitációéval, a mozgás leírására használhatjuk a Kepler-törvényeket: a mozgó töltés ellipszis- vagy körpályán fog keringeni a rögzített töltés körül (lásd az ábrát ). 

 $a)$ Amikor a töltött test $v_0$ sebességgel $r_0$ sugarú körpályán mozog, akkor: 
 $\frac{mv_0^2}{r_0}=k\frac{qQ}{r_0^2},\qquad\textrm{ vagyis} \qquad v_0=\sqrt{\frac{kqQ}{mr_0}}.$ 
 A feladatban éppen ekkora, a testeket összekötő egyenesre (vezérsugárra) merőleges kezdeti sebességet adtak meg, tehát éppen a körpálya valósul meg. A pálya az $AB$ egyenest egy félkörív megtétele után a $C$ pontban $t_a=\pi r_0/v_0$ idő múlva éri el. 

 $b)$ Ettől kisebb kezdősebesség esetén a pálya ellipszis lesz. A pálya és az $AB$ egyenes metszéspontjai ($B$ és $D$) a pálya aphélium (naptávol) és perihélium (napközel) pontjai. A sebesség csak ebben a két pontban merőleges a vezérsugárra. Az első pontban a test távolsága és sebessége $r_1=r_0$, $v_1=\frac{1}{2}v_0$, a másodikban $r_2$, $v_2$. A kérdezett időarány a fél keringési idők aránya, amit Kepler III. törvényéből tudnánk kiszámolni, ha ismernénk az ellipszispálya nagytengelyének hosszát. Meg kell tehát határoznunk $r_2$-t. 
 Az ismeretlen $r_2$ és $v_2$ mennyiségekre két megmaradási törvényt tudunk felírni. A perdületmegmaradást: 
 $m v_1 r_1=m v_2 r_2,$ 
 ami ebben az alakban csak $B$-ben és $D$-ben érvényes; valamint az energiamegmaradást: 
 $\frac{1}{2}mv_1^2-\frac{kqQ}{r_1}=\frac{1}{2}mv_2^2-\frac{kqQ}{r_2},$ 
 ami a pálya mentén végig teljesül. Rendezzük át az utóbbi egyenletet, és használjuk a töltések és a tömeg helyett inkább a körpálya $r_0$ és $v_0$ paramétereit: 
 $2v_0^2 r_0 \bigg(\frac{1}{r_2}-\frac{1}{r_1}\bigg) = v_2^2 - v_1^2.$ 
 Helyettesítsük be a perdületmegmaradást kifejező $\displaystyle v_2=\frac{v_1r_1}{r_2}$-t: 
 $2v_0^2\frac{r_0}{r_1}\bigg(\frac{r_1}{r_2}-1\bigg) = v_1^2\Bigg(\bigg(\frac{r_1}{r_2}\bigg)^2 -1\Bigg).$ 
 Az egyenletnek könnyen megtalálható, de semmitmondó (triviális) gyöke az $r_2=r_1$, ami magának a $B$ pontnak a távolsága. Minket a másik $r_2\ne r_1$ gyök érdekel, ezért eloszthatjuk az egyenletet $\displaystyle \bigg(\frac{r_1}{r_2}-1\bigg)$-gyel: 
 $2v_0^2\frac{r_0}{r_1} = v_1^2\bigg(\frac{r_1}{r_2}+1\bigg).$ 
 Helyettesítsük be a megadott $r_1=r_0$ és $v_1=\frac{1}{2}v_0$ kezdeti értékeket! 
 $2v_0^2 = \bigg(\frac{v_0}{2}\bigg)^2\bigg(\frac{r_1}{r_2}+1\bigg),$ 
 amiből az $AD$ távolság: $r_2=\frac{1}{7}r_0$. Az ellipszis és a körpálya nagytengelyeinek aránya tehát 
 $\frac{1+\frac{1}{7}}{2} = \frac{4}{7},$ 
 a (fél) keringési időké pedig Kepler III. törvénye szerint 
 $\bigg(\frac{4}{7}\bigg)^{3/2}\approx 0{,}43.$

![solution figure](../../raw_html/komal_figures/komal-P5514-sol-fig1.png)
