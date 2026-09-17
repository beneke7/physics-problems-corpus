---
id: komal-P5507
source: komal
language: hu
translated: false
problem: komal-P5507
figure_files: [komal-P5507-sol-fig1.png, komal-P5507-sol-fig2.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen a deszkák által bezárt szög $2\varphi$, az egyes deszkák és a henger között ható nyomóerő $N$, a súrlódási erő pedig $S$ (lásd az 1. ábrát ). 
 1. ábra 

 Mivel a deszkák és a henger érintkezési pontjai a forgástengelytől 
 $OA=OA'=\frac{R}{\tan\varphi}=\frac{\ell}{5}\cdot \frac{\cos\varphi}{\sin\varphi}$ 
 távol vannak, továbbá $OB=OB'=\ell/2$, a deszkáknak az $O$ tengelyre vonatkoztatott forgatónyomaték-egyensúlyi feltétele: 
 $N\,\frac{\ell}{5}\cdot \frac{\cos\varphi}{\sin\varphi}=mg\,\cfrac{\ell}{2}\sin\varphi,$ 
 vagyis 
 $(1)$ $N=\frac52 \,\frac{\sin^2\varphi}{\cos\varphi}\,mg.$ 
 Teljesülnie kell még a hengerre ható erők egyensúlyi feltételének is. Az eredő erő vízszintes komponense a szimmetria miatt biztosan nulla, így elegendő a függőleges erőkomponenseket összegezni: 
 $Mg+2N\sin\varphi-2S\cos\varphi=0,$ 
 ahonnan $M=m/2$ és (1) felhasználásával 
 $(2)$ $S=\left( \frac{5\sin^3\varphi}{2\cos^2\varphi}+\frac{1}{4\cos\varphi} \right)mg $ 
 adódik. 
 A tapadó súrlódás feltétele: $S\le \mu N$, vagyis (1) és (2) ismeretében 
 $\mu \ge \frac{S}{N}\equiv\tan\varphi+\frac{1}{10\,\tan^2\varphi}+\frac{1}{10}.$ 
 Ábrázolva az $S/N$ hányadost $\varphi$ függvényében a 2. ábrán látható görbét kapjuk. 
 2. ábra 

 A tapadó súrlódás akkor tarthat egyensúlyt, ha $\mu$ a sárga tartományba esik. Láthatjuk, hogy a 
 $\mu\ge \mu_\text{min}\approx 1{,}0$ 
 feltételnek kell teljesülnie, és a legkisebb súrlódási együttható esetén csak a $2\varphi\approx 60^\circ$ szöget bezáró deszkák lehetnek egyensúlyban. Ha $\mu$-t valahogyan meg tudjuk növelni (pl. a deszkák felületét érdesebbé tesszük), akkor egyre szélesebb szögtartományban alakulhat ki egyensúly. 
 Ezeket az eredményeket más úton (grafikus ábrázolás vagy differenciálszámítás nélkül) is megkaphatjuk. Bevezetve az $x\equiv\tan\varphi$ jelölést az egyensúly feltétele: 
 $\mu \ge x+\frac{1}{10\,x^2}+\frac{1}{10}\equiv f(x).$ 
 Alkalmazva a számtani és mértani közepekre vonatkozó egyenlőtlenséget: 
 $f(x)-\frac1{10}=\frac{x}{2}+\frac{x}{2}+\frac{1}{10\,x^2}\ge 3\sqrt[3]{\frac{x}{2}\cdot\frac{x}{2}\cdot\frac{1}{10\,x^2}}=
\sqrt[3]{\frac{27}{40}}.$ 
 $f(x)$ legkisebb értékénél fennáll: 
 $\frac{x_0}{2}=\frac{1}{10\,x_0^2}, \qquad \text{vagyis}\qquad x_0=\frac{1}{\sqrt[3]{5}}\qquad\text{és}\qquad \varphi_0=\arctan x_0=30{,}3^\circ.$ 
 A legkisebb súrlódási együttható: 
 $\mu_\text{min}=f(x_0)=\sqrt[3]{\frac{27}{40}}+\frac1{10}=0{,}977\approx 1{,}0.$ 

 Megjegyzés. A deszkák és a henger érintkezési pontjai legfeljebb $\ell$ távolságra lehetnek a tengelytől. Emiatt teljesülnie kell még a 
 $\tan\varphi \ge \frac{R}{\ell}=\frac15,\qquad \text{vagyis}\qquad \varphi\ge 11{,}3^\circ$ 
 feltételnek is.

![solution figure](../../raw_html/komal_figures/komal-P5507-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-P5507-sol-fig2.png)
