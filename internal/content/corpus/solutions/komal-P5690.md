---
id: komal-P5690
source: komal
language: hu
translated: false
problem: komal-P5690
figure_files: [komal-P5690-sol-fig1.png, komal-P5690-sol-fig2.png, komal-P5690-sol-fig3.png, komal-P5690-sol-fig4.png, komal-P5690-sol-fig5.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Hihetőnek tűnik az a feltételezés, hogy a testet akkor tudjuk a legkisebb erővel megmozdítani, ha a lejtő esésvonala és a függőleges által meghatározott síkban lefelé, de nem az esésvonal irányába, hanem azzal valamekkora $\varphi$ szöget bezáróan a lejtő síkjára merőlegesen is húzzuk. Ez utóbbi erőkomponens ugyanis csökkenti a lejtő és a test között kialakuló nyomóerőt, és így a tapadó súrlódási erő maximális értéke is lecsökken. Belátható (lásd II. és a III. megoldást), hogy ha a lejtő szintvonalaival párhuzamos, tehát ,,oldalirányú'' erőt is kifejtünk, a test megmozdításához szükséges minimális erő nagysága megnő. 
 A fenti feltételezés elfogadása esetén a $G$ nagyságú, függőleges irányú nehézségi erő, a lejtő síkjára merőleges $N$ nagyságú nyomóerő, a lejtő esésvonala mentén (felfelé) ható $S$ súrlódási erő és a megmozdításhoz szükséges $F$ nagyságú erő mind ugyanabban a síkban lévő vektorok, a feladat tehát síkbeli problémaként kezelhető ( 1. ábra ). 

 1. ábra 

 Vizsgáljuk azt a helyzetet, amelyben a test még éppen nem csúszik meg, még egyensúlyban van. Az erőegyensúly feltétele: 
 $(1)$ $N=G\cos\alpha-F\sin\varphi,$ 
 $(2)$ $S=G\sin\alpha+F\cos\varphi,$ 
 és a megcsúszás határhelyzetében 
 $(3)$ $S=\mu N.$ 
 A (1) és (2) egyenletek jobb oldalát (3)-ba helyettesítve, majd abból $F$-et kifejezve kapjuk, hogy $F$ mint $\varphi$ függvénye: 
 $(4)$ $F(\varphi)=\frac{\mu\cos\alpha-\sin\alpha}{\cos\varphi+\mu \sin\varphi}\,G.$ 
 A számlálóban lévő kifejezés pozitív (hiszen a test ,,magától'' nem csúszik le a lejtőn, tehát $\mu>\tg\alpha$). Ennek megfelelően $F$ akkor a legkisebb, amikor a nevező a legnagyobb értéket veszi fel. 
 A maximum helyét háromféle módszerrel is meg lehet határozni: 

 a) Differenciálszámítással. 
 $\frac{\mathrm{d}}{\mathrm{d}\varphi}(\cos\varphi+\mu\sin\varphi)=-\sin\varphi+\mu\cos\varphi=0,$ 
 vagyis $\tg\varphi=\mu$, és a maximum nagysága 
 $\frac{1}{\sqrt{1+\mu^2}}+\mu\frac{\mu}{\sqrt{1+\mu^2}}=\sqrt{1+\mu^2}.$ 
 b) Geometriai megfontolással. Ha egy $\mu$ és $1$ oldalélű téglalapot függőleges helyzetben vízszintes síklapra állítunk, majd az egyik csúcsa körül a saját síkjában $\varphi$ szöggel elforgatjuk, az átlósan szemközti csúcsa éppen olyan magasra kerül, mint (4) nevezője ( 2. ábra ). Ez a magasság akkor a legnagyobb, amikor a kérdéses átló éppen függőleges, vagyis $\tg\varphi=\mu,$ és a maximális érték az átló hossza, vagyis$\sqrt{1+\mu^2}.$ 

 2. ábra 

 Ezek szerint (4) jobb oldalának legkisebb értéke 
 $F_0=\left(\frac{\mu\cos\alpha}{\sqrt{1+\mu^2}}-\frac{\sin\alpha}{\sqrt{1+\mu^2}}\right)G.$ 
 A test tehát akkor mozdítható meg a lejtőn a legkönnyebben, ha $F_0$-nál bármilyen kicsivel nagyobb erőt fejtünk ki rá a lejtő esésvonalának lefelé tartó részével $\arctg\mu$ szöget bezáró irányban, ferdén felfelé. 

 c) Trigonometriai átalakításokkal. A súrlódási együtthatót sok esetben érdemes felírni $\mu=\tg\varepsilon$ alakban, ahol $\varepsilon=\arctg\mu$ az ún. súrlódási határszög . Mivel a test külső erőhatás nélkül nem csúszik le a lejtőn, fennáll $\mu>\tg\alpha$, azaz $\varepsilon>\alpha$. Ezzel a jelöléssel (4) ilyen alakot ölt: 
 $F(\varphi)=\frac{\tg\varepsilon\cos\alpha-\sin\alpha}{\cos\varphi+\tg\varepsilon\sin\varphi}G=\frac{\sin\varepsilon\cos\alpha-\cos\varepsilon\sin\alpha}{\cos\varepsilon\cos\varphi+\sin\varepsilon\sin\varphi}\,G=\frac{\sin(\varepsilon-\alpha)}{\cos(\varepsilon-\varphi)}\,G.$ 
 Ennek minimuma a nevező maximumánál, vagyis $\varphi=\varepsilon$, azaz $\tg\varphi=\mu$ értéknél van, és a maximum nagysága 
 $F_0=\sin(\varepsilon-\alpha)\,G=(\sin\varepsilon\cos\alpha-\cos\varepsilon\sin\alpha)\,G=\left(\frac{\mu\cos\alpha}{\sqrt{1+\mu^2}}-\frac{\sin\alpha}{\sqrt{1+\mu^2}}\right)G.$ 

