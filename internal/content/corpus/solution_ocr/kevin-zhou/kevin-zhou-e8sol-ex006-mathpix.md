---
id: solution-ocr-kevin-zhou-e8sol-ex006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e8-ex006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Example 6

Using the H field, recompute the magnetic fields inside a uniformly magnetized sphere, and a rod magnetized parallel to and perpendicular to its axis.

## Solution

In the first section, we found that inside these objects,

$$
\mathbf { E } = \begin{cases} - \mathbf { P } / 3 \epsilon _ { 0 } & \text { sphere, } \\ - \mathbf { P } / 2 \epsilon _ { 0 } & \text { cylinder, perpendicular } \\ 0 & \text { cylinder, parallel } \end{cases}
$$

Using the analogy above, we immediately conclude

$$
\mathbf { H } = \begin{cases} - \mathbf { M } / 3 & \text { sphere } \\ - \mathbf { M } / 2 & \text { cylinder, perpendicular } \\ 0 & \text { cylinder, parallel } \end{cases}
$$

The minus signs make sense because the "magnetic charge" accumulates on the side that M points to, and produces an H field in the opposite direction. Converting back to B yields

$$
\mathbf { B } = \begin{cases} 2 \mu _ { 0 } \mathbf { M } / 3 & \text { sphere } \\ \mu _ { 0 } \mathbf { M } / 2 & \text { cylinder, perpendicular } \\ \mu _ { 0 } \mathbf { M } & \text { cylinder, parallel } \end{cases}
$$

which precisely matches what we found in example 4 and problem 6, with much less effort.
[1] Problem 9. Repeat problem 7 using the $\mathbf { H }$ field.


Solution. In the gap, the magnetization vanishes and we have $\mathbf { B } = \mu _ { 0 } \mathbf { H }$, so we can use the idea of magnetic charge to compute the field. The magnetic charge is the same as that of a parallel plate capacitor, with circular plates of radius $r$ and separation $2 a$, carrying uniform magnetic charge density $\pm M$. Using Coulomb's law, we can integrate the vertical component of the field from each plate. If $s$ is the distance of a point on the plate from the axis of symmetry, then

$$
B = 2 \int _ { 0 } ^ { r } ( 2 \pi s d s ) \frac { \mu _ { 0 } M } { 4 \pi } \frac { a } { \left( s ^ { 2 } + a ^ { 2 } \right) ^ { 3 / 2 } } = \left. \mu _ { 0 } M \left( - \frac { a } { \sqrt { s ^ { 2 } + a ^ { 2 } } } \right) \right| _ { 0 } ^ { r } = \mu _ { 0 } M \left( 1 - \frac { a } { \sqrt { r ^ { 2 } + a ^ { 2 } } } \right) .
$$

In the limit $a \ll r$, this recovers the answer to problem 7.
Remark: Demagnetizing Fields
At a given point in an isolated magnet, $\mu _ { 0 } \mathbf { H }$ is the part of $\mathbf { B }$ due to the rest of the magnet. However, the above example shows that $\mathbf { H }$ always points against the direction of $\mathbf { M }$, so a permanent magnet is always trying to demagnetize itself! Similarly, electrically polarized materials carry an internal "depolarization" field. This is why, in the absence of external fields, the vast majority of materials have zero polarization and magnetization.

Before the advent of very effective "hard" ferromagnets, like neodymium magnets, magnets had to be shaped to avoid this effect, e.g. by making them into long bars or horseshoes. Even so, the demagnetization effect would make the field produced by the magnet a little less than you would expect. For an average-shaped bar magnet made in the 1950s, the magnetic poles are effectively not at the ends, but rather 10\% to 20\% closer together.

This bit of historical trivia is irrelevant today, but it has stuck around in the Indian physics curriculum. Every Indian introductory physics textbook demands its students memorize the ratio of the "magnetic length" and "geometric length" of a bar magnet, as if it were a fundamental constant of nature rather than an obsolete rule of thumb. But different ones don't even agree on what the ratio is, with HC Verma giving 84\%, various JEE prep sources stating 4/5, 5/6, or 7/8, and none whatsoever explaining where the number comes from. Such "magic formulas" are depressingly common in Indian books.

Idea 8: Magnetic Energy, Force, and Torque
The appropriate magnetic energy density depends on the material.

- If the magnetization is permanent, as in a hard ferromagnet, we should use the same potential energy introduced in E4. Specifically, the potential energy density is $- \mathbf { M } \cdot \mathbf { B }$.
- For all other materials, where the magnetization is induced by the presence of other fields, the total energy density is $B ^ { 2 } / 2 \mu$.

If you use one of these formulas where the other applies, you'll typically be off by a factor of 2.
Regardless of how the magnetization arises, the resulting force and torque in an external field B are given by the formulas introduced in E4. Specifically, the torque density is $\mathbf { M } \times \mathbf { B }$, and the force density is $\nabla ( \mathbf { M } \cdot \mathbf { B } )$, where the ∇ only acts on B. Alternatively, if you're using the magnetic pole trick, a magnetic charge $q _ { m }$ feels a force $q _ { m } \mathbf { B }$.
