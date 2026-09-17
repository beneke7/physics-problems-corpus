---
id: solution-document-ipho-2022-t-s
source: ipho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/ipho/2022_T_S.pdf
extraction_method: pdftotext-raw
mapped_problems: [ipho-2022-t1, ipho-2022-t2, ipho-2022-t3]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from cache/phoxiv/ipho/2022_T_S.pdf."
---

IPhO 2022 Theoretical problems: solutions. Language: English
General rules
Rule 1: Propagating errors are not punished except
(a) those cases when the (possibly intermediate) result is
clearly wrong and hence, the contestant has another op-
portunity to figure out that something must have gone
wrong, and could start searching for the mistakes. Ex-
amples (not limited to): dimensionally wrong answer;
obviously too large or too small numerical value; wrong
sign of the effect;
(b) for the calculation of numerical answers: marks
(usually 0.1 pts) for the numerical values are given only
when the underlying formula is correct.
Rule 2: if a contestant writes down a final answer (for-
mula) of a task, or an intermediate result needed to de-
rive the final result, the marks are not given even if the
formula is completely correct, unless it is judged that
that particular formula can be obtained from the basic
laws in a simple-enough-way so that could have been
done purely in mind, without using paper.
T1: Permanent magnets
Part A: Interaction of two magnets.
(A.1) Solution 1.
For all questions, note that spurious rounding (e.g.
rounding 2.4kA to 2kA) will incur a penalty of 0.1 points
lost per incident. Although such rounding does techni-
callyadheretorulesaboutsignificantfigures,IPhOisnot
meant to test one’s understanding of significant figures.
Such rounding is both unreasonable and makes check-
ing solutions much more difficult. Since the distance be-
tween the magnets is big as compared to their size, we
can approximate each of them as a dipole of magnitude
m =
π
4
d2
hJ = 0.75Am2
.
Since the two dipoles are parallel to each other and to
the line connecting them, the interaction energy of one
of the magnets with the field of the other magnet is
W = −⃗ B · ⃗ m = −
µ0m2
2πL3
,
and by taking a derivative we obtain
F1 =
dW
dL
=
3µ0m2
2πL4
≈ 0.21mN.
a) m = π
4 d2
hJ 0.2 pts
b) W = −⃗ B · ⃗ m 0.1 pts
c) F1 = dW
dL 0.1 pts
d) F1 = 3µ0m2
2πL4 0.1 pts
Answer: 0.21mN 0.1 pts
Solution 2. The force between the magnets is found
by converting one cylinder into a superconducting ring.
The current in the ring is I = m
A = Jh. Consider a
small line element dl on the ring with a radial vector
joining from the dipole to the line element. The dipole
moment is decomposed into radial and tangential com-
ponent. By rotational symmetry along the co-axis, the
force on the ring is F = BpIπd, where Bp is the mag-
netic field component lying in the plane of the ring at
its line element. From the given formula of dipole field,
|Bp| = µ0m
4πr3 (2cosθsinθ + sinθcosθ) = 3µ0msinθ cosθ
4πr3 . Sub-
stituting tanθ = d
2L with small angle approximation for
sinθ ≈ θ and cosθ ≈ 1, one gets F = 3µ0m2
2πL4 .
a) m = π
4 d2
hJ 0.1 pts
b) I = Jh 0.1 pts
c) |Bp| = 3µ0msinθ cosθ
4πr3 0.1 pts
d) F1 = 3µ0m2
2πL4 0.1 pts
e) small angle approx.
or correct limiting behavior 0.1 pts
Answer: 0.21mN 0.1 pts
(A.2) In the case of a homogeneous magnetization, the
molecularcurrentsinthebulkofthematerialcancelout,
leaving only a surface current at the surfaces which are
not perpendicular to the magnetization vector. Hence,
there is a surface current on the side surfaces of the
cylinder. As the height of the surface is much smaller
thantheradius, thesecurrentscanbeapproximatedasa
ring current I; the dipole moment πd2
I/4 of the ring cur-
rent must be equal to the total dipole moment πd2
hJ/4
of the magnet, hence I = Jh ≈ 2.4kA.
a) current around edge of magnet 0.1 pts
c) m = IA 0.1 pts
d) I = Jh 0.1 pts
Answer: 2.4kA 0.1 pts
Remark: Having established the analogy to an edge
current, one could instead find I by evaluating the mag-
netic field at some point (e.g. far above the current loop)
and matching to the given dipole result. Biot-Savart at a
point on the ring axis at some distance z ≫ d above the
loop gives
B = Bẑ =
µ0
4π
2π Z
0
I(d/2)dθ
z3
d/2
z
ẑ =
µ0Id2
8z3
ẑ. (1)
Matching this to the dipole result from the previous part
gives I = Jh as above.
(A.3) Since the distance between the magnets is now sig-
nificantly smaller than their diameter, the force can be
approximately found as the force between two straight
currents I of length πd at distance L:
F2 =
µ0I2
2πL
πd =
µ0I2
d
2L
≈ 14N.IPhO 2022 Theoretical problems: solutions. Language: English
a) Consider as straight currents 0.3 pts
b)B = µ0I
2πL 0.3 pts
c) F2 = πdIB 0.2 pts
d) F2 = µ0I2
d
2L 0.1 pts
Answer: 14N 0.1 pts
(A.4) The chain will most likely break below the top-
most magnet because then the magnetic pull between
the magnets needs to compensate the largest possible
weight. Let the number of magnets be N + 1, and the
mass of a single magnet M = π
6 ρδ3
≈ 0.5g; then the
weight of the magnets F = MNg is balanced by the mag-
netic force
F =
3µ0m2
2πδ4
N X
n=1
1
n4
=
µ0m2
π3
60δ4
,
where m = π
6 Jδ3
≈ 78mAm2
and we have assumed that
N ≫ 1 so that we can assume in the sum N = ∞. From
the force balance we obtain
N =
µ0m2
π3
60Mgδ4
≈ 1320;
hence, the total length of the chain is Nδ = 6.6m. Note
that N = 1320 is indeed much bigger than 1.
a) It will break at the top 0.1 pts
b)M = π
6 ρδ3
0.1 pts
c) F = MNg 0.2 pts
d) F = 3µ0m2
2πδ4
PN
n=1
1
n4 0.2 pts
e) m = π
6 Jδ3
0.2 pts
f) l = µ0m2
π3
60Mgδ3 0.1 pts
Answer: 6.6m 0.1 pts
Remark: if the sum is substituted with a finite sum as an
approximation, with two or three terms in it, full marks
aregiven. Ifonlyonetermiskept, subtract0.1fromd)or
f). Remark 2: It’s possible to get a range of final answers
depending on the approximations used for g, mass, mag-
netic moment, etc. Answers that round to 1300 balls
should definitely not be penalized, which corresponds
to a distance range of 6.25 - 6.75m. 1260 balls (6.3m) is
whatyougetwithg=10andmass=0.5g; 1320balls(6.6m)
is what you get with g=9.8 and a mass of 0.49g (or, with-
out rounding the mass and magnetic moment and can-
celling out the volume).
(A.5) Solution 1. Each of the balls creates magnetic field
of a dipole m; the magnetic dipole creates the same field
wich would be created by two magnetic charges, equal
by modulus to q and of opposite sign, at a distance s =
m/q, assuming that this distance s is much smaller than
the distance from the dipole to the observation point.
Here it is convenient to select s = δ (hence q = m/δ)
because in that case almost all the positive and nega-
tivemagneticchargesoverlapandcancelouteachother.
The only ones which will not cancel out are the magnetic
charges at the chain’s endpoints. One of these charges is
very far so that the field at P is the field of a magnetic
charge at O:
B =
µ0q
4πr2
=
µ0m
4πδr2
=
Jµ0δ2
24r2
.
a) Idea of magnetic charges 0.4 pts
b)q = m/δ 0.4 pts
c) B = µ0q
4πr2 0.4 pts
d) B = Jµ0δ2
24r2 0.3 pts
The same scheme applies for solutions which work with
electrical charges, with a proportionality constant relat-
ing that field to the magnetic field of magnetic dipoles.
Then, the sub-score a) is given for the idea of calculating
the field of electrical dipoles (0.2 pts), with a correct pro-
portionality factor between the two fields, k = B/E =
µ0ε0 = c−2
(0.2 pts).
Solution 2. It is clear that from distances larger than
the diameter of a magnet, the shape of the magnets
doesn’t matter; what matters is only the total dipole mo-
ment as this is what defines the magnitude of the field
at large distances. So, we can substitute the balls with
cylindersofequalvolume. Now, letusrequiretheheight
of these cylinders to be δ; then the neighbouring cylin-
ders in the chain will be touching each other. As a re-
sult, instead of the chain of balls, we have a long homo-
geneous cylinder. Equal volume means that the cross-
sectional area of these cylinders A = π
6 δ2
. We know
from task A.2 that such a cylinder can be considered as a
longsolenoidcarryingsurfacedensityofboundcurrents
equal to J. So, the magnetic field inside it B0 = µ0J, and
therefore, it carries magnetic flux Φ = B0A = π
6 δ2
µ0J.
We know that inside the solenoid, magnetic field is con-
stant, and outside, the field is zero. However, this is
valid only until the endpoints of the solenoid are far. All
that flux is released near each of the endpoints of the
solenoid. The released flux needs to satisfy the Maxwell
equations: the B-field needs to have no sources and be
potential. We know that the only solution in such a case
is a central isotropic field ⃗ B = f(r)r̂, where r denotes
the distance from the endpoint and r̂ — the correspond-
ing unit vector. From the Gauss law we conclude that
4πr2
f(r) = ´Φ = π
6 δ2
µ0J, hence B = Jµ0δ2
24r2 .
a) Idea of substituting spheres with cylinders 0.4 pts
b)A = π
6 δ2
0.2 pts
c) Φ = π
6 δ2
µ0J 0.4 pts
d) B = Φ/4πr2
0.4 pts
e) B = Jµ0δ2
24r2 0.1 pts
Remark: for part a, give only 0.1 points if students make
the cylinder replacement but then fail to make any real
progress using it.
Solution 3. This solution follows the solution 2 up to
the point where we have a solenoid with surface cur-
rent density J. After that we observe that at any point
in space, the axial component of the magnetic field is
B = µ0J
Ω
4π
,
where Ω denotes the solid angle under which we can
see the interior surface of the solenoid, minus the solid
angle under which we can see the outer surface. This
can be derived easily from the Biot-Savart law: dBz =
µ0
4πr2 jdzd⃗ l × r̂ · ẑ, where hats denotes unit vectors, d⃗ l —
an infinitesimal vector parallel to the surface current,IPhO 2022 Theoretical problems: solutions. Language: English
and ⃗ r — a vector pointing from the observation point
to a point on the solenoid. This can be rewritten as
dBz = µ0
4πr2 jd⃗ z×d⃗ l·r̂ = µ0
4πr2 Jd⃗ A·r̂, where d⃗ A denotes the
area of a surface element on the solenoid. To complete
our proof, it suffices to notice that ⃗ dA · r̂ is the apparent
area of the surface element, dΩ = ⃗ dA · r̂/r2
.
Now, at the point P, the outside and inside contribu-
tions to Ω cancel out everywhere except for the circu-
lar opening of the solenoid. Thus, Ω = Acosθ/r2
so
that Bz = Jµ0δ2
24r2 cosθ. Finally, we can use the Gauss
law to obtain expression for the radial component BR
(with R denoting the radius in cylindrical coordinates)
of the magnetic field. Someone not familiar with vec-
tor calculus can calculate the magnetic flux Φc through
a circle of radius R0 = rsinθ. Then, the cylindri-
cal coordinate R = z tanθ′
so that dR = z cos−2
θ′
dθ′
,
and 1
r2 = cos2
θ′
/z2
. Therefore Φc =
R
2πRBzdR =
πJµ0δ2
12 cosθ′
´dθ′
= πJµ0δ2
12 sinθ. We can see that this de-
pends only the spherical coordinate θ; by considering
conical frusta with circular faces having the same polar
angle θ we can easily conclude that the magnetic field
must be radial, i.e. B = Bz/cosθ = Jµ0δ2
24r2 .
a) Idea of substituting spheres with cylinders 0.4 pts
b)A = π
6 δ2
0.2 pts
c) Bz = Jµ0δ2
24r2 cosθ 0.4 pts
d) B = Bz/cosθ 0.4 pts
e) B = Jµ0δ2
24r2 0.1 pts
Solution 4. Finally, the solution could be obtained the-
oretically also by summing over all the fields of individ-
ual magnets. However, this is mathematically very de-
manding, therefore full solution is not provided here.
The first steps are as follows. (i) Writing the contribu-
tion Bsz and BsR of a single magnet at distance z from
the point O to the axial and radial (in cylindrical coordi-
nates) components of the magnetic field; (ii) going from
summation of individual contributions to integration by
assuming linear density of dipoles ρm = m/δ so that
dm = mdz/δ; performing integration over z to find the
field components.
The mathematical derivation: A dipole at position z
dm = m
δ dz generates a magnetic field (in Cartesian co-
ordinates):
dBz = dBr′ cosθ − dBθ′ sinθ =
µ0dm
4πr′3

