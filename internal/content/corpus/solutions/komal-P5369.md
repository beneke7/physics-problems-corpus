---
id: komal-P5369
source: komal
language: hu
translated: false
problem: komal-P5369
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az adott elrendezésben egyszerre lép fel a nyugalmi és a mozgási indukció jelensége. A fémpálca a $t$ időpillanatban $d+v_0t$ távol van a kapcsolótól és az ellenállástól, tehát a pálca által képezett zárt hurok területe $A(t)=(d+v_0t)\ell,$ aminek változási sebessége:
 $\frac{\Delta A}{\Delta t}=v_0\ell.$
 Ha ezt a változási sebességet megszorozzuk a mágneses indukció pillanatnyi értékével,
 $U_1=\frac{\Delta A}{\Delta t}\cdot B(t)=v_0\ell(B_0+kt)$
 indukált feszültséget kapunk. Ez a mozgási indukció járuléka.
 Másrészt az $A(t)$ területű téglalapon a mágneses indukció $\frac{\Delta B(t)}{\Delta t}=k$ változási sebességével arányos feszültség jön létre:
 $U_2=k\cdot A(t)=k\ell(d+v_0t).$
 Ez a nyugalmi indukció járuléka.
 A záródó vezetőben folyó áram erősségét a kétféle feszültség összege határozza meg:
 $I(t)=\frac{U_1+U_2}{R}=\frac{\ell}{R}(B_0v_0+kd+2kv_0t).$
