---
id: komal-P5022
source: komal
language: hu
translated: false
problem: komal-P5022
figure_files: [komal-P5022-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Használjuk az ábrán látható jelöléseket! 

 A két pontszerű test felezőpontja a felfüggesztési pont alatt, attól 
 $h=\sqrt{\frac{5}{2}L^2-\frac{1}{4}r^2}$ 
 távolságra található. (Ezt a fonalak által kifeszített háromszög két részére felírható koszinusztételből kaphatjuk meg.) 
 Határozzuk meg először a két test $r$ távolságát! Mindkét töltött testre, így a jobb oldalira is $F=k\frac{Q^2}{r^2}$ nagyságú elektrosztatikus taszítóerő és függőleges irányú, $mg$ nagyságú nehézségi erő hat. Az ábrán sötéten jelölt háromszögek hasonlósága miatt fennáll, hogy 
 $\frac{F}{mg}=\frac{r}{2h},$ 
 vagyis 
 $k\frac{Q^2}{mgL^2}\sqrt{10-\left(\frac{r}{L}\right)^2}=\left(\frac{r}{L}\right)^3.$ 
 A négyzetgyök előtt álló dimenziótlan szám (a feladat szövegében szereplő numerikus értékek mellett) $1{,}796\approx 1{,}8$, így a megoldandó egyenlet az $x\equiv r/L$ dimenziótlan mennyiségre: 
 $1{,}8\sqrt{10-x^2}=x^3.$ 
 Ezt a ,,nem szokványos'' egyenletet négyzetre emeléssel és új változó bevezetésével harmadfokúvá alakíthatjuk, de közvetlenül is megoldhatjuk numerikusan, pl. a http://www.wolframalpha.com felhasználásával. A megoldás: $x=1{,}69$, és így a fonalak által kifeszített háromszögre alkalmazott koszinusztételből a fonalak keresett szöge mintegy $58^\circ$.

![solution figure](../../raw_html/komal_figures/komal-P5022-sol-fig1.gif)