2 − 3sin
2
θ′

dBR = dBr′ sinθ + dBθ′ cosθ =
3µ0dm
4πr′3
sinθ′
cosθ′
Where r′
=
√
r2 + z2 − 2rz cosθ and sinθ′
= r
r′ sinθ are
coordinates relative to the dipole dm. In order to sim-
plify the integration, do substitution: u = z−r cosθ
r sinθ , then
r′
= rsinθ
√
u2 + 1; dz = rsinθdu.
Integration for Bz:
Bz =
Z
dBz =
µ0m
4πδ
Z ∞
0
dz
1
r′3
2 −
3r2
sin
2
θ
r′2
!
=
µ0m
4πδr2 sin
2
θ
Z ∞
−cotθ
du
h
2(u2
+ 1)−3/2
− 3(u2
+ 1)−5/2
i
=
µ0m
4πδr2 sin
2
θ

2u
√
u2 + 1
−
2u3
+ 3u
(u2 + 1)3/2
∞
−cotθ
= −
µ0mcosθ
4πδr2
Integration for BR:
BR =
Z
dBR
=
3µ0m
4πδ
Z r cosθ
0
dz
1
r′3
·
r
r′
sinθ
r
1 −
r2
r′2
sin
2
θ
−
Z ∞
r cosθ
dz
1
r′3
·
r
r′
sinθ
r
1 −
r2
r′2
sin
2
θ
!
= −
3µ0m
4πδr2 sin
2
θ
Z ∞
cotθ
udu
(u2 + 1)5/2
= −
3µ0m
8πδr2 sin
2
θ
Z ∞
cot2 θ
dv(v + 1)−5/2
(v = u2
)
= −
µ0msinθ
4πδr2
a) writing correctly Bsz 0.2 pts
b) writing correctly BRz 0.2 pts
c) dm = mdz/δ 0.2 pts
c) Bz = Jµ0δ2
24r2 cosθ 0.4 pts
d) BR = Jµ0δ2
24r2 sinθ 0.4 pts
e) B = Jµ0δ2
24r2 0.1 pts
Remarks: for c) and d), a partial credit of 0.1 pts can
be given for each of these integrals if the initial integral
is written correctly, but the calculation of the integral
is not performed or there are many mistakes. If only
few mistakes were made, subtract 0.1 for each mistake
made. If initial integral is written incorrectly, no points
are given. Points for e) are given only if the final answer
is completely correct.
Another remark: in the integration of BR, if the change
of sign (of the cosine) is ignored, the correct answer
could still be obtained (because the extra parts cancel
out), but the derivation would technically be wrong.
Solution 5. It’s possible to perform the direct integra-
tion of the previous solution more easily using angular
variables in place of z. Let s = rsinθ be the distance of
closest approach of the line to P for convenience and ϕ
be the angle from a point on the line to P (such that ϕ = θ
at the end near P, ϕ ≈ π at the other end). Then the addi-
tional magnetic field from a small component given by
dϕ is
dB =
µ0 sin
3
ϕ
4πs3
(2dm∥ − dm⊥)
=
µ0 sin
3
ϕ
4πs3
dm×
(2cosϕ(cosϕẑ − sinϕr̂) − sinϕ(sinϕẑ + cosϕr̂))
=
µ0 sin
3
ϕ
4πs3
dm
dz
dz((3cos2
ϕ − 1)ẑ − cosϕsinϕr̂).IPhO 2022 Theoretical problems: solutions. Language: English
Since s = −z tanϕ and dm = mdz/δ, we have dm/dϕ =
sm/(δ sin
2
ϕ). Then
dB =
µ0m
4πs2δ
((3cos2
ϕ − 1)ẑ sinϕdϕ − sin
2
ϕr̂cosϕdϕ)
and thus
B =
µ0m
4πs2δ
ϕ=π Z
ϕ=θ
(−(3cos2
ϕ − 1)ẑdcosϕ − sin
2
ϕr̂dsinϕ)
= −
µ0m
4πs2δ

cos3
ϕ − cosϕ
π
ϕ=θ
ẑ + sin
3
ϕ
π
ϕ=θ
r̂

=
µ0m
4πs2δ
(−cosθsin
2
θẑ + sin
3
θr̂).
Putting back in our expression for s, we have
B =
µ0m
4πr2δ
(−cosθẑ + sinθr̂) (2)
which is the desired result.
a) writing correctly dB/dϕ 0.5 pts
b) dm/dϕ = sm/(δ sin
2
ϕ) 0.2 pts
c) |Bz| = µ0m/(4πr2
δ) 0.4 pts
d) B̂ = −cosθẑ + sinθr̂ 0.4 pts
Remark: for d, note that the coordinate system wasn’t
specified in the problem, so check what the student is us-
ing; the point is to get the “radially outward” (or inward)
idea.
Part B: Interaction of magnets with ferro-
magnetic materials.
(B.1) Due to the boundary condition at the surface of the
ferromagnet, the field lines must enter the plates almost
perpendicularly. Indeed, as it follows from the Ampère’s
circutal law, the tangential component of ⃗ B/µ is continu-
ous at the surface of a ferromagnet; similarly, the Gauss
law for the magnetic field implies that the normal com-
ponentoftheB-fieldiscontinuous. Fromthesetwofacts,
one can derive the “refraction law” for the field lines,
tanα = µtanβ, where α and β are the angles between
thetangentsofafieldlineandthesurfacenormal, inside
and outside of the ferromagnetic, respectively. From the
fact that µ ≫ 1 we can deduce that as long as α is not
small, β ≈ 0. Those field lines which enter the plate
must exit it somewhere, this happens somewhere far-
ther away from the magnet, see the sketch below.
1
2 3
2
a) Field line 1 correct 0.2 pts
b) Field line 2 correct 0.4 pts
c) Field line 3 correct 0.4 pts
Remarks:
i) Subtract 0.1 both from b) and c) if the field line does
not enter the plate perpendicularly;
ii) Subtract 0.1 both from b) and c) if the field line does
not refract correctly;
iii) Subtract 0.1 from (b) if its segment rightwards of the
magnet is not shown (note that in the student answer
sheet, the magnet is to the right of the plate, not on top
of it as shown in the solution);
iv) Subtract 0.1 both from a) and c) if the field line does
not form a closed loop;
v) Subtract 0.1 from a) if the line touches or enters the
plate; 0.1 from b) if the line exits the plate; 0.1 from c) if
the line reaches the other side of the plate.
(B.2) The problem can be solved by introducing an im-
agemagnet—amirrorreflectionoftherealmagnetwith
respect to the surface of the plate, with the dipole mo-
ment being both reflected and flipped. With this im-
age magnet, the boundary condition above the plate is
satisfied: the field lines enter the plate perpendicularly.
Hence, the force and torque exerted to the real magnet
are equal to the force and torque exerted by the image
magnet. The equilibrium is achieved when the dipole is
parallel to the field created by the image magnet which
is the case when the dipole moment is perpendicular to
the plate. Hence, leftmost boxes of the first and second
row need to be marked with a tick. The force is almost
the same as what was already found in part A(d), with
the only difference that now there is only the first term
in the sum:
F =
3µ0m2
2πδ4
= 5.9N.
a) Idea of magnetic image (even if ⃗ J not flipped) 0.3 pts
b) Correct direction of the image ⃗ J 0.2 pts
c) F = 3µ0m2
2πδ4 0.2 pts
d) F = 5.9N 0.1 pts
e) each correct tick 0.1 pts
f) each incorrect tick -0.1 pts
Remark: if e) + f) adds up to a negative number, replace
the total score for those two parts by 0.
(B.3) Solution 1. As explained above, the magnetic field
lines are perpendicular to the surface of the ferromag-
netic plate. Since the gap is narrow as compared to its
width, the field lines are inside the gap almost straight.
Due to the Ampère’s circulation theorem it also means
that the field in the gap is homogeneous. Due to the
Ampère’s circulation theorem, field outside the gap van-
ishes as the gap’s width tends to 0, so in the limit all flux
through the permanent magnet wraps around through
the gap; see the sketch of magnetic field lines. Now, let
us recall that the disc magnet is equivalent to a surface
current of density J along the curved surface of the disc.
Hence we can write the circulation theorem along the
loop defined by one of the field lines shown in the fig-
ure:
I =
I
⃗ H · d⃗ r ≈ (B1 + B2)h/µ0,
where B1 and B2 denote the flux density inside the per-
manent magnet and outside the magnet (but still inside
the slit), respectively. Here we have neglected the con-
tribution of the magnetic field inside the ferromagneticIPhO 2022 Theoretical problems: solutions. Language: English
plate to the integral because µ is very big. Due to the
Gauss law, π
4 d2
B1 = π
4 (D2
−d2
)B2; with D = 2d this yields
B1 = 3B2. Thus, B2 = Iµ0/4h = Jµ0/4 = 0.375T and
B1 = 1.125T. In order to find the force exerted to one
of the ferromagnetic plates, we can notice that the force
does not depend on what is creating the magnetic field
and, hence, we can substitute the disc magnet with the
current I in a superconducting ring. Next we apply the
virtual displacement method and increase the distance
between the plates by dx. In the case of a superconduct-
ingring, themagneticfluxthroughtheringisconserved,
and therefore, the magnetic field strength inside the gap
will remain unchanged during the virtual displacement.
With all this information we are ready to calculate the
change of the magnetic field energy. The magnetic field
energy inside the ferromagnet can be neglected because
its density is ca µ times smaller than inside the gap. So,
the energy is changed only because the volume of the
gap is changed:
dW =
π
8µ0
[d2
B2
1 + (D2
− d2
)B2
2]dx =

3π
2µ0
B2
2d2

