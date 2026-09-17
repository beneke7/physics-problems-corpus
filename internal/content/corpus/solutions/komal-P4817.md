---
id: komal-P4817
source: komal
language: hu
translated: false
problem: komal-P4817
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Az vízhez rögzített koordináta-rendszerben a labda áll, a kutya pedig 0,5 m/s sebességgel úszik, az 5 méteres távolságot tehát 10 s alatt teszi meg. Ezalatt a labda a parthoz viszonyítva 3 m-t mozdul el. 
 $b)$ Jelöljük a kutya vízhez viszonyított) sebességének a folyásiránnyal ellentétes komponensét $v_1$-gyel, a part felé mutató sebességkomponenst pedig $v_2$-vel. A megadott feltételek szerint (az SI-beli mértékegység elhagyásával) fennáll: 
 $v_1^2+v_2^2=0{,}25 \qquad \text{és} \qquad
 \frac{v_1-0{,}3}{v_2}=\frac{3 }{5 }=0{,}6.$ 
 Ennek az egyenletrendszernek egyik megoldása $v_1=0, v_2=0{,}5$, ami annak felel meg, hogy a kutya folyamatosan távolodik a gazditól; ez számunkra érdektelen eset. A másik (fizikailag reális) megoldás: 
 $v_1=0{,}441\qquad \text{és} \qquad v_2=0{,}235.$ 
 Ennek megfelelően a kutya egyenesen úszva $T_1=5/v_2=21{,}3~\rm s$ idő alatt ér vissza a gazdájához. 
 $c)$ Írjuk le a mozgást a vízhez rögzített koordináta-rendszerből! Innen nézve a kutya állóvízben $v=0{,}5$ m/s sebességgel úszik gazdája felé, a gazdi pedig $c= 0{,}3$ m/s sebességgel mozog a parton a víz folyásirányával ellentétes irányban. Ha a kutya pillanatnyi sebessége $\alpha(t)$ szöget zár be a parttal, akkor a gazdi és a kutya közötti pillanatnyi $r(t)$ távolság változási üteme: 
 $\frac{\Delta r}{\Delta t}=-0{,}5+0{,}3\,\cos\alpha.$ 
 Legyen a kutya pillanatnyi helyzetének partra merőleges vetülete $x(t)$ távolságra a kezdeti helyzetétől. Ennek a mennyiségnek változási sebessége: 
 $\frac{\Delta x}{\Delta t}= 0{,}5\,\cos\alpha.$ 
 Mivel a kutya mozgása közben $\alpha$ változik, $x$ és $r$ meglehetősen bonyolult függvénye az időnek, meghatározásuk csak felsőbb matematikai eszközökkel lehetséges. Ha viszont kiküszöböljük a kezelhetetlen $\cos\alpha$-s tényezőt, a következő egyszerű egyenletet kapjuk: 
 $\frac{\Delta (r-0{,}6x)}{\Delta t}=-0{,}5. $ 
 Az $r-0{,}6x$ mennyiség tehát időben egyenletesen változik, és a kutya $T_2$ ideig tartó visszaúszásának végén 
 $r(T_2)-0{,}6x(T_2)=r(0)-0{,}6x(0)-0{,}5T_2.$ 
 Felhasználva, hogy 
 $r(T_2)=0, \quad x(T_2)=3+0{,}3T_2, \quad r(0)=\sqrt{3^2+5^2}=5{,}83 \quad\text{és}\quad x(0)=0,$ 
 a keresett idő: $T_2=23{,}8$ s, ami mintegy 2,5 másodperccel hosszabb, mintha egyenesen úszott volna a kutya.
