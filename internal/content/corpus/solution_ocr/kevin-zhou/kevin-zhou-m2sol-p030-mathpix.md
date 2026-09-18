---
id: solution-ocr-kevin-zhou-m2sol-p030
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M2Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m2-p030]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
[2] Problem 30. One can also derive the Young-Laplace equation using the principle of virtual work. Suppose the bubble radius changes by $d r$. The energy of the bubble changes for two reasons: first,


there is net $\Delta P d V$ work from the two pressure forces, and there is the $\gamma d A$ surface tension energy cost. By setting the net virtual work to zero, find $\Delta P$.

Solution. The work done by the surface tension should be balanced by the work done by the pressure difference. Noting that the total surface area is $8 \pi R ^ { 2 }$, we have

$$
\Delta P d V = \Delta P d \left( \frac { 4 } { 3 } \pi R ^ { 3 } \right) = \Delta P \left( 4 \pi R ^ { 2 } \right) d R = d \left( 8 \pi R ^ { 2 } \gamma \right) = 16 \pi \gamma R d R
$$

from which we conclude

$$
\Delta P = \frac { 4 \gamma } { R } .
$$

Of course, one can generalize this to any other kind of energy. For example, if the bubble was charged, it would grow due to electrostatic repulsion, and the new equilibrium radius could also be found using virtual work.
[2] Problem 31 (Kalda). Consider two soap bubbles which have stuck together. The part of the soap film that separates the interior of the first bubble from the outside air has radius of curvature $R$. The part that separates the interior of the second bubble from the outside air has radius of curvature $2 R$. What is the radius of curvature $R _ { \text {sep } }$ of the part which separates the bubbles from each other?

Solution. The key is that the Young-Laplace equation should hold for every point on the surface since the surface tension and pressure should balance for every infinitesimal surface element. The gauge pressures (i.e. pressure above atmospheric pressure) inside the two bubbles are $P _ { 1 } = 4 \gamma / R$, and $P _ { 2 } = 4 \gamma / ( 2 R )$. Thus the pressure difference between the two bubbles is $\Delta P = 2 \gamma / R$, and this must be equal to $4 \gamma / R _ { \text {sep } }$, which implies $R _ { \text {sep } } = 2 R$.

## Remark

So far, we've only applied the Young-Laplace equation to spherical surfaces, which are characterized by a single radius of curvature. More generally, a surface has two principal radii of curvature $R _ { 1 }$ and $R _ { 2 }$ at each point. These are both equal to $R$ for a sphere of radius $R$, while for a cylinder of radius $R$, one is equal to $R$ and the other is infinity. For general surfaces, the Young-Laplace equation is

$$
\Delta P = \gamma \left( \frac { 1 } { R _ { 1 } } + \frac { 1 } { R _ { 2 } } \right)
$$

where the $R _ { i }$ can each be positive or negative, depending on the direction of curvature.
[3] Problem 32 (MPPP 67). When a pipe bursts under pressure, it often splits "lengthwise" instead of "across". (One familiar example is the process of cooking a long, straight sausage.) The two modes of splitting are shown as dotted lines below.
![](../../../figures/solution-ocr/ecc225bec0db2e85250f45fb.jpg)
Explain this observation, assuming the thickness of the sausage skin is uniform, and hence can support a constant surface tension before breaking. (Hint: model the sausage as a cylinder of length


$L$ capped by hemispheres of radius $R \ll L$, and consider the surface tension needed to prevent the two modes of splitting mentioned, once an excess pressure $P$ builds up inside the sausage.)

Solution. Let the pressure difference from inside the sausage to outside be $P$. Cutting it across so the cross section is a circle tells us that the surface tension $\gamma _ { a }$ will exert a force $F = ( 2 \pi r ) \gamma _ { a }$ on each end since $F = \gamma \ell$. Using the trick from example 14, it must balance the force $F = \pi R ^ { 2 } P$, so $\gamma _ { a } = P R / 2$.

Lengthwise, the cross section has perimeter $2 L + 2 \pi R \approx 2 L$. If we apply the trick to each half-cylinder, we find that the pressure force is $F = ( 2 R L ) P$, so balancing forces gives $\gamma _ { L } = P R$. Since this is a greater requirement on the surface tension, the sausage will break lengthwise, as we observe in the kitchen.
