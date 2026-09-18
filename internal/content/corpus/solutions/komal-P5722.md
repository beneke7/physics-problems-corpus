---
id: komal-P5722
source: komal
language: hu
translated: false
problem: komal-P5722
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A becsléshez a Heisenberg-féle határozatlansági relációt használjuk. Ennek értelmében a helymeghatározás $\Delta x$ és az impulzus $\Delta p$ bizonytalansága összefügg:
 $\Delta x\Delta p\geq\frac{h}{4\pi},$
 ahol $h$ a Planck-állandó ($6{,}63\cdot 10^{-34}\,\mathrm{Js}$). $\Delta x$-nek az atommag átmérőjét vehetjük, ami a $D=2R_0\sqrt[3]{A}$ formában adható meg. Itt $R_0=1{,}42\cdot 10^{-15}\,\mathrm{m}$, és $A$ a nukleonok száma az adott atommagban (praktikusan az adott elem relatív atomtömege). Ez tág határok között változhat, alumínium esetében 27, ólom esetében 207, de ez alig befolyásolja a becslést, mert a köbgyökük csak egy kettes faktorban tér el. Használjuk az ólomhoz tartozó értéket! Ennek alapján
 $\Delta p\geq\frac{h}{8\pi R_0\sqrt[3]{A}}\simeq 3{,}1\cdot 10^{-21}\,\mathrm{\frac{kg\,m}{s}}.$
 Az elektron tömege $m_\mathrm{e}=9{,}1\cdot 10^{-31}\,\mathrm{kg}$, tehát a klasszikus fizika szerint az impulzus bizonytalanságnak megfelelő sebességbizonytalanság:
 $\Delta v=\frac{\Delta p}{m_\mathrm{e}}=3{,}4\cdot 10^9\,\mathrm{\frac{m}{s}}.$
 Ez körülbelül a fénysebesség tizenegyszerese, tehát azt mondhatjuk, hogy egy nagyságrenddel nagyobb, mint az.

 Megjegyzések. 1. Becslésünkben egy dimenzióra korlátozódtunk, de ez a nagyságrenden nem változtat: ha figyelembe vesszük, hogy háromdimenziós kiterjedésről van szó, az legfeljebb egy $\sqrt{3}$-as faktort jelenthet csak.

 2. Eredményünkből nem következik, hogy az elektront ne lehetne – legalábbis elvileg – egy ilyen kis térrészbe lokalizálni, csak az, hogy ilyenkor nem használhatjuk a nemrelativisztikus megfontolásokat.
