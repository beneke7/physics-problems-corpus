---
id: komal-P5110
source: komal
language: hu
translated: false
problem: komal-P5110
figure_files: [komal-P5110-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a műhold sebességét a földközelpontban $v$-vel, a földtávolpontban $u$-val. A szokásos jelölésekkel az ellipszis fél nagytengelye $a$, a fókuszpont és az ellipszis középpontjának távolsága $c=\epsilon a$, a fél kistengely pedig $b=a\sqrt{1-\epsilon^2}$. 
 Fejezzük ki $a$ és $\epsilon$ segítségével $v$-t és $u$-t! Alkalmazhatjuk Kepler II. törvényét: 
 $(1)$ $va(1-\epsilon)=ua(1+\epsilon),$ 
 illetve az energiamegmaradás törvényét: 
 $(2)$ $\frac{v^2}{2}-\frac{\gamma M}{a(1-\epsilon)}= \frac{u^2}{2}-\frac{\gamma M}{a(1+\epsilon)}.$ 
 ($M$ a Föld tömege.) Ebből a két összefüggésből kifejezhetők a sebességek: 
 $(3)$ $v=\sqrt{\frac{\gamma M}{a}\,\frac{1+\epsilon}{1-\epsilon}},$ 
 $(4)$ $u=\sqrt{\frac{\gamma M}{a}\,\frac{1-\epsilon}{1+\epsilon}}.$ 
 Úgy is eljuthatunk (3) és (4)-hez, ha a Newton-féle gravitációs törvényt és Newton-féle mozgásegyenletet írjuk fel a perigeumban és az apogeumban: 
 $\frac{v^2}{\varrho}=\frac{\gamma M}{a^2\,{\left(1-\epsilon\right)}^2}, \qquad \frac{u^2}{\varrho}=\frac{\gamma M}{a^2\,{\left(1+\epsilon\right)}^2},$ 
 és kihasználjuk, hogy az ellipszis csúcsainál a görbületi sugár 
 $\varrho=\frac{b^2}{a}=a\left(1-\epsilon^2\right).$ 

 Írjuk fel (3)-t és (4)-t a feladatban szereplő két mesterséges hold pályájára: 
 $(5)$ $v_1=\sqrt{\frac{\gamma M}{a}\,\frac{1+\epsilon_1}{1-\epsilon_1}},$ 
 $(6)$ $u_1=\sqrt{\frac{\gamma M}{a}\,\frac{1-\epsilon_1}{1+\epsilon_1}},$ 
 valamint 
 $(7)$ $v_2=\sqrt{\frac{\gamma M}{a}\,\frac{1+\epsilon_2}{1-\epsilon_2}},$ 
 $(8)$ $u_2=\sqrt{\frac{\gamma M}{a}\,\frac{1-\epsilon_2}{1+\epsilon_2}}.$ 
 (Kihasználtuk, hogy mindkét műhold pályájának fél nagytengelye ugyanakkora.) 
 Tudjuk még, hogy $\epsilon_1=\frac12$ és $\frac{v_1}{v_2}=\frac32,$ így (5) és (7) felhasználásával $\epsilon_2=\frac17$, (6) és (8)-ból pedig az $\frac{u_1}{u_2}=\frac23 $ eredmény adódik.

![solution figure](../../raw_html/komal_figures/komal-P5110-sol-fig1.gif)
