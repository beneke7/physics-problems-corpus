---
id: komal-P5226
source: komal
language: hu
translated: false
problem: komal-P5226
figure_files: [komal-P5226-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Jelöljük a rudak keresztmetszetét $A$-val, az érintkezési pont hőmérsékletét pedig $T$-vel. (Nyilván $T_1<T<T_2$.) A Newton-féle hővezetési törvény szerint egy-egy rúdon egységnyi idő alatt átáramló hő: $Q=A\lambda \Delta T/\ell$. Az érintkezési felületre ugyanannyi hő érkezik az egyik rúdból, mint amennyi távozik a másik rúd felé: 
 $A\frac{\lambda_2}{\ell_2}\,(T_2-T)=A\frac{\lambda_1}{\ell_1}\,(T-T_1),$ 
 ahonnan a keresett hőmérséklet: 
 $T=\frac{(\lambda_2/\ell_2)\,T_2+(\lambda_1/\ell_1)\,T_1}{(\lambda_1/\ell_1)+(\lambda_2/\ell_2)}\approx 42\,^\circ\rm C.$ 
 (Ez az érték a rúd végpontjainál mérhető hőmérsékletek súlyozott számtani közepe. A súlyfaktorok a megfelelő $\lambda/\ell$ mennyiségek.) 

 $b)$ Egy-egy rúd mentén a hőmérséklet lineárisan változik, hiszen a hőáram a rúd egyes részeinél ugyanakkora. Ennek megfelően a hőmérséklet-eloszlás a teljes rúd mentén:

![solution figure](../../raw_html/komal_figures/komal-P5226-sol-fig1.gif)
