---
id: usapho-2012-b1
source: usapho
language: en
solution_language: en
translated: false
problem: usapho-2012-b1
solution_type: official
source_document: solution-document-usapho-2012-s
source_pdf: cache/phoxiv/usapho/2012_S.pdf
figure_files: []
provenance_note: "Source-provided solution section from cache/phoxiv/usapho/2012_S.pdf."
---

Question B1
A particle of mass m moves under a force similar to that of an ideal spring, except that the force
repels the particle from the origin:
F = +mα2
x
In simple harmonic motion, the position of the particle as a function of time can be written
x(t) = A cosωt + B sinωt
Likewise, in the present case we have
x(t) = A f1(t) + B f2(t)
for some appropriate functions f1 and f2.
a. f1(t) and f2(t) can be chosen to have the form ert. What are the two appropriate values of
r?
b. Suppose that the particle begins at position x(0) = x0 and with velocity v(0) = 0. What is
x(t)?
c. A second, identical particle begins at position x(0) = 0 with velocity v(0) = v0. The second
particle becomes closer and closer to the first particle as time goes on. What is v0?
Solution
a. Newton’s second law gives
d2x
dt2
− α2
x = 0.
As with the case of simple harmonic motion, we solve the differential equation using a trial
function, in this case x(t) = Aert. (This may look a bit ad hoc, but it’s actually quite general;
exponentials are essentially the general solution for any linear differential equation.) Then
d2
dt2
(Aert
) − α2
Aert
= r2
Aert
− α2
Aert
= 0
which implies that r = ±α.
b. Since the differential equation is linear in x, the general solution is a superposition of our two
solutions,
x(t) = Aeαt
+ Be−αt
which implies
v(t) = αAeαt
− αBe−αt
.
Inserting our initial values,
x(0) = A + B = x0, v(0) = αA − αB = 0.
Copyright c 2012 American Association of Physics Teachers
2012 Semifinal Exam Part B 13
These equations have solution
A = B =
x0
2
and therefore
x(t) =
x0
2
(eαt
+ e−αt
)
c. This time our initial values are
x(0) = A + B = 0, v(0) = αA − αB = v0
with solution
A =
v0
2α
, B = −
v0
2α
.
Therefore,
x(t) =
v0
2α
(eαt
− e−αt
).
After a long time, the exponentially decaying term will become negligible. Thus, the second
particle will approach the first particle if the coefficient of the exponentially growing term
matches, so
v0 = αx0.
Copyright c 2012 American Association of Physics Teachers
2012 Semifinal Exam Part B 14
Question B2
For this problem, assume the existence of a hypothetical particle known as a magnetic monopole.
Such a particle would have a “magnetic charge” qm, and in analogy to an electrically charged
particle would produce a radially directed magnetic field of magnitude
B =
µ0
4π
qm
r2
and be subject to a force (in the absence of electric fields)
F = qmB
A magnetic monopole of mass m and magnetic charge qm is constrained to move on a vertical,
nonmagnetic, insulating, frictionless U-shaped track. At the bottom of the track is a wire loop
whose radius b is much smaller than the width of the “U” of the track. The section of track near
the loop can thus be approximated as a long straight line. The wire that makes up the loop has
radius a 
 b and resistivity ρ. The monopole is released from rest a height H above the bottom of
the track.
Ignore the self-inductance of the loop, and assume that the monopole passes through the loop
many times before coming to a rest.
a. Suppose the monopole is a distance x from the center of the loop. What is the magnetic flux
ΦB through the loop?
b. Suppose in addition that the monopole is traveling at a velocity v. What is the emf E in the
loop?
c. Find the change in speed ∆v of the monopole on one trip through the loop.
d. How many times does the monopole pass through the loop before coming to a rest?
e. Alternate Approach: You may, instead, opt to find the above answers to within a dimen-
sionless multiplicative constant (like 2
3 or π2). If you only do this approach, you will be able
to earn up to 60% of the possible score for each part of this question.
You might want to make use of the integral
Z ∞
−∞
1
(1 + u2)3
du =
3π
8
or the integral Z π
0
sin4
θ dθ =
3π
8
Solution
Copyright c 2012 American Association of Physics Teachers
2012 Semifinal Exam Part B 15
a. The most direct way is to calculate the flux through a flat, circular surface bounded by the
loop. However, by Gauss’s law the flux will remain the same if we deform this surface, as
long as we keep its boundary the same and don’t hit the monopole. The easiest way is to
deform the surface so it is part of a sphere of radius r =
√
b2 + x2 centered at the monopole.
Work in spherical coordinates, where θ is the angle to the x-axis and φ is the azimuthal angle.
The loop itself is at θ0 = tan−1(b/x), so
ΦB =
µ0
4π
qm
r2
Z 2π
0
dφ
Z θ0
0
r2
sinθdθ =
µ0qm
2
(1 − cos(θ0)).
We can easily check this by limiting cases: for small x we have µ0qm/2, i.e. half of the total
flux, while for large x we have zero flux.
This form is acceptable, but we can also write it explicitly in terms of x. By drawing a right
triangle, we have
sinθ0 =
b
r
, cosθ0 =
x
r
which gives
ΦB =
µ0qm
2

1 −
x
√
b2 + x2

.
We will use the variable θ0 in the parts below, dropping the subscript.
b. Since E = −dΦB/dt, differentiating both sides of the above result gives
E =
µ0qmv
2
