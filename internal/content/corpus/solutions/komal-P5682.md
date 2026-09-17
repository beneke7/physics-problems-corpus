---
id: komal-P5682
source: komal
language: hu
translated: false
problem: komal-P5682
figure_files: [komal-P5682-sol-fig1.gif, komal-P5682-sol-fig2.gif, komal-P5682-sol-fig3.gif, komal-P5682-sol-fig4.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A folyadék felszíne mindenhol merőleges a nehézségi erő és a forgó rendszerben érzékelt centrifugális erő eredőjére. Az 1. ábráról leolvasható, hogy az érintő meredeksége: 
 $(1)$ $\tg\alpha=\frac{\omega^2r}{g}.$ 

 1. ábra 

 Emiatt a felület forgási paraboloid alakú lesz, melynek egyenlete: 
 $(2)$ $h=\frac{\omega^2}{2g}r^2,$ 
 ahol $r$ a forgástengelytől mért távolság, $h$ a forgási paraboloid csúcsától mért magasság, $\omega$ a forgás szögsebessége és $g$ a nehézségi gyorsulás. 

 Megjegyzés. A forgó folyadék felszínének egyenlete ,,közismert'', megtalálható a Függvénytáblázatban is, de ezen kívül többféleképpen is levezethető. Itt egy geometriai és egy differenciálszámításos módszert mutatunk meg. 

 1. A parabolatükör a tengelyével párhuzamos fénysugarakat a fókuszpontba gyűjti ( 2. ábra ). A parabola geometriai definíciója szerint a fókuszponttól és a vezéregyenestől egyenlő távolságra lévő pontok halmaza ($PF=PP'$). Az $F$ fókuszpont és a $v$ vezéregyenes távolsága a parabola $p$ paramétere, amellyel a parabola egyenlete: 
 $h=\frac{1}{2p}r^2.$ 

 2. ábra 

 Az 2. ábráról leolvashatóan a görbe érintője az $FPP'$ egyenlőszárú háromszög szimmetriatengelye, így az $FP'$ szakasz merőleges rá. Ezért a merőlegesállású szögek miatt: 
 $\tg\alpha=\frac{r}{p}.$ 
 Ezek alapján (1) felhasználásával: 
 $$\begin{gather*}
p=\frac{r}{\tg\alpha}=\frac{g}{\omega^2},\\
h=\frac{1}{2p}r^2=\frac{\omega^2}{2g}r^2,
\end{gather*}$$
 a (2) kifejezéssel összhangban. 

 2. A $h(r)$ függvény meredeksége (1) alapján: 
 $\frac{\mathrm{d}h}{\mathrm{d}r}=\tg\alpha=\frac{\omega^2r}{g}.$ 
 Ebből 
 $\mathrm{d}h=\frac{\omega^2}{g}r\,\mathrm{d}r,$ 
 és ezt integrálva 
 $h=\frac{\omega^2}{2g}r^2+h_0.$ 
 $h_0=0$ választással megkapjuk a (2) összefüggést. 

 A feladatban keresett határesetben a forgási paraboloid érinti az edény fenekét és felső határolóköre megegyezik az edény peremével, így $h(R)=H$: 
 $\frac{\omega^2}{2g}R^2=H,$ 
 amiből 
 $\omega=\frac{\sqrt{2gH}}{R}.$ 

 b) Az eredeti magasság meghatározásához ki kell számítanunk a folyadék térfogatát. Ehelyett az egyszerűség kedvéért a folyadék nélküli forgási paraboloid térfogatát számítjuk ki (a 3. ábrán piros). A kis szelet térfogata: 
 $\mathrm{d}V=r^2\pi\,\mathrm{d}h.$ 
 A parabola egyenlete a peremfeltételek alapján: 
 $h=\frac{H}{R^2}r^2,$ 
 amellyel a kis elemi térfogat így is írható: 
 $\mathrm{d}V=\frac{R^2\pi}{H}h\,\mathrm{d}h.$ 

 3. ábra 

 A teljes térfogat egyszerű integrálással: 
 $V=\int\limits_0^H\frac{R^2\pi}{H}h\,\mathrm{d}h=\frac{R^2\pi}{H}\frac{H^2}{2}=\frac{HR^2\pi}{2}.$ 
 Ez éppen a henger $HR^2\pi$ térfogatának a fele, így a folyadék térfogata is ugyanekkora. Eszerint kezdetben a folyadékszint $H/2$ magasságban volt. 

 Megjegyzés. A folyadék térfogata a forgástestek térfogatszámítási módszerével is meghatározható. Ekkor a forgástestet $r$ sugarú, $\mathrm{d}r$ vastagságú, $h(r)$ magasságú hengergyűrűkre bontjuk ( 4. ábra ), melyek térfogata: 
 $\mathrm{d}V=2r\pi h(r)\,\mathrm{d}r.$ 
 Behelyettesítve $h(r)$ aktuális kifejezését, és az integrálást elvégezve: 
 $V=\int\limits_0^R\frac{2H\pi}{R^2}r^3\,\mathrm{d}r=\frac{2H\pi}{R^2}\frac{R^4}{4}=\frac{HR^2\pi}{2},$ 
 az előző eredményünkkel összhangban. 

 4. ábra

![solution figure](../../raw_html/komal_figures/komal-P5682-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5682-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5682-sol-fig3.gif)

![solution figure](../../raw_html/komal_figures/komal-P5682-sol-fig4.gif)
