---
id: komal-G915
source: komal
language: hu
translated: false
problem: komal-G915
figure_files: [komal-G915-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Egy homogén háromszöglemez tömegközéppontja a háromszög geometriai súlypontjával esik egybe. A háromszöglemez egyensúlyának feltétele, hogy a rá ható erők és forgatónyomatékok eredője egyaránt nulla legyen. Vizsgáljuk a forgatónyomatékot a háromszög egyik (mondjuk $AB$) oldalán átmenő $t$ tengelyre vonatkozóan (lásd az ábrát )! Erre a tengelyre nézve csak az $S$ súlypontban ható nehézségi erőnek és a $C$ csúcsban ható $F_C$ nyomóerőnek van forgatónyomatéka, ezért: 
 $k_1G−k_2F_C=0,$ 
 ahol $k_1$ és $k_2$ a megfelelő erőkarok hosszát jelöli. 

 Mivel a súlypont harmadolja a súlyvonalat, így (az ábrán látható hasonló derékszögű háromszögek miatt) az $S$ pont éppen harmadakkora távolságra van a $t$ tengelytől, mint a háromszög $C$ csúcsa, azaz $k_2=3k_1$. Ebből $F_C=G/3$. A többi oldalra is hasonlóan felírva a forgatónyomatékok egyensúlyát adódik, hogy a másik három csúcsnál ható támasztóerő is ugyanekkora: 
 $F_A=F_B=F_C=\frac{1}{3}G,$ 
 függetlenül a háromszög oldalainak hosszától! 

**II. megoldás.**
 Használjuk ki, hogy a háromszöglemez súlypontja ugyanott van, mintha három egyforma tömegpontot helyeznénk a háromszög csúcsaiba. Ebből már következik, hogy a csúcsokban ható támaszerők egyforma nagyok, mégpedig a háromszög súlyának harmadával egyeznek meg. Még arra sincs szükség, hogy a háromszög síkja vízszintes legyen. Egyedül akkor nem teljesül ez, ha a háromszög síkja függőleges. 

**III. megoldás.**
 A feladat vektorokkal is megoldható. Origónak a háromszög súlypontját választva a csúcsokba mutató $\boldsymbol{r}_A$, $\boldsymbol{r}_B$, $\boldsymbol{r}_C$ vektorokra fennáll az 
 $\boldsymbol{r}_A+\boldsymbol{r}_B+\boldsymbol{r}_C=0$ 
 összefüggés. A súlypontra vonatkoztatott forgatónyomatékok egyensúlyát az 
 $\boldsymbol{r}_A\times\boldsymbol{F}_A+\boldsymbol{r}_B\times\boldsymbol{F}_B+\boldsymbol{r}_C\times\boldsymbol{F}_C=0$ 
 egyenlet fejezi ki. A fenti két egyenletből $\boldsymbol{r}_C$ kiküszöbölésével, majd rendezéssel az 
 $\boldsymbol{r}_A\times(\boldsymbol{F}_A−\boldsymbol{F}_C)=\boldsymbol{r}_B\times(\boldsymbol{F}_C−\boldsymbol{F}_B)$ 
 összefüggésre jutunk. A bal oldalon álló vektor merőleges $\boldsymbol{r}_A$-ra, a jobb oldali vektor merőleges $\boldsymbol{r}_B$-re. Mivel $\boldsymbol{r}_A$ és $\boldsymbol{r}_B$ nem párhuzamos vektorok, így az egyenlőség csak akkor teljesülhet, ha mindkét oldalon nullvektor áll. Ezek szerint $\boldsymbol{F}_A=\boldsymbol{F}_B=\boldsymbol{F}_C$, azaz a három alátámasztási pontban egyenlő, $G/3$ nagyságú erő hat. 
 A levezetés sehol nem használta ki, hogy a háromszöglap vízszintes.

![solution figure](../../raw_html/komal_figures/komal-G915-sol-fig1.gif)
