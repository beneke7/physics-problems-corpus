---
id: komal-P5729
source: komal
language: hu
translated: false
problem: komal-P5729
figure_files: [komal-P5729-sol-fig1.gif, komal-P5729-sol-fig2.gif, komal-P5729-sol-fig3.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A szimmetria miatt elég az egyik test mozgását vizsgálnunk. Legyen az origó a két töltést összekötő szakasz felezőpontján, és mutasson az $x$ tengely az egyik töltés irányába, az $y$ tengely pedig legyen erre merőleges ( 1. ábra ). 

 1. ábra 

 A mozgásegyenletek: 
$$\begin{gather*}
ma_x=-\frac{kq^2}{(2x)^2}+qBv_y,\\
ma_y=-qBv_x.
\end{gather*}$$
 Vezessük be a $\beta=B/B_\mathrm{min}$, $T=t/\tau$, $X=x/d$, $Y=y/d$, $V_X=\tau v_x/d$, $V_Y=\tau v_y/d$, $A_X=\tau^2a_x/d$ és $A_Y=\tau^2a_y/d$ dimenziótlan mennyiségeket, ahol $\tau=\sqrt{md^3/(kq^2)}$ a rendszer adataitól függő idő dimenziójú állandó. Ezekkel a mozgásegyenletek: 
$$\begin{gather*}
A_X=-\frac{1}{4X^2}+4\beta V_Y,\tag{1}\\
A_Y=-4\beta V_X.\tag{2}
\end{gather*}$$
 A $T=0$ időpillanatban $X=\tfrac{1}{2}$, $Y=0$ és $V_X=V_Y=0$. A feladatban hivatkozott cikk módszerét alkalmazva: 
$$\begin{gather*}
V_X(T+\Delta T)=V_X(T)+A_X(T)\cdot\Delta T,\\
V_Y(T+\Delta T)=V_Y(T)+A_Y(T)\cdot\Delta T,\\
X(T+\Delta T)=X(T)+V_X(T)\cdot\Delta T,\\
Y(T+\Delta T)=Y(T)+V_Y(T)\cdot\Delta T,
\end{gather*}$$
 ahol $\Delta T$ az elvárt pontosságnak megfelelően kicsiny időtartam, $A_X(T)$ és $A_Y(T)$ pedig az (1) és (2) összefüggések alapján számítható. Ezt a rekurzív képletet bármilyen program (vagy akár Excel táblázatkezelő) segítségével a kezdeti állapotból kiindulva alkalmazhatjuk, majd az így nyert adatokból a feladatban kért grafikonokat elkészíthetjük. 

 a) A $B<B_\mathrm{min}$ esetben figyelnünk kell a rekurzió leállítására: $X\approx 0$ esetén a két töltés összeütközik, ezután a képletek értelmetlen eredményeket generálnak. A $B\approx B_\mathrm{min}$ esetben az eredeti versenyfeladatban kiszámított minimális távolság ($X=\tfrac{1}{4}$) közelében könnyen instabillá válik a – véges $\Delta T$ miatt szükségszerűen közelítő – számítás, így itt érdemes a $B\lessapprox B_\mathrm{min}$ és $B\gtrapprox B_\mathrm{min}$ értékekkel is számolni. A 2. ábrán a töltések pályája látható különböző $\beta=B/B_\mathrm{min}$ értékek esetén. (A feladatban kért görbék vastagabb vonallal.) 

 2. ábra 

 b-c) Ugyanazt a rekurziót futtatjuk különböző $\beta$ paraméterrel, de most nem az $X$-$Y$ párokat rögzítjük, hanem azt figyeljük, mikor éri el $X$ valamelyik határfeltételt ($B<B_\mathrm{min}$ esetében az $X\approx 0$-t, $B>B_\mathrm{min}$ esetében pedig az $X\approx\tfrac{1}{2}$-et a kezdőállapot utáni első alkalommal). A $T_\textrm{ü}$ ütközési időket, illetve a $T_\mathrm{p}$ periódusidőket ($\tau$ egységekben) egy közös grafikonban a 3. ábra mutatja $\beta$ függvényében. Az 1. ábrán látható módon $\beta=1$ esetében a töltések aszimptotikusan tartanak az $X=\pm\tfrac{1}{4}$ értékhez, így itt se ütközés, se periodikus mozgás nem alakul ki. $\beta\approx 1$ esetében $T_\textrm{ü}\to\infty$ és $T_\mathrm{p}\to\infty$. 

 3. ábra

![solution figure](../../raw_html/komal_figures/komal-P5729-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5729-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5729-sol-fig3.gif)
