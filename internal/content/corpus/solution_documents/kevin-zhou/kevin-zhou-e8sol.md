---
id: solution-document-kevin-zhou-e8sol
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: author
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
extraction_method: pdftotext-raw
mapped_problems: [kevin-zhou-e8-ex002, kevin-zhou-e8-ex003, kevin-zhou-e8-ex005, kevin-zhou-e8-ex006, kevin-zhou-e8-p001, kevin-zhou-e8-p003, kevin-zhou-e8-p006, kevin-zhou-e8-p007, kevin-zhou-e8-p008, kevin-zhou-e8-p010, kevin-zhou-e8-p021, kevin-zhou-e8-p022, kevin-zhou-e8-p023]
verification_status: pending
provenance_note: "Source-provided solution document; preserved from sources/kevin_zhou/site/handouts/E8Sol.pdf."
---

Kevin Zhou Physics Olympiad Handouts
Electromagnetism VIII: Materials
Electromagnetism in matter is covered in chapters 10 and 11 of Purcell. For more on dielectrics, see
chapters II-10 and II-11 of the Feynman lectures. Electromagnetism in matter is covered in greater
detail in chapters 4, 6, and 9 of Griffiths, and chapters I-31 and II-32 through II-37 of the Feynman
lectures. For an enlightening overview of the history of magnetism, see chapter 1 of Magnetism and
Magnetic Materials by Coey. There is a total of 93 points.
1 Polarization
In E2, we introduced the basics of dielectrics. To review: when a dielectric is placed in an electric
field, dipoles inside align with the field, reducing the field value. In very symmetrical situations,
the field is simply reduced by a factor of the dielectric constant κ = ϵ/ϵ0. The total energy density
within a dielectric is ϵE2/2. This section is about problems which require more than these few facts.
To answer them, we need to think about the charge bound to the dielectric itself.
Idea 1: Bound Charge
The polarization P of a material is its electric dipole moment per unit volume. It corresponds
to a “bound” charge density
ρb = −∇ · P
within the dielectric, and a bound surface charge density
σb = P · n̂
on its surface.
Example 1
Find the electric field of a sphere with uniform polarization P and radius R.
Solution
There is no bound charge density inside the sphere, but a bound surface charge density
σb = P · r̂ = P cosθ
on its surface. We could apply Coulomb’s law to this charge density, but an easier method
is to recall that polarization just means an internal displacement of charge. This surface
charge density precisely corresponds to having two uniformly charged balls of total charge
±Q displaced by a tiny amount d so that Qd = (4πR3/3)P.
By the shell theorem, the resulting field inside is uniform, and points against P,
E = −
P
3ϵ0
,
and the field outside is exactly a dipole field, with dipole moment p = (4πR3/3)P.
1

