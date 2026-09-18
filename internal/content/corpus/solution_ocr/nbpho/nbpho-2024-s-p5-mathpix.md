---
id: solution-ocr-nbpho-2024-s-p5
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2024_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2024-string-pendulum]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
5. String and Pendulum (10 points) - Solution by Päivo Simson, Tudor Plopeanu.
i) (5 points) We build two pendulums of different lengths and release them from different angles such that their periods are equal. We choose a small enough amplitude for the longer pendulum to be able to use the small angle formula, and a large amplitude for the short pendulum.

We measure the lengths of the pendulums. Let $l _ { 0 }$ be the length of the longer pendulum and $l _ { 1 }$ be the length of the shorter pendulum. Additionally, we measure the angular amplitude $\phi$ (in degrees) of the shorter (larger-amplitude oscillating) pendulum with a protractor. From the equality of periods, we get

$$
\sqrt { l _ { 0 } } = \sqrt { l _ { 1 } } \left( 1 + A \alpha ^ { 2 } \right) ,
$$

from which

$$
A = \frac { \sqrt { \frac { l _ { 0 } } { l _ { 1 } } } - 1 } { \alpha ^ { 2 } } = \frac { \sqrt { \frac { l _ { 0 } } { l _ { 1 } } } - 1 } { \left( \frac { \pi \phi } { 180 ^ { \circ } } \right) ^ { 2 } } .
$$

We repeat the experiment with different lengths and finally find the average of the results. With the example values: $\phi = 55 ^ { \circ } , l _ { 0 } =$ 41.5 cm and $l _ { 1 } = 36.5 \mathrm {~cm}$ we get $A \approx 0.07$. The theoretical true value is $A \approx 0.063$, but the expected measured value is slightly larger, as higher order terms of the theoretical expansion ( $1 + A \alpha ^ { 2 } + B \alpha ^ { 4 } + \ldots$ ) are "combined" in the value of $A$. Thus generally, the larger the angle used in the measurement, the larger the value of $A$, which is why a value in the range $A \in [ 0.06,0.08 ]$ is to be expected.

We note a common solution attempt of measuring the number of periods until two pendulums of equal length, but different initial angles, sync up again (i.e. one obtains a phase shift). However, the inaccuracy in this method is very large, in large part due to the amplitude drastically decreasing for large angles as an effect of energy dissipation. Even if a value of $A \approx 0.07$ is obtained, this might therefore not get the "correct value" mark. However, if the amplitude decrease is taken into account, for example by averaging the angular amplitudes over the measurement time, it is possible to obtain a more accurate and correct result.

Another common attempt of using a second pendulum as a "clock" results in a far too low time resolution, and therefore is not rewarded any points.
