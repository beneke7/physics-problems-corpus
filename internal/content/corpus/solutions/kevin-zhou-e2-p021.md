---
id: kevin-zhou-e2-p021
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e2-p021
solution_type: author
source_document: solution-document-kevin-zhou-e2sol
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E2Sol.pdf."
---

[3] Problem 21. Consider two conducting spheres of radius r separated by a distance a ≫ r, with
total charges ±Q. The spheres can be thought of as the two plates of a capacitor.
(a) Find a simple approximation for the capacitance C, valid when a ≫ r.
In reality, the exact capacitance of this system can be written as an infinite series in r/a. Let’s
consider two ways of finding the corrections to the capacitance.
(b) By considering the energy U = Q2/2C of the system, find the first nontrivial correction to C.
(c) Alternatively, we can think about the charge distributions on the spheres. If we start with
a “zeroth-order” uniform charge density on each sphere, it will induce a “first-order” image
charge in the other sphere, which will in turn induce “second-order” image charges, and so
on. We can then compute C = Q/∆V by summing up all the image charges, and the total
voltage difference they produce. Using this approach, find the first nontrivial correction to C.
(d) ⋆ It turns out that the quantity 1/C is a bit nicer than C. At what order in r/a does the
second nontrivial correction to 1/C appear?
Solution. (a) The potential of a single sphere, relative to infinity, is V = Q/4πϵ0r. Hence the
two spheres, at this level of approximation, have potentials ±Q/4πϵ0r, and the capacitance is
C =
Q
V1 − V2
= 2πϵ0r.
This is ignoring any interaction between the charges on different spheres.
21
Kevin Zhou Physics Olympiad Handouts
(b) Each sphere has an energy Q2/8πϵ0r due to its own field, so the simplest correction is to
account for the electrostatic interaction between them, treating them as approximately point
charges. We therefore have
U =
Q2
8πϵ0r
+
Q2
8πϵ0r
−
Q2
4πϵ0a
+ ...
which gives
C = 2πϵ0r(1 + r/a + O(r2
/a2
)).
(c) Let’s review the strategy. If we put a uniform charge on one sphere, then by the shell theorem,
its effect on the second sphere is the same as a point charge at the first sphere’s center. This
induces an image charge on the second sphere. The same logic applies in reverse, with uniform
charge on the second sphere inducing an image charge on the first sphere. The image charges
are smaller than the original ones by a factor of r/a, by the result of problem 2.
However, this isn’t a solution to the problem, because these “first-order” image charges on
each sphere in turn induce “second-order” image charges in the other sphere, which are smaller
by another factor of r/a, and so on. Once we sum up an infinite series of image charges, we
get the true charge configuration, from which we can compute the exact capacitance, as a
series in r/a. The net charge on each sphere is the sum of all its image charges.
Specifically, let the total charge and voltage on the spheres be ±Q and ±V . Both of these
quantities can be expanded in a power series in r/a,
Q = q0 + q1 + q2 + ..., V = V0 + V1 + V2 + ...
and the capacitance is simply C = Q/(V − (−V )) = Q/2V .
To start, we put a “zeroth-order” charge of q0 at the center of the positive sphere. This charge
induces a voltage V0 = q0/(4πϵ0r) on that sphere. Now, the negative sphere’s −q0 induces
an image charge q1 = q0r/a in the positive sphere. By construction, the −q0 on the negative
sphere and the +q1 image charge on the positive sphere together yield zero potential on the
positive sphere, so V1 = 0. (This is a lucky result, which won’t continue at higher orders.) So
the capacitance with the first correction is simply
C =
Q
2V
=
q0 + q1 + O(r2/a2)
2(V0 + V1 + O(r2/a2))
= 2πϵ0r(1 + r/a + O(r2
/a2
)).
in agreement with part (b).
(d) As we’ve seen, the answer is a power series in r/a, so we would guess that the next term is of
order (r/a)2. However, the next term is actually of order (r/a)4.
This is difficult to see with the image charge method of part (c). If you work it out, you’ll
find that the second order and third order corrections to 1/C cancel out, in a complicated
way. On the other hand, it’s intuitive if you consider the energy, as in part (b). This is the
more natural quantity, since U ∝ 1/C.
We know that the leading correction to the charge distribution is the image charge q1 = q0r/a,
which is off center by r2/a. Thus, each sphere can be regarded as a point charge Q at its
22
Kevin Zhou Physics Olympiad Handouts
center, plus a dipole moment p1 ∼ Qr3/a2, plus higher order corrections. This dipole interacts
with the point charge field of the other sphere with a potential energy
∆U ∼ p1 · E ∼
Qr3
a2
Q
a2
∼
Q2r3
a4
which is order (r/a)4 smaller than the leading term in U, as promised.
For much more about this problem, see this paper. The result we derived in part (b) matches
its equation (2.2), upon identifying Qa → Q, Qb → −Q, a,b → r, and c → a, and using cgs
units where 4πϵ0 = 1. The third correction shows up at order (r/a)6, and corresponds to a
dipole-dipole interaction. As noted in the paper, Maxwell was so interested in this system
that he calculated 1/C out to 22nd order!
Example 6
Find the charge distribution on a thin conducting disc of radius R and total charge Q.
Solution
In general, there are very few situations where the charge distribution on a conductor can
be found explicitly. As you’ve seen, some of the simplest examples can be solved with image
charges. Some more complex, two-dimensional examples can be solved with a mathematical
technique called conformal mapping. And this special example can be solved with a neat trick.
Consider a uniformly charged spherical shell centered on the origin, and consider a point P
inside the shell, on the xy plane. The electric field at point P is zero, by the shell theorem.
Recall that in the usual proof of the shell theorem, one draws two cones opening out of
P in opposite directions. The charges contained in each cone produce canceling electric fields.
Now imagine shrinking the spherical shell towards the xy plane, so it becomes elliptical. The
crucial insight is that the shell theorem argument above still works, for points on the xy
plane. When we squash the shell all the way down to the xy plane, it becomes a disc, with
zero electric field on it. This is thus a valid charge distribution for a disc-shaped conductor,
and by the uniqueness theorem, it’s the only one.
By keeping track of how much charge gets squashed to radius [r,r + dr], we find σ(r) ∝
R/
√
R2 − r2, and fixing the proportionality constant gives
σ(r) =
Q
4πR
√
R2 − r2
.
You can also show this by taking the c,ϵ → 0 limit of the “third shell theorem” in M6. Note
that this is the surface charge density on each side of the thin disc, so if you wanted the limit
of an infinitely thin disc, you should double the answer.
4 Electrical Conduction
We now leave the world of electrostatics and consider steady currents.
23
Kevin Zhou Physics Olympiad Handouts
Idea 6
In a conductor with conductivity σ, the current density is
J = σE.
Equivalently, one can define the resistivity ρ by E = ρJ. Annoyingly, ρ and σ also stand for
volume and surface charge density, but these are just the historic choices.
The current density J and volume charge density ρ satisfy
∇ · J = −
∂ρ
∂t
.
The current passing through a surface S at a given time is
I =
Z
S
J · dS.
Since J ∝ E, we have Ohm’s law V = IR, where V is the voltage drop across the resistor.
The power dissipated in a resistor is P = IV . The resistance R adds in series, while 1/R
adds in parallel.
[2] Problem 22 (HRK). A battery causes a current to run through a loop of wire.
(a) Suppose the wire makes a sharp corner. How do the charges know to turn around there?
(b) A copper wire with conductivity σ is joined to an iron wire with conductivity σ′ < σ. For
the current in both sections to be the same, the electric field in the iron wire must be higher.
How does that happen?
For more about surface charges in circuits, see this paper and this paper. For a great visualization
of how the charge and current configuration in a real circuit is set up over time, see this video.
Solution. (a) The first charges to make it there don’t; they just stop at the surface of the wire,
due to the attraction from the positively charged nuclei. Once this charge builds up at the
kink, it repels the next electrons so that they automatically turn around. This typically occurs
extremely quickly, as the relevant timescale is the RC of the wire and C is tiny. The amount
of charge required is very small, less than a few hundred electrons.
(b) It’s the same story as part (a). The first charges to reach the iron will start moving slower,
because the fields are the same. This then causes a buildup of charge at the interface between
them, which increases the field in the iron and decreases the field in the copper. In the steady
state, the current densities in both are equal. Again, this occurs very quickly and requires
very little charge.
