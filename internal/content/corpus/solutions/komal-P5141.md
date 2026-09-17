---
id: komal-P5141
source: komal
language: hu
translated: false
problem: komal-P5141
figure_files: [komal-P5141-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Az alumíniumlemez behelyezésekor a megosztás miatt olyan síkkondenzátor alakul ki, amelynél a lemeztávolság $d=\tfrac34 d_0$. Ismeretes, hogy a síkkondenzátor két lemeze közötti vonzóerő az 
 $F=\frac{\varepsilon_0 U_0^2 A}{2d^2}$ 
 összefüggéssel számítható ki, ahol $A$ a fegyverzetek alapterülete. A $\varrho=2700~\rm kg/m^3$ sűrűségű alumíniumlemez súlya: 
 $G=\frac{d_0}{4}A\varrho g.$ 
 A lemez akkor emelkedik fel, ha $F>G$, vagyis 
 $U_0>\frac{3}{4}d_0\sqrt{\frac{\varrho g d_0}{2\varepsilon_0}}\approx 232~\rm kV.$ 
 $b)$ Helyezzünk bele most egy $xd_0$ vastagságú alumíniumlemezt a kondenzátorba ($0<x<1$). A lemez megemelkedésének feltétele: 
 $\frac{\varepsilon_0 U^2}{2\varrho g d_0^3}> x(1-x)^2\equiv f(x).$ 
 Az ábra $f(x)$ grafikonját és a megemelkedés feltételét mutatja. Adott (de nem túl nagy) $U$ esetén ez a feltétel akkor teljesül, ha $x<x_1$ vagy $x>x_2$, azaz az alumíniumlemez elég vékony (könnyű), vagy elég vastag, emiatt viszonylag közel kerül a felső kondenzátorlemezhez. 

 $c)$ Az $f(x)$ függvénynek $x=\tfrac13$-nál maximuma van, és a maximum értéke $\tfrac 4{27}$. Ezt differenciálszámítással, vagy a számtani-mértani középre vonatkozó egyenlőtlenség segítségével láthatjuk be: 
 $\sqrt[3]{2f(x)}=\sqrt[3]{(2x)(1-x)(1-x)}\le \frac{(2x)+(1-x)+(1-x)}{3}=\frac{2}{3},$ 
 azaz 
 $f(x)\le \frac{4}{27}.$ 
 (Az egyenlőség $2x=1-x$, azaz $x=\tfrac13$-nál teljesül, itt lesz $f(x)$ maximuma.) 
 Amennyiben 
 $U>U_ \text{krit}=\frac{2}{3}d_0\sqrt{\frac{2\varrho g d_0}{3\varepsilon_0}}= 238~\rm kV,$ 
 az adott lemeztávolságú kondenzátorban semmilyen vastag alumíniumlemez nem maradhat nyugalomban az alsó fegyverzeten.

![solution figure](../../raw_html/komal_figures/komal-P5141-sol-fig1.gif)
