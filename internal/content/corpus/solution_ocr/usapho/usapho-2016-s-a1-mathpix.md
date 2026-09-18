---
id: solution-ocr-usapho-2016-s-a1
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2016_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2016-a1]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Question A1
The Doppler effect for a source moving relative to a stationary observer is described by

$$
f = \frac { f _ { 0 } } { 1 - ( v / c ) \cos \theta }
$$

where $f$ is the frequency measured by the observer, $f _ { 0 }$ is the frequency emitted by the source, $v$ is the speed of the source, $c$ is the wave speed, and $\theta$ is the angle between the source velocity and the line between the source and observer. (Thus $\theta = 0$ when the source is moving directly towards the observer and $\theta = \pi$ when moving directly away.)

A sound source of constant frequency travels at a constant velocity past an observer, and the observed frequency is plotted as a function of time:
![](../../../figures/solution-ocr/5da5989ddc530a74d4830ec0.jpg)

The experiment happens in room temperature air, so the speed of sound is 340 m/s.

a. What is the speed of the source?


## Solution

For $\theta = 0$ we have

$$
f _ { a } \approx f _ { 0 } / ( 1 - v / c )
$$

and for $\theta = \pi$,

$$
f _ { b } = f _ { 0 } / ( 1 + v / c ) .
$$

Read $f _ { a }$ and $f _ { b }$ off the early and late time portions of the graph and use

$$
f _ { a } / f _ { b } = ( 1 + v / c ) / ( 1 - v / c )
$$

giving an answer of $v = 10.7 \mathrm {~m} / \mathrm { s }$.
Alternatively, we can see that $v \ll c$ and approximate

$$
f _ { a } / f _ { b } \approx 1 + 2 v / c
$$

which makes the calculation of $v$ slightly faster. This is acceptable because the error terms are of order $( v / c ) ^ { 2 } \sim 0.1 \%$.
b. What is the smallest distance between the source and the observer?

## Solution

Let $d$ be the (fixed) distance between the observer and the path of the source; let $x$ be the displacement along the path, with $x = 0$ at closest approach. Then for $| x | \ll d$,

$$
\cos \theta \approx \cot \theta = x / d
$$

so we have

$$
f = f _ { 0 } / ( 1 - ( v / c ) ( x / d ) ) \approx f _ { 0 } ( 1 + ( v / c ) ( x / d ) ) .
$$

Taking the time derivative, and noting that $x ^ { \prime }$ is simply $v$,

$$
f ^ { \prime } = f _ { 0 } \left( v ^ { 2 } / c \right) d
$$

Therefore we can read $f ^ { \prime }$ off the center region of the graph. We still need to find $f _ { 0 }$, which we can do using our result from part (a) or simply by averaging $f _ { a }$ and $f _ { b }$, since $v \ll c$, giving $f _ { 0 } = 435 \mathrm {~Hz}$ and an answer of $d = 17.8 \mathrm {~m}$.
There's also a nice trick to speed up this computation. Draw lines at the asymptotic values and through the central data points. The two horizontal lines are $2 f _ { 0 } ( v / c )$ apart in frequency, so the time between their intersections with the third line is simply $2 d / v$.
