---
id: solution-document-kevin-zhou-e1sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-e1-ex003, kevin-zhou-e1-ex005, kevin-zhou-e1-ex007, kevin-zhou-e1-ex009, kevin-zhou-e1-ex012, kevin-zhou-e1-ex013, kevin-zhou-e1-p002, kevin-zhou-e1-p004, kevin-zhou-e1-p005, kevin-zhou-e1-p006, kevin-zhou-e1-p007, kevin-zhou-e1-p016, kevin-zhou-e1-p019, kevin-zhou-e1-p020, kevin-zhou-e1-p021]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/E1Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Electromagnetism I: Electrostatics
The material here is covered at the right level in chapters 1–3 of Purcell. For a separate introduction
to vector calculus, see the resources mentioned in the syllabus, or chapter 1 of Griffiths. Electrostatics
is covered in more mathematical detail in chapter 2 of Griffiths. For interesting general discussion,
see chapters II-1 through II-5 of the Feynman lectures. There is a total of 78 points.
1 Coulomb’s Law and Gauss’s Law
Idea 1
Gauss’s law is written in integral form as
I
E · dS =
Q
ϵ0
.
In practice, you will only apply this form to situations with high symmetry, where
E =

 
 
Q/4πϵ0r2 spherical symmetry,
λ/2πϵ0r cylindrical symmetry,
σ/2ϵ0 infinite plane.
Example 1
Consider a spherical shell of uniform surface charge density σ. A small hole is cut out of the
surface of the shell. What is the electric field at the center of this hole?
Solution
Consider a point P just outside the sphere, and another point P′ nearby but just inside the
sphere. If the shell didn’t have a hole, then by Gauss’s law and spherical symmetry, we have
EP =
σ
ϵ0
r̂, EP′ = 0.
Next, suppose we only had the patch of the sphere near P and P′. When we zoom into P
and P′, this patch looks like an infinite plane dividing them, and from Gauss’s law,
EP =
σ
2ϵ0
r̂, EP′ = −
σ
2ϵ0
r̂.
Now, a field of a spherical shell with a hole is just the difference of that of a full shell and
that of a single patch, so subtracting these gives the answer,
EP = EP′ =
σ
2ϵ0
r̂.
Note that EP = EP′ because there’s no surface charge between P and P′, so the value of the
electric field can’t jump discontinuously.
[2] Problem 1 (Griffiths 2.18). Some questions about uniformly charged spheres.
1

Kevin Zhou Physics Olympiad Handouts
(a) Consider a sphere of radius R and uniform charge density ρ. Find the electric field everywhere.
(b) Now two spheres, each of radius R and carrying uniform charge densities ρ and −ρ, are placed
so that they partially overlap. Call the vector from the positive center to the negative center
d. Find the electric field in the overlap region.
Solution. (a) The field inside a uniform sphere of density ρ and center a is
E =
ρ
3ϵ0
(r − a).
Outside the sphere, the field falls off as an inverse square,
E =
ρ
3ϵ0
R3
|r − a|3
(r − a).
(b) If the two centers are a1 and a2, then by superposition,
E =
ρ
3ϵ0
((r − a1) − (r − a2)) =
ρ
3ϵ0
d
which is a constant.
[2] Problem 2. Consider a cube with a corner at the origin, and sides parallel to the x, y, and z axes.
If a charge q is placed at (ϵ,ϵ,ϵ) for some tiny ϵ, what’s the flux through each face of the cube?
Solution. There are three “opposite” faces with the same flux, and three “adjacent” faces with
the same flux. Now consider adding seven more cubes, so that the charge is now at the center of
a 2 × 2 × 2 cube. The total flux through the outer faces of the cube is q/ϵ0, and there are 24 unit
faces, so the flux out of each “opposite” face is q/24ϵ0. Now consider the original cube. By Gauss’s
law the total flux out must be q/ϵ0, which means the flux out of each “adjacent” face is 7q/24ϵ0.
(Note that if the charge were instead exactly at one of the corners, the fluxes through the
opposite faces would still be q/24ϵ0, while the fluxes through the adjacent faces would technically
be undefined, since the electric field blows up on the face. But roughly speaking, the flux ought
to be zero. Then the total flux out of the cube is only q/8ϵ0, and that’s because the corner cuts
out one “octant” of the point charge’s field. Also, note that the answer crucially depends on the
fact that the charge’s coordinates are all equal to ϵ. For example, if the charge had been at (0,0,ϵ)
instead, then a similar argument shows that the fluxes through the near faces are zero, zero, and
q/8ϵ0.)
Here’s a followup question, proposed by Mike Winer and first solved by Jason Youm. If a charge
q is at the corner of a regular tetrahedron, what fraction of its flux goes through the tetrahedron’s
far face? You can’t solve it with the same trick as the cube, but it’s possible to get the answer
without any explicit integration by cleverly considering the flux through combinations of simpler
surfaces, and using a little three-dimensional geometry. The answer is
1
2
−
3arctan
√
2
2π
≈ 0.044.
You can try deriving this for yourself, but it’s quite tricky; roughly 4 points by the standards of
this problem set. It turns out that it’s possible to generalize these kinds of arguments even further,
to solve the more general case where the charge is displaced from a vertex of a cube in an arbitrary
direction! For a very deep dive, see this paper.
2

Kevin Zhou Physics Olympiad Handouts
[2] Problem 3 (BAUPC). In both parts below, take the potential to be zero at infinity.
(a) Consider a solid sphere of uniform charge density. Find the ratio of the electrostatic potential
at the surface to that at the center.
(b) Consider a solid cube of uniform charge density. Find the ratio of the electrostatic potential
at a corner to that at the center. (Hint: use symmetry.)
Solution. (a) Let U0 be the potential at the surface. If the sphere has radius R and charge
density ρ, it has charge Q = 4
3πρR3 and the shell theorem gives U0 = Q/4πϵ0R.
To go from the surface to the center, we need to further increase the potential by
∆U = −
Z 0
R
E(r)dr =
Z R
0
kQr
R3
dr =
1
2
U0
So the potential at the center of the sphere is U0 + ∆U = 3U0/2, and the desired ratio is 2/3.
(b) Let U0 be the potential at a corner. Now, imagine dividing the cube into 8 identical smaller
cubes. The center of the cube is at the corner of all 8. For a fixed charge density, potentials
scale like U ∝ Q/r ∝ ρr2, so each of these cubes contributes 1/4 as much as the corner of the
original cube. Thus, the potential at the center is 8(U0/4) = 2U0, and the desired ratio is 1/2.
[3] Problem 4. There are two point charges, q1 > 0 and q2 < 0, in empty space. An electric field line
leaves q1 at an angle α from the line connecting the two charges. Determine whether this field line
hits q2, and if so, at what angle β from the line connecting the two charges. (Hint: this can be done
without solving any differential equations.)
Solution. Suppose the field line does hit q2. Rotate the field line about the line connecting the two
charges, to form a Gaussian surface. Because no electric field lines go across this surface, the total
charge inside must be zero. Now, this surface envelopes “slices” of each point charge. (If you’re
not happy with “slicing a point charge”, just replace the point charges with tiny uniformly charged
spheres; everything outside stays the same.) The solid angle of the first point charge enveloped is
Z
dΩ =
Z 2π
0
dϕ
Z α
0
sinθdθ = 2π(1 − cosα)
so the amount of charge enclosed is
Ω
4π
q1 =
1 − cosα
2
q1 = q1 sin2 α
2
.
Reasoning similarly for the other surface, we have
q1 sin2 α
2
= |q2|sin2 β
2
and the field line hits q2 if there is a solution for β, i.e. when |q1/q2| sin2
(α/2) ≤ 1. (If you like this
question, you can also think about what we can say when the point charges have the same sign.)
3

