---
id: komal-P4925
source: komal
language: hu
translated: false
problem: komal-P4925
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás.**
 A ,,gömbbe zárt'' elektron a gömb belsejében szabadon mozoghat, de a gömb falán nem képes áthatolni, emiatt a helyének bizonytalansága (határozatlansága) a gömb $d$ átmérőjénél nem nagyobb. Ez érvényes mindhárom térbeli koordinátára, tehát
 $\Delta x\leq d,\qquad \Delta y\leq d,\qquad \Delta z\leq d.$
 A Heisenberg-féle határozatlansági reláció szerint az elektron sebességének komponenseire érvényes:
 $v_x\geq \frac{\hbar}{2m\Delta x}\geq \frac{h}{4\pi md}, \qquad v_y\geq \frac{\hbar}{2m\Delta y}\geq \frac{h}{4\pi md}
\qquad v_z\geq \frac{\hbar}{2m\Delta z}\geq \frac{h}{4\pi md}.$
 ahol $\hbar=h/(2\pi)\approx 1\cdot10^{-34}$ J, $m=9\cdot10^{-31}~$kg az elektron tömege és $d= 10^{-11}$ m.
 A gömbbe zárt elektron energiája ezek szerint
 $E=\frac{1}{2}m\left(v_x^2+v_y^2+v_z^2\right)\geq \frac{3}{32\pi^2}\frac{h^2}{d^2m}\approx 46~{\rm aJ}\approx 0{,}3~{\rm keV}.$

 Megjegyzések. 1. A kiszámított energia alsó határa sokkal kisebb, mint az elektron $mc^2=510~$keV nyugalmi energiája, ezért jogos volt a mozgási energia nemrelativisztikus képletének alkalmazása.
 2. Az alkalmazott becslés nagyságrendileg helyesen adja meg a bezárt elektron energiáját, de az energia számszerű értéke – az alkalmazott közelítéstől függően – más is lehet. (A határozatlansági relációt gyakran $\Delta (mv)\cdot \Delta x \ge h$ alakban írják fel; ebből az energiára kb. 50 keV adódik.) Ez a becslés éppúgy elfogadható, mint a fentebb megadott érték.
 3. A ,,dobozba'' vagy gömb alakú ,,üregbe'' zárt elektron csak egy leegyszerűsített modell, ilyen helyzet ténylegesen nem valósítható meg. (Feltehető a kérdés: miből kellene készíteni egy ilyen üreg falát.) A kocka vagy gömb alakú üreg csak modellezi pl. a hidrogénatomot, ahol az elektront az atommag Coulomb-erőtere ,,zárja be'' egy kb. $10^{-10}$ m átmérőjű térrészbe.
