---
id: komal-P5557
source: komal
language: hu
translated: false
problem: komal-P5557
figure_files: [komal-P5557-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**I. megoldás.**
 Jellemezzük a henger (görgő) helyzetét a tengely oldalirányú kitérésének $\phi$, és a tengely körüli elfordulás $\varphi$ szögével! 

 A kettő nem független, tiszta gördülés esetén (az ábrán a két zöld körív hossza megegyezik) 
 $R\phi=r(\varphi+\phi),\qquad\textrm{azaz}\qquad\varphi=\frac{R-r}{r}\phi.$ 
 Analóg összefüggés igaz a megfelelő szögsebességekre, illetve a nekünk fontos $\beta_{\varphi}$ és $\beta_{\phi}$ szöggyorsulásokra is: 
 $\beta_{\varphi}=\frac{R-r}{r}\beta_{\phi}.$ 
 Adott $\phi$ mellett a henger tengelye a cső legmélyebb pontjához képest 
 $y=r+(R-r)(1-\cos \phi)$ 
 magasságban van, és az alaphelyzettől 
 $x=(R-r)\sin{\phi}$ 
 vízszintes távolságra tér ki oldalra. 
 Jelölje $N$ a görgő és a cső fala közötti nyomó, $S$ pedig a súrlódási erőt! Ha $a_y$ és $a_x$ a tömegközéppont függőleges illetve vízszintes gyorsulása, akkor a mozgás dinamikáját leíró egyenletek 
$$\begin{align*}
 ma_y &=N\cos{\phi}+S\sin{\phi}-mg,\\
 ma_x &=-N\sin{\phi}+S\cos{\phi},\\
 \theta\beta_{\varphi} &=-rS,
\end{align*}$$
 ahol $\theta$ a görgőnek a szimmetriatengelyére vonatkozó tehetetlenségi nyomatéka. 
 Kis kitérések esetén, amikor jó közelítés, hogy $\sin\phi\cong \phi$ és $\cos{\phi} \cong 1$, $y=r$-nek, így $a_y=0$-nak vehető, a vízszintes gyorsulás pedig (mivel $x\cong (R-r){\phi}$) az 
 $a_x=(R-r)\beta_{\phi}$ 
 kifejezéssel közelíthető. Végső soron a mozgásegyenletek az 
$$\begin{align*}
 N &=mg-S\phi,\\
 m(R-r)\beta_{\phi} &=-N{\phi}+S,\\
 \theta\beta_{\varphi} &=-rS
\end{align*}$$
 egyenletekre redukálódnak. Ezekből a $\beta$-kra vonatkozó kényszer mellett az $N$ és az $S$ kiküszöbölése és $\phi^2\ll 1$ felhasználása után a 
 $\beta_{\phi}=-\frac{g}{(1+\theta/mr^2)(R-r)}\phi$ 
 összefüggés adódik. Ebből leolvasható, hogy a rezgés körfrekvenciája 
 $\omega=\sqrt{\frac{g}{(1+\theta/mr^2)(R-r)}},$ 
 tehát a periódusideje 
 $T=\frac{2\pi}{\omega}=2\pi\sqrt{\left(1+\frac{\theta}{mr^2}\right)\frac{R-r}{g}}.$ 
 Homogén tömör görgő esetén $\theta=mr^2/2$, így 
 $T=2\pi\sqrt{\frac{3}{2}\frac{R-r}{g}}.$ 
 Megjegyzés. Vegyük észre, hogy a ,,kis kitérés'' követelménye csak a $\phi$-re vonatkozik (ennek a szögfüggvényei esetében éltünk közelítéssel), de kicsi $\phi$-hez tartozhat akár nagy $\varphi$ is (ha $R\gg r$). 

**II. megoldás.**
 Használjuk az I. megoldás jelöléseit és a tapadásból következő 
 $\beta_\varphi=\frac{R-r}{r}\beta_\phi$ 
 összefüggést. Írjuk fel a gördülő hengerre a forgómozgás alapegyenletét a pillanatnyi forgástengelyre (a két henger $C$ érintkezési pontjára) vonatkoztatva! Ezt általában nem lehet megtenni, de most megtehetjük, mert ugyan ennek a pontnak van gyorsulása, de a gyorsulásvektor merőleges a felületre, és így átmegy a test tömegközéppontján (lásd Szvetnik Endre ,,Forgási egyenlet tetszőleges tengelyre'' c. cikkét a KöMaL 1993. májusi számában http://db.komal.hu/KomalHU/cikk.phtml?id=199387 ). Erre a pontra vonatkoztatva csak a nehézségi erőnek van forgatónyomatéka: 
 $\theta_C\beta_\varphi=-mgr\sin\phi,$ 
 ahol $\theta_C=\theta+mr^2$ ($\theta$ az előző megoldással egyezően a hengernek a szimmetriatengelyére vonatkozó tehetetlenségi nyomatéka). Ezt behelyettesítve, felhasználva a szöggyorsulások közötti összefüggést, valamint a kis $\phi$ esetén érvényes $\sin\phi\cong\phi$ közelítést: 
$$\begin{align*}
 (\theta+mr^2)\frac{R-r}{r}\beta_\phi &=-mgr\phi,\\
 \beta_\phi &=-\frac{g}{(1+\frac{\theta}{mr^2})(R-r)}\phi,
\end{align*}$$
 amelyből az előző megoldással egyező módon következik a rezgés körfrekvenciája és periódusideje. 

**III. megoldás.**
 Számítsuk ki – az I. megoldás jelöléseit használva – a görgő gravitációs helyzeti energiáját és a mozgási energiáját az ábrán látható helyzetben. 
 A helyzeti energia (annak nullpontját a henger legmélyebb helyzetéhez választva): 
 $E_\mathrm{h}=mg(R-r)(1-\cos\phi).$ 
 Kis kitéréseknél $\cos\phi=1-2\sin^2(\phi/2)\approx 1-\frac{\phi^2}{2}$, így 
 $E_\mathrm{h}=mg(R-r)\frac{\phi^2}{2}.$ 
 Ez az energia éppen olyan, mint egy 
 $D=mg(R-r)$ 
 rugóállandójú rugó rugalmas energiája $\phi$ megnyújtás esetén. 
 Amikor a $\phi$ szög változási sebessége $\omega_\phi$, akkor a tapadási kényszerfeltétel miatt a görgő szögsebessége 
 $\omega_\varphi=\frac{R-r}{r}\omega_\phi,$ 
 és így a mozgási energiája a tömegközéppont mozgásához tartozó energia és a forgási energia összege, vagyis (kis kitérések esetén) 
 $E_\mathrm{m}=\frac{1}{2}m(R-r)^2\omega_\phi^2+\frac{1}{2}\,\frac{mr^2}2\omega_\varphi^2=\frac{3}{4}m(R-r)^2\omega_\phi^2.$ 
 Ez a kifejezés ugyanolyan, mint egy 
 $M=\frac{3}{2}m(R-r)^2$ 
 tömegű, $v=\omega_\phi$ sebességgel mozgó pontszerű test mozgási energiája. 
 A görgő mozgásának periódusideje a rugó végén mozgó tömegponttal való hasonlóság miatt 
 $T=2\pi\sqrt{\frac{M}{D}}=2\pi\sqrt{\frac{3}{2}\frac{R-r}{g}}.$

![solution figure](../../raw_html/komal_figures/komal-P5557-sol-fig1.gif)
