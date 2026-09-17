---
id: kevin-zhou-t3-p015
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-t3-p015
solution_type: author
source_document: solution-document-kevin-zhou-t3sol
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/T3Sol.pdf."
---

[4] Problem 15. [A] Here we’ll introduce a simple model fora ferromagnetic phase transition. Consider
N electrons, which may have spins si = ±1. The energy of a configuration is
E = −B
X
i
si −
J
2N
X
i̸=j
sisj.
The first term represents the effect of an external magnetic field B, while the second term represents
an interaction, with strength described by the constant J, which tries to make the spins parallel.
(In this simple model, we suppose all distinct pairs of spins interact equally. We could also make
spins only interact with their neighbors, but this would complicate the analysis.)
(a) Define the average magnetization as m =
P
i si/N. Find E(m), the energy in terms of m and
the other constants in the problem.
(b) For a fixed value of m, write down the number of states Ω(m) with that magnetization.
(c) The probability of having a given value of m is proportional to e−βE(m)Ω(m). Argue that this
probability is maximized for the value of m that minimizes the free energy
F = E − TS.
Hence the equilibrium configuration minimizes the free energy. This is the statistical mechan-
ical way to argue that F is minimized; the thermodynamic way was covered in T2.
(d) Assuming that N ≫ 1 and using the approximation for logN! mentioned in T2, show that
the free energy F(m) is minimized when
m = tanh(βB + βJm), β =
1
kBT
.
For a fixed B > 0, plot m(T). This should match with Curie’s law, which you proved in T1.
(e) For B = 0, show there exists a critical temperature Tc, above which m(T) is zero and below
which it is nonzero. Also, find an approximate expression for the magnetization just below Tc.
(f) For T = Tc, find an approximate expression for m for small B.
This is a phase transition where the material spontaneously becomes magnetized, and the simplest
example of a phase transition which can be understood analytically. Though the results in (e) and
(f) depend on the detailed parameters, the scalings found in these parts are universal, in the sense
that they also apply to a wide variety of similar models.
17
Kevin Zhou Physics Olympiad Handouts
Solution. (a) The first term is easy,
−B
X
i
si = −NmB.
To do the second term, we note that
X
i̸=j
sisj =
X
i
X
j
sisj −
X
i
sisi =
X
i
si
!2
−
X
i
s2
i = N2
m2
− N.
We hence have
E = −NmB −
1
2
JNm2
+
1
2
J.
(b) Of all N electrons, N+ have si = +1 and N− have si = −1, where N+ + N− = N and
mN = N+ −N−. Thus N+ = N/2+mN/2 and N− = N/2−mN/2. The number of states is
N choose N+.
Ω(m) =
N!
N
2 (1 + m)

! N
2 (1 − m)

!
.
(c) The probability P(m) = e−βE(m)Ω(m) is found with Boltzmann’s theorem, where each state
has a probability of e−E/kBT , so β = 1/kBT. Maximizing P(m) is the same as maximizing
log(P(m)), which gives
log(P(m)) = −
E
kBT
+ log(Ω(m)).
Since we’re optimizing with respect to m, we can multiply both sides by −kBT and maximize
P(m) by minimizing −kBT log(P(m)).
−kBT log(P(m)) = E − TkB log(Ω(m)) = E − TS.
This is just the expression for free energy, thus minimizing free energy for a given value of m
will maximize the probability.
(d) Using logN! ≈ N logN − N gives
log
N!
N
2 (1 + m)

! N
2 (1 − m)

!
!
≈ N logN−
N
2
(1+m)log
N(1 + m)
2
−
N
2
(1−m)log
N(1 − m)
2
.
To simplify this, we can expand the logarithms to get
N

logN −
1 + m
2

logN + log
1 + m
2

−
1 − m
2

logN + log
1 − m
2

and various factors cancel to give
−N

1 + m
2
log
1 + m
2
+
1 − m
2
log
1 − m
2

.
Setting dF/dm to zero gives
0 = −NB − NJm − T
∂S
∂m
18
Kevin Zhou Physics Olympiad Handouts
which is equivalent to
N(B + Jm) = −kBT
∂ logΩ
∂m
= NkBT

1
2
log
1 + m
2
−
1
2
log
1 − m
2

