---
id: kevin-zhou-mrev-p025
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-mrev-p025
solution_type: author
source_document: solution-document-kevin-zhou-mrevsol
source_pdf: sources/kevin_zhou/site/handouts/MRevSol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/MRevSol.pdf."
---

[3] Problem 25. In this problem, you will explore yet another slick derivation of Kepler’s first law. As
usual, suppose the orbit lies in the xy plane. This derivation resolves around writing r(t) = r(t)r̂(θ)
where r̂ = cosθx̂ + sinθŷ, and solving a differential equation for v(θ).
17
Kevin Zhou Physics Olympiad Handouts
(a) Show that dv/dθ is proportional to r̂, times constants and conserved quantities.
(b) Integrate this result to find v(θ). What nice geometric property does it have?
(c) Plug this result into L = r × p to show that r(θ) is a conic section.
Solution. (a) Using the usual variables, we have
dv
dt
= −
GM
r2
r̂, L = mr2 dθ
dt
.
The desired quantity is
dv
dθ
=
dv
dt
dt
dθ
= −
GMm
L
r̂.
(b) Performing a straightforward integration, we find
v(θ) = −
GMm
L
(sinθ + c1,−cosθ + c2)
where c1 and c2 are constants of integration. The nice result is that v(θ) is a circle! That’s
the hidden reason why this derivation will be so quick.
(c) Carrying out the cross product, the magnitude of the angular momentum is
L = −
GMm2r
L
((cosθ)(−cosθ + c2) − (sinθ)(sinθ + c1)).
We can easily solve this to get
1
r
=
GMm2
L2
(1 + c1 sinθ − c2 cosθ).
This can be put into the standard form for a conic section by just shifting θ to get rid of the
sinθ term.
6 Fluids
[2] Problem 26 (BAUPC). Two cylindrical containers, A and B, have the same shape and contain
equal volumes of water. In addition to the water, B contains an immersed balloon, attached to the
bottom with a string. Consider the following reasoning.
The total upward force exerted by the bottom of container A is equal to the weight of
the water in A, likewise for B. Since the areas of the bottoms are the same, and the
weights of the water are the same, the pressures at the bottoms are the same.
Is this reasoning correct or incorrect? Explain your answer.
Solution. The reasoning is incorrect. As usual, the pressure depends only on the depth of the
water, which is greater for container B. The net forces still balance: the greater upward force of the
bottom on the water in container B is compensated for by the downward force of the balloon on
the water.
[4] Problem 27.   T 1 0IPhO 1997, problem 3. A simple, neat question about how a plane works.
18
Kevin Zhou Physics Olympiad Handouts
Remark
As you saw in the above problem, a plane works by having a wing angled so that air passing
next to it gets pushed downward; momentum conservation then implies there is an upward
force on the wing. Concretely, this upward force occurs because there is a higher pressure
on the bottom of the wing, which by Bernoulli’s principle means there must be a higher air
velocity on the top of the wing.
This is all standard knowledge among engineers. However, in outdated or poor physics
textbooks, an incorrect explanation is sometimes given. The story is that because the top
side of the wing is curved, the air at the top of the wing must be moving faster, so that it
can “catch up” to the air at the bottom. Then by Bernoulli’s principle there is a higher
pressure on the bottom of the wing, causing lift.
The second step of this argument is right, but the first step doesn’t make sense: there
is no reason air should want to “catch up” with the air it used to be next to. For
example, airplanes can fly upside down as long as the wing is angled the right way. In this
case, the air at the top of the wing still moves faster, but now it’s the bottom side that’s curved.
There’s much more to say about flight, which is a whole field of study. For some nice further
discussion, see section 4.6 of The Art of Insight, or this paper and this paper by the same
author. And for a perspective from a cantankerous old aerodynamicist, see this talk.
[5] Problem 28. Physics Cup 2023, problem 1.
Solution. See the official solutions here.
