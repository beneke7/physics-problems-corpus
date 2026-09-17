---
id: solution-document-gpho-2019-theory-solutions
source: gpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/gpho/2019_theory_solutions.pdf
extraction_method: pdftotext-raw
mapped_problems: [gpho-2019-t1, gpho-2019-t2, gpho-2019-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/gpho/2019_theory_solutions.pdf."
---

GPhO Muscat 2019
COVER
The 3rd
Gulf Physics Olympiad — Theoretical Competition Solutions
Muscat, Oman — October 7th
2019
— page 1 of 11 —GPhO Muscat 2019
PROBLEM 1
0g
Problem T1. Zero gravity (10 points)
Part A. Zero-g flight (3 points)
i. (0.5 pts) In order for the people on board to experience
weightlessness, the plane would need to be in free-fall and fol-
low a parabolic trajectory. This means that on the figure, only
the part with parabolic trajectory (curved down) corresponds
to zero-g flight.
start end
(0.5pts)
ii. (0.5 pts) Since the plane needs to be in free-fall, there has to
be constant acceleration pointing vertically down of magnitude
g.
direction (0.2pts)
magnitude (0.3pts)
iii. (0.5 pts) Since the plane is in free-fall, the horizontal com-
ponent of the velocity remains constant and at the highest point
of its trajectory, the vertical component is 0. (0.2pts)
Therefore, the speed of the airplane at its highest point is
vpeak = v0 cosα0 = 314km/h. (0.3pts)
iv. (0.5 pts) Because the vertical component is changing with
uniform acceleration −g from vy0 = v0 sinα0 to 0, (0.2pts)
the time taken to reach the highest point is
t0 =
v0 sinα0
g
= 9.5s. (0.3pts)
v. (0.5 pts) The altitude of the airplane at its highest point
can be expressed using the equation for uniform acceleration:
(0.2pts)
hmax = h0 +vy0t−
gt2
0
2
= h0 +
v2
0 sinα2
0
2g
= 8045m. (0.3pts)
vi. (0.5 pts) It is clear that, in order to maximize the time of
weightlessness, the final speed needs to be as big as possible,
equal to cs. (0.1pts)
At the end of weightlessness, the horizontal component of the
velocity is still vxf = v0 cosα0, the vertical must then be
vyf = −
q
c2
s − v2
xy. (0.2pts)
Finally, we get the maximal duration to be
tmax =
v0 sinα0 +
p
c2
s − v2
0 cosα2
0
g
= 38.8s. (0.2pts)
Part B. Glass of water in weightlessness (3 points)
i. (1 pt) The reason why the water retains its shape is due
to surface tension holding it back. In general, when you have
a surface with radius R, the pressure difference between the
inside and outside is given by ∆p = 2σ/R. In weightlessness,
the pressure inside the liquid is uniform throughout the volume
because there is no gravity to pull it down. Therefore, the pres-
sure difference, and hence the radius of curvature, is the same
everywhere along the surface. In other words, the surface of
the liquid must form a part of a sphere with the contact sur-
face with the glass still being at an angle β = 0◦
. Because the
surface is tangent with the glass, the radius of curvature of the
surface must be r as shown in the figure.
(1.0pts)
ii. (1 pt) The volume of water will be the same in both scen-
arios. (0.1pts)
Under normal gravity, the volume was V = πr2
h0 (the volume
of a cylinder). (0.2pts)
Afterwards, the water can be divided into a cylindrical part of
height hmin and spherical part (or more precisely, a cylinder
with a sphere cut out of it) of radius r. (0.2pts)
The volume of the cylindrical part is simply
V1 = πr2
hmin. (0.1pts)
The volume of the spherical part is equal to the difference of a
cylinder with height and radius equalling to r, and a half-sphere
of radius r. That corresponds to a volume of
V2 = πr3
−
1
2
·
4
3
πr3
= πr3

1 −
2
3

=
1
3
πr3
. (0.2pts)
The total volume is therefore
V = V1 + V2 = πr2
hmin +
1
3
πr3
= πr2
h0,
and so
hmin = h0 −
1
3
r = 2cm. (0.2pts)
iii. (1 pt) When the glass is continuously filled, the water
surface will slowly creep up along the glass while maintaining
the same spherical shape. When the water-air-glass interface
reaches the edge of the glass, the surface normal of the glass
wants to flip by 180◦
(corresponding to going from inside the
glass to outside), but this must happen continuously since the
angle of contact between the water and the glass must always
be 0◦
and the glass is filled slowly. This means that while
filling the glass, the surface of the water will slowly “invert”
— page 2 of 11 —GPhO Muscat 2019
PROBLEM 1
0g
and start from having a radius of curvature r curving inwards
to, first, getting flatter while maintaining a spherical shape,
and then becoming completely flat when the volume of the
water is V0, to slowly curving outwards until finally having a
radius of curvature of r as shown in the figure. Note that you
cannot fill the glass any more because then the outside of the
glass would get wet. (0.3pts)
As we can see, the glass will hold the normal volume of the
water that a glass can hold, V0, and additionally a half-sphere
of radius r. (0.2pts)
This corresponds to a total volume of
Vtotal = V0 +
1
2
·
4
3
πr3
= V0 +
2
3
πr3
= 257cm3
. (0.2pts)
(0.3pts)
Part C. Sharpshooter on geostationary orbit (4 points)
i. (0.7 pts) From Kepler’s III law,
T2
0
R3
0
=
4π2
GM2
⊕
, (1)
(0.3pts)
where R0 is the radius of the geostationary orbit and M⊕
Earth’s mass. We don’t know the value of M⊕, but we do
know the gravitational acceleration on Earth:
g =
GM⊕
R2
⊕
. (2)
(0.2pts)
Solving (1) and (2) yields
R0 =
3
r
R2
⊕gT2
0
4π2
= 4.2 × 104
km = 6.6R⊕ (0.2pts)
alternatively, instead of using Kepler’s III law, a student could write
down the force balance (0.3pts)
ii. (1.8 pts) The spaceship moves with speed
v0 =
2πR0
T0
= 3080m/s. (0.1pts)
The bullet will start moving with velocity ⃗ w = ⃗ v0 + ⃗ u0, where
the angle between⃗ v0 and ⃗ u0 can be freely varied. Like any other
satellite, the bullet will start moving along an ellipse around
the centre of Earth. (0.1pts)
Obviously, the bullet can only hit the spaceship at points where
the trajectories of the bullet and spaceship intersect. This cor-
responds to intersections of an ellipse and a circle, and in this
case, there are 2 intersections, since any satellite has only one
closest approach to the centre of mass. (0.2pts)
One of the intersection points is already known — the point
at which the bullet is shot out. From here, it is hopefully easy
enough to see that a suﬀicient solution would be to make the
bullet have an orbital period of 24h, since then, both the bullet
and the spaceship will collide after 24h. (0.5pts)
The rest boils down to finding at what angle does one have to
shoot to maintain the same orbital period. For this one can use
the following reasoning. First note that from Kepler’s III law,
orbital period T relates to the semi-major axis a as T ∝ a3/2
.
Therefore, if we want to maintain T, the semi-major axis needs
to be fixed. (0.2pts)
The semi-major axis is related to the total energy as
Etotal = −
GM⊕mbullet
2a
.
As we can see, fixing the semi-major axis means that the total
energy needs to stay constant and since total energy = kinetic
energy + potential energy, the total speed of the bullet and
the spaceship need to be equal at the instant when the bullet
is shot! (0.4pts)
This can be easily achieved by making the angle between ⃗ v0
and ⃗ u0 such that ⃗ v0, ⃗ u0, and ⃗ w form an isosceles triangle. From
simple geometry, one gets the desired angle to be
90◦
− arccos
u0
2v0
= 11.2◦
. (0.3pts)
iii. (1.5 pts) Note that similarly to the previous part, the only
way to make the bullet and the spaceship collide is to make the
bullet and the spaceship meet at the original intersection point
after some number of orbital rotations. (0.2pts)
In this case, there are actually no other intersection points be-
cause the circle and the ellipse are touching at the point where
the bullet was shot. (0.2pts)
Now, let us find the maximal and minimal orbital period of the
bullet.
If the speed of the bullet is chosen to be u, then the speed
in the laboratory frame is v0 + u. The total energy per mass
expressed at the point where the bullet was shot is
Etotal
mbullet
= −
GM⊕
2a
=
(v0 + u)2
2
−
GM⊕
R0
. (0.2pts)
— page 3 of 11 —GPhO Muscat 2019
PROBLEM 1
0g
Therefore,
a =
R0
2

1 −
R0(v0 + u)2
2GM⊕
−1
. (0.1pts)
From Kepler’s III law,
T2
a3
=
4π2
GM⊕
, (0.2pts)
hence
T =
2π
p
GM⊕

1 −
R0(v0 + u)2
2GM⊕
−3/2
. (0.2pts)
We can simplify this by noting that
T0 =
2π
p
GM⊕

1 −
R0v2
0
2GM⊕
−3/2
,
so
T = T0


1 − R0(v0+u)2
2GM⊕
1 −
R0v2
0
2GM⊕


−3/2
= T0

2 −
R0(v0 + u)2
gR2
⊕
−3/2
u can go from 0 to um so the orbital period can vary from
T(u = 0) = T0 to T(u = um) = 1.41T0. (0.1pts)
By inspection, it is easy to see that choosing the speed such
that T = 4
3T0 would guarantee the smallest number of orbital
period before the collision. Then the collision would happen
after four orbital periods of the spaceship (three for the bullet).
In other words, the smallest possible travel time until hitting
the spaceship is
T = 4T0 = 96days. (0.3pts)
— page 4 of 11 —GPhO Muscat 2019
PROBLEM 2
Problem T2. Controlled fusion (11 points)
Part A. General considerations (0.5 points)
i. (0.5 pts) We need to equate thermal and electrostatic ener-
gies, kBT = eV (0.2pts)
with V = 14kV. (0.1pts)
Hence, the fusion temperature can be expressed in Kelvins as
T = eV/kB (0.1pts)
which yields numerically
T0 =
14keV
kB
=
14 × 103
× 1.60 × 10−19
C·V
1.38 × 10−23
J·K−1 = 1.6 × 108
K.
(0.1pts)
Part B. Tokamak (2.5 points)
i. (0.5 pts) The magnetic field lines curl around the straight
current with the direction determined by the right hand rule
or something equivalent. (0.2pts)
(0.3pts)
Only one fieldline shown: -0.1 pts. No direction of the field-
lines shown: -0.2 pts; wrong direction: -0.1 pts.
ii. (0.5 pts) Very close to the circular loop, the magnetic field
is similar to that of a straight wire. Far away, the magnetic
field lines correspond to that of a magnetic dipole. (0.2pts)
The in-between area can be approximate drawn as shown in
the figure
(0.3pts)
Only one fieldline shown: -0.1 pts. No direction of the field-
lines shown: -0.2 pts; wrong direction: -0.1 pts.
iii. (0.75 pts) Without the infinite wire, the field line would
make a short circular loop around the circular current and
terminate. In the presence of the long wire, a tangential com-
ponent of the magnetic field is added, so the previously circular
magnetic field line starts to drift in the tangential direction
around the infinite wire while still winding rapidly around the
circular loop. This forms a helixal pattern along the surface of
a toroid as shown in the figure. (0.25pts)
(0.5pts)
iv. (0.75 pts) Using similar arguments, without the presence
of the circular loop, the magnetic field lines would make a short
circular loop around the infinite wire and then terminate. If
we add the circular loop, the field lines start drifting along the
field lines of the circular loop that are very close to the center
(the fied lines lie on the z- and r-axis in cylindrical coordinates)
while winding rapidly around the symmetry axis (after all, the
magnetic field strength from the infinite wire is much bigger).
This means that the field line forms a dense helix that’s slowly
getting wider and wider the farther away you go from the plane
of the circular loop until it eventually completes the loop by
coming back very far away from the circular loop. (0.25pts)
— page 5 of 11 —GPhO Muscat 2019
PROBLEM 2
(0.5pts)
If the helix doesn’t get wider, subtract 0.15 pts from the
full score.
Part C. Cold fusion (3.5 points)
i. (1 pt) The electron (muon) experiences an electrostatic force
of
F = −
1
4πϵ0
2e2
R2
, (0.4pts)
where the factor of two comes from the fact that the nucleus
has charge +2e. This is an attractive force and it acts as a
centripetal force
F =
mv2
R
=
p2
mR
(0.4pts)
(formula for centripetal acceleration only yields 0.3 pts). Com-
bining the two, one gets
p =
s
me2
2πϵ0R
. (0.2pts)
ii. (1 pt) According to the uncertainty principle, the standard
deviation of the momentum and the position of the particle
obey the following inequality
σxσp ≥
~
2
, (0.3pts)
where ~ = h/2π is the reduced Planck’s constant. Since we are
after an estimate, the numerical factors do not really matter
so we will omit those from now on. The momentum of the
electron (muon) is always p so σp = p, whereas the standard
deviation of the position is in the order of the radius of the
circle, so σr ∼ R. (0.3pts)
This yields s
me2R
ϵ0
≥ h. (0.1pts)
Solving for R gives
R ∼
h2
ϵ0
me2
. (0.2pts)
For an electron, R(m = me) = 1.7 × 10−10
m, for a muon,
R(m = mµ) = 8.1 × 10−13
m. (0.1pts)
No marks for energy expressions, and no marks for p = mv.
iii. (1 pt) Due to symmetry, we need only consider the force
balance on one of the nuclei because the other one experiences
exactly the same forces. (0.1pts)
The force balance is between the electromagnetic force from
the other nucleus and from the electron (muon cloud). The
first corresponds to a repulsive force of
F1 =
1
4πϵ0
e2
d2
. (0.2pts)
With the electron (muon) cloud, only the charge that is inside
a sphere of radius d contributes to the electromagnetic force.
This can be verified using Gauss’ theorem on the said sphere.
(0.1pts)
The charge inside the smaller sphere is given by q =
−2ed3
/8R3
, because the charge of the sphere scales as the ra-
dius cubed.
(0.2pts)
The force from the cloud is then
F2 = −2e
d3
8R3
1
4πϵ0
e
d2
. (0.2pts)
Now, because of force balance, F1 + F2 = 0, so
1
4πϵ0
e2
d2
−
d3
4R3
1
4πϵ0
e2
d2
= 0. (0.1pts)
Solving for d, one gets
d = R
3
√
4. (0.1pts)
iv. (0.5 pts) Since d scales linearly with R and R is inversely
proportional to the mass, the distance between the nuclei is
reduced by a factor of mµ/me = 207. (0.5pts)
No marks for the answer without any motivation. The
points can be obtained only by summarizing the results of Ciii
and Civ. Using the result of Civ without the result of Ciii gives
0.1 pt.
Part D. Inertial confinement fusion (4.5 points)
i. (0.5 pts) The fluid shell has uniform mass density along its
surface which can be expressed as σ = M/A, where A = 4πr2
is the total area of the shell. (0.2pts)
The mass of the small piece is therefore
∆M = σ∆A = M
∆A
4πr2
. (0.3pts)
ii. (1 pt) Since the external pressure is much bigger than the
internal, the shell will start contracting. (0.2pts)
The total force acting on the small piece is ∆F = p0∆A −
pe∆A ≃ −pe∆A, where a positive force would be pointing ra-
dially outwards. (0.5pts)
The acceleration can therefore be expressed as
a =
∆F
∆M
= −
4πr2
pe
M
. (0.3pts)
iii. (1.5 pts) Since pe ≫ p0, the final pressure pm is also much
smaller than pe. Indeed, the shell accelerates until the pressure
inside becomes equal to the external pressure pe and continues
motion due to inertia, until huge inside pressure stops the mo-
tion. So, final volume is correspondingly much smaller than the
initial — this can be inferred from the adiabatic law V ∝ p−1/γ
.
(0.2pts)
So, the work of the external force can be calculated as
W = pe∆V ≈ peV0. (0.2pts)
This work goes to the internal energy,
W = cV NkBTm, (0.2pts)
— page 6 of 11 —GPhO Muscat 2019
PROBLEM 2
where cV = 3
2kB is the heat capacitance by constant volume per
one particle, and N is the total number of particles. (0.2pts)
Since the gas becomes totally ionized, each DT molecule will
produce 4 particles. (0.2pts)
So, N = 4N0, where
N0 =
p0V0
kBT0
. (0.2pts)
Bringing all expressions together, we obtain
Tm =
pe
4p0
T0 (0.2pts)
To find rm, we combine adiabatic law and ideal gas law to
obtain V γ−1
T = const. This gives V ∝ T−1/(γ−1)
and since
r(V ) ∝ V 1/3
, we get
rm = r

T0
Tm
 1
3(γ−1)
= r

4p0
pe
 1
3(γ−1)
. (0.1pts)
iv. (1.5 pts) To get an estimate of the induced pressure, we
can say that all of the power from the laser goes to increasing
the kinetic energy of the evaporated outgoing flow of mass.
(0.3pts)
If the absolute sign of the rate of change of the mass of the
outer shell is Ṁ, then, by considering a small interval of time
∆t, conservation of energy reads as
P∆t = ∆M
u2
2
= Ṁ∆t
u2
2
. (0.3pts)
Therefore,
Ṁ =
2P
u2
. (0.3pts)
From the conservation of momentum, one can write
4πr2
pe = Ṁu, (0.3pts)
so
pe =
Ṁu
4πr2
=
2P
4πr2u
. (0.3pts)
— page 7 of 11 —GPhO Muscat 2019
PROBLEM 3
Problem T3. RayleighTaylor instability (9 points)
Part A. Instability growth rate (4 points)
i. (1 pt) As can be seen from the figures, what effectively hap-
pens is that a small volume of the upper liquid (a cylinder of
diameter a and height x) is swapped with a same volume of
the lower liquid. (0.3pts)
Since we want to find the change in potential energy, we’re
interested in how much the vertical coordinate of the small
volume changes. That change is equal to x since both volumes
are touching the horizontal symmetry line, albeit from different
sides. (0.2pts)
We can then write the change in potential energy of the upper
liquid as
∆Π2 = −∆m2gx = −∆V ρ2gx = −
πa2
x
4
ρ2gx = −
πa2
4
ρ2gx2
.
(0.2pts)
Similarly, the lower half experiences a change in potential en-
ergy of
∆Π1 = ∆m1gx = ∆V ρ1gx =
πa2
x
4
ρ1gx =
πa2
4
ρ1gx2
.
(0.2pts)
The total change is then
∆Π = ∆Π1 + ∆Π2 = −
πa2
4
(ρ2 − ρ1)gx2
. (0.1pts)
ii. (1 pt) Since the liquid is incompressible, all of the liquid will
start moving with the same speed along the O-tube. (0.4pts)
The total mass of the liquid is
M = Mtop+Mbottom =
πa2
4
πRρ2+
πa2
4
πRρ1 =
π2
a2
R
4
(ρ1+ρ2).
(0.3pts)
The total kinetic energy is then simply
K =
Mv2
2
=
π2
a2
R
8
(ρ1 + ρ2)v2
. (0.3pts)
iii. (1 pt) According to the conservation of energy, K +∆Π =
const. In other words,
π2
a2
R
8
(ρ1 + ρ2)v2
−
πa2
4
(ρ2 − ρ1)gx2
= const. (0.2pts)
The time derivative of x2
is 2xẋ = 2xv (chain rule) and the
derivative of v2
is 2vv̇ = 2va, where we have used that accelera-
tion is the derivative of velocity. Therefore, the time derivative
of the conservation of energy yields
π2
a2
R
8
(ρ1 + ρ2)2va −
πa2
4
(ρ2 − ρ1)g2xv = 0. (0.3pts)
The speed cancels out and we can express the acceleration as
a =
ρ2 − ρ1
ρ2 + ρ1
2g
πR
x. (3)
(0.1pts)
The acceleration is indeed propotional to the displacement, x.
Note that this corresponds to an exponential increase in dis-
placement following x(t) = x0eγt
. This can be verified by tak-
ing a time derivative of said displacement two times:
v(t) =
dx(t)
dt
= γx0eγt
,
a(t) =
da(t)
dt
= γ2
x0eγt
= γ2
x(t). (0.2pts)
This follows exactly the same form as found in (3). Therefore,
γ =
r
2
π
ρ2 − ρ1
ρ2 + ρ1
g
R
(0.2pts)
and the interface will start growing exponentially, demonstrat-
ing the Rayleigh Taylor instability.
iv. (1 pt) In this case, it is more convenient consider angular
displacements and angular accelerations. All the subsequent
reasoning stays effectively the same with the main difference
being that the displacements and accelerations are replaced
with the angular equivalents.
Suppose that the upper hemisphere is displaced by a small
angle α ≪ 1. This causes the centre of mass of the upper and
lower hemisphere to shift slightly. Let us consider how the po-
tential energy of the upper hemisphere changes. Note that the
centre of mass is at height 3
8R from the sphere’s centre. The
center of mass will move along a circle of the same radius and
is displaced by a small angle α. (0.1pts)
The change in the vertical coordinate is then given by ∆h =
(1−cosα)3
8R. We can use small angle approximations cosα ≃
1− α2
2 to get ∆h = 3
16Rα2
. The change in the potential energy
is then
∆Π2 = −M2g∆h = −
3
16
RM2gα2
, (0.1pts)
where M2 = 2
3πR3
ρ2 is the mass of the upper hemisphere. Sim-
ilarly,
∆Π1 = M1g∆h =
3
16
RM1gα2
, (0.1pts)
and so the total change in the potential energy is
∆Π = ∆Π1 + ∆Π2 = −
3
16
R(M2 − M1)gα2
. (0.1pts)
The kinetic energy can be found by noting that the sphere will
start rotating with an angular velocity ω = dα
dt , and if the mo-
ment of inertia of the system is I, then the kinetic energy is
given by
K =
Iω2
2
. (0.1pts)
The moment of inertia of a sphere is 2
5MR2
. The same holds
for a hemisphere because the mass distribution from the axis
holds the same shape. The total moment of inertia is therefore
I = 2
5(M1 + M2)R2
and so
K =
1
5
(M1 + M2)R2
ω2
. (0.2pts)
— page 8 of 11 —GPhO Muscat 2019
PROBLEM 3
The total energy is then given by
K + ∆Π =
1
5
(M1 + M2)R2
ω2
−
3
16
R(M2 − M1)gα2
= const.
(0.1pts)
The time derivative of ω2
is 2ωω̇ = 2ωϵ, similarly dα2
dt = 2αω.
Taking a time derivative of the conservation of energy thus
yields
1
5
(M1 + M2)R2
2ωϵ −
3
16
R(M2 − M1)g2αω = 0. (0.1pts)
Therefore,
ϵ =
15
16
M2 − M1
M2 + M1
g
R
α =
15
16
ρ2 − ρ1
ρ2 + ρ1
g
R
α,
and
γ =
r
15
16
ρ2 − ρ1
ρ2 + ρ1
g
R
. (0.1pts)
Notably, this differs from the answer of the previous part only
by a numerical factor.
Part B. Stabilization due to surface tension (3 points)
i. (1 pt) In the limit case d = d0, when any small perturba-
tions occur, surface tension is not enough to hold them back
and they start growing exponentially (slowly at the beginning
but faster later on). First note that the total volume of the
liquid remains fixed. (0.3pts)
This means that any amount of top liquid that gets pushed
through the interface causes exactly the same amount of bot-
tom liquid to pass to the upper region. (0.1pts)
This is enough to figure out the simplest (and indeed, the most
stable) way the system can evolve, in the form of two bulges,
one corresponding to the upper liquid trying to push down and
the other one to the lower liquid trying to push up. (0.1pts)
The sketch is shown below. Finding the exact shape of the
interface is more diﬀicult and involves writing down the force
balance for a small piece of the interface.
(0.5pts)
ii. (1 pt) Deformations can now happen along the z-axis. Since
the length of slit is longer along that direction, the radius of
curvature of the surface is smaller and so the surface tensions
resists the weight of the upper liquid less. This means that
the instabilities along z-axis start occurring much earlier than
along the x-axis. The overall shape of the interface in the
y − z-intersection stays the same as in the previous part, an
approximately sinusoidal shape with a wavelength equalling to
l. (0.2pts)
There must also be a bulge in the x−y-direction because other-
wise there could not be any displaced liquid along the interface.
This time there will only be one bulge, corresponding to either
the upper or lower liquid pushing through to the other side.
(0.2pts)
Notably the limiting factor for this type of instability still
comes from the x − y-intersection, because the radius of
curvature is greatest along that direction. Because the num-
ber of bulges is smaller than in the previous part, the radius of
curvature is bigger and the force holding the liquid back must
be smaller as well. This is consistent with the fact that this
type of instability start occurring before the one described in
the previous part.
Distance l/4 corresponds to the peaks of the sinusoid-like
shape, but with opposite amplitudes. This means that both
cross-sections have a singular bulge, but in opposite directions.
(0.2pts)
The sketches are given below. Notably, they can be inter-
changed because the shape in the z-direction can be flipped
along the z-axis, swapping the cross-sections.
(0.4pts)
iii. (1 pt) First, let us take the origin of the x-axis to be at
the axis of symmetry (see figure) and the height of the inter-
face from the horizontal symmetry axis be y(x). The boundary
conditions are y(±d1/2) = 0. (0.1pts)
— page 9 of 11 —GPhO Muscat 2019
PROBLEM 3
The interface will be slowly expanding due to the instability,
but since the expansion is slow, we can treat it as being almost
at an equilibrium. This means that the difference of pressures
between the bottom and top side is compensated by the surface
tension. (0.1pts)
The pressure of the top and bottom liquid are the same at
y = 0, let that be p0. The pressure of the upper liquid at
y(x) is then p2(x) = p0 − ρ2gy(x) and of the lower liquid
p1(x) = p0 − ρ1gy(x). Thus, the difference in pressure at the
interface is given by
∆p = p1(x) − p2(x) = (ρ2 − ρ1)gy(x). (0.1pts)
This is balanced by the surface tension. It is well-known
that the difference in pressure from surface tension is given
by ∆p = σ/r. Note that there is no factor of 2 because the
curving is only along one axis (the other is negligible due to
l ≫ d1). The balance gives
(ρ2 − ρ1)gy(x) =
σ
r
. (4)
(0.1pts)
Now we need to express r in terms of x and y(x). For this, let
us consider the situation given below:
By considering two points separated horizontally by a distance
dx, we see that these points span an angle dα as viewed from
the centre of curvature of the interface, where dα is the dif-
ference in the slopes (in radians) of the two points. Using
small angle approximations, the slopes can be expressed as dy
dx.
From the figure and under the assumption that perturbations
are very small, we see that dx = rdα. dα can be found via the
difference of slopes:
dα =
dy
dx x
−
dy
dx x+dx
= −
d2
y
dx
=
dx
r
.
From here we get
1
r
= −
d2
y
dx2
, (0.2pts)
and we can substitute this to (4) to get
(ρ2 − ρ1)gy = −σ
d2
y
dx2
. (0.1pts)
This is a simple harmonic equation with a solution of the form
y(x) = Asin(kx) + B cos(kx),
with k =
p
(ρ2 − ρ1)g/σ. (0.1pts)
The bulge has only one peak, is symmetric with respect to
x = 0, and spans half a wavelength through the length of the
cross-section. Therefore,
λ = 2d1 =
2π
k
=
r
σ
(ρ2 − ρ1)g
, (0.1pts)
and we see that this uniquely identifies d1, the smallest width
at which the instabilities start expanding:
d1 =
1
2
r
σ
(ρ2 − ρ1)g
. (0.1pts)
Part C. Gravity surface waves (2 points)
We can measure the wavelength of the waves from the aero-
photo. To get the best accuracy, we should count as many
peaks as possible. (0.4pts)
We should also keep in mind that the peaks have to be counted
along the line of motion of the boat since then the generated
waves are not going at an angle with respected to the measured
line. (0.4pts)
From the figure, we measure 24 peaks along the path spanning
a distance of 2710m. (0.4pts)
This gives λ = 2710m/24 = 113m and the speed of the boat
can be expressed as
v =
r
gλ
2π
=
r
9.81m/s2
·113m
2π
≈ 13m/s ≈ 48km/h.
(0.8pts)
— page 10 of 11 —GPhO Muscat 2019
PROBLEM 3
— page 11 of 11 —
