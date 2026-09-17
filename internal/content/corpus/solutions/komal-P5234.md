---
id: komal-P5234
source: komal
language: hu
translated: false
problem: komal-P5234
figure_files: [komal-P5234-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az $A$ keresztmetszetű dugattyút felülről $p_0A$ erővel nyomja a külső légnyomás lefelé ($p_0=101~\rm kPa$), alulról pedig a gőz $p_\text{gőz}A$ erővel felfelé. Állandó hőmérsékleten a gőznyomás állandó, tehát a (súlytalan) dugattyú lenyomásához állandó 
 $F=\left(p_\text{gőz}-p_0\right)A$ 
 erőt kell kifejtenünk. 
 Az eredeti $V_0$ térfogatban $m=\varrho_\text{gőz}V_0$ tömegű vízgőz található. A teljes gőzmennyiség lecsapódásakor a térfogat 
 $V_1=\frac{m}{\varrho_\text{víz}}=\frac{\varrho_\text{gőz}}{\varrho_\text{víz}}V_0$ 
 értékre csökken, a dugattyú elmozdulása tehát 
 $\Delta x=\frac{V_0-V_1}{A},$ 
 az általunk végzett munka pedig 
 $W=F\Delta x=\left(p_\text{gőz}-p_0\right)\left(1-\frac{\varrho_\text{gőz}}{\varrho_\text{víz}}\right) V_0.$ 
 Ebben a képletben $\varrho_\text{gőz}$, $\varrho_\text{víz}$ és $p_\text{gőz}$ a hőmérséklet szerint változó mennyiségek, nagyságukat pl. a Négyjegyű függvénytáblázatokban találhatjuk meg. Feltételezve, hogy $p_0=101$ kPa, az ábrán vázolt grafikonnak megfelelő $W(T)$ értékeket kapjuk: 

 Látható, hogy a függvénykapcsolat nem monoton, hanem kb. $T_0=350~^\circ\rm C$-nál maximuma van. Eszerint előfordulhat, hogy két különböző hőmérsékletnél a vízgőz összenyomásakor végzett munka ugyanakkora. A hőmérséklet növelésekor a vízgőz nyomása ugyan fokozatosan nő (és emiatt egyre nagyobb erővel lehet csak lenyomni a dugattyút), azonban a gőz és a víz sűrűségének aránya is egyre növekszik. Így nagyobb erőt kisebb úton kell kifejtenünk, emiatt előfordulhat, hogy magasabb hőmérsékleten kisebb lesz a szükséges munkavégzés, mint egy alacsonyabb hőmérsékletnél.

![solution figure](../../raw_html/komal_figures/komal-P5234-sol-fig1.gif)
