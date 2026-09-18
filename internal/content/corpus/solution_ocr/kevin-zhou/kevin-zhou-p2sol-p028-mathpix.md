---
id: solution-ocr-kevin-zhou-p2sol-p028
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/P2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-p2-p028]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[3] Problem 28. Some questions about light energy.

(a) Estimate the number of photons emitted per second by a standard light bulb. (The energy of a photon is $E = h f$, and the frequency of a photon is related to the wavelength by $c = f \lambda$.)
(b) The Sun supplies power of intensity $1400 \mathrm {~W} / \mathrm { m } ^ { 2 }$ to the Earth. The nearest star is about 4 light years away. Assuming this star is similar to the Sun, about how many of its photons enter your eye per second?

Solution. (a) A standard light bulb has around 50 W of power. The power $P = N E$ where $N$ is the number of photons emitted per second, and the wavelength of visible light is from $400 - 700 \mathrm {~nm}$. Using 500 nm , we have

$$
N = \frac { P \lambda } { h c } \sim 10 ^ { 20 } \text { photons } / \mathrm { s }
$$

(b) The distance to the Sun is $1 \mathrm { AU } \sim 1.5 \times 10 ^ { 11 } \mathrm {~m}$, which you can also reconstruct with Kepler's laws. 1 light year is $c ( 1$ year $) \sim 10 ^ { 16 } \mathrm {~m}$. Then the intensity from the star is reduced by a factor of (1 AU/4ly) ${ } ^ { 2 }$ due to the inverse square law, so $I \sim 10 ^ { - 8 } \mathrm {~W} / \mathrm { m } ^ { 2 }$.
The area of a human pupil depends on the light conditions, but is roughly $\pi r ^ { 2 } = \pi ( 5 \mathrm {~mm} ) ^ { 2 }$. Then the number of photons that enter it per second is $P \lambda / h c$, which gives $N \sim 10 ^ { 6 }$ photons $/ \mathrm { s }$. That's plenty, so it's very easy to see such a star at night, while it might be difficult during the day because of the background light from the Sun.

[2] Problem 29. Estimate the radius of the largest asteroid you could jump off of, and never return.
Solution. The escape velocity is $v = \sqrt { 2 G M / R }$, and we will assume a uniform spherical asteroid with density $\rho$. Rock is a few times denser than water, so $\rho \approx 3 \times 10 ^ { 3 } \mathrm {~kg} / \mathrm { m } ^ { 3 }$ and $M \approx \frac { 4 } { 3 } \pi \rho R ^ { 3 }$. Humans can jump around half a meter, which determines $v = \sqrt { 2 g h }$. Thus

$$
2 g h = \frac { 2 G } { R } \frac { 4 } { 3 } \pi \rho R ^ { 3 } .
$$

Plugging in numbers gives $R \approx 2 \mathrm {~km}$.
