---
id: solution-ocr-kevin-zhou-x2sol-ex001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x2-ex001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 1

Radium can be found in trace quantities throughout the Earth, and has a half-life of 1620 years. Suppose that there is currently 1 kg of radium on the Earth. Then extrapolating backwards, there was $2 ^ { 4.5 \times 10 ^ { 9 } / 1620 } \mathrm {~kg}$ of radium on the Earth when it was formed, which is greater than the mass of the observable universe! What's wrong with this calculation?

## Solution

Nuclear decays don't happen in isolation; there are entire networks of nuclear decay chains. Radium decays quickly, but it is also constantly produced by the decay of other isotopes, which have much longer half-lives.

[3] Problem 6. USAPhO 2009, problem A2.
[3] Problem 7. IPhO 2000, problem 1c. The problem refers to an answer sheet, but you won't need it.
[3] Problem 8 (PPP 190). Part of the series of isotopes produced by the decay of ${ } ^ { 232 } \mathrm { Th }$, along with the corresponding half-lives, is given below:
$$
{ } _ { 90 } ^ { 232 } \mathrm { Th } \xrightarrow { 1.4 \times 10 ^ { 10 } \mathrm { y } } { } _ { 88 } ^ { 228 } \mathrm { Ra } \xrightarrow { 5.7 \mathrm { y } } { } _ { 89 } ^ { 228 } \mathrm { Ac } \xrightarrow { 6.1 \mathrm {~h} } { } _ { 90 } ^ { 228 } \mathrm { Th } \xrightarrow { 1.9 \mathrm { y } } { } _ { 88 } ^ { 224 } \mathrm { Ra } \xrightarrow { 3.6 \mathrm {~d} } { } _ { 86 } ^ { 220 } \mathrm { Rn } \xrightarrow { 56 \mathrm {~s} } \ldots .
$$
${ } ^ { 232 } \mathrm { Th }$ and ${ } ^ { 228 } \mathrm { Th }$ in equilibrium are extracted from an ore and purified by a chemical process. Sketch the form of the variation in the number of atoms of ${ } ^ { 220 } \mathrm { Rn }$ you would expect to be present in this material over a (logarithmic) range from $10 ^ { - 3 }$ to $10 ^ { 3 }$ years.

Solution. The graph should look like this:
![](../../../figures/solution-ocr/062e148dc00dab9296df965f.jpg)
It rises at first due to the ${ } ^ { 224 } \mathrm { Ra }$ from the ${ } ^ { 228 } \mathrm { Th }$ in the initial sample, which will then decay away before ${ } ^ { 228 } \mathrm { Ra }$ from ${ } ^ { 232 } \mathrm { Th }$ plays a significant role. After some time, the effectively infinite bank of ${ } ^ { 232 } \mathrm { Th }$ (since its half life is much longer than $10 ^ { 3 }$ years) will fill up all the parts of the chain when the ${ } ^ { 228 } \mathrm { Ra }$ starts contributing to the ${ } ^ { 228 } \mathrm { Th }$ stock, and the equilibrium amount of ${ } ^ { 220 } \mathrm { Rn }$ will be reached and kept until after around $10 ^ { 10 }$ years.


## 2 Nuclear Processes
