---
id: kevin-zhou-m1-p008
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-p008
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

[3] Problem 8. [A] Some linear, homogeneous, non-time-translation-invariant differential equations
can be solved by simply guessing a power series. For this problem, don’t worry about dimensional
analysis; assume all variables have already been redefined to be dimensionless.
8
Kevin Zhou Physics Olympiad Handouts
(a) As a warmup, consider the differential equation ẋ = kx for constant k, which we already know
how to solve. By plugging in the ansatz
x(t) =
∞ X
n=0
antn
with unknown constant coefficients an, find the solution with x(0) = 1.
(b) Now consider the non-time-translation-invariant differential equation
t2
ẍ + tẋ + t2
x = 0
which is called Bessel’s differential equation of order zero. By using the same ansatz, find the
unique solution with x(0) = 1 and ẋ(0) = 0.
Solution. (a) Plugging the ansatz in gives
∞ X
n=0
nantn−1
= k
∞ X
n=0
antn
.
Shifting the sum on the left-hand side, we have
∞ X
n=0
(kan − (n + 1)an+1)tn
= 0.
For this quantity to be zero for all t, each term in the sum must individually be zero, so
an+1 =
k
n + 1
an.
The initial condition x(0) = 1 tells us that a0 = 1, from which we conclude
a1 = k, a2 =
k2
2
, a3 =
k3
6
,...
or more generally,
x(t) =
∞ X
n=0
kn
n!
tn
= ekt
which is just as expected.
(b) Plugging the ansatz in gives
∞ X
n=0
n(n − 1)antn
+ nantn
+ antn+2

= 0.
Simplifying and shifting the sum as in part (a) gives
∞ X
n=0
n2
antn
+
∞ X
n=2
an−2tn
= 0.
The n = 0 equation is automatic, while the n = 1 equation gives a1 = 0, consistent with the
initial condition ẋ(0) = 0. For n ≥ 2, we have the recursion relation an = −an−2/n2. The
9
Kevin Zhou Physics Olympiad Handouts
remaining initial condition gives a0 = 1, from which we conclude the a2n+1 are all zero. We
then have
a2 = −
1
22
, a4 =
1
2242
, a6 = −
1
224262
,...
from which we conclude
x(t) =
∞ X
m=0
(−1)m
(m!)2

t
2
2m
.
This function is known as the Bessel function of the first kind, of zeroth order, J0(t).
2 Tricks
In this section we’ll consider some kinematics problems that require cleverness, not computation.
Idea 3
Many problems can be solved by a clever choice of reference frame. It is often useful to go to
the frame moving with one of the objects in the problem, or to go into a frame that makes
the motion in the problem more symmetric. For the purposes of kinematics it can even be
useful to use noninertial reference frames, such as a falling frame where projectiles don’t
accelerate, or a rotating frame, though this will introduce fictitious forces into the dynamics.
It is also useful to tilt the coordinate axes to be parallel to various objects.
