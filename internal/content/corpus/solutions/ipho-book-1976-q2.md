---
id: ipho-book-1976-q2
problem: ipho-book-1976-q2
source: ipho
language: hu
solution_language: hu
solution_type: official
source_pdf: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf"
figure_files: []
provenance_note: "kkk/Korábbi kunfalvi anyagok 2/IPhO_konyv.pdf; Mathpix OCR"
verification_status: pending
---

## Megoldás 2

A hélium moláris tömege $M=4 \mathrm{~g} / \mathrm{mol}$, ezzel megadhatjuk a két $V=11,2 \mathrm{dm}^{3}$ térfogatú oldalon lévó, $m=2 \mathrm{~g}$ illetve 12 g tömegứ gázok nyomásait $(T=273 \mathrm{~K})$ :
\[
p=\frac{m R T}{M V} .
\]
Kiszámítva, kezdetben a bal oldali részben 608 kPa, a jobb oldaliban 101 kPa a nyomás.

Először a szelep kinyílásának a feltételét keressük. A jobb oldali részre az adiabatikus összefüggést alkalmazzuk $\kappa=5 / 3$ felhasználásával:
\[
101 \mathrm{kPa} \cdot\left(11,2 \mathrm{dm}^{3}\right)^{5 / 3}=608 \mathrm{kPa} \cdot V_{1}{ }^{5 / 3},
\]
innen a jobb oldali térfogat a szelep kinyílásakor: $V_{1}=3,82 \mathrm{dm}^{3}$. Az állapotegyenletből a jobb oldali részben ekkor a hőmérséklet $T_{1}=560 \mathrm{~K}$.

Most kinyílik a szelep. A dugattyút fogjuk, a gázok keverednek. A keveredés után létrejövő hőmérséklet:
\[
T_{2}=\frac{12 \mathrm{~g} \cdot 273 \mathrm{~K}+2 \mathrm{~g} \cdot 560 \mathrm{~K}}{14 \mathrm{~g}}=314 \mathrm{~K} .
\]

Az egész gázmennyiség adiabatikus összenyomása következik a kezdeti $V+$ $+V_{1}=15,02 \mathrm{dm}^{3}$-ról $11,2 \mathrm{dm}^{3}$-re. Az adiabatikus állapotegyenlet $T V^{\kappa-1}=$ áll. alakját használva:
\[
314 \mathrm{~K} \cdot\left(15,02 \mathrm{dm}^{3}\right)^{2 / 3}=T_{3} \cdot\left(11,2 \mathrm{dm}^{3}\right)^{2 / 3},
\]
innen $T_{3}=382 \mathrm{~K}$.
A teljes folyamat során a gáz és a környezet között nincs hőcsere, így a munkavégzés megegyezik a gáz a belső energia megváltozásával.
\[
W=\Delta E=\frac{3}{2} \cdot \frac{14 \mathrm{~g}}{4 \mathrm{~g} / \mathrm{mol}} \cdot 8,31 \frac{\mathrm{~J}}{\mathrm{~K} \mathrm{~mol}} \cdot(382 \mathrm{~K}-273 \mathrm{~K})=4760 \mathrm{~J} .
\]
Ez a munkavégzés azonban tartalmazza a külső légnyomás által végzett munkát is:
\[
W_{1}=10^{5} \mathrm{~Pa} \cdot 0,0112 \mathrm{~m}^{3}=1120 \mathrm{~J} .
\]
Így az általunk végzett összes munka:
\[
W_{2}=W-W_{1}=3640 \mathrm{~J} .
\]
