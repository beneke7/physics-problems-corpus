---
id: solution-document-kevin-zhou-m6sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-m6-ex001, kevin-zhou-m6-ex002, kevin-zhou-m6-ex004, kevin-zhou-m6-ex005, kevin-zhou-m6-ex008, kevin-zhou-m6-ex009, kevin-zhou-m6-ex010, kevin-zhou-m6-ex011, kevin-zhou-m6-ex012, kevin-zhou-m6-p005, kevin-zhou-m6-p006, kevin-zhou-m6-p013, kevin-zhou-m6-p016, kevin-zhou-m6-p018, kevin-zhou-m6-p019, kevin-zhou-m6-p020, kevin-zhou-m6-p022]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/M6Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Mechanics VI: Gravitation
Chapters 8 and 9 of Kleppner and Kolenkow cover orbits and fictitious forces, as do chapters 8 and
11 of Wang and Ricardo, volume 1, and chapters 7 and 10 of Morin. For much more, see chapters
2 and 3 of Galactic Dynamics by Binney and Tremaine. There is a total of 88 points.
1 Computing Fields
Idea 1
Gravitational fields obey the shell theorem and the superposition principle, which is sufficient
to find the field in a variety of setups. One useful trick is to think of objects with holes as
superpositions of objects without holes, and holes with negative mass.
[3] Problem 1 (PPP 110). A spaceship of titanium-devouring little green people has found a perfectly
spherical homogeneous asteroid. A narrow trial shaft was bored from point A on its surface to the
center O of the asteroid. At that point, one of the little green men fell off the surface of the asteroid
into the trial shaft. He fell, without any braking, until he reached O, where he died on impact.
However, work continued and the little green men started secret excavation of the titanium, in the
course of which they formed a spherical cavity of diameter AO inside the asteroid. Then a second
accident occurred: another little green man similarly fell from point A to point O, and died. Find
the ratio of the impact speeds, and total times for impact, of the two little green men.
Solution. We can find the final speeds using conservation of energy. The only difference between
the two cases is the mass in the spherical cavity. However, the potential energy due to this mass is
the same at points A and O, so it doesn’t affect the overall change in potential energy. Thus, the
impact speeds are equal.
To find the impact times, we need to think about the forces. By recycling results from E1 using
the shell theorem, we know that in the first case, the acceleration is −αr for some constant α. Then
the motion is simple harmonic, and the time is a quarter period,
t1 =
π
2
1
√
α
.
In the second case, the acceleration is −αr + α(r − m) = −αm where m is the vector that points
from O to the center of the spherical cavity. Then the motion is uniformly accelerated, so
t2 =
2
√
α
so t1/t2 = π/4.
1

Kevin Zhou Physics Olympiad Handouts
[3] Problem 2 (PPP 111). The titanium-devouring little green people of the previous problem contin-
ued their excavating. As a result of their environmentally destructive activity, half of the asteroid
was soon used up, as shown.
What is the gravitational acceleration at the center of the circular face of the remaining hemisphere
if the gravitational acceleration at the surface of the original spherical asteroid was g0? (This can
be done without any integrals.)
Solution. We can decompose the hemisphere into many shells of uniform thickness dr. Each shell
contributes the same amount, since the mass increases as the square of its radius. Therefore, it
suffices to find the contribution of the outermost hemispherical shell, which is πGσ = πGρdr by
the hemisphere trick of E1. Integrating over dr gives a factor of R, giving
g = πGρR =
3
4
g0.
We can also solve the problem more straightforwardly by integration. In spherical coordinates,
g =
Z R
0
Z π/2
0
Z 2π
0
Gρr̂
r2
r2
sinθdϕdθdr.
By symmetry, only the ẑ component of r̂ will survive, so we can replace r̂ with ẑcosθ. Thus,
g = ẑ
Z R
0
Z π/2
0
Z 2π
0
Gρ
r2
(cosθ)r2
sinθdϕdθdr
= 2πGρRẑ
Z π/2
0
sinθcosθdθ = πGρRẑ
as we argued above.
[2] Problem 3. Consider a fixed volume of a moldable material, with a fixed density. Describe the
shape it should take to maximize the gravitational field at the origin.
Solution. Without loss of generality, we suppose the field will point along ẑ, so that it suffices to
maximize gz. Clearly, we will want all the mass to lie above the plane z = 0.
Now, setting up spherical coordinates in the usual way, note that the contribution of mass at a
point to gz is proportional to cosθ/r2. Therefore, we should first put mass at the locations with
the highest cosθ/r2, then progressively lower values, until we run out of mass. Then when we’re
done, the surface of the shape will have constant cosθ/r2 (because if it didn’t, we could do better
by moving some mass around).
For more discussion of this classic problem, and a plot of the solution, see this article.
2

Kevin Zhou Physics Olympiad Handouts
Idea 2: The Shell Theorems
Newton proved three “shell” theorems using elegant geometrical arguments.
1. Inside a uniform spherical shell, there is no gravitational field. (At the time, this was
an important result primarily because it meant that Hell couldn’t be at the center of
the Earth; if it were, the fire and brimstone would be floating around.)
2. Outside a uniform spherical shell of total mass m, the gravitational field is the same as
that of a point mass m at its center. (Of course, this is important because it’s required
to think about the Earth’s gravity at all.)
3. A homoeoid is a shell-like region defined by
1 <
x2
a2
+
y2
b2
+
z2
c2
< 1 + ϵ
for some constant ϵ. If this homoeoid has uniform density, then the gravitational field
vanishes everywhere inside it, i.e. at all points x2/a2 +y2/b2 +z2/c2 < 1. (This reduces
to the first theorem in the limit a = b = c and ϵ → 0. The gravitational field outside
the homoeoid is more complicated, so there’s no generalization of the second theorem.
As you might expect, the third theorem is less useful than the others.)
Example 1
Newton was aware that similar shell theorems hold for linear force laws, F(r) ∝ r. How are
his first two theorems modified in this case?
Solution
Consider a spherical shell centered at the origin, and a test mass at r0. The contribution to
the force due to a piece of the shell at r is F ∝ r − r0. When we integrate over the shell, r
averages to zero, giving F ∝ −r0, which is precisely the result for a mass exactly at the center
of the shell. That is, for a linear force law, Newton’s first theorem doesn’t work; instead the
second theorem’s result applies both inside and outside the shell.
Example 2
Prove the converse of Newton’s second theorem: outside of a spherical shell, its gravitational
field is equivalent to a point mass at its center only if F(r) is proportional to r, proportional
to r−2, or a linear combination of the two.
Solution
It’s easiest to consider the potential outside the shell. Let the shell of mass m be centered
at the origin with radius R, and consider the potential at a distance z > R from the origin.
If a point mass produces a gravitational potential f(r)dm at separation r, then integrating
3

Kevin Zhou Physics Olympiad Handouts
over the sphere in spherical coordinates gives
V (z) =
m
4πR2
Z π
0
(2πR2
sinθdθ)f(
p
z2 + R2 − 2zRcosθ).
The trick is to switch variables to the separation r =
√
z2 + R2 − 2zRcosθ, since
rdr = zRsinθdθ.
Plugging this in gives
V (z) =
m
2zR
Z z+R
z−R
rf(r)dr.
Newton’s second theorem works precisely when dV/dz is independent of R, so that the shell
radius can be collapsed to zero without changing the force.
Suppose f(r) is proportional to rn. Then we have
V (z) ∝
(z + R)n+2 − (z − R)n+2
zR
and the force’s dependence on R only drops out in three cases: when n = −1 (an inverse
square force), n = 0 (the trivial case, corresponding to no force), and n = 2 (a linear force).
The first two are easy to see, while for the final case we have
V (z) ∝
8z3R + 8zR3
zR
∝ z2
+ R2
so that R drops out of dV/dz, as required. Since any reasonable function can be built by
superposing such power laws, this classification is exhaustive.
Incidentally, the same method can be used to prove the converse of Newton’s first theorem.
The only difference is that z < R, so that the lower limit of integration has to be replaced
with |z − R| = R − z. Then the n = 2 case works out the same way, since z − R is squared.
By contrast, for n = −1 we get no force, since V (z) ∝ ((z+R)−(R−z))/zR = 2/R which is
constant. Thus, the inverse square force is the only one where Newton’s first theorem applies.
2 Central Potentials
Idea 3: Effective Potential
A particle experiencing a central force has a potential energy V (r) which only depends on
its radial coordinate, and conserved angular momentum
L = |r × p| = mr2
θ̇.
Its kinetic energy can thus be written in terms of the radial velocity ṙ and L,
E =
1
2
mv2
r +
1
2
mv2
θ + V (r) =
1
2
mṙ2
+

V (r) +
L2
2mr2

.
4

Kevin Zhou Physics Olympiad Handouts
By setting the time derivative of this expression to zero, we find
mr̈ = −
d
dr

V (r) +
L2
2mr2

.
Therefore, if we are interested in r(t) alone, we can find it by treating the problem as
one-dimensional, where the particle moves in the “effective potential” V (r) + L2/2mr2. The
extra term is called the angular momentum barrier and repels the particle away from the
center. Once we know r(t), we can find θ(t) if desired by using θ̇ = L/mr2.
One way of understanding the effective potential term is to think in terms of the energy
methods of M4. From the perspective of r(t) alone, any dependence on ṙ2 is part of the kinetic
energy, and any dependence on r is part of the potential energy. In particular, the kinetic
energy of tangential motion depends only on r, because it is fixed by angular momentum
conservation, so it appears as part of the potential when considering only radial motion.
Example 3: KK 9.4
For what values of n are circular orbits stable with the potential energy U(r) = −A/rn?
Solution
Note that circular orbits can only possibly exist if the force is attractive. This implies that
A must have the same sign as n.
The effective potential is
Ueff(r) = −
A
rn
+
L2
2mr2
.
In a circular orbit, r is constant, so the particle just sits still at a minimum of the effective
potential. That is, the circular orbit radius satisfies U′
eff(r) = 0, so
An
rn+1
0
−
L2
mr3
0
= 0, r2−n
0 =
L2
Anm
.
The orbit is stable if U′′
eff(r) > 0, so
−
An(n + 1)
rn+2
0
+
3L2
m
1
r4
0
> 0
which simplifies to
rn−2
0 >
m
3L2
An(n + 1).
Plugging in the value of r0, this becomes simply n < 2. As expected, for inverse square forces
(n = 1) and spring forces (n = −2) the orbits are stable, while, e.g. for inverse cube forces,
the circular orbits are neutrally stable.
[3] Problem 4 (Morin 7.4). A particle of mass m moves in a potential V (r) = βrk. Let the angular
momentum be L.
5

