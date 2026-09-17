---
id: komal-P5741
source: komal
language: hu
translated: false
problem: komal-P5741
figure_files: [komal-P5741-sol-fig1.png, komal-P5741-sol-fig2.png, komal-P5741-sol-fig3.png]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 a) A grafikonról leolvasható $U$ és $I$ értékpárokból 
 $R=\frac{U}{I}\quad\textrm{és}\quad P=UI$ 
 értékek kiszámolhatók. Nagyon kis $U$ és $I$ esetében $R_0\approx 2\,\Omega$. Ekkor a teljesítmény még nagyon kicsi, így az izzószál hőmérséklete $T_0\approx 300\,\mathrm{K}$. Ez alapján az izzószál hőmérséklete nagyobb teljesítmények esetén a 
 $T=\frac{R}{R_0}T_0$ 
 összefüggéssel meghatározható. Az 1. táblázatba foglalt adatokat ábrázolva megkapjuk az 1. ábrán látható grafikont. 

 $U\,(\mathrm{V})$ 
 0 
 0,02 
 0,25 
 0,50 
 1,00 
 1,50 
 2,00 
 3,00 
 4,60 

 $I\,(\mathrm{A})$ 
 0 
 0,010 
 0,060 
 0,084 
 0,113 
 0,138 
 0,161 
 0,200 
 0,256 

 $R\,(\Omega)$ 

 2,00 
 4,00 
 5,95 
 8,85 
 10,9 
 12,4 
 15,0 
 18,0 

 $P\,(\mathrm{W})$ 
 0 
 0 
 0,014 
 0,042 
 0,113 
 0,207 
 0,322 
 0,600 
 1,180 

 $T\,(\mathrm{K})$ 
 300 
 300 
 600 
 895 
 1325 
 1630 
 1865 
 2250 
 2700 

 1. táblázat 

 1. ábra 

 b) Egyensúlyi állapotban a leadott hőteljesítmény megegyezik a felvett elektromos teljesítménnyel: 
 $P=c_1(T-T_0)+c_2(T^4-T_0^4),$ 
 ahol $c_1$ a hővetést jellemző konstans (amely függ az izzó anyagától és méreteitől), $c_2=\sigma A_\mathrm{eff}$, ahol $\sigma=5{,}67\cdot 10^{-8}\,\mathrm{\tfrac{W}{m^2K^4}}$ a Stefan–Boltzmann-állandó és $A_\mathrm{eff}$ az izzószál effektív sugárzó felülete, valamint $T_0=300\,\mathrm{K}$ a környezet hőmérséklete. 
 Az adatainkból $c_1$ és $c_2$ értékét kell meghatároznunk. Egészen kis hőmérsékleteken a második tag elhanyagolható az első mellett, így ha a grafikon legelejére egyenest illesztünk ( 2. ábra ), annak $m$ meredekségéből a $c_1$ állandó meghatározható: 
 $m\approx 20000\,\mathrm{\frac{K}{W}}\qquad\rightarrow\qquad c_1=\frac{1}{m}\approx 5\cdot 10^{-5}\,\mathrm{\frac{W}{K}}.$ 

 2. ábra 

 Ezután az elektromos teljesítményből levonhatjuk az első, $P_\mathrm{v}=c_1(T-T_0)$ tagot, és (nagyobb hőmérsékletekre) megkapjuk a $P_\mathrm{s}$ sugárzó teljesítményt ( 2. táblázat ). 

 $P\,(\mathrm{W})$ 
 0,113 
 0,207 
 0,322 
 0,600 
 1,180 

 $T\,(\mathrm{K})$ 
 1325 
 1630 
 1865 
 2250 
 2700 

 $P_\mathrm{v}\,(\mathrm{W})$ 
 0,051 
 0,067 
 0,078 
 0,97 
 0,120 

 $P_\mathrm{s}\,(\mathrm{W})$ 
 0,062 
 0,140 
 0,244 
 0,503 
 1,060 

 $T^4-T_0^4\,(10^{12}\,\mathrm{K^4})$ 
 3,1 
 7,1 
 12,0 
 25,6 
 52,8 

 2. táblázat 

 Ezt $T^4-T_0^4$ függvényében ábrázoljuk, és a pontokra origón átmenő egyenest illesztünk ( 3. ábra ). 

 3. ábra 

 Az illesztett egyenes meredeksége 
 $c_2\approx 2\cdot10^{-14}\,\mathrm{\frac{W}{K^4}},$ 
 amiből az izzószál effektív sugárzó felülete 
 $A_\mathrm{eff}=\frac{c_2}{\sigma}\approx 3{,}5\cdot 10^{-7}\,\mathrm{m^2}=0{,}35\,\mathrm{mm^2}.$

![solution figure](../../raw_html/komal_figures/komal-P5741-sol-fig1.png)

![solution figure](../../raw_html/komal_figures/komal-P5741-sol-fig2.png)

![solution figure](../../raw_html/komal_figures/komal-P5741-sol-fig3.png)
