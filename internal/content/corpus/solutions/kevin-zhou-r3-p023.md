---
id: kevin-zhou-r3-p023
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-r3-p023
solution_type: author
source_document: solution-document-kevin-zhou-r3sol
source_pdf: sources/kevin_zhou/site/handouts/R3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/R3Sol.pdf."
---

[3] Problem 23. In this problem we consider the effects of relativity on a clock on the surface of the
Earth, which has mass M and radius R. It rotates about its axis in time T, as measured by an
observer at infinity who is at rest relative to the center of the planet.
(a) Consider a clock C that lies on the surface of the planet at a point on the equator. Compute
the time measured by the clock C after a single rotation of the planet, incorporating both
the ordinary time dilation effect in special relativity, and the additional effect of gravitational
time dilation. Which effect is bigger?
(b) Repeat part (a) for a clock C′ on a satellite orbiting the planet, in a circular orbit a height h
above the equator.
(c) Using the numbers M = 5.97 × 1024 kg, R = 6.4 × 106 m, and h = 2 × 107 m, estimate the
difference in time elapsed per day for the two clocks, counting only time dilation in special
relativity, or only the effect of gravitational time dilation.
This paper explains how the Global Positioning System accounts for both of these effects to work.
Solution. (a) The clock C always has speed v = 2πR/T, so if we only counted the time dilation
of special relativity,
TC = T
p
1 − (2πR/cT)2 ≈ T 1 −
1
2

2πR
cT
2
!
.
It is also at a lower gravitational potential than a clock at infinity, so counting only gravitational
time dilation,
TC = T 1 + ∆ϕ/c2

= T 1 − GM/Rc2

.
In reality both effects occur, and at leading order they just add, giving
TC = T
p
1 − (2πR/cT)2 1 + ∆ϕ/c2

≈ T 1 −
1
2

2πR
cT
2
−
GM
Rc2
!
.
The two effects are equal when v2 = 2GM/R, which describes escape velocity. Since the Earth
is rotating a lot slower than that, the gravitational time dilation effect is much larger.
(b) The clock C′ has speed v =
p
GM/(R + h) and potential ∆ϕ = −GM/(R + h), so
TC′ ≈ T

1 −
1
2
GM
(R + h)c2
−
GM
(R + h)c2

.
The gravitational time dilation effect is still larger, but only by a factor of 2.
(c) Plugging in the numbers, we have

2πR
cT
2
= 2.4 × 10−12
,
GM
Rc2
= 7.0 × 10−10
,
GM
(R + h)c2
= 1.7 × 10−10
.
23
Kevin Zhou Physics Olympiad Handouts
If we just consider the special relativistic time dilation effect, the time difference per day is
T
2
GM
(R + h)c2
−

2πR
cT
2
!
= 7µs.
If we consider just gravitational time dilation, the time difference per day is
T

GM
(R + h)c2
−
GM
Rc2

= −46µs.
So at this height, the gravitational effect dominates. This graphic gives a neat overview of
how the two effects vary as a function of height, and how they’ve been tested.
[4] Problem 24. @ 1 0IPhO 1995, problem 1. A straightforward problem on gravitational redshift.
Solution. See the official solutions, but note that there’s a numeric mistake in the very last subpart.
They should have written m0c2 = 3.752 × 109 eV and ∆f/f0 = 5.44 × 10−9.
[5] Problem 25.  h 1 0APhO 2014, problem 3. Gravitational lensing from the bending of light. Print
out the official answer sheets and record your answers on them.
[3] Problem 26. @ 1 0IPhO 2023, problem 2, parts C.1 through C.4. A neat problem on how the
Shapiro delay, a classic test of general relativity, can be used to measure neutron star masses.
Remark: Visualizing Relativity
You’ve probably heard that in general relativity, gravity is explained by the curvature of
spacetime. In other words, freely falling objects always move in straight lines through
spacetime; they only look like they’re accelerating downward because we are constantly being
accelerated upward. This is nicely illustrated here and explained in greater detail in this paper.
There is a common analogy for this involving picturing space as a distorted rubber sheet.
It’s a very bad analogy, because things will only accelerate towards the valleys in the sheets
if you have gravity pointing down the sheet. In other words, the analogy tries to explain
gravity by assuming you have spatial curvature and gravity. This misses the beautiful
key point of relativity, which is that the gravity can be explained by spacetime curvature alone.
The fact that freely falling objects move in straight lines means that an object sitting
on the surface of the Earth is actually being constantly accelerated. But this leads to a
common followup question: in this picture, the surfaces of America and India are constantly
accelerated in opposite directions, so why doesn’t the Earth tear itself apart? Indeed, in
special relativity this would make no sense. It’s only possible because of spacetime curvature.
This can be explained with a spatial curvature analogy. Consider two people walking
east, side by side, with one just north of the equator and the other south. In order to
stay a constant distance apart, the person walking on the north will constantly have to
bear to the left, while the person walking on the south will have to bear to the right,
because the Earth’s surface is spatially curved. Similarly, in a situation with spacetime cur-
vature, America and India need constant opposite accelerations to maintain the same distance.
24
Kevin Zhou Physics Olympiad Handouts
There’s a neat way to visualize this situation called the “river model”, which was rediscovered
and animated here. The basic idea is that we think of space as a river that is constantly
flowing towards the center of the Earth. Observers in America and India constantly need to
paddle in opposite directions against the river to stay in place. This is also a good way to think
about the event horizon of a black hole, which is where the river starts to flow faster than light.
I’ve mentioned three analogies about spacetime, so which of them is “correct”? None, really.
The analogies don’t tell us what spacetime is; they’re just different ways of talking about
the equations of general relativity. They each describe some aspects of the equations, while
failing to capture others. (Any analogy must fail to capture the full content of a theory,
because if it really were simpler and equivalent, that analogy would be the theory instead!)
In practice, you simply deploy each one whenever it’s valid and helpful.
25
