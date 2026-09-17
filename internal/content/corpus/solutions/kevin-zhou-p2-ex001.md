---
id: kevin-zhou-p2-ex001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p2-ex001
solution_type: author
source_document: solution-document-kevin-zhou-p2sol
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P2Sol.pdf."
---

Example 1
Trains arrive at a train station every 10 minutes. If I arrive at a random time, and X is the
number of minutes I have to wait, what is the standard deviation of X?
1
Kevin Zhou Physics Olympiad Handouts
Solution
We see that X can be anywhere between 0 and 10, with all possibilities equally likely, so
p(x) =
(
1/10 0 ≤ x ≤ 10,
0 otherwise
where the denominator guarantees the total probability is 1. We have
⟨X⟩ =
Z ∞
−∞
xp(x)dx =
Z 10
0
x
10
dx = 5
which makes sense, as I should have to wait half the maximum time on average, and
⟨X2
⟩ =
Z ∞
−∞
x2
p(x)dx =
Z 10
0
x2
10
dx =
100
3
.
Then the standard deviation is
σX =
p
⟨X2⟩ − ⟨X⟩2 =
5
√
3
min.
