---
id: solution-ocr-kevin-zhou-t3sol-p006
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t3-p006]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 6. The temperature $T$ at which a phase transition happens depends on the pressure $P$, yielding a "coexistence curve" $P ( T )$ where the two phases can be in equilibrium with each other. The exact relationship is given by the Clausius-Clapeyron equation
$$
\frac { d P } { d T } = \frac { L } { T \left( V _ { 2 } - V _ { 1 } \right) }
$$
where $L$ is the total latent heat for some amount of material, and $V _ { 2 }$ and $V _ { 1 }$ are the corresponding volumes of that material when it is in each of the phases. (Depending on convention, $L$ could be the latent heat per mole, in which case the $V _ { i }$ are volumes per mole, or both quantities could be per unit mass, in which case the $V _ { i }$ become densities.) In this problem, you will derive this equation.
    (a) Consider an infinitesimal Carnot cycle operating between temperatures $T$ and $T + d T$, and pressures $P$ and $P + d P$, chosen so that the isothermal heating and cooling steps involve supplying latent heat. Compute the work done by the cycle.
    (b) Argue that we may ignore all heat transfer except for the latent heat.
    (c) Derive the Clausius-Clapeyron equation by setting the efficiency equal to the Carnot efficiency.

This classic setup is also considered in the second half of USAPhO 2023, problem A3.


Solution. (a) Almost all the work is done in the isothermal processes, due to the changes in volume in the phase transitions. (The adiabatic steps are negligible, because not only is the temperature change infinitesimal, but the volume change is also infinitesimal!) The positive work is thus $( P + d P ) \left( V _ { 2 } - V _ { 1 } \right)$ and the negative work is $P \left( V _ { 2 } - V _ { 1 } \right)$, giving

$$
W = \left( V _ { 2 } - V _ { 1 } \right) d P .
$$

(b) The non-latent heat transfer is infinitesimal compared to the latent heat, since it is proportional to $d T$, so we only need to count the latent heat $Q _ { \text {in } } = L$. (This is also very nearly the same as $Q _ { \text {out } }$, with the difference being the infinitesimal amount of work done.)
(c) The efficiency $\epsilon = W / Q _ { \text {in } }$ is equal to $d T / T$ by expanding the Carnot efficiency, so
$$
\frac { d T } { T } = \frac { \left( V _ { 2 } - V _ { 1 } \right) d P } { L }
$$
which is just what we want after a little rearranging.
