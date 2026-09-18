---
id: komal-P5538
source: komal
language: hu
translated: false
problem: komal-P5538
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 Legyen az alsó merevítő gyűrű felett $y$ magasságban a kötél távolsága a forgástengelytől $r(y)$. Az $m$ tömegű hangyára az $\omega$ szögsebességgel forgó koordináta-rendszerben $mg$ nagyságú, ,,valódi'' függőleges irányú nehézségi erő, valamint $mr\omega^2$ nagyságú, vízszintes irányú centrifugális erő hat. Az eredő erő (a hangya által érzett nehézségi erő) párhuzamos a kötél érintőjével, tehát
 $\frac{mr\omega^2}{mg}=-\frac{\Delta r}{\Delta y}.$
 ($\Delta r$ a forgómozgás pályasugarának kicsiny megváltozása, ha a forgástengellyel párhuzamos irányú elmozdulás egy kicsiny $\Delta y$ érték.)
 A fenti összefüggés szerint
 $\Delta r(y)=-\frac{\omega^2}{g}r(y)\cdot \Delta y.$
 Ez az egyenlet ugyanolyan alakú, mint a radioaktív bomlások $\Delta m(t)=-\lambda m(t)\cdot \Delta t$ törvénye, ezért a megoldása analóg módon:
 $r(y)=r(0)\,\mathrm{e}^{-(\omega^2/g)y}.$
 A megadott számadatok szerint $r(0)=2\,\mathrm{m}$, $y=3\,\mathrm{m}$ és $r(y)=1\,\mathrm{m}$, így
 $\omega=\sqrt{-\ln\left(\frac{r(y)}{r(0)}\right)\frac{g}{y}}=\sqrt{\ln 2\,\frac{9{,}8\,\mathrm{m/s^2}}{3\,\mathrm{m}}}=1{,}5\,\frac{1}{\mathrm{s}},$
 a fordulatszám pedig
 $f=\frac{\omega}{2\pi}=0{,}24\,\frac{1}{\mathrm{s}}.$
 A mászóka tehát kb. 4 másodpercenként fordul körbe.