Kevin Zhou Physics Olympiad Handouts
(a) Find the radius r0 of the circular orbit.
(b) Find the angular frequency ωr of small oscillations about this radius.
(c) Now consider a slightly perturbed circular orbit. Explain why the orbit remains a closed curve
if the ratio of the time period of small oscillations and the time period of the original circular
orbit is rational, and find the integer values of k where this holds.
Solution. In this problem, the effective potential is
Veff(r) =
L2
2mr2
+ βrk
.
(a) We have circular orbits when the effective potential is minimized, or V ′
eff(r) = 0, so
L2
2m
(−2)r−3
0 + kβrk−1
0 = 0, r0 =

L2
mkβ
  1
k+2
.
(b) For small |r − r0|, Taylor expanding gives
Veff(r) ≈ Veff(r0) +
1
2
V ′′
eff(r0)(r − r0)2
,
so ωr =
p
V ′′
eff(r0)/m. Thus, we must compute V ′′
eff(r0). We straightforwardly have
V ′′
eff(r) = r−4

3L2
m
+ k(k − 1)βrk+2

,
so V ′′
eff(r0) = 1
r4
0
L2
m (k + 2), so
ωr =
L
mr2
0
√
k + 2.
(c) This is true because, if the ratio of periods is rational, there is a “least common multiple” at
which point an integer number of both cycles (both radial oscillation and the overall orbit)
have completed. At this point we return to the original starting point, so the orbit is closed.
To find the answer, note that it is equivalent for ωr/ωθ to be rational, where ωθ = L/mr2
0 is
the angular velocity of a circular orbit of radius r0. Then ωr/ωθ =
√
k + 2, and since k is an
integer, the ratio is rational when k + 2 is a perfect square, so
k = −1,2,7,14,....
Remark: Bertrand’s Theorem
In problem 4, you showed that for a certain group of potentials, all bound orbits that
are nearly circular are approximately closed. Bertrand’s theorem states that the only
central potentials for which all bound orbits are exactly closed are V (r) ∝ 1/r and V (r) ∝ r2.
The idea of the proof is as follows. First, for a general potential V (r), we can compute the
ratio of periods of a small radial oscillation and the underlying circular orbit and demand it
be rational, just like in part (c) above. However, since this ratio changes continuously as the
6

Kevin Zhou Physics Olympiad Handouts
orbit parameters are varied, it must be a constant if it is to always be rational. Using this
condition, you can show that V (r) must be a power law, which we had to assume above.
You found in part (c) that infinitely many power laws give closed nearly circular orbits. To
rule out the other ones, we need to expand to higher orders, i.e. account for the fact that the
effective potential is not perfectly simple harmonic. A detailed derivation can be found here.
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
Example 4: Binney 5.1
For over 150 years, most astronomers believed that Saturn’s rings were rigid bodies, until
Laplace showed that a solid ring would be unstable. The same instability plagues Larry
Niven’s Ringworld, a science fiction novel once popular among boomer nerds. Following
Laplace, consider a rigid, circular ring of radius R and mass m, centered on a planet of
mass M ≫ m. The ring rotates around the planet with the Keplerian angular velocity
ω =
p
GM/R3. Show that this configuration is linearly unstable.
8

Kevin Zhou Physics Olympiad Handouts
Solution
One way to understand the stability of an ordinary planetary orbit is angular momentum
conservation: if you displace a planet radially inward, then it’ll start moving faster
tangentially, which will tend to make it go back out, even though the inward gravitational
force gets stronger too. This tendency is absent for a rigid ring, because the entire ring
always rotates with the same angular velocity ω = L/mR2.
The simplest way to see that this configuration is unstable is to calculate the gravitational
potential ϕ due to the ring at the planet’s position. If the planet starts at the center of the
ring, then displacing it along the axis of the ring increases ϕ. But since ∇2ϕ = 0, displacing
it towards the ring must decrease ϕ, so the system is unstable. (This is just the gravitational
analogue of Earnshaw’s theorem from E1.)
To make this more concrete, fix the planet at the origin, and parametrize the ring by the
angle θ along it. If the whole ring is shifted by a small distance a in the plane of the ring,
the elements of the ring are at
r2
= (Rcosθ + a)2
+ (Rsinθ)2
.
The total gravitational potential energy is
U = −GMm
Z 2π
0
dθ
2π
1
r
= −
GMm
R
Z 2π
0
dθ
2π
1
p
1 + (2a/R)cosθ + a2/R2
.
We have to be a bit careful here, remembering some lessons from P1. The first order term
in a is going to vanish, because we started at an equilibrium point, which means we need to
expand everything to second order in a. Using the Taylor series
1
√
1 + x
= 1 −
x
2
+
3x2
8
+ O(x3
)
we conclude
U ≈ −
GMm
R
Z 2π
0
dθ
2π

1 −
a
R
cosθ +
a2
R2
3cos2 θ − 1
2

= −
GMm
R

1 +
a2
4R2

.
The energy goes down upon a small displacement, so the configuration is unstable. The ring
will soon crash into the planet.
3 Kepler’s Laws
Idea 4
Kepler’s laws for a general orbit are:
1. The trajectories of planets are conic sections, with a focus at the Sun. Bound orbits are
ellipses, which contain circles as a special case. Unbound orbits are hyperbolas, which
contain parabolas as a special case.
9

Kevin Zhou Physics Olympiad Handouts
2. The trajectories sweep out equal areas in equal times.
3. When the orbit is bound, the period T and semimajor axis a obey T2 ∝ a3.
Unlike the other laws, the second is valid for any central force, because the rate of area
sweeping is rv⊥/2 ∝ |r × v| ∝ |L|.
Idea 5
For a general orbit with semimajor axis a, the total energy is
E = −
GMm
2a
.
This identity also applies to hyperbolas, where a is negative, and the parabola in the limit
of infinite a, where the total energy vanishes.
Idea 6
An ellipse is defined by two foci F1 and F2 separated by a distance 2d. It consists of the
set of points P so that PF1 + PF2 = 2a is a constant, where a is the semimajor axis. The
semiminor axis b is related by a =
√
b2 + d2, as one can show by considering an appropriate
right triangle, and the area is πab.
Remark: Virial Theorem
For bound orbits, the time-averaged values of the kinetic and potential energy are related by
⟨K⟩ = −
1
2
⟨V ⟩.
In fact, the virial theorem holds for more complicated bound systems of particles as well, as
long as they interact by a power law potential V (r) ∝ rn. In this case, we have
⟨K⟩ =
n
2
⟨V ⟩
where gravity corresponds to the case n = −1.
You can easily check that the virial theorem works in one dimension for a particle bouncing
in a uniform gravitational field (n = 1), or a particle on a spring (n = 2). It’s also
easy to check for a planet in a circular orbit (n = −1). With some more work, you can
check that it also holds for arbitrary elliptical orbits. To do this most efficiently, convert
the time integral to an integral over angle θ, and use the form of an ellipse in polar coordinates.
In astrophysics, the virial theorem is useful because it allows us to estimate V , which can be
hard to measure, given K. For discussion of the virial theorem along with applications to
dark matter, see section 1.4.3 of these notes. We will return to these subjects in X3.
[3] Problem 6. In this problem we’ll verify some of the basic facts stated above.
10

Kevin Zhou Physics Olympiad Handouts
(a) Prove the statement of idea 5 for the case of elliptical orbits.
(b) Using this result, prove the vis-viva equation
v2
= GM

2
r
−
1
a

which is often used in rocketry.
(c) Prove Kepler’s third law.
Solution. (a) Let the closest approach distance be r1, farthest be r2. For simplicity, let’s define
the specific angular momentum J = L/m and specific energy ϵ = 2E/m. Then angular
momentum conservation and energy conservation give
J = r1v1 = r2v2, ϵ = v2
1 −
2GM
r1
= v2
2 −
2GM
r2
.
From these facts, we see that the equation
ϵ =
J2
r2
−
2GM
r
is satisfied for r = r1 and r = r2. This equation is equivalent to the quadratic ϵr2 + 2GMr −
J2 = 0, and applying Vieta’s formulas gives r1 + r2 = −2GM/ϵ = −GMm/E. Using
r1 + r2 = 2a and rearranging gives the result.
(b) This follows immediately from rearranging the statement of energy conservation,
−
GMm
2a
=
1
2
mv2
−
GMm
r
.
(c) This follows from the geometrical facts stated in idea 6. First, the area swept out per unit
time is L/2m, so (L/2m)T = πab.
To show that T only depends on a, we need to eliminate L and b. We know that a = (r1+r2)/2
and a =
√
b2 + d2, where d = (r1 − r2)/2. This implies that b =
√
r1r2, and applying Vieta’s
formulas to the quadratic in part (a) gives
b =
r
−J2
ϵ
=
L/m
p
−2E/m
.
Plugging this into our initial result, we have
L
2m
T = πa
L/m
p
GM/a
,
which implies T2 = 4π2a3/GM ∝ a3, as desired.
Remark: Scaling Symmetry
There’s a variant of Kepler’s third law for unbound orbits. Suppose a planet is right next
to the Sun at time t = 0, but has a large initial radial velocity, so that it has zero total
11

