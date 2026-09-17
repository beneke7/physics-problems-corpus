---
id: kevin-zhou-e2-p011
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e2-p011
solution_type: author
source_document: solution-document-kevin-zhou-e2sol
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E2Sol.pdf."
---

[3] Problem 11. Consider two concentric spherical metal shells, with radii a < b.
11
Kevin Zhou Physics Olympiad Handouts
(a) Compute their capacitance using Gauss’s law.
(b) Compute their capacitance by computing the four capacitance coefficients, verifying that
C12 = C21 along the way, and using the result for C above.
Solution. (a) Let the shells have charge ±Q. The field between the shells is (Q/4πϵ0r2)r̂, so
V =
Q
4πϵ0

1
a
−
1
b

.
Thus the capacitance is
C =
Q
V
= 4πϵ0
ab
b − a
.
(b) Let the first conductor be the inner shell. If only the outer shell is charged, with charge Q,
then ϕ1 = ϕ2 = Q/4πϵ0b. The general capacitance equations in this case are
0 = C11ϕ1 + C12ϕ2, Q = C21ϕ1 + C22ϕ2
from which we see that
C11 + C12 = 0, C21 + C22 = 4πϵ0b.
Now suppose only the inner shell is charged, with charge Q. In this case we have ϕ1 = Q/4πϵ0a
while ϕ2 = Q/4πϵ0b, so
Q = C11ϕ1 + C12ϕ2, 0 = C21ϕ1 + C22ϕ2
from which we see that
C11
a
+
C12
b
= 4πϵ0,
C21
a
+
C22
b
= 0.
Solving these four equations for the capacitance coefficients gives
C11 = 4πϵ0
ab
b − a
, C12 = C21 = −4πϵ0
ab
b − a
, C22 = 4πϵ0
b2
b − a
.
Plugging into the general formula, we have
C =
4πϵ0
b − a
(ab)b2 − (ab)2
ab + b2 − 2ab
=
4πϵ0
b − a
b2a(b − a)
b(b − a)
= 4πϵ0
ab
b − a
.
This is certainly a longer route to get to the same conclusion! (Note that in this very simple
case, we actually have C = C11. That’s because of the shell theorem, and it wouldn’t hold in
a more general situation.)
[3] Problem 12.  W 1 0USAPhO 2008, problem A1.
Idea 4
A two-plate capacitor with voltage difference V and mutual capacitance C stores energy
U =
1
2
QV =
1
2
CV 2
.
12
Kevin Zhou Physics Olympiad Handouts
Many circuits have multiple two-plate capacitors. In general, these need to be handled with
the capacitance coefficients introduced in idea 3. But in practice, capacitors used in circuits
are designed to produce fields confined within themselves, so that different capacitors don’t
interact with each other. In that case, we can just use mutual capacitance throughout, and C
adds in parallel, while 1/C adds in series. (But this doesn’t work if, e.g. you put one capacitor
inside another, in which case you should think about the charges and fields directly.)
[2] Problem 13 (Purcell 3.24). Some estimates involving capacitance.
(a) Estimate the capacitance of the Earth.
(b) Make a rough estimate of the capacitance of the human body.
(c) By shuffling over a nylon rug on a dry winter day, you can easily charge yourself up to a
couple of kilovolts, as shown by the length of the spark when your hand comes too close to a
grounded conductor. How much energy would be dissipated in such a spark?
Solution. (a) The Earth is a sphere of radius of order 107 m, so
C = 4πϵ0r ∼ 10−3
F.
We can make larger capacitances in the lab! Still, a huge amount of charge can be delivered to
the Earth, such as by lightning strikes. This is because the voltage of the Earth is also huge,
which is possible because its huge size means the corresponding electric fields aren’t that big.
(b) A human is approximately a sphere of radius 0.5m. Then the self-capacitance of the human
body is C = 4πϵ0r ∼ 5 × 10−11 F.
(c) Plugging in the numbers, U = CV 2/2 ∼ 10−4 J.
[2] Problem 14. The total energy can also be found by integrating the electric field energy,
U =
ϵ0
2
Z
E2
dV.
(a) Show that this agrees with U = CV 2/2 for a parallel plate capacitor.
(b) Show that this agrees with U = CV 2/2 for a capacitor made of concentric spheres.
The general proof is more advanced; a slick method is given in problem 1.33 of Purcell.
Solution. (a) Let the plate area be A and the distance between them be d. Then
U =
ϵ0
2
E2
(Ad) =
σ2
2ϵ0
Ad =
C
2
σ2d2
ϵ2
0
=
CV 2
2
.
(b) Let the radii be R1 and R2 and the charges be ±Q. The field is Q/(4πϵ0r2), so
U =
ϵ0
2
Z
Q2
16π2ϵ2
0
dV
r4
=
Q2
32π2ϵ0
Z R2
R1
4πr2 dr
r4
=
Q2
8πϵ0

