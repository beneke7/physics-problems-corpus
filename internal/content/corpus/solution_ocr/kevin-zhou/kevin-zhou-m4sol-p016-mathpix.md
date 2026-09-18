---
id: solution-ocr-kevin-zhou-m4sol-p016
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m4-p016]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 16. Consider a damped harmonic oscillator, which experiences force $F = - b v - k x$.

(a) As in M1, show that the general solution for $x ( t )$ is
$$
x ( t ) = A _ { + } e ^ { i \omega _ { + } t } + A _ { - } e ^ { - i \omega _ { - } t }
$$
and solve for the $\omega _ { \pm }$.
(b) For sufficiently small $b$, the roots are complex. In this limit, show that by taking the real part, one finds an exponentially damped sinusoidal oscillation. Roughly how many oscillation cycles happen when the amplitude damps by a factor of $e$ ?
(c) For large $b$, the roots are pure imaginary, the position simply decays exponentially, and we say the system is overdamped. Find the condition for the system to be overdamped.

Solution. (a) By setting up and solving a quadratic equation,

$$
\omega _ { \pm } = \frac { - i b \pm \sqrt { - b ^ { 2 } + 4 m k } } { - 2 m } = \frac { i b } { 2 m } \pm \sqrt { \frac { k } { m } - \left( \frac { b } { 2 m } \right) ^ { 2 } } .
$$

(b) In this limit, we have
$$
\omega _ { \pm } \approx \frac { i b } { 2 m } \pm \sqrt { \frac { k } { m } }
$$
in which case we have
$$
e ^ { i \omega _ { \pm } t } \approx e ^ { - b t / 2 m } e ^ { i \sqrt { k / m } t }
$$
which is an exponentially damped oscillation. The time for a damping of a factor of $e$ is $2 m / b$, which occurs after $\sqrt { k m } / \pi b$ cycles.
(c) This occurs if
$$
\frac { k } { m } - \left( \frac { b } { 2 m } \right) ^ { 2 } < 0
$$
which implies $b ^ { 2 } > 4 m k$.