dx
which means that the force
F =
dW
dx
=
3π
2µ0
B2
2d2
=
3π
32
J2
µ0d2
≈ 210N.
a) ⃗ B in the slit is homogeneous 0.2 pts
b) ⃗ B in the permanent magnet is homog. 0.2 pts
c) ⃗ B in slit and in perm. magn. is normal 0.1 pts
e) I = (B1 + B2)h/µ0 0.1 pts
f) π
4 d2
B1 = π
4 (D2
− d2
)B2 0.1 pts
g) B2 = Iµ0/4h 0.1 pts
h) B1 = 3Iµ0/4h 0.1 pts
i) dW = π
8µ0
[d2
B2
1 + (D2
− d2
)B2
2]dx 0.3 pts
j) F = dW
dx 0.1 pts
k) 3π
32 J2
µ0d2
0.1 pts
l) F ≈ 210N. 0.1 pts
Solution 2. The second solution follows mostly the first
one, and deviates only after the fields B1 and B2 have
been found. Now we do not introduce the fictitious su-
perconducting loop, and instead calculate carefully all
the changes to the magnetic field energy during virtual
displacements. Nowthecurrentaroundtheperimeterof
the permanent magnet is fixed to I as its magnetisation
is assumed to be constant. We can still use the previous
expressions for the magnetic field energy if we consider
the distance h between the plates to be a variable:
Wf =
πd2
h
8µ0
[B2
1+3B2
2], B1 = 3B2 =
3Iµ0
4h
⇒ Wf =
3µ0πd2
I2
32h
.
In addition to the change of the magnetic field energy,
we also need to take into account the energy of the per-
manent magnet in the magnetic field, ´
Wm = −mB1 = −
π
4
d2
I ·
3Iµ0
4h
= −2Wf,
hence the total energy W = −Wf. Now we can find force
as F = −dW
dh =
dWf
dh , yielding the same result as before.
Notice that if we didn’t take into account the energy of
the dipole then we would have obtained the correct an-
swer by modulus, but with a wrong sign — we would
have had repulsion instead of attraction of the plates.
a) ⃗ B in the slit is homogeneous 0.2 pts
b) ⃗ B in the permanent magnet is homog. 0.2 pts
c) ⃗ B in slit and in perm. magn. is normal 0.1 pts
e) I = (B1 + B2)h/µ0 0.1 pts
f) π
4 d2
B1 = π
4 (D2
− d2
)B2 0.1 pts
g) B2 = Iµ0/4h 0.1 pts
h) B1 = 3Iµ0/4h 0.1 pts
i) Wf = π
8µ0
[d2
B2
1 + (D2
− d2
)B2
2]h 0.1 pts
j) Wm = −Wf 0.2 pts
k) F = dW
dh 0.1 pts
l) 3π
32 J2
µ0d2
0.1 pts
m) F ≈ 210N. 0.1 pts
Remark: those who do not take into account the energy
of the dipole will be given zero points for j), k), l), and m).
Solution 3. There is a more intuitive way of finding
the field distribution. Using carefully the analogy be-
tween electric and magnetic dipole fields, one could con-
vert the problem into a permanent electric polarization
inserted between two conducting plates. From similari-
ties among Maxwell equations, it could be observed that
E ≈ B, D ≈ H and P ≈ M, with some prefactors involv-
ing permeabilities and permittivities. Consider putting
the smaller capacitor inside the conductor plates, the
charge would induce opposite charge that makes field
lines perpendicular to the conductor. In addition, there
should not be net charge on the metal plates upon in-
sertion of the smaller cylinder. Hence, there is again an
uniform charge density of opposite charge on the metal
plate spreading over the larger region. Effectively, for E
field, it is equivalent to spreading the original charge on
smaller plate onto the larger plate. Because the radii has
ratio of 2, E = Q
4S0ϵ0
, D2 = Q
4S0
, and D1 = Q
S0
(1 − 1/4) =
3D2. This agrees with B2, B1 in previous solutions. The
rest easily follows. (There are confusions about B or H
but most are due to the definition of polarization charge
or current being considered free or not, a self-consistent
derivationwouldbesufficient.Theclose-to-centrepartof
the field of electric and magnetic dipole is opposite and
one should be careful about this effect inside polarisa-
tion when utilizing the analogy.)IPhO 2022 Theoretical problems: solutions. Language: English
a) correct analogy arguments 0.2 pts
b) correct charge distributions 0.2 pts
c) E is uniform 0.1 pts
e) correct D expressions 0.1 pts
f) correct conversion factor 0.1 pts
g) B2 = Iµ0/4h 0.1 pts
h) B1 = 3Iµ0/4h 0.1 pts
i) Wf = π
8µ0
[d2
B2
1 + (D2
− d2
)B2
2]h 0.1 pts
j) Wm = −Wf 0.2 pts
k) F = dW
dh 0.1 pts
l) 3π
32 J2
µ0d2
0.1 pts
m) F ≈ 210N. 0.1 pts
Solution 4. (Incorrect) A solution that has been submit-
ted by a few students uses an infinite number of images
of the permanent magnet. This forms an infinite rod,
which they assume gives the same magnetic field as a
normal magnetised rod would, 0 everywhere outside it.
However, since the plates are finite, the magnetic field
outside would actually be non-zero, and would need to
be calculated according to Solution 1. In this case, only
marks corresponding to a), b) and c) in the scheme of So-
lution 1 should be awarded, i.e. 0.5 marks. If someone
doesn’t assume the field outside to be 0, give marks for
the subsequent calculations according to solution 1.
Part C: Model of ferromagnetic and anti-
ferromagnetic materials.
(C.1) Solution 1, Since the task is about finding only one
configuration of dipoles, we can just try looking for con-
figurationssatisfyingtherequirements. Thesimplestap-
proach is to start construction with the chain of magnets
described in part A.4: if all the dipoles are directed par-
allel to each other and parallel to the chain, the system is
obviously in equilibrium. Now, two such chains can be
parallel to each other, and they can be also antiparallel.
In both cases, each of the balls is in a stable equilibrium
in terms of rotations. Indeed, each of the balls from the
left and from the right contribute the field ⃗ B1 = x̂µ0m
2πδ3 ,
while each of the balls from above and below contribute
⃗ B2 = ±1
2
⃗ B1, where x̂ denotes a horizontal unit vector; ’+´
corresponds to antiparallel rows, and ’−´ — to parallel
rows. Since B2 < B1, the sum of the four contributions is
always pointing in the direction of x̂ which ensures the
rotational stability of the magnet. Attraction force be-
tween two neighbouring rows is contributed only by the
vertical nearest-neighbour pairs of balls, so we can just
calculate only the interaction force between two such
magnets. If two such balls were to be at distance y, the
interaction energy would be W = ±µ0m2
4πy3 so that the y-
directional force Fy = dW
dy = ∓3µ0m2
4πy4 . This means that the
two balls attract if they are antiparallel and repel other-
wise. Thisbringsustotheconclusionthattheordermust
be antiferromagnetic, shown below in the sketch.
The work needed to pull out one of the magnets is eas-
ily found as its interaction energy with the four near-
est neighbours, with minus sign, i.e. W = ⃗ B · ⃗ m, where
⃗ B = 2⃗ B1 + 2⃗ B2 = 3µ0m
2πδ3 x̂ so that W = 3µ0m2
2πδ3 = 29mJ.
a) Fig: left and right parallel magnets attract 0.1 pts
b) Fig: top and bottom antipar. magn. attract 0.1 pts
c) ⃗ B from the 4 neighbours ∥ ⃗ m ⇒ no torque 0.1 pts
d) correctly marked 12 arrows 0.1 pts
e) antiferromagnetic 0.1 pts
f) W = ⃗ B · ⃗ m 0.1 pts
g) W = 3µ0m2
2πδ3 0.1 pts
h) W = 29mJ 0.1 pts
Remarks: no marks for d) if any of the magnets has a
wrong direction or has no arrow. No marks for e) if the
score for d) is zero.
Solution 2, It appears that there is another stable con-
figuration, see figure belowIPhO 2022 Theoretical problems: solutions. Language: English
A
B
C
D
E
In order to show that this configuration is stable, too,
let us find the direction of the magnetic field at the po-
sition of one of the balls, the ball marked with A in the
figure, due to its four neighbours. Using the formula for
the magnetic field of a dipole, we can see that the balls B
and D create both field b(x̂+2ŷ), where x̂ and ŷ are hori-
zontal and vertical unit vectors. Meanwhile, both C and
E create field b(2x̂ + ŷ) so that the total field is 6b(x̂ + ŷ);
this is parallel to the dipole moment of the ball A which
means that no torque is exerted on it. What is left to do
is to calculate the interaction force between two neigh-
bouring balls, e.g. A and B. One way to do it is to decom-
pose the both dipoles into vertical and horizontal com-
ponents: ⃗ mA = m0(x̂ + ŷ and ⃗ mB = m0(−x̂ + ŷ, where
m0 = m/
√
2. One can easily see that the pair of dipoles
m0x̂ and −m0x̂ attract, and the same applies to the pair
m0ŷ and −m0ŷ. It is also easy to see that there is no hori-
zontal component for the interaction force between the
remaining pairs, m0x̂ with m0ŷ and m0ŷ and −m0x̂. A
little more efforts are needed to see that the horizontal
component of the interaction force is also zero. To that
end one can calculate first the torque TAB exerted by
dipole A to B with respect to the centre of the ball B, and
the torque TBA exerted by B to A with respect to the cen-
tre of the ball A; one can easily see from symmetry that
TAB = −TBA. Due to Newton’s third law, with respect to
the centre of the ball A, the sum of torques exerted by
B to A and by A to B must be zero; it can be expressed
as TAB + TBA + Fxδ = 0, where Fx denotes the horizon-
tal component of the force exerted by A to B. From this
equality we can conclude that Fx = 0. So we found that
each of the neighbouring balls attract each other, hence
the whole configuration is stable.
a) Showing: neighbouring magnets attract 0.2 pts
b) ⃗ B from the 4 neighbours ∥ ⃗ m ⇒ no torque 0.1 pts
c) correctly marked 12 arrows 0.1 pts
d) antiferromagnetic 0.1 pts
e) W = ⃗ B · ⃗ m 0.1 pts
f) W = 3µ0m2
2πδ3 0.1 pts
g) W = 29mJ 0.1 pts
Remark: no marks for c) if any of the magnets has a
wrong direction or has no arrow. No marks for d) if the
score for c) is zero.
(C.2) Now we need to repeat the steps done for the pre-
vious question, with the only difference in the mutual
placement of the magnets. Also, each of the magnets
of the top row interacts now with two magnets of the
bottom row with the three magnets forming a equilat-
eral triangle. Since we’ll be going to use virtual displace-
ment method, we consider the interaction of three mag-
nets forming an isosceles triangle as shown in the figure;
while the base of the triangle remains fixed during vir-
tual displacements, the length of the sides l will change.
First we need an expression of the magnetic field caused
by the two bottom magnets at the centre of the topmost
magnet. Due to symmetry, this field must be horizontal;
we can use the formula provided in the problem text for
finding it. The dipole moment of the left-bottom magnet
needs to be divided into components parallel and per-
pendicular to the radius vector drawn from its centre
to the centre of the topmost magnet, m∥ = mcosα and
m⊥ = msinα. Hence, we can express the resultant x-
component of the magnetic field as
⃗ B3x =
µ0
4πl3
(2⃗ m∥ cosα − ⃗ m⊥ sinα) =
µ0 ⃗ m
4πl3
(3cos2
α − 1).
The magnetic field due to both magnets is therefore
2B3xx̂.
As the first thing, we can now analyse the stability of a
magnet with respect to rotations. As before, we assume
that the magnets in one single row are parallel to each
other, and the magnets at the two neighbouring rows
are either parallel or antiparallel to each other. In either
case, the rows at the top and at the bottom from a given
magnet are parallel to each other; let them be oriented
along x̂. Then, each row contributes 2B3xx̂ to the total
field at the position of our magnet. The total field has
also contributions ⃗ B4x = ± µ0
2πδ3 from the left and right
magnets; here ‘+’ corresponds to the ferromagnetic or-
der, and ‘−’ — to the antiferromagnetic order. Keeping
in mind that l = δ and cosα = 1
2 the total field is
⃗ B5 = 4⃗ B3x + 2⃗ B4x =
µ0m
2πδ3

−
1
2
± 2

x̂.
This is parallel to the given magnetic dipole for both ‘+’
and ‘−’, which ensures stability in any case.
With ⃗ m = ±x̂m and y denoting the height of the isosce-
les triangle, the vertical component of the interaction
force of a magnet with a magnet in the bottom row can
be found as
F5y =
d
dy
⃗ B3 · ⃗ m = ±
dl
dy
d
dl
µ0m2
4πl3

3δ2
4l2
− 1

