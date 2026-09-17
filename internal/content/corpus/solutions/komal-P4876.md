---
id: komal-P4876
source: komal
language: hu
translated: false
problem: komal-P4876
figure_files: [komal-P4876-sol-fig1.gif]
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A dugattyú viszonylag hamar (jó közelítéssel) egyenletesen fog mozogni. (Ez annál hamarabb következik be, minél kisebb $k$ értéke. Ha $k\rightarrow 1$, akkor nem alakul ki egyenletes mozgás, a dugattyú és a víz egyenletesen gyorsul.) 
 $a)$ Jelöljük a dugattyú állandósult sebességét $v$-vel. A cső jobb oldali végénél kiáramló folyadék sebessége (a folyadék összenyomhatatlansága miatt) $v/k$ lesz. 
 Tekintsük az áramló folyadékot valamelyik időpillanatban, illetve egy kicsiny $\Delta t$ idővel később. A dugattyú elmozdulása ezalatt $v\Delta t$, a külső erő munkája tehát 
 $W=Fv\Delta t.$ 
 A csőből kiáramló folyadék tömege $\Delta m=\varrho Av\Delta t$, sebessége $v/A$, a teljes mozgási energia változása tehát 
 $\Delta E=\frac{1}{2}\Delta m \left(\frac{v}{k}\right)^2-\frac{1}{2}\Delta m v^2.$ 
 (Úgy számolhatunk, mintha a dugattyú melletti $\Delta m$ tömegű folyadékmennyiség $v$ sebességről $v/k$ sebességre gyorsult volna fel, és a folyadék többi részének sebessége nem változott volna.) 
 A munkatétel szerint $W=\Delta E$, ahonnan 
 $v=\sqrt{\frac{F}{\varrho A}\,\frac{2k^2}{1-k^2}}.$ 
 Ha például $k=\tfrac{1}{5}$, akkor 
 $v=\sqrt{\frac{F}{12\varrho A}}\approx 0{,}29\sqrt{\frac{F}{ \varrho A}}.$ 
 A dugattyú sebességét a 
 $p+\varrho\frac{v^2}{2}+\varrho gh$ 
 Bernoulli-törvény felhasználásával is megkaphatjuk. A dugattyú közelében a folyadék nyomása $p_0+\frac{F}{A}$, az áramlás sebessége pedig $v$. A kiáramló folyadék nyomása a $p_0$ külső légnyomással egyezik meg, sebessége pedig $v/k$. A $\varrho gh$ tag a gravitáció figyelmen kívül hagyása miatt nulla. Így 
 $p_0+\frac{F}{A}+\frac{\varrho}{2}v^2=p_0+\frac{\varrho}{2} \,\frac{v^2}{k^2},$ 
 tehát 
 $v=\sqrt{\frac{F}{\varrho A}\,\frac{2k^2}{1-k^2}}.$ 
 A munkatételből és a Bernoulli-törvényből kapott eredmény megegyezik, ami nem meglepő, hiszen a Bernoulli-törvény éppen a mechanikai energia megmaradását fejezi ki a folyadékok áramlásakor. 

 $b)$ Ha a függőleges falnak csapódó víz $F_1$ nagyságú, jobbra mutató erőt fejt ki a falra, akkor a fal ugyanekkora nagyságú, balra mutató erővel hat a folyadékra. Mivel $\Delta t$ idő alatt $\Delta m$ tömegű, $v/k$ sebességű folyadék veszíti el vízszintes irányú lendületét, fennáll 
 $-F_1\Delta t= -(\varrho A v \Delta t) \frac{v}{k},$ 
 vagyis ($v$ korábban kiszámított értékét felhasználva) 
 $F_1=\frac{2k}{1-k^2}\,F=\frac{5}{12}F\approx 0{,}42\, F.
$ 
 $c)$ A cső rögzítésére ható $F_2$ erőt ugyancsak a lendületváltozás tételéből határozhatjuk meg. A folyadéknak a csőben lévő részére $F-F_2$ erő hat, ezt a dugattyú, illetve a folyadéknyomásból származó, a szűkület falára ható erő ellenereje fejti ki. A lendületváltozás egyenlete: 
 $\left(F-F_2\right)=\Delta m\left( \frac{v}{k}-v\right),$ 
 ahonnan 
 $F_2=\frac{1-k}{1+k}\,F=\frac{2}{3}\,F\approx 0{,}67\,F.$ 
 Megjegyzés: Figyelemre méltó, hogy $F_1+F_2\ne F$, de ez nem ellentmondás, hiszen (a sebességek időbeli állandósága ellenére) a teljes folyadékmennyiség lendülete időben egyre változik, csökken. Az eredő erő 
 $F-F_1-F_2= -\frac{2k^2}{1-k^2}\,F$ 
 és ez éppen megegyezik a 
 $\frac{\Delta I_\text{összes}}{\Delta t}=
-\frac{\Delta m\cdot v }{\Delta t}=-\varrho A v^2$ 
 mennyiséggel, összhangban Newton II. törvényével.

![solution figure](../../raw_html/komal_figures/komal-P4876-sol-fig1.gif)
