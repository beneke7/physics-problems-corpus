---
id: kevin-zhou-w1-ex001
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w1-ex001
solution_type: author
source_document: solution-document-kevin-zhou-w1sol
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W1Sol.pdf."
---

Example 1
Consider a string with mass µ per unit length, under tension T. The transverse displacement
of the string is given by the wave function y(x,t), and for simplicity we assume the wave is
shallow, i.e. ∂y/∂x ≪ 1. What’s the equation of motion for y?
Solution
Consider a segment of length ∆x. At each end of the segment, the tension provides horizontal
and vertical forces
Tx =
T
p
1 + y′2
≈ T, Ty =
Ty′
p
1 + y′2
≈ Ty′
where we’re expanding to first order in y′. Therefore the total force is
Fy = ∆Ty = Ty′′
∆x.
The mass of this segment is µ∆x, again to first order, so by Newton’s Second Law,
T∆x
∂2y
∂x2
= µ∆x
∂2y
∂t2
Cleaning this up a bit, we have the wave equation
∂2y
∂t2
= v2 ∂2y
∂x2
, v2
=
T
µ
.
Physically, this simply says the string tries to straighten out curvature (represented by
∂2y/∂x2). The wave equation is the simplest possible equation of motion for waves. Even in
more complicated situations, we often start with this equation and treat the extra terms as
perturbations. The wave equation thus occupies a position like that of the simple harmonic
oscillator.
1
Kevin Zhou Physics Olympiad Handouts
Idea 1
We may factor the wave equation as a difference of squares,
(∂2
t − v2
∂2
x)y = (∂t − v∂x)(∂t + v∂x)y = 0.
Therefore, functions that satisfy (∂t ± v∂x)y = 0 solve the wave equation. It is simple to
verify that these are functions of the form
y(x,t) = f(x ± vt).
Since the wave equation is linear, superpositions of solutions to the wave equation are also
solutions to the wave equation. The general solution is of the form f(x − vt) + g(x + vt) for
arbitrary functions f and g.
[1] Problem 1. Waves of the form y(x,t) = f(x ± vt) simply translate with uniform velocity v. Does
a wave of the form y(x,t) = f(x + vt) move to the left or the right?
Solution. This wave moves towards the left. To see this, note that at time t = 0 the wave profile is
f(x), while a small time later it looks like f(x + v∆t). This is the graph of f(x) shifted to the left.
