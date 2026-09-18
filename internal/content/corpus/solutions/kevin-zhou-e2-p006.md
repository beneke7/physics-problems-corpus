---
id: kevin-zhou-e2-p006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e2-p006
solution_type: author
source_document: solution-document-kevin-zhou-e2sol
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E2Sol.pdf."
---

[3] Problem 6. A neutral spherical conductor of radius R is placed in a uniform external field E0.
5
Kevin Zhou Physics Olympiad Handouts
(a) Since electrostatic fields must vanish inside conductors, the surface charge on the conductor
must conspire to create an opposing uniform field inside it. How exactly does this happen?
Specifically, explicitly find σ(θ), the surface charge density as a function of the angle from E0.
(Hint: we’re already seen an example of a suitable charge density in E1.)
(b) Now let’s consider the field created by this surface charge outside the sphere. We could
integrate the answer to part (a), but it’s even easier to use the method of images. Suppose
that the original external field E0 was created by two very distant opposite point charges.
Argue that the sphere picks up a dipole moment, and find its magnitude.
(c) What happens to the argument of part (b) if we instead suppose that E0 was created by a
single very distant point charge?
The lessons of this problem will be useful in several later handouts.
Solution. We align the z-axis with E0 and center the sphere at the origin.
(a) In the very first problem of E1, we saw that if you take two balls of charge density ±ρ and
radius R and place them a small displacement d apart, then the electric field within their
overlap is uniform with magnitude ρd/3ϵ0. That’s exactly what we want to accomplish here,
so we set E0 = ρd/3ϵ0.
To make sure the net charge is only nonzero on a thin surface near radius R, we imagine
sending ρ to infinity and d to zero. The surface charge density is then
σ(θ) = ρdcosθ = 3ϵ0E0 cosθ.
(b) Consider a point charge q at z = −L, and −q at z = L for L ≫ R. This generates a
roughly uniform electric field near the sphere with magnitude q/2πϵ0L2. Therefore, we set
q = 2πϵ0L2E0 to get the desired field.
By the results of problem 2, there are two image charges, which are both very close to the
origin. They form a dipole with dipole moment
p = 2q′
L′
= 2
qR
L
R2
L
= 4πϵ0R3
E0.
Of course, we could also have concluded this from part (a) with direct integration,
p = 2π
Z π
0
(R2
sinθdθ)(Rcosθ)σ(θ) = 6πϵ0R3
E0
Z π
0
sinθcos2
θdθ = 4πϵ0R3
E0.
(c) We can consider a single point charge −2q at z = −L, in which case we get a single point
charge 2q′ at z = −L′. That doesn’t look like what we found in part (b), but we need to
remember that there’s also an image charge −2q′ at z = 0, enforcing the fact that the sphere
is overall neutral. These two image charges form an image dipole with double the charge and
half the displacement. It has the same dipole moment as in part (b), as it must.
[5] Problem 7 (Purcell 3.45). [A] Consider a point charge q located between two parallel infinite
grounded conducting planes. The planes are a distance ℓ apart, and the point charge is a distance
b from the left plane. The goal of this problem is to find the total charge induced on each plane.
6
Kevin Zhou Physics Olympiad Handouts
(a) Argue that the total charge on each plane would not change if we replaced the point charge q
with two point charges q/2, both a distance b from the left plane. By iterating this process,
convert the point charge into a uniformly charged plane, and use this to get the answer.
(b) Alternatively, using image charges, show that the electric field on the inside surface of the
left plane, perpendicular to the plane, at a point a distance r from the axis containing all the
image charges, satisfies
4πϵ0E⊥ =
∞ X
n=−∞
2q(2nℓ + b)
((2nℓ + b)2 + r2)3/2
.
(c) Since σ = −ϵ0E⊥, we can integrate both sides to find the total charge on the left plane.
However, the integral of each term by itself is simply q, so the series doesn’t converge. To get
the result, do the following steps in this specific order: group the terms ±n together, then
integrate them only out to a distance R ≫ b, then sum over the values of |n|, then take the
limit R → ∞. Show that this gives a finite result that matches that of part (a).
Solution. (a) Consider the induced charge distribution for one point charge q. By the superpo-
sition principle, the boundary conditions in this case are also satisfied if we take half that
charge distribution, and center it about each of the charges q/2. By uniqueness, this is the
solution.
Extrapolating to infinitely many charges, we get a uniform plane of charge. For the two plates
to be at the same voltage, the electric fields to the left and right of the plane must have ratio
(ℓ − b)/b. Then the charges have the ratio (ℓ − b)/b and sum to −q, so the charge on the left
plane is −q(ℓ − b)/ℓ, while the charge on the right plane is −qb/ℓ.
(b) We do this by summing over image charges. As we can see from the figure in the solution to
problem 1, there are infinitely many image charges. The n = 0 term in the sum corresponds to
the image charge and real charge closest to the left plane. The n = 1 term corresponds to the
two image charges a distance 2ℓ + b from the left plane, while the n = −1 term corresponds
to the image charges a distance 2ℓ − b from the left plane, and so on.
(c) Using σ = −ϵ0E⊥, and grouping ±n terms together, the total charge on the left plane is
Q =
Z ∞
0
(−ϵ0E⊥) · 2πrdr
= q
Z ∞
0
"
−
br
(b2 + r2)3/2
+
∞ X
n=1

