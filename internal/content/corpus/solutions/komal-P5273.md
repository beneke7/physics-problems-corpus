---
id: komal-P5273
source: komal
language: hu
translated: false
problem: komal-P5273
figure_files: [komal-P5273-sol-fig1.gif, komal-P5273-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Jelöljük a gyorsulásokat és a erőket az ábrán látható módon. 

 A lejtő mozgásegyenlete: 
 $(1)$ $MA=N\,\sin\alpha.$ 
 Ha a lecsúszó téglatest vízszintes irányú gyorsulása (a talajhoz képest) $a_1$, a függőleges gyorsulása pedig $a_2$, akkor a mozgásegyenletei: 
 $(2)$ $N \sin\alpha=ma_1,$ 
 illetve 
 $(3)$ $mg-N\cos\alpha=ma_2.$ 
 A téglatest mindvégig a lejtőn marad, ennek feltétele: 
 $(4)$ $a_2=\left(a_1+A\right)\tg\alpha.$ 
 Az (1)-(4) egyenletrendszer megoldása: 
 $A=\frac{m\sin\alpha\cos\alpha}{m\sin^2\alpha+M}\,g=1{,}89~
\frac{\rm m}{s^2},$ 
 $a_1=\frac{M\sin\alpha\cos\alpha}{M+m\sin^2\alpha}\,g=3{,}78~
\frac{\rm m}{ s^2},$ 
 $a_2= \frac{(M+m)\sin^2\alpha}{M+m\sin^2\alpha}\,g=3{,}27~
\frac{\rm m}{ s^2},$ 
 és végül 
 $N=\frac{M \cos\alpha}{M+m\sin^2\alpha}\,mg=3{,}78~
\rm N.$ 
 $b)$ Függőleges irányban a téglatest $s=h-a\sin\alpha=0{,}5~\rm
m$-t mozdul el. A mozgás ideje: 
 $t=\sqrt{\frac{2s}{a_2}}=0{,}55~\rm s.$ 
 $a)$ A lejtő sebessége a kérdéses pillanatban: 
 $V^{\rm (max)}=At=1{,}04~\frac{\rm m}{\rm s},$ 
 míg a lejtőn csúszó téglatest legnagyobb sebességének komponensei: 
 $v_{1\rm max}=a_1t=2{,}08~\frac{\rm m}{\rm s},\qquad v_{2\rm max}=a_2t=1{,}81~\frac{\rm m}{\rm s},$ 
 a sebességének nagysága tehát 
 $v=\sqrt{v_{1\rm max}^2+v_{2\rm max}^2}=2{,}76~\frac{\rm m}{\rm s}.$ 
 $c)$ A téglatest elmozdulásvektorának komponensei: 
 $s_1=\frac{a_1}{2}t^2=0{,}57~{\rm m}; \qquad s_2=\frac{a_2}{2}t^2=0{,}67~{\rm m}=0{,}5~{\rm
m},$ 
 az elmozdulás nagysága (vagyis a megtett útja): 
 $\ell=\sqrt{s_1^2+s_2^2}=0{,}76~\rm m.$ 

**II. megoldás.**
 A feladatot az energia- és a lendületmegmaradás tételének alkalmazásával is meg lehet oldani. 
 Jelöljük a lejtő gyorsulását $A$-val, a téglatestnek a lejtőhöz viszonyított gyorsulását pedig $a_0$-lal! A lecsúszás $t$ ideje alatt a megfelelő sebességek: $V=At$ és $v_0=a_0t$. 

 A téglatest sebességének vízszintes komponense a talajhoz képest 
 $v_1=a_0t\cos\alpha-At,$ 
 a sebesség nagysága pedig (ismét a talajhoz viszonyítva) a koszinusz-tételt alkalmazásával: 
 $(5)$ $u=\sqrt{v_0^2+V^2-2v_0V\cos\alpha}=t\sqrt{a_0^2+A^2-2a_0A\cos\alpha}.$ 
 A lendületmegmaradás tétele szerint 
 $MAt=m\left(a_0\cos\alpha-A\right)t,$ 
 vagyis 
 $(6)$ $a_0=\frac{m+M}{m}\frac{1}{\cos\alpha}A.$ 
 A téglatest $t$ idő alatt érkezik $\frac h{\sin\alpha}-a=1~$m-t megtéve lejtő aljára, vagyis 
 $(7)$ $\frac h{\sin\alpha}-a=\frac{a_0}{2}t^2.$ 
 Az energiamegmaradás tétele szerint 
 $\frac{1}{2}MV^2+\frac{1}{2}mu^2=mgh,$ 
 tehát 
 $\frac{1}{2}M(At)^2+\frac{1}{2}m\left( a_0^2+A^2-2a_0A\cos\alpha \right)t^2=mg\frac{a_0}{2}t^2\,\sin\alpha.$ 
 Innen egyszerűsítések és (6) felhasználása után az 
 $MA^2+m\left(A^2+\frac{(M+m)^2}{m^2\cos^2\alpha}A^2-2A^2\frac{ M+m
}{m}\right)=
 (M+m)gA \frac{\sin\alpha}{\cos\alpha},$ 
 vagyis az 
 $A=\frac{\sin\alpha\,\cos\alpha}{(M/m)+\sin^2\alpha}g=1{,}89~
\frac{\rm m}{s^2}$ 
 eredményt kapjuk. Innen (6) szerint 
 $(8)$ $a_0= \frac{\sin\alpha }{(M/m)+\sin^2\alpha}\left(1+\frac Mm\right)g=6{,}54~
\frac{\rm m}{s^2}.$ 
 $b)$ A csúszás ideje (7) alapján 
 $t=\sqrt{ \frac2{a_0}\left({\frac h{\sin\alpha}-a}\right)}=0{,}55~\rm s.$ 
 $a)$ A lejtő sebessége a téglatest leérkezésekor 
 $V=At=1{,}04~\frac{\rm m }{\rm s},$ 
 a téglatest sebessége pedig ($a_0t=3{,}60~\rm m/s$ ismeretében) (5) szerint 
 $u=\sqrt{3{,}60^2+1{,}04^2-2\cdot3{,}60\cdot1{,}04\cdot\cos 30^\circ }~\frac{\rm m }{\rm
s}=2{,}75~\frac{\rm m }{\rm s}.
$ 
 $c)$ A téglatest (a talajhoz képest) 
 $\ell=\frac{u}{2}t=0{,}76~\rm m$ 
 utat tesz meg.

![solution figure](../../raw_html/komal_figures/komal-P5273-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5273-sol-fig2.gif)
