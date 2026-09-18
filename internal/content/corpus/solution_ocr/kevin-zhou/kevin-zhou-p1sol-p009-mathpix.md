---
id: solution-ocr-kevin-zhou-p1sol-p009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 9. In this problem we'll continue the dimensional analysis of the Schrodinger equation.

(a) Estimate the typical energy scale of quantum states of the hydrogen atom, as well as the typical "velocity" of the electron, using dimensional analysis.
(b) Do the same for one-electron helium, the system consisting of a helium nucleus (containing two protons) and one electron.
(c) Estimate the electric field needed to rip the electron off the hydrogen atom.

Solution. (a) Recall the electrostatic potential energy formula, $E = k q ^ { 2 } / r$. We have a length scale, $a _ { 0 }$ to replace $r$. For velocity, we use $E \sim m v ^ { 2 }$, giving

$$
E \sim \frac { m e ^ { 4 } } { \left( 4 \pi \epsilon _ { 0 } \right) ^ { 2 } \hbar ^ { 2 } } , \quad v \sim \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } \hbar } .
$$

In fact, the binding energy of the hydrogen atom in its ground state is

$$
E = \frac { m e ^ { 4 } } { 2 \left( 4 \pi \epsilon _ { 0 } \right) ^ { 2 } \hbar ^ { 2 } } = 13.6 \mathrm { eV }
$$

which is a constant known as the Rydberg. So the dimensional argument (keeping the factors of $4 \pi$ ) gets the answer right to a factor of 2.

(b) Adding the second proton would double the charge inside the nucleus, so the expressions for energy and velocity should stay the same except $e ^ { 2 }$ would be replaced with $2 e ^ { 2 }$ (not 4 , since the electron charge stays the same) and thus the energy would be $4 e ^ { 4 }$. In general, with $Z$ as the atomic number,
$$
E \sim \frac { m Z ^ { 2 } e ^ { 4 } } { \left( 4 \pi \epsilon _ { 0 } \right) ^ { 2 } \hbar ^ { 2 } } , \quad v \sim \frac { Z e ^ { 2 } } { 4 \pi \epsilon _ { 0 } \hbar } .
$$
(c) Physically, the work the electric field does by moving the electron across the radius of its orbit should be enough to overcome its binding energy to the proton. This also tells us how to set up the dimensional analysis; we have electric field
$$
| \mathbf { E } | \sim \frac { E } { e a _ { 0 } } \sim \frac { m _ { e } ^ { 2 } e ^ { 5 } } { \left( 4 \pi \epsilon _ { 0 } \right) ^ { 3 } \hbar ^ { 4 } } \sim 10 ^ { 12 } \mathrm {~V} / \mathrm { m } .
$$
This is a tremendously large electric field!
All of the results above are not that accurate, but they become much more accurate if we replace $\epsilon _ { 0 }$ with $4 \pi \epsilon _ { 0 }$. That in turn makes sense because these factors always appear together in electromagnetism.


## Idea 3: Buckingham Pi Theorem

Dimensional analysis can't always pin down the form of the answer. If one has $N$ quantities with $D$ independent dimensions, then one can form $N - D$ independent dimensionless quantities. Dimensional analysis can't say how the answer depends on them.

A familiar but somewhat trivial example is the pendulum: its period depends on $L , g$, and the amplitude $\theta _ { 0 }$, three quantities which contain two dimensions (length and time). Hence we can form one dimensionless group, which is clearly just $\theta _ { 0 }$ itself. The period of a pendulum is $T = f \left( \theta _ { 0 } \right) \sqrt { L / g }$.
