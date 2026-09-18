---
id: solution-ocr-kevin-zhou-x1sol-ex006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-ex006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 6: Tremaine-Gunn Bound
Suppose all of the dark matter in the galaxy is composed of a single kind of fermionic particle, of mass $m$. The escape velocity of the galaxy is of order $v _ { \text {esc } } \sim 10 ^ { - 3 } c$, and the dark matter density near Earth is $\rho \sim 0.3 \mathrm { GeV } / \left( c ^ { 2 } \mathrm {~cm} ^ { 3 } \right)$. What's the minimum possible value of $m$ ?

Solution
The reason there's a minimum possible value of $m$ is that, as $m$ gets smaller, we need more dark matter particles. But the Pauli exclusion principle tells us that if we want to add more particles, they need to have higher and higher energy, and at some point the particles will have so much energy they won't be bound to the galaxy at all.

To get a rough estimate, let's suppose the galaxy has length scale $L$, so that we need at least $N \sim \rho L ^ { 3 } / m$ dark matter particles. They need to have energy less than $E _ { 0 } \sim m v _ { \text {esc } } ^ { 2 }$. Plugging this into the final result of example 2 and dropping all numeric factors gives

$$
\frac { \rho L ^ { 3 } } { m } \lesssim \frac { m ^ { 3 } v _ { \text {esc } } ^ { 3 } L ^ { 3 } } { \hbar ^ { 3 } }
$$

which yields the bound

$$
m \gtrsim \left( \frac { \rho \hbar ^ { 3 } } { v _ { \mathrm { esc } } ^ { 3 } } \right) ^ { 1 / 4 } \sim 10 \mathrm { eV } / c ^ { 2 } .
$$

A few decades ago, neutrinos were leading dark matter candidates, since they are light fermionic particles that interact very weakly with ordinary matter. But we now know that the neutrino mass is well below this bound, so that nice idea doesn't work. On the other hand, dark matter could still be composed of bosonic particles of much lighter mass.
