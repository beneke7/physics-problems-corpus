---
id: solution-ocr-kevin-zhou-p1sol-ex004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 4
The wavefunction $\psi ( x , y , z )$ of the electron in a hydrogen atom obeys the Schrodinger equation

$$
- \frac { \hbar ^ { 2 } } { 2 m } \left( \frac { \partial ^ { 2 } } { \partial x ^ { 2 } } + \frac { \partial ^ { 2 } } { \partial y ^ { 2 } } + \frac { \partial ^ { 2 } } { \partial z ^ { 2 } } \right) \psi - \frac { e ^ { 2 } } { 4 \pi \epsilon _ { 0 } r } \psi = E \psi .
$$

Estimate the size of the hydrogen atom.

Solution
By solving this equation, we can find a discrete set of solutions $\psi ( x , y , z )$, which correspond to a discrete set of allowed energies $E$. However, to estimate the typical size of the solutions, we can just use dimensional analysis. The dimensionful input parameters in the equation above are $m , \hbar$, and $e ^ { 2 } / 4 \pi \epsilon _ { 0 }$, which have dimensions

$$
[ m ] = \mathrm { kg } , \quad [ \hbar ] = \mathrm { J } \cdot \mathrm {~s} = \mathrm { kg } \mathrm {~m} ^ { 2 } \mathrm {~s} ^ { - 1 } , \quad \left[ e ^ { 2 } / 4 \pi \epsilon _ { 0 } \right] = \mathrm { J } \cdot \mathrm {~m} = \mathrm { kg } \mathrm {~m} ^ { 3 } \mathrm {~s} ^ { - 2 } .
$$

Doing dimensional analysis, the only length scale is the Bohr radius,

$$
a _ { 0 } = \frac { 4 \pi \epsilon _ { 0 } \hbar ^ { 2 } } { m e ^ { 2 } } \sim 10 ^ { - 10 } \mathrm {~m} .
$$

I've thrown in a $4 \pi$ above because $\epsilon _ { 0 }$ shows up in the combination $4 \pi \epsilon _ { 0 }$. The dimensional analysis would be valid without this factor, but as you'll see in problem 11, if you don't include it then annoying compensating factors of $4 \pi$ will appear elsewhere.

Classically (i.e. without $\hbar$ ), there is no way to form a length, and hence there should be no classically stable radius for the atom. (This was one of the arguments used by Bohr to motivate quantum mechanics; it appears in the beginning of his paper introducing the Bohr model.) Once we introduce $\hbar$, there are three dimensionful parameters in the problem, as listed above. And there are exactly three fundamental dimensions. So there is only one way to create a length, which we found above, one way to create a time, one way to create an energy, and so on. This means that the solutions to the Schrodinger equation above look qualitatively the same no matter what these parameters are; all that changes are the overall length, time, and energy scales. In problem 11, you'll investigate how this conclusion changes when we add more dimensionful parameters.


Dimensional analysis is especially helpful with scaling relations. For example, a question might ask you how the radius of the hydrogen atom would change in a world where the electron mass was twice as large. You would solve this problem in the exact same way as the example above, using dimensional analysis to show that $a _ { 0 } \propto 1 / m$.
