---
id: komal-P5215
source: komal
language: hu
translated: false
problem: komal-P5215
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a raktár teljes falfelületét $A$-val, a külső réteg hővezetési tényezőjét $\lambda$-val (ekkor a tégla hővezetési tényezője $10\lambda$). Ha a belső hőmérséklet $T_1$, a külső $T_2$, a tégla és a hőszigetelő határfelületén pedig $T$, akkor a hőáramsűrűség (egységnyi idő alatt egységnyi felületen átvezetett hő) a 40 cm vastag téglafalon is, és a 10 cm vastag szigetelőrétegen is ugyanakkora: 
 $j_1=10\lambda \frac{T_1-T}{0{,}4~\rm m}=\lambda\frac{T-T_2}{0{,}1~\rm m}.$ 
 Innen $T$ kiszámítható: 
 $T=\frac{T_1+0{,}4\,T_2}{1{,}4},$ 
 a hőáramsűrűség pedig 
 $j_1=7{,}14\lambda\left(T_1-T_2\right)\,{\rm m}^{-1}.$ 
 Hasonló módon számolhatunk a 20 cm vastag szigeteléssel ellátott falnál is: 
 $j_2=10\lambda \frac{T_1-T}{0{,}4~\rm m}=\lambda\frac{T-T_2}{0{,}2~\rm m},$ 
 ahonnan 
 $T=\frac{5T_1+T_2}{6},$ 
 és a hőáramsűrűség 
 $j_2=4{,}17\lambda\left(T_1-T_2\right)\,{\rm m}^{-1}.$ 
 Ha a fal mindenhol ugyanakkora, $d$ vastagságú hőszigetelést kapott volna, a hőáramsűrűség: 
 $j_3=\frac{25}{25\,d+1~\rm m}\,\lambda\left(T_1-T_2\right).$ 
 A kétféle megoldás akkor egyenértékű, ha a hőleadás (ugyanannyi idő és ugyanakkora hőmérséklet-különbség esetén) megegyezik: 
 $\frac{3}{4}Aj_1+\frac{1}{4}Aj_2= Aj_3,$ 
 ami $d=0{,}116~{\rm m}\approx 12~\rm cm$ mellett teljesül.
