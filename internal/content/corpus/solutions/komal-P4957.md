---
id: komal-P4957
source: komal
language: hu
translated: false
problem: komal-P4957
figure_files: [komal-P4957-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A változó mágneses tér miatt az ábrán látható mindkét háromszög oldalai mentén ugyanakkora $U_0$ körfeszültség indukálódik. 

 Az ábrán látható jelölésekkel a Kirchhoff-féle huroktörvény egyenletei: 
 $RI+2r_1I_1=U_0,$ 
 $RI+ 2r_2(I-I_1) =-U_0.$ 
 Ezekből következik, hogy 
 $I=U_0\frac{r_1-r_2}{R(r_1+r_2)+2r_1r_2},$ 
 az $R$ ellenállás melegedésének hőteljesítménye: 
 $P=I^2R= R\left(U_0\frac{r_1-r_2}{R(r_1+r_2)+2r_1r_2}\right)^2.$ 
 Ennek a kifejezésnek keressük a maximumát $R$ függvényében. Mivel $P(R)$ reciproka így írható fel: 
 $\frac{1}{P(R)}=\text{állandó}\cdot \left( R(r_1+r_2)^2+\frac{(2r_1r_2)^2}{R}+\text{állandó}\right),$ 
 a leggyorsabb melegedés annál az ellenállásnál következik be, amelyre 
 $R(r_1+r_2)^2+\frac{(2r_1r_2)^2}{R}$ 
 minimális. Alkalmazva a számtani és mértani közepekre vonatkozó egyenlőtlenséget azt kapjuk, a $P(R)$ függvény a maximumát az 
 $R=\frac{2r_1r_2}{r_1+r_2}$ 
 értéknél veszi fel. Ezek szerint akkor melegszik a leggyorsabban a négyzet átlójában található ellenálláshuzal, ha $R$ az $r_1$ és $r_2$ ellenállások harmonikus középértéke .

![solution figure](../../raw_html/komal_figures/komal-P4957-sol-fig1.gif)
