---
id: kevin-zhou-m4-p012
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-p012
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

[5] Problem 12. A uniform spring of spring constant k and total mass m is attached to the wall, and
the other end is attached to a mass M.
(a) Show that when m ≪ M, the oscillation’s angular frequency is approximately
ω =
s
k
M + m/3
.
(b) [A] ⋆ Generalize part (a) to arbitrary values of m/M. (Hint: to begin, approximate the
massive spring as a finite combination of smaller massless springs and point masses, as in the
example in M2. It will not be possible to solve for ω in closed form, but you can get a compact
implicit expression for it. Check that it reduces to the result of part (a) for small m/M, and
interpret the results for large m/M. This is a challenging problem that requires almost all
the techniques we’ve seen so far; you might want to return to it after doing section 4.)
11
Kevin Zhou Physics Olympiad Handouts
Solution. In the m ≪ M case, we can assume the velocity of a piece of spring that is at position
a fraction x of the total length is proportional to x. (More precisely, accounting for nonlinear
stretching of the spring would contribute at higher order.) Therefore, the total kinetic energy of the
spring is Z 1
0
1
2
(xv0)2
mdx =
1
6
mv2
0
where v0 is the velocity of M, and L is the current length of the spring. Therefore, the total kinetic
energy is 1
2(M +m/3)v2
0, so we have an effective mass of M +m/3. The spring is uniformly stretched
at this order, so the effective spring constant is still k, giving the desired result.
Part (b) is a nice exercise in dealing with continuous systems. First, as usual, we break the
spring into pieces. Suppose the spring is made of N masses connected with small springs, and let
their displacements from equilibrium be xi. Each piece has mass m/N and each small spring has
spring constant kN, as established in an earlier problem. The equation of motion for each mass is
m
N
ẍi = Nk(xi−1 + xi+1 − 2xi).
We define x0 = 0 and let xN be the displacement of the mass M. Then its equation is different,
MẍN = Nk(xN−1 − xN).
The spring is really continuous, so we would like to take the limit N → ∞. To this end, define the
displacement function x(s,t) to be the continuous function with values
x(i/N,t) = xi(t).
The argument s ranges from 0 at the left end of the spring to 1 at the right end. We’ll suppress
the t argument for brevity. Plugging this into the second equation above gives
Mẍ(1) = Nk(x(1 − 1/N) − x(1)) = k
x(1 − 1/N) − x(1)
1/N
.
Upon taking the limit N → ∞, the fraction on the right becomes a derivative, giving
Mẍ(1) = −kx′
(1)
where a prime denotes a derivative with respect to s. Similarly, in the N → ∞ limit, the quantity
N2(xi−1 + xi+1 − 2xi) becomes a second derivative (check this!), so our first equation becomes
mẍ(i/N) = kx′′
(i/N).
Rearranging a bit and defining ω0 =
p
k/M, we have shown that
m
M
ẍ(s)
ω2
0
= x′′
(s),
ẍ(1)
ω2
0
= −x′
(1).
Since we are looking for solutions where the whole spring oscillates uniformly with angular frequency
ω, we plug in the displacement x(s) = cos(ωt)f(s) for
m
M
ω2
ω2
0
f = −f′′
,
ω2
ω2
0
f(1) = f′
(1).
12
Kevin Zhou Physics Olympiad Handouts
Defining α =
p
m/M for simplicity, solving the first equation gives
f(s) ∝ sin(αωs/ω0)
which yields the expected nonlinear stretching of the spring. The second equation says
ω2
ω2
0
sin(αω/ω0) =
αω
ω0
cos(αω/ω0)
or alternatively
tan(αω/ω0) =
αω0
ω
.
This is equivalent to
tan
ω
p
k/m
!
=
√
km
Mω
.
There are generically infinitely many solutions for ω, which correspond to the infinitely many
normal modes of the spring. However, we’re concerned with the lowest-frequency mode. This is the
unique mode with αω/ω0 < π/2 where all the pieces of the spring are going in the same direction
at the same time; it is the fundamental frequency.
The transcendental equation we have here has no closed form solution, but we can approximate
it. For small α, if we Taylor expand the tangent to third order we recover the answer to the previous
problem. To see this, define ω = ω/ω0 and note that
αω +
(αω)3
3
=
α
ω
which can be simplified to
α2
3
ω4
+ ω2
− 1 = 0.
If we parametrize the frequency shift by ω2 = 1 + ϵ, then plugging in gives
α2
3
+ ϵ + (higher order terms) = 0
which tells us that
ϵ = −
α2
3
= −
m
3M
which is the same result found in part (a), to first order.
For large α, the right-hand side is large, so the tangent must be large. The lowest frequency mode
has αω ≈ π/2. In this case it’s also useful to look at all the modes, which have αω ≈ (n+1/2)π, so
ω ≈

n +
1
2

π
p
k/m.
To understand this, note that in this limit the mass M doesn’t matter; the spring acts as if it has a
free end. Hence we’ve just found the standing wave angular frequencies for longitudinal waves with
one fixed and one free end! The lowest frequency is the fundamental.
Jumping ahead a bit, we can compare this with some results from W1. The wavenumbers for
these boundary conditions are
kn =

n +
1
2

