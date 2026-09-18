---
id: kevin-zhou-m4-p016
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-p016
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

[2] Problem 16. Consider a damped harmonic oscillator, which experiences force F = −bv − kx.
(a) As in M1, show that the general solution for x(t) is
x(t) = A+eiω+t
+ A−e−iω−t
and solve for the ω±.
(b) For sufficiently small b, the roots are complex. In this limit, show that by taking the real
part, one finds an exponentially damped sinusoidal oscillation. Roughly how many oscillation
cycles happen when the amplitude damps by a factor of e?
(c) For large b, the roots are pure imaginary, the position simply decays exponentially, and we
say the system is overdamped. Find the condition for the system to be overdamped.
Solution. (a) By setting up and solving a quadratic equation,
ω± =
−ib ±
√
−b2 + 4mk
−2m
=
ib
2m
±
s
k
m
−

b
2m
 2
.
(b) In this limit, we have
ω± ≈
ib
2m
±
r
k
m
in which case we have
eiω±t
≈ e−bt/2m
ei
√
k/mt
which is an exponentially damped oscillation. The time for a damping of a factor of e is 2m/b,
which occurs after
√
km/πb cycles.
(c) This occurs if
k
m
−

b
2m
 2
< 0
which implies b2 > 4mk.
