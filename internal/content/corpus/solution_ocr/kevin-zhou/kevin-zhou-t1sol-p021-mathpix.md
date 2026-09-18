---
id: solution-ocr-kevin-zhou-t1sol-p021
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-p021]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 21. Use kinetic theory to find the pressure of a photon gas (i.e. an ideal gas of massless particles, which satisfy $E = p c$ ) in terms of its total internal energy $U$ and volume $V$. Use this result to find $\gamma$ for a photon gas, where $\gamma$ is defined so that $P V ^ { \gamma }$ is constant in an adiabatic process.
Solution. By the exact same reasoning as in the example,
$$
P = \frac { N } { V } \left\langle p _ { x } v _ { x } \right\rangle = \frac { 1 } { 3 } \frac { N } { V } \langle \mathbf { p } \cdot \mathbf { v } \rangle .
$$
However, for photons we have $p v = p c = E$, so
$$
P = \frac { 1 } { 3 } \frac { N } { V } \langle E \rangle = \frac { U } { 3 V } .
$$
In other words, the pressure is always one third of the energy density. Notice that the number of photons cancelled out, as it must have because it wasn't specified anywhere in the problem. As you'll see in T2, the number of photons is determined by the volume and temperature; it isn't an independent parameter like it is for the ideal gas. As you heat or cool a photon gas, photons can be freely emitted and absorbed by the walls, changing the total number to reach equilibrium.
Starting from $U = 3 P V$ and taking the differential of both sides, in an adiabatic process we have
$$
d U = d W = - P d V , \quad d U = 3 ( P d V + V d P ) .
$$
Simplifying gives
$$
- \frac { 4 } { 3 } \frac { d V } { V } = \frac { d P } { P }
$$
which is equivalent to $P V ^ { 4 / 3 }$ being constant, so $\gamma = 4 / 3$.
