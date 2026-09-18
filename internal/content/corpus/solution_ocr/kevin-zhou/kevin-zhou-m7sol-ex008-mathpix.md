---
id: solution-ocr-kevin-zhou-m7sol-ex008
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M7Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m7-ex008]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 8: JEE 2020
When a train enters a narrow tunnel, your ears pop because of the pressure change. Find the pressure change, assuming the air has constant density $\rho$, the atmospheric pressure is $P _ { 0 }$, the train speed is $v$, and the cross-sectional areas of the train and tunnel are $A _ { t }$ and $A _ { 0 }$.

Solution
We work in the reference frame of the train. In this frame, the air in the tunnel begins moving towards the train at speed $v$. When it gets to the train, it has to speed up to speed $v _ { f }$ because it flows through a smaller area $A _ { 0 } - A _ { t }$, and this causes its pressure to decrease by Bernoulli's principle. Specifically, we have

$$
A _ { 0 } v = \left( A _ { 0 } - A _ { t } \right) v _ { f } , \quad P _ { f } + \frac { 1 } { 2 } \rho v _ { f } ^ { 2 } = P _ { 0 } + \frac { 1 } { 2 } \rho v ^ { 2 }
$$

which gives a pressure drop of

$$
P _ { f } - P _ { 0 } = - \frac { 1 } { 2 } \rho v ^ { 2 } \left( \frac { 1 } { \left( 1 - A _ { t } / A _ { 0 } \right) ^ { 2 } } - 1 \right) .
$$

We neglected the change in density of the air, which is a good approximation when the train is much slower than the speed of sound. We'll treat fluid flow with changing density in T3.
