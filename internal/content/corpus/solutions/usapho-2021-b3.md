---
id: usapho-2021-b3
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2021-b3
solution_type: official
source_document: solution-document-usapho-2021-s
source_pdf: cache/phoxiv/usapho/2021_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2021_S.pdf."
---

Question B3
The Mad Hatter
A frictionless hemisphere of radius R is fixed on top of a flat cylinder. One end of a spring with
zero relaxed length and spring constant k (i.e. the force from the spring when stretched to length `
is −k`) is fixed to the top of the hemisphere. Its other end is attached to a point mass of mass m.
θ
R
a. The number and nature of the equilibrium points on the hemisphere depends on the value of
the spring constant k. Consider the semicircular arc shown above as a dashed line, which is
parameterized by angles in the range −π/2 ≤ θ ≤ π/2. Make a table indicating the number of
equilibrium points on the arc, and the number that are stable, for each range of k values. A
blank table for your reference is given below. (You may need more or fewer rows than shown.)
Range of k (kmin < k < kmax) # of Equilibria # of Stable Equilibria
0 < k < ?
? < k < ∞
Solution
The spring force attracts the mass toward the top of the hemisphere, whereas the gravita-
tional force tends to pull it away.
For very small k, the spring force is negligible compared to the gravitational force for
|θ| < π/2. For these k values, we only have one unstable equilibrium at the top of the
hemisphere due to the gravitational force being zero there.
For some large enough value of k, the spring force at π/2 exactly compensates for the
gravitational force – this marks the end of the first regime. In this next regime, we still
have an unstable equilibrium at the top of the hemisphere – because the spring force only
compensates for the gravitational force for larger θ. Additionally, we have two equilibria at
0 < |θ?| < π/2. These equilibria must be stable because for θ < θ?, the gravitational force
is stronger than the spring force and forces the mass toward θ?, whereas the opposite holds
for θ > θ?, and the mass is again forced toward θ?. Thus, we have three total equilibria
(two stable, one unstable).
Finally, for sufficiently large k the spring force is stronger than the gravitational force even
for arbitrarily small θ, and so we have just one stable equilibrium point at the top of the
hemisphere in this third regime.
We now compute the two critical points for us to fill out the table. The first critical point
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part B 9
is given by the balancing of the two forces at θ = π/2, so we compute
mg sinπ/2 = k1R(π/2) =⇒ k1 =
2mg
πR
.
The second critical point is given by the balancing of the two forces for θ
 1, so we
compute
mg sinθ ≈ mgθ = k2Rθ =⇒ k2 = mg/R.
We thus get the following table:
Range of k values (kmin < k < kmax) # of Equilibria # of Stable Equilibria
0 < k < 2mg/(πR) 1 0
2mg/(πR) < k < mg/R 3 2
mg/R < k < ∞ 1 1
Notice that the system is symmetric under flipping θ → −θ. Thus, one could incorrectly
guess that the only possible equilibrium point is θ = 0 by symmetry. In fact, when k is in
the right range, we get a pair of new equilibrium points at opposite θ, which map to each
other under symmetry. This kind of situation, where the overall setup is still symmetric
but the individual equilibrium points are not, is called spontaneous symmetry breaking.
For the rest of the problem, suppose the value of k is such that the mass begins at stable equilibrium
on the surface of the hemisphere at angle θ0. The mass can move on the two-dimensional surface
of the hemisphere, but a radially-inward external force prevents it from jumping off the surface.
b. At t = 0, the mass is given a speed v along a line of constant latitude θ = θ0.
θ = θ0
v
i. Indicate which of the following trajectories the mass takes for a short time after t = 0 and
briefly explain your reasoning. The differences between the paths are exaggerated.
θ = θ0 B
A
C
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part B 10
Solution
The correct path is option C. Several explanations would work here. Here are two.
• If we go to the rotating frame of reference, there is an outward centrifugal force that
the mass experiences, pushing it down the sphere.
• For the mass to go in a circle around the sphere, the spring force not only has to
compensate for the gravitational force but also must provide centripetal acceleration.
Therefore, the spring must get longer.
ii. What is the total radial force (i.e., normal to the surface of the hemisphere) on the mass at
t = 0? Express your answer in terms of m, v, R, g, and θ0.
Solution
We draw a free-body diagram. It is helpful to draw the diagram in the noninertial
reference frame that revolves around the central axis of the hemisphere with speed v at
the location of the mass.
FN
mg cosθ0
mg sinθ0
kRθ0
Fc
Here, Fc = mv2
Rsinθ0
is the centrifugal force, and Fr is the radial force from the hemisphere.
The forces in the radial direction must balance for the mass to be constrained to the
surface of the sphere. Thus,
Fr + F⊥
c = mg cosθ0.
The perpendicular part of the centrifugal force is Fc sinθ0. so we get
Fr = mg cosθ0 −
mv2
R
.
Incidentally, there’s a simple way to understand why the second term has to be exactly
mv2/R. Consider decomposing the total force on the mass into radial and tangential
parts. The radial part simply keeps the mass on the hemisphere; in the absence of a
tangential force, the mass would travel in a great circle of radius R. Adding a tangential
force deflects the mass away from this great circle trajectory, but doesn’t change the
radial force required, so the net radial force always has to be mv2/R inward.
Note: The phrase “total radial force” could also validly be interpreted as the net radial
force. Thus, we accepted both mg cosθ0 − mv2/R and −mv2/R.
c. A cylinder of radius r
 Rθ0 is placed on top of the sphere. Suppose the mass is launched at an
angle α away from the direction of the spring’s displacement with kinetic energy K, as shown.
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part B 11
What is the maximum angle αmax at which the mass can be launched such that it can still hit
the cylinder? Express your answer in terms of K, m, g, θ0, r, and R. You may assume K is
large enough for the mass to reach the cylinder for α = 0.
v
α
(view from above)
Solution
The initial energy of the system is given by
mgRcosθ0 +
1
2
kR2
θ2
0 + K.
Suppose the mass is launched with speed v. Then, the speed in the θ direction is v cosα
and the speed in the φ direction is v sinα, and therefore, the z-component of the angular
momentum of the mass is
L = mv sinα(Rsinθ).
We now compute the distance of closest approach. If the distance of closest approach is
equal to r (as it does for αmax, then at r, the motion of the mass has no inward component,
and the speed of the object at r is given by conservation of angular momentum:
mur = mv sinα(Rsinθ) =⇒ u =
v sinα(Rsinθ)
r
.
Because r
 R, at the point of closest approach, the energy of the system is roughly
mgR +
1
2
mu2
≈ mgR +
1
2
mv2 sin2
αR2 sin2
θ
r2
≈ mgR + K
α2R2 sin2
θ
r2
!
.
Equating with the initial energy gives us
mgRcosθ0 +
1
2
kR2
θ2
0 + K = mgR + K
α2R2 sin2
θ
r2
!
.
Before finishing the calculation, we now compute the required k for the object to be at
equilibrium (since our answer cannot contain k). Setting kRθ0 = mg sinθ0 gives us k =
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part B 12
mg sinθ0
Rθ0
. Then,
mgRcosθ0 +
1
2
mgRθ0 sinθ0 + K = mgR + K
α2R2 sin2
θ0
r2
!
.
Solving for α gives us
α =
r
Rsinθ0
r
1 −
mgR(1 − cosθ0) − (1/2)mgRθ0 sinθ0
K
.
Solving for α without using the small angle approximation for α also earned full credit.
(The answer α = π, which is technically also correct, earned partial credit.)
Copyright ©2021 American Association of Physics Teachers
