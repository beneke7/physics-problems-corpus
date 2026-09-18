---
id: solution-ocr-kevin-zhou-m1sol-ex007
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/M1Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-m1-ex007]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 7
A bug flies towards a light with constant speed $v$, always making an angle $\alpha$ with the radial direction. If the initial distance to the lamp is $L$ and the radius of the lamp is $R$, through what total angle does it turn before hitting the lamp?

Solution
In this case we can't avoid solving differential equations, but they're not too hard. It's easiest to work in polar coordinates, with the center of the lamp at the origin. By decomposing the velocity into radial and tangential components, we have

$$
\frac { d r } { d t } = - v \cos \alpha , \quad r \frac { d \theta } { d t } = v \sin \alpha
$$

We only care about the path, not the time-dependence, so we divide these equations to get

$$
\frac { d r } { d \theta } = - \frac { r } { \tan \alpha }
$$

where we manipulated differentials as in P1. Separating and integrating,

$$
- \int _ { L } ^ { R } \frac { d r } { r } = \frac { \Delta \theta } { \tan \alpha }
$$

which tells us that

$$
\Delta \theta = ( \tan \alpha ) \log \frac { L } { R } .
$$

The shape traced out is a logarithmic spiral.
