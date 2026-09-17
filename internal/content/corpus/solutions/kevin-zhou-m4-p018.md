---
id: kevin-zhou-m4-p018
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-p018
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

[3] Problem 18. The quality factor of a damped oscillator is defined as Q = mω0/b, where ω0 =
p
k/m.
It measures both how weak the damping is, and how sharp the resonance is.
(a) Show that for a lightly damped oscillator,
Q ≈
total energy of the oscillator
average energy dissipated per radian
.
Then estimate Q for a guitar string.
(b) Show that for a lightly damped oscillator,
Q ≈
resonant frequency
width of resonance curve
where the width of the resonance curve is defined to be the range of driving frequencies for
which the amplitude is at least 1/
√
2 the maximum.
For more about Q, see pages 424 through 428 of Kleppner and Kolenkow.
Solution. (a) Take x = Acosω0t. In one cycle, the energy dissipated is
Z 2π/ω0
0
bv · vdt = bA2
ω0π,
so the average energy dissipated per radian is bA2ω0/2. The average energy stored is 1
2mω2
0A2,
so the ratio is mω0/b = Q.
The value of Q depends on the guitar string, but one of the strings in the middle will oscillate
at around ∼ 300Hz for a few seconds, corresponding to ∼ 104 radians, so we can roughly
estimate Q ∼ 104.
(b) We have |A0| = F0 √
m2(ω2
0−ω2)2+(bω)2
. At the edge of the range that we call the width, we have
m2
(ω2
0 − ω2
)2
+ (bω)2
= 2(bω0)2
=⇒ m(ω2
0 − ω2
) = ±bω0,
so m(ω0 + ω)(ω0 − ω) = ±bω0. We have ω ≈ ω0 (to first order), so
2mω0(ω0 − ω) = ±bω0 =⇒ 1 − ω/ω0 = ±
1
2Q
.
Thus the width is approximately ω0/Q, as desired.
The next two problems explore other ways of driving harmonic oscillators.
