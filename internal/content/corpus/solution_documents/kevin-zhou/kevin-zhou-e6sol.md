---
id: solution-document-kevin-zhou-e6sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-e6-ex001, kevin-zhou-e6-ex002, kevin-zhou-e6-ex005, kevin-zhou-e6-p004, kevin-zhou-e6-p007, kevin-zhou-e6-p016, kevin-zhou-e6-p018, kevin-zhou-e6-p019]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/E6Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Electromagnetism VI: Circuits
AC circuits are covered in chapter 8 of Purcell, or chapter 10 of Wang and Ricardo, volume 2.
Transmission lines, filters, and resonant cavities are covered physically in chapters II-22 and II-
23 of the Feynman lectures, which will also build intuition for the next unit. Also see Kalda’s
circuits handout, an excellent resource which covers nonlinear circuit elements and much more.
This problem set assumes knowledge about linear differential equations covered in M1 and M4,
but you can review the relevant material in chapter 4 of Morin. If you’d like to learn much more
about circuits, from the electrical engineering perspective, a nice book is Foundations of Analog
and Digital Electronic Circuits by Agarwal and Lang. There is a total of 86 points.
1 DC RLC Circuits
Idea 1
AC circuits correspond to driven damped oscillators by the analogies
Q ↔ x, I ↔ v, (L,C,R) ↔ (m,1/k,b), V0 ↔ F0.
Upon making these replacements, Kirchhoff’s loop equation in an AC circuit becomes
Newton’s second law for a driven damped oscillator.
It’s worth noting that there’s more than one way to set up the analogy. In the theory of
superconducting qubits, it turns out the natural variable is the flux Φ, so practitioners like
to take Φ ↔ x. This implies Q ↔ p, and (L,C) ↔ (1/k,m). An analogy is just a way of
thinking, so you can use whichever is convenient for you.
Example 1
Consider a circuit with a battery of emf E, a resistor R, and an inductor L in series, with
zero initial current. Find the current I(t) and verify that energy is conserved.
Solution
Kirchhoff’s loop equation is
E = L
dI
dt
+ IR.
To solve for the current, we can separate and integrate, giving
dt
L
=
dI
E − IR
which yields
I(t) =
E
R
(1 − e−(R/L)t
).
At long times, the inductor has no effect, since the current stops changing. To verify energy
conservation we multiply Kirchhoff’s loop equation by I, since power is emf times current,
IE = LI
dI
dt
+ I2
R.
1

Kevin Zhou Physics Olympiad Handouts
The left-hand side is the power output by the battery, and the two terms on the right-hand
side represent the rate of increase in energy LI2/2 stored in the inductor, and the power
dissipated in the resistor, so all power is accounted for.
Example 2
An ideal battery of voltage E is suddenly connected to an ideal capacitor. After a short time,
the capacitor has energy U. How much energy has been released by the battery?
Solution
This is a variant of the two capacitor paradox, which has essentially the same solution. First
let’s consider how the capacitor is charged up over time. Naively, since there’s no resistance
or inductance, the current in the circuit instantly becomes infinite, then instantly shuts off.
This isn’t realistic: to understand what’s actually going on, we have to account for nonideal
features of the circuit, such as resistance or self-inductance. For example, if the resistance
dominates (overdamping), the capacitor charges up monotonically, as in an RC circuit. If
the inductance dominates (underdamping), the capacitor voltage oscillates about E, until
eventually settling down due to the resistance.
At the end, the total energy on the capacitor is
Z
VC dQ = C
Z E
0
VC dVC =
1
2
CE2
=
1
2
EQ
where Q is the total charge. But the work done by the battery is
Z
E dQ = EQ
so the battery has released energy 2U. Evidently, half of it is lost, no matter how close to
“ideal” the circuit is! If the tiny resistance dominates, it is lost to heat in the circuit. If there’s
no resistance, then it’s lost to electromagnetic radiation emitted from the circuit, which
provides an effective “radiation resistance”. (And if we enclosed a superconducting circuit in
a perfect cavity so that it can’t radiate, then it would ideally perform LC oscillations forever,
so it never settles down to the steady voltage described in the problem.)
In fact, this is just another example of the nonadiabatic processes you saw in T1. Instantly
attaching a battery is the same kind of thing as instantly dropping a piston, and letting it
bounce until it comes to a stop. Just like those nonadiabatic processes, attaching the battery
in this way creates entropy; if the circuit and environment have temperature T, then
∆S =
∆Q
T
=
EQ
2T
.
We can avoid wasting energy and producing entropy if we use an adjustable battery and
gradually turn its voltage up, slowly enough so that the circuit is always near equilibrium.
This is the electrical analogue of a smooth, adiabatic compression.
2

Kevin Zhou Physics Olympiad Handouts
Remark
Suppose you wanted to account for the nonideal properties of a capacitor. In principle,
the only way to get the answer exactly is to treat all the fields with Maxwell’s equations
and all the charges with Newton’s laws. But we can often mimic nonideal effects by just
adding resistors to the circuit. This has the benefit of staying within the “lumped element
abstraction”, where we can solve for everything with Kirchhoff’s laws, which are much simpler.
But where should we add the resistors? It depends on what nonideal effect we’re trying to
model. For example, if we want to account for the resistance of the wires, we should add a
small resistance in series with the capacitor. But if instead the capacitor is slightly leaky,
we should instead add a large resistance in parallel with the capacitor. If both effects are
important, we should add both. And if radiation is the main way energy is lost, this can’t
be modeled like a simple resistor, because the amount of radiated power depends on the
rate of change of the current, not the current itself. However, it can be modeled as a real,
frequency-dependent contribution to the impedance.
[3] Problem 1 (Purcell 7.46). We have found that in an LR circuit the current changes on the timescale
L/R. In a large conducting body such as the metallic core of the Earth, the “circuit” is not easy
to identify. Nevertheless, we can estimate the decay time. Suppose the current flows in a solid
doughnut of square cross section, as shown, with conductivity σ.
The current is spread out in some way over the cross section.
(a) Make a rough estimate of the resistance and inductance. For the latter, it may be easiest to
estimate the magnetic field at the center of the doughnut first, then use that to estimate the
total magnetic field energy.
(b) With these results, show that τ ∼ µ0a2σ, which also follows from dimensional analysis.
(c) Given that the radius of the Earth is r ∼ 3000km and σ ∼ 106 (Ω · m)−1, estimate τ.
Solution. (a) We estimate
R ∼
1
σ
length
cross-sectional area
∼
1
σ
a
a2
∼
1
σa
.
The magnetic field at different points is on order µ0I/a, so the magnetic energy is
UB ∼
1
2µ0
(µ0I/a)2
a3
and equating this to LI2/2 gives L ∼ µ0a.
3

