---
id: komal-P5480
source: komal
language: hu
translated: false
problem: komal-P5480
figure_files: [komal-P5480-sol-fig1.gif, komal-P5480-sol-fig2.gif, komal-P5480-sol-fig3.gif, komal-P5480-sol-fig4.gif, komal-P5480-sol-fig5.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás**
. Válasszunk egy olyan koordináta-rendszert, amelynek origója a $P$ pont, $x$ tengelye vízszintes, $y$ tengelye pedig függőlegesen felfelé mutat ( 1. ábra). 

 1. ábra 

 A súrlódva lecsúszó test gyorsulása az $\arctan\mu<\alpha\le 90^\circ$ hajlásszögű lejtőn 
 $(1)$ $a(\alpha)=g(\sin\alpha-\mu\cos\alpha),$ 
 így az adott $t$ idő alatt 
 $s(\alpha)=\frac{a(\alpha)}{2}t^2=\frac{g}{2}t^2(\sin\alpha-\mu\cos\alpha)$ 
 utat tesz meg. Érdemes bevezetni a $h=gt^2/2$ jelölést ($h$ az a távolság, amennyit a szabadon eső test $t$ idő alatt megtesz), ezzel a test koordinátái 
 $(2)$ $x(\alpha)=h(\sin\alpha-\mu\cos\alpha)\cos\alpha,$ 
 $(3)$ $y(\alpha)=-h(\sin\alpha-\mu\cos\alpha)\sin\alpha.$ 
 A (2) és (3) összefüggések a keresett pontokat leíró görbe paraméteres egyenletei, amelyekből $\alpha$ kiküszöbölése után megkaphatjuk a keresett mértani hely egyenletét $y=f(x)$ vagy $F(x,y)=0$ alakban. Felhasználva a 
 $\sin\alpha\,\cos\alpha=\frac{\sin 2\alpha}{2},\qquad
\cos^2\alpha=\frac{1+\cos 2\alpha}{2},\qquad 
\sin^2\alpha=\frac{1-\cos 2\alpha}{2}$ 
 trigonometrikus azonosságokat, (2) és (3) így írható át: 
 $(4)$ $x+\frac{\mu h}{2 }=\frac{h}{2}\left(\sin 2\alpha-\mu \cos 2\alpha\right),$ 
 $(4)$ $y+\frac{h}{2}=\frac{h}{2}\left(\mu\sin 2\alpha+\cos 2\alpha\right).$ 
 Most már könnyen kiküszöbölhetjük az $\alpha$ paramétert, ha a (3) és (4) egyenleteket négyzetre emeljük és összeadjuk: 
 $\left( x+\frac{\mu h}{2 }\right)^2+
\left( y+\frac{h}{2}\right)^2=\frac{h^2}4(1+\mu^2).$ 

 2. ábra 

 Ez egy olyan kör egyenlete, amelynek sugara 
 $R=\frac{h}{2}\sqrt{1+\mu^2},$ 
 középpontjának koordinátái pedig 
 $x_0=-\frac{\mu h}{2 }; \qquad y_0=-\frac{ h}{2 }.$ 
 Mivel a fenti számolás csak a $90^\circ\ge \alpha>\arctan \mu$ hajlásszögű lejtőkre érvényes, a kérdéses pontok a 2. ábrán látható körnek csak a zölden jelölt részén helyezkednek el. Amennyiben $\alpha<-\arctan \mu$ (vagyis a $P$ ponttól induló lejtő bal felé lejt), a kérdéses pontok a zöld körívnek az $y$ tengelyre vett tükörképén helyezkednek el. Ha pedig 
 $\vert\alpha\vert\le\arctan \mu,$ 
 a test el se indul a lejtőn, folyamatosan (tehát $t$ idő elteltével is) a $P$ pontban marad. 

**II. megoldás**
. Egy $\alpha$ hajlásszögű, $\mu$ súrlódási együtthatóval jellemezhető lejtőre helyezett test akkor indul el (akkor tud gyorsulni), ha 
 $\tan\alpha > \mu,$ 
 vagyis ha 
 $\alpha >\arctan\mu\equiv\varepsilon.$ 
 Az $\varepsilon$ szöget – érthető okokból – súrlódási határszögnek nevezik. 
 Az $\alpha$ hajlásszögű lejtőn mozgó test gyorsulása 
 $a=g(\sin\alpha-\tan \varepsilon \cos\alpha)=
\frac{g}{\cos\varepsilon}(\sin\alpha\cos\varepsilon-\cos\alpha\sin\varepsilon)=\frac{g}{\cos\varepsilon}\sin(\alpha-\varepsilon).$ 
 Ez az összefüggés azt mutatja, hogy a súrlódásos lejtőn csúszó test mozgása éppen olyan, mintha $g'=\cfrac{g}{\cos\varepsilon}$ nehézségi gyorsulás mellett egy súrlódásmentes lejtőn mozogna a test, amelynek hajlásszöge $\varepsilon$-nal kisebb, mint a tényleges $\alpha$ hajlásszög. Ez utóbbi szögeltérést úgy is értelmezhetjük, hogy a $\boldsymbol g'$ nehézségi gyorsulás nem függőlegesen lefelé mutató, hanem a függőlegessel $\varepsilon$ szöget bezáró, a lejtő síkjának normálvektorához közelebb álló vektor ( 3. ábra ). 

 3. ábra 

 Már Galilei is felismerte, hogy a $P$ pontból különböző meredekségű, súrlódásmentes lejtőkön lecsúszó testek adott $t$ idő alatt egy olyan kör pontjaiba jutnak el, amely kör illeszkedik a $P$ pontra és a síkja függőleges. (Ma már – a Newton-törvényeket ismerve – azt is tudjuk, hogy a kör átmérője $h'=g't^2/2$.) 
 Alkalmazzuk ezt a felismerést a súrlódó lejtő esetére. 

 4. ábra 

 A test $t$ idő alatt 
 $s=\dfrac{g't^2}{2}\sin(\alpha-\varepsilon)=
\cfrac{h}{\cos\varepsilon}\sin(\alpha-\varepsilon)$ 
 utat tesz meg, és így a $\boldsymbol g'$ irányú, $h'$ átmérőjű Thalesz-kör zölden jelölt részének pontjaiba kerülhet ( 4. ábra ). A kör középpontja a $P$ pont alatt $h/2$ mélységben és a $P$-n átmenő függőleges egyenestől 
 $\frac{h'}{2}\sin \varepsilon=\frac {h}{2\cos\varepsilon}\sin\varepsilon=\frac{h}{2}\tan\varepsilon=\frac{h}{2}\mu$ 
 távolságra található, összhangban az I. megoldás eredményével.

![solution figure](../../raw_html/komal_figures/komal-P5480-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5480-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5480-sol-fig3.gif)

![solution figure](../../raw_html/komal_figures/komal-P5480-sol-fig4.gif)

![solution figure](../../raw_html/komal_figures/komal-P5480-sol-fig5.gif)
