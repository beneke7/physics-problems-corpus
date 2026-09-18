---
id: solution-ocr-nbpho-2017-s-p6
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2017_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2017-loop]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
6. LOOP
i) The loop starts to move because of induction. A changing magnetic field induces an EMF to the loop, which causes current to flow. The external magnetic field exerts a force to the current-carrying wire.

The EMF induced in the loop is

$$
U = - \frac { d \phi } { d t } = - A _ { l } \frac { d B } { d t } ,
$$

where $A _ { l } = l d$.
The current is $I = U / R$ where

$$
R = \sigma \frac { s } { A _ { w } }
$$

with $s = 2 h + 2 l , A _ { w }$ the cross-sectional area of the wire and $\sigma$ the resistivity of copper.

Thus

$$
I = U / R = \frac { A _ { l } \frac { d B } { d t } A _ { w } } { \sigma s } = 0.0705 \mathrm {~A}
$$

The net force exerted by the magnetic field is $F = I l B$ and the acceleration

$$
\begin{gathered}
a = F / m = \frac { A _ { l } \frac { d B } { d t } A _ { w } l B } { \sigma s \cdot \rho A _ { w } s } = \frac { A _ { l } \frac { d B } { d t } l B } { \sigma \rho s ^ { 2 } } \\
a = 0.627 \mathrm {~m} / \mathrm { s } ^ { 2 } \approx 0.63 \mathrm {~m} / \mathrm { s } ^ { 2 }
\end{gathered}
$$

(Forces exerted by the external field on the other sides are either zero or cancel out. The magnetic field caused by the current itself is negligible compared to the external field. The inductance of the coil is very small compared to the EMF and the current is approximately constant, as the speed of the coil is very small and the external magnetic field changes at a constant rate. The magnetic forces between different parts are internal and do not affect the situation. The magnetic field of the current carrying wire
itself is, of course, considerably close to the wire itself but this is always the case when $F = I l B$ is used. This is the root cause of the force and thus OK.)
ii) a) The cross-sectional area cancels out in the previous, which means that the answer remains the same.
(Twice thicker wire has one quarter the resistance which means four times larger current and force. The mass also quadruples, however, which means that acceleration does not change.)
b) The loop is replaced by a coil with three turns, which gives a three times larger EMF. The wire is also three times longer and thus has three times the resistance. Current stays the same.

This current passes three times through the $l$-side, which give three times the force. The wire, however, has three times the mass and acceleration stays the same.

Mathematically

$$
\begin{gathered}
a = F / m = \frac { 3 A _ { l } \frac { d B } { d t } A _ { w } 3 l B } { \sigma 3 s \cdot \rho A _ { w } 3 s } = \frac { A _ { l } \frac { d B } { d t } l B } { \sigma \rho s ^ { 2 } } , \\
a = 0.627 \mathrm {~m} / \mathrm { s } ^ { 2 } \approx 0.63 \mathrm {~m} / \mathrm { s } ^ { 2 }
\end{gathered}
$$

where symbols denote the original values.
(The same considerations apply to the coil. Especially all the effects between the windings are internal. The current is still constant. The simple force formula is applied in e.g. calculation of the torque exerted on a currentcarrying coil by an external field, where we often have hundreds of windings and a considerable current.)
c) The cross-section cancels out and we can replace 3 by 2 in the previous calculation. The acceleration is still the same.
(Twice larger EMF, four times larger resistance and two times through the field means the same force. Mass is the same.)
d) The largest acceleration is given by the material for which the product of resistivity and density is the smallest. Aluminum is good, but lithium seems to be the best.
e) We have doubled the dimensions, which means

$$
\begin{gathered}
a = F / m = \frac { 4 A _ { l } \frac { d B } { d t } A _ { w } 2 l B } { \sigma 2 s \cdot \rho A _ { w } 2 s } = 2 \frac { A _ { l } \frac { d B } { d t } l B } { \sigma \rho s ^ { 2 } } , \\
a = 1.253 \mathrm {~m} / \mathrm { s } ^ { 2 } \approx 1.25 \mathrm {~m} / \mathrm { s } ^ { 2 }
\end{gathered}
$$

where symbols denote the original values.
