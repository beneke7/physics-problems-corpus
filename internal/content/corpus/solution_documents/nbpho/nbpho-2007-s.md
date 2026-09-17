---
id: solution-document-nbpho-2007-s
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2007_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [nbpho-2007-coefficient-friction, nbpho-2007-laser, nbpho-2007-mars, nbpho-2007-pendulum, nbpho-2007-rotating-disk, nbpho-2007-temporal-focusing, nbpho-2007-truck, nbpho-2007-wire]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/nbpho/2007_S.pdf."
---

1. Wire (7 pts)
1)UsingtheOhm’s lawindifferential form,E = ρj,andnoting thatthe
electric field must be the same both in the core and in the coating, we
conclude jcρc = jaρa ⇒ jc = æaρa/ρc. On the other hand, the net
current I = π
4 [a2
jc + (b2
−a2
)ja] = π
4 ja(b2
− a2
+a2
ρa/ρc),hence
ja =
4
π
I
b2 + a2(ρa − ρc)/ρc
≈ 0.15A/mm2
;jc ≈ 0.25A/mm2
.
2) Writing down the circulation theorem for a circular concentric loop
of radius c around the straight wire, 2πcB1 = µ0I, we obtain B1 =
µ0I/2πc = 2I
c
· 10−7
H·m−1
= 4.8 · 10−5
T.
3) Using the technique as before, but noting that the current flowing
through the smaller loop of radius a/2 is Ic = jc
π
4
a2
, we obtain
B2 = µ0Ic/πa = µ0jca/4 = πjca · 10−7
H·m−1
= 2.0 · 10−4
T.
2. Pendulum (7 pts)
1) The smallness of the oscillations means that the angle of the arc for-
med by the rod is small, α = l/R  1. Therefore, the force returning
the ball is almost horizontal, F = k/R = kα/l, and the horizontal
displacement of the ball is x = R(1 − cosα) ≈ Rα2
/2 = lα/2, hence
α = 2x/l.
For horizontalequation of motion,we can neglect the gravity force,
which is of the order of mgα  αk/l; the right-hand side here hap-
pens to be the elastic force. So, mẍ = −kα/l = −2kx/l2
, hence
ω =
p
2k/m/l; the period T = 2π/ω = πl
p
2m/k.
2) Elastic energy of the rod depends apparently only on its shape, i.e.
on the curvature radius R, or, equivalently, on the binding angle α.
First, we derive the expression for that energy: Πr =
Rx
0
Fdx =
R
(2kx/l2
)dx = kx2
/l2
= kα2
/4. This is to be compared with the
changeofthegravitationalpotentialenergyΠg = −mg(l−Rsinα) =
−mgl(1−sinα/α) ≈ −mglα2
/6. So,the vertical position is stable, if
kα2
/4 − mglα2
/6 > 0, i.e. 3k > 2mgl.
Remark: a simple-minded force balance of the ball to the direction,
perpendicular to the rod leads to another result k > mgl. This is not
correct, because if we bind the rod with a force applied to its tip, small
displacements of the tip are not perpendicular to the rod (as one might
think). In particular, this means that if there are both perpendicular
force F and tangential tensionT in the rod, the curvature radius R will
depend also on the tension T. In our solution, we avoided such kind
of complications by noting that the elastic energy depends only on the
shape of the rod (if we bind the rod with some force F while keeping
T = 0, we don’tneed to bother about this effect).
3. Temporal focusing (10 pts)
1) Apparently, t0 = (a + b)/v0 = (a + b)
p
m/2U0e.
2) Apparently, t = a/va + b/vb ≈ t0 − [a(va − v0) + b(vb − v0)]/v2
0.
On the other hand, for constant voltage U(t), vb = v0. For the interval
between B and C, wehave ∆(mv2
/2) ≈ mv0(va − v0) = −Ue. So,
t = t0 + Uea/mv3
0 = t0 +
U
U0
a
2
r
m
2U0e
.
3) For the changing voltage, we can use the result of the previous ques-
tion, but the voltage value should be taken at the moment of electron
passing the gap. Also, the terminal velocity is changed, v1 − v0 is rela-
tedto the change of the kinetic energy e[U(t + ta) − U(t)]. The travel
time of the later electrons passingB at acertain moment oftime t > 0
should as much shorter as it was delayed,i.e.
t1 − t2 =
r
m
8U3
0 e
{a[U(0) − U(t)] + b[U(t + ta) − U(t)]} = t,
where the flight time ta ≈ a/v0 [since U  U0]. Using the suggested
approximation, we obtain
r
m
8U3
0 e
b[U(t + a/v0) − U(t)]} = t.
If we seek a quadratic solution U(t) = At2
+ Bt,we get
2Ata(t + ta/2) + Bta =
t
b
r
8U3
0 e
m
.
So,
A =
r
8U3
0 e
m
/2tab =
r
8U3
0 e
m
p
2eU0/m
ab
=
4U2
0 e
mab
,
and B = −Ata. Finally we obtain
U(t) =
4U2
0 e
mab
t

