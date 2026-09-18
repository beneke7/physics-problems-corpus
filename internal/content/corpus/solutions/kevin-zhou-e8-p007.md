---
id: kevin-zhou-e8-p007
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e8-p007
solution_type: author
source_document: solution-document-kevin-zhou-e8sol
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E8Sol.pdf."
---

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
