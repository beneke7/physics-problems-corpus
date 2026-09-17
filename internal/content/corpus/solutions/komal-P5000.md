---
id: komal-P5000
source: komal
language: hu
translated: false
problem: komal-P5000
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Jelöljük a tekercsben lévő vízoszlop magasságát az áram bekapcsolása előtt $x_0$-lal. Az áram bekapcsolása miatt változzon meg ez a magasság $x$-szel, vagyis legyen a vízszintek magasságkülönbsége $2x$, és a tekercset $x_0+x$ magasan töltse ki a víz. Ebben a helyzetben az $A$ keresztmetszetű, $\ell$ hosszúságú, $N$ menetes tekercs önindukciós együtthatója (ami a gerjesztési törvényből kapható meg, de a hivatkozott cikkben is megtalálható): 
 $(1)$ $L(x)=\mu_0\frac{N^2A}{\ell}\bar{\mu}(x), $ 
 ahol a tekercsben lévő anyag átlagos relatív permeabilitását így számolhatjuk ki: 
 $(2)$ $\frac{1}{\bar{\mu}(x)}=\frac{x_0+x}{\ell}\frac{1}{\mu_{\rm r}}+\frac{\ell-x_0-x}{\ell}. $ 

 Megjegyzés. A fenti képlet a gerjesztési törvény közegben is érvényes alakjából kapható meg: 
 $\sum_\text{zárt görbére}\frac{1}{\mu_{\rm r}({\boldsymbol r})}{\boldsymbol B({\boldsymbol r})}\,\Delta {\boldsymbol r}=\mu_0
\sum_\text{körülvett felületre} I.$ 
 Esetünkben, amikor a tekercsen kívül elhanyagolható a mágneses indukció, a belsejében pedig $B$ állandó, a gerjesztési törvény így írható fel: 
 $\frac{B\cdot(x_0+x)}{\mu_{\rm r}}+B\cdot(\ell-x_0-x)=NI,$ 
 az $N$ meneten áthaladó összes fluxus tehát 
 $\Phi=LI=BAN=\frac{\mu_0 N^2AI}{ \frac{x_0+x}{\mu_{\rm r}}+ (\ell-x_0-x) }.$ 

 Vizsgáljuk meg, mekkora energiával rendelkezik az áramjárta tekercs és a csőben lévő víz együttesen, amikor a vízfelszín $x$-szel elmozdult az árammentes esethez képest. A tekercs energiája ebben az állapotban $\tfrac12 LI^2,$ a víz helyzeti energiája pedig (az eredeti helyzethez viszonyítva) $\varrho gA x^2$. 
 Mi történne, ha a vízszint – valamilyen ok miatt – egy kicsiny $\Delta x$ értékkel megemelkedne? A víz helyzeti energiája ekkor 
 $\Delta E_\text{helyzeti}=2\varrho g A x \Delta x$ 
 értékkel megnőne, hiszen a megváltozott állapotot úgy is megkaphatjuk, hogy a jobb oldali csőszárból egy $\varrho A\Delta x$ tömegű kis vizhengert a bal oldali $2x$-szel magasabban lévő tetejére helyezünk. A tekercs mágneses energiája is megváltozik, hiszen $L$ függ a vízmagasságtól. Állandó áramerősség mellett (és kihasználva, hogy $\mu_{\rm r}\approx 1$) az (1) és (2) képletek alapján 
 $\Delta E_\text{mágneses}=\Delta \left(\frac12 LI^2\right)=\frac{I^2}{2}\Delta L\approx -\mu_0\frac{N^2AI^2}{2\ell^2}(1-\mu_{\rm r})\Delta x.
$ 
 Nem szabad megfeledkeznünk arról, hogy a tekercs és a csőben lévő víz energetikailag nem alkot zárt rendszert, hiszen a tekercs össze van kötve az áramforrással. Amikor a tekercs önindukciós együtthatója ($x$ változása miatt) egy kicsit megváltozik, a tekercs fluxusa is megváltozik 
 $\Delta\Phi=I\Delta L$ 
 értékkel, és ez a változás (ha $\Delta t$ idő alatt következik be) Faraday-törvénye szerint 
 $U=\frac{\Delta\Phi}{\Delta t}$ 
 nagyságú feszültséget indukál a tekercsben. Ez a feszültség csökkenteni igyekszik $\Phi$ változását (Lenz-törvény). Ha az áramforrás fenn akarja tartani az állandó $I$ áramerősséget, 
 $W=UI\Delta t=I\Delta\Phi=I^2\Delta L$ 
 többletenergiát kell leadjon (az eredeti, a Joule-hő fedezésére szolgáló energialeadáson felül). 
 Egyensúlyi állapotban teljesül, hogy 
 $W=\Delta E_\text{mágneses}+\Delta E_\text{helyzeti},$ 
 vagyis 
 $I^2\Delta L=\frac12 I^2\Delta L+2\varrho g A x \Delta x.$ 
 (Ha $W$ nagyobb vagy kisebb lenne, mint a mágneses és a gravitációs energia változásának összege, akkor – valamilyen előjelű $\Delta x$ mellett – még mozgási energiára is szert tehetne a víz, tehát nem maradna egyensúlyban.) 
 A fenti egyenletből következik, hogy 
 $x=\frac{I^2}{4\varrho g A}\frac{\Delta L}{\Delta x}=-\frac{\mu_0(1-\mu_{\rm r})N^2I^2}{4\ell^2\varrho g}<0.$ 
 A víz szintje tehát a bal oldali szárban lesüllyed . 