Kevin Zhou Physics Olympiad Handouts
(b) Combining these two gives τ ∼ L/R ∼ µ0a2σ, as desired.
(c) Plugging in the numbers gives τ ∼ 3 × 105 years. This is much shorter than the Earth’s life,
so some energy source must actively drive the core.
[2] Problem 2 (PPP 171). A circuit contains three identical lamps (modeled as resistors) and two
identical inductors, as shown.
S
The switch S is closed for a long time, then suddenly opened. Immediately afterward, what are the
relative brightnesses of the lamps?
Solution. After a long time with the switch closed, the inductors act like short circuits, so the
currents in the bulbs are the same. Let this current be I. Then the currents in the two inductors
are 2I and I.
When the switch is opened, the currents in the inductors remain the same, since they resist
changes in current. This means the currents through the resistors are now 2I, I, and I. Since
P = I2R, the left bulb is 4 times brighter than the other two.
[3] Problem 3 (Kalda). A capacitor C and resistor R are connected in series. Rectangular voltage
pulses are applied, as shown below.
t
V
V1
V2
T 2T
After a long time, find the average power dissipated on the resistor if (a) T ≫ RC and (b) T ≪ RC.
Solution. (a) In this case, there is sufficient time for the capacitor to reach equilibrium each
time the voltage switches. The energy dissipated during a switch is
U =
Z
IV dt =
Z
V dQ.
During a switch, the voltage across the resistor goes from V2 −V1 to zero linearly in the charge,
while the total charge transferred is ∆Q = (V2 − V1)C. Thus,
U = V R ∆Q =
1
2
(V2 − V1)2
C.
This happens every time T/2, so
P =
(V2 − V1)2C
T
.
4

Kevin Zhou Physics Olympiad Handouts
(b) In this case, the charge on the capacitor barely changes during each cycle. The average voltage
across the capacitor is (V1 + V2)/2. Hence the magnitude of the voltage across the resistor is
always approximately equal to (V2 − V1)/2, so
P =
V 2
R
R
=
(V2 − V1)2
4R
.
If you’re curious, the answer for general T is C(V2 − V1)2 tanh(T/(4RC))/T.
Remark
Out of all the analogies mentioned above, why is capacitance defined “backwards”, so
that C ∼ 1/k? I actually have no idea, but one possibility is that large quantities should
intuitively correspond to large objects. An object has to be physically large (and thereby
expensive) to have a high C or a high L, and you can easily see this on a circuit board.
(Of course, this doesn’t explain everything; the largest R you can get is just a break in the
circuit, which is neither large nor expensive.)
Another difference in the analogies is that for circuits we usually measure I(t), analogous to
v(t), while for mechanical oscillators we usually measure x(t). The frequencies at which the
amplitudes of x(t) and v(t) are maximized slightly differ, as discussed in M4, so there’s a
little ambiguity when people talk about “the” resonant frequency.
We now consider some problems involving mutual inductance.
Example 3: Griffiths 7.57
Two coils are wrapped around a cylindrical form so that the same flux passes through every
turn of both coils, i.e. so that the mutual inductance is maximal. In practice this is achieved
by inserting an iron core through the cylinder, which has the effect of forcing the magnetic
flux to stay inside the cylinder.
The “primary” coil has N1 turns and the secondary has N2. If the current I in the primary
is changing, show that the emf E2 in the secondary obeys
E2
E1
=
N2
N1
where E1 is the (back) emf of the primary.
5

Kevin Zhou Physics Olympiad Handouts
Solution
Let Φ be the flux through a single loop of either coil due to the current in the primary. Then
Φ1 = N1Φ, Φ2 = N2Φ.
By Faraday’s law,
E1 = −N1
dΦ
dt
, E2 = −N2
dΦ
dt
which gives the desired result. This is a primitive transformer, a device for raising or lowering
the emf of an alternating current source. By choosing the appropriate number of turns, any
desired secondary emf can be obtained.
We can also solve this problem more formally using what we know about inductance, which
will also tell us what happens when both currents are nonzero. The emfs obey
E1 = −L1
dI1
dt
− M
dI2
dt
, E2 = −L2
dI2
dt
− M
dI1
dt
.
We showed in E5 that Li = µ0N2
i πR2/H for a cylindrical solenoid. (Here, H stands for the
length of the iron core, since this is the length over which the magnetic field exists.) As you’ll
show below, the maximum possible value of the mutual inductance, which is achieved by this
ideal transformer, is
√
L1L2. Plugging in these results gives
E1 = −

µ0πR2
H

N2
1
dI1
dt
+ N1N2
dI2
dt

, E2 = −

µ0πR2
H

N2
2
dI2
dt
+ N1N2
dI1
dt

.
This tells us the desired result holds for any values of the dIi/dt.
This result is not surprising from the standpoint of Faraday’s law. The flux change through
any cross-section of the iron core is the same, so the induced emf around any circle around
it is the same. Thus, the emf per turn is the same between the coils, E1/N1 = E2/N2, which
again gives the desired result.
[3] Problem 4. Consider two inductors Li, with mutual inductance M.
(a) Show that if the inductors have currents Ii, the total stored energy is
U =
1
2
L1I2
1 +
1
2
L2I2
2 + MI1I2.
Use this result to show that |M| ≤
√
L1L2.
(b) Suppose these two inductors are in series. Find their combined effective inductance.
(c) Suppose these two inductors are in parallel. Find their combined effective inductance.
Solution. (a) The differential work required to change the currents is
dU = (L1
˙ J1 + M ˙ J2)(J1dt) + (L2
˙ J2 + M ˙ J1)(J2dt) = L1J1dJ1 + L2J2dJ2 + Md(J1J2)
6

Kevin Zhou Physics Olympiad Handouts
where J1,J2 are the values of the currents at some intermediate time. Therefore, the total
work required is
U =
1
2
L1I2
1 +
1
2
L2I2
2 + MI1I2.
Let x = I2/I1, so
U ∝ L2x2
+ 2Mx + L1.
Physically, U must be positive for all x. Minimizing by setting the derivative to zero, we see
the minimum of U is positive only if |M| ≤
√
L1L2. The bound is saturated for inductors that
practically overlap, or more generally for any configuration where all flux that goes through
one inductor also goes through the other, such as the two coils of an ideal transformer.
(b) When the inductors are in series, they have the same current. The total emf is
E = −

