---
id: kevin-zhou-t1-p016
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t1-p016
solution_type: author
source_document: solution-document-kevin-zhou-t1sol
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T1Sol.pdf."
---

[3] Problem 16. Some basic computations for ideal gases.
(a) For an ideal gas in a box, show that the probability distribution of speeds obeys
p(v) ∝ v2
e−mv2/2kBT
at any point in the box, regardless of the shape of the box.
(b) Compute the most probable speed, i.e. the location of the peak of this probability distribution.
(c) Show that the average kinetic energy is ⟨mv2/2⟩ = 3kBT/2. This is a special case of the
equipartition theorem, shown below. (Hint: you will have to do a somewhat tricky integral.
See the example below and the examples in P1 for guidance.)
Solution. (a) Note that the probability that a particle has velocity (vx,vy,vz) is given by
f(vx,vy,vz)dvx dvy dvz where f(vx,vy,vz) ∝ e
− m
2kBT
(v2
x+v2
y+v2
z)
. Then, we see that
p(v)dv ∝ (4πv2
dv)e
− mv2
2kBT
,
where the factor of 4πv2 comes from the surface area of a sphere. Thus, p(v) ∝ v2e−mv2/2kBT .
(b) We set p′(v) = 0, so
v2
(−mv/kBT)e−mv2/2kBT
= −2ve−mv2/2kBT
=⇒ v =
r
2kBT
m
.
(c) Using the result of part (a),
⟨mv2
/2⟩ =
R∞
0
1
2mv2

v2e−mv2/2kBT dv
R∞
0 v2e−mv2/2kBT dv
=
kBT
2
R∞
0 x4e−x2/2 dx
R∞
0 x2e−x2/2 dx
where we nondimensionalized the integral. To evaluate it, note that by integration by parts,
Z ∞
0
(x3
)(xe−x2/2
dx) = 3
Z ∞
0
x2
e−x2/2
dx.
Then the ratio of integrals is just 3, giving
⟨mv2
/2⟩ =
3
2
kBT
as desired.
Remark: Deriving the Maxwell Velocity Distribution
Statistical mechanics implies that the velocity distribution in an ideal gas is
p(v) ∝ e−mv2/2kBT
which is a three-dimensional Gaussian. This result was first derived by Maxwell, long before
statistical mechanics was understood, using an ingenious argument.
17
Kevin Zhou Physics Olympiad Handouts
Suppose the ideal gas is inside a rectangular box, so that collisions with its left and right sides
determine vx, the front and back sides determine vy, and the top and bottom sides determine
vz. The distributions of velocities in each direction should therefore be independent, and
identical by rotational symmetry, so that we can write
p(v) = f(vx)f(vy)f(vz)
for some function f. Moreover, by rotational symmetry, p(v) can only depend on v2. Taking
the logarithm of both sides and defining g = logf, we have
logp = g(vx) + g(vy) + g(vz)
and the right-hand side only depends on v2. This is only possible if g(x) = −αx2
for a constant α, which yields p(v) ∝ e−αv2
. (This remarkable property of Gaussian
functions is connected to their appearance in the central limit theorem.) Finally, the value of
α can be determined, e.g. by demanding the pressure match the ideal gas law (see example 7).
But this trick is limited. When relativistic effects are important, the vi are not independent –
if vx is near c, then vy and vz must be small. (Concretely, if a collision with a wall in the yz
plane applies a relativistic impulse ∆px, then it also changes vy and vz since p = γmv.) The
vi also aren’t independent if quantum statistics matters. For example, if the gas particles
are fermions, as discussed in X1, then no two can be in the same state, so some final v’s are
forbidden. So we’ll now present a different, more modern derivation, which generalizes better.
The idea is that in thermodynamic equilibrium, time reversal symmetry implies every reaction
is in “detailed balance”. Specifically, suppose that when two gas molecules collide elastically,
with velocities (v1,v2), they exit with velocities (v′
1,v′
2). Then the rate at which this happens
must be equal to the rate at which gas molecules with velocities (v′
1,v′
2) collide, which causes
them to exit with velocities (v1,v2). (Otherwise, you could distinguish a video of the
molecules’ dynamics from the same video played in reverse.) Therefore,
p(v1)p(v2)|v1 − v2| = p(v′
1)p(v′
2)|v′
1 − v′
2|
where the relative velocity factor is present because a larger relative velocity gives more
opportunities for collision. However, for elastic collisions, the initial and final relative
velocities are the same, so this factor just cancels out.
Now, by rotational symmetry we have p(v) = f(v2) for some function f, so
f(v2
1)f(v2
2) = f(v′2
1 )f(v′2
2 )
Furthermore, by energy conservation we have v2
1 + v2
2 = v′2
1 + v′2
2 . Then the above equation
can only be satisfied if f is an exponential, f(x) ∝ e−αx, which again gives p(v) ∝ e−αv2
.
18
Kevin Zhou Physics Olympiad Handouts
Idea 6: Equipartition Theorem
Suppose some degree of freedom in phase space contributes to the energy by a power law,
E ∝ pn
or E ∝ xn
.
Then in thermal equilibrium, there is an average energy of kBT/n in this degree of freedom.
The proof of this is just a straightforward generalization of the reasoning in problem 16(c).
Note that the proof of the equipartition theorem is entirely classical, i.e. it holds when a
system is adequately described by classical mechanics. It does a good job of describing the
heat capacities of simple gases near room temperature, as you can see here.
Here are a few important examples of the equipartition theorem.
• A mass on a spring in one dimension has
E =
p2
2m
+
kx2
2
.
This involves two degrees of freedom in phase space, each with n = 2, so the average
energy is 2(kBT/2) = kBT.
• In problem 7 you considered a system with a linear potential energy, E(h) = mgh. This
is a degree of freedom with n = 1, and accordingly, the average potential energy of each
molecule is kBT.
• An atom in a solid can be thought of as attached to its neighbors by springs. Since the
atom is in three dimensions, this yields three copies of the first example, and hence an
average thermal energy of 3kBT. This implies that the specific heat per atom in a solid
is 3kB (or equivalently 3R per mole), which is called the Dulong–Petit law.
Incidentally, because systems in thermal equilibrium are also in long-term mechanical equilib-
rium, the virial theorem from M6 applies, and tells us the ratio between the average kinetic
and potential energy; of course, it matches the result of the equipartition theorem. You’ll
investigate some more key examples in the problems below.
