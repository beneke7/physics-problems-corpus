---
id: komal-P5736
source: komal
language: hu
translated: false
problem: komal-P5736
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 a) A napfényből a bolygó keresztmetszetével megegyező nyalábot nyel el az égitest, a kisugárzás viszont a teljes felszínen történik. Az egyensúlyi $T$ hőmérsékleten az időegységenként elnyelt és kisugárzott energia megegyezik: 
 $aR^2\pi I=4eR^2\pi\sigma T^4,$ 
 ahol $R$ a bolygó sugara, $I=1360\,\mathrm{W/m^2}$ a napállandó, $a=e=0{,}5$ a bolygó abszorbciós és emissziós állandója, $\sigma=5{,}67\cdot 10^{-8}\,Wm^{-2}K^{-4}$ pedig a Stefan–Boltzmann-állandó. Ebből 
 $T=\sqrt[4]{\frac{aI}{4e\sigma}}=\sqrt[4]{\frac{I}{4\sigma}}\approx 278\,\mathrm{K}\approx 5\,^\circ\mathrm{C}.$ 

 Megjegyzés. Feltesszük, hogy az abszorbciós állandó minden hullámhosszon ugyanakkora, azaz a test abszolút szürke testnek tekinthető, és ekkor a két együttható meg kell, hogy egyezzen, akkor is, ha az elnyelt látható fény és a kisugárzott infravörös sugárzás hullámhossza eltérő. 

 b) A teljesítménymérleg ebben az esetben megváltozik, hiszen a ,,művelt'' területeken $a'=e'=1$. 
 Az első (árnyékos) esetben az új mérleg: 
 $aR^2\pi I=(3e+e')R^2\pi\sigma T_1^4,$ 
 amiből az ilyenkor kialakuló egyensúlyi hőmérséklet: 
 $T_1=\sqrt[4]{\frac{aI}{(3e+e')\sigma}}=\sqrt[4]{\frac{I}{5\sigma}}=\sqrt[4]{\frac{4}{5}}T\approx 263\,\mathrm{K}\approx -10\,^\circ\mathrm{C}.$ 
 A második (napos) esetben pedig: 
 $\frac{a+a'}{2}R^2\pi I=(3e+e')R^2\pi\sigma T_2^4,$ 
 amiből az ilyenkor kialakuló egyensúlyi hőmérséklet: 
 $T_2=\sqrt[4]{\frac{\frac{a+a'}{2}I}{(3e+e')\sigma}}=\sqrt[4]{\frac{3I}{10\sigma}}=\sqrt[4]{\frac{6}{5}}T\approx 291\,\mathrm{K}\approx 18\,^\circ\mathrm{C}.$
