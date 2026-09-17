---
id: komal-P5121
source: komal
language: hu
translated: false
problem: komal-P5121
figure_files: [komal-P5121-sol-fig1.gif, komal-P5121-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Az egyes rudakra ható erők eredője és a forgatónyomatékuk eredője nulla, hiszen a rudak tömege (és ezzel együtt a tehetetlenségi nyomatékuk is) elhanyagolható. Ez a feltétel csak akkor teljesülhet, ha a rudak végeinél egyenlő nagyságú, a rúddal párhuzamos, de ellentétes irányú erők hatnak. Jelöljük az $A$ és $B$ golyó közötti rúdban ható erőt $F$-fel, a $B$ és $C$ golyók közötti rúdban hatót pedig $K$-val! Az egyes golyókra ható erőket és a kezdeti gyorsulásokat az 1. ábra mutatja. 

 1. ábra 
 A golyók gyorsulása (Newton törvénye szerint) 
 $(1)$ $a_A=\frac{F}{m}; \qquad a_B=\frac{F-K}{m}; \qquad a_C=\frac{K}{m}.$ 
 Mindhárom gyorsulás rúdirányú, hiszen a golyókra ható erők is ilyenek. 
 A jobb oldali rúd hossza nem változhat meg, emiatt $a_B=a_C$, azaz 
 $(2)$ $F=2K. $ 
 Tekintsük most a bal oldali rudat és a végeinél lévő $A$ és $B$ golyókat ( 2. ábra )! Erre az alrendszerre összesen $F+(K-F)=K$ erő hat, emiatt a tömegközéppontjának (a rúd középpontjának) a gyorsulása 
 $a_{\rm tkp}=\frac{K}{2m}.$ 

 2. ábra 
 A rúd tömegközéppontjának sebessége az indítás utáni pillanatokban $v_0/2$. A rúd forgómozgást is végez a középpontja körül, az $A$ golyó $v_0/2$ sebességgel mozog a tömegközépponthoz képest ,,előrefelé'' (hiszen a teljes sebessége $v_0$), a $B$ golyó pedig ,,visszafelé'' mozog $v_0/2$ sebességgel, az eredő sebessége nulla. 
 A rúd szögsebessége ezek szerint 
 $\omega=\frac{\left(v_0/2\right)}{\left(\ell/2\right)}
 =\frac{v_0}{\ell}.$ 
 Ugyanezt az eredményt úgy is megkaphatjuk, hogy a rúd forgását eredeti (tehát nem a tömegközépponti) rendszerben írjuk le. Az $\ell$ hosszúságú rúd $B$ pontja kezdetben áll, az $A$ pontja $v_0$ sebességgel mozog, a rúd szögsebessége tehát (bármelyik inerciarendszerben) $v_0/\ell$. 
 A rúd végpontjainak centripetális gyorsulása 
 $a_{\rm cp}= \frac{\ell}{2}\omega^2=\frac{v_0^2}{2\ell}.$ 
 Az $A$ golyó gyorsulása: 
 $a_A=a_{\rm tkp}+a_{\rm cp}=\frac{K}{2m}+\frac{v_0^2}{2\ell}.$ 
 Innen (1)-t, majd a (2) összefüggést felhasználva: 
 $\frac{F}{m}=\frac{K}{2m}+\frac{v_0^2}{2\ell},$ 
 $\frac{2K}{m}=\frac{K}{2m}+\frac{v_0^2}{2\ell} $ 
 adódik, ahonnan a keresett rúderők: 
 $K=\frac13\, \frac{mv_0^2}{\ell}; \qquad F=\frac23\,\frac{mv_0^2}{\ell}.$ 

**II. megoldás.**
 Az I. megoldás jelöléseit követve felírhatjuk, hogy az egyes golyók gyorsulása 
 $(1)$ $a_A=\frac{F}{m}; \qquad a_B=\frac{F-K}{m}; \qquad a_C=\frac{K}{m}.$ 
 Tekintsük az indítást követő $t$ idő alatti elmozdulásokat! Legyen $t$ olyan kicsiny, hogy a négyzeténél magasabb hatványait már elhanyagolhassuk. Az $A$ golyó (az 1. ábrát nézve) ,,felfelé'' közelítőleg 
 $y_1=v_0t$ 
 távolsággal, jobbra pedig 
 $x_1=\frac{F}{2m}t^2$ 
 távolsággal mozdul el. Hasonló módon érvelve a $B$ golyó balra mozdul el 
 $x_2=\frac{F-K}{2m}t^2$ 
 távolságnyit. (A közelítés annak felel meg, hogy a golyók mozgását egyenletesen gyorsulónak tekintjük a mozgás kezdeti, rövid szakaszán.) A bal oldali rúd hossza nem változhat meg, tehát 
 $\left( \ell-x_1-x_2\right)^2+y_1^2=\ell^2,$ 
 azaz (a $t^2$-nél magasabb hatványokat elhanyagolva) 
 $\ell^2-2\ell\left(\frac{F}{2m}t^2+\frac{F-K}{2m}t^2\right)+v_0^2t^2=\ell^2,$ 
 ahonnan 
 $(3)$ $2F-K=\frac{mv_0^2}{\ell}.$ 
 Hasonló módon kapjuk, hogy a jobb oldali rúd hossza akkor maradhat csak állandó, ha 
 $a_B\frac{t^2}{2}-a_C\frac{t^2}{2}=0,$ 
 vagyis 
 $(4)$ $2K-F=0.$ 
 A (3) és (4) egyenletekből kapjuk, hogy 
 $K=\frac13\, \frac{mv_0^2}{\ell}; \qquad F=\frac23\,\frac{mv_0^2}{\ell}.$

![solution figure](../../raw_html/komal_figures/komal-P5121-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5121-sol-fig2.gif)
