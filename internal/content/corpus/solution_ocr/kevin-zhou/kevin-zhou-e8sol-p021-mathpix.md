---
id: solution-ocr-kevin-zhou-e8sol-p021
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e8-p021]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 21. Some questions about forces between dipoles and other multipoles.

(a) Above, you've shown that the force between permanent magnetic dipoles falls off as $1 / r ^ { 4 }$. How about two permanent electric dipoles?
(b) How about a permanent dipole and a permanent quadrupole?
(c) How about two permanent quadrupoles?
(d) Now consider an ion and a neutral atom. The electric field of the ion polarizes the atom; the field of that induced dipole then reacts on the ion. Show that the resulting force is attractive and falls as $1 / r ^ { 5 }$.

Solution. (a) The basic form of the fields and forces is identical, so the answer is the same.

(b) The field of a quadrupole goes like $1 / r ^ { 4 }$, so energy of the dipole goes like $U \sim m B \sim 1 / r ^ { 4 }$. Thus, the interaction energy in this case goes like $1 / r ^ { 4 }$, for a force of $1 / r ^ { 5 }$.
(c) A single quadrupole is two dipoles with moments $\mathbf { m }$ and $- \mathbf { m }$ separated by $d \mathbf { r }$ where the magnitude of the quadrupole moment is $\sim | \mathbf { m } \| d \mathbf { r } |$. (Technically, the quadrupole moment is a tensor, and the sizes of its individual components depends on the relative orientation of m and $d \mathbf { r }$, but we won't worry about that detail here, since we're only looking for the scaling of the force with $r$.) The energy of the quadrupole is
$$
\mathbf { m } \cdot \mathbf { B } ( \mathbf { r } + d \mathbf { r } ) - \mathbf { m } \cdot \mathbf { B } = \mathbf { m } \cdot ( ( \text { some sort of derivative of } \mathbf { B } ) \cdot d \mathbf { r } ) .
$$
The field of one quadrupole is $1 / r ^ { 4 }$, so its derivative is $1 / r ^ { 5 }$. Thus the energy of interaction goes like $1 / r ^ { 5 }$, for a force of $1 / r ^ { 6 }$.
(d) The field of the ion falls as $1 / r ^ { 2 }$, so the dipole moment induced is $p \sim 1 / r ^ { 2 }$. Furthermore, the dipole moment points along the field and hence the displacement between the ion and atom, indicating the force is attractive. The electric field from the dipole (and hence the force) goes as $p / r ^ { 3 } \sim 1 / r ^ { 5 }$. (You might wonder if the induced dipole then gives the ion itself a dipole moment. It does, but the resulting force is much weaker than the one we found here, between the induced dipole and the ion's overall charge.)

## 4 Electromagnetic Waves in Matter

In this section, you will work out some of the theory of electromagnetic waves in matter.


Idea 9
In the absence of any free charge or current, Maxwell's equations in matter are identical to Maxwell's equations in vacuum, except that $\epsilon _ { 0 }$ and $\mu _ { 0 }$ are replaced by $\epsilon$ and $\mu$, so the waves propagate with speed $1 / \sqrt { \epsilon \mu } = c / n$, with $E = ( c / n ) B$.
