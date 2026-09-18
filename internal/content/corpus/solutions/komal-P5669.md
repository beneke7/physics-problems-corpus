---
id: komal-P5669
source: komal
language: hu
translated: false
problem: komal-P5669
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A feladat a jojó nevű játékot modellezi. Várható például, hogy a kicsi $\tfrac{r}{R}$ arány miatt a korong tömegközéppontja a kerületi sebességéhez képest lassan fog mozogni.
 a) A fonalat feszítő erőt jelöljük $F$-fel, a korong tömegközéppontjának gyorsulását $a$-val. A korong tömegközéppontjára írjuk fel a mozgásegyenletet:
 $(1)$ $ma=mg-F,$
 A korong eközben a feltekert cérna miatti kényszerfeltétel következtéen $\beta=\frac{a}{r}$ szöggyorsulással felpörög, amire a forgásegyenlet:
 $\Theta\beta=rF,$
 ahol a korong tehetetlenségi nyomatéka $\Theta=\tfrac{1}{2}mR^2$. Behelyettesítve $\Theta$-t és $\beta$-t:
 $\frac{1}{2}mR^2\frac{a}{r}=rF.$
 Ebből fejezzük ki $ma$-t:
 $ma=2\left(\frac{r}{R}\right)^2F.$
 Ezt visszahelyettesítve az (1) egyenletbe megkapjuk a kötelet feszítő erőt:
 $F=\frac{mg}{1+2\left(\frac{r}{R}\right)^2}=4{,}8\,\mathrm{N}.$
 b) A tárcsa tömegközéppontjának $v$ sebességét az energiamegnaradásból fogjuk meghatározni. A fonál teljes kitekeredésekor a korong helyzeti energiája $\tfrac{1}{2}Lmg$-vel csökken a induláshoz képest. Ez alakul a korong $\tfrac{1}{2}mv^2$ tömegközépponti mozgási, és $\tfrac{1}{2}\Theta\omega^2=\tfrac{1}{2}\Theta\left(\tfrac{v}{r}\right)^2$ forgási energiájává:
 $\frac{1}{2}Lmg=\frac{1}{2}mv^2+\frac{1}{2}\Theta\left(\frac{v}{r}\right)^2.$
 Behelyettesítve $\Theta=\tfrac{1}{2}mR^2$-t és egyszerűsítve $\tfrac{1}{2}m$-mel:
 $Lg=v^2\left(1+\frac{1}{2}\left(\frac{R}{r}\right)^2\right).$
 Ebből a sebesség:
 $v=\frac{r}{R}\sqrt{\frac{2Lg}{1+2\left(\frac{r}{R}\right)^2}}=0{,}196\,\mathrm{\frac{m}{s}}.$
 c) Fordulásakor a korong lendülete $\Delta p=2mv$ értékkel változik. Közben a korong jó közelítéssel $\omega=\frac{v}{r}$ szögsebességgel forog, így a félfordulat megtétele $\Delta t=\tfrac{\pi}{\omega}=\tfrac{\pi r}{v}$ ideig tart. Az átlagos fonálerő, a korong súlyával együtt:
 $F_f=mg+\frac{\Delta p}{\Delta t}=mg+\frac{2mv^2}{\pi r}.$
 Mivel a feladat csak becslést kér, $v$ behelyettesítésénél a $\left(\tfrac{r}{R}\right)^2=10^{-2}$ nagyságrendű korrekciót elhanyagoljuk:
 $F_f\approx mg\left(1+\frac{4Lr}{\pi R^2}\right)=7{,}4\,\mathrm{N}.$
