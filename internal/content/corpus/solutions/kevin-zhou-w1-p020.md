---
id: kevin-zhou-w1-p020
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-w1-p020
solution_type: author
source_document: solution-document-kevin-zhou-w1sol
source_pdf: sources/kevin_zhou/site/handouts/W1Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/W1Sol.pdf."
---

[4] Problem 20. [A] The general, turn-the-crank method to find the time evolution of an arbitrary
wave on a string of length L is Fourier series. In this method, we write the initial shape y0(x) of
the wave as a combination of standing waves,
y0(x) =
X
n
cn sin
πnx
L
, 0 ≤ x ≤ L.
We know how each standing wave oscillates in time, so by linearity, the entire wave evolves as
y(x,t) =
X
n
cn sin
πnx
L
cos(ωnt)
where ωn is the angular frequency of the nth harmonic.
(a) The coefficients cn can be extracted by integrating y0(x) against another sine,
cn ∝
Z L
0
dxy0(x)sin
πnx
L
.
Explain why this works, and find the constant of proportionality.
25
Kevin Zhou Physics Olympiad Handouts
(b) Now let’s consider the plucked string considered in part (a) of problem 19. If the pluck is
centered at the middle of the string and has height h, find the coefficients cn. (If you’re so
inclined, you can use a computer to see how the resulting y(x,t) approaches the answer to
problem 19 as more terms are included.)
(c) Argue that in general, we have
Z L
0
y2
0(x)dx =
L
2
X
n
|cn|2
.
By applying this result to the plucked string, show that the Riemann zeta function has value
ζ(4) =
∞ X
n=1
1
n4
=
π4
90
.
In fact, this is one of the simplest ways to compute ζ(4).
We’ll use the idea of Fourier series to illustrate some conceptual points in W2.
Solution. (a) This works because all the other terms in y0(x) will cancel out, as seen here:
Z L
0
dxsin
πnx
L
sin
πmx
L
=
1
2
Z L
0
dx

cos
πx
L
(m − n) − cos
πx
L
(m + n)

which will always equal to 0 when m ̸= n, since the arguments of sine (the anti-derivative of
cosine) will always be an integer multiple of π. To find the constant of proportionality, we
only need to look at the nth term of the expansion of y0(x):
Z L
0
dxy0(x)sin
πnx
L
= cn
Z L
0
dx sin2 πnx
L
= cnL/2
Thus the constant of proportionality is 2/L.
(b) The equation of the plucked string is
y0(x) = h − 2h|x − L/2|/L, 0 < x < L.
By symmetry, if n is even, cn = 0 since y0(x) is even about x = L/2 and sin(πnx/L) is odd
about x = L/2, so the integral will be 0. Thus we will consider the case where n is odd,
cn =
2
L
Z L/2
0
2hx
L
sin
 πnx
L

dx +
2
L
Z L
L/2
(2h − 2hx/L)sin
 πnx
L

dx
Using symmetry again, the two integrals above are equal, so we only need to evaluate the
first. We have
cn =
4h
L2
−
L
πn
xcos
 πnx
L
  L/2
0
+
L
πn
Z L/2
0
cos
 πnx
L

dx
!
+
4h
L
Z L
L/2

1 −
x
L

sin
 πnx
L

dx
Considering only odd n, the first term will vanish since cos(πn/2) = 0 for odd n. Also, by
symmetry the integral that goes from L/2 to L should be equal to the one that goes from 0
to L/2. Thus, for odd n,
cn =
8h
π2n2
sin
 πn
2