Kevin Zhou Physics Olympiad Handouts
Idea 2
Gauss’s law is written in differential form as
∇ · E =
ρ
ϵ0
.
The divergence of a vector field F = Fxx̂ + Fyŷ + Fzẑ is
∇ · F = ∂xFx + ∂yFy + ∂zFz
in Cartesian coordinates, where ∂x stands for ∂/∂x, and so on.
Example 2
Show that the two forms of Gauss’s law are equivalent.
Solution
To do this, we need to establish the geometric meaning of the divergence. For simplicity we
consider two dimensions; the proof for three dimensions is similar. Consider a small rectangle
with one corner at the origin, with axes aligned with the Cartesian coordinate axes and side
lengths ∆x and ∆y. To apply Gauss’s law in integral form, we need to compute the flux
through each side. The flux going out the top side is
Z ∆x
0
Ey(x,∆y)dx
while the flux going out the bottom side is
−
Z ∆x
0
Ey(x,0)dx.
The sum of these two terms is
Z ∆x
0
(Ey(x,∆y) − Ey(x,0))dx ≈ ∆y
Z ∆x
0
(∂yEy)|(x,0) dx
where we applied a tangent line approximation, and the subscript indicates where the
function ∂yEy is evaluated. Higher-order terms in the Taylor series would be proportional to
higher powers of ∆y, which is small, so we can ignore them.
The integrand is still a function of x, but we can Taylor expand it about the origin as
(∂yEy)|(x,0) = (∂yEy)|(0,0) + ∆x(...) + ....
These extra terms are again higher-order in ∆x and ∆y, so we ignore them. The net flux
through the top and bottom faces is hence, to lowest order,
∆y
Z ∆x
0
(∂yEy)|(0,0) dx = ∆x∆y (∂yEy)|(0,0).
4

Kevin Zhou Physics Olympiad Handouts
By similar reasoning, pairing up the left and right faces gives
flux = ∆x∆y (∂xEx + ∂yEy)|(0,0) = ∆x∆y (∇ · E)|(0,0).
Thus the divergence is the outgoing flux per unit area, or volume in three dimensions.
This shows us why the two forms of Gauss’s law are equivalent. For example, starting from
the differential form, the left-hand side is the flux per volume, while the right-hand side is
the charge per volume, divided by ϵ0. Integrating both sides over some volume relates the
total flux to the total charge divided by ϵ0, which is Gauss’s law in integral form.
Example 3
Suppose the region 0 < x < d has charge density −ρ, and the region −d < x < 0 has charge
density ρ. Find the electric field everywhere.
Solution
By translational symmetry, the field always points along x̂ and only depends on x, E(r) =
E(x)x̂. By applying the integral form of Gauss’s law to a rectangular prism, with one side
at xl and another at xr, we have
E(xr) − E(xl) =
1
ϵ0
Z xr
xl
ρ(x)dx, E(x) =
1
ϵ0
Z x
0
ρ(x)dx + E0.
Since the divergence of E(r) is just ∂E(x)/∂x, this clearly satisfies the differential form of
Gauss’s law. To fix the undetermined constant E0, we could demand the field be zero on
both sides of the charge distribution, motivated by symmetry. Then we have
E(x) =
ρ
ϵ0
×

 
 
d − x 0 < x < d,
d + x −d < x < 0,
0 elsewhere.
Example 4
Find the electric field of a spherically symmetric charge density ρ(r).
Solution
By spherical symmetry, the field always points radially and only depends on r, E(r) = E(r)r̂.
By applying the integral form of Gauss’s law to a sphere of radius r,
4πr2
E(r) =
1
ϵ0
Z r
0
dr′
4πr′2
ρ(r′
), E(r) =
1
ϵ0
1
r2
Z r
0
dr′
r′2
ρ(r′
).
Let’s check that this indeed satisfies the differential form of Gauss’s law, using the divergence
5

Kevin Zhou Physics Olympiad Handouts
in spherical coordinates. For any vector field F = Frr̂ + Fθθ̂+ Fφφ̂, the divergence is
∇ · F =
1
r2
∂(r2Fr)
∂r
+
1
rsinθ
∂
∂θ
(Fθ sinθ) +
1
rsinθ
∂Fφ
∂φ
.
Since E only has a radial component, Er = E(r), we quickly recover the desired result,
∇ · E =
1
r2
∂(r2E(r))
∂r
=
1
r2ϵ0
∂
∂r
Z r
0
dr′
r′2
ρ(r′
) =
r2ρ(r)
r2ϵ0
=
ρ(r)
ϵ0
.
[3] Problem 5. Consider a vector field expressed in polar coordinates, F = Frr̂ + Fθθ̂ where r̂ and θ̂
are unit vectors in the radial and tangential directions. Gauss’s law in differential form still works
in these coordinates, but the form of the divergence is different.
By considering the flux per unit area out of a small region bounded by r and r + dr, and θ and
θ+dθ, and applying Gauss’s law in integral form, find what the divergence in polar coordinates must
be for Gauss’s law in differential form to hold. (Optional: try generalizing to spherical coordinates.)
Solution. By summing up contributions from each of the four sides, and letting (Fr,Fθ) be the
vector field at one of the corners, the flux through the region is
dΦ = (Fr + dFr)((r + dr)dθ) − Fr(rdθ) + (Fθ + dFθ)dr − Fθdr.
In two dimensions, the divergence is the flux per area, dA = rdrdθ, so
∇ · F =
dΦ
dA
=
1
r
∂(rFr)
∂r
+
1
r
∂Fθ
∂θ
.
In case you’re wondering, the answer for spherical coordinates in three dimensions is
∇ · F =
1
r2
∂(r2Fr)
∂r
+
1
rsinθ
∂(Fθ sinθ)
∂θ
+
1
rsinθ
∂Fϕ
∂ϕ
where ϕ is the angle that goes from zero to 2π.
[4] Problem 6. This subtle problem will expose a hidden assumption we’ve made in the previous two
examples. Suppose that all of space is filled with uniform charge density ρ.
(a) Show that E = (ρ/ϵ0)xx̂ obeys the differential form of Gauss’s law.
(b) Show that E = (ρ/3ϵ0)rr̂ also obeys Gauss’s law.
(c) Argue that by symmetry, E = 0. Show that this does not obey Gauss’s law.
(d) ⋆ What’s going on? Which, if any, is the actual field? If you think there’s more than one
possible field, how could that be consistent with Coulomb’s law, which gives the answer
explicitly? For that matter, what does Coulomb’s law say about this setup, anyway?
Solution. (a) We see that ∇ · E = ∂x((ρ/ϵ0)x) = ρ/ϵ0, as desired.
(b) In Cartesian coordinates, this field is
E =
ρ
3ϵ0
(xx̂ + yŷ + zẑ)
whose divergence is ρ/ϵ0, as desired.
6

