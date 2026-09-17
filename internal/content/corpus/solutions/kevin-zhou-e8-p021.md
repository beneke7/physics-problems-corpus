---
id: kevin-zhou-e8-p021
source: kevin-zhou
language: en
solution_language: en
translated: false
problem: kevin-zhou-e8-p021
solution_type: author
source_document: solution-document-kevin-zhou-e8sol
source_pdf: sources/kevin_zhou/site/handouts/E8Sol.pdf
figure_files: []
provenance_note: "Source-provided solution section from sources/kevin_zhou/site/handouts/E8Sol.pdf."
---

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
