---
id: usapho-2021-a1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2021-a1
solution_type: official
source_document: solution-document-usapho-2021-s
source_pdf: cache/phoxiv/usapho/2021_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2021_S.pdf."
---

Question A1
Toffee Pudding
A box of mass m is at rest on a horizontal floor. The coefficients of static and kinetic friction
between the box and the floor are µ0 and µ (less than µ0), respectively. One end of a spring
with spring constant k is attached to the right side of the box, and the spring is initially held at
its relaxed length. The other end of the spring is pulled horizontally to the right with constant
velocity v0. As a result, the box will move in fits and starts. Assume the box does not tip over.
a. Calculate the distance s that the spring is stretched beyond its rest length when the box is just
about to start moving.
Solution
This is when the spring force equals the maximal static friction, ks = µ0mg, so s = µ0mg/k.
b. Let the box start at x = 0, and let t = 0 be the time the box first starts moving. Find the
acceleration of the box in terms of x, t, v0, s, and the other parameters, while the box is moving.
Solution
The net stretching of the spring is s + v0t − x, leading to a rightward force ks. When the
box is moving, it is always moving to the right, so the kinetic friction force µmg is always
in the leftward direction, which means
ma = k(s + v0t − x) − µmg
which means
a =
k
m
(s + v0t − x) − µg.
The position of the box as a function of time t as defined in part (b) is
x(t) =
v0
ω
(ωt − sinωt) + (1 − r)s(1 − cosωt),
where ω =
p
k/m and r = µ/µ0. This expression applies as long as the box is still moving, and
you can use it in the parts below. Express all your answers in terms of v0, ω, s, and r.
c. Find the time t0 when the box stops for the first time.
Solution
Taking the derivative, the velocity of the box is
v = v0(1 − cosωt) + (1 − r)sω sinωt.
The box stops when this is equal to zero for the first time. There are several ways to
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part A 3
evaluate this condition. First, we can use half-angle identities to find
0 = 2v0 sin2 ωt
2
+ 2(1 − r)sω sin
ωt
2
cos
ωt
2
.
As a result, the box stops when
tan
ωt
2
= −
(1 − r)sω
v0
.
Using a basic property of the tangent function,
tan

π −
ωt
2

=
(1 − r)sω
v0
.
Solving for t, we conclude that
t0 =
2π − 2α
ω
, α = tan−1 (1 − r)sω
v0
.
Note that we cancelled a factor of sin ωt/2

, which has a zero at t = 2π/ω. However, this
is a larger time than the one we just found, so it is irrelevant.
Another way to arrive at the answer is to rewrite the original condition as
1 = cosωt − tanαsinωt.
Squaring both sides and using some trigonometric identities gives
tanωt = −
2tanα
1 − tan2 α
.
This can then be further simplified using the tangent half-angle identity, upon which we
recover the same result as above.
d. For what values of r will the spring always be at least as long as its rest length?
Solution
The spring is stretched by ∆` = s + v0t − x. Inserting the solution for x, we have
∆` = rs +
v0
ω
sinωt + (1 − r)scosωt.
The most convenient way to write this is to use the sine addition formula in reverse, getting
∆` = rs +
v0
ω cosα
sin(ωt + α).
The minimum stretch thus occurs when
ωt + α =
3π
2
.
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part A 4
Of course, we should check that this time is before the box stops; comparing with the answer
to part (c) shows that it is. For the spring to always be as long as its rest length, we need
the stretch at this time to be nonnegative,
rs −
v0
ω cosα
≥ 0.
Solving the triangle, we have
cosα =
v0
p
v2
0 + ((1 − r)sω)2
.
Plugging this in and simplifying gives the answer,
r ≥
1
2
1 +

v0
sω
 2
!
.
Note that if v0/sω is too large, then it is impossible to satisfy this condition, since we need
to have r < 1.
e. After the box stops, how long will it stay at rest before starting to move again?
Solution
Using a result we found in part (d), the stretch is
∆` = rs +
v0
ω cosα
sin(ωt0 + α)
when the box stops. Plugging in the value of t0 found in part (c),
∆` = rs +
v0
ω cosα
sin(2π − α) = rs −
v0
ω
tanα = (2r − 1)s.
The box starts to move again when the stretch becomes s, so the time is
s − (2r − 1)s
v0
=
2(1 − r)s
v0
.
The pattern of motion investigated in this problem is known as “stick-slip” and occurs in
many practical contexts.
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part A 5