.
Then we have
βB + βJm =
1
2
log
1 + m
1 − m
= tanh−1
m.
This matches Curie’s law at high temperature, and when plotted looks like this:
T
1
m(T)
B > 0
(e) With B = 0, for the magnetization to be nonzero, we need a non-zero solution to
m = tanh

Jm
kBT

.
Since the second derivative of tanh(ax), −2a2 sech2
(ax)tanh(ax) is always negative for x > 0,
that means that the slope of tanh(ax) will always be decreasing for x > 0. In order for the
graphs of x and tanh(ax) to intersect again after x = 0, the slope of tanh(ax) must be greater
than the slope of x, which is 1. Thus the critical value is where a = 1, so
Tc =
J
kB
.
To find what happens just below Tc, we Taylor expand the hyperbolic tangent about zero,
which is useful because m will be small,
tanh(x) = x −
x3
3
+ O(x5
).
Letting T = (1 − ϵ)Tc, we have Jm/kBT = m/(1 − ϵ), giving
m ≈
m
1 − ϵ
−
1
3
m3
(1 − ϵ)3
which means that at lowest order in epsilon,
m ≈
√
3ϵ =

3(Tc − T)
Tc
1/2
.
(f) In this case we have m = tanh(m + B/J), and using the same series expansion as above,
neglecting higher-order terms in B, we find m ≈ (3B/J)1/3.
[5] Problem 16.  h 1 0APhO 2011, problem 3. A nice problem on a real-world mechanical phase
transition. Some of the intuition you gained studying the van der Waals gas will be useful.
19
Kevin Zhou Physics Olympiad Handouts
4 Thermodynamic Systems
Now that we know all about the different methods of heat transfer, as well as phase transitions, we
consider some questions involving a mix of these concepts as well as mechanics.
Example 6: IPhO 1967.3
Consider two identical homogeneous balls with the same initial temperatures. One of them
is at rest on a horizontal plane, while the other hangs on a thread.
The same quantity of heat is supplied to both balls. Which has the higher final temperature?
Solution
This infamous problem, which appeared on the first IPhO, was the original “troll” Olympiad
question. The balls are different because the one on the plane thermally expands upward,
while the one on a thread thermally expands downward. This tiny change in gravitational
potential energy means that the ball on the thread ends up hotter.
This is an incredible solution – in the sense that it is not credible. About fifty years after
it was written, physicists at Oxford showed that it is wrong! Suppose the logic above were
actually right. Then a heat engine can be constructed with these four steps:
1. Heat the ball on the plane, therefore raising its center of mass.
2. Attach the ball to a thread and remove the plane.
3. Cool the ball on the thread, therefore raising its center of mass.
4. Put a plane just under the ball’s new position and remove the thread.
This is a heat engine, where the work goes into raising the ball. If the ball is only heated
and cooled a tiny amount dT, then the heat supplied is proportional to dT, but the distance
through which the ball rises is also proportional to dT. Therefore, the efficiency of the cycle
becomes a constant as dT goes to zero, which exceeds the Carnot efficiency (which instead
goes to zero) and hence violates the second law of thermodynamics.
A real ball doesn’t violate the second law, because it also stretches while hanging on the
thread, and squashes while on the plane. The slick solution neglects these effects and considers
only thermal expansion, but the above argument shows that this assumption is inconsistent:
you can’t have the latter without the former. This is an example of how thermodynamic
considerations alone can, perhaps surprisingly, yield information about mechanical properties.
20
Kevin Zhou Physics Olympiad Handouts
The paper linked above performs a careful analysis and shows that, for most materials, the
ball on the thread instead ends up colder.
Example 7
Why does a breeze cool you down, and why do clothes make you warmer?
Solution
Like most gases, air has a very small thermal conductivity, and enough viscosity so that you
carry around a thin layer of warm air with you wherever you go. (The main reason you
cool down is because this warm air rises away from you, by convection.) When a breeze is
blowing, it strips off this cushion of warm air, which is why you feel colder.
When you’re sweaty, the same logic applies. The layer of air you carry around is also moist,
saturated with water vapor from your sweat. Again, a breeze removes this layer, allowing
more evaporation to happen, cooling you down.
Clothing material itself actually has a higher thermal conductivity than air. Its real purpose
is to trap the layer of warm, moist air around you, preventing it from being blown away by
breezes or rising from convection. (That’s also how greenhouses keep plants warm: the sun
warms air near the ground, and the glass room prevents that air from rising away. Confusingly,
this has nothing to do with the atmospheric “greenhouse effect.”)
Example 8
Can you boil water in a pot by putting it into a bigger pot of boiling water?
Solution
No, because boiling is a phase transition that requires latent heat. The water in the small
pot can get heated up to boiling temperature, but it can’t start boiling, because at that point
it’ll be at the same temperature as the bigger pot, and no more heat can flow.
[1] Problem 17 (IPhO 1996). A thermally insulated piece of metal is heated under atmospheric
pressure by an electric current so that it receives a constant power P. The temperature is
T(t) = T0(1 + a(t − t0))1/4
where T0, t0, and a are constants. Find the heat capacity C(T).
Solution. By definition, C(T) = dQ/dT. With constant power P, dQ = P dt, and
dT
dt
=
P
C(T)
=
1
4
T0 (1 + a(t − t0))−3/4
a =
aT4
0
4T3
.
This gives the answer,
C(T) =
4T3P
aT4
0
.
21
Kevin Zhou Physics Olympiad Handouts
[3] Problem 18. NBPhO 2011, problem 8. A tricky data analysis problem.
[3] Problem 19. NBPhO 2014, problem 9. A nice problem reviewing radiation and kinetic theory.
[4] Problem 20. @ 1 0EuPhO 2019, problem 1.
5 Thermodynamic Fluids
In this section, we focus on problems combining thermodynamics with fluids, as covered in M7.
We begin with some questions which only require fluid statics.
[5] Problem 21.  h 1 0IPhO 1998, problem 2. A very nice real-world fluids/thermodynamics question.
[5] Problem 22.  h 1 0APhO 2009, problem 3. Another nice, simple model of a real-world phenomenon.
Idea 6
In M7 we considered Bernoulli’s principle for incompressible liquids with no temperature.
However, in general fluids are compressible and carry internal energy. To derive Bernoulli’s
principle in this more general context, we apply conservation of energy to a tube of streamlines,
as one mole of ideal gas flows through it. We neglect gravity, since it typically is unimportant
for such rapid flows. The energy of a mole of gas at the entry of the tube is
1
2
µv2
1 + cV T1
where µ is the molar mass, and cV is the heat capacity per mole. Similarly, the energy of a
mole of gas at the other end is
1
2
µv2
2 + cV T2.
Assuming there’s no heat transfer, the difference must be the work done on the tube of fluid
as a mole of gas flows through,
p1δV1 − p2δV2 = R(T1 − T2)
where the δVi are the volumes of a mole of gas at the entry and exit, and we used the ideal
gas law. Combining and using cp = cV + R gives
1
2
µv2
+ cpT = const
along a streamline in steady flow.
Remark
You might also see Bernoulli’s principle in the form
1
2
v2
+ gh + cpT = const
where we’ve added on the contribution of gravitational potential energy. In this case, cp is
the heat capacity at constant pressure per unit mass, not per mole. Unfortunately, people
22
Kevin Zhou Physics Olympiad Handouts
use the letter c or C to denote many different kinds of (specific) heat capacities. Whenever
doing a problem where a heat capacity is given, check the dimensions!
Example 9: Wang and Ricardo
A rocket propels itself by burning fuel to release diatomic gas of temperature T1 in its
combustion chamber, which has cross-sectional area A1. The gas then flows adiabatically
and is expelled out of the nozzle, which has a cross-sectional area A2, at a speed v2 relative
to the rocket, pressure p2 (which is equal to the ambient pressure), and temperature T2 < T1.
In the limit of steady flow, determine the thrust experienced by the rocket.
Solution
Since the flow is adiabatic and the gas is diatomic,
p1 = p2

