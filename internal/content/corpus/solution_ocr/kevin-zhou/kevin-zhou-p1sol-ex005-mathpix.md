---
id: solution-ocr-kevin-zhou-p1sol-ex005
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p1-ex005]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 5: $F = m a 201412$

A paper helicopter with rotor radius $r$ and weight $W$ is dropped from a height $h$ in air with a density of $\rho$. Assuming the helicopter quickly reaches terminal velocity, use dimensional analysis to analyze the total flight time $T$.

## Solution

The answer can only depend on the parameters $r , W , h$, and $\rho$. There are four quantities in total, but three dimensions (mass, length, and time), so by the Buckingham Pi theorem we can form one independent dimensionless quantity. In this case, it's clearly $r / h$. Continuing with routine dimensional analysis, we find

$$
T = f ( r / h ) h ^ { 2 } \sqrt { \frac { \rho } { W } } .
$$

The form of this expression is a bit arbitrary; for instance, we could also have written $f ( r / h ) r ^ { 2 }$ in front, or even $f ( r / h ) r ^ { 37 } h ^ { - 35 }$. These adjustments just correspond to pulling factors of $r / h$ out of $f$, not to changing the actual result.

This is as far as we can get with dimensional analysis alone, but we can go further using physical reasoning. If the helicopter quickly reaches terminal velocity, then it travels at a constant speed. So we must have $T \propto h$, which means that $f ( x ) \propto x$, and

$$
T \propto r h \sqrt { \frac { \rho } { W } } .
$$
