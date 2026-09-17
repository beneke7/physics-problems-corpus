---
id: komal-P5341
source: komal
language: hu
translated: false
problem: komal-P5341
figure_files: [komal-P5341-sol-fig1.gif, komal-P5341-sol-fig2.gif, komal-P5341-sol-fig3.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Belátjuk, hogy a folyadék felszíne (amikor a folyadék a konténerhez képest már nem mozog) egy olyan sík, amelyik $\alpha=\arctg(a_0/g)$ szöget zár be a vízszintessel. A folyadék felszínének közelében a folyadék egy kicsiny darabkájára a környező folyadék csak a felszínre merőleges $F$ erőt képes kifejteni. (Ha nem így lenne, akkor a kérdéses anyagdarabka a felület érintősíkjában elmozdulna a folyadék többi részéhet képest.) Az 1. ábráról leolvasható, hogy egy $m$ tömegű ,,folyadékdarabka'' mozgásegyenle a felület esésvonalának irányában 
 $mg\sin\alpha=ma_0\cos\alpha,\qquad \text{tehát}\qquad \tg\alpha=\frac{a_0}{g}.$ 
 1. ábra 
 A gyorsulás következtében a konténer elején a folyadék magassága 
 $h_1=\frac{h}{2}-\frac{\ell}{2}\,\frac{a_0}{g}$ 
 értékre csökken, a konténer hátsó falánál pedig 
 $h_2=\frac{h}{2}+\frac{\ell}{2}\,\frac{a_0}{g}$ 
 értékre növekszik, a konténer közepénél pedig az álló helyzetnek megfelelő $h/2$ marad ( 2. ábra ). 
 2. ábra 
 Jelöljük a tartály fenéklapjára ható erőt $G$-vel, a mozgásirányhoz viszonyított előlapnál ható erőt $F_1$-gyel, a hátsó oldallapra ható erőt $F_2$-vel, a trapéz alakú oldalfalra ható erőt pedig $F_3$-mal ( 3. ábra ). Ezeket az erőket szeretnénk meghatározni. 
 3. ábra 
 A folyadék által kifejtett nyomás mindenhol a légköri nyomáson felüli túlnyomást , vagyis a hidrosztatikai nyomást jelenti. (A légköri nyomás az alaplap és az oldallapok mindkét oldalánál hat, eredő erőt tehát nem hoz létre.) 
 A tartály fenéklapjára nyilván a folyadék súlyával megegyező nagyságú erő hat: 
 $G=\frac{h}{2}\ell d \varrho g.$ 
 A folyadék hidrosztatikai nyomása a mélységgel arányosan növekszik. Az előlapra ható $F_1$ erő a folyadék átlagos nyomása és a nyomott felület szorzataként kapható meg: 
 $F_1=\left(\frac{1}{2}\varrho g h_1\right)\cdot \left(h_1d\right)=\frac{1}{8}\varrho g \,d \left(h-\ell\,\frac{a_0}{g}\right)^2.$ 
 Hasonlóan a hátsó lapra ható erő: 
 $F_2=\left(\frac{1}{2}\varrho g h_2\right)\cdot \left(h_2d\right)=\frac{1}{8}\varrho g \,d \left(h+\ell\,\frac{a_0}{g}\right)^2.$ 
 Az oldalfal mentén a (túl)nyomás a folyadék (ferde) felszíne mentén nulla, függőlegesen lefelé haladva pedig a mélységgel arányosan lineárisan változik. Az átlagos nyomás egy-egy függőleges, a tartály előlapjától $x$ $(0\le x\le \ell)$ távol lévő, $\Delta x$ széles, 
 $h(x)=\frac{h}{2}+x\frac{a_0}{g} $ 
 magas sáv mentén: 
 $\overline{p}=\frac12\varrho g h(x).$ 
 Ez az átlagos nyomás az egyes sávokra 
 $\Delta F=\overline{p}\cdot h(x)\Delta x=\frac12\varrho g h^2(x)\Delta x,$ 
 a teljes oldalfalra pedig 
 $F_3=\sum\frac12\varrho g h^2(x)\Delta x$ 
 erőt fejt ki. 
 Az összeget (vagyis az oldalfalra ható teljes nyomóerőt) pl. integrálszámítással, de elemi úton is meghatározhatjuk. Észrevehetjük, hogy ha az oldalfal folyadékkal érintkező részét egy $\varrho$ felületi tömegsűrűségű (felületegységenként $\varrho$ tömegű) vékony lemeznek képzeljük, és ezt a lemezt vízszintes helyzetben tartjuk, akkor a súlyerőnek a trapéz alapélére vonatkozó forgatónyomatéka éppen $F_3$. No de ezt a forgatónyomatékot másképp is kiszámíthatjuk. Vágjuk szét (gondolatban) a trapézt egy $\ell h_1$ területű téglalapra, valamint egy $\ell$ és $h_2-h_1$ befogójú derékszögű háromszögre. Ezen síkidomok súlypontjának és területének ismert képleteiből adódik, hogy 
 $F_3=\varrho g\left[\ell h_1\cdot\frac{h_1}{2}+ \ell\frac{h_2-h_1}{2}\left(h_1+\frac{h_2-h_1}{3}\right)\right]=
\varrho g \ell\frac{h_1^2+h_2^2+h_1h_2}{6}=\varrho g \ell\left(\frac{1}{8}h^2+\frac{1}{24} \ell^2
\frac{a_0^2}{g^2}\right) .
$ 
 A megadott számértékekkel $G=441~\rm kN$, $F_1=14~\rm kN$, $F_2=59~\rm kN$, $F_3=114~\rm kN$.

![solution figure](../../raw_html/komal_figures/komal-P5341-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5341-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5341-sol-fig3.gif)
