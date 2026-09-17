---
id: komal-P5417
source: komal
language: hu
translated: false
problem: komal-P5417
figure_files: [komal-P5417-sol-fig1.gif, komal-P5417-sol-fig2.gif, komal-P5417-sol-fig3.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Tekintsük az abroncsnak azt a helyzetét, amelyben a kezdeti (labilis) egyensúlyi helyzetéhez képest csúszásmentesen gördülve $\varphi$ szöggel elfordult, vagyis a $C$ középpontja $R\varphi$ utat tett meg. A kicsiny nehezék nem csúszik el az abroncson, nem is repül le róla, hanem egy ideig még az abroncs kezdetben legmagasabban lévő $A$ pontjánál marad. Vegyük fel a kis testre, illetve az abroncsra ható erőket az 1. ábrán látható módon. 
 A kicsiny nehezékre $mg$ nagyságú, függőlegesen lefelé mutató nehézségi erő hat, továbbá sugár irányban $N$ nagyságú nyomóerővel és érintő irányban $S$ nagyságú súrlódási erővel hat rá az abroncs. 
 1. ábra 
 Az abroncsra az $A$ pontban hat a nyomóerő és a súrlódási erő ellenereje, valamint a talajjal érintkező $B$ pontjánál hat rá valamekkora $N'$ nyomóerő és $S'$ súrlódási erő. Ha a tapadó súrlódási együttható mindkét érintkező felületnél $\mu_0$, akkor a csúszásmentes mozgás feltétele: 
 $(1)$ $\vert S \vert\le \mu_0N, \qquad \text{illetve}\qquad \vert S' \vert\le \mu_0N'.$ 
 Ezeknek mindaddig fenn kell állni, ameddig a kis test le nem repül az abroncsról. Ez akkor következik be, amikor az $N$ egészen nulláig csökken, majd előjelet váltva negatívvá ,,akarna'' válni. Az abroncs azonban nem tud húzóerőt kifejteni a kis testre, így az lerepül az abroncsról. 
 A továbblépéshez meg kell határoznunk az $N(\varphi)$, $S(\varphi)$, $N'(\varphi)$ és $S(\varphi)$ függvényeket. Ezt a Newton-féle mozgásegyenletek felírásával tehetjük meg. 
 Az abroncs tömege és a tehetetlenségi nyomatéka is elhanyagolhatóan kicsi, emiatt a rá ható erők eredőjének és a forgatónyomatékok eredőjének is nullának kell lennie. (Ezek a feltételek – jóllehet az abroncs gyorsul – megegyeznek a statikus egyensúly feltételeivel.) Az abroncs középpontjára vonatkoztatva csak a két súrlódási erőnek van forgatónyomatéka, és azok eredője akkor lesz nulla, ha 
 $(2)$ $S=S'.$ 
 Azt is mondhatjuk, hogy az abroncsra az $A$ pontban ható erők eredőjének hatásvonala át kell hogy menjen a $B$ ponton (hogy arra vonatkoztatva ne legyen forgatónyomatéka), és hasonlóan a $B$ pontban ható erők eredője $A$ felé kell hogy mutasson. Az egyenlő szárú $ABC$ háromszög egyik külső szöge $\varphi$, és ez megegyezik a két (egyforma nagyságú) belső szög összegével. Így tehát fennáll 
 $(3)$ $\frac{S}{N}=\frac{S'}{N'}=\tg\frac{\varphi}{2}, $ 
 és ebből (2) miatt 
 $(4)$ $N=N'.$ 
 is következik. A tiszta gördülés és a kis test csúszásmentes mozgásának (1) feltétele szerint 
 $(5)$ $\mu_0\ge \tg\frac{\varphi}{2}.$ 
 Ennek a feltételnek a kis test lerepülését jellemző $\varphi_0$ szögig mindvégig fenn kell állnia, vagyis teljesülnie kell a 
 $(6)$ $\mu_0\ge \tg\frac{\varphi_0}{2}$ 
 egyenlőtlenségnek. 
 Legyen az abroncs középpontjának sebessége és gyorsulása $\varphi$ szögelfordulás után $v(\varphi)$ és $a(\varphi)$. A kis test sebessége két részből tevődik össze: a $C$ pont $v$ nagyságú vízszintes sebességéből és a körmozgás ugyancsak $v$ nagyságú, de érintő irányú (a vízszintessel $-\varphi$ szöget bezáró) kerületi sebességből ( 2. ábra ). 
 2. ábra 

 Az energiamegmaradás törvénye szerint 
 $mgR(1-\cos\varphi)=\frac{m}{2}(v+v\cos\varphi)^2+\frac{m}{2}(-v\sin\varphi)^2=\frac{mv^2}{2}(2+2\cos\varphi),$ 
 tehát 
 $(7)$ $v^2=Rg\frac{1-\cos\varphi}{1+\cos\varphi}=Rg\,\tg^2\frac{\varphi}{2}.$ 
 Mindaddig, amíg a kis test le nem repül az abroncsról, a két test egyetlen merev testnek tekinthető, amelynek az össztömege $m$, tömegközéppontja a kis test $A$ pontja, és a tömegközépppontjára vonatkoztatott tehetetlenségi nyomatéka elhanyagolhatóan kicsi, vagyis nullának tekinthető. Erre a merev testre csak három külső erő hat: $\boldsymbol
N'$, $\boldsymbol S'$ és $m\boldsymbol g$. A tömegközéppont gyorsulása három tagból áll: az abroncs $C$ középpontjának vízszintes irányú és $a$ nagyságú ,,transzlációs gyorsulásából'', a $C$ pont körüli gyorsuló körmozgás ugyancsak $a$ nagyságú, de érintő irányú kerületi gyorsulásából, és végül a körmozgás centripetális gyorsulásából, ami $AC$ irányú és 
 $a_{\rm cp}=\frac{v^2}{R}=g\,\tg^2\frac{\varphi}{2}$ 
 nagyságú ( 3. ábra ). 
 3. ábra 
 A Newton-egyenletek: 
 $(8)$ $N=m(g-g\,\tg^2\frac{\varphi}{2}\cos\varphi-a\sin\varphi) \qquad \text{(függőleges irányú mozgás egyenlete)},$ 
 $(9)$ $S=m(a+a\cos\varphi-g\,\tg^2\frac{\varphi}{2}\sin\varphi) \qquad \text{(vízszintes irányú mozgás egyenlete)},$ 
 $(10)$ $SR(1+\cos\varphi)-NR\sin\varphi=0 \qquad \text{(a forgás mozgásegyenlete)}.$ 

 ( Megjegyzés: A (10) egyenlet megegyezik a korábban már megkapott (3)-mal.) 

 A (8), (9) és (10) lineáris egyenletrendszer megoldása: 
 $(11)$ $N=mg\cos\varphi,$ 
 $(12)$ $S=mg\frac{\sin\varphi \cos\varphi}{1+\cos\varphi},$ 
 $(13)$ $a=\frac{\sin\varphi}{(1+\cos\varphi)}\,g.$ 
 $a)$ (11)-ből következik, hogy a kis test $\varphi_0=\frac{\pi}{2}$ szögnél válik el az abroncstól, és ekkor vízszintes irányban is, és függőleges irányban is 
 $v_0= \sqrt{Rg}\tg\frac{\pi}{4}=\sqrt{Rg}$ 
 sebessége van. A csúszásmentes mozgás feltétele az, hogy a tapadási súrlódási együttható legalább $\mu_0^\text{min}=\tg\frac{\varphi_0}{2}=1$ legyen. 
 A további mozgás során a kis test $R$ magasságból, $v_0$ kezdősebességű szabadeséssel mozog. A talajra érkezés idejére 
 $\frac{g}{2}t^2+v_0t=R$ 
 érvényes, ahonnan $t_0=(\sqrt3-1)\frac{R}{g}$. Ennyi idő alatt a lerepülő test az abroncstól való elválás helyétől vízszintes irányban $v_0t_0=(\sqrt3-1)R,$ az indulás $O$ pontjától összesen 
 $\frac{\pi}{2}R+R+(\sqrt3-1)R=\left(\frac{\pi}{2}+\sqrt3\right)R\approx 3{,}3\,R$ 
 távolságban éri el a talajt. 

 Megjegyzések. 1. Elvben elképzelhető lenne, hogy az abroncsról lerepülő kis test – még mielőtt elérné a talajt – összeütközik a $v_0$ sebességgel guruló abronccsal. Ez azonban kizárt, hiszen a ferde hajítást elszenvedő kis test vízszintes irányú sebessége is $v_0$, tehát mindvégig az abroncs szélével egyvonalban, az abroncs alatt található, tehát az $O$ ponttól mért távolsága $R$-nél nagyobb. 
 2. A gördülő abronccsal együtt mozgó test pályája egy ciklois. A mozgás tehát éppen olyan, mint egy ciklois alakú, rögzített pályán súrlódásmentesen lecsúszó test mozgása. A test akkor repül le a cikloisról, amikor a kényszererő nullává válik, vagyis amikor a nehézségi erőnek a pályára merőleges komponense éppen megegyezik a centripetális gyorsulással. A ciklois jellemző adataiból (meredekség és görbület), valamint az energiamegmaradás törvényéből is megkapható a kényszerpálya elhagyásának helye. 
 3. A (13) összefüggést közvetlenül is megkaphatjuk, ha képezzük (7) mindkét oldalának az idő szerinti deriváltját: 
 $\frac{{\rm d}}{{\rm d}t}
