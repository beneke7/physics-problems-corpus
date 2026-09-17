---
id: solution-document-spot-2019-s
source: spot
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/spot/2019_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [spot-2019-q1, spot-2019-q2, spot-2019-q3, spot-2019-q4, spot-2019-q5, spot-2019-q6]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/spot/2019_S.pdf."
---

Singapore Physics Olympiad Training (SPOT) - Marker’s report for
2019 selection test
Zhiming Darren TAN
fengjiahai
April 4, 2019
1 Feynman crank
This problem in mechanics is well-discussed in Feynman’s book as an example to build physical intuition.
The key is to realise that each arm can only exert forces parallel to their length because the pivots are
frictionless. This can be proven by taking moments about the pivots.
The other important element to keep clear in your mind is the distinction between velocity and acceleration.
1(a)
F =
mg
2
√
L2 − h2
h
Some failed to notice the constant L introduced in the text of the problem, and left answers in terms of
angles. Some careless mistakes in the trigonometry and algebra were also observed.
1(b)(i)
1
2u
By symmetry, the block will move with half the speed of the wheel.
1(b)(ii) The block accelerates vertically. The vertical velocity is upwards, but the acceleration is downwards.
You can get an intuition about this by thinking about how quickly the (vertical) velocity of the block changes
when the arms are almost horizontal versus when the arms are almost vertical.
Many explanations about the difference in the force were not fully satisfactory, as the link was not made
specifically to acceleration rather than to velocity.
1(b)(iii)
v =
uL
2h
The actual velocity is in the tangential direction, so the expression is most easily obtained by considering
that the horizontal velocity u
2 is a component of the tangential velocity. The angles are a bit tricky, especially
if you do not draw your own diagram. The diagram provided has the angles close to π/4, which can lead to
confusion between sines and cosines.
1(b)(iv)
aradial =
v2
L
=
u2
L
4h2
1Since we know that the actual acceleration is in the vertical direction from 1(b)(ii), this radial acceleration
is a component of the acceleration.
a = aradial
L
h
=
u2
L2
4h3
1(b)(v)
F =
m
2

g −
u2
L2
4h3
 √