Kevin Zhou Physics Olympiad Handouts
[1] Problem 1. An infinite cylindrical rod of radius R has a uniform polarization P.
(a) If P is perpendicular to the rod’s axis, describe E outside, and find the value of E inside.
(b) If P is parallel to the rod’s axis, find the electric field everywhere.
Solution. (a) The resulting bound charge is equivalent to having two uniform cylinders of total
linear charge density λ separated by d where λd = (πR2)P.
Outside the rod, this is equivalent to two lines of charge density ±λ separated by d. As for
inside, note that for a single cylinder with charge density ρ, Gauss’s law tells us that the field
is E = ρr/(2ϵ0). Thus, superposing the positive and negative cylinders, the field inside the
rod is
E = −
ρd
2ϵ0
= −
P
2ϵ0
which is uniform. (There’s a little paradox here: why doesn’t the limit R → ∞ of this answer
coincide with the R → ∞ limit of the result of example 1? As was discussed in a related
context in E1, the issue is that when a charge configuration is infinite, the answer is ambiguous
and depends on boundary conditions. In this problem, we are implicitly adopting boundary
conditions that yield a field with cylindrical symmetry.)
(b) In this case there’s no bound charge anywhere. (You can imagine charge displaced a bit from
infinity in one direction to infinity in the other direction.) So there is no electric field at all.
Now let’s think about how polarization arises in the first place.
Idea 2: Electric Susceptibility
A small number of insulators are “ferroelectrics”, whose crystal structure lets them maintain
a preferred polarization P in the absence of external electric fields. (You can suppose that the
preceding example and problem were implicitly about ferroelectrics.) But the vast majority
of insulators are dielectrics, whose polarization is related to the total electric field by
P = ϵ0χeE, ϵ = ϵ0(1 + χe) = ϵ0κ
where χe is the electric susceptibility and κ is the dielectric constant. The susceptibility is
nonnegative, except in some very exotic materials. The key difficulty is that above, E is the
total electric field, including that due to the bound charge, which in turn depends on P.
Example 2
A point charge q is inside a dielectric sphere of radius R with dielectric constant κ. Find the
electric field and charge density everywhere.
Solution
This is one of the simple symmetric cases where the electric field in the dielectric is simply
reduced by a factor of κ,
E =
q r̂
4πϵ0r2
×
(
1/κ r < R
1 r > R
.
2

Kevin Zhou Physics Olympiad Handouts
Inside the sphere, this corresponds to an electric polarization
P =
q
4πr2
χe
κ
r̂.
To check that this solution is actually right, we need to ensure the original point charge q,
plus the bound charge, indeed generates the claimed electric field.
The divergence of P is zero everywhere besides the origin, where negative bound charge piles
up to cancel some of the charge q. The charge at the origin is thus
q − qb = q

1 −
χe
κ

= q

1 −
κ − 1
κ

=
q
κ
which is consistent with Gauss’s law for E there. At the surface of the sphere, there is a
positive bound surface charge density
σb =
q
4πR2
χe
κ
which cancels the negative bound charge at the origin. Thus, by the shell theorem, the
electric field outside the sphere is indeed that of the point charge q alone.
Example 3
A dielectric sphere of radius R and dielectric constant κ is placed in a uniform field E0, and
as a result develops a uniform polarization P. Find P and the field inside the sphere.
Solution
In example 1, we found the electric field due to the polarized sphere itself, which we’ll call Ep.
Here, we must remember that the polarization is produced in response to the total electric
field inside the sphere,
P = χeϵ0E, E = E0 + Ep.
Using our previous result for Ep and solving the system, we find
E =
3
κ + 2
E0, P = 3
κ − 1
κ + 2
ϵ0E0.
The polarizability α of each atom is defined as the dipole moment per applied field,
p = αE0
so we have shown above that
α =
3ϵ0
n
κ − 1
κ + 2
where n is the number density of atoms. This is the Clausius–Mossotti formula; it relates
the macroscopically measurable parameter κ to the microscopic parameter α.
[2] Problem 2 (Purcell 10.10). Assume that the uniform field E0 that causes the electric field in
example 3 is produced by large capacitor plates very far away. The field lines tangent to the sphere
3

Kevin Zhou Physics Olympiad Handouts
hit each of the distant capacitor plates in a circle of radius r. Find r in terms of R and κ.
Solution. The field lines are tangent at the widest part of the sphere. Consider a Gaussian surface
which is bounded by a distant capacitor plate, a horizontal slice through the middle of the sphere,
and all of these field lines. Using the results of example 3, the charge contained inside is
Q = πR2 3(κ − 1)
κ + 2
ϵ0E0 − πr2
ϵE0
where the first term is from cutting the polarized sphere. The flux through this surface is
Φ = −
3
κ + 2
πR2
E0.
Applying Gauss’s law, we have
r =
r
3κ
κ + 2
R.
Idea 3
The “free” charge density ρf is the part of the charge density that isn’t bound, so that
ρ = ρb + ρf.
If we take the divergence of P = ϵ0χeE, we get ρb = −χeρ inside a uniform dielectric, so
ρ = ρf/κ.
That is, a uniform dielectric “screens” charges embedded within it, reducing it by a factor
of κ. That’s exactly what we saw in example 2, and it also tells us that a conductor
can be viewed as a dielectric with κ → ∞, because conductors completely expel electric fields.
The difficulty in dealing with dielectrics is when κ changes in space, such as at the boundary
of a dielectric, where a bound surface charge density σb can appear. If all the free charges in
a problem are outside of uniform dielectrics, bound charges only appear on their surfaces.
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
[1] Problem 6. An infinite cylindrical rod of radius R has a fixed, uniform magnetization M.
(a) If M is parallel to the rod’s axis, find the magnetic field everywhere.
(b) If M is perpendicular to the rod’s axis, describe B outside, and find the value of B inside.
Solution. Let ẑ point along the axis of the rods.
(a) The surface bound current density is Kb = M θ̂, which is simply that of an infinite solenoid.
So the magnetic field is µ0M inside the rod, and zero outside.
(b) Let’s say that M is parallel to x̂. Then in cylindrical coordinates, we have Kb = M sinθẑ. This
current density is equivalent to superposing two cylinders carrying uniform current density
±J ẑ, separated by d along the ŷ direction, where Jd = M.
7

Kevin Zhou Physics Olympiad Handouts
Outside the rod, the cylinders can be replaced with wires carrying current I = πR2J, and the
corresponding magnetic field was found in a problem in E3. Inside the rod, superposing the
magnetic fields of the cylinders yields B = µ0M/2.
[1] Problem 7. Consider two extremely long cylindrical rods of radius r, carrying uniform magneti-
zation M along their axis. The rods are placed so that they have the same axis of symmetry, their
magnetizations are parallel, and there is a narrow gap 2a ≪ r between them. Find the magnetic
field at the center of the gap, accounting for corrections of order a/r.
Solution. If there was no gap, we would only have a single rod, and its uniform magnetization M
corresponds to a tangential bound surface current density Kb of magnitude M everywhere along
its surface. This is the current of a solenoid, and it produces a field B = µ0M inside the rod.
Now let’s account for the gap. In the limit a ≪ r, the “missing” part of the magnetization
corresponds to the current of a circular current loop, with I = 2Ma. By the Biot–Savart law, this
loop contributes a field of µ0I/(2r). Taking this piece out, we have
B = µ0M

1 −
a
r
+ O(a2
/r2
)

.
Idea 6: Magnetic Susceptibility
Permanent magnets, such as the ones on your refrigerator, or the strong neodymium magnets
popular in science toys, are made of “hard” ferromagnets. These are materials whose crystal
structure lets them maintain a fixed magnetization M in the absence of external magnetic
fields. (The preceding example and problems were implicitly about hard ferromagnets.)
In most other materials, the magnetization is related to the magnetic field in the material by
M =
1
µ0
χm
1 + χm
B, µ = µ0(1 + χm) = µ0µr
where χm is the magnetic susceptibility, µ is called the permeability, and µr is called the
relative permeability. We’ll explain later why χm isn’t defined the same way as χe.
• Diamagnets have −1 < χm < 0 and paramagnets have χm > 0.
• Most materials are weakly diamagnetic (|χm| ≪ 1), but some are weakly paramagnetic.
• As discussed in E5, a superconductor totally expels magnetic fields, and thus can be
viewed as a “perfect diamagnet” with χm = −1 and hence µ = 0.
• A “soft” ferromagnet (such as iron) has χm ≫ 1 for weak external fields. (Though it is
typically accompanied by other phenomena, such as saturation and hysteresis.)
• It is impossible to have χm < −1, as then the energy density B2/2µ would be negative.
The material would spontaneously develop arbitrarily large B, and blow itself up.
Because magnetization can arise from freely moving electrons, bound electrons orbiting, or
the spin of electrons, these ideas can be applied to both conductors and insulators. As always,
we must be careful to remember that B is the total magnetic field, due to both whatever is
outside the material, and the magnetization of the material itself.
8

Kevin Zhou Physics Olympiad Handouts
Remark: Estimating Susceptibility
Why is it that many common solids have |χm| ≪ 1, but χe of order 1? Atoms contain a
few valence electrons of charge q orbiting with radius of order a0, the Bohr radius. To very
roughly estimate electric and magnetic susceptibility, it’s easiest to consider the extreme
case where the field is so strong that the atom is about to fall apart.
The electrons are bound by an electric field Emax ∼ q/ϵ0a2
0, so the atom will fall apart if the
external field is much larger than this. And when the electron orbits are completely deformed,
they will provide an electric dipole moment pmax ∼ qa0. So the polarizability is of order
α ∼
pmax
Emax
∼ ϵ0a3
0.
Then the electric susceptibility is
χe =
P
ϵ0E
∼
nα
ϵ0
∼ 1
because the number density of atoms is n ∼ a−3
0 . So, in a completely typical insulator, χe is
of order 1, which is indeed what we observe!
If you don’t know this, it can seem like a magical fact. Electrical engineers are often
amazed that the permittivity of free space ϵ0 is comparable to that of common materials.
For instance, it’s around half the permittivity ϵ of teflon, so does that mean “vacuum” is
like a material half as strong as teflon? But this is thinking backwards. The properties of
electromagnetism in vacuum are fundamental and have nothing to do with materials, but
they determine the structure of materials. We start with ϵ0 and use it to derive ϵ ∼ ϵ0.
Now, magnetic susceptibility is penalized by the fact that magnetic forces are suppressed by
a factor of the electron speed v. The field strength at which the magnetic force is as strong
as that of the binding electric field is Bmax ∼ Emax/v. At this point, the electrons provide
the maximum possible magnetic moment by all orbiting in the same direction, so
µmax ∼ IA ∼ (qv/a0)(a2
0) ∼ qva0.
To leading order in χm, the magnetic susceptibility is
χm ≈
µ0M
B
∼
µ0µmaxn
Bmax
∼ ϵ0µ0v2
=
v2
c2
∼ α2
∼ 10−4
where α is the fine structure constant, introduced in P1. Thus magnetic susceptibility is
typically small because relativistic effects for valence electrons are weak.
Example 5
An infinite solenoid with n turns per length and current I is filled with material with magnetic
susceptibility χm. Find the magnetic field inside.
9

Kevin Zhou Physics Olympiad Handouts
Solution
The magnetic field inside has contributions from the solenoid wire and the magnetization,
B = µ0(nI + M) = µ0nI +
χm
1 + χm
B.
Solving for B yields
B = (1 + χm)µ0nI = µnI
which can be a significant enhancement if the material is a soft ferromagnet.
[2] Problem 8. A sphere of magnetic susceptibility χm is placed in a uniform field B0, and as a result
develops a uniform magnetization M. Find M and the field B inside the sphere. Then check the
limiting cases of a superconductor and a soft ferromagnet. Do they make sense?
Solution. In this case, by the result of example 4, we have
B = B0 +
2
3
µ0M = B0 +
2
3
χm
1 + χm
B
inside the sphere. Solving for B and then for M gives
B =
1 + χm
1 + χm/3
B0, M =
χm
1 + χm/3
B0
µ0
.
For a superconductor, χm = −1, we have
B = 0, M = −
3B0
2µ0
which makes sense. For a soft ferromagnet, χm → ∞, we have
B = 3B0, M =
3B0
µ0
.
This is a bit puzzling, because for an infinite solenoid the magnetic field inside was very large, but
for a sphere it can apparently only be enhanced by a factor of 3.
As will be explained in example 6, the reason is that a sphere has a significant demagnetizing
field. The magnetization tries to align with B0, but by the time it reaches M = 3B0/µ0, the H
field inside the sphere is already completely cancelled, so no further alignment can occur.
Idea 7: The H Field
Historically, magnetism was formulated in terms of the field
H =
1
µ0
B − M.
The magnetic susceptibility was originally defined to be simple in terms of H, with
M = χmH, B = µH.
The reason H is useful is that it gives a close analogy to electrostatics. Note that
∇ × H = J − Jb
10

Kevin Zhou Physics Olympiad Handouts
so that H has no curl if there are no currents around besides the bound current. (This extra
current is sometimes called “free” current Jf.) In addition,
∇ · H = −∇ · M
which is analogous to how a polarization yields a charge density, ∇·E = −∇·P/ϵ0. Therefore,
any magnetostatic problem without free current can be mapped to an electrostatic one via
(ϵ0E,P,ρb,χe) ↔ (H,M,ρm,χm)
where ρm = −∇ · M is the “magnetic charge density”.
This is the mathematical formalization of the idea of Gilbert dipoles, introduced in E3, which
replace a true magnetic dipole with a pair of fictitious magnetic charges. At the time, we
remarked that this gives you the correct magnetic field outside of a magnet, but not inside.
The underlying reason is this analogy is actually computing H, not B. To get the correct B
within a magnetized material, we have to compute B = µ0(H + M). Heuristically, µ0M is
the magnetic field due to dipole moments right at that location, while µ0H is the magnetic
field due to all other currents and magnetic dipole moments. Finally, we note that a soft
ferromagnet can be thought of as a material within which H is approximately zero.
Remark: The History of H
If you learned physics in the United States, you might have found the preceding idea
unfamiliar, because it has been systematically removed from the introductory curriculum.
The reason comes down to history. First, it’s worth noting that the choice between covering
B and H isn’t obvious. Today we would say the B field is more fundamental, because it is
what determines the Lorentz force on a charge, and the force, torque, and interaction energy
of a dipole moment, and thereby the reading on a magnetometer. But for most of history,
one could just as well argue that it is µ0H that determines these things. After all, we can’t
embed a measuring device within a magnet. Doing so would require hollowing out a hole,
which would remove M there, which would render B just equal to µ0H.
Therefore, choosing between B and µ0H requires measuring some interaction where particles
pass through a magnet. In the 1930s, this became possible with neutron scattering, since
neutrons are electrically neutral but carry a magnetic dipole moment m. As discussed
here, the Nobel laureates Bloch and Schwinger disagreed on whether the interaction energy
was −m · B or −m · (µ0H), which corresponds to treating m as Amperian or Gilbertian,
respectively. The controversy remained open for decades, but was eventually settled by data.
At the same time, there was a growing consensus in the United States that magnetic poles
were a “useless concept” which should be banished from teaching entirely. So, when the
modern American physics curriculum was set in the 1960s, that’s exactly what happened.
For example, Halliday, Resnick, and Krane spends only a few pages covering magnetization,
and half of them are spent admonishing the reader that magnetic poles don’t exist. If
11

Kevin Zhou Physics Olympiad Handouts
you were educated in America, you probably only heard about them for a day in middle school.
Unfortunately, removing magnetic poles from the curriculum has some real costs. Experimen-
talists still think in terms of poles and H, because it’s harder to visualize how complicated
currents source B. Moreover, it’s harder to do anything with B without vector calculus
background. That’s why some other countries’ introductory physics courses put poles first.
(But some teachers don’t clearly explain how B and µ0H differ, leading to confusion later.)
In this problem set, I’ll tell you only what you need to know about H to solve theoretical
problems. If you try to dive deeper into how experimentalists use it, you’ll run into a lot more
historical cruft. For instance, they tend to prefer the “Gaussian” system, where annoying
factors of 4π are inserted into Maxwell’s equations to make the Coulomb and Biot–Savart
laws slightly simpler. Also, they use “cgs” (centimeter-gram-second) units, so all units need
to be rescaled by some number of powers of 10 and 4π. Worst of all, they have totally different
units for B (Gauss), H (Oersted), and M (emu/cm3), which are tricky to relate. I wouldn’t
recommend learning any of this unless you have to for your job.
Example 6
Using the H field, recompute the magnetic fields inside a uniformly magnetized sphere, and
a rod magnetized parallel to and perpendicular to its axis.
Solution
In the first section, we found that inside these objects,
E =

 
 
−P/3ϵ0 sphere,
−P/2ϵ0 cylinder, perpendicular
0 cylinder, parallel
Using the analogy above, we immediately conclude
H =

 
 
−M/3 sphere
−M/2 cylinder, perpendicular
0 cylinder, parallel
The minus signs make sense because the “magnetic charge” accumulates on the side that M
points to, and produces an H field in the opposite direction. Converting back to B yields
B =

 
 
2µ0M/3 sphere
µ0M/2 cylinder, perpendicular
µ0M cylinder, parallel
which precisely matches what we found in example 4 and problem 6, with much less effort.
[1] Problem 9. Repeat problem 7 using the H field.
12

Kevin Zhou Physics Olympiad Handouts
Solution. In the gap, the magnetization vanishes and we have B = µ0H, so we can use the idea of
magnetic charge to compute the field. The magnetic charge is the same as that of a parallel plate
capacitor, with circular plates of radius r and separation 2a, carrying uniform magnetic charge
density ±M. Using Coulomb’s law, we can integrate the vertical component of the field from each
plate. If s is the distance of a point on the plate from the axis of symmetry, then
B = 2
Z r
0
(2πsds)
µ0M
4π
a
(s2 + a2)3/2
= µ0M

−
a
√
s2 + a2
  r
0
= µ0M

1 −
a
√
r2 + a2

.
In the limit a ≪ r, this recovers the answer to problem 7.
Remark: Demagnetizing Fields
At a given point in an isolated magnet, µ0H is the part of B due to the rest of the magnet.
However, the above example shows that H always points against the direction of M, so a
permanent magnet is always trying to demagnetize itself! Similarly, electrically polarized
materials carry an internal “depolarization” field. This is why, in the absence of external
fields, the vast majority of materials have zero polarization and magnetization.
Before the advent of very effective “hard” ferromagnets, like neodymium magnets, magnets
had to be shaped to avoid this effect, e.g. by making them into long bars or horseshoes.
Even so, the demagnetization effect would make the field produced by the magnet a little
less than you would expect. For an average-shaped bar magnet made in the 1950s, the
magnetic poles are effectively not at the ends, but rather 10% to 20% closer together.
This bit of historical trivia is irrelevant today, but it has stuck around in the Indian physics
curriculum. Every Indian introductory physics textbook demands its students memorize
the ratio of the “magnetic length” and “geometric length” of a bar magnet, as if it were a
fundamental constant of nature rather than an obsolete rule of thumb. But different ones
don’t even agree on what the ratio is, with HC Verma giving 84%, various JEE prep sources
stating 4/5, 5/6, or 7/8, and none whatsoever explaining where the number comes from.
Such “magic formulas” are depressingly common in Indian books.
Idea 8: Magnetic Energy, Force, and Torque
The appropriate magnetic energy density depends on the material.
• If the magnetization is permanent, as in a hard ferromagnet, we should use the same
potential energy introduced in E4. Specifically, the potential energy density is −M · B.
• For all other materials, where the magnetization is induced by the presence of other fields,
the total energy density is B2/2µ.
If you use one of these formulas where the other applies, you’ll typically be off by a factor of 2.
Regardless of how the magnetization arises, the resulting force and torque in an external field
B are given by the formulas introduced in E4. Specifically, the torque density is M×B, and
the force density is ∇(M·B), where the ∇ only acts on B. Alternatively, if you’re using the
magnetic pole trick, a magnetic charge qm feels a force qmB.
13

Kevin Zhou Physics Olympiad Handouts
[3] Problem 10. A version of the method of images works for magnetic materials. Let’s suppose there
is vacuum at z > 0, and a material of relative permeability µr at z < 0. When using the method of
images, we only care about the field at z > 0, where B and H are proportional. So we can directly
use the analogy between H and E.
(a) Suppose a magnetic charge qm is a distance d above the plane. By recycling your answer to
problem 3, find the magnetic charge q′
m of the image. What does it become if the material is
a superconductor, or a soft ferromagnet?
(b) Of course, magnetic charges don’t actually exist, so let’s instead suppose a permanent magnetic
dipole moment m was a distance d above the plane, with m pointing towards the plane.
Characterize the image dipole, and find the force on the real dipole.
(c) To be even more concrete, consider a very long permanent magnet of cross-sectional area A
and uniform magnetization M along its length. When one end of the magnet is placed flat
against an iron plate, what is the force between them?
Solution. (a) When we apply the analogy described in idea 7, this problem becomes exactly the
same as that problem, with χm corresponding to χe, and thus µr corresponding to κ. We
conclude that the image magnetic charge is
q′
m = −qm
µr − 1
µr + 1
,
a distance d below the plane. Note that unlike the electric case, q′
m can have the same sign
as qm (for µr < 1), or the opposite sign (for µr > 1).
For a superconductor, µr = 0, we have q′
m = qm, which you might have already seen in a
problem in E5. For a soft ferromagnet, µr → ∞, we have q′
m = −qm. Both of these results
are compatible with what we’d expect from example 7.
(b) In this case, there’s an image dipole of magnitude
m′
= m
|µr − 1|
µr + 1
.
For µr < 1, it points in the opposite direction as the real dipole, while for µr > 1, it points in
the same direction.
Using the formula for the force on a dipole from E4, in the presence of the dipole field of the
image, we find a force towards the plane of magnitude
F =
3µ0
2π
mm′
(2d)4
=
3µ0
32π
m2
d4
µr − 1
µr + 1
.
For µr < 1, the force is instead repulsive.
(c) Here it’s easiest to use the idea of magnetic charge. We can ignore the distant end of the
magnet, because it’s very far away. The end of the magnet touching the fridge has a magnetic
charge density σm = M. For iron, which has µr → ∞, the resulting image has magnetic
charge density σ′
m = −M, so it produces a magnetic field of magnitude B′ = µ0σ′
m/2 on each
side of it. Thus, the interaction force is
F = B′
σmA =
µ0M2A
2
.
14

Kevin Zhou Physics Olympiad Handouts
[2] Problem 11. AuPhO 2019, problem 13. A neat explanation of how a fridge magnet works. You’ll
also need the accompanying answer sheets.
[5] Problem 12. Physics Cup 2024, problem 3. This relatively straightforward problem reviews almost
everything we’ve covered so far.
Solution. See the official solutions here.
Example 7: Griffiths 6.27
How does a magnetic field line bend when it passes from one medium to another?
Solution
We say the field lines “bend” because of Gauss’s law for magnetism: they can’t start or end,
so each one has to keep on going. Let’s suppose the figure above is drawn in the xz plane.
Applying Gauss’s law for magnetism in a small pillbox spanning the interface gives
Bz
1 = Bz
2.
On the other hand, since ∇ × H is zero (assuming no additional, “free” current is around),
considering an Amperian loop spanning the interface gives
Hx
1 = Hx
2 .
Combining these results gives
tanθ2
tanθ1
=
µ2
µ1
.
In other words, when a field line enters a medium with higher µ, it bends away from the
normal, and when it enters a medium with lower µ, it bends towards the normal.
This statement has two limiting cases which will be important later.
• A magnetic field line can’t entera superconductor(µ2 = 0) at all, so field lines approaching
a superconductor bend away, to become tangent to them (θ1 → 90◦).
15

Kevin Zhou Physics Olympiad Handouts
• A magnetic field line entering a soft ferromagnet (µ2 → ∞) bends towards it to enter along
the normal direction (θ1 → 0◦), similar to how electric field lines approach conductors.
It’s also possible for θ1 to be nonzero if θ2 → 90◦, but we won’t see any examples of this.
You can see both of these behaviors in the limiting cases of problem 10. In general, we
conclude that magnetic field lines are “attracted” to regions of higher µ, which makes sense
because it helps minimize the energy. Soft ferromagnets tend to keep magnetic field lines
within themselves, which is why they’re used in transformers.
[2] Problem 13 (IPhO 2012 Experiment). Water is a diamagnetic substance. A powerful cylindrical
magnet with field B is placed below the water surface.
(a) Which of the following shows the resulting shape of the water surface?
The magnet is roughly 2/3 as wide as each of these sketches.
(b) Let ρ be the density of the water. If the maximum change in height of the water surface has
magnitude h, find an approximate expression for the magnetic susceptibility χm of water.
For a very closely related, but more extreme problem, see EuPhO 2018, problem 2.
Solution. (a) For a diamagnetic substance, µ < µ0, so the magnetic field energy is higher when
water is present. The water surface is an equipotential, so a higher magnetic field energy at
some points must be compensated by a lower gravitational potential energy. Thus, the answer
is option D.
(b) Equating the change in gravitational potential energy with the change in field energy, both
per volume, gives
ρgh =
B2
2µ
−
B2
2µ0
=
B2
2µµ0
(µ0 − µ) ≈
B2
2µ2
0
(µ0 − µ)
where the last step follows because µ ≈ µ0. We thus have
χm =
µ − µ0
µ0
= −
2µ0ρgh
B2
.
With a strong magnet, and a measurement of h accurate to about 0.1mm, one can indeed
detect this effect. Note that if you treated the dipole moment as permanent, and used a
potential energy density −M · B, your answer here would be off by a factor of 2.
[3] Problem 14. NBPhO 2004, problem 6. A cute exercise with permanent magnets.
[5] Problem 15.   h 1 0IPhO 2022, problem 1. A series of exercises on spherical magnets, which uses
almost everything covered in this section.
16

Kevin Zhou Physics Olympiad Handouts
[4] Problem 16. Physics Cup 2012, problem 2. If you only know what’s taught in American intro-
ductory courses, this problem is basically impossible. If you only know what’s stated explicitly in
Griffiths, it’s very hard. But if you’ve internalized the intuition of the above examples, and the
relevant section of E5 on superconductors, it should be relatively approachable.
Solution. See the solutions here.
[5] Problem 17. Physics Cup 2018, problem 3. A substantially tougher problem which requires
solving some differential equations. I recommend starting from the fifth hint.
3 Multipoles
In this section, we explore some of the physics of dipoles and higher multipoles.
[3] Problem 18 (Purcell 10.27). Two monopoles of opposite sign form a dipole, two dipoles of opposite
sign for a quadrupole, and so on. Hence we can construct arbitrarily high multipoles using the rows
of Pascal’s triangle.
The field of a dipole falls as 1/r3, a quadrupole as 1/r4, and an octupole as 1/r5.
(a) To warm up, verify explicitly that the quadrupole field along the axis of the quadrupole starts
at 1/r4, i.e. that all lower terms cancel.
(b) [A] Prove that this cancellation occurs for general multipoles along their axis.
(c) [A] The magnitude and orientation of a dipole is specified by a vector, with three components.
How many numbers are necessary to specify the magnitude and orientation of a quadrupole?
(The linear quadrupoles here are just a special case of a general quadrupole.) Try to generalize
to arbitrary multipoles.
Section 3.4 of Griffiths explains how to decompose an arbitrary charge distribution into multipoles.
Solution. For simplicity, we set the Coulomb constant k, the unit of charge, and the charge spacing
all to 1.
(a) This can be done by brute force; for the general case, see the next part.
(b) A simple way to do this is to reason inductively. For example, an octupole field is nothing
more than two quadrupoles whose leading terms cancel, so the leading field of an octupole
has to be at least one power lower in r.
17

Kevin Zhou Physics Olympiad Handouts
However, we will give an explicit proof. A 2N-pole can be constructed from N + 1 charges,
with charge j placed at x = −j with charge (−1)j N
j

. Then the field at point x is
E(x) =
N X
j=0
(−1)j

N
j

1
(x + j)2
= x−2
N X
j=0
(−1)j

N
j
  ∞ X
k=0

−2
k

(j/x)k
.
We see that this can be split into sums of the form f(k) =
PN
j=0(−1)j N
j

jk, and the coefficient
of x−2−k is some nonzero multiple times f(k). So it suffices to show that f(k) = 0 for all
k < N, and f(N) ̸= 0. This is an exercise in algebraic sums. The key idea is to define
g(k) =
N X
j=0
(−1)j

N
j

j
k

=
N X
j=k
(−1)j

N
j

j
k

.
We see that jk can be written as a linear combination of j
0

,..., j
k

, so it suffices to show
that g(k) = 0 for all k < N, and that g(N) ̸= 0. We see that
g(k) =
N X
j=k
(−1)j

N
j

j
k

=
N X
j=k
(−1)j

N
k

N − k
j − k

=

N
k
  N X
j=k
(−1)j

N − k
j − k

=

N
k

(−1)k
· 1k=N
where we used the fact that
PM
ℓ=0(−1)ℓ M
ℓ

= 1M=0 (here 1S is 1 if and only if S is true, and
is 0 otherwise), which follows from the binomial theorem. This completes the proof.
(c) Let’s think of a general quadrupole as a superposition of two dipoles in opposite directions.
Then there are three things that determine a quadrupole: the strength of the quadrupole
moment (i.e. the prefactor of the 1/r4 field), the orientation of the first dipole, and the direction
the second dipole is displaced from it. This is 1 + 2 + 2 = 5 total parameters.
Similarly, to specify an octupole, we do the same above, then specify the direction the second
quadrupole is displaced, giving 5 + 2 = 7 parameters. In general, a 2N-pole has 2N + 1
parameters.
[3] Problem 19 (Purcell 11.23). Consider two magnetic dipoles with coplanar dipole moments.
18

Kevin Zhou Physics Olympiad Handouts
Show that the associated potential energy is
U =
µ0m1m2
4πr3
(sinθ1 sinθ2 − 2cosθ1 cosθ2).
For what orientations is this potential energy maximized or minimized?
Solution. The magnetic field from a dipole pointing in the z direction is:
B =
µ0m
4πr3
(2cosθr̂ + sinθθ̂).
Let n̂ be the unit vector perpendicular to r̂ (θ = −π/2). Then the field of m1 is
B12 =
µ0m1
4πr3
(2cosθ1r̂ + sinθ1n̂)
The potential of a dipole in a field is U = −m · B. Note that m2 = m2 cosθ2r̂ − m2 sinθ2n̂.
U = −m2 · B12 =
µ0m1m2
4πr3
(sinθ1 sinθ2 − 2cosθ1 cosθ2)
as desired. To extremize this expression, we set the partial derivatives with respect to θ1 and θ2
equal to zero. The results are
cosθ1 sinθ2 = −2sinθ1 cosθ2, sinθ1 cosθ2 = −2cosθ1 sinθ2
which implies that
cosθ1 sinθ2 = sinθ1 cosθ2 = 0.
This can only hold if
cosθ1 = cosθ2 = 0 or sinθ1 = sinθ2 = 0.
The first option implies both the angles are ±π/2, which yields a saddle point of the energy. The
second option yields the global energy minimum when (θ1,θ2) = (0,0) or (π,π), corresponding to
aligned dipoles, and the global energy maximum when (θ1,θ2) = (0,π) or (π,0), corresponding to
anti-aligned dipoles.
[2] Problem 20 (Purcell 11.36). Three magnetic compasses are placed at the corners of a horizon-
tal equilateral triangle. As in any ordinary compass, each compass needle is a magnetic dipole
constrained to rotate in a horizontal plane. The Earth’s magnetic field has been shielded. What
orientation will the compass needles eventually assume? Does your result also hold for regular
N-gons?
19

Kevin Zhou Physics Olympiad Handouts
Solution. We claim they point in the direction of the tangents to the circumcircle of the triangle.
In this case, the field at any one corner due to the compasses at the other corners points in the
tangential direction, so the compasses are all aligned with the local fields.
We can show this claim by symmetry. Consider the field at a given corner of the triangle.
Flipping about the axis that passes through this corner and the midpoint of the opposite side
negates the dipole moments at the other two corners, so it must negate the field. But physically, the
reflection operation negates the tangential component of the field. So there must only be a tangential
component, i.e. the field at this corner is purely tangential. This argument holds unchanged for
regular N-gons.
[3] Problem 21. Some questions about forces between dipoles and other multipoles.
(a) Above, you’ve shown that the force between permanent magnetic dipoles falls off as 1/r4.
How about two permanent electric dipoles?
(b) How about a permanent dipole and a permanent quadrupole?
(c) How about two permanent quadrupoles?
(d) Now consider an ion and a neutral atom. The electric field of the ion polarizes the atom; the
field of that induced dipole then reacts on the ion. Show that the resulting force is attractive
and falls as 1/r5.
Solution. (a) The basic form of the fields and forces is identical, so the answer is the same.
(b) The field of a quadrupole goes like 1/r4, so energy of the dipole goes like U ∼ mB ∼ 1/r4.
Thus, the interaction energy in this case goes like 1/r4, for a force of 1/r5.
(c) A single quadrupole is two dipoles with moments m and −m separated by dr where the
magnitude of the quadrupole moment is ∼ |m||dr|. (Technically, the quadrupole moment is a
tensor, and the sizes of its individual components depends on the relative orientation of m
and dr, but we won’t worry about that detail here, since we’re only looking for the scaling of
the force with r.) The energy of the quadrupole is
m · B(r + dr) − m · B = m · ((some sort of derivative of B) · dr).
The field of one quadrupole is 1/r4, so its derivative is 1/r5. Thus the energy of interaction
goes like 1/r5, for a force of 1/r6.
(d) The field of the ion falls as 1/r2, so the dipole moment induced is p ∼ 1/r2. Furthermore, the
dipole moment points along the field and hence the displacement between the ion and atom,
indicating the force is attractive. The electric field from the dipole (and hence the force) goes
as p/r3 ∼ 1/r5. (You might wonder if the induced dipole then gives the ion itself a dipole
moment. It does, but the resulting force is much weaker than the one we found here, between
the induced dipole and the ion’s overall charge.)
4 Electromagnetic Waves in Matter
In this section, you will work out some of the theory of electromagnetic waves in matter.
20

Kevin Zhou Physics Olympiad Handouts
Idea 9
In the absence of any free charge or current, Maxwell’s equations in matter are identical to
Maxwell’s equations in vacuum, except that ϵ0 and µ0 are replaced by ϵ and µ, so the waves
propagate with speed 1/
√
ϵµ = c/n, with E = (c/n)B.
[5] Problem 22. Suppose the regions x < 0 and x > 0 are filled with material with permittivities
ϵ1 and ϵ2, both with permeability µ0. (As mentioned above, this is typical for most materials.)
We send in an incident wave from the left with electric field Eiei(ki·r−ωit). The wave will be both
transmitted and reflected at the interface, so the total electric field is
E =
(
Eiei(ki·r−ωit) + Erei(kr·r−ωrt) x < 0,
Etei(kt·r−ωtt) x > 0.
The angles with the normal are θi, θr, and θt as shown. Note that since light is a transverse wave,
all three electric field amplitudes above are perpendicular to their corresponding wavevector.
(a) We can decompose every field into a part perpendicular to the interface (i.e. containing just
the x-component), and a part parallel to the interface (containing the other components).
Using Maxwell’s equations, argue that at the interface, E∥ and B⊥ must be continuous. Also
show that for this setup, B∥ is also continuous.
(b) Argue that by continuity of E∥ at the interface, we must have
ωi = ωr = ωt.
(c) Further argue that k
∥
i = k
∥
r = k
∥
t , and thereby derive the laws of reflection and refraction,
θi = θr, n1 sinθi = n2 sinθt.
This result is very general, and holds for all kinds of waves as long as we define ni ∝ 1/vi.
(d) Now suppose the electric fields Ei, Er, and Et are polarized perpendicular to the page. Then
continuity of E∥ gives
Ei + Er = Et.
21

Kevin Zhou Physics Olympiad Handouts
Using continuity of B∥, show that
Er
Ei
=
n1 cosθi − n2 cosθt
n1 cosθi + n2 cosθt
,
Et
Ei
=
2n1 cosθi
n1 cosθi + n2 cosθt
.
These are the Fresnel equations for light polarized perpendicular to the plane, also called
“s-polarized” light.
(e) If n1 > n2, then total internal reflection occurs when
sinθi >
n2
n1
and the wave is totally reflected. Nonetheless, Et is nonzero in this regime. To make sense
of this, show that the x-component of kt is imaginary in this regime, indicating that the
“transmitted” wave does not propagate in the region x > 0, but rather exponentially decays.
Solution. (a) For B⊥, consider a thin Gaussian pillbox that straddles the interface. By Gauss’s
law for magnetism, the magnetic flux through it must be zero. In the limit of a very thin
pillbox, this ensures the continuity of B⊥.
For E∥, consider a thin Amperian loop that straddles the interface, and consider
H
E · ds. As
the width of the loop goes to zero, the magnetic flux through it goes to zero, so this integral
must be zero. Taking loops of various orientations, this ensures the continuity of E∥.
In general, E⊥ and B∥ need not be continuous, because we can have surface charges and
currents at the interface. But in this case, both sides have the same µ0, so there are no bound
surface currents, so B∥ is continuous.
(b) At the origin, x = y = z = 0, continuity of E∥ gives
E
∥
i e−iωit
+ E∥
re−iωrt
= E
∥
t e−iωtt
.
Since the waves all hit the interface at an angle, none of the parallel amplitudes here vanish.
Then the equation can only be satisfied if ωi = ωr = ωt, so that all three exponentials have
the same time dependence.
The deeper reason behind was mentioned in M4 and W1. The differential equation the field
obeys is linear, and has no explicit time dependence. Thus, it has solutions with uniform
frequency everywhere.
(c) At the interface, x = 0, continuity of E∥ at time t = 0 gives
E
∥
i eik
∥
i ·x
+ E∥
reik
∥
r·x
= E
∥
t eik
∥
t ·x
.
As in part (b), this can only be true in general if k
∥
i = k
∥
r = k
∥
t .
For concreteness, let the y-axis point out the page, so that ki · ŷ = 0. Then we also have
kr · ŷ = kt · ŷ = 0, which implies that all three wavevectors lie in the same plane, which
was implicitly assumed in the diagram above. Then equality of the z-components gives
ki sinθi = kr sinθr = kt sinθt.
In general, for an electromagnetic wave we have ω/k = v = c/n, so k = nω/c. In this case,
all the ω’s are the same, so plugging this in gives
n1 sinθi = n1 sinθr = n2 sinθt,
which is exactly what we want.
22

Kevin Zhou Physics Olympiad Handouts
(d) The continuity of B∥ gives
Bi cosθi − Br cosθr = Bt cosθt.
Since B = En/c, this means
Ein1 cosθi − Ern1 cosθr = Etn2 cosθt.
Now with the continuity of E∥ (Ei + Er = Et), and θi = θr, we have
Ein1 cosθi − Ern1 cosθi = Ein2 cosθt + Ern2 cosθt
which yields
Er
Ei
=
n1 cosθi − n2 cosθt
n1 cosθi + n2 cosθt
,
Et
Ei
=
2n1 cosθi
n1 cosθi + n2 cosθt
as desired.
(e) In part (c) we showed that (ki)y = (kt)y and (ki)z = (kt)z, but we also know that the
magnitudes of the wavevectors obey
kt =
ω
c
n2, ki =
ω
c
n1
so that kt = (n2/n1)ki. Solving for (kt)x, we have
(kt)2
x = k2
t − (kt)2
y − (kt)2
z =

ki
n2
n1
 2
− k2
i sin2
θi.
Therefore, if sinθi > n2/n1, then (kt)2
x is negative, so that (kt)x is imaginary. This kind of
solution is called an evanescent wave.
Remark: Snell’s Law for Particles
Above, we found the angle of refraction using the conservation of kz at an interface. To
relate this to the wave speed, we used that fact that ω is conserved when a wave passes an
interface, so that |k| = ω/|v| ∝ 1/|v|.
However, we could also model light as a stream of nonrelativistic bullets, and the interface
as dividing two regions, each with constant potential energy. In that case, the analogue of
kz is pz, which is still conserved by translational symmetry. However, now the mass m is
conserved when the particles pass the interface, and we have |p| = m|v| ∝ |v|. This gives
the opposite dependence on wave velocity, so that now n/sinθ stays the same! Hundreds of
years ago, nobody could directly measure |v|, so both models were considered.
[5] Problem 23. In most common materials, µ ≈ µ0 while ϵ depends on frequency. We’ll investigate
the origin of this frequency dependence below.
(a) Model an electron in an atom as a mass m with charge q attached to a spring, with natural
angular frequency ω0 and a damping force −mγv, in an electric field E0e−iωt. Write down
the equation of motion for the electron.
23

Kevin Zhou Physics Olympiad Handouts
(b) The atomic polarizability α is defined by p = αE. Show that
α =
q2/m
ω2
0 − ω2 − iγω
.
Now we restrict to a gas with small number density n, so that nα ≪ ϵ0. For simplicity, you may
also assume that the damping is weak, γ ≪ ω0. Now, the Clausius–Mossotti formula reduces to
ϵ = ϵ0 + nα
and α is a complex number, so we learn that ϵ is also complex.
(c) The wavevector and angular frequency are related by k2 = µϵω2. Explain why the fact that ϵ
is complex indicates that waves can be absorbed.
(d) What value of ω maximizes the absorption rate of the electromagnetic waves? Roughly how
many wavelengths does such a wave propagate before being mostly absorbed?
(e) What value of ω maximizes the speed of the electromagnetic waves, and what is that speed?
(f) Transparent objects such as glass can be modeled as having a very high resonant frequency,
much higher than that of visible light. Does blue light or red light refract more when passing
from air to glass?
The intuitive reason that these electrons can affect the propagation speed of light is because they
emit secondary electromagnetic waves that are out of phase with the original wave; this “pushes” the
phase of the composite wave forward or backward, affecting the phase velocity. A nice explanation
of this can be found in chapter I.31 of the Feynman lectures.
Solution. (a) We have
mr̈ = −mω2
0r − mγv + qE0e−iωt
.
(b) Suppose r = r0e−iωt where r0 is potentially complex. Then, we see that E0 ∥ r0 and
−mω2
r = −mω2
0r + mγiωr + q(E0/r0)r.
Thus,
E0
r0
=
m(ω2
0 − ω2 − iγω)
q
.
Using p = qr yields the result.
(c) If ϵ is complex, then with µ ≈ µ0 and ω2 being real, then k2 = µϵω2 will also be complex.
Thus with a complex wavevector k, the field of E0ei(k·x−ωt) will exponentially decay.
(d) The absorption arises from the imaginary part of of kx. With k = ω
√
µϵ ≈ ω
√
µ0ϵ0(1 + nα
2ϵ0
),
the absorption rate is maximized when the imaginary part of k is maximized, and
β ≡ Im(k) = Im

ωn
2cϵ0
α

=
ωn
2cϵ0
q2/m
(ω2
0 − ω2)2 + (ωγ)2
(γω)
=
q2γn
2mcϵ0
ω2
(ω2
0 − ω2)2 + γ2ω2
24

Kevin Zhou Physics Olympiad Handouts
The maximum value of this occurs when
dβ
dω2
∝ (ω2
0 − ω2
)2
+ γ2
ω2
− ω2
(2(ω2
− ω2
0) + γ2
)

= 0
which simplifies to yield
ω4
0 − ω4
= 0.
So an electromagnetic wave with angular frequency ω = ω0 has the maximum absorption rate.
The electric field will have a factor of e−βx, and at ω = ω0, β = q2n
2γmcϵ0
. The value of the real
wavevector Rek will be close to (note that Re(α) = 0 at ω = ω0):
Re(k) =
ω0
c

1 + Re

nα
2ϵ0

=
ω0
c
Then for the wave to fall off by a factor of e, the wave will need to travel a distance of 1
β ,
which is 1
βλ = k
2πβ wavelengths. Thus,
k
2πβ
=
ω0γmϵ0
πq2n
is the number of wavelengths it will travel before the amplitude gets reduced by a factor of e.
(e) The phase velocity is maximized when ω
Rek, or Re 1 √
µϵ is maximized.
vp = Re
1
√
µϵ
≈ c

1 − Re
1
2
nα
ϵ0

= c +
cq2n
2mϵ0
ω2 − ω2
0
(ω2 − ω2
0)2 + (γω)2
Differentiating with respect to ω2 and finding where it’s zero yields
(ω2
− ω2
0)2
+ γ2
ω2
− (ω2
− ω2
0)(2(ω2
− ω2
0) + γ2
) = 0
(ω2
− ω2
0)2
= ω2
0γ2
ω2
= ω2
0 ± ω0γ
Looking at the original, the smaller solution yields the minimum velocity, and the larger
solution yields the maximum velocity (which happens to be greater than c). The maximum
phase velocity is
vmax = c +
cq2n
2mϵ0
ω0γ
(ω0γ)2 + γ2(ω2
0 + ω0γ)
(f) From the previous part, we have
vp = c −
cq2n
2mϵ0
ω2
0 − ω2
(ω2 − ω2
0)2 + (γω)2
and now we know that ω0 ≫ ω, so
vp
c
≈ 1 −
q2n
2mϵ0
ω2
0 − ω2
ω4
0 − 2ω2
0ω2 + (γω)2
≈ 1 −
q2n
2mϵ0ω2
0
(1 + ω2
/ω2
0).
Thus, increasing the frequency would decrease vp and increase the index of refraction, so blue
light would refract more.
[5] Problem 24.   h 1 0IPhO 2002, problem 1. A neat application of electromagnetic waves in matter.
[5] Problem 25.   h 1 0APhO 2007, problem 2. A problem on an exotic negative index of refraction.
25

Kevin Zhou Physics Olympiad Handouts
Remark
Above, we considered the response of a medium composed of atoms, obeying p = αE. However,
this relation is just an approximation, like Hooke’s law. For larger electric fields, higher order
terms are necessary,
p = αE + α′
E2
+ ...
which lead to strange effects, studied in the field of nonlinear optics. For example, suppose
we send in light of angular frequency ω. Then
E2
∝ cos2
(ωt) =
1 + cos(2ωt)
2
.
That means that a nonlinearmedium can respond to light at angularfrequency ω by oscillating,
and hence emitting light, at angular frequency 2ω. This phenomenon is called frequency
doubling, or second-harmonic generation, and converts red light to ultraviolet. Similarly, for
a cubic nonlinearity, you can use trigonometric identities to show that frequency tripling can
occur.
5 Electromagnetic Systems
In this section we’ll consider problems that use everything we’ve covered, with a focus on techno-
logical applications and systems with multiple moving parts.
[3] Problem 26. This is a rewrite of NBPhO 2007 problem 3, which has some typos and ambiguities.
Suppose particles of mass m, charge e > 0, and kinetic energy eU0 are produced at point A, all
traveling to the right. The particles are not produced at exactly the same time, but we would like
them to arrive at point D at the same time. This is known as temporal focusing.
To do this, we place a pair of parallel plates along the path, with width a. The plates have the
same time-dependent voltage U(t), while the voltage outside the plates is held at zero. Thus, the
electric field is only nonzero near point B, where the particles enter the plates, and point C, where
the particles exit the plates. The particles then travel a distance b ≫ a to point D.
(a) Suppose the first particle reaches point B at time t = 0, and that U(0) = U′(0) = 0. Find the
U(t) such that all the next particles reach point D at the same time. Assume that |U(t)| ≪ U0.
(b) The voltage cannot become arbitrarily high, so every time T it resets to zero and the process
begins again. As a result, particles are periodically focused into clumps. On average, what
fraction of the particles do not make it into a clump? Assume that T is much larger than the
time it takes a particle to cross the plates.
Solution. Here’s a solution adapted for this version of the problem.
26

Kevin Zhou Physics Olympiad Handouts
(a) Note that the particle does not accelerate when it is between the plates, even when U(t)
changes, since the electric field vanishes there. The situation is analogous to a ball rolling on
a flat table while the entire table is being lifted up.
Now consider the particle that enters the plates at time t and exits at time t′. It loses a kinetic
energy eU(t) when it enters, then gains a kinetic energy eU(t′) when it exits. Therefore, if U(t)
is time-dependent, the particle can have a net change in speed, which allows later particles to
move faster to D.
To make this concrete, let ta = a/v0 and tb = b/v0, where eU0 = mv2
0/2. The approximations
of the problem allow us to neglect the particles’ change in speed while between the plates,
since it’s penalized by factors of both a/b and U(t)/U0. Then a particle that enters the plates
at time t exits at time t′ ≈ t + ta. The extra energy imparted must shorten the time it takes
to go from C to D by an amount t + t0, where t0 is an arbitrary constant. Then
t + t0 ≈ tb
∆v
v
≈
tb
2
∆K
eU0
≈
tb
2
U(t + ta) − U(t)
U0
.
In other words, the finite difference of U(t) is a linear function of t, which means that U(t) is
a quadratic polynomial. The given conditions U(0) = U′(0) = 0 fix U(t) ∝ t2, and matching
the coefficients of t on both sides gives
U(t) =
U0
tatb
t2
=
2eU2
0
abm
t2
.
(b) When the voltage resets to zero, all the particles that were between the plates won’t get
focused correctly. So the fraction that don’t get focused is approximately
ta
T
=
a
T
r
m
2eU0
.
Note that for this solution to make sense, we need ta ≪ T, but we also need T to be short
enough so that |U(t)| ≪ U0, which corresponds to T ≪
√
tatb. Both conditions can be satisfied
simultaneously, since a ≪ b.
[4] Problem 27.   T 1 0IPhO 2004, problem 3. A practical problem which also reviews damped/driven
oscillations.
[4] Problem 28. NBPhO 2014, problem 1. A challenging problem about a complex nonlinear circuit.
[5] Problem 29. Physics Cup 2020, problem 1. (It’s not stated explicitly, but you should assume the
rod is an insulator with zero electric susceptibility. Alternatively, you can suppose the rod has some
electric susceptibility, but it’s too thin to have an effect on the dynamics of the metal balls.)
Solution. See the official solutions here.
27
