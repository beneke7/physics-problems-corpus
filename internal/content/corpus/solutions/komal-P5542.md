---
id: komal-P5542
source: komal
language: hu
translated: false
problem: komal-P5542
figure_files: [komal-P5542-sol-fig1.gif, komal-P5542-sol-fig2.gif, komal-P5542-sol-fig3.gif, komal-P5542-sol-fig4.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 $a)$ Ha a párhuzamos $LC$-körre jutó feszültség csúcsértéke $U_1$, akkor a tekercsen 
 $I_1=\frac{U_1}{L\omega}$ 
 erősségű, a kapocsfeszültséghez képest $90^\circ$-kal késő áram folyik. Ugyanakkor a kondenzátoron 
 $I_2=U_1\,\omega C$ 
 erősségű, a kapocsfeszültséghez képest $90^\circ$-kal siető áram folyik. A két áram előjeles összegének nagysága (mivel azok egymáshoz képest $90^\circ+90^\circ=180^\circ$ fázistolásban vannak): 
 $I=\vert I_1-I_2\vert =U_1\left|\frac{1}{L\omega}-\omega C\right|.$ 
 Ez a két (párhuzamosan kapcsolt) áramköri elem tehát az adott körfrekvencián $L\omega>\frac{1}{\omega C} $ esetén helyettesíthető egyetlen tekerccsel, ellenkező esetben pedig egyetlen kondenzátorral. Bármelyik eset teljesül, az egész áramkör impedanciája 
 $Z=\sqrt{R^2+\frac{1}{\left(1/(L\omega)-\omega C\right)^2}},$ 
 vagyis az ellenálláson átfolyó áram amplitúdója: 
 $I_0=U_0\frac{\vert1-LC\omega^2\vert}{\sqrt{R^2(1-LC\omega^2)^2+\omega^2L^2}}$ 
 $b)$ Az ellenálláson $L\omega=\frac1{\omega C}$, vagyis rezonancia esetén nem folyik áram. 

