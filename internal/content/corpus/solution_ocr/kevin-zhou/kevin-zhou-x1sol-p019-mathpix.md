---
id: solution-ocr-kevin-zhou-x1sol-p019
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-p019]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 19 (Insight 8.26). When helium is cooled to extremely cold temperatures, it becomes a superfluid, an exotic type of liquid that can flow with zero dissipation. These strange properties occur because quantum mechanical effects are large, making the quantum uncertainty in the position of each helium atom on the same order as the separation between atoms.

(a) Superfluid helium has density $\rho$ and a helium atom has mass $m$. Estimate the temperature $T$ at which helium becomes a superfluid. This is closely related to, but not quite the same thing as Bose-Einstein condensation, a phase transition that bosons undergo at low temperatures.

(b) Numerically evaluate $T$, using $\rho \sim 100 \mathrm {~kg} / \mathrm { m } ^ { 3 }$ and $m \sim 7 \times 10 ^ { - 27 } \mathrm {~kg}$.

Solution. (a) The energy is of order $k _ { B } T$, so the momentum is of order $p \sim \sqrt { 2 m E } \sim \sqrt { m k _ { B } T }$. This leads to a spread in position by the uncertainty principle of

$$
\Delta x \sim \frac { \hbar } { p } \sim \frac { \hbar } { \sqrt { m k _ { B } T } } .
$$

The volume per helium atom is $m / \rho$, giving a typical separation of $( m / \rho ) ^ { 1 / 3 }$. Setting this equal to $\Delta x$ and solving for $T$ gives

$$
T \sim \frac { \rho ^ { 2 / 3 } \hbar ^ { 2 } } { k _ { B } m ^ { 5 / 3 } } .
$$

(b) Plugging in the numbers gives $T \sim 0.7 \mathrm {~K}$. The actual answer is 2.172 K, so this isn't bad for such a rough estimate!