L1
dI
dt
+ M
dI
dt
+ L2
dI
dt
+ M
dI
dt

= −(L1 + L2 + 2M)
dI
dt
which means
Leff = L1 + L2 + 2M.
Incidentally, since Leff must be positive, this implies the bound M > −(L1 + L2)/2, though
this is weaker than the bound in part (a).
(c) When the inductors are in parallel, they have the same emf, so
E = −L1
dI1
dt
− M
dI2
dt
= −L2
dI2
dt
− M
dI1
dt
.
Solving the system gives
Leff =
L1L2 − M2
L1 + L2 − 2M
.
This also implies the bound |M| <
√
L1L2, as shown in a different way in part (a).
[3] Problem 5 (Kalda). An electrical transformer is connected as shown.
Both windings of the transformer have the same number of loops and the self-inductance of both
coils is equal to L. There is no leakage of the magnetic field lines from the core, so that the mutual
inductance is also equal to L.
(a) Find the current in both loops immediately after the switch is closed.
(b) Find the currents as a function of time.
7

Kevin Zhou Physics Olympiad Handouts
Solution. (a) In a transformer, the flux is Φ = L(I1 +I2) and dΦ/dt = EL = L(dI1/dt+dI2/dt).
Since dΦ/dt is finite, then initially I1 + I2 = 0. The voltage loop rule gives
E = I1R + L(dI1/dt + dI2/dt) = I1R − I2r
Using the initial condition of I1 = −I2 gives I1 = E/(R + r).
(b) The voltage loop rules give
E = I1R + L(dI1/dt + dI2/dt), L(dI1/dt + dI2/dt) + I2r = 0.
Let I ≡ I1 + I2. Combining the equations give
E
R
= I +
L(R + r)
Rr
dI
dt
which has solution
I =
E
R
(1 − e−t/τ
), τ ≡ L

1
r
+
1
R

.
Using I1 = E/R − L
RdI/dt and I2 = −L
r dI/dt, we can extract
I1 =
E
R

1 −
r
r + R
e−t/τ

, I2 = −
E
(R + r)
e−t/τ
.
2 AC RLC Circuits and Impedance
Idea 2: Impedance
Current and voltage can be promoted to complex quantities,
V (t) = V0 cos(ωt + ϕ), Ṽ (t) = Ṽ0eiωt
, Ṽ0 = V0eiϕ
where the physical quantity is the real part. This is useful because we can relate Ṽ and ˜ I in
all cases by Ṽ = ˜ IZ where Z is the impedance, and
ZR = R, ZC =
1
iωC
, ZL = iωL
for the three common circuit elements. Impedance is extremely useful for finding the steady
state response of a circuit. If you’re interested in the transients, you can find them by
applying the techniques of M4 to the Kirchhoff’s loop rule equation.
Idea 3: Power
Turning parameters complex and taking the real part works because we’re dealing with
linear equations. As a result, it doesn’t work for energy or power, which are quadratic.
In particular, the power dissipated in an element is not Re(˜ IṼ ), but rather
P = IV = Re(˜ I)Re(Ṽ ) = I0V0 cos(ωt)cos(ωt + ϕ)
8

Kevin Zhou Physics Olympiad Handouts
where ϕ is the phase angle of Z. To compute the average power, note that
P =
V 2
0
|Z|
cos(ωt)(cos(ωt)cos(ϕ) − sin(ωt)sin(ϕ)).
The second term averages to zero, while cos2(ωt) averages to 1/2 as usual, so
P =
1
2
V 2
0
|Z|
cos(ϕ) =
1
2
I0V0 cos(ϕ).
We can decompose a general impedance as Z = R + iX, in which case cosϕ = R/|Z|, and
P =
1
2
I0V0R
|Z|
=
1
2
I2
0R.
It’s conventional to define I2
rms = I2
0/2 to be the average value of I2, giving
P = I2
rmsR =
V 2
rms
R
.
Example 4
Find the magnitude of the current through a series RLC circuit with AC voltage source
V0 cosωt.
Solution
We promote the voltage and current to complex numbers,
V (t) = V0eiωt
.
Kirchhoff’s loop rule (subject to the caveats in E5) is
L ˙ I + IR +
Q
C
= V0eiωt
.
This is quite similar to a damped driven harmonic oscillator, except that we want to get I(t),
rather than Q(t). To get the steady state behavior, we guess
I(t) = I0eiωt
.
Then we have
˙ I(t) = (iω)I0eiωt
, Q(t) =
1
iω
I0eiωt
.
Plugging this in, we find
iωL + R +
1
iωC

I0 = V0.
Solving for the magnitude of the current gives
|I0| =
|V0|
|iωL + R + 1/iωC|
=
|V0|
p
R2 + (ωL − 1/ωC)2
which is maximized when ω = 1/
√
LC, as we saw in M4. We could also have gotten straight
to this last step by just using complex impedances.
9

Kevin Zhou Physics Olympiad Handouts
Example 5
An imperfect voltage source consists of an ideal AC voltage source in series with an impedance
ZS. It is attached to a load of impedance ZL. What value of ZL maximizes the power
transferred to the load?
Solution
Write the impedances as ZL = RL + iXL. When the impedances are purely real, it’s a
familiar fact that the optimum is at RS = RL. We consider the case of general impedance
here to illustrate how to work with power. First, the current has amplitude
I0 =
|V |
|ZS + ZL|
.
The average power dissipated in the load is
P =
1
2
I2
0RL ∝
RL
|ZS + ZL|2
=
RL
(RS + RL)2 + (XS + XL)2
.
The denominator is minimized when XS + XL = 0, so the optimal real part is RL = RS by
the same logic as the purely real case. Thus, the highest power is achieved for ZL = Z∗
S.
[1] Problem 6. Consider the cube of resistances R, capacitances C, and inductances L shown below.
Compute the impedance between the terminals.
Solution. By symmetry, the three points close to one end have the same voltage, and the three
points close to the other end have the same as well. Thus, we simplify the diagram to the following:
R
R
R
L
L
L
L
L
L
C
C
C
We have impedance
Z =
1
3
R +
1
6
iωL +
1
3
1
iωC
.
[3] Problem 7. Consider an RLC circuit with a driving V (t) = V0eiωt.
10

