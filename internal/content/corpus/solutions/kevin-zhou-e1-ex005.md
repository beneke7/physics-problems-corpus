---
id: kevin-zhou-e1-ex005
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e1-ex005
solution_type: author
source_document: solution-document-kevin-zhou-e1sol
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E1Sol.pdf."
---

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
