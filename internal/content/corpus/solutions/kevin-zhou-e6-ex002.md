---
id: kevin-zhou-e6-ex002
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e6-ex002
solution_type: author
source_document: solution-document-kevin-zhou-e6sol
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E6Sol.pdf."
---

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

µ0πR2
H

N2
1
dI1
dt
+ N1N2
dI2
dt

, E2 = −

µ0πR2
H

N2
2
dI2
dt
+ N1N2
dI1
dt

.
This tells us the desired result holds for any values of the dIi/dt.
This result is not surprising from the standpoint of Faraday’s law. The flux change through
any cross-section of the iron core is the same, so the induced emf around any circle around
it is the same. Thus, the emf per turn is the same between the coils, E1/N1 = E2/N2, which
again gives the desired result.