Kevin Zhou Physics Olympiad Handouts
energy. Then its distance to the Sun evolves as r(t) ∝ t2/3, like how a ∝ T2/3 for bound orbits.
Both of these results come from the scaling symmetry of inverse square force laws: any
solution to Newton’s second law remains a solution if you multiply all distances by 4 and
all times by 8. The widest-reaching application of this idea is to the whole universe itself.
If it contains only matter, which started at the origin at time t = 0, and it expands under
gravity with zero total energy, then its “scale factor” evolves as a(t) ∝ t2/3. This was a good
description of our universe for most of its lifetime, but in the past few billion years the effects
of dark energy took over, accelerating the expansion. We’ll revisit cosmology in X3.
[3] Problem 7. [A] A simple derivation of Kepler’s first law is given in section 7.4 of Morin, and
centers around solving a differential equation for 1/r(θ). (You can motivate this by noting that the
polar form of an ellipse is quite simple, 1/r = (1 + ecosθ)/p, where p is the semilatus rectum and
e is the eccentricity.) However, in this problem, we’ll consider an alternative approach that uses a
subtle conserved quantity, which is also important in more advanced physics.
(a) Show that the Laplace–Runge–Lenz vector
A = p × L − GMm2
r̂
is conserved, where the star is at the origin and r̂ is the radial unit vector at the planet’s
position r. (Hint: use the fact that L = mr2ω to evaluate the time derivative.)
(b) We have A · r = Arcosθ, where θ is the angle between A and r. Evaluate A · r using the
definition of A, and the identity a · (b × c) = (a × b) · c, in order to derive an expression for
r in terms of θ and constants. Then use this to show that the orbit is a conic section.
(c) As another simple application of the conservation of A, show that the set of velocities during
an elliptical orbit traces out a circle in velocity space.
The ideas discussed in this problem are almost never required to solve Olympiad problems, but they
can dramatically simplify very tough orbital mechanics problems. For two examples, see Physics
Cup 2021, problem 2 and Physics Cup 2024, problem 4.
Solution. (a) Since the angular momentum is conserved,
Ȧ = F × L − GMm2 dr̂
dt
=
GMm
r2
(ωmr2
)(−r̂ × ẑ) − GMm2
(ωẑ × r̂) = 0
as desired.
(b) We have
A · r = r · (p × L) − GMm2
r = (r × p) · L − GMm2
r = L2
− GMm2
r
which tells us that
Arcosθ = L2
− GMm2
r.
But now this can be solved for r to give the trajectory,
r =
L2
GMm2 + Acosθ
.
12

Kevin Zhou Physics Olympiad Handouts
This is precisely the form of a conic section. Specifically, the general form is
r =
p
1 + ecosθ
and we can identify
p =
L2
GMm2
, e =
A
GMm2
.
As a check, note that A indeed vanishes for circular motion, where
A = (mv)(mvr) − GMm2
= mr2

mv2
r
−
GMm
r2

= 0.
For an elliptical orbit, A lies in the plane of the orbit and points along the major axis.
(c) Take the cross product of the vector with L, which is always conserved, for
(A + GMm2
r̂) × L = (p × L) × L = −mL2
v
since p is always perpendicular to L. Now, during an elliptical orbit, the values of A+GMm2r̂
trace out a circle because A is conserved and r̂ has constant magnitude. Since A and r̂ are
perpendicular to L, taking the cross product with L just scales the circle and rotates it by
90◦ in the orbit plane, so the set of v lies on a circle.
Now we’ll consider some really slick problems that can be solved with pure geometry.
Example 5
An object is dropped from rest at a distance R above the Earth’s surface, where R is the
radius of the Earth. How long does it take to hit the Earth’s surface?
Solution
The answer doesn’t change much if we give the object a tiny horizontal velocity. In this case,
the orbit becomes a part of a very thin ellipse, where a ≈ d ≈ ℓ, with one focus at the center
of the Earth (by the shell theorem) and the other near the starting point.
O
start
impact
If the Earth were replaced by a point mass at its center, then the object could perform a
full orbit, with total period T. The time until the object actually hits the Earth’s surface is
determined by the fraction of the orbit’s area swept out. Referring to the diagram, this is
t = T
πab/4 + ab/2
πab
= T

1
4
+
1
2π

13

Kevin Zhou Physics Olympiad Handouts
by summing a quarter of an ellipse and a triangle. All that’s left is to solve for T. Note that
the semimajor axis is R. Another orbit with the same semimajor axis is simply a circular
orbit around the Earth, just above its surface. This orbit has
v2
R
=
GM
R2
so v =
p
GM/R. Using T = 2πR/v gives the answer,
t =
 π
2
+ 1

r
R3
GM
.
Of course, you can get the same answer by directly solving Newton’s laws.
Example 6: MPPP 39
An astronaut jumps out of the international space station directly towards the Earth. What
happens afterward? In particular, will the astronaut survive?
Solution
If you’ve seen certain movies, you might get the impression that the astronaut spirals into
the Earth, and so will surely die. But that isn’t what Kepler’s laws say! After the jump, the
astronaut simply performs a Keplerian orbit. Since the change in energy is negligible, so is
the change in semimajor axis and hence the change in period. The astronaut simply orbits
in a nearly circular ellipse, with the same period as the space station.
After one rotation period of the space station, which takes time T = 92min, the astronaut
arrives back. They are unharmed as long as their oxygen and cooling supply lasts this long.
(If you draw some pictures of the orbits, you may think the answer is T/2, because the orbits
intersect twice. This is incorrect because while the orbits do intersect geometrically halfway
through, the space station and the astronaut won’t arrive at that point at the same time.)
Example 7: Wang and Ricardo 8.4
A particle moves in a circle of radius R, under the influence of a central force. If its minimum
and maximum speeds are v1 and v2, what is the period T?
Solution
At first the problem statement might sound confusing, until you realize that the ori-
gin need not be at the center of the circle; it must be off-center. Now, it would be
intractable to find the trajectory for a general central force law, but we can infer T by
thinking about how quickly area is swept out, as in Kepler’s second law. This works because
conservation of angular momentum holds for all central force laws, not just the inverse square.
At the furthest and closest points, the distances from the origin must be r1 and r2, and by
14

Kevin Zhou Physics Olympiad Handouts
conservation of angular momentum, the speeds v1 and v2 are achieved at these points, so
r1v1 = r2v2, r1 + r2 = 2R,
dA
dt
=
1
2
r1v1.
Using the first two equations, we can solve for r1 and plug it into the third, for
r1 =
2R
1 + v1/v2
,
dA
dt
=
R
1/v1 + 1/v2
.
Since dA/dt = πR2/T, we have
T = πR

1
v1
+
1
v2

.
[3] Problem 8 (PPP 88). A rocket is launched from and returns to a spherical planet of radius R
so that its velocity vector on return is anti-parallel to its velocity vector at launch. The angular
separation at the center of the planet between the launch and arrival points is θ. How long does
the flight take, if the period of a satellite flying around the planet just above its surface is T0?
Solution. The trajectory is an ellipse with a focus at the planet’s center, and by drawing a diagram,
you can see that the provided condition is only possible if the initial and final points of the trajectory
are the two ends of the ellipse’s minor axis.
a =
R
θ
O
b = Rsin(θ/2)
1
2R2 sinθ 1
2πab
By basic properties of ellipses, this implies that the semimajor axis a of the ellipse is R, so the
period of the whole orbit would be T0, if the rocket could perform the entire orbit. Thus, T/T0 is
equal to the fraction of the ellipse’s area that is swept out between the initial and final points.
By basic geometry, we have A = 1
2A0 + 1
2a2 sinθ while A0 = πab = πa2 sin θ
2 is the area of the
full ellipse. Thus,
T =
A
A0
T0 =

1
2
+
cosθ/2
π

T0.
[4] Problem 9 (Physics Cup 2012). A cannon at the equator fires a cannonball, which hits the North
pole. Neglecting air resistance and the Earth’s rotation, at what angle to the horizontal should the
cannonball be fired to minimize the required speed?
Solution. The answer is π/8 = 22.5◦. See the solutions here.
15

Kevin Zhou Physics Olympiad Handouts
[4] Problem 10 (NBPhO 2015). An asteroid is initially stationary, a distance R from a star of mass
M. The asteroid suddenly explodes into many pieces, with speed ranging from zero to v0. What is
the set of all points that can be hit by a piece of the asteroid? (Hint: this problem requires more
geometry than the rest. For simplicity, you can begin by treating the problem as two-dimensional,
but the solution you find will work just as well for three.)
Solution. Consider a given piece of the asteroid, with speed v0. Its trajectory is an ellipse of major
axis 2a, where a satisfies
1
2
mv2
0 −
GMm
R
= −
GMm
2a
.
Let S be the position of the sun, and let P be the original point of the asteroid. Let F be the other
focus of this elliptical trajectory. By the definition of an ellipse, SP + FP = 2a, so FP = 2a − R.
R
r
P
Q
F
S
Let Q be a point that is reached by the piece, and suppose SQ = r. By the triangle inequality,
PQ ≤ PF + FQ = 2a − R + 2a − r = 4a − r − R.
Therefore, we see that
QP + QS ≤ 4a − R.
This constraint applies to all points Q that can be hit. Thus, the points that can be hit lie within
an ellipse with foci at the sun and the asteroid, with major axis 4a − R.
Is it possible to hit every point in this ellipse? It’s intuitive that it’s sufficient to show that
we can hit every point on the boundary, since that’s the hardest thing to do; points inside can
be reached by launching with reduced speed. Let Q be a given point on the boundary. Then the
inequalities above become equalities as long as PQ = PF + FQ, which occurs when F is on PQ.
So the question is reduced to whether we can put the other focus of the orbit at any angle we want,
relative to P. If you play around with a few drawings of orbits, you can see this is always possible
by varying the launch angle, no matter what the launch speed is, so we can get the full ellipse.
In three dimensions, the answer is the set of points enclosed by rotating the ellipse about the axis
PS. The resulting shape is called a spheroid. In the limit R → ∞, where the star’s gravitational
field is uniform, the shape becomes a paraboloid, recovering a result from M1.
Idea 7: Reduced Mass
Consider two objects of mass m1 and m2 with positions r1 and r2 with relative position
r = r1 − r2, interacting by a central potential V (r). For the purposes of computing r alone,
we may replace this system with a single mass µ in the same central potential V (r), where µ
is the reduced mass, obeying
1
µ
=
1
m1
+
1
m2
.
Both systems have the same solutions for r(t).
16