Kevin Zhou Physics Olympiad Handouts
(c) This has to hold by symmetry because the electric field can’t point in any particular direction,
by rotational symmetry. It also can’t just point radially, because that breaks translational
symmetry; the center is a special point. So the only option is E = 0.
But then clearly ∇ · E = 0, so Gauss’s law is not obeyed.
(d) The issue is boundary conditions. Just like any differential equation, the solution for the
electric field is not defined without boundary conditions, just like how a solution for Newton’s
second law, F = ma, is not defined without specifying an initial position and velocity.
One common way to resolve the ambiguity, used in example 3, is to assume the field goes to zero
at infinity. This is equivalent to assuming there’s no “extra” field produced by other charges
outside the ones we’re considering. (Of course, in real experiments, that’s not guaranteed,
and we always have to worry about “shielding” external fields, such as from other pieces of
equipment or static charges. Even the Earth makes a sizable vertical electric field, which
is occasionally discharged by lightning.) However, we can’t do this here because the charge
density extends out to infinity too.
Another common way to resolve the ambiguity, used in example 4, is to assume that the
field shares the same symmetries as the charge distribution. But in this case, that’s not
even possible, because the charge distribution has too much symmetry. (It is translationally
symmetric, and rotationally symmetric about every point!) It is impossible to pick a set of
boundary conditions that maintains all these symmetries. That’s why there are many equally
good answers, depending on which symmetries you break.
One might think that Coulomb’s law could give us a unique answer. Coulomb’s law for a point
charge is itself derived by implicitly assuming that there are no “extra” fields flying around,
just the spherically symmetric field of the point charge itself. This looks very reasonable,
so what stops us from just saying that each charge in this problem has such a field, and
then integrating over the charges? Well, if you write down the integral, you’ll find that it’s
divergent, analogous to the integral
R∞
−∞ xdx. By itself, the integral is not even well-defined.
To get an answer, you have to “regulate” the integral (i.e. change it in a way that makes it
well-defined). One possible regulator, for example, is to just chop off the limits of integration
at finite values, like
RL
−L xdx. But that particular regulator is equivalent to just replacing
the charge distribution with a finite one centered at the origin! In other words, Coulomb’s
law also fails to give a unique answer, because it requires a regulator to give a well-defined
answer, and there are many possible regulators. If you treat the charge distribution as a giant
ball with center at the origin, you get the result of part (b). If you treat it as a thick, huge
slab along the yz plane centered at the origin, you get the result of part (a). The symmetry
argument fails once again, because all the regulators break some symmetry. This is a simple
example of “anomalous symmetry”, an important idea in theoretical physics.
The exact same problem appears in Newtonian cosmology, where charge density is replaced
with mass density, and this problem confused Newton himself, who incorrectly thought that
g = 0 by symmetry. In this context, all regulators/boundary conditions are unsatisfactory.
Of course, we want a rotationally symmetric universe to match experiment, so we have to put
that in by hand. But then every solution has a center towards which everything collapses, so
to keep the solar system an inertial frame, we’d have to put it at the center of the universe!
Surely, this would make Copernicus roll in his grave.
7

Kevin Zhou Physics Olympiad Handouts
Some of these problems are fixed in general relativity. You still have to postulate rotational
symmetry (again, on the basis of experimental data), but once you do that, there are no
further problems. That’s because in general relativity, acceleration is not absolute in the
way it is in Newtonian mechanics. Instead, there is no center; everything just gets closer to
everything else. For further discussion and references, see this paper.
2 Electrostatic Forces
Idea 3
If you follow an electric field line, the potential monotonically decreases along it.
[2] Problem 7. Two questions about electrostatic equilibrium.
(a) Prove that when a system of point charges is in equilibrium (i.e. the net force on each of the
charges due to the others vanishes), the total potential energy of the system is zero.
(b) Show that for a positive point charge in the electric fields of fixed, positive point charges,
there is a path along which the charge can be moved to infinity without ever needing positive
external work, i.e. a path along which the potential only decreases.
Solution. (a) Fix some point O not on any of the charges, and scale the system up about O
continuously, to send all the charges to infinity. At all points in time, there are no forces
on any of the charges, so no work is done. The final potential energy is zero, so the initial
potential energy must also have been zero.
(b) Consider the field line going through the test charge. It can’t end on a negative charge, since
there are none, so it must end at infinity. Moving the charge along this field line gives the
desired path.
Idea 4
Sometimes it’s easier to calculate the force of A on B rather than the (equal and opposite)
force of B on A.
Example 5
Consider two uniformly charged spherical balls with radii ai, both with charge q, and their
centers separated by a distance r > a1 +a2. What is the net force of the first on the second?
Solution
It might seem obvious that the answer is q2/4πϵ0r2, with no dependence on a1 and a2. In
fact, if you’ve done any orbital mechanics, you’ve almost certainly assumed that the force
between two spherical bodies (such as the Earth and Sun) is Gm1m2/r2, which is equivalent.
This has a simple but slightly tricky proof. By the shell theorem, we can set a1 = 0, replacing
the first ball with a point charge, because this produces the same field at the second ball.
But the force on the second ball depends on the electric field at every point on it, which
8

Kevin Zhou Physics Olympiad Handouts
seems to require doing an integral. To avoid this, we use Newton’s third law, which tells us
it’s equivalent to compute the force on the first ball. To compute that, we may set a2 = 0 by
the shell theorem again. This reduces us to the case of two point charges, giving the answer.
Example 6: Purcell 1.28
Consider a point charge q. Draw any imaginary sphere of radius R around the charge. Show
that the average of the electric field over the surface of the sphere is zero.
Solution
Imagine placing a uniform surface charge σ on the sphere. Then the average of the point
charge’s electric field over the sphere times 4πR2σ is the total force of the point charge on
the charged sphere. But this is equal in magnitude to the force of the charged sphere on
the point charge, which must be zero by the shell theorem. Thus the average field over the
sphere has to vanish.
[3] Problem 8 (Purcell 1.28). Some extensions of the previous example.
(a) Show that if the charge q is instead outside the sphere, a distance r > R from its center, the
average electric field over the surface of the sphere is the same as the electric field at the center
of the sphere.
(b) Show that for any overall neutral charge distribution contained within a sphere of radius R,
the average electric field over the interior of the sphere is −p/4πϵ0R3 where p is the total
dipole moment.
Solution. The same Newton’s third law trick will work for both parts.
(a) Let the desired answer be Eavg and let the charge q be at r. Now imagine a charge Q
is uniformly distributed over the surface of the sphere. The force of the charge q on the
distributed charge Q is precisely FqQ = QEavg. But we also know that
FqQ = −FQq = −
kQq
r2
r̂
by Newton’s third law and the shell theorem. Therefore we have
Eavg = −
kq
r2
r̂
which is precisely the electric field at the center of the sphere due to q. (Note that r̂ points
from the center of the sphere to the charge q.)
(b) Let the desired answer be Eavg. Now imagine a charge Q is uniformly distributed over the
volume of the sphere. The force of the charge distribution (with charge density ρ(x)) on the
distributed charge Q is precisely FqQ = QEavg. But we also know that
FqQ = −FQq = −
Z
ρ(r)EQ(r)d3
r
9

Kevin Zhou Physics Olympiad Handouts
where EQ is the field due to Q. Now, this field is easy to find, as it is just the field of a
uniformly charged sphere, so
EQ =
kQ
R3
r
as shown in problem 1. Putting this in the integral, we have
QEavg = −
kQ
R3
Z
ρ(r)rd3
r
so by the definition of the dipole moment,
Eavg = −
k
R3
Z
ρ(r)rd3
r = −
kp
R3
as desired.
Idea 5
The integral
R
dS over a surface with a fixed boundary is independent of the surface.
We proved this in the surface tension section of M2 using a mechanical argument. For a
proof using vector calculus, see problem 1.62 of Griffiths.
[3] Problem 9. A hemispherical shell of radius R has uniform charge density σ and is centered at the
origin. Find the electric field at the origin. (Hint: combine the previous two ideas.)
Solution. Place a point charge q at the origin. To find the magnitude of the field, we will compute
the force on the hemisphere divided by q. The force on the hemisphere is
Z
q
4πϵ0R2
σ dS =
qσ
4πϵ0R2
Z
dS.
By idea 5, we can replace the surface of integration with a flat disk, so |
R
dS| = πR2. Thus, the
force is F = qσ/4ϵ0, so the field is
E =
σ
4ϵ0
.
[3] Problem 10. A point charge q is placed a distance a/2 above the center of a square of charge
density σ and side length a. Find the force of the square on the point charge.
Solution. Don’t worry if you found this one quite hard, because its solution uses a unique trick.
It’s equivalent to find the force of the point charge on the square. Set up coordinates so that the
square is in the xy plane, and its center is the origin. Then we have
F = σ
Z
EdS
where the surface integral is over the square. On the other hand, we know that F is along the ẑ
direction by symmetry, so
F = F · ẑ = σ
Z
Ez dS.
Now, since dS is parallel to ẑ, this is in fact the same thing as
F = σ
Z
E · dS
10

