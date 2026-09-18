---
id: komal-P5238
source: komal
language: hu
translated: false
problem: komal-P5238
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Ha az autó $v$ sebességgel halad felfelé a lejtőn, akkor a kerekeinek szögsebessége $\omega=v/r$, a villanymotor modelljében szereplő áramköri elemre (ideális motorra)
 $U=\gamma \frac{v}{r} $
 feszültség jut.
 Az áramkörben folyó $I$ áram hatására az $R_{\rm b}$ belső ellenálláson és az $R$ ,,terhelő ellenálláson" összesen $I(R_{\rm b}+R)$ feszültség esik, így a huroktörvény szerint
 $U_0-I(R_{\rm b}+R)-U=0.$

 Megjegyzés. A motor által leadott mechanikai teljesítmény: $P=M\omega$ az áramköri elem által felvett $UI$ elektromos teljesítménnyel egyenlő; emiatt nevezhetjük ezt az áramköri elemet ideális (100%-os hatásfokú) motornak. A motor veszteségét az ideális motorral sorosan kapcsolt $R$ ellenálláson fejlődő Joule-hővel vesszük figyelembe.

 A motor mechanikai munkája az $\alpha$ hajlásszögű lejtőn $v$ sebességgel haladó, a teherrel együtt összesen $m_0+m$ tömegű autó helyzeti energiájának növekedését fedezi:
 $P=\frac{\Delta E_\text{helyzeti}}{\Delta t}=\frac{(m_0+m)g\sin\alpha\,v\Delta t} {\Delta t},$
 vagyis
 $UI=(m_0+m)g\,v\sin\alpha,$
 tehát
 $I=\frac{P}{U}=\frac{r}{\gamma}(m_0+m)g \sin\alpha.$
 (Érdekes, hogy az áramerősség nem függ az autó sebességétől.)
 A fenti egyenletekből:
 $U_0-\frac{r}{\gamma}(R_{\rm b}+R)(m_0+m)g\sin\alpha-\frac{v}{r}\gamma=0,$
 ahonnan a játékautó sebessége kifejezhető:
 $v=\frac{r}{\gamma}U_0-\frac{r^2}{\gamma^2} (R_{\rm b}+R)(m_0+m)g\sin\alpha=7{,}25~\frac{\rm cm}{\rm s}.$

 $b)$ Hatásfok maximalizálása.
 A hasznos teljesítmény az előző részben megkapott sebességformula felhasználásával:
 $P_\text{hasznos}=mg\sin\alpha \cdot v=mg\sin\alpha\left(\frac{r}{\gamma}U_0-\frac{r^2}{\gamma^2}(R_{\rm b}+R)(m_0+m)g\sin\alpha\right).$
 Az áramerősség ismeretében a telep által leadott összes teljesítmény:
 $P_\text{telep}=U_0I=\frac{r}{\gamma} U_0(m_0+m)g \sin\alpha.$
 A hatásfok a két teljesítmény hányadosa:
 $\eta(m)=\frac{P_\text{hasznos}}{P_\text{telep}}=\frac{m}{m_0 +m}-\frac{r (R_{\rm b}+R)g \sin\alpha}{U_0\gamma}\cdot m.$
 Ennek a függvénynek keressük a maximumát.
 A $k=\frac{r (R_{\rm b}+R)g \sin\alpha}{U_0\gamma}$ jelölés bevezetésével $\eta$ így is felírható:
 $\eta=\frac{m}{m+m_0}-km=(1+km_0)-\left(\frac{m_0}{m+m_0}+k(m+m_0)\right),$
 ahonnan a számtani és mértani közepekre vonatkozó egyenlőtlenség szerint
 $\eta\le 1+km_0-2 \sqrt{km_0}=\left(1-\sqrt{km_0}\right)^2.$
 Mivel a megadott számadatok mellett $k\approx \frac{1}{27\,\rm kg}$, $\eta$ legnagyobb értéke kb. 80%, és ezt a hatásfokot akkor érheti el a játékautó, ha a terhelése
 $m=\sqrt{\frac{m_0}{k}}-m_0\approx 2{,}55~\rm kg.$
