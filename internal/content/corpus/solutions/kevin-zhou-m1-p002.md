---
id: kevin-zhou-m1-p002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m1-p002
solution_type: author
source_document: solution-document-kevin-zhou-m1sol
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M1Sol.pdf."
---

[3] Problem 2. Now assume quadratic drag, F = −αmv2, which applies for fast-moving projectiles.
(a) Integrate Newton’s second law to get an implicit equation for v(t) with the same initial
conditions as above. That is, you don’t need to solve for v(t), as it’ll just make things messy.
(b) Your equation will only be valid when the projectile is going up; explain why.
(c) Find v(t) for an object released from rest at time t = 0. (Hint: if needed, look up some standard
integrals involving hyperbolic trigonometric functions. But don’t worry about memorizing
the results, since in competitions, any nontrivial integral needed will usually be given to you.)
(d) Integrate your answer to part (c) with respect to time to find y(t), and verify that the answer
makes sense at both small and large times.
Some people only call this quadratic case drag; they call the linear case viscous resistance. This is
because they behave fundamentally differently at the microscopic level, as we will explore in M7.
Solution. (a) Newton’s second law is
dv
dt
= −g − αv2
.
By the same reasoning as before, we find
Z v(t)
v0
dv′
g + αv′2
= −
Z t
0
dt′
= −t.
By nondimensionalizing the integral as described in P1, the left-hand side is
−t =
1
√
αg
Z v(t)
√
α/g
v0
√
α/g
dx
1 + x2
=
1
√
αg

tan−1

v(t)
r
α
g

− tan−1

v0
r
α
g

where I pulled out a factor of 1/
√
αg to get the right overall dimensions, then used dimensional
analysis again to convert the integration bounds to dimensionless numbers. (You can also do
this by ordinary u-substitution if you prefer.) This is essentially the final result. It can be
solved for v(t), but that just makes it look worse.
2
Kevin Zhou Physics Olympiad Handouts
(b) The reason the equation only makes sense when the projectile is going up is that the force
should always oppose the direction of motion, so we really wanted to solve F = −mα|v|v.
Equivalently, the sign of α changes when the direction of the velocity changes. This means
our solution really should have two separate cases.
(c) By the same reasoning, we have
Z v(t)
0
dv′
g − αv′2
= −t
where the changes are the initial condition and the sign of α. The left-hand side is
1
√
αg
Z v(t)
√
α/g
0
dx
1 − x2
=
1
√
αg

tanh−1

v(t)
r
α
g

.
If you don’t know this hyperbolic trig integral, you could also derive it by expanding 1/(1−x2)
in partial fractions and integrating each term. You will get a bunch of logarithms, which is
equivalent to the hyperbolic tangent. However, if you don’t know what the hyperbolic tangent
is, you should look it up now, because such functions will be useful later!
Because of the simpler initial condition, we can get an explicit solution,
v(t) = −
r
g
α
tanh(
√
αg t).
The speed approaches
p
g/α with a timescale 1/
√
αg, a fact we could also have deduced by
physical intuition and dimensional analysis. Actually, another way to arrive at this result is
by just substituting α → −α in the answer for part (a)! This will produce the tangent of an
imaginary number, which is in fact how the hyperbolic tangent is defined.
(d) Integrating with respect to time gives
y(t) = −
1
α
log(cosh(
√
αg t)).
In the large t limit, the cosh grows exponentially, so that
y(t) ≈ −
1
α
√
αg t = −
r
g
α
t
which is just motion at the terminal velocity. In the small t limit, we can approximate
y(t) ≈ −
1
α
log

e
√
αg t + e−
√
αg t
2

≈ −
1
α
log 1 + αgt2
/2

≈ −
gt2
2
as expected, as drag is negligible in this regime. And of course, when we say that t is large or
small, we really mean that
√
αg t ≫ 1 or
√
αg t ≪ 1 respectively.
