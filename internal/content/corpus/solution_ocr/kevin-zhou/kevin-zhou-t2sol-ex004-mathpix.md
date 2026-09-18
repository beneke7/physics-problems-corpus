---
id: solution-ocr-kevin-zhou-t2sol-ex004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-ex004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 4: Mixing Entropy
A container of volume $V$ is divided in half by a partition. The two halves contain pure nitrogen and oxygen gas, respectively, both at pressure $P$ and temperature $T$. The partition is removed and the gases are allowed to mix. How much does the entropy increase?


Solution
We cannot apply the formula $d S = d Q / T$, because the gas is not in equilibrium during the process. However, because entropy is a state function, we can calculate its change by considering a path that only goes through equilibrium states.

Suppose we introduce a piston at one end of the container, which is magically transparent to oxygen atoms, and slowly and isothermally move it to the center of the container. This puts the nitrogen back where it started. The change in entropy of the nitrogen is

$$
\Delta S _ { \mathrm { N } } = \frac { Q } { T } = - \frac { W } { T } = n R \log \frac { V _ { f } } { V _ { i } } = - n R \log 2 = - N k _ { B } \log 2
$$

where $N$ is the number of nitrogen molecules, which is also the number of oxygen molecules. If we do the same for the oxygen with another piston, introduced from the other side, we get another, equal decrease in the entropy. This takes us back to the original state, so since entropy is a state function, the increase in entropy when we allowed the gases to mix was

$$
\Delta S = - 2 \Delta S _ { \mathrm { N } } = 2 N k _ { B } \log 2 .
$$
