---
id: komal-P5132
source: komal
language: hu
translated: false
problem: komal-P5132
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Ha (órákban mérve) $t_0$ ideig haladtunk 37 km/h átlagsebességgel, akkor $37\,t_0$ km-nyi utat tettünk meg az autópálya elejéig. Innen folyamatosan 130 km/h sebességgel haladunk, akkor $t$ idő múlva az indulástól számított átlagsebességünk
 $\overline{v}(t,t_0)=\frac {37\,t_0+130\,t}{t_0+t}~\frac{\rm km}{\rm h}$
 lesz. Ez a függvény érzékenyen függ a $t_0$ időtartamtól, tehát attól, hogy mennyi ideig haladtunk a városban viszonylag lassan, vélhetően csúcsforgalomban. A függvény grafikonja egy hiperbola, amely $t=0$-nál a 37 km/h értéket, aszimptotikusan ($t\rightarrow\infty$-re) pedig 130 km/h-hoz tart.
 A műszer által mutatott (kerekített) érték akkor éri el a 130-at, amikor $\overline{v}=129{,}5$ km/h, ami $t=185\,t_0$-nál következik be. Ha például $t_0=5~\text{perc}=\tfrac1{12}$ óra, akkor a műszer szerint 15,4 óra múlva ,,felejthetjük el'' a kezdeti késésünket. Ha viszont $t_0=1$ óra, akkor $t=185$ óra hosszan, vagyis majdnem 8 napon keresztül kellene folyamatosan a megengedett legnagyobb sebességgel haladnunk ahhoz, hogy az átlagsebességünk (kerekítve) 130 km/h legyen. Ezt – különböző okok miatt – nyilván nem tehetjük meg.