π
13
Kevin Zhou Physics Olympiad Handouts
and the wave velocity is
v =
s
Y
ρ
where Y is the Young’s modulus, and ρ is the mass density. (If this isn’t familiar, you can also
derive it using dimensional analysis.) But this wave velocity can also be written as
v =
s
kL/A
m/LA
= L
r
k
m
.
Putting these two together using ωn = vkn recovers exactly the angular frequencies we found above!
In other words, we have derived that the speed of sound is v =
p
Y/ρ.
[2] Problem 13 (PPP 77). A small bob of mass m is attached to two light, unstretched, identical
springs. The springs are anchored at their far ends and arranged along a straight line. If the bob is
displaced in a direction perpendicular to the line of the springs by a small length ℓ, the period of
oscillation of the bob is T. Find the period if the bob is displaced by length 2ℓ.
Solution. Suppose the bob is displaced by x in the perpendicular direction. Then the springs are
angled by θ ≈ x/L to their original direction, so their change in length is ∆L = L(1/cosθ − 1) ≈
Lθ2/2 ∝ x2. The potential energy is then
V (x) ∝ (∆L)2
∝ x4
so the motion is not simple harmonic. To finish, as in P1, we can write the period as
T =
Z
dx
v
∝
Z
dx
p
E − V (x)
∝
Z ℓ
0
dx
√
ℓ4 − x4
.
This integral has units of inverse length, so we must have T ∝ 1/ℓ, so the final answer is T/2.
[3] Problem 14.   W 1 0USAPhO 2015, problem A3.
[3] Problem 15.   m 1 0USAPhO 2008, problem B1.
Example 6
About how accurately can you measure g with a simple pendulum?
Solution
This simple question illustrates how rich experimental physics can be, even in elementary
settings. First, let’s think about the uncertainties in the pendulum’s length and period.
• Length: a reasonable length for an experiment is L ∼ 1m. We should use a wire, not a
string, to avoid stretching. If you measure the wire with a good ruler, you can get down
to ∆L ∼ 1mm. If you use calipers, you can get ∆L ∼ 0.1mm. Assuming the latter gives
a fractional uncertainty ∆L/L ∼ 10−4.
• Period: if the length is a meter, the period will be T ≃ 2s. (This isn’t a total coincidence!
14
Kevin Zhou Physics Olympiad Handouts
17th century scientists proposed to define the standard unit of length precisely so this
would be true.) One might estimate the timing uncertainty to be given by human reaction
speed, ∆T ∼ 250ms, but this is too pessimistic, because you can see the pendulum
coming. An extensive study of manual timing at swimming competitions found a typical
spread ∆T ∼ 70ms. Moreover, since a pendulum’s motion is regular, you can “lock in”
with your sense of rhythm to do even better than this. Finally, we can let the pendulum
swing for N = 100 consecutive periods and measure the total time. These improvements
allow a timing uncertainty ∆T/(NT) ∼ 10−4.
Combining these results with the error propagation rules of P2, we can estimate ∆g/g ∼ 10−4
for a well-performed experiment. But any real experiment also has to contend with systematic
effects which can bias the results. Let’s consider and estimate a couple of them.
• The bob has finite size, so the pendulum is really a physical pendulum. We can estimate
the size of this effect by thinking about how much the bob’s size changes the pendulum’s
moment of inertia. If the bob has radius r ∼ 1cm, the change is roughly r2/L2 ∼ 10−4.
• The wire isn’t massless, so the effective length of the pendulum is less than L. If we use
a lead bob whose mass is a few kilograms, and the wire is a thin steel wire whose mass
is a few grams, the effect is roughly mwire/mbob ∼ 10−3.
• The motion has finite amplitude θ0. As we saw in P1, this changes the period fractionally
by θ2
0/16, and for an amplitude of a few degrees this is ∼ 10−3.
• The pendulum oscillates in air. This leads to two distinct effects: the buoyant force on
the bob decreases the effective value of g, and the “added mass” effect, discussed in the
solution to problem 2, increases the bob’s effective inertia. These effects shift the period in
the same direction, and they are both of order ρair/ρbob ∼ (1kg/m3)/(104 kg/m3) ∼ 10−4.
• The Earth is rotating, leading to centrifugal and Coriolis forces. The latter turns out to be
unimportant; as shown in M6, it rotates the pendulum’s plane of oscillation, rather than
shifting its period. Unless you’re conducting the experiment in Greenland or Antarctica,
the centrifugal force produces a shift of order ω2
ERE/g ∼ 10−3.
• The pendulum’s motion is slightly damped, which lengthens the oscillation period. This
factor depends on how frictionless the support is. However, if it was set up so that 100
consecutive periods can be measured, one must have quality factor Q ≳ 103. One can
show that the fractional shift in frequency is ∼ 1/Q2 ∼ 10−6.
There are plenty of other factors, but these are the most important ones, and a few of them
are larger than the uncertainty from the length and period. But the good thing is that all of
them can be calculated, and thereby subtracted out, leading to an ultimate final precision of
∆g/g ∼ 10−4. That is indeed the best precision achieved during the 1800s, through extensive
effort. For real measurements and further details, see this paper.
15
Kevin Zhou Physics Olympiad Handouts
3 Damped and Driven Oscillations
We now review damped oscillators, which we saw in M1, and consider driven oscillators. For more
guidance, see sections 4.3 and 4.4 of Morin.
