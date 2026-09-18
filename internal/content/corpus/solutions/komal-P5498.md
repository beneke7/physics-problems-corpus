---
id: komal-P5498
source: komal
language: hu
translated: false
problem: komal-P5498
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük az ékre ható erőt $F$-fel, a gyorsulását $A$-val, a kis testnek az ékhez viszonyított, felfelé irányított gyorsulását pedig $a$-val.
 A lejtő csak a síkjára merőleges erőt tud kifejteni a kis testre, így annak mozgásegyenlete a lejtő esésvonalának irányában:
 $mg\sin\alpha=m(A\cos\alpha-a),$
 vagyis
 $(1)$ $A=\frac{a}{\cos\alpha}+g\tan\alpha.$
 Az ék mozgásegyenlete:
 $(2)$ $F=MA,$
 mert a kis test tömege elhanyagolhatóan kicsi. (Érdekes, hogy az (1) egyenlet annak ellenére hasznos információt hordoz, hogy a kis test tömege majdnem nulla.)
 A mozgás idejét a
 $(3)$ $h=\frac{a\sin\alpha}{2}t^2 $
 egyenletből számíthatjuk ki.
 $a)$ Az ék (és a kis test) gyorsítása közben végzett munka
 $W=F\cdot \frac{A}{2}t^2,$
 ami (1), (2) és (3) alapján
 $(4)$ $W=MA^2\frac{h}{a\sin\alpha}=
\frac{Mh}{\sin\alpha}\left(\frac1{\cos^2\alpha}\cdot a+ \frac{g^2\tan^2\alpha}{a} +2g\frac{\sin\alpha}{\cos^2\alpha} \right).$
 Ennek a kifejezésnek keressük legkisebb érétket az $a$ gyorsulás függvényében. (4) zárójeles kifejezésének utolsó tagja nem függ $a$-tól, az első kettő összege pedig (a számtani-mértani egyenlőtlenség szerint)
 $\frac1{\cos^2\alpha}\cdot a+\frac{g^2\tan^2\alpha}{\sin\alpha}\cdot \frac1a\ge
2\sqrt{\frac1{\cos^2\alpha}\cdot a\cdot \frac{g^2\tan^2\alpha}{a}} =
2g\frac{\sin\alpha}{\cos^2\alpha}.$
 Így tehát
 $W\ge \frac{4Mgh}{\cos^2\alpha}=52{,}3\ \rm J.$
 (Ez a munka többszöröse annak, mintha az éket és a kocsit $h$ magasságba emeltük volna; ez tehát nem éppen energiatakarékos módja egy elhanyagolható tömegű test megemelésének.)
 A legkisebb munkavégzés
 $a=g\sin\alpha$
 gyorsulás mellett valósul meg (ekkor egyenlő a számtani középben szereplő két tag).
 $b)$ A legkisebb munkavégzés esetén kifejtendő erő:
 $F=2Mg\tan\alpha\approx 11{,}3\ \rm N,$
 a mozgás ideje
 $t=\sqrt{\frac{2h}g}\frac1{\sin\alpha}\approx 0{,}9\ \rm s,$
 az átlagteljesítmény pedig
 $P=\frac{W}{t}\approx 58\ \rm W.$
