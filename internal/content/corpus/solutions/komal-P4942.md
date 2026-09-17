---
id: komal-P4942
source: komal
language: hu
translated: false
problem: komal-P4942
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a kályha teljesítményét $P$-vel, a sugarát $r_0$-lal, a hőszigetelő gömb külső sugarát pedig $R$-rel. A kályha folyamatos hőleadásának következtében hosszabb idő után egyensúlyi hőmérsékleteloszlás alakul ki, amelyet a gömbszimmetrikus $T(r)$ hőmérséklet és $j(r)$ hőáramsűrűség (egységnyi idő alatt egységnyi felületen átáramló hő) jellemez. 
 Egyensúlyi állapotban a kályhát koncentrikusan körülvevő bármely $r$ sugarú gömbfelületen ugyanannyi hő áramlik át időegységenként, vagyis 
 $4\pi r^2\,j(r)=P,\qquad \text{tehát} \qquad j(r)=\frac{P}{4\pi}\cdot \frac{1}{r^2}.$ 
 Másrészt tudjuk, hogy a hővezetési törvény szerint (melyet elsőként Jean Baptiste Joseph Fourier fogalmazott meg 1822-ben hosszú vékony rúdra) a hőáramsűrűség az egységnyi távolságra eső hőmérséklet-különbséggel arányos. A $\lambda$ arányossági tényező az anyagra jellemző állandó, az ún. hővezetési együttható: 
 $j(r)=-\lambda \frac{\Delta T}{\Delta r}.$ 
 (A negatív előjel azt fejezi ki, hogy a hő a hőmérséklet-csökkenés irányába áramlik.) 
 A fenti két összefüggés birtokában ki tudjuk számítani, hogy mennyit változik a hőmérséklet a kályha felületétől a hőszigetelő anyag külső felületéig. A hőszigetelő gömböt képzeletben nagyon sok, vékony gömbhéjra osztva és a hőmérséklet-különbségeket összegezve kapjuk, hogy 
 $T_\text{külső}-T_\text{belső}=\sum \Delta T=-\frac{P}{4\pi\lambda}\sum_{r=r_0}^{r=R}\frac{\Delta r}{r^2}.
$ 
 Az itt szereplő összeg kiszámítására több lehetőség kínálkozik. 
 $(i)$ Osszuk fel az $r_0<r<R$ intervallumot $n\gg1$ részre, és az osztáspontokat jelölje $r_1,r_2,\ldots r_{n-1}$. Az összeg egyes tagjaiban a nevezőben szereplő $r^2$-et közelítsük a kicsiny intervallum szélső pontjaiban vett sugárértékek szorzatával. Ekkor 
 $\sum_{r=r_0}^{r=R}\frac{\Delta r}{r^2}\approx \frac{r_1-r_0}{r_1 r_0}+ \frac{r_2-r_1}{r_2 r_1}+\frac{r_3-r_2}{r_3r_2}+ \ldots + \frac{r_{n-1}-r_{n-2}}{r_{n-1} r_{n-2}}+ \frac{R-r_{n-1}}{Rr_{n-1} }=\frac{1}{r_0}-\frac{1}{R}.
$ 
 $(ii)$ Kihasználhatunk egy elektrosztatikai analógiát. Ha egy $Q$ nagyságú ponttöltés Coulomb-terében keressük az $r=r_0$ és $r=R$ sugarakkal megadott pontok közötti potenciálkülönbséget, azt kétféle módon is kiszámíthatjuk. Egyrészt 
 $\Delta U=U(R)-U(r_0)=kQ\frac{1}{R}- kQ\frac{1}{r_0},$ 
 másrészt az $E(r)=kQ/r^2$ térerősség segítségével: 
 $\Delta U=-\sum_{r=r_0}^{r=R}E(r)\Delta r=-kQ\sum_{r=r_0}^{r=R}\frac{\Delta r}{r^2}.$ 
 A kétféle eredmény összehasonlításából leolvasható a 
 $\sum_{r=r_0}^{r=R}\frac{\Delta r}{r^2}\approx \frac{1}{r_0}-\frac{1}{R}$ 
 összefüggés. 
 Visszatérve az eredeti problémára, a kályha hőmérsékletére 
 $T_\text{belső}=T_\text{külső}+ \frac{P}{4\pi\lambda}\sum_{r=r_0}^{r=R}\frac{\Delta r}{r^2}=
T_\text{külső}+ \frac{P}{4\pi\lambda}\left(\frac{1}{r_0}-\frac{1}{R}\right)=20\,^\circ{\rm C} + \frac{10}{4\pi\,0{,}04}\left(\frac{1}{0{,}1}-\frac{1}{0{,}5}\right)\,^\circ{\rm C}
\approx 180\,^\circ{\rm C}
$ 
 eredmény adódik.
