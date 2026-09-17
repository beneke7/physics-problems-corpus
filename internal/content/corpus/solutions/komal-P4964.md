---
id: komal-P4964
source: komal
language: hu
translated: false
problem: komal-P4964
figure_files: [komal-P4964-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen a jégkocka oldaléle $d$ hosszú, tömege $m$ és hasson a jégkockára az egyik oldaléle középpontjában $F$ nagyságú, a vízszintessel $\alpha$ szöget bezáró erő (lásd az ábrát ). 

 A felborulás határhelyzetében a kocka már egy kicsit megemelkedik, és csak a $P$ ponton átmenő élénél érintkezik a vízszintes jégfelülettel. A kocka vízszintes irányban egyenletesen gyorsul, a függőleges gyorsulása és a forgási szöggyorsulása nulla. A mozgásegyenletek ennek megfelelően: 
 $F\cos\alpha=ma,$ 
 $F\sin\alpha+N-mg=0,$ 
 $F\frac{d}{2}\cos\alpha+F\frac{d}{2}\sin\alpha-N\frac{d}{2}=0.$ 
 (A forgómozgás alapegyenletét a tömegközéppontra írtuk fel. Vigyázat: más pontra felírt forgási egyenlet rossz eredményre vezethet!) 
 A fenti egyenletekből az erőre az 
 $F=\frac{1}{\cos\alpha+2\sin\alpha}mg$ 
 kifejezés adódik. Ennek legkisebb értéke a nevező maximumához tartozik. Belátható (egy 1 és 2 oldalélű, $\alpha$ szögben megbillentett téglalap legmagasabb pontjának megkeresésével, vagy trigonometrikus átalakításokkal, esetleg differenciálszámítással), hogy 
 $\cos\alpha+2\sin\alpha\le \sqrt{5},$ 
 és a szélsőérték $\tan\alpha=2$, vagyis $\alpha\approx63^\circ$ szöghöz tartozik. 
 A jégkockát tehát a súlyának $1/\sqrt{5}$ részével, annak kb. 45%-ával lehet felborítani.

![solution figure](../../raw_html/komal_figures/komal-P4964-sol-fig1.gif)