Kevin Zhou Physics Olympiad Handouts
Example 8
Consider two planets of mass m. If one planet is somehow fixed in place, the other can
perform a circular orbit of radius R with period T. If both planets are allowed to move, they
can simultaneously perform circular orbits of radius R/2 about their center of mass. What
is the period of this motion?
Solution
First let’s try an explicit solution. In the first case,
mv2
R
=
Gm2
R2
, v =
r
Gm
R
.
In the second case, we have
mv2
R/2
=
Gm2
R2
, v =
1
√
2
r
Gm
R
.
The velocity in this case is a factor of 1/
√
2 smaller, but the arc length of the orbit is a
factor of 2 smaller, so the period is T/
√
2.
We can also handle the problem with reduced mass. Consider the relative position r1 −r2 in
the second case, which orbits in a circle of radius R. Applying the above idea, we can work
in the reduced system. In this system, there is a single mass µ = (1/m + 1/m)−1 = m/2 in
a circular orbit of radius R, experiencing the same force Gm2/R2, so
µv2
R
=
Gm2
R2
, v =
r
2Gm
R
.
The speed is
√
2 bigger than in the first case, but the arc length of the orbit is the same, so
the period is T/
√
2.
Reduced mass is a bit unintuitive, since you need to work in two very different pictures. On the
other hand, some people like it because it’s mathematically concrete, and can reduce some problems
to one-liners. Whether you use it is up to you.
[2] Problem 11 (MPPP 27). Two permanent magnets are aligned on a horizontal frictionless table,
separated by a distance d. The magnets are held in such a way so that the net force between them
is attractive, and there are no torques generated.
If one of the magnets is held and the other is released, the two collide after time t1. If instead
the roles are reversed, the two collide after time t2. If instead both magnets are released from rest,
how long does it take for them to collide?
Solution. The fact that magnets are involved doesn’t really matter; all that matters is that when
the objects have a given separation r, they have a fixed total kinetic energy K(r), in all three
scenarios. What differs in each case is the rate of change of the separation between them.
If the magnets have masses m1 and m2, then in the first and second cases, we have dr/dt =
17

Kevin Zhou Physics Olympiad Handouts
p
2K/m1 and
p
2K/m2 respectively. In the final case, momentum conservation gives
m1v1 + m2v2 = 0,
1
2
m1v2
1 +
1
2
m2v2
2 = K
which implies
dr
dt
= |v1 − v2| =
√
2K
 r
m2
m1(m1 + m2)
+
r
m1
m2(m1 + m2)

.
In all three cases, dr/dt has the same profile up to an overall constant, and the total time is inversely
proportional to this constant. That is, we have
t1 = C
√
m1, t2 = C
√
m2, t = C
 r
m2
m1(m1 + m2)
+
r
m1
m2(m1 + m2)
 −1
for some C. Solving for t yields
t =
t1t2
p
t2
1 + t2
2
.
[3] Problem 12.   W 1 0USAPhO 2012, problem A4.
Remark: Discovering Gravity
In popular science, we are told that Newton understood gravity in a flash of inspiration,
after being hit on the head with an apple. You might know that it didn’t quite work that
way: there was an apple tree in Newton’s childhood home, but an apple didn’t hit him, and
Newton didn’t publish his ideas on gravity until decades afterward.
However, the story is an oversimplification in a much more significant way: Newton’s law of
gravity actually contains many independent insights. For example, you need to realize that
gravitational forces occur between pairs of objects, rather than emanating from an object,
or reflecting an object’s desire to move towards its “natural” place of being. To explain the
orbits, you need to understand that the force is radial, not tangential, and moreover that
it is not balanced by any other radial force. You need to see that the force acts between
all pairs of objects, and not just certain pairs of objects with the right qualities, like iron
and magnets, that the force is proportional to mass (i.e. the parameter that shows up in
F = ma) and falls off with distance, and that it occurs “at a distance” with nothing in between.
All of these insights, which we think of as obvious today, were viewed as unintuitive or
downright occult by intelligent thinkers of the time. For example, you probably think the
astrological idea that Jupiter governs blood and Venus governs phlegm is laughable, as did
many 17th century astronomers, but would the idea that the Moon governs the rise and
fall of water on Earth sound any more plausible, if you hadn’t been told early on that it’s
true by people you trust? (If you flip this logic around, you can understand why so many
people believe in astrology.) Or, going further back to antiquity, if you claimed then that
everything is affected by gravity, how could you explain why flames go up? (To explain
buoyancy, you would first have to explain how air exerts a massive yet somehow unobservable
pressure on everything, why air has mass but doesn’t fall, and that buoyant forces for air ex-
18

Kevin Zhou Physics Olympiad Handouts
ist at all. In the ancient world, there are no helium balloons, and it’s hard to make a vacuum.)
Between Galileo and Newton, there were many incremental steps towards the development
of universal gravitation. For instance, Cassini proposed that planets orbited in ovals, which
are very similar to ellipses, Borelli proposed that Jupiter’s moons obeyed Kepler’s laws, and
Horrocks found that Jupiter and Saturn slightly deviated from Kepler’s laws because of
their mutual attraction. Newton played an important role by putting everything on a solid
foundation, such as by deriving Kepler’s first law and the shell theorems. But as you can
see from Newton’s notebooks, these insights came from years of experience tinkering with
concrete calculations, not from a single inspired thought.
In antiquity, the world was full of unexplainable mysteries. Aristotle’s best bet was that
things fall because they seek their “natural” place. To get from Aristotle’s “rocks want to go
home” theory to Newtonian mechanics requires not just genius, but many geniuses. And of
course, there were just as many steps needed to get from noticing static electricity existed to
writing down Coulomb’s law, including centuries of homemade experiments with medieval
technology. Nothing is trivial in physics.
4 Rocket Science
So far you’ve done some challenging problems, but they haven’t exactly been rocket science. But
the following questions literally are rocket science!
[2] Problem 13. A rocket burns fuel at a constant rate to produce a fixed thrust force F. The
corresponding power P = Fv depends on the rocket’s velocity, and becomes higher as the rocket
moves faster. This is called the Oberth effect, and it has real practical consequences; all else equal,
it implies that a rocket should be preferentially fired when the velocity is high. But where does the
“extra” power come from?
Solution. When fuel in a stationary rocket is burned, it is ejected out the back of the rocket with
a huge kinetic energy. On the other hand, if the rocket is already moving forward, the fuel inside it
already has kinetic energy. And once that fuel is ejected, it ends up with less kinetic energy than
in the stationary case. These effects allow more of the burnt fuel’s chemical energy to go into the
kinetic energy of the rocket. (For an explicit calculation, see here.)
We saw a similar problem in M3 with a car viewed from a different reference frame, in which
case the source of the extra energy was the Earth itself. In general, the “extra” energy comes from
whatever the vehicle pushes on to move itself forward. For a rocket that starts at rest in space,
that energy doesn’t come for free; the initial kinetic energy of the fuel at later times comes from
the firing of the rocket at earlier times.
Note that above, we said that the Oberth effect means the rocket should be fired when its velocity
is high. But what is that velocity with respect to? After all, for any rocket, you can find some frame
where it’s moving fast, and some frame where it isn’t moving at all. The answer is that the “correct”
frame depends on what you want to do. For example, if you want to escape the solar system, you
need to achieve escape velocity in the Sun’s frame, because the Sun’s gravity dominates.
[4] Problem 14. A rocket with a full fuel tank has a mass M and is initially stationary. The fuel is
ejected at a rate σ, where σ has units of kg/s, at a relative velocity of u.
19

Kevin Zhou Physics Olympiad Handouts
(a) If the rocket begins in space, show that the velocity of the rocket when its total mass is M′ is
v = ulog
M
M′
.
This is the Tsiolkovsky rocket equation.
(b) Repeat part (a) for a rocket in a uniform gravitational field g. Do you get the best final
velocity if σ is high or low? (Ignore gravity for the rest of this problem.)
(c) In a multi-stage rocket, an empty fuel tank detaches from the rocket once it is used up, after
which a second engine starts up. Explain why this can achieve a much higher final velocity
than just firing both engines at once. (If you want a quantitative treatment of this, you can
see INPhO 2016, problem 3.)
(d) It is desired for a rocket to begin at zero speed and accelerate to speed v, to deliver a given
payload. If the exhaust comes out with a relative velocity of u, how should u be chosen to
minimize the fuel energy that must be spent to perform this maneuver? (Hint: let the final
mass of the rocket be fixed, since that’s the mass of the payload we want to transport. You
will have to solve an equation numerically.)
(e) If u has this value, what fraction η of the spent fuel’s energy ends up in the rocket’s final
kinetic energy?
(f) Now suppose u can be freely varied over time. Qualitatively, how should it be chosen to
maximize η, and what is the maximum possible value of η?
Solution. (a) Let p = mv be the momentum of the rocket and all the fuel instantaneously inside
it. As some fuel of mass dm is ejected from the rocket, the total momentum is conserved, so
dp = (v − u)dm.
On the other hand, we also have
dp = mdv + v dm.
Combining these equations gives
mdv = −udm
so integrating gives
logm = −
v
u
+ C.
Fixing C with the initial condition gives the desired result.
(b) The reasoning is similar except that there is now an additional term representing the change
in momentum due to the gravitational force. We have dp + (−dm)(v − u) = −mg dt, so
mdv = −udm − mg dt. Therefore,
dm
m
= −
dv
u
−
g
u
dt,
so logm = −v/u − gt/u + log(M). Solving for v gives
v = ulog
M
M′
−
g
σ
(M − M′
).
It’s better if σ is high, since you are constantly losing momentum to gravity.
20

