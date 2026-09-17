---
id: komal-P5696
source: komal
language: hu
translated: false
problem: komal-P5696
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A proton mozgását egy olyan hengerkoordináta-rendszerben írjuk le, amelynek a $z$ tengelye egybeesik a függőleges vezető tengelyével. Jelölje $r$ a proton távolságát a tengelytől, és legyen $z$ a függőleges elmozdulás! A proton sebességének a komponensei ebben a rendszerben $(v_r,\,v_\varphi,\,v_z)$. A vezetőben folyó áram hatására létrejövő mágneses indukció $\varphi$ irányú, azaz minden pontban az adott pont és a $z$ tengely által meghatározott $(r,z)$ síkra merőleges, és az $r$ távolság reciprokával arányos, tehát 
 $B=\frac{r_0}{r}B_0$ 
 alakú. (Itt $B_0$ kifejezhető az áram segítségével, de nem érdemes ezze bajlódni, hisz azt sem ismerjük.) A Lorentz-erő merőleges a pillanatnyi sebességre, ezért nem változtatja meg annak a nagyságát, tehát 
 $\sqrt{v_r^2+v_\varphi^2+v_z^2}=v_0.$ 
 Másrészről a Lorentz-erő merőleges a mágneses indukcióra is, ezért a proton és a $z$ tengely közös síkjában hat, így nincs forgatónyomatéka a tengelyre vonatkozóan. Ebből következik, hogy a protonnak a $z$ tengelyre vonatkozó impulzusmomentuma állandó, tehát a kezdeti feltételeket is figyelembe véve 
 $rv_\varphi=r_0v_0,\qquad\textrm{azaz}\qquad v_\varphi=v_0\frac{r_0}{r}.$ 
 a) A sebesség vízszintessel bezárt $\vartheta$ szöge a sebesség függőleges komponensével van összefüggésben: 
 $\sin\vartheta=\frac{v_z}{v_0}.$ 
 $v_z$-t a többi sebességkomponenssel kifejezve, és $v_\varphi$-t behelyettesítve 
 $v_z=v_0\sqrt{1-\left(\frac{v_r}{v_0}\right)^2-\left(\frac{r_0}{r}\right)^2}.$ 
 Amikor $r$ maximális, akkor $v_r$ éppen eltűnik, tehát a sebesség függőleges komponensének a maximális értéke 
 $v_{z,\mathrm{max}}=v_0\sqrt{1-\left(\frac{r_0}{r_\mathrm{max}}\right)^2}.$ 
 Ebből a legnagyobb $\vartheta$ 
 $\vartheta_\mathrm{max}=\arcsin{\sqrt{1-\left(\frac{r_0}{r_\mathrm{max}}\right)^2}}=\arcsin{\sqrt{\frac{15}{16}}}=75{,}5^\circ.$ 
 b) A $\vartheta$ közbülső értékeinek a meghatározásához a $v_z$ egyenletéből kell kiindulnunk. A Lorentz-erő, ami az $(r,z)$ síkban hat, nagysága arányos az $e$ töltéssel, a $B$-vel és a sebesség $(r,z)$ síkra vett $(v_r,0,v_z)$ vetületével, de merőleges arra, komponensekkel az 
 $(F_r,F_\varphi,F_z)=\left(-ev_z\frac{r_0}{r}B_0,0,ev_r\frac{r_0}{r}B_0\right)$ 
 alakban adható meg. Ennek alapján a proton függőleges gyorsulása 
 $a_z=\frac{er_0B_0}{m}\frac{v_r}{r}.$ 
 Az egyenlet bal oldalán az $a_z$ definíció szerint a $v_z$ változási sebessége (idő szerinti deriváltja), a jobb oldalon pedig $v_r/r$ az $\ln r$-nek, azaz a tengelytől való távolság logaritmusának a deriváltja. Mindkét oldalt integrálva tehát a 
 $v_z=\frac{er_0B_0}{m}\,\ln\frac{r}{r_0}$ 
 összefüggést kapjuk. Itt $v_z$ és $r$ a két mennyiségnek ugyanabban az időpillanatban felvett értékei (de az időfüggést nem jelöltük, mert nem ismerjük, és nincs is rá szükségünk), és kihasználtuk, hogy kezdetben, amikor $r=r_0$, akkor $v_z=0$. Ennek alapján 
 $v_{z,\mathrm{max}}=\frac{er_0B_0}{m}\,\ln\frac{r_\mathrm{max}}{r_0}.$ 
 Az ismeretlen $B_0$-t kiküszöbölve és $v_{z,\mathrm{max}}$ értékét behelyettesítve a 
 $v_z=\frac{v_0\sqrt{1-\left(\frac{r_0}{r_\mathrm{max}}\right)^2}\,\ln\frac{r}{r_0}}{\ln\frac{r_\mathrm{max}}{r_0}}$ 
 kifejezést kapjuk, aminek a segítségével 
 $\sin\vartheta(r)=\frac{\sin\vartheta_\mathrm{max}\,\ln\frac{r}{r_0}}{\ln\frac{r_\mathrm{max}}{r_0}}.$ 
 Eszerint akkor, amikor $r=2r_0$, 
 $\sin\vartheta(2r_0)=\frac{\sin\vartheta_\mathrm{max}}{2},\qquad\textrm{azaz}\qquad\vartheta(2r_0)=29{,}0^\circ.$