= ∓
dl
dy
3µ0m2
16πδ3
;
here we have used cosα = δ
2l and upon taking deriva-
tive, substituted l = δ. For this force to be attractive, weIPhO 2022 Theoretical problems: solutions. Language: English
need a minus sign which corresponds to the ferromag-
neticorder(keepinmindthat dl
dy > 0). Nowweareready
to mark the direction of the dipoles on the sketch, see the
figure below.
The work needed to pull out a magnet is found simi-
larly to the part (C.1):
W = ⃗ B5 · mx̂ =
3µ0m2
4πδ3
= 15mJ.
a) ⃗ B3x = µ0 ⃗ m
4πl3 (3cos2
α − 1) 0.2 pts
b) ⃗ B4x = ± µ0
2πδ3 0.1 pts
c) ⃗ B5 = 4⃗ B3x + 2⃗ B4x 0.1pts
d) ⃗ B5 = µ0m
2πδ3 −1
2 ± 2

x̂. 0.1 pts
e)F5y = d
dy
⃗ B3 · ⃗ m 0.1 pts
f) F5y = ∓ dl
dy
3µ0m2
16πδ3 0.1 pts
g) F5y attractive 0.1 pts
h) correctly marked 12 arrows 0.1 pts
i) ferromagnetic 0.1 pts
j) W = 3µ0m2
4πδ3 0.1 pts
k) W = 15mJ 0.1 pts
Remark: ±signsarenotrequiredaslongasthecorrect
sign corresponding to the ferromagnetic order are used:
meaning, + sign in f) and - sign in d). No marks for e) if
the score for d) is zero.IPhO 2022 Theoretical problems: solutions. Language: English
T2: James Webb Space Telescope (12 pts)
Updated July 15, 12:30 PM China Time
Changes since July 13, 4:30 PM China Time are high-
lighted in red, unless those changes are only correcting
minor typos that don’t affect marking scheme. You are
particularly urged to pay attention to any red changes
in the marking scheme, as some of these may have oc-
curred after papers were initially marked.
Some general notes for entire Theory 2 marking
An equation which is dimensionally correct, but miss-
ing a multiplicative factor or having a single transcrip-
tion error from a previous equation, will receive a de-
duction of -0.1 pts.
An equation which is dimensionally incorrect or one
which has more than two transcription errors will re-
ceive no points.
Follow on errors are not transcription errors; the only
penalty will be in the first occurrence of a mistake, ex-
cept in the case of a dimensionally incorrect equation,
which still receives no points, even if a follow on error.
There are two follow on caveats below.
If an error in an equation trivializes the remainder of
the problem, then no additional points after that should
be awarded. For example, if a student is computing
counts, and they arrive at the incorrect answer of zero,
then they should not get future points that compute in-
tensity, density, uncertainty, as these would all become
trivial.
If an error in an equation makes the remainder of a
problem physically unrealistic, then they should get no
points for any requested numerical results, but they can
continue to get points for theoretical equations. For ex-
ample, if a student has an extra factor of 100, they can
get points for derivations, but if asked to find a temper-
ature they will not get points for reporting 100 times the
actual temperature. They will also not get points for re-
porting the correct actual temperature, because it will
not be consistent with their theory.
If an equation can be implied to have been used, then
the assumption is that it did exist and would get points.
For example, writing Eq. 7 without explicitly writing
Eq. 6 would get points for both equations, subject to er-
ror rules above.
In places on the mark scheme there are a range of ac-
ceptable answers, and in places the range is divided into
two possible ranges, a close range for full points, and a
larger range for partial points. This might appear like
this:
35µm ≤ dd ≤ 47µm 0.2 pts
20µm ≤ dd ≤ 90µm 0.1/0.2 pts
which means that they get 0.2 pts if they are within the
narrowrange, butonly0.1ptsiftheyareoutsidethenar-
row range but still within the larger range. They would
never get 0.3 pts in this scheme, so don’t double count!
Part A: Imaging a Star (1.8 pt)
1. Diameter of image
The ratio of diameter do for an object at a distance
Do ≫ f and an image diameter di is given by
di
do
=
f
Do
, (3)
so the diameter of the image is
di =
(1.7 × 1011
m)(130m)
(89 ly)(3 × 108 m/s)(365 d/y)(86,400 s/d)
=
= 2.6 × 10−5
m = 26µm.
Marking scheme:
correct formula Eq 3 0.2 pts
di = (26 ± 1)µm 0.2 pts
sum 0.4pts
Units must be shown for a numerical result to get
points; writing the correct answer without showing
work also receives full marks for this problem.
2. Diameter of central maximum
The angular radius of the central maximum is
θmin = 1.22
λ
D
(4)
λ = 800nm is given in the problem
D is the aperture size, which is the primary mirror,
or π
4 D2
= 25 m2
, so
D = 5.6m
The diameter of the central maximum is then
dd = 2θminf = 2.44
λ
D
f = 1.22
λf
p
A/π
(5)
The numerical value is
dd = 2(1.22)
(8 × 10−7
m)
(5.6 m)
(130 m) =
= 4.5 × 10−5
m = 45µm.
dd = 37µm is also acceptable (omitting the factor of
1.22 is okay).
Marking scheme:
correct formula Eq 5 0.1 pts
Aperture D = (5.6 ± 0.2)m 0.1 pts
35µm ≤ dd ≤ 47µm 0.2 pts
sum 0.4pts
No penalty for ignoring factor of 1.22, so check their
math. Units must be shown for a numerical result to
getpoints; writingthecorrectanswerwithoutshow-
ing work also receives full marks for this problem.
3. Equilibrium temperature of the detector at the loca-
tion of the image?
The radiant power from the star is
Pg = 4πro
2
σTg
4
(6)IPhO 2022 Theoretical problems: solutions. Language: English
The intensity at the location of the scope is
Ig =
Pg
4πDo
2
=

ro
Do
2
σTg
4
(7)
This is collected onto the mirror with area A and fo-
cused on a single spot of radius ri, so that the power
incident is
Pi = A

ro
Do
2
σTg
4
= A

ri
f
2
σTg
4
(8)
But at the image we have an equilibrium tempera-
ture of
Pi = aσTp
4
,
where a = πr2
i , so
aσTp
4
=

ri
f
2
AσTg
4
or, ignoring diffraction,
Tp =

A
πf2
1
4
Tg ≈ 530K (9)
When considering diffraction the actual area of the
stars’ image is larger,
a′
=

di + dd
di
2
a ≈ 7.46a (10)
where the actual ratio depends on answers above.
This means the actual pixel temperature will be
Tp,correct =

A
(7.46)πf2
1
4
Tg ≈ 320K. (11)
Marking scheme:
power of source, Eq 6 0.2 pts
intensity at mirror, Eq 7 0.2 pts
power of image, Eq 8 0.2 pts
correct for diffraction Eq. 10 0.1 pts
Either Eq. 9 or Eq. 11 0.1 pts
numerical result 0.2 pts
sum 1.0 pt
Units must be shown for a numerical result to get
points; the answer T ≈ (320 ± 10)K for including
diffraction or T ≈ (530 ± 10)K for ignoring diffrac-
tion must be consistent with their approach. Check
thenumber,sincetheratioinEq10dependsontheir
answer to A.2
Students must present a symbolic equation in their
solution.
Writing Eq. 11 without showing any other work re-
ceives 0.8 pts; Writing Eq. 9 without showing any
other work receives 0.7 pts.
Part B: Counting Photons (1.8 pt)
1. Temperature of source
We are interested in the slope of the graph, which is
slope =
(3) − (−1)
(0.111/K) − (0.151/K)
= −100K
Sincethisisacharacteristictemperature,itisatleast
a partial answer to the problem.
The value of
|
∆Eg
6kB
| = ln10 × 100K = 230K
So the value of
∆Eg
kB
= 6 × 230K = 1380K
Marking scheme:
slope of graph = −100K 0.2 pts
Tgraph = 230K 0.1 pts
Tsource = 1380K 0.1 pts
sum 0.4 pt
Writing either temperature correctly implies they
found the slope of graph, and would get the +0.2 pts.
Just writing Tsource = 1380K gets full marks, as it re-
ally is possible to solve this in one’s head.
OrderofmagnitudeT = 103
Kwillgetfullmarks,and
no work needs to be shown.
As this is order of magnitude, the following final an-
swers will get full marks: T = 600K, T = 1000K,
T = (1380 ± 10)K, T = 1500K. Other numbers in
the range 500 ≤ T ≤ 1500 that are more precise
than these answers ought have a problem score of
no more that 0.2 pts, and must show working that
supports their answers!
2. Write an expression for the total count uncertainty
σt
The three uncertainties are
σr
and
σd =
√
idτ
and
σp =
√
pτ
and then
σt
2
= σr
2
+ (id + p)τ
Marking scheme:
correct error for dark current 0.1 pts
correct read photon 0.1 pts
added in quadrature 0.2 pts
sum 0.4 ptIPhO 2022 Theoretical problems: solutions. Language: English
Writing
σt = σr +
√
idτ +
√
pτ
only gets +0.1, instead of the quadrature +0.2
Forgetting the read error term is a -0.1 pt deduction.
Correct dark current and photon count errors in fi-
nalanswerareacceptableevidenceforthosepoints;
it is not necessary for the student to explicitly state
what is what.
3. Determine the photon count for a signal to noise ra-
tio of S/N = 10.
AtatemperatureofT = 7.5K, thedarkcurrentisid =
5 electrons/second. This gives a total dark current
count of
idτ = 5 × 104
Answers in the range id = 5 ± 1 will be accepted for
full marks.
Let P be the photon count. Then
P = 10σt
so
P2
= 100 σ2
r + idτ + P

(12)
with solution P ≈ 2290, and a rate of p = 0.229 pho-
tons per second.
Marking scheme:
id = (5 ± 1) e/s 0.2 pts
1 ≤ id ≤ 10 0.1/0.2 pts
Eq 12 0.1 pts
0.206 ≤ p ≤ 0.25 0.2 pts
0.10 ≤ p ≤ 0.33 0.1/0.2 pts
sum 0.5 pt
They only get the points for p, the count rate, if it
agrees with their assumption for id, so check the
math!
Writing only the absolute counts P instead of the
rate p would get 0.1 pts for 2060 < P < 2500 and no
points if outside this range.
Ignoringσr doesnotincurapenalty,asitisrelatively
small.
4. What is intensity of source?
The near-infrared photons have an energy of Eg =
2.3 × 6kBT, so
Eλ = (1380K)(1.38 × 10−23
J/K) = 1.9 × 10−20
J
This is not an order of magnitude question like B.1
The energy received every second is
E = (0.23)(1.9 × 10−20
J) = 4.4 × 10−20
J
and the incident intensity on the primary mirror is
then
I =
E/t
A
=
(4.4 × 10−20
J/s)
(25m2)
= 1.8 × 10−22
W/m2
Marking scheme:
Eλ = (2 ± 0.1) × 10−20
J 0.3 pts
Forgetting ln10 factor -0.1 pts
I = (1.8 ± 0.2) × 10−22
W 0.2 pts
sum 0.5 pt
If they forget factor ln10, then the correct intensity
would be (7.8±0.2)×10−23
W. They only get the ln10
penalty once!IPhO 2022 Theoretical problems: solutions. Language: English
Part C: The Passive Cooling
1. Find expressions for the temperatures of first and
fifth sheet
This is a cleaned up version of an “ideal” solu-
tion
Let Qi represent heat flow off of a surface, and Qij
represent the heat flow difference off of two sur-
faces that are facing each other.
The student needs to consider the three types of dif-
ferences below:
Between sun and first sheet:
Q01 = ϵAσ

I0
σ
− T4
1

(13)
which is the net heat flow into sheet 1 from the sun-
side.
Between any two adjacent sheets:
Qij = ϵAσ T4
i − T4
j

, (14)
which is not the net heat flow between the sheets, it
is merely a convenient expression to use later.
Between last sheet and the cold, cruel vacuum of
space:
Q56 = ϵAσ T4
5