Kevin Zhou Physics Olympiad Handouts
(a) Suppose the resistor, inductor, and capacitor are connected in parallel. Sketch the current
|I0| through the driver as a function of ω, and compare it to the result for a standard series
RLC circuit. Can you give a qualitative explanation for the difference?
(b) As we saw in M4, the quality factor for an oscillator quantifies how fast the energy in an
undriven oscillator decays away. Specifically,
Q =
average energy stored in the oscillator
average energy dissipated per radian
.
Find the quality factor for a series RLC circuit, and confirm your answer has correct dimensions.
(c) What is the condition for a series RLC circuit to be overdamped?
(d) Find the quality factor for a parallel RLC circuit. You should find that the quality factor
increases as R is increased – why does this make sense?
Solution. (a) We know that |I0| = |V0|/|Z|, and adding the impedances in parallel gets
1
Z
=
1
R
+
1
iωL
+ iωC
|I0| =
|V0|
ωLR
p
(ωL)2 + R2(1 − ω2LC)2
This gives a graph for a parallel RLC circuit:
ω
|I0|
1/
√
LC
|V0|/R
A series RLC circuit behaves the other way:
ω
|I0|
1/
√
LC
|V0|/R
11

Kevin Zhou Physics Olympiad Handouts
The intuition for a series RLC circuit is just as in M4, i.e. we get the most current when
the system is driven at resonance, and the result is finite at resonance because the resistor
absorbs the energy put in. But a parallel RLC circuit is backwards, because each component
lets current through independently. The resistor’s current contribution is independent of ω.
At high frequencies, a capacitor in parallel can let a lot of current through, because it behaves
like a wire. At low frequencies, an inductor can do the same. But at the resonant frequency,
the contributions of the capacitor and inductor cancel out. Or in more formal language, the
applied voltage excites the normal mode corresponding to the LC oscillation, which moves
zero net current through the power source.
(b) Energy will be stored in the capacitor and inductor, of Q2/2C and 1
2LI2 respectively. As in
any harmonic oscillator, these are equal on average, so the total energy is
E = 2 ×
1
2
L⟨I2
⟩ = L⟨I2
⟩ =
1
2
LI2
0.
The power dissipated in the resistor is I2R, so the average power is
⟨P⟩ = ⟨I2
R⟩ =
1
2
I2
0R.
Since a radian occurs in the time 1/ω,
Q =
E
⟨P⟩/ω
=
ωL
R
=
1
R
r
L
C
where we used ω ≈ 1/
√
LC. To check the dimensions, note that ωL and R are both impedances,
so Q is dimensionless.
(c) Guessing I(t) = I0eiωt in the Kirchhoff loop rule (without power source) gets
iωL + R +
1
iωC
= 0
ω2
LC − iωRC − 1 = 0
ω =
iRC ±
p
4LC − (RC)2
2LC
The oscillator is overdamped when there’s no real component of ω which indicates no sinusoidal
oscillation, so the condition is
R2C
4L
> 1.
In terms of the answer to part (b), this is Q < 1/2, and the requirement of a low quality factor
makes sense. (However, we usually wouldn’t describe such lossy systems in terms of a quality
factor at all.)
(d) In the analysis for part (b), we used the fact that the current through each part of the series
RLC circuit is equal. For the parallel RLC circuit, we use the fact that the voltages are equal.
The average energy is
E = 2 ×
1
2
C⟨V 2
⟩ = C⟨V 2
⟩ =
CV 2
0
2
.
12

Kevin Zhou Physics Olympiad Handouts
The power dissipated in the resistor is V 2/R, so the average power is
⟨P⟩ = ⟨V 2
/R⟩ =
V 2
0
2R
.
Since a radian occurs in the time 1/ω,
Q =
E
⟨P⟩/ω
= ωRC = R
r
C
L
.
This is the inverse of the quality factor of a series RLC circuit. It makes sense that the quality
factor increases as R increases, because for very high R almost no current flows through the
resistor. It’s just the AC analogue of the usual result in DC circuits: since P = I2R = V 2/R,
high-resistance resistors dissipate more when in series, and less when in parallel.
Example 6: NBPhO 2018.7
Consider the following AC circuit.
The voltage difference between D and E has amplitude VDE = 7V. Similarly, VDF = 15V
and VEF = 20V. What is the magnitude of V0?
Solution
Treat the voltages as phasors, and let VA = 0, so VB = V0. Then VAF is perpendicular to
VFB, which means that VF lies on the circle centered at V0/2 with radius V0/2. The exact
same logic applies for VE and VD. Therefore, we know that VDE, VDF and VEF form the
three sides of a triangle, where the desired answer is the diameter of its circumcircle.
For a triangle with side lengths a, b, and c, and a circumcircle of radius R, Heron’s formula
states that the area is
A =
p
p(p − a)(p − b)(p − c), p =
1
2
(a + b + c).
The area is also given by
A =
abc
4R
.
13

Kevin Zhou Physics Olympiad Handouts
Solving for the diameter, we have
2R =
abc
2
p
p(p − a)(p − b)(p − c)
= 25V.
These geometric steps aren’t that important; the key idea is thinking in terms of phasors.
[2] Problem 8 (Purcell 8.26). The four curves shown below are plots, in some order, of the applied
voltage and the voltages across the resistor, inductor, and capacitor of a series RLC circuit.
R, L, C, E
t
t
t
t
Which is which? Whose impedance is larger, the inductor’s or the capacitor’s?
Solution. We have VR = RI, VL = (iωL)I, and VC = 1
iωC I. Thus, the graph of VL is shifted by
π/2 to the left of that of I, and VC is shifted by π/2 to the right. The first, second, and fourth
graphs are shifted relative to each other by multiples of π/2, so we conclude
the first graph is VR, the second graph is VC, the fourth graph is VL
from which we find by process of elimination that
the third graph is E.
Note that when the inductor and capacitor have equal impedance, E and I ∝ VR are in phase. When
the inductor has a higher impedance, E looks more like VL, which “leads” the current. When the
capacitor has a higher impedance, E looks more like VC, which “lags” the current. By comparing
the first and third graphs, we see the phase of E slightly leads the current, so the inductor has
higher impedance.
[2] Problem 9 (PPP 170). Consider each of the following circuits.
V0 cosωt
L
L
C
C
(a)
V0 cosωt
L
C
L
C
(b)
14