Kevin Zhou Physics Olympiad Handouts
where the integral is just the electric flux through the square! By symmetry, this flux is q/6ϵ0, so
F =
σq
6ϵ0
.
I’ve never seen this idea used anywhere else, and I generally try to avoid covering single-use tricks.
But this one is particularly nice, and it’ll be necessary to set up a related discussion later.
Example 7
At a point on a surface, there is charge density σ, and electric fields E1 and E2 on the two
sides of the surface. Show that the surface experiences a force σ(E1 + E2)/2 per unit area.
Solution
These electric fields are the sum of an external electric field E0, made by charges elsewhere,
and a field due to the charges on this local patch of the surface. The latter is σn̂/2ϵ0, which
flips sign across the surface and explains why E1 and E2 are different. The external field
E0 does not change discontinuously, and only E0 contributes to the net force on the surface
patch, since an object can’t exert a force on itself.
Since the contributions from the surface patch to E1 and E2 have opposite signs, we have
E0 = (E1 + E2)/2, immediately giving the result.
[4] Problem 11 (Griffiths 2.47, PPP 113, MPPP 140). Consider a uniformly charged spherical shell
of radius R and total charge Q.
(a) Find the net force that the southern hemisphere exerts on the northern hemisphere.
(b) Generalize part (a) to the case where the sphere is split into two parts by a plane whose
minimum distance to the sphere’s center is h.
(c) Generalize part (a) to the case where the two hemispherical shells have uniform charge density,
opposite orientation, and the same center, but have different total charges q and Q, and
different radii r and R, where r < R.
Solution. (a) The northern hemisphere exerts no net force on itself, so it is equivalent to find
the force on the northern hemisphere due to the entire sphere. The surface charge density is
σ = Q/(4πR2). By the result of example 7, the outward pressure on the northern hemisphere
is σ2/2ϵ0. Therefore, the total force is
F =
σ2
2ϵ0
Z
N
dS =
σ2
2ϵ0
(πR2
) =
Q2
32πϵ0R2
where N refers to the northern hemisphere, and the surface integral was done as in problem 9.
(b) This is exactly the same as in part (a), except that now the integral over the piece is
Z
dS = π(R2
− h2
)
which gives the result
F = (σ2
/2ϵ0)π(R2
− h2
) =
Q2
32πϵ0R2
(1 − h2
/R2
).
11

Kevin Zhou Physics Olympiad Handouts
(c) This can be solved using an ingenious superposition and symmetry argument.
The force we want to compute is shown in (a). Now consider superposing a uniformly negatively
charged sphere with radius just larger than R, as shown in (b). By the shell theorem, this
doesn’t change the force on the hemisphere of radius r. The result of the superposition is (c).
Flipping the charge of one of the hemispheres in (c) flips the force, leading to (d). Finally,
reflecting (d) gives (e).
This has all been preamble to the ingenious step: superpose (a) and (e) to get (f), which
involves the force on a complete sphere of radius r. Using Newton’s third law, 2F can now
be computed by finding the force on the hemisphere. But that is easy because of the shell
theorem, which tells us that F is the net force on the hemisphere shown in (g). Using the
method of problem 9 again, we conclude
F =
q
4πϵ0R2
(πR2
)
Q
2πR2
=
Qq
8πϵ0R2
which is independent of r! (Setting r = 0 and r = R recovers the answers to two previous
problems.)
Example 8: IPhO 2020.1A
A point charge of mass m and charge −q is placed at the center of a cube with side length a,
whose volume has uniform charge density ρ. The point charge is allowed to slide along a
straight line, which has an arbitrary orientation, so that the distance along the line from the
center to one of the cube’s faces is L.
12

Kevin Zhou Physics Olympiad Handouts
L
a
Find the angular frequency of small oscillations.
Solution
The official solution goes as follows: consider displacing the point charge away from the
origin by some small amount r. The cube of charge can then be decomposed into (1) a
slightly smaller cube of charge centered around the point charge’s new position, and (2)
three thin plates of charge on the faces opposite to the charge’s motion. By symmetry, (1)
contributes nothing, and we know what (2) contributes from the answer to problem 10. The
result is a restoring force proportional to −r, whose magnitude has no dependence on the
orientation of r, so the oscillation frequency doesn’t depend on L. Once you know this, you
can orient the line any way you want, so the problem is simple to finish.
Personally, I don’t like this problem because the intended solution requires knowing the
answer to problem 10, which itself is pretty tricky. That is, the difficulty of the problem
depends mostly on whether you’ve seen that tough, but standard problem elsewhere.
However, I’m including it as an example because there’s another way to solve it, which is a
bit more advanced, but quite illustrative.
Since this is a question about small oscillations, it suffices to expand the potential energy to
second order about the center of the cube. The most general possible expression is
V (x,y,z) = V0 + b1x + b2y + b3z + c1x2
+ c2y2
+ c3z2
+ c4xy + c5yz + c6xz + O(r3
).
The constant V0 doesn’t matter, so we can just ignore it. And since E vanishes at the center,
the linear terms bi are all zero as well. Because the x, y, and z axes are all equivalent by
cubical symmetry (e.g. we can rotate them into each other, while keeping the cube the same),
c = c1 = c2 = c3, c′
= c4 = c5 = c6.
Thus, our complicated original expression reduces to
V (x,y,z) = c(x2
+ y2
+ z2
) + c′
(xy + yz + xz) + O(r3
).
Finally, note that the cube is symmetric under reflections x → −x, y → −y, or z → −z.
These reflections keep the c term the same, but flip the c′ term. Then we must have c′ = 0,
giving the remarkably simple result
V (r) = cr2
+ O(r3
).
13

Kevin Zhou Physics Olympiad Handouts
The potential near the origin is spherically symmetric (to second order), even though the
setup as a whole isn’t! (It would also hold at the center of, e.g. a tetrahedron or octahedron,
but not a rectangular prism. The math to figure out when this happens is called group theory.)
So now we only need to find the coefficient c. I’ll do this in a way that introduces some useful
facts. Consider the divergence of the gradient of V , also called the Laplacian. It satisfies
∇ · (∇V ) = ∇2
V =
∂2V
∂x2
+
∂2V
∂y2
+
∂2V
∂z2
.
By Gauss’s law, we have Poisson’s equation
∇2
V = −∇ · E = −
ρ
ϵ0
.
Using this, we can easily compute the value of c, giving
V (r) = −
ρr2
6ϵ0
+ O(r3
).
Therefore, for a displacement r in any direction, the restoring force is ρqr/3ϵ0, so
ω =
r
ρq
3ϵ0m
independent of the orientation of the line.
Remark
In the previous example, we saw that cubical symmetry and the simplicity of Taylor series
combine to yield an “accidental” spherical symmetry. Accidental symmetry is an important
concept in modern physics. For example, protons are stable because of an accidental symmetry
in the Standard Model, which ensures that baryon number is perturbatively conserved. That
explains why we often expect proton decay to occur in extensions of the Standard Model,
such as grand unified theories. For more discussion, see this article.
3 Continuous Charge Distributions
Idea 6
In almost all cases in Olympiad physics, there will be sufficient symmetry to reduce any
multiple integral to a single integral. Remember that when using Gauss’s law, the Gaussian
surface may be freely deformed as long as it doesn’t pass through any charges.
[2] Problem 12 (Purcell 1.15). A point charge q is located at the origin. Compute the electric flux
that passes through a circle a distance ℓ from q, subtending an angle 2θ as shown below.
14

