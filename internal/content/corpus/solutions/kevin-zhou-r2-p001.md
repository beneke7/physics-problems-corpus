---
id: kevin-zhou-r2-p001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r2-p001
solution_type: author
source_document: solution-document-kevin-zhou-r2sol
source_pdf: sources/kevin_zhou/site/handouts/R2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R2Sol.pdf."
---

[4] Problem 1. A few useful facts about energy and momentum, for future reference.
(a) Recalling the definition of the four-velocity from R1, show that
(E/c,p) = muµ
where uµ is the four-velocity. Setting c = 1 below, this shows pµ = (E,p) is a four-vector.
(b) Let’s check the Lorentz transformation properties of pµ explicitly. Let S′ be the frame moving
to the right with velocity vx̂ with respect to the frame S. If a particle has velocity ux̂ in
frame S, write E′ and p′ in frame S′ in terms of E and p.
(c) Show that the norm of the four-momentum is
pµ
pµ = E2
− |p|2
= m2
.
This is a very useful result that can simplify the solutions to many problems below, especially
ones that simply ask for a final mass m. In this case one can often compute a single four-
momentum and find its norm to get the answer.
(d) The expressions in idea 1 for E and p don’t work for photons, since γ is infinite and m is zero.
Instead, show that for a photon we have pµ = ℏkµ.
(e) A system’s center of mass frame is the one where its momentum is zero. For a system with
total energy E and momentum p, show that the center of mass has velocity v = p/E.
(f) In Newtonian mechanics, the kinetic energy K of an object with fixed mass m satisfies
dK = v · dp. Show that this also holds in relativity, assuming the rest mass m is fixed.
(g) As we’ll discuss in more detail below, the force three-vector is defined as F = dp/dt in
relativistic mechanics. Show that dK = F · dx, continuing to assume that m is fixed.
1
Kevin Zhou Physics Olympiad Handouts
Solution. (a) We saw in R1 that uµ = (γc,γv). Multiplying by m gives the desired result
muµ
= (γmc,γmv) = (E/c,p).
(b) In the frame S′, the particle has speed (u − v)/(1 − uv), corresponding to Lorentz factor
γ′
=

1 −
(u − v)2
(1 − uv)2
−1/2
= (1 − uv)γuγv.
Thus, the boosted values of E and p are
E′
= γ′
m = γv(E − vp), p′
= γ′
m(u − v)/(1 − uv) = γv(p − vE).
These are exactly the expected Lorentz transformation properties.
(c) We compute the norm E2 − p2 = γ2m2 − γ2m2v2 = γ2m2(1 − v2) = m2.
(d) This follows directly from the de Broglie relations E = ℏω and p = ℏk.
(e) In this frame, p′ = 0. Then using the result of part (b), we have p − vE = 0 where v is the
velocity of the center of mass in the original frame. Therefore, v = p/E.
(f) Starting with E2 = p2 + m2 and taking the differential of both sides,
2E dE = 2p · dp.
Solving for dE, we have
dE =
p
E
· dp = v · dp
where we used part (e). Since K and E are the same up to a constant, we have dK = v · dp.
(g) We have F · dx = (Fdt) · (dx/dt) = v · dp = dK using part (f).
Remark
The result of part (e) is equivalent to saying that momentum p is always associated with the
motion of energy Ev. This is a very general statement, which also holds at the differential
level: momentum density is equal to energy flux density. One example of this was given
in E7, where it was noted that the electromagnetic momentum density p was equal to the
Poynting vector S, in units where c = 1.
Idea 2
In relativistic dynamics problems, it is almost always better to work with energy and mo-
mentum than velocity; one typically shouldn’t even mention velocities unless the problem
asks for or gives them.
We’ll start with some very simple problems to warm up, setting c = 1 throughout.
2
Kevin Zhou Physics Olympiad Handouts
Example 1: KK 13.5
A particle of mass m and speed v collides and sticks to a stationary particle of mass M. Find
the final speed of the composite particle.
Solution
The total four momentum is (E,p) = (γm + M,γmv), so the final speed is
vf =
p
E
=
γmv
γm + M
=
v
1 + (M/m)
√
1 − v2
.
Example 2: Morin 12.2
Two photons of energy E collide at an angle θ and create a particle of mass M. What is M?
Solution
The total four-momentum is
pµ
= (2E,E(1 + cosθ),E sinθ).
The mass is just the norm of the four-momentum, so
M =
q
4E2 − E2(1 + cosθ)2 − E2 sin2
θ = E
√
2 − 2cosθ = 2E sin(θ/2).
[1] Problem 2 (Morin 12.4). A stationary mass MA decays into masses MB and MC. What are the
energies of these two masses?
Solution. In the lab frame, the momenta of the masses B and C adds to zero, so p2
B = p2
C, so
E2
B − M2
B = E2
C − M2
C.
We also know that EB + EC = MA, so simplifying gives
EB − EC =
M2
B − M2
C
MA
.
Therefore, we conclude
EB =
M2
A + M2
B − M2
C
2MA
, EC =
M2
A − M2
B + M2
C
2MA
.
