---
id: solution-ocr-usapho-2004-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2004_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2004-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
A1. a. At the instant the switch is closed, there is no charge on the capacitor and no voltage across it. Applying Kirchhoff's junction rule $I _ { 11 } = I _ { 20 } + I _ { 30 }$.
Applying Kirchhoff's loop rule to the right loop $\quad 0 = ( 20.0 \Omega ) / _ { 20 } - ( 30.0 \Omega ) t _ { 30 }$.
Solving for $t _ { 30 }$ and then $t _ { 10 } , \quad t _ { 20 } = 1.5 t _ { 30 } \quad t _ { 10 } = 1.5 t _ { 30 } + t _ { 30 } = 2.5 t _ { 30 }$
Applying Kirchhoff's loop rule to the left loop

$$
\begin{gathered}
0 = 6.00 \mathrm {~V} - ( 20.0 \Omega ) I _ { 30 } - ( 10.0 \Omega ) I _ { 10 } = 6.00 \mathrm {~V} - ( 20.0 \Omega ) \left( 1.5 I _ { 30 } \right) - ( 10.0 \Omega ) \left( 2.5 I _ { 30 } \right) \\
0 = 6.00 \mathrm {~V} - ( 30.0 \Omega ) I _ { 30 } - ( 25.0 \Omega ) I _ { 30 } = 6.00 \mathrm {~V} - ( 55.0 \Omega ) I _ { 30 }
\end{gathered}
$$

Solving for the currents

$$
l _ { 30 } = \frac { 6.00 \mathrm {~V} } { 550 \Omega } = 0.109 \mathrm {~A} . \quad l _ { 30 } = 1.5 ( 0.109 \mathrm {~A} ) = 0.164 \mathrm {~A}
$$

and

$$
I _ { 10 } = 2.5 ( 0.109 \mathrm {~A} ) = 0.273 \mathrm {~A}
$$

(A solution using parallel and series resistor combinations is equally valid.)
b. When the switch has been closed for a very long time, the capacitors are fully charged.
Current no longer flows in the capacitor branch and

$$
I _ { \text {un } } = 0
$$

Applying Kirchhoff's loop rule to the left loop

$$
\begin{gathered}
0 - 6.00 \mathrm {~V} - ( 20.0 \Omega ) I _ { 10 } - ( 10.0 \Omega ) I _ { 11 } = 6.00 \mathrm {~V} - ( 30.0 \Omega ) I _ { 10 } \\
I _ { 31 } = I _ { 10 } = \frac { 6.00 \mathrm {~V} } { 30.0 \Omega } = 0.200 \mathrm {~A}
\end{gathered}
$$

c. The two capacitors are in series. Both have the same charge. The equivalent capacitance is

$$
\frac { 1 } { C _ { m } } = \frac { 1 } { C _ { 2 } } + \frac { 1 } { C _ { 4 } } = \frac { 1 } { 2.00 \mu \mathrm {~F} } + \frac { 1 } { 4.00 \mu \mathrm {~F} } = \frac { 3 } { 4.00 \mu \mathrm {~F} }
$$

or
The voltage across the equivalent capacitance is the same as that across the $20.0 \Omega$ resistor.

$$
V _ { c } = V _ { 10 } = ( 20.0 \Omega ) I _ { 20 } = ( 20.0 \Omega ) ( 0.200 \mathrm {~A} ) = 4.00 \mathrm {~V} .
$$

So the charge

$$
Q _ { 2 } = Q _ { 4 } = Q _ { r q } = C _ { c q } V = ( 1.33 \mu \mathrm {~F} ) ( 4.00 \mathrm {~V} ) = 5.33 \mu \mathrm { C }
$$
