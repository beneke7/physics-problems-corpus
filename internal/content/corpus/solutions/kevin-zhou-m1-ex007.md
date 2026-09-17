---
id: kevin-zhou-m1-ex007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-ex007
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

Example 7
A bug flies towards a light with constant speed v, always making an angle α with the radial
direction. If the initial distance to the lamp is L and the radius of the lamp is R, through
what total angle does it turn before hitting the lamp?
Solution
In this case we can’t avoid solving differential equations, but they’re not too hard. It’s easiest
to work in polar coordinates, with the center of the lamp at the origin. By decomposing the
velocity into radial and tangential components, we have
dr
dt
= −v cosα, r
dθ
dt
= v sinα.
We only care about the path, not the time-dependence, so we divide these equations to get
dr
dθ
= −
r
tanα
where we manipulated differentials as in P1. Separating and integrating,
−
Z R
L
dr
r
=
∆θ
tanα
which tells us that
∆θ = (tanα)log
L
R
.
The shape traced out is a logarithmic spiral.
