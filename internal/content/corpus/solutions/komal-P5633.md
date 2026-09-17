---
id: komal-P5633
source: komal
language: hu
translated: false
problem: komal-P5633
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A fénynyaláb intenzitását az energiaáram-sűrűség (a  Poynting-vektor nagysága, szokásos jelölése $S$) adja meg. A fénynyaláb fotonjainak $hf$ energiája és $h/\lambda$ impulzusa van ($\lambda=c/f$, $c$ a fénysebesség). Eszerint a nyaláb egy tetszőleges $A$ keresztmetszetű része $\Delta t$ idő alatt nemcsak $\Delta E=SA\Delta t$ energiát, hanem 
 $\Delta p=\frac{\Delta E}{c}=\frac{SA}{c}\Delta t$ 
 impulzust is szállít. Amikor a fénynyaláb a kocka felületének ütközik, akkor az impulzusváltozás miatt a kockára erővel fog hatni (fénynyomás). A kormozott esetben a fény elnyelődik, teljes impulzusát átadja a testnek, és így az $A$ keresztmetszetű nyaláb által kifejtett erőhatás iránya a fénynyaláb terjedési irányával párhuzamos, nagysága pedig: 
 $F=\frac{\Delta p}{\Delta t}=\frac{SA}{c}.$ 
 Az ezüstözött esetben a fény visszaverődik. Ilyenkor az impulzus felületre merőleges komponense előjelet vált, és így az erőhatás iránya a felületre merőleges, nagysága pedig: 
 $F=\frac{2\Delta p_\perp}{\Delta t}.$ 
 A feladat megoldásához jelöljük a kocka éleinek hosszát $d$-vel. A test szimmetriáiból fakadóan kitüntethetünk egy tetszőleges csúcsot, az ebben találkozó három lap befelé mutató normálvektorait jelölje rendre $\boldsymbol{e}_x$, $\boldsymbol{e}_y$ és $\boldsymbol{e}_z$. A fénynyaláb haladási irányát pedig az $\boldsymbol{n}$ egységvektorral adjuk meg. Az általánosság elvesztése nélkül korlátozhatjuk vizsgálatunkat a kitüntetett csúcs által kijelölt térnyolcadra, ekkor a beeső fénysugarakra teljesül, hogy $n_x=\boldsymbol{n}\boldsymbol{e}_x\ge 0$, $n_y=\boldsymbol{n}\boldsymbol{e}_y\ge 0$ és $n_z=\boldsymbol{n}\boldsymbol{e}_z\ge 0$. 

 a) Tekintsük először a kormozott kocka esetét. A nyalábot alkotó $hf$ energiájú fotonok $n_xSd^2$, $n_ySd^2$, illetve $n_zSd^2$ teljesítménnyel érkeznek az egyes lapokra, és ott leadják teljes $h/\lambda$ nagyságú impulzusukat. Ezek alapján a kifejtett erőhatás: 
 $\boldsymbol{F}=\frac{Sd^2}{c}\left[\left(\boldsymbol{n}\boldsymbol{e}_x\right)\boldsymbol{n}+ \left(\boldsymbol{n}\boldsymbol{e}_y\right)\boldsymbol{n}+\left(\boldsymbol{n}\boldsymbol{e}_z\right)\boldsymbol{n}\right].$ 
 A szögletes zárójelben szereplő három tag azonos irányú, így az erő nagysága könnyedén kifejezhető: 
 $(1)$ $F=\frac{Sd^2}{c}\left[\left(\boldsymbol{n}\boldsymbol{e}_x\right)+\left(\boldsymbol{n}\boldsymbol{e}_y\right)+ \left(\boldsymbol{n}\boldsymbol{e}_z\right)\right]=\frac{Sd^2}{c}\left(n_x+n_y+n_z\right).$ 
 A kifejezés maximumát és a maximum feltételét kétféleképp is meghatározhatjuk. (Mindkét módszer során felhasználjuk, hogy az $\boldsymbol{n}$ vektor egységvektor.) 

 1. Az (1) kifejezés első, vektoros alakjából kiindulva (a skaláris szorzat disztributív tulajdonságát felhasználva): 
 $F=\frac{Sd^2}{c}\left[\left(\boldsymbol{n}\boldsymbol{e}_x\right)+\left(\boldsymbol{n}\boldsymbol{e}_y\right)+ \left(\boldsymbol{n}\boldsymbol{e}_z\right)\right]=\frac{Sd^2}{c}\boldsymbol{n}\left(\boldsymbol{e}_x+\boldsymbol{e}_y+\boldsymbol{e}_z\right)\leq\frac{Sd^2}{c}\left|\boldsymbol{n}\right|\left|\boldsymbol{e}_x+\boldsymbol{e}_y+\boldsymbol{e}_z\right|=\frac{\sqrt{3}Sd^2}{c}.$ 

 2. Az (1) kifejezés második, skalár alakjából kiindulva a számtani és négyzetes közepek közti egyenlőtlenséget felhasználva ugyanerre jutunk: 
 $F=\frac{Sd^2}{c}\left( n_x+n_y+n_z\right)\leq\frac{3Sd^2}{c}\sqrt{\frac{n_x^2+n_y^2+n_z^2}{3}}=\frac{\sqrt{3}Sd^2}{c}.$ 

 Mindkét egyenlőtlenség megmutatja, hogy a fénynyomásból származó erő akkor maximális, amikor a fénysugár irányát megadó $\boldsymbol{n}$ és a kocka testátlójának irányába mutató $\boldsymbol{e}_x+\boldsymbol{e}_y+\boldsymbol{e}_z$ vektorok párhuzamosak (1. módszer), illetve – ami ezzel ekvivalens –, ha $n_x=n_y=n_z$ (2. módszer). Tehát akkor, ha a kockát az egyik testátlójával párhuzamosan világítjuk meg. A maximális erő ebben az esetben: 
 $(2)$ $F_\mathrm{max\,1}=\frac{\sqrt{3}Sd^2}{c}.$ 

 b) Tekintsük ezután az ezüstözött kocka esetét, és használjuk az eddigi jelöléseket. A nyalábot alkotó $hf$ energiájú fotonok most is $n_xSd^2$, $n_ySd^2$, illetve $n_zSd^2$ teljesítménnyel érkeznek az egyes lapokra, de ott most nem elnyelődnek, hanem visszaverődnek: a felületre merőleges $n_xh/\lambda$, $n_yh/\lambda$, illetve $n_zh/\lambda$ impulzuskomponenseik ellentettjükre váltanak. Ezek alapján a kifejtett erőhatás: 
 $(3)$ $\boldsymbol{F}=\frac{2Sd^2}{c}\left[\left(\boldsymbol{n}\boldsymbol{e}_x\right)^2\boldsymbol{e}_x+ \left(\boldsymbol{n}\boldsymbol{e}_y\right)^2\boldsymbol{e}_y+\left(\boldsymbol{n}\boldsymbol{e}_z\right)^2\boldsymbol{e}_z\right].$ 

 Megjegyzés. A (3) kifejezés magyarázatául: az $x$ indexű lapra $\Delta t$ idő alatt beérkező impulzus 
 $\Delta p_x=\frac{Sd^2}{c}n_x\Delta t=\frac{Sd^2}{c}\boldsymbol{n}\boldsymbol{e}_x\Delta t$ 
 nagyságú, iránya $\boldsymbol{n}$-nel párhuzamos, tehát a vektor: 
 $\Delta\boldsymbol{p}_x=\Delta p_x\boldsymbol{n}=\frac{Sd^2}{c}(\boldsymbol{n}\boldsymbol{e}_x)\boldsymbol{n}\Delta t.$ 
 Ennek a vektornak a lapra merőleges komponense 
 $\Delta p_{x\perp}=\Delta\boldsymbol{p}_x\boldsymbol{e}_x=\frac{Sd^2}{c}(\boldsymbol{n}\boldsymbol{e}_x)^2\Delta t$ 
 nagyságú, és az iránya $\boldsymbol{e}_x$-szel párhuzamos, tehát a vektor: 
 $\Delta\boldsymbol{p}_{x\perp}=\Delta p_{x\perp}\boldsymbol{e}_x=\frac{Sd^2}{c}(\boldsymbol{n}\boldsymbol{e}_x)^2\boldsymbol{e}_x\Delta t,$ 
 Az ebből származó erőhatás: 
 $\boldsymbol{F}_x=\frac{2\Delta\boldsymbol{p}_{x\perp}}{\Delta t}=\frac{2Sd^2}{c}(\boldsymbol{n}\boldsymbol{e}_x)^2\boldsymbol{e}_x.$ 
 A (3) kifejezésben a szögletes zárójelben szereplő három tag egymásra páronként merőleges, így az erő nagysága a Pitagorasz-tétel segítségével kifejezhető: 
 $(4)$ $F=\frac{2Sd^2}{c}\sqrt{\left(\boldsymbol{n}\boldsymbol{e}_x\right)^4+\left(\boldsymbol{n}\boldsymbol{e}_y\right)^4+ \left(\boldsymbol{n}\boldsymbol{e}_z\right)^4}=\frac{2Sd^2}{c}\sqrt{n_x^4+n_y^4+n_z^4},$ 
 majd a gyök alatti kifejezésből egy teljes négyzetet kiemelve felülről becsülhető: 
 $F=\frac{2Sd^2}{c}\sqrt{\left(n_x^2+n_y^2+n_z^2\right)^2-2n_x^2n_y^2-2n_y^2n_z^2-2n_z^2n_x^2}\leq\frac{2Sd^2}{c}\left(n_x^2+n_y^2+n_z^2\right)=\frac{2Sd^2}{c}.$ 
 Látható, hogy az erő akkor lesz maximális, ha az $n_x$, $n_y$ és $n_z$ komponensek közül kettő zérus, tehát akkor, ha a kockát az egyik élével párhuzamosan (azaz az egyik lapjára merőlegesen) világítjuk meg. A maximális erő ebben az esetben: 
 $F_\mathrm{max\,2}=\frac{2Sd^2}{c}.$ 
 Ezt a (2) kifejezéssel összevetve látható, hogy ezüstözött kocka esetén $\tfrac{2}{\sqrt{3}}$-szor nagyobb erőhatás hozható létre, mint a kormozott esetben. 

 Megjegyzések. 1. Észrevehetjük, hogy az a) esetben, akkor maximális ar erő, ha a fénynyaláb irányából nézve a lehető legnagyobb keresztmetszetűnek látjuk a kockát – hiszen a fény a beesés irányától függetlenül elnyelődik. Ez akkor valósul meg, ha a kockát egyik testátlójával párhuzamos irányból nézzük – a levezetéssel éppen ezt bizonyítottuk –, ilyenkor a kocka szabályos hatszög alakúnak látszik, (A hatszög oldalhosszúsága $a=\sqrt{\tfrac{2}{3}}d$, területe $T=\tfrac{\sqrt{3}}{4}a^2=\sqrt{3}d^2$.) 
 A  b) esetben viszont – érdekes módon – éppen akkor maximális az erő, amikor a keresztmetszet a legkisebb, viszont ebben a helyzetben a fény merőlegesen verődik vissza, és így impulzusváltozás maximális. 

 2. A  minimális erő az a) esetben nyilvánvalóan akkor lép fel, ha a fénynyaláb irányából nézve a lehető legkisebb keresztmetszetűnek látjuk a kockát. Ez akkor valósul meg, ha a fénynyaláb a kocka egyik élével pérhuzamos (egyik lapjára merőleges), és ilyenkor az erő nagysága: 
 $F_{min\,1}=\frac{Sd^2}{c}.$ 
 A  b) esetben viszont érdekes módon akkor lesz minimális az erő, ha ez a terület maximális, azaz a fénynyaláb az egyik testátlóval párhuzamosan érkezik. Ezt könnyen beláthatjuk, ha a (4) kifejezést a négyzetes és számtani közepek közti egyenlőtlenséget felhasználva átalakítjuk: 
 $F=\frac{2Sd^2}{c}\sqrt{n_x^4+n_y^4+n_z^4}=\frac{2\sqrt{3}Sd^2}{c}\sqrt{\frac{(n_x^2)^2+(n_y^2)^2+(n_z^2)^2}{3}}\geq\frac{2\sqrt{3}Sd^2}{c}\frac{n_x^2+n_y^2+n_z^2}{3}=\frac{2Sd^2}{\sqrt{3}c}.$ 
 Ebből láthatjuk, hogy a kifejezés valóban akkor lesz minimális, ha $n_x=n_y=n_z$, a minimum értéke pedig 
 $F_{min\,2}=\frac{2Sd^2}{\sqrt{3}c}.$ 
 Látható, hogy a maximumokhoz hasonlóan a minimumok esetében is $\tfrac{2}{\sqrt{3}}$-szor nagyobb az erő az ezüstözött kocka esetében.
