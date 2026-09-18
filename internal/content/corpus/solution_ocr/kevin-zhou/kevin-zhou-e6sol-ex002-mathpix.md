---
id: solution-ocr-kevin-zhou-e6sol-ex002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e6-ex002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 2
An ideal battery of voltage $\mathcal { E }$ is suddenly connected to an ideal capacitor. After a short time, the capacitor has energy $U$. How much energy has been released by the battery?

Solution
This is a variant of the two capacitor paradox, which has essentially the same solution. First let's consider how the capacitor is charged up over time. Naively, since there's no resistance or inductance, the current in the circuit instantly becomes infinite, then instantly shuts off. This isn't realistic: to understand what's actually going on, we have to account for nonideal features of the circuit, such as resistance or self-inductance. For example, if the resistance dominates (overdamping), the capacitor charges up monotonically, as in an $R C$ circuit. If the inductance dominates (underdamping), the capacitor voltage oscillates about $\mathcal { E }$, until eventually settling down due to the resistance.

At the end, the total energy on the capacitor is

$$
\int V _ { C } d Q = C \int _ { 0 } ^ { \mathcal { E } } V _ { C } d V _ { C } = \frac { 1 } { 2 } C \mathcal { E } ^ { 2 } = \frac { 1 } { 2 } \mathcal { E } Q
$$

where $Q$ is the total charge. But the work done by the battery is

$$
\int \mathcal { E } d Q = \mathcal { E } Q
$$

