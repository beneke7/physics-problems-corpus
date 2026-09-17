---
id: komal-P5458
source: komal
language: hu
translated: false
problem: komal-P5458
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás**
. Tekintsünk először egy általánosabb problémát: Mekkora $U^*$ üresjárati feszültségű és mekkora $R^*$ belső ellenállású lesz az a feszültségforrás, amit egy $U_1$ és $R_1$ adatokkal jellemzett és egy $U_2$ és $R_2$ adatokkal jellemzett telep soros , illetve párhuzamos kapcsolásával nyerünk? Ezeket az értékeket pl. úgy határozhatjuk meg, hogy kiszámítjuk a telepen átfolyó áram reciprokát $R$ nagyságú terhelő ellenállás függvényében. Mivel az Ohm-törvény szerint $U=I(R+R^*)$, ebből 
 $\frac1{I}\equiv f(R)=\frac1{U^*}\cdot R +\frac{R^*}{U^*}.$ 
 Látjuk, hogy az $f(R)$ függvény lineáris, a grafikonja olyan egyenes, amelynek meredeksége $\frac{1}{U^*}$, tengelymetszete pedig $\frac{R^*}{U^*}$. 
 $(i)$ Soros kapcsolásnál 
 $I=\frac{U_1+U_2}{R_1+R_2+R},$ 
 vagyis 
 $\frac1{I}=\frac1{U_1+U_2}\cdot R+\frac{R_1+R_2}{U_1+U_2}\equiv \frac1{U^*}\cdot R +\frac{R^*}{U^*},$ 
 ahonnan leolvashatjuk, hogy 
 $(1)$ $U^*=U_1+U_2, \qquad \text{valamint} \qquad R^*=R_1+R_2.$ 
 $(ii)$ Hasonló módon kapjuk, hogy párhuzamos kapcsolásnál 
 $(2)$ $U^*=\frac{U_1R_2+U_2R_1}{R_1+R_2}, \qquad \text{továbbá} \qquad R^*=\frac{R_1R_2}{R_1+R_2}.$ 
 A három egyforma telepet négyféle módon kapcsolhatjuk össze: 
 $A)$ a három telepet sorosan kapcsoljuk; 
 $B)$ a három telepet párhuzamosan kapcsoljuk; 
 $C)$ két telepet sorosan, majd a harmadikat ezekkel párhuzamosan kapcsoljuk (ami nem egy értelmes kapcsolás, hiszen az eredő telepben létrehozott hurokban akkor is árom fog folyni, ha semmit se kötöttünk rá); 
 $D)$ két telepet párhuzamosan, majd a harmadikat ezekkel sorosan kapcsoljuk. 
 Számítsuk ki ezekre az esetekre az eredő üresjárati feszültséget és az eredő belső ellenállást. (Az áramforrásokat azonos polaritással kapcsoljuk össze. Ha nem így tennénk, a leadott teljesítmény tetszőleges $R$ terhelésnél kisebb lenne, mint az azonos polaritású esetben.) Az (1) és (2) képletek kétszeri alkalmazásával kapjuk, hogy a megadott tulajdonságú telepeknél 
 $\text{az A) esetben:}\qquad \qquad U^*=36\ {\rm V},\qquad \qquad R^*=9\ \Omega;$ 
 $\ \text{a B) esetben:}\qquad \qquad U^*=12\ {\rm V},\qquad \qquad R^*=1\ \Omega;$ 
 $\ \text{a C) esetben:}\qquad \qquad U^*=16\ {\rm V},\qquad \qquad R^*=2\ \Omega;$ 
 $\ \text{a D) esetben:}\qquad \qquad U^*=24\ {\rm V},\qquad \qquad R^*=4{,}5\ \Omega.$ 
 Akármelyik kapcsolást nézzük is, az $R$ külső terhelő ellenálláson átfolyó áram erőssége 
 $I=\frac{U^*}{R^*+R},$ 
 a leadott teljesítmény pedig 
 $P=I^2R=\left(\frac{U^*}{R^*+R}\right)^2\,R.$ 
 Számítsuk ki ezeket a teljesítményeket valamennyi ellenállásnál valamennyi kapcsolásra. 
 Az $a)$ esetben (amikor $R = 1\ \Omega$): 
 $P_{aA}=13{,}0\ \rm W; \qquad
P_{aB}={\large \bf 36\ \rm W}; \qquad
P_{aC}={28{,}4\ \rm W}; \qquad
P_{aD}=19{,}0\ \rm W. \qquad$ 
 A legnagyobb teljesítményt tehát a párhuzamosan kapcsolt telepek adják le. 
 A $b)$ esetben (amikor $R = 3\ \Omega$): 
 $P_{bA}=27{,}0\ \rm W; \qquad
P_{bB}=27{,}0\ \rm W; \qquad
P_{bC}={\large\bf 30{,}72\ \rm W}; \qquad
P_{bD}={\large\bf 30{,}72\ \rm W}. \qquad$ 
 A vegyes (soros-párhuzamos és a párhuzamos) kapcsolású telepek ugyanakkora teljesítményt adnak le, a ,,tiszta'' kapcsolásokban kevesebb teljesítmény jut a külső ellenállásra. 
 A $c)$ esetben (amikor $R = 3{,}5\ \Omega$): 
 $P_{cA}=29{,}0\ \rm W; \qquad
P_{cB}=24{,}9\ \rm W; \qquad
P_{cC}=29{,}6\ \rm W; \qquad
P_{cD}={\large\bf 31{,}5\ \rm W}. \qquad$ 
 A legnagyobb teljesítményt tehát az egyik vegyes telepkapcsolásnál kapjuk (két párhuzamosan kapcsolt teleppel sorosan kapcsolva a harmadik). 
 A $d)$ esetben (amikor $R = 6\ \Omega$): 
 $P_{dA}={\large\bf 34{,}6\ \rm W}; \qquad
P_{dB}=17{,}6\ \rm W; \qquad
P_{dC}=24{,}0\ \rm W; \qquad
P_{dD}=31{,}3\ \rm W. \qquad$ 
 A legnagyobb teljesítményt tehát a sorosan kapcsolt telepek adják le.