, (15)
which is the net heat flow out of the far side of the
last sheet.
Fromthe problem text, the flux emitted by one sheet
and absorbed by an adjacent sheet is
qi = αQi
so that the net heat flow flux out of one sheet ab-
sorbed by the adjacent sheet is
qij = αQij
and the flux ejected into space between two sheets
is
q′
ij = βQij
This doesn’t affect the marking, but the approximation being
madehereisthatβ isthesameforallfourpairsofadjacentsheets.
This makes the math solvable, and was the explicit assumption
that the students were told to make.
A student will need to recognize that
Q01 = ϵAσ

I0
σ
− T4
1

(16)
Q12 = ϵAσ T4
1 − T4
2

(17)
Q23 = ϵAσ T4
2 − T4
3

(18)
Q34 = ϵAσ T4
3 − T4
4

(19)
Q45 = ϵAσ T4
4 − T4
5

(20)
Q56 = ϵAσ T4
5

(21)
can be summed to give
Q01 + Q12 + Q23 + Q34 + Q45 + Q56 = ϵAI0 (22)
A student will need to consider energy balance
across any one sheet:
qi−1,i = qi,i+1 + q′
i,i+1 (23)
basically stating that the net flow into sheet i from
sheet i − 1 must equal the net flow out of sheet i to
either sheet i + 1 or into space.
Substitute in Qij,
αQi−1,i = αQi,i+1 + βQi,i+1
or
Qi−1,i =

α + β
α

Qi,i+1 (24)
The relation for sheet 1 is a little different:
q0,1 = Q0,1 = αQ1,2 + βQ1,2 (25)
and so is the relation for sheet 5:
q4,5 = Q5,6 (26)
What will eventually matter most is
Q5,6 =
α4
(α + β)4
Q0,1 (27)
Now use the recursion of Eq. 24 to sum up the six Qij
terms in Eq. 22:
kQ0,1 = ϵAI0, (28)
with the constant k defined as
k=1+
1
α + β
+
α
(α + β)2
+
α2
(α + β)3
+
α3
(α + β)4
+
α4
(α + β)4
(29)
Substitute the expression for Q0,1 back into Eq. 13
and get
T1 = 4
s
I0
σ

1 −
1
k

=
4
r
I0
kσ
(k − 1) (30)
and the into Eq. 27 and Eq. 15 to get
T5 =
α
α + β
4
r
I0
kσ
(31)
which can also be written elegantly as
T5 =
α
α + β
4
r
1
k − 1
T1.
Marking scheme:
Net flow into sheet 1 Eq 13 0.2 pts
“Net” flow sheet i → j Eq 14 0.2 pts
Net flow out of sheet 5 Eq 15 0.2 pts
Sum to eliminate sheet temps Eq 22 0.2 pts
Generic Energy flow Eq 23 0.2 pts
Recursion for Qij Eq 24 0.2 pts
Sheet 1 Energy flow Eq 25 0.2 pts
Sheet 5 Energy flow Eq 26 0.2 pts
Simplify sum Eq 28 0.2 pts
Find k Eq 29 0.2 pts
Final Expression for T1, Eq 30 0.2 pts
Final Expression for T5, Eq 31 0.2 pts
sum 2.4 ptIPhO 2022 Theoretical problems: solutions. Language: English
• In most cases a single mistake in an equation that
is still dimensional correct will get 0.1 pts for the
equation. Makingthesamemistakemultipletimes
is not a follow on error, and would be penalized
every time.
• Any equivalent to Eq 14 would get the 0.2 pts.
• Any attempt to balance energy flow on a generic
sheet like Eq 23 that is dimensionally correct and
reasonable given their presentation would get the
0.2 pts
• Since sheet 1 and sheet 5 have a different en-
ergy balance approach, they must show those sep-
arately to get those points.
• It is possible to arrive at Eq 28 based on dimen-
sional analysis alone. A student who writes some
form of Eq 28 without clear justification would get
points for Eq 22 and Eq 28. They could get full
marks for final sheet temperatures if it is consis-
tent; if they did, then they would probably also get
at least partial points for Eq 13 and/or Eq 15. They
would need to introduce one more unknown con-
stant to have defined Q56 = k′
Q01. The maximum
points I would expect with this approach is 1.2 pts.
• k in Eq 29 is allowed a single error for 0.1 pts. Two
errors is no points.
• Failing to include the back flux of Eq 14 is only a
penalty on that equation but would be zero points,
as it is a serious error. That means writing the
equivalent of Qij = ϵAT4
i is zero points! The work
after this would have a follow on error that would
need to be traced.
Corrections to some of the above formula
Andres Poldaru, leader from Estonia, pointed out
an inconsistency in part of the Eq. 23 above deriva-
tion. The above equation does reflect the simplified
schematic diagram of energy flow and loss on the
question paper, but does not properly reflect the en-
ergy balance on an individual sheet. It should read,
for sheets 2, 3, and 4, as
qi−1,i = qi,i+1 + 2BQi
where B is the physical fraction of energy lost to
space from one side of a sheet, and Qi = ϵAσT4
i . A
similar correction would exist for sheet 1 and 5, ex-
cept that the factor of 2 in front of B would be 1, as
Q01 = q12 + BQ1 and q45 = Q56 + BQ5
Thefactorof2isn’ttheproblem, itisinsteadthatitis
now difficult to align the expression for energy loss
tospacebetweensheetswiththeenergylosttospace
of a specific sheet. As such, this approach creates a
much messier solution.
There is no convenient way to solve these corrected
five equations without iterating, which is the moti-
vation for some of our substitutions and approxima-
tions above, or by creating a five by five matrix and
diagonalizing. At least some students attempted to
do it this way.
It does not change Eq. 28, it does change the expres-
sion for the convenient constant in Eq. 29. It also
changes the fifth sheet heat flow, Eq. 27. Because the
variationsofwhatstudentscancookupwhiletrying
to reconcile difficult physics can be numerous, all of
the possible results are not presented here, as they
depend on what assumptions the students opted to
make.
It does not affect the approach to C.2 or the scoring
of numerical bounds on C.3
Additional Marking Guidance:
• A generic energy flow expression like Eq. 23
that is consistent with what the student has pre-
sented will get 0.2 pts. The energy flow expres-
sion can have one reasonable simplifying assump-
tion/approximation, so long as it does not make it
trivial, for no penalty.
• A recursion relation like Eq. 24 that is consistent
with what the student has presented will get 0.2
pts. The recursion relation can have one reason-
able simplifying assumption/approximation, so
long as it does not make it trivial, for no penalty.
This likely means that the student introduced a
few constants to keep it clean. That’s okay. Er-
rors in the recursion relation that are unsup-
ported by statements of approximation or reason-
able physics, or are just plain bad math, would
have a penalty of -0.1 pts.
• Equations 13 and 15 must be consistent with the
student’s statement of Eq. 23, or they would get a
penaltyof-0.1pts. Inshort, pickspecificapproach.
• Eq. 29 must be consistent with the student’s ap-
proach; similarly, the final expressions for T1 and
T5
• Attempting to write this problem as a matrix but
not being able to solve it is equivalent to writing a
recursion relation for 0.2 pts and simplifying the
sum for 0.2 pts; in theory they have already gotten
much or most of the points above that. Not solving
the matrix, however, will have a maximum score
of 2.2 pts, assuming everything else is there.
• As a reminder, don’t mix and match grading
schemes; follow an approach that is self consis-
tent, and if more than one scoring approach is
valid, select the one that gives the higher score.
Original Solution
Don’t use this, eh?
Start with a statement of net energy flow q01 into the first sheet
from the sun:
q01 = ϵA
(
I0 − σT4
1
)
(32)
where A is the area of the sheet, ϵ is the emissivity, σ is the Stefan-
Boltzman constant, and T1 is the temperature of the first sheet.
Now consider the space between two sheets i and j. Each sheet
radiates an energy flow
ϵAσT4
toward the other sheet, but a fraction β is ejected into space out
the gap.
We have defined α as the fraction emitted from one sheet that is
absorbed by the other sheet, so the net energy flow from sheet i
into sheet j is
qij = αϵAσ
(
Ti
4
− Tj
4
)
(33)
There is also a lost fraction emitted into space from between the
sheets, given by
q′
ij = βϵAσ
(
Ti
4
− Tj
4
)
=
β
α
qij (34)IPhO 2022 Theoretical problems: solutions. Language: English
Don’t make the mistake of assuming that α+β = 1, as some of the
energy emitted from a sheet could be reabsorbed by that sheet.
Finally, write an expression for the net thermal radiant energy
flow into space, with an ambient temperature of Tspace = 0, from
the far side of the fifth sheet.
q5s = ϵA
(
σT4
5 − σT4
s
)
= AϵσT4
5 (35)
Write each of the Eq. 33, above in the form
1
α
qij = Aϵσ(T4
i − T4
j ), (36)
and then sum up the terms from Eq. 32, the four from Eqs. 36, and
Eq. 35:
q01 +
1
α
(q12 + q23 + q34 + q45) + q5s = ϵAI0 (37)
as all of the Ti terms cancel out on the right!
Now consider a schematic of the energy flow below
From energy conservation, the net flow into sheet one from the
sun and the net flow out of sheet one toward sheet two or ejected
from gap is
q01 = q12 + q′
12, (38)
where q′
12 is the part emitted into space from the gap.
Combine with Eq. 34 and
q01 =
(
1 +
β
α
)
q12 =
α + β
α
q12 (39)
Similarly, for the remaining pairs of sheets,
q23 =
α
α + β
q12 =
(
α
α + β
)2
q01,
and
q34 =
α
α + β
q23 =
(
α
α + β
)3
q01,
and
q45 =
α
α + β
q34 =
(
α
α + β
)4
q01,
Finally, for the fifth (last) sheet all of the net energy flow in from
thefourthsheetmustbecompletelyejectedintospaceonthedark
side.
q5s = q45 =
(
α
α + β
)4
q01. (40)
The sum on the left side of Eq. 37 can then be written as
kq01 = ϵAI0 (41)
where
k=1 +
1
α + β
+
α
(α + β)2
+
α2
(α + β)3
+
α3
(α + β)4
+
α4
(α + β)4
is a convenient constant.
Combining Eq. 32 with Eq. 41,
ϵAI0
k
= ϵA
(
I0 − σT4
1
)
so
T1 = 4
√
I0
σ
(
1 −
1
k
)
=
4
√
I0
kσ
(k − 1) (42)
From above,
q5s =
(
α
α + β
)4
q01.
so
AϵσT4
5 =
(
α
α + β
)4
ϵAI0
k
or
T5 =
α
α + β
4
√
I0
kσ
(43)
which can also be written elegantly as
T5 =
α
α + β
4
√
1
k − 1
T1.
As this part of the question is complex, with multiple ways to go
wrong, and many opportunities for approximations, the marking
scheme will be necessarily convoluted.
Some expected mistakes:
(a) Failing to account for the back flux of energy. This would
be
I0 = 2σT4
1
and then
ασT4
1 = 2σT4
2 ,
and so on, concluding with
I0 = σ
(
2
α
)4
T5
or
T5 =
α
2
T1
(b) Inconsistent treatment of emissivity
The most likely error is of the form
ϵI0 = σT4
1
(c) Incorrectly resolving β and α.
2. Find α and β
Assuming students grab the hint about effective ab-
sorptive areas, then expect
Area of gap:
Agap = 4h
p
Asheet (44)
Area of one sheet A
Assume that the probability of being absorbed by a
sheet is the ratio of effective areas
α =
ϵAsheet
2ϵAsheet + Agap
(45)
This result yields α = 0.3.
Assume the probability of ejection is a ratio of effec-
tive areas
β =
Agap
2ϵAsheet + Agap
(46)
This result yields β = 0.4.
Marking Scheme:
Gap area Eq 44 0.2 pts
Estimating α Eq 45 0.2 pts
Estimating β Eq 46 0.2 pts
Factor of 2 for A in both 0.2 pts
Weighting A by emissivity in both 0.2 pts
Finding α 0.1 pts
0.25 ≤ α ≤ 0.35 0.1 pts
Finding β 0.1 pts
0.3 ≤ β ≤ 0.83 0.1 pts
subtotal 1.4 pt
Find a better β 0.2 pts
sum 1.6 ptIPhO 2022 Theoretical problems: solutions. Language: English
• “in both” means that to get the points they must
haveusedthefactoroftwoandtheemissivityboth
times; if it is missing from one, they get 0.1 pts for
the equation it is present in.
• Find α and β means that it is consistent with own
work.
• Assuming 2α + β ≈ 1 with proof would mean they
only need to find either α or β, and they would get
all of the points upon finding the other one. The
highest possible subtotal score in the case would
be 1.4 pts. Proof can be simple, however, like say-
ing “two sheets, equal probability of being trans-
mitted or absorbed into the other.”
• Assuming 2α + β ≈ 1 without proof would mean
they only need to find either α or β, and they
would get 2/3 of the points upon finding the other
one. Thehighestpossiblesubtotalscoreinthecase
would be 1.2 pts.
• Assuming α + β ≈ 1 stating a “reasonable” proof
would mean they only need to find either α or β,
and they would get 2/3 of the points upon finding
the other one. The highest possible subtotal score
in the case would be 1.2 pts. Stating “energy con-
servation” is reasonable, though incomplete.
• Assuming α + β ≈ 1 without any proof would
mean they only need to find either α or β, and they
would get 1/2 of the points upon finding the other
one. Thehighestpossiblesubtotalscoreinthecase
would be 1.1 pts.
• Finding α and β means that it is consistent with
own work.
• Read the special note about finding a better β be-
low to understand the last 0.2 pts.
Special note
Our assumption is that the rejected heat can be writ-
ten as
qij = βϵσA T4
i − T4
j

