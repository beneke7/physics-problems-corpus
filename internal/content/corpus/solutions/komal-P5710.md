---
id: komal-P5710
source: komal
language: hu
translated: false
problem: komal-P5710
figure_files: [komal-P5710-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Az ábra egy a leírásnak megfelelő körfolyamat $p$-$V$ diagramját mutatja. Az A, B és C pontokban a gáz állapotváltozói rendre $p_2$, $V_1$ és $T_\mathrm{A}=p_2V_1/nR$; $p_2$, $V_2$ és $T_\mathrm{B}=p_2V_2/nR$; illetve $p_1$, $V_2$ és $T_\mathrm{C}=p_1V_2/nR$, ahol $n$ a gáz mennyisége mólokban kifejezve. 

 A két nyomás- és két térfogatadatból csak három független, mert a C$\to$A folyamat adiabatikus voltából következik, hogy 
 $p_1V_2^\kappa=p_2V_1^\kappa.$ 
 Esetünkben, mivel egyatomos gázról van szó, a fajhőhányados értéke $\kappa=\tfrac{c_p}{c_V}=\tfrac{5}{3}$. A körfolyamatban hőfelvétel csak az A$\to$B, míg hőleadás csak a B$\to$C szakaszon van. Ezek értéke rendre 
 $Q_1=c_p(T_\mathrm{B}-T_\mathrm{A})=c_p\frac{p_2V_2-p_2V_1}{nR}$ 
 és 
 $Q_2=c_V(T_\mathrm{B}-T_\mathrm{C})=c_V\frac{p_2V_2-p_1V_2}{nR}.$ 
 A kettő különbsége az egy ciklus alatt végzett munka, így a hatásfok 
 $\eta=\frac{Q_1-Q_2}{Q_1}=\frac{c_p(p_2V_2-p_2V_1)-c_V(p_2V_2-p_1V_2)}{c_p(p_2V_2-p_2V_1)}=1-\frac{1}{\kappa}\cdot\frac{p_2V_2-p_1V_2}{p_2V_2-p_2V_1}.$ 
 Az adiabatikus állapotegyenletből kapott 
 $\frac{V_1}{V_2}=\left(\frac{p_1}{p_2}\right)^{\frac{1}{\kappa}}$ 
 összefüggést behelyettesítve, egyszerűsítések után az 
 $\eta=1-\frac{1}{\kappa}\cdot\frac{1-\left(\frac{p_1}{p_2}\right)}{1-\left(\frac{p_1}{p_2}\right)^{\frac{1}{\kappa}}}$ 
 kifejezést kapjuk. Mivel $p_2>p_1$, kifejezésünk a $0<\tfrac{p_1}{p_2}<1$ tartományban értelmes. Itt $\tfrac{1}{\kappa}<1$ miatt 
 ${\left(\frac{p_1}{p_2}\right)}<{\left(\frac{p_1}{p_2}\right)^{\frac{1}{\kappa}}},$ 
 ezért 
 $\frac{1-\left(\frac{p_1}{p_2}\right)}{1-\left(\frac{p_1}{p_2}\right)^{\frac{1}{\kappa}}}>1,$ 
 azaz 
 $\eta<1-\frac{1}{\kappa},$ 
 ami esetünkben $\eta<\tfrac{2}{5}$. Ez tehát a felső korlát az ilyen típusú körfolyamatok hatásfoka számára, amit a $\tfrac{p_1}{p_2}$ arány csökkentésével lehet egyre jobban megközelíteni.

![solution figure](../../raw_html/komal_figures/komal-P5710-sol-fig1.gif)
