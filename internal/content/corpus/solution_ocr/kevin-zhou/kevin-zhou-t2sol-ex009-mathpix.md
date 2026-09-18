---
id: solution-ocr-kevin-zhou-t2sol-ex009
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-ex009]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 9
A satellite contains a nuclear reactor at its core, fixed at temperature $T _ { H }$. Suppose the exterior of the satellite is somehow fixed at temperature $T _ { C }$, and the satellite runs an ideal heat engine, using the core and exterior as hot and cold reservoirs. Treat the exterior as an ideal blackbody, and neglect the temperature of outer space. What value of $T _ { C }$ maximizes the rate of work extracted?

Solution
One might think that $T _ { C }$ should be as low as possible, to increase the efficiency of the cycle. However, a lower $T _ { C }$ means a lower rate of heat emission $\dot { Q } _ { \text {out } }$, since we are limited by emission of blackbody radiation, which lowers the rate of work done $\dot { W }$.

The rate of heat emitted from the satellite is

$$
\dot { Q } _ { \mathrm { out } } = \sigma A T _ { C } ^ { 4 } \propto T _ { C } ^ { 4 } .
$$

Therefore, the rate of work done is

$$
\dot { W } = \eta \dot { Q } _ { \mathrm { in } } = \eta \frac { T _ { H } } { T _ { C } } \dot { Q } _ { \mathrm { out } } \propto \left( 1 - \frac { T _ { C } } { T _ { H } } \right) \frac { T _ { H } } { T _ { C } } T _ { C } ^ { 4 } = T _ { H } T _ { C } ^ { 3 } - T _ { C } ^ { 4 } .
$$

This is maximized when $T _ { C } = ( 3 / 4 ) T _ { H }$, at which point the efficiency is 1/4.