**II. megoldás.**
 Ebben a megoldásban nem élünk azzal a feltevéssel, hogy a testre ható valamennyi erő ugyanabban a síkban helyezkedik el, hanem megengedjük, hogy az $\boldsymbol{S}$ súrlódási erőnek és az általunk kifejtett $\boldsymbol{F}$ erőnek legyen a lejtő szintvonalaival párhuzamos komponense is. A 3. ábrán látható térbeli koordináta-rendszert fogjuk használni, amelyben az $x$ tengely a lejtő szintvonalaival párhuzamos, az $y$ tengely az esésvonal irányába mutat, a $z$ tengely pedig merőleges a jeltő síkjára. 

 3. ábra 

 A lejtő által kifejtett nyomóerő vektora 
 $\boldsymbol{N}=(0,0,N),$ 
 a nehézségi erő 
 $\boldsymbol{G}=(0,-G\sin\alpha,-G\cos\alpha).$ 
 A súrlódási erő az $(x,y)$ síkban fekszik, a nagysága a megcsúszás határhelyzetében $S=\mu N$, és $\boldsymbol{S}$ irányának az $y$ tengellyel bezárt szögét jelöljük $\phi$-vel; így a komponensei: 
 $\boldsymbol{S}=(\mu N\sin\phi,\mu N\cos\phi,0).$ 
 Az $\boldsymbol{N}$ vektor nagyságát érdemes $N=\xi G$ alakban felírni, ahol $\xi$ egy dimenziótlan mennyiség. 
 Erőegyensúly esetén 
 $\boldsymbol{N}+\boldsymbol{G}+\boldsymbol{S}+\boldsymbol{F}=0,$ 
 vagyis 
 $\boldsymbol{F}=G\left(-\mu\xi\sin\phi,\,\sin\alpha-\mu\xi\cos\phi,\,\cos\alpha-\xi\right),$ 
 ahonnan a minimalizálandó kétváltozós függvény 
 $(5))$ $f(\xi,\phi)\equiv\frac{F^2}{G^2}=\xi^2(1+\mu^2)-2\xi(\mu\sin\alpha\cos\phi+\cos\alpha)+1.$ 
 (Kihasználtuk, hogy $F$ legkisebb értékénél $F^2/G^2$ is minimális.) 
 A $\phi$ változó (5)-ben csak egyetlen tagban szerepel, nevezetesen a $-\cos\phi$ kifejezésnek pozitív számszorosaként. Ennek bármilyen $\xi$ mellett $\phi=0$-nál a legkisebb az értéke. 
 Megjegyzés. Ezzel bizonyítást nyert az I. megoldásban megfogalmazott sejtés, vagyis az, hogy a feladat síkbeli problémaként kezelhető. 
 A továbbiakban az 
 $(6)$ $f(\xi,\phi=0)\equiv\xi^2(1+\mu^2)-2\xi(\mu\sin\alpha +\cos\alpha)+1$ 
 egyváltozós, a $\xi$ változóban másodfokú függvény legkisebb értékét keressük meg. (6) jobb oldala teljes négyzetté alakítható, és abból könnyen leolvashatjuk a minimum helyét és nagyságát: 
 $\frac{F^2}{G^2}=\left(\xi\sqrt{1+\mu^2}-\frac{\mu\sin\alpha+\cos\alpha }{\sqrt{1+\mu^2}}\right)^2+1-\frac{(\mu\sin\alpha+\cos\alpha)^2}{1+\mu^2}\ge 1-\frac{(\mu\sin\alpha+\cos\alpha)^2}{1+\mu^2}=\left(\frac{\mu\cos\alpha-\sin\alpha }{\sqrt{1+\mu^2}}\right)^2.$ 
 Ezek szerint a test megmozdításához szükséges erő nagyságának alsó határa ($F=F_0$ esetén a test még egyensúlyban marad, de $F_0$-at bármilyen kicsiny mértékben meghaladó nagyságú és alkalmasan választott irányba mutató erővel már megmozdítható): 
 $F_0=\frac{\mu\cos\alpha-\sin\alpha }{\sqrt{1+\mu^2}}\,G.$ 

