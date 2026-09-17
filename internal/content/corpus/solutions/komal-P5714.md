---
id: komal-P5714
source: komal
language: hu
translated: false
problem: komal-P5714
figure_files: [komal-P5714-sol-fig1.png, komal-P5714-sol-fig2.png, komal-P5714-sol-fig3.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 a) Kicsiny szögkitérésnél a két töltés közötti távolság közelítőleg $d=\ell/2$-nek vehető, így a Coulomb-erő nagysága 
 $F_1=\frac{1}{4\pi\varepsilon_0}\frac{qQ}{d^2}\approx\frac{qQ}{\pi\varepsilon_0\ell^2}.$ 
 Ezzel a (jó közelítéssel a fonálra merőleges) erővel a nehézségi erő érintő irányú komponense, 
 $F_2=mg\sin\varphi\approx mg\varphi$ 
 tart egyensúlyt. 
 $F_1=F_2,\qquad\text{ahonnan}\qquad\varphi\approx\frac{q}{\pi\varepsilon_0\ell^2mg}\cdot Q,$ 
 vagyis a paraméterek közötti kapcsolat: 
 $(1)$ $Q_0=\frac{\pi\varepsilon_0\ell^2mg}{q}.$ 

 b) $Q=0$ esetén nyilván csak egyetlen stabil egyensúlyi helyzet van a $\varphi=0$ szögnél. Lényegében ugyanez a helyzet, ha $Q\ne 0$, de kicsi $(Q\ll Q_0)$. Ilyenkor az egyensúlyi helyzet egy kicsit eltolódik a rögzített fémgömb irányába, de máshol nem alakulhat ki erőegyensúly, a nehézségi erő minden más helyzetben ,,legyőzi'' a Coulomb-erőt. 
 Nagyon nagy ($Q\gg Q_0$) töltés esetén a Coulomb-erő mellett a nehézségi erő alig játszik szerepet, így csak a töltések legkisebb távolságának megfelelő 
 $\varphi_1=\arctg\frac{1}{2}\approx 26{,}6^\circ$ 
 szögkitérés közelében lehet az inga egyensúlyban. 
 Ha az $Q$ töltés $Q_0$-hoz képest se nem nagyon kicsi, se nem nagyon nagy, akkor várhatóan két stabil helyzete is lehet az ingának. Az egyik $\varphi$ viszonylag kis értékeiénél, ahol a távoli töltések között ható Coulomb-erő kicsi, illetve a $\varphi_1$ szög közelében, ahol a töltések kis távolsága miatt az elektrosztatikus erő sokkal erősebb, mint a nehézségi erő. A két stabil egyensúlyi állapotot egy instabil helyzet választja el, amin a rendszer ,,magától'' csak akkor tud átlépni, ha $Q$-t nagyon nagyra növeljük, vagy ha nagyon kicsire csökkentjük. A $Q$ töltés változtatásának ,,irányától'' függően a rendszer különböző módon viselkedik, vagyis a hiszterézise van. 

 c) Számítsuk ki egy adott $\varphi$ szögkitérésnél a Coulomb-erőnek, illetve a nehézségi erőnek a fonálra merőleges $F_1$ és $F_2$ komponensét, majd ezek egyenlőségéből az egyensúly feltételét. Az 1. ábráról leolvashatjuk, hogy az ingatesttől a rögzített helyzetű töltéshez mutató vektor 
 $\boldsymbol{d}=\ell\left(\frac{1}{2}-\sin\varphi,-1+\cos\varphi\right),$ 
 melynek nagysága: 
 $d=\vert\boldsymbol{d}\vert=\ell\sqrt{\left(\frac{1}{2}-\sin\varphi\right)^2+\left(-1+\cos\varphi\right)^2}=\frac{\ell}{2}\sqrt{9-4\sin\varphi-8\cos\varphi}.$ 

 1. ábra 

 Az érintő irányú egységvektor 
 $\boldsymbol{e}=(\cos\varphi,\sin\varphi),$ 
 ennek segítségével kiszámítható az 1. ábrán látható $\alpha$ szög koszinusza: 
 $\boldsymbol{e}\cdot\boldsymbol{d}=d\,\cos\alpha=e_xd_x+e_yd_y=\frac{\ell}{2}(\cos\varphi-2\sin\varphi),$ 
 vagyis 
 $\cos\alpha=\frac{\ell}{2d}(\cos\varphi-2\sin\varphi).$ 
 A Coulomb-erő nagysága 
 $\left|\boldsymbol{F}_\textrm{Coulomb}\right|=\frac{1}{4\pi\varepsilon_0}\,\frac{qQ}{d^2},$ 
 melynek érintő irányú komponense 
 $F_1(\varphi)=\left|\boldsymbol{F}_\textrm{Coulomb}\right|\,\cos\alpha=\frac{\ell}{8\pi\varepsilon_0}\,\frac{qQ}{d^3}(\cos\varphi-2\sin\varphi).$ 
 (Látható, hogy $\varphi=\varphi_1=\arctg\tfrac{1}{2}$ szögkitérésnél $F_1=0$.) 
 A nehézségi erő érintő irányú összetevője – mint az az ingamozgás összefüggéseiből ismert – $F_2=mg\sin\varphi.$ 
 Az egyensúly feltétele $F_1=F_2$, azaz 
 $\frac{\ell}{8\pi\varepsilon_0}\,\frac{qQ(\cos\varphi-2\sin\varphi)}{(\ell/2)^3(9-4\sin\varphi-8\cos\varphi)^{3/2}}=mg\sin\alpha.$ 
 Ez az összefüggés (1) ismeretében így is felírható: 
 $(2)$ $\frac{Q}{Q_0}=\frac{(9-4\sin\varphi-8\cos\varphi)^{3/2}}{\ctg\varphi-2}.$ 

 Megjegyzés. A fenti egyenlethez más úton, az energiaviszonyok vizsgálatán keresztül is eljuthatunk. A rendszer teljes (gravitációs és elektrosztatikus) energiája $\varphi$ függvényében 
 $E(\varphi)=mg\ell(1-\cos{\varphi))-\frac{1}{4\pi\varepsilon_0}\frac{qQ}{d}}=mg\ell\left[1-\cos\varphi-\frac{Q}{2Q_0}\frac{1}{\sqrt{9-4\sin\varphi-8\cos\varphi}}\right].$ 
 Az egyensúlyi helyzetet az jellemzi, hogy ott a teljes potenciális energiájának a lehetséges változásokat leíró paraméter (esetünkben $\varphi$) szerinti deriváltja nulla . A szögletes zárójelben álló kifejezést deriválva kapjuk, hogy 
 $\sin\varphi+\frac{Q}{4Q_0}\frac{8\sin\varphi-4\cos\varphi}{(9-4\sin\varphi-8\cos\varphi)^{3/2}}=0,$ 
 ami megegyezik a (2) összefüggéssel. 
 Ábrázoljuk (2)-t a $0<\varphi<\varphi_1$ intervallumon ( 2. ábra ). 

 2. ábra 

 Látjuk, hogy ez a függvény két monoton növekvő és egy monoton csökkenő ágból áll. Az $A$ és $B$ pont közötti (pirossal jelölt) görbe pontjai az inga instabil egyensúlyi állapotainak felelnek meg. Ezt a következő megfontolással láthatjuk be. Ha a kérdéses intervallum valamely pontjának megfelelő állapotból valamilyen kicsiny külső zavar hatására ,,kibillen'' a rendszer, és $\varphi$ mondjuk egy kicsit megnő, akkor ezt az állapot az eredetinél kisebb $Q$ töltés tudná egyensúlyban tartani (hiszen a piros görbe monoton csökken). Az eredeti, az egyensúlyhoz szükségesnél nagyobb $Q$ töltés az ingát a rögzített töltés felé húzza, tehát a $\varphi$ szöget tovább növeli, azaz az egyensúly instabil. A görbe növekvő (fekete vonallal jelölt) ágainál éppen fordított a helyzet: az egyensúlyból kibillentett rendszerre ható eredő erő visszatéríti az ingát a kiindulási állapotba, az tehát stabil egyensúlyi állapot volt. 
 A továbbiakban az instabil egyensúlyi helyzeteket figyelmen kívül hagyjuk, a rendszernek csak a stabil egyensúlyi állapotaival foglalkozunk. A 2. ábrán megfigyelhetjük, hogy ha a $Q$ töltés viszonylag kicsi (kisebb, mint a $A$ ponthoz tartozó érték), vagy aránylag nagy (nagyobb, mint az $B$ pontnak megfelelő töltés), akkor a rendszernek minden $Q$-hoz csak egy egyensúlyi állapota tartozik. Közepes (az $A$ és a $B$ pont közé eső) töltéseknél viszont a stabil egyensúlyi állapotok száma kettő . Emiatt a $\tfrac{Q}{Q_0}=f(\varphi)$ függvény nem invertálható. 
 Szigorú matematikai értelemben a $\varphi=f^{-1}(Q/Q_0)$ inverz függvény nem létezik , mert bizonyos $Q/Q_0$ értékekhez nem tudunk egyértelműen $\varphi$ szöget hozzárendelni. Formálisan mégis megtehetjük, hogy $\varphi$ és $Q/Q_0$ szerepét felcseréljük olymódon, hogy a 2. ábra grafikonját tükrözzük a $Q/Q_0=\varphi$ egyenesre. Ekkor a 3. ábrán látható, helyenként ,,többértékű'' függvényhez jutunk. 

 3. ábra 

 Az ábráról leolvashatjuk, hogy ha a $Q/Q_0$ töltésértékez nulláról fokozatosan növeljük, akkor a rendszer stabil állapotok sorozatán keresztül eljut az $A$ pontig (piros görbe), de ott megszűnik a kisebb $\varphi$ értékhez tartozó stabil állapot, emiatt a rendszer ,,átugrik'' a másik stabil állapotába, az $A'$ pontba. A töltést tovább növelve a kitérés szöge tart az aszimptotikus $\varphi_1=\arctg\frac{1}{2}=0{,}46\,\textrm{radián}$ értékhez. 
 Ha a $Q$ töltést nagy értékektől fokozatosan csökkentjük, a rendszer a kék görbe menti állapotokat veszi fel. A $B$ pontban hirtelen átkerül a $B'$ állapotba, majd a nullához közelítő töltésre az egyensúlyi szögkitérés nullához tart. A hiszterézisgörbe jellegzetes pontjainak koordinátáit (amelyeket a grafikonról olvashatunk le, vagy numerikus számítással határozhatunk meg) a 3. ábrán feltüntettük.

![solution figure](../../raw_html/komal_figures/komal-P5714-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-P5714-sol-fig2.png)

![solution figure](../../raw_html/komal_figures/komal-P5714-sol-fig3.png)
