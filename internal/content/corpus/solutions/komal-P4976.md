---
id: komal-P4976
source: komal
language: hu
translated: false
problem: komal-P4976
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Vegyük fel a koordináta-rendszerünk $x$ tengelyét az adott egyenes mentén balról jobbra, és számozzuk meg golyókat növekvő koordinátáknak megfelelő sorrendben. Az 1. golyóra ható erő a kezdeti pillanatban
 $F_1=-k\frac{q^2}{d^2}-k\frac{2q^2}{4d^2}=-1{,}5\frac{kq^2}{d^2},$
 gyorsulása tehát
 $a_1=\frac{F_1}{m}=-1{,}5\frac{kq^2}{md^2},$
 és így egy nagyon rövid $t_0$ idő alatti elmozdulása (a mozgását egyenletesen gyorsulónak tekintve)
 $x_1= \frac{a_1}{2}t_0^2=-0{,}75~\frac{kq^2}{md^2}t_0^2.$
 (A negatív előjel azt mutatja, hogy az első golyócska balra mozdul el.)
 Hasonló módon számíthatjuk ki a másik két golyó elmozdulását is:
 $F_2= k\frac{q^2}{d^2}-k\frac{2q^2}{ d^2}=-\frac{kq^2}{d^2},\qquad a_2=\frac{F_2}{2m}=-0{,}5\frac{kq^2}{md^2}, \qquad x_2=-0{,}25~\frac{kq^2}{md^2}t_0^2,$
 $F_3= k\frac{2q^2}{4d^2}+\frac{2q^2}{ d^2}=2{,}5~\frac{kq^2}{d^2},\qquad a_3=\frac{F_3}{5m}=0{,}5\frac{kq^2}{md^2}, \qquad x_3=0{,}25~\frac{kq^2}{md^2}t_0^2.$
 $b)$ Vegyük észre, hogy a szomszédos golyók egymáshoz viszonyított kezdeti gyorsulásai, és emiatt az egymáshoz viszonyított elmozdulásaik is és a sebességkülönbségeik is megegyeznek:
 $a_3-a_2=a_2-a_1, \qquad v_3-v_2=v_2-v_1 \qquad\text{és}\qquad x_3-x_2=x_2-x_1.$
 Ez a tulajdonság a továbbiakban is megmarad, így akkor is igaz, amikor – elegendően hosszú idő múlva – már nagyon messze kerülnek egymástól. Ilyenkor a végsebességekre fennáll:
 $(1)$ $mv_1+2mv_2+5mv_3=0,$
 $(2)$ $\frac{1}{2}mv_1^2+\frac{1}{2}(2m)v_2^2+\frac{1}{2}(5m)v_3^2=k\frac{q^2}{d}+k\frac{2q^2}{2d}+k\frac{2q^2}{d},$
 $(3)$ $v_3-v_2=v_2-v_1.$
 A fenti három egyenletből (melyek közül az első a rendszer lendületének, a második az energiájának megmaradását fejezi ki) a végsebességek:
 $v_1=-3\sqrt{\frac{kq^2}{2md}}, \qquad v_2=- \sqrt{\frac{kq^2}{2md}}, \qquad v_3=+ \sqrt{\frac{kq^2}{2md}}.$
