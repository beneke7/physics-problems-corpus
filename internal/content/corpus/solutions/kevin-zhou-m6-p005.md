---
id: kevin-zhou-m6-p005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m6-p005
solution_type: author
source_document: solution-document-kevin-zhou-m6sol
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M6Sol.pdf."
---

[4] Problem 5. In general relativity, the gravitational potential around a black hole of mass M is
V (r) = −
GMm
r
−
GML2
mc2r3
.
The second term is a relativistic effect which strengthens the attraction towards the black hole. (It
has nothing to do with the angular momentum barrier; you still have to add that separately.)
(a) Explain why this new term allows particles to fall to the center of the black hole, r = 0, and
why this is impossible in Newtonian gravity.
(b) For a fixed L, find the values of the circular orbit radii.
(c) Find the radius of the smallest possible stable circular orbit, for any value of L. What happens
if you try to orbit the black hole closer than this?
(d) Find the closest possible approach radius of an unbound object. That is, among the set of all
trajectories that start and end far away from the black hole (i.e. without falling into it), find
the smallest possible minimum value of r.
For all parts, assume the particle is moving nonrelativistically.
Solution. (a) The effective potential contains L2/2mr2, which in Newtonian gravity makes the
effective potential go to +∞ as r → 0. Thus, r = 0 is inaccessible, for any L ̸= 0. However,
adding the −GML2/mc2r3 term makes the effective potential go to −∞ as r → 0, so that
particles can fall to the center.
(b) Circular orbits occur when V ′
eff(r) = 0, which implies
L2
mr3
=
GMm
r2
+
3GML2
mc2r4
.
Writing this as a quadratic in r and solving gives
r1 =
L2 −
p
L4 − 12(GMmL/c)2
2GMm2
, r2 =
L2 +
p
L4 − 12(GMmL/c)2
2GMm2
.
Note that there are no solutions at all when the discriminant is negative. Thus, circular orbits
only exist when L >
√
12GMm/c.
(c) From part (a), we know that limr→0 Veff(r) = −∞. Thus the graph of Veff(r) should look like
this, for sufficiently large L:
7
Kevin Zhou Physics Olympiad Handouts
r1
r2
Veff(r)
r
Thus, the orbit at r2 is stable, and the one at r1 is unstable.
As the angular momentum is decreased, r2 decreases. When L reaches the critical value √
12GMm/c, we have r2 = r1, and for smaller L, the curve Veff(r) has no extrema, so there
are no circular orbits at all. Therefore, the radius of the smallest stable circular orbit is the
minimum possible value of r2, which is achieved when L =
√
12GMm/c, giving
rmin =
6GM
c2
.
If you orbit in a circular orbit with a smaller radius, it is necessarily unstable, which means
that under any perturbation, you will either drift into the black hole, or outward away from it.
If you have rockets, this can be prevented by continual orbital adjustment. (Of course, if you
get closer than the Schwarzschild radius 2GM/c2, you must fall into the black hole, no matter
what you do. But this famous effect isn’t incorporated in our simple Newtonian analysis.)
(d) For this to happen, the effective potential needs a maximum, so the particle can “bounce” off
it and get back to r → ∞. Thus we need L >
√
12GMm/c. For each value of L, the closest
radius we can get while still bouncing off is r1.
Thus, we want to find the minimal value of r1, and this occurs when L → ∞ (i.e. when the
particle is launched from a very large impact parameter), giving
lim
L→∞
r1(L) =
6(GMm/c)2
2GMm2
=
3GM
c2
where we used the binomial theorem in the first step.
By the way, the shapes of the orbits in this potential can be quite exciting, featuring “zoom-whirl”
patterns where a particle slowly “zooms” around a black hole, then falls inward and quickly “whirls”
around it several times, then comes back out. Such orbits produce interesting gravitational wave
signatures. You can find a numeric simulation of them here.
