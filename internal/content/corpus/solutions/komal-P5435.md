---
id: komal-P5435
source: komal
language: hu
translated: false
problem: komal-P5435
figure_files: [komal-P5435-sol-fig1.gif, komal-P5435-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A kis testre a következő erők hatnak: 
 1. Az $mg$ nehézségi erő, amit célszerű felbontani egy forgástengely irányú, $mg\sin\alpha$ nagyságú, valamint egy arra merőleges, $mg\cos\alpha$ nagyságú komponensre ( 1. ábra ). 

 1. ábra 
 2. Az $S$ nagyságú súrlódási erő, amelynek egyik komponense ($S_1$) a $v$ sebességű csúszással ellentétes irányú, tehát a forgástengellyel párhuzamos. A súrlódási erő másik komponense ($S_2$) a forgástengelyre merőleges és a cső érintősíkjában fekszik, ellentétes irányú a cső és a kis test érintkezési pontjánek $R\omega$ nagyságú sebességével. 
 3. A cső fala valamekkora $N$ nyomóerőt fejt ki a kis testre. Ez az erő a henger forgástengelyén is áthalad, arra merőleges hatásvonalú. 
 Tekintsük a hengernek a kis test pillanatnyi helyzetéhez tartozó keresztmetszetét ( 2. ábra ). Ezen az ábrán $\varphi$-vel jelöltük azt a szöget, ami a kis test helyzetét (a cső fala menti ,,elfordulását'') jellemzi az elegendő hosszú idő után létrejövő állandósult csúszási állapotban. A test ekkor már nem gyorsul, egyenes vonalú egyenletes mozgást végez. 

 2. ábra 

 A kis testre ható erők eredője (vektori összege) ebben az állapotban nulla. Ezt a feltételt érdemes az erők komponenseinek összegével kifejezni. A forgástengely irányú erők eredője: 
 $(1)$ $mg\sin\alpha-S_1=0. $ 
 A forgástengelyre merőleges síkban az érintő irányú erők eredője: 
 $(2)$ $mg\cos\alpha\,\sin\varphi-S_2=0. $ 
 A forgástengelyre merőleges síkban a sugár irányú (a forgástengelyen átmenő) erőkomponensekre fennáll: 
 $(3)$ $N-mg\cos\alpha\,\cos\varphi=0. $ 
 Tudjuk még, hogy a csúszási súrlódásnál 
 $(4)$ $\sqrt{S_1^2+S_2^2}=\mu N,$ 
 valamint azt, hogy a súrlódási erő iránya a csúszó test és a felület relatív sebességével párhuzamos és azzal ellentétes irányú, így 
 $(5)$ $\frac{v}{R\omega}=\frac{S_1}{S_2}.$ 
 Az (1)-(5) egyenletrendszer öt ismeretlent tartalmaz, ezek: $S_1$, $S_2$, $N$, $\varphi$ és $v$. (1)-ből és (2)-ből kapjuk, hogy 
 $(1')$ $S_1=mg\sin\alpha, $ 
 valamint 
 $(2')$ $S_2=mg\cos\alpha\,\sin\varphi, $ 
 továbbá (3) szerint 
 $(3')$ $N=mg\cos\alpha\,\cos\varphi. $ 
 Ezeket (5)-be helyettesítve kapjuk, hogy 
 $(5')$ $\frac{v}{R\omega}= 
 \frac{\tan\alpha}{\sin\varphi}.$ 
 (1'), (2') és (3')-t (4)-be helyettesítve, majd mindkét oldalt négyzetre emelve 
 $\sin^2\alpha+\cos^2\alpha\,\sin^2\varphi=\mu^2 \cos^2\alpha\,(1-\sin^2\varphi),$ 
 amiből 
 $\tan^2\alpha+\sin^2\varphi=\mu^2-\mu^2\sin^2\varphi,$ 
 azaz 
 $\sin\varphi=\sqrt{\frac{\mu^2-\tan^2\alpha}{1+\mu^2}}$ 
 adódik. Ezt (5')-be írva megkapjuk az egyenletes mozgás sebességét: 
 $v=R\omega\cdot \tan\alpha\sqrt{\frac{1+\mu^2}{\mu^2-\tan^2\alpha}}.$

![solution figure](../../raw_html/komal_figures/komal-P5435-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5435-sol-fig2.gif)
