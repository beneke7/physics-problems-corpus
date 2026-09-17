---
id: kevin-zhou-p1-p031
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-p1-p031
solution_type: author
source_document: solution-document-kevin-zhou-p1sol
source_pdf: sources/kevin_zhou/site/handouts/P1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/P1Sol.pdf."
---

[5] Problem 31. A particle in a potential well.
(a) Consider a particle of mass m and energy E with potential energy V (x), which performs
periodic motion. Write the period of the motion in terms of a single integral over x.
(b) Suppose the potential well has the form V (x) = V0(x/a)n for even n > 0. If the period of
the motion is T0 when it has amplitude A0, find the period when the amplitude is A, by
considering how the integral you found in part (a) scales with A.
(c) Find a special case where you can check your answer to part (b). (In fact, there are two more
special cases you can check, one which requires negative n and negative V0, and one which
requires V (x) to be replaced with its absolute value.)
(d) Using a similar method to part (a), write down an integral over θ giving the period of a
pendulum with length L in gravity g, without the small angle approximation. Using this,
compute the period of the pendulum with amplitude θ0, up to order θ2
0. (This result was first
published by Bernoulli, in 1749.)
(e) ⋆ Part (d) is the kind of involved computation you might see in a graduate mechanics course.
But if you think you’re really tough, you can go one step further. Consider a mass m oscillating
on a spring of spring constant k with amplitude A. Calculate its period of oscillation up to
order A2, accounting for special relativity. (Concretely, assume that the spring force doesn’t
change the rest mass m, and has a potential U = kx2/2. In relativity, the force F = −dU/dx
still obeys F = dp/dt, but now E = γmc2 and p = γmv, where γ = 1/
p
1 − v2/c2.)
Solution. (a) The statement of conservation of energy is
E =
1
2
mv2
+ V (x), v =
r
2(E − V (x))
m
.
Therefore, the period is
T =
Z
dt =
Z
dt
dx
dx =
Z
dx
p
2(E − V (x))/m
.
37
Kevin Zhou Physics Olympiad Handouts
To be more precise, we should put the bounds of integration back in. If the lowest and highest
values of x are xmin and xmax, then
T = 2
Z xmax
xmin
dx
p
2(E − V (x))/m
where the factor of two is because this is just half of the oscillation.
(b) The particle can perform periodic motion if at x = ±A, v = 0 so V0(A/a)n = E. Thus
T = 2
Z A
−A
dx
p
2(V0(A/a)n − V0(x/a)n)/m
∝
Z A
−A
dx
√
An − xn
By dimensional analysis, the integral (a function of A) is proportional to A1−n/2, so
T = T0

A
A0
1−n/2
Incidentally, you can also do this problem by dimensional analysis directly on the parameters.
At first glance, this is impossible because there are too many dimensionful quantities: E, m, a,
V0, and T, which permit 5−3 = 2 dimensionless groups. (Recall from an earlier problem that
one can usually get a scaling relation only if there’s only 1 dimensionless group.) However, V0
and a only appear in the combination V0/an. So there are only 4 independent dimensionful
parameters, and a standard dimensional analysis yields the same result.
(c) The three analytically tractable examples are:
• For n = 2 we have simple harmonic motion, and indeed here the period is independent
of amplitude. (Incidentally, can you think of any potentials that aren’t simple harmonic,
but also have this property?)
• For n = −1 we have an inverse square force and T ∝ A3/2. This makes sense, because it
matches the form of Kepler’s third law, which gives the general scaling of orbits in inverse
square forces. (Here we’re considering the degenerate case of a straight-line orbit.)
• For n = 1 we have a constant force, which doesn’t yield oscillations. But the scaling
argument of part (b) would still work if we used the potential V (x) = V0|x/a|, which does
have oscillations. In this case we predict T ∝
√
A, which makes sense; it corresponds to
the usual time-dependence ∆x = gt2/2 ∝ t2 of uniformly accelerated motion.
That’s as far as you can go with the functions you learn in high school and college. There are
analytic solutions for other n involving exotic “special functions”. For instance, for n = 4 the
solutions can be written in terms of Jacobi elliptic functions, as you can see here. These days
most people encounter such functions by solving integrals with computer programs.
(d) Conservation of energy states
1
2
Iω2
= mgL(cosθ − cosθ0), I = mL2
which means
T = 4
Z θ0
0
dθ
ω
= 4
Z θ0
0
dθ
p
(2g/L)(cosθ − cosθ0)
.
38
Kevin Zhou Physics Olympiad Handouts
This form is a bit annoying, because the cosines are both extremely close to 1. To fix this
issue, we use the half-angle formula (1 − cosθ)/2 = sin2
(θ/2), to get
T = 2
s
L
g
Z θ0
0
dθ
p
sin2
(θ0/2) − sin2
(θ/2)
.
This newer form still has the problem that as θ0 goes to zero, the integration range goes to
zero while the integrand can get large, making it hard to see how big the result is. To fix this,
change variables from θ to ϕ, where sinϕ = sin(θ/2)/sin(θ0/2), which gives
T = 4
s
L
g
Z π/2
0
dϕ
p
1 − sin2
ϕsin2
(θ0/2)
.
This is the easiest form to handle, because it makes the θ0 → 0 limit obvious, and it makes it
manifest that the first correction is of order θ2
0. To extract that term, we expand the sine to
first order, giving
T = 4
s
L
g
Z π/2
0
dϕ

