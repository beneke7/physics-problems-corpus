---
id: komal-P5451
source: komal
language: hu
translated: false
problem: komal-P5451
figure_files: [komal-P5451-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Jól ismert és könnyen bizonyítható (többféleképpen is), hogy két fázisvezető között a feszültség $230\,\textrm{V}\cdot \sqrt{3}=400\,\textrm{V}$. 
 $b)$ Ugyancsak többféleképpen is beláthatjuk, hogy a nullvezető (effektív) árama 10 A. 
 $c)$ Érdekes észrevenni, hogy ilyenkor a nullvezető árama 0. 
 $d)$ A legkisebb áramérték a nulla , ami akkor következik be, ha mind a három fázis azonos módon van terhelve, az áramkör kiegyenlített . 
 Megmutatjuk, hogy a legnagyobb áramerősség csúcsértéke a nullvezetőben $\sqrt2\cdot 10~{\rm A}\approx 14~$A, vagyis a legnagyobb effektív áramerősség 10 A. Ezt például a forgóvektoros ábrázolással láthatjuk be. Vegyünk fel három egységvektort (legyenek ezek $\boldsymbol e$, $\boldsymbol f$ és $\boldsymbol g$), amelyek egymással $120^\circ$-os szöget zárnak be (lásd a nem méretarányos ábra bal oldalát). Az egyes fázisvezetőkben folyó (amper egységekben mért) áram az 
 $\alpha\cdot {\boldsymbol e}, \qquad (0\le \alpha\le 14),$ 
 $\beta\cdot {\boldsymbol f}, \qquad (0\le \beta\le 14),$ 
 $\gamma\cdot {\boldsymbol g}, \qquad (0\le \gamma\le 14)$ 
 vektorokkal adható meg. A nullvezető áramának forgóvektora a fenti három vektor összege és ennek az áramnak a csúcsértéke az $OC$ távolsággal egyezik meg (lásd az ábra jobb oldalát). 

 Rajzoljunk egy $O$ középpontú, $OK=\sqrt2\cdot 10\approx 14$ egység sugarú kört. Ennek $O$ középpontjából indítjuk a vektorsokszöges összeadást, vagyis a középpontból mérjük fel az egyik fázisvezetőn folyó áram forgóvektorát. Ennek $A$ végpontjából mérjük fel a második fázisvezető áramvektorát, és így a kékkel jelölt, rombusz alakú tartomány valamelyik $B$ pontjába juthatunk el. Végül a $B$ pontból indítva felmérjük a $\gamma\cdot {\boldsymbol g}$ vektort, végül tehát a kék és a piros tartomány egyesítettjének (egy $10$ egység oldalú szabályos hatszögnek) a belsejébe, vagy annak határára kerülünk. 
 Láthatjuk, hogy $OC\le \sqrt2\cdot 10\approx 14$, vagyis sehogy nem tudunk kilépni a kb. 14 A-es körből. A maximális, 14 amperes értéket hat esetben kaphatjuk meg, az ezekhez tartozó $(\alpha,\beta,\gamma)$ számhármasokat az ábrán a hatszög csúcsainál tüntettük fel. Láthatjuk, hogy a nullvezető áramának csúcsértéke akkor lesz 14 A (a $C$ pont akkor esik a körvonalra), ha vagy csak egy fázisvezetőben folyik áram, és annak csúcsértéke 14 A (tehát az effektív értéke 10 A), vagy ha csak két fázisvezetőben folyik $14-14$ A csúcsértékű (10 A effektív értékű) áram, és a harmadik fázisvezetőben nem folyik áram. 

 Megjegyzés. Megfontolásaink során kihasználtuk, hogy mindhárom fázisvezető terhelése tisztán ohmos, emiatt az áramok a feszültségekkel azonos fázisúak. Ha a terhelés induktív és/vagy kapacitív elemeket is tartalmazna, a nullvezető effektív áramerőssége meghaladhatná a 10 ampert.

![solution figure](../../raw_html/komal_figures/komal-P5451-sol-fig1.gif)
