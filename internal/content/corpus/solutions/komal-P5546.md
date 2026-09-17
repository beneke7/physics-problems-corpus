---
id: komal-P5546
source: komal
language: hu
translated: false
problem: komal-P5546
figure_files: [komal-P5546-sol-fig1.gif, komal-P5546-sol-fig2.png, komal-P5546-sol-fig3.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $a)$ Az iglu $t=2\,\mathrm{s}$ idő alatt $\alpha=\omega t=60^\circ$-ot fordul el, tehát (az inerciarendszerből nézve) a $B$ pont a $B'$ pontba kerül. A korong – súrlódás hiányában – az inerciarendszerben egyenes vonalú egyenletes mozgást végez, és $t$ idő alatt a $\overline{AB'}=R$ távolságot kell megtennie ($\varphi-\alpha=60^\circ$). Eszerint a sebesség nagysága az inerciarendszerből nézve 
 $v_\mathrm{ir}=\frac{R}{t}=1{,}5\,\mathrm{m/s},$ 
 iránya pedig az $A$ ponthoz húzott sugárral $60^\circ$-os szöget zár be ( 1. ábra ). 

 1. ábra 

 Az inerciarendszerből nézve az $A$ pont $v_A=R\omega=\pi/2\,\mathrm{m/s}$ sebességgel mozog, az ellökés pillanatában a rajzon függőlegesen felfelé. A korong sebességvektora az igluból nézve 
 $\boldsymbol{v}=\boldsymbol{v}_\mathrm{ir}-\boldsymbol{v}_A.$ 

 2. ábra 

 A sebességvektor nagysága a koszinusztétel alapján ( 2. ábra ): 
 $v=\sqrt{v_\mathrm{ir}^2+v_A^2-2v_\mathrm{ir}v_A\cos150^\circ}=2{,}97\,\mathrm{m/s},$ 
 az $A$ ponthoz húzott sugárral bezárt $\beta$ szöge pedig a szinusztétel alapján: 
 $\frac{\sin(90^\circ-\beta)}{\sin150^\circ}=\frac{v_\mathrm{ir}}{v}\qquad\rightarrow\qquad\beta=75{,}4^\circ.$ 

 $b)$ A korong az iglu középpontjához legközelebb a mozgása felénél lesz. A pont középponttól mért távolsága ugyanakkora az igluból és az inerciarendszerből nézve is. A távolság könnyen leolvasható az 1. ábráról , ami az $R$ oldalú szabályos háromszög magassága: 
 $d_\mathrm{min}=\frac{\sqrt{3}}{2}R=2{,}6\,\mathrm{m}.$ 

 Megjegyzés. Nem része a feladatnak, de számítógéppel kirajzolható a pályagörbe az igluból nézve (a korong iglu jegén hagyott nyoma). Ha felveszünk egy derékszögű koordináta-rendszert, melynek középpontja az iglu középpontja, és az $A$ pont koordinátái ($-R$ , 0), akkor az inerciarendszerben könnyen felírhatjuk a korong koordinátáit az idő függvényében: 
 $$\begin{align*}
 x_\mathrm{ir}&=-R+\frac{v_\mathrm{ir}}{2}t,\\
 y_\mathrm{ir}&=\frac{-\sqrt{3}v_\mathrm{ir}}{2}t.
\end{align*}$$
 Az iglu állandó $-\omega$ szögsebességgel elfordul az inerciarendszerhez képest, így az igluból nézve az inerciarendszer forog $\omega$ szögsebességgel. Az igluhoz rögzített koordináta-rendszerben (amely az ellökés pillanatában megegyezik az inerciarendszerbelivel) a $t$ időpillanatban egy $\omega t$ szögű forgatással kapjuk meg a korong koordinátáit: 
 $$\begin{align*}
 x&=x_\mathrm{ir}\cos(\omega t)-y_\mathrm{ir}\sin(\omega t)=\left(-R+\frac{v_\mathrm{ir}}{2}t\right)\cos(\omega t)+\frac{\sqrt{3}v_\mathrm{ir}}{2}t\sin(\omega t),\\
 y&=x_\mathrm{ir}\sin(\omega t)+y_\mathrm{ir}\cos(\omega t)=\left(-R+\frac{v_\mathrm{ir}}{2}t\right)\sin(\omega t)-\frac{\sqrt{3}v_\mathrm{ir}}{2}t\cos(\omega t).
\end{align*}$$
 Az ($x$ , $y$) pontok ezután már sokféle programmal könnyen ábrázolhatók ( 3. ábra ). 

 3. ábra

![solution figure](../../raw_html/komal_figures/komal-P5546-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5546-sol-fig2.png)

![solution figure](../../raw_html/komal_figures/komal-P5546-sol-fig3.png)
