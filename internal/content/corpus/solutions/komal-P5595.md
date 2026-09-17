---
id: komal-P5595
source: komal
language: hu
translated: false
problem: komal-P5595
figure_files: [komal-P5595-sol-fig1.gif, komal-P5595-sol-fig2.gif, komal-P5595-sol-fig3.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Az első leképzésnél a tárgytávolság (a $T$ pont és az egyik tükör távolsága) legyen $t_1$. Ekkor az első tükröződés után keletkező kép $k_1$ távolsága a leképzési törvény $\left(\tfrac{1}{f}=\tfrac{1}{t}+\tfrac{1}{k}\right)$ alapján: 
 $k_1=\frac{ft_1}{t_1-f}.$ 
 Az első kép távolsága a másik tükörtől ($t_2$): 
 $t_2=2f-k_1=\frac{f(t_1-2f)}{t_1-f},$ 
 és ebből a $k_2$ második képtávolság: 
 $k_2=\frac{ft_2}{t_2-f}=2f-t_1.$ 
 Azaz a második leképzés után a kép a $t_1$ távolságtól függetlenül a $T$ pontra esik, a fényforrás tehát bárhol lehet. 

 Megjegyzés. Ha $t_1>f$, akkor az első kép valódi lenne, de a másik tükör mögé esik, így a második leképzésnek egy virtuális tárgya van ( 1. ábra ). Ha $t_1<f$, akkor az első leképzésnél látszólagos kép keletkezik, ezt képezi le a második visszaverődés ( 2. ábra ). A második leképzés után viszont mindenképp valódi képet kapunk, és a végső nagyítás minden esetben $N=N_1N_2=\tfrac{k_1}{t_1}\,\tfrac{k_2}{t_2}=-1$ lesz, tehát a kép mérete megegyezik a tárgyéval, de fordított állású lesz. 

 1. ábra 

 2. ábra 

 $t_1=f$ esetében nem keletkezik az első tükröződés után kép, a fókuszsíkból induló fénysugarak a tükörről párhuzamosan verődnek vissza, amelyeket a másik tükör ismét a fókuszsíkba gyűjt, tehát ilyenkor is teljesül, hogy a fénysugarak kétszeres visszaverődés után a $T$ ponton mennek át ( 3. ábra ). 

 3. ábra 

 (Az ábrákon a fény először a jobb oldali, aztán a bal oldali tükrön tükröződik, de ennek az elrendezés szimmetriája miatt nincs jelentősége.) 

**II. megoldás.**
 Még egyszerűbben jutunk az eredményre, ha a leképzési törvény Newton-féle alakját használjuk (lásd a G. 855. gyakorlatot a 2024.  évi májusi számában és a megoldását a munkafüzetben). Ekkor a ,,fókuszontúli'' tárgy- és képtávolság $x_\mathrm{t}=t-f$, illetve $x_\mathrm{k}=k-f$, és ezekre teljesül az $x_\mathrm{t}x_\mathrm{k}=f^2$ összefüggés. Esetünkben ez azt jelenti, hogy az $x_\mathrm{t}$ és $x_\mathrm{k}$ távolságokat a közös fókuszponttól kell mérni, és így $x_\mathrm{t2}=-x_\mathrm{k1}$, amiből azonnal $x_\mathrm{k2}=-x_\mathrm{t1}$ következik bármely $x_\mathrm{t1}$ esetében.

![solution figure](../../raw_html/komal_figures/komal-P5595-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5595-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5595-sol-fig3.gif)
