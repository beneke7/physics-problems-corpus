---
id: komal-P5619
source: komal
language: hu
translated: false
problem: komal-P5619
figure_files: []
provenance_note: "KöMaL official solution (Hungarian)"
---

**Megoldás. **
 Az $R$ sugarú Föld felszínéhez viszonylag közeli körpályán keringő $m$ tömegű űrszonda sebessége (az első kozmikus sebesség)
 $m\frac{v_1^2}{R}=mg$
 mozgásegyenletnek megfelelően
 $(1)$ $v_1=\sqrt{Rg}.$
 Az $M$ tömegű Föld felszínénél a nehézségi gyorsulás:
 $g=\gamma\frac{M}{R^2},$
 ahonnan
 $(2)$ $\gamma M=gR^2.$
 a) Az űrszonda $H$ emelkedési magassága az energiamegmaradás törvényéből kapható meg:
 $\frac{1}{2}mv_1^2-\gamma\frac{Mm}{R}=0-\gamma\frac{Mm}{R+H}.$
 Innen (1) és (2) ismeretében adódik, hogy
 $\frac{Rg}{2}=gR^2\left(\frac{1}{R}-\frac{1}{R+H}\right),$
 ahonnan $H=R$ következik. A szonda tehát földsugárnyi magasságig emelkedik a Föld felszíne fölé.

 b) A szonda pályája egy olyan ellipszis feleként fogható fel, aminek fél nagytengelye $R$, a fél kistengelye ($\varepsilon)$ pedig sokkal kisebb $R$-nél. Egy ilyen ellipszispályán mozgó űrszonda teljes keringési ideje (ha a Földet egy $M$ tömegű tömegponttal helyettesítenénk) Kepler 3. törvénye szerint ugyanakkora lenne, mint a földközeli körpályán mozgó műholdé:
 $T_\textrm{ellipszis}=\frac{2R\pi}{v_1}=2\pi\sqrt{\frac{R}{g}}\approx 84\,\mathrm{min}.$
 A feladatban szereplő űrszonda azonban csak az ellipszis felét futja be, mozgásának ideje tehát (Kepler 2. törvénye szerint)
 $T_\textrm{félellipszis}= \frac{\tfrac{1}{2}R\varepsilon\pi+R\varepsilon}{R\varepsilon\pi}T_\textrm{ellipszis}=\left(\frac{1}{2}+\frac{1}{\pi}\right)\cdot 84\,\mathrm{min}\approx 68\,\mathrm{min}.$
 Az utolsó lépésben felhasználtuk, hogy az ,,elfajult ellipszis'' fókuszpontja határesetben a nagytengely végpontjához kerül, a vezérsugár által súrolt terület pedig az ellipszis félterületének és egy $2\varepsilon$ alapú, $R$ magasságú háromszög területének az összege.

 Megjegyzés. A b) kérdésre integrálszámítás alkalmazásával is válaszolhatunk. A felfelé emelkedő szonda sebessége a Föld középpontjától $xR$ távolságban ($1\le x\le 2$) az energiamegmaradás tétele szerint
 $v(x)=\sqrt{Rg\left(2/x-1\right)},$
 és így a felfelé mozgás ideje
 $\frac{1}{2}T_\textrm{félellipszis}=\int_1^2\frac{1}{v(x)}\,\mathrm{d}(Rx)=\sqrt{\frac{R}{g}}\int_1^2\frac{1}{\sqrt{2/x-1}}\,\mathrm{d}x.$
 A Geogebra program szerint
 $\int_1^2\frac{1}{\sqrt{2/x-1}}\,\mathrm{d}x\approx 2{,}57,$
 a WolframAlpha pedig a ,,pontos'' $1+\frac{\pi}{2}$ értéket is megadja. Ennek megfelelően $T_\textrm{félellipszis}\approx 68\,\mathrm{min}$.
