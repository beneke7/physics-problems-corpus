---
id: komal-G888
source: komal
language: hu
translated: false
problem: komal-G888
figure_files: [komal-G888-sol-fig1.gif, komal-G888-sol-fig2.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 a) A hengerrel együtt mozgó rendszerben a ferde felületen lévő testek egyensúlyi állapotban nyugszanak, a rájuk ható erők eredője nulla: $m\boldsymbol{g}+\boldsymbol{N}+\boldsymbol{S}+\boldsymbol{F}_\mathrm{cf}=0$. Az 1. ábra mutatja az $mg$ nehézségi erőt, a ferde sík által kifejtett $N$ nyomóerőt, az $S=\pm\mu N$ súrlódási erőt és az $F_\mathrm{cf}=mR\omega^2$ centrifugális erőt. A súrlódási erőben megjelenő $\pm$ jel arra utal, hogy a számításban a két határesetet tekintjük; a + jelnek az felel meg, amikor a súrlódás még éppen meg tudja akadályozni a test lecsúszását, míg a $-$ jel esetében a felfelé történő megcsúszást képes még megakadályozni. 

 1. ábra 

 Tekintsük rendre a lejtővel párhuzamos és a lejtőre merőleges összetevők egyensúlyát: 
 $mg\cos\vartheta=\pm\mu N+mR\omega^2\sin\vartheta,$ 
 $N=mR\omega^2\cos\vartheta+mg\sin\vartheta.$ 
 A kérdéses szögsebességeket megkapjuk, ha a második egyenletből $N$-et beírjuk az elsőbe: 
 $\omega=\sqrt{\frac{g(\cos\vartheta\mp\mu\sin\vartheta)}{R(\sin\vartheta\pm\mu\cos\vartheta)}}.$ 
 Behelyettesítés után azt kapjuk, hogy $\omega_\mathrm{min}=1{,}42\,\mathrm{s}^{-1}$ (ekkor a számlálóban a $-$ előjelet, a nevezőben a $+$ előjelet használtuk), illetve $\omega_\mathrm{max}=2,62\,\mathrm{s}^{-1}$ (fordított előjelhasználattal). 
 b) Ha a henger áll, akkor $\omega=0$, ami azt jelenti, hogy az emberek akkor nem csúsznak le. ha olyan nagy a súrlódás, hogy $\mu>\frac{1}{\tg\vartheta}=1{,}73.$ (Vigyázat! A függőlegestől mérjük a $\vartheta$ szöget.) 
 c) A szögsebesség kifejezésében a nevező nem lehet nulla, sőt negatív sem lehet. Ha formálisan ez jön ki, vagyis $\mu\geq\tg\vartheta =0{,}577$, akkor a test annyira ráfeszül a ferde síkra, hogy akármilyen nagy $\omega$ esetén sem csúszik felfelé. 

**II. megoldás.**
 Egy test akkor nem csúszik meg, ha a nyomóerő és a tapadó súrlódási erő eredője egyensúlyt tud tartani a testre ható többi erő eredőjével. Mivel $S\leq\mu N$, a két erő eredője legfeljebb 
 $\varepsilon=\arctg\frac{S_\mathrm{max}}{N}=\arctg\mu$ 
 szöget zárhat be a felület normálisával (a felületre merőleges iránnyal). Esetünkben a testre a nyomóerőn és a súrlódási erőn kívül csak a nehézségi erő és a forgó rendszerben fellépő centrifugális erő hat. Mindkét erő arányos a test tömegével, így a két erő eredőjének irányát a függőlegesen lefelé mutató $g$ és a vízszintesen, sugárirányban kifelé mutató $a_\mathrm{cf}=\omega^2R$ gyorsulásvektorok $a$ eredőjének iránya határozza meg. 
 A feladatunk esetében ez azt jelenti, hogy a két gyorsulásvektor eredője a vízszintessel $\vartheta-\varepsilon\leq\alpha\leq\vartheta+\varepsilon$ szöget zárhat be ( 2. ábra ). 

 2. ábra 

 Az ábráról az is látszik, hogy $\ctg\alpha=\omega^2\tfrac{R}{g}$. Ezután az egyes kérdésekre a válaszok: 

 a) A súrlódási együttható $\mu=0{,}25$, ebből $\varepsilon=\arctg\mu\approx 14^\circ$, $\vartheta-\varepsilon\approx 16^\circ$, $\vartheta+\varepsilon\approx 44^\circ$. A szögsebesség-tartományt keressük: 
 $\omega=\sqrt{\frac{g}{R}\ctg\alpha},$ 
 ahol $\vartheta-\varepsilon\leq\alpha\leq\vartheta+\varepsilon$. A minimális szögsebességhez a maximális $\alpha$ szög tartozik (és fordítva), így: 
$$\begin{gather*}
\omega_\mathrm{min}=\sqrt{\frac{g}{R}\ctg(\vartheta+\varepsilon)}\approx 1{,}42\,\mathrm{s^{-1}},\\
\omega_\mathrm{max}=\sqrt{\frac{g}{R}\ctg(\vartheta-\varepsilon)}\approx 2{,}62\,\mathrm{s^{-1}}.
\end{gather*}$$

 b) $\omega=0$ esetében az eredő gyorsulás függőleges (csak a nehézségi erő hat), így teljesülnie kell a $\vartheta+\varepsilon\geq 90^\circ$ egyenlőtlenségnek. Ebből $\varepsilon\geq 60^\circ$ és így $\mu\geq\tg 60^\circ\approx 1{,}73$ szükséges. 

 c) Nagyon nagy szögsebesség esetében az eredő gyorsulás közel vízszintes, így a $\varepsilon\geq\vartheta$ egyenlőtlenségnek kell teljesülnie, amiből $\varepsilon\geq 30^\circ$ és így $\mu\geq\tg 30^\circ\approx 0{,}57$ szükséges.

![solution figure](../../raw_html/komal_figures/komal-G888-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-G888-sol-fig2.gif)
