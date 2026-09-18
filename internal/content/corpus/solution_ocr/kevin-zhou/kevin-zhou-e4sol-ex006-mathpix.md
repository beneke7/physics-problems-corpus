---
id: solution-ocr-kevin-zhou-e4sol-ex006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/E4Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-e4-ex006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 6: The Drude Model
Model a conductor as a set of electrons, of charge $q$, mass $m$, and number density $n$, which are completely free. Assume that in every small time interval $d t$, each electron has a probability $d t / \tau$ of hitting a lattice ion, which randomizes the direction of its velocity. Under these assumptions, compute the resistivity of the material.

Solution
First, suppose the electrons have some average momentum $\langle \mathbf { p } \rangle$. In time $d t$, a fraction $d t / \tau$ of them hit a lattice ion, which gives them zero average final momentum. Then the new average momentum is $( 1 - d t / \tau ) \langle \mathbf { p } \rangle$, which implies the exponential decay

$$
\frac { d \langle \mathbf { p } \rangle } { d t } = - \frac { \langle \mathbf { p } \rangle } { \tau } .
$$

On the other hand, if there is an applied field, a force term appears on the right,

$$
\frac { d \langle \mathbf { p } \rangle } { d t } = - \frac { \langle \mathbf { p } \rangle } { \tau } + q \mathbf { E }
$$

since $\mathbf { F } = d \mathbf { p } / d t$ for each individual electron. In the steady state,

$$
\langle \mathbf { p } \rangle = q \mathbf { E } \tau .
$$

The current density is

$$
\mathbf { J } = n q \langle \mathbf { v } \rangle = \frac { n q \langle \mathbf { p } \rangle } { m } = \frac { n q ^ { 2 } \tau } { m } \mathbf { E } .
$$

Thus, the resistivity in the Drude model is

$$
\rho = \frac { m } { n q ^ { 2 } \tau } .
$$

We can also compute the typical drift velocity,

$$
v = \frac { q E \tau } { m } = \frac { E } { n q \rho } .
$$

For realistic values, $v$ is a literal snail's pace; the electrons always move very slowly. But a current can get started in a circuit much faster, because when a battery is attached, each moving electron pushes on the next one along the wire. This wave of motion travels much faster than the electrons themselves.

Remark: The Drude-Sommerfeld Model
Above we tacitly assumed there was a given probability of collision per unit time, but that's not right: when a particle flies through a medium, there is instead a given probability of collision per unit length it travels. These are equivalent for electrons moving at constant speed, but intuitively, we would expect electrons to have to accelerate starting from rest after


each collision, in which case the two differ. To estimate this quickly, note that if the typical collision distance is $\ell$, the kinetic energy picked up between collisions is $m v ^ { 2 } / 2 \sim q E \ell$, giving typical speed $v \propto \sqrt { E }$. The analogue of Ohm's law would then be $I \propto \sqrt { V }$, completely contrary to observation!

The resolution is that electrons in solids really do effectively move with almost constant speed, even after collisions. This is a quantum mechanical effect, as explained in X1. The Pauli exclusion principle implies the electrons in the conductor have to occupy different quantum states, and the high density of electrons requires most of them to always have extremely high speeds, on the order of 1\% of the speed of light! The drift velocity is merely the tiny amount by which their velocities are shifted on average.
