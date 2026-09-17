---
id: kevin-zhou-e3-ex003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e3-ex003
solution_type: author
source_document: solution-document-kevin-zhou-e3sol
source_pdf: sources/kevin_zhou/site/handouts/E3Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E3Sol.pdf."
---

Example 3
Consider two long, coaxial cylindrical shells of radii a < b and length L. The volume between
the two shells is filled with material with conductivity σ(r) = k/r. What is the resistance
between the shells, and the charge density?
Solution
To find the resistance, we compute the current I when a voltage V is applied between the
shells. By symmetry, in the steady state the current density must be
J(r) =
I
2πrL
r̂.
On the other hand, we also know that
V =
Z
E · dr =
Z b
a
I
2πrLσ
dr =
I(b − a)
2πkL
from which we conclude
R =
b − a
2πkL
.
Note that the radial electric field between the shells is constant, so
E(r) =
V
b − a
r̂.
5
Kevin Zhou Physics Olympiad Handouts
To find the charge density, it’s quickest to use Gauss’s law in differential form in cylindrical
coordinates. We use the form of the divergence derived in E1, giving
ρ = ϵ0 ∇ · E =
ϵ0
r
∂(rEr)
∂r
=
ϵ0
r
V
b − a
.
It might be surprising that ρ is nonzero. That’s because in most textbook examples the
conductivity is uniform, so that ∇ · E = ∇ · (J/σ) = (∇ · J)/σ = 0. In that case there can
only be charge on the surfaces of conductors.
[2] Problem 4 (Cahn). A washer is made of a material of resistivity ρ. It has a square cross section
of length a on a side, and its outer radius is 2a. A small slit is made on one side and wires are
connected to the faces exposed.
Since the washer has an irregular shape, the current distribution inside it is complicated: it spreads
out from the first wire, goes around the washer, and converges into the second wire. However, the
situation is simpler if we glue a perfectly conducting square plate, of side length a, to each exposed
face. Find the resistance in this case.
Solution. Since the plates are conducting, the potential doesn’t depend on the radius r at the plates
themselves, so by rotational symmetry, it doesn’t depend on r anywhere in the washer. Therefore,
there is no radial current; all the current flows tangentially, so we can think of the washer as a set
of radial rings in parallel.
Split the washer into a bunch of radial rings with width dr. We see that r ranges from a to 2a.
Each little ring has resistance ρ(2πr)/(adr), and they are all effectively connected in parallel. Thus,
1
R
=
1
ρ
Z 2a
a
dr
a
2πr
=
1
ρ
a
2π
log2,
which implies R = (2π/log2)ρ/a.
[3] Problem 5 (BAUPC 1995). An electrical signal can be transferred between two metallic objects
buried in the ground, where the current passes through the Earth itself. Assume that these objects
are spheres of radius r, separated by a horizontal distance L ≫ r, and suppose both objects are
buried a depth much greater than L in the ground. If the Earth has uniform resistivity ρ, find the
approximate resistance between the terminals. (Hint: consider the superposition principle.)
6
Kevin Zhou Physics Olympiad Handouts
Solution. We can consider one object at a time, and then use superposition to find the combined
effect of both. Suppose that current I comes out from one of the objects. Placing this object at the
origin, we have
J =
I
4πr2
r̂, E =
ρI
4πr2
r̂.
Therefore, the potential difference between this object and where the other object would be is
V =
ρI
4π
Z L
r
dr
r2
≈
ρI
4πr
where we used r ≪ L. Finally, the other object takes in current I, with its J, E, and V superposing
with the first object. Thus, the total potential difference is ρI/2πr, so
R =
V
I
=
ρ
2πr
.
[3] Problem 6 (PPP 162). A plane divides space into two halves. One half is filled with a homogeneous
conducting medium, and physicists work in the other. They mark the outline of a square of side
a on the plane and let a current I0 in and out at two of its neighboring corners. Meanwhile, they
measure the potential difference ∆V between the two other corners.
Find the resistivity ρ of the medium.
Solution. The surface of the plane enforces the boundary condition J · n̂ = 0, since current can’t
come out of it, which is equivalent to setting E · n̂ = 0. Then the uniqueness theorems in E1 apply.
Now, for simplicity, suppose there is only current coming in at A. Then one possible solution is
that J points radially outward from A and has (hemi)spherical symmetry, with magnitude
J · 2πr2
= I0 =⇒ J =
I0
2πr2
.
This obeys the boundary condition, so it must be the unique solution. In this case,
E =
I0
2πσr2
r̂
where σ is the conductivity of the material, which implies
VD − VC =
Z √
2a
a
I0
2πσr2
dr =
I0
2πσa
(1 − 1/
√
2).
7
Kevin Zhou Physics Olympiad Handouts
Similarly, for the case where the current is coming out of B, we have
VD − VC =
I0
2πσa
(1 − 1/
√
2).
The actual voltage drop is the superposition of the two,
∆V =
I0ρ
2πa
(2 −
√
2)
where ρ = 1/σ is the resistivity. Then ρ can be calculated as
ρ =
2πa∆V
I0(2 −
√
2)
=
πa(2 +
√
2)∆V
I0
.
[3] Problem 7 (MPPP 174). We aim to measure the resistivity of the material of a large, thin,
homogeneous square metal plate, of which only one corner is accessible. To do this, we chose points
A, B, C and D on the side edges of the plate that form the corner.
Points A and B are both 2d from the corner, whereas C and D are each a distance d from it. The
length of the plate’s sides is much greater than d, which, in turn, is much greater than the thickness
t of the plate. If a current I enters the plate at point A, and leaves it at B, then the reading on a
voltmeter connected between C and D is V . Find the resistivity ρ of the plate material.
Solution. This problem is a harder than the previous one because it’s harder to guess a current
configuration that satisfies the boundary conditions, i.e. that the current density at the edges of the
plate is parallel to the plate. The key is that we can use the following “image current” configuration
to automatically satisfy the original problem’s boundary conditions, but on an infinite plate.
8
Kevin Zhou Physics Olympiad Handouts
We have a new current source and sink respectively at the reflections of A and B in O. The
current sources and sinks all have magnitude 2I, rather than I, because only half of the currents at
A and B actually enter and exit the physical plate, shaded in gray.
Now, if a current 2I enters the plate, the current at a distance r is 2I
2πrt, so the electric field at a
distance r is ρI
πrt (pointing radially outward), so the potential is ρI
πt log(r0/r) for some arbitrary r0,
which we’ll take to be the same for all current sources and sinks. Then
VC =
ρI
πt
(log(r0/d) + log(r0/3d) − 2log(r0/
√
5d)) =
ρI
πt
log(5/3).
By symmetry, VC = −VD. Thus,
V = 2VC =
2ρI
πt
log(5/3), ρ =
πt
2log(5/3)
V
I
.
Remark
Setups like those in the previous two problems are commonly used to measure resistivities,
but why do they use a complicated “four terminal” setup? Wouldn’t it have been easier to
just attach two terminals, send a current I through them, and measure the voltage drop
V ? The problem with this is that it also picks up the resistance R of the contacts between
the terminals and the material, along with the resistances of the wires. By having a pair of
terminals measure voltage alone, drawing negligible current, we avoid this problem.
