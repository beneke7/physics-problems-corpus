---
id: komal-P5740
source: komal
language: hu
translated: false
problem: komal-P5740
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 $T$ hőmérsékleten az egy szabadsági fokra jutó energia $\tfrac{1}{2}kT$, amiből egy nitrogén molekula átlagos sebessége
 $\overline{v}=\sqrt{\frac{3kT}{m}},$
 ahol $m=4{,}67\cdot 10^{-26}\,\mathrm{kg}$ a nitrogén molekula tömege, és $k=1{,}38\cdot 10^{-23}\,\mathrm{J/K}$ a Boltzmann-állandó. $T=24\,^\circ\mathrm{C}=297\,\mathrm{K}$-t véve $\overline{v}=513\,\mathrm{m/s}$ adódik. Ezzel a sebességgel mozogva egy molekula a $\Delta s=65\,\mathrm{nm}$ szabad úthossznyi távolságot $\tau=\Delta s/\overline{v}=1{,}27\cdot 10^{-10}\,\mathrm{s}$ alatt teszi meg, tehát átlagosan ennyi idő telik el az ütközések között. Ennek megfelelően egy molekula $N=2{,}84\cdot 10^{13}$-szor ütközik egy óra alatt.
 A kérdés tehát az, milyen messze lesz egy molekula a kiinduló pontjától $N$ ütközés után. A becslésünk során feltételezzük, hogy kiszemelt molekula a soron következő ütközések között mindig $\Delta s$ utat tesz meg, és hogy az ütközések során nincs kitüntetett irány, az ütközés előtti és az ütközés utáni sebesség egymáshoz viszonyított iránya ugyanazzal a valószínűséggel vehet fel bármilyen értéket. Ebből következik, hogy két egymást követő ütközés közötti $\boldsymbol{\Delta s}$ elmozdulás $<\!\boldsymbol{\Delta s}\!>$ várható értéke, így a teljes elmozdulás várható értéke is nulla, ezért érdemes a kiindulástól mért távolság négyzetének a várható értékével foglalkozni. (A szokásos módon a vektor mennyiségeket félkövér, ezek nagyságát normál betűkkel, egy mennyiség várható értékét, tehát a lehetséges értékeknek a megvalósulás valószínűségével súlyozott átlagát pedig a mennyiség $<\ldots >$ csúcsos zárójelbe tételével jelöljük.) Legyen $\boldsymbol{r}_n$ és $\boldsymbol{r}_{n+1}$ a molekula pozíciója az $n$-edik és $n+1$-edik ütközés mentes szakasz megtétele után! Nyilván
 $r^2_{n+1}=r^2_n+2\boldsymbol{r}_n\boldsymbol{\Delta s}+(\Delta s)^2,$
 következésképp az egyes tagok várható értékére is igaz, hogy
 $<\!r^2_{n+1}\!>=<\!r^2_n\!>+2<\!\boldsymbol{r}_n\boldsymbol{\Delta s}\!>+(\Delta s)^2.$
 Könnyen beláthatjuk, hogy a jobb oldal második tagja nulla. Mivel $\boldsymbol{\Delta s}$ iránya $\boldsymbol{r}_n$-től függetlenül ugyanakkora valószínűséggel bármi lehet, a szorzat minden lehetséges értéke és annak a mínusz egyszerese azonos súllyal szerepel benne, tehát
 $<\!\boldsymbol{r}_n\boldsymbol{\Delta s}\!>=0,$
 így
 $<\!r^2_{n+1}\!>= <\!r^2_n\!>+(\Delta s)^2.$
 Ez egy rekurziós formula, aminek a megoldása
 $<\!r^2_n\!>=n(\Delta s)^2.$
 Ennek alapján $r_N$ becsült értéke
 $r_N\simeq\sqrt{<\!r^2_N\!>}=\sqrt{N}\Delta s=0{,}35\,\mathrm{m}.$
