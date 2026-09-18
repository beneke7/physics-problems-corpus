---
id: solution-ocr-usapho-2009-s-a3
source: usapho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/usapho/2009_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [usapho-2009-a3]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
## Question A3

Two stars, each of mass $M$ and separated by a distance $d$, orbit about their center of mass. A planetoid of mass $m ( m \ll M )$ moves along the axis of this system perpendicular to the orbital plane.


![](../../../figures/solution-ocr/5124dab566387744be66ea44.jpg)

Let $T _ { p }$ be the period of simple harmonic motion for the planetoid for small displacements from the center of mass along the $z$-axis, and let $T _ { s }$ be the period of motion for the two stars. Determine the ratio $T _ { p } / T _ { s }$.

This problem was adapted from a problem by French in Newtonian Mechanics.

## Solution

The stars orbit about their center of mass, in circles of radius $R = d / 2$. Setting the gravitational force to the centripetal force,

$$
F = \frac { M v ^ { 2 } } { R } = M \frac { 4 \pi ^ { 2 } R } { T _ { s } ^ { 2 } } = G \frac { M ^ { 2 } } { d ^ { 2 } }
$$

and solving for the orbital period $T _ { s }$ gives

$$
T _ { s } = 2 \pi \sqrt { \frac { d ^ { 3 } } { 2 G M } } = 4 \pi \sqrt { \frac { R ^ { 3 } } { G M } } .
$$

Now let the planetoid be a distance $z$ above the plane. The distance to either star is $\sqrt { R ^ { 2 } + z ^ { 2 } }$. Only the part of the force that is perpendicular to the plane survives the vector addition, so the net force is

$$
F = 2 \frac { G m M } { R ^ { 2 } + z ^ { 2 } } \frac { z } { \sqrt { R ^ { 2 } + z ^ { 2 } } }
$$

This expression is exact, but if $z \ll d$ we have

$$
F \approx 2 \frac { G m M } { R ^ { 3 } } z
$$

by the binomial theorem. This is a linear restoring force, so the planetoid will execute simple harmonic motion with period

$$
T _ { p } = 2 \pi \sqrt { \frac { m } { k } }
$$

where $k$ is the effective force constant, so

$$
T _ { p } = 2 \pi \sqrt { \frac { R ^ { 3 } } { 2 G M } }
$$

which gives the answer,

$$
\frac { T _ { p } } { T _ { s } } = \frac { 1 } { 2 \sqrt { 2 } } .
$$
