---
id: solution-document-apho-2025-t1-s
source: apho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/apho/2025/T1_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [apho-2025-t1]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/apho/2025/T1_S.pdf."
---

T1. Precession of the Earth’s axis
(10 pts)
Part A. The shape of the Earth (1.0 p)
A.1. Let us express the dimensions of hmax, G, ω,
ME and R in terms of the base dimensions length L,
mass M and time T:
[hmax] = L,
[G] = L3
M→1
T→2
,
[ω] = T→1
,
[ME] = M,
[R] = L.
The relation given in the problem should hold for the
dimensions too:
L =
!
L3
M→1
T→2
"→1
T→ω
Mε
Lϑ
.
After simplification we get:
L = Lϑ→3
Mε+1
T2→ω
,
from which we get the following equations for the ex-
ponents:
0 = 2 → ε,
0 = ϑ + 1,
1 = ϖ → 3.
From here we get ε = 2, ϑ = →1 and ϖ = 4.
Task A.1. Pts
Expressing the dimension of G in terms of
base dimensions
0.2
Setting up three equations for the expo-
nents (0.1 p for each)
0.3
Correct values for exponents (0.1 p for each) 0.3
Total for Task A.1. 0.8
A.2. In the light of the result of the previous sub-
part the relation for hmax reads as
hmax ↑
ω2
R4
GME
.
Here ω = 2ϱ/(24 h) = 7.27↓10→5
s→1
. Using 1 as the
dimensionless constant, we get hmax = 21.9 km.
Task A.2. Pts
Correct calculation of ω (even if it was done
inherently)
0.1
Correct value for hmax.
0 p if unit is missing.
0.1
Total for Task A.2. 0.2
Part B. The time-averaged gravitational field
of the Sun (3.2 p)
B.1. Solution I: Using the gravitational potential.
At an arbitrary point on the z axis the gravitational
potential U(z) created by the ring is given by
U(z) = →G
MS
#
z2 + d2
SE
.
The gravitational field can be found by di!erentiation
with respect to z:
gz(z) = →
dU
dz
= →GMS
z
(z2 + d2
SE)
3/2
.
Expanding this to first order in z we get:
gz(z) ↔ →
GMS
d3
SE
z.
The negative sign means that gz points towards the
center of the Sun ring.
Task B.1., Solution I. Pts
Expressing the magnitude of U(z) on the
axis in terms of z correctly
0.2
Correct sign of U(z) 0.1
Expressing gz as a derivative of U(z). (0.1 p
if negative sign is not included)
0.2
Calculating the derivative correctly 0.2
Approximate form of gz for |z| ↗ dSE 0.1
Indicating correct direction in the figure 0.2
Total for Task B.1. 1.0
Solution II: Using the integration of fields. A small
segment of the Sun ring with mass dM generates a
field
dg =
GdM
z2 + d2
SE
on the symmetry axis of the ring at height z (see Fig-
ure B.1).
Figure B.1.
Due to symmetry, the net field at the same point is
parallel with the axis, so only the corresponding com-
ponent of this field should be taken:
dgz = →dg cosς,
where the negative sign indicates the →z direction.
The angle ς is the same for all segments of the ring
and
cosς =
z
#
z2 + d2
SE
.
1Using these three equations and integrating over the
mass of the ring we get the net field on the axis at
arbitrary position:
gz = →GMS
z
(z2 + d2
SE)
3/2
.
Using the relation |z| ↗ dSE this simplifies to:
gz ↔ →GMS
z
d3
SE
.
Task B.1., Solution II. Pts
Writing the gravitational field of an element
of the ring
0.2
Figure with correct geometry 0.1
Taking only the z component for symmetry
reasons
0.1
Summing/integrating over the whole ring 0.1
Calculating the gz at arbitrary z correctly 0.2
Approximate form of gz for |z| ↗ dSE 0.1
Indicating correct direction in the figure 0.2
Total for Task B.1. 1.0
B.2. Solution I: Using Gauss’s theorem. The ra-
dial component of the field gr in the plane of the Sun
ring can be found from the gravitational Gauss’s law
(see Figure B.2).
Figure B.2.
Apply Gauss’s theorem for the cylindrical region of
height 2|z| and radius r:
gr 2z ↓ 2ϱr + gz 2r2
ϱ = 0,
from where we get
gr(r) = →
r
2z
gz(z) =
GMS
2d3
SE
r.
The field points radially outwards.
Task B.2., Solution I. Pts
Idea of using Gauss’s law 0.5
Taking a cylindrical Gaussian surface with
axis z near the center of the Sun ring
0.4
Writing Gauss’s law correctly in terms of
radial and axial fields (0.3 p in case of mis-
take in areas, 0 p if the error is dimensional)
0.6
Final result for gr is proportional to r (0 p
if not)
0.3
Correct proportionality constant in gr
(0.1 p for error in prefactor, 0 p for dimen-
sional error)
0.2
Indicating correct direction in the figure 0.2
Total for Task B.2. 2.2
Solution II: By integration of potential. Let us take
a point P in the plane of the sung ring at distance r
from the center (see Figure B.3).
Figure B.3.
The distance s of a small element of the ring of angu-
lar size dφ located at angle φ with respect to point P
is given by law of cosines:
s =
$
d2
SE + r2 → 2dSErcosφ.
The gravitational potential at point P due to the
small segment can be written as
dU = →
GMS
s
dφ
2ϱ
,
so the net potential of the ring at point P is
U(r) = →
GMS
2ϱ
2ϖ %
0
!
d2
SE + r2
→ 2dSErcosφ
"→1
2
dφ.
Let us make the indegrand dimensionless:
U(r) = →
GMS
2ϱdSE
2ϖ %
0
&
1 +
r2
d2
SE
→
2rcosφ
dSE
'→1
2
dφ.
To simplify the integral we can use the fact that
r ↗ dSE. Introducing the quantity
↼ =
r2
d2
SE
→
2rcosφ
dSE
(↼ ↗ 1) we can expand the integrand up to second
order in ↼:
(1 + ↼)
→1
2
↔ 1 →
↼
2
+
3↼2
8
.
After writing back the expression of ↼ and keeping
terms up to quadratic order in r/dSE we get:
(1 + ↼)
→1
2
↔ 1 →
r2
2d2
SE
+
rcosφ
dSE
+
3r2
cos2
φ
2d2
SE
.
The third term on the right side is canceled after in-
tegrating over φ, so the potential takes the form
U(r) = →
GMS
2ϱdSE
2ϖ %
0
&
1 →
r2
2d2
SE
+
3r2
cos2
φ
2d2
SE
'
dφ.
2Using that
(2ϖ
0
cos2
φdφ = ϱ (from the analogy with
the calculation of real power in AC circuits), the in-
tegral can be evaluated:
U(r) = →
GMS
2ϱdSE
&
2ϱ → 2ϱ
r2
2d2
SE
+
3ϱr2
2d2
SE
'
.
This simplifies to
U(r) = →
GMS
dSE
→
GMSr2
4d3
SE
.
The gravitational field is the negative gradient of the
potential:
gr(r) = →
dU
dr
=
GMS
2d3
SE
r.
Task B.2., Solution II. Pts
Expressing distance s from trigonometry 0.2
Writing the potential generated by a small
element of the ring
0.1
Writing U(r) as an integral 0.1
Taylor expansion of the integrand up to sec-
ond order in r (0.1 p if only first order is
calculated, 0.4 p if the term with cos2
φ is
missing)
0.6
Integrating over φ (0.1 p if the term cos2
φ
is missing)
0.2
Expressing gz as a derivative of U(z). (0.1 p
if negative sign is not included)
0.2
Calculating the derivative correctly 0.1
Final result for gr is proportional to r (0 p
if not)
0.3
Correct proportionality constant in gr
(0.1 p for error in prefactor, 0 p for dimen-
sional error)
0.2
Indicating correct direction in the figure 0.2
Total for Task B.2. 2.2
Part C. The torque acting on the Earth (2.6 p)
C.1. The ellipsoid of revolution can be trans-
formed into a perfect sphere of radius Re (see Figure
C.1.) by stretching it uniformly along the polar diam-
eter by a factor Re/Rp, so the volume of the ellipsoid
is given by
Vellipsoid =
4ϱ
3
R3
e
Rp
Re
=
4ϱ
3
R2
eRp.
Figure C.1.
The volume of one of the excess regions is:
V =
1
2
&
4ϱ
3
R3
e →
4ϱ
3
R2
eRp
'
=
2ϱ
3
R2
ehmax.
The density of the homogeneous Earth is ↽ =
3ME/(4ϱR2
eRp), so the mass of one of the excess re-
gions is the following:
m = ↽V =
3ME
4ϱR2
eRp
2ϱ
3
R2
ehmax =
hmax
2Rp
ME.
Task C.1. Pts
Idea of stretching the ellipsoid into sphere 0.2
Volume of one of the excess regions 0.3
Correct expression for the density of Earth 0.1
Final result for m 0.2
Total for Task C.1. 0.8
C.2. The torque acting on the perfect sphere of
radius Re is zero due to symmetry. From the super-
position principle outlined in the problem, it follows
that the torque ⇀ ⇁ acting on the ellipsoid-shaped Earth
is equal in magnitude but opposite in direction to the
torque ⇀ ⇁↑ acting on the two equivalent point masses
(each of mass 2m/5): ⇀ ⇁ = →⇀ ⇁↑.
Figure C.2. The forces acting on the two point masses.
The magnitude of the torque acting on the point
masses can be calculated with the help of Figure C.2
as
|⇀ ⇁↑| = |⇀ ⇁| = 2FzRsinα + 2FrRcosα,
where
Fz =
2
5
m|gz| =
2
5
mGMS
Rcosα
d3
SE
,
Fr =
2
5
m|gr| =
2
5
mGMS
Rsinα
2d3
SE
.
Substituting these forces into the expression for ⇁↑
and
simplifying we get:
|⇀ ⇁| =
6
5
GmMS
d3
SE
R2
sinαcosα.
Using the result of part C.1. this can be written as
|⇀ ⇁| =
3
5
GMEMS
d3
SE
Rhmax sinαcosα.
The torque ⇀ ⇁↑ is pointing out of the plane of Figure
C.2, so the torque ⇀ ⇁ acting on the ellipsoid-shaped
Earth is pointing into the plane.
3Task C.2. Pts
Idea that the net torque acting on a perfect
sphere is zero (even if it was done inher-
ently)
0.1
Idea of ⇀ ⇁ = →⇀ ⇁↑ (even if it was done inher-
ently)
0.2
Including the terms coming from Fr and Fz
in the torque correctly (0.4 p each)
No points are given for the formula ⇀ ⇁ =
⇀ r ↓ ⇀ F itself.
0.8
Adding the two contributions with the cor-
rect sign
0.2
Calculation leading to the correct net
torque
0.3
Correct direction for ⇀ ⇁ 0.2
Total for Task C.2. 1.8
Part D. Angular speed of the precession of the
Earth’s axis (2.0 p)
D.1. The torque acting on the Earth results a
change in its angular momentum vector ⇀ L:
⇀ ⇁ =
d⇀ L
dt
,
where ⇀ L is parallel with the angular velocity of
Earth’s rotation and its magnitude (assuming a uni-
form mass distribution and neglecting the deviation
from a sphere) is given by
|⇀ L| =
2
5
MER2
ω.
Since ⇀ ⇁ (i.e. the rate of change of the angular momen-
tum vector) is perpendicular to ⇀ L, the length of ⇀ L
remains constant but its direction changes, as shown
in Figure D.1. As a result, the vector ⇀ L sweeps along
the side of a cone of half apex angle α.
Figure D.1.
Drawing an analogy with a uniform circular motion,
we can write an equation between L, its time deriva-
tive and the angular speed of precession:
)
)
)
)
)
d⇀ L
dt
)
)
)
)
)
= !1|⇀ L|sinα.
From this equation the angular speed of precession !1
can be expressed:
!1 =
⇁
Lsinα
=
3
5GMEMSRhmax sinαcosα/d3
SE
2
5MER2ω sinα
,
where we used our previous result for ⇁. After simpli-
fying:
!1 =
3
2
GMShmax
d3
SERω
cosα.
From this the period of precession:
T1 =
2ϱ
!1
=
4ϱ
3
d3
SERω
GMShmax cosα
.
Task D.1. Pts
Newton’s second law for rotational motion
(0 p if it is clearly not in a vectorial form or
components)
0.2
Expressing the angular momentum in terms
of ω and the moment of inertia
0.2
Writing the moment of inertia as 2
5MER2
(0.1 p for incorrect prefactor, 0 p for di-
mensional error)
0.2
Writing |d⇀ L/dt| in terms of L, !1 and α 0.8
Using the equation !1 = 2ϱ/T1 0.1
Finding T1 correctly 0.3
Total for Task D.1. 1.8
D.2. After substituting the data we get the nu-
merical value of the period:
T1 = 80600 years.
Task D.2. Pts
Correct numerical result for T1.
Full points for correct substitution into a
dimensionally correct formula.
Full points for using the calculated value for
hmax (resulting T1 =77400 years.)
0 p if the substitution is incorrect or the
formula has a dimensional error.
0.2
Total for Task D.2. 0.2
Part E. The e!ect of the Moon (1.2 p)
E.1. In a similar fashion as in Part D, we can write
the torque exerted by the Moon as
⇁M =
3
5
GMEMM
d3
ME
Rhmax sinαcosα.
If the e!ect of the Moon is taken into account, the
torques exerted by the Sun and the Moon add up,
and as a result, the net torque can be written as
⇁2 =
3
5
GME
&
MS
d3
SE
+
MM
d3
ME
'
Rhmax sinαcosα.
As we have seen it previously, the angular speed of
precession in terms of the torque is
!2 =
⇁2
Lsinα
,
so we get
!2
!1
=
⇁2
⇁1
=
MS/d3
SE + MM/d3
ME
MS/d3
SE
.
4The ratio of the periods is the inverse of this:
T2
T1
=
MS/d3
SE
MS/d3
SE + MM/d3
ME
.
Task E.1. Pts
Stating that the torques of the Sun and the
Moon add up
0.3
Calculating the torque exerted by the Moon
or using that it is proportional to MM/d3
SE
0.4
Expressing T2/T1 correctly (0 p if T1 < T2) 0.3
Total for Task E.1. 1.0
E.2. After substitution we get
T2 = 25400 years,
which is quite close to the value obtained by modern
observations.
Task E.2. Pts
Correct numerical result for T2.
Full points for using the calculated value
for hmax (resulting T1 =24400 years. 0 p if
the result does not come from substitution
(e.g. the student uses the value written in
the introduction of the problem) or the sub-
stitution is incorrect.
0 p if the result comes from a formula with
dimensional error
0.2
Total for Task E.2. 0.2
5
