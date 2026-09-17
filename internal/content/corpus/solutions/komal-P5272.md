---
id: komal-P5272
source: komal
language: hu
translated: false
problem: komal-P5272
figure_files: [komal-P5272-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Az ábráról leolvashatjuk, hogy a külső (álló) fogaskerék fogainak száma $n_0=37$, a belső fogaskerekeké pedig 
 $n_A=19; \qquad n_B=13; \qquad n_C=11; \qquad n_D=7.$ 
 Gondolatban egyenesítsük ki a 37 fogú külső kereket, így egy 37 fogú fogaslécet kapunk, majd ezen vezessük végig az $A$, a $B$ és a $D$ jelű fogaskerekeket. Megállapíthatjuk, hogy ezek rendre $\tfrac{37}{19}$, $\tfrac{37}{13}$ és $\tfrac{37}{7}$ fordulatot végeznek. Ha visszatérünk a fogaslécről az eredei (kör alakú) fogaskerékre, akkor a mozgó kerekek körülfordulásának száma a fenti értékeknél minden esetben eggyel kisebb lesz. Ezt úgy láthatjuk be, ha gondolatban az álló fogaslécen lépünk egy foggal előrébb (a görgetett kerékkel együtt, annak mozgásirányába), majd a fogaslécen annyit hajlítunk visszafelé, hogy végül kialakuljon a teljes kör. A fogasléc visszahajlításakor a rajta lévő fogaskerék is visszafelé fordul el. A sok kis visszafordulás végül egy teljes körré áll össze, ezért kell egyet levonnunk az egyenes fogaslécnél kiszámolt értékből. 
 Tehát miközben a belső fogaskerekek először visszatérnek eredeti helyzetükbe, az $A$, $B$ és $D$ kerekek rendre 
 $\frac{37}{19}-1=\frac{18}{19};\qquad \frac{37}{13}-1=\frac{24}{13}; \qquad
\frac{37}{7}-1=\frac{30}{7}$ 
 fordulatot végeznek. Ha a legkisebb fogaskerék másodpercenként egyet fordul, akkor a teljes körülforduláshoz 30/7 másodperc szükséges. Így megkaphatjuk az $A$ és a $B$ jelű fogaskerekek fordulatszámát: 
 $f_A=\frac{ {18}/{19}} { {30}/{7}}
~{\rm s}^{-1}=\frac{21}{95}~{\rm s}^{-1}=0{,}221~{\rm s}^{-1};
\qquad f_B=\frac{ {24}/{13}} { {30}/{7}}~{\rm
s}^{-1}=\frac{28}{65}~{\rm s}^{-1}=0{,}431~{\rm s}^{-1}.$ 
 Hátra van még a 11 fogú, $C$ jelű fogaskerék. Ezt ugyanolyan gyorsan (de visszafelé, a fogasléc folyamatos meggörbítésével megegyező irényba) hajtja mind a három másik kerék, ezért $C$ fordulatszámát akár háromféleképpen is kiszámíthatjuk. Egy teljes körüljárás alatt a kerék körülfordulásainak száma: 
 $\frac{37/19}{11/19}+1=\frac{37/13}{11/13}+1=\frac{37/7}{11/7}+1=
\frac{37 }{11}+1=\frac{48}{11}.$ 
 Az előzőekhez hasonlóan végül a $C$ jelű fogaskerék fordulatszáma: 
 $f_C=\frac{ {48}/{11}} { {30}/{7}}
~{\rm s}^{-1}=\frac{56}{55}~{\rm s}^{-1}=1{,}018~{\rm s}^{-1},$ 
 forgásának iránya pedig a többiekével ellentétes. 

**II. megoldás.**
 Az ábráról leolvashatjuk, hogy a külső (álló) fogaskerék fogainak száma $n_0=37$, a belső fogaskerekeké pedig 
 $n_A=19; \qquad n_B=13; \qquad n_C=11; \qquad n_D=7.$ 
 Jelöljük a belső fogaskerekek (azok mozgó tengelyeinek) keringési fordulatszámát $f_0$-lal. 
 Üljünk bele egy olyan $\cal K'$ koordináta-rendszerbe, amely együtt forog a tengelyekkel, vagyis a fordulatszáma az eredeti, az álló külső kerékhez rögzített $\cal K$ koordináta-rendszerben éppen $f_0$. Ebből a rendszerből nézve a négy belső fogaskerék tengelye áll, a külső kerék pedig $f_0$ fordulatszámmal forog az óramutató járásával megegyező irányban. 

 A belső kerekek fordulatszáma a $\cal K'$ rendszerben (a fogak számának arányában) 
 $f'_A= \frac{37}{19}f_0; \qquad
f'_B= \frac{37}{13}f_0; \qquad -f'_C= \frac{37}{19}\cdot \frac{19}{11}f_0= \frac{37}{13}\cdot\frac{13}{11}f_0=
\frac{37}{7}\cdot\frac{7}{11}f_0=\frac{37}{11}f_0; \qquad f'_D= \frac{37}{7}f_0.
$ 
 ($f'_C$ képletében a negatív előjel azt fejezi ki, hogy ez a fogaskerék a másik hárommal ellentétes irányban forog.) 
 Az eredeti $\cal K$ rendszerbe úgy térhetünk vissza, hogy a fordulatszámokból levonjuk a két rendszer egymáshoz képesti forgásának $f_0$ fordulatszámát: 
 $f_A=f'_A-f_0=\frac{18}{19}f_0; \quad
f_B= f'_B-f_0=\frac{24}{13}f_0;\quad f_C=f'_C-f_0= -\frac{48}{11}f_0;\quad f_D=f'_D-f_0= \frac{30}{7}f_0.$ 
 Tudjuk, hogy 
 $f_D=1~\rm s^{-1},\qquad \text{vagyis}\qquad f_0=\frac{7}{30}~\rm s^{-1}.$ 
 Innen következik, hogy a körbejáró fogaskerekek másodpercenkénti fordulatszáma 
 $f_A=\frac{21}{95}\approx 0{,}22;\qquad
f_B=\frac{28}{65}\approx 0{,}43;\qquad f_C=-\frac{56}{55}\approx
-1{,}02.$

![solution figure](../../raw_html/komal_figures/komal-P5272-sol-fig1.gif)
