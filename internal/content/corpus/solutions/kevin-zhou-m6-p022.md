---
id: kevin-zhou-m6-p022
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m6-p022
solution_type: author
source_document: solution-document-kevin-zhou-m6sol
source_pdf: sources/kevin_zhou/site/handouts/M6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M6Sol.pdf."
---

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
