---
id: komal-P5453
source: komal
language: hu
translated: false
problem: komal-P5453
figure_files: [komal-P5453-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A felületi töltéssűrűség arányos a fémgömb felületénél kialakuló elektromos térerősség nagyságával, tehát a kérdés az, hogy ez a térerősség hol nulla. 
 A gömbön kívül kialakuló elektromos tér a gömbi tükörtöltés módszerével határozható meg. Az $r$ sugarú gömb középpontjától $d$ távolságban lévő $Q$ töltés tükörtöltése egy, a gömb középpontjától $\delta=kr$ távolságra elhelyezett $-kQ$ töltés, ahol $k=r/d<1$ állandó. A gömb felületén akkora lesz a térerősség, mint az ábrán látható módon elhelyezett $Q$, $-kQ$ és a gömb középpontjába helyezett $+kQ$ töltés elektromos terének az eredője. 

 Az eredő térerősség mindenhol merőleges a gömb felületére, és a nagysága 
 $(1)$ $E=\frac{Q}{4\pi\varepsilon_0}\left(\frac{k}{r^2}-\frac{k\cos\gamma}{\varrho^2}-\frac{\cos\beta}{R^2}\right),$ 
 ahol (a koszinusztétel szerint) 
 $(2)$ $\varrho=r\sqrt{1+k^2-2k\cos\alpha} \qquad \text{és}\qquad R=\frac{\varrho}{k}.$ 
 (Kihasználtuk, hogy $_\triangle ABC$ és $_\triangle ADB$ hasonló háromszögek.) 
 Azt az $\alpha$ szöget keressük, amelynél $E=0$. A (2) összefüggéseket használva behelyettesíthetjük $\varrho$-t és $R$-t (1)-be, amely ezután így alakul: 
 $(3)$ $k\cos\beta+\cos\gamma=1+k^2-2k\cos\alpha.$ 
 Két újabb koszinusztétel segítségével 
 $(4)$ $\cos\gamma=\frac{r^2+\varrho^2-\delta^2}{2r\varrho}=\frac{1-k\cos\alpha}{\sqrt{1+k^2-2k\cos\alpha}},$ 
 illetve 
 $\cos\beta=\frac{d^2-r^2-R^2}{2rR}=\frac{ \cos\alpha-k}{\sqrt{1+k^2-2k\cos\alpha}}.$ 
 Ezeket (3)-ba helyettesítve kapjuk, hogy 
 $1-k^2=\left(1+k^2-2k\cos\alpha\right)^{3/2},$ 
 vagyis 
 $\cos\alpha=\frac
{\left(1+k^2\right)-\left(1-k^2\right)^{2/3}} {2k}$ 
 adódik. Visszahelyettesítve (4)-be adódik a (tetszőleges $k$-ra érvényes) végeredmény: 
 $\cos\gamma=\frac{(1-k^2)^{1/3}+(1-k^2)^{2/3}}{2}.$ 
 Esetünkben $k=0{,}4$, ezért $\cos\gamma=0{,}917$, azaz $\gamma=23{,}51^\circ$. A kérdéses látószög tehát 
 $2\gamma=47{,}0^\circ.$ 

 Megjegyzés. Érdekes, hogy a kiszámított látószög nagyon jó közelítéssel megegyezik azzal a szöggel, amely alatt a teljes gömböt látjuk a $Q$ töltés helyéről. Ez utóbbi 
 $\gamma^*=\arcsin k=47{,}2^\circ.$ 
 Ez a közelítő egyezés nemcsak $k=0{,}4$ esetén, hanem minden $k$-nál fennáll, tehát a zérus töltéssűrűségű hely majdnem a fémgömb látható részének legszélénél található. $\gamma$ egy kicsit kisebb, mint $\gamma^*$, de a relatív eltérésük tetszőleges $k$ esetén kisebb, mint 2%.

![solution figure](../../raw_html/komal_figures/komal-P5453-sol-fig1.gif)
