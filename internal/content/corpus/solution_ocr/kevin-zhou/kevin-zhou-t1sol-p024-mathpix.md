---
id: solution-ocr-kevin-zhou-t1sol-p024
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-p024]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[5] Problem 24. In this problem, we consider a simple kinetic theory model for "transport" in a sparse gas. Two parallel plates are at a distance $L$ from each other. The space between the plates is filled with a gas of density $\rho$, with molecule of mass $m$. Assume that the gas density is low enough to neglect collisions between gas molecules, and that all radiation effects can be neglected.


(a) Suppose the two plates are held at temperatures $T + \Delta T$ and $T$, where $\Delta T \ll T$. Assume that when gas molecules bounce from a plate, they instantly obtain the plate's temperature. Estimate the heat flux per area $P / A$ (in units of $\mathrm { W } / \mathrm { m } ^ { 2 }$ ) between the plates. (This determines the thermal conductivity, to be defined in T2.)
(b) Suppose the top plate moves with a transverse speed $v _ { \| }$parallel to itself, while the bottom plate is still, and $m v _ { \| } ^ { 2 } \ll k _ { B } T$. Assume that when gas molecules bounce from a plate, they obtain that plate's transverse speed. Estimate the force per area $F / A$ on each plate. (This determines the viscosity, as defined in M7.)

Both the thermal conductivity and viscosity are associated with the transport of conserved quantities (energy and transverse momentum, respectively) through the gas. Now, above we have neglected collisions entirely, which is unrealistic for most gases unless they are extremely sparse. However, it's possible to get some rough estimates for what happens in the presence of collisions.

(c) Let $\sigma$ be the cross-sectional area of a gas molecule. Estimate the mean free path $d$ of a gas molecule.
(d) Our previous analysis held when $L \ll d$. Now suppose, more realistically, that $L \gg d$. Estimate $P / A$ and $F / A$ in the steady state. (Hint: consider a set of imaginary planes that are spaced by a distance $d$, and consider the heat/momentum flow between pairs of adjacent planes; for such pairs, collisions can be neglected.)
(e) Suppose a gas molecule begins at the top plate, and both plates have temperature $T$. Again assuming that $L \gg d$, estimate the typical time it takes before the gas molecule hits the bottom plate. (Hint: model the position of the particle as a sum of random steps, and recall the facts about variance in P2.)

For a clear discussion of the ideas of this problem, see sections 7.3 and 7.4 of The Art of Insight.
Solution. (a) The gas molecules have speed $v \sim \sqrt { k _ { B } T / m }$, and they hit the plates every time $t \sim L / v$. Each time a plate is hit, an energy $\Delta E \sim k _ { B } \Delta T$ is deposited or taken away. So the average energy flow rate for one atom is

$$
P _ { \text {atom } } = \frac { \Delta E } { t } \sim \frac { k _ { B } \Delta T } { L } \sqrt { \frac { k _ { B } T } { m } } .
$$

The number of atoms per unit area of the plate is $L \rho / m$, which gives

$$
\frac { P } { A } \sim k _ { B } \Delta T \frac { \rho } { m } \sqrt { \frac { k _ { B } T } { m } } .
$$

(b) This is rather similar, except that instead of an energy $\Delta E$ deposited every impact, a momentum $\Delta p _ { \| } = m v _ { \| }$is deposited per impact. Then by the exact same logic,
$$
\frac { F } { A } \sim m v _ { \| } \frac { \rho } { m } \sqrt { \frac { k _ { B } T } { m } } .
$$
Notice that the result of this problem depends explicitly on the molecular mass $m$. This is very important, because in the early days of kinetic theory, the quantity $m$ canceled out of almost every calculation. This led people to believe that atoms were unobservable in principle;


they were just a fictitious calculational tool used to approximate continuous matter. One of Einstein's most famous discoveries was showing that macroscopically observable properties of Brownian motion did depend on $m$, hence giving a way to indirectly observe the reality of atoms; you will do this calculation in XRev.
(c) If a molecule moves a distance $x$, it'll sweep out a volume of $\sigma x$. The number density is $\rho / m$, so the molecule should expect $\rho \sigma x / m$ collisions. The mean free path $d$ is when you would expect 1 collision:
$$
d = \frac { m } { \sigma \rho } .
$$
(d) The results for when collisions can be neglected,
$$
\frac { P } { A } \sim k _ { B } \delta T \frac { \rho } { m } \sqrt { \frac { k _ { B } T } { m } } \quad \frac { F } { A } \sim m \delta v _ { \| } \frac { \rho } { m } \sqrt { \frac { k _ { B } T } { m } }
$$
can still give us the heat/momentum flow between adjacent planes separated by distance $d$ (so a total of $L / d$ of these planes). Thus $\Delta T = \frac { L } { d } \delta T$ and $v _ { \| } = \frac { L } { d } \delta v _ { \| }$. This transfer will be the same throughout in steady state, and plugging in the previously obtained $d = m / \sigma \rho$ yields
$$
\frac { P } { A } \sim \frac { k _ { B } \Delta T } { \sigma L } \sqrt { \frac { k _ { B } T } { m } } \quad \frac { F } { A } \sim \frac { m v _ { \| } } { \sigma L } \sqrt { \frac { k _ { B } T } { m } } .
$$
Remarkably, the density $\rho$ has dropped out! This was a surprising early prediction of kinetic theory, which was confirmed by Maxwell. For higher densities, more molecules are available to carry energy or momentum, but they can't go as far before colliding.
(e) The molecule will be moving at velocity $v \sim \sqrt { k _ { B } T / m }$, so it takes time $t \sim d / v$ to go between planes of separation $d$. However, after this point the molecule's velocity will be randomized, so its next step might go in any direction. This is a description of a random walk.
Each step of time $t$ changes the displacement from the original plate by approximately $\pm d$, and the steps are independent. Then the standard deviation of the displacement adds in quadrature, as covered in P2. The typical time to hit is when we get a standard deviation of order $L$,
$$
t _ { \mathrm { hit } } \sim \left( \frac { L } { d } \right) ^ { 2 } \frac { d } { v } \sim \frac { L ^ { 2 } } { d } \sqrt { \frac { m } { k _ { B } T } } .
$$
[5] Problem 25. EuPhO 2017, problem 2. A nice problem using many of the above ideas.