(2nℓ − b)r
((2nℓ − b)2 + r2)3/2
−
(2nℓ + b)r
((2nℓ + b)2 + r2)3/2
 #
dr.
The first term integrates to 1, so we will deal with the sum. Consider one term for some given
n, and say we integrate out to some finite but large R. The term integrates out to
fn = −
2nℓ − b
√
4n2ℓ2 + R2 − 4nℓb
+
2nℓ + b
√
4n2ℓ2 + R2 + 4nℓb
.
Performing some careful algebra yields
fn ≈
2R2b
(R2 + 4n2ℓ2)3/2
=
2b
R
1
(1 + (2nℓ/R)2)3/2
.
7
Kevin Zhou Physics Olympiad Handouts
Finally, in the limit R → ∞, the sum can be written as an integral, giving
2b
R
Z ∞
0
1
(1 + (2nℓ/R)2)3/2
dn =
2b
R
R
2ℓ
Z ∞
0
dx
(1 + x2)3/2
=
b
ℓ
.
Therefore, the total charge on the left plane is −q(1 − b/ℓ), matching part (a).
Remark
The analysis in problem 7 is remarkably subtle, and about ten papers have been
written about this problem in the American Journal of Physics alone. The solution
above involves deforming and rearranging the terms of a nonconvergent series, which
is mathematically dangerous. For instance, the Riemann rearrangement theorem tells
us that in general, rearranging terms in a conditionally convergent series can give any answer.
So why does our procedure make sense? First off, the indefinite answer from part (b) is
actually formally correct. The charge on the infinite planes can be anything, because we
could always have charge on the planes hiding out at infinity, where it would have no effect.
When we pose the question, we are implicitly asking how much charge is induced near
the point charge (i.e. out to some finite distance R ≫ b), while ignoring any charge at infinity.
The trick in part (a) resolves this ambiguity by extending the point charge q into a
distribution that also extends out to infinity, so that there’s nowhere for extra charge on the
infinite planes to hide. Another way to fix the problem is to replace the infinite planes with
large finite ones. But if we do that, the image charge solution won’t work anymore, and we
won’t have a way to treat the problem analytically.
On the other hand, for a very large but finite plane of size R, the image charge expansion
will still be approximately correct for low enough n. Image charges with higher n correspond
to surface charges spread further and further out, which eventually get cut off by the plane’s
finite size. Thus, to mimic the effect of a finite-sized plane, we sum over n while integrating
out to finite R, erasing most of the contribution of the higher image charges. This removes
the possibility of charge escaping to infinity, so we are then free to let R → ∞.
This is an example of regularization: a calculation with infinite objects is elegant but not
actually well-defined, so we introduce an artificial “regulator” to mimic what would happen
for a finite object (where the calculation is well-defined, but too hard to do directly). This
is a very important concept in modern physics, and we’ll see another example in X1. The
problem highlighting infinite charge distributions in E1 is an example where regularization
doesn’t work. There, the answer depended in detail on what regulator was chosen, so you
couldn’t get a unique answer by removing the regulator at the end. In general, regularization
(and its accompanying concept of renormalization) is a tricky subject which requires both
mathematical care and physical intuition.
8
Kevin Zhou Physics Olympiad Handouts
2 Capacitors
Idea 2
There are multiple definitions of capacitance. For a single, isolated conductor with charge Q,
the self-capacitance is defined as
Q = Cϕ
where ϕ is the potential difference between the conductor and infinity. But for a set of two
isolated conductors with charges ±Q, you can also define a “mutual” capacitance by
Q = Cϕ
where ϕ is the potential difference between the two conductors. When someone talks about a
“capacitance” of two conductors, such as in idea 4, they usually mean the mutual capacitance.
Idea 3
The definitions of C above are only useful when you have only one or two conductors in the
problem, respectively. In a situation with more than two, it’s very tricky to use the above
definitions, because all the conductors will affect each other; even a neutral conductor will
have an effect since there will be induced charges on its surface.
Instead, it’s better to revert to more general principles. The underlying principle behind
capacitance is linearity: by the principle of superposition, the charges are linearly related to
the potentials. For multiple capacitors, the most general possible linear relation is
Qi =
X
j
Cijϕj
where conductor i has charge Qi and potential ϕi, the potential is taken to be zero at infinity,
and the Cij are called general coefficients of capacitance, or in electrical engineering, the
Maxwell capacitance matrix. Similarly, inverting this relation,
ϕi =
X
j
pijQj
where the pij are called coefficients of potential. We then calculate these coefficients by
considering some appropriately selected situations, and solving a system of equations.
Computing the Cij or pij explicitly is seldom useful in Olympiad problems. Instead, the
point is that if you’re given the charges and want the potentials, or vice versa, you can build
up the answer you want using the principle of superposition.
Remark
General capacitance coefficients are discussed further in section 3.6 of Purcell. One nontrivial
fact is that Cij = Cji, which is proven by energy conservation in problem 3.64 of Purcell.
Capacitance coefficients can be clunky to work with. For example, suppose you want to
9
Kevin Zhou Physics Olympiad Handouts
compute the familiar capacitance of a system of two conductors. By definition, we have
Q1 = C11ϕ1 + C12ϕ2, Q2 = C21ϕ1 + C22ϕ2.
An ordinary two-plate capacitor corresponds to the special case of opposite charges on the
plates, so we write Q = Q1 = −Q2. There is a potential difference V across the plates, so
ϕ1 = ϕ2 + V , and plugging this in gives
Q = (C11 + C12)ϕ2 + C11V, −Q = (C22 + C21)ϕ2 + C21V.
Eliminating ϕ2 from the system of equations above, we find the familiar mutual capacitance
C =
Q
V
=
C11C22 − C2
12
C11 + C22 + 2C12
where we used C12 = C21. This is quite an inconvenient formula, so as a result we won’t
consider general capacitance coefficients any further, except briefly for practice in problem 11.
[2] Problem 8 (Purcell 3.21). Four parallel plates, each with large area A, are evenly spaced with
small separation s. The first and third are connected by a wire, as are the second and fourth. What
is the capacitance of the system?
Solution. This problem is asking about the usual notion of capacitance: there are two conductors,
so we give them opposite charges and compute the ratio of charge to the voltage between them.
However, it’s a bit tricky to see how charge is distributed on the plates.
By symmetry, we know the surface charges are
σ1,−σ2,σ2,−σ1
reading left to right (1 to 4). The field in between plates 1 and 2 is σ1/ϵ0, and the field between
plates 2 and 3 is (σ1 − σ2)/ϵ0. Since 1 and 3 are connected, the voltage drop from 2 to 1, and from
2 to 3 must be the same, so
σ1s = (σ2 − σ1)s =⇒ σ2 = 2σ1.
Thus, the potential difference is σ1s/ϵ0, so the capacitance is C = Q/ϕ = 3σ1A/(σ1s/ϵ0) = 3ϵ0A/s.
There’s also an easier way of thinking about this problem. Plate 1 and the left half of plate 2
form a capacitor of capacitance ϵ0A/s, which doesn’t affect anything outside. The same is true for
the right half of plate 2 and the left half of plate 3, as well as the right half of plate 3 and plate 4.
So we effectively have 3 such capacitors combined in parallel, giving 3ϵ0A/s.
[2] Problem 9. Three large, conducting plates are placed parallel in zero external electric field. From
left to right, the plates have total charges Q1, Q2, and Q3. Find the total charge on all six surfaces.
Solution. Let the charge on the left and right surface of plate i be Ql
i and Qr
i respectively.
First, consider a Gaussian surface straddling the left surface of the left plate. The electric field
on its right side is zero, and the electric field on its left side is (Q1 + Q2 + Q3)/(2Aϵ0). Therefore,
Ql
1 =
Q1 + Q2 + Q3
2
10
Kevin Zhou Physics Olympiad Handouts
and from charge conservation we conclude
Qr
1 = Q1 − Ql
1 =
Q1 − Q2 − Q3
2
.
Now consider a Gaussian surface whose sides are inside the left and middle plates. The flux through
it is zero, so we must have
Ql
2 = −Qr
1 =
−Q1 + Q2 + Q3
2
.
By charge conservation again, we conclude that
Qr
2 = Q2 − Ql
2 =
Q1 + Q2 − Q3
2
.
Now consider a Gaussian surface whose sides are inside the middle and right plates. By the same
reasoning as before,
Ql
3 = −Qr
2 =
−Q1 − Q2 + Q3
2
.
Finally, by charge conservation we again have
Qr
3 = Q3 − Ql
3 =
Q1 + Q2 + Q3
2
.
[2] Problem 10 (MPPP 152). Four identical metal spheres are positioned at the vertices of a regular
tetrahedron, as shown.
Sphere A can be raised to potential V by giving it charge 4q. Sphere A can also be raised to
potential V by giving it, and one of the other spheres, each charge 3q, or by giving it, and two of
the other spheres, each charge q′. What is q′?
Solution. The key idea is linearity/superposition. By symmetry, whenever any one of the spheres
is given charge q, then it raises its own potential by αq and the potentials of all the other spheres
by βq, where α and β are unknown coefficients. The problem tells us that
4αq = 3αq + 3βq = V
from which we conclude that
α =
1
4
V
q
, β =
1
12
V
q
.
Now suppose that we give charge q′ to A and two other spheres. Then we have
(α + 2β)q′
= V, q′
=
12
5
q.
