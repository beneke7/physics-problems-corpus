---
id: solution-ocr-kevin-zhou-t2sol-p002
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t2-p002]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 2. [A] Let's illustrate some consequences of the previous example.

(a) For a monatomic ideal gas, we have $U = ( 3 / 2 ) n R T$ and the equation of state $P V = n R T$. Evaluate $C _ { V }$ and $C _ { P }$ using the results above.
(b) In a real gas, there are short-ranged attractive intermolecular forces. If they are relatively weak, they yield a small negative contribution to the energy, of the form
$$
U = \frac { 3 } { 2 } n R T - \frac { a n ^ { 2 } } { V } .
$$
Explain qualitatively why the change in energy is proportional to $n ^ { 2 } / V$.

(c) We will show in problem 4 that this modifies the equation of state to
$$
\left( P + \frac { a n ^ { 2 } } { V ^ { 2 } } \right) V = n R T .
$$
Using these results, show that to first order in $a$, we have
$$
C _ { V } = \frac { 3 } { 2 } n R , \quad C _ { P } - C _ { V } \approx n R + \frac { 2 a n ^ { 2 } } { T V } .
$$
Qualitatively explain why the new term has a positive sign.

Solution. (a) Using the results of the previous example, we have

$$
C _ { V } = \left. \frac { \partial U } { \partial T } \right| _ { V } = \frac { 3 } { 2 } n R , \quad C _ { P } - C _ { V } = \left. \left( \left. \frac { \partial U } { \partial V } \right| _ { T } + P \right) \frac { \partial V } { \partial T } \right| _ { P } = P \frac { n R } { P } = n R .
$$

Combining these gives $C _ { P } = ( 5 / 2 ) n R$, just as expected.

(b) Since the interaction is short-ranged, the number of molecules near a single given molecule is proportional to the average density $n / V$. We then multiply by the total number of molecules, which is proportional to $n$, to get a contribution proportional to $n ^ { 2 } / V$. The sign of this contribution is negative since the force is attractive.
Note that we implicitly assumed that the density of molecules near a given molecules was the same as the density in the whole container. But if the interaction is sufficiently strong, that won't be true, because the molecules will clump up. This dramatic behavior is associated with a phase transition to a liquid or solid state, and will be discussed further in T3. For now, we're just concerned with the case of weak interactions.
(c) The first result follows directly from the definition of the heat capacity. Next,
$$
C _ { P } - C _ { V } = \left. \left( \left. \frac { \partial U } { \partial V } \right| _ { T } + P \right) \frac { \partial V } { \partial T } \right| _ { P } = \left. \left( P + \frac { a n ^ { 2 } } { V ^ { 2 } } \right) \frac { \partial V } { \partial T } \right| _ { P } .
$$
To get $\partial V / \left. \partial T \right| _ { P }$, differentiate the equation of state with respect to $T$ at constant $P$,
$$
n R = \left. \left( P + \frac { a n ^ { 2 } } { V ^ { 2 } } - \frac { 2 a n ^ { 2 } } { V ^ { 2 } } \right) \frac { \partial V } { \partial T } \right| _ { P } .
$$
Plugging this result in and expanding to lowest order in $a$ gives the result. The reason the new term has a positive sign is that the interaction is attractive, so when the gas expands under heating, we need to put in extra heat to get the molecules further away from each other.

## Idea 4: Equality of Mixed Partial Derivatives

If we take two distinct partial derivatives of a state function $f$, then the order doesn't matter,

$$
\left. \left. \frac { \partial } { \partial x } \right| _ { y } \frac { \partial f } { \partial y } \right| _ { x } = \left. \left. \frac { \partial } { \partial y } \right| _ { x } \frac { \partial f } { \partial x } \right| _ { y } .
$$

If this identity doesn't hold, it means that $f$ is not actually a state function. Imposing this requirement for various choices of independent variables $x$ and $y$ yields a variety of nontrivial


identities, collectively called Maxwell relations.