Kevin Zhou Physics Olympiad Handouts
Solution. Let ℓ = Rcosθ, and deform the disk into a spherical cap with radius R. Then the answer
is then just q/ϵ0 times the ratio of the area of the cap to the total area of the sphere. In spherical
coordinates, this is
q
4πϵ0
Z θ
0
2π sinθ′
dθ′
=
q
ϵ0
1 − cosθ
2
.
You can also show this using the original flat Gaussian surface, though that takes more work.
[3] Problem 13 (Purcell 1.8). A ring with radius R has uniform positive charge density λ. A particle
with positive charge q and mass m is initially located in the center of the ring and given a tiny kick.
If the particle is constrained to move in the plane of the ring, show that it exhibits simple harmonic
motion and find the angular frequency.
Solution. Suppose it is moved by r ≪ R in the x direction. Set up polar coordinates with θ = 0
being the positive x axis. By the law of cosines, we have
U(r) = 2
Z π
0
1
4πϵ0
q(λRdθ)
√
R2 + r2 − 2Rrcosθ
=
qλ
2πϵ0
Z π
0
dθ
p
1 + (r2/R2) − 2(r/R)cosθ
.
Next, we can expand the square root using a Taylor series. We know the force at the center of the
ring vanishes, and force is the first derivative of potential. Thus, the first nonzero term has to be
proportional to r2, so we need to expand to second order in r/R to find it. The result is
U(r) =
qλ
2πϵ0
Z π
0
"
1 +
r
R
cosθ −
1
2
r2
R2
+
3
8

−
2r
R
cosθ
 2
#
dθ
=
qλ
2πϵ0
Z π
0
r2
2R2
(3cos2
θ − 1)dθ + const
=
qλr2
8ϵ0R2
+ const
where the term proportional to r integrates to zero, as expected. This is essentially the same
calculation as an example in M6. Thus, the effective spring constant is k = qλ/4ϵ0R2, so
ω =
r
qλ
4mϵ0R2
.
You could also do this problem directly with Coulomb’s law, but one advantage of using potential
energy is that you don’t have to think about the directions of any vectors.
[3] Problem 14 (Purcell 1.12). Consider the setup of problem 9. If the hemisphere is centered at the
origin and lies entirely above the xy plane, find the electric field at an arbitrary point on the z-axis.
(This is a bit complicated, and is representative of the most difficult kinds of integrals you might
have to set up in an Olympiad. For a useful table of integrals, see Appendix K of Purcell.)
15

Kevin Zhou Physics Olympiad Handouts
Solution. Set up spherical coordinates with the hemisphere being the equation of r = R and
θ ∈ [0,π/2]. Suppose our location is (0,0,z). The hemisphere has surface charge σ. We see that
the field points in the z-direction by symmetry, so we’ll only worry about that piece. The ring at
angle θ with width dθ provides fields at an angle, and some geometry shows that we have to correct
by a factor of Rcosθ−z
r where r ≡
√
R2 + z2 − 2Rz cosθ. We then have
dEz = −
σ(2πR2 sinθdθ)
4πϵ0r2
·
Rcosθ − z
r
,
so
E(z) = −
σR2
2ϵ0
Z π/2
0
(Rcosθ − z)sinθdθ
(R2 + z2 − 2Rz cosθ)3/2
.
Consulting Appendix K tells us that
E(z) =
σR2
2ϵ0z2
R
√
R2 + z2
−
R − z
p
(R − z)2
!
.
Taking some care with the square root, we conclude
E(z) =
σR2
2ϵ0z2
×



1 √
1+z2/R2
− 1 z < R
1 √
1+z2/R2
+ 1 z > R
.
[3] Problem 15.   ^ 1 0USAPhO 2018, problem B1.
Idea 7: Electric Dipoles
The dipole moment of two charges q and −q separated by d is p = qd. More generally, the
dipole moment of a charge configuration is defined as
p =
Z
ρ(r)rd3
r.
For an overall neutral charge configuration, the leading contribution to its electric potential
far away is the dipole potential,
ϕ(r,θ) =
pcosθ
4πϵ0r2
where θ is the angle of r to p.
Remark: Remembering the Dipole Potential
Let ϕ0(r) = k/r be the potential for a unit charge at the origin. A point dipole of dipole
moment p consists of charges ±p/d separated by d, in the limit d → 0. So the potential is
p lim
d→0
ϕ0(r) − ϕ0(r + d)
d
.
But this is precisely the (negative) derivative, so you can get the dipole potential by differen-
tiating the ordinary potential! Indeed, for a dipole aligned along the ẑ axis,
−
∂
∂z
kp
r
=
kp
r2
∂r
∂z
=
kp
r2
z
r
=
kpcosθ
r2
16

Kevin Zhou Physics Olympiad Handouts
as above. Higher derivatives give potentials for quadrupoles and higher multipoles, which
we’ll see in E8.
[3] Problem 16. In this problem we’ll derive essential results about dipoles, which will be used later.
(a) Using the binomial theorem, derive the dipole potential given above, for a dipole made of a
pair of point charges ±q separated by distance d, oriented along the z-axis.
(b) Differentiate this result to find the dipole field,
E(r) =
p
4πϵ0r3
(2cosθr̂ + sinθ θ̂)
where the expression above is in spherical coordinates. (Hint: feel free to use the expression
for the gradient in spherical coordinates.)
(c) Show that this may also be written as
E(r) =
1
4πϵ0r3
(3(p · r̂)r̂ − p).
You don’t need to memorize these expressions, but it’s useful to remember what a dipole field
looks like, the fact that its magnitude is roughly p/4πϵ0r3, and the fact that the numeric
prefactor is 2 along the dipole’s axis and 1 perpendicular to it.
Solution. (a) Let the charges be at (0,0,0) and (0,0,d). Then
V (r,θ) =
q
4πϵ0r
−1 +
1
p
1 − 2(d/r)cosθ + (d/r)2
!
≈
qdcosθ
4πϵ0r2
.
(b) We use the definition E = −∇V , along with the gradient in spherical coordinates. Then
Er = −
∂V
∂r
=
p
4πϵ0r3
· 2cosθ
and
Eθ = −
1
r
∂V
∂θ
=
p
4πϵ0r3
· sinθ,
as desired.
(c) We see that p · r̂ = pcosθ and p = pẑ = p(r̂cosθ − θ̂sinθ). Thus,
3(p · r̂)r̂ − p = 3pcosθr̂ − p(r̂cosθ − θ̂ sinθ) = p(2cosθr̂ + sinθθ̂),
as desired.
[3] Problem 17.   m 1 0USAPhO 2002, problem B2.
[3] Problem 18.   m 1 0USAPhO 2009, problem B2. This essential problem introduces useful facts
about dipole-dipole interactions.
17