so the battery has released energy $2 U$. Evidently, half of it is lost, no matter how close to "ideal" the circuit is! If the tiny resistance dominates, it is lost to heat in the circuit. If there's no resistance, then it's lost to electromagnetic radiation emitted from the circuit, which provides an effective "radiation resistance". (And if we enclosed a superconducting circuit in a perfect cavity so that it can't radiate, then it would ideally perform LC oscillations forever, so it never settles down to the steady voltage described in the problem.)

In fact, this is just another example of the nonadiabatic processes you saw in T1. Instantly attaching a battery is the same kind of thing as instantly dropping a piston, and letting it bounce until it comes to a stop. Just like those nonadiabatic processes, attaching the battery in this way creates entropy; if the circuit and environment have temperature $T$, then

$$
\Delta S = \frac { \Delta Q } { T } = \frac { \mathcal { E } Q } { 2 T } .
$$

We can avoid wasting energy and producing entropy if we use an adjustable battery and gradually turn its voltage up, slowly enough so that the circuit is always near equilibrium. This is the electrical analogue of a smooth, adiabatic compression.


Remark
Suppose you wanted to account for the nonideal properties of a capacitor. In principle, the only way to get the answer exactly is to treat all the fields with Maxwell's equations and all the charges with Newton's laws. But we can often mimic nonideal effects by just adding resistors to the circuit. This has the benefit of staying within the "lumped element abstraction", where we can solve for everything with Kirchhoff's laws, which are much simpler.

But where should we add the resistors? It depends on what nonideal effect we're trying to model. For example, if we want to account for the resistance of the wires, we should add a small resistance in series with the capacitor. But if instead the capacitor is slightly leaky, we should instead add a large resistance in parallel with the capacitor. If both effects are important, we should add both. And if radiation is the main way energy is lost, this can't be modeled like a simple resistor, because the amount of radiated power depends on the rate of change of the current, not the current itself. However, it can be modeled as a real, frequency-dependent contribution to the impedance.

[3] Problem 1 (Purcell 7.46). We have found that in an LR circuit the current changes on the timescale $L / R$. In a large conducting body such as the metallic core of the Earth, the "circuit" is not easy to identify. Nevertheless, we can estimate the decay time. Suppose the current flows in a solid doughnut of square cross section, as shown, with conductivity $\sigma$.
![](../../../figures/solution-ocr/509351588d67f69d8072f7d5.jpg)
The current is spread out in some way over the cross section.
    (a) Make a rough estimate of the resistance and inductance. For the latter, it may be easiest to estimate the magnetic field at the center of the doughnut first, then use that to estimate the total magnetic field energy.
    (b) With these results, show that $\tau \sim \mu _ { 0 } a ^ { 2 } \sigma$, which also follows from dimensional analysis.
    (c) Given that the radius of the Earth is $r \sim 3000 \mathrm {~km}$ and $\sigma \sim 10 ^ { 6 } ( \Omega \cdot \mathrm {~m} ) ^ { - 1 }$, estimate $\tau$.

Solution. (a) We estimate

$$
R \sim \frac { 1 } { \sigma } \frac { \text { length } } { \text { cross-sectional area } } \sim \frac { 1 } { \sigma } \frac { a } { a ^ { 2 } } \sim \frac { 1 } { \sigma a } .
$$

The magnetic field at different points is on order $\mu _ { 0 } I / a$, so the magnetic energy is

$$
U _ { B } \sim \frac { 1 } { 2 \mu _ { 0 } } \left( \mu _ { 0 } I / a \right) ^ { 2 } a ^ { 3 }
$$

and equating this to $L I ^ { 2 } / 2$ gives $L \sim \mu _ { 0 } a$.


(b) Combining these two gives $\tau \sim L / R \sim \mu _ { 0 } a ^ { 2 } \sigma$, as desired.
(c) Plugging in the numbers gives $\tau \sim 3 \times 10 ^ { 5 }$ years. This is much shorter than the Earth's life, so some energy source must actively drive the core.
[2] Problem 2 (PPP 171). A circuit contains three identical lamps (modeled as resistors) and two identical inductors, as shown.
![](../../../figures/solution-ocr/650c8ebd9a90410d61732ce2.jpg)
The switch $S$ is closed for a long time, then suddenly opened. Immediately afterward, what are the relative brightnesses of the lamps?
Solution. After a long time with the switch closed, the inductors act like short circuits, so the currents in the bulbs are the same. Let this current be $I$. Then the currents in the two inductors are $2 I$ and $I$.
When the switch is opened, the currents in the inductors remain the same, since they resist changes in current. This means the currents through the resistors are now $2 I , I$, and $I$. Since $P = I ^ { 2 } R$, the left bulb is 4 times brighter than the other two.
[3] Problem 3 (Kalda). A capacitor $C$ and resistor $R$ are connected in series. Rectangular voltage pulses are applied, as shown below.
![](../../../figures/solution-ocr/878af93750f5fbca890e5175.jpg)
After a long time, find the average power dissipated on the resistor if (a) $T \gg R C$ and (b) $T \ll R C$.
Solution. (a) In this case, there is sufficient time for the capacitor to reach equilibrium each time the voltage switches. The energy dissipated during a switch is
$$
U = \int I V d t = \int V d Q .
$$
During a switch, the voltage across the resistor goes from $V _ { 2 } - V _ { 1 }$ to zero linearly in the charge, while the total charge transferred is $\Delta Q = \left( V _ { 2 } - V _ { 1 } \right) C$. Thus,
$$
U = \bar { V } _ { R } \Delta Q = \frac { 1 } { 2 } \left( V _ { 2 } - V _ { 1 } \right) ^ { 2 } C .
$$
This happens every time $T / 2$, so
$$
\bar { P } = \frac { \left( V _ { 2 } - V _ { 1 } \right) ^ { 2 } C } { T } .
$$

(b) In this case, the charge on the capacitor barely changes during each cycle. The average voltage across the capacitor is $\left( V _ { 1 } + V _ { 2 } \right) / 2$. Hence the magnitude of the voltage across the resistor is always approximately equal to $\left( V _ { 2 } - V _ { 1 } \right) / 2$, so
$$
\bar { P } = \frac { V _ { R } ^ { 2 } } { R } = \frac { \left( V _ { 2 } - V _ { 1 } \right) ^ { 2 } } { 4 R } .
$$
If you're curious, the answer for general $T$ is $C \left( V _ { 2 } - V _ { 1 } \right) ^ { 2 } \tanh ( T / ( 4 R C ) ) / T$.

Remark
Out of all the analogies mentioned above, why is capacitance defined "backwards", so that $C \sim 1 / k$ ? I actually have no idea, but one possibility is that large quantities should intuitively correspond to large objects. An object has to be physically large (and thereby expensive) to have a high $C$ or a high $L$, and you can easily see this on a circuit board. (Of course, this doesn't explain everything; the largest $R$ you can get is just a break in the circuit, which is neither large nor expensive.)

Another difference in the analogies is that for circuits we usually measure $I ( t )$, analogous to $v ( t )$, while for mechanical oscillators we usually measure $x ( t )$. The frequencies at which the amplitudes of $x ( t )$ and $v ( t )$ are maximized slightly differ, as discussed in M4, so there's a little ambiguity when people talk about "the" resonant frequency.

We now consider some problems involving mutual inductance.
Example 3: Griffiths 7.57
Two coils are wrapped around a cylindrical form so that the same flux passes through every turn of both coils, i.e. so that the mutual inductance is maximal. In practice this is achieved by inserting an iron core through the cylinder, which has the effect of forcing the magnetic flux to stay inside the cylinder.
![](../../../figures/solution-ocr/163ab67e213cc799dbe5ca5d.jpg)
The "primary" coil has $N _ { 1 }$ turns and the secondary has $N _ { 2 }$. If the current $I$ in the primary is changing, show that the $\operatorname { emf } \mathcal { E } _ { 2 }$ in the secondary obeys

$$
\frac { \mathcal { E } _ { 2 } } { \mathcal { E } _ { 1 } } = \frac { N _ { 2 } } { N _ { 1 } }
$$

where $\mathcal { E } _ { 1 }$ is the (back) emf of the primary.


Solution
Let $\Phi$ be the flux through a single loop of either coil due to the current in the primary. Then

$$
\Phi _ { 1 } = N _ { 1 } \Phi , \quad \Phi _ { 2 } = N _ { 2 } \Phi .
$$

By Faraday's law,

$$
\mathcal { E } _ { 1 } = - N _ { 1 } \frac { d \Phi } { d t } , \quad \mathcal { E } _ { 2 } = - N _ { 2 } \frac { d \Phi } { d t }
$$

which gives the desired result. This is a primitive transformer, a device for raising or lowering the emf of an alternating current source. By choosing the appropriate number of turns, any desired secondary emf can be obtained.

We can also solve this problem more formally using what we know about inductance, which will also tell us what happens when both currents are nonzero. The emfs obey

$$
\mathcal { E } _ { 1 } = - L _ { 1 } \frac { d I _ { 1 } } { d t } - M \frac { d I _ { 2 } } { d t } , \quad \mathcal { E } _ { 2 } = - L _ { 2 } \frac { d I _ { 2 } } { d t } - M \frac { d I _ { 1 } } { d t } .
$$

We showed in E5 that $L _ { i } = \mu _ { 0 } N _ { i } ^ { 2 } \pi R ^ { 2 } / H$ for a cylindrical solenoid. (Here, $H$ stands for the length of the iron core, since this is the length over which the magnetic field exists.) As you'll show below, the maximum possible value of the mutual inductance, which is achieved by this ideal transformer, is $\sqrt { L _ { 1 } L _ { 2 } }$. Plugging in these results gives

$$
\mathcal { E } _ { 1 } = - \left( \frac { \mu _ { 0 } \pi R ^ { 2 } } { H } \right) \left( N _ { 1 } ^ { 2 } \frac { d I _ { 1 } } { d t } + N _ { 1 } N _ { 2 } \frac { d I _ { 2 } } { d t } \right) , \quad \mathcal { E } _ { 2 } = - \left( \frac { \mu _ { 0 } \pi R ^ { 2 } } { H } \right) \left( N _ { 2 } ^ { 2 } \frac { d I _ { 2 } } { d t } + N _ { 1 } N _ { 2 } \frac { d I _ { 1 } } { d t } \right) .
$$

This tells us the desired result holds for any values of the $d I _ { i } / d t$.
This result is not surprising from the standpoint of Faraday's law. The flux change through any cross-section of the iron core is the same, so the induced emf around any circle around it is the same. Thus, the emf per turn is the same between the coils, $\mathcal { E } _ { 1 } / N _ { 1 } = \mathcal { E } _ { 2 } / N _ { 2 }$, which again gives the desired result.
