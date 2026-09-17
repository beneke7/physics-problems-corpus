---
id: komal-P5013
source: komal
language: hu
translated: false
problem: komal-P5013
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Legyen a test sebessége a pályájának legmagasabb pontjában $v_1$, a kocsi sebessége ugyanekkor $v_2$. Az energia- és a lendületmegmaradás törvénye szerint 
 $mv_0=mv_1+ mv_2,\qquad \text{illetve}\qquad \frac{1}{2}mv_0^2=\frac{1}{2}mv_1^2+\frac{1}{2}mv_2^2+2mgR.$ 
 Az egyenletrendszer ($v_1<v_2$ feltételnek eleget tevő) megoldása 
 $v_1=\frac{v_0}{2}-\sqrt{\left(\frac{v_0}{2}\right)^2-2gR},\qquad v_2=\frac{v_0}{2}+\sqrt{\left(\frac{v_0}{2}\right)^2-2gR}.$ 
 Számítsuk most ki a pontszerű testre ható $K$ erő nagyságát a pálya legmagasabb pontjában! Ha ez nagyobb, mint $mg$, akkor a kiskocsi $K$ ellenereje hatására megemelkedik. (Belátható, hogy a megemelkedés szempontjából a pálya legfelső pontja a kritikus, ha ott nem teljesül a $K>mg$ feltétel, akkor máshol sem emelkedhet fel a kiskocsi.) 
 Írjuk fel a kis test mozgásegyenletét a pálya legfelső pontjában a kocsihoz rögzített koordináta-rendszerben. Ez a rendszer ugyan nem inerciarendszer, de mivel a kérdéses pillanatban a kocsi gyorsulása nulla, a Newton-egyenlet eredeti alakjában érvényes. A kis test ebben a rendszerben $R$ sugarú körpályán mozog, sebessége a legfelső pontban $v_1-v_2$, a mozgásegyenlet tehát 
 $mg+K=m\frac{\left(v_2-v_1\right)^2}{R},$ 
 vagyis 
 $K=\frac{mv_0^2}{R}-9mg>mg,\qquad \text{azaz}\qquad v_0>\sqrt{10\,gR}\approx 10~\frac{ \rm m}{\rm s}.$ 

**II. megoldás.**
 A feladatot megoldhatjuk inerciarendszerből, például a tömegközépponthoz rögzített vonatkoztatási rendszerből is. Ebben a rendszerben a pontszerű test kezdősebessége $v_0/2$ jobbra, a kiskocsi pedig ugyanekkora sebességgel mozog balra az indulás pillanatában. Ha a kiskocsi vízszintes elmozdulása egy adott pillanatban $x$, akkor a kocsié ugyanekkora nagyságú, de ellentétes irányú lesz. Amennyiben a kis test függőleges elmozdulása $y$, akkor a gyűrűn maradás kényszerfeltétele: 
 $(x+x)^2+(y-R)^2=R^2.$ 
 Ez egy $a=R$ nagytengelyű, $b=R/2$ kistengelyű ellipszis egyenlete. Az ellipszis görbületi sugara a nagytengely végpontjaiban, így a pálya legmagasabb pontjában is 
 $r=\frac{b^2}{a}=\frac{R}{4}.$ 
 A kis test $u$ sebessége a pálya legfelső pontjában az energiamegmaradás törvényéből számolható: 
 $2\cdot \frac{m}{2}\left(\frac{v_0}{2}\right)^2=2\cdot\frac{mu^2}{2}+2mgR,$ 
 ahonnan 
 $u^2=\frac{v_0^2}{4}-2gR.$ 
 A test mozgásegyenlete a pálya legfelső pontjában 
 $mg+K=m\frac{u^2}{r}, \qquad \text{ahonnan}\qquad K=\frac{mu^2}{(R/4)}-mg=\frac{mv_0^2}{R}-9\,mg.$ 
 Innen $K>mg$ miatt $v_0>\sqrt{10\,gR}.$
