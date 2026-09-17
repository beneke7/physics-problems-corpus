---
id: komal-P5202
source: komal
language: hu
translated: false
problem: komal-P5202
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Ha a fajhő a hőmérséklettel arányos, akkor egy adott tömegű fémdarab hőkapacitása is a hőmérséklettel arányos: $C(T)=k\cdot T$, ahol a $k$ arányossági tényező a fémdarab anyagától és tömegétől függő állandó. (A hőkapacitás az a hőmennyiség, amely az adott anyagi rendszer hőmérsékletének 1 K-nyi növeléséhez szükséges. A hőkapacitás a fajhő és a melegített test tömegének szorzata.) 
 Egy fémdarab belső energiája nagyon alacsony hőmérsékleteken (a $T=0$ állapothoz viszonyítva): 
 $E=C_\text{átlag}\cdot T=\left(k\frac{T}{2}\right)T.$ 

 Megjegyzés. Általános esetben, tetszőleges $C(T)$ hőfokfüggés esetén a belső energia változása a $C(T)$ függvény grafikonjának görbe alatti területeként (integráljaként) kapható meg. Ha $C(T)$ lineáris függvény, akkor a kérdéses terület egy trapéz (vagy egy derékszögű háromszög) területével egyezik meg, amit a kezdeti és végső hőkapacitás számtani közepével számolt átlagból is megkaphatunk. Ugyanezt a gondolatmenetet alkalmazzuk az $F=D\, x$ Hooke-törvényt követő rugó $E(x)=F_\text{átlag}\cdot x=\frac{1}{2}Dx^2$ energiájának kiszámításakor, vagy az egyenletesen gyorsuló mozgás során megtett út meghatározásakor: 
 $s(t)=v_\text{átlag}\cdot t=\frac{v_0+(v_0+at)}{2}t=v_0t+\frac{a}{2}t^2.$ 

 A fémdarabok összeérintése után a rendszer belső energiája nem változik, vagyis 
 $k_A\frac{(1~\rm K)^2}{2}+k_B\frac{(3~\rm K)^2}{2}=k_A\frac{(2~\rm K)^2}{2}+k_B\frac{(2~\rm K)^2}{2}.$ 
 Innen adódik, hogy 
 $k_B=\frac{3}{5}\,k_A.$ 
 A második esetben a $T=T_\text{közös}$ hőmérsékletre felírhatjuk, hogy 
 $k_A\frac{ T_A ^2}{2}+k_B\frac{T_B^2}{2}=k_A\frac{ T^2}{2}+k_B\frac{T ^2}{2},$ 
 ahonnan 
 $T=\sqrt{\frac{3T_B^2+5T_A^2}{3+5}}\approx 1{,}9~\rm K.$