Kevin Zhou Physics Olympiad Handouts
In each case, find the amplitude of the current drawn from the source as a function of ω/ω0, where
ω0 = 1/
√
LC.
Solution. We deal with each case separately.
(a) We see that the top two inductors are in parallel, and the bottom two capacitors are also in
parallel, with the two systems being in series. Thus, the net impedance is
Z =
1
2

iωL +
1
iωC

,
which has magnitude 1
2ωC |(ω/ω0)2 − 1|. Thus,
|I| =
V0
|Z|
=
2ω0CV0(ω/ω0)
|(ω/ω0)2 − 1|
.
(b) The impedance here is
Z = 2
1
iωC + 1
iωL
,
so |Z| = 2ωL
|ω2/ω2
0−1|
, so
|I| =
V0
|Z|
=
ω0CV0|(ω/ω0)2 − 1|
2(ω/ω0)
.
[3] Problem 10 (BAUPC 2024). Consider the following RLC circuit.
V0 cosωt
The capacitors have capacitance C, the inductors have inductance L, and the resistors have resistance
R =
p
L/C. Furthermore, the driving angular frequency is ω = 1/
√
LC. Find the amplitude of the
total current through the circuit.
Solution. See the official solutions as usual.
[3] Problem 11 (USAPhO 2026). Consider an LC circuit of resonant angular frequency ω0 involving
a long solenoid of inductance L. The solenoid is tightly wound around a thin conducting cylindrical
shell of radius a, thickness t ≪ a, conductivity σ, and length ℓ.
(a) Assuming the shell provides the only energy loss in the circuit, and σ is sufficiently small, find
the quality factor in terms of ω0, σ, t, a, and L.
(b) Why does your answer to part (a) break down in the limit σ → ∞?
15

Kevin Zhou Physics Olympiad Handouts
Solution. (a) This is part (b) of USAPhO 2026, problem B3, and the answer is Q = 2/(µ0σtaω0),
where L happens to drop out. The interesting feature is that the quality factor depends on
frequency, as does the associated effective resistance Reff = ω0L/Q.
People often get used to assuming resistance is frequency-independent, since it’s literally
printed onto the resistors used in introductory labs. But in a realistic high-quality LC circuit,
there will be multiple contributions to the effective resistance, which all depend on frequency.
(b) As σ → ∞ we expect there to be no energy dissipation, but if you plug this into the result of
part (a), you’ll get Q → 0, or Reff → ∞.
The resolution is the “skin effect”. From E1, we know that a conductor sets the static electric
field inside itself to zero. For oscillating fields, it turns out the electric field is still shielded: it
drops to zero as you go a distance δ ∼ 1/
√
σω0µ0 into the material, called the skin depth. In
part (a), you tacitly assumed δ ≫ t, so that this effect could be neglected. But as σ → ∞, we
get δ ≪ t and the solenoid’s induced electric field gets mostly expelled from the shell. When
we account for this, we get a sensible result Q ∝
√
σ.
By the way, in practice σ itself will depend on both frequency and temperature. This is the
sort of thing that one must account for in precision physics experiments with LC circuits.
[3] Problem 12.   W 1 0USAPhO 2002, problem A1.
[3] Problem 13.   m 1 0USAPhO 2011, problem B1.
3 Electrical Engineering
These next problems are about using RLC circuits for practical purposes. They don’t require
anything not already introduced in the previous section, but they represent a different way of
thinking that it’s crucial to get comfortable with.
[2] Problem 14 (Feynman). In electronic circuits it is often desired to provide a sinusoidal voltage of
constant amplitude but variable phase. A circuit which accomplishes this is called a phase-shifting
network. One example is shown below.
R
R
R′
C
A B Vin
Vout
Show that the voltage measured between terminals A and B has half the amplitude of the input
voltage, and a phase which may be adjusted by changing the resistance R′.
Solution. Note that the current in the left branch is I1 = Vi/2R, so VA = Vi − I1R = Vi/2. We
see that
VB = Vi − R′ Vi
R′ + 1
iωC
= Vi 1 −
1
1 + 1
iωCR′
!
.
Thus,
VB − VA = Vi
1
2
−
1
1 + 1
iωCR′
!
=

−
Vi
2

1 − 1
iωCR′
1 + 1
iωCR′
.
16

Kevin Zhou Physics Olympiad Handouts
We thus have |VB −VA| = Vi/2, and the remaining fraction is eiϕ with ϕ = 2tan−1(1/ωCR′), which
can be adjusted to give any phase.
[3] Problem 15 (Kalda). The figure below shows a Maxwell’s bridge, which is used for measuring the
inductance L and resistance R of a coil.
To do this, the angular frequency ω is fixed and the known parameters R1, R2, RC, and C are
adjusted until the voltmeter reads zero. Once this is done, find R and L in terms of the other
parameters.
Solution. Suppose the unknown coil has overall impedance Z. It suffices to find Z. We see that
the voltage at the top end of the voltmeter is
V1 = E
R1
Z + R1
.
Let ZC = 1
1
RC
+iωC
denote the impedance of the resistive capacitor compound. The voltage at the
other end of the voltmeter is then
V2 = E
ZC
ZC + R2
.
We have V1 = V2, so Z/R1 + 1 = 1 + R2/ZC, so
Z = R1R2(1/RC + iωC).
On the other hand, we also have Z = R + iωL, so we can read off the answers,
R = R1R2/RC, L = R1R2C.
[5] Problem 16. An alternating voltage V0 cosωt is applied to the terminals at A. The terminals at
B are connected to an audio amplifier of very high input impedance. (That is, current flow into the
amplifier is negligible.)
V0 V1
A B
R
C
This circuit is the most primitive of “low-pass” filters.
(a) Calculate the “gain” ratio |Ṽ1|/V0 in this filter. Show that for sufficiently high frequencies,
the signal power is reduced by a factor of 4 for every doubling of the frequency.
(b) Design a low-pass filter without using a capacitor.
(c) Design a high-pass filter.
17

