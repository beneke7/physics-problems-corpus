---
id: solution-ocr-eupho-2018-t-s-t2
source: eupho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/eupho/2018_T_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [eupho-2018-T2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## 2 Solenoid

Magnetic field gives rise to magnetization of water molecules, i.e. each of the molecules becomes a magnetic dipole. Inhomogeneous magnetic field exerts a force to a magnetic dipole. Water molecules being diamagnetic are pushed away from the region of stronger magnetic field. Water reaches a state with mechanical equilibrium where the magnetic force is balanced by a force due to pressure gradient. Hence, in mechanical equilibrium, regions with stronger magnetic field correspond to smaller pressures. When the current in the solenoid is increased, the pressure differences grow, and at a certain moment, a region will appear where the pressure is smaller than the saturation pressure of the water vapour. This is the moment when water starts boiling.

To begin with, let us discuss possible reasonable approximations. First, we can neglect the water column pressure which is only 2 to 4 percents of the atmospheric pressure. Second, the saturation pressure of water vapour under normal conditions is also much smaller than the atmospheric one and therefore can be neglected. Thus we can say that boiling starts when the pressure drop due to magnetic field becomes equal to $p _ { 0 }$.

So, we need to relate the pressure difference caused by the magnetic field to the magnetic field strength. Notice that if a region with magnetic field $B$ is filled with water, the magnetic field energy density is $B ^ { 2 } / \left( 2 \mu _ { r } \mu _ { 0 } \right)$; meanwhile, if there is no water, the energy density is $B ^ { 2 } / \left( 2 \mu _ { 0 } \right)$. So, we can ascribe the energy density difference

$$
\Delta w = \left( \mu _ { r } ^ { - 1 } - 1 \right) B ^ { 2 } / \left( 2 \mu _ { 0 } \right)
$$

to the interaction of water and magnetic field. Next, consider the following thought experiment. We push away a small volume $V$ of water from the neighbourhood of a point $P$ in the water where the magnetic field strength is $B$; the displaced water fills in a narrow layer at the top of the water surface of equal volume. Assuming that the magnetic field is negligibly small at the top, by comparing the initial and final states, we conclude that the total interaction energy is reduced by $V \left( \mu _ { r } ^ { - 1 } - 1 \right) B ^ { 2 } / \left( 2 \mu _ { 0 } \right)$. When pushing away water from $P$ we perform mechanical work $p V$, where $p$ is the pressure at point $P$. At the upper surface of the water, the moving interface performs mechanical work $p _ { 0 } V$ so that the net mechanical work performed by water during this process is $V \left( p _ { 0 } - p \right)$. Due to energy conservation law, $V \left( \mu _ { r } ^ { - 1 } - 1 \right) B ^ { 2 } / \left( 2 \mu _ { 0 } \right) = V \left( p _ { 0 } - p \right)$ so that

$$
p _ { 0 } = p + \left( \mu _ { r } ^ { - 1 } - 1 \right) B ^ { 2 } / \left( 2 \mu _ { 0 } \right) .
$$

Note that the way how we derived this relationship is completely analogous to how the Bernoulli law is derived, and in fact, the obtained equality can be interpreted as a modified Bernoulli law for zero speed where the volume density of potential energy in gravity field $\rho g h$ is replaced with $\left( \mu _ { r } ^ { - 1 } - 1 \right) B ^ { 2 } / \left( 2 \mu _ { 0 } \right)$ - the energy density of magnetic interaction. This equality can be simplified by noting that $\mu _ { r } ^ { - 1 } - 1 = - \chi / \mu _ { r } \approx - \chi$ so that

$$
p _ { 0 } - p = - \chi B ^ { 2 } / \left( 2 \mu _ { 0 } \right) .
$$

As discussed above, the boiling condition is $p \approx 0$, hence

$$
B = \sqrt { - 2 \mu _ { 0 } p _ { 0 } / \chi } .
$$

Finally, we apply the formula for magnetic field strength inside a long solenoid $B = \mu _ { 0 } I N / \ell$ to find

$$
I = \frac { \ell } { N } \sqrt { \frac { 2 p _ { 0 } } { - \chi \mu _ { 0 } } } = 4.4 \mathrm { kA } .
$$
