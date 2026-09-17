---
id: komal-P5653
source: komal
language: hu
translated: false
problem: komal-P5653
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük az autó pozícióját az időmérés kezdetekor $x$-szel, a motorosét $y$-nal, a megfelelő sebességeket pedig $v_x$, illetve $v_y$-nal! ($v_x=25\,\mathrm{m/s}$, $v_y=20\,\mathrm{m/s}$.) A feltételek szerint 
$$\begin{gather*}
x^2+y^2=d_0^2=120409\,\mathrm{m^2},\\
(x-v_xt_1)^2+(y-v_yt_1)^2=d_1^2=35344\,\mathrm{m^2}.
\end{gather*}$$
 (Itt $t_1=5\,\mathrm{s}$.) A két egyenlet különbsége egy lineáris összefüggést ad $x$ és $y$ között, amely $y$-ra rendezve 
 $y=\frac{D^2-2(v_xt_1)x}{2(v_yt_1)},$ 
 ahol a rövidebb írásmód kedvéért bevezettük a $D^2=d_0^2-d_1^2+\left((v_xt_1)^2+(v_yt_1)^2\right)\,(=110690\,\mathrm{m^2})$ jelölést. Ezt az első egyenletbe helyettesítve a 
 $4\left((v_xt_1)^2+(v_yt_1)^2\right)x^2-4D^2(v_xt_1)x+D^4-4d_0^2(v_yt_1)^2=0$ 
 egyenletet kapjuk, amelynek a két megoldása 
 $x=\frac{D^2(v_xt_1)\pm(v_yt_1)\sqrt{4d_0^2\left((v_xt_1)^2+(v_yt_1)^2\right)-D^4}}{2\left((v_xt_1)^2+(v_yt_1)^2\right)}\quad\Rightarrow\quad x_1=288\,\mathrm{m},\quad x_2=252\,\mathrm{m}.$ 
 Az $y$ meghatározására több lehetőségünk is van, de legegyszerűbb a már megkapott lineáris kifejezést használnunk. Behelyettesítés és átrendezés után 
 $y=\frac{D^2(v_yt_1)\mp(v_xt_1)\sqrt{4d_0^2\left((v_xt_1)^2+(v_yt_1)^2\right)-D^4}}{2\left((v_xt_1)^2+(v_yt_1)^2\right)}=\quad\Rightarrow\quad y_1=193\,\mathrm{m},\quad y_2=239\,\mathrm{m}.$ 
 a) Megoldásként tehát két $x,y$ párt kaptunk: $x_1=288\,\mathrm{m}, y_1=193\,\mathrm{m}$, illetve $x_2=252\,\mathrm{m}, y_2=239\,\mathrm{m}$. 

 Megjegyzés. A két megoldás léte nem meglepő: a feladat feltételeit megjelenítő első két egyenlet két kör, amelyeknek általában vagy nincs metszéspontjuk, vagy kettő van (az, hogy pont egy közös pont legyen – érintés – igen speciális eset). A két megoldás fizikailag is könnyen értelmezhető. Ha mondjuk az időmérés kezdetekor, amikor a járművek a kereszteződés felé haladnak, a helyzetük az $x_1,y_1$ megoldással jellemezhető, akkor a járművek egymástól való távolsága még egyszer, a kereszteződéstől távolodva is felveszi a $d_0$ értéket, és ekkor a kereszteződéstől mért távolságuk éppen $x_2$ és $y_2$. Ezt onnan tudjuk, hogy az $x_2$-vel és $y_2$-vel jellemzett pontok távolsága is $d_0$, és a járművek egyszerre, a 
 $t^\star=\frac{x_1+x_2}{v_x}=\frac{y_1+y_2}{v_y}=\frac{D^2}{\left(v_x^2+v_y^2\right)t_1}=21,6\,\mathrm{s}$ 
 időpontban érnek ezekbe a pontokba. A folyamat időben fordított irányban is végbemehet, a két eset abban különbözik egymástól, hogy az egyikben a motoros, a másikban az autó megy át hamarabb a kereszteződésen. 

 b) A személyautó és a motor $d$ távolságának a négyzetét a $t$ idő függvényében a 
 $d^2=\left(x-v_xt\right)^2+\left(y-v_yt\right)^2=\left(v_x^2+v_y^2\right)t^2-2(xv_x+yv_y)t+(x^2+y^2)$ 
 másodfokú kifejezés adja meg, amelyben az $x,y$ értékpárt az $x_1,y_1$ vagy $x_2,y_2$ értékpárok egyike adja. Mivel a két eset lényegében egymásnak időben fordított irányú ,,lejátszása'', bármelyiket választjuk, ugyanazt a 
 $d^2=\left(v_x^2+v_y^2\right)t^2-\frac{D^2}{t_1}t+d_0^2$ 
 kifejezést kapjuk. Ez a függvény egy fölfelé nyíló parabola, amely a minimális értékét a csúcsánál veszi fel. Ezt megkereshetjük pl. teljes négyzetté alakítással vagy deriválással, de a megjegyzésben írottak alapján rögtön meg is adhatjuk: a távolság-négyzet értéke $t=0$-ban és a $t=t^\star$ értéknél egyaránt $d_0^2$, tehát a parabola csúcsa a kettő között középen $t=t^\star/2$-nél van. Ezt behelyettesítve 
 $d_\mathrm{min}^2=d_0^2-\frac{D^4}{4\left(v_x^2+v_y^2\right)t_1^2}.$ 
 Ebből $d_\mathrm{min}=30\,\mathrm{m}$.
