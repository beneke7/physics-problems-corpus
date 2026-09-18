---
id: kevin-zhou-e4-p021
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e4-p021
solution_type: author
source_document: solution-document-kevin-zhou-e4sol
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E4Sol.pdf."
---

[3] Problem 21. We can use the Galilean field transformations to solve problem 18.
20
Kevin Zhou Physics Olympiad Handouts
(a) In the magnetic limit, show that the Lorentz force stays the same between frames, as it should.
Then use the field transformations to find an appropriate reference frame where the problem
becomes easy.
(b) In the electric limit, show that the Lorentz force stays the same up to terms that are order
(v/c)2 smaller, assuming B/E ∼ v/c2. (This is fine, since we’re taking the limit v/c → 0
anyway.) Then use the field transformations to find an appropriate reference frame where the
problem becomes easy.
(c) You should have found two distinct behaviors in parts (a) and (b). One of them should look
like what you found in problem 18, and the other should be very different. But the values of
E and B in problem 18 were arbitrary, so why didn’t you see the other type of behavior?
Solution. (a) Suppose a particle has velocity u in the original frame, so the force there is
F = q(E + u × B). The force in the boosted frame is F′ = q(E + v × B + (u − v) × B) = F.
We can find a frame where there’s no electric field, by letting E+v×B = 0. In this frame, the
particle just orbits in a circle. (Going back to the original frame just gives back the cycloid
we found earlier.)
(b) We use the same setup as (a). The boosted force is
F′
= q(E + (u − v) × (B − v × E/c2
)) = F + q

−v × B +
v × v × E
c2
−
u × v × E
c2

.
The extra terms are all second order in v/c.
We can now find a frame where there’s no magnetic field, by letting B − v × E/c2 = 0. In
this frame, the particle just accelerates straight along E. This indicates that in the original
frame, the particle is always going along E, while getting deflected a bit to the side by the
magnetic field.
(c) The reason is that the solution to problem 18 neglected relativistic effects. We found in that
problem that the characteristic velocity of the particle during the cycloid motion is v0 = E/B.
So relativity can only be consistently neglected in the magnetic limit, where v0 ≪ c. In the
electric limit, the particle necessarily becomes highly relativistic. This makes a difference
because in relativity, p = γmv > mv, but the magnetic force still is proportional to v, so it’s
harder for the magnetic force to turn the particle around.
As a followup, you might be wondering precisely what value of E/B separates two types
of behavior. It turns out to be precisely E/B = c, because when you use the exact field
transformations in idea 4, you can only transform the electric field away when E < cB, and
you can only transform the magnetic field away when E > cB.
In these two cases, you get circular and linear motion respectively, and the solution in the
original frame follows by boosting back using the Lorentz transformation. When E/B is small,
you get a cycloid solution, and as E/B increases, the trajectory gets more and more stretched
along the direction of E, until it gets infinitely long at E/B = c.
There are a number of other nice questions one can ask about the dynamics of point charges,
which use more advanced concepts such as “hidden” momentum, canonical momentum, or adiabatic
invariants. These ideas are collected in a section of R3.
21
Kevin Zhou Physics Olympiad Handouts
5 Continuous Systems
