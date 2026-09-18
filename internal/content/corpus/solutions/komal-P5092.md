---
id: komal-P5092
source: komal
language: hu
translated: false
problem: komal-P5092
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Ha a dugattyút egy kicsiny $x$ távolsággal elmozdítjuk – mondjuk – jobb felé, akkor a jobb oldali féltérben lévő gáz térfogata $\Delta V=-xA$ értékkel megváltozik (lecsökken), a nyomása pedig
 $p_\text{jobb}=p_0+\Delta p$
 értékre növekszik. A héliumgáz belső energiája $E=\frac32 pV$, a belső energia változása tehát
 $\Delta E=\frac32(p_0+\Delta p)(V_0-xA)-\frac32p_0V_0\approx \frac32p_0\Delta V+\frac32V_0\Delta p.$
 (A $\Delta p\cdot \Delta V$-vel arányos, ún. másodrendűen kicsiny tagot elhanyagoltuk.) A folyamat során a gáz
 $W'=p_0\Delta V=p_0Ax$
 tágulási munkát végez, miközben – a jó hószigetelés miatt – nem vesz fel hőt: $Q=0$. A hőtan I. főtétele szerint
 $\Delta E+W'=Q=0,$
 vagyis
 $\frac{\Delta p}{p_0}+\frac{5}{3}\frac{\Delta V}{V_0}=0.$

 Megjegyzés. A fenti összefüggést úgy is megkaphatjuk, hogy a $pV^{5/3}=\text{állandó}$ adiabatikus állapotegyenlet bal oldalának képezzük a kicsiny megváltozását, és azt nullával tesszük egyenlővé.

 Látható, hogy a nyomás növekedése – közelítőleg – a dugattyú $x$ elmozdulásával arányos, így a bal oldali térrészben a gáz nyomása ugyanilyen mértékben lecsökken,
 $p_\text{bal}=p_0-\Delta p$
 nagyságú lesz. A dugattyúra ható eredő erő a dugattyú $x$ elmozdulása esetén:
 $F=\left(p_\text{bal}-p_\text{jobb}\right)A=-\frac{10}{3}\frac{A^2p_0}{V_0}\cdot x\equiv -Dx.$
 Ez az erőtörvény éppen olyan alakú, mint amilyen egy $D$ rugóállandójú rugó esetében lenne. Ennek megfelelően az $m$ tömegű dugattyú mozgása kis elmozdulások esetén harmonikus rezgőmozgás lesz, melynek rezgésideje
 $T=2\pi\sqrt{\frac{m}{D}}=2\pi\sqrt{\frac{3\,mV_0}{10\,p_0A^2}}.$
