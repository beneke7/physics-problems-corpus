---
id: kevin-zhou-t2-ex013
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t2-ex013
solution_type: author
source_document: solution-document-kevin-zhou-t2sol
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T2Sol.pdf."
---

Example 13
Model a brick pizza oven as a sphere with inner radius R1, outer radius R2, and thermal
conductivity κ. The inside of the oven is held at temperature T1 and the outside of the oven
is held at temperature T2. In equilibrium, find T(r), and the power needed to keep the inside
of the oven at temperature T1.
Solution
Consider a shell of radius r and thickness dr. The outward heat flow through it is
P(r) = −κ(4πr2
)
dT
dr
.
In addition, because the shells have constant temperature, there can be no net heat accumu-
lating in any shell. Thus, P(r) must actually be independent of r. Renaming it to P, we can
integrate the resulting differential equation to find
Z T(r)
T1
dT = −
Z r
R1
P
4πκr2
dr
which gives the solution
T(r) = T1 + (T2 − T1)
r − R1
r
R2
R2 − R1
.
Now that we know T(r), we can evaluate dT/dr at any radius to find the total power, using
the first equation. Another slicker way, which doesn’t even require knowing T(r), is to
32
Kevin Zhou Physics Olympiad Handouts
integrate the first equation all the way from the inside of the oven to the outside,
Z T2
T1
dT = −
Z R2
R1
P
4πκr2
dr.
This gives an expression for the power in terms of the other parameters, yielding
P = 4πκ(T1 − T2)
R1R2
R2 − R1
.
