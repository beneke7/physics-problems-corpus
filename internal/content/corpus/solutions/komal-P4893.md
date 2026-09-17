---
id: komal-P4893
source: komal
language: hu
translated: false
problem: komal-P4893
figure_files: [komal-P4893-sol-fig1.gif, komal-P4893-sol-fig2.gif, komal-P4893-sol-fig3.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Ha a beeső test tömege $m$, sebessége pedig $v$, akkor a meglökött ($M$ tömegű) test ütközés utáni sebessége (az energia- és az impulzusmegmaradás törvénye szerint) 
 $V= \frac{2mM}{m+M}v,$ 
 mozgási energiája pedig 
 $W=\frac{1}{2}M V^2=\frac{2m^2M}{(m+M)^2}v^2.$ 
 A $v$ és $m$ adatok kifejezhetők az ütköző részecske energiájával és impulzusával: 
 $E=\frac{1}{2} mv^2, \qquad I=mv$ 
 alapján 
 $m=\frac{I^2}{2E}, \qquad v=\frac{2E}{I},$ 
 ahonnan az átadott energia: 
 $W(E,I)=8M\frac{I^2E^2}{(I^2+2ME)^2}.$ 
 Az energiaátadás ,,hatásfoka'': 
 $\eta=\frac{W}{E}=8M\frac{I^2E}{(I^2+2ME)^2},$ 
 ami 
 $\eta=\frac{mM}{\left(\frac{m+M}{2}\right)^2}$ 
 alakban is felírható. Nyilván $\eta\le 1$, és az egyenlőség csak $m=M$, vagyis $I^2=2ME$ esetén teljesül. 
 $b)$ Rögzített $I_0$ impulzus esetén az átadott energia $E$ függvényében az 1. ábrán látható, monoton növekvő görbével jellemezhető. Érdekes, hogy ha $E\gg {I_0^2}/M$ (vagyis az ütköző test tömege nagyon kicsi, de a sebessége nagyon nagy), akkor az átadott energia véges nagyságú: $W\approx 2I_0^2/M$. 

 1. ábra 
 Rögzített $E_0$ ,,bejövő energia'' esetén az átadott energia az $I$ impulzus függvényében a 2. ábrán látható, maximummal rendelkező függvény. A maximum helye annak felel meg, hogy az ütköző test tömege $m=M$, ekkor a teljes $E=E_0$ energiáját átadja a kezdetben álló másik testnek. 

 2. ábra 
 $c)$ A 3. ábrán az átadott energiát $I$ függvényében ábrázoltuk két különböző bejövő energia mellett ($E_1<E_2$). 

 3. ábra 
 Látható, hogy egy kisebb energiájú test képes több energiát átadni egy adott tömegű álló testnek, mint egy nagyobb energiájú, amennyiben a bejövő részecskék impulzusa (avagy a tömege) lényegesen különböző.

![solution figure](../../raw_html/komal_figures/komal-P4893-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P4893-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P4893-sol-fig3.gif)