This is certainly true, but β would be infinite in the
case of Ti = Tj. It would have been better to write
qij = β′
ϵσA T4
i + T4
j

which would follow the energy conservation rule
2α + β′
= 1 if ϵ ≪ 1.
In fact, β′
is really what the student is finding in the
approach above.
Assuming that the temperatures of adjacent sheets
are related by
Tj = γTi
then
β = β′ 1 + γ4
1 − γ4
In our case,
γ4
≈
(100K)
(400K)
which means
β =
5
3
β′
=
5
3
−
10
3
α
is the best estimate; in our case, we expect β = 0.67.
Anywhocorrectlydoesthisgetsthose0.2pts. Ifthey
make a single mistake, but still end up with
1 − α > β > 1 − 2α
they can still get 0.2 pts. If they make two or three
mistakes, but still end up with
1 − α > β > 1 − 2α
they can still get 0.1 pts. They only get these points
for an effort to deal with our odd definition, and rec-
ognizing that the back flux is positive for ejection
from the gap. Just writing a different β without jus-
tification doesn’t get these “special” points.
In the event that a student derives
β =
5
3
β′
=
5
3
−
10
3
α
Then their minimum score for C.3 should be 0.8
pts, then subtract off 0.1 pt for every error in their
derivation if their answer is close. After that, look
back at their work on estimating α or β alone, and
add on half points for any success, up to 1.4 pts (or
1.6 pts, if no mistakes). The score they get for C.3
would be the larger of the two scoring approaches.
Original Solution
These might still apply in some cases; the first path
was rewritten above, so not included, and the sec-
ond path assumed reflective sheets at angles, so was
deleted. Choice C is a variation that can yield a cor-
rect value for β, but it would need to be combined
with some other approach to find α.
Choice C: Estimate the radiant flux from the gap
Assuming that the enclosed volume is a black body in equilib-
rium, which it isn’t, at a temperature equal to a quartic averaging
of the two temperatures: 1
2
(T4
i +T4
j ). Then the energy is radiated
out of the area according to
qlost = σAg
1
2
(T4
i + T4
j )
where Ag is the area of the gap, given by
Ag = 4h
√
A
But energy was entering the region at the rate
qin = ϵσA(T4
i + T4
j ),
so the fraction lost is
β =
Ag
2A
=
2h
ϵ
√
A
= 0.7
Marking Scheme:
Estimating flux out of gap 0.2 pts
Exact flux into volume 0.2 pts
Correct estimate of gap area 0.2 pts
Finding β 0.1 pts
0.65 ≤ β ≤ 0.75 0.1 pts
sum 0.8 pt
The bounds on allowed values for β are smaller in this approach,
because there really is only one reasonable answer.
Look back at the full solution to see how to score estimates for α
based on this β.
Note that this approach has fewer possible points, as the expres-
sion for the flux out of gap makes an assumption that is based on
unchecked physics.
Choice D: Another Approach?IPhO 2022 Theoretical problems: solutions. Language: English
Surely there will be some creative students who show other ap-
proaches. We will try and expand the marking scheme to recog-
nise these approaches as soon as they occur. A rough guide for
an incomplete approach is
Tentative Marking Scheme:
Relevant correct physics equation, each 0.2 pts
Reasonable approximation, each 0.1 pts
The maximum possible is still 1.6 pts.
An equation is only relevant if it can be argued that it would lead
to an answer to the question within the bounds of the approach
that they are following. For example, don’t award points for both
counting bounces and effective surfaces, unless each equation
contributes to a unified approach that would lead to the answer.
Findthemostrewardingapproach, andawardpointsforthatline
of reasoning.
If a student only finds one of α or β, then they get 0.2 pts for the
first. The marking scheme assumed they would look for α first,
but they might have looked for β, and only found that.
Be very careful with mixing and matching approaches!
A student will not get half the points for one approach plus half
the points for another approach if they attempt, but don’t suc-
ceed, with both approaches. They will be awarded the higher of
the two scores, not the sum.
3. Numerically determine the temperature of sheet 1
and the temperature of sheet 5.
The solar intensity is I0 = 1360W/m2
, the back-
ground temperature of space is Tb = 20K and is neg-
ligible.
Assuming a student does C.1 correctly, and uses 2α+
β = 1, then
β α T1 (K) T5 (K)
0.3 0.35 383 120
0.4 0.3 380 102
0.5 0.25 376 83
0.6 0.2 373 65
0.7 0.15 369 48
The other bound is α + β = 1, in that case:
β α T1 (K) T5 (K)
0.3 0.7 370 189
0.4 0.6 368 165
0.5 0.5 365 140
0.6 0.4 363 114
0.7 0.3 361 87
The numbers agree well with the theoretical perfor-
mance of 320 K and 90 K. Some of the major differ-
ences are explained by different coatings on differ-
ent surfaces, a temperature and wavelength depen-
dence on emissivity that is designed to reflect visible
light from the sun while radiating infrared on the
sunside of sheet 1, and the sheets are not uniform
temperature.
Marking Scheme:
T1 consistent with own formula 0.1 pts
250K ≤ T1 ≤ 400K 0.1 pts
T5 consistent with own formula 0.1 pts
45K ≤ T5 ≤ 200K 0.1 pts
sum 0.4 pt
The grade depends on self consistency with the pre-
vious work, so the numbers must be checked!
Notethathereisacasewherefollowonerrorscould
be penalized twice; students should recognize that
an answer is not reasonable, as T1 should be on the
order of the temperature of the Earth, and that T5
ought to have shown significant, but not incredible,
cooling.IPhO 2022 Theoretical problems: solutions. Language: English
Part D: The Cryo-Cooler
1. What state variables change?
(a) In order to force the gas through the plug,
which offers up considerable viscous friction,
P1 > P2; it is this pressure difference that is the
source of the force.
(b) Viscous friction is dissipative, and the energy
of moving through the plug is not allowed to
go anywhere else, so the internal energy of the
gasmustincreaseasitmovesthroughtheplug,
and then U1 < U2.
(c) Though no heat is gained or lost, this is not a
constant entropy process; that can be seen be-
cause it is an irreversible process. As such, S1 <
S2
(d) Since the process of moving across a pressure
gradient imparts kinetic energy to an object, it
is expected that the fluid velocity on the right
will be higher than the left; in fact, we are told
thisismarginallytrue. Sincemassisconserved,
the volume of a mole of gas on the right must
also be higher than the volume of a mole on the
left, and V1 < V2.
(e) The correct answer is T1?T2. If this were an
ideal gas, one might expect T1 ≤ T2 since U ∝ T.
But this is not an ideal gas, and U will be a func-
tion of temperature and density. As such, it
is not possible to know the comparative rela-
tion between T1 and T2. That’s the whole point
of this problem, and the challenge of trying to
make liquid helium.
Marking scheme:
For each correct response +0.2 pts
sum 1.0 pt
Explanations by the students are not needed.
2. A mole of gas at P1,V1,T1,U1 enters the porous plug
from the left, and that mole of gas exits the porous
plug on the other side at P2,V2,T2,U2.
Consider first a control volume approach
The figure below shows the motion of a mole of gas
through the plug; the mole is shown in pink. Gas to
theleftofthemolepushesthemolethroughtheplug
with a constant force P1A through a volume V1.
Gas Parcel
Porous Plug
The mole of gas moves through the plug to the right
hand side, in the process pushing on the air to the
right of the mole with a constant force P2A, through
a volume V2.
Porous Plug
Gas Parcel
The work that the surrounding gas in region 1 does
on the gas pushing it into the plug is
W1 = P1V1
because the pressure is constant, and the effective
change of volume is V1. Similarly, when the gas en-
ters region 2 it must displace a volume V2 of gas that
was already there, so
W2 = −P2V2
The net work is then
Wnet = P1V1 − P2V2 (47)
Since there is no heat exchanged,
U2 − U1 = ∆U = Q + Wnet = P1V1 − P2V2 (48)
which implies
∆U = U2 − U1 = P1V1 − P2V2.
Upon rearranging
U2 + P2V2 = U1 + P1V1
and therefore
U + PV
is a conserved quantity.
Marking scheme:
Compute correct W1 0.1 pts
Compute correct W2 0.1 pts
Write energy law, Eq 48 0.2 pts
Show U + PV conserved 0.2 pts
sum 0.6 pt
Consider instead a differential approach
Another way to look at this problem is to focus on
a differential sample of gas as it moves through the
plug.
The figure below illustrates this
The total energy of parcel of molar size δm has two
relevant energy terms: the internal energy δU and
the bulk kinetic energy δK. It has a volume δV .
These four quantities are extrinsic, but to simplify
notation, we will drop the δ. It’s still there, just in-
visible.
For simplicity’s sake, assume a cylindrical shape to
the parcel, with an end cap area δA and a length
dx. Once again, we will drop the δ. There are three
forces that act on the shape, one associated with
pressure on the left end, one associated with pres-
sure on the right end, and frictional force associated
with viscosity against the walls of the container.IPhO 2022 Theoretical problems: solutions. Language: English
Since this is a parcel of differential length dx, the
net force associated with the pressure difference be-
tween the ends is
Fends = −V
dP
dx
where V is again the volume of the cylinder.
But this force is (mostly) balanced by the viscous
frictional force Fwalls with the walls of the sponge;
these two forces effectively add to zero. In fact, it is
the viscous forces with the wall that cause the pres-
sure gradient across the sponge.
The bulk kinetic energy of the parcel does not
change significantly as it moves through the sponge.
This is seen in that the bulk speed of the gas doesn’t
change significantly as it moves through the sponge.
The problem with this approach is that the system
is not in thermodynamic equilibrium; the process is
not reversible, so it is not possible to attach well de-
fined state variables. This means that
dU = TdS − PdV (49)
is not a function that can be integrated; in fact, dS ̸=
0 from the previous part of the problem. Arguing
that V dP = −TdS is rather handwavy, and resolving
this actually requires considering a control volume
approach.
Still, the energy conservation ideas still hold true,
even if thermodynamically poorly defined, so
dU = −PdV − V dP
since the part associated with −V dP doesn’t change
the bulk kinetic energy, and instead dissipates into
internal energy of the gas.
The result is that
dU = −d(PV )
or
U + PV
is a constant
Marking scheme:
Traditional δW = −PdV 0.1 pts
Bulk kinetic δK = −V dP 0.1 pts
Explain where δK goes 0.1 pts
Differential Eq 49 0.1 pts
integrate U + PV constant 0.1 pts
sum 0.5/0.6 pt
Because of the many subtle traps, this approach will
not get the same number of points as the control vol-
ume approach.
Writing dU = −PdV and integrating to find U + PV
is constant gets only 0.2 pts. This is because there
are several errors: the differential is poorly defined
within the sponge; because the state variables are
poorly defined; P is not a constant; so you can’t ac-
tually integrate it; and the work done in this case is
not correctly computed. Four wrongs don’t make a
right.
3. One can find pressure on this graph by applying
dU = TdS − PdV
and then requiring constant entropy so that dS = 0,
and then
P = −

