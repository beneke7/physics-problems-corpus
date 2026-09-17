---
id: komal-P5290
source: komal
language: hu
translated: false
problem: komal-P5290
figure_files: [komal-P5290-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a részecske töltésének nagyságát (abszolút értékét) $Q$-val, a tömegét $m$-mel, és a kétféle mezőt elválasztó sík távolsága az indítási ponttól legyen $d$ (lásd az ábrát ). 

 A részecske az elektromos térben 
 $a=\frac{EQ}{m}$ 
 gyorsulással mozog a mezőket elválasztó sík felé, és 
 $t=\sqrt{\frac{2d}{a}}=\sqrt{\frac{2dm}{EQ}}$ 
 idő alatt teszi meg a $d$ távolságot. Eközben $\boldsymbol v_0$ irányában egyenletesen mozogva 
 $\ell=v_0t=\sqrt{\frac{2dmv_0^2}{EQ}}$ 
 utat tesz meg. A határoló síkhoz érve a sebességének egyik komponense $v_0$, a másik (az elektromos térrel ellentétes irányú) komponense 
 $v_1=at=\sqrt{\frac{2dEQ}{m}},$ 
 a sebességvektor nagysága pedig 
 $v=\sqrt{v_0^2+v_1^2}$ 
 lesz. 
 A mágneses térbe belépve (ahol az elektromos térerősség már nulla) a $\boldsymbol B$ indukcióvektornak és a $\boldsymbol v$ sebességvektornak megfelelő Lorentz-erő a hatására a részecske egyenletes körmozgást végez. A körpálya sugara a mozgásegyenletből kapható meg: 
 $QBv=\frac{mv^2}{R}, \qquad \text{tehát}\qquad
R=\frac{mv}{QB}.$ 
 Ha a kör középpontja éppen a $P$ pont ,alatt'' helyezkedik el, akkor a pálya szimmetrikus görbe lesz, és a részecske visszajut a $P$ pontba. Hasonló háromszögek oldalainak arányából 
 $\frac{\ell}{R}=\frac{v_1}{v},$ 
 ahonnan a korábbi részeredmények felhasználásával kapjuk, hogy 
 $B=\frac{mv}{QR}=\frac{mv_1}{\ell Q}=
\frac{m}{Q}\frac{\sqrt{\displaystyle\frac{2dEQ}{m}}}{\sqrt{\displaystyle\frac{2dmv_0^2}{EQ}}}=\frac{E}{v_0}.$ 
 Ez a meglepően egyszerű végeredmény (ami nem függ a $Q$, $m$ és $d$ mennyiségektől) így is felírható: 
 ${\boldsymbol E}={\boldsymbol v_0}\times {\boldsymbol B}.$

![solution figure](../../raw_html/komal_figures/komal-P5290-sol-fig1.gif)
