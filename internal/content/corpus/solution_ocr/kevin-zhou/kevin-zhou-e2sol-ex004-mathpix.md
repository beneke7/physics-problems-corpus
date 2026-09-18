---
id: solution-ocr-kevin-zhou-e2sol-ex004
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e2-ex004]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 4
Find the leading interaction force between a dipole of dipole moment $p$ and a grounded conducting sphere of radius $r$, separated by a distance $R \gg r$. What if the sphere is electrically neutral instead?

Solution
Place the origin at the center of the sphere and orient the $z$-axis to pass through the dipole. We can regard the dipole $\mathbf { p } = q d \hat { \mathbf { z } }$ as a combination of two charges

$$
- q \text { at } z = R , \quad q \text { at } z = R + d
$$

where $d$ is very small. In the grounded case, this induces two image charges in the sphere,

$$
\frac { q r } { R } \text { at } z = \frac { r ^ { 2 } } { R } , \quad - \frac { q r } { R + d } \text { at } z = \frac { r ^ { 2 } } { R + d }
$$

approximately separated by $d r ^ { 2 } / R ^ { 2 }$. We can now use Coulomb's law four times, but that's a bit tedious. Instead, decompose the image charges into a dipole moment and a net charge,

$$
p ^ { \prime } = \frac { p r ^ { 3 } } { R ^ { 3 } } , \quad Q ^ { \prime } = \frac { q r } { R } - \frac { q r } { R + d } \approx \frac { p r } { R ^ { 2 } } .
$$

We can place both of these at the origin, because this slight displacement will only affect the answer by subleading terms in $r / R$. Then the corresponding fields, far along the $z$-axis, are

$$
E _ { p ^ { \prime } } ( z ) = \frac { 2 k p r ^ { 3 } } { R ^ { 3 } z ^ { 3 } } , \quad E _ { Q ^ { \prime } } ( z ) = \frac { k p r } { R ^ { 2 } z ^ { 2 } } .
$$

The first term is negligible compared to the second, due to the many powers of $R$ and $z$ in the denominator. Thus, keeping only the second term, the force on the original dipole is

$$
F = \left. p \frac { d } { d z } E ( z ) \right| _ { z = R } = - \frac { 2 k p ^ { 2 } r } { R ^ { 5 } }
$$

which falls off very quickly with distance. This derivation illustrates a common subtlety: it might not always be obvious how far to approximate. We threw away terms subleading in $r / R$, because we only wanted the leading contribution. But if we had applied that principle to the image charges at the first step, we would have thrown out the tiny net charge $Q ^ { \prime }$, which actually provides the dominant contribution to the force, because of how tiny $p ^ { \prime }$ is.

Now, the situation for a neutral sphere is completely different. By the logic of problem 5, there's a third image at the center of the sphere to enforce neutrality,

$$
- \frac { p r } { R ^ { 2 } } \text { at } z = 0 .
$$

The image charges can now be decomposed into a combination of two dipole moments. We already saw the first one $p ^ { \prime }$ above, while the second is, to leading order

$$
p ^ { \prime \prime } \approx \frac { p r } { R ^ { 2 } } \frac { r ^ { 2 } } { R } = \frac { p r ^ { 3 } } { R ^ { 3 } }
$$


with the same magnitude and direction as $p ^ { \prime }$. Thus, this system of image charges has approximate dipole moment $2 p ^ { \prime }$. The corresponding force is

$$
F = \left. p \frac { d } { d z } \frac { 4 k p r ^ { 3 } } { R ^ { 3 } z ^ { 3 } } \right| _ { z = R } = - \frac { 12 k p ^ { 2 } r ^ { 3 } } { R ^ { 7 } }
$$

which falls off even more quickly with distance. In this derivation, we didn't have to worry too much about getting $p ^ { \prime \prime }$ exactly right, because there was no net charge ("monopole") term that could've overwhelmed the dipole field, so all other field contributions are safely suppressed by more powers of $r / R$. (Of course, if $p ^ { \prime \prime }$ had come out pointing the opposite direction to $p ^ { \prime }$, so that the two almost cancelled, we would've had to be more careful.)

The lesson of this example is not to just use exact expressions and Taylor expand at the end. Here, that brute force approach would have required Taylor expanding six Coulomb's law forces out to order $1 / R ^ { 7 }$, which is extraordinarily tedious. Instead, to approximate properly, we have to think carefully in every case. Incidentally, when applied to a polar and neutral nonpolar molecule, the $1 / R ^ { 7 }$ force above is called the Debye force; it is one of the "van der Waals forces" which are often vaguely described in chemistry classes.
