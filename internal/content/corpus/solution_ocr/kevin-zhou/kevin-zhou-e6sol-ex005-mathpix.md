---
id: solution-ocr-kevin-zhou-e6sol-ex005
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e6-ex005]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 5
An imperfect voltage source consists of an ideal AC voltage source in series with an impedance $Z _ { S }$. It is attached to a load of impedance $Z _ { L }$. What value of $Z _ { L }$ maximizes the power transferred to the load?

Solution
Write the impedances as $Z _ { L } = R _ { L } + i X _ { L }$. When the impedances are purely real, it's a familiar fact that the optimum is at $R _ { S } = R _ { L }$. We consider the case of general impedance here to illustrate how to work with power. First, the current has amplitude

$$
I _ { 0 } = \frac { | V | } { \left| Z _ { S } + Z _ { L } \right| } .
$$

The average power dissipated in the load is

$$
\bar { P } = \frac { 1 } { 2 } I _ { 0 } ^ { 2 } R _ { L } \propto \frac { R _ { L } } { \left| Z _ { S } + Z _ { L } \right| ^ { 2 } } = \frac { R _ { L } } { \left( R _ { S } + R _ { L } \right) ^ { 2 } + \left( X _ { S } + X _ { L } \right) ^ { 2 } } .
$$

The denominator is minimized when $X _ { S } + X _ { L } = 0$, so the optimal real part is $R _ { L } = R _ { S }$ by the same logic as the purely real case. Thus, the highest power is achieved for $Z _ { L } = Z _ { S } ^ { * }$.

[1] Problem 6. Consider the cube of resistances $R$, capacitances $C$, and inductances $L$ shown below.
![](../../../figures/solution-ocr/0265781ef599d28791c10c9d.jpg)
Compute the impedance between the terminals.
Solution. By symmetry, the three points close to one end have the same voltage, and the three points close to the other end have the same as well. Thus, we simplify the diagram to the following:
![](../../../figures/solution-ocr/ed3bafae00c74e0e3a16d814.jpg)
We have impedance
$$
Z = \frac { 1 } { 3 } R + \frac { 1 } { 6 } i \omega L + \frac { 1 } { 3 } \frac { 1 } { i \omega C } .
$$
