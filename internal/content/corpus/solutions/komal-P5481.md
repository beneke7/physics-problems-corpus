---
id: komal-P5481
source: komal
language: hu
translated: false
problem: komal-P5481
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás**
. Jelöljük a jármű gyorsulását $a_0$-lal, a kerekének sugarát $R$-rel. Ha bizonyos $t$ idő alatt a kerék $n$-et fordul, az autó $2\pi nR$ utat tesz meg, fennáll tehát, hogy 
 $(1)$ $\frac{a_0}{2}t^2=2\pi nR. $ 
 A $P$ pont $n$ fordulat után ismét a talajtól legtávolabbi helyzetébe kerül, így az $\boldsymbol a$ gyorsulása a vízszintes irányú $a_1$ tangenciális és a függőleges irányú $a_2$ centripetális gyorsulás vektori eredője, nagysága 
 $(2)$ $a=\sqrt{a_1^2+a_2^2}. $ 
 A kerék szöggyorsulása $\beta=\frac{a_0}{R}$, a kerék tengelyének gyorsulása $a_0$, az eredő vízszintes irányú gyorsulás tehát 
 $(3)$ $a_1=a_0+R\beta=2a_0. $ 
 (Ezt az eredményt úgy is megkaphatjuk, hogy észrevesszük: a kerék a talajjal érintkező pontja körül is $\beta$ szöggyorsulással forog, a talajtól éppen $2R$ távol lévő $P$ pont tangenciális gyorsulása tehát $a_1=2R\cdot \beta=2a_0$.) 
 A függőleges irányú centripetális gyorsulás a kerék pillanatnyi szögsebességéből számolható ki: 
 $\omega= \beta\,t=\frac{a_0}{R}t,$ 
 tehát 
 $a_2=R\omega^2=\frac{a_0^2}{R}t^2.$ 
 Mivel (1) szerint $t^2=4\pi nR/a_0,$ kapjuk, hogy 
 $(4)$ $a_2=4\pi n a_0.$ 
 (3) és (4)-et (2)-be helyettesítve kapjuk, hogy 
 $a=2a_0\sqrt{1+(2\pi n)^2}.$ 
 A $P$ pont gyorsulása induláskor $2a_0$, így a kérdéses növekedési faktor: 
 $\frac{a}{2a_0}=\sqrt{1+(2\pi n)^2}.$ 
 (A megoldás során feltételeztük, hogy $n$ egész szám. )
