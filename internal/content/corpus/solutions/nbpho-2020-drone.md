---
id: nbpho-2020-drone
source: nbpho
language: en
solution_language: en
translated: false
problem: nbpho-2020-drone
solution_type: official
source_document: solution-document-nbpho-2020-s
source_pdf: cache/phoxiv/nbpho/2020_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/nbpho/2020_S.pdf."
---

4. DRONE (9 points) — Solution by Taavet
Kalda, grading schemes by Oleg Košik, Jānis
Cimurs, and Joonas Kalda.
i) (2 points) Let the mass of the cuboid be
M. There are three forces acting on the
drone: the resultant of friction and the nor-
mal force ⃗ Ff , rope tension ⃗ T directed along
the rope, and gravitational acceleration M⃗ g
directed vertically down from the centre of
the cuboid. Since the cuboid is sliding with
constant speed, the three forces must bal-
ance each other out. The only way for this
to be possible is if the vectorial extensions of
the forces intersect in one point, O.
One can prove this by contradiction. If
the forces donʼt intersect in a single point,
one needs only consider the torque around
one of the intersection points to see that
there is non-zero torque and that the forces
arenʼt in equilibrium.
If the normal force is N, then the fric-
tional force is Nµ so the resultant ⃗ Ff = Nŷ−
Nµx̂. Therefore, ⃗ Ff is always directed at an
angle α=arctanµ with respect to the vertical.
Since the starting point and direction of
the forces of gravity and tension are known,
one can reconstruct the position of O and
⃗ Ff . Because µ = tanα, one can conveniently
measure µ as the ratio of the horizontal and
vertical projection of ⃗ Ff : µ≈0.659.
ii) (2 points) Consider the system made up
of the cuboid and the drone. Once again,
there are three forces acting on this system:
gravitational force (M+m)⃗ g, friction ⃗ Ff , and
the force ⃗ F keeping drone afloat. The thrust
for the drone is directed along the symmetry
axisofthedrone. Sincetheforcesareinequi-
librium, their extensions must intersect in
one point O0
. Owing to the last part, O0
can
be found by intersecting the frictional force
and the thrusting force. Since gravitational
force is vertical, we can find the horizontal
projection of the centre of mass. If x1 and
x2 are the horizontal distances from O0
to the
centres of the cuboid and drone respectively,
then
x1
x2
=
M
m
.
Fromthefigurewemeasure x1/x2 =0.796and
so
M =0.796m=0.796kg.
Grading for i) and ii)
Solutions that use force balance and torque bal-
ance in i) and force balance in ii):
i) correctly identifying all forces acting on
cuboid – 0.2 pts;
usethatµ=
Ff
N ,where Ff isfrictionforceand
N is normal force — 0.2 pts;
writing force balance equations using angles
– 0.4 pts;
writing torque balance equation – 0.4 pts;
deriving µ – 0.4 pts;
numerical result with high enough precision
— 0.4 pts; (error within 5% – 0.4pts, error
within 10% – 0.2pts)
ii) correctly identifying all forces acting
on drone – 0.2 pts;
writing force balance equations using angles
– 0.6 pts;
combining with equations form part i) and
deriving M – 0.8 pts;
numerical result with high enough precision
— 0.4 pts; (error within 5% – 0.4pts, error
within 10% – 0.2pts)
Remark. Solutions that assume that
cuboid is linear, get 0 for precision for both
parts i) and ii), but there are no deductions
for deriving µ and M.
Solutions that use point O in i):
Correctly identifying all forces acting on
cuboid – 0.2 pts;
Use fact that vectorial extensions intersect at
onepointoranotherwaytotakeintoaccount
torque balance for point O – 0.8 pts;
Use that µ = tanα or µ =
Ff
N , where Ff is fric-
tion force and N is normal force — 0.2 pts;
Deriving µ – 0.4 pts;
Numericalresultwithhighenoughprecision
— 0.4 pts.
Solutions that use point O’ in ii):
Correctly identifying all forces acting on sys-
tem – 0.2 pts;
Use fact that vectorial extensions intersect at
onepointoranotherwaytotakeintoaccount
torque balance for point O0
– 0.8 pts;
Use torque balance for gravitational forces —
0.4 pts;
Express formula for mass M — 0.2 pts;
Numericalresultwithhighenoughprecision
— 0.4 pts.
iii) (2 points) Imagine a pocket of air with
fixedmassmovingaroundintheatmosphere.
Let the pocketʼs volume be V = V(z). In an
adiabatic atmosphere, pVγ
= const, where
γ = cp/cv = 1.39. Now, pV ∝ T and ρ ∝ V−1
,
so
pVγ
∝Vγ−1
T ∝ρ1−γ
T =const.
Hence,
ρ(z)=ρ0
µ
T(z)
T(0)
¶ 1
γ−1
=ρ0
µ
1−
gz
cpT0
¶ 1
γ−1
.
Grading: There are two expected solu-
tions. One of them is given by the sample
solution while the other involves integrating
dρ from z =0 to z.
Grading for sample solution:
Using or deriving the adiabatic relation
pVγ
=const — 0.6 pts;
Using or deriving an expression for γ = cp/cv
— 0.2 pts;
Deriving an exact expression for ρ, or ob-
taining its dependence on V and/or on p, T
— 0.6 pts;
Obtaining the correct expression for ρ — 0.6
pts;
Grading for alternative solution:
Using or deriving the relation for the pres-
sure change dp(z)=−ρ(z)gdz — 0.1 pts;
Using the relation cp −cv = R/µ — 0.2 pts;
Using ideal gas law or equivalent to get
another differential — 0.3 pts;
Obtaining an expression for ρ in terms of
other quantities of interest — 0.6 pts;
Correctly setting up the integral for ρ and z
or equivalent quantities — 0.2 pts;
Obtaining the correct expression for ρ — 0.6
pts;
iv) (3 points) The drone stays afloat by using
the motor to push air through its propellers.
The amount of thrust is clearly a function of
thedensityoftheairandthespeedvatwhich
air goes through the propellers.
Force balance can be written down as F−
mtotg = 0, where F is the vertical thrust and
mtot the total mass of the drone. If A is the
effective area of the propellers, itʼs possible
to write down the expression for F by either
using the dynamical pressure ρv2
or by con-
sidering the conservation of momentum. In
a time interval ∆t, a volume of ∆V = Av∆t
of air passes through the propellers. The air
volume carries momentum ∆p = ∆Vρv, so
the thrust is given by F =∆p/∆t= Aρv2
.
Secondly,itʼspossibletotiethepowerout-
put P of the motor with outside air density
and speed. Notably, the air is pushing the
propellers vertically up with a force F. In or-
der to function, the propeller blades need to
be slanted. This amounts to a torque thatʼs
proportional to F. Further, itʼs clear that the
rotational speed of the propeller blades is
also proportional to v. This means that the
output power of the motor is proportional to
the product of F and v and so P ∝ ρv3
. In
our considerations, the output power of the
droneisfixedsov∝ρ−1/3
andF ∝ρ(ρ−1/3
)2
=
ρ1/3
. From force balance, F = mtotg. Hence,
mtot ∝ ρ1/3
. Evaluating the ratio at z = 0 and
z = zmax, one gets
1.5m
m
=
µ
ρ(0)
ρ(zmax)
¶1/3
=
µ
1−
gzmax
cpT0
¶− 1
3(γ−1)
,
and so
zmax =
cpT0
g
³
1−1.5−3(γ−1)
´
=11.3km.
Grading: Writing down the force balance
equation — 0.4 pts;
Deriving a relation between the thrust and
the air density and speed by either consid-
ering momentum conservation over a small
time interval or using the expression for
dynamical pressure — 0.8 pts;
Tying the motor power with air density and
speed — 0.6 pts;
Finding a relation between the maximum
lift power and air density — 0.4 pts;
Evaluating the two conditions for maximum
lift power of the drone at z =0 and z = zmax —
0.2 pts;
Obtaining the correct expression for zmax —
0.4 pts;
Obtaining the correct numerical value for
zmax — 0.2 pts;
