---
id: solution-ocr-kevin-zhou-t3sol-p007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t3-p007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 7. [A] In this exercise you'll find a quicker, more advanced derivation of the Clausius-Clapeyron equation.

(a) The Gibbs free energy is defined as $G = U + P V - T S$. Show that for reversible processes,
$$
d G = V d P - S d T .
$$
Two phases can only be in thermodynamic equilibrium if they have the same Gibbs free energy per molecule. Otherwise, turning one phase to the other would reduce the Gibbs free energy, which turns out to be equivalent to increasing the entropy of the universe. (For more details, see section 16.5 of Blundell and Blundell.)
(b) Suppose that the Gibbs free energies per molecule $G / N$ for two phases are equal at temperature $T _ { 0 }$ and pressure $P _ { 0 }$. Derive the Clausius-Clapeyron equation by demanding this is also true at temperature $T _ { 0 } + d T$ and $P _ { 0 } + d P$.

Solution. (a) By the first law, we have $d Q = d U + d W$, where $d W = P d V$ and, by reversibility, $d Q = T d S$. Differentiating the definition of Gibbs free energy, we have

$$
d G = d U + P d V + V d P - T d S - S d T = T d S - P d V + P d V + V d P - T d S - S d T
$$

which simplifies to the desired answer.

(b) Consider a sample of the first phase with a given total particle number $N$. The change in Gibbs free energy along the coexistence curve is
$$
d G _ { 1 } = V _ { 1 } d P - S _ { 1 } d T .
$$
Similarly, for the second phase,
$$
d G _ { 2 } = V _ { 2 } d P - S _ { 2 } d T .
$$
By the definition of the coexistence curve, these two must be equal, so
$$
\left( V _ { 1 } - V _ { 2 } \right) d P = \left( S _ { 1 } - S _ { 2 } \right) d T .
$$
We also know that $S _ { 2 } - S _ { 1 } = L / T$, so rearranging gives the desired result.

Remark: Thermodynamic Potentials
You might sometimes see the Clausius-Clapeyron equation written in terms of a difference in enthalpy $\Delta H$ rather than a latent heat. The enthalpy is the state function $H = U + P V$, so

$$
d H = V d P + đ Q .
$$

This is useful because many lab experiments happen at constant pressure, $d P = 0$, leaving $d H = d Q$. That is, only heat changes the enthalpy, so the latent heat of a phase transition must be the difference in enthalpies of the two phases, $L = \Delta H$. That in turn is useful because enthalpy is a state function, so given a new phase transition you can calculate $L$ by just looking up the enthalpy values for each of the phases in a table.

We've now covered all the classic "thermodynamic potentials". As we just saw, the enthalpy $H$ is useful for bookkeeping heat. As we saw in T2, the Helmholtz free energy $F$ is minimized in thermodynamic equilibrium, given constant temperature and volume. (This is the relative of the statement that the system's internal energy $U$ is minimized in equilibrium, given constant entropy and volume, which is just the usual statement of mechanical equilibrium.) And as we saw in the problem above, the Gibbs free energy $G$ is minimized in thermodynamic equilibrium, given constant temperature and pressure.

More generally, what's going on is that the number of possibly useful potentials doubles every time we add another pair of "thermodynamic conjugate variables". Before learning about thermodynamics, we just had $U$. When we learned about temperature and entropy, we additionally cared about $F$. And now upon accounting for pressure and volume, we have $H$ and $G$. If we had another pair, such as magnetization and external magnetic field, we could define 4 more potentials, which would each be useful in different situations.
[2] Problem 8. Ice skaters can move with little friction because they actually glide on a thin layer of water. Estimate how heavy an ice skater has to be to melt ice by just standing on their skates, assuming the ice is at temperature -5 °C.

Solution. To melt the ice, we need to apply enough pressure to reach the water-ice equilibrium point, which we can find with the Clausius-Clapeyron equation. We need to reach 0°C, so

$$
\Delta T = 5 ^ { \circ } \mathrm { C } = 5 \mathrm {~K} , \quad T = 273 \mathrm {~K} .
$$

The Clausius-Clapeyron equation gives

$$
P = \frac { \Delta T } { T } L \left( \frac { 1 } { \rho _ { i } } - \frac { 1 } { \rho _ { w } } \right) ^ { - 1 } \approx 6.76 \times 10 ^ { 7 } \mathrm {~Pa}
$$

where we used

$$
\rho _ { i } = 917 \mathrm {~kg} / \mathrm { m } ^ { 3 } , \quad \rho _ { w } = 1000 \mathrm {~kg} / \mathrm { m } ^ { 3 } , \quad L = 334000 \mathrm {~J} / \mathrm { kg } .
$$

Ice skate blades have a thickness of around 1 mm and a length of around 25 cm, so the total area with two feet will be around $5 \times 10 ^ { - 4 } \mathrm {~m} ^ { 2 }$. The weight $P A$ needed will then be around $30,000 \mathrm {~N}$, corresponding to a mass of about 3,000 kg. Thus, unless you are incredibly massive, or the ice is very close to melting already, pressure alone is not enough to melt the ice. Scientists are still arguing over the true explanation; you can see a recent review here.


Now we focus on the specifics of liquid-gas phase transitions.
