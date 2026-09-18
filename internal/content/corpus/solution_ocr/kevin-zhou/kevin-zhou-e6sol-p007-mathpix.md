---
id: solution-ocr-kevin-zhou-e6sol-p007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e6-p007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 7. Consider an RLC circuit with a driving $V ( t ) = V _ { 0 } e ^ { i \omega t }$.

(a) Suppose the resistor, inductor, and capacitor are connected in parallel. Sketch the current $\left| I _ { 0 } \right|$ through the driver as a function of $\omega$, and compare it to the result for a standard series RLC circuit. Can you give a qualitative explanation for the difference?
(b) As we saw in M4, the quality factor for an oscillator quantifies how fast the energy in an undriven oscillator decays away. Specifically,
$$
Q = \frac { \text { average energy stored in the oscillator } } { \text { average energy dissipated per radian } } .
$$
Find the quality factor for a series RLC circuit, and confirm your answer has correct dimensions.
(c) What is the condition for a series RLC circuit to be overdamped?
(d) Find the quality factor for a parallel RLC circuit. You should find that the quality factor increases as $R$ is increased - why does this make sense?

Solution. (a) We know that $\left| I _ { 0 } \right| = \left| V _ { 0 } \right| / | Z |$, and adding the impedances in parallel gets

$$
\begin{gathered}
\frac { 1 } { Z } = \frac { 1 } { R } + \frac { 1 } { i \omega L } + i \omega C \\
\left| I _ { 0 } \right| = \frac { \left| V _ { 0 } \right| } { \omega L R } \sqrt { ( \omega L ) ^ { 2 } + R ^ { 2 } \left( 1 - \omega ^ { 2 } L C \right) ^ { 2 } }
\end{gathered}
$$

This gives a graph for a parallel RLC circuit:
![](../../../figures/solution-ocr/587ded6a5b10230ad432e57c.jpg)
A series RLC circuit behaves the other way:
![](../../../figures/solution-ocr/292fa102393fc7af6745b99a.jpg)


