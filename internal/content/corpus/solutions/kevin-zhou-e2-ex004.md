---
id: kevin-zhou-e2-ex004
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e2-ex004
solution_type: author
source_document: solution-document-kevin-zhou-e2sol
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E2Sol.pdf."
---

Example 4
Find the leading interaction force between a dipole of dipole moment p and a grounded
conducting sphere of radius r, separated by a distance R ≫ r. What if the sphere is
electrically neutral instead?
Solution
Place the origin at the center of the sphere and orient the z-axis to pass through the dipole.
We can regard the dipole p = qdẑ as a combination of two charges
−q at z = R, q at z = R + d
where d is very small. In the grounded case, this induces two image charges in the sphere,
qr
R
at z =
r2
R
, −
qr
R + d
at z =
r2
R + d
approximately separated by dr2/R2. We can now use Coulomb’s law four times, but that’s
a bit tedious. Instead, decompose the image charges into a dipole moment and a net charge,
p′
=
pr3
R3
, Q′
=
qr
R
−
qr
R + d
≈
pr
R2
.
We can place both of these at the origin, because this slight displacement will only affect the
answer by subleading terms in r/R. Then the corresponding fields, far along the z-axis, are
Ep′(z) =
2kpr3
R3z3
, EQ′(z) =
kpr
R2z2
.
The first term is negligible compared to the second, due to the many powers of R and z in
the denominator. Thus, keeping only the second term, the force on the original dipole is
F = p
d
dz
E(z)
z=R
= −
2kp2r
R5
which falls off very quickly with distance. This derivation illustrates a common subtlety: it
might not always be obvious how far to approximate. We threw away terms subleading in
r/R, because we only wanted the leading contribution. But if we had applied that principle
to the image charges at the first step, we would have thrown out the tiny net charge Q′,
which actually provides the dominant contribution to the force, because of how tiny p′ is.
Now, the situation for a neutral sphere is completely different. By the logic of problem 5,
there’s a third image at the center of the sphere to enforce neutrality,
−
pr
R2
at z = 0.
The image charges can now be decomposed into a combination of two dipole moments. We
already saw the first one p′ above, while the second is, to leading order
p′′
≈
pr
R2
r2
R
=
pr3
R3
19
Kevin Zhou Physics Olympiad Handouts
with the same magnitude and direction as p′. Thus, this system of image charges has
approximate dipole moment 2p′. The corresponding force is
F = p
d
dz
4kpr3
R3z3
z=R
= −
12kp2r3
R7
which falls off even more quickly with distance. In this derivation, we didn’t have to worry
too much about getting p′′ exactly right, because there was no net charge (“monopole”)
term that could’ve overwhelmed the dipole field, so all other field contributions are
safely suppressed by more powers of r/R. (Of course, if p′′ had come out pointing the
opposite direction to p′, so that the two almost cancelled, we would’ve had to be more careful.)
The lesson of this example is not to just use exact expressions and Taylor expand at the end.
Here, that brute force approach would have required Taylor expanding six Coulomb’s law
forces out to order 1/R7, which is extraordinarily tedious. Instead, to approximate properly,
we have to think carefully in every case. Incidentally, when applied to a polar and neutral
nonpolar molecule, the 1/R7 force above is called the Debye force; it is one of the “van der
Waals forces” which are often vaguely described in chemistry classes.
