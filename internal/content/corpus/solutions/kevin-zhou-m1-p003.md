---
id: kevin-zhou-m1-p003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-p003
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

[3] Problem 3. A projectile of mass m is dropped from a height h above the ground. It falls and
bounces elastically, experiencing the same quadratic drag as in problem 2. Find the maximum
height to which it subsequently rises. (Hint: don’t try to use your results from problem 2.)
3
Kevin Zhou Physics Olympiad Handouts
Solution. The reason you shouldn’t try to use the results from problem 2 is that they are in terms
of time. Given how complicated the implicit expressions for v(t) are, the expressions for x(t) would
be extremely clunky. And they’re not necessary, because in this problem we don’t care about the
time-dependence at all; we just want to know the final height.
Another way to say this is that we aren’t interested in v(t), we’re interested in v(x). While
the projectile is moving downward, we can integrate dv/dx to find the speed v0 at the moment it
hits the ground. Then, when it’s moving upward, we integrate dv/dx until it has zero speed again,
which is its final height. This will be a lot simpler than integrating dv/dt.
For the upward and downward trajectories, Newton’s second law says
dv
dt
= −g ± αv2
and multiplying both sides by dt/dx gives
dv
dx
= −
g
v
± αv.
Separating and integrating, on the way down we have
Z 0
h
dx =
Z −v0
0
dv
αv − g/v
=
1
α
Z −v0
0
v dv
v2 − g/α
.
Carrying out the integral and simplifying,
h = −
1
2α
log(1 − αv2
0/g).
Now, on the way up, we have
Z h′
0
dx =
Z 0
v0
dv
−g/v − αv
=
1
α
Z v0
0
v dv
v2 + g/α
and carrying out the integral gives
h′
=
1
2α
log(1 + αv2
0/g).
Combining the two equations gives
h′
=
1
2α
log(2 − e−2αh
)
which you can check has the right limits. Note that g drops out, as required by dimensional analysis.
Remark
How does the top speed v of a rowboat depend on the number N of rowers? A light, fast-
moving rowboat experiences quadratic friction, so that the drag force on it is proportional
to v2A, where A is the submerged cross-sectional area of the boat. A boat designed for N
rowers will have a submerged volume V ∝ N, and a streamlined shape so that A ∝ V 2/3.
Thus, the required power input is
P = Fv ∝ v3
N2/3
.
4
Kevin Zhou Physics Olympiad Handouts
The power output by the rowers scales as N, and combining these results gives the amazingly
weak dependence v ∝ N1/9, which agrees decently with Olympic rowing times. This estimate
is from the fun book 100 Essential Things You Didn’t Know About Sport by Barrow.
Idea 1
An ordinary differential equation is any equation involving a quantity x(t) and its derivatives.
In physics, we are usually concerned with differential equations which are at most second-
order, meaning it can contain x, its first derivative ẋ = v, and its second derivative ẍ = a,
but no higher derivatives. This implies the solution can be determined by an initial position
and initial velocity. (First-order differential equations require only an initial position, and
can often be solved by separation and integration.)
Here we will also focus on the case where the differential equation is also linear and homoge-
neous, meaning that each term is directly proportional to x, ẋ, or ẍ. For example, a damped
driven harmonic oscillator is described by
mẍ = −bẋ − kx.
Solutions to such differential equations obey the superposition principle: if x1(t) and x2(t)
are both solutions, so is c1x1(t) + c2x2(t). The superposition principle still applies if the
coefficients m, b, and k depend on time, but we’ll focus on the time-translation invariant case.
If we added a driving force f(t) to the above equation, the differential equation would no
longer be homogeneous. We’ll discuss this case further in M4.
Idea 2
Linear, homogeneous, time-translation invariant differential equations can all be solved by
one method. First, note that we can promote x(t) to a complex variable x̃(t) and solve the
differential equation over the complex numbers. As long as we have a complex solution, we
can recover a real solution by taking the real part. We then guess a complex exponential
x̃(t) = eiωt
.
Plugging this into the differential equation will yield the allowed values of ω, and the general
solution can be found by superposing the complex exponentials. This works for almost all
such equations; you’ll handle the rest in problem 7.
Example 2
Solve the simple harmonic oscillator, mẍ + kx = 0, using the above principles.
Solution
First, we pass to a complex differential equation,
m¨ x̃ + kx̃ = 0.
5
Kevin Zhou Physics Olympiad Handouts
We guess x̃(t) = eiωt. Plugging this in and using the chain rule gives
m(iω)2
eiωt
+ keiωt
= 0
and canceling eiωt and solving gives two solutions,
ω = ±ω0, ω0 =
p
k/m.
Since this is a second-order linear differential equation, the general solution is given by the
superposition of these two complex exponentials,
x̃(t) = Aeiω0t
+ Be−iω0t
where A and B are general complex numbers. The real part of x̃(t) satisfies the original real
differential equation ma + kx = 0, and is
Rex̃(t) = C cos(ω0t) + Dsin(ω0t)
where C and D are real numbers, i.e. a general sinusoid with angular frequency ω0.
[1] Problem 4. Find C and D in terms of A and B.
Solution. Let A = aA + ibA and B = aB + ibB where ai,bi are real. Applying Euler’s formula,
Rex̃(t) = (aA + aB)cos(ω0t) + (−bA + bB)sin(ω0t)
from which we read off
C = Re(A + B), D = Im(B − A).
[2] Problem 5. Now introduce a damping force and solve the differential equation for the damped
harmonic oscillator, mẍ+bẋ+kx = 0, using the same procedure, assuming b is small. (See section
4.3 of Morin if you have trouble with this. We’ll consider this system in more detail in M4.)
Solution. Guessing an exponential, every time derivative yields a factor of iω, so
m(iω)2
+ b(iω) + k = 0.
Using the quadratic formula,
ω =
−ib ±
√
4km − b2
−2m
.
In other words, we have
ω = ±ωd +
ib
2m
, ωd =
r
k
m
−
b2
4m2
.
The oscillation is slightly slowed down, and the frequency has an imaginary part, corresponding to
exponential decay. The general solution is
x(t) = e−bt/(2m)
(C cos(ωdt) + Dsin(ωdt)).
[3] Problem 6.   m 1 0USAPhO 2012, problem B1.
6
Kevin Zhou Physics Olympiad Handouts
