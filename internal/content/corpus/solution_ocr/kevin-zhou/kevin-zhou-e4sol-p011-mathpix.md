---
id: solution-ocr-kevin-zhou-e4sol-p011
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e4-p011]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 11. An electron beam is accelerated from rest by applying an electric field $E$ for a time $t$, and subsequently guided by magnetic fields. These magnetic fields are produced with a series of coils, which carry currents $I _ { i }$.

Now suppose the apparatus is repurposed to shoot proton beams. Suppose a proton beam is accelerated from rest by applying an electric field $E$ for a time $t$ (in the opposite direction). Let an electron have mass $m$ and a proton have mass $M$. Assume the voltages involved are small enough that both the electron and proton are nonrelativistic.

(a) Find the currents $I _ { i } ^ { \prime }$ needed so that the proton follows the same trajectory the electron did.
(b) How does the answer change if relativistic corrections are accounted for?

Solution. (a) The electron and proton have the same momentum $p$, and we have

$$
\left| \frac { d \mathbf { p } } { d t } \right| = q v B \sim q v I
$$

since $B \propto I$. Now, the magnetic field can only rotate the particle's momentum. Suppose at some moment it is curving in a trajectory with radius of curvature $r$, and speed $v$. Then it has instantaneous angular velocity $\omega = v / r$ along the circle tangent to its trajectory, so

$$
\left| \frac { d \mathbf { p } } { d t } \right| = \omega p .
$$

Hence we have

$$
q v I \sim \frac { v } { r } p
$$

and since $r$ is the same for both the electron and proton, we have the scaling

$$
I \propto \frac { p } { q } .
$$

By construction, the electron and the proton have the same momentum $p$, so we have $I \propto 1 / q$. That is, to accommodate the proton, we just have the flip the sign of the currents, $I _ { i } ^ { \prime } = - I _ { i }$.


(b) Every step in the solution to part (a) still works with relativity accounted for (the change of $p = m v$ to $p = \gamma m v$ doesn't matter, because we never used $p = m v$ ), so the answer is the same: we just flip the currents.
[5] Problem 12. IPhO 2000, problem 2. A solid question on the Lorentz force with real-world relevance. Requires a little relativity, namely the expressions for relativistic momentum/energy.
[4] Problem 13. 3 IPhO 1996, problem 2. An elegant problem on particles in a magnetic field. (There's a deeper principle behind the solution to this problem; see R3 for more discussion.)

## 3 Magnetic Moments