Kevin Zhou Physics Olympiad Handouts
Idea 8
The potential energy of a set of point charges is
U =
1
4πϵ0
X
i<j
qiqj
|ri − rj|
=
1
2
X
i
qiV (ri).
The sum over “i < j” indicates that we consider each pair of distinct point charges once.
We don’t include the energy of a single point charge due to its interaction with itself, which
would be infinite. For a continuous charge distribution, the analogous equations are
U =
1
2
Z
ρ(r)V (r)d3
r =
ϵ0
2
Z
|E(r)|2
d3
r.
Energy doesn’t obey the superposition principle, because it’s inherently quadratic, not linear.
[3] Problem 19. In this problem we’ll apply the above results to balls of charge.
(a) Compute the potential energy of a uniformly charged ball of total charge Q and radius R.
(b) Show that the potential energy of two point charges of charge Q/2 separated by radius R is
lower than the result of part (a).
(c) Hence it appears that it is energetically favorable to compress a ball of charge into two point
charges. Is this correct?
Solution. (a) We can find the potential by building up the ball by placing charges from infinity.
Consider a shell of charge at radius r, and let the charge density be ρ = Q/(4
3πR3). The
energy needed to put the shell there is dU = kQenc dQ/r, where Qenc = 4
3ρπr3 is the charge
inside and dQ = 4ρπr2 dr is the charge in the shell added to the sphere. Then the energy
needed to build the ball, which is the potential energy of the ball, is
Ua =
Z R
0
kQ
r3
R3
(3Qr2
dr/R3
)/r =
3kQ2
R6
Z R
0
r4
dr =
3kQ2
5R
=
3Q2
20πϵ0R
.
(b) From U = kq1q2/r, we find that for two point charges the potential energy is
Ub =
kQ2
4R
=
Q2
16πϵ0R
which is less than Ua.
(c) It’s wrong because in part (b), the energy needed to create the point charges, by squeezing
the two halves of the ball down, is not included. Plugging in a radius of zero into part (a), we
see that this energy is actually infinite. (Of course, in reality it doesn’t take infinite energy
to produce electrons, which are point charges. Classical electrodynamics breaks down when
describing such a process, which can only be properly understood within relativistic quantum
field theory.)
[3] Problem 20. An insulating circular disk of radius R has uniform surface charge density σ.
(a) Find the electric potential on the rim of the disk.
18

Kevin Zhou Physics Olympiad Handouts
(b) Find the total electric potential energy stored in the disk.
Solution. (a) Place the origin at a point on the rim and use polar coordinates. Because the
polar equation of a circle is r = 2Rcosθ, we have
V =
Z π/2
−π/2
dθ
Z 2Rcosθ
0
σ
4πϵ0
dr =
Z π/2
−π/2
σR
2πϵ0
cosθdθ =
σR
πϵ0
.
(b) Consider building up the ring outward in radius. When we add charges to bring the radius
from r to r + dr, we do work
dW = V dq =
σr
πϵ0
(2πrσ dr) =
2σ2r2
ϵ0
dr
which means
W =
Z R
0
2σ2r2
ϵ0
dr =
2σ2R3
3ϵ0
.
[3] Problem 21. Consider a uniformly charged ball of total charge Q and radius R. Decompose this
ball into two parts, A and B, where B is a ball of radius R/2 whose center is a distance R/2 of the
ball’s center, and A is everything else. Find the potential energy due to the interaction of A and B,
i.e. the work necessary to bring in B from infinity, against the field of A.
Solution. If we tried to compute the potential energy directly, by integrating over A and B, we
would get messy integrals. Instead, let’s consider bringing in B in three steps:
1. At infinity, compress B into a point charge Q/8.
2. Move this point charge to the center of the B-shaped hole in A.
3. Expand the point charge back into the original shape of B.
Our first claim is that the total work needed to do steps (1) and (3) is zero. These two steps are very
close to being opposites; the only difference in that in step (3), the expansion takes place within
the field of A. By the same reasoning as in problem 1, the field of A within the B-shaped hole is
constant, with magnitude
E =
k(Q/8)
(R/2)2
=
kQ
2R2
This constant field does no net work when B is expanded, because the positive work done on one
half of B is cancelled by the negative work on the other half.
Therefore, we only have to calculate the work done for step (2), which is easy. Applying
superposition and the shell theorem, the work needed to bring the point charge to the point where
the surface of A meets the surface of the B-shaped hole is
W1 =
Q
8

kQ
R
−
k(Q/8)
R/2

.
Next, moving the point charge from this point to the center of the B-shaped hole takes work
W2 =
R
2
Q
8
E =
kQ2
32R
.
The total work is
W1 + W2 =
kQ2
8R
.
19

Kevin Zhou Physics Olympiad Handouts
Example 9
Since Newton’s law of gravity is so similar to Coulomb’s law, the results we’ve seen so far
should have analogues in Newtonian gravity. What are they? For example, what’s the
gravitational Gauss’s law?
Solution
The fundamental results to compare are
F = −
Gm1m2
r2
, F =
q1q2
4πϵ0r2
where the minus sign indicates that the gravitational force is attractive, while the electrostatic
force between like charges is repulsive. Then we can transform a question involving (only
positive) electric charges to one involving masses if we map
q → m,
1
4πϵ0
→ −G, E → g.
Thus, while electrostatics is described by
∇ × E = 0, ∇ · E =
ρ
ϵ0
,
I
E · dS =
Q
ϵ0
,
the gravitational field is described by
∇ × g = 0, ∇ · g = −4πGρm,
I
g · dS = −4πGM
where ρm is the mass density. Similarly, the potential energy can be written in two ways,
U =
1
2
Z
ρm(r)ϕ(r)d3
r = −
1
8πG
Z
|g(r)|2
d3
r
where ϕ(x) is the gravitational potential. This result was first written down by Maxwell.
Remark
Here’s a philosophical question: is potential energy “real”? You likely think the answer
is obvious, but about half of your friends probably think the opposite answer is obviously
correct! In fact, in the 1700s, there was a lively debate over whether the ideas of kinetic
energy and momentum, which at the time were given various other names, were worthwhile.
Which one of the two was the true measure of motion? In our modern language, proponents
of energy pointed out that the momentum always vanished in the center of mass frame,
which made it “trivial”, while supporters of momentum replied that kinetic energy was
clearly not conserved in even the simplest of cases, like inelastic collisions.
In the 1800s, thermodynamics was developed, allowing the energy seemingly lost in inelastic
collisions to be accounted for as internal energy. But there still remained the problem that
20

Kevin Zhou Physics Olympiad Handouts
kinetic energy was lost in simple situations, such as when balls are thrown upward. By the
mid-1800s, the modern language that “kinetic energy is converted to potential energy” was
finally standardized, but it was still common to read in textbooks that potential energy was
fake, a mathematical trick used to patch up energy conservation. After all, potential energy
has some suspicious qualities. If a ball has lots of potential energy, you can’t see or feel it, or
even know it’s there by considering the ball alone. It doesn’t seem to be located anywhere
in space, and its amount is arbitrary, as a constant can always be added.
In the late 1800s, a revolution in physics answered some of these questions. Maxwell and his
successors recast electromagnetism as a theory of fields, and showed that the dynamics of
charges and currents were best understood by allowing the fields themselves to carry energy
and momentum. We’ll cover this in detail in E7, but for now, it implies that electrostatic
potential energy is fundamentally stored in the field, with a density of ϵ0E2/2. This implies
that its location and total amount are directly measurable.
Maxwell believed that the dynamics of fields emerged from the microscopic motions and
elastic deformations of an all-pervading ether, in the same way that, say, a fluid’s velocity
field emerges from the average motion of fluid molecules. This makes it manifestly positive,
so he was disturbed to find that the energy density of a gravitational field is negative! He
therefore concluded that gravity could not be described as a vector field.
A few decades later, the arrival of special relativity answered some questions and reopened
others. On one hand, it demolished Maxwell’s vision of the ether. On the other hand, it finally
answered the question of whether all kinds of potential energy are “real”, and it got rid of
the freedom to add arbitrary constants. That’s because in special relativity, the total energy
of a system at rest is related to its mass by E = mc2, and the mass is directly measurable.
This finally puts thermal energy, elastic potential energy, and field energy on an equal footing.
Here’s the most modern view of energy conservation. All particles and their interactions are
fundamentally described by relativistic quantum fields. A famous result called Noether’s
theorem implies that whenever such a theory is time-translationally symmetric, there
is a conserved quantity which we call the energy. (The distinction between kinetic and
potential energy becomes irrelevant; it’s all just energy.) The density of energy in space
can be computed from the state of the fields, but it doesn’t need to be explained, as
Maxwell imagined, by the internal motion of whatever the fields are made of. The fields are
fundamental: they aren’t made of anything; instead, they make up everything!
What happens when we throw gravity into the mix? As we’ll discuss further in R3, it turns
out that at nonrelativistic velocities, the dynamics of gravitating particles can be described
by “gravitoelectromagnetism”, a theory closely analogous to electromagnetism, where moving
masses also source “gravitomagnetic” fields Bg, which result in mv × Bg forces. But the
situation gets much more subtle when we upgrade to full general relativity. Here, the notion
of a gravitational field disappears completely, and is replaced by the curvature of spacetime,
making it hard to define an energy density for it at all. For an accessible overview of the
debate, see this paper. Ultimately, though, it doesn’t matter that much, since it doesn’t
21

