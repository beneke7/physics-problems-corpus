---
id: solution-document-gpho-2017-theory-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2017_theory_solutions.pdf
extraction_method: pdftotext-raw
mapped_problems: [gpho-2017-t1, gpho-2017-t2, gpho-2017-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/gpho/2017_theory_solutions.pdf."
---

Problem T1. Main sequence stars (11 points)
Part A. Lifetime of Sun (3 points)
i. (0.7 pts) Since the Sun behaves as a perfectly black body
it’s total radiation power can be expressed from the Stefan-
Boltzmann law as
P = 4πR2
σT4
= 4.5 × 1026
W.
(Formula 0.5, nuber 0.1, units 0.1 pts.)
ii. (0.5 pts) From the energy conservation law
4mpc2
= mHec2
+ 2mec2
+ W0
(0.2 pts). Then
W0 = 4mpc2
− mHec2
− 2mec2
= 24MeV.
(Formula 0.1, nuber 0.1, units 0.1 pts.)
iii. (0.5 pts) The fusion of four protons creates two positrons
which in turn annihilate with two electrons meaning that an
additional energy of W1 = 4mec2
= 2.0MeV is released. Then
the total energy released is W2 = W0+W1 = 26MeV. (Noticing
that 4 particles annihilate per one He atom 0.2, formula 0.1,
number 0.1, units 0.1 pts.)
iv. (1.3 pts) Over the course of Sun’s lifetime the central part
of the Sun will undergo fusion and release energy. The total
number of reactions that will take place is
N =
M
8
1
4mp
(0.3 pts). And thus, the total energy released is
E = NW2 =
1
8
M
W2
4mp
= 1.56 × 1044
J
(0.3 pts). The total lifetime of the Sun can be approximated as
τ =
E
P
= 1.1 × 1010
y.
(Formula 0.4, nuber 0.1, units 0.1 pts.)
The current age of the sun τ = 5 × 109
y is approximately
two times smaller than the calculated theoretical age (0.1 pts).
Part B. Mass-luminosity relationship of stars (4.5 points)
i. (0.4 pts) Since all of the star’s mass is below the point Q,
the gravitational acceleration is the same as that of a point
mass with a mass of M (0.2 pts). Then
aQ =
GM
R0
2
2 =
4GM
R2
0
(0.2 pts).
ii. (0.4 pts) By applying Gauss’s law for gravity for a sphere
surrounding the stellar core
4π

R0
2
2
aP = 4πG
M
8
(0.2 pts);
aP =
GM
2R2
0
(0.2 pts).
iii. (0.4 pts) Since the gravitational acceleration decreases
linearly along the thickness of the spherical layer, the aver-
age acceleration experienced by the spherical layer is aavg =
aP +aQ
2 = 9GM
4R2
0
(0.1 pts). Furthermore, a piece of the small
spherical layer with an area A has a mass of
m =
A
4π R0
2
2
7M
8
=
7
8π
MA
R2
0
(0.1 pts). From the Newton’s second law
F = maavg =
63
32π
GM2
A
R4
0
(0.2 pts).
iv. (0.4 pts) The previously calculated force acting on the
small piece of the narrow spherical layer can also be expressed
as
F = Apc =
63
32π
GM2
A
R4
0
(0.3 pts). Then
pc =
63
32π
GM2
R4
0
(0.1 pts).
v. (1 pt) From the ideal gas law
pc
4π R0
2
3
3
= nRgTc
where n is the number of moles of protons and electrons inside
the stellar core (0.6 pts; 0.4 if electrons are forgetten). Since
the mass of an electron is negligible compared to the mass of a
proton, n = 2M
8mpNa
= M
4mpNa
(0.3 pts). Then
pc
πR3
0
6
=
MRgTc
4mpNa
=
MkBTc
4mp
and
pc =
3
2π
MkBTc
R3
0mp
(0.1 pts).
vi. (0.4 pts) Combing both expressions for pc, one gets
63
32π
GM2
R4
0
=
3
2π
MkBTc
R3
0mp
(0.2 pts).
R0 =
21
16
GMmp
kBTc
(0.2 pts).
— page 1 of 5 —vii. (1.5 pts) Writing out the energy balance for a spherical
shell with a radius of x and thickness dx concentric to the star
−4πx2 dT
dx
κ = P
(0.4 pts) and rearranging the terms, one gets
−4πκdT = P
dx
x2
(0.2 pts). Integrating from x = R0
2 to x = R0 yields
−4πκ
Z T(R0)
Tc
dT = P
Z R0
R0
2
dx
x2
−4πκ(T(R0) − Tc) = −P

1
R0
−
2
R0

4πκTc =
P
R0
(0.2 pts). Then
P = 4πκTcR0
(0.3 pts). When similar expression is obtained without integ-
ration (leading to a wrong factor), only 0.2 for integration is
lost.
Substituting κ = f(Tc)
ρc
, ρc = 3M
4πR3
0
and R0 = 21
16
GMmp
kBTc
, we
ultimately end up with
P =

21
8
Gmp
kB
4
π2
T3
c f(Tc)
3
M3
(0.3 pts). Thus γ = 3 (0.1 pts).
Part C. Proton-proton fusion chain (3.5 points)
i. (1.5 pts) First, we must convert the units to base units:
[c] = m/s,
[G] = m3
·kg−1
s−2
,
[kB] = m2
·kg·s−2
·K−1
(0.1 pts),
[NA] = mol−1
,
[~] = m2
·kg/s (0.1 pts),
[e] = C,
[ke] = kg·m3
·C−2
s−2
(0.1 pts).
Let α = [c]β
[G]γ
[kB]δ
[NA]ε
[~]µ
[e]φ
[ke]ω
. Then we can create
an equation for each unit:
m: β + 3γ + 2δ + 2µ + 3ω = 0
s: −β − 2γ − 2δ − µ − 2ω = 0
kg: −γ + δ + µ + ω = 0
K: −δ = 0
mol: −ε = 0
C: φ − 2ω = 0.
(0.1 pts for each equation.) After solving the system of equa-
tions and setting ω = 1, we get β = −1, γ = 0, δ = 0, ε = 0,
µ = −1, φ = 2, and ω = 1 (apart from δ and ε, 0.1 pts for each
value). Thus
α =
kee2
c~
= 7.3 × 10−3
.
(0.1 pts for the numerical value.)
ii. (1 pt) Let the distance to the centre of mass for both protons
be x. Then the force acting on one of the protons is F(x) = kee2
4x2
and thus the potential energy is
Π =
Z x
∞
F(x)dx =
kee2
4
Z x
∞
dx
x2
=
kee2
4x
.
(0.3 pts out which 0.1 goes for correctly treating the distance
to the centre of mass and distance between the protons.) By
applying the energy conservation law at x =
rp
2 and x = ∞, we
get
kee2
2rp
=
mpv2
2
(0.2 pts). Furthermore
mpv2
2
=
3kBT0
2
(0.3 pts). T0
can be expressed as
T0
=
kee2
3kBrp
= 6.5 × 109
K
(0.1 pts for formula). This is around T0
Tc
= 3600 times larger
than the actual temperature of the stellar core (0.1 pts).
iii. (1 pt) The total energy of a proton moving at speed v is
W =
mpv2
2 and the potential energy, as expressed in the last sub-
task, is Π(r) = kee2
2r = αc~
2r . The moment at which the proton
”dives into the tunnel” happens when W = Π(r) = Π(r?) = αc~
2r?
(0.3 pts). Thus r? = αc~
mpv2 (0.1 pts). Then the probability of
the tunnelling taking place is
p ≈ exp
"
−2~−1
Z r?
0
s
mpαc~

1
r
−
1
r?

dr
#
=
(0.3 pts)
= exp

−2~−1
p
mpαc~
π
√
r?
2

= exp

−
παc
v

(0.3 pts).
— page 2 of 5 —Problem T2. Water tube (8 points)
i. (0.5 pts) There is a water column of height H between
points P and Q creating an additional pressure of pP − pQ =
ρgH = 3000Pa. (Formula 0.3 pts, value 0.1 pts, units 0.1 pts.)
N N
F1
F2
F3
ii. (1.5 pts) The external forces acting
on the system are sketched on the figure
to the right. F2 = Ap0 = 100N (for-
mula 0.1 pts, value with units 0.1 pts)
and F1 = 1.1Ap0 = 110N (formula 0.1
pts, value with units 0.1 pts) is the at-
mospheric pressure acting on the pistons.
F3 = (M+m)g = 4.1N (formula 0.1 pts,
value with units 0.1 pts) is the gravita-
tional force acting on the water-piston
system, where M = (H + 0.1h)Aρ =
0.31kg (formula 0.1 pts, value with units
0.1 pts) is the mass of the water column. N is the total normal
force exerted by the metal cylinder. There is no horizontal
component for the normal force since it cancels out due to
symmetry. N can be expressed from the Newton’s 2nd law
applied on the vertical axis
N + F2 + F3 − F1 = 0
N + Ap0 + (M + m)g − 1.1Ap0 = 0
N = 0.1Ap0−(M+m)g = 0.1Ap0−((H+0.1h)Aρ+m)g = 5.9N.
(Formula 0.2 pts, value with units 0.1 pts.) Each correctly
shown force in the sketch: 0.1 pts (0.4 pts overall).
iii. (1.2 pts) Notice that N = 0.1Ap1 (0.6 pts), where
p1 = 10N/A = 59kPa
(formula 0.2 pts) is the pressure at the joint of the two tubes.
Therefore,
pQ = p1 − ρg(H − h) = 57kPa.
(Formula 0.1 pts, value with units 0.1 pts.) and
pP = p1 + ρgh = 60kPa.
(Formula 0.1 pts, value with units 0.1 pts.)
Alternatively, applying the Newton’s law on the vertical axis
for the piston, one gets
Ap0 − ApQ + mg + 1.1ApP − 1.1Ap0 = 0
(0.3 pts),
−0.1Ap0 + mg − ApQ + 1.1A(pQ + ρgH) = 0
(0.3 pts),
pQ = p0 − 11ρgH − 10
mg
A
= 57kPa
(formula 0.2 pts, value with units 0.1 pts).
pP = pQ + ρgH = p0 − 10ρgH − 10
mg
A
= 60kPa
(formula 0.2 pts, value with units 0.1 pts).
iv. (0.8 pts) Newton’s 2nd law on the vertical axis for the top
piston can be written out as
mg
2
+ Ap0 − ApQ + T = 0
(0.4 pts).
T = A(pQ − p0) −
m
2
g = −A

11ρgH + 10
mg
A

−
mg
2
=
= −11ρgHA −
21
2
mg = −43.5N
The negative sign of the tension force means that the steel bar
is being compressed, not stretched. (Formula 0.2 pts, value
with units 0.1 pts, sign or direction of T 0.1 pts.)
v. (1 pt) During the impact, the metallic tube comes to rest
but the two pistons keep moving downwards because the pistons
and the tube aren’t strongly connected (0.3 pts). As a result,
the volume between the two pistons increases (since the area of
the bottom piston is larger than the top piston) and vacuum
is created (0.3 pts). This causes the atmospheric pressure to
try to reverse the change and push the pistons upwards (0.2
pts). Because no energy is lost in the water-piston system (for
simplicity we assume the friction between the tube and water
/ pistons to be negligible), after the pistons have returned to
their initial position, their speed will be of equal magnitude
and of opposite sign, pointing upwards, which in turn makes
the tube jump (0.2 pts).
vi. (3 pts) Neglecting the pressure of water vapors and of the
water column of 20cm, the pressure between the pistons is zero,
hence the net force acting on the system “water + pistons” is
F = −0.1Ap0 + (m + M)g = 5.9N
(1.3 pt). Because the force is constant throughout the whole
process, the change of momentum for the water-piston system
can be expressed as
(M + m)(−v) − (M + m)v = Fτ ⇒
(1.3 pt)
2v =

0.1Ap0
M + m
− g

τ ⇒
τ = 20
(M + m)v
Ap0 − 10(m + M)g
where v =
√
2gL is the speed of the tube when it reaches the
ground. Thus
τ = 20
M + m
Ap0 − 10(m + M)g
p
2gL = 0.31s.
(Formula 0.2 pts, value 0.1 pts, units T 0.1 pts.)
— page 3 of 5 —Problem T3. Accelerating shock wave (11 points)
i. (1 pt) In the reference frame of the shock wave, the electron’s
initial velocity is ~ v1 = (vx −w,vy,vz) (0.3 pts). After deflecting
against the shock wave, the horizontal component of the velocity
gets flipped (0.2 pts). Thus, the electron’s velocity in the mov-
ing frame of reference, after deflecting against the shock wave, is
~ v2 = (w −vx,vy,vz) (0.1 pts). Moving back into the laboratory
frame of reference, the final velocity is ~ v0
= (2w − vx,vy,vz)
(0.2 pts for x component, 0.1 both for x and y components).
y
x
ii. (1 pt) After being hit by the shock
wave, the electron starts moving with
speed v = 2w. Due to the magnetic
field, it moves along a circular traject-
ory, and at the initial moment of time,
the trajectory is perpendicular to the
front. Additionally, the electron peri-
odically undergoes collisions against the
shock wave, and the x-coordinates of
the collision points grow in time. This is
enough to draw an approximate sketch
of the electron’s trajectory.
Grading: trajectory is made from circular segments (0.3 pts)
which are connected at the reflection points so that instantan-
eous change of direction is clearly seen (0.2 pts). 0.2 pts if the
trajectory starts parallel to the x-axis, 0.1 pts if the direction
of motion is shown by arrow or described in another way; 0.2
pts if the reflection points advance in the same direction as the
shock wave.
iii. (0.5 pts) The Lorentz force acting on the electron acts as
a centripetal force
evB0 =
mv2
R
(0.4 pts). Thus R = mv
eB0
= 2mw
eB0
(0.1 pts).
iv. (1 pt) Before the first collision, the electron’s x-coordinate is
x1(t) = Rsin 2π t
T

(0.2 pts) and the shock wave’s x-coordinate
is x2(t) = wt (0.1 pts). The second impact happens when
x1(t) = x2(t) (0.2 pts). Thus
2mw
eB0
sin

B0e
m
t2

= wt2
sin

B0e
m
t2

=
1
2
B0e
m
t2
(0.1 pts). Substituting u = B0e
m t2, one gets
sin(u) =
u
2
(0.2 pts). This equation can be solved numerically to get
u = 1.895 (0.1 pts). Thus t2 = 1.895 m
B0e (0.1 pts).
v. (0.5 pts) Every time a collision happens, the electron and
the front are at the same place, with the same value of the
x-coordinate. This means that the electron’s and shock wave’s
average velocities in the direction of the x-axis are the same.
In other words, vx = w (0.5 pts).
vi. (1.5 pts) It is easier to find the value of k by taking a
derivative from both sides of the equation as it gets rid of
the constant. Then v̇y + kvx = 0 (0.2 pts). The only forces
acting on the electron are the Lorentz force and the repulsion
forces between the electron and the shock wave (0.3 pts). Since
the shock wave affects the electron only in the horizontal dir-
ection (0.2 pts), the acceleration’s vertical component comes
purely through the Lorentz’s force (0.2 pts). This means that
mÿ = −evxB0 holds throughout the electron’s motion (0.2 pts).
In other words, v̇y = −B0e
m vx. Plugging this to the conservation
law, we get −B0e
m vx + kvx = 0 (0.3 pts). Thus k = B0e
m (0.1
pts).
vii. (1 pt) By taking a derivative from the conservation law
vy + B0e
m x = const, we get ay + B0e
m vx = 0 (0.5 pts). Over the
long run, the average x-directional moving speed of the electron
is the same as that of the shock wave’s. Thus ay + B0e
m w = 0
(0.4 pts) and ay = −B0e
m w (0.1 pts).
viii. (1 pt) Over the course of one period, there is a constant
acceleration ax acting on the electron in the x-direction, both
in the lab frame, and in the shock wave’s frame; the behaviour
is the same what would be if there were a free fall acceleration
g = a. If we let x be the relative distance between the electron
and the shock wave, and the initial x-directional momentum at
x = 0 be px0, then the quantity E =
p2
x0
2m =
p2
x
2m + maxx is con-
served over the course of one period (energy conservation law)
(0.2 pts). Thus px =
p
p2
x0 − 2m2axx (0.1 pts). On the phase
diagram, this corresponds to a parabola who’s axis of symmetry
is at px = 0 (0.2 pts). Furthermore, at x = 0, the momentum of
the electron gets flipped due to the collision against the shock
wave, meaning that there is a straight line from (0,−px0) to
(0,px0) (0.3 pts). This gives enough information to draw the
phase diagram (correctly drawn figure 0.1 pts, arrow shown 0.1
pts).
— page 4 of 5 —-px0
px0
x1
px
x
ix. (1.5 pts) The area under the phase diagram can be found
by integrating px(x)dx from x0 = 0 to x1 =
p2
x0
2m2ax
and multiply-
ing the result by two (since the phase diagram is symmetrical
about px = 0). Thus
S = 2
Z x1
0
q
p2
x0 − 2m2axxdx = 2px0
Z x1
0
r
1 −
x
x1
dx =
=
4
3
px0x1 =
2
3
p3
x0
m2ax
=
2
3
mv3
0
ax
(0.3 pts). Due to the conservation of this quantity (we use its
initial value taken from the problem text),
2
3
mv3
0
ax
=
1.36(mw)2
B0e
ax =
1
2.04
v3
0B0e
mw2
(0.3 pts), where v0 is the electron’s speed at x = 0. The
electron will fall behind the shock wave when
mv2
0
2 > eV0 or
v0 >
q
2eV0
m = w
√
ε (0.2 pts). The horizontal acceleration
comes from Lorentz force ax =
B0evy
m (0.3 pts). Thus
1
2.04
B0e
mw2
w3
ε
3
2 =
B0evy
m
1
2.042
wε
3
2 = vy
(0.2 pts).
Since vy  vx, Wf ≈
mv2
y
2
Wf =
ε3
2.04
mw2
2
=
ε2
2.042
eV0
(0.2 pts).
x. (2 pts) In the reference frame of the shock wave, initially,
the electron’s x-directional and y-directional momenta are px
and py respectively. In the limiting case, the electron’s final
x-directional momentum is 0. Since the shock wave acts only in
the x direction, py will stay same throughout the motion. The
Lorentz invariant of the 4-momentum, initially and after the
electron has come to rest, can be written out as
E2
= p2
xc2
+ p2
yc2
+ m2
0c4
(0.6 pts),
(E − eV0)2
= p2
yc2
+ m2
0c4
(0.6 pts). Subtracting one equation from the other, we get
2EeV0 − e2
V 2
0 = p2
xc2
= m2
relc2
w2
= E2 w2
c2 . Thus
E2 w2
c2
− 2EeV0 + e2
V 2
0 = 0
(0.2 pts),
E =
eV0c2
w2
1 ±
r
1 −
w2
c2
!
;
(0.2 pts) with minus sign we would obtain p2
yc2
= (E − eV0)2
−
m2
0c4
< (E − eV0)2
− e2
V 2
0 c4
/w4
< 0 which is not acceptable.
Thus, we need to take the plus sign (0.2 pts):
E =
eV0c2
w2
1 +
r
1 −
w2
c2
!
;
for w  c we can approximate E = 2eV0c2
w2 (0.1 pts). So, the
electron will fall behind the shock wave if its relativistic energy
E ≥ 2eV0c2
w2 (0.1 pts).
— page 5 of 5 —
