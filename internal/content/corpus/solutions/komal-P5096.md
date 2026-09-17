---
id: komal-P5096
source: komal
language: hu
translated: false
problem: komal-P5096
figure_files: [komal-P5096-sol-fig1.gif, komal-P5096-sol-fig2.gif, komal-P5096-sol-fig3.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Jelöljük az üveggömb sugarát $R$-rel, a törésmutatóját $n$-nel, a körlap sugarát $r$-rel, a körlap távolságát a gömb középpontjától pedig $t$-vel. A kép akkor lesz éles, ha csak az optikai tengelyhez közeli fénysugarakra korlátozódunk; ezt a gömbre eső többi fénysugár letakarásával, vagyis egy fényrekesz alkalmazásával lehet elérni ( 1. ábra ). A fénysugár útját jellemző kicsiny szögekre érvényesnek tekintjük a $\sin\alpha\approx \tan\alpha\approx \alpha$ és a $\cos\alpha\approx 1$ közelítést. 
 Első lépésben a létrejövő kép helyét fogjuk meghatározni, ehhez elegendó, ha a tárgy középpontjából kiinduló (és az optikai tengelyhez közel haladó) fénysugarak útját követjük. Képalkotásról akkor beszélhetünk, ha a tárgy középpontjából $\alpha$ szögben kiinduló fénysugár az optikai tengelyt olyan (a gömb középpontjától mért) $k$ távolságban metszi, amely távolság nem függ $\alpha$-tól. 

 1. ábra 

 Az 1. ábra jelöléseit követve a következő geometriai összefüggéseket írhatjuk fel: 
 $x= (t-R)\alpha=R\varphi,$ 
 $y=(k-R)\beta=R\psi,$ 
 $\gamma=\frac{y-x}{2R},$ 
 továbbá érvényes a törési törvény mindkét határfelületnél (a kis szögekre alkalmazható közelítéssel): 
 $\alpha+\varphi=n(\varphi+\gamma), \qquad \psi+\beta=n(\psi-\gamma).$ 
 A fenti egyenletekből ($t$, $R$ és $n$ ismeretében valamekkora $\alpha\ll 1$ szöget feltételezve) $x$, $y$, $\beta$, $\gamma$, $\varphi$, $\psi$ és $k$ kiszámítható: 
 $x=(t-R)\, \alpha,\qquad \varphi=\frac{t-R}R\,\alpha, \qquad \gamma=\left( 1-\frac{(n-1)t}{nR}\right)\,\alpha,$ 
 $y=\left(R-t+\frac{2}{n}t\right)\,\alpha,\qquad \beta=\left(\frac{2(n-1)t}{Rn}-1 \right)\,\alpha,\qquad \psi=\left(1-\frac{t}{R}+\frac{2t}{nR}\right)\,\alpha,$ 
 és végül 
 $k=\frac{nRt}{2(n-1)t-nR}=15~\rm cm.$ 
 Az utolsó összefüggést a jól ismert 
 $\frac{1}{t}+\frac{1}{k}=\frac1{f}$ 
 alakban is felírhatjuk, ahol $f=\frac{nR}{ 2(n-1) }=6~\rm cm $. Látható, hogy $k$ (az alkalmazott közelítések keretei között) nem függ az $\alpha$ szögtól, tehát a képalkotás feltétele valóban teljesül. 
 A fényes körlap képe tehát az üveggömb középpontjától $k=15$ cm távolságban jön létre, a kép valódi, és a nagyítás $N=k/t=1{,}5$-szeres, tehát a körlap alakú kép sugara 3 mm lesz. Ez utóbbi arányt jól mutatják a körlap széléről kiinduló és a gömb középpontján törésmentesen áthaladó fénysugár által kijelölt hasonló háromszögek: $r^*/r=k/t=N$ ( 2. ábra ). 

 2. ábra 

**II. megoldás.**
 A feladatot a Fermat-elv segítségével is megoldhatjuk. Ezen ,,minimumelv'' szerint (lásd pl. Solt György: Variációs elvek a klasszikus és a kvantumfizikában című cikket a KöMaL 2018. évi decemberi számában) a fény két rögzített pont (a $T$ tárgypont és a $K$ képpont) között olyan útvonalon halad, amelyre a fényterjedés ideje a lehető legkisebb, vagyis minimális . (Pontosabban fogalmazva: A fény terjedésének ideje a valódi pályán és az ahhoz igen közeli többi pályán ,,első közelítésben'' ugyanakkora.) Ha a fény több (,,végtelen sok'') útvonalon haladva is eljuthat $T$-ből $K$-ba (a képalkotásnak ez a feltétele), akkor a sok (ténylegesen megvalósuló) útvonal mindegyikén (jó közelítéssel) ugyanakkora a terjedés ideje, ezek az időtartamok egymással is megegyeznek. 

 3. ábra 

 Tekintsük a 3. ábrán látható fénysugarat, amely az üveggömb középpontjától $t$ távol lévő $T$ pontból kiindulva, három egyenes szakasz mentén haladva jut el a középponttól $k$ távolságban lévő $K$ pontba. ($T$ és $K$ rajta fekszik a gömb középpontján átmenő egyenesen, az optikai tengelyen.) Csak olyan fénysugarakat vizsgálunk, amelyek az optikai tengely közelében (és így egymáshoz is közel) haladnak, vagyis amelyekre az ábrán látható $x$ és $y$ távolságok a gömb $R$ sugaránál sokkal kisebbek. (A számolás során $x/R$ és $y/R$ másodiknál magasabb hatványait elhanyagolhatóan kicsinek fogjuk tekinteni.) 
 Fejezzük ki a fény terjedésének idejét (pontosabban a vele arányos ,,optikai úthosszat'', vagyis a törésmutatóval súlyozott úthosszak összegét) a geometriai adatokkal és az üveg törésmutatójával! (Olyan fénysugarakat vizsgálunk, amelyeknél $T,P,Q$ és $K$ egy síkban fekszik.) 
 $s(x,y)=TP+n\cdot PQ+QK=$ 
 $=\sqrt{(t-R+\delta_x)^2+x^2}+n \sqrt{(2R-\delta_x-\delta_y)^2+(y-x)^2}+\sqrt{(k-R+\delta_y)^2+y^2},$ 
 ahol $\delta_x$ és $\delta_y$ a $P$ és $Q$ pontoknak az optikai tengelyre eső vetülete és a körvonal közötti (kicsiny) távolságokat jelöli. A Pitagorasz-tétel $(R-\delta_x)^2+x^2=R^2$ és $(R-\delta_y)^2+y^2=R^2$ alakját felhasználva kapjuk, hogy 
 $\delta_x\approx \frac{x^2}{2R} \qquad \text{és} \qquad \delta_y\approx \frac{y^2}{2R},$ 
 ahol a közelítés $\delta_x^2$ és $\delta_y^2$ elhanyagolása esetén érvényes. (Ezek a mennyiségek $x$ és $y$ másodiknál magasabb hatványainak felelnek meg.) 
 A gyök alatti kifejezéseket, amelyek mindegyike $\sqrt{a^2+\varepsilon^2}$ alakú ($\varepsilon^2$ másodrendűen kicsi), az alábbi módon alakíthatjuk át: 
 $\sqrt{a^2+\varepsilon^2}=
\sqrt{\left(a+\frac{\varepsilon^2}{2a}\right)^2-\frac{\varepsilon^4}{4a^2}}\approx \sqrt{\left(a+\frac{\varepsilon^2}{2a}\right)^2} =a+\frac{\varepsilon^2}{2a}.$ 
 (Az $\varepsilon^4$-nel arányos kifejezés negyedrendűen kicsi, elhanyagolása jogos.) Ennek megfelelően az optikai úthossz: 
 $s(x,y)\approx
 (t-R)+2nR+(k-r) +\frac{1}{2R}\left(\frac{t}{ t-R } x^2+ \frac{k}{ k-R } y^2-\frac{n}{2}(x+y)^2\right)\equiv \text{állandó}+\left[A x^2+B y^2+2C xy\right], $ 
 ahol 
 $A=\frac{t}{t-R}-\frac{n}{2}; \qquad B=\frac{k}{k-R}-\frac{n}{2}; \qquad C =-\frac{n}{2}.$ 
 Az optikai úthossz akkor lesz végtelen sok különböző $x$ és $y$ mellett ugyanakkora, mint az optikai tengely mentén haladó sugár esetében (amikor $x=y=0$), ha a szögletes zárójelben álló kifejezés végtelen sok esetben nulla értéket vesz fel: 
 $A x^2+B y^2+2C xy=A\left(x-\frac{C}{A}y\right)^2+\frac{AB -C^2}{A}y^2=0.$ 
 Ez akkor állhat fenn, ha $x/y=-C/A$, ez végtelen sok esetben teljesülhet, továbbá 
 $AB-C^2=\left(\frac{t}{t-R}-\frac{n}{2}\right)\left(\frac{k}{k-R}-\frac{n}{2}\right)-\frac{n^2}{4}=0.$ 
 Eszerint 
 $\frac{tk}{(t-R)(k-R)}=\frac{n}{2}\left(\frac{k}{k-R}+\frac{t}{t-R}\right),$ 
 $tk=\frac{n}{2}\left(kt-kR+tk-tR\right),$ 
 $(n-1)tk=\frac{nR}{2}(t+k),$ 
 $\frac{1}{t} +\frac{1}{k}=\frac{2(n-1)}{nR}=\frac{1}{f},$ 
 ahol $f$ az I. megoldásban is szereplő ,,fókusztávolság''. (A feladatban megadott adatokkal $k=15~\rm cm$. A kép méretét az I. megoldásban leírtak szerint lehet meghatározni. 

**III. megoldás.**
 Az üveggömbnek az optikai tengelyhez közeli része egy $d=2R$ vastagsággal és $R_1=R_2=R$ görbületi sugarakkal jellenzett vastag lencsének tekinthető. Az ilyen lencse képalkotását az 
 $\frac{1}{t}+\frac{1}{k}=\frac{1}{f}=(n-1)\left(\frac{1}{R_1}+\frac{1}{R_2}-\frac{n-1}{n}\, \frac{d}{R_1R_2}\right)$ 
 általánosított lencsetörvény írja le. (A vastag lencsékről lásd Vermes Miklós cikkét a KöMaL 1967. évi 11. számában.) Esetünkben a fősíkok a gömb középpontján haladnak át, így $t=10~$cm, továbbá 
 $\frac{1}{f}=(n-1)\left(\frac{2}{R}-\frac{n-1}{n}\frac{2R}{R^2}\right)=\frac{n-1}{n}\,\frac{2}{R}=\frac{1{,}5-1}{1{,}5}\,\frac{2}{4~\rm cm}=\frac{1}{6~\rm cm}.$ 
 Így tehát 
 $\frac{1}{k}=\frac{1}{f}-\frac{1}{t}=\frac{1}{6~\rm cm}-\frac{1}{10~\rm cm}=\frac{1}{15~\rm cm},\qquad k=15~\rm cm.$ 

 Megjegyzés. Ha a gömb széléből két párhuzamos síkkal gondolatban levágunk két vékony szeletet, és ezeket $f=8$ cm fókusztávolságú síkdomború, vékony lencseként kezeljük, de a közöttük lévő planparalel üveglemez szerepéről megfeledkezünk, hibás eredményt kapunk. 
 Ugyancsak hibás lesz az eredmény, ha az üveggömböt kétszeresen domború, vékony lencsének tekintjük.

![solution figure](../../raw_html/komal_figures/komal-P5096-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5096-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5096-sol-fig3.gif)
