---
id: komal-P5493
source: komal
language: hu
translated: false
problem: komal-P5493
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Közelítsük a Föld Nap körüli mozgását $r$ = 150 millió km sugarú körpályával, továbbá a Föld és az L$_2$ Lagrange-pont távolsága legyen $h$. Ekkor az L$_2$ Lagrange-pontba helyezett $m$ tömegű testre a Nap és a Föld gravitációs ereje ugyanabba az irányba hat, és ezek szolgáltatják a körpályán tartáshoz szükséges erőt (a Hold hatását elhanyagoljuk): 
 $\gamma\frac{mM_{\textrm{Nap}}}{(r+h)^2}+\gamma\frac{mM_{\textrm{Föld}}}{h^2}=m(r+h)\omega^2=m(r+h)\left(\frac{2\pi}{T}\right)^2.$ 
 Az $m$ tömeggel tudunk egyszerűsíteni: 
 $\gamma\frac{M_{\textrm{Nap}}}{(r+h)^2}+\gamma\frac{M_{\textrm{Föld}}}{h^2}=(r+h)\omega^2=(r+h)\left(\frac{2\pi}{T}\right)^2.$ 
 Ezek után a legegyszerűbb az, ha a fenti egyenlet bal és jobb oldalába is behelyettesítjük az ismert adatokat, beleértve a feltételezett $h$ = 1,5 millió km-es távolságot is. A bal oldal esetén $5,96\,\cdot\,10^{-3}$ N/kg-ot kapunk, míg a jobb oldal $6,01\,\cdot\,10^{-3}$ N/kg-nak adódik. Az egyezés 1%-on belüli, tehát jó közelítssel igazoltuk az állítást. 

**II. megoldás.**
 Mérjük a távolságokat CsE (Nap-föld távolság), a tömegeket naptömeg egységben, az időt pedig olyan egységben, hogy a gravitációs állandó is 1 legyen. A Föld tömege ilyen egységrendszerben $\tfrac1{330\,000}$ lesz. 
 A Földre felírható mozgásegyenletből adódik, hogy a keringés szögsebessége: $\omega=1$. A $m$ tömegű test mozgásegyenlete, ha a Földtől $x$ távolságban a Földdel együtt kerint ugyancsak $\omega$ szögsebességgel: 
 $\frac{1}{(1+x)^2}+\frac1{330\,000\ x^2}=1+x.$ 
 A Föld tömege a Naphoz képest nagyon kicsi, így feltehetjük, hogy $x\ll 1$, és ezért $\frac{1}{(1+x)^2}\approx 1-2x.$ Ekkor a mozgásegyenlet: 
 $\frac1{330\,000\ x^2}=3x,$ 
 vagyis 
 $x= \sqrt [3]{\frac1{3\cdot 330\,000 }}=0{,}01,$ 
 ami a szokásos SI egységekben valóban $1{,}5\ \text{millió km}.$
