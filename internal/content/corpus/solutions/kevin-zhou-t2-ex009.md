---
id: kevin-zhou-t2-ex009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-ex009
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

Example 9
A satellite contains a nuclear reactor at its core, fixed at temperature TH. Suppose the
exterior of the satellite is somehow fixed at temperature TC, and the satellite runs an ideal
heat engine, using the core and exterior as hot and cold reservoirs. Treat the exterior as an
ideal blackbody, and neglect the temperature of outer space. What value of TC maximizes
the rate of work extracted?
Solution
One might think that TC should be as low as possible, to increase the efficiency of the cycle.
However, a lower TC means a lower rate of heat emission Q̇out, since we are limited by
emission of blackbody radiation, which lowers the rate of work done Ẇ.
The rate of heat emitted from the satellite is
Q̇out = σAT4
C ∝ T4
C.
Therefore, the rate of work done is
Ẇ = ηQ̇in = η
TH
TC
Q̇out ∝

1 −
TC
TH

TH
TC
T4
C = THT3
C − T4
C.
This is maximized when TC = (3/4)TH, at which point the efficiency is 1/4.
