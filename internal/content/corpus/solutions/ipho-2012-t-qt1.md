---
id: ipho-2012-t-qt1
source: ipho
language: en
solution_language: en
translated: false
problem: ipho-2012-t-qt1
solution_type: official
source_document: solution-document-ipho-2012-t-s
source_pdf: cache/phoxiv/ipho/2012_T_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/ipho/2012_T_S.pdf."
---

Problem T1. Focus on sketches (13 points)
Part A. Ballistics (4.5 points)
i. (0.8 pts) When the stone is thrown vertically upwards, it
can reach the point x = 0, z = v2
0/2g (as it follows from the
energy conservation law). Comparing this with the inequality
z ≤ z0 − kx2
we conclude that
z0 = v2
0/2g. [0.3 pts]
Let us consider the asymptotics z → −∞; the trajectory of
the stone is a parabola, and at this limit, the horizontal dis-
placement (for the given z) is very sensitive with respect to the
curvature of the parabola: the flatter the parabola, the larger
the displacement. The parabola has the flattest shape when
the stone is thrown horizontally, x = v0t and z = −gt2
/2, i.e.
its trajectory is given by z = −gx2
/2v2
0. Now, let us recall
that z ≤ z0 − kx2
, i.e. −gx2
/2v2
0 ≤ z0 − kx2
⇒ k ≤ g/2v2
0.
Note that k < g/2v2
0 would imply that there is a gap between
the parabolic region z ≤ z0 − kx2
and the given trajectory
z = −gx2
/2v2
0. This trajectory is supposed to be optimal for
hitting targets far below (z → −∞), so there should be no such
a gap, and hence, we can exclude the option k < g/2v2
0. This
leaves us with
k = g/2v2
0. [0.5 pts]
ii. (1.2 pts) Let us note that the
stone trajectory is reversible and due
to the energy conservation law, one
can equivalently ask, what is the min-
imal initial speed needed for a stone
to be thrown from the topmost point
of the spherical building down to the
ground without hitting the roof, and what is the respective tra-
jectory. It is easy to understand that the trajectory either needs
to touch the roof, or start horizontally from the topmost point
with the curvature radius equal to R. Indeed, if neither were
the case, it would be possible to keep the same throwing angle
and just reduce the speed a little bit — the stone would still
reach the ground without hitting the roof. Further, if it were
tangent at the topmost point, the trajectory wouldn’t touch
nor intersect the roof anywhere else, because the curvature of
the parabola has maximum at its topmost point. Then, it
would be possible to keep the initial speed constant, and in-
crease slightly the throwing angle (from horizontal to slightly
upwards): the new trajectory wouldn’t be neither tangent at
the top nor touch the roof at any other point; now we can re-
duce the initial speed as we argued previously. So we conclude
that the optimal trajectory needs to touch the roof somewhere,
as shown in Fig.
iii. (2.5 pts) The brute force approach would be writing down
the condition that the optimal trajectory intersects with the
building at two points and touches at one. This would be de-
scribed by a fourth order algebraic equation and therefore, it is
not realistic to accomplish such a solution within a reasonable
time frame.
Note that the interior of the building needs to lie inside the
region where the targets can be hit with a stone thrown from
the top with initial speed vmin. Indeed, if we can throw over
the building, we can hit anything inside by lowering the throw-
ing angle. On the other hand, the boundary of the targetable
region needs to touch the building. Indeed, if there were a
gap, it would be possible to hit a target just above the point
where the optimal trajectory touches the building; the traject-
ory through that target wouldn’t touch the building anywhere,
hence we arrive at a contradiction.
So, with v0 corresponding to the optimal trajectory, the tar-
getable region touches the building; due to symmetry, overall
there are two touching points (for smaller speeds, there would
be four, and for larger speeds, there would be none). With the
origin at the top of the building, the intersection points are
defined by the following system of equations:
x2
+ z2
+ 2zR = 0, z =
v2
0
2g
−
gx2
2v2
0
.
Upon eliminating z, this becomes a biquadratic equation for x:
x4
!
g
2v2
0
"2
+ x2
!
1
2
−
gR
v2
0
"
+
!
v2
0
4g
+ R
"
v2
0
g
= 0.
Hence the speed by which the real-valued solutions disappear
can be found from the condition that the discriminant vanishes:
!
1
2
−
gR
v2
0
"2
=
1
4
+
gR
v2
0
=⇒
gR
v2
0
= 2.
Bearing in mind that due to the energy conservation law, at
the ground level the squared speed is increased by 4gR. Thus
we finally obtain
vmin =
#
v2
0 + 4gR = 3
$
gR
2
.
Part B. Mist (4 points)
i. (0.8 pts) In the plane’s reference frame, along the channel
between two streamlines the volume flux of air (volume flow
rate) is constant due to continuity. The volume flux is the
product of speed and channel’s cross-section area, which, due
to the two-dimensional geometry, is proportional to the channel
width and can be measured from the Fig. Due to the absence of
wind, the unperturbed air’s speed in the plane’s frame is just v0.
So, upon measuring the dimensions a = 10mm and b = 13mm
(see Fig), we can write v0a = ub and hence u = v0
a
b . Since at
point P, the streamlines are horizontal where all the velocities
are parallel, the vector addition is reduced to the scalar addi-
tion: the air’s ground speed vP = v0 −u = v0(1− a
b ) = 23m/s.
ii. (1.2 pts) Although the dynamic pressure 1
2ρv2
is relatively
small, it gives rise to some adiabatic expansion and compres-
sion. In expanding regions the temperature will drop and hence,
the pressure of saturated vapours will also drop. If the dew
point is reached, a stream of droplets will appear. This process
will start in a point where the adiabatic expansion is maximal,
i.e. where the hydrostatic pressure is minimal and consequently,
as it follows from the Bernoulli’s law p+ 1
2ρv2
= const, the dy-
namic pressure is maximal: in the place where the air speed in
— page 1 of 5 —
wing’s frame is maximal and the streamline distance minimal.
Such a point Q is marked in Fig.
iii. (2 pts) First we need to calculate the dew point for the air
of given water content (since the relative pressure change will
be small, we can ignore the dependence of the dew point on
pressure). The water vapour pressure is pw = psar = 2.08kPa.
The relative change of the pressure of the saturated vapour is
small, so we can linearize its temperature dependence:
psa − pw
Ta − T
=
psb − psa
Tb − Ta
=⇒ Ta − T = (Tb − Ta)
(1 − r)psa
psb − psa
;
numerically T ≈ 291.5K. Further we need to relate the air
speed to the temperature. To this end we need to use the en-
ergy conservation law. A convenient ready-to-use form of it is
provided by the Bernoulli’s law. Applying this law will give
a good approximation of the reality, but strictly speaking, it
needs to be modified to take into account the compressibility
of air and the associated expansion/contraction work. Con-
sider one mole of air, which has the mass µ and the volume
V = RT/p. Apparently the process is fast and the air par-
cels are large, so that heat transfer across the air parcels is
negligible. Additionally, the process is subsonic; all together
we can conclude that the process is adiabatic. Consider a seg-
ment of a tube formed by the streamlines. Let us denote the
physical quantities at its one end by index 1, and at the other
end — by index 2. Then, while one mole of gas flows into
the tube at one end, as much flows out at the other end. The
inflow carries in kinetic energy 1
2µv2
1, and the outflow carries
out 1
2µv2
2. The inflowing gas receives work due to the pushing
gas equal to p1V1 = RT1, the outflowing gas performs work
p2V2 = RT2. Let’s define molar heat capacities CV = µcV and
Cp = µcp. The inflow carries in heat energy CV RT1, and the
outflow carries out CV RT2. All together, the energy balance
can be written as 1
2µv2
+ CpT = const. From this we can
easily express ∆v2
2 = 1
C v2
crit(a2
c2 − 1) = cp∆T, where c is the
streamline distance at the point Q, and further
vcrit = c
$
2cp∆T
a2 − c2
≈ 23m/s,
where we have used c ≈ 4.5mm and ∆T = 1.5K. Note that
in reality, the required speed is probably somewhat higher, be-
cause for a fast condensation, a considerable over-saturation is
needed. However, within an order of magnitude, this estimate
remains valid.
Part C. Magnetic straws (4.5 points)
i. (0.8 pts) Due to the superconduct-
ing walls, the magnetic field lines cannot
cross the walls, so the flux is constant
along the tube. For a closed contour in-
side the tube, there should be no circu-
lation of the magnetic field, hence the
field lines cannot be curved, and the field
needs to be homogeneous. The field lines
close from outside the tube, similarly to a solenoid.
ii. (1.2 pts) Let us consider the change of the magnetic energy
when the tube is stretched (virtually) by a small amount ∆l.
Note that the magnetic flux trough the tube is conserved: any
change of flux would imply a non-zero electromotive force dΦ
dt ,
and for a zero resistivity, an infinite current. So, the induc-
tion B = Φ
πr2 . The energy density of the magnetic field is B2
2µ0
.
Thus, the change of the magnetic energy is calculated as
∆W =
B2
2µ0
πr2
∆l =
Φ2
2µ0πr2
∆l.
This energy increase is achieved owing to the work done by the
stretching force, ∆W = T∆l. Hence, the force
T =
Φ2
2µ0πr2
.
iii. (2.5 pts) Let us analyse, what would be the change of
the magnetic energy when one of the straws is displaced to a
small distance. The magnetic field inside the tubes will remain
constant due to the conservation of magnetic flux, but outside,
the magnetic field will be changed. The magnetic field out-
side the straws is defined by the following condition: there is
no circulation of ⃗ B (because there are no currents outside the
straws); there are no sources of the field lines, other than the
endpoints of the straws; each of the endpoints of the straws is
a source of streamlines with a fixed magnetic flux ±Φ. These
are exactly the same condition as those which define the elec-
tric field of four charges ±Q. We know that if the distance
between charges is much larger than the geometrical size of
a charge, the charges can be considered as point charges (the
electric field near the charges remains almost constant, so that
the respective contribution to the change of the overall electric
field energy is negligible). Therefore we can conclude that the
endpoints of the straws can be considered as magnetic point
charges. In order to calculate the force between two magnetic
charges (magnetic monopoles), we need to establish the corres-
pondence between magnetic and electric quantities.
For two electric charges Q separated by a distance a, the
force is F = 1
4πε0
Q2
a2 , and at the position of one charge, the elec-
tric field of the other charge has energy density w = 1
32π2ε0
Q2
a4 ;
hence we can write F = 8πwa2
. This is a universal expression
for the force (for the case when the field lines have the same
shape as in the case of two opposite and equal by modulus elec-
tric charges) relying only on the energy density, and not related
to the nature of the field; so we can apply it to the magnetic
— page 2 of 5 —
field. Indeed, the force can be calculated as a derivative of
the full field energy with respect to a virtual displacement of
a field line source (electric or magnetic charge); if the energy
densities of two fields are respectively equal at one point, they
are equal everywhere, and so are equal the full field energies.
As it follows from the Gauss law, for a point source of a fixed
magnetic flux Φ at a distance a, the induction B = 1
4π
Φ
a2 . So,
the energy density w = B2
2µ0
= 1
32π2µ0
Φ2
a4 , hence
F =
1
4πµ0
Φ2
a2
.
For the two straws, we have four magnetic charges. The lon-
gitudinal (along a straw axis) forces cancel out (the diagonally
positioned pairs of same-sign-charges push in opposite direc-
tions). The normal force is a superposition of the attraction
due to the two pairs of opposite charges, F1 = 1
4πµ0
Φ2
l2 , and
the repulsive forces of diagonal pairs, F2 =
√
2
8πµ0
Φ2
2l2 . The net
attractive force will be
F = 2(F1 − F2) =
4 −
√
2
8πµ0
Φ2
l2
.
— page 3 of 5 —
