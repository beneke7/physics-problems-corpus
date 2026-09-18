---
id: komal-P5415
source: komal
language: hu
translated: false
problem: komal-P5415
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ A derékszögű háromszög területe $L^2/2$, a rajta áthaladó mágneses fluxus
 $\Phi=\frac{L^2}{2}\cdot B(t)=\frac{L^2}{2}\cdot\frac{B_0}{t_0}t,$
 a fluxus változásnak sebessége, vagyis a nyugalmi indukció folytán indukálódó feszültség:
 $U=\frac{\Delta \Phi}{\Delta t}=\frac{B_0L^2}{2t_0}.$
 Az $L$ hosszúságú vezető ellenállása $Lr$, így az áramerősség
 $I=\frac{U}{R}=\frac{B_0L}{2t_0r},$
 vagyis a $t_0$ idő alatt fejlődő hő
 $Q_1=UIt_0 ={I^2}Rt_0=\frac{B_0^2L^3}{4t_0r}.$
 $b)$ A $B_0$ erősségű mágneses térben mozgó vezetőben a mozgási indukció folytán feszültség indukálódik. A vezetőnek a V alakú huzal közötti része $t$ idővel a mozgás kezdete után $L+v_0t$, így az indukált feszültség
 $U(t)=B_0(L+v_0t)v_0,$
 az áramerősség pedig
 $I(t)=\frac{U(t)}{R(t)}=\frac{B_0(L+v_0t)v_0}{(L+v_0t)r}=\frac{B_0v_0}{r}.$
 (Látható, hogy az áramerősség időben nem változik.)
 A még mozdulatlan és a már mozgó fémrúdban az áramerősség ugyanakkora:
 $\frac{B_0L}{2t_0r}=\frac{B_0v_0}{r}, \qquad \text{vagyis}\qquad v_0=\frac{L}{2t_0}.$
 $c)$ A fémrúd áramot vezető részének hossza az induláskor $L$, $2t_0$ idővel később $L+2v_0t_0=2L$. Így a vezető ellenállása időben egyenletesen $Lr$-ről $2Lr$-re növekszik, a hőfejlődés teljesítménye pedig $P_1=I^2R_1$-ről $P_2=I^2R_2=2P_1$ nagyságúra változik. Mivel a változás egyenletes, számolhatunk az átlagteljesítménnyel, és így a $2t_0$ idő alatt fejlődő hő összesen
 $Q_2=2t_0\frac{P_1+P_2}{2}=\frac{3B_0^2L^3}{4t_0r}=3Q_1.
$
 A mozgatás során tehát 3-szor több hő fejlődik a fémrúdban, mint a rögzített helyzetben.
