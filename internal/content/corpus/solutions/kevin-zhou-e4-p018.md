---
id: kevin-zhou-e4-p018
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e4-p018
solution_type: author
source_document: solution-document-kevin-zhou-e4sol
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E4Sol.pdf."
---

[3] Problem 18. A point charge of mass m and charge q is released from rest at the origin in the fields
E = E0 x̂, B = B0 ŷ. Find its position as a function of time by solving the differential equations
given by Newton’s second law, F = ma.
Solution. We will assume non-relativistic motion throughout. Note that the motion is solely in
the xz plane, since the electric and magnetic forces are in that plane. Newton’s second law gives
ẍ =
q
m
(E0 − B0ż),
z̈ =
q
m
B0ẋ.
Taking the time derivative of the first equation and plugging in into the second, we find
...
x = −
q2B2
0
m2
ẋ,
and along with the initial condition that ẋ(0) = 0, we see that
ẋ = v0 sin(ωt)
where v0 is some yet to be determined velocity, and ω ≡ qB0/m. Integrating, and using the initial
condition that x(0) = 0, we see that
x(t) =
v0
ω
(1 − cos(ωt)).
We also know that
z̈ = ωẋ = ωv0 sin(ωt).
Integrating twice and using the fact that z(0) = ż(0) = 0, we see that
z(t) = v0t −
v0
ω
sin(ωt).
All that is to be found now is v0. Plugging our x and z into the first equation, we see that
v0ω cos(ωt) =
q
m
(E0 − B0v0(1 − cos(ωt))) =⇒ v0 = E0/B0.
17
Kevin Zhou Physics Olympiad Handouts
Thus, our final solution is
x(t) =
v0
ω
(1 − cos(ωt)),
z(t) = v0t −
v0
ω
sin(ωt)
where v0 = E0/B0 and ω = qB0/m.
Notice that while naively one might have thought the motion would be along E, on average the
particle actually moves along E × B. This is actually quite general. For example, it remains true
even if there’s a bit of friction; the steady state velocity turns out to be along E × B.
The same reasoning applies to weather systems. People talk about “low pressure” and “high
pressure” regions, but wouldn’t the wind just go along the pressure gradient to even it out? That
doesn’t happen because the Coriolis force deflects the wind sideways. In this case, the pressure
gradient is acting like E, and the Coriolis force behaves like a magnetic field B ∥ ω ∥ ẑ. The
net effect is that in the steady state, wind tends to move along lines of constant pressure, not
perpendicular to them. So a low pressure system stays low pressure but spins around.
[3] Problem 19 (Wang). Two identical particles of mass m and charge q are placed in the xy plane
with a uniform magnetic field Bẑ. The particles have paths r1(t) and r2(t). Neglect relativistic
effects, but account for the interaction between the charges.
(a) Write down a differential equation describing the evolution of the separation r = r1 − r2.
(b) Suppose that the initial conditions have been set up so that the particles orbit each other in
a circle in the xy plane, with constant separation d. What is the smallest d for which this
motion is possible?
Solution. (a) The equations of motion for the two particles are
mr̈1 =
q2
4πϵ0r3
r + qṙ1 × B, mr̈2 = −
q2
4πϵ0r3
r + qṙ2 × B.
Subtracting the two, the separation between the particles evolves as
mr̈ =
q2
2πϵ0r3
r + qṙ × B.
(b) Note that since B is along the ẑ direction, and v = ω×r where ω is also along the ẑ direction,
all three vector terms in the above equation are parallel. So we have

q2
2πϵ0r3
+ qωB + mω2

r = 0.
Setting the term in parentheses to zero, and noting that the separation r has magnitude d,
ω =
−(qB/m) ±
p
(qB/m)2 − 2q2/πmϵ0d3
2
where ωc = qB/m is the usual cyclotron angular frequency. For this equation to have a
solution, the discriminant must be nonnegative, so
q2B2
m2
≥
2q2
πmϵ0d3
18
Kevin Zhou Physics Olympiad Handouts
which gives
d ≥

2m
πϵ0B2
 1/3
.
For smaller d, the charges will always fly apart, either due to electrostatic repulsion if they’re
slow, or the angular momentum barrier if they’re fast.
