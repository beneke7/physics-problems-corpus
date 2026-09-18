---
id: komal-P5677
source: komal
language: hu
translated: false
problem: komal-P5677
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A 40 cm hosszú vörösréz vezeték ellenállása
 $R=\rho\frac{\ell}{A}=1{,}68\cdot 10^{-8}\,\Omega\mathrm{m}\cdot\frac{0{,}4\,\mathrm{m}}{\pi\cdot(0{,}001\,\mathrm{m})^2}\approx 2\,\mathrm{m}\Omega,$
 mely elhanyagolható az ellenállás $1\,\mathrm{k}\Omega$-os értéke mellett. Így az áramkörben Ohm törvénye alapján
 $I=\frac{1{,}5\,\mathrm{V}}{1\,\mathrm{k}\Omega}=1{,}5\,\mathrm{mA}$
 áram folyik.

 a) Ebben a modellben a vezetési elektronok egyenletes $v$ áramlási sebességgel mozognak. A vezeték egy adott keresztmetszetén $t$ idő alatt $nAtv$ számú elektron halad át, ahol $n$ az vezetési elektronok számsűrűsége (egységnyi térfogatban lévő elektronok száma). Így az áramsűrűség definíciója alapján:
 $I=\frac{enAtv}{t}\quad\rightarrow\quad v=\frac{I}{enA},$
 ahol $e$ az elemi töltés értéke.
 Következő lépésként számoljuk ki a vezetési elektronok számsűrűségét. Tekintsük a vörösréz egy $V$ térfogatú részét, melynek tömege $\varrho_m V$ ($\varrho_m$ a réz sűrűsége). A réz moláris tömege alapján, ebben $\rho_m V/M_\mathrm{Cu}$ anyagmennyiségű rézatom, és ugyanennyi vezetési elektron található. A vezetési elektronok darabszáma az Avogadro-állandó segítségével kapható meg: $N_A\varrho_mV/M_\mathrm{Cu}$. Innen a vezetési elektronok számsűrűsége:
 $n=\frac{N_A\varrho_m}{M_\mathrm{Cu}}.$
 Az elektronok átlagos áramlási sebessége:
 $v=\frac{IM_\mathrm{Cu}}{F\varrho_mA}=\frac{1{,}5\,\mathrm{mA}\cdot 63{,}5\cdot 10^{-3}\,\mathrm{kg/mol}}{96500\,\mathrm{C/mol}\cdot 8960\,\mathrm{kg/m^3}\cdot\pi\cdot(0{,}001\,\mathrm{m})^2}=3{,}5\cdot10^{-8}\;\textrm{m/s}.$
 A megoldásban az elektrokémiából ismert Faraday-állandó $F=e\cdot N_A$ értéke jelent meg.

 b) Ekkora sebességgel az elektronok a $0{,}2\,\mathrm{m}$ hosszú utat a telep és az ellenállás között 66 nap alatt tennék meg.

 Megjegyzés. Ebben a feladatban az elektronok mozgását egy klasszikus fizikai modellel, az ún. Drude-modellel írtuk le. Az elektronok kvantummechanikai tulajdonságait figyelembe vevő modellek árnyaltabb képet adnak a vezetési jelenségekről. Ezekben a modellekben a vezetési elektronoknak csak töredéke vesz részt a töltéstranszportban, viszont a sebességük jóval nagyobb, közelítőleg $10^6\,\mathrm{m/s}$ értékűek. A többi vezetési elektron nem okoz effektív áramsűrűséget, mert ugyanolyan mértékben mozognak a térrel megegyező, mint azzal ellentétes irányba. Természetesen az összes vezetési elektron sebességének az átlaga a modelltől függetlenül megegyezik a fent kapottal.
