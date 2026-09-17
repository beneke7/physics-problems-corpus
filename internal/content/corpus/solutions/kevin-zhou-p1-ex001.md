---
id: kevin-zhou-p1-ex001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-ex001
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

Example 1: F = ma 2018 B11
A circle of rope is spinning in outer space with an angular velocity ω0. Transverse waves on
the rope have speed v0, as measured in a rotating reference frame where the rope is at rest.
If the angular velocity of the rope is doubled, what is the new speed of transverse waves?
Solution
To solve this problem by dimensional analysis, we reason about what could possibly affect
the speed of transverse waves. The result could definitely depend on the rope’s length L,
mass per length λ, and angular velocity ω0. It could also depend on the tension, but since
the tension balances the centrifugal force, it is determined by the other quantities. Thus the
quantities we have are
[L] = m, [λ] = kg/m, [ω0] = 1/s.
Since λ is the only thing with dimensions of mass, it can’t affect the speed, because there is
nothing that could cancel out the mass dimension. So the only possible answer is
v0 ∼ Lω0
1
Kevin Zhou Physics Olympiad Handouts
where the ∼ indicates equality up to a dimensionless constant, which cannot be found by
dimensional analysis alone. In practice, the constant usually won’t be too big or too small,
so Lω0 is a decent estimate of v0. But even if it isn’t, the dimensional analysis tells us the
scaling: if ω0 is doubled, the new speed is 2v0.
Example 2
Find the dimensions of the magnetic field.
Solution
To do this, we just think of some simple equation involving B, then solve for its dimensions.
For example, we know that F = q(v × B), so
[B] =
[F]
[q][v]
=
kg · m
s2
1
C
1
m/s
=
kg
C · s
.
[2] Problem 1. Find the dimensions of power, the gravitational constant G, the permittivity of free
space ϵ0, and the ideal gas constant R.
Solution. The dimensions are
[P] =
kgm2
s3
, [G] =
m3
kgs2
, [ϵ0] =
C2
s2
kgm3
, [R] =
J
molK
=
kgm2
molKs2
.
An easy method is to use formulas containing the desired quantity, such as P = Fv, F = GMm/r2,
F = q2/(4πϵ0r2), and PV = nRT, where the dimensions of the other quantities are already known.
[1] Problem 2. Derive Kepler’s third law for circular orbits, using only dimensional analysis. (Why
didn’t people figure out this argument 2000 years ago?)
Solution. The answer should only depend on G, M, and the radius r. By dimensional analysis,
we have the equality of dimensions
[r] = [(GM)1/3
T2/3
]
which implies we must have T2 ∝ r3. But of course, the dimensions of G follow from the inverse
square law for gravity, and you need to know which quantities are allowed in the dimensional analysis
in the first place. In other words, you need the whole structure of Newtonian mechanics to be set
up already to run this argument.
