---
id: solution-ocr-kevin-zhou-t3sol-ex001
source: kevin-zhou
kind: official_solution_document
language: en
solution_type: official
source_pdf: sources/kevin_zhou/site/handouts/T3Sol.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [kevin-zhou-t3-ex001]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
Example 1
The surface of a drop of water makes a contact angle $\theta$ with a solid, as shown.


![](../../../figures/solution-ocr/ba6e4e67aa50850442d1e8f2.jpg)
When $\theta$ is acute, the surface is said to be hydrophilic. If $\theta$ is obtuse, it is hydrophobic. Find an expression for $\theta$ in terms of the relevant surface tensions.

## Solution

If the liquid drop expands outward by $\delta x$, the areas of various surfaces change, as shown.
![](../../../figures/solution-ocr/2e9558b705efa9c30e1f077c.jpg)
The change in energy is

$$
d U \propto \gamma _ { s l } \delta x + \gamma _ { l } \cos \theta \delta x - \gamma _ { s } \delta x
$$

and this must be equal to zero in equilibrium. Thus,

$$
\cos \theta = \frac { \gamma _ { s } - \gamma _ { s l } } { \gamma _ { l } } = \frac { U _ { s l } } { \gamma _ { l } } - 1 .
$$

This is Young's equation. The liquid surface tension $\gamma _ { l }$ must be positive; otherwise the liquid could not exist stably at all, but rather would disperse into gas. Thus, the surface is hydrophilic when $U _ { s l } > \gamma _ { l }$ and hydrophobic when $U _ { s l } < \gamma _ { l }$.

As extreme cases, note that there is no solution for $\theta$ when $U _ { s l } > 2 \gamma _ { l }$. In this limit, the surface is so hydrophilic that the liquid spreads out and coats the entire solid; this is known as perfect wetting. There is also no solution when $U _ { s l } < 0$, in which case the liquid disperses into many tiny nearly spherical drops, each with a tiny area of contact with the solid.

This derivation was in terms of energy, which is typically easier for surface tension. The same result can be derived in terms of forces, but it's more subtle than it looks; the standard derivation in textbooks is wrong. For a clear derivation, see section 9.3 of Wang and Ricardo.
