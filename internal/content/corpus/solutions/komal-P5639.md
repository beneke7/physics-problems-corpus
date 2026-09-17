---
id: komal-P5639
source: komal
language: hu
translated: false
problem: komal-P5639
figure_files: [komal-P5639-sol-fig1.gif, komal-P5639-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Amíg a kapcsoló zárva van az $R$ ellenálláson nem folyik áram (olyan, mintha ott se lenne), hiszen az ,,ideális'' tekercs ellenállása (időben állandó áram esetében) elhanyagolható. A tekercsen átfolyó áram ( 1. ábra ): 
 $I_0=\frac{U_0}{R_\mathrm{b}}=3\,\mathrm{A}.$ 

 1. ábra 

 A kapcsoló kinyitása ($t=0$) után a tekercs árama nem változhat ugrásszerűen, így az $R$ ellenálláson $I(0)=I_0=3\,\mathrm{A}$ áram kezd folyni, és $U(0)=RI(0)=RI_0=3000\,\mathrm{V}$ feszültség fog esni. Ugyanekkora nagyságú – de a rajta átfolyó áram irányához viszonyítva ellentétes irányú – a tekercs feszültsége is ( 2. ábra ). 

 2. ábra 

 Ebből meghatározhatjuk az áram változási sebességét: 
$$\begin{gather*}
L\frac{\mathrm{d}I(t)}{\mathrm{d}t}=-U(t)=-RI(t),\\
\frac{\mathrm{d}I(t)}{\mathrm{d}t}=-\frac{R}{L}I(t).
\end{gather*}$$
 Ez egy időben exponenciálisan lecsengő áramot ír le, de a függvény meghatározására nincsen szükségünk. Az egyenletet szorozzuk át $-\tfrac{L}{R}$-rel és formálisan $\mathrm{d}t$-vel, így megkapjuk, mekkora töltés áramlik át egy kicsiny $\mathrm{d}t$ idő alatt: 
 $\mathrm{d}q=I(t)\mathrm{d}t=-\frac{L}{R}\mathrm{d}I.$ 
 Ebből egyszerű összegzéssel megkapjuk a lecsengési folyamat során átáramló össztöltést: 
 $q=\sum\mathrm{d}q=\sum_0^\infty I(t)\mathrm{d}t=-\frac{L}{R}\sum_0^\infty\mathrm{d}I=-\frac{L}{R}(-I_0)=\frac{L}{R}I_0=\frac{L}{R}\frac{U_0}{R_\mathrm{b}}=4{,}5\,\mathrm{mC}.$ 

 Megjegyzés. Az áram időfüggésére felírt differenciálegyenletnek jól ismerjük a megoldását (ilyen a radioaktív bomlást leíró összefüggés is): 
 $I(t)=I_0\mathrm{e}^{-\frac{t}{\tau}},$ 
 ahol 
 $\tau=\frac{L}{R}=1{,}5\,\mathrm{ms}.$ 
 Ezután az átáramló össztöltést meghatározhatjuk az áram integrálásával a lecsengés teljes ideje alatt: 
 $q=\int\limits_0^\infty I(t)\mathrm{d}t=\int\limits_0^\infty I_0\mathrm{e}^{-\frac{t}{\tau}}\mathrm{d}t=\left[-\tau I_0\mathrm{e}^{-\frac{t}{\tau}}\right]_0^\infty=\tau I_0=\frac{L}{R}\frac{U_0}{R_\mathrm{b}},$ 
 az előbb kapott eredménnyel összhangban. 
 A ,,végtelen'' ideig tartó összegzés furcsának tűnik, de valójában a lecsengés az időállandó tízszerese (tehát 15 ezredmásodperc) alatt lényegében lejátszódik. 

 b) Az ellenálláson annyi hő fejlődik, amekkora a kapcsoló nyitásának pillanatában a tekercs mágneses energiája volt: 
 $Q=E_\textrm{m}=\frac{1}{2}LI_0^2=6{,}75\,\mathrm{J}.$ 

 Megjegyzés. A hőt megkaphatjuk a változó áram Joule-teljesítményének összegzésével is: 
 $Q=\int\limits_0^\infty P(t)\mathrm{d}t=\int\limits_0^\infty R\left[I(t)\right]^2\mathrm{d}t=RI_0^2\int\limits_0^\infty \mathrm{e}^{-2\frac{t}{\tau}}\mathrm{d}t=-\frac{\tau}{2}RI_0^2\left[\mathrm{e}^{-2\frac{t}{\tau}}\right]_0^\infty=\frac{\tau}{2}RI_0^2=\frac{1}{2}LI_0^2,$ 
 az előző megoldással összhangban.

![solution figure](../../raw_html/komal_figures/komal-P5639-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5639-sol-fig2.gif)
