---
id: komal-P5166
source: komal
language: hu
translated: false
problem: komal-P5166
figure_files: [komal-P5166-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Tekintsük az ábrán látható helyzetet, és alkalmazzuk az ábra jelöléseit! Az $m$ tömegű, kicsiny testek és az $m^*$ tömegű ólomgolyó között ható erők nagysága: 
 $F_1=\frac{\gamma m m^*}{r_1^2}=\frac{\gamma m m^*}{R^2-2rR\cos\varphi+r^2},$ 
 illetve 
 $F_2=\frac{\gamma mm^*}{r_2^2}=\frac{\gamma m m^*}{R^2+2rR\cos\varphi+r^2}.$ 

 Ezek az erők (a rúd középpontjára vonatkoztatott) forgatónyomatékot fejtenek ki a rúdra: 
 $M_1=-F_1d_1,\qquad M_2=F_2d_2,$ 
 ahol $d_1$ és $d_2$ a megfelelő erőkarok. Ezek (az ábráról leolvashatóan) így számíthatók ki: 
 $d_1=R\sin\alpha_1=R\frac{r\sin\varphi}{r_1}, \qquad d_2=R\sin\alpha_2=R\frac{r\sin\varphi}{r_2}.$ 
 A rúdra ható eredő forgatónyomaték 
 $M(\varphi)=\gamma m m^*rR\sin\varphi\left(\frac{1}{r_2^3}-\frac{1}{r_1^3}\right)=$ 
 $= \gamma m m^*rR\sin\varphi\left[(R^2+2rR\cos\varphi+r^2)^{-(3/2)}-(R^2-2rR\cos\varphi+r^2)^{-(3/2)} \right] .$ 
 Ez a kifejezés, mivel $r_1\ne r_2$, általában nem nulla, de ha $\varphi\approx 0$ vagy $\varphi\approx 90^\circ$, akkor a forgatónyomaték nagyon kicsi, határesetben nulla lesz. Az első esetben $d_1$ és $d_2$ válik kicsivé, emiatt tűnik el a forgatónyomaték, a második esetben pedig $r_1\approx r_2$, és így $F_1\approx F_2$, ekkor a két kis testre ható, csaknem azonos nagyságú, de ellentétes irányú forgatónyomaték kiegyensúlyozza egymást. 
 Az $M(\varphi)$ függvény a megadott számértékek behelyettesítése után (pl. a wolframalpha.com használatával) ábrázolható, és a maximumhelye is megtalálható. Van azonban egy másik út is. Vegyük észre, hogy $r$ egy nagyságrenddel kisebb, mint $R$, hiszen 
 $\frac{r}{R} \equiv \epsilon=\frac{20~\rm cm}{3~\rm m}=0{,}067\ll 1,$ 
 emiatt nem tévedhetünk sokat, ha $\epsilon$ magasabb hatványait elhanyagoljuk $\epsilon$ legkisebb kitevőjű (de nem nulla együtthatójú) tagja mellett. Mivel 
 $\left(\frac{1}{r_2^3}-\frac{1}{r_1^3}\right)=\frac{(r_1^3-r_2^3)(r_1^3+r_3^3)}{r_1^3\,r_3^3(r_1^3+r_3^3)},
$ 
 a nevezőt közelíthetjük $2R^9$-nel, a számláló pedig 
 $r_1^6-r_2^6=R^6 \,\left[(1-2\epsilon\cos\varphi+\epsilon^2)^3-(1+2\epsilon\cos\varphi+\epsilon^2)^3\right]\approx -12rR^5\cos\varphi,$ 
 az eredő forgatónyomaték (az alkalmazott közelítésben) 
 $M(\varphi)=-\gamma m m^*\frac{6r^2}{R^3}\sin\varphi\,\cos\varphi=-\gamma m m^*\frac{3r^2}{R^3}\sin(2\varphi).$ 
 (A negatív előjel azt fejezi ki, hogy a forgatónyamaték a kitéréssel ellentétes irányú, tehát a $\varphi=0$ és a $\varphi=180^\circ$-os helyzet stabil, míg a $\varphi=90^\circ$-os helyzet labilis egyensúlynak felel meg.) A forgatónyomaték abszolút értéke $\varphi=\pm 45^\circ$-nál a legnagyobb, és az értéke 
 $\vert M \vert _\text{max}= \gamma m m^*\frac{3r^2}{R^3}=9\cdot10^{-13}~\rm N m.$ 
 Ha a legnagyobb forgatónyomatékot numerikusan, a fenti közelítés alkalmazása nélkül határozzuk meg, a maximum helyére $44{,}9^\circ$-ot kapunk, és $M(\varphi)$ grafikusan ábrázolt képe gyakorlatilag megegyezik a $\sin(2\varphi)$ állandószorosának képével.

![solution figure](../../raw_html/komal_figures/komal-P5166-sol-fig1.gif)
