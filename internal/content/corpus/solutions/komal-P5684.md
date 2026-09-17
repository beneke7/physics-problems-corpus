---
id: komal-P5684
source: komal
language: hu
translated: false
problem: komal-P5684
figure_files: [komal-P5684-sol-fig1.gif, komal-P5684-sol-fig2.gif, komal-P5684-sol-fig3.gif, komal-P5684-sol-fig4.gif, komal-P5684-sol-fig5.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Először is rajzoljuk át a kapcsolási rajzot úgy, hogy a sorosan és párhuzamosan kapcsolt részek áttekinthetőbbek legyenek. Az 1. ábrán a nagy négyzeten további pontokat jelöltünk meg, hogy segítsük a kétféle elrendezés részleteinek azonosítását. A 2. ábrán $A$ és $C$, a 3. ábrán $A$ és $B$ a kapcsolás kimeneti pontjai. Ellenállásegységnek a kicsi négyzet egyik oldalának $R$ ellenállását választottuk; a jelöletlen ellenállások 1 egységnyiek. 

 1. ábra 

 2. ábra 

 3. ábra 

 Kezdjük az $A$ és $C$ pontok közti $R_{AC}$ eredő ellenállással ( 2. ábra ). A kapcsolás alsó és felső ága egyforma, a két függőleges helyzetben (halványabban) rajzolt ellenállás végpontjai azonos potenciálon vannak, nem folyik rajtuk áram, ezért olyan, mintha ott sem lennének. Nélkülük a kapcsolás csak soros és párhuzamos részekből áll, az eredő ellenállás pedig: 
 $R_{AC}=\frac{1}{2}\left(R+R+\frac{1}{2}\cdot 2R+R+R\right)=2{,}5R.$ 
 A 3. ábrán látható kapcsolás kicsit bonyolultabb: az alsó és felső ág különbözik, és a függőleges ágakban is folyik áram. Hogy az ezzel járó bonyodalmakat elkerüljük, alakítsuk a szélen levő háromszögeket csillaggá ($\Delta$-t Y-ná) úgy, ahogy a 4. ábrán látható. 

 4. ábra 

 A csillagban levő ellenállások értékeit a Függvénytáblázatban található képletek segítségével kaptuk: 
 $\frac{R\cdot R}{R+R+2R}=\frac{1}{4}R,\qquad\frac{R\cdot 2R}{R+R+2R}=\frac{1}{2}R.$ 
 A $D$ és $G$ pontok közti rész eredő ellenállása: 
 $R_{DG}=R+\frac{1}{2}\cdot 2R+R+\frac{1}{2}\cdot 2R+R=5R.$ 
 Az utolsó két eredményt berajzolva a 3. ábrába az 5. ábrához jutunk, melynek eredő ellenállását már könnyebben felírhatjuk: 
 $R_{AB}=\frac{1}{4}R+\frac{\left(\frac{1}{2}R+5R+\frac{1}{2}R\right)\left(\frac{1}{2}R+R+\frac{1}{2}R\right)}{\left(\frac{1}{2}R+5R+\frac{1}{2}R\right)+\left(\frac{1}{2}R+R+\frac{1}{2}R\right)}+\frac{1}{4}R=\frac{1}{2}R+\frac{6R\cdot 2R}{8R}=2R$ 

 5. ábra 

 A két eredő ellenállás aránya végül: 
 $\frac{R_{AB}}{R_{AC}}=\frac{2R}{2{,}5R}=\frac{4}{5}=0{,}8.$

![solution figure](../../raw_html/komal_figures/komal-P5684-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5684-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5684-sol-fig3.gif)

![solution figure](../../raw_html/komal_figures/komal-P5684-sol-fig4.gif)

![solution figure](../../raw_html/komal_figures/komal-P5684-sol-fig5.gif)
