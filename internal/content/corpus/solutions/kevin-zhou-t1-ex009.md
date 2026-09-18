---
id: kevin-zhou-t1-ex009
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t1-ex009
solution_type: author
source_document: solution-document-kevin-zhou-t1sol
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T1Sol.pdf."
---

Example 9
A container of volume V is filled with a gas of uniform temperature T, and placed in a
vacuum. If a small hole is punched in the container and gas slowly leaks out, how does the
temperature in the container change over time?
Solution
The mean free path λ is the average distance a gas molecule moves before it hits another
one. Let d be the width of the hole. There are two important limiting cases.
If λ ≪ d, then molecules can’t make it out of the hole without undergoing many collisions.
Thus, if the gas has some average flow velocity, its molecules will be carried along with it. We
can thus treat the gas like a continuous fluid, and the logic of example 4 applies. The gas inside
the container does P dV work on the gas exiting and hence loses energy. Thus, the remaining
gas cools down, so the temperature of the container decreases over time. (Doing this problem
quantitatively requires the analogue of Bernoulli’s principle for gases, which we derive in T3.)
If d ≪ λ, then molecules fly out of the hole without encountering any others at all; this is
the regime of “effusion”. Therefore, we shouldn’t think in terms of an average gas pressure
or flow velocity, but rather just consider each molecule on its own. An individual molecule
has a greater chance of escaping through the hole if it’s moving faster. Thus, the molecules
that come out will on average be higher energy than the ones that stay in the container. So
just as in the opposite limit, the remaining gas cools down, but for a totally different reason.
(This case is treated quantitatively in problem 2.24 of Wang and Ricardo, volume 2.)
Remark
The previous example implies that a gas of uniform temperature can turn into a hot gas
and a cold gas without needing any external work, which seems to directly contradict the
second law of thermodynamics! To phrase it another way, you can use the free temperature
difference to run a heat engine, which seemingly allows perpetual motion.
Of course, the resolution is that the total entropy of the gas is still going up. The kinetic
energy is getting less spread out, but the positions of the atoms are getting more spread out,
since some can now be outside the container. Thus, the “perpetual motion” only works as
long as the gas is still leaking out of the container; it stops once the density becomes uniform.
The lesson here is that, while most setups extract work from a temperature difference, more
generally you can extract it from any potential increase in entropy; in this case, it comes
from an initial difference in densities.
[2] Problem 22 (Kalda). Natural uranium consists of mainly two isotopes, 238U and 235U, and the
relative concentration of the latter is 0.7%. Uranium is enriched by a multi-stage process, where
at each stage, evaporated UF6 is led through a porous wall. The porous wall is a thin film with
microscopic holes, much smaller than the mean free path of the molecules, but larger than the
26
Kevin Zhou Physics Olympiad Handouts
dimension of the molecules. How many stages are needed to increase the 235U content to 1.4%?
The molar mass of fluoride is 19g/mol.
Solution. Say the two different versions of UF6 have molecular masses M1,M2. The key idea is
that the average kinetic energy of each one is the same (namely 3
2kBT), so 1
2M1v2
1 = 1
2M2v2
2. This
means that v1/v2 =
p
M2/M1, so the rate that M1 leaves divided by the rate that M2 leaves is p
M2/M1. Thus, the rate at which 238U leaves divided by the rate that 235U leaves is
r =
p
(235 + 6 · 19)/(238 + 6 · 19) ≈ 0.9957.
Therefore, in each state the ratio of 238U to 235U is multiplied by r, and the total number of stages
N required obeys rN ≈ 1/2, which has solution N ≈ 160.
This problem assumed a large mean free path, in which case the molecules escaped by effusion.
In the opposite limit, where the mean free path is small, we would instead describe the gas using
fluid flow equations, such as Bernoulli’s principle. However, in that limit the two isotopes would
just get carried along with the flow in the same way, leading to no enrichment.
[2] Problem 23 (Cahn). A small vessel with a tiny hole of diameter d is placed inside a chamber,
where the pressure is so low that the mean free path is λ ≫ d. The temperature of the gas in the
chamber is T0, and the pressure is P0. The temperature in the vessel is kept at a constant T1 = 4T0.
What is the pressure inside the vessel when steady state is reached?
Solution. Since the chamber is much larger than the vessel, gas entering the vessel and leaving
from the vessel won’t affect the pressure or temperature of the chamber. Now, it is very easy to fall
into the following trap. One may argue that steady state is reached when the pressures in the vessel
and chamber are the same. After all, isn’t that what happens when two gases come in equilibrium?
The problem is that we are in the effusive regime λ ≫ d. Thus, if a particle is near the hole
and heading towards it, it’s likely to just pass through without hitting anything at all; it doesn’t
“know” that it’s entered a region of higher pressure, so there’s no reason for the pressures to equalize.
Instead, equilibrium just occurs whenever the rate of particles going from the chamber to the vessel
is the same as the rate of particles going from the vessel to the chamber. This rate is proportional
to the number density times the average speed, so in equilibrium,
n0⟨v0⟩ = n1⟨v1⟩.
We also know that ⟨vi⟩ ∝
√
Ti by equipartition. Therefore, n1 = n0/2, and the ideal gas law says
p ∝ nT, so p1 = 2p0.
If you think the step where we asserted ni⟨vi⟩ matched on both sides was not rigorous enough,
here’s a more formal derivation. (The result of this derivation will also be used in T2.)
27
Kevin Zhou Physics Olympiad Handouts
Lemma. Given a box with an (ideal) gas of particle mass m, temperature T, and number density
n (number of particles per unit volume), the number of particles leaving a small hole of area A per
unit time is
nA
4
⟨v⟩ =
nA
4
r
8kBT
πm
assuming that
√
A ≪ λ.
Proof. Let f(v) be the distribution of velocities of the particles. What this means is that the
probability that a particle has velocity in [vx,vx + dvx] × [vy,vy + dvy] × [vz,vz + dvz] is
f
 q
