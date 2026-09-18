---
id: solution-ocr-usapho-2011-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2011_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2011-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A3

A light bulb has a solid cylindrical filament of length $L$ and radius $a$, and consumes power $P$. You are to design a new light bulb, using a cylindrical filament of the same material, operating at the same voltage, and emitting the same spectrum of light, which will consume power $n P$. What are the length and radius of the new filament? Assume that the temperature of the filament is approximately uniform across its cross-section; the filament doesn't emit light from the ends; and energy loss due to convection is minimal.

## Solution

Since the new bulb emits the same spectrum of light, the emitted power is simply proportional to the surface area, where we ignore the surface area of the ends as directed,

$$
P \propto 2 \pi a L \propto a L .
$$

If the resistivity of the filament is $\rho$, the resistance is

$$
R = \frac { \rho L } { A } = \frac { \rho L } { \pi a ^ { 2 } } .
$$

Therefore, the power is also given by

$$
P = \frac { V ^ { 2 } } { R } = \frac { V ^ { 2 } \pi a ^ { 2 } } { \rho L } \propto \frac { a ^ { 2 } } { L } .
$$


Thus if the new power is $n P$, we may only satisfy both equations if the new radius and length are

$$
a ^ { \prime } = n ^ { 2 / 3 } a , \quad L ^ { \prime } = n ^ { 1 / 3 } L .
$$

If the powers given by the two equations were not equal, we would have a contradiction. This indicates that it is impossible to keep the bulb emitting the same spectrum using the same voltage. Supposing we did keep the voltage the same, the filament would burn hotter or cooler than before, changing the spectrum of the light.
