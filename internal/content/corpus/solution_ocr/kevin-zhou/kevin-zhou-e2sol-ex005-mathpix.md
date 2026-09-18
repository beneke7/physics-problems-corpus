---
id: solution-ocr-kevin-zhou-e2sol-ex005
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e2-ex005]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 5
Estimate the interaction force between a point charge $q$ and a thin conducting rod of length $\ell$, which is a distance $L \gg \ell$ from the charge and oriented along the separation between them.

Solution
The interaction occurs because the point charge induces negative charges on the near end of the rod, and positive charges on the far end. These charges are then acted on by the electric field of the point charge, causing a force.

To get a very crude estimate, let's suppose charge $Q$ appears on the far end and charge $- Q$ appears on the near end. The resulting field produced in the middle is

$$
E \sim \frac { k Q } { \ell ^ { 2 } } .
$$

On the other hand, this needs to cancel a field from the point charge of

$$
E \sim \frac { k q } { L ^ { 2 } }
$$

which tells us that $Q \sim ( \ell / L ) ^ { 2 } q$. The force on the induced charges is then

$$
F \sim k q Q \left( \frac { 1 } { ( L + \ell ) ^ { 2 } } - \frac { 1 } { L ^ { 2 } } \right) \sim - \frac { k q Q \ell } { L ^ { 3 } } \sim - \frac { k q ^ { 2 } \ell ^ { 3 } } { L ^ { 5 } } .
$$

Again, the force is attractive, and falls off quickly with distance.
[3] Problem 20 (Physics Cup 2017). Estimate the interaction force between a point charge $q$ and an


infinitely thin circular neutral conducting disc of radius $r$ if the charge is at the axis of the disc, and the distance between the disc and the charge is $L \gg r$.

Solution. The interaction is because charges redistribute on the disc to keep it an equipotential. As an extremely rough approximation, suppose that charge $Q$ appears near the rim of the disc and charge $- Q$ appears near the center. Then by dimensional analysis, the electric field in the disc is

$$
E \sim \frac { k Q } { r ^ { 2 } } .
$$

On the other hand, the electric field due to the point charge along the disc is of order

$$
E \sim \frac { k q } { L ^ { 2 } } \frac { r } { }
$$

where the $r / L$ factor is from projecting the field along the disc. Then

$$
Q \sim q \frac { r ^ { 3 } } { L ^ { 3 } } .
$$

The force is attractive, and by Coulomb's law,

$$
F \sim k q Q \left( \frac { 1 } { L ^ { 2 } } - \frac { L } { \left( L ^ { 2 } + r ^ { 2 } \right) ^ { 3 / 2 } } \right) \sim \frac { k q ^ { 2 } r ^ { 5 } } { L ^ { 7 } } .
$$