T1
T2
7/2
.
As discussed in M7, mass conservation in steady flow means ρAv must be the same on both
sides of the nozzle. The ideal gas law tells us that ρ ∝ p/T, so
p1A1v1
T1
=
p2A2v2
T2
.
Combining these two gives a relation between the velocities,
v1 = v2
A2
A1

T2
T1
5/2
.
Bernoulli’s principle gives
1
2
µv2
1 +
7
2
RT1 =
1
2
µv2
2 +
7
2
RT2
where we neglected the gravitational energy. Combining with our previous relation gives
v2
2 =
7R(T1 − T2)
µ(1 − (A2/A1)2(T2/T1)5)
.
Finally, the thrust is
F =
dp
dt
= ρ2A2v2
2 =
µp2A2v2
2
RT2
=
7p2A2(T1 − T2)
T2(1 − (A2/A1)2(T2/T1)5)
.
Example 10
How does the Bernoulli’s principle above reduce to the incompressible one used in M7?
23
Kevin Zhou Physics Olympiad Handouts
Solution
This is trickier than it seems. For simplicity, let’s neglect the gravitational contribution.
Then by the ideal gas law, the compressible Bernoulli’s principle derived above is
1
2
v2
+
γ
γ − 1
P
ρ
= const.
When the flow is incompressible, ρ is constant, but if we just multiply by ρ we get
1
2
ρv2
+
γ
γ − 1
P = const
which is not the expected result!
In fact, there’s something more troubling under the surface. The Bernoulli’s principle
derived in M7 applies to water flow, since water is incompressible. And the compressible
version derived above applies to ideal gas flow, since gas is compressible. But in M7, we
applied the incompressible Bernoulli’s principle to gas flow! How does that even make sense?
The resolution to the two questions is the same: the key assumption needed to get to the
original form of Bernoulli’s principle is not that an ideal gas is incompressible, because that’s
simply not true. Instead, the key assumption is that the gas flow is much slower than the speed
of sound, v2 ≪ c2
s ∼ P/ρ. In this limit, the kinetic energy term in the generalized Bernoulli’s
principle is much smaller than the internal energy term. Thus, in the course of subsonic
flow, the temperature, pressure, and density of the gas can only change by a small relative
amount. For example, the pressure is P(x) = P0 + ∆P(x) where ∆P ≪ P0. (To avoid some
confusion, remember that Bernoulli’s principle always assumes steady flow. The air in my
bike tires has ∆P ≈ 6P0, but that’s because the process of pumping a tire is not a steady flow.)
But if that’s true, then what went wrong with just multiplying our result above by ρ?
The point is that for very subsonic flows, the v2 term is much smaller than the P/ρ term,
so we need to evaluate the P/ρ term to a very good relative precision to get correct
results. (If my bank was careless and randomly misplaced 0.1% of its money, then that
might mean losing 100% of my savings, since my account’s value is small compared to its total.)
Now we’re ready to do the derivation properly. We start from the first equation above, but
we don’t multiply by ρ. Instead, we note that P/ργ is constant because the gas is compressed
adiabatically, since we neglected heat transfer, so we multiply by ρ0 = ρ(P0/P)1/γ, giving

