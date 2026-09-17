---
id: kevin-zhou-e8-ex006
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e8-ex006
solution_type: author
source_document: solution-document-kevin-zhou-e8sol
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E8Sol.pdf."
---

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

−
a
√
s2 + a2
 r
0
= µ0M

1 −
a
√
r2 + a2

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
