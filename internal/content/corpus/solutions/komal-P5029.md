---
id: komal-P5029
source: komal
language: hu
translated: false
problem: komal-P5029
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Jelöljük az alumíniumkocka sűrűségét $\varrho_1$-gyel, a vas sűrűségét $\varrho_2$-vel, az egyes darabok tömegét pedig $m$-mel. A kockák térfogata $m/\varrho_1$, illetve $m/\varrho_2$, az egész fémtömb átlagsűrűsége tehát 
 $\overline{\varrho}=\frac{2m}{\frac{m}{\varrho_1}+\frac{m}{\varrho_2}}=\frac{2}{\frac{1}{\varrho_1}+\frac{1}{\varrho_2}},$ 
 ami a $\varrho_1$ és $\varrho_2$ sűrűségek harmonikus közepe . A vas és az alamínium ismert sűrűségével számolva 
 $\overline{\varrho}\approx 4020~\frac{\rm kg}{\rm m^3}.$ 
 $b)$ $\Delta T=15~^\circ$C hőmérsékletváltozás hatására a testek térfogatának relatív megváltozása: 
 $\frac{\Delta V_{1,2}}{V}=3\alpha_{1,2} \Delta T,$ 
 ahol $\alpha_1$ és $\alpha_2$ az alumínium, illetve a vas lineáris hőtágulási együtthatója. A két fémből álló rendszer megváltozott átlagsűrűsége: 
 $\overline{\varrho}+\Delta\overline{\varrho}=
\frac{2}{\frac{1+3\alpha_1 \Delta T}{\varrho_1}+\frac{1+3\alpha_2 \Delta T}{\varrho_2}}.$ 
 Az átlagsűrűség (kicsiny) megváltozását nem célszerű az eredeti és a megváltozott átlagsűrűségek numerikus értékének különbségeként számolni, mert két majdnem egyforma szám különbsége (a kerekítési hibák miatt) csak nagyon pontatlanul adja meg az eredményt. Ehelyett érdemes a két formula különbségét képezni: 
 $\Delta\overline{\varrho}=\frac{2}{\frac{1+3\alpha_1 \Delta T}{\varrho_1}+\frac{1+3\alpha_2 \Delta T}{\varrho_2}}-
\frac{2}{\frac{1}{\varrho_1}+\frac{1}{\varrho_2}} 
 \approx -3\frac{2\Delta T}{\left( \frac{1}{\varrho_1}+\frac{1}{\varrho_2} \right)^2}\left( \frac{\alpha_1}{\varrho_1}+ \frac{\alpha_2}{\varrho_2}\right)\approx ~3{,}7~\frac{\rm kg}{\rm m^3}. $
