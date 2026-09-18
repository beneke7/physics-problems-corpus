---
id: solution-ocr-nbpho-2023-s-p5
source: nbpho
kind: official_solution_document
language: en
solution_type: official
source_pdf: cache/phoxiv/nbpho/2023_S.pdf
extraction_method: mathpix-pdf-api-md
mapped_problems: [nbpho-2023-force-sensor]
verification_status: promoted
canonical_solution: true
provenance_note: "Mathpix booklet slice; canonical display excludes explicit grading-only material. Full source booklet retained as an archive."
---
5. Force sensor (5 points) - Solution by Päivo Simson, grading schemes by ....
i) (2 points) To find the elongation $\Delta l$, we need to know the curvature radius $r$ of the beam at $x = L / 2$. The torque created by the force $F$ at an arbitrary point $x$ is $F \cdot ( L - x )$. This must be balanced by the bending moment $M ( x )$ of the beam. In the middle of the beam we have

$$
M = \frac { E I } { r } = F \frac { L } { 2 } \Longrightarrow r = \frac { 2 E I } { F L } .
$$

It is easy to see that if the upper wires elongate by $\Delta l$, the lower ones shorten by the same amount. Now we need to relate the curvature radius $r$ with the elongation $\Delta l$.
![](../../../figures/solution-ocr/fef253227a500ce82080ee03.jpg)
The arc length of a circle is $\Delta s = r \Delta \phi$. Knowing this, we have from the above figure

$$
\begin{aligned}
l + \Delta l & = \left( r + \frac { h } { 2 } \right) \Delta \phi , \\
l - \Delta l & = \left( r - \frac { h } { 2 } \right) \Delta \phi .
\end{aligned}
$$

By dividing the above equations, we get an equation for $\Delta l$ that is easily solved:

$$
\frac { l + \Delta l } { l - \Delta l } = \frac { 2 r + h } { 2 r - h } \Longrightarrow \Delta l = \frac { l h } { 2 r } .
$$

Combining this with the expression for $r$ we have

$$
\Delta l = \frac { F L l h } { 4 E I } .
$$