P0
P
1/γ
1
2
ρv2
+
γ
γ − 1

P
P0
(γ−1)/γ
P0 = const.
Since the first term is the small one, we can approximate P0 ≈ P there without much error.
As for the second term, we expand (P/P0)(γ−1)/γ with the binomial theorem to get
1
2
ρv2
+
γ
γ − 1
P0 + ∆P = const
and subtracting the constant P0/(γ − 1) recovers the “incompressible” Bernoulli’s principle.
24
Kevin Zhou Physics Olympiad Handouts
In conclusion, the Bernoulli’s principle derived in this problem set works for arbitrarily fast
gas flows, while the incompressible form in M7 only works for very subsonic flows. But that
doesn’t mean you should never use the latter. When the flow is subsonic, the incompressible
form is easy to use, while the more general form requires great care to get the correct result.
You should only use the general form when it’s actually necessary, i.e. for the very fast gas
flows considered in the following problems.
[3] Problem 23 (Feynman). Air with density ρ, pressure P, and adiabatic index γ flows at uniform
speed v through a smooth pipe of constant cross-sectional area A. It is heated as it passes a wire
grid, which offers negligible resistance to the flow, with a power Q̇. This is a simple model for a jet
engine. For simplicity, suppose the output pressure is also P, though this would not be true in a
practical engine.
(a) Find the speed v′ with which the air exits the tube, in terms of the given parameters.
(b) Find the thrust produced, in terms of v′ and the other parameters.
(c) In the limit of small Q̇, find the engine’s efficiency.
Next to rockets and computing chips, jet engines are some of the most difficult technologies humans
can build; see this article for a nice overview of the history.
Solution. (a) We will conserve mass and energy. Denote quantities that leave with a prime, and
let µ be the molar mass. The rate of mass flow in must match the rate out,
J = ρAv = ρ′
Av′
.
To apply energy conservation, we use a modified form of Bernoulli’s principle, which accounts
for the inflow of heat,
Q̇
J
=
1
2
(v′2
− v2
) +
cP
µ
(T′
− T).
The ideal gas law states
ρ =
µP
RT
which we can use to eliminate µ. Additionally using cp = γR/(γ − 1) gives
Q̇
J
=
1
2
(v′2
− v2
) +
P
ρT
γ
γ − 1
(T′
− T).
Since P = P′, combining the ideal gas law with mass conservation gives
v
T
=
v′
T′
.
Using this to eliminate T′ will give a quadratic equation for v′ in terms of known parameters,
1
2
v′2
+
c2
0
v
v′
−
1
2
v2
+ c2
0 +
Q̇
J
!
= 0, c2
0 =
γ
γ − 1
P
ρ
.
Using the quadratic equation and taking the physical root,
v′
=
q
(v + c2
0/v)2 + 2Q̇/J − c2
0/v.
As a check, note that v′ = v when Q̇ = 0.
25
Kevin Zhou Physics Olympiad Handouts
(b) By conservation of momentum, the thrust must be
F = J∆v = ρAv(v′
− v).
(c) By applying the binomial theorem to the result of part (a), the efficiency is
Fv
Q̇
≈
1
1 + c2
0/v2
which is small for low v, and approaches an efficiency of 1 as v → ∞.
[3] Problem 24 (Wang 2.17). Consider an ideal gas with pressure p, density ρ, and adiabatic index
γ. A density pulse is set up in the gas, traveling along the −x direction with speed c. Inside the
pulse, the gas has local velocity v ≪ c in the lab frame, and a local density ρ + ∆ρ, where ∆ρ ≪ ρ.
(a) Transform to the reference frame where the pulse is at rest, and find three constraints, using
mass conservation, energy conservation, and the fact that the gas is compressed and expanded
adiabatically when it enters and leaves the pulse (i.e. heat conduction is negligible).
(b) Combine these relations to find c. Work to lowest order in the small quantities v/c and ∆ρ/ρ.
The quantity c is the adiabatic speed of sound in a gas, which we’ll derive in a different way in W3.
For more about sound waves, see chapter 31 of Blundell, or section 14.1 of Lautrup.
Solution. (a) We work in the reference frame moving to the left with speed c. In this frame, the
gas has velocity c everywhere, except at the pulse, where it has velocity c + v. The density
away from the pulse is ρ and the density at the pulse is ρ + ∆ρ.
Mass conservation gives
(c + v)(ρ + ∆ρ) = cρ.
Using cp = (γ/(γ − 1))R, Bernoulli’s principle gives
1
2
µc2
+
γ
γ − 1
RT =
1
2
µ(c + v)2
+
γ
γ − 1
R(T + ∆T).
Finally, since the gas is compressed adiabatically we have
T ∝ ργ−1
.
(b) Mass conservation gives the relation
∆ρ
ρ
≈ −
v
c
to lowest order. Bernoulli’s principle gives
µcv = −
γ
γ − 1
R∆T
to lowest order. Finally, the adiabatic condition to lowest order is
∆T
T
≈ (γ − 1)
∆ρ
ρ
.
26
Kevin Zhou Physics Olympiad Handouts
Combining this with Bernoulli’s principle to eliminate ∆T gives
µcv ≈ −γRT
∆ρ
ρ
≈ γRT
v
c
.
Thus, solving for c, we conclude
c2
=
γRT
µ
=
γpV
µn
=
γp
ρ
which is the adiabatic speed of sound.
Example 11
Show that the kinetic and potential energy of a sinusoidal, adiabatic sound wave are equal.
Solution
First, we explicitly define our notation. The sound wave profile is
P = P0 + ∆P cos(kx − ωt), ρ = ρ0 + ∆ρ cos(kx − ωt)
and
v
c
=
v0
c
cos(kx − ωt), T = T0 + ∆T cos(kx − ωt).
In problem 24, you derived relations between the parameters (∆P)/P0, (∆ρ)/ρ0, v0/c, and
(∆T)/T0, which are all assumed small, and of the same order of magnitude. The total energy
density of the fluid, up to second order, is
u =
1
2
ρ0v2
+ cvρT
where here cv is the heat capacity per unit mass. The first term is the bulk kinetic energy
density, while the change in the second term is the potential energy density, where we’re
using the usual meaning of potential energy as any energy which isn’t kinetic.
This all looks pretty straightforward, but there’s a reason that most introductory textbooks
never write down this expression. You can see the issue by applying the ideal gas law to the
second term. Since P ∝ ρT, this term is proportional to P, but the average of P is just P0.
This suggests that sound waves have no potential energy density at all, which is wrong. For
instance, if you instantly take out all the macroscopic kinetic energy, setting v to zero, then
there is still energy remaining that can be harvested because the pressure is nonuniform.
Here’s the problem: energy is inherently a second order quantity. If ρ and T were both small
quantities, then it would be good enough to multiply them to get the answer to second
order. But instead, ρ and T are the quantities ρ0 and T0 shifted by small quantities ∆ρ and
∆T. That means that to get the quantity ρT correct to second order, we need to get both ρ
and T individually correct to second order, which is beyond the first order approximations
we started with! This is a conceptual issue that occurs whenever you have a perturbation
that shifts existing properties of a medium. (It doesn’t happen for waves on a string, which
we cover in W1, because those waves are parametrized by y, and y = 0 when there is no wave.)
27
Kevin Zhou Physics Olympiad Handouts
It’s possible to fix this issue, but we need to be careful. First, let’s use the ideal gas law to
change variables to pressure, so we only have one quantity to deal with,
cvρT =
R
µ
1
γ − 1
ρT =
P
γ − 1
.
The key insight is that we can keep our expression for ρ the same. The reason is that for
the wave equation to continue to be satisfied at second order, we can only add second order
terms that are constant, or also sinusoids. Adding a constant to the density is not allowed
because we know the total number of particles is conserved, so the mass
R
ρdV is, and
adding a sinusoid can be absorbed by simply redefining ∆ρ.
Now, we know that P ∝ ργ, and letting δρ = ∆ρcos(kx − ωt) for convenience, we have
P
P0
=

