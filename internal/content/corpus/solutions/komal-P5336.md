---
id: komal-P5336
source: komal
language: hu
translated: false
problem: komal-P5336
figure_files: [komal-P5336-sol-fig1.gif, komal-P5336-sol-fig2.gif, komal-P5336-sol-fig3.gif, komal-P5336-sol-fig4.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 A $H=2$ km magasságban $v$ sebességgel haladó vadászgép $c$ sebességű hangterjedés ($v>c$) esetén egy olyan $\alpha$ félnyílásszögű kúpot (ún. Mach-kúpot) ,,húz maga után'', amelyre teljesül, hogy 
 $\frac{c}{v}=\sin\alpha.$ 
 A Mach-kúp felületének pontjaiba egyszerre érkezik meg a repülőgép hangja. A Mach-kúp és a vízszintes, sík mező közös pontjai egy olyan hiperbolán helyezkednek el, amelynek aszimptotái $2\alpha$ szöget zárnak be egymással, és a hiperbola két ágának távolsága $2H\,\cot\alpha$ ( 1. ábra ). 

 1. ábra 

 Három megfigyelő akkor hallja meg egyszerre a repülőgép hangját, ha az általuk meghatározott $L=14~$km oldalélű, szabályos háromszög illeszkedik a hiperbolára. Mivel a gép éppen az egyik ($A$-val jelölt) megfigyelő feje felett repül el, a gép pályájának vetülete a mezőn (ami a hiperbola egyik tengelye) áthalad az $A$ ponton. A másik két megfigyelő erre a tengelyre szimmetrikusan helyezkedik el, hiszen az $A$-tól mért távolságuk ugyanakkora ( 2. ábra ). 

 2. ábra 

 A három megfigyelő koordinátái: 
 $A: \qquad (H\,\cot\alpha, 0),$ 
 $B: \qquad \left( \cot\alpha\sqrt{\left(\frac{L}{2}\right)^2+H^2}, \frac{L }{2}\right),$ 
 $C: \qquad \left( \cot\alpha\sqrt{\left(\frac{L}{2}\right)^2+H^2}, -\frac{L }{2}\right).$ 
 Az adatok behelyettesítése után ezt kapjuk: 
 $\cot\alpha(\sqrt{53}-2)+7^2=14^2,$ 
 ahonnan 
 $\tan\alpha=0{,}435 \qquad \Rightarrow \qquad \alpha=23{,}5^\circ,$ 
 tehát 
 $M=\frac{v}{c}=\frac{1}{\sin\alpha}\approx 2{,}5.$ 
 A repülőgép tehát 2,5 mach-hal (vagyis a hangsebesség 2,5-szörösével), mintegy 3060 km/h sebességgel repült. 

**II. megoldás.**
 Képzeljük magunkat az egyik megfigyelő helyébe. A tőlünk $H$ távolságban lévő egyenes mentén a repülő $v$ sebességgel mozog, a kibocsátott hang pedig $c$ $(c<v)$ sebességgel. Az, hogy a repülő különböző időpillanatokban kibocsátott hangja mikor érkezik legelőször hozzánk, a repülő távolságától és a sebességének felénk mutató $v_r$ (radiális) komponensétől függ. Mindaddig, amíg $v_r>c$, a repülő ,,lehagyja'' a hangját. Hozzánk az a hang érkezik meg legelőször, ami a $v_r=c$ egyenlőségnek megfelelő helyről indult ki, vagyis amikor a fokozatosan csökkenő radiális sebességkomponens átlépi a hangsebességet. (Ilyenkor a hozzánk érkező hang intenzitása is lényegesen megnő, ezért érzékelünk ,,hangrobbanást''.) 

 3. ábra 

 Válasszuk az időmérés kezdőpontját úgy, hogy a repülőgép éppen a ,,fejünk felett'' (a hozzánk legközelebbi pontban) legyen $t=0$. Számítsuk ki, hogy mikor (milyen $T$ időpontban) érkezik hozzánk először a hang. A 3. ábráról leolvashatjuk, hogy a hangsebesség átlépése annál a $P$ pontnál következik be, amely a röppálya hozzánk legközelebbi $K$ pontjába mutató egyenessel bezárt szögre 
 $\sin\alpha=\frac{c}{v}$ 
 teljesül. Mivel a $PK$ távolság $H\tan\alpha$, a $P$ pontba 
 $t_0=-\frac{H}{v}\tan\alpha$ 
 időpillanatban érkezik a repülőgép. Innen a hangnak $\frac{H}{\cos\alpha}$ utat kell még megtennie, hogy hozzánk érkezzen, így 
 $(1)$ $T=t_0+\frac{H}{c\cos\alpha}=\frac{H}{c\cos\alpha}-\frac{H\tan\alpha}{v}=
\frac{H}{v}\left(\frac{1}{\sin\alpha\,\cos\alpha}-\frac{\sin\alpha}{\cos\alpha}\right)=\frac{H}{v}\cot\alpha.$ 
 Tekintsük a szabályos háromszög csúcsaiban elhelyezkedő három megfigyelőt ,,felülről'' nézve ( 4. ábra ). (A távolságokat kilométer egységekben mérjük.) Feltehetjük, hogy a repülő az $A$ ponthoz tartozó magasságvonal felett repül el $H=2$ km magasságban. A hangja (1) szerint 
 $T_A=\frac{2}{v}\cot\alpha$ 
 időpontban érkezik az $A$ megfigyelőhöz. 

 4. ábra 

 A $B$ és $C$ megfigyelők a repülőgép pályájától 
 $H'=\sqrt{7^2+2^2}= \sqrt{53}$ 
 egység távolságra vannak, hozzájuk tehát 
 $T_B=T_C=\frac{\sqrt{53}}{v}\cot\alpha-\frac{ 7\sqrt{3}}{v} $ 
 időpontban érkezik meg a legelső hang. (A képlet jobb oldalának második tagja azt veszi figyelembe, hogy a repülőgépnek $v$ sebességgel meg kell tennie az $A$ és $B$-hez legközelebbi helyzeteknek megfelelő $7\sqrt{3}$ km-nyi távolságot.) 
 A $T_A=T_B=T_C$ feltétel akkor teljesül, ha 
 $2\cot\alpha=\sqrt{53}\cot\alpha-7\sqrt{3},$ 
 vagyis 
 $\cot\alpha=\frac{7\sqrt{3}}{\sqrt{53}-2}=2{,}29,$ 
 ahonnan $\alpha =23{,}5^\circ,$ vagyis 
 $\frac{v}{c}=\frac{1}{\sin\alpha}\approx 2{,}5.$

![solution figure](../../raw_html/komal_figures/komal-P5336-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5336-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5336-sol-fig3.gif)

![solution figure](../../raw_html/komal_figures/komal-P5336-sol-fig4.gif)
