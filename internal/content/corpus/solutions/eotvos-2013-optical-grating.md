---
id: eotvos-2013-optical-grating
source: eotvos
language: hu
solution_language: hu
translated: false
problem: eotvos-2013-optical-grating
figure_files: []
provenance_note: "Official Eötvös Competition 2013 solution, Problem 2, by Vigh Máté. Structured from Mathpix OCR of the cached solutions PDF (cache/phoxiv/eotvos/mmd/2013_S.mmd)."
---

**Megoldás.**

Legyen $d=30\ \mu\mathrm{m}$. Ha minden második rést kitakarnánk, akkor a megmaradó
rések $4d$ periódusú szokásos rácsot alkotnának. Az $n$-edik maximum helye kis
szögekre:

$$
4d\sin\alpha_n=n\lambda,
\qquad
x_n\simeq L\sin\alpha_n=n\frac{\lambda L}{4d}.
$$

A teljes rács két, egymással $d$ távolsággal eltolt ilyen réssorból áll. Az $n$-edik
irányban a két sorozat közötti útkülönbség $n\lambda/4$, ezért a négy eset:

- $n=4k$: a két amplitúdó azonos fázisú, így az intenzitás az egy réssorra jutó
  érték négyszerese;
- $n=4k+1$ vagy $n=4k+3$: a fáziskülönbség $\pi/2$ vagy $3\pi/2$, ezért az
  intenzitás kétszeres;
- $n=4k+2$: a fáziskülönbség $\pi$, ezért teljes kioltás történik.

A nagy intenzitású maximumok távolsága

$$
\Delta x=\frac{\lambda L}{d}
 =\frac{660\ \mathrm{nm}\cdot2\ \mathrm{m}}{30\ \mu\mathrm{m}}
 =4{,}4\ \mathrm{cm}.
$$

Közöttük az $x_n=n\lambda L/(4d)$ helyeken a keskeny diffrakciós vonalak rendre
négyszeres, kétszeres, nullás, kétszeres intenzitással ismétlődnek.