Kevin Zhou Physics Olympiad Handouts
(c) The idea is that M−M0
M′−M0
> M
M′ where M0 is the mass of the ejected tank, so the change in
speed is higher. Basically, the empty fuel tank is now dead weight, so ejecting it means you
don’t waste energy speeding it up.
(d) Let the initial and final masses be M and M′. In order for the rocket to reach a velocity of v,
v = ulog M
M′ , or M = M′ev/u.
Now, the energy released by burning a small mass dm of fuel is precisely (dm)u2/2. One way
to see this is to work in the frame instantaneously moving with the rocket; then the only final
energy is in the kinetic energy (dm)u2/2 of the ejected fuel itself, since the rocket picks up
negligible speed. This energy must have come from the internal energy of the burning of the
fuel, and this quantity is the same in all frames, as we’ve discussed in M3.
Therefore, the total fuel energy burnt is, in any frame,
E =
1
2
(M − M′
)u2
=
1
2
M′
(ev/u
− 1)u2
This is minimized when dE/du = 0 (treating M′ as fixed), which gives
2u(ev/u
− 1) = vev/u
.
Letting x = v/u, we need to numerically solve
x = 2(1 − e−x
).
This can be done using the method of iteration in P1 (concretely, one plugs 2(1 − e−Ans)
repeatedly into the calculator) to get x = 1.5936. This implies u = 0.6275v.
(e) At the end, the rocket will have a kinetic energy 1
2M′v2 and the total fuel burnt will be
1
2M′(ex − 1)v2/x2. We divide the former by the latter to get an efficiency
η =
x2
(ex − 1)
= 0.6476.
(f) We should always set u equal to the velocity of the rocket at that moment. Then when the
fuel comes out, it’s at a dead stop, so all of the kinetic energy burned goes into the rocket.
Thus the maximum value of η is 100%. This is called a “perfect rocket”, though it’s not the
kind of thing one would want to use in practice. It’s not trivial to change u arbitrarily, from
an engineering point of view, and a perfect rocket at low speeds would have low power.
[3] Problem 15.   m 1 0USAPhO 2015, problem B1. A basic, two-step rocket maneuver.
Remark: Patched Conic Approximation
Treating an orbital maneuver exactly, accounting for the gravitational fields of the Sun
and all planets, would be very complicated. So in the problems below, we will use the
common “patched conic” approximation, where only the gravitational effect of a single
object is considered at a time. The reason this makes sense is that, for the vast majority of
the volume of the solar system, the Sun’s gravity dominates, so we can ignore the planets.
The gravity of a planet dominates when we pass close to it, but these encounters are very
21

Kevin Zhou Physics Olympiad Handouts
brief compared to the period of an entire orbit, so during those encounters we can work in
the frame following the planet and ignore the Sun.
To understand when the planet dominates, suppose it has mass m and orbits at radius
R, while the Sun has mass M. Consider a nonrotating coordinate system which accel-
erates with the planet, and a point a distance r ≪ R from the planet, and R−r from the Sun.
At this point, the gravitational acceleration from the planet is aP = Gm/r2. The gravi-
tational acceleration due to the Sun is aS = GM/(R − r)2 − GM/R2, where we subtract
GM/R2 because the frame accelerates with the planet. The Sun’s effect is subdominant
when aS ≲ aP , which means r ≲ (m/M)1/3 R. This is roughly the radius of the Hill sphere.
There are other possible definitions; for example, it turns out that you get the best numeric
results if you consider the planet’s gravity for r ≲ (m/M)2/5 R, the so-called sphere of
influence. In any case, the point is that there exists a radius r ≪ R within which you can
ignore the Sun and get an accurate result; for our purposes the exact choice of r won’t matter.
[5] Problem 16. The classic cosmic speeds. For each part, express your answers in terms of
v0 =
r
GMEarth
REarth
= 7.9km/s, u0 =
r
GMSun
dSun
= 29.8km/s.
Neglect the rotation of the Earth about its own axis for all parts except for part (b).
(a) What is the minimum launch speed required to put a satellite into orbit around the Earth?
This is the first cosmic speed. (It’s useful to think in terms of speeds because the Tsiolkovsky
rocket equation tells us that directly determines the amount of fuel needed. Multistage rocket
maneuvers are often described in terms of their “total ∆v”.)
(b) If you account for the rotation of the Earth, which has speed vr at the equator, what is the
new minimum speed and how should the satellite be launched?
(c) What is the minimum launch speed required for a rocket to escape the gravitational field of
the Earth? This is the second cosmic speed.
(d) What is the minimum launch speed required for a rocket to leave the solar system? This is
the third cosmic speed. How should the satellite be launched? (Hint: doing this exactly is
very hard; instead use the approximation REarth ≪ dSun. To check, the answer is 16.7km/s.)
(e) What is the minimum launch speed required for a rocket to hit the Sun? Assume you cannot
make any adjustments to the rocket’s path after launch. (To check, the answer is 31.8km/s.)
(f) If subsequent adjustments are allowed, the minimum launch speed to hit the Sun can be dra-
matically reduced. Find the minimum launch speed required to hit the Sun if an infinitesimal
adjustment later is allowed.
(g) Comets orbit very far from the Sun, with nearly zero speed. What is the maximum relative
speed with which a comet can impact the Earth?
Solution. Note that u0 is the speed the Earth orbits the Sun.
22

Kevin Zhou Physics Olympiad Handouts
(a) By Newton’s second law, mv2/R = GMm/R2, so the answer is simply v0 = 7.9km/s.
(b) Let vr be the speed of rotation from the earth. To launch from the poles, we need to launch
with speed v0, but from the equator, we need to launch with only v0 − vr, giving 7.4km/s.
(c) The total energy must be 0, so −GMm/R + 1
2mv2 = 0, or v =
√
2v0 = 11.2km/s.
(d) We work in two stages: first the rocket leaves the field of the Earth, then it leaves the field
of the Sun. This is valid since REarth ≪ dSun. In fact, this is necessary: we cannot do the
problem in a single step using energy conservation, because we would necessarily have to work
in a frame where either the Earth or Sun has a significant velocity. Then there may be large
changes in the kinetic energy of the Earth or Sun, which can be extremely subtle to deal with.
(Recall the problem we had with the accelerating car in M3!)
Once the rocket has left the field of the Earth, its velocity relative to the Sun must be √
2u0. Since the Earth already has velocity u0, the minimum relative velocity to the Earth is
(
√
2−1)u0. Now work in the frame of the Earth for the first stage. If the launch velocity is v,
then energy conservation gives
1
2
(v2
− ((
√
2 − 1)u0)2
) =
GMEarth
REarth
= v2
0.
Solving for v, we get
v =
q
2v2
0 + (3 − 2
√
2)u2
0 = 16.7km/s
which gives the advertised numeric answer.
If you found this part quite tricky, don’t worry: there have been whole papers written about
it, and many textbooks that got it wrong, including Halliday and Resnick!
(e) In this case, after leaving the Earth we need zero velocity, so velocity u0 relative to the Earth.
By similar reasoning, we get
v =
q
2v2
0 + u2
0 = 31.8km/s.
(f) The best option is actually to do the procedure of part (d), in order to leave the solar system.
After the rocket is a very large distance away, it can perform a very small boost to cancel
out its angular momentum and fall into the Sun. This gives an answer of 16.7km/s. (This
solution is the first two thirds of an Edelbaum maneuver, as described in the remark below.)
(g) This is very similar to part (d), but in reverse. Once the comet gets near the Earth, it has
speed
√
2u0 in the Sun’s frame. To get the highest possible relative velocity, this should be
directed against the Earth’s velocity, giving a relative velocity of (
√
2 + 1)u0 in the Earth’s
frame. Applying energy conservation until impact gives
1
2
(v2
− ((
√
2 + 1)u0)2
) = v2
0.
Solving for v gives the remarkably high answer
v =
q
2v2
0 + (3 + 2
√
2)u2
0 = 72.8km/s.
23

Kevin Zhou Physics Olympiad Handouts
Remark
There’s a whole science of multi-stage rocket maneuvers. For example, suppose your
goal is to quickly escape the solar system. As you found in part (d) of problem 16,
the minimum launch speed necessary is the third cosmic speed. However, you can also
start by doing the maneuver of part (e). Once the rocket is very close to the Sun, it’ll
be moving extremely quickly, which means that a second impulse can provide a huge
amount of energy. This is called the Oberth maneuver, as it uses the Oberth effect. Doing
it this way costs more fuel, in terms of total ∆v, but can allow the rocket to leave much faster.
In practice, you can only get within some distance rmin of the Sun without the rocket burning
up, so there’s a limit to how much you can employ the Oberth effect. Thus, in some cases a
three-impulse maneuver, called the Edelbaum maneuver, can be even better. In the Edelbaum
maneuver, you begin with a forward impulse to get to a higher elliptical orbit, then perform
a backward impulse to drop to rmin. This gives a higher speed at rmin, since the rocket is
on an elliptical orbit with higher total energy. Then a final forward impulse can be used to
escape the solar system. You can read more about these maneuvers here. However, neither
the Oberth or Edelbaum maneuvers have ever been used, because the ∆v requirement is too
high for them to be feasible. For an authoritative reference on rocket maneuvers, see An
Introduction to the Mathematics and Methods of Astrodynamics by Battin.
[4] Problem 17 (MPPP 36). Consider a solar system with two planets, in circular orbits with radii
R1 and R2 = xR1, where x > 1. A space probe is planned to be launched from the first planet,
which we will call the Earth, and use a gravitational slingshot from the second planet to exit the
solar system. The goal is to do this with the smallest fuel energy expenditure possible. Assume
that all planets orbit in circles in the same plane.
(a) The space probe is launched so that, after it has exited the gravitational field of the Earth,
but before it has moved very far, it has speed v0 in the Sun’s frame. Furthermore, its velocity
is parallel to the Earth’s velocity in the Sun’s frame. Explain why this direction of launch
minimizes the energy needed.
(b) Assume the space probe arrives near the second planet, with radial and tangential speeds vr
and vt with respect to the Sun. Find vr and vt.
(c) Suppose the planet have speed vp. In terms of vp, vr, and vt, what is the largest possible
speed vf of the space probe (relative to the Sun) after the gravitational slingshot ends?
(d) To three significant figures, find the value of x that minimizes the required initial launch speed
v0, for the probe to be able to escape the solar system.
(e) Which real solar system planet is closest to this ideal planet?
Solution. (a) We can achieve any velocity relative to the Earth with the same energy expenditure
(ignoring the small effect of the Earth’s rotation). But what matters for escaping the solar
system is the velocity relative to the Sun. This is biggest if the velocity relative to the Earth
and the Earth’s velocity relative to the Sun are parallel, so that the speeds add.
24

