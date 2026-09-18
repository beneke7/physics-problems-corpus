---
id: komal-P5392
source: komal
language: hu
translated: false
problem: komal-P5392
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A $H$ magasságig eljutó vízsugár a csőből $v_0=\sqrt{2gH}$ sebességgel áramlik ki. A víz sebessége $h$ magasságban
 $v=\sqrt{v_0^2-2gh}=\sqrt{2g(H-h)}.$
 A labdát egy kicsiny $\Delta t$ idő alatt $\Delta V=\Phi\Delta t$ térfogatú, tehát $\Delta m=\varrho\Phi\Delta t$ tömegű víz éri el ($\varrho$ a víz sűrűsége), aminek a lendülete: $I=v\Delta m=v\varrho\Phi\Delta t$. Ez a lendület a labdával történő ,,ütközés'' (szétspriccelés) után nulla lesz, vagyis az időegységre eső változása:
 $\frac{\Delta I}{\Delta t}= -v\varrho\Phi= -\varrho\Phi\sqrt{2g(H-h)}.$
 Ezt a lendületváltozást a kiszemelt ,,vízdarabkákra'' ható külső erő, $-mg$ okozza. (A negatív előjel azt fejezi ki, hogy a labda lefelé, a lendülettel ellentétest irányban nyomja a vizet.) Newton törvénye szerint
 $\frac{\Delta I}{\Delta t}=-mg,$
 vagyis $\varrho\Phi\sqrt{2g(H-h)}=mg$, azaz a keresett magasság:
 $h=H-\frac{m^2 g}{2\rho^2\Phi^2}.$