Kevin Zhou Physics Olympiad Handouts
(d) Design a stronger low-pass filter, i.e. one which reduces the signal power by a greater factor
for every doubling of the frequency.
(e) Design a band-pass filter, which suppresses both low and high frequencies, but has a constant
gain for a wide range of medium frequencies. (It’s okay if the constant gain is less than 1, as
we can just pass the output through an amplifier.)
(f) Design a notch filter, which suppresses a very small range of frequencies, while letting all other
frequencies through.
Solution. (a) Letting the bottom be V = 0, we have |V1| = I|XC| and I = V0/|XC + R|. Then
g =
|V1|
V0
=
|XC|
|XC + R|
=
1
√
ω2R2C2 + 1
.
For high frequencies, V1 ≈ V0/ωRC, so the signal power V 2
1 /Z1 ∝ 1/ω2, so doubling the
frequency will reduce the power by a factor of 4.
(b)
V0 V1
A B L
R
(c) Here’s one possible answer. You could also take the low-pass filter in part (a) and switch the
locations of the capacitor and resistor.
V0 V1
A B R
L
(d) This is the simplest answer, requiring only two circuit elements. Note that it works at
ω ≫ 1/
√
LC, while at ω = 1/
√
LC there is a resonant peak instead of a suppression.
V0 V1
A B L
C
You can also chain two low pass filters, but that requires more circuit elements. Also, in order
for that to work properly, you will need the resistance of the second low pass filter to be much
higher than the first, for the reason discussed in the solution to part (e).
(e) Attach a low pass filter to the output of a high pass filter to get a band-pass filter. There
will then be a region in the middle with constant gain. For this to work straightforwardly,
it is essential that the addition of the low pass filter doesn’t affect the voltage output of the
high pass filter, so that we can just multiply the gains. This occurs if the low pass filter
draws negligible current from the output. (In terms of the example filters above, we need the
resistance in the low pass filter to be much higher than the resistance in the high pass filter.)
18

Kevin Zhou Physics Olympiad Handouts
Another option would be to attach the output to the resistor in a series RLC circuit, but then
the “band” region would be too narrow.
(f) To suppress a certain frequency, make a circuit that looks like this:
V0 V1
A B R
L
C
[4] Problem 17. @ 1 0IPhO 1984, problem 3. A nice, short problem on filters.
[2] Problem 18. Consider the same setup as problem 16, but with the resistor and capacitor switched.
(a) Assuming that V1 ≪ V0, show that the output voltage is proportional to the derivative of the
input voltage. Hence the circuit is a differentiator. (Can you relate this to the kind of filtering
such a setup does?)
(b) Design a circuit whose output is proportional to the integral of V0, again assuming V1 ≪ V0.
Solution. (a) The output voltage will be
V1 = V0
ωRC
√
ω2R2C2 + 1
.
V1 ≪ V0 means that ωRC ≪ 1, so V1 ≈ V0ωRC. Since dV0/dt ∝ ωV0, we see that both V1
and dV0/dt are proportional to ωV0. Since higher frequencies are emphasized, it’s also a high
pass filter.
(b) Now we want V1 ∝ V0/ω. Since the XL ∝ ω and XC ∝ 1/ω, and we’re looking for the opposite
effect, it would make sense to try replacing the capacitor with an inductor.
V1 = V0
R
p
R2 + (ωL)2
.
For V1 ≪ V0, which indicates R ≪ ωL, we get V1 = V0R/ωL, which gets V1 ∝ V0/ω as desired.
This is also a low pass filter.
[3] Problem 19. A resonant cavity of the form illustrated below is an essential part of many microwave
oscillators. It is a single piece of metal, which can be treated like an LC circuit.
19

Kevin Zhou Physics Olympiad Handouts
(a) Assuming that s ≪ a,b,h, estimate the lowest resonant angular frequency of the cavity by
treating it as an LC circuit. It may be helpful to sketch the magnetic and electric fields.
(b) One of the most common types of cavity is a cylindrical cavity, i.e. a hollow cylinder. (It
corresponds to taking s = h in the above setup.) Assuming that h ≈ b, find a reasonable
estimate of the lowest resonant angular frequency ω.
Solution. (a) The top of the small internal cylinder forms a small parallel plate capacitor with
the top, with capacitance
C = ϵ0
πa2
s
.
Meanwhile, the entire rest of the cavity looks like a toroidal solenoid with one turn, which we
already know has an inductance of
L =
µ0h
2π
log
b
a
.
Therefore we have
ω =
1
√
LC
=
1
q
µ0h
2π log(b/a)ϵ0(πa2)/s
=
c
a
s
2s
hlog(b/a)
where c is the speed of light. The fields are sketched below.
(b) If we just plug in s = h above, we get
ω =
c
a
s
2
log(b/a)
.
However, this result is nonsense, because it depends on a, which has no physical meaning
when s = h. The problem is that our heuristic picture in (a) of how the current and charge is
distributed only makes sense for s ≪ h.
A complete and rather complicated analysis would show that the lowest resonant angular
frequency is
ω = c min 1.841

1
b2
+
2.912
h2
 1/2
,
2.405
b
!
.
In this case, we can get close by dimensional analysis, which tells us that ω ∼ c/b, since b is
the only length scale in the problem. (Recall that we assumed h ≈ b.)
20

Kevin Zhou Physics Olympiad Handouts
Remark
In E3, we saw that for DC circuits, any system of resistors and ideal batteries with two ports
is equivalent, from the perspective of anything connected across the ports, to either a single
resistor and ideal battery in series (the Thevenin equivalent), or a single resistor and ideal
current source in parallel (the Norton equivalent). From the ideas covered in this problem
set, we also know that any system of resistors, inductors, and capacitors with two ports is
equivalent, at a fixed angular frequency ω, to a single lumped element with impedance Zeq.
This in turn could be constructed out of a single resistor and inductor or capacitor in series.
This naturally leads to a more general question: it is possible to construct a simple
“equivalent” circuit that has exactly the same Zeq(ω), for all ω? The answer is yes. For
example, consider the simple case of a circuit of only inductors and capacitors. Here’s the
rough idea: in this case, the equivalent impedance is always a pure imaginary, rational
function of ω, meaning a ratio of two polynomials in ω. But rational functions can always
be expanded in partial fractions. Assuming no multiple roots for simplicity, each term in the
partial fraction decomposition can be mimicked with an LC circuit, and we get the sum by
placing these circuits in series.
In electrical engineering, the general task of constructing a circuit with a prescribed Z(ω) is
called network synthesis; the above example is called Foster’s synthesis. These techniques
can be used to construct filters more elaborate than the ones you explored in problem 16.
Remark
Power companies often transmit electricity with “three-phase power”. This means that there
are three “hot” electrical lines, carrying voltages
V1(t) = V0 cos(ωt), V2(t) = V0 cos(ωt + 2π/3), V3(t) = V0 cos(ωt + 4π/3).
There are several advantages to three-phase power, but one is that it supplies a constant
power, as V 2
1 + V 2
2 + V 2
3 is constant.
An ordinary American wall outlet has three holes, arranged like a face. The smaller eye is
the “hot” one, with voltage V1(t), while the larger eye and the mouth are both grounded.
Appliances are powered by the voltage difference between the eyes. Appliances that use
significant power and have metal exteriors have three-prong plugs. Here, the mouth is
connected directly to the exterior of the appliance, ensuring that it can’t shock you, even if
something goes wrong inside. If you live in an apartment building, you might also have special
power outlets meant for very power-intensive appliances like dryers and heaters. In these
outlets, one hole has voltage V1(t) and another has V2(t), giving an AC voltage difference of
amplitude
√
3V0.
21

