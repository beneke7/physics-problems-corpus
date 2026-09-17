---
id: kevin-zhou-e8-p023
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e8-p023
solution_type: author
source_document: solution-document-kevin-zhou-e8sol
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E8Sol.pdf."
---

[5] Problem 23. In most common materials, µ ≈ µ0 while ϵ depends on frequency. We’ll investigate
the origin of this frequency dependence below.
(a) Model an electron in an atom as a mass m with charge q attached to a spring, with natural
angular frequency ω0 and a damping force −mγv, in an electric field E0e−iωt. Write down
the equation of motion for the electron.
23
Kevin Zhou Physics Olympiad Handouts
(b) The atomic polarizability α is defined by p = αE. Show that
α =
q2/m
ω2
0 − ω2 − iγω
.
Now we restrict to a gas with small number density n, so that nα ≪ ϵ0. For simplicity, you may
also assume that the damping is weak, γ ≪ ω0. Now, the Clausius–Mossotti formula reduces to
ϵ = ϵ0 + nα
and α is a complex number, so we learn that ϵ is also complex.
(c) The wavevector and angular frequency are related by k2 = µϵω2. Explain why the fact that ϵ
is complex indicates that waves can be absorbed.
(d) What value of ω maximizes the absorption rate of the electromagnetic waves? Roughly how
many wavelengths does such a wave propagate before being mostly absorbed?
(e) What value of ω maximizes the speed of the electromagnetic waves, and what is that speed?
(f) Transparent objects such as glass can be modeled as having a very high resonant frequency,
much higher than that of visible light. Does blue light or red light refract more when passing
from air to glass?
The intuitive reason that these electrons can affect the propagation speed of light is because they
emit secondary electromagnetic waves that are out of phase with the original wave; this “pushes” the
phase of the composite wave forward or backward, affecting the phase velocity. A nice explanation
of this can be found in chapter I.31 of the Feynman lectures.
Solution. (a) We have
mr̈ = −mω2
0r − mγv + qE0e−iωt
.
(b) Suppose r = r0e−iωt where r0 is potentially complex. Then, we see that E0 ∥ r0 and
−mω2
r = −mω2
0r + mγiωr + q(E0/r0)r.
Thus,
E0
r0
=
m(ω2
0 − ω2 − iγω)
q
.
Using p = qr yields the result.
(c) If ϵ is complex, then with µ ≈ µ0 and ω2 being real, then k2 = µϵω2 will also be complex.
Thus with a complex wavevector k, the field of E0ei(k·x−ωt) will exponentially decay.
(d) The absorption arises from the imaginary part of of kx. With k = ω
√
µϵ ≈ ω
√
µ0ϵ0(1 + nα
2ϵ0
),
the absorption rate is maximized when the imaginary part of k is maximized, and
β ≡ Im(k) = Im

ωn
2cϵ0
α

=
ωn
2cϵ0
q2/m
(ω2
0 − ω2)2 + (ωγ)2
(γω)
=
q2γn
2mcϵ0
ω2
(ω2
0 − ω2)2 + γ2ω2
24
Kevin Zhou Physics Olympiad Handouts
The maximum value of this occurs when
dβ
dω2
∝ (ω2
0 − ω2
)2
+ γ2
ω2
− ω2
(2(ω2
− ω2
0) + γ2
)

= 0
which simplifies to yield
ω4
0 − ω4
= 0.
So an electromagnetic wave with angular frequency ω = ω0 has the maximum absorption rate.
The electric field will have a factor of e−βx, and at ω = ω0, β = q2n
2γmcϵ0
. The value of the real
wavevector Rek will be close to (note that Re(α) = 0 at ω = ω0):
Re(k) =
ω0
c

1 + Re

nα
2ϵ0

=
ω0
c
Then for the wave to fall off by a factor of e, the wave will need to travel a distance of 1
β ,
which is 1
βλ = k
2πβ wavelengths. Thus,
k
2πβ
=
ω0γmϵ0
πq2n
is the number of wavelengths it will travel before the amplitude gets reduced by a factor of e.
(e) The phase velocity is maximized when ω
Rek, or Re 1 √
µϵ is maximized.
vp = Re
1
√
µϵ
≈ c

1 − Re
1
2
nα
ϵ0

