---
id: solution-ocr-usapho-2018-s-b2
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2018_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2018-b2]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question B2
In this problem, use a particle-like model of photons: they propagate in straight lines and obey the law of reflection, but are subject to the quantum uncertainty principle. You may use small-angle approximations throughout the problem.

A photon with wavelength $\lambda$ has traveled from a distant star to a telescope mirror, which has a circular cross-section with radius $R$ and a focal length $f \gg R$. The path of the photon is nearly aligned to the axis of the mirror, but has some slight uncertainty $\Delta \theta$. The photon reflects off the mirror and travels to a detector, where it is absorbed by a particular pixel on a charge-coupled device (CCD).

Suppose the telescope mirror is manufactured so that photons coming in parallel to each other are focused to the same pixel on the CCD, regardless of where they hit the mirror. Then all small cross-sectional areas of the mirror are equally likely to include the point of reflection for a photon.

a. Find the standard deviation $\Delta r$ of the distribution for $r$, the distance from the center of the telescope mirror to the point of reflection of the photon.

## Solution

The square of the standard deviation is the variance, so

$$
( \Delta r ) ^ { 2 } = \left\langle r ^ { 2 } \right\rangle - \langle r \rangle ^ { 2 } .
$$

Computing the average value of $r ^ { 2 }$ is mathematically the exact same thing as computing the moment of inertia of a uniform disk; we have

$$
\left\langle r ^ { 2 } \right\rangle = \frac { 1 } { \pi R ^ { 2 } } \int _ { 0 } ^ { R } r ^ { 2 } ( 2 \pi r d r ) = \frac { 1 } { 2 } R ^ { 2 }
$$

Similarly, the average value of $r$ is

$$
\langle r \rangle = \frac { 1 } { \pi R ^ { 2 } } \int _ { 0 } ^ { R } r ( 2 \pi r d r ) = \frac { 2 } { 3 } R .
$$

Then we have

$$
\Delta r = \frac { R } { \sqrt { 18 } } .
$$

b. Use the uncertainty principle, $\Delta r \Delta p _ { r } \geq \hbar / 2$, to place a bound on how accurately we can know the angle of the photon from the axis of the telescope. Give your answer in terms of $R$ and $\lambda$. If you were unable to solve part a, you may also give your answer in terms of $\Delta r$.

## Solution

We have

$$
\Delta p _ { r } \approx p \Delta \theta = \frac { h } { \lambda } \Delta \theta .
$$


Applying the uncertainty principle, we have

$$
\Delta \theta \geq \frac { \sqrt { 18 } \lambda } { 4 \pi R } .
$$

Since the factors of $\hbar$ canceled out, this is really a classical calculation; one could get a similar result by considering classical diffraction from a circular aperture.

c. Suppose we want to build a telescope that can tell with high probability whether a photon it detected from Alpha Centauri A came the left half or right half of the star. Approximately how large would a telescope have to be to achieve this? Alpha Centauri A is approximately $4 \times 10 ^ { 16 } \mathrm {~m}$ from Earth and has a radius approximately $7 \times 10 ^ { 8 } \mathrm {~m}$. Assume visible light with $\lambda = 500 \mathrm {~nm}$.

## Solution

We need $\Delta \theta$ to be much smaller than the actual angular separation, or

$$
\Delta \theta \ll \frac { 7 \times 10 ^ { 8 } \mathrm {~m} } { 4 \times 10 ^ { 16 } \mathrm {~m} } \approx 2 \times 10 ^ { - 8 } .
$$

This means that

$$
R \approx \frac { \sqrt { 18 } \lambda } { 4 \pi \Delta \theta } \gg \frac { \sqrt { 18 } \left( 5 \times 10 ^ { - 7 } \mathrm {~m} \right) } { 4 \pi \left( 2 \times 10 ^ { - 8 } \right) } = 8.4 \mathrm {~m}
$$
