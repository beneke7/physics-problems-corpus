---
id: solution-ocr-usapho-2020-s-b3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2020_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2020-b3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question B3
Real Expansion
Consider a "real" monatomic gas consisting of $N$ atoms of negligible volume and mass $m$ in equilibrium inside a closed cubical container of volume $V$. In this "real" gas, the attractive forces between atoms is small but not negligible. Because these atoms have negligible volume, you can assume that the atoms do not collide with each other for the entirety of the problem.

a. Consider an atom in the interior of this container of volume $V$. Suppose the potential energy of the interaction is given by
$$
u ( r ) = \begin{cases} 0 & r < d \\ - \epsilon \left( \frac { d } { r } \right) ^ { 6 } & r \geq d \end{cases}
$$
where $d \ll V ^ { 1 / 3 }$ is the minimum allowed distance between two atoms. Assume the gas is uniformly distributed within the container, what is the average potential energy of this atom? Write your answer in terms of $a ^ { \prime } = \frac { 2 \pi d ^ { 3 } \epsilon } { 3 } , N$, and $V$.

Solution
The density of the gas is given by $N / V$. In a spherical shell of radius $r$ and thickness $\Delta r$, there are $\left( 4 \pi r ^ { 2 } \Delta r \right) N / V$ atoms. The potential energy is given by

$$
\Delta U = - \left( 4 \pi r ^ { 2 } \Delta r \right) N / V \epsilon d ^ { 6 } / r ^ { 6 } .
$$

Then, the total potential energy is given by

$$
U = \int _ { d } ^ { \infty } - \left( 4 \pi r ^ { 2 } \mathrm {~d} r \right) N / V \epsilon d ^ { 6 } / r ^ { 6 } = - 2 a ^ { \prime } N / V
$$

b. What is the average potential energy of an atom near the boundary of the box? Assume that there is no interaction between atoms near the boundary and the box itself.

Solution
Now only half of the shell of radius $r$ is full of gas, and the other half is outside of the box. This mean that the potential energy is lessened by a factor of two, to $- a ^ { \prime } N / V$.

c. Using Bernoulli's law $P + U + \rho v ^ { 2 } / 2 =$ constant, with pressure $P$, potential energy density $U$, mass density $\rho$ and fluid velocity $v$, what is the pressure at the boundary of the box? Assume the interior pressure is given by the ideal gas law.

Solution
The potential energy density difference is $- a ^ { \prime } \frac { N ^ { 2 } } { V ^ { 2 } }$. Since there is no velocity difference, this is also the pressure difference. If the pressure on the interior is $\frac { N k T } { V }$, then the pressure on


the box is $\frac { N k T } { V } - a ^ { \prime } \frac { N ^ { 2 } } { V ^ { 2 } }$
d. Assuming most atoms are in the interior of the box, what is the total energy of the atoms in the box?

## Solution

The total kinetic energy is $\frac { 3 } { 2 } N k T$. The total potential energy is $- a ^ { \prime } N ^ { 2 } / V$ (we drop a factor of two to avoid double-counting). So the total energy is $\frac { 3 } { 2 } N k T - a ^ { \prime } N ^ { 2 } / V$.

Now consider an insulated partitioned container with two sections, each of volume $V$. We fill one side of the container with $N$ atoms of this "real" gas at temperature $T$, which the other side being a vacuum. We then quickly remove the partition and let the gas expand to fill the entirety of the partitioned container. During this expansion, the energy of the gas remains unchanged.

e. What is the final temperature of the gas after the expansion?

## Solution

Naively, we might say that the total potential energy of the gas is $- 2 a ^ { \prime } N ^ { 2 } / V$, but to avoid double-counting, we divide by 2 and instead arrive at $- a ^ { \prime } N ^ { 2 } / V$. Then, the quantity

$$
E = \frac { 3 } { 2 } N k _ { B } T - \frac { a ^ { \prime } N ^ { 2 } } { V }
$$

is conserved. Therefore,

$$
T ^ { \prime } = T - \frac { a ^ { \prime } N } { 3 k _ { B } V } .
$$

f. What is the increase in the entropy of the universe as a result of the free expansion? Give your answer to first order in $\frac { a ^ { \prime } N } { V k _ { B } T }$.

## Solution

The entropy of the surroundings do not increase as a result of the free expansion (no heat is dumped to the surroundings, and the surroundings remain in thermal equilibrium). However, the entropy of the gas does increase because the gas is momentarily not in equilibrium. Therefore, we just have to compute the increase in entropy of the gas.

Because entropy is a state function, we compute this change in entropy by constructing a reversible process between the initial and final states of the expansion, and computing the change in entropy for this process. Consider constant energy reversible expansion of this gas. For this process, the work done by the gas is equal to the heat the gas takes in. Therefore,

$$
\mathrm { d } S = \frac { p \mathrm {~d} v } { t } ,
$$

where we use lowercase letters to denote the quantities during the reversible expansion.
Recall that

$$
p v + \frac { a ^ { \prime } N ^ { 2 } } { v } = N k _ { B } t .
$$


If the energy of the system is $E$, then,

$$
\frac { 3 } { 2 } p v + \frac { 3 a ^ { \prime } N ^ { 2 } } { 2 v } - \frac { a ^ { \prime } N ^ { 2 } } { v } = E .
$$

Then,

$$
p = \frac { 2 E } { 3 v } - \frac { a ^ { \prime } N ^ { 2 } } { 3 v ^ { 2 } } .
$$

From our expression of energy,

$$
t = \frac { 2 } { 3 } \frac { E + a ^ { \prime } N ^ { 2 } / v } { N k _ { B } } .
$$

Then,

$$
\Delta S = \int _ { V } ^ { 2 V } \frac { E N k _ { B } } { E v + a ^ { \prime } N ^ { 2 } } - \frac { a ^ { \prime } N ^ { 3 } k _ { B } } { 2 \left( E v ^ { 2 } + a ^ { \prime } N ^ { 2 } v \right) } \mathrm { d } v .
$$

Taylor expanding gives us

$$
\Delta S = \int _ { V } ^ { 2 V } \frac { N k _ { B } } { v } - \frac { 3 a ^ { \prime } N ^ { 3 } k _ { B } } { 2 E v ^ { 2 } } \mathrm {~d} v .
$$

Integrating gives us

$$
\Delta S = N k _ { B } \log 2 - \frac { 3 a ^ { \prime } N ^ { 3 } k _ { B } } { 4 E V } .
$$

Using that $E \approx 3 / 2 N k _ { B } T$, we arrive at

$$
\Delta S = N k _ { B } \log 2 - \frac { a ^ { \prime } N ^ { 2 } } { 2 V T } .
$$
