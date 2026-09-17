---
id: komal-P5107
source: komal
language: hu
translated: false
problem: komal-P5107
figure_files: [komal-P5107-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen az egyforma ellenállások értéke $R$, a tőlük különbözőé pedig $X$. A síkba kiterített kapcsolási rajz az ábrán látható. 

 A különböző csomópontpárok között háromféle ellenállást mérhetünk: 
 $i)$ Ha a mérőműszer nem csatlakozik az eltérő $X$ ellenállás egyik végéhez sem: 
 $(1)$ $R_{CB}=R_1=\frac{1}{2}R.$ 
 $ii)$ Ha a mérőműszer az eltérő $X$ ellenállás mindkét végéhez csatlakozik: 
 $(2)$ $R_{AD}=R_2=\frac{X}{X+R}R.$ 
 $iii)$ Ha a mérőműszer az eltérő $X$ ellenállásnak csak az egyik végéhez csatlakozik: 
 $(3)$ $R_{AC}=R_{AB}=R_{DC}=R_{DB}=R_3=\frac{5X+3R}{8(X+R)}R.$ 
 (Az (1) és (2) összefüggéseket a megfelelő ekvipotenciális pontok felhasználásával, (3)-at pedig a három darab $R$ ellenállású deltakapcsolás $\tfrac13R$ ellenállásokból álló csillagkapcsolássá alakításával kaphatjuk meg. Természetesen a mérések csak $R_1$, $R_2$ és $R_3$ számszerű értékét adják meg, de azt nem, hogy melyikük melyik esetnek felel meg.) 
 Megmutatjuk, hogy 4 mérés biztosan elegendő, de szerencsés esetben három is elvezethet a megoldáshoz. Ha megmérjük valamelyik (mondjuk a $P$-vel jelölt pontból kiinduló) két él végpontjai közötti eredő ellenállást, és egyforma értéket kapunk, akkor az biztosan $R_3$, hiszen csak $R_3$ fordulhat elő több pontpár közötti eredő ellenállásként. További 2 méréssel (a $P$-ből kiinduló harmadik él, illetve a $P$-re nem illeszkedő negyedik él mentén mérve) megkapjuk – valamilyen sorrendben – $R_1$-et és $R_2$-t. Amennyiben az első két mérés különböző eredményre vezetett, akkor megmérjük az egyik ág ,,folytatását'' jelentő (de nem zárt háromszöget kialakító) harmadik él mentén az eredő ellenállást. Ha ez az első két mérés valamelyikének eredményével megegyezik, akkor az csak $R_3$ lehet, a másik $R_1$ vagy $R_2$, és egy negyedik mérés megadja a hiányzó $R_2$-t, illetve $R_1$-et. Ha olyan szerencsénk van, hogy a ,,láncban'' elvégzett három mérés három különböző eredményt ad, akkor a középső kell legyen $R_3$ (hiszen az $R_1$-et és $R_2$-t eredményező ágak nem szomszédosak), így már három mérésből megtudtuk $R_3$ értékét, valamint – a sorrendjüket ugyan nem ismerve – $R_1$ és $R_2$ nagyságát is. 
 Hogyan választhatjuk ki $R_1$ és $R_2$ valamilyen sorrendben megmért értékeiből, hogy melyik melyik? Feltételezzük az egyik mérésről, hogy az $R_1$. A mért ellenállásból és az (1) összefüggésből kiszámítjuk $R$-et, $R_3$ mért értékéből (3) alapján kiszámítjuk $X$-et, majd (2)-t összevetjük a harmadik mérési adattal. Ha jó az egyezés, akkor helyesen azonosítottuk az eltérő ellenállás helyét, ha nem, akkor fordított szereposztással megismételjük az azonosítást. 
 Az itt ismertetett eljárást az teszi lehetővé, hogy három mérési adatunk van ($R_1$, $R_2$ és $R_3$), de csak két ismeretlen ($R$ és $X$). Az egyenletek túlhatározottságát felhasználhatjuk a harmadik ,,ismeretlen'', az eltérő nagyságú ellenállás helyének meghatározására.

![solution figure](../../raw_html/komal_figures/komal-P5107-sol-fig1.gif)
