---
id: usapho-2010-b1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2010-b1
solution_type: official
source_document: solution-document-usapho-2010-s
source_pdf: cache/phoxiv/usapho/2010_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2010_S.pdf."
---

Question B1
A thin plank of mass M and length L rotates about a pivot at its center. A block of mass m
 M
slides on the top of the plank. The system moves without friction. Initially, the plank makes an
angle θ0 with the horizontal, the block is at the upper end of the plank, and the system is at rest.
Throughout the problem you may assume that θ
 1, and that the physical dimensions of the
block are much, much smaller than the length of the plank.
x
L/2
Let x be the displacement of the block along the plank, as measured from the pivot, and let θ
be the angle between the plank and the horizontal. You may assume that centripetal acceleration
of the block is negligible compared with the linear acceleration of the block up and down the plank.
a. For a certain value of θ0, x = kθ throughout the motion, where k is a constant. What is this
value of θ0? Express your answer in terms of M, m, and any fundamental constants that you
require.
b. Given that θ0 takes this special value, what is the period of oscillation of the system? Express
your answer in terms of M, m, and any fundamental constants that you require.
c. Determine the maximum value of the ratio between the centripetal acceleration of the block
and the linear acceleration of the block along the plank, writing your answer in terms of m
and M, therefore justifying our approximation.
Solution
a. The moment of inertia of the plank about its pivot is
I =
1
12
ML2
and it is acceptable to simply write this down. The magnitude of the torque on the plank is
τ = mgxcosθ ≈ mgx
so the angular acceleration is
α = −
mg
I
x.
Copyright c 2010 American Association of Physics Teachers
2010 Semifinal Exam Part B 10
We may neglect the rotational inertia of the block, since m
 M. Next, the linear acceleration
of the block is
a = −g sinθ ≈ −gθ.
It looks like we’ve derived two copies of the simple harmonic oscillator equation. However,
the position of the block determines the linear restoring force for the plank, while the angular
position of the plank determines the linear restoring force for the board. Hence the general
solution will not look anything like simple harmonic motion; instead the block will most likely
fall off the plank. The block and plank will only oscillate together for one special value of θ0.
To find this special value, suppose x = kθ throughout. Then
k =
L
2θ0
.
Differentiating, we have a = kα. Using these to eliminate x and a above, we have
α = −
g
k
θ, α = −
mgk
I
θ.
This is only self-consistent if the coefficients are equal, so
g
k
=
mgk
I
⇒ θ0 =
r
3m
M
.
b. Referring to one of our previous equations,
ω2
=
g
k
=
2g
L
r
3m
M
and the period of the motion is
T =
2π
ω
.
One can trivially simplify to get an explicit expression for T, though this isn’t necessary.
c. The centripetal acceleration is
ac = x

dθ
dt
 2
= xθ2
0ω2
sin2
ωt.
Now a = −xω2, so the ratio is
ac
a
= θ2
0 sin2
ωt ≤ θ2
0 =
3m
M
which is indeed always small. If we did account for the centripetal acceleration, then there still
would be a value for θ0 where the block and plank oscillate together, but the motion would
not be precisely simple harmonic, and the equations would be too complicated to solve.
Copyright c 2010 American Association of Physics Teachers
2010 Semifinal Exam Part B 11