Kevin Zhou Physics Olympiad Handouts
4 Normal Modes
Idea 4
A circuit with n independent loops has n normal modes. If we ignore resistances, the normal
modes are pure sinusoids, though in all real circuits they exponentially damp over time. Just
as in mechanics, the general solution for the behavior of a driven circuit is a superposition of
normal mode currents and the response to the driving.
There are many ways to find the normal mode frequencies.
• One way is to pick any two points not directly connected by wires. We may imagine that
across these points we have attached a current source ˜ I which is doing nothing, ˜ I = 0. If a
normal mode is present at angular frequency ω, then we can have Ṽ ̸= 0, even though ˜ I = 0
because current is merely sloshing around inside the circuit. Thus, the equivalent impedance
Z(ω) between these points is infinite.
• Another way is to pick two points directly connected by wires. We may imagine this wire is
actually a voltage source Ṽ which is doing nothing, Ṽ = 0. If a normal mode is present at
angular frequency ω, then we can have a current ˜ I ̸= 0 through the wire even though Ṽ = 0,
so the equivalent impedance Z(ω) between these points is zero.
• Some LC circuits can be mapped to sets of masses and springs using the analogies in idea 1,
which can help with guessing the normal modes.
• Finally, one may simply write down all of Kirchhoff’s loop equations, plug in eiωt time de-
pendence, and look for a solution. This boils down to solving a system of n equations, or
equivalently evaluating the determinant of an n × n matrix. This is rarely the best approach
on an Olympiad.
• Not every problem benefits from using normal modes; for relatively simple circuits with special
initial conditions, it may be better to solve Kirchhoff’s loop equations directly.
Example 7: Kalda 89
Find the normal mode frequencies of the circuit below.
22

Kevin Zhou Physics Olympiad Handouts
Solution
There are four independent Kirchhoff’s loop equations, so we expect four normal modes.
One normal mode consists of current simply flowing uniformly along the outside, along the
inductors. Since the capacitors aren’t involved, this normal mode has ω0 = 0.
Now we apply the first technique listed above: we pick two points not directly connected
with wires, and set the impedance to infinity. By symmetry, it’s best to pick A and D.
By symmetry, if any voltage is applied between A and D, the points B and E will be at
the same voltage. Furthermore, this point will be at the same voltage as O, because the
remaining circuit forms a balanced Wheatstone bridge, as introduced in E3. Identifying B,
E, and O straightforwardly gives a simple LC circuit with Leff = (3/2)L and Ceff = (2/3)C,
and resonant angular frequency ω1 = 1/
√
LeffCeff = 1/
√
LC.
This procedure only gave one of the three remaining normal modes, so we must have missed
the other two because they have zero voltage difference between A and D. Therefore, to find
the other two, we can join A and D, leading to the simpler equivalent circuit below.
We now apply the same procedure between points B and E. This circuit is again a balanced
Wheatstone bridge, so O and A are at the same voltage. We then have a simple LC circuit
with Leff = (4/3)L and Ceff = C, giving ω2 =
p
3/4LC.
Again, we’ve missed a normal mode, so that remaining mode must have zero voltage difference
between B and E. Joining them together leads to the final equivalent circuit below.
This is now a simple LC circuit with Leff = (1/3)L and Ceff = (12/7)C, giving the final
resonant angular frequency ω3 =
p
7/4LC.
[2] Problem 20 (Kalda). Consider the LC circuit below.
23

Kevin Zhou Physics Olympiad Handouts
Show that the normal mode angular frequencies are ω = (
√
5 ± 1)/2
√
LC.
Solution. We set the impedance between the two ends of the bottom left wire to be 0, so
iωL +
1
iωC
+
1
iωC + 1
iωL
= 0.
Let a = iωL and b = 1
iωC . We have a + b + 1/(1/a + 1/b) = 0, so (a/b)2 + 3(a/b) + 1 = 0, so
ω2LC = −a/b = 3±
√
5
2 . But note (
√
5±1)2 = 2(3±
√
5) = 4ω2LC, which shows ω = (
√
5±1)/2
√
LC.
[3] Problem 21 (IPhO 2014). Initially, the switch S is open in the circuit shown below.
The capacitor with capacitance 2C is given a charge q0, and immediately begins to discharge. At
the moment when the current through the inductors reaches its maximum value, the switch S is
closed. Find the maximum current through the switch thereafter.
Solution. See the official solution to IPhO 2014, problem 1(c).
[5] Problem 22 (Physics Cup 2012). Find the angular frequencies of the normal modes of the circuit
below, where C1 ≪ C2 and L1 ≪ L2.
You may give all of your answers to lowest order in C1/C2 and L1/L2.
Solution. See the solutions here.
24

