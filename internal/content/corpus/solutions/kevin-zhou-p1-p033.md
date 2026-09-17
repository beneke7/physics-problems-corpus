---
id: kevin-zhou-p1-p033
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p033
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[3] Problem 33. In this problem we’ll generalize some of the ideas above to three dimensions, where
we need triple integrals. Consider a ball of radius R.
(a) In Cartesian coordinates, the volume element is dV = dxdy dz. Set up an appropriate triple
integral for the volume.
(b) The inner two integrals might look a bit nasty, but we already have essentially done them.
Using the result we already know, perform the inner two integrals in a single step, and then
perform the remaining integral to derive the volume of a sphere.
(c) In cylindrical coordinates, the volume element is dV = rdrdθdz. Set up a triple integral for
the volume, and perform it. (Hint: this can either be hard, or a trivial extension of part (b),
depending on what order of integration you choose.)
42
Kevin Zhou Physics Olympiad Handouts
(d) In spherical coordinates, the volume element is dV = r2 dr sinϕdϕdθ. Set up a triple integral
for the volume, and perform it.
(e) Let the ball have uniform density and total mass M. Compute its moment of inertia about
the z-axis. (Hint: this can be reduced to a single integral if you use an appropriate trick.)
Solution. (a) By analogy to the two-dimensional case,
V =
Z R
−R
dx
Z √
R2−x2
−
√
R2−x2
dy
Z √
R2−x2−y2
−
√
R2−x2−y2
dz.
(b) The inner two integrals just represent the area of a circle, formed by slicing the ball along a
plane of constant x. Thus, the answer has to be πr2 where r is the radius of that circle (as
we derived explicitly in the example), and in this case r2 = R2 − x2. Thus, we have
V =
Z R
−R
π(R2
− x2
)dx = πR3
Z 1
−1
1 − x2
dx =
4
3
πR3
.
(c) By analogy to the two-dimensional case,
V =
Z R
−R
dz
Z √
R2−z2
0
rdr
Z 2π
0
dθ.
Again, the inner two integrals look a bit nasty, but they represent nothing more than the area
of a circle of radius r, leaving
V =
Z R
−R
π(R2
− z2
)dz
upon which the solution continues just as in part (b).
(d) The triple integral immediately turns into three independent integrals,
V =
Z R
0
r2
dr
Z π
0
sinϕdϕ
Z 2π
0
dθ = 4π
Z R
0
r2
dr =
4
3
πR3
.
(e) We are looking for
I =
Z
x2
+ y2
dm.
By spherical symmetry, the integrals of x2 dm, y2 dm, and z2 dm are all equal. Thus,
I =
2
3
Z
x2
+ y2
+ z2
dm
but this integral is now easy to do because it has spherical symmetry. We have
I =
2
3
M
4
3πR3
Z R
0
4πr2
r2
dr =
2
5
MR2
as expected. The same trick can be used to show that the moment of inertia of a spherical
shell is (2/3)MR2.
43
Kevin Zhou Physics Olympiad Handouts
[2] Problem 34. Consider a spherical cap that is formed by slicing a sphere of radius R by a plane,
so that the altitude from the vertex to the base is h. Find the area of its curved surface using an
appropriate integral.
Solution. This is a double integral, where it’s best to use spherical coordinates. Recall that the
volume element in spherical coordinates was dV = r2 dr sinϕdϕdθ. Thus, the area element for a
part of this sphere is dA = R2 sinϕdϕdθ. The area integral is
A = R2
Z cos−1((R−h)/R)
0
sinϕdϕ
Z 2π
0
dθ = 2πhR.
After doing the trivial inner integral, this approach is just slicing the surface by dϕ. You can also
equivalently solve it by slicing it in dz. In that case the integrand is a bit more complicated, but
the bounds are simpler.
7 Approximating Integrals