The intuition for a series RLC circuit is just as in M4, i.e. we get the most current when the system is driven at resonance, and the result is finite at resonance because the resistor absorbs the energy put in. But a parallel RLC circuit is backwards, because each component lets current through independently. The resistor's current contribution is independent of $\omega$. At high frequencies, a capacitor in parallel can let a lot of current through, because it behaves like a wire. At low frequencies, an inductor can do the same. But at the resonant frequency, the contributions of the capacitor and inductor cancel out. Or in more formal language, the applied voltage excites the normal mode corresponding to the LC oscillation, which moves zero net current through the power source.
(b) Energy will be stored in the capacitor and inductor, of $Q ^ { 2 } / 2 C$ and $\frac { 1 } { 2 } L I ^ { 2 }$ respectively. As in any harmonic oscillator, these are equal on average, so the total energy is
$$
E = 2 \times \frac { 1 } { 2 } L \left\langle I ^ { 2 } \right\rangle = L \left\langle I ^ { 2 } \right\rangle = \frac { 1 } { 2 } L I _ { 0 } ^ { 2 } .
$$
The power dissipated in the resistor is $I ^ { 2 } R$, so the average power is
$$
\langle P \rangle = \left\langle I ^ { 2 } R \right\rangle = \frac { 1 } { 2 } I _ { 0 } ^ { 2 } R
$$
Since a radian occurs in the time $1 / \omega$,
$$
Q = \frac { E } { \langle P \rangle / \omega } = \frac { \omega L } { R } = \frac { 1 } { R } \sqrt { \frac { L } { C } }
$$
where we used $\omega \approx 1 / \sqrt { L C }$. To check the dimensions, note that $\omega L$ and $R$ are both impedances, so $Q$ is dimensionless.
(c) Guessing $I ( t ) = I _ { 0 } e ^ { i \omega t }$ in the Kirchhoff loop rule (without power source) gets
$$
\begin{gathered}
i \omega L + R + \frac { 1 } { i \omega C } = 0 \\
\omega ^ { 2 } L C - i \omega R C - 1 = 0 \\
\omega = \frac { i R C \pm \sqrt { 4 L C - ( R C ) ^ { 2 } } } { 2 L C }
\end{gathered}
$$
The oscillator is overdamped when there's no real component of $\omega$ which indicates no sinusoidal oscillation, so the condition is
$$
\frac { R ^ { 2 } C } { 4 L } > 1 .
$$
In terms of the answer to part (b), this is $Q < 1 / 2$, and the requirement of a low quality factor makes sense. (However, we usually wouldn't describe such lossy systems in terms of a quality factor at all.)
(d) In the analysis for part (b), we used the fact that the current through each part of the series RLC circuit is equal. For the parallel RLC circuit, we use the fact that the voltages are equal. The average energy is
$$
E = 2 \times \frac { 1 } { 2 } C \left\langle V ^ { 2 } \right\rangle = C \left\langle V ^ { 2 } \right\rangle = \frac { C V _ { 0 } ^ { 2 } } { 2 } .
$$

The power dissipated in the resistor is $V ^ { 2 } / R$, so the average power is

$$
\langle P \rangle = \left\langle V ^ { 2 } / R \right\rangle = \frac { V _ { 0 } ^ { 2 } } { 2 R } .
$$

Since a radian occurs in the time $1 / \omega$,

$$
Q = \frac { E } { \langle P \rangle / \omega } = \omega R C = R \sqrt { \frac { C } { L } } .
$$

This is the inverse of the quality factor of a series RLC circuit. It makes sense that the quality factor increases as $R$ increases, because for very high $R$ almost no current flows through the resistor. It's just the AC analogue of the usual result in DC circuits: since $P = I ^ { 2 } R = V ^ { 2 } / R$, high-resistance resistors dissipate more when in series, and less when in parallel.

Example 6: NBPhO 2018.7
Consider the following AC circuit.
![](../../../figures/solution-ocr/2e4ce0d6e44017ac3b2174b9.jpg)
The voltage difference between $D$ and $E$ has amplitude $V _ { D E } = 7 \mathrm {~V}$. Similarly, $V _ { D F } = 15 \mathrm {~V}$ and $V _ { E F } = 20 \mathrm {~V}$. What is the magnitude of $V _ { 0 }$ ?

Solution
Treat the voltages as phasors, and let $V _ { A } = 0$, so $V _ { B } = V _ { 0 }$. Then $V _ { A F }$ is perpendicular to $V _ { F B }$, which means that $V _ { F }$ lies on the circle centered at $V _ { 0 } / 2$ with radius $V _ { 0 } / 2$. The exact same logic applies for $V _ { E }$ and $V _ { D }$. Therefore, we know that $V _ { D E } , V _ { D F }$ and $V _ { E F }$ form the three sides of a triangle, where the desired answer is the diameter of its circumcircle.

For a triangle with side lengths $a , b$, and $c$, and a circumcircle of radius $R$, Heron's formula states that the area is

$$
A = \sqrt { p ( p - a ) ( p - b ) ( p - c ) } , \quad p = \frac { 1 } { 2 } ( a + b + c ) .
$$

The area is also given by

$$
A = \frac { a b c } { 4 R } .
$$


Solving for the diameter, we have

$$
2 R = \frac { a b c } { 2 \sqrt { p ( p - a ) ( p - b ) ( p - c ) } } = 25 \mathrm {~V} .
$$

These geometric steps aren't that important; the key idea is thinking in terms of phasors.

[2] Problem 8 (Purcell 8.26). The four curves shown below are plots, in some order, of the applied voltage and the voltages across the resistor, inductor, and capacitor of a series RLC circuit.
$$
R , L , C , \mathcal { E }
$$
![](../../../figures/solution-ocr/3faf633ed84592598ae75834.jpg)
![](../../../figures/solution-ocr/8c5b67477e5acfa2e05932e6.jpg)
![](../../../figures/solution-ocr/de7500552b8a308a8becbbdb.jpg)
![](../../../figures/solution-ocr/cb6285830ceb472a2c1de5f9.jpg)
Which is which? Whose impedance is larger, the inductor's or the capacitor's?
Solution. We have $V _ { R } = R I , V _ { L } = ( i \omega L ) I$, and $V _ { C } = \frac { 1 } { i \omega C } I$. Thus, the graph of $V _ { L }$ is shifted by $\pi / 2$ to the left of that of $I$, and $V _ { C }$ is shifted by $\pi / 2$ to the right. The first, second, and fourth graphs are shifted relative to each other by multiples of $\pi / 2$, so we conclude
$$
\text { the first graph is } V _ { R } \text {, the second graph is } V _ { C } \text {, the fourth graph is } V _ { L }
$$
from which we find by process of elimination that
$$
\text { the third graph is } \mathcal { E } \text {. }
$$
Note that when the inductor and capacitor have equal impedance, $\mathcal { E }$ and $I \propto V _ { R }$ are in phase. When the inductor has a higher impedance, $\mathcal { E }$ looks more like $V _ { L }$, which "leads" the current. When the capacitor has a higher impedance, $\mathcal { E }$ looks more like $V _ { C }$, which "lags" the current. By comparing the first and third graphs, we see the phase of $\mathcal { E }$ slightly leads the current, so the inductor has higher impedance.
[2] Problem 9 (PPP 170). Consider each of the following circuits.

![](../../../figures/solution-ocr/ee6256fb06c4a7477a7ff7e8.jpg)
(a)

(b)

In each case, find the amplitude of the current drawn from the source as a function of $\omega / \omega _ { 0 }$, where $\omega _ { 0 } = 1 / \sqrt { L C }$.

Solution. We deal with each case separately.

(a) We see that the top two inductors are in parallel, and the bottom two capacitors are also in parallel, with the two systems being in series. Thus, the net impedance is
$$
Z = \frac { 1 } { 2 } \left( i \omega L + \frac { 1 } { i \omega C } \right) ,
$$
which has magnitude $\frac { 1 } { 2 \omega C } \left| \left( \omega / \omega _ { 0 } \right) ^ { 2 } - 1 \right|$. Thus,
$$
| I | = \frac { V _ { 0 } } { | Z | } = \frac { 2 \omega _ { 0 } C V _ { 0 } \left( \omega / \omega _ { 0 } \right) } { \left| \left( \omega / \omega _ { 0 } \right) ^ { 2 } - 1 \right| } .
$$
(b) The impedance here is
$$
Z = 2 \frac { 1 } { i \omega C + \frac { 1 } { i \omega L } }
$$
so $| Z | = \frac { 2 \omega L } { \left| \omega ^ { 2 } / \omega _ { 0 } ^ { 2 } - 1 \right| }$, so
$$
| I | = \frac { V _ { 0 } } { | Z | } = \frac { \omega _ { 0 } C V _ { 0 } \left| \left( \omega / \omega _ { 0 } \right) ^ { 2 } - 1 \right| } { 2 \left( \omega / \omega _ { 0 } \right) } .
$$
[3] Problem 10 (BAUPC 2024). Consider the following RLC circuit.
![](../../../figures/solution-ocr/547b1774687b9e0369b852cf.jpg)
The capacitors have capacitance $C$, the inductors have inductance $L$, and the resistors have resistance $R = \sqrt { L / C }$. Furthermore, the driving angular frequency is $\omega = 1 / \sqrt { L C }$. Find the amplitude of the total current through the circuit.
Solution. See the official solutions as usual.
[3] Problem 11 (USAPhO 2026). Consider an $L C$ circuit of resonant angular frequency $\omega _ { 0 }$ involving a long solenoid of inductance $L$. The solenoid is tightly wound around a thin conducting cylindrical shell of radius $a$, thickness $t \ll a$, conductivity $\sigma$, and length $\ell$.
    (a) Assuming the shell provides the only energy loss in the circuit, and $\sigma$ is sufficiently small, find the quality factor in terms of $\omega _ { 0 } , \sigma , t , a$, and $L$.
    (b) Why does your answer to part (a) break down in the limit $\sigma \rightarrow \infty$ ?

Solution. (a) This is part (b) of USAPhO 2026, problem B3, and the answer is $Q = 2 / \left( \mu _ { 0 } \sigma t a \omega _ { 0 } \right)$, where $L$ happens to drop out. The interesting feature is that the quality factor depends on frequency, as does the associated effective resistance $R _ { \text {eff } } = \omega _ { 0 } L / Q$.
People often get used to assuming resistance is frequency-independent, since it's literally printed onto the resistors used in introductory labs. But in a realistic high-quality LC circuit, there will be multiple contributions to the effective resistance, which all depend on frequency.

(b) As $\sigma \rightarrow \infty$ we expect there to be no energy dissipation, but if you plug this into the result of part (a), you'll get $Q \rightarrow 0$, or $R _ { \text {eff } } \rightarrow \infty$.
The resolution is the "skin effect". From E1, we know that a conductor sets the static electric field inside itself to zero. For oscillating fields, it turns out the electric field is still shielded: it drops to zero as you go a distance $\delta \sim 1 / \sqrt { \sigma \omega _ { 0 } \mu _ { 0 } }$ into the material, called the skin depth. In part (a), you tacitly assumed $\delta \gg t$, so that this effect could be neglected. But as $\sigma \rightarrow \infty$, we get $\delta \ll t$ and the solenoid's induced electric field gets mostly expelled from the shell. When we account for this, we get a sensible result $Q \propto \sqrt { \sigma }$.
By the way, in practice $\sigma$ itself will depend on both frequency and temperature. This is the sort of thing that one must account for in precision physics experiments with LC circuits.
[3] Problem 12. USAPhO 2002, problem A1.
[3] Problem 13. USAPhO 2011, problem B1.

## 3 Electrical Engineering

These next problems are about using RLC circuits for practical purposes. They don't require anything not already introduced in the previous section, but they represent a different way of thinking that it's crucial to get comfortable with.

[2] Problem 14 (Feynman). In electronic circuits it is often desired to provide a sinusoidal voltage of constant amplitude but variable phase. A circuit which accomplishes this is called a phase-shifting network. One example is shown below.
![](../../../figures/solution-ocr/a679aaf96bf13aa7cb66901d.jpg)
Show that the voltage measured between terminals A and B has half the amplitude of the input voltage, and a phase which may be adjusted by changing the resistance $R ^ { \prime }$.
Solution. Note that the current in the left branch is $I _ { 1 } = V _ { i } / 2 R$, so $V _ { A } = V _ { i } - I _ { 1 } R = V _ { i } / 2$. We see that
$$
V _ { B } = V _ { i } - R ^ { \prime } \frac { V _ { i } } { R ^ { \prime } + \frac { 1 } { i \omega C } } = V _ { i } \left( 1 - \frac { 1 } { 1 + \frac { 1 } { i \omega C R ^ { \prime } } } \right) .
$$
Thus,
$$
V _ { B } - V _ { A } = V _ { i } \left( \frac { 1 } { 2 } - \frac { 1 } { 1 + \frac { 1 } { i \omega C R ^ { \prime } } } \right) = \left( - \frac { V _ { i } } { 2 } \right) \frac { 1 - \frac { 1 } { i \omega C R ^ { \prime } } } { 1 + \frac { 1 } { i \omega C R ^ { \prime } } } .
$$

We thus have $\left| V _ { B } - V _ { A } \right| = V _ { i } / 2$, and the remaining fraction is $e ^ { i \phi }$ with $\phi = 2 \tan ^ { - 1 } \left( 1 / \omega C R ^ { \prime } \right)$, which can be adjusted to give any phase.

[3] Problem 15 (Kalda). The figure below shows a Maxwell's bridge, which is used for measuring the inductance $L$ and resistance $R$ of a coil.
![](../../../figures/solution-ocr/e6db345a8d2411460877c972.jpg)
To do this, the angular frequency $\omega$ is fixed and the known parameters $R _ { 1 } , R _ { 2 } , R _ { C }$, and $C$ are adjusted until the voltmeter reads zero. Once this is done, find $R$ and $L$ in terms of the other parameters.
Solution. Suppose the unknown coil has overall impedance $Z$. It suffices to find $Z$. We see that the voltage at the top end of the voltmeter is
$$
V _ { 1 } = \mathcal { E } \frac { R _ { 1 } } { Z + R _ { 1 } } .
$$
Let $Z _ { C } = \frac { 1 } { \frac { 1 } { R _ { C } } + i \omega C }$ denote the impedance of the resistive capacitor compound. The voltage at the other end of the voltmeter is then
$$
V _ { 2 } = \mathcal { E } \frac { Z _ { C } } { Z _ { C } + R _ { 2 } } .
$$
We have $V _ { 1 } = V _ { 2 }$, so $Z / R _ { 1 } + 1 = 1 + R _ { 2 } / Z _ { C }$, so
$$
Z = R _ { 1 } R _ { 2 } \left( 1 / R _ { C } + i \omega C \right) .
$$
On the other hand, we also have $Z = R + i \omega L$, so we can read off the answers,
$$
R = R _ { 1 } R _ { 2 } / R _ { C } , \quad L = R _ { 1 } R _ { 2 } C .
$$
