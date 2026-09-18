---
id: kevin-zhou-e1-ex007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e1-ex007
solution_type: author
source_document: solution-document-kevin-zhou-e1sol
source_pdf: sources/kevin_zhou/site/handouts/E1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E1Sol.pdf."
---

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
