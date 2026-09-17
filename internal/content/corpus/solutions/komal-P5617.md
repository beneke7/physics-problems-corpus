---
id: komal-P5617
source: komal
language: hu
translated: false
problem: komal-P5617
figure_files: [komal-P5617-sol-fig1.gif, komal-P5617-sol-fig2.gif, komal-P5617-sol-fig3.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 A lejtővel együtt gyorsuló vonatkoztatási rendszerben a testre az $mg$ nehézségi erőn és a lejtő $F_\mathrm{n}$ nyomóerején kívül $ma_0$ nagyságú, a lejtő gyorsulásával ellentétes irányú (vízszintes) tehetetlenségi erő is hat ( 1. ábra ), ahol $a_0=7\,\mathrm{m/s^2}$ a lejtő gyorsulása az inerciarendszerben. 

 1. ábra 

 A mozgásegyenletek: 
$$\begin{gather*}
ma=ma_0\cos\alpha-mg\sin\alpha,\\
F_\mathrm{n}=ma_0\sin\alpha+mg\cos\alpha,
\end{gather*}$$
 hiszen a test – ebben a vonatkoztatási rendszerben – csak a lejtő síkjával párhuzamosan mozoghat. Az első egyenletből: 
 $a=a_0\cos\alpha-g\sin\alpha\approx 1{,}16\,\mathrm{m/s^2}.$ 
 Ebben a vonatkoztatási rendszerben a lejtő áll, és a testnek a lejtőn kell végighaladnia. A $h$ magasságú lejtő hossza 
 $s=\frac{h}{\sin\alpha}=2\,\mathrm{m},$ 
 az egyenletesen gyorsuló test ezt a távolságot 
 $t=\sqrt{\frac{2s}{a}}\approx 1{,}86\,\mathrm{s}$ 
 idő alatt teszi meg. 

 Megjegyzés. a test csak akkor indul el felfelé a lejtőn, ha $a=a_0\cos\alpha-g\sin\alpha>0$, amiből az $a_0>g\tg\alpha$ feltétel adódik. $30^\circ$-os lejtő esetében ez $a_0>5{,}66\,\mathrm{m/s^2}$ feltételt jelent. 

**II. megoldás.**
 A lejtővel együtt gyorsuló vonatkoztatási rendszerben minden testre hat az $mg$ nehézségi erő és az $ma_0$ nagyságú tehetetlenségi erő is, így a testek azt ,,érzik'' mintha $\boldsymbol{g}'=\boldsymbol{g}+\boldsymbol{a}_0$ nehézségi gyorsulás lenne. A $\boldsymbol{g}'$ nagysága: 
 $g'=\sqrt{g^2+a_0^2}\approx 12{,}05\,\mathrm{m/s^2},$ 
 iránya pedig 
 $\gamma=\arctg\frac{a_0}{g}\approx 35{,}5^\circ$ 
 szöget zár be a függőlegessel ( 2/a ábra ). Ebben az erőtérben a test úgy mozog, mintha egy $\beta=\gamma-\alpha\approx 5{,}5^\circ$ hajlásszögű lejtőn csúszna le $g'$ nehézségi gyorsulás mellett ( 2/b ábra ). 

 2. ábra 

 A súrlódásmentes lejtőn lecsúszó test gyorsulása jól ismert: 
 $a=g'\sin\beta\approx 1{,}16\,\mathrm{m/s^2},$ 
 amiből a ,,lecsúszás'' ideje az előző megoldással egyező módon $t\approx 1{,}86\,\mathrm{s}$. 

**III. megoldás.**
 A feladat inerciarendszerben is megoldható. Ekkor a testre csak a nehézségi erő és a lejtő nyomóereje hat, azonban a test nem a lejtő síkjában fog mozogni (hiszen ebben a vonatkoztatási rendszerben a lejtő is mozog). Az erőket és az elmozdulásokat a 3. ábra mutatja (az ábra méretei torzítottak). 

 3. ábra 

 A mozgásegyenletek: 
$$\begin{gather*}
ma_x=F_\mathrm{n}\sin\alpha,\tag{1}\\
ma_y=F_\mathrm{n}\cos\alpha-mg\tag{2},
\end{gather*}$$

 ahol $a_x$ és $a_y$ a test vízszintes és függőleges gyorsuláskomponense. 
 Másrészt az ábráról leolvasható, hogy a test és a lejtő elmozdulásvektorának különbsége egyenlő a lejtő aljától a tetejéig mutató vektorral: 
 $\boldsymbol{s}_\textrm{test}-\boldsymbol{s}_\textrm{lejtő}=\boldsymbol{s}.$ 
 A test és a lejtő elmozdulásvektora is arányos a gyorsulásvektorukkal (hiszen ugyanannyi ideig és egyenes vonalban, zérus kezdősebességről egyenletesen gyorsulva mozog mindkettő), így ebből a gyorsulásokra adódó feltétel: 
 $(3)$ $\frac{a_y}{a_0-a_x}=\tg\alpha.$ 
 Az (1), (2) és (3) egyenletekből álló egyenletrendszert megoldva: 
 $a_y=a_0\sin\alpha\cos\alpha-g\sin^2\alpha\approx 0{,}58\,\mathrm{m/s^2}.$ 
 A testnek $h=1\,\mathrm{m}$ magasra kell feljutnia, ehhez 
 $t=\sqrt{\frac{2h}{a_y}}\approx 1{,}86\,\mathrm{s}$ 
 időre van szükség. 

 Megjegyzés. A feladat nem kérdezi, de meghatározhatjuk a lejtő elmozdulását is: a lejtő 
 $d=\frac{a_0}{2}t^2=\frac{a_0}{a_y}h=\frac{a_0}{a_0\sin\alpha\cos\alpha-g\sin^2\alpha}h\approx 12{,}1\,\mathrm{m}$ 
 utat tesz meg (ezért kellett torzított ábrát készíteni).

![solution figure](../../raw_html/komal_figures/komal-P5617-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5617-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5617-sol-fig3.gif)
