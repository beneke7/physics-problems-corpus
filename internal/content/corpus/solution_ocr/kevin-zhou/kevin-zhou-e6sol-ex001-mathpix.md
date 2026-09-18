---
id: solution-ocr-kevin-zhou-e6sol-ex001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e6-ex001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 1
Consider a circuit with a battery of $\operatorname { emf } \mathcal { E }$, a resistor $R$, and an inductor $L$ in series, with zero initial current. Find the current $I ( t )$ and verify that energy is conserved.

Solution
Kirchhoff's loop equation is

$$
\mathcal { E } = L \frac { d I } { d t } + I R .
$$

To solve for the current, we can separate and integrate, giving

$$
\frac { d t } { L } = \frac { d I } { \mathcal { E } - I R }
$$

which yields

$$
I ( t ) = \frac { \mathcal { E } } { R } \left( 1 - e ^ { - ( R / L ) t } \right) .
$$

At long times, the inductor has no effect, since the current stops changing. To verify energy conservation we multiply Kirchhoff's loop equation by $I$, since power is emf times current,

$$
I \mathcal { E } = L I \frac { d I } { d t } + I ^ { 2 } R
$$


The left-hand side is the power output by the battery, and the two terms on the right-hand side represent the rate of increase in energy $L I ^ { 2 } / 2$ stored in the inductor, and the power dissipated in the resistor, so all power is accounted for.
