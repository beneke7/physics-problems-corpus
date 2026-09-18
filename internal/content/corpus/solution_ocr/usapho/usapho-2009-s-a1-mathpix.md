---
id: solution-ocr-usapho-2009-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2009_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2009-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A1
A hollow cylinder has length $l$, radius $r$, and thickness $d$, where $l \gg r \gg d$, and is made of a material with resistivity $\rho$. A time-varying current $I$ flows through the cylinder in the tangential direction. Assume the current is always uniformly distributed along the length of the cylinder. The cylinder is fixed so that it cannot move; assume that there are no externally generated magnetic fields during the time considered for the problems below.
![](../../../figures/solution-ocr/79c0a5619305b9b056a8d72b.jpg)

a. What is the magnetic field strength $B$ inside the cylinder in terms of $I$, the dimensions of the cylinder, and fundamental constants?
b. Relate the $\operatorname { emf } \mathcal { E }$ developed along the circumference of the cylinder to the rate of change of the current $\frac { d I } { d t }$, the dimensions of the cylinder, and fundamental constants.
c. Relate $\mathcal { E }$ to the current $I$, the resistivity $\rho$, and the dimensions of the cylinder.
d. The current at $t = 0$ is $I _ { 0 }$. What is the current $I ( t )$ for $t > 0$ ?

## Solution

a. The magnetic field through the inside of the cylinder is given by
$$
B = \mu _ { 0 } I / l
$$
by Ampere's law.
b. The magnetic flux is
$$
\Phi _ { B } = B A = \pi \mu _ { 0 } r ^ { 2 } I / l .
$$
The inductance is then
$$
L = \Phi _ { B } / I = \pi \mu _ { 0 } r ^ { 2 } / l
$$
and the induced emf is
$$
\mathcal { E } = - L \frac { d I } { d t } = - \frac { \pi \mu _ { 0 } r ^ { 2 } } { l } \frac { d I } { d t } .
$$

c. This induced emf will be driving the current, so
$$
\mathcal { E } = I R
$$
where $R$ is the resistance, given by
$$
R = \frac { \rho L } { A }
$$
where $L$ is the circumference $2 \pi r$, and the area $A$ is the cross sectional area $l d$ of the conductor. Therefore,
$$
\mathcal { E } = I \rho \frac { 2 \pi r } { l d } .
$$
d. Combining the above, we get a differential equation,
$$
I \rho \frac { 2 \pi r } { l d } = - \frac { \pi \mu _ { 0 } r ^ { 2 } } { l } \frac { d I } { d t }
$$
which can be written more simply as
$$
\frac { d I } { d t } = - \alpha I , \quad \alpha = \frac { 2 \rho } { \mu _ { 0 } r d } .
$$
The solution is then
$$
I ( t ) = I ( 0 ) e ^ { - \alpha t } .
$$
