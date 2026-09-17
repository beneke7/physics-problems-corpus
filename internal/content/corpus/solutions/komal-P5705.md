---
id: komal-P5705
source: komal
language: hu
translated: false
problem: komal-P5705
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Írjuk le a kavics mozgását egy olyan koordináta-rendszerben, amelynek $x$ tengelye vízszintes és a kavics kezdősebességével párhuzamos, az $y$ tengelye pedig függőlegesen lefelé mutat. A kavics helyét az $\boldsymbol{r}=(x,\,y)$, a sebességét a $\boldsymbol{v}=(v_x,\,v_y)$, a gyorsulását pedig az $\boldsymbol{a}=(a_x,\,a_y)$ vektorokkal adhatjuk meg. A kavicsra a felhajtóerővel csökkentett nehézségi erő és a közegellenállási erő hat, ezek 
 $\boldsymbol{G}=\left(0,\,mg-mg\frac{\varrho_\textrm{méz}}{\varrho_\textrm{kavics}}\right)\equiv(0,\,G),\qquad\textrm{valamint}\qquad\boldsymbol{S}=-k\boldsymbol{v}=(-kv_x,\,-kv_y).$ 
 A Newton-féle mozgásegyenlet 
 $m\boldsymbol{a}=\boldsymbol{G}+\boldsymbol{S},$ 
 ami a derékszögű komponensekkel kifejezve: 
 $(1)$ $ma_x=-k\,v_x,$ 
 $(2)$ $ma_y=G-k\,v_y.$ 
 A fenti két egyenlet egymástól független, hiszen (1) csak az $x$, (2) pedig csak az $y$ irányú mozgásra vonatkozó mennyiségeket tartalmaz. Így tehát (1) és (2) külön-külön oldható meg. 
 Mivel $a_x=\frac{\varDelta v_x}{\varDelta t}$ és $v_x=\frac{\varDelta x}{\varDelta t}$, (1) így is felírható: 
 $\frac{\varDelta(mv_x+kx)}{\varDelta t}=0,$ 
 azaz 
 $(3)$ $mv_x(t)+kx(t)=\textrm{állandó}.$ 
 Ha a kavicsot $t=0$ pillanatban $v_0$ vízszintes sebességgel dobjuk a tóba az $x=0$ helyen, akkor (3) jobb oldalán szereplő állandó $mv_0$. Másrészt ha a kavics legnagyobb $x$ irányú elmozdulása $x_\mathrm{max}$, és ennél az $x$ értéknél $v_x=0$, így (3) a következő alakot ölti: 
 $x_\mathrm{max}=\frac{m}{k}\,v_0,$ 
 azaz 
 $(4)$ $k=\frac{mv_0}{x_\mathrm{max}}.$ 
 Ezek szerint az $x$ irányú mozgás sebessége és elmozdulása közötti kapcsolat: 
 $(5)$ $v_x(t)=v_0\left(1-\frac{x}{x_\mathrm{max}}\right),$ 
 amit így is felírhatunk: 
 $\frac{\varDelta(x_\mathrm{max}-x)}{\varDelta t}=-\frac{v_0}{x_\mathrm{max}}\left(x_\mathrm{max}-x\right).$ 
 Ez az egyenlet (amely szerint az $x_\mathrm{max}-x$ mennyiség időbeli változásának sebessége önmagának negatív állandószorosa) ugyanolyan alakú, mint a radioaktív bomlások törvénye, vagy egy állandó feszültségre kapcsolt kondenzátor feltöltődésének egyenlete, tehát a megoldása is azokéhoz hasonló exponenciális függvény: 
 $(6)$ $x(t)=x_\mathrm{max}\left(1-\mathrm{e}^{-v_0t/x_\mathrm{max}}\right).$ 
 (Látható, hogy a kavics vízszintes elmozdulása véges idő alatt soha nem éri el az $x=x_\mathrm{max}$ értéket, csupán egyre jobban megközelíti azt.) 
 Foglalkozzunk most a függőleges irányú mozgás (2) egyenletével. Amikor az időben változó $v_y(t)$ sebesség eléri (vagy nagyon megközelíti) az állandósult értéket, az $a_y$ gyorsulás nullává válik, így 
 $(7)$ $G=kv_\mathrm{max}=\frac{mv_0v_\mathrm{max}}{x_\mathrm{max}}$ 
 teljesül, és így a függőleges mozgás egyenlete 
 $(8).$ $a_y=\frac{v_0}{x_\mathrm{max}}\left(v_\mathrm{max}-v_y\right).$ 
 Ez az egyenlet is exponenciális időfüggésre vezet: 
 $\frac{\varDelta\left(v_\mathrm{max}-v_y(t)\right)}{\varDelta t}=-\frac{v_0}{x_\mathrm{max}}\left(v_\mathrm{max}-v_y(t)\right),$ 
 ahonnan (a $v_y(t=0)=0$ kezdeti feltétel figyelembe vételével) kapjuk, hogy 
 $(9)$ $v_y(t)=v_\mathrm{max}\left(1-{\rm e}^{-v_0t/x_\mathrm{max}}\right).$ 
 Mivel a fenti képlet zárójelben álló része (6) szerint éppen $x(t)/x_\mathrm{max}$, a függőleges sebességkomponens nagysága az $x$ elmozdulással kifejezhető: 
 $(10)$ $v_y(t)=v_\mathrm{max}\frac{x(t)}{x_\mathrm{max}}.$ 
 a) A mézben mozgó kavics pályájának $y(x)$ egyenletét kétféle módon is megkaphatjuk. 

 Első módszer: A (9) összefüggés integrálásával kiszámítjuk a függőleges elmozdulást az idő függvényében: 
 $(11)$ $y(t)=\int\limits_0^t v_y(t')\,\mathrm{d}t'=v_\mathrm{max}\,t-\frac{v_\mathrm{max}x_\mathrm{max}}{v_0}\left(1-{\rm e}^{-v_0t/x_\mathrm{max}}\right),$ 
 majd a (6) összefüggésből kifejezzük a mozgás $t$ időtartamát az $x$ elmozdulással: 
 $(12)$ $t(x)=\frac{x_\mathrm{max}}{v_0}\ln\frac{x_\mathrm{max}}{x_\mathrm{max}-x}.$ 
 Végül (12)-t (11)-be helyettesítve kapjuk, hogy 
 $(13)$ $y(x)=\frac{v_\mathrm{max}}{v_0}\left(x_\mathrm{max}\ln\frac{x_\mathrm{max}}{x_\mathrm{max}-x}-x\right).$ 

 Második módszer: A keresett $y(x)$ függvény meredeksége 
 $\frac{\mathrm{d}y}{\mathrm{d}x}\approx\frac{\varDelta y}{\varDelta x}\approx\frac{v_y}{v_x}=\frac{v_\mathrm{max}}{v_0}\frac{x}{x_\mathrm{max}-x},$ 
 amit integrálva megkapjuk a (13)-mal egyező eredményt: 
 $y(x)=\int\limits_0^x\frac{v_\mathrm{max}}{v_0}\frac{x'}{x_\mathrm{max}-x'}\,\mathrm{d}x'=\frac{v_\mathrm{max}}{v_0}\left(x_\mathrm{max} \ln\frac{x_\mathrm{max}}{x_\mathrm{max}-x}-x\right).$ 
 b) A közegellenállási erő munkáját kétféle módon is kiszámíthatjuk. 

 Első módszer: A munkatétel szerint a kavics mozgási energiájának megváltozása a kavicsra ható külső erők munkájával egyenlő. Jelen esetben a $\boldsymbol{G}$ erő munkája $G\,y$, a közegellenállás munkája pedig valamekkora $W$ érték. ($W<0$, mert a közegellenállási erő a kavics elmozdulásával ellentétes irányú.) 
 $\frac{1}{2}m(v_x^2+v_y^2)-\frac{1}{2}mv_0^2=G\,y+W.$ 
 Innen (5), (7), (10) és (13) felhasználásával kapjuk, hogy 
 $(14)$ $W=-mv_\mathrm{max}^2\ln\frac{x_\mathrm{max}}{x_\mathrm{max}-x}+m\left(v_\mathrm{max}^2-v_0^2\right)\frac{x}{x_\mathrm{max}}+m\left(v_\mathrm{max}^2+v_0^2\right)\frac{x^2}{2x_\mathrm{max}^2}.$ 

 Második módszer: A közegellenállási erőnek az elmozdulás szerinti integrálásával. Mivel $S_x=-kv_x$, ennek munkája $x$ hosszúságú úton 
 $W_1=-k\int\limits_0^x v_x\,\mathrm{d}x.$ 
 Az $y$ irányú elmozduláshoz tartozó munkavégzés 
 $W_2=-k\int\limits_0^y v_y\,\mathrm{d}y=-k\int\limits_0^x v_y\cdot\frac{v_y}{v_x}\,\mathrm{d}x.$ 
 A teljes munka 
 $W=W_1+W_2=-k\int\limits_0^x\left(v_x+\frac{v_y^2}{v_x}\right)\,\mathrm{d}x.$ 
 A sebességkomponensek $x$-szel kifejezett alakját és $k$ kifejezését behelyettesítve, majd az integrálást az útmutatóban közölt formulák felhasználásával elvégezve a (14) összefüggést kapjuk. 

 Megjegyzés. A folyadékokban mozgó merev testek a közvetlen környezetükben lévő folyadékot is mozgásba hozzák, ezért az impulzusuk, a mozgási energiájuk és a tehetetlenségük nagyobb lesz, mint amennyi ugyanakkora sebesség mellett a levegőben (vagy vákuumban) lenne. Ezt a hatást közelítőleg úgy írhatjuk le, hogy a test tényleges $m$ tömegét egy kicsit nagyobb $m^*$ ,,effektív tömeggel'' helyettesítjük. ($m^*$ kb. annyival nagyobb $m$-nél, mint amekkora a test által kiszorított folyadék tömege.) 
 Ha a mézben mozgó kavics mozgásegyenletét az effektív tömeggel kifejezve így írjuk fel: 
 $m^*\boldsymbol{a}=\boldsymbol{G}+\boldsymbol{S},$ 
 akkor – meglepő módon – az a) részben szereplő valamennyi levezetett képlet változatlan alakban érvényes marad.
