---
id: komal-P5462
source: komal
language: hu
translated: false
problem: komal-P5462
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás**
.Jelöljük a rugó direkciós erejét $D$-vel, a hasáb tömegét $M$-mel, a kocka tömegét $m$-mel. A függőlegesen tartott rugónál a hasáb egyensúlyának feltétele: 
 $(1)$ $Mg=Ds.$ 
 Tételezzük fel egy pillanatra, hogy a hasáb elengedésekor a kocka nem kezd el csúszni, hanem együtt mozog a hasábbal. A két test $a$ gyorsulását a $D\ell$ rugóerő okozza: 
 $D\ell=(M+m)a, \qquad \text{tehát}\qquad a=\dfrac{D\ell}{M+m}.$ 
 A súrlódási erő, ami a testek között hat (a hasábot fékezi, a kocka alakú testet gyorsítja) nem lehet nagyobb, mint $\mu mg$, tehát a kocka maximális gyorsulása (amikor nem csúszik a hasábon) $a_{\rm max}=\mu g$. A kis test tehát csak akkor nem csúszik meg a hasábon, ha 
 $\dfrac{D\ell}{M+m}\le \mu g, \qquad \text{vagyis}\qquad\ell\le \dfrac{\mu g}{D}(M+m).$ 
 Ha ez a feltétel nem teljesül, hanem 
 $(2)$ $\ell> \dfrac{\mu g}{D}(M+m),$ 
 a kis test ,,lemarad'' a hasábhoz képes, tehát elcsúszik azon. A továbbiakban feltételezzük, hogy ez következik be, és a (2) egyenlőtlenség teljesülését majd később ellenőrizzük. 
 $a)$ Legyen a hasáb távolsága a nyújtatlan rugó végpontjától $x(t)$, a kocka távolsága pedig $y(t)$. (Az időt a hasáb elengedésének pillanatától kezdődően mérjük.) Mivel a rugóerő ilyenkor $-Dx$, a súrlódási erő pedig $\mu mg$, a két test mozgásegyenlete: 
 $Ma_x=-D x+\mu mg,$ 
 ami így is felírható: 
 $(3)$ $Ma_x=-D \left(x -\frac{\mu mg}D\right),
$ 
 továbbá 
 $(4)$ $ma_y=-\mu mg.$ 
 Látható, hogy az $x -\frac{\mu mg}D$ változóra a harmonikus rezgőmozgás egyenlete áll fenn, amelynek megoldása (az $x(0)=\ell$ és $v_x(0)=0$ kezdeti feltételeket is figyelembe véve): 
 $(5)$ $x(t)=\frac{\mu mg}D+\left(\ell-\frac{\mu mg}D\right)\cos(\omega t),$ 
 ahol 
 $(6)$ $\omega=\sqrt{\dfrac{D}{M}},$ 
 továbbá a hasáb sebessége 
 $(7)$ $v_x(t)=-\left(\ell-\frac{\mu mg}D\right)\omega\sin(\omega t).$ 
 A (3) egyenlet könnyebben megoldható, hiszen az egy egyenletesen gyorsuló test mozgásegyenlete: 
 $(8)$ $y(t)=\ell-\dfrac{\mu g}{2}t^2,$ 
 a kocka pillanatnyi sebessége pedig: 
 $(9)$ $v_y(t)=- \mu gt.$ 
 A hasáb gyorsulása negyed rezgés után csökken nullára: 
 $(10)$ $t_0=\dfrac{T}{4}=\dfrac{\pi}{2}\sqrt{\dfrac{M}{D}},$ 
 ami (1) alapján így is írható: 
 $t_0=\dfrac{\pi}{2}\sqrt{\dfrac{s}{g}}=0{,}2\ \rm s.$ 
 $b)$ A csúszás akkor szűnik meg, amikor a két test sebessége megegyezik: 
 $v_x(t_0)=v_y(t_0),$ 
 ahonnan (6), (7), (9) és (10) felhasználásával kapjuk, hogy 
 $\ell=\dfrac{\mu gM}{D}\left(\dfrac{\pi}{2}+\dfrac{m}{M}\right).$ 
 Innen látszik, hogy a (2) feltétel biztosan teljesül, hiszen $\pi/2>1$. Az $m$ tömeg nagyságát nem ismerjük, de biztosan igaz, hogy $m>0$, ennek megfelelően 
 $\ell>\dfrac{\pi}{2}\cdot \dfrac{\mu M g}{D}=\dfrac{\pi}{2}\,\mu s=0{,}047\ {\rm m}
\approx 5\ \rm cm.$ 
 $c)$ A kockának a hasábhoz viszonyított elmozdulása (tehát a csúszásának hossza) $t_0$ idő alatt 
 $\Delta s=y(t_0)-x(t_0),
$ 
 ami (5), (8) és (10) szerint 
 $\Delta s=\mu s\left[\left(\dfrac{\pi}{2}+\dfrac{m}{M}\right)-\dfrac{\pi^2 }8\right] -\mu s\dfrac{m}{M}=\mu s \left( \dfrac{\pi}{2} -\dfrac{\pi^2 }8\right)\approx 1\ \rm cm.$ 
 (Érdekes, hogy $\Delta s$ nem függ a kocka $m$ tömegétől, emiatt nem okozott problémát, hogy annak nagysága nem szerepelt a megadott számadatok között.) 

 Megjegyzés. Belátható, hogy a csúszás megszűnte után, amikor a hasáb és a kocka egyetlen testként mozog, a kockára ható (vízszintes) erő nem haladja meg a $\mu mg$ kritikus értéket, tehát a továbbiakban semmikor nem kezd újra csúszni. 
 A csúszás megszűntének pillanatában mind a hasáb, mind pedig a kocka gyorsulása ugrásszerűen megváltozik, a közös gyorsulásuk a tömegközéppont korábbi gyorsulásával egyezik meg.
