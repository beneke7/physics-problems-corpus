---
id: komal-P5198
source: komal
language: hu
translated: false
problem: komal-P5198
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 $a)$ A két testből álló rendszer össztömege $m+M$, összes lendülete $mv_0$, tehát a rendszer tömegközéppontjának sebessége
 $v_\text{tkp}=\frac{m}{m+M}\,v_0.$
 $b)$ A rugó összenyomódása (a ,,puha ütközés'') során a tömegközéppont sebessége mindvégig állandó marad, hiszen a rendszerre nem hat vízszintes irányú külső erő. A tömegközépponthoz rögzített vonatkoztatási rendszerben az $m$ tömegű test kezdősebessége
 $v_m=v_0-v_\text{tkp}=\frac{M}{m+M}v_0,$
 az $M$ tömegű hasáb kezdősebessége pedig
 $v_M=0-v_\text{tkp}=-\frac{m}{m+M}v_0.$
 (A sebességeket a kitűzési ábrán bejelölt (balról jobbra mutató) irányban tekintjük pozitívnak.) Nyilván fennáll, hogy $mv_m+Mv_M=0$, hiszen ebben a vonatkoztatási rendszerben a tömegközéppont nem mozog, az összes lendület tehát nulla.
 Az ütközés során a rugónak az a pontja, amelyik az $m$ tömegű testhez $M/m$-szer közelebb van, mint a $M$ tömegű testtől mért távolsága, a rugó összenyomódása során mozdulatlan marad, tehát tekinthetjük akár rögzített pontnak. A rugót tehát gondolatban feloszthatjuk két részre, melyek rugóállandója $D_m$ és $D_M$, és ,,sorba vannak kapcsolva''. Ha az egész rugót $F$ erő nyomja, akkor a teljes összenyomódása $\Delta \ell=F/D.$ Ugyanakkor a $m$ tömegű testhez közelebbi rugódarab összenyomódása csak
 $\Delta \ell_m= \frac{M}{m+M}\Delta \ell=F\, \frac{M}{D(m+M)}=\frac{F}{D_m}.$
 Leolvashatjuk, hogy
 $D_m=\frac{m+M}{M}D,$
 és hasonló módon
 $D_M=\frac{m+M}{m}D.$
 Az ütközés úgy zajlik le, mintha az $m$ tömegű test egy rögzített végpontú, $D_m$ rugóállandójú rugót nyomna össze, illetve a $M$ tömegű test mozgását egy $D_M$ rugóállandójú rugó fékezi. Mindkét test rezgésidejének periódusideje
 $T=2\pi\sqrt{\frac{m}{D_m}}=2\pi\sqrt{\frac{M}{D_M}}=2\pi\sqrt{\frac{mM}{m+M}\cdot \frac{1}{D}},$
 a megállásukig (vagyis a rugó maximális összenyomódásáig)
 $T_0=\frac{T}{4}= \frac{\pi}{2}\sqrt{\frac{mM}{m+M}\cdot \frac{1}{D}}$
 idő telik el.

**II. megoldás.**
 Jelöljük a rugó összenyomódási szakaszában a testek pillanatnyi helyét $x_m$-mel és $x_M$-mel, a megfelelő pillanatnyi gyorsulásokat pedig $a_m$ és $a_M$ módon. A Newton-féle mozgásegyenletek:
 $m\,a_m=-D\left(x_m-x_M\right),$
 $M\,a_M=+D\left(x_m-x_M\right).$
 Szorozzuk meg a első egyenletet $M$-mel, a másodikat $m$-mel, és vonjuk ki a két egyenletet egymásból:
 $mM\left(a_m-a_M\right)=-D(m+M)\left(x_m-x_M\right).$
 Látható, hogy a két test $a = a_m - a_M$ relatív gyorsulására és $x=x_m-x_M$ távolságára vonatkozó
 $\frac{mM}{m+M}a=-Dx$
 mozgásegyenlet ugyanolyan alakú, mint egyetlen, $D$ rugóállandójú rugó végén harmonikus rezgőmozgást végző $\frac{mM}{m+M}$ tömegű test mozgásegyenlete. A rugó összenyomódásának ideje tehát
 $T_0=\frac{T}{4}= \frac{\pi}{2}\sqrt{\frac{mM}{m+M}\cdot \frac{1}{D}}.$
 (Az $\frac{mM}{m+M} $ mennyiséget a két testből álló rendszer redukált tömegének nevezik.)