∂U
∂V

S
(50)
which are the negative slopes of the constant en-
tropy curves on a U − V graph.
Another approach to find pressure is to consider a
line of constant U, then
P
T
=

∂S
∂V

U
Then
U + PV = U −

∂U
∂V

S
V
is the conserved quantity.
Now−(∂U/∂V )S ismeasuredonlyatthepointV1,U1,
and is the slope of the tangent line to the constant
entropy curve. Following that tangent line back a
distance V takes it to an intercept with the U axis,
and that intercept is then the conserved quantity.
More mathematically, define a function H
H = U + PV
then
U = H2 − P2V
is the equation of a line,
U = H2 +

∂U
∂V

S 2
V (51)
with the U intercept equal to the conserved H2.
An estimate can be made visually, but it is difficult to
be accurate. Try constructing a line from the point
V2 = 0.120, T2 = 7.5 that is tangent to the local isen-
trope, and the result will intercept the U axis. This
result is somewhere around 40. This is shown in
green below.
Now to improve the result.
Draw a line out from 39 that is tangent to the near-
est isentrope to V2 = 0.100, T2 = 7.5; draw anotherIPhO 2022 Theoretical problems: solutions. Language: English
line out from 41 that is also tangent to the nearest
isentrope to V2 = 0.100, T2 = 7.5. These are shown in
purple below.
Measuring the distance with a ruler, find the frac-
tional distance between the two purple lines to the
pointV2 = 0.100, T2 = 7.5alongthehighlightedgreen
line. It is about 75% the way from the bottom purple
line. This means that the conserved quantity ought
be 75% the way up on the highlighted blue section
on the graph. A line connecting the two is shown in
green.
This point is about 41kJ/kg. The actual value for the
conserved quantity is U + PV = 40.7kJ/kg.
Marking scheme:
Pressure formula stated, Eq 50 0.2 pts
Tangent intercept concept 0.4 pts
A first estimate for H 0.2 pts
Upper bound for estimate set 0.2 pts
Lower bound for estimate set 0.2 pts
Interpolated estimate set 0.2 pts
40.5 < H < 41.0 0.2/0.2 pts
40.2 < H < 41.2 0.1/0.2 pts
sum 1.4 pt
As the task asks for a graphical construction, and it
is not possible to construct an accurate tangent to
the isentrope at T2 = 7.5K based on a single line, stu-
dents must do something to improve or verify the
result, even if it is correct on the first guess. Hence
the upper and lower bound approach and interpo-
lation, or something equivalent.
4. Draw a series of radial lines out from the conserved
point that are tangent to lines of constant entropy.
Mark the tangent point. Connect with a smooth
curve; this curve is the set of points U1 as a function
of V1 that has the conserved quantity. Look for the
maximum temperature intercept.
This happens at about T1 = 11K. If T1 is higher than
this, it would not be possible to cool down to T2 =
7.5K.
Students don’t need to draw every line, as with a
straight edge one can find the tangent that maxi-
mizes the temperature T1 by shifting it around vi-
sually.
Line starts from student’s H 0.2 pts
Line intercepts an isentrope 0.2 pts
The isentrope matches max T1 0.2 pts
Stated T1 within 0.5K of student’s construction 0.1 pts
10K ≤ T1 ≤ 12K 0.1 pts
sum 0.8 pt
5. Using the slope of the line from the conserved quan-
tity to the maximum temperature point, compute
the pressure.
Using the results from above,
P1 = −
(41) − (10)
(0) − (0.0170)
= 1.8MPa
If they didn’t know to use slope by this point, they
can’t generate an answer. As such, they would al-
ready have received points for the pressure for-
mula, and we only consider the numerical result
P agrees with the slope of the graph 0.1 pts
1.6MPa ≤ P1 ≤ 2.4MPa 0.1 pts
sum 0.2 ptIPhO 2022 Theoretical problems: solutions. Language: English
T3: Scaling laws (8 pts)
Note: A correct numerical answer provided with at least
two significant figures receives full marks. Inappropri-
ateuseofequalitywillleadtoapenaltyof0.1ptsforeach
part of the question.
Task A: Spaghetti (2 pts)
This is section 2.2.2 (Statics) of the syllabus.
Consider only the left half of the spaghetti straw.
Torque balance at its right endpoint implies that the
torque applied to its right endpoint must balance out the
torque due to gravity: τ ∝ ml ∝ d2
l2
. This torque arises
from the gradient in the horizontal stress. If the typical
horizontal stress is σ, then the typical force is F ∝ σd2
,
so the torque is τ ∝ Fd ∝ σd3
. Hence, we obtain
σd3
∝ d2
l2
=⇒ l ∝
√
d,
so
l′
=
r
d′
d
l =
√
10 · 50cm = 158cm.
Marking scheme:
τ ∝ d2
l2
0.4 pts
F ∝ σd2
0.5 pts
τ ∝ σd3
0.5 pts
l ∝
√
d 0.4 pts
Answer: 158cm 0.2 pts
Task B: Sand castle (2 pts)
This is Section 2.2.2 (statics) and 2.2.5 (hydrodynamics) of
the syllabus
Due to wetting of the surfaces of the sand grains and
its large surface tension water acts like a glue for sand.
This means that all the grains need to be bound together
by air-water interface. To achieve this there needs to be
neither too little nor too much water: if there is too little
water, most of the grains are dry with no surface ten-
sion binding them, and if there is too much water, al-
most all the grains are immersed into water, and again,
there is no surface tension binding the grains. So, the
overall strength of the buildings from wet sand depends
on the water content; we assume that for the both types
of sand, the water content is optimal, and the shape of
the grains is statistically similar. Let us consider two
neighbouring grains connected by a water meniscus —
or “neck”, as we shall be referring to it henceforth. Note
that the “neck” may extend perpendicularly to the fig-
ure plane far away; so, more specifically, what the word
“neck” will refer to is that part of the water-air interface
for which the closest two grains are the ones under con-
sideration.
There are two processes binding the sand grains to-
gether. The first one is the force due to the surface ten-
sion, F1 = γl, where γ denotes the surface tension coef-
ficient, and l — the perimeter of the “neck”; with l ∼ rg,
whererg denotesthelengthscaleofasinglegrain,weob-
tainFs ∼ γr. Thesecondoneisthepressureforcecaused
by the negative capillary pressure in the neck, Fp = ∆pA,
where A is the cross-sectional area of the “neck”, and
∆p ∼ γ/r. With A ∼ r2
we obtain F2 ∼ γr. Thus, the both
components are of the same order of magnitude and us-
ing either of them will lead to the correct scaling law.
These forces press the grains against each other, hence
the normal force and friction force between the grains is
also on the order of Fs and Fp.
Solution 1:
Based on what has been said above, the typical force
needed to delocate a grain of sand is Fg ∝ rg. The force
needed to delocate an entire horizontal layer of sand is
then ∝ FgNl, where Nl ∼ A/r2
g is the number of grains in
a layer. The force of cylinder destruction F thus satisfies
F ∝ FgNl ∝ rg/r2
g = r−1
g ∝ V −1/3
g ,
so
Ffg = (1/10)−1/3
· Fcg = 21.5N.
Marking scheme:
a) Fs ∝ rg and Fp ∝ rg 0.5 pts
one of the two missing -0.1 pts
b) Fg ∝ rg 0.5 pts
c) F ∝ FgNl 0.5 pts
d) F ∝ r−1
g 0.3 pts
Answer: 21.5N 0.2 pts
Notes: If the student only qualitatively explains the
mechanism by which the grains of sand are held to-
gether, a maximum of 0.5 pts are given. Points b)-c) are
given only if derived from a).
Solution 2:
We have seen above that grains to one side of a ficti-
tious surface exert force per cross-sectional area on the
order of magnitude as the capillary pressure ∆p ∼ γ/rg.
In order to get the grains moving, a pressure of the same
order of magnitude needs to be applied externally. For
both cylinders, the surface area where the force is ap-
plied is the same, hence the force scales as the capillary
pressure, F ∝ 1/rg ∝ V −1/3
.
Marking scheme:
The applied pressure must be ∼ ∆p 0.6 pts
The curvature radius of the interface is ∼ rg 0.6 pts
Capillary pressure ∆p ∼ γ/rg 0.6 pts
Answer: 21.5N 0.2 pts
Note: If the contribution of surface tension is neglected,
0.1 pts are subtracted.
Solution 3:
The compression force serves to break the surface ten-
sion bonds between sand grains.
Consider the energy E required to push a single layer
of sand into the layer beneath it. E ∝ Frg, where F is theIPhO 2022 Theoretical problems: solutions. Language: English
force required and rg is the typical height of a layer (i.e.,
the typical length scale of a grain).
On the other hand, E = γ∆A, where γ is the surface
tension of water and ∆A is the total amount by which
the surface of the water in the layer stretches before all
the “water bonds” between the sand grains are broken.
Here, ∆A is proportional to the area A of a layer and is
thus a constant between the two cylinders. Hence, E ∝
Frg is a constant between the two cylinders, i.e., F ∝ r−1
g .
Marking scheme:
E ∝ Frg 0.5 pts
E ∝ γ∆A 0.5 pts
∆A ∝ A 0.5 pts
F ∝ r−1
g 0.3 pts
Answer: 21.5N 0.2 pts
Note: Ifthestudentonlyqualitativelyexplainsthemech-
anism by which the grains of sand are held together, a
maximum of 0.5 pts are given.
Solution 4:
First of all, the force F should be proportional to the
cylinder’s base area A. The force required to destroy a
cylinder with base area A = nA0 is equal to the force
required to destroy n cylinders each with base area A0.
As a result, F ∝ n ∝ A.
In addition, F depends on the grain’s length scale rg
and the water’s surface tension γ. Dimensional analysis
thus gives
F ∝
Aγ
rg
∝ r−1
g
for fixed A and γ.
Marking scheme:
F ∝ A 0.6 pts
F = F(A,rg,γ) 0.6 pts
F ∝ Aγ
rg
0.6 pts
Answer: 21.5N 0.2 pts
Note: Ifthestudentonlyqualitativelyexplainsthemech-
anism by which the grains of sand are held together, a
maximum of 0.5 pts are given.
Task C: Interstellar travel (2 pts)
This is Section 2.5 (Relativity) of the syllabus
Let T = 50yrs be the astronauts’ total travel time.
For maximal travel distance, the spaceship accelerates
at constant proper acceleration a = g for proper time
T/4, during which a distance of d is traveled. The space-
ship then decelerates at a = −g for proper time T/4 to
come to a rest, during which another distance d is trav-
eled. ThespaceshipthenreturnstoEarth usingthesame
procedure.
Notes: Formula relating acceleration to proper ac-
celeration is not considered as a basic SR formula and
therefore if the formula is written without motivation,
0.2 pts are subtracted.
Solution 0: (incorrect)
If we ignore relativity, then d ∝ 1
2gt2
∝ g, which gives
an answer of 1.5.
Marking scheme:
d ∝ gt2
0.2 pts
Answer: 1.5 0.1 pts
Solution 1:
One way to approach the problem is to notice that con-
stantaccelerationin spaceship’sframemeans aconstant
force in the Earth’s frame. This follows directly from the
Lorentz transform for the electromagnetic field, more
specifically from the fact that when going to a frame
moving parallel to the x-axis, the x-directional electric
field Ex remains unchanged. Hence, on the one hand,
the force Fx = eEx exerted on an accelerating particle of
rest mass m0 and carrying a charge e remains constant
in the lab frame. On the other hand, the acceleration of
that particle in an inertial frame moving with velocity v,
where v denotes the particle’s velocity at a certain mo-
ment of time t, is always equal to eEx/m0, regardless of
the value of t, i.e. constant in time.
Those who are not familiar with the Lorenz transform
for electromagnetic field can derive the above described
property from the Lorenz transform for momentum and
coordinates. Weuseagain(i)thelabframe,and(ii)anin-
ertial frame moving with velocity v, where v denotes the
spaceship’s velocity at a certain moment of time which
will be used as the origin, t = t′
= 0; let primes denote
quantities in the second frame. Assuming a very short
time period t, we can neglect terms quadratic in time so
that in the frame (ii), the momentum, coordinate and the
relativistic mass can be expressed as p′
= F′
t′
, x′
= 0,
m′
= m0, respectively; applying the Lorenz transform
yields t = γt′
and p = γ(F′
t′
+ m0v) = tF′
+ γm0v. On the
other hand, in the frame (i), p = γm0v + Ft; comparing
this with the previous result yields F = F′
.
Itappearsthatineithercase,thespaceship’sspeedwill
reach almost c much faster than the travel time. Hence,
using for convenience the system of units where c = 1,
the travel distance x equals with a very good precision
the travel time t, x = t.
What is left to do is to relate t to the proper time τ,
dτ =
dt
γ
= dt
m0
p
m2
0 + m2
0g2t2
;
upon integration we obtain
τ = asinh(gt)/g ⇒ x ≈ t = sinh(gτ)/g ≈ exp(gτ)/2g.
So we conclude that the ratio of the travel distances is
d2
d1
=
g
1.5g
exp(1.5gτ − gτ) =
2
3
exp(gT/8) ≈ 480.
Note that an exact relationship between x and t could
have been obtained by expressing the energy of the
spaceship as m = m0 + m0gx, and the momentum as
p = m0gt. Then the Lorenz invariant (m0 + m0gx)2
−
(m0gt)2
= m2
0 yields x(x+2/g) = t2
= sinh
2
(gτ)/g2
, hence
x = [cosh(gτ) − 1]/g.IPhO 2022 Theoretical problems: solutions. Language: English
Fx is Lorentz invariant 0.4 pts
x ≈ t 0.4 pts
dτ = dt
γ 0.2 pts
γ−1
= m0/m 0.2 pts
m =
p
m2
0 + p2 0.2 pts
p = m0gt 0.2 pts
t = sinh(gτ)/g 0.2 pts
Answer: 480 0.2 pts
Remark: ifintegrationboundariesfordistanceorproper
time are wrong by a factor of 0.5, 2, 4, etc., -0.1 pts.
Solution 2:
Let w be the rapidity of the spaceship, defined as w ≡
tanh
−1
(β), where β is the spaceship’s velocity. Then β =
tanhw, theLorentzfactorγ = coshw, anditsmomentum
p = m0 sinhw.
As shown by Solution 1, a spaceship experiencing a
constant proper acceleration g experiences a constant
three-force
F = m0g =
dp
dt
= m0 coshw
dw
dt
=⇒
dw
dt
=
g
coshw
.
Meanwhile, time dilation relates t to the spaceship’s
proper time τ as
dt
dτ
= γ = coshw =⇒
dw
dτ
=
dw
dt
dt
dτ
= g.
Integrating yields w = gτ. Recalling that dt = γdτ, we get
the following as the total distance traveled over a quar-
ter of the spaceship’s trip:
d =
Z T/4
0
βγ dτ =
Z T/4
0
tanhwcoshwdτ
=
Z T/4
0
sinhgτ dτ =
1
g
(cosh(gT/4) − 1).
The answer is thus
g1
g2
cosh(g2T/4c) − 1
cosh(g1T/4c) − 1
=
10
15
cosh(19.72) − 1
cosh(13.15) − 1
≈
2
3
e19.72−13.15
= 480.
Marking scheme:
d
dt(m0 sinhw) = m0g 0.5 pts
dw
dt = g
coshw 0.1 pts
dt
dτ = coshw 0.4 pts
dw
dτ = g 0.1 pts
w = gτ 0.1 pts
d
2 =
RT/4
0
βγ dτ 0.3 pts
d
2 =
RT/4
0
tanhwcoshwdτ 0.2 pts
d
2 = 1
g (cosh(gT/4) − 1) 0.1 pts
Answer: 480 0.2 pts
Remark: ifintegrationboundariesfordistanceorproper
time are wrong by a factor of 0.5, 2, 4, etc., -0.1 pts.
Solution3: Theproblemcanbealsosolvedbyusingthe
trick introduced in 1905 by Henri Poincaré [Poincaré,
M.H.Surladynamiquedel’ électron. Rend. Circ. Matem.
Palermo 21, 129–175 (1906)] of depicting things in x−it-
diagram. The benefit of using this diagram is that the
relativistic invariant x2
− t2
transforms into Euclidean
squared distance x2
+ θ2
with θ = it. This means that
in that diagram, we can use the knowledge of Euclidean
geometry. In particular, the Lorentz transform is now
the rotation of the Euclidean x − it-space by an angle
α = arctan v
ic. Now, consider the trajectory of the space
ship; its infinitesimal arc length is icdτ, where dτ is the
differential of the proper time, and the infintesimal rota-
tion angle of its tangent is dα = arctan(dv/ic) = dv/ic =
gdτ/ic. Therefore, the curvature radius R = icdτ/dα =
−c2
/g is constant, i.e. the trajectory is a circle of radius
R. Now we can easily relate the travel distance x to the
arc length icτ:
x = R(1 − cosα) = R