L2 − h2
h
Surprisingly many were mixed up about the signs in this last part. The acceleration of the block should be
linked to the resultant force on the block, and the weight of the block is opposite in direction to the upward
force from the arms.
[The original question I had in mind would have gone on to energy considerations, but this was omitted to
keep the test shorter.]
2 Some Puzzles
Some of these problems (parts a and b) were taken with minor adaptations from IPhO 1996 (Norway).
Please refer to the solutions provided if you need further detail.
2(a)
0.5 Ω
Most could handle this question by redrawing the circuit. Some left out the units.
2(b)
C(T) =
4P
aT4
0
T3
Most could handle this question, though many lost marks by leaving the final answer for C(T) in terms of
time t without converting it into temperature T. Some used inverted or otherwise incorrect definitions of
heat capacity.
2(c)
v = 2.82 × 108
m s−1
p = 7.60 × 10−22
kg m s−1
This problem has to be treated relativistically. A common mistake was forgetting to factor in the rest mass
of the electron.
2(d) Most could prove this using conservation of relativistic energy and momentum. There were nice ar-
guments about considering the process from both the laboratory frame and the rest frame of the pion.
Some explanations involving the transverse velocity were not explicit about its invariance under the Lorentz
transformation.
2(e)
I0 =
V0
q
R2 + ωL − 1
ωC
2
Most could do this questions using complex impedance and finding the magnitude of the complex current,
though there were a surprising number who made algebraic mistakes (e.g. wrong signs).
2We expected commentary on the phenomenon of resonance for a series RLC circuit, when ω = 1/
√
LC, and
were pleased to see that some students also discussed limiting behaviour at small and large ω.
3 Some Predictions
These problems were taken with minor adaptations from IPhO 1997 (Canada). Please refer to the solutions
provided if you need further detail.
3(a) √
2f
Most had no difficulties with this. As it is easy to get confused, it is important to know how to derive, from
first principles, the effective spring constants for springs in parallel and in series.
3(b)
4.13P0
The key is to figure out the mechanism to achieve lift, pushing air down to balance the weight. The subtlety
involved is that the velocity of the air pushed down cannot be assumed to be constant, and neither can it
be assumed to scale directly with the linear dimension of the helicopter.
3(c)
1.2352 kg m−3
The argument is subtle. Consider system where V,p,T constant. Assuming an ideal gas, this means that
the number of particles N is the same (conclusion 1). The density is proportional to the mean molar mass
M (conclusion 2), because the number of particles in a fixed volume is the same based on conclusion 1.
We can form an equation based on conclusion 1, and from the information given about the proportion of
water vapour by mass:
M
28.8
= 0.02
M0
18
+ 0.98
M0
28.8
We can form another equation based on conclusion 2:
ρdry
ρmoist
=
M
M0
Plug the first equation into the second to solve.
3(d)
T1 = 288.4 K
The key idea is the balance of power coming from the Sun and being emitted by the Earth. The power from
the Sun varies as 1/r2
, while the power emitted varies as T4
.
4 Classical Hall Effect
This problem was taken with minor adaptations from IPhO 1985 (Yugoslavia). Please refer to the solutions
provided if you need further detail.
4(a)
v = 25 m s−1
3Some were confused about the direction of the current flow, which is parallel to edge a as stated in the
question. The idea is that in the steady-state, there will be some charge build-up to balance the Lorentz
(magnetic) force.
4(b)
Ek =
v
µ
= 3.2 V m−1
E⊥ = vB = 2.5 V m−1
The magnitude is 4.06 V m−1
and the angle is 38° from the edge a.
Some students were confused by the geometry, mixing up a and b and c.
4(c)
∆V = bE⊥ = 0.025 V
4(d)
∆V =
I0B0
nce
sin(ωt)sin(ωt + δ)
(∆V )DC =
1
2
I0B0
nce
cos(δ)
This involved substitution into the same formula as part (c) and then simplifying using the trigonometric
sum-product formulae for addition and subtraction of angles.
sin(ωt + δ) = sin(ωt)cosδ + cos(ωt)sinδ
The term sin(ωt)cos(ωt) will go as 1
2 sin(2ωt), which is purely oscillatory, while the term sin2
(ωt) goes as
1
2(1 − cos(2ωt)), which has a constant term.
The meaning of “DC component” in this case is not the root-mean-square (rms) value. The rms value is
rather the DC-equivalent current that would produce the same heating effect in a resistor.
5 Spinning Ring
This problem was taken with minor adaptations from IPhO 2000 (Great Britain). Please refer to the solutions
provided if you need further detail.
This was a very challenging problem, as there was little guidance. Some students made good progress in
identifying the key pieces of physics involved, and were able to work through the mathematics thereafter.
The problem involves concepts from electromagnetism and also rotational motion. An analysis of the energy
shifted from rotational kinetic energy to resistive heating of the wire would likely be the simplest route to
an answer.
Some students used the result for the torque on a magnetic dipole instead of setting up an integral along
the loop, which would bypass some of the mathematics in considering infinitesimal bits of the loop.
The easiest way to derive the moment of inertia for the ring in this problem was via the perpendicular axis
theorem (which applies only for planar objects!).
Refer to the IPhO solutions (which come in two versions) for details.
46 BKT Transition
You are well advised to read up Wikipedia and other accounts of the BKT transition, including materials
related to the Nobel Prize in Physics 2016, to get a flavour of the physics and mathematics involved. Part
(b) of this question was adapted largely from the discussion here.
6(a)
Q = 2πn , n = 0,±1,±2,...
The basic idea is that the angle must turn through an integer multiple of 2π when it goes back to the starting
point. Some forgot to mention that n = 0 was allowed.
6(b)(i)
~ f =
−y
x2 + y2
x̂ +
x
x2 + y2
ŷ
Apologies for the technical flaw in the question, the inverse tangent is not quite the correct description in
all quadrants.
This function ~ f is actually known as the gradient of θ in the language of vector calculus, but you did not
need to know this to do this question.
Note also that x and y are coordinate variables and so things like dy/dx are zero.
6(b)(ii)
Q = +2π
Apologies for those who tried to get the answer from integration, who probably got zero due to the technical
flaw. This was meant to be answered visually from the pattern.
6(b)(iii) Note that any constant-angle shift in all spins would keep Q unchanged. Examples of accepted
answers would be if all spins are flipped, or if the spins are each rotated by π/2 such that they form a visual
vortex field circulating either clockwise or anti-clockwise.
6(b)(iv)
E = Jπ lnL
The |~ f|2
term is basically 1/r2
in polar coordinates, so we can approximate the square lattice by a circle of
radius roughly L and do the integration in polar coordinates. The lower limit of the radius has to be closer
to 1 rather than 0, since the lattice spacing is finite (and not zero).
6(b)(v)
S = kB lnΩ = 2kB lnL
The idea is that the “vortex centre” can occupy roughly Ω = L2
positions because that is the number of
lattice sites. This is what allows us to crudely estimate the “entropy” associated with having a single vortex
on the lattice.
6(b)(vi)
TC =
Jπ
2kB
The idea is that when the lattice size is large, the lnL term is large. Thus the free energy will flip suddenly
from negative infinity to positive infinity when the temperature T increases from slightly below TC to slightly
above TC. This critical temperature TC marks the transition point between a system with no vortex and a
system with a vortex.
5
