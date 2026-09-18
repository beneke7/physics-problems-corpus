---
id: kevin-zhou-e6-p007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e6-p007
solution_type: author
source_document: solution-document-kevin-zhou-e6sol
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E6Sol.pdf."
---

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
