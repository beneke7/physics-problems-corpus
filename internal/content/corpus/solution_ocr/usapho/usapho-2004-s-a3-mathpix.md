---
id: solution-ocr-usapho-2004-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2004_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2004-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
A3. a. In order for minimum sound intensity to be heard in the region along the $x$-axis with $x >$ $x _ { 0 }$. the distance between sources must be an odd half-integer multiple of the wavelength $\%$.

$$
2 x _ { n } = ( 2 n \quad 1 ) \frac { \lambda } { 2 } = ( 2 n - 1 ) \frac { n } { 2 f } \quad n = 1,2,3 , \ldots
$$

where $v = 340 \mathrm {~m} / \mathrm { s }$, the velocity of sound in air, and $175 \mathrm {~Hz} \leq f \leq 625 \mathrm {~Hz}$, the frequency of the sound that produces minimum intensity, Solving for the frequency

$$
f _ { n } = ( 2 n - 1 ) \frac { v ^ { \prime } } { 4 x _ { 0 } } = ( 2 n - 1 ) \frac { ( 340 \mathrm {~m} / \mathrm { s } ) } { 4 ( 0.85 \mathrm {~m} ) } - ( 2 n - 1 ) ( 100 \mathrm {~Hz} ) .
$$

The frequencies in the possible range are

$$
f _ { 2 } = 300 \mathrm {~Hz} \quad \text { and } \quad f _ { 1 } = 500 \mathrm {~Hz}
$$

b. In the region between the sources, source $S _ { 1 }$ emits a wave $\Psi _ { 1 }$ that travels to the left and source $S _ { 2 }$ emits a wave $\Psi _ { 2 } ^ { \prime }$ that travels to the right.

$$
\Psi _ { 1 } = A \sin \left( \omega t + k \left( x - x _ { 0 } \right) \right) \quad \Psi _ { 2 } - A \sin \left( \omega t - k \left( x + x _ { 0 } \right) \right)
$$

where

$$
k = \frac { 2 \pi } { \lambda } \quad \text { and } \quad \omega = 2 \pi f
$$


Adding the waves to determine the resultant wave

$$
\begin{gathered}
\Psi = \Psi _ { 1 } + \Psi _ { 2 } = A \sin \left( \omega t + k \left( x - x _ { 0 } \right) \right) + A \sin \left( \omega t - k \left( x + x _ { 0 } \right) \right) \\
\Psi = A \sin \left( \omega t - k x _ { 0 } \right) \cos ( k x ) + A \cos \left( \omega t - k x _ { 0 } \right) \sin ( k x ) \\
+ A \sin \left( \omega t - k x _ { 0 } \right) \cos ( k x ) - A \cos \left( \omega t - k x _ { 0 } \right) \sin ( k x ) \\
\Psi = 2 A \cos ( k x ) \sin \left( \omega t - k x _ { 0 } \right)
\end{gathered}
$$

Note: This equation has the correct $x$-dependence. The waves travel the same distance to reach $x = 0$. This point is an interference maximum. Any expression with

$$
\Psi = 2 A \cos ( k x ) \sin \left( \omega t - k x _ { 0 } + \delta \right)
$$

where $\delta$ is a phase constant is valid.
c. Minimum sound intensity occurs when $\cos ( k x ) = 0$, i.e., $k x = \pm ( 2 n + 1 ) \pi / 2$. Solving for $x$,

$$
x = + \frac { ( 2 n + 1 ) \pi } { 2 k } = + \frac { ( 2 n + 1 ) \pi } { 2 ( 2 \pi / \lambda ) } = + \frac { ( 2 n + 1 ) \lambda } { 4 } = + \frac { ( 2 n + 1 ) v } { 4 f }
$$

For $f = 300 \mathrm {~Hz}$ :

$$
x = \pm \frac { ( 2 n + 1 ) ( 340 \mathrm {~m} / \mathrm { s } ) } { 4 ( 300 \mathrm {~Hz} ) } = \pm ( 2 n + 1 ) ( 0.283 \mathrm {~m} ) = \pm 0.283 \mathrm {~m} \quad \text { with } n = 0 .
$$

For $f = 500 \mathrm {~Hz}$ :

$$
x = \pm \frac { ( 2 n + 1 ) ( 340 \mathrm {~m} / \mathrm { s } ) } { 4 ( 500 \mathrm {~Hz} ) } = \pm ( 2 n + 1 ) ( 0.170 \mathrm {~m} ) = \pm 0.170 \mathrm {~m} . \pm 0.510 \mathrm {~m}
$$

with $n = 0,1$.