1 − cos
icτ
R

=
c2
g

cosh
gτ
c
− 1

.
Marking scheme:
R = const in x-ict-diag. 0.5 pts
R = −g2
/c 0.5 pts
missing ‘−’ -0.2 pts
partial credit for R = icτ
dα 0.2 pts
x = R(1 − cosα) 0.5 pts
c2
g cosh gτ
c − 1

0.3 pts
Answer: 480 0.2 pts
Solution 4: The problem can be solved by using the ve-
locity addition formula. Let v = βc be the speed of the
spaceship in the lab frame, t be the lab time, and τ —
the proper time. Also, we consider a frame which moves
with constant speed v in which the spaceship accelerates
from rest:
β + dβ =
β + gdτ
c
1 + βgdτ
c
= β +
gdτ
c
(1 − β2
).
Thus,
dβ
1 − β2
=
gdτ
c
⇒ β = tanh(
gτ
c
).
From relativistic time dilation formula we obtain
dt =
dτ
p
1 − β2
= cosh(
gτ
c
)dτ
so that the travel distance
d
2
=
Z
vdt = c
Z T/4
0
sinh(
gτ
c
)dτ =
c2
g

cosh

gT
4c

− 1

which leads to the same answer as before.
a) β + dβ =
β+gdτ
c
1+βgdτ
c
0.3 pts
b) dβ
1−β2 = gdτ
c 0.2 pts
c) β = tanh(gτ
c ) 0.2 pts
d) dt = dτ √
1−β2
0.3 pts
e) dt = cosh(gτ
c )dτ 0.2 pts
f) d
2 =
R
vdt 0.2 pts
g) d
2 = c
RT/4
0
sinh(gτ
c )dτ 0.2 pts
h) d
2 = c2
g
h
cosh

gT
4c

− 1
i
0.2 pts
i) Answer: 480 0.2 ptsIPhO 2022 Theoretical problems: solutions. Language: English
Remark: if integration in f) is done over proper time,
no points are given for f). If integration boundaries for
distance or proper time are wrong by a factor of 0.5, 2, 4,
etc., -0.1 pts.
Task D: That sinking feeling (2 pts)
(This is Sections 2.2.5 (Hydrodynamics) and 2.4.1 (Single
oscillator) of the syllabus
Solution 1: The oscillation of the half-sunk sphere is
driven by gravity. The non-damped angular frequency
depends on the gravitational acceleration and a charac-
teristic length, which is, for a sphere, its radius r, so
ω0 ∝
p
g/r
is the only dimensionally correct possible function.
The drag force Fd depends on the sphere’s speed v
[m/s], its size r [m], and viscosity of the liquid η [Pa·s].
Dimensional analysis thus gives Fd ∝ ηrv. The damping
factor is thus
β =
Fd
2mv
∝
ηr
m
.
Since the mass scales with r3
, we have
β ∝
1
r2
.
Then the relation
β2
ω2
0
= 1 −
ω2
ω2
0
scales as
β2
ω2
0
∝
1
r3
Oscillations only occur if β/ω0 < 1, so solve
r
r0
= 3
p
1 − (0.99)2 = 0.271
Notes:
1. To obtain ω0 ∝ 1/
√
r without dimensional analysis,
note that a small displacement y changes the sub-
merged volume of the ball by ∆V ∝ r2
y, so the
change in buoyant force F ∝ r2
y, which gives ω0 = p
k/m ∝
p
r2/r3 =
p
1/r.
2. To obtain Fd ∝ ηrv without dimensional analysis,
note that the typical length scale l in the variations
in the velocity field of the water is proportional to r.
Thus, the viscous shear σ ∝ ηv/l ∝ ηv/r. The total
drag force is thus Fd ∼ Aσ ∝ ηrv, where A is ball’s
area of contact with the water.
3. Alternatively, to obtain Fd ∝ ηrv, make use of the
Stokes drag relation Fd = 6πηKrv, where K is a di-
mensionless constant that takes into account that
the ball is not in infinite homogeneous fluid.
Marking scheme:
a) ω0 ∝
p
g/r 0.4 pts
stated without justification -0.2 pts
effective mass ∝ r3
0.2 pts
just the mass of the ball considered -0.1 pts
effective returning force ∝ r2
0.1 pts
ω0 ∝
p
g/r 0.1 pts
b) Fd ∝ ηrv 0.6 pts
no justification -0.3 pts
Stokes without constant K -0.1 pts
c) β ∝ 1/r2
0.3 pts
d) β2
ω2
0
= 1 − ω2
ω2
0
0.4 pts
e) β2
ω2
0
∝ 1
r3 0.2 pts
f) Answer: 0.271 0.1 pts
Solution 2: The oscillation of the half-sunk sphere is
driven by the change in buoyancy force, which is pro-
portionaltothechangeindisplacedwatervolume. Thus,
the restoring force Fr ∝ r2
x, where x is the displacement
of the sphere.
As discussed in Solution 1, the drag force Fd ∝ rv = rẋ.
The effective mass of the oscillation m ∝ r3
. This leads
to the equation of motion
k1r2
ẍ + k2ẋ + k3rx = 0,
where k1, k2 and k3 are constant. In the case with no
viscous drag, k2 = 0, the motion is at frequency
ω0 =
r
k3
k1r
.
With viscous drag, we can get the frequency ω by sub-
stituting trial solution x = eαt
and using ω = Imα. This
leads to
ω =
s
ω2
0 −
k2
2
4k2
1r4
,
ω2
= ω2
0

1 −
k2
2
4k2
1r4ω2
0

= ω2
0

1 −
k2
2
4k1k3r3

.
At r = rmin, ω = 0, so
k2
2
4k1k3
= r3
min,
and
ω2
= ω2
0

1 −
r3
min
r3
0

,
giving rmin
r0
= 0.271.
Marking scheme:
a) effective mass ∝ r3
0.2 pts
just the mass of the ball considered -0.1 pts
b) effective returning force ∝ r2
0.1 pts
c) ω0 ∝
p
1/r 0.1 pts
d) Fd ∝ rv 0.6 pts
no justification -0.3 pts
Stokes without constant K -0.1 pts
e) k1r2
ẍ + k2ẋ + k3rx = 0 0.3 pts
f) ω in terms of r and ω0 0.6 pts
if not expressed in terms of ω0 -0.3 pts
g) Answer: 0.271 0.1 pts
