---
id: komal-P5676
source: komal
language: hu
translated: false
problem: komal-P5676
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 a) A kapcsoló zárt állása esetén az ellenállásokon az ellenállások arányában oszlik meg a feszültség, a kondenzátor feszültsége pedig a vele párhuzamosan kötött $R_2$ ellenállás feszültségével lesz egyenlő. Így a kondenzátor feszültsége 
 $U_\mathrm{C}=U_2=\frac{R_2}{R_1+R_2}U_0=15\,\mathrm{V},$ 
 a kondenzátor keresett töltése pedig: 
 $Q=CU_\mathrm{C}=300\,\mu\mathrm{C}.$ 

 b) A kapcsoló kinyitása után egy tranziens folyamat kezdődik, majd a tranziens lezajlása után már nem fog sehol áram folyni az áramkörben. Ekkor a teljes telepfeszültség a kondenzátorra esik, azaz 
 $U_\mathrm{C}'=U_0=20\,\mathrm{V},$ 
 és így a kondenzátor új töltése: 
 $Q'=CU_\mathrm{C}'=400\,\mu\mathrm{C}.$ 
 A kondenzátor energiájának megváltozása: 
 $\Delta E=E'-E=\frac{1}{2}CU_\mathrm{C}'^2-\frac{1}{2}CU_\mathrm{C}^2=1{,}75\,\mathrm{mJ}.$ 
 Eközben a telepen is áthalad $\Delta Q=Q'-Q=100\,\mu\mathrm{C}$ töltés, így a telep munkavégzése: 
 $W=\Delta QU_0=2\,\mathrm{mJ}.$ 
 Az $R_1$ ellenálláson felszabaduló Joule-hő a telep munkavégzésének és a kondenzátor energianövekményének a különbsége: 
 $W_1=W-\Delta E=0{,}25\,\mathrm{mJ}.$ 
 Megjegyzés. A feladat megoldásához nem szükséges, de leírhatjuk a tranziens folyamatot is. A huroktörvény alapján: 
 $U_0=R_1I(t)+U_\mathrm{C}(t),$ 
 ahol 
 $I=C\frac{\mathrm{d}U_\mathrm{C}(t)}{\mathrm{d}t}=C\frac{\mathrm{d}(U_\mathrm{C}(t)-U_0)}{\mathrm{d}t}.$ 
 Ezt behelyettesítve: 
 $\frac{\mathrm{d}(U_\mathrm{C}(t)-U_0)}{\mathrm{d}t}=-\frac{1}{R_1C}(U_\mathrm{C}(t)-U_0),$ 
 amely egy ugyanolyan differenciálegyenlet az $U_\mathrm{C}(t)-U_0$ mennyiségre, mint a jól ismert bomlási törvény. Ez alapján a megoldása: 
 $U_\mathrm{C}(t)-U_0=(U_\mathrm{C}(0)-U_0)\,\mathrm{e}^{-\frac{t}{\tau}},$ 
 ahol $\tau=R_1C$ az időállandó. Az áram időfüggése ez alapján: 
 $I(t)=C\frac{\mathrm{d}U_\mathrm{C}(t)}{\mathrm{d}t}=\frac{U_0-U_\mathrm{C}(0)}{R_1}\,\mathrm{e}^{-\frac{t}{\tau}},$ 
 a teljes felszabaduló Joule-hőt pedig ennek integrálásával kaphatjuk meg: 
 $W_1=\int\limits_0^\infty R_1I(t)^2\,\mathrm{d}t=\frac{(U_0-U_\mathrm{C}(0))^2}{R_1}\int\limits_0^\infty \mathrm{e}^{-\frac{2t}{\tau}}\,\mathrm{d}t=\frac{C}{2}(U_0-U_\mathrm{C}(0))^2=0{,}25\,\mathrm{mJ},$ 
 az előző megoldással összhangban.
