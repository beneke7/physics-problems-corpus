---
id: solution-ocr-kevin-zhou-w1sol-p016
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-w1-p016]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 16. Consider transverse waves on a horizontal string with tension $T$ and mass density $\mu$. The string is attached to the ceiling by a large number of vertical springs, so that if the entire string is pulled down, it will oscillate with angular frequency $\omega _ { 0 }$.

(a) Find the wave equation for waves on this string.
(b) By guessing sinusoidal solutions, find $\omega ( k )$ and the minimum possible angular frequency.
(c) Compute the phase and group velocity for wavepackets of angular frequency $\omega$.
(d) What actually happens if you grab one end of the string and try to wiggle it at a frequency below the minimum possible frequency?

If we treat the string as a quantum system, excitations of the string are particles with $E ( p )$ determined by the function $\omega ( k )$ you found, along with the de Broglie relations $E = \hbar \omega$ and $p = \hbar k$. Therefore, there is a minimum energy for excitations. In a relativistic and quantum context, this means that all the particles must be massive; the minimum energy is $m c ^ { 2 }$. This is a toy model for how the Higgs field gives particles mass.

Solution. (a) There is now an additional acceleration of $- \omega ^ { 2 } z$ due to the springs, so the wave equation is

$$
\frac { \partial ^ { 2 } z } { \partial t ^ { 2 } } = \frac { T } { \mu } \frac { \partial ^ { 2 } z } { \partial x ^ { 2 } } - \omega _ { 0 } ^ { 2 } z .
$$

(b) Guessing a sinusoidal solution gets
$$
\omega ^ { 2 } = \frac { T } { \mu } k ^ { 2 } + \omega _ { 0 } ^ { 2 }
$$
and the minimum possible angular frequency is $\omega = \omega _ { 0 }$.


(c) The phase velocity $v _ { p } = \omega / k$ is
$$
v _ { p } = \frac { \omega } { \sqrt { \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } } } \sqrt { \frac { T } { \mu } }
$$
The group velocity is $d \omega / d k$, and we have
$$
2 \omega \frac { d \omega } { d k } = \frac { T } { \mu } ( 2 k )
$$
so therefore
$$
v _ { g } = \frac { T } { \mu } \frac { 1 } { \sqrt { T / \mu + \omega _ { 0 } ^ { 2 } / k ^ { 2 } } } = \sqrt { \frac { T } { \mu } } \sqrt { \frac { \omega ^ { 2 } - \omega _ { 0 } ^ { 2 } } { \omega ^ { 2 } } } .
$$
(d) In this case, you won't manage to create any propagating waves. The part of the string near you will just move up and down, following your hand, analogous to how the position of a mass on a spring simply follows the force if the driving frequency is much lower than the resonant frequency. Or, to say this more formally, the wave solutions of the frequency corresponding to your hand's driving are exponentially decaying, rather than oscillating and propagating, formally because the solution for $k$ is imaginary.
