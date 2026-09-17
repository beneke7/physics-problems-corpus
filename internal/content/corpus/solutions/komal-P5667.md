---
id: komal-P5667
source: komal
language: hu
translated: false
problem: komal-P5667
figure_files: [komal-P5667-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 a) A kis tükör a lámpa előre szóródó fényéből jelentős hányadot visszaver, és így ez a fény is bekerül a reflektor által létrehozott fénynyalábba. Ez annak ellenére növeli a reflektor teljesítményét, hogy a kis tükör bizonyos hányadot kitakar a párhuzamos fénynyalábból. 

 b) A kis tükör megfordítja a fénysugarakat, vagyis a lámpa izzószála a gömbtükör geometriai középpontjában van. Így közvetlenül lemérhetjük a kis tükör felületének görbületi sugarát, és ennek fele adja jó közelítéssel a kis tükör fókusztávolságát. A nagy tükör forgási paraboloid, aminek fókuszában van a lámpa izzószála. Kinyomtatott ábrán elvégzett mérések szerint a nagy tükör fókusztávolsága körülbelül 2,5-szerese a gömbtükör sugarának, vagyis a fókusztávolságok aránya körülbelül 5. 

 c) A számszerű eredményhez használnunk kell a térszög fogalmát, aminek a mértékegysége a szteradián (sr). A teljes térszög $4\pi\,\mathrm{sr}$, mert az egységsugarú gömb felülete $4\pi$. Másképp fogalmazva a térszöget úgy kaphatjuk meg, hogy egy $r$ sugarú gömb felületén kijelöljük a vizsgált térszögnek megfelelő területet, és ezt elosztjuk $r^2$-tel. Megmutatható, hogy amennyiben egy egyenes kúp által kimetszett felületről van szó, amikor a kúp csúcsa a gömb középpontjában van (ez a leggyakoribb eset), és a kúp félnyílásszöge $\varphi$, akkor a kérdéses térszög: $\Omega=2\pi(1-\cos{\varphi})$. Az ábrán az eredeti ábrát speciális sugarakkal kiegészítettük, és bejelöltünk három félnyílásszöget. 

 Ha nem használnánk a kis tükröt, akkor a parabolatükör az $\alpha$ félnyílásszögű kúpból érkező sugarakat alakítaná párhuzamos nyalábbá. A kinyomtatott ábrán szögmérővel elvégzett mérések szerint $\alpha=47^\circ$. Az ehhez tartozó térszög: 
 $\Omega_1=2\pi(1-\cos\alpha)=2{,}00\,\mathrm{sr}.$ 
 Ilyenkor az izzólámpa fényének $\tfrac{2{,}00}{4\pi}=0{,}159\approx 16\%$-a kerül be a párhuzamos fénynyalábba. 

 A kis tükör használatával az előre szóródó fényből $\beta$ térszöggel verődik vissza fény, ami szintén bekerül a párhuzamos nyalábba. Azonban az $\alpha$ és a $\beta$ térszögű sugarakból a nagy tükörről történő visszaverődés után a kis tükör a $\gamma$ térszöghöz tartozó részt kitakarja. A mérések szerint $\beta=42^\circ$ és $\gamma=15^\circ$. A kérdéses térszögeket (melyek megadják a nyalábba kerülő fény arányát) így számíthatjuk ki: 
$$\begin{align*}
\Omega_2&=(2\pi(1-\cos\alpha)-2\pi(1-\cos\gamma))+(2\pi(1-\cos\beta)-2\pi(1-\cos\gamma))=\\
&=2\pi(2\cos\gamma-(\cos\alpha+\cos\beta))=3{,}18\,\mathrm{sr}.
\end{align*}$$
 A kis tükör segítségével az izzólámpa fényének $\tfrac{3{,}18}{4\pi}=0{,}253\approx 25\%$-a kerül be a reflektor nyalábjába. 

 Láthatjuk tehát, hogy a kis tükör több mint másfélszeresére növeli a reflektor fényerejét. 

 Megjegyzés. A fényből az izzó foglalata is kitakar valamennyit, de ezt nem vettük figyelembe a számításnál. A kis tükröt gyakran beleépítik az izzóba.

![solution figure](../../raw_html/komal_figures/komal-P5667-sol-fig1.gif)
