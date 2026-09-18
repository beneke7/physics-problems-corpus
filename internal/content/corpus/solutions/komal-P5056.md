---
id: komal-P5056
source: komal
language: hu
translated: false
problem: komal-P5056
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a rugóállandót $D$-vel, a kis test tömegét $m$-mel, az ejtési magasságot pedig $h$-val!
 A kis test $v_0=\sqrt{2gh}=2{,}8~\rm m/s$ sebességgel érkezik a rugón lévő lemezre, és onnan (a lemez elhanyagolható tömege miatt) ugyancsak $v_0$ sebességgel haladva kezdi összenyomni a rugót.
 A kis test a rugó $x_0$ nagyságú összenyomódása mellett lehetne egyensúlyban, ahol
 $x_0=\frac{mg}{D}=0{,}049~\rm m.$
 Mérjük a kis test elmozdulását az egyensúlyi helyzettől függőlegesen felfelé, és az időmérés kezdőpontját válasszuk meg úgy, hogy a rezgést egy koszinuszfüggvény írja le. A mozgásegyenlet:
 $ma=-mg-\left(x-\frac{mg}{D}\right)D=-Dx,$
 amelynek megoldása:
 $x(t)=A\cos\omega t,$
 ahol
 $\omega=\sqrt{\frac{D}{m}}=14{,}1~\rm s^{-1}$
 a rezgés körfrekvenciája.
 A kis test és a lemez érintkezésének pillanatában:
 $x_0=A\cos(\omega t_0),$
 $-v_0=-A\omega\sin(\omega t_0).$
 Innen $t_0$ kiküszöbölhető:
 $x_0^2+\frac{v_0^2}{\omega^2}=A^2,$
 vagyis a rezgés amplitúdója:
 $A=\sqrt{ \frac{ g^2}{\omega^4} +\frac{2gh}{\omega^2 }}\approx 0{,}20~\rm m.$
 Ugyanezt az eredményt az energiamegmaradás
 $mg(h+x_0+A)=\frac{1}{2}D(x_0+A)^2$
 törvényéből is kiszámíthatjuk.
 A $t_0$ időtartam a
 $\tan (\omega t_0)=\frac{v_0}{x_0\omega}\approx 4{,}05$
 egyenlet alapján kb. $0{,}09~\rm s$, és az ütközés ideje (vagyis az az időtartam, amíg a rugó összenyomott állapotban van)
 $\Delta t=T-2t_0=0{,}26~\rm s.$