ρ
ρ0
γ
= 1 +
γ δρ
ρ0
+
γ(γ − 1)
2

δρ
ρ0
2
.
When we integrate the first term, we get the internal energy of the fluid at rest. The second
term averages to zero, and so can be disregarded. The third term gives the desired result,
u =
1
2
ρ0v2
+
γP0
2

δρ
ρ0
2
.
Now that the energy is in terms of small quantities squared, we can relax and use first order
results. Using the results derived in problem 24, this can be simplified to
u =
1
2
ρ0v2
+
1
2
ρ0c2

δρ
ρ0
2
and the two contributions are equal, because v/c = δρ/ρ0.
As a check on this result, it is often true that the energy density is equal to the momentum
density times the wave speed, u = pc. (For example, this corresponds to E = pc for photons.)
The momentum density is p = ρv = (ρ0 + δρ)v. The first order term represents the overall
momentum of all of the gas, not the momentum due to the sound wave itself, so it can be
ignored. The second order term is
p = δρv =
ρ0v2
c
which is exactly the expected result.
Ironically, while we began this discussion by noting that the energy of a transverse wave
on a string is more straightforward, the longitudinal momentum of a transverse wave on a
string is far more confusing – how can there be any if the string moves only transversely?
Does the above identity u = pc break down for these waves, or do we just need to evaluate
p more carefully? (For one perspective in this ongoing debate, see this paper.) All of this is
too subtle to be relevant to Olympiads; even string theorists get confused about it. It’s just
a reminder that there are always subtleties lurking in even basic physics.
28
Kevin Zhou Physics Olympiad Handouts
[3] Problem 25.  h 1 0IPhO 2012, problem 1B. A tricky real-world problem on fluids and condensation.
29
