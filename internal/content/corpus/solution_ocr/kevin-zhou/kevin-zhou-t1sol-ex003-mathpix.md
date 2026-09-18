---
id: solution-ocr-kevin-zhou-t1sol-ex003
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t1-ex003]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 3
A space station is a large cylinder of radius $R _ { 0 }$ filled with air molecules of mass $m$. The cylinder spins about its axis at an angular velocity $\omega$, and the air rotates along with it. If the temperature $T$ is constant inside the station, what is the ratio of the air pressure at the center of the station to the pressure at the rim?

Solution
We saw in M7 that a fluid next to a moving wall will pick up that wall's velocity, by viscosity. In this scenario, that happens because a gas molecule that bounces off the wall will, on average, pick up an additional component of tangential velocity. In the steady state, the gas ends up rotating with the walls. It's therefore simplest to work in the frame rotating with the station, in which case the walls and gas are at rest, and we simply have a fluid statics problem.

By considering force balance on a thin parcel of air of radial thickness $d r$ and area $A$,

$$
A d P = \rho g _ { \text {eff } } A d r
$$

where $g _ { \text {eff } } = \omega ^ { 2 } r$ is the centrifugal acceleration. Applying the ideal gas law,

$$
\frac { d P } { P } = \frac { m g _ { \mathrm { eff } } } { k _ { B } T } d r
$$


which integrates to give
$$
\frac { P ( r = 0 ) } { P \left( r = R _ { 0 } \right) } = e ^ { - m \omega ^ { 2 } R _ { 0 } ^ { 2 } / 2 k _ { B } T } .
$$
