---
id: komal-P5357
source: komal
language: hu
translated: false
problem: komal-P5357
figure_files: [komal-P5357-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás:**
 Jelöljük a rúd súlyát $G$-vel, hosszát $\ell$-lel, a felső végénél ható erőt $F$-fel, az alsó végénél ható nyomóerőt $N$-nel, és végül a súrlódási erőt $S$-sel (lásd az ábrát ). 

 Amikor a rúd $\varphi$ szöget zár be a vízszintessel, a következő összefüggések érvényesek: 
 $S=F\sin\varphi\qquad \text{(vízszintes erők egyensúlya)},$ 
 $N+F\cos\varphi=G\qquad \text{(függőleges erők egyensúlya)},$ 
 $F\ell =G\frac{\ell}{2} \cos\varphi\qquad \text{(forgatónyomatékok egyensúlya)}.$ 
 Innen $S$ és $N$ kifejezhető $G$ segítségével: 
 $S=\frac{\sin\varphi\,\cos\varphi}{2}G,$ 
 $N=\left(1-\frac{\cos^2\varphi}{2}\right) G.$ 
 A rúd akkor nem csúszik meg az alsó végpontjánál, ha 
 $\mu>\frac{S}{N}=\frac{\sin\varphi\,\cos\varphi}{2-\cos^2\varphi}\equiv f(\varphi).$ 
 $f(\varphi)$ arányos a $2\sin^2\varphi$ és a $\cos^2\varphi$ mértani és számtani közepének a hányadosával, tehát akkor maximális, ha e két mennyiség megegyezik: 
 $f(\varphi)= \frac{1}{\sqrt{8}}\cdot \frac{\sqrt{2\,\sin^2\varphi}\sqrt{\cos^2\varphi}}
{\frac12\left(2\,\sin^2\varphi+\cos^2\varphi\right) }\le \frac{1}{\sqrt{8}}=\mu_\text{krit.}.
$ 
 (Ugyanezt grafikus ábrázolással, vagy felsőbb matematikai módszerekkel is beláthatjuk.) 
 Ha tehát 
 $\mu>\mu_\text{krit.}\approx 0{,}35,$ 
 akkor a rúd a felállítása során semelyik helyzeténél nem csúszik meg.

![solution figure](../../raw_html/komal_figures/komal-P5357-sol-fig1.gif)
