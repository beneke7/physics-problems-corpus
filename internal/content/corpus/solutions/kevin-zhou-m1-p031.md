---
id: kevin-zhou-m1-p031
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-p031
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

[3] Problem 31. An object is launched from the top of a hill, where the ground lies an angle ϕ below
the horizontal. Show that the range of a projectile is maximized if it is launched along the angle
bisector of the vertical and the ground.
Solution. This is a straightforward if messy problem; we’ll show one of many ways to set it up.
Setting the origin at the launch point and using ordinary horizontal/vertical coordinates, the object
hits the hill when tanϕ = −y/x. Using results for projectile trajectories from the preliminary
problem set, we have
y
x
= −tanϕ = tanθ −
gx
2v2 cos2 θ
where θ is the launch angle from the horizontal. Solving for x,
x =
2v2 cos2 θ
g
(tanθ + tanϕ) ∝ sinθcosθ + cos2
θtanϕ.
To maximize the range, we want to maximize x, so setting the derivative to zero gives
0 = cos2
θ − sin2
θ − 2sinθcosθtanϕ
which simplifies to
tan(2θ) =
1
tanϕ
= tan
 π
2
− ϕ

, θ =
(π/2) − ϕ
2
as desired. This famous problem was first posed by Torricelli in the 1640s, and solved by Halley in
the 1690s.
[3] Problem 32 (PPP 35). A point P is located above an inclined plane with angle α. It is possible
to reach the plane by sliding under gravity down a straight frictionless wire, joining P to some point
P′ on the plane. Geometrically, how should P′ be chosen so as to minimize the time taken? (Hint:
think about the set of points that can be reached for all possible angles of the wire, after time t.)
Solution. Suppose the wire is at angle θ with respect to the vertical. Then, the distance traveled
in time t is 1
2(g cosθ)t2. Putting the origin at P, for a fixed t, the locus of all reached points is of
the form r ∝ cosθ, which is the polar representation of a circle whose topmost point is P, with a
diameter of 1
2gt2, as shown below.
22
Kevin Zhou Physics Olympiad Handouts
Therefore, P′ is the point where one of these circles is tangent to the incline. Thus, the wire
should be at an angle of α/2 to the vertical.
Idea 8
Since mechanics is time-reversible, and the speed of a projectile only depends on its height
and not the path taken, finding the way to reach point B from point A with the lowest
possible initial speed is the same as finding the way to reach point A from point B with the
lowest possible initial speed.
