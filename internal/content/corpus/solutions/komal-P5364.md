---
id: komal-P5364
source: komal
language: hu
translated: false
problem: komal-P5364
figure_files: [komal-P5364-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jellemezzük a kis testnek a félhengeren elfoglalt helyzetét a függőlegessel bezárt $\varphi$ szöggel, a félhengerhez viszonyított relatív sebességét az $\omega=\frac{\Delta \varphi}{\Delta t}$ szögsebességgel, a félhenger pillanatnyi sebességét pedig jelöljük $v$-vel (lásd az ábrát ). 

 A laborrendszerben a kis test sebességének vízszintes komponense $u_1=v-R\omega\cos\varphi$, függőleges komponense $u_2=R\omega\sin\varphi$, a sebességének nagysága pedig 
 $(1)$ $u=\sqrt{u_1^2+u_2^2}=\sqrt{v^2+R^2\omega^2-2vR\omega\cos\varphi}.$ 
 A rendszerre vízszintes irányban nem hat külső erő, ezért a vízszintes irányú impulzusa mindvégig nulla marad: 
 $mv+mu_1= mv+m(v-R\omega\cos\varphi)=0,$ 
 azaz 
 $(2)$ $v= \frac{1}{2} R\omega \cos\varphi.$ 
 Alkalmazhatjuk még a mechanikai energiamegmaradás törvényét: 
 $(3)$ $mgR(1-\cos\varphi)=\frac{1}{2}mv^2+\frac{1}{2}mu^2.$ 
 Abban a pillanatban, amikor a kis test elválik a félhengertől, a közöttük ható nyomóerő éppen nullára csökken. A félhengerre ekkor nem hat vízszintes irányú erő, a gyorsulása tehát nulla. A félhengerhez rögzített koordináta-rendszer ekkor inerciarendszer, benne a Newton-féle mozgásegyenlet az eredeti alakjában érvényes. A kis testre az elválás pillanatában csak az $mg$ nehézségi erő hat, amelynek sugárirányú (radiális) komponense $mg\cos\varphi$. A sugárirányú gyorsulás $R\omega^2$, a mozgásegyenlet szerint tehát 
 $(4)$ $mg\cos\varphi=mR\omega^2.$ 
 Az (1)-(4) egyenletekből $v$, $u$ és $\omega$ kiküszöbölése után ezt kapjuk: 
 $\cos^3\varphi-6\cos\varphi+4=0.$ 
 Ez az egyenlet az $x\equiv\cos\varphi$ változóra nézve harmadfokú: 
 $x^3-6x+4=0,$ 
 aminek az egyik (számunkra érdektelen) gyöke: $x_1=2$. 
 $x^3-6x+4=(x-2)(x^2+2x-2)=0.$ 
 A másik két gyök: $x_{2,3}=-1\pm\sqrt{3}.$ A $(0,1)$ intervallumba csak $x_2=\sqrt{3}-1\approx 0{,}73$ esik, ennek megfelelő szög: $\varphi=\arccos x_2\approx0{,}75$ radián. 
 A kis test tehát $s=R\varphi\approx \frac{3}{4}R$ hosszúságú utat tesz meg a félhengeren. (Ez természetesen nem egyezik meg a síklap koordináta-rendszerében megtett úttal, ez utóbbi kiszámítása lényegesen bonyolultabb lenne.)

![solution figure](../../raw_html/komal_figures/komal-P5364-sol-fig1.gif)