Kevin Zhou Physics Olympiad Handouts
(b) By angular momentum conservation,
vt =
v0
x
.
By energy conservation,
1
2
mv2
0 −
GMm
R
=
1
2
m(v2
r + v2
t ) −
GMm
xR
.
This can be solved straightforwardly. Introducing the Earth’s speed vE =
p
GM/R,
vr =
s
v2
0

1 −
1
x2

− 2v2
E

1 −
1
x

.
(c) A gravitational slingshot is simply an elastic collision, so as we saw in M3, the best frame to
use is the center of mass frame, which in this case is effectively the planet’s frame. In this
frame the speed of the probe is
vrel =
q
(vt − vp)2 + v2
r.
As shown in M3, the most general thing that can happen is that the velocity of the probe
(in this frame) is rotated.
The final speed of the space probe, relative to the Sun, is a vector of length vrel plus the
velocity of the planet vp. So the highest possible speed is achieved when these are parallel,
vf = vp +
q
(vt − vp)2 + v2
r.
(d) Escape velocity is achieved when vf =
√
2vp. Plugging this in gives
(
√
2 − 1)vp =
q
(vt − vp)2 + v2
r.
Squaring both sides, we have
(2 − 2
√
2)v2
p = v2
r + v2
t − 2vtvp.
Plugging in the results of part (b),
(2 − 2
√
2)v2
p =
v2
0
x2
+ v2
0

1 −
1
x2

− 2v2
E

1 −
1
x

−
2
x
v0vp.
After a little simplification, and using vp = vE/
√
x, this becomes
v2
E
x
(2 − 2
√
2) = v2
0 − 2v2
E

1 −
1
x

−
2v0vE
x3/2
.
Let’s work with the dimensionless variable u = v0/vE, which obeys
u2
−
2u
x3/2
+
2
√
2
x
− 2 = 0.
25

Kevin Zhou Physics Olympiad Handouts
This is a quadratic in u. Applying the quadratic formula and taking the physical sign gives
u =
1
x3/2
+
s
1
x3
−
2
√
2
x
+ 2.
This is the function we want to minimize with respect to x. Taking the derivative and setting
it to zero is possible, though extremely painful; this yields
x =
9 +
p
81 − 24
√
8
8
≈ 1.58.
Alternatively, one can simply perform binary search on a calculator, giving the same result.
(e) This is the closest to Mars, which has x = 1.52.
Remark
Above we discussed the Oberth and Edelbaum maneuvers, which use two and three impulses,
respectively. In general, if you only deal with the gravity of the Sun, optimal maneuvers never
require more than three impulses, so they can’t get too complicated. But in reality, it would
be impractical to exit the solar system or reach the Sun without also using gravitational
slingshots. The Voyager probes used multiple slingshots off the gas giants to do the for-
mer, while the Parker Solar Probe did seven gravitational slingshots off Venus to do the latter!
Such trajectories need to be planned years in advance. They require careful adjustment to
make sure the rocket reaches the right points at the right times. Even the simplest case
of reaching a single desired point at a desired time, which is called Lambert’s problem, is
already analytically messy, and anything more than that has to be done numerically.
Still, you might be thinking, is this really the hardest stuff in the world, when it just boils
down to Newtonian mechanics? Well, as Lee DuBridge, the president of Caltech once said:
I [like] to talk about space to nonscientific audiences. In the first place, they
can’t check up on whether what you are saying is right or not. And in the second
place, they can’t make head or tail out of what you are telling them anyway—-so
they just gasp with surprise and wonderment, and give you a big hand for being
smart enough to say such incomprehensible things. And I never let on that all
you have to do to work the whole thing out is to set the centrifugal force equal
to the gravitational force and solve for the velocity. That’s all there is to it!
I’m just being glib here – the moon landing is unquestionably one of the greatest engineering
feats in history. The physical laws at play are elementary, but their application is subtle, and
the engineering required getting thousands of tricky real-world details right.
Example 9
An object quickly flies past a star of mass M, with nearly constant speed v, so that its
distance of closest approach is R. Estimate the angle by which the object is deflected.
26

Kevin Zhou Physics Olympiad Handouts
Solution
To solve this exactly, we could use properties of conics, or solve Newton’s second law in polar
coordinates. Here we’ll present a simpler rough estimate. Since the object is flying quickly,
its path is approximately a straight line. Most of the transverse impulse it experiences occurs
when it is at a distance of order R from the star, and we can approximate this as
∆p⊥ =
Z
F⊥ dt ∼ F⊥ ∆t ∼
GMm
R2
R
v
.
The small angle of deflection is thus
∆θ ≈
∆p⊥
mv
∼
GM
Rv2
.
The true answer in Newtonian gravity turns out to be 2GM/Rv2.
In Newtonian gravity, we can think of light as consisting of massless particles moving at
speed c, so we can find the deflection of light by setting v = c. However, in general relativity
the bending of light is actually twice as large, ∆θ = 4GM/Rc2. The observation of this
factor of 2 by Eddington during a solar eclipse was one of the first tests of general relativity,
but it’s pretty tricky; Einstein himself missed it in his original paper of the subject!
The 2 arises because in general relativity, for objects that don’t get too close to the Sun,
∆θ ≈
2GM
R

1
v2
+
1
c2

.
Roughly speaking, the first term comes from “temporal” curvature, and simply recovers the
Newtonian result. The second term is due to “spatial” curvature, which leads to an “angular
defect”: the circumference of a circle centered on the Sun is slightly less than 2πr. We could
neglect this effect in problem 5 because we were considering nonrelativistic particles, with
v ≪ c. But for light, the two effects contribute equally to the deflection.
Remark: Mercury’s Precession
Another famous prediction of general relativity is the perihelion precession of Mercury, i.e. the
fact that its orbit advances by a tiny angle ∆θ on each cycle. However, knowing only that
general relativity is a relativistic theory of gravity, we can estimate this angle by dimensional
analysis. The only dimensionful parameters are the strength of the Sun’s gravity GM, the
radius R of Mercury’s orbit, and the speed of light c. (Other parameters we might care about
can be expressed in terms of these; for instance, the speed of Mercury is v =
p
GM/R.) By
similar logic to the above problem, the only possible expression is
∆θ ∼
GM
Rc2
∼ 10−8
.
The true answer is larger by a factor of 6π/(1 − e2), where e ≈ 0.2 is the eccentricity.
27

Kevin Zhou Physics Olympiad Handouts
This discrepancy was known in Einstein’s time, and in textbooks it is usually described as
decisive evidence in favor of general relativity. As usual, the history is more complicated.
The precession is extremely tiny, and many other factors contribute to it. Even in the
1980s, people were arguing over whether the oblateness of the Sun could make a significant
difference. Fortunately, in the four decades since then, we have performed stringent tests of
general relativity, through extremely precise measurements of solar system orbits, gyroscopes
in satellites, and indirect and direct observations of gravitational waves. It turns out that
general relativity passes every test, and deviations from it must be extremely small.
5 Fictitious Forces
Idea 8
Consider an inertial frame and a rotating frame with angular velocity ω. For any vector V,
the time derivatives of V in these two frames are related by

dV
dt

in
=

dV
dt

rot
+ ω × V.
For example, when V is the position r, we have the familiar result
vin = vrot + ω × r.
Applying this equation to the velocity v, we find
ain = arot + 2ω × vrot + ω × (ω × r).
The two terms on the right correspond to the Coriolis and centrifugal forces,
Frot = F − 2mω × vrot − mω × (ω × r).
In the case where ω can change, we also have the azimuthal force −mω̇ × r. (If you prefer,
these forces can also be derived by working in components in polar coordinates, as shown in
chapter 11 of Wang and Ricardo, volume 1.)
Idea 9
Sometimes, the best way to deal with fictitious forces is to just avoid them by using an inertial
frame instead. This is especially true when the Coriolis force is not small; it’s straightforward
to treat it approximately if it’s small, but otherwise it’s quite complicated. If a problem
presents a situation in a rotating frame, there’s no reason you have to stay in that frame!
Example 10
Angular momentum conservation tells us that an ice skater increases their angular velocity as
they pull their arms inward. Derive this result by working in the frame that always rotates
with the skater, as the skater pulls their arms in radially. Specifically, model the skater as two
28

Kevin Zhou Physics Olympiad Handouts
point masses m a distance r from the axis. Show that balancing the Coriolis and azimuthal
forces yields a result equivalent to using angular momentum conservation in an inertial frame.
Solution
Let ω be the (time-dependent) angular velocity of the skater’s frame. Balancing the forces
on one arm,
2mωṙ = −mω̇r
which is equivalent, by the product rule, to the statement that ωr2 is constant. Then mr2ω
is constant, which is exactly the angular momentum in an inertial frame.
Example 11
A projectile is dropped from height h at the equator. Let the Earth be spherical with angular
velocity ω, and let the local gravitational acceleration be g. Counting only the Coriolis force,
which direction is it deflected when it hits the ground, and by about how far?
Solution
The earth rotates from west to east, so the angular velocity points from the south pole to
the north pole. The velocity of the falling ball points radially inward, so the Coriolis force
points east. We naturally assume the height h is much less than the radius of the Earth, so
the inward gravitational acceleration is constant. The Coriolis acceleration is thus
ac = 2ωv = 2ωgt
in the eastward direction, and integrating this twice gives a deflection
d(t) =
1
3
ωgt3
.
The projectile hits the ground at t =
p
2h/g, giving a final eastward deflection of
d =
ω
3
s
(2h)3
g
.
This is the right answer to first order in ω. For a neat geometric method that arrives at the
same result, see the solutions to NBPhO 2016, problem 9.
Remark
It’s quite subtle to get a more accurate answer to the above problem, because a slew of other
effects appear at higher order, including the centrifugal force (which affects both the mass’s
trajectory, and causes the Earth’s shape to bulge out at the equator), and the variation in g
with height. If you want to explore this in detail, see problems 10.12 and 10.13 of Morin.
29