t − a
p
m/2U0e

.
4) Lost are those electrons, which are in the interval between B and C,
when the voltage drops to 0. The duration of the time interval, when
these were emitted, is τ = a/v0. So, the asked fraction is given by
τ/T = a
T
p
m/2U0e.
4. Coefficient of friction (12 pts)
1) This is a straightforward question: we measure the tangent of the
slope of the board, when the brick starts sliding, µ1 = tanα1, for the
given setup, µ1 ≈ 0.24.
2) We put the ball and brick together on the slope, the ball touching
both the brick and board and being upwards on the slope. So, the ball
pushes the brick down and the sliding is expected to take place for so-
mewhat smaller sloping angles. For the given setup, that critical angle
turns out togive tanβ ≈ 0.12.
Now we need to express µ knowing µ2 ≈ 0.24 and β =
arctan0.12. First we write the torque balance for the ball with res-
pect to the touching pint with the board: mgRsinβ = µNR + NR,
where N is the pressure force between the ball and the brick. Hence,
N = mg
µ+1
sinβ.
Now, we use the normal (to the board) force balance for the brick,
to find the pressure force between the board and the brick: N2 =
Mg cosβ + µmg
µ+1
sinβ. Finally, we have the tangential force balance
for the brick:
mg
µ + 1
sinβ + Mg sinβ = µ2g

M cosβ +
µm
µ + 1
sinβ

