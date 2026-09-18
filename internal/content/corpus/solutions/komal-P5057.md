---
id: komal-P5057
source: komal
language: hu
translated: false
problem: komal-P5057
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A mozgás három szakaszra osztható.
 1. Ha a megtett út kisebb, mint $L$, mindkét test a lejtő súrlódásmentes részén mozog. A rendszer gyorsulása
 $a_1=g\sin\alpha\approx 4{,}905~\frac{\rm m}{\rm s^2},$
 a mozgás ideje pedig
 $t_1=\sqrt{\frac{2L}{g\sin\alpha}}\approx 0{,}404~\rm s.$
 A rendszer sebessége ezen szakasz végén
 $v_1=a_1t_1\approx 1{,}98~\frac{\rm m}{\rm s }.$
 A mozgás ezen szakaszában a rúdban ható erő mindvégig nulla .
 2. A második szakaszban az $m$ tömegű test már súrlódva, a $3m$ tömegű súrlódásmentesen mozog. A mozgásegyenletek (a lejtő mentén lefelé mutató irányt tekintve pozitívnak):
 $mg(\sin\alpha-\mu \cos\alpha)+K=ma_2,$
 $3mg \sin\alpha-K=3ma_2.$
 A két egyenlet összegéből
 $a_2=g(\sin\alpha-\frac{\mu}{4}\cos\alpha)\approx 4{,}48~\frac{\rm m}{\rm s^2},$
 a rudat feszítő (összenyomó) erő:
 $K=mg\frac{3\mu}{4}\cos\alpha\approx 0{,}64~\rm N.$
 A rendszer sebessége ezen szakasz végén (pl. a munkatételből számolva):
 $v_2=\sqrt{v_1^2+2a_2d}\approx 2{,}90~\frac{\rm m}{\rm s},$
 a mozgás ideje pedig a második szakaszban:
 $t_2=\frac {v_2-v_1}{a_2}= 0{,}205~ {\rm s}.$
 3. A harmadik, $s-L-d=0{,}3~\rm m$ hosszú szakaszon a rendszer gyorsulása:
 $a_3=g(\sin\alpha-\mu\cos\alpha)\approx 3{,}21~\frac{\rm m}{\rm s^2 },$
 a végsebesség pedig
 $v_3=\sqrt{v_2^2+2a_3(s-L-d)}\approx3{,}21~\frac{\rm m}{\rm s}.$
 A mozgás ideje ezen szakaszon:
 $t_3=\frac{v_3-v_2}{a_3}= 0{,}10~ {\rm s},$
 és a rúdban most nem alakul ki mechanikai feszültség.
 A mozgás teljes időtartama: $T=t_1+t_2+t_3\approx0{,}71~ \rm s.$