\left(v^2\right)=2va=
 \frac{\rm d}{{\rm d}\varphi}
 \left( Rg\frac{1-\cos\varphi}{1+\cos\varphi}\right)
 \cdot
 \frac{{\rm d}\varphi}{{\rm d}t}=2Rg\frac{\sin\varphi}{(1+\cos\varphi)^2}\cdot \frac{v}{R},
$ 
 ahonnan 
 $a=\frac{\sin\varphi}{(1+\cos\varphi)^2}\,g.$ 
 Ezt (8)-ba helyettesítve (11), (9)-be írva pedig (12) adódik. 
 4. Amikor a kis test lerepül az abroncsról, akkor $N=S=0$. A kis test vízszintes irányú gyorsulása $g-v_0^2/R=0$, függőleges irányú gyorsulása pedig $a=g$. Érdekes, hogy az abroncs középpontjának vízszintes irányú gyorsulása közvetlenül a lerepülést megelőző pillanatban $a=g\ne 0$, jóllehet az abroncsra ható erő ekkor nullává válik. Ez azonban nincs ellentmondásban Newton $F=m_\text{abroncs}a$ törvényével, hiszen $m_\text{abroncs}$ elhanyagolhatóan kicsi, nullának tekinthető.

![solution figure](../../raw_html/komal_figures/komal-P5417-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5417-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5417-sol-fig3.gif)