Kevin Zhou Physics Olympiad Handouts
5 Nonlinear Circuit Elements
In this section we’ll introduce nonlinear circuit elements, focusing on diodes. More exotic circuit
elements will be covered in E7.
Idea 5
Many nonlinear circuit elements can be described by a current-voltage characteristic I(V ).
Such circuit elements have trivial time dependence, just like resistors, and working with
them basically amounts to using Kirchhoff’s laws as usual, plugging in I(V ) where necessary.
Since the implementation details of such elements can be very complicated, and many draw
power from external sources, it generally isn’t productive to think of them “physically”; they
are more like miniature computers than physical objects. One just has to take I(V ) as given
and work directly with it. Some simple examples are:
• An ideal diode acts like a wire in one direction and a break in the other, so it has
I(V ) =
(
∞ V > 0,
0 V < 0.
• Sometimes one instead takes the I(V ) characteristic
I(V ) =
(
∞ V > V0,
0 V < V0
which means that it “costs” voltage V0 to go through the diode in the forward direction.
More realistically, I(V ) smoothly increases when V passes V0, but you don’t often see
this in Olympiad problems because it makes the math very messy.
• Zener diodes can allow current in both directions. An idealized bidirectional diode has
I(V ) =

 
 
∞ V > V0,
0 −V0 < V < V0,
−∞ V < −V0.
• Many familiar objects such as fuses (wires which break when I passes a threshold)
and spark gaps (breaks that conduct when V passes a threshold) can be thought of as
nonlinear circuit elements in the same way.
Analytically, these three cases are easily handled by casework. For instance, a diode acts just
like a wire for positive V , and just like a break for negative V . In each case, the circuit is no
more complicated than an ordinary one with linear circuit elements. Then you put the cases
together to get the full behavior.
25

Kevin Zhou Physics Olympiad Handouts
Example 8
A capacitor of capacitance C is charged so that its voltage is Vc. The capacitor is placed in
series with a resistor R and a diode with I(V ) characteristic
I(V ) =
(
∞ V > V0,
0 V < V0.
The diode is oriented so that the initial voltage across it is positive. How does the voltage
across the capacitor change over time?
Solution
If Vc < V0, the voltage on the capacitor is not enough to get current to flow through the
diode, so nothing happens. If Vc > V0, current flows, at the cost of a voltage drop V0 across
the diode. Then we can simply replace the diode with a battery of emf V0 oriented in the
opposite direction. This system is equivalent to an ordinary RC circuit with battery, with
the capacitor initially charged to higher than V0. The extra voltage exponentially decays,
V (t) = (Vc − V0)e−t/RC
+ V0
so that in the limit t → ∞, the capacitor voltage approaches V0 and the current stops.
Idea 6
It is difficult to solve a nonlinear circuit analytically if I(V ) is not very simple. In these cases:
• One can find the answer graphically as the intersection of I(V ) and another curve.
• One can solve for the answer iteratively on a calculator.
• If V stays within a narrow range, one can take a linear approximation to I(V ). This
effectively replaces the element with a battery in series with a resistor, so the problem
can be solved just like those in E3.
[1] Problem 23 (Kalda). Find the current in the circuit given below.
The nonlinear element is a diode with the I(V ) characteristic shown.
Solution. We simply draw the line V (I) = 1.5V−(100Ω)I on the graph and find the intersection,
which gives I ≈ 8mA.
26

Kevin Zhou Physics Olympiad Handouts
Idea 7
The power delivered to any circuit element is still P = IV . However, some nonlinear circuit
elements can be active, providing net power to the circuit, like batteries.
Example 9: Kalda 64
The circuit below containing an ideal diode makes it possible to charge a rechargeable battery
of voltage E = 12V with a direct voltage source of a voltage V0 = 5V < E.
To do this, the switch K is periodically opened and closed, with the opened and closed periods
having equal length τ = 10ms. Find the average charging current assuming L = 1H.
Solution
This system is called a boost converter. The point is that, using an inductor and a switch,
one can generate emfs larger than what we put in, because the current wants to keep
flowing through the inductor when the switch is opened; this allows us to get enough
emf to charge the battery. This idea is also used in the ignition coils of old-fashioned
cars, where a voltage large enough to ionize air is produced, making a spark and starting
the engine. There’s also a fluid analogue, called the hydraulic ram, used to raise water.
The diode’s role is just to keep current from flowing backward during the otherhalf of the cycle.
When the switch is closed, no current can flow through the battery, and the current through
the inductor builds up linearly, since there is an emf V0 across the inductor. When the switch
is opened, the emf across the inductor is V0 − E = −7V, causing its current to decrease
while simultaneously charging the battery. After a time (5/7)τ with the switch open, the
current through the inductor falls to zero, and the diode causes current to stop flowing.
Quantitatively, while the switch is closed, the current through the inductor builds up to
V0τ/L. When the switch is open, current flows for a time (5/7)τ, linearly falling to zero, so
the total charge is
Q =
1
2
V0τ
L
5
7
τ.
A cycle takes time 2τ, so
I =
Q
2τ
=
5
28
V0τ
L
= 8.9mA.
By the way, your phone and laptop chargers probably have rectangular bricks containing a
switched-mode power supply. This consists of one part that converts the AC wall power to
DC, and a second part similar to the circuit above, but set up to output a lower DC voltage.
You could also use a transformer to lower the AC voltage, but a switch-mode power supply
is more space-efficient, and it easily copes with a range of input AC voltages and frequencies.
27

Kevin Zhou Physics Olympiad Handouts
[3] Problem 24. NBPhO 2010, problem 9. You should assume that Ui and Uo are positive, and that
in part (i) the currents are initially zero.
[3] Problem 25 (Kalda). An alternating voltage V = V0 cos(2πνt) is applied to the leads of the circuit
shown below. Treat the diode as ideal.
Assuming the current in the inductor begins at zero, what is the average current through the
inductor at late times?
Solution. Since ωL ≫ R, the inductor’s current changes very slowly, so we can neglect its change
over any one cycle. During some cycle, let’s write the steady state current in the inductor as
IL = α(V0/R)
where α = 0 in the beginning. Let the current through the resistor be IR. The current through
the diode is ID = IL + IR. When the diode lets current through, ID > 0, the voltage across the
inductor is
VL = V0 cos(2πνt).
During this time, the current through the diode is a shifted sinusoid,
ID = IL +
V0
R
cos(2πνt).
The diode blocks current once ID falls to zero. Thus, for α = 0 the diode is blocking half the time,
while for α = 1 the diode is never blocking. The situation for α ≈ 0.5 is shown below.
t
I
ID
IR
When the diode is blocking, the voltage across the inductor is
VL = IRR = −ILR.
The net change in IL in one cycle is
∆IL =
1
L
Z
cycle
VL dt.
28

Kevin Zhou Physics Olympiad Handouts
In the beginning, when α = 0, this integral is positive because VL(t) looks like a sinusoid but with
only the positive parts. As α increases, the integral begins to pick up part of the negative half of
the sinusoid, but the overall integral is still positive, so α continues to increase. The final steady
state is when α = 1 and the current flows all the time. At this point, IL = V0/R = 1A.
[3] Problem 26. NBPhO 2008, problem 6.
[3] Problem 27. NBPhO 2013, problem 8. A circuit with a nice mechanical analogy.
[3] Problem 28.   Y 1 0IPhO 2001, problem 1c.
[3] Problem 29.   ^ 1 0USAPhO 2018, problem A2.
[4] Problem 30. @ 1 0EuPhO 2022, problem 2.
29
