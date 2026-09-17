---
id: komal-P5356
source: komal
language: hu
translated: false
problem: komal-P5356
figure_files: [komal-P5356-sol-fig1.gif, komal-P5356-sol-fig2.gif, komal-P5356-sol-fig3.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A gerenda kereszmetszetének felső sarokpontjai – optimális esetben – éppen illeszkednek a szöcske (parabola alakú) pályagörbéjére. Jelöljük a szöcske sebességét ezekben a pontokban $v_0$-lal, a görbe meredekségét pedig $\pm\alpha$-val (lásd az 1. ábrát ). A szöcske teljes energiája a talaj szintjéhez viszonyítva: 
 $(1)$ $E=mgH+\frac{1}{2}mv_0^2,$ 
 ennek a kifejezésnek keressük a legkisebb értékét. 
 Ismert, hogy adott $v_0$ sebességgel elindított pontszerű test 
 $\ell=\frac{v_0^2}{g}\,\sin(2\alpha)$ 
 távolra jut, ilyen messze éri el az indulási pont magasságát. Esetünkben az $\ell$ távolságnak legalább $L$-nek kell lennie, tehát 
 $(2)$ $v_0^2\ge \frac{gL}{\sin(2\alpha)} \ge gL.$ 
 Az egyenlőség $\alpha=45^\circ$ esetén áll fenn, és $v_0^2$ minimális értéke $gL$. 

 1. ábra 
 Behelyettesítve (2)-t (1)-be azt kapjuk, hogy 
 $E\ge mg\left(H+\frac{L}{2}\right)=E_\text{min}.$ 
 A szöcske elugrásának $u$ kezdősebességét az 
 $\frac12 mu^2=E_\text{min}$ 
 összefüggésből kaphatjuk meg: 
 $u=\sqrt{g(2H+L)}.$ 
 Határozzuk meg most a szöcske elugrási helyének a gerenda szélétől mért $d$ távolságát és az elugrás szögét. A 2. ábrán látható koordinátarendszerben a parabola egyenlete: 
 $y=x\left(1-\frac{x}{L}\right),$ 
 hiszen a pályagörbe meredeksége $x=0$-nál 1, és a gerenda felső élei illeszkednek a parabolára. 

 2. ábra 
 A kérdéses $d$ távolságot az $x\left(1-\frac{x}{L}\right)=-H$, vagyis az $x^2-xL-HL=0$ feltételből kapjuk meg. Ennek az egyenletnek a negatív gyöke: 
 $x_1=\frac{L}{2}-\sqrt{\left(\frac{L}{2}\right)^2+LH}=-d,$ 
 tehát 
 $d=\sqrt{\left(\frac{L}{2}\right)^2+LH}-\frac{L}{2}.$ 
 Az elugrás $\varphi$ szögének tangense a parabola érintőjének meredeksége az $x=-d$ helyen: 
 $\tan\varphi=1-\frac{2x}{L}=1+\frac{2d}{L}=\sqrt{1+\frac{4H}{L}}.$ 

 Megjegyzések. 1. A parabola érintőjének meredekségét tetszőleges pontban differenciálszámítással, vagy egy jól ismert fizikai jelenséggel, az egyenes vonalú, egyenletesen gyorsuló mozgással való analógia kihasználásával kaphatjuk meg. Ha az $y(x)$ függvényben $x$-et $t$-vel helyettesítjük (ahol $t$ az időt jelenti), akkor az $y(t)=t-(t^2/L)$ összefüggést kapjuk. Összehasonlítva ezt az $y$ tengely menti egyenletesen gyorsuló mozgás $y(t)=v_0t+\frac{a}{2}t^2$ kifejezésével, látjuk, hogy a kezdősebesség $v_0=1$, a gyorsulás pedig: $a=2/L.$ Az eredeti, $y(x)$ parabolapályája érintőjének meredeksége az $y(t)$ mozgás pillanatnyi sebességével egyezik meg, vagyis 
 $\tan\varphi=v_0+at=1-\frac2{L}x=1+\frac{2d}{L}.$ 
 2. A szöcske elugrásának $\varphi$ szögét a ferde hajítás távolságát megadó képlet segítségével is ki lehet számítani: 
 $L+2d=\frac{u^2}{g}\sin(2\varphi),$ 
 amiből $u$ és $d$ behelyettesítése után kapjuk, hogy 
 $\sin(2\varphi)=\frac{\sqrt{(L/2)^2+HL}}{H+L/2}.$ 
 Ahogy arról a $\sin(2\varphi)=\frac{2\, {\tan} \varphi}{1+{ {\tan}}^2\varphi}$ összefüggés segítségével meggyőződhetünk, ez ugyanazt a $\varphi$ szöget adja, mint a fentebb kiszámított. 

 A parabola fókuszpontját legkönnyebben optikai megfontolásokkal kaphatjuk meg. Tudjuk, hogy a parabola alakú tükör a szimmetriatengellyel párhuzamos fénysugarakat az $F$ fókuszpont felé veri vissza. A szöcske optimális pályagörbéje esetén a gerenda szélénél haladó, függőleges fénysugár a $45^\circ$-os beesési szög miatt $45^\circ$-os szögben, tehát vízszintes irányban verődik vissza. Ezek szerint az $F$ fókuszpont éppen a gerenda felső lapján, annak közepénél található ( 3. ábra ). 

 3. ábra

![solution figure](../../raw_html/komal_figures/komal-P5356-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5356-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5356-sol-fig3.gif)
