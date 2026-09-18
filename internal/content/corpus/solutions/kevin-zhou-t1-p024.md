---
id: kevin-zhou-t1-p024
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t1-p024
solution_type: author
source_document: solution-document-kevin-zhou-t1sol
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T1Sol.pdf."
---

[5] Problem 24. In this problem, we consider a simple kinetic theory model for “transport” in a
sparse gas. Two parallel plates are at a distance L from each other. The space between the plates is
filled with a gas of density ρ, with molecule of mass m. Assume that the gas density is low enough
to neglect collisions between gas molecules, and that all radiation effects can be neglected.
28
Kevin Zhou Physics Olympiad Handouts
(a) Suppose the two plates are held at temperatures T + ∆T and T, where ∆T ≪ T. Assume
that when gas molecules bounce from a plate, they instantly obtain the plate’s temperature.
Estimate the heat flux per area P/A (in units of W/m2) between the plates. (This determines
the thermal conductivity, to be defined in T2.)
(b) Suppose the top plate moves with a transverse speed v∥ parallel to itself, while the bottom
plate is still, and mv2
∥ ≪ kBT. Assume that when gas molecules bounce from a plate, they
obtain that plate’s transverse speed. Estimate the force per area F/A on each plate. (This
determines the viscosity, as defined in M7.)
Both the thermal conductivity and viscosity are associated with the transport of conserved quantities
(energy and transverse momentum, respectively) through the gas. Now, above we have neglected
collisions entirely, which is unrealistic for most gases unless they are extremely sparse. However,
it’s possible to get some rough estimates for what happens in the presence of collisions.
(c) Let σ be the cross-sectional area of a gas molecule. Estimate the mean free path d of a gas
molecule.
(d) Our previous analysis held when L ≪ d. Now suppose, more realistically, that L ≫ d.
Estimate P/A and F/A in the steady state. (Hint: consider a set of imaginary planes that
are spaced by a distance d, and consider the heat/momentum flow between pairs of adjacent
planes; for such pairs, collisions can be neglected.)
(e) Suppose a gas molecule begins at the top plate, and both plates have temperature T. Again
assuming that L ≫ d, estimate the typical time it takes before the gas molecule hits the
bottom plate. (Hint: model the position of the particle as a sum of random steps, and recall
the facts about variance in P2.)
For a clear discussion of the ideas of this problem, see sections 7.3 and 7.4 of The Art of Insight.
Solution. (a) The gas molecules have speed v ∼
p
kBT/m, and they hit the plates every time
t ∼ L/v. Each time a plate is hit, an energy ∆E ∼ kB∆T is deposited or taken away. So the
average energy flow rate for one atom is
Patom =
∆E
t
∼
kB∆T
L
r
kBT
m
.
The number of atoms per unit area of the plate is Lρ/m, which gives
P
A
∼ kB∆T
ρ
m
r
kBT
m
.
(b) This is rather similar, except that instead of an energy ∆E deposited every impact, a momen-
tum ∆p∥ = mv∥ is deposited per impact. Then by the exact same logic,
F
A
∼ mv∥
ρ
m
r
kBT
m
.
Notice that the result of this problem depends explicitly on the molecular mass m. This is
very important, because in the early days of kinetic theory, the quantity m canceled out of
almost every calculation. This led people to believe that atoms were unobservable in principle;
29
Kevin Zhou Physics Olympiad Handouts
they were just a fictitious calculational tool used to approximate continuous matter. One of
Einstein’s most famous discoveries was showing that macroscopically observable properties of
Brownian motion did depend on m, hence giving a way to indirectly observe the reality of
atoms; you will do this calculation in XRev.
(c) If a molecule moves a distance x, it’ll sweep out a volume of σx. The number density is ρ/m,
so the molecule should expect ρσx/m collisions. The mean free path d is when you would
expect 1 collision:
d =
m
σρ
.
(d) The results for when collisions can be neglected,
P
A
∼ kBδT
ρ
m
r
kBT
m
F
A
∼ mδv∥
ρ
m
r
kBT
m
can still give us the heat/momentum flow between adjacent planes separated by distance d
(so a total of L/d of these planes). Thus ∆T = L
d δT and v∥ = L
d δv∥. This transfer will be the
same throughout in steady state, and plugging in the previously obtained d = m/σρ yields
P
A
∼
kB∆T
σL
r
kBT
m
F
A
∼
mv∥
σL
r
kBT
m
.
Remarkably, the density ρ has dropped out! This was a surprising early prediction of kinetic
theory, which was confirmed by Maxwell. For higher densities, more molecules are available
to carry energy or momentum, but they can’t go as far before colliding.
(e) The molecule will be moving at velocity v ∼
p
kBT/m, so it takes time t ∼ d/v to go between
planes of separation d. However, after this point the molecule’s velocity will be randomized,
so its next step might go in any direction. This is a description of a random walk.
Each step of time t changes the displacement from the original plate by approximately ±d,
and the steps are independent. Then the standard deviation of the displacement adds in
quadrature, as covered in P2. The typical time to hit is when we get a standard deviation of
order L,
thit ∼

L
d
 2
d
v
∼
L2
d
r
m
kBT
.
[5] Problem 25.   h 1 0EuPhO 2017, problem 2. A nice problem using many of the above ideas.
