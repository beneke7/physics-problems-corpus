---
id: komal-P5405
source: komal
language: hu
translated: false
problem: komal-P5405
figure_files: [komal-P5405-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Legyen az $R_1$ ellenálláson átfolyó áram erőssége $I_1=x$, az $R_2$ ellenálláson folyó áram erőssége pedig $I_2=I-x$. A két ellenállásra jutó összteljesítmény (ami nyilván $x$ függvénye): 
 $P(x)=I_1^2R_1+I_2^2R_2=R_1x^2+R_2(I-x)^2=(R_1+R_2)x^2-2R_2I\,x+I^2R_2.$ 
 Ezt a kifejezést teljes négyzetté alakítva leolvashatjuk, hogy 
 $P(x)=(R_1+R_2)\left(x-\frac{R_2 }{R_1+R_2 }I \right)^2+\frac{R_1R_2}{R_1+R_2}\,I^2
$ 
 akkor a legkisebb, amikor 
 $x=I_1=\frac{R_2 }{R_1+R_2}I,$ 
 és ugyanekkor 
 $I_2=I-I_1=\frac{R_1}{R_1+R_2}I.$ 
 Látható, hogy $I_1R_1=I_2R_2$, vagyis az ellenállásokra eső feszültségek valóban megegyeznek. 
 Az összeteljesítmény legkisebb értéke: 
 $P_\text{min}=\frac{R_1R_2}{R_1+R_2}\,I^2.$ 

**II. megoldás.**
 Legyen $I_1\sqrt{R_1} \equiv x_1$ és $I_2\sqrt{R_2} \equiv x_2$. Az összteljesítmény ezekkel a változókkal: 
 $(1)$ $x_1^2+x_2^2=P,$ 
 az áramok összegének állandósága pedig így írható fel: 
 $(2)$ $\frac{x_1}{\sqrt{R_1}}+\frac{x_2}{\sqrt{R_2}}=I.$ 
 Az (1) összefüggés az $(x_1,x_2)$ koordináta-rendszerben egy $\sqrt P$ sugarú kör egyenlete, (2) pedig egy olyan egyenest határoz meg, aminek tengelymetszetei $I\sqrt{R_1}$ és $I\sqrt{R_2}$ (lásd az ábrát ). 

 A legkisebb összteljesítmény annak a körnek felel meg, amelyiknek egyetlen közös pontja a (2) egyenessel, vagyis amelyik érinti az egyenest. Ebben az esetben $OQ$ merőleges $AB$-re, és így az $OCQ$ és $BOA$ háromszögek hasonlóak. Ennek megfelelően fennáll 
 $\frac{OC}{OD}=\frac{I_1\sqrt{R_1}}{I_2\sqrt{R_2}}=\frac{OB}{OA}=\frac{I\sqrt{R_2}}{I\sqrt{R_1}},$ 
 azaz 
 $I_1R_1=I_2R_2,$ 
 tehát az ellenállásokra eső feszültségek megegyeznek.

![solution figure](../../raw_html/komal_figures/komal-P5405-sol-fig1.gif)
