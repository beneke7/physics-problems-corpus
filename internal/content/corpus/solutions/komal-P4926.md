---
id: komal-P4926
source: komal
language: hu
translated: false
problem: komal-P4926
figure_files: [komal-P4926-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az elektron olyan töltésmegosztást hoz létre a fémlemezekben, hogy mindegyik lemez ugyanakkora (nullának választható) potenciálú legyen. A kialakuló elektromos erőtér a lemezek által határolt (az ábrán látható, a fémlemezek síkjaihoz illesztett koordináta-rendszerben $x>0, y>0, z>0$ módon megadott) térnyolcadban olyan lesz, mintha a másik 7 térnyolcadban az elektron pillanatnyi helyének ,,tükörkép-pontjaiban'' egy-egy – váltakozó előjelű – tükörtöltés lenne. Ezek a tükörtöltések az elektronnal együtt mozogva folyamatosan változó nagyságú erőt fejtenének ki az elektronra, ez határozza meg annak mozgását. 

 Megjegyzés. Ha az elektron valamelyik síktól $r$ távol van, akkor a tükörtöltés által kifejtett vonzóerő 
 $F(r)=k\frac{e^2}{(2r)^2}$ 
 nagyságú ($e$ az elemi töltés). Ha például $r<60$ cm, akkor $F$ legalább 30-szor nagyobb, mint az elektronra ható $mg$ gravitációs erő. Emiatt a feladat további részében a gravitációs erőt figyelmen kívül hagyjuk. 

 Az elektronra ható elektrosztatikus erők eredője a szimmetria miatt mindig a sarok felé mutat, így elegendő a 7 tükörtöltés által kifejtett erőnek ilyen irányú vetületét kiszámítani. Ha az elektron $r$ távol van a sarokponttól, az eredő erő nagysága: 
 $F(r)=k\frac{e^2}{r^2}\left(-\frac{3\sqrt{3}}{4}+\frac{3\sqrt{3}}{4\sqrt{2}}-\frac{1}{4} \right)\approx -0{,}63k\frac{e^2}{r^2}.
$ 
 Ugyanekkora erőt fejtene ki az elektronra egy $Q=+0{,}63\,e$ töltésű, az origóban rögzített pontszerű test is. 

 Megjegyzés. A fenti erő képletét úgy is megkaphatjuk, hogy az erővektorok összegzése helyett kiszámítjuk a valódi töltés és a tükörtöltések közötti Coulomb-energiát, és ennek a térnyolcadra eső (1/8)-át egyenlővé tesszük a $Q$ nagyságú ponttöltés $-kQe/r$ Coulomb-energiájával. 

 A $Q$ töltés erőterében az $m$ tömegű elektron egyre növekvő gyorsulással zuhan a sarokpont felé. A mozgásegyenlet ugyanolyan alakú, mint a Nap körül keringő bolygók vagy egy (a Napot nagyon megközelítő, elnyújtott ellipszispályán mozgó) üstökös mozgásegyenlete, emiatt itt is alkalmazhatók Kepler törvényei. Az elektron pályája egy olyan ,,elfajult'' ellipszisként is felfogható, amelynek nagytengelye $R$, kistengelye pedig közel nulla. Az origóba zuhanás keresett $T$ ideje ezen ellipszispályához tartozó $T_0$ keringési idő fele. 
 Másrészt (Kepler III. törvényéből) tudjuk, hogy egy $R/2$ sugarú körpályán (vagyis $R$ nagytengelyű ellipszisen) a $Q$ ponttöltés körül keringő elektron periódusideje ugyanekkora: 
 $m\frac{R}{2}\left( \frac{2\pi}{T_0} \right)^2=k\frac{Qe}{\left(\frac{R}{2} \right)^2},$ 
 ahonnan a keresett esési idő: 
 $T=\frac{1}{2}T_0=\sqrt{\frac{mR^3\pi^2}{8\cdot 0{,}63\,k e^2}}\approx 4\cdot10^{-2}~\rm s.$

![solution figure](../../raw_html/komal_figures/komal-P4926-sol-fig1.gif)
