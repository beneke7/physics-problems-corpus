---
id: kevin-zhou-m6-ex004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m6-ex004
solution_type: author
source_document: solution-document-kevin-zhou-m6sol
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M6Sol.pdf."
---

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
