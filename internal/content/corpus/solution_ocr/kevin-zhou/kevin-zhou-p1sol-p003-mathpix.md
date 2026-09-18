---
id: solution-ocr-kevin-zhou-p1sol-p003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-p003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 3. Some questions about vibrations.
    (a) The typical frequency $f$ of a vibrating star depends only on its radius $R$, density $\rho$, and the gravitational constant $G$. Use dimensional analysis to find an expression for $f$, up to a dimensionless constant. Then estimate $f$ for the Sun, looking up any numbers you need.
    (b) The typical frequency $f$ of a small water droplet freely vibrating in zero gravity could depend on its radius $R$, density $\rho$, surface tension $\gamma$, and the gravitational constant $G$. This is too many parameters for dimensional analysis to work, but if you think about it for a second, you'll see that one of them doesn't actually matter. Using this, find an expression for $f$ up to a dimensionless constant.

Solution. (a) We just do the usual dimensional analysis,

$$
[ f ] = s ^ { - 1 } \quad [ R ] = m \quad [ \rho ] = \mathrm { kg } / \mathrm { m } ^ { 3 } \quad [ \mathrm { G } ] = \frac { \mathrm { m } ^ { 3 } } { \mathrm {~kg} \cdot \mathrm {~s} ^ { 2 } }
$$

To cancel out the units of kg, we consider the product of $G$ and $\rho$, which has units $[ \rho G ] = s ^ { - 2 }$. Then to get $[ f ] = s ^ { - 1 }$,

$$
f \sim \sqrt { G \rho } \sim 3 \times 10 ^ { - 4 } \mathrm {~Hz}
$$

which is in the right range. These oscillations are measured in the field of helioseismology.
Another application of this result is that the time needed for a ball of gas of density $\rho$ to collapse is of order $1 / \sqrt { G \rho }$, called the free fall time. This timescale plays an important role in structure formation in the early universe.

(b) In any nontrivial dimensional analysis problem, you will have too many parameters, and will have to think about how to reduce them. The right ones to drop depend on the system.
Here, the gravitational forces of the small droplet on itself are completely negligible compared to surface tension, so we can drop $G$. Performing dimensional analysis with $R , \rho$, and $\gamma$ gives
$$
f \sim \sqrt { \frac { \gamma } { \rho R ^ { 3 } } } .
$$
Of course, part (a) is equivalent to starting with the same set of four parameters and dropping $\gamma$, which makes sense since the objects considered are huge.
