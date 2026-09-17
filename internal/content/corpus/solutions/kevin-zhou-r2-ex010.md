---
id: kevin-zhou-r2-ex010
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r2-ex010
solution_type: author
source_document: solution-document-kevin-zhou-r2sol
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R2Sol.pdf."
---

Example 10: Right Angle Lever Paradox
In 1909, Lewis and Tolman found one of the first relativistic paradoxes. Consider a rigid
lever in static equilibrium, with both arms of length L, experiencing the forces shown at left.
In a frame where the lever moves to the right with speed v, one of the lever arms will be
contracted to L/γ, as shown at right. In addition, by the results of problem 18, the vertical
external forces will be redshifted to F/γ. This implies a net torque of
τ = FL −
F
γ
L
γ
= FLv2
.
The paradox is, given that τ = dL/dt, why doesn’t the lever rotate?
Solution
The resolution is that, in the frame shown at right, the angular momentum of the lever is
constantly increasing. The horizontal forces are continually doing equal and opposite work
on the lever, resulting in a upward flow of energy of rate Fv in the vertical arm. As explained
below problem 1, in relativity, energy flow is equal to momentum density, so the total upward
31
Kevin Zhou Physics Olympiad Handouts
momentum in the vertical arm is FLv. Therefore,
dL
dt
=
dx
dt
(FLv) = FLv2
exactly as expected.
Remark: Relativistic Torque
The resolution of the right angle lever paradox is very controversial, with dozens of papers
written on the subject, so we should discuss what it even means to “resolve” a paradox. As
long as we believe relativity is self-consistent, we already know what’s going to happen: the
lever won’t rotate. Everything the lever does is determined by F = dp/dt alone, so if it looks
like angular momentum considerations give a different answer, that just means we haven’t
formulated the latter correctly. The reason there are so many different resolutions out there
is just that people choose different ways to define torque and angular momentum.
The solution above is the standard one, and its implicit definition of angular momentum can
be motivated by Noether’s theorem. That’s a reasonable choice, since it’s a specific output
of a useful and general theorem, and we thereby know for sure that it’s conserved for isolated
systems. Unfortunately, explaining the definition takes some advanced math.
We define the angular momentum density tensor
Mµνρ
(x) = xµ
Tνρ
(x) − xν
Tµρ
(x)
where the right-hand side contains the stress-energy tensor, from the solution to problem 17.
The total angular momentum is an antisymmetric rank 2 tensor,
Jµν
(t) =
Z
dxMµν0
(x).
Noether’s theorem states that it is this quantity that is conserved for an isolated system, due
to symmetry under rotations and boosts. More specifically, the three spatial components
Jxy, Jyz, and Jzx just make up ordinary angular momentum, e.g. for a single point particle
they would assemble into the vector r×p = r×(γmv). And the other components J0x, J0y
and J0z have to do with the center of mass motion.
If there is an external four-force per unit proper volume fµ(x), which in terms of the stress-
energy tensor implies ∂µTµν = fν, the rate of change of angular momentum is
dJµν
dt
= τµν
, τµν
=
Z
dxxµ
fν
(x) − xν
fµ
(x)
which looks quite similar to the Newtonian expression. The component of this equation
relevant to this paradox is dJxy/dt = τxy, where
Jxy
=
Z
dxxTy0
− yTx0
, τxy
=
X
k
x(k)
F(k)
y − y(k)
F(k)
x
32
Kevin Zhou Physics Olympiad Handouts
where the index k sums over the four forces, and the Ti0 stand for the density of momentum
in the i direction. From this point on, the solution proceeds as above.
There is something a bit strange here, though. In the lever’s rest frame, the angular momen-
tum is zero, so if Jµν were a tensor, it would have to be zero in all frames, but instead it
rises to arbitrarily high values in the other frame. The reason is that when there are external
torques, Jµν isn’t a tensor at all, just like how the four-momentum wasn’t a four-vector in the
solution to problem 17. That’s one of the reasons there’s a controversy: there just doesn’t
exist any definition that has all the nice properties one might want.
33