= c +
cq2n
2mϵ0
ω2 − ω2
0
(ω2 − ω2
0)2 + (γω)2
Differentiating with respect to ω2 and finding where it’s zero yields
(ω2
− ω2
0)2
+ γ2
ω2
− (ω2
− ω2
0)(2(ω2
− ω2
0) + γ2
) = 0
(ω2
− ω2
0)2
= ω2
0γ2
ω2
= ω2
0 ± ω0γ
Looking at the original, the smaller solution yields the minimum velocity, and the larger
solution yields the maximum velocity (which happens to be greater than c). The maximum
phase velocity is
vmax = c +
cq2n
2mϵ0
ω0γ
(ω0γ)2 + γ2(ω2
0 + ω0γ)
(f) From the previous part, we have
vp = c −
cq2n
2mϵ0
ω2
0 − ω2
(ω2 − ω2
0)2 + (γω)2
and now we know that ω0 ≫ ω, so
vp
c
≈ 1 −
q2n
2mϵ0
ω2
0 − ω2
ω4
0 − 2ω2
0ω2 + (γω)2
≈ 1 −
q2n
2mϵ0ω2
0
(1 + ω2
/ω2
0).
Thus, increasing the frequency would decrease vp and increase the index of refraction, so blue
light would refract more.
[5] Problem 24.  h 1 0IPhO 2002, problem 1. A neat application of electromagnetic waves in matter.
[5] Problem 25.  h 1 0APhO 2007, problem 2. A problem on an exotic negative index of refraction.
25
Kevin Zhou Physics Olympiad Handouts
Remark
Above, we considered the response of a medium composed of atoms, obeying p = αE. However,
this relation is just an approximation, like Hooke’s law. For larger electric fields, higher order
terms are necessary,
p = αE + α′
E2
+ ...
which lead to strange effects, studied in the field of nonlinear optics. For example, suppose
we send in light of angular frequency ω. Then
E2
∝ cos2
(ωt) =
1 + cos(2ωt)
2
.
That means that a nonlinearmedium can respond to light at angularfrequency ω by oscillating,
and hence emitting light, at angular frequency 2ω. This phenomenon is called frequency
doubling, or second-harmonic generation, and converts red light to ultraviolet. Similarly, for
a cubic nonlinearity, you can use trigonometric identities to show that frequency tripling can
occur.
5 Electromagnetic Systems
In this section we’ll consider problems that use everything we’ve covered, with a focus on techno-
logical applications and systems with multiple moving parts.
[3] Problem 26. This is a rewrite of NBPhO 2007 problem 3, which has some typos and ambiguities.
Suppose particles of mass m, charge e > 0, and kinetic energy eU0 are produced at point A, all
traveling to the right. The particles are not produced at exactly the same time, but we would like
them to arrive at point D at the same time. This is known as temporal focusing.
To do this, we place a pair of parallel plates along the path, with width a. The plates have the
same time-dependent voltage U(t), while the voltage outside the plates is held at zero. Thus, the
electric field is only nonzero near point B, where the particles enter the plates, and point C, where
the particles exit the plates. The particles then travel a distance b ≫ a to point D.
(a) Suppose the first particle reaches point B at time t = 0, and that U(0) = U′(0) = 0. Find the
U(t) such that all the next particles reach point D at the same time. Assume that |U(t)| ≪ U0.
(b) The voltage cannot become arbitrarily high, so every time T it resets to zero and the process
begins again. As a result, particles are periodically focused into clumps. On average, what
fraction of the particles do not make it into a clump? Assume that T is much larger than the
time it takes a particle to cross the plates.
Solution. Here’s a solution adapted for this version of the problem.
26
Kevin Zhou Physics Olympiad Handouts
(a) Note that the particle does not accelerate when it is between the plates, even when U(t)
changes, since the electric field vanishes there. The situation is analogous to a ball rolling on
a flat table while the entire table is being lifted up.
Now consider the particle that enters the plates at time t and exits at time t′. It loses a kinetic
energy eU(t) when it enters, then gains a kinetic energy eU(t′) when it exits. Therefore, if U(t)
is time-dependent, the particle can have a net change in speed, which allows later particles to
move faster to D.
To make this concrete, let ta = a/v0 and tb = b/v0, where eU0 = mv2
0/2. The approximations
of the problem allow us to neglect the particles’ change in speed while between the plates,
since it’s penalized by factors of both a/b and U(t)/U0. Then a particle that enters the plates
at time t exits at time t′ ≈ t + ta. The extra energy imparted must shorten the time it takes
to go from C to D by an amount t + t0, where t0 is an arbitrary constant. Then
t + t0 ≈ tb
∆v
v
≈
tb
2
∆K
eU0
≈
tb
2
U(t + ta) − U(t)
U0
.
In other words, the finite difference of U(t) is a linear function of t, which means that U(t) is
a quadratic polynomial. The given conditions U(0) = U′(0) = 0 fix U(t) ∝ t2, and matching
the coefficients of t on both sides gives
U(t) =
U0
tatb
t2
=
2eU2
0
abm
t2
.
(b) When the voltage resets to zero, all the particles that were between the plates won’t get
focused correctly. So the fraction that don’t get focused is approximately
ta
T
=
a
T
r
m
2eU0
.
Note that for this solution to make sense, we need ta ≪ T, but we also need T to be short
enough so that |U(t)| ≪ U0, which corresponds to T ≪
√
tatb. Both conditions can be satisfied
simultaneously, since a ≪ b.
[4] Problem 27.  T 1 0IPhO 2004, problem 3. A practical problem which also reviews damped/driven
oscillations.
[4] Problem 28. NBPhO 2014, problem 1. A challenging problem about a complex nonlinear circuit.
[5] Problem 29. Physics Cup 2020, problem 1. (It’s not stated explicitly, but you should assume the
rod is an insulator with zero electric susceptibility. Alternatively, you can suppose the rod has some
electric susceptibility, but it’s too thin to have an effect on the dynamics of the metal balls.)
Solution. See the official solutions here.
27
