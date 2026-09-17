---
id: komal-P5446
source: komal
language: hu
translated: false
problem: komal-P5446
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Ha a labdák kezdeti $d$ távolsága a lehető legnagyobb, akkor a mutatvány még éppen sikerülhet, azaz a labdák közvetlenül a földet érés pillanata előtt találkoznak. A labdák azonos időt töltenek a levegőben, ezért a kezdeti sebességük függőleges komponense is megegyezik: 
 $(1)$ $v_{1y}=v_{2y}.$ 
 A mozgás ideje a ferde hajítás képletei szerint 
 $(2)$ $t=\frac{2v_{1y}}{g}.$ 
 Ennek ismeretében a labdák kezdeti távolsága is kifejezhető a kezdősebességek vektoraival: 
 $(3)
$ $d=\vert\boldsymbol{v}_1-\boldsymbol{v}_2\vert t,$ 
 hiszen $(1)$ miatt a $(\boldsymbol{v}_1-\boldsymbol{v}_2)$ vektor vízszintes. A $(2)$ és $(3)$ egyenletekből: 
 $d=\frac{2v_{1y}\vert\boldsymbol{v}_1-\boldsymbol{v}_2\vert}{g}\,.$ 
 A számlálóban álló kifejezés nem más, mint a $\boldsymbol{v}_1$ és $\boldsymbol{v}_2$ vektorok által kifeszített paralelogramma területének kétszerese. Könnyen belátható, hogy ez (és ezzel együtt a $d$ távolság is) akkor maximális, ha a rögzített nagyságú $\boldsymbol{v}_1$ és $\boldsymbol{v}_2$ vektorok egymásra merőlegesek. Ekkor a vektor-paralelogramma egy $v_1v_2$ területű téglalap, azaz 
 $d_{\textrm{max}}=\frac{2v_1v_2}{g}\approx 41~\rm m.$
