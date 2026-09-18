---
id: solution-ocr-kevin-zhou-e8sol-p007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e8-p007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[1] Problem 7. Consider two extremely long cylindrical rods of radius $r$, carrying uniform magnetization $M$ along their axis. The rods are placed so that they have the same axis of symmetry, their magnetizations are parallel, and there is a narrow gap $2 a \ll r$ between them. Find the magnetic field at the center of the gap, accounting for corrections of order $a / r$.

Solution. If there was no gap, we would only have a single rod, and its uniform magnetization M corresponds to a tangential bound surface current density $\mathbf { K } _ { b }$ of magnitude $M$ everywhere along its surface. This is the current of a solenoid, and it produces a field $\mathbf { B } = \mu _ { 0 } \mathbf { M }$ inside the rod.

Now let's account for the gap. In the limit $a \ll r$, the "missing" part of the magnetization corresponds to the current of a circular current loop, with $I = 2 M a$. By the Biot-Savart law, this loop contributes a field of $\mu _ { 0 } I / ( 2 r )$. Taking this piece out, we have

$$
B = \mu _ { 0 } M \left( 1 - \frac { a } { r } + \mathcal { O } \left( a ^ { 2 } / r ^ { 2 } \right) \right) .
$$

## Idea 6: Magnetic Susceptibility

Permanent magnets, such as the ones on your refrigerator, or the strong neodymium magnets popular in science toys, are made of "hard" ferromagnets. These are materials whose crystal structure lets them maintain a fixed magnetization M in the absence of external magnetic fields. (The preceding example and problems were implicitly about hard ferromagnets.)

In most other materials, the magnetization is related to the magnetic field in the material by

$$
\mathbf { M } = \frac { 1 } { \mu _ { 0 } } \frac { \chi _ { m } } { 1 + \chi _ { m } } \mathbf { B } , \quad \mu = \mu _ { 0 } \left( 1 + \chi _ { m } \right) = \mu _ { 0 } \mu _ { r }
$$

where $\chi _ { m }$ is the magnetic susceptibility, $\mu$ is called the permeability, and $\mu _ { r }$ is called the relative permeability. We'll explain later why $\chi _ { m }$ isn't defined the same way as $\chi _ { e }$.

- Diamagnets have $- 1 < \chi _ { m } < 0$ and paramagnets have $\chi _ { m } > 0$.
- Most materials are weakly diamagnetic $\left( \left| \chi _ { m } \right| \ll 1 \right)$, but some are weakly paramagnetic.
- As discussed in E5, a superconductor totally expels magnetic fields, and thus can be viewed as a "perfect diamagnet" with $\chi _ { m } = - 1$ and hence $\mu = 0$.
- A "soft" ferromagnet (such as iron) has $\chi _ { m } \gg 1$ for weak external fields. (Though it is typically accompanied by other phenomena, such as saturation and hysteresis.)
- It is impossible to have $\chi _ { m } < - 1$, as then the energy density $B ^ { 2 } / 2 \mu$ would be negative. The material would spontaneously develop arbitrarily large $B$, and blow itself up.

Because magnetization can arise from freely moving electrons, bound electrons orbiting, or the spin of electrons, these ideas can be applied to both conductors and insulators. As always, we must be careful to remember that B is the total magnetic field, due to both whatever is outside the material, and the magnetization of the material itself.


Remark: Estimating Susceptibility
Why is it that many common solids have $\left| \chi _ { m } \right| \ll 1$, but $\chi _ { e }$ of order 1? Atoms contain a few valence electrons of charge $q$ orbiting with radius of order $a _ { 0 }$, the Bohr radius. To very roughly estimate electric and magnetic susceptibility, it's easiest to consider the extreme case where the field is so strong that the atom is about to fall apart.

The electrons are bound by an electric field $E _ { \text {max } } \sim q / \epsilon _ { 0 } a _ { 0 } ^ { 2 }$, so the atom will fall apart if the external field is much larger than this. And when the electron orbits are completely deformed, they will provide an electric dipole moment $p _ { \text {max } } \sim q a _ { 0 }$. So the polarizability is of order

$$
\alpha \sim \frac { p _ { \max } } { E _ { \max } } \sim \epsilon _ { 0 } a _ { 0 } ^ { 3 } .
$$

Then the electric susceptibility is

$$
\chi _ { e } = \frac { P } { \epsilon _ { 0 } E } \sim \frac { n \alpha } { \epsilon _ { 0 } } \sim 1
$$

because the number density of atoms is $n \sim a _ { 0 } ^ { - 3 }$. So, in a completely typical insulator, $\chi _ { e }$ is of order 1, which is indeed what we observe!

If you don't know this, it can seem like a magical fact. Electrical engineers are often amazed that the permittivity of free space $\epsilon _ { 0 }$ is comparable to that of common materials. For instance, it's around half the permittivity $\epsilon$ of teflon, so does that mean "vacuum" is like a material half as strong as teflon? But this is thinking backwards. The properties of electromagnetism in vacuum are fundamental and have nothing to do with materials, but they determine the structure of materials. We start with $\epsilon _ { 0 }$ and use it to derive $\epsilon \sim \epsilon _ { 0 }$.

Now, magnetic susceptibility is penalized by the fact that magnetic forces are suppressed by a factor of the electron speed $v$. The field strength at which the magnetic force is as strong as that of the binding electric field is $B _ { \text {max } } \sim E _ { \text {max } } / v$. At this point, the electrons provide the maximum possible magnetic moment by all orbiting in the same direction, so

$$
\mu _ { \max } \sim I A \sim \left( q v / a _ { 0 } \right) \left( a _ { 0 } ^ { 2 } \right) \sim q v a _ { 0 } .
$$

To leading order in $\chi _ { m }$, the magnetic susceptibility is

$$
\chi _ { m } \approx \frac { \mu _ { 0 } M } { B } \sim \frac { \mu _ { 0 } \mu _ { \max } n } { B _ { \max } } \sim \epsilon _ { 0 } \mu _ { 0 } v ^ { 2 } = \frac { v ^ { 2 } } { c ^ { 2 } } \sim \alpha ^ { 2 } \sim 10 ^ { - 4 }
$$

where $\alpha$ is the fine structure constant, introduced in P1. Thus magnetic susceptibility is typically small because relativistic effects for valence electrons are weak.
