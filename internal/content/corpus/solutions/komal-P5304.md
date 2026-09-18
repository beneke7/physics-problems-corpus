---
id: komal-P5304
source: komal
language: hu
translated: false
problem: komal-P5304
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Jelöljük a test tömegét $m$-mel, a Nap tömegét $M$-mel, a Föld sugarát $r$-rel, a Nap-Föld távolságot $R$-rel, a Föld középpontjának keringési szögsebességét pedig $\omega$-val! A Föld mozgásegyenlete:
 $(1)$ $\gamma\frac{M}{R^2}=R\omega^2.$
 Az Egyenlítőn elhelyezkedő test mozgása a Föld forgómozgásából és a Nap körüli keringésből tevődik össze. A déli és az éjféli helyzetet annyiban más, hogy a Nap délben felfelé, éjfélkor pedig lefelé húzza a testet. A Föld forgásából és a Föld gravitációs vonzásából adódó erők délben és éjfélkor ugyanakkorák, az erők különbségéből tehát kiesnek. Emiatt (az erőkülönbség szempontjából) képzelhetjük úgy a Föld forgását, mintha a periódusideje 1 év lenne, vagyis mintha (a Holdhoz hasonlóan) mindig ugyanazt az oldalát mutatná a Nap felé.
 Legyen a súlyerő (amit egy igen pontos mérleg mutatna) $G_\text{dél}$ és $G_\text{éjfél}$, a Föld gravitációs vonzóereje pedig $G_0$. (A Föld középpontja felé mutató irányt tekintsük pozitívnak.) A vizsgált test mozgásegyenlete
 $G_0-G_\text{dél}-\gamma\frac{mM}{(R-r)^2}=-m(R-r)\omega^2,$
 illetve
 $G_0-G_\text{éjfél}+\gamma\frac{mM}{(R+r)^2}=m(R+r)\omega^2.$
 A fenti két egyenletet kivonva egymásból, továbbá (1) alapján $\gamma M$-et $R^3\omega^2$-tel helyettesítve kapjuk, hogy
 $G_\text{éjfél}-G_\text{dél}=mR\omega^2\left[\frac{1}{(1-r/R)^2}+\frac{1}{(1+r/R)^2}-2\right].$
 Mindkét súly jó közelítéssel $G_0=mg$-vel egyenlő, így a relatív súlyváltozás:
 $(2)$ $\frac{\Delta G}{G_0}=\frac{R\omega^2}{g}\left[\frac{1}{(1-\varepsilon)^2}+\frac{1}{(1+\varepsilon)^2}-2\right],$
 ahol
 $\varepsilon=\frac{r}{R}=\frac{6378~\rm km}{150~\text{millió km}}=4{,}25\cdot10^{-5}\ll 1.$
 A (2) egyenlet jobb oldalán a szögletes zárójelben álló kifejezés értékét közvetlenül (pl. egy zsebszámológéppel) nem tudjuk kiszámítani, mert majdnem pontosan egyforma számok különbségét tartalmazza. Ha viszont közös nevezőre hozzuk, a következő eredményt kapjuk:
 $\frac{1}{(1-\varepsilon)^2}+\frac{1}{(1+\varepsilon)^2}-2=\frac{(1+\varepsilon)^2+(1-\varepsilon)^2-
2(1-\varepsilon^2)^2}{(1-\varepsilon^2)^2}\approx 6\varepsilon^2\approx 1{,}1\cdot10^{-8}.$
 (Az utolsó előtti lépésnél a számlálóban és a nevezőben is $\varepsilon$-nak csak a legkisebb kitevőjű hatványát tartottuk meg.) Mivel
 $\frac{R\omega^2}{g}=\frac{1{,}5\cdot 10^{11}~{\rm m}}{9{,}8~\rm m/s^2}\left(\frac{2\pi}{1~\text{év}}\right)^2\approx
6\cdot10^{-4},
$
 a relatív súlyváltozás tehát
 $\frac{\Delta G}{G_0}\approx 7\cdot 10^{-12}.$
 Összefoglalva arra jutottunk, hogy az Egyenlítőn éjfélkor a testek az átlagos súlyukhoz képest $3{,}5\cdot
10^{-12}$-szer nehezebbek, délben pedig ugyanennyivel könnyebbek. Ennek a súlyváltozásnak azonban nem egyszerűen az az oka, hogy a Nap gravitációs tere éjfélkor lefelé, délben pedig felfelé húzza a testet, hiszen a testek nem állnak, hanem keringenek a Nap körül. Ilyen pontossággal a testek súlyát nem tudjuk megmérni, tehát a súlyváltozást a gyakorlatban aligha lehet kísérletileg kimutatni.

 Megjegyzés. A fenti megoldás során az Egyenlítő síkjának és a keringés síkjának $23{,}^\circ$-os hajlásszögét nem vettük számításba. Ha ezt megtesszük, a fenti értéktől kb. 10%-kal eltérő eredményt kapunk, tehát a relatív súlyváltozás nagyságrendje ugyanannyinak adódik.
