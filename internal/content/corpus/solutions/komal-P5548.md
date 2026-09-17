---
id: komal-P5548
source: komal
language: hu
translated: false
problem: komal-P5548
figure_files: [komal-P5548-sol-fig1.png, komal-P5548-sol-fig2.png, komal-P5548-sol-fig3.png, komal-P5548-sol-fig4.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük az általunk a mágnesre kifejtett $\boldsymbol F$ erőnek a függőlegessel bezárt szögét $\alpha$-val, a mágnes és a fémlemez közötti vonzóerőt $N$-nel, a súrlódási együtthatót pedig $\mu$-vel. (Érdemes használni a súrlódási határszög fogalmát is a $\mu=\tan\varepsilon$ definíciónak megfelelően.) 
 Ha a mágnes éppen megindul felfelé ( 1. ábra ), akkor a fémlemez által kifejtett $\boldsymbol{K}$ kényszererő függőlegesen lefelé mutató komponense (a súrlódási erő) a vízszintes erőkomponens (a nyomóerő) $\mu$-szöröse, az erőegyensúly feltétele tehát 
 $\mu(N-F\sin\alpha)+G=F\cos\alpha,$ 
 vagyis 
 $(1)$ $F(\cos\alpha+\mu\sin\alpha)=\mu N+G.$ 
 A fenti egyenlet szerint adott $N$, $G$ és $\mu$ mellett $F$ az $\alpha$ szögtől függő mennyiség, amelynek legkisebb értékét keressük. $F(\alpha)$ annál az $\alpha$ szögnél a legkisebb, amelynél az (1)-ben szereplő zárójeles kifejezés a legnagyobb. Mivel 
 $\cos\alpha+\mu\sin\alpha=\cos\alpha+\frac{\sin\varepsilon}{\cos\varepsilon}\sin\alpha=\frac{\cos(\alpha-\varepsilon)}{\cos\varepsilon,}$ 
 $F(\alpha)$ legkisebb értéke az $\alpha=\varepsilon$ szöghöz tartozik, nagysága 
 $(2)$ $F_1=(\mu N+G)\cos\varepsilon=N\sin\varepsilon+G\cos\varepsilon=\frac{\mu N+G}{\sqrt{1+\mu^2}}.$ 

 Megjegyzés. $\cos\alpha+\mu\sin\alpha$ szélsőértékét differenciálszámítással is megkaphatjuk: 
 $(\cos\alpha+\mu\sin\alpha)'=-\sin\alpha+\mu\cos\alpha=0,$ 
 vagyis $\mu=\tan\varepsilon=\tan\alpha,$ azaz $\alpha=\varepsilon,$ és a maximum nagysága 
 $(\cos\alpha+\mu\sin\alpha)_\text{max.}=\cos\varepsilon+\frac{\sin^2\varepsilon}{\cos\varepsilon}=\frac{1}{\cos\varepsilon}.$ 

 $\qquad\qquad$ 1. ábra $\qquad\qquad\qquad\qquad\qquad$ 2. ábra 

 Hasonló lépésekkel kaphatjuk meg, hogy a lefelé éppen meginduló mágnesre fennálló összefüggéseket is ( 2. ábra ). Ha a külső $\boldsymbol{F}$ erő ferdén lefelé, a függőlegessel $\alpha$ szögben hat, akkor 
 $\mu(N-F\sin\alpha) =F\cos\alpha+G,$ 
 vagyis 
 $(3)$ $F(\cos\alpha+\mu\sin\alpha)=\mu N-G.$ 
 (Külső erő hiányában a mágnes nem csúszik le, tehát $\mu N\ge G$, és így (3) jobb oldala nemnegatív.) 
 A (3)-ban szereplő $F$ szélsőértéke ugyancsak $\alpha=\varepsilon$-nál lesz, és a minimum 
 $(4)$ $F_2=(\mu N-G)\cos\varepsilon=N\sin\varepsilon-G\cos\varepsilon=\frac{\mu N-G}{\sqrt{1+\mu^2}}.$ 
 A továbbiak szempontjából fontos (2) és (4) összefüggéseket egyszerűbben, geometriai szerkesztéssel is megkaphatjuk. Tételezzük fel, hogy a mágnes felfelé indul el ( 3. ábra ). 

 3. ábra 

 A testre négyféle erő hat: a fémlemez által kifejtett $\boldsymbol{N}$ mágneses vonzóerő, a testre ható $\boldsymbol{G}$ nehézségi erő, az általunk kifejtett $\boldsymbol{F}$ erő és a lemez által kifejtett $\boldsymbol{K}$ mechanikai kényszererő. Ez a négy erő (ha egymás után mérjük fel azokat) zárt vektorpoligont alkot, vektori összegük nulla. $\boldsymbol{N}$-et és $\boldsymbol{G}$-t ismertnek vehetjük (jóllehet $N$ nagyságát majd csak később fogjuk megkapni), $\boldsymbol{K}$-nak csak az irányát tudjuk: a vízszintessel $\varepsilon$ szöget zár be és ferdén lefelé mutat. Az általunk kifejtett $\boldsymbol{F}$ erők közül azt az $\boldsymbol{F}_1$-et keressük, amelyiknek a nagysága (hossza) a legkisebb. Az ábráról leolvasható, hogy a minimumot akkor kapjuk, amikor $\boldsymbol{F}=\boldsymbol{F}_1$ merőleges $\boldsymbol{K}$-ra, vagyis a hatásvonala a függőlegessel $\varepsilon$ nagyságú szöget zár be. Látszik, hogy ilyenkor 
 $F_1=N\sin\varepsilon+G\cos\varepsilon,$ 
 ami éppen a korábban megkapott (2) összefüggés. 
 Hasonló módon szerkeszthetjük meg a lefelé mozdításhoz szükséges legkisebb $\boldsymbol{F}=\boldsymbol{F}_2$ erőt is ( 4. ábra ). 

 4. ábra 

 A $\boldsymbol{K}$ erő most ferdén felfelé mutat, a hatásvonala $\varepsilon$ szöget zár be a vízszintessel. Az ábráról leolvashatjuk, hogy a legkisebb külső erő nagysága 
 $F_2=N\sin\varepsilon-G\cos\varepsilon,$ 
 összhangban a korábban megkapott (4) összefüggéssel. 
 Visszatérve a feladat eredeti kérdéseihez, most már könnyen megadhatjuk a keresett $N$ és $\mu$ értékeket. 
 $a)$ (2) és (4) különbségét képezve 
 $F_1-F_2=2G\cos\varepsilon,$ 
 vagyis 
 $\varepsilon=\arccos\frac{F_1-F_2}{2G}=\arccos\frac{0{,}20-0{,}05 }{2\cdot0{,}10}=\arccos 0{,}75=41{,}4^\circ,$ 
 $\mu=\tan 41{,}4^\circ=0{,}88\approx 0{,}9.$ 
 $b)$ (2) és (4) összegéből kapjuk: 
 $N=\frac{F_1+F_2}{2\sin\varepsilon}\approx 0{,}19\,\mathrm{N}.$

![solution figure](../../raw_html/komal_figures/komal-P5548-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-P5548-sol-fig2.png)

![solution figure](../../raw_html/komal_figures/komal-P5548-sol-fig3.png)

![solution figure](../../raw_html/komal_figures/komal-P5548-sol-fig4.png)
