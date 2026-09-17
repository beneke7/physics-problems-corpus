---
id: komal-P5688
source: komal
language: hu
translated: false
problem: komal-P5688
figure_files: [komal-P5688-sol-fig1.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Egy pontszerűnek tekinthető test mozgását az időtől függő $\boldsymbol{r}(t)$ vektorral, vagyis egy skalár változós vektorfüggvénnyel írhatjuk le. Ha a mozgás síkbeli (ez a helyzet a hajításoknál), a helyvektor kifejezhető két tetszőleges (de egymással nem párhuzamos), időben állandó $\boldsymbol{f}_1$ és $\boldsymbol{f}_2$ ,,bázisvektor'' és az időtől függő két ,,koordináta'' segítségével: 
 $\boldsymbol{r}(t)=X(t)\boldsymbol{f}_1+Y(t)\boldsymbol{f}_2.$ 
 Ha a bázisvektorok merőlegesek egymásra és egységnyi hosszúságúak, akkor a szokásos derékszögű (Descartes-féle) koordináta-rendszert kapjuk: 
 $\boldsymbol{r}(t)=x(t)\boldsymbol{e}_1+y(t)\boldsymbol{e}_2.$ 
 (Az általános esettől való megkülönböztetés kiemelésére a bázisvektorokat $\boldsymbol{e}_{1,2}$-vel, a koordinátákat pedig kis betűkkel jelöltük.) 
 Válasszuk $\boldsymbol{f}_1$-nek az eldobás irányába mutató egységvektort, $\boldsymbol{f}_2$-nek pedig a nehézségi gyorsulás irányába (függőlegesen lefelé) mutató egységvektort. Ebben a ferdeszögű koordináta-rendszerben a mozgó test koordinátái az idő függvényében 
 $X(t)=v_0t\qquad\textrm{és}\qquad Y(t)=\frac{g}{2}t^2.$ 
 Innen – az idő kiküszöbölése után – megkapjuk a pályagörbe egyenletét: 
 $Y(X)=\frac{g}{2v_0^2}\,X^2.$ 
 Descartes-féle koordináta-rendszerben a parabola egyenletében a négyzetes tag együtthatója $\frac{1}{2p}$, ahol $p$ a fókuszpont és a vezéregyenes távolsága, vagyis a parabola paramétere. Jelen esetben mégsem mondhatjuk, hogy $\frac{v_0^2}{g}$ megegyezne $p$-vel, hiszen a választott bázisvektorok (a vízszintes hajítás $\alpha=0$, illetve $\alpha=180^\circ$ eseteit leszámítva) nem merőlegesek egymásra. (Jól látható ez a függőleges hajítás $\alpha\to 0$ határesetében, amikor a függőleges félegyeneshez közelítő ,,elfajult parabola'' paramétere nem $v_0^2/g$-hez, hanem nullához tart.) 
 Fejezzük ki most az $\boldsymbol{r}$ vektort egy vízszintes $\boldsymbol{e}_1$ és egy függőlegesen felfelé mutató $\boldsymbol{e}_2$ egységvektor segítségével. 

 Az ábráról leolvasható, hogy 
 $\boldsymbol{f}_1=\cos\alpha\,\boldsymbol{e}_1+\sin\alpha\,\boldsymbol{e}_2,\qquad\textrm{illetve}\qquad\boldsymbol{f}_2=-\boldsymbol{e}_2,$ 
 és így 
 $\boldsymbol{r}(t)=X(t)\,(\cos\alpha\,\boldsymbol{e}_1+\sin\alpha\,\boldsymbol{e}_2)-Y(t)\,\boldsymbol{e}_2=\left(v_0t\cos\alpha\right)\,\boldsymbol{e}_1+\left(v_0t\sin\alpha-\frac{g}{2}t^2\right)\boldsymbol{e}_2.$ 
 Ezek szerint a helyvektor derékszögű koordinátái: 
 $x(t)=v_0t\cos\alpha,\qquad\textrm{valamint}\qquad y(t)=v_0t\sin\alpha-\frac{g}{2}t^2,$ 
 vagyis a pályagörbe egyenlete 
 $y(x)=x\,\tan\alpha-\frac{g}{2v_0^2\cos^2\alpha}\,x^2.$ 
 Innen – teljes négyzetté alakítás után – kapjuk, hogy a lefelé nyíló parabola paramétere 
 $p=\frac{v_0^2\cos^2\alpha}{g}.$

![solution figure](../../raw_html/komal_figures/komal-P5688-sol-fig1.png)
