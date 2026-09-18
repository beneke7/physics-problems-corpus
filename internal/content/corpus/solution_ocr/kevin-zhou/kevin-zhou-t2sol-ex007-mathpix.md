---
id: solution-ocr-kevin-zhou-t2sol-ex007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-ex007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 7
At high temperatures, the resistivities of many materials scale approximately linearly with temperature. Suppose that a light bulb supplies total radiation power $P$ when connected across an AC voltage $V$. How does $P$ scale with $V$ ?

Solution
The total power dissipated in the resistor scales as $V ^ { 2 } / R$, and $R \propto \rho \propto T$. This power must equal the blackbody radiation power emitted, so by the Stefan-Boltzmann law,

$$
P \propto T ^ { 4 } \propto \frac { V ^ { 2 } } { T }
$$

from which we conclude that $T \propto V ^ { 2 / 5 }$, so $P \propto V ^ { 8 / 5 }$.