Kevin Zhou Physics Olympiad Handouts
impair our ability to use either Newtonian gravity or general relativity.
Example 10
For an infinite line of linear charge density λ, find the potential V (r) by dimensional analysis.
Solution
This example illustrates a famous subtlety of dimensional analysis. The only quantities in
the problem with dimensions are λ, ϵ0, and r. To get the electrical units to balance, we have
V (r) =
λ
ϵ0
f(r)
where f(r) is a dimensionless function. But there are no nontrivial dimensionless functions
of a single dimensionful quantity r. The only possibilities are that f(r) is a dimensionless
constant, or that f(r) is infinite. In the first case, the electric field would vanish, which can’t
be right. In the second case, it is unclear how to calculate the electric field at all.
In fact, the electric potential is infinite, if you insist on the usual convention of setting
V (∞) = 0. In that case, we have
V (r) =
Z ∞
r
E(r)dr =
Z ∞
r
λ
2πϵ0
dr
r
= ∞
for any r. But this is useless; to get a finite result we can actually work with, we need to
subtract off an infinite constant from the potential. Equivalently, we need to set the potential
to be zero at some finite distance r = r0. This is a very simple example of renormalization,
which is an important concept in modern physics. We then have
V (r) =
Z r0
r
E(r)dr =
λ
2πϵ0
log
r0
r
which is perfectly consistent with dimensional analysis.
Notice that in the process of renormalization, a new dimensionful quantity r0 appeared out
of nowhere. This phenomenon is known as dimensional transmutation. Nothing measurable
depends on this new scale (e.g. the electric field is independent of r0), but you can’t write
down quantities like the potential without it.
4 Conductors
Idea 9
In electrostatic conditions, E = 0 inside a conductor, which implies the conductor has constant
electric potential V . This then implies that E is always perpendicular to a conductor’s surface.
By Gauss’s law, the conductor has ρ = 0 everywhere inside, so all charge resides on the surface.
22

Kevin Zhou Physics Olympiad Handouts
By example 7, the outward pressure on the charges at the surface of a conductor is σ2/2ϵ0.
Example 11
Is the charge density at the surface of a charged conductor usually greater at regions of higher
or lower curvature?
Solution
We can’t answer this question in general, because it is usually impossible to solve for
the charge distribution of an irregularly shaped conductor. Charges at any point in the
conductor will influence the charges everywhere else.
However, we can get some insight by considering the limiting case of a conductor made of
two spheres of radii R1 and R2, connected by a very long rod. For the potential to be the
same at both spheres, we must have Q1/R1 = Q2/R2, so the charge is proportional to the
radius, and the charge density is inversely proportional to the radius. Thus, there’s generally
higher charge density at sharper points of the conductor, provided that those points are sharp
enough, or far enough away from the rest of the conductor for the charges on the rest of the
conductor not to matter much. That’s basically all we can say for sure.
[2] Problem 22. Is it possible for a single solid, isolated conductor with a positive total charge to
have a negative surface charge density at any point on it? If not, prove it. If so, sketch an example.
Solution. No. Note that the surface of the conductor has a constant, positive potential. Now
suppose there was a region with negative charge on the conductor, and consider a field line that
ends on such a charge. It can’t have come from infinity, because the potential at infinity is lower
than that of the conductor. And it can’t have come from elsewhere on the conductor, because the
conductor is an equipotential. This yields a contradiction.
Idea 10: Existence and Uniqueness
Here’s an important mathematical fact: suppose the function ϕ is defined on some volume
V with boundary S, and obeys ∇2ϕ = 0 everywhere in V . Also suppose we specify either
the value of ϕ or the value of ∇ϕ · n̂ on every point of S, where n̂ is the normal vector
to the surface; these are called Dirichlet and Neumann boundary conditions, respectively.
Then there always exists a solution for ϕ, and as long as at least one boundary condition is
Dirichlet, the solution is unique. (If none are Dirichlet, we are free to add a constant to ϕ.)
A proof of this statement is given in section 2.4.2 here.
To translate this mathematical statement to something useful for physics, suppose ϕ is the
electric potential in an electrostatic problem. This determines the electric field by E = −∇ϕ.
The condition ∇2ϕ = 0 is just equivalent to ∇ · E = 0, which implies ρ = 0 by Gauss’s law.
In addition, ∇ϕ · n̂ is equal to −E · n̂. Finally, adding a constant to ϕ doesn’t affect E.
Using these facts gives the following translation: suppose there is a volume V containing no
charge density, and either the electric potential or the outward electric field E · n̂ is specified
23

Kevin Zhou Physics Olympiad Handouts
everywhere on its boundary S. Then there is a unique solution for E in V .
Example 12
Consider a conductor with nonzero net charge in an arbitrary environment, and suppose the
conductor has an empty cavity inside. Show that the electric field is zero in the cavity.
Solution
If you don’t know the previous idea, then it seems impossible to answer the question. Can’t
something arbitrarily complicated happen?
However, the problem is immediately solved by the uniqueness theorem. Let V be the cavity.
Since every point on the conductor has the same electric potential, which we call ϕ0, we know
that ϕ = ϕ0 on the boundary S. Therefore, the solution for ϕ inside the cavity is unique.
We know the constant solution ϕ = ϕ0 works, so it must be the only one, so the electric field
vanishes inside the cavity, as desired.
Example 13
Consider an isolated neutral spherical conducting shell of radius R with an arbitrary charge
distribution inside, with total charge Q. Find the electric field outside the shell.
Solution
Let V be the volume outside the shell, and let ϕ = ϕ0 on the shell’s surface. For a given
value of ϕ0, one possible solution is that the potential is that of a point charge at the origin,
ϕ(r) = ϕ0R/r. So by the uniqueness theorem, this is the only solution. In this case, the
value of ϕ0 is related to Q by ϕ0 = Q/(4πϵ0R), which implies E(r) = Qr̂/(4πϵ0r2).
The preceding two examples illustrate the general principle that a layer of conductor “shields”
information from the other side. When you’re inside, you can’t know anything about what’s
going on outside, and when you’re outside, you can only know the total charge inside.
Also, in this example, we weren’t initially given Dirichlet or Neumann boundary conditions.
We were told that the shell is a conductor, which tells us that ϕ = ϕ0 without the specific
value of ϕ0, and the total charge inside, which tells us the surface integral of E · n̂ but not
the value of E·n̂ at any particular point. However, this combination of information was still
enough to fix a unique solution, and it turns out this is true in general: if all the surfaces in
a problem are conductors, then specifying either the potential or total charge on each one
fixes a unique solution. You’ll give a heuristic proof of this in problem 26.
Finally, if you were reading very carefully, you might be wondering why we need to specify
the shell is “isolated.” The reason is that whenever the volume V is infinite, we also need
to specify what is happening at the surface “at infinity.” The default assumption is that the
electric field and potential fall to zero at infinity. (As we’ve seen in problem 6, this becomes
24

Kevin Zhou Physics Olympiad Handouts
more subtle when the charge distribution itself is infinite.)
[2] Problem 23 (Purcell 3.33). The shaded regions represent two neutral conducting spherical shells.
q q
Carefully sketch the electric field. What changes if the two shells are connected by a wire?
Solution. The results are shown below.
Whether or not there are any field lines coming from the charge outside the shell depends on how
close that charge is to the shell. (The entire field configuration in this problem can be found exactly
using the method of images, as shown in E2.) In the case that the two spheres are connected with
a wire, the field in between the two spheres disappears, but nothing else changes.
25

