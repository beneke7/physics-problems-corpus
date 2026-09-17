---
id: komal-P5737
source: komal
language: hu
translated: false
problem: komal-P5737
figure_files: [komal-P5737-sol-fig1.png, komal-P5737-sol-fig2.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Vizsgáljuk először egy kezdetben álló, a fémlemeztől $x$ távolságban lévő ponttöltés esetét. (Az indulás pillanatában $x=d$.) A töltés elektromos tere megosztást hoz létre a fémlapban, amelynek töltései úgy mozdulnak el, hogy az eredő elektromos térerősség közvetlenül a fém felülete fölött merőleges legyen a fémlemez síkjára. (A fémlemez belsejében és a lemez alatt az eredő elektromos térerősség nulla .) 
 A fémlemez fölött az elektromos mező éppen olyan, mintha a $Q$ nagyságú ponttöltésen kívül a lemez síkjára tükrözött helyzetben egy $-Q$ töltésű, másik pontszerű töltés is jelen lenne. Ezt a fiktív (a valóságban nem létező) töltést tükörtöltésnek nevezik. 
 Ha a valódi töltés a lemeztől $x$ távolságra van felfelé, akkor a rá ható elektrosztatikus erő (a töltés és a tükörtöltés közötti Coulomb-erő) 
 $(1)$ $F_x(x)=-\frac{1}{4\pi\varepsilon_0}\,\frac{Q^2}{(2x)^2}=-\frac{Q^2}{16\pi\varepsilon_0}\,\frac{1}{x^2}.$ 
 Ez az erő $x$ tengely irányú; a negatív előjel azt fejezi ki, hogy lefelé, a fémlemez irányába mutat. 

 1. ábra 

 Az (1) képletben szereplő vonzóerő hatására a pontszerű, töltött test, ha a fémlemeztől $d$ távolról kezdősebesség nélkül elengedjük, a fémlemez felé gyorsul, és valamekkora $T$ idő alatt becsapódik a lemezbe. (A mozgás nem egyenletesen gyorsuló, ezért annak ismert út-idő képletét nem alkalmazhatjuk.) Ha valamilyen más módszerrel meghatározzuk $T$ értékét, abból már a $v_0$ kezdősebességgel meglökött test $\ell$ vízszintes elmozdulását is megkapjuk ($\ell=v_0T)$, hiszen a tükörtöltés nem fejt ki vízszintes irányú erőt, ezért a lemezzel párhuzamos irányú mozgás egyenletes . 
 A becsapódásig eltelő idő kiszámítására kétféle módszert is megadunk. 
 I. módszer. Az (1) erőtörvény ugyanolyan alakú, mint a Newton-féle gravitációs erő, mindkettő a távolság négyzetével fordítottan arányos nagyságú vonzóerő. Ezen hasonlóság miatt az elektrosztatikus erőtérben mozgó pontszerű testre is érvényesek Kepler törvényei. Ezekre hivatkozva állíthatjuk, hogy a kis test pályája ellipszis, melynek egyik fókuszpontja az erőtér $C$ centruma, továbbá azt is tudjuk, hogy a különböző excentricitású, de azonos nagytengelyű ellipszisek mentén a mozgás periódusideje ugyanakkora. 
 Két ,,elfajult'' ellipszist vizsgálunk. Az egyik egy $d$ átmérőjű kör, ami nulla excentricitású ellipszisnek is tekinthető. (Az ellipszis excentricitása $e=\sqrt{1-(b/a)^2}$, ahol $a$ a fél nagytengely, $b$ pedig a fél kistengely hossza.) Ezen kör mentén egyenletesen mozgó test mozgásegyenlete: 
 $\frac{1}{16\pi\varepsilon_0}\,\frac{Q^2}{(d/2)^2}=m\,\frac{d}{2}\left(\frac{2\pi}{T_0}\right)^2,$ 
 ahonnan kifejezhetjük a körmozgás periódusidejét: 
 $T_0=2\pi\sqrt{{\frac{2\pi\varepsilon_0md^3}{Q^2}}}.$ 
 Kepler III. törvénye szerint ugyanekkora a keringési idő egy $d$ nagytengelyű és nagyon kicsi (határesetben nulla) kistengelyű ellipszispályán történő mozgásnál is. A teljesen elfajult, $e=1$ excentricitású ,,ellipszis'' $d$ hosszúságú egyenes szakasz lesz, amely mentén történő mozgás kérdéses $T$ ideje az indulástól a becsapódásig a teljes $T_0$ periódusidő fele. 
 $(2)$ $T=\frac{T_0}{2}=\frac{\pi d}{\vert Q\vert}\sqrt{2\pi\varepsilon_0md}.$ 

 2. ábra 

 II. módszer. Az elektrosztatikus és a gravitációs mező analógiájának felismerése és felhasználása nélkül, ,,nyers erővel'' is meghatározhatjuk a becsapódás $T$ idejét, ha az energiamegmaradás törvényéből kiszámítjuk a töltött test pillanatnyi sebességét a hely függvényében, majd annak reciprokát integráljuk a megtett út szerint. 
 Az (1) összefüggéssel megadott erőtörvényhez tartozó potenciális energia: 
 $(3)$ $U(x)=-\frac{Q^2}{16\pi\varepsilon_0}\,\frac{1}{x}.$ 
 Az elektrosztatikus energia és a mozgási energia összege a mozgás során állandó marad. Az $x=d$ távolságból kezdősebesség nélkül induló test $v(x)$ sebességére a lemeztől $x$ távolságban fennáll, hogy 
 $(4)$ $U(d)+0=U(x)+\frac{1}{2}mv^2(x).$ 
 Innen kiszámítható a kicsiny test sebessége: 
 $(5)$ $v(x)=-\sqrt{\frac{Q^2}{8\pi\varepsilon_0m}\left(\frac{1}{x}-\frac{1}{d}\right)}.$ 

 Megjegyzés. Figyelemre méltó, hogy a (3) összefüggésben szereplő potenciális energia nem egyezik meg a valódi töltés és a tőle $2x$ távol lévő tükörtöltés közötti, naiv módon számolt $-\frac{Q^2}{4\pi\varepsilon_0}\,\frac{1}{2x}$ Coulomb-energiával, annak éppen a fele. 
 A kettes faktor eltérésnek a következő a magyarázata. Két valódi töltés kölcsönhatási energiája (egy előjeltől eltekintve) azzal a $W$ munkával egyezik meg, amennyit a töltések egymástól nagyon távolságra (,,végtelen messzire'') történő elmozdítása során végzünk. Ha a két töltést a felezőpontjukra szimmetrikusan húzzuk szét, akkor mindegyikük mozgatásakor $W/2$ munkát végzünk. Ha viszont a nagy méretű fémlemez közeléből távolítunk el nagyon messzire egy valódi töltést, a fiktív tükörtöltés is eltávolodik a lemeztől, anélkül, hogy azon munkát végeznénk. A teljes munkavégzés ilyenkor $W/2$, és így minden $x$ értékhez tartozó potenciális energia is csak a fele a valódi töltésekre vonatkozó Coulomb-energiának. 

 Osszuk fel – gondolatban – a töltött test pályáját (indulástól a becsapódásig) sok kicsi, $\Delta x$ hosszúságú darabra. Az $i$-edik darabon ($i=1,2,\ldots,n$) a sebességet közelítőleg állandónak, $v(x_i)$ nagyságúnak tekintjük, akkor a mozgás teljes időtartama 
 $T\approx\sum_{i=1}^n\frac{\Delta t_i}{\Delta x}\,\Delta x\approx\sum_{i=1}^n\frac{1}{v(x_i)}\,\Delta x\approx\int _d^0\frac{1}{v(x)}\mathrm{d}x=\sqrt{\frac{8\pi\varepsilon_0m}{Q^2}}\int_0^d\sqrt{\frac{1}{\frac{1}{x}-\frac{1}{d}}}\,\mathrm{d}x.$ 
 Érdemes a fémlemeztől mért távolságot $x=\xi d$ alakban felírni, ahol $0<\xi\le 1$ egy dimenziótlan változó. Ezzel a kérdéses idő 
 $(6)$ $T\approx\sqrt{\frac{8\pi\varepsilon_0md^3}{Q^2}}\int_0^1\sqrt{\frac{1}{\frac{1}{\xi}-1}}\,\mathrm{d}\xi.$ 
 (Belátható, hogy a fenti közelítés annál jobb, minél kisebb részekre osztjuk fel a töltött test pályáját.) 
 A (6) összefüggésben szereplő integrál numerikus közelítésben 1,57 nagyságúnak adódik, de pontosan is kiszámítható az értéke, ami $\pi/2$. Így a keresett időtartam (2)-vel egyezően 
 $T=\pi\sqrt{\frac{2\pi\varepsilon_0md^3}{Q^2}}.$ 

 Eközben a test vízszintes irányban 
 $\ell=v_0T=\pi v_0\sqrt{\frac{2\pi\varepsilon_0md^3}{Q^2}}$ 
 távolságra mozdul el, az elengedés helyétől ekkora távolságra fog becsapódni a fémlemezbe.

![solution figure](../../raw_html/komal_figures/komal-P5737-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-P5737-sol-fig2.png)