while cn = 0 for even n.
26
Kevin Zhou Physics Olympiad Handouts
(c) Again, integrating sinusoids with different values of n will get 0, and the same value will get
L/2. Thus when representing y0(x) as a sum of sinusoids and having the integral of all the
cross terms go to 0, we get that
Z L
0
y2
0(x)dx =
Z L
0
dx
X
n
c2
n sin2 πnx
L
=
X
n
c2
n
Z L
0
dx sin2 πnx
L
=
L
2
X
n
c2
n.
Using y0(x) = h − 2h|x − L/2|/L, and symmetry about x = L/2, we get
Z L
0
y2
0(x)dx = 2
Z L/2
0
y2
0(x)dx = 2
Z L/2
0
4h2x2
L2
dx =
1
3
h2
L.
To find the sum of cn, we use our answer above and consider the nonzero odd terms:
L
2
X
n
|cn|2
=
L
2
X
n
64h2
π4(2n + 1)4
=
32h2L
π4
X
n
1
(2n + 1)4
To relate that sum to ζ(4), define the sums for the even and odd numbers as E and O so that
ζ(4) = E + O, E =
X
n
1
(2n)4
=
1
16
ζ(4), O = ζ(4) − E =
15
16
ζ(4)
Now equating our expressions will get
1
3
h2
L =
32h2L
π4
15
16
ζ(4)
from which we conclude
ζ(4) =
π4
90
.
Idea 7
More generally, the relation between the incoming and reflected waves may depend on the
exact form of the incoming wave. In this case, it’s useful to consider sinusoidal solution. Let
yin(x,t) = ei(kx−ωt)
.
Almost all boundary conditions will state that something at the boundary is constant in time,
which is only possible if the reflected wave has the same frequency. So in general we have
yr(x,t) = rei(−kx−ωt)
where r is the reflection coefficient. If the medium exists for x > 0, there is also a transmitted
wave there, of the form
yt(x,t) = tei(k′x−ωt)
where k′ might differ from k, and t is the transmission coefficient. In general, both r and t
may depend on k as well as the boundary conditions. Note that the phases of r and t depend
on the conventions we used to define yr(x,t) and yt(x,t), though the magnitudes don’t.
27
Kevin Zhou Physics Olympiad Handouts
[4] Problem 21. Suppose the string at x < 0 has a tension T1 and mass density µ1, while the string
at x > 0 has a tension T2 and mass density µ2. (If you were doing this at home, it would be difficult
to have T1 ̸= T2 since the whole setup would accelerate longitudinally. But for the sake of the
problem, suppose the two strings are attached at x = 0 by a massless ring which slides on a vertical
frictionless pole, so that the normal force from the pole balances the longitudinal force T2 −T1.) As
above, let yin(x,t) = ei(kx−ωt).
(a) Write down k′ and the boundary conditions at x = 0.
(b) Show that the reflection and transmission coefficients are
r =
Z1 − Z2
Z1 + Z2
, t =
2Z1
Z1 + Z2
, Zi =
p
µiTi.
The quantity Zi is called the impedance.
(c) What limiting cases correspond to hard and soft boundary conditions? Verify that the reflection
coefficients match the results above.
(d) Suppose the incoming wave has the exponential form above, but only lasts for a long but finite
time τ. After a long time, the incoming wave is gone, and we have a reflected and transmitted
wave. Verify that energy has been conserved. (Be careful: it’s not simply |r|2 + |t|2 = 1.)
Solution. (a) By continuity of the frequency, we have
k′
=
v1
v2
k =
p
T1/µ1
p
T2/µ2
k.
The boundary conditions are continuity of the string, and continuity of the transverse compo-
nent of the tension at x = 0, so that the forces on the ring balance.
(b) Continuity of the string requires
1 + r = t.
Continuity of the transverse component of tension requires
T1(k − rk) = T2tk′
.
Combining this with the result of part (a) gives
1 − r =
√
T2µ2
√
T1µ1
t =
Z2
Z1
t.
Combining this with the continuity condition and solving gives the desired results.
(c) A hard boundary can be modeled by setting T1 = T2 and µ2 → ∞, which is equivalent to
Z2/Z1 → ∞. In this limit, r = −1 and t = 0 as expected.
A soft boundary can be modeled by setting T1 = T2 and µ2 → 0, which sets Z2/Z1 → 0. In
this case we have r = 1 as expected. Oddly we also have t = 2, but this isn’t really physical
because in a soft boundary, the string at x > 0 doesn’t exist. (It makes no difference from the
standpoint of the reflection coefficient whether or not the string at x > 0 exists, because the
wave carries no energy in the limit µ2 → 0.)
28
Kevin Zhou Physics Olympiad Handouts
(d) First, we need to find the energy for a wave of given amplitude. The kinetic and potential
energies in a wave are equal, so we can look at either. The potential energy per unit length is
proportional to Ty′2 ∝ T(Ak)2 where A is the amplitude and k is the wavenumber. Since the
waves in this problem have fixed frequency, and v = ω/k, we have k ∝ 1/v. Finally, the total
duration τ of the wave is fixed, meaning the total length is L = vτ ∝ v. Combining these
results,
U ∝ LTA2
k2
∝ vTA2
/v2
=
T
v
A2
= ZA2
.
In other words, the impedance determines the energy per unit time in a wave pulse of given
amplitude. That gives some intuition for why the transmission of energy is perfect when
Z1 = Z2. If you want there to be no reflection, then the amplitudes of the transmitted and
incoming waves have to match by continuity. This is only consistent with energy conservation
if the impedances are matched too.
Therefore, the statement of energy conservation is
Z1 = Z1|r|2
+ Z2|t|2
.
Plugging in the expressions above and doing the algebra confirms this.
The great thing about the coefficients r and t is that they contain all the information about the
reflection and transmission. For complicated problems with multiple interfaces, it’s best to work
purely in terms of r and t, as solving the wave equation as a whole can get messy.
Remark
In E7 you found that transmission lines have a characteristic impedance Z. When two
transmission lines are attached, wave reflection occurs if the impedances mismatch. The
point of the previous problem is that the same idea applies to many kinds of waves, as long
as one generalizes the notion of impedance.
In all these cases, we can reduce unwanted reflection by inserting “impedance matching”
devices which soften the discontinuity. This language is very commonly used by engineers.
For example, they might say that a conical megaphone works because it helps impedance
match the air column in your mouth and throat to the atmosphere.
Remark
You can generalize the methodology of the previous problem to a large variety of similar
problems. For example, suppose the ring at x = 0 wasn’t massless. Then the boundary
conditions would have been changed; instead of the transverse force on the ring vanishing,
the transverse force would have had to be equal to its mass times its transverse acceleration.
(You may recall that setup from the preliminary problem set.) You could even put the ring
on a spring, or give it a damping force (in which case the wave energy is no longer conserved).
In all cases, the technique is just to take exponential solutions on both sides and apply the
relevant boundary conditions. I won’t assign such problems, since they usually involve lots
of messy algebra, but the idea is very important in physics.
29
Kevin Zhou Physics Olympiad Handouts
4 Interference
Idea 8
The intensity of a wave is proportional to its amplitude squared, so if two waves with
amplitudes A1 and A2 are superposed, the resultant intensity is
I ∝ (A1 + A2)2
.
This differs from the sum of the intensities by an interference term,
I = I1 + I2 + 2
p
I1I2 cosθ
where θ is the phase difference between the waves.