**II. megoldás**
 A feladat szemléletesen megoldható forgóvektorok ( fazorok , amplitúdót és fázist kifejező vektorok) segítségével is. 
 Vegyük fel először a párhuzamosan kapcsolt tekercs és kondenzátor $U_{\mathrm{L}}=U_{\mathrm{C}}$ feszültségének megfelelő vektort (vízszintes kék vektor az 1. ábrán ). 

 1. ábra 

 Ezután a tekercs és a kondenzátor áramainak 
 $I_{\mathrm{L}}=\frac{U_{\mathrm{L}}}{X_{\mathrm{L}}}=\frac{U_{\mathrm{L}}}{L\omega}\,,$ 
 illetve 
 $I_{\mathrm{C}}=\frac{U_{\mathrm{C}}}{X_{\mathrm{C}}}=U_{\mathrm{L}}\omega C$ 
 nagyságú vektorát, amelyek a közös feszültséghez képest $90^\circ$-kal késni, illetve sietni fognak. 
 A főágban és az ellenálláson ennek a két vektornak az eredője fog folyni ($I_0$, függőleges piros vektor az ábrán , nagysága a két áram nagyságának különbsége), az ellenállás $U_{\mathrm{R}}=RI_{\mathrm{R}}=RI_0$ feszültsége (zöld vektor) pedig ezzel azonos fázisú, azonos irányba mutat. 
 Az $U_0$ kapocsfeszültséget az $U_{\mathrm{L}}=U_{\mathrm{C}}$ és az $U_{\mathrm{R}}$ vektorok eredője adja meg. 

 Az (előző megoldásban is felírt) számítások most már az ábra alapján egyszerűen elvégezhetők: 
 $I_0=\left|\frac{U_{\mathrm{L}}}{L\omega}-U_{\mathrm{L}}\omega C\right|=U_{\mathrm{L}}\left|\frac{1}{L\omega}-\omega C\right|\quad\rightarrow\quad U_{\mathrm{L}}=\frac{I_0}{\left|\frac{1}{L\omega}-\omega C\right|}\,,$ 
 $U_0=\sqrt{U_{\mathrm{R}}^2+U_{\mathrm{L}}^2}=I_0\sqrt{R^2+\frac{1}{\left(\frac{1}{L\omega}-\omega C\right)^2}}=I_0\frac{\sqrt{R^2\left(1-LC\omega^2\right)^2+\omega^2L^2}}{\left|1-LC\omega^2\right|}\quad\rightarrow$ 
 $\rightarrow\quad I_0=U_0\frac{\left|1-LC\omega^2\right|}{\sqrt{R^2\left(1-LC\omega^2\right)^2+\omega^2L^2}}\,,$ 
 az előző megoldással egyezően. 

 Az 1. ábrán $I_{\mathrm{L}}>I_{\mathrm{C}}$, így a főágbeli $I_0$ áram 
 $\varphi=\arccos\frac{U_{\mathrm{R}}}{U_0}=\arccos\frac{R\left|1-LC\omega^2\right|}{\sqrt{R^2\left(1-LC\omega^2\right)^2+\omega^2L^2}}$ 
 szöggel késni fog az $U_0$ kapocsfeszültséghez képest. 
 Ha a körfrekvenciát növeljük, akkor a tekercs árama csökkenni, a kondenzátor árama nőni fog, így a különbségük ($I_0$) csökkenni fog, a $\varphi$ szög pedig egyre nagyobb lesz. 
 $\omega=\sqrt{\frac{1}{LC}}=\omega_0$ 
 körfrekvencia közelében a fázis (az $I_0$ áram fáziskésése az $U_0$ kapocsfeszültséghez képest) $90^\circ$-hoz tart. 
 $\omega=\omega_0$ körfrekvenciánál az $I_0$ áram nullává válik, ez a válasz a $b)$ kérdésre. 
 Ha a körfrekvenciát kicsit tovább növeljük, akkor már $I_{\mathrm{L}}<I_{\mathrm{C}}$, a fázis hirtelen előjelet vált, az $I_0$ áram sietni fog az $U_0$ kapocsfeszültséghez képest ( 2. ábra ). A körfrekvencia további növelésével az áram nagysága nőni, a fázis abszolút értéke csökkenni fog. 

 2. ábra 

 A 3. ábrán az $I_0$ áram nagyságát ábrázoltuk ($\tfrac{U_0}{R}$ egységekben), az $\omega$ körfrekvencia függvényében ($\omega_0$ egységekben, a vízszintes tengelyen logaritmikus a skála). A két görbét más-más 
 $r=R\sqrt{\frac{C}{L}}$ 
 dimenziótlan paraméter jellemzi. (Érdekes módon ebben a rezgőkörben akkor van éles rezonancia, ha $R$ nagy.) A grafikonon az $r=0{,}1$ (kék) és az $r=1$ (piros) esetet ábrázoltuk. 

 3. ábra 

 Végül a 4. ábra az áramkör fázisát mutatja, szintén az $\omega$ körfrekvencia függvényében, két különböző $r$ érték esetében. 

 4. ábra 

**III. megoldás.**
 $a)$ A feladat a komplex impedanciák módszerével is kezelhető. A kör eredő komplex impedanciája a soros és párhuzamos kapcsolások összefüggéseit felhasználva: 
 $Z=R+\frac{1}{(i\omega L)^{-1}+i\omega C}=R+\frac{i\omega L}{1-LC\omega^2}\,.$ 
 A főágban folyó (komplex) áramerősség innen: 
 $I=\frac{U_0}{Z}=\frac{U_0(1-LC\omega^2)}{R(1-LC\omega^2)+i\omega L}\,.$ 
 Az áram amplitúdója a fenti komplex kifejezés abszolút értékeként számítható: 
 $I_0=\frac{U_0\vert 1-LC\omega^2\vert}{\sqrt{R^2(1-LC\omega^2)^2+\omega^2L^2}}\,.$ 
 $b)$ Az előző egyenletet vizsgálva észrevehető, hogy amennyiben $\omega^2LC=1$, akkor a számláló zérussá válik, míg a nevező $\omega L$ értékű marad. Így a teljes amplitúdó is zérus értékűvé válik, vagyis a kérdéses rezonanciafrekvencia: 
 $\omega=\frac{1}{\sqrt{LC}}\,.$

![solution figure](../../raw_html/komal_figures/komal-P5542-sol-fig1.gif)

![solution figure](../../raw_html/komal_figures/komal-P5542-sol-fig2.gif)

![solution figure](../../raw_html/komal_figures/komal-P5542-sol-fig3.gif)

![solution figure](../../raw_html/komal_figures/komal-P5542-sol-fig4.gif)
