---
id: usapho-2021-a3
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2021-a3
solution_type: official
source_document: solution-document-usapho-2021-s
source_pdf: cache/phoxiv/usapho/2021_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2021_S.pdf."
---

Question A3
Electroneering
An electron is a particle with charge −q, mass m, and magnetic moment µ. In this problem we will
explore whether a classical model consistent with these properties can also explain the rest energy
E0 = mc2 of the electron.
Let us describe the electron as a thin spherical shell with uniformly distributed charge and
radius R. Recall that the magnetic moment of a closed, planar loop of current is always equal to
the product of the current and the area of the loop. For the electron, a magnetic moment can be
created by making the sphere rotate around an axis passing through its center.
a. If no point on the sphere’s surface can travel faster than the speed of light (in the frame of the
sphere’s center of mass), what is the maximum magnetic moment that the sphere can have?
You may use the integral: Z π
0
sin3
θdθ =
4
3
.
Solution
A point on the sphere’s equator moves at a speed ωR, where ω is the angular velocity of
rotation. Setting ωR = c gives ω = c/R.
The spinning sphere can be thought of as a stack of infinitesimal current loops, all of which
have a magnetic moment pointing in the same direction. Consider making a thin, circular
slice of the sphere’s surface, corresponding to polar angles in the range (θ,θ + dθ). This
slice has a radius Rsinθ, so that the surface area of the slice is
ds = 2πRsinθRdθ.
The charge of the slice is
dQ = −
q ds
4πR2
= −
q sinθ
2
.
Since the charge dQ moves around the rotation axis one time per period T = 2π/ω, the
corresponding current is
dI =
dQ
T
= −
ωq sinθ
4π
.
The magnitude of the magnetic moment of this slice is
dµ = π(Rsinθ)2
|dI| =
1
4
qωR2
sin3
θdθ.
Using the provided integral, the total magnetic moment is
µ =
Z π
0
1
4
qωR2
sin3
θdθ =
1
3
qcR.
If you weren’t able to do this, you could also have given the answer µ ∼ qcR, which can be
derived by dimensional analysis, for partial credit.
Alternative solution: Note that for a uniformly charged ring of mass dm, charge dq,
and radius r, rotating with angular velocity ω, the ratio of the magnetic moment and the
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part A 9
angular momentum is
µ
L
=
πr2(ω dq/2π)
(r2 dm)ω
=
1
2
dq
dm
.
The ratio is independent of r and ω. Since the sphere can be decomposed into such rings,
the total magnetic moment and total angular momentum must have the same ratio,
µ
L
=
1
2
q
m
.
Finally, we know that L = (2/3)mR2ω for a spherical shell. Plugging this in and using
ω = c/R gives µ = qcR/3 as before, but with no integration required.
b. The electron’s magnetic moment is known to be µ = q~/2m, where ~ is the reduced Planck
constant. In this model, what is the minimum possible radius of the electron? Express your
answer in terms of m and fundamental constants.
Solution
Since the magnetic moment is fixed, and we want the radius to be small, we want the
electron to be spinning as fast as possible. Thus, the magnetic moment has the value found
in part (a), and equating this to the known value gives
R =
3
2
~
mc
.
Again, you can get R ∼ ~/mc by dimensional analysis.
c. Assuming the radius is the value you found in part (b), how much energy is stored in the electric
field of the electron? Express your answer in terms of E0 = mc2 and the fine structure constant,
α =
q2
4π 0~c
≈
1
137
.
Solution
For a collection of charges, the total energy stored in the electrostatic field is
UE =
1
2
X
i
qiVi
where Vi is the electric potential at qi. In this case, the total charge is q, and all of the
charge is at potential q/4π 0R, so
UE =
q2
8π 0R
.
Using the result of part (b),
UE =
1
3
αE0.
Note that you can’t get this answer by dimensional analysis alone, since α is dimensionless.
(However, if you found R by dimensional analysis, and additionally reasoned that UE could
Copyright ©2021 American Association of Physics Teachers
2021 USAPhO Part A 10
depend only on q,  0, and R, then you could derive UE ∼ αE0, for partial credit.)
d. Roughly estimate the total energy stored in the magnetic field of the electron, in terms of E0 and
α. (Hint: one way to do this is to suppose the magnetic field has roughly constant magnitude
inside the sphere and is negligible outside of it, then estimate the field inside the sphere.)
Solution
Following the hint, we can estimate
UB ∼
