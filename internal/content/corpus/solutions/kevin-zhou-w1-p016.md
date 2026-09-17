---
id: kevin-zhou-w1-p016
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w1-p016
solution_type: author
source_document: solution-document-kevin-zhou-w1sol
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W1Sol.pdf."
---

[3] Problem 16. Consider transverse waves on a horizontal string with tension T and mass density
µ. The string is attached to the ceiling by a large number of vertical springs, so that if the entire
string is pulled down, it will oscillate with angular frequency ω0.
(a) Find the wave equation for waves on this string.
(b) By guessing sinusoidal solutions, find ω(k) and the minimum possible angular frequency.
(c) Compute the phase and group velocity for wavepackets of angular frequency ω.
(d) What actually happens if you grab one end of the string and try to wiggle it at a frequency
below the minimum possible frequency?
If we treat the string as a quantum system, excitations of the string are particles with E(p)
determined by the function ω(k) you found, along with the de Broglie relations E = ℏω and p = ℏk.
Therefore, there is a minimum energy for excitations. In a relativistic and quantum context, this
means that all the particles must be massive; the minimum energy is mc2. This is a toy model for
how the Higgs field gives particles mass.
Solution. (a) There is now an additional acceleration of −ω2z due to the springs, so the wave
equation is
∂2z
∂t2
=
T
µ
∂2z
∂x2
− ω2
0z.
(b) Guessing a sinusoidal solution gets
ω2
=
T
µ
k2
+ ω2
0
and the minimum possible angular frequency is ω = ω0.
22
Kevin Zhou Physics Olympiad Handouts
(c) The phase velocity vp = ω/k is
vp =
ω
p
ω2 − ω2
0
s
T
µ
The group velocity is dω/dk, and we have
2ω
dω
dk
=
T
µ
(2k)
so therefore
vg =
T
µ
1
p
T/µ + ω2
0/k2
=
s
T
µ
r
ω2 − ω2
0
ω2
.
(d) In this case, you won’t manage to create any propagating waves. The part of the string near
you will just move up and down, following your hand, analogous to how the position of a mass
on a spring simply follows the force if the driving frequency is much lower than the resonant
frequency. Or, to say this more formally, the wave solutions of the frequency corresponding
to your hand’s driving are exponentially decaying, rather than oscillating and propagating,
formally because the solution for k is imaginary.
