---
id: kevin-zhou-m8-p032
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m8-p032
solution_type: author
source_document: solution-document-kevin-zhou-m8sol
source_pdf: sources/kevin_zhou/site/handouts/M8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M8Sol.pdf."
---

[2] Problem 32. Consider the n-sided polygon P of least possible area that circumscribes a closed
convex curve K. Prove that every tangency point of K with a side of P is the midpoint of that side.
(Hint: begin by supposing that the area outside P is filled with a gas of uniform pressure, with a
vacuum inside P.)
Solution. The minimum energy is achieved when the gas takes up the largest possible area, i.e. when
the polygon P has minimum area. Let’s model the polygon as being formed by n infinite rods, which
don’t push on each other. Now, in equilibrium, the torque on each rod must be zero, but the only
forces on the rod are the uniform pressure along the part of the rod making up the corresponding
polygon side, and the normal force at the contact point. Taking torques about the contact point
shows that it must be the midpoint.
36
Kevin Zhou Physics Olympiad Handouts
[2] Problem 33. In this problem we’ll derive Kepler’s first law yet again, using no calculus, but a bit
of Euclidean geometry. As usual, we suppose a planet of mass m orbits a fixed star of much greater
mass M. Placing the star at the origin, let ϕ be the angle between r and v for the planet.
(a) Write down the quantities E and L in terms of G, M, m, v, r, and ϕ, and show that

r2
+
GMm
E
r

sin2
ϕ =
L2
2mE
.
(b) Now consider an ellipse with semimajor axis a and eccentricity e, meaning that the distance
between the foci is 2ae, with one of the foci F at the origin. Consider a point P on the ellipse,
so that the angle between the tangent to the ellipse at P and FP is ϕ. If r = |FP|, show that
(r2
− 2ar)sin2
ϕ = −a2
(1 − e2
).
You will have to use the geometrical property that a light ray sent from one focus will reflect
at the ellipse to hit the other focus.
(c) By comparing your results for (a) and (b), conclude that the orbit is an ellipse with
a = −
GMm
2E
, e =
r
1 +
2EL2
G2M2m3
.
Solution. (a) By definition, we have
L = mrv sinϕ, E =
1
2
mv2
−
GMm
r
.
Solving the second equation for v gives
v =
r
2E
m
+
2GM
r
.
Plugging this into the first equation, squaring, and rearranging gives the desired result.
(b) Refer to the below diagram, where TT′ is the tangent to the ellipse and NN′ is the normal.
By the law of cosines,
(2ae)2
= (2a − r)2
+ r2
− 2r(2a − r)cosψ.
By the geometrical properties of the ellipse, NN′ is the angle bisector of ∠F′PF, so
cosψ = cos(π − 2ϕ) = −cos(2ϕ) = 2sin2
ϕ − 1.
Plugging this into the law of cosines and rearranging gives the desired result.
37
Kevin Zhou Physics Olympiad Handouts
(c) This follows immediately, from inspection.
This derivation breaks down for E ≥ 0, since in that case the trajectory isn’t an ellipse, but similar
derivations can be performed for the parabola and hyperbola.
38