Kevin Zhou Physics Olympiad Handouts
Incidentally, one of the earliest tests of Newtonian gravity was measurements of the Earth’s
shape. In the 1730s, the French sent surveyors to modern Finland and Ecuador to measure
the curvature of the Earth by triangulation. These were some of the most expensive scientific
expeditions that had ever been performed. Upon their success, Voltaire said: “You have
confirmed in these tedious places what Newton found out without leaving his room.”
Example 12
The Eotvos effect is the fact that the apparent weight of an object on Earth depends on its
motion. How large is this effect at latitude ϕ, and what directions of motion have an effect?
Solution
The Eotvos effect is due to the Coriolis force. As we mentioned in the previous example, the
angular velocity of the Earth points out of the north pole. For concreteness, let’s suppose
we’re in the northern hemisphere, ϕ > 0. Then a object moving east with speed v will yield an
outward Coriolis force 2mωv, making the apparent weight lighter, while a westward velocity
will make the apparent weight heavier. (Moving north or south, or up and down, just deflects
the object east or west.) Eotvos first measured this effect in the lab in the 1910s, by rotating
a balance. It must be accounted for by surveys of g, which are used to find oil deposits.
Example 13
Explain where the factor of 2 in the Coriolis force comes from, working in an inertial frame.
Solution
For concreteness, consider a rotating cylindrical space station of radius R with angular
velocity ω. An astronaut initially stands on its rim, then jumps upward, picking up an
inward radial velocity u in the space station’s rotating frame. The Coriolis force implies that
the astronaut will have tangential acceleration 2ωu.
In an inertial frame, this 2 comes from the combination of two effects of equal magnitude.
Let v = ωR be the initial tangential velocity of the astronaut in this frame. As the astronaut
moves radially inward, angular momentum conservation implies that their tangential velocity
increases, so that after a time dt it is
ωR
R
R − udt
= ωR + ωudt.
In addition, the tangential speed of the rotating frame at the astronaut decreases, to
ω(R − udt) = ωR − ωudt.
The relative tangential acceleration is thus 2ωu, giving the desired result.
[1] Problem 18. A cylindrical space station of radius R can create artificial gravity by rotating with
angular velocity ω about its axis.
30

Kevin Zhou Physics Olympiad Handouts
(a) For an observer rotating along with the spaceship on the rim, what gravitational acceleration
g do they perceive?
(b) The observer throws a ball parallel to the floor. For some launch speed v, the observer will
see the ball perform a circular orbit along the spaceship, always parallel to the floor. Find v.
(c) What does the motion of part (b) look like, in a frame that isn’t rotating with the ship?
Solution. (a) They perceive the centrifugal acceleration, g = ω2R.
(b) The Coriolis force points upward, so the acceleration upward is
a = 2ωv − ω2
R.
For the ball to perform a circular orbit, it needs to have a centripetal acceleration of a = v2/R.
Equating these expressions for a gives (v − ωR)2 = 0, implying
v = ωR.
(c) This is an example of a case where working in an inertial frame is easiest. In an inertial frame,
the ball just hovers in place (since there isn’t any gravity), while the space station’s floor
rotates with speed v right under it.
[1] Problem 19. A frictionless tube of length R is rotated with fixed angular velocity ω about one of
its ends. A package is placed in the tube at a distance r0 from the axis of rotation, with no initial
radial velocity. When the package flies out the other end of the tube, what is its speed?
Solution. In the frame rotating with the tube, there is only a centrifugal force F = mω2r, cor-
responding to a potential energy V (r) = −mω2r2/2. By conservation of energy, the package has
speed v = ω
p
R2 − r2
0 when it reaches the end of the tube. We then have to go back to the lab
frame, where there’s also a tangential speed ωR, giving
v = ω
q
2R2 − r2
0.
Alternatively, you can solve for r(t) explicitly, by guessing exponentials. The solution is essentially
the same as for the problem in M3 involving a rope on a table.
[2] Problem 20. Every satellite in orbit around the Earth is slowly falling due to drag. Consider a
satellite steadily falling, with a large tangential velocity and small inward radial velocity.
(a) Show that for a satellite initially in a circular orbit, losing energy U to drag increases the
kinetic energy of the satellite. By how much is it increased?
(b) The result of part (a) seems almost paradoxical. How can it be explained in an inertial frame,
given that the drag force always acts to slow down the satellite?
(c) Now consider a uniformly rotating frame, whose angular velocity is equal to the initial angular
velocity of the satellite. In this frame, the drag force always points tangentially backwards,
but the satellite ends up going tangentially forward. What force is responsible?
31

Kevin Zhou Physics Olympiad Handouts
Solution. (a) This follows from the virial theorem, namely that the time average of the kinetic
energy is negative of the time average of the total energy. So losing U total energy means
gaining U kinetic energy. This recalcitrant behavior, where the mass seems to want to
accelerate in the direction opposite the way it’s pushed, is called the “donkey effect” in
galactic dynamics.
(b) Gravity always points radially, but since the satellite’s velocity has an inward radial component,
that means gravity has a component along the velocity, and hence increases the speed. If you
go through the calculation, which is a slightly more complex version of an example in M5,
you’ll find that the speed-increasing effect of gravity is precisely twice the speed-decreasing
effect of the drag force.
(c) The inward component of the velocity gives rise to a Coriolis force pointing tangentially
forward. Again, if you go through the calculation, you’ll find it’s twice as large as the drag
force, effectively flipping its direction. The explanation looks totally different in the rotating
frame, but the result is the same.
[2] Problem 21 (Cahn). A pendulum is designed for use on a gravity-free spacecraft. The pendulum
consists of a mass at the end of a rod of length ℓ. The pivot at the other end of the rod is forced to
move in a circle of radius R with fixed angular frequency ω. Let θ be the angle the rod makes with
the radial direction.
Show this system behaves exactly like a pendulum of length ℓ in a uniform gravitational field
g = ω2R. That is, show that θ(t) is a solution for one system if and only if it is for the other.
Solution. This system experiences no gravitational force, but instead experiences a Coriolis and
centrifugal force. The Coriolis force plays no role, because it is always perpendicular to the velocity
of the mass and the angular velocity, which implies it is directed along the rigid rod; it merely
changes the tension in the rod.
The centrifugal acceleration a is directed away from the origin; the relevant part of it is the
component a⊥ perpendicular to the rod. Referring to the below diagram, we see that a⊥ =
ω2(Rsinθ).
This is exactly the same a⊥ as for a pendulum in gravity g = ω2R, so the systems are equivalent.
[2] Problem 22. Two stars of mass M orbit each other in a circle. The separation between them is
2R, and their angular velocity about their center is ω. Work in the frame rotating with the stars.
32

Kevin Zhou Physics Olympiad Handouts
(a) In this frame, how many places can a third object of negligible mass stay at rest? Qualitatively
indicate where all of them are, and when possible, analytically solve for their locations.
(b) Ignoring the Coriolis force, how many of these locations would be stable equilibria?
Solution. (a) There are 5 such locations. Let’s place the stars at (−R,0) and (R,0). The angular
velocity obeys
GM2
(2R)2
= Mω2
R
from which we conclude that the centrifugal acceleration is
ac = ω2
r =
GMr
4R3
.
The desired points are the ones where g cancels the centrifugal acceleration.
• Clearly, both vanish at (0,0) by symmetry.
• There are also other points on the x-axis where they cancel. Clearly, such points must lie
at |x| > R. For the case x > R, we must solve
GMx
4R3
=
GM
(x − R)2
+
GM
(x + R)2
which, after clearing denominators, gives a quintic equation. It’s not practically possible
to solve it analytically, but the answer is roughly x ≈ 2.4R. Similarly, there’s another
point at negative x.
• There are also points on the y-axis where they cancel. The relevant equation is
GMy
4R3
=
2GMy
(R2 + y2)3/2
which can be straightforwardly solved to get y = ±
√
3R. At these points, the three bodies
form an equilateral triangle.
(b) Without the Coriolis force, none of them are stable. For (0,0), a displacement towards either
mass would just make its gravitational attraction stronger. (The centrifugal force adds to
this effect, making the point even more unstable.) As for the four other equilibrium points, a
displacement in the radial direction would make the gravitational attraction weaker but the
centrifugal force stronger, so that the particle would keep moving away.
Remark: Lagrange Points
In part (b) above, you should have found that none of the locations are stable equilibria.
This is a consequence of Earnshaw’s theorem, which is usually stated in the context of
electrostatics. In that context, suppose that in the presence of electric charges, a point P
outside of the charges is an equilibrium point, i.e. one where the electric field vanishes. We
then draw a small Gaussian surface S about P. For P to be a stable equilibrium point, we
would need the electric field to point inward everywhere on S. But this is impossible: since
there is no charge inside S, Gauss’s law implies that the electric flux through it must be zero.
33

