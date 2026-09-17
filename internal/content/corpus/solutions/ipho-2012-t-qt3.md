---
id: ipho-2012-t-qt3
source: ipho
language: en
solution_language: en
translated: false
problem: ipho-2012-t-qt3
solution_type: official
source_document: solution-document-ipho-2012-t-s
source_pdf: cache/phoxiv/ipho/2012_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/ipho/2012_T_S.pdf."
---

Problem T3. Protostar formation (9 points)
i. (0.8 pts)
T = const =⇒ pV = const
V ∝ r3
∴ p ∝ r−3
=⇒
p(r1)
p(r0)
= 23
= 8.
ii. (1 pt) During the period considered the pressure is negli-
gible. Therefore the gas is in free fall. By Gauss’ theorem and
symmetry, the gravitational field at any point in the ball is
equivalent to the one generated when all the mass closer to the
center is compressed into the center. Moreover, while the ball
has not yet shrunk much, the field strength on its surface does
not change much either. The acceleration of the outermost
layer stays approximately constant. Thus,
t ≈
%
2(r0 − r2)
g
where
g ≈
Gm
r2
0
,
∴ t ≈
$
2r2
0(r0 − r2)
Gm
=
$
0.1r3
0
Gm
.
iii. (2.5 pts) Gravitationally the outer layer of the ball is in-
fluenced by the rest just as the rest were compressed into a
point mass. Therefore we have Keplerian motion: the fall of
any part of the outer layer consists in a halfperiod of an ultra-
elliptical orbit. The ellipse is degenerate into a line; its foci are
at the ends of the line; one focus is at the center of the ball (by
Kepler’s 1st
law) and the other one is at r0, see figure (instead
of a degenerate ellipse, a strongly elliptical ellipse is depicted).
The period of the orbit is determined by the longer semiaxis of
the ellipse (by Kepler’s 3rd
law). The longer semiaxis is r0/2
and we are interested in half a period. Thus, the answer is
equal to the halfperiod of a circular orbit of radius r0/2:
!
2π
2tr→0
"2
r0
2
=
Gm
(r0/2)2
=⇒ tr→0 = π
$
r3
0
8Gm
.
Alternatively, one may write the energy conservation law
ṙ2
2 − Gm
r = E (that in turn is obtainable from Newton’s
II law r̈ = −Gm
r2 ) with E = −Gm
r0
, separate the variables
(dr
dt = −
#
2E + 2Gm
r ) and write the integral t = −
' dr √
2E+2Gm
r
.
This integral is probably not calculable during the limitted
time given during the Olympiad, but a possible approach can
be sketched as follows. Substituting
#
2E + 2Gm
r = ξ and
√
2E = υ, one gets
t∞
4Gm
=
( ∞
0
dξ
(υ2 − ξ2)
2
=
1
4υ3
( ∞
0
)
υ
(υ − ξ)2
+
υ
(υ + ξ)2
+
1
υ − ξ
+
1
υ + ξ
*
dξ.
Here (after shifting the variable) one can use
' dξ
ξ = lnξ and
' dξ
ξ2 = −1
ξ , finally getting the same answer as by Kepler’s laws.
iv. (1.7 pts) By Clapeyron–Mendeleyev law,
p =
mRT0
µV
.
Work done by gravity to compress the ball is
W = −
(
pdV = −
mRT0
µ
( 4
3 πr3
3
4
3 πr3
0
dV
V
=
3mRT0
µ
ln
r0
r3
.
The temperature stays constant, so the internal energy does not
change; hence, according to the 1st
law of thermodynamics, the
compression work W is the heat radiated.
v. (1 pt) The collapse continues adiabatically.
pV γ
= const =⇒ TV γ−1
= const.
∴ T ∝ V 1−γ
∝ r3−3γ
∴ T = T0
+r3
r
,3γ−3
.
vi. (2 pts) During the collapse, the gravitational energy is con-
verted into heat. Since r3 ≫ r4, The released gravitational en-
ergy can be estimated as ∆Π = −Gm2
(r−1
4 −r−1
3 ) ≈ −Gm2
/r4
(exact calculation by integration adds a prefactor 3
5); the ter-
minal heat energy is estimated as ∆Q = cV
m
µ (T4 − T0) ≈
cV
m
µ T4 (the approximation T4 ≫ T0 follows from the result
of the previous question, when combined with r3 ≫ r4). So,
∆Q = R
γ−1
m
µ T4 ≈ m
µ RT4. For the temperature T4, we can use
the result of the previous question, T4 = T0
+
r3
r4
,3γ−3
. Since
initial full energy was approximately zero, ∆Q + ∆Π ≈ 0, we
obtain
Gm2
r4
≈
m
µ
RT0
!
r3
r4
"3γ−3
=⇒ r4 ≈ r3
!
RT0r3
µmG
" 1
3γ−4
.
Therefore,
T4 ≈ T0
!
RT0r3
µmG
"3γ−3
4−3γ
.
Alternatively, one can obtain the result by approximately
equating the hydrostatic pressure ρr4
Gm
r2
4
to the gas pressure
p4 = ρ
µRT4; the result will be exactly the same as given above.
— page 5 of 5 —
Problem T1. Focus on sketches (13 points)
Part A. Ballistics (4.5 points)
i. (0.8 pts)
z0 = v2
0/2g
k = g/2v2
0
ii. (1.2 pts) The sketch of the trajectory:
iii. (2.5 pts)
vmin = 3
!
gR
2
— page 1 of 5 —
Part B. Air flow around a wing (4 points)
i. (0.8 pts)
vP = 23m/s
ii. (1.2 pts) Mark on this fig. the point Q. Use it also for taking measurements (questions i and iii).
Formulae motivating
the choice of point Q: av = const
p +
1
2
ρv2
= const
p1−γ
Tγ
= const
iii. (2.0 pts)
Formula: vcrit = c
!
2cp∆T
a2 − c2
Numerical: vcrit ≈ 23m/s
— page 2 of 5 —
Part C. Magnetic straws (4.5 points)
i. (0.8 pts)
Sketch here five
magnetic field lines.
ii. (1.2 pts)
T =
Φ2
2µ0πr2
iii. (2.5 pts)
F =
4 −
√
2
8πµ0
Φ2
l2
— page 3 of 5 —
Problem T2. Kelvin water dropper (8 points)
Part A. Single pipe (4 points)
i. (1.2 pts)
rmax = 3
"
3σd
4ρg
ii. (1.2 pts)
Q = 4πε0ϕr
iii. (1.6 pts)
ϕmax = 2
#
σr/ε0
Part B. Two pipes (4 points)
i. (1.2 pts)
Q0 = 2πε0qrmax/C
ii. (1.5 pts)
q(t) = q0eγt
, γ =
πε0n
C
3
"
6σd
ρg
.
iii. (1.3 pts)
Umax = 6
"
H3gσ2ρd2
6ε3
0
— page 4 of 5 —
Problem T3. Protostar formation (9 points)
i. (0.8 pts)
n = 8
ii. (1 pt)
t2 ≈
!
0.1r3
0
Gm
iii. (2.5 pts)
tr→0 = π
!
r3
0
8Gm
iv. (1.7 pts)
Q =
3mRT0
µ
ln
r0
r3
v. (1 pt)
T(r) = T0
$r3
r
%3γ−3
vi. (2 pts)
r4 ≈ r3
&
RT0r3
µmG
' 1
3γ−4
T4 ≈ T0
&
RT0r3
µmG
'3γ−3
4−3γ
— page 5 of 5 —