**II. megoldás.**
 A vízoszlop egyensúlyi állapotában a mágneses és a gravitációs erők egyensúlyban vannak. A mágneses erők nagyságát egyértelműen meghatározza a tekercsben folyó áram, és az erő nem függ attól, hogy mekkora a vezeték ellenállása. Lehetne ez a vezeték akár szupravezető (nulla elektromos ellenállású) is, a vízoszlop egyensúlyi magasságát ez a lehetőség nem változtatná meg. 
 Egy szupravezető tekercsben akkor is fennmarad az áram, ha nem kapcsolunk rá külső áramforrást. Ilyen körülmények között a tekercs és az U-alakú csőben lévő víz energetikailag zárt rendszert alkot, a helyzeti energiája az egyensúlyi állapotban minimális. (A rendszer helyzeti energiája a mechanikai mozgástól független energiafajtáit jelenti; a mágneses tér energiája is ilyen jellegű.) 
 Az I. megoldás gondolatmenetét követve állíthatjuk: 
 $E_\text{összes}= E_\text{mágneses}+ E_\text{helyzeti}=\frac{1}{2}LI^2+\varrho g A x^2=\text{minimum},$ 
 vagyis kicsiny $\Delta x$ vízszintváltozásra 
 $\Delta E_\text{mágneses}+\Delta E_\text{helyzeti}=0.$ 
 Nem szabad elfelejtenünk, hogy egy szupravezető tekercsben a $\Phi=LI$ fluxus nem változhat meg (hiszen tetszőlegesen kicsiny fluxusváltozás feszültséget indukálna, ami a nulla ellenállás miatt ,,végtelen nagy'' áramot hozna létre). Ha tehát egy ilyen tekercsben valamilyen ok miatt $L(x)$ változik, az áramerősség sem maradhat állandó. 
 Fejezzük ki a rendszer energiáját az áramerősség helyett a mágneses fluxussal: 
 $E_\text{összes}=\frac{\Phi^2}{2L(x)}+\varrho g A x^2 =\text{minimum},$ 
 vagyis 
 $\frac{\Phi^2}{2}\,\Delta\left(\frac1{L(x)} \right)+\varrho g A \Delta\left( x^2 \right)=0.$ 
 Felhasználva, hogy 
 $\Delta\left(\frac1{L(x)} \right)=\frac{1}{L+\Delta L}-\frac{1}{L}\approx -\frac{\Delta L}{L^2}, \qquad \text{illetve}\qquad
\Delta\left( x^2 \right)=(x+\Delta x)^2-x^2\approx 2x \Delta x,$ 
 a vízszintváltozásra kapjuk: 
 $x=\frac{\Phi^2}{4L^2\varrho g A}\,\frac{\Delta L}{\Delta x}\approx -\frac{\mu_0(1-\mu_{\rm r})N^2I^2}{4\ell^2\varrho g}<0.$ 
 (Az utolsó lépésben kihasználtuk, hogy $\Phi=LI$, és behelyettesítettük $L(x)$-nek az I. megoldásban szereplő konkrét alakját.) 

**III. megoldás.**
 Ismert, hogy a mágneses mező energiasűrűsége (egységnyi térfogatban lévő energia) vákuumban $B^2/(2\mu_0),$ mágnesesen polarizálható közegben pedig 
 $\frac{\text{energia}}{\text{térfogat}}=\frac{B^2}{2\mu_0\mu_{\rm r}},$ 
 ahol $\mu_{\rm r}$ a közeg relatív permeabilitása. Ebből következik, hogy a mágneses mező a közeg egységnyi felületére 
 $\sigma=\frac{B^2}{2\mu_0\mu_{\rm r}}$ 
 húzóerőt (negatív nyomást) fejt ki. 

 Megjegyzés. a fenti képletet úgy láthatjuk be, hogy elképzelünk egy téglatest alakú térrészt, amelynek egyik, $A$ területű oldallapját $F$ erő kifejtésével kicsiny $\Delta x$-szel kifelé húzzuk. Az eközben végzett munka $F\Delta x$, a térrész mágneses energiájának növekedése pedig az energiasűrűség és $A\Delta x$ szorzata. A munkatétel szerint 
 $F\Delta x=\frac{B^2}{2\mu_0\mu_{\rm r}}A\Delta x,$ 
 ahonnan a $\sigma=F/A$ húzófeszültségre a fentebb megadott összefüggés adódik. 

 Ha az U-alakú csőben $2x$ szintkülönbség alakul ki, a hidrosztatikai nyomással a mágneses húzófeszültségek különbsége tart egyensúlyt. 
 $2\varrho g x=\frac{B^2}{2\mu_0\mu_{\rm r}}-\frac{B^2}{2 \mu_{\rm r}},$ 
 ahonnan 
 $x=\frac{B^2}{4\mu_0\varrho g}\left(\frac{1}{\mu_0}-1\right)\approx \frac{\mu_0(1-\mu_{\rm r})N^2I^2}{4\ell^2\varrho g}.$ 
 (Az utolsó lépésben kihasználtuk, hogy $\mu_{\rm r}$ csak nagyon kicsit tér el 1-től, emiatt a tekercs belsejében $B$ lényegében ugyanakkora, mint vákuumban lenne. 
 A víz (diamágneses anyag) relatív permeabilitása 1-nél kisebb, így a mágneses mező húzófeszültsége a vízfelület alsó oldalán nagyobb, mint a felső (levegő felöli) oldalon; a víz tehát a bal oldali szárban lesüllyed.