1
R1
−
1
R2

.
On the other hand, this should be equal to U = QV/2, which follows directly from the result
of problem 11.
13
Kevin Zhou Physics Olympiad Handouts
[3] Problem 15 (Purcell 3.26). A parallel-plate capacitor consists of a fixed plate and a movable plate
that is allowed to slide in the direction parallel to the plates. Let x be the distance of overlap.
The separation between the plates is fixed. Let C(x) be the capacitance.
(a) Assume the plates are electrically isolated, so that their charges ±Q are constant. By differ-
entiating the energy, find the leftward force on the movable plate in terms of Q and C(x).
(b) Now assume the plates are connected to a battery, so that their potential difference ϕ is held
constant. Find the leftward force on the movable plate, in terms of ϕ and C(x).
(c) If the movable plate is held in place, the two answers above should be equal because nothing
is moving. Verify that this is the case, being careful with signs.
(d) In terms of electric fields, why is there a force on the movable plate? Does the effect invoked
in the answer to this part change the conclusion of parts (a) through (c) at all?
Solution. (a) The energy as a function of x is
U(x) =
Q2
2C
where we understand that C is also a function of x. Thus, the force on the plate is
F = −
dU
dx
=
Q2
2
d
dx

−
1
C

=
Q2
2C2
dC
dx
.
(b) Here, the energy is U(x) = 1
2Cϕ2, so naively we have
F = −
dU
dx
= −
ϕ2
2
dC
dx
.
This is negative, while the answer to part (a) is positive. The reason is that U should reflect
the total energy of the system – and in this case, the system must include the battery that
does work to maintain the potential difference ϕ.
Say x increases by dx. Let the change in capacitance be dC, so dQ = ϕdC. Thus, the work
the battery does is
dW = ϕdQ = ϕ2
dC.
If F is the net force the plate feels, we have
dW = F dx + dU =⇒ F =
1
2
ϕ2 dC
dx
.
(c) Let FQ be the first force, and Fϕ the second. We have
FQ/Fϕ =
Q2
ϕ2C2
= 1.
If we didn’t account for the subtlety in part (b), we would have gotten −1 here.
14
Kevin Zhou Physics Olympiad Handouts
(d) At first this seems confusing, as the field is supposed to be perfectly vertical. The resolution
is that the force comes from the fringe fields, i.e. the fields right at the edges of the plates,
which have a horizontal component.
Fortunately, we don’t have to account for fringe fields in parts (a) through (c). They do affect
the total stored energy, but as we move a plate, the region with the fringe fields just moves with
the plate, while keeping the same profile, so it doesn’t affect the change in energy. In other
words, the force is entirely due to the fringe fields, yet the energy-based calculation doesn’t
have to care about the fringe fields at all. This is yet another example of how conservation
laws can hand you information that’s very hard to get otherwise.
Idea 5: Dielectrics
A dielectric is an insulator which polarizes in the presence of an electric field, with
positive charges displaced slightly along the field. The resulting electric dipoles distributed
throughout the material in turn create a field that tends to weaken the original applied field
within the material.
Each part of a dielectric polarizes based on the local electric field, but that electric field
depends on the applied field, and the polarization of every other piece of the dielectric. Thus,
solving for the electric field for a general dielectric geometry is very difficult, and usually
not possible in closed form, just like how it’s usually not possible to solve for the field of a
charged conductor. In Olympiad physics, you will almost always consider highly symmetric
situations, where a dielectric simply reduces the applied electric field everywhere inside by a
factor of κ, called the dielectric constant. (We’ll consider some trickier situations in E8.)
Consider a parallel plate capacitor with charge ±Q on each plate. If a dielectric is inserted
with the charge kept the same, then the field inside is reduced by a factor of κ. Thus, the
capacitance C = Q/V increases by a factor of κ. Dielectrics may increase the amount of
energy that can be stored in a capacitor, which is typically limited by the voltage V0 where
electrical breakdown occurs. So if V0 stays the same, the maximal stored energy U = CV 2
0 /2
goes up by a factor of κ.
Plugging in the definition of C, this result implies that the energy density in the capacitor is
κϵ0E2/2. But we showed in E1 that the energy density of the electric field is only ϵ0E2/2.
The extra energy is stored in the dielectric material itself: it takes energy to separate positive
and negative charges within the dielectric, as if we were stretching many microscopic springs.
This potential energy is released when the capacitor is discharged.
3 Tricky Problems
Example 2: PPP 151
A closed body with conducting surface F has self-capacitance C. The surface is now dented
so that the new surface F∗ is entirely inside F. Prove that the capacitance has decreased.
15
Kevin Zhou Physics Olympiad Handouts
Solution
The energy stored in the capacitor is U = Q2/2C. Therefore, if we give the capacitor a
fixed charge Q, proving that F∗ has lower C is equivalent to showing that we can move the
surface from F∗ to F while only lowering the energy.
Suppose without loss of generality that F is infinitesimally larger than F∗. (We can break any
finite change into infinitesimal stages and repeat this argument.) We can go from F∗ to F by
just taking each charge on the surface and moving it outward until it hits F. Suppose the total
charge is positive. Then we showed in E1 that the surface charge density is always nonnega-
tive, and the electric field is always directed outward, so moving each charge lowers the energy.
At this point, the charges lie on F, but they don’t have the right distribution, i.e. F is not
an equipotential. Now we let the charges spontaneously redistribute themselves so that F is
again an equipotential. This again lowers the energy, proving the desired result.
Example 3
Are there charge distributions that aren’t spherically symmetric, but which produce an exact
r̂/r2 field outside of them?
Solution
If you know a bit about the multipole expansion, this might seem like a daunting question.
To make the field exactly r̂/r2, you need to make sure the charge distribution has no dipole
moment, no quadrupole moment, no octupole moment, and so on to infinity, and it seems
impossible to satisfy all of these constraints without spherical symmetry. But we have
already seen an example of such a charge distribution earlier in the problem set!
Recall that when we treated the method of images for spheres, we found that in some
situations, the complicated charge densities on conducting spheres were exactly the same as
those produced by a fictitious image charge inside the sphere, and generally away from its
center. If we place the origin at that image charge, then we have an example of a charge
distribution that is perfectly r̂/r2 outside the sphere, but which isn’t spherically symmetric.
[2] Problem 16 (Purcell 3.9). A conducting spherical shell has charge Q and radius R1. A larger
concentric conducting spherical shell has charge −Q and radius R2.
(a) If the outer shell is grounded, explain why nothing happens to the charge on it.
(b) If instead the inner shell is grounded, e.g. by connecting it to ground by a very thin wire that
passes through a very small hole in the outer shell, find its final charge.
(c) It’s not so clear why charge would leave the inner shell in part (b), thinking in terms of forces.
A small bit of positive charge will certainly want to hop on the wire and follow the electric
field across the gap to the larger shell. But when it gets to the larger shell, it seems like it
has no reason to keep going to infinity, because the field is zero outside. And, even worse, the
field will point inward once some positive charge has moved away from the shells. So it seems
16
Kevin Zhou Physics Olympiad Handouts
like the field will drag back any positive charge that has left. Does charge actually leave the
inner shell? If so, what’s wrong with the above reasoning?
Solution. (a) The potential at the outer shell due to itself is −Q/4πϵ0R2 and the potential due
to the inner shell is Q/4πϵ0R2, so it is zero overall. Thus, the outer shell is already effectively
grounded.
(b) The potential at the inner shell due to itself is Q′/4πϵ0R1 and the potential to the outer shell
is −Q/4πϵ0R2. Since the total must be zero, Q′ = R1Q/R2.
(c) The key mistake is that the positive charges are repelled also by the charges behind it in the
wire. So yes, eventually the field due to the shells may even become inward, there is a whole
line of plus charge behind a given charge that force it forward.
Another way of saying this is that a wire has negligible capacitance; like a thin metal pipe of
water, it cannot store extra net charge but can only let charge move rigidly through the entire
thing. It is energetically favorable for this to happen, so even if some charges don’t want to
move forward, their neighbors will push them forward.
