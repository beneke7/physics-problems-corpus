---
id: kevin-zhou-p1-ex016
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-ex016
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Example 16
Suppose a planet instantly stopped, at a distance r0 from a star of mass M. Write the time
it would take the planet to collide with the star, as a single integral.
Solution
If the planet has mass m, then conservation of energy gives
1
2
mv2
−
GMm
r
= −
GMm
r0
so that its radial velocity is
dr
dt
= −
s
2GM

1
r
−
1
r0

.
We can write the time taken to collide as
T =
Z
dt =
Z 0
r0
dr
dt
dr
=
1
√
2GM
Z r0
0
dr
p
1/r − 1/r0
.
It’s good practice to write the integral in dimensionless form, so that the dependence of the
answer on the dimensionful quantities is manifest. To do this, substitute x = r/r0 to get
T =
r
r3
0
2GM
Z 1
0
r
x
1 − x
dx.
36
Kevin Zhou Physics Olympiad Handouts
This lets us read off T2 ∝ r3
0, in accordance with Kepler’s third law, and required by dimen-
sional analysis as shown in problem 2. In case you’re wondering, the value of the remaining
integral is π/2, as can be shown by substituting x = sin2
θ.
[2] Problem 30 (Kalda). The deceleration of a boat in water due to drag is given by a function a(v).
Given an initial velocity v0, write the total distance the boat travels as a single integral.
Solution. We have Z
dx =
Z
dv
dx
dv
=
Z
dv
dx
dt
dt
dv
= −
Z
v dv
a(v)
which is a single integral in terms of the function a(v), as desired. Putting the bounds in,
∆x = −
Z 0
v0
v dv
a(v)
=
Z v0
0
v dv
a(v)
.
