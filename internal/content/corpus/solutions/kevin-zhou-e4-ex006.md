---
id: kevin-zhou-e4-ex006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e4-ex006
solution_type: author
source_document: solution-document-kevin-zhou-e4sol
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E4Sol.pdf."
---

Example 6: The Drude Model
Model a conductor as a set of electrons, of charge q, mass m, and number density n, which are
completely free. Assume that in every small time interval dt, each electron has a probability
dt/τ of hitting a lattice ion, which randomizes the direction of its velocity. Under these
assumptions, compute the resistivity of the material.
Solution
First, suppose the electrons have some average momentum ⟨p⟩. In time dt, a fraction dt/τ of
them hit a lattice ion, which gives them zero average final momentum. Then the new average
momentum is (1 − dt/τ)⟨p⟩, which implies the exponential decay
d⟨p⟩
dt
= −
⟨p⟩
τ
.
On the other hand, if there is an applied field, a force term appears on the right,
d⟨p⟩
dt
= −
⟨p⟩
τ
+ qE
since F = dp/dt for each individual electron. In the steady state,
⟨p⟩ = qEτ.
The current density is
J = nq⟨v⟩ =
nq⟨p⟩
m
=
nq2τ
m
E.
Thus, the resistivity in the Drude model is
ρ =
m
nq2τ
.
We can also compute the typical drift velocity,
v =
qEτ
m
=
E
nqρ
.
For realistic values, v is a literal snail’s pace; the electrons always move very slowly. But a
current can get started in a circuit much faster, because when a battery is attached, each
moving electron pushes on the next one along the wire. This wave of motion travels much
faster than the electrons themselves.
Remark: The Drude–Sommerfeld Model
Above we tacitly assumed there was a given probability of collision per unit time, but that’s
not right: when a particle flies through a medium, there is instead a given probability of
collision per unit length it travels. These are equivalent for electrons moving at constant
speed, but intuitively, we would expect electrons to have to accelerate starting from rest after
22
Kevin Zhou Physics Olympiad Handouts
each collision, in which case the two differ. To estimate this quickly, note that if the typical
collision distance is ℓ, the kinetic energy picked up between collisions is mv2/2 ∼ qEℓ, giving
typical speed v ∝
√
E. The analogue of Ohm’s law would then be I ∝
√
V , completely
contrary to observation!
The resolution is that electrons in solids really do effectively move with almost constant speed,
even after collisions. This is a quantum mechanical effect, as explained in X1. The Pauli
exclusion principle implies the electrons in the conductor have to occupy different quantum
states, and the high density of electrons requires most of them to always have extremely high
speeds, on the order of 1% of the speed of light! The drift velocity is merely the tiny amount
by which their velocities are shifted on average.