**III. megoldás.**
 A II. megoldás jelöléseit használva az egyensúly $\vert\boldsymbol{S}\vert\le\mu\vert\boldsymbol{N}\vert$ feltétele úgy is megfogalmazható, hogy a test mindaddig mozdulatlan marad, ameddig a test helyétől felmérve a lejtő által kifejtett teljes kényszererő $\boldsymbol{K}=\boldsymbol{N}+\boldsymbol{S}$ vektorának végpontja egy olyan körkúp belsejébe vagy annak palástjára esik, amelynek szimmetriatengelye merőleges a lejtő síkjára, és a félnyílásszöge a súrlódás $\varepsilon=\arctg\mu$ határszöge ( 4. ábra ). 

 4. ábra 

 A testre ható erők egyensúlyi állapotban zárt vektorháromszöget alkotnak. A $\boldsymbol{G}$ nehézségi erő függőleges, hatásvonala $\alpha$ szöget zár be a kúp szimmetriatengelyével. A $\boldsymbol{K}$ kényszererő a megcsúszás határesetében a kúp palástjának valamelyik $Q$ pontjába mutat. Végül az egyensúlyt biztosító $\boldsymbol{F}$ külső erő a $Q$ pontot a nehézségi erő vektorának $P$ kezdőpontjával köti össze. 
 Feladatunk a kúppalást azon $Q$ pontjának megtalálása, amelyre a $PQ$ távolság a legkisebb. Tekintsük a $P$ középpontú, $F$ sugarú gömbfelületeket. Ha $F$ túlságosan kicsi, a gömb teljes egészében a kúp belsejébe esik, tehát a test nem mozdul meg. Növelve $F$ nagyságát, valamekkora $F_0$ sugárnál a gömb felülete valahol eléri a kúp palástját, a két felület egy $Q$ pontban érinti egymást. Ennél a pontnál a kúp palástjának érintősíkja egybeesik a gömb érintősíkjával, tehát merőleges az $\boldsymbol{F}$ vektorra. Ez csak akkor akkor teljesülhet, ha a $Q$ pont illeszkedik a lejtő esésvonalán átmenő függőleges síkra. 
 Megjegyzés. Ez az észrevétel is bizonyítja az I. megoldásban szereplő sejtés helyességét, vagyis azt, hogy a feladat síkbeli problémaként kezelhető. 
 (Kivételt képez az $\alpha=0$ eset, amikor a test nem lejtőn, hanem egy vízszintes felületen nyugszik. Ilyenkor a gömb nem egyetlen pontban, hanem egy vízszintes kör mentén érinti a kúppalástot.) 

 5. ábra 

 A $PQ$ távolság legkisebb értékét könnyen leolvashatjuk az 5. ábráról , ami a kúp palástjának az esésvonalra és a szimmetriatengelyre illeszkedő síkmetszetét mutatja. $F=PQ$ akkor a legkisebb, ha $\boldsymbol{F}$ merőleges $\boldsymbol{K}$-ra, és ekkor az általunk kifejtett erő nagysága 
 $F_0=G\sin(\varepsilon-\alpha)=G(\sin\varepsilon\cos\alpha-\cos\varepsilon\sin\alpha)=\left(\frac{\mu\cos\alpha}{\sqrt{1+\mu^2}}-\frac{\sin\alpha}{\sqrt{1+\mu^2}}\right)G.$ 
 Az is látszik az 5. ábrán , hogy $\boldsymbol{F}_0$ a vízszintessel $\varepsilon-\alpha$ szöget, a lejtő síkjával pedig éppen $\varepsilon$ nagyságú szöget zár be. $F=F_0$ nagyságú külső erőnél a test még éppen egyensúlyban van, de ha $F$ tetszőlegesen kicsiny értékkel meghaladja $F_0$-t, a gömb egy kicsiny része a kúpon kívülre kerül, tehát ekkor a tapadó súrlódás nem tudja megakadályozni a test megmozdulását.

![solution figure](../../raw_html/komal_figures/komal-P5690-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-P5690-sol-fig2.png)

![solution figure](../../raw_html/komal_figures/komal-P5690-sol-fig3.png)

![solution figure](../../raw_html/komal_figures/komal-P5690-sol-fig4.png)

![solution figure](../../raw_html/komal_figures/komal-P5690-sol-fig5.png)