Kevin Zhou Physics Olympiad Handouts
The same argument applies to gravitational fields, as they satisfy ∇ · g = 0 away from other
masses, and therefore obey the same Gauss’s law constraint. In the above problem, there was
also a centrifugal acceleration ac, so that the relevant quantity was atot = g + ac. However,
∇ · ac is positive, so it tends to make equilibrium points even more unstable, as you saw.
However, to determine stability correctly, we have to account for the Coriolis force, which
tends to deflect things sideways. To do this, we expand Newton’s second law at first order
about the equilibrium point. The resulting differential equations are still linear, even with
the Coriolis force added, and the equilibrium point is unstable if there is a normal mode
solution that grows exponentially.
This more general analysis is carried out here, and the result is that all five equilibrium
points are still unstable. (This situation was considered in IPhO 2011, problem 1, but there
the Coriolis force was ignored and an unphysical assumption was introduced, leading to
the incorrect conclusion that some of the points were stable. I don’t recommend that problem.)
More generally, if the stars have masses M1 > M2, there are still five equilibrium points.
Two of them are still at the vertex of an equilateral triangle, and they become stable if
M1
M2
>
25 + 3
√
69
2
≈ 25.
For a proof of this remarkable statement, see this answer. Since MSun/MEarth = 3 × 105, the
corresponding Lagrange points for the Earth-Sun system are stable.
[4] Problem 23. E 1 0IPhO 2016, problem 1B. A useful set of Coriolis force exercises.
[3] Problem 24.   ^ 1 0USAPhO 2020, problem A2. A tricky question on the Foucault pendulum. For
an algebraic derivation of the final result, see section 9.9 of Taylor; it uses the complex number
method introduced for a problem in M1. For a beautiful but more abstract geometric derivation,
see section 11.5.1 of Griffiths’ Introduction to Quantum Mechanics (3rd edition).
As a warning, this problem and its solution are rougher than usual, because the 2020 USAPhO
was cancelled due to the pandemic. Still, I include some 2020 problems in these problem sets
because they illustrate new ideas.
[4] Problem 25 (Morin 10.26). A coin stands upright on a turntable rotating with angular frequency
ω, and rolls without slipping so that its center is motionless in the lab frame. Thus, in the frame of
the turntable, the coin rolls without slipping in a large circle with angular frequency ω.
(a) In the lab frame, explain how F = dp/dt and τ = dL/dt are satisfied. (This is the easy part.)
(b) In the frame of the turntable, verify that F = dp/dt.
(c) In the frame of the turntable, verify that τ = dL/dt. (This is the hard part.)
If you slogged through part (c), you’ll understand why we rarely want to think about torques for
extended bodies in rotating frames.
34

Kevin Zhou Physics Olympiad Handouts
Solution. Let the coin have radius r and mass m, and let its orbit have radius R.
(a) The normal force cancels the gravitational force, while the friction force evidently vanishes.
Hence all forces and torques cancel.
(b) The centrifugal force is mω2R and directed outward, while the Coriolis force due to the orbital
motion is 2mωv = 2mω2R and directed inward. Hence there is an inward force of mω2R, as
required.
(c) A torque is required to turn around the coin’s spin angular momentum. This is provided by
the Coriolis force associated with the spin motion, which provides zero net force but does
provide a net torque. Let the coin rotate with spin angular velocity ωs and consider the
noninertial frame following the center of mass.
Putting the origin at the center of the coin, and assuming the coin spans the xy plane,
vspin = ωs(xŷ − yx̂).
The spin Coriolis acceleration at that point is
a = 2ω × vspin = 2ωωsyẑ, ω = ωŷ.
The differential torque is
dτ = r × adm = (xx̂ + yŷ) × (2ωωsyẑ)dm.
The term proportional to xy will integrate to zero, so we might as well ignore it,
dτ = 2ωωsy2
x̂dm.
Upon integrating over the coin, we have
τ = 2ωωs
Z
y2
dm.
This can be simplified using a trick. By rotational symmetry, we have
τ = ωωsx̂
Z
x2
+ y2
dm = Icmωωsx̂ = Lspinωx̂
just as required. This Coriolis torque makes it a pain to think about rotating extended bodies
in rotating frames.
Idea 10
An object freely falling in a gravitational field will experience tidal forces, due to the spatial
variation of gravitational fields. Specifically, suppose a mass M is placed at (R,0,0). Then
the gravitational acceleration near the origin is
g ≈
GM
R2
x̂ + gtidal, gtidal =
GM
R3
(2xx̂ − yŷ − zẑ).
In particular, if a small rigid object with center of mass at the origin is released, it will
have acceleration (GM/R2)x̂. In the frame of the center of mass, the rest of the object will
35

Kevin Zhou Physics Olympiad Handouts
experience the residual gravitational acceleration gtidal. Intuitively gtidal tends to stretch the
object in the longitudinal direction and squeeze it in the transverse direction.
Example 14
Estimate the height of the tides on Earth induced by the Moon.
Solution
We will simplify the problem by treating the Earth and Moon as stationary, and the Earth
as a ball of fluid. The result above tells us that the tidal acceleration due to the Moon is
g =
GMM
D3
(2xx̂ − y ŷ)
where D is the distance to the Moon.
Suppose that without the Moon’s presence, the Earth is a sphere of radius RE. By integrating
this, the tidal gravitational potential induced on the Earth’s surface is
∆Φ = −
GMMR2
E
D3
3cos2 θ − 1
2
.
Changing the gravitational potential on the surface by ∆Φ means the equilibrium height of
the water shifts by ∆h = ∆Φ/g, where g is the gravitational acceleration of the Earth. Thus,
∆h ∼
GMMR2
E/D3
GME/R2
E
=
MM
ME

RE
D
 3
RE.
This can also be written in terms of the densities,
∆h ∼
ρM
ρE

RM
D
 3
RE.
The first term is of order one. The second term is the angular radius of the Moon in the sky,
which is about a quarter of a degree, giving
∆h ∼

2π
360 × 4
 3
RE ∼ 0.5m
which is of the right order of magnitude.
Remark
The tidal effects of the Sun and Moon are comparable, but the Moon’s are somewhat larger.
This can be seen by the final equation above: the Sun and Moon have comparable angular
diameter, since eclipses can just barely happen, but the Moon is 2.4 times denser.
36

Kevin Zhou Physics Olympiad Handouts
When the Moon and Sun’s tidal effects reinforce, one has a larger tidal effect, called a spring
tide; otherwise, one has a neap tide. Given what’s been said so far, you should be able to
figure out what phase(s) of the Moon and time(s) of day correspond to each (at least for an
idealized “spherical cow” Earth), and also roughly how much stronger tides are at spring
tides than at neap tides.
It’s worth noting that the actual tides are far more complicated than just computing the tidal
force, because they depend on the dynamical response of the water, which in turn depends
on the detailed lay of the land. For some more details, see here.
[2] Problem 26 (Morin 10.31). A small spherical rock covered with sand falls radially toward a planet.
Let the planet have radius R and density ρp and let the rock have density ρr. When the rock gets
close enough to the planet, the tidal force will pull the sand off the rock. The cutoff distance is
called the Roche limit; it gives the radial distance below which loose objects can’t coalesce into
larger ones.
(a) Show that if the rock isn’t rotating, the Roche limit is
d = R

2ρp
ρr
 1/3
.
(b) Now suppose the rock is both orbiting the planet, and rotating so that the same side always
faces the planet. Show that the Roche limit is
d = R

3ρp
ρr
 1/3
.
Solution. Let the rock have radius r, and consider the point on the rock nearest to the planet.
(a) The gravitational acceleration at this point due to the rock is
grock =
4π
3
Grρr.
The tidal acceleration due to the planet (relative to the center of the rock) is
gtidal =
8π
3
Grρp

R
d
 3
.
When these two are equal, the normal force on the point vanishes, so the sand can lift off;
solving gives the desired result.
(b) The rock as a whole accelerates due to the planet’s gravity with
gplanet =
4π
3
GR3
ρp
1
d2
= ω2
d
where ω is the orbital angular velocity of the rock about the planet. Since the rock is tidally
locked, it also has a spin angular velocity of ω, so the point has an acceleration of ω2r, giving
acentripetal = ω2
r =
4π
3
Grρp

R
d
 3
.
The sand at this point lifts off when grock − gtidal = acentripetal, as the normal force vanishes
in this case. Solving this gives the desired result.
37

Kevin Zhou Physics Olympiad Handouts
[3] Problem 27.   ^ 1 0USAPhO 2025, problem A2. A nice problem on an exotic tidal effect.
[4] Problem 28.   T 1 0IPhO 2009, problem 1. A neat problem about how the Moon has slowed down
the Earth’s rotation. This is a fascinating subject; in the deep past, not only were days shorter,
but the weather on Earth was completely different, owing to the much higher Coriolis forces.
[5] Problem 29.   h 1 0IPhO 1992, problem 1. A difficult problem on a strange propulsion mechanism.
I recommend using Kai Wen Teo’s modified version.
Solution. See Kai Wen Teo’s solution here, and refer to the official solutions for further discussion.
Remark: Negative Mass
One intriguing difference between electrostatics and gravity is that charge can be positive
or negative, while mass is apparently only positive. Could there be a “negative mass”, to
complete the analogy, which falls upward in a gravitational field? If general relativity is true,
the answer is no: it implies the equivalence principle, i.e. that particles all accelerate the
same way in a gravitational field. (Every month, people will write clickbait publications
saying they’ve created negative mass, but all of those examples are like balloons. They don’t
go up in a gravitational field because they actually have negative mass, they go up because
they have less mass than the stuff they’re displacing.)
However, there’s an alternative formulation of negative mass that does respect the equivalence
principle: let F = mg and F = ma with the same negative m in both equations. Then the
force on the mass points upward, but it accelerates downward anyway.
This leads to some seriously strange consequences. For example, suppose we had a positive
and a negative mass interacting. Then the two would repel each other, which implies that both
will start accelerating in the same direction! This is completely compatible with momentum
and energy conservation, since the negative mass has flipped momentum and negative energy,
but it’s quite strange. In a universe with an equal amount of both kinds of masses, they’ll
both eventually end up zooming around at the speed of light, but the energy will be zero.
Anyway, at the moment we don’t know of anything in reality with these weird properties.
38
