---
id: komal-P5318
source: komal
language: hu
translated: false
problem: komal-P5318
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen a ritkább térrészben tetszőleges $v$ kezdősebességgel induló részecskének a megállásig megtett útja $s_1=f_1(v)$, a sűrűbb közegben ugyanez $s_2=f_2(v)$. Az $f_1(v)$ és $f_2(v)$ függvények alakját az erőtörvény ismerete nélkül nem tudjuk megadni, de belátjuk, hogy a megtett utak aránya $v$-től független állandó : 
 $\frac{f_1(v)}{f_2(v)}=\frac32.$ 

 Megjegyzés. Korábban már megjelent a KöMaL-ban két, a mostanihoz hasonló feladat. A P. 5244. feladatban (2020. szeptember) a lassulás állandó $a_0$ nagyságú volt, ilyenkor $f(v)=v^2_0/(2a_0)$. A 2020. decemberben kitűzött P. 5282. feladatban a fékezőerő a sebességgel arányos volt, ebben az esetben $f(v)=k\cdot v$. Mindkét problémánál igaz, hogy az $\frac{f_1(v)}{f_2(v)}$ arány $v$-től független állandó. Ez az érdekes tulajdonság tetszőleges erőtörvény esetén érvényes, ha az erők aránya minden sebességnél ugyanakkora. 

 Legyen az egyik közegben a fékezőerő $F_1(v)$, a másikban $F_2(v)$, a $v_0$ kezdősebességű részecske mozgási energiája pedig $E_0$. A newtoni mechanikában $E_0=\tfrac12mv_0^2$, a relativisztikus törvények szerint pedig 
 $E_0=\frac{m_0c^2}{\sqrt{1-v^2/c^2}}-m_0c^2.$ 
 A további megfontolásainknál nem lényeges $E(v_0)$ konkrét alakja, tehát az eredményünk a fénysebességhez közeli sebességgel induló részecskékre is érvényes lesz. Azt azonban tudjuk, hogy az egyforma sebességgel induló részecskék mozgási energiája kezdetben ugyanakkora. 
 Alkalmazzuk a munkatételt mindkét esetben egy $E_0$ mozgási energiával induló részecskére. Az éppen $v$ sebességű részecske mozgási energiájának megváltozása (csökkenése) egy kicsiny $\Delta x$ út megtétele után 
 $\Delta E(v)=-F(v)\cdot \Delta x,$ 
 azaz 
 $\Delta x=\frac{\vert\Delta E(v)\vert}{F(v)}.$ 
 Összegezzük a kicsiny elmozdulásokat a részecske teljes útvonalára, vagyis amíg a mozgási energia $E_0$-ról nullára csökken. Írjuk fel a megtett út képletét mindkét térrészben végbemenő mozgásra: 
 $\sum \Delta x=\sum\frac{\Delta E(v)}{F(v)},$ 
 vagyis 
 $s_1=\sum\frac{\Delta E(v)}{F_1(v)},\qquad \text{illetve} \qquad
s_2=\sum\frac{\Delta E(v)}{F_2(v)}.$ 
 Tudjuk, hogy $F_1(v)$ és $F_2(v)$ aránya a $v$ sebességtől független állandó, aminek nagysága $\frac23$, hiszen $\frac{s_1}{s_2}=\frac32.$ 
 A sűrűbb közegben 1,5 fényév megtétele után a részecske sebessége valamekkora $v^*$ értékre csökken, de még nem áll meg. Ha továbbra is a sűrűbb térrészben haladna, akkor még 0,5 fényévnyi utat tenne meg, tehát $f_2(v^*)=0{,}5$ fényév. Ha viszont a részecske $v^*$ kezdősebességgel a ritkább térrészben halad tovább, a megállásig további 
 $f_1(v^*)=\tfrac{3}{2}f_2(v^*)=0{,}75~\text{fényév}$ 
 utat tesz meg. 
 A sötét anyag (hipotetikus) részecskéi tehát összesen $1{,}5+0{,}75=2{,}25$ fényév utat tesznek meg a megállásukig.
