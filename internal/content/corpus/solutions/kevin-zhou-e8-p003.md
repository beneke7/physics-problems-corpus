---
id: kevin-zhou-e8-p003
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e8-p003
solution_type: author
source_document: solution-document-kevin-zhou-e8sol
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E8Sol.pdf."
---

[3] Problem 3. A version of the method of images, introduced in E2, works for dielectrics. Let’s
suppose there is vacuum at z > 0, a dielectric κ at z < 0, and a point charge q a distance d above
the plane z = 0. We need to find the surface bound charge density σb that appears on the plane.
(a) Let Ez
0 be the z-component of the electric field due to the point charge alone. At a given
point just below the plane z = 0, find Ez in terms of Ez
0 and σb.
(b) Use this result to solve for σb in terms of Ez
0 and κ.
(c) Your answer will be exactly the same as what one gets for a conductor at z < 0, multiplied
by a κ-dependent constant. Using this information, characterize the image charge and find
the force on the real charge.
Solution. (a) By an elementary application of Gauss’s law, the result is
Ez
= Ez
0 −
σb
2ϵ0
.
4
Kevin Zhou Physics Olympiad Handouts
(b) By the definition of χe, we know that just under the plane,
σb = Pz
= ϵ0χeEz
.
Combining this with the result of part (a) and solving for σb gives
σb =
χe
χe + 2
(2ϵ0Ez
0) =
κ − 1
κ + 1
(2ϵ0Ez
0).
(c) A conductor corresponds to the limit κ → ∞, where we simply have σb = 2ϵ0Ez
0, and the
electric field inside the conductor vanishes. Evidently, for a general dielectric this result is
multiplied by (κ−1)/(κ+1). We therefore conclude that the image charge is −q(κ−1)/(κ+1),
a distance d below the plane. The force on the real charge is given by Coulomb’s law,
F =
q2
16πϵ0d2
κ − 1
κ + 1
and is directed towards the dielectric.
[3] Problem 4 (Purcell 10.2). A rectangular capacitor with side lengths a and b has separation s ≪ a,b.
It is partially filled with a dielectric with dielectric constant κ. The overlap distance is x.
The capacitor is isolated and has constant charge Q.
(a) What is the energy stored in the system?
(b) Using the result of part (a), what is the force on the dielectric? Which direction does it point?
(c) Is your answer to part (b) affected by the presence of fringe fields near the interface?
Solution. (a) The system consists of two capacitors in parallel, with capacitances C1 = ϵ0(b −
x)a/s and C2 = κϵ0xa/s. Thus,
C = ϵ0(a/s)((κ − 1)x + b)
which gives
U =
Q2
2C
=
Q2s
2ϵ0a(b + (κ − 1)x)
.
(b) Note that
F = −
dU
dx
=
Q2s(κ − 1)
2ϵ0a(b + (κ − 1)x)2
.
The sign is positive, so it points in direction of increasing x, so the slab is pulled in.
(c) Fringe fields don’t change the result of part (b). The presence of fringe fields does change
the energy found in part (a), but this has essentially no effect on the derivative of the energy,
because shifting the dielectric just shifts the fringe field over essentially unchanged.
5
Kevin Zhou Physics Olympiad Handouts
Of course, from a force perspective, all of the force is due to the fringe fields, because those
are the only fields with a horizontal component; this paper gives such a calculation. The fact
that you can get the same answer, by using an energy-based derivation that doesn’t depend
on the fringe fields, or by a force-based derivation that relies entirely on the fringe fields, is
just another example of conservation of energy giving us nontrivial information.
[3] Problem 5 (Griffiths 4.28). Two long coaxial cylindrical metal tubes of inner radius a and outer
radius b stand vertically in a tank of dielectric oil, with susceptibility χe and mass density ρ. The
inner one is maintained at potential V , and the outer one is grounded. To what height h does the
oil rise in the space between the tubes?
Solution. The field in the region with no oil is E = λ
2πϵ0r, and with the oil is E′ = λ′
2πϵr where λ′ is
the free charge density. Thus,
V =
λ
2πϵ0
log(b/a),
and equating with the oil part, we get that λ′ = κλ, as expected. Now, the total charge on this
effective capacitor is
Q = λ′
h + λ(ℓ − h) = λ(χeh + ℓ),
so
C =
Q
V
= 2πϵ0
χeh + ℓ
log(b/a)
.
We know the net force is 1
2V 2(dC/dh) (note that there is not a minus sign here because of the work
done by the battery, as explained in a problem in E2). The gravitational force is ρπgh(b2 − a2), so
equating and solving for h gives
h =
ϵ0χeV 2
ρ(b2 − a2)g log(b/a)
.
2 Magnetization
Idea 4
As discussed in E5, materials contain two kinds of magnetic dipole moments: the “orbital”
part, due to moving electrons, and the “spin” part, due to the electrons’ intrinsic magnetic
moments. For most materials, in the absence of external magnetic fields, these dipole
moments point in random directions, and thus sum to zero on average.
When such a material is placed in a magnetic field, two things happen at once:
• The spins partially align with the field, producing a net dipole moment along B.
• The orbits are affected by the changing field in accordance with Lenz’s law, and thus
produce a net dipole moment against B.
The first effect tends to be somewhat stronger, and tends to make the material paramagnetic,
but it’s only present in materials with unpaired electron spins. The second effect is always
present, and tends to make the material diamagnetic.
This can be a bit tricky to remember, because it seems opposite to the definition of a dielectric,
where the internal electric dipoles try to align with the external field. The reason it makes
6
Kevin Zhou Physics Olympiad Handouts
sense is that inside an electric dipole, the electric field points against the dipole moment,
while inside a magnetic dipole, the magnetic field points with the dipole moment, as discussed
in E3. So, both dielectrics and diamagnets try to reduce the applied field within them.
Idea 5: Bound Currents
The magnetization M of a material is its magnetic dipole moment per unit volume. It
corresponds to a bound current density
Jb = ∇ × M
as well as a surface bound current density
Kb = M × n̂
on its surface.
Example 4
Find the magnetic field of a sphere with uniform magnetization M and radius R.
Solution
In this case Jb is zero in the sphere, while at the sphere’s surface,
Kb = M × r̂ = M sinθϕ̂
where we worked in spherical coordinates and aligned M with the z-axis. However, this is
precisely the current density of a rotating, uniformly charged sphere, as we discussed in E3.
Scaling the constants appropriately, we find that inside,
B =
2
3
µ0M
which should be compared with example 1. Outside, the field is exactly a magnetic dipole
field, with m = (4πR3/3)M.