Kevin Zhou Physics Olympiad Handouts
[3] Problem 24.   W 1 0USAPhO 2014, problem A4.
[4] Problem 25 (MPPP 150). A solid metal sphere of radius R is divided into two parts by a planar
cut, so that the surface area of the curved part of the smaller piece is πR2. The cut surfaces are
coated with a negligibly thin insulating layer, and the two parts are put together again, so that the
original shape of the sphere is restored. Initially the sphere is electrically neutral.
The smaller part of the sphere is now given a small positive electric charge Q, while the larger
part of the sphere remains neutral. Find the charge distribution throughout the sphere, and the
electrostatic interaction force between the two pieces of the sphere.
Solution. We know that distributing charge uniformly on the outer surface of the entire sphere will
give a valid configuration, in the sense that the field is everywhere perpendicular to the conductors.
Similarly, distributing equal and opposite charges uniformly on the two flat faces will give a valid
configuration, since it acts like a parallel plate capacitor, making the field vanish everywhere outside.
Neither of these solutions have the right total charge on each piece, but we can fix this by
superposing the two. By solving a system of two equations, we find the charge distribution is
• total charge Q distributed uniformly on the sphere,
• charges ±(3/4)Q distributed uniformly on the flat surfaces.
The two flat faces attract each other and the two curved faces repel each other; there are no other
forces by the shell theorem. The pressure on the flat faces is σ2/2ϵ0. With a little trigonometry, we
find the area of the flat faces is (3/4)πR2, giving a force
F1 =
3Q2
8πϵ0R2
.
As for the repulsive force, using the result of problem 11 we get
F2 = −
3Q2
128πϵ0R2
, Ftot = F1 + F2 =
45
128
Q2
πϵ0R2
.
[3] Problem 26. In this problem we’ll work through a heuristic proof of a version of the uniqueness
theorem. In particular, we will show that for a system of conductors in empty space, specifying the
total charge on each conductor alone specifies the entire surface charge distribution.
(a) Suppose for the sake of contradiction that two different charge distributions can exist, and
consider their difference, which has zero total charge on each conductor. Argue that at least
one conductor must have electric field lines both originating from and terminating on it.
(b) Show that at least one of these field lines must originate from or terminate on another one of
the conductors.
26

Kevin Zhou Physics Olympiad Handouts
(c) By generalizing this reasoning, prove the desired result. (Hint: consider the conductors with
nonzero surface charges that have the highest and lowest potentials.)
For a rigorous proof of this theorem using vector calculus, see section 3.1 of Griffiths.
Solution. (a) Since the overall charge distributions are different, at least one conductor C must
have different charge distributions in the two cases. So when we consider the difference, C
has areas of both positive and negative surface charge. Field lines come out of the former,
and go into the latter.
(b) The field lines can’t connect back to C, because by following the field line, one would prove
that C has a higher potential than itself, which is impossible. They also can’t all go off to
infinity, because we can consider “infinity” to just be a big, far away neutral conductor at zero
potential. If lines both came from infinity to C and from C to infinity, then C would again
have a higher potential than itself, which is impossible. So some field line must go between C
and another conductor C′.
(c) By assumption, at least some of the conductors have nontrivial surface charges on them. So
among those conductors, consider the one with the highest potential ϕmax. As we argued in
part (a), this conductor has to have both field lines coming from it and going into it. Since
potential decreases along field lines, the field lines going into it can’t come from any of the
other conductors, so they have come from infinity. Since infinity is at zero potential, we have
ϕmax ≤ 0.
Now consider the conductor with the lowest potential ϕmin, which has nontrivial surface charges.
Again, at least some field lines have to leave this conductor, but they can’t go anywhere except
for infinity. Since infinity is at zero potential, ϕmin ≥ 0. This forces ϕmin = ϕmax = 0, so
everything must be at zero potential, which means there aren’t any electric field lines at all.
Example 14: Griffiths 7.6
A wire loop of height h and resistance R has one end placed inside a parallel plate capacitor
with electric field E, as shown.
The other end of the loop is far away, where the field is negligible. Find the emf in the loop.
Solution
This is a trick question: if the answer were nonzero, the current would run forever, yielding a
perpetual motion machine. Electrostatic fields always produce zero total emf along any loop.
The σh/ϵ0 voltage drop inside the capacitor is canceled out by the voltage drop due to the
fringe fields, which are small, but accumulate over a long distance. The point of this example
is that, while we can ignore fringe fields for some calculations, they are often essential to get
a consistent overall picture. We’ll revisit the subtleties of fringe fields in E2.
27

Kevin Zhou Physics Olympiad Handouts
[2] Problem 27 (Purcell 3.2). Spheres A and B are connected by a wire; the total charge is zero. Two
oppositely charged spheres C and D are brought nearby, as shown.
The spheres C and D induce charges of opposite sign on A and B. Now suppose C and D are
connected by a wire. Then the charge distribution should not change, because the charges on C
and D are being held in place by the attraction of the opposite charge density. Is this correct?
Solution. This isn’t correct. To see this rigorously, we can use the uniqueness theorem. After
connecting the wires, we have two conductors (A/B, and C/D), each with zero net charge. One
possible solution is to have zero charge everywhere. By uniqueness, this is the only possible solution,
so anything else cannot have been in equilibrium.
That is rigorous, but it might not be intuitive; after all, it looks like the charges on C are stuck
where they are. However, though the charges on C are attracted towards A, they also strongly
repel each other. It’s this repulsion that causes charge on C to start flowing to D when the wire is
connected.
[2] Problem 28 (PPP 149). A distant planet is at a very high electric potential compared with Earth,
say 106 V higher. A metal space ship is sent from Earth for the purpose of making a landing on the
planet. Is the mission dangerous? What happens when the astronauts open the door on the space
ship and step onto the surface of the planet?
Solution. As the space ship approaches the planet, its potential gradually increases from that of
the Earth, to that of the distant planet. Meanwhile, all the astronauts inside are doing just fine
since the ship acts like a Faraday cage. Once the ship lands, it’s already at the same potential as
the planet, and when the astronauts step out, nothing happens. In other words, it’s electric field
that’s dangerous, not potential, and the electric fields in this problem are always small.
Another way to see that there’s no danger is to replace electric fields with gravitational fields,
and thus electric potential with gravitational potential. An elevator in a skyscraper takes you from
a low to a very high gravitational potential. But nothing violent happens when you get off!
Remark
We’ve considered many problems with uniformly charged spheres, cylinders, and planes. In
these cases, all the electric field lines outside the charged region are straight. Is the converse
true? That is, if all the electric field lines in some charge-free region are straight, do the field
lines necessarily have spherical, cylindrical, or planar symmetry?
It seems intuitively plausible, and it’s true, but it’s tricky to prove. The simplest proof I
know uses a bit of differential geometry. We consider the principal curvatures k1 and k2 of
28

Kevin Zhou Physics Olympiad Handouts
adjacent equipotential surfaces. It turns out that the field lines can be straight only if
k1k2(k1 − k2) = 0
which precisely corresponds to allowing spherical (k1 = k2), cylindrical (k1 = 0), or planar
(k1 = k2 = 0) symmetry. For a full derivation, see this paper.
29
