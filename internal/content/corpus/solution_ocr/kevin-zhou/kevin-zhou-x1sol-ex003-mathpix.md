---
id: solution-ocr-kevin-zhou-x1sol-ex003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/X1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-x1-ex003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 3
Consider once again a particle of mass $m$ attached to a one-dimensional spring, with natural angular frequency $\omega$. Use the uncertainty principle to estimate the minimum possible energy of the particle, and compare it with the result of problem 4.

Solution
Suppose the uncertainties in position and momentum are $\Delta x$ and $\Delta p$. Then the potential energy is of order $k ( \Delta x ) ^ { 2 } / 2$ and the kinetic energy is of order $( \Delta p ) ^ { 2 } / 2 m$. Dropping constants,

$$
E \sim k ( \Delta x ) ^ { 2 } + \frac { ( \Delta p ) ^ { 2 } } { m } \gtrsim k ( \Delta x ) ^ { 2 } + \frac { \hbar ^ { 2 } } { ( \Delta x ) ^ { 2 } m }
$$

where we applied the uncertainty principle. The ground state minimizes the energy, which is achieved when $( \Delta x ) ^ { 2 } \sim \hbar / \sqrt { k m }$. In this case, the energy is of order $k \hbar / \sqrt { k m } \sim \hbar \sqrt { k / m } \sim \hbar \omega$, which is just what we found earlier. (A similar derivation can be used to derive the energy of the ground state of hydrogen, along with the Bohr radius; try it!)

Remark
We can also "solve" the above problem with the energy-time uncertainty principle incorrectly. The only timescale in the problem is $1 / \omega$, so

$$
\Delta E \gtrsim \frac { \hbar } { \Delta t } \sim \hbar \omega
$$

so $E \gtrsim \hbar \omega$. However, in reality the ground state has no energy uncertainty; its energy is simply the ground state energy. Another way of saying this is that a particle can hang out in the ground state forever, so $\Delta t$ is infinite and hence $\Delta E$ is zero. This incorrect derivation gives the right answer just because it's the only possible answer by dimensional analysis. Thus, a sloppy problem might ask you to do it.
