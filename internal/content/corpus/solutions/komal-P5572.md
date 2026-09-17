---
id: komal-P5572
source: komal
language: hu
translated: false
problem: komal-P5572
figure_files: [komal-P5572-sol-fig1.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük Aladár tömegét $m_\mathrm{A}$-val, rugalmas kötelének hosszát $\ell_\mathrm{A}$-val, és ennek a kötélnek megfelelő rugó direkciós állandóját (rugóállandóját) $D_\mathrm{A}$-val. A Bendegúzra vonatkozó megfelelő mennyiségek jele legyen $m_\mathrm{B}$, $\ell_\mathrm{B}$ és $D_\mathrm{B}$. Az ugrás helyének a vízfelszíntől mért magasságát jelöljük $h$-val. 
 Az ismert adatok: $m_\mathrm{A}=60\,\mathrm{kg}$,  $m_\mathrm{B}=80\,\mathrm{kg}$,  $D_\mathrm{A}=72\,\mathrm{N/m}$,  $h=50\,\mathrm{m}$ és $g=9{,}81\,\mathrm{m/s^2}$. 
 A keresett mennyiségek: $\ell_\mathrm{A}$, $\ell_\mathrm{B}$, $D_\mathrm{B}$, illetve a két ugró maximális gyorsulása: $a^\mathrm{max}_\mathrm{A}$ és $a^\mathrm{max}_\mathrm{B}$. 
 $a)$ Aladár kötelének hosszát legkönnyebben az energiamegmaradás tételének alkalmazásával kaphatjuk meg. Az elugráskor és a vízfelszínhez érkezéskor Aladár sebessége nulla, így csak a gravitációs helyzeti energia és a rugalmas energia változását kell figyelembe vennünk: 
 $-m_\mathrm{A}gh+\frac{1}{2}D_\mathrm{A}\left(h-\ell_\mathrm{A}\right)^2=0,$ 
 ahonnan 
 $\ell_\mathrm{A}=h-\sqrt{\frac{2m_\mathrm{A}gh}{D_\mathrm{A}}}=21{,}41\,\mathrm{m}\approx 21\,\mathrm{m}.$ 
 Hasonló megfontolással kapjuk meg Bendegúz rugalmas kötelének nyújtatlan hosszát. Az energiamegmaradás szerint 
 $-m_\mathrm{B}gh+\frac{1}{2}D_\mathrm{B}\left(h-\ell_\mathrm{B}\right)^2=0.$ 
 Vegyük még figyelembe, hogy egy rugalmas kötél ,,rugóállandója'' függ a nyújtatlan kötél hosszától, annak reciprokával arányos. (Ez a Hooke-törvényből olvasható ki.) Ennek megfelelően 
 $D_\mathrm{B}=D_\mathrm{A}\frac{\ell_\mathrm{A}}{\ell_\mathrm{B}},$ 
 tehát az energiatétel egyenlete: 
 $m_\mathrm{B}gh=\frac{1}{2}D_\mathrm{A}\frac{\ell_\mathrm{A}}{\ell_\mathrm{B}}\left(h-\ell_\mathrm{B}\right)^2.$ 
 Ez $\ell_\mathrm{B}$-re nézve másodfokú egyenlet, amelynek $h$-nál kisebb megoldása: 
 $\ell_\mathrm{B}=18{,}95\,\mathrm{m}\approx 19\,\mathrm{m}.$ 
 (Ennél pontosabb eredmény megadása az ugrók testmagasságának figyelembevétele nélkül értelmetlen lenne.) 
 Bendegúz kötelének direkciós állandója $\ell_\mathrm{B}$ ismeretében már könnyen számolható: 
 $D_\mathrm{B}\approx 81\,\mathrm{N/m}.$ 
 $b)$ A legnagyobb (függőlegesen felfelé irányuló) gyorsulás a vízfelszínhez érés pillanatában következik be, hiszen ekkor a legnagyobb a kötelet feszítő erő. Newton törvénye szerint 
 $m_\mathrm{A}a^\mathrm{max}_\mathrm{A}=D_\mathrm{A}\left(h-\ell_\mathrm{A}\right)-m_\mathrm{A}g,$ 
 ahonnan 
 $a^\mathrm{max}_\mathrm{A}=\left(\sqrt{\frac{2D_\mathrm{A}h}{m_\mathrm{A}g}}-1\right)g\approx 2{,}5\,g.$ 
 Hasonló számolással adódik, hogy 
 $a^\mathrm{max}_\mathrm{B}=\left(\sqrt{\frac{2D_\mathrm{B}h}{m_\mathrm{B}g}}-1\right)g\approx 2{,}2\,g.$ 
 A gyorsulás következtében az ugrást végző személy úgy érzi, mintha a nehézségi gyorsulás a megszokott $g$-ről $g'=g+a^\mathrm{max}$ értékre növekedett volna. Aladár esetében $g'$ legnagyobb értéke $3{,}5\,g$, Bendegúznál pedig $3{,}2\,g$. Érdekes, hogy a nagyobb tömegű, rövidebb kötélre kötött Bendegúz veséinek (és más belső szerveinek) ,,terhelése'' a kisebb, mint a kisebb tömegű, de hosszabb kötéllel rendelkező Aladár terhelése. 
 $c)$ Az esési idők összehasonlítása első ránézésre nagyon nehéz kérdésnek tűnik, de nem az! Nincs szükség a két idő nagyságának pontos kiszámítására, hiszen csak az a kérdés, hogy melyik időtartam a rövidebb. 
 Számítsuk ki a ,,halálugrást'' végző személy sebességének négyzetét a megtett $x$ út függvényében. Mindaddig, amíg a kötél laza, a mozgás szabadesés, tehát az $x\le\ell$ szakaszon 
 $v^2(x)=2g\cdot x.$ 
 A kötél fokozatos megfeszülése során (vagyis ha $\ell<x\le h$) az energiamegmaradás egyenlete szerint 
 $\frac{1}{2}mv^2=mgx-\frac{1}{2}D(x-\ell)^2,$ 
 ahonnan 
 $v^2(x)=2gx-\frac{D}{m}(x-\ell)^2.$ 
 A fenti képletekben $m$, $D$ és $\ell$ helyébe Aladárnál és Bendegúznál a nekik megfelelő értékeket kell behelyettesítenünk. A paramétereket úgy állították be, hogy mindkét ugrónál $v(x=h)=0$ teljesüljön. 
 Ábrázoljuk a $v^2(x)$ függvény grafikonját. A képletekből leolvashatjuk, hogy a grafikon egy (az origóból induló, adott meredekségű) egyenesből és egy lefelé szélesedő parabolából tevődik össze. Mindkét görbe második zérushelye az $x$ tengely $x=h$ pontjánál van. Az egyenes és a parabola folytonosan és törésmentesen csatlakozik egymáshoz az $x=\ell$ koordinátájú pontban. 

 Az ábráról leolvashatjuk, hogy Bendegúz – kékkel jelölt – $v^2$-e sehol nem emelkedik Aladár piros görbéje fölé, és egy szakaszon pedig határozottan az alatt halad. Ugyanez érvényes a $v(x)$ sebesség-út függvény grafikonjára is. 
 Ezek szerint a pálya bármely kicsiny $\Delta x$ hosszúságú szakaszát Aladár nagyobb, vagy ugyanakkora sebességgel teszi meg, mint Bendegúz, emiatt biztosan hamarabb éri el a vízfelszínt, mint a nagyobb tömegű társa.

![solution figure](../../raw_html/komal_figures/komal-P5572-sol-fig1.png)
