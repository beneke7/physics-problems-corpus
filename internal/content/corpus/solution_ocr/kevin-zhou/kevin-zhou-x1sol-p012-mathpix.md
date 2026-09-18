---
id: solution-ocr-kevin-zhou-x1sol-p012
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-p012]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 12. Neutrinos are quantum particles with extremely low masses. Because their masses are so low, they are almost always produced moving near the speed of light. In the Sun, neutrinos are produced in a superposition of two types, one with mass $m _ { 1 }$ and another with mass $m _ { 2 }$.
    (a) Suppose the neutrino is produced with definite energy $E$. The part of the neutrino wave with mass $m _ { 1 }$ has wavenumber $k _ { 1 }$, and the part with mass $m _ { 2 }$ has wavenumber $k _ { 2 }$. Find an approximate expression for $k _ { 1 } - k _ { 2 }$ in the ultrarelativistic limit $E \gg m _ { 1 } , m _ { 2 }$.
    (b) Find the distance $L$ that the neutrino travels so that the relative phase between these waves changes by $2 \pi$. This is the characteristic wavelength of "neutrino oscillations". Evaluate it numerically assuming the typical values $E = 10 \mathrm { keV } , m _ { 1 } c ^ { 2 } = 0.010 \mathrm { eV }$, and $m _ { 2 } c ^ { 2 } = 0.013 \mathrm { eV }$.
Solution. (a) Before starting, we should use the ultrarelativistic approximation to simplify things. We note that $c ^ { 2 } p ^ { 2 } = E ^ { 2 } - m ^ { 2 } c ^ { 4 }$, and taking the square root gives
$$
p = \frac { E } { c } \sqrt { 1 - \left( m c ^ { 2 } / E \right) ^ { 2 } } \approx \frac { E } { c } \left( 1 - \frac { m ^ { 2 } c ^ { 4 } } { 2 E ^ { 2 } } \right)
$$
by the binomial theorem. Using the de Broglie relation, we have
$$
k _ { 1 } - k _ { 2 } = \frac { p _ { 1 } - p _ { 2 } } { \hbar } \approx \frac { \left( m _ { 2 } ^ { 2 } - m _ { 1 } ^ { 2 } \right) c ^ { 3 } } { 2 \hbar E } .
$$
    (b) Since the wavenumber is the rate of change of phase, we simply have
$$
L = \frac { 2 \pi } { k _ { 1 } - k _ { 2 } } = \frac { 4 \pi \hbar E } { \left( m _ { 2 } ^ { 2 } - m _ { 1 } ^ { 2 } \right) c ^ { 3 } } = 360 \mathrm {~m} .
$$
Remarkably, even though the masses are so small and the energy so high, the oscillation wavelength turns out to be a macroscopically reasonable length.

## 2 Higher Dimensions


Idea 4
For a system with more than one degree of freedom, the WKB quantization condition holds for each individually,

$$
\oint p _ { i } d x _ { i } = \left( n _ { i } + \frac { \alpha _ { i } } { 2 \pi } \right) h .
$$

In this case, there can be multiple quantum states with a given energy, in which case we say that energy level is degenerate; the number of states with that energy is called the degeneracy.
