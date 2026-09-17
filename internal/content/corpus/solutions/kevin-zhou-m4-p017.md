---
id: kevin-zhou-m4-p017
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-m4-p017
solution_type: author
source_document: solution-document-kevin-zhou-m4sol
source_pdf: sources/kevin_zhou/site/handouts/M4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/M4Sol.pdf."
---

[4] Problem 17. Analyzing a damped and driven harmonic oscillator.
(a) Consider a damped harmonic oscillator which experiences a driving force F = F0 cos(ωt).
Passing to complex variables, Newton’s second law is
mẍ + bẋ + kx = F0eiωt
.
If x(t) is a complex exponential, then we know that the left-hand side is still a complex
exponential, with the same frequency. This motivates us to guess x(t) = A0eiωt. Show that
this solves the equation for some A0.
16
Kevin Zhou Physics Olympiad Handouts
(b) Of course, the general solution needs to be described by two free parameters, to match the
initial position and velocity. Argue that it takes the form
x(t) = A0eiωt
+ A+eiω+t
+ A−eiω−t
where the ω± are the ones you found in problem 16.
(c) After a long time, the “transient” A± terms will decay away, leaving the steady state solution
x(t) ≈ A0eiωt
which oscillates at the same frequency as the driving. The actual position is the real part,
x(t) ≈ |A0|cos(ωt − ϕ)
where A0 = |A0|e−iϕ. Evaluate |A0| and ϕ.
(d) Sketch the amplitude |A0| and phase shift ϕ as a function of ω. Can you intuitively see they
take the values they do, for ω small, ω ≈
p
k/m, and ω large?
(e) There are several distinct things people mean when they speak of “resonant frequencies”. Find
the driving angular frequency ω that maximizes (i) the amplitude |A0|, (ii) the amplitude of
the velocity, and (iii) the average power absorbed from the driving force. (As you’ll see, these
are all about the same when the damping is weak, so the distinction between these isn’t so
important in practice.)
Solution. (a) If we plug in x = A0eiωt, we find the differential equation is satisfied if
(−mω2
+ ibω + k)A0 = F0,
which yields
A0 =
F0
(k − mω2) + ibω
.
(b) This follows from linearity. If we plug this solution in, then the first term balances the driving
term on the right-hand side. Then the other two terms need to satisfy the damped harmonic
oscillator equation with no driving, so they’re just the same as in problem 16.
(c) The answers are
|A0| =
F0
p
(k − mω2)2 + (bω)2
, tanϕ =
bω
k − mω2
.
(d) The amplitude and phase shift are shown below, for a few values of ζ = b/(2mω0), where
ω0 =
p
k/m.
17
Kevin Zhou Physics Olympiad Handouts
0 1 2 3
1
3
5
ω/ω0
k|A 0 |/F 0
maxima
ζ = 0
ζ = 0.1
ζ = 0.2
ζ = 0.3
ζ = 0.5
ζ = 1.0
0 1 2 3
0
π/2
π ϕ
ω/ω0
ζ = 0.1
This all makes physical sense. For very small frequency, we are effectively stretching the spring
statically, so the amplitude approaches a constant |A0| = F0/k, and the phase shift is zero.
For ω ≈
p
k/m, the amplitude is high because we’re driving the oscillator at the frequency it
wants to oscillate at, in the absence of driving and damping. Here, a large power is absorbed
from the driving force, and since P = Fv, that means F and v must be approximately in
phase, so the phase shift between F and x is 90◦. Finally, for high frequencies, the amplitude
goes to zero because the mass doesn’t have time to move far before the force turns around.
In this case, the driving force is always the largest force acting on the mass, so F and a are
in phase, so the phase shift between F and x is 180◦.
(e) First, to find the maximum |A0|, it suffices to minimize the square of its denominator. Setting
the derivative of that quantity to zero gives
2b2
ω = 2(k − mω2
)(2mω)
which can be solved to yield
ω =
p
k/m − b2/2m2.
The amplitude of the velocity is
v0 = ω|A0| =
F0ω
p
(k − mω2)2 + (bω)2
=
F0
p
(k/ω − mω)2 + b2
which is clearly maximized when ω =
p
k/m. Finally, the rate of power dissipation is
P = F(t)v(t) = −F0v0 cos(ωt)sin(ωt − ϕ) = F0v0 cos(ωt)cos(ωt + (π/2 − ϕ)).
18
Kevin Zhou Physics Olympiad Handouts
As we’ve just seen, v0 is maximized at ω =
p
k/m. In addition, the average value of the
product of cosines is maximized when they are in phase with each other, ϕ = π/2, which
also happens when ω =
p
k/m. Therefore, the maximum average power dissipation occurs at
ω =
p
k/m.
