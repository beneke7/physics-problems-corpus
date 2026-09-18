---
id: solution-ocr-usapho-2002-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2002_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2002-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
A1. a. The magnitude of the magnetic field inside an ideal solenoid is $B = \mu _ { 0 } n I$ where the number of turns per unit length $n$ is the inverse of the length per turn - the diameter $d$ of the wire.

$$
n = \frac { 1 } { d } = \frac { 1 } { 2 r _ { 1 } }
$$

The total resistance of the wire used to construct the solenoid is

$$
R = \rho \frac { l } { A _ { 1 } } = \rho \frac { l } { \pi r _ { 1 } ^ { 2 } } .
$$

The current

$$
I = \frac { V } { R } = \frac { V \pi r _ { 1 } ^ { 2 } } { \rho l }
$$

Combining to find
b. The self inductance $L$ can be found from

$$
\begin{equation*}
L l = N \Phi \tag{Al-1}
\end{equation*}
$$

where $N$ is the total number of turns - the length of the wire divided by the circumference of one turn

$$
N = \frac { l } { 2 \pi r _ { 2 } }
$$

and $\Phi$ is the flux through one turn

$$
\Phi = B \pi r _ { 2 } ^ { 2 } = \mu _ { 0 } n I \pi r _ { 2 } ^ { 2 } = \frac { \mu _ { 0 } \pi r _ { 2 } ^ { 2 } } { 2 r _ { 1 } } I
$$

combining with (A1-1)

$$
L = \frac { N \Phi } { I } = \left( \frac { l } { 2 \pi r _ { 2 } } \right) \left( \frac { \mu _ { 0 } \pi r _ { 2 } ^ { 2 } } { 2 r _ { 1 } } \right) = \frac { \mu _ { 0 } r _ { 2 } l } { 4 r _ { 1 } }
$$

c. The inductive impedance is $Z _ { L } = \omega L$. The total impedance of the circuit is $Z = \sqrt { R ^ { 2 } + ( \omega L ) ^ { 2 } }$

$$
I _ { r m s } = \frac { V _ { r m s } } { \sqrt { R ^ { 2 } + ( \omega L ) ^ { 2 } } } = \frac { V _ { r m s } } { \sqrt { \left( \frac { \rho l } { \pi r _ { 1 } ^ { 2 } } \right) ^ { 2 } + \left( \frac { 2 \pi f \mu _ { o } r _ { 2 } l } { 4 r _ { 1 } } \right) ^ { 2 } } } = \frac { 2 r _ { 1 } V _ { r m s } } { l \sqrt { \left( \frac { 2 \rho } { \pi r _ { 1 } } \right) ^ { 2 } + \left( \pi f \mu _ { o } r _ { 2 } \right) ^ { 2 } } }
$$
