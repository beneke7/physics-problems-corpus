---
id: kevin-zhou-e6-p004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e6-p004
solution_type: author
source_document: solution-document-kevin-zhou-e6sol
source_pdf: sources/kevin_zhou/site/handouts/E6Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E6Sol.pdf."
---

[3] Problem 4. Consider two inductors Li, with mutual inductance M.
(a) Show that if the inductors have currents Ii, the total stored energy is
U =
1
2
L1I2
1 +
1
2
L2I2
2 + MI1I2.
Use this result to show that |M| ≤
√
L1L2.
(b) Suppose these two inductors are in series. Find their combined effective inductance.
(c) Suppose these two inductors are in parallel. Find their combined effective inductance.
Solution. (a) The differential work required to change the currents is
dU = (L1
˙ J1 + M ˙ J2)(J1dt) + (L2
˙ J2 + M ˙ J1)(J2dt) = L1J1dJ1 + L2J2dJ2 + Md(J1J2)
6
Kevin Zhou Physics Olympiad Handouts
where J1,J2 are the values of the currents at some intermediate time. Therefore, the total
work required is
U =
1
2
L1I2
1 +
1
2
L2I2
2 + MI1I2.
Let x = I2/I1, so
U ∝ L2x2
+ 2Mx + L1.
Physically, U must be positive for all x. Minimizing by setting the derivative to zero, we see
the minimum of U is positive only if |M| ≤
√
L1L2. The bound is saturated for inductors that
practically overlap, or more generally for any configuration where all flux that goes through
one inductor also goes through the other, such as the two coils of an ideal transformer.
(b) When the inductors are in series, they have the same current. The total emf is
E = −

L1
dI
dt
+ M
dI
dt
+ L2
dI
dt
+ M
dI
dt

= −(L1 + L2 + 2M)
dI
dt
which means
Leff = L1 + L2 + 2M.
Incidentally, since Leff must be positive, this implies the bound M > −(L1 + L2)/2, though
this is weaker than the bound in part (a).
(c) When the inductors are in parallel, they have the same emf, so
E = −L1
dI1
dt
− M
dI2
dt
= −L2
dI2
dt
− M
dI1
dt
.
Solving the system gives
Leff =
L1L2 − M2
L1 + L2 − 2M
.
This also implies the bound |M| <
√
L1L2, as shown in a different way in part (a).
[3] Problem 5 (Kalda). An electrical transformer is connected as shown.
Both windings of the transformer have the same number of loops and the self-inductance of both
coils is equal to L. There is no leakage of the magnetic field lines from the core, so that the mutual
inductance is also equal to L.
(a) Find the current in both loops immediately after the switch is closed.
(b) Find the currents as a function of time.
7
Kevin Zhou Physics Olympiad Handouts
Solution. (a) In a transformer, the flux is Φ = L(I1 +I2) and dΦ/dt = EL = L(dI1/dt+dI2/dt).
Since dΦ/dt is finite, then initially I1 + I2 = 0. The voltage loop rule gives
E = I1R + L(dI1/dt + dI2/dt) = I1R − I2r
Using the initial condition of I1 = −I2 gives I1 = E/(R + r).
(b) The voltage loop rules give
E = I1R + L(dI1/dt + dI2/dt), L(dI1/dt + dI2/dt) + I2r = 0.
Let I ≡ I1 + I2. Combining the equations give
E
R
= I +
L(R + r)
Rr
dI
dt
which has solution
I =
E
R
(1 − e−t/τ
), τ ≡ L

1
r
+
1
R

.
Using I1 = E/R − L
RdI/dt and I2 = −L
r dI/dt, we can extract
I1 =
E
R

1 −
r
r + R
e−t/τ

, I2 = −
E
(R + r)
e−t/τ
.
2 AC RLC Circuits and Impedance
Idea 2: Impedance
Current and voltage can be promoted to complex quantities,
V (t) = V0 cos(ωt + ϕ), Ṽ (t) = Ṽ0eiωt
, Ṽ0 = V0eiϕ
where the physical quantity is the real part. This is useful because we can relate Ṽ and ˜ I in
all cases by Ṽ = ˜ IZ where Z is the impedance, and
ZR = R, ZC =
1
iωC
, ZL = iωL
for the three common circuit elements. Impedance is extremely useful for finding the steady
state response of a circuit. If you’re interested in the transients, you can find them by
applying the techniques of M4 to the Kirchhoff’s loop rule equation.
Idea 3: Power
Turning parameters complex and taking the real part works because we’re dealing with
linear equations. As a result, it doesn’t work for energy or power, which are quadratic.
In particular, the power dissipated in an element is not Re(˜ IṼ ), but rather
P = IV = Re(˜ I)Re(Ṽ ) = I0V0 cos(ωt)cos(ωt + ϕ)
8
Kevin Zhou Physics Olympiad Handouts
where ϕ is the phase angle of Z. To compute the average power, note that
P =
V 2
0
|Z|
cos(ωt)(cos(ωt)cos(ϕ) − sin(ωt)sin(ϕ)).
The second term averages to zero, while cos2(ωt) averages to 1/2 as usual, so
P =
1
2
V 2
0
|Z|
cos(ϕ) =
1
2
I0V0 cos(ϕ).
We can decompose a general impedance as Z = R + iX, in which case cosϕ = R/|Z|, and
P =
1
2
I0V0R
|Z|
=
1
2
I2
0R.
It’s conventional to define I2
rms = I2
0/2 to be the average value of I2, giving
P = I2
rmsR =
V 2
rms
R
.
Example 4
Find the magnitude of the current through a series RLC circuit with AC voltage source
V0 cosωt.
Solution
We promote the voltage and current to complex numbers,
V (t) = V0eiωt
.
Kirchhoff’s loop rule (subject to the caveats in E5) is
L ˙ I + IR +
Q
C
= V0eiωt
.
This is quite similar to a damped driven harmonic oscillator, except that we want to get I(t),
rather than Q(t). To get the steady state behavior, we guess
I(t) = I0eiωt
.
Then we have
˙ I(t) = (iω)I0eiωt
, Q(t) =
1
iω
I0eiωt
.
Plugging this in, we find
iωL + R +
1
iωC

I0 = V0.
Solving for the magnitude of the current gives
|I0| =
|V0|
|iωL + R + 1/iωC|
=
|V0|
p
R2 + (ωL − 1/ωC)2
which is maximized when ω = 1/
√
LC, as we saw in M4. We could also have gotten straight
to this last step by just using complex impedances.
9
Kevin Zhou Physics Olympiad Handouts