v2
x + v2
y + v2
z

dvxdvydvz.
Set up spherical coordinates with origin at the hole. We will now count the number of particles that
hit the hole in a time dt using a funny double counting argument, where we start by counting the
number of particles that hit the hole with a certain velocity and then integrate over all velocities.
We will start by counting the number of particles that move with speed v (technically speed
in [v,v + dv], but from now on we’ll be lazy about this) and spherical coordinate angles (θ,ϕ).
Here θ = 0 means pointing toward the hole, and θ = π/2 is parallel to the plane of the hole (the
spherical coordinates for the velocity are flipped compared to those for space, since the θ = 0 rays
are anti-parallel). In a given volume dV , the number of particles with this velocity is just
(ndV ) · f(v) · v2
sinθdv dθdϕ.
For this given velocity, the volume in space that will allow such particles to hit the hole is a tilted
cone object with base A, slant θ, slant height vdt, and aligned in the proper ϕ direction. In particular,
its volume is A(vdt)cosθ, so the number of particles with velocity (v,θ,ϕ) hitting the hole in time
dt is
(nAdt) · f(v) · v3
sinθcosθdv dθdϕ.
Thus, the rate of particles leaving is
α = nA
Z ∞
0
v3
f(v)dv
Z π/2
0
sinθcosθdθ
Z 2π
0
dϕ = πnA
Z ∞
0
v3
f(v)dv.
On the other hand, note that the average speed is
⟨v⟩ =
Z ∞
0
Z π
0
Z 2π
0
v · f(v) · v2
sinθdv dθdϕ = 4π
Z ∞
0
v3
f(v)dv,
which tells us that
α =
nA
4
⟨v⟩,
as desired. Note that this derivation didn’t depend on the particular form of f(v). For instance, it
would work just as well for a relativistic particle, or even photons, as we’ll see in T2.