.
This equation can be simplified to
m
M
+ µ + 1 = µ2
h
(µ + 1)cotβ + µ
m
M
i
,
from where
µ =
m
M
+ 1 − µ2 cotβ
µ2(cotβ + m
M ) − 1
.
Using the measuredvalues we get µ ≈ 0.2.
5. Rotating disk (7 pts)
1) We notice that there is no image of the orange pulse, hence it must
have taken place immediately before the shutter release. So the blue
pulse is first, red — the second etc. The exposure time must have been
triple and quadruple flash interval, 300 ms < t < 500 ms.
2)Thedisplacementofthelampbetweentwosubsequent pulses canbe
representedasthesumoftwocomponents: ~ ri = ~ vτ +2Rsin(ωτ/2)~ ei,
where each next unitvector~ ei+1 is rotatedwithrespecttothe previous
one (~ ei) by angle ωτ. So, if the starting points of the displacement vec-
tors~ ri coincide, then the end-points mustbe on a circle, at equal angu-
lar distances ωτ from each other,see figure.
Inourcaseweredrawthedisplacementvectors1,2and3asvectors
withcommonorigin, ~ PA, ~ PB,and ~ PC. Since thestartingpointsofthe
vectors 2Rsin(ωτ/2)~ ei are brought together to the point O, their end-
points lay on the circle, the center of which can be found as the center
of the circle drawnaround the triangle ABC.
1
2
3
1
2
3
A
B
C
O
P
L
The velocity of center of the disk is found as the ratio of the
length PO and the interval τ: v ≈ 65cm/s. The angular velocity
is found as the ratio of the angle 6 AOB = 6 BOC and the inter-
val τ: ω ≈ 23rad/s. Radius of the disk is found from the length
|OA| = 2Rsin(ωτ/2) = 2Rsin6 BOC ≈ 1.5R; using the scale of
the figure, 1.5R ≈ 8cm and R ≈ 5cm.6. Truck (7 pts)
1) First, since l is small, T1 ≈ T. From the radial force balance, N ≈
Tα = Tl/R, where α is the angle, by which the direction of the rope is
changed. From the tangential balance, T1 = T − µN = T(1 − µα).
2) If the angle is not small, we divide the touching segment into M
smallsegments andusetheprevious result: Ti+1 = Ti(1−µα/M). So,
TM = T(1 − µα/M)M
→ Te−µα
(asM → ∞). So, T0
= Te−µl/R
.
3) Using the previous formula and the provided numerical values (α =
2π),we obtain
T = Mg sinφe−µα
≈ 800N.
4) If we re-examine the solution to the second question, we notice that
we haven’t used the assumption of cylindrical shape. What matters, is
just the rotation angle of the tangent to the rope. So, the answer does
not change for egg-like cross-section.
7. To the Mars (10 pts)
1) Apparently v2
1 = v2
0 − 2gR0.
2) The trajectory is ellipse touching Earth orbit at its perihelion and
Mars orbit at its apohelion..
3) According to the Kepler’s third law, the time T = 1
2
T0(a/Re)3/2
,
where T0 = 1 year is the period of Earth and a = (Re + Rm)/2 is the
longer semi-axes of the trajectory. Numerically, T = 0,70 years.
4) The full energy (kinetic plus potential) of the space ship is E =
−Gm/2a = −Gm/(Re + Rm) = −Gm/Re + m
2
(v1 + ve)2
. So,
1
2
(v1 + ve)2
= G Rm
Re(Re+Rm)
= v2
e
Rm
Re+Rm
and
v1 = ve
r
2Rm
Re + Rm
− 1
!
≈ 0.095ve ≈ 2.86km/s.
Hence, v0 =
√
11.22 + 2.862 = 11.6km/s.
The relative speed near the Mars can be written using the approp-
riate change of indices in the expression for v1 (alternatively, it can be
foundanalogouslyto v1):
we first find the speed with respect to Sun from the expression of
the total energy: v3 =
v3 = vm
r
2Re
Re + Rm
− 1
!
≈ −0.106ve
r
Re
Rm
≈ −2.59km/s.
5) Apparently Mi = mevi/u
, so that Ma/Mb = e(va−vb)/u
= e0.4
≈
1.5.
8. Laser (12 pts)
1) These are concentric circles reflected back towards the laser. They
can be seen, if laser light is directed through the hole in the paper and
thepaperis usedasthescreen. Thepositionandsizeofthecircles is in-
dependent of the incidence angle (for large incidence angles, the circles
will be somewhat elongatedalong the direction ofslanting).
2)Theexactcalculationofthediffractionpatternonsuchmicrospheres
is very difficult task, evidently beyond the possibilities of an olympiad
problem. So, we have to work as a detective, drawing conclusions from
the observed data. First, the diffraction pattern is not where the reflec-
tion form the stripe would be; so, it doesn’t work as a reflecting diffrac-
tion grating. If the packing were regular, andthe optical path difference
(required for the diffraction) were gathered due to scattering on neig-
hboring spheres, there would be a pattern, characteristic to diffraction
on crystal lattices (regularly positioned spots). If the optical path diffe-
rence were gathered due to scattering on neighboring spheres, with ir-
regular packing, the path difference would be random, and hence, the
diffraction pattern would be also random. This would not explain the
regular circular pattern.
On the other hand, if the optical path difference were gathered on
a single sphere, the pattern would be axially symmetric,as is the sphere
itself. So, this fits well with all the experimental observations (except
forslight elongationofthe circles forlarge incidence angles,which may,
perhaps, be explained by the refraction in the coating layer).
On a single sphere, the light is reflected partially back on the front
surface, andpartially refractsinto thesphere,reflects internally andref-
ractsbackintotheair(inourrough analysis,weneglectmultiplepartial
reflections). For beams falling close to the axes of the sphere, the out-
going beams are reflected almost in the opposite direction. So, in its
central part, the sphere acts almost like a reflecting disk.
In our very rough model, we substitute the spheres by disks of app-
roximately the same diameter as the spheres, oriented perpendicularly
to the incident beam. Then, all the microspheres provide maxima and
minima in the samedirections.
3) We measure the diameter of the first dark ring d ≈ 1.1cm, and the
distance between the laser and the strip l ≈ 80cm. Then, the diameter
of the spheres can be estimated as the diameter of the effective light-
reflecting disk, D ≈ λl/d ≈ 50µm.
