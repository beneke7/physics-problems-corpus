---
id: komal-P5638
source: komal
language: hu
translated: false
problem: komal-P5638
figure_files: [komal-P5638-sol-fig1.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Egy fémgömb közelébe helyezett ponttöltés megosztást hoz létre a fémgömbön. A töltések úgy mozdulnak el a fém felületén, hogy a gömb ekvipotenciálissá váljon. A kialakuló elektromos mező a gömbön kívül olyan, mintha a gömb belsejében megfelelő helyen megfelelő nagyságú ,,tükörtöltés'' helyezkedne el, és a fém nem is lenne ott. (Ez a gömbi tükörtöltés módszere, amelyről részletesen olvashatunk pl. a KöMaL 2022. évi decemberi számában megjelent P. 5453. feladat megoldásánál.) 
 Ha egy $R$ sugarú fémgömb középpontjától $d$ távolságra egy pontszerű $Q$ töltés található, akkor a fémfelület akkor válik nulla potenciálúvá, ha a gömb középpontjától $x=R^2/d$ távolságban egy $q=-\frac{R}{d}Q$ nagyságú tükörtöltést helyezünk el. Ha a fémgömb nem földelt, de az össztöltése nulla, akkor a gömbhéj potenciálja nem lesz nulla, de a felülete továbbra is ekvipotenciális marad. Ezt az erőteret a külső $Q$ töltés, a gömbön belüli $q$ töltés, valamint a gömb középpontjába helyezett $-q=\frac{R}{d}Q$ töltés tudja létrehozni. A fémgömb potenciálja ilyenkor 
 $\Phi(d)=-\frac{1}{4\pi\varepsilon_0}\frac{q}{R}=\frac{1}{4\pi\varepsilon_0}\frac{Q}{d}$ 
 lesz. (A potenciált a ,,végtelen'' távoli pontokban választottuk nullának.) 
 Ha a $Q$ töltést $2d$ távolra visszük, a fémgömb potenciálja 
 $\Phi(2d)=\frac{1}{4\pi\varepsilon_0}\frac{Q}{2d}$ 
 lesz. A potenciál megváltozása 
 $\Delta\Phi=\Phi(2d)-\Phi(d)=-\frac{1}{4\pi\varepsilon_0}\frac{Q}{2d}.$ 
 Ha $Q>0,$ akkor $\Delta\Phi<0,$ vagyis a fémgömb elektromos potenciálja lecsökken . 

**II. megoldás.**
 A feladatot a gömbi tükörtöltés módszerének ismerete nélkül is meg lehet oldani. Tekintsük a fémgömb és a pontszerű töltés rendszerének az ábrán látható 4-féle állapotát: 

 ( a ) Kezdetben a fémgömb semleges, és a $Q$ töltés a gömb középpontjától $d$ távolságra van. 
 ( b ) A fémgömb semleges, de a ponttöltést a gömb középpontjától $2d$ távolságra található. 
 ( b' ) A ponttöltés $d$ távolságra van a gömb középpontjától, de a fémgömb nem semleges, hanem kicsiny, $\Delta Q\ll Q$ töltéssel rendelkezik. 
 ( c ) A ponttöltés $2d$ távolságra van a $\Delta Q$ töltésű gömb középpontjától. 
 Számítsuk ki, hogy mekkora munkavégzéssel tudjuk a rendszert az ( a ) állapotból egyszer ( b )-n, másodszor pedig ( b' )-n keresztül a ( c ) állapotba vinni. 
 A $Q$ töltés a semleges fémgömbön elektromos megosztást hoz létre, amelynek elektromos mezője valamilyen (helyről helyre változó) erőt fejt ki a ponttöltésre. A $Q$ töltést valamekkora 
 $W_{(a)\rightarrow(b)}=W_0$ 
 munkát végezve juttathatjuk el $d$-től $2d$ távolságig. (Ennek a munkának a nagyságát ki lehet számítani, de erre – szerencsére – nem lesz szükségünk.) 
 Ha a ( b ) állapotban a fémgömb potenciálja $\Phi(2d)$, akkor nagyon (,,végtelen'') messziről kicsiny $\Delta Q$ töltést 
 $W_{(b)\rightarrow(c)}=\Delta Q\cdot\Phi(2d)$ 
 munkával tudunk a fémgömbre juttatni. (Ez a potenciál definíciójából következik.) 
 Járjuk most végig a másik ,,útvonalat''. A fémgömbre 
 $W_{(a)\rightarrow(b')}=\Delta Q\cdot\Phi(d)$ 
 munkával tudunk $\Delta Q$ töltést eljuttatni, ahol $\Phi(d)$ a fémgömb potenciálja a $Q$ töltés közelebbi helyzetében. 
 Végül számítsuk ki, hogy mekkora munkával tudjuk a kicsiny töltéssel rendelkező gömbtől a $Q$ töltést $d$-től $2d$-ig eltávolítani. Az elektromos erőtér ebben az esetben a megosztásból származó térerősségek és a $\Delta Q$ töltés elektromos terének szuperpozíciója. Az előbbi erőtérben végzett munka a korábban szereplő $W_0$-lal egyezik meg. A $\Delta Q$ töltés által létrehozott elektromos mező – a gömbön kívül – egy pontszerű töltés Coulomb-terével egyezik meg, ennek ellenében végzett munka tehát a Coulomb-energia megváltozásával egyenlő. Így 
 $W_{(b')\rightarrow(c)}=W_0+\frac{Q\cdot\Delta Q}{4\pi\varepsilon_0}\left(\frac{1}{2d}-\frac{1}{d}\right).$ 
 A végzett munka az elektromos mező energiájának megváltozásával egyenlő, emiatt független attól, hogy milyen közbenső állapoton keresztül jutottunk el ( a )-ból ( c )-be: 
 $W_{(a)\rightarrow(b)}+W_{(b)\rightarrow(c)}=W_{(a)\rightarrow(b')}+W_{(b')\rightarrow(c)},$ 
 azaz 
 $W_0+\Delta Q\cdot\Phi(2d)=\Delta Q\cdot\Phi(d)+\left(W_0-\frac{Q\cdot\Delta Q}{4\pi\varepsilon_0}\frac{1}{2d}\right).$ 
 Innen kapjuk, hogy a fémgömb potenciáljának megváltozása 
 $\Phi(2d)-\Phi(d)=-\frac{1}{4\pi\varepsilon_0}\frac{Q}{2d}.$ 

**III. megoldás.**
 A $\Phi(d)$ potenciált egy egyszerű meggondolással is megkaphatjuk. A fémgömb felületén a $Q$ töltés okozta elektromos megosztás miatt valamilyen $\varrho(\vec{R})$ töltéssűrűség alakul ki, és a tér bármely pontjában a potenciál ezen töltéseloszlás és a különálló $Q$ töltés potenciáljának összegeként adható meg. Mivel a fémgömb minden pontja azonos potenciálon van, ennek meghatározásához kézenfekvő, hogy a legegyszerűbb leírást kínáló pontot, a gömb középpontját válasszuk. A gömbfelület $\vec{R}$-rel jellemezhető pontja körüli kis $\Delta A$ felület töltése $\Delta q=\varrho(\vec{R})\Delta A$, így 
 $\Phi(d)=\frac{1}{4\pi\varepsilon_0}\sum\frac{\Delta q}{R}+\frac{1}{4\pi\varepsilon_0}\frac{Q}{d}.$ 
 Mivel a gömb semleges, $\sum\Delta q=0$, tehát 
 $\Phi(d)=\frac{1}{4\pi\varepsilon_0}\frac{Q}{d}.$

![solution figure](../../raw_html/komal_figures/komal-P5638-sol-fig1.png)
