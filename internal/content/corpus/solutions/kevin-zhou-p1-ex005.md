---
id: kevin-zhou-p1-ex005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-ex005
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Example 5: F = ma 2014 12
A paper helicopter with rotor radius r and weight W is dropped from a height h in air with
a density of ρ. Assuming the helicopter quickly reaches terminal velocity, use dimensional
analysis to analyze the total flight time T.
Solution
The answer can only depend on the parameters r, W, h, and ρ. There are four quantities in
total, but three dimensions (mass, length, and time), so by the Buckingham Pi theorem we
can form one independent dimensionless quantity. In this case, it’s clearly r/h. Continuing
with routine dimensional analysis, we find
T = f(r/h)h2
r
ρ
W
.
The form of this expression is a bit arbitrary; for instance, we could also have written
f(r/h)r2 in front, or even f(r/h)r37h−35. These adjustments just correspond to pulling
factors of r/h out of f, not to changing the actual result.
This is as far as we can get with dimensional analysis alone, but we can go further using
physical reasoning. If the helicopter quickly reaches terminal velocity, then it travels at a
constant speed. So we must have T ∝ h, which means that f(x) ∝ x, and
T ∝ rh
r
ρ
W
.