1 +
θ2
0
8
sin2
ϕ

= 2π
s
L
g

1 +
θ2
0
16

.
There are many other ways to get this, but our route is probably the best if you’re interested
in even higher-order terms. For instance, the coefficient of the θ4
0 term is 11/3072.
(e) This is a taste of the kind of problem you’ll see in R2. It can get quite messy, but it’s not
too bad if you work in the right variables. First, note that since F = −dU/dx, we still have
energy conservation, but with the relativistic energy expression,
γmc2
+
1
2
mω2
0x2
= mc2
+
1
2
mω2
0A2
where ω2
0 = k/m as usual. Solving for γ, we find
γ = 1 +
ω2
0
2c2
(A2
− x2
).
Next, using the definition of γ, we have
T = 4
Z A
0
dx
v
=
4
c
Z A
0
γ
p
γ2 − 1
dx.
At this point we can perform a quick check to make sure we’re on the right track. Note that
in the ultrarelativistic limit, where the spring is so strong that the mass is always moving
at nearly the speed of light, we have γ → ∞, so that the integrand just reduces to 1. Then
T ≈ 4A/c, which is exactly as expected.
Anyway, in this problem we’re considering small relativistic corrections, γ−1 ≪ 1. The easiest
way to make this manifest is to eliminate γ in favor of A, using our result above. There we
found that γ − 1 = O((ω0A/c)2), so we can expand in the small quantity ω0A/c, giving
T =
4
c
Z A
0
c
ω0
1
√
A2 − x2
+
3
8
ω0
c
p
A2 − x2 + O((ω0A/c)4
)dx.
39
Kevin Zhou Physics Olympiad Handouts
The first term simply recovers the nonrelativistic result T = 2π/ω0, and the second term is
straightforward to integrate, yielding
T =
2π
ω0

1 +
3
16
ω2
0A2
c2
+ O((ω0A/c)4
)

.
Since the peak speed v0 is approximately ω0A in the nonrelativistic limit, this result is therefore
accurate up to corrections of order (v0/c)4.
6 Multiple Integrals
It’s also useful to know how to set up multiple integrals. This is fairly straightforward, though
technically an “advanced” topic, so we’ll demonstrate it by example. For further examples, see
chapter 2 of Wang and Ricardo, volume 1, or MIT OCW 18.02, lectures 16, 17, 25, and 26.
Idea 9
In most Olympiad problems, multiple integrals can be reduced to single integrals by symmetry.
Example 17
Calculate the area of a circle of radius R.
Solution
The area A is the integral of dA, i.e. the sum of the infinitesimal areas of pieces we break the
circle into. As a first example, let’s consider using Cartesian coordinates. Then the pieces
will be the rectangular regions centered at (x,y) with sides (dx,dy), which have area dxdy.
The area is thus
A =
Z
dA =
Z
dx
Z
dy.
The only tricky thing about setting up the integral is writing down the bounds. The inner
integral is done first, so its bounds depend on the value of x. Since the boundary of the circle
is x2 + y2 = R2, the bounds are y = ±
√
R2 − x2. Thus we have
A =
Z R
−R
dx
Z √
R2−x2
−
√
R2−x2
dy.
We then just do the integrals one at a time, from the inside out, like regular integrals,
A =
Z R
−R
2
p
R2 − x2 dx = 2R2
Z 1
−1
p
1 − u2 du = 2R2
Z π/2
−π/2
cos2
θdθ = πR2
where we nondimensionalized the integral by letting u = x/R, and then did the trigonometric
substitution u = sinθ. (To do the final integral trivially, notice that the average value of
cos2 θ along any of its periods is 1/2.)
We can also use polar coordinates. We break the circle into regions bounded by radii r and
r + dr, and angles θ and θ + dθ. These regions are rectangular, with side lengths of dr and
40
Kevin Zhou Physics Olympiad Handouts
rdθ, so the area element is dA = rdrdθ. Then we have
A =
Z R
0
rdr
Z 2π
0
dθ = 2π
Z R
0
rdr = πR2
which is quite a bit easier. In fact, it’s so much easier that we didn’t even need to use double
integrals at all. We could have decomposed the circle into a bunch of thin circular shells,
argued that each shell contributed area (2πr)dr, then integrated over them,
A =
Z R
0
2πrdr = πR2
.
In Olympiad physics, there’s usually a method like this, that allows you to get the answer
without explicitly writing down any multiple integrals.
