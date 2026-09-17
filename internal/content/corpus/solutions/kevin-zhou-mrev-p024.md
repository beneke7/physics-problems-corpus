---
id: kevin-zhou-mrev-p024
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-mrev-p024
solution_type: author
source_document: solution-document-kevin-zhou-mrevsol
source_pdf: sources/kevin_zhou/site/handouts/MRevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/MRevSol.pdf."
---

[3] Problem 24. Consider a potential of the form V (r) = −a/rn.
16
Kevin Zhou Physics Olympiad Handouts
(a) For what n is it possible for a particle to orbit in a circle passing through the origin?
(b) For what n is it possible for a particle to spiral inward, r(θ) ∝ e−cθ for some c?
Solution. Using the effective potential results from M6, we have
1
2
m

dr
dt
2
= E +
a
rn
−
L2
2mr2
.
We also know that
dθ
dt
=
L
mr2
and since we’re interested in the trajectory’s shape, we multiply by (dθ/dt)−2 to get
1
2
m

dr
dθ
2
=
m2
L2

Er4
+
a
rn−4
−
L2r2
2m

.
This setup will be common to both of the parts of the problem.
(a) The equation of a circle through the origin in polar coordinates is r = bsinθ, so

dr
dθ
2
= b2
cos2
θ = b2
− r2
.
We therefore must have, for appropriate constants E, L, and b, that
b2
− r2
=
2m
L2

Er4
+
a
rn−4
−
L2r2
2m

.
The final terms on each side cancel, so the first two terms on the right-hand side have to sum
to a constant. This is only possible if E = 0 and n = 4.
Note that the orbit can have finite L because v diverges when r goes to zero. This is a classic
problem, which was common in mechanics books in the 1800s. Technically, it’s not really
physical since the potential blows up near the origin, so the particle has to be aimed perfectly
to pass straight through it rather than get deflected through some angle, but it’s still cute.
(b) In order for this to hold, dr/dθ must be proportional to r itself, which means we must have
E = 0 and n = 2, corresponding to an inverse cube force. This odd behavior was discovered
by Cotes in the early 1700s, and the resulting shape is called a Cotes spiral.
These examples show that Kepler’s first law is nontrivial. When you go beyond the inverse square
law, you don’t just get modifications of conics, you get orbits with completely different character.
More generally, weird behaviors like these can occur when n ≥ 2, as the gravitational potential
can overwhelm the centrifugal potential barrier. In our universe, we have n = 1 because there are
d = n+2 = 3 spatial dimensions. It has been proposed that d = 3 is the only option, because d = 2
is too simple and d > 3 would not generically allow stable orbits, needed for the development of life.
